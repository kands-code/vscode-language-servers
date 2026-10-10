#!/usr/bin/env node
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esmMin = (fn, res, err) => () => {
	if (err) throw err[0];
	try {
		return fn && (res = fn(fn = 0)), res;
	} catch (e) {
		throw err = [e], e;
	}
};
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __toCommonJS = (mod) => __hasOwnProp.call(mod, "module.exports") ? mod["module.exports"] : __copyProps(__defProp({}, "__esModule", { value: true }), mod);
//#endregion
let fs = require("fs");
//#region servers/json/node_modules/vscode-languageserver/lib/common/utils/is.js
var require_is$2 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.boolean = boolean;
	exports.string = string;
	exports.number = number;
	exports.error = error;
	exports.func = func;
	exports.array = array;
	exports.stringArray = stringArray;
	exports.typedArray = typedArray;
	exports.thenable = thenable;
	function boolean(value) {
		return value === true || value === false;
	}
	function string(value) {
		return typeof value === "string" || value instanceof String;
	}
	function number(value) {
		return typeof value === "number" || value instanceof Number;
	}
	function error(value) {
		return value instanceof Error;
	}
	function func(value) {
		return typeof value === "function";
	}
	function array(value) {
		return Array.isArray(value);
	}
	function stringArray(value) {
		return array(value) && value.every((elem) => string(elem));
	}
	function typedArray(value, check) {
		return Array.isArray(value) && value.every(check);
	}
	function thenable(value) {
		return value && func(value.then);
	}
}));
//#endregion
//#region servers/json/node_modules/vscode-jsonrpc/lib/common/is.js
var require_is$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.boolean = boolean;
	exports.string = string;
	exports.number = number;
	exports.error = error;
	exports.func = func;
	exports.array = array;
	exports.stringArray = stringArray;
	function boolean(value) {
		return value === true || value === false;
	}
	function string(value) {
		return typeof value === "string" || value instanceof String;
	}
	function number(value) {
		return typeof value === "number" || value instanceof Number;
	}
	function error(value) {
		return value instanceof Error;
	}
	function func(value) {
		return typeof value === "function";
	}
	function array(value) {
		return Array.isArray(value);
	}
	function stringArray(value) {
		return array(value) && value.every((elem) => string(elem));
	}
}));
//#endregion
//#region servers/json/node_modules/vscode-jsonrpc/lib/common/messages.js
var require_messages$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || (function() {
		var ownKeys = function(o) {
			ownKeys = Object.getOwnPropertyNames || function(o) {
				var ar = [];
				for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
				return ar;
			};
			return ownKeys(o);
		};
		return function(mod) {
			if (mod && mod.__esModule) return mod;
			var result = {};
			if (mod != null) {
				for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
			}
			__setModuleDefault(result, mod);
			return result;
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Message = exports.NotificationType9 = exports.NotificationType8 = exports.NotificationType7 = exports.NotificationType6 = exports.NotificationType5 = exports.NotificationType4 = exports.NotificationType3 = exports.NotificationType2 = exports.NotificationType1 = exports.NotificationType0 = exports.NotificationType = exports.RequestType9 = exports.RequestType8 = exports.RequestType7 = exports.RequestType6 = exports.RequestType5 = exports.RequestType4 = exports.RequestType3 = exports.RequestType2 = exports.RequestType1 = exports.RequestType = exports.RequestType0 = exports.AbstractMessageSignature = exports.ParameterStructures = exports.ResponseError = exports.ErrorCodes = void 0;
	const is = __importStar(require_is$1());
	/**
	* Predefined error codes.
	*/
	var ErrorCodes;
	(function(ErrorCodes) {
		ErrorCodes.ParseError = -32700;
		ErrorCodes.InvalidRequest = -32600;
		ErrorCodes.MethodNotFound = -32601;
		ErrorCodes.InvalidParams = -32602;
		ErrorCodes.InternalError = -32603;
		/**
		* This is the start range of JSON RPC reserved error codes.
		* It doesn't denote a real error code. No application error codes should
		* be defined between the start and end range. For backwards
		* compatibility the `ServerNotInitialized` and the `UnknownErrorCode`
		* are left in the range.
		*
		* @since 3.16.0
		*/
		ErrorCodes.jsonrpcReservedErrorRangeStart = -32099;
		/** @deprecated use  jsonrpcReservedErrorRangeStart */
		ErrorCodes.serverErrorStart = -32099;
		/**
		* An error occurred when write a message to the transport layer.
		*/
		ErrorCodes.MessageWriteError = -32099;
		/**
		* An error occurred when reading a message from the transport layer.
		*/
		ErrorCodes.MessageReadError = -32098;
		/**
		* The connection got disposed or lost and all pending responses got
		* rejected.
		*/
		ErrorCodes.PendingResponseRejected = -32097;
		/**
		* The connection is inactive and a use of it failed.
		*/
		ErrorCodes.ConnectionInactive = -32096;
		/**
		* Error code indicating that a server received a notification or
		* request before the server has received the `initialize` request.
		*/
		ErrorCodes.ServerNotInitialized = -32002;
		ErrorCodes.UnknownErrorCode = -32001;
		/**
		* This is the end range of JSON RPC reserved error codes.
		* It doesn't denote a real error code.
		*
		* @since 3.16.0
		*/
		ErrorCodes.jsonrpcReservedErrorRangeEnd = -32e3;
		/** @deprecated use  jsonrpcReservedErrorRangeEnd */
		ErrorCodes.serverErrorEnd = -32e3;
	})(ErrorCodes || (exports.ErrorCodes = ErrorCodes = {}));
	exports.ResponseError = class ResponseError extends Error {
		code;
		data;
		constructor(code, message, data) {
			super(message);
			this.code = is.number(code) ? code : ErrorCodes.UnknownErrorCode;
			this.data = data;
			Object.setPrototypeOf(this, ResponseError.prototype);
		}
		toJson() {
			const result = {
				code: this.code,
				message: this.message
			};
			if (this.data !== void 0) result.data = this.data;
			return result;
		}
	};
	var ParameterStructures = class ParameterStructures {
		kind;
		/**
		* The parameter structure is automatically inferred on the number of parameters
		* and the parameter type in case of a single param.
		*/
		static auto = new ParameterStructures("auto");
		/**
		* Forces `byPosition` parameter structure. This is useful if you have a single
		* parameter which has a literal type.
		*/
		static byPosition = new ParameterStructures("byPosition");
		/**
		* Forces `byName` parameter structure. This is only useful when having a single
		* parameter. The library will report errors if used with a different number of
		* parameters.
		*/
		static byName = new ParameterStructures("byName");
		constructor(kind) {
			this.kind = kind;
		}
		static is(value) {
			return value === ParameterStructures.auto || value === ParameterStructures.byName || value === ParameterStructures.byPosition;
		}
		toString() {
			return this.kind;
		}
	};
	exports.ParameterStructures = ParameterStructures;
	/**
	* An abstract implementation of a MessageType.
	*/
	var AbstractMessageSignature = class {
		method;
		numberOfParams;
		constructor(method, numberOfParams) {
			this.method = method;
			this.numberOfParams = numberOfParams;
		}
		get parameterStructures() {
			return ParameterStructures.auto;
		}
	};
	exports.AbstractMessageSignature = AbstractMessageSignature;
	/**
	* Classes to type request response pairs
	*/
	var RequestType0 = class extends AbstractMessageSignature {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method) {
			super(method, 0);
		}
	};
	exports.RequestType0 = RequestType0;
	var RequestType = class extends AbstractMessageSignature {
		_parameterStructures;
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method, _parameterStructures = ParameterStructures.auto) {
			super(method, 1);
			this._parameterStructures = _parameterStructures;
		}
		get parameterStructures() {
			return this._parameterStructures;
		}
	};
	exports.RequestType = RequestType;
	var RequestType1 = class extends AbstractMessageSignature {
		_parameterStructures;
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method, _parameterStructures = ParameterStructures.auto) {
			super(method, 1);
			this._parameterStructures = _parameterStructures;
		}
		get parameterStructures() {
			return this._parameterStructures;
		}
	};
	exports.RequestType1 = RequestType1;
	var RequestType2 = class extends AbstractMessageSignature {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method) {
			super(method, 2);
		}
	};
	exports.RequestType2 = RequestType2;
	var RequestType3 = class extends AbstractMessageSignature {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method) {
			super(method, 3);
		}
	};
	exports.RequestType3 = RequestType3;
	var RequestType4 = class extends AbstractMessageSignature {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method) {
			super(method, 4);
		}
	};
	exports.RequestType4 = RequestType4;
	var RequestType5 = class extends AbstractMessageSignature {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method) {
			super(method, 5);
		}
	};
	exports.RequestType5 = RequestType5;
	var RequestType6 = class extends AbstractMessageSignature {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method) {
			super(method, 6);
		}
	};
	exports.RequestType6 = RequestType6;
	var RequestType7 = class extends AbstractMessageSignature {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method) {
			super(method, 7);
		}
	};
	exports.RequestType7 = RequestType7;
	var RequestType8 = class extends AbstractMessageSignature {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method) {
			super(method, 8);
		}
	};
	exports.RequestType8 = RequestType8;
	var RequestType9 = class extends AbstractMessageSignature {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method) {
			super(method, 9);
		}
	};
	exports.RequestType9 = RequestType9;
	var NotificationType = class extends AbstractMessageSignature {
		_parameterStructures;
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method, _parameterStructures = ParameterStructures.auto) {
			super(method, 1);
			this._parameterStructures = _parameterStructures;
		}
		get parameterStructures() {
			return this._parameterStructures;
		}
	};
	exports.NotificationType = NotificationType;
	var NotificationType0 = class extends AbstractMessageSignature {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method) {
			super(method, 0);
		}
	};
	exports.NotificationType0 = NotificationType0;
	var NotificationType1 = class extends AbstractMessageSignature {
		_parameterStructures;
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method, _parameterStructures = ParameterStructures.auto) {
			super(method, 1);
			this._parameterStructures = _parameterStructures;
		}
		get parameterStructures() {
			return this._parameterStructures;
		}
	};
	exports.NotificationType1 = NotificationType1;
	var NotificationType2 = class extends AbstractMessageSignature {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method) {
			super(method, 2);
		}
	};
	exports.NotificationType2 = NotificationType2;
	var NotificationType3 = class extends AbstractMessageSignature {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method) {
			super(method, 3);
		}
	};
	exports.NotificationType3 = NotificationType3;
	var NotificationType4 = class extends AbstractMessageSignature {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method) {
			super(method, 4);
		}
	};
	exports.NotificationType4 = NotificationType4;
	var NotificationType5 = class extends AbstractMessageSignature {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method) {
			super(method, 5);
		}
	};
	exports.NotificationType5 = NotificationType5;
	var NotificationType6 = class extends AbstractMessageSignature {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method) {
			super(method, 6);
		}
	};
	exports.NotificationType6 = NotificationType6;
	var NotificationType7 = class extends AbstractMessageSignature {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method) {
			super(method, 7);
		}
	};
	exports.NotificationType7 = NotificationType7;
	var NotificationType8 = class extends AbstractMessageSignature {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method) {
			super(method, 8);
		}
	};
	exports.NotificationType8 = NotificationType8;
	var NotificationType9 = class extends AbstractMessageSignature {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		_;
		constructor(method) {
			super(method, 9);
		}
	};
	exports.NotificationType9 = NotificationType9;
	var Message;
	(function(Message) {
		/**
		* Tests if the given message is a request message
		*/
		function isRequest(message) {
			const candidate = message;
			return candidate && is.string(candidate.method) && (is.string(candidate.id) || is.number(candidate.id));
		}
		Message.isRequest = isRequest;
		/**
		* Tests if the given message is a notification message
		*/
		function isNotification(message) {
			const candidate = message;
			return candidate && is.string(candidate.method) && message.id === void 0;
		}
		Message.isNotification = isNotification;
		/**
		* Tests if the given message is a response message
		*/
		function isResponse(message) {
			const candidate = message;
			return candidate && (candidate.result !== void 0 || !!candidate.error) && (is.string(candidate.id) || is.number(candidate.id) || candidate.id === null);
		}
		Message.isResponse = isResponse;
	})(Message || (exports.Message = Message = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-jsonrpc/lib/common/linkedMap.js
var require_linkedMap = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LRUCache = exports.LinkedMap = exports.Touch = void 0;
	var Touch;
	(function(Touch) {
		Touch.None = 0;
		Touch.First = 1;
		Touch.AsOld = Touch.First;
		Touch.Last = 2;
		Touch.AsNew = Touch.Last;
	})(Touch || (exports.Touch = Touch = {}));
	var LinkedMap = class {
		[Symbol.toStringTag] = "LinkedMap";
		_map;
		_head;
		_tail;
		_size;
		_state;
		constructor() {
			this._map = /* @__PURE__ */ new Map();
			this._head = void 0;
			this._tail = void 0;
			this._size = 0;
			this._state = 0;
		}
		clear() {
			this._map.clear();
			this._head = void 0;
			this._tail = void 0;
			this._size = 0;
			this._state++;
		}
		isEmpty() {
			return !this._head && !this._tail;
		}
		get size() {
			return this._size;
		}
		get first() {
			return this._head?.value;
		}
		get last() {
			return this._tail?.value;
		}
		before(key) {
			const item = this._map.get(key);
			return item ? item.previous?.value : void 0;
		}
		after(key) {
			const item = this._map.get(key);
			return item ? item.next?.value : void 0;
		}
		has(key) {
			return this._map.has(key);
		}
		get(key, touch = Touch.None) {
			const item = this._map.get(key);
			if (!item) return;
			if (touch !== Touch.None) this.touch(item, touch);
			return item.value;
		}
		set(key, value, touch = Touch.None) {
			let item = this._map.get(key);
			if (item) {
				item.value = value;
				if (touch !== Touch.None) this.touch(item, touch);
			} else {
				item = {
					key,
					value,
					next: void 0,
					previous: void 0
				};
				switch (touch) {
					case Touch.None:
						this.addItemLast(item);
						break;
					case Touch.First:
						this.addItemFirst(item);
						break;
					case Touch.Last:
						this.addItemLast(item);
						break;
					default: this.addItemLast(item);
				}
				this._map.set(key, item);
				this._size++;
			}
			return this;
		}
		delete(key) {
			return !!this.remove(key);
		}
		remove(key) {
			const item = this._map.get(key);
			if (!item) return;
			this._map.delete(key);
			this.removeItem(item);
			this._size--;
			return item.value;
		}
		shift() {
			if (!this._head && !this._tail) return;
			if (!this._head || !this._tail) throw new Error("Invalid list");
			const item = this._head;
			this._map.delete(item.key);
			this.removeItem(item);
			this._size--;
			return item.value;
		}
		forEach(callbackfn, thisArg) {
			const state = this._state;
			let current = this._head;
			while (current) {
				if (thisArg) callbackfn.bind(thisArg)(current.value, current.key, this);
				else callbackfn(current.value, current.key, this);
				if (this._state !== state) throw new Error(`LinkedMap got modified during iteration.`);
				current = current.next;
			}
		}
		keys() {
			const state = this._state;
			let current = this._head;
			const iterator = {
				[Symbol.iterator]: () => {
					return iterator;
				},
				next: () => {
					if (this._state !== state) throw new Error(`LinkedMap got modified during iteration.`);
					if (current) {
						const result = {
							value: current.key,
							done: false
						};
						current = current.next;
						return result;
					} else return {
						value: void 0,
						done: true
					};
				}
			};
			return iterator;
		}
		values() {
			const state = this._state;
			let current = this._head;
			const iterator = {
				[Symbol.iterator]: () => {
					return iterator;
				},
				next: () => {
					if (this._state !== state) throw new Error(`LinkedMap got modified during iteration.`);
					if (current) {
						const result = {
							value: current.value,
							done: false
						};
						current = current.next;
						return result;
					} else return {
						value: void 0,
						done: true
					};
				}
			};
			return iterator;
		}
		entries() {
			const state = this._state;
			let current = this._head;
			const iterator = {
				[Symbol.iterator]: () => {
					return iterator;
				},
				next: () => {
					if (this._state !== state) throw new Error(`LinkedMap got modified during iteration.`);
					if (current) {
						const result = {
							value: [current.key, current.value],
							done: false
						};
						current = current.next;
						return result;
					} else return {
						value: void 0,
						done: true
					};
				}
			};
			return iterator;
		}
		[Symbol.iterator]() {
			return this.entries();
		}
		trimOld(newSize) {
			if (newSize >= this.size) return;
			if (newSize === 0) {
				this.clear();
				return;
			}
			let current = this._head;
			let currentSize = this.size;
			while (current && currentSize > newSize) {
				this._map.delete(current.key);
				current = current.next;
				currentSize--;
			}
			this._head = current;
			this._size = currentSize;
			if (current) current.previous = void 0;
			this._state++;
		}
		addItemFirst(item) {
			if (!this._head && !this._tail) this._tail = item;
			else if (!this._head) throw new Error("Invalid list");
			else {
				item.next = this._head;
				this._head.previous = item;
			}
			this._head = item;
			this._state++;
		}
		addItemLast(item) {
			if (!this._head && !this._tail) this._head = item;
			else if (!this._tail) throw new Error("Invalid list");
			else {
				item.previous = this._tail;
				this._tail.next = item;
			}
			this._tail = item;
			this._state++;
		}
		removeItem(item) {
			if (item === this._head && item === this._tail) {
				this._head = void 0;
				this._tail = void 0;
			} else if (item === this._head) {
				if (!item.next) throw new Error("Invalid list");
				item.next.previous = void 0;
				this._head = item.next;
			} else if (item === this._tail) {
				if (!item.previous) throw new Error("Invalid list");
				item.previous.next = void 0;
				this._tail = item.previous;
			} else {
				const next = item.next;
				const previous = item.previous;
				if (!next || !previous) throw new Error("Invalid list");
				next.previous = previous;
				previous.next = next;
			}
			item.next = void 0;
			item.previous = void 0;
			this._state++;
		}
		touch(item, touch) {
			if (!this._head || !this._tail) throw new Error("Invalid list");
			if (touch !== Touch.First && touch !== Touch.Last) return;
			if (touch === Touch.First) {
				if (item === this._head) return;
				const next = item.next;
				const previous = item.previous;
				if (item === this._tail) {
					previous.next = void 0;
					this._tail = previous;
				} else {
					next.previous = previous;
					previous.next = next;
				}
				item.previous = void 0;
				item.next = this._head;
				this._head.previous = item;
				this._head = item;
				this._state++;
			} else if (touch === Touch.Last) {
				if (item === this._tail) return;
				const next = item.next;
				const previous = item.previous;
				if (item === this._head) {
					next.previous = void 0;
					this._head = next;
				} else {
					next.previous = previous;
					previous.next = next;
				}
				item.next = void 0;
				item.previous = this._tail;
				this._tail.next = item;
				this._tail = item;
				this._state++;
			}
		}
		toJSON() {
			const data = [];
			this.forEach((value, key) => {
				data.push([key, value]);
			});
			return data;
		}
		fromJSON(data) {
			this.clear();
			for (const [key, value] of data) this.set(key, value);
		}
	};
	exports.LinkedMap = LinkedMap;
	var LRUCache = class extends LinkedMap {
		_limit;
		_ratio;
		constructor(limit, ratio = 1) {
			super();
			this._limit = limit;
			this._ratio = Math.min(Math.max(0, ratio), 1);
		}
		get limit() {
			return this._limit;
		}
		set limit(limit) {
			this._limit = limit;
			this.checkTrim();
		}
		get ratio() {
			return this._ratio;
		}
		set ratio(ratio) {
			this._ratio = Math.min(Math.max(0, ratio), 1);
			this.checkTrim();
		}
		get(key, touch = Touch.AsNew) {
			return super.get(key, touch);
		}
		peek(key) {
			return super.get(key, Touch.None);
		}
		set(key, value) {
			super.set(key, value, Touch.Last);
			this.checkTrim();
			return this;
		}
		checkTrim() {
			if (this.size > this._limit) this.trimOld(Math.round(this._limit * this._ratio));
		}
	};
	exports.LRUCache = LRUCache;
}));
//#endregion
//#region servers/json/node_modules/vscode-jsonrpc/lib/common/disposable.js
var require_disposable = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Disposable = void 0;
	var Disposable;
	(function(Disposable) {
		function create(func) {
			return { dispose: func };
		}
		Disposable.create = create;
	})(Disposable || (exports.Disposable = Disposable = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-jsonrpc/lib/common/ral.js
var require_ral = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	let _ral;
	function RAL() {
		if (_ral === void 0) throw new Error(`No runtime abstraction layer installed`);
		return _ral;
	}
	(function(RAL) {
		function install(ral) {
			if (ral === void 0) throw new Error(`No runtime abstraction layer provided`);
			_ral = ral;
		}
		RAL.install = install;
	})(RAL || (RAL = {}));
	exports.default = RAL;
}));
//#endregion
//#region servers/json/node_modules/vscode-jsonrpc/lib/common/events.js
var require_events = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Emitter = exports.Event = void 0;
	const ral_1 = __importDefault(require_ral());
	var Event;
	(function(Event) {
		const _disposable = { dispose() {} };
		Event.None = function() {
			return _disposable;
		};
	})(Event || (exports.Event = Event = {}));
	var CallbackList = class {
		_callbacks;
		_contexts;
		add(callback, context = null, bucket) {
			if (!this._callbacks) {
				this._callbacks = [];
				this._contexts = [];
			}
			this._callbacks.push(callback);
			this._contexts.push(context);
			if (Array.isArray(bucket)) bucket.push({ dispose: () => this.remove(callback, context) });
		}
		remove(callback, context = null) {
			if (!this._callbacks) return;
			let foundCallbackWithDifferentContext = false;
			for (let i = 0, len = this._callbacks.length; i < len; i++) if (this._callbacks[i] === callback) {
				if (this._contexts[i] === context) {
					this._callbacks.splice(i, 1);
					this._contexts.splice(i, 1);
					return;
				} else foundCallbackWithDifferentContext = true;
			}
			if (foundCallbackWithDifferentContext) throw new Error("When adding a listener with a context, you should remove it with the same context");
		}
		invoke(...args) {
			if (!this._callbacks) return [];
			const ret = [], callbacks = this._callbacks.slice(0), contexts = this._contexts.slice(0);
			for (let i = 0, len = callbacks.length; i < len; i++) try {
				ret.push(callbacks[i].apply(contexts[i], args));
			} catch (e) {
				(0, ral_1.default)().console.error(e);
			}
			return ret;
		}
		isEmpty() {
			return !this._callbacks || this._callbacks.length === 0;
		}
		dispose() {
			this._callbacks = void 0;
			this._contexts = void 0;
		}
	};
	exports.Emitter = class Emitter {
		_options;
		static _noop = function() {};
		_event;
		_callbacks;
		constructor(_options) {
			this._options = _options;
		}
		/**
		* For the public to allow to subscribe
		* to events from this Emitter
		*/
		get event() {
			if (!this._event) this._event = (listener, thisArgs, disposables) => {
				if (!this._callbacks) this._callbacks = new CallbackList();
				if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) this._options.onFirstListenerAdd(this);
				this._callbacks.add(listener, thisArgs);
				const result = { dispose: () => {
					if (!this._callbacks) return;
					this._callbacks.remove(listener, thisArgs);
					result.dispose = Emitter._noop;
					if (this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) this._options.onLastListenerRemove(this);
				} };
				if (Array.isArray(disposables)) disposables.push(result);
				return result;
			};
			return this._event;
		}
		/**
		* To be kept private to fire an event to
		* subscribers
		*/
		fire(event) {
			if (this._callbacks) this._callbacks.invoke.call(this._callbacks, event);
		}
		dispose() {
			if (this._callbacks) {
				this._callbacks.dispose();
				this._callbacks = void 0;
			}
		}
	};
}));
//#endregion
//#region servers/json/node_modules/vscode-jsonrpc/lib/common/cancellation.js
var require_cancellation = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || (function() {
		var ownKeys = function(o) {
			ownKeys = Object.getOwnPropertyNames || function(o) {
				var ar = [];
				for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
				return ar;
			};
			return ownKeys(o);
		};
		return function(mod) {
			if (mod && mod.__esModule) return mod;
			var result = {};
			if (mod != null) {
				for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
			}
			__setModuleDefault(result, mod);
			return result;
		};
	})();
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.CancellationTokenSource = exports.CancellationToken = void 0;
	const ral_1 = __importDefault(require_ral());
	const Is = __importStar(require_is$1());
	const events_1 = require_events();
	var CancellationToken;
	(function(CancellationToken) {
		CancellationToken.None = Object.freeze({
			isCancellationRequested: false,
			onCancellationRequested: events_1.Event.None
		});
		CancellationToken.Cancelled = Object.freeze({
			isCancellationRequested: true,
			onCancellationRequested: events_1.Event.None
		});
		function is(value) {
			const candidate = value;
			return candidate && (candidate === CancellationToken.None || candidate === CancellationToken.Cancelled || Is.boolean(candidate.isCancellationRequested) && !!candidate.onCancellationRequested);
		}
		CancellationToken.is = is;
	})(CancellationToken || (exports.CancellationToken = CancellationToken = {}));
	const shortcutEvent = Object.freeze(function(callback, context) {
		const handle = (0, ral_1.default)().timer.setTimeout(callback.bind(context), 0);
		return { dispose() {
			handle.dispose();
		} };
	});
	var MutableToken = class {
		_isCancelled = false;
		_emitter;
		cancel() {
			if (!this._isCancelled) {
				this._isCancelled = true;
				if (this._emitter) {
					this._emitter.fire(void 0);
					this.dispose();
				}
			}
		}
		get isCancellationRequested() {
			return this._isCancelled;
		}
		get onCancellationRequested() {
			if (this._isCancelled) return shortcutEvent;
			if (!this._emitter) this._emitter = new events_1.Emitter();
			return this._emitter.event;
		}
		dispose() {
			if (this._emitter) {
				this._emitter.dispose();
				this._emitter = void 0;
			}
		}
	};
	var CancellationTokenSource = class {
		_token;
		get token() {
			if (!this._token) this._token = new MutableToken();
			return this._token;
		}
		cancel() {
			if (!this._token) this._token = CancellationToken.Cancelled;
			else this._token.cancel();
		}
		dispose() {
			if (!this._token) this._token = CancellationToken.None;
			else if (this._token instanceof MutableToken) this._token.dispose();
		}
	};
	exports.CancellationTokenSource = CancellationTokenSource;
}));
//#endregion
//#region servers/json/node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js
var require_sharedArrayCancellation = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SharedArrayReceiverStrategy = exports.SharedArraySenderStrategy = void 0;
	const cancellation_1 = require_cancellation();
	var CancellationState;
	(function(CancellationState) {
		CancellationState.Continue = 0;
		CancellationState.Cancelled = 1;
	})(CancellationState || (CancellationState = {}));
	var SharedArraySenderStrategy = class {
		buffers;
		constructor() {
			this.buffers = /* @__PURE__ */ new Map();
		}
		enableCancellation(request) {
			if (request.id === null) return;
			const buffer = new SharedArrayBuffer(4);
			const data = new Int32Array(buffer, 0, 1);
			data[0] = CancellationState.Continue;
			this.buffers.set(request.id, buffer);
			request.$cancellationData = buffer;
		}
		async sendCancellation(_conn, id) {
			const buffer = this.buffers.get(id);
			if (buffer === void 0) return;
			const data = new Int32Array(buffer, 0, 1);
			Atomics.store(data, 0, CancellationState.Cancelled);
		}
		cleanup(id) {
			this.buffers.delete(id);
		}
		dispose() {
			this.buffers.clear();
		}
	};
	exports.SharedArraySenderStrategy = SharedArraySenderStrategy;
	var SharedArrayBufferCancellationToken = class {
		data;
		constructor(buffer) {
			this.data = new Int32Array(buffer, 0, 1);
		}
		get isCancellationRequested() {
			return Atomics.load(this.data, 0) === CancellationState.Cancelled;
		}
		get onCancellationRequested() {
			throw new Error(`Cancellation over SharedArrayBuffer doesn't support cancellation events`);
		}
	};
	var SharedArrayBufferCancellationTokenSource = class {
		token;
		constructor(buffer) {
			this.token = new SharedArrayBufferCancellationToken(buffer);
		}
		cancel() {}
		dispose() {}
	};
	var SharedArrayReceiverStrategy = class {
		kind = "request";
		createCancellationTokenSource(request) {
			const buffer = request.$cancellationData;
			if (buffer === void 0) return new cancellation_1.CancellationTokenSource();
			return new SharedArrayBufferCancellationTokenSource(buffer);
		}
	};
	exports.SharedArrayReceiverStrategy = SharedArrayReceiverStrategy;
}));
//#endregion
//#region servers/json/node_modules/vscode-jsonrpc/lib/common/semaphore.js
var require_semaphore = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Semaphore = void 0;
	const ral_1 = __importDefault(require_ral());
	var Semaphore = class {
		_capacity;
		_active;
		_waiting;
		constructor(capacity = 1) {
			if (capacity <= 0) throw new Error("Capacity must be greater than 0");
			this._capacity = capacity;
			this._active = 0;
			this._waiting = [];
		}
		lock(thunk) {
			return new Promise((resolve, reject) => {
				this._waiting.push({
					thunk,
					resolve,
					reject
				});
				this.runNext();
			});
		}
		get active() {
			return this._active;
		}
		runNext() {
			if (this._waiting.length === 0 || this._active === this._capacity) return;
			(0, ral_1.default)().timer.setImmediate(() => this.doRunNext());
		}
		doRunNext() {
			if (this._waiting.length === 0 || this._active === this._capacity) return;
			const next = this._waiting.shift();
			this._active++;
			if (this._active > this._capacity) throw new Error(`Too many thunks active`);
			try {
				const result = next.thunk();
				if (result instanceof Promise) result.then((value) => {
					this._active--;
					next.resolve(value);
					this.runNext();
				}, (err) => {
					this._active--;
					next.reject(err);
					this.runNext();
				});
				else {
					this._active--;
					next.resolve(result);
					this.runNext();
				}
			} catch (err) {
				this._active--;
				next.reject(err);
				this.runNext();
			}
		}
	};
	exports.Semaphore = Semaphore;
}));
//#endregion
//#region servers/json/node_modules/vscode-jsonrpc/lib/common/messageReader.js
var require_messageReader = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || (function() {
		var ownKeys = function(o) {
			ownKeys = Object.getOwnPropertyNames || function(o) {
				var ar = [];
				for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
				return ar;
			};
			return ownKeys(o);
		};
		return function(mod) {
			if (mod && mod.__esModule) return mod;
			var result = {};
			if (mod != null) {
				for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
			}
			__setModuleDefault(result, mod);
			return result;
		};
	})();
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ReadableStreamMessageReader = exports.AbstractMessageReader = exports.MessageReader = void 0;
	const ral_1 = __importDefault(require_ral());
	const Is = __importStar(require_is$1());
	const events_1 = require_events();
	const semaphore_1 = require_semaphore();
	var MessageReader;
	(function(MessageReader) {
		function is(value) {
			const candidate = value;
			return candidate && Is.func(candidate.listen) && Is.func(candidate.dispose) && Is.func(candidate.onError) && Is.func(candidate.onClose) && Is.func(candidate.onPartialMessage);
		}
		MessageReader.is = is;
	})(MessageReader || (exports.MessageReader = MessageReader = {}));
	var AbstractMessageReader = class {
		errorEmitter;
		closeEmitter;
		partialMessageEmitter;
		constructor() {
			this.errorEmitter = new events_1.Emitter();
			this.closeEmitter = new events_1.Emitter();
			this.partialMessageEmitter = new events_1.Emitter();
		}
		dispose() {
			this.errorEmitter.dispose();
			this.closeEmitter.dispose();
			this.partialMessageEmitter.dispose();
		}
		get onError() {
			return this.errorEmitter.event;
		}
		fireError(error) {
			this.errorEmitter.fire(this.asError(error));
		}
		get onClose() {
			return this.closeEmitter.event;
		}
		fireClose() {
			this.closeEmitter.fire(void 0);
		}
		get onPartialMessage() {
			return this.partialMessageEmitter.event;
		}
		firePartialMessage(info) {
			this.partialMessageEmitter.fire(info);
		}
		asError(error) {
			if (error instanceof Error) return error;
			else return /* @__PURE__ */ new Error(`Reader received error. Reason: ${Is.string(error.message) ? error.message : "unknown"}`);
		}
	};
	exports.AbstractMessageReader = AbstractMessageReader;
	var ResolvedMessageReaderOptions;
	(function(ResolvedMessageReaderOptions) {
		function fromOptions(options) {
			let charset;
			let contentDecoder;
			const contentDecoders = /* @__PURE__ */ new Map();
			let contentTypeDecoder;
			const contentTypeDecoders = /* @__PURE__ */ new Map();
			if (options === void 0 || typeof options === "string") charset = options ?? "utf-8";
			else {
				charset = options.charset ?? "utf-8";
				if (options.contentDecoder !== void 0) {
					contentDecoder = options.contentDecoder;
					contentDecoders.set(contentDecoder.name, contentDecoder);
				}
				if (options.contentDecoders !== void 0) for (const decoder of options.contentDecoders) contentDecoders.set(decoder.name, decoder);
				if (options.contentTypeDecoder !== void 0) {
					contentTypeDecoder = options.contentTypeDecoder;
					contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
				}
				if (options.contentTypeDecoders !== void 0) for (const decoder of options.contentTypeDecoders) contentTypeDecoders.set(decoder.name, decoder);
			}
			if (contentTypeDecoder === void 0) {
				contentTypeDecoder = (0, ral_1.default)().applicationJson.decoder;
				contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
			}
			return {
				charset,
				contentDecoder,
				contentDecoders,
				contentTypeDecoder,
				contentTypeDecoders
			};
		}
		ResolvedMessageReaderOptions.fromOptions = fromOptions;
	})(ResolvedMessageReaderOptions || (ResolvedMessageReaderOptions = {}));
	var ReadableStreamMessageReader = class extends AbstractMessageReader {
		readable;
		options;
		callback;
		nextMessageLength;
		messageToken;
		buffer;
		partialMessageTimer;
		_partialMessageTimeout;
		readSemaphore;
		constructor(readable, options) {
			super();
			this.readable = readable;
			this.options = ResolvedMessageReaderOptions.fromOptions(options);
			this.buffer = (0, ral_1.default)().messageBuffer.create(this.options.charset);
			this._partialMessageTimeout = 1e4;
			this.nextMessageLength = -1;
			this.messageToken = 0;
			this.readSemaphore = new semaphore_1.Semaphore(1);
		}
		set partialMessageTimeout(timeout) {
			this._partialMessageTimeout = timeout;
		}
		get partialMessageTimeout() {
			return this._partialMessageTimeout;
		}
		listen(callback) {
			this.nextMessageLength = -1;
			this.messageToken = 0;
			this.partialMessageTimer = void 0;
			this.callback = callback;
			const result = this.readable.onData((data) => {
				this.onData(data);
			});
			this.readable.onError((error) => this.fireError(error));
			this.readable.onClose(() => this.fireClose());
			return result;
		}
		onData(data) {
			try {
				this.buffer.append(data);
				while (true) {
					if (this.nextMessageLength === -1) {
						const headers = this.buffer.tryReadHeaders(true);
						if (!headers) return;
						const contentLength = headers.get("content-length");
						if (!contentLength) {
							this.fireError(/* @__PURE__ */ new Error(`Header must provide a Content-Length property.\n${JSON.stringify(Object.fromEntries(headers))}`));
							return;
						}
						const length = parseInt(contentLength);
						if (isNaN(length)) {
							this.fireError(/* @__PURE__ */ new Error(`Content-Length value must be a number. Got ${contentLength}`));
							return;
						}
						this.nextMessageLength = length;
					}
					const body = this.buffer.tryReadBody(this.nextMessageLength);
					if (body === void 0) {
						/** We haven't received the full message yet. */
						this.setPartialMessageTimer();
						return;
					}
					this.clearPartialMessageTimer();
					this.nextMessageLength = -1;
					this.readSemaphore.lock(async () => {
						const bytes = this.options.contentDecoder !== void 0 ? await this.options.contentDecoder.decode(body) : body;
						const message = await this.options.contentTypeDecoder.decode(bytes, this.options);
						this.callback(message);
					}).catch((error) => {
						this.fireError(error);
					});
				}
			} catch (error) {
				this.fireError(error);
			}
		}
		clearPartialMessageTimer() {
			if (this.partialMessageTimer) {
				this.partialMessageTimer.dispose();
				this.partialMessageTimer = void 0;
			}
		}
		setPartialMessageTimer() {
			this.clearPartialMessageTimer();
			if (this._partialMessageTimeout <= 0) return;
			this.partialMessageTimer = (0, ral_1.default)().timer.setTimeout((token, timeout) => {
				this.partialMessageTimer = void 0;
				if (token === this.messageToken) {
					this.firePartialMessage({
						messageToken: token,
						waitingTime: timeout
					});
					this.setPartialMessageTimer();
				}
			}, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
		}
	};
	exports.ReadableStreamMessageReader = ReadableStreamMessageReader;
}));
//#endregion
//#region servers/json/node_modules/vscode-jsonrpc/lib/common/messageWriter.js
var require_messageWriter = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || (function() {
		var ownKeys = function(o) {
			ownKeys = Object.getOwnPropertyNames || function(o) {
				var ar = [];
				for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
				return ar;
			};
			return ownKeys(o);
		};
		return function(mod) {
			if (mod && mod.__esModule) return mod;
			var result = {};
			if (mod != null) {
				for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
			}
			__setModuleDefault(result, mod);
			return result;
		};
	})();
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.WriteableStreamMessageWriter = exports.AbstractMessageWriter = exports.MessageWriter = void 0;
	const ral_1 = __importDefault(require_ral());
	const Is = __importStar(require_is$1());
	const semaphore_1 = require_semaphore();
	const events_1 = require_events();
	const ContentLength = "Content-Length: ";
	const CRLF = "\r\n";
	var MessageWriter;
	(function(MessageWriter) {
		function is(value) {
			const candidate = value;
			return candidate && Is.func(candidate.dispose) && Is.func(candidate.onClose) && Is.func(candidate.onError) && Is.func(candidate.write);
		}
		MessageWriter.is = is;
	})(MessageWriter || (exports.MessageWriter = MessageWriter = {}));
	var AbstractMessageWriter = class {
		errorEmitter;
		closeEmitter;
		constructor() {
			this.errorEmitter = new events_1.Emitter();
			this.closeEmitter = new events_1.Emitter();
		}
		dispose() {
			this.errorEmitter.dispose();
			this.closeEmitter.dispose();
		}
		get onError() {
			return this.errorEmitter.event;
		}
		fireError(error, message, count) {
			this.errorEmitter.fire([
				this.asError(error),
				message,
				count
			]);
		}
		get onClose() {
			return this.closeEmitter.event;
		}
		fireClose() {
			this.closeEmitter.fire(void 0);
		}
		asError(error) {
			if (error instanceof Error) return error;
			else return /* @__PURE__ */ new Error(`Writer received error. Reason: ${Is.string(error.message) ? error.message : "unknown"}`);
		}
	};
	exports.AbstractMessageWriter = AbstractMessageWriter;
	var ResolvedMessageWriterOptions;
	(function(ResolvedMessageWriterOptions) {
		function fromOptions(options) {
			if (options === void 0 || typeof options === "string") return {
				charset: options ?? "utf-8",
				contentTypeEncoder: (0, ral_1.default)().applicationJson.encoder
			};
			else return {
				charset: options.charset ?? "utf-8",
				contentEncoder: options.contentEncoder,
				contentTypeEncoder: options.contentTypeEncoder ?? (0, ral_1.default)().applicationJson.encoder
			};
		}
		ResolvedMessageWriterOptions.fromOptions = fromOptions;
	})(ResolvedMessageWriterOptions || (ResolvedMessageWriterOptions = {}));
	var WriteableStreamMessageWriter = class extends AbstractMessageWriter {
		writable;
		options;
		errorCount;
		writeSemaphore;
		constructor(writable, options) {
			super();
			this.writable = writable;
			this.options = ResolvedMessageWriterOptions.fromOptions(options);
			this.errorCount = 0;
			this.writeSemaphore = new semaphore_1.Semaphore(1);
			this.writable.onError((error) => this.fireError(error));
			this.writable.onClose(() => this.fireClose());
		}
		async write(msg) {
			return this.writeSemaphore.lock(async () => {
				return this.options.contentTypeEncoder.encode(msg, this.options).then((buffer) => {
					if (this.options.contentEncoder !== void 0) return this.options.contentEncoder.encode(buffer);
					else return buffer;
				}).then((buffer) => {
					const headers = [];
					headers.push(ContentLength, buffer.byteLength.toString(), CRLF);
					headers.push(CRLF);
					return this.doWrite(msg, headers, buffer);
				}, (error) => {
					this.fireError(error);
					throw error;
				});
			});
		}
		async doWrite(msg, headers, data) {
			try {
				await this.writable.write(headers.join(""), "ascii");
				return this.writable.write(data);
			} catch (error) {
				this.handleError(error, msg);
				return Promise.reject(error);
			}
		}
		handleError(error, msg) {
			this.errorCount++;
			this.fireError(error, msg, this.errorCount);
		}
		end() {
			this.writable.end();
		}
	};
	exports.WriteableStreamMessageWriter = WriteableStreamMessageWriter;
}));
//#endregion
//#region servers/json/node_modules/vscode-jsonrpc/lib/common/messageBuffer.js
var require_messageBuffer = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AbstractMessageBuffer = void 0;
	const CR = 13;
	const LF = 10;
	const CRLF = "\r\n";
	var AbstractMessageBuffer = class {
		_encoding;
		_chunks;
		_totalLength;
		constructor(encoding = "utf-8") {
			this._encoding = encoding;
			this._chunks = [];
			this._totalLength = 0;
		}
		get encoding() {
			return this._encoding;
		}
		append(chunk) {
			const toAppend = typeof chunk === "string" ? this.fromString(chunk, this._encoding) : chunk;
			this._chunks.push(toAppend);
			this._totalLength += toAppend.byteLength;
		}
		tryReadHeaders(lowerCaseKeys = false) {
			if (this._chunks.length === 0) return;
			let state = 0;
			let chunkIndex = 0;
			let offset = 0;
			let chunkBytesRead = 0;
			row: while (chunkIndex < this._chunks.length) {
				const chunk = this._chunks[chunkIndex];
				offset = 0;
				while (offset < chunk.length) {
					switch (chunk[offset]) {
						case CR:
							switch (state) {
								case 0:
									state = 1;
									break;
								case 2:
									state = 3;
									break;
								default: state = 0;
							}
							break;
						case LF:
							switch (state) {
								case 1:
									state = 2;
									break;
								case 3:
									state = 4;
									offset++;
									break row;
								default: state = 0;
							}
							break;
						default: state = 0;
					}
					offset++;
				}
				chunkBytesRead += chunk.byteLength;
				chunkIndex++;
			}
			if (state !== 4) return;
			const buffer = this._read(chunkBytesRead + offset);
			const result = /* @__PURE__ */ new Map();
			const headers = this.toString(buffer, "ascii").split(CRLF);
			if (headers.length < 2) return result;
			for (let i = 0; i < headers.length - 2; i++) {
				const header = headers[i];
				const index = header.indexOf(":");
				if (index === -1) throw new Error(`Message header must separate key and value using ':'\n${header}`);
				const key = header.substr(0, index);
				const value = header.substr(index + 1).trim();
				result.set(lowerCaseKeys ? key.toLowerCase() : key, value);
			}
			return result;
		}
		tryReadBody(length) {
			if (this._totalLength < length) return;
			return this._read(length);
		}
		get numberOfBytes() {
			return this._totalLength;
		}
		_read(byteCount) {
			if (byteCount === 0) return this.emptyBuffer();
			if (byteCount > this._totalLength) throw new Error(`Cannot read so many bytes!`);
			if (this._chunks[0].byteLength === byteCount) {
				const chunk = this._chunks[0];
				this._chunks.shift();
				this._totalLength -= byteCount;
				return this.asNative(chunk);
			}
			if (this._chunks[0].byteLength > byteCount) {
				const chunk = this._chunks[0];
				const result = this.asNative(chunk, byteCount);
				this._chunks[0] = chunk.slice(byteCount);
				this._totalLength -= byteCount;
				return result;
			}
			const result = this.allocNative(byteCount);
			let resultOffset = 0;
			const chunkIndex = 0;
			while (byteCount > 0) {
				const chunk = this._chunks[chunkIndex];
				if (chunk.byteLength > byteCount) {
					const chunkPart = chunk.slice(0, byteCount);
					result.set(chunkPart, resultOffset);
					resultOffset += byteCount;
					this._chunks[chunkIndex] = chunk.slice(byteCount);
					this._totalLength -= byteCount;
					byteCount -= byteCount;
				} else {
					result.set(chunk, resultOffset);
					resultOffset += chunk.byteLength;
					this._chunks.shift();
					this._totalLength -= chunk.byteLength;
					byteCount -= chunk.byteLength;
				}
			}
			return result;
		}
	};
	exports.AbstractMessageBuffer = AbstractMessageBuffer;
}));
//#endregion
//#region servers/json/node_modules/vscode-jsonrpc/lib/common/connection.js
var require_connection$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || (function() {
		var ownKeys = function(o) {
			ownKeys = Object.getOwnPropertyNames || function(o) {
				var ar = [];
				for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
				return ar;
			};
			return ownKeys(o);
		};
		return function(mod) {
			if (mod && mod.__esModule) return mod;
			var result = {};
			if (mod != null) {
				for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
			}
			__setModuleDefault(result, mod);
			return result;
		};
	})();
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ConnectionOptions = exports.MessageStrategy = exports.CancellationStrategy = exports.CancellationSenderStrategy = exports.CancellationReceiverStrategy = exports.RequestCancellationReceiverStrategy = exports.IdCancellationReceiverStrategy = exports.ConnectionStrategy = exports.ConnectionError = exports.ConnectionErrors = exports.LogTraceNotification = exports.SetTraceNotification = exports.TraceFormat = exports.TraceValues = exports.TraceValue = exports.Trace = exports.NullLogger = exports.ProgressType = exports.ProgressToken = void 0;
	exports.createMessageConnection = createMessageConnection;
	const ral_1 = __importDefault(require_ral());
	const Is = __importStar(require_is$1());
	const messages_1 = require_messages$1();
	const linkedMap_1 = require_linkedMap();
	const events_1 = require_events();
	const cancellation_1 = require_cancellation();
	var CancelNotification;
	(function(CancelNotification) {
		CancelNotification.type = new messages_1.NotificationType("$/cancelRequest");
	})(CancelNotification || (CancelNotification = {}));
	var ProgressToken;
	(function(ProgressToken) {
		function is(value) {
			return typeof value === "string" || typeof value === "number";
		}
		ProgressToken.is = is;
	})(ProgressToken || (exports.ProgressToken = ProgressToken = {}));
	var ProgressNotification;
	(function(ProgressNotification) {
		ProgressNotification.type = new messages_1.NotificationType("$/progress");
	})(ProgressNotification || (ProgressNotification = {}));
	var ProgressType = class {
		/**
		* Clients must not use these properties. They are here to ensure correct typing.
		* in TypeScript
		*/
		__;
		_pr;
		constructor() {}
	};
	exports.ProgressType = ProgressType;
	var StarRequestHandler;
	(function(StarRequestHandler) {
		function is(value) {
			return Is.func(value);
		}
		StarRequestHandler.is = is;
	})(StarRequestHandler || (StarRequestHandler = {}));
	exports.NullLogger = Object.freeze({
		error: () => {},
		warn: () => {},
		info: () => {},
		log: () => {}
	});
	var Trace;
	(function(Trace) {
		Trace[Trace["Off"] = 0] = "Off";
		Trace[Trace["Messages"] = 1] = "Messages";
		Trace[Trace["Compact"] = 2] = "Compact";
		Trace[Trace["Verbose"] = 3] = "Verbose";
	})(Trace || (exports.Trace = Trace = {}));
	var TraceValue;
	(function(TraceValue) {
		/**
		* Turn tracing off.
		*/
		TraceValue.Off = "off";
		/**
		* Trace messages only.
		*/
		TraceValue.Messages = "messages";
		/**
		* Compact message tracing.
		*/
		TraceValue.Compact = "compact";
		/**
		* Verbose message tracing.
		*/
		TraceValue.Verbose = "verbose";
	})(TraceValue || (exports.TraceValue = TraceValue = {}));
	/**
	* @deprecated Use TraceValue instead
	*/
	exports.TraceValues = TraceValue;
	(function(Trace) {
		function fromString(value) {
			if (!Is.string(value)) return Trace.Off;
			value = value.toLowerCase();
			switch (value) {
				case "off": return Trace.Off;
				case "messages": return Trace.Messages;
				case "compact": return Trace.Compact;
				case "verbose": return Trace.Verbose;
				default: return Trace.Off;
			}
		}
		Trace.fromString = fromString;
		function toString(value) {
			switch (value) {
				case Trace.Off: return "off";
				case Trace.Messages: return "messages";
				case Trace.Compact: return "compact";
				case Trace.Verbose: return "verbose";
				default: return "off";
			}
		}
		Trace.toString = toString;
	})(Trace || (exports.Trace = Trace = {}));
	var TraceFormat;
	(function(TraceFormat) {
		TraceFormat["Text"] = "text";
		TraceFormat["JSON"] = "json";
	})(TraceFormat || (exports.TraceFormat = TraceFormat = {}));
	(function(TraceFormat) {
		function fromString(value) {
			if (!Is.string(value)) return TraceFormat.Text;
			value = value.toLowerCase();
			if (value === "json") return TraceFormat.JSON;
			else return TraceFormat.Text;
		}
		TraceFormat.fromString = fromString;
	})(TraceFormat || (exports.TraceFormat = TraceFormat = {}));
	var SetTraceNotification;
	(function(SetTraceNotification) {
		SetTraceNotification.type = new messages_1.NotificationType("$/setTrace");
	})(SetTraceNotification || (exports.SetTraceNotification = SetTraceNotification = {}));
	var LogTraceNotification;
	(function(LogTraceNotification) {
		LogTraceNotification.type = new messages_1.NotificationType("$/logTrace");
	})(LogTraceNotification || (exports.LogTraceNotification = LogTraceNotification = {}));
	var ConnectionErrors;
	(function(ConnectionErrors) {
		/**
		* The connection is closed.
		*/
		ConnectionErrors[ConnectionErrors["Closed"] = 1] = "Closed";
		/**
		* The connection got disposed.
		*/
		ConnectionErrors[ConnectionErrors["Disposed"] = 2] = "Disposed";
		/**
		* The connection is already in listening mode.
		*/
		ConnectionErrors[ConnectionErrors["AlreadyListening"] = 3] = "AlreadyListening";
	})(ConnectionErrors || (exports.ConnectionErrors = ConnectionErrors = {}));
	var ConnectionError = class ConnectionError extends Error {
		code;
		constructor(code, message) {
			super(message);
			this.code = code;
			Object.setPrototypeOf(this, ConnectionError.prototype);
		}
	};
	exports.ConnectionError = ConnectionError;
	var ConnectionStrategy;
	(function(ConnectionStrategy) {
		function is(value) {
			const candidate = value;
			return candidate && Is.func(candidate.cancelUndispatched);
		}
		ConnectionStrategy.is = is;
	})(ConnectionStrategy || (exports.ConnectionStrategy = ConnectionStrategy = {}));
	var IdCancellationReceiverStrategy;
	(function(IdCancellationReceiverStrategy) {
		function is(value) {
			const candidate = value;
			return candidate && (candidate.kind === void 0 || candidate.kind === "id") && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is.func(candidate.dispose));
		}
		IdCancellationReceiverStrategy.is = is;
	})(IdCancellationReceiverStrategy || (exports.IdCancellationReceiverStrategy = IdCancellationReceiverStrategy = {}));
	var RequestCancellationReceiverStrategy;
	(function(RequestCancellationReceiverStrategy) {
		function is(value) {
			const candidate = value;
			return candidate && candidate.kind === "request" && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is.func(candidate.dispose));
		}
		RequestCancellationReceiverStrategy.is = is;
	})(RequestCancellationReceiverStrategy || (exports.RequestCancellationReceiverStrategy = RequestCancellationReceiverStrategy = {}));
	var CancellationReceiverStrategy;
	(function(CancellationReceiverStrategy) {
		CancellationReceiverStrategy.Message = Object.freeze({ createCancellationTokenSource(_) {
			return new cancellation_1.CancellationTokenSource();
		} });
		function is(value) {
			return IdCancellationReceiverStrategy.is(value) || RequestCancellationReceiverStrategy.is(value);
		}
		CancellationReceiverStrategy.is = is;
	})(CancellationReceiverStrategy || (exports.CancellationReceiverStrategy = CancellationReceiverStrategy = {}));
	var CancellationSenderStrategy;
	(function(CancellationSenderStrategy) {
		CancellationSenderStrategy.Message = Object.freeze({
			sendCancellation(conn, id) {
				return conn.sendNotification(CancelNotification.type, { id });
			},
			cleanup(_) {}
		});
		function is(value) {
			const candidate = value;
			return candidate && Is.func(candidate.sendCancellation) && Is.func(candidate.cleanup);
		}
		CancellationSenderStrategy.is = is;
	})(CancellationSenderStrategy || (exports.CancellationSenderStrategy = CancellationSenderStrategy = {}));
	var CancellationStrategy;
	(function(CancellationStrategy) {
		CancellationStrategy.Message = Object.freeze({
			receiver: CancellationReceiverStrategy.Message,
			sender: CancellationSenderStrategy.Message
		});
		function is(value) {
			const candidate = value;
			return candidate && CancellationReceiverStrategy.is(candidate.receiver) && CancellationSenderStrategy.is(candidate.sender);
		}
		CancellationStrategy.is = is;
	})(CancellationStrategy || (exports.CancellationStrategy = CancellationStrategy = {}));
	var MessageStrategy;
	(function(MessageStrategy) {
		function is(value) {
			const candidate = value;
			return candidate && Is.func(candidate.handleMessage);
		}
		MessageStrategy.is = is;
	})(MessageStrategy || (exports.MessageStrategy = MessageStrategy = {}));
	var ConnectionOptions;
	(function(ConnectionOptions) {
		function is(value) {
			const candidate = value;
			return candidate && (CancellationStrategy.is(candidate.cancellationStrategy) || ConnectionStrategy.is(candidate.connectionStrategy) || MessageStrategy.is(candidate.messageStrategy) || Is.number(candidate.maxParallelism));
		}
		ConnectionOptions.is = is;
	})(ConnectionOptions || (exports.ConnectionOptions = ConnectionOptions = {}));
	var ConnectionState;
	(function(ConnectionState) {
		ConnectionState[ConnectionState["New"] = 1] = "New";
		ConnectionState[ConnectionState["Listening"] = 2] = "Listening";
		ConnectionState[ConnectionState["Closed"] = 3] = "Closed";
		ConnectionState[ConnectionState["Disposed"] = 4] = "Disposed";
	})(ConnectionState || (ConnectionState = {}));
	function createMessageConnection(messageReader, messageWriter, _logger, options) {
		const logger = _logger !== void 0 ? _logger : exports.NullLogger;
		let sequenceNumber = 0;
		let notificationSequenceNumber = 0;
		let unknownResponseSequenceNumber = 0;
		const version = "2.0";
		const maxParallelism = options?.maxParallelism ?? -1;
		let inFlight = 0;
		let starRequestHandler = void 0;
		const requestHandlers = /* @__PURE__ */ new Map();
		let starNotificationHandler = void 0;
		const notificationHandlers = /* @__PURE__ */ new Map();
		const progressHandlers = /* @__PURE__ */ new Map();
		let timer;
		let messageQueue = new linkedMap_1.LinkedMap();
		let responsePromises = /* @__PURE__ */ new Map();
		let knownCanceledRequests = /* @__PURE__ */ new Set();
		let requestTokens = /* @__PURE__ */ new Map();
		let trace = Trace.Off;
		let traceFormat = TraceFormat.Text;
		let tracer;
		let state = ConnectionState.New;
		const errorEmitter = new events_1.Emitter();
		const closeEmitter = new events_1.Emitter();
		const unhandledNotificationEmitter = new events_1.Emitter();
		const unhandledProgressEmitter = new events_1.Emitter();
		const disposeEmitter = new events_1.Emitter();
		const cancellationStrategy = options && options.cancellationStrategy ? options.cancellationStrategy : CancellationStrategy.Message;
		function cancelUndispatched(_message) {}
		function isListening() {
			return state === ConnectionState.Listening;
		}
		function isClosed() {
			return state === ConnectionState.Closed;
		}
		function isDisposed() {
			return state === ConnectionState.Disposed;
		}
		function closeHandler() {
			if (state === ConnectionState.New || state === ConnectionState.Listening) {
				state = ConnectionState.Closed;
				closeEmitter.fire(void 0);
			}
		}
		function readErrorHandler(error) {
			errorEmitter.fire([
				error,
				void 0,
				void 0
			]);
		}
		function writeErrorHandler(data) {
			errorEmitter.fire(data);
		}
		messageReader.onClose(closeHandler);
		messageReader.onError(readErrorHandler);
		messageWriter.onClose(closeHandler);
		messageWriter.onError(writeErrorHandler);
		function createRequestQueueKey(id) {
			if (id === null) throw new Error(`Can't send requests with id null since the response can't be correlated.`);
			return "req-" + id.toString();
		}
		function createResponseQueueKey(id) {
			if (id === null) return "res-unknown-" + (++unknownResponseSequenceNumber).toString();
			else return "res-" + id.toString();
		}
		function createNotificationQueueKey() {
			return "not-" + (++notificationSequenceNumber).toString();
		}
		function addMessageToQueue(queue, message) {
			if (messages_1.Message.isRequest(message)) queue.set(createRequestQueueKey(message.id), message);
			else if (messages_1.Message.isResponse(message)) {
				if (maxParallelism === -1) queue.set(createResponseQueueKey(message.id), message);
				else handleResponse(message);
			} else queue.set(createNotificationQueueKey(), message);
		}
		function triggerMessageQueue() {
			if (timer || messageQueue.size === 0) return;
			if (maxParallelism !== -1 && inFlight >= maxParallelism) return;
			timer = (0, ral_1.default)().timer.setImmediate(async () => {
				timer = void 0;
				if (messageQueue.size === 0) return;
				if (maxParallelism !== -1 && inFlight >= maxParallelism) return;
				const message = messageQueue.shift();
				let result;
				try {
					inFlight++;
					const messageStrategy = options?.messageStrategy;
					if (MessageStrategy.is(messageStrategy)) result = messageStrategy.handleMessage(message, handleMessage);
					else result = handleMessage(message);
				} catch (error) {
					logger.error(`Processing message queue failed: ${error.toString()}`);
				} finally {
					if (result instanceof Promise) result.then(() => {
						inFlight--;
						triggerMessageQueue();
					}).catch((error) => {
						logger.error(`Processing message queue failed: ${error.toString()}`);
					});
					else inFlight--;
					triggerMessageQueue();
				}
			});
		}
		async function handleMessage(message) {
			if (messages_1.Message.isRequest(message)) return handleRequest(message);
			else if (messages_1.Message.isNotification(message)) return handleNotification(message);
			else if (messages_1.Message.isResponse(message)) return handleResponse(message);
			else return handleInvalidMessage(message);
		}
		const callback = (message) => {
			try {
				if (messages_1.Message.isNotification(message) && message.method === CancelNotification.type.method) {
					const cancelId = message.params.id;
					const key = createRequestQueueKey(cancelId);
					const toCancel = messageQueue.get(key);
					if (messages_1.Message.isRequest(toCancel)) {
						const strategy = options?.connectionStrategy;
						const response = strategy && strategy.cancelUndispatched ? strategy.cancelUndispatched(toCancel, cancelUndispatched) : void 0;
						if (response && (response.error !== void 0 || response.result !== void 0)) {
							messageQueue.delete(key);
							requestTokens.delete(cancelId);
							response.id = toCancel.id;
							traceSendingResponse(response, message.method, Date.now());
							messageWriter.write(response).catch(() => logger.error(`Sending response for canceled message failed.`));
							return;
						}
					}
					const cancellationToken = requestTokens.get(cancelId);
					if (cancellationToken !== void 0) {
						cancellationToken.cancel();
						traceReceivedNotification(message);
						return;
					} else knownCanceledRequests.add(cancelId);
				}
				addMessageToQueue(messageQueue, message);
			} finally {
				triggerMessageQueue();
			}
		};
		async function handleRequest(requestMessage) {
			if (isDisposed()) return Promise.resolve();
			function reply(resultOrError, method, startTime) {
				const message = {
					jsonrpc: version,
					id: requestMessage.id
				};
				if (resultOrError instanceof messages_1.ResponseError) message.error = resultOrError.toJson();
				else message.result = resultOrError === void 0 ? null : resultOrError;
				traceSendingResponse(message, method, startTime);
				return messageWriter.write(message);
			}
			function replyError(error, method, startTime) {
				const message = {
					jsonrpc: version,
					id: requestMessage.id,
					error: error.toJson()
				};
				traceSendingResponse(message, method, startTime);
				return messageWriter.write(message);
			}
			traceReceivedRequest(requestMessage);
			const element = requestHandlers.get(requestMessage.method);
			let type;
			let requestHandler;
			if (element) {
				type = element.type;
				requestHandler = element.handler;
			}
			const startTime = Date.now();
			if (requestHandler || starRequestHandler) {
				const tokenKey = requestMessage.id ?? String(Date.now());
				const cancellationSource = IdCancellationReceiverStrategy.is(cancellationStrategy.receiver) ? cancellationStrategy.receiver.createCancellationTokenSource(tokenKey) : cancellationStrategy.receiver.createCancellationTokenSource(requestMessage);
				if (requestMessage.id !== null && knownCanceledRequests.has(requestMessage.id)) cancellationSource.cancel();
				if (requestMessage.id !== null) requestTokens.set(tokenKey, cancellationSource);
				try {
					let handlerResult;
					if (requestHandler) {
						if (requestMessage.params === void 0) {
							if (type !== void 0 && type.numberOfParams !== 0) return replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines ${type.numberOfParams} params but received none.`), requestMessage.method, startTime);
							handlerResult = requestHandler(cancellationSource.token);
						} else if (Array.isArray(requestMessage.params)) {
							if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byName) return replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by name but received parameters by position`), requestMessage.method, startTime);
							handlerResult = requestHandler(...requestMessage.params, cancellationSource.token);
						} else {
							if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) return replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by position but received parameters by name`), requestMessage.method, startTime);
							handlerResult = requestHandler(requestMessage.params, cancellationSource.token);
						}
					} else if (starRequestHandler) handlerResult = starRequestHandler(requestMessage.method, requestMessage.params, cancellationSource.token);
					await reply(await handlerResult, requestMessage.method, startTime);
				} catch (error) {
					if (error instanceof messages_1.ResponseError) await reply(error, requestMessage.method, startTime);
					else if (error && Is.string(error.message)) await replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
					else await replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
				} finally {
					requestTokens.delete(tokenKey);
				}
			} else await replyError(new messages_1.ResponseError(messages_1.ErrorCodes.MethodNotFound, `Unhandled method ${requestMessage.method}`), requestMessage.method, startTime);
		}
		function handleResponse(responseMessage) {
			if (isDisposed()) return;
			if (responseMessage.id === null) {
				if (responseMessage.error) logger.error(`Received response message without id: Error is: \n${JSON.stringify(responseMessage.error, void 0, 4)}`);
				else logger.error(`Received response message without id. No further error information provided.`);
			} else {
				const key = responseMessage.id;
				const responsePromise = responsePromises.get(key);
				traceReceivedResponse(responseMessage, responsePromise);
				if (responsePromise !== void 0) {
					responsePromises.delete(key);
					try {
						if (responseMessage.error) {
							const error = responseMessage.error;
							responsePromise.reject(new messages_1.ResponseError(error.code, error.message, error.data));
						} else if (responseMessage.result !== void 0) responsePromise.resolve(responseMessage.result);
						else throw new Error("Should never happen.");
					} catch (error) {
						if (error.message) logger.error(`Response handler '${responsePromise.method}' failed with message: ${error.message}`);
						else logger.error(`Response handler '${responsePromise.method}' failed unexpectedly.`);
					}
				}
			}
		}
		async function handleNotification(message) {
			if (isDisposed()) return;
			let type = void 0;
			let notificationHandler;
			if (message.method === CancelNotification.type.method) {
				const cancelId = message.params.id;
				knownCanceledRequests.delete(cancelId);
				traceReceivedNotification(message);
				return;
			} else {
				const element = notificationHandlers.get(message.method);
				if (element) {
					notificationHandler = element.handler;
					type = element.type;
				}
			}
			if (notificationHandler || starNotificationHandler) try {
				traceReceivedNotification(message);
				if (notificationHandler) {
					if (message.params === void 0) {
						if (type !== void 0) {
							if (type.numberOfParams !== 0 && type.parameterStructures !== messages_1.ParameterStructures.byName) logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received none.`);
						}
						await notificationHandler();
					} else if (Array.isArray(message.params)) {
						const params = message.params;
						if (message.method === ProgressNotification.type.method && params.length === 2 && ProgressToken.is(params[0])) await notificationHandler({
							token: params[0],
							value: params[1]
						});
						else {
							if (type !== void 0) {
								if (type.parameterStructures === messages_1.ParameterStructures.byName) logger.error(`Notification ${message.method} defines parameters by name but received parameters by position`);
								if (type.numberOfParams !== message.params.length) logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received ${params.length} arguments`);
							}
							await notificationHandler(...params);
						}
					} else {
						if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) logger.error(`Notification ${message.method} defines parameters by position but received parameters by name`);
						await notificationHandler(message.params);
					}
				} else if (starNotificationHandler) await starNotificationHandler(message.method, message.params);
			} catch (error) {
				if (error.message) logger.error(`Notification handler '${message.method}' failed with message: ${error.message}`);
				else logger.error(`Notification handler '${message.method}' failed unexpectedly.`);
			}
			else unhandledNotificationEmitter.fire(message);
		}
		function handleInvalidMessage(message) {
			if (!message) {
				logger.error("Received empty message.");
				return;
			}
			logger.error(`Received message which is neither a response nor a notification message:\n${JSON.stringify(message, null, 4)}`);
			const responseMessage = message;
			if (Is.string(responseMessage.id) || Is.number(responseMessage.id)) {
				const key = responseMessage.id;
				const responseHandler = responsePromises.get(key);
				if (responseHandler) responseHandler.reject(/* @__PURE__ */ new Error("The received response has neither a result nor an error property."));
			}
		}
		function stringifyTrace(params) {
			if (params === void 0 || params === null) return;
			switch (trace) {
				case Trace.Verbose: return JSON.stringify(params, null, 4);
				case Trace.Compact: return JSON.stringify(params);
				default: return;
			}
		}
		function traceSendingRequest(message) {
			if (trace === Trace.Off || !tracer) return;
			if (traceFormat === TraceFormat.Text) {
				let data = void 0;
				if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) data = `Params: ${stringifyTrace(message.params)}`;
				tracer.log(`Sending request '${message.method} - (${message.id})'.`, data);
			} else logLSPMessage("send-request", message);
		}
		function traceSendingNotification(message) {
			if (trace === Trace.Off || !tracer) return;
			if (traceFormat === TraceFormat.Text) {
				let data = void 0;
				if (trace === Trace.Verbose || trace === Trace.Compact) {
					if (message.params) data = `Params: ${stringifyTrace(message.params)}`;
					else data = "No parameters provided.";
				}
				tracer.log(`Sending notification '${message.method}'.`, data);
			} else logLSPMessage("send-notification", message);
		}
		function traceSendingResponse(message, method, startTime) {
			if (trace === Trace.Off || !tracer) return;
			if (traceFormat === TraceFormat.Text) {
				let data = void 0;
				if (trace === Trace.Verbose || trace === Trace.Compact) {
					if (message.error && message.error.data) data = `Error data: ${stringifyTrace(message.error.data)}`;
					else if (message.result) data = `Result: ${stringifyTrace(message.result)}`;
					else if (message.error === void 0) data = "No result returned.";
				}
				tracer.log(`Sending response '${method} - (${message.id})'. Processing request took ${Date.now() - startTime}ms`, data);
			} else logLSPMessage("send-response", message);
		}
		function traceReceivedRequest(message) {
			if (trace === Trace.Off || !tracer) return;
			if (traceFormat === TraceFormat.Text) {
				let data = void 0;
				if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) data = `Params: ${stringifyTrace(message.params)}`;
				tracer.log(`Received request '${message.method} - (${message.id})'.`, data);
			} else logLSPMessage("receive-request", message);
		}
		function traceReceivedNotification(message) {
			if (trace === Trace.Off || !tracer || message.method === LogTraceNotification.type.method) return;
			if (traceFormat === TraceFormat.Text) {
				let data = void 0;
				if (trace === Trace.Verbose || trace === Trace.Compact) {
					if (message.params) data = `Params: ${stringifyTrace(message.params)}`;
					else data = "No parameters provided.";
				}
				tracer.log(`Received notification '${message.method}'.`, data);
			} else logLSPMessage("receive-notification", message);
		}
		function traceReceivedResponse(message, responsePromise) {
			if (trace === Trace.Off || !tracer) return;
			if (traceFormat === TraceFormat.Text) {
				let data = void 0;
				if (trace === Trace.Verbose || trace === Trace.Compact) {
					if (message.error && message.error.data) data = `Error data: ${stringifyTrace(message.error.data)}`;
					else if (message.result) data = `Result: ${stringifyTrace(message.result)}`;
					else if (message.error === void 0) data = "No result returned.";
				}
				if (responsePromise) {
					const error = message.error ? ` Request failed: ${message.error.message} (${message.error.code}).` : "";
					tracer.log(`Received response '${responsePromise.method} - (${message.id})' in ${Date.now() - responsePromise.timerStart}ms.${error}`, data);
				} else tracer.log(`Received response ${message.id} without active response promise.`, data);
			} else logLSPMessage("receive-response", message);
		}
		function logLSPMessage(type, message) {
			if (!tracer || trace === Trace.Off) return;
			const lspMessage = {
				isLSPMessage: true,
				type,
				message,
				timestamp: Date.now()
			};
			tracer.log(lspMessage);
		}
		function throwIfClosedOrDisposed() {
			if (isClosed()) throw new ConnectionError(ConnectionErrors.Closed, "Connection is closed.");
			if (isDisposed()) throw new ConnectionError(ConnectionErrors.Disposed, "Connection is disposed.");
		}
		function throwIfListening() {
			if (isListening()) throw new ConnectionError(ConnectionErrors.AlreadyListening, "Connection is already listening");
		}
		function throwIfNotListening() {
			if (!isListening()) throw new Error("Call listen() first.");
		}
		function undefinedToNull(param) {
			if (param === void 0) return null;
			else return param;
		}
		function nullToUndefined(param) {
			if (param === null) return;
			else return param;
		}
		function isNamedParam(param) {
			return param !== void 0 && param !== null && !Array.isArray(param) && typeof param === "object";
		}
		function computeSingleParam(parameterStructures, param) {
			switch (parameterStructures) {
				case messages_1.ParameterStructures.auto: if (isNamedParam(param)) return nullToUndefined(param);
				else return [undefinedToNull(param)];
				case messages_1.ParameterStructures.byName:
					if (!isNamedParam(param)) throw new Error(`Received parameters by name but param is not an object literal.`);
					return nullToUndefined(param);
				case messages_1.ParameterStructures.byPosition: return [undefinedToNull(param)];
				default: throw new Error(`Unknown parameter structure ${parameterStructures.toString()}`);
			}
		}
		function computeMessageParams(type, params) {
			let result;
			const numberOfParams = type.numberOfParams;
			switch (numberOfParams) {
				case 0:
					result = void 0;
					break;
				case 1:
					result = computeSingleParam(type.parameterStructures, params[0]);
					break;
				default:
					result = [];
					for (let i = 0; i < params.length && i < numberOfParams; i++) result.push(undefinedToNull(params[i]));
					if (params.length < numberOfParams) for (let i = params.length; i < numberOfParams; i++) result.push(null);
			}
			return result;
		}
		const connection = {
			sendNotification: (type, ...args) => {
				throwIfClosedOrDisposed();
				let method;
				let messageParams;
				if (Is.string(type)) {
					method = type;
					const first = args[0];
					let paramStart = 0;
					let parameterStructures = messages_1.ParameterStructures.auto;
					if (messages_1.ParameterStructures.is(first)) {
						paramStart = 1;
						parameterStructures = first;
					}
					const paramEnd = args.length;
					const numberOfParams = paramEnd - paramStart;
					switch (numberOfParams) {
						case 0:
							messageParams = void 0;
							break;
						case 1:
							messageParams = computeSingleParam(parameterStructures, args[paramStart]);
							break;
						default:
							if (parameterStructures === messages_1.ParameterStructures.byName) throw new Error(`Received ${numberOfParams} parameters for 'by Name' notification parameter structure.`);
							messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
					}
				} else {
					const params = args;
					method = type.method;
					messageParams = computeMessageParams(type, params);
				}
				const notificationMessage = {
					jsonrpc: version,
					method,
					params: messageParams
				};
				traceSendingNotification(notificationMessage);
				return messageWriter.write(notificationMessage).catch((error) => {
					logger.error(`Sending notification failed.`);
					throw error;
				});
			},
			onNotification: (type, handler) => {
				throwIfClosedOrDisposed();
				let method;
				if (Is.func(type)) starNotificationHandler = type;
				else if (handler) {
					if (Is.string(type)) {
						method = type;
						notificationHandlers.set(type, {
							type: void 0,
							handler
						});
					} else {
						method = type.method;
						notificationHandlers.set(type.method, {
							type,
							handler
						});
					}
				}
				return { dispose: () => {
					if (method !== void 0) {
						if (notificationHandlers.get(method)?.handler === handler) notificationHandlers.delete(method);
					} else if (starNotificationHandler === type) starNotificationHandler = void 0;
				} };
			},
			onProgress: (_type, token, handler) => {
				if (progressHandlers.has(token)) throw new Error(`Progress handler for token ${token} already registered`);
				progressHandlers.set(token, handler);
				return { dispose: () => {
					if (progressHandlers.get(token) === handler) progressHandlers.delete(token);
				} };
			},
			sendProgress: (_type, token, value) => {
				return connection.sendNotification(ProgressNotification.type, {
					token,
					value
				});
			},
			onUnhandledProgress: unhandledProgressEmitter.event,
			sendRequest: (type, ...args) => {
				throwIfClosedOrDisposed();
				throwIfNotListening();
				function sendCancellation(connection, id) {
					const p = cancellationStrategy.sender.sendCancellation(connection, id);
					if (p === void 0) logger.log(`Received no promise from cancellation strategy when cancelling id ${id}`);
					else p.catch(() => {
						logger.log(`Sending cancellation messages for id ${id} failed.`);
					});
				}
				let method;
				let messageParams;
				let token = void 0;
				if (Is.string(type)) {
					method = type;
					const first = args[0];
					const last = args[args.length - 1];
					let paramStart = 0;
					let parameterStructures = messages_1.ParameterStructures.auto;
					if (messages_1.ParameterStructures.is(first)) {
						paramStart = 1;
						parameterStructures = first;
					}
					let paramEnd = args.length;
					if (cancellation_1.CancellationToken.is(last)) {
						paramEnd = paramEnd - 1;
						token = last;
					}
					const numberOfParams = paramEnd - paramStart;
					switch (numberOfParams) {
						case 0:
							messageParams = void 0;
							break;
						case 1:
							messageParams = computeSingleParam(parameterStructures, args[paramStart]);
							break;
						default:
							if (parameterStructures === messages_1.ParameterStructures.byName) throw new Error(`Received ${numberOfParams} parameters for 'by Name' request parameter structure.`);
							messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
					}
				} else {
					const params = args;
					method = type.method;
					messageParams = computeMessageParams(type, params);
					const numberOfParams = type.numberOfParams;
					token = cancellation_1.CancellationToken.is(params[numberOfParams]) ? params[numberOfParams] : void 0;
				}
				const id = sequenceNumber++;
				let disposable;
				let tokenWasCancelled = false;
				if (token !== void 0) {
					if (token.isCancellationRequested) tokenWasCancelled = true;
					else disposable = token.onCancellationRequested(() => {
						sendCancellation(connection, id);
					});
				}
				const requestMessage = {
					jsonrpc: version,
					id,
					method,
					params: messageParams
				};
				traceSendingRequest(requestMessage);
				if (typeof cancellationStrategy.sender.enableCancellation === "function") cancellationStrategy.sender.enableCancellation(requestMessage);
				return new Promise(async (resolve, reject) => {
					const resolveWithCleanup = (r) => {
						resolve(r);
						cancellationStrategy.sender.cleanup(id);
						disposable?.dispose();
					};
					const rejectWithCleanup = (r) => {
						reject(r);
						cancellationStrategy.sender.cleanup(id);
						disposable?.dispose();
					};
					const responsePromise = {
						method,
						timerStart: Date.now(),
						resolve: resolveWithCleanup,
						reject: rejectWithCleanup
					};
					try {
						responsePromises.set(id, responsePromise);
						await messageWriter.write(requestMessage);
						if (tokenWasCancelled) sendCancellation(connection, id);
					} catch (error) {
						responsePromises.delete(id);
						responsePromise.reject(new messages_1.ResponseError(messages_1.ErrorCodes.MessageWriteError, error.message ? error.message : "Unknown reason"));
						logger.error(`Sending request failed.`);
						throw error;
					}
				});
			},
			onRequest: (type, handler) => {
				throwIfClosedOrDisposed();
				let method = null;
				if (StarRequestHandler.is(type)) {
					method = void 0;
					starRequestHandler = type;
				} else if (Is.string(type)) {
					method = null;
					if (handler !== void 0) {
						method = type;
						requestHandlers.set(type, {
							handler,
							type: void 0
						});
					}
				} else if (handler !== void 0) {
					method = type.method;
					requestHandlers.set(type.method, {
						type,
						handler
					});
				}
				return { dispose: () => {
					if (method === null) return;
					if (method !== void 0) {
						if (requestHandlers.get(method)?.handler === handler) requestHandlers.delete(method);
					} else if (starRequestHandler === type) starRequestHandler = void 0;
				} };
			},
			hasPendingResponse: () => {
				return responsePromises.size > 0;
			},
			trace: async (_value, _tracer, sendNotificationOrTraceOptions) => {
				let _sendNotification = false;
				let _traceFormat = TraceFormat.Text;
				if (sendNotificationOrTraceOptions !== void 0) {
					if (Is.boolean(sendNotificationOrTraceOptions)) _sendNotification = sendNotificationOrTraceOptions;
					else {
						_sendNotification = sendNotificationOrTraceOptions.sendNotification || false;
						_traceFormat = sendNotificationOrTraceOptions.traceFormat || TraceFormat.Text;
					}
				}
				trace = _value;
				traceFormat = _traceFormat;
				if (trace === Trace.Off) tracer = void 0;
				else tracer = _tracer;
				if (_sendNotification && !isClosed() && !isDisposed()) await connection.sendNotification(SetTraceNotification.type, { value: Trace.toString(_value) });
			},
			onError: errorEmitter.event,
			onClose: closeEmitter.event,
			onUnhandledNotification: unhandledNotificationEmitter.event,
			onDispose: disposeEmitter.event,
			end: () => {
				messageWriter.end();
			},
			dispose: () => {
				if (isDisposed()) return;
				state = ConnectionState.Disposed;
				disposeEmitter.fire(void 0);
				const error = new messages_1.ResponseError(messages_1.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
				for (const promise of responsePromises.values()) promise.reject(error);
				responsePromises = /* @__PURE__ */ new Map();
				requestTokens = /* @__PURE__ */ new Map();
				knownCanceledRequests = /* @__PURE__ */ new Set();
				messageQueue = new linkedMap_1.LinkedMap();
				if (Is.func(messageWriter.dispose)) messageWriter.dispose();
				if (Is.func(messageReader.dispose)) messageReader.dispose();
			},
			listen: () => {
				throwIfClosedOrDisposed();
				throwIfListening();
				state = ConnectionState.Listening;
				messageReader.listen(callback);
			},
			inspect: () => {
				(0, ral_1.default)().console.log("inspect");
			}
		};
		connection.onNotification(LogTraceNotification.type, (params) => {
			if (trace === Trace.Off || !tracer) return;
			const verbose = trace === Trace.Verbose || trace === Trace.Compact;
			tracer.log(params.message, verbose ? params.verbose : void 0);
		});
		connection.onNotification(ProgressNotification.type, async (params) => {
			const handler = progressHandlers.get(params.token);
			if (handler) await handler(params.value);
			else unhandledProgressEmitter.fire(params);
		});
		return connection;
	}
}));
//#endregion
//#region servers/json/node_modules/vscode-jsonrpc/lib/common/api.js
var require_api$2 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ProgressType = exports.ProgressToken = exports.createMessageConnection = exports.NullLogger = exports.ConnectionOptions = exports.ConnectionStrategy = exports.AbstractMessageBuffer = exports.WriteableStreamMessageWriter = exports.AbstractMessageWriter = exports.MessageWriter = exports.ReadableStreamMessageReader = exports.AbstractMessageReader = exports.MessageReader = exports.SharedArrayReceiverStrategy = exports.SharedArraySenderStrategy = exports.CancellationToken = exports.CancellationTokenSource = exports.Emitter = exports.Event = exports.Disposable = exports.LRUCache = exports.Touch = exports.LinkedMap = exports.ParameterStructures = exports.NotificationType9 = exports.NotificationType8 = exports.NotificationType7 = exports.NotificationType6 = exports.NotificationType5 = exports.NotificationType4 = exports.NotificationType3 = exports.NotificationType2 = exports.NotificationType1 = exports.NotificationType0 = exports.NotificationType = exports.ErrorCodes = exports.ResponseError = exports.RequestType9 = exports.RequestType8 = exports.RequestType7 = exports.RequestType6 = exports.RequestType5 = exports.RequestType4 = exports.RequestType3 = exports.RequestType2 = exports.RequestType1 = exports.RequestType0 = exports.RequestType = exports.Message = exports.RAL = void 0;
	exports.MessageStrategy = exports.CancellationStrategy = exports.CancellationSenderStrategy = exports.RequestCancellationReceiverStrategy = exports.IdCancellationReceiverStrategy = exports.CancellationReceiverStrategy = exports.ConnectionError = exports.ConnectionErrors = exports.LogTraceNotification = exports.SetTraceNotification = exports.TraceFormat = exports.TraceValues = exports.TraceValue = exports.Trace = void 0;
	const messages_1 = require_messages$1();
	Object.defineProperty(exports, "Message", {
		enumerable: true,
		get: function() {
			return messages_1.Message;
		}
	});
	Object.defineProperty(exports, "RequestType", {
		enumerable: true,
		get: function() {
			return messages_1.RequestType;
		}
	});
	Object.defineProperty(exports, "RequestType0", {
		enumerable: true,
		get: function() {
			return messages_1.RequestType0;
		}
	});
	Object.defineProperty(exports, "RequestType1", {
		enumerable: true,
		get: function() {
			return messages_1.RequestType1;
		}
	});
	Object.defineProperty(exports, "RequestType2", {
		enumerable: true,
		get: function() {
			return messages_1.RequestType2;
		}
	});
	Object.defineProperty(exports, "RequestType3", {
		enumerable: true,
		get: function() {
			return messages_1.RequestType3;
		}
	});
	Object.defineProperty(exports, "RequestType4", {
		enumerable: true,
		get: function() {
			return messages_1.RequestType4;
		}
	});
	Object.defineProperty(exports, "RequestType5", {
		enumerable: true,
		get: function() {
			return messages_1.RequestType5;
		}
	});
	Object.defineProperty(exports, "RequestType6", {
		enumerable: true,
		get: function() {
			return messages_1.RequestType6;
		}
	});
	Object.defineProperty(exports, "RequestType7", {
		enumerable: true,
		get: function() {
			return messages_1.RequestType7;
		}
	});
	Object.defineProperty(exports, "RequestType8", {
		enumerable: true,
		get: function() {
			return messages_1.RequestType8;
		}
	});
	Object.defineProperty(exports, "RequestType9", {
		enumerable: true,
		get: function() {
			return messages_1.RequestType9;
		}
	});
	Object.defineProperty(exports, "ResponseError", {
		enumerable: true,
		get: function() {
			return messages_1.ResponseError;
		}
	});
	Object.defineProperty(exports, "ErrorCodes", {
		enumerable: true,
		get: function() {
			return messages_1.ErrorCodes;
		}
	});
	Object.defineProperty(exports, "NotificationType", {
		enumerable: true,
		get: function() {
			return messages_1.NotificationType;
		}
	});
	Object.defineProperty(exports, "NotificationType0", {
		enumerable: true,
		get: function() {
			return messages_1.NotificationType0;
		}
	});
	Object.defineProperty(exports, "NotificationType1", {
		enumerable: true,
		get: function() {
			return messages_1.NotificationType1;
		}
	});
	Object.defineProperty(exports, "NotificationType2", {
		enumerable: true,
		get: function() {
			return messages_1.NotificationType2;
		}
	});
	Object.defineProperty(exports, "NotificationType3", {
		enumerable: true,
		get: function() {
			return messages_1.NotificationType3;
		}
	});
	Object.defineProperty(exports, "NotificationType4", {
		enumerable: true,
		get: function() {
			return messages_1.NotificationType4;
		}
	});
	Object.defineProperty(exports, "NotificationType5", {
		enumerable: true,
		get: function() {
			return messages_1.NotificationType5;
		}
	});
	Object.defineProperty(exports, "NotificationType6", {
		enumerable: true,
		get: function() {
			return messages_1.NotificationType6;
		}
	});
	Object.defineProperty(exports, "NotificationType7", {
		enumerable: true,
		get: function() {
			return messages_1.NotificationType7;
		}
	});
	Object.defineProperty(exports, "NotificationType8", {
		enumerable: true,
		get: function() {
			return messages_1.NotificationType8;
		}
	});
	Object.defineProperty(exports, "NotificationType9", {
		enumerable: true,
		get: function() {
			return messages_1.NotificationType9;
		}
	});
	Object.defineProperty(exports, "ParameterStructures", {
		enumerable: true,
		get: function() {
			return messages_1.ParameterStructures;
		}
	});
	const linkedMap_1 = require_linkedMap();
	Object.defineProperty(exports, "LinkedMap", {
		enumerable: true,
		get: function() {
			return linkedMap_1.LinkedMap;
		}
	});
	Object.defineProperty(exports, "LRUCache", {
		enumerable: true,
		get: function() {
			return linkedMap_1.LRUCache;
		}
	});
	Object.defineProperty(exports, "Touch", {
		enumerable: true,
		get: function() {
			return linkedMap_1.Touch;
		}
	});
	const disposable_1 = require_disposable();
	Object.defineProperty(exports, "Disposable", {
		enumerable: true,
		get: function() {
			return disposable_1.Disposable;
		}
	});
	const events_1 = require_events();
	Object.defineProperty(exports, "Event", {
		enumerable: true,
		get: function() {
			return events_1.Event;
		}
	});
	Object.defineProperty(exports, "Emitter", {
		enumerable: true,
		get: function() {
			return events_1.Emitter;
		}
	});
	const cancellation_1 = require_cancellation();
	Object.defineProperty(exports, "CancellationTokenSource", {
		enumerable: true,
		get: function() {
			return cancellation_1.CancellationTokenSource;
		}
	});
	Object.defineProperty(exports, "CancellationToken", {
		enumerable: true,
		get: function() {
			return cancellation_1.CancellationToken;
		}
	});
	const sharedArrayCancellation_1 = require_sharedArrayCancellation();
	Object.defineProperty(exports, "SharedArraySenderStrategy", {
		enumerable: true,
		get: function() {
			return sharedArrayCancellation_1.SharedArraySenderStrategy;
		}
	});
	Object.defineProperty(exports, "SharedArrayReceiverStrategy", {
		enumerable: true,
		get: function() {
			return sharedArrayCancellation_1.SharedArrayReceiverStrategy;
		}
	});
	const messageReader_1 = require_messageReader();
	Object.defineProperty(exports, "MessageReader", {
		enumerable: true,
		get: function() {
			return messageReader_1.MessageReader;
		}
	});
	Object.defineProperty(exports, "AbstractMessageReader", {
		enumerable: true,
		get: function() {
			return messageReader_1.AbstractMessageReader;
		}
	});
	Object.defineProperty(exports, "ReadableStreamMessageReader", {
		enumerable: true,
		get: function() {
			return messageReader_1.ReadableStreamMessageReader;
		}
	});
	const messageWriter_1 = require_messageWriter();
	Object.defineProperty(exports, "MessageWriter", {
		enumerable: true,
		get: function() {
			return messageWriter_1.MessageWriter;
		}
	});
	Object.defineProperty(exports, "AbstractMessageWriter", {
		enumerable: true,
		get: function() {
			return messageWriter_1.AbstractMessageWriter;
		}
	});
	Object.defineProperty(exports, "WriteableStreamMessageWriter", {
		enumerable: true,
		get: function() {
			return messageWriter_1.WriteableStreamMessageWriter;
		}
	});
	const messageBuffer_1 = require_messageBuffer();
	Object.defineProperty(exports, "AbstractMessageBuffer", {
		enumerable: true,
		get: function() {
			return messageBuffer_1.AbstractMessageBuffer;
		}
	});
	const connection_1 = require_connection$1();
	Object.defineProperty(exports, "ConnectionStrategy", {
		enumerable: true,
		get: function() {
			return connection_1.ConnectionStrategy;
		}
	});
	Object.defineProperty(exports, "ConnectionOptions", {
		enumerable: true,
		get: function() {
			return connection_1.ConnectionOptions;
		}
	});
	Object.defineProperty(exports, "NullLogger", {
		enumerable: true,
		get: function() {
			return connection_1.NullLogger;
		}
	});
	Object.defineProperty(exports, "createMessageConnection", {
		enumerable: true,
		get: function() {
			return connection_1.createMessageConnection;
		}
	});
	Object.defineProperty(exports, "ProgressToken", {
		enumerable: true,
		get: function() {
			return connection_1.ProgressToken;
		}
	});
	Object.defineProperty(exports, "ProgressType", {
		enumerable: true,
		get: function() {
			return connection_1.ProgressType;
		}
	});
	Object.defineProperty(exports, "Trace", {
		enumerable: true,
		get: function() {
			return connection_1.Trace;
		}
	});
	Object.defineProperty(exports, "TraceValue", {
		enumerable: true,
		get: function() {
			return connection_1.TraceValue;
		}
	});
	Object.defineProperty(exports, "TraceFormat", {
		enumerable: true,
		get: function() {
			return connection_1.TraceFormat;
		}
	});
	Object.defineProperty(exports, "SetTraceNotification", {
		enumerable: true,
		get: function() {
			return connection_1.SetTraceNotification;
		}
	});
	Object.defineProperty(exports, "LogTraceNotification", {
		enumerable: true,
		get: function() {
			return connection_1.LogTraceNotification;
		}
	});
	Object.defineProperty(exports, "ConnectionErrors", {
		enumerable: true,
		get: function() {
			return connection_1.ConnectionErrors;
		}
	});
	Object.defineProperty(exports, "ConnectionError", {
		enumerable: true,
		get: function() {
			return connection_1.ConnectionError;
		}
	});
	Object.defineProperty(exports, "CancellationReceiverStrategy", {
		enumerable: true,
		get: function() {
			return connection_1.CancellationReceiverStrategy;
		}
	});
	Object.defineProperty(exports, "IdCancellationReceiverStrategy", {
		enumerable: true,
		get: function() {
			return connection_1.IdCancellationReceiverStrategy;
		}
	});
	Object.defineProperty(exports, "RequestCancellationReceiverStrategy", {
		enumerable: true,
		get: function() {
			return connection_1.RequestCancellationReceiverStrategy;
		}
	});
	Object.defineProperty(exports, "CancellationSenderStrategy", {
		enumerable: true,
		get: function() {
			return connection_1.CancellationSenderStrategy;
		}
	});
	Object.defineProperty(exports, "CancellationStrategy", {
		enumerable: true,
		get: function() {
			return connection_1.CancellationStrategy;
		}
	});
	Object.defineProperty(exports, "MessageStrategy", {
		enumerable: true,
		get: function() {
			return connection_1.MessageStrategy;
		}
	});
	Object.defineProperty(exports, "TraceValues", {
		enumerable: true,
		get: function() {
			return connection_1.TraceValues;
		}
	});
	exports.RAL = __importDefault(require_ral()).default;
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-types/lib/esm/main.js
var main_exports = /* @__PURE__ */ __exportAll({
	AnnotatedTextEdit: () => AnnotatedTextEdit,
	ApplyKind: () => ApplyKind,
	ChangeAnnotation: () => ChangeAnnotation,
	ChangeAnnotationIdentifier: () => ChangeAnnotationIdentifier,
	CodeAction: () => CodeAction$1,
	CodeActionContext: () => CodeActionContext,
	CodeActionKind: () => CodeActionKind$1,
	CodeActionTag: () => CodeActionTag,
	CodeActionTriggerKind: () => CodeActionTriggerKind,
	CodeDescription: () => CodeDescription,
	CodeLens: () => CodeLens,
	Color: () => Color,
	ColorInformation: () => ColorInformation,
	ColorPresentation: () => ColorPresentation,
	Command: () => Command,
	CompletionItem: () => CompletionItem,
	CompletionItemKind: () => CompletionItemKind,
	CompletionItemLabelDetails: () => CompletionItemLabelDetails,
	CompletionItemTag: () => CompletionItemTag,
	CompletionList: () => CompletionList,
	CreateFile: () => CreateFile,
	DeleteFile: () => DeleteFile,
	Diagnostic: () => Diagnostic,
	DiagnosticRelatedInformation: () => DiagnosticRelatedInformation,
	DiagnosticSeverity: () => DiagnosticSeverity,
	DiagnosticTag: () => DiagnosticTag,
	DocumentHighlight: () => DocumentHighlight,
	DocumentHighlightKind: () => DocumentHighlightKind,
	DocumentLink: () => DocumentLink,
	DocumentSymbol: () => DocumentSymbol,
	DocumentUri: () => DocumentUri,
	EOL: () => EOL,
	FoldingRange: () => FoldingRange,
	FoldingRangeKind: () => FoldingRangeKind,
	FormattingOptions: () => FormattingOptions,
	Hover: () => Hover,
	InlayHint: () => InlayHint,
	InlayHintKind: () => InlayHintKind,
	InlayHintLabelPart: () => InlayHintLabelPart,
	InlineCompletionContext: () => InlineCompletionContext,
	InlineCompletionItem: () => InlineCompletionItem,
	InlineCompletionList: () => InlineCompletionList,
	InlineCompletionTriggerKind: () => InlineCompletionTriggerKind,
	InlineValueContext: () => InlineValueContext,
	InlineValueEvaluatableExpression: () => InlineValueEvaluatableExpression,
	InlineValueText: () => InlineValueText,
	InlineValueVariableLookup: () => InlineValueVariableLookup,
	InsertReplaceEdit: () => InsertReplaceEdit,
	InsertTextFormat: () => InsertTextFormat,
	InsertTextMode: () => InsertTextMode,
	LanguageKind: () => LanguageKind,
	Location: () => Location,
	LocationLink: () => LocationLink,
	MarkedString: () => MarkedString,
	MarkupContent: () => MarkupContent,
	MarkupKind: () => MarkupKind,
	OptionalVersionedTextDocumentIdentifier: () => OptionalVersionedTextDocumentIdentifier,
	ParameterInformation: () => ParameterInformation,
	Position: () => Position,
	Range: () => Range,
	RenameFile: () => RenameFile,
	SelectedCompletionInfo: () => SelectedCompletionInfo,
	SelectionRange: () => SelectionRange,
	SemanticTokenModifiers: () => SemanticTokenModifiers,
	SemanticTokenTypes: () => SemanticTokenTypes,
	SemanticTokens: () => SemanticTokens,
	SignatureInformation: () => SignatureInformation,
	SnippetTextEdit: () => SnippetTextEdit,
	StringValue: () => StringValue,
	SymbolInformation: () => SymbolInformation,
	SymbolKind: () => SymbolKind,
	SymbolTag: () => SymbolTag,
	TextDocument: () => TextDocument$1,
	TextDocumentEdit: () => TextDocumentEdit,
	TextDocumentIdentifier: () => TextDocumentIdentifier,
	TextDocumentItem: () => TextDocumentItem,
	TextEdit: () => TextEdit$1,
	URI: () => URI,
	VersionedTextDocumentIdentifier: () => VersionedTextDocumentIdentifier,
	WorkspaceChange: () => WorkspaceChange,
	WorkspaceEdit: () => WorkspaceEdit,
	WorkspaceFolder: () => WorkspaceFolder,
	WorkspaceSymbol: () => WorkspaceSymbol,
	integer: () => integer,
	uinteger: () => uinteger
});
var DocumentUri, URI, integer, uinteger, Position, Range, Location, LocationLink, Color, ColorInformation, ColorPresentation, FoldingRangeKind, FoldingRange, DiagnosticRelatedInformation, DiagnosticSeverity, DiagnosticTag, CodeDescription, Diagnostic, Command, TextEdit$1, ChangeAnnotation, ChangeAnnotationIdentifier, AnnotatedTextEdit, TextDocumentEdit, CreateFile, RenameFile, DeleteFile, WorkspaceEdit, TextEditChangeImpl, SnippetTextEdit, ChangeAnnotations, WorkspaceChange, TextDocumentIdentifier, VersionedTextDocumentIdentifier, OptionalVersionedTextDocumentIdentifier, LanguageKind, TextDocumentItem, MarkupKind, MarkupContent, CompletionItemKind, InsertTextFormat, CompletionItemTag, InsertReplaceEdit, InsertTextMode, ApplyKind, CompletionItemLabelDetails, CompletionItem, CompletionList, MarkedString, Hover, ParameterInformation, SignatureInformation, DocumentHighlightKind, DocumentHighlight, SymbolKind, SymbolTag, SymbolInformation, WorkspaceSymbol, DocumentSymbol, CodeActionKind$1, CodeActionTriggerKind, CodeActionContext, CodeActionTag, CodeAction$1, CodeLens, FormattingOptions, DocumentLink, SelectionRange, SemanticTokenTypes, SemanticTokenModifiers, SemanticTokens, InlineValueText, InlineValueVariableLookup, InlineValueEvaluatableExpression, InlineValueContext, InlayHintKind, InlayHintLabelPart, InlayHint, StringValue, InlineCompletionItem, InlineCompletionList, InlineCompletionTriggerKind, SelectedCompletionInfo, InlineCompletionContext, WorkspaceFolder, EOL, TextDocument$1, FullTextDocument$1, Is;
var init_main = __esmMin((() => {
	(function(DocumentUri) {
		function is(value) {
			return typeof value === "string";
		}
		DocumentUri.is = is;
	})(DocumentUri || (DocumentUri = {}));
	(function(URI) {
		function is(value) {
			return typeof value === "string";
		}
		URI.is = is;
	})(URI || (URI = {}));
	(function(integer) {
		integer.MIN_VALUE = -2147483648;
		integer.MAX_VALUE = 2147483647;
		function is(value) {
			return typeof value === "number" && integer.MIN_VALUE <= value && value <= integer.MAX_VALUE;
		}
		integer.is = is;
	})(integer || (integer = {}));
	(function(uinteger) {
		uinteger.MIN_VALUE = 0;
		uinteger.MAX_VALUE = 2147483647;
		function is(value) {
			return typeof value === "number" && uinteger.MIN_VALUE <= value && value <= uinteger.MAX_VALUE;
		}
		uinteger.is = is;
	})(uinteger || (uinteger = {}));
	(function(Position) {
		/**
		* Creates a new Position literal from the given line and character.
		* @param line The position's line.
		* @param character The position's character.
		*/
		function create(line, character) {
			if (line === Number.MAX_VALUE) line = uinteger.MAX_VALUE;
			if (character === Number.MAX_VALUE) character = uinteger.MAX_VALUE;
			return {
				line,
				character
			};
		}
		Position.create = create;
		/**
		* Checks whether the given literal conforms to the {@link Position} interface.
		*/
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
		}
		Position.is = is;
	})(Position || (Position = {}));
	(function(Range) {
		function create(one, two, three, four) {
			if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) return {
				start: Position.create(one, two),
				end: Position.create(three, four)
			};
			else if (Position.is(one) && Position.is(two)) return {
				start: one,
				end: two
			};
			else throw new Error(`Range#create called with invalid arguments[${one}, ${two}, ${three}, ${four}]`);
		}
		Range.create = create;
		/**
		* Checks whether the given literal conforms to the {@link Range} interface.
		*/
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
		}
		Range.is = is;
	})(Range || (Range = {}));
	(function(Location) {
		/**
		* Creates a Location literal.
		* @param uri The location's uri.
		* @param range The location's range.
		*/
		function create(uri, range) {
			return {
				uri,
				range
			};
		}
		Location.create = create;
		/**
		* Checks whether the given literal conforms to the {@link Location} interface.
		*/
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
		}
		Location.is = is;
	})(Location || (Location = {}));
	(function(LocationLink) {
		/**
		* Creates a LocationLink literal.
		* @param targetUri The definition's uri.
		* @param targetRange The full range of the definition.
		* @param targetSelectionRange The span of the symbol definition at the target.
		* @param originSelectionRange The span of the symbol being defined in the originating source file.
		*/
		function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
			return {
				targetUri,
				targetRange,
				targetSelectionRange,
				originSelectionRange
			};
		}
		LocationLink.create = create;
		/**
		* Checks whether the given literal conforms to the {@link LocationLink} interface.
		*/
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri) && Range.is(candidate.targetSelectionRange) && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
		}
		LocationLink.is = is;
	})(LocationLink || (LocationLink = {}));
	(function(Color) {
		/**
		* Creates a new Color literal.
		*/
		function create(red, green, blue, alpha) {
			return {
				red,
				green,
				blue,
				alpha
			};
		}
		Color.create = create;
		/**
		* Checks whether the given literal conforms to the {@link Color} interface.
		*/
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && Is.numberRange(candidate.red, 0, 1) && Is.numberRange(candidate.green, 0, 1) && Is.numberRange(candidate.blue, 0, 1) && Is.numberRange(candidate.alpha, 0, 1);
		}
		Color.is = is;
	})(Color || (Color = {}));
	(function(ColorInformation) {
		/**
		* Creates a new ColorInformation literal.
		*/
		function create(range, color) {
			return {
				range,
				color
			};
		}
		ColorInformation.create = create;
		/**
		* Checks whether the given literal conforms to the {@link ColorInformation} interface.
		*/
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && Range.is(candidate.range) && Color.is(candidate.color);
		}
		ColorInformation.is = is;
	})(ColorInformation || (ColorInformation = {}));
	(function(ColorPresentation) {
		/**
		* Creates a new ColorInformation literal.
		*/
		function create(label, textEdit, additionalTextEdits) {
			return {
				label,
				textEdit,
				additionalTextEdits
			};
		}
		ColorPresentation.create = create;
		/**
		* Checks whether the given literal conforms to the {@link ColorInformation} interface.
		*/
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.undefined(candidate.textEdit) || TextEdit$1.is(candidate)) && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit$1.is));
		}
		ColorPresentation.is = is;
	})(ColorPresentation || (ColorPresentation = {}));
	(function(FoldingRangeKind) {
		/**
		* Folding range for a comment
		*/
		FoldingRangeKind.Comment = "comment";
		/**
		* Folding range for an import or include
		*/
		FoldingRangeKind.Imports = "imports";
		/**
		* Folding range for a region (e.g. `#region`)
		*/
		FoldingRangeKind.Region = "region";
	})(FoldingRangeKind || (FoldingRangeKind = {}));
	(function(FoldingRange) {
		/**
		* Creates a new FoldingRange literal.
		*/
		function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
			const result = {
				startLine,
				endLine
			};
			if (Is.defined(startCharacter)) result.startCharacter = startCharacter;
			if (Is.defined(endCharacter)) result.endCharacter = endCharacter;
			if (Is.defined(kind)) result.kind = kind;
			if (Is.defined(collapsedText)) result.collapsedText = collapsedText;
			return result;
		}
		FoldingRange.create = create;
		/**
		* Checks whether the given literal conforms to the {@link FoldingRange} interface.
		*/
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && Is.uinteger(candidate.startLine) && Is.uinteger(candidate.startLine) && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter)) && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter)) && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
		}
		FoldingRange.is = is;
	})(FoldingRange || (FoldingRange = {}));
	(function(DiagnosticRelatedInformation) {
		/**
		* Creates a new DiagnosticRelatedInformation literal.
		*/
		function create(location, message) {
			return {
				location,
				message
			};
		}
		DiagnosticRelatedInformation.create = create;
		/**
		* Checks whether the given literal conforms to the {@link DiagnosticRelatedInformation} interface.
		*/
		function is(value) {
			const candidate = value;
			return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
		}
		DiagnosticRelatedInformation.is = is;
	})(DiagnosticRelatedInformation || (DiagnosticRelatedInformation = {}));
	(function(DiagnosticSeverity) {
		/**
		* Reports an error.
		*/
		DiagnosticSeverity.Error = 1;
		/**
		* Reports a warning.
		*/
		DiagnosticSeverity.Warning = 2;
		/**
		* Reports an information.
		*/
		DiagnosticSeverity.Information = 3;
		/**
		* Reports a hint.
		*/
		DiagnosticSeverity.Hint = 4;
	})(DiagnosticSeverity || (DiagnosticSeverity = {}));
	(function(DiagnosticTag) {
		/**
		* Unused or unnecessary code.
		*
		* Clients are allowed to render diagnostics with this tag faded out instead of having
		* an error squiggle.
		*/
		DiagnosticTag.Unnecessary = 1;
		/**
		* Deprecated or obsolete code.
		*
		* Clients are allowed to rendered diagnostics with this tag strike through.
		*/
		DiagnosticTag.Deprecated = 2;
	})(DiagnosticTag || (DiagnosticTag = {}));
	(function(CodeDescription) {
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && Is.string(candidate.href);
		}
		CodeDescription.is = is;
	})(CodeDescription || (CodeDescription = {}));
	(function(Diagnostic) {
		/**
		* Creates a new Diagnostic literal.
		*/
		function create(range, message, severity, code, source, relatedInformation) {
			const result = {
				range,
				message
			};
			if (Is.defined(severity)) result.severity = severity;
			if (Is.defined(code)) result.code = code;
			if (Is.defined(source)) result.source = source;
			if (Is.defined(relatedInformation)) result.relatedInformation = relatedInformation;
			return result;
		}
		Diagnostic.create = create;
		/**
		* Checks whether the given literal conforms to the {@link Diagnostic} interface.
		*/
		function is(value) {
			var _a;
			const candidate = value;
			return Is.defined(candidate) && Range.is(candidate.range) && (Is.string(candidate.message) || MarkupContent.is(candidate.message)) && (Is.number(candidate.severity) || Is.undefined(candidate.severity)) && (Is.integer(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code)) && (Is.undefined(candidate.codeDescription) || Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && (Is.string(candidate.source) || Is.undefined(candidate.source)) && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
		}
		Diagnostic.is = is;
		/**
		* Checks whether the given diagnostic's message conforms to the 3.17.0
		* version of the protocol where the message is a string.
		*
		* @param value the diagnostic
		* @returns true if the diagnostic's message is a string, false otherwise.
		*/
		function is3_17(value) {
			return Is.string(value.message);
		}
		Diagnostic.is3_17 = is3_17;
		/**
		* Gets the message string of a diagnostic. If the message is already a
		* string, it is returned as is. If the message is a MarkupContent,
		* the value of the MarkupContent is returned. Otherwise an error is thrown.
		*
		* @param diagnostic the diagnostic to get the message string from.
		* @returns the message string of the given diagnostic.
		*/
		function getMessageString(diagnostic) {
			if (Is.string(diagnostic.message)) return diagnostic.message;
			else if (MarkupContent.is(diagnostic.message)) return diagnostic.message.value;
			else throw new Error(`Unknown message type ${typeof diagnostic.message}`);
		}
		Diagnostic.getMessageString = getMessageString;
	})(Diagnostic || (Diagnostic = {}));
	(function(Command) {
		/**
		* Creates a new Command literal.
		*/
		function create(title, command, ...args) {
			const result = {
				title,
				command
			};
			if (Is.defined(args) && args.length > 0) result.arguments = args;
			return result;
		}
		Command.create = create;
		/**
		* Checks whether the given literal conforms to the {@link Command} interface.
		*/
		function is(value) {
			const candidate = value;
			return Is.defined(candidate) && Is.string(candidate.title) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip)) && Is.string(candidate.command);
		}
		Command.is = is;
	})(Command || (Command = {}));
	(function(TextEdit) {
		/**
		* Creates a replace text edit.
		* @param range The range of text to be replaced.
		* @param newText The new text.
		*/
		function replace(range, newText) {
			return {
				range,
				newText
			};
		}
		TextEdit.replace = replace;
		/**
		* Creates an insert text edit.
		* @param position The position to insert the text at.
		* @param newText The text to be inserted.
		*/
		function insert(position, newText) {
			return {
				range: {
					start: position,
					end: position
				},
				newText
			};
		}
		TextEdit.insert = insert;
		/**
		* Creates a delete text edit.
		* @param range The range of text to be deleted.
		*/
		function del(range) {
			return {
				range,
				newText: ""
			};
		}
		TextEdit.del = del;
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && Is.string(candidate.newText) && Range.is(candidate.range);
		}
		TextEdit.is = is;
	})(TextEdit$1 || (TextEdit$1 = {}));
	(function(ChangeAnnotation) {
		function create(label, needsConfirmation, description) {
			const result = { label };
			if (needsConfirmation !== void 0) result.needsConfirmation = needsConfirmation;
			if (description !== void 0) result.description = description;
			return result;
		}
		ChangeAnnotation.create = create;
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
		}
		ChangeAnnotation.is = is;
	})(ChangeAnnotation || (ChangeAnnotation = {}));
	(function(ChangeAnnotationIdentifier) {
		function is(value) {
			const candidate = value;
			return Is.string(candidate);
		}
		ChangeAnnotationIdentifier.is = is;
	})(ChangeAnnotationIdentifier || (ChangeAnnotationIdentifier = {}));
	(function(AnnotatedTextEdit) {
		/**
		* Creates an annotated replace text edit.
		*
		* @param range The range of text to be replaced.
		* @param newText The new text.
		* @param annotation The annotation.
		*/
		function replace(range, newText, annotation) {
			return {
				range,
				newText,
				annotationId: annotation
			};
		}
		AnnotatedTextEdit.replace = replace;
		/**
		* Creates an annotated insert text edit.
		*
		* @param position The position to insert the text at.
		* @param newText The text to be inserted.
		* @param annotation The annotation.
		*/
		function insert(position, newText, annotation) {
			return {
				range: {
					start: position,
					end: position
				},
				newText,
				annotationId: annotation
			};
		}
		AnnotatedTextEdit.insert = insert;
		/**
		* Creates an annotated delete text edit.
		*
		* @param range The range of text to be deleted.
		* @param annotation The annotation.
		*/
		function del(range, annotation) {
			return {
				range,
				newText: "",
				annotationId: annotation
			};
		}
		AnnotatedTextEdit.del = del;
		function is(value) {
			const candidate = value;
			return TextEdit$1.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
		}
		AnnotatedTextEdit.is = is;
	})(AnnotatedTextEdit || (AnnotatedTextEdit = {}));
	(function(TextDocumentEdit) {
		/**
		* Creates a new `TextDocumentEdit`
		*/
		function create(textDocument, edits) {
			return {
				textDocument,
				edits
			};
		}
		TextDocumentEdit.create = create;
		function is(value) {
			const candidate = value;
			return Is.defined(candidate) && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
		}
		TextDocumentEdit.is = is;
	})(TextDocumentEdit || (TextDocumentEdit = {}));
	(function(CreateFile) {
		function create(uri, options, annotation) {
			const result = {
				kind: "create",
				uri
			};
			if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) result.options = options;
			if (annotation !== void 0) result.annotationId = annotation;
			return result;
		}
		CreateFile.create = create;
		function is(value) {
			const candidate = value;
			return candidate && candidate.kind === "create" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
		}
		CreateFile.is = is;
	})(CreateFile || (CreateFile = {}));
	(function(RenameFile) {
		function create(oldUri, newUri, options, annotation) {
			const result = {
				kind: "rename",
				oldUri,
				newUri
			};
			if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) result.options = options;
			if (annotation !== void 0) result.annotationId = annotation;
			return result;
		}
		RenameFile.create = create;
		function is(value) {
			const candidate = value;
			return candidate && candidate.kind === "rename" && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
		}
		RenameFile.is = is;
	})(RenameFile || (RenameFile = {}));
	(function(DeleteFile) {
		function create(uri, options, annotation) {
			const result = {
				kind: "delete",
				uri
			};
			if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) result.options = options;
			if (annotation !== void 0) result.annotationId = annotation;
			return result;
		}
		DeleteFile.create = create;
		function is(value) {
			const candidate = value;
			return candidate && candidate.kind === "delete" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
		}
		DeleteFile.is = is;
	})(DeleteFile || (DeleteFile = {}));
	(function(WorkspaceEdit) {
		function is(value) {
			const candidate = value;
			return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every((change) => {
				if (Is.string(change.kind)) return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
				else return TextDocumentEdit.is(change);
			}));
		}
		WorkspaceEdit.is = is;
	})(WorkspaceEdit || (WorkspaceEdit = {}));
	TextEditChangeImpl = class {
		constructor(edits, changeAnnotations) {
			this.edits = edits;
			this.changeAnnotations = changeAnnotations;
		}
		insert(position, newText, annotation) {
			let edit;
			let id;
			if (annotation === void 0) edit = TextEdit$1.insert(position, newText);
			else if (ChangeAnnotationIdentifier.is(annotation)) {
				id = annotation;
				edit = AnnotatedTextEdit.insert(position, newText, annotation);
			} else {
				this.assertChangeAnnotations(this.changeAnnotations);
				id = this.changeAnnotations.manage(annotation);
				edit = AnnotatedTextEdit.insert(position, newText, id);
			}
			this.edits.push(edit);
			if (id !== void 0) return id;
		}
		replace(range, newText, annotation) {
			let edit;
			let id;
			if (annotation === void 0) edit = TextEdit$1.replace(range, newText);
			else if (ChangeAnnotationIdentifier.is(annotation)) {
				id = annotation;
				edit = AnnotatedTextEdit.replace(range, newText, annotation);
			} else {
				this.assertChangeAnnotations(this.changeAnnotations);
				id = this.changeAnnotations.manage(annotation);
				edit = AnnotatedTextEdit.replace(range, newText, id);
			}
			this.edits.push(edit);
			if (id !== void 0) return id;
		}
		delete(range, annotation) {
			let edit;
			let id;
			if (annotation === void 0) edit = TextEdit$1.del(range);
			else if (ChangeAnnotationIdentifier.is(annotation)) {
				id = annotation;
				edit = AnnotatedTextEdit.del(range, annotation);
			} else {
				this.assertChangeAnnotations(this.changeAnnotations);
				id = this.changeAnnotations.manage(annotation);
				edit = AnnotatedTextEdit.del(range, id);
			}
			this.edits.push(edit);
			if (id !== void 0) return id;
		}
		add(edit) {
			this.edits.push(edit);
		}
		all() {
			return this.edits;
		}
		clear() {
			this.edits.splice(0, this.edits.length);
		}
		assertChangeAnnotations(value) {
			if (value === void 0) throw new Error(`Text edit change is not configured to manage change annotations.`);
		}
	};
	(function(SnippetTextEdit) {
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && Range.is(candidate.range) && StringValue.isSnippet(candidate.snippet) && (candidate.annotationId === void 0 || ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
		}
		SnippetTextEdit.is = is;
	})(SnippetTextEdit || (SnippetTextEdit = {}));
	ChangeAnnotations = class {
		constructor(annotations) {
			this._annotations = annotations === void 0 ? Object.create(null) : annotations;
			this._counter = 0;
			this._size = 0;
		}
		all() {
			return this._annotations;
		}
		get size() {
			return this._size;
		}
		manage(idOrAnnotation, annotation) {
			let id;
			if (ChangeAnnotationIdentifier.is(idOrAnnotation)) id = idOrAnnotation;
			else {
				id = this.nextId();
				annotation = idOrAnnotation;
			}
			if (this._annotations[id] !== void 0) throw new Error(`Id ${id} is already in use.`);
			if (annotation === void 0) throw new Error(`No annotation provided for id ${id}`);
			this._annotations[id] = annotation;
			this._size++;
			return id;
		}
		nextId() {
			this._counter++;
			return this._counter.toString();
		}
	};
	WorkspaceChange = class {
		constructor(workspaceEdit) {
			this._textEditChanges = Object.create(null);
			if (workspaceEdit !== void 0) {
				this._workspaceEdit = workspaceEdit;
				if (workspaceEdit.documentChanges) {
					this._changeAnnotations = new ChangeAnnotations(workspaceEdit.changeAnnotations);
					workspaceEdit.changeAnnotations = this._changeAnnotations.all();
					workspaceEdit.documentChanges.forEach((change) => {
						if (TextDocumentEdit.is(change)) {
							const textEditChange = new TextEditChangeImpl(change.edits, this._changeAnnotations);
							this._textEditChanges[change.textDocument.uri] = textEditChange;
						}
					});
				} else if (workspaceEdit.changes) Object.keys(workspaceEdit.changes).forEach((key) => {
					const textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
					this._textEditChanges[key] = textEditChange;
				});
			} else this._workspaceEdit = {};
		}
		/**
		* Returns the underlying {@link WorkspaceEdit} literal
		* use to be returned from a workspace edit operation like rename.
		*/
		get edit() {
			this.initDocumentChanges();
			if (this._changeAnnotations !== void 0) {
				if (this._changeAnnotations.size === 0) this._workspaceEdit.changeAnnotations = void 0;
				else this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
			}
			return this._workspaceEdit;
		}
		getTextEditChange(key) {
			if (OptionalVersionedTextDocumentIdentifier.is(key)) {
				this.initDocumentChanges();
				if (this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
				const textDocument = {
					uri: key.uri,
					version: key.version
				};
				let result = this._textEditChanges[textDocument.uri];
				if (!result) {
					const edits = [];
					const textDocumentEdit = {
						textDocument,
						edits
					};
					this._workspaceEdit.documentChanges.push(textDocumentEdit);
					result = new TextEditChangeImpl(edits, this._changeAnnotations);
					this._textEditChanges[textDocument.uri] = result;
				}
				return result;
			} else {
				this.initChanges();
				if (this._workspaceEdit.changes === void 0) throw new Error("Workspace edit is not configured for normal text edit changes.");
				let result = this._textEditChanges[key];
				if (!result) {
					const edits = [];
					this._workspaceEdit.changes[key] = edits;
					result = new TextEditChangeImpl(edits);
					this._textEditChanges[key] = result;
				}
				return result;
			}
		}
		initDocumentChanges() {
			if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
				this._changeAnnotations = new ChangeAnnotations();
				this._workspaceEdit.documentChanges = [];
				this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
			}
		}
		initChanges() {
			if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) this._workspaceEdit.changes = Object.create(null);
		}
		createFile(uri, optionsOrAnnotation, options) {
			this.initDocumentChanges();
			if (this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
			let annotation;
			if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
			else options = optionsOrAnnotation;
			let operation;
			let id;
			if (annotation === void 0) operation = CreateFile.create(uri, options);
			else {
				id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
				operation = CreateFile.create(uri, options, id);
			}
			this._workspaceEdit.documentChanges.push(operation);
			if (id !== void 0) return id;
		}
		renameFile(oldUri, newUri, optionsOrAnnotation, options) {
			this.initDocumentChanges();
			if (this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
			let annotation;
			if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
			else options = optionsOrAnnotation;
			let operation;
			let id;
			if (annotation === void 0) operation = RenameFile.create(oldUri, newUri, options);
			else {
				id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
				operation = RenameFile.create(oldUri, newUri, options, id);
			}
			this._workspaceEdit.documentChanges.push(operation);
			if (id !== void 0) return id;
		}
		deleteFile(uri, optionsOrAnnotation, options) {
			this.initDocumentChanges();
			if (this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
			let annotation;
			if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
			else options = optionsOrAnnotation;
			let operation;
			let id;
			if (annotation === void 0) operation = DeleteFile.create(uri, options);
			else {
				id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
				operation = DeleteFile.create(uri, options, id);
			}
			this._workspaceEdit.documentChanges.push(operation);
			if (id !== void 0) return id;
		}
	};
	(function(TextDocumentIdentifier) {
		/**
		* Creates a new TextDocumentIdentifier literal.
		* @param uri The document's uri.
		*/
		function create(uri) {
			return { uri };
		}
		TextDocumentIdentifier.create = create;
		/**
		* Checks whether the given literal conforms to the {@link TextDocumentIdentifier} interface.
		*/
		function is(value) {
			const candidate = value;
			return Is.defined(candidate) && Is.string(candidate.uri);
		}
		TextDocumentIdentifier.is = is;
	})(TextDocumentIdentifier || (TextDocumentIdentifier = {}));
	(function(VersionedTextDocumentIdentifier) {
		/**
		* Creates a new VersionedTextDocumentIdentifier literal.
		* @param uri The document's uri.
		* @param version The document's version.
		*/
		function create(uri, version) {
			return {
				uri,
				version
			};
		}
		VersionedTextDocumentIdentifier.create = create;
		/**
		* Checks whether the given literal conforms to the {@link VersionedTextDocumentIdentifier} interface.
		*/
		function is(value) {
			const candidate = value;
			return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
		}
		VersionedTextDocumentIdentifier.is = is;
	})(VersionedTextDocumentIdentifier || (VersionedTextDocumentIdentifier = {}));
	(function(OptionalVersionedTextDocumentIdentifier) {
		/**
		* Creates a new OptionalVersionedTextDocumentIdentifier literal.
		* @param uri The document's uri.
		* @param version The document's version.
		*/
		function create(uri, version) {
			return {
				uri,
				version
			};
		}
		OptionalVersionedTextDocumentIdentifier.create = create;
		/**
		* Checks whether the given literal conforms to the {@link OptionalVersionedTextDocumentIdentifier} interface.
		*/
		function is(value) {
			const candidate = value;
			return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
		}
		OptionalVersionedTextDocumentIdentifier.is = is;
	})(OptionalVersionedTextDocumentIdentifier || (OptionalVersionedTextDocumentIdentifier = {}));
	(function(LanguageKind) {
		LanguageKind.ABAP = "abap";
		LanguageKind.WindowsBat = "bat";
		LanguageKind.BibTeX = "bibtex";
		LanguageKind.Clojure = "clojure";
		LanguageKind.Coffeescript = "coffeescript";
		LanguageKind.C = "c";
		LanguageKind.CPP = "cpp";
		LanguageKind.CSharp = "csharp";
		LanguageKind.CSS = "css";
		/**
		* @since 3.18.0
		*/
		LanguageKind.D = "d";
		/**
		* @since 3.18.0
		*/
		LanguageKind.Delphi = "pascal";
		LanguageKind.Diff = "diff";
		LanguageKind.Dart = "dart";
		LanguageKind.Dockerfile = "dockerfile";
		LanguageKind.Elixir = "elixir";
		LanguageKind.Erlang = "erlang";
		LanguageKind.FSharp = "fsharp";
		LanguageKind.GitCommit = "git-commit";
		LanguageKind.GitRebase = "git-rebase";
		LanguageKind.Go = "go";
		LanguageKind.Groovy = "groovy";
		LanguageKind.Handlebars = "handlebars";
		LanguageKind.Haskell = "haskell";
		LanguageKind.HTML = "html";
		LanguageKind.Ini = "ini";
		LanguageKind.Java = "java";
		LanguageKind.JavaScript = "javascript";
		LanguageKind.JavaScriptReact = "javascriptreact";
		LanguageKind.JSON = "json";
		LanguageKind.LaTeX = "latex";
		LanguageKind.Less = "less";
		LanguageKind.Lua = "lua";
		LanguageKind.Makefile = "makefile";
		LanguageKind.Markdown = "markdown";
		LanguageKind.ObjectiveC = "objective-c";
		LanguageKind.ObjectiveCPP = "objective-cpp";
		/**
		* @since 3.18.0
		*/
		LanguageKind.Pascal = "pascal";
		LanguageKind.Perl = "perl";
		LanguageKind.Perl6 = "perl6";
		LanguageKind.PHP = "php";
		LanguageKind.Plaintext = "plaintext";
		LanguageKind.Powershell = "powershell";
		LanguageKind.Pug = "jade";
		LanguageKind.Python = "python";
		LanguageKind.R = "r";
		LanguageKind.Razor = "razor";
		LanguageKind.Ruby = "ruby";
		LanguageKind.Rust = "rust";
		LanguageKind.SCSS = "scss";
		LanguageKind.SASS = "sass";
		LanguageKind.Scala = "scala";
		LanguageKind.ShaderLab = "shaderlab";
		LanguageKind.ShellScript = "shellscript";
		LanguageKind.SQL = "sql";
		LanguageKind.Swift = "swift";
		LanguageKind.TypeScript = "typescript";
		LanguageKind.TypeScriptReact = "typescriptreact";
		LanguageKind.TeX = "tex";
		LanguageKind.VisualBasic = "vb";
		LanguageKind.XML = "xml";
		LanguageKind.XSL = "xsl";
		LanguageKind.YAML = "yaml";
	})(LanguageKind || (LanguageKind = {}));
	(function(TextDocumentItem) {
		/**
		* Creates a new TextDocumentItem literal.
		* @param uri The document's uri.
		* @param languageId The document's language identifier.
		* @param version The document's version number.
		* @param text The document's text.
		*/
		function create(uri, languageId, version, text) {
			return {
				uri,
				languageId,
				version,
				text
			};
		}
		TextDocumentItem.create = create;
		/**
		* Checks whether the given literal conforms to the {@link TextDocumentItem} interface.
		*/
		function is(value) {
			const candidate = value;
			return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
		}
		TextDocumentItem.is = is;
	})(TextDocumentItem || (TextDocumentItem = {}));
	(function(MarkupKind) {
		/**
		* Plain text is supported as a content format
		*/
		MarkupKind.PlainText = "plaintext";
		/**
		* Markdown is supported as a content format
		*/
		MarkupKind.Markdown = "markdown";
		/**
		* Checks whether the given value is a value of the {@link MarkupKind} type.
		*/
		function is(value) {
			const candidate = value;
			return candidate === MarkupKind.PlainText || candidate === MarkupKind.Markdown;
		}
		MarkupKind.is = is;
	})(MarkupKind || (MarkupKind = {}));
	(function(MarkupContent) {
		/**
		* Checks whether the given value conforms to the {@link MarkupContent} interface.
		*/
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
		}
		MarkupContent.is = is;
	})(MarkupContent || (MarkupContent = {}));
	(function(CompletionItemKind) {
		CompletionItemKind.Text = 1;
		CompletionItemKind.Method = 2;
		CompletionItemKind.Function = 3;
		CompletionItemKind.Constructor = 4;
		CompletionItemKind.Field = 5;
		CompletionItemKind.Variable = 6;
		CompletionItemKind.Class = 7;
		CompletionItemKind.Interface = 8;
		CompletionItemKind.Module = 9;
		CompletionItemKind.Property = 10;
		CompletionItemKind.Unit = 11;
		CompletionItemKind.Value = 12;
		CompletionItemKind.Enum = 13;
		CompletionItemKind.Keyword = 14;
		CompletionItemKind.Snippet = 15;
		CompletionItemKind.Color = 16;
		CompletionItemKind.File = 17;
		CompletionItemKind.Reference = 18;
		CompletionItemKind.Folder = 19;
		CompletionItemKind.EnumMember = 20;
		CompletionItemKind.Constant = 21;
		CompletionItemKind.Struct = 22;
		CompletionItemKind.Event = 23;
		CompletionItemKind.Operator = 24;
		CompletionItemKind.TypeParameter = 25;
	})(CompletionItemKind || (CompletionItemKind = {}));
	(function(InsertTextFormat) {
		/**
		* The primary text to be inserted is treated as a plain string.
		*/
		InsertTextFormat.PlainText = 1;
		/**
		* The primary text to be inserted is treated as a snippet.
		*
		* A snippet can define tab stops and placeholders with `$1`, `$2`
		* and `${3:foo}`. `$0` defines the final tab stop, it defaults to
		* the end of the snippet. Placeholders with equal identifiers are linked,
		* that is typing in one will update others too.
		*
		* See also: https://microsoft.github.io/language-server-protocol/specifications/specification-current/#snippet_syntax
		*/
		InsertTextFormat.Snippet = 2;
	})(InsertTextFormat || (InsertTextFormat = {}));
	(function(CompletionItemTag) {
		/**
		* Render a completion as obsolete, usually using a strike-out.
		*/
		CompletionItemTag.Deprecated = 1;
	})(CompletionItemTag || (CompletionItemTag = {}));
	(function(InsertReplaceEdit) {
		/**
		* Creates a new insert / replace edit
		*/
		function create(newText, insert, replace) {
			return {
				newText,
				insert,
				replace
			};
		}
		InsertReplaceEdit.create = create;
		/**
		* Checks whether the given literal conforms to the {@link InsertReplaceEdit} interface.
		*/
		function is(value) {
			const candidate = value;
			return candidate && Is.string(candidate.newText) && Range.is(candidate.insert) && Range.is(candidate.replace);
		}
		InsertReplaceEdit.is = is;
	})(InsertReplaceEdit || (InsertReplaceEdit = {}));
	(function(InsertTextMode) {
		/**
		* The insertion or replace strings is taken as it is. If the
		* value is multi line the lines below the cursor will be
		* inserted using the indentation defined in the string value.
		* The client will not apply any kind of adjustments to the
		* string.
		*/
		InsertTextMode.asIs = 1;
		/**
		* The editor adjusts leading whitespace of new lines so that
		* they match the indentation up to the cursor of the line for
		* which the item is accepted.
		*
		* Consider a line like this: <2tabs><cursor><3tabs>foo. Accepting a
		* multi line completion item is indented using 2 tabs and all
		* following lines inserted will be indented using 2 tabs as well.
		*/
		InsertTextMode.adjustIndentation = 2;
	})(InsertTextMode || (InsertTextMode = {}));
	(function(ApplyKind) {
		/**
		* The value from the individual item (if provided and not `null`) will be
		* used instead of the default.
		*/
		ApplyKind.Replace = 1;
		/**
		* The value from the item will be merged with the default.
		*
		* The specific rules for mergeing values are defined against each field
		* that supports merging.
		*/
		ApplyKind.Merge = 2;
	})(ApplyKind || (ApplyKind = {}));
	(function(CompletionItemLabelDetails) {
		function is(value) {
			const candidate = value;
			return candidate && (Is.string(candidate.detail) || candidate.detail === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
		}
		CompletionItemLabelDetails.is = is;
	})(CompletionItemLabelDetails || (CompletionItemLabelDetails = {}));
	(function(CompletionItem) {
		/**
		* Create a completion item and seed it with a label.
		* @param label The completion item's label
		*/
		function create(label) {
			return { label };
		}
		CompletionItem.create = create;
	})(CompletionItem || (CompletionItem = {}));
	(function(CompletionList) {
		/**
		* Creates a new completion list.
		*
		* @param items The completion items.
		* @param isIncomplete The list is not complete.
		*/
		function create(items, isIncomplete) {
			return {
				items: items ? items : [],
				isIncomplete: !!isIncomplete
			};
		}
		CompletionList.create = create;
	})(CompletionList || (CompletionList = {}));
	(function(MarkedString) {
		/**
		* Creates a marked string from plain text.
		*
		* @param plainText The plain text.
		*/
		function fromPlainText(plainText) {
			return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
		}
		MarkedString.fromPlainText = fromPlainText;
		/**
		* Checks whether the given value conforms to the {@link MarkedString} type.
		*/
		function is(value) {
			const candidate = value;
			return Is.string(candidate) || Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value);
		}
		MarkedString.is = is;
	})(MarkedString || (MarkedString = {}));
	(function(Hover) {
		/**
		* Checks whether the given value conforms to the {@link Hover} interface.
		*/
		function is(value) {
			const candidate = value;
			return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) || MarkedString.is(candidate.contents) || Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === void 0 || Range.is(value.range));
		}
		Hover.is = is;
	})(Hover || (Hover = {}));
	(function(ParameterInformation) {
		/**
		* Creates a new parameter information literal.
		*
		* @param label A label string.
		* @param documentation A doc string.
		*/
		function create(label, documentation) {
			return documentation ? {
				label,
				documentation
			} : { label };
		}
		ParameterInformation.create = create;
	})(ParameterInformation || (ParameterInformation = {}));
	(function(SignatureInformation) {
		function create(label, documentation, ...parameters) {
			const result = { label };
			if (Is.defined(documentation)) result.documentation = documentation;
			if (Is.defined(parameters)) result.parameters = parameters;
			else result.parameters = [];
			return result;
		}
		SignatureInformation.create = create;
	})(SignatureInformation || (SignatureInformation = {}));
	(function(DocumentHighlightKind) {
		/**
		* A textual occurrence.
		*/
		DocumentHighlightKind.Text = 1;
		/**
		* Read-access of a symbol, like reading a variable.
		*/
		DocumentHighlightKind.Read = 2;
		/**
		* Write-access of a symbol, like writing to a variable.
		*/
		DocumentHighlightKind.Write = 3;
	})(DocumentHighlightKind || (DocumentHighlightKind = {}));
	(function(DocumentHighlight) {
		/**
		* Create a DocumentHighlight object.
		* @param range The range the highlight applies to.
		* @param kind The highlight kind
		*/
		function create(range, kind) {
			const result = { range };
			if (Is.number(kind)) result.kind = kind;
			return result;
		}
		DocumentHighlight.create = create;
	})(DocumentHighlight || (DocumentHighlight = {}));
	(function(SymbolKind) {
		SymbolKind.File = 1;
		SymbolKind.Module = 2;
		SymbolKind.Namespace = 3;
		SymbolKind.Package = 4;
		SymbolKind.Class = 5;
		SymbolKind.Method = 6;
		SymbolKind.Property = 7;
		SymbolKind.Field = 8;
		SymbolKind.Constructor = 9;
		SymbolKind.Enum = 10;
		SymbolKind.Interface = 11;
		SymbolKind.Function = 12;
		SymbolKind.Variable = 13;
		SymbolKind.Constant = 14;
		SymbolKind.String = 15;
		SymbolKind.Number = 16;
		SymbolKind.Boolean = 17;
		SymbolKind.Array = 18;
		SymbolKind.Object = 19;
		SymbolKind.Key = 20;
		SymbolKind.Null = 21;
		SymbolKind.EnumMember = 22;
		SymbolKind.Struct = 23;
		SymbolKind.Event = 24;
		SymbolKind.Operator = 25;
		SymbolKind.TypeParameter = 26;
	})(SymbolKind || (SymbolKind = {}));
	(function(SymbolTag) {
		/**
		* Render a symbol as obsolete, usually using a strike-out.
		*/
		SymbolTag.Deprecated = 1;
	})(SymbolTag || (SymbolTag = {}));
	(function(SymbolInformation) {
		/**
		* Creates a new symbol information literal.
		*
		* @param name The name of the symbol.
		* @param kind The kind of the symbol.
		* @param range The range of the location of the symbol.
		* @param uri The resource of the location of symbol.
		* @param containerName The name of the symbol containing the symbol.
		*/
		function create(name, kind, range, uri, containerName) {
			const result = {
				name,
				kind,
				location: {
					uri,
					range
				}
			};
			if (containerName) result.containerName = containerName;
			return result;
		}
		SymbolInformation.create = create;
	})(SymbolInformation || (SymbolInformation = {}));
	(function(WorkspaceSymbol) {
		/**
		* Create a new workspace symbol.
		*
		* @param name The name of the symbol.
		* @param kind The kind of the symbol.
		* @param uri The resource of the location of the symbol.
		* @param range An options range of the location.
		* @returns A WorkspaceSymbol.
		*/
		function create(name, kind, uri, range) {
			return range !== void 0 ? {
				name,
				kind,
				location: {
					uri,
					range
				}
			} : {
				name,
				kind,
				location: { uri }
			};
		}
		WorkspaceSymbol.create = create;
	})(WorkspaceSymbol || (WorkspaceSymbol = {}));
	(function(DocumentSymbol) {
		/**
		* Creates a new symbol information literal.
		*
		* @param name The name of the symbol.
		* @param detail The detail of the symbol.
		* @param kind The kind of the symbol.
		* @param range The range of the symbol.
		* @param selectionRange The selectionRange of the symbol.
		* @param children Children of the symbol.
		*/
		function create(name, detail, kind, range, selectionRange, children) {
			const result = {
				name,
				detail,
				kind,
				range,
				selectionRange
			};
			if (children !== void 0) result.children = children;
			return result;
		}
		DocumentSymbol.create = create;
		/**
		* Checks whether the given literal conforms to the {@link DocumentSymbol} interface.
		*/
		function is(value) {
			const candidate = value;
			return candidate && Is.string(candidate.name) && Is.number(candidate.kind) && Range.is(candidate.range) && Range.is(candidate.selectionRange) && (candidate.detail === void 0 || Is.string(candidate.detail)) && (candidate.deprecated === void 0 || Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
		}
		DocumentSymbol.is = is;
	})(DocumentSymbol || (DocumentSymbol = {}));
	(function(CodeActionKind) {
		/**
		* Empty kind.
		*/
		CodeActionKind.Empty = "";
		/**
		* Base kind for quickfix actions: 'quickfix'
		*/
		CodeActionKind.QuickFix = "quickfix";
		/**
		* Base kind for refactoring actions: 'refactor'
		*/
		CodeActionKind.Refactor = "refactor";
		/**
		* Base kind for refactoring extraction actions: 'refactor.extract'
		*
		* Example extract actions:
		*
		* - Extract method
		* - Extract function
		* - Extract variable
		* - Extract interface from class
		* - ...
		*/
		CodeActionKind.RefactorExtract = "refactor.extract";
		/**
		* Base kind for refactoring inline actions: 'refactor.inline'
		*
		* Example inline actions:
		*
		* - Inline function
		* - Inline variable
		* - Inline constant
		* - ...
		*/
		CodeActionKind.RefactorInline = "refactor.inline";
		/**
		* Base kind for refactoring move actions: `refactor.move`
		*
		* Example move actions:
		*
		* - Move a function to a new file
		* - Move a property between classes
		* - Move method to base class
		* - ...
		*
		* @since 3.18.0
		*/
		CodeActionKind.RefactorMove = "refactor.move";
		/**
		* Base kind for refactoring rewrite actions: 'refactor.rewrite'
		*
		* Example rewrite actions:
		*
		* - Convert JavaScript function to class
		* - Add or remove parameter
		* - Encapsulate field
		* - Make method static
		* - Move method to base class
		* - ...
		*/
		CodeActionKind.RefactorRewrite = "refactor.rewrite";
		/**
		* Base kind for source actions: `source`
		*
		* Source code actions apply to the entire file.
		*/
		CodeActionKind.Source = "source";
		/**
		* Base kind for an organize imports source action: `source.organizeImports`
		*/
		CodeActionKind.SourceOrganizeImports = "source.organizeImports";
		/**
		* Base kind for auto-fix source actions: `source.fixAll`.
		*
		* Fix all actions automatically fix errors that have a clear fix that do not require user input.
		* They should not suppress errors or perform unsafe fixes such as generating new types or classes.
		*
		* @since 3.15.0
		*/
		CodeActionKind.SourceFixAll = "source.fixAll";
		/**
		* Base kind for all code actions applying to the entire notebook's scope. CodeActionKinds using
		* this should always begin with `notebook.`
		*
		* @since 3.18.0
		*/
		CodeActionKind.Notebook = "notebook";
	})(CodeActionKind$1 || (CodeActionKind$1 = {}));
	(function(CodeActionTriggerKind) {
		/**
		* Code actions were explicitly requested by the user or by an extension.
		*/
		CodeActionTriggerKind.Invoked = 1;
		/**
		* Code actions were requested automatically.
		*
		* This typically happens when current selection in a file changes, but can
		* also be triggered when file content changes.
		*/
		CodeActionTriggerKind.Automatic = 2;
	})(CodeActionTriggerKind || (CodeActionTriggerKind = {}));
	(function(CodeActionContext) {
		/**
		* Creates a new CodeActionContext literal.
		*/
		function create(diagnostics, only, triggerKind) {
			const result = { diagnostics };
			if (only !== void 0 && only !== null) result.only = only;
			if (triggerKind !== void 0 && triggerKind !== null) result.triggerKind = triggerKind;
			return result;
		}
		CodeActionContext.create = create;
		/**
		* Checks whether the given literal conforms to the {@link CodeActionContext} interface.
		*/
		function is(value) {
			const candidate = value;
			return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is) && (candidate.only === void 0 || Is.typedArray(candidate.only, Is.string)) && (candidate.triggerKind === void 0 || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
		}
		CodeActionContext.is = is;
	})(CodeActionContext || (CodeActionContext = {}));
	(function(CodeActionTag) {
		/**
		* Marks the code action as LLM-generated.
		*/
		CodeActionTag.LLMGenerated = 1;
		/**
		* Checks whether the given literal conforms to the {@link CodeActionTag} interface.
		*/
		function is(value) {
			return Is.defined(value) && value === CodeActionTag.LLMGenerated;
		}
		CodeActionTag.is = is;
	})(CodeActionTag || (CodeActionTag = {}));
	(function(CodeAction) {
		function create(title, kindOrCommandOrEdit, kind) {
			const result = { title };
			let checkKind = true;
			if (typeof kindOrCommandOrEdit === "string") {
				checkKind = false;
				result.kind = kindOrCommandOrEdit;
			} else if (Command.is(kindOrCommandOrEdit)) result.command = kindOrCommandOrEdit;
			else result.edit = kindOrCommandOrEdit;
			if (checkKind && kind !== void 0) result.kind = kind;
			return result;
		}
		CodeAction.create = create;
		function is(value) {
			const candidate = value;
			return candidate && Is.string(candidate.title) && (candidate.diagnostics === void 0 || Is.typedArray(candidate.diagnostics, Diagnostic.is)) && (candidate.kind === void 0 || Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || Command.is(candidate.command)) && (candidate.isPreferred === void 0 || Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || WorkspaceEdit.is(candidate.edit)) && (candidate.tags === void 0 || Is.typedArray(candidate.tags, CodeActionTag.is));
		}
		CodeAction.is = is;
	})(CodeAction$1 || (CodeAction$1 = {}));
	(function(CodeLens) {
		/**
		* Creates a new CodeLens literal.
		*/
		function create(range, data) {
			const result = { range };
			if (Is.defined(data)) result.data = data;
			return result;
		}
		CodeLens.create = create;
		/**
		* Checks whether the given literal conforms to the {@link CodeLens} interface.
		*/
		function is(value) {
			const candidate = value;
			return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
		}
		CodeLens.is = is;
	})(CodeLens || (CodeLens = {}));
	(function(FormattingOptions) {
		/**
		* Creates a new FormattingOptions literal.
		*/
		function create(tabSize, insertSpaces) {
			return {
				tabSize,
				insertSpaces
			};
		}
		FormattingOptions.create = create;
		/**
		* Checks whether the given literal conforms to the {@link FormattingOptions} interface.
		*/
		function is(value) {
			const candidate = value;
			return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
		}
		FormattingOptions.is = is;
	})(FormattingOptions || (FormattingOptions = {}));
	(function(DocumentLink) {
		/**
		* Creates a new DocumentLink literal.
		*/
		function create(range, target, data) {
			return {
				range,
				target,
				data
			};
		}
		DocumentLink.create = create;
		/**
		* Checks whether the given literal conforms to the {@link DocumentLink} interface.
		*/
		function is(value) {
			const candidate = value;
			return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
		}
		DocumentLink.is = is;
	})(DocumentLink || (DocumentLink = {}));
	(function(SelectionRange) {
		/**
		* Creates a new SelectionRange
		* @param range the range.
		* @param parent an optional parent.
		*/
		function create(range, parent) {
			return {
				range,
				parent
			};
		}
		SelectionRange.create = create;
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && Range.is(candidate.range) && (candidate.parent === void 0 || SelectionRange.is(candidate.parent));
		}
		SelectionRange.is = is;
	})(SelectionRange || (SelectionRange = {}));
	(function(SemanticTokenTypes) {
		SemanticTokenTypes["namespace"] = "namespace";
		/**
		* Represents a generic type. Acts as a fallback for types which can't be mapped to
		* a specific type like class or enum.
		*/
		SemanticTokenTypes["type"] = "type";
		SemanticTokenTypes["class"] = "class";
		SemanticTokenTypes["enum"] = "enum";
		SemanticTokenTypes["interface"] = "interface";
		SemanticTokenTypes["struct"] = "struct";
		SemanticTokenTypes["typeParameter"] = "typeParameter";
		SemanticTokenTypes["parameter"] = "parameter";
		SemanticTokenTypes["variable"] = "variable";
		SemanticTokenTypes["property"] = "property";
		SemanticTokenTypes["enumMember"] = "enumMember";
		SemanticTokenTypes["event"] = "event";
		SemanticTokenTypes["function"] = "function";
		SemanticTokenTypes["method"] = "method";
		SemanticTokenTypes["macro"] = "macro";
		SemanticTokenTypes["keyword"] = "keyword";
		SemanticTokenTypes["modifier"] = "modifier";
		SemanticTokenTypes["comment"] = "comment";
		SemanticTokenTypes["string"] = "string";
		SemanticTokenTypes["number"] = "number";
		SemanticTokenTypes["regexp"] = "regexp";
		SemanticTokenTypes["operator"] = "operator";
		/**
		* @since 3.17.0
		*/
		SemanticTokenTypes["decorator"] = "decorator";
		/**
		* @since 3.18.0
		*/
		SemanticTokenTypes["label"] = "label";
	})(SemanticTokenTypes || (SemanticTokenTypes = {}));
	(function(SemanticTokenModifiers) {
		SemanticTokenModifiers["declaration"] = "declaration";
		SemanticTokenModifiers["definition"] = "definition";
		SemanticTokenModifiers["readonly"] = "readonly";
		SemanticTokenModifiers["static"] = "static";
		SemanticTokenModifiers["deprecated"] = "deprecated";
		SemanticTokenModifiers["abstract"] = "abstract";
		SemanticTokenModifiers["async"] = "async";
		SemanticTokenModifiers["modification"] = "modification";
		SemanticTokenModifiers["documentation"] = "documentation";
		SemanticTokenModifiers["defaultLibrary"] = "defaultLibrary";
	})(SemanticTokenModifiers || (SemanticTokenModifiers = {}));
	(function(SemanticTokens) {
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && (candidate.resultId === void 0 || typeof candidate.resultId === "string") && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === "number");
		}
		SemanticTokens.is = is;
	})(SemanticTokens || (SemanticTokens = {}));
	(function(InlineValueText) {
		/**
		* Creates a new InlineValueText literal.
		*/
		function create(range, text) {
			return {
				range,
				text
			};
		}
		InlineValueText.create = create;
		function is(value) {
			const candidate = value;
			return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.string(candidate.text);
		}
		InlineValueText.is = is;
	})(InlineValueText || (InlineValueText = {}));
	(function(InlineValueVariableLookup) {
		/**
		* Creates a new InlineValueText literal.
		*/
		function create(range, variableName, caseSensitiveLookup) {
			return {
				range,
				variableName,
				caseSensitiveLookup
			};
		}
		InlineValueVariableLookup.create = create;
		function is(value) {
			const candidate = value;
			return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.boolean(candidate.caseSensitiveLookup) && (Is.string(candidate.variableName) || candidate.variableName === void 0);
		}
		InlineValueVariableLookup.is = is;
	})(InlineValueVariableLookup || (InlineValueVariableLookup = {}));
	(function(InlineValueEvaluatableExpression) {
		/**
		* Creates a new InlineValueEvaluatableExpression literal.
		*/
		function create(range, expression) {
			return {
				range,
				expression
			};
		}
		InlineValueEvaluatableExpression.create = create;
		function is(value) {
			const candidate = value;
			return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && (Is.string(candidate.expression) || candidate.expression === void 0);
		}
		InlineValueEvaluatableExpression.is = is;
	})(InlineValueEvaluatableExpression || (InlineValueEvaluatableExpression = {}));
	(function(InlineValueContext) {
		/**
		* Creates a new InlineValueContext literal.
		*/
		function create(frameId, stoppedLocation) {
			return {
				frameId,
				stoppedLocation
			};
		}
		InlineValueContext.create = create;
		/**
		* Checks whether the given literal conforms to the {@link InlineValueContext} interface.
		*/
		function is(value) {
			const candidate = value;
			return Is.defined(candidate) && Range.is(value.stoppedLocation);
		}
		InlineValueContext.is = is;
	})(InlineValueContext || (InlineValueContext = {}));
	(function(InlayHintKind) {
		/**
		* An inlay hint that for a type annotation.
		*/
		InlayHintKind.Type = 1;
		/**
		* An inlay hint that is for a parameter.
		*/
		InlayHintKind.Parameter = 2;
		function is(value) {
			return value === 1 || value === 2;
		}
		InlayHintKind.is = is;
	})(InlayHintKind || (InlayHintKind = {}));
	(function(InlayHintLabelPart) {
		function create(value) {
			return { value };
		}
		InlayHintLabelPart.create = create;
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.location === void 0 || Location.is(candidate.location)) && (candidate.command === void 0 || Command.is(candidate.command));
		}
		InlayHintLabelPart.is = is;
	})(InlayHintLabelPart || (InlayHintLabelPart = {}));
	(function(InlayHint) {
		function create(position, label, kind) {
			const result = {
				position,
				label
			};
			if (kind !== void 0) result.kind = kind;
			return result;
		}
		InlayHint.create = create;
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && Position.is(candidate.position) && (Is.string(candidate.label) || Is.typedArray(candidate.label, InlayHintLabelPart.is)) && (candidate.kind === void 0 || InlayHintKind.is(candidate.kind)) && candidate.textEdits === void 0 || Is.typedArray(candidate.textEdits, TextEdit$1.is) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.paddingLeft === void 0 || Is.boolean(candidate.paddingLeft)) && (candidate.paddingRight === void 0 || Is.boolean(candidate.paddingRight));
		}
		InlayHint.is = is;
	})(InlayHint || (InlayHint = {}));
	(function(StringValue) {
		function createSnippet(value) {
			return {
				kind: "snippet",
				value
			};
		}
		StringValue.createSnippet = createSnippet;
		function isSnippet(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && candidate.kind === "snippet" && Is.string(candidate.value);
		}
		StringValue.isSnippet = isSnippet;
	})(StringValue || (StringValue = {}));
	(function(InlineCompletionItem) {
		function create(insertText, filterText, range, command) {
			return {
				insertText,
				filterText,
				range,
				command
			};
		}
		InlineCompletionItem.create = create;
	})(InlineCompletionItem || (InlineCompletionItem = {}));
	(function(InlineCompletionList) {
		function create(items) {
			return { items };
		}
		InlineCompletionList.create = create;
	})(InlineCompletionList || (InlineCompletionList = {}));
	(function(InlineCompletionTriggerKind) {
		/**
		* Completion was triggered explicitly by a user gesture.
		*/
		InlineCompletionTriggerKind.Invoked = 1;
		/**
		* Completion was triggered automatically while editing.
		*/
		InlineCompletionTriggerKind.Automatic = 2;
	})(InlineCompletionTriggerKind || (InlineCompletionTriggerKind = {}));
	(function(SelectedCompletionInfo) {
		function create(range, text) {
			return {
				range,
				text
			};
		}
		SelectedCompletionInfo.create = create;
	})(SelectedCompletionInfo || (SelectedCompletionInfo = {}));
	(function(InlineCompletionContext) {
		function create(triggerKind, selectedCompletionInfo) {
			return {
				triggerKind,
				selectedCompletionInfo
			};
		}
		InlineCompletionContext.create = create;
	})(InlineCompletionContext || (InlineCompletionContext = {}));
	(function(WorkspaceFolder) {
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && URI.is(candidate.uri) && Is.string(candidate.name);
		}
		WorkspaceFolder.is = is;
	})(WorkspaceFolder || (WorkspaceFolder = {}));
	EOL = [
		"\n",
		"\r\n",
		"\r"
	];
	(function(TextDocument) {
		/**
		* Creates a new ITextDocument literal from the given uri and content.
		* @param uri The document's uri.
		* @param languageId The document's language Id.
		* @param version The document's version.
		* @param content The document's content.
		*/
		function create(uri, languageId, version, content) {
			return new FullTextDocument$1(uri, languageId, version, content);
		}
		TextDocument.create = create;
		/**
		* Checks whether the given literal conforms to the {@link ITextDocument} interface.
		*/
		function is(value) {
			const candidate = value;
			return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount) && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
		}
		TextDocument.is = is;
		function applyEdits(document, edits) {
			let text = document.getText();
			const sortedEdits = mergeSort(edits, (a, b) => {
				const diff = a.range.start.line - b.range.start.line;
				if (diff === 0) return a.range.start.character - b.range.start.character;
				return diff;
			});
			let lastModifiedOffset = text.length;
			for (let i = sortedEdits.length - 1; i >= 0; i--) {
				const e = sortedEdits[i];
				const startOffset = document.offsetAt(e.range.start);
				const endOffset = document.offsetAt(e.range.end);
				if (endOffset <= lastModifiedOffset) text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
				else throw new Error("Overlapping edit");
				lastModifiedOffset = startOffset;
			}
			return text;
		}
		TextDocument.applyEdits = applyEdits;
		function mergeSort(data, compare) {
			if (data.length <= 1) return data;
			const p = data.length / 2 | 0;
			const left = data.slice(0, p);
			const right = data.slice(p);
			mergeSort(left, compare);
			mergeSort(right, compare);
			let leftIdx = 0;
			let rightIdx = 0;
			let i = 0;
			while (leftIdx < left.length && rightIdx < right.length) if (compare(left[leftIdx], right[rightIdx]) <= 0) data[i++] = left[leftIdx++];
			else data[i++] = right[rightIdx++];
			while (leftIdx < left.length) data[i++] = left[leftIdx++];
			while (rightIdx < right.length) data[i++] = right[rightIdx++];
			return data;
		}
	})(TextDocument$1 || (TextDocument$1 = {}));
	FullTextDocument$1 = class {
		constructor(uri, languageId, version, content) {
			this._uri = uri;
			this._languageId = languageId;
			this._version = version;
			this._content = content;
			this._lineOffsets = void 0;
		}
		get uri() {
			return this._uri;
		}
		get languageId() {
			return this._languageId;
		}
		get version() {
			return this._version;
		}
		getText(range) {
			if (range) {
				const start = this.offsetAt(range.start);
				const end = this.offsetAt(range.end);
				return this._content.substring(start, end);
			}
			return this._content;
		}
		update(event, version) {
			this._content = event.text;
			this._version = version;
			this._lineOffsets = void 0;
		}
		getLineOffsets() {
			if (this._lineOffsets === void 0) {
				const lineOffsets = [];
				const text = this._content;
				let isLineStart = true;
				for (let i = 0; i < text.length; i++) {
					if (isLineStart) {
						lineOffsets.push(i);
						isLineStart = false;
					}
					const ch = text.charAt(i);
					isLineStart = ch === "\r" || ch === "\n";
					if (ch === "\r" && i + 1 < text.length && text.charAt(i + 1) === "\n") i++;
				}
				if (isLineStart && text.length > 0) lineOffsets.push(text.length);
				this._lineOffsets = lineOffsets;
			}
			return this._lineOffsets;
		}
		positionAt(offset) {
			offset = Math.max(Math.min(offset, this._content.length), 0);
			const lineOffsets = this.getLineOffsets();
			let low = 0, high = lineOffsets.length;
			if (high === 0) return Position.create(0, offset);
			while (low < high) {
				const mid = Math.floor((low + high) / 2);
				if (lineOffsets[mid] > offset) high = mid;
				else low = mid + 1;
			}
			const line = low - 1;
			return Position.create(line, offset - lineOffsets[line]);
		}
		offsetAt(position) {
			const lineOffsets = this.getLineOffsets();
			if (position.line >= lineOffsets.length) return this._content.length;
			else if (position.line < 0) return 0;
			const lineOffset = lineOffsets[position.line];
			const nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
			return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
		}
		get lineCount() {
			return this.getLineOffsets().length;
		}
	};
	(function(Is) {
		const toString = Object.prototype.toString;
		function defined(value) {
			return typeof value !== "undefined";
		}
		Is.defined = defined;
		function undefined(value) {
			return typeof value === "undefined";
		}
		Is.undefined = undefined;
		function boolean(value) {
			return value === true || value === false;
		}
		Is.boolean = boolean;
		function string(value) {
			return toString.call(value) === "[object String]";
		}
		Is.string = string;
		function number(value) {
			return toString.call(value) === "[object Number]";
		}
		Is.number = number;
		function numberRange(value, min, max) {
			return toString.call(value) === "[object Number]" && min <= value && value <= max;
		}
		Is.numberRange = numberRange;
		function integer(value) {
			return toString.call(value) === "[object Number]" && -2147483648 <= value && value <= 2147483647;
		}
		Is.integer = integer;
		function uinteger(value) {
			return toString.call(value) === "[object Number]" && 0 <= value && value <= 2147483647;
		}
		Is.uinteger = uinteger;
		function func(value) {
			return toString.call(value) === "[object Function]";
		}
		Is.func = func;
		function objectLiteral(value) {
			return value !== null && typeof value === "object";
		}
		Is.objectLiteral = objectLiteral;
		function typedArray(value, check) {
			return Array.isArray(value) && value.every(check);
		}
		Is.typedArray = typedArray;
	})(Is || (Is = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/messages.js
var require_messages = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.CM = exports.ProtocolNotificationType = exports.ProtocolNotificationType0 = exports.ProtocolRequestType = exports.ProtocolRequestType0 = exports.RegistrationType = exports.MessageDirection = void 0;
	const vscode_jsonrpc_1 = require_api$2();
	var MessageDirection;
	(function(MessageDirection) {
		MessageDirection["clientToServer"] = "clientToServer";
		MessageDirection["serverToClient"] = "serverToClient";
		MessageDirection["both"] = "both";
	})(MessageDirection || (exports.MessageDirection = MessageDirection = {}));
	var RegistrationType = class {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		____;
		method;
		constructor(method) {
			this.method = method;
		}
	};
	exports.RegistrationType = RegistrationType;
	var ProtocolRequestType0 = class extends vscode_jsonrpc_1.RequestType0 {
		/**
		* Clients must not use these properties. They are here to ensure correct typing.
		* in TypeScript
		*/
		__;
		___;
		____;
		_pr;
		constructor(method) {
			super(method);
		}
	};
	exports.ProtocolRequestType0 = ProtocolRequestType0;
	var ProtocolRequestType = class extends vscode_jsonrpc_1.RequestType {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		__;
		___;
		____;
		_pr;
		constructor(method) {
			super(method, vscode_jsonrpc_1.ParameterStructures.byName);
		}
	};
	exports.ProtocolRequestType = ProtocolRequestType;
	var ProtocolNotificationType0 = class extends vscode_jsonrpc_1.NotificationType0 {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		___;
		____;
		constructor(method) {
			super(method);
		}
	};
	exports.ProtocolNotificationType0 = ProtocolNotificationType0;
	var ProtocolNotificationType = class extends vscode_jsonrpc_1.NotificationType {
		/**
		* Clients must not use this property. It is here to ensure correct typing.
		*/
		___;
		____;
		constructor(method) {
			super(method, vscode_jsonrpc_1.ParameterStructures.byName);
		}
	};
	exports.ProtocolNotificationType = ProtocolNotificationType;
	var CM;
	(function(CM) {
		function create(client, server) {
			return {
				client,
				server
			};
		}
		CM.create = create;
	})(CM || (exports.CM = CM = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/utils/is.js
var require_is = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.boolean = boolean;
	exports.string = string;
	exports.number = number;
	exports.error = error;
	exports.func = func;
	exports.array = array;
	exports.stringArray = stringArray;
	exports.typedArray = typedArray;
	exports.objectLiteral = objectLiteral;
	function boolean(value) {
		return value === true || value === false;
	}
	function string(value) {
		return typeof value === "string" || value instanceof String;
	}
	function number(value) {
		return typeof value === "number" || value instanceof Number;
	}
	function error(value) {
		return value instanceof Error;
	}
	function func(value) {
		return typeof value === "function";
	}
	function array(value) {
		return Array.isArray(value);
	}
	function stringArray(value) {
		return array(value) && value.every((elem) => string(elem));
	}
	function typedArray(value, check) {
		return Array.isArray(value) && value.every(check);
	}
	function objectLiteral(value) {
		return value !== null && typeof value === "object";
	}
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js
var require_protocol_implementation = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ImplementationRequest = void 0;
	const messages_1 = require_messages();
	/**
	* A request to resolve the implementation locations of a symbol at a given text
	* document position. The request's parameter is of type {@link TextDocumentPositionParams}
	* the response is of type {@link Definition} or a Thenable that resolves to such.
	*/
	var ImplementationRequest;
	(function(ImplementationRequest) {
		ImplementationRequest.method = "textDocument/implementation";
		ImplementationRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		ImplementationRequest.type = new messages_1.ProtocolRequestType(ImplementationRequest.method);
		ImplementationRequest.capabilities = messages_1.CM.create("textDocument.implementation", "implementationProvider");
	})(ImplementationRequest || (exports.ImplementationRequest = ImplementationRequest = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js
var require_protocol_typeDefinition = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TypeDefinitionRequest = void 0;
	const messages_1 = require_messages();
	/**
	* A request to resolve the type definition locations of a symbol at a given text
	* document position. The request's parameter is of type {@link TextDocumentPositionParams}
	* the response is of type {@link Definition} or a Thenable that resolves to such.
	*/
	var TypeDefinitionRequest;
	(function(TypeDefinitionRequest) {
		TypeDefinitionRequest.method = "textDocument/typeDefinition";
		TypeDefinitionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		TypeDefinitionRequest.type = new messages_1.ProtocolRequestType(TypeDefinitionRequest.method);
		TypeDefinitionRequest.capabilities = messages_1.CM.create("textDocument.typeDefinition", "typeDefinitionProvider");
	})(TypeDefinitionRequest || (exports.TypeDefinitionRequest = TypeDefinitionRequest = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js
var require_protocol_workspaceFolder = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DidChangeWorkspaceFoldersNotification = exports.WorkspaceFoldersRequest = void 0;
	const messages_1 = require_messages();
	/**
	* The `workspace/workspaceFolders` is sent from the server to the client to fetch the open workspace folders.
	*/
	var WorkspaceFoldersRequest;
	(function(WorkspaceFoldersRequest) {
		WorkspaceFoldersRequest.method = "workspace/workspaceFolders";
		WorkspaceFoldersRequest.messageDirection = messages_1.MessageDirection.serverToClient;
		WorkspaceFoldersRequest.type = new messages_1.ProtocolRequestType0(WorkspaceFoldersRequest.method);
		WorkspaceFoldersRequest.capabilities = messages_1.CM.create("workspace.workspaceFolders", "workspace.workspaceFolders");
	})(WorkspaceFoldersRequest || (exports.WorkspaceFoldersRequest = WorkspaceFoldersRequest = {}));
	/**
	* The `workspace/didChangeWorkspaceFolders` notification is sent from the client to the server when the workspace
	* folder configuration changes.
	*/
	var DidChangeWorkspaceFoldersNotification;
	(function(DidChangeWorkspaceFoldersNotification) {
		DidChangeWorkspaceFoldersNotification.method = "workspace/didChangeWorkspaceFolders";
		DidChangeWorkspaceFoldersNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		DidChangeWorkspaceFoldersNotification.type = new messages_1.ProtocolNotificationType(DidChangeWorkspaceFoldersNotification.method);
		DidChangeWorkspaceFoldersNotification.capabilities = messages_1.CM.create(void 0, "workspace.workspaceFolders.changeNotifications");
	})(DidChangeWorkspaceFoldersNotification || (exports.DidChangeWorkspaceFoldersNotification = DidChangeWorkspaceFoldersNotification = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js
var require_protocol_configuration = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ConfigurationRequest = void 0;
	const messages_1 = require_messages();
	/**
	* The 'workspace/configuration' request is sent from the server to the client to fetch a certain
	* configuration setting.
	*
	* This pull model replaces the old push model were the client signaled configuration change via an
	* event. If the server still needs to react to configuration changes (since the server caches the
	* result of `workspace/configuration` requests) the server should register for an empty configuration
	* change event and empty the cache if such an event is received.
	*/
	var ConfigurationRequest;
	(function(ConfigurationRequest) {
		ConfigurationRequest.method = "workspace/configuration";
		ConfigurationRequest.messageDirection = messages_1.MessageDirection.serverToClient;
		ConfigurationRequest.type = new messages_1.ProtocolRequestType(ConfigurationRequest.method);
		ConfigurationRequest.capabilities = messages_1.CM.create("workspace.configuration", void 0);
	})(ConfigurationRequest || (exports.ConfigurationRequest = ConfigurationRequest = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js
var require_protocol_colorProvider = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ColorPresentationRequest = exports.DocumentColorRequest = void 0;
	const messages_1 = require_messages();
	/**
	* A request to list all color symbols found in a given text document. The request's
	* parameter is of type {@link DocumentColorParams} the
	* response is of type {@link ColorInformation ColorInformation[]} or a Thenable
	* that resolves to such.
	*/
	var DocumentColorRequest;
	(function(DocumentColorRequest) {
		DocumentColorRequest.method = "textDocument/documentColor";
		DocumentColorRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		DocumentColorRequest.type = new messages_1.ProtocolRequestType(DocumentColorRequest.method);
		DocumentColorRequest.capabilities = messages_1.CM.create("textDocument.colorProvider", "colorProvider");
	})(DocumentColorRequest || (exports.DocumentColorRequest = DocumentColorRequest = {}));
	/**
	* A request to list all presentation for a color. The request's
	* parameter is of type {@link ColorPresentationParams} the
	* response is of type {@link ColorPresentation ColorPresentation[]} or a Thenable
	* that resolves to such.
	*/
	var ColorPresentationRequest;
	(function(ColorPresentationRequest) {
		ColorPresentationRequest.method = "textDocument/colorPresentation";
		ColorPresentationRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		ColorPresentationRequest.type = new messages_1.ProtocolRequestType(ColorPresentationRequest.method);
		ColorPresentationRequest.capabilities = messages_1.CM.create("textDocument.colorProvider", "colorProvider");
	})(ColorPresentationRequest || (exports.ColorPresentationRequest = ColorPresentationRequest = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js
var require_protocol_foldingRange = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FoldingRangeRefreshRequest = exports.FoldingRangeRequest = void 0;
	const messages_1 = require_messages();
	/**
	* A request to provide folding ranges in a document. The request's
	* parameter is of type {@link FoldingRangeParams}, the
	* response is of type {@link FoldingRangeList} or a Thenable
	* that resolves to such.
	*/
	var FoldingRangeRequest;
	(function(FoldingRangeRequest) {
		FoldingRangeRequest.method = "textDocument/foldingRange";
		FoldingRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		FoldingRangeRequest.type = new messages_1.ProtocolRequestType(FoldingRangeRequest.method);
		FoldingRangeRequest.capabilities = messages_1.CM.create("textDocument.foldingRange", "foldingRangeProvider");
	})(FoldingRangeRequest || (exports.FoldingRangeRequest = FoldingRangeRequest = {}));
	/**
	* A request to refresh the folding ranges in a document.
	*
	* @since 3.18.0
	*/
	var FoldingRangeRefreshRequest;
	(function(FoldingRangeRefreshRequest) {
		FoldingRangeRefreshRequest.method = `workspace/foldingRange/refresh`;
		FoldingRangeRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
		FoldingRangeRefreshRequest.type = new messages_1.ProtocolRequestType0(FoldingRangeRefreshRequest.method);
		FoldingRangeRefreshRequest.capabilities = messages_1.CM.create("workspace.foldingRange.refreshSupport", void 0);
	})(FoldingRangeRefreshRequest || (exports.FoldingRangeRefreshRequest = FoldingRangeRefreshRequest = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js
var require_protocol_declaration = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DeclarationRequest = void 0;
	const messages_1 = require_messages();
	/**
	* A request to resolve the type definition locations of a symbol at a given text
	* document position. The request's parameter is of type {@link TextDocumentPositionParams}
	* the response is of type {@link Declaration} or a typed array of {@link DeclarationLink}
	* or a Thenable that resolves to such.
	*/
	var DeclarationRequest;
	(function(DeclarationRequest) {
		DeclarationRequest.method = "textDocument/declaration";
		DeclarationRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		DeclarationRequest.type = new messages_1.ProtocolRequestType(DeclarationRequest.method);
		DeclarationRequest.capabilities = messages_1.CM.create("textDocument.declaration", "declarationProvider");
	})(DeclarationRequest || (exports.DeclarationRequest = DeclarationRequest = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js
var require_protocol_selectionRange = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SelectionRangeRequest = void 0;
	const messages_1 = require_messages();
	/**
	* A request to provide selection ranges in a document. The request's
	* parameter is of type {@link SelectionRangeParams}, the
	* response is of type {@link SelectionRange SelectionRange[]} or a Thenable
	* that resolves to such.
	*/
	var SelectionRangeRequest;
	(function(SelectionRangeRequest) {
		SelectionRangeRequest.method = "textDocument/selectionRange";
		SelectionRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		SelectionRangeRequest.type = new messages_1.ProtocolRequestType(SelectionRangeRequest.method);
		SelectionRangeRequest.capabilities = messages_1.CM.create("textDocument.selectionRange", "selectionRangeProvider");
	})(SelectionRangeRequest || (exports.SelectionRangeRequest = SelectionRangeRequest = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js
var require_protocol_progress = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.WorkDoneProgressCancelNotification = exports.WorkDoneProgressCreateRequest = exports.WorkDoneProgress = void 0;
	const vscode_jsonrpc_1 = require_api$2();
	const messages_1 = require_messages();
	var WorkDoneProgress;
	(function(WorkDoneProgress) {
		WorkDoneProgress.type = new vscode_jsonrpc_1.ProgressType();
		function is(value) {
			return value === WorkDoneProgress.type;
		}
		WorkDoneProgress.is = is;
	})(WorkDoneProgress || (exports.WorkDoneProgress = WorkDoneProgress = {}));
	/**
	* The `window/workDoneProgress/create` request is sent from the server to the client to initiate progress
	* reporting from the server.
	*/
	var WorkDoneProgressCreateRequest;
	(function(WorkDoneProgressCreateRequest) {
		WorkDoneProgressCreateRequest.method = "window/workDoneProgress/create";
		WorkDoneProgressCreateRequest.messageDirection = messages_1.MessageDirection.serverToClient;
		WorkDoneProgressCreateRequest.type = new messages_1.ProtocolRequestType(WorkDoneProgressCreateRequest.method);
		WorkDoneProgressCreateRequest.capabilities = messages_1.CM.create("window.workDoneProgress", void 0);
	})(WorkDoneProgressCreateRequest || (exports.WorkDoneProgressCreateRequest = WorkDoneProgressCreateRequest = {}));
	/**
	* The `window/workDoneProgress/cancel` notification is sent from  the client to the server to cancel a progress
	* initiated on the server side.
	*/
	var WorkDoneProgressCancelNotification;
	(function(WorkDoneProgressCancelNotification) {
		WorkDoneProgressCancelNotification.method = "window/workDoneProgress/cancel";
		WorkDoneProgressCancelNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		WorkDoneProgressCancelNotification.type = new messages_1.ProtocolNotificationType(WorkDoneProgressCancelNotification.method);
	})(WorkDoneProgressCancelNotification || (exports.WorkDoneProgressCancelNotification = WorkDoneProgressCancelNotification = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js
var require_protocol_callHierarchy = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.CallHierarchyOutgoingCallsRequest = exports.CallHierarchyIncomingCallsRequest = exports.CallHierarchyPrepareRequest = void 0;
	const messages_1 = require_messages();
	/**
	* A request to result a `CallHierarchyItem` in a document at a given position.
	* Can be used as an input to an incoming or outgoing call hierarchy.
	*
	* @since 3.16.0
	*/
	var CallHierarchyPrepareRequest;
	(function(CallHierarchyPrepareRequest) {
		CallHierarchyPrepareRequest.method = "textDocument/prepareCallHierarchy";
		CallHierarchyPrepareRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		CallHierarchyPrepareRequest.type = new messages_1.ProtocolRequestType(CallHierarchyPrepareRequest.method);
		CallHierarchyPrepareRequest.capabilities = messages_1.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
	})(CallHierarchyPrepareRequest || (exports.CallHierarchyPrepareRequest = CallHierarchyPrepareRequest = {}));
	/**
	* A request to resolve the incoming calls for a given `CallHierarchyItem`.
	*
	* @since 3.16.0
	*/
	var CallHierarchyIncomingCallsRequest;
	(function(CallHierarchyIncomingCallsRequest) {
		CallHierarchyIncomingCallsRequest.method = "callHierarchy/incomingCalls";
		CallHierarchyIncomingCallsRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		CallHierarchyIncomingCallsRequest.type = new messages_1.ProtocolRequestType(CallHierarchyIncomingCallsRequest.method);
		CallHierarchyIncomingCallsRequest.capabilities = messages_1.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
	})(CallHierarchyIncomingCallsRequest || (exports.CallHierarchyIncomingCallsRequest = CallHierarchyIncomingCallsRequest = {}));
	/**
	* A request to resolve the outgoing calls for a given `CallHierarchyItem`.
	*
	* @since 3.16.0
	*/
	var CallHierarchyOutgoingCallsRequest;
	(function(CallHierarchyOutgoingCallsRequest) {
		CallHierarchyOutgoingCallsRequest.method = "callHierarchy/outgoingCalls";
		CallHierarchyOutgoingCallsRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		CallHierarchyOutgoingCallsRequest.type = new messages_1.ProtocolRequestType(CallHierarchyOutgoingCallsRequest.method);
		CallHierarchyOutgoingCallsRequest.capabilities = messages_1.CM.create("textDocument.callHierarchy", "callHierarchyProvider");
	})(CallHierarchyOutgoingCallsRequest || (exports.CallHierarchyOutgoingCallsRequest = CallHierarchyOutgoingCallsRequest = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js
var require_protocol_semanticTokens = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SemanticTokensRefreshRequest = exports.SemanticTokensRangeRequest = exports.SemanticTokensDeltaRequest = exports.SemanticTokensRequest = exports.SemanticTokensRegistrationType = exports.TokenFormat = void 0;
	const messages_1 = require_messages();
	var TokenFormat;
	(function(TokenFormat) {
		TokenFormat.Relative = "relative";
	})(TokenFormat || (exports.TokenFormat = TokenFormat = {}));
	var SemanticTokensRegistrationType;
	(function(SemanticTokensRegistrationType) {
		SemanticTokensRegistrationType.method = "textDocument/semanticTokens";
		SemanticTokensRegistrationType.type = new messages_1.RegistrationType(SemanticTokensRegistrationType.method);
	})(SemanticTokensRegistrationType || (exports.SemanticTokensRegistrationType = SemanticTokensRegistrationType = {}));
	/**
	* @since 3.16.0
	*/
	var SemanticTokensRequest;
	(function(SemanticTokensRequest) {
		SemanticTokensRequest.method = "textDocument/semanticTokens/full";
		SemanticTokensRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		SemanticTokensRequest.type = new messages_1.ProtocolRequestType(SemanticTokensRequest.method);
		SemanticTokensRequest.registrationMethod = SemanticTokensRegistrationType.method;
		SemanticTokensRequest.capabilities = messages_1.CM.create("textDocument.semanticTokens", "semanticTokensProvider");
	})(SemanticTokensRequest || (exports.SemanticTokensRequest = SemanticTokensRequest = {}));
	/**
	* @since 3.16.0
	*/
	var SemanticTokensDeltaRequest;
	(function(SemanticTokensDeltaRequest) {
		SemanticTokensDeltaRequest.method = "textDocument/semanticTokens/full/delta";
		SemanticTokensDeltaRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		SemanticTokensDeltaRequest.type = new messages_1.ProtocolRequestType(SemanticTokensDeltaRequest.method);
		SemanticTokensDeltaRequest.registrationMethod = SemanticTokensRegistrationType.method;
		SemanticTokensDeltaRequest.capabilities = messages_1.CM.create("textDocument.semanticTokens.requests.full.delta", "semanticTokensProvider.full.delta");
	})(SemanticTokensDeltaRequest || (exports.SemanticTokensDeltaRequest = SemanticTokensDeltaRequest = {}));
	/**
	* @since 3.16.0
	*/
	var SemanticTokensRangeRequest;
	(function(SemanticTokensRangeRequest) {
		SemanticTokensRangeRequest.method = "textDocument/semanticTokens/range";
		SemanticTokensRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		SemanticTokensRangeRequest.type = new messages_1.ProtocolRequestType(SemanticTokensRangeRequest.method);
		SemanticTokensRangeRequest.registrationMethod = SemanticTokensRegistrationType.method;
		SemanticTokensRangeRequest.capabilities = messages_1.CM.create("textDocument.semanticTokens.requests.range", "semanticTokensProvider.range");
	})(SemanticTokensRangeRequest || (exports.SemanticTokensRangeRequest = SemanticTokensRangeRequest = {}));
	/**
	* @since 3.16.0
	*/
	var SemanticTokensRefreshRequest;
	(function(SemanticTokensRefreshRequest) {
		SemanticTokensRefreshRequest.method = `workspace/semanticTokens/refresh`;
		SemanticTokensRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
		SemanticTokensRefreshRequest.type = new messages_1.ProtocolRequestType0(SemanticTokensRefreshRequest.method);
		SemanticTokensRefreshRequest.capabilities = messages_1.CM.create("workspace.semanticTokens.refreshSupport", void 0);
	})(SemanticTokensRefreshRequest || (exports.SemanticTokensRefreshRequest = SemanticTokensRefreshRequest = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js
var require_protocol_showDocument = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ShowDocumentRequest = void 0;
	const messages_1 = require_messages();
	/**
	* A request to show a document. This request might open an
	* external program depending on the value of the URI to open.
	* For example a request to open `https://code.visualstudio.com/`
	* will very likely open the URI in a WEB browser.
	*
	* @since 3.16.0
	*/
	var ShowDocumentRequest;
	(function(ShowDocumentRequest) {
		ShowDocumentRequest.method = "window/showDocument";
		ShowDocumentRequest.messageDirection = messages_1.MessageDirection.serverToClient;
		ShowDocumentRequest.type = new messages_1.ProtocolRequestType(ShowDocumentRequest.method);
		ShowDocumentRequest.capabilities = messages_1.CM.create("window.showDocument.support", void 0);
	})(ShowDocumentRequest || (exports.ShowDocumentRequest = ShowDocumentRequest = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js
var require_protocol_linkedEditingRange = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LinkedEditingRangeRequest = void 0;
	const messages_1 = require_messages();
	/**
	* A request to provide ranges that can be edited together.
	*
	* @since 3.16.0
	*/
	var LinkedEditingRangeRequest;
	(function(LinkedEditingRangeRequest) {
		LinkedEditingRangeRequest.method = "textDocument/linkedEditingRange";
		LinkedEditingRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		LinkedEditingRangeRequest.type = new messages_1.ProtocolRequestType(LinkedEditingRangeRequest.method);
		LinkedEditingRangeRequest.capabilities = messages_1.CM.create("textDocument.linkedEditingRange", "linkedEditingRangeProvider");
	})(LinkedEditingRangeRequest || (exports.LinkedEditingRangeRequest = LinkedEditingRangeRequest = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js
var require_protocol_fileOperations = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.WillDeleteFilesRequest = exports.DidDeleteFilesNotification = exports.DidRenameFilesNotification = exports.WillRenameFilesRequest = exports.DidCreateFilesNotification = exports.WillCreateFilesRequest = exports.FileOperationPatternKind = void 0;
	const messages_1 = require_messages();
	/**
	* A pattern kind describing if a glob pattern matches a file a folder or
	* both.
	*
	* @since 3.16.0
	*/
	var FileOperationPatternKind;
	(function(FileOperationPatternKind) {
		/**
		* The pattern matches a file only.
		*/
		FileOperationPatternKind.file = "file";
		/**
		* The pattern matches a folder only.
		*/
		FileOperationPatternKind.folder = "folder";
	})(FileOperationPatternKind || (exports.FileOperationPatternKind = FileOperationPatternKind = {}));
	/**
	* The will create files request is sent from the client to the server before files are actually
	* created as long as the creation is triggered from within the client.
	*
	* The request can return a `WorkspaceEdit` which will be applied to workspace before the
	* files are created. Hence the `WorkspaceEdit` can not manipulate the content of the file
	* to be created.
	*
	* @since 3.16.0
	*/
	var WillCreateFilesRequest;
	(function(WillCreateFilesRequest) {
		WillCreateFilesRequest.method = "workspace/willCreateFiles";
		WillCreateFilesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		WillCreateFilesRequest.type = new messages_1.ProtocolRequestType(WillCreateFilesRequest.method);
		WillCreateFilesRequest.capabilities = messages_1.CM.create("workspace.fileOperations.willCreate", "workspace.fileOperations.willCreate");
	})(WillCreateFilesRequest || (exports.WillCreateFilesRequest = WillCreateFilesRequest = {}));
	/**
	* The did create files notification is sent from the client to the server when
	* files were created from within the client.
	*
	* @since 3.16.0
	*/
	var DidCreateFilesNotification;
	(function(DidCreateFilesNotification) {
		DidCreateFilesNotification.method = "workspace/didCreateFiles";
		DidCreateFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		DidCreateFilesNotification.type = new messages_1.ProtocolNotificationType(DidCreateFilesNotification.method);
		DidCreateFilesNotification.capabilities = messages_1.CM.create("workspace.fileOperations.didCreate", "workspace.fileOperations.didCreate");
	})(DidCreateFilesNotification || (exports.DidCreateFilesNotification = DidCreateFilesNotification = {}));
	/**
	* The will rename files request is sent from the client to the server before files are actually
	* renamed as long as the rename is triggered from within the client.
	*
	* @since 3.16.0
	*/
	var WillRenameFilesRequest;
	(function(WillRenameFilesRequest) {
		WillRenameFilesRequest.method = "workspace/willRenameFiles";
		WillRenameFilesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		WillRenameFilesRequest.type = new messages_1.ProtocolRequestType(WillRenameFilesRequest.method);
		WillRenameFilesRequest.capabilities = messages_1.CM.create("workspace.fileOperations.willRename", "workspace.fileOperations.willRename");
	})(WillRenameFilesRequest || (exports.WillRenameFilesRequest = WillRenameFilesRequest = {}));
	/**
	* The did rename files notification is sent from the client to the server when
	* files were renamed from within the client.
	*
	* @since 3.16.0
	*/
	var DidRenameFilesNotification;
	(function(DidRenameFilesNotification) {
		DidRenameFilesNotification.method = "workspace/didRenameFiles";
		DidRenameFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		DidRenameFilesNotification.type = new messages_1.ProtocolNotificationType(DidRenameFilesNotification.method);
		DidRenameFilesNotification.capabilities = messages_1.CM.create("workspace.fileOperations.didRename", "workspace.fileOperations.didRename");
	})(DidRenameFilesNotification || (exports.DidRenameFilesNotification = DidRenameFilesNotification = {}));
	/**
	* The will delete files request is sent from the client to the server before files are actually
	* deleted as long as the deletion is triggered from within the client.
	*
	* @since 3.16.0
	*/
	var DidDeleteFilesNotification;
	(function(DidDeleteFilesNotification) {
		DidDeleteFilesNotification.method = "workspace/didDeleteFiles";
		DidDeleteFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		DidDeleteFilesNotification.type = new messages_1.ProtocolNotificationType(DidDeleteFilesNotification.method);
		DidDeleteFilesNotification.capabilities = messages_1.CM.create("workspace.fileOperations.didDelete", "workspace.fileOperations.didDelete");
	})(DidDeleteFilesNotification || (exports.DidDeleteFilesNotification = DidDeleteFilesNotification = {}));
	/**
	* The did delete files notification is sent from the client to the server when
	* files were deleted from within the client.
	*
	* @since 3.16.0
	*/
	var WillDeleteFilesRequest;
	(function(WillDeleteFilesRequest) {
		WillDeleteFilesRequest.method = "workspace/willDeleteFiles";
		WillDeleteFilesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		WillDeleteFilesRequest.type = new messages_1.ProtocolRequestType(WillDeleteFilesRequest.method);
		WillDeleteFilesRequest.capabilities = messages_1.CM.create("workspace.fileOperations.willDelete", "workspace.fileOperations.willDelete");
	})(WillDeleteFilesRequest || (exports.WillDeleteFilesRequest = WillDeleteFilesRequest = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js
var require_protocol_moniker = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MonikerRequest = exports.MonikerKind = exports.UniquenessLevel = void 0;
	const messages_1 = require_messages();
	/**
	* Moniker uniqueness level to define scope of the moniker.
	*
	* @since 3.16.0
	*/
	var UniquenessLevel;
	(function(UniquenessLevel) {
		/**
		* The moniker is only unique inside a document
		*/
		UniquenessLevel.document = "document";
		/**
		* The moniker is unique inside a project for which a dump got created
		*/
		UniquenessLevel.project = "project";
		/**
		* The moniker is unique inside the group to which a project belongs
		*/
		UniquenessLevel.group = "group";
		/**
		* The moniker is unique inside the moniker scheme.
		*/
		UniquenessLevel.scheme = "scheme";
		/**
		* The moniker is globally unique
		*/
		UniquenessLevel.global = "global";
	})(UniquenessLevel || (exports.UniquenessLevel = UniquenessLevel = {}));
	/**
	* The moniker kind.
	*
	* @since 3.16.0
	*/
	var MonikerKind;
	(function(MonikerKind) {
		/**
		* The moniker represent a symbol that is imported into a project
		*/
		MonikerKind.$import = "import";
		/**
		* The moniker represents a symbol that is exported from a project
		*/
		MonikerKind.$export = "export";
		/**
		* The moniker represents a symbol that is local to a project (e.g. a local
		* variable of a function, a class not visible outside the project, ...)
		*/
		MonikerKind.local = "local";
	})(MonikerKind || (exports.MonikerKind = MonikerKind = {}));
	/**
	* A request to get the moniker of a symbol at a given text document position.
	* The request parameter is of type {@link TextDocumentPositionParams}.
	* The response is of type {@link Moniker Moniker[]} or `null`.
	*/
	var MonikerRequest;
	(function(MonikerRequest) {
		MonikerRequest.method = "textDocument/moniker";
		MonikerRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		MonikerRequest.type = new messages_1.ProtocolRequestType(MonikerRequest.method);
		MonikerRequest.capabilities = messages_1.CM.create("textDocument.moniker", "monikerProvider");
	})(MonikerRequest || (exports.MonikerRequest = MonikerRequest = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js
var require_protocol_typeHierarchy = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TypeHierarchySubtypesRequest = exports.TypeHierarchySupertypesRequest = exports.TypeHierarchyPrepareRequest = void 0;
	const messages_1 = require_messages();
	/**
	* A request to result a `TypeHierarchyItem` in a document at a given position.
	* Can be used as an input to a subtypes or supertypes type hierarchy.
	*
	* @since 3.17.0
	*/
	var TypeHierarchyPrepareRequest;
	(function(TypeHierarchyPrepareRequest) {
		TypeHierarchyPrepareRequest.method = "textDocument/prepareTypeHierarchy";
		TypeHierarchyPrepareRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		TypeHierarchyPrepareRequest.type = new messages_1.ProtocolRequestType(TypeHierarchyPrepareRequest.method);
		TypeHierarchyPrepareRequest.capabilities = messages_1.CM.create("textDocument.typeHierarchy", "typeHierarchyProvider");
	})(TypeHierarchyPrepareRequest || (exports.TypeHierarchyPrepareRequest = TypeHierarchyPrepareRequest = {}));
	/**
	* A request to resolve the supertypes for a given `TypeHierarchyItem`.
	*
	* @since 3.17.0
	*/
	var TypeHierarchySupertypesRequest;
	(function(TypeHierarchySupertypesRequest) {
		TypeHierarchySupertypesRequest.method = "typeHierarchy/supertypes";
		TypeHierarchySupertypesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		TypeHierarchySupertypesRequest.type = new messages_1.ProtocolRequestType(TypeHierarchySupertypesRequest.method);
	})(TypeHierarchySupertypesRequest || (exports.TypeHierarchySupertypesRequest = TypeHierarchySupertypesRequest = {}));
	/**
	* A request to resolve the subtypes for a given `TypeHierarchyItem`.
	*
	* @since 3.17.0
	*/
	var TypeHierarchySubtypesRequest;
	(function(TypeHierarchySubtypesRequest) {
		TypeHierarchySubtypesRequest.method = "typeHierarchy/subtypes";
		TypeHierarchySubtypesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		TypeHierarchySubtypesRequest.type = new messages_1.ProtocolRequestType(TypeHierarchySubtypesRequest.method);
	})(TypeHierarchySubtypesRequest || (exports.TypeHierarchySubtypesRequest = TypeHierarchySubtypesRequest = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js
var require_protocol_inlineValue = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InlineValueRefreshRequest = exports.InlineValueRequest = void 0;
	const messages_1 = require_messages();
	/**
	* A request to provide inline values in a document. The request's parameter is of
	* type {@link InlineValueParams}, the response is of type
	* {@link InlineValue InlineValue[]} or a Thenable that resolves to such.
	*
	* @since 3.17.0
	*/
	var InlineValueRequest;
	(function(InlineValueRequest) {
		InlineValueRequest.method = "textDocument/inlineValue";
		InlineValueRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		InlineValueRequest.type = new messages_1.ProtocolRequestType(InlineValueRequest.method);
		InlineValueRequest.capabilities = messages_1.CM.create("textDocument.inlineValue", "inlineValueProvider");
	})(InlineValueRequest || (exports.InlineValueRequest = InlineValueRequest = {}));
	/**
	* @since 3.17.0
	*/
	var InlineValueRefreshRequest;
	(function(InlineValueRefreshRequest) {
		InlineValueRefreshRequest.method = `workspace/inlineValue/refresh`;
		InlineValueRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
		InlineValueRefreshRequest.type = new messages_1.ProtocolRequestType0(InlineValueRefreshRequest.method);
		InlineValueRefreshRequest.capabilities = messages_1.CM.create("workspace.inlineValue.refreshSupport", void 0);
	})(InlineValueRefreshRequest || (exports.InlineValueRefreshRequest = InlineValueRefreshRequest = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js
var require_protocol_inlayHint = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InlayHintRefreshRequest = exports.InlayHintResolveRequest = exports.InlayHintRequest = void 0;
	const messages_1 = require_messages();
	/**
	* A request to provide inlay hints in a document. The request's parameter is of
	* type {@link InlayHintsParams}, the response is of type
	* {@link InlayHint InlayHint[]} or a Thenable that resolves to such.
	*
	* @since 3.17.0
	*/
	var InlayHintRequest;
	(function(InlayHintRequest) {
		InlayHintRequest.method = "textDocument/inlayHint";
		InlayHintRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		InlayHintRequest.type = new messages_1.ProtocolRequestType(InlayHintRequest.method);
		InlayHintRequest.capabilities = messages_1.CM.create("textDocument.inlayHint", "inlayHintProvider");
	})(InlayHintRequest || (exports.InlayHintRequest = InlayHintRequest = {}));
	/**
	* A request to resolve additional properties for an inlay hint.
	* The request's parameter is of type {@link InlayHint}, the response is
	* of type {@link InlayHint} or a Thenable that resolves to such.
	*
	* @since 3.17.0
	*/
	var InlayHintResolveRequest;
	(function(InlayHintResolveRequest) {
		InlayHintResolveRequest.method = "inlayHint/resolve";
		InlayHintResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		InlayHintResolveRequest.type = new messages_1.ProtocolRequestType(InlayHintResolveRequest.method);
		InlayHintResolveRequest.capabilities = messages_1.CM.create("textDocument.inlayHint.resolveSupport", "inlayHintProvider.resolveProvider");
	})(InlayHintResolveRequest || (exports.InlayHintResolveRequest = InlayHintResolveRequest = {}));
	/**
	* @since 3.17.0
	*/
	var InlayHintRefreshRequest;
	(function(InlayHintRefreshRequest) {
		InlayHintRefreshRequest.method = `workspace/inlayHint/refresh`;
		InlayHintRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
		InlayHintRefreshRequest.type = new messages_1.ProtocolRequestType0(InlayHintRefreshRequest.method);
		InlayHintRefreshRequest.capabilities = messages_1.CM.create("workspace.inlayHint.refreshSupport", void 0);
	})(InlayHintRefreshRequest || (exports.InlayHintRefreshRequest = InlayHintRefreshRequest = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js
var require_protocol_diagnostic = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || (function() {
		var ownKeys = function(o) {
			ownKeys = Object.getOwnPropertyNames || function(o) {
				var ar = [];
				for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
				return ar;
			};
			return ownKeys(o);
		};
		return function(mod) {
			if (mod && mod.__esModule) return mod;
			var result = {};
			if (mod != null) {
				for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
			}
			__setModuleDefault(result, mod);
			return result;
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DiagnosticRefreshRequest = exports.WorkspaceDiagnosticRequest = exports.DocumentDiagnosticRequest = exports.DocumentDiagnosticReportKind = exports.DiagnosticServerCancellationData = void 0;
	const vscode_jsonrpc_1 = require_api$2();
	const Is = __importStar(require_is());
	const messages_1 = require_messages();
	/**
	* @since 3.17.0
	*/
	var DiagnosticServerCancellationData;
	(function(DiagnosticServerCancellationData) {
		function is(value) {
			const candidate = value;
			return candidate && Is.boolean(candidate.retriggerRequest);
		}
		DiagnosticServerCancellationData.is = is;
	})(DiagnosticServerCancellationData || (exports.DiagnosticServerCancellationData = DiagnosticServerCancellationData = {}));
	/**
	* The document diagnostic report kinds.
	*
	* @since 3.17.0
	*/
	var DocumentDiagnosticReportKind;
	(function(DocumentDiagnosticReportKind) {
		/**
		* A diagnostic report with a full
		* set of problems.
		*/
		DocumentDiagnosticReportKind.Full = "full";
		/**
		* A report indicating that the last
		* returned report is still accurate.
		*/
		DocumentDiagnosticReportKind.Unchanged = "unchanged";
	})(DocumentDiagnosticReportKind || (exports.DocumentDiagnosticReportKind = DocumentDiagnosticReportKind = {}));
	/**
	* The document diagnostic request definition.
	*
	*
	* @since 3.17.0
	*/
	var DocumentDiagnosticRequest;
	(function(DocumentDiagnosticRequest) {
		DocumentDiagnosticRequest.method = "textDocument/diagnostic";
		DocumentDiagnosticRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		DocumentDiagnosticRequest.type = new messages_1.ProtocolRequestType(DocumentDiagnosticRequest.method);
		DocumentDiagnosticRequest.partialResult = new vscode_jsonrpc_1.ProgressType();
		DocumentDiagnosticRequest.capabilities = messages_1.CM.create("textDocument.diagnostic", "diagnosticProvider");
	})(DocumentDiagnosticRequest || (exports.DocumentDiagnosticRequest = DocumentDiagnosticRequest = {}));
	/**
	* The workspace diagnostic request definition.
	*
	* @since 3.17.0
	*/
	var WorkspaceDiagnosticRequest;
	(function(WorkspaceDiagnosticRequest) {
		WorkspaceDiagnosticRequest.method = "workspace/diagnostic";
		WorkspaceDiagnosticRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		WorkspaceDiagnosticRequest.type = new messages_1.ProtocolRequestType(WorkspaceDiagnosticRequest.method);
		WorkspaceDiagnosticRequest.partialResult = new vscode_jsonrpc_1.ProgressType();
		WorkspaceDiagnosticRequest.capabilities = messages_1.CM.create("workspace.diagnostics", "diagnosticProvider.workspaceDiagnostics");
	})(WorkspaceDiagnosticRequest || (exports.WorkspaceDiagnosticRequest = WorkspaceDiagnosticRequest = {}));
	/**
	* The diagnostic refresh request definition.
	*
	* @since 3.17.0
	*/
	var DiagnosticRefreshRequest;
	(function(DiagnosticRefreshRequest) {
		DiagnosticRefreshRequest.method = `workspace/diagnostic/refresh`;
		DiagnosticRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
		DiagnosticRefreshRequest.type = new messages_1.ProtocolRequestType0(DiagnosticRefreshRequest.method);
		DiagnosticRefreshRequest.capabilities = messages_1.CM.create("workspace.diagnostics.refreshSupport", void 0);
	})(DiagnosticRefreshRequest || (exports.DiagnosticRefreshRequest = DiagnosticRefreshRequest = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js
var require_protocol_notebook = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || (function() {
		var ownKeys = function(o) {
			ownKeys = Object.getOwnPropertyNames || function(o) {
				var ar = [];
				for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
				return ar;
			};
			return ownKeys(o);
		};
		return function(mod) {
			if (mod && mod.__esModule) return mod;
			var result = {};
			if (mod != null) {
				for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
			}
			__setModuleDefault(result, mod);
			return result;
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DidCloseNotebookDocumentNotification = exports.DidSaveNotebookDocumentNotification = exports.DidChangeNotebookDocumentNotification = exports.NotebookCellArrayChange = exports.DidOpenNotebookDocumentNotification = exports.NotebookDocumentSyncRegistrationType = exports.NotebookDocument = exports.NotebookCell = exports.ExecutionSummary = exports.NotebookCellKind = void 0;
	const vscode_languageserver_types_1 = (init_main(), __toCommonJS(main_exports));
	const Is = __importStar(require_is());
	const messages_1 = require_messages();
	/**
	* A notebook cell kind.
	*
	* @since 3.17.0
	*/
	var NotebookCellKind;
	(function(NotebookCellKind) {
		/**
		* A markup-cell is formatted source that is used for display.
		*/
		NotebookCellKind.Markup = 1;
		/**
		* A code-cell is source code.
		*/
		NotebookCellKind.Code = 2;
		function is(value) {
			return value === 1 || value === 2;
		}
		NotebookCellKind.is = is;
	})(NotebookCellKind || (exports.NotebookCellKind = NotebookCellKind = {}));
	var ExecutionSummary;
	(function(ExecutionSummary) {
		function create(executionOrder, success) {
			const result = { executionOrder };
			if (success === true || success === false) result.success = success;
			return result;
		}
		ExecutionSummary.create = create;
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.executionOrder) && (candidate.success === void 0 || Is.boolean(candidate.success));
		}
		ExecutionSummary.is = is;
		function equals(one, other) {
			if (one === other) return true;
			if (one === null || one === void 0 || other === null || other === void 0) return false;
			return one.executionOrder === other.executionOrder && one.success === other.success;
		}
		ExecutionSummary.equals = equals;
	})(ExecutionSummary || (exports.ExecutionSummary = ExecutionSummary = {}));
	var NotebookCell;
	(function(NotebookCell) {
		function create(kind, document) {
			return {
				kind,
				document
			};
		}
		NotebookCell.create = create;
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && NotebookCellKind.is(candidate.kind) && vscode_languageserver_types_1.DocumentUri.is(candidate.document) && (candidate.metadata === void 0 || Is.objectLiteral(candidate.metadata));
		}
		NotebookCell.is = is;
		function diff(one, two) {
			const result = /* @__PURE__ */ new Set();
			if (one.document !== two.document) result.add("document");
			if (one.kind !== two.kind) result.add("kind");
			if (one.executionSummary !== two.executionSummary) result.add("executionSummary");
			if ((one.metadata !== void 0 || two.metadata !== void 0) && !equalsMetadata(one.metadata, two.metadata)) result.add("metadata");
			if ((one.executionSummary !== void 0 || two.executionSummary !== void 0) && !ExecutionSummary.equals(one.executionSummary, two.executionSummary)) result.add("executionSummary");
			return result;
		}
		NotebookCell.diff = diff;
		function equalsMetadata(one, other) {
			if (one === other) return true;
			if (one === null || one === void 0 || other === null || other === void 0) return false;
			if (typeof one !== typeof other) return false;
			if (typeof one !== "object") return false;
			const oneArray = Array.isArray(one);
			const otherArray = Array.isArray(other);
			if (oneArray !== otherArray) return false;
			if (oneArray && otherArray) {
				if (one.length !== other.length) return false;
				for (let i = 0; i < one.length; i++) if (!equalsMetadata(one[i], other[i])) return false;
			}
			if (Is.objectLiteral(one) && Is.objectLiteral(other)) {
				const oneKeys = Object.keys(one);
				const otherKeys = Object.keys(other);
				if (oneKeys.length !== otherKeys.length) return false;
				oneKeys.sort();
				otherKeys.sort();
				if (!equalsMetadata(oneKeys, otherKeys)) return false;
				for (let i = 0; i < oneKeys.length; i++) {
					const prop = oneKeys[i];
					if (!equalsMetadata(one[prop], other[prop])) return false;
				}
			}
			return true;
		}
	})(NotebookCell || (exports.NotebookCell = NotebookCell = {}));
	var NotebookDocument;
	(function(NotebookDocument) {
		function create(uri, notebookType, version, cells) {
			return {
				uri,
				notebookType,
				version,
				cells
			};
		}
		NotebookDocument.create = create;
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && Is.string(candidate.uri) && vscode_languageserver_types_1.integer.is(candidate.version) && Is.typedArray(candidate.cells, NotebookCell.is);
		}
		NotebookDocument.is = is;
	})(NotebookDocument || (exports.NotebookDocument = NotebookDocument = {}));
	var NotebookDocumentSyncRegistrationType;
	(function(NotebookDocumentSyncRegistrationType) {
		NotebookDocumentSyncRegistrationType.method = "notebookDocument/sync";
		NotebookDocumentSyncRegistrationType.messageDirection = messages_1.MessageDirection.clientToServer;
		NotebookDocumentSyncRegistrationType.type = new messages_1.RegistrationType(NotebookDocumentSyncRegistrationType.method);
	})(NotebookDocumentSyncRegistrationType || (exports.NotebookDocumentSyncRegistrationType = NotebookDocumentSyncRegistrationType = {}));
	/**
	* A notification sent when a notebook opens.
	*
	* @since 3.17.0
	*/
	var DidOpenNotebookDocumentNotification;
	(function(DidOpenNotebookDocumentNotification) {
		DidOpenNotebookDocumentNotification.method = "notebookDocument/didOpen";
		DidOpenNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		DidOpenNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidOpenNotebookDocumentNotification.method);
		DidOpenNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
	})(DidOpenNotebookDocumentNotification || (exports.DidOpenNotebookDocumentNotification = DidOpenNotebookDocumentNotification = {}));
	var NotebookCellArrayChange;
	(function(NotebookCellArrayChange) {
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.start) && vscode_languageserver_types_1.uinteger.is(candidate.deleteCount) && (candidate.cells === void 0 || Is.typedArray(candidate.cells, NotebookCell.is));
		}
		NotebookCellArrayChange.is = is;
		function create(start, deleteCount, cells) {
			const result = {
				start,
				deleteCount
			};
			if (cells !== void 0) result.cells = cells;
			return result;
		}
		NotebookCellArrayChange.create = create;
	})(NotebookCellArrayChange || (exports.NotebookCellArrayChange = NotebookCellArrayChange = {}));
	var DidChangeNotebookDocumentNotification;
	(function(DidChangeNotebookDocumentNotification) {
		DidChangeNotebookDocumentNotification.method = "notebookDocument/didChange";
		DidChangeNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		DidChangeNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidChangeNotebookDocumentNotification.method);
		DidChangeNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
	})(DidChangeNotebookDocumentNotification || (exports.DidChangeNotebookDocumentNotification = DidChangeNotebookDocumentNotification = {}));
	/**
	* A notification sent when a notebook document is saved.
	*
	* @since 3.17.0
	*/
	var DidSaveNotebookDocumentNotification;
	(function(DidSaveNotebookDocumentNotification) {
		DidSaveNotebookDocumentNotification.method = "notebookDocument/didSave";
		DidSaveNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		DidSaveNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidSaveNotebookDocumentNotification.method);
		DidSaveNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
	})(DidSaveNotebookDocumentNotification || (exports.DidSaveNotebookDocumentNotification = DidSaveNotebookDocumentNotification = {}));
	/**
	* A notification sent when a notebook closes.
	*
	* @since 3.17.0
	*/
	var DidCloseNotebookDocumentNotification;
	(function(DidCloseNotebookDocumentNotification) {
		DidCloseNotebookDocumentNotification.method = "notebookDocument/didClose";
		DidCloseNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		DidCloseNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidCloseNotebookDocumentNotification.method);
		DidCloseNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
	})(DidCloseNotebookDocumentNotification || (exports.DidCloseNotebookDocumentNotification = DidCloseNotebookDocumentNotification = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js
var require_protocol_inlineCompletion = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InlineCompletionRequest = void 0;
	const messages_1 = require_messages();
	/**
	* A request to provide inline completions in a document. The request's parameter is of
	* type {@link InlineCompletionParams}, the response is of type
	* {@link InlineCompletion InlineCompletion[]} or a Thenable that resolves to such.
	*
	* @since 3.18.0
	*/
	var InlineCompletionRequest;
	(function(InlineCompletionRequest) {
		InlineCompletionRequest.method = "textDocument/inlineCompletion";
		InlineCompletionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		InlineCompletionRequest.type = new messages_1.ProtocolRequestType(InlineCompletionRequest.method);
		InlineCompletionRequest.capabilities = messages_1.CM.create("textDocument.inlineCompletion", "inlineCompletionProvider");
	})(InlineCompletionRequest || (exports.InlineCompletionRequest = InlineCompletionRequest = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.textDocumentContent.js
var require_protocol_textDocumentContent = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TextDocumentContentRefreshRequest = exports.TextDocumentContentRequest = void 0;
	const messages_1 = require_messages();
	/**
	* The `workspace/textDocumentContent` request is sent from the client to the
	* server to request the content of a text document.
	*
	* @since 3.18.0
	*/
	var TextDocumentContentRequest;
	(function(TextDocumentContentRequest) {
		TextDocumentContentRequest.method = "workspace/textDocumentContent";
		TextDocumentContentRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		TextDocumentContentRequest.type = new messages_1.ProtocolRequestType(TextDocumentContentRequest.method);
		TextDocumentContentRequest.capabilities = messages_1.CM.create("workspace.textDocumentContent", "workspace.textDocumentContent");
	})(TextDocumentContentRequest || (exports.TextDocumentContentRequest = TextDocumentContentRequest = {}));
	/**
	* The `workspace/textDocumentContent` request is sent from the server to the client to refresh
	* the content of a specific text document.
	*
	* @since 3.18.0
	*/
	var TextDocumentContentRefreshRequest;
	(function(TextDocumentContentRefreshRequest) {
		TextDocumentContentRefreshRequest.method = `workspace/textDocumentContent/refresh`;
		TextDocumentContentRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
		TextDocumentContentRefreshRequest.type = new messages_1.ProtocolRequestType(TextDocumentContentRefreshRequest.method);
	})(TextDocumentContentRefreshRequest || (exports.TextDocumentContentRefreshRequest = TextDocumentContentRefreshRequest = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/protocol.js
var require_protocol = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || (function() {
		var ownKeys = function(o) {
			ownKeys = Object.getOwnPropertyNames || function(o) {
				var ar = [];
				for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
				return ar;
			};
			return ownKeys(o);
		};
		return function(mod) {
			if (mod && mod.__esModule) return mod;
			var result = {};
			if (mod != null) {
				for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
			}
			__setModuleDefault(result, mod);
			return result;
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.CodeActionRequest = exports.DocumentSymbolRequest = exports.DocumentHighlightRequest = exports.ReferencesRequest = exports.DefinitionRequest = exports.SignatureHelpRequest = exports.SignatureHelpTriggerKind = exports.HoverRequest = exports.CompletionResolveRequest = exports.CompletionRequest = exports.CompletionTriggerKind = exports.PublishDiagnosticsNotification = exports.WatchKind = exports.GlobPattern = exports.RelativePattern = exports.FileChangeType = exports.DidChangeWatchedFilesNotification = exports.WillSaveTextDocumentWaitUntilRequest = exports.WillSaveTextDocumentNotification = exports.TextDocumentSaveReason = exports.DidSaveTextDocumentNotification = exports.DidCloseTextDocumentNotification = exports.DidChangeTextDocumentNotification = exports.TextDocumentContentChangeEvent = exports.DidOpenTextDocumentNotification = exports.TextDocumentSyncKind = exports.TelemetryEventNotification = exports.LogMessageNotification = exports.ShowMessageRequest = exports.ShowMessageNotification = exports.MessageType = exports.DidChangeConfigurationNotification = exports.ExitNotification = exports.ShutdownRequest = exports.InitializedNotification = exports.InitializeErrorCodes = exports.InitializeRequest = exports.WorkDoneProgressOptions = exports.TextDocumentRegistrationOptions = exports.StaticRegistrationOptions = exports.PositionEncodingKind = exports.RegularExpressionEngineKind = exports.FailureHandlingKind = exports.ResourceOperationKind = exports.UnregistrationRequest = exports.RegistrationRequest = exports.DocumentSelector = exports.NotebookCellTextDocumentFilter = exports.NotebookDocumentFilter = exports.TextDocumentFilter = void 0;
	exports.UniquenessLevel = exports.WillDeleteFilesRequest = exports.DidDeleteFilesNotification = exports.WillRenameFilesRequest = exports.DidRenameFilesNotification = exports.WillCreateFilesRequest = exports.DidCreateFilesNotification = exports.FileOperationPatternKind = exports.LinkedEditingRangeRequest = exports.ShowDocumentRequest = exports.SemanticTokensRegistrationType = exports.SemanticTokensRefreshRequest = exports.SemanticTokensRangeRequest = exports.SemanticTokensDeltaRequest = exports.SemanticTokensRequest = exports.TokenFormat = exports.CallHierarchyPrepareRequest = exports.CallHierarchyOutgoingCallsRequest = exports.CallHierarchyIncomingCallsRequest = exports.WorkDoneProgressCancelNotification = exports.WorkDoneProgressCreateRequest = exports.WorkDoneProgress = exports.SelectionRangeRequest = exports.DeclarationRequest = exports.FoldingRangeRefreshRequest = exports.FoldingRangeRequest = exports.ColorPresentationRequest = exports.DocumentColorRequest = exports.ConfigurationRequest = exports.DidChangeWorkspaceFoldersNotification = exports.WorkspaceFoldersRequest = exports.TypeDefinitionRequest = exports.ImplementationRequest = exports.ApplyWorkspaceEditRequest = exports.ExecuteCommandRequest = exports.PrepareRenameRequest = exports.RenameRequest = exports.PrepareSupportDefaultBehavior = exports.DocumentOnTypeFormattingRequest = exports.DocumentRangesFormattingRequest = exports.DocumentRangeFormattingRequest = exports.DocumentFormattingRequest = exports.DocumentLinkResolveRequest = exports.DocumentLinkRequest = exports.CodeLensRefreshRequest = exports.CodeLensResolveRequest = exports.CodeLensRequest = exports.WorkspaceSymbolResolveRequest = exports.WorkspaceSymbolRequest = exports.CodeActionResolveRequest = void 0;
	exports.TextDocumentContentRefreshRequest = exports.TextDocumentContentRequest = exports.InlineCompletionRequest = exports.DidCloseNotebookDocumentNotification = exports.DidSaveNotebookDocumentNotification = exports.DidChangeNotebookDocumentNotification = exports.NotebookCellArrayChange = exports.DidOpenNotebookDocumentNotification = exports.NotebookDocumentSyncRegistrationType = exports.NotebookDocument = exports.NotebookCell = exports.ExecutionSummary = exports.NotebookCellKind = exports.DiagnosticRefreshRequest = exports.WorkspaceDiagnosticRequest = exports.DocumentDiagnosticRequest = exports.DocumentDiagnosticReportKind = exports.DiagnosticServerCancellationData = exports.InlayHintRefreshRequest = exports.InlayHintResolveRequest = exports.InlayHintRequest = exports.InlineValueRefreshRequest = exports.InlineValueRequest = exports.TypeHierarchySupertypesRequest = exports.TypeHierarchySubtypesRequest = exports.TypeHierarchyPrepareRequest = exports.MonikerRequest = exports.MonikerKind = void 0;
	const messages_1 = require_messages();
	const vscode_languageserver_types_1 = (init_main(), __toCommonJS(main_exports));
	const Is = __importStar(require_is());
	const protocol_implementation_1 = require_protocol_implementation();
	Object.defineProperty(exports, "ImplementationRequest", {
		enumerable: true,
		get: function() {
			return protocol_implementation_1.ImplementationRequest;
		}
	});
	const protocol_typeDefinition_1 = require_protocol_typeDefinition();
	Object.defineProperty(exports, "TypeDefinitionRequest", {
		enumerable: true,
		get: function() {
			return protocol_typeDefinition_1.TypeDefinitionRequest;
		}
	});
	const protocol_workspaceFolder_1 = require_protocol_workspaceFolder();
	Object.defineProperty(exports, "WorkspaceFoldersRequest", {
		enumerable: true,
		get: function() {
			return protocol_workspaceFolder_1.WorkspaceFoldersRequest;
		}
	});
	Object.defineProperty(exports, "DidChangeWorkspaceFoldersNotification", {
		enumerable: true,
		get: function() {
			return protocol_workspaceFolder_1.DidChangeWorkspaceFoldersNotification;
		}
	});
	const protocol_configuration_1 = require_protocol_configuration();
	Object.defineProperty(exports, "ConfigurationRequest", {
		enumerable: true,
		get: function() {
			return protocol_configuration_1.ConfigurationRequest;
		}
	});
	const protocol_colorProvider_1 = require_protocol_colorProvider();
	Object.defineProperty(exports, "DocumentColorRequest", {
		enumerable: true,
		get: function() {
			return protocol_colorProvider_1.DocumentColorRequest;
		}
	});
	Object.defineProperty(exports, "ColorPresentationRequest", {
		enumerable: true,
		get: function() {
			return protocol_colorProvider_1.ColorPresentationRequest;
		}
	});
	const protocol_foldingRange_1 = require_protocol_foldingRange();
	Object.defineProperty(exports, "FoldingRangeRequest", {
		enumerable: true,
		get: function() {
			return protocol_foldingRange_1.FoldingRangeRequest;
		}
	});
	Object.defineProperty(exports, "FoldingRangeRefreshRequest", {
		enumerable: true,
		get: function() {
			return protocol_foldingRange_1.FoldingRangeRefreshRequest;
		}
	});
	const protocol_declaration_1 = require_protocol_declaration();
	Object.defineProperty(exports, "DeclarationRequest", {
		enumerable: true,
		get: function() {
			return protocol_declaration_1.DeclarationRequest;
		}
	});
	const protocol_selectionRange_1 = require_protocol_selectionRange();
	Object.defineProperty(exports, "SelectionRangeRequest", {
		enumerable: true,
		get: function() {
			return protocol_selectionRange_1.SelectionRangeRequest;
		}
	});
	const protocol_progress_1 = require_protocol_progress();
	Object.defineProperty(exports, "WorkDoneProgress", {
		enumerable: true,
		get: function() {
			return protocol_progress_1.WorkDoneProgress;
		}
	});
	Object.defineProperty(exports, "WorkDoneProgressCreateRequest", {
		enumerable: true,
		get: function() {
			return protocol_progress_1.WorkDoneProgressCreateRequest;
		}
	});
	Object.defineProperty(exports, "WorkDoneProgressCancelNotification", {
		enumerable: true,
		get: function() {
			return protocol_progress_1.WorkDoneProgressCancelNotification;
		}
	});
	const protocol_callHierarchy_1 = require_protocol_callHierarchy();
	Object.defineProperty(exports, "CallHierarchyIncomingCallsRequest", {
		enumerable: true,
		get: function() {
			return protocol_callHierarchy_1.CallHierarchyIncomingCallsRequest;
		}
	});
	Object.defineProperty(exports, "CallHierarchyOutgoingCallsRequest", {
		enumerable: true,
		get: function() {
			return protocol_callHierarchy_1.CallHierarchyOutgoingCallsRequest;
		}
	});
	Object.defineProperty(exports, "CallHierarchyPrepareRequest", {
		enumerable: true,
		get: function() {
			return protocol_callHierarchy_1.CallHierarchyPrepareRequest;
		}
	});
	const protocol_semanticTokens_1 = require_protocol_semanticTokens();
	Object.defineProperty(exports, "TokenFormat", {
		enumerable: true,
		get: function() {
			return protocol_semanticTokens_1.TokenFormat;
		}
	});
	Object.defineProperty(exports, "SemanticTokensRequest", {
		enumerable: true,
		get: function() {
			return protocol_semanticTokens_1.SemanticTokensRequest;
		}
	});
	Object.defineProperty(exports, "SemanticTokensDeltaRequest", {
		enumerable: true,
		get: function() {
			return protocol_semanticTokens_1.SemanticTokensDeltaRequest;
		}
	});
	Object.defineProperty(exports, "SemanticTokensRangeRequest", {
		enumerable: true,
		get: function() {
			return protocol_semanticTokens_1.SemanticTokensRangeRequest;
		}
	});
	Object.defineProperty(exports, "SemanticTokensRefreshRequest", {
		enumerable: true,
		get: function() {
			return protocol_semanticTokens_1.SemanticTokensRefreshRequest;
		}
	});
	Object.defineProperty(exports, "SemanticTokensRegistrationType", {
		enumerable: true,
		get: function() {
			return protocol_semanticTokens_1.SemanticTokensRegistrationType;
		}
	});
	const protocol_showDocument_1 = require_protocol_showDocument();
	Object.defineProperty(exports, "ShowDocumentRequest", {
		enumerable: true,
		get: function() {
			return protocol_showDocument_1.ShowDocumentRequest;
		}
	});
	const protocol_linkedEditingRange_1 = require_protocol_linkedEditingRange();
	Object.defineProperty(exports, "LinkedEditingRangeRequest", {
		enumerable: true,
		get: function() {
			return protocol_linkedEditingRange_1.LinkedEditingRangeRequest;
		}
	});
	const protocol_fileOperations_1 = require_protocol_fileOperations();
	Object.defineProperty(exports, "FileOperationPatternKind", {
		enumerable: true,
		get: function() {
			return protocol_fileOperations_1.FileOperationPatternKind;
		}
	});
	Object.defineProperty(exports, "DidCreateFilesNotification", {
		enumerable: true,
		get: function() {
			return protocol_fileOperations_1.DidCreateFilesNotification;
		}
	});
	Object.defineProperty(exports, "WillCreateFilesRequest", {
		enumerable: true,
		get: function() {
			return protocol_fileOperations_1.WillCreateFilesRequest;
		}
	});
	Object.defineProperty(exports, "DidRenameFilesNotification", {
		enumerable: true,
		get: function() {
			return protocol_fileOperations_1.DidRenameFilesNotification;
		}
	});
	Object.defineProperty(exports, "WillRenameFilesRequest", {
		enumerable: true,
		get: function() {
			return protocol_fileOperations_1.WillRenameFilesRequest;
		}
	});
	Object.defineProperty(exports, "DidDeleteFilesNotification", {
		enumerable: true,
		get: function() {
			return protocol_fileOperations_1.DidDeleteFilesNotification;
		}
	});
	Object.defineProperty(exports, "WillDeleteFilesRequest", {
		enumerable: true,
		get: function() {
			return protocol_fileOperations_1.WillDeleteFilesRequest;
		}
	});
	const protocol_moniker_1 = require_protocol_moniker();
	Object.defineProperty(exports, "UniquenessLevel", {
		enumerable: true,
		get: function() {
			return protocol_moniker_1.UniquenessLevel;
		}
	});
	Object.defineProperty(exports, "MonikerKind", {
		enumerable: true,
		get: function() {
			return protocol_moniker_1.MonikerKind;
		}
	});
	Object.defineProperty(exports, "MonikerRequest", {
		enumerable: true,
		get: function() {
			return protocol_moniker_1.MonikerRequest;
		}
	});
	const protocol_typeHierarchy_1 = require_protocol_typeHierarchy();
	Object.defineProperty(exports, "TypeHierarchyPrepareRequest", {
		enumerable: true,
		get: function() {
			return protocol_typeHierarchy_1.TypeHierarchyPrepareRequest;
		}
	});
	Object.defineProperty(exports, "TypeHierarchySubtypesRequest", {
		enumerable: true,
		get: function() {
			return protocol_typeHierarchy_1.TypeHierarchySubtypesRequest;
		}
	});
	Object.defineProperty(exports, "TypeHierarchySupertypesRequest", {
		enumerable: true,
		get: function() {
			return protocol_typeHierarchy_1.TypeHierarchySupertypesRequest;
		}
	});
	const protocol_inlineValue_1 = require_protocol_inlineValue();
	Object.defineProperty(exports, "InlineValueRequest", {
		enumerable: true,
		get: function() {
			return protocol_inlineValue_1.InlineValueRequest;
		}
	});
	Object.defineProperty(exports, "InlineValueRefreshRequest", {
		enumerable: true,
		get: function() {
			return protocol_inlineValue_1.InlineValueRefreshRequest;
		}
	});
	const protocol_inlayHint_1 = require_protocol_inlayHint();
	Object.defineProperty(exports, "InlayHintRequest", {
		enumerable: true,
		get: function() {
			return protocol_inlayHint_1.InlayHintRequest;
		}
	});
	Object.defineProperty(exports, "InlayHintResolveRequest", {
		enumerable: true,
		get: function() {
			return protocol_inlayHint_1.InlayHintResolveRequest;
		}
	});
	Object.defineProperty(exports, "InlayHintRefreshRequest", {
		enumerable: true,
		get: function() {
			return protocol_inlayHint_1.InlayHintRefreshRequest;
		}
	});
	const protocol_diagnostic_1 = require_protocol_diagnostic();
	Object.defineProperty(exports, "DiagnosticServerCancellationData", {
		enumerable: true,
		get: function() {
			return protocol_diagnostic_1.DiagnosticServerCancellationData;
		}
	});
	Object.defineProperty(exports, "DocumentDiagnosticReportKind", {
		enumerable: true,
		get: function() {
			return protocol_diagnostic_1.DocumentDiagnosticReportKind;
		}
	});
	Object.defineProperty(exports, "DocumentDiagnosticRequest", {
		enumerable: true,
		get: function() {
			return protocol_diagnostic_1.DocumentDiagnosticRequest;
		}
	});
	Object.defineProperty(exports, "WorkspaceDiagnosticRequest", {
		enumerable: true,
		get: function() {
			return protocol_diagnostic_1.WorkspaceDiagnosticRequest;
		}
	});
	Object.defineProperty(exports, "DiagnosticRefreshRequest", {
		enumerable: true,
		get: function() {
			return protocol_diagnostic_1.DiagnosticRefreshRequest;
		}
	});
	const protocol_notebook_1 = require_protocol_notebook();
	Object.defineProperty(exports, "NotebookCellKind", {
		enumerable: true,
		get: function() {
			return protocol_notebook_1.NotebookCellKind;
		}
	});
	Object.defineProperty(exports, "ExecutionSummary", {
		enumerable: true,
		get: function() {
			return protocol_notebook_1.ExecutionSummary;
		}
	});
	Object.defineProperty(exports, "NotebookCell", {
		enumerable: true,
		get: function() {
			return protocol_notebook_1.NotebookCell;
		}
	});
	Object.defineProperty(exports, "NotebookDocument", {
		enumerable: true,
		get: function() {
			return protocol_notebook_1.NotebookDocument;
		}
	});
	Object.defineProperty(exports, "NotebookDocumentSyncRegistrationType", {
		enumerable: true,
		get: function() {
			return protocol_notebook_1.NotebookDocumentSyncRegistrationType;
		}
	});
	Object.defineProperty(exports, "DidOpenNotebookDocumentNotification", {
		enumerable: true,
		get: function() {
			return protocol_notebook_1.DidOpenNotebookDocumentNotification;
		}
	});
	Object.defineProperty(exports, "NotebookCellArrayChange", {
		enumerable: true,
		get: function() {
			return protocol_notebook_1.NotebookCellArrayChange;
		}
	});
	Object.defineProperty(exports, "DidChangeNotebookDocumentNotification", {
		enumerable: true,
		get: function() {
			return protocol_notebook_1.DidChangeNotebookDocumentNotification;
		}
	});
	Object.defineProperty(exports, "DidSaveNotebookDocumentNotification", {
		enumerable: true,
		get: function() {
			return protocol_notebook_1.DidSaveNotebookDocumentNotification;
		}
	});
	Object.defineProperty(exports, "DidCloseNotebookDocumentNotification", {
		enumerable: true,
		get: function() {
			return protocol_notebook_1.DidCloseNotebookDocumentNotification;
		}
	});
	const protocol_inlineCompletion_1 = require_protocol_inlineCompletion();
	Object.defineProperty(exports, "InlineCompletionRequest", {
		enumerable: true,
		get: function() {
			return protocol_inlineCompletion_1.InlineCompletionRequest;
		}
	});
	const protocol_textDocumentContent_1 = require_protocol_textDocumentContent();
	Object.defineProperty(exports, "TextDocumentContentRequest", {
		enumerable: true,
		get: function() {
			return protocol_textDocumentContent_1.TextDocumentContentRequest;
		}
	});
	Object.defineProperty(exports, "TextDocumentContentRefreshRequest", {
		enumerable: true,
		get: function() {
			return protocol_textDocumentContent_1.TextDocumentContentRefreshRequest;
		}
	});
	/**
	* The TextDocumentFilter namespace provides helper functions to work with
	* {@link TextDocumentFilter} literals.
	*
	* @since 3.17.0
	*/
	var TextDocumentFilter;
	(function(TextDocumentFilter) {
		function is(value) {
			const candidate = value;
			return Is.string(candidate) || Is.string(candidate.language) || Is.string(candidate.scheme) || GlobPattern.is(candidate.pattern);
		}
		TextDocumentFilter.is = is;
	})(TextDocumentFilter || (exports.TextDocumentFilter = TextDocumentFilter = {}));
	/**
	* The NotebookDocumentFilter namespace provides helper functions to work with
	* {@link NotebookDocumentFilter} literals.
	*
	* @since 3.17.0
	*/
	var NotebookDocumentFilter;
	(function(NotebookDocumentFilter) {
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && (Is.string(candidate.notebookType) || Is.string(candidate.scheme) || Is.string(candidate.pattern));
		}
		NotebookDocumentFilter.is = is;
	})(NotebookDocumentFilter || (exports.NotebookDocumentFilter = NotebookDocumentFilter = {}));
	/**
	* The NotebookCellTextDocumentFilter namespace provides helper functions to work with
	* {@link NotebookCellTextDocumentFilter} literals.
	*
	* @since 3.17.0
	*/
	var NotebookCellTextDocumentFilter;
	(function(NotebookCellTextDocumentFilter) {
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && (Is.string(candidate.notebook) || NotebookDocumentFilter.is(candidate.notebook)) && (candidate.language === void 0 || Is.string(candidate.language));
		}
		NotebookCellTextDocumentFilter.is = is;
	})(NotebookCellTextDocumentFilter || (exports.NotebookCellTextDocumentFilter = NotebookCellTextDocumentFilter = {}));
	/**
	* The DocumentSelector namespace provides helper functions to work with
	* {@link DocumentSelector}s.
	*/
	var DocumentSelector;
	(function(DocumentSelector) {
		function is(value) {
			if (!Array.isArray(value)) return false;
			for (const elem of value) if (!Is.string(elem) && !TextDocumentFilter.is(elem) && !NotebookCellTextDocumentFilter.is(elem)) return false;
			return true;
		}
		DocumentSelector.is = is;
	})(DocumentSelector || (exports.DocumentSelector = DocumentSelector = {}));
	/**
	* The `client/registerCapability` request is sent from the server to the client to register a new capability
	* handler on the client side.
	*/
	var RegistrationRequest;
	(function(RegistrationRequest) {
		RegistrationRequest.method = "client/registerCapability";
		RegistrationRequest.messageDirection = messages_1.MessageDirection.serverToClient;
		RegistrationRequest.type = new messages_1.ProtocolRequestType(RegistrationRequest.method);
	})(RegistrationRequest || (exports.RegistrationRequest = RegistrationRequest = {}));
	/**
	* The `client/unregisterCapability` request is sent from the server to the client to unregister a previously registered capability
	* handler on the client side.
	*/
	var UnregistrationRequest;
	(function(UnregistrationRequest) {
		UnregistrationRequest.method = "client/unregisterCapability";
		UnregistrationRequest.messageDirection = messages_1.MessageDirection.serverToClient;
		UnregistrationRequest.type = new messages_1.ProtocolRequestType(UnregistrationRequest.method);
	})(UnregistrationRequest || (exports.UnregistrationRequest = UnregistrationRequest = {}));
	var ResourceOperationKind;
	(function(ResourceOperationKind) {
		/**
		* Supports creating new files and folders.
		*/
		ResourceOperationKind.Create = "create";
		/**
		* Supports renaming existing files and folders.
		*/
		ResourceOperationKind.Rename = "rename";
		/**
		* Supports deleting existing files and folders.
		*/
		ResourceOperationKind.Delete = "delete";
	})(ResourceOperationKind || (exports.ResourceOperationKind = ResourceOperationKind = {}));
	var FailureHandlingKind;
	(function(FailureHandlingKind) {
		/**
		* Applying the workspace change is simply aborted if one of the changes provided
		* fails. All operations executed before the failing operation stay executed.
		*/
		FailureHandlingKind.Abort = "abort";
		/**
		* All operations are executed transactional. That means they either all
		* succeed or no changes at all are applied to the workspace.
		*/
		FailureHandlingKind.Transactional = "transactional";
		/**
		* If the workspace edit contains only textual file changes they are executed transactional.
		* If resource changes (create, rename or delete file) are part of the change the failure
		* handling strategy is abort.
		*/
		FailureHandlingKind.TextOnlyTransactional = "textOnlyTransactional";
		/**
		* The client tries to undo the operations already executed. But there is no
		* guarantee that this is succeeding.
		*/
		FailureHandlingKind.Undo = "undo";
	})(FailureHandlingKind || (exports.FailureHandlingKind = FailureHandlingKind = {}));
	/**
	* Regular Expression Engines
	*
	* @since 3.18.0
	*/
	var RegularExpressionEngineKind;
	(function(RegularExpressionEngineKind) {
		RegularExpressionEngineKind.ES2020 = "ES2020";
	})(RegularExpressionEngineKind || (exports.RegularExpressionEngineKind = RegularExpressionEngineKind = {}));
	/**
	* A set of predefined position encoding kinds.
	*
	* @since 3.17.0
	*/
	var PositionEncodingKind;
	(function(PositionEncodingKind) {
		/**
		* Character offsets count UTF-8 code units (e.g. bytes).
		*/
		PositionEncodingKind.UTF8 = "utf-8";
		/**
		* Character offsets count UTF-16 code units.
		*
		* This is the default and must always be supported
		* by servers
		*/
		PositionEncodingKind.UTF16 = "utf-16";
		/**
		* Character offsets count UTF-32 code units.
		*
		* Implementation note: these are the same as Unicode codepoints,
		* so this `PositionEncodingKind` may also be used for an
		* encoding-agnostic representation of character offsets.
		*/
		PositionEncodingKind.UTF32 = "utf-32";
	})(PositionEncodingKind || (exports.PositionEncodingKind = PositionEncodingKind = {}));
	/**
	* The StaticRegistrationOptions namespace provides helper functions to work with
	* {@link StaticRegistrationOptions} literals.
	*/
	var StaticRegistrationOptions;
	(function(StaticRegistrationOptions) {
		function hasId(value) {
			const candidate = value;
			return candidate && Is.string(candidate.id) && candidate.id.length > 0;
		}
		StaticRegistrationOptions.hasId = hasId;
	})(StaticRegistrationOptions || (exports.StaticRegistrationOptions = StaticRegistrationOptions = {}));
	/**
	* The TextDocumentRegistrationOptions namespace provides helper functions to work with
	* {@link TextDocumentRegistrationOptions} literals.
	*/
	var TextDocumentRegistrationOptions;
	(function(TextDocumentRegistrationOptions) {
		function is(value) {
			const candidate = value;
			return candidate && (candidate.documentSelector === null || DocumentSelector.is(candidate.documentSelector));
		}
		TextDocumentRegistrationOptions.is = is;
	})(TextDocumentRegistrationOptions || (exports.TextDocumentRegistrationOptions = TextDocumentRegistrationOptions = {}));
	/**
	* The WorkDoneProgressOptions namespace provides helper functions to work with
	* {@link WorkDoneProgressOptions} literals.
	*/
	var WorkDoneProgressOptions;
	(function(WorkDoneProgressOptions) {
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && (candidate.workDoneProgress === void 0 || Is.boolean(candidate.workDoneProgress));
		}
		WorkDoneProgressOptions.is = is;
		function hasWorkDoneProgress(value) {
			const candidate = value;
			return candidate && Is.boolean(candidate.workDoneProgress);
		}
		WorkDoneProgressOptions.hasWorkDoneProgress = hasWorkDoneProgress;
	})(WorkDoneProgressOptions || (exports.WorkDoneProgressOptions = WorkDoneProgressOptions = {}));
	/**
	* The initialize request is sent from the client to the server.
	* It is sent once as the request after starting up the server.
	* The requests parameter is of type {@link InitializeParams}
	* the response if of type {@link InitializeResult} of a Thenable that
	* resolves to such.
	*/
	var InitializeRequest;
	(function(InitializeRequest) {
		InitializeRequest.method = "initialize";
		InitializeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		InitializeRequest.type = new messages_1.ProtocolRequestType(InitializeRequest.method);
	})(InitializeRequest || (exports.InitializeRequest = InitializeRequest = {}));
	/**
	* Known error codes for an `InitializeErrorCodes`;
	*/
	var InitializeErrorCodes;
	(function(InitializeErrorCodes) {
		/**
		* If the protocol version provided by the client can't be handled by the server.
		*
		* @deprecated This initialize error got replaced by client capabilities. There is
		* no version handshake in version 3.0x
		*/
		InitializeErrorCodes.unknownProtocolVersion = 1;
	})(InitializeErrorCodes || (exports.InitializeErrorCodes = InitializeErrorCodes = {}));
	/**
	* The initialized notification is sent from the client to the
	* server after the client is fully initialized and the server
	* is allowed to send requests from the server to the client.
	*/
	var InitializedNotification;
	(function(InitializedNotification) {
		InitializedNotification.method = "initialized";
		InitializedNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		InitializedNotification.type = new messages_1.ProtocolNotificationType(InitializedNotification.method);
	})(InitializedNotification || (exports.InitializedNotification = InitializedNotification = {}));
	/**
	* A shutdown request is sent from the client to the server.
	* It is sent once when the client decides to shutdown the
	* server. The only notification that is sent after a shutdown request
	* is the exit event.
	*/
	var ShutdownRequest;
	(function(ShutdownRequest) {
		ShutdownRequest.method = "shutdown";
		ShutdownRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		ShutdownRequest.type = new messages_1.ProtocolRequestType0(ShutdownRequest.method);
	})(ShutdownRequest || (exports.ShutdownRequest = ShutdownRequest = {}));
	/**
	* The exit event is sent from the client to the server to
	* ask the server to exit its process.
	*/
	var ExitNotification;
	(function(ExitNotification) {
		ExitNotification.method = "exit";
		ExitNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		ExitNotification.type = new messages_1.ProtocolNotificationType0(ExitNotification.method);
	})(ExitNotification || (exports.ExitNotification = ExitNotification = {}));
	/**
	* The configuration change notification is sent from the client to the server
	* when the client's configuration has changed. The notification contains
	* the changed configuration as defined by the language client.
	*/
	var DidChangeConfigurationNotification;
	(function(DidChangeConfigurationNotification) {
		DidChangeConfigurationNotification.method = "workspace/didChangeConfiguration";
		DidChangeConfigurationNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		DidChangeConfigurationNotification.type = new messages_1.ProtocolNotificationType(DidChangeConfigurationNotification.method);
		DidChangeConfigurationNotification.capabilities = messages_1.CM.create("workspace.didChangeConfiguration", void 0);
	})(DidChangeConfigurationNotification || (exports.DidChangeConfigurationNotification = DidChangeConfigurationNotification = {}));
	/**
	* The message type
	*/
	var MessageType;
	(function(MessageType) {
		/**
		* An error message.
		*/
		MessageType.Error = 1;
		/**
		* A warning message.
		*/
		MessageType.Warning = 2;
		/**
		* An information message.
		*/
		MessageType.Info = 3;
		/**
		* A log message.
		*/
		MessageType.Log = 4;
		/**
		* A debug message.
		*
		* @since 3.18.0
		*/
		MessageType.Debug = 5;
	})(MessageType || (exports.MessageType = MessageType = {}));
	/**
	* The show message notification is sent from a server to a client to ask
	* the client to display a particular message in the user interface.
	*/
	var ShowMessageNotification;
	(function(ShowMessageNotification) {
		ShowMessageNotification.method = "window/showMessage";
		ShowMessageNotification.messageDirection = messages_1.MessageDirection.serverToClient;
		ShowMessageNotification.type = new messages_1.ProtocolNotificationType(ShowMessageNotification.method);
		ShowMessageNotification.capabilities = messages_1.CM.create("window.showMessage", void 0);
	})(ShowMessageNotification || (exports.ShowMessageNotification = ShowMessageNotification = {}));
	/**
	* The show message request is sent from the server to the client to show a message
	* and a set of options actions to the user.
	*/
	var ShowMessageRequest;
	(function(ShowMessageRequest) {
		ShowMessageRequest.method = "window/showMessageRequest";
		ShowMessageRequest.messageDirection = messages_1.MessageDirection.serverToClient;
		ShowMessageRequest.type = new messages_1.ProtocolRequestType(ShowMessageRequest.method);
		ShowMessageRequest.capabilities = messages_1.CM.create("window.showMessage", void 0);
	})(ShowMessageRequest || (exports.ShowMessageRequest = ShowMessageRequest = {}));
	/**
	* The log message notification is sent from the server to the client to ask
	* the client to log a particular message.
	*/
	var LogMessageNotification;
	(function(LogMessageNotification) {
		LogMessageNotification.method = "window/logMessage";
		LogMessageNotification.messageDirection = messages_1.MessageDirection.serverToClient;
		LogMessageNotification.type = new messages_1.ProtocolNotificationType(LogMessageNotification.method);
	})(LogMessageNotification || (exports.LogMessageNotification = LogMessageNotification = {}));
	/**
	* The telemetry event notification is sent from the server to the client to ask
	* the client to log telemetry data.
	*/
	var TelemetryEventNotification;
	(function(TelemetryEventNotification) {
		TelemetryEventNotification.method = "telemetry/event";
		TelemetryEventNotification.messageDirection = messages_1.MessageDirection.serverToClient;
		TelemetryEventNotification.type = new messages_1.ProtocolNotificationType(TelemetryEventNotification.method);
	})(TelemetryEventNotification || (exports.TelemetryEventNotification = TelemetryEventNotification = {}));
	/**
	* Defines how the host (editor) should sync
	* document changes to the language server.
	*/
	var TextDocumentSyncKind;
	(function(TextDocumentSyncKind) {
		/**
		* Documents should not be synced at all.
		*/
		TextDocumentSyncKind.None = 0;
		/**
		* Documents are synced by always sending the full content
		* of the document.
		*/
		TextDocumentSyncKind.Full = 1;
		/**
		* Documents are synced by sending the full content on open.
		* After that only incremental updates to the document are
		* send.
		*/
		TextDocumentSyncKind.Incremental = 2;
	})(TextDocumentSyncKind || (exports.TextDocumentSyncKind = TextDocumentSyncKind = {}));
	/**
	* The document open notification is sent from the client to the server to signal
	* newly opened text documents. The document's truth is now managed by the client
	* and the server must not try to read the document's truth using the document's
	* uri. Open in this sense means it is managed by the client. It doesn't necessarily
	* mean that its content is presented in an editor. An open notification must not
	* be sent more than once without a corresponding close notification send before.
	* This means open and close notification must be balanced and the max open count
	* is one.
	*/
	var DidOpenTextDocumentNotification;
	(function(DidOpenTextDocumentNotification) {
		DidOpenTextDocumentNotification.method = "textDocument/didOpen";
		DidOpenTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		DidOpenTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidOpenTextDocumentNotification.method);
		DidOpenTextDocumentNotification.capabilities = messages_1.CM.create("textDocument.synchronization", "textDocumentSync.openClose");
	})(DidOpenTextDocumentNotification || (exports.DidOpenTextDocumentNotification = DidOpenTextDocumentNotification = {}));
	var TextDocumentContentChangeEvent;
	(function(TextDocumentContentChangeEvent) {
		/**
		* Checks whether the information describes a delta event.
		*/
		function isIncremental(event) {
			const candidate = event;
			return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
		}
		TextDocumentContentChangeEvent.isIncremental = isIncremental;
		/**
		* Checks whether the information describes a full replacement event.
		*/
		function isFull(event) {
			const candidate = event;
			return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
		}
		TextDocumentContentChangeEvent.isFull = isFull;
	})(TextDocumentContentChangeEvent || (exports.TextDocumentContentChangeEvent = TextDocumentContentChangeEvent = {}));
	/**
	* The document change notification is sent from the client to the server to signal
	* changes to a text document.
	*/
	var DidChangeTextDocumentNotification;
	(function(DidChangeTextDocumentNotification) {
		DidChangeTextDocumentNotification.method = "textDocument/didChange";
		DidChangeTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		DidChangeTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidChangeTextDocumentNotification.method);
		DidChangeTextDocumentNotification.capabilities = messages_1.CM.create("textDocument.synchronization", "textDocumentSync");
	})(DidChangeTextDocumentNotification || (exports.DidChangeTextDocumentNotification = DidChangeTextDocumentNotification = {}));
	/**
	* The document close notification is sent from the client to the server when
	* the document got closed in the client. The document's truth now exists where
	* the document's uri points to (e.g. if the document's uri is a file uri the
	* truth now exists on disk). As with the open notification the close notification
	* is about managing the document's content. Receiving a close notification
	* doesn't mean that the document was open in an editor before. A close
	* notification requires a previous open notification to be sent.
	*/
	var DidCloseTextDocumentNotification;
	(function(DidCloseTextDocumentNotification) {
		DidCloseTextDocumentNotification.method = "textDocument/didClose";
		DidCloseTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		DidCloseTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidCloseTextDocumentNotification.method);
		DidCloseTextDocumentNotification.capabilities = messages_1.CM.create("textDocument.synchronization", "textDocumentSync.openClose");
	})(DidCloseTextDocumentNotification || (exports.DidCloseTextDocumentNotification = DidCloseTextDocumentNotification = {}));
	/**
	* The document save notification is sent from the client to the server when
	* the document got saved in the client.
	*/
	var DidSaveTextDocumentNotification;
	(function(DidSaveTextDocumentNotification) {
		DidSaveTextDocumentNotification.method = "textDocument/didSave";
		DidSaveTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		DidSaveTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidSaveTextDocumentNotification.method);
		DidSaveTextDocumentNotification.capabilities = messages_1.CM.create("textDocument.synchronization.didSave", "textDocumentSync.save");
	})(DidSaveTextDocumentNotification || (exports.DidSaveTextDocumentNotification = DidSaveTextDocumentNotification = {}));
	/**
	* Represents reasons why a text document is saved.
	*/
	var TextDocumentSaveReason;
	(function(TextDocumentSaveReason) {
		/**
		* Manually triggered, e.g. by the user pressing save, by starting debugging,
		* or by an API call.
		*/
		TextDocumentSaveReason.Manual = 1;
		/**
		* Automatic after a delay.
		*/
		TextDocumentSaveReason.AfterDelay = 2;
		/**
		* When the editor lost focus.
		*/
		TextDocumentSaveReason.FocusOut = 3;
	})(TextDocumentSaveReason || (exports.TextDocumentSaveReason = TextDocumentSaveReason = {}));
	/**
	* A document will save notification is sent from the client to the server before
	* the document is actually saved.
	*/
	var WillSaveTextDocumentNotification;
	(function(WillSaveTextDocumentNotification) {
		WillSaveTextDocumentNotification.method = "textDocument/willSave";
		WillSaveTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		WillSaveTextDocumentNotification.type = new messages_1.ProtocolNotificationType(WillSaveTextDocumentNotification.method);
		WillSaveTextDocumentNotification.capabilities = messages_1.CM.create("textDocument.synchronization.willSave", "textDocumentSync.willSave");
	})(WillSaveTextDocumentNotification || (exports.WillSaveTextDocumentNotification = WillSaveTextDocumentNotification = {}));
	/**
	* A document will save request is sent from the client to the server before
	* the document is actually saved. The request can return an array of TextEdits
	* which will be applied to the text document before it is saved. Please note that
	* clients might drop results if computing the text edits took too long or if a
	* server constantly fails on this request. This is done to keep the save fast and
	* reliable.
	*/
	var WillSaveTextDocumentWaitUntilRequest;
	(function(WillSaveTextDocumentWaitUntilRequest) {
		WillSaveTextDocumentWaitUntilRequest.method = "textDocument/willSaveWaitUntil";
		WillSaveTextDocumentWaitUntilRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		WillSaveTextDocumentWaitUntilRequest.type = new messages_1.ProtocolRequestType(WillSaveTextDocumentWaitUntilRequest.method);
		WillSaveTextDocumentWaitUntilRequest.capabilities = messages_1.CM.create("textDocument.synchronization.willSaveWaitUntil", "textDocumentSync.willSaveWaitUntil");
	})(WillSaveTextDocumentWaitUntilRequest || (exports.WillSaveTextDocumentWaitUntilRequest = WillSaveTextDocumentWaitUntilRequest = {}));
	/**
	* The watched files notification is sent from the client to the server when
	* the client detects changes to file watched by the language client.
	*/
	var DidChangeWatchedFilesNotification;
	(function(DidChangeWatchedFilesNotification) {
		DidChangeWatchedFilesNotification.method = "workspace/didChangeWatchedFiles";
		DidChangeWatchedFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		DidChangeWatchedFilesNotification.type = new messages_1.ProtocolNotificationType(DidChangeWatchedFilesNotification.method);
		DidChangeWatchedFilesNotification.capabilities = messages_1.CM.create("workspace.didChangeWatchedFiles", void 0);
	})(DidChangeWatchedFilesNotification || (exports.DidChangeWatchedFilesNotification = DidChangeWatchedFilesNotification = {}));
	/**
	* The file event type
	*/
	var FileChangeType;
	(function(FileChangeType) {
		/**
		* The file got created.
		*/
		FileChangeType.Created = 1;
		/**
		* The file got changed.
		*/
		FileChangeType.Changed = 2;
		/**
		* The file got deleted.
		*/
		FileChangeType.Deleted = 3;
	})(FileChangeType || (exports.FileChangeType = FileChangeType = {}));
	var RelativePattern;
	(function(RelativePattern) {
		function is(value) {
			const candidate = value;
			return Is.objectLiteral(candidate) && (vscode_languageserver_types_1.URI.is(candidate.baseUri) || vscode_languageserver_types_1.WorkspaceFolder.is(candidate.baseUri)) && Is.string(candidate.pattern);
		}
		RelativePattern.is = is;
	})(RelativePattern || (exports.RelativePattern = RelativePattern = {}));
	var GlobPattern;
	(function(GlobPattern) {
		function is(value) {
			const candidate = value;
			return Is.string(candidate) || RelativePattern.is(candidate);
		}
		GlobPattern.is = is;
	})(GlobPattern || (exports.GlobPattern = GlobPattern = {}));
	var WatchKind;
	(function(WatchKind) {
		/**
		* Interested in create events.
		*/
		WatchKind.Create = 1;
		/**
		* Interested in change events
		*/
		WatchKind.Change = 2;
		/**
		* Interested in delete events
		*/
		WatchKind.Delete = 4;
	})(WatchKind || (exports.WatchKind = WatchKind = {}));
	/**
	* Diagnostics notification are sent from the server to the client to signal
	* results of validation runs.
	*/
	var PublishDiagnosticsNotification;
	(function(PublishDiagnosticsNotification) {
		PublishDiagnosticsNotification.method = "textDocument/publishDiagnostics";
		PublishDiagnosticsNotification.messageDirection = messages_1.MessageDirection.serverToClient;
		PublishDiagnosticsNotification.type = new messages_1.ProtocolNotificationType(PublishDiagnosticsNotification.method);
		PublishDiagnosticsNotification.capabilities = messages_1.CM.create("textDocument.publishDiagnostics", void 0);
	})(PublishDiagnosticsNotification || (exports.PublishDiagnosticsNotification = PublishDiagnosticsNotification = {}));
	/**
	* How a completion was triggered
	*/
	var CompletionTriggerKind;
	(function(CompletionTriggerKind) {
		/**
		* Completion was triggered by typing an identifier (24x7 code
		* complete), manual invocation (e.g Ctrl+Space) or via API.
		*/
		CompletionTriggerKind.Invoked = 1;
		/**
		* Completion was triggered by a trigger character specified by
		* the `triggerCharacters` properties of the `CompletionRegistrationOptions`.
		*/
		CompletionTriggerKind.TriggerCharacter = 2;
		/**
		* Completion was re-triggered as current completion list is incomplete
		*/
		CompletionTriggerKind.TriggerForIncompleteCompletions = 3;
	})(CompletionTriggerKind || (exports.CompletionTriggerKind = CompletionTriggerKind = {}));
	/**
	* Request to request completion at a given text document position. The request's
	* parameter is of type {@link TextDocumentPosition} the response
	* is of type {@link CompletionItem CompletionItem[]} or {@link CompletionList}
	* or a Thenable that resolves to such.
	*
	* The request can delay the computation of the {@link CompletionItem.detail `detail`}
	* and {@link CompletionItem.documentation `documentation`} properties to the `completionItem/resolve`
	* request. However, properties that are needed for the initial sorting and filtering, like `sortText`,
	* `filterText`, `insertText`, and `textEdit`, must not be changed during resolve.
	*/
	var CompletionRequest;
	(function(CompletionRequest) {
		CompletionRequest.method = "textDocument/completion";
		CompletionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		CompletionRequest.type = new messages_1.ProtocolRequestType(CompletionRequest.method);
		CompletionRequest.capabilities = messages_1.CM.create("textDocument.completion", "completionProvider");
	})(CompletionRequest || (exports.CompletionRequest = CompletionRequest = {}));
	/**
	* Request to resolve additional information for a given completion item.The request's
	* parameter is of type {@link CompletionItem} the response
	* is of type {@link CompletionItem} or a Thenable that resolves to such.
	*/
	var CompletionResolveRequest;
	(function(CompletionResolveRequest) {
		CompletionResolveRequest.method = "completionItem/resolve";
		CompletionResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		CompletionResolveRequest.type = new messages_1.ProtocolRequestType(CompletionResolveRequest.method);
		CompletionResolveRequest.capabilities = messages_1.CM.create("textDocument.completion.completionItem.resolveSupport", "completionProvider.resolveProvider");
	})(CompletionResolveRequest || (exports.CompletionResolveRequest = CompletionResolveRequest = {}));
	/**
	* Request to request hover information at a given text document position. The request's
	* parameter is of type {@link TextDocumentPosition} the response is of
	* type {@link Hover} or a Thenable that resolves to such.
	*/
	var HoverRequest;
	(function(HoverRequest) {
		HoverRequest.method = "textDocument/hover";
		HoverRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		HoverRequest.type = new messages_1.ProtocolRequestType(HoverRequest.method);
		HoverRequest.capabilities = messages_1.CM.create("textDocument.hover", "hoverProvider");
	})(HoverRequest || (exports.HoverRequest = HoverRequest = {}));
	/**
	* How a signature help was triggered.
	*
	* @since 3.15.0
	*/
	var SignatureHelpTriggerKind;
	(function(SignatureHelpTriggerKind) {
		/**
		* Signature help was invoked manually by the user or by a command.
		*/
		SignatureHelpTriggerKind.Invoked = 1;
		/**
		* Signature help was triggered by a trigger character.
		*/
		SignatureHelpTriggerKind.TriggerCharacter = 2;
		/**
		* Signature help was triggered by the cursor moving or by the document content changing.
		*/
		SignatureHelpTriggerKind.ContentChange = 3;
	})(SignatureHelpTriggerKind || (exports.SignatureHelpTriggerKind = SignatureHelpTriggerKind = {}));
	var SignatureHelpRequest;
	(function(SignatureHelpRequest) {
		SignatureHelpRequest.method = "textDocument/signatureHelp";
		SignatureHelpRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		SignatureHelpRequest.type = new messages_1.ProtocolRequestType(SignatureHelpRequest.method);
		SignatureHelpRequest.capabilities = messages_1.CM.create("textDocument.signatureHelp", "signatureHelpProvider");
	})(SignatureHelpRequest || (exports.SignatureHelpRequest = SignatureHelpRequest = {}));
	/**
	* A request to resolve the definition location of a symbol at a given text
	* document position. The request's parameter is of type {@link TextDocumentPosition}
	* the response is of either type {@link Definition} or a typed array of
	* {@link DefinitionLink} or a Thenable that resolves to such.
	*/
	var DefinitionRequest;
	(function(DefinitionRequest) {
		DefinitionRequest.method = "textDocument/definition";
		DefinitionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		DefinitionRequest.type = new messages_1.ProtocolRequestType(DefinitionRequest.method);
		DefinitionRequest.capabilities = messages_1.CM.create("textDocument.definition", "definitionProvider");
	})(DefinitionRequest || (exports.DefinitionRequest = DefinitionRequest = {}));
	/**
	* A request to resolve project-wide references for the symbol denoted
	* by the given text document position. The request's parameter is of
	* type {@link ReferenceParams} the response is of type
	* {@link Location Location[]} or a Thenable that resolves to such.
	*/
	var ReferencesRequest;
	(function(ReferencesRequest) {
		ReferencesRequest.method = "textDocument/references";
		ReferencesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		ReferencesRequest.type = new messages_1.ProtocolRequestType(ReferencesRequest.method);
		ReferencesRequest.capabilities = messages_1.CM.create("textDocument.references", "referencesProvider");
	})(ReferencesRequest || (exports.ReferencesRequest = ReferencesRequest = {}));
	/**
	* Request to resolve a {@link DocumentHighlight} for a given
	* text document position. The request's parameter is of type {@link TextDocumentPosition}
	* the request response is an array of type {@link DocumentHighlight}
	* or a Thenable that resolves to such.
	*/
	var DocumentHighlightRequest;
	(function(DocumentHighlightRequest) {
		DocumentHighlightRequest.method = "textDocument/documentHighlight";
		DocumentHighlightRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		DocumentHighlightRequest.type = new messages_1.ProtocolRequestType(DocumentHighlightRequest.method);
		DocumentHighlightRequest.capabilities = messages_1.CM.create("textDocument.documentHighlight", "documentHighlightProvider");
	})(DocumentHighlightRequest || (exports.DocumentHighlightRequest = DocumentHighlightRequest = {}));
	/**
	* A request to list all symbols found in a given text document. The request's
	* parameter is of type {@link TextDocumentIdentifier} the
	* response is of type {@link SymbolInformation SymbolInformation[]} or a Thenable
	* that resolves to such.
	*/
	var DocumentSymbolRequest;
	(function(DocumentSymbolRequest) {
		DocumentSymbolRequest.method = "textDocument/documentSymbol";
		DocumentSymbolRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		DocumentSymbolRequest.type = new messages_1.ProtocolRequestType(DocumentSymbolRequest.method);
		DocumentSymbolRequest.capabilities = messages_1.CM.create("textDocument.documentSymbol", "documentSymbolProvider");
	})(DocumentSymbolRequest || (exports.DocumentSymbolRequest = DocumentSymbolRequest = {}));
	/**
	* A request to provide commands for the given text document and range.
	*/
	var CodeActionRequest;
	(function(CodeActionRequest) {
		CodeActionRequest.method = "textDocument/codeAction";
		CodeActionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		CodeActionRequest.type = new messages_1.ProtocolRequestType(CodeActionRequest.method);
		CodeActionRequest.capabilities = messages_1.CM.create("textDocument.codeAction", "codeActionProvider");
	})(CodeActionRequest || (exports.CodeActionRequest = CodeActionRequest = {}));
	/**
	* Request to resolve additional information for a given code action.The request's
	* parameter is of type {@link CodeAction} the response
	* is of type {@link CodeAction} or a Thenable that resolves to such.
	*/
	var CodeActionResolveRequest;
	(function(CodeActionResolveRequest) {
		CodeActionResolveRequest.method = "codeAction/resolve";
		CodeActionResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		CodeActionResolveRequest.type = new messages_1.ProtocolRequestType(CodeActionResolveRequest.method);
		CodeActionResolveRequest.capabilities = messages_1.CM.create("textDocument.codeAction.resolveSupport", "codeActionProvider.resolveProvider");
	})(CodeActionResolveRequest || (exports.CodeActionResolveRequest = CodeActionResolveRequest = {}));
	/**
	* A request to list project-wide symbols matching the query string given
	* by the {@link WorkspaceSymbolParams}. The response is
	* of type {@link SymbolInformation SymbolInformation[]} or a Thenable that
	* resolves to such.
	*
	* @since 3.17.0 - support for WorkspaceSymbol in the returned data. Clients
	*  need to advertise support for WorkspaceSymbols via the client capability
	*  `workspace.symbol.resolveSupport`.
	*
	*/
	var WorkspaceSymbolRequest;
	(function(WorkspaceSymbolRequest) {
		WorkspaceSymbolRequest.method = "workspace/symbol";
		WorkspaceSymbolRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		WorkspaceSymbolRequest.type = new messages_1.ProtocolRequestType(WorkspaceSymbolRequest.method);
		WorkspaceSymbolRequest.capabilities = messages_1.CM.create("workspace.symbol", "workspaceSymbolProvider");
	})(WorkspaceSymbolRequest || (exports.WorkspaceSymbolRequest = WorkspaceSymbolRequest = {}));
	/**
	* A request to resolve the range inside the workspace
	* symbol's location.
	*
	* @since 3.17.0
	*/
	var WorkspaceSymbolResolveRequest;
	(function(WorkspaceSymbolResolveRequest) {
		WorkspaceSymbolResolveRequest.method = "workspaceSymbol/resolve";
		WorkspaceSymbolResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		WorkspaceSymbolResolveRequest.type = new messages_1.ProtocolRequestType(WorkspaceSymbolResolveRequest.method);
		WorkspaceSymbolResolveRequest.capabilities = messages_1.CM.create("workspace.symbol.resolveSupport", "workspaceSymbolProvider.resolveProvider");
	})(WorkspaceSymbolResolveRequest || (exports.WorkspaceSymbolResolveRequest = WorkspaceSymbolResolveRequest = {}));
	/**
	* A request to provide code lens for the given text document.
	*/
	var CodeLensRequest;
	(function(CodeLensRequest) {
		CodeLensRequest.method = "textDocument/codeLens";
		CodeLensRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		CodeLensRequest.type = new messages_1.ProtocolRequestType(CodeLensRequest.method);
		CodeLensRequest.capabilities = messages_1.CM.create("textDocument.codeLens", "codeLensProvider");
	})(CodeLensRequest || (exports.CodeLensRequest = CodeLensRequest = {}));
	/**
	* A request to resolve a command for a given code lens.
	*/
	var CodeLensResolveRequest;
	(function(CodeLensResolveRequest) {
		CodeLensResolveRequest.method = "codeLens/resolve";
		CodeLensResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		CodeLensResolveRequest.type = new messages_1.ProtocolRequestType(CodeLensResolveRequest.method);
		CodeLensResolveRequest.capabilities = messages_1.CM.create("textDocument.codeLens.resolveSupport", "codeLensProvider.resolveProvider");
	})(CodeLensResolveRequest || (exports.CodeLensResolveRequest = CodeLensResolveRequest = {}));
	/**
	* A request to refresh all code actions
	*
	* @since 3.16.0
	*/
	var CodeLensRefreshRequest;
	(function(CodeLensRefreshRequest) {
		CodeLensRefreshRequest.method = `workspace/codeLens/refresh`;
		CodeLensRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
		CodeLensRefreshRequest.type = new messages_1.ProtocolRequestType0(CodeLensRefreshRequest.method);
		CodeLensRefreshRequest.capabilities = messages_1.CM.create("workspace.codeLens", void 0);
	})(CodeLensRefreshRequest || (exports.CodeLensRefreshRequest = CodeLensRefreshRequest = {}));
	/**
	* A request to provide document links
	*/
	var DocumentLinkRequest;
	(function(DocumentLinkRequest) {
		DocumentLinkRequest.method = "textDocument/documentLink";
		DocumentLinkRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		DocumentLinkRequest.type = new messages_1.ProtocolRequestType(DocumentLinkRequest.method);
		DocumentLinkRequest.capabilities = messages_1.CM.create("textDocument.documentLink", "documentLinkProvider");
	})(DocumentLinkRequest || (exports.DocumentLinkRequest = DocumentLinkRequest = {}));
	/**
	* Request to resolve additional information for a given document link. The request's
	* parameter is of type {@link DocumentLink} the response
	* is of type {@link DocumentLink} or a Thenable that resolves to such.
	*/
	var DocumentLinkResolveRequest;
	(function(DocumentLinkResolveRequest) {
		DocumentLinkResolveRequest.method = "documentLink/resolve";
		DocumentLinkResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		DocumentLinkResolveRequest.type = new messages_1.ProtocolRequestType(DocumentLinkResolveRequest.method);
		DocumentLinkResolveRequest.capabilities = messages_1.CM.create("textDocument.documentLink", "documentLinkProvider.resolveProvider");
	})(DocumentLinkResolveRequest || (exports.DocumentLinkResolveRequest = DocumentLinkResolveRequest = {}));
	/**
	* A request to format a whole document.
	*/
	var DocumentFormattingRequest;
	(function(DocumentFormattingRequest) {
		DocumentFormattingRequest.method = "textDocument/formatting";
		DocumentFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		DocumentFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentFormattingRequest.method);
		DocumentFormattingRequest.capabilities = messages_1.CM.create("textDocument.formatting", "documentFormattingProvider");
	})(DocumentFormattingRequest || (exports.DocumentFormattingRequest = DocumentFormattingRequest = {}));
	/**
	* A request to format a range in a document.
	*/
	var DocumentRangeFormattingRequest;
	(function(DocumentRangeFormattingRequest) {
		DocumentRangeFormattingRequest.method = "textDocument/rangeFormatting";
		DocumentRangeFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		DocumentRangeFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentRangeFormattingRequest.method);
		DocumentRangeFormattingRequest.capabilities = messages_1.CM.create("textDocument.rangeFormatting", "documentRangeFormattingProvider");
	})(DocumentRangeFormattingRequest || (exports.DocumentRangeFormattingRequest = DocumentRangeFormattingRequest = {}));
	/**
	* A request to format ranges in a document.
	*
	* @since 3.18.0
	*/
	var DocumentRangesFormattingRequest;
	(function(DocumentRangesFormattingRequest) {
		DocumentRangesFormattingRequest.method = "textDocument/rangesFormatting";
		DocumentRangesFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		DocumentRangesFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentRangesFormattingRequest.method);
		DocumentRangesFormattingRequest.capabilities = messages_1.CM.create("textDocument.rangeFormatting.rangesSupport", "documentRangeFormattingProvider.rangesSupport");
	})(DocumentRangesFormattingRequest || (exports.DocumentRangesFormattingRequest = DocumentRangesFormattingRequest = {}));
	/**
	* A request to format a document on type.
	*/
	var DocumentOnTypeFormattingRequest;
	(function(DocumentOnTypeFormattingRequest) {
		DocumentOnTypeFormattingRequest.method = "textDocument/onTypeFormatting";
		DocumentOnTypeFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		DocumentOnTypeFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentOnTypeFormattingRequest.method);
		DocumentOnTypeFormattingRequest.capabilities = messages_1.CM.create("textDocument.onTypeFormatting", "documentOnTypeFormattingProvider");
	})(DocumentOnTypeFormattingRequest || (exports.DocumentOnTypeFormattingRequest = DocumentOnTypeFormattingRequest = {}));
	var PrepareSupportDefaultBehavior;
	(function(PrepareSupportDefaultBehavior) {
		/**
		* The client's default behavior is to select the identifier
		* according the to language's syntax rule.
		*/
		PrepareSupportDefaultBehavior.Identifier = 1;
	})(PrepareSupportDefaultBehavior || (exports.PrepareSupportDefaultBehavior = PrepareSupportDefaultBehavior = {}));
	/**
	* A request to rename a symbol.
	*/
	var RenameRequest;
	(function(RenameRequest) {
		RenameRequest.method = "textDocument/rename";
		RenameRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		RenameRequest.type = new messages_1.ProtocolRequestType(RenameRequest.method);
		RenameRequest.capabilities = messages_1.CM.create("textDocument.rename", "renameProvider");
	})(RenameRequest || (exports.RenameRequest = RenameRequest = {}));
	/**
	* A request to test and perform the setup necessary for a rename.
	*
	* @since 3.16 - support for default behavior
	*/
	var PrepareRenameRequest;
	(function(PrepareRenameRequest) {
		PrepareRenameRequest.method = "textDocument/prepareRename";
		PrepareRenameRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		PrepareRenameRequest.type = new messages_1.ProtocolRequestType(PrepareRenameRequest.method);
		PrepareRenameRequest.capabilities = messages_1.CM.create("textDocument.rename.prepareSupport", "renameProvider.prepareProvider");
	})(PrepareRenameRequest || (exports.PrepareRenameRequest = PrepareRenameRequest = {}));
	/**
	* A request send from the client to the server to execute a command. The request might return
	* a workspace edit which the client will apply to the workspace.
	*/
	var ExecuteCommandRequest;
	(function(ExecuteCommandRequest) {
		ExecuteCommandRequest.method = "workspace/executeCommand";
		ExecuteCommandRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		ExecuteCommandRequest.type = new messages_1.ProtocolRequestType(ExecuteCommandRequest.method);
		ExecuteCommandRequest.capabilities = messages_1.CM.create("workspace.executeCommand", "executeCommandProvider");
	})(ExecuteCommandRequest || (exports.ExecuteCommandRequest = ExecuteCommandRequest = {}));
	/**
	* A request sent from the server to the client to modified certain resources.
	*/
	var ApplyWorkspaceEditRequest;
	(function(ApplyWorkspaceEditRequest) {
		ApplyWorkspaceEditRequest.method = "workspace/applyEdit";
		ApplyWorkspaceEditRequest.messageDirection = messages_1.MessageDirection.serverToClient;
		ApplyWorkspaceEditRequest.type = new messages_1.ProtocolRequestType("workspace/applyEdit");
		ApplyWorkspaceEditRequest.capabilities = messages_1.CM.create("workspace.applyEdit", void 0);
	})(ApplyWorkspaceEditRequest || (exports.ApplyWorkspaceEditRequest = ApplyWorkspaceEditRequest = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/connection.js
var require_connection = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createProtocolConnection = createProtocolConnection;
	const vscode_jsonrpc_1 = require_api$2();
	function createProtocolConnection(input, output, logger, options) {
		if (vscode_jsonrpc_1.ConnectionStrategy.is(options)) options = { connectionStrategy: options };
		return (0, vscode_jsonrpc_1.createMessageConnection)(input, output, logger, options);
	}
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/common/api.js
var require_api$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __exportStar = exports && exports.__exportStar || function(m, exports$5) {
		for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports$5, p)) __createBinding(exports$5, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LSPErrorCodes = exports.createProtocolConnection = void 0;
	__exportStar(require_api$2(), exports);
	__exportStar((init_main(), __toCommonJS(main_exports)), exports);
	__exportStar(require_messages(), exports);
	__exportStar(require_protocol(), exports);
	var connection_1 = require_connection();
	Object.defineProperty(exports, "createProtocolConnection", {
		enumerable: true,
		get: function() {
			return connection_1.createProtocolConnection;
		}
	});
	var LSPErrorCodes;
	(function(LSPErrorCodes) {
		/**
		* This is the start range of LSP reserved error codes.
		* It doesn't denote a real error code.
		*
		* @since 3.16.0
		*/
		LSPErrorCodes.lspReservedErrorRangeStart = -32899;
		/**
		* A request failed but it was syntactically correct, e.g the
		* method name was known and the parameters were valid. The error
		* message should contain human readable information about why
		* the request failed.
		*
		* @since 3.17.0
		*/
		LSPErrorCodes.RequestFailed = -32803;
		/**
		* The server cancelled the request. This error code should
		* only be used for requests that explicitly support being
		* server cancellable.
		*
		* @since 3.17.0
		*/
		LSPErrorCodes.ServerCancelled = -32802;
		/**
		* The server detected that the content of a document got
		* modified outside normal conditions. A server should
		* NOT send this error code if it detects a content change
		* in it unprocessed messages. The result even computed
		* on an older state might still be useful for the client.
		*
		* If a client decides that a result is not of any use anymore
		* the client should cancel the request.
		*/
		LSPErrorCodes.ContentModified = -32801;
		/**
		* The client has canceled a request and a server has detected
		* the cancel.
		*/
		LSPErrorCodes.RequestCancelled = -32800;
		/**
		* This is the end range of LSP reserved error codes.
		* It doesn't denote a real error code.
		*
		* @since 3.16.0
		*/
		LSPErrorCodes.lspReservedErrorRangeEnd = -32800;
	})(LSPErrorCodes || (exports.LSPErrorCodes = LSPErrorCodes = {}));
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/common/utils/uuid.js
var require_uuid = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.empty = void 0;
	exports.v4 = v4;
	exports.isUUID = isUUID;
	exports.parse = parse;
	exports.generateUuid = generateUuid;
	var ValueUUID = class {
		_value;
		constructor(_value) {
			this._value = _value;
		}
		asHex() {
			return this._value;
		}
		equals(other) {
			return this.asHex() === other.asHex();
		}
	};
	var V4UUID = class V4UUID extends ValueUUID {
		static _chars = [
			"0",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"6",
			"7",
			"8",
			"9",
			"a",
			"b",
			"c",
			"d",
			"e",
			"f"
		];
		static _timeHighBits = [
			"8",
			"9",
			"a",
			"b"
		];
		static _oneOf(array) {
			return array[Math.floor(array.length * Math.random())];
		}
		static _randomHex() {
			return V4UUID._oneOf(V4UUID._chars);
		}
		constructor() {
			super([
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				"-",
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				"-",
				"4",
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				"-",
				V4UUID._oneOf(V4UUID._timeHighBits),
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				"-",
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				V4UUID._randomHex(),
				V4UUID._randomHex()
			].join(""));
		}
	};
	/**
	* An empty UUID that contains only zeros.
	*/
	exports.empty = new ValueUUID("00000000-0000-0000-0000-000000000000");
	function v4() {
		return new V4UUID();
	}
	const _UUIDPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
	function isUUID(value) {
		return _UUIDPattern.test(value);
	}
	/**
	* Parses a UUID that is of the format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.
	* @param value A uuid string.
	*/
	function parse(value) {
		if (!isUUID(value)) throw new Error("invalid uuid");
		return new ValueUUID(value);
	}
	function generateUuid() {
		return v4().asHex();
	}
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/common/progress.js
var require_progress = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ProgressFeature = void 0;
	exports.attachWorkDone = attachWorkDone;
	exports.attachPartialResult = attachPartialResult;
	const vscode_languageserver_protocol_1 = require_api$1();
	const uuid_1 = require_uuid();
	var WorkDoneProgressReporterImpl = class WorkDoneProgressReporterImpl {
		_connection;
		_token;
		static Instances = /* @__PURE__ */ new Map();
		constructor(_connection, _token) {
			this._connection = _connection;
			this._token = _token;
			WorkDoneProgressReporterImpl.Instances.set(this._token, this);
		}
		begin(title, percentage, message, cancellable) {
			const param = {
				kind: "begin",
				title,
				message,
				cancellable
			};
			if (typeof percentage === "number") param.percentage = Math.round(percentage);
			this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
		}
		report(arg0, arg1) {
			const param = { kind: "report" };
			if (typeof arg0 === "number") {
				param.percentage = Math.round(arg0);
				if (arg1 !== void 0) param.message = arg1;
			} else param.message = arg0;
			this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
		}
		done() {
			WorkDoneProgressReporterImpl.Instances.delete(this._token);
			this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, { kind: "end" });
		}
	};
	var WorkDoneProgressServerReporterImpl = class extends WorkDoneProgressReporterImpl {
		_source;
		constructor(connection, token) {
			super(connection, token);
			this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
		}
		get token() {
			return this._source.token;
		}
		done() {
			this._source.dispose();
			super.done();
		}
		cancel() {
			this._source.cancel();
		}
	};
	var NullProgressReporter = class {
		constructor() {}
		begin() {}
		report() {}
		done() {}
	};
	var NullProgressServerReporter = class extends NullProgressReporter {
		_source;
		constructor() {
			super();
			this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
		}
		get token() {
			return this._source.token;
		}
		done() {
			this._source.dispose();
		}
		cancel() {
			this._source.cancel();
		}
	};
	function attachWorkDone(connection, params) {
		if (params === void 0 || params.workDoneToken === void 0) return new NullProgressReporter();
		const token = params.workDoneToken;
		delete params.workDoneToken;
		return new WorkDoneProgressReporterImpl(connection, token);
	}
	const ProgressFeature = (Base) => {
		return class extends Base {
			_progressSupported;
			constructor() {
				super();
				this._progressSupported = false;
			}
			initialize(capabilities) {
				super.initialize(capabilities);
				if (capabilities?.window?.workDoneProgress === true) {
					this._progressSupported = true;
					this.connection.onNotification(vscode_languageserver_protocol_1.WorkDoneProgressCancelNotification.type, (params) => {
						const progress = WorkDoneProgressReporterImpl.Instances.get(params.token);
						if (progress instanceof WorkDoneProgressServerReporterImpl || progress instanceof NullProgressServerReporter) progress.cancel();
					});
				}
			}
			attachWorkDoneProgress(token) {
				if (token === void 0) return new NullProgressReporter();
				else return new WorkDoneProgressReporterImpl(this.connection, token);
			}
			createWorkDoneProgress() {
				if (this._progressSupported) {
					const token = (0, uuid_1.generateUuid)();
					return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkDoneProgressCreateRequest.type, { token }).then(() => {
						return new WorkDoneProgressServerReporterImpl(this.connection, token);
					});
				} else return Promise.resolve(new NullProgressServerReporter());
			}
		};
	};
	exports.ProgressFeature = ProgressFeature;
	var ResultProgress;
	(function(ResultProgress) {
		ResultProgress.type = new vscode_languageserver_protocol_1.ProgressType();
	})(ResultProgress || (ResultProgress = {}));
	var ResultProgressReporterImpl = class {
		_connection;
		_token;
		constructor(_connection, _token) {
			this._connection = _connection;
			this._token = _token;
		}
		report(data) {
			this._connection.sendProgress(ResultProgress.type, this._token, data);
		}
	};
	function attachPartialResult(connection, params) {
		if (params === void 0 || params.partialResultToken === void 0) return;
		const token = params.partialResultToken;
		delete params.partialResultToken;
		return new ResultProgressReporterImpl(connection, token);
	}
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/common/configuration.js
var require_configuration = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || (function() {
		var ownKeys = function(o) {
			ownKeys = Object.getOwnPropertyNames || function(o) {
				var ar = [];
				for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
				return ar;
			};
			return ownKeys(o);
		};
		return function(mod) {
			if (mod && mod.__esModule) return mod;
			var result = {};
			if (mod != null) {
				for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
			}
			__setModuleDefault(result, mod);
			return result;
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ConfigurationFeature = void 0;
	const vscode_languageserver_protocol_1 = require_api$1();
	const Is = __importStar(require_is$2());
	const ConfigurationFeature = (Base) => {
		return class extends Base {
			getConfiguration(arg) {
				if (!arg) return this._getConfiguration({});
				else if (Is.string(arg)) return this._getConfiguration({ section: arg });
				else return this._getConfiguration(arg);
			}
			_getConfiguration(arg) {
				const params = { items: Array.isArray(arg) ? arg : [arg] };
				return this.connection.sendRequest(vscode_languageserver_protocol_1.ConfigurationRequest.type, params).then((result) => {
					if (Array.isArray(result)) return Array.isArray(arg) ? result : result[0];
					else return Array.isArray(arg) ? [] : null;
				});
			}
		};
	};
	exports.ConfigurationFeature = ConfigurationFeature;
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/common/workspaceFolder.js
var require_workspaceFolder = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.WorkspaceFoldersFeature = void 0;
	const vscode_languageserver_protocol_1 = require_api$1();
	const WorkspaceFoldersFeature = (Base) => {
		return class extends Base {
			_onDidChangeWorkspaceFolders;
			_unregistration;
			_notificationIsAutoRegistered;
			constructor() {
				super();
				this._notificationIsAutoRegistered = false;
			}
			initialize(capabilities) {
				super.initialize(capabilities);
				const workspaceCapabilities = capabilities.workspace;
				if (workspaceCapabilities && workspaceCapabilities.workspaceFolders) {
					this._onDidChangeWorkspaceFolders = new vscode_languageserver_protocol_1.Emitter();
					this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type, (params) => {
						this._onDidChangeWorkspaceFolders.fire(params.event);
					});
				}
			}
			fillServerCapabilities(capabilities) {
				super.fillServerCapabilities(capabilities);
				const changeNotifications = capabilities.workspace?.workspaceFolders?.changeNotifications;
				this._notificationIsAutoRegistered = changeNotifications === true || typeof changeNotifications === "string";
			}
			getWorkspaceFolders() {
				return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkspaceFoldersRequest.type);
			}
			get onDidChangeWorkspaceFolders() {
				if (!this._onDidChangeWorkspaceFolders) throw new Error("Client doesn't support sending workspace folder change events.");
				if (!this._notificationIsAutoRegistered && !this._unregistration) this._unregistration = this.connection.client.register(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type);
				return this._onDidChangeWorkspaceFolders.event;
			}
		};
	};
	exports.WorkspaceFoldersFeature = WorkspaceFoldersFeature;
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/common/callHierarchy.js
var require_callHierarchy = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.CallHierarchyFeature = void 0;
	const vscode_languageserver_protocol_1 = require_api$1();
	const CallHierarchyFeature = (Base) => {
		return class extends Base {
			get callHierarchy() {
				return {
					onPrepare: (handler) => {
						return this.connection.onRequest(vscode_languageserver_protocol_1.CallHierarchyPrepareRequest.type, (params, cancel) => {
							return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
						});
					},
					onIncomingCalls: (handler) => {
						const type = vscode_languageserver_protocol_1.CallHierarchyIncomingCallsRequest.type;
						return this.connection.onRequest(type, (params, cancel) => {
							return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
						});
					},
					onOutgoingCalls: (handler) => {
						const type = vscode_languageserver_protocol_1.CallHierarchyOutgoingCallsRequest.type;
						return this.connection.onRequest(type, (params, cancel) => {
							return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
						});
					}
				};
			}
		};
	};
	exports.CallHierarchyFeature = CallHierarchyFeature;
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/common/semanticTokens.js
var require_semanticTokens = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SemanticTokensBuilder = exports.SemanticTokensDiff = exports.SemanticTokensFeature = void 0;
	const vscode_languageserver_protocol_1 = require_api$1();
	const SemanticTokensFeature = (Base) => {
		return class extends Base {
			get semanticTokens() {
				return {
					refresh: () => {
						return this.connection.sendRequest(vscode_languageserver_protocol_1.SemanticTokensRefreshRequest.type);
					},
					on: (handler) => {
						const type = vscode_languageserver_protocol_1.SemanticTokensRequest.type;
						return this.connection.onRequest(type, (params, cancel) => {
							return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
						});
					},
					onDelta: (handler) => {
						const type = vscode_languageserver_protocol_1.SemanticTokensDeltaRequest.type;
						return this.connection.onRequest(type, (params, cancel) => {
							return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
						});
					},
					onRange: (handler) => {
						const type = vscode_languageserver_protocol_1.SemanticTokensRangeRequest.type;
						return this.connection.onRequest(type, (params, cancel) => {
							return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
						});
					}
				};
			}
		};
	};
	exports.SemanticTokensFeature = SemanticTokensFeature;
	var SemanticTokensDiff = class {
		originalSequence;
		modifiedSequence;
		constructor(originalSequence, modifiedSequence) {
			this.originalSequence = originalSequence;
			this.modifiedSequence = modifiedSequence;
		}
		computeDiff() {
			const originalLength = this.originalSequence.length;
			const modifiedLength = this.modifiedSequence.length;
			let startIndex = 0;
			while (startIndex < modifiedLength && startIndex < originalLength && this.originalSequence[startIndex] === this.modifiedSequence[startIndex]) startIndex++;
			if (startIndex < modifiedLength && startIndex < originalLength) {
				let originalEndIndex = originalLength - 1;
				let modifiedEndIndex = modifiedLength - 1;
				while (originalEndIndex >= startIndex && modifiedEndIndex >= startIndex && this.originalSequence[originalEndIndex] === this.modifiedSequence[modifiedEndIndex]) {
					originalEndIndex--;
					modifiedEndIndex--;
				}
				if (originalEndIndex < startIndex || modifiedEndIndex < startIndex) {
					originalEndIndex++;
					modifiedEndIndex++;
				}
				const deleteCount = originalEndIndex - startIndex + 1;
				const newData = this.modifiedSequence.slice(startIndex, modifiedEndIndex + 1);
				if (newData.length === 1 && newData[0] === this.originalSequence[originalEndIndex]) return [{
					start: startIndex,
					deleteCount: deleteCount - 1
				}];
				else return [{
					start: startIndex,
					deleteCount,
					data: newData
				}];
			} else if (startIndex < modifiedLength) return [{
				start: startIndex,
				deleteCount: 0,
				data: this.modifiedSequence.slice(startIndex)
			}];
			else if (startIndex < originalLength) return [{
				start: startIndex,
				deleteCount: originalLength - startIndex
			}];
			else return [];
		}
	};
	exports.SemanticTokensDiff = SemanticTokensDiff;
	exports.SemanticTokensBuilder = class SemanticTokensBuilder {
		_id;
		_prevLine;
		_prevChar;
		_dataIsSortedAndDeltaEncoded;
		_data;
		_dataNonDelta;
		_dataLen;
		_prevData;
		constructor() {
			this._prevData = void 0;
			this.initialize();
		}
		initialize() {
			this._id = Date.now();
			this._prevLine = 0;
			this._prevChar = 0;
			this._data = [];
			this._dataNonDelta = [];
			this._dataLen = 0;
			this._dataIsSortedAndDeltaEncoded = true;
		}
		push(line, char, length, tokenType, tokenModifiers) {
			if (this._dataIsSortedAndDeltaEncoded && (line < this._prevLine || line === this._prevLine && char < this._prevChar)) {
				this._dataIsSortedAndDeltaEncoded = false;
				this._dataNonDelta = SemanticTokensBuilder._deltaDecode(this._data);
			}
			let pushLine = line;
			let pushChar = char;
			if (this._dataIsSortedAndDeltaEncoded && this._dataLen > 0) {
				pushLine -= this._prevLine;
				if (pushLine === 0) pushChar -= this._prevChar;
			}
			const dataSource = this._dataIsSortedAndDeltaEncoded ? this._data : this._dataNonDelta;
			dataSource[this._dataLen++] = pushLine;
			dataSource[this._dataLen++] = pushChar;
			dataSource[this._dataLen++] = length;
			dataSource[this._dataLen++] = tokenType;
			dataSource[this._dataLen++] = tokenModifiers;
			this._prevLine = line;
			this._prevChar = char;
		}
		get id() {
			return this._id.toString();
		}
		static _deltaDecode(data) {
			const tokenCount = data.length / 5 | 0;
			let prevLine = 0;
			let prevChar = 0;
			const result = [];
			for (let i = 0; i < tokenCount; i++) {
				const dstOffset = 5 * i;
				let line = data[dstOffset];
				let char = data[dstOffset + 1];
				if (line === 0) {
					line = prevLine;
					char += prevChar;
				} else line += prevLine;
				const length = data[dstOffset + 2];
				const tokenType = data[dstOffset + 3];
				const tokenModifiers = data[dstOffset + 4];
				result[dstOffset + 0] = line;
				result[dstOffset + 1] = char;
				result[dstOffset + 2] = length;
				result[dstOffset + 3] = tokenType;
				result[dstOffset + 4] = tokenModifiers;
				prevLine = line;
				prevChar = char;
			}
			return result;
		}
		static _sortAndDeltaEncode(data) {
			const pos = [];
			const tokenCount = data.length / 5 | 0;
			for (let i = 0; i < tokenCount; i++) pos[i] = i;
			pos.sort((a, b) => {
				const aLine = data[5 * a];
				const bLine = data[5 * b];
				if (aLine === bLine) return data[5 * a + 1] - data[5 * b + 1];
				return aLine - bLine;
			});
			const result = [];
			let prevLine = 0;
			let prevChar = 0;
			for (let i = 0; i < tokenCount; i++) {
				const srcOffset = 5 * pos[i];
				const line = data[srcOffset + 0];
				const char = data[srcOffset + 1];
				const length = data[srcOffset + 2];
				const tokenType = data[srcOffset + 3];
				const tokenModifiers = data[srcOffset + 4];
				const pushLine = line - prevLine;
				const pushChar = pushLine === 0 ? char - prevChar : char;
				const dstOffset = 5 * i;
				result[dstOffset + 0] = pushLine;
				result[dstOffset + 1] = pushChar;
				result[dstOffset + 2] = length;
				result[dstOffset + 3] = tokenType;
				result[dstOffset + 4] = tokenModifiers;
				prevLine = line;
				prevChar = char;
			}
			return result;
		}
		getFinalDataDelta() {
			if (this._dataIsSortedAndDeltaEncoded) return this._data;
			else return SemanticTokensBuilder._sortAndDeltaEncode(this._dataNonDelta);
		}
		previousResult(id) {
			if (this.id === id) this._prevData = this.getFinalDataDelta();
			this.initialize();
		}
		build() {
			this._prevData = void 0;
			return {
				resultId: this.id,
				data: this.getFinalDataDelta()
			};
		}
		canBuildEdits() {
			return this._prevData !== void 0;
		}
		buildEdits() {
			if (this._prevData !== void 0) return {
				resultId: this.id,
				edits: new SemanticTokensDiff(this._prevData, this.getFinalDataDelta()).computeDiff()
			};
			else return this.build();
		}
	};
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/common/showDocument.js
var require_showDocument = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ShowDocumentFeature = void 0;
	const vscode_languageserver_protocol_1 = require_api$1();
	const ShowDocumentFeature = (Base) => {
		return class extends Base {
			showDocument(params) {
				return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowDocumentRequest.type, params);
			}
		};
	};
	exports.ShowDocumentFeature = ShowDocumentFeature;
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/common/fileOperations.js
var require_fileOperations = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FileOperationsFeature = void 0;
	const vscode_languageserver_protocol_1 = require_api$1();
	const FileOperationsFeature = (Base) => {
		return class extends Base {
			onDidCreateFiles(handler) {
				return this.connection.onNotification(vscode_languageserver_protocol_1.DidCreateFilesNotification.type, (params) => {
					return handler(params);
				});
			}
			onDidRenameFiles(handler) {
				return this.connection.onNotification(vscode_languageserver_protocol_1.DidRenameFilesNotification.type, (params) => {
					return handler(params);
				});
			}
			onDidDeleteFiles(handler) {
				return this.connection.onNotification(vscode_languageserver_protocol_1.DidDeleteFilesNotification.type, (params) => {
					return handler(params);
				});
			}
			onWillCreateFiles(handler) {
				return this.connection.onRequest(vscode_languageserver_protocol_1.WillCreateFilesRequest.type, (params, cancel) => {
					return handler(params, cancel);
				});
			}
			onWillRenameFiles(handler) {
				return this.connection.onRequest(vscode_languageserver_protocol_1.WillRenameFilesRequest.type, (params, cancel) => {
					return handler(params, cancel);
				});
			}
			onWillDeleteFiles(handler) {
				return this.connection.onRequest(vscode_languageserver_protocol_1.WillDeleteFilesRequest.type, (params, cancel) => {
					return handler(params, cancel);
				});
			}
		};
	};
	exports.FileOperationsFeature = FileOperationsFeature;
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/common/linkedEditingRange.js
var require_linkedEditingRange = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LinkedEditingRangeFeature = void 0;
	const vscode_languageserver_protocol_1 = require_api$1();
	const LinkedEditingRangeFeature = (Base) => {
		return class extends Base {
			onLinkedEditingRange(handler) {
				return this.connection.onRequest(vscode_languageserver_protocol_1.LinkedEditingRangeRequest.type, (params, cancel) => {
					return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
				});
			}
		};
	};
	exports.LinkedEditingRangeFeature = LinkedEditingRangeFeature;
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/common/typeHierarchy.js
var require_typeHierarchy = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TypeHierarchyFeature = void 0;
	const vscode_languageserver_protocol_1 = require_api$1();
	const TypeHierarchyFeature = (Base) => {
		return class extends Base {
			get typeHierarchy() {
				return {
					onPrepare: (handler) => {
						return this.connection.onRequest(vscode_languageserver_protocol_1.TypeHierarchyPrepareRequest.type, (params, cancel) => {
							return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
						});
					},
					onSupertypes: (handler) => {
						const type = vscode_languageserver_protocol_1.TypeHierarchySupertypesRequest.type;
						return this.connection.onRequest(type, (params, cancel) => {
							return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
						});
					},
					onSubtypes: (handler) => {
						const type = vscode_languageserver_protocol_1.TypeHierarchySubtypesRequest.type;
						return this.connection.onRequest(type, (params, cancel) => {
							return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
						});
					}
				};
			}
		};
	};
	exports.TypeHierarchyFeature = TypeHierarchyFeature;
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/common/inlineValue.js
var require_inlineValue = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InlineValueFeature = void 0;
	const vscode_languageserver_protocol_1 = require_api$1();
	const InlineValueFeature = (Base) => {
		return class extends Base {
			get inlineValue() {
				return {
					refresh: () => {
						return this.connection.sendRequest(vscode_languageserver_protocol_1.InlineValueRefreshRequest.type);
					},
					on: (handler) => {
						return this.connection.onRequest(vscode_languageserver_protocol_1.InlineValueRequest.type, (params, cancel) => {
							return handler(params, cancel, this.attachWorkDoneProgress(params));
						});
					}
				};
			}
		};
	};
	exports.InlineValueFeature = InlineValueFeature;
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/common/foldingRange.js
var require_foldingRange = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FoldingRangeFeature = void 0;
	const vscode_languageserver_protocol_1 = require_api$1();
	const FoldingRangeFeature = (Base) => {
		return class extends Base {
			get foldingRange() {
				return {
					refresh: () => {
						return this.connection.sendRequest(vscode_languageserver_protocol_1.FoldingRangeRefreshRequest.type);
					},
					on: (handler) => {
						const type = vscode_languageserver_protocol_1.FoldingRangeRequest.type;
						return this.connection.onRequest(type, (params, cancel) => {
							return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
						});
					}
				};
			}
		};
	};
	exports.FoldingRangeFeature = FoldingRangeFeature;
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/common/inlayHint.js
var require_inlayHint = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InlayHintFeature = void 0;
	const vscode_languageserver_protocol_1 = require_api$1();
	const InlayHintFeature = (Base) => {
		return class extends Base {
			get inlayHint() {
				return {
					refresh: () => {
						return this.connection.sendRequest(vscode_languageserver_protocol_1.InlayHintRefreshRequest.type);
					},
					on: (handler) => {
						return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintRequest.type, (params, cancel) => {
							return handler(params, cancel, this.attachWorkDoneProgress(params));
						});
					},
					resolve: (handler) => {
						return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintResolveRequest.type, (params, cancel) => {
							return handler(params, cancel);
						});
					}
				};
			}
		};
	};
	exports.InlayHintFeature = InlayHintFeature;
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/common/diagnostic.js
var require_diagnostic = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DiagnosticFeature = void 0;
	const vscode_languageserver_protocol_1 = require_api$1();
	const DiagnosticFeature = (Base) => {
		return class extends Base {
			get diagnostics() {
				return {
					refresh: () => {
						return this.connection.sendRequest(vscode_languageserver_protocol_1.DiagnosticRefreshRequest.type);
					},
					on: (handler) => {
						return this.connection.onRequest(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.type, (params, cancel) => {
							return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.partialResult, params));
						});
					},
					onWorkspace: (handler) => {
						return this.connection.onRequest(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.type, (params, cancel) => {
							return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.partialResult, params));
						});
					}
				};
			}
		};
	};
	exports.DiagnosticFeature = DiagnosticFeature;
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/common/textDocuments.js
var require_textDocuments = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TextDocuments = void 0;
	const vscode_languageserver_protocol_1 = require_api$1();
	/**
	* A manager for simple text documents. The manager requires at a minimum that
	* the server registered for the following text document sync events in the
	* initialize handler or via dynamic registration:
	*
	* - open and close events.
	* - change events.
	*
	* Registering for save and will save events is optional.
	*/
	var TextDocuments = class {
		_configuration;
		_syncedDocuments;
		_onDidChangeContent;
		_onDidOpen;
		_onDidClose;
		_onDidSave;
		_onWillSave;
		_willSaveWaitUntil;
		/**
		* Create a new text document manager.
		*/
		constructor(configuration) {
			this._configuration = configuration;
			this._syncedDocuments = /* @__PURE__ */ new Map();
			this._onDidChangeContent = new vscode_languageserver_protocol_1.Emitter();
			this._onDidOpen = new vscode_languageserver_protocol_1.Emitter();
			this._onDidClose = new vscode_languageserver_protocol_1.Emitter();
			this._onDidSave = new vscode_languageserver_protocol_1.Emitter();
			this._onWillSave = new vscode_languageserver_protocol_1.Emitter();
		}
		/**
		* An event that fires when a text document managed by this manager
		* has been opened.
		*/
		get onDidOpen() {
			return this._onDidOpen.event;
		}
		/**
		* An event that fires when a text document managed by this manager
		* has been opened or the content changes.
		*/
		get onDidChangeContent() {
			return this._onDidChangeContent.event;
		}
		/**
		* An event that fires when a text document managed by this manager
		* will be saved.
		*/
		get onWillSave() {
			return this._onWillSave.event;
		}
		/**
		* Sets a handler that will be called if a participant wants to provide
		* edits during a text document save.
		*/
		onWillSaveWaitUntil(handler) {
			this._willSaveWaitUntil = handler;
		}
		/**
		* An event that fires when a text document managed by this manager
		* has been saved.
		*/
		get onDidSave() {
			return this._onDidSave.event;
		}
		/**
		* An event that fires when a text document managed by this manager
		* has been closed.
		*/
		get onDidClose() {
			return this._onDidClose.event;
		}
		/**
		* Returns the document for the given URI. Returns undefined if
		* the document is not managed by this instance.
		*
		* @param uri The text document's URI to retrieve.
		* @return the text document or `undefined`.
		*/
		get(uri) {
			return this._syncedDocuments.get(uri);
		}
		/**
		* Returns all text documents managed by this instance.
		*
		* @return all text documents.
		*/
		all() {
			return Array.from(this._syncedDocuments.values());
		}
		/**
		* Returns the URIs of all text documents managed by this instance.
		*
		* @return the URI's of all text documents.
		*/
		keys() {
			return Array.from(this._syncedDocuments.keys());
		}
		/**
		* Listens for `low level` notification on the given connection to
		* update the text documents managed by this instance.
		*
		* Please note that the connection only provides handlers not an event model. Therefore
		* listening on a connection will overwrite the following handlers on a connection:
		* `onDidOpenTextDocument`, `onDidChangeTextDocument`, `onDidCloseTextDocument`,
		* `onWillSaveTextDocument`, `onWillSaveTextDocumentWaitUntil` and `onDidSaveTextDocument`.
		*
		* Use the corresponding events on the TextDocuments instance instead.
		*
		* @param connection The connection to listen on.
		*/
		listen(connection) {
			connection.__textDocumentSync = vscode_languageserver_protocol_1.TextDocumentSyncKind.Incremental;
			const disposables = [];
			disposables.push(connection.onDidOpenTextDocument((event) => {
				const td = event.textDocument;
				const document = this._configuration.create(td.uri, td.languageId, td.version, td.text);
				this._syncedDocuments.set(td.uri, document);
				const toFire = Object.freeze({ document });
				this._onDidOpen.fire(toFire);
				this._onDidChangeContent.fire(toFire);
			}));
			disposables.push(connection.onDidChangeTextDocument((event) => {
				const td = event.textDocument;
				const changes = event.contentChanges;
				if (changes.length === 0) return;
				const { version } = td;
				if (version === null || version === void 0) throw new Error(`Received document change event for ${td.uri} without valid version identifier`);
				let syncedDocument = this._syncedDocuments.get(td.uri);
				if (syncedDocument !== void 0) {
					syncedDocument = this._configuration.update(syncedDocument, changes, version);
					this._syncedDocuments.set(td.uri, syncedDocument);
					this._onDidChangeContent.fire(Object.freeze({ document: syncedDocument }));
				}
			}));
			disposables.push(connection.onDidCloseTextDocument((event) => {
				const syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
				if (syncedDocument !== void 0) {
					this._syncedDocuments.delete(event.textDocument.uri);
					this._onDidClose.fire(Object.freeze({ document: syncedDocument }));
				}
			}));
			disposables.push(connection.onWillSaveTextDocument((event) => {
				const syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
				if (syncedDocument !== void 0) this._onWillSave.fire(Object.freeze({
					document: syncedDocument,
					reason: event.reason
				}));
			}));
			disposables.push(connection.onWillSaveTextDocumentWaitUntil((event, token) => {
				const syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
				if (syncedDocument !== void 0 && this._willSaveWaitUntil) return this._willSaveWaitUntil(Object.freeze({
					document: syncedDocument,
					reason: event.reason
				}), token);
				else return [];
			}));
			disposables.push(connection.onDidSaveTextDocument((event) => {
				const syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
				if (syncedDocument !== void 0) this._onDidSave.fire(Object.freeze({ document: syncedDocument }));
			}));
			return vscode_languageserver_protocol_1.Disposable.create(() => {
				disposables.forEach((disposable) => disposable.dispose());
			});
		}
	};
	exports.TextDocuments = TextDocuments;
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/common/notebook.js
var require_notebook = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NotebookDocuments = exports.NotebookSyncFeature = void 0;
	const vscode_languageserver_protocol_1 = require_api$1();
	const textDocuments_1 = require_textDocuments();
	const NotebookSyncFeature = (Base) => {
		return class extends Base {
			get synchronization() {
				return {
					onDidOpenNotebookDocument: (handler) => {
						return this.connection.onNotification(vscode_languageserver_protocol_1.DidOpenNotebookDocumentNotification.type, (params) => {
							return handler(params);
						});
					},
					onDidChangeNotebookDocument: (handler) => {
						return this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeNotebookDocumentNotification.type, (params) => {
							return handler(params);
						});
					},
					onDidSaveNotebookDocument: (handler) => {
						return this.connection.onNotification(vscode_languageserver_protocol_1.DidSaveNotebookDocumentNotification.type, (params) => {
							return handler(params);
						});
					},
					onDidCloseNotebookDocument: (handler) => {
						return this.connection.onNotification(vscode_languageserver_protocol_1.DidCloseNotebookDocumentNotification.type, (params) => {
							return handler(params);
						});
					}
				};
			}
		};
	};
	exports.NotebookSyncFeature = NotebookSyncFeature;
	var CellTextDocumentConnection = class CellTextDocumentConnection {
		static NULL_DISPOSE = Object.freeze({ dispose: () => {} });
		openHandler;
		changeHandler;
		closeHandler;
		onDidOpenTextDocument(handler) {
			this.openHandler = handler;
			return vscode_languageserver_protocol_1.Disposable.create(() => {
				this.openHandler = void 0;
			});
		}
		openTextDocument(params) {
			return this.openHandler && this.openHandler(params);
		}
		onDidChangeTextDocument(handler) {
			this.changeHandler = handler;
			return vscode_languageserver_protocol_1.Disposable.create(() => {
				this.changeHandler = handler;
			});
		}
		changeTextDocument(params) {
			return this.changeHandler && this.changeHandler(params);
		}
		onDidCloseTextDocument(handler) {
			this.closeHandler = handler;
			return vscode_languageserver_protocol_1.Disposable.create(() => {
				this.closeHandler = void 0;
			});
		}
		closeTextDocument(params) {
			return this.closeHandler && this.closeHandler(params);
		}
		onWillSaveTextDocument() {
			return CellTextDocumentConnection.NULL_DISPOSE;
		}
		onWillSaveTextDocumentWaitUntil() {
			return CellTextDocumentConnection.NULL_DISPOSE;
		}
		onDidSaveTextDocument() {
			return CellTextDocumentConnection.NULL_DISPOSE;
		}
	};
	var NotebookDocuments = class {
		notebookDocuments;
		notebookCellMap;
		_onDidOpen;
		_onDidSave;
		_onDidChange;
		_onDidClose;
		_cellTextDocuments;
		constructor(configurationOrTextDocuments) {
			if (configurationOrTextDocuments instanceof textDocuments_1.TextDocuments) this._cellTextDocuments = configurationOrTextDocuments;
			else this._cellTextDocuments = new textDocuments_1.TextDocuments(configurationOrTextDocuments);
			this.notebookDocuments = /* @__PURE__ */ new Map();
			this.notebookCellMap = /* @__PURE__ */ new Map();
			this._onDidOpen = new vscode_languageserver_protocol_1.Emitter();
			this._onDidChange = new vscode_languageserver_protocol_1.Emitter();
			this._onDidSave = new vscode_languageserver_protocol_1.Emitter();
			this._onDidClose = new vscode_languageserver_protocol_1.Emitter();
		}
		get cellTextDocuments() {
			return this._cellTextDocuments;
		}
		getCellTextDocument(cell) {
			return this._cellTextDocuments.get(cell.document);
		}
		getNotebookDocument(uri) {
			return this.notebookDocuments.get(uri);
		}
		getNotebookCell(uri) {
			const value = this.notebookCellMap.get(uri);
			return value && value[0];
		}
		findNotebookDocumentForCell(cell) {
			const key = typeof cell === "string" ? cell : cell.document;
			const value = this.notebookCellMap.get(key);
			return value && value[1];
		}
		get onDidOpen() {
			return this._onDidOpen.event;
		}
		get onDidSave() {
			return this._onDidSave.event;
		}
		get onDidChange() {
			return this._onDidChange.event;
		}
		get onDidClose() {
			return this._onDidClose.event;
		}
		/**
		* Listens for `low level` notification on the given connection to
		* update the notebook documents managed by this instance.
		*
		* Please note that the connection only provides handlers not an event model. Therefore
		* listening on a connection will overwrite the following handlers on a connection:
		* `onDidOpenNotebookDocument`, `onDidChangeNotebookDocument`, `onDidSaveNotebookDocument`,
		*  and `onDidCloseNotebookDocument`.
		*
		* @param connection The connection to listen on.
		*/
		listen(connection) {
			const cellTextDocumentConnection = new CellTextDocumentConnection();
			const disposables = [];
			disposables.push(this.cellTextDocuments.listen(cellTextDocumentConnection));
			disposables.push(connection.notebooks.synchronization.onDidOpenNotebookDocument(async (params) => {
				this.notebookDocuments.set(params.notebookDocument.uri, params.notebookDocument);
				for (const cellTextDocument of params.cellTextDocuments) await cellTextDocumentConnection.openTextDocument({ textDocument: cellTextDocument });
				this.updateCellMap(params.notebookDocument);
				this._onDidOpen.fire(params.notebookDocument);
			}));
			disposables.push(connection.notebooks.synchronization.onDidChangeNotebookDocument(async (params) => {
				const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
				if (notebookDocument === void 0) return;
				notebookDocument.version = params.notebookDocument.version;
				const oldMetadata = notebookDocument.metadata;
				let metadataChanged = false;
				const change = params.change;
				if (change.metadata !== void 0) {
					metadataChanged = true;
					notebookDocument.metadata = change.metadata;
				}
				const opened = [];
				const closed = [];
				const data = [];
				const text = [];
				if (change.cells !== void 0) {
					const changedCells = change.cells;
					if (changedCells.structure !== void 0) {
						const array = changedCells.structure.array;
						notebookDocument.cells.splice(array.start, array.deleteCount, ...array.cells !== void 0 ? array.cells : []);
						if (changedCells.structure.didOpen !== void 0) for (const open of changedCells.structure.didOpen) {
							await cellTextDocumentConnection.openTextDocument({ textDocument: open });
							opened.push(open.uri);
						}
						if (changedCells.structure.didClose) for (const close of changedCells.structure.didClose) {
							await cellTextDocumentConnection.closeTextDocument({ textDocument: close });
							closed.push(close.uri);
						}
					}
					if (changedCells.data !== void 0) {
						const cellUpdates = new Map(changedCells.data.map((cell) => [cell.document, cell]));
						for (let i = 0; i <= notebookDocument.cells.length; i++) {
							const change = cellUpdates.get(notebookDocument.cells[i].document);
							if (change !== void 0) {
								const old = notebookDocument.cells.splice(i, 1, change);
								data.push({
									old: old[0],
									new: change
								});
								cellUpdates.delete(change.document);
								if (cellUpdates.size === 0) break;
							}
						}
					}
					if (changedCells.textContent !== void 0) for (const cellTextDocument of changedCells.textContent) {
						await cellTextDocumentConnection.changeTextDocument({
							textDocument: cellTextDocument.document,
							contentChanges: cellTextDocument.changes
						});
						text.push(cellTextDocument.document.uri);
					}
				}
				this.updateCellMap(notebookDocument);
				const changeEvent = { notebookDocument };
				if (metadataChanged) changeEvent.metadata = {
					old: oldMetadata,
					new: notebookDocument.metadata
				};
				const added = [];
				for (const open of opened) added.push(this.getNotebookCell(open));
				const removed = [];
				for (const close of closed) removed.push(this.getNotebookCell(close));
				const textContent = [];
				for (const change of text) textContent.push(this.getNotebookCell(change));
				if (added.length > 0 || removed.length > 0 || data.length > 0 || textContent.length > 0) changeEvent.cells = {
					added,
					removed,
					changed: {
						data,
						textContent
					}
				};
				if (changeEvent.metadata !== void 0 || changeEvent.cells !== void 0) this._onDidChange.fire(changeEvent);
			}));
			disposables.push(connection.notebooks.synchronization.onDidSaveNotebookDocument((params) => {
				const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
				if (notebookDocument === void 0) return;
				this._onDidSave.fire(notebookDocument);
			}));
			disposables.push(connection.notebooks.synchronization.onDidCloseNotebookDocument(async (params) => {
				const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
				if (notebookDocument === void 0) return;
				this._onDidClose.fire(notebookDocument);
				for (const cellTextDocument of params.cellTextDocuments) await cellTextDocumentConnection.closeTextDocument({ textDocument: cellTextDocument });
				this.notebookDocuments.delete(params.notebookDocument.uri);
				for (const cell of notebookDocument.cells) this.notebookCellMap.delete(cell.document);
			}));
			return vscode_languageserver_protocol_1.Disposable.create(() => {
				disposables.forEach((disposable) => disposable.dispose());
			});
		}
		updateCellMap(notebookDocument) {
			for (const cell of notebookDocument.cells) this.notebookCellMap.set(cell.document, [cell, notebookDocument]);
		}
	};
	exports.NotebookDocuments = NotebookDocuments;
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/common/moniker.js
var require_moniker = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MonikerFeature = void 0;
	const vscode_languageserver_protocol_1 = require_api$1();
	const MonikerFeature = (Base) => {
		return class extends Base {
			get moniker() {
				return { on: (handler) => {
					const type = vscode_languageserver_protocol_1.MonikerRequest.type;
					return this.connection.onRequest(type, (params, cancel) => {
						return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
					});
				} };
			}
		};
	};
	exports.MonikerFeature = MonikerFeature;
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/common/inlineCompletion.js
var require_inlineCompletion = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.InlineCompletionFeature = void 0;
	const vscode_languageserver_protocol_1 = require_api$1();
	const InlineCompletionFeature = (Base) => {
		return class extends Base {
			get inlineCompletion() {
				return { on: (handler) => {
					return this.connection.onRequest(vscode_languageserver_protocol_1.InlineCompletionRequest.type, (params, cancel) => {
						return handler(params, cancel, this.attachWorkDoneProgress(params));
					});
				} };
			}
		};
	};
	exports.InlineCompletionFeature = InlineCompletionFeature;
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/common/textDocumentContent.js
var require_textDocumentContent = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TextDocumentContentFeature = void 0;
	const vscode_languageserver_protocol_1 = require_api$1();
	const TextDocumentContentFeature = (Base) => {
		return class extends Base {
			get textDocumentContent() {
				return {
					refresh: (uri) => {
						return this.connection.sendRequest(vscode_languageserver_protocol_1.TextDocumentContentRefreshRequest.type, { uri });
					},
					on: (handler) => {
						return this.connection.onRequest(vscode_languageserver_protocol_1.TextDocumentContentRequest.type, (params, cancel) => {
							return handler(params, cancel);
						});
					}
				};
			}
		};
	};
	exports.TextDocumentContentFeature = TextDocumentContentFeature;
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/common/server.js
var require_server = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || (function() {
		var ownKeys = function(o) {
			ownKeys = Object.getOwnPropertyNames || function(o) {
				var ar = [];
				for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
				return ar;
			};
			return ownKeys(o);
		};
		return function(mod) {
			if (mod && mod.__esModule) return mod;
			var result = {};
			if (mod != null) {
				for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
			}
			__setModuleDefault(result, mod);
			return result;
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports._NotebooksImpl = exports._LanguagesImpl = exports.BulkUnregistration = exports.BulkRegistration = exports.ErrorMessageTracker = void 0;
	exports.combineConsoleFeatures = combineConsoleFeatures;
	exports.combineTelemetryFeatures = combineTelemetryFeatures;
	exports.combineTracerFeatures = combineTracerFeatures;
	exports.combineClientFeatures = combineClientFeatures;
	exports.combineWindowFeatures = combineWindowFeatures;
	exports.combineWorkspaceFeatures = combineWorkspaceFeatures;
	exports.combineLanguagesFeatures = combineLanguagesFeatures;
	exports.combineNotebooksFeatures = combineNotebooksFeatures;
	exports.combineFeatures = combineFeatures;
	exports.createConnection = createConnection;
	const vscode_languageserver_protocol_1 = require_api$1();
	const Is = __importStar(require_is$2());
	const UUID = __importStar(require_uuid());
	const progress_1 = require_progress();
	const configuration_1 = require_configuration();
	const workspaceFolder_1 = require_workspaceFolder();
	const callHierarchy_1 = require_callHierarchy();
	const semanticTokens_1 = require_semanticTokens();
	const showDocument_1 = require_showDocument();
	const fileOperations_1 = require_fileOperations();
	const linkedEditingRange_1 = require_linkedEditingRange();
	const typeHierarchy_1 = require_typeHierarchy();
	const inlineValue_1 = require_inlineValue();
	const foldingRange_1 = require_foldingRange();
	const inlayHint_1 = require_inlayHint();
	const diagnostic_1 = require_diagnostic();
	const notebook_1 = require_notebook();
	const moniker_1 = require_moniker();
	const inlineCompletion_1 = require_inlineCompletion();
	const textDocumentContent_1 = require_textDocumentContent();
	function null2Undefined(value) {
		if (value === null) return;
		return value;
	}
	/**
	* Helps tracking error message. Equal occurrences of the same
	* message are only stored once. This class is for example
	* useful if text documents are validated in a loop and equal
	* error message should be folded into one.
	*/
	var ErrorMessageTracker = class {
		_messages;
		constructor() {
			this._messages = Object.create(null);
		}
		/**
		* Add a message to the tracker.
		*
		* @param message The message to add.
		*/
		add(message) {
			let count = this._messages[message];
			if (!count) count = 0;
			count++;
			this._messages[message] = count;
		}
		/**
		* Send all tracked messages to the connection's window.
		*
		* @param connection The connection established between client and server.
		*/
		sendErrors(connection) {
			Object.keys(this._messages).forEach((message) => {
				connection.window.showErrorMessage(message);
			});
		}
	};
	exports.ErrorMessageTracker = ErrorMessageTracker;
	var RemoteConsoleImpl = class {
		_rawConnection;
		_connection;
		constructor() {}
		rawAttach(connection) {
			this._rawConnection = connection;
		}
		attach(connection) {
			this._connection = connection;
		}
		get connection() {
			if (!this._connection) throw new Error("Remote is not attached to a connection yet.");
			return this._connection;
		}
		fillServerCapabilities(_capabilities) {}
		initialize(_capabilities) {}
		error(message) {
			this.send(vscode_languageserver_protocol_1.MessageType.Error, message);
		}
		warn(message) {
			this.send(vscode_languageserver_protocol_1.MessageType.Warning, message);
		}
		info(message) {
			this.send(vscode_languageserver_protocol_1.MessageType.Info, message);
		}
		log(message) {
			this.send(vscode_languageserver_protocol_1.MessageType.Log, message);
		}
		debug(message) {
			this.send(vscode_languageserver_protocol_1.MessageType.Debug, message);
		}
		send(type, message) {
			if (this._rawConnection) this._rawConnection.sendNotification(vscode_languageserver_protocol_1.LogMessageNotification.type, {
				type,
				message
			}).catch(() => {
				(0, vscode_languageserver_protocol_1.RAL)().console.error(`Sending log message failed`);
			});
		}
	};
	var _RemoteWindowImpl = class {
		_connection;
		constructor() {}
		attach(connection) {
			this._connection = connection;
		}
		get connection() {
			if (!this._connection) throw new Error("Remote is not attached to a connection yet.");
			return this._connection;
		}
		initialize(_capabilities) {}
		fillServerCapabilities(_capabilities) {}
		showErrorMessage(message, ...actions) {
			const params = {
				type: vscode_languageserver_protocol_1.MessageType.Error,
				message,
				actions
			};
			return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
		}
		showWarningMessage(message, ...actions) {
			const params = {
				type: vscode_languageserver_protocol_1.MessageType.Warning,
				message,
				actions
			};
			return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
		}
		showInformationMessage(message, ...actions) {
			const params = {
				type: vscode_languageserver_protocol_1.MessageType.Info,
				message,
				actions
			};
			return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
		}
	};
	const RemoteWindowImpl = (0, showDocument_1.ShowDocumentFeature)((0, progress_1.ProgressFeature)(_RemoteWindowImpl));
	var BulkRegistration;
	(function(BulkRegistration) {
		/**
		* Creates a new bulk registration.
		* @return an empty bulk registration.
		*/
		function create() {
			return new BulkRegistrationImpl();
		}
		BulkRegistration.create = create;
	})(BulkRegistration || (exports.BulkRegistration = BulkRegistration = {}));
	var BulkRegistrationImpl = class {
		_registrations = [];
		_registered = /* @__PURE__ */ new Set();
		add(type, registerOptions) {
			const method = Is.string(type) ? type : type.method;
			if (this._registered.has(method)) throw new Error(`${method} is already added to this registration`);
			const id = UUID.generateUuid();
			this._registrations.push({
				id,
				method,
				registerOptions: registerOptions || {}
			});
			this._registered.add(method);
		}
		asRegistrationParams() {
			return { registrations: this._registrations };
		}
	};
	var BulkUnregistration;
	(function(BulkUnregistration) {
		function create() {
			return new BulkUnregistrationImpl(void 0, []);
		}
		BulkUnregistration.create = create;
	})(BulkUnregistration || (exports.BulkUnregistration = BulkUnregistration = {}));
	var BulkUnregistrationImpl = class {
		_connection;
		_unregistrations = /* @__PURE__ */ new Map();
		constructor(_connection, unregistrations) {
			this._connection = _connection;
			unregistrations.forEach((unregistration) => {
				this._unregistrations.set(unregistration.method, unregistration);
			});
		}
		get isAttached() {
			return !!this._connection;
		}
		attach(connection) {
			this._connection = connection;
		}
		add(unregistration) {
			this._unregistrations.set(unregistration.method, unregistration);
		}
		dispose() {
			const unregistrations = [];
			for (const unregistration of this._unregistrations.values()) unregistrations.push(unregistration);
			const params = { unregisterations: unregistrations };
			this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
				this._connection.console.info(`Bulk unregistration failed.`);
			});
		}
		disposeSingle(arg) {
			const method = Is.string(arg) ? arg : arg.method;
			const unregistration = this._unregistrations.get(method);
			if (!unregistration) return false;
			const params = { unregisterations: [unregistration] };
			this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).then(() => {
				this._unregistrations.delete(method);
			}, (_error) => {
				this._connection.console.info(`Un-registering request handler for ${unregistration.id} failed.`);
			});
			return true;
		}
	};
	var RemoteClientImpl = class {
		_connection;
		attach(connection) {
			this._connection = connection;
		}
		get connection() {
			if (!this._connection) throw new Error("Remote is not attached to a connection yet.");
			return this._connection;
		}
		initialize(_capabilities) {}
		fillServerCapabilities(_capabilities) {}
		register(typeOrRegistrations, registerOptionsOrType, registerOptions) {
			if (typeOrRegistrations instanceof BulkRegistrationImpl) return this.registerMany(typeOrRegistrations);
			else if (typeOrRegistrations instanceof BulkUnregistrationImpl) return this.registerSingle1(typeOrRegistrations, registerOptionsOrType, registerOptions);
			else return this.registerSingle2(typeOrRegistrations, registerOptionsOrType);
		}
		registerSingle1(unregistration, type, registerOptions) {
			const method = Is.string(type) ? type : type.method;
			const id = UUID.generateUuid();
			const params = { registrations: [{
				id,
				method,
				registerOptions: registerOptions || {}
			}] };
			if (!unregistration.isAttached) unregistration.attach(this.connection);
			return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
				unregistration.add({
					id,
					method
				});
				return unregistration;
			}, (_error) => {
				this.connection.console.info(`Registering request handler for ${method} failed.`);
				return Promise.reject(_error);
			});
		}
		registerSingle2(type, registerOptions) {
			const method = Is.string(type) ? type : type.method;
			const id = UUID.generateUuid();
			const params = { registrations: [{
				id,
				method,
				registerOptions: registerOptions || {}
			}] };
			return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
				return vscode_languageserver_protocol_1.Disposable.create(() => {
					this.unregisterSingle(id, method).catch(() => {
						this.connection.console.info(`Un-registering capability with id ${id} failed.`);
					});
				});
			}, (_error) => {
				this.connection.console.info(`Registering request handler for ${method} failed.`);
				return Promise.reject(_error);
			});
		}
		unregisterSingle(id, method) {
			const params = { unregisterations: [{
				id,
				method
			}] };
			return this.connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
				this.connection.console.info(`Un-registering request handler for ${id} failed.`);
			});
		}
		registerMany(registrations) {
			const params = registrations.asRegistrationParams();
			return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then(() => {
				return new BulkUnregistrationImpl(this._connection, params.registrations.map((registration) => {
					return {
						id: registration.id,
						method: registration.method
					};
				}));
			}, (_error) => {
				this.connection.console.info(`Bulk registration failed.`);
				return Promise.reject(_error);
			});
		}
	};
	var _RemoteWorkspaceImpl = class {
		_connection;
		constructor() {}
		attach(connection) {
			this._connection = connection;
		}
		get connection() {
			if (!this._connection) throw new Error("Remote is not attached to a connection yet.");
			return this._connection;
		}
		initialize(_capabilities) {}
		fillServerCapabilities(_capabilities) {}
		applyEdit(paramOrEdit) {
			function isApplyWorkspaceEditParams(value) {
				return value && !!value.edit;
			}
			const params = isApplyWorkspaceEditParams(paramOrEdit) ? paramOrEdit : { edit: paramOrEdit };
			return this.connection.sendRequest(vscode_languageserver_protocol_1.ApplyWorkspaceEditRequest.type, params);
		}
	};
	const RemoteWorkspaceImpl = (0, textDocumentContent_1.TextDocumentContentFeature)((0, fileOperations_1.FileOperationsFeature)((0, workspaceFolder_1.WorkspaceFoldersFeature)((0, configuration_1.ConfigurationFeature)(_RemoteWorkspaceImpl))));
	var TracerImpl = class {
		_trace;
		_connection;
		constructor() {
			this._trace = vscode_languageserver_protocol_1.Trace.Off;
		}
		attach(connection) {
			this._connection = connection;
		}
		get connection() {
			if (!this._connection) throw new Error("Remote is not attached to a connection yet.");
			return this._connection;
		}
		initialize(_capabilities) {}
		fillServerCapabilities(_capabilities) {}
		set trace(value) {
			this._trace = value;
		}
		log(message, verbose) {
			if (this._trace === vscode_languageserver_protocol_1.Trace.Off) return;
			this.connection.sendNotification(vscode_languageserver_protocol_1.LogTraceNotification.type, {
				message,
				verbose: this._trace === vscode_languageserver_protocol_1.Trace.Verbose ? verbose : void 0
			}).catch(() => {});
		}
	};
	var TelemetryImpl = class {
		_connection;
		constructor() {}
		attach(connection) {
			this._connection = connection;
		}
		get connection() {
			if (!this._connection) throw new Error("Remote is not attached to a connection yet.");
			return this._connection;
		}
		initialize(_capabilities) {}
		fillServerCapabilities(_capabilities) {}
		logEvent(data) {
			this.connection.sendNotification(vscode_languageserver_protocol_1.TelemetryEventNotification.type, data).catch(() => {
				this.connection.console.log(`Sending TelemetryEventNotification failed`);
			});
		}
	};
	var _LanguagesImpl = class {
		_connection;
		constructor() {}
		attach(connection) {
			this._connection = connection;
		}
		get connection() {
			if (!this._connection) throw new Error("Remote is not attached to a connection yet.");
			return this._connection;
		}
		initialize(_capabilities) {}
		fillServerCapabilities(_capabilities) {}
		attachWorkDoneProgress(params) {
			return (0, progress_1.attachWorkDone)(this.connection, params);
		}
		attachPartialResultProgress(_type, params) {
			return (0, progress_1.attachPartialResult)(this.connection, params);
		}
	};
	exports._LanguagesImpl = _LanguagesImpl;
	const LanguagesImpl = (0, inlineCompletion_1.InlineCompletionFeature)((0, foldingRange_1.FoldingRangeFeature)((0, moniker_1.MonikerFeature)((0, diagnostic_1.DiagnosticFeature)((0, inlayHint_1.InlayHintFeature)((0, inlineValue_1.InlineValueFeature)((0, typeHierarchy_1.TypeHierarchyFeature)((0, linkedEditingRange_1.LinkedEditingRangeFeature)((0, semanticTokens_1.SemanticTokensFeature)((0, callHierarchy_1.CallHierarchyFeature)(_LanguagesImpl))))))))));
	var _NotebooksImpl = class {
		_connection;
		constructor() {}
		attach(connection) {
			this._connection = connection;
		}
		get connection() {
			if (!this._connection) throw new Error("Remote is not attached to a connection yet.");
			return this._connection;
		}
		initialize(_capabilities) {}
		fillServerCapabilities(_capabilities) {}
		attachWorkDoneProgress(params) {
			return (0, progress_1.attachWorkDone)(this.connection, params);
		}
		attachPartialResultProgress(_type, params) {
			return (0, progress_1.attachPartialResult)(this.connection, params);
		}
	};
	exports._NotebooksImpl = _NotebooksImpl;
	const NotebooksImpl = (0, notebook_1.NotebookSyncFeature)(_NotebooksImpl);
	function combineConsoleFeatures(one, two) {
		return function(Base) {
			return two(one(Base));
		};
	}
	function combineTelemetryFeatures(one, two) {
		return function(Base) {
			return two(one(Base));
		};
	}
	function combineTracerFeatures(one, two) {
		return function(Base) {
			return two(one(Base));
		};
	}
	function combineClientFeatures(one, two) {
		return function(Base) {
			return two(one(Base));
		};
	}
	function combineWindowFeatures(one, two) {
		return function(Base) {
			return two(one(Base));
		};
	}
	function combineWorkspaceFeatures(one, two) {
		return function(Base) {
			return two(one(Base));
		};
	}
	function combineLanguagesFeatures(one, two) {
		return function(Base) {
			return two(one(Base));
		};
	}
	function combineNotebooksFeatures(one, two) {
		return function(Base) {
			return two(one(Base));
		};
	}
	function combineFeatures(one, two) {
		function combine(one, two, func) {
			if (one && two) return func(one, two);
			else if (one) return one;
			else return two;
		}
		return {
			__brand: "features",
			console: combine(one.console, two.console, combineConsoleFeatures),
			tracer: combine(one.tracer, two.tracer, combineTracerFeatures),
			telemetry: combine(one.telemetry, two.telemetry, combineTelemetryFeatures),
			client: combine(one.client, two.client, combineClientFeatures),
			window: combine(one.window, two.window, combineWindowFeatures),
			workspace: combine(one.workspace, two.workspace, combineWorkspaceFeatures),
			languages: combine(one.languages, two.languages, combineLanguagesFeatures),
			notebooks: combine(one.notebooks, two.notebooks, combineNotebooksFeatures)
		};
	}
	function createConnection(connectionFactory, watchDog, factories) {
		const logger = factories && factories.console ? new (factories.console(RemoteConsoleImpl))() : new RemoteConsoleImpl();
		const connection = connectionFactory(logger);
		logger.rawAttach(connection);
		const tracer = factories && factories.tracer ? new (factories.tracer(TracerImpl))() : new TracerImpl();
		const telemetry = factories && factories.telemetry ? new (factories.telemetry(TelemetryImpl))() : new TelemetryImpl();
		const client = factories && factories.client ? new (factories.client(RemoteClientImpl))() : new RemoteClientImpl();
		const remoteWindow = factories && factories.window ? new (factories.window(RemoteWindowImpl))() : new RemoteWindowImpl();
		const workspace = factories && factories.workspace ? new (factories.workspace(RemoteWorkspaceImpl))() : new RemoteWorkspaceImpl();
		const languages = factories && factories.languages ? new (factories.languages(LanguagesImpl))() : new LanguagesImpl();
		const notebooks = factories && factories.notebooks ? new (factories.notebooks(NotebooksImpl))() : new NotebooksImpl();
		const allRemotes = [
			logger,
			tracer,
			telemetry,
			client,
			remoteWindow,
			workspace,
			languages,
			notebooks
		];
		function asPromise(value) {
			if (value instanceof Promise) return value;
			else if (Is.thenable(value)) return new Promise((resolve, reject) => {
				value.then((resolved) => resolve(resolved), (error) => reject(error));
			});
			else return Promise.resolve(value);
		}
		let shutdownHandler = void 0;
		let initializeHandler = void 0;
		let exitHandler = void 0;
		const protocolConnection = {
			listen: () => connection.listen(),
			sendRequest: (type, ...params) => connection.sendRequest(Is.string(type) ? type : type.method, ...params),
			onRequest: (type, handler) => connection.onRequest(type, handler),
			sendNotification: (type, param) => {
				const method = Is.string(type) ? type : type.method;
				return connection.sendNotification(method, param);
			},
			onNotification: (type, handler) => connection.onNotification(type, handler),
			onProgress: connection.onProgress,
			sendProgress: connection.sendProgress,
			onInitialize: (handler) => {
				initializeHandler = handler;
				return { dispose: () => {
					initializeHandler = void 0;
				} };
			},
			onInitialized: (handler) => connection.onNotification(vscode_languageserver_protocol_1.InitializedNotification.type, handler),
			onShutdown: (handler) => {
				shutdownHandler = handler;
				return { dispose: () => {
					shutdownHandler = void 0;
				} };
			},
			onExit: (handler) => {
				exitHandler = handler;
				return { dispose: () => {
					exitHandler = void 0;
				} };
			},
			get console() {
				return logger;
			},
			get telemetry() {
				return telemetry;
			},
			get tracer() {
				return tracer;
			},
			get client() {
				return client;
			},
			get window() {
				return remoteWindow;
			},
			get workspace() {
				return workspace;
			},
			get languages() {
				return languages;
			},
			get notebooks() {
				return notebooks;
			},
			onDidChangeConfiguration: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type, handler),
			onDidChangeWatchedFiles: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type, handler),
			__textDocumentSync: void 0,
			onDidOpenTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.type, handler),
			onDidChangeTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, handler),
			onDidCloseTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.type, handler),
			onWillSaveTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.WillSaveTextDocumentNotification.type, handler),
			onWillSaveTextDocumentWaitUntil: (handler) => connection.onRequest(vscode_languageserver_protocol_1.WillSaveTextDocumentWaitUntilRequest.type, handler),
			onDidSaveTextDocument: (handler) => connection.onNotification(vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.type, handler),
			sendDiagnostics: (params) => connection.sendNotification(vscode_languageserver_protocol_1.PublishDiagnosticsNotification.type, params),
			onHover: (handler) => connection.onRequest(vscode_languageserver_protocol_1.HoverRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), void 0);
			}),
			onCompletion: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CompletionRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
			}),
			onCompletionResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CompletionResolveRequest.type, handler),
			onSignatureHelp: (handler) => connection.onRequest(vscode_languageserver_protocol_1.SignatureHelpRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), void 0);
			}),
			onDeclaration: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DeclarationRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
			}),
			onDefinition: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DefinitionRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
			}),
			onTypeDefinition: (handler) => connection.onRequest(vscode_languageserver_protocol_1.TypeDefinitionRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
			}),
			onImplementation: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ImplementationRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
			}),
			onReferences: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ReferencesRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
			}),
			onDocumentHighlight: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentHighlightRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
			}),
			onDocumentSymbol: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentSymbolRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
			}),
			onWorkspaceSymbol: (handler) => connection.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
			}),
			onWorkspaceSymbolResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolResolveRequest.type, handler),
			onCodeAction: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeActionRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
			}),
			onCodeActionResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeActionResolveRequest.type, (params, cancel) => {
				return handler(params, cancel);
			}),
			onCodeLens: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeLensRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
			}),
			onCodeLensResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.CodeLensResolveRequest.type, (params, cancel) => {
				return handler(params, cancel);
			}),
			onDocumentFormatting: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentFormattingRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), void 0);
			}),
			onDocumentRangeFormatting: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), void 0);
			}),
			onDocumentRangesFormatting: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentRangesFormattingRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), void 0);
			}),
			onDocumentOnTypeFormatting: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type, (params, cancel) => {
				return handler(params, cancel);
			}),
			onRenameRequest: (handler) => connection.onRequest(vscode_languageserver_protocol_1.RenameRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), void 0);
			}),
			onPrepareRename: (handler) => connection.onRequest(vscode_languageserver_protocol_1.PrepareRenameRequest.type, (params, cancel) => {
				return handler(params, cancel);
			}),
			onDocumentLinks: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentLinkRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
			}),
			onDocumentLinkResolve: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentLinkResolveRequest.type, (params, cancel) => {
				return handler(params, cancel);
			}),
			onDocumentColor: (handler) => connection.onRequest(vscode_languageserver_protocol_1.DocumentColorRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
			}),
			onColorPresentation: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ColorPresentationRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
			}),
			onFoldingRanges: (handler) => connection.onRequest(vscode_languageserver_protocol_1.FoldingRangeRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
			}),
			onSelectionRanges: (handler) => connection.onRequest(vscode_languageserver_protocol_1.SelectionRangeRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), (0, progress_1.attachPartialResult)(connection, params));
			}),
			onExecuteCommand: (handler) => connection.onRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, (params, cancel) => {
				return handler(params, cancel, (0, progress_1.attachWorkDone)(connection, params), void 0);
			}),
			dispose: () => connection.dispose()
		};
		for (const remote of allRemotes) remote.attach(protocolConnection);
		connection.onRequest(vscode_languageserver_protocol_1.InitializeRequest.type, (params) => {
			watchDog.initialize(params);
			if (Is.string(params.trace)) tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.trace);
			for (const remote of allRemotes) remote.initialize(params.capabilities);
			if (initializeHandler) return asPromise(initializeHandler(params, new vscode_languageserver_protocol_1.CancellationTokenSource().token, (0, progress_1.attachWorkDone)(connection, params), void 0)).then((value) => {
				if (value instanceof vscode_languageserver_protocol_1.ResponseError) return value;
				let result = value;
				if (!result) result = { capabilities: {} };
				let capabilities = result.capabilities;
				if (!capabilities) {
					capabilities = {};
					result.capabilities = capabilities;
				}
				if (capabilities.textDocumentSync === void 0 || capabilities.textDocumentSync === null) capabilities.textDocumentSync = Is.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
				else if (!Is.number(capabilities.textDocumentSync) && !Is.number(capabilities.textDocumentSync.change)) capabilities.textDocumentSync.change = Is.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
				for (const remote of allRemotes) remote.fillServerCapabilities(capabilities);
				return result;
			});
			else {
				const result = { capabilities: { textDocumentSync: vscode_languageserver_protocol_1.TextDocumentSyncKind.None } };
				for (const remote of allRemotes) remote.fillServerCapabilities(result.capabilities);
				return result;
			}
		});
		connection.onRequest(vscode_languageserver_protocol_1.ShutdownRequest.type, () => {
			watchDog.shutdownReceived = true;
			if (shutdownHandler) return shutdownHandler(new vscode_languageserver_protocol_1.CancellationTokenSource().token);
			else return;
		});
		connection.onNotification(vscode_languageserver_protocol_1.ExitNotification.type, () => {
			try {
				if (exitHandler) return exitHandler();
			} finally {
				if (watchDog.shutdownReceived) watchDog.exit(0);
				else watchDog.exit(1);
			}
		});
		connection.onNotification(vscode_languageserver_protocol_1.SetTraceNotification.type, (params) => {
			tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.value);
		});
		return protocolConnection;
	}
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/node/files.js
var require_files = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || (function() {
		var ownKeys = function(o) {
			ownKeys = Object.getOwnPropertyNames || function(o) {
				var ar = [];
				for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
				return ar;
			};
			return ownKeys(o);
		};
		return function(mod) {
			if (mod && mod.__esModule) return mod;
			var result = {};
			if (mod != null) {
				for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
			}
			__setModuleDefault(result, mod);
			return result;
		};
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FileSystem = void 0;
	exports.uriToFilePath = uriToFilePath;
	exports.resolve = resolve;
	exports.resolveGlobalNodePath = resolveGlobalNodePath;
	exports.resolveGlobalYarnPath = resolveGlobalYarnPath;
	exports.resolveModulePath = resolveModulePath;
	const url = __importStar(require("url"));
	const path$1 = __importStar(require("path"));
	const fs$3 = __importStar(require("fs"));
	const child_process_1 = require("child_process");
	/**
	* @deprecated Use the `vscode-uri` npm module which provides a more
	* complete implementation of handling VS Code URIs.
	*/
	function uriToFilePath(uri) {
		const parsed = url.parse(uri);
		if (parsed.protocol !== "file:" || !parsed.path) return;
		const segments = parsed.path.split("/");
		for (let i = 0, len = segments.length; i < len; i++) segments[i] = decodeURIComponent(segments[i]);
		if (process.platform === "win32" && segments.length > 1) {
			const first = segments[0];
			const second = segments[1];
			if (first.length === 0 && second.length > 1 && second[1] === ":") segments.shift();
		}
		return path$1.normalize(segments.join("/"));
	}
	function isWindows() {
		return process.platform === "win32";
	}
	function resolve(moduleName, nodePath, cwd, tracer) {
		const nodePathKey = "NODE_PATH";
		const app = [
			"var p = process;",
			"p.on('message',function(m){",
			"if(m.c==='e'){",
			"p.exit(0);",
			"}",
			"else if(m.c==='rs'){",
			"try{",
			"var r=require.resolve(m.a);",
			"p.send({c:'r',s:true,r:r});",
			"}",
			"catch(err){",
			"p.send({c:'r',s:false});",
			"}",
			"}",
			"});"
		].join("");
		return new Promise((resolve, reject) => {
			const env = process.env;
			const newEnv = Object.create(null);
			Object.keys(env).forEach((key) => newEnv[key] = env[key]);
			if (nodePath && fs$3.existsSync(nodePath)) {
				if (newEnv[nodePathKey]) newEnv[nodePathKey] = nodePath + path$1.delimiter + newEnv[nodePathKey];
				else newEnv[nodePathKey] = nodePath;
				if (tracer) tracer(`NODE_PATH value is: ${newEnv[nodePathKey]}`);
			}
			newEnv["ELECTRON_RUN_AS_NODE"] = "1";
			try {
				const cp = (0, child_process_1.fork)("", [], {
					cwd,
					env: newEnv,
					execArgv: ["-e", app]
				});
				if (cp.pid === void 0) {
					reject(/* @__PURE__ */ new Error(`Starting process to resolve node module  ${moduleName} failed`));
					return;
				}
				cp.on("error", (error) => {
					reject(error);
				});
				cp.on("message", (message) => {
					if (message.c === "r") {
						cp.send({ c: "e" });
						if (message.s) resolve(message.r);
						else reject(/* @__PURE__ */ new Error(`Failed to resolve module: ${moduleName}`));
					}
				});
				const message = {
					c: "rs",
					a: moduleName
				};
				cp.send(message);
			} catch (error) {
				reject(error);
			}
		});
	}
	/**
	* Resolve the global npm package path.
	* @deprecated Since this depends on the used package manager and their version the best is that servers
	* implement this themselves since they know best what kind of package managers to support.
	* @param tracer the tracer to use
	*/
	function resolveGlobalNodePath(tracer) {
		let npmCommand = "npm";
		const env = Object.create(null);
		Object.keys(process.env).forEach((key) => env[key] = process.env[key]);
		env["NO_UPDATE_NOTIFIER"] = "true";
		const options = {
			encoding: "utf8",
			env
		};
		if (isWindows()) {
			npmCommand = "npm.cmd";
			options.shell = true;
		}
		const handler = () => {};
		try {
			process.on("SIGPIPE", handler);
			const stdout = (0, child_process_1.spawnSync)(npmCommand, [
				"config",
				"get",
				"prefix"
			], options).stdout;
			if (!stdout) {
				if (tracer) tracer(`'npm config get prefix' didn't return a value.`);
				return;
			}
			const prefix = stdout.trim();
			if (tracer) tracer(`'npm config get prefix' value is: ${prefix}`);
			if (prefix.length > 0) {
				if (isWindows()) return path$1.join(prefix, "node_modules");
				else return path$1.join(prefix, "lib", "node_modules");
			}
			return;
		} catch (err) {
			return;
		} finally {
			process.removeListener("SIGPIPE", handler);
		}
	}
	function resolveGlobalYarnPath(tracer) {
		let yarnCommand = "yarn";
		const options = { encoding: "utf8" };
		if (isWindows()) {
			yarnCommand = "yarn.cmd";
			options.shell = true;
		}
		const handler = () => {};
		try {
			process.on("SIGPIPE", handler);
			const results = (0, child_process_1.spawnSync)(yarnCommand, [
				"global",
				"dir",
				"--json"
			], options);
			const stdout = results.stdout;
			if (!stdout) {
				if (tracer) {
					tracer(`'yarn global dir' didn't return a value.`);
					if (results.stderr) tracer(results.stderr);
				}
				return;
			}
			const lines = stdout.trim().split(/\r?\n/);
			for (const line of lines) try {
				const yarn = JSON.parse(line);
				if (yarn.type === "log") return path$1.join(yarn.data, "node_modules");
			} catch (e) {}
			return;
		} catch (err) {
			return;
		} finally {
			process.removeListener("SIGPIPE", handler);
		}
	}
	var FileSystem;
	(function(FileSystem) {
		let _isCaseSensitive = void 0;
		function isCaseSensitive() {
			if (_isCaseSensitive !== void 0) return _isCaseSensitive;
			if (process.platform === "win32") _isCaseSensitive = false;
			else _isCaseSensitive = !fs$3.existsSync(__filename.toUpperCase()) || !fs$3.existsSync(__filename.toLowerCase());
			return _isCaseSensitive;
		}
		FileSystem.isCaseSensitive = isCaseSensitive;
		function isParent(parent, child) {
			if (isCaseSensitive()) return path$1.normalize(child).indexOf(path$1.normalize(parent)) === 0;
			else return path$1.normalize(child).toLowerCase().indexOf(path$1.normalize(parent).toLowerCase()) === 0;
		}
		FileSystem.isParent = isParent;
	})(FileSystem || (exports.FileSystem = FileSystem = {}));
	function resolveModulePath(workspaceRoot, moduleName, nodePath, tracer) {
		if (nodePath) {
			if (!path$1.isAbsolute(nodePath)) nodePath = path$1.join(workspaceRoot, nodePath);
			return resolve(moduleName, nodePath, nodePath, tracer).then((value) => {
				if (FileSystem.isParent(nodePath, value)) return value;
				else return Promise.reject(/* @__PURE__ */ new Error(`Failed to load ${moduleName} from node path location.`));
			}).then(void 0, (_error) => {
				return resolve(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
			});
		} else return resolve(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
	}
}));
//#endregion
//#region servers/json/node_modules/vscode-jsonrpc/lib/node/ril.js
var require_ril = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	const util_1 = require("util");
	const api_1 = require_api$2();
	var MessageBuffer = class MessageBuffer extends api_1.AbstractMessageBuffer {
		static emptyBuffer = Buffer.allocUnsafe(0);
		constructor(encoding = "utf-8") {
			super(encoding);
		}
		emptyBuffer() {
			return MessageBuffer.emptyBuffer;
		}
		fromString(value, encoding) {
			return Buffer.from(value, encoding);
		}
		toString(value, encoding) {
			if (value instanceof Buffer) return value.toString(encoding);
			else return new util_1.TextDecoder(encoding).decode(value);
		}
		asNative(buffer, length) {
			if (length === void 0) return buffer instanceof Buffer ? buffer : Buffer.from(buffer);
			else return buffer instanceof Buffer ? buffer.slice(0, length) : Buffer.from(buffer, 0, length);
		}
		allocNative(length) {
			return Buffer.allocUnsafe(length);
		}
	};
	var ReadableStreamWrapper = class {
		stream;
		constructor(stream) {
			this.stream = stream;
		}
		onClose(listener) {
			this.stream.on("close", listener);
			return api_1.Disposable.create(() => this.stream.off("close", listener));
		}
		onError(listener) {
			this.stream.on("error", listener);
			return api_1.Disposable.create(() => this.stream.off("error", listener));
		}
		onEnd(listener) {
			this.stream.on("end", listener);
			return api_1.Disposable.create(() => this.stream.off("end", listener));
		}
		onData(listener) {
			this.stream.on("data", listener);
			return api_1.Disposable.create(() => this.stream.off("data", listener));
		}
	};
	var WritableStreamWrapper = class {
		stream;
		constructor(stream) {
			this.stream = stream;
		}
		onClose(listener) {
			this.stream.on("close", listener);
			return api_1.Disposable.create(() => this.stream.off("close", listener));
		}
		onError(listener) {
			this.stream.on("error", listener);
			return api_1.Disposable.create(() => this.stream.off("error", listener));
		}
		onEnd(listener) {
			this.stream.on("end", listener);
			return api_1.Disposable.create(() => this.stream.off("end", listener));
		}
		write(data, encoding) {
			return new Promise((resolve, reject) => {
				const callback = (error) => {
					if (error === void 0 || error === null) resolve();
					else reject(error);
				};
				if (typeof data === "string") this.stream.write(data, encoding, callback);
				else this.stream.write(data, callback);
			});
		}
		end() {
			this.stream.end();
		}
	};
	const _ril = Object.freeze({
		messageBuffer: Object.freeze({ create: (encoding) => new MessageBuffer(encoding) }),
		applicationJson: Object.freeze({
			encoder: Object.freeze({
				name: "application/json",
				encode: (msg, options) => {
					try {
						return Promise.resolve(Buffer.from(JSON.stringify(msg, void 0, 0), options.charset));
					} catch (err) {
						return Promise.reject(err);
					}
				}
			}),
			decoder: Object.freeze({
				name: "application/json",
				decode: (buffer, options) => {
					try {
						if (buffer instanceof Buffer) return Promise.resolve(JSON.parse(buffer.toString(options.charset)));
						else return Promise.resolve(JSON.parse(new util_1.TextDecoder(options.charset).decode(buffer)));
					} catch (err) {
						return Promise.reject(err);
					}
				}
			})
		}),
		stream: Object.freeze({
			asReadableStream: (stream) => new ReadableStreamWrapper(stream),
			asWritableStream: (stream) => new WritableStreamWrapper(stream)
		}),
		console,
		timer: Object.freeze({
			setTimeout(callback, ms, ...args) {
				const handle = setTimeout(callback, ms, ...args);
				return { dispose: () => clearTimeout(handle) };
			},
			setImmediate(callback, ...args) {
				const handle = setImmediate(callback, ...args);
				return { dispose: () => clearImmediate(handle) };
			},
			setInterval(callback, ms, ...args) {
				const handle = setInterval(callback, ms, ...args);
				return { dispose: () => clearInterval(handle) };
			}
		})
	});
	function RIL() {
		return _ril;
	}
	(function(RIL) {
		function install() {
			api_1.RAL.install(_ril);
		}
		RIL.install = install;
	})(RIL || (RIL = {}));
	exports.default = RIL;
}));
//#endregion
//#region servers/json/node_modules/vscode-jsonrpc/lib/node/main.js
var require_main$4 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || (function() {
		var ownKeys = function(o) {
			ownKeys = Object.getOwnPropertyNames || function(o) {
				var ar = [];
				for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
				return ar;
			};
			return ownKeys(o);
		};
		return function(mod) {
			if (mod && mod.__esModule) return mod;
			var result = {};
			if (mod != null) {
				for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
			}
			__setModuleDefault(result, mod);
			return result;
		};
	})();
	var __exportStar = exports && exports.__exportStar || function(m, exports$4) {
		for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports$4, p)) __createBinding(exports$4, m, p);
	};
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.StreamMessageWriter = exports.StreamMessageReader = exports.SocketMessageWriter = exports.SocketMessageReader = exports.PortMessageWriter = exports.PortMessageReader = exports.IPCMessageWriter = exports.IPCMessageReader = void 0;
	exports.generateRandomPipeName = generateRandomPipeName;
	exports.createClientPipeTransport = createClientPipeTransport;
	exports.createServerPipeTransport = createServerPipeTransport;
	exports.createClientSocketTransport = createClientSocketTransport;
	exports.createServerSocketTransport = createServerSocketTransport;
	exports.createMessageConnection = createMessageConnection;
	const ril_1 = __importDefault(require_ril());
	ril_1.default.install();
	const path = __importStar(require("path"));
	const os = __importStar(require("os"));
	const fs$2 = __importStar(require("fs"));
	const crypto_1 = require("crypto");
	const net_1 = require("net");
	const api_1 = require_api$2();
	__exportStar(require_api$2(), exports);
	var IPCMessageReader = class extends api_1.AbstractMessageReader {
		process;
		constructor(process) {
			super();
			this.process = process;
			const eventEmitter = this.process;
			eventEmitter.on("error", (error) => this.fireError(error));
			eventEmitter.on("close", () => this.fireClose());
		}
		listen(callback) {
			this.process.on("message", callback);
			return api_1.Disposable.create(() => this.process.off("message", callback));
		}
	};
	exports.IPCMessageReader = IPCMessageReader;
	var IPCMessageWriter = class extends api_1.AbstractMessageWriter {
		process;
		errorCount;
		constructor(process) {
			super();
			this.process = process;
			this.errorCount = 0;
			const eventEmitter = this.process;
			eventEmitter.on("error", (error) => this.fireError(error));
			eventEmitter.on("close", () => this.fireClose);
		}
		write(msg) {
			try {
				if (typeof this.process.send === "function") this.process.send(msg, void 0, void 0, (error) => {
					if (error) {
						this.errorCount++;
						this.handleError(error, msg);
					} else this.errorCount = 0;
				});
				return Promise.resolve();
			} catch (error) {
				this.handleError(error, msg);
				return Promise.reject(error);
			}
		}
		handleError(error, msg) {
			this.errorCount++;
			this.fireError(error, msg, this.errorCount);
		}
		end() {}
	};
	exports.IPCMessageWriter = IPCMessageWriter;
	var PortMessageReader = class extends api_1.AbstractMessageReader {
		onData;
		constructor(port) {
			super();
			this.onData = new api_1.Emitter();
			port.on("close", () => this.fireClose);
			port.on("error", (error) => this.fireError(error));
			port.on("message", (message) => {
				this.onData.fire(message);
			});
		}
		listen(callback) {
			return this.onData.event(callback);
		}
	};
	exports.PortMessageReader = PortMessageReader;
	var PortMessageWriter = class extends api_1.AbstractMessageWriter {
		port;
		errorCount;
		constructor(port) {
			super();
			this.port = port;
			this.errorCount = 0;
			port.on("close", () => this.fireClose());
			port.on("error", (error) => this.fireError(error));
		}
		write(msg) {
			try {
				this.port.postMessage(msg);
				return Promise.resolve();
			} catch (error) {
				this.handleError(error, msg);
				return Promise.reject(error);
			}
		}
		handleError(error, msg) {
			this.errorCount++;
			this.fireError(error, msg, this.errorCount);
		}
		end() {}
	};
	exports.PortMessageWriter = PortMessageWriter;
	var SocketMessageReader = class extends api_1.ReadableStreamMessageReader {
		constructor(socket, encoding = "utf-8") {
			super((0, ril_1.default)().stream.asReadableStream(socket), encoding);
		}
	};
	exports.SocketMessageReader = SocketMessageReader;
	var SocketMessageWriter = class extends api_1.WriteableStreamMessageWriter {
		socket;
		constructor(socket, options) {
			super((0, ril_1.default)().stream.asWritableStream(socket), options);
			this.socket = socket;
		}
		dispose() {
			super.dispose();
			this.socket.destroy();
		}
	};
	exports.SocketMessageWriter = SocketMessageWriter;
	var StreamMessageReader = class extends api_1.ReadableStreamMessageReader {
		constructor(readable, encoding) {
			super((0, ril_1.default)().stream.asReadableStream(readable), encoding);
		}
	};
	exports.StreamMessageReader = StreamMessageReader;
	var StreamMessageWriter = class extends api_1.WriteableStreamMessageWriter {
		constructor(writable, options) {
			super((0, ril_1.default)().stream.asWritableStream(writable), options);
		}
	};
	exports.StreamMessageWriter = StreamMessageWriter;
	const XDG_RUNTIME_DIR = process.env["XDG_RUNTIME_DIR"];
	const safeIpcPathLengths = /* @__PURE__ */ new Map([["linux", 107], ["darwin", 102]]);
	function generateRandomPipeName() {
		if (process.platform === "win32") return `\\\\.\\pipe\\lsp-${(0, crypto_1.randomBytes)(16).toString("hex")}-sock`;
		let randomLength = 32;
		const fixedLength = 10;
		const tmpDir = fs$2.realpathSync(XDG_RUNTIME_DIR ?? os.tmpdir());
		const limit = safeIpcPathLengths.get(process.platform);
		if (limit !== void 0) randomLength = Math.min(limit - tmpDir.length - fixedLength, randomLength);
		if (randomLength < 16) throw new Error(`Unable to generate a random pipe name with ${randomLength} characters.`);
		const randomSuffix = (0, crypto_1.randomBytes)(Math.floor(randomLength / 2)).toString("hex");
		return path.join(tmpDir, `lsp-${randomSuffix}.sock`);
	}
	function createClientPipeTransport(pipeName, encoding = "utf-8") {
		let connectResolve;
		const connected = new Promise((resolve, _reject) => {
			connectResolve = resolve;
		});
		return new Promise((resolve, reject) => {
			const server = (0, net_1.createServer)((socket) => {
				server.close();
				connectResolve([new SocketMessageReader(socket, encoding), new SocketMessageWriter(socket, encoding)]);
			});
			server.on("error", reject);
			server.listen(pipeName, () => {
				server.removeListener("error", reject);
				resolve({ onConnected: () => {
					return connected;
				} });
			});
		});
	}
	function createServerPipeTransport(pipeName, encoding = "utf-8") {
		const socket = (0, net_1.createConnection)(pipeName);
		return [new SocketMessageReader(socket, encoding), new SocketMessageWriter(socket, encoding)];
	}
	function createClientSocketTransport(port, encoding = "utf-8") {
		let connectResolve;
		const connected = new Promise((resolve, _reject) => {
			connectResolve = resolve;
		});
		return new Promise((resolve, reject) => {
			const server = (0, net_1.createServer)((socket) => {
				server.close();
				connectResolve([new SocketMessageReader(socket, encoding), new SocketMessageWriter(socket, encoding)]);
			});
			server.on("error", reject);
			server.listen(port, "127.0.0.1", () => {
				server.removeListener("error", reject);
				resolve({ onConnected: () => {
					return connected;
				} });
			});
		});
	}
	function createServerSocketTransport(port, encoding = "utf-8") {
		const socket = (0, net_1.createConnection)(port, "127.0.0.1");
		return [new SocketMessageReader(socket, encoding), new SocketMessageWriter(socket, encoding)];
	}
	function isReadableStream(value) {
		const candidate = value;
		return candidate.read !== void 0 && candidate.addListener !== void 0;
	}
	function isWritableStream(value) {
		const candidate = value;
		return candidate.write !== void 0 && candidate.addListener !== void 0;
	}
	function createMessageConnection(input, output, logger, options) {
		if (!logger) logger = api_1.NullLogger;
		const reader = isReadableStream(input) ? new StreamMessageReader(input) : input;
		const writer = isWritableStream(output) ? new StreamMessageWriter(output) : output;
		if (api_1.ConnectionStrategy.is(options)) options = { connectionStrategy: options };
		return (0, api_1.createMessageConnection)(reader, writer, logger, options);
	}
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver-protocol/lib/node/main.js
var require_main$3 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __exportStar = exports && exports.__exportStar || function(m, exports$3) {
		for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports$3, p)) __createBinding(exports$3, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createProtocolConnection = createProtocolConnection;
	const node_1 = require_main$4();
	__exportStar(require_main$4(), exports);
	__exportStar(require_api$1(), exports);
	function createProtocolConnection(input, output, logger, options) {
		return (0, node_1.createMessageConnection)(input, output, logger, options);
	}
}));
//#endregion
//#region servers/json/node_modules/vscode-languageserver/lib/common/api.js
var require_api = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __exportStar = exports && exports.__exportStar || function(m, exports$2) {
		for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports$2, p)) __createBinding(exports$2, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ProposedFeatures = exports.NotebookDocuments = exports.TextDocuments = exports.SemanticTokensBuilder = void 0;
	const semanticTokens_1 = require_semanticTokens();
	Object.defineProperty(exports, "SemanticTokensBuilder", {
		enumerable: true,
		get: function() {
			return semanticTokens_1.SemanticTokensBuilder;
		}
	});
	__exportStar(require_api$1(), exports);
	const textDocuments_1 = require_textDocuments();
	Object.defineProperty(exports, "TextDocuments", {
		enumerable: true,
		get: function() {
			return textDocuments_1.TextDocuments;
		}
	});
	const notebook_1 = require_notebook();
	Object.defineProperty(exports, "NotebookDocuments", {
		enumerable: true,
		get: function() {
			return notebook_1.NotebookDocuments;
		}
	});
	__exportStar(require_server(), exports);
	var ProposedFeatures;
	(function(ProposedFeatures) {
		ProposedFeatures.all = { __brand: "features" };
	})(ProposedFeatures || (exports.ProposedFeatures = ProposedFeatures = {}));
}));
//#endregion
//#region servers/json/utils/runner.ts
var import_main = (/* @__PURE__ */ __commonJSMin(((exports) => {
	var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	}));
	var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	});
	var __importStar = exports && exports.__importStar || (function() {
		var ownKeys = function(o) {
			ownKeys = Object.getOwnPropertyNames || function(o) {
				var ar = [];
				for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
				return ar;
			};
			return ownKeys(o);
		};
		return function(mod) {
			if (mod && mod.__esModule) return mod;
			var result = {};
			if (mod != null) {
				for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
			}
			__setModuleDefault(result, mod);
			return result;
		};
	})();
	var __exportStar = exports && exports.__exportStar || function(m, exports$1) {
		for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports$1, p)) __createBinding(exports$1, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Files = void 0;
	exports.createConnection = createConnection;
	const node_util_1 = require("node:util");
	const Is = __importStar(require_is$2());
	const server_1 = require_server();
	const fm = __importStar(require_files());
	const node_1 = require_main$3();
	__exportStar(require_main$3(), exports);
	__exportStar(require_api(), exports);
	var Files;
	(function(Files) {
		Files.uriToFilePath = fm.uriToFilePath;
		Files.resolveGlobalNodePath = fm.resolveGlobalNodePath;
		Files.resolveGlobalYarnPath = fm.resolveGlobalYarnPath;
		Files.resolve = fm.resolve;
		Files.resolveModulePath = fm.resolveModulePath;
	})(Files || (exports.Files = Files = {}));
	let _shutdownReceived = false;
	let exitTimer = void 0;
	function setupExitTimer() {
		const argName = "--clientProcessId";
		function runTimer(value) {
			try {
				const processId = parseInt(value);
				if (!isNaN(processId)) exitTimer = setInterval(() => {
					try {
						process.kill(processId, 0);
					} catch (ex) {
						process.exit(_shutdownReceived ? 0 : 1);
					}
				}, 3e3);
			} catch (e) {}
		}
		for (let i = 2; i < process.argv.length; i++) {
			const arg = process.argv[i];
			if (arg === argName && i + 1 < process.argv.length) {
				runTimer(process.argv[i + 1]);
				return;
			} else {
				const args = arg.split("=");
				if (args[0] === argName) runTimer(args[1]);
			}
		}
	}
	setupExitTimer();
	const watchDog = {
		initialize: (params) => {
			const processId = params.processId;
			if (Is.number(processId) && exitTimer === void 0) setInterval(() => {
				try {
					process.kill(processId, 0);
				} catch (ex) {
					process.exit(_shutdownReceived ? 0 : 1);
				}
			}, 3e3);
		},
		get shutdownReceived() {
			return _shutdownReceived;
		},
		set shutdownReceived(value) {
			_shutdownReceived = value;
		},
		exit: (code) => {
			process.exit(code);
		}
	};
	function createConnection(arg1, arg2, arg3, arg4) {
		let factories;
		let input;
		let output;
		let options;
		if (arg1 !== void 0 && arg1.__brand === "features") {
			factories = arg1;
			arg1 = arg2;
			arg2 = arg3;
			arg3 = arg4;
		}
		if (node_1.ConnectionStrategy.is(arg1) || node_1.ConnectionOptions.is(arg1)) options = arg1;
		else {
			input = arg1;
			output = arg2;
			options = arg3;
		}
		return _createConnection(input, output, options, factories);
	}
	function _createConnection(input, output, options, factories) {
		let stdio = false;
		if (!input && !output && process.argv.length > 2) {
			let port = void 0;
			let pipeName = void 0;
			const argv = process.argv.slice(2);
			for (let i = 0; i < argv.length; i++) {
				const arg = argv[i];
				if (arg === "--node-ipc") {
					input = new node_1.IPCMessageReader(process);
					output = new node_1.IPCMessageWriter(process);
					break;
				} else if (arg === "--stdio") {
					stdio = true;
					input = process.stdin;
					output = process.stdout;
					break;
				} else if (arg === "--socket") {
					port = parseInt(argv[i + 1]);
					break;
				} else if (arg === "--pipe") {
					pipeName = argv[i + 1];
					break;
				} else {
					const args = arg.split("=");
					if (args[0] === "--socket") {
						port = parseInt(args[1]);
						break;
					} else if (args[0] === "--pipe") {
						pipeName = args[1];
						break;
					}
				}
			}
			if (port) {
				const transport = (0, node_1.createServerSocketTransport)(port);
				input = transport[0];
				output = transport[1];
			} else if (pipeName) {
				const transport = (0, node_1.createServerPipeTransport)(pipeName);
				input = transport[0];
				output = transport[1];
			}
		}
		const commandLineMessage = "Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'";
		if (!input) throw new Error("Connection input stream is not set. " + commandLineMessage);
		if (!output) throw new Error("Connection output stream is not set. " + commandLineMessage);
		if (Is.func(input.read) && Is.func(input.on)) {
			const inputStream = input;
			inputStream.on("end", () => {
				process.exit(_shutdownReceived ? 0 : 1);
			});
			inputStream.on("close", () => {
				process.exit(_shutdownReceived ? 0 : 1);
			});
		}
		const connectionFactory = (logger) => {
			const result = (0, node_1.createProtocolConnection)(input, output, logger, options);
			if (stdio) patchConsole(logger);
			return result;
		};
		return (0, server_1.createConnection)(connectionFactory, watchDog, factories);
	}
	function patchConsole(logger) {
		function serialize(args) {
			return args.map((arg) => typeof arg === "string" ? arg : (0, node_util_1.inspect)(arg)).join(" ");
		}
		const counters = /* @__PURE__ */ new Map();
		console.assert = function assert(assertion, ...args) {
			if (assertion) return;
			if (args.length === 0) logger.error("Assertion failed");
			else {
				const [message, ...rest] = args;
				logger.error(`Assertion failed: ${message} ${serialize(rest)}`);
			}
		};
		console.count = function count(label = "default") {
			const message = String(label);
			let counter = counters.get(message) ?? 0;
			counter += 1;
			counters.set(message, counter);
			logger.log(`${message}: ${message}`);
		};
		console.countReset = function countReset(label) {
			if (label === void 0) counters.clear();
			else counters.delete(String(label));
		};
		console.debug = function debug(...args) {
			logger.log(serialize(args));
		};
		console.dir = function dir(arg, options) {
			logger.log((0, node_util_1.inspect)(arg, options));
		};
		console.log = function log(...args) {
			logger.log(serialize(args));
		};
		console.error = function error(...args) {
			logger.error(serialize(args));
		};
		console.trace = function trace(...args) {
			const stack = (/* @__PURE__ */ new Error()).stack.replace(/(.+\n){2}/, "");
			let message = "Trace";
			if (args.length !== 0) message += `: ${serialize(args)}`;
			logger.log(`${message}\n${stack}`);
		};
		console.warn = function warn(...args) {
			logger.warn(serialize(args));
		};
	}
})))();
var import_api = require_api();
function formatError(message, err) {
	if (err instanceof Error) {
		const error = err;
		return `${message}: ${error.message}\n${error.stack}`;
	} else if (typeof err === "string") return `${message}: ${err}`;
	else if (err) return `${message}: ${err.toString()}`;
	return message;
}
function runSafeAsync(runtime, func, errorVal, errorMessage, token) {
	return new Promise((resolve) => {
		runtime.timer.setImmediate(() => {
			if (token.isCancellationRequested) {
				resolve(cancelValue());
				return;
			}
			return func().then((result) => {
				if (token.isCancellationRequested) {
					resolve(cancelValue());
					return;
				} else resolve(result);
			}, (e) => {
				console.error(formatError(errorMessage, e));
				resolve(errorVal);
			});
		});
	});
}
function runSafe(runtime, func, errorVal, errorMessage, token) {
	return new Promise((resolve) => {
		runtime.timer.setImmediate(() => {
			if (token.isCancellationRequested) resolve(cancelValue());
			else try {
				const result = func();
				if (token.isCancellationRequested) {
					resolve(cancelValue());
					return;
				} else resolve(result);
			} catch (e) {
				console.error(formatError(errorMessage, e));
				resolve(errorVal);
			}
		});
	});
}
function cancelValue() {
	return new import_api.ResponseError(import_api.LSPErrorCodes.RequestCancelled, "Request cancelled");
}
//#endregion
//#region servers/json/utils/validation.ts
function registerDiagnosticsPushSupport(documents, connection, runtime, validate) {
	const pendingValidationRequests = {};
	const validationDelayMs = 500;
	const disposables = [];
	documents.onDidChangeContent((change) => {
		triggerValidation(change.document);
	}, void 0, disposables);
	documents.onDidClose((event) => {
		cleanPendingValidation(event.document);
		connection.sendDiagnostics({
			uri: event.document.uri,
			diagnostics: []
		});
	}, void 0, disposables);
	function cleanPendingValidation(textDocument) {
		const request = pendingValidationRequests[textDocument.uri];
		if (request) {
			request.dispose();
			delete pendingValidationRequests[textDocument.uri];
		}
	}
	function triggerValidation(textDocument) {
		cleanPendingValidation(textDocument);
		const request = pendingValidationRequests[textDocument.uri] = runtime.timer.setTimeout(async () => {
			if (request === pendingValidationRequests[textDocument.uri]) try {
				const diagnostics = await validate(textDocument);
				if (request === pendingValidationRequests[textDocument.uri]) connection.sendDiagnostics({
					uri: textDocument.uri,
					diagnostics
				});
				delete pendingValidationRequests[textDocument.uri];
			} catch (e) {
				connection.console.error(formatError(`Error while validating ${textDocument.uri}`, e));
			}
		}, validationDelayMs);
	}
	return {
		requestRefresh: () => {
			documents.all().forEach(triggerValidation);
		},
		dispose: () => {
			disposables.forEach((d) => d.dispose());
			disposables.length = 0;
			const keys = Object.keys(pendingValidationRequests);
			for (const key of keys) {
				pendingValidationRequests[key].dispose();
				delete pendingValidationRequests[key];
			}
		}
	};
}
function registerDiagnosticsPullSupport(documents, connection, runtime, validate) {
	function newDocumentDiagnosticReport(diagnostics) {
		return {
			kind: import_api.DocumentDiagnosticReportKind.Full,
			items: diagnostics
		};
	}
	const registration = connection.languages.diagnostics.on(async (params, token) => {
		return runSafeAsync(runtime, async () => {
			const document = documents.get(params.textDocument.uri);
			if (document) return newDocumentDiagnosticReport(await validate(document));
			return newDocumentDiagnosticReport([]);
		}, newDocumentDiagnosticReport([]), `Error while computing diagnostics for ${params.textDocument.uri}`, token);
	});
	function requestRefresh() {
		connection.languages.diagnostics.refresh();
	}
	return {
		requestRefresh,
		dispose: () => {
			registration.dispose();
		}
	};
}
//#endregion
//#region servers/json/node_modules/jsonc-parser/lib/esm/impl/scanner.js
/**
* Creates a JSON scanner on the given text.
* If ignoreTrivia is set, whitespaces or comments are ignored.
*/
function createScanner$1(text, ignoreTrivia = false) {
	const len = text.length;
	let pos = 0, value = "", tokenOffset = 0, token = 16, lineNumber = 0, lineStartOffset = 0, tokenLineStartOffset = 0, prevTokenLineStartOffset = 0, scanError = 0;
	function scanHexDigits(count, exact) {
		let digits = 0;
		let value = 0;
		while (digits < count || !exact) {
			let ch = text.charCodeAt(pos);
			if (ch >= 48 && ch <= 57) value = value * 16 + ch - 48;
			else if (ch >= 65 && ch <= 70) value = value * 16 + ch - 65 + 10;
			else if (ch >= 97 && ch <= 102) value = value * 16 + ch - 97 + 10;
			else break;
			pos++;
			digits++;
		}
		if (digits < count) value = -1;
		return value;
	}
	function setPosition(newPosition) {
		pos = newPosition;
		value = "";
		tokenOffset = 0;
		token = 16;
		scanError = 0;
	}
	function scanNumber() {
		let start = pos;
		if (text.charCodeAt(pos) === 48) pos++;
		else {
			pos++;
			while (pos < text.length && isDigit(text.charCodeAt(pos))) pos++;
		}
		if (pos < text.length && text.charCodeAt(pos) === 46) {
			pos++;
			if (pos < text.length && isDigit(text.charCodeAt(pos))) {
				pos++;
				while (pos < text.length && isDigit(text.charCodeAt(pos))) pos++;
			} else {
				scanError = 3;
				return text.substring(start, pos);
			}
		}
		let end = pos;
		if (pos < text.length && (text.charCodeAt(pos) === 69 || text.charCodeAt(pos) === 101)) {
			pos++;
			if (pos < text.length && text.charCodeAt(pos) === 43 || text.charCodeAt(pos) === 45) pos++;
			if (pos < text.length && isDigit(text.charCodeAt(pos))) {
				pos++;
				while (pos < text.length && isDigit(text.charCodeAt(pos))) pos++;
				end = pos;
			} else scanError = 3;
		}
		return text.substring(start, end);
	}
	function scanString() {
		let result = "", start = pos;
		while (true) {
			if (pos >= len) {
				result += text.substring(start, pos);
				scanError = 2;
				break;
			}
			const ch = text.charCodeAt(pos);
			if (ch === 34) {
				result += text.substring(start, pos);
				pos++;
				break;
			}
			if (ch === 92) {
				result += text.substring(start, pos);
				pos++;
				if (pos >= len) {
					scanError = 2;
					break;
				}
				switch (text.charCodeAt(pos++)) {
					case 34:
						result += "\"";
						break;
					case 92:
						result += "\\";
						break;
					case 47:
						result += "/";
						break;
					case 98:
						result += "\b";
						break;
					case 102:
						result += "\f";
						break;
					case 110:
						result += "\n";
						break;
					case 114:
						result += "\r";
						break;
					case 116:
						result += "	";
						break;
					case 117:
						{
							const ch3 = scanHexDigits(4, true);
							if (ch3 >= 0) result += String.fromCharCode(ch3);
							else scanError = 4;
						}
						break;
					default: scanError = 5;
				}
				start = pos;
				continue;
			}
			if (ch >= 0 && ch <= 31) {
				if (isLineBreak(ch)) {
					result += text.substring(start, pos);
					scanError = 2;
					break;
				} else scanError = 6;
			}
			pos++;
		}
		return result;
	}
	function scanNext() {
		value = "";
		scanError = 0;
		tokenOffset = pos;
		lineStartOffset = lineNumber;
		prevTokenLineStartOffset = tokenLineStartOffset;
		if (pos >= len) {
			tokenOffset = len;
			return token = 17;
		}
		let code = text.charCodeAt(pos);
		if (isWhiteSpace(code)) {
			do {
				pos++;
				value += String.fromCharCode(code);
				code = text.charCodeAt(pos);
			} while (isWhiteSpace(code));
			return token = 15;
		}
		if (isLineBreak(code)) {
			pos++;
			value += String.fromCharCode(code);
			if (code === 13 && text.charCodeAt(pos) === 10) {
				pos++;
				value += "\n";
			}
			lineNumber++;
			tokenLineStartOffset = pos;
			return token = 14;
		}
		switch (code) {
			case 123:
				pos++;
				return token = 1;
			case 125:
				pos++;
				return token = 2;
			case 91:
				pos++;
				return token = 3;
			case 93:
				pos++;
				return token = 4;
			case 58:
				pos++;
				return token = 6;
			case 44:
				pos++;
				return token = 5;
			case 34:
				pos++;
				value = scanString();
				return token = 10;
			case 47: {
				const start = pos - 1;
				if (text.charCodeAt(pos + 1) === 47) {
					pos += 2;
					while (pos < len) {
						if (isLineBreak(text.charCodeAt(pos))) break;
						pos++;
					}
					value = text.substring(start, pos);
					return token = 12;
				}
				if (text.charCodeAt(pos + 1) === 42) {
					pos += 2;
					const safeLength = len - 1;
					let commentClosed = false;
					while (pos < safeLength) {
						const ch = text.charCodeAt(pos);
						if (ch === 42 && text.charCodeAt(pos + 1) === 47) {
							pos += 2;
							commentClosed = true;
							break;
						}
						pos++;
						if (isLineBreak(ch)) {
							if (ch === 13 && text.charCodeAt(pos) === 10) pos++;
							lineNumber++;
							tokenLineStartOffset = pos;
						}
					}
					if (!commentClosed) {
						pos++;
						scanError = 1;
					}
					value = text.substring(start, pos);
					return token = 13;
				}
				value += String.fromCharCode(code);
				pos++;
				return token = 16;
			}
			case 45:
				value += String.fromCharCode(code);
				pos++;
				if (pos === len || !isDigit(text.charCodeAt(pos))) return token = 16;
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
				value += scanNumber();
				return token = 11;
			default:
				while (pos < len && isUnknownContentCharacter(code)) {
					pos++;
					code = text.charCodeAt(pos);
				}
				if (tokenOffset !== pos) {
					value = text.substring(tokenOffset, pos);
					switch (value) {
						case "true": return token = 8;
						case "false": return token = 9;
						case "null": return token = 7;
					}
					return token = 16;
				}
				value += String.fromCharCode(code);
				pos++;
				return token = 16;
		}
	}
	function isUnknownContentCharacter(code) {
		if (isWhiteSpace(code) || isLineBreak(code)) return false;
		switch (code) {
			case 125:
			case 93:
			case 123:
			case 91:
			case 34:
			case 58:
			case 44:
			case 47: return false;
		}
		return true;
	}
	function scanNextNonTrivia() {
		let result;
		do
			result = scanNext();
		while (result >= 12 && result <= 15);
		return result;
	}
	return {
		setPosition,
		getPosition: () => pos,
		scan: ignoreTrivia ? scanNextNonTrivia : scanNext,
		getToken: () => token,
		getTokenValue: () => value,
		getTokenOffset: () => tokenOffset,
		getTokenLength: () => pos - tokenOffset,
		getTokenStartLine: () => lineStartOffset,
		getTokenStartCharacter: () => tokenOffset - prevTokenLineStartOffset,
		getTokenError: () => scanError
	};
}
function isWhiteSpace(ch) {
	return ch === 32 || ch === 9;
}
function isLineBreak(ch) {
	return ch === 10 || ch === 13;
}
function isDigit(ch) {
	return ch >= 48 && ch <= 57;
}
var CharacterCodes;
(function(CharacterCodes) {
	CharacterCodes[CharacterCodes["lineFeed"] = 10] = "lineFeed";
	CharacterCodes[CharacterCodes["carriageReturn"] = 13] = "carriageReturn";
	CharacterCodes[CharacterCodes["space"] = 32] = "space";
	CharacterCodes[CharacterCodes["_0"] = 48] = "_0";
	CharacterCodes[CharacterCodes["_1"] = 49] = "_1";
	CharacterCodes[CharacterCodes["_2"] = 50] = "_2";
	CharacterCodes[CharacterCodes["_3"] = 51] = "_3";
	CharacterCodes[CharacterCodes["_4"] = 52] = "_4";
	CharacterCodes[CharacterCodes["_5"] = 53] = "_5";
	CharacterCodes[CharacterCodes["_6"] = 54] = "_6";
	CharacterCodes[CharacterCodes["_7"] = 55] = "_7";
	CharacterCodes[CharacterCodes["_8"] = 56] = "_8";
	CharacterCodes[CharacterCodes["_9"] = 57] = "_9";
	CharacterCodes[CharacterCodes["a"] = 97] = "a";
	CharacterCodes[CharacterCodes["b"] = 98] = "b";
	CharacterCodes[CharacterCodes["c"] = 99] = "c";
	CharacterCodes[CharacterCodes["d"] = 100] = "d";
	CharacterCodes[CharacterCodes["e"] = 101] = "e";
	CharacterCodes[CharacterCodes["f"] = 102] = "f";
	CharacterCodes[CharacterCodes["g"] = 103] = "g";
	CharacterCodes[CharacterCodes["h"] = 104] = "h";
	CharacterCodes[CharacterCodes["i"] = 105] = "i";
	CharacterCodes[CharacterCodes["j"] = 106] = "j";
	CharacterCodes[CharacterCodes["k"] = 107] = "k";
	CharacterCodes[CharacterCodes["l"] = 108] = "l";
	CharacterCodes[CharacterCodes["m"] = 109] = "m";
	CharacterCodes[CharacterCodes["n"] = 110] = "n";
	CharacterCodes[CharacterCodes["o"] = 111] = "o";
	CharacterCodes[CharacterCodes["p"] = 112] = "p";
	CharacterCodes[CharacterCodes["q"] = 113] = "q";
	CharacterCodes[CharacterCodes["r"] = 114] = "r";
	CharacterCodes[CharacterCodes["s"] = 115] = "s";
	CharacterCodes[CharacterCodes["t"] = 116] = "t";
	CharacterCodes[CharacterCodes["u"] = 117] = "u";
	CharacterCodes[CharacterCodes["v"] = 118] = "v";
	CharacterCodes[CharacterCodes["w"] = 119] = "w";
	CharacterCodes[CharacterCodes["x"] = 120] = "x";
	CharacterCodes[CharacterCodes["y"] = 121] = "y";
	CharacterCodes[CharacterCodes["z"] = 122] = "z";
	CharacterCodes[CharacterCodes["A"] = 65] = "A";
	CharacterCodes[CharacterCodes["B"] = 66] = "B";
	CharacterCodes[CharacterCodes["C"] = 67] = "C";
	CharacterCodes[CharacterCodes["D"] = 68] = "D";
	CharacterCodes[CharacterCodes["E"] = 69] = "E";
	CharacterCodes[CharacterCodes["F"] = 70] = "F";
	CharacterCodes[CharacterCodes["G"] = 71] = "G";
	CharacterCodes[CharacterCodes["H"] = 72] = "H";
	CharacterCodes[CharacterCodes["I"] = 73] = "I";
	CharacterCodes[CharacterCodes["J"] = 74] = "J";
	CharacterCodes[CharacterCodes["K"] = 75] = "K";
	CharacterCodes[CharacterCodes["L"] = 76] = "L";
	CharacterCodes[CharacterCodes["M"] = 77] = "M";
	CharacterCodes[CharacterCodes["N"] = 78] = "N";
	CharacterCodes[CharacterCodes["O"] = 79] = "O";
	CharacterCodes[CharacterCodes["P"] = 80] = "P";
	CharacterCodes[CharacterCodes["Q"] = 81] = "Q";
	CharacterCodes[CharacterCodes["R"] = 82] = "R";
	CharacterCodes[CharacterCodes["S"] = 83] = "S";
	CharacterCodes[CharacterCodes["T"] = 84] = "T";
	CharacterCodes[CharacterCodes["U"] = 85] = "U";
	CharacterCodes[CharacterCodes["V"] = 86] = "V";
	CharacterCodes[CharacterCodes["W"] = 87] = "W";
	CharacterCodes[CharacterCodes["X"] = 88] = "X";
	CharacterCodes[CharacterCodes["Y"] = 89] = "Y";
	CharacterCodes[CharacterCodes["Z"] = 90] = "Z";
	CharacterCodes[CharacterCodes["asterisk"] = 42] = "asterisk";
	CharacterCodes[CharacterCodes["backslash"] = 92] = "backslash";
	CharacterCodes[CharacterCodes["closeBrace"] = 125] = "closeBrace";
	CharacterCodes[CharacterCodes["closeBracket"] = 93] = "closeBracket";
	CharacterCodes[CharacterCodes["colon"] = 58] = "colon";
	CharacterCodes[CharacterCodes["comma"] = 44] = "comma";
	CharacterCodes[CharacterCodes["dot"] = 46] = "dot";
	CharacterCodes[CharacterCodes["doubleQuote"] = 34] = "doubleQuote";
	CharacterCodes[CharacterCodes["minus"] = 45] = "minus";
	CharacterCodes[CharacterCodes["openBrace"] = 123] = "openBrace";
	CharacterCodes[CharacterCodes["openBracket"] = 91] = "openBracket";
	CharacterCodes[CharacterCodes["plus"] = 43] = "plus";
	CharacterCodes[CharacterCodes["slash"] = 47] = "slash";
	CharacterCodes[CharacterCodes["formFeed"] = 12] = "formFeed";
	CharacterCodes[CharacterCodes["tab"] = 9] = "tab";
})(CharacterCodes || (CharacterCodes = {}));
//#endregion
//#region servers/json/node_modules/jsonc-parser/lib/esm/impl/string-intern.js
const cachedSpaces = new Array(20).fill(0).map((_, index) => {
	return " ".repeat(index);
});
const maxCachedValues = 200;
const cachedBreakLinesWithSpaces = {
	" ": {
		"\n": new Array(maxCachedValues).fill(0).map((_, index) => {
			return "\n" + " ".repeat(index);
		}),
		"\r": new Array(maxCachedValues).fill(0).map((_, index) => {
			return "\r" + " ".repeat(index);
		}),
		"\r\n": new Array(maxCachedValues).fill(0).map((_, index) => {
			return "\r\n" + " ".repeat(index);
		})
	},
	"	": {
		"\n": new Array(maxCachedValues).fill(0).map((_, index) => {
			return "\n" + "	".repeat(index);
		}),
		"\r": new Array(maxCachedValues).fill(0).map((_, index) => {
			return "\r" + "	".repeat(index);
		}),
		"\r\n": new Array(maxCachedValues).fill(0).map((_, index) => {
			return "\r\n" + "	".repeat(index);
		})
	}
};
const supportedEols = [
	"\n",
	"\r",
	"\r\n"
];
//#endregion
//#region servers/json/node_modules/jsonc-parser/lib/esm/impl/format.js
function format$2(documentText, range, options) {
	let initialIndentLevel;
	let formatText;
	let formatTextStart;
	let rangeStart;
	let rangeEnd;
	if (range) {
		rangeStart = range.offset;
		rangeEnd = rangeStart + range.length;
		formatTextStart = rangeStart;
		while (formatTextStart > 0 && !isEOL$1(documentText, formatTextStart - 1)) formatTextStart--;
		let endOffset = rangeEnd;
		while (endOffset < documentText.length && !isEOL$1(documentText, endOffset)) endOffset++;
		formatText = documentText.substring(formatTextStart, endOffset);
		initialIndentLevel = computeIndentLevel(formatText, options);
	} else {
		formatText = documentText;
		initialIndentLevel = 0;
		formatTextStart = 0;
		rangeStart = 0;
		rangeEnd = documentText.length;
	}
	const eol = getEOL(options, documentText);
	const eolFastPathSupported = supportedEols.includes(eol);
	let numberLineBreaks = 0;
	let indentLevel = 0;
	let indentValue;
	if (options.insertSpaces) indentValue = cachedSpaces[options.tabSize || 4] ?? repeat(cachedSpaces[1], options.tabSize || 4);
	else indentValue = "	";
	const indentType = indentValue === "	" ? "	" : " ";
	let scanner = createScanner$1(formatText, false);
	let hasError = false;
	function newLinesAndIndent() {
		if (numberLineBreaks > 1) return repeat(eol, numberLineBreaks) + repeat(indentValue, initialIndentLevel + indentLevel);
		const amountOfSpaces = indentValue.length * (initialIndentLevel + indentLevel);
		if (!eolFastPathSupported || amountOfSpaces > cachedBreakLinesWithSpaces[indentType][eol].length) return eol + repeat(indentValue, initialIndentLevel + indentLevel);
		if (amountOfSpaces <= 0) return eol;
		return cachedBreakLinesWithSpaces[indentType][eol][amountOfSpaces];
	}
	function scanNext() {
		let token = scanner.scan();
		numberLineBreaks = 0;
		while (token === 15 || token === 14) {
			if (token === 14 && options.keepLines) numberLineBreaks += 1;
			else if (token === 14) numberLineBreaks = 1;
			token = scanner.scan();
		}
		hasError = token === 16 || scanner.getTokenError() !== 0;
		return token;
	}
	const editOperations = [];
	function addEdit(text, startOffset, endOffset) {
		if (!hasError && (!range || startOffset < rangeEnd && endOffset > rangeStart) && documentText.substring(startOffset, endOffset) !== text) editOperations.push({
			offset: startOffset,
			length: endOffset - startOffset,
			content: text
		});
	}
	let firstToken = scanNext();
	if (options.keepLines && numberLineBreaks > 0) addEdit(repeat(eol, numberLineBreaks), 0, 0);
	if (firstToken !== 17) {
		let firstTokenStart = scanner.getTokenOffset() + formatTextStart;
		addEdit(indentValue.length * initialIndentLevel < 20 && options.insertSpaces ? cachedSpaces[indentValue.length * initialIndentLevel] : repeat(indentValue, initialIndentLevel), formatTextStart, firstTokenStart);
	}
	while (firstToken !== 17) {
		let firstTokenEnd = scanner.getTokenOffset() + scanner.getTokenLength() + formatTextStart;
		let secondToken = scanNext();
		let replaceContent = "";
		let needsLineBreak = false;
		while (numberLineBreaks === 0 && (secondToken === 12 || secondToken === 13)) {
			let commentTokenStart = scanner.getTokenOffset() + formatTextStart;
			addEdit(cachedSpaces[1], firstTokenEnd, commentTokenStart);
			firstTokenEnd = scanner.getTokenOffset() + scanner.getTokenLength() + formatTextStart;
			needsLineBreak = secondToken === 12;
			replaceContent = needsLineBreak ? newLinesAndIndent() : "";
			secondToken = scanNext();
		}
		if (secondToken === 2) {
			if (firstToken !== 1) indentLevel--;
			if (options.keepLines && numberLineBreaks > 0 || !options.keepLines && firstToken !== 1) replaceContent = newLinesAndIndent();
			else if (options.keepLines) replaceContent = cachedSpaces[1];
		} else if (secondToken === 4) {
			if (firstToken !== 3) indentLevel--;
			if (options.keepLines && numberLineBreaks > 0 || !options.keepLines && firstToken !== 3) replaceContent = newLinesAndIndent();
			else if (options.keepLines) replaceContent = cachedSpaces[1];
		} else {
			switch (firstToken) {
				case 3:
				case 1:
					indentLevel++;
					if (options.keepLines && numberLineBreaks > 0 || !options.keepLines) replaceContent = newLinesAndIndent();
					else replaceContent = cachedSpaces[1];
					break;
				case 5:
					if (options.keepLines && numberLineBreaks > 0 || !options.keepLines) replaceContent = newLinesAndIndent();
					else replaceContent = cachedSpaces[1];
					break;
				case 12:
					replaceContent = newLinesAndIndent();
					break;
				case 13:
					if (numberLineBreaks > 0) replaceContent = newLinesAndIndent();
					else if (!needsLineBreak) replaceContent = cachedSpaces[1];
					break;
				case 6:
					if (options.keepLines && numberLineBreaks > 0) replaceContent = newLinesAndIndent();
					else if (!needsLineBreak) replaceContent = cachedSpaces[1];
					break;
				case 10:
					if (options.keepLines && numberLineBreaks > 0) replaceContent = newLinesAndIndent();
					else if (secondToken === 6 && !needsLineBreak) replaceContent = "";
					break;
				case 7:
				case 8:
				case 9:
				case 11:
				case 2:
				case 4:
					if (options.keepLines && numberLineBreaks > 0) replaceContent = newLinesAndIndent();
					else if ((secondToken === 12 || secondToken === 13) && !needsLineBreak) replaceContent = cachedSpaces[1];
					else if (secondToken !== 5 && secondToken !== 17) hasError = true;
					break;
				case 16: hasError = true;
			}
			if (numberLineBreaks > 0 && (secondToken === 12 || secondToken === 13)) replaceContent = newLinesAndIndent();
		}
		if (secondToken === 17) {
			if (options.keepLines && numberLineBreaks > 0) replaceContent = newLinesAndIndent();
			else replaceContent = options.insertFinalNewline ? eol : "";
		}
		const secondTokenStart = scanner.getTokenOffset() + formatTextStart;
		addEdit(replaceContent, firstTokenEnd, secondTokenStart);
		firstToken = secondToken;
	}
	return editOperations;
}
function repeat(s, count) {
	let result = "";
	for (let i = 0; i < count; i++) result += s;
	return result;
}
function computeIndentLevel(content, options) {
	let i = 0;
	let nChars = 0;
	const tabSize = options.tabSize || 4;
	while (i < content.length) {
		let ch = content.charAt(i);
		if (ch === cachedSpaces[1]) nChars++;
		else if (ch === "	") nChars += tabSize;
		else break;
		i++;
	}
	return Math.floor(nChars / tabSize);
}
function getEOL(options, text) {
	for (let i = 0; i < text.length; i++) {
		const ch = text.charAt(i);
		if (ch === "\r") {
			if (i + 1 < text.length && text.charAt(i + 1) === "\n") return "\r\n";
			return "\r";
		} else if (ch === "\n") return "\n";
	}
	return options && options.eol || "\n";
}
function isEOL$1(text, offset) {
	return "\r\n".indexOf(text.charAt(offset)) !== -1;
}
//#endregion
//#region servers/json/node_modules/jsonc-parser/lib/esm/impl/parser.js
var ParseOptionsConfigs;
(function(ParseOptionsConfigs) {
	ParseOptionsConfigs.DEFAULT = { allowTrailingComma: false };
})(ParseOptionsConfigs || (ParseOptionsConfigs = {}));
/**
* Parses the given text and returns the object the JSON content represents. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
* Therefore always check the errors list to find out if the input was valid.
*/
function parse$2(text, errors = [], options = ParseOptionsConfigs.DEFAULT) {
	let currentProperty = null;
	let currentParent = [];
	const previousParents = [];
	function onValue(value) {
		if (Array.isArray(currentParent)) currentParent.push(value);
		else if (currentProperty !== null) currentParent[currentProperty] = value;
	}
	visit(text, {
		onObjectBegin: () => {
			const object = {};
			onValue(object);
			previousParents.push(currentParent);
			currentParent = object;
			currentProperty = null;
		},
		onObjectProperty: (name) => {
			currentProperty = name;
		},
		onObjectEnd: () => {
			currentParent = previousParents.pop();
		},
		onArrayBegin: () => {
			const array = [];
			onValue(array);
			previousParents.push(currentParent);
			currentParent = array;
			currentProperty = null;
		},
		onArrayEnd: () => {
			currentParent = previousParents.pop();
		},
		onLiteralValue: onValue,
		onError: (error, offset, length, startLine, startCharacter) => {
			errors.push({
				error,
				offset,
				length,
				startLine,
				startCharacter
			});
		}
	}, options);
	return currentParent[0];
}
/**
* Gets the JSON path of the given JSON DOM node
*/
function getNodePath$2(node) {
	if (!node.parent || !node.parent.children) return [];
	const path = getNodePath$2(node.parent);
	if (node.parent.type === "property") {
		const key = node.parent.children[0].value;
		path.push(key);
	} else if (node.parent.type === "array") {
		const index = node.parent.children.indexOf(node);
		if (index !== -1) path.push(index);
	}
	return path;
}
/**
* Evaluates the JavaScript object of the given JSON DOM node
*/
function getNodeValue$2(node) {
	switch (node.type) {
		case "array": return node.children.map(getNodeValue$2);
		case "object": {
			const obj = Object.create(null);
			for (let prop of node.children) {
				const valueNode = prop.children[1];
				if (valueNode) obj[prop.children[0].value] = getNodeValue$2(valueNode);
			}
			return obj;
		}
		case "null":
		case "string":
		case "number":
		case "boolean": return node.value;
		default: return;
	}
}
function contains$1(node, offset, includeRightBound = false) {
	return offset >= node.offset && offset < node.offset + node.length || includeRightBound && offset === node.offset + node.length;
}
/**
* Finds the most inner node at the given offset. If includeRightBound is set, also finds nodes that end at the given offset.
*/
function findNodeAtOffset$1(node, offset, includeRightBound = false) {
	if (contains$1(node, offset, includeRightBound)) {
		const children = node.children;
		if (Array.isArray(children)) for (let i = 0; i < children.length && children[i].offset <= offset; i++) {
			const item = findNodeAtOffset$1(children[i], offset, includeRightBound);
			if (item) return item;
		}
		return node;
	}
}
/**
* Parses the given text and invokes the visitor functions for each object, array and literal reached.
*/
function visit(text, visitor, options = ParseOptionsConfigs.DEFAULT) {
	const _scanner = createScanner$1(text, false);
	const _jsonPath = [];
	let suppressedCallbacks = 0;
	function toNoArgVisit(visitFunction) {
		return visitFunction ? () => suppressedCallbacks === 0 && visitFunction(_scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter()) : () => true;
	}
	function toOneArgVisit(visitFunction) {
		return visitFunction ? (arg) => suppressedCallbacks === 0 && visitFunction(arg, _scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter()) : () => true;
	}
	function toOneArgVisitWithPath(visitFunction) {
		return visitFunction ? (arg) => suppressedCallbacks === 0 && visitFunction(arg, _scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter(), () => _jsonPath.slice()) : () => true;
	}
	function toBeginVisit(visitFunction) {
		return visitFunction ? () => {
			if (suppressedCallbacks > 0) suppressedCallbacks++;
			else if (visitFunction(_scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter(), () => _jsonPath.slice()) === false) suppressedCallbacks = 1;
		} : () => true;
	}
	function toEndVisit(visitFunction) {
		return visitFunction ? () => {
			if (suppressedCallbacks > 0) suppressedCallbacks--;
			if (suppressedCallbacks === 0) visitFunction(_scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter());
		} : () => true;
	}
	const onObjectBegin = toBeginVisit(visitor.onObjectBegin), onObjectProperty = toOneArgVisitWithPath(visitor.onObjectProperty), onObjectEnd = toEndVisit(visitor.onObjectEnd), onArrayBegin = toBeginVisit(visitor.onArrayBegin), onArrayEnd = toEndVisit(visitor.onArrayEnd), onLiteralValue = toOneArgVisitWithPath(visitor.onLiteralValue), onSeparator = toOneArgVisit(visitor.onSeparator), onComment = toNoArgVisit(visitor.onComment), onError = toOneArgVisit(visitor.onError);
	const disallowComments = options && options.disallowComments;
	const allowTrailingComma = options && options.allowTrailingComma;
	function scanNext() {
		while (true) {
			const token = _scanner.scan();
			switch (_scanner.getTokenError()) {
				case 4:
					handleError(14);
					break;
				case 5:
					handleError(15);
					break;
				case 3:
					handleError(13);
					break;
				case 1:
					if (!disallowComments) handleError(11);
					break;
				case 2:
					handleError(12);
					break;
				case 6: handleError(16);
			}
			switch (token) {
				case 12:
				case 13:
					if (disallowComments) handleError(10);
					else onComment();
					break;
				case 16:
					handleError(1);
					break;
				case 15:
				case 14: break;
				default: return token;
			}
		}
	}
	function handleError(error, skipUntilAfter = [], skipUntil = []) {
		onError(error);
		if (skipUntilAfter.length + skipUntil.length > 0) {
			let token = _scanner.getToken();
			while (token !== 17) {
				if (skipUntilAfter.indexOf(token) !== -1) {
					scanNext();
					break;
				} else if (skipUntil.indexOf(token) !== -1) break;
				token = scanNext();
			}
		}
	}
	function parseString(isValue) {
		const value = _scanner.getTokenValue();
		if (isValue) onLiteralValue(value);
		else {
			onObjectProperty(value);
			_jsonPath.push(value);
		}
		scanNext();
		return true;
	}
	function parseLiteral() {
		switch (_scanner.getToken()) {
			case 11:
				{
					const tokenValue = _scanner.getTokenValue();
					let value = Number(tokenValue);
					if (isNaN(value)) {
						handleError(2);
						value = 0;
					}
					onLiteralValue(value);
				}
				break;
			case 7:
				onLiteralValue(null);
				break;
			case 8:
				onLiteralValue(true);
				break;
			case 9:
				onLiteralValue(false);
				break;
			default: return false;
		}
		scanNext();
		return true;
	}
	function parseProperty() {
		if (_scanner.getToken() !== 10) {
			handleError(3, [], [2, 5]);
			return false;
		}
		parseString(false);
		if (_scanner.getToken() === 6) {
			onSeparator(":");
			scanNext();
			if (!parseValue()) handleError(4, [], [2, 5]);
		} else handleError(5, [], [2, 5]);
		_jsonPath.pop();
		return true;
	}
	function parseObject() {
		onObjectBegin();
		scanNext();
		let needsComma = false;
		while (_scanner.getToken() !== 2 && _scanner.getToken() !== 17) {
			if (_scanner.getToken() === 5) {
				if (!needsComma) handleError(4, [], []);
				onSeparator(",");
				scanNext();
				if (_scanner.getToken() === 2 && allowTrailingComma) break;
			} else if (needsComma) handleError(6, [], []);
			if (!parseProperty()) handleError(4, [], [2, 5]);
			needsComma = true;
		}
		onObjectEnd();
		if (_scanner.getToken() !== 2) handleError(7, [2], []);
		else scanNext();
		return true;
	}
	function parseArray() {
		onArrayBegin();
		scanNext();
		let isFirstElement = true;
		let needsComma = false;
		while (_scanner.getToken() !== 4 && _scanner.getToken() !== 17) {
			if (_scanner.getToken() === 5) {
				if (!needsComma) handleError(4, [], []);
				onSeparator(",");
				scanNext();
				if (_scanner.getToken() === 4 && allowTrailingComma) break;
			} else if (needsComma) handleError(6, [], []);
			if (isFirstElement) {
				_jsonPath.push(0);
				isFirstElement = false;
			} else _jsonPath[_jsonPath.length - 1]++;
			if (!parseValue()) handleError(4, [], [4, 5]);
			needsComma = true;
		}
		onArrayEnd();
		if (!isFirstElement) _jsonPath.pop();
		if (_scanner.getToken() !== 4) handleError(8, [4], []);
		else scanNext();
		return true;
	}
	function parseValue() {
		switch (_scanner.getToken()) {
			case 3: return parseArray();
			case 1: return parseObject();
			case 10: return parseString(true);
			default: return parseLiteral();
		}
	}
	scanNext();
	if (_scanner.getToken() === 17) {
		if (options.allowEmptyContent) return true;
		handleError(4, [], []);
		return false;
	}
	if (!parseValue()) {
		handleError(4, [], []);
		return false;
	}
	if (_scanner.getToken() !== 17) handleError(9, [], []);
	return true;
}
//#endregion
//#region servers/json/node_modules/jsonc-parser/lib/esm/main.js
/**
* Creates a JSON scanner on the given text.
* If ignoreTrivia is set, whitespaces or comments are ignored.
*/
const createScanner = createScanner$1;
var ScanError;
(function(ScanError) {
	ScanError[ScanError["None"] = 0] = "None";
	ScanError[ScanError["UnexpectedEndOfComment"] = 1] = "UnexpectedEndOfComment";
	ScanError[ScanError["UnexpectedEndOfString"] = 2] = "UnexpectedEndOfString";
	ScanError[ScanError["UnexpectedEndOfNumber"] = 3] = "UnexpectedEndOfNumber";
	ScanError[ScanError["InvalidUnicode"] = 4] = "InvalidUnicode";
	ScanError[ScanError["InvalidEscapeCharacter"] = 5] = "InvalidEscapeCharacter";
	ScanError[ScanError["InvalidCharacter"] = 6] = "InvalidCharacter";
})(ScanError || (ScanError = {}));
var SyntaxKind;
(function(SyntaxKind) {
	SyntaxKind[SyntaxKind["OpenBraceToken"] = 1] = "OpenBraceToken";
	SyntaxKind[SyntaxKind["CloseBraceToken"] = 2] = "CloseBraceToken";
	SyntaxKind[SyntaxKind["OpenBracketToken"] = 3] = "OpenBracketToken";
	SyntaxKind[SyntaxKind["CloseBracketToken"] = 4] = "CloseBracketToken";
	SyntaxKind[SyntaxKind["CommaToken"] = 5] = "CommaToken";
	SyntaxKind[SyntaxKind["ColonToken"] = 6] = "ColonToken";
	SyntaxKind[SyntaxKind["NullKeyword"] = 7] = "NullKeyword";
	SyntaxKind[SyntaxKind["TrueKeyword"] = 8] = "TrueKeyword";
	SyntaxKind[SyntaxKind["FalseKeyword"] = 9] = "FalseKeyword";
	SyntaxKind[SyntaxKind["StringLiteral"] = 10] = "StringLiteral";
	SyntaxKind[SyntaxKind["NumericLiteral"] = 11] = "NumericLiteral";
	SyntaxKind[SyntaxKind["LineCommentTrivia"] = 12] = "LineCommentTrivia";
	SyntaxKind[SyntaxKind["BlockCommentTrivia"] = 13] = "BlockCommentTrivia";
	SyntaxKind[SyntaxKind["LineBreakTrivia"] = 14] = "LineBreakTrivia";
	SyntaxKind[SyntaxKind["Trivia"] = 15] = "Trivia";
	SyntaxKind[SyntaxKind["Unknown"] = 16] = "Unknown";
	SyntaxKind[SyntaxKind["EOF"] = 17] = "EOF";
})(SyntaxKind || (SyntaxKind = {}));
/**
* Parses the given text and returns the object the JSON content represents. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
* Therefore, always check the errors list to find out if the input was valid.
*/
const parse$1 = parse$2;
/**
* Finds the innermost node at the given offset. If includeRightBound is set, also finds nodes that end at the given offset.
*/
const findNodeAtOffset = findNodeAtOffset$1;
/**
* Gets the JSON path of the given JSON DOM node
*/
const getNodePath$1 = getNodePath$2;
/**
* Evaluates the JavaScript object of the given JSON DOM node
*/
const getNodeValue$1 = getNodeValue$2;
var ParseErrorCode;
(function(ParseErrorCode) {
	ParseErrorCode[ParseErrorCode["InvalidSymbol"] = 1] = "InvalidSymbol";
	ParseErrorCode[ParseErrorCode["InvalidNumberFormat"] = 2] = "InvalidNumberFormat";
	ParseErrorCode[ParseErrorCode["PropertyNameExpected"] = 3] = "PropertyNameExpected";
	ParseErrorCode[ParseErrorCode["ValueExpected"] = 4] = "ValueExpected";
	ParseErrorCode[ParseErrorCode["ColonExpected"] = 5] = "ColonExpected";
	ParseErrorCode[ParseErrorCode["CommaExpected"] = 6] = "CommaExpected";
	ParseErrorCode[ParseErrorCode["CloseBraceExpected"] = 7] = "CloseBraceExpected";
	ParseErrorCode[ParseErrorCode["CloseBracketExpected"] = 8] = "CloseBracketExpected";
	ParseErrorCode[ParseErrorCode["EndOfFileExpected"] = 9] = "EndOfFileExpected";
	ParseErrorCode[ParseErrorCode["InvalidCommentToken"] = 10] = "InvalidCommentToken";
	ParseErrorCode[ParseErrorCode["UnexpectedEndOfComment"] = 11] = "UnexpectedEndOfComment";
	ParseErrorCode[ParseErrorCode["UnexpectedEndOfString"] = 12] = "UnexpectedEndOfString";
	ParseErrorCode[ParseErrorCode["UnexpectedEndOfNumber"] = 13] = "UnexpectedEndOfNumber";
	ParseErrorCode[ParseErrorCode["InvalidUnicode"] = 14] = "InvalidUnicode";
	ParseErrorCode[ParseErrorCode["InvalidEscapeCharacter"] = 15] = "InvalidEscapeCharacter";
	ParseErrorCode[ParseErrorCode["InvalidCharacter"] = 16] = "InvalidCharacter";
})(ParseErrorCode || (ParseErrorCode = {}));
/**
* Computes the edit operations needed to format a JSON document.
*
* @param documentText The input text
* @param range The range to format or `undefined` to format the full content
* @param options The formatting options
* @returns The edit operations describing the formatting changes to the original document following the format described in {@linkcode EditResult}.
* To apply the edit operations to the input, use {@linkcode applyEdits}.
*/
function format$1(documentText, range, options) {
	return format$2(documentText, range, options);
}
//#endregion
//#region servers/json/node_modules/vscode-json-languageservice/lib/esm/utils/objects.js
function equals(one, other) {
	if (one === other) return true;
	if (one === null || one === void 0 || other === null || other === void 0) return false;
	if (typeof one !== typeof other) return false;
	if (typeof one !== "object") return false;
	if (Array.isArray(one) !== Array.isArray(other)) return false;
	let i, key;
	if (Array.isArray(one)) {
		if (one.length !== other.length) return false;
		for (i = 0; i < one.length; i++) if (!equals(one[i], other[i])) return false;
	} else {
		const oneKeys = [];
		for (key in one) oneKeys.push(key);
		oneKeys.sort();
		const otherKeys = [];
		for (key in other) otherKeys.push(key);
		otherKeys.sort();
		if (!equals(oneKeys, otherKeys)) return false;
		for (i = 0; i < oneKeys.length; i++) if (!equals(one[oneKeys[i]], other[oneKeys[i]])) return false;
	}
	return true;
}
function isNumber(val) {
	return typeof val === "number";
}
function isDefined(val) {
	return typeof val !== "undefined";
}
function isBoolean(val) {
	return typeof val === "boolean";
}
function isString(val) {
	return typeof val === "string";
}
function isObject(val) {
	return typeof val === "object" && val !== null && !Array.isArray(val);
}
//#endregion
//#region servers/json/node_modules/vscode-json-languageservice/lib/esm/utils/strings.js
function startsWith(haystack, needle) {
	if (haystack.length < needle.length) return false;
	for (let i = 0; i < needle.length; i++) if (haystack[i] !== needle[i]) return false;
	return true;
}
/**
* Determines if haystack ends with needle.
*/
function endsWith(haystack, needle) {
	const diff = haystack.length - needle.length;
	if (diff > 0) return haystack.lastIndexOf(needle) === diff;
	else if (diff === 0) return haystack === needle;
	else return false;
}
function extendedRegExp(pattern) {
	let flags = "";
	if (startsWith(pattern, "(?i)")) {
		pattern = pattern.substring(4);
		flags = "i";
	}
	try {
		return new RegExp(pattern, flags + "u");
	} catch (e) {
		try {
			return new RegExp(pattern, flags);
		} catch (e) {
			return;
		}
	}
}
function stringLength(str) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		count++;
		const code = str.charCodeAt(i);
		if (55296 <= code && code <= 56319) i++;
	}
	return count;
}
//#endregion
//#region servers/json/node_modules/vscode-languageserver-textdocument/lib/esm/main.js
init_main();
var FullTextDocument = class FullTextDocument {
	constructor(uri, languageId, version, content) {
		this._uri = uri;
		this._languageId = languageId;
		this._version = version;
		this._content = content;
		this._lineOffsets = void 0;
	}
	get uri() {
		return this._uri;
	}
	get languageId() {
		return this._languageId;
	}
	get version() {
		return this._version;
	}
	getText(range) {
		if (range) {
			const start = this.offsetAt(range.start);
			const end = this.offsetAt(range.end);
			return this._content.substring(start, end);
		}
		return this._content;
	}
	update(changes, version) {
		for (const change of changes) if (FullTextDocument.isIncremental(change)) {
			const range = getWellformedRange(change.range);
			const startOffset = this.offsetAt(range.start);
			const endOffset = this.offsetAt(range.end);
			this._content = this._content.substring(0, startOffset) + change.text + this._content.substring(endOffset, this._content.length);
			const startLine = Math.max(range.start.line, 0);
			const endLine = Math.max(range.end.line, 0);
			let lineOffsets = this._lineOffsets;
			const addedLineOffsets = computeLineOffsets(change.text, false, startOffset);
			if (endLine - startLine === addedLineOffsets.length) for (let i = 0, len = addedLineOffsets.length; i < len; i++) lineOffsets[i + startLine + 1] = addedLineOffsets[i];
			else if (addedLineOffsets.length < 1e4) lineOffsets.splice(startLine + 1, endLine - startLine, ...addedLineOffsets);
			else this._lineOffsets = lineOffsets = lineOffsets.slice(0, startLine + 1).concat(addedLineOffsets, lineOffsets.slice(endLine + 1));
			const diff = change.text.length - (endOffset - startOffset);
			if (diff !== 0) for (let i = startLine + 1 + addedLineOffsets.length, len = lineOffsets.length; i < len; i++) lineOffsets[i] = lineOffsets[i] + diff;
		} else if (FullTextDocument.isFull(change)) {
			this._content = change.text;
			this._lineOffsets = void 0;
		} else throw new Error("Unknown change event received");
		this._version = version;
	}
	getLineOffsets() {
		if (this._lineOffsets === void 0) this._lineOffsets = computeLineOffsets(this._content, true);
		return this._lineOffsets;
	}
	positionAt(offset) {
		offset = Math.max(Math.min(offset, this._content.length), 0);
		const lineOffsets = this.getLineOffsets();
		let low = 0, high = lineOffsets.length;
		if (high === 0) return {
			line: 0,
			character: offset
		};
		while (low < high) {
			const mid = Math.floor((low + high) / 2);
			if (lineOffsets[mid] > offset) high = mid;
			else low = mid + 1;
		}
		const line = low - 1;
		offset = this.ensureBeforeEOL(offset, lineOffsets[line]);
		return {
			line,
			character: offset - lineOffsets[line]
		};
	}
	offsetAt(position) {
		const lineOffsets = this.getLineOffsets();
		if (position.line >= lineOffsets.length) return this._content.length;
		else if (position.line < 0) return 0;
		const lineOffset = lineOffsets[position.line];
		if (position.character <= 0) return lineOffset;
		const nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
		const offset = Math.min(lineOffset + position.character, nextLineOffset);
		return this.ensureBeforeEOL(offset, lineOffset);
	}
	getLineRange(line) {
		const lineOffsets = this.getLineOffsets();
		if (line >= lineOffsets.length) {
			const lastLine = lineOffsets.length - 1;
			return {
				start: {
					line: lastLine,
					character: 0
				},
				end: {
					line: lastLine,
					character: this._content.length - lineOffsets[lastLine]
				}
			};
		} else if (line < 0) return {
			start: {
				line: 0,
				character: 0
			},
			end: {
				line: 0,
				character: 0
			}
		};
		const startOffset = lineOffsets[line];
		const nextLineOffset = line + 1 < lineOffsets.length ? lineOffsets[line + 1] : this._content.length;
		const endOffset = this.ensureBeforeEOL(nextLineOffset, startOffset);
		return {
			start: {
				line,
				character: 0
			},
			end: {
				line,
				character: endOffset - startOffset
			}
		};
	}
	getEOLCharacters(line) {
		const lineOffsets = this.getLineOffsets();
		if (line >= lineOffsets.length) return "";
		else if (line < 0) return "";
		const nextLineOffset = line + 1 < lineOffsets.length ? lineOffsets[line + 1] : this._content.length;
		const eolOffset = this.ensureBeforeEOL(nextLineOffset, lineOffsets[line]);
		return this._content.substring(eolOffset, nextLineOffset);
	}
	ensureBeforeEOL(offset, lineOffset) {
		while (offset > lineOffset && isEOL(this._content.charCodeAt(offset - 1))) offset--;
		return offset;
	}
	get lineCount() {
		return this.getLineOffsets().length;
	}
	static isIncremental(event) {
		const candidate = event;
		return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
	}
	static isFull(event) {
		const candidate = event;
		return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
	}
};
var TextDocument;
(function(TextDocument) {
	/**
	* Creates a new text document.
	*
	* @param uri The document's uri.
	* @param languageId  The document's language Id.
	* @param version The document's initial version number.
	* @param content The document's content.
	*/
	function create(uri, languageId, version, content) {
		return new FullTextDocument(uri, languageId, version, content);
	}
	TextDocument.create = create;
	/**
	* Updates a TextDocument by modifying its content.
	*
	* @param document the document to update. Only documents created by TextDocument.create are valid inputs.
	* @param changes the changes to apply to the document.
	* @param version the changes version for the document.
	* @returns The updated TextDocument. Note: That's the same document instance passed in as first parameter.
	*
	*/
	function update(document, changes, version) {
		if (document instanceof FullTextDocument) {
			document.update(changes, version);
			return document;
		} else throw new Error("TextDocument.update: document must be created by TextDocument.create");
	}
	TextDocument.update = update;
	function applyEdits(document, edits) {
		const text = document.getText();
		const sortedEdits = mergeSort(edits.map(getWellformedEdit), (a, b) => {
			const diff = a.range.start.line - b.range.start.line;
			if (diff === 0) return a.range.start.character - b.range.start.character;
			return diff;
		});
		let lastModifiedOffset = 0;
		const spans = [];
		for (const e of sortedEdits) {
			const startOffset = document.offsetAt(e.range.start);
			if (startOffset < lastModifiedOffset) throw new Error("Overlapping edit");
			else if (startOffset > lastModifiedOffset) spans.push(text.substring(lastModifiedOffset, startOffset));
			if (e.newText.length) spans.push(e.newText);
			lastModifiedOffset = document.offsetAt(e.range.end);
		}
		spans.push(text.substr(lastModifiedOffset));
		return spans.join("");
	}
	TextDocument.applyEdits = applyEdits;
})(TextDocument || (TextDocument = {}));
function mergeSort(data, compare) {
	if (data.length <= 1) return data;
	const p = data.length / 2 | 0;
	const left = data.slice(0, p);
	const right = data.slice(p);
	mergeSort(left, compare);
	mergeSort(right, compare);
	let leftIdx = 0;
	let rightIdx = 0;
	let i = 0;
	while (leftIdx < left.length && rightIdx < right.length) if (compare(left[leftIdx], right[rightIdx]) <= 0) data[i++] = left[leftIdx++];
	else data[i++] = right[rightIdx++];
	while (leftIdx < left.length) data[i++] = left[leftIdx++];
	while (rightIdx < right.length) data[i++] = right[rightIdx++];
	return data;
}
function computeLineOffsets(text, isAtLineStart, textOffset = 0) {
	const result = isAtLineStart ? [textOffset] : [];
	for (let i = 0; i < text.length; i++) {
		const ch = text.charCodeAt(i);
		if (isEOL(ch)) {
			if (ch === 13 && i + 1 < text.length && text.charCodeAt(i + 1) === 10) i++;
			result.push(textOffset + i + 1);
		}
	}
	return result;
}
function isEOL(char) {
	return char === 13 || char === 10;
}
function getWellformedRange(range) {
	const start = range.start;
	const end = range.end;
	if (start.line > end.line || start.line === end.line && start.character > end.character) return {
		start: end,
		end: start
	};
	return range;
}
function getWellformedEdit(textEdit) {
	const range = getWellformedRange(textEdit.range);
	if (range !== textEdit.range) return {
		newText: textEdit.newText,
		range
	};
	return textEdit;
}
//#endregion
//#region servers/json/node_modules/vscode-json-languageservice/lib/esm/jsonLanguageTypes.js
/**
* Error codes used by diagnostics
*/
var ErrorCode;
(function(ErrorCode) {
	ErrorCode[ErrorCode["Undefined"] = 0] = "Undefined";
	ErrorCode[ErrorCode["EnumValueMismatch"] = 1] = "EnumValueMismatch";
	ErrorCode[ErrorCode["Deprecated"] = 2] = "Deprecated";
	ErrorCode[ErrorCode["UnexpectedEndOfComment"] = 257] = "UnexpectedEndOfComment";
	ErrorCode[ErrorCode["UnexpectedEndOfString"] = 258] = "UnexpectedEndOfString";
	ErrorCode[ErrorCode["UnexpectedEndOfNumber"] = 259] = "UnexpectedEndOfNumber";
	ErrorCode[ErrorCode["InvalidUnicode"] = 260] = "InvalidUnicode";
	ErrorCode[ErrorCode["InvalidEscapeCharacter"] = 261] = "InvalidEscapeCharacter";
	ErrorCode[ErrorCode["InvalidCharacter"] = 262] = "InvalidCharacter";
	ErrorCode[ErrorCode["PropertyExpected"] = 513] = "PropertyExpected";
	ErrorCode[ErrorCode["CommaExpected"] = 514] = "CommaExpected";
	ErrorCode[ErrorCode["ColonExpected"] = 515] = "ColonExpected";
	ErrorCode[ErrorCode["ValueExpected"] = 516] = "ValueExpected";
	ErrorCode[ErrorCode["CommaOrCloseBacketExpected"] = 517] = "CommaOrCloseBacketExpected";
	ErrorCode[ErrorCode["CommaOrCloseBraceExpected"] = 518] = "CommaOrCloseBraceExpected";
	ErrorCode[ErrorCode["TrailingComma"] = 519] = "TrailingComma";
	ErrorCode[ErrorCode["DuplicateKey"] = 520] = "DuplicateKey";
	ErrorCode[ErrorCode["CommentNotPermitted"] = 521] = "CommentNotPermitted";
	ErrorCode[ErrorCode["PropertyKeysMustBeDoublequoted"] = 528] = "PropertyKeysMustBeDoublequoted";
	ErrorCode[ErrorCode["SchemaUnsupportedFeature"] = 769] = "SchemaUnsupportedFeature";
	ErrorCode[ErrorCode["SchemaResolveError"] = 65536] = "SchemaResolveError";
})(ErrorCode || (ErrorCode = {}));
var SchemaDraft;
(function(SchemaDraft) {
	SchemaDraft[SchemaDraft["v3"] = 3] = "v3";
	SchemaDraft[SchemaDraft["v4"] = 4] = "v4";
	SchemaDraft[SchemaDraft["v6"] = 6] = "v6";
	SchemaDraft[SchemaDraft["v7"] = 7] = "v7";
	SchemaDraft[SchemaDraft["v2019_09"] = 19] = "v2019_09";
	SchemaDraft[SchemaDraft["v2020_12"] = 20] = "v2020_12";
})(SchemaDraft || (SchemaDraft = {}));
var ClientCapabilities;
(function(ClientCapabilities) {
	ClientCapabilities.LATEST = { textDocument: { completion: { completionItem: {
		documentationFormat: [MarkupKind.Markdown, MarkupKind.PlainText],
		commitCharactersSupport: true,
		labelDetailsSupport: true
	} } } };
})(ClientCapabilities || (ClientCapabilities = {}));
//#endregion
//#region servers/json/node_modules/vscode-uri/lib/esm/index.mjs
var t = { 975(t) {
	function e(t) {
		if ("string" != typeof t) throw new TypeError("Path must be a string. Received " + JSON.stringify(t));
	}
	function r(t, e) {
		for (var r, n = "", i = 0, o = -1, h = 0, s = 0; s <= t.length; ++s) {
			if (s < t.length) r = t.charCodeAt(s);
			else {
				if (47 === r) break;
				r = 47;
			}
			if (47 === r) {
				if (o === s - 1 || 1 === h);
				else if (o !== s - 1 && 2 === h) {
					if (n.length < 2 || 2 !== i || 46 !== n.charCodeAt(n.length - 1) || 46 !== n.charCodeAt(n.length - 2)) {
						if (n.length > 2) {
							var a = n.lastIndexOf("/");
							if (a !== n.length - 1) {
								-1 === a ? (n = "", i = 0) : i = (n = n.slice(0, a)).length - 1 - n.lastIndexOf("/"), o = s, h = 0;
								continue;
							}
						} else if (2 === n.length || 1 === n.length) {
							n = "", i = 0, o = s, h = 0;
							continue;
						}
					}
					e && (n.length > 0 ? n += "/.." : n = "..", i = 2);
				} else n.length > 0 ? n += "/" + t.slice(o + 1, s) : n = t.slice(o + 1, s), i = s - o - 1;
				o = s, h = 0;
			} else 46 === r && -1 !== h ? ++h : h = -1;
		}
		return n;
	}
	var n = {
		resolve: function() {
			for (var t, n = "", i = !1, o = arguments.length - 1; o >= -1 && !i; o--) {
				var h;
				o >= 0 ? h = arguments[o] : (void 0 === t && (t = process.cwd()), h = t), e(h), 0 !== h.length && (n = h + "/" + n, i = 47 === h.charCodeAt(0));
			}
			return n = r(n, !i), i ? n.length > 0 ? "/" + n : "/" : n.length > 0 ? n : ".";
		},
		normalize: function(t) {
			if (e(t), 0 === t.length) return ".";
			var n = 47 === t.charCodeAt(0), i = 47 === t.charCodeAt(t.length - 1);
			return 0 !== (t = r(t, !n)).length || n || (t = "."), t.length > 0 && i && (t += "/"), n ? "/" + t : t;
		},
		isAbsolute: function(t) {
			return e(t), t.length > 0 && 47 === t.charCodeAt(0);
		},
		join: function() {
			if (0 === arguments.length) return ".";
			for (var t, r = 0; r < arguments.length; ++r) {
				var i = arguments[r];
				e(i), i.length > 0 && (void 0 === t ? t = i : t += "/" + i);
			}
			return void 0 === t ? "." : n.normalize(t);
		},
		relative: function(t, r) {
			if (e(t), e(r), t === r) return "";
			if ((t = n.resolve(t)) === (r = n.resolve(r))) return "";
			for (var i = 1; i < t.length && 47 === t.charCodeAt(i); ++i);
			for (var o = t.length, h = o - i, s = 1; s < r.length && 47 === r.charCodeAt(s); ++s);
			for (var a = r.length - s, c = h < a ? h : a, f = -1, u = 0; u <= c; ++u) {
				if (u === c) {
					if (a > c) {
						if (47 === r.charCodeAt(s + u)) return r.slice(s + u + 1);
						if (0 === u) return r.slice(s + u);
					} else h > c && (47 === t.charCodeAt(i + u) ? f = u : 0 === u && (f = 0));
					break;
				}
				var l = t.charCodeAt(i + u);
				if (l !== r.charCodeAt(s + u)) break;
				47 === l && (f = u);
			}
			var g = "";
			for (u = i + f + 1; u <= o; ++u) u !== o && 47 !== t.charCodeAt(u) || (0 === g.length ? g += ".." : g += "/..");
			return g.length > 0 ? g + r.slice(s + f) : (s += f, 47 === r.charCodeAt(s) && ++s, r.slice(s));
		},
		_makeLong: function(t) {
			return t;
		},
		dirname: function(t) {
			if (e(t), 0 === t.length) return ".";
			for (var r = t.charCodeAt(0), n = 47 === r, i = -1, o = !0, h = t.length - 1; h >= 1; --h) if (47 === (r = t.charCodeAt(h))) {
				if (!o) {
					i = h;
					break;
				}
			} else o = !1;
			return -1 === i ? n ? "/" : "." : n && 1 === i ? "//" : t.slice(0, i);
		},
		basename: function(t, r) {
			if (void 0 !== r && "string" != typeof r) throw new TypeError("\"ext\" argument must be a string");
			e(t);
			var n, i = 0, o = -1, h = !0;
			if (void 0 !== r && r.length > 0 && r.length <= t.length) {
				if (r.length === t.length && r === t) return "";
				var s = r.length - 1, a = -1;
				for (n = t.length - 1; n >= 0; --n) {
					var c = t.charCodeAt(n);
					if (47 === c) {
						if (!h) {
							i = n + 1;
							break;
						}
					} else -1 === a && (h = !1, a = n + 1), s >= 0 && (c === r.charCodeAt(s) ? -1 === --s && (o = n) : (s = -1, o = a));
				}
				return i === o ? o = a : -1 === o && (o = t.length), t.slice(i, o);
			}
			for (n = t.length - 1; n >= 0; --n) if (47 === t.charCodeAt(n)) {
				if (!h) {
					i = n + 1;
					break;
				}
			} else -1 === o && (h = !1, o = n + 1);
			return -1 === o ? "" : t.slice(i, o);
		},
		extname: function(t) {
			e(t);
			for (var r = -1, n = 0, i = -1, o = !0, h = 0, s = t.length - 1; s >= 0; --s) {
				var a = t.charCodeAt(s);
				if (47 !== a) -1 === i && (o = !1, i = s + 1), 46 === a ? -1 === r ? r = s : 1 !== h && (h = 1) : -1 !== r && (h = -1);
				else if (!o) {
					n = s + 1;
					break;
				}
			}
			return -1 === r || -1 === i || 0 === h || 1 === h && r === i - 1 && r === n + 1 ? "" : t.slice(r, i);
		},
		format: function(t) {
			if (null === t || "object" != typeof t) throw new TypeError("The \"pathObject\" argument must be of type Object. Received type " + typeof t);
			return function(t, e) {
				var r = e.dir || e.root, n = e.base || (e.name || "") + (e.ext || "");
				return r ? r === e.root ? r + n : r + "/" + n : n;
			}(0, t);
		},
		parse: function(t) {
			e(t);
			var r = {
				root: "",
				dir: "",
				base: "",
				ext: "",
				name: ""
			};
			if (0 === t.length) return r;
			var n, i = t.charCodeAt(0), o = 47 === i;
			o ? (r.root = "/", n = 1) : n = 0;
			for (var h = -1, s = 0, a = -1, c = !0, f = t.length - 1, u = 0; f >= n; --f) if (47 !== (i = t.charCodeAt(f))) -1 === a && (c = !1, a = f + 1), 46 === i ? -1 === h ? h = f : 1 !== u && (u = 1) : -1 !== h && (u = -1);
			else if (!c) {
				s = f + 1;
				break;
			}
			return -1 === h || -1 === a || 0 === u || 1 === u && h === a - 1 && h === s + 1 ? -1 !== a && (r.base = r.name = 0 === s && o ? t.slice(1, a) : t.slice(s, a)) : (0 === s && o ? (r.name = t.slice(1, h), r.base = t.slice(1, a)) : (r.name = t.slice(s, h), r.base = t.slice(s, a)), r.ext = t.slice(h, a)), s > 0 ? r.dir = t.slice(0, s - 1) : o && (r.dir = "/"), r;
		},
		sep: "/",
		delimiter: ":",
		win32: null,
		posix: null
	};
	n.posix = n, t.exports = n;
} };
var e = {};
function r(n) {
	var i = e[n];
	if (void 0 !== i) return i.exports;
	var o = e[n] = { exports: {} };
	return t[n](o, o.exports, r), o.exports;
}
let n;
if (r.d = (t, e) => {
	for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
		enumerable: !0,
		get: e[n]
	});
}, r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), "object" == typeof process) n = "win32" === process.platform;
else if ("object" == typeof navigator) n = navigator.userAgent.indexOf("Windows") >= 0;
const i = /^\w[\w\d+.-]*$/;
const o = /^\//;
const h = /^\/\//;
function s(t, e) {
	if (!t.scheme && e) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${t.authority}", path: "${t.path}", query: "${t.query}", fragment: "${t.fragment}"}`);
	if (t.scheme && !i.test(t.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
	if (t.path) {
		if (t.authority) {
			if (!o.test(t.path)) throw new Error("[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash (\"/\") character");
		} else if (h.test(t.path)) throw new Error("[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters (\"//\")");
	}
}
const a$1 = "";
const c = "/";
const f$1 = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
var u = class u {
	static isUri(t) {
		return t instanceof u || !!t && "string" == typeof t.authority && "string" == typeof t.fragment && "string" == typeof t.path && "string" == typeof t.query && "string" == typeof t.scheme && "string" == typeof t.fsPath && "function" == typeof t.with && "function" == typeof t.toString;
	}
	scheme;
	authority;
	path;
	query;
	fragment;
	constructor(t, e, r, n, i, o = !1) {
		"object" == typeof t ? (this.scheme = t.scheme || a$1, this.authority = t.authority || a$1, this.path = t.path || a$1, this.query = t.query || a$1, this.fragment = t.fragment || a$1) : (this.scheme = function(t, e) {
			return t || e ? t : "file";
		}(t, o), this.authority = e || a$1, this.path = function(t, e) {
			switch (t) {
				case "https":
				case "http":
				case "file": e ? e[0] !== c && (e = c + e) : e = c;
			}
			return e;
		}(this.scheme, r || a$1), this.query = n || a$1, this.fragment = i || a$1, s(this, o));
	}
	get fsPath() {
		return y(this, !1);
	}
	with(t) {
		if (!t) return this;
		let { scheme: e, authority: r, path: n, query: i, fragment: o } = t;
		return void 0 === e ? e = this.scheme : null === e && (e = a$1), void 0 === r ? r = this.authority : null === r && (r = a$1), void 0 === n ? n = this.path : null === n && (n = a$1), void 0 === i ? i = this.query : null === i && (i = a$1), void 0 === o ? o = this.fragment : null === o && (o = a$1), e === this.scheme && r === this.authority && n === this.path && i === this.query && o === this.fragment ? this : new g(e, r, n, i, o);
	}
	static parse(t, e = !1) {
		const r = f$1.exec(t);
		return r ? new g(r[2] || a$1, A(r[4] || a$1), A(r[5] || a$1), A(r[7] || a$1), A(r[9] || a$1), e) : new g(a$1, a$1, a$1, a$1, a$1);
	}
	static file(t) {
		let e = a$1;
		if (n && (t = t.replace(/\\/g, c)), t[0] === c && t[1] === c) {
			const r = t.indexOf(c, 2);
			-1 === r ? (e = t.substring(2), t = c) : (e = t.substring(2, r), t = t.substring(r) || c);
		}
		return new g("file", e, t, a$1, a$1);
	}
	static from(t) {
		const e = new g(t.scheme, t.authority, t.path, t.query, t.fragment);
		return s(e, !0), e;
	}
	toString(t = !1) {
		return v(this, t);
	}
	toJSON() {
		return this;
	}
	static revive(t) {
		if (t) {
			if (t instanceof u) return t;
			{
				const e = new g(t);
				return e._formatted = t.external, e._fsPath = t._sep === l ? t.fsPath : null, e;
			}
		}
		return t;
	}
};
const l = n ? 1 : void 0;
var g = class extends u {
	_formatted = null;
	_fsPath = null;
	get fsPath() {
		return this._fsPath || (this._fsPath = y(this, !1)), this._fsPath;
	}
	toString(t = !1) {
		return t ? v(this, !0) : (this._formatted || (this._formatted = v(this, !1)), this._formatted);
	}
	toJSON() {
		const t = { $mid: 1 };
		return this._fsPath && (t.fsPath = this._fsPath, t._sep = l), this._formatted && (t.external = this._formatted), this.path && (t.path = this.path), this.scheme && (t.scheme = this.scheme), this.authority && (t.authority = this.authority), this.query && (t.query = this.query), this.fragment && (t.fragment = this.fragment), t;
	}
};
const p = {
	58: "%3A",
	47: "%2F",
	63: "%3F",
	35: "%23",
	91: "%5B",
	93: "%5D",
	64: "%40",
	33: "%21",
	36: "%24",
	38: "%26",
	39: "%27",
	40: "%28",
	41: "%29",
	42: "%2A",
	43: "%2B",
	44: "%2C",
	59: "%3B",
	61: "%3D",
	32: "%20"
};
function d(t, e, r) {
	let n, i = -1;
	for (let o = 0; o < t.length; o++) {
		const h = t.charCodeAt(o);
		if (h >= 97 && h <= 122 || h >= 65 && h <= 90 || h >= 48 && h <= 57 || 45 === h || 46 === h || 95 === h || 126 === h || e && 47 === h || r && 91 === h || r && 93 === h || r && 58 === h) -1 !== i && (n += encodeURIComponent(t.substring(i, o)), i = -1), void 0 !== n && (n += t.charAt(o));
		else {
			void 0 === n && (n = t.substr(0, o));
			const e = p[h];
			void 0 !== e ? (-1 !== i && (n += encodeURIComponent(t.substring(i, o)), i = -1), n += e) : -1 === i && (i = o);
		}
	}
	return -1 !== i && (n += encodeURIComponent(t.substring(i))), void 0 !== n ? n : t;
}
function m(t) {
	let e;
	for (let r = 0; r < t.length; r++) {
		const n = t.charCodeAt(r);
		35 === n || 63 === n ? (void 0 === e && (e = t.substr(0, r)), e += p[n]) : void 0 !== e && (e += t[r]);
	}
	return void 0 !== e ? e : t;
}
function y(t, e) {
	let r;
	return r = t.authority && t.path.length > 1 && "file" === t.scheme ? `//${t.authority}${t.path}` : 47 === t.path.charCodeAt(0) && (t.path.charCodeAt(1) >= 65 && t.path.charCodeAt(1) <= 90 || t.path.charCodeAt(1) >= 97 && t.path.charCodeAt(1) <= 122) && 58 === t.path.charCodeAt(2) ? e ? t.path.substr(1) : t.path[1].toLowerCase() + t.path.substr(2) : t.path, n && (r = r.replace(/\//g, "\\")), r;
}
function v(t, e) {
	const r = e ? m : d;
	let n = "", { scheme: i, authority: o, path: h, query: s, fragment: a } = t;
	if (i && (n += i, n += ":"), (o || "file" === i) && (n += c, n += c), o) {
		let t = o.indexOf("@");
		if (-1 !== t) {
			const e = o.substr(0, t);
			o = o.substr(t + 1), t = e.lastIndexOf(":"), -1 === t ? n += r(e, !1, !1) : (n += r(e.substr(0, t), !1, !1), n += ":", n += r(e.substr(t + 1), !1, !0)), n += "@";
		}
		o = o.toLowerCase(), t = o.lastIndexOf(":"), -1 === t ? n += r(o, !1, !0) : (n += r(o.substr(0, t), !1, !0), n += o.substr(t));
	}
	if (h) {
		if (h.length >= 3 && 47 === h.charCodeAt(0) && 58 === h.charCodeAt(2)) {
			const t = h.charCodeAt(1);
			t >= 65 && t <= 90 && (h = `/${String.fromCharCode(t + 32)}:${h.substr(3)}`);
		} else if (h.length >= 2 && 58 === h.charCodeAt(1)) {
			const t = h.charCodeAt(0);
			t >= 65 && t <= 90 && (h = `${String.fromCharCode(t + 32)}:${h.substr(2)}`);
		}
		n += r(h, !0, !1);
	}
	return s && (n += "?", n += r(s, !1, !1)), a && (n += "#", n += e ? a : d(a, !1, !1)), n;
}
function b(t) {
	try {
		return decodeURIComponent(t);
	} catch {
		return t.length > 3 ? t.substr(0, 3) + b(t.substr(3)) : t;
	}
}
const C = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function A(t) {
	return t.match(C) ? t.replace(C, (t) => b(t)) : t;
}
var w = r(975);
const x = w.posix || w;
const P = "/";
var _;
(function(t) {
	t.joinPath = function(t, ...e) {
		return t.with({ path: x.join(t.path, ...e) });
	}, t.resolvePath = function(t, ...e) {
		let r = t.path, n = !1;
		r[0] !== P && (r = P + r, n = !0);
		let i = x.resolve(r, ...e);
		return n && i[0] === P && !t.authority && (i = i.substring(1)), t.with({ path: i });
	}, t.dirname = function(t) {
		if (0 === t.path.length || t.path === P) return t;
		let e = x.dirname(t.path);
		return 1 === e.length && 46 === e.charCodeAt(0) && (e = ""), t.with({ path: e });
	}, t.basename = function(t) {
		return x.basename(t.path);
	}, t.extname = function(t) {
		return x.extname(t.path);
	};
})(_ || (_ = {}));
//#endregion
//#region servers/json/node_modules/vscode-json-languageservice/lib/esm/services/vocabularies.js
const CORE_201909 = "https://json-schema.org/draft/2019-09/vocab/core";
const CORE_202012 = "https://json-schema.org/draft/2020-12/vocab/core";
const vocabularyKeywords = {
	[CORE_201909]: [
		"$id",
		"$schema",
		"$ref",
		"$anchor",
		"$recursiveRef",
		"$recursiveAnchor",
		"$defs",
		"$comment",
		"$vocabulary"
	],
	"https://json-schema.org/draft/2019-09/vocab/applicator": [
		"prefixItems",
		"items",
		"contains",
		"additionalProperties",
		"properties",
		"patternProperties",
		"dependentSchemas",
		"propertyNames",
		"if",
		"then",
		"else",
		"allOf",
		"anyOf",
		"oneOf",
		"not"
	],
	"https://json-schema.org/draft/2019-09/vocab/validation": [
		"type",
		"enum",
		"const",
		"multipleOf",
		"maximum",
		"exclusiveMaximum",
		"minimum",
		"exclusiveMinimum",
		"maxLength",
		"minLength",
		"pattern",
		"maxItems",
		"minItems",
		"uniqueItems",
		"maxContains",
		"minContains",
		"maxProperties",
		"minProperties",
		"required",
		"dependentRequired"
	],
	"https://json-schema.org/draft/2019-09/vocab/meta-data": [
		"title",
		"description",
		"default",
		"deprecated",
		"readOnly",
		"writeOnly",
		"examples"
	],
	"https://json-schema.org/draft/2019-09/vocab/format": ["format"],
	"https://json-schema.org/draft/2019-09/vocab/content": [
		"contentEncoding",
		"contentMediaType",
		"contentSchema"
	],
	[CORE_202012]: [
		"$id",
		"$schema",
		"$ref",
		"$anchor",
		"$dynamicRef",
		"$dynamicAnchor",
		"$defs",
		"$comment",
		"$vocabulary"
	],
	"https://json-schema.org/draft/2020-12/vocab/applicator": [
		"prefixItems",
		"items",
		"contains",
		"additionalProperties",
		"properties",
		"patternProperties",
		"dependentSchemas",
		"propertyNames",
		"if",
		"then",
		"else",
		"allOf",
		"anyOf",
		"oneOf",
		"not"
	],
	"https://json-schema.org/draft/2020-12/vocab/unevaluated": ["unevaluatedItems", "unevaluatedProperties"],
	"https://json-schema.org/draft/2020-12/vocab/validation": [
		"type",
		"enum",
		"const",
		"multipleOf",
		"maximum",
		"exclusiveMaximum",
		"minimum",
		"exclusiveMinimum",
		"maxLength",
		"minLength",
		"pattern",
		"maxItems",
		"minItems",
		"uniqueItems",
		"maxContains",
		"minContains",
		"maxProperties",
		"minProperties",
		"required",
		"dependentRequired"
	],
	"https://json-schema.org/draft/2020-12/vocab/meta-data": [
		"title",
		"description",
		"default",
		"deprecated",
		"readOnly",
		"writeOnly",
		"examples"
	],
	"https://json-schema.org/draft/2020-12/vocab/format-annotation": ["format"],
	"https://json-schema.org/draft/2020-12/vocab/format-assertion": ["format"],
	"https://json-schema.org/draft/2020-12/vocab/content": [
		"contentEncoding",
		"contentMediaType",
		"contentSchema"
	]
};
function isKeywordEnabled(keyword, activeVocabularies) {
	if (!activeVocabularies) return true;
	for (const [vocabUri, keywords] of Object.entries(vocabularyKeywords)) if (keywords.includes(keyword) && activeVocabularies.has(vocabUri)) return true;
	if (vocabularyKeywords[CORE_201909].includes(keyword) || vocabularyKeywords[CORE_202012].includes(keyword)) return true;
	return false;
}
function isFormatAssertionEnabled(activeVocabularies, schemaDraft) {
	if (activeVocabularies && activeVocabularies.size > 0) {
		if (activeVocabularies.has("https://json-schema.org/draft/2020-12/vocab/format-assertion")) return true;
		const format201909 = activeVocabularies.get("https://json-schema.org/draft/2019-09/vocab/format");
		if (format201909 !== void 0) return format201909;
		if (activeVocabularies.has("https://json-schema.org/draft/2020-12/vocab/format-annotation")) return false;
		return false;
	}
	if (schemaDraft !== void 0 && schemaDraft >= SchemaDraft.v2019_09) return false;
	return true;
}
//#endregion
//#region servers/json/node_modules/vscode-json-languageservice/lib/esm/parser/jsonParser.js
var import_main$2 = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __export = (target, all) => {
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
	var main_exports = {};
	__export(main_exports, {
		config: () => config,
		t: () => t
	});
	module.exports = __toCommonJS(main_exports);
	var import_fs = require("fs");
	var import_promises = require("fs/promises");
	async function readFileFromUri(uri) {
		if (uri.protocol === "file:") return await (0, import_promises.readFile)(uri, "utf8");
		if (uri.protocol === "http:" || uri.protocol === "https:") {
			const res = await fetch(uri.toString(), {
				headers: {
					"Accept-Encoding": "gzip, deflate",
					"Accept": "application/json"
				},
				redirect: "follow"
			});
			if (!res.ok) {
				let error = `Unexpected ${res.status} response while trying to read ${uri}`;
				try {
					error += `: ${await res.text()}`;
				} catch {}
				throw new Error(error);
			}
			return await res.text();
		}
		throw new Error("Unsupported protocol");
	}
	function readFileFromFsPath(fsPath) {
		return (0, import_fs.readFileSync)(fsPath, "utf8");
	}
	var bundle;
	function config(config2) {
		if ("contents" in config2) {
			if (typeof config2.contents === "string") bundle = JSON.parse(config2.contents);
			else bundle = config2.contents;
			return;
		}
		if ("fsPath" in config2) {
			const fileContent = readFileFromFsPath(config2.fsPath);
			const content = JSON.parse(fileContent);
			bundle = isBuiltinExtension(content) ? content.contents.bundle : content;
			return;
		}
		if (config2.uri) {
			let uri = config2.uri;
			if (typeof config2.uri === "string") uri = new URL(config2.uri);
			return new Promise((resolve, reject) => {
				readFileFromUri(uri).then((uriContent) => {
					try {
						const content = JSON.parse(uriContent);
						bundle = isBuiltinExtension(content) ? content.contents.bundle : content;
						resolve();
					} catch (err) {
						reject(err);
					}
				}).catch((err) => {
					reject(err);
				});
			});
		}
	}
	function t(...args) {
		const firstArg = args[0];
		let key;
		let message;
		let formatArgs;
		if (typeof firstArg === "string") {
			key = firstArg;
			message = firstArg;
			args.splice(0, 1);
			formatArgs = !args || typeof args[0] !== "object" ? args : args[0];
		} else if (firstArg instanceof Array) {
			const replacements = args.slice(1);
			if (firstArg.length !== replacements.length + 1) throw new Error("expected a string as the first argument to l10n.t");
			let str = firstArg[0];
			for (let i = 1; i < firstArg.length; i++) str += `{${i - 1}}` + firstArg[i];
			return t(str, ...replacements);
		} else {
			message = firstArg.message;
			key = message;
			if (firstArg.comment && firstArg.comment.length > 0) key += `/${Array.isArray(firstArg.comment) ? firstArg.comment.join("") : firstArg.comment}`;
			formatArgs = firstArg.args ?? {};
		}
		const messageFromBundle = bundle?.[key];
		if (!messageFromBundle) return format(message, formatArgs);
		if (typeof messageFromBundle === "string") return format(messageFromBundle, formatArgs);
		if (messageFromBundle.comment) return format(messageFromBundle.message, formatArgs);
		return format(message, formatArgs);
	}
	var _format2Regexp = /{([^}]+)}/g;
	function format(template, values) {
		if (Object.keys(values).length === 0) return template;
		return template.replace(_format2Regexp, (match, group) => values[group] ?? match);
	}
	function isBuiltinExtension(json) {
		return !!(typeof json?.contents?.bundle === "object" && typeof json?.version === "string");
	}
	0 && (module.exports = {
		config,
		t
	});
})))(), 1);
const formats = {
	"color-hex": {
		errorMessage: import_main$2.t("Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA."),
		pattern: /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/
	},
	"date-time": {
		errorMessage: import_main$2.t("String is not a RFC3339 date-time."),
		pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i
	},
	"date": {
		errorMessage: import_main$2.t("String is not a RFC3339 date."),
		pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/i
	},
	"time": {
		errorMessage: import_main$2.t("String is not a RFC3339 time."),
		pattern: /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i
	},
	"duration": {
		errorMessage: import_main$2.t("String is not an ISO 8601 duration."),
		pattern: /^P(?!$)(\d+Y)?(\d+M)?(\d+W)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+(\.\d+)?S)?)?$/
	},
	"uuid": {
		errorMessage: import_main$2.t("String is not a valid UUID."),
		pattern: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
	},
	"email": {
		errorMessage: import_main$2.t("String is not an e-mail address."),
		pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/
	},
	"hostname": {
		errorMessage: import_main$2.t("String is not a hostname."),
		pattern: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i
	},
	"ipv4": {
		errorMessage: import_main$2.t("String is not an IPv4 address."),
		pattern: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/
	},
	"ipv6": {
		errorMessage: import_main$2.t("String is not an IPv6 address."),
		pattern: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i
	}
};
var ASTNodeImpl = class {
	constructor(parent, offset, length = 0) {
		this.offset = offset;
		this.length = length;
		this.parent = parent;
	}
	get children() {
		return [];
	}
	toString() {
		return "type: " + this.type + " (" + this.offset + "/" + this.length + ")" + (this.parent ? " parent: {" + this.parent.toString() + "}" : "");
	}
};
var NullASTNodeImpl = class extends ASTNodeImpl {
	constructor(parent, offset) {
		super(parent, offset);
		this.type = "null";
		this.value = null;
	}
};
var BooleanASTNodeImpl = class extends ASTNodeImpl {
	constructor(parent, boolValue, offset) {
		super(parent, offset);
		this.type = "boolean";
		this.value = boolValue;
	}
};
var ArrayASTNodeImpl = class extends ASTNodeImpl {
	constructor(parent, offset) {
		super(parent, offset);
		this.type = "array";
		this.items = [];
	}
	get children() {
		return this.items;
	}
};
var NumberASTNodeImpl = class extends ASTNodeImpl {
	constructor(parent, offset) {
		super(parent, offset);
		this.type = "number";
		this.isInteger = true;
		this.value = NaN;
	}
};
var StringASTNodeImpl = class extends ASTNodeImpl {
	constructor(parent, offset, length) {
		super(parent, offset, length);
		this.type = "string";
		this.value = "";
	}
};
var PropertyASTNodeImpl = class extends ASTNodeImpl {
	constructor(parent, offset, keyNode) {
		super(parent, offset);
		this.type = "property";
		this.colonOffset = -1;
		this.keyNode = keyNode;
	}
	get children() {
		return this.valueNode ? [this.keyNode, this.valueNode] : [this.keyNode];
	}
};
var ObjectASTNodeImpl = class extends ASTNodeImpl {
	constructor(parent, offset) {
		super(parent, offset);
		this.type = "object";
		this.properties = [];
	}
	get children() {
		return this.properties;
	}
};
function asSchema(schema) {
	if (isBoolean(schema)) return schema ? {} : { "not": {} };
	return schema;
}
var EnumMatch;
(function(EnumMatch) {
	EnumMatch[EnumMatch["Key"] = 0] = "Key";
	EnumMatch[EnumMatch["Enum"] = 1] = "Enum";
})(EnumMatch || (EnumMatch = {}));
const httpPrefix = `http://json-schema.org/`;
const httpsPrefix = `https://json-schema.org/`;
function normalizeId(id) {
	if (id.startsWith(httpPrefix)) id = httpsPrefix + id.substring(httpPrefix.length);
	try {
		return u.parse(id).toString(true);
	} catch (e) {
		return id;
	}
}
function getSchemaDraftFromId(schemaId) {
	return schemaDraftFromId[normalizeId(schemaId)] ?? void 0;
}
const schemaDraftFromId = {
	"https://json-schema.org/draft-03/schema": SchemaDraft.v3,
	"https://json-schema.org/draft-04/schema": SchemaDraft.v4,
	"https://json-schema.org/draft-06/schema": SchemaDraft.v6,
	"https://json-schema.org/draft-07/schema": SchemaDraft.v7,
	"https://json-schema.org/draft/2019-09/schema": SchemaDraft.v2019_09,
	"https://json-schema.org/draft/2020-12/schema": SchemaDraft.v2020_12
};
var EvaluationContext = class {
	constructor(schemaDraft, activeVocabularies, explicitSchemaDraft) {
		this.schemaDraft = schemaDraft;
		this.activeVocabularies = activeVocabularies;
		this.explicitSchemaDraft = explicitSchemaDraft;
	}
};
var SchemaCollector = class SchemaCollector {
	constructor(focusOffset = -1, exclude) {
		this.focusOffset = focusOffset;
		this.exclude = exclude;
		this.schemas = [];
	}
	add(schema) {
		this.schemas.push(schema);
	}
	merge(other) {
		Array.prototype.push.apply(this.schemas, other.schemas);
	}
	include(node) {
		return (this.focusOffset === -1 || contains(node, this.focusOffset)) && node !== this.exclude;
	}
	newSub() {
		return new SchemaCollector(-1, this.exclude);
	}
};
var NoOpSchemaCollector = class {
	constructor() {}
	get schemas() {
		return [];
	}
	add(_schema) {}
	merge(_other) {}
	include(_node) {
		return true;
	}
	newSub() {
		return this;
	}
};
NoOpSchemaCollector.instance = new NoOpSchemaCollector();
var ValidationResult = class {
	constructor() {
		this.problems = [];
		this.propertiesMatches = 0;
		this.processedProperties = /* @__PURE__ */ new Set();
		this.propertiesValueMatches = 0;
		this.primaryValueMatches = 0;
		this.enumValueMatch = false;
		this.enumValues = void 0;
	}
	hasProblems() {
		return this.problems.some((p) => p.code !== ErrorCode.Deprecated);
	}
	merge(validationResult) {
		this.problems = this.problems.concat(validationResult.problems);
		this.propertiesMatches += validationResult.propertiesMatches;
		this.propertiesValueMatches += validationResult.propertiesValueMatches;
		this.mergeProcessedProperties(validationResult);
	}
	mergeEnumValues(validationResult) {
		if (!this.enumValueMatch && !validationResult.enumValueMatch && this.enumValues && validationResult.enumValues) this.enumValues = this.enumValues.concat(validationResult.enumValues);
	}
	updateEnumMismatchProblemMessages() {
		if (!this.enumValueMatch && this.enumValues) {
			for (const error of this.problems) if (error.code === ErrorCode.EnumValueMismatch) error.message = import_main$2.t("Value is not accepted. Valid values: {0}.", this.enumValues.map((v) => JSON.stringify(v)).join(", "));
		}
	}
	mergePropertyMatch(propertyValidationResult) {
		this.problems = this.problems.concat(propertyValidationResult.problems);
		this.propertiesMatches++;
		if (propertyValidationResult.enumValueMatch || !propertyValidationResult.hasProblems() && propertyValidationResult.propertiesMatches) this.propertiesValueMatches++;
		if (propertyValidationResult.enumValueMatch && propertyValidationResult.enumValues && propertyValidationResult.enumValues.length === 1) this.primaryValueMatches++;
	}
	mergeProcessedProperties(validationResult) {
		validationResult.processedProperties.forEach((p) => this.processedProperties.add(p));
	}
	compare(other) {
		const hasProblems = this.hasProblems();
		if (hasProblems !== other.hasProblems()) return hasProblems ? -1 : 1;
		if (this.enumValueMatch !== other.enumValueMatch) return other.enumValueMatch ? -1 : 1;
		if (this.primaryValueMatches !== other.primaryValueMatches) return this.primaryValueMatches - other.primaryValueMatches;
		if (this.propertiesValueMatches !== other.propertiesValueMatches) return this.propertiesValueMatches - other.propertiesValueMatches;
		return this.propertiesMatches - other.propertiesMatches;
	}
};
function newJSONDocument(root, diagnostics = [], comments = []) {
	return new JSONDocument(root, diagnostics, comments);
}
function getNodeValue(node) {
	return getNodeValue$1(node);
}
function getNodePath(node) {
	return getNodePath$1(node);
}
function contains(node, offset, includeRightBound = false) {
	return offset >= node.offset && offset < node.offset + node.length || includeRightBound && offset === node.offset + node.length;
}
var JSONDocument = class {
	constructor(root, syntaxErrors = [], comments = []) {
		this.root = root;
		this.syntaxErrors = syntaxErrors;
		this.comments = comments;
	}
	getNodeFromOffset(offset, includeRightBound = false) {
		if (this.root) return findNodeAtOffset(this.root, offset, includeRightBound);
	}
	visit(visitor) {
		if (this.root) {
			const doVisit = (node) => {
				let ctn = visitor(node);
				const children = node.children;
				if (Array.isArray(children)) for (let i = 0; i < children.length && ctn; i++) ctn = doVisit(children[i]);
				return ctn;
			};
			doVisit(this.root);
		}
	}
	validate(textDocument, schema, severity = DiagnosticSeverity.Warning, schemaDraft, activeVocabularies) {
		if (this.root && schema) {
			const validationResult = new ValidationResult();
			const { explicitDraft, effectiveDraft } = resolveDrafts(schema, schemaDraft);
			const context = new EvaluationContext(effectiveDraft, activeVocabularies, explicitDraft);
			const schemaStack = [];
			const schemaRoots = [schema];
			validate(this.root, schema, validationResult, NoOpSchemaCollector.instance, context, schemaStack, schemaRoots);
			return validationResult.problems.map((p) => {
				const range = Range.create(textDocument.positionAt(p.location.offset), textDocument.positionAt(p.location.offset + p.location.length));
				return Diagnostic.create(range, p.message, p.severity ?? severity, p.code);
			});
		}
	}
	getMatchingSchemas(schema, focusOffset = -1, exclude, activeVocabularies) {
		if (this.root && schema) {
			const matchingSchemas = new SchemaCollector(focusOffset, exclude);
			const { explicitDraft, effectiveDraft } = resolveDrafts(schema);
			const context = new EvaluationContext(effectiveDraft, activeVocabularies, explicitDraft);
			const schemaStack = [];
			const schemaRoots = [schema];
			validate(this.root, schema, new ValidationResult(), matchingSchemas, context, schemaStack, schemaRoots);
			return matchingSchemas.schemas;
		}
		return [];
	}
};
function resolveDrafts(schema, schemaDraftOverride) {
	const explicitDraft = schemaDraftOverride ?? (schema.$schema ? getSchemaDraftFromId(schema.$schema) : void 0);
	return {
		explicitDraft,
		effectiveDraft: explicitDraft ?? SchemaDraft.v2020_12
	};
}
const keywords201909 = /* @__PURE__ */ new Set([
	"dependentRequired",
	"dependentSchemas",
	"unevaluatedProperties",
	"unevaluatedItems",
	"minContains",
	"maxContains"
]);
function validate(n, schema, validationResult, matchingSchemas, context, schemaStack, schemaRoots) {
	if (!n || !matchingSchemas.include(n)) return;
	if (n.type === "property") return validate(n.valueNode, schema, validationResult, matchingSchemas, context, schemaStack, schemaRoots);
	const node = n;
	if (schema.$recursiveRef) {
		const hasRecursiveAnchor = (s) => s.$recursiveAnchor === true;
		const isSchemaRoot = (s) => s.$id || s.id || s.$originalId;
		const currentResourceRoot = schemaStack.slice().reverse().find(isSchemaRoot);
		const targetSchema = currentResourceRoot && hasRecursiveAnchor(currentResourceRoot) ? schemaStack.find(hasRecursiveAnchor) : currentResourceRoot ?? schemaRoots[0];
		if (targetSchema && targetSchema !== schema) validate(node, targetSchema, validationResult, matchingSchemas, context, schemaStack, schemaRoots);
	}
	const isNewRoot = (schema.$id || schema.id || schema.$originalId) && !schemaRoots.includes(schema);
	if (isNewRoot) schemaRoots.push(schema);
	schemaStack.push(schema);
	const dynamicRefInfo = schema.$dynamicRefInfo;
	const dynamicRefTarget = dynamicRefInfo?.target;
	if (dynamicRefTarget !== void 0) {
		let targetSchema = dynamicRefTarget;
		const dynamicName = dynamicRefInfo?.name;
		if (dynamicName !== void 0 && dynamicRefTarget.$dynamicAnchor === dynamicName) for (const root of schemaRoots) {
			const candidate = root.$anchorMaps?.dynamic.get(dynamicName);
			if (candidate) {
				targetSchema = candidate;
				break;
			}
		}
		if (targetSchema && targetSchema !== schema) validate(node, targetSchema, validationResult, matchingSchemas, context, schemaStack, schemaRoots);
	}
	const enabled = (keyword) => {
		if (keyword === "dependencies") return context.schemaDraft <= SchemaDraft.v7;
		if (keywords201909.has(keyword)) return context.schemaDraft >= SchemaDraft.v2019_09;
		if (keyword === "prefixItems") return context.schemaDraft >= SchemaDraft.v2020_12;
		if (context.schemaDraft >= SchemaDraft.v2019_09 && context.activeVocabularies) return isKeywordEnabled(keyword, context.activeVocabularies);
		return true;
	};
	_validateNode();
	switch (node.type) {
		case "object":
			_validateObjectNode(node);
			break;
		case "array":
			_validateArrayNode(node);
			break;
		case "string":
			_validateStringNode(node);
			break;
		case "number": _validateNumberNode(node);
	}
	matchingSchemas.add({
		node,
		schema
	});
	schemaStack.pop();
	if (isNewRoot) schemaRoots.pop();
	function _validateNode() {
		function matchesType(type) {
			return node.type === type || type === "integer" && node.type === "number" && node.isInteger;
		}
		if (Array.isArray(schema.type) && enabled("type")) {
			if (!schema.type.some(matchesType)) validationResult.problems.push({
				location: {
					offset: node.offset,
					length: node.length
				},
				message: schema.errorMessage || import_main$2.t("Incorrect type. Expected one of {0}.", schema.type.join(", "))
			});
		} else if (schema.type && !Array.isArray(schema.type) && enabled("type")) {
			if (!matchesType(schema.type)) validationResult.problems.push({
				location: {
					offset: node.offset,
					length: node.length
				},
				message: schema.errorMessage || import_main$2.t("Incorrect type. Expected \"{0}\".", schema.type)
			});
		}
		if (Array.isArray(schema.allOf) && enabled("allOf")) for (const subSchemaRef of schema.allOf) {
			const subValidationResult = new ValidationResult();
			const subMatchingSchemas = matchingSchemas.newSub();
			validate(node, asSchema(subSchemaRef), subValidationResult, subMatchingSchemas, context, schemaStack, schemaRoots);
			validationResult.merge(subValidationResult);
			matchingSchemas.merge(subMatchingSchemas);
		}
		const notSchema = asSchema(schema.not);
		if (notSchema && enabled("not")) {
			const subValidationResult = new ValidationResult();
			const subMatchingSchemas = matchingSchemas.newSub();
			validate(node, notSchema, subValidationResult, subMatchingSchemas, context, schemaStack, schemaRoots);
			if (!subValidationResult.hasProblems()) validationResult.problems.push({
				location: {
					offset: node.offset,
					length: node.length
				},
				message: schema.errorMessage || import_main$2.t("Matches a schema that is not allowed.")
			});
			for (const ms of subMatchingSchemas.schemas) {
				ms.inverted = !ms.inverted;
				matchingSchemas.add(ms);
			}
		}
		const testAlternatives = (alternatives, maxOneMatch) => {
			const matches = [];
			const alternativesToTest = _tryDiscriminatorOptimization(alternatives) ?? alternatives;
			let bestMatch = void 0;
			for (const subSchemaRef of alternativesToTest) {
				const subSchema = asSchema(subSchemaRef);
				const subValidationResult = new ValidationResult();
				const subMatchingSchemas = matchingSchemas.newSub();
				validate(node, subSchema, subValidationResult, subMatchingSchemas, context, schemaStack, schemaRoots);
				if (!subValidationResult.hasProblems()) matches.push(subSchema);
				if (!bestMatch) bestMatch = {
					schema: subSchema,
					validationResult: subValidationResult,
					matchingSchemas: subMatchingSchemas
				};
				else if (!maxOneMatch && !subValidationResult.hasProblems() && !bestMatch.validationResult.hasProblems()) {
					bestMatch.matchingSchemas.merge(subMatchingSchemas);
					bestMatch.validationResult.propertiesMatches += subValidationResult.propertiesMatches;
					bestMatch.validationResult.propertiesValueMatches += subValidationResult.propertiesValueMatches;
					bestMatch.validationResult.mergeProcessedProperties(subValidationResult);
				} else {
					const compareResult = subValidationResult.compare(bestMatch.validationResult);
					if (compareResult > 0) bestMatch = {
						schema: subSchema,
						validationResult: subValidationResult,
						matchingSchemas: subMatchingSchemas
					};
					else if (compareResult === 0) {
						bestMatch.matchingSchemas.merge(subMatchingSchemas);
						bestMatch.validationResult.mergeEnumValues(subValidationResult);
					}
				}
			}
			if (matches.length > 1 && maxOneMatch) validationResult.problems.push({
				location: {
					offset: node.offset,
					length: 1
				},
				message: import_main$2.t("Matches multiple schemas when only one must validate.")
			});
			if (bestMatch) {
				bestMatch.validationResult.updateEnumMismatchProblemMessages();
				validationResult.merge(bestMatch.validationResult);
				matchingSchemas.merge(bestMatch.matchingSchemas);
			}
			return matches.length;
		};
		if (Array.isArray(schema.anyOf) && enabled("anyOf")) testAlternatives(schema.anyOf, false);
		if (Array.isArray(schema.oneOf) && enabled("oneOf")) testAlternatives(schema.oneOf, true);
		const testBranch = (schema) => {
			const subValidationResult = new ValidationResult();
			const subMatchingSchemas = matchingSchemas.newSub();
			validate(node, asSchema(schema), subValidationResult, subMatchingSchemas, context, schemaStack, schemaRoots);
			validationResult.merge(subValidationResult);
			matchingSchemas.merge(subMatchingSchemas);
		};
		const testCondition = (ifSchema, thenSchema, elseSchema) => {
			const subSchema = asSchema(ifSchema);
			const subValidationResult = new ValidationResult();
			const subMatchingSchemas = matchingSchemas.newSub();
			validate(node, subSchema, subValidationResult, subMatchingSchemas, context, schemaStack, schemaRoots);
			matchingSchemas.merge(subMatchingSchemas);
			if (!subValidationResult.hasProblems()) {
				validationResult.mergeProcessedProperties(subValidationResult);
				if (thenSchema) testBranch(thenSchema);
			} else if (elseSchema) testBranch(elseSchema);
		};
		const ifSchema = asSchema(schema.if);
		if (ifSchema && enabled("if")) testCondition(ifSchema, asSchema(schema.then), asSchema(schema.else));
		if (Array.isArray(schema.enum) && enabled("enum")) {
			const val = getNodeValue(node);
			let enumValueMatch = false;
			for (const e of schema.enum) if (equals(val, e)) {
				enumValueMatch = true;
				break;
			}
			validationResult.enumValues = schema.enum;
			validationResult.enumValueMatch = enumValueMatch;
			if (!enumValueMatch) validationResult.problems.push({
				location: {
					offset: node.offset,
					length: node.length
				},
				code: ErrorCode.EnumValueMismatch,
				message: schema.errorMessage || import_main$2.t("Value is not accepted. Valid values: {0}.", schema.enum.map((v) => JSON.stringify(v)).join(", "))
			});
		}
		if (isDefined(schema.const) && enabled("const")) {
			if (!equals(getNodeValue(node), schema.const)) {
				validationResult.problems.push({
					location: {
						offset: node.offset,
						length: node.length
					},
					code: ErrorCode.EnumValueMismatch,
					message: schema.errorMessage || import_main$2.t("Value must be {0}.", JSON.stringify(schema.const))
				});
				validationResult.enumValueMatch = false;
			} else validationResult.enumValueMatch = true;
			validationResult.enumValues = [schema.const];
		}
		let deprecationMessage = schema.deprecationMessage;
		if (deprecationMessage || schema.deprecated) {
			deprecationMessage = deprecationMessage || import_main$2.t("Value is deprecated");
			let targetNode = node.parent?.type === "property" ? node.parent : node;
			validationResult.problems.push({
				location: {
					offset: targetNode.offset,
					length: targetNode.length
				},
				severity: DiagnosticSeverity.Warning,
				message: deprecationMessage,
				code: ErrorCode.Deprecated
			});
		}
	}
	function _tryDiscriminatorOptimization(alternatives) {
		if (alternatives.length < 2) return;
		const buildConstMap = (getSchemas) => {
			const constMap = /* @__PURE__ */ new Map();
			for (let i = 0; i < alternatives.length; i++) {
				const schemas = getSchemas(asSchema(alternatives[i]), i);
				if (!schemas) return;
				schemas.forEach(([key, schema]) => {
					if (schema.const !== void 0) {
						if (!constMap.has(key)) constMap.set(key, /* @__PURE__ */ new Map());
						const valueMap = constMap.get(key);
						if (!valueMap.has(schema.const)) valueMap.set(schema.const, []);
						valueMap.get(schema.const).push(i);
					} else if (schema.enum && Array.isArray(schema.enum)) for (const enumValue of schema.enum) {
						if (!constMap.has(key)) constMap.set(key, /* @__PURE__ */ new Map());
						const valueMap = constMap.get(key);
						if (!valueMap.has(enumValue)) valueMap.set(enumValue, []);
						valueMap.get(enumValue).push(i);
					}
				});
			}
			return constMap;
		};
		const findDiscriminator = (constMap, getValue) => {
			for (const [key, valueMap] of constMap) {
				const coveredAlts = /* @__PURE__ */ new Set();
				valueMap.forEach((indices) => indices.forEach((idx) => coveredAlts.add(idx)));
				if (coveredAlts.size === alternatives.length) {
					const discriminatorValue = getValue(key);
					const matchingIndices = valueMap.get(discriminatorValue);
					if (matchingIndices?.length) return matchingIndices.map((idx) => alternatives[idx]);
					break;
				}
			}
		};
		if (node.type === "object" && node.properties?.length) {
			const constMap = buildConstMap((schema) => schema.properties ? Object.entries(schema.properties).map(([k, v]) => [k, asSchema(v)]) : void 0);
			if (constMap) return findDiscriminator(constMap, (propName) => {
				const prop = node.properties.find((p) => p.keyNode.value === propName);
				return prop?.valueNode?.type === "string" ? prop.valueNode.value : void 0;
			});
		} else if (node.type === "array" && node.items?.length) {
			const constMap = buildConstMap((schema) => {
				const itemSchemas = schema.prefixItems || (Array.isArray(schema.items) ? schema.items : void 0);
				return itemSchemas ? itemSchemas.map((item, idx) => [idx, asSchema(item)]) : void 0;
			});
			if (constMap) return findDiscriminator(constMap, (itemIndex) => {
				const item = node.items[itemIndex];
				return item?.type === "string" ? item.value : void 0;
			});
		}
	}
	function _validateNumberNode(node) {
		const val = node.value;
		function normalizeFloats(float) {
			const parts = /^(-?\d+)(?:\.(\d+))?(?:e([-+]\d+))?$/.exec(float.toString());
			return parts && {
				value: Number(parts[1] + (parts[2] || "")),
				multiplier: (parts[2]?.length || 0) - (parseInt(parts[3]) || 0)
			};
		}
		if (isNumber(schema.multipleOf) && enabled("multipleOf")) {
			let remainder = -1;
			if (Number.isInteger(schema.multipleOf)) remainder = val % schema.multipleOf;
			else {
				let normMultipleOf = normalizeFloats(schema.multipleOf);
				let normValue = normalizeFloats(val);
				if (normMultipleOf && normValue) {
					const multiplier = 10 ** Math.abs(normValue.multiplier - normMultipleOf.multiplier);
					if (normValue.multiplier < normMultipleOf.multiplier) normValue.value *= multiplier;
					else normMultipleOf.value *= multiplier;
					remainder = normValue.value % normMultipleOf.value;
				}
			}
			if (remainder !== 0) validationResult.problems.push({
				location: {
					offset: node.offset,
					length: node.length
				},
				message: import_main$2.t("Value is not divisible by {0}.", schema.multipleOf)
			});
		}
		function getExclusiveLimit(limit, exclusive) {
			if (isNumber(exclusive)) return exclusive;
			if (isBoolean(exclusive) && exclusive) return limit;
		}
		function getLimit(limit, exclusive) {
			if (!isBoolean(exclusive) || !exclusive) return limit;
		}
		const exclusiveMinimum = getExclusiveLimit(schema.minimum, schema.exclusiveMinimum);
		if (isNumber(exclusiveMinimum) && val <= exclusiveMinimum && enabled("exclusiveMinimum")) validationResult.problems.push({
			location: {
				offset: node.offset,
				length: node.length
			},
			message: import_main$2.t("Value is below the exclusive minimum of {0}.", exclusiveMinimum)
		});
		const exclusiveMaximum = getExclusiveLimit(schema.maximum, schema.exclusiveMaximum);
		if (isNumber(exclusiveMaximum) && val >= exclusiveMaximum && enabled("exclusiveMaximum")) validationResult.problems.push({
			location: {
				offset: node.offset,
				length: node.length
			},
			message: import_main$2.t("Value is above the exclusive maximum of {0}.", exclusiveMaximum)
		});
		const minimum = getLimit(schema.minimum, schema.exclusiveMinimum);
		if (isNumber(minimum) && val < minimum && enabled("minimum")) validationResult.problems.push({
			location: {
				offset: node.offset,
				length: node.length
			},
			message: import_main$2.t("Value is below the minimum of {0}.", minimum)
		});
		const maximum = getLimit(schema.maximum, schema.exclusiveMaximum);
		if (isNumber(maximum) && val > maximum && enabled("maximum")) validationResult.problems.push({
			location: {
				offset: node.offset,
				length: node.length
			},
			message: import_main$2.t("Value is above the maximum of {0}.", maximum)
		});
	}
	function _validateStringNode(node) {
		if (isNumber(schema.minLength) && stringLength(node.value) < schema.minLength && enabled("minLength")) validationResult.problems.push({
			location: {
				offset: node.offset,
				length: node.length
			},
			message: import_main$2.t("String is shorter than the minimum length of {0}.", schema.minLength)
		});
		if (isNumber(schema.maxLength) && stringLength(node.value) > schema.maxLength && enabled("maxLength")) validationResult.problems.push({
			location: {
				offset: node.offset,
				length: node.length
			},
			message: import_main$2.t("String is longer than the maximum length of {0}.", schema.maxLength)
		});
		if (isString(schema.pattern) && enabled("pattern")) {
			const regex = extendedRegExp(schema.pattern);
			if (regex && !regex.test(node.value)) validationResult.problems.push({
				location: {
					offset: node.offset,
					length: node.length
				},
				message: schema.patternErrorMessage || schema.errorMessage || import_main$2.t("String does not match the pattern of \"{0}\".", schema.pattern)
			});
		}
		if (schema.format && enabled("format") && isFormatAssertionEnabled(context.activeVocabularies, context.explicitSchemaDraft)) switch (schema.format) {
			case "uri":
			case "uri-reference":
				{
					let errorMessage;
					if (!node.value) errorMessage = import_main$2.t("URI expected.");
					else {
						const match = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/.exec(node.value);
						if (!match) errorMessage = import_main$2.t("URI is expected.");
						else if (!match[2] && schema.format === "uri") errorMessage = import_main$2.t("URI with a scheme is expected.");
					}
					if (errorMessage) validationResult.problems.push({
						location: {
							offset: node.offset,
							length: node.length
						},
						message: schema.patternErrorMessage || schema.errorMessage || import_main$2.t("String is not a URI: {0}", errorMessage)
					});
				}
				break;
			case "color-hex":
			case "date-time":
			case "date":
			case "time":
			case "duration":
			case "uuid":
			case "email":
			case "hostname":
			case "ipv4":
			case "ipv6":
				const format = formats[schema.format];
				if (!node.value || !format.pattern.exec(node.value)) validationResult.problems.push({
					location: {
						offset: node.offset,
						length: node.length
					},
					message: schema.patternErrorMessage || schema.errorMessage || format.errorMessage
				});
		}
	}
	function _validateArrayNode(node) {
		let prefixItemsSchemas;
		let additionalItemSchema;
		if (context.schemaDraft >= SchemaDraft.v2020_12) {
			prefixItemsSchemas = schema.prefixItems;
			additionalItemSchema = !Array.isArray(schema.items) ? schema.items : void 0;
		} else {
			prefixItemsSchemas = Array.isArray(schema.items) ? schema.items : void 0;
			additionalItemSchema = !Array.isArray(schema.items) ? schema.items : schema.additionalItems;
		}
		let index = 0;
		if (prefixItemsSchemas !== void 0) {
			const max = Math.min(prefixItemsSchemas.length, node.items.length);
			for (; index < max; index++) {
				const subSchemaRef = prefixItemsSchemas[index];
				const subSchema = asSchema(subSchemaRef);
				const itemValidationResult = new ValidationResult();
				const item = node.items[index];
				if (item) {
					validate(item, subSchema, itemValidationResult, matchingSchemas, context, schemaStack, schemaRoots);
					validationResult.mergePropertyMatch(itemValidationResult);
				}
				validationResult.processedProperties.add(String(index));
			}
		}
		if (additionalItemSchema !== void 0 && index < node.items.length) {
			if (typeof additionalItemSchema === "boolean") {
				if (additionalItemSchema === false) validationResult.problems.push({
					location: {
						offset: node.offset,
						length: node.length
					},
					message: import_main$2.t("Array has too many items according to schema. Expected {0} or fewer.", index)
				});
				for (; index < node.items.length; index++) {
					validationResult.processedProperties.add(String(index));
					validationResult.propertiesValueMatches++;
				}
			} else for (; index < node.items.length; index++) {
				const itemValidationResult = new ValidationResult();
				validate(node.items[index], additionalItemSchema, itemValidationResult, matchingSchemas, context, schemaStack, schemaRoots);
				validationResult.mergePropertyMatch(itemValidationResult);
				validationResult.processedProperties.add(String(index));
			}
		}
		const containsSchema = asSchema(schema.contains);
		if (containsSchema && enabled("contains")) {
			let containsCount = 0;
			for (let index = 0; index < node.items.length; index++) {
				const item = node.items[index];
				const itemValidationResult = new ValidationResult();
				validate(item, containsSchema, itemValidationResult, NoOpSchemaCollector.instance, context, schemaStack, schemaRoots);
				if (!itemValidationResult.hasProblems()) {
					containsCount++;
					if (context.schemaDraft >= SchemaDraft.v2020_12) validationResult.processedProperties.add(String(index));
				}
			}
			if (containsCount === 0 && !isNumber(schema.minContains)) validationResult.problems.push({
				location: {
					offset: node.offset,
					length: node.length
				},
				message: schema.errorMessage || import_main$2.t("Array does not contain required item.")
			});
			if (isNumber(schema.minContains) && containsCount < schema.minContains && enabled("minContains")) validationResult.problems.push({
				location: {
					offset: node.offset,
					length: node.length
				},
				message: schema.errorMessage || import_main$2.t("Array has too few items that match the contains contraint. Expected {0} or more.", schema.minContains)
			});
			if (isNumber(schema.maxContains) && containsCount > schema.maxContains && enabled("maxContains")) validationResult.problems.push({
				location: {
					offset: node.offset,
					length: node.length
				},
				message: schema.errorMessage || import_main$2.t("Array has too many items that match the contains contraint. Expected {0} or less.", schema.maxContains)
			});
		}
		const unevaluatedItems = schema.unevaluatedItems;
		if (unevaluatedItems !== void 0 && enabled("unevaluatedItems")) for (let i = 0; i < node.items.length; i++) {
			if (!validationResult.processedProperties.has(String(i))) {
				if (unevaluatedItems === false) validationResult.problems.push({
					location: {
						offset: node.offset,
						length: node.length
					},
					message: import_main$2.t("Item does not match any validation rule from the array.")
				});
				else {
					const itemValidationResult = new ValidationResult();
					validate(node.items[i], schema.unevaluatedItems, itemValidationResult, matchingSchemas, context, schemaStack, schemaRoots);
					validationResult.mergePropertyMatch(itemValidationResult);
				}
			}
			validationResult.processedProperties.add(String(i));
			validationResult.propertiesValueMatches++;
		}
		if (isNumber(schema.minItems) && node.items.length < schema.minItems && enabled("minItems")) validationResult.problems.push({
			location: {
				offset: node.offset,
				length: node.length
			},
			message: import_main$2.t("Array has too few items. Expected {0} or more.", schema.minItems)
		});
		if (isNumber(schema.maxItems) && node.items.length > schema.maxItems && enabled("maxItems")) validationResult.problems.push({
			location: {
				offset: node.offset,
				length: node.length
			},
			message: import_main$2.t("Array has too many items. Expected {0} or fewer.", schema.maxItems)
		});
		if (schema.uniqueItems === true && enabled("uniqueItems")) {
			const values = getNodeValue(node);
			function hasDuplicates() {
				for (let i = 0; i < values.length - 1; i++) {
					const value = values[i];
					for (let j = i + 1; j < values.length; j++) if (equals(value, values[j])) return true;
				}
				return false;
			}
			if (hasDuplicates()) validationResult.problems.push({
				location: {
					offset: node.offset,
					length: node.length
				},
				message: import_main$2.t("Array has duplicate items.")
			});
		}
	}
	function _validateObjectNode(node) {
		const seenKeys = Object.create(null);
		const unprocessedProperties = /* @__PURE__ */ new Set();
		for (const propertyNode of node.properties) {
			const key = propertyNode.keyNode.value;
			seenKeys[key] = propertyNode.valueNode;
			unprocessedProperties.add(key);
		}
		if (Array.isArray(schema.required) && enabled("required")) {
			for (const propertyName of schema.required) if (!seenKeys[propertyName]) validationResult.problems.push({
				location: {
					offset: node.offset,
					length: node.length
				},
				message: import_main$2.t("Missing property \"{0}\".", propertyName)
			});
		}
		const propertyProcessed = (prop) => {
			unprocessedProperties.delete(prop);
			validationResult.processedProperties.add(prop);
		};
		if (schema.properties && enabled("properties")) for (const propertyName of Object.keys(schema.properties)) {
			propertyProcessed(propertyName);
			const propertySchema = schema.properties[propertyName];
			const child = seenKeys[propertyName];
			if (child) {
				if (isBoolean(propertySchema)) {
					if (!propertySchema) {
						const propertyNode = child.parent;
						validationResult.problems.push({
							location: {
								offset: propertyNode.keyNode.offset,
								length: propertyNode.keyNode.length
							},
							message: schema.errorMessage || import_main$2.t("Property {0} is not allowed.", propertyName)
						});
					} else {
						validationResult.propertiesMatches++;
						validationResult.propertiesValueMatches++;
					}
				} else {
					const propertyValidationResult = new ValidationResult();
					validate(child, propertySchema, propertyValidationResult, matchingSchemas, context, schemaStack, schemaRoots);
					validationResult.mergePropertyMatch(propertyValidationResult);
				}
			}
		}
		if (schema.patternProperties && enabled("patternProperties")) {
			const allPropertyNames = Object.keys(seenKeys);
			const patternPropertyMatches = /* @__PURE__ */ new Set();
			for (const propertyPattern of Object.keys(schema.patternProperties)) {
				const regex = extendedRegExp(propertyPattern);
				if (regex) {
					for (const propertyName of allPropertyNames) if (regex.test(propertyName)) {
						if (unprocessedProperties.has(propertyName)) patternPropertyMatches.add(propertyName);
						const child = seenKeys[propertyName];
						if (child) {
							const propertySchema = schema.patternProperties[propertyPattern];
							if (isBoolean(propertySchema)) {
								if (!propertySchema) {
									const propertyNode = child.parent;
									validationResult.problems.push({
										location: {
											offset: propertyNode.keyNode.offset,
											length: propertyNode.keyNode.length
										},
										message: schema.errorMessage || import_main$2.t("Property {0} is not allowed.", propertyName)
									});
								} else {
									validationResult.propertiesMatches++;
									validationResult.propertiesValueMatches++;
								}
							} else {
								const propertyValidationResult = new ValidationResult();
								validate(child, propertySchema, propertyValidationResult, matchingSchemas, context, schemaStack, schemaRoots);
								validationResult.mergePropertyMatch(propertyValidationResult);
							}
						}
					}
				}
			}
			patternPropertyMatches.forEach(propertyProcessed);
		}
		const additionalProperties = schema.additionalProperties;
		if (additionalProperties !== void 0 && enabled("additionalProperties")) for (const propertyName of unprocessedProperties) {
			propertyProcessed(propertyName);
			const child = seenKeys[propertyName];
			if (child) {
				if (additionalProperties === false) {
					const propertyNode = child.parent;
					validationResult.problems.push({
						location: {
							offset: propertyNode.keyNode.offset,
							length: propertyNode.keyNode.length
						},
						message: schema.errorMessage || import_main$2.t("Property {0} is not allowed.", propertyName)
					});
				} else if (additionalProperties !== true) {
					const propertyValidationResult = new ValidationResult();
					validate(child, additionalProperties, propertyValidationResult, matchingSchemas, context, schemaStack, schemaRoots);
					validationResult.mergePropertyMatch(propertyValidationResult);
				}
			}
		}
		if (schema.dependentRequired && enabled("dependentRequired")) for (const key in schema.dependentRequired) {
			const prop = seenKeys[key];
			const propertyDeps = schema.dependentRequired[key];
			if (prop && Array.isArray(propertyDeps)) _validatePropertyDependencies(key, propertyDeps);
		}
		if (schema.dependentSchemas && enabled("dependentSchemas")) for (const key in schema.dependentSchemas) {
			const prop = seenKeys[key];
			const propertyDeps = schema.dependentSchemas[key];
			if (prop) _validatePropertyDependencies(key, propertyDeps);
		}
		const unevaluatedProperties = schema.unevaluatedProperties;
		if (unevaluatedProperties !== void 0 && enabled("unevaluatedProperties")) {
			const processed = [];
			for (const propertyName of unprocessedProperties) if (!validationResult.processedProperties.has(propertyName)) {
				processed.push(propertyName);
				const child = seenKeys[propertyName];
				if (child) {
					if (unevaluatedProperties === false) {
						const propertyNode = child.parent;
						validationResult.problems.push({
							location: {
								offset: propertyNode.keyNode.offset,
								length: propertyNode.keyNode.length
							},
							message: schema.errorMessage || import_main$2.t("Property {0} is not allowed.", propertyName)
						});
					} else if (unevaluatedProperties !== true) {
						const propertyValidationResult = new ValidationResult();
						validate(child, unevaluatedProperties, propertyValidationResult, matchingSchemas, context, schemaStack, schemaRoots);
						validationResult.mergePropertyMatch(propertyValidationResult);
					}
				}
			}
			processed.forEach(propertyProcessed);
		}
		if (isNumber(schema.maxProperties) && enabled("maxProperties")) {
			if (node.properties.length > schema.maxProperties) validationResult.problems.push({
				location: {
					offset: node.offset,
					length: node.length
				},
				message: import_main$2.t("Object has more properties than limit of {0}.", schema.maxProperties)
			});
		}
		if (isNumber(schema.minProperties) && enabled("minProperties")) {
			if (node.properties.length < schema.minProperties) validationResult.problems.push({
				location: {
					offset: node.offset,
					length: node.length
				},
				message: import_main$2.t("Object has fewer properties than the required number of {0}", schema.minProperties)
			});
		}
		if (schema.dependencies && enabled("dependencies")) {
			for (const key in schema.dependencies) if (seenKeys[key]) _validatePropertyDependencies(key, schema.dependencies[key]);
		}
		const propertyNames = asSchema(schema.propertyNames);
		if (propertyNames && enabled("propertyNames")) for (const f of node.properties) {
			const key = f.keyNode;
			if (key) validate(key, propertyNames, validationResult, matchingSchemas, context, schemaStack, schemaRoots);
		}
		function _validatePropertyDependencies(key, propertyDep) {
			if (Array.isArray(propertyDep)) for (const requiredProp of propertyDep) if (!seenKeys[requiredProp]) validationResult.problems.push({
				location: {
					offset: node.offset,
					length: node.length
				},
				message: import_main$2.t("Object is missing property {0} required by property {1}.", requiredProp, key)
			});
			else validationResult.propertiesValueMatches++;
			else {
				const propertySchema = asSchema(propertyDep);
				if (propertySchema) {
					const propertyValidationResult = new ValidationResult();
					validate(node, propertySchema, propertyValidationResult, matchingSchemas, context, schemaStack, schemaRoots);
					validationResult.mergePropertyMatch(propertyValidationResult);
					validationResult.mergeProcessedProperties(propertyValidationResult);
				}
			}
		}
	}
}
function parse(textDocument, config) {
	const problems = [];
	let lastProblemOffset = -1;
	const text = textDocument.getText();
	const scanner = createScanner(text, false);
	const commentRanges = config && config.collectComments ? [] : void 0;
	function _scanNext() {
		while (true) {
			const token = scanner.scan();
			_checkScanError();
			switch (token) {
				case 12:
				case 13:
					if (Array.isArray(commentRanges)) commentRanges.push(Range.create(textDocument.positionAt(scanner.getTokenOffset()), textDocument.positionAt(scanner.getTokenOffset() + scanner.getTokenLength())));
					break;
				case 15:
				case 14: break;
				default: return token;
			}
		}
	}
	function _errorAtRange(message, code, startOffset, endOffset, severity = DiagnosticSeverity.Error) {
		if (problems.length === 0 || startOffset !== lastProblemOffset) {
			const range = Range.create(textDocument.positionAt(startOffset), textDocument.positionAt(endOffset));
			problems.push(Diagnostic.create(range, message, severity, code, textDocument.languageId));
			lastProblemOffset = startOffset;
		}
	}
	function _error(message, code, node = void 0, skipUntilAfter = [], skipUntil = []) {
		let start = scanner.getTokenOffset();
		let end = scanner.getTokenOffset() + scanner.getTokenLength();
		if (start === end && start > 0) {
			start--;
			while (start > 0 && /\s/.test(text.charAt(start))) start--;
			end = start + 1;
		}
		_errorAtRange(message, code, start, end);
		if (node) _finalize(node, false);
		if (skipUntilAfter.length + skipUntil.length > 0) {
			let token = scanner.getToken();
			while (token !== 17) {
				if (skipUntilAfter.indexOf(token) !== -1) {
					_scanNext();
					break;
				} else if (skipUntil.indexOf(token) !== -1) break;
				token = _scanNext();
			}
		}
		return node;
	}
	function _checkScanError() {
		switch (scanner.getTokenError()) {
			case 4:
				_error(import_main$2.t("Invalid unicode sequence in string."), ErrorCode.InvalidUnicode);
				return true;
			case 5:
				_error(import_main$2.t("Invalid escape character in string."), ErrorCode.InvalidEscapeCharacter);
				return true;
			case 3:
				_error(import_main$2.t("Unexpected end of number."), ErrorCode.UnexpectedEndOfNumber);
				return true;
			case 1:
				_error(import_main$2.t("Unexpected end of comment."), ErrorCode.UnexpectedEndOfComment);
				return true;
			case 2:
				_error(import_main$2.t("Unexpected end of string."), ErrorCode.UnexpectedEndOfString);
				return true;
			case 6:
				_error(import_main$2.t("Invalid characters in string. Control characters must be escaped."), ErrorCode.InvalidCharacter);
				return true;
		}
		return false;
	}
	function _finalize(node, scanNext) {
		node.length = scanner.getTokenOffset() + scanner.getTokenLength() - node.offset;
		if (scanNext) _scanNext();
		return node;
	}
	function _parseArray(parent) {
		if (scanner.getToken() !== 3) return;
		const node = new ArrayASTNodeImpl(parent, scanner.getTokenOffset());
		_scanNext();
		let needsComma = false;
		while (scanner.getToken() !== 4 && scanner.getToken() !== 17) {
			if (scanner.getToken() === 5) {
				if (!needsComma) _error(import_main$2.t("Value expected"), ErrorCode.ValueExpected);
				const commaOffset = scanner.getTokenOffset();
				_scanNext();
				if (scanner.getToken() === 4) {
					if (needsComma) _errorAtRange(import_main$2.t("Trailing comma"), ErrorCode.TrailingComma, commaOffset, commaOffset + 1);
					continue;
				}
			} else if (needsComma) _error(import_main$2.t("Expected comma"), ErrorCode.CommaExpected);
			const item = _parseValue(node);
			if (!item) _error(import_main$2.t("Value expected"), ErrorCode.ValueExpected, void 0, [], [4, 5]);
			else node.items.push(item);
			needsComma = true;
		}
		if (scanner.getToken() !== 4) return _error(import_main$2.t("Expected comma or closing bracket"), ErrorCode.CommaOrCloseBacketExpected, node);
		return _finalize(node, true);
	}
	const keyPlaceholder = new StringASTNodeImpl(void 0, 0, 0);
	function _parseProperty(parent, keysSeen) {
		const node = new PropertyASTNodeImpl(parent, scanner.getTokenOffset(), keyPlaceholder);
		let key = _parseString(node);
		if (!key) {
			if (scanner.getToken() === 16) {
				_error(import_main$2.t("Property keys must be doublequoted"), ErrorCode.PropertyKeysMustBeDoublequoted);
				const keyNode = new StringASTNodeImpl(node, scanner.getTokenOffset(), scanner.getTokenLength());
				keyNode.value = scanner.getTokenValue();
				key = keyNode;
				_scanNext();
			} else return;
		}
		node.keyNode = key;
		if (key.value !== "//") {
			const seen = keysSeen[key.value];
			if (seen) {
				_errorAtRange(import_main$2.t("Duplicate object key"), ErrorCode.DuplicateKey, node.keyNode.offset, node.keyNode.offset + node.keyNode.length, DiagnosticSeverity.Warning);
				if (isObject(seen)) _errorAtRange(import_main$2.t("Duplicate object key"), ErrorCode.DuplicateKey, seen.keyNode.offset, seen.keyNode.offset + seen.keyNode.length, DiagnosticSeverity.Warning);
				keysSeen[key.value] = true;
			} else keysSeen[key.value] = node;
		}
		if (scanner.getToken() === 6) {
			node.colonOffset = scanner.getTokenOffset();
			_scanNext();
		} else {
			_error(import_main$2.t("Colon expected"), ErrorCode.ColonExpected);
			if (scanner.getToken() === 10 && textDocument.positionAt(key.offset + key.length).line < textDocument.positionAt(scanner.getTokenOffset()).line) {
				node.length = key.length;
				return node;
			}
		}
		const value = _parseValue(node);
		if (!value) return _error(import_main$2.t("Value expected"), ErrorCode.ValueExpected, node, [], [2, 5]);
		node.valueNode = value;
		node.length = value.offset + value.length - node.offset;
		return node;
	}
	function _parseObject(parent) {
		if (scanner.getToken() !== 1) return;
		const node = new ObjectASTNodeImpl(parent, scanner.getTokenOffset());
		const keysSeen = Object.create(null);
		_scanNext();
		let needsComma = false;
		while (scanner.getToken() !== 2 && scanner.getToken() !== 17) {
			if (scanner.getToken() === 5) {
				if (!needsComma) _error(import_main$2.t("Property expected"), ErrorCode.PropertyExpected);
				const commaOffset = scanner.getTokenOffset();
				_scanNext();
				if (scanner.getToken() === 2) {
					if (needsComma) _errorAtRange(import_main$2.t("Trailing comma"), ErrorCode.TrailingComma, commaOffset, commaOffset + 1);
					continue;
				}
			} else if (needsComma) _error(import_main$2.t("Expected comma"), ErrorCode.CommaExpected);
			const property = _parseProperty(node, keysSeen);
			if (!property) _error(import_main$2.t("Property expected"), ErrorCode.PropertyExpected, void 0, [], [2, 5]);
			else node.properties.push(property);
			needsComma = true;
		}
		if (scanner.getToken() !== 2) return _error(import_main$2.t("Expected comma or closing brace"), ErrorCode.CommaOrCloseBraceExpected, node);
		return _finalize(node, true);
	}
	function _parseString(parent) {
		if (scanner.getToken() !== 10) return;
		const node = new StringASTNodeImpl(parent, scanner.getTokenOffset());
		node.value = scanner.getTokenValue();
		return _finalize(node, true);
	}
	function _parseNumber(parent) {
		if (scanner.getToken() !== 11) return;
		const node = new NumberASTNodeImpl(parent, scanner.getTokenOffset());
		if (scanner.getTokenError() === 0) {
			const tokenValue = scanner.getTokenValue();
			try {
				const numberValue = JSON.parse(tokenValue);
				if (!isNumber(numberValue)) return _error(import_main$2.t("Invalid number format."), ErrorCode.Undefined, node);
				node.value = numberValue;
			} catch (e) {
				return _error(import_main$2.t("Invalid number format."), ErrorCode.Undefined, node);
			}
			node.isInteger = tokenValue.indexOf(".") === -1;
		}
		return _finalize(node, true);
	}
	function _parseLiteral(parent) {
		switch (scanner.getToken()) {
			case 7: return _finalize(new NullASTNodeImpl(parent, scanner.getTokenOffset()), true);
			case 8: return _finalize(new BooleanASTNodeImpl(parent, true, scanner.getTokenOffset()), true);
			case 9: return _finalize(new BooleanASTNodeImpl(parent, false, scanner.getTokenOffset()), true);
			default: return;
		}
	}
	function _parseValue(parent) {
		return _parseArray(parent) || _parseObject(parent) || _parseString(parent) || _parseNumber(parent) || _parseLiteral(parent);
	}
	let _root = void 0;
	if (_scanNext() !== 17) {
		_root = _parseValue(_root);
		if (!_root) _error(import_main$2.t("Expected a JSON object, array or literal."), ErrorCode.Undefined);
		else if (scanner.getToken() !== 17) _error(import_main$2.t("End of file expected."), ErrorCode.Undefined);
	}
	return new JSONDocument(_root, problems, commentRanges);
}
//#endregion
//#region servers/json/node_modules/vscode-json-languageservice/lib/esm/utils/json.js
function stringifyObject(obj, indent, stringifyLiteral) {
	if (obj !== null && typeof obj === "object") {
		const newIndent = indent + "	";
		if (Array.isArray(obj)) {
			if (obj.length === 0) return "[]";
			let result = "[\n";
			for (let i = 0; i < obj.length; i++) {
				result += newIndent + stringifyObject(obj[i], newIndent, stringifyLiteral);
				if (i < obj.length - 1) result += ",";
				result += "\n";
			}
			result += indent + "]";
			return result;
		} else {
			const keys = Object.keys(obj);
			if (keys.length === 0) return "{}";
			let result = "{\n";
			for (let i = 0; i < keys.length; i++) {
				const key = keys[i];
				result += newIndent + JSON.stringify(key) + ": " + stringifyObject(obj[key], newIndent, stringifyLiteral);
				if (i < keys.length - 1) result += ",";
				result += "\n";
			}
			result += indent + "}";
			return result;
		}
	}
	return stringifyLiteral(obj);
}
//#endregion
//#region servers/json/node_modules/vscode-json-languageservice/lib/esm/services/jsonCompletion.js
var JSONCompletion = class {
	constructor(schemaService, contributions = [], promiseConstructor = Promise, clientCapabilities = {}) {
		this.schemaService = schemaService;
		this.contributions = contributions;
		this.promiseConstructor = promiseConstructor;
		this.clientCapabilities = clientCapabilities;
	}
	doResolve(item) {
		for (let i = this.contributions.length - 1; i >= 0; i--) {
			const resolveCompletion = this.contributions[i].resolveCompletion;
			if (resolveCompletion) {
				const resolver = resolveCompletion(item);
				if (resolver) return resolver;
			}
		}
		return this.promiseConstructor.resolve(item);
	}
	doComplete(document, position, doc) {
		const result = {
			items: [],
			isIncomplete: false
		};
		const text = document.getText();
		const offset = document.offsetAt(position);
		let node = doc.getNodeFromOffset(offset, true);
		if (this.isInComment(document, node ? node.offset : 0, offset)) return Promise.resolve(result);
		if (node && offset === node.offset + node.length && offset > 0) {
			const ch = text[offset - 1];
			if (node.type === "object" && ch === "}" || node.type === "array" && ch === "]") node = node.parent;
		}
		const currentWord = this.getCurrentWord(document, offset);
		let overwriteRange;
		if (node && (node.type === "string" || node.type === "number" || node.type === "boolean" || node.type === "null")) overwriteRange = Range.create(document.positionAt(node.offset), document.positionAt(node.offset + node.length));
		else {
			let overwriteStart = offset - currentWord.length;
			if (overwriteStart > 0 && text[overwriteStart - 1] === "\"") overwriteStart--;
			overwriteRange = Range.create(document.positionAt(overwriteStart), position);
		}
		const proposed = /* @__PURE__ */ new Map();
		const collector = {
			add: (suggestion) => {
				let label = suggestion.label;
				const existing = proposed.get(label);
				if (!existing) {
					label = label.replace(/[\n]/g, "↵");
					if (label.length > 60) {
						const shortendedLabel = label.substr(0, 57).trim() + "...";
						if (!proposed.has(shortendedLabel)) label = shortendedLabel;
					}
					suggestion.textEdit = TextEdit$1.replace(overwriteRange, suggestion.insertText);
					suggestion.label = label;
					proposed.set(label, suggestion);
					result.items.push(suggestion);
				} else {
					if (!existing.documentation) existing.documentation = suggestion.documentation;
					if (!existing.detail) existing.detail = suggestion.detail;
					if (!existing.labelDetails) existing.labelDetails = suggestion.labelDetails;
				}
			},
			setAsIncomplete: () => {
				result.isIncomplete = true;
			},
			error: (message) => {
				console.error(message);
			},
			getNumberOfProposals: () => {
				return result.items.length;
			}
		};
		return this.schemaService.getSchemaForResource(document.uri, doc).then((schema) => {
			const collectionPromises = [];
			let addValue = true;
			let currentKey = "";
			let currentProperty = void 0;
			if (node) {
				if (node.type === "string") {
					const parent = node.parent;
					if (parent && parent.type === "property" && parent.keyNode === node) {
						addValue = !parent.valueNode;
						currentProperty = parent;
						currentKey = text.substr(node.offset + 1, node.length - 2);
						if (parent) node = parent.parent;
					}
				}
			}
			if (node && node.type === "object") {
				if (node.offset === offset) return result;
				node.properties.forEach((p) => {
					if (!currentProperty || currentProperty !== p) proposed.set(p.keyNode.value, CompletionItem.create("__"));
				});
				let separatorAfter = "";
				if (addValue) separatorAfter = this.evaluateSeparatorAfter(document, document.offsetAt(overwriteRange.end));
				if (schema) this.getPropertyCompletions(schema, doc, node, addValue, separatorAfter, collector);
				else this.getSchemaLessPropertyCompletions(doc, node, currentKey, collector);
				const location = getNodePath(node);
				this.contributions.forEach((contribution) => {
					const collectPromise = contribution.collectPropertyCompletions(document.uri, location, currentWord, addValue, separatorAfter === "", collector);
					if (collectPromise) collectionPromises.push(collectPromise);
				});
				if (!schema && currentWord.length > 0 && text.charAt(offset - currentWord.length - 1) !== "\"") {
					collector.add({
						kind: CompletionItemKind.Property,
						label: this.getLabelForValue(currentWord),
						insertText: this.getInsertTextForProperty(currentWord, void 0, false, separatorAfter),
						insertTextFormat: InsertTextFormat.Snippet,
						documentation: ""
					});
					collector.setAsIncomplete();
				}
			}
			const types = {};
			if (schema) this.getValueCompletions(schema, doc, node, offset, document, collector, types);
			else this.getSchemaLessValueCompletions(doc, node, offset, document, collector);
			if (this.contributions.length > 0) this.getContributedValueCompletions(doc, node, offset, document, collector, collectionPromises);
			return this.promiseConstructor.all(collectionPromises).then(() => {
				if (collector.getNumberOfProposals() === 0) {
					let offsetForSeparator = offset;
					if (node && (node.type === "string" || node.type === "number" || node.type === "boolean" || node.type === "null")) offsetForSeparator = node.offset + node.length;
					const separatorAfter = this.evaluateSeparatorAfter(document, offsetForSeparator);
					this.addFillerValueCompletions(types, separatorAfter, collector);
				}
				return result;
			});
		});
	}
	getPropertyCompletions(schema, doc, node, addValue, separatorAfter, collector) {
		doc.getMatchingSchemas(schema.schema, node.offset, void 0, schema.activeVocabularies).forEach((s) => {
			if (s.node === node && !s.inverted) {
				const schemaProperties = s.schema.properties;
				if (schemaProperties) Object.keys(schemaProperties).forEach((key) => {
					const propertySchema = schemaProperties[key];
					if (typeof propertySchema === "object" && !propertySchema.deprecationMessage && !propertySchema.doNotSuggest) {
						const proposal = {
							kind: CompletionItemKind.Property,
							label: key,
							insertText: this.getInsertTextForProperty(key, propertySchema, addValue, separatorAfter),
							insertTextFormat: InsertTextFormat.Snippet,
							filterText: this.getFilterTextForValue(key),
							documentation: this.fromMarkup(propertySchema.markdownDescription) || propertySchema.description || ""
						};
						if (propertySchema.completionDetail !== void 0) proposal.detail = propertySchema.completionDetail;
						if (propertySchema.suggestSortText !== void 0) proposal.sortText = propertySchema.suggestSortText;
						if (proposal.insertText && endsWith(proposal.insertText, `$1${separatorAfter}`)) proposal.command = {
							title: "Suggest",
							command: "editor.action.triggerSuggest"
						};
						collector.add(proposal);
					}
				});
				const schemaPropertyNames = s.schema.propertyNames;
				if (typeof schemaPropertyNames === "object" && !schemaPropertyNames.deprecationMessage && !schemaPropertyNames.doNotSuggest) {
					const propertyNameCompletionItem = (name, documentation, detail, sortText) => {
						const proposal = {
							kind: CompletionItemKind.Property,
							label: name,
							insertText: this.getInsertTextForProperty(name, void 0, addValue, separatorAfter),
							insertTextFormat: InsertTextFormat.Snippet,
							filterText: this.getFilterTextForValue(name),
							documentation: documentation || this.fromMarkup(schemaPropertyNames.markdownDescription) || schemaPropertyNames.description || "",
							sortText,
							detail
						};
						if (proposal.insertText && endsWith(proposal.insertText, `$1${separatorAfter}`)) proposal.command = {
							title: "Suggest",
							command: "editor.action.triggerSuggest"
						};
						collector.add(proposal);
					};
					if (schemaPropertyNames.enum) for (let i = 0; i < schemaPropertyNames.enum.length; i++) {
						let enumDescription = void 0;
						if (schemaPropertyNames.markdownEnumDescriptions && i < schemaPropertyNames.markdownEnumDescriptions.length) enumDescription = this.fromMarkup(schemaPropertyNames.markdownEnumDescriptions[i]);
						else if (schemaPropertyNames.enumDescriptions && i < schemaPropertyNames.enumDescriptions.length) enumDescription = schemaPropertyNames.enumDescriptions[i];
						const enumSortText = schemaPropertyNames.enumSortTexts?.[i];
						const enumDetails = schemaPropertyNames.enumDetails?.[i];
						propertyNameCompletionItem(schemaPropertyNames.enum[i], enumDescription, enumDetails, enumSortText);
					}
					if (schemaPropertyNames.examples) for (let i = 0; i < schemaPropertyNames.examples.length; i++) propertyNameCompletionItem(schemaPropertyNames.examples[i], void 0, void 0, void 0);
					if (schemaPropertyNames.const) propertyNameCompletionItem(schemaPropertyNames.const, void 0, schemaPropertyNames.completionDetail, schemaPropertyNames.suggestSortText);
				}
			}
		});
	}
	getSchemaLessPropertyCompletions(doc, node, currentKey, collector) {
		const collectCompletionsForSimilarObject = (obj) => {
			obj.properties.forEach((p) => {
				const key = p.keyNode.value;
				collector.add({
					kind: CompletionItemKind.Property,
					label: key,
					insertText: this.getInsertTextForValue(key, ""),
					insertTextFormat: InsertTextFormat.Snippet,
					filterText: this.getFilterTextForValue(key),
					documentation: ""
				});
			});
		};
		if (node.parent) {
			if (node.parent.type === "property") {
				const parentKey = node.parent.keyNode.value;
				doc.visit((n) => {
					if (n.type === "property" && n !== node.parent && n.keyNode.value === parentKey && n.valueNode && n.valueNode.type === "object") collectCompletionsForSimilarObject(n.valueNode);
					return true;
				});
			} else if (node.parent.type === "array") node.parent.items.forEach((n) => {
				if (n.type === "object" && n !== node) collectCompletionsForSimilarObject(n);
			});
		} else if (node.type === "object") collector.add({
			kind: CompletionItemKind.Property,
			label: "$schema",
			insertText: this.getInsertTextForProperty("$schema", void 0, true, ""),
			insertTextFormat: InsertTextFormat.Snippet,
			documentation: "",
			filterText: this.getFilterTextForValue("$schema")
		});
	}
	getSchemaLessValueCompletions(doc, node, offset, document, collector) {
		let offsetForSeparator = offset;
		if (node && (node.type === "string" || node.type === "number" || node.type === "boolean" || node.type === "null")) {
			offsetForSeparator = node.offset + node.length;
			node = node.parent;
		}
		if (!node) {
			collector.add({
				kind: this.getSuggestionKind("object"),
				label: "Empty object",
				insertText: this.getInsertTextForValue({}, ""),
				insertTextFormat: InsertTextFormat.Snippet,
				documentation: ""
			});
			collector.add({
				kind: this.getSuggestionKind("array"),
				label: "Empty array",
				insertText: this.getInsertTextForValue([], ""),
				insertTextFormat: InsertTextFormat.Snippet,
				documentation: ""
			});
			return;
		}
		const separatorAfter = this.evaluateSeparatorAfter(document, offsetForSeparator);
		const collectSuggestionsForValues = (value) => {
			if (value.parent && !contains(value.parent, offset, true)) collector.add({
				kind: this.getSuggestionKind(value.type),
				label: this.getLabelTextForMatchingNode(value, document),
				insertText: this.getInsertTextForMatchingNode(value, document, separatorAfter),
				insertTextFormat: InsertTextFormat.Snippet,
				documentation: ""
			});
			if (value.type === "boolean") this.addBooleanValueCompletion(!value.value, separatorAfter, collector);
		};
		if (node.type === "property") {
			if (offset > (node.colonOffset || 0)) {
				const valueNode = node.valueNode;
				if (valueNode && (offset > valueNode.offset + valueNode.length || valueNode.type === "object" || valueNode.type === "array")) return;
				const parentKey = node.keyNode.value;
				doc.visit((n) => {
					if (n.type === "property" && n.keyNode.value === parentKey && n.valueNode) collectSuggestionsForValues(n.valueNode);
					return true;
				});
				if (parentKey === "$schema" && node.parent && !node.parent.parent) this.addDollarSchemaCompletions(separatorAfter, collector);
			}
		}
		if (node.type === "array") {
			if (node.parent && node.parent.type === "property") {
				const parentKey = node.parent.keyNode.value;
				doc.visit((n) => {
					if (n.type === "property" && n.keyNode.value === parentKey && n.valueNode && n.valueNode.type === "array") n.valueNode.items.forEach(collectSuggestionsForValues);
					return true;
				});
			} else node.items.forEach(collectSuggestionsForValues);
		}
	}
	getValueCompletions(schema, doc, node, offset, document, collector, types) {
		let offsetForSeparator = offset;
		let parentKey = void 0;
		let valueNode = void 0;
		if (node && (node.type === "string" || node.type === "number" || node.type === "boolean" || node.type === "null")) {
			offsetForSeparator = node.offset + node.length;
			valueNode = node;
			node = node.parent;
		}
		if (!node) {
			this.addSchemaValueCompletions(schema.schema, "", collector, types);
			return;
		}
		if (node.type === "property" && offset > (node.colonOffset || 0)) {
			const valueNode = node.valueNode;
			if (valueNode && offset > valueNode.offset + valueNode.length) return;
			parentKey = node.keyNode.value;
			node = node.parent;
		}
		if (node && (parentKey !== void 0 || node.type === "array")) {
			const separatorAfter = this.evaluateSeparatorAfter(document, offsetForSeparator);
			const matchingSchemas = doc.getMatchingSchemas(schema.schema, node.offset, valueNode, schema.activeVocabularies);
			for (const s of matchingSchemas) if (s.node === node && !s.inverted && s.schema) {
				if (node.type === "array" && s.schema.items) {
					let c = collector;
					if (s.schema.uniqueItems) {
						const existingValues = /* @__PURE__ */ new Set();
						node.children.forEach((n) => {
							if (n.type !== "array" && n.type !== "object") existingValues.add(this.getLabelForValue(getNodeValue(n)));
						});
						c = {
							...collector,
							add(suggestion) {
								if (!existingValues.has(suggestion.label)) collector.add(suggestion);
							}
						};
					}
					if (Array.isArray(s.schema.items)) {
						const index = this.findItemAtOffset(node, document, offset);
						if (index < s.schema.items.length) this.addSchemaValueCompletions(s.schema.items[index], separatorAfter, c, types);
					} else this.addSchemaValueCompletions(s.schema.items, separatorAfter, c, types);
				}
				if (parentKey !== void 0) {
					let propertyMatched = false;
					if (s.schema.properties) {
						const propertySchema = s.schema.properties[parentKey];
						if (propertySchema) {
							propertyMatched = true;
							this.addSchemaValueCompletions(propertySchema, separatorAfter, collector, types);
						}
					}
					if (s.schema.patternProperties && !propertyMatched) {
						for (const pattern of Object.keys(s.schema.patternProperties)) if (extendedRegExp(pattern)?.test(parentKey)) {
							propertyMatched = true;
							const propertySchema = s.schema.patternProperties[pattern];
							this.addSchemaValueCompletions(propertySchema, separatorAfter, collector, types);
						}
					}
					if (s.schema.additionalProperties && !propertyMatched) {
						const propertySchema = s.schema.additionalProperties;
						this.addSchemaValueCompletions(propertySchema, separatorAfter, collector, types);
					}
				}
			}
			if (parentKey === "$schema" && !node.parent) this.addDollarSchemaCompletions(separatorAfter, collector);
			if (types["boolean"]) {
				this.addBooleanValueCompletion(true, separatorAfter, collector);
				this.addBooleanValueCompletion(false, separatorAfter, collector);
			}
			if (types["null"]) this.addNullValueCompletion(separatorAfter, collector);
		}
	}
	getContributedValueCompletions(doc, node, offset, document, collector, collectionPromises) {
		if (!node) this.contributions.forEach((contribution) => {
			const collectPromise = contribution.collectDefaultCompletions(document.uri, collector);
			if (collectPromise) collectionPromises.push(collectPromise);
		});
		else {
			if (node.type === "string" || node.type === "number" || node.type === "boolean" || node.type === "null") node = node.parent;
			if (node && node.type === "property" && offset > (node.colonOffset || 0)) {
				const parentKey = node.keyNode.value;
				const valueNode = node.valueNode;
				if ((!valueNode || offset <= valueNode.offset + valueNode.length) && node.parent) {
					const location = getNodePath(node.parent);
					this.contributions.forEach((contribution) => {
						const collectPromise = contribution.collectValueCompletions(document.uri, location, parentKey, collector);
						if (collectPromise) collectionPromises.push(collectPromise);
					});
				}
			}
		}
	}
	addSchemaValueCompletions(schema, separatorAfter, collector, types) {
		if (typeof schema === "object") {
			this.addEnumValueCompletions(schema, separatorAfter, collector);
			this.addDefaultValueCompletions(schema, separatorAfter, collector);
			this.collectTypes(schema, types);
			if (Array.isArray(schema.allOf)) schema.allOf.forEach((s) => this.addSchemaValueCompletions(s, separatorAfter, collector, types));
			if (Array.isArray(schema.anyOf)) schema.anyOf.forEach((s) => this.addSchemaValueCompletions(s, separatorAfter, collector, types));
			if (Array.isArray(schema.oneOf)) schema.oneOf.forEach((s) => this.addSchemaValueCompletions(s, separatorAfter, collector, types));
		}
	}
	addDefaultValueCompletions(schema, separatorAfter, collector, arrayDepth = 0) {
		let hasProposals = false;
		if (isDefined(schema.default)) {
			let type = schema.type;
			let value = schema.default;
			for (let i = arrayDepth; i > 0; i--) {
				value = [value];
				type = "array";
			}
			const completionItem = {
				kind: this.getSuggestionKind(type),
				label: this.getLabelForValue(value),
				insertText: this.getInsertTextForValue(value, separatorAfter),
				insertTextFormat: InsertTextFormat.Snippet
			};
			if (this.doesSupportsLabelDetails()) completionItem.labelDetails = { description: import_main$2.t("Default value") };
			else completionItem.detail = import_main$2.t("Default value");
			collector.add(completionItem);
			hasProposals = true;
		}
		if (Array.isArray(schema.examples)) schema.examples.forEach((example) => {
			let type = schema.type;
			let value = example;
			for (let i = arrayDepth; i > 0; i--) {
				value = [value];
				type = "array";
			}
			collector.add({
				kind: this.getSuggestionKind(type),
				label: this.getLabelForValue(value),
				insertText: this.getInsertTextForValue(value, separatorAfter),
				insertTextFormat: InsertTextFormat.Snippet
			});
			hasProposals = true;
		});
		if (Array.isArray(schema.defaultSnippets)) schema.defaultSnippets.forEach((s) => {
			let type = schema.type;
			let value = s.body;
			let label = s.label;
			let insertText;
			let filterText;
			if (isDefined(value)) {
				schema.type;
				for (let i = arrayDepth; i > 0; i--) value = [value];
				insertText = this.getInsertTextForSnippetValue(value, separatorAfter);
				filterText = this.getFilterTextForSnippetValue(value);
				label = label || this.getLabelForSnippetValue(value);
			} else if (typeof s.bodyText === "string") {
				let prefix = "", suffix = "", indent = "";
				for (let i = arrayDepth; i > 0; i--) {
					prefix = prefix + indent + "[\n";
					suffix = suffix + "\n" + indent + "]";
					indent += "	";
					type = "array";
				}
				insertText = prefix + indent + s.bodyText.split("\n").join("\n" + indent) + suffix + separatorAfter;
				label = label || insertText, filterText = insertText.replace(/[\n]/g, "");
			} else return;
			collector.add({
				kind: this.getSuggestionKind(type),
				label,
				documentation: this.fromMarkup(s.markdownDescription) || s.description,
				insertText,
				insertTextFormat: InsertTextFormat.Snippet,
				filterText
			});
			hasProposals = true;
		});
		if (!hasProposals && typeof schema.items === "object" && !Array.isArray(schema.items) && arrayDepth < 5) this.addDefaultValueCompletions(schema.items, separatorAfter, collector, arrayDepth + 1);
	}
	addEnumValueCompletions(schema, separatorAfter, collector) {
		if (isDefined(schema.const)) collector.add({
			kind: this.getSuggestionKind(schema.type),
			label: this.getLabelForValue(schema.const),
			insertText: this.getInsertTextForValue(schema.const, separatorAfter),
			insertTextFormat: InsertTextFormat.Snippet,
			documentation: this.fromMarkup(schema.markdownDescription) || schema.description
		});
		if (Array.isArray(schema.enum)) for (let i = 0, length = schema.enum.length; i < length; i++) {
			const enm = schema.enum[i];
			let documentation = this.fromMarkup(schema.markdownDescription) || schema.description;
			if (schema.markdownEnumDescriptions && i < schema.markdownEnumDescriptions.length && this.doesSupportMarkdown()) documentation = this.fromMarkup(schema.markdownEnumDescriptions[i]);
			else if (schema.enumDescriptions && i < schema.enumDescriptions.length) documentation = schema.enumDescriptions[i];
			collector.add({
				kind: this.getSuggestionKind(schema.type),
				label: this.getLabelForValue(enm),
				insertText: this.getInsertTextForValue(enm, separatorAfter),
				insertTextFormat: InsertTextFormat.Snippet,
				sortText: schema.enumSortTexts?.[i],
				detail: schema.enumDetails?.[i],
				documentation
			});
		}
	}
	collectTypes(schema, types) {
		if (Array.isArray(schema.enum) || isDefined(schema.const)) return;
		const type = schema.type;
		if (Array.isArray(type)) type.forEach((t) => types[t] = true);
		else if (type) types[type] = true;
	}
	addFillerValueCompletions(types, separatorAfter, collector) {
		if (types["object"]) collector.add({
			kind: this.getSuggestionKind("object"),
			label: "{}",
			insertText: this.getInsertTextForGuessedValue({}, separatorAfter),
			insertTextFormat: InsertTextFormat.Snippet,
			detail: import_main$2.t("New object"),
			documentation: ""
		});
		if (types["array"]) collector.add({
			kind: this.getSuggestionKind("array"),
			label: "[]",
			insertText: this.getInsertTextForGuessedValue([], separatorAfter),
			insertTextFormat: InsertTextFormat.Snippet,
			detail: import_main$2.t("New array"),
			documentation: ""
		});
	}
	addBooleanValueCompletion(value, separatorAfter, collector) {
		collector.add({
			kind: this.getSuggestionKind("boolean"),
			label: value ? "true" : "false",
			insertText: this.getInsertTextForValue(value, separatorAfter),
			insertTextFormat: InsertTextFormat.Snippet,
			documentation: ""
		});
	}
	addNullValueCompletion(separatorAfter, collector) {
		collector.add({
			kind: this.getSuggestionKind("null"),
			label: "null",
			insertText: "null" + separatorAfter,
			insertTextFormat: InsertTextFormat.Snippet,
			documentation: ""
		});
	}
	addDollarSchemaCompletions(separatorAfter, collector) {
		this.schemaService.getRegisteredSchemaIds((schema) => schema === "http" || schema === "https").forEach((schemaId) => {
			if (schemaId.startsWith("https://json-schema.org/draft-")) schemaId = schemaId + "#";
			collector.add({
				kind: CompletionItemKind.Module,
				label: this.getLabelForValue(schemaId),
				filterText: this.getFilterTextForValue(schemaId),
				insertText: this.getInsertTextForValue(schemaId, separatorAfter),
				insertTextFormat: InsertTextFormat.Snippet,
				documentation: ""
			});
		});
	}
	getLabelForValue(value) {
		return JSON.stringify(value);
	}
	getValueFromLabel(value) {
		return JSON.parse(value);
	}
	getFilterTextForValue(value) {
		return JSON.stringify(value);
	}
	getFilterTextForSnippetValue(value) {
		return JSON.stringify(value).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1");
	}
	getLabelForSnippetValue(value) {
		return JSON.stringify(value).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1");
	}
	getInsertTextForPlainText(text) {
		return text.replace(/[\\\$\}]/g, "\\$&");
	}
	getInsertTextForValue(value, separatorAfter) {
		const text = JSON.stringify(value, null, "	");
		if (text === "{}") return "{$1}" + separatorAfter;
		else if (text === "[]") return "[$1]" + separatorAfter;
		return this.getInsertTextForPlainText(text + separatorAfter);
	}
	getInsertTextForSnippetValue(value, separatorAfter) {
		const replacer = (value) => {
			if (typeof value === "string") {
				if (value[0] === "^") return value.substr(1);
			}
			return JSON.stringify(value);
		};
		return stringifyObject(value, "", replacer) + separatorAfter;
	}
	getInsertTextForGuessedValue(value, separatorAfter) {
		switch (typeof value) {
			case "object":
				if (value === null) return "${1:null}" + separatorAfter;
				return this.getInsertTextForValue(value, separatorAfter);
			case "string":
				let snippetValue = JSON.stringify(value);
				snippetValue = snippetValue.substr(1, snippetValue.length - 2);
				snippetValue = this.getInsertTextForPlainText(snippetValue);
				return "\"${1:" + snippetValue + "}\"" + separatorAfter;
			case "number":
			case "boolean": return "${1:" + JSON.stringify(value) + "}" + separatorAfter;
		}
		return this.getInsertTextForValue(value, separatorAfter);
	}
	getSuggestionKind(type) {
		if (Array.isArray(type)) {
			const array = type;
			type = array.length > 0 ? array[0] : void 0;
		}
		if (!type) return CompletionItemKind.Value;
		switch (type) {
			case "string": return CompletionItemKind.Value;
			case "object": return CompletionItemKind.Module;
			case "property": return CompletionItemKind.Property;
			default: return CompletionItemKind.Value;
		}
	}
	getLabelTextForMatchingNode(node, document) {
		switch (node.type) {
			case "array": return "[]";
			case "object": return "{}";
			default: return document.getText().substr(node.offset, node.length);
		}
	}
	getInsertTextForMatchingNode(node, document, separatorAfter) {
		switch (node.type) {
			case "array": return this.getInsertTextForValue([], separatorAfter);
			case "object": return this.getInsertTextForValue({}, separatorAfter);
			default:
				const content = document.getText().substr(node.offset, node.length) + separatorAfter;
				return this.getInsertTextForPlainText(content);
		}
	}
	getInsertTextForProperty(key, propertySchema, addValue, separatorAfter) {
		const propertyText = this.getInsertTextForValue(key, "");
		if (!addValue) return propertyText;
		const resultText = propertyText + ": ";
		let value;
		let nValueProposals = 0;
		if (propertySchema) {
			if (Array.isArray(propertySchema.defaultSnippets)) {
				if (propertySchema.defaultSnippets.length === 1) {
					const body = propertySchema.defaultSnippets[0].body;
					if (isDefined(body)) value = this.getInsertTextForSnippetValue(body, "");
				}
				nValueProposals += propertySchema.defaultSnippets.length;
			}
			if (propertySchema.enum) {
				if (!value && propertySchema.enum.length === 1) value = this.getInsertTextForGuessedValue(propertySchema.enum[0], "");
				nValueProposals += propertySchema.enum.length;
			}
			if (isDefined(propertySchema.const)) {
				if (!value) value = this.getInsertTextForGuessedValue(propertySchema.const, "");
				nValueProposals++;
			}
			if (isDefined(propertySchema.default)) {
				if (!value) value = this.getInsertTextForGuessedValue(propertySchema.default, "");
				nValueProposals++;
			}
			if (Array.isArray(propertySchema.examples) && propertySchema.examples.length) {
				if (!value) value = this.getInsertTextForGuessedValue(propertySchema.examples[0], "");
				nValueProposals += propertySchema.examples.length;
			}
			if (nValueProposals === 0) {
				let type = Array.isArray(propertySchema.type) ? propertySchema.type[0] : propertySchema.type;
				if (!type) {
					if (propertySchema.properties) type = "object";
					else if (propertySchema.items) type = "array";
				}
				switch (type) {
					case "boolean":
						value = "$1";
						break;
					case "string":
						value = "\"$1\"";
						break;
					case "object":
						value = "{$1}";
						break;
					case "array":
						value = "[$1]";
						break;
					case "number":
					case "integer":
						value = "${1:0}";
						break;
					case "null":
						value = "${1:null}";
						break;
					default:
						if (Array.isArray(propertySchema.oneOf) && propertySchema.oneOf.length > 0) {
							value = "$1";
							break;
						}
						return propertyText;
				}
			}
		}
		if (!value || nValueProposals > 1) value = "$1";
		return resultText + value + separatorAfter;
	}
	getCurrentWord(document, offset) {
		let i = offset - 1;
		const text = document.getText();
		while (i >= 0 && " 	\n\r\v\":{[,]}".indexOf(text.charAt(i)) === -1) i--;
		return text.substring(i + 1, offset);
	}
	evaluateSeparatorAfter(document, offset) {
		const scanner = createScanner(document.getText(), true);
		scanner.setPosition(offset);
		switch (scanner.scan()) {
			case 5:
			case 2:
			case 4:
			case 17: return "";
			default: return ",";
		}
	}
	findItemAtOffset(node, document, offset) {
		const scanner = createScanner(document.getText(), true);
		const children = node.items;
		for (let i = children.length - 1; i >= 0; i--) {
			const child = children[i];
			if (offset > child.offset + child.length) {
				scanner.setPosition(child.offset + child.length);
				if (scanner.scan() === 5 && offset >= scanner.getTokenOffset() + scanner.getTokenLength()) return i + 1;
				return i;
			} else if (offset >= child.offset) return i;
		}
		return 0;
	}
	isInComment(document, start, offset) {
		const scanner = createScanner(document.getText(), false);
		scanner.setPosition(start);
		let token = scanner.scan();
		while (token !== 17 && scanner.getTokenOffset() + scanner.getTokenLength() < offset) token = scanner.scan();
		return (token === 12 || token === 13) && scanner.getTokenOffset() <= offset;
	}
	fromMarkup(markupString) {
		if (markupString && this.doesSupportMarkdown()) return {
			kind: MarkupKind.Markdown,
			value: markupString
		};
	}
	doesSupportMarkdown() {
		if (!isDefined(this.supportsMarkdown)) {
			const documentationFormat = this.clientCapabilities.textDocument?.completion?.completionItem?.documentationFormat;
			this.supportsMarkdown = Array.isArray(documentationFormat) && documentationFormat.indexOf(MarkupKind.Markdown) !== -1;
		}
		return this.supportsMarkdown;
	}
	doesSupportsCommitCharacters() {
		if (!isDefined(this.supportsCommitCharacters)) this.labelDetailsSupport = this.clientCapabilities.textDocument?.completion?.completionItem?.commitCharactersSupport;
		return this.supportsCommitCharacters;
	}
	doesSupportsLabelDetails() {
		if (!isDefined(this.labelDetailsSupport)) this.labelDetailsSupport = this.clientCapabilities.textDocument?.completion?.completionItem?.labelDetailsSupport;
		return this.labelDetailsSupport;
	}
};
//#endregion
//#region servers/json/node_modules/vscode-json-languageservice/lib/esm/services/jsonHover.js
var JSONHover = class {
	constructor(schemaService, contributions = [], promiseConstructor) {
		this.schemaService = schemaService;
		this.contributions = contributions;
		this.promise = promiseConstructor || Promise;
	}
	doHover(document, position, doc) {
		const offset = document.offsetAt(position);
		let node = doc.getNodeFromOffset(offset);
		if (!node || (node.type === "object" || node.type === "array") && offset > node.offset + 1 && offset < node.offset + node.length - 1) return this.promise.resolve(null);
		const hoverRangeNode = node;
		if (node.type === "string") {
			const parent = node.parent;
			if (parent && parent.type === "property" && parent.keyNode === node) {
				node = parent.valueNode;
				if (!node) return this.promise.resolve(null);
			}
		}
		const hoverRange = Range.create(document.positionAt(hoverRangeNode.offset), document.positionAt(hoverRangeNode.offset + hoverRangeNode.length));
		const createHover = (contents) => {
			return {
				contents,
				range: hoverRange
			};
		};
		const location = getNodePath(node);
		for (let i = this.contributions.length - 1; i >= 0; i--) {
			const promise = this.contributions[i].getInfoContribution(document.uri, location);
			if (promise) return promise.then((htmlContent) => createHover(htmlContent));
		}
		return this.schemaService.getSchemaForResource(document.uri, doc).then((schema) => {
			if (!schema) return null;
			let title = void 0;
			let markdownDescription = void 0;
			let markdownEnumValueDescription = void 0, enumValue = void 0;
			const matchingSchemas = doc.getMatchingSchemas(schema.schema, node.offset, void 0, schema.activeVocabularies).filter((s) => s.node === node && !s.inverted).map((s) => s.schema);
			for (const schema of matchingSchemas) {
				title = title || schema.title;
				markdownDescription = markdownDescription || schema.markdownDescription || toMarkdown(schema.description);
				if (schema.enum) {
					const idx = schema.enum.indexOf(getNodeValue(node));
					if (schema.markdownEnumDescriptions) markdownEnumValueDescription = schema.markdownEnumDescriptions[idx];
					else if (schema.enumDescriptions) markdownEnumValueDescription = toMarkdown(schema.enumDescriptions[idx]);
					if (markdownEnumValueDescription) {
						enumValue = schema.enum[idx];
						if (typeof enumValue !== "string") enumValue = JSON.stringify(enumValue);
					}
				}
			}
			let result = "";
			if (title) result = toMarkdown(title);
			if (markdownDescription) {
				if (result.length > 0) result += "\n\n";
				result += markdownDescription;
			}
			if (markdownEnumValueDescription) {
				if (result.length > 0) result += "\n\n";
				result += `\`${toMarkdownCodeBlock(enumValue)}\`: ${markdownEnumValueDescription}`;
			}
			return createHover([result]);
		});
	}
};
function toMarkdown(plain) {
	if (plain) return plain.trim().replace(/[\\`*_{}[\]()<>#+\-.!]/g, "\\$&").replace(/(^ +)/gm, (_match, g1) => "&nbsp;".repeat(g1.length)).replace(/( {2,})/g, (_match, g1) => " " + "&nbsp;".repeat(g1.length - 1)).replace(/(\t+)/g, (_match, g1) => "&nbsp;".repeat(g1.length * 4)).replace(/\n/g, "\\\n");
}
function toMarkdownCodeBlock(content) {
	if (content.indexOf("`") !== -1) return "`` " + content + " ``";
	return content;
}
//#endregion
//#region servers/json/node_modules/vscode-json-languageservice/lib/esm/services/jsonValidation.js
var JSONValidation = class {
	constructor(jsonSchemaService, promiseConstructor) {
		this.jsonSchemaService = jsonSchemaService;
		this.promise = promiseConstructor;
		this.validationEnabled = true;
	}
	configure(raw) {
		if (raw) {
			this.validationEnabled = raw.validate !== false;
			this.commentSeverity = raw.allowComments ? void 0 : DiagnosticSeverity.Error;
		}
	}
	doValidation(textDocument, jsonDocument, documentSettings, schema) {
		if (!this.validationEnabled) return this.promise.resolve([]);
		const diagnostics = [];
		const added = {};
		const addProblem = (problem) => {
			const signature = problem.range.start.line + " " + problem.range.start.character + " " + problem.message;
			if (!added[signature]) {
				added[signature] = true;
				diagnostics.push(problem);
			}
		};
		const getDiagnostics = (schema) => {
			let trailingCommaSeverity = documentSettings?.trailingCommas ? toDiagnosticSeverity(documentSettings.trailingCommas) : DiagnosticSeverity.Error;
			let commentSeverity = documentSettings?.comments ? toDiagnosticSeverity(documentSettings.comments) : this.commentSeverity;
			let schemaValidation = documentSettings?.schemaValidation ? toDiagnosticSeverity(documentSettings.schemaValidation) : DiagnosticSeverity.Warning;
			let schemaRequest = documentSettings?.schemaRequest ? toDiagnosticSeverity(documentSettings.schemaRequest) : DiagnosticSeverity.Warning;
			if (schema) {
				const addSchemaProblem = (errorMessage, errorCode, relatedInformation) => {
					if (jsonDocument.root && schemaRequest) {
						const astRoot = jsonDocument.root;
						const property = astRoot.type === "object" ? astRoot.properties[0] : void 0;
						if (property && property.keyNode.value === "$schema") {
							const node = property.valueNode || property;
							const range = Range.create(textDocument.positionAt(node.offset), textDocument.positionAt(node.offset + node.length));
							addProblem(Diagnostic.create(range, errorMessage, schemaRequest, errorCode, "json", relatedInformation));
						} else {
							const range = Range.create(textDocument.positionAt(astRoot.offset), textDocument.positionAt(astRoot.offset + 1));
							addProblem(Diagnostic.create(range, errorMessage, schemaRequest, errorCode, "json", relatedInformation));
						}
					}
				};
				if (schema.errors.length) {
					const error = schema.errors[0];
					addSchemaProblem(error.message, error.code, error.relatedInformation);
				} else if (schemaValidation) {
					for (const warning of schema.warnings) addSchemaProblem(warning.message, warning.code, warning.relatedInformation);
					const semanticErrors = jsonDocument.validate(textDocument, schema.schema, schemaValidation, documentSettings?.schemaDraft, schema.activeVocabularies);
					if (semanticErrors) semanticErrors.forEach(addProblem);
				}
				if (schemaAllowsComments(schema.schema)) commentSeverity = void 0;
				if (schemaAllowsTrailingCommas(schema.schema)) trailingCommaSeverity = void 0;
			}
			for (const p of jsonDocument.syntaxErrors) {
				if (p.code === ErrorCode.TrailingComma) {
					if (typeof trailingCommaSeverity !== "number") continue;
					p.severity = trailingCommaSeverity;
				}
				addProblem(p);
			}
			if (typeof commentSeverity === "number") {
				const message = import_main$2.t("Comments are not permitted in JSON.");
				jsonDocument.comments.forEach((c) => {
					addProblem(Diagnostic.create(c, message, commentSeverity, ErrorCode.CommentNotPermitted));
				});
			}
			return diagnostics;
		};
		if (schema) {
			const uri = schema.$id || schema.id || "schemaservice://untitled/" + idCounter$1++;
			return this.jsonSchemaService.registerExternalSchema({
				uri,
				schema
			}).getResolvedSchema().then((resolvedSchema) => {
				return getDiagnostics(resolvedSchema);
			});
		}
		return this.jsonSchemaService.getSchemaForResource(textDocument.uri, jsonDocument).then((schema) => {
			return getDiagnostics(schema);
		});
	}
	getLanguageStatus(textDocument, jsonDocument) {
		return { schemas: this.jsonSchemaService.getSchemaURIsForResource(textDocument.uri, jsonDocument) };
	}
};
let idCounter$1 = 0;
function schemaAllowsComments(schemaRef) {
	if (schemaRef && typeof schemaRef === "object") {
		if (isBoolean(schemaRef.allowComments)) return schemaRef.allowComments;
		if (schemaRef.allOf) for (const schema of schemaRef.allOf) {
			const allow = schemaAllowsComments(schema);
			if (isBoolean(allow)) return allow;
		}
	}
}
function schemaAllowsTrailingCommas(schemaRef) {
	if (schemaRef && typeof schemaRef === "object") {
		if (isBoolean(schemaRef.allowTrailingCommas)) return schemaRef.allowTrailingCommas;
		const deprSchemaRef = schemaRef;
		if (isBoolean(deprSchemaRef["allowsTrailingCommas"])) return deprSchemaRef["allowsTrailingCommas"];
		if (schemaRef.allOf) for (const schema of schemaRef.allOf) {
			const allow = schemaAllowsTrailingCommas(schema);
			if (isBoolean(allow)) return allow;
		}
	}
}
function toDiagnosticSeverity(severityLevel) {
	switch (severityLevel) {
		case "error": return DiagnosticSeverity.Error;
		case "warning": return DiagnosticSeverity.Warning;
		case "ignore": return;
	}
}
//#endregion
//#region servers/json/node_modules/vscode-json-languageservice/lib/esm/utils/colors.js
const Digit0 = 48;
const Digit9 = 57;
const a = 97;
const f = 102;
function hexDigit(charCode) {
	if (charCode < Digit0) return 0;
	if (charCode <= Digit9) return charCode - Digit0;
	if (charCode < a) charCode += 32;
	if (charCode >= a && charCode <= f) return charCode - a + 10;
	return 0;
}
function colorFromHex(text) {
	if (text[0] !== "#") return;
	switch (text.length) {
		case 4: return {
			red: hexDigit(text.charCodeAt(1)) * 17 / 255,
			green: hexDigit(text.charCodeAt(2)) * 17 / 255,
			blue: hexDigit(text.charCodeAt(3)) * 17 / 255,
			alpha: 1
		};
		case 5: return {
			red: hexDigit(text.charCodeAt(1)) * 17 / 255,
			green: hexDigit(text.charCodeAt(2)) * 17 / 255,
			blue: hexDigit(text.charCodeAt(3)) * 17 / 255,
			alpha: hexDigit(text.charCodeAt(4)) * 17 / 255
		};
		case 7: return {
			red: (hexDigit(text.charCodeAt(1)) * 16 + hexDigit(text.charCodeAt(2))) / 255,
			green: (hexDigit(text.charCodeAt(3)) * 16 + hexDigit(text.charCodeAt(4))) / 255,
			blue: (hexDigit(text.charCodeAt(5)) * 16 + hexDigit(text.charCodeAt(6))) / 255,
			alpha: 1
		};
		case 9: return {
			red: (hexDigit(text.charCodeAt(1)) * 16 + hexDigit(text.charCodeAt(2))) / 255,
			green: (hexDigit(text.charCodeAt(3)) * 16 + hexDigit(text.charCodeAt(4))) / 255,
			blue: (hexDigit(text.charCodeAt(5)) * 16 + hexDigit(text.charCodeAt(6))) / 255,
			alpha: (hexDigit(text.charCodeAt(7)) * 16 + hexDigit(text.charCodeAt(8))) / 255
		};
	}
}
//#endregion
//#region servers/json/node_modules/vscode-json-languageservice/lib/esm/services/jsonDocumentSymbols.js
var JSONDocumentSymbols = class {
	constructor(schemaService) {
		this.schemaService = schemaService;
	}
	findDocumentSymbols(document, doc, context = { resultLimit: Number.MAX_VALUE }) {
		const root = doc.root;
		if (!root) return [];
		let limit = context.resultLimit || Number.MAX_VALUE;
		const resourceString = document.uri;
		if (resourceString === "vscode://defaultsettings/keybindings.json" || endsWith(resourceString.toLowerCase(), "/user/keybindings.json")) {
			if (root.type === "array") {
				const result = [];
				for (const item of root.items) if (item.type === "object") {
					for (const property of item.properties) if (property.keyNode.value === "key" && property.valueNode) {
						const location = Location.create(document.uri, getRange(document, item));
						result.push({
							name: getName(property.valueNode),
							kind: SymbolKind.Function,
							location
						});
						limit--;
						if (limit <= 0) {
							if (context && context.onResultLimitExceeded) context.onResultLimitExceeded(resourceString);
							return result;
						}
					}
				}
				return result;
			}
		}
		const toVisit = [{
			node: root,
			containerName: ""
		}];
		let nextToVisit = 0;
		let limitExceeded = false;
		const result = [];
		const collectOutlineEntries = (node, containerName) => {
			if (node.type === "array") node.items.forEach((node) => {
				if (node) toVisit.push({
					node,
					containerName
				});
			});
			else if (node.type === "object") node.properties.forEach((property) => {
				const valueNode = property.valueNode;
				if (valueNode) {
					if (limit > 0) {
						limit--;
						const location = Location.create(document.uri, getRange(document, property));
						const childContainerName = containerName ? containerName + "." + property.keyNode.value : property.keyNode.value;
						result.push({
							name: this.getKeyLabel(property),
							kind: this.getSymbolKind(valueNode.type),
							location,
							containerName
						});
						toVisit.push({
							node: valueNode,
							containerName: childContainerName
						});
					} else limitExceeded = true;
				}
			});
		};
		while (nextToVisit < toVisit.length) {
			const next = toVisit[nextToVisit++];
			collectOutlineEntries(next.node, next.containerName);
		}
		if (limitExceeded && context && context.onResultLimitExceeded) context.onResultLimitExceeded(resourceString);
		return result;
	}
	findDocumentSymbols2(document, doc, context = { resultLimit: Number.MAX_VALUE }) {
		const root = doc.root;
		if (!root) return [];
		let limit = context.resultLimit || Number.MAX_VALUE;
		const resourceString = document.uri;
		if (resourceString === "vscode://defaultsettings/keybindings.json" || endsWith(resourceString.toLowerCase(), "/user/keybindings.json")) {
			if (root.type === "array") {
				const result = [];
				for (const item of root.items) if (item.type === "object") {
					for (const property of item.properties) if (property.keyNode.value === "key" && property.valueNode) {
						const range = getRange(document, item);
						const selectionRange = getRange(document, property.keyNode);
						result.push({
							name: getName(property.valueNode),
							kind: SymbolKind.Function,
							range,
							selectionRange
						});
						limit--;
						if (limit <= 0) {
							if (context && context.onResultLimitExceeded) context.onResultLimitExceeded(resourceString);
							return result;
						}
					}
				}
				return result;
			}
		}
		const result = [];
		const toVisit = [{
			node: root,
			result
		}];
		let nextToVisit = 0;
		let limitExceeded = false;
		const collectOutlineEntries = (node, result) => {
			if (node.type === "array") node.items.forEach((node, index) => {
				if (node) {
					if (limit > 0) {
						limit--;
						const range = getRange(document, node);
						const selectionRange = range;
						const symbol = {
							name: String(index),
							kind: this.getSymbolKind(node.type),
							range,
							selectionRange,
							children: []
						};
						result.push(symbol);
						toVisit.push({
							result: symbol.children,
							node
						});
					} else limitExceeded = true;
				}
			});
			else if (node.type === "object") node.properties.forEach((property) => {
				const valueNode = property.valueNode;
				if (valueNode) {
					if (limit > 0) {
						limit--;
						const range = getRange(document, property);
						const selectionRange = getRange(document, property.keyNode);
						const children = [];
						const symbol = {
							name: this.getKeyLabel(property),
							kind: this.getSymbolKind(valueNode.type),
							range,
							selectionRange,
							children,
							detail: this.getDetail(valueNode)
						};
						result.push(symbol);
						toVisit.push({
							result: children,
							node: valueNode
						});
					} else limitExceeded = true;
				}
			});
		};
		while (nextToVisit < toVisit.length) {
			const next = toVisit[nextToVisit++];
			collectOutlineEntries(next.node, next.result);
		}
		if (limitExceeded && context && context.onResultLimitExceeded) context.onResultLimitExceeded(resourceString);
		return result;
	}
	getSymbolKind(nodeType) {
		switch (nodeType) {
			case "object": return SymbolKind.Module;
			case "string": return SymbolKind.String;
			case "number": return SymbolKind.Number;
			case "array": return SymbolKind.Array;
			case "boolean": return SymbolKind.Boolean;
			default: return SymbolKind.Variable;
		}
	}
	getKeyLabel(property) {
		let name = property.keyNode.value;
		if (name) name = name.replace(/[\n]/g, "↵");
		if (name && name.trim()) return name;
		return `"${name}"`;
	}
	getDetail(node) {
		if (!node) return;
		if (node.type === "boolean" || node.type === "number" || node.type === "null" || node.type === "string") return String(node.value);
		else if (node.type === "array") return node.children.length ? void 0 : "[]";
		else if (node.type === "object") return node.children.length ? void 0 : "{}";
	}
	findDocumentColors(document, doc, context) {
		return this.schemaService.getSchemaForResource(document.uri, doc).then((schema) => {
			const result = [];
			if (schema) {
				let limit = context && typeof context.resultLimit === "number" ? context.resultLimit : Number.MAX_VALUE;
				const matchingSchemas = doc.getMatchingSchemas(schema.schema, void 0, void 0, schema.activeVocabularies);
				const visitedNode = {};
				for (const s of matchingSchemas) if (!s.inverted && s.schema && (s.schema.format === "color" || s.schema.format === "color-hex") && s.node && s.node.type === "string") {
					const nodeId = String(s.node.offset);
					if (!visitedNode[nodeId]) {
						const color = colorFromHex(getNodeValue(s.node));
						if (color) {
							const range = getRange(document, s.node);
							result.push({
								color,
								range
							});
						}
						visitedNode[nodeId] = true;
						limit--;
						if (limit <= 0) {
							if (context && context.onResultLimitExceeded) context.onResultLimitExceeded(document.uri);
							return result;
						}
					}
				}
			}
			return result;
		});
	}
	getColorPresentations(document, doc, color, range) {
		const result = [];
		const red256 = Math.round(color.red * 255), green256 = Math.round(color.green * 255), blue256 = Math.round(color.blue * 255);
		function toTwoDigitHex(n) {
			const r = n.toString(16);
			return r.length !== 2 ? "0" + r : r;
		}
		let label;
		if (color.alpha === 1) label = `#${toTwoDigitHex(red256)}${toTwoDigitHex(green256)}${toTwoDigitHex(blue256)}`;
		else label = `#${toTwoDigitHex(red256)}${toTwoDigitHex(green256)}${toTwoDigitHex(blue256)}${toTwoDigitHex(Math.round(color.alpha * 255))}`;
		result.push({
			label,
			textEdit: TextEdit$1.replace(range, JSON.stringify(label))
		});
		return result;
	}
};
function getRange(document, node) {
	return Range.create(document.positionAt(node.offset), document.positionAt(node.offset + node.length));
}
function getName(node) {
	return getNodeValue(node) || import_main$2.t("<empty>");
}
//#endregion
//#region servers/json/node_modules/vscode-json-languageservice/lib/esm/services/configuration.js
const schemaContributions = {
	schemaAssociations: [],
	schemas: {
		"https://json-schema.org/draft-04/schema": {
			"definitions": {
				"schemaArray": {
					"type": "array",
					"minItems": 1,
					"items": { "$ref": "#" }
				},
				"positiveInteger": {
					"type": "integer",
					"minimum": 0
				},
				"positiveIntegerDefault0": { "allOf": [{ "$ref": "#/definitions/positiveInteger" }, { "default": 0 }] },
				"simpleTypes": {
					"type": "string",
					"enum": [
						"array",
						"boolean",
						"integer",
						"null",
						"number",
						"object",
						"string"
					]
				},
				"stringArray": {
					"type": "array",
					"items": { "type": "string" },
					"minItems": 1,
					"uniqueItems": true
				}
			},
			"type": "object",
			"properties": {
				"id": {
					"type": "string",
					"format": "uri"
				},
				"$schema": {
					"type": "string",
					"format": "uri"
				},
				"title": { "type": "string" },
				"description": { "type": "string" },
				"default": {},
				"multipleOf": {
					"type": "number",
					"minimum": 0,
					"exclusiveMinimum": true
				},
				"maximum": { "type": "number" },
				"exclusiveMaximum": {
					"type": "boolean",
					"default": false
				},
				"minimum": { "type": "number" },
				"exclusiveMinimum": {
					"type": "boolean",
					"default": false
				},
				"maxLength": { "allOf": [{ "$ref": "#/definitions/positiveInteger" }] },
				"minLength": { "allOf": [{ "$ref": "#/definitions/positiveIntegerDefault0" }] },
				"pattern": {
					"type": "string",
					"format": "regex"
				},
				"additionalItems": {
					"anyOf": [{ "type": "boolean" }, { "$ref": "#" }],
					"default": {}
				},
				"items": {
					"anyOf": [{ "$ref": "#" }, { "$ref": "#/definitions/schemaArray" }],
					"default": {}
				},
				"maxItems": { "allOf": [{ "$ref": "#/definitions/positiveInteger" }] },
				"minItems": { "allOf": [{ "$ref": "#/definitions/positiveIntegerDefault0" }] },
				"uniqueItems": {
					"type": "boolean",
					"default": false
				},
				"maxProperties": { "allOf": [{ "$ref": "#/definitions/positiveInteger" }] },
				"minProperties": { "allOf": [{ "$ref": "#/definitions/positiveIntegerDefault0" }] },
				"required": { "allOf": [{ "$ref": "#/definitions/stringArray" }] },
				"additionalProperties": {
					"anyOf": [{ "type": "boolean" }, { "$ref": "#" }],
					"default": {}
				},
				"definitions": {
					"type": "object",
					"additionalProperties": { "$ref": "#" },
					"default": {}
				},
				"properties": {
					"type": "object",
					"additionalProperties": { "$ref": "#" },
					"default": {}
				},
				"patternProperties": {
					"type": "object",
					"additionalProperties": { "$ref": "#" },
					"default": {}
				},
				"dependencies": {
					"type": "object",
					"additionalProperties": { "anyOf": [{ "$ref": "#" }, { "$ref": "#/definitions/stringArray" }] }
				},
				"enum": {
					"type": "array",
					"minItems": 1,
					"uniqueItems": true
				},
				"type": { "anyOf": [{ "$ref": "#/definitions/simpleTypes" }, {
					"type": "array",
					"items": { "$ref": "#/definitions/simpleTypes" },
					"minItems": 1,
					"uniqueItems": true
				}] },
				"format": { "anyOf": [{
					"type": "string",
					"enum": [
						"date-time",
						"uri",
						"email",
						"hostname",
						"ipv4",
						"ipv6",
						"regex"
					]
				}, { "type": "string" }] },
				"allOf": { "allOf": [{ "$ref": "#/definitions/schemaArray" }] },
				"anyOf": { "allOf": [{ "$ref": "#/definitions/schemaArray" }] },
				"oneOf": { "allOf": [{ "$ref": "#/definitions/schemaArray" }] },
				"not": { "allOf": [{ "$ref": "#" }] }
			},
			"dependencies": {
				"exclusiveMaximum": ["maximum"],
				"exclusiveMinimum": ["minimum"]
			},
			"default": {}
		},
		"https://json-schema.org/draft-07/schema": {
			"definitions": {
				"schemaArray": {
					"type": "array",
					"minItems": 1,
					"items": { "$ref": "#" }
				},
				"nonNegativeInteger": {
					"type": "integer",
					"minimum": 0
				},
				"nonNegativeIntegerDefault0": { "allOf": [{ "$ref": "#/definitions/nonNegativeInteger" }, { "default": 0 }] },
				"simpleTypes": { "enum": [
					"array",
					"boolean",
					"integer",
					"null",
					"number",
					"object",
					"string"
				] },
				"stringArray": {
					"type": "array",
					"items": { "type": "string" },
					"uniqueItems": true,
					"default": []
				}
			},
			"type": ["object", "boolean"],
			"properties": {
				"$id": {
					"type": "string",
					"format": "uri-reference"
				},
				"$schema": {
					"type": "string",
					"format": "uri"
				},
				"$ref": {
					"type": "string",
					"format": "uri-reference"
				},
				"$comment": { "type": "string" },
				"title": { "type": "string" },
				"description": { "type": "string" },
				"default": true,
				"readOnly": {
					"type": "boolean",
					"default": false
				},
				"examples": {
					"type": "array",
					"items": true
				},
				"multipleOf": {
					"type": "number",
					"exclusiveMinimum": 0
				},
				"maximum": { "type": "number" },
				"exclusiveMaximum": { "type": "number" },
				"minimum": { "type": "number" },
				"exclusiveMinimum": { "type": "number" },
				"maxLength": { "$ref": "#/definitions/nonNegativeInteger" },
				"minLength": { "$ref": "#/definitions/nonNegativeIntegerDefault0" },
				"pattern": {
					"type": "string",
					"format": "regex"
				},
				"additionalItems": { "$ref": "#" },
				"items": {
					"anyOf": [{ "$ref": "#" }, { "$ref": "#/definitions/schemaArray" }],
					"default": true
				},
				"maxItems": { "$ref": "#/definitions/nonNegativeInteger" },
				"minItems": { "$ref": "#/definitions/nonNegativeIntegerDefault0" },
				"uniqueItems": {
					"type": "boolean",
					"default": false
				},
				"contains": { "$ref": "#" },
				"maxProperties": { "$ref": "#/definitions/nonNegativeInteger" },
				"minProperties": { "$ref": "#/definitions/nonNegativeIntegerDefault0" },
				"required": { "$ref": "#/definitions/stringArray" },
				"additionalProperties": { "$ref": "#" },
				"definitions": {
					"type": "object",
					"additionalProperties": { "$ref": "#" },
					"default": {}
				},
				"properties": {
					"type": "object",
					"additionalProperties": { "$ref": "#" },
					"default": {}
				},
				"patternProperties": {
					"type": "object",
					"additionalProperties": { "$ref": "#" },
					"propertyNames": { "format": "regex" },
					"default": {}
				},
				"dependencies": {
					"type": "object",
					"additionalProperties": { "anyOf": [{ "$ref": "#" }, { "$ref": "#/definitions/stringArray" }] }
				},
				"propertyNames": { "$ref": "#" },
				"const": true,
				"enum": {
					"type": "array",
					"items": true,
					"minItems": 1,
					"uniqueItems": true
				},
				"type": { "anyOf": [{ "$ref": "#/definitions/simpleTypes" }, {
					"type": "array",
					"items": { "$ref": "#/definitions/simpleTypes" },
					"minItems": 1,
					"uniqueItems": true
				}] },
				"format": { "type": "string" },
				"contentMediaType": { "type": "string" },
				"contentEncoding": { "type": "string" },
				"if": { "$ref": "#" },
				"then": { "$ref": "#" },
				"else": { "$ref": "#" },
				"allOf": { "$ref": "#/definitions/schemaArray" },
				"anyOf": { "$ref": "#/definitions/schemaArray" },
				"oneOf": { "$ref": "#/definitions/schemaArray" },
				"not": { "$ref": "#" }
			},
			"default": true
		},
		"https://json-schema.org/draft/2020-12/schema": {
			$id: "https://json-schema.org/draft/2020-12/schema",
			$schema: "https://json-schema.org/draft/2020-12/schema",
			title: "(Flattened static) Core and Validation specifications meta-schema",
			type: ["object", "boolean"],
			properties: {
				definitions: {
					$comment: "While no longer an official keyword as it is replaced by $defs, this keyword is retained in the meta-schema to prevent incompatible extensions as it remains in common use.",
					type: "object",
					additionalProperties: { $ref: "#" },
					default: {}
				},
				dependencies: {
					$comment: "\"dependencies\" is no longer a keyword, but schema authors should avoid redefining it to facilitate a smooth transition to \"dependentSchemas\" and \"dependentRequired\"",
					type: "object",
					additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/$defs/stringArray" }] }
				},
				$id: {
					type: "string",
					format: "uri-reference",
					$comment: "Non-empty fragments not allowed.",
					pattern: "^[^#]*#?$"
				},
				$schema: {
					type: "string",
					format: "uri"
				},
				$anchor: {
					type: "string",
					pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
				},
				$ref: {
					type: "string",
					format: "uri-reference"
				},
				$dynamicRef: {
					type: "string",
					format: "uri-reference"
				},
				$vocabulary: {
					type: "object",
					propertyNames: {
						type: "string",
						format: "uri"
					},
					additionalProperties: { type: "boolean" }
				},
				$comment: { type: "string" },
				$defs: {
					type: "object",
					additionalProperties: { $ref: "#" },
					default: {}
				},
				prefixItems: { $ref: "#/$defs/schemaArray" },
				items: { $ref: "#" },
				contains: { $ref: "#" },
				additionalProperties: { $ref: "#" },
				properties: {
					type: "object",
					additionalProperties: { $ref: "#" },
					default: {}
				},
				patternProperties: {
					type: "object",
					additionalProperties: { $ref: "#" },
					propertyNames: { format: "regex" },
					default: {}
				},
				dependentSchemas: {
					type: "object",
					additionalProperties: { $ref: "#" }
				},
				propertyNames: { $ref: "#" },
				if: { $ref: "#" },
				then: { $ref: "#" },
				else: { $ref: "#" },
				allOf: { $ref: "#/$defs/schemaArray" },
				anyOf: { $ref: "#/$defs/schemaArray" },
				oneOf: { $ref: "#/$defs/schemaArray" },
				not: { $ref: "#" },
				unevaluatedItems: { $ref: "#" },
				unevaluatedProperties: { $ref: "#" },
				multipleOf: {
					type: "number",
					exclusiveMinimum: 0
				},
				maximum: { type: "number" },
				exclusiveMaximum: { type: "number" },
				minimum: { type: "number" },
				exclusiveMinimum: { type: "number" },
				maxLength: { $ref: "#/$defs/nonNegativeInteger" },
				minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
				pattern: {
					type: "string",
					format: "regex"
				},
				maxItems: { $ref: "#/$defs/nonNegativeInteger" },
				minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
				uniqueItems: {
					type: "boolean",
					default: false
				},
				maxContains: { $ref: "#/$defs/nonNegativeInteger" },
				minContains: {
					$ref: "#/$defs/nonNegativeInteger",
					default: 1
				},
				maxProperties: { $ref: "#/$defs/nonNegativeInteger" },
				minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
				required: { $ref: "#/$defs/stringArray" },
				dependentRequired: {
					type: "object",
					additionalProperties: { $ref: "#/$defs/stringArray" }
				},
				const: true,
				enum: {
					type: "array",
					items: true
				},
				type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, {
					type: "array",
					items: { $ref: "#/$defs/simpleTypes" },
					minItems: 1,
					uniqueItems: true
				}] },
				title: { type: "string" },
				description: { type: "string" },
				default: true,
				deprecated: {
					type: "boolean",
					default: false
				},
				readOnly: {
					type: "boolean",
					default: false
				},
				writeOnly: {
					type: "boolean",
					default: false
				},
				examples: {
					type: "array",
					items: true
				},
				format: { type: "string" },
				contentMediaType: { type: "string" },
				contentEncoding: { type: "string" },
				contentSchema: { $ref: "#" }
			},
			$defs: {
				schemaArray: {
					type: "array",
					minItems: 1,
					items: { $ref: "#" }
				},
				nonNegativeInteger: {
					type: "integer",
					minimum: 0
				},
				nonNegativeIntegerDefault0: {
					$ref: "#/$defs/nonNegativeInteger",
					default: 0
				},
				simpleTypes: { enum: [
					"array",
					"boolean",
					"integer",
					"null",
					"number",
					"object",
					"string"
				] },
				stringArray: {
					type: "array",
					items: { type: "string" },
					uniqueItems: true,
					default: []
				}
			}
		},
		"https://json-schema.org/draft/2019-09/schema": {
			$id: "https://json-schema.org/draft/2019-09/schema",
			$schema: "https://json-schema.org/draft/2019-09/schema",
			title: "(Flattened static) Core and Validation specifications meta-schema",
			type: ["object", "boolean"],
			properties: {
				definitions: {
					$comment: "While no longer an official keyword as it is replaced by $defs, this keyword is retained in the meta-schema to prevent incompatible extensions as it remains in common use.",
					type: "object",
					additionalProperties: { $ref: "#" },
					default: {}
				},
				dependencies: {
					$comment: "\"dependencies\" is no longer a keyword, but schema authors should avoid redefining it to facilitate a smooth transition to \"dependentSchemas\" and \"dependentRequired\"",
					type: "object",
					additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/$defs/stringArray" }] }
				},
				$id: {
					type: "string",
					format: "uri-reference",
					$comment: "Non-empty fragments not allowed.",
					pattern: "^[^#]*#?$"
				},
				$schema: {
					type: "string",
					format: "uri"
				},
				$anchor: {
					type: "string",
					pattern: "^[A-Za-z][-A-Za-z0-9.:_]*$"
				},
				$ref: {
					type: "string",
					format: "uri-reference"
				},
				$recursiveAnchor: {
					type: "boolean",
					default: false
				},
				$vocabulary: {
					type: "object",
					propertyNames: {
						type: "string",
						format: "uri"
					},
					additionalProperties: { type: "boolean" }
				},
				$comment: { type: "string" },
				$defs: {
					type: "object",
					additionalProperties: { $ref: "#" },
					default: {}
				},
				additionalItems: { $ref: "#" },
				unevaluatedItems: { $ref: "#" },
				items: { anyOf: [{ $ref: "#" }, { $ref: "#/$defs/schemaArray" }] },
				contains: { $ref: "#" },
				additionalProperties: { $ref: "#" },
				unevaluatedProperties: { $ref: "#" },
				properties: {
					type: "object",
					additionalProperties: { $ref: "#" },
					default: {}
				},
				patternProperties: {
					type: "object",
					additionalProperties: { $ref: "#" },
					propertyNames: { format: "regex" },
					default: {}
				},
				dependentSchemas: {
					type: "object",
					additionalProperties: { $ref: "#" }
				},
				propertyNames: { $ref: "#" },
				if: { $ref: "#" },
				then: { $ref: "#" },
				else: { $ref: "#" },
				allOf: { $ref: "#/$defs/schemaArray" },
				anyOf: { $ref: "#/$defs/schemaArray" },
				oneOf: { $ref: "#/$defs/schemaArray" },
				not: { $ref: "#" },
				multipleOf: {
					type: "number",
					exclusiveMinimum: 0
				},
				maximum: { type: "number" },
				exclusiveMaximum: { type: "number" },
				minimum: { type: "number" },
				exclusiveMinimum: { type: "number" },
				maxLength: { $ref: "#/$defs/nonNegativeInteger" },
				minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
				pattern: {
					type: "string",
					format: "regex"
				},
				maxItems: { $ref: "#/$defs/nonNegativeInteger" },
				minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
				uniqueItems: {
					type: "boolean",
					default: false
				},
				maxContains: { $ref: "#/$defs/nonNegativeInteger" },
				minContains: {
					$ref: "#/$defs/nonNegativeInteger",
					default: 1
				},
				maxProperties: { $ref: "#/$defs/nonNegativeInteger" },
				minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
				required: { $ref: "#/$defs/stringArray" },
				dependentRequired: {
					type: "object",
					additionalProperties: { $ref: "#/$defs/stringArray" }
				},
				const: true,
				enum: {
					type: "array",
					items: true
				},
				type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, {
					type: "array",
					items: { $ref: "#/$defs/simpleTypes" },
					minItems: 1,
					uniqueItems: true
				}] },
				title: { type: "string" },
				description: { type: "string" },
				default: true,
				deprecated: {
					type: "boolean",
					default: false
				},
				readOnly: {
					type: "boolean",
					default: false
				},
				writeOnly: {
					type: "boolean",
					default: false
				},
				examples: {
					type: "array",
					items: true
				},
				format: { type: "string" },
				contentMediaType: { type: "string" },
				contentEncoding: { type: "string" },
				contentSchema: { $ref: "#" }
			},
			$defs: {
				schemaArray: {
					type: "array",
					minItems: 1,
					items: { $ref: "#" }
				},
				nonNegativeInteger: {
					type: "integer",
					minimum: 0
				},
				nonNegativeIntegerDefault0: {
					$ref: "#/$defs/nonNegativeInteger",
					default: 0
				},
				simpleTypes: { enum: [
					"array",
					"boolean",
					"integer",
					"null",
					"number",
					"object",
					"string"
				] },
				stringArray: {
					type: "array",
					items: { type: "string" },
					uniqueItems: true,
					default: []
				}
			}
		}
	}
};
const descriptions = {
	id: import_main$2.t("A unique identifier for the schema."),
	$schema: import_main$2.t("The schema to verify this document against."),
	title: import_main$2.t("A descriptive title of the schema."),
	description: import_main$2.t("A long description of the schema. Used in hover menus and suggestions."),
	default: import_main$2.t("A default value. Used by suggestions."),
	multipleOf: import_main$2.t("A number that should cleanly divide the current value (i.e. have no remainder)."),
	maximum: import_main$2.t("The maximum numerical value, inclusive by default."),
	exclusiveMaximum: import_main$2.t("Makes the maximum property exclusive."),
	minimum: import_main$2.t("The minimum numerical value, inclusive by default."),
	exclusiveMinimum: import_main$2.t("Makes the minimum property exclusive."),
	maxLength: import_main$2.t("The maximum length of a string."),
	minLength: import_main$2.t("The minimum length of a string."),
	pattern: import_main$2.t("A regular expression to match the string against. It is not implicitly anchored."),
	additionalItems: import_main$2.t("For arrays, only when items is set as an array. If items are a schema, this schema validates items after the ones specified by the items schema. If false, additional items will cause validation to fail."),
	items: import_main$2.t("For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on."),
	maxItems: import_main$2.t("The maximum number of items that can be inside an array. Inclusive."),
	minItems: import_main$2.t("The minimum number of items that can be inside an array. Inclusive."),
	uniqueItems: import_main$2.t("If all of the items in the array must be unique. Defaults to false."),
	maxProperties: import_main$2.t("The maximum number of properties an object can have. Inclusive."),
	minProperties: import_main$2.t("The minimum number of properties an object can have. Inclusive."),
	required: import_main$2.t("An array of strings that lists the names of all properties required on this object."),
	additionalProperties: import_main$2.t("Either a schema or a boolean. If a schema, used to validate all properties not matched by 'properties', 'propertyNames', or 'patternProperties'. If false, any properties not defined by the adjacent keywords will cause this schema to fail."),
	definitions: import_main$2.t("Not used for validation. Place subschemas here that you wish to reference inline with $ref."),
	properties: import_main$2.t("A map of property names to schemas for each property."),
	patternProperties: import_main$2.t("A map of regular expressions on property names to schemas for matching properties."),
	dependencies: import_main$2.t("A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object."),
	enum: import_main$2.t("The set of literal values that are valid."),
	type: import_main$2.t("Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types."),
	format: import_main$2.t("Describes the format expected for the value. By default, not used for validation"),
	allOf: import_main$2.t("An array of schemas, all of which must match."),
	anyOf: import_main$2.t("An array of schemas, where at least one must match."),
	oneOf: import_main$2.t("An array of schemas, exactly one of which must match."),
	not: import_main$2.t("A schema which must not match."),
	$id: import_main$2.t("A unique identifier for the schema."),
	$ref: import_main$2.t("Reference a definition hosted on any location."),
	$comment: import_main$2.t("Comments from schema authors to readers or maintainers of the schema."),
	readOnly: import_main$2.t("Indicates that the value of the instance is managed exclusively by the owning authority."),
	examples: import_main$2.t("Sample JSON values associated with a particular schema, for the purpose of illustrating usage."),
	contains: import_main$2.t("An array instance is valid against \"contains\" if at least one of its elements is valid against the given schema."),
	propertyNames: import_main$2.t("If the instance is an object, this keyword validates if every property name in the instance validates against the provided schema."),
	const: import_main$2.t("An instance validates successfully against this keyword if its value is equal to the value of the keyword."),
	contentMediaType: import_main$2.t("Describes the media type of a string property."),
	contentEncoding: import_main$2.t("Describes the content encoding of a string property."),
	if: import_main$2.t("The validation outcome of the \"if\" subschema controls which of the \"then\" or \"else\" keywords are evaluated."),
	then: import_main$2.t("The \"then\" subschema is used for validation when the \"if\" subschema succeeds."),
	else: import_main$2.t("The \"else\" subschema is used for validation when the \"if\" subschema fails.")
};
for (const schemaName in schemaContributions.schemas) {
	const schema = schemaContributions.schemas[schemaName];
	for (const property in schema.properties) {
		let propertyObject = schema.properties[property];
		if (typeof propertyObject === "boolean") propertyObject = schema.properties[property] = {};
		const description = descriptions[property];
		if (description) propertyObject["description"] = description;
	}
}
//#endregion
//#region servers/json/node_modules/vscode-json-languageservice/lib/esm/utils/glob.js
function createRegex(glob, opts) {
	if (typeof glob !== "string") throw new TypeError("Expected a string");
	const str = String(glob);
	let reStr = "";
	const extended = opts ? !!opts.extended : false;
	const globstar = opts ? !!opts.globstar : false;
	let inGroup = false;
	const flags = opts && typeof opts.flags === "string" ? opts.flags : "";
	let c;
	for (let i = 0, len = str.length; i < len; i++) {
		c = str[i];
		switch (c) {
			case "/":
			case "$":
			case "^":
			case "+":
			case ".":
			case "(":
			case ")":
			case "=":
			case "!":
			case "|":
				reStr += "\\" + c;
				break;
			case "?": if (extended) {
				reStr += ".";
				break;
			}
			case "[":
			case "]": if (extended) {
				reStr += c;
				break;
			}
			case "{": if (extended) {
				inGroup = true;
				reStr += "(";
				break;
			}
			case "}": if (extended) {
				inGroup = false;
				reStr += ")";
				break;
			}
			case ",":
				if (inGroup) {
					reStr += "|";
					break;
				}
				reStr += "\\" + c;
				break;
			case "*":
				const prevChar = str[i - 1];
				let starCount = 1;
				while (str[i + 1] === "*") {
					starCount++;
					i++;
				}
				const nextChar = str[i + 1];
				if (!globstar) reStr += ".*";
				else if (starCount > 1 && (prevChar === "/" || prevChar === void 0 || prevChar === "{" || prevChar === ",") && (nextChar === "/" || nextChar === void 0 || nextChar === "," || nextChar === "}")) {
					if (nextChar === "/") i++;
					else if (prevChar === "/" && reStr.endsWith("\\/")) reStr = reStr.substr(0, reStr.length - 2);
					reStr += "((?:[^/]*(?:/|$))*)";
				} else reStr += "([^/]*)";
				break;
			default: reStr += c;
		}
	}
	if (!flags || !~flags.indexOf("g")) reStr = "^" + reStr + "$";
	return new RegExp(reStr, flags);
}
//#endregion
//#region servers/json/node_modules/vscode-json-languageservice/lib/esm/services/jsonSchemaService.js
init_main();
const hasSchemePattern = /^[A-Za-z][A-Za-z0-9+\-.+]*:\/.*/.source;
const hasSchemeRegex = new RegExp(hasSchemePattern);
const BANG = "!";
const PATH_SEP = "/";
var FilePatternAssociation = class {
	constructor(pattern, folderUri, uris) {
		this.folderUri = folderUri;
		this.uris = uris;
		this.globWrappers = [];
		try {
			for (let patternString of pattern) {
				const include = patternString[0] !== BANG;
				if (!include) patternString = patternString.substring(1);
				if (patternString.length > 0) {
					if (patternString[0] === PATH_SEP) patternString = patternString.substring(1);
					this.globWrappers.push({
						regexp: createRegex("**/" + patternString, {
							extended: true,
							globstar: true
						}),
						include
					});
				}
			}
			if (folderUri) {
				folderUri = normalizeResourceForMatching(folderUri);
				if (!folderUri.endsWith("/")) folderUri = folderUri + "/";
				this.folderUri = folderUri;
			}
		} catch (e) {
			this.globWrappers.length = 0;
			this.uris = [];
		}
	}
	matchesPattern(fileName) {
		if (this.folderUri && !fileName.startsWith(this.folderUri)) return false;
		let match = false;
		for (const { regexp, include } of this.globWrappers) if (regexp.test(fileName)) match = include;
		return match;
	}
	getURIs() {
		return this.uris;
	}
};
var SchemaHandle = class {
	constructor(service, uri, unresolvedSchemaContent) {
		this.service = service;
		this.uri = uri;
		this.dependencies = /* @__PURE__ */ new Set();
		this.anchors = void 0;
		if (unresolvedSchemaContent) this.unresolvedSchema = this.service.promise.resolve(new UnresolvedSchema(unresolvedSchemaContent));
	}
	getUnresolvedSchema() {
		if (!this.unresolvedSchema) this.unresolvedSchema = this.service.loadSchema(this.uri);
		return this.unresolvedSchema;
	}
	getResolvedSchema() {
		if (!this.resolvedSchema) this.resolvedSchema = this.getUnresolvedSchema().then((unresolved) => {
			return this.service.resolveSchemaContent(unresolved, this);
		});
		return this.resolvedSchema;
	}
	clearSchema() {
		const hasChanges = !!this.unresolvedSchema;
		this.resolvedSchema = void 0;
		this.unresolvedSchema = void 0;
		this.dependencies.clear();
		this.anchors = void 0;
		return hasChanges;
	}
	setSchemaContent(schemaContent) {
		this.unresolvedSchema = this.service.promise.resolve(new UnresolvedSchema(schemaContent));
		this.resolvedSchema = void 0;
		this.anchors = void 0;
	}
};
var UnresolvedSchema = class {
	constructor(schema, errors = []) {
		this.schema = schema;
		this.errors = errors;
	}
};
function toDiagnostic(message, code, relatedURL) {
	return {
		message,
		code,
		relatedInformation: relatedURL ? [{
			location: {
				uri: relatedURL,
				range: Range.create(0, 0, 0, 0)
			},
			message
		}] : void 0
	};
}
var ResolvedSchema = class {
	constructor(schema, errors = [], warnings = [], schemaDraft, activeVocabularies) {
		this.schema = schema;
		this.errors = errors;
		this.warnings = warnings;
		this.schemaDraft = schemaDraft;
		this.activeVocabularies = activeVocabularies;
	}
	getSection(path) {
		const schemaRef = this.getSectionRecursive(path, this.schema);
		if (schemaRef) return asSchema(schemaRef);
	}
	getSectionRecursive(path, schema) {
		if (!schema || typeof schema === "boolean" || path.length === 0) return schema;
		const next = path.shift();
		if (schema.properties && typeof schema.properties[next]) return this.getSectionRecursive(path, schema.properties[next]);
		else if (schema.patternProperties) {
			for (const pattern of Object.keys(schema.patternProperties)) if (extendedRegExp(pattern)?.test(next)) return this.getSectionRecursive(path, schema.patternProperties[pattern]);
		} else if (typeof schema.additionalProperties === "object") return this.getSectionRecursive(path, schema.additionalProperties);
		else if (next.match("[0-9]+")) {
			if (Array.isArray(schema.items)) {
				const index = parseInt(next, 10);
				if (!isNaN(index) && schema.items[index]) return this.getSectionRecursive(path, schema.items[index]);
			} else if (schema.items) return this.getSectionRecursive(path, schema.items);
		}
	}
};
var JSONSchemaService = class JSONSchemaService {
	static traverseSchemaProperties(node, callback) {
		const schemaMapProps = [
			"definitions",
			"$defs",
			"properties",
			"patternProperties",
			"dependencies",
			"dependentSchemas"
		];
		const singleSchemaProps = [
			"additionalItems",
			"additionalProperties",
			"not",
			"contains",
			"propertyNames",
			"if",
			"then",
			"else",
			"unevaluatedItems",
			"unevaluatedProperties",
			"items"
		];
		const schemaArrayProps = [
			"anyOf",
			"allOf",
			"oneOf",
			"prefixItems"
		];
		const visitValue = (value) => {
			if (value) {
				if (Array.isArray(value)) value.forEach((item) => visitValue(item));
				else if (typeof value === "object") callback(value);
			}
		};
		for (const prop of schemaMapProps) {
			const map = node[prop];
			if (map && typeof map === "object") Object.values(map).forEach(visitValue);
		}
		for (const prop of singleSchemaProps) {
			const propValue = node[prop];
			if (propValue) visitValue(propValue);
		}
		for (const prop of schemaArrayProps) {
			const propValue = node[prop];
			if (propValue) visitValue(propValue);
		}
	}
	constructor(requestService, contextService, promiseConstructor) {
		this.contextService = contextService;
		this.requestService = requestService;
		this.promiseConstructor = promiseConstructor || Promise;
		this.callOnDispose = [];
		this.contributionSchemas = {};
		this.contributionAssociations = [];
		this.schemasById = {};
		this.filePatternAssociations = [];
		this.registeredSchemasIds = {};
	}
	getRegisteredSchemaIds(filter) {
		return Object.keys(this.registeredSchemasIds).filter((id) => {
			const scheme = u.parse(id).scheme;
			return scheme !== "schemaservice" && (!filter || filter(scheme));
		});
	}
	get promise() {
		return this.promiseConstructor;
	}
	dispose() {
		while (this.callOnDispose.length > 0) this.callOnDispose.pop()();
	}
	onResourceChange(uri) {
		this.cachedSchemaForResource = void 0;
		let hasChanges = false;
		uri = normalizeId(uri);
		const toWalk = [uri];
		const all = Object.keys(this.schemasById).map((key) => this.schemasById[key]);
		while (toWalk.length) {
			const curr = toWalk.pop();
			for (let i = 0; i < all.length; i++) {
				const handle = all[i];
				if (handle && (handle.uri === curr || handle.dependencies.has(curr))) {
					if (handle.uri !== curr) toWalk.push(handle.uri);
					if (handle.clearSchema()) hasChanges = true;
					all[i] = void 0;
				}
			}
		}
		return hasChanges;
	}
	setSchemaContributions(schemaContributions) {
		if (schemaContributions.schemas) {
			const schemas = schemaContributions.schemas;
			for (const id in schemas) {
				const normalizedId = normalizeId(id);
				this.contributionSchemas[normalizedId] = this.addSchemaHandle(normalizedId, schemas[id]);
			}
		}
		if (Array.isArray(schemaContributions.schemaAssociations)) {
			const schemaAssociations = schemaContributions.schemaAssociations;
			for (let schemaAssociation of schemaAssociations) {
				const uris = schemaAssociation.uris.map(normalizeId);
				const association = this.addFilePatternAssociation(schemaAssociation.pattern, schemaAssociation.folderUri, uris);
				this.contributionAssociations.push(association);
			}
		}
	}
	addSchemaHandle(id, unresolvedSchemaContent) {
		const schemaHandle = new SchemaHandle(this, id, unresolvedSchemaContent);
		this.schemasById[id] = schemaHandle;
		return schemaHandle;
	}
	getOrAddSchemaHandle(id, unresolvedSchemaContent) {
		return this.schemasById[id] || this.addSchemaHandle(id, unresolvedSchemaContent);
	}
	addFilePatternAssociation(pattern, folderUri, uris) {
		const fpa = new FilePatternAssociation(pattern, folderUri, uris);
		this.filePatternAssociations.push(fpa);
		return fpa;
	}
	registerExternalSchema(config) {
		const id = normalizeId(config.uri);
		this.registeredSchemasIds[id] = true;
		this.cachedSchemaForResource = void 0;
		if (config.fileMatch && config.fileMatch.length) this.addFilePatternAssociation(config.fileMatch, config.folderUri, [id]);
		return config.schema ? this.addSchemaHandle(id, config.schema) : this.getOrAddSchemaHandle(id);
	}
	clearExternalSchemas() {
		this.schemasById = {};
		this.filePatternAssociations = [];
		this.registeredSchemasIds = {};
		this.cachedSchemaForResource = void 0;
		for (const id in this.contributionSchemas) {
			this.schemasById[id] = this.contributionSchemas[id];
			this.registeredSchemasIds[id] = true;
		}
		for (const contributionAssociation of this.contributionAssociations) this.filePatternAssociations.push(contributionAssociation);
	}
	getResolvedSchema(schemaId) {
		const id = normalizeId(schemaId);
		const schemaHandle = this.schemasById[id];
		if (schemaHandle) return schemaHandle.getResolvedSchema();
		return this.promise.resolve(void 0);
	}
	loadSchema(url) {
		if (!this.requestService) {
			const errorMessage = import_main$2.t("Unable to load schema from '{0}'. No schema request service available", toDisplayString(url));
			return this.promise.resolve(new UnresolvedSchema({}, [toDiagnostic(errorMessage, ErrorCode.SchemaResolveError, url)]));
		}
		return this.requestService(url).then((content) => {
			if (!content) return new UnresolvedSchema({}, [toDiagnostic(import_main$2.t("Unable to load schema from '{0}': No content.", toDisplayString(url)), ErrorCode.SchemaResolveError, url)]);
			const errors = [];
			if (content.charCodeAt(0) === 65279) {
				errors.push(toDiagnostic(import_main$2.t("Problem reading content from '{0}': UTF-8 with BOM detected, only UTF 8 is allowed.", toDisplayString(url)), ErrorCode.SchemaResolveError, url));
				content = content.trimStart();
			}
			let schemaContent = {};
			const jsonErrors = [];
			schemaContent = parse$1(content, jsonErrors);
			if (jsonErrors.length) errors.push(toDiagnostic(import_main$2.t("Unable to parse content from '{0}': Parse error at offset {1}.", toDisplayString(url), jsonErrors[0].offset), ErrorCode.SchemaResolveError, url));
			return new UnresolvedSchema(schemaContent, errors);
		}, (error) => {
			let { message, code } = error;
			if (typeof message !== "string") {
				let errorMessage = error.toString();
				const errorSplit = error.toString().split("Error: ");
				if (errorSplit.length > 1) errorMessage = errorSplit[1];
				if (endsWith(errorMessage, ".")) errorMessage = errorMessage.substr(0, errorMessage.length - 1);
				message = errorMessage;
			}
			let errorCode = ErrorCode.SchemaResolveError;
			if (typeof code === "number" && code < 65536) errorCode += code;
			return new UnresolvedSchema({}, [toDiagnostic(import_main$2.t("Unable to load schema from '{0}': {1}.", toDisplayString(url), message), errorCode, url)]);
		});
	}
	resolveSchemaContent(schemaToResolve, handle) {
		const resolveErrors = schemaToResolve.errors.slice(0);
		const schema = schemaToResolve.schema;
		const embeddedRegisteredFor = /* @__PURE__ */ new Set();
		const embeddedSchemaUris = /* @__PURE__ */ new Set();
		const schemaDraft = schema.$schema ? getSchemaDraftFromId(schema.$schema) : void 0;
		if (schemaDraft === SchemaDraft.v3) return this.promise.resolve(new ResolvedSchema({}, [toDiagnostic(import_main$2.t("Draft-03 schemas are not supported."), ErrorCode.SchemaUnsupportedFeature)], [], schemaDraft, void 0));
		let activeVocabularies = void 0;
		const extractVocabularies = (metaschema) => {
			if (!metaschema.$vocabulary || typeof metaschema.$vocabulary !== "object") return;
			const vocabs = /* @__PURE__ */ new Map();
			for (const [uri, required] of Object.entries(metaschema.$vocabulary)) vocabs.set(uri, required === true);
			return vocabs.size > 0 ? vocabs : void 0;
		};
		const contextService = this.contextService;
		const setHidden = (obj, key, value) => {
			Object.defineProperty(obj, key, {
				value,
				enumerable: false,
				writable: true,
				configurable: true
			});
		};
		const dynamicRefInfoOf = (node) => {
			let info = node.$dynamicRefInfo;
			if (!info) {
				info = {};
				setHidden(node, "$dynamicRefInfo", info);
			}
			return info;
		};
		const findSectionAndBase = (schema, path, baseHandle) => {
			path = decodeURIComponent(path);
			let current = schema;
			let currentBaseHandle = baseHandle;
			if (path[0] === "/") path = path.substring(1);
			path.split("/").some((part) => {
				part = part.replace(/~1/g, "/").replace(/~0/g, "~");
				current = current[part];
				if (current === void 0 || current === null) return true;
				const id = getSchemaId(current);
				if (isString(id) && id.charAt(0) !== "#") {
					let resolvedUri = id;
					if (contextService && !hasSchemeRegex.test(id)) resolvedUri = contextService.resolveRelativePath(id, currentBaseHandle.uri);
					resolvedUri = normalizeId(resolvedUri);
					currentBaseHandle = this.getOrAddSchemaHandle(resolvedUri);
				}
				return false;
			});
			return {
				section: current,
				baseHandle: currentBaseHandle
			};
		};
		const findSchemaById = (schema, handle, id) => {
			if (!handle.anchors) handle.anchors = collectAnchors(schema);
			return handle.anchors.get(id);
		};
		const getSchemaId = (schema) => schema.$id || schema.id || schema.$originalId;
		const unionAnchorMaps = (target, srcMaps) => {
			if (srcMaps === void 0) return;
			let maps = target.$anchorMaps;
			if (maps === void 0) {
				maps = {
					dynamic: /* @__PURE__ */ new Map(),
					local: /* @__PURE__ */ new Map()
				};
				setHidden(target, "$anchorMaps", maps);
			}
			for (const [name, node] of srcMaps.dynamic) if (!maps.dynamic.has(name)) maps.dynamic.set(name, node);
		};
		const merge = (target, section) => {
			const targetHasSiblingKeywords = hasRefSiblingKeywords(target);
			for (const key in section) {
				if (!section.hasOwnProperty(key) || key === "id" || key === "$id") continue;
				target[key] = (key === "properties" || key === "patternProperties") && typeof section[key] === "object" && section[key] !== null && typeof target[key] === "object" && target[key] !== null ? {
					...target[key],
					...section[key]
				} : section[key];
			}
			const id = getSchemaId(section);
			if (id && !getSchemaId(target) && !targetHasSiblingKeywords) setHidden(target, "$originalId", id);
			const src = section;
			const dst = target;
			if (src.$dynamicRefInfo !== void 0 && dst.$dynamicRefInfo === void 0) setHidden(target, "$dynamicRefInfo", src.$dynamicRefInfo);
			unionAnchorMaps(dst, src.$anchorMaps);
		};
		const hasKeyword = (schema, keyword) => schema[keyword] !== void 0;
		const hasAnyKeyword = (schema, keywords) => keywords.some((keyword) => hasKeyword(schema, keyword));
		const objectPropertyKeywords = ["properties", "patternProperties"];
		const ignoredRefSiblingKeywords = /* @__PURE__ */ new Set([
			"$ref",
			"$schema",
			"$id",
			"id",
			"$comment"
		]);
		const hasRefSiblingKeywords = (schema) => Object.keys(schema).some((key) => !ignoredRefSiblingKeywords.has(key));
		const objectEvaluatorKeywords = [
			...objectPropertyKeywords,
			"additionalProperties",
			"dependentSchemas",
			"allOf",
			"anyOf",
			"oneOf",
			"if",
			"then",
			"else"
		];
		const arrayEvaluatorKeywords = [
			"items",
			"additionalItems",
			"prefixItems",
			"allOf",
			"anyOf",
			"oneOf",
			"if",
			"then",
			"else"
		];
		const containsBoundKeywords = ["minContains", "maxContains"];
		const conditionalBranchKeywords = ["then", "else"];
		const arrayApplicatorKeywords = [
			"items",
			"prefixItems",
			"additionalItems"
		];
		const uses2020_12ArrayAnnotations = schemaDraft === void 0 || schemaDraft >= SchemaDraft.v2020_12;
		const needsScopeIsolation = (referencedSchema, referencingSchema) => {
			const hasSiblingObjectProperties = hasAnyKeyword(referencingSchema, objectPropertyKeywords);
			if (hasKeyword(referencedSchema, "additionalProperties") && hasSiblingObjectProperties) return true;
			if (hasKeyword(referencedSchema, "additionalItems") && Array.isArray(referencingSchema.items)) return true;
			const hasSiblingObjectEvaluators = hasAnyKeyword(referencingSchema, objectEvaluatorKeywords);
			if (hasKeyword(referencedSchema, "unevaluatedProperties") && hasSiblingObjectEvaluators) return true;
			const hasSiblingArrayEvaluators = hasAnyKeyword(referencingSchema, arrayEvaluatorKeywords) || uses2020_12ArrayAnnotations && hasKeyword(referencingSchema, "contains");
			if (hasKeyword(referencedSchema, "unevaluatedItems") && hasSiblingArrayEvaluators) return true;
			if (hasKeyword(referencingSchema, "unevaluatedItems") && hasAnyKeyword(referencedSchema, arrayApplicatorKeywords)) return true;
			if (hasKeyword(referencedSchema, "contains") && hasAnyKeyword(referencingSchema, containsBoundKeywords)) return true;
			if (Array.isArray(referencedSchema.items) && Array.isArray(referencingSchema.items)) return true;
			if (hasAnyKeyword(referencedSchema, containsBoundKeywords) && hasKeyword(referencingSchema, "contains")) return true;
			if (hasKeyword(referencedSchema, "if") && hasAnyKeyword(referencingSchema, conditionalBranchKeywords)) return true;
			if (hasAnyKeyword(referencedSchema, conditionalBranchKeywords) && hasKeyword(referencingSchema, "if")) return true;
			return uses2020_12ArrayAnnotations && hasKeyword(referencedSchema, "items") && hasKeyword(referencingSchema, "prefixItems");
		};
		const mergeRef = (target, sourceRoot, sourceHandle, refSegment, isolateExternalResource = false) => {
			let section;
			let sectionBaseHandle = sourceHandle;
			if (refSegment === void 0 || refSegment.length === 0) section = sourceRoot;
			else if (refSegment.charAt(0) === "/") ({section, baseHandle: sectionBaseHandle} = findSectionAndBase(sourceRoot, refSegment, sourceHandle));
			else section = findSchemaById(sourceRoot, sourceHandle, refSegment);
			if (typeof section === "boolean") section = section ? {} : { not: {} };
			if (section) {
				if (section.$ref && (sectionBaseHandle !== sourceHandle || hasRefSiblingKeywords(target))) {
					const innerSegments = section.$ref.split("#", 2);
					if (innerSegments[0].length > 0 && contextService && !hasSchemeRegex.test(innerSegments[0])) section = {
						...section,
						$ref: contextService.resolveRelativePath(innerSegments[0], sectionBaseHandle.uri) + (innerSegments[1] !== void 0 ? "#" + innerSegments[1] : "")
					};
				}
				const reservedKeys = /* @__PURE__ */ new Set([
					"$ref",
					"$defs",
					"definitions",
					"$schema",
					"$id",
					"id"
				]);
				const keepOnWrapperKeys = /* @__PURE__ */ new Set([
					"$recursiveAnchor",
					"$dynamicAnchor",
					"unevaluatedItems",
					"unevaluatedProperties"
				]);
				if (schemaDraft !== void 0 && schemaDraft < SchemaDraft.v2019_09) {
					for (const key in target) if (target.hasOwnProperty(key) && !reservedKeys.has(key)) delete target[key];
					merge(target, section);
				} else if (isolateExternalResource || needsScopeIsolation(section, target)) {
					const siblingSchema = {};
					const refSchema = { ...section };
					if (isolateExternalResource) {
						let resourceUri = sectionBaseHandle.uri;
						const sectionId = section.$id || section.id;
						if (isString(sectionId) && sectionId.charAt(0) !== "#") resourceUri = contextService && !hasSchemeRegex.test(sectionId) ? contextService.resolveRelativePath(sectionId, sectionBaseHandle.uri) : sectionId;
						delete refSchema.$id;
						delete refSchema.id;
						setHidden(refSchema, "$originalId", normalizeId(resourceUri));
					}
					for (const key in target) if (target.hasOwnProperty(key) && !reservedKeys.has(key) && !keepOnWrapperKeys.has(key)) {
						const k = key;
						siblingSchema[k] = target[k];
						delete target[k];
					}
					target.allOf = [refSchema, siblingSchema];
				} else merge(target, section);
			} else {
				const message = import_main$2.t("$ref '{0}' in '{1}' can not be resolved.", refSegment || "", sourceHandle.uri);
				resolveErrors.push(toDiagnostic(message, ErrorCode.SchemaResolveError));
			}
		};
		const getExternalSchemaHandle = (uri, parentHandle) => {
			if (contextService && !hasSchemeRegex.test(uri)) uri = contextService.resolveRelativePath(uri, parentHandle.uri);
			uri = normalizeId(uri);
			return this.getOrAddSchemaHandle(uri);
		};
		const resolveExternalLink = (node, uri, refSegment, parentHandle, continuationBase, continuationHandle, followedRedirects = /* @__PURE__ */ new Set()) => {
			const referencedHandle = getExternalSchemaHandle(uri, parentHandle);
			uri = referencedHandle.uri;
			return referencedHandle.getUnresolvedSchema().then((unresolvedSchema) => {
				parentHandle.dependencies.add(uri);
				const rootRef = unresolvedSchema.schema.$ref;
				const alreadyFollowed = followedRedirects.has(uri);
				followedRedirects.add(uri);
				if (!alreadyFollowed && refSegment !== void 0 && isString(rootRef) && Object.keys(unresolvedSchema.schema).every((key) => key === "$ref")) {
					const rootRefSegments = rootRef.split("#", 2);
					if (rootRefSegments[0].length > 0 && rootRefSegments[1] === void 0) return resolveExternalLink(node, rootRefSegments[0], refSegment, referencedHandle, continuationBase, continuationHandle, followedRedirects);
				}
				if (unresolvedSchema.errors.length) {
					const error = unresolvedSchema.errors[0];
					refSegment && uri + "" + refSegment;
					const errorMessage = refSegment ? import_main$2.t("Problems loading reference '{0}': {1}", refSegment, error.message) : error.message;
					resolveErrors.push(toDiagnostic(errorMessage, error.code, uri));
				}
				if (!embeddedRegisteredFor.has(uri)) {
					embeddedRegisteredFor.add(uri);
					registerEmbeddedSchemas(unresolvedSchema.schema, uri);
				}
				if (unresolvedSchema.schema.$anchorMaps === void 0) collectDynamicAnchors(unresolvedSchema.schema);
				mergeRef(node, unresolvedSchema.schema, referencedHandle, refSegment, continuationBase !== void 0 && !embeddedSchemaUris.has(referencedHandle.uri));
				unionAnchorMaps(node, unresolvedSchema.schema.$anchorMaps);
				return resolveRefs(node, continuationBase ?? unresolvedSchema.schema, continuationHandle ?? referencedHandle);
			});
		};
		const resolveDynamicRef = (schema, newBase, newBaseHandle, currentBaseHandle) => {
			const info = dynamicRefInfoOf(schema);
			const segments = schema.$dynamicRef.split("#", 2);
			delete schema.$dynamicRef;
			const fragment = segments[1];
			const dynamicName = isString(fragment) && fragment.length > 0 && fragment.charAt(0) !== "/" ? fragment : void 0;
			if (dynamicName !== void 0) info.name = dynamicName;
			if (segments[0].length > 0) {
				const target = {};
				info.target = target;
				const refBase = newBase === schema ? currentBaseHandle : newBaseHandle;
				return resolveExternalLink(target, segments[0], segments[1], refBase);
			}
			let target;
			if (dynamicName !== void 0 && info.scope?.$anchorMaps) target = info.scope.$anchorMaps.local.get(dynamicName);
			if (target === void 0) {
				const container = {};
				mergeRef(container, newBase, newBaseHandle, segments[1]);
				target = container;
			}
			info.target = target;
		};
		const resolveRefs = (node, parentSchema, parentHandle) => {
			const prefetchExternalSchema = (uri, parentHandle) => {
				getExternalSchemaHandle(uri, parentHandle).getUnresolvedSchema();
			};
			const prefetchExternalRefs = (schema, currentBase, currentBaseHandle, seen) => {
				if (!schema || typeof schema !== "object" || seen.has(schema)) return;
				seen.add(schema);
				const id = getSchemaId(schema);
				let newBase = currentBase;
				let newBaseHandle = currentBaseHandle;
				if (isString(id) && id.charAt(0) !== "#") {
					let resolvedUri = id;
					if (contextService && !hasSchemeRegex.test(id)) resolvedUri = contextService.resolveRelativePath(id, currentBaseHandle.uri);
					newBase = schema;
					newBaseHandle = this.getOrAddSchemaHandle(normalizeId(resolvedUri));
				}
				const refBase = newBase === schema ? currentBaseHandle : newBaseHandle;
				if (schema.$ref) {
					const segments = schema.$ref.split("#", 2);
					if (segments[0].length > 0) prefetchExternalSchema(segments[0], refBase);
					if (schemaDraft !== void 0 && schemaDraft < SchemaDraft.v2019_09) return;
				}
				if (schema.$dynamicRef && (schemaDraft === void 0 || schemaDraft >= SchemaDraft.v2020_12)) {
					const segments = schema.$dynamicRef.split("#", 2);
					if (segments[0].length > 0) prefetchExternalSchema(segments[0], refBase);
				}
				JSONSchemaService.traverseSchemaProperties(schema, (childSchema) => {
					prefetchExternalRefs(childSchema, newBase, newBaseHandle, seen);
				});
			};
			prefetchExternalRefs(node, parentSchema, parentHandle, /* @__PURE__ */ new Set());
			const traverseWithBaseTracking = (schema, currentBase, currentBaseHandle, isRoot, seen) => {
				if (!schema || typeof schema !== "object" || seen.has(schema)) return this.promise.resolve(void 0);
				seen.add(schema);
				const id = getSchemaId(schema);
				let newBase = currentBase;
				let newBaseHandle = currentBaseHandle;
				if (isString(id) && id.charAt(0) !== "#") {
					let resolvedUri = id;
					if (contextService && !hasSchemeRegex.test(id)) resolvedUri = contextService.resolveRelativePath(id, currentBaseHandle.uri);
					resolvedUri = normalizeId(resolvedUri);
					newBase = schema;
					newBaseHandle = this.getOrAddSchemaHandle(resolvedUri);
					if (!this.schemasById[resolvedUri]) this.addSchemaHandle(resolvedUri, schema);
				}
				const seenRefs = /* @__PURE__ */ new Set();
				while (schema.$ref) {
					const ref = schema.$ref;
					const segments = ref.split("#", 2);
					const isPreDraft201909 = schemaDraft !== void 0 && schemaDraft < SchemaDraft.v2019_09;
					const preservesOwnBase = !isPreDraft201909 && hasRefSiblingKeywords(schema) && (newBase === schema || schemaDraft !== void 0);
					delete schema.$ref;
					if (segments[0].length > 0) {
						const refBaseHandle = isPreDraft201909 && newBase === schema ? currentBaseHandle : newBaseHandle;
						const continuationHandle = newBase === schema ? currentBaseHandle : newBaseHandle;
						return resolveExternalLink(schema, segments[0], segments[1], refBaseHandle, preservesOwnBase ? newBase : void 0, preservesOwnBase ? continuationHandle : void 0).then(() => void 0);
					} else if (!seenRefs.has(ref)) {
						const refId = segments[1];
						mergeRef(schema, newBase, newBaseHandle, refId);
						seenRefs.add(ref);
					}
				}
				const traverseChildren = () => {
					let result = this.promise.resolve(void 0);
					JSONSchemaService.traverseSchemaProperties(schema, (childSchema) => {
						result = result.then(() => traverseWithBaseTracking(childSchema, newBase, newBaseHandle, false, seen));
					});
					return result;
				};
				if (schema.$dynamicRef && (schemaDraft === void 0 || schemaDraft >= SchemaDraft.v2020_12)) {
					const dynamicRefPromise = resolveDynamicRef(schema, newBase, newBaseHandle, currentBaseHandle);
					if (dynamicRefPromise) return dynamicRefPromise.then(() => traverseChildren());
				}
				return traverseChildren();
			};
			return traverseWithBaseTracking(node, parentSchema, parentHandle, true, /* @__PURE__ */ new Set());
		};
		const collectAnchors = (root) => {
			const result = /* @__PURE__ */ new Map();
			const seen = /* @__PURE__ */ new Set();
			const draft = root.$schema ? getSchemaDraftFromId(root.$schema) : schemaDraft;
			const traverseForAnchors = (node, isRoot) => {
				if (!node || typeof node !== "object" || seen.has(node)) return;
				seen.add(node);
				const id = getSchemaId(node);
				if (!isRoot && isString(id) && id.charAt(0) !== "#") return;
				const fragmentAnchor = (draft === void 0 || draft < SchemaDraft.v2019_09) && isString(id) && id.charAt(0) === "#" ? id.substring(1) : void 0;
				const dollarAnchor = draft === void 0 || draft >= SchemaDraft.v2019_09 ? node.$anchor : void 0;
				const dynamicAnchor = draft === void 0 || draft >= SchemaDraft.v2020_12 ? node.$dynamicAnchor : void 0;
				const registerAnchor = (anchor) => {
					if (!anchor) return;
					if (result.has(anchor) && result.get(anchor) !== node) resolveErrors.push(toDiagnostic(import_main$2.t("Duplicate anchor declaration: '{0}'", anchor), ErrorCode.SchemaResolveError));
					else result.set(anchor, node);
				};
				registerAnchor(fragmentAnchor ?? dollarAnchor);
				registerAnchor(dynamicAnchor);
				JSONSchemaService.traverseSchemaProperties(node, (childSchema) => {
					traverseForAnchors(childSchema, false);
				});
			};
			traverseForAnchors(root, true);
			return result;
		};
		const collectDynamicAnchors = (root) => {
			const draft = root && typeof root === "object" && root.$schema ? getSchemaDraftFromId(root.$schema) : schemaDraft;
			if (!(draft === void 0 || draft >= SchemaDraft.v2020_12)) return;
			const seen = /* @__PURE__ */ new Set();
			const visit = (node, resourceRoot) => {
				if (!node || typeof node !== "object" || seen.has(node)) return;
				seen.add(node);
				let currentRoot = resourceRoot;
				const id = getSchemaId(node);
				if (node === root || isString(id) && id.charAt(0) !== "#") {
					currentRoot = node;
					if (!currentRoot.$anchorMaps) setHidden(currentRoot, "$anchorMaps", {
						dynamic: /* @__PURE__ */ new Map(),
						local: /* @__PURE__ */ new Map()
					});
				}
				const maps = currentRoot.$anchorMaps;
				if (isString(node.$dynamicAnchor)) {
					if (!maps.dynamic.has(node.$dynamicAnchor)) maps.dynamic.set(node.$dynamicAnchor, node);
					if (!maps.local.has(node.$dynamicAnchor)) maps.local.set(node.$dynamicAnchor, node);
				}
				if (isString(node.$anchor) && !maps.local.has(node.$anchor)) maps.local.set(node.$anchor, node);
				if (isString(node.$dynamicRef)) dynamicRefInfoOf(node).scope = currentRoot;
				JSONSchemaService.traverseSchemaProperties(node, (childSchema) => {
					visit(childSchema, currentRoot);
				});
			};
			visit(root, root);
		};
		const registerEmbeddedSchemas = (root, baseUri) => {
			const seen = /* @__PURE__ */ new Set();
			const resolveId = (id, currentBaseUri) => {
				if (contextService && !hasSchemeRegex.test(id)) return normalizeId(contextService.resolveRelativePath(id, currentBaseUri));
				return normalizeId(id);
			};
			const visit = (node, currentBaseUri, isDocumentRoot) => {
				if (!node || typeof node !== "object" || seen.has(node)) return;
				seen.add(node);
				const id = getSchemaId(node);
				let newBaseUri = currentBaseUri;
				if (isString(id) && id.charAt(0) !== "#") {
					const resolvedUri = resolveId(id, currentBaseUri);
					if (!isDocumentRoot) embeddedSchemaUris.add(resolvedUri);
					const existingHandle = this.schemasById[resolvedUri];
					if (!existingHandle) this.addSchemaHandle(resolvedUri, node);
					else if (existingHandle !== handle) existingHandle.setSchemaContent(node);
					newBaseUri = resolvedUri;
				}
				JSONSchemaService.traverseSchemaProperties(node, (childSchema) => {
					visit(childSchema, newBaseUri, false);
				});
			};
			visit(root, baseUri, true);
		};
		registerEmbeddedSchemas(schema, handle.uri);
		handle.anchors = collectAnchors(schema);
		collectDynamicAnchors(schema);
		const resolveMetaschemaVocabularies = () => {
			if (!schema.$schema || typeof schema.$schema !== "string") return this.promise.resolve(void 0);
			let metaschemaUri = schema.$schema;
			if (contextService && !hasSchemeRegex.test(metaschemaUri)) metaschemaUri = contextService.resolveRelativePath(metaschemaUri, handle.uri);
			const normalizedMetaschemaUri = normalizeId(metaschemaUri);
			return this.getOrAddSchemaHandle(normalizedMetaschemaUri).getUnresolvedSchema().then((unresolvedMetaschema) => {
				const metaschemaDraft = unresolvedMetaschema.schema.$schema ? getSchemaDraftFromId(unresolvedMetaschema.schema.$schema) : void 0;
				const isDraft2019OrLater = metaschemaDraft && metaschemaDraft >= SchemaDraft.v2019_09;
				if (unresolvedMetaschema.schema.$vocabulary && typeof unresolvedMetaschema.schema.$vocabulary === "object" || isDraft2019OrLater) activeVocabularies = extractVocabularies(unresolvedMetaschema.schema);
			}, () => {});
		};
		return resolveMetaschemaVocabularies().then(() => {
			return resolveRefs(schema, schema, handle).then((_) => {
				return new ResolvedSchema(schema, resolveErrors, [], schemaDraft, activeVocabularies);
			});
		});
	}
	getSchemaFromProperty(resource, document) {
		if (document.root?.type === "object") {
			for (const p of document.root.properties) if (p.keyNode.value === "$schema" && p.valueNode?.type === "string") {
				let schemaId = p.valueNode.value;
				if (this.contextService && !/^\w[\w\d+.-]*:/.test(schemaId)) schemaId = this.contextService.resolveRelativePath(schemaId, resource);
				return schemaId;
			}
		}
	}
	getAssociatedSchemas(resource) {
		const seen = Object.create(null);
		const schemas = [];
		const normalizedResource = normalizeResourceForMatching(resource);
		for (const entry of this.filePatternAssociations) if (entry.matchesPattern(normalizedResource)) {
			for (const schemaId of entry.getURIs()) if (!seen[schemaId]) {
				schemas.push(schemaId);
				seen[schemaId] = true;
			}
		}
		return schemas;
	}
	getSchemaURIsForResource(resource, document) {
		let schemeId = document && this.getSchemaFromProperty(resource, document);
		if (schemeId) return [schemeId];
		return this.getAssociatedSchemas(resource);
	}
	getSchemaForResource(resource, document) {
		if (document) {
			let schemeId = this.getSchemaFromProperty(resource, document);
			if (schemeId) {
				const id = normalizeId(schemeId);
				return this.getOrAddSchemaHandle(id).getResolvedSchema();
			}
		}
		if (this.cachedSchemaForResource && this.cachedSchemaForResource.resource === resource) return this.cachedSchemaForResource.resolvedSchema;
		const schemas = this.getAssociatedSchemas(resource);
		const resolvedSchema = schemas.length > 0 ? this.createCombinedSchema(resource, schemas).getResolvedSchema() : this.promise.resolve(void 0);
		this.cachedSchemaForResource = {
			resource,
			resolvedSchema
		};
		return resolvedSchema;
	}
	createCombinedSchema(resource, schemaIds) {
		if (schemaIds.length === 1) return this.getOrAddSchemaHandle(schemaIds[0]);
		else {
			const combinedSchemaId = "schemaservice://combinedSchema/" + encodeURIComponent(resource);
			const combinedSchema = { allOf: schemaIds.map((schemaId) => ({ $ref: schemaId })) };
			return this.addSchemaHandle(combinedSchemaId, combinedSchema);
		}
	}
	getMatchingSchemas(document, jsonDocument, schema) {
		if (schema) {
			const id = schema.id || "schemaservice://untitled/matchingSchemas/" + idCounter++;
			return this.addSchemaHandle(id, schema).getResolvedSchema().then((resolvedSchema) => {
				return jsonDocument.getMatchingSchemas(resolvedSchema.schema).filter((s) => !s.inverted);
			});
		}
		return this.getSchemaForResource(document.uri, jsonDocument).then((schema) => {
			if (schema) return jsonDocument.getMatchingSchemas(schema.schema).filter((s) => !s.inverted);
			return [];
		});
	}
};
let idCounter = 0;
function normalizeResourceForMatching(resource) {
	try {
		return u.parse(resource).with({
			fragment: null,
			query: null
		}).toString(true);
	} catch (e) {
		return resource;
	}
}
function toDisplayString(url) {
	try {
		const uri = u.parse(url);
		if (uri.scheme === "file") return uri.fsPath;
	} catch (e) {}
	return url;
}
//#endregion
//#region servers/json/node_modules/vscode-json-languageservice/lib/esm/services/jsonFolding.js
function getFoldingRanges(document, context) {
	const ranges = [];
	const nestingLevels = [];
	const stack = [];
	let prevStart = -1;
	const scanner = createScanner(document.getText(), false);
	let token = scanner.scan();
	function addRange(range) {
		ranges.push(range);
		nestingLevels.push(stack.length);
	}
	while (token !== 17) {
		switch (token) {
			case 1:
			case 3: {
				const startLine = document.positionAt(scanner.getTokenOffset()).line;
				const range = {
					startLine,
					endLine: startLine,
					kind: token === 1 ? "object" : "array"
				};
				stack.push(range);
				break;
			}
			case 2:
			case 4: {
				const kind = token === 2 ? "object" : "array";
				if (stack.length > 0 && stack[stack.length - 1].kind === kind) {
					const range = stack.pop();
					const line = document.positionAt(scanner.getTokenOffset()).line;
					if (range && line > range.startLine + 1 && prevStart !== range.startLine) {
						range.endLine = line - 1;
						addRange(range);
						prevStart = range.startLine;
					}
				}
				break;
			}
			case 13: {
				const startLine = document.positionAt(scanner.getTokenOffset()).line;
				const endLine = document.positionAt(scanner.getTokenOffset() + scanner.getTokenLength()).line;
				if (scanner.getTokenError() === 1 && startLine + 1 < document.lineCount) scanner.setPosition(document.offsetAt(Position.create(startLine + 1, 0)));
				else if (startLine < endLine) {
					addRange({
						startLine,
						endLine,
						kind: FoldingRangeKind.Comment
					});
					prevStart = startLine;
				}
				break;
			}
			case 12: {
				const m = document.getText().substr(scanner.getTokenOffset(), scanner.getTokenLength()).match(/^\/\/\s*#(region\b)|(endregion\b)/);
				if (m) {
					const line = document.positionAt(scanner.getTokenOffset()).line;
					if (m[1]) {
						const range = {
							startLine: line,
							endLine: line,
							kind: FoldingRangeKind.Region
						};
						stack.push(range);
					} else {
						let i = stack.length - 1;
						while (i >= 0 && stack[i].kind !== FoldingRangeKind.Region) i--;
						if (i >= 0) {
							const range = stack[i];
							stack.length = i;
							if (line > range.startLine && prevStart !== range.startLine) {
								range.endLine = line;
								addRange(range);
								prevStart = range.startLine;
							}
						}
					}
				}
				break;
			}
		}
		token = scanner.scan();
	}
	const rangeLimit = context && context.rangeLimit;
	if (typeof rangeLimit !== "number" || ranges.length <= rangeLimit) return ranges;
	if (context && context.onRangeLimitExceeded) context.onRangeLimitExceeded(document.uri);
	const counts = [];
	for (let level of nestingLevels) if (level < 30) counts[level] = (counts[level] || 0) + 1;
	let entries = 0;
	let maxLevel = 0;
	for (let i = 0; i < counts.length; i++) {
		const n = counts[i];
		if (n) {
			if (n + entries > rangeLimit) {
				maxLevel = i;
				break;
			}
			entries += n;
		}
	}
	const result = [];
	for (let i = 0; i < ranges.length; i++) {
		const level = nestingLevels[i];
		if (typeof level === "number") {
			if (level < maxLevel || level === maxLevel && entries++ < rangeLimit) result.push(ranges[i]);
		}
	}
	return result;
}
//#endregion
//#region servers/json/node_modules/vscode-json-languageservice/lib/esm/services/jsonSelectionRanges.js
function getSelectionRanges(document, positions, doc) {
	function getSelectionRange(position) {
		let offset = document.offsetAt(position);
		let node = doc.getNodeFromOffset(offset, true);
		const result = [];
		while (node) {
			switch (node.type) {
				case "string":
				case "object":
				case "array":
					const cStart = node.offset + 1, cEnd = node.offset + node.length - 1;
					if (cStart < cEnd && offset >= cStart && offset <= cEnd) result.push(newRange(cStart, cEnd));
					result.push(newRange(node.offset, node.offset + node.length));
					break;
				case "number":
				case "boolean":
				case "null":
				case "property": result.push(newRange(node.offset, node.offset + node.length));
			}
			if (node.type === "property" || node.parent && node.parent.type === "array") {
				const afterCommaOffset = getOffsetAfterNextToken(node.offset + node.length, 5);
				if (afterCommaOffset !== -1) result.push(newRange(node.offset, afterCommaOffset));
			}
			node = node.parent;
		}
		let current = void 0;
		for (let index = result.length - 1; index >= 0; index--) current = SelectionRange.create(result[index], current);
		if (!current) current = SelectionRange.create(Range.create(position, position));
		return current;
	}
	function newRange(start, end) {
		return Range.create(document.positionAt(start), document.positionAt(end));
	}
	const scanner = createScanner(document.getText(), true);
	function getOffsetAfterNextToken(offset, expectedToken) {
		scanner.setPosition(offset);
		if (scanner.scan() === expectedToken) return scanner.getTokenOffset() + scanner.getTokenLength();
		return -1;
	}
	return positions.map(getSelectionRange);
}
//#endregion
//#region servers/json/node_modules/vscode-json-languageservice/lib/esm/utils/format.js
function format(documentToFormat, formattingOptions, formattingRange) {
	let range = void 0;
	if (formattingRange) {
		const offset = documentToFormat.offsetAt(formattingRange.start);
		range = {
			offset,
			length: documentToFormat.offsetAt(formattingRange.end) - offset
		};
	}
	const options = {
		tabSize: formattingOptions ? formattingOptions.tabSize : 4,
		insertSpaces: formattingOptions?.insertSpaces === true,
		insertFinalNewline: formattingOptions?.insertFinalNewline === true,
		eol: "\n",
		keepLines: formattingOptions?.keepLines === true
	};
	return format$1(documentToFormat.getText(), range, options).map((edit) => {
		return TextEdit$1.replace(Range.create(documentToFormat.positionAt(edit.offset), documentToFormat.positionAt(edit.offset + edit.length)), edit.content);
	});
}
//#endregion
//#region servers/json/node_modules/vscode-json-languageservice/lib/esm/utils/propertyTree.js
var Container;
(function(Container) {
	Container[Container["Object"] = 0] = "Object";
	Container[Container["Array"] = 1] = "Array";
})(Container || (Container = {}));
var PropertyTree = class {
	constructor(propertyName, beginningLineNumber) {
		this.propertyName = propertyName ?? "";
		this.beginningLineNumber = beginningLineNumber;
		this.childrenProperties = [];
		this.lastProperty = false;
		this.noKeyName = false;
	}
	addChildProperty(childProperty) {
		childProperty.parent = this;
		if (this.childrenProperties.length > 0) {
			let insertionIndex = 0;
			if (childProperty.noKeyName) insertionIndex = this.childrenProperties.length;
			else insertionIndex = binarySearchOnPropertyArray(this.childrenProperties, childProperty, compareProperties);
			if (insertionIndex < 0) insertionIndex = insertionIndex * -1 - 1;
			this.childrenProperties.splice(insertionIndex, 0, childProperty);
		} else this.childrenProperties.push(childProperty);
		return childProperty;
	}
};
function compareProperties(propertyTree1, propertyTree2) {
	const propertyName1 = propertyTree1.propertyName.toLowerCase();
	const propertyName2 = propertyTree2.propertyName.toLowerCase();
	if (propertyName1 < propertyName2) return -1;
	else if (propertyName1 > propertyName2) return 1;
	return 0;
}
function binarySearchOnPropertyArray(propertyTreeArray, propertyTree, compare_fn) {
	const propertyName = propertyTree.propertyName.toLowerCase();
	const firstPropertyInArrayName = propertyTreeArray[0].propertyName.toLowerCase();
	const lastPropertyInArrayName = propertyTreeArray[propertyTreeArray.length - 1].propertyName.toLowerCase();
	if (propertyName < firstPropertyInArrayName) return 0;
	if (propertyName > lastPropertyInArrayName) return propertyTreeArray.length;
	let m = 0;
	let n = propertyTreeArray.length - 1;
	while (m <= n) {
		let k = n + m >> 1;
		let cmp = compare_fn(propertyTree, propertyTreeArray[k]);
		if (cmp > 0) m = k + 1;
		else if (cmp < 0) n = k - 1;
		else return k;
	}
	return -m - 1;
}
//#endregion
//#region servers/json/node_modules/vscode-json-languageservice/lib/esm/utils/sort.js
function sort(documentToSort, formattingOptions) {
	const options = {
		...formattingOptions,
		keepLines: false
	};
	const formattedJsonString = TextDocument.applyEdits(documentToSort, format(documentToSort, options, void 0));
	const formattedJsonDocument = TextDocument.create("test://test.json", "json", 0, formattedJsonString);
	const sortedJsonDocument = sortJsoncDocument(formattedJsonDocument, findJsoncPropertyTree(formattedJsonDocument));
	const edits = format(sortedJsonDocument, options, void 0);
	const sortedAndFormattedJsonDocument = TextDocument.applyEdits(sortedJsonDocument, edits);
	return [TextEdit$1.replace(Range.create(Position.create(0, 0), documentToSort.positionAt(documentToSort.getText().length)), sortedAndFormattedJsonDocument)];
}
function findJsoncPropertyTree(formattedDocument) {
	const formattedString = formattedDocument.getText();
	const scanner = createScanner(formattedString, false);
	let rootTree = new PropertyTree();
	let currentTree = rootTree;
	let currentProperty = rootTree;
	let lastProperty = rootTree;
	let token = void 0;
	let lastTokenLine = 0;
	let numberOfCharactersOnPreviousLines = 0;
	let lastNonTriviaNonCommentToken = void 0;
	let secondToLastNonTriviaNonCommentToken = void 0;
	let lineOfLastNonTriviaNonCommentToken = -1;
	let endIndexOfLastNonTriviaNonCommentToken = -1;
	let beginningLineNumber = 0;
	let endLineNumber = 0;
	let currentContainerStack = [];
	let updateLastPropertyEndLineNumber = false;
	let updateBeginningLineNumber = false;
	while ((token = scanner.scan()) !== 17) {
		if (updateLastPropertyEndLineNumber === true && token !== 14 && token !== 15 && token !== 12 && token !== 13 && currentProperty.endLineNumber === void 0) {
			let endLineNumber = scanner.getTokenStartLine();
			if (secondToLastNonTriviaNonCommentToken === 2 || secondToLastNonTriviaNonCommentToken === 4) lastProperty.endLineNumber = endLineNumber - 1;
			else currentProperty.endLineNumber = endLineNumber - 1;
			beginningLineNumber = endLineNumber;
			updateLastPropertyEndLineNumber = false;
		}
		if (updateBeginningLineNumber === true && token !== 14 && token !== 15 && token !== 12 && token !== 13) {
			beginningLineNumber = scanner.getTokenStartLine();
			updateBeginningLineNumber = false;
		}
		if (scanner.getTokenStartLine() !== lastTokenLine) {
			for (let i = lastTokenLine; i < scanner.getTokenStartLine(); i++) {
				const lengthOfLine = formattedDocument.getText(Range.create(Position.create(i, 0), Position.create(i + 1, 0))).length;
				numberOfCharactersOnPreviousLines = numberOfCharactersOnPreviousLines + lengthOfLine;
			}
			lastTokenLine = scanner.getTokenStartLine();
		}
		switch (token) {
			case 10:
				if (lastNonTriviaNonCommentToken === void 0 || lastNonTriviaNonCommentToken === 1 || lastNonTriviaNonCommentToken === 5 && currentContainerStack[currentContainerStack.length - 1] === Container.Object) {
					const childProperty = new PropertyTree(scanner.getTokenValue(), beginningLineNumber);
					lastProperty = currentProperty;
					currentProperty = currentTree.addChildProperty(childProperty);
				}
				break;
			case 3:
				if (rootTree.beginningLineNumber === void 0) rootTree.beginningLineNumber = scanner.getTokenStartLine();
				if (currentContainerStack[currentContainerStack.length - 1] === Container.Object) currentTree = currentProperty;
				else if (currentContainerStack[currentContainerStack.length - 1] === Container.Array) {
					const childProperty = new PropertyTree(scanner.getTokenValue(), beginningLineNumber);
					childProperty.noKeyName = true;
					lastProperty = currentProperty;
					currentProperty = currentTree.addChildProperty(childProperty);
					currentTree = currentProperty;
				}
				currentContainerStack.push(Container.Array);
				currentProperty.type = Container.Array;
				beginningLineNumber = scanner.getTokenStartLine();
				beginningLineNumber++;
				break;
			case 1:
				if (rootTree.beginningLineNumber === void 0) rootTree.beginningLineNumber = scanner.getTokenStartLine();
				else if (currentContainerStack[currentContainerStack.length - 1] === Container.Array) {
					const childProperty = new PropertyTree(scanner.getTokenValue(), beginningLineNumber);
					childProperty.noKeyName = true;
					lastProperty = currentProperty;
					currentProperty = currentTree.addChildProperty(childProperty);
				}
				currentProperty.type = Container.Object;
				currentContainerStack.push(Container.Object);
				currentTree = currentProperty;
				beginningLineNumber = scanner.getTokenStartLine();
				beginningLineNumber++;
				break;
			case 4:
				endLineNumber = scanner.getTokenStartLine();
				currentContainerStack.pop();
				if (currentProperty.endLineNumber === void 0 && (lastNonTriviaNonCommentToken === 2 || lastNonTriviaNonCommentToken === 4)) {
					currentProperty.endLineNumber = endLineNumber - 1;
					currentProperty.lastProperty = true;
					currentProperty.lineWhereToAddComma = lineOfLastNonTriviaNonCommentToken;
					currentProperty.indexWhereToAddComa = endIndexOfLastNonTriviaNonCommentToken;
					lastProperty = currentProperty;
					currentProperty = currentProperty ? currentProperty.parent : void 0;
					currentTree = currentProperty;
				}
				rootTree.endLineNumber = endLineNumber;
				beginningLineNumber = endLineNumber + 1;
				break;
			case 2:
				endLineNumber = scanner.getTokenStartLine();
				currentContainerStack.pop();
				if (lastNonTriviaNonCommentToken !== 1) {
					if (currentProperty.endLineNumber === void 0) {
						currentProperty.endLineNumber = endLineNumber - 1;
						currentProperty.lastProperty = true;
						currentProperty.lineWhereToAddComma = lineOfLastNonTriviaNonCommentToken;
						currentProperty.indexWhereToAddComa = endIndexOfLastNonTriviaNonCommentToken;
					}
					lastProperty = currentProperty;
					currentProperty = currentProperty ? currentProperty.parent : void 0;
					currentTree = currentProperty;
				}
				rootTree.endLineNumber = scanner.getTokenStartLine();
				beginningLineNumber = endLineNumber + 1;
				break;
			case 5:
				endLineNumber = scanner.getTokenStartLine();
				if (currentProperty.endLineNumber === void 0 && (currentContainerStack[currentContainerStack.length - 1] === Container.Object || currentContainerStack[currentContainerStack.length - 1] === Container.Array && (lastNonTriviaNonCommentToken === 2 || lastNonTriviaNonCommentToken === 4))) {
					currentProperty.endLineNumber = endLineNumber;
					currentProperty.commaIndex = scanner.getTokenOffset() - numberOfCharactersOnPreviousLines;
					currentProperty.commaLine = endLineNumber;
				}
				if (lastNonTriviaNonCommentToken === 2 || lastNonTriviaNonCommentToken === 4) {
					lastProperty = currentProperty;
					currentProperty = currentProperty ? currentProperty.parent : void 0;
					currentTree = currentProperty;
				}
				beginningLineNumber = endLineNumber + 1;
				break;
			case 13:
				if (lastNonTriviaNonCommentToken === 5 && lineOfLastNonTriviaNonCommentToken === scanner.getTokenStartLine() && (currentContainerStack[currentContainerStack.length - 1] === Container.Array && (secondToLastNonTriviaNonCommentToken === 2 || secondToLastNonTriviaNonCommentToken === 4) || currentContainerStack[currentContainerStack.length - 1] === Container.Object)) {
					if (currentContainerStack[currentContainerStack.length - 1] === Container.Array && (secondToLastNonTriviaNonCommentToken === 2 || secondToLastNonTriviaNonCommentToken === 4) || currentContainerStack[currentContainerStack.length - 1] === Container.Object) {
						currentProperty.endLineNumber = void 0;
						updateLastPropertyEndLineNumber = true;
					}
				}
				if ((lastNonTriviaNonCommentToken === 1 || lastNonTriviaNonCommentToken === 3) && lineOfLastNonTriviaNonCommentToken === scanner.getTokenStartLine()) updateBeginningLineNumber = true;
		}
		if (token !== 14 && token !== 13 && token !== 12 && token !== 15) {
			secondToLastNonTriviaNonCommentToken = lastNonTriviaNonCommentToken;
			lastNonTriviaNonCommentToken = token;
			lineOfLastNonTriviaNonCommentToken = scanner.getTokenStartLine();
			endIndexOfLastNonTriviaNonCommentToken = scanner.getTokenOffset() + scanner.getTokenLength() - numberOfCharactersOnPreviousLines;
		}
	}
	return rootTree;
}
function sortJsoncDocument(jsonDocument, propertyTree) {
	if (propertyTree.childrenProperties.length === 0) return jsonDocument;
	const sortedJsonDocument = TextDocument.create("test://test.json", "json", 0, jsonDocument.getText());
	const queueToSort = [];
	updateSortingQueue(queueToSort, propertyTree, propertyTree.beginningLineNumber);
	while (queueToSort.length > 0) {
		const dataToSort = queueToSort.shift();
		const propertyTreeArray = dataToSort.propertyTreeArray;
		let beginningLineNumber = dataToSort.beginningLineNumber;
		for (let i = 0; i < propertyTreeArray.length; i++) {
			const propertyTree = propertyTreeArray[i];
			const range = Range.create(Position.create(propertyTree.beginningLineNumber, 0), Position.create(propertyTree.endLineNumber + 1, 0));
			const jsonContentToReplace = jsonDocument.getText(range);
			const jsonDocumentToReplace = TextDocument.create("test://test.json", "json", 0, jsonContentToReplace);
			if (propertyTree.lastProperty === true && i !== propertyTreeArray.length - 1) {
				const lineWhereToAddComma = propertyTree.lineWhereToAddComma - propertyTree.beginningLineNumber;
				const indexWhereToAddComma = propertyTree.indexWhereToAddComa;
				const edit = {
					range: Range.create(Position.create(lineWhereToAddComma, indexWhereToAddComma), Position.create(lineWhereToAddComma, indexWhereToAddComma)),
					text: ","
				};
				TextDocument.update(jsonDocumentToReplace, [edit], 1);
			} else if (propertyTree.lastProperty === false && i === propertyTreeArray.length - 1) {
				const commaIndex = propertyTree.commaIndex;
				const lineWhereToRemoveComma = propertyTree.commaLine - propertyTree.beginningLineNumber;
				const edit = {
					range: Range.create(Position.create(lineWhereToRemoveComma, commaIndex), Position.create(lineWhereToRemoveComma, commaIndex + 1)),
					text: ""
				};
				TextDocument.update(jsonDocumentToReplace, [edit], 1);
			}
			const length = propertyTree.endLineNumber - propertyTree.beginningLineNumber + 1;
			const edit = {
				range: Range.create(Position.create(beginningLineNumber, 0), Position.create(beginningLineNumber + length, 0)),
				text: jsonDocumentToReplace.getText()
			};
			TextDocument.update(sortedJsonDocument, [edit], 1);
			updateSortingQueue(queueToSort, propertyTree, beginningLineNumber);
			beginningLineNumber = beginningLineNumber + length;
		}
	}
	return sortedJsonDocument;
}
function sortProperties(properties) {
	properties.sort((a, b) => a.propertyName.localeCompare(b.propertyName));
}
function updateSortingQueue(queue, propertyTree, beginningLineNumber) {
	if (propertyTree.childrenProperties.length === 0) return;
	if (propertyTree.type === Container.Object) {
		let minimumBeginningLineNumber = Infinity;
		for (const childProperty of propertyTree.childrenProperties) if (childProperty.beginningLineNumber < minimumBeginningLineNumber) minimumBeginningLineNumber = childProperty.beginningLineNumber;
		const diff = minimumBeginningLineNumber - propertyTree.beginningLineNumber;
		beginningLineNumber = beginningLineNumber + diff;
		sortProperties(propertyTree.childrenProperties);
		queue.push(new SortingRange(beginningLineNumber, propertyTree.childrenProperties));
	} else if (propertyTree.type === Container.Array) updateSortingQueueForArrayProperties(queue, propertyTree, beginningLineNumber);
}
function updateSortingQueueForArrayProperties(queue, propertyTree, beginningLineNumber) {
	for (const subObject of propertyTree.childrenProperties) {
		if (subObject.type === Container.Object) {
			let minimumBeginningLineNumber = Infinity;
			for (const childProperty of subObject.childrenProperties) if (childProperty.beginningLineNumber < minimumBeginningLineNumber) minimumBeginningLineNumber = childProperty.beginningLineNumber;
			const diff = minimumBeginningLineNumber - subObject.beginningLineNumber;
			queue.push(new SortingRange(beginningLineNumber + subObject.beginningLineNumber - propertyTree.beginningLineNumber + diff, subObject.childrenProperties));
		}
		if (subObject.type === Container.Array) updateSortingQueueForArrayProperties(queue, subObject, beginningLineNumber + subObject.beginningLineNumber - propertyTree.beginningLineNumber);
	}
}
var SortingRange = class {
	constructor(beginningLineNumber, propertyTreeArray) {
		this.beginningLineNumber = beginningLineNumber;
		this.propertyTreeArray = propertyTreeArray;
	}
};
//#endregion
//#region servers/json/node_modules/vscode-json-languageservice/lib/esm/services/jsonLinks.js
function findLinks(document, doc) {
	const links = [];
	doc.visit((node) => {
		if (node.type === "property" && node.keyNode.value === "$ref" && node.valueNode?.type === "string") {
			const path = node.valueNode.value;
			const targetNode = findTargetNode(doc, path);
			if (targetNode) {
				const targetPos = document.positionAt(targetNode.offset);
				links.push({
					target: `${document.uri}#${targetPos.line + 1},${targetPos.character + 1}`,
					range: createRange(document, node.valueNode)
				});
			}
		}
		return true;
	});
	return Promise.resolve(links);
}
function createRange(document, node) {
	return Range.create(document.positionAt(node.offset + 1), document.positionAt(node.offset + node.length - 1));
}
function findTargetNode(doc, path) {
	const tokens = parseJSONPointer(path);
	if (tokens) return findNode(tokens, doc.root);
	if (path.charAt(0) === "#") {
		const anchor = path.substring(1);
		if (anchor.length > 0) return findAnchorNode(doc, anchor);
		return null;
	}
	const hashIndex = path.indexOf("#");
	const uri = hashIndex >= 0 ? path.substring(0, hashIndex) : path;
	const fragment = hashIndex >= 0 ? path.substring(hashIndex + 1) : void 0;
	if (uri.length > 0) {
		const embeddedNode = findEmbeddedSchemaNode(doc, uri);
		if (embeddedNode) {
			if (!fragment || fragment.length === 0) return embeddedNode;
			if (fragment.charAt(0) === "/") return findNode(fragment.substring(1).split(/\//).map(unescape), embeddedNode);
			return findAnchorInSubtree(embeddedNode, fragment);
		}
	}
	return null;
}
function findNode(pointer, node) {
	if (!node) return null;
	if (pointer.length === 0) return node;
	const token = pointer.shift();
	if (node && node.type === "object") {
		const propertyNode = node.properties.find((propertyNode) => propertyNode.keyNode.value === token);
		if (!propertyNode) return null;
		return findNode(pointer, propertyNode.valueNode);
	} else if (node && node.type === "array") {
		if (token.match(/^(0|[1-9][0-9]*)$/)) {
			const index = Number.parseInt(token);
			const arrayItem = node.items[index];
			if (!arrayItem) return null;
			return findNode(pointer, arrayItem);
		}
	}
	return null;
}
function findAnchorNode(doc, anchor) {
	return findAnchorInSubtree(doc.root, anchor);
}
function findAnchorInSubtree(root, anchor) {
	if (!root) return null;
	let result = null;
	const visit = (node) => {
		if (node.type === "object") for (const prop of node.properties) {
			if (prop.keyNode.value === "$anchor" && prop.valueNode?.type === "string" && prop.valueNode.value === anchor) {
				result = node;
				return false;
			}
			if (prop.keyNode.value === "$id" && prop.valueNode?.type === "string" && prop.valueNode.value === "#" + anchor) {
				result = node;
				return false;
			}
		}
		const children = node.children;
		if (children) {
			for (const child of children) if (!visit(child)) return false;
		}
		return true;
	};
	visit(root);
	return result;
}
function findEmbeddedSchemaNode(doc, uri) {
	if (!doc.root) return null;
	let result = null;
	const visit = (node, isRoot) => {
		if (node.type === "object" && !isRoot) {
			for (const prop of node.properties) if ((prop.keyNode.value === "$id" || prop.keyNode.value === "id") && prop.valueNode?.type === "string" && prop.valueNode.value === uri) {
				result = node;
				return false;
			}
		}
		const children = node.children;
		if (children) {
			for (const child of children) if (!visit(child, false)) return false;
		}
		return true;
	};
	visit(doc.root, true);
	return result;
}
function parseJSONPointer(path) {
	if (path === "#") return [];
	if (path[0] !== "#" || path[1] !== "/") return null;
	return path.substring(2).split(/\//).map(unescape);
}
function unescape(str) {
	return str.replace(/~1/g, "/").replace(/~0/g, "~");
}
//#endregion
//#region servers/json/node_modules/vscode-json-languageservice/lib/esm/jsonLanguageService.js
function getLanguageService(params) {
	const promise = params.promiseConstructor || Promise;
	const jsonSchemaService = new JSONSchemaService(params.schemaRequestService, params.workspaceContext, promise);
	jsonSchemaService.setSchemaContributions(schemaContributions);
	const jsonCompletion = new JSONCompletion(jsonSchemaService, params.contributions, promise, params.clientCapabilities);
	const jsonHover = new JSONHover(jsonSchemaService, params.contributions, promise);
	const jsonDocumentSymbols = new JSONDocumentSymbols(jsonSchemaService);
	const jsonValidation = new JSONValidation(jsonSchemaService, promise);
	return {
		configure: (settings) => {
			jsonSchemaService.clearExternalSchemas();
			settings.schemas?.forEach(jsonSchemaService.registerExternalSchema.bind(jsonSchemaService));
			jsonValidation.configure(settings);
		},
		resetSchema: (uri) => jsonSchemaService.onResourceChange(uri),
		doValidation: jsonValidation.doValidation.bind(jsonValidation),
		getLanguageStatus: jsonValidation.getLanguageStatus.bind(jsonValidation),
		parseJSONDocument: (document) => parse(document, { collectComments: true }),
		newJSONDocument: (root, diagnostics, comments) => newJSONDocument(root, diagnostics, comments),
		getMatchingSchemas: jsonSchemaService.getMatchingSchemas.bind(jsonSchemaService),
		doResolve: jsonCompletion.doResolve.bind(jsonCompletion),
		doComplete: jsonCompletion.doComplete.bind(jsonCompletion),
		findDocumentSymbols: jsonDocumentSymbols.findDocumentSymbols.bind(jsonDocumentSymbols),
		findDocumentSymbols2: jsonDocumentSymbols.findDocumentSymbols2.bind(jsonDocumentSymbols),
		findDocumentColors: jsonDocumentSymbols.findDocumentColors.bind(jsonDocumentSymbols),
		getColorPresentations: jsonDocumentSymbols.getColorPresentations.bind(jsonDocumentSymbols),
		doHover: jsonHover.doHover.bind(jsonHover),
		getFoldingRanges,
		getSelectionRanges,
		findDefinition: () => Promise.resolve([]),
		findLinks,
		format: (document, range, options) => format(document, options, range),
		sort: (document, options) => sort(document, options)
	};
}
//#endregion
//#region servers/json/languageModelCache.ts
function getLanguageModelCache(maxEntries, cleanupIntervalTimeInSec, parse) {
	let languageModels = {};
	let nModels = 0;
	let cleanupInterval = void 0;
	if (cleanupIntervalTimeInSec > 0) cleanupInterval = setInterval(() => {
		const cutoffTime = Date.now() - cleanupIntervalTimeInSec * 1e3;
		const uris = Object.keys(languageModels);
		for (const uri of uris) if (languageModels[uri].cTime < cutoffTime) {
			delete languageModels[uri];
			nModels--;
		}
	}, cleanupIntervalTimeInSec * 1e3);
	return {
		get(document) {
			const version = document.version;
			const languageId = document.languageId;
			const languageModelInfo = languageModels[document.uri];
			if (languageModelInfo && languageModelInfo.version === version && languageModelInfo.languageId === languageId) {
				languageModelInfo.cTime = Date.now();
				return languageModelInfo.languageModel;
			}
			const languageModel = parse(document);
			languageModels[document.uri] = {
				languageModel,
				version,
				languageId,
				cTime: Date.now()
			};
			if (!languageModelInfo) nModels++;
			if (nModels > maxEntries) {
				let oldestTime = Number.MAX_VALUE;
				let oldestUri = null;
				for (const uri in languageModels) {
					const languageModelInfo = languageModels[uri];
					if (languageModelInfo.cTime < oldestTime) {
						oldestUri = uri;
						oldestTime = languageModelInfo.cTime;
					}
				}
				if (oldestUri) {
					delete languageModels[oldestUri];
					nModels--;
				}
			}
			return languageModel;
		},
		onDocumentRemoved(document) {
			const uri = document.uri;
			if (languageModels[uri]) {
				delete languageModels[uri];
				nModels--;
			}
		},
		dispose() {
			if (typeof cleanupInterval !== "undefined") {
				clearInterval(cleanupInterval);
				cleanupInterval = void 0;
				languageModels = {};
				nModels = 0;
			}
		}
	};
}
//#endregion
//#region servers/json/jsonServer.ts
let SchemaAssociationNotification;
(function(_SchemaAssociationNotification) {
	_SchemaAssociationNotification.type = new import_api.NotificationType("json/schemaAssociations");
})(SchemaAssociationNotification || (SchemaAssociationNotification = {}));
let VSCodeContentRequest;
(function(_VSCodeContentRequest) {
	_VSCodeContentRequest.type = new import_api.RequestType("vscode/content");
})(VSCodeContentRequest || (VSCodeContentRequest = {}));
let SchemaContentChangeNotification;
(function(_SchemaContentChangeNotification) {
	_SchemaContentChangeNotification.type = new import_api.NotificationType("json/schemaContent");
})(SchemaContentChangeNotification || (SchemaContentChangeNotification = {}));
let ForceValidateRequest;
(function(_ForceValidateRequest) {
	_ForceValidateRequest.type = new import_api.RequestType("json/validate");
})(ForceValidateRequest || (ForceValidateRequest = {}));
let ForceValidateAllRequest;
(function(_ForceValidateAllRequest) {
	_ForceValidateAllRequest.type = new import_api.RequestType("json/validateAll");
})(ForceValidateAllRequest || (ForceValidateAllRequest = {}));
let LanguageStatusRequest;
(function(_LanguageStatusRequest) {
	_LanguageStatusRequest.type = new import_api.RequestType("json/languageStatus");
})(LanguageStatusRequest || (LanguageStatusRequest = {}));
let ValidateContentRequest;
(function(_ValidateContentRequest) {
	_ValidateContentRequest.type = new import_api.RequestType("json/validateContent");
})(ValidateContentRequest || (ValidateContentRequest = {}));
let DocumentSortingRequest;
(function(_DocumentSortingRequest) {
	_DocumentSortingRequest.type = new import_api.RequestType("json/sort");
})(DocumentSortingRequest || (DocumentSortingRequest = {}));
const workspaceContext = { resolveRelativePath: (relativePath, resource) => {
	const base = resource.substring(0, resource.lastIndexOf("/") + 1);
	return _.resolvePath(u.parse(base), relativePath).toString();
} };
const sortCodeActionKind = import_api.CodeActionKind.Source.concat(".sort", ".json");
function startServer(connection, runtime) {
	function getSchemaRequestService(handledSchemas = [
		"https",
		"http",
		"file"
	]) {
		const builtInHandlers = {};
		for (const protocol of handledSchemas) if (protocol === "file") builtInHandlers[protocol] = runtime.file;
		else if (protocol === "http" || protocol === "https") builtInHandlers[protocol] = runtime.http;
		return (uri) => {
			const protocol = uri.substr(0, uri.indexOf(":"));
			const builtInHandler = builtInHandlers[protocol];
			if (builtInHandler) return builtInHandler.getContent(uri);
			return connection.sendRequest(VSCodeContentRequest.type, uri).then((responseText) => {
				return responseText;
			}, (error) => {
				return Promise.reject(error);
			});
		};
	}
	let languageService = getLanguageService({
		workspaceContext,
		contributions: [],
		clientCapabilities: ClientCapabilities.LATEST
	});
	const documents = new import_api.TextDocuments(TextDocument);
	documents.listen(connection);
	let clientSnippetSupport = false;
	let dynamicFormatterRegistration = false;
	let hierarchicalDocumentSymbolSupport = false;
	let foldingRangeLimitDefault = Number.MAX_VALUE;
	let resultLimit = Number.MAX_VALUE;
	let jsonFoldingRangeLimit = Number.MAX_VALUE;
	let jsoncFoldingRangeLimit = Number.MAX_VALUE;
	let jsonColorDecoratorLimit = Number.MAX_VALUE;
	let jsoncColorDecoratorLimit = Number.MAX_VALUE;
	let formatterMaxNumberOfEdits = Number.MAX_VALUE;
	let diagnosticsSupport;
	connection.onInitialize((params) => {
		const initializationOptions = params.initializationOptions || {};
		const handledProtocols = initializationOptions?.handledSchemaProtocols;
		languageService = getLanguageService({
			schemaRequestService: getSchemaRequestService(handledProtocols),
			workspaceContext,
			contributions: [],
			clientCapabilities: params.capabilities
		});
		function getClientCapability(name, def) {
			const keys = name.split(".");
			let c = params.capabilities;
			for (let i = 0; c && i < keys.length; i++) {
				if (!c.hasOwnProperty(keys[i])) return def;
				c = c[keys[i]];
			}
			return c;
		}
		clientSnippetSupport = getClientCapability("textDocument.completion.completionItem.snippetSupport", false);
		dynamicFormatterRegistration = getClientCapability("textDocument.rangeFormatting.dynamicRegistration", false) && typeof initializationOptions.provideFormatter !== "boolean";
		foldingRangeLimitDefault = getClientCapability("textDocument.foldingRange.rangeLimit", Number.MAX_VALUE);
		hierarchicalDocumentSymbolSupport = getClientCapability("textDocument.documentSymbol.hierarchicalDocumentSymbolSupport", false);
		formatterMaxNumberOfEdits = initializationOptions.customCapabilities?.rangeFormatting?.editLimit || Number.MAX_VALUE;
		if (getClientCapability("textDocument.diagnostic", void 0) === void 0) diagnosticsSupport = registerDiagnosticsPushSupport(documents, connection, runtime, validateTextDocument);
		else diagnosticsSupport = registerDiagnosticsPullSupport(documents, connection, runtime, validateTextDocument);
		return { capabilities: {
			textDocumentSync: import_api.TextDocumentSyncKind.Incremental,
			completionProvider: clientSnippetSupport ? {
				resolveProvider: false,
				triggerCharacters: ["\"", ":"]
			} : void 0,
			hoverProvider: true,
			documentSymbolProvider: true,
			documentRangeFormattingProvider: initializationOptions.provideFormatter === true,
			documentFormattingProvider: initializationOptions.provideFormatter === true,
			colorProvider: {},
			foldingRangeProvider: true,
			selectionRangeProvider: true,
			documentLinkProvider: {},
			diagnosticProvider: {
				documentSelector: null,
				interFileDependencies: false,
				workspaceDiagnostics: false
			},
			codeActionProvider: { codeActionKinds: [sortCodeActionKind] }
		} };
	});
	let jsonConfigurationSettings = void 0;
	let schemaAssociations = void 0;
	let formatterRegistrations = null;
	let validateEnabled = true;
	let commentsSeverity = void 0;
	let trailingCommasSeverity = void 0;
	let schemaValidationSeverity = void 0;
	let schemaRequestSeverity = void 0;
	let keepLinesEnabled = false;
	connection.onDidChangeConfiguration((change) => {
		const settings = change.settings;
		runtime.configureHttpRequests?.(settings?.http?.proxy, !!settings.http?.proxyStrictSSL);
		jsonConfigurationSettings = settings.json?.schemas;
		validateEnabled = !!settings.json?.validate?.enable;
		commentsSeverity = settings.json?.validate?.comments;
		trailingCommasSeverity = settings.json?.validate?.trailingCommas;
		schemaValidationSeverity = settings.json?.validate?.schemaValidation;
		schemaRequestSeverity = settings.json?.validate?.schemaRequest;
		keepLinesEnabled = settings.json?.keepLines?.enable || false;
		updateConfiguration();
		const sanitizeLimitSetting = (settingValue) => Math.trunc(Math.max(settingValue, 0));
		resultLimit = sanitizeLimitSetting(settings.json?.resultLimit || Number.MAX_VALUE);
		jsonFoldingRangeLimit = sanitizeLimitSetting(settings.json?.jsonFoldingLimit || foldingRangeLimitDefault);
		jsoncFoldingRangeLimit = sanitizeLimitSetting(settings.json?.jsoncFoldingLimit || foldingRangeLimitDefault);
		jsonColorDecoratorLimit = sanitizeLimitSetting(settings.json?.jsonColorDecoratorLimit || Number.MAX_VALUE);
		jsoncColorDecoratorLimit = sanitizeLimitSetting(settings.json?.jsoncColorDecoratorLimit || Number.MAX_VALUE);
		if (dynamicFormatterRegistration) {
			if (settings.json?.format?.enable) {
				if (!formatterRegistrations) {
					const documentSelector = [{ language: "json" }, { language: "jsonc" }];
					formatterRegistrations = [connection.client.register(import_api.DocumentRangeFormattingRequest.type, { documentSelector }), connection.client.register(import_api.DocumentFormattingRequest.type, { documentSelector })];
				}
			} else if (formatterRegistrations) {
				formatterRegistrations.forEach((p) => p.then((r) => r.dispose()));
				formatterRegistrations = null;
			}
		}
	});
	connection.onNotification(SchemaAssociationNotification.type, (associations) => {
		schemaAssociations = associations;
		updateConfiguration();
	});
	connection.onNotification(SchemaContentChangeNotification.type, (uriOrUris) => {
		let needsRevalidation = false;
		if (Array.isArray(uriOrUris)) {
			for (const uri of uriOrUris) if (languageService.resetSchema(uri)) needsRevalidation = true;
		} else needsRevalidation = languageService.resetSchema(uriOrUris);
		if (needsRevalidation) diagnosticsSupport?.requestRefresh();
	});
	connection.onRequest(ForceValidateAllRequest.type, async () => {
		diagnosticsSupport?.requestRefresh();
	});
	connection.onRequest(ForceValidateRequest.type, async (uri) => {
		const document = documents.get(uri);
		if (document) {
			updateConfiguration();
			return await validateTextDocument(document);
		}
		return [];
	});
	connection.onRequest(ValidateContentRequest.type, async ({ schemaUri, content }) => {
		const docURI = "vscode://schemas/temp/" + (/* @__PURE__ */ new Date()).getTime();
		const document = TextDocument.create(docURI, "json", 1, content);
		updateConfiguration([{
			uri: schemaUri,
			fileMatch: [docURI]
		}]);
		return await validateTextDocument(document);
	});
	connection.onRequest(LanguageStatusRequest.type, async (uri) => {
		const document = documents.get(uri);
		if (document) {
			const jsonDocument = getJSONDocument(document);
			return languageService.getLanguageStatus(document, jsonDocument);
		} else return { schemas: [] };
	});
	connection.onRequest(DocumentSortingRequest.type, async (params) => {
		const uri = params.uri;
		const options = params.options;
		const document = documents.get(uri);
		if (document) return languageService.sort(document, options);
		return [];
	});
	function updateConfiguration(extraSchemas) {
		const languageSettings = {
			validate: validateEnabled,
			allowComments: true,
			schemas: new Array()
		};
		if (schemaAssociations) {
			if (Array.isArray(schemaAssociations)) Array.prototype.push.apply(languageSettings.schemas, schemaAssociations);
			else for (const pattern in schemaAssociations) {
				const association = schemaAssociations[pattern];
				if (Array.isArray(association)) association.forEach((uri) => {
					languageSettings.schemas.push({
						uri,
						fileMatch: [pattern]
					});
				});
			}
		}
		if (jsonConfigurationSettings) jsonConfigurationSettings.forEach((schema, index) => {
			let uri = schema.url;
			if (!uri && schema.schema) uri = schema.schema.id || `vscode://schemas/custom/${index}`;
			if (uri) languageSettings.schemas.push({
				uri,
				fileMatch: schema.fileMatch,
				schema: schema.schema,
				folderUri: schema.folderUri
			});
		});
		if (extraSchemas) languageSettings.schemas.push(...extraSchemas);
		languageService.configure(languageSettings);
		diagnosticsSupport?.requestRefresh();
	}
	async function validateTextDocument(textDocument) {
		if (textDocument.getText().length === 0) return [];
		const jsonDocument = getJSONDocument(textDocument);
		const documentSettings = {
			comments: commentsSeverity ?? (textDocument.languageId === "jsonc" ? "ignore" : "error"),
			trailingCommas: trailingCommasSeverity ?? (textDocument.languageId === "jsonc" ? "warning" : "error"),
			schemaValidation: schemaValidationSeverity,
			schemaRequest: schemaRequestSeverity
		};
		return await languageService.doValidation(textDocument, jsonDocument, documentSettings);
	}
	connection.onDidChangeWatchedFiles((change) => {
		let hasChanges = false;
		for (const c of change.changes) if (languageService.resetSchema(c.uri)) hasChanges = true;
		if (hasChanges) diagnosticsSupport?.requestRefresh();
	});
	const jsonDocuments = getLanguageModelCache(10, 60, (document) => languageService.parseJSONDocument(document));
	documents.onDidClose((e) => {
		jsonDocuments.onDocumentRemoved(e.document);
	});
	connection.onShutdown(() => {
		jsonDocuments.dispose();
	});
	function getJSONDocument(document) {
		return jsonDocuments.get(document);
	}
	connection.onCompletion((textDocumentPosition, token) => {
		return runSafeAsync(runtime, async () => {
			const document = documents.get(textDocumentPosition.textDocument.uri);
			if (document) {
				const jsonDocument = getJSONDocument(document);
				return languageService.doComplete(document, textDocumentPosition.position, jsonDocument);
			}
			return null;
		}, null, `Error while computing completions for ${textDocumentPosition.textDocument.uri}`, token);
	});
	connection.onHover((textDocumentPositionParams, token) => {
		return runSafeAsync(runtime, async () => {
			const document = documents.get(textDocumentPositionParams.textDocument.uri);
			if (document) {
				const jsonDocument = getJSONDocument(document);
				return languageService.doHover(document, textDocumentPositionParams.position, jsonDocument);
			}
			return null;
		}, null, `Error while computing hover for ${textDocumentPositionParams.textDocument.uri}`, token);
	});
	connection.onDocumentSymbol((documentSymbolParams, token) => {
		return runSafe(runtime, () => {
			const document = documents.get(documentSymbolParams.textDocument.uri);
			if (document) {
				const jsonDocument = getJSONDocument(document);
				if (hierarchicalDocumentSymbolSupport) return languageService.findDocumentSymbols2(document, jsonDocument, { resultLimit });
				else return languageService.findDocumentSymbols(document, jsonDocument, { resultLimit });
			}
			return [];
		}, [], `Error while computing document symbols for ${documentSymbolParams.textDocument.uri}`, token);
	});
	connection.onCodeAction((codeActionParams, token) => {
		return runSafeAsync(runtime, async () => {
			if (documents.get(codeActionParams.textDocument.uri)) {
				const sortCodeAction = import_api.CodeAction.create("Sort JSON", sortCodeActionKind);
				sortCodeAction.command = {
					command: "json.sort",
					title: import_main$2.t("Sort JSON")
				};
				return [sortCodeAction];
			}
			return [];
		}, [], `Error while computing code actions for ${codeActionParams.textDocument.uri}`, token);
	});
	function onFormat(textDocument, range, options) {
		options.keepLines = keepLinesEnabled;
		const document = documents.get(textDocument.uri);
		if (document) {
			const edits = languageService.format(document, range ?? getFullRange(document), options);
			if (edits.length > formatterMaxNumberOfEdits) {
				const newText = TextDocument.applyEdits(document, edits);
				return [import_api.TextEdit.replace(getFullRange(document), newText)];
			}
			return edits;
		}
		return [];
	}
	connection.onDocumentRangeFormatting((formatParams, token) => {
		return runSafe(runtime, () => onFormat(formatParams.textDocument, formatParams.range, formatParams.options), [], `Error while formatting range for ${formatParams.textDocument.uri}`, token);
	});
	connection.onDocumentFormatting((formatParams, token) => {
		return runSafe(runtime, () => onFormat(formatParams.textDocument, void 0, formatParams.options), [], `Error while formatting ${formatParams.textDocument.uri}`, token);
	});
	connection.onDocumentColor((params, token) => {
		return runSafeAsync(runtime, async () => {
			const document = documents.get(params.textDocument.uri);
			if (document) {
				const jsonDocument = getJSONDocument(document);
				const resultLimit = document.languageId === "jsonc" ? jsoncColorDecoratorLimit : jsonColorDecoratorLimit;
				return languageService.findDocumentColors(document, jsonDocument, { resultLimit });
			}
			return [];
		}, [], `Error while computing document colors for ${params.textDocument.uri}`, token);
	});
	connection.onColorPresentation((params, token) => {
		return runSafe(runtime, () => {
			const document = documents.get(params.textDocument.uri);
			if (document) {
				const jsonDocument = getJSONDocument(document);
				return languageService.getColorPresentations(document, jsonDocument, params.color, params.range);
			}
			return [];
		}, [], `Error while computing color presentations for ${params.textDocument.uri}`, token);
	});
	connection.onFoldingRanges((params, token) => {
		return runSafe(runtime, () => {
			const document = documents.get(params.textDocument.uri);
			if (document) {
				const rangeLimit = document.languageId === "jsonc" ? jsoncFoldingRangeLimit : jsonFoldingRangeLimit;
				return languageService.getFoldingRanges(document, { rangeLimit });
			}
			return null;
		}, null, `Error while computing folding ranges for ${params.textDocument.uri}`, token);
	});
	connection.onSelectionRanges((params, token) => {
		return runSafe(runtime, () => {
			const document = documents.get(params.textDocument.uri);
			if (document) {
				const jsonDocument = getJSONDocument(document);
				return languageService.getSelectionRanges(document, params.positions, jsonDocument);
			}
			return [];
		}, [], `Error while computing selection ranges for ${params.textDocument.uri}`, token);
	});
	connection.onDocumentLinks((params, token) => {
		return runSafeAsync(runtime, async () => {
			const document = documents.get(params.textDocument.uri);
			if (document) {
				const jsonDocument = getJSONDocument(document);
				return languageService.findLinks(document, jsonDocument);
			}
			return [];
		}, [], `Error while computing links for ${params.textDocument.uri}`, token);
	});
	connection.listen();
}
function getFullRange(document) {
	return Range.create(Position.create(0, 0), document.positionAt(document.getText().length));
}
const { xhr, configure: configureHttpRequests, getErrorStatusDescription } = (/* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports) => {
	(() => {
		var e = {
			747: (e, t, r) => {
				"use strict";
				var o, n = Object.defineProperty, s = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, c = Object.prototype.hasOwnProperty, a = {};
				((e, t) => {
					for (var r in t) n(e, r, {
						get: t[r],
						enumerable: !0
					});
				})(a, {
					config: () => f,
					t: () => h
				}), e.exports = (o = a, ((e, t, r, o) => {
					if (t && "object" == typeof t || "function" == typeof t) for (let r of i(t)) c.call(e, r) || void 0 === r || n(e, r, {
						get: () => t[r],
						enumerable: !(o = s(t, r)) || o.enumerable
					});
					return e;
				})(n({}, "__esModule", { value: !0 }), o));
				var u, p = r(896), l = r(943);
				function f(e) {
					if ("contents" in e) u = "string" == typeof e.contents ? JSON.parse(e.contents) : e.contents;
					else if ("fsPath" in e) {
						const r = (t = e.fsPath, (0, p.readFileSync)(t, "utf8")), o = JSON.parse(r);
						u = g(o) ? o.contents.bundle : o;
					} else {
						var t;
						if (e.uri) {
							let t = e.uri;
							return "string" == typeof e.uri && (t = new URL(e.uri)), new Promise(((e, r) => {
								(async function(e) {
									if ("file:" === e.protocol) return await (0, l.readFile)(e, "utf8");
									if ("http:" === e.protocol || "https:" === e.protocol) {
										const t = await fetch(e.toString(), {
											headers: {
												"Accept-Encoding": "gzip, deflate",
												Accept: "application/json"
											},
											redirect: "follow"
										});
										if (!t.ok) {
											let r = `Unexpected ${t.status} response while trying to read ${e}`;
											try {
												r += `: ${await t.text()}`;
											} catch {}
											throw new Error(r);
										}
										return await t.text();
									}
									throw new Error("Unsupported protocol");
								})(t).then(((t) => {
									try {
										const r = JSON.parse(t);
										u = g(r) ? r.contents.bundle : r, e();
									} catch (e) {
										r(e);
									}
								})).catch(((e) => {
									r(e);
								}));
							}));
						}
					}
				}
				function h(...e) {
					const t = e[0];
					let r, o, n;
					if ("string" == typeof t) r = t, o = t, e.splice(0, 1), n = e && "object" == typeof e[0] ? e[0] : e;
					else {
						if (t instanceof Array) {
							const r = e.slice(1);
							if (t.length !== r.length + 1) throw new Error("expected a string as the first argument to l10n.t");
							let o = t[0];
							for (let e = 1; e < t.length; e++) o += `{${e - 1}}` + t[e];
							return h(o, ...r);
						}
						o = t.message, r = o, t.comment && t.comment.length > 0 && (r += `/${Array.isArray(t.comment) ? t.comment.join("") : t.comment}`), n = t.args ?? {};
					}
					const s = u?.[r];
					return s ? "string" == typeof s ? y(s, n) : s.comment ? y(s.message, n) : y(o, n) : y(o, n);
				}
				var d = /{([^}]+)}/g;
				function y(e, t) {
					return 0 === Object.keys(t).length ? e : e.replace(d, ((e, r) => t[r] ?? e));
				}
				function g(e) {
					return !("object" != typeof e?.contents?.bundle || "string" != typeof e?.version);
				}
			},
			544: function(e, t, r) {
				"use strict";
				var o = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
					void 0 === o && (o = r);
					var n = Object.getOwnPropertyDescriptor(t, r);
					n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
						enumerable: !0,
						get: function() {
							return t[r];
						}
					}), Object.defineProperty(e, o, n);
				} : function(e, t, r, o) {
					void 0 === o && (o = r), e[o] = t[r];
				}), n = this && this.__setModuleDefault || (Object.create ? function(e, t) {
					Object.defineProperty(e, "default", {
						enumerable: !0,
						value: t
					});
				} : function(e, t) {
					e.default = t;
				}), s = this && this.__importStar || function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
					return n(t, e), t;
				};
				Object.defineProperty(t, "__esModule", { value: !0 }), t.req = t.json = t.toBuffer = void 0;
				const i = s(r(611)), c = s(r(692));
				async function a(e) {
					let t = 0;
					const r = [];
					for await (const o of e) t += o.length, r.push(o);
					return Buffer.concat(r, t);
				}
				t.toBuffer = a, t.json = async function(e) {
					const t = (await a(e)).toString("utf8");
					try {
						return JSON.parse(t);
					} catch (e) {
						const r = e;
						throw r.message += ` (input: ${t})`, r;
					}
				}, t.req = function(e, t = {}) {
					const r = (("string" == typeof e ? e : e.href).startsWith("https:") ? c : i).request(e, t), o = new Promise(((e, t) => {
						r.once("response", e).once("error", t).end();
					}));
					return r.then = o.then.bind(o), r;
				};
			},
			917: function(e, t, r) {
				"use strict";
				var o = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
					void 0 === o && (o = r);
					var n = Object.getOwnPropertyDescriptor(t, r);
					n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
						enumerable: !0,
						get: function() {
							return t[r];
						}
					}), Object.defineProperty(e, o, n);
				} : function(e, t, r, o) {
					void 0 === o && (o = r), e[o] = t[r];
				}), n = this && this.__setModuleDefault || (Object.create ? function(e, t) {
					Object.defineProperty(e, "default", {
						enumerable: !0,
						value: t
					});
				} : function(e, t) {
					e.default = t;
				}), s = this && this.__importStar || function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
					return n(t, e), t;
				}, i = this && this.__exportStar || function(e, t) {
					for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || o(t, e, r);
				};
				Object.defineProperty(t, "__esModule", { value: !0 }), t.Agent = void 0;
				const c = s(r(278)), a = s(r(611)), u = r(692);
				i(r(544), t);
				const p = Symbol("AgentBaseInternalState");
				class l extends a.Agent {
					constructor(e) {
						super(e), this[p] = {};
					}
					isSecureEndpoint(e) {
						if (e) {
							if ("boolean" == typeof e.secureEndpoint) return e.secureEndpoint;
							if ("string" == typeof e.protocol) return "https:" === e.protocol;
						}
						const { stack: t } = /* @__PURE__ */ new Error();
						return "string" == typeof t && t.split("\n").some(((e) => -1 !== e.indexOf("(https.js:") || -1 !== e.indexOf("node:https:")));
					}
					incrementSockets(e) {
						if (this.maxSockets === 1 / 0 && this.maxTotalSockets === 1 / 0) return null;
						this.sockets[e] || (this.sockets[e] = []);
						const t = new c.Socket({ writable: !1 });
						return this.sockets[e].push(t), this.totalSocketCount++, t;
					}
					decrementSockets(e, t) {
						if (!this.sockets[e] || null === t) return;
						const r = this.sockets[e], o = r.indexOf(t);
						-1 !== o && (r.splice(o, 1), this.totalSocketCount--, 0 === r.length && delete this.sockets[e]);
					}
					getName(e) {
						return ("boolean" == typeof e.secureEndpoint ? e.secureEndpoint : this.isSecureEndpoint(e)) ? u.Agent.prototype.getName.call(this, e) : super.getName(e);
					}
					createSocket(e, t, r) {
						const o = {
							...t,
							secureEndpoint: this.isSecureEndpoint(t)
						}, n = this.getName(o), s = this.incrementSockets(n);
						Promise.resolve().then((() => this.connect(e, o))).then(((i) => {
							if (this.decrementSockets(n, s), i instanceof a.Agent) return i.addRequest(e, o);
							this[p].currentSocket = i, super.createSocket(e, t, r);
						}), ((e) => {
							this.decrementSockets(n, s), r(e);
						}));
					}
					createConnection() {
						const e = this[p].currentSocket;
						if (this[p].currentSocket = void 0, !e) throw new Error("No socket was returned in the `connect()` function");
						return e;
					}
					get defaultPort() {
						return this[p].defaultPort ?? ("https:" === this.protocol ? 443 : 80);
					}
					set defaultPort(e) {
						this[p] && (this[p].defaultPort = e);
					}
					get protocol() {
						return this[p].protocol ?? (this.isSecureEndpoint() ? "https:" : "http:");
					}
					set protocol(e) {
						this[p] && (this[p].protocol = e);
					}
				}
				t.Agent = l;
			},
			645: function(e, t, r) {
				"use strict";
				var o = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
					void 0 === o && (o = r);
					var n = Object.getOwnPropertyDescriptor(t, r);
					n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
						enumerable: !0,
						get: function() {
							return t[r];
						}
					}), Object.defineProperty(e, o, n);
				} : function(e, t, r, o) {
					void 0 === o && (o = r), e[o] = t[r];
				}), n = this && this.__setModuleDefault || (Object.create ? function(e, t) {
					Object.defineProperty(e, "default", {
						enumerable: !0,
						value: t
					});
				} : function(e, t) {
					e.default = t;
				}), s = this && this.__importStar || function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
					return n(t, e), t;
				}, i = this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : { default: e };
				};
				Object.defineProperty(t, "__esModule", { value: !0 }), t.HttpProxyAgent = void 0;
				const c = s(r(278)), a = s(r(756)), u = i(r(150)), p = r(434), l = r(917), f = r(16), h = (0, u.default)("http-proxy-agent");
				class d extends l.Agent {
					constructor(e, t) {
						super(t), this.proxy = "string" == typeof e ? new f.URL(e) : e, this.proxyHeaders = t?.headers ?? {}, h("Creating new HttpProxyAgent instance: %o", this.proxy.href);
						const r = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""), o = this.proxy.port ? parseInt(this.proxy.port, 10) : "https:" === this.proxy.protocol ? 443 : 80;
						this.connectOpts = {
							...t ? y(t, "headers") : null,
							host: r,
							port: o
						};
					}
					addRequest(e, t) {
						e._header = null, this.setRequestProps(e, t), super.addRequest(e, t);
					}
					setRequestProps(e, t) {
						const { proxy: r } = this, o = `${t.secureEndpoint ? "https:" : "http:"}//${e.getHeader("host") || "localhost"}`, n = new f.URL(e.path, o);
						80 !== t.port && (n.port = String(t.port)), e.path = String(n);
						const s = "function" == typeof this.proxyHeaders ? this.proxyHeaders() : { ...this.proxyHeaders };
						if (r.username || r.password) {
							const e = `${decodeURIComponent(r.username)}:${decodeURIComponent(r.password)}`;
							s["Proxy-Authorization"] = `Basic ${Buffer.from(e).toString("base64")}`;
						}
						s["Proxy-Connection"] || (s["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close");
						for (const t of Object.keys(s)) {
							const r = s[t];
							r && e.setHeader(t, r);
						}
					}
					async connect(e, t) {
						let r, o, n;
						return e._header = null, e.path.includes("://") || this.setRequestProps(e, t), h("Regenerating stored HTTP header string for request"), e._implicitHeader(), e.outputData && e.outputData.length > 0 && (h("Patching connection write() output buffer with updated header"), r = e.outputData[0].data, o = r.indexOf("\r\n\r\n") + 4, e.outputData[0].data = e._header + r.substring(o), h("Output buffer: %o", e.outputData[0].data)), "https:" === this.proxy.protocol ? (h("Creating `tls.Socket`: %o", this.connectOpts), n = a.connect(this.connectOpts)) : (h("Creating `net.Socket`: %o", this.connectOpts), n = c.connect(this.connectOpts)), await (0, p.once)(n, "connect"), n;
					}
				}
				function y(e, ...t) {
					const r = {};
					let o;
					for (o in e) t.includes(o) || (r[o] = e[o]);
					return r;
				}
				d.protocols = ["http", "https"], t.HttpProxyAgent = d;
			},
			288: function(e, t, r) {
				"use strict";
				var o = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
					void 0 === o && (o = r);
					var n = Object.getOwnPropertyDescriptor(t, r);
					n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
						enumerable: !0,
						get: function() {
							return t[r];
						}
					}), Object.defineProperty(e, o, n);
				} : function(e, t, r, o) {
					void 0 === o && (o = r), e[o] = t[r];
				}), n = this && this.__setModuleDefault || (Object.create ? function(e, t) {
					Object.defineProperty(e, "default", {
						enumerable: !0,
						value: t
					});
				} : function(e, t) {
					e.default = t;
				}), s = this && this.__importStar || function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e) for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
					return n(t, e), t;
				}, i = this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : { default: e };
				};
				Object.defineProperty(t, "__esModule", { value: !0 }), t.HttpsProxyAgent = void 0;
				const c = s(r(278)), a = s(r(756)), u = i(r(613)), p = i(r(150)), l = r(917), f = r(16), h = r(868), d = (0, p.default)("https-proxy-agent");
				class y extends l.Agent {
					constructor(e, t) {
						super(t), this.options = { path: void 0 }, this.proxy = "string" == typeof e ? new f.URL(e) : e, this.proxyHeaders = t?.headers ?? {}, d("Creating new HttpsProxyAgent instance: %o", this.proxy.href);
						const r = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""), o = this.proxy.port ? parseInt(this.proxy.port, 10) : "https:" === this.proxy.protocol ? 443 : 80;
						this.connectOpts = {
							ALPNProtocols: ["http/1.1"],
							...t ? v(t, "headers") : null,
							host: r,
							port: o
						};
					}
					async connect(e, t) {
						const { proxy: r } = this;
						if (!t.host) throw new TypeError("No \"host\" provided");
						let o;
						if ("https:" === r.protocol) {
							d("Creating `tls.Socket`: %o", this.connectOpts);
							const e = this.connectOpts.servername || this.connectOpts.host;
							o = a.connect({
								...this.connectOpts,
								servername: e
							});
						} else d("Creating `net.Socket`: %o", this.connectOpts), o = c.connect(this.connectOpts);
						const n = "function" == typeof this.proxyHeaders ? this.proxyHeaders() : { ...this.proxyHeaders }, s = c.isIPv6(t.host) ? `[${t.host}]` : t.host;
						let i = `CONNECT ${s}:${t.port} HTTP/1.1\r\n`;
						if (r.username || r.password) {
							const e = `${decodeURIComponent(r.username)}:${decodeURIComponent(r.password)}`;
							n["Proxy-Authorization"] = `Basic ${Buffer.from(e).toString("base64")}`;
						}
						n.Host = `${s}:${t.port}`, n["Proxy-Connection"] || (n["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close");
						for (const e of Object.keys(n)) i += `${e}: ${n[e]}\r\n`;
						const p = (0, h.parseProxyResponse)(o);
						o.write(`${i}\r\n`);
						const { connect: l, buffered: f } = await p;
						if (e.emit("proxyConnect", l), this.emit("proxyConnect", l, e), 200 === l.statusCode) {
							if (e.once("socket", g), t.secureEndpoint) {
								d("Upgrading socket connection to TLS");
								const e = t.servername || t.host;
								return a.connect({
									...v(t, "host", "path", "port"),
									socket: o,
									servername: e
								});
							}
							return o;
						}
						o.destroy();
						const y = new c.Socket({ writable: !1 });
						return y.readable = !0, e.once("socket", ((e) => {
							d("Replaying proxy buffer for failed request"), (0, u.default)(e.listenerCount("data") > 0), e.push(f), e.push(null);
						})), y;
					}
				}
				function g(e) {
					e.resume();
				}
				function v(e, ...t) {
					const r = {};
					let o;
					for (o in e) t.includes(o) || (r[o] = e[o]);
					return r;
				}
				y.protocols = ["http", "https"], t.HttpsProxyAgent = y;
			},
			868: function(e, t, r) {
				"use strict";
				var o = this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : { default: e };
				};
				Object.defineProperty(t, "__esModule", { value: !0 }), t.parseProxyResponse = void 0;
				const n = (0, o(r(150)).default)("https-proxy-agent:parse-proxy-response");
				t.parseProxyResponse = function(e) {
					return new Promise(((t, r) => {
						let o = 0;
						const s = [];
						function i() {
							const a = e.read();
							a ? function(a) {
								s.push(a), o += a.length;
								const u = Buffer.concat(s, o), p = u.indexOf("\r\n\r\n");
								if (-1 === p) return n("have not received end of HTTP headers yet..."), void i();
								const l = u.slice(0, p).toString("ascii").split("\r\n"), f = l.shift();
								if (!f) return e.destroy(), r(/* @__PURE__ */ new Error("No header received from proxy CONNECT response"));
								const h = f.split(" "), d = +h[1], y = h.slice(2).join(" "), g = {};
								for (const t of l) {
									if (!t) continue;
									const o = t.indexOf(":");
									if (-1 === o) return e.destroy(), r(/* @__PURE__ */ new Error(`Invalid header from proxy CONNECT response: "${t}"`));
									const n = t.slice(0, o).toLowerCase(), s = t.slice(o + 1).trimStart(), i = g[n];
									"string" == typeof i ? g[n] = [i, s] : Array.isArray(i) ? i.push(s) : g[n] = s;
								}
								n("got proxy server response: %o %o", f, g), c(), t({
									connect: {
										statusCode: d,
										statusText: y,
										headers: g
									},
									buffered: u
								});
							}(a) : e.once("readable", i);
						}
						function c() {
							e.removeListener("end", a), e.removeListener("error", u), e.removeListener("readable", i);
						}
						function a() {
							c(), n("onend"), r(/* @__PURE__ */ new Error("Proxy connection ended before receiving CONNECT response"));
						}
						function u(e) {
							c(), n("onerror %o", e), r(e);
						}
						e.on("error", u), e.on("end", a), i();
					}));
				};
			},
			580: function(e, t, r) {
				"use strict";
				var o, n = this && this.__extends || (o = function(e, t) {
					return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
						e.__proto__ = t;
					} || function(e, t) {
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}, o(e, t);
				}, function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
					function r() {
						this.constructor = e;
					}
					o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
				}), s = this && this.__assign || function() {
					return s = Object.assign || function(e) {
						for (var t, r = 1, o = arguments.length; r < o; r++) for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
						return e;
					}, s.apply(this, arguments);
				};
				Object.defineProperty(t, "__esModule", { value: !0 }), t.xhr = t.configure = void 0, t.getErrorStatusDescription = function(e) {
					if (!(e < 400)) switch (e) {
						case 400: return u.t("Bad request. The request cannot be fulfilled due to bad syntax.");
						case 401: return u.t("Unauthorized. The server is refusing to respond.");
						case 403: return u.t("Forbidden. The server is refusing to respond.");
						case 404: return u.t("Not Found. The requested location could not be found.");
						case 405: return u.t("Method not allowed. A request was made using a request method not supported by that location.");
						case 406: return u.t("Not Acceptable. The server can only generate a response that is not accepted by the client.");
						case 407: return u.t("Proxy Authentication Required. The client must first authenticate itself with the proxy.");
						case 408: return u.t("Request Timeout. The server timed out waiting for the request.");
						case 409: return u.t("Conflict. The request could not be completed because of a conflict in the request.");
						case 410: return u.t("Gone. The requested page is no longer available.");
						case 411: return u.t("Length Required. The \"Content-Length\" is not defined.");
						case 412: return u.t("Precondition Failed. The precondition given in the request evaluated to false by the server.");
						case 413: return u.t("Request Entity Too Large. The server will not accept the request, because the request entity is too large.");
						case 414: return u.t("Request-URI Too Long. The server will not accept the request, because the URL is too long.");
						case 415: return u.t("Unsupported Media Type. The server will not accept the request, because the media type is not supported.");
						case 500: return u.t("Internal Server Error.");
						case 501: return u.t("Not Implemented. The server either does not recognize the request method, or it lacks the ability to fulfill the request.");
						case 502: return u.t("Bad Gateway. The upstream server did not respond.");
						case 503: return u.t("Service Unavailable. The server is currently unavailable (overloaded or down).");
						default: return u.t("HTTP status code {0}", e);
					}
				};
				var i = r(611), c = r(692), a = r(16), u = r(747), p = r(106), l = r(645), f = r(288), h = void 0, d = !0;
				function y(e) {
					var t;
					return new Promise((function(r, o) {
						var n = (0, a.parse)(e.url), s = {
							hostname: n.hostname,
							agent: !!e.agent && e.agent,
							port: n.port ? parseInt(n.port) : "https:" === n.protocol ? 443 : 80,
							path: n.path,
							method: e.type || "GET",
							headers: e.headers,
							rejectUnauthorized: "boolean" != typeof e.strictSSL || e.strictSSL
						};
						e.user && e.password && (s.auth = e.user + ":" + e.password);
						var u = function(o) {
							if (o.statusCode >= 300 && o.statusCode < 400 && e.followRedirects && e.followRedirects > 0 && o.headers.location) {
								var s = o.headers.location;
								s.startsWith("/") && (s = (0, a.format)({
									protocol: n.protocol,
									hostname: n.hostname,
									port: n.port,
									pathname: s
								})), r(y(function(e) {
									for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
									return t.forEach((function(t) {
										return Object.keys(t).forEach((function(r) {
											return e[r] = t[r];
										}));
									})), e;
								}({}, e, {
									url: s,
									followRedirects: e.followRedirects - 1
								})));
							} else r({
								req: t,
								res: o
							});
						};
						(t = "https:" === n.protocol ? c.request(s, u) : i.request(s, u)).on("error", o), e.timeout && t.setTimeout(e.timeout), e.data && t.write(e.data), t.end(), e.token && (e.token.isCancellationRequested && t.destroy(new g()), e.token.onCancellationRequested((function() {
							t.destroy(new g());
						})));
					}));
				}
				t.configure = function(e, t) {
					h = e, d = t;
				}, t.xhr = function(e) {
					return "boolean" != typeof (e = s({}, e)).strictSSL && (e.strictSSL = d), e.agent || (e.agent = function(e, t) {
						var r;
						void 0 === t && (t = {});
						var o = (0, a.parse)(e), n = t.proxyUrl || function(e) {
							return "http:" === e.protocol ? process.env.HTTP_PROXY || process.env.http_proxy || null : "https:" === e.protocol && (process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy) || null;
						}(o);
						return n && /^https?:/.test(n) ? "http:" === o.protocol ? new l.HttpProxyAgent(n) : new f.HttpsProxyAgent(n, { rejectUnauthorized: null === (r = t.strictSSL) || void 0 === r || r }) : null;
					}(e.url, {
						proxyUrl: h,
						strictSSL: d
					})), "number" != typeof e.followRedirects && (e.followRedirects = 5), y(e).then((function(r) {
						return new Promise((function(o, n) {
							var s, i, c = r.res, l = c, f = !1, h = c.headers && c.headers["content-encoding"];
							if (h && (s = e.type, i = r.res.statusCode, !("HEAD" === s || i >= 100 && i < 200 || 204 === i || 304 === i))) {
								var d = {
									flush: p.constants.Z_SYNC_FLUSH,
									finishFlush: p.constants.Z_SYNC_FLUSH
								};
								if ("gzip" === h) {
									var y = p.createGunzip(d);
									c.pipe(y), l = y;
								} else if ("deflate" === h) {
									var v = p.createInflate(d);
									c.pipe(v), l = v;
								}
							}
							var b = [];
							l.on("data", (function(e) {
								return b.push(e);
							})), l.on("end", (function() {
								if (!f) {
									if (f = !0, e.followRedirects > 0 && (c.statusCode >= 300 && c.statusCode <= 303 || 307 === c.statusCode)) {
										var r = c.headers.location;
										if (r.startsWith("/")) {
											var s = (0, a.parse)(e.url);
											r = (0, a.format)({
												protocol: s.protocol,
												hostname: s.hostname,
												port: s.port,
												pathname: r
											});
										}
										if (r) {
											var i = {
												type: e.type,
												url: r,
												user: e.user,
												password: e.password,
												headers: e.headers,
												timeout: e.timeout,
												followRedirects: e.followRedirects - 1,
												data: e.data,
												token: e.token
											};
											(0, t.xhr)(i).then(o, n);
											return;
										}
									}
									var u = Buffer.concat(b), p = {
										responseText: u.toString(),
										body: u,
										status: c.statusCode,
										headers: c.headers || {}
									};
									c.statusCode >= 200 && c.statusCode < 300 || 1223 === c.statusCode ? o(p) : n(p);
								}
							})), l.on("error", (function(t) {
								var r = g.is(t) ? t : {
									responseText: u.t("Unable to access {0}. Error: {1}", e.url, t.message),
									body: Buffer.concat(b),
									status: 500,
									headers: {}
								};
								f = !0, n(r);
							})), e.token && (e.token.isCancellationRequested && l.destroy(new g()), e.token.onCancellationRequested((function() {
								l.destroy(new g());
							})));
						}));
					}), (function(t) {
						var r = g.is(t) ? t : {
							responseText: e.agent ? u.t("Unable to connect to {0} through a proxy. Error: {1}", e.url, t.message) : u.t("Unable to connect to {0}. Error: {1}", e.url, t.message),
							body: Buffer.concat([]),
							status: 404,
							headers: {}
						};
						return Promise.reject(r);
					}));
				};
				var g = function(e) {
					function t() {
						var r = e.call(this, "The user aborted a request") || this;
						return r.name = "AbortError", Object.setPrototypeOf(r, t.prototype), r;
					}
					return n(t, e), t.is = function(e) {
						return e instanceof t;
					}, t;
				}(Error);
			},
			150: (e, t) => {
				function r() {}
				Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) {
					return r;
				};
			},
			613: (e) => {
				"use strict";
				e.exports = require("assert");
			},
			434: (e) => {
				"use strict";
				e.exports = require("events");
			},
			896: (e) => {
				"use strict";
				e.exports = require("fs");
			},
			943: (e) => {
				"use strict";
				e.exports = require("fs/promises");
			},
			611: (e) => {
				"use strict";
				e.exports = require("http");
			},
			692: (e) => {
				"use strict";
				e.exports = require("https");
			},
			278: (e) => {
				"use strict";
				e.exports = require("net");
			},
			756: (e) => {
				"use strict";
				e.exports = require("tls");
			},
			16: (e) => {
				"use strict";
				e.exports = require("url");
			},
			106: (e) => {
				"use strict";
				e.exports = require("zlib");
			}
		}, t = {}, r = function r(o) {
			var n = t[o];
			if (void 0 !== n) return n.exports;
			var s = t[o] = { exports: {} };
			return e[o].call(s.exports, s, s.exports, r), s.exports;
		}(580), o = exports;
		for (var n in r) o[n] = r[n];
		r.__esModule && Object.defineProperty(o, "__esModule", { value: !0 });
	})();
})))())).default;
const connection = (0, import_main.createConnection)();
console.log = connection.console.log.bind(connection.console);
console.error = connection.console.error.bind(connection.console);
process.on("unhandledRejection", (e) => {
	connection.console.error(formatError(`Unhandled exception`, e));
});
function getHTTPRequestService() {
	return { getContent(uri, _encoding) {
		return xhr({
			url: uri,
			followRedirects: 5,
			headers: { "Accept-Encoding": "gzip, deflate" }
		}).then((response) => {
			return response.responseText;
		}, (error) => {
			return Promise.reject(error.responseText || getErrorStatusDescription(error.status) || error.toString());
		});
	} };
}
function getFileRequestService() {
	return { async getContent(location, encoding) {
		try {
			const uri = u.parse(location);
			return (await fs.promises.readFile(uri.fsPath, encoding)).toString();
		} catch (e) {
			if (e.code === "ENOENT") throw new Error(import_main$2.t("Schema not found: {0}", location));
			else if (e.code === "EISDIR") throw new Error(import_main$2.t("{0} is a directory, not a file", location));
			throw e;
		}
	} };
}
startServer(connection, {
	timer: {
		setImmediate(callback, ...args) {
			const handle = setImmediate(callback, ...args);
			return { dispose: () => clearImmediate(handle) };
		},
		setTimeout(callback, ms, ...args) {
			const handle = setTimeout(callback, ms, ...args);
			return { dispose: () => clearTimeout(handle) };
		}
	},
	file: getFileRequestService(),
	http: getHTTPRequestService(),
	configureHttpRequests
});
//#endregion
