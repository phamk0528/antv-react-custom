"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var antd = require("antd");
var React = require("react");
var s2 = require("@antv/s2");
var icons = require("@ant-design/icons");
var ReactDOM = require("react-dom");
function _interopDefaultLegacy(e2) {
  return e2 && typeof e2 === "object" && "default" in e2 ? e2 : { "default": e2 };
}
var React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
var ReactDOM__default = /* @__PURE__ */ _interopDefaultLegacy(ReactDOM);
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$f = Object.prototype;
var hasOwnProperty$c = objectProto$f.hasOwnProperty;
var nativeObjectToString$1 = objectProto$f.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value2) {
  var isOwn = hasOwnProperty$c.call(value2, symToStringTag$1), tag = value2[symToStringTag$1];
  try {
    value2[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result = nativeObjectToString$1.call(value2);
  if (unmasked) {
    if (isOwn) {
      value2[symToStringTag$1] = tag;
    } else {
      delete value2[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$e = Object.prototype;
var nativeObjectToString = objectProto$e.toString;
function objectToString(value2) {
  return nativeObjectToString.call(value2);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value2) {
  if (value2 == null) {
    return value2 === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value2) ? getRawTag(value2) : objectToString(value2);
}
function isObjectLike(value2) {
  return value2 != null && typeof value2 == "object";
}
var symbolTag$3 = "[object Symbol]";
function isSymbol(value2) {
  return typeof value2 == "symbol" || isObjectLike(value2) && baseGetTag(value2) == symbolTag$3;
}
function arrayMap(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}
var isArray = Array.isArray;
var isArray$1 = isArray;
var INFINITY$3 = 1 / 0;
var symbolProto$2 = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;
function baseToString(value2) {
  if (typeof value2 == "string") {
    return value2;
  }
  if (isArray$1(value2)) {
    return arrayMap(value2, baseToString) + "";
  }
  if (isSymbol(value2)) {
    return symbolToString ? symbolToString.call(value2) : "";
  }
  var result = value2 + "";
  return result == "0" && 1 / value2 == -INFINITY$3 ? "-0" : result;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function isObject(value2) {
  var type = typeof value2;
  return value2 != null && (type == "object" || type == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value2) {
  if (typeof value2 == "number") {
    return value2;
  }
  if (isSymbol(value2)) {
    return NAN;
  }
  if (isObject(value2)) {
    var other = typeof value2.valueOf == "function" ? value2.valueOf() : value2;
    value2 = isObject(other) ? other + "" : other;
  }
  if (typeof value2 != "string") {
    return value2 === 0 ? value2 : +value2;
  }
  value2 = baseTrim(value2);
  var isBinary = reIsBinary.test(value2);
  return isBinary || reIsOctal.test(value2) ? freeParseInt(value2.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value2) ? NAN : +value2;
}
var INFINITY$2 = 1 / 0, MAX_INTEGER = 17976931348623157e292;
function toFinite(value2) {
  if (!value2) {
    return value2 === 0 ? value2 : 0;
  }
  value2 = toNumber(value2);
  if (value2 === INFINITY$2 || value2 === -INFINITY$2) {
    var sign = value2 < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value2 === value2 ? value2 : 0;
}
function toInteger(value2) {
  var result = toFinite(value2), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
function identity(value2) {
  return value2;
}
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value2) {
  if (!isObject(value2)) {
    return false;
  }
  var tag = baseGetTag(value2);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
var coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e2) {
    }
    try {
      return func + "";
    } catch (e2) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$d = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$b = objectProto$d.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$b).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value2) {
  if (!isObject(value2) || isMasked(value2)) {
    return false;
  }
  var pattern = isFunction(value2) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value2));
}
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value2 = getValue$1(object, key);
  return baseIsNative(value2) ? value2 : void 0;
}
var WeakMap = getNative(root$1, "WeakMap");
var WeakMap$1 = WeakMap;
var objectCreate = Object.create;
var baseCreate = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var baseCreate$1 = baseCreate;
function noop$3() {
}
function copyArray(source, array) {
  var index2 = -1, length = source.length;
  array || (array = Array(length));
  while (++index2 < length) {
    array[index2] = source[index2];
  }
  return array;
}
var defineProperty$1 = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e2) {
  }
}();
var defineProperty$2 = defineProperty$1;
function arrayEach(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (iteratee(array[index2], index2, array) === false) {
      break;
    }
  }
  return array;
}
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index2-- : ++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return index2;
    }
  }
  return -1;
}
function baseIsNaN(value2) {
  return value2 !== value2;
}
function strictIndexOf(array, value2, fromIndex) {
  var index2 = fromIndex - 1, length = array.length;
  while (++index2 < length) {
    if (array[index2] === value2) {
      return index2;
    }
  }
  return -1;
}
function baseIndexOf(array, value2, fromIndex) {
  return value2 === value2 ? strictIndexOf(array, value2, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}
function arrayIncludes(array, value2) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value2, 0) > -1;
}
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value2, length) {
  var type = typeof value2;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value2)) && (value2 > -1 && value2 % 1 == 0 && value2 < length);
}
function baseAssignValue(object, key, value2) {
  if (key == "__proto__" && defineProperty$2) {
    defineProperty$2(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value2,
      "writable": true
    });
  } else {
    object[key] = value2;
  }
}
function eq(value2, other) {
  return value2 === other || value2 !== value2 && other !== other;
}
var objectProto$c = Object.prototype;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
function assignValue(object, key, value2) {
  var objValue = object[key];
  if (!(hasOwnProperty$a.call(object, key) && eq(objValue, value2)) || value2 === void 0 && !(key in object)) {
    baseAssignValue(object, key, value2);
  }
}
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length = props.length;
  while (++index2 < length) {
    var key = props[index2];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value2) {
  return typeof value2 == "number" && value2 > -1 && value2 % 1 == 0 && value2 <= MAX_SAFE_INTEGER;
}
function isArrayLike(value2) {
  return value2 != null && isLength(value2.length) && !isFunction(value2);
}
var objectProto$b = Object.prototype;
function isPrototype(value2) {
  var Ctor = value2 && value2.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$b;
  return value2 === proto;
}
function baseTimes(n2, iteratee) {
  var index2 = -1, result = Array(n2);
  while (++index2 < n2) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var argsTag$3 = "[object Arguments]";
function baseIsArguments(value2) {
  return isObjectLike(value2) && baseGetTag(value2) == argsTag$3;
}
var objectProto$a = Object.prototype;
var hasOwnProperty$9 = objectProto$a.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value2) {
  return isObjectLike(value2) && hasOwnProperty$9.call(value2, "callee") && !propertyIsEnumerable$1.call(value2, "callee");
};
var isArguments$1 = isArguments;
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var isBuffer$1 = isBuffer;
var argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$2 = "[object Error]", funcTag$1 = "[object Function]", mapTag$7 = "[object Map]", numberTag$3 = "[object Number]", objectTag$3 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$7 = "[object Set]", stringTag$4 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$7] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$7] = typedArrayTags[stringTag$4] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray(value2) {
  return isObjectLike(value2) && isLength(value2.length) && !!typedArrayTags[baseGetTag(value2)];
}
function baseUnary(func) {
  return function(value2) {
    return func(value2);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e2) {
  }
}();
var nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray$1 = isTypedArray;
var objectProto$9 = Object.prototype;
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
function arrayLikeKeys(value2, inherited) {
  var isArr = isArray$1(value2), isArg = !isArr && isArguments$1(value2), isBuff = !isArr && !isArg && isBuffer$1(value2), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value2), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value2.length, String) : [], length = result.length;
  for (var key in value2) {
    if ((inherited || hasOwnProperty$8.call(value2, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
var nativeKeys$1 = nativeKeys;
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$7.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$6.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value2, object) {
  if (isArray$1(value2)) {
    return false;
  }
  var type = typeof value2;
  if (type == "number" || type == "symbol" || type == "boolean" || value2 == null || isSymbol(value2)) {
    return true;
  }
  return reIsPlainProp.test(value2) || !reIsDeepProp.test(value2) || object != null && value2 in Object(object);
}
var nativeCreate = getNative(Object, "create");
var nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function hashGet(key) {
  var data2 = this.__data__;
  if (nativeCreate$1) {
    var result = data2[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$5.call(data2, key) ? data2[key] : void 0;
}
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function hashHas(key) {
  var data2 = this.__data__;
  return nativeCreate$1 ? data2[key] !== void 0 : hasOwnProperty$4.call(data2, key);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key, value2) {
  var data2 = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data2[key] = nativeCreate$1 && value2 === void 0 ? HASH_UNDEFINED$1 : value2;
  return this;
}
function Hash(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data2 = this.__data__, index2 = assocIndexOf(data2, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data2.length - 1;
  if (index2 == lastIndex) {
    data2.pop();
  } else {
    splice.call(data2, index2, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data2 = this.__data__, index2 = assocIndexOf(data2, key);
  return index2 < 0 ? void 0 : data2[index2][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value2) {
  var data2 = this.__data__, index2 = assocIndexOf(data2, key);
  if (index2 < 0) {
    ++this.size;
    data2.push([key, value2]);
  } else {
    data2[index2][1] = value2;
  }
  return this;
}
function ListCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map = getNative(root$1, "Map");
var Map$1 = Map;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value2) {
  var type = typeof value2;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value2 !== "__proto__" : value2 === null;
}
function getMapData(map2, key) {
  var data2 = map2.__data__;
  return isKeyable(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value2) {
  var data2 = getMapData(this, key), size2 = data2.size;
  data2.set(key, value2);
  this.size += data2.size == size2 ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT$1 = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match2, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match2);
  });
  return result;
});
var stringToPath$1 = stringToPath;
function toString(value2) {
  return value2 == null ? "" : baseToString(value2);
}
function castPath(value2, object) {
  if (isArray$1(value2)) {
    return value2;
  }
  return isKey(value2, object) ? [value2] : stringToPath$1(toString(value2));
}
var INFINITY$1 = 1 / 0;
function toKey(value2) {
  if (typeof value2 == "string" || isSymbol(value2)) {
    return value2;
  }
  var result = value2 + "";
  return result == "0" && 1 / value2 == -INFINITY$1 ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
function arrayPush(array, values2) {
  var index2 = -1, length = values2.length, offset3 = array.length;
  while (++index2 < length) {
    array[offset3 + index2] = values2[index2];
  }
  return array;
}
var spreadableSymbol = Symbol$2 ? Symbol$2.isConcatSpreadable : void 0;
function isFlattenable(value2) {
  return isArray$1(value2) || isArguments$1(value2) || !!(spreadableSymbol && value2 && value2[spreadableSymbol]);
}
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index2 = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index2 < length) {
    var value2 = array[index2];
    if (depth > 0 && predicate(value2)) {
      if (depth > 1) {
        baseFlatten(value2, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value2);
      }
    } else if (!isStrict) {
      result[result.length] = value2;
    }
  }
  return result;
}
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
var getPrototype$1 = getPrototype;
var rsAstralRange$1 = "\\ud800-\\udfff", rsComboMarksRange$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1 = "\\u20d0-\\u20ff", rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1, rsVarRange$1 = "\\ufe0e\\ufe0f";
var rsZWJ$1 = "\\u200d";
var reHasUnicode = RegExp("[" + rsZWJ$1 + rsAstralRange$1 + rsComboRange$1 + rsVarRange$1 + "]");
function hasUnicode(string) {
  return reHasUnicode.test(string);
}
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index2 = -1, length = array == null ? 0 : array.length;
  if (initAccum && length) {
    accumulator = array[++index2];
  }
  while (++index2 < length) {
    accumulator = iteratee(accumulator, array[index2], index2, array);
  }
  return accumulator;
}
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data2 = this.__data__, result = data2["delete"](key);
  this.size = data2.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var LARGE_ARRAY_SIZE$1 = 200;
function stackSet(key, value2) {
  var data2 = this.__data__;
  if (data2 instanceof ListCache) {
    var pairs = data2.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE$1 - 1) {
      pairs.push([key, value2]);
      this.size = ++data2.size;
      return this;
    }
    data2 = this.__data__ = new MapCache(pairs);
  }
  data2.set(key, value2);
  this.size = data2.size;
  return this;
}
function Stack(entries) {
  var data2 = this.__data__ = new ListCache(entries);
  this.size = data2.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root$1.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function arrayFilter(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value2 = array[index2];
    if (predicate(value2, index2, array)) {
      result[resIndex++] = value2;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$4 = Object.prototype;
var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var getSymbols$1 = getSymbols;
function copySymbols(source, object) {
  return copyObject(source, getSymbols$1(source), object);
}
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols$1(object));
    object = getPrototype$1(object);
  }
  return result;
};
var getSymbolsIn$1 = getSymbolsIn;
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn$1(source), object);
}
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols$1);
}
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn$1);
}
var DataView = getNative(root$1, "DataView");
var DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
var Promise$2 = Promise$1;
var Set = getNative(root$1, "Set");
var Set$1 = Set;
var mapTag$6 = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$6 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$3 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$3 || Map$1 && getTag(new Map$1()) != mapTag$6 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$6 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) {
  getTag = function(value2) {
    var result = baseGetTag(value2), Ctor = result == objectTag$2 ? value2.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$3;
        case mapCtorString:
          return mapTag$6;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$6;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var getTag$1 = getTag;
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$3.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var Uint8Array = root$1.Uint8Array;
var Uint8Array$1 = Uint8Array;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", mapTag$5 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", symbolTag$2 = "[object Symbol]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$2:
      return cloneArrayBuffer(object);
    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object);
    case dataViewTag$2:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$5:
      return new Ctor();
    case numberTag$2:
    case stringTag$3:
      return new Ctor(object);
    case regexpTag$2:
      return cloneRegExp(object);
    case setTag$5:
      return new Ctor();
    case symbolTag$2:
      return cloneSymbol(object);
  }
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate$1(getPrototype$1(object)) : {};
}
var mapTag$4 = "[object Map]";
function baseIsMap(value2) {
  return isObjectLike(value2) && getTag$1(value2) == mapTag$4;
}
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var isMap$1 = isMap;
var setTag$4 = "[object Set]";
function baseIsSet(value2) {
  return isObjectLike(value2) && getTag$1(value2) == setTag$4;
}
var nodeIsSet = nodeUtil$1 && nodeUtil$1.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet$1 = isSet;
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$3 = "[object Map]", numberTag$1 = "[object Number]", objectTag$1 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$3] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$3] = cloneableTags[stringTag$2] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value2, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value2, key, object, stack) : customizer(value2);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject(value2)) {
    return value2;
  }
  var isArr = isArray$1(value2);
  if (isArr) {
    result = initCloneArray(value2);
    if (!isDeep) {
      return copyArray(value2, result);
    }
  } else {
    var tag = getTag$1(value2), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer$1(value2)) {
      return cloneBuffer(value2, isDeep);
    }
    if (tag == objectTag$1 || tag == argsTag$1 || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value2);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value2, baseAssignIn(result, value2)) : copySymbols(value2, baseAssign(result, value2));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value2 : {};
      }
      result = initCloneByTag(value2, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value2);
  if (stacked) {
    return stacked;
  }
  stack.set(value2, result);
  if (isSet$1(value2)) {
    value2.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value2, stack));
    });
  } else if (isMap$1(value2)) {
    value2.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value2, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value2);
  arrayEach(props || value2, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value2[key2];
    }
    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value2, stack));
  });
  return result;
}
var CLONE_SYMBOLS_FLAG = 4;
function clone(value2) {
  return baseClone(value2, CLONE_SYMBOLS_FLAG);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value2) {
  this.__data__.set(value2, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value2) {
  return this.__data__.has(value2);
}
function SetCache(values2) {
  var index2 = -1, length = values2 == null ? 0 : values2.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values2[index2]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index2 < arrLength) {
    var arrValue = array[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
function mapToArray(map2) {
  var index2 = -1, result = Array(map2.size);
  map2.forEach(function(value2, key) {
    result[++index2] = [key, value2];
  });
  return result;
}
function setToArray(set2) {
  var index2 = -1, result = Array(set2.size);
  set2.forEach(function(value2) {
    result[++index2] = value2;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag$2 = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag$1:
      return object == other + "";
    case mapTag$2:
      var convert = mapToArray;
    case setTag$2:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key = objProps[index2];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$1(object), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag : getTag$1(object), othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$1.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value2, other, bitmask, customizer, stack) {
  if (value2 === other) {
    return true;
  }
  if (value2 == null || other == null || !isObjectLike(value2) && !isObjectLike(other)) {
    return value2 !== value2 && other !== other;
  }
  return baseIsEqualDeep(value2, other, bitmask, customizer, baseIsEqual, stack);
}
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index2 = matchData.length, length = index2, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index2--) {
    var data2 = matchData[index2];
    if (noCustomizer && data2[2] ? data2[1] !== object[data2[0]] : !(data2[0] in object)) {
      return false;
    }
  }
  while (++index2 < length) {
    data2 = matchData[index2];
    var key = data2[0], objValue = object[key], srcValue = data2[1];
    if (noCustomizer && data2[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
function isStrictComparable(value2) {
  return value2 === value2 && !isObject(value2);
}
function getMatchData(object) {
  var result = keys(object), length = result.length;
  while (length--) {
    var key = result[length], value2 = object[key];
    result[length] = [key, value2, isStrictComparable(value2)];
  }
  return result;
}
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index2 = -1, length = path.length, result = false;
  while (++index2 < length) {
    var key = toKey(path[index2]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index2 != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray$1(object) || isArguments$1(object));
}
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
function baseIteratee(value2) {
  if (typeof value2 == "function") {
    return value2;
  }
  if (value2 == null) {
    return identity;
  }
  if (typeof value2 == "object") {
    return isArray$1(value2) ? baseMatchesProperty(value2[0], value2[1]) : baseMatches(value2);
  }
  return property(value2);
}
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index2];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var baseFor = createBaseFor();
var baseFor$1 = baseFor;
function baseForOwn(object, iteratee) {
  return object && baseFor$1(object, iteratee, keys);
}
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index2 = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index2-- : ++index2 < length) {
      if (iteratee(iterable[index2], index2, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var baseEach = createBaseEach(baseForOwn);
var baseEach$1 = baseEach;
var now = function() {
  return root$1.Date.now();
};
var now$1 = now;
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax$2 = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax$2(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush3() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush3;
  return debounced;
}
function arrayIncludesWith(array, value2, comparator) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (comparator(value2, array[index2])) {
      return true;
    }
  }
  return false;
}
function castFunction(value2) {
  return typeof value2 == "function" ? value2 : identity;
}
function forEach(collection, iteratee) {
  var func = isArray$1(collection) ? arrayEach : baseEach$1;
  return func(collection, castFunction(iteratee));
}
function baseFilter(collection, predicate) {
  var result = [];
  baseEach$1(collection, function(value2, index2, collection2) {
    if (predicate(value2, index2, collection2)) {
      result.push(value2);
    }
  });
  return result;
}
function filter(collection, predicate) {
  var func = isArray$1(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate));
}
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate);
      collection = keys(collection);
      predicate = function(key) {
        return iteratee(iterable[key], key, iterable);
      };
    }
    var index2 = findIndexFunc(collection, predicate, fromIndex);
    return index2 > -1 ? iterable[iteratee ? collection[index2] : index2] : void 0;
  };
}
var nativeMax$1 = Math.max;
function findIndex$1(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index2 < 0) {
    index2 = nativeMax$1(length + index2, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate), index2);
}
var find$1 = createFind(findIndex$1);
var find$2 = find$1;
function head(array) {
  return array && array.length ? array[0] : void 0;
}
function baseMap(collection, iteratee) {
  var index2 = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
  baseEach$1(collection, function(value2, key, collection2) {
    result[++index2] = iteratee(value2, key, collection2);
  });
  return result;
}
function map(collection, iteratee) {
  var func = isArray$1(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee));
}
function forIn(object, iteratee) {
  return object == null ? object : baseFor$1(object, castFunction(iteratee), keysIn);
}
var stringTag = "[object String]";
function isString(value2) {
  return typeof value2 == "string" || !isArray$1(value2) && isObjectLike(value2) && baseGetTag(value2) == stringTag;
}
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}
function values$1(object) {
  return object == null ? [] : baseValues(object, keys(object));
}
var nativeMax = Math.max;
function includes(collection, value2, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values$1(collection);
  fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection) ? fromIndex <= length && collection.indexOf(value2, fromIndex) > -1 : !!length && baseIndexOf(collection, value2, fromIndex) > -1;
}
var mapTag$1 = "[object Map]", setTag$1 = "[object Set]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function isEmpty(value2) {
  if (value2 == null) {
    return true;
  }
  if (isArrayLike(value2) && (isArray$1(value2) || typeof value2 == "string" || typeof value2.splice == "function" || isBuffer$1(value2) || isTypedArray$1(value2) || isArguments$1(value2))) {
    return !value2.length;
  }
  var tag = getTag$1(value2);
  if (tag == mapTag$1 || tag == setTag$1) {
    return !value2.size;
  }
  if (isPrototype(value2)) {
    return !baseKeys(value2).length;
  }
  for (var key in value2) {
    if (hasOwnProperty.call(value2, key)) {
      return false;
    }
  }
  return true;
}
function isEqual$3(value2, other) {
  return baseIsEqual(value2, other);
}
function isNil(value2) {
  return value2 == null;
}
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee);
  baseForOwn(object, function(value2, key, object2) {
    baseAssignValue(result, key, iteratee(value2, key, object2));
  });
  return result;
}
function baseSet(object, path, value2, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);
  var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index2 < length) {
    var key = toKey(path[index2]), newValue = value2;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index2 != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index2 + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var asciiSize = baseProperty("length");
var asciiSize$1 = asciiSize;
var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d";
var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}
function stringSize(string) {
  return hasUnicode(string) ? unicodeSize(string) : asciiSize$1(string);
}
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value2, index2, collection2) {
    accumulator = initAccum ? (initAccum = false, value2) : iteratee(accumulator, value2, index2, collection2);
  });
  return accumulator;
}
function reduce(collection, iteratee, accumulator) {
  var func = isArray$1(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
  return func(collection, baseIteratee(iteratee), accumulator, initAccum, baseEach$1);
}
function set(object, path, value2) {
  return object == null ? object : baseSet(object, path, value2);
}
var mapTag = "[object Map]", setTag = "[object Set]";
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike(collection)) {
    return isString(collection) ? stringSize(collection) : collection.length;
  }
  var tag = getTag$1(collection);
  if (tag == mapTag || tag == setTag) {
    return collection.size;
  }
  return baseKeys(collection).length;
}
function toUpper(value2) {
  return toString(value2).toUpperCase();
}
var INFINITY = 1 / 0;
var createSet = !(Set$1 && 1 / setToArray(new Set$1([, -0]))[1] == INFINITY) ? noop$3 : function(values2) {
  return new Set$1(values2);
};
var createSet$1 = createSet;
var LARGE_ARRAY_SIZE = 200;
function baseUniq(array, iteratee, comparator) {
  var index2 = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
  if (comparator) {
    isCommon = false;
    includes2 = arrayIncludesWith;
  } else if (length >= LARGE_ARRAY_SIZE) {
    var set2 = iteratee ? null : createSet$1(array);
    if (set2) {
      return setToArray(set2);
    }
    isCommon = false;
    includes2 = cacheHas;
    seen = new SetCache();
  } else {
    seen = iteratee ? [] : result;
  }
  outer:
    while (++index2 < length) {
      var value2 = array[index2], computed = iteratee ? iteratee(value2) : value2;
      value2 = comparator || value2 !== 0 ? value2 : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value2);
      } else if (!includes2(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }
        result.push(value2);
      }
    }
  return result;
}
function uniq(array) {
  return array && array.length ? baseUniq(array) : [];
}
var classnames = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(module2) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString === Object.prototype.toString) {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          } else {
            classes.push(arg.toString());
          }
        }
      }
      return classes.join(" ");
    }
    if (module2.exports) {
      classNames.default = classNames;
      module2.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames);
var cx = classnames.exports;
var index$a = "";
const ICON_CLS = "antv-s2-icon";
const CalendarIcon = () => /* @__PURE__ */ React__default["default"].createElement("svg", {
  className: ICON_CLS,
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "24661",
  width: "12.6",
  height: "12.6"
}, /* @__PURE__ */ React__default["default"].createElement("path", {
  d: "M170.75 506.375V853.25h682.5V255.125H678.878v53.968c0 16.572-13.438 30.005-30.006 30.005h-19.208c-16.572 0-30.006-13.433-30.006-30.005v-53.968h-177.19v53.968c0 16.572-13.439 30.005-30.006 30.005h-19.208c-16.572 0-30.006-13.433-30.006-30.005v-53.968H170.75v172.5h682.5v78.75h-682.5zM680 176h192c33.137 0 60 26.865 60 59.994v636.012C932 905.14 905.136 932 872 932H152c-33.137 0-60-26.865-60-59.994V235.994C92 202.86 118.864 176 152 176h192v-54c0-16.569 13.432-30 29.999-30h19.315c16.568 0 29.998 13.426 29.998 30v54h177.375v-54c0-16.569 13.432-30 30-30H650c16.57 0 30 13.426 30 30v54z",
  "p-id": "24662",
  fill: "currentColor"
}));
const TextIcon = () => /* @__PURE__ */ React__default["default"].createElement("svg", {
  className: ICON_CLS,
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "25453",
  width: "12.6",
  height: "12.6"
}, /* @__PURE__ */ React__default["default"].createElement("path", {
  d: "M86.016 805.888H0L143.872 275.968h79.36l144.896 529.92H276.992l-29.696-109.056H115.2s-29.696 109.056-29.184 109.056zM225.28 613.376L181.248 455.68 138.24 613.376h87.04zM519.168 430.08c24.576-16.384 47.616-25.088 69.12-25.088 30.72 0 58.368 14.848 81.92 44.032 24.064 29.184 35.328 72.192 35.328 128.512 0 44.032-7.168 83.456-22.528 118.272-14.848 34.816-35.328 62.976-60.416 83.456-26.112 20.992-57.856 31.232-95.232 31.232-15.36-0.512-31.232-1.536-46.592-3.584-4.096-0.512-8.704-1.024-12.8-1.536h-66.56V256h81.92v206.336c11.264-12.8 23.04-23.552 35.84-32.256z m-35.328 157.184v135.168c13.824 3.072 26.112 4.608 37.376 4.608 27.648 0 50.176-11.776 69.12-36.352 19.456-25.088 28.672-59.392 28.672-104.96 0-32.256-5.12-55.296-14.848-70.144-9.216-13.824-18.432-19.968-28.672-19.968-12.288 0-27.136 7.68-44.544 24.064-16.896 16.896-32.768 39.424-47.104 67.584zM1013.76 794.624c-36.864 14.336-71.68 20.992-104.96 20.992-32.768 0.512-64.512-9.216-91.648-27.136-27.136-18.432-48.64-44.032-62.464-73.728-14.848-30.72-22.528-65.536-22.528-104.448 0-58.88 16.896-108.032 51.2-146.944 33.792-38.912 75.264-58.88 123.392-58.88 34.304 0 70.144 7.168 108.032 21.504l10.24 4.096v95.232l-20.992-10.752c-34.816-17.92-65.536-26.624-92.16-26.624-16.896 0-32.768 4.608-47.104 13.824-13.824 8.704-25.088 23.04-32.768 42.496-8.192 19.968-12.288 41.472-12.288 63.488 0 28.672 7.68 55.808 24.064 82.432 14.848 24.576 37.888 36.352 71.168 36.352 10.752 0 21.504-1.024 31.744-2.56 9.728-1.536 29.696-8.192 58.88-18.944l19.456-7.68v92.672l-11.264 4.608z",
  "p-id": "25454",
  fill: "currentColor"
}));
const LocationIcon = () => /* @__PURE__ */ React__default["default"].createElement("svg", {
  className: ICON_CLS,
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "24527",
  width: "12.6",
  height: "12.6"
}, /* @__PURE__ */ React__default["default"].createElement("path", {
  d: "M511.804 222.338c-57.117 0-105.737 20.061-145.86 60.184-40.122 40.123-60.184 88.569-60.184 145.337 0 56.769 20.062 105.214 60.185 145.337 40.122 40.123 88.742 60.185 145.859 60.185 57.116 0 105.736-20.062 145.859-60.185 40.123-40.123 60.184-88.568 60.184-145.337 0-56.768-20.061-105.214-60.184-145.337-40.123-40.123-88.743-60.184-145.86-60.184z m0 338.619c-36.729 0-68.007-12.925-93.835-38.774-25.827-25.85-38.752-57.127-38.773-93.834-0.022-36.707 12.902-68.16 38.773-94.357 25.872-26.197 57.15-39.285 93.835-39.263 36.685 0.022 67.963 13.11 93.834 39.263 25.871 26.154 38.796 57.606 38.774 94.357-0.022 36.75-12.946 68.028-38.774 93.834-25.828 25.806-57.106 38.73-93.834 38.774z m366.165-295.766c-21.084-42.168-50.327-79.223-87.73-111.165-37.404-31.941-79.898-57.105-127.484-75.491C614.472 60.845 564.155 52 511.804 52c-52.352 0-103.006 8.845-151.963 26.535-46.911 18.364-89.069 43.528-126.472 75.491-37.403 31.964-66.647 69.019-87.731 111.165C123.879 308.71 113 353.923 113 400.835c0 65.95 15.982 132.924 47.945 200.92 26.524 56.441 63.58 112.198 111.165 167.27 62.556 73.435 134.632 138.71 216.227 195.827 6.81 4.765 14.459 7.148 22.945 7.148 8.485 0 16.47-2.383 23.956-7.148 81.595-57.79 153.67-123.067 216.227-195.828 47.608-55.767 84.663-111.524 111.165-167.27 31.963-67.995 47.945-134.969 47.945-200.919 0-46.912-10.88-92.126-32.638-135.644h0.032z m-40.797 136.656c0 55.07-13.6 111.513-40.798 169.326-23.129 49.631-56.452 99.948-99.97 150.95-52.351 61.208-113.885 117.65-184.6 169.326-70.716-51.676-132.25-108.118-184.6-169.326-42.844-51.002-76.167-101.319-99.971-150.95-27.198-57.791-40.797-114.57-40.797-170.338 0-36.032 8.159-70.716 24.478-104.05 16.994-32.638 40.45-61.882 70.368-87.73 30.592-26.525 65.276-47.26 104.05-62.209 40.797-14.97 82.954-22.455 126.472-22.455 43.517 0 85.675 7.485 126.472 22.455 38.752 14.97 73.436 35.706 104.05 62.208 30.593 25.85 54.048 55.093 70.367 87.731 16.32 34.009 24.479 69.03 24.479 105.062z",
  "p-id": "24528",
  fill: "currentColor"
}));
const SearchIcon = () => /* @__PURE__ */ React__default["default"].createElement("svg", {
  className: ICON_CLS,
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "21490",
  width: "12.6",
  height: "12.6"
}, /* @__PURE__ */ React__default["default"].createElement("path", {
  d: "M950.016 898.016l-206.016-204.992Q832 586.016 832 448.032q0-159.008-112.512-271.488T448 64.032 176.512 176.544 64 448.032t112.512 271.488T448 832.032q138.016 0 244.992-88l206.016 206.016q10.016 10.016 24.992 10.016t26.016-10.016q10.016-11.008 10.016-26.016t-10.016-26.016zM568.992 736Q512 760 448 760T327.008 736q-56-24-99.488-67.488t-66.496-99.488q-24.992-56.992-24.992-120.992t24.992-120.992q23.008-56 66.496-99.488t99.488-67.488Q384 136.064 448 136.064t120.992 24q56 24 99.488 67.488t67.488 99.488q24 56.992 24 120.992t-24 120.992q-24 56-67.488 99.488T568.992 736z",
  fill: "currentColor",
  "p-id": "21491"
}));
const DotIcon = () => /* @__PURE__ */ React__default["default"].createElement("svg", {
  viewBox: "0 0 1024 1024",
  version: "1.1",
  width: "16",
  height: "16"
}, /* @__PURE__ */ React__default["default"].createElement("defs", null, /* @__PURE__ */ React__default["default"].createElement("style", {
  type: "text/css"
})), /* @__PURE__ */ React__default["default"].createElement("path", {
  d: "M441.6 249.6c0 38.4 32 70.4 70.4 70.4s70.4-32 70.4-70.4c0-38.4-32-70.4-70.4-70.4s-70.4 25.6-70.4 70.4z m0 262.4c0 38.4 32 70.4 70.4 70.4s70.4-32 70.4-70.4c0-38.4-32-70.4-70.4-70.4s-70.4 32-70.4 70.4z m0 262.4c0 38.4 32 70.4 70.4 70.4s70.4-32 70.4-70.4c0-38.4-32-70.4-70.4-70.4s-70.4 32-70.4 70.4z",
  fill: "",
  "p-id": "22217"
}));
const SwitcherIcon = () => /* @__PURE__ */ React__default["default"].createElement("svg", {
  className: ICON_CLS,
  width: "16px",
  height: "16px",
  viewBox: "0 0 16 16",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ React__default["default"].createElement("g", {
  transform: "translate(8.056364, 8.000227) rotate(-270.000000) translate(-8.056364, -8.000227) translate(3.057045, 3.070227)",
  fill: "currentColor"
}, /* @__PURE__ */ React__default["default"].createElement("path", {
  d: "M0.482272727,3.55181818 C0.472878788,3.55181818 0.468181818,3.54939394 0.468181818,3.54454545 C0.468181818,3.53969697 0.465757576,3.53727273 0.460909091,3.53727273 L0.396818182,3.53727273 L0.382727273,3.52318182 L0.34,3.52318182 L0.325909091,3.50909091 L0.311818182,3.50909091 L0.297727273,3.495 L0.269090909,3.495 L0.269090909,3.48090909 L0.255,3.48090909 L0.240909091,3.46681818 L0.226818182,3.46681818 L0.226818182,3.45272727 L0.212727273,3.45272727 L0.184090909,3.42409091 L0.17,3.42409091 C0.160606061,3.405 0.151060606,3.39075758 0.141363636,3.38136364 C0.131969697,3.38136364 0.127272727,3.37893939 0.127272727,3.37409091 L0.127272727,3.36681818 L0.113181818,3.35272727 L0.113181818,3.33863636 L0.0990909091,3.33863636 L0.0990909091,3.32454545 L0.085,3.31045455 L0.085,3.30318182 L0.0777272727,3.29590909 L0.0704545455,3.29590909 L0.0704545455,3.28181818 L0.0563636364,3.26772727 L0.0563636364,3.24636364 L0.0490909091,3.23909091 L0.0418181818,3.23909091 L0.0418181818,3.225 C0.0418181818,3.21560606 0.0393939394,3.21090909 0.0345454545,3.21090909 C0.0296969697,3.21090909 0.0272727273,3.20848485 0.0272727273,3.20363636 L0.0272727273,3.15409091 L0.0131818182,3.14 L0.0131818182,2.94090909 L0.0272727273,2.92681818 L0.0272727273,2.88409091 C0.0366666667,2.87469697 0.0413636364,2.86757576 0.0413636364,2.86272727 L0.0413636364,2.84136364 L0.0554545455,2.82727273 L0.0554545455,2.81318182 L0.0695454545,2.79909091 L0.0695454545,2.79181818 L0.0768181818,2.77772727 L0.0840909091,2.77045455 L0.0840909091,2.76318182 L0.0913636364,2.75590909 L0.0986363636,2.74863636 L0.0986363636,2.74136364 L0.112727273,2.72727273 C0.112727273,2.71787879 0.117424242,2.71318182 0.126818182,2.71318182 L0.126818182,2.69909091 L0.140909091,2.69909091 L2.68363636,0.156363636 C2.77848485,0.0521212121 2.89681818,0 3.03863636,0 C3.18045455,0 3.29878788,0.0521212121 3.39363636,0.156363636 C3.49787879,0.260606061 3.55,0.381363636 3.55,0.518636364 C3.55,0.655909091 3.49787879,0.776666667 3.39363636,0.880909091 L1.74590909,2.52863636 L9.48727273,2.52863636 C9.62939394,2.52863636 9.75015152,2.57833333 9.84954545,2.67772727 C9.94893939,2.77712121 9.99863636,2.89787879 9.99863636,3.04 C9.99863636,3.18212121 9.94893939,3.30287879 9.84954545,3.40227273 C9.75015152,3.50166667 9.62939394,3.55136364 9.48727273,3.55136364 L0.481363636,3.55136364 L0.482272727,3.55181818 Z M9.51636364,6.30727273 C9.52575758,6.30727273 9.53045455,6.30969697 9.53045455,6.31454545 C9.53045455,6.31939394 9.53287879,6.32181818 9.53772727,6.32181818 L9.60181818,6.32181818 L9.61590909,6.33590909 L9.65863636,6.33590909 L9.65863636,6.35 L9.68727273,6.35 L9.70136364,6.36409091 L9.73,6.36409091 L9.73,6.37818182 L9.74409091,6.37818182 L9.75818182,6.39227273 L9.77227273,6.39227273 L9.77227273,6.40636364 L9.78636364,6.40636364 L9.815,6.435 L9.82909091,6.435 C9.83848485,6.45409091 9.8480303,6.46833333 9.85772727,6.47772727 C9.86712121,6.47772727 9.87181818,6.48015152 9.87181818,6.485 L9.87181818,6.49227273 L9.88590909,6.50636364 L9.88590909,6.52045455 L9.9,6.52045455 L9.9,6.53454545 L9.90727273,6.53454545 L9.91454545,6.54181818 L9.91454545,6.55590909 L9.92181818,6.56318182 L9.92909091,6.57045455 L9.92909091,6.57772727 L9.94318182,6.59181818 L9.94318182,6.61318182 L9.95045455,6.62045455 L9.95772727,6.62045455 L9.95772727,6.64909091 L9.965,6.65636364 L9.97227273,6.67045455 L9.97227273,6.70590909 L9.98636364,6.72 L9.98636364,6.91909091 L9.97227273,6.93318182 L9.97227273,6.97590909 L9.95818182,6.99 L9.95818182,7.01863636 L9.94409091,7.03272727 L9.94409091,7.04681818 L9.93,7.06090909 L9.93,7.06818182 L9.92272727,7.08227273 L9.91545455,7.08954545 L9.91545455,7.09681818 L9.90818182,7.10409091 L9.90090909,7.11136364 L9.90090909,7.11863636 L9.88681818,7.13272727 C9.88681818,7.14212121 9.88439394,7.14681818 9.87954545,7.14681818 L9.87227273,7.14681818 L9.87227273,7.16090909 L9.85818182,7.16090909 L9.85090909,7.16818182 L9.84363636,7.18954545 L7.32954545,9.70363636 C7.22530303,9.80787879 7.10212121,9.86 6.96,9.86 C6.81787879,9.86 6.69954545,9.80787879 6.605,9.70363636 C6.50075758,9.60878788 6.44863636,9.49045455 6.44863636,9.34863636 C6.44863636,9.20681818 6.50075758,9.08363636 6.605,8.97909091 L8.25272727,7.33136364 L0.511363636,7.33136364 C0.378636364,7.33136364 0.26030303,7.28166667 0.156363636,7.18227273 C0.0524242424,7.08287879 0.000303030303,6.96212121 4.54747351e-13,6.82 C4.54747351e-13,6.67787879 0.0521212121,6.55712121 0.156363636,6.45772727 C0.260606061,6.35833333 0.378939394,6.30863636 0.511363636,6.30863636 L9.51727273,6.30863636 L9.51636364,6.30727273 Z"
})));
const RowIcon = () => /* @__PURE__ */ React__default["default"].createElement("svg", {
  className: ICON_CLS,
  width: "12px",
  height: "12px",
  viewBox: "0 0 12 12",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ React__default["default"].createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /* @__PURE__ */ React__default["default"].createElement("g", {
  transform: "translate(-153.000000, -608.000000)",
  fill: "#595959",
  fillRule: "nonzero"
}, /* @__PURE__ */ React__default["default"].createElement("g", {
  transform: "translate(127.000000, 549.000000)"
}, /* @__PURE__ */ React__default["default"].createElement("g", {
  transform: "translate(24.000000, 57.000000)"
}, /* @__PURE__ */ React__default["default"].createElement("g", {
  transform: "translate(2.000000, 2.000000)"
}, /* @__PURE__ */ React__default["default"].createElement("path", {
  d: "M0.771428571,3.77142857 L3.77142857,3.77142857 L3.77142857,5.65714286 L0.771428571,5.65714286 L0.771428571,3.77142857 Z M0.771428571,6.34285714 L3.77142857,6.34285714 L3.77142857,8.57142857 L0.771428571,8.57142857 L0.771428571,6.34285714 Z M0.771428571,9 L3.77142857,9 L3.77142857,11.2285714 L0.771428571,11.2285714 L0.771428571,9 Z"
}), /* @__PURE__ */ React__default["default"].createElement("path", {
  d: "M0.771428571,9 L0.771428571,11.2285714 L11.2285714,11.2285714 L11.2285714,3.77142857 L0.771428571,3.77142857 L0.771428571,5.65714286 L3.77142857,5.65714286 L3.77142857,3.77142857 L4.54285714,3.77142857 L4.54285714,11.3142857 L3.77142857,11.3142857 L3.77142857,9.08571429 L0.771428571,9.08571429 L0.771428571,9 Z M0.771428571,8.22857143 L3.77142857,8.22857143 L3.77142857,6.34285714 L0.771428571,6.34285714 L0.771428571,8.22857143 L0.771428571,8.22857143 Z M11.2285714,3 L11.2285714,0.771428571 L0.771428571,0.771428571 L0.771428571,3 L11.2285714,3 Z M12,0 L12,12 L0,12 L0,0 L12,0 Z"
})))))));
const ColIcon = () => /* @__PURE__ */ React__default["default"].createElement("svg", {
  className: ICON_CLS,
  width: "12px",
  height: "12px",
  viewBox: "0 0 12 12",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ React__default["default"].createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /* @__PURE__ */ React__default["default"].createElement("g", {
  transform: "translate(-153.000000, -814.000000)",
  fill: "#595959",
  fillRule: "nonzero"
}, /* @__PURE__ */ React__default["default"].createElement("g", {
  transform: "translate(127.000000, 549.000000)"
}, /* @__PURE__ */ React__default["default"].createElement("g", {
  transform: "translate(24.000000, 55.000000)"
}, /* @__PURE__ */ React__default["default"].createElement("g", {
  transform: "translate(0.000000, 208.000000)"
}, /* @__PURE__ */ React__default["default"].createElement("g", {
  transform: "translate(2.000000, 2.000000)"
}, /* @__PURE__ */ React__default["default"].createElement("path", {
  d: "M4.45714286,11.2285714 L11.2285714,11.2285714 L11.2285714,3.77142857 L4.45714286,3.77142857 L4.45714286,11.2285714 Z M3.77142857,11.2285714 L3.77142857,3.77142857 L0.771428571,3.77142857 L0.771428571,11.3142857 L3.77142857,11.3142857 L3.77142857,11.2285714 Z M11.2285714,3 L11.2285714,0.771428571 L0.771428571,0.771428571 L0.771428571,3 L11.2285714,3 Z M12,0 L12,12 L0,12 L0,0 L12,0 Z"
}), /* @__PURE__ */ React__default["default"].createElement("polygon", {
  points: "0.771428571 0.771428571 11.2285714 0.771428571 11.2285714 3 0.771428571 3"
}))))))));
const ValueIcon = () => /* @__PURE__ */ React__default["default"].createElement("svg", {
  className: ICON_CLS,
  width: "12px",
  height: "12px",
  viewBox: "0 0 12 12",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ React__default["default"].createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /* @__PURE__ */ React__default["default"].createElement("g", {
  transform: "translate(-365.000000, -624.000000)",
  fill: "#595959",
  fillRule: "nonzero"
}, /* @__PURE__ */ React__default["default"].createElement("g", {
  transform: "translate(127.000000, 549.000000)"
}, /* @__PURE__ */ React__default["default"].createElement("g", {
  transform: "translate(236.000000, 71.000000)"
}, /* @__PURE__ */ React__default["default"].createElement("g", {
  transform: "translate(0.000000, 2.000000)"
}, /* @__PURE__ */ React__default["default"].createElement("g", {
  transform: "translate(2.000000, 2.000000)"
}, /* @__PURE__ */ React__default["default"].createElement("polygon", {
  points: "4.22857143 3.77142857 11.2285714 3.77142857 11.2285714 11.7714286 4.22857143 11.7714286"
}), /* @__PURE__ */ React__default["default"].createElement("path", {
  d: "M4.45714286,11.2285714 L11.2285714,11.2285714 L11.2285714,3.77142857 L4.45714286,3.77142857 L4.45714286,11.2285714 Z M3.77142857,11.2285714 L3.77142857,3.77142857 L0.771428571,3.77142857 L0.771428571,11.3142857 L3.77142857,11.3142857 L3.77142857,11.2285714 Z M11.2285714,3 L11.2285714,0.771428571 L0.771428571,0.771428571 L0.771428571,3 L11.2285714,3 Z M12,0 L12,12 L0,12 L0,0 L12,0 Z"
}))))))));
const SortIcon = () => /* @__PURE__ */ React__default["default"].createElement("svg", {
  width: "16px",
  height: "16px",
  viewBox: "0 0 24 24",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ React__default["default"].createElement("path", {
  d: "M18.0047888,16.4055 C18.1082888,16.4055 18.1922888,16.4895 18.1922888,16.593 L18.1922888,17.9055 C18.1922888,18.0090534 18.1083422,18.093 18.0047888,18.093 L9.37978883,18.093 C9.27623544,18.093 9.19228883,18.0090534 9.19228883,17.9055 L9.19228883,16.593 C9.19228883,16.4895 9.27628883,16.4055 9.37978883,16.4055 L18.0047888,16.4055 Z M4.41328883,1.6665 L4.46428883,1.7115 L7.08928883,5.0385 C7.17478883,5.1435 7.12078883,5.2935 7.00528883,5.3325 L6.94228883,5.343 L5.16028883,5.343 L5.16028883,14.25 L6.94228883,14.25 C7.09978883,14.25 7.18828883,14.433 7.08928883,14.5545 L4.46428883,17.88 C4.42872537,17.9249155 4.37457895,17.9511073 4.31728883,17.9511073 C4.25999871,17.9511073 4.20585229,17.9249155 4.17028883,17.88 L1.54528883,14.5545 C1.50119832,14.4981177 1.49305316,14.4215528 1.52429494,14.3571564 C1.55553672,14.2927601 1.62071465,14.2517677 1.69228883,14.2515 L3.47428883,14.2515 L3.47428883,5.343 L1.69228883,5.343 C1.63110128,5.34394015 1.57330492,5.31496201 1.53745415,5.26536844 C1.50160338,5.21577487 1.49220972,5.15180683 1.51228883,5.094 L1.54528883,5.0385 L4.17028883,1.713 C4.22854609,1.63918993 4.33246412,1.61994585 4.41328883,1.668 L4.41328883,1.6665 Z M15.7547888,11.4375 C15.8582888,11.4375 15.9422888,11.5215 15.9422888,11.625 L15.9422888,12.9375 C15.9422888,13.0410534 15.8583422,13.125 15.7547888,13.125 L9.37978883,13.125 C9.33006074,13.125 9.28236938,13.1052456 9.24720631,13.0700825 C9.21204324,13.0349195 9.19228883,12.9872281 9.19228883,12.9375 L9.19228883,11.625 C9.19228883,11.5215 9.27628883,11.4375 9.37978883,11.4375 L15.7547888,11.4375 Z M21.7547888,6.468 C21.8582888,6.468 21.9422888,6.5535 21.9422888,6.6555 L21.9422888,7.968 C21.9422888,8.07155339 21.8583422,8.1555 21.7547888,8.1555 L9.37978883,8.1555 C9.33006074,8.1555 9.28236938,8.13574559 9.24720631,8.10058252 C9.21204324,8.06541945 9.19228883,8.01772809 9.19228883,7.968 L9.19228883,6.6555 C9.19228883,6.5535 9.27628883,6.468 9.37978883,6.468 L21.7547888,6.468 Z M13.5047888,1.5 C13.6082888,1.5 13.6922888,1.584 13.6922888,1.6875 L13.6922888,3 C13.6922888,3.10355339 13.6083422,3.1875 13.5047888,3.1875 L9.37978883,3.1875 C9.33006074,3.1875 9.28236938,3.16774559 9.24720631,3.13258252 C9.21204324,3.09741945 9.19228883,3.04972809 9.19228883,3 L9.19228883,1.6875 C9.19228883,1.584 9.27628883,1.5 9.37978883,1.5 L13.5047888,1.5 Z",
  fill: "#595959"
}));
const Export = React__default["default"].memo((_a) => {
  var _b = _a, {
    className,
    icon: icon2,
    syncCopy = false,
    copyOriginalText = "\u590D\u5236\u539F\u59CB\u6570\u636E",
    copyFormatText = "\u590D\u5236\u683C\u5F0F\u5316\u6570\u636E",
    downloadOriginalText = "\u4E0B\u8F7D\u539F\u59CB\u6570\u636E",
    downloadFormatText = "\u4E0B\u8F7D\u683C\u5F0F\u5316\u6570\u636E",
    successText = "\u64CD\u4F5C\u6210\u529F",
    errorText = "\u64CD\u4F5C\u5931\u8D25",
    sheet,
    fileName = "sheet"
  } = _b, restProps = __objRest(_b, [
    "className",
    "icon",
    "syncCopy",
    "copyOriginalText",
    "copyFormatText",
    "downloadOriginalText",
    "downloadFormatText",
    "successText",
    "errorText",
    "sheet",
    "fileName"
  ]);
  const PRE_CLASS2 = `${s2.S2_PREFIX_CLS}-export`;
  const copyData = (isFormat) => {
    const data2 = s2.copyData(sheet, "	", isFormat);
    s2.copyToClipboard(data2, syncCopy).then(() => {
      antd.message.success(successText);
    }).catch((error) => {
      console.log("copy failed: ", error);
      antd.message.error(errorText);
    });
  };
  const downloadData = (isFormat) => {
    const data2 = s2.copyData(sheet, ",", isFormat);
    try {
      s2.download(data2, fileName);
      antd.message.success(successText);
    } catch (err) {
      antd.message.error(errorText);
    }
  };
  const menu = /* @__PURE__ */ React__default["default"].createElement(antd.Menu, null, /* @__PURE__ */ React__default["default"].createElement(antd.Menu.Item, {
    key: "copyOriginal",
    onClick: () => copyData(false)
  }, copyOriginalText), /* @__PURE__ */ React__default["default"].createElement(antd.Menu.Item, {
    key: "copyFormat",
    onClick: () => copyData(true)
  }, copyFormatText), /* @__PURE__ */ React__default["default"].createElement(antd.Menu.Item, {
    key: "downloadOriginal",
    onClick: () => downloadData(false)
  }, downloadOriginalText), /* @__PURE__ */ React__default["default"].createElement(antd.Menu.Item, {
    key: "downloadFormat",
    onClick: () => downloadData(true)
  }, downloadFormatText));
  return /* @__PURE__ */ React__default["default"].createElement(antd.Dropdown, __spreadValues({
    overlay: menu,
    trigger: ["click"],
    className: cx(PRE_CLASS2, className)
  }, restProps), /* @__PURE__ */ React__default["default"].createElement("a", {
    className: "ant-dropdown-link",
    key: "export",
    onClick: (e2) => e2.preventDefault()
  }, icon2 || /* @__PURE__ */ React__default["default"].createElement(DotIcon, null)));
});
const TOOLTIP_DEFAULT_ICON_PROPS = {
  width: 14,
  height: 14,
  style: {
    verticalAlign: "sub",
    marginRight: 4
  }
};
var htmlIcon = "";
class HtmlIcon extends React__default["default"].PureComponent {
  render() {
    const { style: style2 = {}, width, height, className, name: name2 } = this.props;
    const svgIcon = () => s2.getIcon(name2);
    const newStyle = __spreadValues({}, style2);
    if (width) {
      newStyle.width = `${width}px`;
    }
    if (height) {
      newStyle.height = `${height}px`;
    }
    return /* @__PURE__ */ React__default["default"].createElement("span", {
      style: newStyle,
      className: cx(`${s2.S2_PREFIX_CLS}-html-icon`, className),
      dangerouslySetInnerHTML: { __html: svgIcon() }
    });
  }
}
class ReactElement extends React__default["default"].PureComponent {
  render() {
    const { style: style2 = {}, className, content } = this.props;
    let htmlNode;
    if (typeof content !== "string") {
      htmlNode = (content == null ? void 0 : content.innerHTML) || "";
    } else {
      htmlNode = content;
    }
    return /* @__PURE__ */ React__default["default"].createElement("div", {
      style: style2,
      className: cx(`${s2.S2_PREFIX_CLS}-react-element`, className),
      dangerouslySetInnerHTML: { __html: htmlNode }
    });
  }
}
const Icon = (props) => {
  const _a = props, { icon: icon2 } = _a, attrs = __objRest(_a, ["icon"]);
  if (!icon2) {
    return null;
  }
  if (s2.getIcon(icon2)) {
    const name2 = icon2;
    return /* @__PURE__ */ React__default["default"].createElement(HtmlIcon, __spreadValues(__spreadValues({
      name: name2
    }, TOOLTIP_DEFAULT_ICON_PROPS), attrs));
  }
  return /* @__PURE__ */ React__default["default"].createElement(ReactElement, __spreadValues(__spreadValues({
    content: icon2
  }, TOOLTIP_DEFAULT_ICON_PROPS), attrs));
};
const TooltipDetail = (props) => {
  const { list = [] } = props;
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    className: `${s2.TOOLTIP_PREFIX_CLS}-detail-list`
  }, list.map((listItem, idx) => {
    const { name: name2, value: value2, icon: icon2 } = listItem;
    return /* @__PURE__ */ React__default["default"].createElement("div", {
      key: `${value2}-${idx}`,
      className: `${s2.TOOLTIP_PREFIX_CLS}-detail-item`
    }, /* @__PURE__ */ React__default["default"].createElement("span", {
      className: `${s2.TOOLTIP_PREFIX_CLS}-detail-item-key`
    }, name2), /* @__PURE__ */ React__default["default"].createElement("span", {
      className: `${s2.TOOLTIP_PREFIX_CLS}-detail-item-val ${s2.TOOLTIP_PREFIX_CLS}-highlight`
    }, icon2 ? /* @__PURE__ */ React__default["default"].createElement(Icon, {
      icon: icon2,
      width: 8,
      height: 7
    }) : null, " ", value2));
  }));
};
const Divider = () => {
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    className: `${s2.TOOLTIP_PREFIX_CLS}-divider`
  });
};
const TooltipHead = (props) => {
  var _a, _b;
  const { rows = [], cols = [] } = props;
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    className: `${s2.TOOLTIP_PREFIX_CLS}-head-info-list`
  }, (_a = cols.map((item) => item.value)) == null ? void 0 : _a.join("/"), cols.length > 0 && rows.length > 0 && "\uFF0C", (_b = rows.map((item) => item.value)) == null ? void 0 : _b.join("/"));
};
const TooltipInfos = (props) => {
  const { infos = "" } = props;
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    className: `${s2.TOOLTIP_PREFIX_CLS}-infos`
  }, infos);
};
const Interpretation = (props) => {
  const { name: name2, icon: icon2, text, render } = props;
  const renderName = () => {
    return name2 && /* @__PURE__ */ React__default["default"].createElement("span", {
      className: `${s2.TOOLTIP_PREFIX_CLS}-interpretation-name`
    }, name2);
  };
  const renderText = () => {
    return text && /* @__PURE__ */ React__default["default"].createElement("div", null, text);
  };
  const renderElement = () => {
    return /* @__PURE__ */ React__default["default"].createElement(ReactElement, {
      content: render
    });
  };
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    className: `${s2.TOOLTIP_PREFIX_CLS}-interpretation`
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: `${s2.TOOLTIP_PREFIX_CLS}-interpretation-head`
  }, /* @__PURE__ */ React__default["default"].createElement(Icon, {
    icon: icon2,
    className: `${s2.TOOLTIP_PREFIX_CLS}-interpretation-icon`
  }), renderName()), renderText(), renderElement());
};
var index$9 = "";
const TooltipOperator = (props) => {
  const { menus, onlyMenu, onClick: onMenuClick, cell } = props;
  const renderTitle = (menu) => {
    return /* @__PURE__ */ React__default["default"].createElement("span", {
      onClick: () => {
        var _a;
        return (_a = menu.onClick) == null ? void 0 : _a.call(menu, cell);
      }
    }, /* @__PURE__ */ React__default["default"].createElement(Icon, {
      icon: menu.icon,
      className: `${s2.TOOLTIP_PREFIX_CLS}-operator-icon`
    }), menu.text);
  };
  const renderMenu = (menu) => {
    const { key, text, children, onClick } = menu;
    if (!isEmpty(children)) {
      return /* @__PURE__ */ React__default["default"].createElement(antd.Menu.SubMenu, {
        title: renderTitle(menu),
        key,
        popupClassName: `${s2.TOOLTIP_PREFIX_CLS}-operator-submenu-popup`,
        onTitleClick: () => onClick == null ? void 0 : onClick(cell)
      }, map(children, (subMenu) => renderMenu(subMenu)));
    }
    return /* @__PURE__ */ React__default["default"].createElement(antd.Menu.Item, {
      title: text,
      key
    }, renderTitle(menu));
  };
  const renderMenus = () => {
    if (onlyMenu) {
      return /* @__PURE__ */ React__default["default"].createElement(antd.Menu, {
        className: `${s2.TOOLTIP_PREFIX_CLS}-operator-menus`,
        onClick: onMenuClick
      }, map(menus, (subMenu) => renderMenu(subMenu)));
    }
    return map(menus, (menu) => {
      const { key, children } = menu;
      const menuRender = !isEmpty(children) ? /* @__PURE__ */ React__default["default"].createElement(antd.Menu, {
        className: `${s2.TOOLTIP_PREFIX_CLS}-operator-menus`,
        onClick: onMenuClick,
        key
      }, map(children, (subMenu) => renderMenu(subMenu))) : /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null);
      return /* @__PURE__ */ React__default["default"].createElement(antd.Dropdown, {
        key,
        overlay: menuRender
      }, renderTitle(menu));
    });
  };
  return !isEmpty(menus) && /* @__PURE__ */ React__default["default"].createElement("div", {
    className: `${s2.TOOLTIP_PREFIX_CLS}-operator`
  }, renderMenus());
};
const SimpleTips = (props) => {
  const { tips = "", name: name2 = "" } = props;
  return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, name2 && /* @__PURE__ */ React__default["default"].createElement("div", {
    className: `${s2.TOOLTIP_PREFIX_CLS}-name`
  }, name2), tips && /* @__PURE__ */ React__default["default"].createElement("div", {
    className: `${s2.TOOLTIP_PREFIX_CLS}-tips`
  }, tips));
};
const ZH_CN = {
  \u5C0F\u8BA1: "Total",
  \u603B\u8BA1: "Total",
  \u603B\u548C: "SUM",
  \u9879: "items",
  \u5DF2\u9009\u62E9: "selected",
  \u5E8F\u53F7: "Index",
  \u5EA6\u91CF: "Measure",
  \u6570\u503C: "Measure",
  \u5171\u8BA1: "Total",
  \u6761: "",
  \u9009\u62E9\u5206\u6790\u4FE1\u606F: "Select Analysis Information",
  \u5207\u6362\u6307\u6807: "Switch indicator",
  \u786E\u5B9A: "Ok",
  \u53D6\u6D88: "Cancel",
  \u91CD\u7F6E: "Rest",
  \u8BF7\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22: "Please enter a keyword search",
  \u641C\u7D22: "Search",
  \u6062\u590D: "Recover",
  \u8D8B\u52BF: "Trend",
  "\u5DF2\u9009 {} \u9879": "selected {} item",
  \u6240\u9009\u9879: "selected items",
  \u7EC4\u5185\u5347\u5E8F: "Ascending",
  \u7EC4\u5185\u964D\u5E8F: "Descending",
  \u5347\u5E8F: "Ascending",
  \u964D\u5E8F: "Descending",
  \u4E0D\u6392\u5E8F: "No order",
  \u9009\u62E9\u4E0B\u94BB\u7EF4\u5EA6: "Select drill down dimension",
  \u6062\u590D\u9ED8\u8BA4: "Restore default",
  \u641C\u7D22\u5B57\u6BB5: "Search field",
  \u884C\u5217\u5207\u6362: "Switch Dimensions",
  \u884C\u5934: "Rows",
  \u5217\u5934: "Cols",
  \u503C: "Values",
  \u5C55\u5F00\u5B50\u9879: "Expand Children",
  \u9996\u5B57\u6BCD: "Alphabetical order",
  \u624B\u52A8\u6392\u5E8F: "Custom order",
  \u5176\u4ED6\u5B57\u6BB5: "Other field",
  \u9AD8\u7EA7\u6392\u5E8F: "Advanced order",
  \u8BBE\u7F6E\u987A\u5E8F: "SetManual",
  \u53EF\u9009\u5B57\u6BB5: "Fields",
  "\u6309\u4EE5\u4E0B\u89C4\u5219\u8FDB\u884C\u6392\u5E8F\uFF08\u4F18\u5148\u7EA7\u7531\u4F4E\u5230\u9AD8\uFF09": "Order according to the following rules (from low to high priority)",
  \u6309: "By",
  \u8BF4\u660E: "Description"
};
let Locale = ZH_CN;
const i18n = (key, defaultValue = key) => {
  return get(Locale, key, defaultValue);
};
const TooltipSummary = React__default["default"].memo((props) => {
  const { summaries = [] } = props;
  const renderSelected = () => {
    const count2 = reduce(summaries, (pre, next) => pre + size(next == null ? void 0 : next.selectedData), 0);
    return /* @__PURE__ */ React__default["default"].createElement("div", {
      className: `${s2.TOOLTIP_PREFIX_CLS}-summary-item`
    }, /* @__PURE__ */ React__default["default"].createElement("span", {
      className: `${s2.TOOLTIP_PREFIX_CLS}-selected`
    }, count2, " ", i18n("\u9879")), i18n("\u5DF2\u9009\u62E9"));
  };
  const renderSummary = () => {
    return summaries == null ? void 0 : summaries.map((item) => {
      const { name: name2 = "", value: value2 } = item || {};
      if (!name2 && !value2) {
        return;
      }
      return /* @__PURE__ */ React__default["default"].createElement("div", {
        key: `${name2}-${value2}`,
        className: `${s2.TOOLTIP_PREFIX_CLS}-summary-item`
      }, /* @__PURE__ */ React__default["default"].createElement("span", {
        className: `${s2.TOOLTIP_PREFIX_CLS}-summary-key`
      }, name2, "\uFF08", i18n("\u603B\u548C"), ")"), /* @__PURE__ */ React__default["default"].createElement("span", {
        className: cx(`${s2.TOOLTIP_PREFIX_CLS}-summary-val`, `${s2.TOOLTIP_PREFIX_CLS}-bold`)
      }, value2));
    });
  };
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    className: `${s2.TOOLTIP_PREFIX_CLS}-summary`
  }, renderSelected(), renderSummary());
});
var index$8 = "";
const TooltipComponent = (props) => {
  const { data: data2, options, content, cell } = props;
  const renderDivider = () => {
    return /* @__PURE__ */ React__default["default"].createElement(Divider, null);
  };
  const renderOperation = (operator, onlyMenu) => {
    return operator && /* @__PURE__ */ React__default["default"].createElement(TooltipOperator, {
      onClick: operator.onClick,
      menus: operator.menus,
      onlyMenu,
      cell
    });
  };
  const renderNameTips = (nameTip) => {
    const { name: name2, tips } = nameTip || {};
    return /* @__PURE__ */ React__default["default"].createElement(SimpleTips, {
      name: name2,
      tips
    });
  };
  const renderSummary = (summaries) => {
    return !isEmpty(summaries) && /* @__PURE__ */ React__default["default"].createElement(TooltipSummary, {
      summaries
    });
  };
  const renderHeadInfo = (headInfo) => {
    const { cols, rows } = headInfo || {};
    return (!isEmpty(cols) || !isEmpty(rows)) && /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, renderDivider(), /* @__PURE__ */ React__default["default"].createElement(TooltipHead, {
      cols,
      rows
    }));
  };
  const renderDetail = (details) => {
    return !isEmpty(details) && /* @__PURE__ */ React__default["default"].createElement(TooltipDetail, {
      list: details
    });
  };
  const renderInfos = (infos) => {
    return infos && /* @__PURE__ */ React__default["default"].createElement(TooltipInfos, {
      infos
    });
  };
  const renderInterpretation = (interpretation) => {
    return interpretation && /* @__PURE__ */ React__default["default"].createElement(Interpretation, __spreadValues({}, interpretation));
  };
  const renderContent = () => {
    const option = s2.getTooltipDefaultOptions(options);
    const { operator, onlyMenu } = option;
    const { summaries, headInfo, details, interpretation, infos, tips, name: name2 } = data2 || {};
    const nameTip = { name: name2, tips };
    if (onlyMenu) {
      return renderOperation(operator, true);
    }
    const DefaultContent = /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, renderNameTips(nameTip), renderSummary(summaries), renderInterpretation(interpretation), renderHeadInfo(headInfo), renderDetail(details), renderInfos(infos));
    return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, renderOperation(operator), content != null ? content : DefaultContent);
  };
  return renderContent();
};
class CustomTooltip extends s2.BaseTooltip {
  constructor(spreadsheet) {
    super(spreadsheet);
  }
  renderContent() {
    var _a, _b;
    const { content: contentFromOptions } = this.spreadsheet.options.tooltip;
    const showOptions = this.options;
    const cell = this.spreadsheet.getCell((_a = showOptions.event) == null ? void 0 : _a.target);
    const tooltipProps = __spreadProps(__spreadValues({}, showOptions), {
      cell
    });
    const content = (_b = showOptions.content) != null ? _b : contentFromOptions;
    ReactDOM__default["default"].render(/* @__PURE__ */ React__default["default"].createElement(TooltipComponent, __spreadProps(__spreadValues({}, tooltipProps), {
      content
    })), this.container);
  }
  destroy() {
    super.destroy();
    if (this.container) {
      ReactDOM__default["default"].unmountComponentAtNode(this.container);
    }
  }
}
const SHEET_COMPONENT_DEFAULT_OPTIONS = {
  tooltip: {
    showTooltip: true,
    autoAdjustBoundary: "body",
    operation: {
      hiddenColumns: true,
      trend: false,
      sort: true
    },
    renderTooltip: (spreadsheet) => new CustomTooltip(spreadsheet)
  },
  showDefaultHeaderActionIcon: true
};
const SORT_METHOD = [
  {
    name: i18n("\u5347\u5E8F"),
    value: "ASC"
  },
  {
    name: i18n("\u964D\u5E8F"),
    value: "DESC"
  }
];
const RULE_OPTIONS = [
  {
    label: i18n("\u9996\u5B57\u6BCD"),
    value: "sortMethod"
  },
  {
    label: i18n("\u624B\u52A8\u6392\u5E8F"),
    value: "sortBy"
  },
  {
    label: i18n("\u5176\u4ED6\u5B57\u6BB5"),
    value: "sortByMeasure",
    children: []
  }
];
const ADVANCED_PRE_CLS = "antv-s2-advanced-sort";
const CustomSort = (props) => {
  const { splitOrders = [], setSplitOrders } = props;
  const upHandler = (value2) => {
    const res = splitOrders.concat();
    res.splice(res.indexOf(value2), 1);
    res.unshift(value2);
    setSplitOrders(res);
  };
  const downHandler = (value2) => {
    const res = splitOrders.concat();
    let index2 = res.indexOf(value2);
    res.splice(res.indexOf(value2), 1);
    res.splice(index2 += 1, 0, value2);
    setSplitOrders(res);
  };
  const toTopHandler = (value2) => {
    const res = splitOrders.concat();
    let index2 = res.indexOf(value2);
    if (index2 > 0) {
      res.splice(res.indexOf(value2), 1);
      res.splice(index2 -= 1, 0, value2);
      setSplitOrders(res);
    }
  };
  const renderItem = (value2) => {
    return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, /* @__PURE__ */ React__default["default"].createElement("span", {
      className: "split-text"
    }, value2), /* @__PURE__ */ React__default["default"].createElement("span", {
      className: `${ADVANCED_PRE_CLS}-split-icon`,
      onClick: () => {
        upHandler(value2);
      }
    }, /* @__PURE__ */ React__default["default"].createElement(HtmlIcon, __spreadValues({
      name: "groupAsc"
    }, TOOLTIP_DEFAULT_ICON_PROPS))), /* @__PURE__ */ React__default["default"].createElement("span", {
      className: `${ADVANCED_PRE_CLS}-split-icon`,
      onClick: () => {
        downHandler(value2);
      }
    }, /* @__PURE__ */ React__default["default"].createElement(HtmlIcon, __spreadValues({
      name: "groupDesc"
    }, TOOLTIP_DEFAULT_ICON_PROPS))), /* @__PURE__ */ React__default["default"].createElement("span", {
      className: `${ADVANCED_PRE_CLS}-split-icon`,
      onClick: () => {
        toTopHandler(value2);
      }
    }, /* @__PURE__ */ React__default["default"].createElement(HtmlIcon, __spreadValues({
      name: "globalAsc"
    }, TOOLTIP_DEFAULT_ICON_PROPS))));
  };
  return /* @__PURE__ */ React__default["default"].createElement(antd.Card, {
    className: `${ADVANCED_PRE_CLS}-card-content`
  }, splitOrders.map((value2) => /* @__PURE__ */ React__default["default"].createElement("li", {
    key: value2,
    className: `${ADVANCED_PRE_CLS}-split-value`,
    title: value2
  }, renderItem(value2))));
};
var index$7 = "";
const { Sider, Content } = antd.Layout;
const AdvancedSort = ({
  sheet,
  className,
  icon: icon2,
  text,
  ruleText,
  dimensions,
  ruleOptions,
  sortParams,
  onSortOpen,
  onSortConfirm
}) => {
  const [isSortVisible, setIsModalVisible] = React.useState(false);
  const [isCustomVisible, setIsCustomVisible] = React.useState(false);
  const [ruleList, setRuleList] = React.useState([]);
  const [rules, setRules] = React.useState([]);
  const [manualDimensionList, setManualDimensionList] = React.useState([]);
  const [dimensionList, setDimensionList] = React.useState([]);
  const [sortBy, setSortBy] = React.useState([]);
  const [currentDimension, setCurrentDimension] = React.useState();
  const [form] = antd.Form.useForm();
  const handleModal = () => {
    setIsModalVisible(!isSortVisible);
  };
  const sortClick = () => {
    if (onSortOpen) {
      onSortOpen();
    }
    handleModal();
  };
  const handleCustom = () => {
    setIsCustomVisible(!isCustomVisible);
  };
  const handleDimension = (dimension) => {
    if (!find$2(ruleList, (item) => item.field === dimension.field)) {
      setCurrentDimension(dimension);
      setRuleList([...ruleList, dimension]);
    }
    setDimensionList(filter(dimensionList, (item) => item.field !== dimension.field));
  };
  const handleCustomSort = (dimension, splitOrders) => {
    var _a;
    handleCustom();
    setCurrentDimension(dimension);
    if (splitOrders) {
      setSortBy(uniq(splitOrders));
    } else {
      setSortBy(uniq(((_a = find$2(manualDimensionList, (item) => item.field === dimension.field)) == null ? void 0 : _a.list) || []));
    }
  };
  const customSort = () => {
    handleCustom();
    const currentFieldValue = form.getFieldsValue([currentDimension == null ? void 0 : currentDimension.field]);
    currentFieldValue.sortBy = sortBy;
    form.setFieldsValue({ [currentDimension == null ? void 0 : currentDimension.field]: currentFieldValue });
    const newRuleList = map(ruleList, (item) => {
      if (item.field === (currentDimension == null ? void 0 : currentDimension.field)) {
        return __spreadProps(__spreadValues({}, item), {
          rule: "sortBy",
          sortBy,
          sortMethod: "",
          sortByMeasure: ""
        });
      }
      return item;
    });
    setRuleList(newRuleList);
  };
  const customCancel = () => {
    handleCustom();
  };
  const deleteRule = (dimension) => {
    setRuleList(filter(ruleList, (item) => item.field !== dimension.field));
    setDimensionList([...dimensionList, dimension]);
  };
  const onFinish = () => {
    const ruleValue = form.getFieldsValue();
    const { values: values2 = [] } = sheet.dataCfg.fields;
    const ruleValues = [];
    const currentSortParams = [];
    forEach(keys(ruleValue), (item) => {
      const { sortMethod, rule = [], sortBy: currentSortBy } = ruleValue[item];
      const current = { sortFieldId: item };
      if (rule[0] === "sortByMeasure" || rule[1]) {
        if (!includes(values2, rule[1])) {
          current.sortByMeasure = s2.TOTAL_VALUE;
        } else {
          current.sortByMeasure = rule[1];
        }
        current.sortMethod = sortMethod;
        current.query = {
          $$extra$$: rule[1]
        };
      } else if (rule[0] === "sortBy") {
        current.sortBy = currentSortBy;
      } else {
        current.sortMethod = sortMethod;
      }
      ruleValues.push(__spreadValues({ field: item }, ruleValue[item]));
      currentSortParams.push(current);
    });
    if (onSortConfirm) {
      onSortConfirm(ruleValues, currentSortParams);
    }
    handleModal();
  };
  const getDimensionList = (list) => {
    return filter(list, (item) => !find$2(sortParams, (i) => i.sortFieldId === item.field));
  };
  const getManualDimensionList = () => {
    if (dimensions) {
      return dimensions;
    }
    const { fields = {} } = sheet.dataCfg || {};
    const { rows = [], columns = [] } = fields;
    return map([...rows, ...columns], (item) => {
      return {
        field: item,
        name: sheet.dataSet.getFieldName(item),
        list: sheet.dataSet.getDimensionValues(item)
      };
    });
  };
  const getRuleOptions = () => {
    if (ruleOptions) {
      return ruleOptions;
    }
    return map(RULE_OPTIONS, (item) => {
      if (item.value === "sortByMeasure") {
        const { values: values2 } = sheet.dataCfg.fields || {};
        item.children = map(values2, (vi) => {
          return { label: sheet.dataSet.getFieldName(vi), value: vi };
        });
      }
      return item;
    });
  };
  const getRuleList = () => {
    return map(sortParams, (item) => {
      const {
        sortFieldId,
        sortMethod,
        sortBy: currentSortBy,
        sortByMeasure
      } = item;
      let rule;
      if (currentSortBy) {
        rule = ["sortBy"];
      } else if (sortByMeasure) {
        rule = ["sortByMeasure", sortByMeasure];
      } else {
        rule = ["sortMethod"];
      }
      return {
        field: sortFieldId,
        name: sheet.dataSet.getFieldName(sortFieldId),
        rule,
        sortMethod,
        sortBy: currentSortBy,
        sortByMeasure
      };
    });
  };
  const renderSider = () => {
    return /* @__PURE__ */ React__default["default"].createElement(Sider, {
      width: 120,
      className: `${ADVANCED_PRE_CLS}-sider-layout`
    }, /* @__PURE__ */ React__default["default"].createElement("div", {
      className: `${ADVANCED_PRE_CLS}-title`
    }, i18n("\u53EF\u9009\u5B57\u6BB5")), /* @__PURE__ */ React__default["default"].createElement("div", null, map(dimensionList, (item) => {
      return /* @__PURE__ */ React__default["default"].createElement("div", {
        className: `${ADVANCED_PRE_CLS}-dimension-item`,
        key: item.field,
        onClick: () => {
          handleDimension(item);
        }
      }, item.name);
    })));
  };
  const renderContent = () => {
    return /* @__PURE__ */ React__default["default"].createElement(Content, {
      className: `${ADVANCED_PRE_CLS}-content-layout`
    }, /* @__PURE__ */ React__default["default"].createElement("div", {
      className: `${ADVANCED_PRE_CLS}-title`
    }, ruleText || i18n("\u6309\u4EE5\u4E0B\u89C4\u5219\u8FDB\u884C\u6392\u5E8F\uFF08\u4F18\u5148\u7EA7\u7531\u4F4E\u5230\u9AD8\uFF09")), /* @__PURE__ */ React__default["default"].createElement(antd.Form, {
      form,
      name: "form",
      className: `${ADVANCED_PRE_CLS}-custom-form`
    }, map(ruleList, (item) => {
      const {
        field,
        name: name2,
        rule,
        sortMethod,
        sortBy: currentSortBy
      } = item || {};
      return /* @__PURE__ */ React__default["default"].createElement(antd.Form.Item, {
        name: field,
        key: field
      }, /* @__PURE__ */ React__default["default"].createElement(antd.Form.Item, {
        name: [field, "name"],
        initialValue: name2,
        noStyle: true
      }, /* @__PURE__ */ React__default["default"].createElement(antd.Select, {
        className: `${ADVANCED_PRE_CLS}-select`,
        size: "small"
      })), /* @__PURE__ */ React__default["default"].createElement("span", {
        className: `${ADVANCED_PRE_CLS}-field-prefix`
      }, i18n("\u6309")), /* @__PURE__ */ React__default["default"].createElement(antd.Form.Item, {
        name: [field, "rule"],
        initialValue: rule || ["sortMethod"],
        noStyle: true
      }, /* @__PURE__ */ React__default["default"].createElement(antd.Cascader, {
        options: rules,
        expandTrigger: "hover",
        size: "small",
        allowClear: false
      })), /* @__PURE__ */ React__default["default"].createElement(antd.Form.Item, {
        shouldUpdate: true,
        noStyle: true
      }, ({ getFieldValue }) => {
        return !isEqual$3(getFieldValue([field, "rule"]), [
          "sortBy"
        ]) ? /* @__PURE__ */ React__default["default"].createElement(antd.Form.Item, {
          shouldUpdate: true,
          noStyle: true,
          name: [field, "sortMethod"],
          initialValue: toUpper(sortMethod) || "ASC"
        }, /* @__PURE__ */ React__default["default"].createElement(antd.Radio.Group, {
          className: `${ADVANCED_PRE_CLS}-rule-end`
        }, map(SORT_METHOD, (i) => {
          return /* @__PURE__ */ React__default["default"].createElement(antd.Radio, {
            value: i.value,
            key: i.value
          }, i.name);
        }))) : /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, /* @__PURE__ */ React__default["default"].createElement("a", {
          className: `${ADVANCED_PRE_CLS}-rule-end`,
          onClick: () => {
            handleCustomSort(item, currentSortBy);
          }
        }, i18n("\u8BBE\u7F6E\u987A\u5E8F")), /* @__PURE__ */ React__default["default"].createElement(antd.Form.Item, {
          noStyle: true,
          name: [field, "sortBy"],
          initialValue: currentSortBy
        }));
      }), /* @__PURE__ */ React__default["default"].createElement(icons.DeleteOutlined, {
        className: `${ADVANCED_PRE_CLS}-rule-end-delete`,
        onClick: () => {
          deleteRule(item);
        }
      }));
    })));
  };
  React.useEffect(() => {
    if (isSortVisible) {
      const initRuleList = getRuleList();
      const manualDimensions = getManualDimensionList();
      const initDimensionList = getDimensionList(manualDimensions);
      const initRuleOptions = getRuleOptions();
      setRuleList(initRuleList);
      setManualDimensionList(manualDimensions);
      setDimensionList(initDimensionList);
      setRules(initRuleOptions);
    }
  }, [isSortVisible]);
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    className: cx(ADVANCED_PRE_CLS, className)
  }, /* @__PURE__ */ React__default["default"].createElement(antd.Button, {
    onClick: sortClick,
    icon: icon2 || /* @__PURE__ */ React__default["default"].createElement(SortIcon, null),
    size: "small",
    className: `${ADVANCED_PRE_CLS}-btn`
  }, text || i18n("\u9AD8\u7EA7\u6392\u5E8F")), /* @__PURE__ */ React__default["default"].createElement(antd.Modal, {
    title: text || i18n("\u9AD8\u7EA7\u6392\u5E8F"),
    visible: isSortVisible,
    onOk: onFinish,
    onCancel: handleModal,
    okText: i18n("\u786E\u5B9A"),
    cancelText: i18n("\u53D6\u6D88"),
    destroyOnClose: true,
    className: `${ADVANCED_PRE_CLS}-modal`
  }, /* @__PURE__ */ React__default["default"].createElement(antd.Layout, null, renderSider(), renderContent())), /* @__PURE__ */ React__default["default"].createElement(antd.Modal, {
    title: i18n("\u624B\u52A8\u6392\u5E8F"),
    visible: isCustomVisible,
    onOk: customSort,
    onCancel: customCancel,
    okText: i18n("\u786E\u5B9A"),
    cancelText: i18n("\u53D6\u6D88"),
    destroyOnClose: true,
    className: `${ADVANCED_PRE_CLS}-custom-modal`
  }, /* @__PURE__ */ React__default["default"].createElement(CustomSort, {
    splitOrders: sortBy,
    setSplitOrders: setSortBy
  })));
};
const SWITCHER_PREFIX_CLS = "switcher";
var FieldType = /* @__PURE__ */ ((FieldType2) => {
  FieldType2["Rows"] = "rows";
  FieldType2["Cols"] = "columns";
  FieldType2["Values"] = "values";
  return FieldType2;
})(FieldType || {});
const SWITCHER_FIELDS = [
  "rows",
  "columns",
  "values"
];
const SWITCHER_CONFIG = {
  ["rows"]: {
    text: i18n("\u884C\u5934"),
    icon: RowIcon,
    droppableType: "dimension"
  },
  ["columns"]: {
    text: i18n("\u5217\u5934"),
    icon: ColIcon,
    droppableType: "dimension"
  },
  ["values"]: {
    text: i18n("\u503C"),
    icon: ValueIcon,
    droppableType: "measure"
  }
};
const MAX_DIMENSION_COUNT = 3;
const getSwitcherFieldCfg = (sheet, fieldKey) => {
  const selectable = sheet instanceof s2.PivotSheet && fieldKey === FieldType.Values || sheet instanceof s2.TableSheet && fieldKey === FieldType.Cols;
  const expandable = sheet instanceof s2.PivotSheet && fieldKey === FieldType.Values;
  return { selectable, expandable };
};
const generateSwitcherFields = (sheet, { fields = {}, meta = [] } = {}, hiddenColumnFields = []) => {
  return SWITCHER_FIELDS.reduce((config2, fieldKey) => {
    const values2 = fields[fieldKey];
    if (isEmpty(values2)) {
      return config2;
    }
    const items = map(values2, (id) => {
      const target = find$2(meta, ["field", id]);
      return {
        id,
        displayName: target == null ? void 0 : target.name,
        checked: !hiddenColumnFields.includes(id)
      };
    });
    config2[fieldKey] = __spreadValues({ items }, getSwitcherFieldCfg(sheet, fieldKey));
    return config2;
  }, {});
};
const generateSheetConfig = (sheet, result) => {
  const isTableSheet = sheet instanceof s2.TableSheet;
  const fields = SWITCHER_FIELDS.reduce((fields2, fieldKey) => {
    var _a, _b, _c, _d;
    const items = (_b = (_a = result[fieldKey]) == null ? void 0 : _a.items) != null ? _b : [];
    const hideItems = (_d = (_c = result[fieldKey]) == null ? void 0 : _c.hideItems) != null ? _d : [];
    fields2[fieldKey] = filter(items, (item) => !hideItems.find((hide) => !isTableSheet && hide.id === item.id)).map((i) => i.id);
    return fields2;
  }, {});
  const hiddenColumnFields = isTableSheet ? result[FieldType.Cols].hideItems.map((i) => i.id) : void 0;
  return { fields, hiddenColumnFields };
};
const getSwitcherFields = (result) => {
  return reduce(result, (cfg, value2, field) => {
    cfg.fields[field] = map(value2.items, "id");
    cfg.hiddenFields.push(...map(value2.hideItems, "id"));
    return cfg;
  }, {
    fields: {},
    hiddenFields: []
  });
};
const generateSwitcherFieldsCfgFromResult = (sheet, result, meta = [], hiddenColumnFields = []) => {
  const { fields, hiddenFields } = getSwitcherFields(result);
  return generateSwitcherFields(sheet, { fields, meta }, hiddenFields.concat(hiddenColumnFields));
};
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _defineProperty(obj, key, value2) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value2,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value2;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
}
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function createStore$1(reducer2, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1));
    }
    return enhancer(createStore$1)(reducer2, preloadedState);
  }
  if (typeof reducer2 !== "function") {
    throw new Error(formatProdErrorMessage(2));
  }
  var currentReducer = reducer2;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3));
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5));
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index2 = nextListeners.indexOf(listener);
      nextListeners.splice(index2, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(formatProdErrorMessage(7));
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage(8));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage(11));
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
function bindActionCreator(actionCreator, dispatch) {
  return function() {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
function bindActionCreators$1(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }
  if (typeof actionCreators !== "object" || actionCreators === null) {
    throw new Error(formatProdErrorMessage(16));
  }
  var boundActionCreators = {};
  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a, b2) {
    return function() {
      return a(b2.apply(void 0, arguments));
    };
  });
}
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }
  return function(createStore2) {
    return function() {
      var store = createStore2.apply(void 0, arguments);
      var _dispatch = function dispatch() {
        throw new Error(formatProdErrorMessage(15));
      };
      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function(middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2(_objectSpread2({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}
var ReactReduxContext = /* @__PURE__ */ React__default["default"].createContext(null);
function defaultNoopBatch(callback) {
  callback();
}
var batch = defaultNoopBatch;
var setBatch = function setBatch2(newBatch) {
  return batch = newBatch;
};
var getBatch = function getBatch2() {
  return batch;
};
function createListenerCollection() {
  var batch2 = getBatch();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify2() {
      batch2(function() {
        var listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get3() {
      var listeners = [];
      var listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
var nullListeners = {
  notify: function notify() {
  },
  get: function get2() {
    return [];
  }
};
function createSubscription(store, parentSub) {
  var unsubscribe;
  var listeners = nullListeners;
  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return Boolean(unsubscribe);
  }
  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  var subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: function getListeners() {
      return listeners;
    }
  };
  return subscription;
}
var useIsomorphicLayoutEffect$1 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? React.useLayoutEffect : React.useEffect;
function Provider(_ref) {
  var store = _ref.store, context = _ref.context, children = _ref.children;
  var contextValue = React.useMemo(function() {
    var subscription = createSubscription(store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store,
      subscription
    };
  }, [store]);
  var previousState = React.useMemo(function() {
    return store.getState();
  }, [store]);
  useIsomorphicLayoutEffect$1(function() {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();
    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }
    return function() {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || ReactReduxContext;
  return /* @__PURE__ */ React__default["default"].createElement(Context.Provider, {
    value: contextValue
  }, children);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var reactIs$2 = { exports: {} };
var reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = typeof Symbol === "function" && Symbol.for, c$1 = b$1 ? Symbol.for("react.element") : 60103, d$1 = b$1 ? Symbol.for("react.portal") : 60106, e$1 = b$1 ? Symbol.for("react.fragment") : 60107, f$1 = b$1 ? Symbol.for("react.strict_mode") : 60108, g$1 = b$1 ? Symbol.for("react.profiler") : 60114, h$1 = b$1 ? Symbol.for("react.provider") : 60109, k$1 = b$1 ? Symbol.for("react.context") : 60110, l$1 = b$1 ? Symbol.for("react.async_mode") : 60111, m$1 = b$1 ? Symbol.for("react.concurrent_mode") : 60111, n$1 = b$1 ? Symbol.for("react.forward_ref") : 60112, p$1 = b$1 ? Symbol.for("react.suspense") : 60113, q$1 = b$1 ? Symbol.for("react.suspense_list") : 60120, r$1 = b$1 ? Symbol.for("react.memo") : 60115, t = b$1 ? Symbol.for("react.lazy") : 60116, v$1 = b$1 ? Symbol.for("react.block") : 60121, w$1 = b$1 ? Symbol.for("react.fundamental") : 60117, x$1 = b$1 ? Symbol.for("react.responder") : 60118, y$1 = b$1 ? Symbol.for("react.scope") : 60119;
function z$1(a) {
  if (typeof a === "object" && a !== null) {
    var u2 = a.$$typeof;
    switch (u2) {
      case c$1:
        switch (a = a.type, a) {
          case l$1:
          case m$1:
          case e$1:
          case g$1:
          case f$1:
          case p$1:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k$1:
              case n$1:
              case t:
              case r$1:
              case h$1:
                return a;
              default:
                return u2;
            }
        }
      case d$1:
        return u2;
    }
  }
}
function A$1(a) {
  return z$1(a) === m$1;
}
reactIs_production_min$1.AsyncMode = l$1;
reactIs_production_min$1.ConcurrentMode = m$1;
reactIs_production_min$1.ContextConsumer = k$1;
reactIs_production_min$1.ContextProvider = h$1;
reactIs_production_min$1.Element = c$1;
reactIs_production_min$1.ForwardRef = n$1;
reactIs_production_min$1.Fragment = e$1;
reactIs_production_min$1.Lazy = t;
reactIs_production_min$1.Memo = r$1;
reactIs_production_min$1.Portal = d$1;
reactIs_production_min$1.Profiler = g$1;
reactIs_production_min$1.StrictMode = f$1;
reactIs_production_min$1.Suspense = p$1;
reactIs_production_min$1.isAsyncMode = function(a) {
  return A$1(a) || z$1(a) === l$1;
};
reactIs_production_min$1.isConcurrentMode = A$1;
reactIs_production_min$1.isContextConsumer = function(a) {
  return z$1(a) === k$1;
};
reactIs_production_min$1.isContextProvider = function(a) {
  return z$1(a) === h$1;
};
reactIs_production_min$1.isElement = function(a) {
  return typeof a === "object" && a !== null && a.$$typeof === c$1;
};
reactIs_production_min$1.isForwardRef = function(a) {
  return z$1(a) === n$1;
};
reactIs_production_min$1.isFragment = function(a) {
  return z$1(a) === e$1;
};
reactIs_production_min$1.isLazy = function(a) {
  return z$1(a) === t;
};
reactIs_production_min$1.isMemo = function(a) {
  return z$1(a) === r$1;
};
reactIs_production_min$1.isPortal = function(a) {
  return z$1(a) === d$1;
};
reactIs_production_min$1.isProfiler = function(a) {
  return z$1(a) === g$1;
};
reactIs_production_min$1.isStrictMode = function(a) {
  return z$1(a) === f$1;
};
reactIs_production_min$1.isSuspense = function(a) {
  return z$1(a) === p$1;
};
reactIs_production_min$1.isValidElementType = function(a) {
  return typeof a === "string" || typeof a === "function" || a === e$1 || a === m$1 || a === g$1 || a === f$1 || a === p$1 || a === q$1 || typeof a === "object" && a !== null && (a.$$typeof === t || a.$$typeof === r$1 || a.$$typeof === h$1 || a.$$typeof === k$1 || a.$$typeof === n$1 || a.$$typeof === w$1 || a.$$typeof === x$1 || a.$$typeof === y$1 || a.$$typeof === v$1);
};
reactIs_production_min$1.typeOf = z$1;
{
  reactIs$2.exports = reactIs_production_min$1;
}
var reactIs$1 = reactIs$2.exports;
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;
function getStatics(component) {
  if (reactIs$1.isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys2 = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys2 = keys2.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys2.length; ++i) {
      var key = keys2[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e2) {
        }
      }
    }
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;
var reactIs = { exports: {} };
var reactIs_production_min = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = 60103, c = 60106, d = 60107, e = 60108, f = 60114, g = 60109, h = 60110, k = 60112, l = 60113, m = 60120, n = 60115, p = 60116, q = 60121, r = 60122, u = 60117, v = 60129, w = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  var x = Symbol.for;
  b = x("react.element");
  c = x("react.portal");
  d = x("react.fragment");
  e = x("react.strict_mode");
  f = x("react.profiler");
  g = x("react.provider");
  h = x("react.context");
  k = x("react.forward_ref");
  l = x("react.suspense");
  m = x("react.suspense_list");
  n = x("react.memo");
  p = x("react.lazy");
  q = x("react.block");
  r = x("react.server.block");
  u = x("react.fundamental");
  v = x("react.debug_trace_mode");
  w = x("react.legacy_hidden");
}
function y(a) {
  if (typeof a === "object" && a !== null) {
    var t2 = a.$$typeof;
    switch (t2) {
      case b:
        switch (a = a.type, a) {
          case d:
          case f:
          case e:
          case l:
          case m:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case h:
              case k:
              case p:
              case n:
              case g:
                return a;
              default:
                return t2;
            }
        }
      case c:
        return t2;
    }
  }
}
var z = g, A = b, B = k, C = d, D = p, E = n, F = c, G = f, H = e, I = l;
reactIs_production_min.ContextConsumer = h;
reactIs_production_min.ContextProvider = z;
reactIs_production_min.Element = A;
reactIs_production_min.ForwardRef = B;
reactIs_production_min.Fragment = C;
reactIs_production_min.Lazy = D;
reactIs_production_min.Memo = E;
reactIs_production_min.Portal = F;
reactIs_production_min.Profiler = G;
reactIs_production_min.StrictMode = H;
reactIs_production_min.Suspense = I;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a) {
  return y(a) === h;
};
reactIs_production_min.isContextProvider = function(a) {
  return y(a) === g;
};
reactIs_production_min.isElement = function(a) {
  return typeof a === "object" && a !== null && a.$$typeof === b;
};
reactIs_production_min.isForwardRef = function(a) {
  return y(a) === k;
};
reactIs_production_min.isFragment = function(a) {
  return y(a) === d;
};
reactIs_production_min.isLazy = function(a) {
  return y(a) === p;
};
reactIs_production_min.isMemo = function(a) {
  return y(a) === n;
};
reactIs_production_min.isPortal = function(a) {
  return y(a) === c;
};
reactIs_production_min.isProfiler = function(a) {
  return y(a) === f;
};
reactIs_production_min.isStrictMode = function(a) {
  return y(a) === e;
};
reactIs_production_min.isSuspense = function(a) {
  return y(a) === l;
};
reactIs_production_min.isValidElementType = function(a) {
  return typeof a === "string" || typeof a === "function" || a === d || a === f || a === v || a === e || a === l || a === m || a === w || typeof a === "object" && a !== null && (a.$$typeof === p || a.$$typeof === n || a.$$typeof === g || a.$$typeof === h || a.$$typeof === k || a.$$typeof === u || a.$$typeof === q || a[0] === r) ? true : false;
};
reactIs_production_min.typeOf = y;
{
  reactIs.exports = reactIs_production_min;
}
var _excluded$2 = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"], _excluded2 = ["reactReduxForwardedRef"];
var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];
function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect$1(function() {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}
function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false;
  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}
function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  if (!shouldHandleStateChanges)
    return;
  var didUnsubscribe = false;
  var lastThrownError = null;
  var checkForUpdates = function checkForUpdates2() {
    if (didUnsubscribe) {
      return;
    }
    var latestStoreState = store.getState();
    var newChildProps, error;
    try {
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e2) {
      error = e2;
      lastThrownError = e2;
    }
    if (!error) {
      lastThrownError = null;
    }
    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true;
      forceComponentUpdateDispatch({
        type: "STORE_UPDATED",
        payload: {
          error
        }
      });
    }
  };
  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe();
  checkForUpdates();
  var unsubscribeWrapper = function unsubscribeWrapper2() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;
    if (lastThrownError) {
      throw lastThrownError;
    }
  };
  return unsubscribeWrapper;
}
var initStateUpdates = function initStateUpdates2() {
  return [null, 0];
};
function connectAdvanced(selectorFactory, _ref) {
  if (_ref === void 0) {
    _ref = {};
  }
  var _ref2 = _ref, _ref2$getDisplayName = _ref2.getDisplayName, getDisplayName = _ref2$getDisplayName === void 0 ? function(name2) {
    return "ConnectAdvanced(" + name2 + ")";
  } : _ref2$getDisplayName, _ref2$methodName = _ref2.methodName, methodName = _ref2$methodName === void 0 ? "connectAdvanced" : _ref2$methodName, _ref2$renderCountProp = _ref2.renderCountProp, renderCountProp = _ref2$renderCountProp === void 0 ? void 0 : _ref2$renderCountProp, _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges, shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta, _ref2$storeKey = _ref2.storeKey, storeKey = _ref2$storeKey === void 0 ? "store" : _ref2$storeKey;
  _ref2.withRef;
  var _ref2$forwardRef = _ref2.forwardRef, forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef, _ref2$context = _ref2.context, context = _ref2$context === void 0 ? ReactReduxContext : _ref2$context, connectOptions = _objectWithoutPropertiesLoose(_ref2, _excluded$2);
  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
    var displayName = getDisplayName(wrappedComponentName);
    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName,
      methodName,
      renderCountProp,
      shouldHandleStateChanges,
      storeKey,
      displayName,
      wrappedComponentName,
      WrappedComponent
    });
    var pure = connectOptions.pure;
    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    }
    var usePureOnlyMemo = pure ? React.useMemo : function(callback) {
      return callback();
    };
    function ConnectFunction(props) {
      var _useMemo = React.useMemo(function() {
        var reactReduxForwardedRef2 = props.reactReduxForwardedRef, wrapperProps2 = _objectWithoutPropertiesLoose(props, _excluded2);
        return [props.context, reactReduxForwardedRef2, wrapperProps2];
      }, [props]), propsContext = _useMemo[0], reactReduxForwardedRef = _useMemo[1], wrapperProps = _useMemo[2];
      var ContextToUse = React.useMemo(function() {
        return propsContext && propsContext.Consumer && reactIs.exports.isContextConsumer(/* @__PURE__ */ React__default["default"].createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]);
      var contextValue = React.useContext(ContextToUse);
      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      Boolean(contextValue) && Boolean(contextValue.store);
      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = React.useMemo(function() {
        return createChildSelector(store);
      }, [store]);
      var _useMemo2 = React.useMemo(function() {
        if (!shouldHandleStateChanges)
          return NO_SUBSCRIPTION_ARRAY;
        var subscription2 = createSubscription(store, didStoreComeFromProps ? null : contextValue.subscription);
        var notifyNestedSubs2 = subscription2.notifyNestedSubs.bind(subscription2);
        return [subscription2, notifyNestedSubs2];
      }, [store, didStoreComeFromProps, contextValue]), subscription = _useMemo2[0], notifyNestedSubs = _useMemo2[1];
      var overriddenContextValue = React.useMemo(function() {
        if (didStoreComeFromProps) {
          return contextValue;
        }
        return _extends({}, contextValue, {
          subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]);
      var _useReducer = React.useReducer(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates), _useReducer$ = _useReducer[0], previousStateUpdateResult = _useReducer$[0], forceComponentUpdateDispatch = _useReducer[1];
      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      }
      var lastChildProps = React.useRef();
      var lastWrapperProps = React.useRef(wrapperProps);
      var childPropsFromStoreUpdate = React.useRef();
      var renderIsScheduled = React.useRef(false);
      var actualChildProps = usePureOnlyMemo(function() {
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        }
        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]);
      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]);
      var renderedWrappedComponent = React.useMemo(function() {
        return /* @__PURE__ */ React__default["default"].createElement(WrappedComponent, _extends({}, actualChildProps, {
          ref: reactReduxForwardedRef
        }));
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]);
      var renderedChild = React.useMemo(function() {
        if (shouldHandleStateChanges) {
          return /* @__PURE__ */ React__default["default"].createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }
        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }
    var Connect = pure ? React__default["default"].memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;
    if (forwardRef) {
      var forwarded = React__default["default"].forwardRef(function forwardConnectRef(props, ref) {
        return /* @__PURE__ */ React__default["default"].createElement(Connect, _extends({}, props, {
          reactReduxForwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoistNonReactStatics_cjs(forwarded, WrappedComponent);
    }
    return hoistNonReactStatics_cjs(Connect, WrappedComponent);
  };
}
function is(x2, y2) {
  if (x2 === y2) {
    return x2 !== 0 || y2 !== 0 || 1 / x2 === 1 / y2;
  } else {
    return x2 !== x2 && y2 !== y2;
  }
}
function shallowEqual(objA, objB) {
  if (is(objA, objB))
    return true;
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length)
    return false;
  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}
function bindActionCreators(actionCreators, dispatch) {
  var boundActionCreators = {};
  var _loop = function _loop2(key2) {
    var actionCreator = actionCreators[key2];
    if (typeof actionCreator === "function") {
      boundActionCreators[key2] = function() {
        return dispatch(actionCreator.apply(void 0, arguments));
      };
    }
  };
  for (var key in actionCreators) {
    _loop(key);
  }
  return boundActionCreators;
}
function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);
    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== void 0 ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    _ref.displayName;
    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };
    proxy.dependsOnOwnProps = true;
    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);
      if (typeof props === "function") {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }
      return props;
    };
    return proxy;
  };
}
function whenMapDispatchToPropsIsFunction(mapDispatchToProps2) {
  return typeof mapDispatchToProps2 === "function" ? wrapMapToPropsFunc(mapDispatchToProps2) : void 0;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps2) {
  return !mapDispatchToProps2 ? wrapMapToPropsConstant(function(dispatch) {
    return {
      dispatch
    };
  }) : void 0;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps2) {
  return mapDispatchToProps2 && typeof mapDispatchToProps2 === "object" ? wrapMapToPropsConstant(function(dispatch) {
    return bindActionCreators(mapDispatchToProps2, dispatch);
  }) : void 0;
}
var defaultMapDispatchToPropsFactories = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];
function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === "function" ? wrapMapToPropsFunc(mapStateToProps) : void 0;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function() {
    return {};
  }) : void 0;
}
var defaultMapStateToPropsFactories = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];
function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    _ref.displayName;
    var pure = _ref.pure, areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps))
          mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
      }
      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === "function" ? wrapMergePropsFunc(mergeProps) : void 0;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function() {
    return defaultMergeProps;
  } : void 0;
}
var defaultMergePropsFactories = [whenMergePropsIsFunction, whenMergePropsIsOmitted];
var _excluded$1 = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps2, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps2(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps2, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual, areOwnPropsEqual = _ref.areOwnPropsEqual, areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;
  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps2(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }
  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps2.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps2(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps)
      stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps2.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps2(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged)
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged)
      return handleNewPropsAndNewState();
    if (propsChanged)
      return handleNewProps();
    if (stateChanged)
      return handleNewState();
    return mergedProps;
  }
  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}
function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps, initMapDispatchToProps = _ref2.initMapDispatchToProps, initMergeProps = _ref2.initMergeProps, options = _objectWithoutPropertiesLoose(_ref2, _excluded$1);
  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps2 = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);
  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps2, mergeProps, dispatch, options);
}
var _excluded = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];
function match(arg, factories, name2) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result)
      return result;
  }
  return function(dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name2 + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}
function strictEqual(a, b2) {
  return a === b2;
}
function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp, _ref$connectHOC = _ref.connectHOC, connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC, _ref$mapStateToPropsF = _ref.mapStateToPropsFactories, mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? defaultMapStateToPropsFactories : _ref$mapStateToPropsF, _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories, mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? defaultMapDispatchToPropsFactories : _ref$mapDispatchToPro, _ref$mergePropsFactor = _ref.mergePropsFactories, mergePropsFactories = _ref$mergePropsFactor === void 0 ? defaultMergePropsFactories : _ref$mergePropsFactor, _ref$selectorFactory = _ref.selectorFactory, selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;
  return function connect2(mapStateToProps, mapDispatchToProps2, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }
    var _ref3 = _ref2, _ref3$pure = _ref3.pure, pure = _ref3$pure === void 0 ? true : _ref3$pure, _ref3$areStatesEqual = _ref3.areStatesEqual, areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual, _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual, areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua, _ref3$areStatePropsEq = _ref3.areStatePropsEqual, areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq, _ref3$areMergedPropsE = _ref3.areMergedPropsEqual, areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE, extraOptions = _objectWithoutPropertiesLoose(_ref3, _excluded);
    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, "mapStateToProps");
    var initMapDispatchToProps = match(mapDispatchToProps2, mapDispatchToPropsFactories, "mapDispatchToProps");
    var initMergeProps = match(mergeProps, mergePropsFactories, "mergeProps");
    return connectHOC(selectorFactory, _extends({
      methodName: "connect",
      getDisplayName: function getDisplayName(name2) {
        return "Connect(" + name2 + ")";
      },
      shouldHandleStateChanges: Boolean(mapStateToProps),
      initMapStateToProps,
      initMapDispatchToProps,
      initMergeProps,
      pure,
      areStatesEqual,
      areOwnPropsEqual,
      areStatePropsEqual,
      areMergedPropsEqual
    }, extraOptions));
  };
}
var connect = /* @__PURE__ */ createConnect();
setBatch(ReactDOM.unstable_batchedUpdates);
function areInputsEqual$1(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }
  return true;
}
function useMemoOne(getResult, inputs) {
  var initial = React.useState(function() {
    return {
      inputs,
      result: getResult()
    };
  })[0];
  var isFirstRun = React.useRef(true);
  var committed = React.useRef(initial);
  var useCache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual$1(inputs, committed.current.inputs));
  var cache = useCache ? committed.current : {
    inputs,
    result: getResult()
  };
  React.useEffect(function() {
    isFirstRun.current = false;
    committed.current = cache;
  }, [cache]);
  return cache.result;
}
function useCallbackOne(callback, inputs) {
  return useMemoOne(function() {
    return callback;
  }, inputs);
}
var useMemo = useMemoOne;
var useCallback = useCallbackOne;
var isProduction = true;
var prefix$2 = "Invariant failed";
function invariant$1(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix$2);
  }
  var provided = typeof message === "function" ? message() : message;
  var value2 = provided ? prefix$2 + ": " + provided : prefix$2;
  throw new Error(value2);
}
var getRect = function getRect2(_ref) {
  var top = _ref.top, right = _ref.right, bottom = _ref.bottom, left = _ref.left;
  var width = right - left;
  var height = bottom - top;
  var rect = {
    top,
    right,
    bottom,
    left,
    width,
    height,
    x: left,
    y: top,
    center: {
      x: (right + left) / 2,
      y: (bottom + top) / 2
    }
  };
  return rect;
};
var expand = function expand2(target, expandBy) {
  return {
    top: target.top - expandBy.top,
    left: target.left - expandBy.left,
    bottom: target.bottom + expandBy.bottom,
    right: target.right + expandBy.right
  };
};
var shrink = function shrink2(target, shrinkBy) {
  return {
    top: target.top + shrinkBy.top,
    left: target.left + shrinkBy.left,
    bottom: target.bottom - shrinkBy.bottom,
    right: target.right - shrinkBy.right
  };
};
var shift = function shift2(target, shiftBy) {
  return {
    top: target.top + shiftBy.y,
    left: target.left + shiftBy.x,
    bottom: target.bottom + shiftBy.y,
    right: target.right + shiftBy.x
  };
};
var noSpacing$1 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var createBox = function createBox2(_ref2) {
  var borderBox = _ref2.borderBox, _ref2$margin = _ref2.margin, margin = _ref2$margin === void 0 ? noSpacing$1 : _ref2$margin, _ref2$border = _ref2.border, border = _ref2$border === void 0 ? noSpacing$1 : _ref2$border, _ref2$padding = _ref2.padding, padding = _ref2$padding === void 0 ? noSpacing$1 : _ref2$padding;
  var marginBox = getRect(expand(borderBox, margin));
  var paddingBox = getRect(shrink(borderBox, border));
  var contentBox = getRect(shrink(paddingBox, padding));
  return {
    marginBox,
    borderBox: getRect(borderBox),
    paddingBox,
    contentBox,
    margin,
    border,
    padding
  };
};
var parse = function parse2(raw) {
  var value2 = raw.slice(0, -2);
  var suffix = raw.slice(-2);
  if (suffix !== "px") {
    return 0;
  }
  var result = Number(value2);
  !!isNaN(result) ? invariant$1(false) : void 0;
  return result;
};
var getWindowScroll$1 = function getWindowScroll2() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};
var offset = function offset2(original, change) {
  var borderBox = original.borderBox, border = original.border, margin = original.margin, padding = original.padding;
  var shifted = shift(borderBox, change);
  return createBox({
    borderBox: shifted,
    border,
    margin,
    padding
  });
};
var withScroll = function withScroll2(original, scroll3) {
  if (scroll3 === void 0) {
    scroll3 = getWindowScroll$1();
  }
  return offset(original, scroll3);
};
var calculateBox = function calculateBox2(borderBox, styles2) {
  var margin = {
    top: parse(styles2.marginTop),
    right: parse(styles2.marginRight),
    bottom: parse(styles2.marginBottom),
    left: parse(styles2.marginLeft)
  };
  var padding = {
    top: parse(styles2.paddingTop),
    right: parse(styles2.paddingRight),
    bottom: parse(styles2.paddingBottom),
    left: parse(styles2.paddingLeft)
  };
  var border = {
    top: parse(styles2.borderTopWidth),
    right: parse(styles2.borderRightWidth),
    bottom: parse(styles2.borderBottomWidth),
    left: parse(styles2.borderLeftWidth)
  };
  return createBox({
    borderBox,
    margin,
    padding,
    border
  });
};
var getBox = function getBox2(el) {
  var borderBox = el.getBoundingClientRect();
  var styles2 = window.getComputedStyle(el);
  return calculateBox(borderBox, styles2);
};
var safeIsNaN = Number.isNaN || function ponyfill(value2) {
  return typeof value2 === "number" && value2 !== value2;
};
function isEqual$2(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual$2(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual4) {
  if (isEqual4 === void 0) {
    isEqual4 = areInputsEqual;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual4(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
var rafSchd = function rafSchd2(fn) {
  var lastArgs = [];
  var frameId = null;
  var wrapperFn = function wrapperFn2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    lastArgs = args;
    if (frameId) {
      return;
    }
    frameId = requestAnimationFrame(function() {
      frameId = null;
      fn.apply(void 0, lastArgs);
    });
  };
  wrapperFn.cancel = function() {
    if (!frameId) {
      return;
    }
    cancelAnimationFrame(frameId);
    frameId = null;
  };
  return wrapperFn;
};
var rafSchd$1 = rafSchd;
function log(type, message) {
  {
    return;
  }
}
log.bind(null, "warn");
log.bind(null, "error");
function noop() {
}
function getOptions(shared, fromBinding) {
  return _extends({}, shared, {}, fromBinding);
}
function bindEvents(el, bindings, sharedOptions) {
  var unbindings = bindings.map(function(binding) {
    var options = getOptions(sharedOptions, binding.options);
    el.addEventListener(binding.eventName, binding.fn, options);
    return function unbind() {
      el.removeEventListener(binding.eventName, binding.fn, options);
    };
  });
  return function unbindAll() {
    unbindings.forEach(function(unbind) {
      unbind();
    });
  };
}
var prefix = "Invariant failed";
function RbdInvariant(message) {
  this.message = message;
}
RbdInvariant.prototype.toString = function toString2() {
  return this.message;
};
function invariant(condition, message) {
  if (condition) {
    return;
  }
  {
    throw new RbdInvariant(prefix);
  }
}
var ErrorBoundary = function(_React$Component) {
  _inheritsLoose(ErrorBoundary2, _React$Component);
  function ErrorBoundary2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.callbacks = null;
    _this.unbind = noop;
    _this.onWindowError = function(event) {
      var callbacks = _this.getCallbacks();
      if (callbacks.isDragging()) {
        callbacks.tryAbort();
      }
      var err = event.error;
      if (err instanceof RbdInvariant) {
        event.preventDefault();
      }
    };
    _this.getCallbacks = function() {
      if (!_this.callbacks) {
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      }
      return _this.callbacks;
    };
    _this.setCallbacks = function(callbacks) {
      _this.callbacks = callbacks;
    };
    return _this;
  }
  var _proto = ErrorBoundary2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.unbind = bindEvents(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  };
  _proto.componentDidCatch = function componentDidCatch(err) {
    if (err instanceof RbdInvariant) {
      this.setState({});
      return;
    }
    throw err;
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unbind();
  };
  _proto.render = function render() {
    return this.props.children(this.setCallbacks);
  };
  return ErrorBoundary2;
}(React__default["default"].Component);
var dragHandleUsageInstructions = "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n";
var position = function position2(index2) {
  return index2 + 1;
};
var onDragStart = function onDragStart2(start) {
  return "\n  You have lifted an item in position " + position(start.source.index) + "\n";
};
var withLocation = function withLocation2(source, destination) {
  var isInHomeList = source.droppableId === destination.droppableId;
  var startPosition = position(source.index);
  var endPosition = position(destination.index);
  if (isInHomeList) {
    return "\n      You have moved the item from position " + startPosition + "\n      to position " + endPosition + "\n    ";
  }
  return "\n    You have moved the item from position " + startPosition + "\n    in list " + source.droppableId + "\n    to list " + destination.droppableId + "\n    in position " + endPosition + "\n  ";
};
var withCombine = function withCombine2(id, source, combine2) {
  var inHomeList = source.droppableId === combine2.droppableId;
  if (inHomeList) {
    return "\n      The item " + id + "\n      has been combined with " + combine2.draggableId;
  }
  return "\n      The item " + id + "\n      in list " + source.droppableId + "\n      has been combined with " + combine2.draggableId + "\n      in list " + combine2.droppableId + "\n    ";
};
var onDragUpdate = function onDragUpdate2(update2) {
  var location = update2.destination;
  if (location) {
    return withLocation(update2.source, location);
  }
  var combine2 = update2.combine;
  if (combine2) {
    return withCombine(update2.draggableId, update2.source, combine2);
  }
  return "You are over an area that cannot be dropped on";
};
var returnedToStart = function returnedToStart2(source) {
  return "\n  The item has returned to its starting position\n  of " + position(source.index) + "\n";
};
var onDragEnd = function onDragEnd2(result) {
  if (result.reason === "CANCEL") {
    return "\n      Movement cancelled.\n      " + returnedToStart(result.source) + "\n    ";
  }
  var location = result.destination;
  var combine2 = result.combine;
  if (location) {
    return "\n      You have dropped the item.\n      " + withLocation(result.source, location) + "\n    ";
  }
  if (combine2) {
    return "\n      You have dropped the item.\n      " + withCombine(result.draggableId, result.source, combine2) + "\n    ";
  }
  return "\n    The item has been dropped while not over a drop area.\n    " + returnedToStart(result.source) + "\n  ";
};
var preset = {
  dragHandleUsageInstructions,
  onDragStart,
  onDragUpdate,
  onDragEnd
};
var origin = {
  x: 0,
  y: 0
};
var add = function add2(point1, point2) {
  return {
    x: point1.x + point2.x,
    y: point1.y + point2.y
  };
};
var subtract = function subtract2(point1, point2) {
  return {
    x: point1.x - point2.x,
    y: point1.y - point2.y
  };
};
var isEqual = function isEqual2(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};
var negate = function negate2(point) {
  return {
    x: point.x !== 0 ? -point.x : 0,
    y: point.y !== 0 ? -point.y : 0
  };
};
var patch = function patch2(line, value2, otherValue) {
  var _ref;
  if (otherValue === void 0) {
    otherValue = 0;
  }
  return _ref = {}, _ref[line] = value2, _ref[line === "x" ? "y" : "x"] = otherValue, _ref;
};
var distance = function distance2(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};
var closest = function closest2(target, points) {
  return Math.min.apply(Math, points.map(function(point) {
    return distance(target, point);
  }));
};
var apply = function apply2(fn) {
  return function(point) {
    return {
      x: fn(point.x),
      y: fn(point.y)
    };
  };
};
var executeClip = function(frame, subject) {
  var result = getRect({
    top: Math.max(subject.top, frame.top),
    right: Math.min(subject.right, frame.right),
    bottom: Math.min(subject.bottom, frame.bottom),
    left: Math.max(subject.left, frame.left)
  });
  if (result.width <= 0 || result.height <= 0) {
    return null;
  }
  return result;
};
var offsetByPosition = function offsetByPosition2(spacing, point) {
  return {
    top: spacing.top + point.y,
    left: spacing.left + point.x,
    bottom: spacing.bottom + point.y,
    right: spacing.right + point.x
  };
};
var getCorners = function getCorners2(spacing) {
  return [{
    x: spacing.left,
    y: spacing.top
  }, {
    x: spacing.right,
    y: spacing.top
  }, {
    x: spacing.left,
    y: spacing.bottom
  }, {
    x: spacing.right,
    y: spacing.bottom
  }];
};
var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var scroll = function scroll2(target, frame) {
  if (!frame) {
    return target;
  }
  return offsetByPosition(target, frame.scroll.diff.displacement);
};
var increase = function increase2(target, axis, withPlaceholder) {
  if (withPlaceholder && withPlaceholder.increasedBy) {
    var _extends2;
    return _extends({}, target, (_extends2 = {}, _extends2[axis.end] = target[axis.end] + withPlaceholder.increasedBy[axis.line], _extends2));
  }
  return target;
};
var clip = function clip2(target, frame) {
  if (frame && frame.shouldClipSubject) {
    return executeClip(frame.pageMarginBox, target);
  }
  return getRect(target);
};
var getSubject = function(_ref) {
  var page = _ref.page, withPlaceholder = _ref.withPlaceholder, axis = _ref.axis, frame = _ref.frame;
  var scrolled = scroll(page.marginBox, frame);
  var increased = increase(scrolled, axis, withPlaceholder);
  var clipped = clip(increased, frame);
  return {
    page,
    withPlaceholder,
    active: clipped
  };
};
var scrollDroppable = function(droppable2, newScroll) {
  !droppable2.frame ? invariant(false) : void 0;
  var scrollable = droppable2.frame;
  var scrollDiff = subtract(newScroll, scrollable.scroll.initial);
  var scrollDisplacement = negate(scrollDiff);
  var frame = _extends({}, scrollable, {
    scroll: {
      initial: scrollable.scroll.initial,
      current: newScroll,
      diff: {
        value: scrollDiff,
        displacement: scrollDisplacement
      },
      max: scrollable.scroll.max
    }
  });
  var subject = getSubject({
    page: droppable2.subject.page,
    withPlaceholder: droppable2.subject.withPlaceholder,
    axis: droppable2.axis,
    frame
  });
  var result = _extends({}, droppable2, {
    frame,
    subject
  });
  return result;
};
function values(map2) {
  if (Object.values) {
    return Object.values(map2);
  }
  return Object.keys(map2).map(function(key) {
    return map2[key];
  });
}
function findIndex(list, predicate) {
  if (list.findIndex) {
    return list.findIndex(predicate);
  }
  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return i;
    }
  }
  return -1;
}
function find(list, predicate) {
  if (list.find) {
    return list.find(predicate);
  }
  var index2 = findIndex(list, predicate);
  if (index2 !== -1) {
    return list[index2];
  }
  return void 0;
}
function toArray(list) {
  return Array.prototype.slice.call(list);
}
var toDroppableMap = memoizeOne(function(droppables) {
  return droppables.reduce(function(previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDraggableMap = memoizeOne(function(draggables) {
  return draggables.reduce(function(previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDroppableList = memoizeOne(function(droppables) {
  return values(droppables);
});
var toDraggableList = memoizeOne(function(draggables) {
  return values(draggables);
});
var getDraggablesInsideDroppable = memoizeOne(function(droppableId, draggables) {
  var result = toDraggableList(draggables).filter(function(draggable2) {
    return droppableId === draggable2.descriptor.droppableId;
  }).sort(function(a, b2) {
    return a.descriptor.index - b2.descriptor.index;
  });
  return result;
});
function tryGetDestination(impact) {
  if (impact.at && impact.at.type === "REORDER") {
    return impact.at.destination;
  }
  return null;
}
function tryGetCombine(impact) {
  if (impact.at && impact.at.type === "COMBINE") {
    return impact.at.combine;
  }
  return null;
}
var removeDraggableFromList = memoizeOne(function(remove, list) {
  return list.filter(function(item) {
    return item.descriptor.id !== remove.descriptor.id;
  });
});
var moveToNextCombine = function(_ref) {
  var isMovingForward = _ref.isMovingForward, draggable2 = _ref.draggable, destination = _ref.destination, insideDestination = _ref.insideDestination, previousImpact = _ref.previousImpact;
  if (!destination.isCombineEnabled) {
    return null;
  }
  var location = tryGetDestination(previousImpact);
  if (!location) {
    return null;
  }
  function getImpact(target) {
    var at = {
      type: "COMBINE",
      combine: {
        draggableId: target,
        droppableId: destination.descriptor.id
      }
    };
    return _extends({}, previousImpact, {
      at
    });
  }
  var all = previousImpact.displaced.all;
  var closestId = all.length ? all[0] : null;
  if (isMovingForward) {
    return closestId ? getImpact(closestId) : null;
  }
  var withoutDraggable = removeDraggableFromList(draggable2, insideDestination);
  if (!closestId) {
    if (!withoutDraggable.length) {
      return null;
    }
    var last = withoutDraggable[withoutDraggable.length - 1];
    return getImpact(last.descriptor.id);
  }
  var indexOfClosest = findIndex(withoutDraggable, function(d2) {
    return d2.descriptor.id === closestId;
  });
  !(indexOfClosest !== -1) ? invariant(false) : void 0;
  var proposedIndex = indexOfClosest - 1;
  if (proposedIndex < 0) {
    return null;
  }
  var before = withoutDraggable[proposedIndex];
  return getImpact(before.descriptor.id);
};
var isHomeOf = function(draggable2, destination) {
  return draggable2.descriptor.droppableId === destination.descriptor.id;
};
var noDisplacedBy = {
  point: origin,
  value: 0
};
var emptyGroups = {
  invisible: {},
  visible: {},
  all: []
};
var noImpact = {
  displaced: emptyGroups,
  displacedBy: noDisplacedBy,
  at: null
};
var isWithin = function(lowerBound, upperBound) {
  return function(value2) {
    return lowerBound <= value2 && value2 <= upperBound;
  };
};
var isPartiallyVisibleThroughFrame = function(frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function(subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    if (isContained) {
      return true;
    }
    var isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
    var isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
    var isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;
    if (isPartiallyContained) {
      return true;
    }
    var isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
    var isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
    var isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;
    if (isTargetBiggerThanFrame) {
      return true;
    }
    var isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
    return isTargetBiggerOnOneAxis;
  };
};
var isTotallyVisibleThroughFrame = function(frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function(subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    return isContained;
  };
};
var vertical = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
};
var horizontal = {
  direction: "horizontal",
  line: "x",
  crossAxisLine: "y",
  start: "left",
  end: "right",
  size: "width",
  crossAxisStart: "top",
  crossAxisEnd: "bottom",
  crossAxisSize: "height"
};
var isTotallyVisibleThroughFrameOnAxis = function(axis) {
  return function(frame) {
    var isWithinVertical = isWithin(frame.top, frame.bottom);
    var isWithinHorizontal = isWithin(frame.left, frame.right);
    return function(subject) {
      if (axis === vertical) {
        return isWithinVertical(subject.top) && isWithinVertical(subject.bottom);
      }
      return isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    };
  };
};
var getDroppableDisplaced = function getDroppableDisplaced2(target, destination) {
  var displacement = destination.frame ? destination.frame.scroll.diff.displacement : origin;
  return offsetByPosition(target, displacement);
};
var isVisibleInDroppable = function isVisibleInDroppable2(target, destination, isVisibleThroughFrameFn) {
  if (!destination.subject.active) {
    return false;
  }
  return isVisibleThroughFrameFn(destination.subject.active)(target);
};
var isVisibleInViewport = function isVisibleInViewport2(target, viewport, isVisibleThroughFrameFn) {
  return isVisibleThroughFrameFn(viewport)(target);
};
var isVisible = function isVisible2(_ref) {
  var toBeDisplaced = _ref.target, destination = _ref.destination, viewport = _ref.viewport, withDroppableDisplacement2 = _ref.withDroppableDisplacement, isVisibleThroughFrameFn = _ref.isVisibleThroughFrameFn;
  var displacedTarget = withDroppableDisplacement2 ? getDroppableDisplaced(toBeDisplaced, destination) : toBeDisplaced;
  return isVisibleInDroppable(displacedTarget, destination, isVisibleThroughFrameFn) && isVisibleInViewport(displacedTarget, viewport, isVisibleThroughFrameFn);
};
var isPartiallyVisible = function isPartiallyVisible2(args) {
  return isVisible(_extends({}, args, {
    isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
  }));
};
var isTotallyVisible = function isTotallyVisible2(args) {
  return isVisible(_extends({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
  }));
};
var isTotallyVisibleOnAxis = function isTotallyVisibleOnAxis2(args) {
  return isVisible(_extends({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrameOnAxis(args.destination.axis)
  }));
};
var getShouldAnimate = function getShouldAnimate2(id, last, forceShouldAnimate) {
  if (typeof forceShouldAnimate === "boolean") {
    return forceShouldAnimate;
  }
  if (!last) {
    return true;
  }
  var invisible = last.invisible, visible = last.visible;
  if (invisible[id]) {
    return false;
  }
  var previous = visible[id];
  return previous ? previous.shouldAnimate : true;
};
function getTarget(draggable2, displacedBy) {
  var marginBox = draggable2.page.marginBox;
  var expandBy = {
    top: displacedBy.point.y,
    right: 0,
    bottom: 0,
    left: displacedBy.point.x
  };
  return getRect(expand(marginBox, expandBy));
}
function getDisplacementGroups(_ref) {
  var afterDragging = _ref.afterDragging, destination = _ref.destination, displacedBy = _ref.displacedBy, viewport = _ref.viewport, forceShouldAnimate = _ref.forceShouldAnimate, last = _ref.last;
  return afterDragging.reduce(function process(groups, draggable2) {
    var target = getTarget(draggable2, displacedBy);
    var id = draggable2.descriptor.id;
    groups.all.push(id);
    var isVisible3 = isPartiallyVisible({
      target,
      destination,
      viewport,
      withDroppableDisplacement: true
    });
    if (!isVisible3) {
      groups.invisible[draggable2.descriptor.id] = true;
      return groups;
    }
    var shouldAnimate = getShouldAnimate(id, last, forceShouldAnimate);
    var displacement = {
      draggableId: id,
      shouldAnimate
    };
    groups.visible[id] = displacement;
    return groups;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function getIndexOfLastItem(draggables, options) {
  if (!draggables.length) {
    return 0;
  }
  var indexOfLastItem = draggables[draggables.length - 1].descriptor.index;
  return options.inHomeList ? indexOfLastItem : indexOfLastItem + 1;
}
function goAtEnd(_ref) {
  var insideDestination = _ref.insideDestination, inHomeList = _ref.inHomeList, displacedBy = _ref.displacedBy, destination = _ref.destination;
  var newIndex = getIndexOfLastItem(insideDestination, {
    inHomeList
  });
  return {
    displaced: emptyGroups,
    displacedBy,
    at: {
      type: "REORDER",
      destination: {
        droppableId: destination.descriptor.id,
        index: newIndex
      }
    }
  };
}
function calculateReorderImpact(_ref2) {
  var draggable2 = _ref2.draggable, insideDestination = _ref2.insideDestination, destination = _ref2.destination, viewport = _ref2.viewport, displacedBy = _ref2.displacedBy, last = _ref2.last, index2 = _ref2.index, forceShouldAnimate = _ref2.forceShouldAnimate;
  var inHomeList = isHomeOf(draggable2, destination);
  if (index2 == null) {
    return goAtEnd({
      insideDestination,
      inHomeList,
      displacedBy,
      destination
    });
  }
  var match2 = find(insideDestination, function(item) {
    return item.descriptor.index === index2;
  });
  if (!match2) {
    return goAtEnd({
      insideDestination,
      inHomeList,
      displacedBy,
      destination
    });
  }
  var withoutDragging = removeDraggableFromList(draggable2, insideDestination);
  var sliceFrom = insideDestination.indexOf(match2);
  var impacted = withoutDragging.slice(sliceFrom);
  var displaced = getDisplacementGroups({
    afterDragging: impacted,
    destination,
    displacedBy,
    last,
    viewport: viewport.frame,
    forceShouldAnimate
  });
  return {
    displaced,
    displacedBy,
    at: {
      type: "REORDER",
      destination: {
        droppableId: destination.descriptor.id,
        index: index2
      }
    }
  };
}
function didStartAfterCritical(draggableId, afterCritical) {
  return Boolean(afterCritical.effected[draggableId]);
}
var fromCombine = function(_ref) {
  var isMovingForward = _ref.isMovingForward, destination = _ref.destination, draggables = _ref.draggables, combine2 = _ref.combine, afterCritical = _ref.afterCritical;
  if (!destination.isCombineEnabled) {
    return null;
  }
  var combineId = combine2.draggableId;
  var combineWith = draggables[combineId];
  var combineWithIndex = combineWith.descriptor.index;
  var didCombineWithStartAfterCritical = didStartAfterCritical(combineId, afterCritical);
  if (didCombineWithStartAfterCritical) {
    if (isMovingForward) {
      return combineWithIndex;
    }
    return combineWithIndex - 1;
  }
  if (isMovingForward) {
    return combineWithIndex + 1;
  }
  return combineWithIndex;
};
var fromReorder = function(_ref) {
  var isMovingForward = _ref.isMovingForward, isInHomeList = _ref.isInHomeList, insideDestination = _ref.insideDestination, location = _ref.location;
  if (!insideDestination.length) {
    return null;
  }
  var currentIndex = location.index;
  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
  var firstIndex = insideDestination[0].descriptor.index;
  var lastIndex = insideDestination[insideDestination.length - 1].descriptor.index;
  var upperBound = isInHomeList ? lastIndex : lastIndex + 1;
  if (proposedIndex < firstIndex) {
    return null;
  }
  if (proposedIndex > upperBound) {
    return null;
  }
  return proposedIndex;
};
var moveToNextIndex = function(_ref) {
  var isMovingForward = _ref.isMovingForward, isInHomeList = _ref.isInHomeList, draggable2 = _ref.draggable, draggables = _ref.draggables, destination = _ref.destination, insideDestination = _ref.insideDestination, previousImpact = _ref.previousImpact, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  var wasAt = previousImpact.at;
  !wasAt ? invariant(false) : void 0;
  if (wasAt.type === "REORDER") {
    var _newIndex = fromReorder({
      isMovingForward,
      isInHomeList,
      location: wasAt.destination,
      insideDestination
    });
    if (_newIndex == null) {
      return null;
    }
    return calculateReorderImpact({
      draggable: draggable2,
      insideDestination,
      destination,
      viewport,
      last: previousImpact.displaced,
      displacedBy: previousImpact.displacedBy,
      index: _newIndex
    });
  }
  var newIndex = fromCombine({
    isMovingForward,
    destination,
    displaced: previousImpact.displaced,
    draggables,
    combine: wasAt.combine,
    afterCritical
  });
  if (newIndex == null) {
    return null;
  }
  return calculateReorderImpact({
    draggable: draggable2,
    insideDestination,
    destination,
    viewport,
    last: previousImpact.displaced,
    displacedBy: previousImpact.displacedBy,
    index: newIndex
  });
};
var getCombinedItemDisplacement = function(_ref) {
  var displaced = _ref.displaced, afterCritical = _ref.afterCritical, combineWith = _ref.combineWith, displacedBy = _ref.displacedBy;
  var isDisplaced = Boolean(displaced.visible[combineWith] || displaced.invisible[combineWith]);
  if (didStartAfterCritical(combineWith, afterCritical)) {
    return isDisplaced ? origin : negate(displacedBy.point);
  }
  return isDisplaced ? displacedBy.point : origin;
};
var whenCombining = function(_ref) {
  var afterCritical = _ref.afterCritical, impact = _ref.impact, draggables = _ref.draggables;
  var combine2 = tryGetCombine(impact);
  !combine2 ? invariant(false) : void 0;
  var combineWith = combine2.draggableId;
  var center = draggables[combineWith].page.borderBox.center;
  var displaceBy = getCombinedItemDisplacement({
    displaced: impact.displaced,
    afterCritical,
    combineWith,
    displacedBy: impact.displacedBy
  });
  return add(center, displaceBy);
};
var distanceFromStartToBorderBoxCenter = function distanceFromStartToBorderBoxCenter2(axis, box) {
  return box.margin[axis.start] + box.borderBox[axis.size] / 2;
};
var distanceFromEndToBorderBoxCenter = function distanceFromEndToBorderBoxCenter2(axis, box) {
  return box.margin[axis.end] + box.borderBox[axis.size] / 2;
};
var getCrossAxisBorderBoxCenter = function getCrossAxisBorderBoxCenter2(axis, target, isMoving) {
  return target[axis.crossAxisStart] + isMoving.margin[axis.crossAxisStart] + isMoving.borderBox[axis.crossAxisSize] / 2;
};
var goAfter = function goAfter2(_ref) {
  var axis = _ref.axis, moveRelativeTo = _ref.moveRelativeTo, isMoving = _ref.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.end] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goBefore = function goBefore2(_ref2) {
  var axis = _ref2.axis, moveRelativeTo = _ref2.moveRelativeTo, isMoving = _ref2.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.start] - distanceFromEndToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goIntoStart = function goIntoStart2(_ref3) {
  var axis = _ref3.axis, moveInto = _ref3.moveInto, isMoving = _ref3.isMoving;
  return patch(axis.line, moveInto.contentBox[axis.start] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveInto.contentBox, isMoving));
};
var whenReordering = function(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, draggables = _ref.draggables, droppable2 = _ref.droppable, afterCritical = _ref.afterCritical;
  var insideDestination = getDraggablesInsideDroppable(droppable2.descriptor.id, draggables);
  var draggablePage = draggable2.page;
  var axis = droppable2.axis;
  if (!insideDestination.length) {
    return goIntoStart({
      axis,
      moveInto: droppable2.page,
      isMoving: draggablePage
    });
  }
  var displaced = impact.displaced, displacedBy = impact.displacedBy;
  var closestAfter = displaced.all[0];
  if (closestAfter) {
    var closest3 = draggables[closestAfter];
    if (didStartAfterCritical(closestAfter, afterCritical)) {
      return goBefore({
        axis,
        moveRelativeTo: closest3.page,
        isMoving: draggablePage
      });
    }
    var withDisplacement = offset(closest3.page, displacedBy.point);
    return goBefore({
      axis,
      moveRelativeTo: withDisplacement,
      isMoving: draggablePage
    });
  }
  var last = insideDestination[insideDestination.length - 1];
  if (last.descriptor.id === draggable2.descriptor.id) {
    return draggablePage.borderBox.center;
  }
  if (didStartAfterCritical(last.descriptor.id, afterCritical)) {
    var page = offset(last.page, negate(afterCritical.displacedBy.point));
    return goAfter({
      axis,
      moveRelativeTo: page,
      isMoving: draggablePage
    });
  }
  return goAfter({
    axis,
    moveRelativeTo: last.page,
    isMoving: draggablePage
  });
};
var withDroppableDisplacement = function(droppable2, point) {
  var frame = droppable2.frame;
  if (!frame) {
    return point;
  }
  return add(point, frame.scroll.diff.displacement);
};
var getResultWithoutDroppableDisplacement = function getResultWithoutDroppableDisplacement2(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, droppable2 = _ref.droppable, draggables = _ref.draggables, afterCritical = _ref.afterCritical;
  var original = draggable2.page.borderBox.center;
  var at = impact.at;
  if (!droppable2) {
    return original;
  }
  if (!at) {
    return original;
  }
  if (at.type === "REORDER") {
    return whenReordering({
      impact,
      draggable: draggable2,
      draggables,
      droppable: droppable2,
      afterCritical
    });
  }
  return whenCombining({
    impact,
    draggables,
    afterCritical
  });
};
var getPageBorderBoxCenterFromImpact = function(args) {
  var withoutDisplacement = getResultWithoutDroppableDisplacement(args);
  var droppable2 = args.droppable;
  var withDisplacement = droppable2 ? withDroppableDisplacement(droppable2, withoutDisplacement) : withoutDisplacement;
  return withDisplacement;
};
var scrollViewport = function(viewport, newScroll) {
  var diff = subtract(newScroll, viewport.scroll.initial);
  var displacement = negate(diff);
  var frame = getRect({
    top: newScroll.y,
    bottom: newScroll.y + viewport.frame.height,
    left: newScroll.x,
    right: newScroll.x + viewport.frame.width
  });
  var updated = {
    frame,
    scroll: {
      initial: viewport.scroll.initial,
      max: viewport.scroll.max,
      current: newScroll,
      diff: {
        value: diff,
        displacement
      }
    }
  };
  return updated;
};
function getDraggables(ids, draggables) {
  return ids.map(function(id) {
    return draggables[id];
  });
}
function tryGetVisible(id, groups) {
  for (var i = 0; i < groups.length; i++) {
    var displacement = groups[i].visible[id];
    if (displacement) {
      return displacement;
    }
  }
  return null;
}
var speculativelyIncrease = function(_ref) {
  var impact = _ref.impact, viewport = _ref.viewport, destination = _ref.destination, draggables = _ref.draggables, maxScrollChange = _ref.maxScrollChange;
  var scrolledViewport = scrollViewport(viewport, add(viewport.scroll.current, maxScrollChange));
  var scrolledDroppable = destination.frame ? scrollDroppable(destination, add(destination.frame.scroll.current, maxScrollChange)) : destination;
  var last = impact.displaced;
  var withViewportScroll = getDisplacementGroups({
    afterDragging: getDraggables(last.all, draggables),
    destination,
    displacedBy: impact.displacedBy,
    viewport: scrolledViewport.frame,
    last,
    forceShouldAnimate: false
  });
  var withDroppableScroll2 = getDisplacementGroups({
    afterDragging: getDraggables(last.all, draggables),
    destination: scrolledDroppable,
    displacedBy: impact.displacedBy,
    viewport: viewport.frame,
    last,
    forceShouldAnimate: false
  });
  var invisible = {};
  var visible = {};
  var groups = [last, withViewportScroll, withDroppableScroll2];
  last.all.forEach(function(id) {
    var displacement = tryGetVisible(id, groups);
    if (displacement) {
      visible[id] = displacement;
      return;
    }
    invisible[id] = true;
  });
  var newImpact = _extends({}, impact, {
    displaced: {
      all: last.all,
      invisible,
      visible
    }
  });
  return newImpact;
};
var withViewportDisplacement = function(viewport, point) {
  return add(viewport.scroll.diff.displacement, point);
};
var getClientFromPageBorderBoxCenter = function(_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter, draggable2 = _ref.draggable, viewport = _ref.viewport;
  var withoutPageScrollChange = withViewportDisplacement(viewport, pageBorderBoxCenter);
  var offset3 = subtract(withoutPageScrollChange, draggable2.page.borderBox.center);
  return add(draggable2.client.borderBox.center, offset3);
};
var isTotallyVisibleInNewLocation = function(_ref) {
  var draggable2 = _ref.draggable, destination = _ref.destination, newPageBorderBoxCenter = _ref.newPageBorderBoxCenter, viewport = _ref.viewport, withDroppableDisplacement2 = _ref.withDroppableDisplacement, _ref$onlyOnMainAxis = _ref.onlyOnMainAxis, onlyOnMainAxis = _ref$onlyOnMainAxis === void 0 ? false : _ref$onlyOnMainAxis;
  var changeNeeded = subtract(newPageBorderBoxCenter, draggable2.page.borderBox.center);
  var shifted = offsetByPosition(draggable2.page.borderBox, changeNeeded);
  var args = {
    target: shifted,
    destination,
    withDroppableDisplacement: withDroppableDisplacement2,
    viewport
  };
  return onlyOnMainAxis ? isTotallyVisibleOnAxis(args) : isTotallyVisible(args);
};
var moveToNextPlace = function(_ref) {
  var isMovingForward = _ref.isMovingForward, draggable2 = _ref.draggable, destination = _ref.destination, draggables = _ref.draggables, previousImpact = _ref.previousImpact, viewport = _ref.viewport, previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter, previousClientSelection = _ref.previousClientSelection, afterCritical = _ref.afterCritical;
  if (!destination.isEnabled) {
    return null;
  }
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var isInHomeList = isHomeOf(draggable2, destination);
  var impact = moveToNextCombine({
    isMovingForward,
    draggable: draggable2,
    destination,
    insideDestination,
    previousImpact
  }) || moveToNextIndex({
    isMovingForward,
    isInHomeList,
    draggable: draggable2,
    draggables,
    destination,
    insideDestination,
    previousImpact,
    viewport,
    afterCritical
  });
  if (!impact) {
    return null;
  }
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact,
    draggable: draggable2,
    droppable: destination,
    draggables,
    afterCritical
  });
  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
    draggable: draggable2,
    destination,
    newPageBorderBoxCenter: pageBorderBoxCenter,
    viewport: viewport.frame,
    withDroppableDisplacement: false,
    onlyOnMainAxis: true
  });
  if (isVisibleInNewLocation) {
    var clientSelection = getClientFromPageBorderBoxCenter({
      pageBorderBoxCenter,
      draggable: draggable2,
      viewport
    });
    return {
      clientSelection,
      impact,
      scrollJumpRequest: null
    };
  }
  var distance3 = subtract(pageBorderBoxCenter, previousPageBorderBoxCenter);
  var cautious = speculativelyIncrease({
    impact,
    viewport,
    destination,
    draggables,
    maxScrollChange: distance3
  });
  return {
    clientSelection: previousClientSelection,
    impact: cautious,
    scrollJumpRequest: distance3
  };
};
var getKnownActive = function getKnownActive2(droppable2) {
  var rect = droppable2.subject.active;
  !rect ? invariant(false) : void 0;
  return rect;
};
var getBestCrossAxisDroppable = function(_ref) {
  var isMovingForward = _ref.isMovingForward, pageBorderBoxCenter = _ref.pageBorderBoxCenter, source = _ref.source, droppables = _ref.droppables, viewport = _ref.viewport;
  var active = source.subject.active;
  if (!active) {
    return null;
  }
  var axis = source.axis;
  var isBetweenSourceClipped = isWithin(active[axis.start], active[axis.end]);
  var candidates = toDroppableList(droppables).filter(function(droppable2) {
    return droppable2 !== source;
  }).filter(function(droppable2) {
    return droppable2.isEnabled;
  }).filter(function(droppable2) {
    return Boolean(droppable2.subject.active);
  }).filter(function(droppable2) {
    return isPartiallyVisibleThroughFrame(viewport.frame)(getKnownActive(droppable2));
  }).filter(function(droppable2) {
    var activeOfTarget = getKnownActive(droppable2);
    if (isMovingForward) {
      return active[axis.crossAxisEnd] < activeOfTarget[axis.crossAxisEnd];
    }
    return activeOfTarget[axis.crossAxisStart] < active[axis.crossAxisStart];
  }).filter(function(droppable2) {
    var activeOfTarget = getKnownActive(droppable2);
    var isBetweenDestinationClipped = isWithin(activeOfTarget[axis.start], activeOfTarget[axis.end]);
    return isBetweenSourceClipped(activeOfTarget[axis.start]) || isBetweenSourceClipped(activeOfTarget[axis.end]) || isBetweenDestinationClipped(active[axis.start]) || isBetweenDestinationClipped(active[axis.end]);
  }).sort(function(a, b2) {
    var first = getKnownActive(a)[axis.crossAxisStart];
    var second = getKnownActive(b2)[axis.crossAxisStart];
    if (isMovingForward) {
      return first - second;
    }
    return second - first;
  }).filter(function(droppable2, index2, array) {
    return getKnownActive(droppable2)[axis.crossAxisStart] === getKnownActive(array[0])[axis.crossAxisStart];
  });
  if (!candidates.length) {
    return null;
  }
  if (candidates.length === 1) {
    return candidates[0];
  }
  var contains = candidates.filter(function(droppable2) {
    var isWithinDroppable = isWithin(getKnownActive(droppable2)[axis.start], getKnownActive(droppable2)[axis.end]);
    return isWithinDroppable(pageBorderBoxCenter[axis.line]);
  });
  if (contains.length === 1) {
    return contains[0];
  }
  if (contains.length > 1) {
    return contains.sort(function(a, b2) {
      return getKnownActive(a)[axis.start] - getKnownActive(b2)[axis.start];
    })[0];
  }
  return candidates.sort(function(a, b2) {
    var first = closest(pageBorderBoxCenter, getCorners(getKnownActive(a)));
    var second = closest(pageBorderBoxCenter, getCorners(getKnownActive(b2)));
    if (first !== second) {
      return first - second;
    }
    return getKnownActive(a)[axis.start] - getKnownActive(b2)[axis.start];
  })[0];
};
var getCurrentPageBorderBoxCenter = function getCurrentPageBorderBoxCenter2(draggable2, afterCritical) {
  var original = draggable2.page.borderBox.center;
  return didStartAfterCritical(draggable2.descriptor.id, afterCritical) ? subtract(original, afterCritical.displacedBy.point) : original;
};
var getCurrentPageBorderBox = function getCurrentPageBorderBox2(draggable2, afterCritical) {
  var original = draggable2.page.borderBox;
  return didStartAfterCritical(draggable2.descriptor.id, afterCritical) ? offsetByPosition(original, negate(afterCritical.displacedBy.point)) : original;
};
var getClosestDraggable = function(_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter, viewport = _ref.viewport, destination = _ref.destination, insideDestination = _ref.insideDestination, afterCritical = _ref.afterCritical;
  var sorted = insideDestination.filter(function(draggable2) {
    return isTotallyVisible({
      target: getCurrentPageBorderBox(draggable2, afterCritical),
      destination,
      viewport: viewport.frame,
      withDroppableDisplacement: true
    });
  }).sort(function(a, b2) {
    var distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(a, afterCritical)));
    var distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(b2, afterCritical)));
    if (distanceToA < distanceToB) {
      return -1;
    }
    if (distanceToB < distanceToA) {
      return 1;
    }
    return a.descriptor.index - b2.descriptor.index;
  });
  return sorted[0] || null;
};
var getDisplacedBy = memoizeOne(function getDisplacedBy2(axis, displaceBy) {
  var displacement = displaceBy[axis.line];
  return {
    value: displacement,
    point: patch(axis.line, displacement)
  };
});
var getRequiredGrowthForPlaceholder = function getRequiredGrowthForPlaceholder2(droppable2, placeholderSize, draggables) {
  var axis = droppable2.axis;
  if (droppable2.descriptor.mode === "virtual") {
    return patch(axis.line, placeholderSize[axis.line]);
  }
  var availableSpace = droppable2.subject.page.contentBox[axis.size];
  var insideDroppable = getDraggablesInsideDroppable(droppable2.descriptor.id, draggables);
  var spaceUsed = insideDroppable.reduce(function(sum, dimension) {
    return sum + dimension.client.marginBox[axis.size];
  }, 0);
  var requiredSpace = spaceUsed + placeholderSize[axis.line];
  var needsToGrowBy = requiredSpace - availableSpace;
  if (needsToGrowBy <= 0) {
    return null;
  }
  return patch(axis.line, needsToGrowBy);
};
var withMaxScroll = function withMaxScroll2(frame, max) {
  return _extends({}, frame, {
    scroll: _extends({}, frame.scroll, {
      max
    })
  });
};
var addPlaceholder = function addPlaceholder2(droppable2, draggable2, draggables) {
  var frame = droppable2.frame;
  !!isHomeOf(draggable2, droppable2) ? invariant(false) : void 0;
  !!droppable2.subject.withPlaceholder ? invariant(false) : void 0;
  var placeholderSize = getDisplacedBy(droppable2.axis, draggable2.displaceBy).point;
  var requiredGrowth = getRequiredGrowthForPlaceholder(droppable2, placeholderSize, draggables);
  var added = {
    placeholderSize,
    increasedBy: requiredGrowth,
    oldFrameMaxScroll: droppable2.frame ? droppable2.frame.scroll.max : null
  };
  if (!frame) {
    var _subject = getSubject({
      page: droppable2.subject.page,
      withPlaceholder: added,
      axis: droppable2.axis,
      frame: droppable2.frame
    });
    return _extends({}, droppable2, {
      subject: _subject
    });
  }
  var maxScroll = requiredGrowth ? add(frame.scroll.max, requiredGrowth) : frame.scroll.max;
  var newFrame = withMaxScroll(frame, maxScroll);
  var subject = getSubject({
    page: droppable2.subject.page,
    withPlaceholder: added,
    axis: droppable2.axis,
    frame: newFrame
  });
  return _extends({}, droppable2, {
    subject,
    frame: newFrame
  });
};
var removePlaceholder = function removePlaceholder2(droppable2) {
  var added = droppable2.subject.withPlaceholder;
  !added ? invariant(false) : void 0;
  var frame = droppable2.frame;
  if (!frame) {
    var _subject2 = getSubject({
      page: droppable2.subject.page,
      axis: droppable2.axis,
      frame: null,
      withPlaceholder: null
    });
    return _extends({}, droppable2, {
      subject: _subject2
    });
  }
  var oldMaxScroll = added.oldFrameMaxScroll;
  !oldMaxScroll ? invariant(false) : void 0;
  var newFrame = withMaxScroll(frame, oldMaxScroll);
  var subject = getSubject({
    page: droppable2.subject.page,
    axis: droppable2.axis,
    frame: newFrame,
    withPlaceholder: null
  });
  return _extends({}, droppable2, {
    subject,
    frame: newFrame
  });
};
var moveToNewDroppable = function(_ref) {
  var previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter, moveRelativeTo = _ref.moveRelativeTo, insideDestination = _ref.insideDestination, draggable2 = _ref.draggable, draggables = _ref.draggables, destination = _ref.destination, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  if (!moveRelativeTo) {
    if (insideDestination.length) {
      return null;
    }
    var proposed = {
      displaced: emptyGroups,
      displacedBy: noDisplacedBy,
      at: {
        type: "REORDER",
        destination: {
          droppableId: destination.descriptor.id,
          index: 0
        }
      }
    };
    var proposedPageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
      impact: proposed,
      draggable: draggable2,
      droppable: destination,
      draggables,
      afterCritical
    });
    var withPlaceholder = isHomeOf(draggable2, destination) ? destination : addPlaceholder(destination, draggable2, draggables);
    var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
      draggable: draggable2,
      destination: withPlaceholder,
      newPageBorderBoxCenter: proposedPageBorderBoxCenter,
      viewport: viewport.frame,
      withDroppableDisplacement: false,
      onlyOnMainAxis: true
    });
    return isVisibleInNewLocation ? proposed : null;
  }
  var isGoingBeforeTarget = Boolean(previousPageBorderBoxCenter[destination.axis.line] <= moveRelativeTo.page.borderBox.center[destination.axis.line]);
  var proposedIndex = function() {
    var relativeTo = moveRelativeTo.descriptor.index;
    if (moveRelativeTo.descriptor.id === draggable2.descriptor.id) {
      return relativeTo;
    }
    if (isGoingBeforeTarget) {
      return relativeTo;
    }
    return relativeTo + 1;
  }();
  var displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
  return calculateReorderImpact({
    draggable: draggable2,
    insideDestination,
    destination,
    viewport,
    displacedBy,
    last: emptyGroups,
    index: proposedIndex
  });
};
var moveCrossAxis = function(_ref) {
  var isMovingForward = _ref.isMovingForward, previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter, draggable2 = _ref.draggable, isOver = _ref.isOver, draggables = _ref.draggables, droppables = _ref.droppables, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  var destination = getBestCrossAxisDroppable({
    isMovingForward,
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    source: isOver,
    droppables,
    viewport
  });
  if (!destination) {
    return null;
  }
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var moveRelativeTo = getClosestDraggable({
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    viewport,
    destination,
    insideDestination,
    afterCritical
  });
  var impact = moveToNewDroppable({
    previousPageBorderBoxCenter,
    destination,
    draggable: draggable2,
    draggables,
    moveRelativeTo,
    insideDestination,
    viewport,
    afterCritical
  });
  if (!impact) {
    return null;
  }
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact,
    draggable: draggable2,
    droppable: destination,
    draggables,
    afterCritical
  });
  var clientSelection = getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter,
    draggable: draggable2,
    viewport
  });
  return {
    clientSelection,
    impact,
    scrollJumpRequest: null
  };
};
var whatIsDraggedOver = function(impact) {
  var at = impact.at;
  if (!at) {
    return null;
  }
  if (at.type === "REORDER") {
    return at.destination.droppableId;
  }
  return at.combine.droppableId;
};
var getDroppableOver = function getDroppableOver2(impact, droppables) {
  var id = whatIsDraggedOver(impact);
  return id ? droppables[id] : null;
};
var moveInDirection = function(_ref) {
  var state = _ref.state, type = _ref.type;
  var isActuallyOver = getDroppableOver(state.impact, state.dimensions.droppables);
  var isMainAxisMovementAllowed = Boolean(isActuallyOver);
  var home2 = state.dimensions.droppables[state.critical.droppable.id];
  var isOver = isActuallyOver || home2;
  var direction = isOver.axis.direction;
  var isMovingOnMainAxis = direction === "vertical" && (type === "MOVE_UP" || type === "MOVE_DOWN") || direction === "horizontal" && (type === "MOVE_LEFT" || type === "MOVE_RIGHT");
  if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
    return null;
  }
  var isMovingForward = type === "MOVE_DOWN" || type === "MOVE_RIGHT";
  var draggable2 = state.dimensions.draggables[state.critical.draggable.id];
  var previousPageBorderBoxCenter = state.current.page.borderBoxCenter;
  var _state$dimensions = state.dimensions, draggables = _state$dimensions.draggables, droppables = _state$dimensions.droppables;
  return isMovingOnMainAxis ? moveToNextPlace({
    isMovingForward,
    previousPageBorderBoxCenter,
    draggable: draggable2,
    destination: isOver,
    draggables,
    viewport: state.viewport,
    previousClientSelection: state.current.client.selection,
    previousImpact: state.impact,
    afterCritical: state.afterCritical
  }) : moveCrossAxis({
    isMovingForward,
    previousPageBorderBoxCenter,
    draggable: draggable2,
    isOver,
    draggables,
    droppables,
    viewport: state.viewport,
    afterCritical: state.afterCritical
  });
};
function isMovementAllowed(state) {
  return state.phase === "DRAGGING" || state.phase === "COLLECTING";
}
function isPositionInFrame(frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function run(point) {
    return isWithinVertical(point.y) && isWithinHorizontal(point.x);
  };
}
function getHasOverlap(first, second) {
  return first.left < second.right && first.right > second.left && first.top < second.bottom && first.bottom > second.top;
}
function getFurthestAway(_ref) {
  var pageBorderBox = _ref.pageBorderBox, draggable2 = _ref.draggable, candidates = _ref.candidates;
  var startCenter = draggable2.page.borderBox.center;
  var sorted = candidates.map(function(candidate) {
    var axis = candidate.axis;
    var target = patch(candidate.axis.line, pageBorderBox.center[axis.line], candidate.page.borderBox.center[axis.crossAxisLine]);
    return {
      id: candidate.descriptor.id,
      distance: distance(startCenter, target)
    };
  }).sort(function(a, b2) {
    return b2.distance - a.distance;
  });
  return sorted[0] ? sorted[0].id : null;
}
function getDroppableOver$1(_ref2) {
  var pageBorderBox = _ref2.pageBorderBox, draggable2 = _ref2.draggable, droppables = _ref2.droppables;
  var candidates = toDroppableList(droppables).filter(function(item) {
    if (!item.isEnabled) {
      return false;
    }
    var active = item.subject.active;
    if (!active) {
      return false;
    }
    if (!getHasOverlap(pageBorderBox, active)) {
      return false;
    }
    if (isPositionInFrame(active)(pageBorderBox.center)) {
      return true;
    }
    var axis = item.axis;
    var childCenter = active.center[axis.crossAxisLine];
    var crossAxisStart = pageBorderBox[axis.crossAxisStart];
    var crossAxisEnd = pageBorderBox[axis.crossAxisEnd];
    var isContained = isWithin(active[axis.crossAxisStart], active[axis.crossAxisEnd]);
    var isStartContained = isContained(crossAxisStart);
    var isEndContained = isContained(crossAxisEnd);
    if (!isStartContained && !isEndContained) {
      return true;
    }
    if (isStartContained) {
      return crossAxisStart < childCenter;
    }
    return crossAxisEnd > childCenter;
  });
  if (!candidates.length) {
    return null;
  }
  if (candidates.length === 1) {
    return candidates[0].descriptor.id;
  }
  return getFurthestAway({
    pageBorderBox,
    draggable: draggable2,
    candidates
  });
}
var offsetRectByPosition = function offsetRectByPosition2(rect, point) {
  return getRect(offsetByPosition(rect, point));
};
var withDroppableScroll = function(droppable2, area) {
  var frame = droppable2.frame;
  if (!frame) {
    return area;
  }
  return offsetRectByPosition(area, frame.scroll.diff.value);
};
function getIsDisplaced(_ref) {
  var displaced = _ref.displaced, id = _ref.id;
  return Boolean(displaced.visible[id] || displaced.invisible[id]);
}
function atIndex(_ref) {
  var draggable2 = _ref.draggable, closest3 = _ref.closest, inHomeList = _ref.inHomeList;
  if (!closest3) {
    return null;
  }
  if (!inHomeList) {
    return closest3.descriptor.index;
  }
  if (closest3.descriptor.index > draggable2.descriptor.index) {
    return closest3.descriptor.index - 1;
  }
  return closest3.descriptor.index;
}
var getReorderImpact = function(_ref2) {
  var targetRect = _ref2.pageBorderBoxWithDroppableScroll, draggable2 = _ref2.draggable, destination = _ref2.destination, insideDestination = _ref2.insideDestination, last = _ref2.last, viewport = _ref2.viewport, afterCritical = _ref2.afterCritical;
  var axis = destination.axis;
  var displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
  var displacement = displacedBy.value;
  var targetStart = targetRect[axis.start];
  var targetEnd = targetRect[axis.end];
  var withoutDragging = removeDraggableFromList(draggable2, insideDestination);
  var closest3 = find(withoutDragging, function(child) {
    var id = child.descriptor.id;
    var childCenter = child.page.borderBox.center[axis.line];
    var didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
    var isDisplaced = getIsDisplaced({
      displaced: last,
      id
    });
    if (didStartAfterCritical$1) {
      if (isDisplaced) {
        return targetEnd <= childCenter;
      }
      return targetStart < childCenter - displacement;
    }
    if (isDisplaced) {
      return targetEnd <= childCenter + displacement;
    }
    return targetStart < childCenter;
  });
  var newIndex = atIndex({
    draggable: draggable2,
    closest: closest3,
    inHomeList: isHomeOf(draggable2, destination)
  });
  return calculateReorderImpact({
    draggable: draggable2,
    insideDestination,
    destination,
    viewport,
    last,
    displacedBy,
    index: newIndex
  });
};
var combineThresholdDivisor = 4;
var getCombineImpact = function(_ref) {
  var draggable2 = _ref.draggable, targetRect = _ref.pageBorderBoxWithDroppableScroll, previousImpact = _ref.previousImpact, destination = _ref.destination, insideDestination = _ref.insideDestination, afterCritical = _ref.afterCritical;
  if (!destination.isCombineEnabled) {
    return null;
  }
  var axis = destination.axis;
  var displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
  var displacement = displacedBy.value;
  var targetStart = targetRect[axis.start];
  var targetEnd = targetRect[axis.end];
  var withoutDragging = removeDraggableFromList(draggable2, insideDestination);
  var combineWith = find(withoutDragging, function(child) {
    var id = child.descriptor.id;
    var childRect = child.page.borderBox;
    var childSize = childRect[axis.size];
    var threshold = childSize / combineThresholdDivisor;
    var didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
    var isDisplaced = getIsDisplaced({
      displaced: previousImpact.displaced,
      id
    });
    if (didStartAfterCritical$1) {
      if (isDisplaced) {
        return targetEnd > childRect[axis.start] + threshold && targetEnd < childRect[axis.end] - threshold;
      }
      return targetStart > childRect[axis.start] - displacement + threshold && targetStart < childRect[axis.end] - displacement - threshold;
    }
    if (isDisplaced) {
      return targetEnd > childRect[axis.start] + displacement + threshold && targetEnd < childRect[axis.end] + displacement - threshold;
    }
    return targetStart > childRect[axis.start] + threshold && targetStart < childRect[axis.end] - threshold;
  });
  if (!combineWith) {
    return null;
  }
  var impact = {
    displacedBy,
    displaced: previousImpact.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: combineWith.descriptor.id,
        droppableId: destination.descriptor.id
      }
    }
  };
  return impact;
};
var getDragImpact = function(_ref) {
  var pageOffset = _ref.pageOffset, draggable2 = _ref.draggable, draggables = _ref.draggables, droppables = _ref.droppables, previousImpact = _ref.previousImpact, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  var pageBorderBox = offsetRectByPosition(draggable2.page.borderBox, pageOffset);
  var destinationId = getDroppableOver$1({
    pageBorderBox,
    draggable: draggable2,
    droppables
  });
  if (!destinationId) {
    return noImpact;
  }
  var destination = droppables[destinationId];
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var pageBorderBoxWithDroppableScroll = withDroppableScroll(destination, pageBorderBox);
  return getCombineImpact({
    pageBorderBoxWithDroppableScroll,
    draggable: draggable2,
    previousImpact,
    destination,
    insideDestination,
    afterCritical
  }) || getReorderImpact({
    pageBorderBoxWithDroppableScroll,
    draggable: draggable2,
    destination,
    insideDestination,
    last: previousImpact.displaced,
    viewport,
    afterCritical
  });
};
var patchDroppableMap = function(droppables, updated) {
  var _extends2;
  return _extends({}, droppables, (_extends2 = {}, _extends2[updated.descriptor.id] = updated, _extends2));
};
var clearUnusedPlaceholder = function clearUnusedPlaceholder2(_ref) {
  var previousImpact = _ref.previousImpact, impact = _ref.impact, droppables = _ref.droppables;
  var last = whatIsDraggedOver(previousImpact);
  var now2 = whatIsDraggedOver(impact);
  if (!last) {
    return droppables;
  }
  if (last === now2) {
    return droppables;
  }
  var lastDroppable = droppables[last];
  if (!lastDroppable.subject.withPlaceholder) {
    return droppables;
  }
  var updated = removePlaceholder(lastDroppable);
  return patchDroppableMap(droppables, updated);
};
var recomputePlaceholders = function(_ref2) {
  var draggable2 = _ref2.draggable, draggables = _ref2.draggables, droppables = _ref2.droppables, previousImpact = _ref2.previousImpact, impact = _ref2.impact;
  var cleaned = clearUnusedPlaceholder({
    previousImpact,
    impact,
    droppables
  });
  var isOver = whatIsDraggedOver(impact);
  if (!isOver) {
    return cleaned;
  }
  var droppable2 = droppables[isOver];
  if (isHomeOf(draggable2, droppable2)) {
    return cleaned;
  }
  if (droppable2.subject.withPlaceholder) {
    return cleaned;
  }
  var patched = addPlaceholder(droppable2, draggable2, draggables);
  return patchDroppableMap(cleaned, patched);
};
var update = function(_ref) {
  var state = _ref.state, forcedClientSelection = _ref.clientSelection, forcedDimensions = _ref.dimensions, forcedViewport = _ref.viewport, forcedImpact = _ref.impact, scrollJumpRequest = _ref.scrollJumpRequest;
  var viewport = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var clientSelection = forcedClientSelection || state.current.client.selection;
  var offset3 = subtract(clientSelection, state.initial.client.selection);
  var client = {
    offset: offset3,
    selection: clientSelection,
    borderBoxCenter: add(state.initial.client.borderBoxCenter, offset3)
  };
  var page = {
    selection: add(client.selection, viewport.scroll.current),
    borderBoxCenter: add(client.borderBoxCenter, viewport.scroll.current),
    offset: add(client.offset, viewport.scroll.diff.value)
  };
  var current = {
    client,
    page
  };
  if (state.phase === "COLLECTING") {
    return _extends({
      phase: "COLLECTING"
    }, state, {
      dimensions,
      viewport,
      current
    });
  }
  var draggable2 = dimensions.draggables[state.critical.draggable.id];
  var newImpact = forcedImpact || getDragImpact({
    pageOffset: page.offset,
    draggable: draggable2,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: state.impact,
    viewport,
    afterCritical: state.afterCritical
  });
  var withUpdatedPlaceholders = recomputePlaceholders({
    draggable: draggable2,
    impact: newImpact,
    previousImpact: state.impact,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables
  });
  var result = _extends({}, state, {
    current,
    dimensions: {
      draggables: dimensions.draggables,
      droppables: withUpdatedPlaceholders
    },
    impact: newImpact,
    viewport,
    scrollJumpRequest: scrollJumpRequest || null,
    forceShouldAnimate: scrollJumpRequest ? false : null
  });
  return result;
};
function getDraggables$1(ids, draggables) {
  return ids.map(function(id) {
    return draggables[id];
  });
}
var recompute = function(_ref) {
  var impact = _ref.impact, viewport = _ref.viewport, draggables = _ref.draggables, destination = _ref.destination, forceShouldAnimate = _ref.forceShouldAnimate;
  var last = impact.displaced;
  var afterDragging = getDraggables$1(last.all, draggables);
  var displaced = getDisplacementGroups({
    afterDragging,
    destination,
    displacedBy: impact.displacedBy,
    viewport: viewport.frame,
    forceShouldAnimate,
    last
  });
  return _extends({}, impact, {
    displaced
  });
};
var getClientBorderBoxCenter = function(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, droppable2 = _ref.droppable, draggables = _ref.draggables, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact,
    draggable: draggable2,
    draggables,
    droppable: droppable2,
    afterCritical
  });
  return getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter,
    draggable: draggable2,
    viewport
  });
};
var refreshSnap = function(_ref) {
  var state = _ref.state, forcedDimensions = _ref.dimensions, forcedViewport = _ref.viewport;
  !(state.movementMode === "SNAP") ? invariant(false) : void 0;
  var needsVisibilityCheck = state.impact;
  var viewport = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var draggables = dimensions.draggables, droppables = dimensions.droppables;
  var draggable2 = draggables[state.critical.draggable.id];
  var isOver = whatIsDraggedOver(needsVisibilityCheck);
  !isOver ? invariant(false) : void 0;
  var destination = droppables[isOver];
  var impact = recompute({
    impact: needsVisibilityCheck,
    viewport,
    destination,
    draggables
  });
  var clientSelection = getClientBorderBoxCenter({
    impact,
    draggable: draggable2,
    droppable: destination,
    draggables,
    viewport,
    afterCritical: state.afterCritical
  });
  return update({
    impact,
    clientSelection,
    state,
    dimensions,
    viewport
  });
};
var getHomeLocation = function(descriptor) {
  return {
    index: descriptor.index,
    droppableId: descriptor.droppableId
  };
};
var getLiftEffect = function(_ref) {
  var draggable2 = _ref.draggable, home2 = _ref.home, draggables = _ref.draggables, viewport = _ref.viewport;
  var displacedBy = getDisplacedBy(home2.axis, draggable2.displaceBy);
  var insideHome = getDraggablesInsideDroppable(home2.descriptor.id, draggables);
  var rawIndex = insideHome.indexOf(draggable2);
  !(rawIndex !== -1) ? invariant(false) : void 0;
  var afterDragging = insideHome.slice(rawIndex + 1);
  var effected = afterDragging.reduce(function(previous, item) {
    previous[item.descriptor.id] = true;
    return previous;
  }, {});
  var afterCritical = {
    inVirtualList: home2.descriptor.mode === "virtual",
    displacedBy,
    effected
  };
  var displaced = getDisplacementGroups({
    afterDragging,
    destination: home2,
    displacedBy,
    last: null,
    viewport: viewport.frame,
    forceShouldAnimate: false
  });
  var impact = {
    displaced,
    displacedBy,
    at: {
      type: "REORDER",
      destination: getHomeLocation(draggable2.descriptor)
    }
  };
  return {
    impact,
    afterCritical
  };
};
var patchDimensionMap = function(dimensions, updated) {
  return {
    draggables: dimensions.draggables,
    droppables: patchDroppableMap(dimensions.droppables, updated)
  };
};
var offsetDraggable = function(_ref) {
  var draggable2 = _ref.draggable, offset$1 = _ref.offset, initialWindowScroll = _ref.initialWindowScroll;
  var client = offset(draggable2.client, offset$1);
  var page = withScroll(client, initialWindowScroll);
  var moved = _extends({}, draggable2, {
    placeholder: _extends({}, draggable2.placeholder, {
      client
    }),
    client,
    page
  });
  return moved;
};
var getFrame = function(droppable2) {
  var frame = droppable2.frame;
  !frame ? invariant(false) : void 0;
  return frame;
};
var adjustAdditionsForScrollChanges = function(_ref) {
  var additions = _ref.additions, updatedDroppables = _ref.updatedDroppables, viewport = _ref.viewport;
  var windowScrollChange = viewport.scroll.diff.value;
  return additions.map(function(draggable2) {
    var droppableId = draggable2.descriptor.droppableId;
    var modified = updatedDroppables[droppableId];
    var frame = getFrame(modified);
    var droppableScrollChange = frame.scroll.diff.value;
    var totalChange = add(windowScrollChange, droppableScrollChange);
    var moved = offsetDraggable({
      draggable: draggable2,
      offset: totalChange,
      initialWindowScroll: viewport.scroll.initial
    });
    return moved;
  });
};
var publishWhileDraggingInVirtual = function(_ref) {
  var state = _ref.state, published = _ref.published;
  var withScrollChange = published.modified.map(function(update2) {
    var existing = state.dimensions.droppables[update2.droppableId];
    var scrolled = scrollDroppable(existing, update2.scroll);
    return scrolled;
  });
  var droppables = _extends({}, state.dimensions.droppables, {}, toDroppableMap(withScrollChange));
  var updatedAdditions = toDraggableMap(adjustAdditionsForScrollChanges({
    additions: published.additions,
    updatedDroppables: droppables,
    viewport: state.viewport
  }));
  var draggables = _extends({}, state.dimensions.draggables, {}, updatedAdditions);
  published.removals.forEach(function(id) {
    delete draggables[id];
  });
  var dimensions = {
    droppables,
    draggables
  };
  var wasOverId = whatIsDraggedOver(state.impact);
  var wasOver = wasOverId ? dimensions.droppables[wasOverId] : null;
  var draggable2 = dimensions.draggables[state.critical.draggable.id];
  var home2 = dimensions.droppables[state.critical.droppable.id];
  var _getLiftEffect = getLiftEffect({
    draggable: draggable2,
    home: home2,
    draggables,
    viewport: state.viewport
  }), onLiftImpact = _getLiftEffect.impact, afterCritical = _getLiftEffect.afterCritical;
  var previousImpact = wasOver && wasOver.isCombineEnabled ? state.impact : onLiftImpact;
  var impact = getDragImpact({
    pageOffset: state.current.page.offset,
    draggable: dimensions.draggables[state.critical.draggable.id],
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact,
    viewport: state.viewport,
    afterCritical
  });
  var draggingState = _extends({
    phase: "DRAGGING"
  }, state, {
    phase: "DRAGGING",
    impact,
    onLiftImpact,
    dimensions,
    afterCritical,
    forceShouldAnimate: false
  });
  if (state.phase === "COLLECTING") {
    return draggingState;
  }
  var dropPending3 = _extends({
    phase: "DROP_PENDING"
  }, draggingState, {
    phase: "DROP_PENDING",
    reason: state.reason,
    isWaiting: false
  });
  return dropPending3;
};
var isSnapping = function isSnapping2(state) {
  return state.movementMode === "SNAP";
};
var postDroppableChange = function postDroppableChange2(state, updated, isEnabledChanging) {
  var dimensions = patchDimensionMap(state.dimensions, updated);
  if (!isSnapping(state) || isEnabledChanging) {
    return update({
      state,
      dimensions
    });
  }
  return refreshSnap({
    state,
    dimensions
  });
};
function removeScrollJumpRequest(state) {
  if (state.isDragging && state.movementMode === "SNAP") {
    return _extends({
      phase: "DRAGGING"
    }, state, {
      scrollJumpRequest: null
    });
  }
  return state;
}
var idle = {
  phase: "IDLE",
  completed: null,
  shouldFlush: false
};
var reducer = function(state, action) {
  if (state === void 0) {
    state = idle;
  }
  if (action.type === "FLUSH") {
    return _extends({}, idle, {
      shouldFlush: true
    });
  }
  if (action.type === "INITIAL_PUBLISH") {
    !(state.phase === "IDLE") ? invariant(false) : void 0;
    var _action$payload = action.payload, critical = _action$payload.critical, clientSelection = _action$payload.clientSelection, viewport = _action$payload.viewport, dimensions = _action$payload.dimensions, movementMode = _action$payload.movementMode;
    var draggable2 = dimensions.draggables[critical.draggable.id];
    var home2 = dimensions.droppables[critical.droppable.id];
    var client = {
      selection: clientSelection,
      borderBoxCenter: draggable2.client.borderBox.center,
      offset: origin
    };
    var initial = {
      client,
      page: {
        selection: add(client.selection, viewport.scroll.initial),
        borderBoxCenter: add(client.selection, viewport.scroll.initial),
        offset: add(client.selection, viewport.scroll.diff.value)
      }
    };
    var isWindowScrollAllowed = toDroppableList(dimensions.droppables).every(function(item) {
      return !item.isFixedOnPage;
    });
    var _getLiftEffect = getLiftEffect({
      draggable: draggable2,
      home: home2,
      draggables: dimensions.draggables,
      viewport
    }), impact = _getLiftEffect.impact, afterCritical = _getLiftEffect.afterCritical;
    var result = {
      phase: "DRAGGING",
      isDragging: true,
      critical,
      movementMode,
      dimensions,
      initial,
      current: initial,
      isWindowScrollAllowed,
      impact,
      afterCritical,
      onLiftImpact: impact,
      viewport,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
    return result;
  }
  if (action.type === "COLLECTION_STARTING") {
    if (state.phase === "COLLECTING" || state.phase === "DROP_PENDING") {
      return state;
    }
    !(state.phase === "DRAGGING") ? invariant(false) : void 0;
    var _result = _extends({
      phase: "COLLECTING"
    }, state, {
      phase: "COLLECTING"
    });
    return _result;
  }
  if (action.type === "PUBLISH_WHILE_DRAGGING") {
    !(state.phase === "COLLECTING" || state.phase === "DROP_PENDING") ? invariant(false) : void 0;
    return publishWhileDraggingInVirtual({
      state,
      published: action.payload
    });
  }
  if (action.type === "MOVE") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    !isMovementAllowed(state) ? invariant(false) : void 0;
    var _clientSelection = action.payload.client;
    if (isEqual(_clientSelection, state.current.client.selection)) {
      return state;
    }
    return update({
      state,
      clientSelection: _clientSelection,
      impact: isSnapping(state) ? state.impact : null
    });
  }
  if (action.type === "UPDATE_DROPPABLE_SCROLL") {
    if (state.phase === "DROP_PENDING") {
      return removeScrollJumpRequest(state);
    }
    if (state.phase === "COLLECTING") {
      return removeScrollJumpRequest(state);
    }
    !isMovementAllowed(state) ? invariant(false) : void 0;
    var _action$payload2 = action.payload, id = _action$payload2.id, newScroll = _action$payload2.newScroll;
    var target = state.dimensions.droppables[id];
    if (!target) {
      return state;
    }
    var scrolled = scrollDroppable(target, newScroll);
    return postDroppableChange(state, scrolled, false);
  }
  if (action.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    !isMovementAllowed(state) ? invariant(false) : void 0;
    var _action$payload3 = action.payload, _id = _action$payload3.id, isEnabled = _action$payload3.isEnabled;
    var _target = state.dimensions.droppables[_id];
    !_target ? invariant(false) : void 0;
    !(_target.isEnabled !== isEnabled) ? invariant(false) : void 0;
    var updated = _extends({}, _target, {
      isEnabled
    });
    return postDroppableChange(state, updated, true);
  }
  if (action.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    !isMovementAllowed(state) ? invariant(false) : void 0;
    var _action$payload4 = action.payload, _id2 = _action$payload4.id, isCombineEnabled = _action$payload4.isCombineEnabled;
    var _target2 = state.dimensions.droppables[_id2];
    !_target2 ? invariant(false) : void 0;
    !(_target2.isCombineEnabled !== isCombineEnabled) ? invariant(false) : void 0;
    var _updated = _extends({}, _target2, {
      isCombineEnabled
    });
    return postDroppableChange(state, _updated, true);
  }
  if (action.type === "MOVE_BY_WINDOW_SCROLL") {
    if (state.phase === "DROP_PENDING" || state.phase === "DROP_ANIMATING") {
      return state;
    }
    !isMovementAllowed(state) ? invariant(false) : void 0;
    !state.isWindowScrollAllowed ? invariant(false) : void 0;
    var _newScroll = action.payload.newScroll;
    if (isEqual(state.viewport.scroll.current, _newScroll)) {
      return removeScrollJumpRequest(state);
    }
    var _viewport = scrollViewport(state.viewport, _newScroll);
    if (isSnapping(state)) {
      return refreshSnap({
        state,
        viewport: _viewport
      });
    }
    return update({
      state,
      viewport: _viewport
    });
  }
  if (action.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!isMovementAllowed(state)) {
      return state;
    }
    var maxScroll = action.payload.maxScroll;
    if (isEqual(maxScroll, state.viewport.scroll.max)) {
      return state;
    }
    var withMaxScroll3 = _extends({}, state.viewport, {
      scroll: _extends({}, state.viewport.scroll, {
        max: maxScroll
      })
    });
    return _extends({
      phase: "DRAGGING"
    }, state, {
      viewport: withMaxScroll3
    });
  }
  if (action.type === "MOVE_UP" || action.type === "MOVE_DOWN" || action.type === "MOVE_LEFT" || action.type === "MOVE_RIGHT") {
    if (state.phase === "COLLECTING" || state.phase === "DROP_PENDING") {
      return state;
    }
    !(state.phase === "DRAGGING") ? invariant(false) : void 0;
    var _result2 = moveInDirection({
      state,
      type: action.type
    });
    if (!_result2) {
      return state;
    }
    return update({
      state,
      impact: _result2.impact,
      clientSelection: _result2.clientSelection,
      scrollJumpRequest: _result2.scrollJumpRequest
    });
  }
  if (action.type === "DROP_PENDING") {
    var reason = action.payload.reason;
    !(state.phase === "COLLECTING") ? invariant(false) : void 0;
    var newState = _extends({
      phase: "DROP_PENDING"
    }, state, {
      phase: "DROP_PENDING",
      isWaiting: true,
      reason
    });
    return newState;
  }
  if (action.type === "DROP_ANIMATE") {
    var _action$payload5 = action.payload, completed = _action$payload5.completed, dropDuration = _action$payload5.dropDuration, newHomeClientOffset = _action$payload5.newHomeClientOffset;
    !(state.phase === "DRAGGING" || state.phase === "DROP_PENDING") ? invariant(false) : void 0;
    var _result3 = {
      phase: "DROP_ANIMATING",
      completed,
      dropDuration,
      newHomeClientOffset,
      dimensions: state.dimensions
    };
    return _result3;
  }
  if (action.type === "DROP_COMPLETE") {
    var _completed = action.payload.completed;
    return {
      phase: "IDLE",
      completed: _completed,
      shouldFlush: false
    };
  }
  return state;
};
var beforeInitialCapture = function beforeInitialCapture2(args) {
  return {
    type: "BEFORE_INITIAL_CAPTURE",
    payload: args
  };
};
var lift = function lift2(args) {
  return {
    type: "LIFT",
    payload: args
  };
};
var initialPublish = function initialPublish2(args) {
  return {
    type: "INITIAL_PUBLISH",
    payload: args
  };
};
var publishWhileDragging = function publishWhileDragging2(args) {
  return {
    type: "PUBLISH_WHILE_DRAGGING",
    payload: args
  };
};
var collectionStarting = function collectionStarting2() {
  return {
    type: "COLLECTION_STARTING",
    payload: null
  };
};
var updateDroppableScroll = function updateDroppableScroll2(args) {
  return {
    type: "UPDATE_DROPPABLE_SCROLL",
    payload: args
  };
};
var updateDroppableIsEnabled = function updateDroppableIsEnabled2(args) {
  return {
    type: "UPDATE_DROPPABLE_IS_ENABLED",
    payload: args
  };
};
var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled2(args) {
  return {
    type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
    payload: args
  };
};
var move = function move2(args) {
  return {
    type: "MOVE",
    payload: args
  };
};
var moveByWindowScroll = function moveByWindowScroll2(args) {
  return {
    type: "MOVE_BY_WINDOW_SCROLL",
    payload: args
  };
};
var updateViewportMaxScroll = function updateViewportMaxScroll2(args) {
  return {
    type: "UPDATE_VIEWPORT_MAX_SCROLL",
    payload: args
  };
};
var moveUp = function moveUp2() {
  return {
    type: "MOVE_UP",
    payload: null
  };
};
var moveDown = function moveDown2() {
  return {
    type: "MOVE_DOWN",
    payload: null
  };
};
var moveRight = function moveRight2() {
  return {
    type: "MOVE_RIGHT",
    payload: null
  };
};
var moveLeft = function moveLeft2() {
  return {
    type: "MOVE_LEFT",
    payload: null
  };
};
var flush = function flush2() {
  return {
    type: "FLUSH",
    payload: null
  };
};
var animateDrop = function animateDrop2(args) {
  return {
    type: "DROP_ANIMATE",
    payload: args
  };
};
var completeDrop = function completeDrop2(args) {
  return {
    type: "DROP_COMPLETE",
    payload: args
  };
};
var drop = function drop2(args) {
  return {
    type: "DROP",
    payload: args
  };
};
var dropPending = function dropPending2(args) {
  return {
    type: "DROP_PENDING",
    payload: args
  };
};
var dropAnimationFinished = function dropAnimationFinished2() {
  return {
    type: "DROP_ANIMATION_FINISHED",
    payload: null
  };
};
var lift$1 = function(marshal) {
  return function(_ref) {
    var getState = _ref.getState, dispatch = _ref.dispatch;
    return function(next) {
      return function(action) {
        if (action.type !== "LIFT") {
          next(action);
          return;
        }
        var _action$payload = action.payload, id = _action$payload.id, clientSelection = _action$payload.clientSelection, movementMode = _action$payload.movementMode;
        var initial = getState();
        if (initial.phase === "DROP_ANIMATING") {
          dispatch(completeDrop({
            completed: initial.completed
          }));
        }
        !(getState().phase === "IDLE") ? invariant(false) : void 0;
        dispatch(flush());
        dispatch(beforeInitialCapture({
          draggableId: id,
          movementMode
        }));
        var scrollOptions = {
          shouldPublishImmediately: movementMode === "SNAP"
        };
        var request = {
          draggableId: id,
          scrollOptions
        };
        var _marshal$startPublish = marshal.startPublishing(request), critical = _marshal$startPublish.critical, dimensions = _marshal$startPublish.dimensions, viewport = _marshal$startPublish.viewport;
        dispatch(initialPublish({
          critical,
          dimensions,
          clientSelection,
          movementMode,
          viewport
        }));
      };
    };
  };
};
var style = function(marshal) {
  return function() {
    return function(next) {
      return function(action) {
        if (action.type === "INITIAL_PUBLISH") {
          marshal.dragging();
        }
        if (action.type === "DROP_ANIMATE") {
          marshal.dropping(action.payload.completed.result.reason);
        }
        if (action.type === "FLUSH" || action.type === "DROP_COMPLETE") {
          marshal.resting();
        }
        next(action);
      };
    };
  };
};
var curves = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
};
var combine = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
};
var timings = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
};
var outOfTheWayTiming = timings.outOfTheWay + "s " + curves.outOfTheWay;
var transitions = {
  fluid: "opacity " + outOfTheWayTiming,
  snap: "transform " + outOfTheWayTiming + ", opacity " + outOfTheWayTiming,
  drop: function drop3(duration) {
    var timing = duration + "s " + curves.drop;
    return "transform " + timing + ", opacity " + timing;
  },
  outOfTheWay: "transform " + outOfTheWayTiming,
  placeholder: "height " + outOfTheWayTiming + ", width " + outOfTheWayTiming + ", margin " + outOfTheWayTiming
};
var moveTo = function moveTo2(offset3) {
  return isEqual(offset3, origin) ? null : "translate(" + offset3.x + "px, " + offset3.y + "px)";
};
var transforms = {
  moveTo,
  drop: function drop4(offset3, isCombining) {
    var translate = moveTo(offset3);
    if (!translate) {
      return null;
    }
    if (!isCombining) {
      return translate;
    }
    return translate + " scale(" + combine.scale.drop + ")";
  }
};
var minDropTime = timings.minDropTime, maxDropTime = timings.maxDropTime;
var dropTimeRange = maxDropTime - minDropTime;
var maxDropTimeAtDistance = 1500;
var cancelDropModifier = 0.6;
var getDropDuration = function(_ref) {
  var current = _ref.current, destination = _ref.destination, reason = _ref.reason;
  var distance$1 = distance(current, destination);
  if (distance$1 <= 0) {
    return minDropTime;
  }
  if (distance$1 >= maxDropTimeAtDistance) {
    return maxDropTime;
  }
  var percentage = distance$1 / maxDropTimeAtDistance;
  var duration = minDropTime + dropTimeRange * percentage;
  var withDuration = reason === "CANCEL" ? duration * cancelDropModifier : duration;
  return Number(withDuration.toFixed(2));
};
var getNewHomeClientOffset = function(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, dimensions = _ref.dimensions, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  var draggables = dimensions.draggables, droppables = dimensions.droppables;
  var droppableId = whatIsDraggedOver(impact);
  var destination = droppableId ? droppables[droppableId] : null;
  var home2 = droppables[draggable2.descriptor.droppableId];
  var newClientCenter = getClientBorderBoxCenter({
    impact,
    draggable: draggable2,
    draggables,
    afterCritical,
    droppable: destination || home2,
    viewport
  });
  var offset3 = subtract(newClientCenter, draggable2.client.borderBox.center);
  return offset3;
};
var getDropImpact = function(_ref) {
  var draggables = _ref.draggables, reason = _ref.reason, lastImpact = _ref.lastImpact, home2 = _ref.home, viewport = _ref.viewport, onLiftImpact = _ref.onLiftImpact;
  if (!lastImpact.at || reason !== "DROP") {
    var recomputedHomeImpact = recompute({
      draggables,
      impact: onLiftImpact,
      destination: home2,
      viewport,
      forceShouldAnimate: true
    });
    return {
      impact: recomputedHomeImpact,
      didDropInsideDroppable: false
    };
  }
  if (lastImpact.at.type === "REORDER") {
    return {
      impact: lastImpact,
      didDropInsideDroppable: true
    };
  }
  var withoutMovement = _extends({}, lastImpact, {
    displaced: emptyGroups
  });
  return {
    impact: withoutMovement,
    didDropInsideDroppable: true
  };
};
var drop$1 = function(_ref) {
  var getState = _ref.getState, dispatch = _ref.dispatch;
  return function(next) {
    return function(action) {
      if (action.type !== "DROP") {
        next(action);
        return;
      }
      var state = getState();
      var reason = action.payload.reason;
      if (state.phase === "COLLECTING") {
        dispatch(dropPending({
          reason
        }));
        return;
      }
      if (state.phase === "IDLE") {
        return;
      }
      var isWaitingForDrop = state.phase === "DROP_PENDING" && state.isWaiting;
      !!isWaitingForDrop ? invariant(false) : void 0;
      !(state.phase === "DRAGGING" || state.phase === "DROP_PENDING") ? invariant(false) : void 0;
      var critical = state.critical;
      var dimensions = state.dimensions;
      var draggable2 = dimensions.draggables[state.critical.draggable.id];
      var _getDropImpact = getDropImpact({
        reason,
        lastImpact: state.impact,
        afterCritical: state.afterCritical,
        onLiftImpact: state.onLiftImpact,
        home: state.dimensions.droppables[state.critical.droppable.id],
        viewport: state.viewport,
        draggables: state.dimensions.draggables
      }), impact = _getDropImpact.impact, didDropInsideDroppable = _getDropImpact.didDropInsideDroppable;
      var destination = didDropInsideDroppable ? tryGetDestination(impact) : null;
      var combine2 = didDropInsideDroppable ? tryGetCombine(impact) : null;
      var source = {
        index: critical.draggable.index,
        droppableId: critical.droppable.id
      };
      var result = {
        draggableId: draggable2.descriptor.id,
        type: draggable2.descriptor.type,
        source,
        reason,
        mode: state.movementMode,
        destination,
        combine: combine2
      };
      var newHomeClientOffset = getNewHomeClientOffset({
        impact,
        draggable: draggable2,
        dimensions,
        viewport: state.viewport,
        afterCritical: state.afterCritical
      });
      var completed = {
        critical: state.critical,
        afterCritical: state.afterCritical,
        result,
        impact
      };
      var isAnimationRequired = !isEqual(state.current.client.offset, newHomeClientOffset) || Boolean(result.combine);
      if (!isAnimationRequired) {
        dispatch(completeDrop({
          completed
        }));
        return;
      }
      var dropDuration = getDropDuration({
        current: state.current.client.offset,
        destination: newHomeClientOffset,
        reason
      });
      var args = {
        newHomeClientOffset,
        dropDuration,
        completed
      };
      dispatch(animateDrop(args));
    };
  };
};
var getWindowScroll = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};
function getWindowScrollBinding(update2) {
  return {
    eventName: "scroll",
    options: {
      passive: true,
      capture: false
    },
    fn: function fn(event) {
      if (event.target !== window && event.target !== window.document) {
        return;
      }
      update2();
    }
  };
}
function getScrollListener(_ref) {
  var onWindowScroll = _ref.onWindowScroll;
  function updateScroll() {
    onWindowScroll(getWindowScroll());
  }
  var scheduled = rafSchd$1(updateScroll);
  var binding = getWindowScrollBinding(scheduled);
  var unbind = noop;
  function isActive() {
    return unbind !== noop;
  }
  function start() {
    !!isActive() ? invariant(false) : void 0;
    unbind = bindEvents(window, [binding]);
  }
  function stop() {
    !isActive() ? invariant(false) : void 0;
    scheduled.cancel();
    unbind();
    unbind = noop;
  }
  return {
    start,
    stop,
    isActive
  };
}
var shouldEnd = function shouldEnd2(action) {
  return action.type === "DROP_COMPLETE" || action.type === "DROP_ANIMATE" || action.type === "FLUSH";
};
var scrollListener = function(store) {
  var listener = getScrollListener({
    onWindowScroll: function onWindowScroll(newScroll) {
      store.dispatch(moveByWindowScroll({
        newScroll
      }));
    }
  });
  return function(next) {
    return function(action) {
      if (!listener.isActive() && action.type === "INITIAL_PUBLISH") {
        listener.start();
      }
      if (listener.isActive() && shouldEnd(action)) {
        listener.stop();
      }
      next(action);
    };
  };
};
var getExpiringAnnounce = function(announce) {
  var wasCalled = false;
  var isExpired = false;
  var timeoutId = setTimeout(function() {
    isExpired = true;
  });
  var result = function result2(message) {
    if (wasCalled) {
      return;
    }
    if (isExpired) {
      return;
    }
    wasCalled = true;
    announce(message);
    clearTimeout(timeoutId);
  };
  result.wasCalled = function() {
    return wasCalled;
  };
  return result;
};
var getAsyncMarshal = function() {
  var entries = [];
  var execute3 = function execute4(timerId) {
    var index2 = findIndex(entries, function(item) {
      return item.timerId === timerId;
    });
    !(index2 !== -1) ? invariant(false) : void 0;
    var _entries$splice = entries.splice(index2, 1), entry = _entries$splice[0];
    entry.callback();
  };
  var add3 = function add4(fn) {
    var timerId = setTimeout(function() {
      return execute3(timerId);
    });
    var entry = {
      timerId,
      callback: fn
    };
    entries.push(entry);
  };
  var flush3 = function flush4() {
    if (!entries.length) {
      return;
    }
    var shallow = [].concat(entries);
    entries.length = 0;
    shallow.forEach(function(entry) {
      clearTimeout(entry.timerId);
      entry.callback();
    });
  };
  return {
    add: add3,
    flush: flush3
  };
};
var areLocationsEqual = function areLocationsEqual2(first, second) {
  if (first == null && second == null) {
    return true;
  }
  if (first == null || second == null) {
    return false;
  }
  return first.droppableId === second.droppableId && first.index === second.index;
};
var isCombineEqual = function isCombineEqual2(first, second) {
  if (first == null && second == null) {
    return true;
  }
  if (first == null || second == null) {
    return false;
  }
  return first.draggableId === second.draggableId && first.droppableId === second.droppableId;
};
var isCriticalEqual = function isCriticalEqual2(first, second) {
  if (first === second) {
    return true;
  }
  var isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
  var isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
  return isDraggableEqual && isDroppableEqual;
};
var withTimings = function withTimings2(key, fn) {
  fn();
};
var getDragStart = function getDragStart2(critical, mode) {
  return {
    draggableId: critical.draggable.id,
    type: critical.droppable.type,
    source: {
      droppableId: critical.droppable.id,
      index: critical.draggable.index
    },
    mode
  };
};
var execute = function execute2(responder, data2, announce, getDefaultMessage) {
  if (!responder) {
    announce(getDefaultMessage(data2));
    return;
  }
  var willExpire = getExpiringAnnounce(announce);
  var provided = {
    announce: willExpire
  };
  responder(data2, provided);
  if (!willExpire.wasCalled()) {
    announce(getDefaultMessage(data2));
  }
};
var getPublisher = function(getResponders, announce) {
  var asyncMarshal = getAsyncMarshal();
  var dragging = null;
  var beforeCapture = function beforeCapture2(draggableId, mode) {
    !!dragging ? invariant(false) : void 0;
    withTimings("onBeforeCapture", function() {
      var fn = getResponders().onBeforeCapture;
      if (fn) {
        var before = {
          draggableId,
          mode
        };
        fn(before);
      }
    });
  };
  var beforeStart = function beforeStart2(critical, mode) {
    !!dragging ? invariant(false) : void 0;
    withTimings("onBeforeDragStart", function() {
      var fn = getResponders().onBeforeDragStart;
      if (fn) {
        fn(getDragStart(critical, mode));
      }
    });
  };
  var start = function start2(critical, mode) {
    !!dragging ? invariant(false) : void 0;
    var data2 = getDragStart(critical, mode);
    dragging = {
      mode,
      lastCritical: critical,
      lastLocation: data2.source,
      lastCombine: null
    };
    asyncMarshal.add(function() {
      withTimings("onDragStart", function() {
        return execute(getResponders().onDragStart, data2, announce, preset.onDragStart);
      });
    });
  };
  var update2 = function update3(critical, impact) {
    var location = tryGetDestination(impact);
    var combine2 = tryGetCombine(impact);
    !dragging ? invariant(false) : void 0;
    var hasCriticalChanged = !isCriticalEqual(critical, dragging.lastCritical);
    if (hasCriticalChanged) {
      dragging.lastCritical = critical;
    }
    var hasLocationChanged = !areLocationsEqual(dragging.lastLocation, location);
    if (hasLocationChanged) {
      dragging.lastLocation = location;
    }
    var hasGroupingChanged = !isCombineEqual(dragging.lastCombine, combine2);
    if (hasGroupingChanged) {
      dragging.lastCombine = combine2;
    }
    if (!hasCriticalChanged && !hasLocationChanged && !hasGroupingChanged) {
      return;
    }
    var data2 = _extends({}, getDragStart(critical, dragging.mode), {
      combine: combine2,
      destination: location
    });
    asyncMarshal.add(function() {
      withTimings("onDragUpdate", function() {
        return execute(getResponders().onDragUpdate, data2, announce, preset.onDragUpdate);
      });
    });
  };
  var flush3 = function flush4() {
    !dragging ? invariant(false) : void 0;
    asyncMarshal.flush();
  };
  var drop5 = function drop6(result) {
    !dragging ? invariant(false) : void 0;
    dragging = null;
    withTimings("onDragEnd", function() {
      return execute(getResponders().onDragEnd, result, announce, preset.onDragEnd);
    });
  };
  var abort = function abort2() {
    if (!dragging) {
      return;
    }
    var result = _extends({}, getDragStart(dragging.lastCritical, dragging.mode), {
      combine: null,
      destination: null,
      reason: "CANCEL"
    });
    drop5(result);
  };
  return {
    beforeCapture,
    beforeStart,
    start,
    update: update2,
    flush: flush3,
    drop: drop5,
    abort
  };
};
var responders = function(getResponders, announce) {
  var publisher = getPublisher(getResponders, announce);
  return function(store) {
    return function(next) {
      return function(action) {
        if (action.type === "BEFORE_INITIAL_CAPTURE") {
          publisher.beforeCapture(action.payload.draggableId, action.payload.movementMode);
          return;
        }
        if (action.type === "INITIAL_PUBLISH") {
          var critical = action.payload.critical;
          publisher.beforeStart(critical, action.payload.movementMode);
          next(action);
          publisher.start(critical, action.payload.movementMode);
          return;
        }
        if (action.type === "DROP_COMPLETE") {
          var result = action.payload.completed.result;
          publisher.flush();
          next(action);
          publisher.drop(result);
          return;
        }
        next(action);
        if (action.type === "FLUSH") {
          publisher.abort();
          return;
        }
        var state = store.getState();
        if (state.phase === "DRAGGING") {
          publisher.update(state.critical, state.impact);
        }
      };
    };
  };
};
var dropAnimationFinish = function(store) {
  return function(next) {
    return function(action) {
      if (action.type !== "DROP_ANIMATION_FINISHED") {
        next(action);
        return;
      }
      var state = store.getState();
      !(state.phase === "DROP_ANIMATING") ? invariant(false) : void 0;
      store.dispatch(completeDrop({
        completed: state.completed
      }));
    };
  };
};
var dropAnimationFlushOnScroll = function(store) {
  var unbind = null;
  var frameId = null;
  function clear() {
    if (frameId) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }
    if (unbind) {
      unbind();
      unbind = null;
    }
  }
  return function(next) {
    return function(action) {
      if (action.type === "FLUSH" || action.type === "DROP_COMPLETE" || action.type === "DROP_ANIMATION_FINISHED") {
        clear();
      }
      next(action);
      if (action.type !== "DROP_ANIMATE") {
        return;
      }
      var binding = {
        eventName: "scroll",
        options: {
          capture: true,
          passive: false,
          once: true
        },
        fn: function flushDropAnimation() {
          var state = store.getState();
          if (state.phase === "DROP_ANIMATING") {
            store.dispatch(dropAnimationFinished());
          }
        }
      };
      frameId = requestAnimationFrame(function() {
        frameId = null;
        unbind = bindEvents(window, [binding]);
      });
    };
  };
};
var dimensionMarshalStopper = function(marshal) {
  return function() {
    return function(next) {
      return function(action) {
        if (action.type === "DROP_COMPLETE" || action.type === "FLUSH" || action.type === "DROP_ANIMATE") {
          marshal.stopPublishing();
        }
        next(action);
      };
    };
  };
};
var focus = function(marshal) {
  var isWatching = false;
  return function() {
    return function(next) {
      return function(action) {
        if (action.type === "INITIAL_PUBLISH") {
          isWatching = true;
          marshal.tryRecordFocus(action.payload.critical.draggable.id);
          next(action);
          marshal.tryRestoreFocusRecorded();
          return;
        }
        next(action);
        if (!isWatching) {
          return;
        }
        if (action.type === "FLUSH") {
          isWatching = false;
          marshal.tryRestoreFocusRecorded();
          return;
        }
        if (action.type === "DROP_COMPLETE") {
          isWatching = false;
          var result = action.payload.completed.result;
          if (result.combine) {
            marshal.tryShiftRecord(result.draggableId, result.combine.draggableId);
          }
          marshal.tryRestoreFocusRecorded();
        }
      };
    };
  };
};
var shouldStop = function shouldStop2(action) {
  return action.type === "DROP_COMPLETE" || action.type === "DROP_ANIMATE" || action.type === "FLUSH";
};
var autoScroll = function(autoScroller) {
  return function(store) {
    return function(next) {
      return function(action) {
        if (shouldStop(action)) {
          autoScroller.stop();
          next(action);
          return;
        }
        if (action.type === "INITIAL_PUBLISH") {
          next(action);
          var state = store.getState();
          !(state.phase === "DRAGGING") ? invariant(false) : void 0;
          autoScroller.start(state);
          return;
        }
        next(action);
        autoScroller.scroll(store.getState());
      };
    };
  };
};
var pendingDrop = function(store) {
  return function(next) {
    return function(action) {
      next(action);
      if (action.type !== "PUBLISH_WHILE_DRAGGING") {
        return;
      }
      var postActionState = store.getState();
      if (postActionState.phase !== "DROP_PENDING") {
        return;
      }
      if (postActionState.isWaiting) {
        return;
      }
      store.dispatch(drop({
        reason: postActionState.reason
      }));
    };
  };
};
var composeEnhancers = compose;
var createStore = function(_ref) {
  var dimensionMarshal = _ref.dimensionMarshal, focusMarshal = _ref.focusMarshal, styleMarshal = _ref.styleMarshal, getResponders = _ref.getResponders, announce = _ref.announce, autoScroller = _ref.autoScroller;
  return createStore$1(reducer, composeEnhancers(applyMiddleware(style(styleMarshal), dimensionMarshalStopper(dimensionMarshal), lift$1(dimensionMarshal), drop$1, dropAnimationFinish, dropAnimationFlushOnScroll, pendingDrop, autoScroll(autoScroller), scrollListener, focus(focusMarshal), responders(getResponders, announce))));
};
var clean$1 = function clean() {
  return {
    additions: {},
    removals: {},
    modified: {}
  };
};
function createPublisher(_ref) {
  var registry = _ref.registry, callbacks = _ref.callbacks;
  var staging = clean$1();
  var frameId = null;
  var collect = function collect2() {
    if (frameId) {
      return;
    }
    callbacks.collectionStarting();
    frameId = requestAnimationFrame(function() {
      frameId = null;
      var _staging = staging, additions = _staging.additions, removals = _staging.removals, modified = _staging.modified;
      var added = Object.keys(additions).map(function(id) {
        return registry.draggable.getById(id).getDimension(origin);
      }).sort(function(a, b2) {
        return a.descriptor.index - b2.descriptor.index;
      });
      var updated = Object.keys(modified).map(function(id) {
        var entry = registry.droppable.getById(id);
        var scroll3 = entry.callbacks.getScrollWhileDragging();
        return {
          droppableId: id,
          scroll: scroll3
        };
      });
      var result = {
        additions: added,
        removals: Object.keys(removals),
        modified: updated
      };
      staging = clean$1();
      callbacks.publish(result);
    });
  };
  var add3 = function add4(entry) {
    var id = entry.descriptor.id;
    staging.additions[id] = entry;
    staging.modified[entry.descriptor.droppableId] = true;
    if (staging.removals[id]) {
      delete staging.removals[id];
    }
    collect();
  };
  var remove = function remove2(entry) {
    var descriptor = entry.descriptor;
    staging.removals[descriptor.id] = true;
    staging.modified[descriptor.droppableId] = true;
    if (staging.additions[descriptor.id]) {
      delete staging.additions[descriptor.id];
    }
    collect();
  };
  var stop = function stop2() {
    if (!frameId) {
      return;
    }
    cancelAnimationFrame(frameId);
    frameId = null;
    staging = clean$1();
  };
  return {
    add: add3,
    remove,
    stop
  };
}
var getMaxScroll = function(_ref) {
  var scrollHeight = _ref.scrollHeight, scrollWidth = _ref.scrollWidth, height = _ref.height, width = _ref.width;
  var maxScroll = subtract({
    x: scrollWidth,
    y: scrollHeight
  }, {
    x: width,
    y: height
  });
  var adjustedMaxScroll = {
    x: Math.max(0, maxScroll.x),
    y: Math.max(0, maxScroll.y)
  };
  return adjustedMaxScroll;
};
var getDocumentElement = function() {
  var doc = document.documentElement;
  !doc ? invariant(false) : void 0;
  return doc;
};
var getMaxWindowScroll = function() {
  var doc = getDocumentElement();
  var maxScroll = getMaxScroll({
    scrollHeight: doc.scrollHeight,
    scrollWidth: doc.scrollWidth,
    width: doc.clientWidth,
    height: doc.clientHeight
  });
  return maxScroll;
};
var getViewport = function() {
  var scroll3 = getWindowScroll();
  var maxScroll = getMaxWindowScroll();
  var top = scroll3.y;
  var left = scroll3.x;
  var doc = getDocumentElement();
  var width = doc.clientWidth;
  var height = doc.clientHeight;
  var right = left + width;
  var bottom = top + height;
  var frame = getRect({
    top,
    left,
    right,
    bottom
  });
  var viewport = {
    frame,
    scroll: {
      initial: scroll3,
      current: scroll3,
      max: maxScroll,
      diff: {
        value: origin,
        displacement: origin
      }
    }
  };
  return viewport;
};
var getInitialPublish = function(_ref) {
  var critical = _ref.critical, scrollOptions = _ref.scrollOptions, registry = _ref.registry;
  var viewport = getViewport();
  var windowScroll = viewport.scroll.current;
  var home2 = critical.droppable;
  var droppables = registry.droppable.getAllByType(home2.type).map(function(entry) {
    return entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions);
  });
  var draggables = registry.draggable.getAllByType(critical.draggable.type).map(function(entry) {
    return entry.getDimension(windowScroll);
  });
  var dimensions = {
    draggables: toDraggableMap(draggables),
    droppables: toDroppableMap(droppables)
  };
  var result = {
    dimensions,
    critical,
    viewport
  };
  return result;
};
function shouldPublishUpdate(registry, dragging, entry) {
  if (entry.descriptor.id === dragging.id) {
    return false;
  }
  if (entry.descriptor.type !== dragging.type) {
    return false;
  }
  var home2 = registry.droppable.getById(entry.descriptor.droppableId);
  if (home2.descriptor.mode !== "virtual") {
    return false;
  }
  return true;
}
var createDimensionMarshal = function(registry, callbacks) {
  var collection = null;
  var publisher = createPublisher({
    callbacks: {
      publish: callbacks.publishWhileDragging,
      collectionStarting: callbacks.collectionStarting
    },
    registry
  });
  var updateDroppableIsEnabled3 = function updateDroppableIsEnabled4(id, isEnabled) {
    !registry.droppable.exists(id) ? invariant(false) : void 0;
    if (!collection) {
      return;
    }
    callbacks.updateDroppableIsEnabled({
      id,
      isEnabled
    });
  };
  var updateDroppableIsCombineEnabled3 = function updateDroppableIsCombineEnabled4(id, isCombineEnabled) {
    if (!collection) {
      return;
    }
    !registry.droppable.exists(id) ? invariant(false) : void 0;
    callbacks.updateDroppableIsCombineEnabled({
      id,
      isCombineEnabled
    });
  };
  var updateDroppableScroll3 = function updateDroppableScroll4(id, newScroll) {
    if (!collection) {
      return;
    }
    !registry.droppable.exists(id) ? invariant(false) : void 0;
    callbacks.updateDroppableScroll({
      id,
      newScroll
    });
  };
  var scrollDroppable2 = function scrollDroppable3(id, change) {
    if (!collection) {
      return;
    }
    registry.droppable.getById(id).callbacks.scroll(change);
  };
  var stopPublishing = function stopPublishing2() {
    if (!collection) {
      return;
    }
    publisher.stop();
    var home2 = collection.critical.droppable;
    registry.droppable.getAllByType(home2.type).forEach(function(entry) {
      return entry.callbacks.dragStopped();
    });
    collection.unsubscribe();
    collection = null;
  };
  var subscriber = function subscriber2(event) {
    !collection ? invariant(false) : void 0;
    var dragging = collection.critical.draggable;
    if (event.type === "ADDITION") {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.add(event.value);
      }
    }
    if (event.type === "REMOVAL") {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.remove(event.value);
      }
    }
  };
  var startPublishing = function startPublishing2(request) {
    !!collection ? invariant(false) : void 0;
    var entry = registry.draggable.getById(request.draggableId);
    var home2 = registry.droppable.getById(entry.descriptor.droppableId);
    var critical = {
      draggable: entry.descriptor,
      droppable: home2.descriptor
    };
    var unsubscribe = registry.subscribe(subscriber);
    collection = {
      critical,
      unsubscribe
    };
    return getInitialPublish({
      critical,
      registry,
      scrollOptions: request.scrollOptions
    });
  };
  var marshal = {
    updateDroppableIsEnabled: updateDroppableIsEnabled3,
    updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled3,
    scrollDroppable: scrollDroppable2,
    updateDroppableScroll: updateDroppableScroll3,
    startPublishing,
    stopPublishing
  };
  return marshal;
};
var canStartDrag = function(state, id) {
  if (state.phase === "IDLE") {
    return true;
  }
  if (state.phase !== "DROP_ANIMATING") {
    return false;
  }
  if (state.completed.result.draggableId === id) {
    return false;
  }
  return state.completed.result.reason === "DROP";
};
var scrollWindow = function(change) {
  window.scrollBy(change.x, change.y);
};
var getScrollableDroppables = memoizeOne(function(droppables) {
  return toDroppableList(droppables).filter(function(droppable2) {
    if (!droppable2.isEnabled) {
      return false;
    }
    if (!droppable2.frame) {
      return false;
    }
    return true;
  });
});
var getScrollableDroppableOver = function getScrollableDroppableOver2(target, droppables) {
  var maybe = find(getScrollableDroppables(droppables), function(droppable2) {
    !droppable2.frame ? invariant(false) : void 0;
    return isPositionInFrame(droppable2.frame.pageMarginBox)(target);
  });
  return maybe;
};
var getBestScrollableDroppable = function(_ref) {
  var center = _ref.center, destination = _ref.destination, droppables = _ref.droppables;
  if (destination) {
    var _dimension = droppables[destination];
    if (!_dimension.frame) {
      return null;
    }
    return _dimension;
  }
  var dimension = getScrollableDroppableOver(center, droppables);
  return dimension;
};
var config = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: function ease(percentage) {
    return Math.pow(percentage, 2);
  },
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  }
};
var getDistanceThresholds = function(container, axis) {
  var startScrollingFrom = container[axis.size] * config.startFromPercentage;
  var maxScrollValueAt = container[axis.size] * config.maxScrollAtPercentage;
  var thresholds = {
    startScrollingFrom,
    maxScrollValueAt
  };
  return thresholds;
};
var getPercentage = function(_ref) {
  var startOfRange = _ref.startOfRange, endOfRange = _ref.endOfRange, current = _ref.current;
  var range = endOfRange - startOfRange;
  if (range === 0) {
    return 0;
  }
  var currentInRange = current - startOfRange;
  var percentage = currentInRange / range;
  return percentage;
};
var minScroll = 1;
var getValueFromDistance = function(distanceToEdge, thresholds) {
  if (distanceToEdge > thresholds.startScrollingFrom) {
    return 0;
  }
  if (distanceToEdge <= thresholds.maxScrollValueAt) {
    return config.maxPixelScroll;
  }
  if (distanceToEdge === thresholds.startScrollingFrom) {
    return minScroll;
  }
  var percentageFromMaxScrollValueAt = getPercentage({
    startOfRange: thresholds.maxScrollValueAt,
    endOfRange: thresholds.startScrollingFrom,
    current: distanceToEdge
  });
  var percentageFromStartScrollingFrom = 1 - percentageFromMaxScrollValueAt;
  var scroll3 = config.maxPixelScroll * config.ease(percentageFromStartScrollingFrom);
  return Math.ceil(scroll3);
};
var accelerateAt = config.durationDampening.accelerateAt;
var stopAt = config.durationDampening.stopDampeningAt;
var dampenValueByTime = function(proposedScroll, dragStartTime) {
  var startOfRange = dragStartTime;
  var endOfRange = stopAt;
  var now2 = Date.now();
  var runTime = now2 - startOfRange;
  if (runTime >= stopAt) {
    return proposedScroll;
  }
  if (runTime < accelerateAt) {
    return minScroll;
  }
  var betweenAccelerateAtAndStopAtPercentage = getPercentage({
    startOfRange: accelerateAt,
    endOfRange,
    current: runTime
  });
  var scroll3 = proposedScroll * config.ease(betweenAccelerateAtAndStopAtPercentage);
  return Math.ceil(scroll3);
};
var getValue = function(_ref) {
  var distanceToEdge = _ref.distanceToEdge, thresholds = _ref.thresholds, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll3 = getValueFromDistance(distanceToEdge, thresholds);
  if (scroll3 === 0) {
    return 0;
  }
  if (!shouldUseTimeDampening) {
    return scroll3;
  }
  return Math.max(dampenValueByTime(scroll3, dragStartTime), minScroll);
};
var getScrollOnAxis = function(_ref) {
  var container = _ref.container, distanceToEdges = _ref.distanceToEdges, dragStartTime = _ref.dragStartTime, axis = _ref.axis, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var thresholds = getDistanceThresholds(container, axis);
  var isCloserToEnd = distanceToEdges[axis.end] < distanceToEdges[axis.start];
  if (isCloserToEnd) {
    return getValue({
      distanceToEdge: distanceToEdges[axis.end],
      thresholds,
      dragStartTime,
      shouldUseTimeDampening
    });
  }
  return -1 * getValue({
    distanceToEdge: distanceToEdges[axis.start],
    thresholds,
    dragStartTime,
    shouldUseTimeDampening
  });
};
var adjustForSizeLimits = function(_ref) {
  var container = _ref.container, subject = _ref.subject, proposedScroll = _ref.proposedScroll;
  var isTooBigVertically = subject.height > container.height;
  var isTooBigHorizontally = subject.width > container.width;
  if (!isTooBigHorizontally && !isTooBigVertically) {
    return proposedScroll;
  }
  if (isTooBigHorizontally && isTooBigVertically) {
    return null;
  }
  return {
    x: isTooBigHorizontally ? 0 : proposedScroll.x,
    y: isTooBigVertically ? 0 : proposedScroll.y
  };
};
var clean$2 = apply(function(value2) {
  return value2 === 0 ? 0 : value2;
});
var getScroll = function(_ref) {
  var dragStartTime = _ref.dragStartTime, container = _ref.container, subject = _ref.subject, center = _ref.center, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var distanceToEdges = {
    top: center.y - container.top,
    right: container.right - center.x,
    bottom: container.bottom - center.y,
    left: center.x - container.left
  };
  var y2 = getScrollOnAxis({
    container,
    distanceToEdges,
    dragStartTime,
    axis: vertical,
    shouldUseTimeDampening
  });
  var x2 = getScrollOnAxis({
    container,
    distanceToEdges,
    dragStartTime,
    axis: horizontal,
    shouldUseTimeDampening
  });
  var required = clean$2({
    x: x2,
    y: y2
  });
  if (isEqual(required, origin)) {
    return null;
  }
  var limited = adjustForSizeLimits({
    container,
    subject,
    proposedScroll: required
  });
  if (!limited) {
    return null;
  }
  return isEqual(limited, origin) ? null : limited;
};
var smallestSigned = apply(function(value2) {
  if (value2 === 0) {
    return 0;
  }
  return value2 > 0 ? 1 : -1;
});
var getOverlap = function() {
  var getRemainder = function getRemainder2(target, max) {
    if (target < 0) {
      return target;
    }
    if (target > max) {
      return target - max;
    }
    return 0;
  };
  return function(_ref) {
    var current = _ref.current, max = _ref.max, change = _ref.change;
    var targetScroll = add(current, change);
    var overlap = {
      x: getRemainder(targetScroll.x, max.x),
      y: getRemainder(targetScroll.y, max.y)
    };
    if (isEqual(overlap, origin)) {
      return null;
    }
    return overlap;
  };
}();
var canPartiallyScroll = function canPartiallyScroll2(_ref2) {
  var rawMax = _ref2.max, current = _ref2.current, change = _ref2.change;
  var max = {
    x: Math.max(current.x, rawMax.x),
    y: Math.max(current.y, rawMax.y)
  };
  var smallestChange = smallestSigned(change);
  var overlap = getOverlap({
    max,
    current,
    change: smallestChange
  });
  if (!overlap) {
    return true;
  }
  if (smallestChange.x !== 0 && overlap.x === 0) {
    return true;
  }
  if (smallestChange.y !== 0 && overlap.y === 0) {
    return true;
  }
  return false;
};
var canScrollWindow = function canScrollWindow2(viewport, change) {
  return canPartiallyScroll({
    current: viewport.scroll.current,
    max: viewport.scroll.max,
    change
  });
};
var getWindowOverlap = function getWindowOverlap2(viewport, change) {
  if (!canScrollWindow(viewport, change)) {
    return null;
  }
  var max = viewport.scroll.max;
  var current = viewport.scroll.current;
  return getOverlap({
    current,
    max,
    change
  });
};
var canScrollDroppable = function canScrollDroppable2(droppable2, change) {
  var frame = droppable2.frame;
  if (!frame) {
    return false;
  }
  return canPartiallyScroll({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change
  });
};
var getDroppableOverlap = function getDroppableOverlap2(droppable2, change) {
  var frame = droppable2.frame;
  if (!frame) {
    return null;
  }
  if (!canScrollDroppable(droppable2, change)) {
    return null;
  }
  return getOverlap({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change
  });
};
var getWindowScrollChange = function(_ref) {
  var viewport = _ref.viewport, subject = _ref.subject, center = _ref.center, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll3 = getScroll({
    dragStartTime,
    container: viewport.frame,
    subject,
    center,
    shouldUseTimeDampening
  });
  return scroll3 && canScrollWindow(viewport, scroll3) ? scroll3 : null;
};
var getDroppableScrollChange = function(_ref) {
  var droppable2 = _ref.droppable, subject = _ref.subject, center = _ref.center, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var frame = droppable2.frame;
  if (!frame) {
    return null;
  }
  var scroll3 = getScroll({
    dragStartTime,
    container: frame.pageMarginBox,
    subject,
    center,
    shouldUseTimeDampening
  });
  return scroll3 && canScrollDroppable(droppable2, scroll3) ? scroll3 : null;
};
var scroll$1 = function(_ref) {
  var state = _ref.state, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening, scrollWindow2 = _ref.scrollWindow, scrollDroppable2 = _ref.scrollDroppable;
  var center = state.current.page.borderBoxCenter;
  var draggable2 = state.dimensions.draggables[state.critical.draggable.id];
  var subject = draggable2.page.marginBox;
  if (state.isWindowScrollAllowed) {
    var viewport = state.viewport;
    var _change = getWindowScrollChange({
      dragStartTime,
      viewport,
      subject,
      center,
      shouldUseTimeDampening
    });
    if (_change) {
      scrollWindow2(_change);
      return;
    }
  }
  var droppable2 = getBestScrollableDroppable({
    center,
    destination: whatIsDraggedOver(state.impact),
    droppables: state.dimensions.droppables
  });
  if (!droppable2) {
    return;
  }
  var change = getDroppableScrollChange({
    dragStartTime,
    droppable: droppable2,
    subject,
    center,
    shouldUseTimeDampening
  });
  if (change) {
    scrollDroppable2(droppable2.descriptor.id, change);
  }
};
var createFluidScroller = function(_ref) {
  var scrollWindow2 = _ref.scrollWindow, scrollDroppable2 = _ref.scrollDroppable;
  var scheduleWindowScroll = rafSchd$1(scrollWindow2);
  var scheduleDroppableScroll = rafSchd$1(scrollDroppable2);
  var dragging = null;
  var tryScroll = function tryScroll2(state) {
    !dragging ? invariant(false) : void 0;
    var _dragging = dragging, shouldUseTimeDampening = _dragging.shouldUseTimeDampening, dragStartTime = _dragging.dragStartTime;
    scroll$1({
      state,
      scrollWindow: scheduleWindowScroll,
      scrollDroppable: scheduleDroppableScroll,
      dragStartTime,
      shouldUseTimeDampening
    });
  };
  var start$1 = function start$12(state) {
    !!dragging ? invariant(false) : void 0;
    var dragStartTime = Date.now();
    var wasScrollNeeded = false;
    var fakeScrollCallback = function fakeScrollCallback2() {
      wasScrollNeeded = true;
    };
    scroll$1({
      state,
      dragStartTime: 0,
      shouldUseTimeDampening: false,
      scrollWindow: fakeScrollCallback,
      scrollDroppable: fakeScrollCallback
    });
    dragging = {
      dragStartTime,
      shouldUseTimeDampening: wasScrollNeeded
    };
    if (wasScrollNeeded) {
      tryScroll(state);
    }
  };
  var stop = function stop2() {
    if (!dragging) {
      return;
    }
    scheduleWindowScroll.cancel();
    scheduleDroppableScroll.cancel();
    dragging = null;
  };
  return {
    start: start$1,
    stop,
    scroll: tryScroll
  };
};
var createJumpScroller = function(_ref) {
  var move3 = _ref.move, scrollDroppable2 = _ref.scrollDroppable, scrollWindow2 = _ref.scrollWindow;
  var moveByOffset = function moveByOffset2(state, offset3) {
    var client = add(state.current.client.selection, offset3);
    move3({
      client
    });
  };
  var scrollDroppableAsMuchAsItCan = function scrollDroppableAsMuchAsItCan2(droppable2, change) {
    if (!canScrollDroppable(droppable2, change)) {
      return change;
    }
    var overlap = getDroppableOverlap(droppable2, change);
    if (!overlap) {
      scrollDroppable2(droppable2.descriptor.id, change);
      return null;
    }
    var whatTheDroppableCanScroll = subtract(change, overlap);
    scrollDroppable2(droppable2.descriptor.id, whatTheDroppableCanScroll);
    var remainder = subtract(change, whatTheDroppableCanScroll);
    return remainder;
  };
  var scrollWindowAsMuchAsItCan = function scrollWindowAsMuchAsItCan2(isWindowScrollAllowed, viewport, change) {
    if (!isWindowScrollAllowed) {
      return change;
    }
    if (!canScrollWindow(viewport, change)) {
      return change;
    }
    var overlap = getWindowOverlap(viewport, change);
    if (!overlap) {
      scrollWindow2(change);
      return null;
    }
    var whatTheWindowCanScroll = subtract(change, overlap);
    scrollWindow2(whatTheWindowCanScroll);
    var remainder = subtract(change, whatTheWindowCanScroll);
    return remainder;
  };
  var jumpScroller = function jumpScroller2(state) {
    var request = state.scrollJumpRequest;
    if (!request) {
      return;
    }
    var destination = whatIsDraggedOver(state.impact);
    !destination ? invariant(false) : void 0;
    var droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination], request);
    if (!droppableRemainder) {
      return;
    }
    var viewport = state.viewport;
    var windowRemainder = scrollWindowAsMuchAsItCan(state.isWindowScrollAllowed, viewport, droppableRemainder);
    if (!windowRemainder) {
      return;
    }
    moveByOffset(state, windowRemainder);
  };
  return jumpScroller;
};
var createAutoScroller = function(_ref) {
  var scrollDroppable2 = _ref.scrollDroppable, scrollWindow2 = _ref.scrollWindow, move3 = _ref.move;
  var fluidScroller = createFluidScroller({
    scrollWindow: scrollWindow2,
    scrollDroppable: scrollDroppable2
  });
  var jumpScroll = createJumpScroller({
    move: move3,
    scrollWindow: scrollWindow2,
    scrollDroppable: scrollDroppable2
  });
  var scroll3 = function scroll4(state) {
    if (state.phase !== "DRAGGING") {
      return;
    }
    if (state.movementMode === "FLUID") {
      fluidScroller.scroll(state);
      return;
    }
    if (!state.scrollJumpRequest) {
      return;
    }
    jumpScroll(state);
  };
  var scroller = {
    scroll: scroll3,
    start: fluidScroller.start,
    stop: fluidScroller.stop
  };
  return scroller;
};
var prefix$1 = "data-rbd";
var dragHandle = function() {
  var base = prefix$1 + "-drag-handle";
  return {
    base,
    draggableId: base + "-draggable-id",
    contextId: base + "-context-id"
  };
}();
var draggable = function() {
  var base = prefix$1 + "-draggable";
  return {
    base,
    contextId: base + "-context-id",
    id: base + "-id"
  };
}();
var droppable = function() {
  var base = prefix$1 + "-droppable";
  return {
    base,
    contextId: base + "-context-id",
    id: base + "-id"
  };
}();
var scrollContainer = {
  contextId: prefix$1 + "-scroll-container-context-id"
};
var makeGetSelector = function makeGetSelector2(context) {
  return function(attribute) {
    return "[" + attribute + '="' + context + '"]';
  };
};
var getStyles = function getStyles2(rules, property2) {
  return rules.map(function(rule) {
    var value2 = rule.styles[property2];
    if (!value2) {
      return "";
    }
    return rule.selector + " { " + value2 + " }";
  }).join(" ");
};
var noPointerEvents = "pointer-events: none;";
var getStyles$1 = function(contextId) {
  var getSelector2 = makeGetSelector(contextId);
  var dragHandle$1 = function() {
    var grabCursor = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
    return {
      selector: getSelector2(dragHandle.contextId),
      styles: {
        always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
        resting: grabCursor,
        dragging: noPointerEvents,
        dropAnimating: grabCursor
      }
    };
  }();
  var draggable$1 = function() {
    var transition = "\n      transition: " + transitions.outOfTheWay + ";\n    ";
    return {
      selector: getSelector2(draggable.contextId),
      styles: {
        dragging: transition,
        dropAnimating: transition,
        userCancel: transition
      }
    };
  }();
  var droppable$1 = {
    selector: getSelector2(droppable.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  };
  var body = {
    selector: "body",
    styles: {
      dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      "
    }
  };
  var rules = [draggable$1, dragHandle$1, droppable$1, body];
  return {
    always: getStyles(rules, "always"),
    resting: getStyles(rules, "resting"),
    dragging: getStyles(rules, "dragging"),
    dropAnimating: getStyles(rules, "dropAnimating"),
    userCancel: getStyles(rules, "userCancel")
  };
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? React.useLayoutEffect : React.useEffect;
var getHead = function getHead2() {
  var head2 = document.querySelector("head");
  !head2 ? invariant(false) : void 0;
  return head2;
};
var createStyleEl = function createStyleEl2(nonce) {
  var el = document.createElement("style");
  if (nonce) {
    el.setAttribute("nonce", nonce);
  }
  el.type = "text/css";
  return el;
};
function useStyleMarshal(contextId, nonce) {
  var styles2 = useMemo(function() {
    return getStyles$1(contextId);
  }, [contextId]);
  var alwaysRef = React.useRef(null);
  var dynamicRef = React.useRef(null);
  var setDynamicStyle = useCallback(memoizeOne(function(proposed) {
    var el = dynamicRef.current;
    !el ? invariant(false) : void 0;
    el.textContent = proposed;
  }), []);
  var setAlwaysStyle = useCallback(function(proposed) {
    var el = alwaysRef.current;
    !el ? invariant(false) : void 0;
    el.textContent = proposed;
  }, []);
  useIsomorphicLayoutEffect(function() {
    !(!alwaysRef.current && !dynamicRef.current) ? invariant(false) : void 0;
    var always = createStyleEl(nonce);
    var dynamic = createStyleEl(nonce);
    alwaysRef.current = always;
    dynamicRef.current = dynamic;
    always.setAttribute(prefix$1 + "-always", contextId);
    dynamic.setAttribute(prefix$1 + "-dynamic", contextId);
    getHead().appendChild(always);
    getHead().appendChild(dynamic);
    setAlwaysStyle(styles2.always);
    setDynamicStyle(styles2.resting);
    return function() {
      var remove = function remove2(ref) {
        var current = ref.current;
        !current ? invariant(false) : void 0;
        getHead().removeChild(current);
        ref.current = null;
      };
      remove(alwaysRef);
      remove(dynamicRef);
    };
  }, [nonce, setAlwaysStyle, setDynamicStyle, styles2.always, styles2.resting, contextId]);
  var dragging = useCallback(function() {
    return setDynamicStyle(styles2.dragging);
  }, [setDynamicStyle, styles2.dragging]);
  var dropping = useCallback(function(reason) {
    if (reason === "DROP") {
      setDynamicStyle(styles2.dropAnimating);
      return;
    }
    setDynamicStyle(styles2.userCancel);
  }, [setDynamicStyle, styles2.dropAnimating, styles2.userCancel]);
  var resting = useCallback(function() {
    if (!dynamicRef.current) {
      return;
    }
    setDynamicStyle(styles2.resting);
  }, [setDynamicStyle, styles2.resting]);
  var marshal = useMemo(function() {
    return {
      dragging,
      dropping,
      resting
    };
  }, [dragging, dropping, resting]);
  return marshal;
}
var getWindowFromEl = function(el) {
  return el && el.ownerDocument ? el.ownerDocument.defaultView : window;
};
function isHtmlElement(el) {
  return el instanceof getWindowFromEl(el).HTMLElement;
}
function findDragHandle(contextId, draggableId) {
  var selector = "[" + dragHandle.contextId + '="' + contextId + '"]';
  var possible = toArray(document.querySelectorAll(selector));
  if (!possible.length) {
    return null;
  }
  var handle = find(possible, function(el) {
    return el.getAttribute(dragHandle.draggableId) === draggableId;
  });
  if (!handle) {
    return null;
  }
  if (!isHtmlElement(handle)) {
    return null;
  }
  return handle;
}
function useFocusMarshal(contextId) {
  var entriesRef = React.useRef({});
  var recordRef = React.useRef(null);
  var restoreFocusFrameRef = React.useRef(null);
  var isMountedRef = React.useRef(false);
  var register = useCallback(function register2(id, focus2) {
    var entry = {
      id,
      focus: focus2
    };
    entriesRef.current[id] = entry;
    return function unregister() {
      var entries = entriesRef.current;
      var current = entries[id];
      if (current !== entry) {
        delete entries[id];
      }
    };
  }, []);
  var tryGiveFocus = useCallback(function tryGiveFocus2(tryGiveFocusTo) {
    var handle = findDragHandle(contextId, tryGiveFocusTo);
    if (handle && handle !== document.activeElement) {
      handle.focus();
    }
  }, [contextId]);
  var tryShiftRecord = useCallback(function tryShiftRecord2(previous, redirectTo) {
    if (recordRef.current === previous) {
      recordRef.current = redirectTo;
    }
  }, []);
  var tryRestoreFocusRecorded = useCallback(function tryRestoreFocusRecorded2() {
    if (restoreFocusFrameRef.current) {
      return;
    }
    if (!isMountedRef.current) {
      return;
    }
    restoreFocusFrameRef.current = requestAnimationFrame(function() {
      restoreFocusFrameRef.current = null;
      var record = recordRef.current;
      if (record) {
        tryGiveFocus(record);
      }
    });
  }, [tryGiveFocus]);
  var tryRecordFocus = useCallback(function tryRecordFocus2(id) {
    recordRef.current = null;
    var focused = document.activeElement;
    if (!focused) {
      return;
    }
    if (focused.getAttribute(dragHandle.draggableId) !== id) {
      return;
    }
    recordRef.current = id;
  }, []);
  useIsomorphicLayoutEffect(function() {
    isMountedRef.current = true;
    return function clearFrameOnUnmount() {
      isMountedRef.current = false;
      var frameId = restoreFocusFrameRef.current;
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);
  var marshal = useMemo(function() {
    return {
      register,
      tryRecordFocus,
      tryRestoreFocusRecorded,
      tryShiftRecord
    };
  }, [register, tryRecordFocus, tryRestoreFocusRecorded, tryShiftRecord]);
  return marshal;
}
function createRegistry() {
  var entries = {
    draggables: {},
    droppables: {}
  };
  var subscribers = [];
  function subscribe(cb) {
    subscribers.push(cb);
    return function unsubscribe() {
      var index2 = subscribers.indexOf(cb);
      if (index2 === -1) {
        return;
      }
      subscribers.splice(index2, 1);
    };
  }
  function notify2(event) {
    if (subscribers.length) {
      subscribers.forEach(function(cb) {
        return cb(event);
      });
    }
  }
  function findDraggableById(id) {
    return entries.draggables[id] || null;
  }
  function getDraggableById(id) {
    var entry = findDraggableById(id);
    !entry ? invariant(false) : void 0;
    return entry;
  }
  var draggableAPI = {
    register: function register(entry) {
      entries.draggables[entry.descriptor.id] = entry;
      notify2({
        type: "ADDITION",
        value: entry
      });
    },
    update: function update2(entry, last) {
      var current = entries.draggables[last.descriptor.id];
      if (!current) {
        return;
      }
      if (current.uniqueId !== entry.uniqueId) {
        return;
      }
      delete entries.draggables[last.descriptor.id];
      entries.draggables[entry.descriptor.id] = entry;
    },
    unregister: function unregister(entry) {
      var draggableId = entry.descriptor.id;
      var current = findDraggableById(draggableId);
      if (!current) {
        return;
      }
      if (entry.uniqueId !== current.uniqueId) {
        return;
      }
      delete entries.draggables[draggableId];
      notify2({
        type: "REMOVAL",
        value: entry
      });
    },
    getById: getDraggableById,
    findById: findDraggableById,
    exists: function exists(id) {
      return Boolean(findDraggableById(id));
    },
    getAllByType: function getAllByType(type) {
      return values(entries.draggables).filter(function(entry) {
        return entry.descriptor.type === type;
      });
    }
  };
  function findDroppableById(id) {
    return entries.droppables[id] || null;
  }
  function getDroppableById(id) {
    var entry = findDroppableById(id);
    !entry ? invariant(false) : void 0;
    return entry;
  }
  var droppableAPI = {
    register: function register(entry) {
      entries.droppables[entry.descriptor.id] = entry;
    },
    unregister: function unregister(entry) {
      var current = findDroppableById(entry.descriptor.id);
      if (!current) {
        return;
      }
      if (entry.uniqueId !== current.uniqueId) {
        return;
      }
      delete entries.droppables[entry.descriptor.id];
    },
    getById: getDroppableById,
    findById: findDroppableById,
    exists: function exists(id) {
      return Boolean(findDroppableById(id));
    },
    getAllByType: function getAllByType(type) {
      return values(entries.droppables).filter(function(entry) {
        return entry.descriptor.type === type;
      });
    }
  };
  function clean2() {
    entries.draggables = {};
    entries.droppables = {};
    subscribers.length = 0;
  }
  return {
    draggable: draggableAPI,
    droppable: droppableAPI,
    subscribe,
    clean: clean2
  };
}
function useRegistry() {
  var registry = useMemo(createRegistry, []);
  React.useEffect(function() {
    return function unmount() {
      requestAnimationFrame(registry.clean);
    };
  }, [registry]);
  return registry;
}
var StoreContext = React__default["default"].createContext(null);
var getBodyElement = function() {
  var body = document.body;
  !body ? invariant(false) : void 0;
  return body;
};
var visuallyHidden = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
};
var getId = function getId2(contextId) {
  return "rbd-announcement-" + contextId;
};
function useAnnouncer(contextId) {
  var id = useMemo(function() {
    return getId(contextId);
  }, [contextId]);
  var ref = React.useRef(null);
  React.useEffect(function setup() {
    var el = document.createElement("div");
    ref.current = el;
    el.id = id;
    el.setAttribute("aria-live", "assertive");
    el.setAttribute("aria-atomic", "true");
    _extends(el.style, visuallyHidden);
    getBodyElement().appendChild(el);
    return function cleanup() {
      setTimeout(function remove() {
        var body = getBodyElement();
        if (body.contains(el)) {
          body.removeChild(el);
        }
        if (el === ref.current) {
          ref.current = null;
        }
      });
    };
  }, [id]);
  var announce = useCallback(function(message) {
    var el = ref.current;
    if (el) {
      el.textContent = message;
      return;
    }
  }, []);
  return announce;
}
var count = 0;
var defaults = {
  separator: "::"
};
function useUniqueId(prefix2, options) {
  if (options === void 0) {
    options = defaults;
  }
  return useMemo(function() {
    return "" + prefix2 + options.separator + count++;
  }, [options.separator, prefix2]);
}
function getElementId(_ref) {
  var contextId = _ref.contextId, uniqueId = _ref.uniqueId;
  return "rbd-hidden-text-" + contextId + "-" + uniqueId;
}
function useHiddenTextElement(_ref2) {
  var contextId = _ref2.contextId, text = _ref2.text;
  var uniqueId = useUniqueId("hidden-text", {
    separator: "-"
  });
  var id = useMemo(function() {
    return getElementId({
      contextId,
      uniqueId
    });
  }, [uniqueId, contextId]);
  React.useEffect(function mount() {
    var el = document.createElement("div");
    el.id = id;
    el.textContent = text;
    el.style.display = "none";
    getBodyElement().appendChild(el);
    return function unmount() {
      var body = getBodyElement();
      if (body.contains(el)) {
        body.removeChild(el);
      }
    };
  }, [id, text]);
  return id;
}
var AppContext = React__default["default"].createContext(null);
function usePrevious$1(current) {
  var ref = React.useRef(current);
  React.useEffect(function() {
    ref.current = current;
  });
  return ref;
}
function create() {
  var lock = null;
  function isClaimed() {
    return Boolean(lock);
  }
  function isActive(value2) {
    return value2 === lock;
  }
  function claim(abandon) {
    !!lock ? invariant(false) : void 0;
    var newLock = {
      abandon
    };
    lock = newLock;
    return newLock;
  }
  function release() {
    !lock ? invariant(false) : void 0;
    lock = null;
  }
  function tryAbandon() {
    if (lock) {
      lock.abandon();
      release();
    }
  }
  return {
    isClaimed,
    isActive,
    claim,
    release,
    tryAbandon
  };
}
var tab = 9;
var enter = 13;
var escape = 27;
var space = 32;
var pageUp = 33;
var pageDown = 34;
var end = 35;
var home = 36;
var arrowLeft = 37;
var arrowUp = 38;
var arrowRight = 39;
var arrowDown = 40;
var _preventedKeys;
var preventedKeys = (_preventedKeys = {}, _preventedKeys[enter] = true, _preventedKeys[tab] = true, _preventedKeys);
var preventStandardKeyEvents = function(event) {
  if (preventedKeys[event.keyCode]) {
    event.preventDefault();
  }
};
var supportedEventName = function() {
  var base = "visibilitychange";
  if (typeof document === "undefined") {
    return base;
  }
  var candidates = [base, "ms" + base, "webkit" + base, "moz" + base, "o" + base];
  var supported = find(candidates, function(eventName) {
    return "on" + eventName in document;
  });
  return supported || base;
}();
var primaryButton = 0;
var sloppyClickThreshold = 5;
function isSloppyClickThresholdExceeded(original, current) {
  return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
}
var idle$1 = {
  type: "IDLE"
};
function getCaptureBindings(_ref) {
  var cancel = _ref.cancel, completed = _ref.completed, getPhase = _ref.getPhase, setPhase = _ref.setPhase;
  return [{
    eventName: "mousemove",
    fn: function fn(event) {
      var button = event.button, clientX = event.clientX, clientY = event.clientY;
      if (button !== primaryButton) {
        return;
      }
      var point = {
        x: clientX,
        y: clientY
      };
      var phase = getPhase();
      if (phase.type === "DRAGGING") {
        event.preventDefault();
        phase.actions.move(point);
        return;
      }
      !(phase.type === "PENDING") ? invariant(false) : void 0;
      var pending = phase.point;
      if (!isSloppyClickThresholdExceeded(pending, point)) {
        return;
      }
      event.preventDefault();
      var actions = phase.actions.fluidLift(point);
      setPhase({
        type: "DRAGGING",
        actions
      });
    }
  }, {
    eventName: "mouseup",
    fn: function fn(event) {
      var phase = getPhase();
      if (phase.type !== "DRAGGING") {
        cancel();
        return;
      }
      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: "mousedown",
    fn: function fn(event) {
      if (getPhase().type === "DRAGGING") {
        event.preventDefault();
      }
      cancel();
    }
  }, {
    eventName: "keydown",
    fn: function fn(event) {
      var phase = getPhase();
      if (phase.type === "PENDING") {
        cancel();
        return;
      }
      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }
      preventStandardKeyEvents(event);
    }
  }, {
    eventName: "resize",
    fn: cancel
  }, {
    eventName: "scroll",
    options: {
      passive: true,
      capture: false
    },
    fn: function fn() {
      if (getPhase().type === "PENDING") {
        cancel();
      }
    }
  }, {
    eventName: "webkitmouseforcedown",
    fn: function fn(event) {
      var phase = getPhase();
      !(phase.type !== "IDLE") ? invariant(false) : void 0;
      if (phase.actions.shouldRespectForcePress()) {
        cancel();
        return;
      }
      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function useMouseSensor(api) {
  var phaseRef = React.useRef(idle$1);
  var unbindEventsRef = React.useRef(noop);
  var startCaptureBinding = useMemo(function() {
    return {
      eventName: "mousedown",
      fn: function onMouseDown(event) {
        if (event.defaultPrevented) {
          return;
        }
        if (event.button !== primaryButton) {
          return;
        }
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
          return;
        }
        var draggableId = api.findClosestDraggableId(event);
        if (!draggableId) {
          return;
        }
        var actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });
        if (!actions) {
          return;
        }
        event.preventDefault();
        var point = {
          x: event.clientX,
          y: event.clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    };
  }, [api]);
  var preventForcePressBinding = useMemo(function() {
    return {
      eventName: "webkitmouseforcewillbegin",
      fn: function fn(event) {
        if (event.defaultPrevented) {
          return;
        }
        var id = api.findClosestDraggableId(event);
        if (!id) {
          return;
        }
        var options = api.findOptionsForDraggable(id);
        if (!options) {
          return;
        }
        if (options.shouldRespectForcePress) {
          return;
        }
        if (!api.canGetLock(id)) {
          return;
        }
        event.preventDefault();
      }
    };
  }, [api]);
  var listenForCapture = useCallback(function listenForCapture2() {
    var options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [preventForcePressBinding, startCaptureBinding], options);
  }, [preventForcePressBinding, startCaptureBinding]);
  var stop = useCallback(function() {
    var current = phaseRef.current;
    if (current.type === "IDLE") {
      return;
    }
    phaseRef.current = idle$1;
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture]);
  var cancel = useCallback(function() {
    var phase = phaseRef.current;
    stop();
    if (phase.type === "DRAGGING") {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }
    if (phase.type === "PENDING") {
      phase.actions.abort();
    }
  }, [stop]);
  var bindCapturingEvents = useCallback(function bindCapturingEvents2() {
    var options = {
      capture: true,
      passive: false
    };
    var bindings = getCaptureBindings({
      cancel,
      completed: stop,
      getPhase: function getPhase() {
        return phaseRef.current;
      },
      setPhase: function setPhase(phase) {
        phaseRef.current = phase;
      }
    });
    unbindEventsRef.current = bindEvents(window, bindings, options);
  }, [cancel, stop]);
  var startPendingDrag = useCallback(function startPendingDrag2(actions, point) {
    !(phaseRef.current.type === "IDLE") ? invariant(false) : void 0;
    phaseRef.current = {
      type: "PENDING",
      point,
      actions
    };
    bindCapturingEvents();
  }, [bindCapturingEvents]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}
var _scrollJumpKeys;
function noop$1() {
}
var scrollJumpKeys = (_scrollJumpKeys = {}, _scrollJumpKeys[pageDown] = true, _scrollJumpKeys[pageUp] = true, _scrollJumpKeys[home] = true, _scrollJumpKeys[end] = true, _scrollJumpKeys);
function getDraggingBindings(actions, stop) {
  function cancel() {
    stop();
    actions.cancel();
  }
  function drop5() {
    stop();
    actions.drop();
  }
  return [{
    eventName: "keydown",
    fn: function fn(event) {
      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }
      if (event.keyCode === space) {
        event.preventDefault();
        drop5();
        return;
      }
      if (event.keyCode === arrowDown) {
        event.preventDefault();
        actions.moveDown();
        return;
      }
      if (event.keyCode === arrowUp) {
        event.preventDefault();
        actions.moveUp();
        return;
      }
      if (event.keyCode === arrowRight) {
        event.preventDefault();
        actions.moveRight();
        return;
      }
      if (event.keyCode === arrowLeft) {
        event.preventDefault();
        actions.moveLeft();
        return;
      }
      if (scrollJumpKeys[event.keyCode]) {
        event.preventDefault();
        return;
      }
      preventStandardKeyEvents(event);
    }
  }, {
    eventName: "mousedown",
    fn: cancel
  }, {
    eventName: "mouseup",
    fn: cancel
  }, {
    eventName: "click",
    fn: cancel
  }, {
    eventName: "touchstart",
    fn: cancel
  }, {
    eventName: "resize",
    fn: cancel
  }, {
    eventName: "wheel",
    fn: cancel,
    options: {
      passive: true
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function useKeyboardSensor(api) {
  var unbindEventsRef = React.useRef(noop$1);
  var startCaptureBinding = useMemo(function() {
    return {
      eventName: "keydown",
      fn: function onKeyDown(event) {
        if (event.defaultPrevented) {
          return;
        }
        if (event.keyCode !== space) {
          return;
        }
        var draggableId = api.findClosestDraggableId(event);
        if (!draggableId) {
          return;
        }
        var preDrag = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });
        if (!preDrag) {
          return;
        }
        event.preventDefault();
        var isCapturing = true;
        var actions = preDrag.snapLift();
        unbindEventsRef.current();
        function stop() {
          !isCapturing ? invariant(false) : void 0;
          isCapturing = false;
          unbindEventsRef.current();
          listenForCapture();
        }
        unbindEventsRef.current = bindEvents(window, getDraggingBindings(actions, stop), {
          capture: true,
          passive: false
        });
      }
    };
  }, [api]);
  var listenForCapture = useCallback(function tryStartCapture() {
    var options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}
var idle$2 = {
  type: "IDLE"
};
var timeForLongPress = 120;
var forcePressThreshold = 0.15;
function getWindowBindings(_ref) {
  var cancel = _ref.cancel, getPhase = _ref.getPhase;
  return [{
    eventName: "orientationchange",
    fn: cancel
  }, {
    eventName: "resize",
    fn: cancel
  }, {
    eventName: "contextmenu",
    fn: function fn(event) {
      event.preventDefault();
    }
  }, {
    eventName: "keydown",
    fn: function fn(event) {
      if (getPhase().type !== "DRAGGING") {
        cancel();
        return;
      }
      if (event.keyCode === escape) {
        event.preventDefault();
      }
      cancel();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function getHandleBindings(_ref2) {
  var cancel = _ref2.cancel, completed = _ref2.completed, getPhase = _ref2.getPhase;
  return [{
    eventName: "touchmove",
    options: {
      capture: false
    },
    fn: function fn(event) {
      var phase = getPhase();
      if (phase.type !== "DRAGGING") {
        cancel();
        return;
      }
      phase.hasMoved = true;
      var _event$touches$ = event.touches[0], clientX = _event$touches$.clientX, clientY = _event$touches$.clientY;
      var point = {
        x: clientX,
        y: clientY
      };
      event.preventDefault();
      phase.actions.move(point);
    }
  }, {
    eventName: "touchend",
    fn: function fn(event) {
      var phase = getPhase();
      if (phase.type !== "DRAGGING") {
        cancel();
        return;
      }
      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: "touchcancel",
    fn: function fn(event) {
      if (getPhase().type !== "DRAGGING") {
        cancel();
        return;
      }
      event.preventDefault();
      cancel();
    }
  }, {
    eventName: "touchforcechange",
    fn: function fn(event) {
      var phase = getPhase();
      !(phase.type !== "IDLE") ? invariant(false) : void 0;
      var touch = event.touches[0];
      if (!touch) {
        return;
      }
      var isForcePress = touch.force >= forcePressThreshold;
      if (!isForcePress) {
        return;
      }
      var shouldRespect = phase.actions.shouldRespectForcePress();
      if (phase.type === "PENDING") {
        if (shouldRespect) {
          cancel();
        }
        return;
      }
      if (shouldRespect) {
        if (phase.hasMoved) {
          event.preventDefault();
          return;
        }
        cancel();
        return;
      }
      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function useTouchSensor(api) {
  var phaseRef = React.useRef(idle$2);
  var unbindEventsRef = React.useRef(noop);
  var getPhase = useCallback(function getPhase2() {
    return phaseRef.current;
  }, []);
  var setPhase = useCallback(function setPhase2(phase) {
    phaseRef.current = phase;
  }, []);
  var startCaptureBinding = useMemo(function() {
    return {
      eventName: "touchstart",
      fn: function onTouchStart(event) {
        if (event.defaultPrevented) {
          return;
        }
        var draggableId = api.findClosestDraggableId(event);
        if (!draggableId) {
          return;
        }
        var actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });
        if (!actions) {
          return;
        }
        var touch = event.touches[0];
        var clientX = touch.clientX, clientY = touch.clientY;
        var point = {
          x: clientX,
          y: clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    };
  }, [api]);
  var listenForCapture = useCallback(function listenForCapture2() {
    var options = {
      capture: true,
      passive: false
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  var stop = useCallback(function() {
    var current = phaseRef.current;
    if (current.type === "IDLE") {
      return;
    }
    if (current.type === "PENDING") {
      clearTimeout(current.longPressTimerId);
    }
    setPhase(idle$2);
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture, setPhase]);
  var cancel = useCallback(function() {
    var phase = phaseRef.current;
    stop();
    if (phase.type === "DRAGGING") {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }
    if (phase.type === "PENDING") {
      phase.actions.abort();
    }
  }, [stop]);
  var bindCapturingEvents = useCallback(function bindCapturingEvents2() {
    var options = {
      capture: true,
      passive: false
    };
    var args = {
      cancel,
      completed: stop,
      getPhase
    };
    var unbindTarget = bindEvents(window, getHandleBindings(args), options);
    var unbindWindow = bindEvents(window, getWindowBindings(args), options);
    unbindEventsRef.current = function unbindAll() {
      unbindTarget();
      unbindWindow();
    };
  }, [cancel, getPhase, stop]);
  var startDragging = useCallback(function startDragging2() {
    var phase = getPhase();
    !(phase.type === "PENDING") ? invariant(false) : void 0;
    var actions = phase.actions.fluidLift(phase.point);
    setPhase({
      type: "DRAGGING",
      actions,
      hasMoved: false
    });
  }, [getPhase, setPhase]);
  var startPendingDrag = useCallback(function startPendingDrag2(actions, point) {
    !(getPhase().type === "IDLE") ? invariant(false) : void 0;
    var longPressTimerId = setTimeout(startDragging, timeForLongPress);
    setPhase({
      type: "PENDING",
      point,
      actions,
      longPressTimerId
    });
    bindCapturingEvents();
  }, [bindCapturingEvents, getPhase, setPhase, startDragging]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
      var phase = getPhase();
      if (phase.type === "PENDING") {
        clearTimeout(phase.longPressTimerId);
        setPhase(idle$2);
      }
    };
  }, [getPhase, listenForCapture, setPhase]);
  useIsomorphicLayoutEffect(function webkitHack() {
    var unbind = bindEvents(window, [{
      eventName: "touchmove",
      fn: function fn() {
      },
      options: {
        capture: false,
        passive: false
      }
    }]);
    return unbind;
  }, []);
}
var interactiveTagNames = {
  input: true,
  button: true,
  textarea: true,
  select: true,
  option: true,
  optgroup: true,
  video: true,
  audio: true
};
function isAnInteractiveElement(parent, current) {
  if (current == null) {
    return false;
  }
  var hasAnInteractiveTag = Boolean(interactiveTagNames[current.tagName.toLowerCase()]);
  if (hasAnInteractiveTag) {
    return true;
  }
  var attribute = current.getAttribute("contenteditable");
  if (attribute === "true" || attribute === "") {
    return true;
  }
  if (current === parent) {
    return false;
  }
  return isAnInteractiveElement(parent, current.parentElement);
}
function isEventInInteractiveElement(draggable2, event) {
  var target = event.target;
  if (!isHtmlElement(target)) {
    return false;
  }
  return isAnInteractiveElement(draggable2, target);
}
var getBorderBoxCenterPosition = function(el) {
  return getRect(el.getBoundingClientRect()).center;
};
function isElement(el) {
  return el instanceof getWindowFromEl(el).Element;
}
var supportedMatchesName = function() {
  var base = "matches";
  if (typeof document === "undefined") {
    return base;
  }
  var candidates = [base, "msMatchesSelector", "webkitMatchesSelector"];
  var value2 = find(candidates, function(name2) {
    return name2 in Element.prototype;
  });
  return value2 || base;
}();
function closestPonyfill(el, selector) {
  if (el == null) {
    return null;
  }
  if (el[supportedMatchesName](selector)) {
    return el;
  }
  return closestPonyfill(el.parentElement, selector);
}
function closest$1(el, selector) {
  if (el.closest) {
    return el.closest(selector);
  }
  return closestPonyfill(el, selector);
}
function getSelector(contextId) {
  return "[" + dragHandle.contextId + '="' + contextId + '"]';
}
function findClosestDragHandleFromEvent(contextId, event) {
  var target = event.target;
  if (!isElement(target)) {
    return null;
  }
  var selector = getSelector(contextId);
  var handle = closest$1(target, selector);
  if (!handle) {
    return null;
  }
  if (!isHtmlElement(handle)) {
    return null;
  }
  return handle;
}
function tryGetClosestDraggableIdFromEvent(contextId, event) {
  var handle = findClosestDragHandleFromEvent(contextId, event);
  if (!handle) {
    return null;
  }
  return handle.getAttribute(dragHandle.draggableId);
}
function findDraggable(contextId, draggableId) {
  var selector = "[" + draggable.contextId + '="' + contextId + '"]';
  var possible = toArray(document.querySelectorAll(selector));
  var draggable$1 = find(possible, function(el) {
    return el.getAttribute(draggable.id) === draggableId;
  });
  if (!draggable$1) {
    return null;
  }
  if (!isHtmlElement(draggable$1)) {
    return null;
  }
  return draggable$1;
}
function preventDefault(event) {
  event.preventDefault();
}
function _isActive(_ref) {
  var expected = _ref.expected, phase = _ref.phase, isLockActive = _ref.isLockActive;
  _ref.shouldWarn;
  if (!isLockActive()) {
    return false;
  }
  if (expected !== phase) {
    return false;
  }
  return true;
}
function canStart(_ref2) {
  var lockAPI = _ref2.lockAPI, store = _ref2.store, registry = _ref2.registry, draggableId = _ref2.draggableId;
  if (lockAPI.isClaimed()) {
    return false;
  }
  var entry = registry.draggable.findById(draggableId);
  if (!entry) {
    return false;
  }
  if (!entry.options.isEnabled) {
    return false;
  }
  if (!canStartDrag(store.getState(), draggableId)) {
    return false;
  }
  return true;
}
function tryStart(_ref3) {
  var lockAPI = _ref3.lockAPI, contextId = _ref3.contextId, store = _ref3.store, registry = _ref3.registry, draggableId = _ref3.draggableId, forceSensorStop = _ref3.forceSensorStop, sourceEvent = _ref3.sourceEvent;
  var shouldStart = canStart({
    lockAPI,
    store,
    registry,
    draggableId
  });
  if (!shouldStart) {
    return null;
  }
  var entry = registry.draggable.getById(draggableId);
  var el = findDraggable(contextId, entry.descriptor.id);
  if (!el) {
    return null;
  }
  if (sourceEvent && !entry.options.canDragInteractiveElements && isEventInInteractiveElement(el, sourceEvent)) {
    return null;
  }
  var lock = lockAPI.claim(forceSensorStop || noop);
  var phase = "PRE_DRAG";
  function getShouldRespectForcePress() {
    return entry.options.shouldRespectForcePress;
  }
  function isLockActive() {
    return lockAPI.isActive(lock);
  }
  function tryDispatch(expected, getAction) {
    if (_isActive({
      expected,
      phase,
      isLockActive,
      shouldWarn: true
    })) {
      store.dispatch(getAction());
    }
  }
  var tryDispatchWhenDragging = tryDispatch.bind(null, "DRAGGING");
  function lift$12(args) {
    function completed() {
      lockAPI.release();
      phase = "COMPLETED";
    }
    if (phase !== "PRE_DRAG") {
      completed();
      !(phase === "PRE_DRAG") ? invariant(false) : void 0;
    }
    store.dispatch(lift(args.liftActionArgs));
    phase = "DRAGGING";
    function finish(reason, options) {
      if (options === void 0) {
        options = {
          shouldBlockNextClick: false
        };
      }
      args.cleanup();
      if (options.shouldBlockNextClick) {
        var unbind = bindEvents(window, [{
          eventName: "click",
          fn: preventDefault,
          options: {
            once: true,
            passive: false,
            capture: true
          }
        }]);
        setTimeout(unbind);
      }
      completed();
      store.dispatch(drop({
        reason
      }));
    }
    return _extends({
      isActive: function isActive() {
        return _isActive({
          expected: "DRAGGING",
          phase,
          isLockActive,
          shouldWarn: false
        });
      },
      shouldRespectForcePress: getShouldRespectForcePress,
      drop: function drop5(options) {
        return finish("DROP", options);
      },
      cancel: function cancel(options) {
        return finish("CANCEL", options);
      }
    }, args.actions);
  }
  function fluidLift(clientSelection) {
    var move$1 = rafSchd$1(function(client) {
      tryDispatchWhenDragging(function() {
        return move({
          client
        });
      });
    });
    var api = lift$12({
      liftActionArgs: {
        id: draggableId,
        clientSelection,
        movementMode: "FLUID"
      },
      cleanup: function cleanup() {
        return move$1.cancel();
      },
      actions: {
        move: move$1
      }
    });
    return _extends({}, api, {
      move: move$1
    });
  }
  function snapLift() {
    var actions = {
      moveUp: function moveUp$1() {
        return tryDispatchWhenDragging(moveUp);
      },
      moveRight: function moveRight$1() {
        return tryDispatchWhenDragging(moveRight);
      },
      moveDown: function moveDown$1() {
        return tryDispatchWhenDragging(moveDown);
      },
      moveLeft: function moveLeft$1() {
        return tryDispatchWhenDragging(moveLeft);
      }
    };
    return lift$12({
      liftActionArgs: {
        id: draggableId,
        clientSelection: getBorderBoxCenterPosition(el),
        movementMode: "SNAP"
      },
      cleanup: noop,
      actions
    });
  }
  function abortPreDrag() {
    var shouldRelease = _isActive({
      expected: "PRE_DRAG",
      phase,
      isLockActive,
      shouldWarn: true
    });
    if (shouldRelease) {
      lockAPI.release();
    }
  }
  var preDrag = {
    isActive: function isActive() {
      return _isActive({
        expected: "PRE_DRAG",
        phase,
        isLockActive,
        shouldWarn: false
      });
    },
    shouldRespectForcePress: getShouldRespectForcePress,
    fluidLift,
    snapLift,
    abort: abortPreDrag
  };
  return preDrag;
}
var defaultSensors = [useMouseSensor, useKeyboardSensor, useTouchSensor];
function useSensorMarshal(_ref4) {
  var contextId = _ref4.contextId, store = _ref4.store, registry = _ref4.registry, customSensors = _ref4.customSensors, enableDefaultSensors = _ref4.enableDefaultSensors;
  var useSensors = [].concat(enableDefaultSensors ? defaultSensors : [], customSensors || []);
  var lockAPI = React.useState(function() {
    return create();
  })[0];
  var tryAbandonLock = useCallback(function tryAbandonLock2(previous, current) {
    if (previous.isDragging && !current.isDragging) {
      lockAPI.tryAbandon();
    }
  }, [lockAPI]);
  useIsomorphicLayoutEffect(function listenToStore() {
    var previous = store.getState();
    var unsubscribe = store.subscribe(function() {
      var current = store.getState();
      tryAbandonLock(previous, current);
      previous = current;
    });
    return unsubscribe;
  }, [lockAPI, store, tryAbandonLock]);
  useIsomorphicLayoutEffect(function() {
    return lockAPI.tryAbandon;
  }, [lockAPI.tryAbandon]);
  var canGetLock = useCallback(function(draggableId) {
    return canStart({
      lockAPI,
      registry,
      store,
      draggableId
    });
  }, [lockAPI, registry, store]);
  var tryGetLock = useCallback(function(draggableId, forceStop, options) {
    return tryStart({
      lockAPI,
      registry,
      contextId,
      store,
      draggableId,
      forceSensorStop: forceStop,
      sourceEvent: options && options.sourceEvent ? options.sourceEvent : null
    });
  }, [contextId, lockAPI, registry, store]);
  var findClosestDraggableId = useCallback(function(event) {
    return tryGetClosestDraggableIdFromEvent(contextId, event);
  }, [contextId]);
  var findOptionsForDraggable = useCallback(function(id) {
    var entry = registry.draggable.findById(id);
    return entry ? entry.options : null;
  }, [registry.draggable]);
  var tryReleaseLock = useCallback(function tryReleaseLock2() {
    if (!lockAPI.isClaimed()) {
      return;
    }
    lockAPI.tryAbandon();
    if (store.getState().phase !== "IDLE") {
      store.dispatch(flush());
    }
  }, [lockAPI, store]);
  var isLockClaimed = useCallback(lockAPI.isClaimed, [lockAPI]);
  var api = useMemo(function() {
    return {
      canGetLock,
      tryGetLock,
      findClosestDraggableId,
      findOptionsForDraggable,
      tryReleaseLock,
      isLockClaimed
    };
  }, [canGetLock, tryGetLock, findClosestDraggableId, findOptionsForDraggable, tryReleaseLock, isLockClaimed]);
  for (var i = 0; i < useSensors.length; i++) {
    useSensors[i](api);
  }
}
var createResponders = function createResponders2(props) {
  return {
    onBeforeCapture: props.onBeforeCapture,
    onBeforeDragStart: props.onBeforeDragStart,
    onDragStart: props.onDragStart,
    onDragEnd: props.onDragEnd,
    onDragUpdate: props.onDragUpdate
  };
};
function getStore(lazyRef) {
  !lazyRef.current ? invariant(false) : void 0;
  return lazyRef.current;
}
function App(props) {
  var contextId = props.contextId, setCallbacks = props.setCallbacks, sensors = props.sensors, nonce = props.nonce, dragHandleUsageInstructions2 = props.dragHandleUsageInstructions;
  var lazyStoreRef = React.useRef(null);
  var lastPropsRef = usePrevious$1(props);
  var getResponders = useCallback(function() {
    return createResponders(lastPropsRef.current);
  }, [lastPropsRef]);
  var announce = useAnnouncer(contextId);
  var dragHandleUsageInstructionsId = useHiddenTextElement({
    contextId,
    text: dragHandleUsageInstructions2
  });
  var styleMarshal = useStyleMarshal(contextId, nonce);
  var lazyDispatch = useCallback(function(action) {
    getStore(lazyStoreRef).dispatch(action);
  }, []);
  var marshalCallbacks = useMemo(function() {
    return bindActionCreators$1({
      publishWhileDragging,
      updateDroppableScroll,
      updateDroppableIsEnabled,
      updateDroppableIsCombineEnabled,
      collectionStarting
    }, lazyDispatch);
  }, [lazyDispatch]);
  var registry = useRegistry();
  var dimensionMarshal = useMemo(function() {
    return createDimensionMarshal(registry, marshalCallbacks);
  }, [registry, marshalCallbacks]);
  var autoScroller = useMemo(function() {
    return createAutoScroller(_extends({
      scrollWindow,
      scrollDroppable: dimensionMarshal.scrollDroppable
    }, bindActionCreators$1({
      move
    }, lazyDispatch)));
  }, [dimensionMarshal.scrollDroppable, lazyDispatch]);
  var focusMarshal = useFocusMarshal(contextId);
  var store = useMemo(function() {
    return createStore({
      announce,
      autoScroller,
      dimensionMarshal,
      focusMarshal,
      getResponders,
      styleMarshal
    });
  }, [announce, autoScroller, dimensionMarshal, focusMarshal, getResponders, styleMarshal]);
  lazyStoreRef.current = store;
  var tryResetStore = useCallback(function() {
    var current = getStore(lazyStoreRef);
    var state = current.getState();
    if (state.phase !== "IDLE") {
      current.dispatch(flush());
    }
  }, []);
  var isDragging = useCallback(function() {
    var state = getStore(lazyStoreRef).getState();
    return state.isDragging || state.phase === "DROP_ANIMATING";
  }, []);
  var appCallbacks = useMemo(function() {
    return {
      isDragging,
      tryAbort: tryResetStore
    };
  }, [isDragging, tryResetStore]);
  setCallbacks(appCallbacks);
  var getCanLift = useCallback(function(id) {
    return canStartDrag(getStore(lazyStoreRef).getState(), id);
  }, []);
  var getIsMovementAllowed = useCallback(function() {
    return isMovementAllowed(getStore(lazyStoreRef).getState());
  }, []);
  var appContext = useMemo(function() {
    return {
      marshal: dimensionMarshal,
      focus: focusMarshal,
      contextId,
      canLift: getCanLift,
      isMovementAllowed: getIsMovementAllowed,
      dragHandleUsageInstructionsId,
      registry
    };
  }, [contextId, dimensionMarshal, dragHandleUsageInstructionsId, focusMarshal, getCanLift, getIsMovementAllowed, registry]);
  useSensorMarshal({
    contextId,
    store,
    registry,
    customSensors: sensors,
    enableDefaultSensors: props.enableDefaultSensors !== false
  });
  React.useEffect(function() {
    return tryResetStore;
  }, [tryResetStore]);
  return React__default["default"].createElement(AppContext.Provider, {
    value: appContext
  }, React__default["default"].createElement(Provider, {
    context: StoreContext,
    store
  }, props.children));
}
var count$1 = 0;
function useInstanceCount() {
  return useMemo(function() {
    return "" + count$1++;
  }, []);
}
function DragDropContext(props) {
  var contextId = useInstanceCount();
  var dragHandleUsageInstructions2 = props.dragHandleUsageInstructions || preset.dragHandleUsageInstructions;
  return React__default["default"].createElement(ErrorBoundary, null, function(setCallbacks) {
    return React__default["default"].createElement(App, {
      nonce: props.nonce,
      contextId,
      setCallbacks,
      dragHandleUsageInstructions: dragHandleUsageInstructions2,
      enableDefaultSensors: props.enableDefaultSensors,
      sensors: props.sensors,
      onBeforeCapture: props.onBeforeCapture,
      onBeforeDragStart: props.onBeforeDragStart,
      onDragStart: props.onDragStart,
      onDragUpdate: props.onDragUpdate,
      onDragEnd: props.onDragEnd
    }, props.children);
  });
}
var isEqual$1 = function isEqual3(base) {
  return function(value2) {
    return base === value2;
  };
};
var isScroll = isEqual$1("scroll");
var isAuto = isEqual$1("auto");
var isEither = function isEither2(overflow, fn) {
  return fn(overflow.overflowX) || fn(overflow.overflowY);
};
var isElementScrollable = function isElementScrollable2(el) {
  var style2 = window.getComputedStyle(el);
  var overflow = {
    overflowX: style2.overflowX,
    overflowY: style2.overflowY
  };
  return isEither(overflow, isScroll) || isEither(overflow, isAuto);
};
var isBodyScrollable = function isBodyScrollable2() {
  {
    return false;
  }
};
var getClosestScrollable = function getClosestScrollable2(el) {
  if (el == null) {
    return null;
  }
  if (el === document.body) {
    return isBodyScrollable() ? el : null;
  }
  if (el === document.documentElement) {
    return null;
  }
  if (!isElementScrollable(el)) {
    return getClosestScrollable2(el.parentElement);
  }
  return el;
};
var getScroll$1 = function(el) {
  return {
    x: el.scrollLeft,
    y: el.scrollTop
  };
};
var getIsFixed = function getIsFixed2(el) {
  if (!el) {
    return false;
  }
  var style2 = window.getComputedStyle(el);
  if (style2.position === "fixed") {
    return true;
  }
  return getIsFixed2(el.parentElement);
};
var getEnv = function(start) {
  var closestScrollable = getClosestScrollable(start);
  var isFixedOnPage = getIsFixed(start);
  return {
    closestScrollable,
    isFixedOnPage
  };
};
var getDroppableDimension = function(_ref) {
  var descriptor = _ref.descriptor, isEnabled = _ref.isEnabled, isCombineEnabled = _ref.isCombineEnabled, isFixedOnPage = _ref.isFixedOnPage, direction = _ref.direction, client = _ref.client, page = _ref.page, closest3 = _ref.closest;
  var frame = function() {
    if (!closest3) {
      return null;
    }
    var scrollSize = closest3.scrollSize, frameClient = closest3.client;
    var maxScroll = getMaxScroll({
      scrollHeight: scrollSize.scrollHeight,
      scrollWidth: scrollSize.scrollWidth,
      height: frameClient.paddingBox.height,
      width: frameClient.paddingBox.width
    });
    return {
      pageMarginBox: closest3.page.marginBox,
      frameClient,
      scrollSize,
      shouldClipSubject: closest3.shouldClipSubject,
      scroll: {
        initial: closest3.scroll,
        current: closest3.scroll,
        max: maxScroll,
        diff: {
          value: origin,
          displacement: origin
        }
      }
    };
  }();
  var axis = direction === "vertical" ? vertical : horizontal;
  var subject = getSubject({
    page,
    withPlaceholder: null,
    axis,
    frame
  });
  var dimension = {
    descriptor,
    isCombineEnabled,
    isFixedOnPage,
    axis,
    isEnabled,
    client,
    page,
    frame,
    subject
  };
  return dimension;
};
var getClient = function getClient2(targetRef, closestScrollable) {
  var base = getBox(targetRef);
  if (!closestScrollable) {
    return base;
  }
  if (targetRef !== closestScrollable) {
    return base;
  }
  var top = base.paddingBox.top - closestScrollable.scrollTop;
  var left = base.paddingBox.left - closestScrollable.scrollLeft;
  var bottom = top + closestScrollable.scrollHeight;
  var right = left + closestScrollable.scrollWidth;
  var paddingBox = {
    top,
    right,
    bottom,
    left
  };
  var borderBox = expand(paddingBox, base.border);
  var client = createBox({
    borderBox,
    margin: base.margin,
    border: base.border,
    padding: base.padding
  });
  return client;
};
var getDimension = function(_ref) {
  var ref = _ref.ref, descriptor = _ref.descriptor, env = _ref.env, windowScroll = _ref.windowScroll, direction = _ref.direction, isDropDisabled = _ref.isDropDisabled, isCombineEnabled = _ref.isCombineEnabled, shouldClipSubject = _ref.shouldClipSubject;
  var closestScrollable = env.closestScrollable;
  var client = getClient(ref, closestScrollable);
  var page = withScroll(client, windowScroll);
  var closest3 = function() {
    if (!closestScrollable) {
      return null;
    }
    var frameClient = getBox(closestScrollable);
    var scrollSize = {
      scrollHeight: closestScrollable.scrollHeight,
      scrollWidth: closestScrollable.scrollWidth
    };
    return {
      client: frameClient,
      page: withScroll(frameClient, windowScroll),
      scroll: getScroll$1(closestScrollable),
      scrollSize,
      shouldClipSubject
    };
  }();
  var dimension = getDroppableDimension({
    descriptor,
    isEnabled: !isDropDisabled,
    isCombineEnabled,
    isFixedOnPage: env.isFixedOnPage,
    direction,
    client,
    page,
    closest: closest3
  });
  return dimension;
};
var immediate = {
  passive: false
};
var delayed = {
  passive: true
};
var getListenerOptions = function(options) {
  return options.shouldPublishImmediately ? immediate : delayed;
};
function useRequiredContext(Context) {
  var result = React.useContext(Context);
  !result ? invariant(false) : void 0;
  return result;
}
var getClosestScrollableFromDrag = function getClosestScrollableFromDrag2(dragging) {
  return dragging && dragging.env.closestScrollable || null;
};
function useDroppablePublisher(args) {
  var whileDraggingRef = React.useRef(null);
  var appContext = useRequiredContext(AppContext);
  var uniqueId = useUniqueId("droppable");
  var registry = appContext.registry, marshal = appContext.marshal;
  var previousRef = usePrevious$1(args);
  var descriptor = useMemo(function() {
    return {
      id: args.droppableId,
      type: args.type,
      mode: args.mode
    };
  }, [args.droppableId, args.mode, args.type]);
  var publishedDescriptorRef = React.useRef(descriptor);
  var memoizedUpdateScroll = useMemo(function() {
    return memoizeOne(function(x2, y2) {
      !whileDraggingRef.current ? invariant(false) : void 0;
      var scroll4 = {
        x: x2,
        y: y2
      };
      marshal.updateDroppableScroll(descriptor.id, scroll4);
    });
  }, [descriptor.id, marshal]);
  var getClosestScroll = useCallback(function() {
    var dragging = whileDraggingRef.current;
    if (!dragging || !dragging.env.closestScrollable) {
      return origin;
    }
    return getScroll$1(dragging.env.closestScrollable);
  }, []);
  var updateScroll = useCallback(function() {
    var scroll4 = getClosestScroll();
    memoizedUpdateScroll(scroll4.x, scroll4.y);
  }, [getClosestScroll, memoizedUpdateScroll]);
  var scheduleScrollUpdate = useMemo(function() {
    return rafSchd$1(updateScroll);
  }, [updateScroll]);
  var onClosestScroll = useCallback(function() {
    var dragging = whileDraggingRef.current;
    var closest3 = getClosestScrollableFromDrag(dragging);
    !(dragging && closest3) ? invariant(false) : void 0;
    var options = dragging.scrollOptions;
    if (options.shouldPublishImmediately) {
      updateScroll();
      return;
    }
    scheduleScrollUpdate();
  }, [scheduleScrollUpdate, updateScroll]);
  var getDimensionAndWatchScroll = useCallback(function(windowScroll, options) {
    !!whileDraggingRef.current ? invariant(false) : void 0;
    var previous = previousRef.current;
    var ref = previous.getDroppableRef();
    !ref ? invariant(false) : void 0;
    var env = getEnv(ref);
    var dragging = {
      ref,
      descriptor,
      env,
      scrollOptions: options
    };
    whileDraggingRef.current = dragging;
    var dimension = getDimension({
      ref,
      descriptor,
      env,
      windowScroll,
      direction: previous.direction,
      isDropDisabled: previous.isDropDisabled,
      isCombineEnabled: previous.isCombineEnabled,
      shouldClipSubject: !previous.ignoreContainerClipping
    });
    var scrollable = env.closestScrollable;
    if (scrollable) {
      scrollable.setAttribute(scrollContainer.contextId, appContext.contextId);
      scrollable.addEventListener("scroll", onClosestScroll, getListenerOptions(dragging.scrollOptions));
    }
    return dimension;
  }, [appContext.contextId, descriptor, onClosestScroll, previousRef]);
  var getScrollWhileDragging = useCallback(function() {
    var dragging = whileDraggingRef.current;
    var closest3 = getClosestScrollableFromDrag(dragging);
    !(dragging && closest3) ? invariant(false) : void 0;
    return getScroll$1(closest3);
  }, []);
  var dragStopped = useCallback(function() {
    var dragging = whileDraggingRef.current;
    !dragging ? invariant(false) : void 0;
    var closest3 = getClosestScrollableFromDrag(dragging);
    whileDraggingRef.current = null;
    if (!closest3) {
      return;
    }
    scheduleScrollUpdate.cancel();
    closest3.removeAttribute(scrollContainer.contextId);
    closest3.removeEventListener("scroll", onClosestScroll, getListenerOptions(dragging.scrollOptions));
  }, [onClosestScroll, scheduleScrollUpdate]);
  var scroll3 = useCallback(function(change) {
    var dragging = whileDraggingRef.current;
    !dragging ? invariant(false) : void 0;
    var closest3 = getClosestScrollableFromDrag(dragging);
    !closest3 ? invariant(false) : void 0;
    closest3.scrollTop += change.y;
    closest3.scrollLeft += change.x;
  }, []);
  var callbacks = useMemo(function() {
    return {
      getDimensionAndWatchScroll,
      getScrollWhileDragging,
      dragStopped,
      scroll: scroll3
    };
  }, [dragStopped, getDimensionAndWatchScroll, getScrollWhileDragging, scroll3]);
  var entry = useMemo(function() {
    return {
      uniqueId,
      descriptor,
      callbacks
    };
  }, [callbacks, descriptor, uniqueId]);
  useIsomorphicLayoutEffect(function() {
    publishedDescriptorRef.current = entry.descriptor;
    registry.droppable.register(entry);
    return function() {
      if (whileDraggingRef.current) {
        dragStopped();
      }
      registry.droppable.unregister(entry);
    };
  }, [callbacks, descriptor, dragStopped, entry, marshal, registry.droppable]);
  useIsomorphicLayoutEffect(function() {
    if (!whileDraggingRef.current) {
      return;
    }
    marshal.updateDroppableIsEnabled(publishedDescriptorRef.current.id, !args.isDropDisabled);
  }, [args.isDropDisabled, marshal]);
  useIsomorphicLayoutEffect(function() {
    if (!whileDraggingRef.current) {
      return;
    }
    marshal.updateDroppableIsCombineEnabled(publishedDescriptorRef.current.id, args.isCombineEnabled);
  }, [args.isCombineEnabled, marshal]);
}
function noop$2() {
}
var empty = {
  width: 0,
  height: 0,
  margin: noSpacing
};
var getSize = function getSize2(_ref) {
  var isAnimatingOpenOnMount = _ref.isAnimatingOpenOnMount, placeholder = _ref.placeholder, animate = _ref.animate;
  if (isAnimatingOpenOnMount) {
    return empty;
  }
  if (animate === "close") {
    return empty;
  }
  return {
    height: placeholder.client.borderBox.height,
    width: placeholder.client.borderBox.width,
    margin: placeholder.client.margin
  };
};
var getStyle = function getStyle2(_ref2) {
  var isAnimatingOpenOnMount = _ref2.isAnimatingOpenOnMount, placeholder = _ref2.placeholder, animate = _ref2.animate;
  var size2 = getSize({
    isAnimatingOpenOnMount,
    placeholder,
    animate
  });
  return {
    display: placeholder.display,
    boxSizing: "border-box",
    width: size2.width,
    height: size2.height,
    marginTop: size2.margin.top,
    marginRight: size2.margin.right,
    marginBottom: size2.margin.bottom,
    marginLeft: size2.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: animate !== "none" ? transitions.placeholder : null
  };
};
function Placeholder(props) {
  var animateOpenTimerRef = React.useRef(null);
  var tryClearAnimateOpenTimer = useCallback(function() {
    if (!animateOpenTimerRef.current) {
      return;
    }
    clearTimeout(animateOpenTimerRef.current);
    animateOpenTimerRef.current = null;
  }, []);
  var animate = props.animate, onTransitionEnd = props.onTransitionEnd, onClose = props.onClose, contextId = props.contextId;
  var _useState = React.useState(props.animate === "open"), isAnimatingOpenOnMount = _useState[0], setIsAnimatingOpenOnMount = _useState[1];
  React.useEffect(function() {
    if (!isAnimatingOpenOnMount) {
      return noop$2;
    }
    if (animate !== "open") {
      tryClearAnimateOpenTimer();
      setIsAnimatingOpenOnMount(false);
      return noop$2;
    }
    if (animateOpenTimerRef.current) {
      return noop$2;
    }
    animateOpenTimerRef.current = setTimeout(function() {
      animateOpenTimerRef.current = null;
      setIsAnimatingOpenOnMount(false);
    });
    return tryClearAnimateOpenTimer;
  }, [animate, isAnimatingOpenOnMount, tryClearAnimateOpenTimer]);
  var onSizeChangeEnd = useCallback(function(event) {
    if (event.propertyName !== "height") {
      return;
    }
    onTransitionEnd();
    if (animate === "close") {
      onClose();
    }
  }, [animate, onClose, onTransitionEnd]);
  var style2 = getStyle({
    isAnimatingOpenOnMount,
    animate: props.animate,
    placeholder: props.placeholder
  });
  return React__default["default"].createElement(props.placeholder.tagName, {
    style: style2,
    "data-rbd-placeholder-context-id": contextId,
    onTransitionEnd: onSizeChangeEnd,
    ref: props.innerRef
  });
}
var Placeholder$1 = React__default["default"].memo(Placeholder);
var DroppableContext = React__default["default"].createContext(null);
var AnimateInOut = function(_React$PureComponent) {
  _inheritsLoose(AnimateInOut2, _React$PureComponent);
  function AnimateInOut2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.state = {
      isVisible: Boolean(_this.props.on),
      data: _this.props.on,
      animate: _this.props.shouldAnimate && _this.props.on ? "open" : "none"
    };
    _this.onClose = function() {
      if (_this.state.animate !== "close") {
        return;
      }
      _this.setState({
        isVisible: false
      });
    };
    return _this;
  }
  AnimateInOut2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (!props.shouldAnimate) {
      return {
        isVisible: Boolean(props.on),
        data: props.on,
        animate: "none"
      };
    }
    if (props.on) {
      return {
        isVisible: true,
        data: props.on,
        animate: "open"
      };
    }
    if (state.isVisible) {
      return {
        isVisible: true,
        data: state.data,
        animate: "close"
      };
    }
    return {
      isVisible: false,
      animate: "close",
      data: null
    };
  };
  var _proto = AnimateInOut2.prototype;
  _proto.render = function render() {
    if (!this.state.isVisible) {
      return null;
    }
    var provided = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(provided);
  };
  return AnimateInOut2;
}(React__default["default"].PureComponent);
var zIndexOptions = {
  dragging: 5e3,
  dropAnimating: 4500
};
var getDraggingTransition = function getDraggingTransition2(shouldAnimateDragMovement, dropping) {
  if (dropping) {
    return transitions.drop(dropping.duration);
  }
  if (shouldAnimateDragMovement) {
    return transitions.snap;
  }
  return transitions.fluid;
};
var getDraggingOpacity = function getDraggingOpacity2(isCombining, isDropAnimating) {
  if (!isCombining) {
    return null;
  }
  return isDropAnimating ? combine.opacity.drop : combine.opacity.combining;
};
var getShouldDraggingAnimate = function getShouldDraggingAnimate2(dragging) {
  if (dragging.forceShouldAnimate != null) {
    return dragging.forceShouldAnimate;
  }
  return dragging.mode === "SNAP";
};
function getDraggingStyle(dragging) {
  var dimension = dragging.dimension;
  var box = dimension.client;
  var offset3 = dragging.offset, combineWith = dragging.combineWith, dropping = dragging.dropping;
  var isCombining = Boolean(combineWith);
  var shouldAnimate = getShouldDraggingAnimate(dragging);
  var isDropAnimating = Boolean(dropping);
  var transform = isDropAnimating ? transforms.drop(offset3, isCombining) : transforms.moveTo(offset3);
  var style2 = {
    position: "fixed",
    top: box.marginBox.top,
    left: box.marginBox.left,
    boxSizing: "border-box",
    width: box.borderBox.width,
    height: box.borderBox.height,
    transition: getDraggingTransition(shouldAnimate, dropping),
    transform,
    opacity: getDraggingOpacity(isCombining, isDropAnimating),
    zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
    pointerEvents: "none"
  };
  return style2;
}
function getSecondaryStyle(secondary) {
  return {
    transform: transforms.moveTo(secondary.offset),
    transition: secondary.shouldAnimateDisplacement ? null : "none"
  };
}
function getStyle$1(mapped) {
  return mapped.type === "DRAGGING" ? getDraggingStyle(mapped) : getSecondaryStyle(mapped);
}
function getDimension$1(descriptor, el, windowScroll) {
  if (windowScroll === void 0) {
    windowScroll = origin;
  }
  var computedStyles = window.getComputedStyle(el);
  var borderBox = el.getBoundingClientRect();
  var client = calculateBox(borderBox, computedStyles);
  var page = withScroll(client, windowScroll);
  var placeholder = {
    client,
    tagName: el.tagName.toLowerCase(),
    display: computedStyles.display
  };
  var displaceBy = {
    x: client.marginBox.width,
    y: client.marginBox.height
  };
  var dimension = {
    descriptor,
    placeholder,
    displaceBy,
    client,
    page
  };
  return dimension;
}
function useDraggablePublisher(args) {
  var uniqueId = useUniqueId("draggable");
  var descriptor = args.descriptor, registry = args.registry, getDraggableRef = args.getDraggableRef, canDragInteractiveElements = args.canDragInteractiveElements, shouldRespectForcePress = args.shouldRespectForcePress, isEnabled = args.isEnabled;
  var options = useMemo(function() {
    return {
      canDragInteractiveElements,
      shouldRespectForcePress,
      isEnabled
    };
  }, [canDragInteractiveElements, isEnabled, shouldRespectForcePress]);
  var getDimension2 = useCallback(function(windowScroll) {
    var el = getDraggableRef();
    !el ? invariant(false) : void 0;
    return getDimension$1(descriptor, el, windowScroll);
  }, [descriptor, getDraggableRef]);
  var entry = useMemo(function() {
    return {
      uniqueId,
      descriptor,
      options,
      getDimension: getDimension2
    };
  }, [descriptor, getDimension2, options, uniqueId]);
  var publishedRef = React.useRef(entry);
  var isFirstPublishRef = React.useRef(true);
  useIsomorphicLayoutEffect(function() {
    registry.draggable.register(publishedRef.current);
    return function() {
      return registry.draggable.unregister(publishedRef.current);
    };
  }, [registry.draggable]);
  useIsomorphicLayoutEffect(function() {
    if (isFirstPublishRef.current) {
      isFirstPublishRef.current = false;
      return;
    }
    var last = publishedRef.current;
    publishedRef.current = entry;
    registry.draggable.update(entry, last);
  }, [entry, registry.draggable]);
}
function preventHtml5Dnd(event) {
  event.preventDefault();
}
function Draggable(props) {
  var ref = React.useRef(null);
  var setRef = useCallback(function(el) {
    ref.current = el;
  }, []);
  var getRef = useCallback(function() {
    return ref.current;
  }, []);
  var _useRequiredContext = useRequiredContext(AppContext), contextId = _useRequiredContext.contextId, dragHandleUsageInstructionsId = _useRequiredContext.dragHandleUsageInstructionsId, registry = _useRequiredContext.registry;
  var _useRequiredContext2 = useRequiredContext(DroppableContext), type = _useRequiredContext2.type, droppableId = _useRequiredContext2.droppableId;
  var descriptor = useMemo(function() {
    return {
      id: props.draggableId,
      index: props.index,
      type,
      droppableId
    };
  }, [props.draggableId, props.index, type, droppableId]);
  var children = props.children, draggableId = props.draggableId, isEnabled = props.isEnabled, shouldRespectForcePress = props.shouldRespectForcePress, canDragInteractiveElements = props.canDragInteractiveElements, isClone = props.isClone, mapped = props.mapped, dropAnimationFinishedAction = props.dropAnimationFinished;
  if (!isClone) {
    var forPublisher = useMemo(function() {
      return {
        descriptor,
        registry,
        getDraggableRef: getRef,
        canDragInteractiveElements,
        shouldRespectForcePress,
        isEnabled
      };
    }, [descriptor, registry, getRef, canDragInteractiveElements, shouldRespectForcePress, isEnabled]);
    useDraggablePublisher(forPublisher);
  }
  var dragHandleProps = useMemo(function() {
    return isEnabled ? {
      tabIndex: 0,
      role: "button",
      "aria-describedby": dragHandleUsageInstructionsId,
      "data-rbd-drag-handle-draggable-id": draggableId,
      "data-rbd-drag-handle-context-id": contextId,
      draggable: false,
      onDragStart: preventHtml5Dnd
    } : null;
  }, [contextId, dragHandleUsageInstructionsId, draggableId, isEnabled]);
  var onMoveEnd = useCallback(function(event) {
    if (mapped.type !== "DRAGGING") {
      return;
    }
    if (!mapped.dropping) {
      return;
    }
    if (event.propertyName !== "transform") {
      return;
    }
    dropAnimationFinishedAction();
  }, [dropAnimationFinishedAction, mapped]);
  var provided = useMemo(function() {
    var style2 = getStyle$1(mapped);
    var onTransitionEnd = mapped.type === "DRAGGING" && mapped.dropping ? onMoveEnd : null;
    var result = {
      innerRef: setRef,
      draggableProps: {
        "data-rbd-draggable-context-id": contextId,
        "data-rbd-draggable-id": draggableId,
        style: style2,
        onTransitionEnd
      },
      dragHandleProps
    };
    return result;
  }, [contextId, dragHandleProps, draggableId, mapped, onMoveEnd, setRef]);
  var rubric = useMemo(function() {
    return {
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    };
  }, [descriptor.droppableId, descriptor.id, descriptor.index, descriptor.type]);
  return children(provided, mapped.snapshot, rubric);
}
var isStrictEqual = function(a, b2) {
  return a === b2;
};
var whatIsDraggedOverFromResult = function(result) {
  var combine2 = result.combine, destination = result.destination;
  if (destination) {
    return destination.droppableId;
  }
  if (combine2) {
    return combine2.droppableId;
  }
  return null;
};
var getCombineWithFromResult = function getCombineWithFromResult2(result) {
  return result.combine ? result.combine.draggableId : null;
};
var getCombineWithFromImpact = function getCombineWithFromImpact2(impact) {
  return impact.at && impact.at.type === "COMBINE" ? impact.at.combine.draggableId : null;
};
function getDraggableSelector() {
  var memoizedOffset = memoizeOne(function(x2, y2) {
    return {
      x: x2,
      y: y2
    };
  });
  var getMemoizedSnapshot = memoizeOne(function(mode, isClone, draggingOver, combineWith, dropping) {
    return {
      isDragging: true,
      isClone,
      isDropAnimating: Boolean(dropping),
      dropAnimation: dropping,
      mode,
      draggingOver,
      combineWith,
      combineTargetFor: null
    };
  });
  var getMemoizedProps = memoizeOne(function(offset3, mode, dimension, isClone, draggingOver, combineWith, forceShouldAnimate) {
    return {
      mapped: {
        type: "DRAGGING",
        dropping: null,
        draggingOver,
        combineWith,
        mode,
        offset: offset3,
        dimension,
        forceShouldAnimate,
        snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, null)
      }
    };
  });
  var selector = function selector2(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id !== ownProps.draggableId) {
        return null;
      }
      var offset3 = state.current.client.offset;
      var dimension = state.dimensions.draggables[ownProps.draggableId];
      var draggingOver = whatIsDraggedOver(state.impact);
      var combineWith = getCombineWithFromImpact(state.impact);
      var forceShouldAnimate = state.forceShouldAnimate;
      return getMemoizedProps(memoizedOffset(offset3.x, offset3.y), state.movementMode, dimension, ownProps.isClone, draggingOver, combineWith, forceShouldAnimate);
    }
    if (state.phase === "DROP_ANIMATING") {
      var completed = state.completed;
      if (completed.result.draggableId !== ownProps.draggableId) {
        return null;
      }
      var isClone = ownProps.isClone;
      var _dimension = state.dimensions.draggables[ownProps.draggableId];
      var result = completed.result;
      var mode = result.mode;
      var _draggingOver = whatIsDraggedOverFromResult(result);
      var _combineWith = getCombineWithFromResult(result);
      var duration = state.dropDuration;
      var dropping = {
        duration,
        curve: curves.drop,
        moveTo: state.newHomeClientOffset,
        opacity: _combineWith ? combine.opacity.drop : null,
        scale: _combineWith ? combine.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: state.newHomeClientOffset,
          dimension: _dimension,
          dropping,
          draggingOver: _draggingOver,
          combineWith: _combineWith,
          mode,
          forceShouldAnimate: null,
          snapshot: getMemoizedSnapshot(mode, isClone, _draggingOver, _combineWith, dropping)
        }
      };
    }
    return null;
  };
  return selector;
}
function getSecondarySnapshot(combineTargetFor) {
  return {
    isDragging: false,
    isDropAnimating: false,
    isClone: false,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor,
    combineWith: null
  };
}
var atRest = {
  mapped: {
    type: "SECONDARY",
    offset: origin,
    combineTargetFor: null,
    shouldAnimateDisplacement: true,
    snapshot: getSecondarySnapshot(null)
  }
};
function getSecondarySelector() {
  var memoizedOffset = memoizeOne(function(x2, y2) {
    return {
      x: x2,
      y: y2
    };
  });
  var getMemoizedSnapshot = memoizeOne(getSecondarySnapshot);
  var getMemoizedProps = memoizeOne(function(offset3, combineTargetFor, shouldAnimateDisplacement) {
    if (combineTargetFor === void 0) {
      combineTargetFor = null;
    }
    return {
      mapped: {
        type: "SECONDARY",
        offset: offset3,
        combineTargetFor,
        shouldAnimateDisplacement,
        snapshot: getMemoizedSnapshot(combineTargetFor)
      }
    };
  });
  var getFallback = function getFallback2(combineTargetFor) {
    return combineTargetFor ? getMemoizedProps(origin, combineTargetFor, true) : null;
  };
  var getProps = function getProps2(ownId, draggingId, impact, afterCritical) {
    var visualDisplacement = impact.displaced.visible[ownId];
    var isAfterCriticalInVirtualList = Boolean(afterCritical.inVirtualList && afterCritical.effected[ownId]);
    var combine2 = tryGetCombine(impact);
    var combineTargetFor = combine2 && combine2.draggableId === ownId ? draggingId : null;
    if (!visualDisplacement) {
      if (!isAfterCriticalInVirtualList) {
        return getFallback(combineTargetFor);
      }
      if (impact.displaced.invisible[ownId]) {
        return null;
      }
      var change = negate(afterCritical.displacedBy.point);
      var _offset = memoizedOffset(change.x, change.y);
      return getMemoizedProps(_offset, combineTargetFor, true);
    }
    if (isAfterCriticalInVirtualList) {
      return getFallback(combineTargetFor);
    }
    var displaceBy = impact.displacedBy.point;
    var offset3 = memoizedOffset(displaceBy.x, displaceBy.y);
    return getMemoizedProps(offset3, combineTargetFor, visualDisplacement.shouldAnimate);
  };
  var selector = function selector2(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id === ownProps.draggableId) {
        return null;
      }
      return getProps(ownProps.draggableId, state.critical.draggable.id, state.impact, state.afterCritical);
    }
    if (state.phase === "DROP_ANIMATING") {
      var completed = state.completed;
      if (completed.result.draggableId === ownProps.draggableId) {
        return null;
      }
      return getProps(ownProps.draggableId, completed.result.draggableId, completed.impact, completed.afterCritical);
    }
    return null;
  };
  return selector;
}
var makeMapStateToProps = function makeMapStateToProps2() {
  var draggingSelector = getDraggableSelector();
  var secondarySelector = getSecondarySelector();
  var selector = function selector2(state, ownProps) {
    return draggingSelector(state, ownProps) || secondarySelector(state, ownProps) || atRest;
  };
  return selector;
};
var mapDispatchToProps = {
  dropAnimationFinished
};
var ConnectedDraggable = connect(makeMapStateToProps, mapDispatchToProps, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Draggable);
function PrivateDraggable(props) {
  var droppableContext = useRequiredContext(DroppableContext);
  var isUsingCloneFor = droppableContext.isUsingCloneFor;
  if (isUsingCloneFor === props.draggableId && !props.isClone) {
    return null;
  }
  return React__default["default"].createElement(ConnectedDraggable, props);
}
function PublicDraggable(props) {
  var isEnabled = typeof props.isDragDisabled === "boolean" ? !props.isDragDisabled : true;
  var canDragInteractiveElements = Boolean(props.disableInteractiveElementBlocking);
  var shouldRespectForcePress = Boolean(props.shouldRespectForcePress);
  return React__default["default"].createElement(PrivateDraggable, _extends({}, props, {
    isClone: false,
    isEnabled,
    canDragInteractiveElements,
    shouldRespectForcePress
  }));
}
function Droppable(props) {
  var appContext = React.useContext(AppContext);
  !appContext ? invariant(false) : void 0;
  var contextId = appContext.contextId, isMovementAllowed2 = appContext.isMovementAllowed;
  var droppableRef = React.useRef(null);
  var placeholderRef = React.useRef(null);
  var children = props.children, droppableId = props.droppableId, type = props.type, mode = props.mode, direction = props.direction, ignoreContainerClipping = props.ignoreContainerClipping, isDropDisabled = props.isDropDisabled, isCombineEnabled = props.isCombineEnabled, snapshot = props.snapshot, useClone = props.useClone, updateViewportMaxScroll3 = props.updateViewportMaxScroll, getContainerForClone = props.getContainerForClone;
  var getDroppableRef = useCallback(function() {
    return droppableRef.current;
  }, []);
  var setDroppableRef = useCallback(function(value2) {
    droppableRef.current = value2;
  }, []);
  useCallback(function() {
    return placeholderRef.current;
  }, []);
  var setPlaceholderRef = useCallback(function(value2) {
    placeholderRef.current = value2;
  }, []);
  var onPlaceholderTransitionEnd = useCallback(function() {
    if (isMovementAllowed2()) {
      updateViewportMaxScroll3({
        maxScroll: getMaxWindowScroll()
      });
    }
  }, [isMovementAllowed2, updateViewportMaxScroll3]);
  useDroppablePublisher({
    droppableId,
    type,
    mode,
    direction,
    isDropDisabled,
    isCombineEnabled,
    ignoreContainerClipping,
    getDroppableRef
  });
  var placeholder = React__default["default"].createElement(AnimateInOut, {
    on: props.placeholder,
    shouldAnimate: props.shouldAnimatePlaceholder
  }, function(_ref) {
    var onClose = _ref.onClose, data2 = _ref.data, animate = _ref.animate;
    return React__default["default"].createElement(Placeholder$1, {
      placeholder: data2,
      onClose,
      innerRef: setPlaceholderRef,
      animate,
      contextId,
      onTransitionEnd: onPlaceholderTransitionEnd
    });
  });
  var provided = useMemo(function() {
    return {
      innerRef: setDroppableRef,
      placeholder,
      droppableProps: {
        "data-rbd-droppable-id": droppableId,
        "data-rbd-droppable-context-id": contextId
      }
    };
  }, [contextId, droppableId, placeholder, setDroppableRef]);
  var isUsingCloneFor = useClone ? useClone.dragging.draggableId : null;
  var droppableContext = useMemo(function() {
    return {
      droppableId,
      type,
      isUsingCloneFor
    };
  }, [droppableId, isUsingCloneFor, type]);
  function getClone() {
    if (!useClone) {
      return null;
    }
    var dragging = useClone.dragging, render = useClone.render;
    var node = React__default["default"].createElement(PrivateDraggable, {
      draggableId: dragging.draggableId,
      index: dragging.source.index,
      isClone: true,
      isEnabled: true,
      shouldRespectForcePress: false,
      canDragInteractiveElements: true
    }, function(draggableProvided, draggableSnapshot) {
      return render(draggableProvided, draggableSnapshot, dragging);
    });
    return ReactDOM__default["default"].createPortal(node, getContainerForClone());
  }
  return React__default["default"].createElement(DroppableContext.Provider, {
    value: droppableContext
  }, children(provided, snapshot), getClone());
}
var isMatchingType = function isMatchingType2(type, critical) {
  return type === critical.droppable.type;
};
var getDraggable = function getDraggable2(critical, dimensions) {
  return dimensions.draggables[critical.draggable.id];
};
var makeMapStateToProps$1 = function makeMapStateToProps3() {
  var idleWithAnimation = {
    placeholder: null,
    shouldAnimatePlaceholder: true,
    snapshot: {
      isDraggingOver: false,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: false
    },
    useClone: null
  };
  var idleWithoutAnimation = _extends({}, idleWithAnimation, {
    shouldAnimatePlaceholder: false
  });
  var getDraggableRubric = memoizeOne(function(descriptor) {
    return {
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    };
  });
  var getMapProps = memoizeOne(function(id, isEnabled, isDraggingOverForConsumer, isDraggingOverForImpact, dragging, renderClone) {
    var draggableId = dragging.descriptor.id;
    var isHome = dragging.descriptor.droppableId === id;
    if (isHome) {
      var useClone = renderClone ? {
        render: renderClone,
        dragging: getDraggableRubric(dragging.descriptor)
      } : null;
      var _snapshot = {
        isDraggingOver: isDraggingOverForConsumer,
        draggingOverWith: isDraggingOverForConsumer ? draggableId : null,
        draggingFromThisWith: draggableId,
        isUsingPlaceholder: true
      };
      return {
        placeholder: dragging.placeholder,
        shouldAnimatePlaceholder: false,
        snapshot: _snapshot,
        useClone
      };
    }
    if (!isEnabled) {
      return idleWithoutAnimation;
    }
    if (!isDraggingOverForImpact) {
      return idleWithAnimation;
    }
    var snapshot = {
      isDraggingOver: isDraggingOverForConsumer,
      draggingOverWith: draggableId,
      draggingFromThisWith: null,
      isUsingPlaceholder: true
    };
    return {
      placeholder: dragging.placeholder,
      shouldAnimatePlaceholder: true,
      snapshot,
      useClone: null
    };
  });
  var selector = function selector2(state, ownProps) {
    var id = ownProps.droppableId;
    var type = ownProps.type;
    var isEnabled = !ownProps.isDropDisabled;
    var renderClone = ownProps.renderClone;
    if (state.isDragging) {
      var critical = state.critical;
      if (!isMatchingType(type, critical)) {
        return idleWithoutAnimation;
      }
      var dragging = getDraggable(critical, state.dimensions);
      var isDraggingOver = whatIsDraggedOver(state.impact) === id;
      return getMapProps(id, isEnabled, isDraggingOver, isDraggingOver, dragging, renderClone);
    }
    if (state.phase === "DROP_ANIMATING") {
      var completed = state.completed;
      if (!isMatchingType(type, completed.critical)) {
        return idleWithoutAnimation;
      }
      var _dragging = getDraggable(completed.critical, state.dimensions);
      return getMapProps(id, isEnabled, whatIsDraggedOverFromResult(completed.result) === id, whatIsDraggedOver(completed.impact) === id, _dragging, renderClone);
    }
    if (state.phase === "IDLE" && state.completed && !state.shouldFlush) {
      var _completed = state.completed;
      if (!isMatchingType(type, _completed.critical)) {
        return idleWithoutAnimation;
      }
      var wasOver = whatIsDraggedOver(_completed.impact) === id;
      var wasCombining = Boolean(_completed.impact.at && _completed.impact.at.type === "COMBINE");
      var isHome = _completed.critical.droppable.id === id;
      if (wasOver) {
        return wasCombining ? idleWithAnimation : idleWithoutAnimation;
      }
      if (isHome) {
        return idleWithAnimation;
      }
      return idleWithoutAnimation;
    }
    return idleWithoutAnimation;
  };
  return selector;
};
var mapDispatchToProps$1 = {
  updateViewportMaxScroll
};
function getBody() {
  !document.body ? invariant(false) : void 0;
  return document.body;
}
var defaultProps = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: false,
  isCombineEnabled: false,
  ignoreContainerClipping: false,
  renderClone: null,
  getContainerForClone: getBody
};
var ConnectedDroppable = connect(makeMapStateToProps$1, mapDispatchToProps$1, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Droppable);
ConnectedDroppable.defaultProps = defaultProps;
const getSwitcherClassName = (...classNames) => s2.getClassNameWithPrefix(SWITCHER_PREFIX_CLS, ...classNames);
const getNonEmptyFieldCount = (fields) => {
  return SWITCHER_FIELDS.reduce((sum, field) => sum + (isNil(fields[field]) ? 0 : 1), 0);
};
const getMainLayoutClassName = (nonEmptyCount) => {
  switch (nonEmptyCount) {
    case 1:
      return getSwitcherClassName("content", "one-dimension");
    case 2:
      return getSwitcherClassName("content", "two-dimensions");
    default:
      return getSwitcherClassName("content", "three-dimensions");
  }
};
const shouldCrossRows = (nonEmptyCount, type) => nonEmptyCount < MAX_DIMENSION_COUNT || type === FieldType.Values;
const moveItem = (source, destination, droppableSource, droppableDestination) => {
  if (droppableDestination.droppableId === droppableSource.droppableId) {
    const updatingDestination2 = [...destination];
    const [removed2] = updatingDestination2.splice(droppableSource.index, 1);
    updatingDestination2.splice(droppableDestination.index, 0, removed2);
    return {
      [droppableDestination.droppableId]: updatingDestination2
    };
  }
  const updatingSource = [...source];
  const updatingDestination = [...destination];
  const [removed] = updatingSource.splice(droppableSource.index, 1);
  updatingDestination.splice(droppableDestination.index, 0, removed);
  return {
    [droppableSource.droppableId]: updatingSource,
    [droppableDestination.droppableId]: updatingDestination
  };
};
const checkItem = (source, checked, id, parentId) => {
  const target = __spreadValues({}, source.find((item) => item.id === (parentId != null ? parentId : id)));
  if (parentId) {
    target.children = map(target.children, (item) => __spreadProps(__spreadValues({}, item), {
      checked: item.id === id ? checked : item.checked
    }));
  } else {
    target.checked = checked;
    target.children = map(target.children, (item) => __spreadProps(__spreadValues({}, item), {
      checked
    }));
  }
  return source.map((item) => item.id === target.id ? target : item);
};
const generateSwitchResult = (state) => {
  const generateFieldResult = (items) => {
    const flattenValues = (list) => flatten(map(list, (_a) => {
      var _b = _a, { children } = _b, rest = __objRest(_b, ["children"]);
      return [__spreadValues({}, rest), ...flattenValues(children)];
    }));
    const allItems = flattenValues(items);
    const hideItems = filter(allItems, (item) => item.checked === false);
    return {
      items: allItems,
      hideItems
    };
  };
  return {
    [FieldType.Rows]: generateFieldResult(state[FieldType.Rows]),
    [FieldType.Cols]: generateFieldResult(state[FieldType.Cols]),
    [FieldType.Values]: generateFieldResult(state[FieldType.Values])
  };
};
const getSwitcherState = (fields) => mapValues(fields, "items");
const CLASS_NAME_PREFIX$2 = "item";
const SingleItem = ({
  dragHandleProps,
  fieldType,
  id,
  displayName,
  selectable,
  checked,
  parentId,
  className,
  disabled,
  onVisibleItemChange
}) => {
  const ref = React.useRef();
  const [ellipsis, setEllipsis] = React.useState(false);
  React.useEffect(() => {
    setEllipsis(ref.current.offsetWidth < ref.current.scrollWidth);
  }, []);
  const realDisplayName = displayName != null ? displayName : id;
  return /* @__PURE__ */ React__default["default"].createElement("div", __spreadProps(__spreadValues({}, dragHandleProps), {
    className: cx(getSwitcherClassName(CLASS_NAME_PREFIX$2), className, {
      unchecked: !checked
    })
  }), selectable && /* @__PURE__ */ React__default["default"].createElement(antd.Checkbox, {
    disabled,
    checked,
    onChange: (e2) => onVisibleItemChange == null ? void 0 : onVisibleItemChange(fieldType, e2.target.checked, id, parentId)
  }), ellipsis ? /* @__PURE__ */ React__default["default"].createElement(antd.Tooltip, {
    title: realDisplayName,
    placement: "bottomRight",
    overlayClassName: getSwitcherClassName("tooltip")
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: getSwitcherClassName(CLASS_NAME_PREFIX$2, "text"),
    ref
  }, realDisplayName)) : /* @__PURE__ */ React__default["default"].createElement("div", {
    className: getSwitcherClassName(CLASS_NAME_PREFIX$2, "text"),
    ref
  }, realDisplayName));
};
SingleItem.defaultProps = {
  checked: true,
  disabled: false
};
var index$6 = "";
const DimensionItem = ({
  fieldType,
  item: { id, displayName, checked = true, children = [] },
  expandable,
  expandChildren,
  isDragDisabled,
  selectable,
  index: index2,
  draggingItemId,
  onVisibleItemChange
}) => {
  return /* @__PURE__ */ React__default["default"].createElement(PublicDraggable, {
    draggableId: id,
    index: index2,
    isDragDisabled
  }, (provided, snapshot) => /* @__PURE__ */ React__default["default"].createElement("div", __spreadProps(__spreadValues({}, provided.draggableProps), {
    ref: provided.innerRef,
    className: cx(getSwitcherClassName(selectable ? "checkable-list" : "normal-list"), {
      dragging: snapshot.isDragging,
      "disable-dragging": isDragDisabled
    })
  }), /* @__PURE__ */ React__default["default"].createElement(SingleItem, {
    dragHandleProps: provided.dragHandleProps,
    fieldType,
    id,
    displayName,
    checked,
    onVisibleItemChange,
    selectable,
    className: cx(selectable ? "checkable-item" : "normal-item", {
      "item-collapse": !expandChildren
    })
  }), expandable && expandChildren && !isEmpty(children) && draggingItemId !== id && /* @__PURE__ */ React__default["default"].createElement("div", {
    className: cx("child-items", {
      "item-hidden": !expandChildren
    })
  }, children.map((item) => /* @__PURE__ */ React__default["default"].createElement(SingleItem, {
    key: item.id,
    id: item.id,
    fieldType,
    displayName: item.displayName,
    disabled: !checked,
    checked: item.checked,
    parentId: id,
    selectable,
    onVisibleItemChange,
    className: "checkable-item"
  })))));
};
var index$5 = "";
const CLASS_NAME_PREFIX$1 = "dimension";
const Dimension = (_c) => {
  var _d = _c, {
    fieldType,
    crossRows,
    expandable,
    expandText,
    allowEmpty,
    items,
    droppableType
  } = _d, rest = __objRest(_d, [
    "fieldType",
    "crossRows",
    "expandable",
    "expandText",
    "allowEmpty",
    "items",
    "droppableType"
  ]);
  const [expandChildren, setExpandChildren] = React.useState(true);
  const onUpdateExpand = (event) => {
    setExpandChildren(event.target.checked);
  };
  const isDragDisabled = !allowEmpty && items.length === 1;
  const { text, icon: Icon2 } = SWITCHER_CONFIG[fieldType];
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    className: cx(getSwitcherClassName(CLASS_NAME_PREFIX$1), {
      "long-dimension": crossRows
    })
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: getSwitcherClassName(CLASS_NAME_PREFIX$1, "header")
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "title"
  }, /* @__PURE__ */ React__default["default"].createElement(Icon2, null), " ", /* @__PURE__ */ React__default["default"].createElement("span", null, text)), expandable && /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "expand-option"
  }, /* @__PURE__ */ React__default["default"].createElement(antd.Checkbox, {
    checked: expandChildren,
    onChange: onUpdateExpand
  }), /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "description"
  }, expandText))), /* @__PURE__ */ React__default["default"].createElement(ConnectedDroppable, {
    droppableId: fieldType,
    type: droppableType
  }, (provided, snapshot) => /* @__PURE__ */ React__default["default"].createElement("div", __spreadProps(__spreadValues({
    ref: provided.innerRef
  }, provided.droppableProps), {
    className: cx(getSwitcherClassName(CLASS_NAME_PREFIX$1, "items"), {
      [getSwitcherClassName(CLASS_NAME_PREFIX$1, "items-highlight")]: snapshot.isDraggingOver,
      [getSwitcherClassName(CLASS_NAME_PREFIX$1, "long-items")]: crossRows
    })
  }), items.map((item, index2) => /* @__PURE__ */ React__default["default"].createElement(DimensionItem, __spreadValues({
    key: item.id,
    index: index2,
    fieldType,
    item,
    expandable,
    expandChildren,
    isDragDisabled
  }, rest))), provided.placeholder)));
};
Dimension.defaultProps = {
  allowEmpty: true,
  crossRows: false,
  expandable: false,
  expandText: i18n("\u5C55\u5F00\u5B50\u9879"),
  selectable: false,
  items: []
};
var index$4 = "";
const CLASS_NAME_PREFIX = "content";
const SwitcherContent = (_e) => {
  var _f = _e, {
    innerContentClassName,
    contentTitleText,
    resetText,
    onToggleVisible,
    onSubmit
  } = _f, defaultFields = __objRest(_f, [
    "innerContentClassName",
    "contentTitleText",
    "resetText",
    "onToggleVisible",
    "onSubmit"
  ]);
  const defaultState = getSwitcherState(defaultFields);
  const [state, setState] = React__default["default"].useState(defaultState);
  const [draggingItemId, setDraggingItemId] = React__default["default"].useState(null);
  const nonEmptyCount = getNonEmptyFieldCount(defaultFields);
  const onBeforeDragStart = (initial) => {
    setDraggingItemId(initial.draggableId);
  };
  const onDragEnd3 = ({ destination, source }) => {
    setDraggingItemId(null);
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    const updatedState = moveItem(state[source.droppableId], state[destination.droppableId], source, destination);
    setState(__spreadValues(__spreadValues({}, state), updatedState));
  };
  const onReset = () => {
    setState(defaultState);
  };
  const onConfirm = () => {
    onToggleVisible();
    onSubmit == null ? void 0 : onSubmit(generateSwitchResult(state));
  };
  const onVisibleItemChange = (fieldType, checked, id, parentId) => {
    const updatedState = checkItem(state[fieldType], checked, id, parentId);
    setState(__spreadProps(__spreadValues({}, state), {
      [fieldType]: updatedState
    }));
  };
  const isNothingChanged = isEqual$3(defaultState, state);
  return /* @__PURE__ */ React__default["default"].createElement(DragDropContext, {
    onBeforeCapture: onBeforeDragStart,
    onDragEnd: onDragEnd3
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: cx(innerContentClassName, getSwitcherClassName(CLASS_NAME_PREFIX))
  }, /* @__PURE__ */ React__default["default"].createElement("header", {
    className: getSwitcherClassName(CLASS_NAME_PREFIX, "header")
  }, contentTitleText), /* @__PURE__ */ React__default["default"].createElement("main", {
    className: cx(getSwitcherClassName(CLASS_NAME_PREFIX, "main"), getMainLayoutClassName(nonEmptyCount))
  }, SWITCHER_FIELDS.map((type) => isNil(defaultFields[type]) || /* @__PURE__ */ React__default["default"].createElement(Dimension, __spreadProps(__spreadValues({}, defaultFields[type]), {
    key: type,
    fieldType: type,
    items: state[type],
    crossRows: shouldCrossRows(nonEmptyCount, type),
    droppableType: SWITCHER_CONFIG[type].droppableType,
    draggingItemId,
    onVisibleItemChange
  })))), /* @__PURE__ */ React__default["default"].createElement("footer", {
    className: getSwitcherClassName(CLASS_NAME_PREFIX, "footer")
  }, /* @__PURE__ */ React__default["default"].createElement(antd.Button, {
    type: "text",
    icon: /* @__PURE__ */ React__default["default"].createElement(icons.ReloadOutlined, null),
    className: getSwitcherClassName(CLASS_NAME_PREFIX, "footer", "reset-button"),
    disabled: isNothingChanged,
    onClick: onReset
  }, resetText), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: getSwitcherClassName(CLASS_NAME_PREFIX, "footer", "actions")
  }, /* @__PURE__ */ React__default["default"].createElement(antd.Button, {
    className: "action-button",
    onClick: onToggleVisible
  }, i18n("\u53D6\u6D88")), /* @__PURE__ */ React__default["default"].createElement(antd.Button, {
    className: "action-button",
    type: "primary",
    disabled: isNothingChanged,
    onClick: onConfirm
  }, i18n("\u786E\u5B9A"))))));
};
SwitcherContent.displayName = "SwitcherContent";
SwitcherContent.defaultProps = {
  contentTitleText: i18n("\u884C\u5217\u5207\u6362"),
  resetText: i18n("\u6062\u590D\u9ED8\u8BA4")
};
var index$3 = "";
const Switcher = (_g) => {
  var _h = _g, {
    title,
    popover
  } = _h, otherProps = __objRest(_h, [
    "title",
    "popover"
  ]);
  const [visible, setVisible] = React.useState(false);
  const onToggleVisible = () => {
    setVisible((prev) => !prev);
  };
  return /* @__PURE__ */ React__default["default"].createElement(antd.Popover, __spreadValues({
    visible,
    content: /* @__PURE__ */ React__default["default"].createElement(SwitcherContent, __spreadProps(__spreadValues({}, otherProps), {
      onToggleVisible
    })),
    onVisibleChange: onToggleVisible,
    trigger: "click",
    placement: "bottomLeft",
    destroyTooltipOnHide: true
  }, popover), title || /* @__PURE__ */ React__default["default"].createElement(antd.Button, {
    className: getSwitcherClassName("entry-button"),
    size: "small",
    icon: /* @__PURE__ */ React__default["default"].createElement(SwitcherIcon, null)
  }, i18n("\u884C\u5217\u5207\u6362")));
};
const SwitcherHeader = (_i) => {
  var _j = _i, {
    sheet,
    dataCfg,
    options
  } = _j, props = __objRest(_j, [
    "sheet",
    "dataCfg",
    "options"
  ]);
  var _a;
  const [fields, setFields] = React.useState(() => {
    var _a2;
    return generateSwitcherFields(sheet, dataCfg, (_a2 = options == null ? void 0 : options.interaction) == null ? void 0 : _a2.hiddenColumnFields);
  });
  React.useEffect(() => {
    var _a2;
    setFields(generateSwitcherFields(sheet, dataCfg, (_a2 = options == null ? void 0 : options.interaction) == null ? void 0 : _a2.hiddenColumnFields));
  }, [
    sheet,
    JSON.stringify(dataCfg == null ? void 0 : dataCfg.fields),
    JSON.stringify(dataCfg == null ? void 0 : dataCfg.meta),
    JSON.stringify((_a = options == null ? void 0 : options.interaction) == null ? void 0 : _a.hiddenColumnFields)
  ]);
  const onSubmit = (result) => {
    var _a2;
    const { fields: fields2, hiddenColumnFields } = generateSheetConfig(sheet, result);
    sheet.setDataCfg({
      fields: __spreadValues(__spreadValues({}, sheet.dataCfg.fields), fields2)
    });
    if (hiddenColumnFields) {
      sheet.setOptions({ interaction: { hiddenColumnFields } });
    }
    sheet.render();
    setFields(generateSwitcherFieldsCfgFromResult(sheet, result, (_a2 = sheet.dataCfg) == null ? void 0 : _a2.meta, hiddenColumnFields));
  };
  return /* @__PURE__ */ React__default["default"].createElement(Switcher, __spreadValues(__spreadProps(__spreadValues({}, fields), {
    onSubmit
  }), props));
};
var index$2 = "";
const Header = (_k) => {
  var _l = _k, {
    className,
    title,
    width,
    description,
    exportCfg,
    advancedSortCfg,
    switcherCfg,
    sheet,
    extra,
    dataCfg,
    options
  } = _l, restProps = __objRest(_l, [
    "className",
    "title",
    "width",
    "description",
    "exportCfg",
    "advancedSortCfg",
    "switcherCfg",
    "sheet",
    "extra",
    "dataCfg",
    "options"
  ]);
  const PRE_CLASS2 = "s2-header";
  const getExtraComponents = () => {
    return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, extra, switcherCfg.open && /* @__PURE__ */ React__default["default"].createElement(SwitcherHeader, __spreadValues({
      sheet,
      dataCfg,
      options
    }, switcherCfg)), advancedSortCfg.open && /* @__PURE__ */ React__default["default"].createElement(AdvancedSort, __spreadValues({
      sheet
    }, advancedSortCfg)), exportCfg.open && /* @__PURE__ */ React__default["default"].createElement(Export, __spreadValues({
      key: "export",
      sheet
    }, exportCfg)));
  };
  return /* @__PURE__ */ React__default["default"].createElement(antd.PageHeader, __spreadValues({
    className: cx(PRE_CLASS2, className),
    style: { width },
    ghost: false,
    title,
    extra: getExtraComponents()
  }, restProps), description);
};
Header.defaultProps = {
  exportCfg: { open: false },
  advancedSortCfg: { open: false },
  switcherCfg: { open: false }
};
const PRE_CLASS = `${s2.S2_PREFIX_CLS}-pagination`;
const S2Pagination = ({
  pagination,
  current,
  total,
  pageSize,
  setCurrent,
  setPageSize = () => {
  },
  onShowSizeChange = () => {
  },
  onChange = () => {
  }
}) => {
  if (isEmpty(pagination)) {
    return null;
  }
  const showQuickJumper = total / pageSize > 5;
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    className: PRE_CLASS
  }, /* @__PURE__ */ React__default["default"].createElement(antd.Pagination, {
    defaultCurrent: 1,
    current,
    total,
    pageSize,
    showSizeChanger: true,
    onShowSizeChange: (current2, size2) => {
      onShowSizeChange(size2);
      setPageSize(size2);
    },
    size: "small",
    showQuickJumper,
    onChange: (page) => {
      onChange(page);
      setCurrent(page);
    }
  }), /* @__PURE__ */ React__default["default"].createElement("span", {
    className: `${PRE_CLASS}-count`,
    title: `${i18n("\u5171\u8BA1")}${total}${i18n("\u6761")}`
  }, i18n("\u5171\u8BA1"), total || " - ", i18n("\u6761")));
};
S2Pagination.displayName = "S2Pagination";
const getDrillDownCache = (spreadsheet, meta) => {
  const drillDownDataCache = spreadsheet.store.get("drillDownDataCache", []);
  const cache = drillDownDataCache.find((dc) => dc.rowId === meta.id);
  return {
    drillDownDataCache,
    drillDownCurrentCache: cache
  };
};
const handleActionIconClick = (params) => {
  const { meta, spreadsheet, event, callback, iconName } = params;
  if (iconName === "DrillDownIcon") {
    spreadsheet.store.set("drillDownNode", meta);
    const { drillDownDataCache, drillDownCurrentCache } = getDrillDownCache(spreadsheet, meta);
    const cache = (drillDownCurrentCache == null ? void 0 : drillDownCurrentCache.drillField) ? [drillDownCurrentCache == null ? void 0 : drillDownCurrentCache.drillField] : [];
    const disabled = [];
    drillDownDataCache.forEach((val) => {
      if (meta.id.includes(val.rowId) && meta.id !== val.rowId) {
        disabled.push(val.drillField);
      }
    });
    spreadsheet.emit(s2.S2Event.GLOBAL_ACTION_ICON_CLICK, event);
    callback(spreadsheet, cache, disabled, event);
  }
};
const handleDrillDownIcon = (props, spreadsheet, callback, drillDownIconRef) => {
  var _a, _b, _c;
  const nextHeaderIcons = (_b = (_a = props.options.headerActionIcons) == null ? void 0 : _a.filter((icon2) => icon2 !== drillDownIconRef.current)) != null ? _b : [];
  if (props == null ? void 0 : props.partDrillDown) {
    let displayCondition = (_c = props.partDrillDown) == null ? void 0 : _c.displayCondition;
    if (isEmpty(displayCondition)) {
      let iconLevel = spreadsheet.store.get("drillDownActionIconLevel", -1);
      if (iconLevel < 0) {
        iconLevel = get(props, "dataCfg.fields.rows.length", 1) - 1;
        spreadsheet.store.set("drillDownActionIconLevel", iconLevel);
      }
      displayCondition = (meta) => {
        return iconLevel <= meta.level && spreadsheet.options.hierarchyType === "tree" && spreadsheet.dataCfg.fields.valueInCols && meta.label !== i18n("\u603B\u8BA1");
      };
    }
    const drillDownActionIcon = {
      belongsCell: "rowCell",
      iconNames: ["DrillDownIcon"],
      defaultHide: true,
      displayCondition,
      action: (actionIconProps) => {
        const { iconName, meta } = actionIconProps;
        if (iconName === "DrillDownIcon") {
          spreadsheet.store.set("drillDownNode", meta);
          handleActionIconClick(__spreadProps(__spreadValues({}, actionIconProps), {
            spreadsheet,
            callback
          }));
        }
      }
    };
    drillDownIconRef.current = drillDownActionIcon;
    nextHeaderIcons.push(drillDownActionIcon);
  } else if (!(props == null ? void 0 : props.partDrillDown) && drillDownIconRef.current) {
    drillDownIconRef.current = null;
  }
  set(props.options, "headerActionIcons", nextHeaderIcons);
  return props.options;
};
const handleDrillDown = (params) => {
  const { fetchData, spreadsheet, drillFields, drillItemsNum } = params;
  spreadsheet.store.set("drillItemsNum", drillItemsNum);
  const meta = spreadsheet.store.get("drillDownNode");
  const { drillDownDataCache, drillDownCurrentCache } = getDrillDownCache(spreadsheet, meta);
  let newDrillDownDataCache = clone(drillDownDataCache);
  if (drillDownCurrentCache) {
    newDrillDownDataCache = filter(drillDownDataCache, (cache) => cache.rowId !== meta.id);
  }
  fetchData(meta, drillFields).then((info) => {
    const { drillData, drillField } = info;
    spreadsheet.dataSet.transformDrillDownData(drillField, drillData, meta);
    if (!isEmpty(drillData)) {
      const drillLevel = meta.level + 1;
      const newDrillDownData = {
        rowId: meta.id,
        drillLevel,
        drillData,
        drillField
      };
      newDrillDownDataCache.push(newDrillDownData);
      spreadsheet.store.set("drillDownDataCache", newDrillDownDataCache);
    }
    spreadsheet.interaction.reset();
    spreadsheet.render(false);
  });
};
const getSheetComponentOptions = (...options) => s2.customMerge(s2.DEFAULT_OPTIONS, SHEET_COMPONENT_DEFAULT_OPTIONS, ...options);
function useLatest(value2) {
  var ref = React.useRef(value2);
  ref.current = value2;
  return ref;
}
var __read = globalThis && globalThis.__read || function(o, n2) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2)
    return o;
  var i = m2.call(o), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done) {
      ar.push(r2.value);
    }
  } catch (error) {
    e2 = {
      error
    };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
};
var useUpdate = function useUpdate2() {
  var _a = __read(React.useState({}), 2), setState = _a[1];
  return React.useCallback(function() {
    return setState({});
  }, []);
};
var useUpdate$1 = useUpdate;
const useCellEvent = (eventName, handler, s2$1) => {
  React__default["default"].useEffect(() => {
    const handlerFn = (event) => {
      handler == null ? void 0 : handler(s2.getBaseCellData(event));
    };
    s2$1 == null ? void 0 : s2$1.on(eventName, handlerFn);
    return () => {
      s2$1 == null ? void 0 : s2$1.off(eventName, handlerFn);
    };
  }, [s2$1, handler, eventName]);
};
const useS2Event = (eventName, handler, s22) => {
  React__default["default"].useEffect(() => {
    const handlerFn = (args) => {
      handler == null ? void 0 : handler(args);
    };
    s22 == null ? void 0 : s22.on(eventName, handlerFn);
    return () => {
      s22 == null ? void 0 : s22.off(eventName, handlerFn);
    };
  }, [s22, handler, eventName]);
};
function useEvents(props, s2$1) {
  useCellEvent(s2.S2Event.ROW_CELL_HOVER, props.onRowCellHover, s2$1);
  useCellEvent(s2.S2Event.ROW_CELL_CLICK, props.onRowCellClick, s2$1);
  useCellEvent(s2.S2Event.ROW_CELL_DOUBLE_CLICK, props.onRowCellDoubleClick, s2$1);
  useCellEvent(s2.S2Event.ROW_CELL_MOUSE_DOWN, props.onRowCellMouseDown, s2$1);
  useCellEvent(s2.S2Event.ROW_CELL_MOUSE_UP, props.onRowCellMouseUp, s2$1);
  useCellEvent(s2.S2Event.ROW_CELL_MOUSE_MOVE, props.onRowCellMouseMove, s2$1);
  useS2Event(s2.S2Event.ROW_CELL_COLLAPSE_TREE_ROWS, props.onRowCellCollapseTreeRows, s2$1);
  useCellEvent(s2.S2Event.COL_CELL_HOVER, props.onColCellHover, s2$1);
  useCellEvent(s2.S2Event.COL_CELL_CLICK, props.onColCellClick, s2$1);
  useCellEvent(s2.S2Event.COL_CELL_DOUBLE_CLICK, props.onColCellDoubleClick, s2$1);
  useCellEvent(s2.S2Event.COL_CELL_MOUSE_DOWN, props.onColCellMouseDown, s2$1);
  useCellEvent(s2.S2Event.COL_CELL_MOUSE_UP, props.onColCellMouseUp, s2$1);
  useCellEvent(s2.S2Event.COL_CELL_MOUSE_MOVE, props.onColCellMouseMove, s2$1);
  useCellEvent(s2.S2Event.DATA_CELL_HOVER, props.onDataCellHover, s2$1);
  useCellEvent(s2.S2Event.DATA_CELL_CLICK, props.onDataCellClick, s2$1);
  useCellEvent(s2.S2Event.DATA_CELL_DOUBLE_CLICK, props.onDataCellDoubleClick, s2$1);
  useCellEvent(s2.S2Event.DATA_CELL_MOUSE_DOWN, props.onDataCellMouseDown, s2$1);
  useCellEvent(s2.S2Event.DATA_CELL_MOUSE_UP, props.onDataCellMouseUp, s2$1);
  useCellEvent(s2.S2Event.DATA_CELL_MOUSE_MOVE, props.onDataCellMouseMove, s2$1);
  useS2Event(s2.S2Event.DATA_CELL_TREND_ICON_CLICK, props.onDataCellTrendIconClick, s2$1);
  useS2Event(s2.S2Event.DATE_CELL_BRUSH_SELECTION, props.onDataCellBrushSelection, s2$1);
  useCellEvent(s2.S2Event.CORNER_CELL_HOVER, props.onCornerCellHover, s2$1);
  useCellEvent(s2.S2Event.CORNER_CELL_CLICK, props.onCornerCellClick, s2$1);
  useCellEvent(s2.S2Event.CORNER_CELL_DOUBLE_CLICK, props.onCornerCellDoubleClick, s2$1);
  useCellEvent(s2.S2Event.CORNER_CELL_MOUSE_DOWN, props.onCornerCellMouseDown, s2$1);
  useCellEvent(s2.S2Event.CORNER_CELL_MOUSE_UP, props.onCornerCellMouseUp, s2$1);
  useCellEvent(s2.S2Event.CORNER_CELL_MOUSE_MOVE, props.onCornerCellMouseMove, s2$1);
  useCellEvent(s2.S2Event.MERGED_CELLS_HOVER, props.onMergedCellsHoverer, s2$1);
  useCellEvent(s2.S2Event.MERGED_CELLS_CLICK, props.onMergedCellClick, s2$1);
  useCellEvent(s2.S2Event.MERGED_CELLS_DOUBLE_CLICK, props.onMergedCellsDoubleClick, s2$1);
  useCellEvent(s2.S2Event.MERGED_CELLS_MOUSE_DOWN, props.onMergedCellsMouseDown, s2$1);
  useCellEvent(s2.S2Event.MERGED_CELLS_MOUSE_UP, props.onMergedCellsMouseUp, s2$1);
  useCellEvent(s2.S2Event.MERGED_CELLS_MOUSE_MOVE, props.onMergedCellsMouseMove, s2$1);
  useS2Event(s2.S2Event.RANGE_SORT, props.onRangeSort, s2$1);
  useS2Event(s2.S2Event.RANGE_SORTED, props.onRangeSorted, s2$1);
  useS2Event(s2.S2Event.RANGE_FILTER, props.onRangeFilter, s2$1);
  useS2Event(s2.S2Event.RANGE_FILTERED, props.onRangeFiltered, s2$1);
  useS2Event(s2.S2Event.LAYOUT_AFTER_HEADER_LAYOUT, props.onLayoutAfterHeaderLayout, s2$1);
  useS2Event(s2.S2Event.LAYOUT_PAGINATION, props.onLayoutPagination, s2$1);
  useS2Event(s2.S2Event.LAYOUT_CELL_SCROLL, props.onLayoutCellScroll, s2$1);
  useS2Event(s2.S2Event.LAYOUT_AFTER_COLLAPSE_ROWS, props.onLayoutAfterCollapseRows, s2$1);
  useS2Event(s2.S2Event.LAYOUT_TREE_ROWS_COLLAPSE_ALL, props.onCollapseRowsAll, s2$1);
  useS2Event(s2.S2Event.LAYOUT_COLS_EXPANDED, props.onLayoutColsExpanded, s2$1);
  useS2Event(s2.S2Event.LAYOUT_COLS_HIDDEN, props.onLayoutColsHidden, s2$1);
  useS2Event(s2.S2Event.LAYOUT_BEFORE_RENDER, props.onBeforeRender, s2$1);
  useS2Event(s2.S2Event.LAYOUT_AFTER_RENDER, props.onAfterRender, s2$1);
  useS2Event(s2.S2Event.LAYOUT_DESTROY, props.onDestroy, s2$1);
  useS2Event(s2.S2Event.LAYOUT_RESIZE, props.onLayoutResize, s2$1);
  useS2Event(s2.S2Event.LAYOUT_RESIZE_SERIES_WIDTH, props.onLayoutResizeSeriesWidth, s2$1);
  useS2Event(s2.S2Event.LAYOUT_RESIZE_ROW_WIDTH, props.onLayoutResizeRowWidth, s2$1);
  useS2Event(s2.S2Event.LAYOUT_RESIZE_ROW_HEIGHT, props.onLayoutResizeRowHeight, s2$1);
  useS2Event(s2.S2Event.LAYOUT_RESIZE_COL_WIDTH, props.onLayoutResizeColWidth, s2$1);
  useS2Event(s2.S2Event.LAYOUT_RESIZE_COL_HEIGHT, props.onLayoutResizeColHeight, s2$1);
  useS2Event(s2.S2Event.LAYOUT_RESIZE_TREE_WIDTH, props.onLayoutResizeTreeWidth, s2$1);
  useS2Event(s2.S2Event.LAYOUT_RESIZE_MOUSE_DOWN, props.onLayoutResizeMouseDown, s2$1);
  useS2Event(s2.S2Event.LAYOUT_RESIZE_MOUSE_UP, props.onLayoutResizeMouseUp, s2$1);
  useS2Event(s2.S2Event.LAYOUT_RESIZE_MOUSE_MOVE, props.onLayoutResizeMouseMove, s2$1);
  useS2Event(s2.S2Event.GLOBAL_KEYBOARD_DOWN, props.onKeyBoardDown, s2$1);
  useS2Event(s2.S2Event.GLOBAL_KEYBOARD_UP, props.onKeyBoardUp, s2$1);
  useS2Event(s2.S2Event.GLOBAL_COPIED, props.onCopied, s2$1);
  useS2Event(s2.S2Event.GLOBAL_ACTION_ICON_HOVER, props.onActionIconHover, s2$1);
  useS2Event(s2.S2Event.GLOBAL_ACTION_ICON_CLICK, props.onActionIconClick, s2$1);
  useS2Event(s2.S2Event.GLOBAL_CONTEXT_MENU, props.onContextMenu, s2$1);
  useS2Event(s2.S2Event.GLOBAL_HOVER, props.onMouseHover, s2$1);
  useS2Event(s2.S2Event.GLOBAL_SELECTED, props.onSelected, s2$1);
  useS2Event(s2.S2Event.GLOBAL_MOUSE_UP, props.onMouseUp, s2$1);
  useS2Event(s2.S2Event.GLOBAL_RESET, props.onReset, s2$1);
  useS2Event(s2.S2Event.GLOBAL_LINK_FIELD_JUMP, props.onLinkFieldJump, s2$1);
}
const useLoading = (s2$1, loadingFromProps) => {
  const [loading, setLoading] = React__default["default"].useState(loadingFromProps);
  React__default["default"].useEffect(() => {
    s2$1 == null ? void 0 : s2$1.on(s2.S2Event.LAYOUT_BEFORE_RENDER, () => {
      setLoading(true);
    });
    s2$1 == null ? void 0 : s2$1.on(s2.S2Event.LAYOUT_AFTER_RENDER, () => {
      setLoading(false);
    });
  }, [s2$1]);
  return {
    loading: loadingFromProps != null ? loadingFromProps : loading,
    setLoading
  };
};
const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_PAGE_NUMBER = 1;
const usePagination = (s2$1, props) => {
  var _a, _b, _c, _d;
  const { options } = props;
  const [total, setTotal] = React__default["default"].useState((_b = (_a = s2$1 == null ? void 0 : s2$1.facet) == null ? void 0 : _a.viewCellHeights.getTotalLength()) != null ? _b : 0);
  const paginationRef = useLatest(options.pagination);
  const [current, setCurrent] = React__default["default"].useState(((_c = options.pagination) == null ? void 0 : _c.current) || DEFAULT_PAGE_NUMBER);
  const [pageSize, setPageSize] = React__default["default"].useState(((_d = options.pagination) == null ? void 0 : _d.pageSize) || DEFAULT_PAGE_SIZE);
  React__default["default"].useEffect(() => {
    if (!s2$1 || isEmpty(paginationRef.current)) {
      return;
    }
    s2$1.setOptions({
      pagination: {
        current,
        pageSize
      }
    });
    s2$1.render(false);
  }, [pageSize, current, s2$1]);
  React__default["default"].useEffect(() => {
    var _a2, _b2;
    setCurrent(((_a2 = options == null ? void 0 : options.pagination) == null ? void 0 : _a2.current) || DEFAULT_PAGE_NUMBER);
    setPageSize(((_b2 = options == null ? void 0 : options.pagination) == null ? void 0 : _b2.pageSize) || DEFAULT_PAGE_SIZE);
  }, [options.pagination]);
  React__default["default"].useEffect(() => {
    if (!s2$1 || isEmpty(paginationRef.current)) {
      return;
    }
    const totalUpdateCallback = (data2) => setTotal(data2.total);
    s2$1.on(s2.S2Event.LAYOUT_PAGINATION, totalUpdateCallback);
    return () => {
      s2$1.off(s2.S2Event.LAYOUT_PAGINATION, totalUpdateCallback);
    };
  }, [s2$1]);
  return {
    total,
    current,
    pageSize,
    setTotal,
    setCurrent,
    setPageSize
  };
};
const usePrevious = (value2) => {
  const ref = React__default["default"].useRef();
  React__default["default"].useEffect(() => {
    ref.current = value2;
  });
  return ref.current;
};
const RENDER_DELAY = 200;
function analyzeAdaptive(paramsContainer, adaptive) {
  var _a, _b, _c;
  let container = paramsContainer;
  let adaptiveWidth = true;
  let adaptiveHeight = false;
  if (typeof adaptive !== "boolean") {
    container = ((_a = adaptive == null ? void 0 : adaptive.getContainer) == null ? void 0 : _a.call(adaptive)) || paramsContainer;
    adaptiveWidth = (_b = adaptive == null ? void 0 : adaptive.width) != null ? _b : true;
    adaptiveHeight = (_c = adaptive == null ? void 0 : adaptive.height) != null ? _c : true;
  }
  return { container, adaptiveWidth, adaptiveHeight };
}
const useResize = (params) => {
  const { s2: s22, adaptive, container, optionWidth, optionHeight } = params;
  const {
    container: wrapper,
    adaptiveWidth,
    adaptiveHeight
  } = analyzeAdaptive(params.wrapper, adaptive);
  const isFirstRender = React__default["default"].useRef(true);
  const render = React__default["default"].useCallback((width, height) => {
    s22.changeSheetSize(width, height);
    s22.render(false);
    isFirstRender.current = false;
  }, [s22]);
  React__default["default"].useLayoutEffect(() => {
    const isSetResize = wrapper && container && adaptive;
    if (!isSetResize) {
      return;
    }
    const resizeObserver = new ResizeObserver(debounce(([entry] = []) => {
      var _a, _b, _c;
      if (entry) {
        const [size2] = entry.borderBoxSize || [];
        const width = adaptiveWidth ? Math.floor((_b = (size2 == null ? void 0 : size2.inlineSize) || ((_a = entry.contentRect) == null ? void 0 : _a.width)) != null ? _b : optionWidth) : optionWidth;
        const height = adaptiveHeight ? Math.floor((_c = container == null ? void 0 : container.getBoundingClientRect().height) != null ? _c : optionHeight) : optionHeight;
        if (!adaptiveWidth && !adaptiveHeight) {
          return;
        }
        if (isFirstRender.current) {
          render(width, height);
          return;
        }
        render(width, height);
      }
    }, RENDER_DELAY));
    resizeObserver.observe(wrapper, {
      box: "border-box"
    });
    return () => {
      resizeObserver.unobserve(wrapper);
    };
  }, [
    wrapper,
    container,
    adaptive,
    adaptiveWidth,
    adaptiveHeight,
    optionWidth,
    optionHeight,
    render
  ]);
};
function useSpreadSheet(props, config2) {
  const forceUpdate = useUpdate$1();
  const s2Ref = React__default["default"].useRef();
  const containerRef = React__default["default"].useRef();
  const wrapRef = React__default["default"].useRef();
  const { spreadsheet: customSpreadSheet, dataCfg, options, themeCfg } = props;
  const { loading, setLoading } = useLoading(s2Ref.current, props.loading);
  const pagination = usePagination(s2Ref.current, props);
  const prevDataCfg = usePrevious(dataCfg);
  const prevOptions = usePrevious(options);
  const prevThemeCfg = usePrevious(themeCfg);
  useEvents(props, s2Ref.current);
  const renderSpreadSheet = React__default["default"].useCallback((container) => {
    const s2Options = config2.s2Options || getSheetComponentOptions(options);
    const s2Constructor = [container, dataCfg, s2Options];
    if (customSpreadSheet) {
      return customSpreadSheet(...s2Constructor);
    }
    if (config2.sheetType === "table") {
      return new s2.TableSheet(container, dataCfg, s2Options);
    }
    return new s2.PivotSheet(container, dataCfg, s2Options);
  }, [config2.s2Options, config2.sheetType, options, dataCfg, customSpreadSheet]);
  const buildSpreadSheet = React__default["default"].useCallback(() => {
    var _a;
    setLoading(true);
    s2Ref.current = renderSpreadSheet(containerRef.current);
    s2Ref.current.setThemeCfg(props.themeCfg);
    s2Ref.current.render();
    setLoading(false);
    forceUpdate();
    (_a = props.getSpreadSheet) == null ? void 0 : _a.call(props, s2Ref.current);
  }, [props, renderSpreadSheet, setLoading, forceUpdate]);
  React__default["default"].useEffect(() => {
    buildSpreadSheet();
    return () => {
      s2Ref.current.destroy();
    };
  }, []);
  React__default["default"].useEffect(() => {
    var _a, _b, _c, _d, _e, _f;
    let reloadData = false;
    let reBuildDataSet = false;
    if (!Object.is(prevDataCfg, dataCfg)) {
      reloadData = true;
      (_a = s2Ref.current) == null ? void 0 : _a.setDataCfg(dataCfg);
    }
    if (!Object.is(prevOptions, options)) {
      if (!Object.is(prevOptions == null ? void 0 : prevOptions.hierarchyType, options == null ? void 0 : options.hierarchyType)) {
        reBuildDataSet = true;
        reloadData = true;
        (_b = s2Ref.current) == null ? void 0 : _b.setDataCfg(dataCfg);
      }
      (_c = s2Ref.current) == null ? void 0 : _c.setOptions(options);
      (_d = s2Ref.current) == null ? void 0 : _d.changeSheetSize(options.width, options.height);
    }
    if (!Object.is(prevThemeCfg, themeCfg)) {
      (_e = s2Ref.current) == null ? void 0 : _e.setThemeCfg(themeCfg);
    }
    (_f = s2Ref.current) == null ? void 0 : _f.render(reloadData, reBuildDataSet);
  }, [dataCfg, options, prevDataCfg, prevOptions, prevThemeCfg, themeCfg]);
  useResize({
    s2: s2Ref.current,
    container: containerRef.current,
    wrapper: wrapRef.current,
    adaptive: props.adaptive,
    optionWidth: options.width,
    optionHeight: options.height
  });
  return {
    s2Ref,
    containerRef,
    wrapRef,
    loading,
    setLoading,
    pagination
  };
}
var index$1 = "";
const BaseSheet = React__default["default"].forwardRef((props, ref) => {
  var _a;
  const { dataCfg, options, header: header2, showPagination, sheetType } = props;
  const { s2Ref, loading, containerRef, pagination, wrapRef } = useSpreadSheet(props, {
    sheetType
  });
  React__default["default"].useEffect(() => {
    if (ref) {
      ref.current = s2Ref.current;
    }
  }, [ref, s2Ref]);
  React__default["default"].useEffect(() => {
    var _a2, _b;
    (_b = s2Ref.current) == null ? void 0 : _b.interaction.hideColumns((_a2 = options.interaction) == null ? void 0 : _a2.hiddenColumnFields);
  }, [(_a = options.interaction) == null ? void 0 : _a.hiddenColumnFields, s2Ref]);
  return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].StrictMode, null, /* @__PURE__ */ React__default["default"].createElement(antd.Spin, {
    spinning: loading,
    wrapperClassName: `${s2.S2_PREFIX_CLS}-spin`
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    ref: wrapRef,
    className: `${s2.S2_PREFIX_CLS}-wrapper`
  }, header2 && /* @__PURE__ */ React__default["default"].createElement(Header, __spreadProps(__spreadValues({}, header2), {
    sheet: s2Ref.current,
    width: options.width,
    dataCfg: s2.getSafetyDataConfig(dataCfg),
    options: getSheetComponentOptions(options)
  })), /* @__PURE__ */ React__default["default"].createElement("div", {
    ref: containerRef,
    className: `${s2.S2_PREFIX_CLS}-container`
  }), showPagination && /* @__PURE__ */ React__default["default"].createElement(S2Pagination, __spreadProps(__spreadValues({}, pagination), {
    pagination: options.pagination,
    onChange: get(showPagination, "onChange"),
    onShowSizeChange: get(showPagination, "onShowSizeChange")
  })))));
});
BaseSheet.defaultProps = {
  options: {},
  adaptive: false,
  showPagination: false
};
const TableSheet = React__default["default"].memo((props) => {
  var _a;
  const { options } = props;
  const s2Ref = React__default["default"].useRef();
  React__default["default"].useEffect(() => {
    var _a2, _b;
    (_b = s2Ref.current) == null ? void 0 : _b.interaction.hideColumns((_a2 = options.interaction) == null ? void 0 : _a2.hiddenColumnFields);
  }, [(_a = options.interaction) == null ? void 0 : _a.hiddenColumnFields, s2Ref]);
  return /* @__PURE__ */ React__default["default"].createElement(BaseSheet, __spreadProps(__spreadValues({}, props), {
    ref: s2Ref
  }));
});
TableSheet.displayName = "TableSheet";
class CustomCell extends s2.DataCell {
  drawTextShape() {
    if (isObject(this.getMeta().fieldValue)) {
      s2.drawObjectText(this);
    } else {
      super.drawTextShape();
    }
  }
}
const GridAnalysisDataCell = (viewMeta) => new CustomCell(viewMeta, viewMeta.spreadsheet);
const FONT_SIZE = 12;
const FONT_SIZE_MINOR = 11;
const GridAnalysisTheme = {
  dataCell: {
    text: {
      fontSize: FONT_SIZE,
      fontFamily: s2.FONT_FAMILY,
      fill: "rgba(0, 0, 0, 0.85)",
      fontWeight: "normal",
      textBaseline: "middle",
      textAlign: "left"
    },
    minorText: {
      fontSize: FONT_SIZE_MINOR,
      fontFamily: s2.FONT_FAMILY,
      fill: "rgba(0, 0, 0, 0.45)",
      fontWeight: "normal",
      textBaseline: "middle",
      textAlign: "left"
    },
    derivedMeasureText: {
      mainUp: "#F46649",
      mainDown: "#2AA491",
      minorUp: "#f9ae9e",
      minorDown: "#a9dad2"
    },
    bolderText: {
      fontSize: FONT_SIZE,
      fontFamily: s2.FONT_FAMILY,
      fill: "rgba(0, 0, 0, 1)",
      fontWeight: s2.isWindows() ? "bold" : 520,
      textBaseline: "middle",
      textAlign: "left"
    }
  }
};
const GridAnalysisSheet = React__default["default"].memo((props) => {
  const _a = props, { options, themeCfg } = _a, restProps = __objRest(_a, ["options", "themeCfg"]);
  const s2Ref = React__default["default"].useRef();
  const s2Options = React__default["default"].useMemo(() => {
    return s2.customMerge(options, {
      dataCell: GridAnalysisDataCell,
      showDefaultHeaderActionIcon: false,
      style: {
        colCfg: {
          hideMeasureColumn: true
        }
      }
    });
  }, [options]);
  const S2ThemeCfg = React__default["default"].useMemo(() => {
    return s2.customMerge({}, themeCfg, { theme: GridAnalysisTheme });
  }, [themeCfg]);
  return /* @__PURE__ */ React__default["default"].createElement(BaseSheet, __spreadValues({
    options: s2Options,
    themeCfg: S2ThemeCfg,
    ref: s2Ref
  }, restProps));
});
GridAnalysisSheet.displayName = "GridAnalysisSheet";
const strategySheetTooltip = "_strategySheetTooltip_nkzqs_1";
const row = "_row_nkzqs_8";
const value = "_value_nkzqs_8";
const col = "_col_nkzqs_11";
const name = "_name_nkzqs_11";
const data = "_data_nkzqs_17";
const header = "_header_nkzqs_17";
const label = "_label_nkzqs_22";
const originalValue = "_originalValue_nkzqs_25";
const divider = "_divider_nkzqs_28";
const derivedValues = "_derivedValues_nkzqs_32";
const derivedValueGroup = "_derivedValueGroup_nkzqs_43";
const icon = "_icon_nkzqs_46";
const up = "_up_nkzqs_56";
const down = "_down_nkzqs_62";
var styles = {
  strategySheetTooltip,
  row,
  value,
  col,
  name,
  data,
  header,
  label,
  originalValue,
  divider,
  derivedValues,
  derivedValueGroup,
  icon,
  up,
  down
};
const RowTooltip = ({ cell }) => {
  const { field, spreadsheet, value: value2, extra } = cell.getMeta();
  const description = React__default["default"].useMemo(() => {
    return spreadsheet.dataSet.getFieldDescription(field) || (extra == null ? void 0 : extra.description);
  }, [extra == null ? void 0 : extra.description, field, spreadsheet.dataSet]);
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    className: cx(styles.strategySheetTooltip, styles.row)
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: styles.value
  }, value2), description && /* @__PURE__ */ React__default["default"].createElement("div", null, i18n("\u8BF4\u660E"), ": ", description));
};
const ColTooltip = ({ cell }) => {
  const meta = cell.getMeta();
  if (meta.isLeaf && meta.level !== 0) {
    return null;
  }
  const cellName = meta.spreadsheet.dataSet.getFieldName(meta.field);
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    className: cx(styles.strategySheetTooltip, styles.col)
  }, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: styles.name
  }, cellName), /* @__PURE__ */ React__default["default"].createElement("span", {
    className: styles.col
  }, meta.value));
};
const DataTooltip = ({ cell }) => {
  var _a, _b, _c;
  const meta = cell.getMeta();
  const currentRow = React__default["default"].useMemo(() => find$2(meta.spreadsheet.getRowNodes(), {
    rowIndex: meta.rowIndex
  }), [meta]);
  const currentLeafCol = React__default["default"].useMemo(() => find$2(meta.spreadsheet.getColumnNodes(), {
    colIndex: meta.colIndex,
    isLeaf: true
  }), [meta]);
  const [, ...derivedLabels] = React__default["default"].useMemo(() => {
    try {
      return JSON.parse(currentLeafCol.value);
    } catch {
      return [];
    }
  }, [currentLeafCol.value]);
  const rowName = meta.spreadsheet.dataSet.getFieldName((currentRow == null ? void 0 : currentRow.valueFiled) || (currentRow == null ? void 0 : currentRow.value));
  const [value2, ...derivedValues2] = head((_a = meta.fieldValue) == null ? void 0 : _a.values) || [meta.fieldValue];
  const { placeholder, style: style2 } = meta.spreadsheet.options;
  const valuesCfg = (_b = style2.cellCfg) == null ? void 0 : _b.valuesCfg;
  const originalValue2 = get(meta.fieldValue, valuesCfg == null ? void 0 : valuesCfg.originalValueField);
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    className: cx(styles.strategySheetTooltip, styles.data)
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: styles.header
  }, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: styles.label
  }, rowName), /* @__PURE__ */ React__default["default"].createElement("span", null, value2 != null ? value2 : placeholder)), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: styles.originalValue
  }, ((_c = originalValue2 == null ? void 0 : originalValue2[0]) == null ? void 0 : _c[0]) || placeholder), !isEmpty(derivedValues2) && /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: styles.divider
  }), /* @__PURE__ */ React__default["default"].createElement("ul", {
    className: styles.derivedValues
  }, derivedValues2.map((derivedValue, i) => {
    const isNormal = isNil(derivedValue);
    const isUp = s2.isUpDataValue(derivedValue);
    const isDown = !isNormal && !isUp;
    return /* @__PURE__ */ React__default["default"].createElement("li", {
      className: styles.value,
      key: i
    }, /* @__PURE__ */ React__default["default"].createElement("span", {
      className: styles.derivedValueLabel
    }, derivedLabels[i]), /* @__PURE__ */ React__default["default"].createElement("span", {
      className: cx(styles.derivedValueGroup, {
        [styles.up]: isUp,
        [styles.down]: isDown
      })
    }, !isNormal && /* @__PURE__ */ React__default["default"].createElement("span", {
      className: styles.icon
    }), /* @__PURE__ */ React__default["default"].createElement("span", {
      className: styles.value
    }, derivedValue != null ? derivedValue : placeholder)));
  }))));
};
class CustomColCell extends s2.ColCell {
  constructor(meta, spreadsheet, headerConfig) {
    super(meta, spreadsheet, headerConfig);
  }
  drawTextShape() {
    var _a;
    const fieldValue = (_a = this.getMeta()) == null ? void 0 : _a.value;
    const values2 = s2.safeJsonParse(fieldValue);
    if (isArray$1(values2)) {
      s2.drawObjectText(this, { values: [values2] }, true);
    } else {
      super.drawTextShape();
    }
  }
}
class CustomDataCell extends s2.DataCell {
  drawTextShape() {
    if (isObject(this.getMeta().fieldValue)) {
      s2.drawObjectText(this);
    } else {
      super.drawTextShape();
    }
  }
}
class StrategyDataSet extends s2.CustomTreePivotDataSet {
  processDataCfg(dataCfg) {
    dataCfg.fields.rows = [s2.EXTRA_FIELD];
    dataCfg.fields.valueInCols = false;
    const _a = dataCfg, { data: data2 } = _a, restCfg = __objRest(_a, ["data"]);
    const transformedData = [];
    forEach(data2, (dataItem) => {
      let isPushed = false;
      forIn(dataItem, (value2, key) => {
        if (isObject(value2)) {
          transformedData.push(__spreadProps(__spreadValues({}, dataItem), {
            [s2.EXTRA_FIELD]: key,
            [s2.VALUE_FIELD]: value2
          }));
          isPushed = true;
        }
      });
      if (!isPushed) {
        transformedData.push(dataItem);
      }
    });
    return __spreadValues({
      data: uniq(transformedData)
    }, restCfg);
  }
}
const StrategySheet = React__default["default"].memo((props) => {
  const _a = props, { options, themeCfg, dataCfg } = _a, restProps = __objRest(_a, ["options", "themeCfg", "dataCfg"]);
  const s2Ref = React__default["default"].useRef();
  const strategySheetOptions = React__default["default"].useMemo(() => {
    var _a2, _b, _c;
    if (isEmpty(dataCfg)) {
      return {};
    }
    let hideMeasureColumn = false;
    let hierarchyType = "tree";
    if (isEmpty((_a2 = dataCfg == null ? void 0 : dataCfg.fields) == null ? void 0 : _a2.rows) && !isEmpty((_b = dataCfg == null ? void 0 : dataCfg.fields) == null ? void 0 : _b.customTreeItems)) {
      hierarchyType = "customTree";
    }
    if (size((_c = dataCfg == null ? void 0 : dataCfg.fields) == null ? void 0 : _c.values) === 1 && options.hierarchyType !== "customTree") {
      hideMeasureColumn = true;
    }
    return {
      dataCell: (viewMeta) => new CustomDataCell(viewMeta, viewMeta.spreadsheet),
      colCell: (node, spreadsheet, headerConfig) => new CustomColCell(node, spreadsheet, headerConfig),
      dataSet: (spreadSheet) => new StrategyDataSet(spreadSheet),
      showDefaultHeaderActionIcon: false,
      hierarchyType,
      style: {
        colCfg: {
          hideMeasureColumn
        }
      },
      interaction: {
        autoResetSheetStyle: true,
        brushSelection: false,
        multiSelection: false,
        rangeSelection: false
      },
      tooltip: {
        operation: {
          hiddenColumns: true
        },
        row: {
          content: (cell, defaultTooltipShowOptions) => /* @__PURE__ */ React__default["default"].createElement(RowTooltip, {
            cell,
            defaultTooltipShowOptions
          })
        },
        col: {
          content: (cell, defaultTooltipShowOptions) => /* @__PURE__ */ React__default["default"].createElement(ColTooltip, {
            cell,
            defaultTooltipShowOptions
          })
        },
        data: {
          content: (cell, defaultTooltipShowOptions) => /* @__PURE__ */ React__default["default"].createElement(DataTooltip, {
            cell,
            defaultTooltipShowOptions
          })
        }
      }
    };
  }, [dataCfg, options.hierarchyType]);
  const s2DataCfg = React__default["default"].useMemo(() => {
    var _a2;
    const defaultFields = {
      fields: {
        valueInCols: size((_a2 = dataCfg == null ? void 0 : dataCfg.fields) == null ? void 0 : _a2.values) <= 1
      }
    };
    return s2.customMerge(dataCfg, defaultFields);
  }, [dataCfg]);
  const s2Options = React__default["default"].useMemo(() => {
    return s2.customMerge(options, strategySheetOptions);
  }, [options, strategySheetOptions]);
  return /* @__PURE__ */ React__default["default"].createElement(BaseSheet, __spreadValues({
    options: s2Options,
    themeCfg,
    dataCfg: s2DataCfg,
    ref: s2Ref
  }, restProps));
});
StrategySheet.displayName = "StrategySheet";
var index = "";
const DrillDown = (_m) => {
  var _n = _m, {
    className,
    titleText = i18n("\u9009\u62E9\u4E0B\u94BB\u7EF4\u5EA6"),
    clearButtonText = i18n("\u6062\u590D\u9ED8\u8BA4"),
    searchText = i18n("\u641C\u7D22\u5B57\u6BB5"),
    extra,
    drillFields,
    dataSet,
    disabledFields,
    getDrillFields,
    setDrillFields
  } = _n, restProps = __objRest(_n, [
    "className",
    "titleText",
    "clearButtonText",
    "searchText",
    "extra",
    "drillFields",
    "dataSet",
    "disabledFields",
    "getDrillFields",
    "setDrillFields"
  ]);
  const PRE_CLASS2 = "s2-drill-down";
  const DRILL_DOWN_ICON_MAP = {
    text: /* @__PURE__ */ React__default["default"].createElement(TextIcon, null),
    location: /* @__PURE__ */ React__default["default"].createElement(LocationIcon, null),
    date: /* @__PURE__ */ React__default["default"].createElement(CalendarIcon, null)
  };
  const getOptions2 = () => {
    return dataSet.map((val) => {
      const item = val;
      item.disabled = !!(disabledFields && disabledFields.includes(item.value));
      return item;
    });
  };
  const [options, setOptions] = React.useState(getOptions2());
  const handleSearch = (e2) => {
    const { value: value2 } = e2.target;
    if (!value2) {
      setOptions([...dataSet]);
    } else {
      const reg = new RegExp(value2, "gi");
      const result = dataSet.filter((item) => reg.test(item.name));
      setOptions([...result]);
    }
  };
  const handleSelect = (value2) => {
    const key = value2 == null ? void 0 : value2.selectedKeys;
    if (getDrillFields) {
      getDrillFields([...key]);
    }
    if (setDrillFields)
      setDrillFields([...key]);
  };
  const handleClear = (e2) => {
    e2.stopPropagation();
    if (getDrillFields)
      getDrillFields([]);
    if (setDrillFields)
      setDrillFields([]);
  };
  React.useEffect(() => {
    setOptions(getOptions2());
  }, [disabledFields]);
  return /* @__PURE__ */ React__default["default"].createElement(antd.ConfigProvider, null, /* @__PURE__ */ React__default["default"].createElement("div", __spreadValues({
    className: cx(PRE_CLASS2, className)
  }, restProps), /* @__PURE__ */ React__default["default"].createElement("header", {
    className: `${PRE_CLASS2}-header`
  }, /* @__PURE__ */ React__default["default"].createElement("div", null, titleText), /* @__PURE__ */ React__default["default"].createElement(antd.Button, {
    type: "link",
    disabled: isEmpty(drillFields),
    onClick: handleClear
  }, clearButtonText)), /* @__PURE__ */ React__default["default"].createElement(antd.Input, {
    className: `${PRE_CLASS2}-search`,
    placeholder: searchText,
    onChange: handleSearch,
    onPressEnter: handleSearch,
    prefix: /* @__PURE__ */ React__default["default"].createElement(SearchIcon, null),
    allowClear: true
  }), isEmpty(options) && /* @__PURE__ */ React__default["default"].createElement(antd.Empty, {
    imageStyle: { height: "64px" },
    className: `${PRE_CLASS2}-empty`
  }), extra, /* @__PURE__ */ React__default["default"].createElement(antd.Menu, {
    className: `${PRE_CLASS2}-menu`,
    selectedKeys: drillFields,
    onSelect: handleSelect
  }, options.map((option) => /* @__PURE__ */ React__default["default"].createElement(antd.Menu.Item, {
    key: option.value,
    disabled: option.disabled,
    className: `${PRE_CLASS2}-menu-item`,
    icon: option.icon ? option.icon : DRILL_DOWN_ICON_MAP[option.type]
  }, option.name)))));
};
const PivotSheet = React__default["default"].memo((props) => {
  const { dataCfg, partDrillDown, options } = props;
  const drillDownIconRef = React__default["default"].useRef();
  const latestPropsRef = useLatest(props);
  const drillConfigRef = useLatest(partDrillDown == null ? void 0 : partDrillDown.drillConfig);
  const rowFieldsRef = useLatest(dataCfg.fields.rows);
  const fetchDataRef = useLatest(partDrillDown == null ? void 0 : partDrillDown.fetchData);
  const drillItemsNumRef = useLatest(partDrillDown == null ? void 0 : partDrillDown.drillItemsNum);
  const s2Ref = React__default["default"].useRef();
  const [drillFields, setDrillFields] = React__default["default"].useState([]);
  const onDrillDownIconClick = (sheetInstance, cacheDrillFields, disabledFields, event) => {
    const content = /* @__PURE__ */ React__default["default"].createElement(DrillDown, __spreadProps(__spreadValues({}, drillConfigRef.current), {
      setDrillFields,
      drillFields: cacheDrillFields,
      disabledFields
    }));
    if (event) {
      const { showTooltip } = s2.getTooltipOptions(sheetInstance, event);
      if (!showTooltip) {
        return;
      }
      sheetInstance.showTooltip({
        position: {
          x: event.clientX,
          y: event.clientY
        },
        content
      });
    }
  };
  const updateDrillDownOptions = (sheetProps = latestPropsRef.current) => {
    const drillDownOptions = handleDrillDownIcon(sheetProps, s2Ref.current, onDrillDownIconClick, drillDownIconRef);
    s2Ref.current.setOptions(drillDownOptions);
  };
  const clearDrillDownInfo = (rowId) => {
    var _a;
    (_a = s2Ref.current) == null ? void 0 : _a.clearDrillDownData(rowId);
  };
  React__default["default"].useEffect(() => {
    var _a, _b;
    (_a = s2Ref.current) == null ? void 0 : _a.hideTooltip();
    if (isEmpty(drillFields)) {
      clearDrillDownInfo((_b = s2Ref.current.store.get("drillDownNode")) == null ? void 0 : _b.id);
    } else {
      handleDrillDown({
        rows: rowFieldsRef.current,
        drillFields,
        fetchData: fetchDataRef.current,
        drillItemsNum: drillItemsNumRef.current,
        spreadsheet: s2Ref.current
      });
    }
    updateDrillDownOptions();
  }, [drillFields]);
  React__default["default"].useEffect(() => {
    var _a;
    if (isEmpty(partDrillDown == null ? void 0 : partDrillDown.clearDrillDown)) {
      return;
    }
    clearDrillDownInfo((_a = partDrillDown == null ? void 0 : partDrillDown.clearDrillDown) == null ? void 0 : _a.rowId);
  }, [partDrillDown == null ? void 0 : partDrillDown.clearDrillDown]);
  React__default["default"].useEffect(() => {
    updateDrillDownOptions();
    s2Ref.current.render();
  }, [
    partDrillDown == null ? void 0 : partDrillDown.drillConfig,
    partDrillDown == null ? void 0 : partDrillDown.displayCondition,
    partDrillDown == null ? void 0 : partDrillDown.drillItemsNum,
    options.hierarchyType
  ]);
  return /* @__PURE__ */ React__default["default"].createElement(BaseSheet, __spreadProps(__spreadValues({}, props), {
    ref: s2Ref
  }));
});
PivotSheet.displayName = "PivotSheet";
const Sheet = React__default["default"].forwardRef((props, ref) => {
  const { sheetType } = props;
  const sheetProps = React__default["default"].useMemo(() => {
    return __spreadProps(__spreadValues({}, props), {
      getSpreadSheet: (instance) => {
        var _a;
        if (ref) {
          ref.current = instance;
        }
        (_a = props.getSpreadSheet) == null ? void 0 : _a.call(props, instance);
      }
    });
  }, [props, ref]);
  const CurrentSheet = React__default["default"].useMemo(() => {
    switch (sheetType) {
      case "table":
        return /* @__PURE__ */ React__default["default"].createElement(TableSheet, __spreadValues({}, sheetProps));
      case "gridAnalysis":
        return /* @__PURE__ */ React__default["default"].createElement(GridAnalysisSheet, __spreadValues({}, sheetProps));
      case "strategy":
        return /* @__PURE__ */ React__default["default"].createElement(StrategySheet, __spreadValues({}, sheetProps));
      default:
        return /* @__PURE__ */ React__default["default"].createElement(PivotSheet, __spreadValues({}, sheetProps));
    }
  }, [sheetType, sheetProps]);
  return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].StrictMode, null, CurrentSheet);
});
Sheet.displayName = "SheetComponent";
const SheetComponent = React__default["default"].memo(Sheet);
exports.AdvancedSort = AdvancedSort;
exports.BaseSheet = BaseSheet;
exports.DrillDown = DrillDown;
exports.GridAnalysisSheet = GridAnalysisSheet;
exports.SheetComponent = SheetComponent;
exports.StrategySheet = StrategySheet;
exports.Switcher = Switcher;
exports.TableSheet = TableSheet;
exports.TooltipComponent = TooltipComponent;
//# sourceMappingURL=index.js.map
