(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["polyfills"],{

/***/ 30951:
/*!*********************************************!*\
  !*** ./node_modules/core-js/es6/reflect.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ../modules/es6.reflect.apply */ 48914);
__webpack_require__(/*! ../modules/es6.reflect.construct */ 4821);
__webpack_require__(/*! ../modules/es6.reflect.define-property */ 47564);
__webpack_require__(/*! ../modules/es6.reflect.delete-property */ 27421);
__webpack_require__(/*! ../modules/es6.reflect.enumerate */ 68465);
__webpack_require__(/*! ../modules/es6.reflect.get */ 54056);
__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ 25144);
__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ 58678);
__webpack_require__(/*! ../modules/es6.reflect.has */ 26300);
__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ 1267);
__webpack_require__(/*! ../modules/es6.reflect.own-keys */ 98013);
__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ 14220);
__webpack_require__(/*! ../modules/es6.reflect.set */ 90550);
__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ 69634);
module.exports = __webpack_require__(/*! ../modules/_core */ 87510).Reflect;


/***/ }),

/***/ 25317:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 83018:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ 31853);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 76783:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ 33124);
var toLength = __webpack_require__(/*! ./_to-length */ 62435);
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ 82023);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 78317:
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ 25317);
var isObject = __webpack_require__(/*! ./_is-object */ 31853);
var invoke = __webpack_require__(/*! ./_invoke */ 31795);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ 61467:
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 87510:
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/***/ ((module) => {

var core = module.exports = { version: '2.6.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 96912:
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ 25317);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 81918:
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/***/ ((module) => {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 87038:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ 91329)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 60292:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./_is-object */ 31853);
var document = (__webpack_require__(/*! ./_global */ 78122).document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 32474:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/***/ ((module) => {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 5019:
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ 78122);
var core = __webpack_require__(/*! ./_core */ 87510);
var hide = __webpack_require__(/*! ./_hide */ 42493);
var redefine = __webpack_require__(/*! ./_redefine */ 7892);
var ctx = __webpack_require__(/*! ./_ctx */ 96912);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 91329:
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 78122:
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 98197:
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 42493:
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ 76936);
var createDesc = __webpack_require__(/*! ./_property-desc */ 15625);
module.exports = __webpack_require__(/*! ./_descriptors */ 87038) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 48805:
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var document = (__webpack_require__(/*! ./_global */ 78122).document);
module.exports = document && document.documentElement;


/***/ }),

/***/ 62866:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(/*! ./_descriptors */ 87038) && !__webpack_require__(/*! ./_fails */ 91329)(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 60292)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 31795:
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/***/ ((module) => {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ 61320:
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ 61467);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 31853:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 22915:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ 49108);
var descriptor = __webpack_require__(/*! ./_property-desc */ 15625);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 70486);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ 42493)(IteratorPrototype, __webpack_require__(/*! ./_wks */ 44312)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ 65184:
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ 49108:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ 83018);
var dPs = __webpack_require__(/*! ./_object-dps */ 19692);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 32474);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 76297)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ 60292)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  (__webpack_require__(/*! ./_html */ 48805).appendChild)(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ 76936:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ./_an-object */ 83018);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 62866);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 97044);
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ 87038) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 19692:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(/*! ./_object-dp */ 76936);
var anObject = __webpack_require__(/*! ./_an-object */ 83018);
var getKeys = __webpack_require__(/*! ./_object-keys */ 30711);

module.exports = __webpack_require__(/*! ./_descriptors */ 87038) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ 58312:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var pIE = __webpack_require__(/*! ./_object-pie */ 36173);
var createDesc = __webpack_require__(/*! ./_property-desc */ 15625);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 33124);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 97044);
var has = __webpack_require__(/*! ./_has */ 98197);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 62866);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ 87038) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ 1029:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 61924);
var hiddenKeys = (__webpack_require__(/*! ./_enum-bug-keys */ 32474).concat)('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ 33494:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 5027:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ 98197);
var toObject = __webpack_require__(/*! ./_to-object */ 15353);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 76297)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ 61924:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ./_has */ 98197);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 33124);
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 76783)(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 76297)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 30711:
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 61924);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 32474);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 36173:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 54295:
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ 1029);
var gOPS = __webpack_require__(/*! ./_object-gops */ 33494);
var anObject = __webpack_require__(/*! ./_an-object */ 83018);
var Reflect = (__webpack_require__(/*! ./_global */ 78122).Reflect);
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ 15625:
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 7892:
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ./_global */ 78122);
var hide = __webpack_require__(/*! ./_hide */ 42493);
var has = __webpack_require__(/*! ./_has */ 98197);
var SRC = __webpack_require__(/*! ./_uid */ 35735)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

(__webpack_require__(/*! ./_core */ 87510).inspectSource) = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ 99264:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ 31853);
var anObject = __webpack_require__(/*! ./_an-object */ 83018);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ 96912)(Function.call, (__webpack_require__(/*! ./_object-gopd */ 58312).f)(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ 70486:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var def = (__webpack_require__(/*! ./_object-dp */ 76936).f);
var has = __webpack_require__(/*! ./_has */ 98197);
var TAG = __webpack_require__(/*! ./_wks */ 44312)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ 76297:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(/*! ./_shared */ 58116)('keys');
var uid = __webpack_require__(/*! ./_uid */ 35735);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 58116:
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var core = __webpack_require__(/*! ./_core */ 87510);
var global = __webpack_require__(/*! ./_global */ 78122);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ 65184) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 82023:
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ./_to-integer */ 14470);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 14470:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/***/ ((module) => {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 33124:
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ 61320);
var defined = __webpack_require__(/*! ./_defined */ 81918);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 62435:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ 14470);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 15353:
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ 81918);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 97044:
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ 31853);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 35735:
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/***/ ((module) => {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 44312:
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(/*! ./_shared */ 58116)('wks');
var uid = __webpack_require__(/*! ./_uid */ 35735);
var Symbol = (__webpack_require__(/*! ./_global */ 78122).Symbol);
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ 48914:
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ 5019);
var aFunction = __webpack_require__(/*! ./_a-function */ 25317);
var anObject = __webpack_require__(/*! ./_an-object */ 83018);
var rApply = ((__webpack_require__(/*! ./_global */ 78122).Reflect) || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ 91329)(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),

/***/ 4821:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ 5019);
var create = __webpack_require__(/*! ./_object-create */ 49108);
var aFunction = __webpack_require__(/*! ./_a-function */ 25317);
var anObject = __webpack_require__(/*! ./_an-object */ 83018);
var isObject = __webpack_require__(/*! ./_is-object */ 31853);
var fails = __webpack_require__(/*! ./_fails */ 91329);
var bind = __webpack_require__(/*! ./_bind */ 78317);
var rConstruct = ((__webpack_require__(/*! ./_global */ 78122).Reflect) || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ 47564:
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ 76936);
var $export = __webpack_require__(/*! ./_export */ 5019);
var anObject = __webpack_require__(/*! ./_an-object */ 83018);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 97044);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ 91329)(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ 27421:
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ 5019);
var gOPD = (__webpack_require__(/*! ./_object-gopd */ 58312).f);
var anObject = __webpack_require__(/*! ./_an-object */ 83018);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),

/***/ 68465:
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(/*! ./_export */ 5019);
var anObject = __webpack_require__(/*! ./_an-object */ 83018);
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(/*! ./_iter-create */ 22915)(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),

/***/ 25144:
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ 58312);
var $export = __webpack_require__(/*! ./_export */ 5019);
var anObject = __webpack_require__(/*! ./_an-object */ 83018);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),

/***/ 58678:
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ 5019);
var getProto = __webpack_require__(/*! ./_object-gpo */ 5027);
var anObject = __webpack_require__(/*! ./_an-object */ 83018);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),

/***/ 54056:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ 58312);
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 5027);
var has = __webpack_require__(/*! ./_has */ 98197);
var $export = __webpack_require__(/*! ./_export */ 5019);
var isObject = __webpack_require__(/*! ./_is-object */ 31853);
var anObject = __webpack_require__(/*! ./_an-object */ 83018);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),

/***/ 26300:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ 5019);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),

/***/ 1267:
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ 5019);
var anObject = __webpack_require__(/*! ./_an-object */ 83018);
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),

/***/ 98013:
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ 5019);

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(/*! ./_own-keys */ 54295) });


/***/ }),

/***/ 14220:
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ 5019);
var anObject = __webpack_require__(/*! ./_an-object */ 83018);
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ 69634:
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ 5019);
var setProto = __webpack_require__(/*! ./_set-proto */ 99264);

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),

/***/ 90550:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ 76936);
var gOPD = __webpack_require__(/*! ./_object-gopd */ 58312);
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 5027);
var has = __webpack_require__(/*! ./_has */ 98197);
var $export = __webpack_require__(/*! ./_export */ 5019);
var createDesc = __webpack_require__(/*! ./_property-desc */ 15625);
var anObject = __webpack_require__(/*! ./_an-object */ 83018);
var isObject = __webpack_require__(/*! ./_is-object */ 31853);

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),

/***/ 40956:
/*!****************************!*\
  !*** ./src/global-shim.ts ***!
  \****************************/
/***/ (() => {

window.global = window;

/***/ }),

/***/ 23443:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var global_shim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! global-shim */ 40956);
/* harmony import */ var global_shim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(global_shim__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es6/reflect */ 30951);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zone.js */ 35642);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! intl */ 98937);
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(intl__WEBPACK_IMPORTED_MODULE_3__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
 // Run `npm install --save classlist.js`. // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/

/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
 // Run `npm install --save intl`.

/***/ }),

/***/ 98937:
/*!************************************!*\
  !*** ./node_modules/intl/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Expose `IntlPolyfill` as global to add locale data into runtime later on.
global.IntlPolyfill = __webpack_require__(/*! ./lib/core.js */ 98406);

// Require all locale data for `Intl`. This module will be
// ignored when bundling for the browser with Browserify/Webpack.
__webpack_require__(/*! ./locale-data/complete.js */ 12482);

// hack to export the polyfill as global Intl if needed
if (!global.Intl) {
  global.Intl = global.IntlPolyfill;
  global.IntlPolyfill.__applyLocaleSensitivePrototypes();
}

// providing an idiomatic api for the nodejs version of this module
module.exports = global.IntlPolyfill;

/***/ }),

/***/ 98406:
/*!***************************************!*\
  !*** ./node_modules/intl/lib/core.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var jsx = function () {
  var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;
  return function createRawReactElement(type, props, key, children) {
    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;
    if (!props && childrenLength !== 0) {
      props = {};
    }
    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName];
        }
      }
    } else if (!props) {
      props = defaultProps || {};
    }
    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3];
      }
      props.children = childArray;
    }
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key === undefined ? null : '' + key,
      ref: null,
      props: props,
      _owner: null
    };
  };
}();
var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            return step("next", value);
          }, function (err) {
            return step("throw", err);
          });
        }
      }
      return step("next");
    });
  };
};
var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var defineEnumerableProperties = function (obj, descs) {
  for (var key in descs) {
    var desc = descs[key];
    desc.configurable = desc.enumerable = true;
    if ("value" in desc) desc.writable = true;
    Object.defineProperty(obj, key, desc);
  }
  return obj;
};
var defaults = function (obj, defaults) {
  var keys = Object.getOwnPropertyNames(defaults);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = Object.getOwnPropertyDescriptor(defaults, key);
    if (value && value.configurable && obj[key] === undefined) {
      Object.defineProperty(obj, key, value);
    }
  }
  return obj;
};
var defineProperty$1 = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
};
var _extends = Object.assign || function (target) {
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
var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);
  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);
    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;
    if (getter === undefined) {
      return undefined;
    }
    return getter.call(receiver);
  }
};
var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};
var _instanceof = function (left, right) {
  if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
    return right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
};
var interopRequireDefault = function (obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
};
var interopRequireWildcard = function (obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
};
var newArrowCheck = function (innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
};
var objectDestructuringEmpty = function (obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
};
var objectWithoutProperties = function (obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
};
var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};
var selfGlobal = typeof global === "undefined" ? self : global;
var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);
  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);
    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;
    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }
  return value;
};
var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
var slicedToArrayLoose = function (arr, i) {
  if (Array.isArray(arr)) {
    return arr;
  } else if (Symbol.iterator in Object(arr)) {
    var _arr = [];
    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);
      if (i && _arr.length === i) break;
    }
    return _arr;
  } else {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }
};
var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};
var taggedTemplateLiteralLoose = function (strings, raw) {
  strings.raw = raw;
  return strings;
};
var temporalRef = function (val, name, undef) {
  if (val === undef) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  } else {
    return val;
  }
};
var temporalUndefined = {};
var toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};
var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
    return arr2;
  } else {
    return Array.from(arr);
  }
};
var babelHelpers$1 = Object.freeze({
  jsx: jsx,
  asyncToGenerator: asyncToGenerator,
  classCallCheck: classCallCheck,
  createClass: createClass,
  defineEnumerableProperties: defineEnumerableProperties,
  defaults: defaults,
  defineProperty: defineProperty$1,
  get: get,
  inherits: inherits,
  interopRequireDefault: interopRequireDefault,
  interopRequireWildcard: interopRequireWildcard,
  newArrowCheck: newArrowCheck,
  objectDestructuringEmpty: objectDestructuringEmpty,
  objectWithoutProperties: objectWithoutProperties,
  possibleConstructorReturn: possibleConstructorReturn,
  selfGlobal: selfGlobal,
  set: set,
  slicedToArray: slicedToArray,
  slicedToArrayLoose: slicedToArrayLoose,
  taggedTemplateLiteral: taggedTemplateLiteral,
  taggedTemplateLiteralLoose: taggedTemplateLiteralLoose,
  temporalRef: temporalRef,
  temporalUndefined: temporalUndefined,
  toArray: toArray,
  toConsumableArray: toConsumableArray,
  typeof: _typeof,
  extends: _extends,
  instanceof: _instanceof
});
var realDefineProp = function () {
  var sentinel = function sentinel() {};
  try {
    Object.defineProperty(sentinel, 'a', {
      get: function get() {
        return 1;
      }
    });
    Object.defineProperty(sentinel, 'prototype', {
      writable: false
    });
    return sentinel.a === 1 && sentinel.prototype instanceof Object;
  } catch (e) {
    return false;
  }
}();

// Need a workaround for getters in ES3
var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

// We use this a lot (and need it for proto-less objects)
var hop = Object.prototype.hasOwnProperty;

// Naive defineProperty for compatibility
var defineProperty = realDefineProp ? Object.defineProperty : function (obj, name, desc) {
  if ('get' in desc && obj.__defineGetter__) obj.__defineGetter__(name, desc.get);else if (!hop.call(obj, name) || 'value' in desc) obj[name] = desc.value;
};

// Array.prototype.indexOf, as good as we need it to be
var arrIndexOf = Array.prototype.indexOf || function (search) {
  /*jshint validthis:true */
  var t = this;
  if (!t.length) return -1;
  for (var i = arguments[1] || 0, max = t.length; i < max; i++) {
    if (t[i] === search) return i;
  }
  return -1;
};

// Create an object with the specified prototype (2nd arg required for Record)
var objCreate = Object.create || function (proto, props) {
  var obj = void 0;
  function F() {}
  F.prototype = proto;
  obj = new F();
  for (var k in props) {
    if (hop.call(props, k)) defineProperty(obj, k, props[k]);
  }
  return obj;
};

// Snapshot some (hopefully still) native built-ins
var arrSlice = Array.prototype.slice;
var arrConcat = Array.prototype.concat;
var arrPush = Array.prototype.push;
var arrJoin = Array.prototype.join;
var arrShift = Array.prototype.shift;

// Naive Function.prototype.bind for compatibility
var fnBind = Function.prototype.bind || function (thisObj) {
  var fn = this,
    args = arrSlice.call(arguments, 1);

  // All our (presently) bound functions have either 1 or 0 arguments. By returning
  // different function signatures, we can pass some tests in ES3 environments
  if (fn.length === 1) {
    return function () {
      return fn.apply(thisObj, arrConcat.call(args, arrSlice.call(arguments)));
    };
  }
  return function () {
    return fn.apply(thisObj, arrConcat.call(args, arrSlice.call(arguments)));
  };
};

// Object housing internal properties for constructors
var internals = objCreate(null);

// Keep internal properties internal
var secret = Math.random();

// Helper functions
// ================

/**
 * A function to deal with the inaccuracy of calculating log10 in pre-ES6
 * JavaScript environments. Math.log(num) / Math.LN10 was responsible for
 * causing issue #62.
 */
function log10Floor(n) {
  // ES6 provides the more accurate Math.log10
  if (typeof Math.log10 === 'function') return Math.floor(Math.log10(n));
  var x = Math.round(Math.log(n) * Math.LOG10E);
  return x - (Number('1e' + x) > n);
}

/**
 * A map that doesn't contain Object in its prototype chain
 */
function Record(obj) {
  // Copy only own properties over unless this object is already a Record instance
  for (var k in obj) {
    if (obj instanceof Record || hop.call(obj, k)) defineProperty(this, k, {
      value: obj[k],
      enumerable: true,
      writable: true,
      configurable: true
    });
  }
}
Record.prototype = objCreate(null);

/**
 * An ordered list
 */
function List() {
  defineProperty(this, 'length', {
    writable: true,
    value: 0
  });
  if (arguments.length) arrPush.apply(this, arrSlice.call(arguments));
}
List.prototype = objCreate(null);

/**
 * Constructs a regular expression to restore tainted RegExp properties
 */
function createRegExpRestore() {
  if (internals.disableRegExpRestore) {
    return function () {/* no-op */};
  }
  var regExpCache = {
      lastMatch: RegExp.lastMatch || '',
      leftContext: RegExp.leftContext,
      multiline: RegExp.multiline,
      input: RegExp.input
    },
    has = false;

  // Create a snapshot of all the 'captured' properties
  for (var i = 1; i <= 9; i++) {
    has = (regExpCache['$' + i] = RegExp['$' + i]) || has;
  }
  return function () {
    // Now we've snapshotted some properties, escape the lastMatch string
    var esc = /[.?*+^$[\]\\(){}|-]/g,
      lm = regExpCache.lastMatch.replace(esc, '\\$&'),
      reg = new List();

    // If any of the captured strings were non-empty, iterate over them all
    if (has) {
      for (var _i = 1; _i <= 9; _i++) {
        var m = regExpCache['$' + _i];

        // If it's empty, add an empty capturing group
        if (!m) lm = '()' + lm;

        // Else find the string in lm and escape & wrap it to capture it
        else {
          m = m.replace(esc, '\\$&');
          lm = lm.replace(m, '(' + m + ')');
        }

        // Push it to the reg and chop lm to make sure further groups come after
        arrPush.call(reg, lm.slice(0, lm.indexOf('(') + 1));
        lm = lm.slice(lm.indexOf('(') + 1);
      }
    }
    var exprStr = arrJoin.call(reg, '') + lm;

    // Shorten the regex by replacing each part of the expression with a match
    // for a string of that exact length.  This is safe for the type of
    // expressions generated above, because the expression matches the whole
    // match string, so we know each group and each segment between capturing
    // groups can be matched by its length alone.
    exprStr = exprStr.replace(/(\\\(|\\\)|[^()])+/g, function (match) {
      return '[\\s\\S]{' + match.replace('\\', '').length + '}';
    });

    // Create the regular expression that will reconstruct the RegExp properties
    var expr = new RegExp(exprStr, regExpCache.multiline ? 'gm' : 'g');

    // Set the lastIndex of the generated expression to ensure that the match
    // is found in the correct index.
    expr.lastIndex = regExpCache.leftContext.length;
    expr.exec(regExpCache.input);
  };
}

/**
 * Mimics ES5's abstract ToObject() function
 */
function toObject(arg) {
  if (arg === null) throw new TypeError('Cannot convert null or undefined to object');
  if ((typeof arg === 'undefined' ? 'undefined' : babelHelpers$1['typeof'](arg)) === 'object') return arg;
  return Object(arg);
}
function toNumber(arg) {
  if (typeof arg === 'number') return arg;
  return Number(arg);
}
function toInteger(arg) {
  var number = toNumber(arg);
  if (isNaN(number)) return 0;
  if (number === +0 || number === -0 || number === +Infinity || number === -Infinity) return number;
  if (number < 0) return Math.floor(Math.abs(number)) * -1;
  return Math.floor(Math.abs(number));
}
function toLength(arg) {
  var len = toInteger(arg);
  if (len <= 0) return 0;
  if (len === Infinity) return Math.pow(2, 53) - 1;
  return Math.min(len, Math.pow(2, 53) - 1);
}

/**
 * Returns "internal" properties for an object
 */
function getInternalProperties(obj) {
  if (hop.call(obj, '__getInternalProperties')) return obj.__getInternalProperties(secret);
  return objCreate(null);
}

/**
* Defines regular expressions for various operations related to the BCP 47 syntax,
* as defined at http://tools.ietf.org/html/bcp47#section-2.1
*/

// extlang       = 3ALPHA              ; selected ISO 639 codes
//                 *2("-" 3ALPHA)      ; permanently reserved
var extlang = '[a-z]{3}(?:-[a-z]{3}){0,2}';

// language      = 2*3ALPHA            ; shortest ISO 639 code
//                 ["-" extlang]       ; sometimes followed by
//                                     ; extended language subtags
//               / 4ALPHA              ; or reserved for future use
//               / 5*8ALPHA            ; or registered language subtag
var language = '(?:[a-z]{2,3}(?:-' + extlang + ')?|[a-z]{4}|[a-z]{5,8})';

// script        = 4ALPHA              ; ISO 15924 code
var script = '[a-z]{4}';

// region        = 2ALPHA              ; ISO 3166-1 code
//               / 3DIGIT              ; UN M.49 code
var region = '(?:[a-z]{2}|\\d{3})';

// variant       = 5*8alphanum         ; registered variants
//               / (DIGIT 3alphanum)
var variant = '(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3})';

//                                     ; Single alphanumerics
//                                     ; "x" reserved for private use
// singleton     = DIGIT               ; 0 - 9
//               / %x41-57             ; A - W
//               / %x59-5A             ; Y - Z
//               / %x61-77             ; a - w
//               / %x79-7A             ; y - z
var singleton = '[0-9a-wy-z]';

// extension     = singleton 1*("-" (2*8alphanum))
var extension = singleton + '(?:-[a-z0-9]{2,8})+';

// privateuse    = "x" 1*("-" (1*8alphanum))
var privateuse = 'x(?:-[a-z0-9]{1,8})+';

// irregular     = "en-GB-oed"         ; irregular tags do not match
//               / "i-ami"             ; the 'langtag' production and
//               / "i-bnn"             ; would not otherwise be
//               / "i-default"         ; considered 'well-formed'
//               / "i-enochian"        ; These tags are all valid,
//               / "i-hak"             ; but most are deprecated
//               / "i-klingon"         ; in favor of more modern
//               / "i-lux"             ; subtags or subtag
//               / "i-mingo"           ; combination
//               / "i-navajo"
//               / "i-pwn"
//               / "i-tao"
//               / "i-tay"
//               / "i-tsu"
//               / "sgn-BE-FR"
//               / "sgn-BE-NL"
//               / "sgn-CH-DE"
var irregular = '(?:en-GB-oed' + '|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)' + '|sgn-(?:BE-FR|BE-NL|CH-DE))';

// regular       = "art-lojban"        ; these tags match the 'langtag'
//               / "cel-gaulish"       ; production, but their subtags
//               / "no-bok"            ; are not extended language
//               / "no-nyn"            ; or variant subtags: their meaning
//               / "zh-guoyu"          ; is defined by their registration
//               / "zh-hakka"          ; and all of these are deprecated
//               / "zh-min"            ; in favor of a more modern
//               / "zh-min-nan"        ; subtag or sequence of subtags
//               / "zh-xiang"
var regular = '(?:art-lojban|cel-gaulish|no-bok|no-nyn' + '|zh-(?:guoyu|hakka|min|min-nan|xiang))';

// grandfathered = irregular           ; non-redundant tags registered
//               / regular             ; during the RFC 3066 era
var grandfathered = '(?:' + irregular + '|' + regular + ')';

// langtag       = language
//                 ["-" script]
//                 ["-" region]
//                 *("-" variant)
//                 *("-" extension)
//                 ["-" privateuse]
var langtag = language + '(?:-' + script + ')?(?:-' + region + ')?(?:-' + variant + ')*(?:-' + extension + ')*(?:-' + privateuse + ')?';

// Language-Tag  = langtag             ; normal language tags
//               / privateuse          ; private use tag
//               / grandfathered       ; grandfathered tags
var expBCP47Syntax = RegExp('^(?:' + langtag + '|' + privateuse + '|' + grandfathered + ')$', 'i');

// Match duplicate variants in a language tag
var expVariantDupes = RegExp('^(?!x).*?-(' + variant + ')-(?:\\w{4,8}-(?!x-))*\\1\\b', 'i');

// Match duplicate singletons in a language tag (except in private use)
var expSingletonDupes = RegExp('^(?!x).*?-(' + singleton + ')-(?:\\w+-(?!x-))*\\1\\b', 'i');

// Match all extension sequences
var expExtSequences = RegExp('-' + extension, 'ig');

// Default locale is the first-added locale data for us
var defaultLocale = void 0;
function setDefaultLocale(locale) {
  defaultLocale = locale;
}

// IANA Subtag Registry redundant tag and subtag maps
var redundantTags = {
  tags: {
    "art-lojban": "jbo",
    "i-ami": "ami",
    "i-bnn": "bnn",
    "i-hak": "hak",
    "i-klingon": "tlh",
    "i-lux": "lb",
    "i-navajo": "nv",
    "i-pwn": "pwn",
    "i-tao": "tao",
    "i-tay": "tay",
    "i-tsu": "tsu",
    "no-bok": "nb",
    "no-nyn": "nn",
    "sgn-BE-FR": "sfb",
    "sgn-BE-NL": "vgt",
    "sgn-CH-DE": "sgg",
    "zh-guoyu": "cmn",
    "zh-hakka": "hak",
    "zh-min-nan": "nan",
    "zh-xiang": "hsn",
    "sgn-BR": "bzs",
    "sgn-CO": "csn",
    "sgn-DE": "gsg",
    "sgn-DK": "dsl",
    "sgn-ES": "ssp",
    "sgn-FR": "fsl",
    "sgn-GB": "bfi",
    "sgn-GR": "gss",
    "sgn-IE": "isg",
    "sgn-IT": "ise",
    "sgn-JP": "jsl",
    "sgn-MX": "mfs",
    "sgn-NI": "ncs",
    "sgn-NL": "dse",
    "sgn-NO": "nsl",
    "sgn-PT": "psr",
    "sgn-SE": "swl",
    "sgn-US": "ase",
    "sgn-ZA": "sfs",
    "zh-cmn": "cmn",
    "zh-cmn-Hans": "cmn-Hans",
    "zh-cmn-Hant": "cmn-Hant",
    "zh-gan": "gan",
    "zh-wuu": "wuu",
    "zh-yue": "yue"
  },
  subtags: {
    BU: "MM",
    DD: "DE",
    FX: "FR",
    TP: "TL",
    YD: "YE",
    ZR: "CD",
    heploc: "alalc97",
    'in': "id",
    iw: "he",
    ji: "yi",
    jw: "jv",
    mo: "ro",
    ayx: "nun",
    bjd: "drl",
    ccq: "rki",
    cjr: "mom",
    cka: "cmr",
    cmk: "xch",
    drh: "khk",
    drw: "prs",
    gav: "dev",
    hrr: "jal",
    ibi: "opa",
    kgh: "kml",
    lcq: "ppr",
    mst: "mry",
    myt: "mry",
    sca: "hle",
    tie: "ras",
    tkk: "twm",
    tlw: "weo",
    tnf: "prs",
    ybd: "rki",
    yma: "lrr"
  },
  extLang: {
    aao: ["aao", "ar"],
    abh: ["abh", "ar"],
    abv: ["abv", "ar"],
    acm: ["acm", "ar"],
    acq: ["acq", "ar"],
    acw: ["acw", "ar"],
    acx: ["acx", "ar"],
    acy: ["acy", "ar"],
    adf: ["adf", "ar"],
    ads: ["ads", "sgn"],
    aeb: ["aeb", "ar"],
    aec: ["aec", "ar"],
    aed: ["aed", "sgn"],
    aen: ["aen", "sgn"],
    afb: ["afb", "ar"],
    afg: ["afg", "sgn"],
    ajp: ["ajp", "ar"],
    apc: ["apc", "ar"],
    apd: ["apd", "ar"],
    arb: ["arb", "ar"],
    arq: ["arq", "ar"],
    ars: ["ars", "ar"],
    ary: ["ary", "ar"],
    arz: ["arz", "ar"],
    ase: ["ase", "sgn"],
    asf: ["asf", "sgn"],
    asp: ["asp", "sgn"],
    asq: ["asq", "sgn"],
    asw: ["asw", "sgn"],
    auz: ["auz", "ar"],
    avl: ["avl", "ar"],
    ayh: ["ayh", "ar"],
    ayl: ["ayl", "ar"],
    ayn: ["ayn", "ar"],
    ayp: ["ayp", "ar"],
    bbz: ["bbz", "ar"],
    bfi: ["bfi", "sgn"],
    bfk: ["bfk", "sgn"],
    bjn: ["bjn", "ms"],
    bog: ["bog", "sgn"],
    bqn: ["bqn", "sgn"],
    bqy: ["bqy", "sgn"],
    btj: ["btj", "ms"],
    bve: ["bve", "ms"],
    bvl: ["bvl", "sgn"],
    bvu: ["bvu", "ms"],
    bzs: ["bzs", "sgn"],
    cdo: ["cdo", "zh"],
    cds: ["cds", "sgn"],
    cjy: ["cjy", "zh"],
    cmn: ["cmn", "zh"],
    coa: ["coa", "ms"],
    cpx: ["cpx", "zh"],
    csc: ["csc", "sgn"],
    csd: ["csd", "sgn"],
    cse: ["cse", "sgn"],
    csf: ["csf", "sgn"],
    csg: ["csg", "sgn"],
    csl: ["csl", "sgn"],
    csn: ["csn", "sgn"],
    csq: ["csq", "sgn"],
    csr: ["csr", "sgn"],
    czh: ["czh", "zh"],
    czo: ["czo", "zh"],
    doq: ["doq", "sgn"],
    dse: ["dse", "sgn"],
    dsl: ["dsl", "sgn"],
    dup: ["dup", "ms"],
    ecs: ["ecs", "sgn"],
    esl: ["esl", "sgn"],
    esn: ["esn", "sgn"],
    eso: ["eso", "sgn"],
    eth: ["eth", "sgn"],
    fcs: ["fcs", "sgn"],
    fse: ["fse", "sgn"],
    fsl: ["fsl", "sgn"],
    fss: ["fss", "sgn"],
    gan: ["gan", "zh"],
    gds: ["gds", "sgn"],
    gom: ["gom", "kok"],
    gse: ["gse", "sgn"],
    gsg: ["gsg", "sgn"],
    gsm: ["gsm", "sgn"],
    gss: ["gss", "sgn"],
    gus: ["gus", "sgn"],
    hab: ["hab", "sgn"],
    haf: ["haf", "sgn"],
    hak: ["hak", "zh"],
    hds: ["hds", "sgn"],
    hji: ["hji", "ms"],
    hks: ["hks", "sgn"],
    hos: ["hos", "sgn"],
    hps: ["hps", "sgn"],
    hsh: ["hsh", "sgn"],
    hsl: ["hsl", "sgn"],
    hsn: ["hsn", "zh"],
    icl: ["icl", "sgn"],
    ils: ["ils", "sgn"],
    inl: ["inl", "sgn"],
    ins: ["ins", "sgn"],
    ise: ["ise", "sgn"],
    isg: ["isg", "sgn"],
    isr: ["isr", "sgn"],
    jak: ["jak", "ms"],
    jax: ["jax", "ms"],
    jcs: ["jcs", "sgn"],
    jhs: ["jhs", "sgn"],
    jls: ["jls", "sgn"],
    jos: ["jos", "sgn"],
    jsl: ["jsl", "sgn"],
    jus: ["jus", "sgn"],
    kgi: ["kgi", "sgn"],
    knn: ["knn", "kok"],
    kvb: ["kvb", "ms"],
    kvk: ["kvk", "sgn"],
    kvr: ["kvr", "ms"],
    kxd: ["kxd", "ms"],
    lbs: ["lbs", "sgn"],
    lce: ["lce", "ms"],
    lcf: ["lcf", "ms"],
    liw: ["liw", "ms"],
    lls: ["lls", "sgn"],
    lsg: ["lsg", "sgn"],
    lsl: ["lsl", "sgn"],
    lso: ["lso", "sgn"],
    lsp: ["lsp", "sgn"],
    lst: ["lst", "sgn"],
    lsy: ["lsy", "sgn"],
    ltg: ["ltg", "lv"],
    lvs: ["lvs", "lv"],
    lzh: ["lzh", "zh"],
    max: ["max", "ms"],
    mdl: ["mdl", "sgn"],
    meo: ["meo", "ms"],
    mfa: ["mfa", "ms"],
    mfb: ["mfb", "ms"],
    mfs: ["mfs", "sgn"],
    min: ["min", "ms"],
    mnp: ["mnp", "zh"],
    mqg: ["mqg", "ms"],
    mre: ["mre", "sgn"],
    msd: ["msd", "sgn"],
    msi: ["msi", "ms"],
    msr: ["msr", "sgn"],
    mui: ["mui", "ms"],
    mzc: ["mzc", "sgn"],
    mzg: ["mzg", "sgn"],
    mzy: ["mzy", "sgn"],
    nan: ["nan", "zh"],
    nbs: ["nbs", "sgn"],
    ncs: ["ncs", "sgn"],
    nsi: ["nsi", "sgn"],
    nsl: ["nsl", "sgn"],
    nsp: ["nsp", "sgn"],
    nsr: ["nsr", "sgn"],
    nzs: ["nzs", "sgn"],
    okl: ["okl", "sgn"],
    orn: ["orn", "ms"],
    ors: ["ors", "ms"],
    pel: ["pel", "ms"],
    pga: ["pga", "ar"],
    pks: ["pks", "sgn"],
    prl: ["prl", "sgn"],
    prz: ["prz", "sgn"],
    psc: ["psc", "sgn"],
    psd: ["psd", "sgn"],
    pse: ["pse", "ms"],
    psg: ["psg", "sgn"],
    psl: ["psl", "sgn"],
    pso: ["pso", "sgn"],
    psp: ["psp", "sgn"],
    psr: ["psr", "sgn"],
    pys: ["pys", "sgn"],
    rms: ["rms", "sgn"],
    rsi: ["rsi", "sgn"],
    rsl: ["rsl", "sgn"],
    sdl: ["sdl", "sgn"],
    sfb: ["sfb", "sgn"],
    sfs: ["sfs", "sgn"],
    sgg: ["sgg", "sgn"],
    sgx: ["sgx", "sgn"],
    shu: ["shu", "ar"],
    slf: ["slf", "sgn"],
    sls: ["sls", "sgn"],
    sqk: ["sqk", "sgn"],
    sqs: ["sqs", "sgn"],
    ssh: ["ssh", "ar"],
    ssp: ["ssp", "sgn"],
    ssr: ["ssr", "sgn"],
    svk: ["svk", "sgn"],
    swc: ["swc", "sw"],
    swh: ["swh", "sw"],
    swl: ["swl", "sgn"],
    syy: ["syy", "sgn"],
    tmw: ["tmw", "ms"],
    tse: ["tse", "sgn"],
    tsm: ["tsm", "sgn"],
    tsq: ["tsq", "sgn"],
    tss: ["tss", "sgn"],
    tsy: ["tsy", "sgn"],
    tza: ["tza", "sgn"],
    ugn: ["ugn", "sgn"],
    ugy: ["ugy", "sgn"],
    ukl: ["ukl", "sgn"],
    uks: ["uks", "sgn"],
    urk: ["urk", "ms"],
    uzn: ["uzn", "uz"],
    uzs: ["uzs", "uz"],
    vgt: ["vgt", "sgn"],
    vkk: ["vkk", "ms"],
    vkt: ["vkt", "ms"],
    vsi: ["vsi", "sgn"],
    vsl: ["vsl", "sgn"],
    vsv: ["vsv", "sgn"],
    wuu: ["wuu", "zh"],
    xki: ["xki", "sgn"],
    xml: ["xml", "sgn"],
    xmm: ["xmm", "ms"],
    xms: ["xms", "sgn"],
    yds: ["yds", "sgn"],
    ysl: ["ysl", "sgn"],
    yue: ["yue", "zh"],
    zib: ["zib", "sgn"],
    zlm: ["zlm", "ms"],
    zmi: ["zmi", "ms"],
    zsl: ["zsl", "sgn"],
    zsm: ["zsm", "ms"]
  }
};

/**
 * Convert only a-z to uppercase as per section 6.1 of the spec
 */
function toLatinUpperCase(str) {
  var i = str.length;
  while (i--) {
    var ch = str.charAt(i);
    if (ch >= "a" && ch <= "z") str = str.slice(0, i) + ch.toUpperCase() + str.slice(i + 1);
  }
  return str;
}

/**
 * The IsStructurallyValidLanguageTag abstract operation verifies that the locale
 * argument (which must be a String value)
 *
 * - represents a well-formed BCP 47 language tag as specified in RFC 5646 section
 *   2.1, or successor,
 * - does not include duplicate variant subtags, and
 * - does not include duplicate singleton subtags.
 *
 * The abstract operation returns true if locale can be generated from the ABNF
 * grammar in section 2.1 of the RFC, starting with Language-Tag, and does not
 * contain duplicate variant or singleton subtags (other than as a private use
 * subtag). It returns false otherwise. Terminal value characters in the grammar are
 * interpreted as the Unicode equivalents of the ASCII octet values given.
 */
function /* 6.2.2 */IsStructurallyValidLanguageTag(locale) {
  // represents a well-formed BCP 47 language tag as specified in RFC 5646
  if (!expBCP47Syntax.test(locale)) return false;

  // does not include duplicate variant subtags, and
  if (expVariantDupes.test(locale)) return false;

  // does not include duplicate singleton subtags.
  if (expSingletonDupes.test(locale)) return false;
  return true;
}

/**
 * The CanonicalizeLanguageTag abstract operation returns the canonical and case-
 * regularized form of the locale argument (which must be a String value that is
 * a structurally valid BCP 47 language tag as verified by the
 * IsStructurallyValidLanguageTag abstract operation). It takes the steps
 * specified in RFC 5646 section 4.5, or successor, to bring the language tag
 * into canonical form, and to regularize the case of the subtags, but does not
 * take the steps to bring a language tag into “extlang form” and to reorder
 * variant subtags.

 * The specifications for extensions to BCP 47 language tags, such as RFC 6067,
 * may include canonicalization rules for the extension subtag sequences they
 * define that go beyond the canonicalization rules of RFC 5646 section 4.5.
 * Implementations are allowed, but not required, to apply these additional rules.
 */
function /* 6.2.3 */CanonicalizeLanguageTag(locale) {
  var match = void 0,
    parts = void 0;

  // A language tag is in 'canonical form' when the tag is well-formed
  // according to the rules in Sections 2.1 and 2.2

  // Section 2.1 says all subtags use lowercase...
  locale = locale.toLowerCase();

  // ...with 2 exceptions: 'two-letter and four-letter subtags that neither
  // appear at the start of the tag nor occur after singletons.  Such two-letter
  // subtags are all uppercase (as in the tags "en-CA-x-ca" or "sgn-BE-FR") and
  // four-letter subtags are titlecase (as in the tag "az-Latn-x-latn").
  parts = locale.split('-');
  for (var i = 1, max = parts.length; i < max; i++) {
    // Two-letter subtags are all uppercase
    if (parts[i].length === 2) parts[i] = parts[i].toUpperCase();

    // Four-letter subtags are titlecase
    else if (parts[i].length === 4) parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);

    // Is it a singleton?
    else if (parts[i].length === 1 && parts[i] !== 'x') break;
  }
  locale = arrJoin.call(parts, '-');

  // The steps laid out in RFC 5646 section 4.5 are as follows:

  // 1.  Extension sequences are ordered into case-insensitive ASCII order
  //     by singleton subtag.
  if ((match = locale.match(expExtSequences)) && match.length > 1) {
    // The built-in sort() sorts by ASCII order, so use that
    match.sort();

    // Replace all extensions with the joined, sorted array
    locale = locale.replace(RegExp('(?:' + expExtSequences.source + ')+', 'i'), arrJoin.call(match, ''));
  }

  // 2.  Redundant or grandfathered tags are replaced by their 'Preferred-
  //     Value', if there is one.
  if (hop.call(redundantTags.tags, locale)) locale = redundantTags.tags[locale];

  // 3.  Subtags are replaced by their 'Preferred-Value', if there is one.
  //     For extlangs, the original primary language subtag is also
  //     replaced if there is a primary language subtag in the 'Preferred-
  //     Value'.
  parts = locale.split('-');
  for (var _i = 1, _max = parts.length; _i < _max; _i++) {
    if (hop.call(redundantTags.subtags, parts[_i])) parts[_i] = redundantTags.subtags[parts[_i]];else if (hop.call(redundantTags.extLang, parts[_i])) {
      parts[_i] = redundantTags.extLang[parts[_i]][0];

      // For extlang tags, the prefix needs to be removed if it is redundant
      if (_i === 1 && redundantTags.extLang[parts[1]][1] === parts[0]) {
        parts = arrSlice.call(parts, _i++);
        _max -= 1;
      }
    }
  }
  return arrJoin.call(parts, '-');
}

/**
 * The DefaultLocale abstract operation returns a String value representing the
 * structurally valid (6.2.2) and canonicalized (6.2.3) BCP 47 language tag for the
 * host environment’s current locale.
 */
function /* 6.2.4 */DefaultLocale() {
  return defaultLocale;
}

// Sect 6.3 Currency Codes
// =======================

var expCurrencyCode = /^[A-Z]{3}$/;

/**
 * The IsWellFormedCurrencyCode abstract operation verifies that the currency argument
 * (after conversion to a String value) represents a well-formed 3-letter ISO currency
 * code. The following steps are taken:
 */
function /* 6.3.1 */IsWellFormedCurrencyCode(currency) {
  // 1. Let `c` be ToString(currency)
  var c = String(currency);

  // 2. Let `normalized` be the result of mapping c to upper case as described
  //    in 6.1.
  var normalized = toLatinUpperCase(c);

  // 3. If the string length of normalized is not 3, return false.
  // 4. If normalized contains any character that is not in the range "A" to "Z"
  //    (U+0041 to U+005A), return false.
  if (expCurrencyCode.test(normalized) === false) return false;

  // 5. Return true
  return true;
}
var expUnicodeExSeq = /-u(?:-[0-9a-z]{2,8})+/gi; // See `extension` below

function /* 9.2.1 */CanonicalizeLocaleList(locales) {
  // The abstract operation CanonicalizeLocaleList takes the following steps:

  // 1. If locales is undefined, then a. Return a new empty List
  if (locales === undefined) return new List();

  // 2. Let seen be a new empty List.
  var seen = new List();

  // 3. If locales is a String value, then
  //    a. Let locales be a new array created as if by the expression new
  //    Array(locales) where Array is the standard built-in constructor with
  //    that name and locales is the value of locales.
  locales = typeof locales === 'string' ? [locales] : locales;

  // 4. Let O be ToObject(locales).
  var O = toObject(locales);

  // 5. Let lenValue be the result of calling the [[Get]] internal method of
  //    O with the argument "length".
  // 6. Let len be ToUint32(lenValue).
  var len = toLength(O.length);

  // 7. Let k be 0.
  var k = 0;

  // 8. Repeat, while k < len
  while (k < len) {
    // a. Let Pk be ToString(k).
    var Pk = String(k);

    // b. Let kPresent be the result of calling the [[HasProperty]] internal
    //    method of O with argument Pk.
    var kPresent = (Pk in O);

    // c. If kPresent is true, then
    if (kPresent) {
      // i. Let kValue be the result of calling the [[Get]] internal
      //     method of O with argument Pk.
      var kValue = O[Pk];

      // ii. If the type of kValue is not String or Object, then throw a
      //     TypeError exception.
      if (kValue === null || typeof kValue !== 'string' && (typeof kValue === "undefined" ? "undefined" : babelHelpers$1["typeof"](kValue)) !== 'object') throw new TypeError('String or Object type expected');

      // iii. Let tag be ToString(kValue).
      var tag = String(kValue);

      // iv. If the result of calling the abstract operation
      //     IsStructurallyValidLanguageTag (defined in 6.2.2), passing tag as
      //     the argument, is false, then throw a RangeError exception.
      if (!IsStructurallyValidLanguageTag(tag)) throw new RangeError("'" + tag + "' is not a structurally valid language tag");

      // v. Let tag be the result of calling the abstract operation
      //    CanonicalizeLanguageTag (defined in 6.2.3), passing tag as the
      //    argument.
      tag = CanonicalizeLanguageTag(tag);

      // vi. If tag is not an element of seen, then append tag as the last
      //     element of seen.
      if (arrIndexOf.call(seen, tag) === -1) arrPush.call(seen, tag);
    }

    // d. Increase k by 1.
    k++;
  }

  // 9. Return seen.
  return seen;
}

/**
 * The BestAvailableLocale abstract operation compares the provided argument
 * locale, which must be a String value with a structurally valid and
 * canonicalized BCP 47 language tag, against the locales in availableLocales and
 * returns either the longest non-empty prefix of locale that is an element of
 * availableLocales, or undefined if there is no such element. It uses the
 * fallback mechanism of RFC 4647, section 3.4. The following steps are taken:
 */
function /* 9.2.2 */BestAvailableLocale(availableLocales, locale) {
  // 1. Let candidate be locale
  var candidate = locale;

  // 2. Repeat
  while (candidate) {
    // a. If availableLocales contains an element equal to candidate, then return
    // candidate.
    if (arrIndexOf.call(availableLocales, candidate) > -1) return candidate;

    // b. Let pos be the character index of the last occurrence of "-"
    // (U+002D) within candidate. If that character does not occur, return
    // undefined.
    var pos = candidate.lastIndexOf('-');
    if (pos < 0) return;

    // c. If pos ≥ 2 and the character "-" occurs at index pos-2 of candidate,
    //    then decrease pos by 2.
    if (pos >= 2 && candidate.charAt(pos - 2) === '-') pos -= 2;

    // d. Let candidate be the substring of candidate from position 0, inclusive,
    //    to position pos, exclusive.
    candidate = candidate.substring(0, pos);
  }
}

/**
 * The LookupMatcher abstract operation compares requestedLocales, which must be
 * a List as returned by CanonicalizeLocaleList, against the locales in
 * availableLocales and determines the best available language to meet the
 * request. The following steps are taken:
 */
function /* 9.2.3 */LookupMatcher(availableLocales, requestedLocales) {
  // 1. Let i be 0.
  var i = 0;

  // 2. Let len be the number of elements in requestedLocales.
  var len = requestedLocales.length;

  // 3. Let availableLocale be undefined.
  var availableLocale = void 0;
  var locale = void 0,
    noExtensionsLocale = void 0;

  // 4. Repeat while i < len and availableLocale is undefined:
  while (i < len && !availableLocale) {
    // a. Let locale be the element of requestedLocales at 0-origined list
    //    position i.
    locale = requestedLocales[i];

    // b. Let noExtensionsLocale be the String value that is locale with all
    //    Unicode locale extension sequences removed.
    noExtensionsLocale = String(locale).replace(expUnicodeExSeq, '');

    // c. Let availableLocale be the result of calling the
    //    BestAvailableLocale abstract operation (defined in 9.2.2) with
    //    arguments availableLocales and noExtensionsLocale.
    availableLocale = BestAvailableLocale(availableLocales, noExtensionsLocale);

    // d. Increase i by 1.
    i++;
  }

  // 5. Let result be a new Record.
  var result = new Record();

  // 6. If availableLocale is not undefined, then
  if (availableLocale !== undefined) {
    // a. Set result.[[locale]] to availableLocale.
    result['[[locale]]'] = availableLocale;

    // b. If locale and noExtensionsLocale are not the same String value, then
    if (String(locale) !== String(noExtensionsLocale)) {
      // i. Let extension be the String value consisting of the first
      //    substring of locale that is a Unicode locale extension sequence.
      var extension = locale.match(expUnicodeExSeq)[0];

      // ii. Let extensionIndex be the character position of the initial
      //     "-" of the first Unicode locale extension sequence within locale.
      var extensionIndex = locale.indexOf('-u-');

      // iii. Set result.[[extension]] to extension.
      result['[[extension]]'] = extension;

      // iv. Set result.[[extensionIndex]] to extensionIndex.
      result['[[extensionIndex]]'] = extensionIndex;
    }
  }
  // 7. Else
  else
    // a. Set result.[[locale]] to the value returned by the DefaultLocale abstract
    //    operation (defined in 6.2.4).
    result['[[locale]]'] = DefaultLocale();

  // 8. Return result
  return result;
}

/**
 * The BestFitMatcher abstract operation compares requestedLocales, which must be
 * a List as returned by CanonicalizeLocaleList, against the locales in
 * availableLocales and determines the best available language to meet the
 * request. The algorithm is implementation dependent, but should produce results
 * that a typical user of the requested locales would perceive as at least as
 * good as those produced by the LookupMatcher abstract operation. Options
 * specified through Unicode locale extension sequences must be ignored by the
 * algorithm. Information about such subsequences is returned separately.
 * The abstract operation returns a record with a [[locale]] field, whose value
 * is the language tag of the selected locale, which must be an element of
 * availableLocales. If the language tag of the request locale that led to the
 * selected locale contained a Unicode locale extension sequence, then the
 * returned record also contains an [[extension]] field whose value is the first
 * Unicode locale extension sequence, and an [[extensionIndex]] field whose value
 * is the index of the first Unicode locale extension sequence within the request
 * locale language tag.
 */
function /* 9.2.4 */BestFitMatcher(availableLocales, requestedLocales) {
  return LookupMatcher(availableLocales, requestedLocales);
}

/**
 * The ResolveLocale abstract operation compares a BCP 47 language priority list
 * requestedLocales against the locales in availableLocales and determines the
 * best available language to meet the request. availableLocales and
 * requestedLocales must be provided as List values, options as a Record.
 */
function /* 9.2.5 */ResolveLocale(availableLocales, requestedLocales, options, relevantExtensionKeys, localeData) {
  if (availableLocales.length === 0) {
    throw new ReferenceError('No locale data has been provided for this object yet.');
  }

  // The following steps are taken:
  // 1. Let matcher be the value of options.[[localeMatcher]].
  var matcher = options['[[localeMatcher]]'];
  var r = void 0;

  // 2. If matcher is "lookup", then
  if (matcher === 'lookup')
    // a. Let r be the result of calling the LookupMatcher abstract operation
    //    (defined in 9.2.3) with arguments availableLocales and
    //    requestedLocales.
    r = LookupMatcher(availableLocales, requestedLocales);

    // 3. Else
  else
    // a. Let r be the result of calling the BestFitMatcher abstract
    //    operation (defined in 9.2.4) with arguments availableLocales and
    //    requestedLocales.
    r = BestFitMatcher(availableLocales, requestedLocales);

  // 4. Let foundLocale be the value of r.[[locale]].
  var foundLocale = r['[[locale]]'];
  var extensionSubtags = void 0,
    extensionSubtagsLength = void 0;

  // 5. If r has an [[extension]] field, then
  if (hop.call(r, '[[extension]]')) {
    // a. Let extension be the value of r.[[extension]].
    var extension = r['[[extension]]'];
    // b. Let split be the standard built-in function object defined in ES5,
    //    15.5.4.14.
    var split = String.prototype.split;
    // c. Let extensionSubtags be the result of calling the [[Call]] internal
    //    method of split with extension as the this value and an argument
    //    list containing the single item "-".
    extensionSubtags = split.call(extension, '-');
    // d. Let extensionSubtagsLength be the result of calling the [[Get]]
    //    internal method of extensionSubtags with argument "length".
    extensionSubtagsLength = extensionSubtags.length;
  }

  // 6. Let result be a new Record.
  var result = new Record();

  // 7. Set result.[[dataLocale]] to foundLocale.
  result['[[dataLocale]]'] = foundLocale;

  // 8. Let supportedExtension be "-u".
  var supportedExtension = '-u';
  // 9. Let i be 0.
  var i = 0;
  // 10. Let len be the result of calling the [[Get]] internal method of
  //     relevantExtensionKeys with argument "length".
  var len = relevantExtensionKeys.length;

  // 11 Repeat while i < len:
  while (i < len) {
    // a. Let key be the result of calling the [[Get]] internal method of
    //    relevantExtensionKeys with argument ToString(i).
    var key = relevantExtensionKeys[i];
    // b. Let foundLocaleData be the result of calling the [[Get]] internal
    //    method of localeData with the argument foundLocale.
    var foundLocaleData = localeData[foundLocale];
    // c. Let keyLocaleData be the result of calling the [[Get]] internal
    //    method of foundLocaleData with the argument key.
    var keyLocaleData = foundLocaleData[key];
    // d. Let value be the result of calling the [[Get]] internal method of
    //    keyLocaleData with argument "0".
    var value = keyLocaleData['0'];
    // e. Let supportedExtensionAddition be "".
    var supportedExtensionAddition = '';
    // f. Let indexOf be the standard built-in function object defined in
    //    ES5, 15.4.4.14.
    var indexOf = arrIndexOf;

    // g. If extensionSubtags is not undefined, then
    if (extensionSubtags !== undefined) {
      // i. Let keyPos be the result of calling the [[Call]] internal
      //    method of indexOf with extensionSubtags as the this value and
      // an argument list containing the single item key.
      var keyPos = indexOf.call(extensionSubtags, key);

      // ii. If keyPos ≠ -1, then
      if (keyPos !== -1) {
        // 1. If keyPos + 1 < extensionSubtagsLength and the length of the
        //    result of calling the [[Get]] internal method of
        //    extensionSubtags with argument ToString(keyPos +1) is greater
        //    than 2, then
        if (keyPos + 1 < extensionSubtagsLength && extensionSubtags[keyPos + 1].length > 2) {
          // a. Let requestedValue be the result of calling the [[Get]]
          //    internal method of extensionSubtags with argument
          //    ToString(keyPos + 1).
          var requestedValue = extensionSubtags[keyPos + 1];
          // b. Let valuePos be the result of calling the [[Call]]
          //    internal method of indexOf with keyLocaleData as the
          //    this value and an argument list containing the single
          //    item requestedValue.
          var valuePos = indexOf.call(keyLocaleData, requestedValue);

          // c. If valuePos ≠ -1, then
          if (valuePos !== -1) {
            // i. Let value be requestedValue.
            value = requestedValue,
            // ii. Let supportedExtensionAddition be the
            //     concatenation of "-", key, "-", and value.
            supportedExtensionAddition = '-' + key + '-' + value;
          }
        }
        // 2. Else
        else {
          // a. Let valuePos be the result of calling the [[Call]]
          // internal method of indexOf with keyLocaleData as the this
          // value and an argument list containing the single item
          // "true".
          var _valuePos = indexOf(keyLocaleData, 'true');

          // b. If valuePos ≠ -1, then
          if (_valuePos !== -1)
            // i. Let value be "true".
            value = 'true';
        }
      }
    }
    // h. If options has a field [[<key>]], then
    if (hop.call(options, '[[' + key + ']]')) {
      // i. Let optionsValue be the value of options.[[<key>]].
      var optionsValue = options['[[' + key + ']]'];

      // ii. If the result of calling the [[Call]] internal method of indexOf
      //     with keyLocaleData as the this value and an argument list
      //     containing the single item optionsValue is not -1, then
      if (indexOf.call(keyLocaleData, optionsValue) !== -1) {
        // 1. If optionsValue is not equal to value, then
        if (optionsValue !== value) {
          // a. Let value be optionsValue.
          value = optionsValue;
          // b. Let supportedExtensionAddition be "".
          supportedExtensionAddition = '';
        }
      }
    }
    // i. Set result.[[<key>]] to value.
    result['[[' + key + ']]'] = value;

    // j. Append supportedExtensionAddition to supportedExtension.
    supportedExtension += supportedExtensionAddition;

    // k. Increase i by 1.
    i++;
  }
  // 12. If the length of supportedExtension is greater than 2, then
  if (supportedExtension.length > 2) {
    // a.
    var privateIndex = foundLocale.indexOf("-x-");
    // b.
    if (privateIndex === -1) {
      // i.
      foundLocale = foundLocale + supportedExtension;
    }
    // c.
    else {
      // i.
      var preExtension = foundLocale.substring(0, privateIndex);
      // ii.
      var postExtension = foundLocale.substring(privateIndex);
      // iii.
      foundLocale = preExtension + supportedExtension + postExtension;
    }
    // d. asserting - skipping
    // e.
    foundLocale = CanonicalizeLanguageTag(foundLocale);
  }
  // 13. Set result.[[locale]] to foundLocale.
  result['[[locale]]'] = foundLocale;

  // 14. Return result.
  return result;
}

/**
 * The LookupSupportedLocales abstract operation returns the subset of the
 * provided BCP 47 language priority list requestedLocales for which
 * availableLocales has a matching locale when using the BCP 47 Lookup algorithm.
 * Locales appear in the same order in the returned list as in requestedLocales.
 * The following steps are taken:
 */
function /* 9.2.6 */LookupSupportedLocales(availableLocales, requestedLocales) {
  // 1. Let len be the number of elements in requestedLocales.
  var len = requestedLocales.length;
  // 2. Let subset be a new empty List.
  var subset = new List();
  // 3. Let k be 0.
  var k = 0;

  // 4. Repeat while k < len
  while (k < len) {
    // a. Let locale be the element of requestedLocales at 0-origined list
    //    position k.
    var locale = requestedLocales[k];
    // b. Let noExtensionsLocale be the String value that is locale with all
    //    Unicode locale extension sequences removed.
    var noExtensionsLocale = String(locale).replace(expUnicodeExSeq, '');
    // c. Let availableLocale be the result of calling the
    //    BestAvailableLocale abstract operation (defined in 9.2.2) with
    //    arguments availableLocales and noExtensionsLocale.
    var availableLocale = BestAvailableLocale(availableLocales, noExtensionsLocale);

    // d. If availableLocale is not undefined, then append locale to the end of
    //    subset.
    if (availableLocale !== undefined) arrPush.call(subset, locale);

    // e. Increment k by 1.
    k++;
  }

  // 5. Let subsetArray be a new Array object whose elements are the same
  //    values in the same order as the elements of subset.
  var subsetArray = arrSlice.call(subset);

  // 6. Return subsetArray.
  return subsetArray;
}

/**
 * The BestFitSupportedLocales abstract operation returns the subset of the
 * provided BCP 47 language priority list requestedLocales for which
 * availableLocales has a matching locale when using the Best Fit Matcher
 * algorithm. Locales appear in the same order in the returned list as in
 * requestedLocales. The steps taken are implementation dependent.
 */
function /*9.2.7 */BestFitSupportedLocales(availableLocales, requestedLocales) {
  // ###TODO: implement this function as described by the specification###
  return LookupSupportedLocales(availableLocales, requestedLocales);
}

/**
 * The SupportedLocales abstract operation returns the subset of the provided BCP
 * 47 language priority list requestedLocales for which availableLocales has a
 * matching locale. Two algorithms are available to match the locales: the Lookup
 * algorithm described in RFC 4647 section 3.4, and an implementation dependent
 * best-fit algorithm. Locales appear in the same order in the returned list as
 * in requestedLocales. The following steps are taken:
 */
function /*9.2.8 */SupportedLocales(availableLocales, requestedLocales, options) {
  var matcher = void 0,
    subset = void 0;

  // 1. If options is not undefined, then
  if (options !== undefined) {
    // a. Let options be ToObject(options).
    options = new Record(toObject(options));
    // b. Let matcher be the result of calling the [[Get]] internal method of
    //    options with argument "localeMatcher".
    matcher = options.localeMatcher;

    // c. If matcher is not undefined, then
    if (matcher !== undefined) {
      // i. Let matcher be ToString(matcher).
      matcher = String(matcher);

      // ii. If matcher is not "lookup" or "best fit", then throw a RangeError
      //     exception.
      if (matcher !== 'lookup' && matcher !== 'best fit') throw new RangeError('matcher should be "lookup" or "best fit"');
    }
  }
  // 2. If matcher is undefined or "best fit", then
  if (matcher === undefined || matcher === 'best fit')
    // a. Let subset be the result of calling the BestFitSupportedLocales
    //    abstract operation (defined in 9.2.7) with arguments
    //    availableLocales and requestedLocales.
    subset = BestFitSupportedLocales(availableLocales, requestedLocales);
    // 3. Else
  else
    // a. Let subset be the result of calling the LookupSupportedLocales
    //    abstract operation (defined in 9.2.6) with arguments
    //    availableLocales and requestedLocales.
    subset = LookupSupportedLocales(availableLocales, requestedLocales);

  // 4. For each named own property name P of subset,
  for (var P in subset) {
    if (!hop.call(subset, P)) continue;

    // a. Let desc be the result of calling the [[GetOwnProperty]] internal
    //    method of subset with P.
    // b. Set desc.[[Writable]] to false.
    // c. Set desc.[[Configurable]] to false.
    // d. Call the [[DefineOwnProperty]] internal method of subset with P, desc,
    //    and true as arguments.
    defineProperty(subset, P, {
      writable: false,
      configurable: false,
      value: subset[P]
    });
  }
  // "Freeze" the array so no new elements can be added
  defineProperty(subset, 'length', {
    writable: false
  });

  // 5. Return subset
  return subset;
}

/**
 * The GetOption abstract operation extracts the value of the property named
 * property from the provided options object, converts it to the required type,
 * checks whether it is one of a List of allowed values, and fills in a fallback
 * value if necessary.
 */
function /*9.2.9 */GetOption(options, property, type, values, fallback) {
  // 1. Let value be the result of calling the [[Get]] internal method of
  //    options with argument property.
  var value = options[property];

  // 2. If value is not undefined, then
  if (value !== undefined) {
    // a. Assert: type is "boolean" or "string".
    // b. If type is "boolean", then let value be ToBoolean(value).
    // c. If type is "string", then let value be ToString(value).
    value = type === 'boolean' ? Boolean(value) : type === 'string' ? String(value) : value;

    // d. If values is not undefined, then
    if (values !== undefined) {
      // i. If values does not contain an element equal to value, then throw a
      //    RangeError exception.
      if (arrIndexOf.call(values, value) === -1) throw new RangeError("'" + value + "' is not an allowed value for `" + property + '`');
    }

    // e. Return value.
    return value;
  }
  // Else return fallback.
  return fallback;
}

/**
 * The GetNumberOption abstract operation extracts a property value from the
 * provided options object, converts it to a Number value, checks whether it is
 * in the allowed range, and fills in a fallback value if necessary.
 */
function /* 9.2.10 */GetNumberOption(options, property, minimum, maximum, fallback) {
  // 1. Let value be the result of calling the [[Get]] internal method of
  //    options with argument property.
  var value = options[property];

  // 2. If value is not undefined, then
  if (value !== undefined) {
    // a. Let value be ToNumber(value).
    value = Number(value);

    // b. If value is NaN or less than minimum or greater than maximum, throw a
    //    RangeError exception.
    if (isNaN(value) || value < minimum || value > maximum) throw new RangeError('Value is not a number or outside accepted range');

    // c. Return floor(value).
    return Math.floor(value);
  }
  // 3. Else return fallback.
  return fallback;
}

// 8 The Intl Object
var Intl = {};

// 8.2 Function Properties of the Intl Object

// 8.2.1
// @spec[tc39/ecma402/master/spec/intl.html]
// @clause[sec-intl.getcanonicallocales]
function getCanonicalLocales(locales) {
  // 1. Let ll be ? CanonicalizeLocaleList(locales).
  var ll = CanonicalizeLocaleList(locales);
  // 2. Return CreateArrayFromList(ll).
  {
    var result = [];
    var len = ll.length;
    var k = 0;
    while (k < len) {
      result[k] = ll[k];
      k++;
    }
    return result;
  }
}
Object.defineProperty(Intl, 'getCanonicalLocales', {
  enumerable: false,
  configurable: true,
  writable: true,
  value: getCanonicalLocales
});

// Currency minor units output from get-4217 grunt task, formatted
var currencyMinorUnits = {
  BHD: 3,
  BYR: 0,
  XOF: 0,
  BIF: 0,
  XAF: 0,
  CLF: 4,
  CLP: 0,
  KMF: 0,
  DJF: 0,
  XPF: 0,
  GNF: 0,
  ISK: 0,
  IQD: 3,
  JPY: 0,
  JOD: 3,
  KRW: 0,
  KWD: 3,
  LYD: 3,
  OMR: 3,
  PYG: 0,
  RWF: 0,
  TND: 3,
  UGX: 0,
  UYI: 0,
  VUV: 0,
  VND: 0
};

// Define the NumberFormat constructor internally so it cannot be tainted
function NumberFormatConstructor() {
  var locales = arguments[0];
  var options = arguments[1];
  if (!this || this === Intl) {
    return new Intl.NumberFormat(locales, options);
  }
  return InitializeNumberFormat(toObject(this), locales, options);
}
defineProperty(Intl, 'NumberFormat', {
  configurable: true,
  writable: true,
  value: NumberFormatConstructor
});

// Must explicitly set prototypes as unwritable
defineProperty(Intl.NumberFormat, 'prototype', {
  writable: false
});

/**
 * The abstract operation InitializeNumberFormat accepts the arguments
 * numberFormat (which must be an object), locales, and options. It initializes
 * numberFormat as a NumberFormat object.
 */
function /*11.1.1.1 */InitializeNumberFormat(numberFormat, locales, options) {
  // This will be a internal properties object if we're not already initialized
  var internal = getInternalProperties(numberFormat);

  // Create an object whose props can be used to restore the values of RegExp props
  var regexpRestore = createRegExpRestore();

  // 1. If numberFormat has an [[initializedIntlObject]] internal property with
  // value true, throw a TypeError exception.
  if (internal['[[initializedIntlObject]]'] === true) throw new TypeError('`this` object has already been initialized as an Intl object');

  // Need this to access the `internal` object
  defineProperty(numberFormat, '__getInternalProperties', {
    value: function value() {
      // NOTE: Non-standard, for internal use only
      if (arguments[0] === secret) return internal;
    }
  });

  // 2. Set the [[initializedIntlObject]] internal property of numberFormat to true.
  internal['[[initializedIntlObject]]'] = true;

  // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
  //    abstract operation (defined in 9.2.1) with argument locales.
  var requestedLocales = CanonicalizeLocaleList(locales);

  // 4. If options is undefined, then
  if (options === undefined)
    // a. Let options be the result of creating a new object as if by the
    // expression new Object() where Object is the standard built-in constructor
    // with that name.
    options = {};

    // 5. Else
  else
    // a. Let options be ToObject(options).
    options = toObject(options);

  // 6. Let opt be a new Record.
  var opt = new Record(),
    // 7. Let matcher be the result of calling the GetOption abstract operation
    //    (defined in 9.2.9) with the arguments options, "localeMatcher", "string",
    //    a List containing the two String values "lookup" and "best fit", and
    //    "best fit".
    matcher = GetOption(options, 'localeMatcher', 'string', new List('lookup', 'best fit'), 'best fit');

  // 8. Set opt.[[localeMatcher]] to matcher.
  opt['[[localeMatcher]]'] = matcher;

  // 9. Let NumberFormat be the standard built-in object that is the initial value
  //    of Intl.NumberFormat.
  // 10. Let localeData be the value of the [[localeData]] internal property of
  //     NumberFormat.
  var localeData = internals.NumberFormat['[[localeData]]'];

  // 11. Let r be the result of calling the ResolveLocale abstract operation
  //     (defined in 9.2.5) with the [[availableLocales]] internal property of
  //     NumberFormat, requestedLocales, opt, the [[relevantExtensionKeys]]
  //     internal property of NumberFormat, and localeData.
  var r = ResolveLocale(internals.NumberFormat['[[availableLocales]]'], requestedLocales, opt, internals.NumberFormat['[[relevantExtensionKeys]]'], localeData);

  // 12. Set the [[locale]] internal property of numberFormat to the value of
  //     r.[[locale]].
  internal['[[locale]]'] = r['[[locale]]'];

  // 13. Set the [[numberingSystem]] internal property of numberFormat to the value
  //     of r.[[nu]].
  internal['[[numberingSystem]]'] = r['[[nu]]'];

  // The specification doesn't tell us to do this, but it's helpful later on
  internal['[[dataLocale]]'] = r['[[dataLocale]]'];

  // 14. Let dataLocale be the value of r.[[dataLocale]].
  var dataLocale = r['[[dataLocale]]'];

  // 15. Let s be the result of calling the GetOption abstract operation with the
  //     arguments options, "style", "string", a List containing the three String
  //     values "decimal", "percent", and "currency", and "decimal".
  var s = GetOption(options, 'style', 'string', new List('decimal', 'percent', 'currency'), 'decimal');

  // 16. Set the [[style]] internal property of numberFormat to s.
  internal['[[style]]'] = s;

  // 17. Let c be the result of calling the GetOption abstract operation with the
  //     arguments options, "currency", "string", undefined, and undefined.
  var c = GetOption(options, 'currency', 'string');

  // 18. If c is not undefined and the result of calling the
  //     IsWellFormedCurrencyCode abstract operation (defined in 6.3.1) with
  //     argument c is false, then throw a RangeError exception.
  if (c !== undefined && !IsWellFormedCurrencyCode(c)) throw new RangeError("'" + c + "' is not a valid currency code");

  // 19. If s is "currency" and c is undefined, throw a TypeError exception.
  if (s === 'currency' && c === undefined) throw new TypeError('Currency code is required when style is currency');
  var cDigits = void 0;

  // 20. If s is "currency", then
  if (s === 'currency') {
    // a. Let c be the result of converting c to upper case as specified in 6.1.
    c = c.toUpperCase();

    // b. Set the [[currency]] internal property of numberFormat to c.
    internal['[[currency]]'] = c;

    // c. Let cDigits be the result of calling the CurrencyDigits abstract
    //    operation (defined below) with argument c.
    cDigits = CurrencyDigits(c);
  }

  // 21. Let cd be the result of calling the GetOption abstract operation with the
  //     arguments options, "currencyDisplay", "string", a List containing the
  //     three String values "code", "symbol", and "name", and "symbol".
  var cd = GetOption(options, 'currencyDisplay', 'string', new List('code', 'symbol', 'name'), 'symbol');

  // 22. If s is "currency", then set the [[currencyDisplay]] internal property of
  //     numberFormat to cd.
  if (s === 'currency') internal['[[currencyDisplay]]'] = cd;

  // 23. Let mnid be the result of calling the GetNumberOption abstract operation
  //     (defined in 9.2.10) with arguments options, "minimumIntegerDigits", 1, 21,
  //     and 1.
  var mnid = GetNumberOption(options, 'minimumIntegerDigits', 1, 21, 1);

  // 24. Set the [[minimumIntegerDigits]] internal property of numberFormat to mnid.
  internal['[[minimumIntegerDigits]]'] = mnid;

  // 25. If s is "currency", then let mnfdDefault be cDigits; else let mnfdDefault
  //     be 0.
  var mnfdDefault = s === 'currency' ? cDigits : 0;

  // 26. Let mnfd be the result of calling the GetNumberOption abstract operation
  //     with arguments options, "minimumFractionDigits", 0, 20, and mnfdDefault.
  var mnfd = GetNumberOption(options, 'minimumFractionDigits', 0, 20, mnfdDefault);

  // 27. Set the [[minimumFractionDigits]] internal property of numberFormat to mnfd.
  internal['[[minimumFractionDigits]]'] = mnfd;

  // 28. If s is "currency", then let mxfdDefault be max(mnfd, cDigits); else if s
  //     is "percent", then let mxfdDefault be max(mnfd, 0); else let mxfdDefault
  //     be max(mnfd, 3).
  var mxfdDefault = s === 'currency' ? Math.max(mnfd, cDigits) : s === 'percent' ? Math.max(mnfd, 0) : Math.max(mnfd, 3);

  // 29. Let mxfd be the result of calling the GetNumberOption abstract operation
  //     with arguments options, "maximumFractionDigits", mnfd, 20, and mxfdDefault.
  var mxfd = GetNumberOption(options, 'maximumFractionDigits', mnfd, 20, mxfdDefault);

  // 30. Set the [[maximumFractionDigits]] internal property of numberFormat to mxfd.
  internal['[[maximumFractionDigits]]'] = mxfd;

  // 31. Let mnsd be the result of calling the [[Get]] internal method of options
  //     with argument "minimumSignificantDigits".
  var mnsd = options.minimumSignificantDigits;

  // 32. Let mxsd be the result of calling the [[Get]] internal method of options
  //     with argument "maximumSignificantDigits".
  var mxsd = options.maximumSignificantDigits;

  // 33. If mnsd is not undefined or mxsd is not undefined, then:
  if (mnsd !== undefined || mxsd !== undefined) {
    // a. Let mnsd be the result of calling the GetNumberOption abstract
    //    operation with arguments options, "minimumSignificantDigits", 1, 21,
    //    and 1.
    mnsd = GetNumberOption(options, 'minimumSignificantDigits', 1, 21, 1);

    // b. Let mxsd be the result of calling the GetNumberOption abstract
    //     operation with arguments options, "maximumSignificantDigits", mnsd,
    //     21, and 21.
    mxsd = GetNumberOption(options, 'maximumSignificantDigits', mnsd, 21, 21);

    // c. Set the [[minimumSignificantDigits]] internal property of numberFormat
    //    to mnsd, and the [[maximumSignificantDigits]] internal property of
    //    numberFormat to mxsd.
    internal['[[minimumSignificantDigits]]'] = mnsd;
    internal['[[maximumSignificantDigits]]'] = mxsd;
  }
  // 34. Let g be the result of calling the GetOption abstract operation with the
  //     arguments options, "useGrouping", "boolean", undefined, and true.
  var g = GetOption(options, 'useGrouping', 'boolean', undefined, true);

  // 35. Set the [[useGrouping]] internal property of numberFormat to g.
  internal['[[useGrouping]]'] = g;

  // 36. Let dataLocaleData be the result of calling the [[Get]] internal method of
  //     localeData with argument dataLocale.
  var dataLocaleData = localeData[dataLocale];

  // 37. Let patterns be the result of calling the [[Get]] internal method of
  //     dataLocaleData with argument "patterns".
  var patterns = dataLocaleData.patterns;

  // 38. Assert: patterns is an object (see 11.2.3)

  // 39. Let stylePatterns be the result of calling the [[Get]] internal method of
  //     patterns with argument s.
  var stylePatterns = patterns[s];

  // 40. Set the [[positivePattern]] internal property of numberFormat to the
  //     result of calling the [[Get]] internal method of stylePatterns with the
  //     argument "positivePattern".
  internal['[[positivePattern]]'] = stylePatterns.positivePattern;

  // 41. Set the [[negativePattern]] internal property of numberFormat to the
  //     result of calling the [[Get]] internal method of stylePatterns with the
  //     argument "negativePattern".
  internal['[[negativePattern]]'] = stylePatterns.negativePattern;

  // 42. Set the [[boundFormat]] internal property of numberFormat to undefined.
  internal['[[boundFormat]]'] = undefined;

  // 43. Set the [[initializedNumberFormat]] internal property of numberFormat to
  //     true.
  internal['[[initializedNumberFormat]]'] = true;

  // In ES3, we need to pre-bind the format() function
  if (es3) numberFormat.format = GetFormatNumber.call(numberFormat);

  // Restore the RegExp properties
  regexpRestore();

  // Return the newly initialised object
  return numberFormat;
}
function CurrencyDigits(currency) {
  // When the CurrencyDigits abstract operation is called with an argument currency
  // (which must be an upper case String value), the following steps are taken:

  // 1. If the ISO 4217 currency and funds code list contains currency as an
  // alphabetic code, then return the minor unit value corresponding to the
  // currency from the list; else return 2.
  return currencyMinorUnits[currency] !== undefined ? currencyMinorUnits[currency] : 2;
}

/* 11.2.3 */
internals.NumberFormat = {
  '[[availableLocales]]': [],
  '[[relevantExtensionKeys]]': ['nu'],
  '[[localeData]]': {}
};

/**
 * When the supportedLocalesOf method of Intl.NumberFormat is called, the
 * following steps are taken:
 */
/* 11.2.2 */
defineProperty(Intl.NumberFormat, 'supportedLocalesOf', {
  configurable: true,
  writable: true,
  value: fnBind.call(function (locales) {
    // Bound functions only have the `this` value altered if being used as a constructor,
    // this lets us imitate a native function that has no constructor
    if (!hop.call(this, '[[availableLocales]]')) throw new TypeError('supportedLocalesOf() is not a constructor');

    // Create an object whose props can be used to restore the values of RegExp props
    var regexpRestore = createRegExpRestore(),
      // 1. If options is not provided, then let options be undefined.
      options = arguments[1],
      // 2. Let availableLocales be the value of the [[availableLocales]] internal
      //    property of the standard built-in object that is the initial value of
      //    Intl.NumberFormat.

      availableLocales = this['[[availableLocales]]'],
      // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
      //    abstract operation (defined in 9.2.1) with argument locales.
      requestedLocales = CanonicalizeLocaleList(locales);

    // Restore the RegExp properties
    regexpRestore();

    // 4. Return the result of calling the SupportedLocales abstract operation
    //    (defined in 9.2.8) with arguments availableLocales, requestedLocales,
    //    and options.
    return SupportedLocales(availableLocales, requestedLocales, options);
  }, internals.NumberFormat)
});

/**
 * This named accessor property returns a function that formats a number
 * according to the effective locale and the formatting options of this
 * NumberFormat object.
 */
/* 11.3.2 */
defineProperty(Intl.NumberFormat.prototype, 'format', {
  configurable: true,
  get: GetFormatNumber
});
function GetFormatNumber() {
  var internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

  // Satisfy test 11.3_b
  if (!internal || !internal['[[initializedNumberFormat]]']) throw new TypeError('`this` value for format() is not an initialized Intl.NumberFormat object.');

  // The value of the [[Get]] attribute is a function that takes the following
  // steps:

  // 1. If the [[boundFormat]] internal property of this NumberFormat object
  //    is undefined, then:
  if (internal['[[boundFormat]]'] === undefined) {
    // a. Let F be a Function object, with internal properties set as
    //    specified for built-in functions in ES5, 15, or successor, and the
    //    length property set to 1, that takes the argument value and
    //    performs the following steps:
    var F = function F(value) {
      // i. If value is not provided, then let value be undefined.
      // ii. Let x be ToNumber(value).
      // iii. Return the result of calling the FormatNumber abstract
      //      operation (defined below) with arguments this and x.
      return FormatNumber(this, /* x = */Number(value));
    };

    // b. Let bind be the standard built-in function object defined in ES5,
    //    15.3.4.5.
    // c. Let bf be the result of calling the [[Call]] internal method of
    //    bind with F as the this value and an argument list containing
    //    the single item this.
    var bf = fnBind.call(F, this);

    // d. Set the [[boundFormat]] internal property of this NumberFormat
    //    object to bf.
    internal['[[boundFormat]]'] = bf;
  }
  // Return the value of the [[boundFormat]] internal property of this
  // NumberFormat object.
  return internal['[[boundFormat]]'];
}
function formatToParts() {
  var value = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
  var internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);
  if (!internal || !internal['[[initializedNumberFormat]]']) throw new TypeError('`this` value for formatToParts() is not an initialized Intl.NumberFormat object.');
  var x = Number(value);
  return FormatNumberToParts(this, x);
}
Object.defineProperty(Intl.NumberFormat.prototype, 'formatToParts', {
  configurable: true,
  enumerable: false,
  writable: true,
  value: formatToParts
});

/*
 * @spec[stasm/ecma402/number-format-to-parts/spec/numberformat.html]
 * @clause[sec-formatnumbertoparts]
 */
function FormatNumberToParts(numberFormat, x) {
  // 1. Let parts be ? PartitionNumberPattern(numberFormat, x).
  var parts = PartitionNumberPattern(numberFormat, x);
  // 2. Let result be ArrayCreate(0).
  var result = [];
  // 3. Let n be 0.
  var n = 0;
  // 4. For each part in parts, do:
  for (var i = 0; parts.length > i; i++) {
    var part = parts[i];
    // a. Let O be ObjectCreate(%ObjectPrototype%).
    var O = {};
    // a. Perform ? CreateDataPropertyOrThrow(O, "type", part.[[type]]).
    O.type = part['[[type]]'];
    // a. Perform ? CreateDataPropertyOrThrow(O, "value", part.[[value]]).
    O.value = part['[[value]]'];
    // a. Perform ? CreateDataPropertyOrThrow(result, ? ToString(n), O).
    result[n] = O;
    // a. Increment n by 1.
    n += 1;
  }
  // 5. Return result.
  return result;
}

/*
 * @spec[stasm/ecma402/number-format-to-parts/spec/numberformat.html]
 * @clause[sec-partitionnumberpattern]
 */
function PartitionNumberPattern(numberFormat, x) {
  var internal = getInternalProperties(numberFormat),
    locale = internal['[[dataLocale]]'],
    nums = internal['[[numberingSystem]]'],
    data = internals.NumberFormat['[[localeData]]'][locale],
    ild = data.symbols[nums] || data.symbols.latn,
    pattern = void 0;

  // 1. If x is not NaN and x < 0, then:
  if (!isNaN(x) && x < 0) {
    // a. Let x be -x.
    x = -x;
    // a. Let pattern be the value of numberFormat.[[negativePattern]].
    pattern = internal['[[negativePattern]]'];
  }
  // 2. Else,
  else {
    // a. Let pattern be the value of numberFormat.[[positivePattern]].
    pattern = internal['[[positivePattern]]'];
  }
  // 3. Let result be a new empty List.
  var result = new List();
  // 4. Let beginIndex be Call(%StringProto_indexOf%, pattern, "{", 0).
  var beginIndex = pattern.indexOf('{', 0);
  // 5. Let endIndex be 0.
  var endIndex = 0;
  // 6. Let nextIndex be 0.
  var nextIndex = 0;
  // 7. Let length be the number of code units in pattern.
  var length = pattern.length;
  // 8. Repeat while beginIndex is an integer index into pattern:
  while (beginIndex > -1 && beginIndex < length) {
    // a. Set endIndex to Call(%StringProto_indexOf%, pattern, "}", beginIndex)
    endIndex = pattern.indexOf('}', beginIndex);
    // a. If endIndex = -1, throw new Error exception.
    if (endIndex === -1) throw new Error();
    // a. If beginIndex is greater than nextIndex, then:
    if (beginIndex > nextIndex) {
      // i. Let literal be a substring of pattern from position nextIndex, inclusive, to position beginIndex, exclusive.
      var literal = pattern.substring(nextIndex, beginIndex);
      // ii. Add new part record { [[type]]: "literal", [[value]]: literal } as a new element of the list result.
      arrPush.call(result, {
        '[[type]]': 'literal',
        '[[value]]': literal
      });
    }
    // a. Let p be the substring of pattern from position beginIndex, exclusive, to position endIndex, exclusive.
    var p = pattern.substring(beginIndex + 1, endIndex);
    // a. If p is equal "number", then:
    if (p === "number") {
      // i. If x is NaN,
      if (isNaN(x)) {
        // 1. Let n be an ILD String value indicating the NaN value.
        var n = ild.nan;
        // 2. Add new part record { [[type]]: "nan", [[value]]: n } as a new element of the list result.
        arrPush.call(result, {
          '[[type]]': 'nan',
          '[[value]]': n
        });
      }
      // ii. Else if isFinite(x) is false,
      else if (!isFinite(x)) {
        // 1. Let n be an ILD String value indicating infinity.
        var _n = ild.infinity;
        // 2. Add new part record { [[type]]: "infinity", [[value]]: n } as a new element of the list result.
        arrPush.call(result, {
          '[[type]]': 'infinity',
          '[[value]]': _n
        });
      }
      // iii. Else,
      else {
        // 1. If the value of numberFormat.[[style]] is "percent" and isFinite(x), let x be 100 × x.
        if (internal['[[style]]'] === 'percent' && isFinite(x)) x *= 100;
        var _n2 = void 0;
        // 2. If the numberFormat.[[minimumSignificantDigits]] and numberFormat.[[maximumSignificantDigits]] are present, then
        if (hop.call(internal, '[[minimumSignificantDigits]]') && hop.call(internal, '[[maximumSignificantDigits]]')) {
          // a. Let n be ToRawPrecision(x, numberFormat.[[minimumSignificantDigits]], numberFormat.[[maximumSignificantDigits]]).
          _n2 = ToRawPrecision(x, internal['[[minimumSignificantDigits]]'], internal['[[maximumSignificantDigits]]']);
        }
        // 3. Else,
        else {
          // a. Let n be ToRawFixed(x, numberFormat.[[minimumIntegerDigits]], numberFormat.[[minimumFractionDigits]], numberFormat.[[maximumFractionDigits]]).
          _n2 = ToRawFixed(x, internal['[[minimumIntegerDigits]]'], internal['[[minimumFractionDigits]]'], internal['[[maximumFractionDigits]]']);
        }
        // 4. If the value of the numberFormat.[[numberingSystem]] matches one of the values in the "Numbering System" column of Table 2 below, then
        if (numSys[nums]) {
          (function () {
            // a. Let digits be an array whose 10 String valued elements are the UTF-16 string representations of the 10 digits specified in the "Digits" column of the matching row in Table 2.
            var digits = numSys[nums];
            // a. Replace each digit in n with the value of digits[digit].
            _n2 = String(_n2).replace(/\d/g, function (digit) {
              return digits[digit];
            });
          })();
        }
        // 5. Else use an implementation dependent algorithm to map n to the appropriate representation of n in the given numbering system.
        else _n2 = String(_n2); // ###TODO###

        var integer = void 0;
        var fraction = void 0;
        // 6. Let decimalSepIndex be Call(%StringProto_indexOf%, n, ".", 0).
        var decimalSepIndex = _n2.indexOf('.', 0);
        // 7. If decimalSepIndex > 0, then:
        if (decimalSepIndex > 0) {
          // a. Let integer be the substring of n from position 0, inclusive, to position decimalSepIndex, exclusive.
          integer = _n2.substring(0, decimalSepIndex);
          // a. Let fraction be the substring of n from position decimalSepIndex, exclusive, to the end of n.
          fraction = _n2.substring(decimalSepIndex + 1, decimalSepIndex.length);
        }
        // 8. Else:
        else {
          // a. Let integer be n.
          integer = _n2;
          // a. Let fraction be undefined.
          fraction = undefined;
        }
        // 9. If the value of the numberFormat.[[useGrouping]] is true,
        if (internal['[[useGrouping]]'] === true) {
          // a. Let groupSepSymbol be the ILND String representing the grouping separator.
          var groupSepSymbol = ild.group;
          // a. Let groups be a List whose elements are, in left to right order, the substrings defined by ILND set of locations within the integer.
          var groups = [];
          // ----> implementation:
          // Primary group represents the group closest to the decimal
          var pgSize = data.patterns.primaryGroupSize || 3;
          // Secondary group is every other group
          var sgSize = data.patterns.secondaryGroupSize || pgSize;
          // Group only if necessary
          if (integer.length > pgSize) {
            // Index of the primary grouping separator
            var end = integer.length - pgSize;
            // Starting index for our loop
            var idx = end % sgSize;
            var start = integer.slice(0, idx);
            if (start.length) arrPush.call(groups, start);
            // Loop to separate into secondary grouping digits
            while (idx < end) {
              arrPush.call(groups, integer.slice(idx, idx + sgSize));
              idx += sgSize;
            }
            // Add the primary grouping digits
            arrPush.call(groups, integer.slice(end));
          } else {
            arrPush.call(groups, integer);
          }
          // a. Assert: The number of elements in groups List is greater than 0.
          if (groups.length === 0) throw new Error();
          // a. Repeat, while groups List is not empty:
          while (groups.length) {
            // i. Remove the first element from groups and let integerGroup be the value of that element.
            var integerGroup = arrShift.call(groups);
            // ii. Add new part record { [[type]]: "integer", [[value]]: integerGroup } as a new element of the list result.
            arrPush.call(result, {
              '[[type]]': 'integer',
              '[[value]]': integerGroup
            });
            // iii. If groups List is not empty, then:
            if (groups.length) {
              // 1. Add new part record { [[type]]: "group", [[value]]: groupSepSymbol } as a new element of the list result.
              arrPush.call(result, {
                '[[type]]': 'group',
                '[[value]]': groupSepSymbol
              });
            }
          }
        }
        // 10. Else,
        else {
          // a. Add new part record { [[type]]: "integer", [[value]]: integer } as a new element of the list result.
          arrPush.call(result, {
            '[[type]]': 'integer',
            '[[value]]': integer
          });
        }
        // 11. If fraction is not undefined, then:
        if (fraction !== undefined) {
          // a. Let decimalSepSymbol be the ILND String representing the decimal separator.
          var decimalSepSymbol = ild.decimal;
          // a. Add new part record { [[type]]: "decimal", [[value]]: decimalSepSymbol } as a new element of the list result.
          arrPush.call(result, {
            '[[type]]': 'decimal',
            '[[value]]': decimalSepSymbol
          });
          // a. Add new part record { [[type]]: "fraction", [[value]]: fraction } as a new element of the list result.
          arrPush.call(result, {
            '[[type]]': 'fraction',
            '[[value]]': fraction
          });
        }
      }
    }
    // a. Else if p is equal "plusSign", then:
    else if (p === "plusSign") {
      // i. Let plusSignSymbol be the ILND String representing the plus sign.
      var plusSignSymbol = ild.plusSign;
      // ii. Add new part record { [[type]]: "plusSign", [[value]]: plusSignSymbol } as a new element of the list result.
      arrPush.call(result, {
        '[[type]]': 'plusSign',
        '[[value]]': plusSignSymbol
      });
    }
    // a. Else if p is equal "minusSign", then:
    else if (p === "minusSign") {
      // i. Let minusSignSymbol be the ILND String representing the minus sign.
      var minusSignSymbol = ild.minusSign;
      // ii. Add new part record { [[type]]: "minusSign", [[value]]: minusSignSymbol } as a new element of the list result.
      arrPush.call(result, {
        '[[type]]': 'minusSign',
        '[[value]]': minusSignSymbol
      });
    }
    // a. Else if p is equal "percentSign" and numberFormat.[[style]] is "percent", then:
    else if (p === "percentSign" && internal['[[style]]'] === "percent") {
      // i. Let percentSignSymbol be the ILND String representing the percent sign.
      var percentSignSymbol = ild.percentSign;
      // ii. Add new part record { [[type]]: "percentSign", [[value]]: percentSignSymbol } as a new element of the list result.
      arrPush.call(result, {
        '[[type]]': 'literal',
        '[[value]]': percentSignSymbol
      });
    }
    // a. Else if p is equal "currency" and numberFormat.[[style]] is "currency", then:
    else if (p === "currency" && internal['[[style]]'] === "currency") {
      // i. Let currency be the value of numberFormat.[[currency]].
      var currency = internal['[[currency]]'];
      var cd = void 0;

      // ii. If numberFormat.[[currencyDisplay]] is "code", then
      if (internal['[[currencyDisplay]]'] === "code") {
        // 1. Let cd be currency.
        cd = currency;
      }
      // iii. Else if numberFormat.[[currencyDisplay]] is "symbol", then
      else if (internal['[[currencyDisplay]]'] === "symbol") {
        // 1. Let cd be an ILD string representing currency in short form. If the implementation does not have such a representation of currency, use currency itself.
        cd = data.currencies[currency] || currency;
      }
      // iv. Else if numberFormat.[[currencyDisplay]] is "name", then
      else if (internal['[[currencyDisplay]]'] === "name") {
        // 1. Let cd be an ILD string representing currency in long form. If the implementation does not have such a representation of currency, then use currency itself.
        cd = currency;
      }
      // v. Add new part record { [[type]]: "currency", [[value]]: cd } as a new element of the list result.
      arrPush.call(result, {
        '[[type]]': 'currency',
        '[[value]]': cd
      });
    }
    // a. Else,
    else {
      // i. Let literal be the substring of pattern from position beginIndex, inclusive, to position endIndex, inclusive.
      var _literal = pattern.substring(beginIndex, endIndex);
      // ii. Add new part record { [[type]]: "literal", [[value]]: literal } as a new element of the list result.
      arrPush.call(result, {
        '[[type]]': 'literal',
        '[[value]]': _literal
      });
    }
    // a. Set nextIndex to endIndex + 1.
    nextIndex = endIndex + 1;
    // a. Set beginIndex to Call(%StringProto_indexOf%, pattern, "{", nextIndex)
    beginIndex = pattern.indexOf('{', nextIndex);
  }
  // 9. If nextIndex is less than length, then:
  if (nextIndex < length) {
    // a. Let literal be the substring of pattern from position nextIndex, inclusive, to position length, exclusive.
    var _literal2 = pattern.substring(nextIndex, length);
    // a. Add new part record { [[type]]: "literal", [[value]]: literal } as a new element of the list result.
    arrPush.call(result, {
      '[[type]]': 'literal',
      '[[value]]': _literal2
    });
  }
  // 10. Return result.
  return result;
}

/*
 * @spec[stasm/ecma402/number-format-to-parts/spec/numberformat.html]
 * @clause[sec-formatnumber]
 */
function FormatNumber(numberFormat, x) {
  // 1. Let parts be ? PartitionNumberPattern(numberFormat, x).
  var parts = PartitionNumberPattern(numberFormat, x);
  // 2. Let result be an empty String.
  var result = '';
  // 3. For each part in parts, do:
  for (var i = 0; parts.length > i; i++) {
    var part = parts[i];
    // a. Set result to a String value produced by concatenating result and part.[[value]].
    result += part['[[value]]'];
  }
  // 4. Return result.
  return result;
}

/**
 * When the ToRawPrecision abstract operation is called with arguments x (which
 * must be a finite non-negative number), minPrecision, and maxPrecision (both
 * must be integers between 1 and 21) the following steps are taken:
 */
function ToRawPrecision(x, minPrecision, maxPrecision) {
  // 1. Let p be maxPrecision.
  var p = maxPrecision;
  var m = void 0,
    e = void 0;

  // 2. If x = 0, then
  if (x === 0) {
    // a. Let m be the String consisting of p occurrences of the character "0".
    m = arrJoin.call(Array(p + 1), '0');
    // b. Let e be 0.
    e = 0;
  }
  // 3. Else
  else {
    // a. Let e and n be integers such that 10ᵖ⁻¹ ≤ n < 10ᵖ and for which the
    //    exact mathematical value of n × 10ᵉ⁻ᵖ⁺¹ – x is as close to zero as
    //    possible. If there are two such sets of e and n, pick the e and n for
    //    which n × 10ᵉ⁻ᵖ⁺¹ is larger.
    e = log10Floor(Math.abs(x));

    // Easier to get to m from here
    var f = Math.round(Math.exp(Math.abs(e - p + 1) * Math.LN10));

    // b. Let m be the String consisting of the digits of the decimal
    //    representation of n (in order, with no leading zeroes)
    m = String(Math.round(e - p + 1 < 0 ? x * f : x / f));
  }

  // 4. If e ≥ p, then
  if (e >= p)
    // a. Return the concatenation of m and e-p+1 occurrences of the character "0".
    return m + arrJoin.call(Array(e - p + 1 + 1), '0');

    // 5. If e = p-1, then
  else if (e === p - 1)
    // a. Return m.
    return m;

    // 6. If e ≥ 0, then
  else if (e >= 0)
    // a. Let m be the concatenation of the first e+1 characters of m, the character
    //    ".", and the remaining p–(e+1) characters of m.
    m = m.slice(0, e + 1) + '.' + m.slice(e + 1);

    // 7. If e < 0, then
  else if (e < 0)
    // a. Let m be the concatenation of the String "0.", –(e+1) occurrences of the
    //    character "0", and the string m.
    m = '0.' + arrJoin.call(Array(-(e + 1) + 1), '0') + m;

  // 8. If m contains the character ".", and maxPrecision > minPrecision, then
  if (m.indexOf(".") >= 0 && maxPrecision > minPrecision) {
    // a. Let cut be maxPrecision – minPrecision.
    var cut = maxPrecision - minPrecision;

    // b. Repeat while cut > 0 and the last character of m is "0":
    while (cut > 0 && m.charAt(m.length - 1) === '0') {
      //  i. Remove the last character from m.
      m = m.slice(0, -1);

      //  ii. Decrease cut by 1.
      cut--;
    }

    // c. If the last character of m is ".", then
    if (m.charAt(m.length - 1) === '.')
      //    i. Remove the last character from m.
      m = m.slice(0, -1);
  }
  // 9. Return m.
  return m;
}

/**
 * @spec[tc39/ecma402/master/spec/numberformat.html]
 * @clause[sec-torawfixed]
 * When the ToRawFixed abstract operation is called with arguments x (which must
 * be a finite non-negative number), minInteger (which must be an integer between
 * 1 and 21), minFraction, and maxFraction (which must be integers between 0 and
 * 20) the following steps are taken:
 */
function ToRawFixed(x, minInteger, minFraction, maxFraction) {
  // 1. Let f be maxFraction.
  var f = maxFraction;
  // 2. Let n be an integer for which the exact mathematical value of n ÷ 10f – x is as close to zero as possible. If there are two such n, pick the larger n.
  var n = Math.pow(10, f) * x; // diverging...
  // 3. If n = 0, let m be the String "0". Otherwise, let m be the String consisting of the digits of the decimal representation of n (in order, with no leading zeroes).
  var m = n === 0 ? "0" : n.toFixed(0); // divering...

  {
    // this diversion is needed to take into consideration big numbers, e.g.:
    // 1.2344501e+37 -> 12344501000000000000000000000000000000
    var idx = void 0;
    var exp = (idx = m.indexOf('e')) > -1 ? m.slice(idx + 1) : 0;
    if (exp) {
      m = m.slice(0, idx).replace('.', '');
      m += arrJoin.call(Array(exp - (m.length - 1) + 1), '0');
    }
  }
  var int = void 0;
  // 4. If f ≠ 0, then
  if (f !== 0) {
    // a. Let k be the number of characters in m.
    var k = m.length;
    // a. If k ≤ f, then
    if (k <= f) {
      // i. Let z be the String consisting of f+1–k occurrences of the character "0".
      var z = arrJoin.call(Array(f + 1 - k + 1), '0');
      // ii. Let m be the concatenation of Strings z and m.
      m = z + m;
      // iii. Let k be f+1.
      k = f + 1;
    }
    // a. Let a be the first k–f characters of m, and let b be the remaining f characters of m.
    var a = m.substring(0, k - f),
      b = m.substring(k - f, m.length);
    // a. Let m be the concatenation of the three Strings a, ".", and b.
    m = a + "." + b;
    // a. Let int be the number of characters in a.
    int = a.length;
  }
  // 5. Else, let int be the number of characters in m.
  else int = m.length;
  // 6. Let cut be maxFraction – minFraction.
  var cut = maxFraction - minFraction;
  // 7. Repeat while cut > 0 and the last character of m is "0":
  while (cut > 0 && m.slice(-1) === "0") {
    // a. Remove the last character from m.
    m = m.slice(0, -1);
    // a. Decrease cut by 1.
    cut--;
  }
  // 8. If the last character of m is ".", then
  if (m.slice(-1) === ".") {
    // a. Remove the last character from m.
    m = m.slice(0, -1);
  }
  // 9. If int < minInteger, then
  if (int < minInteger) {
    // a. Let z be the String consisting of minInteger–int occurrences of the character "0".
    var _z = arrJoin.call(Array(minInteger - int + 1), '0');
    // a. Let m be the concatenation of Strings z and m.
    m = _z + m;
  }
  // 10. Return m.
  return m;
}

// Sect 11.3.2 Table 2, Numbering systems
// ======================================
var numSys = {
  arab: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
  arabext: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
  bali: ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"],
  beng: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
  deva: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
  fullwide: ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
  gujr: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
  guru: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
  hanidec: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
  khmr: ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
  knda: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
  laoo: ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"],
  latn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  limb: ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"],
  mlym: ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"],
  mong: ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"],
  mymr: ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"],
  orya: ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"],
  tamldec: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
  telu: ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"],
  thai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
  tibt: ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"]
};

/**
 * This function provides access to the locale and formatting options computed
 * during initialization of the object.
 *
 * The function returns a new object whose properties and attributes are set as
 * if constructed by an object literal assigning to each of the following
 * properties the value of the corresponding internal property of this
 * NumberFormat object (see 11.4): locale, numberingSystem, style, currency,
 * currencyDisplay, minimumIntegerDigits, minimumFractionDigits,
 * maximumFractionDigits, minimumSignificantDigits, maximumSignificantDigits, and
 * useGrouping. Properties whose corresponding internal properties are not present
 * are not assigned.
 */
/* 11.3.3 */
defineProperty(Intl.NumberFormat.prototype, 'resolvedOptions', {
  configurable: true,
  writable: true,
  value: function value() {
    var prop = void 0,
      descs = new Record(),
      props = ['locale', 'numberingSystem', 'style', 'currency', 'currencyDisplay', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits', 'useGrouping'],
      internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

    // Satisfy test 11.3_b
    if (!internal || !internal['[[initializedNumberFormat]]']) throw new TypeError('`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.');
    for (var i = 0, max = props.length; i < max; i++) {
      if (hop.call(internal, prop = '[[' + props[i] + ']]')) descs[props[i]] = {
        value: internal[prop],
        writable: true,
        configurable: true,
        enumerable: true
      };
    }
    return objCreate({}, descs);
  }
});

/* jslint esnext: true */

// Match these datetime components in a CLDR pattern, except those in single quotes
var expDTComponents = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
// trim patterns after transformations
var expPatternTrimmer = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
// Skip over patterns with these datetime components because we don't have data
// to back them up:
// timezone, weekday, amoung others
var unwantedDTCs = /[rqQASjJgwWIQq]/; // xXVO were removed from this list in favor of computing matches with timeZoneName values but printing as empty string

var dtKeys = ["era", "year", "month", "day", "weekday", "quarter"];
var tmKeys = ["hour", "minute", "second", "hour12", "timeZoneName"];
function isDateFormatOnly(obj) {
  for (var i = 0; i < tmKeys.length; i += 1) {
    if (obj.hasOwnProperty(tmKeys[i])) {
      return false;
    }
  }
  return true;
}
function isTimeFormatOnly(obj) {
  for (var i = 0; i < dtKeys.length; i += 1) {
    if (obj.hasOwnProperty(dtKeys[i])) {
      return false;
    }
  }
  return true;
}
function joinDateAndTimeFormats(dateFormatObj, timeFormatObj) {
  var o = {
    _: {}
  };
  for (var i = 0; i < dtKeys.length; i += 1) {
    if (dateFormatObj[dtKeys[i]]) {
      o[dtKeys[i]] = dateFormatObj[dtKeys[i]];
    }
    if (dateFormatObj._[dtKeys[i]]) {
      o._[dtKeys[i]] = dateFormatObj._[dtKeys[i]];
    }
  }
  for (var j = 0; j < tmKeys.length; j += 1) {
    if (timeFormatObj[tmKeys[j]]) {
      o[tmKeys[j]] = timeFormatObj[tmKeys[j]];
    }
    if (timeFormatObj._[tmKeys[j]]) {
      o._[tmKeys[j]] = timeFormatObj._[tmKeys[j]];
    }
  }
  return o;
}
function computeFinalPatterns(formatObj) {
  // From http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns:
  //  'In patterns, two single quotes represents a literal single quote, either
  //   inside or outside single quotes. Text within single quotes is not
  //   interpreted in any way (except for two adjacent single quotes).'
  formatObj.pattern12 = formatObj.extendedPattern.replace(/'([^']*)'/g, function ($0, literal) {
    return literal ? literal : "'";
  });

  // pattern 12 is always the default. we can produce the 24 by removing {ampm}
  formatObj.pattern = formatObj.pattern12.replace('{ampm}', '').replace(expPatternTrimmer, '');
  return formatObj;
}
function expDTComponentsMeta($0, formatObj) {
  switch ($0.charAt(0)) {
    // --- Era
    case 'G':
      formatObj.era = ['short', 'short', 'short', 'long', 'narrow'][$0.length - 1];
      return '{era}';

    // --- Year
    case 'y':
    case 'Y':
    case 'u':
    case 'U':
    case 'r':
      formatObj.year = $0.length === 2 ? '2-digit' : 'numeric';
      return '{year}';

    // --- Quarter (not supported in this polyfill)
    case 'Q':
    case 'q':
      formatObj.quarter = ['numeric', '2-digit', 'short', 'long', 'narrow'][$0.length - 1];
      return '{quarter}';

    // --- Month
    case 'M':
    case 'L':
      formatObj.month = ['numeric', '2-digit', 'short', 'long', 'narrow'][$0.length - 1];
      return '{month}';

    // --- Week (not supported in this polyfill)
    case 'w':
      // week of the year
      formatObj.week = $0.length === 2 ? '2-digit' : 'numeric';
      return '{weekday}';
    case 'W':
      // week of the month
      formatObj.week = 'numeric';
      return '{weekday}';

    // --- Day
    case 'd':
      // day of the month
      formatObj.day = $0.length === 2 ? '2-digit' : 'numeric';
      return '{day}';
    case 'D': // day of the year
    case 'F': // day of the week
    case 'g':
      // 1..n: Modified Julian day
      formatObj.day = 'numeric';
      return '{day}';

    // --- Week Day
    case 'E':
      // day of the week
      formatObj.weekday = ['short', 'short', 'short', 'long', 'narrow', 'short'][$0.length - 1];
      return '{weekday}';
    case 'e':
      // local day of the week
      formatObj.weekday = ['numeric', '2-digit', 'short', 'long', 'narrow', 'short'][$0.length - 1];
      return '{weekday}';
    case 'c':
      // stand alone local day of the week
      formatObj.weekday = ['numeric', undefined, 'short', 'long', 'narrow', 'short'][$0.length - 1];
      return '{weekday}';

    // --- Period
    case 'a': // AM, PM
    case 'b': // am, pm, noon, midnight
    case 'B':
      // flexible day periods
      formatObj.hour12 = true;
      return '{ampm}';

    // --- Hour
    case 'h':
    case 'H':
      formatObj.hour = $0.length === 2 ? '2-digit' : 'numeric';
      return '{hour}';
    case 'k':
    case 'K':
      formatObj.hour12 = true; // 12-hour-cycle time formats (using h or K)
      formatObj.hour = $0.length === 2 ? '2-digit' : 'numeric';
      return '{hour}';

    // --- Minute
    case 'm':
      formatObj.minute = $0.length === 2 ? '2-digit' : 'numeric';
      return '{minute}';

    // --- Second
    case 's':
      formatObj.second = $0.length === 2 ? '2-digit' : 'numeric';
      return '{second}';
    case 'S':
    case 'A':
      formatObj.second = 'numeric';
      return '{second}';

    // --- Timezone
    case 'z': // 1..3, 4: specific non-location format
    case 'Z': // 1..3, 4, 5: The ISO8601 varios formats
    case 'O': // 1, 4: miliseconds in day short, long
    case 'v': // 1, 4: generic non-location format
    case 'V': // 1, 2, 3, 4: time zone ID or city
    case 'X': // 1, 2, 3, 4: The ISO8601 varios formats
    case 'x':
      // 1, 2, 3, 4: The ISO8601 varios formats
      // this polyfill only supports much, for now, we are just doing something dummy
      formatObj.timeZoneName = $0.length < 4 ? 'short' : 'long';
      return '{timeZoneName}';
  }
}

/**
 * Converts the CLDR availableFormats into the objects and patterns required by
 * the ECMAScript Internationalization API specification.
 */
function createDateTimeFormat(skeleton, pattern) {
  // we ignore certain patterns that are unsupported to avoid this expensive op.
  if (unwantedDTCs.test(pattern)) return undefined;
  var formatObj = {
    originalPattern: pattern,
    _: {}
  };

  // Replace the pattern string with the one required by the specification, whilst
  // at the same time evaluating it for the subsets and formats
  formatObj.extendedPattern = pattern.replace(expDTComponents, function ($0) {
    // See which symbol we're dealing with
    return expDTComponentsMeta($0, formatObj._);
  });

  // Match the skeleton string with the one required by the specification
  // this implementation is based on the Date Field Symbol Table:
  // http://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
  // Note: we are adding extra data to the formatObject even though this polyfill
  //       might not support it.
  skeleton.replace(expDTComponents, function ($0) {
    // See which symbol we're dealing with
    return expDTComponentsMeta($0, formatObj);
  });
  return computeFinalPatterns(formatObj);
}

/**
 * Processes DateTime formats from CLDR to an easier-to-parse format.
 * the result of this operation should be cached the first time a particular
 * calendar is analyzed.
 *
 * The specification requires we support at least the following subsets of
 * date/time components:
 *
 *   - 'weekday', 'year', 'month', 'day', 'hour', 'minute', 'second'
 *   - 'weekday', 'year', 'month', 'day'
 *   - 'year', 'month', 'day'
 *   - 'year', 'month'
 *   - 'month', 'day'
 *   - 'hour', 'minute', 'second'
 *   - 'hour', 'minute'
 *
 * We need to cherry pick at least these subsets from the CLDR data and convert
 * them into the pattern objects used in the ECMA-402 API.
 */
function createDateTimeFormats(formats) {
  var availableFormats = formats.availableFormats;
  var timeFormats = formats.timeFormats;
  var dateFormats = formats.dateFormats;
  var result = [];
  var skeleton = void 0,
    pattern = void 0,
    computed = void 0,
    i = void 0,
    j = void 0;
  var timeRelatedFormats = [];
  var dateRelatedFormats = [];

  // Map available (custom) formats into a pattern for createDateTimeFormats
  for (skeleton in availableFormats) {
    if (availableFormats.hasOwnProperty(skeleton)) {
      pattern = availableFormats[skeleton];
      computed = createDateTimeFormat(skeleton, pattern);
      if (computed) {
        result.push(computed);
        // in some cases, the format is only displaying date specific props
        // or time specific props, in which case we need to also produce the
        // combined formats.
        if (isDateFormatOnly(computed)) {
          dateRelatedFormats.push(computed);
        } else if (isTimeFormatOnly(computed)) {
          timeRelatedFormats.push(computed);
        }
      }
    }
  }

  // Map time formats into a pattern for createDateTimeFormats
  for (skeleton in timeFormats) {
    if (timeFormats.hasOwnProperty(skeleton)) {
      pattern = timeFormats[skeleton];
      computed = createDateTimeFormat(skeleton, pattern);
      if (computed) {
        result.push(computed);
        timeRelatedFormats.push(computed);
      }
    }
  }

  // Map date formats into a pattern for createDateTimeFormats
  for (skeleton in dateFormats) {
    if (dateFormats.hasOwnProperty(skeleton)) {
      pattern = dateFormats[skeleton];
      computed = createDateTimeFormat(skeleton, pattern);
      if (computed) {
        result.push(computed);
        dateRelatedFormats.push(computed);
      }
    }
  }

  // combine custom time and custom date formats when they are orthogonals to complete the
  // formats supported by CLDR.
  // This Algo is based on section "Missing Skeleton Fields" from:
  // http://unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems
  for (i = 0; i < timeRelatedFormats.length; i += 1) {
    for (j = 0; j < dateRelatedFormats.length; j += 1) {
      if (dateRelatedFormats[j].month === 'long') {
        pattern = dateRelatedFormats[j].weekday ? formats.full : formats.long;
      } else if (dateRelatedFormats[j].month === 'short') {
        pattern = formats.medium;
      } else {
        pattern = formats.short;
      }
      computed = joinDateAndTimeFormats(dateRelatedFormats[j], timeRelatedFormats[i]);
      computed.originalPattern = pattern;
      computed.extendedPattern = pattern.replace('{0}', timeRelatedFormats[i].extendedPattern).replace('{1}', dateRelatedFormats[j].extendedPattern).replace(/^[,\s]+|[,\s]+$/gi, '');
      result.push(computeFinalPatterns(computed));
    }
  }
  return result;
}

// this represents the exceptions of the rule that are not covered by CLDR availableFormats
// for single property configurations, they play no role when using multiple properties, and
// those that are not in this table, are not exceptions or are not covered by the data we
// provide.
var validSyntheticProps = {
  second: {
    numeric: 's',
    '2-digit': 'ss'
  },
  minute: {
    numeric: 'm',
    '2-digit': 'mm'
  },
  year: {
    numeric: 'y',
    '2-digit': 'yy'
  },
  day: {
    numeric: 'd',
    '2-digit': 'dd'
  },
  month: {
    numeric: 'L',
    '2-digit': 'LL',
    narrow: 'LLLLL',
    short: 'LLL',
    long: 'LLLL'
  },
  weekday: {
    narrow: 'ccccc',
    short: 'ccc',
    long: 'cccc'
  }
};
function generateSyntheticFormat(propName, propValue) {
  if (validSyntheticProps[propName] && validSyntheticProps[propName][propValue]) {
    var _ref2;
    return _ref2 = {
      originalPattern: validSyntheticProps[propName][propValue],
      _: defineProperty$1({}, propName, propValue),
      extendedPattern: "{" + propName + "}"
    }, defineProperty$1(_ref2, propName, propValue), defineProperty$1(_ref2, "pattern12", "{" + propName + "}"), defineProperty$1(_ref2, "pattern", "{" + propName + "}"), _ref2;
  }
}

// An object map of date component keys, saves using a regex later
var dateWidths = objCreate(null, {
  narrow: {},
  short: {},
  long: {}
});

/**
 * Returns a string for a date component, resolved using multiple inheritance as specified
 * as specified in the Unicode Technical Standard 35.
 */
function resolveDateString(data, ca, component, width, key) {
  // From http://www.unicode.org/reports/tr35/tr35.html#Multiple_Inheritance:
  // 'In clearly specified instances, resources may inherit from within the same locale.
  //  For example, ... the Buddhist calendar inherits from the Gregorian calendar.'
  var obj = data[ca] && data[ca][component] ? data[ca][component] : data.gregory[component],
    // "sideways" inheritance resolves strings when a key doesn't exist
    alts = {
      narrow: ['short', 'long'],
      short: ['long', 'narrow'],
      long: ['short', 'narrow']
    },
    //
    resolved = hop.call(obj, width) ? obj[width] : hop.call(obj, alts[width][0]) ? obj[alts[width][0]] : obj[alts[width][1]];

  // `key` wouldn't be specified for components 'dayPeriods'
  return key !== null ? resolved[key] : resolved;
}

// Define the DateTimeFormat constructor internally so it cannot be tainted
function DateTimeFormatConstructor() {
  var locales = arguments[0];
  var options = arguments[1];
  if (!this || this === Intl) {
    return new Intl.DateTimeFormat(locales, options);
  }
  return InitializeDateTimeFormat(toObject(this), locales, options);
}
defineProperty(Intl, 'DateTimeFormat', {
  configurable: true,
  writable: true,
  value: DateTimeFormatConstructor
});

// Must explicitly set prototypes as unwritable
defineProperty(DateTimeFormatConstructor, 'prototype', {
  writable: false
});

/**
 * The abstract operation InitializeDateTimeFormat accepts the arguments dateTimeFormat
 * (which must be an object), locales, and options. It initializes dateTimeFormat as a
 * DateTimeFormat object.
 */
function /* 12.1.1.1 */InitializeDateTimeFormat(dateTimeFormat, locales, options) {
  // This will be a internal properties object if we're not already initialized
  var internal = getInternalProperties(dateTimeFormat);

  // Create an object whose props can be used to restore the values of RegExp props
  var regexpRestore = createRegExpRestore();

  // 1. If dateTimeFormat has an [[initializedIntlObject]] internal property with
  //    value true, throw a TypeError exception.
  if (internal['[[initializedIntlObject]]'] === true) throw new TypeError('`this` object has already been initialized as an Intl object');

  // Need this to access the `internal` object
  defineProperty(dateTimeFormat, '__getInternalProperties', {
    value: function value() {
      // NOTE: Non-standard, for internal use only
      if (arguments[0] === secret) return internal;
    }
  });

  // 2. Set the [[initializedIntlObject]] internal property of numberFormat to true.
  internal['[[initializedIntlObject]]'] = true;

  // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
  //    abstract operation (defined in 9.2.1) with argument locales.
  var requestedLocales = CanonicalizeLocaleList(locales);

  // 4. Let options be the result of calling the ToDateTimeOptions abstract
  //    operation (defined below) with arguments options, "any", and "date".
  options = ToDateTimeOptions(options, 'any', 'date');

  // 5. Let opt be a new Record.
  var opt = new Record();

  // 6. Let matcher be the result of calling the GetOption abstract operation
  //    (defined in 9.2.9) with arguments options, "localeMatcher", "string", a List
  //    containing the two String values "lookup" and "best fit", and "best fit".
  var matcher = GetOption(options, 'localeMatcher', 'string', new List('lookup', 'best fit'), 'best fit');

  // 7. Set opt.[[localeMatcher]] to matcher.
  opt['[[localeMatcher]]'] = matcher;

  // 8. Let DateTimeFormat be the standard built-in object that is the initial
  //    value of Intl.DateTimeFormat.
  var DateTimeFormat = internals.DateTimeFormat; // This is what we *really* need

  // 9. Let localeData be the value of the [[localeData]] internal property of
  //    DateTimeFormat.
  var localeData = DateTimeFormat['[[localeData]]'];

  // 10. Let r be the result of calling the ResolveLocale abstract operation
  //     (defined in 9.2.5) with the [[availableLocales]] internal property of
  //      DateTimeFormat, requestedLocales, opt, the [[relevantExtensionKeys]]
  //      internal property of DateTimeFormat, and localeData.
  var r = ResolveLocale(DateTimeFormat['[[availableLocales]]'], requestedLocales, opt, DateTimeFormat['[[relevantExtensionKeys]]'], localeData);

  // 11. Set the [[locale]] internal property of dateTimeFormat to the value of
  //     r.[[locale]].
  internal['[[locale]]'] = r['[[locale]]'];

  // 12. Set the [[calendar]] internal property of dateTimeFormat to the value of
  //     r.[[ca]].
  internal['[[calendar]]'] = r['[[ca]]'];

  // 13. Set the [[numberingSystem]] internal property of dateTimeFormat to the value of
  //     r.[[nu]].
  internal['[[numberingSystem]]'] = r['[[nu]]'];

  // The specification doesn't tell us to do this, but it's helpful later on
  internal['[[dataLocale]]'] = r['[[dataLocale]]'];

  // 14. Let dataLocale be the value of r.[[dataLocale]].
  var dataLocale = r['[[dataLocale]]'];

  // 15. Let tz be the result of calling the [[Get]] internal method of options with
  //     argument "timeZone".
  var tz = options.timeZone;

  // 16. If tz is not undefined, then
  if (tz !== undefined) {
    // a. Let tz be ToString(tz).
    // b. Convert tz to upper case as described in 6.1.
    //    NOTE: If an implementation accepts additional time zone values, as permitted
    //          under certain conditions by the Conformance clause, different casing
    //          rules apply.
    tz = toLatinUpperCase(tz);

    // c. If tz is not "UTC", then throw a RangeError exception.
    // ###TODO: accept more time zones###
    if (tz !== 'UTC') throw new RangeError('timeZone is not supported.');
  }

  // 17. Set the [[timeZone]] internal property of dateTimeFormat to tz.
  internal['[[timeZone]]'] = tz;

  // 18. Let opt be a new Record.
  opt = new Record();

  // 19. For each row of Table 3, except the header row, do:
  for (var prop in dateTimeComponents) {
    if (!hop.call(dateTimeComponents, prop)) continue;

    // 20. Let prop be the name given in the Property column of the row.
    // 21. Let value be the result of calling the GetOption abstract operation,
    //     passing as argument options, the name given in the Property column of the
    //     row, "string", a List containing the strings given in the Values column of
    //     the row, and undefined.
    var value = GetOption(options, prop, 'string', dateTimeComponents[prop]);

    // 22. Set opt.[[<prop>]] to value.
    opt['[[' + prop + ']]'] = value;
  }

  // Assigned a value below
  var bestFormat = void 0;

  // 23. Let dataLocaleData be the result of calling the [[Get]] internal method of
  //     localeData with argument dataLocale.
  var dataLocaleData = localeData[dataLocale];

  // 24. Let formats be the result of calling the [[Get]] internal method of
  //     dataLocaleData with argument "formats".
  //     Note: we process the CLDR formats into the spec'd structure
  var formats = ToDateTimeFormats(dataLocaleData.formats);

  // 25. Let matcher be the result of calling the GetOption abstract operation with
  //     arguments options, "formatMatcher", "string", a List containing the two String
  //     values "basic" and "best fit", and "best fit".
  matcher = GetOption(options, 'formatMatcher', 'string', new List('basic', 'best fit'), 'best fit');

  // Optimization: caching the processed formats as a one time operation by
  // replacing the initial structure from localeData
  dataLocaleData.formats = formats;

  // 26. If matcher is "basic", then
  if (matcher === 'basic') {
    // 27. Let bestFormat be the result of calling the BasicFormatMatcher abstract
    //     operation (defined below) with opt and formats.
    bestFormat = BasicFormatMatcher(opt, formats);

    // 28. Else
  } else {
    {
      // diverging
      var _hr = GetOption(options, 'hour12', 'boolean' /*, undefined, undefined*/);
      opt.hour12 = _hr === undefined ? dataLocaleData.hour12 : _hr;
    }
    // 29. Let bestFormat be the result of calling the BestFitFormatMatcher
    //     abstract operation (defined below) with opt and formats.
    bestFormat = BestFitFormatMatcher(opt, formats);
  }

  // 30. For each row in Table 3, except the header row, do
  for (var _prop in dateTimeComponents) {
    if (!hop.call(dateTimeComponents, _prop)) continue;

    // a. Let prop be the name given in the Property column of the row.
    // b. Let pDesc be the result of calling the [[GetOwnProperty]] internal method of
    //    bestFormat with argument prop.
    // c. If pDesc is not undefined, then
    if (hop.call(bestFormat, _prop)) {
      // i. Let p be the result of calling the [[Get]] internal method of bestFormat
      //    with argument prop.
      var p = bestFormat[_prop];
      {
        // diverging
        p = bestFormat._ && hop.call(bestFormat._, _prop) ? bestFormat._[_prop] : p;
      }

      // ii. Set the [[<prop>]] internal property of dateTimeFormat to p.
      internal['[[' + _prop + ']]'] = p;
    }
  }
  var pattern = void 0; // Assigned a value below

  // 31. Let hr12 be the result of calling the GetOption abstract operation with
  //     arguments options, "hour12", "boolean", undefined, and undefined.
  var hr12 = GetOption(options, 'hour12', 'boolean' /*, undefined, undefined*/);

  // 32. If dateTimeFormat has an internal property [[hour]], then
  if (internal['[[hour]]']) {
    // a. If hr12 is undefined, then let hr12 be the result of calling the [[Get]]
    //    internal method of dataLocaleData with argument "hour12".
    hr12 = hr12 === undefined ? dataLocaleData.hour12 : hr12;

    // b. Set the [[hour12]] internal property of dateTimeFormat to hr12.
    internal['[[hour12]]'] = hr12;

    // c. If hr12 is true, then
    if (hr12 === true) {
      // i. Let hourNo0 be the result of calling the [[Get]] internal method of
      //    dataLocaleData with argument "hourNo0".
      var hourNo0 = dataLocaleData.hourNo0;

      // ii. Set the [[hourNo0]] internal property of dateTimeFormat to hourNo0.
      internal['[[hourNo0]]'] = hourNo0;

      // iii. Let pattern be the result of calling the [[Get]] internal method of
      //      bestFormat with argument "pattern12".
      pattern = bestFormat.pattern12;
    }

    // d. Else
    else
      // i. Let pattern be the result of calling the [[Get]] internal method of
      //    bestFormat with argument "pattern".
      pattern = bestFormat.pattern;
  }

  // 33. Else
  else
    // a. Let pattern be the result of calling the [[Get]] internal method of
    //    bestFormat with argument "pattern".
    pattern = bestFormat.pattern;

  // 34. Set the [[pattern]] internal property of dateTimeFormat to pattern.
  internal['[[pattern]]'] = pattern;

  // 35. Set the [[boundFormat]] internal property of dateTimeFormat to undefined.
  internal['[[boundFormat]]'] = undefined;

  // 36. Set the [[initializedDateTimeFormat]] internal property of dateTimeFormat to
  //     true.
  internal['[[initializedDateTimeFormat]]'] = true;

  // In ES3, we need to pre-bind the format() function
  if (es3) dateTimeFormat.format = GetFormatDateTime.call(dateTimeFormat);

  // Restore the RegExp properties
  regexpRestore();

  // Return the newly initialised object
  return dateTimeFormat;
}

/**
 * Several DateTimeFormat algorithms use values from the following table, which provides
 * property names and allowable values for the components of date and time formats:
 */
var dateTimeComponents = {
  weekday: ["narrow", "short", "long"],
  era: ["narrow", "short", "long"],
  year: ["2-digit", "numeric"],
  month: ["2-digit", "numeric", "narrow", "short", "long"],
  day: ["2-digit", "numeric"],
  hour: ["2-digit", "numeric"],
  minute: ["2-digit", "numeric"],
  second: ["2-digit", "numeric"],
  timeZoneName: ["short", "long"]
};

/**
 * When the ToDateTimeOptions abstract operation is called with arguments options,
 * required, and defaults, the following steps are taken:
 */
function ToDateTimeFormats(formats) {
  if (Object.prototype.toString.call(formats) === '[object Array]') {
    return formats;
  }
  return createDateTimeFormats(formats);
}

/**
 * When the ToDateTimeOptions abstract operation is called with arguments options,
 * required, and defaults, the following steps are taken:
 */
function ToDateTimeOptions(options, required, defaults) {
  // 1. If options is undefined, then let options be null, else let options be
  //    ToObject(options).
  if (options === undefined) options = null;else {
    // (#12) options needs to be a Record, but it also needs to inherit properties
    var opt2 = toObject(options);
    options = new Record();
    for (var k in opt2) {
      options[k] = opt2[k];
    }
  }

  // 2. Let create be the standard built-in function object defined in ES5, 15.2.3.5.
  var create = objCreate;

  // 3. Let options be the result of calling the [[Call]] internal method of create with
  //    undefined as the this value and an argument list containing the single item
  //    options.
  options = create(options);

  // 4. Let needDefaults be true.
  var needDefaults = true;

  // 5. If required is "date" or "any", then
  if (required === 'date' || required === 'any') {
    // a. For each of the property names "weekday", "year", "month", "day":
    // i. If the result of calling the [[Get]] internal method of options with the
    //    property name is not undefined, then let needDefaults be false.
    if (options.weekday !== undefined || options.year !== undefined || options.month !== undefined || options.day !== undefined) needDefaults = false;
  }

  // 6. If required is "time" or "any", then
  if (required === 'time' || required === 'any') {
    // a. For each of the property names "hour", "minute", "second":
    // i. If the result of calling the [[Get]] internal method of options with the
    //    property name is not undefined, then let needDefaults be false.
    if (options.hour !== undefined || options.minute !== undefined || options.second !== undefined) needDefaults = false;
  }

  // 7. If needDefaults is true and defaults is either "date" or "all", then
  if (needDefaults && (defaults === 'date' || defaults === 'all'))
    // a. For each of the property names "year", "month", "day":
    // i. Call the [[DefineOwnProperty]] internal method of options with the
    //    property name, Property Descriptor {[[Value]]: "numeric", [[Writable]]:
    //    true, [[Enumerable]]: true, [[Configurable]]: true}, and false.
    options.year = options.month = options.day = 'numeric';

  // 8. If needDefaults is true and defaults is either "time" or "all", then
  if (needDefaults && (defaults === 'time' || defaults === 'all'))
    // a. For each of the property names "hour", "minute", "second":
    // i. Call the [[DefineOwnProperty]] internal method of options with the
    //    property name, Property Descriptor {[[Value]]: "numeric", [[Writable]]:
    //    true, [[Enumerable]]: true, [[Configurable]]: true}, and false.
    options.hour = options.minute = options.second = 'numeric';

  // 9. Return options.
  return options;
}

/**
 * When the BasicFormatMatcher abstract operation is called with two arguments options and
 * formats, the following steps are taken:
 */
function BasicFormatMatcher(options, formats) {
  // 1. Let removalPenalty be 120.
  var removalPenalty = 120;

  // 2. Let additionPenalty be 20.
  var additionPenalty = 20;

  // 3. Let longLessPenalty be 8.
  var longLessPenalty = 8;

  // 4. Let longMorePenalty be 6.
  var longMorePenalty = 6;

  // 5. Let shortLessPenalty be 6.
  var shortLessPenalty = 6;

  // 6. Let shortMorePenalty be 3.
  var shortMorePenalty = 3;

  // 7. Let bestScore be -Infinity.
  var bestScore = -Infinity;

  // 8. Let bestFormat be undefined.
  var bestFormat = void 0;

  // 9. Let i be 0.
  var i = 0;

  // 10. Assert: formats is an Array object.

  // 11. Let len be the result of calling the [[Get]] internal method of formats with argument "length".
  var len = formats.length;

  // 12. Repeat while i < len:
  while (i < len) {
    // a. Let format be the result of calling the [[Get]] internal method of formats with argument ToString(i).
    var format = formats[i];

    // b. Let score be 0.
    var score = 0;

    // c. For each property shown in Table 3:
    for (var property in dateTimeComponents) {
      if (!hop.call(dateTimeComponents, property)) continue;

      // i. Let optionsProp be options.[[<property>]].
      var optionsProp = options['[[' + property + ']]'];

      // ii. Let formatPropDesc be the result of calling the [[GetOwnProperty]] internal method of format
      //     with argument property.
      // iii. If formatPropDesc is not undefined, then
      //     1. Let formatProp be the result of calling the [[Get]] internal method of format with argument property.
      var formatProp = hop.call(format, property) ? format[property] : undefined;

      // iv. If optionsProp is undefined and formatProp is not undefined, then decrease score by
      //     additionPenalty.
      if (optionsProp === undefined && formatProp !== undefined) score -= additionPenalty;

      // v. Else if optionsProp is not undefined and formatProp is undefined, then decrease score by
      //    removalPenalty.
      else if (optionsProp !== undefined && formatProp === undefined) score -= removalPenalty;

      // vi. Else
      else {
        // 1. Let values be the array ["2-digit", "numeric", "narrow", "short",
        //    "long"].
        var values = ['2-digit', 'numeric', 'narrow', 'short', 'long'];

        // 2. Let optionsPropIndex be the index of optionsProp within values.
        var optionsPropIndex = arrIndexOf.call(values, optionsProp);

        // 3. Let formatPropIndex be the index of formatProp within values.
        var formatPropIndex = arrIndexOf.call(values, formatProp);

        // 4. Let delta be max(min(formatPropIndex - optionsPropIndex, 2), -2).
        var delta = Math.max(Math.min(formatPropIndex - optionsPropIndex, 2), -2);

        // 5. If delta = 2, decrease score by longMorePenalty.
        if (delta === 2) score -= longMorePenalty;

        // 6. Else if delta = 1, decrease score by shortMorePenalty.
        else if (delta === 1) score -= shortMorePenalty;

        // 7. Else if delta = -1, decrease score by shortLessPenalty.
        else if (delta === -1) score -= shortLessPenalty;

        // 8. Else if delta = -2, decrease score by longLessPenalty.
        else if (delta === -2) score -= longLessPenalty;
      }
    }

    // d. If score > bestScore, then
    if (score > bestScore) {
      // i. Let bestScore be score.
      bestScore = score;

      // ii. Let bestFormat be format.
      bestFormat = format;
    }

    // e. Increase i by 1.
    i++;
  }

  // 13. Return bestFormat.
  return bestFormat;
}

/**
 * When the BestFitFormatMatcher abstract operation is called with two arguments options
 * and formats, it performs implementation dependent steps, which should return a set of
 * component representations that a typical user of the selected locale would perceive as
 * at least as good as the one returned by BasicFormatMatcher.
 *
 * This polyfill defines the algorithm to be the same as BasicFormatMatcher,
 * with the addition of bonus points awarded where the requested format is of
 * the same data type as the potentially matching format.
 *
 * This algo relies on the concept of closest distance matching described here:
 * http://unicode.org/reports/tr35/tr35-dates.html#Matching_Skeletons
 * Typically a “best match” is found using a closest distance match, such as:
 *
 * Symbols requesting a best choice for the locale are replaced.
 *      j → one of {H, k, h, K}; C → one of {a, b, B}
 * -> Covered by cldr.js matching process
 *
 * For fields with symbols representing the same type (year, month, day, etc):
 *     Most symbols have a small distance from each other.
 *         M ≅ L; E ≅ c; a ≅ b ≅ B; H ≅ k ≅ h ≅ K; ...
 *     -> Covered by cldr.js matching process
 *
 *     Width differences among fields, other than those marking text vs numeric, are given small distance from each other.
 *         MMM ≅ MMMM
 *         MM ≅ M
 *     Numeric and text fields are given a larger distance from each other.
 *         MMM ≈ MM
 *     Symbols representing substantial differences (week of year vs week of month) are given much larger a distances from each other.
 *         d ≋ D; ...
 *     Missing or extra fields cause a match to fail. (But see Missing Skeleton Fields).
 *
 *
 * For example,
 *
 *     { month: 'numeric', day: 'numeric' }
 *
 * should match
 *
 *     { month: '2-digit', day: '2-digit' }
 *
 * rather than
 *
 *     { month: 'short', day: 'numeric' }
 *
 * This makes sense because a user requesting a formatted date with numeric parts would
 * not expect to see the returned format containing narrow, short or long part names
 */
function BestFitFormatMatcher(options, formats) {
  /** Diverging: this block implements the hack for single property configuration, eg.:
   *
   *      `new Intl.DateTimeFormat('en', {day: 'numeric'})`
   *
   * should produce a single digit with the day of the month. This is needed because
   * CLDR `availableFormats` data structure doesn't cover these cases.
   */
  {
    var optionsPropNames = [];
    for (var property in dateTimeComponents) {
      if (!hop.call(dateTimeComponents, property)) continue;
      if (options['[[' + property + ']]'] !== undefined) {
        optionsPropNames.push(property);
      }
    }
    if (optionsPropNames.length === 1) {
      var _bestFormat = generateSyntheticFormat(optionsPropNames[0], options['[[' + optionsPropNames[0] + ']]']);
      if (_bestFormat) {
        return _bestFormat;
      }
    }
  }

  // 1. Let removalPenalty be 120.
  var removalPenalty = 120;

  // 2. Let additionPenalty be 20.
  var additionPenalty = 20;

  // 3. Let longLessPenalty be 8.
  var longLessPenalty = 8;

  // 4. Let longMorePenalty be 6.
  var longMorePenalty = 6;

  // 5. Let shortLessPenalty be 6.
  var shortLessPenalty = 6;

  // 6. Let shortMorePenalty be 3.
  var shortMorePenalty = 3;
  var patternPenalty = 2;
  var hour12Penalty = 1;

  // 7. Let bestScore be -Infinity.
  var bestScore = -Infinity;

  // 8. Let bestFormat be undefined.
  var bestFormat = void 0;

  // 9. Let i be 0.
  var i = 0;

  // 10. Assert: formats is an Array object.

  // 11. Let len be the result of calling the [[Get]] internal method of formats with argument "length".
  var len = formats.length;

  // 12. Repeat while i < len:
  while (i < len) {
    // a. Let format be the result of calling the [[Get]] internal method of formats with argument ToString(i).
    var format = formats[i];

    // b. Let score be 0.
    var score = 0;

    // c. For each property shown in Table 3:
    for (var _property in dateTimeComponents) {
      if (!hop.call(dateTimeComponents, _property)) continue;

      // i. Let optionsProp be options.[[<property>]].
      var optionsProp = options['[[' + _property + ']]'];

      // ii. Let formatPropDesc be the result of calling the [[GetOwnProperty]] internal method of format
      //     with argument property.
      // iii. If formatPropDesc is not undefined, then
      //     1. Let formatProp be the result of calling the [[Get]] internal method of format with argument property.
      var formatProp = hop.call(format, _property) ? format[_property] : undefined;

      // Diverging: using the default properties produced by the pattern/skeleton
      // to match it with user options, and apply a penalty
      var patternProp = hop.call(format._, _property) ? format._[_property] : undefined;
      if (optionsProp !== patternProp) {
        score -= patternPenalty;
      }

      // iv. If optionsProp is undefined and formatProp is not undefined, then decrease score by
      //     additionPenalty.
      if (optionsProp === undefined && formatProp !== undefined) score -= additionPenalty;

      // v. Else if optionsProp is not undefined and formatProp is undefined, then decrease score by
      //    removalPenalty.
      else if (optionsProp !== undefined && formatProp === undefined) score -= removalPenalty;

      // vi. Else
      else {
        // 1. Let values be the array ["2-digit", "numeric", "narrow", "short",
        //    "long"].
        var values = ['2-digit', 'numeric', 'narrow', 'short', 'long'];

        // 2. Let optionsPropIndex be the index of optionsProp within values.
        var optionsPropIndex = arrIndexOf.call(values, optionsProp);

        // 3. Let formatPropIndex be the index of formatProp within values.
        var formatPropIndex = arrIndexOf.call(values, formatProp);

        // 4. Let delta be max(min(formatPropIndex - optionsPropIndex, 2), -2).
        var delta = Math.max(Math.min(formatPropIndex - optionsPropIndex, 2), -2);
        {
          // diverging from spec
          // When the bestFit argument is true, subtract additional penalty where data types are not the same
          if (formatPropIndex <= 1 && optionsPropIndex >= 2 || formatPropIndex >= 2 && optionsPropIndex <= 1) {
            // 5. If delta = 2, decrease score by longMorePenalty.
            if (delta > 0) score -= longMorePenalty;else if (delta < 0) score -= longLessPenalty;
          } else {
            // 5. If delta = 2, decrease score by longMorePenalty.
            if (delta > 1) score -= shortMorePenalty;else if (delta < -1) score -= shortLessPenalty;
          }
        }
      }
    }
    {
      // diverging to also take into consideration differences between 12 or 24 hours
      // which is special for the best fit only.
      if (format._.hour12 !== options.hour12) {
        score -= hour12Penalty;
      }
    }

    // d. If score > bestScore, then
    if (score > bestScore) {
      // i. Let bestScore be score.
      bestScore = score;
      // ii. Let bestFormat be format.
      bestFormat = format;
    }

    // e. Increase i by 1.
    i++;
  }

  // 13. Return bestFormat.
  return bestFormat;
}

/* 12.2.3 */
internals.DateTimeFormat = {
  '[[availableLocales]]': [],
  '[[relevantExtensionKeys]]': ['ca', 'nu'],
  '[[localeData]]': {}
};

/**
 * When the supportedLocalesOf method of Intl.DateTimeFormat is called, the
 * following steps are taken:
 */
/* 12.2.2 */
defineProperty(Intl.DateTimeFormat, 'supportedLocalesOf', {
  configurable: true,
  writable: true,
  value: fnBind.call(function (locales) {
    // Bound functions only have the `this` value altered if being used as a constructor,
    // this lets us imitate a native function that has no constructor
    if (!hop.call(this, '[[availableLocales]]')) throw new TypeError('supportedLocalesOf() is not a constructor');

    // Create an object whose props can be used to restore the values of RegExp props
    var regexpRestore = createRegExpRestore(),
      // 1. If options is not provided, then let options be undefined.
      options = arguments[1],
      // 2. Let availableLocales be the value of the [[availableLocales]] internal
      //    property of the standard built-in object that is the initial value of
      //    Intl.NumberFormat.

      availableLocales = this['[[availableLocales]]'],
      // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
      //    abstract operation (defined in 9.2.1) with argument locales.
      requestedLocales = CanonicalizeLocaleList(locales);

    // Restore the RegExp properties
    regexpRestore();

    // 4. Return the result of calling the SupportedLocales abstract operation
    //    (defined in 9.2.8) with arguments availableLocales, requestedLocales,
    //    and options.
    return SupportedLocales(availableLocales, requestedLocales, options);
  }, internals.NumberFormat)
});

/**
 * This named accessor property returns a function that formats a number
 * according to the effective locale and the formatting options of this
 * DateTimeFormat object.
 */
/* 12.3.2 */
defineProperty(Intl.DateTimeFormat.prototype, 'format', {
  configurable: true,
  get: GetFormatDateTime
});
function GetFormatDateTime() {
  var internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

  // Satisfy test 12.3_b
  if (!internal || !internal['[[initializedDateTimeFormat]]']) throw new TypeError('`this` value for format() is not an initialized Intl.DateTimeFormat object.');

  // The value of the [[Get]] attribute is a function that takes the following
  // steps:

  // 1. If the [[boundFormat]] internal property of this DateTimeFormat object
  //    is undefined, then:
  if (internal['[[boundFormat]]'] === undefined) {
    // a. Let F be a Function object, with internal properties set as
    //    specified for built-in functions in ES5, 15, or successor, and the
    //    length property set to 0, that takes the argument date and
    //    performs the following steps:
    var F = function F() {
      var date = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

      //   i. If date is not provided or is undefined, then let x be the
      //      result as if by the expression Date.now() where Date.now is
      //      the standard built-in function defined in ES5, 15.9.4.4.
      //  ii. Else let x be ToNumber(date).
      // iii. Return the result of calling the FormatDateTime abstract
      //      operation (defined below) with arguments this and x.
      var x = date === undefined ? Date.now() : toNumber(date);
      return FormatDateTime(this, x);
    };
    // b. Let bind be the standard built-in function object defined in ES5,
    //    15.3.4.5.
    // c. Let bf be the result of calling the [[Call]] internal method of
    //    bind with F as the this value and an argument list containing
    //    the single item this.
    var bf = fnBind.call(F, this);
    // d. Set the [[boundFormat]] internal property of this NumberFormat
    //    object to bf.
    internal['[[boundFormat]]'] = bf;
  }
  // Return the value of the [[boundFormat]] internal property of this
  // NumberFormat object.
  return internal['[[boundFormat]]'];
}
function formatToParts$1() {
  var date = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
  var internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);
  if (!internal || !internal['[[initializedDateTimeFormat]]']) throw new TypeError('`this` value for formatToParts() is not an initialized Intl.DateTimeFormat object.');
  var x = date === undefined ? Date.now() : toNumber(date);
  return FormatToPartsDateTime(this, x);
}
Object.defineProperty(Intl.DateTimeFormat.prototype, 'formatToParts', {
  enumerable: false,
  writable: true,
  configurable: true,
  value: formatToParts$1
});
function CreateDateTimeParts(dateTimeFormat, x) {
  // 1. If x is not a finite Number, then throw a RangeError exception.
  if (!isFinite(x)) throw new RangeError('Invalid valid date passed to format');
  var internal = dateTimeFormat.__getInternalProperties(secret);

  // Creating restore point for properties on the RegExp object... please wait
  /* let regexpRestore = */
  createRegExpRestore(); // ###TODO: review this

  // 2. Let locale be the value of the [[locale]] internal property of dateTimeFormat.
  var locale = internal['[[locale]]'];

  // 3. Let nf be the result of creating a new NumberFormat object as if by the
  // expression new Intl.NumberFormat([locale], {useGrouping: false}) where
  // Intl.NumberFormat is the standard built-in constructor defined in 11.1.3.
  var nf = new Intl.NumberFormat([locale], {
    useGrouping: false
  });

  // 4. Let nf2 be the result of creating a new NumberFormat object as if by the
  // expression new Intl.NumberFormat([locale], {minimumIntegerDigits: 2, useGrouping:
  // false}) where Intl.NumberFormat is the standard built-in constructor defined in
  // 11.1.3.
  var nf2 = new Intl.NumberFormat([locale], {
    minimumIntegerDigits: 2,
    useGrouping: false
  });

  // 5. Let tm be the result of calling the ToLocalTime abstract operation (defined
  // below) with x, the value of the [[calendar]] internal property of dateTimeFormat,
  // and the value of the [[timeZone]] internal property of dateTimeFormat.
  var tm = ToLocalTime(x, internal['[[calendar]]'], internal['[[timeZone]]']);

  // 6. Let result be the value of the [[pattern]] internal property of dateTimeFormat.
  var pattern = internal['[[pattern]]'];

  // 7.
  var result = new List();

  // 8.
  var index = 0;

  // 9.
  var beginIndex = pattern.indexOf('{');

  // 10.
  var endIndex = 0;

  // Need the locale minus any extensions
  var dataLocale = internal['[[dataLocale]]'];

  // Need the calendar data from CLDR
  var localeData = internals.DateTimeFormat['[[localeData]]'][dataLocale].calendars;
  var ca = internal['[[calendar]]'];

  // 11.
  while (beginIndex !== -1) {
    var fv = void 0;
    // a.
    endIndex = pattern.indexOf('}', beginIndex);
    // b.
    if (endIndex === -1) {
      throw new Error('Unclosed pattern');
    }
    // c.
    if (beginIndex > index) {
      arrPush.call(result, {
        type: 'literal',
        value: pattern.substring(index, beginIndex)
      });
    }
    // d.
    var p = pattern.substring(beginIndex + 1, endIndex);
    // e.
    if (dateTimeComponents.hasOwnProperty(p)) {
      //   i. Let f be the value of the [[<p>]] internal property of dateTimeFormat.
      var f = internal['[[' + p + ']]'];
      //  ii. Let v be the value of tm.[[<p>]].
      var v = tm['[[' + p + ']]'];
      // iii. If p is "year" and v ≤ 0, then let v be 1 - v.
      if (p === 'year' && v <= 0) {
        v = 1 - v;
      }
      //  iv. If p is "month", then increase v by 1.
      else if (p === 'month') {
        v++;
      }
      //   v. If p is "hour" and the value of the [[hour12]] internal property of
      //      dateTimeFormat is true, then
      else if (p === 'hour' && internal['[[hour12]]'] === true) {
        // 1. Let v be v modulo 12.
        v = v % 12;
        // 2. If v is 0 and the value of the [[hourNo0]] internal property of
        //    dateTimeFormat is true, then let v be 12.
        if (v === 0 && internal['[[hourNo0]]'] === true) {
          v = 12;
        }
      }

      //  vi. If f is "numeric", then
      if (f === 'numeric') {
        // 1. Let fv be the result of calling the FormatNumber abstract operation
        //    (defined in 11.3.2) with arguments nf and v.
        fv = FormatNumber(nf, v);
      }
      // vii. Else if f is "2-digit", then
      else if (f === '2-digit') {
        // 1. Let fv be the result of calling the FormatNumber abstract operation
        //    with arguments nf2 and v.
        fv = FormatNumber(nf2, v);
        // 2. If the length of fv is greater than 2, let fv be the substring of fv
        //    containing the last two characters.
        if (fv.length > 2) {
          fv = fv.slice(-2);
        }
      }
      // viii. Else if f is "narrow", "short", or "long", then let fv be a String
      //     value representing f in the desired form; the String value depends upon
      //     the implementation and the effective locale and calendar of
      //     dateTimeFormat. If p is "month", then the String value may also depend
      //     on whether dateTimeFormat has a [[day]] internal property. If p is
      //     "timeZoneName", then the String value may also depend on the value of
      //     the [[inDST]] field of tm.
      else if (f in dateWidths) {
        switch (p) {
          case 'month':
            fv = resolveDateString(localeData, ca, 'months', f, tm['[[' + p + ']]']);
            break;
          case 'weekday':
            try {
              fv = resolveDateString(localeData, ca, 'days', f, tm['[[' + p + ']]']);
              // fv = resolveDateString(ca.days, f)[tm['[['+ p +']]']];
            } catch (e) {
              throw new Error('Could not find weekday data for locale ' + locale);
            }
            break;
          case 'timeZoneName':
            fv = ''; // ###TODO
            break;
          case 'era':
            try {
              fv = resolveDateString(localeData, ca, 'eras', f, tm['[[' + p + ']]']);
            } catch (e) {
              throw new Error('Could not find era data for locale ' + locale);
            }
            break;
          default:
            fv = tm['[[' + p + ']]'];
        }
      }
      // ix
      arrPush.call(result, {
        type: p,
        value: fv
      });
      // f.
    } else if (p === 'ampm') {
      // i.
      var _v = tm['[[hour]]'];
      // ii./iii.
      fv = resolveDateString(localeData, ca, 'dayPeriods', _v > 11 ? 'pm' : 'am', null);
      // iv.
      arrPush.call(result, {
        type: 'dayPeriod',
        value: fv
      });
      // g.
    } else {
      arrPush.call(result, {
        type: 'literal',
        value: pattern.substring(beginIndex, endIndex + 1)
      });
    }
    // h.
    index = endIndex + 1;
    // i.
    beginIndex = pattern.indexOf('{', index);
  }
  // 12.
  if (endIndex < pattern.length - 1) {
    arrPush.call(result, {
      type: 'literal',
      value: pattern.substr(endIndex + 1)
    });
  }
  // 13.
  return result;
}

/**
 * When the FormatDateTime abstract operation is called with arguments dateTimeFormat
 * (which must be an object initialized as a DateTimeFormat) and x (which must be a Number
 * value), it returns a String value representing x (interpreted as a time value as
 * specified in ES5, 15.9.1.1) according to the effective locale and the formatting
 * options of dateTimeFormat.
 */
function FormatDateTime(dateTimeFormat, x) {
  var parts = CreateDateTimeParts(dateTimeFormat, x);
  var result = '';
  for (var i = 0; parts.length > i; i++) {
    var part = parts[i];
    result += part.value;
  }
  return result;
}
function FormatToPartsDateTime(dateTimeFormat, x) {
  var parts = CreateDateTimeParts(dateTimeFormat, x);
  var result = [];
  for (var i = 0; parts.length > i; i++) {
    var part = parts[i];
    result.push({
      type: part.type,
      value: part.value
    });
  }
  return result;
}

/**
 * When the ToLocalTime abstract operation is called with arguments date, calendar, and
 * timeZone, the following steps are taken:
 */
function ToLocalTime(date, calendar, timeZone) {
  // 1. Apply calendrical calculations on date for the given calendar and time zone to
  //    produce weekday, era, year, month, day, hour, minute, second, and inDST values.
  //    The calculations should use best available information about the specified
  //    calendar and time zone. If the calendar is "gregory", then the calculations must
  //    match the algorithms specified in ES5, 15.9.1, except that calculations are not
  //    bound by the restrictions on the use of best available information on time zones
  //    for local time zone adjustment and daylight saving time adjustment imposed by
  //    ES5, 15.9.1.7 and 15.9.1.8.
  // ###TODO###
  var d = new Date(date),
    m = 'get' + (timeZone || '');

  // 2. Return a Record with fields [[weekday]], [[era]], [[year]], [[month]], [[day]],
  //    [[hour]], [[minute]], [[second]], and [[inDST]], each with the corresponding
  //    calculated value.
  return new Record({
    '[[weekday]]': d[m + 'Day'](),
    '[[era]]': +(d[m + 'FullYear']() >= 0),
    '[[year]]': d[m + 'FullYear'](),
    '[[month]]': d[m + 'Month'](),
    '[[day]]': d[m + 'Date'](),
    '[[hour]]': d[m + 'Hours'](),
    '[[minute]]': d[m + 'Minutes'](),
    '[[second]]': d[m + 'Seconds'](),
    '[[inDST]]': false // ###TODO###
  });
}

/**
 * The function returns a new object whose properties and attributes are set as if
 * constructed by an object literal assigning to each of the following properties the
 * value of the corresponding internal property of this DateTimeFormat object (see 12.4):
 * locale, calendar, numberingSystem, timeZone, hour12, weekday, era, year, month, day,
 * hour, minute, second, and timeZoneName. Properties whose corresponding internal
 * properties are not present are not assigned.
 */
/* 12.3.3 */
defineProperty(Intl.DateTimeFormat.prototype, 'resolvedOptions', {
  writable: true,
  configurable: true,
  value: function value() {
    var prop = void 0,
      descs = new Record(),
      props = ['locale', 'calendar', 'numberingSystem', 'timeZone', 'hour12', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName'],
      internal = this !== null && babelHelpers$1["typeof"](this) === 'object' && getInternalProperties(this);

    // Satisfy test 12.3_b
    if (!internal || !internal['[[initializedDateTimeFormat]]']) throw new TypeError('`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.');
    for (var i = 0, max = props.length; i < max; i++) {
      if (hop.call(internal, prop = '[[' + props[i] + ']]')) descs[props[i]] = {
        value: internal[prop],
        writable: true,
        configurable: true,
        enumerable: true
      };
    }
    return objCreate({}, descs);
  }
});
var ls = Intl.__localeSensitiveProtos = {
  Number: {},
  Date: {}
};

/**
 * When the toLocaleString method is called with optional arguments locales and options,
 * the following steps are taken:
 */
/* 13.2.1 */
ls.Number.toLocaleString = function () {
  // Satisfy test 13.2.1_1
  if (Object.prototype.toString.call(this) !== '[object Number]') throw new TypeError('`this` value must be a number for Number.prototype.toLocaleString()');

  // 1. Let x be this Number value (as defined in ES5, 15.7.4).
  // 2. If locales is not provided, then let locales be undefined.
  // 3. If options is not provided, then let options be undefined.
  // 4. Let numberFormat be the result of creating a new object as if by the
  //    expression new Intl.NumberFormat(locales, options) where
  //    Intl.NumberFormat is the standard built-in constructor defined in 11.1.3.
  // 5. Return the result of calling the FormatNumber abstract operation
  //    (defined in 11.3.2) with arguments numberFormat and x.
  return FormatNumber(new NumberFormatConstructor(arguments[0], arguments[1]), this);
};

/**
 * When the toLocaleString method is called with optional arguments locales and options,
 * the following steps are taken:
 */
/* 13.3.1 */
ls.Date.toLocaleString = function () {
  // Satisfy test 13.3.0_1
  if (Object.prototype.toString.call(this) !== '[object Date]') throw new TypeError('`this` value must be a Date instance for Date.prototype.toLocaleString()');

  // 1. Let x be this time value (as defined in ES5, 15.9.5).
  var x = +this;

  // 2. If x is NaN, then return "Invalid Date".
  if (isNaN(x)) return 'Invalid Date';

  // 3. If locales is not provided, then let locales be undefined.
  var locales = arguments[0];

  // 4. If options is not provided, then let options be undefined.
  var options = arguments[1];

  // 5. Let options be the result of calling the ToDateTimeOptions abstract
  //    operation (defined in 12.1.1) with arguments options, "any", and "all".
  options = ToDateTimeOptions(options, 'any', 'all');

  // 6. Let dateTimeFormat be the result of creating a new object as if by the
  //    expression new Intl.DateTimeFormat(locales, options) where
  //    Intl.DateTimeFormat is the standard built-in constructor defined in 12.1.3.
  var dateTimeFormat = new DateTimeFormatConstructor(locales, options);

  // 7. Return the result of calling the FormatDateTime abstract operation (defined
  //    in 12.3.2) with arguments dateTimeFormat and x.
  return FormatDateTime(dateTimeFormat, x);
};

/**
 * When the toLocaleDateString method is called with optional arguments locales and
 * options, the following steps are taken:
 */
/* 13.3.2 */
ls.Date.toLocaleDateString = function () {
  // Satisfy test 13.3.0_1
  if (Object.prototype.toString.call(this) !== '[object Date]') throw new TypeError('`this` value must be a Date instance for Date.prototype.toLocaleDateString()');

  // 1. Let x be this time value (as defined in ES5, 15.9.5).
  var x = +this;

  // 2. If x is NaN, then return "Invalid Date".
  if (isNaN(x)) return 'Invalid Date';

  // 3. If locales is not provided, then let locales be undefined.
  var locales = arguments[0],
    // 4. If options is not provided, then let options be undefined.
    options = arguments[1];

  // 5. Let options be the result of calling the ToDateTimeOptions abstract
  //    operation (defined in 12.1.1) with arguments options, "date", and "date".
  options = ToDateTimeOptions(options, 'date', 'date');

  // 6. Let dateTimeFormat be the result of creating a new object as if by the
  //    expression new Intl.DateTimeFormat(locales, options) where
  //    Intl.DateTimeFormat is the standard built-in constructor defined in 12.1.3.
  var dateTimeFormat = new DateTimeFormatConstructor(locales, options);

  // 7. Return the result of calling the FormatDateTime abstract operation (defined
  //    in 12.3.2) with arguments dateTimeFormat and x.
  return FormatDateTime(dateTimeFormat, x);
};

/**
 * When the toLocaleTimeString method is called with optional arguments locales and
 * options, the following steps are taken:
 */
/* 13.3.3 */
ls.Date.toLocaleTimeString = function () {
  // Satisfy test 13.3.0_1
  if (Object.prototype.toString.call(this) !== '[object Date]') throw new TypeError('`this` value must be a Date instance for Date.prototype.toLocaleTimeString()');

  // 1. Let x be this time value (as defined in ES5, 15.9.5).
  var x = +this;

  // 2. If x is NaN, then return "Invalid Date".
  if (isNaN(x)) return 'Invalid Date';

  // 3. If locales is not provided, then let locales be undefined.
  var locales = arguments[0];

  // 4. If options is not provided, then let options be undefined.
  var options = arguments[1];

  // 5. Let options be the result of calling the ToDateTimeOptions abstract
  //    operation (defined in 12.1.1) with arguments options, "time", and "time".
  options = ToDateTimeOptions(options, 'time', 'time');

  // 6. Let dateTimeFormat be the result of creating a new object as if by the
  //    expression new Intl.DateTimeFormat(locales, options) where
  //    Intl.DateTimeFormat is the standard built-in constructor defined in 12.1.3.
  var dateTimeFormat = new DateTimeFormatConstructor(locales, options);

  // 7. Return the result of calling the FormatDateTime abstract operation (defined
  //    in 12.3.2) with arguments dateTimeFormat and x.
  return FormatDateTime(dateTimeFormat, x);
};
defineProperty(Intl, '__applyLocaleSensitivePrototypes', {
  writable: true,
  configurable: true,
  value: function value() {
    defineProperty(Number.prototype, 'toLocaleString', {
      writable: true,
      configurable: true,
      value: ls.Number.toLocaleString
    });
    // Need this here for IE 8, to avoid the _DontEnum_ bug
    defineProperty(Date.prototype, 'toLocaleString', {
      writable: true,
      configurable: true,
      value: ls.Date.toLocaleString
    });
    for (var k in ls.Date) {
      if (hop.call(ls.Date, k)) defineProperty(Date.prototype, k, {
        writable: true,
        configurable: true,
        value: ls.Date[k]
      });
    }
  }
});

/**
 * Can't really ship a single script with data for hundreds of locales, so we provide
 * this __addLocaleData method as a means for the developer to add the data on an
 * as-needed basis
 */
defineProperty(Intl, '__addLocaleData', {
  value: function value(data) {
    if (!IsStructurallyValidLanguageTag(data.locale)) throw new Error("Object passed doesn't identify itself with a valid language tag");
    addLocaleData(data, data.locale);
  }
});
function addLocaleData(data, tag) {
  // Both NumberFormat and DateTimeFormat require number data, so throw if it isn't present
  if (!data.number) throw new Error("Object passed doesn't contain locale data for Intl.NumberFormat");
  var locale = void 0,
    locales = [tag],
    parts = tag.split('-');

  // Create fallbacks for locale data with scripts, e.g. Latn, Hans, Vaii, etc
  if (parts.length > 2 && parts[1].length === 4) arrPush.call(locales, parts[0] + '-' + parts[2]);
  while (locale = arrShift.call(locales)) {
    // Add to NumberFormat internal properties as per 11.2.3
    arrPush.call(internals.NumberFormat['[[availableLocales]]'], locale);
    internals.NumberFormat['[[localeData]]'][locale] = data.number;

    // ...and DateTimeFormat internal properties as per 12.2.3
    if (data.date) {
      data.date.nu = data.number.nu;
      arrPush.call(internals.DateTimeFormat['[[availableLocales]]'], locale);
      internals.DateTimeFormat['[[localeData]]'][locale] = data.date;
    }
  }

  // If this is the first set of locale data added, make it the default
  if (defaultLocale === undefined) setDefaultLocale(tag);
}
defineProperty(Intl, '__disableRegExpRestore', {
  value: function value() {
    internals.disableRegExpRestore = true;
  }
});
module.exports = Intl;

/***/ }),

/***/ 35642:
/*!***********************************************!*\
  !*** ./node_modules/zone.js/fesm2015/zone.js ***!
  \***********************************************/
/***/ (() => {

"use strict";


/**
 * @license Angular v14.2.0-next.0
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global) {
  const performance = global['performance'];
  function mark(name) {
    performance && performance['mark'] && performance['mark'](name);
  }
  function performanceMeasure(name, label) {
    performance && performance['measure'] && performance['measure'](name, label);
  }
  mark('Zone');
  // Initialize before it's accessed below.
  // __Zone_symbol_prefix global can be used to override the default zone
  // symbol prefix with a custom one if needed.
  const symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';
  function __symbol__(name) {
    return symbolPrefix + name;
  }
  const checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;
  if (global['Zone']) {
    // if global['Zone'] already exists (maybe zone.js was already loaded or
    // some other lib also registered a global object named Zone), we may need
    // to throw an error, but sometimes user may not want this error.
    // For example,
    // we have two web pages, page1 includes zone.js, page2 doesn't.
    // and the 1st time user load page1 and page2, everything work fine,
    // but when user load page2 again, error occurs because global['Zone'] already exists.
    // so we add a flag to let user choose whether to throw this error or not.
    // By default, if existing Zone is from zone.js, we will not throw the error.
    if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
      throw new Error('Zone already loaded.');
    } else {
      return global['Zone'];
    }
  }
  class Zone {
    constructor(parent, zoneSpec) {
      this._parent = parent;
      this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
      this._properties = zoneSpec && zoneSpec.properties || {};
      this._zoneDelegate = new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
    }
    static assertZonePatched() {
      if (global['Promise'] !== patches['ZoneAwarePromise']) {
        throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
      }
    }
    static get root() {
      let zone = Zone.current;
      while (zone.parent) {
        zone = zone.parent;
      }
      return zone;
    }
    static get current() {
      return _currentZoneFrame.zone;
    }
    static get currentTask() {
      return _currentTask;
    }
    // tslint:disable-next-line:require-internal-with-underscore
    static __load_patch(name, fn, ignoreDuplicate = false) {
      if (patches.hasOwnProperty(name)) {
        // `checkDuplicate` option is defined from global variable
        // so it works for all modules.
        // `ignoreDuplicate` can work for the specified module
        if (!ignoreDuplicate && checkDuplicate) {
          throw Error('Already loaded patch: ' + name);
        }
      } else if (!global['__Zone_disable_' + name]) {
        const perfName = 'Zone:' + name;
        mark(perfName);
        patches[name] = fn(global, Zone, _api);
        performanceMeasure(perfName, perfName);
      }
    }
    get parent() {
      return this._parent;
    }
    get name() {
      return this._name;
    }
    get(key) {
      const zone = this.getZoneWith(key);
      if (zone) return zone._properties[key];
    }
    getZoneWith(key) {
      let current = this;
      while (current) {
        if (current._properties.hasOwnProperty(key)) {
          return current;
        }
        current = current._parent;
      }
      return null;
    }
    fork(zoneSpec) {
      if (!zoneSpec) throw new Error('ZoneSpec required!');
      return this._zoneDelegate.fork(this, zoneSpec);
    }
    wrap(callback, source) {
      if (typeof callback !== 'function') {
        throw new Error('Expecting function got: ' + callback);
      }
      const _callback = this._zoneDelegate.intercept(this, callback, source);
      const zone = this;
      return function () {
        return zone.runGuarded(_callback, this, arguments, source);
      };
    }
    run(callback, applyThis, applyArgs, source) {
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runGuarded(callback, applyThis = null, applyArgs, source) {
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runTask(task, applyThis, applyArgs) {
      if (task.zone != this) {
        throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
      }
      // https://github.com/angular/zone.js/issues/778, sometimes eventTask
      // will run in notScheduled(canceled) state, we should not try to
      // run such kind of task but just return
      if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
        return;
      }
      const reEntryGuard = task.state != running;
      reEntryGuard && task._transitionTo(running, scheduled);
      task.runCount++;
      const previousTask = _currentTask;
      _currentTask = task;
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        if (task.type == macroTask && task.data && !task.data.isPeriodic) {
          task.cancelFn = undefined;
        }
        try {
          return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        // if the task's state is notScheduled or unknown, then it has already been cancelled
        // we should not reset the state to scheduled
        if (task.state !== notScheduled && task.state !== unknown) {
          if (task.type == eventTask || task.data && task.data.isPeriodic) {
            reEntryGuard && task._transitionTo(scheduled, running);
          } else {
            task.runCount = 0;
            this._updateTaskCount(task, -1);
            reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
          }
        }
        _currentZoneFrame = _currentZoneFrame.parent;
        _currentTask = previousTask;
      }
    }
    scheduleTask(task) {
      if (task.zone && task.zone !== this) {
        // check if the task was rescheduled, the newZone
        // should not be the children of the original zone
        let newZone = this;
        while (newZone) {
          if (newZone === task.zone) {
            throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
          }
          newZone = newZone.parent;
        }
      }
      task._transitionTo(scheduling, notScheduled);
      const zoneDelegates = [];
      task._zoneDelegates = zoneDelegates;
      task._zone = this;
      try {
        task = this._zoneDelegate.scheduleTask(this, task);
      } catch (err) {
        // should set task's state to unknown when scheduleTask throw error
        // because the err may from reschedule, so the fromState maybe notScheduled
        task._transitionTo(unknown, scheduling, notScheduled);
        // TODO: @JiaLiPassion, should we check the result from handleError?
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      if (task._zoneDelegates === zoneDelegates) {
        // we have to check because internally the delegate can reschedule the task.
        this._updateTaskCount(task, 1);
      }
      if (task.state == scheduling) {
        task._transitionTo(scheduled, scheduling);
      }
      return task;
    }
    scheduleMicroTask(source, callback, data, customSchedule) {
      return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
    }
    scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
    }
    scheduleEventTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
    }
    cancelTask(task) {
      if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
      task._transitionTo(canceling, scheduled, running);
      try {
        this._zoneDelegate.cancelTask(this, task);
      } catch (err) {
        // if error occurs when cancelTask, transit the state to unknown
        task._transitionTo(unknown, canceling);
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      this._updateTaskCount(task, -1);
      task._transitionTo(notScheduled, canceling);
      task.runCount = 0;
      return task;
    }
    _updateTaskCount(task, count) {
      const zoneDelegates = task._zoneDelegates;
      if (count == -1) {
        task._zoneDelegates = null;
      }
      for (let i = 0; i < zoneDelegates.length; i++) {
        zoneDelegates[i]._updateTaskCount(task.type, count);
      }
    }
  }
  // tslint:disable-next-line:require-internal-with-underscore
  Zone.__symbol__ = __symbol__;
  const DELEGATE_ZS = {
    name: '',
    onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
    onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
    onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
    onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
  };
  class _ZoneDelegate {
    constructor(zone, parentDelegate, zoneSpec) {
      this._taskCounts = {
        'microTask': 0,
        'macroTask': 0,
        'eventTask': 0
      };
      this.zone = zone;
      this._parentDelegate = parentDelegate;
      this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
      this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
      this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
      this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
      this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
      this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
      this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
      this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
      this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
      this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
      this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
      this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
      this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
      this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
      this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
      this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
      this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
      this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
      this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
      this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
      this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
      this._hasTaskZS = null;
      this._hasTaskDlgt = null;
      this._hasTaskDlgtOwner = null;
      this._hasTaskCurrZone = null;
      const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
      const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
      if (zoneSpecHasTask || parentHasTask) {
        // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
        // a case all task related interceptors must go through this ZD. We can't short circuit it.
        this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
        this._hasTaskDlgt = parentDelegate;
        this._hasTaskDlgtOwner = this;
        this._hasTaskCurrZone = zone;
        if (!zoneSpec.onScheduleTask) {
          this._scheduleTaskZS = DELEGATE_ZS;
          this._scheduleTaskDlgt = parentDelegate;
          this._scheduleTaskCurrZone = this.zone;
        }
        if (!zoneSpec.onInvokeTask) {
          this._invokeTaskZS = DELEGATE_ZS;
          this._invokeTaskDlgt = parentDelegate;
          this._invokeTaskCurrZone = this.zone;
        }
        if (!zoneSpec.onCancelTask) {
          this._cancelTaskZS = DELEGATE_ZS;
          this._cancelTaskDlgt = parentDelegate;
          this._cancelTaskCurrZone = this.zone;
        }
      }
    }
    fork(targetZone, zoneSpec) {
      return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
    }
    intercept(targetZone, callback, source) {
      return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
    }
    invoke(targetZone, callback, applyThis, applyArgs, source) {
      return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
    }
    handleError(targetZone, error) {
      return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
    }
    scheduleTask(targetZone, task) {
      let returnTask = task;
      if (this._scheduleTaskZS) {
        if (this._hasTaskZS) {
          returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
        }
        // clang-format off
        returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
        // clang-format on
        if (!returnTask) returnTask = task;
      } else {
        if (task.scheduleFn) {
          task.scheduleFn(task);
        } else if (task.type == microTask) {
          scheduleMicroTask(task);
        } else {
          throw new Error('Task is missing scheduleFn.');
        }
      }
      return returnTask;
    }
    invokeTask(targetZone, task, applyThis, applyArgs) {
      return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
    }
    cancelTask(targetZone, task) {
      let value;
      if (this._cancelTaskZS) {
        value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
      } else {
        if (!task.cancelFn) {
          throw Error('Task is not cancelable');
        }
        value = task.cancelFn(task);
      }
      return value;
    }
    hasTask(targetZone, isEmpty) {
      // hasTask should not throw error so other ZoneDelegate
      // can still trigger hasTask callback
      try {
        this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
      } catch (err) {
        this.handleError(targetZone, err);
      }
    }
    // tslint:disable-next-line:require-internal-with-underscore
    _updateTaskCount(type, count) {
      const counts = this._taskCounts;
      const prev = counts[type];
      const next = counts[type] = prev + count;
      if (next < 0) {
        throw new Error('More tasks executed then were scheduled.');
      }
      if (prev == 0 || next == 0) {
        const isEmpty = {
          microTask: counts['microTask'] > 0,
          macroTask: counts['macroTask'] > 0,
          eventTask: counts['eventTask'] > 0,
          change: type
        };
        this.hasTask(this.zone, isEmpty);
      }
    }
  }
  class ZoneTask {
    constructor(type, source, callback, options, scheduleFn, cancelFn) {
      // tslint:disable-next-line:require-internal-with-underscore
      this._zone = null;
      this.runCount = 0;
      // tslint:disable-next-line:require-internal-with-underscore
      this._zoneDelegates = null;
      // tslint:disable-next-line:require-internal-with-underscore
      this._state = 'notScheduled';
      this.type = type;
      this.source = source;
      this.data = options;
      this.scheduleFn = scheduleFn;
      this.cancelFn = cancelFn;
      if (!callback) {
        throw new Error('callback is not defined');
      }
      this.callback = callback;
      const self = this;
      // TODO: @JiaLiPassion options should have interface
      if (type === eventTask && options && options.useG) {
        this.invoke = ZoneTask.invokeTask;
      } else {
        this.invoke = function () {
          return ZoneTask.invokeTask.call(global, self, this, arguments);
        };
      }
    }
    static invokeTask(task, target, args) {
      if (!task) {
        task = this;
      }
      _numberOfNestedTaskFrames++;
      try {
        task.runCount++;
        return task.zone.runTask(task, target, args);
      } finally {
        if (_numberOfNestedTaskFrames == 1) {
          drainMicroTaskQueue();
        }
        _numberOfNestedTaskFrames--;
      }
    }
    get zone() {
      return this._zone;
    }
    get state() {
      return this._state;
    }
    cancelScheduleRequest() {
      this._transitionTo(notScheduled, scheduling);
    }
    // tslint:disable-next-line:require-internal-with-underscore
    _transitionTo(toState, fromState1, fromState2) {
      if (this._state === fromState1 || this._state === fromState2) {
        this._state = toState;
        if (toState == notScheduled) {
          this._zoneDelegates = null;
        }
      } else {
        throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? ' or \'' + fromState2 + '\'' : ''}, was '${this._state}'.`);
      }
    }
    toString() {
      if (this.data && typeof this.data.handleId !== 'undefined') {
        return this.data.handleId.toString();
      } else {
        return Object.prototype.toString.call(this);
      }
    }
    // add toJSON method to prevent cyclic error when
    // call JSON.stringify(zoneTask)
    toJSON() {
      return {
        type: this.type,
        state: this.state,
        source: this.source,
        zone: this.zone.name,
        runCount: this.runCount
      };
    }
  }
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  ///  MICROTASK QUEUE
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  const symbolSetTimeout = __symbol__('setTimeout');
  const symbolPromise = __symbol__('Promise');
  const symbolThen = __symbol__('then');
  let _microTaskQueue = [];
  let _isDrainingMicrotaskQueue = false;
  let nativeMicroTaskQueuePromise;
  function nativeScheduleMicroTask(func) {
    if (!nativeMicroTaskQueuePromise) {
      if (global[symbolPromise]) {
        nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
      }
    }
    if (nativeMicroTaskQueuePromise) {
      let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
      if (!nativeThen) {
        // native Promise is not patchable, we need to use `then` directly
        // issue 1078
        nativeThen = nativeMicroTaskQueuePromise['then'];
      }
      nativeThen.call(nativeMicroTaskQueuePromise, func);
    } else {
      global[symbolSetTimeout](func, 0);
    }
  }
  function scheduleMicroTask(task) {
    // if we are not running in any task, and there has not been anything scheduled
    // we must bootstrap the initial task creation by manually scheduling the drain
    if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
      // We are not running in Task, so we need to kickstart the microtask queue.
      nativeScheduleMicroTask(drainMicroTaskQueue);
    }
    task && _microTaskQueue.push(task);
  }
  function drainMicroTaskQueue() {
    if (!_isDrainingMicrotaskQueue) {
      _isDrainingMicrotaskQueue = true;
      while (_microTaskQueue.length) {
        const queue = _microTaskQueue;
        _microTaskQueue = [];
        for (let i = 0; i < queue.length; i++) {
          const task = queue[i];
          try {
            task.zone.runTask(task, null, null);
          } catch (error) {
            _api.onUnhandledError(error);
          }
        }
      }
      _api.microtaskDrainDone();
      _isDrainingMicrotaskQueue = false;
    }
  }
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  ///  BOOTSTRAP
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  const NO_ZONE = {
    name: 'NO ZONE'
  };
  const notScheduled = 'notScheduled',
    scheduling = 'scheduling',
    scheduled = 'scheduled',
    running = 'running',
    canceling = 'canceling',
    unknown = 'unknown';
  const microTask = 'microTask',
    macroTask = 'macroTask',
    eventTask = 'eventTask';
  const patches = {};
  const _api = {
    symbol: __symbol__,
    currentZoneFrame: () => _currentZoneFrame,
    onUnhandledError: noop,
    microtaskDrainDone: noop,
    scheduleMicroTask: scheduleMicroTask,
    showUncaughtError: () => !Zone[__symbol__('ignoreConsoleErrorUncaughtError')],
    patchEventTarget: () => [],
    patchOnProperties: noop,
    patchMethod: () => noop,
    bindArguments: () => [],
    patchThen: () => noop,
    patchMacroTask: () => noop,
    patchEventPrototype: () => noop,
    isIEOrEdge: () => false,
    getGlobalObjects: () => undefined,
    ObjectDefineProperty: () => noop,
    ObjectGetOwnPropertyDescriptor: () => undefined,
    ObjectCreate: () => undefined,
    ArraySlice: () => [],
    patchClass: () => noop,
    wrapWithCurrentZone: () => noop,
    filterProperties: () => [],
    attachOriginToPatched: () => noop,
    _redefineProperty: () => noop,
    patchCallbacks: () => noop,
    nativeScheduleMicroTask: nativeScheduleMicroTask
  };
  let _currentZoneFrame = {
    parent: null,
    zone: new Zone(null, null)
  };
  let _currentTask = null;
  let _numberOfNestedTaskFrames = 0;
  function noop() {}
  performanceMeasure('Zone', 'Zone');
  return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
/// <reference types="node"/>
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
const ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
const ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
const ObjectCreate = Object.create;
/** Array.prototype.slice */
const ArraySlice = Array.prototype.slice;
/** addEventListener string const */
const ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
const REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
const ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
const ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
const TRUE_STR = 'true';
/** false string const */
const FALSE_STR = 'false';
/** Zone symbol prefix string const. */
const ZONE_SYMBOL_PREFIX = Zone.__symbol__('');
function wrapWithCurrentZone(callback, source) {
  return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
  return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
const zoneSymbol = Zone.__symbol__;
const isWindowExists = typeof window !== 'undefined';
const internalWindow = isWindowExists ? window : undefined;
const _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
const REMOVE_ATTRIBUTE = 'removeAttribute';
function bindArguments(args, source) {
  for (let i = args.length - 1; i >= 0; i--) {
    if (typeof args[i] === 'function') {
      args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
    }
  }
  return args;
}
function patchPrototype(prototype, fnNames) {
  const source = prototype.constructor['name'];
  for (let i = 0; i < fnNames.length; i++) {
    const name = fnNames[i];
    const delegate = prototype[name];
    if (delegate) {
      const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
      if (!isPropertyWritable(prototypeDesc)) {
        continue;
      }
      prototype[name] = (delegate => {
        const patched = function () {
          return delegate.apply(this, bindArguments(arguments, source + '.' + name));
        };
        attachOriginToPatched(patched, delegate);
        return patched;
      })(delegate);
    }
  }
}
function isPropertyWritable(propertyDesc) {
  if (!propertyDesc) {
    return true;
  }
  if (propertyDesc.writable === false) {
    return false;
  }
  return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
const isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
const isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
const zoneSymbolEventNames$1 = {};
const wrapFn = function (event) {
  // https://github.com/angular/zone.js/issues/911, in IE, sometimes
  // event will be undefined, so we need to use window.event
  event = event || _global.event;
  if (!event) {
    return;
  }
  let eventNameSymbol = zoneSymbolEventNames$1[event.type];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
  }
  const target = this || event.target || _global;
  const listener = target[eventNameSymbol];
  let result;
  if (isBrowser && target === internalWindow && event.type === 'error') {
    // window.onerror have different signature
    // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
    // and onerror callback will prevent default when callback return true
    const errorEvent = event;
    result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
    if (result === true) {
      event.preventDefault();
    }
  } else {
    result = listener && listener.apply(this, arguments);
    if (result != undefined && !result) {
      event.preventDefault();
    }
  }
  return result;
};
function patchProperty(obj, prop, prototype) {
  let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
  if (!desc && prototype) {
    // when patch window object, use prototype to check prop exist or not
    const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
    if (prototypeDesc) {
      desc = {
        enumerable: true,
        configurable: true
      };
    }
  }
  // if the descriptor not exists or is not configurable
  // just return
  if (!desc || !desc.configurable) {
    return;
  }
  const onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
  if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
    return;
  }
  // A property descriptor cannot have getter/setter and be writable
  // deleting the writable and value properties avoids this error:
  //
  // TypeError: property descriptors must not specify a value or be writable when a
  // getter or setter has been specified
  delete desc.writable;
  delete desc.value;
  const originalDescGet = desc.get;
  const originalDescSet = desc.set;
  // slice(2) cuz 'onclick' -> 'click', etc
  const eventName = prop.slice(2);
  let eventNameSymbol = zoneSymbolEventNames$1[eventName];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
  }
  desc.set = function (newValue) {
    // in some of windows's onproperty callback, this is undefined
    // so we need to check it
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return;
    }
    const previousValue = target[eventNameSymbol];
    if (typeof previousValue === 'function') {
      target.removeEventListener(eventName, wrapFn);
    }
    // issue #978, when onload handler was added before loading zone.js
    // we should remove it with originalDescSet
    originalDescSet && originalDescSet.call(target, null);
    target[eventNameSymbol] = newValue;
    if (typeof newValue === 'function') {
      target.addEventListener(eventName, wrapFn, false);
    }
  };
  // The getter would return undefined for unassigned properties but the default value of an
  // unassigned property is null
  desc.get = function () {
    // in some of windows's onproperty callback, this is undefined
    // so we need to check it
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return null;
    }
    const listener = target[eventNameSymbol];
    if (listener) {
      return listener;
    } else if (originalDescGet) {
      // result will be null when use inline event attribute,
      // such as <button onclick="func();">OK</button>
      // because the onclick function is internal raw uncompiled handler
      // the onclick will be evaluated when first time event was triggered or
      // the property is accessed, https://github.com/angular/zone.js/issues/525
      // so we should use original native get to retrieve the handler
      let value = originalDescGet.call(this);
      if (value) {
        desc.set.call(this, value);
        if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
          target.removeAttribute(prop);
        }
        return value;
      }
    }
    return null;
  };
  ObjectDefineProperty(obj, prop, desc);
  obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
  if (properties) {
    for (let i = 0; i < properties.length; i++) {
      patchProperty(obj, 'on' + properties[i], prototype);
    }
  } else {
    const onProperties = [];
    for (const prop in obj) {
      if (prop.slice(0, 2) == 'on') {
        onProperties.push(prop);
      }
    }
    for (let j = 0; j < onProperties.length; j++) {
      patchProperty(obj, onProperties[j], prototype);
    }
  }
}
const originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
  const OriginalClass = _global[className];
  if (!OriginalClass) return;
  // keep original class in global
  _global[zoneSymbol(className)] = OriginalClass;
  _global[className] = function () {
    const a = bindArguments(arguments, className);
    switch (a.length) {
      case 0:
        this[originalInstanceKey] = new OriginalClass();
        break;
      case 1:
        this[originalInstanceKey] = new OriginalClass(a[0]);
        break;
      case 2:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
        break;
      case 3:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
        break;
      case 4:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
        break;
      default:
        throw new Error('Arg list too long.');
    }
  };
  // attach original delegate to patched function
  attachOriginToPatched(_global[className], OriginalClass);
  const instance = new OriginalClass(function () {});
  let prop;
  for (prop in instance) {
    // https://bugs.webkit.org/show_bug.cgi?id=44721
    if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;
    (function (prop) {
      if (typeof instance[prop] === 'function') {
        _global[className].prototype[prop] = function () {
          return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
        };
      } else {
        ObjectDefineProperty(_global[className].prototype, prop, {
          set: function (fn) {
            if (typeof fn === 'function') {
              this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
              // keep callback in wrapped function so we can
              // use it in Function.prototype.toString to return
              // the native one.
              attachOriginToPatched(this[originalInstanceKey][prop], fn);
            } else {
              this[originalInstanceKey][prop] = fn;
            }
          },
          get: function () {
            return this[originalInstanceKey][prop];
          }
        });
      }
    })(prop);
  }
  for (prop in OriginalClass) {
    if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
      _global[className][prop] = OriginalClass[prop];
    }
  }
}
function patchMethod(target, name, patchFn) {
  let proto = target;
  while (proto && !proto.hasOwnProperty(name)) {
    proto = ObjectGetPrototypeOf(proto);
  }
  if (!proto && target[name]) {
    // somehow we did not find it, but we can see it. This happens on IE for Window properties.
    proto = target;
  }
  const delegateName = zoneSymbol(name);
  let delegate = null;
  if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
    delegate = proto[delegateName] = proto[name];
    // check whether proto[name] is writable
    // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
    const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
    if (isPropertyWritable(desc)) {
      const patchDelegate = patchFn(delegate, delegateName, name);
      proto[name] = function () {
        return patchDelegate(this, arguments);
      };
      attachOriginToPatched(proto[name], delegate);
    }
  }
  return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
  let setNative = null;
  function scheduleTask(task) {
    const data = task.data;
    data.args[data.cbIdx] = function () {
      task.invoke.apply(this, arguments);
    };
    setNative.apply(data.target, data.args);
    return task;
  }
  setNative = patchMethod(obj, funcName, delegate => function (self, args) {
    const meta = metaCreator(self, args);
    if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
      return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
    } else {
      // cause an error by calling it directly.
      return delegate.apply(self, args);
    }
  });
}
function attachOriginToPatched(patched, original) {
  patched[zoneSymbol('OriginalDelegate')] = original;
}
let isDetectedIEOrEdge = false;
let ieOrEdge = false;
function isIE() {
  try {
    const ua = internalWindow.navigator.userAgent;
    if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
      return true;
    }
  } catch (error) {}
  return false;
}
function isIEOrEdge() {
  if (isDetectedIEOrEdge) {
    return ieOrEdge;
  }
  isDetectedIEOrEdge = true;
  try {
    const ua = internalWindow.navigator.userAgent;
    if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
      ieOrEdge = true;
    }
  } catch (error) {}
  return ieOrEdge;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('ZoneAwarePromise', (global, Zone, api) => {
  const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  const ObjectDefineProperty = Object.defineProperty;
  function readableObjectToString(obj) {
    if (obj && obj.toString === Object.prototype.toString) {
      const className = obj.constructor && obj.constructor.name;
      return (className ? className : '') + ': ' + JSON.stringify(obj);
    }
    return obj ? obj.toString() : Object.prototype.toString.call(obj);
  }
  const __symbol__ = api.symbol;
  const _uncaughtPromiseErrors = [];
  const isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;
  const symbolPromise = __symbol__('Promise');
  const symbolThen = __symbol__('then');
  const creationTrace = '__creationTrace__';
  api.onUnhandledError = e => {
    if (api.showUncaughtError()) {
      const rejection = e && e.rejection;
      if (rejection) {
        console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
      } else {
        console.error(e);
      }
    }
  };
  api.microtaskDrainDone = () => {
    while (_uncaughtPromiseErrors.length) {
      const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
      try {
        uncaughtPromiseError.zone.runGuarded(() => {
          if (uncaughtPromiseError.throwOriginal) {
            throw uncaughtPromiseError.rejection;
          }
          throw uncaughtPromiseError;
        });
      } catch (error) {
        handleUnhandledRejection(error);
      }
    }
  };
  const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
  function handleUnhandledRejection(e) {
    api.onUnhandledError(e);
    try {
      const handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
      if (typeof handler === 'function') {
        handler.call(this, e);
      }
    } catch (err) {}
  }
  function isThenable(value) {
    return value && value.then;
  }
  function forwardResolution(value) {
    return value;
  }
  function forwardRejection(rejection) {
    return ZoneAwarePromise.reject(rejection);
  }
  const symbolState = __symbol__('state');
  const symbolValue = __symbol__('value');
  const symbolFinally = __symbol__('finally');
  const symbolParentPromiseValue = __symbol__('parentPromiseValue');
  const symbolParentPromiseState = __symbol__('parentPromiseState');
  const source = 'Promise.then';
  const UNRESOLVED = null;
  const RESOLVED = true;
  const REJECTED = false;
  const REJECTED_NO_CATCH = 0;
  function makeResolver(promise, state) {
    return v => {
      try {
        resolvePromise(promise, state, v);
      } catch (err) {
        resolvePromise(promise, false, err);
      }
      // Do not return value or you will break the Promise spec.
    };
  }

  const once = function () {
    let wasCalled = false;
    return function wrapper(wrappedFunction) {
      return function () {
        if (wasCalled) {
          return;
        }
        wasCalled = true;
        wrappedFunction.apply(null, arguments);
      };
    };
  };
  const TYPE_ERROR = 'Promise resolved with itself';
  const CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
  // Promise Resolution
  function resolvePromise(promise, state, value) {
    const onceWrapper = once();
    if (promise === value) {
      throw new TypeError(TYPE_ERROR);
    }
    if (promise[symbolState] === UNRESOLVED) {
      // should only get value.then once based on promise spec.
      let then = null;
      try {
        if (typeof value === 'object' || typeof value === 'function') {
          then = value && value.then;
        }
      } catch (err) {
        onceWrapper(() => {
          resolvePromise(promise, false, err);
        })();
        return promise;
      }
      // if (value instanceof ZoneAwarePromise) {
      if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
        clearRejectedNoCatch(value);
        resolvePromise(promise, value[symbolState], value[symbolValue]);
      } else if (state !== REJECTED && typeof then === 'function') {
        try {
          then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
        } catch (err) {
          onceWrapper(() => {
            resolvePromise(promise, false, err);
          })();
        }
      } else {
        promise[symbolState] = state;
        const queue = promise[symbolValue];
        promise[symbolValue] = value;
        if (promise[symbolFinally] === symbolFinally) {
          // the promise is generated by Promise.prototype.finally
          if (state === RESOLVED) {
            // the state is resolved, should ignore the value
            // and use parent promise value
            promise[symbolState] = promise[symbolParentPromiseState];
            promise[symbolValue] = promise[symbolParentPromiseValue];
          }
        }
        // record task information in value when error occurs, so we can
        // do some additional work such as render longStackTrace
        if (state === REJECTED && value instanceof Error) {
          // check if longStackTraceZone is here
          const trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];
          if (trace) {
            // only keep the long stack trace into error when in longStackTraceZone
            ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
              configurable: true,
              enumerable: false,
              writable: true,
              value: trace
            });
          }
        }
        for (let i = 0; i < queue.length;) {
          scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
        }
        if (queue.length == 0 && state == REJECTED) {
          promise[symbolState] = REJECTED_NO_CATCH;
          let uncaughtPromiseError = value;
          try {
            // Here we throws a new Error to print more readable error log
            // and if the value is not an error, zone.js builds an `Error`
            // Object here to attach the stack information.
            throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
          } catch (err) {
            uncaughtPromiseError = err;
          }
          if (isDisableWrappingUncaughtPromiseRejection) {
            // If disable wrapping uncaught promise reject
            // use the value instead of wrapping it.
            uncaughtPromiseError.throwOriginal = true;
          }
          uncaughtPromiseError.rejection = value;
          uncaughtPromiseError.promise = promise;
          uncaughtPromiseError.zone = Zone.current;
          uncaughtPromiseError.task = Zone.currentTask;
          _uncaughtPromiseErrors.push(uncaughtPromiseError);
          api.scheduleMicroTask(); // to make sure that it is running
        }
      }
    }
    // Resolving an already resolved promise is a noop.
    return promise;
  }
  const REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
  function clearRejectedNoCatch(promise) {
    if (promise[symbolState] === REJECTED_NO_CATCH) {
      // if the promise is rejected no catch status
      // and queue.length > 0, means there is a error handler
      // here to handle the rejected promise, we should trigger
      // windows.rejectionhandled eventHandler or nodejs rejectionHandled
      // eventHandler
      try {
        const handler = Zone[REJECTION_HANDLED_HANDLER];
        if (handler && typeof handler === 'function') {
          handler.call(this, {
            rejection: promise[symbolValue],
            promise: promise
          });
        }
      } catch (err) {}
      promise[symbolState] = REJECTED;
      for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
        if (promise === _uncaughtPromiseErrors[i].promise) {
          _uncaughtPromiseErrors.splice(i, 1);
        }
      }
    }
  }
  function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
    clearRejectedNoCatch(promise);
    const promiseState = promise[symbolState];
    const delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
    zone.scheduleMicroTask(source, () => {
      try {
        const parentPromiseValue = promise[symbolValue];
        const isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
        if (isFinallyPromise) {
          // if the promise is generated from finally call, keep parent promise's state and value
          chainPromise[symbolParentPromiseValue] = parentPromiseValue;
          chainPromise[symbolParentPromiseState] = promiseState;
        }
        // should not pass value to finally callback
        const value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
        resolvePromise(chainPromise, true, value);
      } catch (error) {
        // if error occurs, should always return this error
        resolvePromise(chainPromise, false, error);
      }
    }, chainPromise);
  }
  const ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
  const noop = function () {};
  const AggregateError = global.AggregateError;
  class ZoneAwarePromise {
    static toString() {
      return ZONE_AWARE_PROMISE_TO_STRING;
    }
    static resolve(value) {
      return resolvePromise(new this(null), RESOLVED, value);
    }
    static reject(error) {
      return resolvePromise(new this(null), REJECTED, error);
    }
    static any(values) {
      if (!values || typeof values[Symbol.iterator] !== 'function') {
        return Promise.reject(new AggregateError([], 'All promises were rejected'));
      }
      const promises = [];
      let count = 0;
      try {
        for (let v of values) {
          count++;
          promises.push(ZoneAwarePromise.resolve(v));
        }
      } catch (err) {
        return Promise.reject(new AggregateError([], 'All promises were rejected'));
      }
      if (count === 0) {
        return Promise.reject(new AggregateError([], 'All promises were rejected'));
      }
      let finished = false;
      const errors = [];
      return new ZoneAwarePromise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
          promises[i].then(v => {
            if (finished) {
              return;
            }
            finished = true;
            resolve(v);
          }, err => {
            errors.push(err);
            count--;
            if (count === 0) {
              finished = true;
              reject(new AggregateError(errors, 'All promises were rejected'));
            }
          });
        }
      });
    }
    static race(values) {
      let resolve;
      let reject;
      let promise = new this((res, rej) => {
        resolve = res;
        reject = rej;
      });
      function onResolve(value) {
        resolve(value);
      }
      function onReject(error) {
        reject(error);
      }
      for (let value of values) {
        if (!isThenable(value)) {
          value = this.resolve(value);
        }
        value.then(onResolve, onReject);
      }
      return promise;
    }
    static all(values) {
      return ZoneAwarePromise.allWithCallback(values);
    }
    static allSettled(values) {
      const P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
      return P.allWithCallback(values, {
        thenCallback: value => ({
          status: 'fulfilled',
          value
        }),
        errorCallback: err => ({
          status: 'rejected',
          reason: err
        })
      });
    }
    static allWithCallback(values, callback) {
      let resolve;
      let reject;
      let promise = new this((res, rej) => {
        resolve = res;
        reject = rej;
      });
      // Start at 2 to prevent prematurely resolving if .then is called immediately.
      let unresolvedCount = 2;
      let valueIndex = 0;
      const resolvedValues = [];
      for (let value of values) {
        if (!isThenable(value)) {
          value = this.resolve(value);
        }
        const curValueIndex = valueIndex;
        try {
          value.then(value => {
            resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
            unresolvedCount--;
            if (unresolvedCount === 0) {
              resolve(resolvedValues);
            }
          }, err => {
            if (!callback) {
              reject(err);
            } else {
              resolvedValues[curValueIndex] = callback.errorCallback(err);
              unresolvedCount--;
              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }
            }
          });
        } catch (thenErr) {
          reject(thenErr);
        }
        unresolvedCount++;
        valueIndex++;
      }
      // Make the unresolvedCount zero-based again.
      unresolvedCount -= 2;
      if (unresolvedCount === 0) {
        resolve(resolvedValues);
      }
      return promise;
    }
    constructor(executor) {
      const promise = this;
      if (!(promise instanceof ZoneAwarePromise)) {
        throw new Error('Must be an instanceof Promise.');
      }
      promise[symbolState] = UNRESOLVED;
      promise[symbolValue] = []; // queue;
      try {
        const onceWrapper = once();
        executor && executor(onceWrapper(makeResolver(promise, RESOLVED)), onceWrapper(makeResolver(promise, REJECTED)));
      } catch (error) {
        resolvePromise(promise, false, error);
      }
    }
    get [Symbol.toStringTag]() {
      return 'Promise';
    }
    get [Symbol.species]() {
      return ZoneAwarePromise;
    }
    then(onFulfilled, onRejected) {
      var _a;
      // We must read `Symbol.species` safely because `this` may be anything. For instance, `this`
      // may be an object without a prototype (created through `Object.create(null)`); thus
      // `this.constructor` will be undefined. One of the use cases is SystemJS creating
      // prototype-less objects (modules) via `Object.create(null)`. The SystemJS creates an empty
      // object and copies promise properties into that object (within the `getOrCreateLoad`
      // function). The zone.js then checks if the resolved value has the `then` method and invokes
      // it with the `value` context. Otherwise, this will throw an error: `TypeError: Cannot read
      // properties of undefined (reading 'Symbol(Symbol.species)')`.
      let C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];
      if (!C || typeof C !== 'function') {
        C = this.constructor || ZoneAwarePromise;
      }
      const chainPromise = new C(noop);
      const zone = Zone.current;
      if (this[symbolState] == UNRESOLVED) {
        this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
      } else {
        scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
      }
      return chainPromise;
    }
    catch(onRejected) {
      return this.then(null, onRejected);
    }
    finally(onFinally) {
      var _a;
      // See comment on the call to `then` about why thee `Symbol.species` is safely accessed.
      let C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];
      if (!C || typeof C !== 'function') {
        C = ZoneAwarePromise;
      }
      const chainPromise = new C(noop);
      chainPromise[symbolFinally] = symbolFinally;
      const zone = Zone.current;
      if (this[symbolState] == UNRESOLVED) {
        this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
      } else {
        scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
      }
      return chainPromise;
    }
  }
  // Protect against aggressive optimizers dropping seemingly unused properties.
  // E.g. Closure Compiler in advanced mode.
  ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
  ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
  ZoneAwarePromise['race'] = ZoneAwarePromise.race;
  ZoneAwarePromise['all'] = ZoneAwarePromise.all;
  const NativePromise = global[symbolPromise] = global['Promise'];
  global['Promise'] = ZoneAwarePromise;
  const symbolThenPatched = __symbol__('thenPatched');
  function patchThen(Ctor) {
    const proto = Ctor.prototype;
    const prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
    if (prop && (prop.writable === false || !prop.configurable)) {
      // check Ctor.prototype.then propertyDescriptor is writable or not
      // in meteor env, writable is false, we should ignore such case
      return;
    }
    const originalThen = proto.then;
    // Keep a reference to the original method.
    proto[symbolThen] = originalThen;
    Ctor.prototype.then = function (onResolve, onReject) {
      const wrapped = new ZoneAwarePromise((resolve, reject) => {
        originalThen.call(this, resolve, reject);
      });
      return wrapped.then(onResolve, onReject);
    };
    Ctor[symbolThenPatched] = true;
  }
  api.patchThen = patchThen;
  function zoneify(fn) {
    return function (self, args) {
      let resultPromise = fn.apply(self, args);
      if (resultPromise instanceof ZoneAwarePromise) {
        return resultPromise;
      }
      let ctor = resultPromise.constructor;
      if (!ctor[symbolThenPatched]) {
        patchThen(ctor);
      }
      return resultPromise;
    };
  }
  if (NativePromise) {
    patchThen(NativePromise);
    patchMethod(global, 'fetch', delegate => zoneify(delegate));
  }
  // This is not part of public API, but it is useful for tests, so we expose it.
  Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
  return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', global => {
  // patch Func.prototype.toString to let them look like native
  const originalFunctionToString = Function.prototype.toString;
  const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
  const PROMISE_SYMBOL = zoneSymbol('Promise');
  const ERROR_SYMBOL = zoneSymbol('Error');
  const newFunctionToString = function toString() {
    if (typeof this === 'function') {
      const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
      if (originalDelegate) {
        if (typeof originalDelegate === 'function') {
          return originalFunctionToString.call(originalDelegate);
        } else {
          return Object.prototype.toString.call(originalDelegate);
        }
      }
      if (this === Promise) {
        const nativePromise = global[PROMISE_SYMBOL];
        if (nativePromise) {
          return originalFunctionToString.call(nativePromise);
        }
      }
      if (this === Error) {
        const nativeError = global[ERROR_SYMBOL];
        if (nativeError) {
          return originalFunctionToString.call(nativeError);
        }
      }
    }
    return originalFunctionToString.call(this);
  };
  newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
  Function.prototype.toString = newFunctionToString;
  // patch Object.prototype.toString to let them look like native
  const originalObjectToString = Object.prototype.toString;
  const PROMISE_OBJECT_TO_STRING = '[object Promise]';
  Object.prototype.toString = function () {
    if (typeof Promise === 'function' && this instanceof Promise) {
      return PROMISE_OBJECT_TO_STRING;
    }
    return originalObjectToString.call(this);
  };
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let passiveSupported = false;
if (typeof window !== 'undefined') {
  try {
    const options = Object.defineProperty({}, 'passive', {
      get: function () {
        passiveSupported = true;
      }
    });
    // Note: We pass the `options` object as the event handler too. This is not compatible with the
    // signature of `addEventListener` or `removeEventListener` but enables us to remove the handler
    // without an actual handler.
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
// an identifier to tell ZoneTask do not create a new invoke closure
const OPTIMIZED_ZONE_EVENT_TASK_DATA = {
  useG: true
};
const zoneSymbolEventNames = {};
const globalSources = {};
const EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
const IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');
function prepareEventNames(eventName, eventNameToString) {
  const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
  const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
  const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
  const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
  zoneSymbolEventNames[eventName] = {};
  zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
  zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
}
function patchEventTarget(_global, api, apis, patchOptions) {
  const ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
  const REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
  const LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
  const REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
  const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
  const ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
  const PREPEND_EVENT_LISTENER = 'prependListener';
  const PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
  const invokeTask = function (task, target, event) {
    // for better performance, check isRemoved which is set
    // by removeEventListener
    if (task.isRemoved) {
      return;
    }
    const delegate = task.callback;
    if (typeof delegate === 'object' && delegate.handleEvent) {
      // create the bind version of handleEvent when invoke
      task.callback = event => delegate.handleEvent(event);
      task.originalDelegate = delegate;
    }
    // invoke static task.invoke
    // need to try/catch error here, otherwise, the error in one event listener
    // will break the executions of the other event listeners. Also error will
    // not remove the event listener when `once` options is true.
    let error;
    try {
      task.invoke(task, target, [event]);
    } catch (err) {
      error = err;
    }
    const options = task.options;
    if (options && typeof options === 'object' && options.once) {
      // if options.once is true, after invoke once remove listener here
      // only browser need to do this, nodejs eventEmitter will cal removeListener
      // inside EventEmitter.once
      const delegate = task.originalDelegate ? task.originalDelegate : task.callback;
      target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate, options);
    }
    return error;
  };
  function globalCallback(context, event, isCapture) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
      return;
    }
    // event.target is needed for Samsung TV and SourceBuffer
    // || global is needed https://github.com/angular/zone.js/issues/190
    const target = context || event.target || _global;
    const tasks = target[zoneSymbolEventNames[event.type][isCapture ? TRUE_STR : FALSE_STR]];
    if (tasks) {
      const errors = [];
      // invoke all tasks which attached to current target with given event.type and capture = false
      // for performance concern, if task.length === 1, just invoke
      if (tasks.length === 1) {
        const err = invokeTask(tasks[0], target, event);
        err && errors.push(err);
      } else {
        // https://github.com/angular/zone.js/issues/836
        // copy the tasks array before invoke, to avoid
        // the callback will remove itself or other listener
        const copyTasks = tasks.slice();
        for (let i = 0; i < copyTasks.length; i++) {
          if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
            break;
          }
          const err = invokeTask(copyTasks[i], target, event);
          err && errors.push(err);
        }
      }
      // Since there is only one error, we don't need to schedule microTask
      // to throw the error.
      if (errors.length === 1) {
        throw errors[0];
      } else {
        for (let i = 0; i < errors.length; i++) {
          const err = errors[i];
          api.nativeScheduleMicroTask(() => {
            throw err;
          });
        }
      }
    }
  }
  // global shared zoneAwareCallback to handle all event callback with capture = false
  const globalZoneAwareCallback = function (event) {
    return globalCallback(this, event, false);
  };
  // global shared zoneAwareCallback to handle all event callback with capture = true
  const globalZoneAwareCaptureCallback = function (event) {
    return globalCallback(this, event, true);
  };
  function patchEventTargetMethods(obj, patchOptions) {
    if (!obj) {
      return false;
    }
    let useGlobalCallback = true;
    if (patchOptions && patchOptions.useG !== undefined) {
      useGlobalCallback = patchOptions.useG;
    }
    const validateHandler = patchOptions && patchOptions.vh;
    let checkDuplicate = true;
    if (patchOptions && patchOptions.chkDup !== undefined) {
      checkDuplicate = patchOptions.chkDup;
    }
    let returnTarget = false;
    if (patchOptions && patchOptions.rt !== undefined) {
      returnTarget = patchOptions.rt;
    }
    let proto = obj;
    while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
      proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && obj[ADD_EVENT_LISTENER]) {
      // somehow we did not find it, but we can see it. This happens on IE for Window properties.
      proto = obj;
    }
    if (!proto) {
      return false;
    }
    if (proto[zoneSymbolAddEventListener]) {
      return false;
    }
    const eventNameToString = patchOptions && patchOptions.eventNameToString;
    // a shared global taskData to pass data for scheduleEventTask
    // so we do not need to create a new object just for pass some data
    const taskData = {};
    const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
    const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
    const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
    const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
    let nativePrependEventListener;
    if (patchOptions && patchOptions.prepend) {
      nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
    }
    /**
     * This util function will build an option object with passive option
     * to handle all possible input from the user.
     */
    function buildEventListenerOptions(options, passive) {
      if (!passiveSupported && typeof options === 'object' && options) {
        // doesn't support passive but user want to pass an object as options.
        // this will not work on some old browser, so we just pass a boolean
        // as useCapture parameter
        return !!options.capture;
      }
      if (!passiveSupported || !passive) {
        return options;
      }
      if (typeof options === 'boolean') {
        return {
          capture: options,
          passive: true
        };
      }
      if (!options) {
        return {
          passive: true
        };
      }
      if (typeof options === 'object' && options.passive !== false) {
        return Object.assign(Object.assign({}, options), {
          passive: true
        });
      }
      return options;
    }
    const customScheduleGlobal = function (task) {
      // if there is already a task for the eventName + capture,
      // just return, because we use the shared globalZoneAwareCallback here.
      if (taskData.isExisting) {
        return;
      }
      return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
    };
    const customCancelGlobal = function (task) {
      // if task is not marked as isRemoved, this call is directly
      // from Zone.prototype.cancelTask, we should remove the task
      // from tasksList of target first
      if (!task.isRemoved) {
        const symbolEventNames = zoneSymbolEventNames[task.eventName];
        let symbolEventName;
        if (symbolEventNames) {
          symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
        }
        const existingTasks = symbolEventName && task.target[symbolEventName];
        if (existingTasks) {
          for (let i = 0; i < existingTasks.length; i++) {
            const existingTask = existingTasks[i];
            if (existingTask === task) {
              existingTasks.splice(i, 1);
              // set isRemoved to data for faster invokeTask check
              task.isRemoved = true;
              if (existingTasks.length === 0) {
                // all tasks for the eventName + capture have gone,
                // remove globalZoneAwareCallback and remove the task cache from target
                task.allRemoved = true;
                task.target[symbolEventName] = null;
              }
              break;
            }
          }
        }
      }
      // if all tasks for the eventName + capture have gone,
      // we will really remove the global event callback,
      // if not, return
      if (!task.allRemoved) {
        return;
      }
      return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
    };
    const customScheduleNonGlobal = function (task) {
      return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customSchedulePrepend = function (task) {
      return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customCancelNonGlobal = function (task) {
      return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
    };
    const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
    const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
    const compareTaskCallbackVsDelegate = function (task, delegate) {
      const typeOfDelegate = typeof delegate;
      return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
    };
    const compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
    const unpatchedEvents = Zone[zoneSymbol('UNPATCHED_EVENTS')];
    const passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];
    const makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget = false, prepend = false) {
      return function () {
        const target = this || _global;
        let eventName = arguments[0];
        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }
        let delegate = arguments[1];
        if (!delegate) {
          return nativeListener.apply(this, arguments);
        }
        if (isNode && eventName === 'uncaughtException') {
          // don't patch uncaughtException of nodejs to prevent endless loop
          return nativeListener.apply(this, arguments);
        }
        // don't create the bind delegate function for handleEvent
        // case here to improve addEventListener performance
        // we will create the bind delegate when invoke
        let isHandleEvent = false;
        if (typeof delegate !== 'function') {
          if (!delegate.handleEvent) {
            return nativeListener.apply(this, arguments);
          }
          isHandleEvent = true;
        }
        if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
          return;
        }
        const passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
        const options = buildEventListenerOptions(arguments[2], passive);
        if (unpatchedEvents) {
          // check unpatched list
          for (let i = 0; i < unpatchedEvents.length; i++) {
            if (eventName === unpatchedEvents[i]) {
              if (passive) {
                return nativeListener.call(target, eventName, delegate, options);
              } else {
                return nativeListener.apply(this, arguments);
              }
            }
          }
        }
        const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
        const once = options && typeof options === 'object' ? options.once : false;
        const zone = Zone.current;
        let symbolEventNames = zoneSymbolEventNames[eventName];
        if (!symbolEventNames) {
          prepareEventNames(eventName, eventNameToString);
          symbolEventNames = zoneSymbolEventNames[eventName];
        }
        const symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        let existingTasks = target[symbolEventName];
        let isExisting = false;
        if (existingTasks) {
          // already have task registered
          isExisting = true;
          if (checkDuplicate) {
            for (let i = 0; i < existingTasks.length; i++) {
              if (compare(existingTasks[i], delegate)) {
                // same callback, same capture, same event name, just return
                return;
              }
            }
          }
        } else {
          existingTasks = target[symbolEventName] = [];
        }
        let source;
        const constructorName = target.constructor['name'];
        const targetSource = globalSources[constructorName];
        if (targetSource) {
          source = targetSource[eventName];
        }
        if (!source) {
          source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
        }
        // do not create a new object as task.data to pass those things
        // just use the global shared one
        taskData.options = options;
        if (once) {
          // if addEventListener with once options, we don't pass it to
          // native addEventListener, instead we keep the once setting
          // and handle ourselves.
          taskData.options.once = false;
        }
        taskData.target = target;
        taskData.capture = capture;
        taskData.eventName = eventName;
        taskData.isExisting = isExisting;
        const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
        // keep taskData into data to allow onScheduleEventTask to access the task information
        if (data) {
          data.taskData = taskData;
        }
        const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
        // should clear taskData.target to avoid memory leak
        // issue, https://github.com/angular/angular/issues/20442
        taskData.target = null;
        // need to clear up taskData because it is a global object
        if (data) {
          data.taskData = null;
        }
        // have to save those information to task in case
        // application may call task.zone.cancelTask() directly
        if (once) {
          options.once = true;
        }
        if (!(!passiveSupported && typeof task.options === 'boolean')) {
          // if not support passive, and we pass an option object
          // to addEventListener, we should save the options to task
          task.options = options;
        }
        task.target = target;
        task.capture = capture;
        task.eventName = eventName;
        if (isHandleEvent) {
          // save original delegate for compare to check duplicate
          task.originalDelegate = delegate;
        }
        if (!prepend) {
          existingTasks.push(task);
        } else {
          existingTasks.unshift(task);
        }
        if (returnTarget) {
          return target;
        }
      };
    };
    proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
    if (nativePrependEventListener) {
      proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
    }
    proto[REMOVE_EVENT_LISTENER] = function () {
      const target = this || _global;
      let eventName = arguments[0];
      if (patchOptions && patchOptions.transferEventName) {
        eventName = patchOptions.transferEventName(eventName);
      }
      const options = arguments[2];
      const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
      const delegate = arguments[1];
      if (!delegate) {
        return nativeRemoveEventListener.apply(this, arguments);
      }
      if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
        return;
      }
      const symbolEventNames = zoneSymbolEventNames[eventName];
      let symbolEventName;
      if (symbolEventNames) {
        symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
      }
      const existingTasks = symbolEventName && target[symbolEventName];
      if (existingTasks) {
        for (let i = 0; i < existingTasks.length; i++) {
          const existingTask = existingTasks[i];
          if (compare(existingTask, delegate)) {
            existingTasks.splice(i, 1);
            // set isRemoved to data for faster invokeTask check
            existingTask.isRemoved = true;
            if (existingTasks.length === 0) {
              // all tasks for the eventName + capture have gone,
              // remove globalZoneAwareCallback and remove the task cache from target
              existingTask.allRemoved = true;
              target[symbolEventName] = null;
              // in the target, we have an event listener which is added by on_property
              // such as target.onclick = function() {}, so we need to clear this internal
              // property too if all delegates all removed
              if (typeof eventName === 'string') {
                const onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                target[onPropertySymbol] = null;
              }
            }
            existingTask.zone.cancelTask(existingTask);
            if (returnTarget) {
              return target;
            }
            return;
          }
        }
      }
      // issue 930, didn't find the event name or callback
      // from zone kept existingTasks, the callback maybe
      // added outside of zone, we need to call native removeEventListener
      // to try to remove it.
      return nativeRemoveEventListener.apply(this, arguments);
    };
    proto[LISTENERS_EVENT_LISTENER] = function () {
      const target = this || _global;
      let eventName = arguments[0];
      if (patchOptions && patchOptions.transferEventName) {
        eventName = patchOptions.transferEventName(eventName);
      }
      const listeners = [];
      const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
        listeners.push(delegate);
      }
      return listeners;
    };
    proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
      const target = this || _global;
      let eventName = arguments[0];
      if (!eventName) {
        const keys = Object.keys(target);
        for (let i = 0; i < keys.length; i++) {
          const prop = keys[i];
          const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
          let evtName = match && match[1];
          // in nodejs EventEmitter, removeListener event is
          // used for monitoring the removeListener call,
          // so just keep removeListener eventListener until
          // all other eventListeners are removed
          if (evtName && evtName !== 'removeListener') {
            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
          }
        }
        // remove removeListener listener finally
        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
      } else {
        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }
        const symbolEventNames = zoneSymbolEventNames[eventName];
        if (symbolEventNames) {
          const symbolEventName = symbolEventNames[FALSE_STR];
          const symbolCaptureEventName = symbolEventNames[TRUE_STR];
          const tasks = target[symbolEventName];
          const captureTasks = target[symbolCaptureEventName];
          if (tasks) {
            const removeTasks = tasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
          if (captureTasks) {
            const removeTasks = captureTasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
        }
      }
      if (returnTarget) {
        return this;
      }
    };
    // for native toString patch
    attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
    attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
    if (nativeRemoveAllListeners) {
      attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
    }
    if (nativeListeners) {
      attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
    }
    return true;
  }
  let results = [];
  for (let i = 0; i < apis.length; i++) {
    results[i] = patchEventTargetMethods(apis[i], patchOptions);
  }
  return results;
}
function findEventTasks(target, eventName) {
  if (!eventName) {
    const foundTasks = [];
    for (let prop in target) {
      const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
      let evtName = match && match[1];
      if (evtName && (!eventName || evtName === eventName)) {
        const tasks = target[prop];
        if (tasks) {
          for (let i = 0; i < tasks.length; i++) {
            foundTasks.push(tasks[i]);
          }
        }
      }
    }
    return foundTasks;
  }
  let symbolEventName = zoneSymbolEventNames[eventName];
  if (!symbolEventName) {
    prepareEventNames(eventName);
    symbolEventName = zoneSymbolEventNames[eventName];
  }
  const captureFalseTasks = target[symbolEventName[FALSE_STR]];
  const captureTrueTasks = target[symbolEventName[TRUE_STR]];
  if (!captureFalseTasks) {
    return captureTrueTasks ? captureTrueTasks.slice() : [];
  } else {
    return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
  }
}
function patchEventPrototype(global, api) {
  const Event = global['Event'];
  if (Event && Event.prototype) {
    api.patchMethod(Event.prototype, 'stopImmediatePropagation', delegate => function (self, args) {
      self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
      // we need to call the native stopImmediatePropagation
      // in case in some hybrid application, some part of
      // application will be controlled by zone, some are not
      delegate && delegate.apply(self, args);
    });
  }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(api, target, targetName, method, callbacks) {
  const symbol = Zone.__symbol__(method);
  if (target[symbol]) {
    return;
  }
  const nativeDelegate = target[symbol] = target[method];
  target[method] = function (name, opts, options) {
    if (opts && opts.prototype) {
      callbacks.forEach(function (callback) {
        const source = `${targetName}.${method}::` + callback;
        const prototype = opts.prototype;
        // Note: the `patchCallbacks` is used for patching the `document.registerElement` and
        // `customElements.define`. We explicitly wrap the patching code into try-catch since
        // callbacks may be already patched by other web components frameworks (e.g. LWC), and they
        // make those properties non-writable. This means that patching callback will throw an error
        // `cannot assign to read-only property`. See this code as an example:
        // https://github.com/salesforce/lwc/blob/master/packages/@lwc/engine-core/src/framework/base-bridge-element.ts#L180-L186
        // We don't want to stop the application rendering if we couldn't patch some
        // callback, e.g. `attributeChangedCallback`.
        try {
          if (prototype.hasOwnProperty(callback)) {
            const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
            if (descriptor && descriptor.value) {
              descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
              api._redefineProperty(opts.prototype, callback, descriptor);
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          } else if (prototype[callback]) {
            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
          }
        } catch (_a) {
          // Note: we leave the catch block empty since there's no way to handle the error related
          // to non-writable property.
        }
      });
    }
    return nativeDelegate.call(target, name, opts, options);
  };
  api.attachOriginToPatched(target[method], nativeDelegate);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function filterProperties(target, onProperties, ignoreProperties) {
  if (!ignoreProperties || ignoreProperties.length === 0) {
    return onProperties;
  }
  const tip = ignoreProperties.filter(ip => ip.target === target);
  if (!tip || tip.length === 0) {
    return onProperties;
  }
  const targetIgnoreProperties = tip[0].ignoreProperties;
  return onProperties.filter(op => targetIgnoreProperties.indexOf(op) === -1);
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
  // check whether target is available, sometimes target will be undefined
  // because different browser or some 3rd party plugin.
  if (!target) {
    return;
  }
  const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
  patchOnProperties(target, filteredProperties, prototype);
}
/**
 * Get all event name properties which the event name startsWith `on`
 * from the target object itself, inherited properties are not considered.
 */
function getOnEventNames(target) {
  return Object.getOwnPropertyNames(target).filter(name => name.startsWith('on') && name.length > 2).map(name => name.substring(2));
}
function propertyDescriptorPatch(api, _global) {
  if (isNode && !isMix) {
    return;
  }
  if (Zone[api.symbol('patchEvents')]) {
    // events are already been patched by legacy patch.
    return;
  }
  const ignoreProperties = _global['__Zone_ignore_on_properties'];
  // for browsers that we can patch the descriptor:  Chrome & Firefox
  let patchTargets = [];
  if (isBrowser) {
    const internalWindow = window;
    patchTargets = patchTargets.concat(['Document', 'SVGElement', 'Element', 'HTMLElement', 'HTMLBodyElement', 'HTMLMediaElement', 'HTMLFrameSetElement', 'HTMLFrameElement', 'HTMLIFrameElement', 'HTMLMarqueeElement', 'Worker']);
    const ignoreErrorProperties = isIE() ? [{
      target: internalWindow,
      ignoreProperties: ['error']
    }] : [];
    // in IE/Edge, onProp not exist in window object, but in WindowPrototype
    // so we need to pass WindowPrototype to check onProp exist or not
    patchFilteredProperties(internalWindow, getOnEventNames(internalWindow), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
  }
  patchTargets = patchTargets.concat(['XMLHttpRequest', 'XMLHttpRequestEventTarget', 'IDBIndex', 'IDBRequest', 'IDBOpenDBRequest', 'IDBDatabase', 'IDBTransaction', 'IDBCursor', 'WebSocket']);
  for (let i = 0; i < patchTargets.length; i++) {
    const target = _global[patchTargets[i]];
    target && target.prototype && patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
  }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('util', (global, Zone, api) => {
  // Collect native event names by looking at properties
  // on the global namespace, e.g. 'onclick'.
  const eventNames = getOnEventNames(global);
  api.patchOnProperties = patchOnProperties;
  api.patchMethod = patchMethod;
  api.bindArguments = bindArguments;
  api.patchMacroTask = patchMacroTask;
  // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
  // define which events will not be patched by `Zone.js`.
  // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
  // the name consistent with angular repo.
  // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
  // backwards compatibility.
  const SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
  const SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
  if (global[SYMBOL_UNPATCHED_EVENTS]) {
    global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
  }
  if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
    Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
  }
  api.patchEventPrototype = patchEventPrototype;
  api.patchEventTarget = patchEventTarget;
  api.isIEOrEdge = isIEOrEdge;
  api.ObjectDefineProperty = ObjectDefineProperty;
  api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
  api.ObjectCreate = ObjectCreate;
  api.ArraySlice = ArraySlice;
  api.patchClass = patchClass;
  api.wrapWithCurrentZone = wrapWithCurrentZone;
  api.filterProperties = filterProperties;
  api.attachOriginToPatched = attachOriginToPatched;
  api._redefineProperty = Object.defineProperty;
  api.patchCallbacks = patchCallbacks;
  api.getGlobalObjects = () => ({
    globalSources,
    zoneSymbolEventNames,
    eventNames,
    isBrowser,
    isMix,
    isNode,
    TRUE_STR,
    FALSE_STR,
    ZONE_SYMBOL_PREFIX,
    ADD_EVENT_LISTENER_STR,
    REMOVE_EVENT_LISTENER_STR
  });
});

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
  let setNative = null;
  let clearNative = null;
  setName += nameSuffix;
  cancelName += nameSuffix;
  const tasksByHandleId = {};
  function scheduleTask(task) {
    const data = task.data;
    data.args[0] = function () {
      return task.invoke.apply(this, arguments);
    };
    data.handleId = setNative.apply(window, data.args);
    return task;
  }
  function clearTask(task) {
    return clearNative.call(window, task.data.handleId);
  }
  setNative = patchMethod(window, setName, delegate => function (self, args) {
    if (typeof args[0] === 'function') {
      const options = {
        isPeriodic: nameSuffix === 'Interval',
        delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
        args: args
      };
      const callback = args[0];
      args[0] = function timer() {
        try {
          return callback.apply(this, arguments);
        } finally {
          // issue-934, task will be cancelled
          // even it is a periodic task such as
          // setInterval
          // https://github.com/angular/angular/issues/40387
          // Cleanup tasksByHandleId should be handled before scheduleTask
          // Since some zoneSpec may intercept and doesn't trigger
          // scheduleFn(scheduleTask) provided here.
          if (!options.isPeriodic) {
            if (typeof options.handleId === 'number') {
              // in non-nodejs env, we remove timerId
              // from local cache
              delete tasksByHandleId[options.handleId];
            } else if (options.handleId) {
              // Node returns complex objects as handleIds
              // we remove task reference from timer object
              options.handleId[taskSymbol] = null;
            }
          }
        }
      };
      const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
      if (!task) {
        return task;
      }
      // Node.js must additionally support the ref and unref functions.
      const handle = task.data.handleId;
      if (typeof handle === 'number') {
        // for non nodejs env, we save handleId: task
        // mapping in local cache for clearTimeout
        tasksByHandleId[handle] = task;
      } else if (handle) {
        // for nodejs env, we save task
        // reference in timerId Object for clearTimeout
        handle[taskSymbol] = task;
      }
      // check whether handle is null, because some polyfill or browser
      // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
      if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
        task.ref = handle.ref.bind(handle);
        task.unref = handle.unref.bind(handle);
      }
      if (typeof handle === 'number' || handle) {
        return handle;
      }
      return task;
    } else {
      // cause an error by calling it directly.
      return delegate.apply(window, args);
    }
  });
  clearNative = patchMethod(window, cancelName, delegate => function (self, args) {
    const id = args[0];
    let task;
    if (typeof id === 'number') {
      // non nodejs env.
      task = tasksByHandleId[id];
    } else {
      // nodejs env.
      task = id && id[taskSymbol];
      // other environments.
      if (!task) {
        task = id;
      }
    }
    if (task && typeof task.type === 'string') {
      if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
        if (typeof id === 'number') {
          delete tasksByHandleId[id];
        } else if (id) {
          id[taskSymbol] = null;
        }
        // Do not cancel already canceled functions
        task.zone.cancelTask(task);
      }
    } else {
      // cause an error by calling it directly.
      delegate.apply(window, args);
    }
  });
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCustomElements(_global, api) {
  const {
    isBrowser,
    isMix
  } = api.getGlobalObjects();
  if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
    return;
  }
  const callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
  api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
  if (Zone[api.symbol('patchEventTarget')]) {
    // EventTarget is already patched.
    return;
  }
  const {
    eventNames,
    zoneSymbolEventNames,
    TRUE_STR,
    FALSE_STR,
    ZONE_SYMBOL_PREFIX
  } = api.getGlobalObjects();
  //  predefine all __zone_symbol__ + eventName + true/false string
  for (let i = 0; i < eventNames.length; i++) {
    const eventName = eventNames[i];
    const falseEventName = eventName + FALSE_STR;
    const trueEventName = eventName + TRUE_STR;
    const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
    const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
    zoneSymbolEventNames[eventName] = {};
    zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
    zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
  }
  const EVENT_TARGET = _global['EventTarget'];
  if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
    return;
  }
  api.patchEventTarget(_global, api, [EVENT_TARGET && EVENT_TARGET.prototype]);
  return true;
}
function patchEvent(global, api) {
  api.patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('legacy', global => {
  const legacyPatch = global[Zone.__symbol__('legacyPatch')];
  if (legacyPatch) {
    legacyPatch();
  }
});
Zone.__load_patch('queueMicrotask', (global, Zone, api) => {
  api.patchMethod(global, 'queueMicrotask', delegate => {
    return function (self, args) {
      Zone.current.scheduleMicroTask('queueMicrotask', args[0]);
    };
  });
});
Zone.__load_patch('timers', global => {
  const set = 'set';
  const clear = 'clear';
  patchTimer(global, set, clear, 'Timeout');
  patchTimer(global, set, clear, 'Interval');
  patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', global => {
  patchTimer(global, 'request', 'cancel', 'AnimationFrame');
  patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
  patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', (global, Zone) => {
  const blockingMethods = ['alert', 'prompt', 'confirm'];
  for (let i = 0; i < blockingMethods.length; i++) {
    const name = blockingMethods[i];
    patchMethod(global, name, (delegate, symbol, name) => {
      return function (s, args) {
        return Zone.current.run(delegate, global, args, name);
      };
    });
  }
});
Zone.__load_patch('EventTarget', (global, Zone, api) => {
  patchEvent(global, api);
  eventTargetPatch(global, api);
  // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
  const XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
  if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
    api.patchEventTarget(global, api, [XMLHttpRequestEventTarget.prototype]);
  }
});
Zone.__load_patch('MutationObserver', (global, Zone, api) => {
  patchClass('MutationObserver');
  patchClass('WebKitMutationObserver');
});
Zone.__load_patch('IntersectionObserver', (global, Zone, api) => {
  patchClass('IntersectionObserver');
});
Zone.__load_patch('FileReader', (global, Zone, api) => {
  patchClass('FileReader');
});
Zone.__load_patch('on_property', (global, Zone, api) => {
  propertyDescriptorPatch(api, global);
});
Zone.__load_patch('customElements', (global, Zone, api) => {
  patchCustomElements(global, api);
});
Zone.__load_patch('XHR', (global, Zone) => {
  // Treat XMLHttpRequest as a macrotask.
  patchXHR(global);
  const XHR_TASK = zoneSymbol('xhrTask');
  const XHR_SYNC = zoneSymbol('xhrSync');
  const XHR_LISTENER = zoneSymbol('xhrListener');
  const XHR_SCHEDULED = zoneSymbol('xhrScheduled');
  const XHR_URL = zoneSymbol('xhrURL');
  const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
  function patchXHR(window) {
    const XMLHttpRequest = window['XMLHttpRequest'];
    if (!XMLHttpRequest) {
      // XMLHttpRequest is not available in service worker
      return;
    }
    const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    function findPendingTask(target) {
      return target[XHR_TASK];
    }
    let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
    let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
    if (!oriAddListener) {
      const XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
      if (XMLHttpRequestEventTarget) {
        const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
        oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      }
    }
    const READY_STATE_CHANGE = 'readystatechange';
    const SCHEDULED = 'scheduled';
    function scheduleTask(task) {
      const data = task.data;
      const target = data.target;
      target[XHR_SCHEDULED] = false;
      target[XHR_ERROR_BEFORE_SCHEDULED] = false;
      // remove existing event listener
      const listener = target[XHR_LISTENER];
      if (!oriAddListener) {
        oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      }
      if (listener) {
        oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
      }
      const newListener = target[XHR_LISTENER] = () => {
        if (target.readyState === target.DONE) {
          // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
          // readyState=4 multiple times, so we need to check task state here
          if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
            // check whether the xhr has registered onload listener
            // if that is the case, the task should invoke after all
            // onload listeners finish.
            // Also if the request failed without response (status = 0), the load event handler
            // will not be triggered, in that case, we should also invoke the placeholder callback
            // to close the XMLHttpRequest::send macroTask.
            // https://github.com/angular/angular/issues/38795
            const loadTasks = target[Zone.__symbol__('loadfalse')];
            if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
              const oriInvoke = task.invoke;
              task.invoke = function () {
                // need to load the tasks again, because in other
                // load listener, they may remove themselves
                const loadTasks = target[Zone.__symbol__('loadfalse')];
                for (let i = 0; i < loadTasks.length; i++) {
                  if (loadTasks[i] === task) {
                    loadTasks.splice(i, 1);
                  }
                }
                if (!data.aborted && task.state === SCHEDULED) {
                  oriInvoke.call(task);
                }
              };
              loadTasks.push(task);
            } else {
              task.invoke();
            }
          } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
            // error occurs when xhr.send()
            target[XHR_ERROR_BEFORE_SCHEDULED] = true;
          }
        }
      };
      oriAddListener.call(target, READY_STATE_CHANGE, newListener);
      const storedTask = target[XHR_TASK];
      if (!storedTask) {
        target[XHR_TASK] = task;
      }
      sendNative.apply(target, data.args);
      target[XHR_SCHEDULED] = true;
      return task;
    }
    function placeholderCallback() {}
    function clearTask(task) {
      const data = task.data;
      // Note - ideally, we would call data.target.removeEventListener here, but it's too late
      // to prevent it from firing. So instead, we store info for the event listener.
      data.aborted = true;
      return abortNative.apply(data.target, data.args);
    }
    const openNative = patchMethod(XMLHttpRequestPrototype, 'open', () => function (self, args) {
      self[XHR_SYNC] = args[2] == false;
      self[XHR_URL] = args[1];
      return openNative.apply(self, args);
    });
    const XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
    const fetchTaskAborting = zoneSymbol('fetchTaskAborting');
    const fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
    const sendNative = patchMethod(XMLHttpRequestPrototype, 'send', () => function (self, args) {
      if (Zone.current[fetchTaskScheduling] === true) {
        // a fetch is scheduling, so we are using xhr to polyfill fetch
        // and because we already schedule macroTask for fetch, we should
        // not schedule a macroTask for xhr again
        return sendNative.apply(self, args);
      }
      if (self[XHR_SYNC]) {
        // if the XHR is sync there is no task to schedule, just execute the code.
        return sendNative.apply(self, args);
      } else {
        const options = {
          target: self,
          url: self[XHR_URL],
          isPeriodic: false,
          args: args,
          aborted: false
        };
        const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
        if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) {
          // xhr request throw error when send
          // we should invoke task instead of leaving a scheduled
          // pending macroTask
          task.invoke();
        }
      }
    });
    const abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', () => function (self, args) {
      const task = findPendingTask(self);
      if (task && typeof task.type == 'string') {
        // If the XHR has already completed, do nothing.
        // If the XHR has already been aborted, do nothing.
        // Fix #569, call abort multiple times before done will cause
        // macroTask task count be negative number
        if (task.cancelFn == null || task.data && task.data.aborted) {
          return;
        }
        task.zone.cancelTask(task);
      } else if (Zone.current[fetchTaskAborting] === true) {
        // the abort is called from fetch polyfill, we need to call native abort of XHR.
        return abortNative.apply(self, args);
      }
      // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
      // task
      // to cancel. Do nothing.
    });
  }
});

Zone.__load_patch('geolocation', global => {
  /// GEO_LOCATION
  if (global['navigator'] && global['navigator'].geolocation) {
    patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
  }
});
Zone.__load_patch('PromiseRejectionEvent', (global, Zone) => {
  // handle unhandled promise rejection
  function findPromiseRejectionHandler(evtName) {
    return function (e) {
      const eventTasks = findEventTasks(global, evtName);
      eventTasks.forEach(eventTask => {
        // windows has added unhandledrejection event listener
        // trigger the event listener
        const PromiseRejectionEvent = global['PromiseRejectionEvent'];
        if (PromiseRejectionEvent) {
          const evt = new PromiseRejectionEvent(evtName, {
            promise: e.promise,
            reason: e.rejection
          });
          eventTask.invoke(evt);
        }
      });
    };
  }
  if (global['PromiseRejectionEvent']) {
    Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
    Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
  }
});

/***/ }),

/***/ 12482:
/*!*******************************************!*\
  !*** ./locale-data/complete.js (ignored) ***!
  \*******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(23443));
/******/ }
]);
//# sourceMappingURL=polyfills.js.map