import { s as t } from "./ggir-results-types-WB8axvb-.js";
import { i as e, l as i, n, s as r, u as s } from "./workers-DuRiLciz.js";
import { M as o, N as a } from "./platform-ChVQGHgC.js";
import { o as l, t as c } from "./content-hash-B-at0sOp.js";
import { _ as u, f as p, g as y, h as d, p as h, t as f, v } from "./workspace-db-BYjGbThz.js";
import { r as m, t as g } from "./project-revision-BN_9_Nz8.js";
const b = new TextDecoder("utf-8"), S = b.decode.bind(b), w = new TextEncoder(), I = (t) => w.encode(t), T = (t) => "function" == typeof t, A = (t) => null != t && Object(t) === t, D = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer;
function B(t, e) {
	let i = A(n = e) && "done" in n && "value" in n ? e.value : e;
	var n;
	return i instanceof t ? t === Uint8Array ? new t(i.buffer, i.byteOffset, i.byteLength) : i : i ? ("string" == typeof i && (i = I(i)), i instanceof ArrayBuffer || i instanceof D ? new t(i) : ((t) => A(t) && T(t.clear) && T(t.bytes) && T(t.position) && T(t.setPosition) && T(t.capacity) && T(t.getBufferIdentifier) && T(t.createLong))(i) ? B(t, i.bytes()) : ArrayBuffer.isView(i) ? i.byteLength <= 0 ? new t(0) : new t(i.buffer, i.byteOffset, i.byteLength / t.BYTES_PER_ELEMENT) : t.from(i)) : new t(0);
}
const O = (t) => B(Int32Array, t), M = (t) => B(BigInt64Array, t), E = (t) => B(Uint8Array, t);
var N, U, L, F, x, C, _, k;
function V(t) {
	if (null === t) return "null";
	if (void 0 === t) return "undefined";
	switch (typeof t) {
		case "number":
		case "bigint": return `${t}`;
		case "string": return `"${t}"`;
	}
	return "function" == typeof t[Symbol.toPrimitive] ? t[Symbol.toPrimitive]("string") : ArrayBuffer.isView(t) ? t instanceof BigInt64Array || t instanceof BigUint64Array ? `[${[...t].map((t) => V(t))}]` : `[${t}]` : ArrayBuffer.isView(t) ? `[${t}]` : JSON.stringify(t, (t, e) => "bigint" == typeof e ? `${e}` : e);
}
function j(t) {
	if ("bigint" == typeof t && (t < Number.MIN_SAFE_INTEGER || t > Number.MAX_SAFE_INTEGER)) throw new TypeError(`${t} is not safe to convert to a number.`);
	return Number(t);
}
function $(t, e) {
	return j(t / e) + j(t % e) / j(e);
}
(function(t) {
	t[t.V1 = 0] = "V1", t[t.V2 = 1] = "V2", t[t.V3 = 2] = "V3", t[t.V4 = 3] = "V4", t[t.V5 = 4] = "V5";
})(N || (N = {})), function(t) {
	t[t.Sparse = 0] = "Sparse", t[t.Dense = 1] = "Dense";
}(U || (U = {})), function(t) {
	t[t.HALF = 0] = "HALF", t[t.SINGLE = 1] = "SINGLE", t[t.DOUBLE = 2] = "DOUBLE";
}(L || (L = {})), function(t) {
	t[t.DAY = 0] = "DAY", t[t.MILLISECOND = 1] = "MILLISECOND";
}(F || (F = {})), function(t) {
	t[t.SECOND = 0] = "SECOND", t[t.MILLISECOND = 1] = "MILLISECOND", t[t.MICROSECOND = 2] = "MICROSECOND", t[t.NANOSECOND = 3] = "NANOSECOND";
}(x || (x = {})), function(t) {
	t[t.YEAR_MONTH = 0] = "YEAR_MONTH", t[t.DAY_TIME = 1] = "DAY_TIME", t[t.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
}(C || (C = {})), function(t) {
	t[t.NONE = 0] = "NONE", t[t.Null = 1] = "Null", t[t.Int = 2] = "Int", t[t.Float = 3] = "Float", t[t.Binary = 4] = "Binary", t[t.Utf8 = 5] = "Utf8", t[t.Bool = 6] = "Bool", t[t.Decimal = 7] = "Decimal", t[t.Date = 8] = "Date", t[t.Time = 9] = "Time", t[t.Timestamp = 10] = "Timestamp", t[t.Interval = 11] = "Interval", t[t.List = 12] = "List", t[t.Struct = 13] = "Struct", t[t.Union = 14] = "Union", t[t.FixedSizeBinary = 15] = "FixedSizeBinary", t[t.FixedSizeList = 16] = "FixedSizeList", t[t.Map = 17] = "Map", t[t.Duration = 18] = "Duration", t[t.LargeBinary = 19] = "LargeBinary", t[t.LargeUtf8 = 20] = "LargeUtf8", t[t.LargeList = 21] = "LargeList", t[t.BinaryView = 23] = "BinaryView", t[t.Utf8View = 24] = "Utf8View", t[t.Dictionary = -1] = "Dictionary", t[t.Int8 = -2] = "Int8", t[t.Int16 = -3] = "Int16", t[t.Int32 = -4] = "Int32", t[t.Int64 = -5] = "Int64", t[t.Uint8 = -6] = "Uint8", t[t.Uint16 = -7] = "Uint16", t[t.Uint32 = -8] = "Uint32", t[t.Uint64 = -9] = "Uint64", t[t.Float16 = -10] = "Float16", t[t.Float32 = -11] = "Float32", t[t.Float64 = -12] = "Float64", t[t.DateDay = -13] = "DateDay", t[t.DateMillisecond = -14] = "DateMillisecond", t[t.TimestampSecond = -15] = "TimestampSecond", t[t.TimestampMillisecond = -16] = "TimestampMillisecond", t[t.TimestampMicrosecond = -17] = "TimestampMicrosecond", t[t.TimestampNanosecond = -18] = "TimestampNanosecond", t[t.TimeSecond = -19] = "TimeSecond", t[t.TimeMillisecond = -20] = "TimeMillisecond", t[t.TimeMicrosecond = -21] = "TimeMicrosecond", t[t.TimeNanosecond = -22] = "TimeNanosecond", t[t.DenseUnion = -23] = "DenseUnion", t[t.SparseUnion = -24] = "SparseUnion", t[t.IntervalDayTime = -25] = "IntervalDayTime", t[t.IntervalYearMonth = -26] = "IntervalYearMonth", t[t.DurationSecond = -27] = "DurationSecond", t[t.DurationMillisecond = -28] = "DurationMillisecond", t[t.DurationMicrosecond = -29] = "DurationMicrosecond", t[t.DurationNanosecond = -30] = "DurationNanosecond", t[t.IntervalMonthDayNano = -31] = "IntervalMonthDayNano";
}(_ || (_ = {})), function(t) {
	t[t.OFFSET = 0] = "OFFSET", t[t.DATA = 1] = "DATA", t[t.VALIDITY = 2] = "VALIDITY", t[t.TYPE = 3] = "TYPE";
}(k || (k = {}));
const z = Symbol.for("isArrowBigNum");
function R(t, ...e) {
	return 0 === e.length ? Object.setPrototypeOf(B(this.TypedArray, t), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(t, ...e), this.constructor.prototype);
}
function P(...t) {
	return R.apply(this, t);
}
function Y(...t) {
	return R.apply(this, t);
}
function W(...t) {
	return R.apply(this, t);
}
R.prototype[z] = !0, R.prototype.toJSON = function() {
	return `"${q(this)}"`;
}, R.prototype.valueOf = function(t) {
	return G(this, t);
}, R.prototype.toString = function() {
	return q(this);
}, R.prototype[Symbol.toPrimitive] = function(t = "default") {
	switch (t) {
		case "number": return G(this);
		case "string": return q(this);
		case "default": return 8 === (e = this).byteLength ? new e.BigIntArray(e.buffer, e.byteOffset, 1)[0] : q(e);
	}
	var e;
	return q(this);
}, Object.setPrototypeOf(P.prototype, Object.create(Int32Array.prototype)), Object.setPrototypeOf(Y.prototype, Object.create(Uint32Array.prototype)), Object.setPrototypeOf(W.prototype, Object.create(Uint32Array.prototype)), Object.assign(P.prototype, R.prototype, {
	constructor: P,
	signed: !0,
	TypedArray: Int32Array,
	BigIntArray: BigInt64Array
}), Object.assign(Y.prototype, R.prototype, {
	constructor: Y,
	signed: !1,
	TypedArray: Uint32Array,
	BigIntArray: BigUint64Array
}), Object.assign(W.prototype, R.prototype, {
	constructor: W,
	signed: !0,
	TypedArray: Uint32Array,
	BigIntArray: BigUint64Array
});
const H = BigInt(4294967296) * BigInt(4294967296) - BigInt(1);
function G(t, e) {
	const { buffer: i, byteOffset: n, byteLength: r, signed: s } = t, o = new BigUint64Array(i, n, r / 8), a = s && o.at(-1) & BigInt(1) << BigInt(63);
	let l = BigInt(0), c = 0;
	if (a) {
		for (const t of o) l |= (t ^ H) * (BigInt(1) << BigInt(64 * c++));
		l *= BigInt(-1), l -= BigInt(1);
	} else for (const u of o) l |= u * (BigInt(1) << BigInt(64 * c++));
	if ("number" == typeof e && e > 0) {
		const t = BigInt("1".padEnd(e + 1, "0")), i = a ? -l % t : l % t, n = j(l / t);
		return +`${a && 0 === n ? "-" : ""}${n}.${`${i}`.padStart(e, "0")}`;
	}
	return j(l);
}
function q(t) {
	if (8 === t.byteLength) return `${new t.BigIntArray(t.buffer, t.byteOffset, 1)[0]}`;
	if (!t.signed) return J(t);
	let e = new Uint16Array(t.buffer, t.byteOffset, t.byteLength / 2);
	if (new Int16Array([e.at(-1)])[0] >= 0) return J(t);
	e = e.slice();
	let i = 1;
	for (let n = 0; n < e.length; n++) {
		const t = e[n], r = ~t + i;
		e[n] = r, i &= 0 === t ? 1 : 0;
	}
	return `-${J(e)}`;
}
function J(t) {
	let e = "";
	const i = /* @__PURE__ */ new Uint32Array(2);
	let n = new Uint16Array(t.buffer, t.byteOffset, t.byteLength / 2);
	const r = new Uint32Array((n = new Uint16Array(n).reverse()).buffer);
	let s = -1;
	const o = n.length - 1;
	do {
		for (i[0] = n[s = 0]; s < o;) n[s++] = i[1] = i[0] / 10, i[0] = (i[0] - 10 * i[1] << 16) + n[s];
		n[s] = i[1] = i[0] / 10, i[0] = i[0] - 10 * i[1], e = `${i[0]}${e}`;
	} while (r[0] || r[1] || r[2] || r[3]);
	return null != e ? e : "0";
}
var X, K, Z, Q, tt, et, it, nt = class t {
	static new(t, e) {
		switch (e) {
			case !0: return new P(t);
			case !1: return new Y(t);
		}
		switch (t.constructor) {
			case Int8Array:
			case Int16Array:
			case Int32Array:
			case BigInt64Array: return new P(t);
		}
		return 16 === t.byteLength ? new W(t) : new Y(t);
	}
	static signed(t) {
		return new P(t);
	}
	static unsigned(t) {
		return new Y(t);
	}
	static decimal(t) {
		return new W(t);
	}
	constructor(e, i) {
		return t.new(e, i);
	}
};
const rt = Symbol.for("apache-arrow/DataType");
var st, ot = class t {
	static isDataType(t) {
		return !0 === (null == t ? void 0 : t[rt]);
	}
	static isNull(t) {
		return (null == t ? void 0 : t.typeId) === _.Null;
	}
	static isInt(t) {
		return (null == t ? void 0 : t.typeId) === _.Int;
	}
	static isFloat(t) {
		return (null == t ? void 0 : t.typeId) === _.Float;
	}
	static isBinary(t) {
		return (null == t ? void 0 : t.typeId) === _.Binary;
	}
	static isBinaryView(t) {
		return (null == t ? void 0 : t.typeId) === _.BinaryView;
	}
	static isLargeBinary(t) {
		return (null == t ? void 0 : t.typeId) === _.LargeBinary;
	}
	static isUtf8(t) {
		return (null == t ? void 0 : t.typeId) === _.Utf8;
	}
	static isUtf8View(t) {
		return (null == t ? void 0 : t.typeId) === _.Utf8View;
	}
	static isLargeUtf8(t) {
		return (null == t ? void 0 : t.typeId) === _.LargeUtf8;
	}
	static isBool(t) {
		return (null == t ? void 0 : t.typeId) === _.Bool;
	}
	static isDecimal(t) {
		return (null == t ? void 0 : t.typeId) === _.Decimal;
	}
	static isDate(t) {
		return (null == t ? void 0 : t.typeId) === _.Date;
	}
	static isTime(t) {
		return (null == t ? void 0 : t.typeId) === _.Time;
	}
	static isTimestamp(t) {
		return (null == t ? void 0 : t.typeId) === _.Timestamp;
	}
	static isInterval(t) {
		return (null == t ? void 0 : t.typeId) === _.Interval;
	}
	static isDuration(t) {
		return (null == t ? void 0 : t.typeId) === _.Duration;
	}
	static isList(t) {
		return (null == t ? void 0 : t.typeId) === _.List;
	}
	static isLargeList(t) {
		return (null == t ? void 0 : t.typeId) === _.LargeList;
	}
	static isStruct(t) {
		return (null == t ? void 0 : t.typeId) === _.Struct;
	}
	static isUnion(t) {
		return (null == t ? void 0 : t.typeId) === _.Union;
	}
	static isFixedSizeBinary(t) {
		return (null == t ? void 0 : t.typeId) === _.FixedSizeBinary;
	}
	static isFixedSizeList(t) {
		return (null == t ? void 0 : t.typeId) === _.FixedSizeList;
	}
	static isMap(t) {
		return (null == t ? void 0 : t.typeId) === _.Map;
	}
	static isDictionary(t) {
		return (null == t ? void 0 : t.typeId) === _.Dictionary;
	}
	static isDenseUnion(e) {
		return t.isUnion(e) && e.mode === U.Dense;
	}
	static isSparseUnion(e) {
		return t.isUnion(e) && e.mode === U.Sparse;
	}
	constructor(t) {
		this.typeId = t;
	}
};
X = Symbol.toStringTag, ot[X] = ((st = ot.prototype).children = null, st.ArrayType = Array, st.OffsetArrayType = Int32Array, st[rt] = !0, st[Symbol.toStringTag] = "DataType");
var at = class extends ot {
	constructor() {
		super(_.Null);
	}
	toString() {
		return "Null";
	}
};
K = Symbol.toStringTag, at[K] = at.prototype[Symbol.toStringTag] = "Null";
var lt = class extends ot {
	constructor(t, e) {
		super(_.Int), this.isSigned = t, this.bitWidth = e;
	}
	get ArrayType() {
		switch (this.bitWidth) {
			case 8: return this.isSigned ? Int8Array : Uint8Array;
			case 16: return this.isSigned ? Int16Array : Uint16Array;
			case 32: return this.isSigned ? Int32Array : Uint32Array;
			case 64: return this.isSigned ? BigInt64Array : BigUint64Array;
		}
		throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
	}
	toString() {
		return `${this.isSigned ? "I" : "Ui"}nt${this.bitWidth}`;
	}
};
Z = Symbol.toStringTag, lt[Z] = ((t) => (t.isSigned = null, t.bitWidth = null, t[Symbol.toStringTag] = "Int"))(lt.prototype);
var ct = class extends lt {
	constructor() {
		super(!0, 8);
	}
	get ArrayType() {
		return Int8Array;
	}
}, ut = class extends lt {
	constructor() {
		super(!0, 16);
	}
	get ArrayType() {
		return Int16Array;
	}
}, pt = class extends lt {
	constructor() {
		super(!0, 32);
	}
	get ArrayType() {
		return Int32Array;
	}
}, yt = class extends lt {
	constructor() {
		super(!0, 64);
	}
	get ArrayType() {
		return BigInt64Array;
	}
}, dt = class extends lt {
	constructor() {
		super(!1, 8);
	}
	get ArrayType() {
		return Uint8Array;
	}
}, ht = class extends lt {
	constructor() {
		super(!1, 16);
	}
	get ArrayType() {
		return Uint16Array;
	}
}, ft = class extends lt {
	constructor() {
		super(!1, 32);
	}
	get ArrayType() {
		return Uint32Array;
	}
}, vt = class extends lt {
	constructor() {
		super(!1, 64);
	}
	get ArrayType() {
		return BigUint64Array;
	}
};
Object.defineProperty(ct.prototype, "ArrayType", { value: Int8Array }), Object.defineProperty(ut.prototype, "ArrayType", { value: Int16Array }), Object.defineProperty(pt.prototype, "ArrayType", { value: Int32Array }), Object.defineProperty(yt.prototype, "ArrayType", { value: BigInt64Array }), Object.defineProperty(dt.prototype, "ArrayType", { value: Uint8Array }), Object.defineProperty(ht.prototype, "ArrayType", { value: Uint16Array }), Object.defineProperty(ft.prototype, "ArrayType", { value: Uint32Array }), Object.defineProperty(vt.prototype, "ArrayType", { value: BigUint64Array });
var mt = class extends ot {
	constructor(t) {
		super(_.Float), this.precision = t;
	}
	get ArrayType() {
		switch (this.precision) {
			case L.HALF: return Uint16Array;
			case L.SINGLE: return Float32Array;
			case L.DOUBLE: return Float64Array;
		}
		throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
	}
	toString() {
		return `Float${this.precision << 5 || 16}`;
	}
};
Q = Symbol.toStringTag, mt[Q] = ((t) => (t.precision = null, t[Symbol.toStringTag] = "Float"))(mt.prototype);
var gt = class extends mt {
	constructor() {
		super(L.SINGLE);
	}
}, bt = class extends mt {
	constructor() {
		super(L.DOUBLE);
	}
};
Object.defineProperty(class extends mt {
	constructor() {
		super(L.HALF);
	}
}.prototype, "ArrayType", { value: Uint16Array }), Object.defineProperty(gt.prototype, "ArrayType", { value: Float32Array }), Object.defineProperty(bt.prototype, "ArrayType", { value: Float64Array });
var St = class extends ot {
	constructor() {
		super(_.Binary);
	}
	toString() {
		return "Binary";
	}
};
St[Symbol.toStringTag] = ((t) => (t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "Binary"))(St.prototype);
var wt = class extends ot {
	constructor() {
		super(_.BinaryView);
	}
	toString() {
		return "BinaryView";
	}
};
tt = Symbol.toStringTag, wt.ELEMENT_WIDTH = 16, wt.INLINE_CAPACITY = 12, wt.LENGTH_OFFSET = 0, wt.INLINE_OFFSET = 4, wt.BUFFER_INDEX_OFFSET = 8, wt.BUFFER_OFFSET_OFFSET = 12, wt[tt] = ((t) => (t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "BinaryView"))(wt.prototype);
var It = class extends ot {
	constructor() {
		super(_.LargeBinary);
	}
	toString() {
		return "LargeBinary";
	}
};
It[Symbol.toStringTag] = ((t) => (t.ArrayType = Uint8Array, t.OffsetArrayType = BigInt64Array, t[Symbol.toStringTag] = "LargeBinary"))(It.prototype);
var Tt = class extends ot {
	constructor() {
		super(_.Utf8);
	}
	toString() {
		return "Utf8";
	}
};
Tt[Symbol.toStringTag] = ((t) => (t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "Utf8"))(Tt.prototype);
var At = class extends ot {
	constructor() {
		super(_.Utf8View);
	}
	toString() {
		return "Utf8View";
	}
};
et = Symbol.toStringTag, At.ELEMENT_WIDTH = wt.ELEMENT_WIDTH, At.INLINE_CAPACITY = wt.INLINE_CAPACITY, At[et] = ((t) => (t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "Utf8View"))(At.prototype);
var Dt = class extends ot {
	constructor() {
		super(_.LargeUtf8);
	}
	toString() {
		return "LargeUtf8";
	}
};
Dt[Symbol.toStringTag] = ((t) => (t.ArrayType = Uint8Array, t.OffsetArrayType = BigInt64Array, t[Symbol.toStringTag] = "LargeUtf8"))(Dt.prototype);
var Bt = class extends ot {
	constructor() {
		super(_.Bool);
	}
	toString() {
		return "Bool";
	}
};
Bt[Symbol.toStringTag] = ((t) => (t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "Bool"))(Bt.prototype);
var Ot = class extends ot {
	constructor(t, e, i = 128) {
		super(_.Decimal), this.scale = t, this.precision = e, this.bitWidth = i;
	}
	toString() {
		return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`;
	}
};
Ot[Symbol.toStringTag] = ((t) => (t.scale = null, t.precision = null, t.ArrayType = Uint32Array, t[Symbol.toStringTag] = "Decimal"))(Ot.prototype);
var Mt = class extends ot {
	constructor(t) {
		super(_.Date), this.unit = t;
	}
	toString() {
		return `Date${32 * (this.unit + 1)}<${F[this.unit]}>`;
	}
	get ArrayType() {
		return this.unit === F.DAY ? Int32Array : BigInt64Array;
	}
};
Mt[Symbol.toStringTag] = ((t) => (t.unit = null, t[Symbol.toStringTag] = "Date"))(Mt.prototype);
var Et = class extends ot {
	constructor(t, e) {
		super(_.Time), this.unit = t, this.bitWidth = e;
	}
	toString() {
		return `Time${this.bitWidth}<${x[this.unit]}>`;
	}
	get ArrayType() {
		switch (this.bitWidth) {
			case 32: return Int32Array;
			case 64: return BigInt64Array;
		}
		throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
	}
};
Et[Symbol.toStringTag] = ((t) => (t.unit = null, t.bitWidth = null, t[Symbol.toStringTag] = "Time"))(Et.prototype);
var Nt = class extends ot {
	constructor(t, e) {
		super(_.Timestamp), this.unit = t, this.timezone = e;
	}
	toString() {
		return `Timestamp<${x[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
	}
};
Nt[Symbol.toStringTag] = ((t) => (t.unit = null, t.timezone = null, t.ArrayType = BigInt64Array, t[Symbol.toStringTag] = "Timestamp"))(Nt.prototype);
var Ut = class extends ot {
	constructor(t) {
		super(_.Interval), this.unit = t;
	}
	toString() {
		return `Interval<${C[this.unit]}>`;
	}
};
Ut[Symbol.toStringTag] = ((t) => (t.unit = null, t.ArrayType = Int32Array, t[Symbol.toStringTag] = "Interval"))(Ut.prototype);
var Lt = class extends ot {
	constructor(t) {
		super(_.Duration), this.unit = t;
	}
	toString() {
		return `Duration<${x[this.unit]}>`;
	}
};
Lt[Symbol.toStringTag] = ((t) => (t.unit = null, t.ArrayType = BigInt64Array, t[Symbol.toStringTag] = "Duration"))(Lt.prototype);
var Ft = class extends ot {
	constructor(t) {
		super(_.List), this.children = [t];
	}
	toString() {
		return `List<${this.valueType}>`;
	}
	get valueType() {
		return this.children[0].type;
	}
	get valueField() {
		return this.children[0];
	}
	get ArrayType() {
		return this.valueType.ArrayType;
	}
};
Ft[Symbol.toStringTag] = ((t) => (t.children = null, t[Symbol.toStringTag] = "List"))(Ft.prototype);
var xt = class extends ot {
	constructor(t) {
		super(_.LargeList), this.children = [t];
	}
	toString() {
		return `LargeList<${this.valueType}>`;
	}
	get valueType() {
		return this.children[0].type;
	}
	get valueField() {
		return this.children[0];
	}
	get ArrayType() {
		return this.valueType.ArrayType;
	}
};
xt[Symbol.toStringTag] = ((t) => (t.children = null, t.OffsetArrayType = BigInt64Array, t[Symbol.toStringTag] = "LargeList"))(xt.prototype);
var Ct = class extends ot {
	constructor(t) {
		super(_.Struct), this.children = t;
	}
	toString() {
		return `Struct<{${this.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
	}
};
it = Symbol.toStringTag, Ct[it] = ((t) => (t.children = null, t[Symbol.toStringTag] = "Struct"))(Ct.prototype);
var _t = class extends ot {
	constructor(t, e, i) {
		super(_.Union), this.mode = t, this.children = i, this.typeIds = e = Int32Array.from(e), this.typeIdToChildIndex = e.reduce((t, e, i) => (t[e] = i) && t || t, Object.create(null));
	}
	toString() {
		return `${this[Symbol.toStringTag]}<${this.children.map((t) => `${t.type}`).join(" | ")}>`;
	}
};
_t[Symbol.toStringTag] = ((t) => (t.mode = null, t.typeIds = null, t.children = null, t.typeIdToChildIndex = null, t.ArrayType = Int8Array, t[Symbol.toStringTag] = "Union"))(_t.prototype);
var kt = class extends ot {
	constructor(t) {
		super(_.FixedSizeBinary), this.byteWidth = t;
	}
	toString() {
		return `FixedSizeBinary[${this.byteWidth}]`;
	}
};
kt[Symbol.toStringTag] = ((t) => (t.byteWidth = null, t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "FixedSizeBinary"))(kt.prototype);
var Vt = class extends ot {
	constructor(t, e) {
		super(_.FixedSizeList), this.listSize = t, this.children = [e];
	}
	get valueType() {
		return this.children[0].type;
	}
	get valueField() {
		return this.children[0];
	}
	get ArrayType() {
		return this.valueType.ArrayType;
	}
	toString() {
		return `FixedSizeList[${this.listSize}]<${this.valueType}>`;
	}
};
Vt[Symbol.toStringTag] = ((t) => (t.children = null, t.listSize = null, t[Symbol.toStringTag] = "FixedSizeList"))(Vt.prototype);
var jt = class extends ot {
	constructor(t, e = !1) {
		var i, n, r;
		if (super(_.Map), this.children = [t], this.keysSorted = e, t && (t.name = "entries", null === (i = null == t ? void 0 : t.type) || void 0 === i ? void 0 : i.children)) {
			const e = null === (n = null == t ? void 0 : t.type) || void 0 === n ? void 0 : n.children[0];
			e && (e.name = "key");
			const i = null === (r = null == t ? void 0 : t.type) || void 0 === r ? void 0 : r.children[1];
			i && (i.name = "value");
		}
	}
	get keyType() {
		return this.children[0].type.children[0].type;
	}
	get valueType() {
		return this.children[0].type.children[1].type;
	}
	get childType() {
		return this.children[0].type;
	}
	toString() {
		return `Map<{${this.children[0].type.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
	}
};
jt[Symbol.toStringTag] = ((t) => (t.children = null, t.keysSorted = null, t[Symbol.toStringTag] = "Map_"))(jt.prototype);
const $t = (zt = -1, () => ++zt);
var zt, Rt = class extends ot {
	constructor(t, e, i, n) {
		super(_.Dictionary), this.indices = e, this.dictionary = t, this.isOrdered = n || !1, this.id = null == i ? $t() : j(i);
	}
	get children() {
		return this.dictionary.children;
	}
	get valueType() {
		return this.dictionary;
	}
	get ArrayType() {
		return this.dictionary.ArrayType;
	}
	toString() {
		return `Dictionary<${this.indices}, ${this.dictionary}>`;
	}
};
function Pt(t) {
	const e = t;
	switch (t.typeId) {
		case _.Decimal: return t.bitWidth / 32;
		case _.Interval: return e.unit === C.MONTH_DAY_NANO ? 4 : 1 + e.unit;
		case _.BinaryView:
		case _.Utf8View: return 16;
		case _.FixedSizeList: return e.listSize;
		case _.FixedSizeBinary: return e.byteWidth;
		default: return 1;
	}
}
Rt[Symbol.toStringTag] = ((t) => (t.id = null, t.indices = null, t.isOrdered = null, t.dictionary = null, t[Symbol.toStringTag] = "Dictionary"))(Rt.prototype);
var Yt = class {
	visitMany(t, ...e) {
		return t.map((t, i) => this.visit(t, ...e.map((t) => t[i])));
	}
	visit(...t) {
		return this.getVisitFn(t[0], !1).apply(this, t);
	}
	getVisitFn(t, e = !0) {
		return function(t, e, i = !0) {
			return "number" == typeof e ? Wt(t, e, i) : "string" == typeof e && e in _ ? Wt(t, _[e], i) : e && e instanceof ot ? Wt(t, Ht(e), i) : (null == e ? void 0 : e.type) && e.type instanceof ot ? Wt(t, Ht(e.type), i) : Wt(t, _.NONE, i);
		}(this, t, e);
	}
	getVisitFnByTypeId(t, e = !0) {
		return Wt(this, t, e);
	}
	visitNull(t, ...e) {
		return null;
	}
	visitBool(t, ...e) {
		return null;
	}
	visitInt(t, ...e) {
		return null;
	}
	visitFloat(t, ...e) {
		return null;
	}
	visitUtf8(t, ...e) {
		return null;
	}
	visitLargeUtf8(t, ...e) {
		return null;
	}
	visitUtf8View(t, ...e) {
		return null;
	}
	visitBinary(t, ...e) {
		return null;
	}
	visitLargeBinary(t, ...e) {
		return null;
	}
	visitBinaryView(t, ...e) {
		return null;
	}
	visitFixedSizeBinary(t, ...e) {
		return null;
	}
	visitDate(t, ...e) {
		return null;
	}
	visitTimestamp(t, ...e) {
		return null;
	}
	visitTime(t, ...e) {
		return null;
	}
	visitDecimal(t, ...e) {
		return null;
	}
	visitList(t, ...e) {
		return null;
	}
	visitLargeList(t, ...e) {
		return null;
	}
	visitStruct(t, ...e) {
		return null;
	}
	visitUnion(t, ...e) {
		return null;
	}
	visitDictionary(t, ...e) {
		return null;
	}
	visitInterval(t, ...e) {
		return null;
	}
	visitDuration(t, ...e) {
		return null;
	}
	visitFixedSizeList(t, ...e) {
		return null;
	}
	visitMap(t, ...e) {
		return null;
	}
};
function Wt(t, e, i = !0) {
	let n = null;
	switch (e) {
		case _.Null:
			n = t.visitNull;
			break;
		case _.Bool:
			n = t.visitBool;
			break;
		case _.Int:
			n = t.visitInt;
			break;
		case _.Int8:
			n = t.visitInt8 || t.visitInt;
			break;
		case _.Int16:
			n = t.visitInt16 || t.visitInt;
			break;
		case _.Int32:
			n = t.visitInt32 || t.visitInt;
			break;
		case _.Int64:
			n = t.visitInt64 || t.visitInt;
			break;
		case _.Uint8:
			n = t.visitUint8 || t.visitInt;
			break;
		case _.Uint16:
			n = t.visitUint16 || t.visitInt;
			break;
		case _.Uint32:
			n = t.visitUint32 || t.visitInt;
			break;
		case _.Uint64:
			n = t.visitUint64 || t.visitInt;
			break;
		case _.Float:
			n = t.visitFloat;
			break;
		case _.Float16:
			n = t.visitFloat16 || t.visitFloat;
			break;
		case _.Float32:
			n = t.visitFloat32 || t.visitFloat;
			break;
		case _.Float64:
			n = t.visitFloat64 || t.visitFloat;
			break;
		case _.Utf8:
			n = t.visitUtf8;
			break;
		case _.LargeUtf8:
			n = t.visitLargeUtf8;
			break;
		case _.Utf8View:
			n = t.visitUtf8View || t.visitUtf8;
			break;
		case _.Binary:
			n = t.visitBinary;
			break;
		case _.LargeBinary:
			n = t.visitLargeBinary;
			break;
		case _.BinaryView:
			n = t.visitBinaryView || t.visitBinary;
			break;
		case _.FixedSizeBinary:
			n = t.visitFixedSizeBinary;
			break;
		case _.Date:
			n = t.visitDate;
			break;
		case _.DateDay:
			n = t.visitDateDay || t.visitDate;
			break;
		case _.DateMillisecond:
			n = t.visitDateMillisecond || t.visitDate;
			break;
		case _.Timestamp:
			n = t.visitTimestamp;
			break;
		case _.TimestampSecond:
			n = t.visitTimestampSecond || t.visitTimestamp;
			break;
		case _.TimestampMillisecond:
			n = t.visitTimestampMillisecond || t.visitTimestamp;
			break;
		case _.TimestampMicrosecond:
			n = t.visitTimestampMicrosecond || t.visitTimestamp;
			break;
		case _.TimestampNanosecond:
			n = t.visitTimestampNanosecond || t.visitTimestamp;
			break;
		case _.Time:
			n = t.visitTime;
			break;
		case _.TimeSecond:
			n = t.visitTimeSecond || t.visitTime;
			break;
		case _.TimeMillisecond:
			n = t.visitTimeMillisecond || t.visitTime;
			break;
		case _.TimeMicrosecond:
			n = t.visitTimeMicrosecond || t.visitTime;
			break;
		case _.TimeNanosecond:
			n = t.visitTimeNanosecond || t.visitTime;
			break;
		case _.Decimal:
			n = t.visitDecimal;
			break;
		case _.List:
			n = t.visitList;
			break;
		case _.LargeList:
			n = t.visitLargeList;
			break;
		case _.Struct:
			n = t.visitStruct;
			break;
		case _.Union:
			n = t.visitUnion;
			break;
		case _.DenseUnion:
			n = t.visitDenseUnion || t.visitUnion;
			break;
		case _.SparseUnion:
			n = t.visitSparseUnion || t.visitUnion;
			break;
		case _.Dictionary:
			n = t.visitDictionary;
			break;
		case _.Interval:
			n = t.visitInterval;
			break;
		case _.IntervalDayTime:
			n = t.visitIntervalDayTime || t.visitInterval;
			break;
		case _.IntervalYearMonth:
			n = t.visitIntervalYearMonth || t.visitInterval;
			break;
		case _.IntervalMonthDayNano:
			n = t.visitIntervalMonthDayNano || t.visitInterval;
			break;
		case _.Duration:
			n = t.visitDuration;
			break;
		case _.DurationSecond:
			n = t.visitDurationSecond || t.visitDuration;
			break;
		case _.DurationMillisecond:
			n = t.visitDurationMillisecond || t.visitDuration;
			break;
		case _.DurationMicrosecond:
			n = t.visitDurationMicrosecond || t.visitDuration;
			break;
		case _.DurationNanosecond:
			n = t.visitDurationNanosecond || t.visitDuration;
			break;
		case _.FixedSizeList:
			n = t.visitFixedSizeList;
			break;
		case _.Map: n = t.visitMap;
	}
	if ("function" == typeof n) return n;
	if (!i) return () => null;
	throw new Error(`Unrecognized type '${_[e]}'`);
}
function Ht(t) {
	switch (t.typeId) {
		case _.Null: return _.Null;
		case _.Int: {
			const { bitWidth: e, isSigned: i } = t;
			switch (e) {
				case 8: return i ? _.Int8 : _.Uint8;
				case 16: return i ? _.Int16 : _.Uint16;
				case 32: return i ? _.Int32 : _.Uint32;
				case 64: return i ? _.Int64 : _.Uint64;
			}
			return _.Int;
		}
		case _.Float:
			switch (t.precision) {
				case L.HALF: return _.Float16;
				case L.SINGLE: return _.Float32;
				case L.DOUBLE: return _.Float64;
			}
			return _.Float;
		case _.Binary: return _.Binary;
		case _.LargeBinary: return _.LargeBinary;
		case _.BinaryView: return _.BinaryView;
		case _.Utf8: return _.Utf8;
		case _.LargeUtf8: return _.LargeUtf8;
		case _.Utf8View: return _.Utf8View;
		case _.Bool: return _.Bool;
		case _.Decimal: return _.Decimal;
		case _.Time:
			switch (t.unit) {
				case x.SECOND: return _.TimeSecond;
				case x.MILLISECOND: return _.TimeMillisecond;
				case x.MICROSECOND: return _.TimeMicrosecond;
				case x.NANOSECOND: return _.TimeNanosecond;
			}
			return _.Time;
		case _.Timestamp:
			switch (t.unit) {
				case x.SECOND: return _.TimestampSecond;
				case x.MILLISECOND: return _.TimestampMillisecond;
				case x.MICROSECOND: return _.TimestampMicrosecond;
				case x.NANOSECOND: return _.TimestampNanosecond;
			}
			return _.Timestamp;
		case _.Date:
			switch (t.unit) {
				case F.DAY: return _.DateDay;
				case F.MILLISECOND: return _.DateMillisecond;
			}
			return _.Date;
		case _.Interval:
			switch (t.unit) {
				case C.DAY_TIME: return _.IntervalDayTime;
				case C.YEAR_MONTH: return _.IntervalYearMonth;
				case C.MONTH_DAY_NANO: return _.IntervalMonthDayNano;
			}
			return _.Interval;
		case _.Duration:
			switch (t.unit) {
				case x.SECOND: return _.DurationSecond;
				case x.MILLISECOND: return _.DurationMillisecond;
				case x.MICROSECOND: return _.DurationMicrosecond;
				case x.NANOSECOND: return _.DurationNanosecond;
			}
			return _.Duration;
		case _.Map: return _.Map;
		case _.List: return _.List;
		case _.LargeList: return _.LargeList;
		case _.Struct: return _.Struct;
		case _.Union:
			switch (t.mode) {
				case U.Dense: return _.DenseUnion;
				case U.Sparse: return _.SparseUnion;
			}
			return _.Union;
		case _.FixedSizeBinary: return _.FixedSizeBinary;
		case _.FixedSizeList: return _.FixedSizeList;
		case _.Dictionary: return _.Dictionary;
	}
	throw new Error(`Unrecognized type '${_[t.typeId]}'`);
}
Yt.prototype.visitInt8 = null, Yt.prototype.visitInt16 = null, Yt.prototype.visitInt32 = null, Yt.prototype.visitInt64 = null, Yt.prototype.visitUint8 = null, Yt.prototype.visitUint16 = null, Yt.prototype.visitUint32 = null, Yt.prototype.visitUint64 = null, Yt.prototype.visitFloat16 = null, Yt.prototype.visitFloat32 = null, Yt.prototype.visitFloat64 = null, Yt.prototype.visitDateDay = null, Yt.prototype.visitDateMillisecond = null, Yt.prototype.visitTimestampSecond = null, Yt.prototype.visitTimestampMillisecond = null, Yt.prototype.visitTimestampMicrosecond = null, Yt.prototype.visitTimestampNanosecond = null, Yt.prototype.visitTimeSecond = null, Yt.prototype.visitTimeMillisecond = null, Yt.prototype.visitTimeMicrosecond = null, Yt.prototype.visitTimeNanosecond = null, Yt.prototype.visitDenseUnion = null, Yt.prototype.visitSparseUnion = null, Yt.prototype.visitIntervalDayTime = null, Yt.prototype.visitIntervalYearMonth = null, Yt.prototype.visitIntervalMonthDayNano = null, Yt.prototype.visitDuration = null, Yt.prototype.visitDurationSecond = null, Yt.prototype.visitDurationMillisecond = null, Yt.prototype.visitDurationMicrosecond = null, Yt.prototype.visitDurationNanosecond = null;
const Gt = /* @__PURE__ */ new Float64Array(1), qt = new Uint32Array(Gt.buffer);
function Jt(t) {
	const e = (31744 & t) >> 10, i = (1023 & t) / 1024, n = Math.pow(-1, (32768 & t) >> 15);
	switch (e) {
		case 31: return n * (i ? NaN : 1 / 0);
		case 0: return n * (i ? 6103515625e-14 * i : 0);
	}
	return n * Math.pow(2, e - 15) * (1 + i);
}
var Xt = class extends Yt {};
function Kt(t) {
	return (e, i, n) => {
		if (e.setValid(i, null != n)) return t(e, i, n);
	};
}
const Zt = (t, e, i, n) => {
	if (i + 1 < e.length) {
		const r = j(e[i]), s = j(e[i + 1]);
		t.set(n.subarray(0, s - r), r);
	}
}, Qt = ({ values: t }, e, i) => {
	t[e] = i;
}, te = ({ values: t }, e, i) => {
	t[e] = i;
}, ee = ({ values: t }, e, i) => {
	t[e] = function(t) {
		if (t != t) return 32256;
		Gt[0] = t;
		const e = (2147483648 & qt[1]) >> 16 & 65535;
		let i = 2146435072 & qt[1], n = 0;
		return i >= 1089470464 ? qt[0] > 0 ? i = 31744 : (i = (2080374784 & i) >> 16, n = (1048575 & qt[1]) >> 10) : i <= 1056964608 ? (n = 1048576 + (1048575 & qt[1]), n = 1048576 + (n << (i >> 20) - 998) >> 21, i = 0) : (i = i - 1056964608 >> 10, n = 512 + (1048575 & qt[1]) >> 10), e | i | 65535 & n;
	}(i);
}, ie = ({ values: t }, e, i) => {
	((t, e, i) => {
		t[e] = Math.floor(i / 864e5);
	})(t, e, i.valueOf());
}, ne = ({ values: t }, e, i) => {
	t[e] = BigInt(i);
}, re = ({ values: t, valueOffsets: e }, i, n) => Zt(t, e, i, n), se = (t, e, i) => {
	var n, r, s, o;
	const a = t.values;
	if (!a) throw new Error("BinaryView data is missing view buffer");
	const l = wt.ELEMENT_WIDTH, c = e * l, u = c + l;
	if (c < 0 || u > a.length) throw new RangeError(`BinaryView index ${e} out of bounds`);
	a.fill(0, c, u);
	const p = new DataView(a.buffer, a.byteOffset + c, l), y = i.length;
	if (p.setInt32(wt.LENGTH_OFFSET, y, !0), y <= wt.INLINE_CAPACITY) return void a.set(i, c + wt.INLINE_OFFSET);
	const d = (null !== (n = i[0]) && void 0 !== n ? n : 0) | (null !== (r = i[1]) && void 0 !== r ? r : 0) << 8 | (null !== (s = i[2]) && void 0 !== s ? s : 0) << 16 | (null !== (o = i[3]) && void 0 !== o ? o : 0) << 24;
	p.setUint32(wt.INLINE_OFFSET, d >>> 0, !0);
	const h = ((t) => {
		let e = t.variadicBuffers;
		return Array.isArray(e) && !Object.isFrozen(e) || (e = Array.from(e), t.variadicBuffers = e), e;
	})(t), f = i.slice(), v = h.push(f) - 1;
	p.setInt32(wt.BUFFER_INDEX_OFFSET, v, !0), p.setInt32(wt.BUFFER_OFFSET_OFFSET, 0, !0);
}, oe = ({ values: t, valueOffsets: e }, i, n) => Zt(t, e, i, I(n)), ae = ({ values: t }, e, i) => {
	t[e] = BigInt(i / 1e3);
}, le = ({ values: t }, e, i) => {
	t[e] = BigInt(i);
}, ce = ({ values: t }, e, i) => {
	t[e] = BigInt(1e3 * i);
}, ue = ({ values: t }, e, i) => {
	t[e] = BigInt(1e6 * i);
}, pe = ({ values: t }, e, i) => {
	t[e] = i;
}, ye = ({ values: t }, e, i) => {
	t[e] = i;
}, de = ({ values: t }, e, i) => {
	t[e] = i;
}, he = ({ values: t }, e, i) => {
	t[e] = i;
}, fe = (t, e, i) => {
	const n = t.children[0], r = t.valueOffsets, s = De.getVisitFn(n), o = j(r[e]), a = j(r[e + 1]);
	if (Array.isArray(i)) for (let l = -1, c = o; c < a;) s(n, c++, i[++l]);
	else for (let l = -1, c = o; c < a;) s(n, c++, i.get(++l));
}, ve = (t, e, i) => {
	const n = t.type.typeIdToChildIndex[t.typeIds[e]], r = t.children[n];
	De.visit(r, t.valueOffsets[e], i);
}, me = (t, e, i) => {
	const n = t.type.typeIdToChildIndex[t.typeIds[e]], r = t.children[n];
	De.visit(r, e, i);
}, ge = ({ values: t }, e, i) => {
	t.set(i.subarray(0, 2), 2 * e);
}, be = ({ values: t }, e, i) => {
	t[e] = 12 * i[0] + i[1] % 12;
}, Se = ({ values: t, stride: e }, i, n) => {
	t.set(n.subarray(0, e), e * i);
}, we = ({ values: t }, e, i) => {
	t[e] = i;
}, Ie = ({ values: t }, e, i) => {
	t[e] = i;
}, Te = ({ values: t }, e, i) => {
	t[e] = i;
}, Ae = ({ values: t }, e, i) => {
	t[e] = i;
};
Xt.prototype.visitBool = Kt(({ offset: t, values: e }, i, n) => {
	const r = t + i;
	n ? e[r >> 3] |= 1 << r % 8 : e[r >> 3] &= ~(1 << r % 8);
}), Xt.prototype.visitInt = Kt(Qt), Xt.prototype.visitInt8 = Kt(Qt), Xt.prototype.visitInt16 = Kt(Qt), Xt.prototype.visitInt32 = Kt(Qt), Xt.prototype.visitInt64 = Kt(Qt), Xt.prototype.visitUint8 = Kt(Qt), Xt.prototype.visitUint16 = Kt(Qt), Xt.prototype.visitUint32 = Kt(Qt), Xt.prototype.visitUint64 = Kt(Qt), Xt.prototype.visitFloat = Kt((t, e, i) => {
	switch (t.type.precision) {
		case L.HALF: return ee(t, e, i);
		case L.SINGLE:
		case L.DOUBLE: return te(t, e, i);
	}
}), Xt.prototype.visitFloat16 = Kt(ee), Xt.prototype.visitFloat32 = Kt(te), Xt.prototype.visitFloat64 = Kt(te), Xt.prototype.visitUtf8 = Kt(oe), Xt.prototype.visitLargeUtf8 = Kt(oe), Xt.prototype.visitUtf8View = Kt((t, e, i) => {
	const n = I(i);
	se(t, e, n);
}), Xt.prototype.visitBinary = Kt(re), Xt.prototype.visitLargeBinary = Kt(re), Xt.prototype.visitBinaryView = Kt((t, e, i) => {
	const n = i instanceof Uint8Array ? i : new Uint8Array(i);
	se(t, e, n);
}), Xt.prototype.visitFixedSizeBinary = Kt(({ stride: t, values: e }, i, n) => {
	e.set(n.subarray(0, t), t * i);
}), Xt.prototype.visitDate = Kt((t, e, i) => {
	t.type.unit === F.DAY ? ie(t, e, i) : ne(t, e, i);
}), Xt.prototype.visitDateDay = Kt(ie), Xt.prototype.visitDateMillisecond = Kt(ne), Xt.prototype.visitTimestamp = Kt((t, e, i) => {
	switch (t.type.unit) {
		case x.SECOND: return ae(t, e, i);
		case x.MILLISECOND: return le(t, e, i);
		case x.MICROSECOND: return ce(t, e, i);
		case x.NANOSECOND: return ue(t, e, i);
	}
}), Xt.prototype.visitTimestampSecond = Kt(ae), Xt.prototype.visitTimestampMillisecond = Kt(le), Xt.prototype.visitTimestampMicrosecond = Kt(ce), Xt.prototype.visitTimestampNanosecond = Kt(ue), Xt.prototype.visitTime = Kt((t, e, i) => {
	switch (t.type.unit) {
		case x.SECOND: return pe(t, e, i);
		case x.MILLISECOND: return ye(t, e, i);
		case x.MICROSECOND: return de(t, e, i);
		case x.NANOSECOND: return he(t, e, i);
	}
}), Xt.prototype.visitTimeSecond = Kt(pe), Xt.prototype.visitTimeMillisecond = Kt(ye), Xt.prototype.visitTimeMicrosecond = Kt(de), Xt.prototype.visitTimeNanosecond = Kt(he), Xt.prototype.visitDecimal = Kt(({ values: t, stride: e }, i, n) => {
	t.set(n.subarray(0, e), e * i);
}), Xt.prototype.visitList = Kt(fe), Xt.prototype.visitLargeList = Kt(fe), Xt.prototype.visitStruct = Kt((t, e, i) => {
	const n = t.type.children.map((t) => De.getVisitFn(t.type)), r = i instanceof Map ? (s = e, o = i, (t, e, i, n) => e && t(e, s, o.get(i.name))) : i instanceof Ki ? ((t, e) => (i, n, r, s) => n && i(n, t, e.get(s)))(e, i) : Array.isArray(i) ? ((t, e) => (i, n, r, s) => n && i(n, t, e[s]))(e, i) : ((t, e) => (i, n, r, s) => n && i(n, t, e[r.name]))(e, i);
	var s, o;
	t.type.children.forEach((e, i) => r(n[i], t.children[i], e, i));
}), Xt.prototype.visitUnion = Kt((t, e, i) => {
	t.type.mode === U.Dense ? ve(t, e, i) : me(t, e, i);
}), Xt.prototype.visitDenseUnion = Kt(ve), Xt.prototype.visitSparseUnion = Kt(me), Xt.prototype.visitDictionary = Kt((t, e, i) => {
	var n;
	null === (n = t.dictionary) || void 0 === n || n.set(t.values[e], i);
}), Xt.prototype.visitInterval = Kt((t, e, i) => {
	switch (t.type.unit) {
		case C.YEAR_MONTH: return be(t, e, i);
		case C.DAY_TIME: return ge(t, e, i);
		case C.MONTH_DAY_NANO: return Se(t, e, i);
	}
}), Xt.prototype.visitIntervalDayTime = Kt(ge), Xt.prototype.visitIntervalYearMonth = Kt(be), Xt.prototype.visitIntervalMonthDayNano = Kt(Se), Xt.prototype.visitDuration = Kt((t, e, i) => {
	switch (t.type.unit) {
		case x.SECOND: return we(t, e, i);
		case x.MILLISECOND: return Ie(t, e, i);
		case x.MICROSECOND: return Te(t, e, i);
		case x.NANOSECOND: return Ae(t, e, i);
	}
}), Xt.prototype.visitDurationSecond = Kt(we), Xt.prototype.visitDurationMillisecond = Kt(Ie), Xt.prototype.visitDurationMicrosecond = Kt(Te), Xt.prototype.visitDurationNanosecond = Kt(Ae), Xt.prototype.visitFixedSizeList = Kt((t, e, i) => {
	const { stride: n } = t, r = t.children[0], s = De.getVisitFn(r);
	if (Array.isArray(i)) for (let o = -1, a = e * n; ++o < n;) s(r, a + o, i[o]);
	else for (let o = -1, a = e * n; ++o < n;) s(r, a + o, i.get(o));
}), Xt.prototype.visitMap = Kt((t, e, i) => {
	const n = t.children[0], { valueOffsets: r } = t, s = De.getVisitFn(n);
	let { [e]: o, [e + 1]: a } = r;
	const l = i instanceof Map ? i.entries() : Object.entries(i);
	for (const c of l) if (s(n, o, c), ++o >= a) break;
});
const De = new Xt(), Be = Symbol.for("parent"), Oe = Symbol.for("rowIndex");
var Me = class {
	constructor(t, e) {
		return this[Be] = t, this[Oe] = e, new Proxy(this, Ne);
	}
	toArray() {
		return Object.values(this.toJSON());
	}
	toJSON() {
		const t = this[Oe], e = this[Be], i = e.type.children, n = {};
		for (let r = -1, s = i.length; ++r < s;) n[i[r].name] = si.visit(e.children[r], t);
		return n;
	}
	toString() {
		return `{${[...this].map(([t, e]) => `${V(t)}: ${V(e)}`).join(", ")}}`;
	}
	[Symbol.for("nodejs.util.inspect.custom")]() {
		return this.toString();
	}
	[Symbol.iterator]() {
		return new Ee(this[Be], this[Oe]);
	}
}, Ee = class {
	constructor(t, e) {
		this.childIndex = 0, this.children = t.children, this.rowIndex = e, this.childFields = t.type.children, this.numChildren = this.childFields.length;
	}
	[Symbol.iterator]() {
		return this;
	}
	next() {
		const t = this.childIndex;
		return t < this.numChildren ? (this.childIndex = t + 1, {
			done: !1,
			value: [this.childFields[t].name, si.visit(this.children[t], this.rowIndex)]
		}) : {
			done: !0,
			value: null
		};
	}
};
Object.defineProperties(Me.prototype, {
	[Symbol.toStringTag]: {
		enumerable: !1,
		configurable: !1,
		value: "Row"
	},
	[Be]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	},
	[Oe]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: -1
	}
});
const Ne = new class {
	isExtensible() {
		return !1;
	}
	deleteProperty() {
		return !1;
	}
	preventExtensions() {
		return !0;
	}
	ownKeys(t) {
		return t[Be].type.children.map((t) => t.name);
	}
	has(t, e) {
		return t[Be].type.children.some((t) => t.name === e);
	}
	getOwnPropertyDescriptor(t, e) {
		if (t[Be].type.children.some((t) => t.name === e)) return {
			writable: !0,
			enumerable: !0,
			configurable: !0
		};
	}
	get(t, e) {
		if (Reflect.has(t, e)) return t[e];
		const i = t[Be].type.children.findIndex((t) => t.name === e);
		if (-1 !== i) {
			const n = si.visit(t[Be].children[i], t[Oe]);
			return Reflect.set(t, e, n), n;
		}
	}
	set(t, e, i) {
		const n = t[Be].type.children.findIndex((t) => t.name === e);
		return -1 !== n ? (De.visit(t[Be].children[n], t[Oe], i), Reflect.set(t, e, i)) : !(!Reflect.has(t, e) && "symbol" != typeof e) && Reflect.set(t, e, i);
	}
}();
var Ue = class extends Yt {};
function Le(t) {
	return (e, i) => e.getValid(i) ? t(e, i) : null;
}
const Fe = (t, e, i) => {
	if (i + 1 >= e.length) return null;
	const n = j(e[i]), r = j(e[i + 1]);
	return t.subarray(n, r);
}, xe = ({ values: t }, e) => ((t, e) => 864e5 * t[e])(t, e), Ce = ({ values: t }, e) => j(t[e]), _e = ({ stride: t, values: e }, i) => e[t * i], ke = ({ values: t }, e) => t[e], Ve = ({ values: t, valueOffsets: e }, i) => Fe(t, e, i), je = (t, e) => {
	var i;
	const n = t.values;
	if (!n) throw new Error("BinaryView data is missing view buffer");
	const r = 16 * e, s = r + 16;
	if (r < 0 || s > n.length) throw new Error(`BinaryView data buffer is too short: expected 16 bytes, got ${Math.max(0, n.length - r)}`);
	const o = n.subarray(r, s);
	if (o.length < 16) throw new Error(`BinaryView data buffer is too short: expected 16 bytes, got ${o.length}`);
	const a = new DataView(n.buffer, o.byteOffset, 16), l = a.getInt32(0, !0);
	if (l <= 0) return /* @__PURE__ */ new Uint8Array(0);
	if (l <= 12) return o.subarray(4, 4 + l);
	const c = a.getInt32(8, !0), u = a.getInt32(12, !0), p = null === (i = t.variadicBuffers) || void 0 === i ? void 0 : i[c];
	if (!p) throw new Error(`BinaryView variadic buffer ${c} is missing`);
	return p.subarray(u, u + l);
}, $e = ({ values: t, valueOffsets: e }, i) => {
	const n = Fe(t, e, i);
	return null !== n ? S(n) : null;
}, ze = ({ values: t }, e) => 1e3 * j(t[e]), Re = ({ values: t }, e) => j(t[e]), Pe = ({ values: t }, e) => $(t[e], BigInt(1e3)), Ye = ({ values: t }, e) => $(t[e], BigInt(1e6)), We = ({ values: t }, e) => t[e], He = ({ values: t }, e) => t[e], Ge = ({ values: t }, e) => t[e], qe = ({ values: t }, e) => t[e], Je = (t, e) => {
	const { valueOffsets: i, stride: n, children: r } = t, s = j(i[e * n]), o = j(i[e * n + 1]);
	return new Ki([r[0].slice(s, o - s)]);
}, Xe = (t, e) => {
	const i = t.type.typeIdToChildIndex[t.typeIds[e]], n = t.children[i];
	return si.visit(n, t.valueOffsets[e]);
}, Ke = (t, e) => {
	const i = t.type.typeIdToChildIndex[t.typeIds[e]], n = t.children[i];
	return si.visit(n, e);
}, Ze = ({ values: t }, e) => t.subarray(2 * e, 2 * (e + 1)), Qe = ({ values: t }, e) => {
	const i = t[e], n = /* @__PURE__ */ new Int32Array(2);
	return n[0] = Math.trunc(i / 12), n[1] = Math.trunc(i % 12), n;
}, ti = ({ values: t }, e) => t.subarray(4 * e, 4 * (e + 1)), ei = ({ values: t }, e) => t[e], ii = ({ values: t }, e) => t[e], ni = ({ values: t }, e) => t[e], ri = ({ values: t }, e) => t[e];
Ue.prototype.visitNull = Le((t, e) => null), Ue.prototype.visitBool = Le(({ offset: t, values: e }, i) => {
	const n = t + i;
	return !!(e[n >> 3] & 1 << n % 8);
}), Ue.prototype.visitInt = Le(({ values: t }, e) => t[e]), Ue.prototype.visitInt8 = Le(_e), Ue.prototype.visitInt16 = Le(_e), Ue.prototype.visitInt32 = Le(_e), Ue.prototype.visitInt64 = Le(ke), Ue.prototype.visitUint8 = Le(_e), Ue.prototype.visitUint16 = Le(_e), Ue.prototype.visitUint32 = Le(_e), Ue.prototype.visitUint64 = Le(ke), Ue.prototype.visitFloat = Le(({ type: t, values: e }, i) => t.precision !== L.HALF ? e[i] : Jt(e[i])), Ue.prototype.visitFloat16 = Le(({ stride: t, values: e }, i) => Jt(e[t * i])), Ue.prototype.visitFloat32 = Le(_e), Ue.prototype.visitFloat64 = Le(_e), Ue.prototype.visitUtf8 = Le($e), Ue.prototype.visitLargeUtf8 = Le($e), Ue.prototype.visitUtf8View = Le((t, e) => {
	const i = je(t, e);
	return S(i);
}), Ue.prototype.visitBinary = Le(Ve), Ue.prototype.visitLargeBinary = Le(Ve), Ue.prototype.visitBinaryView = Le((t, e) => je(t, e)), Ue.prototype.visitFixedSizeBinary = Le(({ stride: t, values: e }, i) => e.subarray(t * i, t * (i + 1))), Ue.prototype.visitDate = Le((t, e) => t.type.unit === F.DAY ? xe(t, e) : Ce(t, e)), Ue.prototype.visitDateDay = Le(xe), Ue.prototype.visitDateMillisecond = Le(Ce), Ue.prototype.visitTimestamp = Le((t, e) => {
	switch (t.type.unit) {
		case x.SECOND: return ze(t, e);
		case x.MILLISECOND: return Re(t, e);
		case x.MICROSECOND: return Pe(t, e);
		case x.NANOSECOND: return Ye(t, e);
	}
}), Ue.prototype.visitTimestampSecond = Le(ze), Ue.prototype.visitTimestampMillisecond = Le(Re), Ue.prototype.visitTimestampMicrosecond = Le(Pe), Ue.prototype.visitTimestampNanosecond = Le(Ye), Ue.prototype.visitTime = Le((t, e) => {
	switch (t.type.unit) {
		case x.SECOND: return We(t, e);
		case x.MILLISECOND: return He(t, e);
		case x.MICROSECOND: return Ge(t, e);
		case x.NANOSECOND: return qe(t, e);
	}
}), Ue.prototype.visitTimeSecond = Le(We), Ue.prototype.visitTimeMillisecond = Le(He), Ue.prototype.visitTimeMicrosecond = Le(Ge), Ue.prototype.visitTimeNanosecond = Le(qe), Ue.prototype.visitDecimal = Le(({ values: t, stride: e }, i) => nt.decimal(t.subarray(e * i, e * (i + 1)))), Ue.prototype.visitList = Le(Je), Ue.prototype.visitLargeList = Le(Je), Ue.prototype.visitStruct = Le((t, e) => new Me(t, e)), Ue.prototype.visitUnion = Le((t, e) => t.type.mode === U.Dense ? Xe(t, e) : Ke(t, e)), Ue.prototype.visitDenseUnion = Le(Xe), Ue.prototype.visitSparseUnion = Le(Ke), Ue.prototype.visitDictionary = Le((t, e) => {
	var i;
	return null === (i = t.dictionary) || void 0 === i ? void 0 : i.get(t.values[e]);
}), Ue.prototype.visitInterval = Le((t, e) => t.type.unit === C.MONTH_DAY_NANO ? ti(t, e) : t.type.unit === C.DAY_TIME ? Ze(t, e) : Qe(t, e)), Ue.prototype.visitIntervalDayTime = Le(Ze), Ue.prototype.visitIntervalYearMonth = Le(Qe), Ue.prototype.visitIntervalMonthDayNano = Le(ti), Ue.prototype.visitDuration = Le((t, e) => {
	switch (t.type.unit) {
		case x.SECOND: return ei(t, e);
		case x.MILLISECOND: return ii(t, e);
		case x.MICROSECOND: return ni(t, e);
		case x.NANOSECOND: return ri(t, e);
	}
}), Ue.prototype.visitDurationSecond = Le(ei), Ue.prototype.visitDurationMillisecond = Le(ii), Ue.prototype.visitDurationMicrosecond = Le(ni), Ue.prototype.visitDurationNanosecond = Le(ri), Ue.prototype.visitFixedSizeList = Le((t, e) => {
	const { stride: i, children: n } = t;
	return new Ki([n[0].slice(e * i, i)]);
}), Ue.prototype.visitMap = Le((t, e) => {
	const { valueOffsets: i, children: n } = t, { [e]: r, [e + 1]: s } = i, o = n[0];
	return new ui(o.slice(r, s - r));
});
const si = new Ue(), oi = Symbol.for("keys"), ai = Symbol.for("vals"), li = Symbol.for("kKeysAsStrings"), ci = Symbol.for("_kKeysAsStrings");
var ui = class {
	constructor(t) {
		return this[oi] = new Ki([t.children[0]]).memoize(), this[ai] = t.children[1], new Proxy(this, new yi());
	}
	get [li]() {
		return this[ci] || (this[ci] = Array.from(this[oi].toArray(), String));
	}
	[Symbol.iterator]() {
		return new pi(this[oi], this[ai]);
	}
	get size() {
		return this[oi].length;
	}
	toArray() {
		return Object.values(this.toJSON());
	}
	toJSON() {
		const t = this[oi], e = this[ai], i = {};
		for (let n = -1, r = t.length; ++n < r;) i[t.get(n)] = si.visit(e, n);
		return i;
	}
	toString() {
		return `{${[...this].map(([t, e]) => `${V(t)}: ${V(e)}`).join(", ")}}`;
	}
	[Symbol.for("nodejs.util.inspect.custom")]() {
		return this.toString();
	}
}, pi = class {
	constructor(t, e) {
		this.keys = t, this.vals = e, this.keyIndex = 0, this.numKeys = t.length;
	}
	[Symbol.iterator]() {
		return this;
	}
	next() {
		const t = this.keyIndex;
		return t === this.numKeys ? {
			done: !0,
			value: null
		} : (this.keyIndex++, {
			done: !1,
			value: [this.keys.get(t), si.visit(this.vals, t)]
		});
	}
}, yi = class {
	isExtensible() {
		return !1;
	}
	deleteProperty() {
		return !1;
	}
	preventExtensions() {
		return !0;
	}
	ownKeys(t) {
		return t[li];
	}
	has(t, e) {
		return t[li].includes(e);
	}
	getOwnPropertyDescriptor(t, e) {
		if (-1 !== t[li].indexOf(e)) return {
			writable: !0,
			enumerable: !0,
			configurable: !0
		};
	}
	get(t, e) {
		if (Reflect.has(t, e)) return t[e];
		const i = t[li].indexOf(e);
		if (-1 !== i) {
			const n = si.visit(Reflect.get(t, ai), i);
			return Reflect.set(t, e, n), n;
		}
	}
	set(t, e, i) {
		const n = t[li].indexOf(e);
		return -1 !== n ? (De.visit(Reflect.get(t, ai), n, i), Reflect.set(t, e, i)) : !!Reflect.has(t, e) && Reflect.set(t, e, i);
	}
};
let di;
function hi(t, e, i, n) {
	const { length: r = 0 } = t;
	let s = "number" != typeof e ? 0 : e, o = "number" != typeof i ? r : i;
	return s < 0 && (s = (s % r + r) % r), o < 0 && (o = (o % r + r) % r), o < s && (di = s, s = o, o = di), o > r && (o = r), n ? n(t, s, o) : [s, o];
}
Object.defineProperties(ui.prototype, {
	[Symbol.toStringTag]: {
		enumerable: !1,
		configurable: !1,
		value: "Row"
	},
	[oi]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	},
	[ai]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	},
	[ci]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	}
});
const fi = (t, e) => t < 0 ? e + t : t, vi = (t) => t != t;
function mi(t) {
	if ("object" != typeof t || null === t) return vi(t) ? vi : (e) => e === t;
	if (t instanceof Date) {
		const e = t.valueOf();
		return (t) => t instanceof Date && t.valueOf() === e;
	}
	return ArrayBuffer.isView(t) ? (e) => !!e && function(t, e) {
		let i = 0;
		const n = t.length;
		if (n !== e.length) return !1;
		if (n > 0) do
			if (t[i] !== e[i]) return !1;
		while (++i < n);
		return !0;
	}(t, e) : t instanceof Map ? function(t) {
		let e = -1;
		const i = [];
		for (const n of t.values()) i[++e] = mi(n);
		return gi(i);
	}(t) : Array.isArray(t) ? function(t) {
		const e = [];
		for (let i = -1, n = t.length; ++i < n;) e[i] = mi(t[i]);
		return gi(e);
	}(t) : t instanceof Ki ? function(t) {
		const e = [];
		for (let i = -1, n = t.length; ++i < n;) e[i] = mi(t.get(i));
		return gi(e);
	}(t) : function(t, e = !1) {
		const i = Object.keys(t);
		if (!e && 0 === i.length) return () => !1;
		const n = [];
		for (let r = -1, s = i.length; ++r < s;) n[r] = mi(t[i[r]]);
		return gi(n, i);
	}(t, !0);
}
function gi(t, e) {
	return (i) => {
		if (!i || "object" != typeof i) return !1;
		switch (i.constructor) {
			case Array: return function(t, e) {
				const i = t.length;
				if (e.length !== i) return !1;
				for (let n = -1; ++n < i;) if (!t[n](e[n])) return !1;
				return !0;
			}(t, i);
			case Map: return bi(t, i, i.keys());
			case ui:
			case Me:
			case Object:
			case void 0: return bi(t, i, e || Object.keys(i));
		}
		return i instanceof Ki && function(t, e) {
			const i = t.length;
			if (e.length !== i) return !1;
			for (let n = -1; ++n < i;) if (!t[n](e.get(n))) return !1;
			return !0;
		}(t, i);
	};
}
function bi(t, e, i) {
	const n = i[Symbol.iterator](), r = e instanceof Map ? e.keys() : Object.keys(e)[Symbol.iterator](), s = e instanceof Map ? e.values() : Object.values(e)[Symbol.iterator]();
	let o = 0;
	const a = t.length;
	let l = s.next(), c = n.next(), u = r.next();
	for (; o < a && !c.done && !u.done && !l.done && c.value === u.value && t[o](l.value); ++o, c = n.next(), u = r.next(), l = s.next());
	return !!(o === a && c.done && u.done && l.done) || (n.return && n.return(), r.return && r.return(), s.return && s.return(), !1);
}
function Si(t, e, i, n) {
	return !!(i & 1 << n);
}
function wi(t, e, i, n) {
	return (i & 1 << n) >> n;
}
function Ii(t, e, i) {
	const n = i.byteLength + 7 & -8;
	if (t > 0 || i.byteLength < n) {
		const r = new Uint8Array(n);
		return r.set(t % 8 == 0 ? i.subarray(t >> 3) : function(t) {
			const e = [];
			let i = 0, n = 0, r = 0;
			for (const o of t) o && (r |= 1 << n), 8 === ++n && (e[i++] = r, r = n = 0);
			(0 === i || n > 0) && (e[i++] = r);
			const s = new Uint8Array(e.length + 7 & -8);
			return s.set(e), s;
		}(new Ti(i, t, e, null, Si)).subarray(0, n)), r;
	}
	return i;
}
var Ti = class {
	constructor(t, e, i, n, r) {
		this.bytes = t, this.length = i, this.context = n, this.get = r, this.bit = e % 8, this.byteIndex = e >> 3, this.byte = t[this.byteIndex++], this.index = 0;
	}
	next() {
		return this.index < this.length ? (8 === this.bit && (this.bit = 0, this.byte = this.bytes[this.byteIndex++]), { value: this.get(this.context, this.index++, this.byte, this.bit++) }) : {
			done: !0,
			value: null
		};
	}
	[Symbol.iterator]() {
		return this;
	}
};
function Ai(t, e, i) {
	if (i - e <= 0) return 0;
	if (i - e < 8) {
		let n = 0;
		for (const r of new Ti(t, e, i - e, t, wi)) n += r;
		return n;
	}
	const n = i >> 3 << 3, r = e + (e % 8 == 0 ? 0 : 8 - e % 8);
	return Ai(t, e, r) + Ai(t, n, i) + function(t, e, i) {
		let n = 0, r = Math.trunc(e);
		const s = new DataView(t.buffer, t.byteOffset, t.byteLength), o = void 0 === i ? t.byteLength : r + i;
		for (; o - r >= 4;) n += Di(s.getUint32(r)), r += 4;
		for (; o - r >= 2;) n += Di(s.getUint16(r)), r += 2;
		for (; o - r >= 1;) n += Di(s.getUint8(r)), r += 1;
		return n;
	}(t, r >> 3, n - r >> 3);
}
function Di(t) {
	let e = Math.trunc(t);
	return e -= e >>> 1 & 1431655765, e = (858993459 & e) + (e >>> 2 & 858993459), 16843009 * (e + (e >>> 4) & 252645135) >>> 24;
}
const Bi = Symbol.for("apache-arrow/Data");
var Oi = class t {
	static isData(t) {
		return !0 === (null == t ? void 0 : t[Bi]);
	}
	get typeId() {
		return this.type.typeId;
	}
	get ArrayType() {
		return this.type.ArrayType;
	}
	get buffers() {
		return [
			this.valueOffsets,
			this.values,
			this.nullBitmap,
			this.typeIds
		];
	}
	get nullable() {
		if (0 !== this._nullCount) {
			const { type: t } = this;
			return ot.isSparseUnion(t) || ot.isDenseUnion(t) ? this.children.some((t) => t.nullable) : this.nullBitmap && this.nullBitmap.byteLength > 0;
		}
		return !0;
	}
	get byteLength() {
		let t = 0;
		const { valueOffsets: e, values: i, nullBitmap: n, typeIds: r } = this;
		return e && (t += e.byteLength), i && (t += i.byteLength), n && (t += n.byteLength), r && (t += r.byteLength), t += this.variadicBuffers.reduce((t, e) => {
			var i;
			return t + (null !== (i = null == e ? void 0 : e.byteLength) && void 0 !== i ? i : 0);
		}, 0), this.children.reduce((t, e) => t + e.byteLength, t);
	}
	get nullCount() {
		if (ot.isUnion(this.type)) return this.children.reduce((t, e) => t + e.nullCount, 0);
		let t, e = this._nullCount;
		return e <= -1 && (t = this.nullBitmap) && (this._nullCount = e = 0 === t.length ? 0 : this.length - Ai(t, this.offset, this.offset + this.length)), e;
	}
	constructor(e, i, n, r, s, o = [], a, l = []) {
		var c;
		let u;
		this.type = e, this.children = o, this.dictionary = a, this.offset = Math.floor(Math.max(i || 0, 0)), this.length = Math.floor(Math.max(n || 0, 0)), this._nullCount = Math.floor(Math.max(r || 0, -1)), s instanceof t ? (this.stride = s.stride, this.values = s.values, this.typeIds = s.typeIds, this.nullBitmap = s.nullBitmap, this.valueOffsets = s.valueOffsets, this.variadicBuffers = s.variadicBuffers) : (this.stride = Pt(e), s && ((u = s[0]) && (this.valueOffsets = u), (u = s[1]) && (this.values = u), (u = s[2]) && (this.nullBitmap = u), (u = s[3]) && (this.typeIds = u)), this.variadicBuffers = l), null !== (c = this.variadicBuffers) && void 0 !== c || (this.variadicBuffers = []);
	}
	getValid(t) {
		const { type: e } = this;
		if (ot.isUnion(e)) {
			const i = e, n = this.typeIds[t], r = i.typeIdToChildIndex[n], s = this.children[r], o = this.valueOffsets, a = i.mode === U.Dense && o ? Number(o[t]) : t;
			return s.getValid(a);
		}
		if (this.nullable && this.nullCount > 0) {
			const e = this.offset + t;
			return !!(this.nullBitmap[e >> 3] & 1 << e % 8);
		}
		return !0;
	}
	setValid(t, e) {
		let i;
		const { type: n } = this;
		if (ot.isUnion(n)) {
			const r = n, s = this.typeIds[t], o = r.typeIdToChildIndex[s], a = this.children[o], l = this.valueOffsets, c = r.mode === U.Dense && l ? Number(l[t]) : t;
			i = a.getValid(c), a.setValid(c, e);
		} else {
			let { nullBitmap: n } = this;
			const { offset: r, length: s } = this, o = r + t, a = 1 << o % 8, l = o >> 3;
			(!n || n.byteLength <= l) && (n = new Uint8Array((r + s + 63 & -64) >> 3).fill(255), this.nullCount > 0 ? (n.set(Ii(r, s, this.nullBitmap), 0), Object.assign(this, { nullBitmap: n })) : Object.assign(this, {
				nullBitmap: n,
				_nullCount: 0
			}));
			const c = n[l];
			i = 0 !== (c & a), n[l] = e ? c | a : c & ~a;
		}
		return i !== !!e && (this._nullCount = this.nullCount + (e ? -1 : 1)), e;
	}
	clone(e = this.type, i = this.offset, n = this.length, r = this._nullCount, s = this, o = this.children, a = this.variadicBuffers) {
		return new t(e, i, n, r, s, o, this.dictionary, a);
	}
	slice(t, e) {
		const { stride: i, typeId: n, children: r } = this, s = +(0 === this._nullCount) - 1, o = 16 === n ? i : 1, a = this._sliceBuffers(t, e, i, n);
		return this.clone(this.type, this.offset + t, e, s, a, 0 === r.length || this.valueOffsets ? r : this._sliceChildren(r, o * t, o * e), this.variadicBuffers);
	}
	_changeLengthAndBackfillNullBitmap(t) {
		if (this.typeId === _.Null) return this.clone(this.type, 0, t, 0, this.buffers, this.children, this.variadicBuffers);
		const { length: e, nullCount: i } = this, n = new Uint8Array((t + 63 & -64) >> 3).fill(255, 0, e >> 3);
		n[e >> 3] = (1 << e - (-8 & e)) - 1, i > 0 && n.set(Ii(this.offset, e, this.nullBitmap), 0);
		const r = this.buffers;
		return r[k.VALIDITY] = n, this.clone(this.type, 0, t, i + (t - e), r, this.children, this.variadicBuffers);
	}
	_sliceBuffers(t, e, i, n) {
		let r;
		const { buffers: s } = this;
		if ((r = s[k.TYPE]) && (s[k.TYPE] = r.subarray(t, t + e)), ot.isBinaryView(this.type) || ot.isUtf8View(this.type)) {
			const i = wt.ELEMENT_WIDTH;
			(r = s[k.DATA]) && (s[k.DATA] = r.subarray(t * i, (t + e) * i));
		} else (r = s[k.OFFSET]) && (s[k.OFFSET] = r.subarray(t, t + e + 1)) || (r = s[k.DATA]) && (s[k.DATA] = 6 === n ? r : r.subarray(i * t, i * (t + e)));
		return s;
	}
	_sliceChildren(t, e, i) {
		return t.map((t) => t.slice(e, i));
	}
};
Oi.prototype.children = Object.freeze([]), Oi.prototype[Bi] = !0, Object.defineProperty(Oi, Symbol.hasInstance, { value: function(t) {
	return Function.prototype[Symbol.hasInstance].call(this, t) || this === Oi && Oi.isData(t);
} });
const Mi = new class t extends Yt {
	visit(t) {
		return this.getVisitFn(t.type).call(this, t);
	}
	visitNull(t) {
		const { type: e, offset: i = 0, length: n = 0 } = t;
		return new Oi(e, i, n, n);
	}
	visitBool(t) {
		const { type: e, offset: i = 0 } = t, n = E(t.nullBitmap), r = B(e.ArrayType, t.data), { length: s = r.length >> 3, nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Oi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitInt(t) {
		const { type: e, offset: i = 0 } = t, n = E(t.nullBitmap), r = B(e.ArrayType, t.data), { length: s = r.length, nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Oi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitFloat(t) {
		const { type: e, offset: i = 0 } = t, n = E(t.nullBitmap), r = B(e.ArrayType, t.data), { length: s = r.length, nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Oi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitUtf8(t) {
		const { type: e, offset: i = 0 } = t, n = E(t.data), r = E(t.nullBitmap), s = O(t.valueOffsets), { length: o = s.length - 1, nullCount: a = t.nullBitmap ? -1 : 0 } = t;
		return new Oi(e, i, o, a, [
			s,
			n,
			r
		]);
	}
	visitUtf8View(t) {
		var e;
		const { type: i, offset: n = 0 } = t, r = B(i.ArrayType, t.views), s = E(t.nullBitmap), o = (t.variadicBuffers || []).map((t) => E(t));
		return new Oi(i, n, null !== (e = t.length) && void 0 !== e ? e : Math.trunc(r.length / At.ELEMENT_WIDTH), t.nullBitmap ? -1 : 0, [
			void 0,
			r,
			s
		], [], void 0, o);
	}
	visitLargeUtf8(t) {
		const { type: e, offset: i = 0 } = t, n = E(t.data), r = E(t.nullBitmap), s = M(t.valueOffsets), { length: o = s.length - 1, nullCount: a = t.nullBitmap ? -1 : 0 } = t;
		return new Oi(e, i, o, a, [
			s,
			n,
			r
		]);
	}
	visitBinary(t) {
		const { type: e, offset: i = 0 } = t, n = E(t.data), r = E(t.nullBitmap), s = O(t.valueOffsets), { length: o = s.length - 1, nullCount: a = t.nullBitmap ? -1 : 0 } = t;
		return new Oi(e, i, o, a, [
			s,
			n,
			r
		]);
	}
	visitBinaryView(t) {
		var e;
		const { type: i, offset: n = 0 } = t, r = B(i.ArrayType, t.views), s = E(t.nullBitmap), o = (t.variadicBuffers || []).map((t) => E(t));
		return new Oi(i, n, null !== (e = t.length) && void 0 !== e ? e : Math.trunc(r.length / wt.ELEMENT_WIDTH), t.nullBitmap ? -1 : 0, [
			void 0,
			r,
			s
		], [], void 0, o);
	}
	visitLargeBinary(t) {
		const { type: e, offset: i = 0 } = t, n = E(t.data), r = E(t.nullBitmap), s = M(t.valueOffsets), { length: o = s.length - 1, nullCount: a = t.nullBitmap ? -1 : 0 } = t;
		return new Oi(e, i, o, a, [
			s,
			n,
			r
		]);
	}
	visitFixedSizeBinary(t) {
		const { type: e, offset: i = 0 } = t, n = E(t.nullBitmap), r = B(e.ArrayType, t.data), { length: s = r.length / Pt(e), nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Oi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitDate(t) {
		const { type: e, offset: i = 0 } = t, n = E(t.nullBitmap), r = B(e.ArrayType, t.data), { length: s = r.length / Pt(e), nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Oi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitTimestamp(t) {
		const { type: e, offset: i = 0 } = t, n = E(t.nullBitmap), r = B(e.ArrayType, t.data), { length: s = r.length / Pt(e), nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Oi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitTime(t) {
		const { type: e, offset: i = 0 } = t, n = E(t.nullBitmap), r = B(e.ArrayType, t.data), { length: s = r.length / Pt(e), nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Oi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitDecimal(t) {
		const { type: e, offset: i = 0 } = t, n = E(t.nullBitmap), r = B(e.ArrayType, t.data), { length: s = r.length / Pt(e), nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Oi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitList(t) {
		const { type: e, offset: i = 0, child: n } = t, r = E(t.nullBitmap), s = O(t.valueOffsets), { length: o = s.length - 1, nullCount: a = t.nullBitmap ? -1 : 0 } = t;
		return new Oi(e, i, o, a, [
			s,
			void 0,
			r
		], [n]);
	}
	visitLargeList(t) {
		const { type: e, offset: i = 0, child: n } = t, r = E(t.nullBitmap), s = M(t.valueOffsets), { length: o = s.length - 1, nullCount: a = t.nullBitmap ? -1 : 0 } = t;
		return new Oi(e, i, o, a, [
			s,
			void 0,
			r
		], [n]);
	}
	visitStruct(t) {
		const { type: e, offset: i = 0, children: n = [] } = t, r = E(t.nullBitmap), { length: s = n.reduce((t, { length: e }) => Math.max(t, e), 0), nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Oi(e, i, s, o, [
			void 0,
			void 0,
			r
		], n);
	}
	visitUnion(t) {
		const { type: e, offset: i = 0, children: n = [] } = t, r = B(e.ArrayType, t.typeIds), { length: s = r.length, nullCount: o = -1 } = t;
		if (ot.isSparseUnion(e)) return new Oi(e, i, s, o, [
			void 0,
			void 0,
			void 0,
			r
		], n);
		return new Oi(e, i, s, o, [
			O(t.valueOffsets),
			void 0,
			void 0,
			r
		], n);
	}
	visitDictionary(e) {
		const { type: i, offset: n = 0 } = e, r = E(e.nullBitmap), s = B(i.indices.ArrayType, e.data), { dictionary: o = new Ki([new t().visit({ type: i.dictionary })]) } = e, { length: a = s.length, nullCount: l = e.nullBitmap ? -1 : 0 } = e;
		return new Oi(i, n, a, l, [
			void 0,
			s,
			r
		], [], o);
	}
	visitInterval(t) {
		const { type: e, offset: i = 0 } = t, n = E(t.nullBitmap), r = B(e.ArrayType, t.data), { length: s = r.length / Pt(e), nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Oi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitDuration(t) {
		const { type: e, offset: i = 0 } = t, n = E(t.nullBitmap), r = B(e.ArrayType, t.data), { length: s = r.length, nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Oi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitFixedSizeList(e) {
		const { type: i, offset: n = 0, child: r = new t().visit({ type: i.valueType }) } = e, s = E(e.nullBitmap), { length: o = r.length / Pt(i), nullCount: a = e.nullBitmap ? -1 : 0 } = e;
		return new Oi(i, n, o, a, [
			void 0,
			void 0,
			s
		], [r]);
	}
	visitMap(e) {
		const { type: i, offset: n = 0, child: r = new t().visit({ type: i.childType }) } = e, s = E(e.nullBitmap), o = O(e.valueOffsets), { length: a = o.length - 1, nullCount: l = e.nullBitmap ? -1 : 0 } = e;
		return new Oi(i, n, a, l, [
			o,
			void 0,
			s
		], [r]);
	}
}();
function Ei(t) {
	return Mi.visit(t);
}
var Ni = class {
	constructor(t = 0, e) {
		this.numChunks = t, this.getChunkIterator = e, this.chunkIndex = 0, this.chunkIterator = this.getChunkIterator(0);
	}
	next() {
		for (; this.chunkIndex < this.numChunks;) {
			const t = this.chunkIterator.next();
			if (!t.done) return t;
			++this.chunkIndex < this.numChunks && (this.chunkIterator = this.getChunkIterator(this.chunkIndex));
		}
		return {
			done: !0,
			value: null
		};
	}
	[Symbol.iterator]() {
		return this;
	}
};
function Ui(t) {
	return t.reduce((t, e) => t + e.nullCount, 0);
}
function Li(t) {
	return t.reduce((t, e, i) => (t[i + 1] = t[i] + e.length, t), new Uint32Array(t.length + 1));
}
function Fi(t, e, i, n) {
	const r = [];
	for (let s = -1, o = t.length; ++s < o;) {
		const o = t[s], a = e[s], { length: l } = o;
		if (a >= n) break;
		if (i >= a + l) continue;
		if (a >= i && a + l <= n) {
			r.push(o);
			continue;
		}
		const c = Math.max(0, i - a), u = Math.min(n - a, l);
		r.push(o.slice(c, u - c));
	}
	return 0 === r.length && r.push(t[0].slice(0, 0)), r;
}
function xi(t, e, i, n) {
	let r = 0, s = 0, o = e.length - 1;
	do {
		if (r >= o - 1) return i < e[o] ? n(t, r, i - e[r]) : null;
		s = r + Math.trunc(.5 * (o - r)), i < e[s] ? o = s : r = s;
	} while (r < o);
}
function Ci(t, e) {
	return t.getValid(e);
}
function _i(t) {
	function e(e, i, n) {
		return t(e[i], n);
	}
	return function(t) {
		return xi(this.data, this._offsets, t, e);
	};
}
function ki(t) {
	let e;
	function i(i, n, r) {
		return t(i[n], r, e);
	}
	return function(t, n) {
		const r = this.data;
		e = n;
		const s = xi(r, this._offsets, t, i);
		return e = void 0, s;
	};
}
function Vi(t) {
	let e;
	function i(i, n, r) {
		let s = r, o = 0, a = 0;
		for (let l = n - 1, c = i.length; ++l < c;) {
			const n = i[l];
			if (~(o = t(n, e, s))) return a + o;
			s = 0, a += n.length;
		}
		return -1;
	}
	return function(t, n) {
		e = t;
		const r = this.data, s = "number" != typeof n ? i(r, 0, 0) : xi(r, this._offsets, n, i);
		return e = void 0, s;
	};
}
var ji = class extends Yt {};
function $i(t, e, i) {
	if (void 0 === e) return -1;
	if (null === e) switch (t.typeId) {
		case _.Union:
		case _.Dictionary: break;
		default: return function(t, e) {
			const { nullBitmap: i } = t;
			if (!i || t.nullCount <= 0) return -1;
			let n = 0;
			for (const r of new Ti(i, t.offset + (e || 0), t.length, i, Si)) {
				if (!r) return n;
				++n;
			}
			return -1;
		}(t, i);
	}
	const n = si.getVisitFn(t), r = mi(e);
	for (let s = (i || 0) - 1, o = t.length; ++s < o;) if (r(n(t, s))) return s;
	return -1;
}
function zi(t, e, i) {
	const n = si.getVisitFn(t), r = mi(e);
	for (let s = (i || 0) - 1, o = t.length; ++s < o;) if (r(n(t, s))) return s;
	return -1;
}
ji.prototype.visitNull = function(t, e) {
	return null === e && t.length > 0 ? 0 : -1;
}, ji.prototype.visitBool = $i, ji.prototype.visitInt = $i, ji.prototype.visitInt8 = $i, ji.prototype.visitInt16 = $i, ji.prototype.visitInt32 = $i, ji.prototype.visitInt64 = $i, ji.prototype.visitUint8 = $i, ji.prototype.visitUint16 = $i, ji.prototype.visitUint32 = $i, ji.prototype.visitUint64 = $i, ji.prototype.visitFloat = $i, ji.prototype.visitFloat16 = $i, ji.prototype.visitFloat32 = $i, ji.prototype.visitFloat64 = $i, ji.prototype.visitUtf8 = $i, ji.prototype.visitLargeUtf8 = $i, ji.prototype.visitUtf8View = $i, ji.prototype.visitBinary = $i, ji.prototype.visitLargeBinary = $i, ji.prototype.visitBinaryView = $i, ji.prototype.visitFixedSizeBinary = $i, ji.prototype.visitDate = $i, ji.prototype.visitDateDay = $i, ji.prototype.visitDateMillisecond = $i, ji.prototype.visitTimestamp = $i, ji.prototype.visitTimestampSecond = $i, ji.prototype.visitTimestampMillisecond = $i, ji.prototype.visitTimestampMicrosecond = $i, ji.prototype.visitTimestampNanosecond = $i, ji.prototype.visitTime = $i, ji.prototype.visitTimeSecond = $i, ji.prototype.visitTimeMillisecond = $i, ji.prototype.visitTimeMicrosecond = $i, ji.prototype.visitTimeNanosecond = $i, ji.prototype.visitDecimal = $i, ji.prototype.visitList = $i, ji.prototype.visitLargeList = $i, ji.prototype.visitStruct = $i, ji.prototype.visitUnion = $i, ji.prototype.visitDenseUnion = zi, ji.prototype.visitSparseUnion = zi, ji.prototype.visitDictionary = $i, ji.prototype.visitInterval = $i, ji.prototype.visitIntervalDayTime = $i, ji.prototype.visitIntervalYearMonth = $i, ji.prototype.visitIntervalMonthDayNano = $i, ji.prototype.visitDuration = $i, ji.prototype.visitDurationSecond = $i, ji.prototype.visitDurationMillisecond = $i, ji.prototype.visitDurationMicrosecond = $i, ji.prototype.visitDurationNanosecond = $i, ji.prototype.visitFixedSizeList = $i, ji.prototype.visitMap = $i;
const Ri = new ji();
var Pi = class extends Yt {};
function Yi(t) {
	const { type: e } = t;
	if (0 === t.nullCount && 1 === t.stride && (ot.isInt(e) && 64 !== e.bitWidth || ot.isTime(e) && 64 !== e.bitWidth || ot.isFloat(e) && e.precision !== L.HALF)) return new Ni(t.data.length, (e) => {
		const i = t.data[e];
		return i.values.subarray(0, i.length)[Symbol.iterator]();
	});
	let i = 0;
	return new Ni(t.data.length, (e) => {
		const n = t.data[e].length, r = t.slice(i, i + n);
		return i += n, new Wi(r);
	});
}
var Wi = class {
	constructor(t) {
		this.vector = t, this.index = 0;
	}
	next() {
		return this.index < this.vector.length ? { value: this.vector.get(this.index++) } : {
			done: !0,
			value: null
		};
	}
	[Symbol.iterator]() {
		return this;
	}
};
Pi.prototype.visitNull = Yi, Pi.prototype.visitBool = Yi, Pi.prototype.visitInt = Yi, Pi.prototype.visitInt8 = Yi, Pi.prototype.visitInt16 = Yi, Pi.prototype.visitInt32 = Yi, Pi.prototype.visitInt64 = Yi, Pi.prototype.visitUint8 = Yi, Pi.prototype.visitUint16 = Yi, Pi.prototype.visitUint32 = Yi, Pi.prototype.visitUint64 = Yi, Pi.prototype.visitFloat = Yi, Pi.prototype.visitFloat16 = Yi, Pi.prototype.visitFloat32 = Yi, Pi.prototype.visitFloat64 = Yi, Pi.prototype.visitUtf8 = Yi, Pi.prototype.visitLargeUtf8 = Yi, Pi.prototype.visitUtf8View = Yi, Pi.prototype.visitBinary = Yi, Pi.prototype.visitLargeBinary = Yi, Pi.prototype.visitBinaryView = Yi, Pi.prototype.visitFixedSizeBinary = Yi, Pi.prototype.visitDate = Yi, Pi.prototype.visitDateDay = Yi, Pi.prototype.visitDateMillisecond = Yi, Pi.prototype.visitTimestamp = Yi, Pi.prototype.visitTimestampSecond = Yi, Pi.prototype.visitTimestampMillisecond = Yi, Pi.prototype.visitTimestampMicrosecond = Yi, Pi.prototype.visitTimestampNanosecond = Yi, Pi.prototype.visitTime = Yi, Pi.prototype.visitTimeSecond = Yi, Pi.prototype.visitTimeMillisecond = Yi, Pi.prototype.visitTimeMicrosecond = Yi, Pi.prototype.visitTimeNanosecond = Yi, Pi.prototype.visitDecimal = Yi, Pi.prototype.visitList = Yi, Pi.prototype.visitLargeList = Yi, Pi.prototype.visitStruct = Yi, Pi.prototype.visitUnion = Yi, Pi.prototype.visitDenseUnion = Yi, Pi.prototype.visitSparseUnion = Yi, Pi.prototype.visitDictionary = Yi, Pi.prototype.visitInterval = Yi, Pi.prototype.visitIntervalDayTime = Yi, Pi.prototype.visitIntervalYearMonth = Yi, Pi.prototype.visitIntervalMonthDayNano = Yi, Pi.prototype.visitDuration = Yi, Pi.prototype.visitDurationSecond = Yi, Pi.prototype.visitDurationMillisecond = Yi, Pi.prototype.visitDurationMicrosecond = Yi, Pi.prototype.visitDurationNanosecond = Yi, Pi.prototype.visitFixedSizeList = Yi, Pi.prototype.visitMap = Yi;
const Hi = new Pi();
var Gi;
const qi = Symbol.for("apache-arrow/Vector"), Ji = {}, Xi = {};
var Ki = class t {
	static isVector(t) {
		return !0 === (null == t ? void 0 : t[qi]);
	}
	constructor(e) {
		var i, n, r;
		const s = e[0] instanceof t ? e.flatMap((t) => t.data) : e;
		if (0 === s.length || s.some((t) => !(t instanceof Oi))) throw new TypeError("Vector constructor expects an Array of Data instances.");
		const o = null === (i = s[0]) || void 0 === i ? void 0 : i.type;
		switch (s.length) {
			case 0:
				this._offsets = [0];
				break;
			case 1: {
				const { get: t, set: e, indexOf: i } = Ji[o.typeId], n = s[0];
				this.isValid = (t) => Ci(n, t), this.get = (e) => t(n, e), this.set = (t, i) => e(n, t, i), this.indexOf = (t) => i(n, t), this._offsets = [0, n.length];
				break;
			}
			default: Object.setPrototypeOf(this, Xi[o.typeId]), this._offsets = Li(s);
		}
		this.data = s, this.type = o, this.stride = Pt(o), this.numChildren = null !== (r = null === (n = o.children) || void 0 === n ? void 0 : n.length) && void 0 !== r ? r : 0, this.length = this._offsets.at(-1);
	}
	get byteLength() {
		return this.data.reduce((t, e) => t + e.byteLength, 0);
	}
	get nullable() {
		return this.data.some((t) => t.nullable);
	}
	get nullCount() {
		return Ui(this.data);
	}
	get ArrayType() {
		return this.type.ArrayType;
	}
	get [Symbol.toStringTag]() {
		return `${this.VectorName}<${this.type[Symbol.toStringTag]}>`;
	}
	get VectorName() {
		return `${_[this.type.typeId]}Vector`;
	}
	isValid(t) {
		return !1;
	}
	get(t) {
		return null;
	}
	at(t) {
		return this.get(fi(t, this.length));
	}
	set(t, e) {}
	indexOf(t, e) {
		return -1;
	}
	includes(t, e) {
		return this.indexOf(t, e) > -1;
	}
	[Symbol.iterator]() {
		return Hi.visit(this);
	}
	concat(...e) {
		return new t(this.data.concat(e.flatMap((t) => t.data).flat(Number.POSITIVE_INFINITY)));
	}
	slice(e, i) {
		return new t(hi(this, e, i, ({ data: t, _offsets: e }, i, n) => Fi(t, e, i, n)));
	}
	toJSON() {
		return [...this];
	}
	toArray() {
		const { type: t, data: e, length: i, stride: n, ArrayType: r } = this;
		switch (t.typeId) {
			case _.Int:
			case _.Float:
			case _.Decimal:
			case _.Time:
			case _.Timestamp: switch (e.length) {
				case 0: return new r();
				case 1: return e[0].values.subarray(0, i * n);
				default: return e.reduce((t, { values: e, length: i }) => (t.array.set(e.subarray(0, i * n), t.offset), t.offset += i * n, t), {
					array: new r(i * n),
					offset: 0
				}).array;
			}
		}
		return [...this];
	}
	toString() {
		return `[${[...this].join(",")}]`;
	}
	getChild(t) {
		var e;
		return this.getChildAt(null === (e = this.type.children) || void 0 === e ? void 0 : e.findIndex((e) => e.name === t));
	}
	getChildAt(e) {
		return e > -1 && e < this.numChildren ? new t(this.data.map(({ children: t }) => t[e])) : null;
	}
	get isMemoized() {
		return !!ot.isDictionary(this.type) && this.data[0].dictionary.isMemoized;
	}
	memoize() {
		if (ot.isDictionary(this.type)) {
			const e = new Zi(this.data[0].dictionary), i = this.data.map((t) => {
				const i = t.clone();
				return i.dictionary = e, i;
			});
			return new t(i);
		}
		return new Zi(this);
	}
	unmemoize() {
		if (ot.isDictionary(this.type) && this.isMemoized) {
			const e = this.data[0].dictionary.unmemoize(), i = this.data.map((t) => {
				const i = t.clone();
				return i.dictionary = e, i;
			});
			return new t(i);
		}
		return this;
	}
};
Gi = Symbol.toStringTag, Ki[Gi] = ((t) => {
	t.type = ot.prototype, t.data = [], t.length = 0, t.stride = 1, t.numChildren = 0, t._offsets = new Uint32Array([0]), t[Symbol.isConcatSpreadable] = !0, t[qi] = !0;
	const e = Object.keys(_).map((t) => _[t]).filter((t) => "number" == typeof t && t !== _.NONE);
	for (const i of e) {
		const e = si.getVisitFnByTypeId(i), n = De.getVisitFnByTypeId(i), r = Ri.getVisitFnByTypeId(i);
		Ji[i] = {
			get: e,
			set: n,
			indexOf: r
		}, Xi[i] = Object.create(t, {
			isValid: { value: _i(Ci) },
			get: { value: _i(si.getVisitFnByTypeId(i)) },
			set: { value: ki(De.getVisitFnByTypeId(i)) },
			indexOf: { value: Vi(Ri.getVisitFnByTypeId(i)) }
		});
	}
	return "Vector";
})(Ki.prototype), Object.defineProperty(Ki, Symbol.hasInstance, { value: function(t) {
	return Function.prototype[Symbol.hasInstance].call(this, t) || this === Ki && Ki.isVector(t);
} });
var Zi = class t extends Ki {
	constructor(e) {
		super(e.data);
		const i = this.get, n = this.set, r = this.slice, s = new Array(this.length);
		Object.defineProperty(this, "get", { value(t) {
			const e = s[t];
			if (void 0 !== e) return e;
			const n = i.call(this, t);
			return s[t] = n, n;
		} }), Object.defineProperty(this, "set", { value(t, e) {
			n.call(this, t, e), s[t] = e;
		} }), Object.defineProperty(this, "slice", { value: (e, i) => new t(r.call(this, e, i)) }), Object.defineProperty(this, "isMemoized", { value: !0 }), Object.defineProperty(this, "unmemoize", { value: () => new Ki(this.data) }), Object.defineProperty(this, "memoize", { value: () => this });
	}
};
function Qi(t) {
	if (t) {
		if (t instanceof Oi) return new Ki([t]);
		if (t instanceof Ki) return new Ki(t.data);
		if (t.type instanceof ot) return new Ki([Ei(t)]);
		if (Array.isArray(t)) return new Ki(t.flatMap((t) => {
			return (e = t) instanceof Oi ? [e] : e instanceof Ki ? e.data : Qi(e).data;
			var e;
		}));
		if (ArrayBuffer.isView(t)) {
			t instanceof DataView && (t = new Uint8Array(t.buffer));
			const e = {
				offset: 0,
				length: t.length,
				nullCount: -1,
				data: t
			};
			if (t instanceof Int8Array) return new Ki([Ei(Object.assign(Object.assign({}, e), { type: new ct() }))]);
			if (t instanceof Int16Array) return new Ki([Ei(Object.assign(Object.assign({}, e), { type: new ut() }))]);
			if (t instanceof Int32Array) return new Ki([Ei(Object.assign(Object.assign({}, e), { type: new pt() }))]);
			if (t instanceof BigInt64Array) return new Ki([Ei(Object.assign(Object.assign({}, e), { type: new yt() }))]);
			if (t instanceof Uint8Array || t instanceof Uint8ClampedArray) return new Ki([Ei(Object.assign(Object.assign({}, e), { type: new dt() }))]);
			if (t instanceof Uint16Array) return new Ki([Ei(Object.assign(Object.assign({}, e), { type: new ht() }))]);
			if (t instanceof Uint32Array) return new Ki([Ei(Object.assign(Object.assign({}, e), { type: new ft() }))]);
			if (t instanceof BigUint64Array) return new Ki([Ei(Object.assign(Object.assign({}, e), { type: new vt() }))]);
			if (t instanceof Float32Array) return new Ki([Ei(Object.assign(Object.assign({}, e), { type: new gt() }))]);
			if (t instanceof Float64Array) return new Ki([Ei(Object.assign(Object.assign({}, e), { type: new bt() }))]);
			throw new Error("Unrecognized input");
		}
	}
	throw new Error("Unrecognized input");
}
const tn = Symbol.for("apache-arrow/Schema"), en = Symbol.for("apache-arrow/Field");
var nn = class t {
	static isSchema(t) {
		return !0 === (null == t ? void 0 : t[tn]);
	}
	constructor(t = [], e, i, n = N.V5) {
		this.fields = t || [], this.metadata = e || /* @__PURE__ */ new Map(), i || (i = on(this.fields)), this.dictionaries = i, this.metadataVersion = n;
	}
	get [Symbol.toStringTag]() {
		return "Schema";
	}
	get names() {
		return this.fields.map((t) => t.name);
	}
	toString() {
		return `Schema<{ ${this.fields.map((t, e) => `${e}: ${t}`).join(", ")} }>`;
	}
	select(e) {
		const i = new Set(e), n = this.fields.filter((t) => i.has(t.name));
		return new t(n, this.metadata);
	}
	selectAt(e) {
		const i = e.map((t) => this.fields[t]).filter(Boolean);
		return new t(i, this.metadata);
	}
	assign(...e) {
		const i = e[0] instanceof t ? e[0] : Array.isArray(e[0]) ? new t(e[0]) : new t(e), n = [...this.fields], r = sn(sn(/* @__PURE__ */ new Map(), this.metadata), i.metadata), s = i.fields.filter((t) => {
			const e = n.findIndex((e) => e.name === t.name);
			return !~e || (n[e] = t.clone({ metadata: sn(sn(/* @__PURE__ */ new Map(), n[e].metadata), t.metadata) })) && !1;
		}), o = on(s, /* @__PURE__ */ new Map());
		return new t([...n, ...s], r, new Map([...this.dictionaries, ...o]));
	}
};
nn.prototype.fields = null, nn.prototype.metadata = null, nn.prototype.dictionaries = null, nn.prototype[tn] = !0, Object.defineProperty(nn, Symbol.hasInstance, { value: function(t) {
	return Function.prototype[Symbol.hasInstance].call(this, t) || this === nn && nn.isSchema(t);
} });
var rn = class t {
	static isField(t) {
		return !0 === (null == t ? void 0 : t[en]);
	}
	static new(...e) {
		let [i, n, r, s] = e;
		return e[0] && "object" == typeof e[0] && ({name: i} = e[0], void 0 === n && (n = e[0].type), void 0 === r && (r = e[0].nullable), void 0 === s && (s = e[0].metadata)), new t(`${i}`, n, r, s);
	}
	constructor(t, e, i = !1, n) {
		this.name = t, this.type = e, this.nullable = i, this.metadata = n || /* @__PURE__ */ new Map();
	}
	get typeId() {
		return this.type.typeId;
	}
	get [Symbol.toStringTag]() {
		return "Field";
	}
	toString() {
		return `${this.name}: ${this.type}`;
	}
	clone(...e) {
		let [i, n, r, s] = e;
		return e[0] && "object" == typeof e[0] ? {name: i = this.name, type: n = this.type, nullable: r = this.nullable, metadata: s = this.metadata} = e[0] : [i = this.name, n = this.type, r = this.nullable, s = this.metadata] = e, t.new(i, n, r, s);
	}
};
function sn(t, e) {
	return new Map([...t || /* @__PURE__ */ new Map(), ...e || /* @__PURE__ */ new Map()]);
}
function on(t, e = /* @__PURE__ */ new Map()) {
	for (let i = -1, n = t.length; ++i < n;) {
		const n = t[i].type;
		if (ot.isDictionary(n)) if (e.has(n.id)) {
			if (e.get(n.id) !== n.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
		} else e.set(n.id, n.dictionary);
		n.children && n.children.length > 0 && on(n.children, e);
	}
	return e;
}
rn.prototype.type = null, rn.prototype.name = null, rn.prototype.nullable = null, rn.prototype.metadata = null, rn.prototype[en] = !0, Object.defineProperty(rn, Symbol.hasInstance, { value: function(t) {
	return Function.prototype[Symbol.hasInstance].call(this, t) || this === rn && rn.isField(t);
} });
var an = class extends Yt {
	compareSchemas(t, e) {
		return t === e || e instanceof t.constructor && this.compareManyFields(t.fields, e.fields);
	}
	compareManyFields(t, e) {
		return t === e || Array.isArray(t) && Array.isArray(e) && t.length === e.length && t.every((t, i) => this.compareFields(t, e[i]));
	}
	compareFields(t, e) {
		return t === e || e instanceof t.constructor && t.name === e.name && t.nullable === e.nullable && this.visit(t.type, e.type);
	}
};
function ln(t, e) {
	return e instanceof t.constructor;
}
function cn(t, e) {
	return t === e || ln(t, e);
}
function un(t, e) {
	return t === e || ln(t, e) && t.bitWidth === e.bitWidth && t.isSigned === e.isSigned;
}
function pn(t, e) {
	return t === e || ln(t, e) && t.precision === e.precision;
}
function yn(t, e) {
	return t === e || ln(t, e) && t.unit === e.unit;
}
function dn(t, e) {
	return t === e || ln(t, e) && t.unit === e.unit && t.timezone === e.timezone;
}
function hn(t, e) {
	return t === e || ln(t, e) && t.unit === e.unit && t.bitWidth === e.bitWidth;
}
function fn(t, e) {
	return t === e || ln(t, e) && t.children.length === e.children.length && bn.compareManyFields(t.children, e.children);
}
function vn(t, e) {
	return t === e || ln(t, e) && t.mode === e.mode && t.typeIds.every((t, i) => t === e.typeIds[i]) && bn.compareManyFields(t.children, e.children);
}
function mn(t, e) {
	return t === e || ln(t, e) && t.unit === e.unit;
}
function gn(t, e) {
	return t === e || ln(t, e) && t.unit === e.unit;
}
an.prototype.visitNull = cn, an.prototype.visitBool = cn, an.prototype.visitInt = un, an.prototype.visitInt8 = un, an.prototype.visitInt16 = un, an.prototype.visitInt32 = un, an.prototype.visitInt64 = un, an.prototype.visitUint8 = un, an.prototype.visitUint16 = un, an.prototype.visitUint32 = un, an.prototype.visitUint64 = un, an.prototype.visitFloat = pn, an.prototype.visitFloat16 = pn, an.prototype.visitFloat32 = pn, an.prototype.visitFloat64 = pn, an.prototype.visitUtf8 = cn, an.prototype.visitLargeUtf8 = cn, an.prototype.visitUtf8View = cn, an.prototype.visitBinary = cn, an.prototype.visitLargeBinary = cn, an.prototype.visitBinaryView = cn, an.prototype.visitFixedSizeBinary = function(t, e) {
	return t === e || ln(t, e) && t.byteWidth === e.byteWidth;
}, an.prototype.visitDate = yn, an.prototype.visitDateDay = yn, an.prototype.visitDateMillisecond = yn, an.prototype.visitTimestamp = dn, an.prototype.visitTimestampSecond = dn, an.prototype.visitTimestampMillisecond = dn, an.prototype.visitTimestampMicrosecond = dn, an.prototype.visitTimestampNanosecond = dn, an.prototype.visitTime = hn, an.prototype.visitTimeSecond = hn, an.prototype.visitTimeMillisecond = hn, an.prototype.visitTimeMicrosecond = hn, an.prototype.visitTimeNanosecond = hn, an.prototype.visitDecimal = cn, an.prototype.visitList = fn, an.prototype.visitLargeList = fn, an.prototype.visitStruct = function(t, e) {
	return t === e || ln(t, e) && t.children.length === e.children.length && bn.compareManyFields(t.children, e.children);
}, an.prototype.visitUnion = vn, an.prototype.visitDenseUnion = vn, an.prototype.visitSparseUnion = vn, an.prototype.visitDictionary = function(t, e) {
	return t === e || ln(t, e) && t.id === e.id && t.isOrdered === e.isOrdered && bn.visit(t.indices, e.indices) && bn.visit(t.dictionary, e.dictionary);
}, an.prototype.visitInterval = mn, an.prototype.visitIntervalDayTime = mn, an.prototype.visitIntervalYearMonth = mn, an.prototype.visitIntervalMonthDayNano = mn, an.prototype.visitDuration = gn, an.prototype.visitDurationSecond = gn, an.prototype.visitDurationMillisecond = gn, an.prototype.visitDurationMicrosecond = gn, an.prototype.visitDurationNanosecond = gn, an.prototype.visitFixedSizeList = function(t, e) {
	return t === e || ln(t, e) && t.listSize === e.listSize && t.children.length === e.children.length && bn.compareManyFields(t.children, e.children);
}, an.prototype.visitMap = function(t, e) {
	return t === e || ln(t, e) && t.keysSorted === e.keysSorted && t.children.length === e.children.length && bn.compareManyFields(t.children, e.children);
};
const bn = new an();
function Sn(t, e) {
	return bn.compareSchemas(t, e);
}
function wn(t, e) {
	return function(t, e) {
		const i = [...t.fields], n = [], r = { numBatches: e.reduce((t, e) => Math.max(t, e.length), 0) };
		let s = 0, o = 0, a = -1;
		const l = e.length;
		let c, u = [];
		for (; r.numBatches-- > 0;) {
			for (o = Number.POSITIVE_INFINITY, a = -1; ++a < l;) u[a] = c = e[a].shift(), o = Math.min(o, c ? c.length : o);
			Number.isFinite(o) && (u = In(i, o, u, e, r), o > 0 && (n[s++] = Ei({
				type: new Ct(i),
				length: o,
				nullCount: 0,
				children: u.slice()
			})));
		}
		return [t = t.assign(i), n.map((e) => new Mn(t, e))];
	}(t, e.map((t) => t.data.concat()));
}
function In(t, e, i, n, r) {
	var s;
	const o = (e + 63 & -64) >> 3;
	for (let a = -1, l = n.length; ++a < l;) {
		const l = i[a], c = null == l ? void 0 : l.length;
		if (c >= e) c === e ? i[a] = l : (i[a] = l.slice(0, e), r.numBatches = Math.max(r.numBatches, n[a].unshift(l.slice(e, c - e))));
		else {
			const n = t[a];
			t[a] = n.clone({ nullable: !0 }), i[a] = null !== (s = null == l ? void 0 : l._changeLengthAndBackfillNullBitmap(e)) && void 0 !== s ? s : Ei({
				type: n.type,
				length: e,
				nullCount: e,
				nullBitmap: new Uint8Array(o)
			});
		}
	}
	return i;
}
var Tn;
const An = Symbol.for("apache-arrow/Table");
var Dn, Bn = class t {
	static isTable(t) {
		return !0 === (null == t ? void 0 : t[An]);
	}
	constructor(...e) {
		var i, n;
		if (0 === e.length) return this.batches = [], this.schema = new nn([]), this._offsets = [0], this;
		let r, s;
		e[0] instanceof nn && (r = e.shift()), e.at(-1) instanceof Uint32Array && (s = e.pop());
		const o = (e) => {
			if (e) {
				if (e instanceof Mn) return [e];
				if (e instanceof t) return e.batches;
				if (e instanceof Oi) {
					if (e.type instanceof Ct) return [new Mn(new nn(e.type.children), e)];
				} else {
					if (Array.isArray(e)) return e.flatMap((t) => o(t));
					if ("function" == typeof e[Symbol.iterator]) return [...e].flatMap((t) => o(t));
					if ("object" == typeof e) {
						const t = Object.keys(e), i = t.map((t) => new Ki([e[t]])), [, s] = wn(null != r ? r : new nn(t.map((t, e) => new rn(String(t), i[e].type, i[e].nullable))), i);
						return 0 === s.length ? [new Mn(e)] : s;
					}
				}
			}
			return [];
		}, a = e.flatMap((t) => o(t));
		if (r = null !== (n = null != r ? r : null === (i = a[0]) || void 0 === i ? void 0 : i.schema) && void 0 !== n ? n : new nn([]), !(r instanceof nn)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
		for (const t of a) {
			if (!(t instanceof Mn)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
			if (!Sn(r, t.schema)) throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
		}
		this.schema = r, this.batches = a, this._offsets = null != s ? s : Li(this.data);
	}
	get data() {
		return this.batches.map(({ data: t }) => t);
	}
	get numCols() {
		return this.schema.fields.length;
	}
	get numRows() {
		return this.data.reduce((t, e) => t + e.length, 0);
	}
	get nullCount() {
		return -1 === this._nullCount && (this._nullCount = Ui(this.data)), this._nullCount;
	}
	isValid(t) {
		return !1;
	}
	get(t) {
		return null;
	}
	at(t) {
		return this.get(fi(t, this.numRows));
	}
	set(t, e) {}
	indexOf(t, e) {
		return -1;
	}
	[Symbol.iterator]() {
		return this.batches.length > 0 ? Hi.visit(new Ki(this.data)) : new Array(0)[Symbol.iterator]();
	}
	toArray() {
		return [...this];
	}
	toString() {
		return `[\n  ${this.toArray().join(",\n  ")}\n]`;
	}
	concat(...e) {
		const i = this.schema, n = this.data.concat(e.flatMap(({ data: t }) => t));
		return new t(i, n.map((t) => new Mn(i, t)));
	}
	slice(e, i) {
		const n = this.schema;
		[e, i] = hi({ length: this.numRows }, e, i);
		const r = Fi(this.data, this._offsets, e, i);
		return new t(n, r.map((t) => new Mn(n, t)));
	}
	getChild(t) {
		return this.getChildAt(this.schema.fields.findIndex((e) => e.name === t));
	}
	getChildAt(t) {
		if (t > -1 && t < this.schema.fields.length) {
			const e = this.data.map((e) => e.children[t]);
			if (0 === e.length) {
				const { type: i } = this.schema.fields[t], n = Ei({
					type: i,
					length: 0,
					nullCount: 0
				});
				e.push(n._changeLengthAndBackfillNullBitmap(this.numRows));
			}
			return new Ki(e);
		}
		return null;
	}
	setChild(t, e) {
		var i;
		return this.setChildAt(null === (i = this.schema.fields) || void 0 === i ? void 0 : i.findIndex((e) => e.name === t), e);
	}
	setChildAt(e, i) {
		let n = this.schema, r = [...this.batches];
		if (e > -1 && e < this.numCols) {
			i || (i = new Ki([Ei({
				type: new at(),
				length: this.numRows
			})]));
			const t = n.fields.slice(), s = t[e].clone({ type: i.type }), o = this.schema.fields.map((t, e) => this.getChildAt(e));
			[t[e], o[e]] = [s, i], [n, r] = wn(n, o);
		}
		return new t(n, r);
	}
	select(t) {
		const e = this.schema.fields.reduce((t, e, i) => t.set(e.name, i), /* @__PURE__ */ new Map());
		return this.selectAt(t.map((t) => e.get(t)).filter((t) => t > -1));
	}
	selectAt(e) {
		const i = this.schema.selectAt(e), n = this.batches.map((t) => t.selectAt(e));
		return new t(i, n);
	}
	assign(e) {
		const i = this.schema.fields, [n, r] = e.schema.fields.reduce((t, e, n) => {
			const [r, s] = t, o = i.findIndex((t) => t.name === e.name);
			return ~o ? s[o] = n : r.push(n), t;
		}, [[], []]), s = this.schema.assign(e.schema), o = [...i.map((t, e) => [e, r[e]]).map(([t, i]) => void 0 === i ? this.getChildAt(t) : e.getChildAt(i)), ...n.map((t) => e.getChildAt(t))].filter(Boolean);
		return new t(...wn(s, o));
	}
};
Tn = Symbol.toStringTag, Bn[Tn] = ((t) => (t.schema = null, t.batches = [], t._offsets = new Uint32Array([0]), t._nullCount = -1, t[Symbol.isConcatSpreadable] = !0, t[An] = !0, t.isValid = _i(Ci), t.get = _i(si.getVisitFn(_.Struct)), t.set = ki(De.getVisitFn(_.Struct)), t.indexOf = Vi(Ri.getVisitFn(_.Struct)), "Table"))(Bn.prototype), Object.defineProperty(Bn, Symbol.hasInstance, { value: function(t) {
	return Function.prototype[Symbol.hasInstance].call(this, t) || this === Bn && Bn.isTable(t);
} });
const On = Symbol.for("apache-arrow/RecordBatch");
var Mn = class t {
	static isRecordBatch(t) {
		return !0 === (null == t ? void 0 : t[On]);
	}
	constructor(...t) {
		switch (t.length) {
			case 3:
			case 2:
				if ([this.schema] = t, !(this.schema instanceof nn)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
				if ([, this.data = Ei({
					nullCount: 0,
					type: new Ct(this.schema.fields),
					children: this.schema.fields.map((t) => Ei({
						type: t.type,
						nullCount: 0
					}))
				}), this._metadata = /* @__PURE__ */ new Map()] = t, !(this.data instanceof Oi)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
				[this.schema, this.data] = En(this.schema, this.data.children, this.data.length);
				break;
			case 1: {
				const [e] = t, { fields: i, children: n, length: r } = Object.keys(e).reduce((t, i, n) => (t.children[n] = e[i], t.length = Math.max(t.length, e[i].length), t.fields[n] = rn.new({
					name: i,
					type: e[i].type,
					nullable: !0
				}), t), {
					length: 0,
					fields: new Array(),
					children: new Array()
				}), s = new nn(i), o = Ei({
					type: new Ct(i),
					length: r,
					children: n,
					nullCount: 0
				});
				[this.schema, this.data] = En(s, o.children, r), this._metadata = /* @__PURE__ */ new Map();
				break;
			}
			default: throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
		}
	}
	get metadata() {
		return this._metadata;
	}
	get dictionaries() {
		return this._dictionaries || (this._dictionaries = Nn(this.schema.fields, this.data.children));
	}
	get numCols() {
		return this.schema.fields.length;
	}
	get numRows() {
		return this.data.length;
	}
	get nullCount() {
		return this.data.nullCount;
	}
	isValid(t) {
		return this.data.getValid(t);
	}
	get(t) {
		return si.visit(this.data, t);
	}
	at(t) {
		return this.get(fi(t, this.numRows));
	}
	set(t, e) {
		return De.visit(this.data, t, e);
	}
	indexOf(t, e) {
		return Ri.visit(this.data, t, e);
	}
	[Symbol.iterator]() {
		return Hi.visit(new Ki([this.data]));
	}
	toArray() {
		return [...this];
	}
	concat(...t) {
		return new Bn(this.schema, [this, ...t]);
	}
	slice(e, i) {
		const [n] = new Ki([this.data]).slice(e, i).data;
		return new t(this.schema, n, this._metadata);
	}
	getChild(t) {
		var e;
		return this.getChildAt(null === (e = this.schema.fields) || void 0 === e ? void 0 : e.findIndex((e) => e.name === t));
	}
	getChildAt(t) {
		return t > -1 && t < this.schema.fields.length ? new Ki([this.data.children[t]]) : null;
	}
	setChild(t, e) {
		var i;
		return this.setChildAt(null === (i = this.schema.fields) || void 0 === i ? void 0 : i.findIndex((e) => e.name === t), e);
	}
	setChildAt(e, i) {
		let n = this.schema, r = this.data;
		if (e > -1 && e < this.numCols) {
			i || (i = new Ki([Ei({
				type: new at(),
				length: this.numRows
			})]));
			const t = n.fields.slice(), s = r.children.slice(), o = t[e].clone({ type: i.type });
			[t[e], s[e]] = [o, i.data[0]], n = new nn(t, new Map(this.schema.metadata)), r = Ei({
				type: new Ct(t),
				length: r.length,
				children: s
			});
		}
		return new t(n, r, this._metadata);
	}
	select(e) {
		const i = this.schema.select(e), n = new Ct(i.fields), r = [];
		for (const t of e) {
			const e = this.schema.fields.findIndex((e) => e.name === t);
			~e && (r[e] = this.data.children[e]);
		}
		return new t(i, Ei({
			type: n,
			length: this.numRows,
			children: r
		}), this._metadata);
	}
	selectAt(e) {
		const i = this.schema.selectAt(e), n = e.map((t) => this.data.children[t]).filter(Boolean), r = Ei({
			type: new Ct(i.fields),
			length: this.numRows,
			children: n
		});
		return new t(i, r, this._metadata);
	}
};
function En(t, e, i = e.reduce((t, e) => Math.max(t, e.length), 0)) {
	var n;
	const r = [...t.fields], s = [...e], o = (i + 63 & -64) >> 3;
	for (const [a, l] of t.fields.entries()) {
		const t = e[a];
		t && t.length === i || (r[a] = l.clone({ nullable: !0 }), s[a] = null !== (n = null == t ? void 0 : t._changeLengthAndBackfillNullBitmap(i)) && void 0 !== n ? n : Ei({
			type: l.type,
			length: i,
			nullCount: i,
			nullBitmap: new Uint8Array(o)
		}));
	}
	return [t.assign(r), Ei({
		type: new Ct(r),
		length: i,
		children: s
	})];
}
function Nn(t, e, i = /* @__PURE__ */ new Map()) {
	var n, r;
	if ((null !== (n = null == t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0 && (null == t ? void 0 : t.length) === (null == e ? void 0 : e.length)) for (let s = -1, o = t.length; ++s < o;) {
		const { type: n } = t[s], o = e[s];
		for (const t of [o, ...(null === (r = null == o ? void 0 : o.dictionary) || void 0 === r ? void 0 : r.data) || []]) Nn(n.children, null == t ? void 0 : t.children, i);
		if (ot.isDictionary(n)) {
			const { id: t } = n;
			if (i.has(t)) {
				if (i.get(t) !== o.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
			} else null != o && o.dictionary && i.set(t, o.dictionary);
		}
	}
	return i;
}
Dn = Symbol.toStringTag, Mn[Dn] = ((t) => (t._nullCount = -1, t[Symbol.isConcatSpreadable] = !0, t[On] = !0, "RecordBatch"))(Mn.prototype), Object.defineProperty(Mn, Symbol.hasInstance, { value: function(t) {
	return Function.prototype[Symbol.hasInstance].call(this, t) || this === Mn && Mn.isRecordBatch(t);
} });
const Un = {
	TIMESTAMP_MS: "timestamp_ms",
	AXIS_X: "axis_x",
	AXIS_Y: "axis_y",
	AXIS_Z: "axis_z",
	VECTOR_MAGNITUDE: "vector_magnitude",
	TEMPERATURE: "temperature"
};
function Ln(t) {
	const e = (t) => Qi(Ei({
		type: new bt(),
		length: t.length,
		data: t
	}));
	return new Bn({
		timestamp_ms: e(t.timestamp_ms),
		axis_x: e(t.axis_x),
		axis_y: e(t.axis_y),
		axis_z: e(t.axis_z),
		vector_magnitude: e(t.vector_magnitude),
		temperature: e(t.temperature)
	});
}
function Fn(t) {
	const e = (e) => {
		const i = t.getChild(e);
		if (!i) return /* @__PURE__ */ new Float64Array();
		const n = i.toArray();
		return n instanceof Float64Array ? n : new Float64Array(n);
	};
	return {
		timestamp_ms: e(Un.TIMESTAMP_MS),
		axis_x: e(Un.AXIS_X),
		axis_y: e(Un.AXIS_Y),
		axis_z: e(Un.AXIS_Z),
		vector_magnitude: e(Un.VECTOR_MAGNITUDE),
		temperature: e(Un.TEMPERATURE)
	};
}
const xn = {
	GENEACTIV: 0,
	ACTIGRAPH_RAW: 1,
	GENEACTIV_BIN: 2
}, Cn = {
	[xn.GENEACTIV]: 100,
	[xn.ACTIGRAPH_RAW]: 30,
	[xn.GENEACTIV_BIN]: 86
}, _n = 33554432;
async function kn(t, e, n, r, o, a, u, p = !1, y) {
	const d = t.size;
	let h = 0, f = 0;
	const v = p ? new Uint8Array(Math.min(c, d)) : null;
	for (await u.streamParseStart(r, e, a, y), p && await u.sha256Start(); h < d;) {
		if (o?.aborted) throw new DOMException("Aborted: streamParseRaw", "AbortError");
		const e = Math.min(h + _n, d), i = new Uint8Array(await t.slice(h, e).arrayBuffer());
		v && h < v.length && v.set(i.subarray(0, v.length - h), h);
		const r = await (v ? u.streamParseFeedHashed(s(i, [i.buffer])) : u.streamParseFeed(s(i, [i.buffer])));
		f += r, h = e, n?.({
			bytesRead: h,
			totalBytes: d,
			percent: h / d * 100,
			epochsEmitted: f,
			stage: "feed"
		});
	}
	const m = v ? {
		prefixHash: await l(v),
		fullHash: await u.sha256Finish()
	} : void 0;
	n?.({
		bytesRead: d,
		totalBytes: d,
		percent: 100,
		epochsEmitted: f,
		stage: "finalize"
	});
	const g = await u.streamParseFinishChunk(n ? i((t, e) => {
		n({
			bytesRead: d,
			totalBytes: d,
			percent: 100,
			epochsEmitted: f,
			stage: "finalize",
			finalizeStage: t,
			finalizeFraction: e
		});
	}) : void 0);
	g.rawRetentionDegraded ? console.warn(`[local-streaming] recording exceeded the WASM retained-signal memory cap; fell back to streaming wall-clock counts (no byte-exact counts / 5 s GGIR series). size=${String(d)} bytes, sampleFrequency=${String(g.sampleFrequency)} Hz`) : g.canonicalPassDegraded && console.warn(`[local-streaming] canonical whole-signal pass replaced by a degraded tier: ${g.canonicalPassReason ?? "no reason reported (stale wasm bundle?)"} size=${String(d)} bytes, sampleFrequency=${String(g.sampleFrequency)} Hz`);
	const { timestampsMs: b, axisX: S, axisY: w, axisZ: I, vectorMagnitude: T, temperature: A, ...D } = g;
	return {
		...D,
		table: Ln({
			timestamp_ms: b,
			axis_x: S,
			axis_y: w,
			axis_z: I,
			vector_magnitude: T,
			temperature: A
		}),
		...m ? { contentHashes: m } : {}
	};
}
async function Vn(t) {
	const e = await t.slice(0, Math.min(t.size, 65536)).arrayBuffer(), i = new TextDecoder("utf-8", { fatal: !1 }).decode(e).toLowerCase();
	if (i.includes("geneactiv") || i.includes("activinsights")) return i.includes("recorded data") ? xn.GENEACTIV_BIN : xn.GENEACTIV;
	if (i.includes("actigraph")) {
		const t = i.includes("epoch period") && !i.includes("epoch period (hh:mm:ss) 00:00:00") || /date\s*,\s*time\s*,\s*axis1[\s,]/u.test(i) || i.includes("vector magnitude");
		if ((/timestamp\s*,\s*(?:axis1\s*,\s*axis2\s*,\s*axis3|accelerometer x\s*,\s*accelerometer y\s*,\s*accelerometer z)/u.test(i) || /^\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}(?:[.:]\d{1,3})?\s*,/mu.test(i) || /^\d{1,2}\/\d{1,2}\/\d{4}\s+\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?\s*,/mu.test(i)) && !t) return xn.ACTIGRAPH_RAW;
	}
	return null;
}
const jn = 1073741824;
function $n() {
	return "undefined" == typeof navigator ? void 0 : navigator.deviceMemory;
}
const zn = 15e8;
function Rn() {
	return Math.min(zn, function() {
		const t = "undefined" == typeof navigator ? void 0 : navigator.deviceMemory;
		if ("number" != typeof t || !Number.isFinite(t) || t <= 0) return jn;
		const e = Math.floor(1024 * t * 1024 * 1024 / 4);
		return Math.min(2147483648, Math.max(jn, e));
	}());
}
function Pn(t) {
	return t instanceof Error && ("workerLost" in t && !0 === t.workerLost || /timed out during|worker stopped|worker failed/u.test(t.message));
}
const Yn = 3e5;
async function Wn(t, i, n, o, a, u = !1) {
	if (Gn(n, "before buffered file streaming"), t.size > Rn()) throw new Error("This file is too large for in-browser memory. Import a shorter recording, or use a computer with more memory.");
	const p = o ?? e(), y = a ?? (() => r(p)), { withWasmDeadline: d } = await Promise.resolve().then(() => Xn), h = t.size, f = u ? new Uint8Array(Math.min(c, h)) : null;
	u && await p.sha256Start(), await d(p, (t) => t.csvBufferClear(h), {
		ms: Yn,
		label: "csvBufferClear",
		signal: n,
		cancel: y
	});
	let v = 0;
	for (; v < h;) {
		Gn(n, "before buffered file chunk read");
		const e = Math.min(v + _n, h), r = await t.slice(v, e).arrayBuffer();
		Gn(n, "after buffered file chunk read");
		const o = new Uint8Array(r);
		f && v < f.length && f.set(o.subarray(0, f.length - v), v), await d(p, (t) => f ? t.csvBufferAppendHashed(s(o, [o.buffer])) : t.csvBufferAppend(s(o, [o.buffer])), {
			ms: Yn,
			label: "csvBufferAppend",
			signal: n,
			cancel: y
		}), Gn(n, "after buffered file chunk append"), v = e, i({
			bytesRead: v,
			totalBytes: h,
			percent: v / h * 100
		});
	}
	return f ? {
		prefixHash: await l(f),
		fullHash: await p.sha256Finish()
	} : null;
}
function Hn(t, e, i, n, r) {
	return n?.aborted ? Promise.reject(new DOMException(`Aborted: ${i}`, "AbortError")) : new Promise((s, o) => {
		let a = !1, l = null, c = null;
		const u = () => {
			null !== l && (clearTimeout(l), l = null), c && n && (n.removeEventListener("abort", c), c = null);
		}, p = (t) => {
			a || (a = !0, u(), o(function(t) {
				return t instanceof Error ? t : "string" == typeof t && t.trim() ? new Error(t) : t && "object" == typeof t && "string" == typeof t.message ? new Error(t.message) : /* @__PURE__ */ new Error(`In-browser processing failed: ${String(t)}`);
			}(t)));
		}, y = (t) => {
			if (!a) {
				a = !0, u();
				try {
					r();
				} catch {}
				o(t);
			}
		};
		if (c = () => {
			y(new DOMException(`Aborted: ${i}`, "AbortError"));
		}, n?.addEventListener("abort", c, { once: !0 }), n?.aborted) return void p(new DOMException(`Aborted: ${i}`, "AbortError"));
		let d;
		try {
			d = t();
		} catch (h) {
			p(h);
			return;
		}
		a || (l = setTimeout(() => {
			y(/* @__PURE__ */ new Error(`In-browser processing timed out during "${i}". Try a shorter recording.`));
		}, e)), Promise.resolve(d).then((t) => {
			a || (a = !0, u(), s(t));
		}, p);
	});
}
function Gn(t, e = "processing") {
	if (t?.aborted) throw new DOMException(`Aborted: ${e}`, "AbortError");
}
function qn(t) {
	const e = new AbortController();
	if (!t) return {
		controller: e,
		release: () => {}
	};
	const i = () => {
		e.abort(t.reason);
	};
	return t.aborted ? i() : t.addEventListener("abort", i, { once: !0 }), {
		controller: e,
		release: () => {
			t.removeEventListener("abort", i);
		}
	};
}
function Jn(t, e, i = "processing") {
	if (e?.aborted) throw new DOMException(`Aborted: ${i}`, "AbortError");
	if (t instanceof Error && "AbortError" === t.name) throw t;
}
var Xn = t({
	BackgroundJobBusyError: () => Kn,
	backgroundWasmApi: () => ur,
	runBackgroundJob: () => yr,
	setBackgroundJobVisibleFile: () => rr,
	wasmApiWithDeadline: () => cr,
	withBackgroundWasm: () => ar,
	withWasmDeadline: () => lr,
	yieldBackgroundJob: () => Zn
}), Kn = class extends Error {
	name = "BackgroundJobBusyError";
	kind;
	constructor(t) {
		super("This job is running in another tab."), this.kind = t;
	}
};
async function Zn(t) {
	t?.throwIfAborted();
	const e = globalThis.scheduler;
	e?.yield ? await e.yield() : await new Promise((t) => {
		const e = new MessageChannel();
		e.port1.onmessage = () => {
			e.port1.close(), e.port2.close(), t();
		}, e.port2.postMessage(null);
	}), t?.throwIfAborted();
}
const Qn = /* @__PURE__ */ new Map(), tr = 100, er = /* @__PURE__ */ new Map();
let ir, nr;
function rr(t) {
	ir = t;
}
let sr = Promise.resolve();
const or = /* @__PURE__ */ new WeakMap();
function ar(t, i, { ms: s, label: o } = {
	ms: Yn,
	label: "background computation"
}, l) {
	if (!t) {
		const n = e();
		return Hn(() => i(n), s, o, t, () => {
			r(n), l?.();
		});
	}
	const c = sr, u = a(c, t).then(async () => {
		t.throwIfAborted();
		const e = nr ??= n();
		let r = !1;
		const a = () => {
			r || (r = !0, nr === e && (nr = void 0), e.terminate());
		};
		try {
			return await Hn(() => i(e.api), s, o, t, () => {
				a(), l?.();
			});
		} catch (c) {
			throw a(), c;
		}
	});
	return sr = Promise.allSettled([c, u]).then(() => {}), u;
}
function lr(t, e, { signal: i, cancel: n, ...r }) {
	const s = or.get(t);
	return s ? ar(i ?? s, async (t) => await e(t), r, n) : Hn(() => e(t), r.ms, r.label, i, n);
}
function cr(t, e) {
	const i = or.get(t), n = new Proxy(t, { get: (n, r) => {
		if ("string" == typeof r && "then" !== r) return i || "function" == typeof Reflect.get(t, r) ? (...i) => lr(t, (t) => Reflect.apply(Reflect.get(t, r), t, i), {
			...e,
			label: e.label ?? r
		}) : Reflect.get(t, r);
	} });
	return i && or.set(n, i), n;
}
function ur(t, i) {
	if (!t) return e();
	const n = {};
	return or.set(n, t), cr(n, {
		ms: Yn,
		...i,
		signal: t,
		cancel: () => {}
	});
}
function pr(t) {
	if ("undefined" == typeof document || "hidden" !== document.visibilityState) return;
	document.title = `${t ? "[Failed]" : "[Done]"} ${document.title.replace(/^\[(Done|Failed)\] /, "")}`;
	const e = () => {
		"hidden" !== document.visibilityState && (document.title = document.title.replace(/^\[(Done|Failed)\] /, ""), document.removeEventListener("visibilitychange", e));
	};
	document.addEventListener("visibilitychange", e);
}
function yr({ kind: t, key: e, label: i, run: n, workspaceId: r = f().name, rerun: s = !1, lockKey: l = e, signal: c }) {
	const b = `${r}:${e}`, S = Qn.get(b);
	if (S && !s) return g(S.controller.signal, c), a(S.promise, c);
	if (c?.aborted) return Promise.reject(o(c));
	if (S) {
		const s = () => yr({
			kind: t,
			key: e,
			label: i,
			run: n,
			workspaceId: r,
			lockKey: l,
			signal: c
		});
		if (S.pending?.signal?.aborted && delete S.pending, S.pending) return S.pending.requests.push({
			run: s,
			signal: c
		}), a(S.pending.promise, c);
		const u = S.controller.signal.aborted ? void 0 : S.controller.signal, p = {
			requests: [{
				run: s,
				signal: c
			}],
			signal: u,
			promise: Promise.resolve()
		};
		return p.promise = a(Promise.allSettled([S.promise]).then(() => {
			u?.throwIfAborted(), p.requests = p.requests.filter((t) => !t.signal?.aborted);
			const t = p.requests.at(-1);
			if (!t) throw o();
			const e = t.run();
			for (const i of p.requests) g(Qn.get(b)?.controller.signal, i.signal);
			return e;
		}), u), S.pending = p, a(p.promise, c);
	}
	const w = new AbortController(), I = m(w.signal, c), T = () => w.abort(c?.reason);
	c?.addEventListener("abort", T, { once: !0 });
	const A = y.getState(), D = h(t), B = p(t), O = (t) => {
		y.getState().jobs[b]?.controller === w && A.update(b, t);
	};
	A.update(b, {
		id: b,
		workspaceId: r,
		kind: t,
		key: e,
		label: i,
		controller: w,
		status: v.QUEUED,
		done: 0,
		total: 0,
		visible: !B,
		message: void 0,
		detail: void 0
	}), t !== u.IMPORT && t !== u.REPROCESS || y.setState({
		localProcessingJobId: b,
		isLocalProcessing: !0
	});
	const M = `${r}:${t}`, E = er.get(M) ?? [];
	let N, U;
	er.set(M, E);
	let L = -1 / 0;
	const F = () => {
		clearTimeout(N), N = void 0, U && !w.signal.aborted && (O(U), U = void 0, L = Date.now());
	}, x = async () => (w.signal.throwIfAborted(), O({ status: v.RUNNING }), n({
		signal: w.signal,
		progress: (t, e, i, n) => {
			if (w.signal.aborted) return;
			const r = U?.detail ?? y.getState().jobs[b]?.detail;
			U = {
				done: t,
				total: e,
				message: i,
				...void 0 !== n ? { detail: n } : {}
			}, L === -1 / 0 || t >= e || null === n || void 0 !== n && (n?.step !== r?.step || n?.warning !== r?.warning) || "save" === n?.step || "done" === n?.step || Date.now() - L >= tr ? F() : N ??= setTimeout(F, tr - (Date.now() - L));
		},
		yieldNow: () => Zn(w.signal)
	}));
	let C, _ = !1;
	const k = new Promise((t, e) => {
		C = () => {
			_ = !0, t();
		}, w.signal.addEventListener("abort", () => {
			_ || e(o(w.signal));
		}, { once: !0 });
	}), V = {
		key: e,
		start: C,
		bypassed: !1
	}, j = k.then(async () => (w.signal.throwIfAborted(), "undefined" != typeof navigator && navigator.locks?.request ? navigator.locks.request(`${r}:${l}`, { ifAvailable: !0 }, async (e) => {
		if (!e) {
			if (D) return;
			throw O({
				status: v.ELSEWHERE,
				message: "running in another tab"
			}), new Kn(t);
		}
		return x();
	}) : x())).then((t) => {
		F();
		const e = y.getState().jobs[b]?.status === v.FAILED;
		return O({ status: w.signal.aborted ? v.CANCELLED : e ? v.FAILED : v.DONE }), w.signal.aborted || B && !e || pr(e), t;
	}, (t) => {
		if (y.getState().jobs[b]?.status !== v.ELSEWHERE) {
			const e = w.signal.aborted || t instanceof Error && "AbortError" === t.name;
			O({ status: e ? v.CANCELLED : v.FAILED }), e || pr(!0);
		}
		throw t;
	}).finally(() => {
		I(), c?.removeEventListener("abort", T), clearTimeout(N);
		const t = y.getState().jobs[b];
		D && t?.controller === w && t.status !== v.FAILED && A.dismiss(b), d(y.getState())?.controller === w && A.setIsLocalProcessing(!1), Qn.get(b)?.promise === j && Qn.delete(b);
		const e = E.indexOf(V);
		if (e >= 0 && E.splice(e, 1), 0 === e) try {
			const t = ir?.();
			if (E.length > 1 && !E[0].bypassed && "local" === t?.currentFileSource && null !== t.currentFileId && f().name === r) {
				const e = E.findIndex((e) => e.key.split(":")[1] === String(t.currentFileId));
				e > 0 && (E[0].bypassed = !0, E.unshift(E.splice(e, 1)[0]));
			}
		} catch {} finally {
			E[0]?.start();
		}
		0 === E.length && er.delete(M);
	});
	return Qn.set(b, {
		kind: t,
		promise: j,
		controller: w
	}), E.push(V), 1 === E.length && C(), j;
}
export { Fn as C, Un as S, $n as _, ar as a, Vn as b, zn as c, Gn as d, qn as f, Hn as g, Wn as h, cr as i, Yn as l, Jn as m, yr as n, lr as o, Pn as p, rr as r, Zn as s, ur as t, Rn as u, Cn as v, kn as x, xn as y };
