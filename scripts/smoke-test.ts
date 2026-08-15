#!/usr/bin/env -S deno run --allow-all
/**
 * Smoke-tests each generated language server entrypoint over LSP stdio.
 *
 * Usage: deno run --allow-all scripts/smoke-test.ts [jsr-dir]
 */

const SCRIPT_DIR = import.meta.dirname;
const JSR_DIR = Deno.args[0] ?? `${SCRIPT_DIR}/../jsr`;

const SERVERS = [
  { name: "css", entry: "css/node/cssServerMain.ts" },
  { name: "html", entry: "html/node/htmlServerMain.ts" },
  { name: "json", entry: "json/node/jsonServerMain.ts" },
];

const TIMEOUT_MS = 30_000;

const CRLF_CRLF = new TextEncoder().encode("\r\n\r\n");

function frame(message: unknown): Uint8Array {
  const body = new TextEncoder().encode(JSON.stringify(message));
  const header = new TextEncoder().encode(
    `Content-Length: ${body.length}\r\n\r\n`,
  );
  const out = new Uint8Array(header.length + body.length);
  out.set(header, 0);
  out.set(body, header.length);
  return out;
}

function findHeaderEnd(buffer: Uint8Array): number {
  outer:
  for (let i = 0; i <= buffer.length - CRLF_CRLF.length; i++) {
    for (let j = 0; j < CRLF_CRLF.length; j++) {
      if (buffer[i + j] !== CRLF_CRLF[j]) continue outer;
    }
    return i;
  }
  return -1;
}

function parseContentLength(headerBytes: Uint8Array): number {
  const header = new TextDecoder("latin1").decode(headerBytes);
  for (const line of header.split("\r\n")) {
    const match = /^content-length:\s*(\d+)$/i.exec(line);
    if (match) return Number(match[1]);
  }
  throw new Error(`No Content-Length header found in: ${header}`);
}

function parseMessage(
  buffer: Uint8Array,
): { message: Record<string, unknown>; consumed: number } | null {
  const headerEnd = findHeaderEnd(buffer);
  if (headerEnd < 0) return null;
  const contentLength = parseContentLength(buffer.slice(0, headerEnd));
  const bodyStart = headerEnd + CRLF_CRLF.length;
  if (buffer.length < bodyStart + contentLength) return null;
  const body = new TextDecoder().decode(
    buffer.slice(bodyStart, bodyStart + contentLength),
  );
  return {
    message: JSON.parse(body),
    consumed: bodyStart + contentLength,
  };
}

class MessageReader {
  #buffer = new Uint8Array(0);

  constructor(
    private readonly reader: ReadableStreamDefaultReader<Uint8Array>,
  ) {}

  async read(): Promise<Record<string, unknown>> {
    while (true) {
      const parsed = parseMessage(this.#buffer);
      if (parsed) {
        this.#buffer = this.#buffer.slice(parsed.consumed);
        return parsed.message;
      }

      const chunk = await Promise.race([
        this.reader.read(),
        new Promise<never>((_, reject) =>
          setTimeout(
            () => reject(new Error("timed out waiting for LSP message")),
            TIMEOUT_MS,
          )
        ),
      ]);
      if (chunk.done) {
        throw new Error("server closed stdout before sending a response");
      }
      if (!chunk.value) continue;

      const next = new Uint8Array(this.#buffer.length + chunk.value.length);
      next.set(this.#buffer, 0);
      next.set(chunk.value, this.#buffer.length);
      this.#buffer = next;
    }
  }
}

async function readResponse(
  messages: MessageReader,
  expectedId: number,
): Promise<Record<string, unknown>> {
  while (true) {
    const message = await messages.read();
    if (message.method !== undefined) {
      console.log(`  [notification] ${String(message.method)}`);
      continue;
    }
    if (message.id !== expectedId) {
      throw new Error(
        `expected response id ${expectedId}, got ${JSON.stringify(message.id)}`,
      );
    }
    if (message.error !== undefined) {
      throw new Error(
        `request ${expectedId} failed: ${JSON.stringify(message.error)}`,
      );
    }
    return message;
  }
}

async function smokeTest(server: { name: string; entry: string }) {
  console.log(`==> Smoke testing ${server.name} (${server.entry})`);

  const command = new Deno.Command(Deno.execPath(), {
    args: ["run", "--allow-all", server.entry],
    cwd: JSR_DIR,
    stdin: "piped",
    stdout: "piped",
    stderr: "inherit",
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });

  const child = command.spawn();
  const writer = child.stdin.getWriter();
  const messages = new MessageReader(child.stdout.getReader());

  try {
    await writer.write(
      frame({
        jsonrpc: "2.0",
        id: 1,
        method: "initialize",
        params: {
          processId: Deno.pid,
          rootUri: null,
          capabilities: {},
        },
      }),
    );

    const init = await readResponse(messages, 1);
    const result = init.result as { capabilities?: Record<string, unknown> };
    if (!result || !result.capabilities) {
      throw new Error("initialize response is missing capabilities");
    }
    const capabilityCount = Object.keys(result.capabilities).length;
    console.log(`  initialize OK (${capabilityCount} capabilities)`);

    await writer.write(
      frame({ jsonrpc: "2.0", method: "initialized", params: {} }),
    );

    await writer.write(
      frame({ jsonrpc: "2.0", id: 2, method: "shutdown" }),
    );
    const shutdown = await readResponse(messages, 2);
    if (shutdown.result !== null) {
      throw new Error(
        `expected shutdown result null, got ${JSON.stringify(shutdown.result)}`,
      );
    }
    console.log("  shutdown OK");

    await writer.write(frame({ jsonrpc: "2.0", method: "exit" }));
    await writer.close();

    const status = await child.status;
    if (!status.success) {
      throw new Error(`${server.name} exited with code ${status.code}`);
    }
    console.log(`  exit OK (code ${status.code})`);
  } finally {
    try {
      await writer.close();
    } catch {
      // stdin may already be closed.
    }
    try {
      child.kill("SIGTERM");
    } catch {
      // child may already be gone.
    }
  }
}

async function main() {
  console.log(`Smoke-testing servers in ${JSR_DIR}\n`);
  for (const server of SERVERS) {
    await smokeTest(server);
    console.log("");
  }
  console.log("All smoke tests passed.");
}

await main();
