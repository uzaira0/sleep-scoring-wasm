import { Fn as t } from "./schema-DEVpUo98.js";
import { i as e, n as i, o as n, r, s } from "./workers-DmTzGLlL.js";
import { $ as o, G as a, H as l, J as c, K as u, U as p, et as y, q as d, t as h } from "./workspace-db-n_HVAtxY.js";
import { f, s as v, t as m } from "./content-hash-D4_ZE65l.js";
import { r as g, t as b } from "./project-revision-DJpicTFJ.js";
const S = new TextDecoder("utf-8"), w = S.decode.bind(S), I = new TextEncoder(), T = (t) => I.encode(t), A = (t) => "function" == typeof t, D = (t) => null != t && Object(t) === t, B = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer;
function O(t, e) {
	let i = D(n = e) && "done" in n && "value" in n ? e.value : e;
	var n;
	return i instanceof t ? t === Uint8Array ? new t(i.buffer, i.byteOffset, i.byteLength) : i : i ? ("string" == typeof i && (i = T(i)), i instanceof ArrayBuffer || i instanceof B ? new t(i) : ((t) => D(t) && A(t.clear) && A(t.bytes) && A(t.position) && A(t.setPosition) && A(t.capacity) && A(t.getBufferIdentifier) && A(t.createLong))(i) ? O(t, i.bytes()) : ArrayBuffer.isView(i) ? i.byteLength <= 0 ? new t(0) : new t(i.buffer, i.byteOffset, i.byteLength / t.BYTES_PER_ELEMENT) : t.from(i)) : new t(0);
}
const M = (t) => O(Int32Array, t), E = (t) => O(BigInt64Array, t), U = (t) => O(Uint8Array, t);
var N, L, F, x, C, _, k, V;
function j(t) {
	if (null === t) return "null";
	if (void 0 === t) return "undefined";
	switch (typeof t) {
		case "number":
		case "bigint": return `${t}`;
		case "string": return `"${t}"`;
	}
	return "function" == typeof t[Symbol.toPrimitive] ? t[Symbol.toPrimitive]("string") : ArrayBuffer.isView(t) ? t instanceof BigInt64Array || t instanceof BigUint64Array ? `[${[...t].map((t) => j(t))}]` : `[${t}]` : ArrayBuffer.isView(t) ? `[${t}]` : JSON.stringify(t, (t, e) => "bigint" == typeof e ? `${e}` : e);
}
function $(t) {
	if ("bigint" == typeof t && (t < Number.MIN_SAFE_INTEGER || t > Number.MAX_SAFE_INTEGER)) throw new TypeError(`${t} is not safe to convert to a number.`);
	return Number(t);
}
function z(t, e) {
	return $(t / e) + $(t % e) / $(e);
}
(function(t) {
	t[t.V1 = 0] = "V1", t[t.V2 = 1] = "V2", t[t.V3 = 2] = "V3", t[t.V4 = 3] = "V4", t[t.V5 = 4] = "V5";
})(N || (N = {})), function(t) {
	t[t.Sparse = 0] = "Sparse", t[t.Dense = 1] = "Dense";
}(L || (L = {})), function(t) {
	t[t.HALF = 0] = "HALF", t[t.SINGLE = 1] = "SINGLE", t[t.DOUBLE = 2] = "DOUBLE";
}(F || (F = {})), function(t) {
	t[t.DAY = 0] = "DAY", t[t.MILLISECOND = 1] = "MILLISECOND";
}(x || (x = {})), function(t) {
	t[t.SECOND = 0] = "SECOND", t[t.MILLISECOND = 1] = "MILLISECOND", t[t.MICROSECOND = 2] = "MICROSECOND", t[t.NANOSECOND = 3] = "NANOSECOND";
}(C || (C = {})), function(t) {
	t[t.YEAR_MONTH = 0] = "YEAR_MONTH", t[t.DAY_TIME = 1] = "DAY_TIME", t[t.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
}(_ || (_ = {})), function(t) {
	t[t.NONE = 0] = "NONE", t[t.Null = 1] = "Null", t[t.Int = 2] = "Int", t[t.Float = 3] = "Float", t[t.Binary = 4] = "Binary", t[t.Utf8 = 5] = "Utf8", t[t.Bool = 6] = "Bool", t[t.Decimal = 7] = "Decimal", t[t.Date = 8] = "Date", t[t.Time = 9] = "Time", t[t.Timestamp = 10] = "Timestamp", t[t.Interval = 11] = "Interval", t[t.List = 12] = "List", t[t.Struct = 13] = "Struct", t[t.Union = 14] = "Union", t[t.FixedSizeBinary = 15] = "FixedSizeBinary", t[t.FixedSizeList = 16] = "FixedSizeList", t[t.Map = 17] = "Map", t[t.Duration = 18] = "Duration", t[t.LargeBinary = 19] = "LargeBinary", t[t.LargeUtf8 = 20] = "LargeUtf8", t[t.LargeList = 21] = "LargeList", t[t.BinaryView = 23] = "BinaryView", t[t.Utf8View = 24] = "Utf8View", t[t.Dictionary = -1] = "Dictionary", t[t.Int8 = -2] = "Int8", t[t.Int16 = -3] = "Int16", t[t.Int32 = -4] = "Int32", t[t.Int64 = -5] = "Int64", t[t.Uint8 = -6] = "Uint8", t[t.Uint16 = -7] = "Uint16", t[t.Uint32 = -8] = "Uint32", t[t.Uint64 = -9] = "Uint64", t[t.Float16 = -10] = "Float16", t[t.Float32 = -11] = "Float32", t[t.Float64 = -12] = "Float64", t[t.DateDay = -13] = "DateDay", t[t.DateMillisecond = -14] = "DateMillisecond", t[t.TimestampSecond = -15] = "TimestampSecond", t[t.TimestampMillisecond = -16] = "TimestampMillisecond", t[t.TimestampMicrosecond = -17] = "TimestampMicrosecond", t[t.TimestampNanosecond = -18] = "TimestampNanosecond", t[t.TimeSecond = -19] = "TimeSecond", t[t.TimeMillisecond = -20] = "TimeMillisecond", t[t.TimeMicrosecond = -21] = "TimeMicrosecond", t[t.TimeNanosecond = -22] = "TimeNanosecond", t[t.DenseUnion = -23] = "DenseUnion", t[t.SparseUnion = -24] = "SparseUnion", t[t.IntervalDayTime = -25] = "IntervalDayTime", t[t.IntervalYearMonth = -26] = "IntervalYearMonth", t[t.DurationSecond = -27] = "DurationSecond", t[t.DurationMillisecond = -28] = "DurationMillisecond", t[t.DurationMicrosecond = -29] = "DurationMicrosecond", t[t.DurationNanosecond = -30] = "DurationNanosecond", t[t.IntervalMonthDayNano = -31] = "IntervalMonthDayNano";
}(k || (k = {})), function(t) {
	t[t.OFFSET = 0] = "OFFSET", t[t.DATA = 1] = "DATA", t[t.VALIDITY = 2] = "VALIDITY", t[t.TYPE = 3] = "TYPE";
}(V || (V = {}));
const R = Symbol.for("isArrowBigNum");
function P(t, ...e) {
	return 0 === e.length ? Object.setPrototypeOf(O(this.TypedArray, t), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(t, ...e), this.constructor.prototype);
}
function Y(...t) {
	return P.apply(this, t);
}
function H(...t) {
	return P.apply(this, t);
}
function W(...t) {
	return P.apply(this, t);
}
P.prototype[R] = !0, P.prototype.toJSON = function() {
	return `"${J(this)}"`;
}, P.prototype.valueOf = function(t) {
	return q(this, t);
}, P.prototype.toString = function() {
	return J(this);
}, P.prototype[Symbol.toPrimitive] = function(t = "default") {
	switch (t) {
		case "number": return q(this);
		case "string": return J(this);
		case "default": return 8 === (e = this).byteLength ? new e.BigIntArray(e.buffer, e.byteOffset, 1)[0] : J(e);
	}
	var e;
	return J(this);
}, Object.setPrototypeOf(Y.prototype, Object.create(Int32Array.prototype)), Object.setPrototypeOf(H.prototype, Object.create(Uint32Array.prototype)), Object.setPrototypeOf(W.prototype, Object.create(Uint32Array.prototype)), Object.assign(Y.prototype, P.prototype, {
	constructor: Y,
	signed: !0,
	TypedArray: Int32Array,
	BigIntArray: BigInt64Array
}), Object.assign(H.prototype, P.prototype, {
	constructor: H,
	signed: !1,
	TypedArray: Uint32Array,
	BigIntArray: BigUint64Array
}), Object.assign(W.prototype, P.prototype, {
	constructor: W,
	signed: !0,
	TypedArray: Uint32Array,
	BigIntArray: BigUint64Array
});
const G = BigInt(4294967296) * BigInt(4294967296) - BigInt(1);
function q(t, e) {
	const { buffer: i, byteOffset: n, byteLength: r, signed: s } = t, o = new BigUint64Array(i, n, r / 8), a = s && o.at(-1) & BigInt(1) << BigInt(63);
	let l = BigInt(0), c = 0;
	if (a) {
		for (const t of o) l |= (t ^ G) * (BigInt(1) << BigInt(64 * c++));
		l *= BigInt(-1), l -= BigInt(1);
	} else for (const u of o) l |= u * (BigInt(1) << BigInt(64 * c++));
	if ("number" == typeof e && e > 0) {
		const t = BigInt("1".padEnd(e + 1, "0")), i = a ? -l % t : l % t, n = $(l / t);
		return +`${a && 0 === n ? "-" : ""}${n}.${`${i}`.padStart(e, "0")}`;
	}
	return $(l);
}
function J(t) {
	if (8 === t.byteLength) return `${new t.BigIntArray(t.buffer, t.byteOffset, 1)[0]}`;
	if (!t.signed) return X(t);
	let e = new Uint16Array(t.buffer, t.byteOffset, t.byteLength / 2);
	if (new Int16Array([e.at(-1)])[0] >= 0) return X(t);
	e = e.slice();
	let i = 1;
	for (let n = 0; n < e.length; n++) {
		const t = e[n], r = ~t + i;
		e[n] = r, i &= 0 === t ? 1 : 0;
	}
	return `-${X(e)}`;
}
function X(t) {
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
var K, Z, Q, tt, et, it, nt, rt = class t {
	static new(t, e) {
		switch (e) {
			case !0: return new Y(t);
			case !1: return new H(t);
		}
		switch (t.constructor) {
			case Int8Array:
			case Int16Array:
			case Int32Array:
			case BigInt64Array: return new Y(t);
		}
		return 16 === t.byteLength ? new W(t) : new H(t);
	}
	static signed(t) {
		return new Y(t);
	}
	static unsigned(t) {
		return new H(t);
	}
	static decimal(t) {
		return new W(t);
	}
	constructor(e, i) {
		return t.new(e, i);
	}
};
const st = Symbol.for("apache-arrow/DataType");
var ot, at = class t {
	static isDataType(t) {
		return !0 === (null == t ? void 0 : t[st]);
	}
	static isNull(t) {
		return (null == t ? void 0 : t.typeId) === k.Null;
	}
	static isInt(t) {
		return (null == t ? void 0 : t.typeId) === k.Int;
	}
	static isFloat(t) {
		return (null == t ? void 0 : t.typeId) === k.Float;
	}
	static isBinary(t) {
		return (null == t ? void 0 : t.typeId) === k.Binary;
	}
	static isBinaryView(t) {
		return (null == t ? void 0 : t.typeId) === k.BinaryView;
	}
	static isLargeBinary(t) {
		return (null == t ? void 0 : t.typeId) === k.LargeBinary;
	}
	static isUtf8(t) {
		return (null == t ? void 0 : t.typeId) === k.Utf8;
	}
	static isUtf8View(t) {
		return (null == t ? void 0 : t.typeId) === k.Utf8View;
	}
	static isLargeUtf8(t) {
		return (null == t ? void 0 : t.typeId) === k.LargeUtf8;
	}
	static isBool(t) {
		return (null == t ? void 0 : t.typeId) === k.Bool;
	}
	static isDecimal(t) {
		return (null == t ? void 0 : t.typeId) === k.Decimal;
	}
	static isDate(t) {
		return (null == t ? void 0 : t.typeId) === k.Date;
	}
	static isTime(t) {
		return (null == t ? void 0 : t.typeId) === k.Time;
	}
	static isTimestamp(t) {
		return (null == t ? void 0 : t.typeId) === k.Timestamp;
	}
	static isInterval(t) {
		return (null == t ? void 0 : t.typeId) === k.Interval;
	}
	static isDuration(t) {
		return (null == t ? void 0 : t.typeId) === k.Duration;
	}
	static isList(t) {
		return (null == t ? void 0 : t.typeId) === k.List;
	}
	static isLargeList(t) {
		return (null == t ? void 0 : t.typeId) === k.LargeList;
	}
	static isStruct(t) {
		return (null == t ? void 0 : t.typeId) === k.Struct;
	}
	static isUnion(t) {
		return (null == t ? void 0 : t.typeId) === k.Union;
	}
	static isFixedSizeBinary(t) {
		return (null == t ? void 0 : t.typeId) === k.FixedSizeBinary;
	}
	static isFixedSizeList(t) {
		return (null == t ? void 0 : t.typeId) === k.FixedSizeList;
	}
	static isMap(t) {
		return (null == t ? void 0 : t.typeId) === k.Map;
	}
	static isDictionary(t) {
		return (null == t ? void 0 : t.typeId) === k.Dictionary;
	}
	static isDenseUnion(e) {
		return t.isUnion(e) && e.mode === L.Dense;
	}
	static isSparseUnion(e) {
		return t.isUnion(e) && e.mode === L.Sparse;
	}
	constructor(t) {
		this.typeId = t;
	}
};
K = Symbol.toStringTag, at[K] = ((ot = at.prototype).children = null, ot.ArrayType = Array, ot.OffsetArrayType = Int32Array, ot[st] = !0, ot[Symbol.toStringTag] = "DataType");
var lt = class extends at {
	constructor() {
		super(k.Null);
	}
	toString() {
		return "Null";
	}
};
Z = Symbol.toStringTag, lt[Z] = lt.prototype[Symbol.toStringTag] = "Null";
var ct = class extends at {
	constructor(t, e) {
		super(k.Int), this.isSigned = t, this.bitWidth = e;
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
Q = Symbol.toStringTag, ct[Q] = ((t) => (t.isSigned = null, t.bitWidth = null, t[Symbol.toStringTag] = "Int"))(ct.prototype);
var ut = class extends ct {
	constructor() {
		super(!0, 8);
	}
	get ArrayType() {
		return Int8Array;
	}
}, pt = class extends ct {
	constructor() {
		super(!0, 16);
	}
	get ArrayType() {
		return Int16Array;
	}
}, yt = class extends ct {
	constructor() {
		super(!0, 32);
	}
	get ArrayType() {
		return Int32Array;
	}
}, dt = class extends ct {
	constructor() {
		super(!0, 64);
	}
	get ArrayType() {
		return BigInt64Array;
	}
}, ht = class extends ct {
	constructor() {
		super(!1, 8);
	}
	get ArrayType() {
		return Uint8Array;
	}
}, ft = class extends ct {
	constructor() {
		super(!1, 16);
	}
	get ArrayType() {
		return Uint16Array;
	}
}, vt = class extends ct {
	constructor() {
		super(!1, 32);
	}
	get ArrayType() {
		return Uint32Array;
	}
}, mt = class extends ct {
	constructor() {
		super(!1, 64);
	}
	get ArrayType() {
		return BigUint64Array;
	}
};
Object.defineProperty(ut.prototype, "ArrayType", { value: Int8Array }), Object.defineProperty(pt.prototype, "ArrayType", { value: Int16Array }), Object.defineProperty(yt.prototype, "ArrayType", { value: Int32Array }), Object.defineProperty(dt.prototype, "ArrayType", { value: BigInt64Array }), Object.defineProperty(ht.prototype, "ArrayType", { value: Uint8Array }), Object.defineProperty(ft.prototype, "ArrayType", { value: Uint16Array }), Object.defineProperty(vt.prototype, "ArrayType", { value: Uint32Array }), Object.defineProperty(mt.prototype, "ArrayType", { value: BigUint64Array });
var gt = class extends at {
	constructor(t) {
		super(k.Float), this.precision = t;
	}
	get ArrayType() {
		switch (this.precision) {
			case F.HALF: return Uint16Array;
			case F.SINGLE: return Float32Array;
			case F.DOUBLE: return Float64Array;
		}
		throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
	}
	toString() {
		return `Float${this.precision << 5 || 16}`;
	}
};
tt = Symbol.toStringTag, gt[tt] = ((t) => (t.precision = null, t[Symbol.toStringTag] = "Float"))(gt.prototype);
var bt = class extends gt {
	constructor() {
		super(F.SINGLE);
	}
}, St = class extends gt {
	constructor() {
		super(F.DOUBLE);
	}
};
Object.defineProperty(class extends gt {
	constructor() {
		super(F.HALF);
	}
}.prototype, "ArrayType", { value: Uint16Array }), Object.defineProperty(bt.prototype, "ArrayType", { value: Float32Array }), Object.defineProperty(St.prototype, "ArrayType", { value: Float64Array });
var wt = class extends at {
	constructor() {
		super(k.Binary);
	}
	toString() {
		return "Binary";
	}
};
wt[Symbol.toStringTag] = ((t) => (t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "Binary"))(wt.prototype);
var It = class extends at {
	constructor() {
		super(k.BinaryView);
	}
	toString() {
		return "BinaryView";
	}
};
et = Symbol.toStringTag, It.ELEMENT_WIDTH = 16, It.INLINE_CAPACITY = 12, It.LENGTH_OFFSET = 0, It.INLINE_OFFSET = 4, It.BUFFER_INDEX_OFFSET = 8, It.BUFFER_OFFSET_OFFSET = 12, It[et] = ((t) => (t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "BinaryView"))(It.prototype);
var Tt = class extends at {
	constructor() {
		super(k.LargeBinary);
	}
	toString() {
		return "LargeBinary";
	}
};
Tt[Symbol.toStringTag] = ((t) => (t.ArrayType = Uint8Array, t.OffsetArrayType = BigInt64Array, t[Symbol.toStringTag] = "LargeBinary"))(Tt.prototype);
var At = class extends at {
	constructor() {
		super(k.Utf8);
	}
	toString() {
		return "Utf8";
	}
};
At[Symbol.toStringTag] = ((t) => (t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "Utf8"))(At.prototype);
var Dt = class extends at {
	constructor() {
		super(k.Utf8View);
	}
	toString() {
		return "Utf8View";
	}
};
it = Symbol.toStringTag, Dt.ELEMENT_WIDTH = It.ELEMENT_WIDTH, Dt.INLINE_CAPACITY = It.INLINE_CAPACITY, Dt[it] = ((t) => (t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "Utf8View"))(Dt.prototype);
var Bt = class extends at {
	constructor() {
		super(k.LargeUtf8);
	}
	toString() {
		return "LargeUtf8";
	}
};
Bt[Symbol.toStringTag] = ((t) => (t.ArrayType = Uint8Array, t.OffsetArrayType = BigInt64Array, t[Symbol.toStringTag] = "LargeUtf8"))(Bt.prototype);
var Ot = class extends at {
	constructor() {
		super(k.Bool);
	}
	toString() {
		return "Bool";
	}
};
Ot[Symbol.toStringTag] = ((t) => (t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "Bool"))(Ot.prototype);
var Mt = class extends at {
	constructor(t, e, i = 128) {
		super(k.Decimal), this.scale = t, this.precision = e, this.bitWidth = i;
	}
	toString() {
		return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`;
	}
};
Mt[Symbol.toStringTag] = ((t) => (t.scale = null, t.precision = null, t.ArrayType = Uint32Array, t[Symbol.toStringTag] = "Decimal"))(Mt.prototype);
var Et = class extends at {
	constructor(t) {
		super(k.Date), this.unit = t;
	}
	toString() {
		return `Date${32 * (this.unit + 1)}<${x[this.unit]}>`;
	}
	get ArrayType() {
		return this.unit === x.DAY ? Int32Array : BigInt64Array;
	}
};
Et[Symbol.toStringTag] = ((t) => (t.unit = null, t[Symbol.toStringTag] = "Date"))(Et.prototype);
var Ut = class extends at {
	constructor(t, e) {
		super(k.Time), this.unit = t, this.bitWidth = e;
	}
	toString() {
		return `Time${this.bitWidth}<${C[this.unit]}>`;
	}
	get ArrayType() {
		switch (this.bitWidth) {
			case 32: return Int32Array;
			case 64: return BigInt64Array;
		}
		throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
	}
};
Ut[Symbol.toStringTag] = ((t) => (t.unit = null, t.bitWidth = null, t[Symbol.toStringTag] = "Time"))(Ut.prototype);
var Nt = class extends at {
	constructor(t, e) {
		super(k.Timestamp), this.unit = t, this.timezone = e;
	}
	toString() {
		return `Timestamp<${C[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
	}
};
Nt[Symbol.toStringTag] = ((t) => (t.unit = null, t.timezone = null, t.ArrayType = BigInt64Array, t[Symbol.toStringTag] = "Timestamp"))(Nt.prototype);
var Lt = class extends at {
	constructor(t) {
		super(k.Interval), this.unit = t;
	}
	toString() {
		return `Interval<${_[this.unit]}>`;
	}
};
Lt[Symbol.toStringTag] = ((t) => (t.unit = null, t.ArrayType = Int32Array, t[Symbol.toStringTag] = "Interval"))(Lt.prototype);
var Ft = class extends at {
	constructor(t) {
		super(k.Duration), this.unit = t;
	}
	toString() {
		return `Duration<${C[this.unit]}>`;
	}
};
Ft[Symbol.toStringTag] = ((t) => (t.unit = null, t.ArrayType = BigInt64Array, t[Symbol.toStringTag] = "Duration"))(Ft.prototype);
var xt = class extends at {
	constructor(t) {
		super(k.List), this.children = [t];
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
xt[Symbol.toStringTag] = ((t) => (t.children = null, t[Symbol.toStringTag] = "List"))(xt.prototype);
var Ct = class extends at {
	constructor(t) {
		super(k.LargeList), this.children = [t];
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
Ct[Symbol.toStringTag] = ((t) => (t.children = null, t.OffsetArrayType = BigInt64Array, t[Symbol.toStringTag] = "LargeList"))(Ct.prototype);
var _t = class extends at {
	constructor(t) {
		super(k.Struct), this.children = t;
	}
	toString() {
		return `Struct<{${this.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
	}
};
nt = Symbol.toStringTag, _t[nt] = ((t) => (t.children = null, t[Symbol.toStringTag] = "Struct"))(_t.prototype);
var kt = class extends at {
	constructor(t, e, i) {
		super(k.Union), this.mode = t, this.children = i, this.typeIds = e = Int32Array.from(e), this.typeIdToChildIndex = e.reduce((t, e, i) => (t[e] = i) && t || t, Object.create(null));
	}
	toString() {
		return `${this[Symbol.toStringTag]}<${this.children.map((t) => `${t.type}`).join(" | ")}>`;
	}
};
kt[Symbol.toStringTag] = ((t) => (t.mode = null, t.typeIds = null, t.children = null, t.typeIdToChildIndex = null, t.ArrayType = Int8Array, t[Symbol.toStringTag] = "Union"))(kt.prototype);
var Vt = class extends at {
	constructor(t) {
		super(k.FixedSizeBinary), this.byteWidth = t;
	}
	toString() {
		return `FixedSizeBinary[${this.byteWidth}]`;
	}
};
Vt[Symbol.toStringTag] = ((t) => (t.byteWidth = null, t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "FixedSizeBinary"))(Vt.prototype);
var jt = class extends at {
	constructor(t, e) {
		super(k.FixedSizeList), this.listSize = t, this.children = [e];
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
jt[Symbol.toStringTag] = ((t) => (t.children = null, t.listSize = null, t[Symbol.toStringTag] = "FixedSizeList"))(jt.prototype);
var $t = class extends at {
	constructor(t, e = !1) {
		var i, n, r;
		if (super(k.Map), this.children = [t], this.keysSorted = e, t && (t.name = "entries", null === (i = null == t ? void 0 : t.type) || void 0 === i ? void 0 : i.children)) {
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
$t[Symbol.toStringTag] = ((t) => (t.children = null, t.keysSorted = null, t[Symbol.toStringTag] = "Map_"))($t.prototype);
const zt = (Rt = -1, () => ++Rt);
var Rt, Pt = class extends at {
	constructor(t, e, i, n) {
		super(k.Dictionary), this.indices = e, this.dictionary = t, this.isOrdered = n || !1, this.id = null == i ? zt() : $(i);
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
function Yt(t) {
	const e = t;
	switch (t.typeId) {
		case k.Decimal: return t.bitWidth / 32;
		case k.Interval: return e.unit === _.MONTH_DAY_NANO ? 4 : 1 + e.unit;
		case k.BinaryView:
		case k.Utf8View: return 16;
		case k.FixedSizeList: return e.listSize;
		case k.FixedSizeBinary: return e.byteWidth;
		default: return 1;
	}
}
Pt[Symbol.toStringTag] = ((t) => (t.id = null, t.indices = null, t.isOrdered = null, t.dictionary = null, t[Symbol.toStringTag] = "Dictionary"))(Pt.prototype);
var Ht = class {
	visitMany(t, ...e) {
		return t.map((t, i) => this.visit(t, ...e.map((t) => t[i])));
	}
	visit(...t) {
		return this.getVisitFn(t[0], !1).apply(this, t);
	}
	getVisitFn(t, e = !0) {
		return function(t, e, i = !0) {
			return "number" == typeof e ? Wt(t, e, i) : "string" == typeof e && e in k ? Wt(t, k[e], i) : e && e instanceof at ? Wt(t, Gt(e), i) : (null == e ? void 0 : e.type) && e.type instanceof at ? Wt(t, Gt(e.type), i) : Wt(t, k.NONE, i);
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
		case k.Null:
			n = t.visitNull;
			break;
		case k.Bool:
			n = t.visitBool;
			break;
		case k.Int:
			n = t.visitInt;
			break;
		case k.Int8:
			n = t.visitInt8 || t.visitInt;
			break;
		case k.Int16:
			n = t.visitInt16 || t.visitInt;
			break;
		case k.Int32:
			n = t.visitInt32 || t.visitInt;
			break;
		case k.Int64:
			n = t.visitInt64 || t.visitInt;
			break;
		case k.Uint8:
			n = t.visitUint8 || t.visitInt;
			break;
		case k.Uint16:
			n = t.visitUint16 || t.visitInt;
			break;
		case k.Uint32:
			n = t.visitUint32 || t.visitInt;
			break;
		case k.Uint64:
			n = t.visitUint64 || t.visitInt;
			break;
		case k.Float:
			n = t.visitFloat;
			break;
		case k.Float16:
			n = t.visitFloat16 || t.visitFloat;
			break;
		case k.Float32:
			n = t.visitFloat32 || t.visitFloat;
			break;
		case k.Float64:
			n = t.visitFloat64 || t.visitFloat;
			break;
		case k.Utf8:
			n = t.visitUtf8;
			break;
		case k.LargeUtf8:
			n = t.visitLargeUtf8;
			break;
		case k.Utf8View:
			n = t.visitUtf8View || t.visitUtf8;
			break;
		case k.Binary:
			n = t.visitBinary;
			break;
		case k.LargeBinary:
			n = t.visitLargeBinary;
			break;
		case k.BinaryView:
			n = t.visitBinaryView || t.visitBinary;
			break;
		case k.FixedSizeBinary:
			n = t.visitFixedSizeBinary;
			break;
		case k.Date:
			n = t.visitDate;
			break;
		case k.DateDay:
			n = t.visitDateDay || t.visitDate;
			break;
		case k.DateMillisecond:
			n = t.visitDateMillisecond || t.visitDate;
			break;
		case k.Timestamp:
			n = t.visitTimestamp;
			break;
		case k.TimestampSecond:
			n = t.visitTimestampSecond || t.visitTimestamp;
			break;
		case k.TimestampMillisecond:
			n = t.visitTimestampMillisecond || t.visitTimestamp;
			break;
		case k.TimestampMicrosecond:
			n = t.visitTimestampMicrosecond || t.visitTimestamp;
			break;
		case k.TimestampNanosecond:
			n = t.visitTimestampNanosecond || t.visitTimestamp;
			break;
		case k.Time:
			n = t.visitTime;
			break;
		case k.TimeSecond:
			n = t.visitTimeSecond || t.visitTime;
			break;
		case k.TimeMillisecond:
			n = t.visitTimeMillisecond || t.visitTime;
			break;
		case k.TimeMicrosecond:
			n = t.visitTimeMicrosecond || t.visitTime;
			break;
		case k.TimeNanosecond:
			n = t.visitTimeNanosecond || t.visitTime;
			break;
		case k.Decimal:
			n = t.visitDecimal;
			break;
		case k.List:
			n = t.visitList;
			break;
		case k.LargeList:
			n = t.visitLargeList;
			break;
		case k.Struct:
			n = t.visitStruct;
			break;
		case k.Union:
			n = t.visitUnion;
			break;
		case k.DenseUnion:
			n = t.visitDenseUnion || t.visitUnion;
			break;
		case k.SparseUnion:
			n = t.visitSparseUnion || t.visitUnion;
			break;
		case k.Dictionary:
			n = t.visitDictionary;
			break;
		case k.Interval:
			n = t.visitInterval;
			break;
		case k.IntervalDayTime:
			n = t.visitIntervalDayTime || t.visitInterval;
			break;
		case k.IntervalYearMonth:
			n = t.visitIntervalYearMonth || t.visitInterval;
			break;
		case k.IntervalMonthDayNano:
			n = t.visitIntervalMonthDayNano || t.visitInterval;
			break;
		case k.Duration:
			n = t.visitDuration;
			break;
		case k.DurationSecond:
			n = t.visitDurationSecond || t.visitDuration;
			break;
		case k.DurationMillisecond:
			n = t.visitDurationMillisecond || t.visitDuration;
			break;
		case k.DurationMicrosecond:
			n = t.visitDurationMicrosecond || t.visitDuration;
			break;
		case k.DurationNanosecond:
			n = t.visitDurationNanosecond || t.visitDuration;
			break;
		case k.FixedSizeList:
			n = t.visitFixedSizeList;
			break;
		case k.Map: n = t.visitMap;
	}
	if ("function" == typeof n) return n;
	if (!i) return () => null;
	throw new Error(`Unrecognized type '${k[e]}'`);
}
function Gt(t) {
	switch (t.typeId) {
		case k.Null: return k.Null;
		case k.Int: {
			const { bitWidth: e, isSigned: i } = t;
			switch (e) {
				case 8: return i ? k.Int8 : k.Uint8;
				case 16: return i ? k.Int16 : k.Uint16;
				case 32: return i ? k.Int32 : k.Uint32;
				case 64: return i ? k.Int64 : k.Uint64;
			}
			return k.Int;
		}
		case k.Float:
			switch (t.precision) {
				case F.HALF: return k.Float16;
				case F.SINGLE: return k.Float32;
				case F.DOUBLE: return k.Float64;
			}
			return k.Float;
		case k.Binary: return k.Binary;
		case k.LargeBinary: return k.LargeBinary;
		case k.BinaryView: return k.BinaryView;
		case k.Utf8: return k.Utf8;
		case k.LargeUtf8: return k.LargeUtf8;
		case k.Utf8View: return k.Utf8View;
		case k.Bool: return k.Bool;
		case k.Decimal: return k.Decimal;
		case k.Time:
			switch (t.unit) {
				case C.SECOND: return k.TimeSecond;
				case C.MILLISECOND: return k.TimeMillisecond;
				case C.MICROSECOND: return k.TimeMicrosecond;
				case C.NANOSECOND: return k.TimeNanosecond;
			}
			return k.Time;
		case k.Timestamp:
			switch (t.unit) {
				case C.SECOND: return k.TimestampSecond;
				case C.MILLISECOND: return k.TimestampMillisecond;
				case C.MICROSECOND: return k.TimestampMicrosecond;
				case C.NANOSECOND: return k.TimestampNanosecond;
			}
			return k.Timestamp;
		case k.Date:
			switch (t.unit) {
				case x.DAY: return k.DateDay;
				case x.MILLISECOND: return k.DateMillisecond;
			}
			return k.Date;
		case k.Interval:
			switch (t.unit) {
				case _.DAY_TIME: return k.IntervalDayTime;
				case _.YEAR_MONTH: return k.IntervalYearMonth;
				case _.MONTH_DAY_NANO: return k.IntervalMonthDayNano;
			}
			return k.Interval;
		case k.Duration:
			switch (t.unit) {
				case C.SECOND: return k.DurationSecond;
				case C.MILLISECOND: return k.DurationMillisecond;
				case C.MICROSECOND: return k.DurationMicrosecond;
				case C.NANOSECOND: return k.DurationNanosecond;
			}
			return k.Duration;
		case k.Map: return k.Map;
		case k.List: return k.List;
		case k.LargeList: return k.LargeList;
		case k.Struct: return k.Struct;
		case k.Union:
			switch (t.mode) {
				case L.Dense: return k.DenseUnion;
				case L.Sparse: return k.SparseUnion;
			}
			return k.Union;
		case k.FixedSizeBinary: return k.FixedSizeBinary;
		case k.FixedSizeList: return k.FixedSizeList;
		case k.Dictionary: return k.Dictionary;
	}
	throw new Error(`Unrecognized type '${k[t.typeId]}'`);
}
Ht.prototype.visitInt8 = null, Ht.prototype.visitInt16 = null, Ht.prototype.visitInt32 = null, Ht.prototype.visitInt64 = null, Ht.prototype.visitUint8 = null, Ht.prototype.visitUint16 = null, Ht.prototype.visitUint32 = null, Ht.prototype.visitUint64 = null, Ht.prototype.visitFloat16 = null, Ht.prototype.visitFloat32 = null, Ht.prototype.visitFloat64 = null, Ht.prototype.visitDateDay = null, Ht.prototype.visitDateMillisecond = null, Ht.prototype.visitTimestampSecond = null, Ht.prototype.visitTimestampMillisecond = null, Ht.prototype.visitTimestampMicrosecond = null, Ht.prototype.visitTimestampNanosecond = null, Ht.prototype.visitTimeSecond = null, Ht.prototype.visitTimeMillisecond = null, Ht.prototype.visitTimeMicrosecond = null, Ht.prototype.visitTimeNanosecond = null, Ht.prototype.visitDenseUnion = null, Ht.prototype.visitSparseUnion = null, Ht.prototype.visitIntervalDayTime = null, Ht.prototype.visitIntervalYearMonth = null, Ht.prototype.visitIntervalMonthDayNano = null, Ht.prototype.visitDuration = null, Ht.prototype.visitDurationSecond = null, Ht.prototype.visitDurationMillisecond = null, Ht.prototype.visitDurationMicrosecond = null, Ht.prototype.visitDurationNanosecond = null;
const qt = /* @__PURE__ */ new Float64Array(1), Jt = new Uint32Array(qt.buffer);
function Xt(t) {
	const e = (31744 & t) >> 10, i = (1023 & t) / 1024, n = Math.pow(-1, (32768 & t) >> 15);
	switch (e) {
		case 31: return n * (i ? NaN : 1 / 0);
		case 0: return n * (i ? 6103515625e-14 * i : 0);
	}
	return n * Math.pow(2, e - 15) * (1 + i);
}
var Kt = class extends Ht {};
function Zt(t) {
	return (e, i, n) => {
		if (e.setValid(i, null != n)) return t(e, i, n);
	};
}
const Qt = (t, e, i, n) => {
	if (i + 1 < e.length) {
		const r = $(e[i]), s = $(e[i + 1]);
		t.set(n.subarray(0, s - r), r);
	}
}, te = ({ values: t }, e, i) => {
	t[e] = i;
}, ee = ({ values: t }, e, i) => {
	t[e] = i;
}, ie = ({ values: t }, e, i) => {
	t[e] = function(t) {
		if (t != t) return 32256;
		qt[0] = t;
		const e = (2147483648 & Jt[1]) >> 16 & 65535;
		let i = 2146435072 & Jt[1], n = 0;
		return i >= 1089470464 ? Jt[0] > 0 ? i = 31744 : (i = (2080374784 & i) >> 16, n = (1048575 & Jt[1]) >> 10) : i <= 1056964608 ? (n = 1048576 + (1048575 & Jt[1]), n = 1048576 + (n << (i >> 20) - 998) >> 21, i = 0) : (i = i - 1056964608 >> 10, n = 512 + (1048575 & Jt[1]) >> 10), e | i | 65535 & n;
	}(i);
}, ne = ({ values: t }, e, i) => {
	((t, e, i) => {
		t[e] = Math.floor(i / 864e5);
	})(t, e, i.valueOf());
}, re = ({ values: t }, e, i) => {
	t[e] = BigInt(i);
}, se = ({ values: t, valueOffsets: e }, i, n) => Qt(t, e, i, n), oe = (t, e, i) => {
	var n, r, s, o;
	const a = t.values;
	if (!a) throw new Error("BinaryView data is missing view buffer");
	const l = It.ELEMENT_WIDTH, c = e * l, u = c + l;
	if (c < 0 || u > a.length) throw new RangeError(`BinaryView index ${e} out of bounds`);
	a.fill(0, c, u);
	const p = new DataView(a.buffer, a.byteOffset + c, l), y = i.length;
	if (p.setInt32(It.LENGTH_OFFSET, y, !0), y <= It.INLINE_CAPACITY) return void a.set(i, c + It.INLINE_OFFSET);
	const d = (null !== (n = i[0]) && void 0 !== n ? n : 0) | (null !== (r = i[1]) && void 0 !== r ? r : 0) << 8 | (null !== (s = i[2]) && void 0 !== s ? s : 0) << 16 | (null !== (o = i[3]) && void 0 !== o ? o : 0) << 24;
	p.setUint32(It.INLINE_OFFSET, d >>> 0, !0);
	const h = ((t) => {
		let e = t.variadicBuffers;
		return Array.isArray(e) && !Object.isFrozen(e) || (e = Array.from(e), t.variadicBuffers = e), e;
	})(t), f = i.slice(), v = h.push(f) - 1;
	p.setInt32(It.BUFFER_INDEX_OFFSET, v, !0), p.setInt32(It.BUFFER_OFFSET_OFFSET, 0, !0);
}, ae = ({ values: t, valueOffsets: e }, i, n) => Qt(t, e, i, T(n)), le = ({ values: t }, e, i) => {
	t[e] = BigInt(i / 1e3);
}, ce = ({ values: t }, e, i) => {
	t[e] = BigInt(i);
}, ue = ({ values: t }, e, i) => {
	t[e] = BigInt(1e3 * i);
}, pe = ({ values: t }, e, i) => {
	t[e] = BigInt(1e6 * i);
}, ye = ({ values: t }, e, i) => {
	t[e] = i;
}, de = ({ values: t }, e, i) => {
	t[e] = i;
}, he = ({ values: t }, e, i) => {
	t[e] = i;
}, fe = ({ values: t }, e, i) => {
	t[e] = i;
}, ve = (t, e, i) => {
	const n = t.children[0], r = t.valueOffsets, s = Be.getVisitFn(n), o = $(r[e]), a = $(r[e + 1]);
	if (Array.isArray(i)) for (let l = -1, c = o; c < a;) s(n, c++, i[++l]);
	else for (let l = -1, c = o; c < a;) s(n, c++, i.get(++l));
}, me = (t, e, i) => {
	const n = t.type.typeIdToChildIndex[t.typeIds[e]], r = t.children[n];
	Be.visit(r, t.valueOffsets[e], i);
}, ge = (t, e, i) => {
	const n = t.type.typeIdToChildIndex[t.typeIds[e]], r = t.children[n];
	Be.visit(r, e, i);
}, be = ({ values: t }, e, i) => {
	t.set(i.subarray(0, 2), 2 * e);
}, Se = ({ values: t }, e, i) => {
	t[e] = 12 * i[0] + i[1] % 12;
}, we = ({ values: t, stride: e }, i, n) => {
	t.set(n.subarray(0, e), e * i);
}, Ie = ({ values: t }, e, i) => {
	t[e] = i;
}, Te = ({ values: t }, e, i) => {
	t[e] = i;
}, Ae = ({ values: t }, e, i) => {
	t[e] = i;
}, De = ({ values: t }, e, i) => {
	t[e] = i;
};
Kt.prototype.visitBool = Zt(({ offset: t, values: e }, i, n) => {
	const r = t + i;
	n ? e[r >> 3] |= 1 << r % 8 : e[r >> 3] &= ~(1 << r % 8);
}), Kt.prototype.visitInt = Zt(te), Kt.prototype.visitInt8 = Zt(te), Kt.prototype.visitInt16 = Zt(te), Kt.prototype.visitInt32 = Zt(te), Kt.prototype.visitInt64 = Zt(te), Kt.prototype.visitUint8 = Zt(te), Kt.prototype.visitUint16 = Zt(te), Kt.prototype.visitUint32 = Zt(te), Kt.prototype.visitUint64 = Zt(te), Kt.prototype.visitFloat = Zt((t, e, i) => {
	switch (t.type.precision) {
		case F.HALF: return ie(t, e, i);
		case F.SINGLE:
		case F.DOUBLE: return ee(t, e, i);
	}
}), Kt.prototype.visitFloat16 = Zt(ie), Kt.prototype.visitFloat32 = Zt(ee), Kt.prototype.visitFloat64 = Zt(ee), Kt.prototype.visitUtf8 = Zt(ae), Kt.prototype.visitLargeUtf8 = Zt(ae), Kt.prototype.visitUtf8View = Zt((t, e, i) => {
	const n = T(i);
	oe(t, e, n);
}), Kt.prototype.visitBinary = Zt(se), Kt.prototype.visitLargeBinary = Zt(se), Kt.prototype.visitBinaryView = Zt((t, e, i) => {
	const n = i instanceof Uint8Array ? i : new Uint8Array(i);
	oe(t, e, n);
}), Kt.prototype.visitFixedSizeBinary = Zt(({ stride: t, values: e }, i, n) => {
	e.set(n.subarray(0, t), t * i);
}), Kt.prototype.visitDate = Zt((t, e, i) => {
	t.type.unit === x.DAY ? ne(t, e, i) : re(t, e, i);
}), Kt.prototype.visitDateDay = Zt(ne), Kt.prototype.visitDateMillisecond = Zt(re), Kt.prototype.visitTimestamp = Zt((t, e, i) => {
	switch (t.type.unit) {
		case C.SECOND: return le(t, e, i);
		case C.MILLISECOND: return ce(t, e, i);
		case C.MICROSECOND: return ue(t, e, i);
		case C.NANOSECOND: return pe(t, e, i);
	}
}), Kt.prototype.visitTimestampSecond = Zt(le), Kt.prototype.visitTimestampMillisecond = Zt(ce), Kt.prototype.visitTimestampMicrosecond = Zt(ue), Kt.prototype.visitTimestampNanosecond = Zt(pe), Kt.prototype.visitTime = Zt((t, e, i) => {
	switch (t.type.unit) {
		case C.SECOND: return ye(t, e, i);
		case C.MILLISECOND: return de(t, e, i);
		case C.MICROSECOND: return he(t, e, i);
		case C.NANOSECOND: return fe(t, e, i);
	}
}), Kt.prototype.visitTimeSecond = Zt(ye), Kt.prototype.visitTimeMillisecond = Zt(de), Kt.prototype.visitTimeMicrosecond = Zt(he), Kt.prototype.visitTimeNanosecond = Zt(fe), Kt.prototype.visitDecimal = Zt(({ values: t, stride: e }, i, n) => {
	t.set(n.subarray(0, e), e * i);
}), Kt.prototype.visitList = Zt(ve), Kt.prototype.visitLargeList = Zt(ve), Kt.prototype.visitStruct = Zt((t, e, i) => {
	const n = t.type.children.map((t) => Be.getVisitFn(t.type)), r = i instanceof Map ? (s = e, o = i, (t, e, i, n) => e && t(e, s, o.get(i.name))) : i instanceof Zi ? ((t, e) => (i, n, r, s) => n && i(n, t, e.get(s)))(e, i) : Array.isArray(i) ? ((t, e) => (i, n, r, s) => n && i(n, t, e[s]))(e, i) : ((t, e) => (i, n, r, s) => n && i(n, t, e[r.name]))(e, i);
	var s, o;
	t.type.children.forEach((e, i) => r(n[i], t.children[i], e, i));
}), Kt.prototype.visitUnion = Zt((t, e, i) => {
	t.type.mode === L.Dense ? me(t, e, i) : ge(t, e, i);
}), Kt.prototype.visitDenseUnion = Zt(me), Kt.prototype.visitSparseUnion = Zt(ge), Kt.prototype.visitDictionary = Zt((t, e, i) => {
	var n;
	null === (n = t.dictionary) || void 0 === n || n.set(t.values[e], i);
}), Kt.prototype.visitInterval = Zt((t, e, i) => {
	switch (t.type.unit) {
		case _.YEAR_MONTH: return Se(t, e, i);
		case _.DAY_TIME: return be(t, e, i);
		case _.MONTH_DAY_NANO: return we(t, e, i);
	}
}), Kt.prototype.visitIntervalDayTime = Zt(be), Kt.prototype.visitIntervalYearMonth = Zt(Se), Kt.prototype.visitIntervalMonthDayNano = Zt(we), Kt.prototype.visitDuration = Zt((t, e, i) => {
	switch (t.type.unit) {
		case C.SECOND: return Ie(t, e, i);
		case C.MILLISECOND: return Te(t, e, i);
		case C.MICROSECOND: return Ae(t, e, i);
		case C.NANOSECOND: return De(t, e, i);
	}
}), Kt.prototype.visitDurationSecond = Zt(Ie), Kt.prototype.visitDurationMillisecond = Zt(Te), Kt.prototype.visitDurationMicrosecond = Zt(Ae), Kt.prototype.visitDurationNanosecond = Zt(De), Kt.prototype.visitFixedSizeList = Zt((t, e, i) => {
	const { stride: n } = t, r = t.children[0], s = Be.getVisitFn(r);
	if (Array.isArray(i)) for (let o = -1, a = e * n; ++o < n;) s(r, a + o, i[o]);
	else for (let o = -1, a = e * n; ++o < n;) s(r, a + o, i.get(o));
}), Kt.prototype.visitMap = Zt((t, e, i) => {
	const n = t.children[0], { valueOffsets: r } = t, s = Be.getVisitFn(n);
	let { [e]: o, [e + 1]: a } = r;
	const l = i instanceof Map ? i.entries() : Object.entries(i);
	for (const c of l) if (s(n, o, c), ++o >= a) break;
});
const Be = new Kt(), Oe = Symbol.for("parent"), Me = Symbol.for("rowIndex");
var Ee = class {
	constructor(t, e) {
		return this[Oe] = t, this[Me] = e, new Proxy(this, Ne);
	}
	toArray() {
		return Object.values(this.toJSON());
	}
	toJSON() {
		const t = this[Me], e = this[Oe], i = e.type.children, n = {};
		for (let r = -1, s = i.length; ++r < s;) n[i[r].name] = oi.visit(e.children[r], t);
		return n;
	}
	toString() {
		return `{${[...this].map(([t, e]) => `${j(t)}: ${j(e)}`).join(", ")}}`;
	}
	[Symbol.for("nodejs.util.inspect.custom")]() {
		return this.toString();
	}
	[Symbol.iterator]() {
		return new Ue(this[Oe], this[Me]);
	}
}, Ue = class {
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
			value: [this.childFields[t].name, oi.visit(this.children[t], this.rowIndex)]
		}) : {
			done: !0,
			value: null
		};
	}
};
Object.defineProperties(Ee.prototype, {
	[Symbol.toStringTag]: {
		enumerable: !1,
		configurable: !1,
		value: "Row"
	},
	[Oe]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	},
	[Me]: {
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
		return t[Oe].type.children.map((t) => t.name);
	}
	has(t, e) {
		return t[Oe].type.children.some((t) => t.name === e);
	}
	getOwnPropertyDescriptor(t, e) {
		if (t[Oe].type.children.some((t) => t.name === e)) return {
			writable: !0,
			enumerable: !0,
			configurable: !0
		};
	}
	get(t, e) {
		if (Reflect.has(t, e)) return t[e];
		const i = t[Oe].type.children.findIndex((t) => t.name === e);
		if (-1 !== i) {
			const n = oi.visit(t[Oe].children[i], t[Me]);
			return Reflect.set(t, e, n), n;
		}
	}
	set(t, e, i) {
		const n = t[Oe].type.children.findIndex((t) => t.name === e);
		return -1 !== n ? (Be.visit(t[Oe].children[n], t[Me], i), Reflect.set(t, e, i)) : !(!Reflect.has(t, e) && "symbol" != typeof e) && Reflect.set(t, e, i);
	}
}();
var Le = class extends Ht {};
function Fe(t) {
	return (e, i) => e.getValid(i) ? t(e, i) : null;
}
const xe = (t, e, i) => {
	if (i + 1 >= e.length) return null;
	const n = $(e[i]), r = $(e[i + 1]);
	return t.subarray(n, r);
}, Ce = ({ values: t }, e) => ((t, e) => 864e5 * t[e])(t, e), _e = ({ values: t }, e) => $(t[e]), ke = ({ stride: t, values: e }, i) => e[t * i], Ve = ({ values: t }, e) => t[e], je = ({ values: t, valueOffsets: e }, i) => xe(t, e, i), $e = (t, e) => {
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
}, ze = ({ values: t, valueOffsets: e }, i) => {
	const n = xe(t, e, i);
	return null !== n ? w(n) : null;
}, Re = ({ values: t }, e) => 1e3 * $(t[e]), Pe = ({ values: t }, e) => $(t[e]), Ye = ({ values: t }, e) => z(t[e], BigInt(1e3)), He = ({ values: t }, e) => z(t[e], BigInt(1e6)), We = ({ values: t }, e) => t[e], Ge = ({ values: t }, e) => t[e], qe = ({ values: t }, e) => t[e], Je = ({ values: t }, e) => t[e], Xe = (t, e) => {
	const { valueOffsets: i, stride: n, children: r } = t, s = $(i[e * n]), o = $(i[e * n + 1]);
	return new Zi([r[0].slice(s, o - s)]);
}, Ke = (t, e) => {
	const i = t.type.typeIdToChildIndex[t.typeIds[e]], n = t.children[i];
	return oi.visit(n, t.valueOffsets[e]);
}, Ze = (t, e) => {
	const i = t.type.typeIdToChildIndex[t.typeIds[e]], n = t.children[i];
	return oi.visit(n, e);
}, Qe = ({ values: t }, e) => t.subarray(2 * e, 2 * (e + 1)), ti = ({ values: t }, e) => {
	const i = t[e], n = /* @__PURE__ */ new Int32Array(2);
	return n[0] = Math.trunc(i / 12), n[1] = Math.trunc(i % 12), n;
}, ei = ({ values: t }, e) => t.subarray(4 * e, 4 * (e + 1)), ii = ({ values: t }, e) => t[e], ni = ({ values: t }, e) => t[e], ri = ({ values: t }, e) => t[e], si = ({ values: t }, e) => t[e];
Le.prototype.visitNull = Fe((t, e) => null), Le.prototype.visitBool = Fe(({ offset: t, values: e }, i) => {
	const n = t + i;
	return !!(e[n >> 3] & 1 << n % 8);
}), Le.prototype.visitInt = Fe(({ values: t }, e) => t[e]), Le.prototype.visitInt8 = Fe(ke), Le.prototype.visitInt16 = Fe(ke), Le.prototype.visitInt32 = Fe(ke), Le.prototype.visitInt64 = Fe(Ve), Le.prototype.visitUint8 = Fe(ke), Le.prototype.visitUint16 = Fe(ke), Le.prototype.visitUint32 = Fe(ke), Le.prototype.visitUint64 = Fe(Ve), Le.prototype.visitFloat = Fe(({ type: t, values: e }, i) => t.precision !== F.HALF ? e[i] : Xt(e[i])), Le.prototype.visitFloat16 = Fe(({ stride: t, values: e }, i) => Xt(e[t * i])), Le.prototype.visitFloat32 = Fe(ke), Le.prototype.visitFloat64 = Fe(ke), Le.prototype.visitUtf8 = Fe(ze), Le.prototype.visitLargeUtf8 = Fe(ze), Le.prototype.visitUtf8View = Fe((t, e) => {
	const i = $e(t, e);
	return w(i);
}), Le.prototype.visitBinary = Fe(je), Le.prototype.visitLargeBinary = Fe(je), Le.prototype.visitBinaryView = Fe((t, e) => $e(t, e)), Le.prototype.visitFixedSizeBinary = Fe(({ stride: t, values: e }, i) => e.subarray(t * i, t * (i + 1))), Le.prototype.visitDate = Fe((t, e) => t.type.unit === x.DAY ? Ce(t, e) : _e(t, e)), Le.prototype.visitDateDay = Fe(Ce), Le.prototype.visitDateMillisecond = Fe(_e), Le.prototype.visitTimestamp = Fe((t, e) => {
	switch (t.type.unit) {
		case C.SECOND: return Re(t, e);
		case C.MILLISECOND: return Pe(t, e);
		case C.MICROSECOND: return Ye(t, e);
		case C.NANOSECOND: return He(t, e);
	}
}), Le.prototype.visitTimestampSecond = Fe(Re), Le.prototype.visitTimestampMillisecond = Fe(Pe), Le.prototype.visitTimestampMicrosecond = Fe(Ye), Le.prototype.visitTimestampNanosecond = Fe(He), Le.prototype.visitTime = Fe((t, e) => {
	switch (t.type.unit) {
		case C.SECOND: return We(t, e);
		case C.MILLISECOND: return Ge(t, e);
		case C.MICROSECOND: return qe(t, e);
		case C.NANOSECOND: return Je(t, e);
	}
}), Le.prototype.visitTimeSecond = Fe(We), Le.prototype.visitTimeMillisecond = Fe(Ge), Le.prototype.visitTimeMicrosecond = Fe(qe), Le.prototype.visitTimeNanosecond = Fe(Je), Le.prototype.visitDecimal = Fe(({ values: t, stride: e }, i) => rt.decimal(t.subarray(e * i, e * (i + 1)))), Le.prototype.visitList = Fe(Xe), Le.prototype.visitLargeList = Fe(Xe), Le.prototype.visitStruct = Fe((t, e) => new Ee(t, e)), Le.prototype.visitUnion = Fe((t, e) => t.type.mode === L.Dense ? Ke(t, e) : Ze(t, e)), Le.prototype.visitDenseUnion = Fe(Ke), Le.prototype.visitSparseUnion = Fe(Ze), Le.prototype.visitDictionary = Fe((t, e) => {
	var i;
	return null === (i = t.dictionary) || void 0 === i ? void 0 : i.get(t.values[e]);
}), Le.prototype.visitInterval = Fe((t, e) => t.type.unit === _.MONTH_DAY_NANO ? ei(t, e) : t.type.unit === _.DAY_TIME ? Qe(t, e) : ti(t, e)), Le.prototype.visitIntervalDayTime = Fe(Qe), Le.prototype.visitIntervalYearMonth = Fe(ti), Le.prototype.visitIntervalMonthDayNano = Fe(ei), Le.prototype.visitDuration = Fe((t, e) => {
	switch (t.type.unit) {
		case C.SECOND: return ii(t, e);
		case C.MILLISECOND: return ni(t, e);
		case C.MICROSECOND: return ri(t, e);
		case C.NANOSECOND: return si(t, e);
	}
}), Le.prototype.visitDurationSecond = Fe(ii), Le.prototype.visitDurationMillisecond = Fe(ni), Le.prototype.visitDurationMicrosecond = Fe(ri), Le.prototype.visitDurationNanosecond = Fe(si), Le.prototype.visitFixedSizeList = Fe((t, e) => {
	const { stride: i, children: n } = t;
	return new Zi([n[0].slice(e * i, i)]);
}), Le.prototype.visitMap = Fe((t, e) => {
	const { valueOffsets: i, children: n } = t, { [e]: r, [e + 1]: s } = i, o = n[0];
	return new pi(o.slice(r, s - r));
});
const oi = new Le(), ai = Symbol.for("keys"), li = Symbol.for("vals"), ci = Symbol.for("kKeysAsStrings"), ui = Symbol.for("_kKeysAsStrings");
var pi = class {
	constructor(t) {
		return this[ai] = new Zi([t.children[0]]).memoize(), this[li] = t.children[1], new Proxy(this, new di());
	}
	get [ci]() {
		return this[ui] || (this[ui] = Array.from(this[ai].toArray(), String));
	}
	[Symbol.iterator]() {
		return new yi(this[ai], this[li]);
	}
	get size() {
		return this[ai].length;
	}
	toArray() {
		return Object.values(this.toJSON());
	}
	toJSON() {
		const t = this[ai], e = this[li], i = {};
		for (let n = -1, r = t.length; ++n < r;) i[t.get(n)] = oi.visit(e, n);
		return i;
	}
	toString() {
		return `{${[...this].map(([t, e]) => `${j(t)}: ${j(e)}`).join(", ")}}`;
	}
	[Symbol.for("nodejs.util.inspect.custom")]() {
		return this.toString();
	}
}, yi = class {
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
			value: [this.keys.get(t), oi.visit(this.vals, t)]
		});
	}
}, di = class {
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
		return t[ci];
	}
	has(t, e) {
		return t[ci].includes(e);
	}
	getOwnPropertyDescriptor(t, e) {
		if (-1 !== t[ci].indexOf(e)) return {
			writable: !0,
			enumerable: !0,
			configurable: !0
		};
	}
	get(t, e) {
		if (Reflect.has(t, e)) return t[e];
		const i = t[ci].indexOf(e);
		if (-1 !== i) {
			const n = oi.visit(Reflect.get(t, li), i);
			return Reflect.set(t, e, n), n;
		}
	}
	set(t, e, i) {
		const n = t[ci].indexOf(e);
		return -1 !== n ? (Be.visit(Reflect.get(t, li), n, i), Reflect.set(t, e, i)) : !!Reflect.has(t, e) && Reflect.set(t, e, i);
	}
};
let hi;
function fi(t, e, i, n) {
	const { length: r = 0 } = t;
	let s = "number" != typeof e ? 0 : e, o = "number" != typeof i ? r : i;
	return s < 0 && (s = (s % r + r) % r), o < 0 && (o = (o % r + r) % r), o < s && (hi = s, s = o, o = hi), o > r && (o = r), n ? n(t, s, o) : [s, o];
}
Object.defineProperties(pi.prototype, {
	[Symbol.toStringTag]: {
		enumerable: !1,
		configurable: !1,
		value: "Row"
	},
	[ai]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	},
	[li]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	},
	[ui]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	}
});
const vi = (t, e) => t < 0 ? e + t : t, mi = (t) => t != t;
function gi(t) {
	if ("object" != typeof t || null === t) return mi(t) ? mi : (e) => e === t;
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
		for (const n of t.values()) i[++e] = gi(n);
		return bi(i);
	}(t) : Array.isArray(t) ? function(t) {
		const e = [];
		for (let i = -1, n = t.length; ++i < n;) e[i] = gi(t[i]);
		return bi(e);
	}(t) : t instanceof Zi ? function(t) {
		const e = [];
		for (let i = -1, n = t.length; ++i < n;) e[i] = gi(t.get(i));
		return bi(e);
	}(t) : function(t, e = !1) {
		const i = Object.keys(t);
		if (!e && 0 === i.length) return () => !1;
		const n = [];
		for (let r = -1, s = i.length; ++r < s;) n[r] = gi(t[i[r]]);
		return bi(n, i);
	}(t, !0);
}
function bi(t, e) {
	return (i) => {
		if (!i || "object" != typeof i) return !1;
		switch (i.constructor) {
			case Array: return function(t, e) {
				const i = t.length;
				if (e.length !== i) return !1;
				for (let n = -1; ++n < i;) if (!t[n](e[n])) return !1;
				return !0;
			}(t, i);
			case Map: return Si(t, i, i.keys());
			case pi:
			case Ee:
			case Object:
			case void 0: return Si(t, i, e || Object.keys(i));
		}
		return i instanceof Zi && function(t, e) {
			const i = t.length;
			if (e.length !== i) return !1;
			for (let n = -1; ++n < i;) if (!t[n](e.get(n))) return !1;
			return !0;
		}(t, i);
	};
}
function Si(t, e, i) {
	const n = i[Symbol.iterator](), r = e instanceof Map ? e.keys() : Object.keys(e)[Symbol.iterator](), s = e instanceof Map ? e.values() : Object.values(e)[Symbol.iterator]();
	let o = 0;
	const a = t.length;
	let l = s.next(), c = n.next(), u = r.next();
	for (; o < a && !c.done && !u.done && !l.done && c.value === u.value && t[o](l.value); ++o, c = n.next(), u = r.next(), l = s.next());
	return !!(o === a && c.done && u.done && l.done) || (n.return && n.return(), r.return && r.return(), s.return && s.return(), !1);
}
function wi(t, e, i, n) {
	return !!(i & 1 << n);
}
function Ii(t, e, i, n) {
	return (i & 1 << n) >> n;
}
function Ti(t, e, i) {
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
		}(new Ai(i, t, e, null, wi)).subarray(0, n)), r;
	}
	return i;
}
var Ai = class {
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
function Di(t, e, i) {
	if (i - e <= 0) return 0;
	if (i - e < 8) {
		let n = 0;
		for (const r of new Ai(t, e, i - e, t, Ii)) n += r;
		return n;
	}
	const n = i >> 3 << 3, r = e + (e % 8 == 0 ? 0 : 8 - e % 8);
	return Di(t, e, r) + Di(t, n, i) + function(t, e, i) {
		let n = 0, r = Math.trunc(e);
		const s = new DataView(t.buffer, t.byteOffset, t.byteLength), o = void 0 === i ? t.byteLength : r + i;
		for (; o - r >= 4;) n += Bi(s.getUint32(r)), r += 4;
		for (; o - r >= 2;) n += Bi(s.getUint16(r)), r += 2;
		for (; o - r >= 1;) n += Bi(s.getUint8(r)), r += 1;
		return n;
	}(t, r >> 3, n - r >> 3);
}
function Bi(t) {
	let e = Math.trunc(t);
	return e -= e >>> 1 & 1431655765, e = (858993459 & e) + (e >>> 2 & 858993459), 16843009 * (e + (e >>> 4) & 252645135) >>> 24;
}
const Oi = Symbol.for("apache-arrow/Data");
var Mi = class t {
	static isData(t) {
		return !0 === (null == t ? void 0 : t[Oi]);
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
			return at.isSparseUnion(t) || at.isDenseUnion(t) ? this.children.some((t) => t.nullable) : this.nullBitmap && this.nullBitmap.byteLength > 0;
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
		if (at.isUnion(this.type)) return this.children.reduce((t, e) => t + e.nullCount, 0);
		let t, e = this._nullCount;
		return e <= -1 && (t = this.nullBitmap) && (this._nullCount = e = 0 === t.length ? 0 : this.length - Di(t, this.offset, this.offset + this.length)), e;
	}
	constructor(e, i, n, r, s, o = [], a, l = []) {
		var c;
		let u;
		this.type = e, this.children = o, this.dictionary = a, this.offset = Math.floor(Math.max(i || 0, 0)), this.length = Math.floor(Math.max(n || 0, 0)), this._nullCount = Math.floor(Math.max(r || 0, -1)), s instanceof t ? (this.stride = s.stride, this.values = s.values, this.typeIds = s.typeIds, this.nullBitmap = s.nullBitmap, this.valueOffsets = s.valueOffsets, this.variadicBuffers = s.variadicBuffers) : (this.stride = Yt(e), s && ((u = s[0]) && (this.valueOffsets = u), (u = s[1]) && (this.values = u), (u = s[2]) && (this.nullBitmap = u), (u = s[3]) && (this.typeIds = u)), this.variadicBuffers = l), null !== (c = this.variadicBuffers) && void 0 !== c || (this.variadicBuffers = []);
	}
	getValid(t) {
		const { type: e } = this;
		if (at.isUnion(e)) {
			const i = e, n = this.typeIds[t], r = i.typeIdToChildIndex[n], s = this.children[r], o = this.valueOffsets, a = i.mode === L.Dense && o ? Number(o[t]) : t;
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
		if (at.isUnion(n)) {
			const r = n, s = this.typeIds[t], o = r.typeIdToChildIndex[s], a = this.children[o], l = this.valueOffsets, c = r.mode === L.Dense && l ? Number(l[t]) : t;
			i = a.getValid(c), a.setValid(c, e);
		} else {
			let { nullBitmap: n } = this;
			const { offset: r, length: s } = this, o = r + t, a = 1 << o % 8, l = o >> 3;
			(!n || n.byteLength <= l) && (n = new Uint8Array((r + s + 63 & -64) >> 3).fill(255), this.nullCount > 0 ? (n.set(Ti(r, s, this.nullBitmap), 0), Object.assign(this, { nullBitmap: n })) : Object.assign(this, {
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
		if (this.typeId === k.Null) return this.clone(this.type, 0, t, 0, this.buffers, this.children, this.variadicBuffers);
		const { length: e, nullCount: i } = this, n = new Uint8Array((t + 63 & -64) >> 3).fill(255, 0, e >> 3);
		n[e >> 3] = (1 << e - (-8 & e)) - 1, i > 0 && n.set(Ti(this.offset, e, this.nullBitmap), 0);
		const r = this.buffers;
		return r[V.VALIDITY] = n, this.clone(this.type, 0, t, i + (t - e), r, this.children, this.variadicBuffers);
	}
	_sliceBuffers(t, e, i, n) {
		let r;
		const { buffers: s } = this;
		if ((r = s[V.TYPE]) && (s[V.TYPE] = r.subarray(t, t + e)), at.isBinaryView(this.type) || at.isUtf8View(this.type)) {
			const i = It.ELEMENT_WIDTH;
			(r = s[V.DATA]) && (s[V.DATA] = r.subarray(t * i, (t + e) * i));
		} else (r = s[V.OFFSET]) && (s[V.OFFSET] = r.subarray(t, t + e + 1)) || (r = s[V.DATA]) && (s[V.DATA] = 6 === n ? r : r.subarray(i * t, i * (t + e)));
		return s;
	}
	_sliceChildren(t, e, i) {
		return t.map((t) => t.slice(e, i));
	}
};
Mi.prototype.children = Object.freeze([]), Mi.prototype[Oi] = !0, Object.defineProperty(Mi, Symbol.hasInstance, { value: function(t) {
	return Function.prototype[Symbol.hasInstance].call(this, t) || this === Mi && Mi.isData(t);
} });
const Ei = new class t extends Ht {
	visit(t) {
		return this.getVisitFn(t.type).call(this, t);
	}
	visitNull(t) {
		const { type: e, offset: i = 0, length: n = 0 } = t;
		return new Mi(e, i, n, n);
	}
	visitBool(t) {
		const { type: e, offset: i = 0 } = t, n = U(t.nullBitmap), r = O(e.ArrayType, t.data), { length: s = r.length >> 3, nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Mi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitInt(t) {
		const { type: e, offset: i = 0 } = t, n = U(t.nullBitmap), r = O(e.ArrayType, t.data), { length: s = r.length, nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Mi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitFloat(t) {
		const { type: e, offset: i = 0 } = t, n = U(t.nullBitmap), r = O(e.ArrayType, t.data), { length: s = r.length, nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Mi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitUtf8(t) {
		const { type: e, offset: i = 0 } = t, n = U(t.data), r = U(t.nullBitmap), s = M(t.valueOffsets), { length: o = s.length - 1, nullCount: a = t.nullBitmap ? -1 : 0 } = t;
		return new Mi(e, i, o, a, [
			s,
			n,
			r
		]);
	}
	visitUtf8View(t) {
		var e;
		const { type: i, offset: n = 0 } = t, r = O(i.ArrayType, t.views), s = U(t.nullBitmap), o = (t.variadicBuffers || []).map((t) => U(t));
		return new Mi(i, n, null !== (e = t.length) && void 0 !== e ? e : Math.trunc(r.length / Dt.ELEMENT_WIDTH), t.nullBitmap ? -1 : 0, [
			void 0,
			r,
			s
		], [], void 0, o);
	}
	visitLargeUtf8(t) {
		const { type: e, offset: i = 0 } = t, n = U(t.data), r = U(t.nullBitmap), s = E(t.valueOffsets), { length: o = s.length - 1, nullCount: a = t.nullBitmap ? -1 : 0 } = t;
		return new Mi(e, i, o, a, [
			s,
			n,
			r
		]);
	}
	visitBinary(t) {
		const { type: e, offset: i = 0 } = t, n = U(t.data), r = U(t.nullBitmap), s = M(t.valueOffsets), { length: o = s.length - 1, nullCount: a = t.nullBitmap ? -1 : 0 } = t;
		return new Mi(e, i, o, a, [
			s,
			n,
			r
		]);
	}
	visitBinaryView(t) {
		var e;
		const { type: i, offset: n = 0 } = t, r = O(i.ArrayType, t.views), s = U(t.nullBitmap), o = (t.variadicBuffers || []).map((t) => U(t));
		return new Mi(i, n, null !== (e = t.length) && void 0 !== e ? e : Math.trunc(r.length / It.ELEMENT_WIDTH), t.nullBitmap ? -1 : 0, [
			void 0,
			r,
			s
		], [], void 0, o);
	}
	visitLargeBinary(t) {
		const { type: e, offset: i = 0 } = t, n = U(t.data), r = U(t.nullBitmap), s = E(t.valueOffsets), { length: o = s.length - 1, nullCount: a = t.nullBitmap ? -1 : 0 } = t;
		return new Mi(e, i, o, a, [
			s,
			n,
			r
		]);
	}
	visitFixedSizeBinary(t) {
		const { type: e, offset: i = 0 } = t, n = U(t.nullBitmap), r = O(e.ArrayType, t.data), { length: s = r.length / Yt(e), nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Mi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitDate(t) {
		const { type: e, offset: i = 0 } = t, n = U(t.nullBitmap), r = O(e.ArrayType, t.data), { length: s = r.length / Yt(e), nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Mi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitTimestamp(t) {
		const { type: e, offset: i = 0 } = t, n = U(t.nullBitmap), r = O(e.ArrayType, t.data), { length: s = r.length / Yt(e), nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Mi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitTime(t) {
		const { type: e, offset: i = 0 } = t, n = U(t.nullBitmap), r = O(e.ArrayType, t.data), { length: s = r.length / Yt(e), nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Mi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitDecimal(t) {
		const { type: e, offset: i = 0 } = t, n = U(t.nullBitmap), r = O(e.ArrayType, t.data), { length: s = r.length / Yt(e), nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Mi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitList(t) {
		const { type: e, offset: i = 0, child: n } = t, r = U(t.nullBitmap), s = M(t.valueOffsets), { length: o = s.length - 1, nullCount: a = t.nullBitmap ? -1 : 0 } = t;
		return new Mi(e, i, o, a, [
			s,
			void 0,
			r
		], [n]);
	}
	visitLargeList(t) {
		const { type: e, offset: i = 0, child: n } = t, r = U(t.nullBitmap), s = E(t.valueOffsets), { length: o = s.length - 1, nullCount: a = t.nullBitmap ? -1 : 0 } = t;
		return new Mi(e, i, o, a, [
			s,
			void 0,
			r
		], [n]);
	}
	visitStruct(t) {
		const { type: e, offset: i = 0, children: n = [] } = t, r = U(t.nullBitmap), { length: s = n.reduce((t, { length: e }) => Math.max(t, e), 0), nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Mi(e, i, s, o, [
			void 0,
			void 0,
			r
		], n);
	}
	visitUnion(t) {
		const { type: e, offset: i = 0, children: n = [] } = t, r = O(e.ArrayType, t.typeIds), { length: s = r.length, nullCount: o = -1 } = t;
		if (at.isSparseUnion(e)) return new Mi(e, i, s, o, [
			void 0,
			void 0,
			void 0,
			r
		], n);
		return new Mi(e, i, s, o, [
			M(t.valueOffsets),
			void 0,
			void 0,
			r
		], n);
	}
	visitDictionary(e) {
		const { type: i, offset: n = 0 } = e, r = U(e.nullBitmap), s = O(i.indices.ArrayType, e.data), { dictionary: o = new Zi([new t().visit({ type: i.dictionary })]) } = e, { length: a = s.length, nullCount: l = e.nullBitmap ? -1 : 0 } = e;
		return new Mi(i, n, a, l, [
			void 0,
			s,
			r
		], [], o);
	}
	visitInterval(t) {
		const { type: e, offset: i = 0 } = t, n = U(t.nullBitmap), r = O(e.ArrayType, t.data), { length: s = r.length / Yt(e), nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Mi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitDuration(t) {
		const { type: e, offset: i = 0 } = t, n = U(t.nullBitmap), r = O(e.ArrayType, t.data), { length: s = r.length, nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Mi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitFixedSizeList(e) {
		const { type: i, offset: n = 0, child: r = new t().visit({ type: i.valueType }) } = e, s = U(e.nullBitmap), { length: o = r.length / Yt(i), nullCount: a = e.nullBitmap ? -1 : 0 } = e;
		return new Mi(i, n, o, a, [
			void 0,
			void 0,
			s
		], [r]);
	}
	visitMap(e) {
		const { type: i, offset: n = 0, child: r = new t().visit({ type: i.childType }) } = e, s = U(e.nullBitmap), o = M(e.valueOffsets), { length: a = o.length - 1, nullCount: l = e.nullBitmap ? -1 : 0 } = e;
		return new Mi(i, n, a, l, [
			o,
			void 0,
			s
		], [r]);
	}
}();
function Ui(t) {
	return Ei.visit(t);
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
function Li(t) {
	return t.reduce((t, e) => t + e.nullCount, 0);
}
function Fi(t) {
	return t.reduce((t, e, i) => (t[i + 1] = t[i] + e.length, t), new Uint32Array(t.length + 1));
}
function xi(t, e, i, n) {
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
function Ci(t, e, i, n) {
	let r = 0, s = 0, o = e.length - 1;
	do {
		if (r >= o - 1) return i < e[o] ? n(t, r, i - e[r]) : null;
		s = r + Math.trunc(.5 * (o - r)), i < e[s] ? o = s : r = s;
	} while (r < o);
}
function _i(t, e) {
	return t.getValid(e);
}
function ki(t) {
	function e(e, i, n) {
		return t(e[i], n);
	}
	return function(t) {
		return Ci(this.data, this._offsets, t, e);
	};
}
function Vi(t) {
	let e;
	function i(i, n, r) {
		return t(i[n], r, e);
	}
	return function(t, n) {
		const r = this.data;
		e = n;
		const s = Ci(r, this._offsets, t, i);
		return e = void 0, s;
	};
}
function ji(t) {
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
		const r = this.data, s = "number" != typeof n ? i(r, 0, 0) : Ci(r, this._offsets, n, i);
		return e = void 0, s;
	};
}
var $i = class extends Ht {};
function zi(t, e, i) {
	if (void 0 === e) return -1;
	if (null === e) switch (t.typeId) {
		case k.Union:
		case k.Dictionary: break;
		default: return function(t, e) {
			const { nullBitmap: i } = t;
			if (!i || t.nullCount <= 0) return -1;
			let n = 0;
			for (const r of new Ai(i, t.offset + (e || 0), t.length, i, wi)) {
				if (!r) return n;
				++n;
			}
			return -1;
		}(t, i);
	}
	const n = oi.getVisitFn(t), r = gi(e);
	for (let s = (i || 0) - 1, o = t.length; ++s < o;) if (r(n(t, s))) return s;
	return -1;
}
function Ri(t, e, i) {
	const n = oi.getVisitFn(t), r = gi(e);
	for (let s = (i || 0) - 1, o = t.length; ++s < o;) if (r(n(t, s))) return s;
	return -1;
}
$i.prototype.visitNull = function(t, e) {
	return null === e && t.length > 0 ? 0 : -1;
}, $i.prototype.visitBool = zi, $i.prototype.visitInt = zi, $i.prototype.visitInt8 = zi, $i.prototype.visitInt16 = zi, $i.prototype.visitInt32 = zi, $i.prototype.visitInt64 = zi, $i.prototype.visitUint8 = zi, $i.prototype.visitUint16 = zi, $i.prototype.visitUint32 = zi, $i.prototype.visitUint64 = zi, $i.prototype.visitFloat = zi, $i.prototype.visitFloat16 = zi, $i.prototype.visitFloat32 = zi, $i.prototype.visitFloat64 = zi, $i.prototype.visitUtf8 = zi, $i.prototype.visitLargeUtf8 = zi, $i.prototype.visitUtf8View = zi, $i.prototype.visitBinary = zi, $i.prototype.visitLargeBinary = zi, $i.prototype.visitBinaryView = zi, $i.prototype.visitFixedSizeBinary = zi, $i.prototype.visitDate = zi, $i.prototype.visitDateDay = zi, $i.prototype.visitDateMillisecond = zi, $i.prototype.visitTimestamp = zi, $i.prototype.visitTimestampSecond = zi, $i.prototype.visitTimestampMillisecond = zi, $i.prototype.visitTimestampMicrosecond = zi, $i.prototype.visitTimestampNanosecond = zi, $i.prototype.visitTime = zi, $i.prototype.visitTimeSecond = zi, $i.prototype.visitTimeMillisecond = zi, $i.prototype.visitTimeMicrosecond = zi, $i.prototype.visitTimeNanosecond = zi, $i.prototype.visitDecimal = zi, $i.prototype.visitList = zi, $i.prototype.visitLargeList = zi, $i.prototype.visitStruct = zi, $i.prototype.visitUnion = zi, $i.prototype.visitDenseUnion = Ri, $i.prototype.visitSparseUnion = Ri, $i.prototype.visitDictionary = zi, $i.prototype.visitInterval = zi, $i.prototype.visitIntervalDayTime = zi, $i.prototype.visitIntervalYearMonth = zi, $i.prototype.visitIntervalMonthDayNano = zi, $i.prototype.visitDuration = zi, $i.prototype.visitDurationSecond = zi, $i.prototype.visitDurationMillisecond = zi, $i.prototype.visitDurationMicrosecond = zi, $i.prototype.visitDurationNanosecond = zi, $i.prototype.visitFixedSizeList = zi, $i.prototype.visitMap = zi;
const Pi = new $i();
var Yi = class extends Ht {};
function Hi(t) {
	const { type: e } = t;
	if (0 === t.nullCount && 1 === t.stride && (at.isInt(e) && 64 !== e.bitWidth || at.isTime(e) && 64 !== e.bitWidth || at.isFloat(e) && e.precision !== F.HALF)) return new Ni(t.data.length, (e) => {
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
Yi.prototype.visitNull = Hi, Yi.prototype.visitBool = Hi, Yi.prototype.visitInt = Hi, Yi.prototype.visitInt8 = Hi, Yi.prototype.visitInt16 = Hi, Yi.prototype.visitInt32 = Hi, Yi.prototype.visitInt64 = Hi, Yi.prototype.visitUint8 = Hi, Yi.prototype.visitUint16 = Hi, Yi.prototype.visitUint32 = Hi, Yi.prototype.visitUint64 = Hi, Yi.prototype.visitFloat = Hi, Yi.prototype.visitFloat16 = Hi, Yi.prototype.visitFloat32 = Hi, Yi.prototype.visitFloat64 = Hi, Yi.prototype.visitUtf8 = Hi, Yi.prototype.visitLargeUtf8 = Hi, Yi.prototype.visitUtf8View = Hi, Yi.prototype.visitBinary = Hi, Yi.prototype.visitLargeBinary = Hi, Yi.prototype.visitBinaryView = Hi, Yi.prototype.visitFixedSizeBinary = Hi, Yi.prototype.visitDate = Hi, Yi.prototype.visitDateDay = Hi, Yi.prototype.visitDateMillisecond = Hi, Yi.prototype.visitTimestamp = Hi, Yi.prototype.visitTimestampSecond = Hi, Yi.prototype.visitTimestampMillisecond = Hi, Yi.prototype.visitTimestampMicrosecond = Hi, Yi.prototype.visitTimestampNanosecond = Hi, Yi.prototype.visitTime = Hi, Yi.prototype.visitTimeSecond = Hi, Yi.prototype.visitTimeMillisecond = Hi, Yi.prototype.visitTimeMicrosecond = Hi, Yi.prototype.visitTimeNanosecond = Hi, Yi.prototype.visitDecimal = Hi, Yi.prototype.visitList = Hi, Yi.prototype.visitLargeList = Hi, Yi.prototype.visitStruct = Hi, Yi.prototype.visitUnion = Hi, Yi.prototype.visitDenseUnion = Hi, Yi.prototype.visitSparseUnion = Hi, Yi.prototype.visitDictionary = Hi, Yi.prototype.visitInterval = Hi, Yi.prototype.visitIntervalDayTime = Hi, Yi.prototype.visitIntervalYearMonth = Hi, Yi.prototype.visitIntervalMonthDayNano = Hi, Yi.prototype.visitDuration = Hi, Yi.prototype.visitDurationSecond = Hi, Yi.prototype.visitDurationMillisecond = Hi, Yi.prototype.visitDurationMicrosecond = Hi, Yi.prototype.visitDurationNanosecond = Hi, Yi.prototype.visitFixedSizeList = Hi, Yi.prototype.visitMap = Hi;
const Gi = new Yi();
var qi;
const Ji = Symbol.for("apache-arrow/Vector"), Xi = {}, Ki = {};
var Zi = class t {
	static isVector(t) {
		return !0 === (null == t ? void 0 : t[Ji]);
	}
	constructor(e) {
		var i, n, r;
		const s = e[0] instanceof t ? e.flatMap((t) => t.data) : e;
		if (0 === s.length || s.some((t) => !(t instanceof Mi))) throw new TypeError("Vector constructor expects an Array of Data instances.");
		const o = null === (i = s[0]) || void 0 === i ? void 0 : i.type;
		switch (s.length) {
			case 0:
				this._offsets = [0];
				break;
			case 1: {
				const { get: t, set: e, indexOf: i } = Xi[o.typeId], n = s[0];
				this.isValid = (t) => _i(n, t), this.get = (e) => t(n, e), this.set = (t, i) => e(n, t, i), this.indexOf = (t) => i(n, t), this._offsets = [0, n.length];
				break;
			}
			default: Object.setPrototypeOf(this, Ki[o.typeId]), this._offsets = Fi(s);
		}
		this.data = s, this.type = o, this.stride = Yt(o), this.numChildren = null !== (r = null === (n = o.children) || void 0 === n ? void 0 : n.length) && void 0 !== r ? r : 0, this.length = this._offsets.at(-1);
	}
	get byteLength() {
		return this.data.reduce((t, e) => t + e.byteLength, 0);
	}
	get nullable() {
		return this.data.some((t) => t.nullable);
	}
	get nullCount() {
		return Li(this.data);
	}
	get ArrayType() {
		return this.type.ArrayType;
	}
	get [Symbol.toStringTag]() {
		return `${this.VectorName}<${this.type[Symbol.toStringTag]}>`;
	}
	get VectorName() {
		return `${k[this.type.typeId]}Vector`;
	}
	isValid(t) {
		return !1;
	}
	get(t) {
		return null;
	}
	at(t) {
		return this.get(vi(t, this.length));
	}
	set(t, e) {}
	indexOf(t, e) {
		return -1;
	}
	includes(t, e) {
		return this.indexOf(t, e) > -1;
	}
	[Symbol.iterator]() {
		return Gi.visit(this);
	}
	concat(...e) {
		return new t(this.data.concat(e.flatMap((t) => t.data).flat(Number.POSITIVE_INFINITY)));
	}
	slice(e, i) {
		return new t(fi(this, e, i, ({ data: t, _offsets: e }, i, n) => xi(t, e, i, n)));
	}
	toJSON() {
		return [...this];
	}
	toArray() {
		const { type: t, data: e, length: i, stride: n, ArrayType: r } = this;
		switch (t.typeId) {
			case k.Int:
			case k.Float:
			case k.Decimal:
			case k.Time:
			case k.Timestamp: switch (e.length) {
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
		return !!at.isDictionary(this.type) && this.data[0].dictionary.isMemoized;
	}
	memoize() {
		if (at.isDictionary(this.type)) {
			const e = new Qi(this.data[0].dictionary), i = this.data.map((t) => {
				const i = t.clone();
				return i.dictionary = e, i;
			});
			return new t(i);
		}
		return new Qi(this);
	}
	unmemoize() {
		if (at.isDictionary(this.type) && this.isMemoized) {
			const e = this.data[0].dictionary.unmemoize(), i = this.data.map((t) => {
				const i = t.clone();
				return i.dictionary = e, i;
			});
			return new t(i);
		}
		return this;
	}
};
qi = Symbol.toStringTag, Zi[qi] = ((t) => {
	t.type = at.prototype, t.data = [], t.length = 0, t.stride = 1, t.numChildren = 0, t._offsets = new Uint32Array([0]), t[Symbol.isConcatSpreadable] = !0, t[Ji] = !0;
	const e = Object.keys(k).map((t) => k[t]).filter((t) => "number" == typeof t && t !== k.NONE);
	for (const i of e) {
		const e = oi.getVisitFnByTypeId(i), n = Be.getVisitFnByTypeId(i), r = Pi.getVisitFnByTypeId(i);
		Xi[i] = {
			get: e,
			set: n,
			indexOf: r
		}, Ki[i] = Object.create(t, {
			isValid: { value: ki(_i) },
			get: { value: ki(oi.getVisitFnByTypeId(i)) },
			set: { value: Vi(Be.getVisitFnByTypeId(i)) },
			indexOf: { value: ji(Pi.getVisitFnByTypeId(i)) }
		});
	}
	return "Vector";
})(Zi.prototype), Object.defineProperty(Zi, Symbol.hasInstance, { value: function(t) {
	return Function.prototype[Symbol.hasInstance].call(this, t) || this === Zi && Zi.isVector(t);
} });
var Qi = class t extends Zi {
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
		} }), Object.defineProperty(this, "slice", { value: (e, i) => new t(r.call(this, e, i)) }), Object.defineProperty(this, "isMemoized", { value: !0 }), Object.defineProperty(this, "unmemoize", { value: () => new Zi(this.data) }), Object.defineProperty(this, "memoize", { value: () => this });
	}
};
function tn(t) {
	if (t) {
		if (t instanceof Mi) return new Zi([t]);
		if (t instanceof Zi) return new Zi(t.data);
		if (t.type instanceof at) return new Zi([Ui(t)]);
		if (Array.isArray(t)) return new Zi(t.flatMap((t) => {
			return (e = t) instanceof Mi ? [e] : e instanceof Zi ? e.data : tn(e).data;
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
			if (t instanceof Int8Array) return new Zi([Ui(Object.assign(Object.assign({}, e), { type: new ut() }))]);
			if (t instanceof Int16Array) return new Zi([Ui(Object.assign(Object.assign({}, e), { type: new pt() }))]);
			if (t instanceof Int32Array) return new Zi([Ui(Object.assign(Object.assign({}, e), { type: new yt() }))]);
			if (t instanceof BigInt64Array) return new Zi([Ui(Object.assign(Object.assign({}, e), { type: new dt() }))]);
			if (t instanceof Uint8Array || t instanceof Uint8ClampedArray) return new Zi([Ui(Object.assign(Object.assign({}, e), { type: new ht() }))]);
			if (t instanceof Uint16Array) return new Zi([Ui(Object.assign(Object.assign({}, e), { type: new ft() }))]);
			if (t instanceof Uint32Array) return new Zi([Ui(Object.assign(Object.assign({}, e), { type: new vt() }))]);
			if (t instanceof BigUint64Array) return new Zi([Ui(Object.assign(Object.assign({}, e), { type: new mt() }))]);
			if (t instanceof Float32Array) return new Zi([Ui(Object.assign(Object.assign({}, e), { type: new bt() }))]);
			if (t instanceof Float64Array) return new Zi([Ui(Object.assign(Object.assign({}, e), { type: new St() }))]);
			throw new Error("Unrecognized input");
		}
	}
	throw new Error("Unrecognized input");
}
const en = Symbol.for("apache-arrow/Schema"), nn = Symbol.for("apache-arrow/Field");
var rn = class t {
	static isSchema(t) {
		return !0 === (null == t ? void 0 : t[en]);
	}
	constructor(t = [], e, i, n = N.V5) {
		this.fields = t || [], this.metadata = e || /* @__PURE__ */ new Map(), i || (i = an(this.fields)), this.dictionaries = i, this.metadataVersion = n;
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
		const i = e[0] instanceof t ? e[0] : Array.isArray(e[0]) ? new t(e[0]) : new t(e), n = [...this.fields], r = on(on(/* @__PURE__ */ new Map(), this.metadata), i.metadata), s = i.fields.filter((t) => {
			const e = n.findIndex((e) => e.name === t.name);
			return !~e || (n[e] = t.clone({ metadata: on(on(/* @__PURE__ */ new Map(), n[e].metadata), t.metadata) })) && !1;
		}), o = an(s, /* @__PURE__ */ new Map());
		return new t([...n, ...s], r, new Map([...this.dictionaries, ...o]));
	}
};
rn.prototype.fields = null, rn.prototype.metadata = null, rn.prototype.dictionaries = null, rn.prototype[en] = !0, Object.defineProperty(rn, Symbol.hasInstance, { value: function(t) {
	return Function.prototype[Symbol.hasInstance].call(this, t) || this === rn && rn.isSchema(t);
} });
var sn = class t {
	static isField(t) {
		return !0 === (null == t ? void 0 : t[nn]);
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
function on(t, e) {
	return new Map([...t || /* @__PURE__ */ new Map(), ...e || /* @__PURE__ */ new Map()]);
}
function an(t, e = /* @__PURE__ */ new Map()) {
	for (let i = -1, n = t.length; ++i < n;) {
		const n = t[i].type;
		if (at.isDictionary(n)) if (e.has(n.id)) {
			if (e.get(n.id) !== n.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
		} else e.set(n.id, n.dictionary);
		n.children && n.children.length > 0 && an(n.children, e);
	}
	return e;
}
sn.prototype.type = null, sn.prototype.name = null, sn.prototype.nullable = null, sn.prototype.metadata = null, sn.prototype[nn] = !0, Object.defineProperty(sn, Symbol.hasInstance, { value: function(t) {
	return Function.prototype[Symbol.hasInstance].call(this, t) || this === sn && sn.isField(t);
} });
var ln = class extends Ht {
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
function cn(t, e) {
	return e instanceof t.constructor;
}
function un(t, e) {
	return t === e || cn(t, e);
}
function pn(t, e) {
	return t === e || cn(t, e) && t.bitWidth === e.bitWidth && t.isSigned === e.isSigned;
}
function yn(t, e) {
	return t === e || cn(t, e) && t.precision === e.precision;
}
function dn(t, e) {
	return t === e || cn(t, e) && t.unit === e.unit;
}
function hn(t, e) {
	return t === e || cn(t, e) && t.unit === e.unit && t.timezone === e.timezone;
}
function fn(t, e) {
	return t === e || cn(t, e) && t.unit === e.unit && t.bitWidth === e.bitWidth;
}
function vn(t, e) {
	return t === e || cn(t, e) && t.children.length === e.children.length && Sn.compareManyFields(t.children, e.children);
}
function mn(t, e) {
	return t === e || cn(t, e) && t.mode === e.mode && t.typeIds.every((t, i) => t === e.typeIds[i]) && Sn.compareManyFields(t.children, e.children);
}
function gn(t, e) {
	return t === e || cn(t, e) && t.unit === e.unit;
}
function bn(t, e) {
	return t === e || cn(t, e) && t.unit === e.unit;
}
ln.prototype.visitNull = un, ln.prototype.visitBool = un, ln.prototype.visitInt = pn, ln.prototype.visitInt8 = pn, ln.prototype.visitInt16 = pn, ln.prototype.visitInt32 = pn, ln.prototype.visitInt64 = pn, ln.prototype.visitUint8 = pn, ln.prototype.visitUint16 = pn, ln.prototype.visitUint32 = pn, ln.prototype.visitUint64 = pn, ln.prototype.visitFloat = yn, ln.prototype.visitFloat16 = yn, ln.prototype.visitFloat32 = yn, ln.prototype.visitFloat64 = yn, ln.prototype.visitUtf8 = un, ln.prototype.visitLargeUtf8 = un, ln.prototype.visitUtf8View = un, ln.prototype.visitBinary = un, ln.prototype.visitLargeBinary = un, ln.prototype.visitBinaryView = un, ln.prototype.visitFixedSizeBinary = function(t, e) {
	return t === e || cn(t, e) && t.byteWidth === e.byteWidth;
}, ln.prototype.visitDate = dn, ln.prototype.visitDateDay = dn, ln.prototype.visitDateMillisecond = dn, ln.prototype.visitTimestamp = hn, ln.prototype.visitTimestampSecond = hn, ln.prototype.visitTimestampMillisecond = hn, ln.prototype.visitTimestampMicrosecond = hn, ln.prototype.visitTimestampNanosecond = hn, ln.prototype.visitTime = fn, ln.prototype.visitTimeSecond = fn, ln.prototype.visitTimeMillisecond = fn, ln.prototype.visitTimeMicrosecond = fn, ln.prototype.visitTimeNanosecond = fn, ln.prototype.visitDecimal = un, ln.prototype.visitList = vn, ln.prototype.visitLargeList = vn, ln.prototype.visitStruct = function(t, e) {
	return t === e || cn(t, e) && t.children.length === e.children.length && Sn.compareManyFields(t.children, e.children);
}, ln.prototype.visitUnion = mn, ln.prototype.visitDenseUnion = mn, ln.prototype.visitSparseUnion = mn, ln.prototype.visitDictionary = function(t, e) {
	return t === e || cn(t, e) && t.id === e.id && t.isOrdered === e.isOrdered && Sn.visit(t.indices, e.indices) && Sn.visit(t.dictionary, e.dictionary);
}, ln.prototype.visitInterval = gn, ln.prototype.visitIntervalDayTime = gn, ln.prototype.visitIntervalYearMonth = gn, ln.prototype.visitIntervalMonthDayNano = gn, ln.prototype.visitDuration = bn, ln.prototype.visitDurationSecond = bn, ln.prototype.visitDurationMillisecond = bn, ln.prototype.visitDurationMicrosecond = bn, ln.prototype.visitDurationNanosecond = bn, ln.prototype.visitFixedSizeList = function(t, e) {
	return t === e || cn(t, e) && t.listSize === e.listSize && t.children.length === e.children.length && Sn.compareManyFields(t.children, e.children);
}, ln.prototype.visitMap = function(t, e) {
	return t === e || cn(t, e) && t.keysSorted === e.keysSorted && t.children.length === e.children.length && Sn.compareManyFields(t.children, e.children);
};
const Sn = new ln();
function wn(t, e) {
	return Sn.compareSchemas(t, e);
}
function In(t, e) {
	return function(t, e) {
		const i = [...t.fields], n = [], r = { numBatches: e.reduce((t, e) => Math.max(t, e.length), 0) };
		let s = 0, o = 0, a = -1;
		const l = e.length;
		let c, u = [];
		for (; r.numBatches-- > 0;) {
			for (o = Number.POSITIVE_INFINITY, a = -1; ++a < l;) u[a] = c = e[a].shift(), o = Math.min(o, c ? c.length : o);
			Number.isFinite(o) && (u = Tn(i, o, u, e, r), o > 0 && (n[s++] = Ui({
				type: new _t(i),
				length: o,
				nullCount: 0,
				children: u.slice()
			})));
		}
		return [t = t.assign(i), n.map((e) => new En(t, e))];
	}(t, e.map((t) => t.data.concat()));
}
function Tn(t, e, i, n, r) {
	var s;
	const o = (e + 63 & -64) >> 3;
	for (let a = -1, l = n.length; ++a < l;) {
		const l = i[a], c = null == l ? void 0 : l.length;
		if (c >= e) c === e ? i[a] = l : (i[a] = l.slice(0, e), r.numBatches = Math.max(r.numBatches, n[a].unshift(l.slice(e, c - e))));
		else {
			const n = t[a];
			t[a] = n.clone({ nullable: !0 }), i[a] = null !== (s = null == l ? void 0 : l._changeLengthAndBackfillNullBitmap(e)) && void 0 !== s ? s : Ui({
				type: n.type,
				length: e,
				nullCount: e,
				nullBitmap: new Uint8Array(o)
			});
		}
	}
	return i;
}
var An;
const Dn = Symbol.for("apache-arrow/Table");
var Bn, On = class t {
	static isTable(t) {
		return !0 === (null == t ? void 0 : t[Dn]);
	}
	constructor(...e) {
		var i, n;
		if (0 === e.length) return this.batches = [], this.schema = new rn([]), this._offsets = [0], this;
		let r, s;
		e[0] instanceof rn && (r = e.shift()), e.at(-1) instanceof Uint32Array && (s = e.pop());
		const o = (e) => {
			if (e) {
				if (e instanceof En) return [e];
				if (e instanceof t) return e.batches;
				if (e instanceof Mi) {
					if (e.type instanceof _t) return [new En(new rn(e.type.children), e)];
				} else {
					if (Array.isArray(e)) return e.flatMap((t) => o(t));
					if ("function" == typeof e[Symbol.iterator]) return [...e].flatMap((t) => o(t));
					if ("object" == typeof e) {
						const t = Object.keys(e), i = t.map((t) => new Zi([e[t]])), [, s] = In(null != r ? r : new rn(t.map((t, e) => new sn(String(t), i[e].type, i[e].nullable))), i);
						return 0 === s.length ? [new En(e)] : s;
					}
				}
			}
			return [];
		}, a = e.flatMap((t) => o(t));
		if (r = null !== (n = null != r ? r : null === (i = a[0]) || void 0 === i ? void 0 : i.schema) && void 0 !== n ? n : new rn([]), !(r instanceof rn)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
		for (const t of a) {
			if (!(t instanceof En)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
			if (!wn(r, t.schema)) throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
		}
		this.schema = r, this.batches = a, this._offsets = null != s ? s : Fi(this.data);
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
		return -1 === this._nullCount && (this._nullCount = Li(this.data)), this._nullCount;
	}
	isValid(t) {
		return !1;
	}
	get(t) {
		return null;
	}
	at(t) {
		return this.get(vi(t, this.numRows));
	}
	set(t, e) {}
	indexOf(t, e) {
		return -1;
	}
	[Symbol.iterator]() {
		return this.batches.length > 0 ? Gi.visit(new Zi(this.data)) : new Array(0)[Symbol.iterator]();
	}
	toArray() {
		return [...this];
	}
	toString() {
		return `[\n  ${this.toArray().join(",\n  ")}\n]`;
	}
	concat(...e) {
		const i = this.schema, n = this.data.concat(e.flatMap(({ data: t }) => t));
		return new t(i, n.map((t) => new En(i, t)));
	}
	slice(e, i) {
		const n = this.schema;
		[e, i] = fi({ length: this.numRows }, e, i);
		const r = xi(this.data, this._offsets, e, i);
		return new t(n, r.map((t) => new En(n, t)));
	}
	getChild(t) {
		return this.getChildAt(this.schema.fields.findIndex((e) => e.name === t));
	}
	getChildAt(t) {
		if (t > -1 && t < this.schema.fields.length) {
			const e = this.data.map((e) => e.children[t]);
			if (0 === e.length) {
				const { type: i } = this.schema.fields[t], n = Ui({
					type: i,
					length: 0,
					nullCount: 0
				});
				e.push(n._changeLengthAndBackfillNullBitmap(this.numRows));
			}
			return new Zi(e);
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
			i || (i = new Zi([Ui({
				type: new lt(),
				length: this.numRows
			})]));
			const t = n.fields.slice(), s = t[e].clone({ type: i.type }), o = this.schema.fields.map((t, e) => this.getChildAt(e));
			[t[e], o[e]] = [s, i], [n, r] = In(n, o);
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
		return new t(...In(s, o));
	}
};
An = Symbol.toStringTag, On[An] = ((t) => (t.schema = null, t.batches = [], t._offsets = new Uint32Array([0]), t._nullCount = -1, t[Symbol.isConcatSpreadable] = !0, t[Dn] = !0, t.isValid = ki(_i), t.get = ki(oi.getVisitFn(k.Struct)), t.set = Vi(Be.getVisitFn(k.Struct)), t.indexOf = ji(Pi.getVisitFn(k.Struct)), "Table"))(On.prototype), Object.defineProperty(On, Symbol.hasInstance, { value: function(t) {
	return Function.prototype[Symbol.hasInstance].call(this, t) || this === On && On.isTable(t);
} });
const Mn = Symbol.for("apache-arrow/RecordBatch");
var En = class t {
	static isRecordBatch(t) {
		return !0 === (null == t ? void 0 : t[Mn]);
	}
	constructor(...t) {
		switch (t.length) {
			case 3:
			case 2:
				if ([this.schema] = t, !(this.schema instanceof rn)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
				if ([, this.data = Ui({
					nullCount: 0,
					type: new _t(this.schema.fields),
					children: this.schema.fields.map((t) => Ui({
						type: t.type,
						nullCount: 0
					}))
				}), this._metadata = /* @__PURE__ */ new Map()] = t, !(this.data instanceof Mi)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
				[this.schema, this.data] = Un(this.schema, this.data.children, this.data.length);
				break;
			case 1: {
				const [e] = t, { fields: i, children: n, length: r } = Object.keys(e).reduce((t, i, n) => (t.children[n] = e[i], t.length = Math.max(t.length, e[i].length), t.fields[n] = sn.new({
					name: i,
					type: e[i].type,
					nullable: !0
				}), t), {
					length: 0,
					fields: new Array(),
					children: new Array()
				}), s = new rn(i), o = Ui({
					type: new _t(i),
					length: r,
					children: n,
					nullCount: 0
				});
				[this.schema, this.data] = Un(s, o.children, r), this._metadata = /* @__PURE__ */ new Map();
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
		return oi.visit(this.data, t);
	}
	at(t) {
		return this.get(vi(t, this.numRows));
	}
	set(t, e) {
		return Be.visit(this.data, t, e);
	}
	indexOf(t, e) {
		return Pi.visit(this.data, t, e);
	}
	[Symbol.iterator]() {
		return Gi.visit(new Zi([this.data]));
	}
	toArray() {
		return [...this];
	}
	concat(...t) {
		return new On(this.schema, [this, ...t]);
	}
	slice(e, i) {
		const [n] = new Zi([this.data]).slice(e, i).data;
		return new t(this.schema, n, this._metadata);
	}
	getChild(t) {
		var e;
		return this.getChildAt(null === (e = this.schema.fields) || void 0 === e ? void 0 : e.findIndex((e) => e.name === t));
	}
	getChildAt(t) {
		return t > -1 && t < this.schema.fields.length ? new Zi([this.data.children[t]]) : null;
	}
	setChild(t, e) {
		var i;
		return this.setChildAt(null === (i = this.schema.fields) || void 0 === i ? void 0 : i.findIndex((e) => e.name === t), e);
	}
	setChildAt(e, i) {
		let n = this.schema, r = this.data;
		if (e > -1 && e < this.numCols) {
			i || (i = new Zi([Ui({
				type: new lt(),
				length: this.numRows
			})]));
			const t = n.fields.slice(), s = r.children.slice(), o = t[e].clone({ type: i.type });
			[t[e], s[e]] = [o, i.data[0]], n = new rn(t, new Map(this.schema.metadata)), r = Ui({
				type: new _t(t),
				length: r.length,
				children: s
			});
		}
		return new t(n, r, this._metadata);
	}
	select(e) {
		const i = this.schema.select(e), n = new _t(i.fields), r = [];
		for (const t of e) {
			const e = this.schema.fields.findIndex((e) => e.name === t);
			~e && (r[e] = this.data.children[e]);
		}
		return new t(i, Ui({
			type: n,
			length: this.numRows,
			children: r
		}), this._metadata);
	}
	selectAt(e) {
		const i = this.schema.selectAt(e), n = e.map((t) => this.data.children[t]).filter(Boolean), r = Ui({
			type: new _t(i.fields),
			length: this.numRows,
			children: n
		});
		return new t(i, r, this._metadata);
	}
};
function Un(t, e, i = e.reduce((t, e) => Math.max(t, e.length), 0)) {
	var n;
	const r = [...t.fields], s = [...e], o = (i + 63 & -64) >> 3;
	for (const [a, l] of t.fields.entries()) {
		const t = e[a];
		t && t.length === i || (r[a] = l.clone({ nullable: !0 }), s[a] = null !== (n = null == t ? void 0 : t._changeLengthAndBackfillNullBitmap(i)) && void 0 !== n ? n : Ui({
			type: l.type,
			length: i,
			nullCount: i,
			nullBitmap: new Uint8Array(o)
		}));
	}
	return [t.assign(r), Ui({
		type: new _t(r),
		length: i,
		children: s
	})];
}
function Nn(t, e, i = /* @__PURE__ */ new Map()) {
	var n, r;
	if ((null !== (n = null == t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0 && (null == t ? void 0 : t.length) === (null == e ? void 0 : e.length)) for (let s = -1, o = t.length; ++s < o;) {
		const { type: n } = t[s], o = e[s];
		for (const t of [o, ...(null === (r = null == o ? void 0 : o.dictionary) || void 0 === r ? void 0 : r.data) || []]) Nn(n.children, null == t ? void 0 : t.children, i);
		if (at.isDictionary(n)) {
			const { id: t } = n;
			if (i.has(t)) {
				if (i.get(t) !== o.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
			} else null != o && o.dictionary && i.set(t, o.dictionary);
		}
	}
	return i;
}
Bn = Symbol.toStringTag, En[Bn] = ((t) => (t._nullCount = -1, t[Symbol.isConcatSpreadable] = !0, t[Mn] = !0, "RecordBatch"))(En.prototype), Object.defineProperty(En, Symbol.hasInstance, { value: function(t) {
	return Function.prototype[Symbol.hasInstance].call(this, t) || this === En && En.isRecordBatch(t);
} });
const Ln = {
	TIMESTAMP_MS: "timestamp_ms",
	AXIS_X: "axis_x",
	AXIS_Y: "axis_y",
	AXIS_Z: "axis_z",
	VECTOR_MAGNITUDE: "vector_magnitude",
	TEMPERATURE: "temperature"
};
function Fn(t) {
	const e = (t) => tn(Ui({
		type: new St(),
		length: t.length,
		data: t
	}));
	return new On({
		timestamp_ms: e(t.timestamp_ms),
		axis_x: e(t.axis_x),
		axis_y: e(t.axis_y),
		axis_z: e(t.axis_z),
		vector_magnitude: e(t.vector_magnitude),
		temperature: e(t.temperature)
	});
}
function xn(t) {
	const e = (e) => {
		const i = t.getChild(e);
		if (!i) return /* @__PURE__ */ new Float64Array();
		const n = i.toArray();
		return n instanceof Float64Array ? n : new Float64Array(n);
	};
	return {
		timestamp_ms: e(Ln.TIMESTAMP_MS),
		axis_x: e(Ln.AXIS_X),
		axis_y: e(Ln.AXIS_Y),
		axis_z: e(Ln.AXIS_Z),
		vector_magnitude: e(Ln.VECTOR_MAGNITUDE),
		temperature: e(Ln.TEMPERATURE)
	};
}
const Cn = {
	GENEACTIV: 0,
	ACTIGRAPH_RAW: 1,
	GENEACTIV_BIN: 2
}, _n = {
	[Cn.GENEACTIV]: 100,
	[Cn.ACTIGRAPH_RAW]: 30,
	[Cn.GENEACTIV_BIN]: 86
}, kn = 33554432;
async function Vn(t, e, i, r, o, a, l, c = !1, u) {
	const p = t.size;
	let y = 0, d = 0;
	const h = c ? new Uint8Array(Math.min(m, p)) : null;
	for (await l.streamParseStart(r, e, a, u), c && await l.sha256Start(); y < p;) {
		if (o?.aborted) throw new DOMException("Aborted: streamParseRaw", "AbortError");
		const e = Math.min(y + kn, p), n = new Uint8Array(await t.slice(y, e).arrayBuffer());
		h && y < h.length && h.set(n.subarray(0, h.length - y), y);
		const r = await (h ? l.streamParseFeedHashed(s(n, [n.buffer])) : l.streamParseFeed(s(n, [n.buffer])));
		d += r, y = e, i?.({
			bytesRead: y,
			totalBytes: p,
			percent: y / p * 100,
			epochsEmitted: d,
			stage: "feed"
		});
	}
	const f = h ? {
		prefixHash: await v(h),
		fullHash: await l.sha256Finish()
	} : void 0;
	i?.({
		bytesRead: p,
		totalBytes: p,
		percent: 100,
		epochsEmitted: d,
		stage: "finalize"
	});
	const g = await l.streamParseFinishChunk(i ? n((t, e) => {
		i({
			bytesRead: p,
			totalBytes: p,
			percent: 100,
			epochsEmitted: d,
			stage: "finalize",
			finalizeStage: t,
			finalizeFraction: e
		});
	}) : void 0);
	g.rawRetentionDegraded ? console.warn(`[local-streaming] recording exceeded the WASM retained-signal memory cap; fell back to streaming wall-clock counts (no byte-exact counts / 5 s GGIR series). size=${String(p)} bytes, sampleFrequency=${String(g.sampleFrequency)} Hz`) : g.canonicalPassDegraded && console.warn(`[local-streaming] canonical whole-signal pass replaced by a degraded tier: ${g.canonicalPassReason ?? "no reason reported (stale wasm bundle?)"} size=${String(p)} bytes, sampleFrequency=${String(g.sampleFrequency)} Hz`);
	const { timestampsMs: b, axisX: S, axisY: w, axisZ: I, vectorMagnitude: T, temperature: A, ...D } = g;
	return {
		...D,
		table: Fn({
			timestamp_ms: b,
			axis_x: S,
			axis_y: w,
			axis_z: I,
			vector_magnitude: T,
			temperature: A
		}),
		...f ? { contentHashes: f } : {}
	};
}
async function jn(t, e) {
	const i = (await f(t, 65536, e)).toLowerCase();
	if (i.includes("geneactiv") || i.includes("activinsights")) return i.includes("recorded data") ? Cn.GENEACTIV_BIN : Cn.GENEACTIV;
	if (i.includes("actigraph")) {
		const t = i.includes("epoch period") && !i.includes("epoch period (hh:mm:ss) 00:00:00") || /date\s*,\s*time\s*,\s*axis1[\s,]/u.test(i) || i.includes("vector magnitude");
		if ((/timestamp\s*,\s*(?:axis1\s*,\s*axis2\s*,\s*axis3|accelerometer x\s*,\s*accelerometer y\s*,\s*accelerometer z)/u.test(i) || /^\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}(?:[.:]\d{1,3})?\s*,/mu.test(i) || /^\d{1,2}\/\d{1,2}\/\d{4}\s+\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?\s*,/mu.test(i)) && !t) return Cn.ACTIGRAPH_RAW;
	}
	return null;
}
const $n = 1073741824;
function zn() {
	return "undefined" == typeof navigator ? void 0 : navigator.deviceMemory;
}
const Rn = 15e8;
function Pn() {
	return Math.min(Rn, function() {
		const t = "undefined" == typeof navigator ? void 0 : navigator.deviceMemory;
		if ("number" != typeof t || !Number.isFinite(t) || t <= 0) return $n;
		const e = Math.floor(1024 * t * 1024 * 1024 / 4);
		return Math.min(2147483648, Math.max($n, e));
	}());
}
function Yn(t) {
	return t instanceof Error && ("workerLost" in t && !0 === t.workerLost || /timed out during|worker stopped|worker failed/u.test(t.message));
}
const Hn = 3e5;
async function Wn(t, i, n, o, a, l = !1) {
	if (qn(n, "before buffered file streaming"), t.size > Pn()) throw new Error("This file is too large for in-browser memory. Import a shorter recording, or use a computer with more memory.");
	const c = o ?? r(), u = a ?? (() => e(c)), { withWasmDeadline: p } = await Promise.resolve().then(() => Kn), y = t.size, d = l ? new Uint8Array(Math.min(m, y)) : null;
	l && await c.sha256Start(), await p(c, (t) => t.csvBufferClear(y), {
		ms: Hn,
		label: "csvBufferClear",
		signal: n,
		cancel: u
	});
	let h = 0;
	for (; h < y;) {
		qn(n, "before buffered file chunk read");
		const e = Math.min(h + kn, y), r = await t.slice(h, e).arrayBuffer();
		qn(n, "after buffered file chunk read");
		const o = new Uint8Array(r);
		d && h < d.length && d.set(o.subarray(0, d.length - h), h), await p(c, (t) => d ? t.csvBufferAppendHashed(s(o, [o.buffer])) : t.csvBufferAppend(s(o, [o.buffer])), {
			ms: Hn,
			label: "csvBufferAppend",
			signal: n,
			cancel: u
		}), qn(n, "after buffered file chunk append"), h = e, i({
			bytesRead: h,
			totalBytes: y,
			percent: h / y * 100
		});
	}
	return d ? {
		prefixHash: await v(d),
		fullHash: await c.sha256Finish()
	} : null;
}
function Gn(t, e, i, n, r) {
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
function qn(t, e = "processing") {
	if (t?.aborted) throw new DOMException(`Aborted: ${e}`, "AbortError");
}
function Jn(t) {
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
function Xn(t, e, i = "processing") {
	if (e?.aborted) throw new DOMException(`Aborted: ${i}`, "AbortError");
	if (t instanceof Error && "AbortError" === t.name) throw t;
}
var Kn = t({
	BackgroundJobBusyError: () => Zn,
	backgroundWasmApi: () => pr,
	runBackgroundJob: () => dr,
	setBackgroundJobVisibleFile: () => sr,
	wasmApiWithDeadline: () => ur,
	withBackgroundWasm: () => lr,
	withWasmDeadline: () => cr,
	yieldBackgroundJob: () => Qn
}), Zn = class extends Error {
	name = "BackgroundJobBusyError";
	kind;
	constructor(t) {
		super("This job is running in another tab."), this.kind = t;
	}
};
async function Qn(t) {
	t?.throwIfAborted();
	const e = globalThis.scheduler;
	e?.yield ? await e.yield() : await new Promise((t) => {
		const e = new MessageChannel();
		e.port1.onmessage = () => {
			e.port1.close(), e.port2.close(), t();
		}, e.port2.postMessage(null);
	}), t?.throwIfAborted();
}
const tr = /* @__PURE__ */ new Map(), er = 100, ir = /* @__PURE__ */ new Map();
let nr, rr;
function sr(t) {
	nr = t;
}
let or = Promise.resolve();
const ar = /* @__PURE__ */ new WeakMap();
function lr(t, n, { ms: s, label: o } = {
	ms: Hn,
	label: "background computation"
}, a) {
	if (!t) {
		const i = r();
		return Gn(() => n(i), s, o, t, () => {
			e(i), a?.();
		});
	}
	const l = or, c = y(l, t).then(async () => {
		t.throwIfAborted();
		const e = rr ??= i();
		let r = !1;
		const l = () => {
			r || (r = !0, rr === e && (rr = void 0), e.terminate());
		};
		try {
			return await Gn(() => n(e.api), s, o, t, () => {
				l(), a?.();
			});
		} catch (c) {
			throw l(), c;
		}
	});
	return or = Promise.allSettled([l, c]).then(() => {}), c;
}
function cr(t, e, { signal: i, cancel: n, ...r }) {
	const s = ar.get(t);
	return s ? lr(i ?? s, async (t) => await e(t), r, n) : Gn(() => e(t), r.ms, r.label, i, n);
}
function ur(t, e) {
	const i = ar.get(t), n = new Proxy(t, { get: (n, r) => {
		if ("string" == typeof r && "then" !== r) return i || "function" == typeof Reflect.get(t, r) ? (...i) => cr(t, (t) => Reflect.apply(Reflect.get(t, r), t, i), {
			...e,
			label: e.label ?? r
		}) : Reflect.get(t, r);
	} });
	return i && ar.set(n, i), n;
}
function pr(t, e) {
	if (!t) return r();
	const i = {};
	return ar.set(i, t), ur(i, {
		ms: Hn,
		...e,
		signal: t,
		cancel: () => {}
	});
}
function yr(t) {
	if ("undefined" == typeof document || "hidden" !== document.visibilityState) return;
	document.title = `${t ? "[Failed]" : "[Done]"} ${document.title.replace(/^\[(Done|Failed)\] /, "")}`;
	const e = () => {
		"hidden" !== document.visibilityState && (document.title = document.title.replace(/^\[(Done|Failed)\] /, ""), document.removeEventListener("visibilitychange", e));
	};
	document.addEventListener("visibilitychange", e);
}
function dr({ kind: t, key: e, label: i, run: n, workspaceId: r = h().name, rerun: s = !1, lockKey: f = e, signal: v }) {
	const m = `${r}:${e}`, S = tr.get(m);
	if (S && !s) return b(S.controller.signal, v), y(S.promise, v);
	if (v?.aborted) return Promise.reject(o(v));
	if (S) {
		const s = () => dr({
			kind: t,
			key: e,
			label: i,
			run: n,
			workspaceId: r,
			lockKey: f,
			signal: v
		});
		if (S.pending?.signal?.aborted && delete S.pending, S.pending) return S.pending.requests.push({
			run: s,
			signal: v
		}), y(S.pending.promise, v);
		const a = S.controller.signal.aborted ? void 0 : S.controller.signal, l = {
			requests: [{
				run: s,
				signal: v
			}],
			signal: a,
			promise: Promise.resolve()
		};
		return l.promise = y(Promise.allSettled([S.promise]).then(() => {
			a?.throwIfAborted(), l.requests = l.requests.filter((t) => !t.signal?.aborted);
			const t = l.requests.at(-1);
			if (!t) throw o();
			const e = t.run();
			for (const i of l.requests) b(tr.get(m)?.controller.signal, i.signal);
			return e;
		}), a), S.pending = l, y(l.promise, v);
	}
	const w = new AbortController(), I = g(w.signal, v), T = () => w.abort(v?.reason);
	v?.addEventListener("abort", T, { once: !0 });
	const A = u.getState(), D = p(t), B = l(t), O = (t) => {
		u.getState().jobs[m]?.controller === w && A.update(m, t);
	};
	A.update(m, {
		id: m,
		workspaceId: r,
		kind: t,
		key: e,
		label: i,
		controller: w,
		status: c.QUEUED,
		done: 0,
		total: 0,
		visible: !B,
		message: void 0,
		detail: void 0
	}), t !== d.IMPORT && t !== d.REPROCESS || u.setState({
		localProcessingJobId: m,
		isLocalProcessing: !0
	});
	const M = `${r}:${t}`, E = ir.get(M) ?? [];
	let U, N;
	ir.set(M, E);
	let L = -1 / 0;
	const F = () => {
		clearTimeout(U), U = void 0, N && !w.signal.aborted && (O(N), N = void 0, L = Date.now());
	}, x = async () => (w.signal.throwIfAborted(), O({ status: c.RUNNING }), n({
		signal: w.signal,
		progress: (t, e, i, n) => {
			if (w.signal.aborted) return;
			const r = N?.detail ?? u.getState().jobs[m]?.detail;
			N = {
				done: t,
				total: e,
				message: i,
				...void 0 !== n ? { detail: n } : {}
			}, L === -1 / 0 || t >= e || null === n || void 0 !== n && (n?.step !== r?.step || n?.warning !== r?.warning) || "save" === n?.step || "done" === n?.step || Date.now() - L >= er ? F() : U ??= setTimeout(F, er - (Date.now() - L));
		},
		yieldNow: () => Qn(w.signal)
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
	}, j = k.then(async () => (w.signal.throwIfAborted(), "undefined" != typeof navigator && navigator.locks?.request ? navigator.locks.request(`${r}:${f}`, { ifAvailable: !0 }, async (e) => {
		if (!e) {
			if (D) return;
			throw O({
				status: c.ELSEWHERE,
				message: "running in another tab"
			}), new Zn(t);
		}
		return x();
	}) : x())).then((t) => {
		F();
		const e = u.getState().jobs[m]?.status === c.FAILED;
		return O({ status: w.signal.aborted ? c.CANCELLED : e ? c.FAILED : c.DONE }), w.signal.aborted || B && !e || yr(e), t;
	}, (t) => {
		if (u.getState().jobs[m]?.status !== c.ELSEWHERE) {
			const e = w.signal.aborted || t instanceof Error && "AbortError" === t.name;
			O({ status: e ? c.CANCELLED : c.FAILED }), e || yr(!0);
		}
		throw t;
	}).finally(() => {
		I(), v?.removeEventListener("abort", T), clearTimeout(U);
		const t = u.getState().jobs[m];
		D && t?.controller === w && t.status !== c.FAILED && A.dismiss(m), a(u.getState())?.controller === w && A.setIsLocalProcessing(!1), tr.get(m)?.promise === j && tr.delete(m);
		const e = E.indexOf(V);
		if (e >= 0 && E.splice(e, 1), 0 === e) try {
			const t = nr?.();
			if (E.length > 1 && !E[0].bypassed && "local" === t?.currentFileSource && null !== t.currentFileId && h().name === r) {
				const e = E.findIndex((e) => e.key.split(":")[1] === String(t.currentFileId));
				e > 0 && (E[0].bypassed = !0, E.unshift(E.splice(e, 1)[0]));
			}
		} catch {} finally {
			E[0]?.start();
		}
		0 === E.length && ir.delete(M);
	});
	return tr.set(m, {
		kind: t,
		promise: j,
		controller: w
	}), E.push(V), 1 === E.length && C(), j;
}
export { xn as C, Ln as S, zn as _, lr as a, jn as b, Rn as c, qn as d, Jn as f, Gn as g, Wn as h, ur as i, Hn as l, Xn as m, dr as n, cr as o, Yn as p, sr as r, Qn as s, pr as t, Pn as u, _n as v, Vn as x, Cn as y };
