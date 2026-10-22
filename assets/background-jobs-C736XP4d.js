import { r as t } from "./rolldown-runtime-BAJaJb8v.js";
import { i as e, l as i, n, s as r, u as s } from "./workers-DK49faf9.js";
import { B as o, H as a, K as l, U as c, V as u, q as p, t as y, z as d } from "./workspace-db-nrwH3Dt2.js";
import { s as h, t as f } from "./content-hash-BtD8CeUH.js";
import { r as v, t as m } from "./project-revision-DBLYmsAG.js";
const g = new TextDecoder("utf-8"), b = g.decode.bind(g), S = new TextEncoder(), w = (t) => S.encode(t), I = (t) => "function" == typeof t, T = (t) => null != t && Object(t) === t, A = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer;
function D(t, e) {
	let i = T(n = e) && "done" in n && "value" in n ? e.value : e;
	var n;
	return i instanceof t ? t === Uint8Array ? new t(i.buffer, i.byteOffset, i.byteLength) : i : i ? ("string" == typeof i && (i = w(i)), i instanceof ArrayBuffer || i instanceof A ? new t(i) : ((t) => T(t) && I(t.clear) && I(t.bytes) && I(t.position) && I(t.setPosition) && I(t.capacity) && I(t.getBufferIdentifier) && I(t.createLong))(i) ? D(t, i.bytes()) : ArrayBuffer.isView(i) ? i.byteLength <= 0 ? new t(0) : new t(i.buffer, i.byteOffset, i.byteLength / t.BYTES_PER_ELEMENT) : t.from(i)) : new t(0);
}
const B = (t) => D(Int32Array, t), O = (t) => D(BigInt64Array, t), M = (t) => D(Uint8Array, t);
var E, U, N, L, F, x, C, _;
function k(t) {
	if (null === t) return "null";
	if (void 0 === t) return "undefined";
	switch (typeof t) {
		case "number":
		case "bigint": return `${t}`;
		case "string": return `"${t}"`;
	}
	return "function" == typeof t[Symbol.toPrimitive] ? t[Symbol.toPrimitive]("string") : ArrayBuffer.isView(t) ? t instanceof BigInt64Array || t instanceof BigUint64Array ? `[${[...t].map((t) => k(t))}]` : `[${t}]` : ArrayBuffer.isView(t) ? `[${t}]` : JSON.stringify(t, (t, e) => "bigint" == typeof e ? `${e}` : e);
}
function V(t) {
	if ("bigint" == typeof t && (t < Number.MIN_SAFE_INTEGER || t > Number.MAX_SAFE_INTEGER)) throw new TypeError(`${t} is not safe to convert to a number.`);
	return Number(t);
}
function j(t, e) {
	return V(t / e) + V(t % e) / V(e);
}
(function(t) {
	t[t.V1 = 0] = "V1", t[t.V2 = 1] = "V2", t[t.V3 = 2] = "V3", t[t.V4 = 3] = "V4", t[t.V5 = 4] = "V5";
})(E || (E = {})), function(t) {
	t[t.Sparse = 0] = "Sparse", t[t.Dense = 1] = "Dense";
}(U || (U = {})), function(t) {
	t[t.HALF = 0] = "HALF", t[t.SINGLE = 1] = "SINGLE", t[t.DOUBLE = 2] = "DOUBLE";
}(N || (N = {})), function(t) {
	t[t.DAY = 0] = "DAY", t[t.MILLISECOND = 1] = "MILLISECOND";
}(L || (L = {})), function(t) {
	t[t.SECOND = 0] = "SECOND", t[t.MILLISECOND = 1] = "MILLISECOND", t[t.MICROSECOND = 2] = "MICROSECOND", t[t.NANOSECOND = 3] = "NANOSECOND";
}(F || (F = {})), function(t) {
	t[t.YEAR_MONTH = 0] = "YEAR_MONTH", t[t.DAY_TIME = 1] = "DAY_TIME", t[t.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
}(x || (x = {})), function(t) {
	t[t.NONE = 0] = "NONE", t[t.Null = 1] = "Null", t[t.Int = 2] = "Int", t[t.Float = 3] = "Float", t[t.Binary = 4] = "Binary", t[t.Utf8 = 5] = "Utf8", t[t.Bool = 6] = "Bool", t[t.Decimal = 7] = "Decimal", t[t.Date = 8] = "Date", t[t.Time = 9] = "Time", t[t.Timestamp = 10] = "Timestamp", t[t.Interval = 11] = "Interval", t[t.List = 12] = "List", t[t.Struct = 13] = "Struct", t[t.Union = 14] = "Union", t[t.FixedSizeBinary = 15] = "FixedSizeBinary", t[t.FixedSizeList = 16] = "FixedSizeList", t[t.Map = 17] = "Map", t[t.Duration = 18] = "Duration", t[t.LargeBinary = 19] = "LargeBinary", t[t.LargeUtf8 = 20] = "LargeUtf8", t[t.LargeList = 21] = "LargeList", t[t.BinaryView = 23] = "BinaryView", t[t.Utf8View = 24] = "Utf8View", t[t.Dictionary = -1] = "Dictionary", t[t.Int8 = -2] = "Int8", t[t.Int16 = -3] = "Int16", t[t.Int32 = -4] = "Int32", t[t.Int64 = -5] = "Int64", t[t.Uint8 = -6] = "Uint8", t[t.Uint16 = -7] = "Uint16", t[t.Uint32 = -8] = "Uint32", t[t.Uint64 = -9] = "Uint64", t[t.Float16 = -10] = "Float16", t[t.Float32 = -11] = "Float32", t[t.Float64 = -12] = "Float64", t[t.DateDay = -13] = "DateDay", t[t.DateMillisecond = -14] = "DateMillisecond", t[t.TimestampSecond = -15] = "TimestampSecond", t[t.TimestampMillisecond = -16] = "TimestampMillisecond", t[t.TimestampMicrosecond = -17] = "TimestampMicrosecond", t[t.TimestampNanosecond = -18] = "TimestampNanosecond", t[t.TimeSecond = -19] = "TimeSecond", t[t.TimeMillisecond = -20] = "TimeMillisecond", t[t.TimeMicrosecond = -21] = "TimeMicrosecond", t[t.TimeNanosecond = -22] = "TimeNanosecond", t[t.DenseUnion = -23] = "DenseUnion", t[t.SparseUnion = -24] = "SparseUnion", t[t.IntervalDayTime = -25] = "IntervalDayTime", t[t.IntervalYearMonth = -26] = "IntervalYearMonth", t[t.DurationSecond = -27] = "DurationSecond", t[t.DurationMillisecond = -28] = "DurationMillisecond", t[t.DurationMicrosecond = -29] = "DurationMicrosecond", t[t.DurationNanosecond = -30] = "DurationNanosecond", t[t.IntervalMonthDayNano = -31] = "IntervalMonthDayNano";
}(C || (C = {})), function(t) {
	t[t.OFFSET = 0] = "OFFSET", t[t.DATA = 1] = "DATA", t[t.VALIDITY = 2] = "VALIDITY", t[t.TYPE = 3] = "TYPE";
}(_ || (_ = {}));
const $ = Symbol.for("isArrowBigNum");
function z(t, ...e) {
	return 0 === e.length ? Object.setPrototypeOf(D(this.TypedArray, t), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(t, ...e), this.constructor.prototype);
}
function R(...t) {
	return z.apply(this, t);
}
function P(...t) {
	return z.apply(this, t);
}
function Y(...t) {
	return z.apply(this, t);
}
z.prototype[$] = !0, z.prototype.toJSON = function() {
	return `"${G(this)}"`;
}, z.prototype.valueOf = function(t) {
	return W(this, t);
}, z.prototype.toString = function() {
	return G(this);
}, z.prototype[Symbol.toPrimitive] = function(t = "default") {
	switch (t) {
		case "number": return W(this);
		case "string": return G(this);
		case "default": return 8 === (e = this).byteLength ? new e.BigIntArray(e.buffer, e.byteOffset, 1)[0] : G(e);
	}
	var e;
	return G(this);
}, Object.setPrototypeOf(R.prototype, Object.create(Int32Array.prototype)), Object.setPrototypeOf(P.prototype, Object.create(Uint32Array.prototype)), Object.setPrototypeOf(Y.prototype, Object.create(Uint32Array.prototype)), Object.assign(R.prototype, z.prototype, {
	constructor: R,
	signed: !0,
	TypedArray: Int32Array,
	BigIntArray: BigInt64Array
}), Object.assign(P.prototype, z.prototype, {
	constructor: P,
	signed: !1,
	TypedArray: Uint32Array,
	BigIntArray: BigUint64Array
}), Object.assign(Y.prototype, z.prototype, {
	constructor: Y,
	signed: !0,
	TypedArray: Uint32Array,
	BigIntArray: BigUint64Array
});
const H = BigInt(4294967296) * BigInt(4294967296) - BigInt(1);
function W(t, e) {
	const { buffer: i, byteOffset: n, byteLength: r, signed: s } = t, o = new BigUint64Array(i, n, r / 8), a = s && o.at(-1) & BigInt(1) << BigInt(63);
	let l = BigInt(0), c = 0;
	if (a) {
		for (const t of o) l |= (t ^ H) * (BigInt(1) << BigInt(64 * c++));
		l *= BigInt(-1), l -= BigInt(1);
	} else for (const u of o) l |= u * (BigInt(1) << BigInt(64 * c++));
	if ("number" == typeof e && e > 0) {
		const t = BigInt("1".padEnd(e + 1, "0")), i = a ? -l % t : l % t, n = V(l / t);
		return +`${a && 0 === n ? "-" : ""}${n}.${`${i}`.padStart(e, "0")}`;
	}
	return V(l);
}
function G(t) {
	if (8 === t.byteLength) return `${new t.BigIntArray(t.buffer, t.byteOffset, 1)[0]}`;
	if (!t.signed) return q(t);
	let e = new Uint16Array(t.buffer, t.byteOffset, t.byteLength / 2);
	if (new Int16Array([e.at(-1)])[0] >= 0) return q(t);
	e = e.slice();
	let i = 1;
	for (let n = 0; n < e.length; n++) {
		const t = e[n], r = ~t + i;
		e[n] = r, i &= 0 === t ? 1 : 0;
	}
	return `-${q(e)}`;
}
function q(t) {
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
var J, X, K, Z, Q, tt, et, it = class t {
	static new(t, e) {
		switch (e) {
			case !0: return new R(t);
			case !1: return new P(t);
		}
		switch (t.constructor) {
			case Int8Array:
			case Int16Array:
			case Int32Array:
			case BigInt64Array: return new R(t);
		}
		return 16 === t.byteLength ? new Y(t) : new P(t);
	}
	static signed(t) {
		return new R(t);
	}
	static unsigned(t) {
		return new P(t);
	}
	static decimal(t) {
		return new Y(t);
	}
	constructor(e, i) {
		return t.new(e, i);
	}
};
const nt = Symbol.for("apache-arrow/DataType");
var rt, st = class t {
	static isDataType(t) {
		return !0 === (null == t ? void 0 : t[nt]);
	}
	static isNull(t) {
		return (null == t ? void 0 : t.typeId) === C.Null;
	}
	static isInt(t) {
		return (null == t ? void 0 : t.typeId) === C.Int;
	}
	static isFloat(t) {
		return (null == t ? void 0 : t.typeId) === C.Float;
	}
	static isBinary(t) {
		return (null == t ? void 0 : t.typeId) === C.Binary;
	}
	static isBinaryView(t) {
		return (null == t ? void 0 : t.typeId) === C.BinaryView;
	}
	static isLargeBinary(t) {
		return (null == t ? void 0 : t.typeId) === C.LargeBinary;
	}
	static isUtf8(t) {
		return (null == t ? void 0 : t.typeId) === C.Utf8;
	}
	static isUtf8View(t) {
		return (null == t ? void 0 : t.typeId) === C.Utf8View;
	}
	static isLargeUtf8(t) {
		return (null == t ? void 0 : t.typeId) === C.LargeUtf8;
	}
	static isBool(t) {
		return (null == t ? void 0 : t.typeId) === C.Bool;
	}
	static isDecimal(t) {
		return (null == t ? void 0 : t.typeId) === C.Decimal;
	}
	static isDate(t) {
		return (null == t ? void 0 : t.typeId) === C.Date;
	}
	static isTime(t) {
		return (null == t ? void 0 : t.typeId) === C.Time;
	}
	static isTimestamp(t) {
		return (null == t ? void 0 : t.typeId) === C.Timestamp;
	}
	static isInterval(t) {
		return (null == t ? void 0 : t.typeId) === C.Interval;
	}
	static isDuration(t) {
		return (null == t ? void 0 : t.typeId) === C.Duration;
	}
	static isList(t) {
		return (null == t ? void 0 : t.typeId) === C.List;
	}
	static isLargeList(t) {
		return (null == t ? void 0 : t.typeId) === C.LargeList;
	}
	static isStruct(t) {
		return (null == t ? void 0 : t.typeId) === C.Struct;
	}
	static isUnion(t) {
		return (null == t ? void 0 : t.typeId) === C.Union;
	}
	static isFixedSizeBinary(t) {
		return (null == t ? void 0 : t.typeId) === C.FixedSizeBinary;
	}
	static isFixedSizeList(t) {
		return (null == t ? void 0 : t.typeId) === C.FixedSizeList;
	}
	static isMap(t) {
		return (null == t ? void 0 : t.typeId) === C.Map;
	}
	static isDictionary(t) {
		return (null == t ? void 0 : t.typeId) === C.Dictionary;
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
J = Symbol.toStringTag, st[J] = ((rt = st.prototype).children = null, rt.ArrayType = Array, rt.OffsetArrayType = Int32Array, rt[nt] = !0, rt[Symbol.toStringTag] = "DataType");
var ot = class extends st {
	constructor() {
		super(C.Null);
	}
	toString() {
		return "Null";
	}
};
X = Symbol.toStringTag, ot[X] = ot.prototype[Symbol.toStringTag] = "Null";
var at = class extends st {
	constructor(t, e) {
		super(C.Int), this.isSigned = t, this.bitWidth = e;
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
K = Symbol.toStringTag, at[K] = ((t) => (t.isSigned = null, t.bitWidth = null, t[Symbol.toStringTag] = "Int"))(at.prototype);
var lt = class extends at {
	constructor() {
		super(!0, 8);
	}
	get ArrayType() {
		return Int8Array;
	}
}, ct = class extends at {
	constructor() {
		super(!0, 16);
	}
	get ArrayType() {
		return Int16Array;
	}
}, ut = class extends at {
	constructor() {
		super(!0, 32);
	}
	get ArrayType() {
		return Int32Array;
	}
}, pt = class extends at {
	constructor() {
		super(!0, 64);
	}
	get ArrayType() {
		return BigInt64Array;
	}
}, yt = class extends at {
	constructor() {
		super(!1, 8);
	}
	get ArrayType() {
		return Uint8Array;
	}
}, dt = class extends at {
	constructor() {
		super(!1, 16);
	}
	get ArrayType() {
		return Uint16Array;
	}
}, ht = class extends at {
	constructor() {
		super(!1, 32);
	}
	get ArrayType() {
		return Uint32Array;
	}
}, ft = class extends at {
	constructor() {
		super(!1, 64);
	}
	get ArrayType() {
		return BigUint64Array;
	}
};
Object.defineProperty(lt.prototype, "ArrayType", { value: Int8Array }), Object.defineProperty(ct.prototype, "ArrayType", { value: Int16Array }), Object.defineProperty(ut.prototype, "ArrayType", { value: Int32Array }), Object.defineProperty(pt.prototype, "ArrayType", { value: BigInt64Array }), Object.defineProperty(yt.prototype, "ArrayType", { value: Uint8Array }), Object.defineProperty(dt.prototype, "ArrayType", { value: Uint16Array }), Object.defineProperty(ht.prototype, "ArrayType", { value: Uint32Array }), Object.defineProperty(ft.prototype, "ArrayType", { value: BigUint64Array });
var vt = class extends st {
	constructor(t) {
		super(C.Float), this.precision = t;
	}
	get ArrayType() {
		switch (this.precision) {
			case N.HALF: return Uint16Array;
			case N.SINGLE: return Float32Array;
			case N.DOUBLE: return Float64Array;
		}
		throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
	}
	toString() {
		return `Float${this.precision << 5 || 16}`;
	}
};
Z = Symbol.toStringTag, vt[Z] = ((t) => (t.precision = null, t[Symbol.toStringTag] = "Float"))(vt.prototype);
var mt = class extends vt {
	constructor() {
		super(N.SINGLE);
	}
}, gt = class extends vt {
	constructor() {
		super(N.DOUBLE);
	}
};
Object.defineProperty(class extends vt {
	constructor() {
		super(N.HALF);
	}
}.prototype, "ArrayType", { value: Uint16Array }), Object.defineProperty(mt.prototype, "ArrayType", { value: Float32Array }), Object.defineProperty(gt.prototype, "ArrayType", { value: Float64Array });
var bt = class extends st {
	constructor() {
		super(C.Binary);
	}
	toString() {
		return "Binary";
	}
};
bt[Symbol.toStringTag] = ((t) => (t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "Binary"))(bt.prototype);
var St = class extends st {
	constructor() {
		super(C.BinaryView);
	}
	toString() {
		return "BinaryView";
	}
};
Q = Symbol.toStringTag, St.ELEMENT_WIDTH = 16, St.INLINE_CAPACITY = 12, St.LENGTH_OFFSET = 0, St.INLINE_OFFSET = 4, St.BUFFER_INDEX_OFFSET = 8, St.BUFFER_OFFSET_OFFSET = 12, St[Q] = ((t) => (t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "BinaryView"))(St.prototype);
var wt = class extends st {
	constructor() {
		super(C.LargeBinary);
	}
	toString() {
		return "LargeBinary";
	}
};
wt[Symbol.toStringTag] = ((t) => (t.ArrayType = Uint8Array, t.OffsetArrayType = BigInt64Array, t[Symbol.toStringTag] = "LargeBinary"))(wt.prototype);
var It = class extends st {
	constructor() {
		super(C.Utf8);
	}
	toString() {
		return "Utf8";
	}
};
It[Symbol.toStringTag] = ((t) => (t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "Utf8"))(It.prototype);
var Tt = class extends st {
	constructor() {
		super(C.Utf8View);
	}
	toString() {
		return "Utf8View";
	}
};
tt = Symbol.toStringTag, Tt.ELEMENT_WIDTH = St.ELEMENT_WIDTH, Tt.INLINE_CAPACITY = St.INLINE_CAPACITY, Tt[tt] = ((t) => (t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "Utf8View"))(Tt.prototype);
var At = class extends st {
	constructor() {
		super(C.LargeUtf8);
	}
	toString() {
		return "LargeUtf8";
	}
};
At[Symbol.toStringTag] = ((t) => (t.ArrayType = Uint8Array, t.OffsetArrayType = BigInt64Array, t[Symbol.toStringTag] = "LargeUtf8"))(At.prototype);
var Dt = class extends st {
	constructor() {
		super(C.Bool);
	}
	toString() {
		return "Bool";
	}
};
Dt[Symbol.toStringTag] = ((t) => (t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "Bool"))(Dt.prototype);
var Bt = class extends st {
	constructor(t, e, i = 128) {
		super(C.Decimal), this.scale = t, this.precision = e, this.bitWidth = i;
	}
	toString() {
		return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`;
	}
};
Bt[Symbol.toStringTag] = ((t) => (t.scale = null, t.precision = null, t.ArrayType = Uint32Array, t[Symbol.toStringTag] = "Decimal"))(Bt.prototype);
var Ot = class extends st {
	constructor(t) {
		super(C.Date), this.unit = t;
	}
	toString() {
		return `Date${32 * (this.unit + 1)}<${L[this.unit]}>`;
	}
	get ArrayType() {
		return this.unit === L.DAY ? Int32Array : BigInt64Array;
	}
};
Ot[Symbol.toStringTag] = ((t) => (t.unit = null, t[Symbol.toStringTag] = "Date"))(Ot.prototype);
var Mt = class extends st {
	constructor(t, e) {
		super(C.Time), this.unit = t, this.bitWidth = e;
	}
	toString() {
		return `Time${this.bitWidth}<${F[this.unit]}>`;
	}
	get ArrayType() {
		switch (this.bitWidth) {
			case 32: return Int32Array;
			case 64: return BigInt64Array;
		}
		throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
	}
};
Mt[Symbol.toStringTag] = ((t) => (t.unit = null, t.bitWidth = null, t[Symbol.toStringTag] = "Time"))(Mt.prototype);
var Et = class extends st {
	constructor(t, e) {
		super(C.Timestamp), this.unit = t, this.timezone = e;
	}
	toString() {
		return `Timestamp<${F[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
	}
};
Et[Symbol.toStringTag] = ((t) => (t.unit = null, t.timezone = null, t.ArrayType = BigInt64Array, t[Symbol.toStringTag] = "Timestamp"))(Et.prototype);
var Ut = class extends st {
	constructor(t) {
		super(C.Interval), this.unit = t;
	}
	toString() {
		return `Interval<${x[this.unit]}>`;
	}
};
Ut[Symbol.toStringTag] = ((t) => (t.unit = null, t.ArrayType = Int32Array, t[Symbol.toStringTag] = "Interval"))(Ut.prototype);
var Nt = class extends st {
	constructor(t) {
		super(C.Duration), this.unit = t;
	}
	toString() {
		return `Duration<${F[this.unit]}>`;
	}
};
Nt[Symbol.toStringTag] = ((t) => (t.unit = null, t.ArrayType = BigInt64Array, t[Symbol.toStringTag] = "Duration"))(Nt.prototype);
var Lt = class extends st {
	constructor(t) {
		super(C.List), this.children = [t];
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
Lt[Symbol.toStringTag] = ((t) => (t.children = null, t[Symbol.toStringTag] = "List"))(Lt.prototype);
var Ft = class extends st {
	constructor(t) {
		super(C.LargeList), this.children = [t];
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
Ft[Symbol.toStringTag] = ((t) => (t.children = null, t.OffsetArrayType = BigInt64Array, t[Symbol.toStringTag] = "LargeList"))(Ft.prototype);
var xt = class extends st {
	constructor(t) {
		super(C.Struct), this.children = t;
	}
	toString() {
		return `Struct<{${this.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
	}
};
et = Symbol.toStringTag, xt[et] = ((t) => (t.children = null, t[Symbol.toStringTag] = "Struct"))(xt.prototype);
var Ct = class extends st {
	constructor(t, e, i) {
		super(C.Union), this.mode = t, this.children = i, this.typeIds = e = Int32Array.from(e), this.typeIdToChildIndex = e.reduce((t, e, i) => (t[e] = i) && t || t, Object.create(null));
	}
	toString() {
		return `${this[Symbol.toStringTag]}<${this.children.map((t) => `${t.type}`).join(" | ")}>`;
	}
};
Ct[Symbol.toStringTag] = ((t) => (t.mode = null, t.typeIds = null, t.children = null, t.typeIdToChildIndex = null, t.ArrayType = Int8Array, t[Symbol.toStringTag] = "Union"))(Ct.prototype);
var _t = class extends st {
	constructor(t) {
		super(C.FixedSizeBinary), this.byteWidth = t;
	}
	toString() {
		return `FixedSizeBinary[${this.byteWidth}]`;
	}
};
_t[Symbol.toStringTag] = ((t) => (t.byteWidth = null, t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "FixedSizeBinary"))(_t.prototype);
var kt = class extends st {
	constructor(t, e) {
		super(C.FixedSizeList), this.listSize = t, this.children = [e];
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
kt[Symbol.toStringTag] = ((t) => (t.children = null, t.listSize = null, t[Symbol.toStringTag] = "FixedSizeList"))(kt.prototype);
var Vt = class extends st {
	constructor(t, e = !1) {
		var i, n, r;
		if (super(C.Map), this.children = [t], this.keysSorted = e, t && (t.name = "entries", null === (i = null == t ? void 0 : t.type) || void 0 === i ? void 0 : i.children)) {
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
Vt[Symbol.toStringTag] = ((t) => (t.children = null, t.keysSorted = null, t[Symbol.toStringTag] = "Map_"))(Vt.prototype);
const jt = ($t = -1, () => ++$t);
var $t, zt = class extends st {
	constructor(t, e, i, n) {
		super(C.Dictionary), this.indices = e, this.dictionary = t, this.isOrdered = n || !1, this.id = null == i ? jt() : V(i);
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
function Rt(t) {
	const e = t;
	switch (t.typeId) {
		case C.Decimal: return t.bitWidth / 32;
		case C.Interval: return e.unit === x.MONTH_DAY_NANO ? 4 : 1 + e.unit;
		case C.BinaryView:
		case C.Utf8View: return 16;
		case C.FixedSizeList: return e.listSize;
		case C.FixedSizeBinary: return e.byteWidth;
		default: return 1;
	}
}
zt[Symbol.toStringTag] = ((t) => (t.id = null, t.indices = null, t.isOrdered = null, t.dictionary = null, t[Symbol.toStringTag] = "Dictionary"))(zt.prototype);
var Pt = class {
	visitMany(t, ...e) {
		return t.map((t, i) => this.visit(t, ...e.map((t) => t[i])));
	}
	visit(...t) {
		return this.getVisitFn(t[0], !1).apply(this, t);
	}
	getVisitFn(t, e = !0) {
		return function(t, e, i = !0) {
			return "number" == typeof e ? Yt(t, e, i) : "string" == typeof e && e in C ? Yt(t, C[e], i) : e && e instanceof st ? Yt(t, Ht(e), i) : (null == e ? void 0 : e.type) && e.type instanceof st ? Yt(t, Ht(e.type), i) : Yt(t, C.NONE, i);
		}(this, t, e);
	}
	getVisitFnByTypeId(t, e = !0) {
		return Yt(this, t, e);
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
function Yt(t, e, i = !0) {
	let n = null;
	switch (e) {
		case C.Null:
			n = t.visitNull;
			break;
		case C.Bool:
			n = t.visitBool;
			break;
		case C.Int:
			n = t.visitInt;
			break;
		case C.Int8:
			n = t.visitInt8 || t.visitInt;
			break;
		case C.Int16:
			n = t.visitInt16 || t.visitInt;
			break;
		case C.Int32:
			n = t.visitInt32 || t.visitInt;
			break;
		case C.Int64:
			n = t.visitInt64 || t.visitInt;
			break;
		case C.Uint8:
			n = t.visitUint8 || t.visitInt;
			break;
		case C.Uint16:
			n = t.visitUint16 || t.visitInt;
			break;
		case C.Uint32:
			n = t.visitUint32 || t.visitInt;
			break;
		case C.Uint64:
			n = t.visitUint64 || t.visitInt;
			break;
		case C.Float:
			n = t.visitFloat;
			break;
		case C.Float16:
			n = t.visitFloat16 || t.visitFloat;
			break;
		case C.Float32:
			n = t.visitFloat32 || t.visitFloat;
			break;
		case C.Float64:
			n = t.visitFloat64 || t.visitFloat;
			break;
		case C.Utf8:
			n = t.visitUtf8;
			break;
		case C.LargeUtf8:
			n = t.visitLargeUtf8;
			break;
		case C.Utf8View:
			n = t.visitUtf8View || t.visitUtf8;
			break;
		case C.Binary:
			n = t.visitBinary;
			break;
		case C.LargeBinary:
			n = t.visitLargeBinary;
			break;
		case C.BinaryView:
			n = t.visitBinaryView || t.visitBinary;
			break;
		case C.FixedSizeBinary:
			n = t.visitFixedSizeBinary;
			break;
		case C.Date:
			n = t.visitDate;
			break;
		case C.DateDay:
			n = t.visitDateDay || t.visitDate;
			break;
		case C.DateMillisecond:
			n = t.visitDateMillisecond || t.visitDate;
			break;
		case C.Timestamp:
			n = t.visitTimestamp;
			break;
		case C.TimestampSecond:
			n = t.visitTimestampSecond || t.visitTimestamp;
			break;
		case C.TimestampMillisecond:
			n = t.visitTimestampMillisecond || t.visitTimestamp;
			break;
		case C.TimestampMicrosecond:
			n = t.visitTimestampMicrosecond || t.visitTimestamp;
			break;
		case C.TimestampNanosecond:
			n = t.visitTimestampNanosecond || t.visitTimestamp;
			break;
		case C.Time:
			n = t.visitTime;
			break;
		case C.TimeSecond:
			n = t.visitTimeSecond || t.visitTime;
			break;
		case C.TimeMillisecond:
			n = t.visitTimeMillisecond || t.visitTime;
			break;
		case C.TimeMicrosecond:
			n = t.visitTimeMicrosecond || t.visitTime;
			break;
		case C.TimeNanosecond:
			n = t.visitTimeNanosecond || t.visitTime;
			break;
		case C.Decimal:
			n = t.visitDecimal;
			break;
		case C.List:
			n = t.visitList;
			break;
		case C.LargeList:
			n = t.visitLargeList;
			break;
		case C.Struct:
			n = t.visitStruct;
			break;
		case C.Union:
			n = t.visitUnion;
			break;
		case C.DenseUnion:
			n = t.visitDenseUnion || t.visitUnion;
			break;
		case C.SparseUnion:
			n = t.visitSparseUnion || t.visitUnion;
			break;
		case C.Dictionary:
			n = t.visitDictionary;
			break;
		case C.Interval:
			n = t.visitInterval;
			break;
		case C.IntervalDayTime:
			n = t.visitIntervalDayTime || t.visitInterval;
			break;
		case C.IntervalYearMonth:
			n = t.visitIntervalYearMonth || t.visitInterval;
			break;
		case C.IntervalMonthDayNano:
			n = t.visitIntervalMonthDayNano || t.visitInterval;
			break;
		case C.Duration:
			n = t.visitDuration;
			break;
		case C.DurationSecond:
			n = t.visitDurationSecond || t.visitDuration;
			break;
		case C.DurationMillisecond:
			n = t.visitDurationMillisecond || t.visitDuration;
			break;
		case C.DurationMicrosecond:
			n = t.visitDurationMicrosecond || t.visitDuration;
			break;
		case C.DurationNanosecond:
			n = t.visitDurationNanosecond || t.visitDuration;
			break;
		case C.FixedSizeList:
			n = t.visitFixedSizeList;
			break;
		case C.Map: n = t.visitMap;
	}
	if ("function" == typeof n) return n;
	if (!i) return () => null;
	throw new Error(`Unrecognized type '${C[e]}'`);
}
function Ht(t) {
	switch (t.typeId) {
		case C.Null: return C.Null;
		case C.Int: {
			const { bitWidth: e, isSigned: i } = t;
			switch (e) {
				case 8: return i ? C.Int8 : C.Uint8;
				case 16: return i ? C.Int16 : C.Uint16;
				case 32: return i ? C.Int32 : C.Uint32;
				case 64: return i ? C.Int64 : C.Uint64;
			}
			return C.Int;
		}
		case C.Float:
			switch (t.precision) {
				case N.HALF: return C.Float16;
				case N.SINGLE: return C.Float32;
				case N.DOUBLE: return C.Float64;
			}
			return C.Float;
		case C.Binary: return C.Binary;
		case C.LargeBinary: return C.LargeBinary;
		case C.BinaryView: return C.BinaryView;
		case C.Utf8: return C.Utf8;
		case C.LargeUtf8: return C.LargeUtf8;
		case C.Utf8View: return C.Utf8View;
		case C.Bool: return C.Bool;
		case C.Decimal: return C.Decimal;
		case C.Time:
			switch (t.unit) {
				case F.SECOND: return C.TimeSecond;
				case F.MILLISECOND: return C.TimeMillisecond;
				case F.MICROSECOND: return C.TimeMicrosecond;
				case F.NANOSECOND: return C.TimeNanosecond;
			}
			return C.Time;
		case C.Timestamp:
			switch (t.unit) {
				case F.SECOND: return C.TimestampSecond;
				case F.MILLISECOND: return C.TimestampMillisecond;
				case F.MICROSECOND: return C.TimestampMicrosecond;
				case F.NANOSECOND: return C.TimestampNanosecond;
			}
			return C.Timestamp;
		case C.Date:
			switch (t.unit) {
				case L.DAY: return C.DateDay;
				case L.MILLISECOND: return C.DateMillisecond;
			}
			return C.Date;
		case C.Interval:
			switch (t.unit) {
				case x.DAY_TIME: return C.IntervalDayTime;
				case x.YEAR_MONTH: return C.IntervalYearMonth;
				case x.MONTH_DAY_NANO: return C.IntervalMonthDayNano;
			}
			return C.Interval;
		case C.Duration:
			switch (t.unit) {
				case F.SECOND: return C.DurationSecond;
				case F.MILLISECOND: return C.DurationMillisecond;
				case F.MICROSECOND: return C.DurationMicrosecond;
				case F.NANOSECOND: return C.DurationNanosecond;
			}
			return C.Duration;
		case C.Map: return C.Map;
		case C.List: return C.List;
		case C.LargeList: return C.LargeList;
		case C.Struct: return C.Struct;
		case C.Union:
			switch (t.mode) {
				case U.Dense: return C.DenseUnion;
				case U.Sparse: return C.SparseUnion;
			}
			return C.Union;
		case C.FixedSizeBinary: return C.FixedSizeBinary;
		case C.FixedSizeList: return C.FixedSizeList;
		case C.Dictionary: return C.Dictionary;
	}
	throw new Error(`Unrecognized type '${C[t.typeId]}'`);
}
Pt.prototype.visitInt8 = null, Pt.prototype.visitInt16 = null, Pt.prototype.visitInt32 = null, Pt.prototype.visitInt64 = null, Pt.prototype.visitUint8 = null, Pt.prototype.visitUint16 = null, Pt.prototype.visitUint32 = null, Pt.prototype.visitUint64 = null, Pt.prototype.visitFloat16 = null, Pt.prototype.visitFloat32 = null, Pt.prototype.visitFloat64 = null, Pt.prototype.visitDateDay = null, Pt.prototype.visitDateMillisecond = null, Pt.prototype.visitTimestampSecond = null, Pt.prototype.visitTimestampMillisecond = null, Pt.prototype.visitTimestampMicrosecond = null, Pt.prototype.visitTimestampNanosecond = null, Pt.prototype.visitTimeSecond = null, Pt.prototype.visitTimeMillisecond = null, Pt.prototype.visitTimeMicrosecond = null, Pt.prototype.visitTimeNanosecond = null, Pt.prototype.visitDenseUnion = null, Pt.prototype.visitSparseUnion = null, Pt.prototype.visitIntervalDayTime = null, Pt.prototype.visitIntervalYearMonth = null, Pt.prototype.visitIntervalMonthDayNano = null, Pt.prototype.visitDuration = null, Pt.prototype.visitDurationSecond = null, Pt.prototype.visitDurationMillisecond = null, Pt.prototype.visitDurationMicrosecond = null, Pt.prototype.visitDurationNanosecond = null;
const Wt = /* @__PURE__ */ new Float64Array(1), Gt = new Uint32Array(Wt.buffer);
function qt(t) {
	const e = (31744 & t) >> 10, i = (1023 & t) / 1024, n = Math.pow(-1, (32768 & t) >> 15);
	switch (e) {
		case 31: return n * (i ? NaN : 1 / 0);
		case 0: return n * (i ? 6103515625e-14 * i : 0);
	}
	return n * Math.pow(2, e - 15) * (1 + i);
}
var Jt = class extends Pt {};
function Xt(t) {
	return (e, i, n) => {
		if (e.setValid(i, null != n)) return t(e, i, n);
	};
}
const Kt = (t, e, i, n) => {
	if (i + 1 < e.length) {
		const r = V(e[i]), s = V(e[i + 1]);
		t.set(n.subarray(0, s - r), r);
	}
}, Zt = ({ values: t }, e, i) => {
	t[e] = i;
}, Qt = ({ values: t }, e, i) => {
	t[e] = i;
}, te = ({ values: t }, e, i) => {
	t[e] = function(t) {
		if (t != t) return 32256;
		Wt[0] = t;
		const e = (2147483648 & Gt[1]) >> 16 & 65535;
		let i = 2146435072 & Gt[1], n = 0;
		return i >= 1089470464 ? Gt[0] > 0 ? i = 31744 : (i = (2080374784 & i) >> 16, n = (1048575 & Gt[1]) >> 10) : i <= 1056964608 ? (n = 1048576 + (1048575 & Gt[1]), n = 1048576 + (n << (i >> 20) - 998) >> 21, i = 0) : (i = i - 1056964608 >> 10, n = 512 + (1048575 & Gt[1]) >> 10), e | i | 65535 & n;
	}(i);
}, ee = ({ values: t }, e, i) => {
	((t, e, i) => {
		t[e] = Math.floor(i / 864e5);
	})(t, e, i.valueOf());
}, ie = ({ values: t }, e, i) => {
	t[e] = BigInt(i);
}, ne = ({ values: t, valueOffsets: e }, i, n) => Kt(t, e, i, n), re = (t, e, i) => {
	var n, r, s, o;
	const a = t.values;
	if (!a) throw new Error("BinaryView data is missing view buffer");
	const l = St.ELEMENT_WIDTH, c = e * l, u = c + l;
	if (c < 0 || u > a.length) throw new RangeError(`BinaryView index ${e} out of bounds`);
	a.fill(0, c, u);
	const p = new DataView(a.buffer, a.byteOffset + c, l), y = i.length;
	if (p.setInt32(St.LENGTH_OFFSET, y, !0), y <= St.INLINE_CAPACITY) return void a.set(i, c + St.INLINE_OFFSET);
	const d = (null !== (n = i[0]) && void 0 !== n ? n : 0) | (null !== (r = i[1]) && void 0 !== r ? r : 0) << 8 | (null !== (s = i[2]) && void 0 !== s ? s : 0) << 16 | (null !== (o = i[3]) && void 0 !== o ? o : 0) << 24;
	p.setUint32(St.INLINE_OFFSET, d >>> 0, !0);
	const h = ((t) => {
		let e = t.variadicBuffers;
		return Array.isArray(e) && !Object.isFrozen(e) || (e = Array.from(e), t.variadicBuffers = e), e;
	})(t), f = i.slice(), v = h.push(f) - 1;
	p.setInt32(St.BUFFER_INDEX_OFFSET, v, !0), p.setInt32(St.BUFFER_OFFSET_OFFSET, 0, !0);
}, se = ({ values: t, valueOffsets: e }, i, n) => Kt(t, e, i, w(n)), oe = ({ values: t }, e, i) => {
	t[e] = BigInt(i / 1e3);
}, ae = ({ values: t }, e, i) => {
	t[e] = BigInt(i);
}, le = ({ values: t }, e, i) => {
	t[e] = BigInt(1e3 * i);
}, ce = ({ values: t }, e, i) => {
	t[e] = BigInt(1e6 * i);
}, ue = ({ values: t }, e, i) => {
	t[e] = i;
}, pe = ({ values: t }, e, i) => {
	t[e] = i;
}, ye = ({ values: t }, e, i) => {
	t[e] = i;
}, de = ({ values: t }, e, i) => {
	t[e] = i;
}, he = (t, e, i) => {
	const n = t.children[0], r = t.valueOffsets, s = Ae.getVisitFn(n), o = V(r[e]), a = V(r[e + 1]);
	if (Array.isArray(i)) for (let l = -1, c = o; c < a;) s(n, c++, i[++l]);
	else for (let l = -1, c = o; c < a;) s(n, c++, i.get(++l));
}, fe = (t, e, i) => {
	const n = t.type.typeIdToChildIndex[t.typeIds[e]], r = t.children[n];
	Ae.visit(r, t.valueOffsets[e], i);
}, ve = (t, e, i) => {
	const n = t.type.typeIdToChildIndex[t.typeIds[e]], r = t.children[n];
	Ae.visit(r, e, i);
}, me = ({ values: t }, e, i) => {
	t.set(i.subarray(0, 2), 2 * e);
}, ge = ({ values: t }, e, i) => {
	t[e] = 12 * i[0] + i[1] % 12;
}, be = ({ values: t, stride: e }, i, n) => {
	t.set(n.subarray(0, e), e * i);
}, Se = ({ values: t }, e, i) => {
	t[e] = i;
}, we = ({ values: t }, e, i) => {
	t[e] = i;
}, Ie = ({ values: t }, e, i) => {
	t[e] = i;
}, Te = ({ values: t }, e, i) => {
	t[e] = i;
};
Jt.prototype.visitBool = Xt(({ offset: t, values: e }, i, n) => {
	const r = t + i;
	n ? e[r >> 3] |= 1 << r % 8 : e[r >> 3] &= ~(1 << r % 8);
}), Jt.prototype.visitInt = Xt(Zt), Jt.prototype.visitInt8 = Xt(Zt), Jt.prototype.visitInt16 = Xt(Zt), Jt.prototype.visitInt32 = Xt(Zt), Jt.prototype.visitInt64 = Xt(Zt), Jt.prototype.visitUint8 = Xt(Zt), Jt.prototype.visitUint16 = Xt(Zt), Jt.prototype.visitUint32 = Xt(Zt), Jt.prototype.visitUint64 = Xt(Zt), Jt.prototype.visitFloat = Xt((t, e, i) => {
	switch (t.type.precision) {
		case N.HALF: return te(t, e, i);
		case N.SINGLE:
		case N.DOUBLE: return Qt(t, e, i);
	}
}), Jt.prototype.visitFloat16 = Xt(te), Jt.prototype.visitFloat32 = Xt(Qt), Jt.prototype.visitFloat64 = Xt(Qt), Jt.prototype.visitUtf8 = Xt(se), Jt.prototype.visitLargeUtf8 = Xt(se), Jt.prototype.visitUtf8View = Xt((t, e, i) => {
	const n = w(i);
	re(t, e, n);
}), Jt.prototype.visitBinary = Xt(ne), Jt.prototype.visitLargeBinary = Xt(ne), Jt.prototype.visitBinaryView = Xt((t, e, i) => {
	const n = i instanceof Uint8Array ? i : new Uint8Array(i);
	re(t, e, n);
}), Jt.prototype.visitFixedSizeBinary = Xt(({ stride: t, values: e }, i, n) => {
	e.set(n.subarray(0, t), t * i);
}), Jt.prototype.visitDate = Xt((t, e, i) => {
	t.type.unit === L.DAY ? ee(t, e, i) : ie(t, e, i);
}), Jt.prototype.visitDateDay = Xt(ee), Jt.prototype.visitDateMillisecond = Xt(ie), Jt.prototype.visitTimestamp = Xt((t, e, i) => {
	switch (t.type.unit) {
		case F.SECOND: return oe(t, e, i);
		case F.MILLISECOND: return ae(t, e, i);
		case F.MICROSECOND: return le(t, e, i);
		case F.NANOSECOND: return ce(t, e, i);
	}
}), Jt.prototype.visitTimestampSecond = Xt(oe), Jt.prototype.visitTimestampMillisecond = Xt(ae), Jt.prototype.visitTimestampMicrosecond = Xt(le), Jt.prototype.visitTimestampNanosecond = Xt(ce), Jt.prototype.visitTime = Xt((t, e, i) => {
	switch (t.type.unit) {
		case F.SECOND: return ue(t, e, i);
		case F.MILLISECOND: return pe(t, e, i);
		case F.MICROSECOND: return ye(t, e, i);
		case F.NANOSECOND: return de(t, e, i);
	}
}), Jt.prototype.visitTimeSecond = Xt(ue), Jt.prototype.visitTimeMillisecond = Xt(pe), Jt.prototype.visitTimeMicrosecond = Xt(ye), Jt.prototype.visitTimeNanosecond = Xt(de), Jt.prototype.visitDecimal = Xt(({ values: t, stride: e }, i, n) => {
	t.set(n.subarray(0, e), e * i);
}), Jt.prototype.visitList = Xt(he), Jt.prototype.visitLargeList = Xt(he), Jt.prototype.visitStruct = Xt((t, e, i) => {
	const n = t.type.children.map((t) => Ae.getVisitFn(t.type)), r = i instanceof Map ? (s = e, o = i, (t, e, i, n) => e && t(e, s, o.get(i.name))) : i instanceof Xi ? ((t, e) => (i, n, r, s) => n && i(n, t, e.get(s)))(e, i) : Array.isArray(i) ? ((t, e) => (i, n, r, s) => n && i(n, t, e[s]))(e, i) : ((t, e) => (i, n, r, s) => n && i(n, t, e[r.name]))(e, i);
	var s, o;
	t.type.children.forEach((e, i) => r(n[i], t.children[i], e, i));
}), Jt.prototype.visitUnion = Xt((t, e, i) => {
	t.type.mode === U.Dense ? fe(t, e, i) : ve(t, e, i);
}), Jt.prototype.visitDenseUnion = Xt(fe), Jt.prototype.visitSparseUnion = Xt(ve), Jt.prototype.visitDictionary = Xt((t, e, i) => {
	var n;
	null === (n = t.dictionary) || void 0 === n || n.set(t.values[e], i);
}), Jt.prototype.visitInterval = Xt((t, e, i) => {
	switch (t.type.unit) {
		case x.YEAR_MONTH: return ge(t, e, i);
		case x.DAY_TIME: return me(t, e, i);
		case x.MONTH_DAY_NANO: return be(t, e, i);
	}
}), Jt.prototype.visitIntervalDayTime = Xt(me), Jt.prototype.visitIntervalYearMonth = Xt(ge), Jt.prototype.visitIntervalMonthDayNano = Xt(be), Jt.prototype.visitDuration = Xt((t, e, i) => {
	switch (t.type.unit) {
		case F.SECOND: return Se(t, e, i);
		case F.MILLISECOND: return we(t, e, i);
		case F.MICROSECOND: return Ie(t, e, i);
		case F.NANOSECOND: return Te(t, e, i);
	}
}), Jt.prototype.visitDurationSecond = Xt(Se), Jt.prototype.visitDurationMillisecond = Xt(we), Jt.prototype.visitDurationMicrosecond = Xt(Ie), Jt.prototype.visitDurationNanosecond = Xt(Te), Jt.prototype.visitFixedSizeList = Xt((t, e, i) => {
	const { stride: n } = t, r = t.children[0], s = Ae.getVisitFn(r);
	if (Array.isArray(i)) for (let o = -1, a = e * n; ++o < n;) s(r, a + o, i[o]);
	else for (let o = -1, a = e * n; ++o < n;) s(r, a + o, i.get(o));
}), Jt.prototype.visitMap = Xt((t, e, i) => {
	const n = t.children[0], { valueOffsets: r } = t, s = Ae.getVisitFn(n);
	let { [e]: o, [e + 1]: a } = r;
	const l = i instanceof Map ? i.entries() : Object.entries(i);
	for (const c of l) if (s(n, o, c), ++o >= a) break;
});
const Ae = new Jt(), De = Symbol.for("parent"), Be = Symbol.for("rowIndex");
var Oe = class {
	constructor(t, e) {
		return this[De] = t, this[Be] = e, new Proxy(this, Ee);
	}
	toArray() {
		return Object.values(this.toJSON());
	}
	toJSON() {
		const t = this[Be], e = this[De], i = e.type.children, n = {};
		for (let r = -1, s = i.length; ++r < s;) n[i[r].name] = ri.visit(e.children[r], t);
		return n;
	}
	toString() {
		return `{${[...this].map(([t, e]) => `${k(t)}: ${k(e)}`).join(", ")}}`;
	}
	[Symbol.for("nodejs.util.inspect.custom")]() {
		return this.toString();
	}
	[Symbol.iterator]() {
		return new Me(this[De], this[Be]);
	}
}, Me = class {
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
			value: [this.childFields[t].name, ri.visit(this.children[t], this.rowIndex)]
		}) : {
			done: !0,
			value: null
		};
	}
};
Object.defineProperties(Oe.prototype, {
	[Symbol.toStringTag]: {
		enumerable: !1,
		configurable: !1,
		value: "Row"
	},
	[De]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	},
	[Be]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: -1
	}
});
const Ee = new class {
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
		return t[De].type.children.map((t) => t.name);
	}
	has(t, e) {
		return t[De].type.children.some((t) => t.name === e);
	}
	getOwnPropertyDescriptor(t, e) {
		if (t[De].type.children.some((t) => t.name === e)) return {
			writable: !0,
			enumerable: !0,
			configurable: !0
		};
	}
	get(t, e) {
		if (Reflect.has(t, e)) return t[e];
		const i = t[De].type.children.findIndex((t) => t.name === e);
		if (-1 !== i) {
			const n = ri.visit(t[De].children[i], t[Be]);
			return Reflect.set(t, e, n), n;
		}
	}
	set(t, e, i) {
		const n = t[De].type.children.findIndex((t) => t.name === e);
		return -1 !== n ? (Ae.visit(t[De].children[n], t[Be], i), Reflect.set(t, e, i)) : !(!Reflect.has(t, e) && "symbol" != typeof e) && Reflect.set(t, e, i);
	}
}();
var Ue = class extends Pt {};
function Ne(t) {
	return (e, i) => e.getValid(i) ? t(e, i) : null;
}
const Le = (t, e, i) => {
	if (i + 1 >= e.length) return null;
	const n = V(e[i]), r = V(e[i + 1]);
	return t.subarray(n, r);
}, Fe = ({ values: t }, e) => ((t, e) => 864e5 * t[e])(t, e), xe = ({ values: t }, e) => V(t[e]), Ce = ({ stride: t, values: e }, i) => e[t * i], _e = ({ values: t }, e) => t[e], ke = ({ values: t, valueOffsets: e }, i) => Le(t, e, i), Ve = (t, e) => {
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
}, je = ({ values: t, valueOffsets: e }, i) => {
	const n = Le(t, e, i);
	return null !== n ? b(n) : null;
}, $e = ({ values: t }, e) => 1e3 * V(t[e]), ze = ({ values: t }, e) => V(t[e]), Re = ({ values: t }, e) => j(t[e], BigInt(1e3)), Pe = ({ values: t }, e) => j(t[e], BigInt(1e6)), Ye = ({ values: t }, e) => t[e], He = ({ values: t }, e) => t[e], We = ({ values: t }, e) => t[e], Ge = ({ values: t }, e) => t[e], qe = (t, e) => {
	const { valueOffsets: i, stride: n, children: r } = t, s = V(i[e * n]), o = V(i[e * n + 1]);
	return new Xi([r[0].slice(s, o - s)]);
}, Je = (t, e) => {
	const i = t.type.typeIdToChildIndex[t.typeIds[e]], n = t.children[i];
	return ri.visit(n, t.valueOffsets[e]);
}, Xe = (t, e) => {
	const i = t.type.typeIdToChildIndex[t.typeIds[e]], n = t.children[i];
	return ri.visit(n, e);
}, Ke = ({ values: t }, e) => t.subarray(2 * e, 2 * (e + 1)), Ze = ({ values: t }, e) => {
	const i = t[e], n = /* @__PURE__ */ new Int32Array(2);
	return n[0] = Math.trunc(i / 12), n[1] = Math.trunc(i % 12), n;
}, Qe = ({ values: t }, e) => t.subarray(4 * e, 4 * (e + 1)), ti = ({ values: t }, e) => t[e], ei = ({ values: t }, e) => t[e], ii = ({ values: t }, e) => t[e], ni = ({ values: t }, e) => t[e];
Ue.prototype.visitNull = Ne((t, e) => null), Ue.prototype.visitBool = Ne(({ offset: t, values: e }, i) => {
	const n = t + i;
	return !!(e[n >> 3] & 1 << n % 8);
}), Ue.prototype.visitInt = Ne(({ values: t }, e) => t[e]), Ue.prototype.visitInt8 = Ne(Ce), Ue.prototype.visitInt16 = Ne(Ce), Ue.prototype.visitInt32 = Ne(Ce), Ue.prototype.visitInt64 = Ne(_e), Ue.prototype.visitUint8 = Ne(Ce), Ue.prototype.visitUint16 = Ne(Ce), Ue.prototype.visitUint32 = Ne(Ce), Ue.prototype.visitUint64 = Ne(_e), Ue.prototype.visitFloat = Ne(({ type: t, values: e }, i) => t.precision !== N.HALF ? e[i] : qt(e[i])), Ue.prototype.visitFloat16 = Ne(({ stride: t, values: e }, i) => qt(e[t * i])), Ue.prototype.visitFloat32 = Ne(Ce), Ue.prototype.visitFloat64 = Ne(Ce), Ue.prototype.visitUtf8 = Ne(je), Ue.prototype.visitLargeUtf8 = Ne(je), Ue.prototype.visitUtf8View = Ne((t, e) => {
	const i = Ve(t, e);
	return b(i);
}), Ue.prototype.visitBinary = Ne(ke), Ue.prototype.visitLargeBinary = Ne(ke), Ue.prototype.visitBinaryView = Ne((t, e) => Ve(t, e)), Ue.prototype.visitFixedSizeBinary = Ne(({ stride: t, values: e }, i) => e.subarray(t * i, t * (i + 1))), Ue.prototype.visitDate = Ne((t, e) => t.type.unit === L.DAY ? Fe(t, e) : xe(t, e)), Ue.prototype.visitDateDay = Ne(Fe), Ue.prototype.visitDateMillisecond = Ne(xe), Ue.prototype.visitTimestamp = Ne((t, e) => {
	switch (t.type.unit) {
		case F.SECOND: return $e(t, e);
		case F.MILLISECOND: return ze(t, e);
		case F.MICROSECOND: return Re(t, e);
		case F.NANOSECOND: return Pe(t, e);
	}
}), Ue.prototype.visitTimestampSecond = Ne($e), Ue.prototype.visitTimestampMillisecond = Ne(ze), Ue.prototype.visitTimestampMicrosecond = Ne(Re), Ue.prototype.visitTimestampNanosecond = Ne(Pe), Ue.prototype.visitTime = Ne((t, e) => {
	switch (t.type.unit) {
		case F.SECOND: return Ye(t, e);
		case F.MILLISECOND: return He(t, e);
		case F.MICROSECOND: return We(t, e);
		case F.NANOSECOND: return Ge(t, e);
	}
}), Ue.prototype.visitTimeSecond = Ne(Ye), Ue.prototype.visitTimeMillisecond = Ne(He), Ue.prototype.visitTimeMicrosecond = Ne(We), Ue.prototype.visitTimeNanosecond = Ne(Ge), Ue.prototype.visitDecimal = Ne(({ values: t, stride: e }, i) => it.decimal(t.subarray(e * i, e * (i + 1)))), Ue.prototype.visitList = Ne(qe), Ue.prototype.visitLargeList = Ne(qe), Ue.prototype.visitStruct = Ne((t, e) => new Oe(t, e)), Ue.prototype.visitUnion = Ne((t, e) => t.type.mode === U.Dense ? Je(t, e) : Xe(t, e)), Ue.prototype.visitDenseUnion = Ne(Je), Ue.prototype.visitSparseUnion = Ne(Xe), Ue.prototype.visitDictionary = Ne((t, e) => {
	var i;
	return null === (i = t.dictionary) || void 0 === i ? void 0 : i.get(t.values[e]);
}), Ue.prototype.visitInterval = Ne((t, e) => t.type.unit === x.MONTH_DAY_NANO ? Qe(t, e) : t.type.unit === x.DAY_TIME ? Ke(t, e) : Ze(t, e)), Ue.prototype.visitIntervalDayTime = Ne(Ke), Ue.prototype.visitIntervalYearMonth = Ne(Ze), Ue.prototype.visitIntervalMonthDayNano = Ne(Qe), Ue.prototype.visitDuration = Ne((t, e) => {
	switch (t.type.unit) {
		case F.SECOND: return ti(t, e);
		case F.MILLISECOND: return ei(t, e);
		case F.MICROSECOND: return ii(t, e);
		case F.NANOSECOND: return ni(t, e);
	}
}), Ue.prototype.visitDurationSecond = Ne(ti), Ue.prototype.visitDurationMillisecond = Ne(ei), Ue.prototype.visitDurationMicrosecond = Ne(ii), Ue.prototype.visitDurationNanosecond = Ne(ni), Ue.prototype.visitFixedSizeList = Ne((t, e) => {
	const { stride: i, children: n } = t;
	return new Xi([n[0].slice(e * i, i)]);
}), Ue.prototype.visitMap = Ne((t, e) => {
	const { valueOffsets: i, children: n } = t, { [e]: r, [e + 1]: s } = i, o = n[0];
	return new ci(o.slice(r, s - r));
});
const ri = new Ue(), si = Symbol.for("keys"), oi = Symbol.for("vals"), ai = Symbol.for("kKeysAsStrings"), li = Symbol.for("_kKeysAsStrings");
var ci = class {
	constructor(t) {
		return this[si] = new Xi([t.children[0]]).memoize(), this[oi] = t.children[1], new Proxy(this, new pi());
	}
	get [ai]() {
		return this[li] || (this[li] = Array.from(this[si].toArray(), String));
	}
	[Symbol.iterator]() {
		return new ui(this[si], this[oi]);
	}
	get size() {
		return this[si].length;
	}
	toArray() {
		return Object.values(this.toJSON());
	}
	toJSON() {
		const t = this[si], e = this[oi], i = {};
		for (let n = -1, r = t.length; ++n < r;) i[t.get(n)] = ri.visit(e, n);
		return i;
	}
	toString() {
		return `{${[...this].map(([t, e]) => `${k(t)}: ${k(e)}`).join(", ")}}`;
	}
	[Symbol.for("nodejs.util.inspect.custom")]() {
		return this.toString();
	}
}, ui = class {
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
			value: [this.keys.get(t), ri.visit(this.vals, t)]
		});
	}
}, pi = class {
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
		return t[ai];
	}
	has(t, e) {
		return t[ai].includes(e);
	}
	getOwnPropertyDescriptor(t, e) {
		if (-1 !== t[ai].indexOf(e)) return {
			writable: !0,
			enumerable: !0,
			configurable: !0
		};
	}
	get(t, e) {
		if (Reflect.has(t, e)) return t[e];
		const i = t[ai].indexOf(e);
		if (-1 !== i) {
			const n = ri.visit(Reflect.get(t, oi), i);
			return Reflect.set(t, e, n), n;
		}
	}
	set(t, e, i) {
		const n = t[ai].indexOf(e);
		return -1 !== n ? (Ae.visit(Reflect.get(t, oi), n, i), Reflect.set(t, e, i)) : !!Reflect.has(t, e) && Reflect.set(t, e, i);
	}
};
let yi;
function di(t, e, i, n) {
	const { length: r = 0 } = t;
	let s = "number" != typeof e ? 0 : e, o = "number" != typeof i ? r : i;
	return s < 0 && (s = (s % r + r) % r), o < 0 && (o = (o % r + r) % r), o < s && (yi = s, s = o, o = yi), o > r && (o = r), n ? n(t, s, o) : [s, o];
}
Object.defineProperties(ci.prototype, {
	[Symbol.toStringTag]: {
		enumerable: !1,
		configurable: !1,
		value: "Row"
	},
	[si]: {
		writable: !0,
		enumerable: !1,
		configurable: !1,
		value: null
	},
	[oi]: {
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
	}
});
const hi = (t, e) => t < 0 ? e + t : t, fi = (t) => t != t;
function vi(t) {
	if ("object" != typeof t || null === t) return fi(t) ? fi : (e) => e === t;
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
		for (const n of t.values()) i[++e] = vi(n);
		return mi(i);
	}(t) : Array.isArray(t) ? function(t) {
		const e = [];
		for (let i = -1, n = t.length; ++i < n;) e[i] = vi(t[i]);
		return mi(e);
	}(t) : t instanceof Xi ? function(t) {
		const e = [];
		for (let i = -1, n = t.length; ++i < n;) e[i] = vi(t.get(i));
		return mi(e);
	}(t) : function(t, e = !1) {
		const i = Object.keys(t);
		if (!e && 0 === i.length) return () => !1;
		const n = [];
		for (let r = -1, s = i.length; ++r < s;) n[r] = vi(t[i[r]]);
		return mi(n, i);
	}(t, !0);
}
function mi(t, e) {
	return (i) => {
		if (!i || "object" != typeof i) return !1;
		switch (i.constructor) {
			case Array: return function(t, e) {
				const i = t.length;
				if (e.length !== i) return !1;
				for (let n = -1; ++n < i;) if (!t[n](e[n])) return !1;
				return !0;
			}(t, i);
			case Map: return gi(t, i, i.keys());
			case ci:
			case Oe:
			case Object:
			case void 0: return gi(t, i, e || Object.keys(i));
		}
		return i instanceof Xi && function(t, e) {
			const i = t.length;
			if (e.length !== i) return !1;
			for (let n = -1; ++n < i;) if (!t[n](e.get(n))) return !1;
			return !0;
		}(t, i);
	};
}
function gi(t, e, i) {
	const n = i[Symbol.iterator](), r = e instanceof Map ? e.keys() : Object.keys(e)[Symbol.iterator](), s = e instanceof Map ? e.values() : Object.values(e)[Symbol.iterator]();
	let o = 0;
	const a = t.length;
	let l = s.next(), c = n.next(), u = r.next();
	for (; o < a && !c.done && !u.done && !l.done && c.value === u.value && t[o](l.value); ++o, c = n.next(), u = r.next(), l = s.next());
	return !!(o === a && c.done && u.done && l.done) || (n.return && n.return(), r.return && r.return(), s.return && s.return(), !1);
}
function bi(t, e, i, n) {
	return !!(i & 1 << n);
}
function Si(t, e, i, n) {
	return (i & 1 << n) >> n;
}
function wi(t, e, i) {
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
		}(new Ii(i, t, e, null, bi)).subarray(0, n)), r;
	}
	return i;
}
var Ii = class {
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
function Ti(t, e, i) {
	if (i - e <= 0) return 0;
	if (i - e < 8) {
		let n = 0;
		for (const r of new Ii(t, e, i - e, t, Si)) n += r;
		return n;
	}
	const n = i >> 3 << 3, r = e + (e % 8 == 0 ? 0 : 8 - e % 8);
	return Ti(t, e, r) + Ti(t, n, i) + function(t, e, i) {
		let n = 0, r = Math.trunc(e);
		const s = new DataView(t.buffer, t.byteOffset, t.byteLength), o = void 0 === i ? t.byteLength : r + i;
		for (; o - r >= 4;) n += Ai(s.getUint32(r)), r += 4;
		for (; o - r >= 2;) n += Ai(s.getUint16(r)), r += 2;
		for (; o - r >= 1;) n += Ai(s.getUint8(r)), r += 1;
		return n;
	}(t, r >> 3, n - r >> 3);
}
function Ai(t) {
	let e = Math.trunc(t);
	return e -= e >>> 1 & 1431655765, e = (858993459 & e) + (e >>> 2 & 858993459), 16843009 * (e + (e >>> 4) & 252645135) >>> 24;
}
const Di = Symbol.for("apache-arrow/Data");
var Bi = class t {
	static isData(t) {
		return !0 === (null == t ? void 0 : t[Di]);
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
			return st.isSparseUnion(t) || st.isDenseUnion(t) ? this.children.some((t) => t.nullable) : this.nullBitmap && this.nullBitmap.byteLength > 0;
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
		if (st.isUnion(this.type)) return this.children.reduce((t, e) => t + e.nullCount, 0);
		let t, e = this._nullCount;
		return e <= -1 && (t = this.nullBitmap) && (this._nullCount = e = 0 === t.length ? 0 : this.length - Ti(t, this.offset, this.offset + this.length)), e;
	}
	constructor(e, i, n, r, s, o = [], a, l = []) {
		var c;
		let u;
		this.type = e, this.children = o, this.dictionary = a, this.offset = Math.floor(Math.max(i || 0, 0)), this.length = Math.floor(Math.max(n || 0, 0)), this._nullCount = Math.floor(Math.max(r || 0, -1)), s instanceof t ? (this.stride = s.stride, this.values = s.values, this.typeIds = s.typeIds, this.nullBitmap = s.nullBitmap, this.valueOffsets = s.valueOffsets, this.variadicBuffers = s.variadicBuffers) : (this.stride = Rt(e), s && ((u = s[0]) && (this.valueOffsets = u), (u = s[1]) && (this.values = u), (u = s[2]) && (this.nullBitmap = u), (u = s[3]) && (this.typeIds = u)), this.variadicBuffers = l), null !== (c = this.variadicBuffers) && void 0 !== c || (this.variadicBuffers = []);
	}
	getValid(t) {
		const { type: e } = this;
		if (st.isUnion(e)) {
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
		if (st.isUnion(n)) {
			const r = n, s = this.typeIds[t], o = r.typeIdToChildIndex[s], a = this.children[o], l = this.valueOffsets, c = r.mode === U.Dense && l ? Number(l[t]) : t;
			i = a.getValid(c), a.setValid(c, e);
		} else {
			let { nullBitmap: n } = this;
			const { offset: r, length: s } = this, o = r + t, a = 1 << o % 8, l = o >> 3;
			(!n || n.byteLength <= l) && (n = new Uint8Array((r + s + 63 & -64) >> 3).fill(255), this.nullCount > 0 ? (n.set(wi(r, s, this.nullBitmap), 0), Object.assign(this, { nullBitmap: n })) : Object.assign(this, {
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
		if (this.typeId === C.Null) return this.clone(this.type, 0, t, 0, this.buffers, this.children, this.variadicBuffers);
		const { length: e, nullCount: i } = this, n = new Uint8Array((t + 63 & -64) >> 3).fill(255, 0, e >> 3);
		n[e >> 3] = (1 << e - (-8 & e)) - 1, i > 0 && n.set(wi(this.offset, e, this.nullBitmap), 0);
		const r = this.buffers;
		return r[_.VALIDITY] = n, this.clone(this.type, 0, t, i + (t - e), r, this.children, this.variadicBuffers);
	}
	_sliceBuffers(t, e, i, n) {
		let r;
		const { buffers: s } = this;
		if ((r = s[_.TYPE]) && (s[_.TYPE] = r.subarray(t, t + e)), st.isBinaryView(this.type) || st.isUtf8View(this.type)) {
			const i = St.ELEMENT_WIDTH;
			(r = s[_.DATA]) && (s[_.DATA] = r.subarray(t * i, (t + e) * i));
		} else (r = s[_.OFFSET]) && (s[_.OFFSET] = r.subarray(t, t + e + 1)) || (r = s[_.DATA]) && (s[_.DATA] = 6 === n ? r : r.subarray(i * t, i * (t + e)));
		return s;
	}
	_sliceChildren(t, e, i) {
		return t.map((t) => t.slice(e, i));
	}
};
Bi.prototype.children = Object.freeze([]), Bi.prototype[Di] = !0, Object.defineProperty(Bi, Symbol.hasInstance, { value: function(t) {
	return Function.prototype[Symbol.hasInstance].call(this, t) || this === Bi && Bi.isData(t);
} });
const Oi = new class t extends Pt {
	visit(t) {
		return this.getVisitFn(t.type).call(this, t);
	}
	visitNull(t) {
		const { type: e, offset: i = 0, length: n = 0 } = t;
		return new Bi(e, i, n, n);
	}
	visitBool(t) {
		const { type: e, offset: i = 0 } = t, n = M(t.nullBitmap), r = D(e.ArrayType, t.data), { length: s = r.length >> 3, nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Bi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitInt(t) {
		const { type: e, offset: i = 0 } = t, n = M(t.nullBitmap), r = D(e.ArrayType, t.data), { length: s = r.length, nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Bi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitFloat(t) {
		const { type: e, offset: i = 0 } = t, n = M(t.nullBitmap), r = D(e.ArrayType, t.data), { length: s = r.length, nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Bi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitUtf8(t) {
		const { type: e, offset: i = 0 } = t, n = M(t.data), r = M(t.nullBitmap), s = B(t.valueOffsets), { length: o = s.length - 1, nullCount: a = t.nullBitmap ? -1 : 0 } = t;
		return new Bi(e, i, o, a, [
			s,
			n,
			r
		]);
	}
	visitUtf8View(t) {
		var e;
		const { type: i, offset: n = 0 } = t, r = D(i.ArrayType, t.views), s = M(t.nullBitmap), o = (t.variadicBuffers || []).map((t) => M(t));
		return new Bi(i, n, null !== (e = t.length) && void 0 !== e ? e : Math.trunc(r.length / Tt.ELEMENT_WIDTH), t.nullBitmap ? -1 : 0, [
			void 0,
			r,
			s
		], [], void 0, o);
	}
	visitLargeUtf8(t) {
		const { type: e, offset: i = 0 } = t, n = M(t.data), r = M(t.nullBitmap), s = O(t.valueOffsets), { length: o = s.length - 1, nullCount: a = t.nullBitmap ? -1 : 0 } = t;
		return new Bi(e, i, o, a, [
			s,
			n,
			r
		]);
	}
	visitBinary(t) {
		const { type: e, offset: i = 0 } = t, n = M(t.data), r = M(t.nullBitmap), s = B(t.valueOffsets), { length: o = s.length - 1, nullCount: a = t.nullBitmap ? -1 : 0 } = t;
		return new Bi(e, i, o, a, [
			s,
			n,
			r
		]);
	}
	visitBinaryView(t) {
		var e;
		const { type: i, offset: n = 0 } = t, r = D(i.ArrayType, t.views), s = M(t.nullBitmap), o = (t.variadicBuffers || []).map((t) => M(t));
		return new Bi(i, n, null !== (e = t.length) && void 0 !== e ? e : Math.trunc(r.length / St.ELEMENT_WIDTH), t.nullBitmap ? -1 : 0, [
			void 0,
			r,
			s
		], [], void 0, o);
	}
	visitLargeBinary(t) {
		const { type: e, offset: i = 0 } = t, n = M(t.data), r = M(t.nullBitmap), s = O(t.valueOffsets), { length: o = s.length - 1, nullCount: a = t.nullBitmap ? -1 : 0 } = t;
		return new Bi(e, i, o, a, [
			s,
			n,
			r
		]);
	}
	visitFixedSizeBinary(t) {
		const { type: e, offset: i = 0 } = t, n = M(t.nullBitmap), r = D(e.ArrayType, t.data), { length: s = r.length / Rt(e), nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Bi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitDate(t) {
		const { type: e, offset: i = 0 } = t, n = M(t.nullBitmap), r = D(e.ArrayType, t.data), { length: s = r.length / Rt(e), nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Bi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitTimestamp(t) {
		const { type: e, offset: i = 0 } = t, n = M(t.nullBitmap), r = D(e.ArrayType, t.data), { length: s = r.length / Rt(e), nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Bi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitTime(t) {
		const { type: e, offset: i = 0 } = t, n = M(t.nullBitmap), r = D(e.ArrayType, t.data), { length: s = r.length / Rt(e), nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Bi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitDecimal(t) {
		const { type: e, offset: i = 0 } = t, n = M(t.nullBitmap), r = D(e.ArrayType, t.data), { length: s = r.length / Rt(e), nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Bi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitList(t) {
		const { type: e, offset: i = 0, child: n } = t, r = M(t.nullBitmap), s = B(t.valueOffsets), { length: o = s.length - 1, nullCount: a = t.nullBitmap ? -1 : 0 } = t;
		return new Bi(e, i, o, a, [
			s,
			void 0,
			r
		], [n]);
	}
	visitLargeList(t) {
		const { type: e, offset: i = 0, child: n } = t, r = M(t.nullBitmap), s = O(t.valueOffsets), { length: o = s.length - 1, nullCount: a = t.nullBitmap ? -1 : 0 } = t;
		return new Bi(e, i, o, a, [
			s,
			void 0,
			r
		], [n]);
	}
	visitStruct(t) {
		const { type: e, offset: i = 0, children: n = [] } = t, r = M(t.nullBitmap), { length: s = n.reduce((t, { length: e }) => Math.max(t, e), 0), nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Bi(e, i, s, o, [
			void 0,
			void 0,
			r
		], n);
	}
	visitUnion(t) {
		const { type: e, offset: i = 0, children: n = [] } = t, r = D(e.ArrayType, t.typeIds), { length: s = r.length, nullCount: o = -1 } = t;
		if (st.isSparseUnion(e)) return new Bi(e, i, s, o, [
			void 0,
			void 0,
			void 0,
			r
		], n);
		return new Bi(e, i, s, o, [
			B(t.valueOffsets),
			void 0,
			void 0,
			r
		], n);
	}
	visitDictionary(e) {
		const { type: i, offset: n = 0 } = e, r = M(e.nullBitmap), s = D(i.indices.ArrayType, e.data), { dictionary: o = new Xi([new t().visit({ type: i.dictionary })]) } = e, { length: a = s.length, nullCount: l = e.nullBitmap ? -1 : 0 } = e;
		return new Bi(i, n, a, l, [
			void 0,
			s,
			r
		], [], o);
	}
	visitInterval(t) {
		const { type: e, offset: i = 0 } = t, n = M(t.nullBitmap), r = D(e.ArrayType, t.data), { length: s = r.length / Rt(e), nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Bi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitDuration(t) {
		const { type: e, offset: i = 0 } = t, n = M(t.nullBitmap), r = D(e.ArrayType, t.data), { length: s = r.length, nullCount: o = t.nullBitmap ? -1 : 0 } = t;
		return new Bi(e, i, s, o, [
			void 0,
			r,
			n
		]);
	}
	visitFixedSizeList(e) {
		const { type: i, offset: n = 0, child: r = new t().visit({ type: i.valueType }) } = e, s = M(e.nullBitmap), { length: o = r.length / Rt(i), nullCount: a = e.nullBitmap ? -1 : 0 } = e;
		return new Bi(i, n, o, a, [
			void 0,
			void 0,
			s
		], [r]);
	}
	visitMap(e) {
		const { type: i, offset: n = 0, child: r = new t().visit({ type: i.childType }) } = e, s = M(e.nullBitmap), o = B(e.valueOffsets), { length: a = o.length - 1, nullCount: l = e.nullBitmap ? -1 : 0 } = e;
		return new Bi(i, n, a, l, [
			o,
			void 0,
			s
		], [r]);
	}
}();
function Mi(t) {
	return Oi.visit(t);
}
var Ei = class {
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
function Ni(t) {
	return t.reduce((t, e, i) => (t[i + 1] = t[i] + e.length, t), new Uint32Array(t.length + 1));
}
function Li(t, e, i, n) {
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
function Fi(t, e, i, n) {
	let r = 0, s = 0, o = e.length - 1;
	do {
		if (r >= o - 1) return i < e[o] ? n(t, r, i - e[r]) : null;
		s = r + Math.trunc(.5 * (o - r)), i < e[s] ? o = s : r = s;
	} while (r < o);
}
function xi(t, e) {
	return t.getValid(e);
}
function Ci(t) {
	function e(e, i, n) {
		return t(e[i], n);
	}
	return function(t) {
		return Fi(this.data, this._offsets, t, e);
	};
}
function _i(t) {
	let e;
	function i(i, n, r) {
		return t(i[n], r, e);
	}
	return function(t, n) {
		const r = this.data;
		e = n;
		const s = Fi(r, this._offsets, t, i);
		return e = void 0, s;
	};
}
function ki(t) {
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
		const r = this.data, s = "number" != typeof n ? i(r, 0, 0) : Fi(r, this._offsets, n, i);
		return e = void 0, s;
	};
}
var Vi = class extends Pt {};
function ji(t, e, i) {
	if (void 0 === e) return -1;
	if (null === e) switch (t.typeId) {
		case C.Union:
		case C.Dictionary: break;
		default: return function(t, e) {
			const { nullBitmap: i } = t;
			if (!i || t.nullCount <= 0) return -1;
			let n = 0;
			for (const r of new Ii(i, t.offset + (e || 0), t.length, i, bi)) {
				if (!r) return n;
				++n;
			}
			return -1;
		}(t, i);
	}
	const n = ri.getVisitFn(t), r = vi(e);
	for (let s = (i || 0) - 1, o = t.length; ++s < o;) if (r(n(t, s))) return s;
	return -1;
}
function $i(t, e, i) {
	const n = ri.getVisitFn(t), r = vi(e);
	for (let s = (i || 0) - 1, o = t.length; ++s < o;) if (r(n(t, s))) return s;
	return -1;
}
Vi.prototype.visitNull = function(t, e) {
	return null === e && t.length > 0 ? 0 : -1;
}, Vi.prototype.visitBool = ji, Vi.prototype.visitInt = ji, Vi.prototype.visitInt8 = ji, Vi.prototype.visitInt16 = ji, Vi.prototype.visitInt32 = ji, Vi.prototype.visitInt64 = ji, Vi.prototype.visitUint8 = ji, Vi.prototype.visitUint16 = ji, Vi.prototype.visitUint32 = ji, Vi.prototype.visitUint64 = ji, Vi.prototype.visitFloat = ji, Vi.prototype.visitFloat16 = ji, Vi.prototype.visitFloat32 = ji, Vi.prototype.visitFloat64 = ji, Vi.prototype.visitUtf8 = ji, Vi.prototype.visitLargeUtf8 = ji, Vi.prototype.visitUtf8View = ji, Vi.prototype.visitBinary = ji, Vi.prototype.visitLargeBinary = ji, Vi.prototype.visitBinaryView = ji, Vi.prototype.visitFixedSizeBinary = ji, Vi.prototype.visitDate = ji, Vi.prototype.visitDateDay = ji, Vi.prototype.visitDateMillisecond = ji, Vi.prototype.visitTimestamp = ji, Vi.prototype.visitTimestampSecond = ji, Vi.prototype.visitTimestampMillisecond = ji, Vi.prototype.visitTimestampMicrosecond = ji, Vi.prototype.visitTimestampNanosecond = ji, Vi.prototype.visitTime = ji, Vi.prototype.visitTimeSecond = ji, Vi.prototype.visitTimeMillisecond = ji, Vi.prototype.visitTimeMicrosecond = ji, Vi.prototype.visitTimeNanosecond = ji, Vi.prototype.visitDecimal = ji, Vi.prototype.visitList = ji, Vi.prototype.visitLargeList = ji, Vi.prototype.visitStruct = ji, Vi.prototype.visitUnion = ji, Vi.prototype.visitDenseUnion = $i, Vi.prototype.visitSparseUnion = $i, Vi.prototype.visitDictionary = ji, Vi.prototype.visitInterval = ji, Vi.prototype.visitIntervalDayTime = ji, Vi.prototype.visitIntervalYearMonth = ji, Vi.prototype.visitIntervalMonthDayNano = ji, Vi.prototype.visitDuration = ji, Vi.prototype.visitDurationSecond = ji, Vi.prototype.visitDurationMillisecond = ji, Vi.prototype.visitDurationMicrosecond = ji, Vi.prototype.visitDurationNanosecond = ji, Vi.prototype.visitFixedSizeList = ji, Vi.prototype.visitMap = ji;
const zi = new Vi();
var Ri = class extends Pt {};
function Pi(t) {
	const { type: e } = t;
	if (0 === t.nullCount && 1 === t.stride && (st.isInt(e) && 64 !== e.bitWidth || st.isTime(e) && 64 !== e.bitWidth || st.isFloat(e) && e.precision !== N.HALF)) return new Ei(t.data.length, (e) => {
		const i = t.data[e];
		return i.values.subarray(0, i.length)[Symbol.iterator]();
	});
	let i = 0;
	return new Ei(t.data.length, (e) => {
		const n = t.data[e].length, r = t.slice(i, i + n);
		return i += n, new Yi(r);
	});
}
var Yi = class {
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
Ri.prototype.visitNull = Pi, Ri.prototype.visitBool = Pi, Ri.prototype.visitInt = Pi, Ri.prototype.visitInt8 = Pi, Ri.prototype.visitInt16 = Pi, Ri.prototype.visitInt32 = Pi, Ri.prototype.visitInt64 = Pi, Ri.prototype.visitUint8 = Pi, Ri.prototype.visitUint16 = Pi, Ri.prototype.visitUint32 = Pi, Ri.prototype.visitUint64 = Pi, Ri.prototype.visitFloat = Pi, Ri.prototype.visitFloat16 = Pi, Ri.prototype.visitFloat32 = Pi, Ri.prototype.visitFloat64 = Pi, Ri.prototype.visitUtf8 = Pi, Ri.prototype.visitLargeUtf8 = Pi, Ri.prototype.visitUtf8View = Pi, Ri.prototype.visitBinary = Pi, Ri.prototype.visitLargeBinary = Pi, Ri.prototype.visitBinaryView = Pi, Ri.prototype.visitFixedSizeBinary = Pi, Ri.prototype.visitDate = Pi, Ri.prototype.visitDateDay = Pi, Ri.prototype.visitDateMillisecond = Pi, Ri.prototype.visitTimestamp = Pi, Ri.prototype.visitTimestampSecond = Pi, Ri.prototype.visitTimestampMillisecond = Pi, Ri.prototype.visitTimestampMicrosecond = Pi, Ri.prototype.visitTimestampNanosecond = Pi, Ri.prototype.visitTime = Pi, Ri.prototype.visitTimeSecond = Pi, Ri.prototype.visitTimeMillisecond = Pi, Ri.prototype.visitTimeMicrosecond = Pi, Ri.prototype.visitTimeNanosecond = Pi, Ri.prototype.visitDecimal = Pi, Ri.prototype.visitList = Pi, Ri.prototype.visitLargeList = Pi, Ri.prototype.visitStruct = Pi, Ri.prototype.visitUnion = Pi, Ri.prototype.visitDenseUnion = Pi, Ri.prototype.visitSparseUnion = Pi, Ri.prototype.visitDictionary = Pi, Ri.prototype.visitInterval = Pi, Ri.prototype.visitIntervalDayTime = Pi, Ri.prototype.visitIntervalYearMonth = Pi, Ri.prototype.visitIntervalMonthDayNano = Pi, Ri.prototype.visitDuration = Pi, Ri.prototype.visitDurationSecond = Pi, Ri.prototype.visitDurationMillisecond = Pi, Ri.prototype.visitDurationMicrosecond = Pi, Ri.prototype.visitDurationNanosecond = Pi, Ri.prototype.visitFixedSizeList = Pi, Ri.prototype.visitMap = Pi;
const Hi = new Ri();
var Wi;
const Gi = Symbol.for("apache-arrow/Vector"), qi = {}, Ji = {};
var Xi = class t {
	static isVector(t) {
		return !0 === (null == t ? void 0 : t[Gi]);
	}
	constructor(e) {
		var i, n, r;
		const s = e[0] instanceof t ? e.flatMap((t) => t.data) : e;
		if (0 === s.length || s.some((t) => !(t instanceof Bi))) throw new TypeError("Vector constructor expects an Array of Data instances.");
		const o = null === (i = s[0]) || void 0 === i ? void 0 : i.type;
		switch (s.length) {
			case 0:
				this._offsets = [0];
				break;
			case 1: {
				const { get: t, set: e, indexOf: i } = qi[o.typeId], n = s[0];
				this.isValid = (t) => xi(n, t), this.get = (e) => t(n, e), this.set = (t, i) => e(n, t, i), this.indexOf = (t) => i(n, t), this._offsets = [0, n.length];
				break;
			}
			default: Object.setPrototypeOf(this, Ji[o.typeId]), this._offsets = Ni(s);
		}
		this.data = s, this.type = o, this.stride = Rt(o), this.numChildren = null !== (r = null === (n = o.children) || void 0 === n ? void 0 : n.length) && void 0 !== r ? r : 0, this.length = this._offsets.at(-1);
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
		return `${C[this.type.typeId]}Vector`;
	}
	isValid(t) {
		return !1;
	}
	get(t) {
		return null;
	}
	at(t) {
		return this.get(hi(t, this.length));
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
		return new t(di(this, e, i, ({ data: t, _offsets: e }, i, n) => Li(t, e, i, n)));
	}
	toJSON() {
		return [...this];
	}
	toArray() {
		const { type: t, data: e, length: i, stride: n, ArrayType: r } = this;
		switch (t.typeId) {
			case C.Int:
			case C.Float:
			case C.Decimal:
			case C.Time:
			case C.Timestamp: switch (e.length) {
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
		return !!st.isDictionary(this.type) && this.data[0].dictionary.isMemoized;
	}
	memoize() {
		if (st.isDictionary(this.type)) {
			const e = new Ki(this.data[0].dictionary), i = this.data.map((t) => {
				const i = t.clone();
				return i.dictionary = e, i;
			});
			return new t(i);
		}
		return new Ki(this);
	}
	unmemoize() {
		if (st.isDictionary(this.type) && this.isMemoized) {
			const e = this.data[0].dictionary.unmemoize(), i = this.data.map((t) => {
				const i = t.clone();
				return i.dictionary = e, i;
			});
			return new t(i);
		}
		return this;
	}
};
Wi = Symbol.toStringTag, Xi[Wi] = ((t) => {
	t.type = st.prototype, t.data = [], t.length = 0, t.stride = 1, t.numChildren = 0, t._offsets = new Uint32Array([0]), t[Symbol.isConcatSpreadable] = !0, t[Gi] = !0;
	const e = Object.keys(C).map((t) => C[t]).filter((t) => "number" == typeof t && t !== C.NONE);
	for (const i of e) {
		const e = ri.getVisitFnByTypeId(i), n = Ae.getVisitFnByTypeId(i), r = zi.getVisitFnByTypeId(i);
		qi[i] = {
			get: e,
			set: n,
			indexOf: r
		}, Ji[i] = Object.create(t, {
			isValid: { value: Ci(xi) },
			get: { value: Ci(ri.getVisitFnByTypeId(i)) },
			set: { value: _i(Ae.getVisitFnByTypeId(i)) },
			indexOf: { value: ki(zi.getVisitFnByTypeId(i)) }
		});
	}
	return "Vector";
})(Xi.prototype), Object.defineProperty(Xi, Symbol.hasInstance, { value: function(t) {
	return Function.prototype[Symbol.hasInstance].call(this, t) || this === Xi && Xi.isVector(t);
} });
var Ki = class t extends Xi {
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
		} }), Object.defineProperty(this, "slice", { value: (e, i) => new t(r.call(this, e, i)) }), Object.defineProperty(this, "isMemoized", { value: !0 }), Object.defineProperty(this, "unmemoize", { value: () => new Xi(this.data) }), Object.defineProperty(this, "memoize", { value: () => this });
	}
};
function Zi(t) {
	if (t) {
		if (t instanceof Bi) return new Xi([t]);
		if (t instanceof Xi) return new Xi(t.data);
		if (t.type instanceof st) return new Xi([Mi(t)]);
		if (Array.isArray(t)) return new Xi(t.flatMap((t) => {
			return (e = t) instanceof Bi ? [e] : e instanceof Xi ? e.data : Zi(e).data;
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
			if (t instanceof Int8Array) return new Xi([Mi(Object.assign(Object.assign({}, e), { type: new lt() }))]);
			if (t instanceof Int16Array) return new Xi([Mi(Object.assign(Object.assign({}, e), { type: new ct() }))]);
			if (t instanceof Int32Array) return new Xi([Mi(Object.assign(Object.assign({}, e), { type: new ut() }))]);
			if (t instanceof BigInt64Array) return new Xi([Mi(Object.assign(Object.assign({}, e), { type: new pt() }))]);
			if (t instanceof Uint8Array || t instanceof Uint8ClampedArray) return new Xi([Mi(Object.assign(Object.assign({}, e), { type: new yt() }))]);
			if (t instanceof Uint16Array) return new Xi([Mi(Object.assign(Object.assign({}, e), { type: new dt() }))]);
			if (t instanceof Uint32Array) return new Xi([Mi(Object.assign(Object.assign({}, e), { type: new ht() }))]);
			if (t instanceof BigUint64Array) return new Xi([Mi(Object.assign(Object.assign({}, e), { type: new ft() }))]);
			if (t instanceof Float32Array) return new Xi([Mi(Object.assign(Object.assign({}, e), { type: new mt() }))]);
			if (t instanceof Float64Array) return new Xi([Mi(Object.assign(Object.assign({}, e), { type: new gt() }))]);
			throw new Error("Unrecognized input");
		}
	}
	throw new Error("Unrecognized input");
}
const Qi = Symbol.for("apache-arrow/Schema"), tn = Symbol.for("apache-arrow/Field");
var en = class t {
	static isSchema(t) {
		return !0 === (null == t ? void 0 : t[Qi]);
	}
	constructor(t = [], e, i, n = E.V5) {
		this.fields = t || [], this.metadata = e || /* @__PURE__ */ new Map(), i || (i = sn(this.fields)), this.dictionaries = i, this.metadataVersion = n;
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
		const i = e[0] instanceof t ? e[0] : Array.isArray(e[0]) ? new t(e[0]) : new t(e), n = [...this.fields], r = rn(rn(/* @__PURE__ */ new Map(), this.metadata), i.metadata), s = i.fields.filter((t) => {
			const e = n.findIndex((e) => e.name === t.name);
			return !~e || (n[e] = t.clone({ metadata: rn(rn(/* @__PURE__ */ new Map(), n[e].metadata), t.metadata) })) && !1;
		}), o = sn(s, /* @__PURE__ */ new Map());
		return new t([...n, ...s], r, new Map([...this.dictionaries, ...o]));
	}
};
en.prototype.fields = null, en.prototype.metadata = null, en.prototype.dictionaries = null, en.prototype[Qi] = !0, Object.defineProperty(en, Symbol.hasInstance, { value: function(t) {
	return Function.prototype[Symbol.hasInstance].call(this, t) || this === en && en.isSchema(t);
} });
var nn = class t {
	static isField(t) {
		return !0 === (null == t ? void 0 : t[tn]);
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
function rn(t, e) {
	return new Map([...t || /* @__PURE__ */ new Map(), ...e || /* @__PURE__ */ new Map()]);
}
function sn(t, e = /* @__PURE__ */ new Map()) {
	for (let i = -1, n = t.length; ++i < n;) {
		const n = t[i].type;
		if (st.isDictionary(n)) if (e.has(n.id)) {
			if (e.get(n.id) !== n.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
		} else e.set(n.id, n.dictionary);
		n.children && n.children.length > 0 && sn(n.children, e);
	}
	return e;
}
nn.prototype.type = null, nn.prototype.name = null, nn.prototype.nullable = null, nn.prototype.metadata = null, nn.prototype[tn] = !0, Object.defineProperty(nn, Symbol.hasInstance, { value: function(t) {
	return Function.prototype[Symbol.hasInstance].call(this, t) || this === nn && nn.isField(t);
} });
var on = class extends Pt {
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
function an(t, e) {
	return e instanceof t.constructor;
}
function ln(t, e) {
	return t === e || an(t, e);
}
function cn(t, e) {
	return t === e || an(t, e) && t.bitWidth === e.bitWidth && t.isSigned === e.isSigned;
}
function un(t, e) {
	return t === e || an(t, e) && t.precision === e.precision;
}
function pn(t, e) {
	return t === e || an(t, e) && t.unit === e.unit;
}
function yn(t, e) {
	return t === e || an(t, e) && t.unit === e.unit && t.timezone === e.timezone;
}
function dn(t, e) {
	return t === e || an(t, e) && t.unit === e.unit && t.bitWidth === e.bitWidth;
}
function hn(t, e) {
	return t === e || an(t, e) && t.children.length === e.children.length && gn.compareManyFields(t.children, e.children);
}
function fn(t, e) {
	return t === e || an(t, e) && t.mode === e.mode && t.typeIds.every((t, i) => t === e.typeIds[i]) && gn.compareManyFields(t.children, e.children);
}
function vn(t, e) {
	return t === e || an(t, e) && t.unit === e.unit;
}
function mn(t, e) {
	return t === e || an(t, e) && t.unit === e.unit;
}
on.prototype.visitNull = ln, on.prototype.visitBool = ln, on.prototype.visitInt = cn, on.prototype.visitInt8 = cn, on.prototype.visitInt16 = cn, on.prototype.visitInt32 = cn, on.prototype.visitInt64 = cn, on.prototype.visitUint8 = cn, on.prototype.visitUint16 = cn, on.prototype.visitUint32 = cn, on.prototype.visitUint64 = cn, on.prototype.visitFloat = un, on.prototype.visitFloat16 = un, on.prototype.visitFloat32 = un, on.prototype.visitFloat64 = un, on.prototype.visitUtf8 = ln, on.prototype.visitLargeUtf8 = ln, on.prototype.visitUtf8View = ln, on.prototype.visitBinary = ln, on.prototype.visitLargeBinary = ln, on.prototype.visitBinaryView = ln, on.prototype.visitFixedSizeBinary = function(t, e) {
	return t === e || an(t, e) && t.byteWidth === e.byteWidth;
}, on.prototype.visitDate = pn, on.prototype.visitDateDay = pn, on.prototype.visitDateMillisecond = pn, on.prototype.visitTimestamp = yn, on.prototype.visitTimestampSecond = yn, on.prototype.visitTimestampMillisecond = yn, on.prototype.visitTimestampMicrosecond = yn, on.prototype.visitTimestampNanosecond = yn, on.prototype.visitTime = dn, on.prototype.visitTimeSecond = dn, on.prototype.visitTimeMillisecond = dn, on.prototype.visitTimeMicrosecond = dn, on.prototype.visitTimeNanosecond = dn, on.prototype.visitDecimal = ln, on.prototype.visitList = hn, on.prototype.visitLargeList = hn, on.prototype.visitStruct = function(t, e) {
	return t === e || an(t, e) && t.children.length === e.children.length && gn.compareManyFields(t.children, e.children);
}, on.prototype.visitUnion = fn, on.prototype.visitDenseUnion = fn, on.prototype.visitSparseUnion = fn, on.prototype.visitDictionary = function(t, e) {
	return t === e || an(t, e) && t.id === e.id && t.isOrdered === e.isOrdered && gn.visit(t.indices, e.indices) && gn.visit(t.dictionary, e.dictionary);
}, on.prototype.visitInterval = vn, on.prototype.visitIntervalDayTime = vn, on.prototype.visitIntervalYearMonth = vn, on.prototype.visitIntervalMonthDayNano = vn, on.prototype.visitDuration = mn, on.prototype.visitDurationSecond = mn, on.prototype.visitDurationMillisecond = mn, on.prototype.visitDurationMicrosecond = mn, on.prototype.visitDurationNanosecond = mn, on.prototype.visitFixedSizeList = function(t, e) {
	return t === e || an(t, e) && t.listSize === e.listSize && t.children.length === e.children.length && gn.compareManyFields(t.children, e.children);
}, on.prototype.visitMap = function(t, e) {
	return t === e || an(t, e) && t.keysSorted === e.keysSorted && t.children.length === e.children.length && gn.compareManyFields(t.children, e.children);
};
const gn = new on();
function bn(t, e) {
	return gn.compareSchemas(t, e);
}
function Sn(t, e) {
	return function(t, e) {
		const i = [...t.fields], n = [], r = { numBatches: e.reduce((t, e) => Math.max(t, e.length), 0) };
		let s = 0, o = 0, a = -1;
		const l = e.length;
		let c, u = [];
		for (; r.numBatches-- > 0;) {
			for (o = Number.POSITIVE_INFINITY, a = -1; ++a < l;) u[a] = c = e[a].shift(), o = Math.min(o, c ? c.length : o);
			Number.isFinite(o) && (u = wn(i, o, u, e, r), o > 0 && (n[s++] = Mi({
				type: new xt(i),
				length: o,
				nullCount: 0,
				children: u.slice()
			})));
		}
		return [t = t.assign(i), n.map((e) => new On(t, e))];
	}(t, e.map((t) => t.data.concat()));
}
function wn(t, e, i, n, r) {
	var s;
	const o = (e + 63 & -64) >> 3;
	for (let a = -1, l = n.length; ++a < l;) {
		const l = i[a], c = null == l ? void 0 : l.length;
		if (c >= e) c === e ? i[a] = l : (i[a] = l.slice(0, e), r.numBatches = Math.max(r.numBatches, n[a].unshift(l.slice(e, c - e))));
		else {
			const n = t[a];
			t[a] = n.clone({ nullable: !0 }), i[a] = null !== (s = null == l ? void 0 : l._changeLengthAndBackfillNullBitmap(e)) && void 0 !== s ? s : Mi({
				type: n.type,
				length: e,
				nullCount: e,
				nullBitmap: new Uint8Array(o)
			});
		}
	}
	return i;
}
var In;
const Tn = Symbol.for("apache-arrow/Table");
var An, Dn = class t {
	static isTable(t) {
		return !0 === (null == t ? void 0 : t[Tn]);
	}
	constructor(...e) {
		var i, n;
		if (0 === e.length) return this.batches = [], this.schema = new en([]), this._offsets = [0], this;
		let r, s;
		e[0] instanceof en && (r = e.shift()), e.at(-1) instanceof Uint32Array && (s = e.pop());
		const o = (e) => {
			if (e) {
				if (e instanceof On) return [e];
				if (e instanceof t) return e.batches;
				if (e instanceof Bi) {
					if (e.type instanceof xt) return [new On(new en(e.type.children), e)];
				} else {
					if (Array.isArray(e)) return e.flatMap((t) => o(t));
					if ("function" == typeof e[Symbol.iterator]) return [...e].flatMap((t) => o(t));
					if ("object" == typeof e) {
						const t = Object.keys(e), i = t.map((t) => new Xi([e[t]])), [, s] = Sn(null != r ? r : new en(t.map((t, e) => new nn(String(t), i[e].type, i[e].nullable))), i);
						return 0 === s.length ? [new On(e)] : s;
					}
				}
			}
			return [];
		}, a = e.flatMap((t) => o(t));
		if (r = null !== (n = null != r ? r : null === (i = a[0]) || void 0 === i ? void 0 : i.schema) && void 0 !== n ? n : new en([]), !(r instanceof en)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
		for (const t of a) {
			if (!(t instanceof On)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
			if (!bn(r, t.schema)) throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
		}
		this.schema = r, this.batches = a, this._offsets = null != s ? s : Ni(this.data);
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
		return this.get(hi(t, this.numRows));
	}
	set(t, e) {}
	indexOf(t, e) {
		return -1;
	}
	[Symbol.iterator]() {
		return this.batches.length > 0 ? Hi.visit(new Xi(this.data)) : new Array(0)[Symbol.iterator]();
	}
	toArray() {
		return [...this];
	}
	toString() {
		return `[\n  ${this.toArray().join(",\n  ")}\n]`;
	}
	concat(...e) {
		const i = this.schema, n = this.data.concat(e.flatMap(({ data: t }) => t));
		return new t(i, n.map((t) => new On(i, t)));
	}
	slice(e, i) {
		const n = this.schema;
		[e, i] = di({ length: this.numRows }, e, i);
		const r = Li(this.data, this._offsets, e, i);
		return new t(n, r.map((t) => new On(n, t)));
	}
	getChild(t) {
		return this.getChildAt(this.schema.fields.findIndex((e) => e.name === t));
	}
	getChildAt(t) {
		if (t > -1 && t < this.schema.fields.length) {
			const e = this.data.map((e) => e.children[t]);
			if (0 === e.length) {
				const { type: i } = this.schema.fields[t], n = Mi({
					type: i,
					length: 0,
					nullCount: 0
				});
				e.push(n._changeLengthAndBackfillNullBitmap(this.numRows));
			}
			return new Xi(e);
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
			i || (i = new Xi([Mi({
				type: new ot(),
				length: this.numRows
			})]));
			const t = n.fields.slice(), s = t[e].clone({ type: i.type }), o = this.schema.fields.map((t, e) => this.getChildAt(e));
			[t[e], o[e]] = [s, i], [n, r] = Sn(n, o);
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
		return new t(...Sn(s, o));
	}
};
In = Symbol.toStringTag, Dn[In] = ((t) => (t.schema = null, t.batches = [], t._offsets = new Uint32Array([0]), t._nullCount = -1, t[Symbol.isConcatSpreadable] = !0, t[Tn] = !0, t.isValid = Ci(xi), t.get = Ci(ri.getVisitFn(C.Struct)), t.set = _i(Ae.getVisitFn(C.Struct)), t.indexOf = ki(zi.getVisitFn(C.Struct)), "Table"))(Dn.prototype), Object.defineProperty(Dn, Symbol.hasInstance, { value: function(t) {
	return Function.prototype[Symbol.hasInstance].call(this, t) || this === Dn && Dn.isTable(t);
} });
const Bn = Symbol.for("apache-arrow/RecordBatch");
var On = class t {
	static isRecordBatch(t) {
		return !0 === (null == t ? void 0 : t[Bn]);
	}
	constructor(...t) {
		switch (t.length) {
			case 3:
			case 2:
				if ([this.schema] = t, !(this.schema instanceof en)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
				if ([, this.data = Mi({
					nullCount: 0,
					type: new xt(this.schema.fields),
					children: this.schema.fields.map((t) => Mi({
						type: t.type,
						nullCount: 0
					}))
				}), this._metadata = /* @__PURE__ */ new Map()] = t, !(this.data instanceof Bi)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
				[this.schema, this.data] = Mn(this.schema, this.data.children, this.data.length);
				break;
			case 1: {
				const [e] = t, { fields: i, children: n, length: r } = Object.keys(e).reduce((t, i, n) => (t.children[n] = e[i], t.length = Math.max(t.length, e[i].length), t.fields[n] = nn.new({
					name: i,
					type: e[i].type,
					nullable: !0
				}), t), {
					length: 0,
					fields: new Array(),
					children: new Array()
				}), s = new en(i), o = Mi({
					type: new xt(i),
					length: r,
					children: n,
					nullCount: 0
				});
				[this.schema, this.data] = Mn(s, o.children, r), this._metadata = /* @__PURE__ */ new Map();
				break;
			}
			default: throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
		}
	}
	get metadata() {
		return this._metadata;
	}
	get dictionaries() {
		return this._dictionaries || (this._dictionaries = En(this.schema.fields, this.data.children));
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
		return ri.visit(this.data, t);
	}
	at(t) {
		return this.get(hi(t, this.numRows));
	}
	set(t, e) {
		return Ae.visit(this.data, t, e);
	}
	indexOf(t, e) {
		return zi.visit(this.data, t, e);
	}
	[Symbol.iterator]() {
		return Hi.visit(new Xi([this.data]));
	}
	toArray() {
		return [...this];
	}
	concat(...t) {
		return new Dn(this.schema, [this, ...t]);
	}
	slice(e, i) {
		const [n] = new Xi([this.data]).slice(e, i).data;
		return new t(this.schema, n, this._metadata);
	}
	getChild(t) {
		var e;
		return this.getChildAt(null === (e = this.schema.fields) || void 0 === e ? void 0 : e.findIndex((e) => e.name === t));
	}
	getChildAt(t) {
		return t > -1 && t < this.schema.fields.length ? new Xi([this.data.children[t]]) : null;
	}
	setChild(t, e) {
		var i;
		return this.setChildAt(null === (i = this.schema.fields) || void 0 === i ? void 0 : i.findIndex((e) => e.name === t), e);
	}
	setChildAt(e, i) {
		let n = this.schema, r = this.data;
		if (e > -1 && e < this.numCols) {
			i || (i = new Xi([Mi({
				type: new ot(),
				length: this.numRows
			})]));
			const t = n.fields.slice(), s = r.children.slice(), o = t[e].clone({ type: i.type });
			[t[e], s[e]] = [o, i.data[0]], n = new en(t, new Map(this.schema.metadata)), r = Mi({
				type: new xt(t),
				length: r.length,
				children: s
			});
		}
		return new t(n, r, this._metadata);
	}
	select(e) {
		const i = this.schema.select(e), n = new xt(i.fields), r = [];
		for (const t of e) {
			const e = this.schema.fields.findIndex((e) => e.name === t);
			~e && (r[e] = this.data.children[e]);
		}
		return new t(i, Mi({
			type: n,
			length: this.numRows,
			children: r
		}), this._metadata);
	}
	selectAt(e) {
		const i = this.schema.selectAt(e), n = e.map((t) => this.data.children[t]).filter(Boolean), r = Mi({
			type: new xt(i.fields),
			length: this.numRows,
			children: n
		});
		return new t(i, r, this._metadata);
	}
};
function Mn(t, e, i = e.reduce((t, e) => Math.max(t, e.length), 0)) {
	var n;
	const r = [...t.fields], s = [...e], o = (i + 63 & -64) >> 3;
	for (const [a, l] of t.fields.entries()) {
		const t = e[a];
		t && t.length === i || (r[a] = l.clone({ nullable: !0 }), s[a] = null !== (n = null == t ? void 0 : t._changeLengthAndBackfillNullBitmap(i)) && void 0 !== n ? n : Mi({
			type: l.type,
			length: i,
			nullCount: i,
			nullBitmap: new Uint8Array(o)
		}));
	}
	return [t.assign(r), Mi({
		type: new xt(r),
		length: i,
		children: s
	})];
}
function En(t, e, i = /* @__PURE__ */ new Map()) {
	var n, r;
	if ((null !== (n = null == t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0 && (null == t ? void 0 : t.length) === (null == e ? void 0 : e.length)) for (let s = -1, o = t.length; ++s < o;) {
		const { type: n } = t[s], o = e[s];
		for (const t of [o, ...(null === (r = null == o ? void 0 : o.dictionary) || void 0 === r ? void 0 : r.data) || []]) En(n.children, null == t ? void 0 : t.children, i);
		if (st.isDictionary(n)) {
			const { id: t } = n;
			if (i.has(t)) {
				if (i.get(t) !== o.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
			} else null != o && o.dictionary && i.set(t, o.dictionary);
		}
	}
	return i;
}
An = Symbol.toStringTag, On[An] = ((t) => (t._nullCount = -1, t[Symbol.isConcatSpreadable] = !0, t[Bn] = !0, "RecordBatch"))(On.prototype), Object.defineProperty(On, Symbol.hasInstance, { value: function(t) {
	return Function.prototype[Symbol.hasInstance].call(this, t) || this === On && On.isRecordBatch(t);
} });
const Un = {
	TIMESTAMP_MS: "timestamp_ms",
	AXIS_X: "axis_x",
	AXIS_Y: "axis_y",
	AXIS_Z: "axis_z",
	VECTOR_MAGNITUDE: "vector_magnitude",
	TEMPERATURE: "temperature"
};
function Nn(t) {
	const e = (t) => Zi(Mi({
		type: new gt(),
		length: t.length,
		data: t
	}));
	return new Dn({
		timestamp_ms: e(t.timestamp_ms),
		axis_x: e(t.axis_x),
		axis_y: e(t.axis_y),
		axis_z: e(t.axis_z),
		vector_magnitude: e(t.vector_magnitude),
		temperature: e(t.temperature)
	});
}
function Ln(t) {
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
const Fn = {
	GENEACTIV: 0,
	ACTIGRAPH_RAW: 1,
	GENEACTIV_BIN: 2
}, xn = {
	[Fn.GENEACTIV]: 100,
	[Fn.ACTIGRAPH_RAW]: 30,
	[Fn.GENEACTIV_BIN]: 86
}, Cn = 33554432;
async function _n(t, e, n, r, o, a, l, c = !1, u) {
	const p = t.size;
	let y = 0, d = 0;
	const v = c ? new Uint8Array(Math.min(f, p)) : null;
	for (await l.streamParseStart(r, e, a, u), c && await l.sha256Start(); y < p;) {
		if (o?.aborted) throw new DOMException("Aborted: streamParseRaw", "AbortError");
		const e = Math.min(y + Cn, p), i = new Uint8Array(await t.slice(y, e).arrayBuffer());
		v && y < v.length && v.set(i.subarray(0, v.length - y), y);
		const r = await (v ? l.streamParseFeedHashed(s(i, [i.buffer])) : l.streamParseFeed(s(i, [i.buffer])));
		d += r, y = e, n?.({
			bytesRead: y,
			totalBytes: p,
			percent: y / p * 100,
			epochsEmitted: d,
			stage: "feed"
		});
	}
	const m = v ? {
		prefixHash: await h(v),
		fullHash: await l.sha256Finish()
	} : void 0;
	n?.({
		bytesRead: p,
		totalBytes: p,
		percent: 100,
		epochsEmitted: d,
		stage: "finalize"
	});
	const g = await l.streamParseFinishChunk(n ? i((t, e) => {
		n({
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
		table: Nn({
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
async function kn(t) {
	const e = await t.slice(0, Math.min(t.size, 65536)).arrayBuffer(), i = new TextDecoder("utf-8", { fatal: !1 }).decode(e).toLowerCase();
	if (i.includes("geneactiv") || i.includes("activinsights")) return i.includes("recorded data") ? Fn.GENEACTIV_BIN : Fn.GENEACTIV;
	if (i.includes("actigraph")) {
		const t = i.includes("epoch period") && !i.includes("epoch period (hh:mm:ss) 00:00:00") || /date\s*,\s*time\s*,\s*axis1[\s,]/u.test(i) || i.includes("vector magnitude");
		if ((/timestamp\s*,\s*(?:axis1\s*,\s*axis2\s*,\s*axis3|accelerometer x\s*,\s*accelerometer y\s*,\s*accelerometer z)/u.test(i) || /^\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}(?:[.:]\d{1,3})?\s*,/mu.test(i) || /^\d{1,2}\/\d{1,2}\/\d{4}\s+\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?\s*,/mu.test(i)) && !t) return Fn.ACTIGRAPH_RAW;
	}
	return null;
}
const Vn = 1073741824;
function jn() {
	return "undefined" == typeof navigator ? void 0 : navigator.deviceMemory;
}
const $n = 15e8;
function zn() {
	return Math.min($n, function() {
		const t = "undefined" == typeof navigator ? void 0 : navigator.deviceMemory;
		if ("number" != typeof t || !Number.isFinite(t) || t <= 0) return Vn;
		const e = Math.floor(1024 * t * 1024 * 1024 / 4);
		return Math.min(2147483648, Math.max(Vn, e));
	}());
}
function Rn(t) {
	return t instanceof Error && ("workerLost" in t && !0 === t.workerLost || /timed out during|worker stopped|worker failed/u.test(t.message));
}
const Pn = 3e5;
async function Yn(t, i, n, o, a, l = !1) {
	if (Wn(n, "before buffered file streaming"), t.size > zn()) throw new Error("This file is too large for in-browser memory. Import a shorter recording, or use a computer with more memory.");
	const c = o ?? e(), u = a ?? (() => r(c)), { withWasmDeadline: p } = await Promise.resolve().then(() => Jn), y = t.size, d = l ? new Uint8Array(Math.min(f, y)) : null;
	l && await c.sha256Start(), await p(c, (t) => t.csvBufferClear(y), {
		ms: Pn,
		label: "csvBufferClear",
		signal: n,
		cancel: u
	});
	let v = 0;
	for (; v < y;) {
		Wn(n, "before buffered file chunk read");
		const e = Math.min(v + Cn, y), r = await t.slice(v, e).arrayBuffer();
		Wn(n, "after buffered file chunk read");
		const o = new Uint8Array(r);
		d && v < d.length && d.set(o.subarray(0, d.length - v), v), await p(c, (t) => d ? t.csvBufferAppendHashed(s(o, [o.buffer])) : t.csvBufferAppend(s(o, [o.buffer])), {
			ms: Pn,
			label: "csvBufferAppend",
			signal: n,
			cancel: u
		}), Wn(n, "after buffered file chunk append"), v = e, i({
			bytesRead: v,
			totalBytes: y,
			percent: v / y * 100
		});
	}
	return d ? {
		prefixHash: await h(d),
		fullHash: await c.sha256Finish()
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
function Wn(t, e = "processing") {
	if (t?.aborted) throw new DOMException(`Aborted: ${e}`, "AbortError");
}
function Gn(t) {
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
function qn(t, e, i = "processing") {
	if (e?.aborted) throw new DOMException(`Aborted: ${i}`, "AbortError");
	if (t instanceof Error && "AbortError" === t.name) throw t;
}
var Jn = t({
	BackgroundJobBusyError: () => Xn,
	backgroundWasmApi: () => cr,
	runBackgroundJob: () => pr,
	setBackgroundJobVisibleFile: () => nr,
	wasmApiWithDeadline: () => lr,
	withBackgroundWasm: () => or,
	withWasmDeadline: () => ar,
	yieldBackgroundJob: () => Kn
}), Xn = class extends Error {
	name = "BackgroundJobBusyError";
	kind;
	constructor(t) {
		super("This job is running in another tab."), this.kind = t;
	}
};
async function Kn(t) {
	t?.throwIfAborted();
	const e = globalThis.scheduler;
	e?.yield ? await e.yield() : await new Promise((t) => {
		const e = new MessageChannel();
		e.port1.onmessage = () => {
			e.port1.close(), e.port2.close(), t();
		}, e.port2.postMessage(null);
	}), t?.throwIfAborted();
}
const Zn = /* @__PURE__ */ new Map(), Qn = 100, tr = /* @__PURE__ */ new Map();
let er, ir;
function nr(t) {
	er = t;
}
let rr = Promise.resolve();
const sr = /* @__PURE__ */ new WeakMap();
function or(t, i, { ms: s, label: o } = {
	ms: Pn,
	label: "background computation"
}, a) {
	if (!t) {
		const n = e();
		return Hn(() => i(n), s, o, t, () => {
			r(n), a?.();
		});
	}
	const l = rr, c = p(l, t).then(async () => {
		t.throwIfAborted();
		const e = ir ??= n();
		let r = !1;
		const l = () => {
			r || (r = !0, ir === e && (ir = void 0), e.terminate());
		};
		try {
			return await Hn(() => i(e.api), s, o, t, () => {
				l(), a?.();
			});
		} catch (c) {
			throw l(), c;
		}
	});
	return rr = Promise.allSettled([l, c]).then(() => {}), c;
}
function ar(t, e, { signal: i, cancel: n, ...r }) {
	const s = sr.get(t);
	return s ? or(i ?? s, async (t) => await e(t), r, n) : Hn(() => e(t), r.ms, r.label, i, n);
}
function lr(t, e) {
	const i = sr.get(t), n = new Proxy(t, { get: (n, r) => {
		if ("string" == typeof r && "then" !== r) return i || "function" == typeof Reflect.get(t, r) ? (...i) => ar(t, (t) => Reflect.apply(Reflect.get(t, r), t, i), {
			...e,
			label: e.label ?? r
		}) : Reflect.get(t, r);
	} });
	return i && sr.set(n, i), n;
}
function cr(t, i) {
	if (!t) return e();
	const n = {};
	return sr.set(n, t), lr(n, {
		ms: Pn,
		...i,
		signal: t,
		cancel: () => {}
	});
}
function ur(t) {
	if ("undefined" == typeof document || "hidden" !== document.visibilityState) return;
	document.title = `${t ? "[Failed]" : "[Done]"} ${document.title.replace(/^\[(Done|Failed)\] /, "")}`;
	const e = () => {
		"hidden" !== document.visibilityState && (document.title = document.title.replace(/^\[(Done|Failed)\] /, ""), document.removeEventListener("visibilitychange", e));
	};
	document.addEventListener("visibilitychange", e);
}
function pr({ kind: t, key: e, label: i, run: n, workspaceId: r = y().name, rerun: s = !1, lockKey: h = e, signal: f }) {
	const g = `${r}:${e}`, b = Zn.get(g);
	if (b && !s) return m(b.controller.signal, f), p(b.promise, f);
	if (f?.aborted) return Promise.reject(l(f));
	if (b) {
		const s = () => pr({
			kind: t,
			key: e,
			label: i,
			run: n,
			workspaceId: r,
			lockKey: h,
			signal: f
		});
		if (b.pending?.signal?.aborted && delete b.pending, b.pending) return b.pending.requests.push({
			run: s,
			signal: f
		}), p(b.pending.promise, f);
		const o = b.controller.signal.aborted ? void 0 : b.controller.signal, a = {
			requests: [{
				run: s,
				signal: f
			}],
			signal: o,
			promise: Promise.resolve()
		};
		return a.promise = p(Promise.allSettled([b.promise]).then(() => {
			o?.throwIfAborted(), a.requests = a.requests.filter((t) => !t.signal?.aborted);
			const t = a.requests.at(-1);
			if (!t) throw l();
			const e = t.run();
			for (const i of a.requests) m(Zn.get(g)?.controller.signal, i.signal);
			return e;
		}), o), b.pending = a, p(a.promise, f);
	}
	const S = new AbortController(), w = v(S.signal, f), I = () => S.abort(f?.reason);
	f?.addEventListener("abort", I, { once: !0 });
	const T = u.getState(), A = d(t), D = (t) => {
		u.getState().jobs[g]?.controller === S && T.update(g, t);
	};
	T.dismiss(g), T.update(g, {
		id: g,
		workspaceId: r,
		kind: t,
		key: e,
		label: i,
		controller: S,
		status: c.QUEUED,
		done: 0,
		total: 0,
		visible: !A,
		message: void 0,
		detail: void 0
	}), t !== a.IMPORT && t !== a.REPROCESS || u.setState({
		localProcessingJobId: g,
		isLocalProcessing: !0
	});
	const B = `${r}:${t}`, O = tr.get(B) ?? [];
	let M, E, U;
	tr.set(B, O);
	let N = -1 / 0;
	const L = () => {
		clearTimeout(E), E = void 0, U && !S.signal.aborted && (D(U), U = void 0, N = Date.now());
	}, F = async () => (S.signal.throwIfAborted(), D({ status: c.RUNNING }), A && (M = setTimeout(() => D({ visible: !0 }), 2e3)), n({
		signal: S.signal,
		progress: (t, e, i, n) => {
			if (S.signal.aborted) return;
			const r = U?.detail ?? u.getState().jobs[g]?.detail;
			U = {
				done: t,
				total: e,
				message: i,
				...void 0 !== n ? { detail: n } : {}
			}, N === -1 / 0 || t >= e || null === n || void 0 !== n && (n?.step !== r?.step || n?.warning !== r?.warning) || "save" === n?.step || "done" === n?.step || Date.now() - N >= Qn ? L() : E ??= setTimeout(L, Qn - (Date.now() - N));
		},
		yieldNow: () => Kn(S.signal)
	}));
	let x, C = !1;
	const _ = new Promise((t, e) => {
		x = () => {
			C = !0, t();
		}, S.signal.addEventListener("abort", () => {
			C || e(l(S.signal));
		}, { once: !0 });
	}), k = {
		key: e,
		start: x,
		bypassed: !1
	}, V = _.then(async () => (S.signal.throwIfAborted(), "undefined" != typeof navigator && navigator.locks?.request ? navigator.locks.request(`${r}:${h}`, { ifAvailable: !0 }, async (e) => {
		if (!e) {
			if (A) return;
			throw D({
				status: c.ELSEWHERE,
				message: "running in another tab"
			}), new Xn(t);
		}
		return F();
	}) : F())).then((t) => {
		L();
		const e = u.getState().jobs[g]?.status === c.FAILED;
		return D({ status: S.signal.aborted ? c.CANCELLED : e ? c.FAILED : c.DONE }), A || S.signal.aborted || ur(e), t;
	}, (t) => {
		throw u.getState().jobs[g]?.status !== c.ELSEWHERE && (D({ status: S.signal.aborted ? c.CANCELLED : c.FAILED }), A || S.signal.aborted || ur(!0)), t;
	}).finally(() => {
		w(), f?.removeEventListener("abort", I), clearTimeout(M), clearTimeout(E);
		const t = u.getState().jobs[g];
		A && t?.controller === S && !t.visible && T.dismiss(g), o(u.getState())?.controller === S && T.setIsLocalProcessing(!1), Zn.get(g)?.promise === V && Zn.delete(g);
		const e = O.indexOf(k);
		if (e >= 0 && O.splice(e, 1), 0 === e) try {
			const t = er?.();
			if (O.length > 1 && !O[0].bypassed && "local" === t?.currentFileSource && null !== t.currentFileId && y().name === r) {
				const e = O.findIndex((e) => e.key.split(":")[1] === String(t.currentFileId));
				e > 0 && (O[0].bypassed = !0, O.unshift(O.splice(e, 1)[0]));
			}
		} catch {} finally {
			O[0]?.start();
		}
		0 === O.length && tr.delete(B);
	});
	return Zn.set(g, {
		kind: t,
		promise: V,
		controller: S
	}), O.push(k), 1 === O.length && x(), V;
}
export { Ln as C, Un as S, jn as _, or as a, kn as b, $n as c, Wn as d, Gn as f, Hn as g, Yn as h, lr as i, Pn as l, qn as m, pr as n, ar as o, Rn as p, nr as r, Kn as s, cr as t, zn as u, xn as v, _n as x, Fn as y };
