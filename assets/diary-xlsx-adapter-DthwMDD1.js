/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
var e = 1200, r = [
	874,
	932,
	936,
	949,
	950,
	1250,
	1251,
	1252,
	1253,
	1254,
	1255,
	1256,
	1257,
	1258,
	1e4
], t = {
	0: 1252,
	1: 65001,
	2: 65001,
	77: 1e4,
	128: 932,
	129: 949,
	130: 1361,
	134: 936,
	136: 950,
	161: 1253,
	162: 1254,
	163: 1258,
	177: 1255,
	178: 1256,
	186: 1257,
	204: 1251,
	222: 874,
	238: 1250,
	255: 1252,
	69: 6969
}, a = function(e) {
	-1 != r.indexOf(e) && (t[0] = e);
}, n = function(r) {
	e = r, a(r);
};
function s() {
	n(1200), a(1252);
}
function i(e) {
	for (var r = [], t = 0, a = e.length; t < a; ++t) r[t] = e.charCodeAt(t);
	return r;
}
function c(e) {
	for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e.charCodeAt(2 * t) + (e.charCodeAt(2 * t + 1) << 8));
	return r.join("");
}
function o(e) {
	for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e.charCodeAt(2 * t + 1) + (e.charCodeAt(2 * t) << 8));
	return r.join("");
}
var l = function(e) {
	var r = e.charCodeAt(0), t = e.charCodeAt(1);
	return 255 == r && 254 == t ? c(e.slice(2)) : 254 == r && 255 == t ? o(e.slice(2)) : 65279 == r ? e.slice(1) : e;
}, f = function(e) {
	return String.fromCharCode(e);
}, h = function(e) {
	return String.fromCharCode(e);
}, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function d(e) {
	for (var r = "", t = 0, a = 0, n = 0, s = 0, i = 0, c = 0, o = 0, l = 0; l < e.length;) s = (t = e.charCodeAt(l++)) >> 2, i = (3 & t) << 4 | (a = e.charCodeAt(l++)) >> 4, c = (15 & a) << 2 | (n = e.charCodeAt(l++)) >> 6, o = 63 & n, isNaN(a) ? c = o = 64 : isNaN(n) && (o = 64), r += u.charAt(s) + u.charAt(i) + u.charAt(c) + u.charAt(o);
	return r;
}
function p(e) {
	var r = "", t = 0, a = 0, n = 0, s = 0, i = 0, c = 0;
	"data:" == e.slice(0, 5) && (o = e.slice(0, 1024).indexOf(";base64,")) > -1 && (e = e.slice(o + 8)), e = e.replace(/[^\w\+\/\=]/g, "");
	for (var o = 0; o < e.length;) t = u.indexOf(e.charAt(o++)) << 2 | (s = u.indexOf(e.charAt(o++))) >> 4, r += String.fromCharCode(t), a = (15 & s) << 4 | (i = u.indexOf(e.charAt(o++))) >> 2, 64 !== i && (r += String.fromCharCode(a)), n = (3 & i) << 6 | (c = u.indexOf(e.charAt(o++))), 64 !== c && (r += String.fromCharCode(n));
	return r;
}
var m = function() {
	return "undefined" != typeof Buffer && "undefined" != typeof process && void 0 !== process.versions && !!process.versions.node;
}(), v = function() {
	if ("undefined" != typeof Buffer) {
		var e = !Buffer.from;
		if (!e) try {
			Buffer.from("foo", "utf8");
		} catch (r) {
			e = !0;
		}
		return e ? function(e, r) {
			return r ? new Buffer(e, r) : new Buffer(e);
		} : Buffer.from.bind(Buffer);
	}
	return function() {};
}(), g = function() {
	if ("undefined" == typeof Buffer) return !1;
	var e = v([65, 0]);
	return !!e && 1 == e.toString("utf16le").length;
}();
function b(e) {
	return m ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : "undefined" != typeof Uint8Array ? new Uint8Array(e) : new Array(e);
}
function T(e) {
	return m ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : "undefined" != typeof Uint8Array ? new Uint8Array(e) : new Array(e);
}
var E = function(e) {
	return m ? v(e, "binary") : e.split("").map(function(e) {
		return 255 & e.charCodeAt(0);
	});
};
function w(e) {
	if (Array.isArray(e)) return e.map(function(e) {
		return String.fromCharCode(e);
	}).join("");
	for (var r = [], t = 0; t < e.length; ++t) r[t] = String.fromCharCode(e[t]);
	return r.join("");
}
function A(e) {
	if ("undefined" == typeof ArrayBuffer) throw new Error("Unsupported");
	if (e instanceof ArrayBuffer) return A(new Uint8Array(e));
	for (var r = new Array(e.length), t = 0; t < e.length; ++t) r[t] = e[t];
	return r;
}
var k = m ? function(e) {
	return Buffer.concat(e.map(function(e) {
		return Buffer.isBuffer(e) ? e : v(e);
	}));
} : function(e) {
	if ("undefined" != typeof Uint8Array) {
		var r = 0, t = 0;
		for (r = 0; r < e.length; ++r) t += e[r].length;
		var a = new Uint8Array(t), n = 0;
		for (r = 0, t = 0; r < e.length; t += n, ++r) n = e[r].length, e[r] instanceof Uint8Array ? a.set(e[r], t) : "string" == typeof e[r] ? a.set(new Uint8Array(E(e[r])), t) : a.set(new Uint8Array(e[r]), t);
		return a;
	}
	return [].concat.apply([], e.map(function(e) {
		return Array.isArray(e) ? e : [].slice.call(e);
	}));
}, S = /\u0000/g, y = /[\u0001-\u0006]/g;
function C(e) {
	for (var r = "", t = e.length - 1; t >= 0;) r += e.charAt(t--);
	return r;
}
function _(e, r) {
	var t = "" + e;
	return t.length >= r ? t : De("0", r - t.length) + t;
}
function x(e, r) {
	var t = "" + e;
	return t.length >= r ? t : De(" ", r - t.length) + t;
}
function O(e, r) {
	var t = "" + e;
	return t.length >= r ? t : t + De(" ", r - t.length);
}
var R = Math.pow(2, 32);
function I(e, r) {
	return e > R || e < -R ? function(e, r) {
		var t = "" + Math.round(e);
		return t.length >= r ? t : De("0", r - t.length) + t;
	}(e, r) : function(e, r) {
		var t = "" + e;
		return t.length >= r ? t : De("0", r - t.length) + t;
	}(Math.round(e), r);
}
function N(e, r) {
	return r = r || 0, e.length >= 7 + r && 103 == (32 | e.charCodeAt(r)) && 101 == (32 | e.charCodeAt(r + 1)) && 110 == (32 | e.charCodeAt(r + 2)) && 101 == (32 | e.charCodeAt(r + 3)) && 114 == (32 | e.charCodeAt(r + 4)) && 97 == (32 | e.charCodeAt(r + 5)) && 108 == (32 | e.charCodeAt(r + 6));
}
var D = [
	["Sun", "Sunday"],
	["Mon", "Monday"],
	["Tue", "Tuesday"],
	["Wed", "Wednesday"],
	["Thu", "Thursday"],
	["Fri", "Friday"],
	["Sat", "Saturday"]
], F = [
	[
		"J",
		"Jan",
		"January"
	],
	[
		"F",
		"Feb",
		"February"
	],
	[
		"M",
		"Mar",
		"March"
	],
	[
		"A",
		"Apr",
		"April"
	],
	[
		"M",
		"May",
		"May"
	],
	[
		"J",
		"Jun",
		"June"
	],
	[
		"J",
		"Jul",
		"July"
	],
	[
		"A",
		"Aug",
		"August"
	],
	[
		"S",
		"Sep",
		"September"
	],
	[
		"O",
		"Oct",
		"October"
	],
	[
		"N",
		"Nov",
		"November"
	],
	[
		"D",
		"Dec",
		"December"
	]
], P = {
	0: "General",
	1: "0",
	2: "0.00",
	3: "#,##0",
	4: "#,##0.00",
	9: "0%",
	10: "0.00%",
	11: "0.00E+00",
	12: "# ?/?",
	13: "# ??/??",
	14: "m/d/yy",
	15: "d-mmm-yy",
	16: "d-mmm",
	17: "mmm-yy",
	18: "h:mm AM/PM",
	19: "h:mm:ss AM/PM",
	20: "h:mm",
	21: "h:mm:ss",
	22: "m/d/yy h:mm",
	37: "#,##0 ;(#,##0)",
	38: "#,##0 ;[Red](#,##0)",
	39: "#,##0.00;(#,##0.00)",
	40: "#,##0.00;[Red](#,##0.00)",
	45: "mm:ss",
	46: "[h]:mm:ss",
	47: "mmss.0",
	48: "##0.0E+0",
	49: "@",
	56: "\"上午/下午 \"hh\"時\"mm\"分\"ss\"秒 \""
}, M = {
	5: 37,
	6: 38,
	7: 39,
	8: 40,
	23: 0,
	24: 0,
	25: 0,
	26: 0,
	27: 14,
	28: 14,
	29: 14,
	30: 14,
	31: 14,
	50: 14,
	51: 14,
	52: 14,
	53: 14,
	54: 14,
	55: 14,
	56: 14,
	57: 14,
	58: 14,
	59: 1,
	60: 2,
	61: 3,
	62: 4,
	67: 9,
	68: 10,
	69: 12,
	70: 13,
	71: 14,
	72: 14,
	73: 15,
	74: 16,
	75: 17,
	76: 20,
	77: 21,
	78: 22,
	79: 45,
	80: 46,
	81: 47,
	82: 0
}, L = {
	5: "\"$\"#,##0_);\\(\"$\"#,##0\\)",
	63: "\"$\"#,##0_);\\(\"$\"#,##0\\)",
	6: "\"$\"#,##0_);[Red]\\(\"$\"#,##0\\)",
	64: "\"$\"#,##0_);[Red]\\(\"$\"#,##0\\)",
	7: "\"$\"#,##0.00_);\\(\"$\"#,##0.00\\)",
	65: "\"$\"#,##0.00_);\\(\"$\"#,##0.00\\)",
	8: "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)",
	66: "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)",
	41: "_(* #,##0_);_(* \\(#,##0\\);_(* \"-\"_);_(@_)",
	42: "_(\"$\"* #,##0_);_(\"$\"* \\(#,##0\\);_(\"$\"* \"-\"_);_(@_)",
	43: "_(* #,##0.00_);_(* \\(#,##0.00\\);_(* \"-\"??_);_(@_)",
	44: "_(\"$\"* #,##0.00_);_(\"$\"* \\(#,##0.00\\);_(\"$\"* \"-\"??_);_(@_)"
};
function U(e, r, t) {
	for (var a = e < 0 ? -1 : 1, n = e * a, s = 0, i = 1, c = 0, o = 1, l = 0, f = 0, h = Math.floor(n); l < r && (c = (h = Math.floor(n)) * i + s, f = h * l + o, !(n - h < 5e-8));) n = 1 / (n - h), s = i, i = c, o = l, l = f;
	if (f > r && (l > r ? (f = o, c = s) : (f = l, c = i)), !t) return [
		0,
		a * c,
		f
	];
	var u = Math.floor(a * c / f);
	return [
		u,
		a * c - u * f,
		f
	];
}
function B(e, r, t) {
	if (e > 2958465 || e < 0) return null;
	var a = 0 | (e = function(e) {
		var r = e.toPrecision(16);
		if (r.indexOf("e") > -1) {
			var t = r.slice(0, r.indexOf("e"));
			return (t = t.indexOf(".") > -1 ? t.slice(0, "0." == t.slice(0, 2) ? 17 : 16) : t.slice(0, 15) + De("0", t.length - 15)) + r.slice(r.indexOf("e"));
		}
		var a = r.indexOf(".") > -1 ? r.slice(0, "0." == r.slice(0, 2) ? 17 : 16) : r.slice(0, 15) + De("0", r.length - 15);
		return Number(a);
	}(e)), n = Math.floor(86400 * (e - a)), s = 0, i = [], c = {
		D: a,
		T: n,
		u: 86400 * (e - a) - n,
		y: 0,
		m: 0,
		d: 0,
		H: 0,
		M: 0,
		S: 0,
		q: 0
	};
	if (Math.abs(c.u) < 1e-6 && (c.u = 0), r && r.date1904 && (a += 1462), c.u > .9999 && (c.u = 0, 86400 == ++n && (c.T = n = 0, ++a, ++c.D)), 60 === a) i = t ? [
		1317,
		10,
		29
	] : [
		1900,
		2,
		29
	], s = 3;
	else if (0 === a) i = t ? [
		1317,
		8,
		29
	] : [
		1900,
		1,
		0
	], s = 6;
	else {
		a > 60 && --a;
		var o = new Date(1900, 0, 1);
		o.setDate(o.getDate() + a - 1), i = [
			o.getFullYear(),
			o.getMonth() + 1,
			o.getDate()
		], s = o.getDay(), a < 60 && (s = (s + 6) % 7), t && (s = function(e, r) {
			r[0] -= 581;
			var t = e.getDay();
			return e < 60 && (t = (t + 6) % 7), t;
		}(o, i));
	}
	return c.y = i[0], c.m = i[1], c.d = i[2], c.S = n % 60, n = Math.floor(n / 60), c.M = n % 60, n = Math.floor(n / 60), c.H = n, c.q = s, c;
}
function H(e) {
	return -1 == e.indexOf(".") ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function W(e) {
	if (!isFinite(e)) return isNaN(e) ? "#NUM!" : "#DIV/0!";
	var r, t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E);
	return r = t >= -4 && t <= -1 ? e.toPrecision(10 + t) : Math.abs(t) <= 9 ? function(e) {
		var r = e < 0 ? 12 : 11, t = H(e.toFixed(12));
		return t.length <= r || (t = e.toPrecision(10)).length <= r ? t : e.toExponential(5);
	}(e) : 10 === t ? e.toFixed(10).substr(0, 12) : function(e) {
		var r = H(e.toFixed(11));
		return r.length > (e < 0 ? 12 : 11) || "0" === r || "-0" === r ? e.toPrecision(6) : r;
	}(e), H(function(e) {
		return -1 == e.indexOf("E") ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
	}(r.toUpperCase()));
}
function z(e, r) {
	switch (typeof e) {
		case "string": return e;
		case "boolean": return e ? "TRUE" : "FALSE";
		case "number": return (0 | e) === e ? e.toString(10) : W(e);
		case "undefined": return "";
		case "object":
			if (null == e) return "";
			if (e instanceof Date) return le(14, Se(e, r && r.date1904), r);
	}
	throw new Error("unsupported value in General format: " + e);
}
function V(e, r, t, a) {
	var n, s = "", i = 0, c = 0, o = t.y, l = 0;
	switch (e) {
		case 98: o = t.y + 543;
		case 121:
			switch (r.length) {
				case 1:
				case 2:
					n = o % 100, l = 2;
					break;
				default: n = o % 1e4, l = 4;
			}
			break;
		case 109:
			switch (r.length) {
				case 1:
				case 2:
					n = t.m, l = r.length;
					break;
				case 3: return F[t.m - 1][1];
				case 5: return F[t.m - 1][0];
				default: return F[t.m - 1][2];
			}
			break;
		case 100:
			switch (r.length) {
				case 1:
				case 2:
					n = t.d, l = r.length;
					break;
				case 3: return D[t.q][0];
				default: return D[t.q][1];
			}
			break;
		case 104:
			switch (r.length) {
				case 1:
				case 2:
					n = 1 + (t.H + 11) % 12, l = r.length;
					break;
				default: throw "bad hour format: " + r;
			}
			break;
		case 72:
			switch (r.length) {
				case 1:
				case 2:
					n = t.H, l = r.length;
					break;
				default: throw "bad hour format: " + r;
			}
			break;
		case 77:
			switch (r.length) {
				case 1:
				case 2:
					n = t.M, l = r.length;
					break;
				default: throw "bad minute format: " + r;
			}
			break;
		case 115:
			if ("s" != r && "ss" != r && ".0" != r && ".00" != r && ".000" != r) throw "bad second format: " + r;
			return 0 !== t.u || "s" != r && "ss" != r ? (c = a >= 2 ? 3 === a ? 1e3 : 100 : 1 === a ? 10 : 1, (i = Math.round(c * (t.S + t.u))) >= 60 * c && (i = 0), "s" === r ? 0 === i ? "0" : "" + i / c : (s = _(i, 2 + a), "ss" === r ? s.substr(0, 2) : "." + s.substr(2, r.length - 1))) : _(t.S, r.length);
		case 90:
			switch (r) {
				case "[h]":
				case "[hh]":
					n = 24 * t.D + t.H;
					break;
				case "[m]":
				case "[mm]":
					n = 60 * (24 * t.D + t.H) + t.M;
					break;
				case "[s]":
				case "[ss]":
					n = 60 * (60 * (24 * t.D + t.H) + t.M) + (0 == a ? Math.round(t.S + t.u) : t.S);
					break;
				default: throw "bad abstime format: " + r;
			}
			l = 3 === r.length ? 1 : 2;
			break;
		case 101: n = o, l = 1;
	}
	return l > 0 ? _(n, l) : "";
}
function G(e) {
	if (e.length <= 3) return e;
	for (var r = e.length % 3, t = e.substr(0, r); r != e.length; r += 3) t += (t.length > 0 ? "," : "") + e.substr(r, 3);
	return t;
}
var X = /%/g;
function j(e, r) {
	var t, a = e.indexOf("E") - e.indexOf(".") - 1;
	if (e.match(/^#+0.0E\+0$/)) {
		if (0 == r) return "0.0E+0";
		if (r < 0) return "-" + j(e, -r);
		var n = e.indexOf(".");
		-1 === n && (n = e.indexOf("E"));
		var s = Math.floor(Math.log(r) * Math.LOG10E) % n;
		if (s < 0 && (s += n), -1 === (t = (r / Math.pow(10, s)).toPrecision(a + 1 + (n + s) % n)).indexOf("e")) {
			var i = Math.floor(Math.log(r) * Math.LOG10E);
			for (-1 === t.indexOf(".") ? t = t.charAt(0) + "." + t.substr(1) + "E+" + (i - t.length + s) : t += "E+" + (i - s); "0." === t.substr(0, 2);) t = (t = t.charAt(0) + t.substr(2, n) + "." + t.substr(2 + n)).replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
			t = t.replace(/\+-/, "-");
		}
		t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(e, r, t, a) {
			return r + t + a.substr(0, (n + s) % n) + "." + a.substr(s) + "E";
		});
	} else t = r.toExponential(a);
	return e.match(/E\+00$/) && t.match(/e[+-]\d$/) && (t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1)), e.match(/E\-/) && t.match(/e\+/) && (t = t.replace(/e\+/, "e")), t.replace("e", "E");
}
var K = /# (\?+)( ?)\/( ?)(\d+)/, Y = /^#*0*\.([0#]+)/, J = /\)[^)]*[0#]/, Z = /\(###\) ###\\?-####/;
function q(e) {
	for (var r, t = "", a = 0; a != e.length; ++a) switch (r = e.charCodeAt(a)) {
		case 35: break;
		case 63:
			t += " ";
			break;
		case 48:
			t += "0";
			break;
		default: t += String.fromCharCode(r);
	}
	return t;
}
function Q(e, r) {
	var t = Math.pow(10, r);
	return "" + Math.round(e * t) / t;
}
function ee(e, r) {
	var t = e - Math.floor(e), a = Math.pow(10, r);
	return r < ("" + Math.round(t * a)).length ? 0 : Math.round(t * a);
}
function re(e, r, t) {
	if (40 === e.charCodeAt(0) && !r.match(J)) {
		var a = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
		return t >= 0 ? re("n", a, t) : "(" + re("n", a, -t) + ")";
	}
	if (44 === r.charCodeAt(r.length - 1)) return function(e, r, t) {
		for (var a = r.length - 1; 44 === r.charCodeAt(a - 1);) --a;
		return ne(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)));
	}(e, r, t);
	if (-1 !== r.indexOf("%")) return function(e, r, t) {
		var a = r.replace(X, ""), n = r.length - a.length;
		return ne(e, a, t * Math.pow(10, 2 * n)) + De("%", n);
	}(e, r, t);
	if (-1 !== r.indexOf("E")) return j(r, t);
	if (36 === r.charCodeAt(0)) return "$" + re(e, r.substr(" " == r.charAt(1) ? 2 : 1), t);
	var n, s, i, c, o = Math.abs(t), l = t < 0 ? "-" : "";
	if (r.match(/^00+$/)) return l + I(o, r.length);
	if (r.match(/^[#?]+$/)) return "0" === (n = I(t, 0)) && (n = ""), n.length > r.length ? n : q(r.substr(0, r.length - n.length)) + n;
	if (s = r.match(K)) return function(e, r, t) {
		var a = parseInt(e[4], 10), n = Math.round(r * a), s = Math.floor(n / a), i = n - s * a, c = a;
		return t + (0 === s ? "" : "" + s) + " " + (0 === i ? De(" ", e[1].length + 1 + e[4].length) : x(i, e[1].length) + e[2] + "/" + e[3] + _(c, e[4].length));
	}(s, o, l);
	if (r.match(/^#+0+$/)) return l + I(o, r.length - r.indexOf("0"));
	if (s = r.match(Y)) return n = Q(t, s[1].length).replace(/^([^\.]+)$/, "$1." + q(s[1])).replace(/\.$/, "." + q(s[1])).replace(/\.(\d*)$/, function(e, r) {
		return "." + r + De("0", q(s[1]).length - r.length);
	}), -1 !== r.indexOf("0.") ? n : n.replace(/^0\./, ".");
	if (r = r.replace(/^#+([0.])/, "$1"), s = r.match(/^(0*)\.(#*)$/)) return l + Q(o, s[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, s[1].length ? "0." : ".");
	if (s = r.match(/^#{1,3},##0(\.?)$/)) return l + G(I(o, 0));
	if (s = r.match(/^#,##0\.([#0]*0)$/)) return t < 0 ? "-" + re(e, r, -t) : G("" + (Math.floor(t) + function(e, r) {
		return r < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, r))).length ? 1 : 0;
	}(t, s[1].length))) + "." + _(ee(t, s[1].length), s[1].length);
	if (s = r.match(/^#,#*,#0/)) return re(e, r.replace(/^#,#*,/, ""), t);
	if (s = r.match(/^([0#]+)(\\?-([0#]+))+$/)) return n = C(re(e, r.replace(/[\\-]/g, ""), t)), i = 0, C(C(r.replace(/\\/g, "")).replace(/[0#]/g, function(e) {
		return i < n.length ? n.charAt(i++) : "0" === e ? "0" : "";
	}));
	if (r.match(Z)) return "(" + (n = re(e, "##########", t)).substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
	var f = "";
	if (s = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return i = Math.min(s[4].length, 7), c = U(o, Math.pow(10, i) - 1, !1), n = "" + l, " " == (f = ne("n", s[1], c[1])).charAt(f.length - 1) && (f = f.substr(0, f.length - 1) + "0"), n += f + s[2] + "/" + s[3], (f = O(c[2], i)).length < s[4].length && (f = q(s[4].substr(s[4].length - f.length)) + f), n += f;
	if (s = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return i = Math.min(Math.max(s[1].length, s[4].length), 7), l + ((c = U(o, Math.pow(10, i) - 1, !0))[0] || (c[1] ? "" : "0")) + " " + (c[1] ? x(c[1], i) + s[2] + "/" + s[3] + O(c[2], i) : De(" ", 2 * i + 1 + s[2].length + s[3].length));
	if (s = r.match(/^[#0?]+$/)) return n = I(t, 0), r.length <= n.length ? n : q(r.substr(0, r.length - n.length)) + n;
	if (s = r.match(/^([#0?]+)\.([#0]+)$/)) {
		n = "" + t.toFixed(Math.min(s[2].length, 10)).replace(/([^0])0+$/, "$1"), i = n.indexOf(".");
		var h = r.indexOf(".") - i, u = r.length - n.length - h;
		return q(r.substr(0, h) + n + r.substr(r.length - u));
	}
	if (s = r.match(/^00,000\.([#0]*0)$/)) return i = ee(t, s[1].length), t < 0 ? "-" + re(e, r, -t) : G(function(e) {
		return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? 0 | e : e - 1 | 0) : "" + Math.floor(e);
	}(t)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(e) {
		return "00," + (e.length < 3 ? _(0, 3 - e.length) : "") + e;
	}) + "." + _(i, s[1].length);
	switch (r) {
		case "###,##0.00": return re(e, "#,##0.00", t);
		case "###,###":
		case "##,###":
		case "#,###":
			var d = G(I(o, 0));
			return "0" !== d ? l + d : "";
		case "###,###.00": return re(e, "###,##0.00", t).replace(/^0\./, ".");
		case "#,###.00": return re(e, "#,##0.00", t).replace(/^0\./, ".");
	}
	throw new Error("unsupported format |" + r + "|");
}
function te(e, r) {
	var t, a = e.indexOf("E") - e.indexOf(".") - 1;
	if (e.match(/^#+0.0E\+0$/)) {
		if (0 == r) return "0.0E+0";
		if (r < 0) return "-" + te(e, -r);
		var n = e.indexOf(".");
		-1 === n && (n = e.indexOf("E"));
		var s = Math.floor(Math.log(r) * Math.LOG10E) % n;
		if (s < 0 && (s += n), !(t = (r / Math.pow(10, s)).toPrecision(a + 1 + (n + s) % n)).match(/[Ee]/)) {
			var i = Math.floor(Math.log(r) * Math.LOG10E);
			-1 === t.indexOf(".") ? t = t.charAt(0) + "." + t.substr(1) + "E+" + (i - t.length + s) : t += "E+" + (i - s), t = t.replace(/\+-/, "-");
		}
		t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(e, r, t, a) {
			return r + t + a.substr(0, (n + s) % n) + "." + a.substr(s) + "E";
		});
	} else t = r.toExponential(a);
	return e.match(/E\+00$/) && t.match(/e[+-]\d$/) && (t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1)), e.match(/E\-/) && t.match(/e\+/) && (t = t.replace(/e\+/, "e")), t.replace("e", "E");
}
function ae(e, r, t) {
	if (40 === e.charCodeAt(0) && !r.match(J)) {
		var a = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
		return t >= 0 ? ae("n", a, t) : "(" + ae("n", a, -t) + ")";
	}
	if (44 === r.charCodeAt(r.length - 1)) return function(e, r, t) {
		for (var a = r.length - 1; 44 === r.charCodeAt(a - 1);) --a;
		return ne(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)));
	}(e, r, t);
	if (-1 !== r.indexOf("%")) return function(e, r, t) {
		var a = r.replace(X, ""), n = r.length - a.length;
		return ne(e, a, t * Math.pow(10, 2 * n)) + De("%", n);
	}(e, r, t);
	if (-1 !== r.indexOf("E")) return te(r, t);
	if (36 === r.charCodeAt(0)) return "$" + ae(e, r.substr(" " == r.charAt(1) ? 2 : 1), t);
	var n, s, i, c, o = Math.abs(t), l = t < 0 ? "-" : "";
	if (r.match(/^00+$/)) return l + _(o, r.length);
	if (r.match(/^[#?]+$/)) return n = "" + t, 0 === t && (n = ""), n.length > r.length ? n : q(r.substr(0, r.length - n.length)) + n;
	if (s = r.match(K)) return function(e, r, t) {
		return t + (0 === r ? "" : "" + r) + De(" ", e[1].length + 2 + e[4].length);
	}(s, o, l);
	if (r.match(/^#+0+$/)) return l + _(o, r.length - r.indexOf("0"));
	if (s = r.match(Y)) return n = (n = ("" + t).replace(/^([^\.]+)$/, "$1." + q(s[1])).replace(/\.$/, "." + q(s[1]))).replace(/\.(\d*)$/, function(e, r) {
		return "." + r + De("0", q(s[1]).length - r.length);
	}), -1 !== r.indexOf("0.") ? n : n.replace(/^0\./, ".");
	if (r = r.replace(/^#+([0.])/, "$1"), s = r.match(/^(0*)\.(#*)$/)) return l + ("" + o).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, s[1].length ? "0." : ".");
	if (s = r.match(/^#{1,3},##0(\.?)$/)) return l + G("" + o);
	if (s = r.match(/^#,##0\.([#0]*0)$/)) return t < 0 ? "-" + ae(e, r, -t) : G("" + t) + "." + De("0", s[1].length);
	if (s = r.match(/^#,#*,#0/)) return ae(e, r.replace(/^#,#*,/, ""), t);
	if (s = r.match(/^([0#]+)(\\?-([0#]+))+$/)) return n = C(ae(e, r.replace(/[\\-]/g, ""), t)), i = 0, C(C(r.replace(/\\/g, "")).replace(/[0#]/g, function(e) {
		return i < n.length ? n.charAt(i++) : "0" === e ? "0" : "";
	}));
	if (r.match(Z)) return "(" + (n = ae(e, "##########", t)).substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
	var f = "";
	if (s = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) return i = Math.min(s[4].length, 7), c = U(o, Math.pow(10, i) - 1, !1), n = "" + l, " " == (f = ne("n", s[1], c[1])).charAt(f.length - 1) && (f = f.substr(0, f.length - 1) + "0"), n += f + s[2] + "/" + s[3], (f = O(c[2], i)).length < s[4].length && (f = q(s[4].substr(s[4].length - f.length)) + f), n += f;
	if (s = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) return i = Math.min(Math.max(s[1].length, s[4].length), 7), l + ((c = U(o, Math.pow(10, i) - 1, !0))[0] || (c[1] ? "" : "0")) + " " + (c[1] ? x(c[1], i) + s[2] + "/" + s[3] + O(c[2], i) : De(" ", 2 * i + 1 + s[2].length + s[3].length));
	if (s = r.match(/^[#0?]+$/)) return n = "" + t, r.length <= n.length ? n : q(r.substr(0, r.length - n.length)) + n;
	if (s = r.match(/^([#0]+)\.([#0]+)$/)) {
		n = "" + t.toFixed(Math.min(s[2].length, 10)).replace(/([^0])0+$/, "$1"), i = n.indexOf(".");
		var h = r.indexOf(".") - i, u = r.length - n.length - h;
		return q(r.substr(0, h) + n + r.substr(r.length - u));
	}
	if (s = r.match(/^00,000\.([#0]*0)$/)) return t < 0 ? "-" + ae(e, r, -t) : G("" + t).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(e) {
		return "00," + (e.length < 3 ? _(0, 3 - e.length) : "") + e;
	}) + "." + _(0, s[1].length);
	switch (r) {
		case "###,###":
		case "##,###":
		case "#,###":
			var d = G("" + o);
			return "0" !== d ? l + d : "";
		default: if (r.match(/\.[0#?]*$/)) return ae(e, r.slice(0, r.lastIndexOf(".")), t) + q(r.slice(r.lastIndexOf(".")));
	}
	throw new Error("unsupported format |" + r + "|");
}
function ne(e, r, t) {
	return (0 | t) === t ? ae(e, r, t) : re(e, r, t);
}
var se = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function ie(e) {
	for (var r = 0, t = "", a = ""; r < e.length;) switch (t = e.charAt(r)) {
		case "G":
			N(e, r) && (r += 6), r++;
			break;
		case "\"":
			for (; 34 !== e.charCodeAt(++r) && r < e.length;);
			++r;
			break;
		case "\\":
		case "_":
			r += 2;
			break;
		case "@":
			++r;
			break;
		case "B":
		case "b": if ("1" === e.charAt(r + 1) || "2" === e.charAt(r + 1)) return !0;
		case "M":
		case "D":
		case "Y":
		case "H":
		case "S":
		case "E":
		case "m":
		case "d":
		case "y":
		case "h":
		case "s":
		case "e":
		case "g": return !0;
		case "A":
		case "a":
		case "上":
			if ("A/P" === e.substr(r, 3).toUpperCase()) return !0;
			if ("AM/PM" === e.substr(r, 5).toUpperCase()) return !0;
			if ("上午/下午" === e.substr(r, 5).toUpperCase()) return !0;
			++r;
			break;
		case "[":
			for (a = t; "]" !== e.charAt(r++) && r < e.length;) a += e.charAt(r);
			if (a.match(se)) return !0;
			break;
		case ".":
		case "0":
		case "#":
			for (; r < e.length && ("0#?.,E+-%".indexOf(t = e.charAt(++r)) > -1 || "\\" == t && "-" == e.charAt(r + 1) && "0#".indexOf(e.charAt(r + 2)) > -1););
			break;
		case "?":
			for (; e.charAt(++r) === t;);
			break;
		case "*":
			++r, " " != e.charAt(r) && "*" != e.charAt(r) || ++r;
			break;
		case "(":
		case ")":
			++r;
			break;
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
			for (; r < e.length && "0123456789".indexOf(e.charAt(++r)) > -1;);
			break;
		default: ++r;
	}
	return !1;
}
var ce = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function oe(e, r) {
	if (null == r) return !1;
	var t = parseFloat(r[2]);
	switch (r[1]) {
		case "=":
			if (e == t) return !0;
			break;
		case ">":
			if (e > t) return !0;
			break;
		case "<":
			if (e < t) return !0;
			break;
		case "<>":
			if (e != t) return !0;
			break;
		case ">=":
			if (e >= t) return !0;
			break;
		case "<=": if (e <= t) return !0;
	}
	return !1;
}
function le(e, r, t) {
	null == t && (t = {});
	var a = "";
	switch (typeof e) {
		case "string":
			a = "m/d/yy" == e && t.dateNF ? t.dateNF : e;
			break;
		case "number": null == (a = 14 == e && t.dateNF ? t.dateNF : (null != t.table ? t.table : P)[e]) && (a = t.table && t.table[M[e]] || P[M[e]]), null == a && (a = L[e] || "General");
	}
	if (N(a, 0)) return z(r, t);
	r instanceof Date && (r = Se(r, t.date1904));
	var n = function(e, r) {
		var t = function(e) {
			for (var r = [], t = !1, a = 0, n = 0; a < e.length; ++a) switch (e.charCodeAt(a)) {
				case 34:
					t = !t;
					break;
				case 95:
				case 42:
				case 92:
					++a;
					break;
				case 59: r[r.length] = e.substr(n, a - n), n = a + 1;
			}
			if (r[r.length] = e.substr(n), !0 === t) throw new Error("Format |" + e + "| unterminated string ");
			return r;
		}(e), a = t.length, n = t[a - 1].indexOf("@");
		if (a < 4 && n > -1 && --a, t.length > 4) throw new Error("cannot find right format for |" + t.join("|") + "|");
		if ("number" != typeof r) return [4, 4 === t.length || n > -1 ? t[t.length - 1] : "@"];
		switch ("number" != typeof r || isFinite(r) || (r = 0), t.length) {
			case 1:
				t = n > -1 ? [
					"General",
					"General",
					"General",
					t[0]
				] : [
					t[0],
					t[0],
					t[0],
					"@"
				];
				break;
			case 2:
				t = n > -1 ? [
					t[0],
					t[0],
					t[0],
					t[1]
				] : [
					t[0],
					t[1],
					t[0],
					"@"
				];
				break;
			case 3: t = n > -1 ? [
				t[0],
				t[1],
				t[0],
				t[2]
			] : [
				t[0],
				t[1],
				t[2],
				"@"
			];
		}
		var s = r > 0 ? t[0] : r < 0 ? t[1] : t[2];
		if (-1 === t[0].indexOf("[") && -1 === t[1].indexOf("[")) return [a, s];
		if (null != t[0].match(/\[[=<>]/) || null != t[1].match(/\[[=<>]/)) {
			var i = t[0].match(ce), c = t[1].match(ce);
			return oe(r, i) ? [a, t[0]] : oe(r, c) ? [a, t[1]] : [a, t[null != i && null != c ? 2 : 1]];
		}
		return [a, s];
	}(a, r);
	if (N(n[1])) return z(r, t);
	if (!0 === r) r = "TRUE";
	else if (!1 === r) r = "FALSE";
	else {
		if ("" === r || null == r) return "";
		if (isNaN(r) && n[1].indexOf("0") > -1) return "#NUM!";
		if (!isFinite(r) && n[1].indexOf("0") > -1) return "#DIV/0!";
	}
	return function(e, r, t, a) {
		for (var n, s, i, c = [], o = "", l = 0, f = "", h = "t", u = "H"; l < e.length;) switch (f = e.charAt(l)) {
			case "G":
				if (!N(e, l)) throw new Error("unrecognized character " + f + " in " + e);
				c[c.length] = {
					t: "G",
					v: "General"
				}, l += 7;
				break;
			case "\"":
				for (o = ""; 34 !== (i = e.charCodeAt(++l)) && l < e.length;) o += String.fromCharCode(i);
				c[c.length] = {
					t: "t",
					v: o
				}, ++l;
				break;
			case "\\":
				var d = e.charAt(++l), p = "(" === d || ")" === d ? d : "t";
				c[c.length] = {
					t: p,
					v: d
				}, ++l;
				break;
			case "_":
				c[c.length] = {
					t: "t",
					v: " "
				}, l += 2;
				break;
			case "@":
				c[c.length] = {
					t: "T",
					v: r
				}, ++l;
				break;
			case "B":
			case "b": if ("1" === e.charAt(l + 1) || "2" === e.charAt(l + 1)) {
				if (null == n && null == (n = B(r, t, "2" === e.charAt(l + 1)))) return "";
				c[c.length] = {
					t: "X",
					v: e.substr(l, 2)
				}, h = f, l += 2;
				break;
			}
			case "M":
			case "D":
			case "Y":
			case "H":
			case "S":
			case "E": f = f.toLowerCase();
			case "m":
			case "d":
			case "y":
			case "h":
			case "s":
			case "e":
			case "g":
				if (r < 0) return "";
				if (null == n && null == (n = B(r, t))) return "";
				for (o = f; ++l < e.length && e.charAt(l).toLowerCase() === f;) o += f;
				"m" === f && "h" === h.toLowerCase() && (f = "M"), "h" === f && (f = u), c[c.length] = {
					t: f,
					v: o
				}, h = f;
				break;
			case "A":
			case "a":
			case "上":
				var m = {
					t: f,
					v: f
				};
				if (null == n && (n = B(r, t)), "A/P" === e.substr(l, 3).toUpperCase() ? (null != n && (m.v = n.H >= 12 ? e.charAt(l + 2) : f), m.t = "T", u = "h", l += 3) : "AM/PM" === e.substr(l, 5).toUpperCase() ? (null != n && (m.v = n.H >= 12 ? "PM" : "AM"), m.t = "T", l += 5, u = "h") : "上午/下午" === e.substr(l, 5).toUpperCase() ? (null != n && (m.v = n.H >= 12 ? "下午" : "上午"), m.t = "T", l += 5, u = "h") : (m.t = "t", ++l), null == n && "T" === m.t) return "";
				c[c.length] = m, h = f;
				break;
			case "[":
				for (o = f; "]" !== e.charAt(l++) && l < e.length;) o += e.charAt(l);
				if ("]" !== o.slice(-1)) throw "unterminated \"[\" block: |" + o + "|";
				if (o.match(se)) {
					if (null == n && null == (n = B(r, t))) return "";
					c[c.length] = {
						t: "Z",
						v: o.toLowerCase()
					}, h = o.charAt(1);
				} else o.indexOf("$") > -1 && (o = (o.match(/\$([^-\[\]]*)/) || [])[1] || "$", ie(e) || (c[c.length] = {
					t: "t",
					v: o
				}));
				break;
			case ".": if (null != n) {
				for (o = f; ++l < e.length && "0" === (f = e.charAt(l));) o += f;
				c[c.length] = {
					t: "s",
					v: o
				};
				break;
			}
			case "0":
			case "#":
				for (o = f; ++l < e.length && "0#?.,E+-%".indexOf(f = e.charAt(l)) > -1;) o += f;
				c[c.length] = {
					t: "n",
					v: o
				};
				break;
			case "?":
				for (o = f; e.charAt(++l) === f;) o += f;
				c[c.length] = {
					t: f,
					v: o
				}, h = f;
				break;
			case "*":
				++l, " " != e.charAt(l) && "*" != e.charAt(l) || ++l;
				break;
			case "(":
			case ")":
				c[c.length] = {
					t: 1 === a ? "t" : f,
					v: f
				}, ++l;
				break;
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
				for (o = f; l < e.length && "0123456789".indexOf(e.charAt(++l)) > -1;) o += e.charAt(l);
				c[c.length] = {
					t: "D",
					v: o
				};
				break;
			case " ":
				c[c.length] = {
					t: f,
					v: f
				}, ++l;
				break;
			case "$":
				c[c.length] = {
					t: "t",
					v: "$"
				}, ++l;
				break;
			default:
				if (-1 === ",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(f)) throw new Error("unrecognized character " + f + " in " + e);
				c[c.length] = {
					t: "t",
					v: f
				}, ++l;
		}
		var v, g, b = 0, T = 0;
		for (l = c.length - 1, h = "t"; l >= 0; --l) switch (c[l].t) {
			case "h":
			case "H":
				c[l].t = u, h = "h", b < 1 && (b = 1);
				break;
			case "s": (v = c[l].v.match(/\.0+$/)) && (T = Math.max(T, v[0].length - 1), b = 4), b < 3 && (b = 3);
			case "d":
			case "y":
			case "e":
				h = c[l].t;
				break;
			case "M":
				h = c[l].t, b < 2 && (b = 2);
				break;
			case "m":
				"s" === h && (c[l].t = "M", b < 2 && (b = 2));
				break;
			case "X": break;
			case "Z": b < 1 && c[l].v.match(/[Hh]/) && (b = 1), b < 2 && c[l].v.match(/[Mm]/) && (b = 2), b < 3 && c[l].v.match(/[Ss]/) && (b = 3);
		}
		switch (b) {
			case 0: break;
			case 1:
			case 2:
			case 3:
				n.u >= .5 && (n.u = 0, ++n.S), n.S >= 60 && (n.S = 0, ++n.M), n.M >= 60 && (n.M = 0, ++n.H), n.H >= 24 && (n.H = 0, ++n.D, (g = B(n.D)).u = n.u, g.S = n.S, g.M = n.M, g.H = n.H, n = g);
				break;
			case 4:
				switch (T) {
					case 1:
						n.u = Math.round(10 * n.u) / 10;
						break;
					case 2:
						n.u = Math.round(100 * n.u) / 100;
						break;
					case 3: n.u = Math.round(1e3 * n.u) / 1e3;
				}
				n.u >= 1 && (n.u = 0, ++n.S), n.S >= 60 && (n.S = 0, ++n.M), n.M >= 60 && (n.M = 0, ++n.H), n.H >= 24 && (n.H = 0, ++n.D, (g = B(n.D)).u = n.u, g.S = n.S, g.M = n.M, g.H = n.H, n = g);
		}
		var E, w = "";
		for (l = 0; l < c.length; ++l) switch (c[l].t) {
			case "t":
			case "T":
			case " ":
			case "D": break;
			case "X":
				c[l].v = "", c[l].t = ";";
				break;
			case "d":
			case "m":
			case "y":
			case "h":
			case "H":
			case "M":
			case "s":
			case "e":
			case "b":
			case "Z":
				c[l].v = V(c[l].t.charCodeAt(0), c[l].v, n, T), c[l].t = "t";
				break;
			case "n":
			case "?":
				for (E = l + 1; null != c[E] && ("?" === (f = c[E].t) || "D" === f || (" " === f || "t" === f) && null != c[E + 1] && ("?" === c[E + 1].t || "t" === c[E + 1].t && "/" === c[E + 1].v) || "(" === c[l].t && (" " === f || "n" === f || ")" === f) || "t" === f && ("/" === c[E].v || " " === c[E].v && null != c[E + 1] && "?" == c[E + 1].t));) c[l].v += c[E].v, c[E] = {
					v: "",
					t: ";"
				}, ++E;
				w += c[l].v, l = E - 1;
				break;
			case "G": c[l].t = "t", c[l].v = z(r, t);
		}
		var A, k, S = "";
		if (w.length > 0) {
			40 == w.charCodeAt(0) ? (A = r < 0 && 45 === w.charCodeAt(0) ? -r : r, k = ne("n", w, A)) : (k = ne("n", w, A = r < 0 && a > 1 ? -r : r), A < 0 && c[0] && "t" == c[0].t && (k = k.substr(1), c[0].v = "-" + c[0].v)), E = k.length - 1;
			var y = c.length;
			for (l = 0; l < c.length; ++l) if (null != c[l] && "t" != c[l].t && c[l].v.indexOf(".") > -1) {
				y = l;
				break;
			}
			var C = c.length;
			if (y === c.length && -1 === k.indexOf("E")) {
				for (l = c.length - 1; l >= 0; --l) null != c[l] && -1 !== "n?".indexOf(c[l].t) && (E >= c[l].v.length - 1 ? (E -= c[l].v.length, c[l].v = k.substr(E + 1, c[l].v.length)) : E < 0 ? c[l].v = "" : (c[l].v = k.substr(0, E + 1), E = -1), c[l].t = "t", C = l);
				E >= 0 && C < c.length && (c[C].v = k.substr(0, E + 1) + c[C].v);
			} else if (y !== c.length && -1 === k.indexOf("E")) {
				for (E = k.indexOf(".") - 1, l = y; l >= 0; --l) if (null != c[l] && -1 !== "n?".indexOf(c[l].t)) {
					for (s = c[l].v.indexOf(".") > -1 && l === y ? c[l].v.indexOf(".") - 1 : c[l].v.length - 1, S = c[l].v.substr(s + 1); s >= 0; --s) E >= 0 && ("0" === c[l].v.charAt(s) || "#" === c[l].v.charAt(s)) && (S = k.charAt(E--) + S);
					c[l].v = S, c[l].t = "t", C = l;
				}
				for (E >= 0 && C < c.length && (c[C].v = k.substr(0, E + 1) + c[C].v), E = k.indexOf(".") + 1, l = y; l < c.length; ++l) if (null != c[l] && (-1 !== "n?(".indexOf(c[l].t) || l === y)) {
					for (s = c[l].v.indexOf(".") > -1 && l === y ? c[l].v.indexOf(".") + 1 : 0, S = c[l].v.substr(0, s); s < c[l].v.length; ++s) E < k.length && (S += k.charAt(E++));
					c[l].v = S, c[l].t = "t", C = l;
				}
			}
		}
		for (l = 0; l < c.length; ++l) null != c[l] && "n?".indexOf(c[l].t) > -1 && (A = a > 1 && r < 0 && l > 0 && "-" === c[l - 1].v ? -r : r, c[l].v = ne(c[l].t, c[l].v, A), c[l].t = "t");
		var _ = "";
		for (l = 0; l !== c.length; ++l) null != c[l] && (_ += c[l].v);
		return _;
	}(n[1], r, t, n[0]);
}
function fe(e, r) {
	if ("number" != typeof r) {
		r = +r || -1;
		for (var t = 0; t < 392; ++t) if (null != P[t]) {
			if (P[t] == e) {
				r = t;
				break;
			}
		} else r < 0 && (r = t);
		r < 0 && (r = 391);
	}
	return P[r] = e, r;
}
function he() {
	var e;
	e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = "\"上午/下午 \"hh\"時\"mm\"分\"ss\"秒 \"", P = e;
}
var ue = {
	format: le,
	load: fe,
	_table: P,
	load_table: function(e) {
		for (var r = 0; 392 != r; ++r) void 0 !== e[r] && fe(e[r], r);
	},
	parse_date_code: B,
	is_date: ie,
	get_table: function() {
		return ue._table = P;
	}
}, de = {
	5: "\"$\"#,##0_);\\(\"$\"#,##0\\)",
	6: "\"$\"#,##0_);[Red]\\(\"$\"#,##0\\)",
	7: "\"$\"#,##0.00_);\\(\"$\"#,##0.00\\)",
	8: "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)",
	23: "General",
	24: "General",
	25: "General",
	26: "General",
	27: "m/d/yy",
	28: "m/d/yy",
	29: "m/d/yy",
	30: "m/d/yy",
	31: "m/d/yy",
	32: "h:mm:ss",
	33: "h:mm:ss",
	34: "h:mm:ss",
	35: "h:mm:ss",
	36: "m/d/yy",
	41: "_(* #,##0_);_(* (#,##0);_(* \"-\"_);_(@_)",
	42: "_(\"$\"* #,##0_);_(\"$\"* (#,##0);_(\"$\"* \"-\"_);_(@_)",
	43: "_(* #,##0.00_);_(* (#,##0.00);_(* \"-\"??_);_(@_)",
	44: "_(\"$\"* #,##0.00_);_(\"$\"* (#,##0.00);_(\"$\"* \"-\"??_);_(@_)",
	50: "m/d/yy",
	51: "m/d/yy",
	52: "m/d/yy",
	53: "m/d/yy",
	54: "m/d/yy",
	55: "m/d/yy",
	56: "m/d/yy",
	57: "m/d/yy",
	58: "m/d/yy",
	59: "0",
	60: "0.00",
	61: "#,##0",
	62: "#,##0.00",
	63: "\"$\"#,##0_);\\(\"$\"#,##0\\)",
	64: "\"$\"#,##0_);[Red]\\(\"$\"#,##0\\)",
	65: "\"$\"#,##0.00_);\\(\"$\"#,##0.00\\)",
	66: "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)",
	67: "0%",
	68: "0.00%",
	69: "# ?/?",
	70: "# ??/??",
	71: "m/d/yy",
	72: "m/d/yy",
	73: "d-mmm-yy",
	74: "d-mmm",
	75: "mmm-yy",
	76: "h:mm",
	77: "h:mm:ss",
	78: "m/d/yy h:mm",
	79: "mm:ss",
	80: "[h]:mm:ss",
	81: "mmss.0"
}, pe = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g, me = { "d.m": "d\\.m" };
function ve(e, r) {
	return fe(me[e] || e, r);
}
var ge = function() {
	var e = { version: "1.2.0" }, r = function() {
		for (var e = 0, r = new Array(256), t = 0; 256 != t; ++t) e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = 1 & (e = t) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1) ? -306674912 ^ e >>> 1 : e >>> 1, r[t] = e;
		return "undefined" != typeof Int32Array ? new Int32Array(r) : r;
	}(), t = function(e) {
		var r = 0, t = 0, a = 0, n = "undefined" != typeof Int32Array ? /* @__PURE__ */ new Int32Array(4096) : new Array(4096);
		for (a = 0; 256 != a; ++a) n[a] = e[a];
		for (a = 0; 256 != a; ++a) for (t = e[a], r = 256 + a; r < 4096; r += 256) t = n[r] = t >>> 8 ^ e[255 & t];
		var s = [];
		for (a = 1; 16 != a; ++a) s[a - 1] = "undefined" != typeof Int32Array && "function" == typeof n.subarray ? n.subarray(256 * a, 256 * a + 256) : n.slice(256 * a, 256 * a + 256);
		return s;
	}(r), a = t[0], n = t[1], s = t[2], i = t[3], c = t[4], o = t[5], l = t[6], f = t[7], h = t[8], u = t[9], d = t[10], p = t[11], m = t[12], v = t[13], g = t[14];
	return e.table = r, e.bstr = function(e, t) {
		for (var a = -1 ^ t, n = 0, s = e.length; n < s;) a = a >>> 8 ^ r[255 & (a ^ e.charCodeAt(n++))];
		return ~a;
	}, e.buf = function(e, t) {
		for (var b = -1 ^ t, T = e.length - 15, E = 0; E < T;) b = g[e[E++] ^ 255 & b] ^ v[e[E++] ^ b >> 8 & 255] ^ m[e[E++] ^ b >> 16 & 255] ^ p[e[E++] ^ b >>> 24] ^ d[e[E++]] ^ u[e[E++]] ^ h[e[E++]] ^ f[e[E++]] ^ l[e[E++]] ^ o[e[E++]] ^ c[e[E++]] ^ i[e[E++]] ^ s[e[E++]] ^ n[e[E++]] ^ a[e[E++]] ^ r[e[E++]];
		for (T += 15; E < T;) b = b >>> 8 ^ r[255 & (b ^ e[E++])];
		return ~b;
	}, e.str = function(e, t) {
		for (var a = -1 ^ t, n = 0, s = e.length, i = 0, c = 0; n < s;) (i = e.charCodeAt(n++)) < 128 ? a = a >>> 8 ^ r[255 & (a ^ i)] : i < 2048 ? a = (a = a >>> 8 ^ r[255 & (a ^ (192 | i >> 6 & 31))]) >>> 8 ^ r[255 & (a ^ (128 | 63 & i))] : i >= 55296 && i < 57344 ? (i = 64 + (1023 & i), c = 1023 & e.charCodeAt(n++), a = (a = (a = (a = a >>> 8 ^ r[255 & (a ^ (240 | i >> 8 & 7))]) >>> 8 ^ r[255 & (a ^ (128 | i >> 2 & 63))]) >>> 8 ^ r[255 & (a ^ (128 | c >> 6 & 15 | (3 & i) << 4))]) >>> 8 ^ r[255 & (a ^ (128 | 63 & c))]) : a = (a = (a = a >>> 8 ^ r[255 & (a ^ (224 | i >> 12 & 15))]) >>> 8 ^ r[255 & (a ^ (128 | i >> 6 & 63))]) >>> 8 ^ r[255 & (a ^ (128 | 63 & i))];
		return ~a;
	}, e;
}(), be = function() {
	var e, r = {};
	function t(e) {
		if ("/" == e.charAt(e.length - 1)) return -1 === e.slice(0, -1).indexOf("/") ? e : t(e.slice(0, -1));
		var r = e.lastIndexOf("/");
		return -1 === r ? e : e.slice(0, r + 1);
	}
	function a(e) {
		if ("/" == e.charAt(e.length - 1)) return a(e.slice(0, -1));
		var r = e.lastIndexOf("/");
		return -1 === r ? e : e.slice(r + 1);
	}
	function n(e, r) {
		"string" == typeof r && (r = new Date(r));
		var t = r.getHours();
		t = (t = t << 6 | r.getMinutes()) << 5 | r.getSeconds() >>> 1, e.write_shift(2, t);
		var a = r.getFullYear() - 1980;
		a = (a = a << 4 | r.getMonth() + 1) << 5 | r.getDate(), e.write_shift(2, a);
	}
	function s(e) {
		Et(e, 0);
		for (var r = {}, t = 0; e.l <= e.length - 4;) {
			var a = e.read_shift(2), n = e.read_shift(2), s = e.l + n, i = {};
			switch (a) {
				case 21589:
					1 & (t = e.read_shift(1)) && (i.mtime = e.read_shift(4)), n > 5 && (2 & t && (i.atime = e.read_shift(4)), 4 & t && (i.ctime = e.read_shift(4))), i.mtime && (i.mt = /* @__PURE__ */ new Date(1e3 * i.mtime));
					break;
				case 1:
					var c = e.read_shift(4), o = e.read_shift(4);
					i.usz = o * Math.pow(2, 32) + c, c = e.read_shift(4), o = e.read_shift(4), i.csz = o * Math.pow(2, 32) + c;
			}
			e.l = s, r[a] = i;
		}
		return r;
	}
	function i() {
		return e || (e = void 0);
	}
	function c(e, r) {
		if (80 == e[0] && 75 == e[1]) return de(e, r);
		if (109 == (32 | e[0]) && 105 == (32 | e[1])) return function(e, r) {
			if ("mime-version:" != N(e.slice(0, 13)).toLowerCase()) throw new Error("Unsupported MAD header");
			var t = r && r.root || "", a = (m && Buffer.isBuffer(e) ? e.toString("binary") : N(e)).split("\r\n"), n = 0, s = "";
			for (n = 0; n < a.length; ++n) if (s = a[n], /^Content-Location:/i.test(s) && (s = s.slice(s.indexOf("file")), t || (t = s.slice(0, s.lastIndexOf("/") + 1)), s.slice(0, t.length) != t)) for (; t.length > 0 && (t = (t = t.slice(0, t.length - 1)).slice(0, t.lastIndexOf("/") + 1), s.slice(0, t.length) != t););
			var i = (a[1] || "").match(/boundary="(.*?)"/);
			if (!i) throw new Error("MAD cannot find boundary");
			var c = "--" + (i[1] || ""), o = {
				FileIndex: [],
				FullPaths: []
			};
			u(o);
			var l, f = 0;
			for (n = 0; n < a.length; ++n) {
				var h = a[n];
				h !== c && h !== c + "--" || (f++ && we(o, a.slice(l, n), t), l = n);
			}
			return o;
		}(e, r);
		if (e.length < 512) throw new Error("CFB file size " + e.length + " < 512");
		var t, a, n, s, i, c, d = 512, p = [], v = e.slice(0, 512);
		Et(v, 0);
		var g = function(e) {
			if (80 == e[e.l] && 75 == e[e.l + 1]) return [0, 0];
			e.chk(x, "Header Signature: "), e.l += 16;
			var r = e.read_shift(2, "u");
			return [e.read_shift(2, "u"), r];
		}(v);
		switch (t = g[0]) {
			case 3:
				d = 512;
				break;
			case 4:
				d = 4096;
				break;
			case 0: if (0 == g[1]) return de(e, r);
			default: throw new Error("Major Version: Expected 3 or 4 saw " + t);
		}
		512 !== d && Et(v = e.slice(0, d), 28);
		var b = e.slice(0, d);
		(function(e, r) {
			var t;
			switch (e.l += 2, t = e.read_shift(2)) {
				case 9:
					if (3 != r) throw new Error("Sector Shift: Expected 9 saw " + t);
					break;
				case 12:
					if (4 != r) throw new Error("Sector Shift: Expected 12 saw " + t);
					break;
				default: throw new Error("Sector Shift: Expected 9 or 12 saw " + t);
			}
			e.chk("0600", "Mini Sector Shift: "), e.chk("000000000000", "Reserved: ");
		})(v, t);
		var T = v.read_shift(4, "i");
		if (3 === t && 0 !== T) throw new Error("# Directory Sectors: Expected 0 saw " + T);
		v.l += 4, s = v.read_shift(4, "i"), v.l += 4, v.chk("00100000", "Mini Stream Cutoff Size: "), i = v.read_shift(4, "i"), a = v.read_shift(4, "i"), c = v.read_shift(4, "i"), n = v.read_shift(4, "i");
		for (var E = -1, w = 0; w < 109 && !((E = v.read_shift(4, "i")) < 0); ++w) p[w] = E;
		var A = function(e, r) {
			for (var t = Math.ceil(e.length / r) - 1, a = [], n = 1; n < t; ++n) a[n - 1] = e.slice(n * r, (n + 1) * r);
			return a[t - 1] = e.slice(t * r), a;
		}(e, d);
		l(c, n, A, d, p);
		var k = function(e, r, t, a) {
			var n = e.length, s = [], i = [], c = [], o = [], l = a - 1, f = 0, h = 0, u = 0, d = 0;
			for (f = 0; f < n; ++f) if (c = [], (u = f + r) >= n && (u -= n), !i[u]) {
				o = [];
				var p = [];
				for (h = u; h >= 0;) {
					p[h] = !0, i[h] = !0, c[c.length] = h, o.push(e[h]);
					var m = t[Math.floor(4 * h / a)];
					if (a < 4 + (d = 4 * h & l)) throw new Error("FAT boundary crossed: " + h + " 4 " + a);
					if (!e[m]) break;
					if (p[h = ut(e[m], d)]) break;
				}
				s[u] = {
					nodes: c,
					data: zr([o])
				};
			}
			return s;
		}(A, s, p, d);
		s < k.length && (k[s].name = "!Directory"), a > 0 && i !== _ && (k[i].name = "!MiniFAT"), k[p[0]].name = "!FAT", k.fat_addrs = p, k.ssz = d;
		var S = [], y = [], C = [];
		(function(e, r, t, a, n, s, i, c) {
			for (var l, u = 0, d = a.length ? 2 : 0, p = r[e].data, m = 0, v = 0; m < p.length; m += 128) {
				var g = p.slice(m, m + 128);
				Et(g, 64), v = g.read_shift(2), l = Gr(g, 0, v - d), a.push(l);
				var b = {
					name: l,
					type: g.read_shift(1),
					color: g.read_shift(1),
					L: g.read_shift(4, "i"),
					R: g.read_shift(4, "i"),
					C: g.read_shift(4, "i"),
					clsid: g.read_shift(16),
					state: g.read_shift(4, "i"),
					start: 0,
					size: 0
				};
				g.read_shift(2) + g.read_shift(2) + g.read_shift(2) + g.read_shift(2) !== 0 && (b.ct = h(g, g.l - 8)), g.read_shift(2) + g.read_shift(2) + g.read_shift(2) + g.read_shift(2) !== 0 && (b.mt = h(g, g.l - 8)), b.start = g.read_shift(4, "i"), b.size = g.read_shift(4, "i"), b.size < 0 && b.start < 0 && (b.size = b.type = 0, b.start = _, b.name = ""), 5 === b.type ? (u = b.start, n > 0 && u !== _ && (r[u].name = "!StreamData")) : b.size >= 4096 ? (b.storage = "fat", void 0 === r[b.start] && (r[b.start] = f(t, b.start, r.fat_addrs, r.ssz)), r[b.start].name = b.name, b.content = r[b.start].data.slice(0, b.size)) : (b.storage = "minifat", b.size < 0 ? b.size = 0 : u !== _ && b.start !== _ && r[u] && (b.content = o(b, r[u].data, (r[c] || {}).data))), b.content && Et(b.content, 0), s[l] = b, i.push(b);
			}
		})(s, k, A, S, a, {}, y, i), function(e, r, t) {
			for (var a = 0, n = 0, s = 0, i = 0, c = 0, o = t.length, l = [], f = []; a < o; ++a) l[a] = f[a] = a, r[a] = t[a];
			for (; c < f.length; ++c) n = e[a = f[c]].L, s = e[a].R, i = e[a].C, l[a] === a && (-1 !== n && l[n] !== n && (l[a] = l[n]), -1 !== s && l[s] !== s && (l[a] = l[s])), -1 !== i && (l[i] = a), -1 !== n && a != l[a] && (l[n] = l[a], f.lastIndexOf(n) < c && f.push(n)), -1 !== s && a != l[a] && (l[s] = l[a], f.lastIndexOf(s) < c && f.push(s));
			for (a = 1; a < o; ++a) l[a] === a && (-1 !== s && l[s] !== s ? l[a] = l[s] : -1 !== n && l[n] !== n && (l[a] = l[n]));
			for (a = 1; a < o; ++a) if (0 !== e[a].type) {
				if ((c = a) != l[c]) do
					c = l[c], r[a] = r[c] + "/" + r[a];
				while (0 !== c && -1 !== l[c] && c != l[c]);
				l[a] = -1;
			}
			for (r[0] += "/", a = 1; a < o; ++a) 2 !== e[a].type && (r[a] += "/");
		}(y, C, S), S.shift();
		var O = {
			FileIndex: y,
			FullPaths: C
		};
		return r && r.raw && (O.raw = {
			header: b,
			sectors: A
		}), O;
	}
	function o(e, r, t) {
		for (var a = e.start, n = e.size, s = [], i = a; t && n > 0 && i >= 0;) s.push(r.slice(i * C, i * C + C)), n -= C, i = ut(t, 4 * i);
		return 0 === s.length ? At(0) : k(s).slice(0, e.size);
	}
	function l(e, r, t, a, n) {
		var s = _;
		if (e === _) {
			if (0 !== r) throw new Error("DIFAT chain shorter than expected");
		} else if (-1 !== e) {
			var i = t[e], c = (a >>> 2) - 1;
			if (!i) return;
			for (var o = 0; o < c && (s = ut(i, 4 * o)) !== _; ++o) n.push(s);
			r >= 1 && l(ut(i, a - 4), r - 1, t, a, n);
		}
	}
	function f(e, r, t, a, n) {
		var s = [], i = [];
		n || (n = []);
		var c = a - 1, o = 0, l = 0;
		for (o = r; o >= 0;) {
			n[o] = !0, s[s.length] = o, i.push(e[o]);
			var f = t[Math.floor(4 * o / a)];
			if (a < 4 + (l = 4 * o & c)) throw new Error("FAT boundary crossed: " + o + " 4 " + a);
			if (!e[f]) break;
			o = ut(e[f], l);
		}
		return {
			nodes: s,
			data: zr([i])
		};
	}
	function h(e, r) {
		return /* @__PURE__ */ new Date(1e3 * (ht(e, r + 4) / 1e7 * Math.pow(2, 32) + ht(e, r) / 1e7 - 11644473600));
	}
	function u(e, r) {
		var t = r || {}, a = t.root || "Root Entry";
		if (e.FullPaths || (e.FullPaths = []), e.FileIndex || (e.FileIndex = []), e.FullPaths.length !== e.FileIndex.length) throw new Error("inconsistent CFB structure");
		0 === e.FullPaths.length && (e.FullPaths[0] = a + "/", e.FileIndex[0] = {
			name: a,
			type: 5
		}), t.CLSID && (e.FileIndex[0].clsid = t.CLSID), function(e) {
			var r = "Sh33tJ5";
			if (!be.find(e, "/" + r)) {
				var t = At(4);
				t[0] = 55, t[1] = t[3] = 50, t[2] = 54, e.FileIndex.push({
					name: r,
					type: 2,
					content: t,
					size: 4,
					L: 69,
					R: 69,
					C: 69
				}), e.FullPaths.push(e.FullPaths[0] + r), g(e);
			}
		}(e);
	}
	function g(e, r) {
		u(e);
		for (var n = !1, s = !1, i = e.FullPaths.length - 1; i >= 0; --i) {
			var c = e.FileIndex[i];
			switch (c.type) {
				case 0:
					s ? n = !0 : (e.FileIndex.pop(), e.FullPaths.pop());
					break;
				case 1:
				case 2:
				case 5:
					s = !0, isNaN(c.R * c.L * c.C) && (n = !0), c.R > -1 && c.L > -1 && c.R == c.L && (n = !0);
					break;
				default: n = !0;
			}
		}
		if (n || r) {
			var o = new Date(1987, 1, 19), l = 0, f = Object.create ? Object.create(null) : {}, h = [];
			for (i = 0; i < e.FullPaths.length; ++i) f[e.FullPaths[i]] = !0, 0 !== e.FileIndex[i].type && h.push([e.FullPaths[i], e.FileIndex[i]]);
			for (i = 0; i < h.length; ++i) {
				var d = t(h[i][0]);
				for (s = f[d]; !s;) {
					for (; t(d) && !f[t(d)];) d = t(d);
					h.push([d, {
						name: a(d).replace("/", ""),
						type: 1,
						clsid: R,
						ct: o,
						mt: o,
						content: null
					}]), f[d] = !0, s = f[d = t(h[i][0])];
				}
			}
			for (h.sort(function(e, r) {
				return function(e, r) {
					for (var t = e.split("/"), a = r.split("/"), n = 0, s = 0, i = Math.min(t.length, a.length); n < i; ++n) {
						if (s = t[n].length - a[n].length) return s;
						if (t[n] != a[n]) return t[n] < a[n] ? -1 : 1;
					}
					return t.length - a.length;
				}(e[0], r[0]);
			}), e.FullPaths = [], e.FileIndex = [], i = 0; i < h.length; ++i) e.FullPaths[i] = h[i][0], e.FileIndex[i] = h[i][1];
			for (i = 0; i < h.length; ++i) {
				var p = e.FileIndex[i], m = e.FullPaths[i];
				if (p.name = a(m).replace("/", ""), p.L = p.R = p.C = -(p.color = 1), p.size = p.content ? p.content.length : 0, p.start = 0, p.clsid = p.clsid || R, 0 === i) p.C = h.length > 1 ? 1 : -1, p.size = 0, p.type = 5;
				else if ("/" == m.slice(-1)) {
					for (l = i + 1; l < h.length && t(e.FullPaths[l]) != m; ++l);
					for (p.C = l >= h.length ? -1 : l, l = i + 1; l < h.length && t(e.FullPaths[l]) != t(m); ++l);
					p.R = l >= h.length ? -1 : l, p.type = 1;
				} else t(e.FullPaths[i + 1] || "") == t(m) && (p.R = i + 1), p.type = 2;
			}
		}
	}
	function w(e, r) {
		var t = r || {};
		if ("mad" == t.fileType) return function(e, r) {
			for (var t = r || {}, a = t.boundary || "SheetJS", n = [
				"MIME-Version: 1.0",
				"Content-Type: multipart/related; boundary=\"" + (a = "------=" + a).slice(2) + "\"",
				"",
				"",
				""
			], s = e.FullPaths[0], i = s, c = e.FileIndex[0], o = 1; o < e.FullPaths.length; ++o) if (i = e.FullPaths[o].slice(s.length), (c = e.FileIndex[o]).size && c.content && "Sh33tJ5" != i) {
				i = i.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(e) {
					return "_x" + e.charCodeAt(0).toString(16) + "_";
				}).replace(/[\u0080-\uFFFF]/g, function(e) {
					return "_u" + e.charCodeAt(0).toString(16) + "_";
				});
				for (var l = c.content, f = m && Buffer.isBuffer(l) ? l.toString("binary") : N(l), h = 0, u = Math.min(1024, f.length), d = 0, p = 0; p <= u; ++p) (d = f.charCodeAt(p)) >= 32 && d < 128 && ++h;
				var v = h >= 4 * u / 5;
				n.push(a), n.push("Content-Location: " + (t.root || "file:///C:/SheetJS/") + i), n.push("Content-Transfer-Encoding: " + (v ? "quoted-printable" : "base64")), n.push("Content-Type: " + ve(c, i)), n.push(""), n.push(v ? Ee(f) : Te(f));
			}
			return n.push(a + "--\r\n"), n.join("\r\n");
		}(e, t);
		if (g(e), "zip" === t.fileType) return function(e, r) {
			var t = r || {}, a = [], s = [], i = At(1), c = t.compression ? 8 : 0, o = 0, l = 0, f = 0, h = 0, u = e.FullPaths[0], d = u, p = e.FileIndex[0], m = [], v = 0;
			for (o = 1; o < e.FullPaths.length; ++o) if (d = e.FullPaths[o].slice(u.length), (p = e.FileIndex[o]).size && p.content && (!Array.isArray(p.content) || 0 != p.content.length) && "Sh33tJ5" != d) {
				var g = f, b = At(d.length);
				for (l = 0; l < d.length; ++l) b.write_shift(1, 127 & d.charCodeAt(l));
				b = b.slice(0, b.l), m[h] = "string" == typeof p.content ? ge.bstr(p.content, 0) : ge.buf(p.content, 0);
				var T = "string" == typeof p.content ? E(p.content) : p.content;
				8 == c && (T = D(T)), (i = At(30)).write_shift(4, 67324752), i.write_shift(2, 20), i.write_shift(2, 0), i.write_shift(2, c), p.mt ? n(i, p.mt) : i.write_shift(4, 0), i.write_shift(-4, m[h]), i.write_shift(4, T.length), i.write_shift(4, p.content.length), i.write_shift(2, b.length), i.write_shift(2, 0), f += i.length, a.push(i), f += b.length, a.push(b), f += T.length, a.push(T), (i = At(46)).write_shift(4, 33639248), i.write_shift(2, 0), i.write_shift(2, 20), i.write_shift(2, 0), i.write_shift(2, c), i.write_shift(4, 0), i.write_shift(-4, m[h]), i.write_shift(4, T.length), i.write_shift(4, p.content.length), i.write_shift(2, b.length), i.write_shift(2, 0), i.write_shift(2, 0), i.write_shift(2, 0), i.write_shift(2, 0), i.write_shift(4, 0), i.write_shift(4, g), v += i.l, s.push(i), v += b.length, s.push(b), ++h;
			}
			return (i = At(22)).write_shift(4, 101010256), i.write_shift(2, 0), i.write_shift(2, 0), i.write_shift(2, h), i.write_shift(2, h), i.write_shift(4, v), i.write_shift(4, f), i.write_shift(2, 0), k([
				k(a),
				k(s),
				i
			]);
		}(e, t);
		var a = function(e) {
			for (var r = 0, t = 0, a = 0; a < e.FileIndex.length; ++a) {
				var n = e.FileIndex[a];
				if (n.content) {
					var s = n.content.length;
					s > 0 && (s < 4096 ? r += s + 63 >> 6 : t += s + 511 >> 9);
				}
			}
			for (var i = e.FullPaths.length + 3 >> 2, c = r + 127 >> 7, o = (r + 7 >> 3) + t + i + c, l = o + 127 >> 7, f = l <= 109 ? 0 : Math.ceil((l - 109) / 127); o + l + f + 127 >> 7 > l;) f = ++l <= 109 ? 0 : Math.ceil((l - 109) / 127);
			var h = [
				1,
				f,
				l,
				c,
				i,
				t,
				r,
				0
			];
			return e.FileIndex[0].size = r << 6, h[7] = (e.FileIndex[0].start = h[0] + h[1] + h[2] + h[3] + h[4] + h[5]) + (h[6] + 7 >> 3), h;
		}(e), s = At(a[7] << 9), i = 0, c = 0;
		for (i = 0; i < 8; ++i) s.write_shift(1, O[i]);
		for (i = 0; i < 8; ++i) s.write_shift(2, 0);
		for (s.write_shift(2, 62), s.write_shift(2, 3), s.write_shift(2, 65534), s.write_shift(2, 9), s.write_shift(2, 6), i = 0; i < 3; ++i) s.write_shift(2, 0);
		for (s.write_shift(4, 0), s.write_shift(4, a[2]), s.write_shift(4, a[0] + a[1] + a[2] + a[3] - 1), s.write_shift(4, 0), s.write_shift(4, 4096), s.write_shift(4, a[3] ? a[0] + a[1] + a[2] - 1 : _), s.write_shift(4, a[3]), s.write_shift(-4, a[1] ? a[0] - 1 : _), s.write_shift(4, a[1]), i = 0; i < 109; ++i) s.write_shift(-4, i < a[2] ? a[1] + i : -1);
		if (a[1]) for (c = 0; c < a[1]; ++c) {
			for (; i < 236 + 127 * c; ++i) s.write_shift(-4, i < a[2] ? a[1] + i : -1);
			s.write_shift(-4, c === a[1] - 1 ? _ : c + 1);
		}
		var o = function(e) {
			for (c += e; i < c - 1; ++i) s.write_shift(-4, i + 1);
			e && (++i, s.write_shift(-4, _));
		};
		for (c = i = 0, c += a[1]; i < c; ++i) s.write_shift(-4, I.DIFSECT);
		for (c += a[2]; i < c; ++i) s.write_shift(-4, I.FATSECT);
		o(a[3]), o(a[4]);
		for (var l = 0, f = 0, h = e.FileIndex[0]; l < e.FileIndex.length; ++l) (h = e.FileIndex[l]).content && ((f = h.content.length) < 4096 || (h.start = c, o(f + 511 >> 9)));
		for (o(a[6] + 7 >> 3); 511 & s.l;) s.write_shift(-4, I.ENDOFCHAIN);
		for (c = i = 0, l = 0; l < e.FileIndex.length; ++l) (h = e.FileIndex[l]).content && (!(f = h.content.length) || f >= 4096 || (h.start = c, o(f + 63 >> 6)));
		for (; 511 & s.l;) s.write_shift(-4, I.ENDOFCHAIN);
		for (i = 0; i < a[4] << 2; ++i) {
			var u = e.FullPaths[i];
			if (u && 0 !== u.length) {
				h = e.FileIndex[i], 0 === i && (h.start = h.size ? h.start - 1 : _);
				var d = 0 === i && t.root || h.name;
				if (d.length > 31 && (console.error("Name " + d + " will be truncated to " + d.slice(0, 31)), d = d.slice(0, 31)), f = 2 * (d.length + 1), s.write_shift(64, d, "utf16le"), s.write_shift(2, f), s.write_shift(1, h.type), s.write_shift(1, h.color), s.write_shift(-4, h.L), s.write_shift(-4, h.R), s.write_shift(-4, h.C), h.clsid) s.write_shift(16, h.clsid, "hex");
				else for (l = 0; l < 4; ++l) s.write_shift(4, 0);
				s.write_shift(4, h.state || 0), s.write_shift(4, 0), s.write_shift(4, 0), s.write_shift(4, 0), s.write_shift(4, 0), s.write_shift(4, h.start), s.write_shift(4, h.size), s.write_shift(4, 0);
			} else {
				for (l = 0; l < 17; ++l) s.write_shift(4, 0);
				for (l = 0; l < 3; ++l) s.write_shift(4, -1);
				for (l = 0; l < 12; ++l) s.write_shift(4, 0);
			}
		}
		for (i = 1; i < e.FileIndex.length; ++i) if ((h = e.FileIndex[i]).size >= 4096) if (s.l = h.start + 1 << 9, m && Buffer.isBuffer(h.content)) h.content.copy(s, s.l, 0, h.size), s.l += h.size + 511 & -512;
		else {
			for (l = 0; l < h.size; ++l) s.write_shift(1, h.content[l]);
			for (; 511 & l; ++l) s.write_shift(1, 0);
		}
		for (i = 1; i < e.FileIndex.length; ++i) if ((h = e.FileIndex[i]).size > 0 && h.size < 4096) if (m && Buffer.isBuffer(h.content)) h.content.copy(s, s.l, 0, h.size), s.l += h.size + 63 & -64;
		else {
			for (l = 0; l < h.size; ++l) s.write_shift(1, h.content[l]);
			for (; 63 & l; ++l) s.write_shift(1, 0);
		}
		if (m) s.l = s.length;
		else for (; s.l < s.length;) s.write_shift(1, 0);
		return s;
	}
	r.version = "1.2.2";
	var A, C = 64, _ = -2, x = "d0cf11e0a1b11ae1", O = [
		208,
		207,
		17,
		224,
		161,
		177,
		26,
		225
	], R = "00000000000000000000000000000000", I = {
		MAXREGSECT: -6,
		DIFSECT: -4,
		FATSECT: -3,
		ENDOFCHAIN: _,
		FREESECT: -1,
		HEADER_SIGNATURE: x,
		HEADER_MINOR_VERSION: "3e00",
		MAXREGSID: -6,
		NOSTREAM: -1,
		HEADER_CLSID: R,
		EntryTypes: [
			"unknown",
			"storage",
			"stream",
			"lockbytes",
			"property",
			"root"
		]
	};
	function N(e) {
		for (var r = new Array(e.length), t = 0; t < e.length; ++t) r[t] = String.fromCharCode(e[t]);
		return r.join("");
	}
	function D(e) {
		return A ? A.deflateRawSync(e) : ne(e);
	}
	var F = [
		16,
		17,
		18,
		0,
		8,
		7,
		9,
		6,
		10,
		5,
		11,
		4,
		12,
		3,
		13,
		2,
		14,
		1,
		15
	], P = [
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		13,
		15,
		17,
		19,
		23,
		27,
		31,
		35,
		43,
		51,
		59,
		67,
		83,
		99,
		115,
		131,
		163,
		195,
		227,
		258
	], M = [
		1,
		2,
		3,
		4,
		5,
		7,
		9,
		13,
		17,
		25,
		33,
		49,
		65,
		97,
		129,
		193,
		257,
		385,
		513,
		769,
		1025,
		1537,
		2049,
		3073,
		4097,
		6145,
		8193,
		12289,
		16385,
		24577
	];
	function L(e) {
		var r = 139536 & (e << 1 | e << 11) | 558144 & (e << 5 | e << 15);
		return 255 & (r >> 16 | r >> 8 | r);
	}
	for (var U = "undefined" != typeof Uint8Array, B = U ? /* @__PURE__ */ new Uint8Array(256) : [], H = 0; H < 256; ++H) B[H] = L(H);
	function W(e, r) {
		var t = B[255 & e];
		return r <= 8 ? t >>> 8 - r : (t = t << 8 | B[e >> 8 & 255], r <= 16 ? t >>> 16 - r : (t = t << 8 | B[e >> 16 & 255]) >>> 24 - r);
	}
	function z(e, r) {
		var t = 7 & r, a = r >>> 3;
		return (e[a] | (t <= 6 ? 0 : e[a + 1] << 8)) >>> t & 3;
	}
	function V(e, r) {
		var t = 7 & r, a = r >>> 3;
		return (e[a] | (t <= 5 ? 0 : e[a + 1] << 8)) >>> t & 7;
	}
	function G(e, r) {
		var t = 7 & r, a = r >>> 3;
		return (e[a] | (t <= 3 ? 0 : e[a + 1] << 8)) >>> t & 31;
	}
	function $(e, r) {
		var t = 7 & r, a = r >>> 3;
		return (e[a] | (t <= 1 ? 0 : e[a + 1] << 8)) >>> t & 127;
	}
	function X(e, r, t) {
		var a = 7 & r, n = r >>> 3, s = (1 << t) - 1, i = e[n] >>> a;
		return t < 8 - a ? i & s : (i |= e[n + 1] << 8 - a, t < 16 - a ? i & s : (i |= e[n + 2] << 16 - a, t < 24 - a ? i & s : (i |= e[n + 3] << 24 - a) & s));
	}
	function j(e, r, t) {
		var a = 7 & r, n = r >>> 3;
		return a <= 5 ? e[n] |= (7 & t) << a : (e[n] |= t << a & 255, e[n + 1] = (7 & t) >> 8 - a), r + 3;
	}
	function K(e, r, t) {
		return t = (1 & t) << (7 & r), e[r >>> 3] |= t, r + 1;
	}
	function Y(e, r, t) {
		var a = r >>> 3;
		return t <<= 7 & r, e[a] |= 255 & t, t >>>= 8, e[a + 1] = t, r + 8;
	}
	function J(e, r, t) {
		var a = r >>> 3;
		return t <<= 7 & r, e[a] |= 255 & t, t >>>= 8, e[a + 1] = 255 & t, e[a + 2] = t >>> 8, r + 16;
	}
	function Z(e, r) {
		var t = e.length, a = 2 * t > r ? 2 * t : r + 5, n = 0;
		if (t >= r) return e;
		if (m) {
			var s = T(a);
			if (e.copy) e.copy(s);
			else for (; n < e.length; ++n) s[n] = e[n];
			return s;
		}
		if (U) {
			var i = new Uint8Array(a);
			if (i.set) i.set(e);
			else for (; n < t; ++n) i[n] = e[n];
			return i;
		}
		return e.length = a, e;
	}
	function q(e) {
		for (var r = new Array(e), t = 0; t < e; ++t) r[t] = 0;
		return r;
	}
	function Q(e, r, t) {
		var a = 1, n = 0, s = 0, i = 0, c = 0, o = e.length, l = U ? /* @__PURE__ */ new Uint16Array(32) : q(32);
		for (s = 0; s < 32; ++s) l[s] = 0;
		for (s = o; s < t; ++s) e[s] = 0;
		o = e.length;
		var f = U ? new Uint16Array(o) : q(o);
		for (s = 0; s < o; ++s) l[n = e[s]]++, a < n && (a = n), f[s] = 0;
		for (l[0] = 0, s = 1; s <= a; ++s) l[s + 16] = c = c + l[s - 1] << 1;
		for (s = 0; s < o; ++s) 0 != (c = e[s]) && (f[s] = l[c + 16]++);
		var h = 0;
		for (s = 0; s < o; ++s) if (0 != (h = e[s])) for (c = W(f[s], a) >> a - h, i = (1 << a + 4 - h) - 1; i >= 0; --i) r[c | i << h] = 15 & h | s << 4;
		return a;
	}
	var ee = U ? /* @__PURE__ */ new Uint16Array(512) : q(512), re = U ? /* @__PURE__ */ new Uint16Array(32) : q(32);
	if (!U) {
		for (var te = 0; te < 512; ++te) ee[te] = 0;
		for (te = 0; te < 32; ++te) re[te] = 0;
	}
	(function() {
		for (var e = [], r = 0; r < 32; r++) e.push(5);
		Q(e, re, 32);
		var t = [];
		for (r = 0; r <= 143; r++) t.push(8);
		for (; r <= 255; r++) t.push(9);
		for (; r <= 279; r++) t.push(7);
		for (; r <= 287; r++) t.push(8);
		Q(t, ee, 288);
	})();
	var ae = function() {
		for (var e = U ? /* @__PURE__ */ new Uint8Array(32768) : [], r = 0, t = 0; r < M.length - 1; ++r) for (; t < M[r + 1]; ++t) e[t] = r;
		for (; t < 32768; ++t) e[t] = 29;
		var a = U ? /* @__PURE__ */ new Uint8Array(259) : [];
		for (r = 0, t = 0; r < P.length - 1; ++r) for (; t < P[r + 1]; ++t) a[t] = r;
		return function(r, t) {
			return r.length < 8 ? function(e, r) {
				for (var t = 0; t < e.length;) {
					var a = Math.min(65535, e.length - t), n = t + a == e.length;
					for (r.write_shift(1, +n), r.write_shift(2, a), r.write_shift(2, 65535 & ~a); a-- > 0;) r[r.l++] = e[t++];
				}
				return r.l;
			}(r, t) : function(r, t) {
				for (var n = 0, s = 0, i = U ? /* @__PURE__ */ new Uint16Array(32768) : []; s < r.length;) {
					var c = Math.min(65535, r.length - s);
					if (c < 10) {
						for (7 & (n = j(t, n, +!(s + c != r.length))) && (n += 8 - (7 & n)), t.l = n / 8 | 0, t.write_shift(2, c), t.write_shift(2, 65535 & ~c); c-- > 0;) t[t.l++] = r[s++];
						n = 8 * t.l;
					} else {
						n = j(t, n, +!(s + c != r.length) + 2);
						for (var o = 0; c-- > 0;) {
							var l = r[s], f = -1, h = 0;
							if ((f = i[o = 32767 & (o << 5 ^ l)]) && ((f |= -32768 & s) > s && (f -= 32768), f < s)) for (; r[f + h] == r[s + h] && h < 250;) ++h;
							if (h > 2) {
								(l = a[h]) <= 22 ? n = Y(t, n, B[l + 1] >> 1) - 1 : (Y(t, n, 3), Y(t, n += 5, B[l - 23] >> 5), n += 3);
								var u = l < 8 ? 0 : l - 4 >> 2;
								u > 0 && (J(t, n, h - P[l]), n += u), l = e[s - f], n = Y(t, n, B[l] >> 3), n -= 3;
								var d = l < 4 ? 0 : l - 2 >> 1;
								d > 0 && (J(t, n, s - f - M[l]), n += d);
								for (var p = 0; p < h; ++p) i[o] = 32767 & s, o = 32767 & (o << 5 ^ r[s]), ++s;
								c -= h - 1;
							} else l <= 143 ? l += 48 : n = K(t, n, 1), n = Y(t, n, B[l]), i[o] = 32767 & s, ++s;
						}
						n = Y(t, n, 0) - 1;
					}
				}
				return t.l = (n + 7) / 8 | 0, t.l;
			}(r, t);
		};
	}();
	function ne(e) {
		var r = At(50 + Math.floor(1.1 * e.length)), t = ae(e, r);
		return r.slice(0, t);
	}
	var se = U ? /* @__PURE__ */ new Uint16Array(32768) : q(32768), ie = U ? /* @__PURE__ */ new Uint16Array(32768) : q(32768), ce = U ? /* @__PURE__ */ new Uint16Array(128) : q(128), oe = 1, le = 1;
	function fe(e, r) {
		var t = G(e, r) + 257, a = G(e, r += 5) + 1, n = function(e, r) {
			var t = 7 & r, a = r >>> 3;
			return (e[a] | (t <= 4 ? 0 : e[a + 1] << 8)) >>> t & 15;
		}(e, r += 5) + 4;
		r += 4;
		for (var s = 0, i = U ? /* @__PURE__ */ new Uint8Array(19) : q(19), c = [
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0
		], o = 1, l = U ? /* @__PURE__ */ new Uint8Array(8) : q(8), f = U ? /* @__PURE__ */ new Uint8Array(8) : q(8), h = i.length, u = 0; u < n; ++u) i[F[u]] = s = V(e, r), o < s && (o = s), l[s]++, r += 3;
		var d = 0;
		for (l[0] = 0, u = 1; u <= o; ++u) f[u] = d = d + l[u - 1] << 1;
		for (u = 0; u < h; ++u) 0 != (d = i[u]) && (c[u] = f[d]++);
		var p = 0;
		for (u = 0; u < h; ++u) if (0 != (p = i[u])) {
			d = B[c[u]] >> 8 - p;
			for (var m = (1 << 7 - p) - 1; m >= 0; --m) ce[d | m << p] = 7 & p | u << 3;
		}
		var v = [];
		for (o = 1; v.length < t + a;) switch (r += 7 & (d = ce[$(e, r)]), d >>>= 3) {
			case 16:
				for (s = 3 + z(e, r), r += 2, d = v[v.length - 1]; s-- > 0;) v.push(d);
				break;
			case 17:
				for (s = 3 + V(e, r), r += 3; s-- > 0;) v.push(0);
				break;
			case 18:
				for (s = 11 + $(e, r), r += 7; s-- > 0;) v.push(0);
				break;
			default: v.push(d), o < d && (o = d);
		}
		var g = v.slice(0, t), b = v.slice(t);
		for (u = t; u < 286; ++u) g[u] = 0;
		for (u = a; u < 30; ++u) b[u] = 0;
		return oe = Q(g, se, 286), le = Q(b, ie, 30), r;
	}
	function he(e, r) {
		var t = function(e, r) {
			if (3 == e[0] && !(3 & e[1])) return [b(r), 2];
			for (var t = 0, a = 0, n = T(r || 1 << 18), s = 0, i = n.length >>> 0, c = 0, o = 0; !(1 & a);) if (a = V(e, t), t += 3, a >>> 1 != 0) for (a >> 1 == 1 ? (c = 9, o = 5) : (t = fe(e, t), c = oe, o = le);;) {
				!r && i < s + 32767 && (i = (n = Z(n, s + 32767)).length);
				var l = X(e, t, c), f = a >>> 1 == 1 ? ee[l] : se[l];
				if (t += 15 & f, (f >>>= 4) >>> 8 & 255) {
					if (256 == f) break;
					var h = (f -= 257) < 8 ? 0 : f - 4 >> 2;
					h > 5 && (h = 0);
					var u = s + P[f];
					h > 0 && (u += X(e, t, h), t += h), l = X(e, t, o), t += 15 & (f = a >>> 1 == 1 ? re[l] : ie[l]);
					var d = (f >>>= 4) < 4 ? 0 : f - 2 >> 1, p = M[f];
					for (d > 0 && (p += X(e, t, d), t += d), !r && i < u && (i = (n = Z(n, u + 100)).length); s < u;) n[s] = n[s - p], ++s;
				} else n[s++] = f;
			}
			else {
				7 & t && (t += 8 - (7 & t));
				var m = e[t >>> 3] | e[(t >>> 3) + 1] << 8;
				if (t += 32, m > 0) for (!r && i < s + m && (i = (n = Z(n, s + m)).length); m-- > 0;) n[s++] = e[t >>> 3], t += 8;
			}
			return r ? [n, t + 7 >>> 3] : [n.slice(0, s), t + 7 >>> 3];
		}(e.slice(e.l || 0), r);
		return e.l += t[1], t[0];
	}
	function ue(e, r) {
		if (!e) throw new Error(r);
		"undefined" != typeof console && console.error(r);
	}
	function de(e, r) {
		var t = e;
		Et(t, 0);
		var a = {
			FileIndex: [],
			FullPaths: []
		};
		u(a, { root: r.root });
		for (var n = t.length - 4; (80 != t[n] || 75 != t[n + 1] || 5 != t[n + 2] || 6 != t[n + 3]) && n >= 0;) --n;
		t.l = n + 4, t.l += 4;
		var i = t.read_shift(2);
		for (t.l += 6, t.l = t.read_shift(4), n = 0; n < i; ++n) {
			t.l += 20;
			var c = t.read_shift(4), o = t.read_shift(4), l = t.read_shift(2), f = t.read_shift(2), h = t.read_shift(2);
			t.l += 8;
			var d = t.read_shift(4), p = s(t.slice(t.l + l, t.l + l + f));
			t.l += l + f + h;
			var m = t.l;
			t.l = d + 4, p && p[1] && ((p[1] || {}).usz && (o = p[1].usz), (p[1] || {}).csz && (c = p[1].csz)), pe(t, c, o, a, p), t.l = m;
		}
		return a;
	}
	function pe(e, r, t, a, n) {
		e.l += 2;
		var i = e.read_shift(2), c = e.read_shift(2), o = function(e) {
			var r = 65535 & e.read_shift(2), t = 65535 & e.read_shift(2), a = /* @__PURE__ */ new Date(), n = 31 & t, s = 15 & (t >>>= 5);
			t >>>= 4, a.setMilliseconds(0), a.setFullYear(t + 1980), a.setMonth(s - 1), a.setDate(n);
			var i = 31 & r, c = 63 & (r >>>= 5);
			return r >>>= 6, a.setHours(r), a.setMinutes(c), a.setSeconds(i << 1), a;
		}(e);
		if (8257 & i) throw new Error("Unsupported ZIP encryption");
		e.read_shift(4);
		for (var l = e.read_shift(4), f = e.read_shift(4), h = e.read_shift(2), u = e.read_shift(2), d = "", p = 0; p < h; ++p) d += String.fromCharCode(e[e.l++]);
		if (u) {
			var m = s(e.slice(e.l, e.l + u));
			(m[21589] || {}).mt && (o = m[21589].mt), (m[1] || {}).usz && (f = m[1].usz), (m[1] || {}).csz && (l = m[1].csz), n && ((n[21589] || {}).mt && (o = n[21589].mt), (n[1] || {}).usz && (f = n[1].usz), (n[1] || {}).csz && (l = n[1].csz));
		}
		e.l += u;
		var v = e.slice(e.l, e.l + l);
		switch (c) {
			case 8:
				v = function(e, r) {
					if (!A) return he(e, r);
					var t = new A.InflateRaw(), a = t._processChunk(e.slice(e.l), t._finishFlushFlag);
					return e.l += t.bytesRead, a;
				}(e, f);
				break;
			case 0:
				e.l += l;
				break;
			default: throw new Error("Unsupported ZIP Compression method " + c);
		}
		var g = !1;
		8 & i && (134695760 == e.read_shift(4) && (e.read_shift(4), g = !0), l = e.read_shift(4), f = e.read_shift(4)), l != r && ue(g, "Bad compressed size: " + r + " != " + l), f != t && ue(g, "Bad uncompressed size: " + t + " != " + f), Ae(a, d, v, {
			unsafe: !0,
			mt: o
		});
	}
	var me = {
		htm: "text/html",
		xml: "text/xml",
		gif: "image/gif",
		jpg: "image/jpeg",
		png: "image/png",
		mso: "application/x-mso",
		thmx: "application/vnd.ms-officetheme",
		sh33tj5: "application/octet-stream"
	};
	function ve(e, r) {
		if (e.ctype) return e.ctype;
		var t = e.name || "", a = t.match(/\.([^\.]+)$/);
		return a && me[a[1]] || r && (a = (t = r).match(/[\.\\]([^\.\\])+$/)) && me[a[1]] ? me[a[1]] : "application/octet-stream";
	}
	function Te(e) {
		for (var r = d(e), t = [], a = 0; a < r.length; a += 76) t.push(r.slice(a, a + 76));
		return t.join("\r\n") + "\r\n";
	}
	function Ee(e) {
		var r = e.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(e) {
			var r = e.charCodeAt(0).toString(16).toUpperCase();
			return "=" + (1 == r.length ? "0" + r : r);
		});
		"\n" == (r = r.replace(/ $/gm, "=20").replace(/\t$/gm, "=09")).charAt(0) && (r = "=0D" + r.slice(1));
		for (var t = [], a = (r = r.replace(/\r(?!\n)/gm, "=0D").replace(/\n\n/gm, "\n=0A").replace(/([^\r\n])\n/gm, "$1=0A")).split("\r\n"), n = 0; n < a.length; ++n) {
			var s = a[n];
			if (0 != s.length) for (var i = 0; i < s.length;) {
				var c = 76, o = s.slice(i, i + c);
				"=" == o.charAt(c - 1) ? c-- : "=" == o.charAt(c - 2) ? c -= 2 : "=" == o.charAt(c - 3) && (c -= 3), o = s.slice(i, i + c), (i += c) < s.length && (o += "="), t.push(o);
			}
			else t.push("");
		}
		return t.join("\r\n");
	}
	function we(e, r, t) {
		for (var a, n = "", s = "", i = "", c = 0; c < 10; ++c) {
			var o = r[c];
			if (!o || o.match(/^\s*$/)) break;
			var l = o.match(/^([^:]*?):\s*([^\s].*)$/);
			if (l) switch (l[1].toLowerCase()) {
				case "content-location":
					n = l[2].trim();
					break;
				case "content-type":
					i = l[2].trim();
					break;
				case "content-transfer-encoding": s = l[2].trim();
			}
		}
		switch (++c, s.toLowerCase()) {
			case "base64":
				a = E(p(r.slice(c).join("")));
				break;
			case "quoted-printable":
				a = function(e) {
					for (var r = [], t = 0; t < e.length; ++t) {
						for (var a = e[t]; t <= e.length && "=" == a.charAt(a.length - 1);) a = a.slice(0, a.length - 1) + e[++t];
						r.push(a);
					}
					for (var n = 0; n < r.length; ++n) r[n] = r[n].replace(/[=][0-9A-Fa-f]{2}/g, function(e) {
						return String.fromCharCode(parseInt(e.slice(1), 16));
					});
					return E(r.join("\r\n"));
				}(r.slice(c));
				break;
			default: throw new Error("Unsupported Content-Transfer-Encoding " + s);
		}
		var f = Ae(e, n.slice(t.length), a, { unsafe: !0 });
		i && (f.ctype = i);
	}
	function Ae(e, r, t, n) {
		var s = n && n.unsafe;
		s || u(e);
		var i = !s && be.find(e, r);
		if (!i) {
			var c = e.FullPaths[0];
			r.slice(0, c.length) == c ? c = r : ("/" != c.slice(-1) && (c += "/"), c = (c + r).replace("//", "/")), i = {
				name: a(r),
				type: 2
			}, e.FileIndex.push(i), e.FullPaths.push(c), s || be.utils.cfb_gc(e);
		}
		return i.content = t, i.size = t ? t.length : 0, n && (n.CLSID && (i.clsid = n.CLSID), n.mt && (i.mt = n.mt), n.ct && (i.ct = n.ct)), i;
	}
	return r.find = function(e, r) {
		var t = e.FullPaths.map(function(e) {
			return e.toUpperCase();
		}), a = t.map(function(e) {
			var r = e.split("/");
			return r[r.length - ("/" == e.slice(-1) ? 2 : 1)];
		}), n = !1;
		47 === r.charCodeAt(0) ? (n = !0, r = t[0].slice(0, -1) + r) : n = -1 !== r.indexOf("/");
		var s = r.toUpperCase(), i = !0 === n ? t.indexOf(s) : a.indexOf(s);
		if (-1 !== i) return e.FileIndex[i];
		var c = !s.match(y);
		for (s = s.replace(S, ""), c && (s = s.replace(y, "!")), i = 0; i < t.length; ++i) {
			if ((c ? t[i].replace(y, "!") : t[i]).replace(S, "") == s) return e.FileIndex[i];
			if ((c ? a[i].replace(y, "!") : a[i]).replace(S, "") == s) return e.FileIndex[i];
		}
		return null;
	}, r.read = function(r, t) {
		var a = t && t.type;
		switch (a || m && Buffer.isBuffer(r) && (a = "buffer"), a || "base64") {
			case "file": return function(r, t) {
				return i(), c(e.readFileSync(r), t);
			}(r, t);
			case "base64": return c(E(p(r)), t);
			case "binary": return c(E(r), t);
		}
		return c(r, t);
	}, r.parse = c, r.write = function(r, t) {
		var a = w(r, t);
		switch (t && t.type || "buffer") {
			case "file": return i(), e.writeFileSync(t.filename, a), a;
			case "binary": return "string" == typeof a ? a : N(a);
			case "base64": return d("string" == typeof a ? a : N(a));
			case "buffer": if (m) return Buffer.isBuffer(a) ? a : v(a);
			case "array": return "string" == typeof a ? E(a) : a;
		}
		return a;
	}, r.writeFile = function(r, t, a) {
		i();
		var n = w(r, a);
		e.writeFileSync(t, n);
	}, r.utils = {
		cfb_new: function(e) {
			var r = {};
			return u(r, e), r;
		},
		cfb_add: Ae,
		cfb_del: function(e, r) {
			u(e);
			var t = be.find(e, r);
			if (t) {
				for (var a = 0; a < e.FileIndex.length; ++a) if (e.FileIndex[a] == t) return e.FileIndex.splice(a, 1), e.FullPaths.splice(a, 1), !0;
			}
			return !1;
		},
		cfb_mov: function(e, r, t) {
			u(e);
			var n = be.find(e, r);
			if (n) {
				for (var s = 0; s < e.FileIndex.length; ++s) if (e.FileIndex[s] == n) return e.FileIndex[s].name = a(t), e.FullPaths[s] = t, !0;
			}
			return !1;
		},
		cfb_gc: function(e) {
			g(e, !0);
		},
		ReadShift: pt,
		CheckField: Tt,
		prep_blob: Et,
		bconcat: k,
		use_zlib: function(e) {
			try {
				var r = new e.InflateRaw();
				if (r._processChunk(new Uint8Array([3, 0]), r._finishFlushFlag), !r.bytesRead) throw new Error("zlib does not expose bytesRead");
				A = e;
			} catch (t) {
				console.error("cannot use native zlib: " + (t.message || t));
			}
		},
		_deflateRaw: ne,
		_inflateRaw: he,
		consts: I
	}, r;
}();
function Te(e) {
	for (var r = Object.keys(e), t = [], a = 0; a < r.length; ++a) Object.prototype.hasOwnProperty.call(e, r[a]) && t.push(r[a]);
	return t;
}
function Ee(e) {
	for (var r = [], t = Te(e), a = 0; a !== t.length; ++a) r[e[t[a]]] = t[a];
	return r;
}
var we = Date.UTC(1899, 11, 30, 0, 0, 0), Ae = Date.UTC(1899, 11, 31, 0, 0, 0), ke = Date.UTC(1904, 0, 1, 0, 0, 0);
function Se(e, r) {
	var t = (e.getTime() - we) / 864e5;
	return r ? (t -= 1462) < -1402 ? t - 1 : t : t < 60 ? t - 1 : t;
}
function ye(e) {
	if (e >= 60 && e < 61) return e;
	var r = /* @__PURE__ */ new Date();
	return r.setTime(24 * (e > 60 ? e : e + 1) * 60 * 60 * 1e3 + we), r;
}
function Ce(e) {
	var r = 0, t = 0, a = !1, n = e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
	if (!n) throw new Error("|" + e + "| is not an ISO8601 Duration");
	for (var s = 1; s != n.length; ++s) if (n[s]) {
		switch (t = 1, s > 3 && (a = !0), n[s].slice(n[s].length - 1)) {
			case "Y": throw new Error("Unsupported ISO Duration Field: " + n[s].slice(n[s].length - 1));
			case "D": t *= 24;
			case "H": t *= 60;
			case "M":
				if (!a) throw new Error("Unsupported ISO Duration Field: M");
				t *= 60;
		}
		r += t * parseInt(n[s], 10);
	}
	return r;
}
var _e = /^(\d+):(\d+)(:\d+)?(\.\d+)?$/, xe = /^(\d+)-(\d+)-(\d+)$/, Oe = /^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)?(\.\d+)?$/;
function Re(e, r) {
	if (e instanceof Date) return e;
	var t = e.match(_e);
	return t ? new Date((r ? ke : Ae) + 1e3 * (60 * (60 * parseInt(t[1], 10) + parseInt(t[2], 10)) + (t[3] ? parseInt(t[3].slice(1), 10) : 0)) + (t[4] ? parseInt((t[4] + "000").slice(1, 4), 10) : 0)) : (t = e.match(xe)) ? new Date(Date.UTC(+t[1], +t[2] - 1, +t[3], 0, 0, 0, 0)) : (t = e.match(Oe)) ? new Date(Date.UTC(+t[1], +t[2] - 1, +t[3], +t[4], +t[5], t[6] && parseInt(t[6].slice(1), 10) || 0, t[7] && parseInt((t[7] + "0000").slice(1, 4), 10) || 0)) : new Date(e);
}
function Ie(e, r) {
	if (m && Buffer.isBuffer(e)) {
		if (r && g) {
			if (255 == e[0] && 254 == e[1]) return Ir(e.slice(2).toString("utf16le"));
			if (254 == e[1] && 255 == e[2]) return Ir(o(e.slice(2).toString("binary")));
		}
		return e.toString("binary");
	}
	if ("undefined" != typeof TextDecoder) try {
		if (r) {
			if (255 == e[0] && 254 == e[1]) return Ir(new TextDecoder("utf-16le").decode(e.slice(2)));
			if (254 == e[0] && 255 == e[1]) return Ir(new TextDecoder("utf-16be").decode(e.slice(2)));
		}
		var t = {
			"€": "",
			"‚": "",
			"ƒ": "",
			"„": "",
			"…": "",
			"†": "",
			"‡": "",
			"ˆ": "",
			"‰": "",
			"Š": "",
			"‹": "",
			"Œ": "",
			"Ž": "",
			"‘": "",
			"’": "",
			"“": "",
			"”": "",
			"•": "",
			"–": "",
			"—": "",
			"˜": "",
			"™": "",
			"š": "",
			"›": "",
			"œ": "",
			"ž": "",
			"Ÿ": ""
		};
		return Array.isArray(e) && (e = new Uint8Array(e)), new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function(e) {
			return t[e] || e;
		});
	} catch (s) {}
	var a = [], n = 0;
	try {
		for (n = 0; n < e.length - 65536; n += 65536) a.push(String.fromCharCode.apply(0, e.slice(n, n + 65536)));
		a.push(String.fromCharCode.apply(0, e.slice(n)));
	} catch (s) {
		try {
			for (; n < e.length - 16384; n += 16384) a.push(String.fromCharCode.apply(0, e.slice(n, n + 16384)));
			a.push(String.fromCharCode.apply(0, e.slice(n)));
		} catch (s) {
			for (; n != e.length; ++n) a.push(String.fromCharCode(e[n]));
		}
	}
	return a.join("");
}
function Ne(e) {
	if ("undefined" != typeof JSON && !Array.isArray(e)) return JSON.parse(JSON.stringify(e));
	if ("object" != typeof e || null == e) return e;
	if (e instanceof Date) return new Date(e.getTime());
	var r = {};
	for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = Ne(e[t]));
	return r;
}
function De(e, r) {
	for (var t = ""; t.length < r;) t += e;
	return t;
}
function Fe(e) {
	var r = Number(e);
	if (!isNaN(r)) return isFinite(r) ? r : NaN;
	if (!/\d/.test(e)) return r;
	var t = 1, a = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() {
		return t *= 100, "";
	});
	return isNaN(r = Number(a)) ? (a = a.replace(/[(]([^()]*)[)]/, function(e, r) {
		return t = -t, r;
	}), isNaN(r = Number(a)) ? r : r / t) : r / t;
}
var Pe = /^(0?\d|1[0-2])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))\s+([ap])m?$/, Me = /^([01]?\d|2[0-3])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))$/, Le = /^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)(\.\d+)?[Z]?$/, Ue = -177984e5 == (/* @__PURE__ */ new Date("6/9/69 00:00 UTC")).valueOf(), Be = [
	"january",
	"february",
	"march",
	"april",
	"may",
	"june",
	"july",
	"august",
	"september",
	"october",
	"november",
	"december"
];
function He(e) {
	if (Le.test(e)) return -1 == e.indexOf("Z") ? Ve(new Date(e)) : new Date(e);
	var r = e.toLowerCase(), t = r.replace(/\s+/g, " ").trim(), a = t.match(Pe);
	if (a) return function(e) {
		return e[2] ? e[3] ? e[4] ? new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + ("p" == e[7] ? 12 : 0), +e[2], +e[4], 1e3 * parseFloat(e[3]))) : new Date(Date.UTC(1899, 11, 31, "p" == e[7] ? 12 : 0, +e[1], +e[2], 1e3 * parseFloat(e[3]))) : e[5] ? new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + ("p" == e[7] ? 12 : 0), +e[2], +e[5], e[6] ? 1e3 * parseFloat(e[6]) : 0)) : new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + ("p" == e[7] ? 12 : 0), +e[2], 0, 0)) : new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + ("p" == e[7] ? 12 : 0), 0, 0, 0));
	}(a);
	if (a = t.match(Me)) return function(e) {
		return e[2] ? e[3] ? e[4] ? new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], +e[4], 1e3 * parseFloat(e[3]))) : new Date(Date.UTC(1899, 11, 31, 0, +e[1], +e[2], 1e3 * parseFloat(e[3]))) : e[5] ? new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], +e[5], e[6] ? 1e3 * parseFloat(e[6]) : 0)) : new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], 0, 0)) : new Date(Date.UTC(1899, 11, 31, +e[1], 0, 0, 0));
	}(a);
	if (a = t.match(Oe)) return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], a[6] && parseInt(a[6].slice(1), 10) || 0, a[7] && parseInt((a[7] + "0000").slice(1, 4), 10) || 0));
	var n = new Date(Ue && -1 == e.indexOf("UTC") ? e + " UTC" : e), s = /* @__PURE__ */ new Date(NaN), i = n.getYear();
	n.getMonth();
	var c = n.getDate();
	if (isNaN(c)) return s;
	if (r.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
		if ((r = r.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, "")).length > 3 && -1 == Be.indexOf(r)) return s;
	} else if (r.replace(/[ap]m?/, "").match(/[a-z]/)) return s;
	return i < 0 || i > 8099 || e.match(/[^-0-9:,\/\\\ ]/) ? s : n;
}
var We = function() {
	var e = 5 == "abacaba".split(/(:?b)/i).length;
	return function(r, t, a) {
		if (e || "string" == typeof t) return r.split(t);
		for (var n = r.split(t), s = [n[0]], i = 1; i < n.length; ++i) s.push(a), s.push(n[i]);
		return s;
	};
}();
function ze(e) {
	return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds());
}
function Ve(e) {
	return new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
}
function Ge(e) {
	var r = e.slice(0, 1024).indexOf("<!DOCTYPE");
	if (-1 == r) return e;
	var t = e.match(/<[\w]/);
	return t ? e.slice(0, r) + e.slice(t.index) : e;
}
function $e(e, r, t) {
	for (var a = [], n = e.indexOf(r); n > -1;) {
		var s = e.indexOf(t, n + r.length);
		if (-1 == s) break;
		a.push(e.slice(n, s + t.length)), n = e.indexOf(r, s + t.length);
	}
	return a.length > 0 ? a : null;
}
function Xe(e, r, t) {
	var a = [], n = 0, s = e.indexOf(r);
	if (-1 == s) return e;
	for (; s > -1;) {
		a.push(e.slice(n, s));
		var i = e.indexOf(t, s + r.length);
		if (-1 == i) break;
		-1 == (s = e.indexOf(r, n = i + t.length)) && a.push(e.slice(n));
	}
	return a.join("");
}
var je = {
	" ": 1,
	"	": 1,
	"\r": 1,
	"\n": 1,
	">": 1
};
function Ke(e, r) {
	for (var t = e.indexOf("<" + r), a = r.length + 1, n = e.length; t >= 0 && t <= n - a && !je[e.charAt(t + a)];) t = e.indexOf("<" + r, t + 1);
	if (-1 === t) return null;
	var s = e.indexOf(">", t + r.length);
	if (-1 === s) return null;
	var i = "</" + r + ">", c = e.indexOf(i, s);
	return -1 == c ? null : [e.slice(t, c + i.length), e.slice(s + 1, c)];
}
var Ye = function() {
	var e = {};
	return function(r, t) {
		var a = e[t];
		a || (e[t] = a = [new RegExp("<(?:\\w+:)?" + t + "\\b[^<>]*>", "g"), new RegExp("</(?:\\w+:)?" + t + ">", "g")]), a[0].lastIndex = a[1].lastIndex = 0;
		var n = a[0].exec(r);
		if (!n) return null;
		var s = n.index, i = a[0].lastIndex;
		if (a[1].lastIndex = a[0].lastIndex, !(n = a[1].exec(r))) return null;
		var c = n.index, o = a[1].lastIndex;
		return [r.slice(s, o), r.slice(i, c)];
	};
}(), Je = function() {
	var e = {};
	return function(r, t) {
		var a, n = [], s = e[t];
		for (s || (e[t] = s = [new RegExp("<(?:\\w+:)?" + t + "\\b[^<>]*>", "g"), new RegExp("</(?:\\w+:)?" + t + ">", "g")]), s[0].lastIndex = s[1].lastIndex = 0; a = s[0].exec(r);) {
			var i = a.index;
			if (s[1].lastIndex = s[0].lastIndex, !(a = s[1].exec(r))) return null;
			var c = s[1].lastIndex;
			n.push(r.slice(i, c)), s[0].lastIndex = s[1].lastIndex;
		}
		return 0 == n.length ? null : n;
	};
}(), Ze = function() {
	var e = {};
	return function(r, t) {
		var a, n = [], s = e[t];
		s || (e[t] = s = [new RegExp("<(?:\\w+:)?" + t + "\\b[^<>]*>", "g"), new RegExp("</(?:\\w+:)?" + t + ">", "g")]), s[0].lastIndex = s[1].lastIndex = 0;
		for (var i = 0, c = 0; a = s[0].exec(r);) {
			if (i = a.index, n.push(r.slice(c, i)), c = i, s[1].lastIndex = s[0].lastIndex, !(a = s[1].exec(r))) return null;
			c = s[1].lastIndex, s[0].lastIndex = s[1].lastIndex;
		}
		return n.push(r.slice(c)), 0 == n.length ? "" : n.join("");
	};
}(), qe = function() {
	var e = {};
	return function(r, t) {
		var a, n = [], s = e[t];
		for (s || (e[t] = s = [new RegExp("<" + t + "\\b[^<>]*>", "ig"), new RegExp("</" + t + ">", "ig")]), s[0].lastIndex = s[1].lastIndex = 0; a = s[0].exec(r);) {
			var i = a.index;
			if (s[1].lastIndex = s[0].lastIndex, !(a = s[1].exec(r))) return null;
			var c = s[1].lastIndex;
			n.push(r.slice(i, c)), s[0].lastIndex = s[1].lastIndex;
		}
		return 0 == n.length ? null : n;
	};
}();
function Qe(e) {
	return e ? e.content && e.type ? Ie(e.content, !0) : e.data ? l(e.data) : e.asNodeBuffer && m ? l(e.asNodeBuffer().toString("binary")) : e.asBinary ? l(e.asBinary()) : e._data && e._data.getContent ? l(Ie(Array.prototype.slice.call(e._data.getContent(), 0))) : null : null;
}
function er(e) {
	if (!e) return null;
	if (e.data) return i(e.data);
	if (e.asNodeBuffer && m) return e.asNodeBuffer();
	if (e._data && e._data.getContent) {
		var r = e._data.getContent();
		return "string" == typeof r ? i(r) : Array.prototype.slice.call(r);
	}
	return e.content && e.type ? e.content : null;
}
function rr(e, r) {
	for (var t = e.FullPaths || Te(e.files), a = r.toLowerCase().replace(/[\/]/g, "\\"), n = a.replace(/\\/g, "/"), s = 0; s < t.length; ++s) {
		var i = t[s].replace(/^Root Entry[\/]/, "").toLowerCase();
		if (a == i || n == i) return e.files ? e.files[t[s]] : e.FileIndex[s];
	}
	return null;
}
function tr(e, r) {
	var t = rr(e, r);
	if (null == t) throw new Error("Cannot find file " + r + " in zip");
	return t;
}
function ar(e, r, t) {
	if (!t) return (a = tr(e, r)) && ".bin" === a.name.slice(-4) ? er(a) : Qe(a);
	var a;
	if (!r) return null;
	try {
		return ar(e, r);
	} catch (n) {
		return null;
	}
}
function nr(e, r, t) {
	if (!t) return Qe(tr(e, r));
	if (!r) return null;
	try {
		return nr(e, r);
	} catch (a) {
		return null;
	}
}
function sr(e, r, t) {
	if (!t) return er(tr(e, r));
	if (!r) return null;
	try {
		return sr(e, r);
	} catch (a) {
		return null;
	}
}
function ir(e) {
	for (var r = e.FullPaths || Te(e.files), t = [], a = 0; a < r.length; ++a) "/" != r[a].slice(-1) && t.push(r[a].replace(/^Root Entry[\/]/, ""));
	return t.sort();
}
function cr(e, r) {
	switch (r.type) {
		case "base64": return be.read(e, { type: "base64" });
		case "binary": return be.read(e, { type: "binary" });
		case "buffer":
		case "array": return be.read(e, { type: "buffer" });
	}
	throw new Error("Unrecognized type " + r.type);
}
function or(e, r) {
	if ("/" == e.charAt(0)) return e.slice(1);
	var t = r.split("/");
	"/" != r.slice(-1) && t.pop();
	for (var a = e.split("/"); 0 !== a.length;) {
		var n = a.shift();
		".." === n ? t.pop() : "." !== n && t.push(n);
	}
	return t.join("/");
}
var lr = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n", fr = /\s([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g, hr = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?<>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'"<>\s=]+))*\s*[\/\?]?>/gm, ur = lr.match(hr) ? hr : /<[^<>]*>/g, dr = /<\w*:/, pr = /<(\/?)\w+:/;
function mr(e, r, t) {
	for (var a = {}, n = 0, s = 0; n !== e.length && 32 !== (s = e.charCodeAt(n)) && 10 !== s && 13 !== s; ++n);
	if (r || (a[0] = e.slice(0, n)), n === e.length) return a;
	var i = e.match(fr), c = 0, o = "", l = 0, f = "", h = "", u = 1;
	if (i) for (l = 0; l != i.length; ++l) {
		for (h = i[l].slice(1), s = 0; s != h.length && 61 !== h.charCodeAt(s); ++s);
		for (f = h.slice(0, s).trim(); 32 == h.charCodeAt(s + 1);) ++s;
		for (u = 34 == (n = h.charCodeAt(s + 1)) || 39 == n ? 1 : 0, o = h.slice(s + 1 + u, h.length - u), c = 0; c != f.length && 58 !== f.charCodeAt(c); ++c);
		if (c === f.length) f.indexOf("_") > 0 && (f = f.slice(0, f.indexOf("_"))), a[f] = o, t || (a[f.toLowerCase()] = o);
		else {
			var d = (5 === c && "xmlns" === f.slice(0, 5) ? "xmlns" : "") + f.slice(c + 1);
			if (a[d] && "ext" == f.slice(c - 3, c)) continue;
			a[d] = o, t || (a[d.toLowerCase()] = o);
		}
	}
	return a;
}
function vr(e, r, t) {
	for (var a = {}, n = 0, s = 0; n !== e.length && 32 !== (s = e.charCodeAt(n)) && 10 !== s && 13 !== s; ++n);
	if (r || (a[0] = e.slice(0, n)), n === e.length) return a;
	var i = e.match(fr), c = "", o = 0, l = "", f = "", h = 1;
	if (i) for (o = 0; o != i.length; ++o) {
		for (f = i[o].slice(1), s = 0; s != f.length && 61 !== f.charCodeAt(s); ++s);
		for (l = f.slice(0, s).trim(); 32 == f.charCodeAt(s + 1);) ++s;
		h = 34 == (n = f.charCodeAt(s + 1)) || 39 == n ? 1 : 0, c = f.slice(s + 1 + h, f.length - h), l.indexOf("_") > 0 && (l = l.slice(0, l.indexOf("_"))), a[l] = c, t || (a[l.toLowerCase()] = c);
	}
	return a;
}
function gr(e) {
	return e.replace(pr, "<$1");
}
var br = {
	"&quot;": "\"",
	"&apos;": "'",
	"&gt;": ">",
	"&lt;": "<",
	"&amp;": "&"
}, Tr = Ee(br), Er = function() {
	var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/gi, r = /_x([\da-fA-F]{4})_/gi;
	function t(a) {
		var n = a + "", s = n.indexOf("<![CDATA[");
		if (-1 == s) return n.replace(e, function(e, r) {
			return br[e] || String.fromCharCode(parseInt(r, e.indexOf("x") > -1 ? 16 : 10)) || e;
		}).replace(r, function(e, r) {
			return String.fromCharCode(parseInt(r, 16));
		});
		var i = n.indexOf("]]>");
		return t(n.slice(0, s)) + n.slice(s + 9, i) + t(n.slice(i + 3));
	}
	return function(e, r) {
		var a = t(e);
		return r ? a.replace(/\r\n/g, "\n") : a;
	};
}(), wr = /[&<>'"]/g, Ar = /[\u0000-\u001f]/g;
function kr(e) {
	return (e + "").replace(wr, function(e) {
		return Tr[e];
	}).replace(/\n/g, "<br/>").replace(Ar, function(e) {
		return "&#x" + ("000" + e.charCodeAt(0).toString(16)).slice(-4) + ";";
	});
}
var Sr = function() {
	var e = /&#(\d+);/g;
	function r(e, r) {
		return String.fromCharCode(parseInt(r, 10));
	}
	return function(t) {
		return t.replace(e, r);
	};
}();
function yr(e) {
	switch (e) {
		case 1:
		case !0:
		case "1":
		case "true": return !0;
		case 0:
		case !1:
		case "0":
		case "false": return !1;
	}
	return !1;
}
function Cr(e) {
	for (var r = "", t = 0, a = 0, n = 0, s = 0, i = 0, c = 0; t < e.length;) (a = e.charCodeAt(t++)) < 128 ? r += String.fromCharCode(a) : (n = e.charCodeAt(t++), a > 191 && a < 224 ? (i = (31 & a) << 6, i |= 63 & n, r += String.fromCharCode(i)) : (s = e.charCodeAt(t++), a < 240 ? r += String.fromCharCode((15 & a) << 12 | (63 & n) << 6 | 63 & s) : (c = ((7 & a) << 18 | (63 & n) << 12 | (63 & s) << 6 | 63 & (i = e.charCodeAt(t++))) - 65536, r += String.fromCharCode(55296 + (c >>> 10 & 1023)), r += String.fromCharCode(56320 + (1023 & c)))));
	return r;
}
function _r(e) {
	var r, t, a, n = b(2 * e.length), s = 1, i = 0, c = 0;
	for (t = 0; t < e.length; t += s) s = 1, (a = e.charCodeAt(t)) < 128 ? r = a : a < 224 ? (r = 64 * (31 & a) + (63 & e.charCodeAt(t + 1)), s = 2) : a < 240 ? (r = 4096 * (15 & a) + 64 * (63 & e.charCodeAt(t + 1)) + (63 & e.charCodeAt(t + 2)), s = 3) : (s = 4, r = 262144 * (7 & a) + 4096 * (63 & e.charCodeAt(t + 1)) + 64 * (63 & e.charCodeAt(t + 2)) + (63 & e.charCodeAt(t + 3)), c = 55296 + ((r -= 65536) >>> 10 & 1023), r = 56320 + (1023 & r)), 0 !== c && (n[i++] = 255 & c, n[i++] = c >>> 8, c = 0), n[i++] = r % 256, n[i++] = r >>> 8;
	return n.slice(0, i).toString("ucs2");
}
function xr(e) {
	return v(e, "binary").toString("utf8");
}
var Or = "foo bar bazâð£", Rr = m && (xr(Or) == Cr(Or) && xr || _r(Or) == Cr(Or) && _r) || Cr, Ir = m ? function(e) {
	return v(e, "utf8").toString("binary");
} : function(e) {
	for (var r = [], t = 0, a = 0, n = 0; t < e.length;) switch (a = e.charCodeAt(t++), !0) {
		case a < 128:
			r.push(String.fromCharCode(a));
			break;
		case a < 2048:
			r.push(String.fromCharCode(192 + (a >> 6))), r.push(String.fromCharCode(128 + (63 & a)));
			break;
		case a >= 55296 && a < 57344:
			a -= 55296, n = e.charCodeAt(t++) - 56320 + (a << 10), r.push(String.fromCharCode(240 + (n >> 18 & 7))), r.push(String.fromCharCode(144 + (n >> 12 & 63))), r.push(String.fromCharCode(128 + (n >> 6 & 63))), r.push(String.fromCharCode(128 + (63 & n)));
			break;
		default: r.push(String.fromCharCode(224 + (a >> 12))), r.push(String.fromCharCode(128 + (a >> 6 & 63))), r.push(String.fromCharCode(128 + (63 & a)));
	}
	return r.join("");
}, Nr = function() {
	var e = [
		["nbsp", " "],
		["middot", "·"],
		["quot", "\""],
		["apos", "'"],
		["gt", ">"],
		["lt", "<"],
		["amp", "&"]
	].map(function(e) {
		return [new RegExp("&" + e[0] + ";", "ig"), e[1]];
	});
	return function(r) {
		for (var t = r.replace(/^[\t\n\r ]+/, "").replace(/(^|[^\t\n\r ])[\t\n\r ]+$/, "$1").replace(/>\s+/g, ">").replace(/\b\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, "\n").replace(/<[^<>]*>/g, ""), a = 0; a < e.length; ++a) t = t.replace(e[a][0], e[a][1]);
		return t;
	};
}(), Dr = /<\/?(?:vt:)?variant>/g, Fr = /<(?:vt:)([^<"'>]*)>([\s\S]*)</;
function Pr(e, r) {
	var t = mr(e), a = Je(e, t.baseType) || [], n = [];
	if (a.length != t.size) {
		if (r.WTF) throw new Error("unexpected vector length " + a.length + " != " + t.size);
		return n;
	}
	return a.forEach(function(e) {
		var r = e.replace(Dr, "").match(Fr);
		r && n.push({
			v: Rr(r[2]),
			t: r[1]
		});
	}), n;
}
var Mr = /(^\s|\s$|\n)/;
function Lr(e, r, t) {
	return "<" + e + (null != t ? function(e) {
		return Te(e).map(function(r) {
			return " " + r + "=\"" + e[r] + "\"";
		}).join("");
	}(t) : "") + (null != r ? (r.match(Mr) ? " xml:space=\"preserve\"" : "") + ">" + r + "</" + e : "/") + ">";
}
function Ur(e) {
	if (m && Buffer.isBuffer(e)) return e.toString("utf8");
	if ("string" == typeof e) return e;
	if ("undefined" != typeof Uint8Array && e instanceof Uint8Array) return Rr(w(A(e)));
	throw new Error("Bad input format: expected Buffer or string");
}
var Br = /<([\/]?)([^\s?><!\/:"]*:|)([^\s?<>:\/"]+)(?:\s+[^<>=?"'\s]+="[^"]*?")*\s*[\/]?>/gm, Hr = [
	"http://schemas.openxmlformats.org/spreadsheetml/2006/main",
	"http://purl.oclc.org/ooxml/spreadsheetml/main",
	"http://schemas.microsoft.com/office/excel/2006/main",
	"http://schemas.microsoft.com/office/excel/2006/2"
], Wr = function(e) {
	for (var r = [], t = 0; t < e[0].length; ++t) if (e[0][t]) for (var a = 0, n = e[0][t].length; a < n; a += 10240) r.push.apply(r, e[0][t].slice(a, a + 10240));
	return r;
}, zr = m ? function(e) {
	return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(e) {
		return Buffer.isBuffer(e) ? e : v(e);
	})) : Wr(e);
} : Wr, Vr = function(e, r, t) {
	for (var a = [], n = r; n < t; n += 2) a.push(String.fromCharCode(lt(e, n)));
	return a.join("").replace(S, "");
}, Gr = m ? function(e, r, t) {
	return Buffer.isBuffer(e) && g ? e.toString("utf16le", r, t).replace(S, "") : Vr(e, r, t);
} : Vr, $r = function(e, r, t) {
	for (var a = [], n = r; n < r + t; ++n) a.push(("0" + e[n].toString(16)).slice(-2));
	return a.join("");
}, Xr = m ? function(e, r, t) {
	return Buffer.isBuffer(e) ? e.toString("hex", r, r + t) : $r(e, r, t);
} : $r, jr = function(e, r, t) {
	for (var a = [], n = r; n < t; n++) a.push(String.fromCharCode(ot(e, n)));
	return a.join("");
}, Kr = m ? function(e, r, t) {
	return Buffer.isBuffer(e) ? e.toString("utf8", r, t) : jr(e, r, t);
} : jr, Yr = function(e, r) {
	var t = ht(e, r);
	return t > 0 ? Kr(e, r + 4, r + 4 + t - 1) : "";
}, Jr = Yr, Zr = function(e, r) {
	var t = ht(e, r);
	return t > 0 ? Kr(e, r + 4, r + 4 + t - 1) : "";
}, qr = Zr, Qr = function(e, r) {
	var t = 2 * ht(e, r);
	return t > 0 ? Kr(e, r + 4, r + 4 + t - 1) : "";
}, et = Qr, rt = function(e, r) {
	var t = ht(e, r);
	return t > 0 ? Gr(e, r + 4, r + 4 + t) : "";
}, tt = rt, at = function(e, r) {
	var t = ht(e, r);
	return t > 0 ? Kr(e, r + 4, r + 4 + t) : "";
}, nt = at, st = function(e, r) {
	return function(e, r) {
		for (var t = 1 - 2 * (e[r + 7] >>> 7), a = ((127 & e[r + 7]) << 4) + (e[r + 6] >>> 4 & 15), n = 15 & e[r + 6], s = 5; s >= 0; --s) n = 256 * n + e[r + s];
		return 2047 == a ? 0 == n ? t * (1 / 0) : NaN : (0 == a ? a = -1022 : (a -= 1023, n += Math.pow(2, 52)), t * Math.pow(2, a - 52) * n);
	}(e, r);
}, it = st, ct = function(e) {
	return Array.isArray(e) || "undefined" != typeof Uint8Array && e instanceof Uint8Array;
};
m && (Jr = function(e, r) {
	if (!Buffer.isBuffer(e)) return Yr(e, r);
	var t = e.readUInt32LE(r);
	return t > 0 ? e.toString("utf8", r + 4, r + 4 + t - 1) : "";
}, qr = function(e, r) {
	if (!Buffer.isBuffer(e)) return Zr(e, r);
	var t = e.readUInt32LE(r);
	return t > 0 ? e.toString("utf8", r + 4, r + 4 + t - 1) : "";
}, et = function(e, r) {
	if (!Buffer.isBuffer(e) || !g) return Qr(e, r);
	var t = 2 * e.readUInt32LE(r);
	return e.toString("utf16le", r + 4, r + 4 + t - 1);
}, tt = function(e, r) {
	if (!Buffer.isBuffer(e) || !g) return rt(e, r);
	var t = e.readUInt32LE(r);
	return e.toString("utf16le", r + 4, r + 4 + t);
}, nt = function(e, r) {
	if (!Buffer.isBuffer(e)) return at(e, r);
	var t = e.readUInt32LE(r);
	return e.toString("utf8", r + 4, r + 4 + t);
}, it = function(e, r) {
	return Buffer.isBuffer(e) ? e.readDoubleLE(r) : st(e, r);
}, ct = function(e) {
	return Buffer.isBuffer(e) || Array.isArray(e) || "undefined" != typeof Uint8Array && e instanceof Uint8Array;
});
var ot = function(e, r) {
	return e[r];
}, lt = function(e, r) {
	return 256 * e[r + 1] + e[r];
}, ft = function(e, r) {
	var t = 256 * e[r + 1] + e[r];
	return t < 32768 ? t : -1 * (65535 - t + 1);
}, ht = function(e, r) {
	return e[r + 3] * (1 << 24) + (e[r + 2] << 16) + (e[r + 1] << 8) + e[r];
}, ut = function(e, r) {
	return e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r];
}, dt = function(e, r) {
	return e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3];
};
function pt(e, r) {
	var t, a, n, s, i, c, o = "", l = [];
	switch (r) {
		case "dbcs":
			if (c = this.l, m && Buffer.isBuffer(this) && g) o = this.slice(this.l, this.l + 2 * e).toString("utf16le");
			else for (i = 0; i < e; ++i) o += String.fromCharCode(lt(this, c)), c += 2;
			e *= 2;
			break;
		case "utf8":
			o = Kr(this, this.l, this.l + e);
			break;
		case "utf16le":
			e *= 2, o = Gr(this, this.l, this.l + e);
			break;
		case "wstr": return pt.call(this, e, "dbcs");
		case "lpstr-ansi":
			o = Jr(this, this.l), e = 4 + ht(this, this.l);
			break;
		case "lpstr-cp":
			o = qr(this, this.l), e = 4 + ht(this, this.l);
			break;
		case "lpwstr":
			o = et(this, this.l), e = 4 + 2 * ht(this, this.l);
			break;
		case "lpp4":
			e = 4 + ht(this, this.l), o = tt(this, this.l), 2 & e && (e += 2);
			break;
		case "8lpp4":
			e = 4 + ht(this, this.l), o = nt(this, this.l), 3 & e && (e += 4 - (3 & e));
			break;
		case "cstr":
			for (e = 0, o = ""; 0 !== (n = ot(this, this.l + e++));) l.push(f(n));
			o = l.join("");
			break;
		case "_wstr":
			for (e = 0, o = ""; 0 !== (n = lt(this, this.l + e));) l.push(f(n)), e += 2;
			e += 2, o = l.join("");
			break;
		case "dbcs-cont":
			for (o = "", c = this.l, i = 0; i < e; ++i) {
				if (this.lens && -1 !== this.lens.indexOf(c)) return n = ot(this, c), this.l = c + 1, s = pt.call(this, e - i, n ? "dbcs-cont" : "sbcs-cont"), l.join("") + s;
				l.push(f(lt(this, c))), c += 2;
			}
			o = l.join(""), e *= 2;
			break;
		case "cpstr":
		case "sbcs-cont":
			for (o = "", c = this.l, i = 0; i != e; ++i) {
				if (this.lens && -1 !== this.lens.indexOf(c)) return n = ot(this, c), this.l = c + 1, s = pt.call(this, e - i, n ? "dbcs-cont" : "sbcs-cont"), l.join("") + s;
				l.push(f(ot(this, c))), c += 1;
			}
			o = l.join("");
			break;
		default: switch (e) {
			case 1: return t = ot(this, this.l), this.l++, t;
			case 2: return t = ("i" === r ? ft : lt)(this, this.l), this.l += 2, t;
			case 4:
			case -4: return "i" !== r && 128 & this[this.l + 3] ? (a = ht(this, this.l), this.l += 4, a) : (t = (e > 0 ? ut : dt)(this, this.l), this.l += 4, t);
			case 8:
			case -8:
				if ("f" === r) return a = 8 == e ? it(this, this.l) : it([
					this[this.l + 7],
					this[this.l + 6],
					this[this.l + 5],
					this[this.l + 4],
					this[this.l + 3],
					this[this.l + 2],
					this[this.l + 1],
					this[this.l + 0]
				], 0), this.l += 8, a;
				e = 8;
			case 16: o = Xr(this, this.l, e);
		}
	}
	return this.l += e, o;
}
var mt = function(e, r, t) {
	e[t] = 255 & r, e[t + 1] = r >>> 8 & 255, e[t + 2] = r >>> 16 & 255, e[t + 3] = r >>> 24 & 255;
}, vt = function(e, r, t) {
	e[t] = 255 & r, e[t + 1] = r >> 8 & 255, e[t + 2] = r >> 16 & 255, e[t + 3] = r >> 24 & 255;
}, gt = function(e, r, t) {
	e[t] = 255 & r, e[t + 1] = r >>> 8 & 255;
};
function bt(e, r, t) {
	var a = 0, n = 0;
	if ("dbcs" === t) {
		for (n = 0; n != r.length; ++n) gt(this, r.charCodeAt(n), this.l + 2 * n);
		a = 2 * r.length;
	} else if ("sbcs" === t || "cpstr" == t) {
		for (r = r.replace(/[^\x00-\x7F]/g, "_"), n = 0; n != r.length; ++n) this[this.l + n] = 255 & r.charCodeAt(n);
		a = r.length;
	} else {
		if ("hex" === t) {
			for (; n < e; ++n) this[this.l++] = parseInt(r.slice(2 * n, 2 * n + 2), 16) || 0;
			return this;
		}
		if ("utf16le" === t) {
			var s = Math.min(this.l + e, this.length);
			for (n = 0; n < Math.min(r.length, e); ++n) {
				var i = r.charCodeAt(n);
				this[this.l++] = 255 & i, this[this.l++] = i >> 8;
			}
			for (; this.l < s;) this[this.l++] = 0;
			return this;
		}
		switch (e) {
			case 1:
				a = 1, this[this.l] = 255 & r;
				break;
			case 2:
				a = 2, this[this.l] = 255 & r, r >>>= 8, this[this.l + 1] = 255 & r;
				break;
			case 3:
				a = 3, this[this.l] = 255 & r, r >>>= 8, this[this.l + 1] = 255 & r, r >>>= 8, this[this.l + 2] = 255 & r;
				break;
			case 4:
				a = 4, mt(this, r, this.l);
				break;
			case 8: if (a = 8, "f" === t) {
				(function(e, r, t) {
					var a = (r < 0 || 1 / r == -1 / 0 ? 1 : 0) << 7, n = 0, s = 0, i = a ? -r : r;
					isFinite(i) ? 0 == i ? n = s = 0 : (n = Math.floor(Math.log(i) / Math.LN2), s = i * Math.pow(2, 52 - n), n <= -1023 && (!isFinite(s) || s < Math.pow(2, 52)) ? n = -1022 : (s -= Math.pow(2, 52), n += 1023)) : (n = 2047, s = isNaN(r) ? 26985 : 0);
					for (var c = 0; c <= 5; ++c, s /= 256) e[t + c] = 255 & s;
					e[t + 6] = (15 & n) << 4 | 15 & s, e[t + 7] = n >> 4 | a;
				})(this, r, this.l);
				break;
			}
			case 16: break;
			case -4: a = 4, vt(this, r, this.l);
		}
	}
	return this.l += a, this;
}
function Tt(e, r) {
	var t = Xr(this, this.l, e.length >> 1);
	if (t !== e) throw new Error(r + "Expected " + e + " saw " + t);
	this.l += e.length >> 1;
}
function Et(e, r) {
	e.l = r, e.read_shift = pt, e.chk = Tt, e.write_shift = bt;
}
function wt(e, r) {
	e.l += r;
}
function At(e) {
	var r = b(e);
	return Et(r, 0), r;
}
function kt(e, r, t) {
	if (e) {
		var a, n, s;
		Et(e, e.l || 0);
		for (var i = e.length, c = 0, o = 0; e.l < i;) {
			128 & (c = e.read_shift(1)) && (c = (127 & c) + ((127 & e.read_shift(1)) << 7));
			var l = tc[c] || tc[65535];
			for (s = 127 & (a = e.read_shift(1)), n = 1; n < 4 && 128 & a; ++n) s += (127 & (a = e.read_shift(1))) << 7 * n;
			o = e.l + s;
			var f = l.f && l.f(e, s, t);
			if (e.l = o, r(f, l, c)) return;
		}
	}
}
function St() {
	var e = [], r = m ? 16384 : 2048;
	m && At(r).copy;
	var t = function(e) {
		var r = At(e);
		return Et(r, 0), r;
	}, a = t(r), n = function() {
		a && (a.l && (a.length > a.l && ((a = a.slice(0, a.l)).l = a.length), a.length > 0 && e.push(a)), a = null);
	}, s = function(e) {
		return a && e < a.length - a.l ? a : (n(), a = t(Math.max(e + 1, r)));
	};
	return {
		next: s,
		push: function(e) {
			n(), null == (a = e).l && (a.l = a.length), s(r);
		},
		end: function() {
			return n(), k(e);
		},
		_bufs: e,
		end2: function() {
			return n(), e;
		}
	};
}
function yt(e, r, t) {
	var a = Ne(e);
	if (r.s ? (a.cRel && (a.c += r.s.c), a.rRel && (a.r += r.s.r)) : (a.cRel && (a.c += r.c), a.rRel && (a.r += r.r)), !t || t.biff < 12) {
		for (; a.c >= 256;) a.c -= 256;
		for (; a.r >= 65536;) a.r -= 65536;
	}
	return a;
}
function Ct(e, r, t) {
	var a = Ne(e);
	return a.s = yt(a.s, r.s, t), a.e = yt(a.e, r.s, t), a;
}
function _t(e, r) {
	if (e.cRel && e.c < 0) for (e = Ne(e); e.c < 0;) e.c += r > 8 ? 16384 : 256;
	if (e.rRel && e.r < 0) for (e = Ne(e); e.r < 0;) e.r += r > 8 ? 1048576 : r > 5 ? 65536 : 16384;
	var t = Ft(e);
	return e.cRel || null == e.cRel || (t = t.replace(/^([A-Z])/, "$$$1")), e.rRel || null == e.rRel || (t = t.replace(/([A-Z]|^)(\d+)$/, "$1$$$2")), t;
}
function xt(e, r) {
	return 0 != e.s.r || e.s.rRel || e.e.r != (r.biff >= 12 ? 1048575 : r.biff >= 8 ? 65536 : 16384) || e.e.rRel ? 0 != e.s.c || e.s.cRel || e.e.c != (r.biff >= 12 ? 16383 : 255) || e.e.cRel ? _t(e.s, r.biff) + ":" + _t(e.e, r.biff) : (e.s.rRel ? "" : "$") + Rt(e.s.r) + ":" + (e.e.rRel ? "" : "$") + Rt(e.e.r) : (e.s.cRel ? "" : "$") + Nt(e.s.c) + ":" + (e.e.cRel ? "" : "$") + Nt(e.e.c);
}
function Ot(e) {
	return parseInt(e.replace(/\$(\d+)$/, "$1"), 10) - 1;
}
function Rt(e) {
	return "" + (e + 1);
}
function It(e) {
	for (var r = e.replace(/^\$([A-Z])/, "$1"), t = 0, a = 0; a !== r.length; ++a) t = 26 * t + r.charCodeAt(a) - 64;
	return t - 1;
}
function Nt(e) {
	if (e < 0) throw new Error("invalid column " + e);
	var r = "";
	for (++e; e; e = Math.floor((e - 1) / 26)) r = String.fromCharCode((e - 1) % 26 + 65) + r;
	return r;
}
function Dt(e) {
	for (var r = 0, t = 0, a = 0; a < e.length; ++a) {
		var n = e.charCodeAt(a);
		n >= 48 && n <= 57 ? r = 10 * r + (n - 48) : n >= 65 && n <= 90 && (t = 26 * t + (n - 64));
	}
	return {
		c: t - 1,
		r: r - 1
	};
}
function Ft(e) {
	for (var r = e.c + 1, t = ""; r; r = (r - 1) / 26 | 0) t = String.fromCharCode((r - 1) % 26 + 65) + t;
	return t + (e.r + 1);
}
function Pt(e) {
	var r = e.indexOf(":");
	return -1 == r ? {
		s: Dt(e),
		e: Dt(e)
	} : {
		s: Dt(e.slice(0, r)),
		e: Dt(e.slice(r + 1))
	};
}
function Mt(e, r) {
	return void 0 === r || "number" == typeof r ? Mt(e.s, e.e) : ("string" != typeof e && (e = Ft(e)), "string" != typeof r && (r = Ft(r)), e == r ? e : e + ":" + r);
}
function Lt(e) {
	var r = {
		s: {
			c: 0,
			r: 0
		},
		e: {
			c: 0,
			r: 0
		}
	}, t = 0, a = 0, n = 0, s = e.length;
	for (t = 0; a < s && !((n = e.charCodeAt(a) - 64) < 1 || n > 26); ++a) t = 26 * t + n;
	for (r.s.c = --t, t = 0; a < s && !((n = e.charCodeAt(a) - 48) < 0 || n > 9); ++a) t = 10 * t + n;
	if (r.s.r = --t, a === s || 10 != n) return r.e.c = r.s.c, r.e.r = r.s.r, r;
	for (++a, t = 0; a != s && !((n = e.charCodeAt(a) - 64) < 1 || n > 26); ++a) t = 26 * t + n;
	for (r.e.c = --t, t = 0; a != s && !((n = e.charCodeAt(a) - 48) < 0 || n > 9); ++a) t = 10 * t + n;
	return r.e.r = --t, r;
}
function Ut(e, r, t) {
	return null == e || null == e.t || "z" == e.t ? "" : void 0 !== e.w ? e.w : ("d" == e.t && !e.z && t && t.dateNF && (e.z = t.dateNF), "e" == e.t ? ha[e.v] || e.v : function(e, r) {
		var t = "d" == e.t && r instanceof Date;
		if (null != e.z) try {
			return e.w = le(e.z, t ? Se(r) : r);
		} catch (a) {}
		try {
			return e.w = le((e.XF || {}).numFmtId || (t ? 14 : 0), t ? Se(r) : r);
		} catch (a) {
			return "" + r;
		}
	}(e, null == r ? e.v : r));
}
function Bt(e, r) {
	var t = r && r.sheet ? r.sheet : "Sheet1", a = {};
	return a[t] = e, {
		SheetNames: [t],
		Sheets: a
	};
}
function Ht(e, r, t) {
	var a = t || {}, n = e ? null != e["!data"] : a.dense, s = e || (n ? { "!data": [] } : {});
	n && !s["!data"] && (s["!data"] = []);
	var i = 0, c = 0;
	if (s && null != a.origin) if ("number" == typeof a.origin) i = a.origin;
	else {
		var o = "string" == typeof a.origin ? Dt(a.origin) : a.origin;
		i = o.r, c = o.c;
	}
	var l = {
		s: {
			c: 1e7,
			r: 1e7
		},
		e: {
			c: 0,
			r: 0
		}
	};
	if (s["!ref"]) {
		var f = Lt(s["!ref"]);
		l.s.c = f.s.c, l.s.r = f.s.r, l.e.c = Math.max(l.e.c, f.e.c), l.e.r = Math.max(l.e.r, f.e.r), -1 == i && (l.e.r = i = s["!ref"] ? f.e.r + 1 : 0);
	} else l.s.c = l.e.c = l.s.r = l.e.r = 0;
	for (var h = [], u = !1, d = 0; d != r.length; ++d) if (r[d]) {
		if (!Array.isArray(r[d])) throw new Error("aoa_to_sheet expects an array of arrays");
		var p = i + d;
		n && (s["!data"][p] || (s["!data"][p] = []), h = s["!data"][p]);
		for (var m = r[d], v = 0; v != m.length; ++v) if (void 0 !== m[v]) {
			var g = {
				v: m[v],
				t: ""
			}, b = c + v;
			if (l.s.r > p && (l.s.r = p), l.s.c > b && (l.s.c = b), l.e.r < p && (l.e.r = p), l.e.c < b && (l.e.c = b), u = !0, !m[v] || "object" != typeof m[v] || Array.isArray(m[v]) || m[v] instanceof Date) if (Array.isArray(g.v) && (g.f = m[v][1], g.v = g.v[0]), null === g.v) if (g.f) g.t = "n";
			else if (a.nullError) g.t = "e", g.v = 0;
			else {
				if (!a.sheetStubs) continue;
				g.t = "z";
			}
			else "number" == typeof g.v ? isFinite(g.v) ? g.t = "n" : isNaN(g.v) ? (g.t = "e", g.v = 15) : (g.t = "e", g.v = 7) : "boolean" == typeof g.v ? g.t = "b" : g.v instanceof Date ? (g.z = a.dateNF || P[14], a.UTC || (g.v = Ve(g.v)), a.cellDates ? (g.t = "d", g.w = le(g.z, Se(g.v, a.date1904))) : (g.t = "n", g.v = Se(g.v, a.date1904), g.w = le(g.z, g.v))) : g.t = "s";
			else g = m[v];
			if (n) h[b] && h[b].z && (g.z = h[b].z), h[b] = g;
			else {
				var T = Nt(b) + (p + 1);
				s[T] && s[T].z && (g.z = s[T].z), s[T] = g;
			}
		}
	}
	return u && l.s.c < 104e5 && (s["!ref"] = Mt(l)), s;
}
function Wt(e, r) {
	return Ht(null, e, r);
}
function zt(e) {
	var r = e.read_shift(4);
	return 0 === r ? "" : e.read_shift(r, "dbcs");
}
function Vt(e) {
	return {
		ich: e.read_shift(2),
		ifnt: e.read_shift(2)
	};
}
function Gt(e, r) {
	var t = e.l, a = e.read_shift(1), n = zt(e), s = [], i = {
		t: n,
		h: n
	};
	if (1 & a) {
		for (var c = e.read_shift(4), o = 0; o != c; ++o) s.push(Vt(e));
		i.r = s;
	} else i.r = [{
		ich: 0,
		ifnt: 0
	}];
	return e.l = t + r, i;
}
var $t = Gt;
function Xt(e) {
	var r = e.read_shift(4), t = e.read_shift(2);
	return t += e.read_shift(1) << 16, e.l++, {
		c: r,
		iStyleRef: t
	};
}
function jt(e) {
	var r = e.read_shift(2);
	return r += e.read_shift(1) << 16, e.l++, {
		c: -1,
		iStyleRef: r
	};
}
var Kt = zt;
function Yt(e) {
	var r = e.read_shift(4);
	return 0 === r || 4294967295 === r ? "" : e.read_shift(r, "dbcs");
}
var Jt = zt, Zt = Yt;
function qt(e) {
	var r = e.slice(e.l, e.l + 4), t = 1 & r[0], a = 2 & r[0];
	e.l += 4;
	var n = 0 === a ? it([
		0,
		0,
		0,
		0,
		252 & r[0],
		r[1],
		r[2],
		r[3]
	], 0) : ut(r, 0) >> 2;
	return t ? n / 100 : n;
}
function Qt(e) {
	var r = {
		s: {},
		e: {}
	};
	return r.s.r = e.read_shift(4), r.e.r = e.read_shift(4), r.s.c = e.read_shift(4), r.e.c = e.read_shift(4), r;
}
var ea = Qt;
function ra(e) {
	if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
	return e.read_shift(8, "f");
}
function ta(e, r) {
	var t = e.read_shift(4);
	switch (t) {
		case 0: return "";
		case 4294967295:
		case 4294967294: return {
			2: "BITMAP",
			3: "METAFILEPICT",
			8: "DIB",
			14: "ENHMETAFILE"
		}[e.read_shift(4)] || "";
	}
	if (t > 400) throw new Error("Unsupported Clipboard: " + t.toString(16));
	return e.l -= 4, e.read_shift(0, 1 == r ? "lpstr" : "lpwstr");
}
var aa = 80, na = [aa, 81], sa = {
	1: {
		n: "CodePage",
		t: 2
	},
	2: {
		n: "Category",
		t: aa
	},
	3: {
		n: "PresentationFormat",
		t: aa
	},
	4: {
		n: "ByteCount",
		t: 3
	},
	5: {
		n: "LineCount",
		t: 3
	},
	6: {
		n: "ParagraphCount",
		t: 3
	},
	7: {
		n: "SlideCount",
		t: 3
	},
	8: {
		n: "NoteCount",
		t: 3
	},
	9: {
		n: "HiddenCount",
		t: 3
	},
	10: {
		n: "MultimediaClipCount",
		t: 3
	},
	11: {
		n: "ScaleCrop",
		t: 11
	},
	12: {
		n: "HeadingPairs",
		t: 4108
	},
	13: {
		n: "TitlesOfParts",
		t: 4126
	},
	14: {
		n: "Manager",
		t: aa
	},
	15: {
		n: "Company",
		t: aa
	},
	16: {
		n: "LinksUpToDate",
		t: 11
	},
	17: {
		n: "CharacterCount",
		t: 3
	},
	19: {
		n: "SharedDoc",
		t: 11
	},
	22: {
		n: "HyperlinksChanged",
		t: 11
	},
	23: {
		n: "AppVersion",
		t: 3,
		p: "version"
	},
	24: {
		n: "DigSig",
		t: 65
	},
	26: {
		n: "ContentType",
		t: aa
	},
	27: {
		n: "ContentStatus",
		t: aa
	},
	28: {
		n: "Language",
		t: aa
	},
	29: {
		n: "Version",
		t: aa
	},
	255: {},
	2147483648: {
		n: "Locale",
		t: 19
	},
	2147483651: {
		n: "Behavior",
		t: 19
	},
	1919054434: {}
}, ia = {
	1: {
		n: "CodePage",
		t: 2
	},
	2: {
		n: "Title",
		t: aa
	},
	3: {
		n: "Subject",
		t: aa
	},
	4: {
		n: "Author",
		t: aa
	},
	5: {
		n: "Keywords",
		t: aa
	},
	6: {
		n: "Comments",
		t: aa
	},
	7: {
		n: "Template",
		t: aa
	},
	8: {
		n: "LastAuthor",
		t: aa
	},
	9: {
		n: "RevNumber",
		t: aa
	},
	10: {
		n: "EditTime",
		t: 64
	},
	11: {
		n: "LastPrinted",
		t: 64
	},
	12: {
		n: "CreatedDate",
		t: 64
	},
	13: {
		n: "ModifiedDate",
		t: 64
	},
	14: {
		n: "PageCount",
		t: 3
	},
	15: {
		n: "WordCount",
		t: 3
	},
	16: {
		n: "CharCount",
		t: 3
	},
	17: {
		n: "Thumbnail",
		t: 71
	},
	18: {
		n: "Application",
		t: aa
	},
	19: {
		n: "DocSecurity",
		t: 3
	},
	255: {},
	2147483648: {
		n: "Locale",
		t: 19
	},
	2147483651: {
		n: "Behavior",
		t: 19
	},
	1919054434: {}
}, ca = {
	1: "US",
	2: "CA",
	3: "",
	7: "RU",
	20: "EG",
	30: "GR",
	31: "NL",
	32: "BE",
	33: "FR",
	34: "ES",
	36: "HU",
	39: "IT",
	41: "CH",
	43: "AT",
	44: "GB",
	45: "DK",
	46: "SE",
	47: "NO",
	48: "PL",
	49: "DE",
	52: "MX",
	55: "BR",
	61: "AU",
	64: "NZ",
	66: "TH",
	81: "JP",
	82: "KR",
	84: "VN",
	86: "CN",
	90: "TR",
	105: "JS",
	213: "DZ",
	216: "MA",
	218: "LY",
	351: "PT",
	354: "IS",
	358: "FI",
	420: "CZ",
	886: "TW",
	961: "LB",
	962: "JO",
	963: "SY",
	964: "IQ",
	965: "KW",
	966: "SA",
	971: "AE",
	972: "IL",
	974: "QA",
	981: "IR",
	65535: "US"
}, oa = [
	null,
	"solid",
	"mediumGray",
	"darkGray",
	"lightGray",
	"darkHorizontal",
	"darkVertical",
	"darkDown",
	"darkUp",
	"darkGrid",
	"darkTrellis",
	"lightHorizontal",
	"lightVertical",
	"lightDown",
	"lightUp",
	"lightGrid",
	"lightTrellis",
	"gray125",
	"gray0625"
];
function la(e) {
	return e.map(function(e) {
		return [
			e >> 16 & 255,
			e >> 8 & 255,
			255 & e
		];
	});
}
var fa = Ne(la([
	0,
	16777215,
	16711680,
	65280,
	255,
	16776960,
	16711935,
	65535,
	0,
	16777215,
	16711680,
	65280,
	255,
	16776960,
	16711935,
	65535,
	8388608,
	32768,
	128,
	8421376,
	8388736,
	32896,
	12632256,
	8421504,
	10066431,
	10040166,
	16777164,
	13434879,
	6684774,
	16744576,
	26316,
	13421823,
	128,
	16711935,
	16776960,
	65535,
	8388736,
	8388608,
	32896,
	255,
	52479,
	13434879,
	13434828,
	16777113,
	10079487,
	16751052,
	13408767,
	16764057,
	3368703,
	3394764,
	10079232,
	16763904,
	16750848,
	16737792,
	6710937,
	9868950,
	13158,
	3381606,
	13056,
	3355392,
	10040064,
	10040166,
	3355545,
	3355443,
	0,
	16777215,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0
])), ha = {
	0: "#NULL!",
	7: "#DIV/0!",
	15: "#VALUE!",
	23: "#REF!",
	29: "#NAME?",
	36: "#NUM!",
	42: "#N/A",
	43: "#GETTING_DATA",
	255: "#WTF?"
}, ua = {
	"#NULL!": 0,
	"#DIV/0!": 7,
	"#VALUE!": 15,
	"#REF!": 23,
	"#NAME?": 29,
	"#NUM!": 36,
	"#N/A": 42,
	"#GETTING_DATA": 43,
	"#WTF?": 255
}, da = [
	"_xlnm.Consolidate_Area",
	"_xlnm.Auto_Open",
	"_xlnm.Auto_Close",
	"_xlnm.Extract",
	"_xlnm.Database",
	"_xlnm.Criteria",
	"_xlnm.Print_Area",
	"_xlnm.Print_Titles",
	"_xlnm.Recorder",
	"_xlnm.Data_Form",
	"_xlnm.Auto_Activate",
	"_xlnm.Auto_Deactivate",
	"_xlnm.Sheet_Title",
	"_xlnm._FilterDatabase"
], pa = {
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
	"application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
	"application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
	"application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
	"application/vnd.ms-excel.worksheet": "sheets",
	"application/vnd.ms-excel.binIndexWs": "TODO",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
	"application/vnd.ms-excel.chartsheet": "charts",
	"application/vnd.ms-excel.macrosheet+xml": "macros",
	"application/vnd.ms-excel.macrosheet": "macros",
	"application/vnd.ms-excel.intlmacrosheet": "TODO",
	"application/vnd.ms-excel.binIndexMs": "TODO",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
	"application/vnd.ms-excel.dialogsheet": "dialogs",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
	"application/vnd.ms-excel.sharedStrings": "strs",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
	"application/vnd.ms-excel.styles": "styles",
	"application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
	"application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
	"application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
	"application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
	"application/vnd.ms-excel.comments": "comments",
	"application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
	"application/vnd.ms-excel.person+xml": "people",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
	"application/vnd.ms-excel.sheetMetadata": "metadata",
	"application/vnd.ms-excel.pivotTable": "TODO",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
	"application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
	"application/vnd.ms-office.chartcolorstyle+xml": "TODO",
	"application/vnd.ms-office.chartstyle+xml": "TODO",
	"application/vnd.ms-office.chartex+xml": "TODO",
	"application/vnd.ms-excel.calcChain": "calcchains",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
	"application/vnd.ms-office.activeX": "TODO",
	"application/vnd.ms-office.activeX+xml": "TODO",
	"application/vnd.ms-excel.attachedToolbars": "TODO",
	"application/vnd.ms-excel.connections": "TODO",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
	"application/vnd.ms-excel.externalLink": "links",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
	"application/vnd.ms-excel.pivotCacheDefinition": "TODO",
	"application/vnd.ms-excel.pivotCacheRecords": "TODO",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
	"application/vnd.ms-excel.queryTable": "TODO",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
	"application/vnd.ms-excel.userNames": "TODO",
	"application/vnd.ms-excel.revisionHeaders": "TODO",
	"application/vnd.ms-excel.revisionLog": "TODO",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
	"application/vnd.ms-excel.tableSingleCells": "TODO",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
	"application/vnd.ms-excel.slicer": "TODO",
	"application/vnd.ms-excel.slicerCache": "TODO",
	"application/vnd.ms-excel.slicer+xml": "TODO",
	"application/vnd.ms-excel.slicerCache+xml": "TODO",
	"application/vnd.ms-excel.wsSortMap": "TODO",
	"application/vnd.ms-excel.table": "TODO",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
	"application/vnd.openxmlformats-officedocument.theme+xml": "themes",
	"application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
	"application/vnd.ms-excel.Timeline+xml": "TODO",
	"application/vnd.ms-excel.TimelineCache+xml": "TODO",
	"application/vnd.ms-office.vbaProject": "vba",
	"application/vnd.ms-office.vbaProjectSignature": "TODO",
	"application/vnd.ms-office.volatileDependencies": "TODO",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
	"application/vnd.ms-excel.controlproperties+xml": "TODO",
	"application/vnd.openxmlformats-officedocument.model+data": "TODO",
	"application/vnd.ms-excel.Survey+xml": "TODO",
	"application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
	"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
	"application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
	"application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
	"application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
	"application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
	"application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
	"application/vnd.openxmlformats-package.relationships+xml": "rels",
	"application/vnd.openxmlformats-officedocument.oleObject": "TODO",
	"image/png": "TODO",
	sheet: "js"
}, ma = {
	WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
	SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
	HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
	VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
	XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
	XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
	XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
	CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
	CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
	CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
	CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
	EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
	CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
	SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
	STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
	THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
	CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
	CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
	CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
	WS: ["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet", "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"],
	DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
	MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
	IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
	DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
	XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
	TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
	PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
	CONN: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/connections",
	VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
};
function va(e) {
	var r = e.lastIndexOf("/");
	return e.slice(0, r + 1) + "_rels/" + e.slice(r + 1) + ".rels";
}
function ga(e, r) {
	var t = { "!id": {} };
	if (!e) return t;
	"/" !== r.charAt(0) && (r = "/" + r);
	var a = {};
	return (e.match(ur) || []).forEach(function(e) {
		var n = mr(e);
		if ("<Relationship" === n[0]) {
			var s = {};
			s.Type = n.Type, s.Target = Er(n.Target), s.Id = n.Id, n.TargetMode && (s.TargetMode = n.TargetMode);
			var i = "External" === n.TargetMode ? n.Target : or(n.Target, r);
			t[i] = s, a[n.Id] = s;
		}
	}), t["!id"] = a, t;
}
var ba = [
	["cp:category", "Category"],
	["cp:contentStatus", "ContentStatus"],
	["cp:keywords", "Keywords"],
	["cp:lastModifiedBy", "LastAuthor"],
	["cp:lastPrinted", "LastPrinted"],
	["cp:revision", "RevNumber"],
	["cp:version", "Version"],
	["dc:creator", "Author"],
	["dc:description", "Comments"],
	["dc:identifier", "Identifier"],
	["dc:language", "Language"],
	["dc:subject", "Subject"],
	["dc:title", "Title"],
	[
		"dcterms:created",
		"CreatedDate",
		"date"
	],
	[
		"dcterms:modified",
		"ModifiedDate",
		"date"
	]
];
function Ta(e) {
	var r = {};
	e = Rr(e);
	for (var t = 0; t < ba.length; ++t) {
		var a = ba[t], n = Ke(e, a[0]);
		null != n && n.length > 0 && (r[a[1]] = Er(n[1])), "date" === a[2] && r[a[1]] && (r[a[1]] = Re(r[a[1]]));
	}
	return r;
}
var Ea = [
	[
		"Application",
		"Application",
		"string"
	],
	[
		"AppVersion",
		"AppVersion",
		"string"
	],
	[
		"Company",
		"Company",
		"string"
	],
	[
		"DocSecurity",
		"DocSecurity",
		"string"
	],
	[
		"Manager",
		"Manager",
		"string"
	],
	[
		"HyperlinksChanged",
		"HyperlinksChanged",
		"bool"
	],
	[
		"SharedDoc",
		"SharedDoc",
		"bool"
	],
	[
		"LinksUpToDate",
		"LinksUpToDate",
		"bool"
	],
	[
		"ScaleCrop",
		"ScaleCrop",
		"bool"
	],
	[
		"HeadingPairs",
		"HeadingPairs",
		"raw"
	],
	[
		"TitlesOfParts",
		"TitlesOfParts",
		"raw"
	]
];
function wa(e, r, t, a) {
	var n = [];
	if ("string" == typeof e) n = Pr(e, a);
	else for (var s = 0; s < e.length; ++s) n = n.concat(e[s].map(function(e) {
		return { v: e };
	}));
	var i = "string" == typeof r ? Pr(r, a).map(function(e) {
		return e.v;
	}) : r, c = 0, o = 0;
	if (i.length > 0) for (var l = 0; l !== n.length; l += 2) {
		switch (o = +n[l + 1].v, n[l].v) {
			case "Worksheets":
			case "工作表":
			case "Листы":
			case "أوراق العمل":
			case "ワークシート":
			case "גליונות עבודה":
			case "Arbeitsblätter":
			case "Çalışma Sayfaları":
			case "Feuilles de calcul":
			case "Fogli di lavoro":
			case "Folhas de cálculo":
			case "Planilhas":
			case "Regneark":
			case "Hojas de cálculo":
			case "Werkbladen":
				t.Worksheets = o, t.SheetNames = i.slice(c, c + o);
				break;
			case "Named Ranges":
			case "Rangos con nombre":
			case "名前付き一覧":
			case "Benannte Bereiche":
			case "Navngivne områder":
				t.NamedRanges = o, t.DefinedNames = i.slice(c, c + o);
				break;
			case "Charts":
			case "Diagramme": t.Chartsheets = o, t.ChartNames = i.slice(c, c + o);
		}
		c += o;
	}
}
var Aa, ka = /<[^<>]+>[^<]*/g, Sa = {
	Title: "Title",
	Subject: "Subject",
	Author: "Author",
	Keywords: "Keywords",
	Comments: "Description",
	LastAuthor: "LastAuthor",
	RevNumber: "Revision",
	Application: "AppName",
	LastPrinted: "LastPrinted",
	CreatedDate: "Created",
	ModifiedDate: "LastSaved",
	Category: "Category",
	Manager: "Manager",
	Company: "Company",
	AppVersion: "Version",
	ContentStatus: "ContentStatus",
	Identifier: "Identifier",
	Language: "Language"
};
function ya(e, r, t) {
	Aa || (Aa = Ee(Sa)), e[r = Aa[r] || r] = t;
}
function Ca(e) {
	var r = e.read_shift(4), t = e.read_shift(4);
	return (/* @__PURE__ */ new Date(1e3 * (t / 1e7 * Math.pow(2, 32) + r / 1e7 - 11644473600))).toISOString().replace(/\.000/, "");
}
function _a(e, r, t) {
	return 31 === r ? function(e) {
		return e.read_shift(0, "lpwstr");
	}(e) : function(e, r, t) {
		var a = e.l, n = e.read_shift(0, "lpstr-cp");
		if (t) for (; e.l - a & 3;) ++e.l;
		return n;
	}(e, 0, t);
}
function xa(e, r, t) {
	return _a(e, r, !1 === t ? 0 : 4);
}
function Oa(e) {
	var r = e.l, t = Na(e, 81);
	return 0 == e[e.l] && 0 == e[e.l + 1] && e.l - r & 2 && (e.l += 2), [t, Na(e, 3)];
}
function Ra(e, r) {
	for (var t = e.read_shift(4), a = {}, n = 0; n != t; ++n) {
		var s = e.read_shift(4), i = e.read_shift(4);
		a[s] = e.read_shift(i, 1200 === r ? "utf16le" : "utf8").replace(S, "").replace(y, "!"), 1200 === r && i % 2 && (e.l += 2);
	}
	return 3 & e.l && (e.l = e.l >> 3 << 2), a;
}
function Ia(e) {
	var r = e.read_shift(4), t = e.slice(e.l, e.l + r);
	return e.l += r, (3 & r) > 0 && (e.l += 4 - (3 & r) & 3), t;
}
function Na(e, r, t) {
	var a, n = e.read_shift(2), s = t || {};
	if (e.l += 2, 12 !== r && n !== r && -1 === na.indexOf(r) && (4126 != (65534 & r) || 4126 != (65534 & n))) throw new Error("Expected type " + r + " saw " + n);
	switch (12 === r ? n : r) {
		case 2: return a = e.read_shift(2, "i"), s.raw || (e.l += 2), a;
		case 3: return e.read_shift(4, "i");
		case 11: return 0 !== e.read_shift(4);
		case 19: return e.read_shift(4);
		case 30:
		case 31:
			e.l += 4, val = xa(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
			break;
		case 64: return Ca(e);
		case 65: return Ia(e);
		case 71: return function(e) {
			var r = {};
			return r.Size = e.read_shift(4), e.l += r.Size + 3 - (r.Size - 1) % 4, r;
		}(e);
		case 80: return xa(e, n, !s.raw).replace(S, "");
		case 81: return function(e, r) {
			if (!r) throw new Error("VtUnalignedString must have positive length");
			return _a(e, r, 0);
		}(e, n).replace(S, "");
		case 4108: return function(e) {
			for (var r = e.read_shift(4), t = [], a = 0; a < r / 2; ++a) t.push(Oa(e));
			return t;
		}(e);
		case 4126:
		case 4127: return 4127 == n ? function(e) {
			for (var r = e.read_shift(4), t = [], a = 0; a != r; ++a) {
				var n = e.l;
				t[a] = e.read_shift(0, "lpwstr").replace(S, ""), e.l - n & 2 && (e.l += 2);
			}
			return t;
		}(e) : function(e) {
			for (var r = e.read_shift(4), t = [], a = 0; a != r; ++a) t[a] = e.read_shift(0, "lpstr-cp").replace(S, "");
			return t;
		}(e);
		default: throw new Error("TypedPropertyValue unrecognized type " + r + " " + n);
	}
}
function Da(e, r) {
	var t = e.l, a = e.read_shift(4), s = e.read_shift(4), i = [], c = 0, o = 0, l = -1, f = {};
	for (c = 0; c != s; ++c) {
		var h = e.read_shift(4), u = e.read_shift(4);
		i[c] = [h, u + t];
	}
	i.sort(function(e, r) {
		return e[1] - r[1];
	});
	var d = {};
	for (c = 0; c != s; ++c) {
		if (e.l !== i[c][1]) {
			var p = !0;
			if (c > 0 && r) switch (r[i[c - 1][0]].t) {
				case 2:
					e.l + 2 === i[c][1] && (e.l += 2, p = !1);
					break;
				case 80:
				case 4108: e.l <= i[c][1] && (e.l = i[c][1], p = !1);
			}
			if ((!r || 0 == c) && e.l <= i[c][1] && (p = !1, e.l = i[c][1]), p) throw new Error("Read Error: Expected address " + i[c][1] + " at " + e.l + " :" + c);
		}
		if (r) {
			if (0 == i[c][0] && i.length > c + 1 && i[c][1] == i[c + 1][1]) continue;
			var m = r[i[c][0]];
			if (d[m.n] = Na(e, m.t, { raw: !0 }), "version" === m.p && (d[m.n] = String(d[m.n] >> 16) + "." + ("0000" + String(65535 & d[m.n])).slice(-4)), "CodePage" == m.n) switch (d[m.n]) {
				case 0: d[m.n] = 1252;
				case 874:
				case 932:
				case 936:
				case 949:
				case 950:
				case 1250:
				case 1251:
				case 1253:
				case 1254:
				case 1255:
				case 1256:
				case 1257:
				case 1258:
				case 1e4:
				case 1200:
				case 1201:
				case 1252:
				case 65e3:
				case -536:
				case 65001:
				case -535:
					n(o = d[m.n] >>> 0 & 65535);
					break;
				default: throw new Error("Unsupported CodePage: " + d[m.n]);
			}
		} else if (1 === i[c][0]) {
			if (o = d.CodePage = Na(e, 2), n(o), -1 !== l) {
				var v = e.l;
				e.l = i[l][1], f = Ra(e, o), e.l = v;
			}
		} else if (0 === i[c][0]) {
			if (0 === o) {
				l = c, e.l = i[c + 1][1];
				continue;
			}
			f = Ra(e, o);
		} else {
			var g, b = f[i[c][0]];
			switch (e[e.l]) {
				case 65:
					e.l += 4, g = Ia(e);
					break;
				case 30:
				case 31:
					e.l += 4, g = xa(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
					break;
				case 3:
					e.l += 4, g = e.read_shift(4, "i");
					break;
				case 19:
					e.l += 4, g = e.read_shift(4);
					break;
				case 5:
					e.l += 4, g = e.read_shift(8, "f");
					break;
				case 11:
					e.l += 4, g = Ma(e, 4);
					break;
				case 64:
					e.l += 4, g = Re(Ca(e));
					break;
				default: throw new Error("unparsed value: " + e[e.l]);
			}
			d[b] = g;
		}
	}
	return e.l = t + a, d;
}
function Fa(e, r, t) {
	var a = e.content;
	if (!a) return {};
	Et(a, 0);
	var n, s, i, c, o = 0;
	a.chk("feff", "Byte Order: "), a.read_shift(2);
	var l = a.read_shift(4), f = a.read_shift(16);
	if (f !== be.utils.consts.HEADER_CLSID && f !== t) throw new Error("Bad PropertySet CLSID " + f);
	if (1 !== (n = a.read_shift(4)) && 2 !== n) throw new Error("Unrecognized #Sets: " + n);
	if (s = a.read_shift(16), c = a.read_shift(4), 1 === n && c !== a.l) throw new Error("Length mismatch: " + c + " !== " + a.l);
	2 === n && (i = a.read_shift(16), o = a.read_shift(4));
	var h, u = Da(a, r), d = { SystemIdentifier: l };
	for (var p in u) d[p] = u[p];
	if (d.FMTID = s, 1 === n) return d;
	if (o - a.l == 2 && (a.l += 2), a.l !== o) throw new Error("Length mismatch 2: " + a.l + " !== " + o);
	try {
		h = Da(a, null);
	} catch (m) {}
	for (p in h) d[p] = h[p];
	return d.FMTID = [s, i], d;
}
function Pa(e, r) {
	return e.read_shift(r), null;
}
function Ma(e, r) {
	return 1 === e.read_shift(r);
}
function La(e) {
	return e.read_shift(2, "u");
}
function Ua(e, r) {
	return function(e, r, t) {
		for (var a = [], n = e.l + r; e.l < n;) a.push(t(e, n - e.l));
		if (n !== e.l) throw new Error("Slurp error");
		return a;
	}(e, r, La);
}
function Ba(e) {
	var r = e.read_shift(1);
	return 1 === e.read_shift(1) ? r : 1 === r;
}
function Ha(r, t, a) {
	var n = r.read_shift(a && a.biff >= 12 ? 2 : 1), s = "sbcs-cont", i = e;
	a && a.biff >= 8 && (e = 1200), a && 8 != a.biff ? 12 == a.biff && (s = "wstr") : r.read_shift(1) && (s = "dbcs-cont"), a.biff >= 2 && a.biff <= 5 && (s = "cpstr");
	var c = n ? r.read_shift(n, s) : "";
	return e = i, c;
}
function Wa(r) {
	var t = e;
	e = 1200;
	var a, n = r.read_shift(2), s = r.read_shift(1), i = 4 & s, c = 8 & s, o = 1 + (1 & s), l = 0, f = {};
	c && (l = r.read_shift(2)), i && (a = r.read_shift(4));
	var h = 2 == o ? "dbcs-cont" : "sbcs-cont", u = 0 === n ? "" : r.read_shift(n, h);
	return c && (r.l += 4 * l), i && (r.l += a), f.t = u, c || (f.raw = "<t>" + f.t + "</t>", f.r = f.t), e = t, f;
}
function za(e, r, t) {
	if (t) {
		if (t.biff >= 2 && t.biff <= 5) return e.read_shift(r, "cpstr");
		if (t.biff >= 12) return e.read_shift(r, "dbcs-cont");
	}
	return 0 === e.read_shift(1) ? e.read_shift(r, "sbcs-cont") : e.read_shift(r, "dbcs-cont");
}
function Va(e, r, t) {
	var a = e.read_shift(t && 2 == t.biff ? 1 : 2);
	return 0 === a ? (e.l++, "") : za(e, a, t);
}
function Ga(e, r, t) {
	if (t.biff > 5) return Va(e, 0, t);
	var a = e.read_shift(1);
	return 0 === a ? (e.l++, "") : e.read_shift(a, t.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function $a(e) {
	var r = e.read_shift(4);
	return r > 0 ? e.read_shift(r, "utf16le").replace(S, "") : "";
}
function Xa(e, r) {
	var t = e.l + r, a = e.read_shift(4);
	if (2 !== a) throw new Error("Unrecognized streamVersion: " + a);
	var n = e.read_shift(2);
	e.l += 2;
	var s, i, c, o, l, f, h = "";
	16 & n && (s = $a(e, e.l)), 128 & n && (i = $a(e, e.l)), 257 & ~n || (c = $a(e, e.l)), 1 == (257 & n) && (o = function(e) {
		var r = e.read_shift(16);
		switch (r) {
			case "e0c9ea79f9bace118c8200aa004ba90b": return function(e) {
				var r = e.read_shift(4), t = e.l, a = !1;
				r > 24 && (e.l += r - 24, "795881f43b1d7f48af2c825dc4852763" === e.read_shift(16) && (a = !0), e.l = t);
				var n = e.read_shift((a ? r - 24 : r) >> 1, "utf16le").replace(S, "");
				return a && (e.l += 24), n;
			}(e);
			case "0303000000000000c000000000000046": return function(e) {
				for (var r = e.read_shift(2), t = ""; r-- > 0;) t += "../";
				var a = e.read_shift(0, "lpstr-ansi");
				if (e.l += 2, 57005 != e.read_shift(2)) throw new Error("Bad FileMoniker");
				if (0 === e.read_shift(4)) return t + a.replace(/\\/g, "/");
				var n = e.read_shift(4);
				if (3 != e.read_shift(2)) throw new Error("Bad FileMoniker");
				return t + e.read_shift(n >> 1, "utf16le").replace(S, "");
			}(e);
			default: throw new Error("Unsupported Moniker " + r);
		}
	}(e, e.l)), 8 & n && (h = $a(e, e.l)), 32 & n && (l = e.read_shift(16)), 64 & n && (f = Ca(e)), e.l = t;
	var u = i || c || o || "";
	u && h && (u += "#" + h), u || (u = "#" + h), 2 & n && "/" == u.charAt(0) && "/" != u.charAt(1) && (u = "file://" + u);
	var d = { Target: u };
	return l && (d.guid = l), f && (d.time = f), s && (d.Tooltip = s), d;
}
function ja(e) {
	return [
		e.read_shift(1),
		e.read_shift(1),
		e.read_shift(1),
		e.read_shift(1)
	];
}
function Ka(e, r) {
	var t = ja(e);
	return t[3] = 0, t;
}
function Ya(e, r, t) {
	var a = {
		r: e.read_shift(2),
		c: e.read_shift(2),
		ixfe: 0
	};
	return t && 2 == t.biff || 7 == r ? (a.ixfe = 63 & e.read_shift(1), e.l += 2) : a.ixfe = e.read_shift(2), a;
}
function Ja(e, r, t) {
	var a = t.biff > 8 ? 4 : 2;
	return [
		e.read_shift(a),
		e.read_shift(a, "i"),
		e.read_shift(a, "i")
	];
}
function Za(e) {
	return [e.read_shift(2), qt(e)];
}
function qa(e) {
	var r = e.read_shift(2), t = e.read_shift(2);
	return {
		s: {
			c: e.read_shift(2),
			r
		},
		e: {
			c: e.read_shift(2),
			r: t
		}
	};
}
function Qa(e) {
	var r = e.read_shift(2), t = e.read_shift(2);
	return {
		s: {
			c: e.read_shift(1),
			r
		},
		e: {
			c: e.read_shift(1),
			r: t
		}
	};
}
var en = Qa;
function rn(e) {
	e.l += 4;
	var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(2);
	return e.l += 12, [
		t,
		r,
		a
	];
}
function tn(e) {
	e.l += 2, e.l += e.read_shift(2);
}
var an = {
	0: tn,
	4: tn,
	5: tn,
	6: tn,
	7: function(e) {
		return e.l += 4, e.cf = e.read_shift(2), {};
	},
	8: tn,
	9: tn,
	10: tn,
	11: tn,
	12: tn,
	13: function(e) {
		var r = {};
		return e.l += 4, e.l += 16, r.fSharedNote = e.read_shift(2), e.l += 4, r;
	},
	14: tn,
	15: tn,
	16: tn,
	17: tn,
	18: tn,
	19: tn,
	20: tn,
	21: rn
};
function nn(e, r) {
	for (var t = e.l + r, a = []; e.l < t;) {
		var n = e.read_shift(2);
		e.l -= 2;
		try {
			a[n] = an[n](e, t - e.l);
		} catch (s) {
			return e.l = t, a;
		}
	}
	return e.l != t && (e.l = t), a;
}
function sn(e, r) {
	var t = {
		BIFFVer: 0,
		dt: 0
	};
	switch (t.BIFFVer = e.read_shift(2), (r -= 2) >= 2 && (t.dt = e.read_shift(2), e.l -= 2), t.BIFFVer) {
		case 1536:
		case 1280:
		case 1024:
		case 768:
		case 512:
		case 2:
		case 7: break;
		default: if (r > 6) throw new Error("Unexpected BIFF Ver " + t.BIFFVer);
	}
	return e.read_shift(r), t;
}
function cn(e, r, t) {
	var a = 0;
	t && 2 == t.biff || (a = e.read_shift(2));
	var n = e.read_shift(2);
	return t && 2 == t.biff && (a = 1 - (n >> 15), n &= 32767), [{
		Unsynced: 1 & a,
		DyZero: (2 & a) >> 1,
		ExAsc: (4 & a) >> 2,
		ExDsc: (8 & a) >> 3
	}, n];
}
var on = Ga;
function ln(e, r, t) {
	var a = e.l + r, n = 8 != t.biff && t.biff ? 2 : 4, s = e.read_shift(n), i = e.read_shift(n), c = e.read_shift(2), o = e.read_shift(2);
	return e.l = a, {
		s: {
			r: s,
			c
		},
		e: {
			r: i,
			c: o
		}
	};
}
var fn = function(e, r, t) {
	return 0 === r ? "" : Ga(e, 0, t);
};
function hn(e, r, t) {
	var a, n = e.read_shift(2), s = {
		fBuiltIn: 1 & n,
		fWantAdvise: n >>> 1 & 1,
		fWantPict: n >>> 2 & 1,
		fOle: n >>> 3 & 1,
		fOleLink: n >>> 4 & 1,
		cf: n >>> 5 & 1023,
		fIcon: n >>> 15 & 1
	};
	return 14849 === t.sbcch && (a = function(e, r, t) {
		e.l += 4, r -= 4;
		var a = e.l + r, n = Ha(e, 0, t), s = e.read_shift(2);
		if (s !== (a -= e.l)) throw new Error("Malformed AddinUdf: padding = " + a + " != " + s);
		return e.l += s, n;
	}(e, r - 2, t)), s.body = a || e.read_shift(r - 2), "string" == typeof a && (s.Name = a), s;
}
function un(e, r, t) {
	var a = e.l + r, n = e.read_shift(2), s = e.read_shift(1), i = e.read_shift(1), c = e.read_shift(t && 2 == t.biff ? 1 : 2), o = 0;
	(!t || t.biff >= 5) && (5 != t.biff && (e.l += 2), o = e.read_shift(2), 5 == t.biff && (e.l += 2), e.l += 4);
	var l = za(e, i, t);
	32 & n && (l = da[l.charCodeAt(0)]);
	var f = a - e.l;
	t && 2 == t.biff && --f;
	var h = a != e.l && 0 !== c && f > 0 ? function(e, r, t, a) {
		var n, s = e.l + r, i = Gs(e, a, t);
		return s !== e.l && (n = Vs(e, s - e.l, i, t)), [i, n];
	}(e, f, t, c) : [];
	return {
		chKey: s,
		Name: l,
		itab: o,
		rgce: h
	};
}
function dn(e, r, t) {
	if (t.biff < 8) return pn(e, 0, t);
	if (!(t.biff > 8) && r == e[e.l] + (3 == e[e.l + 1] ? 1 : 0) + 1) return pn(e, 0, t);
	for (var a = [], n = e.l + r, s = e.read_shift(t.biff > 8 ? 4 : 2); 0 !== s--;) a.push(Ja(e, t.biff, t));
	if (e.l != n) throw new Error("Bad ExternSheet: " + e.l + " != " + n);
	return a;
}
function pn(e, r, t) {
	3 == e[e.l + 1] && e[e.l]++;
	var a = Ha(e, 0, t);
	return 3 == a.charCodeAt(0) ? a.slice(1) : a;
}
function mn(e, r, t) {
	var a = en(e, 6);
	switch (t.biff) {
		case 2:
			e.l++, r -= 7;
			break;
		case 3:
		case 4:
			e.l += 2, r -= 8;
			break;
		default: e.l += 6, r -= 12;
	}
	return [a, Zs(e, r, t)];
}
var vn = { 8: function(e, r) {
	var t = e.l + r;
	e.l += 10;
	var a = e.read_shift(2);
	e.l += 4, e.l += 2, e.l += 2, e.l += 2, e.l += 4;
	var n = e.read_shift(1);
	return e.l += n, e.l = t, { fmt: a };
} };
function gn(e, r, t) {
	if (!t.cellStyles) return wt(e, r);
	var a = t && t.biff >= 12 ? 4 : 2, n = e.read_shift(a), s = e.read_shift(a), i = e.read_shift(a), c = e.read_shift(a), o = e.read_shift(2);
	2 == a && (e.l += 2);
	var l = {
		s: n,
		e: s,
		w: i,
		ixfe: c,
		flags: o
	};
	return (t.biff >= 5 || !t.biff) && (l.level = o >> 8 & 7), l;
}
var bn = Ya, Tn = Ua, En = Va, wn = [
	2,
	3,
	48,
	49,
	131,
	139,
	140,
	245
], An = function() {
	var r = {
		1: 437,
		2: 850,
		3: 1252,
		4: 1e4,
		100: 852,
		101: 866,
		102: 865,
		103: 861,
		104: 895,
		105: 620,
		106: 737,
		107: 857,
		120: 950,
		121: 949,
		122: 936,
		123: 932,
		124: 874,
		125: 1255,
		126: 1256,
		150: 10007,
		151: 10029,
		152: 10006,
		200: 1250,
		201: 1251,
		202: 1254,
		203: 1253,
		0: 20127,
		8: 865,
		9: 437,
		10: 850,
		11: 437,
		13: 437,
		14: 850,
		15: 437,
		16: 850,
		17: 437,
		18: 850,
		19: 932,
		20: 850,
		21: 437,
		22: 850,
		23: 865,
		24: 437,
		25: 437,
		26: 850,
		27: 437,
		28: 863,
		29: 850,
		31: 852,
		34: 852,
		35: 852,
		36: 860,
		37: 850,
		38: 866,
		55: 850,
		64: 852,
		77: 936,
		78: 949,
		79: 950,
		80: 874,
		87: 1252,
		88: 1252,
		89: 1252,
		108: 863,
		134: 737,
		135: 852,
		136: 857,
		204: 1257,
		255: 16969
	}, t = Ee({
		1: 437,
		2: 850,
		3: 1252,
		4: 1e4,
		100: 852,
		101: 866,
		102: 865,
		103: 861,
		104: 895,
		105: 620,
		106: 737,
		107: 857,
		120: 950,
		121: 949,
		122: 936,
		123: 932,
		124: 874,
		125: 1255,
		126: 1256,
		150: 10007,
		151: 10029,
		152: 10006,
		200: 1250,
		201: 1251,
		202: 1254,
		203: 1253,
		0: 20127
	});
	function a(e, r) {
		var t = r || {};
		t.dateNF || (t.dateNF = "yyyymmdd");
		var a = Wt(function(e, r) {
			var t = [], a = b(1);
			switch (r.type) {
				case "base64":
					a = E(p(e));
					break;
				case "binary":
					a = E(e);
					break;
				case "buffer":
				case "array": a = e;
			}
			Et(a, 0);
			var n = a.read_shift(1), s = !!(136 & n), i = !1, c = !1;
			switch (n) {
				case 2:
				case 3:
				case 131:
				case 139:
				case 245: break;
				case 48:
				case 49:
					i = !0, s = !0;
					break;
				case 140:
					c = !0;
					break;
				default: throw new Error("DBF Unsupported Version: " + n.toString(16));
			}
			var o = 0, l = 521;
			2 == n && (o = a.read_shift(2)), a.l += 3, 2 != n && (o = a.read_shift(4)), o > 1048576 && (o = 1e6), 2 != n && (l = a.read_shift(2));
			var f = a.read_shift(2);
			r.codepage, 2 != n && (a.l += 16, a.read_shift(1), 0 !== a[a.l] && a[a.l], a.l += 1, a.l += 2), c && (a.l += 36);
			for (var h = [], u = {}, d = Math.min(a.length, 2 == n ? 521 : l - 10 - (i ? 264 : 0)), m = c ? 32 : 11; a.l < d && 13 != a[a.l];) switch ((u = {}).name = w(a.slice(a.l, a.l + m)).replace(/[\u0000\r\n][\S\s]*$/g, ""), a.l += m, u.type = String.fromCharCode(a.read_shift(1)), 2 == n || c || (u.offset = a.read_shift(4)), u.len = a.read_shift(1), 2 == n && (u.offset = a.read_shift(2)), u.dec = a.read_shift(1), u.name.length && h.push(u), 2 != n && (a.l += c ? 13 : 14), u.type) {
				case "B":
					(!i || 8 != u.len) && r.WTF;
					break;
				case "G":
				case "P":
					r.WTF;
					break;
				case "+":
				case "0":
				case "@":
				case "C":
				case "D":
				case "F":
				case "I":
				case "L":
				case "M":
				case "N":
				case "O":
				case "T":
				case "Y": break;
				default: throw new Error("Unknown Field Type: " + u.type);
			}
			if (13 !== a[a.l] && (a.l = l - 1), 13 !== a.read_shift(1)) throw new Error("DBF Terminator not found " + a.l + " " + a[a.l]);
			a.l = l;
			var v = 0, g = 0;
			for (t[0] = [], g = 0; g != h.length; ++g) t[0][g] = h[g].name;
			for (; o-- > 0;) if (42 !== a[a.l]) for (++a.l, t[++v] = [], g = 0, g = 0; g != h.length; ++g) {
				var T = a.slice(a.l, a.l + h[g].len);
				a.l += h[g].len, Et(T, 0);
				var A = w(T);
				switch (h[g].type) {
					case "C":
						A.trim().length && (t[v][g] = A.replace(/([^\s])\s+$/, "$1"));
						break;
					case "D":
						8 === A.length ? (t[v][g] = new Date(Date.UTC(+A.slice(0, 4), +A.slice(4, 6) - 1, +A.slice(6, 8), 0, 0, 0, 0)), r && r.UTC || (t[v][g] = ze(t[v][g]))) : t[v][g] = A;
						break;
					case "F":
						t[v][g] = parseFloat(A.trim());
						break;
					case "+":
					case "I":
						t[v][g] = c ? 2147483648 ^ T.read_shift(-4, "i") : T.read_shift(4, "i");
						break;
					case "L":
						switch (A.trim().toUpperCase()) {
							case "Y":
							case "T":
								t[v][g] = !0;
								break;
							case "N":
							case "F":
								t[v][g] = !1;
								break;
							case "":
							case "\0":
							case "?": break;
							default: throw new Error("DBF Unrecognized L:|" + A + "|");
						}
						break;
					case "M":
						if (!s) throw new Error("DBF Unexpected MEMO for type " + n.toString(16));
						t[v][g] = "##MEMO##" + (c ? parseInt(A.trim(), 10) : T.read_shift(4));
						break;
					case "N":
						(A = A.replace(/\u0000/g, "").trim()) && "." != A && (t[v][g] = +A || 0);
						break;
					case "@":
						t[v][g] = /* @__PURE__ */ new Date(T.read_shift(-8, "f") - 621356832e5);
						break;
					case "T":
						var k = T.read_shift(4), S = T.read_shift(4);
						if (0 == k && 0 == S) break;
						t[v][g] = new Date(864e5 * (k - 2440588) + S), r && r.UTC || (t[v][g] = ze(t[v][g]));
						break;
					case "Y":
						t[v][g] = T.read_shift(4, "i") / 1e4 + T.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
						break;
					case "O":
						t[v][g] = -T.read_shift(-8, "f");
						break;
					case "B": if (i && 8 == h[g].len) {
						t[v][g] = T.read_shift(8, "f");
						break;
					}
					case "G":
					case "P":
						T.l += h[g].len;
						break;
					case "0": if ("_NullFlags" === h[g].name) break;
					default: throw new Error("DBF Unsupported data type " + h[g].type);
				}
			}
			else a.l += f;
			if (2 != n && a.l < a.length && 26 != a[a.l++]) throw new Error("DBF EOF Marker missing " + (a.l - 1) + " of " + a.length + " " + a[a.l - 1].toString(16));
			return r && r.sheetRows && (t = t.slice(0, r.sheetRows)), r.DBF = h, t;
		}(e, t), t);
		return a["!cols"] = t.DBF.map(function(e) {
			return {
				wch: e.len,
				DBF: e
			};
		}), delete t.DBF, a;
	}
	var s = {
		B: 8,
		C: 250,
		L: 1,
		D: 8,
		"?": 0,
		"": 0
	};
	return {
		to_workbook: function(e, r) {
			try {
				var t = Bt(a(e, r), r);
				return t.bookType = "dbf", t;
			} catch (n) {
				if (r && r.WTF) throw n;
			}
			return {
				SheetNames: [],
				Sheets: {}
			};
		},
		to_sheet: a,
		from_sheet: function(a, i) {
			if (!a["!ref"]) throw new Error("Cannot export empty sheet to DBF");
			var c = i || {}, o = e;
			if (+c.codepage >= 0 && n(+c.codepage), "string" == c.type) throw new Error("Cannot write DBF to JS string");
			var l = St(), f = zc(a, {
				header: 1,
				raw: !0,
				cellDates: !0
			}), h = f[0], u = f.slice(1), d = a["!cols"] || [], p = 0, m = 0, v = 0, g = 1;
			for (p = 0; p < h.length; ++p) if (((d[p] || {}).DBF || {}).name) h[p] = d[p].DBF.name, ++v;
			else if (null != h[p]) {
				if (++v, "number" == typeof h[p] && (h[p] = h[p].toString(10)), "string" != typeof h[p]) throw new Error("DBF Invalid column name " + h[p] + " |" + typeof h[p] + "|");
				if (h.indexOf(h[p]) !== p) {
					for (m = 0; m < 1024; ++m) if (-1 == h.indexOf(h[p] + "_" + m)) {
						h[p] += "_" + m;
						break;
					}
				}
			}
			var b = Lt(a["!ref"]), T = [], E = [], w = [];
			for (p = 0; p <= b.e.c - b.s.c; ++p) {
				var A = "", k = "", S = 0, y = [];
				for (m = 0; m < u.length; ++m) null != u[m][p] && y.push(u[m][p]);
				if (0 != y.length && null != h[p]) {
					for (m = 0; m < y.length; ++m) {
						switch (typeof y[m]) {
							case "number":
								k = "B";
								break;
							case "string":
							default:
								k = "C";
								break;
							case "boolean":
								k = "L";
								break;
							case "object": k = y[m] instanceof Date ? "D" : "C";
						}
						S = Math.max(S, String(y[m]).length), A = A && A != k ? "C" : k;
					}
					S > 250 && (S = 250), "C" == (k = ((d[p] || {}).DBF || {}).type) && d[p].DBF.len > S && (S = d[p].DBF.len), "B" == A && "N" == k && (A = "N", w[p] = d[p].DBF.dec, S = d[p].DBF.len), E[p] = "C" == A || "N" == k ? S : s[A] || 0, g += E[p], T[p] = A;
				} else T[p] = "?";
			}
			var C = l.next(32);
			for (C.write_shift(4, 318902576), C.write_shift(4, u.length), C.write_shift(2, 296 + 32 * v), C.write_shift(2, g), p = 0; p < 4; ++p) C.write_shift(4, 0);
			var _ = +t[e] || 3;
			for (C.write_shift(4, _ << 8), r[_] != +c.codepage && (c.codepage && console.error("DBF Unsupported codepage " + e + ", using 1252"), e = 1252), p = 0, m = 0; p < h.length; ++p) if (null != h[p]) {
				var x = l.next(32), O = (h[p].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
				x.write_shift(1, O, "sbcs"), x.write_shift(1, "?" == T[p] ? "C" : T[p], "sbcs"), x.write_shift(4, m), x.write_shift(1, E[p] || s[T[p]] || 0), x.write_shift(1, w[p] || 0), x.write_shift(1, 2), x.write_shift(4, 0), x.write_shift(1, 0), x.write_shift(4, 0), x.write_shift(4, 0), m += E[p] || s[T[p]] || 0;
			}
			var R = l.next(264);
			for (R.write_shift(4, 13), p = 0; p < 65; ++p) R.write_shift(4, 0);
			for (p = 0; p < u.length; ++p) {
				var I = l.next(g);
				for (I.write_shift(1, 0), m = 0; m < h.length; ++m) if (null != h[m]) switch (T[m]) {
					case "L":
						I.write_shift(1, null == u[p][m] ? 63 : u[p][m] ? 84 : 70);
						break;
					case "B":
						I.write_shift(8, u[p][m] || 0, "f");
						break;
					case "N":
						var N = "0";
						for ("number" == typeof u[p][m] && (N = u[p][m].toFixed(w[m] || 0)), N.length > E[m] && (N = N.slice(0, E[m])), v = 0; v < E[m] - N.length; ++v) I.write_shift(1, 32);
						I.write_shift(1, N, "sbcs");
						break;
					case "D":
						u[p][m] ? (I.write_shift(4, ("0000" + u[p][m].getFullYear()).slice(-4), "sbcs"), I.write_shift(2, ("00" + (u[p][m].getMonth() + 1)).slice(-2), "sbcs"), I.write_shift(2, ("00" + u[p][m].getDate()).slice(-2), "sbcs")) : I.write_shift(8, "00000000", "sbcs");
						break;
					case "C":
						var D = I.l, F = String(null != u[p][m] ? u[p][m] : "").slice(0, E[m]);
						for (I.write_shift(1, F, "cpstr"), D += E[m] - I.l, v = 0; v < D; ++v) I.write_shift(1, 32);
				}
			}
			return e = o, l.next(1).write_shift(1, 26), l.end();
		}
	};
}(), kn = function() {
	var e = {
		AA: "À",
		BA: "Á",
		CA: "Â",
		DA: 195,
		HA: "Ä",
		JA: 197,
		AE: "È",
		BE: "É",
		CE: "Ê",
		HE: "Ë",
		AI: "Ì",
		BI: "Í",
		CI: "Î",
		HI: "Ï",
		AO: "Ò",
		BO: "Ó",
		CO: "Ô",
		DO: 213,
		HO: "Ö",
		AU: "Ù",
		BU: "Ú",
		CU: "Û",
		HU: "Ü",
		Aa: "à",
		Ba: "á",
		Ca: "â",
		Da: 227,
		Ha: "ä",
		Ja: 229,
		Ae: "è",
		Be: "é",
		Ce: "ê",
		He: "ë",
		Ai: "ì",
		Bi: "í",
		Ci: "î",
		Hi: "ï",
		Ao: "ò",
		Bo: "ó",
		Co: "ô",
		Do: 245,
		Ho: "ö",
		Au: "ù",
		Bu: "ú",
		Cu: "û",
		Hu: "ü",
		KC: "Ç",
		Kc: "ç",
		q: "æ",
		z: "œ",
		a: "Æ",
		j: "Œ",
		DN: 209,
		Dn: 241,
		Hy: 255,
		S: 169,
		c: 170,
		R: 174,
		"B ": 180,
		0: 176,
		1: 177,
		2: 178,
		3: 179,
		5: 181,
		6: 182,
		7: 183,
		Q: 185,
		k: 186,
		b: 208,
		i: 216,
		l: 222,
		s: 240,
		y: 248,
		"!": 161,
		"\"": 162,
		"#": 163,
		"(": 164,
		"%": 165,
		"'": 167,
		"H ": 168,
		"+": 171,
		";": 187,
		"<": 188,
		"=": 189,
		">": 190,
		"?": 191,
		"{": 223
	}, r = new RegExp("\x1BN(" + Te(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1").replace("{", "\\{") + "|\\|)", "gm");
	try {
		r = new RegExp("\x1BN(" + Te(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm");
	} catch (o) {}
	var t = function(r, t) {
		var a = e[t];
		return "number" == typeof a ? h(a) : a;
	}, a = function(e, r, t) {
		var a = r.charCodeAt(0) - 32 << 4 | t.charCodeAt(0) - 48;
		return 59 == a ? e : h(a);
	};
	function s(e, s) {
		var i, c = e.split(/[\n\r]+/), o = -1, l = -1, f = 0, h = 0, u = [], d = [], p = null, m = {}, v = [], g = [], b = [], T = 0, E = { Workbook: {
			WBProps: {},
			Names: []
		} };
		for (+s.codepage >= 0 && n(+s.codepage); f !== c.length; ++f) {
			T = 0;
			var w, A = c[f].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, a).replace(r, t), k = A.replace(/;;/g, "\0").split(";").map(function(e) {
				return e.replace(/\u0000/g, ";");
			}), S = k[0];
			if (A.length > 0) switch (S) {
				case "ID":
				case "E":
				case "B":
				case "W": break;
				case "O":
					for (h = 1; h < k.length; ++h) if ("V" === k[h].charAt(0)) {
						var y = parseInt(k[h].slice(1), 10);
						y >= 1 && y <= 4 && (E.Workbook.WBProps.date1904 = !0);
					}
					break;
				case "P":
					"P" === k[1].charAt(0) && d.push(A.slice(3).replace(/;;/g, ";"));
					break;
				case "NN":
					var C = { Sheet: 0 };
					for (h = 1; h < k.length; ++h) switch (k[h].charAt(0)) {
						case "N":
							C.Name = k[h].slice(1);
							break;
						case "E": C.Ref = (s && s.sheet || "Sheet1") + "!" + vs(k[h].slice(1));
					}
					E.Workbook.Names.push(C);
					break;
				case "C":
					var _ = !1, x = !1, O = !1, R = !1, I = -1, N = -1, D = "", F = "z", P = "";
					for (h = 1; h < k.length; ++h) switch (k[h].charAt(0)) {
						case "A":
							P = k[h].slice(1);
							break;
						case "X":
							l = parseInt(k[h].slice(1), 10) - 1, x = !0;
							break;
						case "Y":
							for (o = parseInt(k[h].slice(1), 10) - 1, x || (l = 0), i = u.length; i <= o; ++i) u[i] = [];
							break;
						case "K":
							"\"" === (w = k[h].slice(1)).charAt(0) ? (w = w.slice(1, w.length - 1), F = "s") : "TRUE" === w || "FALSE" === w ? (w = "TRUE" === w, F = "b") : "#" == w.charAt(0) && null != ua[w] ? (F = "e", w = ua[w]) : isNaN(Fe(w)) || (w = Fe(w), F = "n", null !== p && ie(p) && s.cellDates && (F = "number" == typeof (w = ye(E.Workbook.WBProps.date1904 ? w + 1462 : w)) ? "n" : "d")), _ = !0;
							break;
						case "E":
							R = !0, D = vs(k[h].slice(1), {
								r: o,
								c: l
							});
							break;
						case "S":
							O = !0;
							break;
						case "G": break;
						case "R":
							I = parseInt(k[h].slice(1), 10) - 1;
							break;
						case "C":
							N = parseInt(k[h].slice(1), 10) - 1;
							break;
						default: if (s && s.WTF) throw new Error("SYLK bad record " + A);
					}
					if (_ && (u[o][l] ? (u[o][l].t = F, u[o][l].v = w) : u[o][l] = {
						t: F,
						v: w
					}, p && (u[o][l].z = p), !1 !== s.cellText && p && (u[o][l].w = le(u[o][l].z, u[o][l].v, { date1904: E.Workbook.WBProps.date1904 })), p = null), O) {
						if (R) throw new Error("SYLK shared formula cannot have own formula");
						var M = I > -1 && u[I][N];
						if (!M || !M[1]) throw new Error("SYLK shared formula cannot find base");
						D = Ts(M[1], {
							r: o - I,
							c: l - N
						});
					}
					D && (u[o][l] ? u[o][l].f = D : u[o][l] = {
						t: "n",
						f: D
					}), P && (u[o][l] || (u[o][l] = { t: "z" }), u[o][l].c = [{
						a: "SheetJSYLK",
						t: P
					}]);
					break;
				case "F":
					var L = 0;
					for (h = 1; h < k.length; ++h) switch (k[h].charAt(0)) {
						case "X":
							l = parseInt(k[h].slice(1), 10) - 1, ++L;
							break;
						case "Y":
							for (o = parseInt(k[h].slice(1), 10) - 1, i = u.length; i <= o; ++i) u[i] = [];
							break;
						case "M":
							T = parseInt(k[h].slice(1), 10) / 20;
							break;
						case "F":
						case "G":
						case "S":
						case "D":
						case "N": break;
						case "P":
							p = d[parseInt(k[h].slice(1), 10)];
							break;
						case "W":
							for (b = k[h].slice(1).split(" "), i = parseInt(b[0], 10); i <= parseInt(b[1], 10); ++i) T = parseInt(b[2], 10), g[i - 1] = 0 === T ? { hidden: !0 } : { wch: T };
							break;
						case "C":
							g[l = parseInt(k[h].slice(1), 10) - 1] || (g[l] = {});
							break;
						case "R":
							v[o = parseInt(k[h].slice(1), 10) - 1] || (v[o] = {}), T > 0 ? (v[o].hpt = T, v[o].hpx = as(T)) : 0 === T && (v[o].hidden = !0);
							break;
						default: if (s && s.WTF) throw new Error("SYLK bad record " + A);
					}
					L < 1 && (p = null);
					break;
				default: if (s && s.WTF) throw new Error("SYLK bad record " + A);
			}
		}
		return v.length > 0 && (m["!rows"] = v), g.length > 0 && (m["!cols"] = g), g.forEach(function(e) {
			es(e);
		}), s && s.sheetRows && (u = u.slice(0, s.sheetRows)), [
			u,
			m,
			E
		];
	}
	function i(e, r, t, a, n, s) {
		var i = "C;Y" + (t + 1) + ";X" + (a + 1) + ";K";
		switch (e.t) {
			case "n":
				i += isFinite(e.v) ? e.v || 0 : ha[isNaN(e.v) ? 36 : 7], e.f && !e.F && (i += ";E" + bs(e.f, {
					r: t,
					c: a
				}));
				break;
			case "b":
				i += e.v ? "TRUE" : "FALSE";
				break;
			case "e":
				i += e.w || ha[e.v] || e.v;
				break;
			case "d":
				i += Se(Re(e.v, s), s);
				break;
			case "s": i += "\"" + (null == e.v ? "" : String(e.v)).replace(/"/g, "").replace(/;/g, ";;") + "\"";
		}
		return i;
	}
	function c(e, r, t) {
		return "C;Y" + (r + 1) + ";X" + (t + 1) + ";A" + e.map(function(e) {
			return e.t;
		}).join("").replace(/\n/g, "\x1B :").replace(/\r/g, "\x1B =");
	}
	return e["|"] = 254, {
		to_workbook: function(e, r) {
			var t = function(e, r) {
				switch (r.type) {
					case "base64": return s(p(e), r);
					case "binary": return s(e, r);
					case "buffer": return s(m && Buffer.isBuffer(e) ? e.toString("binary") : w(e), r);
					case "array": return s(Ie(e), r);
				}
				throw new Error("Unrecognized type " + r.type);
			}(e, r), a = t[0], n = t[1], i = t[2], c = Ne(r);
			c.date1904 = (((i || {}).Workbook || {}).WBProps || {}).date1904;
			var o = Wt(a, c);
			Te(n).forEach(function(e) {
				o[e] = n[e];
			});
			var l = Bt(o, r);
			return Te(i).forEach(function(e) {
				l[e] = i[e];
			}), l.bookType = "sylk", l;
		},
		from_sheet: function(e, r, t) {
			r || (r = {}), r._formats = ["General"];
			var a, n = ["ID;PSheetJS;N;E"], s = [], o = Lt(e["!ref"] || "A1"), l = null != e["!data"], f = "\r\n", h = (((t || {}).Workbook || {}).WBProps || {}).date1904;
			n.push("P;PGeneral");
			var u, d = o.s.r, p = o.s.c, m = [];
			if (e["!ref"]) {
				for (d = o.s.r; d <= o.e.r; ++d) if (!l || e["!data"][d]) {
					for (m = [], p = o.s.c; p <= o.e.c; ++p) (a = l ? e["!data"][d][p] : e[Nt(p) + Rt(d)]) && a.c && m.push(c(a.c, d, p));
					m.length && s.push(m.join(f));
				}
			}
			if (e["!ref"]) {
				for (d = o.s.r; d <= o.e.r; ++d) if (!l || e["!data"][d]) {
					for (m = [], p = o.s.c; p <= o.e.c; ++p) if ((a = l ? e["!data"][d][p] : e[Nt(p) + Rt(d)]) && (null != a.v || a.f && !a.F)) {
						if ("General" != (a.z || ("d" == a.t ? P[14] : "General"))) {
							var v = r._formats.indexOf(a.z);
							-1 == v && (r._formats.push(a.z), v = r._formats.length - 1, n.push("P;P" + a.z.replace(/;/g, ";;"))), m.push("F;P" + v + ";Y" + (d + 1) + ";X" + (p + 1));
						}
						m.push(i(a, 0, d, p, 0, h));
					}
					s.push(m.join(f));
				}
			}
			return n.push("F;P0;DG0G8;M255"), e["!cols"] && (u = n, e["!cols"].forEach(function(e, r) {
				var t = "F;W" + (r + 1) + " " + (r + 1) + " ";
				e.hidden ? t += "0" : ("number" != typeof e.width || e.wpx || (e.wpx = Yn(e.width)), "number" != typeof e.wpx || e.wch || (e.wch = Jn(e.wpx)), "number" == typeof e.wch && (t += Math.round(e.wch))), " " != t.charAt(t.length - 1) && u.push(t);
			})), e["!rows"] && function(e, r) {
				r.forEach(function(r, t) {
					var a = "F;";
					r.hidden ? a += "M0;" : r.hpt ? a += "M" + 20 * r.hpt + ";" : r.hpx && (a += "M" + 20 * ts(r.hpx) + ";"), a.length > 2 && e.push(a + "R" + (t + 1));
				});
			}(n, e["!rows"]), e["!ref"] && n.push("B;Y" + (o.e.r - o.s.r + 1) + ";X" + (o.e.c - o.s.c + 1) + ";D" + [
				o.s.c,
				o.s.r,
				o.e.c,
				o.e.r
			].join(" ")), n.push("O;L;D;B" + (h ? ";V4" : "") + ";K47;G100 0.001"), delete r._formats, n.join(f) + f + s.join(f) + f + "E" + f;
		}
	};
}(), Sn = function() {
	function e(e, r) {
		for (var t = e.split("\n"), a = -1, n = -1, s = 0, i = []; s !== t.length; ++s) if ("BOT" !== t[s].trim()) {
			if (!(a < 0)) {
				for (var c = t[s].trim().split(","), o = c[0], l = c[1], f = t[++s] || ""; 1 & (f.match(/["]/g) || []).length && s < t.length - 1;) f += "\n" + t[++s];
				switch (f = f.trim(), +o) {
					case -1:
						if ("BOT" === f) {
							i[++a] = [], n = 0;
							continue;
						}
						if ("EOD" !== f) throw new Error("Unrecognized DIF special command " + f);
						break;
					case 0:
						"TRUE" === f ? i[a][n] = !0 : "FALSE" === f ? i[a][n] = !1 : isNaN(Fe(l)) ? isNaN(He(l).getDate()) ? i[a][n] = l : (i[a][n] = Re(l), r && r.UTC || (i[a][n] = ze(i[a][n]))) : i[a][n] = Fe(l), ++n;
						break;
					case 1: (f = (f = f.slice(1, f.length - 1)).replace(/""/g, "\"")) && f.match(/^=".*"$/) && (f = f.slice(2, -1)), i[a][n++] = "" !== f ? f : null;
				}
				if ("EOD" === f) break;
			}
		} else i[++a] = [], n = 0;
		return r && r.sheetRows && (i = i.slice(0, r.sheetRows)), i;
	}
	function r(r, t) {
		return Wt(function(r, t) {
			switch (t.type) {
				case "base64": return e(p(r), t);
				case "binary": return e(r, t);
				case "buffer": return e(m && Buffer.isBuffer(r) ? r.toString("binary") : w(r), t);
				case "array": return e(Ie(r), t);
			}
			throw new Error("Unrecognized type " + t.type);
		}(r, t), t);
	}
	function t(e, r) {
		return "0," + String(e) + "\r\n" + r;
	}
	function a(e) {
		return "1,0\r\n\"" + e.replace(/"/g, "\"\"") + "\"";
	}
	return {
		to_workbook: function(e, t) {
			var a = Bt(r(e, t), t);
			return a.bookType = "dif", a;
		},
		to_sheet: r,
		from_sheet: function(e) {
			if (!e["!ref"]) throw new Error("Cannot export empty sheet to DIF");
			for (var r = Lt(e["!ref"]), n = null != e["!data"], s = [
				"TABLE\r\n0,1\r\n\"sheetjs\"\r\n",
				"VECTORS\r\n0," + (r.e.r - r.s.r + 1) + "\r\n\"\"\r\n",
				"TUPLES\r\n0," + (r.e.c - r.s.c + 1) + "\r\n\"\"\r\n",
				"DATA\r\n0,0\r\n\"\"\r\n"
			], i = r.s.r; i <= r.e.r; ++i) {
				for (var c = n ? e["!data"][i] : [], o = "-1,0\r\nBOT\r\n", l = r.s.c; l <= r.e.c; ++l) {
					var f = n ? c && c[l] : e[Ft({
						r: i,
						c: l
					})];
					if (null != f) {
						switch (f.t) {
							case "n":
								null != f.w ? o += "0," + f.w + "\r\nV" : null != f.v ? o += t(f.v, "V") : null == f.f || f.F ? o += "1,0\r\n\"\"" : o += a("=" + f.f);
								break;
							case "b":
								o += f.v ? t(1, "TRUE") : t(0, "FALSE");
								break;
							case "s":
								o += a(isNaN(+f.v) ? f.v : "=\"" + f.v + "\"");
								break;
							case "d":
								f.w || (f.w = le(f.z || P[14], Se(Re(f.v)))), o += t(f.w, "V");
								break;
							default: o += "1,0\r\n\"\"";
						}
						o += "\r\n";
					} else o += "1,0\r\n\"\"\r\n";
				}
				s.push(o);
			}
			return s.join("") + "-1,0\r\nEOD";
		}
	};
}(), yn = function() {
	function e(e) {
		return e.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, "\n");
	}
	function r(e) {
		return e.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
	}
	function t(r, t) {
		return Wt(function(r, t) {
			for (var a = r.split("\n"), n = -1, s = -1, i = 0, c = []; i !== a.length; ++i) {
				var o = a[i].trim().split(":");
				if ("cell" === o[0]) {
					var l = Dt(o[1]);
					if (c.length <= l.r) for (n = c.length; n <= l.r; ++n) c[n] || (c[n] = []);
					switch (n = l.r, s = l.c, o[2]) {
						case "t":
							c[n][s] = e(o[3]);
							break;
						case "v":
							c[n][s] = +o[3];
							break;
						case "vtf": var f = o[o.length - 1];
						case "vtc": "nl" === o[3] ? c[n][s] = !!+o[4] : c[n][s] = "#" == o[o.length - 1].charAt(0) ? {
							t: "e",
							v: ua[o[o.length - 1]]
						} : +o[4], "vtf" == o[2] && (c[n][s] = [c[n][s], f]);
					}
				}
			}
			return t && t.sheetRows && (c = c.slice(0, t.sheetRows)), c;
		}(r, t), t);
	}
	var a = [
		"socialcalc:version:1.5",
		"MIME-Version: 1.0",
		"Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"
	].join("\n"), n = ["--SocialCalcSpreadsheetControlSave", "Content-type: text/plain; charset=UTF-8"].join("\n") + "\n", s = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join("\n"), i = "--SocialCalcSpreadsheetControlSave--";
	function c(e) {
		if (!e || !e["!ref"]) return "";
		for (var t, a = [], n = [], s = "", i = Pt(e["!ref"]), c = null != e["!data"], o = i.s.r; o <= i.e.r; ++o) for (var l = i.s.c; l <= i.e.c; ++l) if (s = Ft({
			r: o,
			c: l
		}), (t = c ? (e["!data"][o] || [])[l] : e[s]) && null != t.v && "z" !== t.t) {
			switch (n = [
				"cell",
				s,
				"t"
			], t.t) {
				case "s":
					n.push(r(t.v));
					break;
				case "b":
					n[2] = "vt" + (t.f ? "f" : "c"), n[3] = "nl", n[4] = t.v ? "1" : "0", n[5] = r(t.f || (t.v ? "TRUE" : "FALSE"));
					break;
				case "d":
					var f = Se(Re(t.v));
					n[2] = "vtc", n[3] = "nd", n[4] = "" + f, n[5] = t.w || le(t.z || P[14], f);
					break;
				case "n":
					isFinite(t.v) ? t.f ? (n[2] = "vtf", n[3] = "n", n[4] = t.v, n[5] = r(t.f)) : (n[2] = "v", n[3] = t.v) : (n[2] = "vt" + (t.f ? "f" : "c"), n[3] = "e" + ha[isNaN(t.v) ? 36 : 7], n[4] = "0", n[5] = t.f || n[3].slice(1), n[6] = "e", n[7] = n[3].slice(1));
					break;
				case "e": continue;
			}
			a.push(n.join(":"));
		}
		return a.push("sheet:c:" + (i.e.c - i.s.c + 1) + ":r:" + (i.e.r - i.s.r + 1) + ":tvf:1"), a.push("valueformat:1:text-wiki"), a.join("\n");
	}
	return {
		to_workbook: function(e, r) {
			return Bt(t(e, r), r);
		},
		to_sheet: t,
		from_sheet: function(e) {
			return [
				a,
				n,
				s,
				n,
				c(e),
				i
			].join("\n");
		}
	};
}(), Cn = function() {
	function e(e, r, t, a, n) {
		n.raw ? r[t][a] = e : "" === e || ("TRUE" === e ? r[t][a] = !0 : "FALSE" === e ? r[t][a] = !1 : isNaN(Fe(e)) ? isNaN(He(e).getDate()) ? 35 == e.charCodeAt(0) && null != ua[e] ? r[t][a] = {
			t: "e",
			v: ua[e],
			w: e
		} : r[t][a] = e : r[t][a] = Re(e) : r[t][a] = Fe(e));
	}
	var r = {
		44: ",",
		9: "	",
		59: ";",
		124: "|"
	}, t = {
		44: 3,
		9: 2,
		59: 1,
		124: 0
	};
	function a(e) {
		for (var a = {}, n = !1, s = 0, i = 0; s < e.length; ++s) 34 == (i = e.charCodeAt(s)) ? n = !n : !n && i in r && (a[i] = (a[i] || 0) + 1);
		for (s in i = [], a) Object.prototype.hasOwnProperty.call(a, s) && i.push([a[s], s]);
		if (!i.length) for (s in a = t) Object.prototype.hasOwnProperty.call(a, s) && i.push([a[s], s]);
		return i.sort(function(e, r) {
			return e[0] - r[0] || t[e[1]] - t[r[1]];
		}), r[i.pop()[1]] || 44;
	}
	function n(e, r) {
		var t = r || {}, n = "", s = {};
		t.dense && (s["!data"] = []);
		var i = {
			s: {
				c: 0,
				r: 0
			},
			e: {
				c: 0,
				r: 0
			}
		};
		"sep=" == e.slice(0, 4) ? 13 == e.charCodeAt(5) && 10 == e.charCodeAt(6) ? (n = e.charAt(4), e = e.slice(7)) : 13 == e.charCodeAt(5) || 10 == e.charCodeAt(5) ? (n = e.charAt(4), e = e.slice(6)) : n = a(e.slice(0, 1024)) : n = t && t.FS ? t.FS : a(e.slice(0, 1024));
		var c, o, l = 0, f = 0, h = 0, u = 0, d = 0, p = n.charCodeAt(0), m = !1, v = 0, g = e.charCodeAt(0), b = null != t.dateNF ? (o = (o = "number" == typeof (c = t.dateNF) ? P[c] : c).replace(pe, "(\\d+)"), pe.lastIndex = 0, new RegExp("^" + o + "$")) : null;
		function T() {
			var r = e.slice(u, d);
			"\r" == r.slice(-1) && (r = r.slice(0, -1));
			var a = {};
			if ("\"" == r.charAt(0) && "\"" == r.charAt(r.length - 1) && (r = r.slice(1, -1).replace(/""/g, "\"")), !1 !== t.cellText && (a.w = r), 0 === r.length ? a.t = "z" : t.raw || 0 === r.trim().length ? (a.t = "s", a.v = r) : 61 == r.charCodeAt(0) ? 34 == r.charCodeAt(1) && 34 == r.charCodeAt(r.length - 1) ? (a.t = "s", a.v = r.slice(2, -1).replace(/""/g, "\"")) : 1 != r.length ? (a.t = "s", a.f = r.slice(1), a.v = r) : (a.t = "s", a.v = r) : "TRUE" == r ? (a.t = "b", a.v = !0) : "FALSE" == r ? (a.t = "b", a.v = !1) : isNaN(h = Fe(r)) ? !isNaN((h = He(r)).getDate()) || b && r.match(b) ? (a.z = t.dateNF || P[14], b && r.match(b) ? (h = Re(function(e, r, t) {
				var a = -1, n = -1, s = -1, i = -1, c = -1, o = -1;
				(r.match(pe) || []).forEach(function(e, r) {
					var l = parseInt(t[r + 1], 10);
					switch (e.toLowerCase().charAt(0)) {
						case "y":
							a = l;
							break;
						case "d":
							s = l;
							break;
						case "h":
							i = l;
							break;
						case "s":
							o = l;
							break;
						case "m": i >= 0 ? c = l : n = l;
					}
				}), pe.lastIndex = 0, o >= 0 && -1 == c && n >= 0 && (c = n, n = -1);
				var l = ("" + (a >= 0 ? a : (/* @__PURE__ */ new Date()).getFullYear())).slice(-4) + "-" + ("00" + (n >= 1 ? n : 1)).slice(-2) + "-" + ("00" + (s >= 1 ? s : 1)).slice(-2);
				7 == l.length && (l = "0" + l), 8 == l.length && (l = "20" + l);
				var f = ("00" + (i >= 0 ? i : 0)).slice(-2) + ":" + ("00" + (c >= 0 ? c : 0)).slice(-2) + ":" + ("00" + (o >= 0 ? o : 0)).slice(-2);
				return -1 == i && -1 == c && -1 == o ? l : -1 == a && -1 == n && -1 == s ? f : l + "T" + f;
			}(0, t.dateNF, r.match(b) || [])), t && !1 === t.UTC && (h = ze(h))) : t && !1 === t.UTC ? h = ze(h) : !1 !== t.cellText && t.dateNF && (a.w = le(a.z, h)), t.cellDates ? (a.t = "d", a.v = h) : (a.t = "n", a.v = Se(h)), t.cellNF || delete a.z) : 35 == r.charCodeAt(0) && null != ua[r] ? (a.t = "e", a.w = r, a.v = ua[r]) : (a.t = "s", a.v = r) : (a.t = "n", a.v = h), "z" == a.t || (t.dense ? (s["!data"][l] || (s["!data"][l] = []), s["!data"][l][f] = a) : s[Ft({
				c: f,
				r: l
			})] = a), u = d + 1, g = e.charCodeAt(u), i.e.c < f && (i.e.c = f), i.e.r < l && (i.e.r = l), v == p) ++f;
			else if (f = 0, ++l, t.sheetRows && t.sheetRows <= l) return !0;
		}
		e: for (; d < e.length; ++d) switch (v = e.charCodeAt(d)) {
			case 34:
				34 === g && (m = !m);
				break;
			case 13:
				if (m) break;
				10 == e.charCodeAt(d + 1) && ++d;
			case p:
			case 10: if (!m && T()) break e;
		}
		return d - u > 0 && T(), s["!ref"] = Mt(i), s;
	}
	function s(r, t) {
		var a = "", s = "string" == t.type ? [
			0,
			0,
			0,
			0
		] : Lc(r, t);
		switch (t.type) {
			case "base64":
				a = p(r);
				break;
			case "binary":
			case "string":
				a = r;
				break;
			case "buffer":
				65001 == t.codepage ? a = r.toString("utf8") : (t.codepage, a = m && Buffer.isBuffer(r) ? r.toString("binary") : w(r));
				break;
			case "array":
				a = Ie(r);
				break;
			default: throw new Error("Unrecognized type " + t.type);
		}
		return 239 == s[0] && 187 == s[1] && 191 == s[2] ? a = Rr(a.slice(3)) : "string" != t.type && "buffer" != t.type && 65001 == t.codepage ? a = Rr(a) : t.type, "socialcalc:version:" == a.slice(0, 19) ? yn.to_sheet("string" == t.type ? a : Rr(a), t) : function(r, t) {
			return t && t.PRN ? t.FS || "sep=" == r.slice(0, 4) || r.indexOf("	") >= 0 || r.indexOf(",") >= 0 || r.indexOf(";") >= 0 ? n(r, t) : Wt(function(r, t) {
				var a = t || {}, n = [];
				if (!r || 0 === r.length) return n;
				for (var s = r.split(/[\r\n]/), i = s.length - 1; i >= 0 && 0 === s[i].length;) --i;
				for (var c = 10, o = 0, l = 0; l <= i; ++l) -1 == (o = s[l].indexOf(" ")) ? o = s[l].length : o++, c = Math.max(c, o);
				for (l = 0; l <= i; ++l) {
					n[l] = [];
					var f = 0;
					for (e(s[l].slice(0, c).trim(), n, l, f, a), f = 1; f <= (s[l].length - c) / 10 + 1; ++f) e(s[l].slice(c + 10 * (f - 1), c + 10 * f).trim(), n, l, f, a);
				}
				return a.sheetRows && (n = n.slice(0, a.sheetRows)), n;
			}(r, t), t) : n(r, t);
		}(a, t);
	}
	return {
		to_workbook: function(e, r) {
			return Bt(s(e, r), r);
		},
		to_sheet: s,
		from_sheet: function(e) {
			var r = [];
			if (!e["!ref"]) return "";
			for (var t, a = Lt(e["!ref"]), n = null != e["!data"], s = a.s.r; s <= a.e.r; ++s) {
				for (var i = [], c = a.s.c; c <= a.e.c; ++c) {
					var o = Ft({
						r: s,
						c
					});
					if ((t = n ? (e["!data"][s] || [])[c] : e[o]) && null != t.v) {
						for (var l = (t.w || (Ut(t), t.w) || "").slice(0, 10); l.length < 10;) l += " ";
						i.push(l + (0 === c ? " " : ""));
					} else i.push("          ");
				}
				r.push(i.join(""));
			}
			return r.join("\n");
		}
	};
}(), _n = function() {
	function e(e, r, t) {
		if (e) {
			Et(e, e.l || 0);
			for (var a = t.Enum || w; e.l < e.length;) {
				var n = e.read_shift(2), s = a[n] || a[65535], i = e.read_shift(2), c = e.l + i, o = s.f && s.f(e, i, t);
				if (e.l = c, r(o, s, n)) return;
			}
		}
	}
	var r = [
		"mmmm",
		"dd-mmm-yyyy",
		"dd-mmm",
		"mmm-yyyy",
		"@",
		"mm/dd",
		"hh:mm:ss AM/PM",
		"hh:mm AM/PM",
		"mm/dd/yyyy",
		"mm/dd",
		"hh:mm:ss",
		"hh:mm"
	];
	function t(t, a) {
		if (!t) return t;
		var n = a || {}, s = {}, i = "Sheet1", c = "", o = 0, l = {}, f = [], h = [], u = [];
		n.dense && (u = s["!data"] = []);
		var d = {
			s: {
				r: 0,
				c: 0
			},
			e: {
				r: 0,
				c: 0
			}
		}, p = n.sheetRows || 0, m = {};
		if (81 == t[4] && 80 == t[5] && 87 == t[6]) return function(e, r) {
			Et(e, 0);
			var t = r || {}, a = {};
			t.dense && (a["!data"] = []);
			var n = [], s = "", i = {
				s: {
					r: -1,
					c: -1
				},
				e: {
					r: -1,
					c: -1
				}
			}, c = 0, o = 0, l = 0, f = 0, h = {
				SheetNames: [],
				Sheets: {}
			}, u = [];
			e: for (; e.l < e.length;) {
				var d = e.read_shift(2), p = e.read_shift(2), m = e.slice(e.l, e.l + p);
				switch (Et(m, 0), d) {
					case 1:
						if (962023505 != m.read_shift(4)) throw "Bad QPW9 BOF!";
						break;
					case 2: break e;
					case 8:
					case 1025:
					case 1026:
					case 1032: break;
					case 10:
						for (var v = m.read_shift(4), g = (m.length - m.l) / v | 0, b = 0; b < v; ++b) {
							var T = m.l + g, E = {};
							m.l += 2, E.numFmtId = m.read_shift(2), k[E.numFmtId] && (E.z = k[E.numFmtId]), m.l = T, u.push(E);
						}
						break;
					case 1031:
						for (m.l += 12; m.l < m.length;) c = m.read_shift(2), o = m.read_shift(1), n.push(m.read_shift(c, "cstr"));
						break;
					case 1537:
						var w = m.read_shift(2);
						a = {}, t.dense && (a["!data"] = []), i.s.c = m.read_shift(2), i.e.c = m.read_shift(2), i.s.r = m.read_shift(4), i.e.r = m.read_shift(4), m.l += 4, m.l + 2 < m.length && (c = m.read_shift(2), o = m.read_shift(1), s = 0 == c ? "" : m.read_shift(c, "cstr")), s || (s = Nt(w));
						break;
					case 1538:
						if (i.s.c > 255 || i.s.r > 999999) break;
						i.e.c < i.s.c && (i.e.c = i.s.c), i.e.r < i.s.r && (i.e.r = i.s.r), a["!ref"] = Mt(i), Yc(h, a, s);
						break;
					case 2561:
						l = m.read_shift(2), i.e.c < l && (i.e.c = l), i.s.c > l && (i.s.c = l), f = m.read_shift(4), i.s.r > f && (i.s.r = f), f = m.read_shift(4), i.e.r < f && (i.e.r = f);
						break;
					case 3073:
						f = m.read_shift(4), c = m.read_shift(4), i.s.r > f && (i.s.r = f), i.e.r < f + c - 1 && (i.e.r = f + c - 1);
						for (var A = Nt(l); m.l < m.length;) {
							var y = { t: "z" }, C = m.read_shift(1), _ = -1;
							128 & C && (_ = m.read_shift(2));
							var x = 64 & C ? m.read_shift(2) - 1 : 0;
							switch (31 & C) {
								case 0:
								case 1: break;
								case 2:
									y = {
										t: "n",
										v: m.read_shift(2)
									};
									break;
								case 3:
									y = {
										t: "n",
										v: m.read_shift(2, "i")
									};
									break;
								case 4:
									y = {
										t: "n",
										v: qt(m)
									};
									break;
								case 5:
									y = {
										t: "n",
										v: m.read_shift(8, "f")
									};
									break;
								case 7:
									y = {
										t: "s",
										v: n[o = m.read_shift(4) - 1]
									};
									break;
								case 8:
									y = {
										t: "n",
										v: m.read_shift(8, "f")
									}, m.l += 2, m.l += 4, isNaN(y.v) && (y = {
										t: "e",
										v: 15
									});
									break;
								default: throw "Unrecognized QPW cell type " + (31 & C);
							}
							-1 != _ && (u[_ - 1] || {}).z && (y.z = u[_ - 1].z);
							var O = 0;
							if (32 & C) switch (31 & C) {
								case 2:
								case 7:
									O = m.read_shift(2);
									break;
								case 3:
									O = m.read_shift(2, "i");
									break;
								default: throw "Unsupported delta for QPW cell type " + (31 & C);
							}
							if (t.sheetStubs || "z" != y.t) {
								var R = Ne(y);
								"n" == y.t && y.z && ie(y.z) && t.cellDates && (R.v = ye(y.v), R.t = "number" == typeof R.v ? "n" : "d"), null != a["!data"] ? (a["!data"][f] || (a["!data"][f] = []), a["!data"][f][l] = R) : a[A + Rt(f)] = R;
							}
							for (++f, --c; x-- > 0 && c >= 0;) {
								if (32 & C) switch (31 & C) {
									case 2:
										y = {
											t: "n",
											v: y.v + O & 65535
										};
										break;
									case 3:
										(y = {
											t: "n",
											v: y.v + O & 65535
										}).v > 32767 && (y.v -= 65536);
										break;
									case 7:
										y = {
											t: "s",
											v: n[o = o + O >>> 0]
										};
										break;
									default: throw "Cannot apply delta for QPW cell type " + (31 & C);
								}
								else switch (31 & C) {
									case 1:
										y = { t: "z" };
										break;
									case 2:
										y = {
											t: "n",
											v: m.read_shift(2)
										};
										break;
									case 7:
										y = {
											t: "s",
											v: n[o = m.read_shift(4) - 1]
										};
										break;
									default: throw "Cannot apply repeat for QPW cell type " + (31 & C);
								}
								(t.sheetStubs || "z" != y.t) && (null != a["!data"] ? (a["!data"][f] || (a["!data"][f] = []), a["!data"][f][l] = y) : a[A + Rt(f)] = y), ++f, --c;
							}
						}
						break;
					case 3074:
						l = m.read_shift(2), f = m.read_shift(4);
						var I = S(m);
						null != a["!data"] ? (a["!data"][f] || (a["!data"][f] = []), a["!data"][f][l] = {
							t: "s",
							v: I
						}) : a[Nt(l) + Rt(f)] = {
							t: "s",
							v: I
						};
				}
				e.l += p;
			}
			return h;
		}(t, a);
		if (0 == t[2] && (8 == t[3] || 9 == t[3]) && t.length >= 16 && 5 == t[14] && 108 === t[15]) throw new Error("Unsupported Works 3 for Mac file");
		if (2 == t[2]) n.Enum = w, e(t, function(e, t, a) {
			switch (a) {
				case 0:
					n.vers = e, e >= 4096 && (n.qpro = !0);
					break;
				case 255:
					n.vers = e, n.works = !0;
					break;
				case 6:
					d = e;
					break;
				case 204:
					e && (c = e);
					break;
				case 222:
					c = e;
					break;
				case 15:
				case 51: (!n.qpro && !n.works || 51 == a) && e[1].v.charCodeAt(0) < 48 && (e[1].v = e[1].v.slice(1)), (n.works || n.works2) && (e[1].v = e[1].v.replace(/\r\n/g, "\n"));
				case 13:
				case 14:
				case 16:
					!(112 & ~e[2]) && (15 & e[2]) > 1 && (15 & e[2]) < 15 && (e[1].z = n.dateNF || r[(15 & e[2]) - 1] || P[14], n.cellDates && (e[1].v = ye(e[1].v), e[1].t = "number" == typeof e[1].v ? "n" : "d")), n.qpro && e[3] > o && (s["!ref"] = Mt(d), l[i] = s, f.push(i), s = {}, n.dense && (u = s["!data"] = []), d = {
						s: {
							r: 0,
							c: 0
						},
						e: {
							r: 0,
							c: 0
						}
					}, o = e[3], i = c || "Sheet" + (o + 1), c = "");
					var h = n.dense ? (u[e[0].r] || [])[e[0].c] : s[Ft(e[0])];
					if (h) {
						h.t = e[1].t, h.v = e[1].v, null != e[1].z && (h.z = e[1].z), null != e[1].f && (h.f = e[1].f), m = h;
						break;
					}
					n.dense ? (u[e[0].r] || (u[e[0].r] = []), u[e[0].r][e[0].c] = e[1]) : s[Ft(e[0])] = e[1], m = e[1];
					break;
				case 21509:
					n.works2 = !0;
					break;
				case 21506: 5281 == e && (m.z = "hh:mm:ss", n.cellDates && "n" == m.t && (m.v = ye(m.v), m.t = "number" == typeof m.v ? "n" : "d"));
			}
		}, n);
		else {
			if (26 != t[2] && 14 != t[2]) throw new Error("Unrecognized LOTUS BOF " + t[2]);
			n.Enum = A, 14 == t[2] && (n.qpro = !0, t.l = 0), e(t, function(e, r, t) {
				switch (t) {
					case 204:
						i = e;
						break;
					case 22: e[1].v.charCodeAt(0) < 48 && (e[1].v = e[1].v.slice(1)), e[1].v = e[1].v.replace(/\x0F./g, function(e) {
						return String.fromCharCode(e.charCodeAt(1) - 32);
					}).replace(/\r\n/g, "\n");
					case 23:
					case 24:
					case 25:
					case 37:
					case 39:
					case 40:
						if (e[3] > o && (s["!ref"] = Mt(d), l[i] = s, f.push(i), s = {}, n.dense && (u = s["!data"] = []), d = {
							s: {
								r: 0,
								c: 0
							},
							e: {
								r: 0,
								c: 0
							}
						}, o = e[3], i = "Sheet" + (o + 1)), p > 0 && e[0].r >= p) break;
						n.dense ? (u[e[0].r] || (u[e[0].r] = []), u[e[0].r][e[0].c] = e[1]) : s[Ft(e[0])] = e[1], d.e.c < e[0].c && (d.e.c = e[0].c), d.e.r < e[0].r && (d.e.r = e[0].r);
						break;
					case 27:
						e[14e3] && (h[e[14e3][0]] = e[14e3][1]);
						break;
					case 1537: h[e[0]] = e[1], e[0] == o && (i = e[1]);
				}
			}, n);
		}
		if (s["!ref"] = Mt(d), l[c || i] = s, f.push(c || i), !h.length) return {
			SheetNames: f,
			Sheets: l
		};
		for (var v = {}, g = [], b = 0; b < h.length; ++b) l[f[b]] ? (g.push(h[b] || f[b]), v[h[b]] = l[h[b]] || l[f[b]]) : (g.push(h[b]), v[h[b]] = { "!ref": "A1" });
		return {
			SheetNames: g,
			Sheets: v
		};
	}
	function a(e, r, t) {
		var a = [
			{
				c: 0,
				r: 0
			},
			{
				t: "n",
				v: 0
			},
			0,
			0
		];
		return t.qpro && 20768 != t.vers ? (a[0].c = e.read_shift(1), a[3] = e.read_shift(1), a[0].r = e.read_shift(2), e.l += 2) : t.works ? (a[0].c = e.read_shift(2), a[0].r = e.read_shift(2), a[2] = e.read_shift(2)) : (a[2] = e.read_shift(1), a[0].c = e.read_shift(2), a[0].r = e.read_shift(2)), a;
	}
	function s(e) {
		return e.z && ie(e.z) ? 240 | (r.indexOf(e.z) + 1 || 2) : 255;
	}
	function i(e, r, t) {
		var a = At(7 + t.length);
		a.write_shift(1, 255), a.write_shift(2, r), a.write_shift(2, e), a.write_shift(1, 39);
		for (var n = 0; n < a.length; ++n) {
			var s = t.charCodeAt(n);
			a.write_shift(1, s >= 128 ? 95 : s);
		}
		return a.write_shift(1, 0), a;
	}
	function c(e, r, t) {
		var a = At(7);
		return a.write_shift(1, s(t)), a.write_shift(2, r), a.write_shift(2, e), a.write_shift(2, t.v, "i"), a;
	}
	function o(e, r, t) {
		var a = At(13);
		return a.write_shift(1, s(t)), a.write_shift(2, r), a.write_shift(2, e), a.write_shift(8, t.v, "f"), a;
	}
	function l(e, r, t) {
		var a = 32768 & r;
		return r = (a ? e : 0) + ((r &= -32769) >= 8192 ? r - 16384 : r), (a ? "" : "$") + (t ? Nt(r) : Rt(r));
	}
	var f = {
		31: ["NA", 0],
		33: ["ABS", 1],
		34: ["TRUNC", 1],
		35: ["SQRT", 1],
		36: ["LOG", 1],
		37: ["LN", 1],
		38: ["PI", 0],
		39: ["SIN", 1],
		40: ["COS", 1],
		41: ["TAN", 1],
		42: ["ATAN2", 2],
		43: ["ATAN", 1],
		44: ["ASIN", 1],
		45: ["ACOS", 1],
		46: ["EXP", 1],
		47: ["MOD", 2],
		49: ["ISNA", 1],
		50: ["ISERR", 1],
		51: ["FALSE", 0],
		52: ["TRUE", 0],
		53: ["RAND", 0],
		54: ["DATE", 3],
		63: ["ROUND", 2],
		64: ["TIME", 3],
		68: ["ISNUMBER", 1],
		69: ["ISTEXT", 1],
		70: ["LEN", 1],
		71: ["VALUE", 1],
		73: ["MID", 3],
		74: ["CHAR", 1],
		80: ["SUM", 69],
		81: ["AVERAGEA", 69],
		82: ["COUNTA", 69],
		83: ["MINA", 69],
		84: ["MAXA", 69],
		102: ["UPPER", 1],
		103: ["LOWER", 1],
		107: ["PROPER", 1],
		109: ["TRIM", 1],
		111: ["T", 1]
	}, h = [
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"+",
		"-",
		"*",
		"/",
		"^",
		"=",
		"<>",
		"<=",
		">=",
		"<",
		">",
		"",
		"",
		"",
		"",
		"&",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	];
	function u(e) {
		var r = [
			{
				c: 0,
				r: 0
			},
			{
				t: "n",
				v: 0
			},
			0
		];
		return r[0].r = e.read_shift(2), r[3] = e[e.l++], r[0].c = e[e.l++], r;
	}
	function d(e, r, t, a) {
		var n = At(6 + a.length);
		n.write_shift(2, e), n.write_shift(1, t), n.write_shift(1, r), n.write_shift(1, 39);
		for (var s = 0; s < a.length; ++s) {
			var i = a.charCodeAt(s);
			n.write_shift(1, i >= 128 ? 95 : i);
		}
		return n.write_shift(1, 0), n;
	}
	function m(e, r) {
		var t = u(e), a = e.read_shift(4), n = e.read_shift(4), s = e.read_shift(2);
		if (65535 == s) return 0 === a && 3221225472 === n ? (t[1].t = "e", t[1].v = 15) : 0 === a && 3489660928 === n ? (t[1].t = "e", t[1].v = 42) : t[1].v = 0, t;
		var i = 32768 & s;
		return s = (32767 & s) - 16446, t[1].v = (1 - 2 * i) * (n * Math.pow(2, s + 32) + a * Math.pow(2, s)), t;
	}
	function v(e, r, t, a) {
		var n = At(14);
		if (n.write_shift(2, e), n.write_shift(1, t), n.write_shift(1, r), 0 == a) return n.write_shift(4, 0), n.write_shift(4, 0), n.write_shift(2, 65535), n;
		var s, i = 0, c = 0, o = 0;
		return a < 0 && (i = 1, a = -a), c = 0 | Math.log2(a), 2147483648 & (o = (a /= Math.pow(2, c - 31)) >>> 0) || (++c, o = (a /= 2) >>> 0), a -= o, o |= 2147483648, o >>>= 0, s = (a *= Math.pow(2, 32)) >>> 0, n.write_shift(4, s), n.write_shift(4, o), c += 16383 + (i ? 32768 : 0), n.write_shift(2, c), n;
	}
	function g(e, r) {
		var t = u(e), a = e.read_shift(8, "f");
		return t[1].v = a, t;
	}
	function b(e, r) {
		return 0 == e[e.l + r - 1] ? e.read_shift(r, "cstr") : "";
	}
	function T(e, r) {
		var t = At(5 + e.length);
		t.write_shift(2, 14e3), t.write_shift(2, r);
		for (var a = 0; a < e.length; ++a) {
			var n = e.charCodeAt(a);
			t[t.l++] = n > 127 ? 95 : n;
		}
		return t[t.l++] = 0, t;
	}
	var w = {
		0: {
			n: "BOF",
			f: La
		},
		1: { n: "EOF" },
		2: { n: "CALCMODE" },
		3: { n: "CALCORDER" },
		4: { n: "SPLIT" },
		5: { n: "SYNC" },
		6: {
			n: "RANGE",
			f: function(e, r, t) {
				var a = {
					s: {
						c: 0,
						r: 0
					},
					e: {
						c: 0,
						r: 0
					}
				};
				return 8 == r && t.qpro ? (a.s.c = e.read_shift(1), e.l++, a.s.r = e.read_shift(2), a.e.c = e.read_shift(1), e.l++, a.e.r = e.read_shift(2), a) : (a.s.c = e.read_shift(2), a.s.r = e.read_shift(2), 12 == r && t.qpro && (e.l += 2), a.e.c = e.read_shift(2), a.e.r = e.read_shift(2), 12 == r && t.qpro && (e.l += 2), 65535 == a.s.c && (a.s.c = a.e.c = a.s.r = a.e.r = 0), a);
			}
		},
		7: { n: "WINDOW1" },
		8: { n: "COLW1" },
		9: { n: "WINTWO" },
		10: { n: "COLW2" },
		11: { n: "NAME" },
		12: { n: "BLANK" },
		13: {
			n: "INTEGER",
			f: function(e, r, t) {
				var n = a(e, 0, t);
				return n[1].v = e.read_shift(2, "i"), n;
			}
		},
		14: {
			n: "NUMBER",
			f: function(e, r, t) {
				var n = a(e, 0, t);
				return n[1].v = e.read_shift(8, "f"), n;
			}
		},
		15: {
			n: "LABEL",
			f: function(e, r, t) {
				var n = e.l + r, s = a(e, 0, t);
				if (s[1].t = "s", 20768 == (65534 & t.vers)) {
					e.l++;
					var i = e.read_shift(1);
					return s[1].v = e.read_shift(i, "utf8"), s;
				}
				return t.qpro && e.l++, s[1].v = e.read_shift(n - e.l, "cstr"), s;
			}
		},
		16: {
			n: "FORMULA",
			f: function(e, r, t) {
				var n = e.l + r, s = a(e, 0, t);
				if (s[1].v = e.read_shift(8, "f"), t.qpro) e.l = n;
				else {
					var i = e.read_shift(2);
					(function(e, r) {
						Et(e, 0);
						for (var t = [], a = 0, n = "", s = "", i = "", c = ""; e.l < e.length;) {
							var o = e[e.l++];
							switch (o) {
								case 0:
									t.push(e.read_shift(8, "f"));
									break;
								case 1:
									s = l(r[0].c, e.read_shift(2), !0), n = l(r[0].r, e.read_shift(2), !1), t.push(s + n);
									break;
								case 2:
									var u = l(r[0].c, e.read_shift(2), !0), d = l(r[0].r, e.read_shift(2), !1);
									s = l(r[0].c, e.read_shift(2), !0), n = l(r[0].r, e.read_shift(2), !1), t.push(u + d + ":" + s + n);
									break;
								case 3:
									if (e.l < e.length) return void console.error("WK1 premature formula end");
									break;
								case 4:
									t.push("(" + t.pop() + ")");
									break;
								case 5:
									t.push(e.read_shift(2));
									break;
								case 6:
									for (var p = ""; o = e[e.l++];) p += String.fromCharCode(o);
									t.push("\"" + p.replace(/"/g, "\"\"") + "\"");
									break;
								case 8:
									t.push("-" + t.pop());
									break;
								case 23:
									t.push("+" + t.pop());
									break;
								case 22:
									t.push("NOT(" + t.pop() + ")");
									break;
								case 20:
								case 21:
									c = t.pop(), i = t.pop(), t.push(["AND", "OR"][o - 20] + "(" + i + "," + c + ")");
									break;
								default: if (o < 32 && h[o]) c = t.pop(), i = t.pop(), t.push(i + h[o] + c);
								else {
									if (!f[o]) return o <= 7 ? console.error("WK1 invalid opcode " + o.toString(16)) : o <= 24 ? console.error("WK1 unsupported op " + o.toString(16)) : o <= 30 ? console.error("WK1 invalid opcode " + o.toString(16)) : o <= 115 ? console.error("WK1 unsupported function opcode " + o.toString(16)) : console.error("WK1 unrecognized opcode " + o.toString(16));
									if (69 == (a = f[o][1]) && (a = e[e.l++]), a > t.length) return void console.error("WK1 bad formula parse 0x" + o.toString(16) + ":|" + t.join("|") + "|");
									var m = t.slice(-a);
									t.length -= a, t.push(f[o][0] + "(" + m.join(",") + ")");
								}
							}
						}
						1 == t.length ? r[1].f = "" + t[0] : console.error("WK1 bad formula parse |" + t.join("|") + "|");
					})(e.slice(e.l, e.l + i), s), e.l += i;
				}
				return s;
			}
		},
		24: { n: "TABLE" },
		25: { n: "ORANGE" },
		26: { n: "PRANGE" },
		27: { n: "SRANGE" },
		28: { n: "FRANGE" },
		29: { n: "KRANGE1" },
		32: { n: "HRANGE" },
		35: { n: "KRANGE2" },
		36: { n: "PROTEC" },
		37: { n: "FOOTER" },
		38: { n: "HEADER" },
		39: { n: "SETUP" },
		40: { n: "MARGINS" },
		41: { n: "LABELFMT" },
		42: { n: "TITLES" },
		43: { n: "SHEETJS" },
		45: { n: "GRAPH" },
		46: { n: "NGRAPH" },
		47: { n: "CALCCOUNT" },
		48: { n: "UNFORMATTED" },
		49: { n: "CURSORW12" },
		50: { n: "WINDOW" },
		51: {
			n: "STRING",
			f: function(e, r, t) {
				var n = e.l + r, s = a(e, 0, t);
				if (s[1].t = "s", 20768 == t.vers) {
					var i = e.read_shift(1);
					return s[1].v = e.read_shift(i, "utf8"), s;
				}
				return s[1].v = e.read_shift(n - e.l, "cstr"), s;
			}
		},
		55: { n: "PASSWORD" },
		56: { n: "LOCKED" },
		60: { n: "QUERY" },
		61: { n: "QUERYNAME" },
		62: { n: "PRINT" },
		63: { n: "PRINTNAME" },
		64: { n: "GRAPH2" },
		65: { n: "GRAPHNAME" },
		66: { n: "ZOOM" },
		67: { n: "SYMSPLIT" },
		68: { n: "NSROWS" },
		69: { n: "NSCOLS" },
		70: { n: "RULER" },
		71: { n: "NNAME" },
		72: { n: "ACOMM" },
		73: { n: "AMACRO" },
		74: { n: "PARSE" },
		102: { n: "PRANGES??" },
		103: { n: "RRANGES??" },
		104: { n: "FNAME??" },
		105: { n: "MRANGES??" },
		204: {
			n: "SHEETNAMECS",
			f: b
		},
		222: {
			n: "SHEETNAMELP",
			f: function(e, r) {
				var t = e[e.l++];
				t > r - 1 && (t = r - 1);
				for (var a = ""; a.length < t;) a += String.fromCharCode(e[e.l++]);
				return a;
			}
		},
		255: {
			n: "BOF",
			f: La
		},
		21506: {
			n: "WKSNF",
			f: La
		},
		65535: { n: "" }
	}, A = {
		0: { n: "BOF" },
		1: { n: "EOF" },
		2: { n: "PASSWORD" },
		3: { n: "CALCSET" },
		4: { n: "WINDOWSET" },
		5: { n: "SHEETCELLPTR" },
		6: { n: "SHEETLAYOUT" },
		7: { n: "COLUMNWIDTH" },
		8: { n: "HIDDENCOLUMN" },
		9: { n: "USERRANGE" },
		10: { n: "SYSTEMRANGE" },
		11: { n: "ZEROFORCE" },
		12: { n: "SORTKEYDIR" },
		13: { n: "FILESEAL" },
		14: { n: "DATAFILLNUMS" },
		15: { n: "PRINTMAIN" },
		16: { n: "PRINTSTRING" },
		17: { n: "GRAPHMAIN" },
		18: { n: "GRAPHSTRING" },
		19: { n: "??" },
		20: { n: "ERRCELL" },
		21: { n: "NACELL" },
		22: {
			n: "LABEL16",
			f: function(e, r) {
				var t = u(e);
				return t[1].t = "s", t[1].v = e.read_shift(r - 4, "cstr"), t;
			}
		},
		23: {
			n: "NUMBER17",
			f: m
		},
		24: {
			n: "NUMBER18",
			f: function(e, r) {
				var t = u(e);
				t[1].v = e.read_shift(2);
				var a = t[1].v >> 1;
				if (1 & t[1].v) switch (7 & a) {
					case 0:
						a = 5e3 * (a >> 3);
						break;
					case 1:
						a = 500 * (a >> 3);
						break;
					case 2:
						a = (a >> 3) / 20;
						break;
					case 3:
						a = (a >> 3) / 200;
						break;
					case 4:
						a = (a >> 3) / 2e3;
						break;
					case 5:
						a = (a >> 3) / 2e4;
						break;
					case 6:
						a = (a >> 3) / 16;
						break;
					case 7: a = (a >> 3) / 64;
				}
				return t[1].v = a, t;
			}
		},
		25: {
			n: "FORMULA19",
			f: function(e, r) {
				var t = m(e);
				return e.l += r - 14, t;
			}
		},
		26: { n: "FORMULA1A" },
		27: {
			n: "XFORMAT",
			f: function(e, r) {
				for (var t = {}, a = e.l + r; e.l < a;) {
					var n = e.read_shift(2);
					if (14e3 == n) {
						for (t[n] = [0, ""], t[n][0] = e.read_shift(2); e[e.l];) t[n][1] += String.fromCharCode(e[e.l]), e.l++;
						e.l++;
					}
				}
				return t;
			}
		},
		28: { n: "DTLABELMISC" },
		29: { n: "DTLABELCELL" },
		30: { n: "GRAPHWINDOW" },
		31: { n: "CPA" },
		32: { n: "LPLAUTO" },
		33: { n: "QUERY" },
		34: { n: "HIDDENSHEET" },
		35: { n: "??" },
		37: {
			n: "NUMBER25",
			f: function(e, r) {
				var t = u(e), a = e.read_shift(4);
				return t[1].v = a >> 6, t;
			}
		},
		38: { n: "??" },
		39: {
			n: "NUMBER27",
			f: g
		},
		40: {
			n: "FORMULA28",
			f: function(e, r) {
				var t = g(e);
				return e.l += r - 12, t;
			}
		},
		142: { n: "??" },
		147: { n: "??" },
		150: { n: "??" },
		151: { n: "??" },
		152: { n: "??" },
		153: { n: "??" },
		154: { n: "??" },
		155: { n: "??" },
		156: { n: "??" },
		163: { n: "??" },
		174: { n: "??" },
		175: { n: "??" },
		176: { n: "??" },
		177: { n: "??" },
		184: { n: "??" },
		185: { n: "??" },
		186: { n: "??" },
		187: { n: "??" },
		188: { n: "??" },
		195: { n: "??" },
		201: { n: "??" },
		204: {
			n: "SHEETNAMECS",
			f: b
		},
		205: { n: "??" },
		206: { n: "??" },
		207: { n: "??" },
		208: { n: "??" },
		256: { n: "??" },
		259: { n: "??" },
		260: { n: "??" },
		261: { n: "??" },
		262: { n: "??" },
		263: { n: "??" },
		265: { n: "??" },
		266: { n: "??" },
		267: { n: "??" },
		268: { n: "??" },
		270: { n: "??" },
		271: { n: "??" },
		384: { n: "??" },
		389: { n: "??" },
		390: { n: "??" },
		393: { n: "??" },
		396: { n: "??" },
		512: { n: "??" },
		514: { n: "??" },
		513: { n: "??" },
		516: { n: "??" },
		517: { n: "??" },
		640: { n: "??" },
		641: { n: "??" },
		642: { n: "??" },
		643: { n: "??" },
		644: { n: "??" },
		645: { n: "??" },
		646: { n: "??" },
		647: { n: "??" },
		648: { n: "??" },
		658: { n: "??" },
		659: { n: "??" },
		660: { n: "??" },
		661: { n: "??" },
		662: { n: "??" },
		665: { n: "??" },
		666: { n: "??" },
		768: { n: "??" },
		772: { n: "??" },
		1537: {
			n: "SHEETINFOQP",
			f: function(e, r, t) {
				if (t.qpro && !(r < 21)) {
					var a = e.read_shift(1);
					return e.l += 17, e.l += 1, e.l += 2, [a, e.read_shift(r - 21, "cstr")];
				}
			}
		},
		1600: { n: "??" },
		1602: { n: "??" },
		1793: { n: "??" },
		1794: { n: "??" },
		1795: { n: "??" },
		1796: { n: "??" },
		1920: { n: "??" },
		2048: { n: "??" },
		2049: { n: "??" },
		2052: { n: "??" },
		2688: { n: "??" },
		10998: { n: "??" },
		12849: { n: "??" },
		28233: { n: "??" },
		28484: { n: "??" },
		65535: { n: "" }
	}, k = {
		5: "dd-mmm-yy",
		6: "dd-mmm",
		7: "mmm-yy",
		8: "mm/dd/yy",
		10: "hh:mm:ss AM/PM",
		11: "hh:mm AM/PM",
		14: "dd-mmm-yyyy",
		15: "mmm-yyyy",
		34: "0.00",
		50: "0.00;[Red]0.00",
		66: "0.00;(0.00)",
		82: "0.00;[Red](0.00)",
		162: "\"$\"#,##0.00;\\(\"$\"#,##0.00\\)",
		288: "0%",
		304: "0E+00",
		320: "# ?/?"
	};
	function S(e) {
		var r = e.read_shift(2), t = e.read_shift(1);
		if (0 != t) throw "unsupported QPW string type " + t.toString(16);
		return e.read_shift(r, "sbcs-cont");
	}
	return {
		sheet_to_wk1: function(e, r) {
			var t = r || {};
			if (+t.codepage >= 0 && n(+t.codepage), "string" == t.type) throw new Error("Cannot write WK1 to JS string");
			var a = St();
			if (!e["!ref"]) throw new Error("Cannot export empty sheet to WK1");
			var s, l = Lt(e["!ref"]), f = null != e["!data"], h = [];
			nc(a, 0, ((s = At(2)).write_shift(2, 1030), s)), nc(a, 6, function(e) {
				var r = At(8);
				return r.write_shift(2, e.s.c), r.write_shift(2, e.s.r), r.write_shift(2, e.e.c), r.write_shift(2, e.e.r), r;
			}(l));
			for (var u = Math.min(l.e.r, 8191), d = l.s.c; d <= l.e.c; ++d) h[d] = Nt(d);
			for (var p = l.s.r; p <= u; ++p) {
				var m = Rt(p);
				for (d = l.s.c; d <= l.e.c; ++d) {
					var v = f ? (e["!data"][p] || [])[d] : e[h[d] + m];
					if (v && "z" != v.t) switch (v.t) {
						case "n":
							(0 | v.v) == v.v && v.v >= -32768 && v.v <= 32767 ? nc(a, 13, c(p, d, v)) : nc(a, 14, o(p, d, v));
							break;
						case "d":
							var g = Se(v.v);
							(0 | g) == g && g >= -32768 && g <= 32767 ? nc(a, 13, c(p, d, {
								t: "n",
								v: g,
								z: v.z || P[14]
							})) : nc(a, 14, o(p, d, {
								t: "n",
								v: g,
								z: v.z || P[14]
							}));
							break;
						default: nc(a, 15, i(p, d, Ut(v).slice(0, 239)));
					}
				}
			}
			return nc(a, 1), a.end();
		},
		book_to_wk3: function(e, r) {
			var t = r || {};
			if (+t.codepage >= 0 && n(+t.codepage), "string" == t.type) throw new Error("Cannot write WK3 to JS string");
			var a = St();
			nc(a, 0, function(e) {
				var r = At(26);
				r.write_shift(2, 4096), r.write_shift(2, 4), r.write_shift(4, 0);
				for (var t = 0, a = 0, n = 0, s = 0; s < e.SheetNames.length; ++s) {
					var i = e.SheetNames[s], c = e.Sheets[i];
					if (c && c["!ref"]) {
						++n;
						var o = Pt(c["!ref"]);
						t < o.e.r && (t = o.e.r), a < o.e.c && (a = o.e.c);
					}
				}
				return t > 8191 && (t = 8191), r.write_shift(2, t), r.write_shift(1, n), r.write_shift(1, a), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(1, 1), r.write_shift(1, 2), r.write_shift(4, 0), r.write_shift(4, 0), r;
			}(e));
			for (var s = 0, i = 0; s < e.SheetNames.length; ++s) (e.Sheets[e.SheetNames[s]] || {})["!ref"] && nc(a, 27, T(e.SheetNames[s], i++));
			var c = 0;
			for (s = 0; s < e.SheetNames.length; ++s) {
				var o = e.Sheets[e.SheetNames[s]];
				if (o && o["!ref"]) {
					for (var l = Lt(o["!ref"]), f = null != o["!data"], h = [], u = Math.min(l.e.r, 8191), p = l.s.r; p <= u; ++p) for (var m = Rt(p), g = l.s.c; g <= l.e.c; ++g) {
						p === l.s.r && (h[g] = Nt(g));
						var b = h[g] + m, E = f ? (o["!data"][p] || [])[g] : o[b];
						E && "z" != E.t && ("n" == E.t ? nc(a, 23, v(p, g, c, E.v)) : nc(a, 22, d(p, g, c, Ut(E).slice(0, 239))));
					}
					++c;
				}
			}
			return nc(a, 1), a.end();
		},
		to_workbook: function(e, r) {
			switch (r.type) {
				case "base64": return t(E(p(e)), r);
				case "binary": return t(E(e), r);
				case "buffer":
				case "array": return t(e, r);
			}
			throw "Unsupported type " + r.type;
		}
	};
}(), xn = function() {
	function e(e) {
		var r = Ye(e, "t");
		if (!r) return {
			t: "s",
			v: ""
		};
		var a = {
			t: "s",
			v: Er(r[1])
		}, n = Ye(e, "rPr");
		return n && (a.s = function(e) {
			var r = {}, a = e.match(ur), n = 0, s = !1;
			if (a) for (; n != a.length; ++n) {
				var i = mr(a[n]);
				switch (i[0].replace(/<\w*:/g, "<")) {
					case "<condense":
					case "<extend": break;
					case "<shadow": if (!i.val) break;
					case "<shadow>":
					case "<shadow/>":
						r.shadow = 1;
						break;
					case "</shadow>": break;
					case "<charset":
						if ("1" == i.val) break;
						r.cp = t[parseInt(i.val, 10)];
						break;
					case "<outline": if (!i.val) break;
					case "<outline>":
					case "<outline/>":
						r.outline = 1;
						break;
					case "</outline>": break;
					case "<rFont":
						r.name = i.val;
						break;
					case "<sz":
						r.sz = i.val;
						break;
					case "<strike": if (!i.val) break;
					case "<strike>":
					case "<strike/>":
						r.strike = 1;
						break;
					case "</strike>": break;
					case "<u":
						if (!i.val) break;
						switch (i.val) {
							case "double":
								r.uval = "double";
								break;
							case "singleAccounting":
								r.uval = "single-accounting";
								break;
							case "doubleAccounting": r.uval = "double-accounting";
						}
					case "<u>":
					case "<u/>":
						r.u = 1;
						break;
					case "</u>": break;
					case "<b": if ("0" == i.val) break;
					case "<b>":
					case "<b/>":
						r.b = 1;
						break;
					case "</b>": break;
					case "<i": if ("0" == i.val) break;
					case "<i>":
					case "<i/>":
						r.i = 1;
						break;
					case "</i>": break;
					case "<color":
						i.rgb && (r.color = i.rgb.slice(2, 8));
						break;
					case "<color>":
					case "<color/>":
					case "</color>": break;
					case "<family":
						r.family = i.val;
						break;
					case "<family>":
					case "<family/>":
					case "</family>": break;
					case "<vertAlign":
						r.valign = i.val;
						break;
					case "<vertAlign>":
					case "<vertAlign/>":
					case "</vertAlign>":
					case "<scheme":
					case "<scheme>":
					case "<scheme/>":
					case "</scheme>":
					case "<extLst":
					case "<extLst>":
					case "</extLst>": break;
					case "<ext":
						s = !0;
						break;
					case "</ext>":
						s = !1;
						break;
					default: if (47 !== i[0].charCodeAt(1) && !s) throw new Error("Unrecognized rich format " + i[0]);
				}
			}
			return r;
		}(n[1])), a;
	}
	var r = /<(?:\w+:)?r>/g, a = /<\/(?:\w+:)?r>/;
	return function(t) {
		return t.replace(r, "").split(a).map(e).filter(function(e) {
			return e.v;
		});
	};
}(), On = function() {
	var e = /(\r\n|\n)/g;
	function r(r) {
		var t = [
			[],
			r.v,
			[]
		];
		return r.v ? (r.s && function(e, r, t) {
			var a = [];
			e.u && a.push("text-decoration: underline;"), e.uval && a.push("text-underline-style:" + e.uval + ";"), e.sz && a.push("font-size:" + e.sz + "pt;"), e.outline && a.push("text-effect: outline;"), e.shadow && a.push("text-shadow: auto;"), r.push("<span style=\"" + a.join("") + "\">"), e.b && (r.push("<b>"), t.push("</b>")), e.i && (r.push("<i>"), t.push("</i>")), e.strike && (r.push("<s>"), t.push("</s>"));
			var n = e.valign || "";
			"superscript" == n || "super" == n ? n = "sup" : "subscript" == n && (n = "sub"), "" != n && (r.push("<" + n + ">"), t.push("</" + n + ">")), t.push("</span>");
		}(r.s, t[0], t[2]), t[0].join("") + t[1].replace(e, "<br/>") + t[2].join("")) : "";
	}
	return function(e) {
		return e.map(r).join("");
	};
}(), Rn = /<(?:\w+:)?t\b[^<>]*>([^<]*)<\/(?:\w+:)?t>/g, In = /<(?:\w+:)?r\b[^<>]*>/;
function Nn(e, r) {
	var t = !r || r.cellHTML, a = {};
	return e ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/) ? (a.t = Er(Rr(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || ""), !0), a.r = Rr(e), t && (a.h = kr(a.t))) : e.match(In) && (a.r = Rr(e), a.t = Er(Rr((Ze(e, "rPh").match(Rn) || []).join("").replace(ur, "")), !0), t && (a.h = On(xn(a.r)))), a) : { t: "" };
}
var Dn = /<(?:\w+:)?(?:si|sstItem)>/g, Fn = /<\/(?:\w+:)?(?:si|sstItem)>/;
function Pn(e) {
	for (var r = [], t = e.split(""), a = 0; a < t.length; ++a) r[a] = t[a].charCodeAt(0);
	return r;
}
function Mn(e, r) {
	var t = {};
	return t.Major = e.read_shift(2), t.Minor = e.read_shift(2), r >= 4 && (e.l += r - 4), t;
}
function Ln(e) {
	for (var r = e.read_shift(4), t = e.l + r - 4, a = {}, n = e.read_shift(4), s = []; n-- > 0;) s.push({
		t: e.read_shift(4),
		v: e.read_shift(0, "lpp4")
	});
	if (a.name = e.read_shift(0, "lpp4"), a.comps = s, e.l != t) throw new Error("Bad DataSpaceMapEntry: " + e.l + " != " + t);
	return a;
}
function Un(e, r) {
	var t = e.l + r, a = {};
	a.Flags = 63 & e.read_shift(4), e.l += 4, a.AlgID = e.read_shift(4);
	var n = !1;
	switch (a.AlgID) {
		case 26126:
		case 26127:
		case 26128:
			n = 36 == a.Flags;
			break;
		case 26625:
			n = 4 == a.Flags;
			break;
		case 0:
			n = 16 == a.Flags || 4 == a.Flags || 36 == a.Flags;
			break;
		default: throw "Unrecognized encryption algorithm: " + a.AlgID;
	}
	if (!n) throw new Error("Encryption Flags/AlgID mismatch");
	return a.AlgIDHash = e.read_shift(4), a.KeySize = e.read_shift(4), a.ProviderType = e.read_shift(4), e.l += 8, a.CSPName = e.read_shift(t - e.l >> 1, "utf16le"), e.l = t, a;
}
function Bn(e, r) {
	var t = {}, a = e.l + r;
	return e.l += 4, t.Salt = e.slice(e.l, e.l + 16), e.l += 16, t.Verifier = e.slice(e.l, e.l + 16), e.l += 16, e.read_shift(4), t.VerifierHash = e.slice(e.l, a), e.l = a, t;
}
function Hn(e) {
	if (36 != (63 & e.read_shift(4))) throw new Error("EncryptionInfo mismatch");
	return {
		t: "Std",
		h: Un(e, e.read_shift(4)),
		v: Bn(e, e.length - e.l)
	};
}
function Wn() {
	throw new Error("File is password-protected: ECMA-376 Extensible");
}
function zn(e) {
	var r = [
		"saltSize",
		"blockSize",
		"keyBits",
		"hashSize",
		"cipherAlgorithm",
		"cipherChaining",
		"hashAlgorithm",
		"saltValue"
	];
	e.l += 4;
	var t = e.read_shift(e.length - e.l, "utf8"), a = {};
	return t.replace(ur, function(e) {
		var t = mr(e);
		switch (gr(t[0])) {
			case "<?xml":
			case "<encryption":
			case "</encryption>":
			case "</keyEncryptors>":
			case "</keyEncryptor>": break;
			case "<keyData":
				r.forEach(function(e) {
					a[e] = t[e];
				});
				break;
			case "<dataIntegrity":
				a.encryptedHmacKey = t.encryptedHmacKey, a.encryptedHmacValue = t.encryptedHmacValue;
				break;
			case "<keyEncryptors>":
			case "<keyEncryptors":
				a.encs = [];
				break;
			case "<keyEncryptor":
				a.uri = t.uri;
				break;
			case "<encryptedKey":
				a.encs.push(t);
				break;
			default: throw t[0];
		}
	}), a;
}
var Vn = function() {
	var e = [
		187,
		255,
		255,
		186,
		255,
		255,
		185,
		128,
		0,
		190,
		15,
		0,
		191,
		15,
		0
	], r = [
		57840,
		7439,
		52380,
		33984,
		4364,
		3600,
		61902,
		12606,
		6258,
		57657,
		54287,
		34041,
		10252,
		43370,
		20163
	], t = [
		44796,
		19929,
		39858,
		10053,
		20106,
		40212,
		10761,
		31585,
		63170,
		64933,
		60267,
		50935,
		40399,
		11199,
		17763,
		35526,
		1453,
		2906,
		5812,
		11624,
		23248,
		885,
		1770,
		3540,
		7080,
		14160,
		28320,
		56640,
		55369,
		41139,
		20807,
		41614,
		21821,
		43642,
		17621,
		28485,
		56970,
		44341,
		19019,
		38038,
		14605,
		29210,
		60195,
		50791,
		40175,
		10751,
		21502,
		43004,
		24537,
		18387,
		36774,
		3949,
		7898,
		15796,
		31592,
		63184,
		47201,
		24803,
		49606,
		37805,
		14203,
		28406,
		56812,
		17824,
		35648,
		1697,
		3394,
		6788,
		13576,
		27152,
		43601,
		17539,
		35078,
		557,
		1114,
		2228,
		4456,
		30388,
		60776,
		51953,
		34243,
		7079,
		14158,
		28316,
		14128,
		28256,
		56512,
		43425,
		17251,
		34502,
		7597,
		13105,
		26210,
		52420,
		35241,
		883,
		1766,
		3532,
		4129,
		8258,
		16516,
		33032,
		4657,
		9314,
		18628
	], a = function(e, r) {
		return 255 & ((t = e ^ r) / 2 | 128 * t);
		var t;
	};
	return function(n) {
		for (var s, i, c, o = Pn(n), l = function(e) {
			for (var a = r[e.length - 1], n = 104, s = e.length - 1; s >= 0; --s) for (var i = e[s], c = 0; 7 != c; ++c) 64 & i && (a ^= t[n]), i *= 2, --n;
			return a;
		}(o), f = o.length, h = b(16), u = 0; 16 != u; ++u) h[u] = 0;
		for (1 & ~f || (s = l >> 8, h[f] = a(e[0], s), --f, s = 255 & l, i = o[o.length - 1], h[f] = a(i, s)); f > 0;) s = l >> 8, h[--f] = a(o[f], s), s = 255 & l, h[--f] = a(o[f], s);
		for (f = 15, c = 15 - o.length; c > 0;) s = l >> 8, h[f] = a(e[c], s), --c, s = 255 & l, h[--f] = a(o[f], s), --f, --c;
		return h;
	};
}();
function Gn(e, r, t, a) {
	var n, s, i, c = {
		key: La(e),
		verificationBytes: La(e)
	};
	return t.password && (c.verifier = function(e) {
		var r, t, a = 0, n = Pn(e), s = n.length + 1;
		for ((r = b(s))[0] = n.length, t = 1; t != s; ++t) r[t] = n[t - 1];
		for (t = s - 1; t >= 0; --t) a = ((16384 & a ? 1 : 0) | a << 1 & 32767) ^ r[t];
		return 52811 ^ a;
	}(t.password)), a.valid = c.verificationBytes === c.verifier, a.valid && (a.insitu = (n = t.password, s = 0, i = Vn(n), function(e) {
		var r = function(e, r, t, a, n) {
			n || (n = r), a || (a = Vn(""));
			for (var s, i = 0; i != r.length; ++i) s = r[i], s = 255 & ((s ^= a[t]) >> 5 | s << 3), n[i] = s, ++t;
			return [
				n,
				t,
				a
			];
		}(0, e, s, i);
		return s = r[1], r[0];
	})), c;
}
function $n(e, r) {
	var t = r || {}, a = {}, n = t.dense;
	n && (a["!data"] = []);
	var s = $e(e, "\\trowd", "\\row");
	if (!s) throw new Error("RTF missing table");
	var i = {
		s: {
			c: 0,
			r: 0
		},
		e: {
			c: 0,
			r: s.length - 1
		}
	}, c = [];
	return s.forEach(function(e, r) {
		n && (c = a["!data"][r] = []);
		for (var s, o = /\\[\w\-]+\b/g, l = 0, f = -1, h = []; null != (s = o.exec(e));) {
			var u = e.slice(l, o.lastIndex - s[0].length);
			switch (32 == u.charCodeAt(0) && (u = u.slice(1)), u.length && h.push(u), s[0]) {
				case "\\cell":
					if (++f, h.length) {
						var d = {
							v: h.join(""),
							t: "s"
						};
						"TRUE" == d.v || "FALSE" == d.v ? (d.v = "TRUE" == d.v, d.t = "b") : isNaN(Fe(d.v)) ? null != ua[d.v] && (d.t = "e", d.w = d.v, d.v = ua[d.v]) : (d.t = "n", !1 !== t.cellText && (d.w = d.v), d.v = Fe(d.v)), n ? c[f] = d : a[Ft({
							r,
							c: f
						})] = d;
					}
					h = [];
					break;
				case "\\par": h.push("\n");
			}
			l = o.lastIndex;
		}
		f > i.e.c && (i.e.c = f);
	}), a["!ref"] = Mt(i), a;
}
function Xn(e) {
	for (var r = 0, t = 1; 3 != r; ++r) t = 256 * t + (e[r] > 255 ? 255 : e[r] < 0 ? 0 : e[r]);
	return t.toString(16).toUpperCase().slice(1);
}
function jn(e, r) {
	if (0 === r) return e;
	var t, a, n = function(e) {
		var r = e[0] / 255, t = e[1] / 255, a = e[2] / 255, n = Math.max(r, t, a), s = Math.min(r, t, a), i = n - s;
		if (0 === i) return [
			0,
			0,
			r
		];
		var c, o = 0, l = n + s;
		switch (c = i / (l > 1 ? 2 - l : l), n) {
			case r:
				o = ((t - a) / i + 6) % 6;
				break;
			case t:
				o = (a - r) / i + 2;
				break;
			case a: o = (r - t) / i + 4;
		}
		return [
			o / 6,
			c,
			l / 2
		];
	}((a = (t = e).slice("#" === t[0] ? 1 : 0).slice(0, 6), [
		parseInt(a.slice(0, 2), 16),
		parseInt(a.slice(2, 4), 16),
		parseInt(a.slice(4, 6), 16)
	]));
	return n[2] = r < 0 ? n[2] * (1 + r) : 1 - (1 - n[2]) * (1 - r), Xn(function(e) {
		var r, t = e[0], a = e[1], n = e[2], s = 2 * a * (n < .5 ? n : 1 - n), i = n - s / 2, c = [
			i,
			i,
			i
		], o = 6 * t;
		if (0 !== a) switch (0 | o) {
			case 0:
			case 6:
				r = s * o, c[0] += s, c[1] += r;
				break;
			case 1:
				r = s * (2 - o), c[0] += r, c[1] += s;
				break;
			case 2:
				r = s * (o - 2), c[1] += s, c[2] += r;
				break;
			case 3:
				r = s * (4 - o), c[1] += r, c[2] += s;
				break;
			case 4:
				r = s * (o - 4), c[2] += s, c[0] += r;
				break;
			case 5: r = s * (6 - o), c[2] += r, c[0] += s;
		}
		for (var l = 0; 3 != l; ++l) c[l] = Math.round(255 * c[l]);
		return c;
	}(n));
}
var Kn = 6;
function Yn(e) {
	return Math.floor((e + Math.round(128 / Kn) / 256) * Kn);
}
function Jn(e) {
	return Math.floor((e - 5) / Kn * 100 + .5) / 100;
}
function Zn(e) {
	return Math.round((e * Kn + 5) / Kn * 256) / 256;
}
function qn(e) {
	return Zn(Jn(Yn(e)));
}
function Qn(e) {
	var r = Math.abs(e - qn(e)), t = Kn;
	if (r > .005) for (Kn = 1; Kn < 15; ++Kn) Math.abs(e - qn(e)) <= r && (r = Math.abs(e - qn(e)), t = Kn);
	Kn = t;
}
function es(e) {
	e.width ? (e.wpx = Yn(e.width), e.wch = Jn(e.wpx), e.MDW = Kn) : e.wpx ? (e.wch = Jn(e.wpx), e.width = Zn(e.wch), e.MDW = Kn) : "number" == typeof e.wch && (e.width = Zn(e.wch), e.wpx = Yn(e.width), e.MDW = Kn), e.customWidth && delete e.customWidth;
}
var rs = 96;
function ts(e) {
	return 96 * e / rs;
}
function as(e) {
	return e * rs / 96;
}
var ns = {
	None: "none",
	Solid: "solid",
	Gray50: "mediumGray",
	Gray75: "darkGray",
	Gray25: "lightGray",
	HorzStripe: "darkHorizontal",
	VertStripe: "darkVertical",
	ReverseDiagStripe: "darkDown",
	DiagStripe: "darkUp",
	DiagCross: "darkGrid",
	ThickDiagCross: "darkTrellis",
	ThinHorzStripe: "lightHorizontal",
	ThinVertStripe: "lightVertical",
	ThinReverseDiagStripe: "lightDown",
	ThinHorzCross: "lightGrid"
}, ss = [
	"numFmtId",
	"fillId",
	"fontId",
	"borderId",
	"xfId"
], is = [
	"applyAlignment",
	"applyBorder",
	"applyFill",
	"applyFont",
	"applyNumberFormat",
	"applyProtection",
	"pivotButton",
	"quotePrefix"
], cs = function() {
	return function(e, r, a) {
		var n, s = {};
		return e ? (e = Ge(Xe(e, "<!--", "-->")), (n = Ye(e, "numFmts")) && function(e, r, t) {
			r.NumberFmt = [];
			for (var a = Te(P), n = 0; n < a.length; ++n) r.NumberFmt[a[n]] = P[a[n]];
			var s = e.match(ur);
			if (s) for (n = 0; n < s.length; ++n) {
				var i = mr(s[n]);
				switch (gr(i[0])) {
					case "<numFmts":
					case "</numFmts>":
					case "<numFmts/>":
					case "<numFmts>":
					case "</numFmt>": break;
					case "<numFmt":
						var c = Er(Rr(i.formatCode)), o = parseInt(i.numFmtId, 10);
						if (r.NumberFmt[o] = c, o > 0) {
							if (o > 392) {
								for (o = 392; o > 60 && null != r.NumberFmt[o]; --o);
								r.NumberFmt[o] = c;
							}
							ve(c, o);
						}
						break;
					default: if (t.WTF) throw new Error("unrecognized " + i[0] + " in numFmts");
				}
			}
		}(n[0], s, a), (n = Ye(e, "fonts")) && function(e, r, a, n) {
			r.Fonts = [];
			var s = {}, i = !1;
			(e.match(ur) || []).forEach(function(e) {
				var c = mr(e);
				switch (gr(c[0])) {
					case "<fonts":
					case "<fonts>":
					case "</fonts>":
					case "<font":
					case "<font>":
					case "<name/>":
					case "</name>":
					case "</b>":
					case "</b":
					case "</i>":
					case "</i":
					case "</u>":
					case "</u":
					case "</strike>":
					case "</strike":
					case "</outline>":
					case "</outline":
					case "</shadow>":
					case "</shadow":
					case "</condense>":
					case "</condense":
					case "</extend>":
					case "</extend":
					case "<sz/>":
					case "</sz>":
					case "</sz":
					case "<vertAlign/>":
					case "</vertAlign>":
					case "</vertAlign":
					case "<family/>":
					case "</family>":
					case "</family":
					case "<scheme/>":
					case "</scheme>":
					case "</scheme":
					case "<charset/>":
					case "</charset>":
					case "</charset":
					case "<color/>":
					case "</color>":
					case "</color":
					case "<extLst":
					case "<extLst>":
					case "</extLst>": break;
					case "</font>":
					case "<font/>":
						r.Fonts.push(s), s = {};
						break;
					case "<name":
						c.val && (s.name = Rr(c.val));
						break;
					case "<b":
						s.bold = c.val ? yr(c.val) : 1;
						break;
					case "<b/>":
						s.bold = 1;
						break;
					case "<i":
						s.italic = c.val ? yr(c.val) : 1;
						break;
					case "<i/>":
						s.italic = 1;
						break;
					case "<u":
						switch (c.val) {
							case "none":
								s.underline = 0;
								break;
							case "single":
								s.underline = 1;
								break;
							case "double":
								s.underline = 2;
								break;
							case "singleAccounting":
								s.underline = 33;
								break;
							case "doubleAccounting": s.underline = 34;
						}
						break;
					case "<u/>":
						s.underline = 1;
						break;
					case "<strike":
						s.strike = c.val ? yr(c.val) : 1;
						break;
					case "<strike/>":
						s.strike = 1;
						break;
					case "<outline":
						s.outline = c.val ? yr(c.val) : 1;
						break;
					case "<outline/>":
						s.outline = 1;
						break;
					case "<shadow":
						s.shadow = c.val ? yr(c.val) : 1;
						break;
					case "<shadow/>":
						s.shadow = 1;
						break;
					case "<condense":
						s.condense = c.val ? yr(c.val) : 1;
						break;
					case "<condense/>":
						s.condense = 1;
						break;
					case "<extend":
						s.extend = c.val ? yr(c.val) : 1;
						break;
					case "<extend/>":
						s.extend = 1;
						break;
					case "<sz":
						c.val && (s.sz = +c.val);
						break;
					case "<vertAlign":
						c.val && (s.vertAlign = c.val);
						break;
					case "<family":
						c.val && (s.family = parseInt(c.val, 10));
						break;
					case "<scheme":
						c.val && (s.scheme = c.val);
						break;
					case "<charset":
						if ("1" == c.val) break;
						c.codepage = t[parseInt(c.val, 10)];
						break;
					case "<color":
						if (s.color || (s.color = {}), c.auto && (s.color.auto = yr(c.auto)), c.rgb) s.color.rgb = c.rgb.slice(-6);
						else if (c.indexed) {
							s.color.index = parseInt(c.indexed, 10);
							var o = fa[s.color.index];
							81 == s.color.index && (o = fa[1]), o || (o = fa[1]), s.color.rgb = o[0].toString(16) + o[1].toString(16) + o[2].toString(16);
						} else c.theme && (s.color.theme = parseInt(c.theme, 10), c.tint && (s.color.tint = parseFloat(c.tint)), c.theme && a.themeElements && a.themeElements.clrScheme && (s.color.rgb = jn(a.themeElements.clrScheme[s.color.theme].rgb, s.color.tint || 0)));
						break;
					case "<AlternateContent":
					case "<ext":
						i = !0;
						break;
					case "</AlternateContent>":
					case "</AlternateContent":
					case "</ext>":
						i = !1;
						break;
					default: if (n && n.WTF && !i) throw new Error("unrecognized " + c[0] + " in fonts");
				}
			});
		}(n[0], s, r, a), (n = Ye(e, "fills")) && function(e, r, t, a) {
			r.Fills = [];
			var n = {}, s = !1;
			(e.match(ur) || []).forEach(function(e) {
				var t = mr(e);
				switch (gr(t[0])) {
					case "<fills":
					case "<fills>":
					case "</fills>":
					case "</fill>":
					case "<gradientFill>":
					case "<patternFill/>":
					case "</patternFill>":
					case "<bgColor/>":
					case "</bgColor>":
					case "<fgColor/>":
					case "</fgColor>":
					case "<stop":
					case "<stop/>":
					case "</stop>":
					case "<color":
					case "<color/>":
					case "</color>":
					case "<extLst":
					case "<extLst>":
					case "</extLst>": break;
					case "<fill>":
					case "<fill":
					case "<fill/>":
						n = {}, r.Fills.push(n);
						break;
					case "<gradientFill":
					case "</gradientFill>":
						r.Fills.push(n), n = {};
						break;
					case "<patternFill":
					case "<patternFill>":
						t.patternType && (n.patternType = t.patternType);
						break;
					case "<bgColor":
						n.bgColor || (n.bgColor = {}), t.indexed && (n.bgColor.indexed = parseInt(t.indexed, 10)), t.theme && (n.bgColor.theme = parseInt(t.theme, 10)), t.tint && (n.bgColor.tint = parseFloat(t.tint)), t.rgb && (n.bgColor.rgb = t.rgb.slice(-6));
						break;
					case "<fgColor":
						n.fgColor || (n.fgColor = {}), t.theme && (n.fgColor.theme = parseInt(t.theme, 10)), t.tint && (n.fgColor.tint = parseFloat(t.tint)), null != t.rgb && (n.fgColor.rgb = t.rgb.slice(-6));
						break;
					case "<ext":
						s = !0;
						break;
					case "</ext>":
						s = !1;
						break;
					default: if (a && a.WTF && !s) throw new Error("unrecognized " + t[0] + " in fills");
				}
			});
		}(n[0], s, 0, a), (n = Ye(e, "borders")) && function(e, r, t, a) {
			r.Borders = [];
			var n = {}, s = !1;
			(e.match(ur) || []).forEach(function(e) {
				var t = mr(e);
				switch (gr(t[0])) {
					case "<borders":
					case "<borders>":
					case "</borders>":
					case "</border>":
					case "<left/>":
					case "<left":
					case "<left>":
					case "</left>":
					case "<right/>":
					case "<right":
					case "<right>":
					case "</right>":
					case "<top/>":
					case "<top":
					case "<top>":
					case "</top>":
					case "<bottom/>":
					case "<bottom":
					case "<bottom>":
					case "</bottom>":
					case "<diagonal":
					case "<diagonal>":
					case "<diagonal/>":
					case "</diagonal>":
					case "<horizontal":
					case "<horizontal>":
					case "<horizontal/>":
					case "</horizontal>":
					case "<vertical":
					case "<vertical>":
					case "<vertical/>":
					case "</vertical>":
					case "<start":
					case "<start>":
					case "<start/>":
					case "</start>":
					case "<end":
					case "<end>":
					case "<end/>":
					case "</end>":
					case "<color":
					case "<color>":
					case "<color/>":
					case "</color>":
					case "<extLst":
					case "<extLst>":
					case "</extLst>": break;
					case "<border":
					case "<border>":
					case "<border/>":
						n = {}, t.diagonalUp && (n.diagonalUp = yr(t.diagonalUp)), t.diagonalDown && (n.diagonalDown = yr(t.diagonalDown)), r.Borders.push(n);
						break;
					case "<ext":
						s = !0;
						break;
					case "</ext>":
						s = !1;
						break;
					default: if (a && a.WTF && !s) throw new Error("unrecognized " + t[0] + " in borders");
				}
			});
		}(n[0], s, 0, a), (n = Ye(e, "cellXfs")) && function(e, r, t) {
			var a;
			r.CellXf = [];
			var n = !1;
			(e.match(ur) || []).forEach(function(e) {
				var s = mr(e), i = 0;
				switch (gr(s[0])) {
					case "<cellXfs":
					case "<cellXfs>":
					case "<cellXfs/>":
					case "</cellXfs>":
					case "</xf>":
					case "</alignment>":
					case "<protection":
					case "<protection>":
					case "</protection>":
					case "<protection/>":
					case "<extLst":
					case "<extLst>":
					case "</extLst>": break;
					case "<xf":
					case "<xf/>":
					case "<xf>":
						for (delete (a = s)[0], i = 0; i < ss.length; ++i) a[ss[i]] && (a[ss[i]] = parseInt(a[ss[i]], 10));
						for (i = 0; i < is.length; ++i) a[is[i]] && (a[is[i]] = yr(a[is[i]]));
						if (r.NumberFmt && a.numFmtId > 392) {
							for (i = 392; i > 60; --i) if (r.NumberFmt[a.numFmtId] == r.NumberFmt[i]) {
								a.numFmtId = i;
								break;
							}
						}
						r.CellXf.push(a);
						break;
					case "<alignment":
					case "<alignment/>":
					case "<alignment>":
						var c = {};
						s.vertical && (c.vertical = s.vertical), s.horizontal && (c.horizontal = s.horizontal), null != s.textRotation && (c.textRotation = s.textRotation), s.indent && (c.indent = s.indent), s.wrapText && (c.wrapText = yr(s.wrapText)), a.alignment = c;
						break;
					case "<AlternateContent":
					case "<AlternateContent>":
					case "<ext":
						n = !0;
						break;
					case "</AlternateContent>":
					case "</ext>":
						n = !1;
						break;
					default: if (t && t.WTF && !n) throw new Error("unrecognized " + s[0] + " in cellXfs");
				}
			});
		}(n[0], s, a), s) : s;
	};
}(), os = wt, ls = wt, fs = [
	"</a:lt1>",
	"</a:dk1>",
	"</a:lt2>",
	"</a:dk2>",
	"</a:accent1>",
	"</a:accent2>",
	"</a:accent3>",
	"</a:accent4>",
	"</a:accent5>",
	"</a:accent6>",
	"</a:hlink>",
	"</a:folHlink>"
];
function hs(e, r) {
	var t;
	e && 0 !== e.length || (e = function() {
		var e = [lr];
		return e[e.length] = "<a:theme xmlns:a=\"http://schemas.openxmlformats.org/drawingml/2006/main\" name=\"Office Theme\">", e[e.length] = "<a:themeElements>", e[e.length] = "<a:clrScheme name=\"Office\">", e[e.length] = "<a:dk1><a:sysClr val=\"windowText\" lastClr=\"000000\"/></a:dk1>", e[e.length] = "<a:lt1><a:sysClr val=\"window\" lastClr=\"FFFFFF\"/></a:lt1>", e[e.length] = "<a:dk2><a:srgbClr val=\"1F497D\"/></a:dk2>", e[e.length] = "<a:lt2><a:srgbClr val=\"EEECE1\"/></a:lt2>", e[e.length] = "<a:accent1><a:srgbClr val=\"4F81BD\"/></a:accent1>", e[e.length] = "<a:accent2><a:srgbClr val=\"C0504D\"/></a:accent2>", e[e.length] = "<a:accent3><a:srgbClr val=\"9BBB59\"/></a:accent3>", e[e.length] = "<a:accent4><a:srgbClr val=\"8064A2\"/></a:accent4>", e[e.length] = "<a:accent5><a:srgbClr val=\"4BACC6\"/></a:accent5>", e[e.length] = "<a:accent6><a:srgbClr val=\"F79646\"/></a:accent6>", e[e.length] = "<a:hlink><a:srgbClr val=\"0000FF\"/></a:hlink>", e[e.length] = "<a:folHlink><a:srgbClr val=\"800080\"/></a:folHlink>", e[e.length] = "</a:clrScheme>", e[e.length] = "<a:fontScheme name=\"Office\">", e[e.length] = "<a:majorFont>", e[e.length] = "<a:latin typeface=\"Cambria\"/>", e[e.length] = "<a:ea typeface=\"\"/>", e[e.length] = "<a:cs typeface=\"\"/>", e[e.length] = "<a:font script=\"Jpan\" typeface=\"ＭＳ Ｐゴシック\"/>", e[e.length] = "<a:font script=\"Hang\" typeface=\"맑은 고딕\"/>", e[e.length] = "<a:font script=\"Hans\" typeface=\"宋体\"/>", e[e.length] = "<a:font script=\"Hant\" typeface=\"新細明體\"/>", e[e.length] = "<a:font script=\"Arab\" typeface=\"Times New Roman\"/>", e[e.length] = "<a:font script=\"Hebr\" typeface=\"Times New Roman\"/>", e[e.length] = "<a:font script=\"Thai\" typeface=\"Tahoma\"/>", e[e.length] = "<a:font script=\"Ethi\" typeface=\"Nyala\"/>", e[e.length] = "<a:font script=\"Beng\" typeface=\"Vrinda\"/>", e[e.length] = "<a:font script=\"Gujr\" typeface=\"Shruti\"/>", e[e.length] = "<a:font script=\"Khmr\" typeface=\"MoolBoran\"/>", e[e.length] = "<a:font script=\"Knda\" typeface=\"Tunga\"/>", e[e.length] = "<a:font script=\"Guru\" typeface=\"Raavi\"/>", e[e.length] = "<a:font script=\"Cans\" typeface=\"Euphemia\"/>", e[e.length] = "<a:font script=\"Cher\" typeface=\"Plantagenet Cherokee\"/>", e[e.length] = "<a:font script=\"Yiii\" typeface=\"Microsoft Yi Baiti\"/>", e[e.length] = "<a:font script=\"Tibt\" typeface=\"Microsoft Himalaya\"/>", e[e.length] = "<a:font script=\"Thaa\" typeface=\"MV Boli\"/>", e[e.length] = "<a:font script=\"Deva\" typeface=\"Mangal\"/>", e[e.length] = "<a:font script=\"Telu\" typeface=\"Gautami\"/>", e[e.length] = "<a:font script=\"Taml\" typeface=\"Latha\"/>", e[e.length] = "<a:font script=\"Syrc\" typeface=\"Estrangelo Edessa\"/>", e[e.length] = "<a:font script=\"Orya\" typeface=\"Kalinga\"/>", e[e.length] = "<a:font script=\"Mlym\" typeface=\"Kartika\"/>", e[e.length] = "<a:font script=\"Laoo\" typeface=\"DokChampa\"/>", e[e.length] = "<a:font script=\"Sinh\" typeface=\"Iskoola Pota\"/>", e[e.length] = "<a:font script=\"Mong\" typeface=\"Mongolian Baiti\"/>", e[e.length] = "<a:font script=\"Viet\" typeface=\"Times New Roman\"/>", e[e.length] = "<a:font script=\"Uigh\" typeface=\"Microsoft Uighur\"/>", e[e.length] = "<a:font script=\"Geor\" typeface=\"Sylfaen\"/>", e[e.length] = "</a:majorFont>", e[e.length] = "<a:minorFont>", e[e.length] = "<a:latin typeface=\"Calibri\"/>", e[e.length] = "<a:ea typeface=\"\"/>", e[e.length] = "<a:cs typeface=\"\"/>", e[e.length] = "<a:font script=\"Jpan\" typeface=\"ＭＳ Ｐゴシック\"/>", e[e.length] = "<a:font script=\"Hang\" typeface=\"맑은 고딕\"/>", e[e.length] = "<a:font script=\"Hans\" typeface=\"宋体\"/>", e[e.length] = "<a:font script=\"Hant\" typeface=\"新細明體\"/>", e[e.length] = "<a:font script=\"Arab\" typeface=\"Arial\"/>", e[e.length] = "<a:font script=\"Hebr\" typeface=\"Arial\"/>", e[e.length] = "<a:font script=\"Thai\" typeface=\"Tahoma\"/>", e[e.length] = "<a:font script=\"Ethi\" typeface=\"Nyala\"/>", e[e.length] = "<a:font script=\"Beng\" typeface=\"Vrinda\"/>", e[e.length] = "<a:font script=\"Gujr\" typeface=\"Shruti\"/>", e[e.length] = "<a:font script=\"Khmr\" typeface=\"DaunPenh\"/>", e[e.length] = "<a:font script=\"Knda\" typeface=\"Tunga\"/>", e[e.length] = "<a:font script=\"Guru\" typeface=\"Raavi\"/>", e[e.length] = "<a:font script=\"Cans\" typeface=\"Euphemia\"/>", e[e.length] = "<a:font script=\"Cher\" typeface=\"Plantagenet Cherokee\"/>", e[e.length] = "<a:font script=\"Yiii\" typeface=\"Microsoft Yi Baiti\"/>", e[e.length] = "<a:font script=\"Tibt\" typeface=\"Microsoft Himalaya\"/>", e[e.length] = "<a:font script=\"Thaa\" typeface=\"MV Boli\"/>", e[e.length] = "<a:font script=\"Deva\" typeface=\"Mangal\"/>", e[e.length] = "<a:font script=\"Telu\" typeface=\"Gautami\"/>", e[e.length] = "<a:font script=\"Taml\" typeface=\"Latha\"/>", e[e.length] = "<a:font script=\"Syrc\" typeface=\"Estrangelo Edessa\"/>", e[e.length] = "<a:font script=\"Orya\" typeface=\"Kalinga\"/>", e[e.length] = "<a:font script=\"Mlym\" typeface=\"Kartika\"/>", e[e.length] = "<a:font script=\"Laoo\" typeface=\"DokChampa\"/>", e[e.length] = "<a:font script=\"Sinh\" typeface=\"Iskoola Pota\"/>", e[e.length] = "<a:font script=\"Mong\" typeface=\"Mongolian Baiti\"/>", e[e.length] = "<a:font script=\"Viet\" typeface=\"Arial\"/>", e[e.length] = "<a:font script=\"Uigh\" typeface=\"Microsoft Uighur\"/>", e[e.length] = "<a:font script=\"Geor\" typeface=\"Sylfaen\"/>", e[e.length] = "</a:minorFont>", e[e.length] = "</a:fontScheme>", e[e.length] = "<a:fmtScheme name=\"Office\">", e[e.length] = "<a:fillStyleLst>", e[e.length] = "<a:solidFill><a:schemeClr val=\"phClr\"/></a:solidFill>", e[e.length] = "<a:gradFill rotWithShape=\"1\">", e[e.length] = "<a:gsLst>", e[e.length] = "<a:gs pos=\"0\"><a:schemeClr val=\"phClr\"><a:tint val=\"50000\"/><a:satMod val=\"300000\"/></a:schemeClr></a:gs>", e[e.length] = "<a:gs pos=\"35000\"><a:schemeClr val=\"phClr\"><a:tint val=\"37000\"/><a:satMod val=\"300000\"/></a:schemeClr></a:gs>", e[e.length] = "<a:gs pos=\"100000\"><a:schemeClr val=\"phClr\"><a:tint val=\"15000\"/><a:satMod val=\"350000\"/></a:schemeClr></a:gs>", e[e.length] = "</a:gsLst>", e[e.length] = "<a:lin ang=\"16200000\" scaled=\"1\"/>", e[e.length] = "</a:gradFill>", e[e.length] = "<a:gradFill rotWithShape=\"1\">", e[e.length] = "<a:gsLst>", e[e.length] = "<a:gs pos=\"0\"><a:schemeClr val=\"phClr\"><a:tint val=\"100000\"/><a:shade val=\"100000\"/><a:satMod val=\"130000\"/></a:schemeClr></a:gs>", e[e.length] = "<a:gs pos=\"100000\"><a:schemeClr val=\"phClr\"><a:tint val=\"50000\"/><a:shade val=\"100000\"/><a:satMod val=\"350000\"/></a:schemeClr></a:gs>", e[e.length] = "</a:gsLst>", e[e.length] = "<a:lin ang=\"16200000\" scaled=\"0\"/>", e[e.length] = "</a:gradFill>", e[e.length] = "</a:fillStyleLst>", e[e.length] = "<a:lnStyleLst>", e[e.length] = "<a:ln w=\"9525\" cap=\"flat\" cmpd=\"sng\" algn=\"ctr\"><a:solidFill><a:schemeClr val=\"phClr\"><a:shade val=\"95000\"/><a:satMod val=\"105000\"/></a:schemeClr></a:solidFill><a:prstDash val=\"solid\"/></a:ln>", e[e.length] = "<a:ln w=\"25400\" cap=\"flat\" cmpd=\"sng\" algn=\"ctr\"><a:solidFill><a:schemeClr val=\"phClr\"/></a:solidFill><a:prstDash val=\"solid\"/></a:ln>", e[e.length] = "<a:ln w=\"38100\" cap=\"flat\" cmpd=\"sng\" algn=\"ctr\"><a:solidFill><a:schemeClr val=\"phClr\"/></a:solidFill><a:prstDash val=\"solid\"/></a:ln>", e[e.length] = "</a:lnStyleLst>", e[e.length] = "<a:effectStyleLst>", e[e.length] = "<a:effectStyle>", e[e.length] = "<a:effectLst>", e[e.length] = "<a:outerShdw blurRad=\"40000\" dist=\"20000\" dir=\"5400000\" rotWithShape=\"0\"><a:srgbClr val=\"000000\"><a:alpha val=\"38000\"/></a:srgbClr></a:outerShdw>", e[e.length] = "</a:effectLst>", e[e.length] = "</a:effectStyle>", e[e.length] = "<a:effectStyle>", e[e.length] = "<a:effectLst>", e[e.length] = "<a:outerShdw blurRad=\"40000\" dist=\"23000\" dir=\"5400000\" rotWithShape=\"0\"><a:srgbClr val=\"000000\"><a:alpha val=\"35000\"/></a:srgbClr></a:outerShdw>", e[e.length] = "</a:effectLst>", e[e.length] = "</a:effectStyle>", e[e.length] = "<a:effectStyle>", e[e.length] = "<a:effectLst>", e[e.length] = "<a:outerShdw blurRad=\"40000\" dist=\"23000\" dir=\"5400000\" rotWithShape=\"0\"><a:srgbClr val=\"000000\"><a:alpha val=\"35000\"/></a:srgbClr></a:outerShdw>", e[e.length] = "</a:effectLst>", e[e.length] = "<a:scene3d><a:camera prst=\"orthographicFront\"><a:rot lat=\"0\" lon=\"0\" rev=\"0\"/></a:camera><a:lightRig rig=\"threePt\" dir=\"t\"><a:rot lat=\"0\" lon=\"0\" rev=\"1200000\"/></a:lightRig></a:scene3d>", e[e.length] = "<a:sp3d><a:bevelT w=\"63500\" h=\"25400\"/></a:sp3d>", e[e.length] = "</a:effectStyle>", e[e.length] = "</a:effectStyleLst>", e[e.length] = "<a:bgFillStyleLst>", e[e.length] = "<a:solidFill><a:schemeClr val=\"phClr\"/></a:solidFill>", e[e.length] = "<a:gradFill rotWithShape=\"1\">", e[e.length] = "<a:gsLst>", e[e.length] = "<a:gs pos=\"0\"><a:schemeClr val=\"phClr\"><a:tint val=\"40000\"/><a:satMod val=\"350000\"/></a:schemeClr></a:gs>", e[e.length] = "<a:gs pos=\"40000\"><a:schemeClr val=\"phClr\"><a:tint val=\"45000\"/><a:shade val=\"99000\"/><a:satMod val=\"350000\"/></a:schemeClr></a:gs>", e[e.length] = "<a:gs pos=\"100000\"><a:schemeClr val=\"phClr\"><a:shade val=\"20000\"/><a:satMod val=\"255000\"/></a:schemeClr></a:gs>", e[e.length] = "</a:gsLst>", e[e.length] = "<a:path path=\"circle\"><a:fillToRect l=\"50000\" t=\"-80000\" r=\"50000\" b=\"180000\"/></a:path>", e[e.length] = "</a:gradFill>", e[e.length] = "<a:gradFill rotWithShape=\"1\">", e[e.length] = "<a:gsLst>", e[e.length] = "<a:gs pos=\"0\"><a:schemeClr val=\"phClr\"><a:tint val=\"80000\"/><a:satMod val=\"300000\"/></a:schemeClr></a:gs>", e[e.length] = "<a:gs pos=\"100000\"><a:schemeClr val=\"phClr\"><a:shade val=\"30000\"/><a:satMod val=\"200000\"/></a:schemeClr></a:gs>", e[e.length] = "</a:gsLst>", e[e.length] = "<a:path path=\"circle\"><a:fillToRect l=\"50000\" t=\"50000\" r=\"50000\" b=\"50000\"/></a:path>", e[e.length] = "</a:gradFill>", e[e.length] = "</a:bgFillStyleLst>", e[e.length] = "</a:fmtScheme>", e[e.length] = "</a:themeElements>", e[e.length] = "<a:objectDefaults>", e[e.length] = "<a:spDef>", e[e.length] = "<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx=\"1\"><a:schemeClr val=\"accent1\"/></a:lnRef><a:fillRef idx=\"3\"><a:schemeClr val=\"accent1\"/></a:fillRef><a:effectRef idx=\"2\"><a:schemeClr val=\"accent1\"/></a:effectRef><a:fontRef idx=\"minor\"><a:schemeClr val=\"lt1\"/></a:fontRef></a:style>", e[e.length] = "</a:spDef>", e[e.length] = "<a:lnDef>", e[e.length] = "<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx=\"2\"><a:schemeClr val=\"accent1\"/></a:lnRef><a:fillRef idx=\"0\"><a:schemeClr val=\"accent1\"/></a:fillRef><a:effectRef idx=\"1\"><a:schemeClr val=\"accent1\"/></a:effectRef><a:fontRef idx=\"minor\"><a:schemeClr val=\"tx1\"/></a:fontRef></a:style>", e[e.length] = "</a:lnDef>", e[e.length] = "</a:objectDefaults>", e[e.length] = "<a:extraClrSchemeLst/>", e[e.length] = "</a:theme>", e.join("");
	}());
	var a = {};
	if (!(t = Ke(e, "a:themeElements"))) throw new Error("themeElements not found in theme");
	return function(e, r, t) {
		var a;
		if (r.themeElements = {}, !(a = Ke(e, "a:clrScheme"))) throw new Error("clrScheme not found in themeElements");
		if (function(e, r, t) {
			r.themeElements.clrScheme = [];
			var a = {};
			(e[0].match(ur) || []).forEach(function(e) {
				var n = mr(e);
				switch (n[0]) {
					case "<a:clrScheme":
					case "</a:clrScheme>":
					case "</a:srgbClr>":
					case "</a:sysClr>": break;
					case "<a:srgbClr":
						a.rgb = n.val;
						break;
					case "<a:sysClr":
						a.rgb = n.lastClr;
						break;
					case "</a:dk1>":
					case "</a:lt1>":
					case "<a:dk1>":
					case "<a:lt1>":
					case "<a:dk2>":
					case "</a:dk2>":
					case "<a:lt2>":
					case "</a:lt2>":
					case "<a:accent1>":
					case "</a:accent1>":
					case "<a:accent2>":
					case "</a:accent2>":
					case "<a:accent3>":
					case "</a:accent3>":
					case "<a:accent4>":
					case "</a:accent4>":
					case "<a:accent5>":
					case "</a:accent5>":
					case "<a:accent6>":
					case "</a:accent6>":
					case "<a:hlink>":
					case "</a:hlink>":
					case "<a:folHlink>":
					case "</a:folHlink>":
						"/" === n[0].charAt(1) ? (r.themeElements.clrScheme[fs.indexOf(n[0])] = a, a = {}) : a.name = n[0].slice(3, n[0].length - 1);
						break;
					default: if (t && t.WTF) throw new Error("Unrecognized " + n[0] + " in clrScheme");
				}
			});
		}(a, r, t), !(a = Ke(e, "a:fontScheme"))) throw new Error("fontScheme not found in themeElements");
		if (!(a = Ke(e, "a:fmtScheme"))) throw new Error("fmtScheme not found in themeElements");
	}(t[0], a, r), a.raw = e, a;
}
function us(e) {
	var r = e.read_shift(2), t = e.read_shift(2) - 4, a = [r];
	switch (r) {
		case 4:
		case 5:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		case 13:
			a[1] = function(e) {
				var r = {};
				switch (r.xclrType = e.read_shift(2), r.nTintShade = e.read_shift(2), r.xclrType) {
					case 0:
					case 4:
						e.l += 4;
						break;
					case 1:
						r.xclrValue = function(e) {
							return wt(e, 4);
						}(e);
						break;
					case 2:
						r.xclrValue = ja(e);
						break;
					case 3: r.xclrValue = function(e) {
						return e.read_shift(4);
					}(e);
				}
				return e.l += 8, r;
			}(e);
			break;
		case 6:
			a[1] = function(e, r) {
				return wt(e, r);
			}(e, t);
			break;
		case 14:
		case 15:
			a[1] = e.read_shift(1 === t ? 1 : 2);
			break;
		default: throw new Error("Unrecognized ExtProp type: " + r + " " + t);
	}
	return a;
}
function ds(e, r) {
	r.forEach(function(e) {
		e[0];
	});
}
function ps(e, r, t, a) {
	var n, s = null != e["!data"];
	r.forEach(function(r) {
		var i = Dt(r.ref);
		if (!(i.r < 0 || i.c < 0)) {
			if (s ? (e["!data"][i.r] || (e["!data"][i.r] = []), n = e["!data"][i.r][i.c]) : n = e[r.ref], !n) {
				n = { t: "z" }, s ? e["!data"][i.r][i.c] = n : e[r.ref] = n;
				var c = Lt(e["!ref"] || "BDWGO1000001:A1");
				c.s.r > i.r && (c.s.r = i.r), c.e.r < i.r && (c.e.r = i.r), c.s.c > i.c && (c.s.c = i.c), c.e.c < i.c && (c.e.c = i.c), e["!ref"] = Mt(c);
			}
			n.c || (n.c = []);
			var o = {
				a: r.author,
				t: r.t,
				r: r.r,
				T: t
			};
			r.h && (o.h = r.h);
			for (var l = n.c.length - 1; l >= 0; --l) {
				if (!t && n.c[l].T) return;
				t && !n.c[l].T && n.c.splice(l, 1);
			}
			if (t && a) {
				for (l = 0; l < a.length; ++l) if (o.a == a[l].id) {
					o.a = a[l].name || o.a;
					break;
				}
			}
			n.c.push(o);
		}
	});
}
var ms = zt, vs = function() {
	var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g, r = {
		r: 0,
		c: 0
	};
	function t(e, t, a, n) {
		var s = !1, i = !1;
		0 == a.length ? i = !0 : "[" == a.charAt(0) && (i = !0, a = a.slice(1, -1)), 0 == n.length ? s = !0 : "[" == n.charAt(0) && (s = !0, n = n.slice(1, -1));
		var c = a.length > 0 ? 0 | parseInt(a, 10) : 0, o = n.length > 0 ? 0 | parseInt(n, 10) : 0;
		return s ? o += r.c : --o, i ? c += r.r : --c, t + (s ? "" : "$") + Nt(o) + (i ? "" : "$") + Rt(c);
	}
	return function(a, n) {
		return r = n, a.replace(e, t);
	};
}(), gs = /(^|[^._A-Z0-9])(\$?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])(\$?)(\d{1,7})(?![_.\(A-Za-z0-9])/g;
try {
	gs = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g;
} catch (ao) {}
var bs = function() {
	return function(e, r) {
		return e.replace(gs, function(e, t, a, n, s, i) {
			var c = It(n) - (a ? 0 : r.c), o = Ot(i) - (s ? 0 : r.r);
			return t + "R" + ("$" == s ? o + 1 : 0 == o ? "" : "[" + o + "]") + "C" + ("$" == a ? c + 1 : 0 == c ? "" : "[" + c + "]");
		});
	};
}();
function Ts(e, r) {
	return e.replace(gs, function(e, t, a, n, s, i) {
		return t + ("$" == a ? a + n : Nt(It(n) + r.c)) + ("$" == s ? s + i : Rt(Ot(i) + r.r));
	});
}
function Es(e, r, t) {
	var a = Pt(r).s, n = Dt(t);
	return Ts(e, {
		r: n.r - a.r,
		c: n.c - a.c
	});
}
function ws(e) {
	return e.replace(/_xlfn\./g, "");
}
function As(e) {
	e.l += 1;
}
function ks(e, r) {
	var t = e.read_shift(1 == r ? 1 : 2);
	return [
		16383 & t,
		t >> 14 & 1,
		t >> 15 & 1
	];
}
function Ss(e, r, t) {
	var a = 2;
	if (t) {
		if (t.biff >= 2 && t.biff <= 5) return ys(e);
		12 == t.biff && (a = 4);
	}
	var n = e.read_shift(a), s = e.read_shift(a), i = ks(e, 2), c = ks(e, 2);
	return {
		s: {
			r: n,
			c: i[0],
			cRel: i[1],
			rRel: i[2]
		},
		e: {
			r: s,
			c: c[0],
			cRel: c[1],
			rRel: c[2]
		}
	};
}
function ys(e) {
	var r = ks(e, 2), t = ks(e, 2), a = e.read_shift(1), n = e.read_shift(1);
	return {
		s: {
			r: r[0],
			c: a,
			cRel: r[1],
			rRel: r[2]
		},
		e: {
			r: t[0],
			c: n,
			cRel: t[1],
			rRel: t[2]
		}
	};
}
function Cs(e, r, t) {
	if (t.biff < 8) return ys(e);
	var a = e.read_shift(12 == t.biff ? 4 : 2), n = e.read_shift(12 == t.biff ? 4 : 2), s = ks(e, 2), i = ks(e, 2);
	return {
		s: {
			r: a,
			c: s[0],
			cRel: s[1],
			rRel: s[2]
		},
		e: {
			r: n,
			c: i[0],
			cRel: i[1],
			rRel: i[2]
		}
	};
}
function _s(e, r, t) {
	if (t && t.biff >= 2 && t.biff <= 5) return function(e) {
		var r = ks(e, 2), t = e.read_shift(1);
		return {
			r: r[0],
			c: t,
			cRel: r[1],
			rRel: r[2]
		};
	}(e);
	var a = e.read_shift(t && 12 == t.biff ? 4 : 2), n = ks(e, 2);
	return {
		r: a,
		c: n[0],
		cRel: n[1],
		rRel: n[2]
	};
}
function xs(e) {
	var r = e.read_shift(2), t = e.read_shift(2);
	return {
		r,
		c: 255 & t,
		fQuoted: !!(16384 & t),
		cRel: t >> 15,
		rRel: t >> 15
	};
}
function Os(e, r, t) {
	var a = t && t.biff ? t.biff : 8;
	if (a >= 2 && a <= 5) return function(e) {
		var r = e.read_shift(2), t = e.read_shift(1), a = (32768 & r) >> 15, n = (16384 & r) >> 14;
		return r &= 16383, 1 == a && r >= 8192 && (r -= 16384), 1 == n && t >= 128 && (t -= 256), {
			r,
			c: t,
			cRel: n,
			rRel: a
		};
	}(e);
	var n = e.read_shift(a >= 12 ? 4 : 2), s = e.read_shift(2), i = (16384 & s) >> 14, c = (32768 & s) >> 15;
	if (s &= 16383, 1 == c) for (; n > 524287;) n -= 1048576;
	if (1 == i) for (; s > 8191;) s -= 16384;
	return {
		r: n,
		c: s,
		cRel: i,
		rRel: c
	};
}
function Rs(e) {
	var r = 1 & e[e.l + 1];
	return e.l += 4, [r, 1];
}
function Is(e) {
	return [e.read_shift(1), e.read_shift(1)];
}
function Ns(e, r) {
	var t = [e.read_shift(1)];
	if (12 == r) switch (t[0]) {
		case 2:
			t[0] = 4;
			break;
		case 4:
			t[0] = 16;
			break;
		case 0:
			t[0] = 1;
			break;
		case 1: t[0] = 2;
	}
	switch (t[0]) {
		case 4:
			t[1] = Ma(e, 1) ? "TRUE" : "FALSE", 12 != r && (e.l += 7);
			break;
		case 37:
		case 16:
			t[1] = ha[e[e.l]], e.l += 12 == r ? 4 : 8;
			break;
		case 0:
			e.l += 8;
			break;
		case 1:
			t[1] = ra(e);
			break;
		case 2:
			t[1] = Ga(e, 0, { biff: r > 0 && r < 8 ? 2 : r });
			break;
		default: throw new Error("Bad SerAr: " + t[0]);
	}
	return t;
}
function Ds(e, r, t) {
	for (var a = e.read_shift(12 == t.biff ? 4 : 2), n = [], s = 0; s != a; ++s) n.push((12 == t.biff ? ea : qa)(e, 8));
	return n;
}
function Fs(e, r, t) {
	var a = 0, n = 0;
	12 == t.biff ? (a = e.read_shift(4), n = e.read_shift(4)) : (n = 1 + e.read_shift(1), a = 1 + e.read_shift(2)), t.biff >= 2 && t.biff < 8 && (--a, 0 == --n && (n = 256));
	for (var s = 0, i = []; s != a && (i[s] = []); ++s) for (var c = 0; c != n; ++c) i[s][c] = Ns(e, t.biff);
	return i;
}
function Ps(e, r, t) {
	return e.l += 2, [xs(e)];
}
function Ms(e) {
	return e.l += 6, [];
}
function Ls(e) {
	return e.l += 2, [La(e), 1 & e.read_shift(2)];
}
var Us = [
	"Data",
	"All",
	"Headers",
	"??",
	"?Data2",
	"??",
	"?DataHeaders",
	"??",
	"Totals",
	"??",
	"??",
	"??",
	"?DataTotals",
	"??",
	"??",
	"??",
	"?Current"
], Bs = {
	1: {
		n: "PtgExp",
		f: function(e, r, t) {
			return e.l++, t && 12 == t.biff ? [e.read_shift(4, "i"), 0] : [e.read_shift(2), e.read_shift(t && 2 == t.biff ? 1 : 2)];
		}
	},
	2: {
		n: "PtgTbl",
		f: wt
	},
	3: {
		n: "PtgAdd",
		f: As
	},
	4: {
		n: "PtgSub",
		f: As
	},
	5: {
		n: "PtgMul",
		f: As
	},
	6: {
		n: "PtgDiv",
		f: As
	},
	7: {
		n: "PtgPower",
		f: As
	},
	8: {
		n: "PtgConcat",
		f: As
	},
	9: {
		n: "PtgLt",
		f: As
	},
	10: {
		n: "PtgLe",
		f: As
	},
	11: {
		n: "PtgEq",
		f: As
	},
	12: {
		n: "PtgGe",
		f: As
	},
	13: {
		n: "PtgGt",
		f: As
	},
	14: {
		n: "PtgNe",
		f: As
	},
	15: {
		n: "PtgIsect",
		f: As
	},
	16: {
		n: "PtgUnion",
		f: As
	},
	17: {
		n: "PtgRange",
		f: As
	},
	18: {
		n: "PtgUplus",
		f: As
	},
	19: {
		n: "PtgUminus",
		f: As
	},
	20: {
		n: "PtgPercent",
		f: As
	},
	21: {
		n: "PtgParen",
		f: As
	},
	22: {
		n: "PtgMissArg",
		f: As
	},
	23: {
		n: "PtgStr",
		f: function(e, r, t) {
			return e.l++, Ha(e, 0, t);
		}
	},
	26: {
		n: "PtgSheet",
		f: function(e, r, t) {
			return e.l += 5, e.l += 2, e.l += 2 == t.biff ? 1 : 4, ["PTGSHEET"];
		}
	},
	27: {
		n: "PtgEndSheet",
		f: function(e, r, t) {
			return e.l += 2 == t.biff ? 4 : 5, ["PTGENDSHEET"];
		}
	},
	28: {
		n: "PtgErr",
		f: function(e) {
			return e.l++, ha[e.read_shift(1)];
		}
	},
	29: {
		n: "PtgBool",
		f: function(e) {
			return e.l++, 0 !== e.read_shift(1);
		}
	},
	30: {
		n: "PtgInt",
		f: function(e) {
			return e.l++, e.read_shift(2);
		}
	},
	31: {
		n: "PtgNum",
		f: function(e) {
			return e.l++, ra(e);
		}
	},
	32: {
		n: "PtgArray",
		f: function(e, r, t) {
			var a = (96 & e[e.l++]) >> 5;
			return e.l += 2 == t.biff ? 6 : 12 == t.biff ? 14 : 7, [a];
		}
	},
	33: {
		n: "PtgFunc",
		f: function(e, r, t) {
			var a = (96 & e[e.l]) >> 5;
			e.l += 1;
			var n = e.read_shift(t && t.biff <= 3 ? 1 : 2);
			return [
				ci[n],
				ii[n],
				a
			];
		}
	},
	34: {
		n: "PtgFuncVar",
		f: function(e, r, t) {
			var a = e[e.l++], n = e.read_shift(1), s = t && t.biff <= 3 ? [88 == a ? -1 : 0, e.read_shift(1)] : function(e) {
				return [e[e.l + 1] >> 7, 32767 & e.read_shift(2)];
			}(e);
			return [n, (0 === s[0] ? ii : si)[s[1]]];
		}
	},
	35: {
		n: "PtgName",
		f: function(e, r, t) {
			var a = e.read_shift(1) >>> 5 & 3, n = !t || t.biff >= 8 ? 4 : 2, s = e.read_shift(n);
			switch (t.biff) {
				case 2:
					e.l += 5;
					break;
				case 3:
				case 4:
					e.l += 8;
					break;
				case 5: e.l += 12;
			}
			return [
				a,
				0,
				s
			];
		}
	},
	36: {
		n: "PtgRef",
		f: function(e, r, t) {
			var a = (96 & e[e.l]) >> 5;
			return e.l += 1, [a, _s(e, 0, t)];
		}
	},
	37: {
		n: "PtgArea",
		f: function(e, r, t) {
			return [(96 & e[e.l++]) >> 5, Ss(e, t.biff >= 2 && t.biff, t)];
		}
	},
	38: {
		n: "PtgMemArea",
		f: function(e, r, t) {
			var a = e.read_shift(1) >>> 5 & 3;
			return e.l += t && 2 == t.biff ? 3 : 4, [a, e.read_shift(t && 2 == t.biff ? 1 : 2)];
		}
	},
	39: {
		n: "PtgMemErr",
		f: wt
	},
	40: {
		n: "PtgMemNoMem",
		f: wt
	},
	41: {
		n: "PtgMemFunc",
		f: function(e, r, t) {
			return [e.read_shift(1) >>> 5 & 3, e.read_shift(t && 2 == t.biff ? 1 : 2)];
		}
	},
	42: {
		n: "PtgRefErr",
		f: function(e, r, t) {
			var a = e.read_shift(1) >>> 5 & 3;
			return e.l += 4, t.biff < 8 && e.l--, 12 == t.biff && (e.l += 2), [a];
		}
	},
	43: {
		n: "PtgAreaErr",
		f: function(e, r, t) {
			var a = (96 & e[e.l++]) >> 5;
			return e.l += t && t.biff > 8 ? 12 : t.biff < 8 ? 6 : 8, [a];
		}
	},
	44: {
		n: "PtgRefN",
		f: function(e, r, t) {
			var a = (96 & e[e.l]) >> 5;
			return e.l += 1, [a, Os(e, 0, t)];
		}
	},
	45: {
		n: "PtgAreaN",
		f: function(e, r, t) {
			return [(96 & e[e.l++]) >> 5, Cs(e, 0, t)];
		}
	},
	46: {
		n: "PtgMemAreaN",
		f: function(e) {
			return [e.read_shift(1) >>> 5 & 3, e.read_shift(2)];
		}
	},
	47: {
		n: "PtgMemNoMemN",
		f: function(e) {
			return [e.read_shift(1) >>> 5 & 3, e.read_shift(2)];
		}
	},
	57: {
		n: "PtgNameX",
		f: function(e, r, t) {
			return 5 == t.biff ? function(e) {
				var r = e.read_shift(1) >>> 5 & 3, t = e.read_shift(2, "i");
				e.l += 8;
				var a = e.read_shift(2);
				return e.l += 12, [
					r,
					t,
					a
				];
			}(e) : [
				e.read_shift(1) >>> 5 & 3,
				e.read_shift(2),
				e.read_shift(4)
			];
		}
	},
	58: {
		n: "PtgRef3d",
		f: function(e, r, t) {
			var a = (96 & e[e.l]) >> 5;
			e.l += 1;
			var n = e.read_shift(2);
			return t && 5 == t.biff && (e.l += 12), [
				a,
				n,
				_s(e, 0, t)
			];
		}
	},
	59: {
		n: "PtgArea3d",
		f: function(e, r, t) {
			var a = (96 & e[e.l++]) >> 5, n = e.read_shift(2, "i");
			if (t && 5 === t.biff) e.l += 12;
			return [
				a,
				n,
				Ss(e, 0, t)
			];
		}
	},
	60: {
		n: "PtgRefErr3d",
		f: function(e, r, t) {
			var a = (96 & e[e.l++]) >> 5, n = e.read_shift(2), s = 4;
			if (t) switch (t.biff) {
				case 5:
					s = 15;
					break;
				case 12: s = 6;
			}
			return e.l += s, [a, n];
		}
	},
	61: {
		n: "PtgAreaErr3d",
		f: function(e, r, t) {
			var a = (96 & e[e.l++]) >> 5, n = e.read_shift(2), s = 8;
			if (t) switch (t.biff) {
				case 5:
					e.l += 12, s = 6;
					break;
				case 12: s = 12;
			}
			return e.l += s, [a, n];
		}
	},
	255: {}
}, Hs = {
	64: 32,
	96: 32,
	65: 33,
	97: 33,
	66: 34,
	98: 34,
	67: 35,
	99: 35,
	68: 36,
	100: 36,
	69: 37,
	101: 37,
	70: 38,
	102: 38,
	71: 39,
	103: 39,
	72: 40,
	104: 40,
	73: 41,
	105: 41,
	74: 42,
	106: 42,
	75: 43,
	107: 43,
	76: 44,
	108: 44,
	77: 45,
	109: 45,
	78: 46,
	110: 46,
	79: 47,
	111: 47,
	88: 34,
	120: 34,
	89: 57,
	121: 57,
	90: 58,
	122: 58,
	91: 59,
	123: 59,
	92: 60,
	124: 60,
	93: 61,
	125: 61
}, Ws = {
	1: {
		n: "PtgElfLel",
		f: Ls
	},
	2: {
		n: "PtgElfRw",
		f: Ps
	},
	3: {
		n: "PtgElfCol",
		f: Ps
	},
	6: {
		n: "PtgElfRwV",
		f: Ps
	},
	7: {
		n: "PtgElfColV",
		f: Ps
	},
	10: {
		n: "PtgElfRadical",
		f: Ps
	},
	11: {
		n: "PtgElfRadicalS",
		f: Ms
	},
	13: {
		n: "PtgElfColS",
		f: Ms
	},
	15: {
		n: "PtgElfColSV",
		f: Ms
	},
	16: {
		n: "PtgElfRadicalLel",
		f: Ls
	},
	25: {
		n: "PtgList",
		f: function(e) {
			e.l += 2;
			var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(4), n = e.read_shift(2), s = e.read_shift(2);
			return {
				ixti: r,
				coltype: 3 & t,
				rt: Us[t >> 2 & 31],
				idx: a,
				c: n,
				C: s
			};
		}
	},
	29: {
		n: "PtgSxName",
		f: function(e) {
			return e.l += 2, [e.read_shift(4)];
		}
	},
	255: {}
}, zs = {
	0: {
		n: "PtgAttrNoop",
		f: function(e) {
			return e.l += 4, [0, 0];
		}
	},
	1: {
		n: "PtgAttrSemi",
		f: function(e, r, t) {
			var a = 255 & e[e.l + 1] ? 1 : 0;
			return e.l += t && 2 == t.biff ? 3 : 4, [a];
		}
	},
	2: {
		n: "PtgAttrIf",
		f: function(e, r, t) {
			var a = 255 & e[e.l + 1] ? 1 : 0;
			return e.l += 2, [a, e.read_shift(t && 2 == t.biff ? 1 : 2)];
		}
	},
	4: {
		n: "PtgAttrChoose",
		f: function(e, r, t) {
			e.l += 2;
			for (var a = e.read_shift(t && 2 == t.biff ? 1 : 2), n = [], s = 0; s <= a; ++s) n.push(e.read_shift(t && 2 == t.biff ? 1 : 2));
			return n;
		}
	},
	8: {
		n: "PtgAttrGoto",
		f: function(e, r, t) {
			var a = 255 & e[e.l + 1] ? 1 : 0;
			return e.l += 2, [a, e.read_shift(t && 2 == t.biff ? 1 : 2)];
		}
	},
	16: {
		n: "PtgAttrSum",
		f: function(e, r, t) {
			e.l += t && 2 == t.biff ? 3 : 4;
		}
	},
	32: {
		n: "PtgAttrBaxcel",
		f: Rs
	},
	33: {
		n: "PtgAttrBaxcel",
		f: Rs
	},
	64: {
		n: "PtgAttrSpace",
		f: function(e) {
			return e.read_shift(2), Is(e);
		}
	},
	65: {
		n: "PtgAttrSpaceSemi",
		f: function(e) {
			return e.read_shift(2), Is(e);
		}
	},
	128: {
		n: "PtgAttrIfError",
		f: function(e) {
			var r = 255 & e[e.l + 1] ? 1 : 0;
			return e.l += 2, [r, e.read_shift(2)];
		}
	},
	255: {}
};
function Vs(e, r, t, a) {
	if (a.biff < 8) return wt(e, r);
	for (var n = e.l + r, s = [], i = 0; i !== t.length; ++i) switch (t[i][0]) {
		case "PtgArray":
			t[i][1] = Fs(e, 0, a), s.push(t[i][1]);
			break;
		case "PtgMemArea":
			t[i][2] = Ds(e, t[i][1], a), s.push(t[i][2]);
			break;
		case "PtgExp":
			a && 12 == a.biff && (t[i][1][1] = e.read_shift(4), s.push(t[i][1]));
			break;
		case "PtgList":
		case "PtgElfRadicalS":
		case "PtgElfColS":
		case "PtgElfColSV": throw "Unsupported " + t[i][0];
	}
	return 0 !== (r = n - e.l) && s.push(wt(e, r)), s;
}
function Gs(e, r, t) {
	for (var a, n, s = e.l + r, i = []; s != e.l;) r = s - e.l, n = e[e.l], a = Bs[n] || Bs[Hs[n]], 24 !== n && 25 !== n || (a = (24 === n ? Ws : zs)[e[e.l + 1]]), a && a.f ? i.push([a.n, a.f(e, r, t)]) : wt(e, r);
	return i;
}
function $s(e) {
	for (var r = [], t = 0; t < e.length; ++t) {
		for (var a = e[t], n = [], s = 0; s < a.length; ++s) {
			var i = a[s];
			i ? 2 === i[0] ? n.push("\"" + i[1].replace(/"/g, "\"\"") + "\"") : n.push(i[1]) : n.push("");
		}
		r.push(n.join(","));
	}
	return r.join(";");
}
var Xs = {
	PtgAdd: "+",
	PtgConcat: "&",
	PtgDiv: "/",
	PtgEq: "=",
	PtgGe: ">=",
	PtgGt: ">",
	PtgLe: "<=",
	PtgLt: "<",
	PtgMul: "*",
	PtgNe: "<>",
	PtgPower: "^",
	PtgSub: "-"
};
function js(e, r) {
	var t = e.lastIndexOf("!"), a = r.lastIndexOf("!");
	return -1 == t && -1 == a ? e + ":" + r : t > 0 && a > 0 && e.slice(0, t).toLowerCase() == r.slice(0, a).toLowerCase() ? e + ":" + r.slice(a + 1) : (console.error("Cannot hydrate range", e, r), e + ":" + r);
}
function Ks(e, r, t) {
	if (!e) return "SH33TJSERR0";
	if (t.biff > 8 && (!e.XTI || !e.XTI[r])) return e.SheetNames[r];
	if (!e.XTI) return "SH33TJSERR6";
	var a = e.XTI[r];
	if (t.biff < 8) return r > 1e4 && (r -= 65536), r < 0 && (r = -r), 0 == r ? "" : e.XTI[r - 1];
	if (!a) return "SH33TJSERR1";
	var n = "";
	if (t.biff > 8) switch (e[a[0]][0]) {
		case 357: return n = -1 == a[1] ? "#REF" : e.SheetNames[a[1]], a[1] == a[2] ? n : n + ":" + e.SheetNames[a[2]];
		case 358: return null != t.SID ? e.SheetNames[t.SID] : "SH33TJSSAME" + e[a[0]][0];
		default: return "SH33TJSSRC" + e[a[0]][0];
	}
	switch (e[a[0]][0][0]) {
		case 1025: return n = -1 == a[1] ? "#REF" : e.SheetNames[a[1]] || "SH33TJSERR3", a[1] == a[2] ? n : n + ":" + e.SheetNames[a[2]];
		case 14849: return e[a[0]].slice(1).map(function(e) {
			return e.Name;
		}).join(";;");
		default: return e[a[0]][0][3] ? (n = -1 == a[1] ? "#REF" : e[a[0]][0][3][a[1]] || "SH33TJSERR4", a[1] == a[2] ? n : n + ":" + e[a[0]][0][3][a[2]]) : "SH33TJSERR2";
	}
}
function Ys(e, r, t) {
	var a = Ks(e, r, t);
	return "#REF" == a ? a : function(e, r) {
		if (!(e || r && r.biff <= 5 && r.biff >= 2)) throw new Error("empty sheet name");
		return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e.replace(/'/g, "''") + "'" : e;
	}(a, t);
}
function Js(e, r, t, a, n) {
	var s, i, c, o, l = n && n.biff || 8, f = {
		s: {
			c: 0,
			r: 0
		},
		e: {
			c: 0,
			r: 0
		}
	}, h = [], u = 0, d = 0, p = "";
	if (!e[0] || !e[0][0]) return "";
	for (var m = -1, v = "", g = 0, b = e[0].length; g < b; ++g) {
		var T = e[0][g];
		switch (T[0]) {
			case "PtgUminus":
				h.push("-" + h.pop());
				break;
			case "PtgUplus":
				h.push("+" + h.pop());
				break;
			case "PtgPercent":
				h.push(h.pop() + "%");
				break;
			case "PtgAdd":
			case "PtgConcat":
			case "PtgDiv":
			case "PtgEq":
			case "PtgGe":
			case "PtgGt":
			case "PtgLe":
			case "PtgLt":
			case "PtgMul":
			case "PtgNe":
			case "PtgPower":
			case "PtgSub":
				if (s = h.pop(), i = h.pop(), m >= 0) {
					switch (e[0][m][1][0]) {
						case 0:
							v = De(" ", e[0][m][1][1]);
							break;
						case 1:
							v = De("\r", e[0][m][1][1]);
							break;
						default: if (v = "", n.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][m][1][0]);
					}
					i += v, m = -1;
				}
				h.push(i + Xs[T[0]] + s);
				break;
			case "PtgIsect":
				s = h.pop(), i = h.pop(), h.push(i + " " + s);
				break;
			case "PtgUnion":
				s = h.pop(), i = h.pop(), h.push(i + "," + s);
				break;
			case "PtgRange":
				s = h.pop(), i = h.pop(), h.push(js(i, s));
				break;
			case "PtgAttrChoose":
			case "PtgAttrGoto":
			case "PtgAttrIf":
			case "PtgAttrIfError":
			case "PtgAttrBaxcel":
			case "PtgAttrSemi":
			case "PtgMemArea":
			case "PtgTbl":
			case "PtgMemErr":
			case "PtgMemAreaN":
			case "PtgMemNoMemN":
			case "PtgAttrNoop":
			case "PtgSheet":
			case "PtgEndSheet":
			case "PtgMemFunc":
			case "PtgMemNoMem": break;
			case "PtgRef":
				c = yt(T[1][1], f, n), h.push(_t(c, l));
				break;
			case "PtgRefN":
				c = t ? yt(T[1][1], t, n) : T[1][1], h.push(_t(c, l));
				break;
			case "PtgRef3d":
				u = T[1][1], c = yt(T[1][2], f, n), p = Ys(a, u, n), h.push(p + "!" + _t(c, l));
				break;
			case "PtgFunc":
			case "PtgFuncVar":
				var E = T[1][0], w = T[1][1];
				E || (E = 0);
				var A = 0 == (E &= 127) ? [] : h.slice(-E);
				h.length -= E, "User" === w && (w = A.shift()), h.push(w + "(" + A.join(",") + ")");
				break;
			case "PtgBool":
				h.push(T[1] ? "TRUE" : "FALSE");
				break;
			case "PtgInt":
			case "PtgErr":
				h.push(T[1]);
				break;
			case "PtgNum":
				h.push(String(T[1]));
				break;
			case "PtgStr":
				h.push("\"" + T[1].replace(/"/g, "\"\"") + "\"");
				break;
			case "PtgAreaN":
				o = Ct(T[1][1], t ? { s: t } : f, n), h.push(xt(o, n));
				break;
			case "PtgArea":
				o = Ct(T[1][1], f, n), h.push(xt(o, n));
				break;
			case "PtgArea3d":
				u = T[1][1], o = T[1][2], p = Ys(a, u, n), h.push(p + "!" + xt(o, n));
				break;
			case "PtgAttrSum":
				h.push("SUM(" + h.pop() + ")");
				break;
			case "PtgName":
				d = T[1][2];
				var k = (a.names || [])[d - 1] || (a[0] || [])[d], S = k ? k.Name : "SH33TJSNAME" + String(d);
				S && "_xlfn." == S.slice(0, 6) && !n.xlfn && (S = S.slice(6)), h.push(S);
				break;
			case "PtgNameX":
				var y, C = T[1][1];
				if (d = T[1][2], !(n.biff <= 5)) {
					var _ = "";
					if (14849 == ((a[C] || [])[0] || [])[0] || (1025 == ((a[C] || [])[0] || [])[0] ? a[C][d] && a[C][d].itab > 0 && (_ = a.SheetNames[a[C][d].itab - 1] + "!") : _ = a.SheetNames[d - 1] + "!"), a[C] && a[C][d]) _ += a[C][d].Name;
					else if (a[0] && a[0][d]) _ += a[0][d].Name;
					else {
						var x = (Ks(a, C, n) || "").split(";;");
						x[d - 1] ? _ = x[d - 1] : _ += "SH33TJSERRX";
					}
					h.push(_);
					break;
				}
				C < 0 && (C = -C), a[C] && (y = a[C][d]), y || (y = { Name: "SH33TJSERRY" }), h.push(y.Name);
				break;
			case "PtgParen":
				var O = "(", R = ")";
				if (m >= 0) {
					switch (v = "", e[0][m][1][0]) {
						case 2:
							O = De(" ", e[0][m][1][1]) + O;
							break;
						case 3:
							O = De("\r", e[0][m][1][1]) + O;
							break;
						case 4:
							R = De(" ", e[0][m][1][1]) + R;
							break;
						case 5:
							R = De("\r", e[0][m][1][1]) + R;
							break;
						default: if (n.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][m][1][0]);
					}
					m = -1;
				}
				h.push(O + h.pop() + R);
				break;
			case "PtgRefErr":
			case "PtgRefErr3d":
			case "PtgAreaErr":
			case "PtgAreaErr3d":
				h.push("#REF!");
				break;
			case "PtgExp":
				c = {
					c: T[1][1],
					r: T[1][0]
				};
				var I = {
					c: t.c,
					r: t.r
				};
				if (a.sharedf[Ft(c)]) {
					var N = a.sharedf[Ft(c)];
					h.push(Js(N, 0, I, a, n));
				} else {
					var D = !1;
					for (s = 0; s != a.arrayf.length; ++s) if (i = a.arrayf[s], !(c.c < i[0].s.c || c.c > i[0].e.c || c.r < i[0].s.r || c.r > i[0].e.r)) {
						h.push(Js(i[1], 0, I, a, n)), D = !0;
						break;
					}
					D || h.push(T[1]);
				}
				break;
			case "PtgArray":
				h.push("{" + $s(T[1]) + "}");
				break;
			case "PtgAttrSpace":
			case "PtgAttrSpaceSemi":
				m = g;
				break;
			case "PtgMissArg":
				h.push("");
				break;
			case "PtgList":
				h.push("Table" + T[1].idx + "[#" + T[1].rt + "]");
				break;
			case "PtgElfCol":
			case "PtgElfColS":
			case "PtgElfColSV":
			case "PtgElfColV":
			case "PtgElfLel":
			case "PtgElfRadical":
			case "PtgElfRadicalLel":
			case "PtgElfRadicalS":
			case "PtgElfRw":
			case "PtgElfRwV": throw new Error("Unsupported ELFs");
			default: throw new Error("Unrecognized Formula Token: " + String(T));
		}
		if (3 != n.biff && m >= 0 && -1 == [
			"PtgAttrSpace",
			"PtgAttrSpaceSemi",
			"PtgAttrGoto"
		].indexOf(e[0][g][0])) {
			var F = !0;
			switch ((T = e[0][m])[1][0]) {
				case 4: F = !1;
				case 0:
					v = De(" ", T[1][1]);
					break;
				case 5: F = !1;
				case 1:
					v = De("\r", T[1][1]);
					break;
				default: if (v = "", n.WTF) throw new Error("Unexpected PtgAttrSpaceType " + T[1][0]);
			}
			h.push((F ? v : "") + h.pop() + (F ? "" : v)), m = -1;
		}
	}
	if (h.length > 1 && n.WTF) throw new Error("bad formula stack");
	return "TRUE" == h[0] || "FALSE" != h[0] && h[0];
}
function Zs(e, r, t) {
	var a, n = e.l + r, s = 2 == t.biff ? 1 : 2, i = e.read_shift(s);
	if (65535 == i) return [[], wt(e, r - 2)];
	var c = Gs(e, i, t);
	return r !== i + s && (a = Vs(e, r - i - s, c, t)), e.l = n, [c, a];
}
function qs(e, r, t) {
	var a, n = e.l + r, s = e.read_shift(2), i = Gs(e, s, t);
	return 65535 == s ? [[], wt(e, r - 2)] : (r !== s + 2 && (a = Vs(e, n - s - 2, i, t)), [i, a]);
}
function Qs(e, r, t) {
	var a = e.l + r, n = Ya(e, 6, t), s = function(e) {
		var r;
		if (65535 !== lt(e, e.l + 6)) return [ra(e), "n"];
		switch (e[e.l]) {
			case 0: return e.l += 8, ["String", "s"];
			case 1: return r = 1 === e[e.l + 2], e.l += 8, [r, "b"];
			case 2: return r = e[e.l + 2], e.l += 8, [r, "e"];
			case 3: return e.l += 8, ["", "s"];
		}
		return [];
	}(e), i = e.read_shift(1);
	2 != t.biff && (e.read_shift(1), t.biff >= 5 && e.read_shift(4));
	var c = function(e, r, t) {
		var a, n = e.l + r, s = 2 == t.biff ? 1 : 2, i = e.read_shift(s);
		if (65535 == i) return [[], wt(e, r - 2)];
		var c = Gs(e, i, t);
		return r !== i + s && (a = Vs(e, r - i - s, c, t)), e.l = n, [c, a];
	}(e, a - e.l, t);
	return {
		cell: n,
		val: s[0],
		formula: c,
		shared: i >> 3 & 1,
		tt: s[1]
	};
}
function ei(e, r, t) {
	var a = Gs(e, e.read_shift(4), t), n = e.read_shift(4);
	return [a, n > 0 ? Vs(e, n, a, t) : null];
}
var ri = ei, ti = ei, ai = ei, ni = ei, si = {
	0: "BEEP",
	1: "OPEN",
	2: "OPEN.LINKS",
	3: "CLOSE.ALL",
	4: "SAVE",
	5: "SAVE.AS",
	6: "FILE.DELETE",
	7: "PAGE.SETUP",
	8: "PRINT",
	9: "PRINTER.SETUP",
	10: "QUIT",
	11: "NEW.WINDOW",
	12: "ARRANGE.ALL",
	13: "WINDOW.SIZE",
	14: "WINDOW.MOVE",
	15: "FULL",
	16: "CLOSE",
	17: "RUN",
	22: "SET.PRINT.AREA",
	23: "SET.PRINT.TITLES",
	24: "SET.PAGE.BREAK",
	25: "REMOVE.PAGE.BREAK",
	26: "FONT",
	27: "DISPLAY",
	28: "PROTECT.DOCUMENT",
	29: "PRECISION",
	30: "A1.R1C1",
	31: "CALCULATE.NOW",
	32: "CALCULATION",
	34: "DATA.FIND",
	35: "EXTRACT",
	36: "DATA.DELETE",
	37: "SET.DATABASE",
	38: "SET.CRITERIA",
	39: "SORT",
	40: "DATA.SERIES",
	41: "TABLE",
	42: "FORMAT.NUMBER",
	43: "ALIGNMENT",
	44: "STYLE",
	45: "BORDER",
	46: "CELL.PROTECTION",
	47: "COLUMN.WIDTH",
	48: "UNDO",
	49: "CUT",
	50: "COPY",
	51: "PASTE",
	52: "CLEAR",
	53: "PASTE.SPECIAL",
	54: "EDIT.DELETE",
	55: "INSERT",
	56: "FILL.RIGHT",
	57: "FILL.DOWN",
	61: "DEFINE.NAME",
	62: "CREATE.NAMES",
	63: "FORMULA.GOTO",
	64: "FORMULA.FIND",
	65: "SELECT.LAST.CELL",
	66: "SHOW.ACTIVE.CELL",
	67: "GALLERY.AREA",
	68: "GALLERY.BAR",
	69: "GALLERY.COLUMN",
	70: "GALLERY.LINE",
	71: "GALLERY.PIE",
	72: "GALLERY.SCATTER",
	73: "COMBINATION",
	74: "PREFERRED",
	75: "ADD.OVERLAY",
	76: "GRIDLINES",
	77: "SET.PREFERRED",
	78: "AXES",
	79: "LEGEND",
	80: "ATTACH.TEXT",
	81: "ADD.ARROW",
	82: "SELECT.CHART",
	83: "SELECT.PLOT.AREA",
	84: "PATTERNS",
	85: "MAIN.CHART",
	86: "OVERLAY",
	87: "SCALE",
	88: "FORMAT.LEGEND",
	89: "FORMAT.TEXT",
	90: "EDIT.REPEAT",
	91: "PARSE",
	92: "JUSTIFY",
	93: "HIDE",
	94: "UNHIDE",
	95: "WORKSPACE",
	96: "FORMULA",
	97: "FORMULA.FILL",
	98: "FORMULA.ARRAY",
	99: "DATA.FIND.NEXT",
	100: "DATA.FIND.PREV",
	101: "FORMULA.FIND.NEXT",
	102: "FORMULA.FIND.PREV",
	103: "ACTIVATE",
	104: "ACTIVATE.NEXT",
	105: "ACTIVATE.PREV",
	106: "UNLOCKED.NEXT",
	107: "UNLOCKED.PREV",
	108: "COPY.PICTURE",
	109: "SELECT",
	110: "DELETE.NAME",
	111: "DELETE.FORMAT",
	112: "VLINE",
	113: "HLINE",
	114: "VPAGE",
	115: "HPAGE",
	116: "VSCROLL",
	117: "HSCROLL",
	118: "ALERT",
	119: "NEW",
	120: "CANCEL.COPY",
	121: "SHOW.CLIPBOARD",
	122: "MESSAGE",
	124: "PASTE.LINK",
	125: "APP.ACTIVATE",
	126: "DELETE.ARROW",
	127: "ROW.HEIGHT",
	128: "FORMAT.MOVE",
	129: "FORMAT.SIZE",
	130: "FORMULA.REPLACE",
	131: "SEND.KEYS",
	132: "SELECT.SPECIAL",
	133: "APPLY.NAMES",
	134: "REPLACE.FONT",
	135: "FREEZE.PANES",
	136: "SHOW.INFO",
	137: "SPLIT",
	138: "ON.WINDOW",
	139: "ON.DATA",
	140: "DISABLE.INPUT",
	142: "OUTLINE",
	143: "LIST.NAMES",
	144: "FILE.CLOSE",
	145: "SAVE.WORKBOOK",
	146: "DATA.FORM",
	147: "COPY.CHART",
	148: "ON.TIME",
	149: "WAIT",
	150: "FORMAT.FONT",
	151: "FILL.UP",
	152: "FILL.LEFT",
	153: "DELETE.OVERLAY",
	155: "SHORT.MENUS",
	159: "SET.UPDATE.STATUS",
	161: "COLOR.PALETTE",
	162: "DELETE.STYLE",
	163: "WINDOW.RESTORE",
	164: "WINDOW.MAXIMIZE",
	166: "CHANGE.LINK",
	167: "CALCULATE.DOCUMENT",
	168: "ON.KEY",
	169: "APP.RESTORE",
	170: "APP.MOVE",
	171: "APP.SIZE",
	172: "APP.MINIMIZE",
	173: "APP.MAXIMIZE",
	174: "BRING.TO.FRONT",
	175: "SEND.TO.BACK",
	185: "MAIN.CHART.TYPE",
	186: "OVERLAY.CHART.TYPE",
	187: "SELECT.END",
	188: "OPEN.MAIL",
	189: "SEND.MAIL",
	190: "STANDARD.FONT",
	191: "CONSOLIDATE",
	192: "SORT.SPECIAL",
	193: "GALLERY.3D.AREA",
	194: "GALLERY.3D.COLUMN",
	195: "GALLERY.3D.LINE",
	196: "GALLERY.3D.PIE",
	197: "VIEW.3D",
	198: "GOAL.SEEK",
	199: "WORKGROUP",
	200: "FILL.GROUP",
	201: "UPDATE.LINK",
	202: "PROMOTE",
	203: "DEMOTE",
	204: "SHOW.DETAIL",
	206: "UNGROUP",
	207: "OBJECT.PROPERTIES",
	208: "SAVE.NEW.OBJECT",
	209: "SHARE",
	210: "SHARE.NAME",
	211: "DUPLICATE",
	212: "APPLY.STYLE",
	213: "ASSIGN.TO.OBJECT",
	214: "OBJECT.PROTECTION",
	215: "HIDE.OBJECT",
	216: "SET.EXTRACT",
	217: "CREATE.PUBLISHER",
	218: "SUBSCRIBE.TO",
	219: "ATTRIBUTES",
	220: "SHOW.TOOLBAR",
	222: "PRINT.PREVIEW",
	223: "EDIT.COLOR",
	224: "SHOW.LEVELS",
	225: "FORMAT.MAIN",
	226: "FORMAT.OVERLAY",
	227: "ON.RECALC",
	228: "EDIT.SERIES",
	229: "DEFINE.STYLE",
	240: "LINE.PRINT",
	243: "ENTER.DATA",
	249: "GALLERY.RADAR",
	250: "MERGE.STYLES",
	251: "EDITION.OPTIONS",
	252: "PASTE.PICTURE",
	253: "PASTE.PICTURE.LINK",
	254: "SPELLING",
	256: "ZOOM",
	259: "INSERT.OBJECT",
	260: "WINDOW.MINIMIZE",
	265: "SOUND.NOTE",
	266: "SOUND.PLAY",
	267: "FORMAT.SHAPE",
	268: "EXTEND.POLYGON",
	269: "FORMAT.AUTO",
	272: "GALLERY.3D.BAR",
	273: "GALLERY.3D.SURFACE",
	274: "FILL.AUTO",
	276: "CUSTOMIZE.TOOLBAR",
	277: "ADD.TOOL",
	278: "EDIT.OBJECT",
	279: "ON.DOUBLECLICK",
	280: "ON.ENTRY",
	281: "WORKBOOK.ADD",
	282: "WORKBOOK.MOVE",
	283: "WORKBOOK.COPY",
	284: "WORKBOOK.OPTIONS",
	285: "SAVE.WORKSPACE",
	288: "CHART.WIZARD",
	289: "DELETE.TOOL",
	290: "MOVE.TOOL",
	291: "WORKBOOK.SELECT",
	292: "WORKBOOK.ACTIVATE",
	293: "ASSIGN.TO.TOOL",
	295: "COPY.TOOL",
	296: "RESET.TOOL",
	297: "CONSTRAIN.NUMERIC",
	298: "PASTE.TOOL",
	302: "WORKBOOK.NEW",
	305: "SCENARIO.CELLS",
	306: "SCENARIO.DELETE",
	307: "SCENARIO.ADD",
	308: "SCENARIO.EDIT",
	309: "SCENARIO.SHOW",
	310: "SCENARIO.SHOW.NEXT",
	311: "SCENARIO.SUMMARY",
	312: "PIVOT.TABLE.WIZARD",
	313: "PIVOT.FIELD.PROPERTIES",
	314: "PIVOT.FIELD",
	315: "PIVOT.ITEM",
	316: "PIVOT.ADD.FIELDS",
	318: "OPTIONS.CALCULATION",
	319: "OPTIONS.EDIT",
	320: "OPTIONS.VIEW",
	321: "ADDIN.MANAGER",
	322: "MENU.EDITOR",
	323: "ATTACH.TOOLBARS",
	324: "VBAActivate",
	325: "OPTIONS.CHART",
	328: "VBA.INSERT.FILE",
	330: "VBA.PROCEDURE.DEFINITION",
	336: "ROUTING.SLIP",
	338: "ROUTE.DOCUMENT",
	339: "MAIL.LOGON",
	342: "INSERT.PICTURE",
	343: "EDIT.TOOL",
	344: "GALLERY.DOUGHNUT",
	350: "CHART.TREND",
	352: "PIVOT.ITEM.PROPERTIES",
	354: "WORKBOOK.INSERT",
	355: "OPTIONS.TRANSITION",
	356: "OPTIONS.GENERAL",
	370: "FILTER.ADVANCED",
	373: "MAIL.ADD.MAILER",
	374: "MAIL.DELETE.MAILER",
	375: "MAIL.REPLY",
	376: "MAIL.REPLY.ALL",
	377: "MAIL.FORWARD",
	378: "MAIL.NEXT.LETTER",
	379: "DATA.LABEL",
	380: "INSERT.TITLE",
	381: "FONT.PROPERTIES",
	382: "MACRO.OPTIONS",
	383: "WORKBOOK.HIDE",
	384: "WORKBOOK.UNHIDE",
	385: "WORKBOOK.DELETE",
	386: "WORKBOOK.NAME",
	388: "GALLERY.CUSTOM",
	390: "ADD.CHART.AUTOFORMAT",
	391: "DELETE.CHART.AUTOFORMAT",
	392: "CHART.ADD.DATA",
	393: "AUTO.OUTLINE",
	394: "TAB.ORDER",
	395: "SHOW.DIALOG",
	396: "SELECT.ALL",
	397: "UNGROUP.SHEETS",
	398: "SUBTOTAL.CREATE",
	399: "SUBTOTAL.REMOVE",
	400: "RENAME.OBJECT",
	412: "WORKBOOK.SCROLL",
	413: "WORKBOOK.NEXT",
	414: "WORKBOOK.PREV",
	415: "WORKBOOK.TAB.SPLIT",
	416: "FULL.SCREEN",
	417: "WORKBOOK.PROTECT",
	420: "SCROLLBAR.PROPERTIES",
	421: "PIVOT.SHOW.PAGES",
	422: "TEXT.TO.COLUMNS",
	423: "FORMAT.CHARTTYPE",
	424: "LINK.FORMAT",
	425: "TRACER.DISPLAY",
	430: "TRACER.NAVIGATE",
	431: "TRACER.CLEAR",
	432: "TRACER.ERROR",
	433: "PIVOT.FIELD.GROUP",
	434: "PIVOT.FIELD.UNGROUP",
	435: "CHECKBOX.PROPERTIES",
	436: "LABEL.PROPERTIES",
	437: "LISTBOX.PROPERTIES",
	438: "EDITBOX.PROPERTIES",
	439: "PIVOT.REFRESH",
	440: "LINK.COMBO",
	441: "OPEN.TEXT",
	442: "HIDE.DIALOG",
	443: "SET.DIALOG.FOCUS",
	444: "ENABLE.OBJECT",
	445: "PUSHBUTTON.PROPERTIES",
	446: "SET.DIALOG.DEFAULT",
	447: "FILTER",
	448: "FILTER.SHOW.ALL",
	449: "CLEAR.OUTLINE",
	450: "FUNCTION.WIZARD",
	451: "ADD.LIST.ITEM",
	452: "SET.LIST.ITEM",
	453: "REMOVE.LIST.ITEM",
	454: "SELECT.LIST.ITEM",
	455: "SET.CONTROL.VALUE",
	456: "SAVE.COPY.AS",
	458: "OPTIONS.LISTS.ADD",
	459: "OPTIONS.LISTS.DELETE",
	460: "SERIES.AXES",
	461: "SERIES.X",
	462: "SERIES.Y",
	463: "ERRORBAR.X",
	464: "ERRORBAR.Y",
	465: "FORMAT.CHART",
	466: "SERIES.ORDER",
	467: "MAIL.LOGOFF",
	468: "CLEAR.ROUTING.SLIP",
	469: "APP.ACTIVATE.MICROSOFT",
	470: "MAIL.EDIT.MAILER",
	471: "ON.SHEET",
	472: "STANDARD.WIDTH",
	473: "SCENARIO.MERGE",
	474: "SUMMARY.INFO",
	475: "FIND.FILE",
	476: "ACTIVE.CELL.FONT",
	477: "ENABLE.TIPWIZARD",
	478: "VBA.MAKE.ADDIN",
	480: "INSERTDATATABLE",
	481: "WORKGROUP.OPTIONS",
	482: "MAIL.SEND.MAILER",
	485: "AUTOCORRECT",
	489: "POST.DOCUMENT",
	491: "PICKLIST",
	493: "VIEW.SHOW",
	494: "VIEW.DEFINE",
	495: "VIEW.DELETE",
	509: "SHEET.BACKGROUND",
	510: "INSERT.MAP.OBJECT",
	511: "OPTIONS.MENONO",
	517: "MSOCHECKS",
	518: "NORMAL",
	519: "LAYOUT",
	520: "RM.PRINT.AREA",
	521: "CLEAR.PRINT.AREA",
	522: "ADD.PRINT.AREA",
	523: "MOVE.BRK",
	545: "HIDECURR.NOTE",
	546: "HIDEALL.NOTES",
	547: "DELETE.NOTE",
	548: "TRAVERSE.NOTES",
	549: "ACTIVATE.NOTES",
	620: "PROTECT.REVISIONS",
	621: "UNPROTECT.REVISIONS",
	647: "OPTIONS.ME",
	653: "WEB.PUBLISH",
	667: "NEWWEBQUERY",
	673: "PIVOT.TABLE.CHART",
	753: "OPTIONS.SAVE",
	755: "OPTIONS.SPELL",
	808: "HIDEALL.INKANNOTS"
}, ii = {
	0: "COUNT",
	1: "IF",
	2: "ISNA",
	3: "ISERROR",
	4: "SUM",
	5: "AVERAGE",
	6: "MIN",
	7: "MAX",
	8: "ROW",
	9: "COLUMN",
	10: "NA",
	11: "NPV",
	12: "STDEV",
	13: "DOLLAR",
	14: "FIXED",
	15: "SIN",
	16: "COS",
	17: "TAN",
	18: "ATAN",
	19: "PI",
	20: "SQRT",
	21: "EXP",
	22: "LN",
	23: "LOG10",
	24: "ABS",
	25: "INT",
	26: "SIGN",
	27: "ROUND",
	28: "LOOKUP",
	29: "INDEX",
	30: "REPT",
	31: "MID",
	32: "LEN",
	33: "VALUE",
	34: "TRUE",
	35: "FALSE",
	36: "AND",
	37: "OR",
	38: "NOT",
	39: "MOD",
	40: "DCOUNT",
	41: "DSUM",
	42: "DAVERAGE",
	43: "DMIN",
	44: "DMAX",
	45: "DSTDEV",
	46: "VAR",
	47: "DVAR",
	48: "TEXT",
	49: "LINEST",
	50: "TREND",
	51: "LOGEST",
	52: "GROWTH",
	53: "GOTO",
	54: "HALT",
	55: "RETURN",
	56: "PV",
	57: "FV",
	58: "NPER",
	59: "PMT",
	60: "RATE",
	61: "MIRR",
	62: "IRR",
	63: "RAND",
	64: "MATCH",
	65: "DATE",
	66: "TIME",
	67: "DAY",
	68: "MONTH",
	69: "YEAR",
	70: "WEEKDAY",
	71: "HOUR",
	72: "MINUTE",
	73: "SECOND",
	74: "NOW",
	75: "AREAS",
	76: "ROWS",
	77: "COLUMNS",
	78: "OFFSET",
	79: "ABSREF",
	80: "RELREF",
	81: "ARGUMENT",
	82: "SEARCH",
	83: "TRANSPOSE",
	84: "ERROR",
	85: "STEP",
	86: "TYPE",
	87: "ECHO",
	88: "SET.NAME",
	89: "CALLER",
	90: "DEREF",
	91: "WINDOWS",
	92: "SERIES",
	93: "DOCUMENTS",
	94: "ACTIVE.CELL",
	95: "SELECTION",
	96: "RESULT",
	97: "ATAN2",
	98: "ASIN",
	99: "ACOS",
	100: "CHOOSE",
	101: "HLOOKUP",
	102: "VLOOKUP",
	103: "LINKS",
	104: "INPUT",
	105: "ISREF",
	106: "GET.FORMULA",
	107: "GET.NAME",
	108: "SET.VALUE",
	109: "LOG",
	110: "EXEC",
	111: "CHAR",
	112: "LOWER",
	113: "UPPER",
	114: "PROPER",
	115: "LEFT",
	116: "RIGHT",
	117: "EXACT",
	118: "TRIM",
	119: "REPLACE",
	120: "SUBSTITUTE",
	121: "CODE",
	122: "NAMES",
	123: "DIRECTORY",
	124: "FIND",
	125: "CELL",
	126: "ISERR",
	127: "ISTEXT",
	128: "ISNUMBER",
	129: "ISBLANK",
	130: "T",
	131: "N",
	132: "FOPEN",
	133: "FCLOSE",
	134: "FSIZE",
	135: "FREADLN",
	136: "FREAD",
	137: "FWRITELN",
	138: "FWRITE",
	139: "FPOS",
	140: "DATEVALUE",
	141: "TIMEVALUE",
	142: "SLN",
	143: "SYD",
	144: "DDB",
	145: "GET.DEF",
	146: "REFTEXT",
	147: "TEXTREF",
	148: "INDIRECT",
	149: "REGISTER",
	150: "CALL",
	151: "ADD.BAR",
	152: "ADD.MENU",
	153: "ADD.COMMAND",
	154: "ENABLE.COMMAND",
	155: "CHECK.COMMAND",
	156: "RENAME.COMMAND",
	157: "SHOW.BAR",
	158: "DELETE.MENU",
	159: "DELETE.COMMAND",
	160: "GET.CHART.ITEM",
	161: "DIALOG.BOX",
	162: "CLEAN",
	163: "MDETERM",
	164: "MINVERSE",
	165: "MMULT",
	166: "FILES",
	167: "IPMT",
	168: "PPMT",
	169: "COUNTA",
	170: "CANCEL.KEY",
	171: "FOR",
	172: "WHILE",
	173: "BREAK",
	174: "NEXT",
	175: "INITIATE",
	176: "REQUEST",
	177: "POKE",
	178: "EXECUTE",
	179: "TERMINATE",
	180: "RESTART",
	181: "HELP",
	182: "GET.BAR",
	183: "PRODUCT",
	184: "FACT",
	185: "GET.CELL",
	186: "GET.WORKSPACE",
	187: "GET.WINDOW",
	188: "GET.DOCUMENT",
	189: "DPRODUCT",
	190: "ISNONTEXT",
	191: "GET.NOTE",
	192: "NOTE",
	193: "STDEVP",
	194: "VARP",
	195: "DSTDEVP",
	196: "DVARP",
	197: "TRUNC",
	198: "ISLOGICAL",
	199: "DCOUNTA",
	200: "DELETE.BAR",
	201: "UNREGISTER",
	204: "USDOLLAR",
	205: "FINDB",
	206: "SEARCHB",
	207: "REPLACEB",
	208: "LEFTB",
	209: "RIGHTB",
	210: "MIDB",
	211: "LENB",
	212: "ROUNDUP",
	213: "ROUNDDOWN",
	214: "ASC",
	215: "DBCS",
	216: "RANK",
	219: "ADDRESS",
	220: "DAYS360",
	221: "TODAY",
	222: "VDB",
	223: "ELSE",
	224: "ELSE.IF",
	225: "END.IF",
	226: "FOR.CELL",
	227: "MEDIAN",
	228: "SUMPRODUCT",
	229: "SINH",
	230: "COSH",
	231: "TANH",
	232: "ASINH",
	233: "ACOSH",
	234: "ATANH",
	235: "DGET",
	236: "CREATE.OBJECT",
	237: "VOLATILE",
	238: "LAST.ERROR",
	239: "CUSTOM.UNDO",
	240: "CUSTOM.REPEAT",
	241: "FORMULA.CONVERT",
	242: "GET.LINK.INFO",
	243: "TEXT.BOX",
	244: "INFO",
	245: "GROUP",
	246: "GET.OBJECT",
	247: "DB",
	248: "PAUSE",
	251: "RESUME",
	252: "FREQUENCY",
	253: "ADD.TOOLBAR",
	254: "DELETE.TOOLBAR",
	255: "User",
	256: "RESET.TOOLBAR",
	257: "EVALUATE",
	258: "GET.TOOLBAR",
	259: "GET.TOOL",
	260: "SPELLING.CHECK",
	261: "ERROR.TYPE",
	262: "APP.TITLE",
	263: "WINDOW.TITLE",
	264: "SAVE.TOOLBAR",
	265: "ENABLE.TOOL",
	266: "PRESS.TOOL",
	267: "REGISTER.ID",
	268: "GET.WORKBOOK",
	269: "AVEDEV",
	270: "BETADIST",
	271: "GAMMALN",
	272: "BETAINV",
	273: "BINOMDIST",
	274: "CHIDIST",
	275: "CHIINV",
	276: "COMBIN",
	277: "CONFIDENCE",
	278: "CRITBINOM",
	279: "EVEN",
	280: "EXPONDIST",
	281: "FDIST",
	282: "FINV",
	283: "FISHER",
	284: "FISHERINV",
	285: "FLOOR",
	286: "GAMMADIST",
	287: "GAMMAINV",
	288: "CEILING",
	289: "HYPGEOMDIST",
	290: "LOGNORMDIST",
	291: "LOGINV",
	292: "NEGBINOMDIST",
	293: "NORMDIST",
	294: "NORMSDIST",
	295: "NORMINV",
	296: "NORMSINV",
	297: "STANDARDIZE",
	298: "ODD",
	299: "PERMUT",
	300: "POISSON",
	301: "TDIST",
	302: "WEIBULL",
	303: "SUMXMY2",
	304: "SUMX2MY2",
	305: "SUMX2PY2",
	306: "CHITEST",
	307: "CORREL",
	308: "COVAR",
	309: "FORECAST",
	310: "FTEST",
	311: "INTERCEPT",
	312: "PEARSON",
	313: "RSQ",
	314: "STEYX",
	315: "SLOPE",
	316: "TTEST",
	317: "PROB",
	318: "DEVSQ",
	319: "GEOMEAN",
	320: "HARMEAN",
	321: "SUMSQ",
	322: "KURT",
	323: "SKEW",
	324: "ZTEST",
	325: "LARGE",
	326: "SMALL",
	327: "QUARTILE",
	328: "PERCENTILE",
	329: "PERCENTRANK",
	330: "MODE",
	331: "TRIMMEAN",
	332: "TINV",
	334: "MOVIE.COMMAND",
	335: "GET.MOVIE",
	336: "CONCATENATE",
	337: "POWER",
	338: "PIVOT.ADD.DATA",
	339: "GET.PIVOT.TABLE",
	340: "GET.PIVOT.FIELD",
	341: "GET.PIVOT.ITEM",
	342: "RADIANS",
	343: "DEGREES",
	344: "SUBTOTAL",
	345: "SUMIF",
	346: "COUNTIF",
	347: "COUNTBLANK",
	348: "SCENARIO.GET",
	349: "OPTIONS.LISTS.GET",
	350: "ISPMT",
	351: "DATEDIF",
	352: "DATESTRING",
	353: "NUMBERSTRING",
	354: "ROMAN",
	355: "OPEN.DIALOG",
	356: "SAVE.DIALOG",
	357: "VIEW.GET",
	358: "GETPIVOTDATA",
	359: "HYPERLINK",
	360: "PHONETIC",
	361: "AVERAGEA",
	362: "MAXA",
	363: "MINA",
	364: "STDEVPA",
	365: "VARPA",
	366: "STDEVA",
	367: "VARA",
	368: "BAHTTEXT",
	369: "THAIDAYOFWEEK",
	370: "THAIDIGIT",
	371: "THAIMONTHOFYEAR",
	372: "THAINUMSOUND",
	373: "THAINUMSTRING",
	374: "THAISTRINGLENGTH",
	375: "ISTHAIDIGIT",
	376: "ROUNDBAHTDOWN",
	377: "ROUNDBAHTUP",
	378: "THAIYEAR",
	379: "RTD",
	380: "CUBEVALUE",
	381: "CUBEMEMBER",
	382: "CUBEMEMBERPROPERTY",
	383: "CUBERANKEDMEMBER",
	384: "HEX2BIN",
	385: "HEX2DEC",
	386: "HEX2OCT",
	387: "DEC2BIN",
	388: "DEC2HEX",
	389: "DEC2OCT",
	390: "OCT2BIN",
	391: "OCT2HEX",
	392: "OCT2DEC",
	393: "BIN2DEC",
	394: "BIN2OCT",
	395: "BIN2HEX",
	396: "IMSUB",
	397: "IMDIV",
	398: "IMPOWER",
	399: "IMABS",
	400: "IMSQRT",
	401: "IMLN",
	402: "IMLOG2",
	403: "IMLOG10",
	404: "IMSIN",
	405: "IMCOS",
	406: "IMEXP",
	407: "IMARGUMENT",
	408: "IMCONJUGATE",
	409: "IMAGINARY",
	410: "IMREAL",
	411: "COMPLEX",
	412: "IMSUM",
	413: "IMPRODUCT",
	414: "SERIESSUM",
	415: "FACTDOUBLE",
	416: "SQRTPI",
	417: "QUOTIENT",
	418: "DELTA",
	419: "GESTEP",
	420: "ISEVEN",
	421: "ISODD",
	422: "MROUND",
	423: "ERF",
	424: "ERFC",
	425: "BESSELJ",
	426: "BESSELK",
	427: "BESSELY",
	428: "BESSELI",
	429: "XIRR",
	430: "XNPV",
	431: "PRICEMAT",
	432: "YIELDMAT",
	433: "INTRATE",
	434: "RECEIVED",
	435: "DISC",
	436: "PRICEDISC",
	437: "YIELDDISC",
	438: "TBILLEQ",
	439: "TBILLPRICE",
	440: "TBILLYIELD",
	441: "PRICE",
	442: "YIELD",
	443: "DOLLARDE",
	444: "DOLLARFR",
	445: "NOMINAL",
	446: "EFFECT",
	447: "CUMPRINC",
	448: "CUMIPMT",
	449: "EDATE",
	450: "EOMONTH",
	451: "YEARFRAC",
	452: "COUPDAYBS",
	453: "COUPDAYS",
	454: "COUPDAYSNC",
	455: "COUPNCD",
	456: "COUPNUM",
	457: "COUPPCD",
	458: "DURATION",
	459: "MDURATION",
	460: "ODDLPRICE",
	461: "ODDLYIELD",
	462: "ODDFPRICE",
	463: "ODDFYIELD",
	464: "RANDBETWEEN",
	465: "WEEKNUM",
	466: "AMORDEGRC",
	467: "AMORLINC",
	468: "CONVERT",
	724: "SHEETJS",
	469: "ACCRINT",
	470: "ACCRINTM",
	471: "WORKDAY",
	472: "NETWORKDAYS",
	473: "GCD",
	474: "MULTINOMIAL",
	475: "LCM",
	476: "FVSCHEDULE",
	477: "CUBEKPIMEMBER",
	478: "CUBESET",
	479: "CUBESETCOUNT",
	480: "IFERROR",
	481: "COUNTIFS",
	482: "SUMIFS",
	483: "AVERAGEIF",
	484: "AVERAGEIFS"
}, ci = {
	2: 1,
	3: 1,
	10: 0,
	15: 1,
	16: 1,
	17: 1,
	18: 1,
	19: 0,
	20: 1,
	21: 1,
	22: 1,
	23: 1,
	24: 1,
	25: 1,
	26: 1,
	27: 2,
	30: 2,
	31: 3,
	32: 1,
	33: 1,
	34: 0,
	35: 0,
	38: 1,
	39: 2,
	40: 3,
	41: 3,
	42: 3,
	43: 3,
	44: 3,
	45: 3,
	47: 3,
	48: 2,
	53: 1,
	61: 3,
	63: 0,
	65: 3,
	66: 3,
	67: 1,
	68: 1,
	69: 1,
	70: 1,
	71: 1,
	72: 1,
	73: 1,
	74: 0,
	75: 1,
	76: 1,
	77: 1,
	79: 2,
	80: 2,
	83: 1,
	85: 0,
	86: 1,
	89: 0,
	90: 1,
	94: 0,
	95: 0,
	97: 2,
	98: 1,
	99: 1,
	101: 3,
	102: 3,
	105: 1,
	106: 1,
	108: 2,
	111: 1,
	112: 1,
	113: 1,
	114: 1,
	117: 2,
	118: 1,
	119: 4,
	121: 1,
	126: 1,
	127: 1,
	128: 1,
	129: 1,
	130: 1,
	131: 1,
	133: 1,
	134: 1,
	135: 1,
	136: 2,
	137: 2,
	138: 2,
	140: 1,
	141: 1,
	142: 3,
	143: 4,
	144: 4,
	161: 1,
	162: 1,
	163: 1,
	164: 1,
	165: 2,
	172: 1,
	175: 2,
	176: 2,
	177: 3,
	178: 2,
	179: 1,
	184: 1,
	186: 1,
	189: 3,
	190: 1,
	195: 3,
	196: 3,
	197: 1,
	198: 1,
	199: 3,
	201: 1,
	207: 4,
	210: 3,
	211: 1,
	212: 2,
	213: 2,
	214: 1,
	215: 1,
	225: 0,
	229: 1,
	230: 1,
	231: 1,
	232: 1,
	233: 1,
	234: 1,
	235: 3,
	244: 1,
	247: 4,
	252: 2,
	257: 1,
	261: 1,
	271: 1,
	273: 4,
	274: 2,
	275: 2,
	276: 2,
	277: 3,
	278: 3,
	279: 1,
	280: 3,
	281: 3,
	282: 3,
	283: 1,
	284: 1,
	285: 2,
	286: 4,
	287: 3,
	288: 2,
	289: 4,
	290: 3,
	291: 3,
	292: 3,
	293: 4,
	294: 1,
	295: 3,
	296: 1,
	297: 3,
	298: 1,
	299: 2,
	300: 3,
	301: 3,
	302: 4,
	303: 2,
	304: 2,
	305: 2,
	306: 2,
	307: 2,
	308: 2,
	309: 3,
	310: 2,
	311: 2,
	312: 2,
	313: 2,
	314: 2,
	315: 2,
	316: 4,
	325: 2,
	326: 2,
	327: 2,
	328: 2,
	331: 2,
	332: 2,
	337: 2,
	342: 1,
	343: 1,
	346: 2,
	347: 1,
	350: 4,
	351: 3,
	352: 1,
	353: 2,
	360: 1,
	368: 1,
	369: 1,
	370: 1,
	371: 1,
	372: 1,
	373: 1,
	374: 1,
	375: 1,
	376: 1,
	377: 1,
	378: 1,
	382: 3,
	385: 1,
	392: 1,
	393: 1,
	396: 2,
	397: 2,
	398: 2,
	399: 1,
	400: 1,
	401: 1,
	402: 1,
	403: 1,
	404: 1,
	405: 1,
	406: 1,
	407: 1,
	408: 1,
	409: 1,
	410: 1,
	414: 4,
	415: 1,
	416: 1,
	417: 2,
	420: 1,
	421: 1,
	422: 2,
	424: 1,
	425: 2,
	426: 2,
	427: 2,
	428: 2,
	430: 3,
	438: 3,
	439: 3,
	440: 3,
	443: 2,
	444: 2,
	445: 2,
	446: 2,
	447: 6,
	448: 6,
	449: 2,
	450: 2,
	464: 2,
	468: 3,
	476: 2,
	479: 1,
	480: 2,
	65535: 0
};
function oi(e) {
	return "of:" == e.slice(0, 3) && (e = e.slice(3)), 61 == e.charCodeAt(0) && 61 == (e = e.slice(1)).charCodeAt(0) && (e = e.slice(1)), (e = (e = (e = (e = (e = e.replace(/COM\.MICROSOFT\./g, "")).replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, function(e, r) {
		return r.replace(/\./g, "");
	})).replace(/\$'([^']|'')+'/g, function(e) {
		return e.slice(1);
	})).replace(/\$([^\]\. #$]+)/g, function(e, r) {
		return r.match(/^([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])?(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})?$/) ? e : r;
	})).replace(/\[.(#[A-Z]*[?!])\]/g, "$1")).replace(/[;~]/g, ",").replace(/\|/g, ";");
}
function li(e) {
	var r = (e = (e = e.replace(/\$'([^']|'')+'/g, function(e) {
		return e.slice(1);
	})).replace(/\$([^\]\. #$]+)/g, function(e, r) {
		return r.match(/^([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])?(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})?$/) ? e : r;
	})).split(":");
	return [r[0].split(".")[0], r[0].split(".")[1] + (r.length > 1 ? ":" + (r[1].split(".")[1] || r[1].split(".")[0]) : "")];
}
var fi = {}, hi = {};
function ui(e, r) {
	if (e) {
		var t = [
			.7,
			.7,
			.75,
			.75,
			.3,
			.3
		];
		"xlml" == r && (t = [
			1,
			1,
			1,
			1,
			.5,
			.5
		]), null == e.left && (e.left = t[0]), null == e.right && (e.right = t[1]), null == e.top && (e.top = t[2]), null == e.bottom && (e.bottom = t[3]), null == e.header && (e.header = t[4]), null == e.footer && (e.footer = t[5]);
	}
}
function di(e, r, t, a, n, s, i) {
	try {
		a.cellNF && (e.z = P[r]);
	} catch (ao) {
		if (a.WTF) throw ao;
	}
	if ("z" !== e.t || a.cellStyles) {
		if ("d" === e.t && "string" == typeof e.v && (e.v = Re(e.v)), (!a || !1 !== a.cellText) && "z" !== e.t) try {
			if (null == P[r] && ve(de[r] || "General", r), "e" === e.t) e.w = e.w || ha[e.v];
			else if (0 === r) if ("n" === e.t) (0 | e.v) === e.v ? e.w = e.v.toString(10) : e.w = W(e.v);
			else if ("d" === e.t) {
				var c = Se(e.v, !!i);
				e.w = (0 | c) === c ? c.toString(10) : W(c);
			} else {
				if (void 0 === e.v) return "";
				e.w = z(e.v, hi);
			}
			else "d" === e.t ? e.w = le(r, Se(e.v, !!i), hi) : e.w = le(r, e.v, hi);
		} catch (ao) {
			if (a.WTF) throw ao;
		}
		if (a.cellStyles && null != t) try {
			e.s = s.Fills[t], e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb && (e.s.fgColor.rgb = jn(n.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0), a.WTF && (e.s.fgColor.raw_rgb = n.themeElements.clrScheme[e.s.fgColor.theme].rgb)), e.s.bgColor && e.s.bgColor.theme && (e.s.bgColor.rgb = jn(n.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0), a.WTF && (e.s.bgColor.raw_rgb = n.themeElements.clrScheme[e.s.bgColor.theme].rgb));
		} catch (ao) {
			if (a.WTF && s.Fills) throw ao;
		}
	}
}
var pi = /<(?:\w+:)?mergeCell ref=["'][A-Z0-9:]+['"]\s*[\/]?>/g, mi = /<(?:\w+:)?hyperlink [^<>]*>/gm, vi = /"(\w*:\w*)"/, gi = /<(?:\w+:)?col\b[^<>]*[\/]?>/g, bi = /<(?:\w+:)?autoFilter[^>]*/g, Ti = /<(?:\w+:)?pageMargins[^<>]*\/>/g, Ei = /<(?:\w+:)?sheetPr\b[^<>]*?\/>/;
function wi(e, r, t, a) {
	var n = mr(e);
	t.Sheets[a] || (t.Sheets[a] = {}), n.codeName && (t.Sheets[a].CodeName = Er(Rr(n.codeName)));
}
var Ai = /<(?:\w:)?sheetView(?:[^<>a-z][^<>]*)?\/?>/g, ki = function() {
	var e = /<(?:\w+:)?c[ \/>]/, r = /<\/(?:\w+:)?row>/, t = /r=["']([^"']*)["']/, a = /ref=["']([^"']*)["']/;
	return function(n, s, i, c, o, l, f) {
		for (var h, u, d, p, m, v = 0, g = "", b = [], T = [], E = 0, w = 0, A = 0, k = "", S = 0, y = 0, C = 0, _ = 0, x = Array.isArray(l.CellXf), O = [], R = [], I = null != s["!data"], N = [], D = {}, F = !1, M = !!i.sheetStubs, L = !!((f || {}).WBProps || {}).date1904, U = n.split(r), B = 0, H = U.length; B != H; ++B) {
			var W = (g = U[B].trim()).length;
			if (0 !== W) {
				var z = 0;
				e: for (v = 0; v < W; ++v) switch (g[v]) {
					case ">":
						if ("/" != g[v - 1]) {
							++v;
							break e;
						}
						if (i && i.cellStyles) {
							if (S = null != (u = mr(g.slice(z, v), !0)).r ? parseInt(u.r, 10) : S + 1, y = -1, i.sheetRows && i.sheetRows < S) continue;
							D = {}, F = !1, u.ht && (F = !0, D.hpt = parseFloat(u.ht), D.hpx = as(D.hpt)), u.hidden && yr(u.hidden) && (F = !0, D.hidden = !0), null != u.outlineLevel && (F = !0, D.level = +u.outlineLevel), F && (N[S - 1] = D);
						}
						break;
					case "<": z = v;
				}
				if (z >= v) break;
				if (S = null != (u = mr(g.slice(z, v), !0)).r ? parseInt(u.r, 10) : S + 1, y = -1, !(i.sheetRows && i.sheetRows < S)) {
					i.nodim || (c.s.r > S - 1 && (c.s.r = S - 1), c.e.r < S - 1 && (c.e.r = S - 1)), i && i.cellStyles && (D = {}, F = !1, u.ht && (F = !0, D.hpt = parseFloat(u.ht), D.hpx = as(D.hpt)), u.hidden && yr(u.hidden) && (F = !0, D.hidden = !0), null != u.outlineLevel && (F = !0, D.level = +u.outlineLevel), F && (N[S - 1] = D)), b = g.slice(v).split(e);
					for (var V = 0; V != b.length && "<" == b[V].trim().charAt(0); ++V);
					for (b = b.slice(V), v = 0; v != b.length; ++v) if (0 !== (g = b[v].trim()).length) {
						if (T = g.match(t), E = v, w = 0, A = 0, g = "<c " + ("<" == g.slice(0, 1) ? ">" : "") + g, null != T && 2 === T.length) {
							for (E = 0, k = T[1], w = 0; w != k.length && !((A = k.charCodeAt(w) - 64) < 1 || A > 26); ++w) E = 26 * E + A;
							y = --E;
						} else ++y;
						for (w = 0; w != g.length && 62 !== g.charCodeAt(w); ++w);
						if (++w, (u = mr(g.slice(0, w), !0)).r || (u.r = Ft({
							r: S - 1,
							c: y
						})), k = g.slice(w), h = { t: "" }, null != (T = Ye(k, "v")) && "" !== T[1] && (h.v = Er(T[1])), i.cellFormula) {
							if (null != (T = Ye(k, "f"))) {
								if ("" == T[1]) T[0].indexOf("t=\"shared\"") > -1 && R[(p = mr(T[0])).si] && (h.f = Es(R[p.si][1], R[p.si][2], u.r));
								else if (h.f = Er(Rr(T[1]), !0), i.xlfn || (h.f = ws(h.f)), T[0].indexOf("t=\"array\"") > -1) h.F = (k.match(a) || [])[1], h.F.indexOf(":") > -1 && O.push([Lt(h.F), h.F]);
								else if (T[0].indexOf("t=\"shared\"") > -1) {
									p = mr(T[0]);
									var G = Er(Rr(T[1]));
									i.xlfn || (G = ws(G)), R[parseInt(p.si, 10)] = [
										p,
										G,
										u.r
									];
								}
							} else (T = k.match(/<f[^<>]*\/>/)) && R[(p = mr(T[0])).si] && (h.f = Es(R[p.si][1], R[p.si][2], u.r));
							var $ = Dt(u.r);
							for (w = 0; w < O.length; ++w) $.r >= O[w][0].s.r && $.r <= O[w][0].e.r && $.c >= O[w][0].s.c && $.c <= O[w][0].e.c && (h.F = O[w][1]);
						}
						if (null == u.t && void 0 === h.v) if (h.f || h.F) h.v = 0, h.t = "n";
						else {
							if (!M) continue;
							h.t = "z";
						}
						else h.t = u.t || "n";
						switch (c.s.c > y && (c.s.c = y), c.e.c < y && (c.e.c = y), h.t) {
							case "n":
								if ("" == h.v || null == h.v) {
									if (!M) continue;
									h.t = "z";
								} else h.v = parseFloat(h.v);
								break;
							case "s":
								if (void 0 === h.v) {
									if (!M) continue;
									h.t = "z";
								} else d = fi[parseInt(h.v, 10)], h.v = d.t, h.r = d.r, i.cellHTML && (h.h = d.h);
								break;
							case "str":
								h.t = "s", h.v = null != h.v ? Er(Rr(h.v), !0) : "", i.cellHTML && (h.h = kr(h.v));
								break;
							case "inlineStr":
								T = Ye(k, "is"), h.t = "s", null != T && (d = Nn(T[1])) ? (h.v = d.t, i.cellHTML && (h.h = d.h)) : h.v = "";
								break;
							case "b":
								h.v = yr(h.v);
								break;
							case "d":
								i.cellDates ? h.v = Re(h.v, L) : (h.v = Se(Re(h.v, L), L), h.t = "n");
								break;
							case "e": i && !1 === i.cellText || (h.w = h.v), h.v = ua[h.v];
						}
						if (C = _ = 0, m = null, x && void 0 !== u.s && null != (m = l.CellXf[u.s]) && (null != m.numFmtId && (C = m.numFmtId), i.cellStyles && null != m.fillId && (_ = m.fillId)), di(h, C, _, i, o, l, L), i.cellDates && x && "n" == h.t && ie(P[C]) && (h.v = ye(h.v + (L ? 1462 : 0)), h.t = "number" == typeof h.v ? "n" : "d"), u.cm && i.xlmeta) {
							var X = (i.xlmeta.Cell || [])[+u.cm - 1];
							X && "XLDAPR" == X.type && (h.D = !0);
						}
						var j;
						i.nodim && (j = Dt(u.r), c.s.r > j.r && (c.s.r = j.r), c.e.r < j.r && (c.e.r = j.r)), I ? (j = Dt(u.r), s["!data"][j.r] || (s["!data"][j.r] = []), s["!data"][j.r][j.c] = h) : s[u.r] = h;
					}
				}
			}
		}
		N.length > 0 && (s["!rows"] = N);
	};
}(), Si = ea;
function yi(e) {
	return [
		jt(e),
		ra(e),
		"n"
	];
}
var Ci = ea, _i = [
	"left",
	"right",
	"top",
	"bottom",
	"header",
	"footer"
];
var xi = [
	[
		"allowRefreshQuery",
		!1,
		"bool"
	],
	[
		"autoCompressPictures",
		!0,
		"bool"
	],
	[
		"backupFile",
		!1,
		"bool"
	],
	[
		"checkCompatibility",
		!1,
		"bool"
	],
	["CodeName", ""],
	[
		"date1904",
		!1,
		"bool"
	],
	[
		"defaultThemeVersion",
		0,
		"int"
	],
	[
		"filterPrivacy",
		!1,
		"bool"
	],
	[
		"hidePivotFieldList",
		!1,
		"bool"
	],
	[
		"promptedSolutions",
		!1,
		"bool"
	],
	[
		"publishItems",
		!1,
		"bool"
	],
	[
		"refreshAllConnections",
		!1,
		"bool"
	],
	[
		"saveExternalLinkValues",
		!0,
		"bool"
	],
	[
		"showBorderUnselectedTables",
		!0,
		"bool"
	],
	[
		"showInkAnnotation",
		!0,
		"bool"
	],
	["showObjects", "all"],
	[
		"showPivotChartFilter",
		!1,
		"bool"
	],
	["updateLinks", "userSet"]
], Oi = [
	[
		"activeTab",
		0,
		"int"
	],
	[
		"autoFilterDateGrouping",
		!0,
		"bool"
	],
	[
		"firstSheet",
		0,
		"int"
	],
	[
		"minimized",
		!1,
		"bool"
	],
	[
		"showHorizontalScroll",
		!0,
		"bool"
	],
	[
		"showSheetTabs",
		!0,
		"bool"
	],
	[
		"showVerticalScroll",
		!0,
		"bool"
	],
	[
		"tabRatio",
		600,
		"int"
	],
	["visibility", "visible"]
], Ri = [], Ii = [
	["calcCompleted", "true"],
	["calcMode", "auto"],
	["calcOnSave", "true"],
	["concurrentCalc", "true"],
	["fullCalcOnLoad", "false"],
	["fullPrecision", "true"],
	["iterate", "false"],
	["iterateCount", "100"],
	["iterateDelta", "0.001"],
	["refMode", "A1"]
];
function Ni(e, r) {
	for (var t = 0; t != e.length; ++t) for (var a = e[t], n = 0; n != r.length; ++n) {
		var s = r[n];
		if (null == a[s[0]]) a[s[0]] = s[1];
		else switch (s[2]) {
			case "bool":
				"string" == typeof a[s[0]] && (a[s[0]] = yr(a[s[0]]));
				break;
			case "int": "string" == typeof a[s[0]] && (a[s[0]] = parseInt(a[s[0]], 10));
		}
	}
}
function Di(e, r) {
	for (var t = 0; t != r.length; ++t) {
		var a = r[t];
		if (null == e[a[0]]) e[a[0]] = a[1];
		else switch (a[2]) {
			case "bool":
				"string" == typeof e[a[0]] && (e[a[0]] = yr(e[a[0]]));
				break;
			case "int": "string" == typeof e[a[0]] && (e[a[0]] = parseInt(e[a[0]], 10));
		}
	}
}
function Fi(e) {
	Di(e.WBProps, xi), Di(e.CalcPr, Ii), Ni(e.WBView, Oi), Ni(e.Sheets, Ri), hi.date1904 = yr(e.WBProps.date1904);
}
var Pi = ":][*?/\\".split(""), Mi = /<\w+:workbook/;
function Li(e, r) {
	var t = {};
	return e.read_shift(4), t.ArchID = e.read_shift(4), e.l += r - 8, t;
}
function Ui(e, r, t, a, n, s, i, c) {
	return ".bin" === r.slice(-4) ? function(e, r, t, a, n, s, i) {
		if (!e) return e;
		var c = r || {};
		a || (a = { "!id": {} });
		var o, l = {};
		c.dense && (l["!data"] = []);
		var f, h, u, d, p, m, v, g, b, T = {
			s: {
				r: 2e6,
				c: 2e6
			},
			e: {
				r: 0,
				c: 0
			}
		}, E = [], w = !1, A = !1, k = [];
		c.biff = 12, c["!row"] = 0;
		var S = 0, y = !1, C = [], _ = {}, x = c.supbooks || n.supbooks || [[]];
		if (x.sharedf = _, x.arrayf = C, x.SheetNames = n.SheetNames || n.Sheets.map(function(e) {
			return e.name;
		}), !c.supbooks && (c.supbooks = x, n.Names)) for (var O = 0; O < n.Names.length; ++O) x[0][O + 1] = n.Names[O];
		var R, I, N = [], D = [], F = !1;
		tc[16] = {
			n: "BrtShortReal",
			f: yi
		};
		var M = 1462 * +!!((n || {}).WBProps || {}).date1904;
		if (kt(e, function(e, r, O) {
			if (!A) switch (O) {
				case 148:
					o = e;
					break;
				case 0:
					f = e, c.sheetRows && c.sheetRows <= f.r && (A = !0), g = Rt(d = f.r), c["!row"] = f.r, (e.hidden || e.hpt || null != e.level) && (e.hpt && (e.hpx = as(e.hpt)), D[e.r] = e);
					break;
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
				case 18:
				case 62:
					switch (h = { t: e[2] }, e[2]) {
						case "n":
							h.v = e[1];
							break;
						case "s":
							v = fi[e[1]], h.v = v.t, h.r = v.r;
							break;
						case "b":
							h.v = !!e[1];
							break;
						case "e":
							h.v = e[1], !1 !== c.cellText && (h.w = ha[h.v]);
							break;
						case "str":
							h.t = "s", h.v = e[1];
							break;
						case "is": h.t = "s", h.v = e[1].t;
					}
					if ((u = i.CellXf[e[0].iStyleRef]) && di(h, u.numFmtId, null, c, s, i, M > 0), p = -1 == e[0].c ? p + 1 : e[0].c, c.dense ? (l["!data"][d] || (l["!data"][d] = []), l["!data"][d][p] = h) : l[Nt(p) + g] = h, c.cellFormula) {
						for (y = !1, S = 0; S < C.length; ++S) {
							var L = C[S];
							f.r >= L[0].s.r && f.r <= L[0].e.r && p >= L[0].s.c && p <= L[0].e.c && (h.F = Mt(L[0]), y = !0);
						}
						!y && e.length > 3 && (h.f = e[3]);
					}
					if (T.s.r > f.r && (T.s.r = f.r), T.s.c > p && (T.s.c = p), T.e.r < f.r && (T.e.r = f.r), T.e.c < p && (T.e.c = p), c.cellDates && u && "n" == h.t && ie(P[u.numFmtId])) {
						var U = B(h.v + M);
						U && (h.t = "d", h.v = new Date(Date.UTC(U.y, U.m - 1, U.d, U.H, U.M, U.S, U.u)));
					}
					R && ("XLDAPR" == R.type && (h.D = !0), R = void 0), I && (I = void 0);
					break;
				case 1:
				case 12:
					if (!c.sheetStubs || w) break;
					h = {
						t: "z",
						v: void 0
					}, p = -1 == e[0].c ? p + 1 : e[0].c, c.dense ? (l["!data"][d] || (l["!data"][d] = []), l["!data"][d][p] = h) : l[Nt(p) + g] = h, T.s.r > f.r && (T.s.r = f.r), T.s.c > p && (T.s.c = p), T.e.r < f.r && (T.e.r = f.r), T.e.c < p && (T.e.c = p), R && ("XLDAPR" == R.type && (h.D = !0), R = void 0), I && (I = void 0);
					break;
				case 176:
					k.push(e);
					break;
				case 49:
					R = ((c.xlmeta || {}).Cell || [])[e - 1];
					break;
				case 494:
					var H = a["!id"][e.relId];
					for (H ? (e.Target = H.Target, e.loc && (e.Target += "#" + e.loc), e.Rel = H) : "" == e.relId && (e.Target = "#" + e.loc), d = e.rfx.s.r; d <= e.rfx.e.r; ++d) for (p = e.rfx.s.c; p <= e.rfx.e.c; ++p) c.dense ? (l["!data"][d] || (l["!data"][d] = []), l["!data"][d][p] || (l["!data"][d][p] = {
						t: "z",
						v: void 0
					}), l["!data"][d][p].l = e) : (m = Nt(p) + Rt(d), l[m] || (l[m] = {
						t: "z",
						v: void 0
					}), l[m].l = e);
					break;
				case 426:
					if (!c.cellFormula) break;
					C.push(e), (b = c.dense ? l["!data"][d][p] : l[Nt(p) + g]).f = Js(e[1], 0, {
						r: f.r,
						c: p
					}, x, c), b.F = Mt(e[0]);
					break;
				case 427:
					if (!c.cellFormula) break;
					_[Ft(e[0].s)] = e[1], (b = c.dense ? l["!data"][d][p] : l[Nt(p) + g]).f = Js(e[1], 0, {
						r: f.r,
						c: p
					}, x, c);
					break;
				case 60:
					if (!c.cellStyles) break;
					for (; e.e >= e.s;) N[e.e--] = {
						width: e.w / 256,
						hidden: !!(1 & e.flags),
						level: e.level
					}, F || (F = !0, Qn(e.w / 256)), es(N[e.e + 1]);
					break;
				case 551:
					e && (l["!legrel"] = e);
					break;
				case 161:
					l["!autofilter"] = { ref: Mt(e) };
					break;
				case 476:
					l["!margins"] = e;
					break;
				case 147:
					n.Sheets[t] || (n.Sheets[t] = {}), e.name && (n.Sheets[t].CodeName = e.name), (e.above || e.left) && (l["!outline"] = {
						above: e.above,
						left: e.left
					});
					break;
				case 137:
					n.Views || (n.Views = [{}]), n.Views[0] || (n.Views[0] = {}), e.RTL && (n.Views[0].RTL = !0);
					break;
				case 485:
				case 64:
				case 1053:
				case 151:
				case 152:
				case 175:
				case 644:
				case 625:
				case 562:
				case 396:
				case 1112:
				case 1146:
				case 471:
				case 1050:
				case 649:
				case 1105:
				case 589:
				case 607:
				case 564:
				case 1055:
				case 168:
				case 174:
				case 1180:
				case 499:
				case 507:
				case 550:
				case 171:
				case 167:
				case 1177:
				case 169:
				case 1181:
				case 552:
				case 661:
				case 639:
				case 478:
				case 537:
				case 477:
				case 536:
				case 1103:
				case 680:
				case 1104:
				case 1024:
				case 663:
				case 535:
				case 678:
				case 504:
				case 1043:
				case 428:
				case 170:
				case 3072:
				case 50:
				case 2070:
				case 1045: break;
				case 35:
					w = !0;
					break;
				case 36:
					w = !1;
					break;
				case 37:
					E.push(O), w = !0;
					break;
				case 38:
					E.pop(), w = !1;
					break;
				default: if (r.T);
				else if (!w || c.WTF) throw new Error("Unexpected record 0x" + O.toString(16));
			}
		}, c), delete c.supbooks, delete c["!row"], !l["!ref"] && (T.s.r < 2e6 || o && (o.e.r > 0 || o.e.c > 0 || o.s.r > 0 || o.s.c > 0)) && (l["!ref"] = Mt(o || T)), c.sheetRows && l["!ref"]) {
			var L = Lt(l["!ref"]);
			c.sheetRows <= +L.e.r && (L.e.r = c.sheetRows - 1, L.e.r > T.e.r && (L.e.r = T.e.r), L.e.r < L.s.r && (L.s.r = L.e.r), L.e.c > T.e.c && (L.e.c = T.e.c), L.e.c < L.s.c && (L.s.c = L.e.c), l["!fullref"] = l["!ref"], l["!ref"] = Mt(L));
		}
		return k.length > 0 && (l["!merges"] = k), N.length > 0 && (l["!cols"] = N), D.length > 0 && (l["!rows"] = D), a["!id"][l["!legrel"]] && (l["!legdrawel"] = a["!id"][l["!legrel"]]), l;
	}(e, a, t, n, s, i, c) : function(e, r, t, a, n, s, i) {
		if (!e) return e;
		a || (a = { "!id": {} });
		var c = {};
		r.dense && (c["!data"] = []);
		var o = {
			s: {
				r: 2e6,
				c: 2e6
			},
			e: {
				r: 0,
				c: 0
			}
		}, l = "", f = "", h = Ye(e, "sheetData");
		h ? (l = e.slice(0, h.index), f = e.slice(h.index + h[0].length)) : l = f = e;
		var u = l.match(Ei);
		u ? wi(u[0], 0, n, t) : (u = Ye(l, "sheetPr")) && function(e, r, t, a, n) {
			wi(e.slice(0, e.indexOf(">")), 0, a, n);
		}(u[0], u[1], 0, n, t);
		var d = (l.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
		if (d > 0) {
			var p = l.slice(d, d + 50).match(vi);
			!p || r && r.nodim || function(e, r) {
				var t = Lt(r);
				t.s.r <= t.e.r && t.s.c <= t.e.c && t.s.r >= 0 && t.s.c >= 0 && (e["!ref"] = Mt(t));
			}(c, p[1]);
		}
		var m = Ye(l, "sheetViews");
		m && m[1] && function(e, r) {
			r.Views || (r.Views = [{}]), (e.match(Ai) || []).forEach(function(e, t) {
				var a = mr(e);
				r.Views[t] || (r.Views[t] = {}), +a.zoomScale && (r.Views[t].zoom = +a.zoomScale), a.rightToLeft && yr(a.rightToLeft) && (r.Views[t].RTL = !0);
			});
		}(m[1], n);
		var v = [];
		if (r.cellStyles) {
			var g = l.match(gi);
			g && function(e, r) {
				for (var t = !1, a = 0; a != r.length; ++a) {
					var n = mr(r[a], !0);
					n.hidden && (n.hidden = yr(n.hidden));
					var s = parseInt(n.min, 10) - 1, i = parseInt(n.max, 10) - 1;
					for (n.outlineLevel && (n.level = +n.outlineLevel || 0), delete n.min, delete n.max, n.width = +n.width, !t && n.width && (t = !0, Qn(n.width)), es(n); s <= i;) e[s++] = Ne(n);
				}
			}(v, g);
		}
		h && ki(h[1], c, r, o, s, i, n);
		var b = f.match(bi);
		b && (c["!autofilter"] = function(e) {
			return { ref: (e.match(/ref="([^"]*)"/) || [])[1] };
		}(b[0]));
		var T = [], E = f.match(pi);
		if (E) for (d = 0; d != E.length; ++d) T[d] = Lt(E[d].slice(E[d].indexOf("=") + 2));
		var w = f.match(mi);
		w && function(e, r, t) {
			for (var a = null != e["!data"], n = 0; n != r.length; ++n) {
				var s = mr(Rr(r[n]), !0);
				if (!s.ref) return;
				var i = ((t || {})["!id"] || [])[s.id];
				i ? (s.Target = i.Target, s.location && (s.Target += "#" + Er(s.location))) : (s.Target = "#" + Er(s.location), i = {
					Target: s.Target,
					TargetMode: "Internal"
				}), s.Rel = i, s.tooltip && (s.Tooltip = s.tooltip, delete s.tooltip);
				for (var c = Lt(s.ref), o = c.s.r; o <= c.e.r; ++o) for (var l = c.s.c; l <= c.e.c; ++l) {
					var f = Nt(l) + Rt(o);
					a ? (e["!data"][o] || (e["!data"][o] = []), e["!data"][o][l] || (e["!data"][o][l] = {
						t: "z",
						v: void 0
					}), e["!data"][o][l].l = s) : (e[f] || (e[f] = {
						t: "z",
						v: void 0
					}), e[f].l = s);
				}
			}
		}(c, w, a);
		var A, k, S, y = f.match(Ti);
		if (y && (c["!margins"] = (A = mr(y[0]), k = {}, [
			"left",
			"right",
			"top",
			"bottom",
			"header",
			"footer"
		].forEach(function(e) {
			A[e] && (k[e] = parseFloat(A[e]));
		}), k)), (S = f.match(/legacyDrawing r:id="(.*?)"/)) && (c["!legrel"] = S[1]), r && r.nodim && (o.s.c = o.s.r = 0), !c["!ref"] && o.e.c >= o.s.c && o.e.r >= o.s.r && (c["!ref"] = Mt(o)), r.sheetRows > 0 && c["!ref"]) {
			var C = Lt(c["!ref"]);
			r.sheetRows <= +C.e.r && (C.e.r = r.sheetRows - 1, C.e.r > o.e.r && (C.e.r = o.e.r), C.e.r < C.s.r && (C.s.r = C.e.r), C.e.c > o.e.c && (C.e.c = o.e.c), C.e.c < C.s.c && (C.s.c = C.e.c), c["!fullref"] = c["!ref"], c["!ref"] = Mt(C));
		}
		return v.length > 0 && (c["!cols"] = v), T.length > 0 && (c["!merges"] = T), a["!id"][c["!legrel"]] && (c["!legdrawel"] = a["!id"][c["!legrel"]]), c;
	}(e, a, t, n, s, i, c);
}
var Bi, Hi = /\b((?:\w+:)?[\w]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g, Wi = /\b((?:\w+:)?[\w]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
function zi(e, r) {
	var t = e.split(/\s+/), a = [];
	if (r || (a[0] = t[0]), 1 === t.length) return a;
	var n, s, i, c = e.match(Hi);
	if (c) for (i = 0; i != c.length; ++i) -1 === (s = (n = c[i].match(Wi))[1].indexOf(":")) ? a[n[1]] = n[2].slice(1, n[2].length - 1) : a["xmlns:" === n[1].slice(0, 6) ? "xmlns" + n[1].slice(6) : n[1].slice(s + 1)] = n[2].slice(1, n[2].length - 1);
	return a;
}
function Vi(e) {
	var r = {};
	if (1 === e.split(/\s+/).length) return r;
	var t, a, n, s = e.match(Hi);
	if (s) for (n = 0; n != s.length; ++n) -1 === (a = (t = s[n].match(Wi))[1].indexOf(":")) ? r[t[1]] = t[2].slice(1, t[2].length - 1) : r["xmlns:" === t[1].slice(0, 6) ? "xmlns" + t[1].slice(6) : t[1].slice(a + 1)] = t[2].slice(1, t[2].length - 1);
	return r;
}
function Gi(e, r, t, a) {
	var n = a;
	switch ((t[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
		case "boolean":
			n = yr(a);
			break;
		case "i2":
		case "int":
			n = parseInt(a, 10);
			break;
		case "r4":
		case "float":
			n = parseFloat(a);
			break;
		case "date":
		case "dateTime.tz":
			n = Re(a);
			break;
		case "i8":
		case "string":
		case "fixed":
		case "uuid":
		case "bin.base64": break;
		default: throw new Error("bad custprop:" + t[0]);
	}
	e[Er(r)] = n;
}
function $i(e, r, t) {
	if (t.cellStyles && r.Interior) {
		var a = r.Interior;
		a.Pattern && (a.patternType = ns[a.Pattern] || a.Pattern);
	}
	e[r.ID] = r;
}
function Xi(e, r, t, a, n, s, i, c, o, l, f) {
	var h = "General", u = a.StyleID, d = {};
	l = l || {};
	var p = [], m = 0;
	for (void 0 === u && c && (u = c.StyleID), void 0 === u && i && (u = i.StyleID); void 0 !== s[u];) {
		var v = s[u];
		if (v.nf && (h = v.nf), v.Interior && p.push(v.Interior), !v.Parent) break;
		u = v.Parent;
	}
	switch (t.Type) {
		case "Boolean":
			a.t = "b", a.v = yr(e);
			break;
		case "String":
			a.t = "s", a.r = Sr(Er(e)), a.v = e.indexOf("<") > -1 ? Er(r || e).replace(/<[^<>]*>/g, "") : a.r;
			break;
		case "DateTime": "Z" != e.slice(-1) && (e += "Z"), a.v = Se(Re(e, f), f), a.v != a.v && (a.v = Er(e)), h && "General" != h || (h = "yyyy-mm-dd");
		case "Number":
			void 0 === a.v && (a.v = +e), a.t || (a.t = "n");
			break;
		case "Error":
			a.t = "e", a.v = ua[e], !1 !== l.cellText && (a.w = e);
			break;
		default: "" == e && "" == r ? a.t = "z" : (a.t = "s", a.v = Sr(r || e));
	}
	if (function(e, r, t, a) {
		if ("z" !== e.t) {
			if (!t || !1 !== t.cellText) try {
				"e" === e.t ? e.w = e.w || ha[e.v] : "General" === r ? "n" === e.t ? (0 | e.v) === e.v ? e.w = e.v.toString(10) : e.w = W(e.v) : e.w = z(e.v) : e.w = function(e, r, t) {
					var a = Bi[e] || Er(e);
					return "General" === a ? z(r) : le(a, r, { date1904: !!t });
				}(r || "General", e.v, a);
			} catch (ao) {
				if (t.WTF) throw ao;
			}
			try {
				var n = Bi[r] || r || "General";
				if (t.cellNF && (e.z = n), t.cellDates && "n" == e.t && ie(n)) {
					var s = B(e.v + (a ? 1462 : 0));
					s && (e.t = "d", e.v = new Date(Date.UTC(s.y, s.m - 1, s.d, s.H, s.M, s.S, s.u)));
				}
			} catch (ao) {
				if (t.WTF) throw ao;
			}
		}
	}(a, h, l, f), !1 !== l.cellFormula) if (a.Formula) {
		var g = Er(a.Formula);
		61 == g.charCodeAt(0) && (g = g.slice(1)), a.f = vs(g, n), delete a.Formula, "RC" == a.ArrayRange ? a.F = vs("RC:RC", n) : a.ArrayRange && (a.F = vs(a.ArrayRange, n), o.push([Lt(a.F), a.F]));
	} else for (m = 0; m < o.length; ++m) n.r >= o[m][0].s.r && n.r <= o[m][0].e.r && n.c >= o[m][0].s.c && n.c <= o[m][0].e.c && (a.F = o[m][1]);
	l.cellStyles && (p.forEach(function(e) {
		!d.patternType && e.patternType && (d.patternType = e.patternType);
	}), a.s = d), void 0 !== a.StyleID && (a.ixfe = a.StyleID);
}
function ji(e) {
	return da.indexOf("_xlnm." + e) > -1 ? "_xlnm." + e : e;
}
function Ki(e) {
	e.t = e.v || "", e.t = e.t.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), e.v = e.w = e.ixfe = void 0;
}
function Yi(e, r) {
	var t = r || {};
	he();
	var a = l(Ur(e));
	"binary" != t.type && "array" != t.type && "base64" != t.type || (a = Rr(a));
	var n, s = a.slice(0, 1024).toLowerCase(), i = !1;
	if ((1023 & (s = s.replace(/".*?"/g, "")).indexOf(">")) > Math.min(1023 & s.indexOf(","), 1023 & s.indexOf(";"))) {
		var c = Ne(t);
		return c.type = "string", Cn.to_workbook(a, c);
	}
	if (-1 == s.indexOf("<?xml") && [
		"html",
		"table",
		"head",
		"meta",
		"script",
		"style",
		"div"
	].forEach(function(e) {
		s.indexOf("<" + e) >= 0 && (i = !0);
	}), i) return function(e, r) {
		var t = qe(e, "table");
		if (!t || 0 == t.length) throw new Error("Invalid HTML: could not find <table>");
		if (1 == t.length) {
			var a = Bt(sc(t[0], r), r);
			return a.bookType = "html", a;
		}
		var n = Kc();
		return t.forEach(function(e, t) {
			Yc(n, sc(e, r), "Sheet" + (t + 1));
		}), n.bookType = "html", n;
	}(a, t);
	Bi = {
		"General Number": "General",
		"General Date": P[22],
		"Long Date": "dddd, mmmm dd, yyyy",
		"Medium Date": P[15],
		"Short Date": P[14],
		"Long Time": P[19],
		"Medium Time": P[18],
		"Short Time": P[20],
		Currency: "\"$\"#,##0.00_);[Red]\\(\"$\"#,##0.00\\)",
		Fixed: P[2],
		Standard: P[4],
		Percent: P[10],
		Scientific: P[11],
		"Yes/No": "\"Yes\";\"Yes\";\"No\";@",
		"True/False": "\"True\";\"True\";\"False\";@",
		"On/Off": "\"Yes\";\"Yes\";\"No\";@"
	};
	var o, f = [], h = {}, u = [], d = {}, p = "";
	t.dense && (d["!data"] = []);
	var m, v = {}, g = {}, b = zi("<Data ss:Type=\"String\">"), T = 0, E = 0, w = 0, A = {
		s: {
			r: 2e6,
			c: 2e6
		},
		e: {
			r: 0,
			c: 0
		}
	}, k = {}, S = {}, y = "", C = 0, _ = [], x = {}, O = {}, R = 0, I = [], N = [], D = {}, F = [], M = !1, L = [], U = [], B = {}, H = 0, W = 0, z = {
		Sheets: [],
		WBProps: { date1904: !1 }
	}, V = {};
	Br.lastIndex = 0, a = Xe(a, "<!--", "-->");
	for (var G = ""; n = Br.exec(a);) switch (n[3] = (G = n[3]).toLowerCase()) {
		case "data":
			if ("data" == G) {
				if ("/" === n[1]) {
					if ((o = f.pop())[0] !== n[3]) throw new Error("Bad state: " + o.join("|"));
				} else "/" !== n[0].charAt(n[0].length - 2) && f.push([n[3], !0]);
				break;
			}
			if (f[f.length - 1][1]) break;
			"/" === n[1] ? Xi(a.slice(T, n.index), y, b, "comment" == f[f.length - 1][0] ? D : v, {
				c: E,
				r: w
			}, k, F[E], g, L, t, z.WBProps.date1904) : (y = "", b = zi(n[0]), T = n.index + n[0].length);
			break;
		case "cell":
			if ("/" === n[1]) if (N.length > 0 && (v.c = N), (!t.sheetRows || t.sheetRows > w) && void 0 !== v.v && (t.dense ? (d["!data"][w] || (d["!data"][w] = []), d["!data"][w][E] = v) : d[Nt(E) + Rt(w)] = v), v.HRef && (v.l = { Target: Er(v.HRef) }, v.HRefScreenTip && (v.l.Tooltip = v.HRefScreenTip), delete v.HRef, delete v.HRefScreenTip), (v.MergeAcross || v.MergeDown) && (H = E + (0 | parseInt(v.MergeAcross, 10)), W = w + (0 | parseInt(v.MergeDown, 10)), (H > E || W > w) && _.push({
				s: {
					c: E,
					r: w
				},
				e: {
					c: H,
					r: W
				}
			})), t.sheetStubs) if (v.MergeAcross || v.MergeDown) {
				for (var $ = E; $ <= H; ++$) for (var X = w; X <= W; ++X) ($ > E || X > w) && (t.dense ? (d["!data"][X] || (d["!data"][X] = []), d["!data"][X][$] = { t: "z" }) : d[Nt($) + Rt(X)] = { t: "z" });
				E = H + 1;
			} else ++E;
			else v.MergeAcross ? E = H + 1 : ++E;
			else (v = Vi(n[0])).Index && (E = +v.Index - 1), E < A.s.c && (A.s.c = E), E > A.e.c && (A.e.c = E), "/>" === n[0].slice(-2) && ++E, N = [];
			break;
		case "row":
			"/" === n[1] || "/>" === n[0].slice(-2) ? (w < A.s.r && (A.s.r = w), w > A.e.r && (A.e.r = w), "/>" === n[0].slice(-2) && (g = zi(n[0])).Index && (w = +g.Index - 1), E = 0, ++w) : ((g = zi(n[0])).Index && (w = +g.Index - 1), B = {}, ("0" == g.AutoFitHeight || g.Height) && (B.hpx = parseInt(g.Height, 10), B.hpt = ts(B.hpx), U[w] = B), "1" == g.Hidden && (B.hidden = !0, U[w] = B));
			break;
		case "worksheet":
			if ("/" === n[1]) {
				if ((o = f.pop())[0] !== n[3]) throw new Error("Bad state: " + o.join("|"));
				u.push(p), A.s.r <= A.e.r && A.s.c <= A.e.c && (d["!ref"] = Mt(A), t.sheetRows && t.sheetRows <= A.e.r && (d["!fullref"] = d["!ref"], A.e.r = t.sheetRows - 1, d["!ref"] = Mt(A))), _.length && (d["!merges"] = _), F.length > 0 && (d["!cols"] = F), U.length > 0 && (d["!rows"] = U), h[p] = d;
			} else A = {
				s: {
					r: 2e6,
					c: 2e6
				},
				e: {
					r: 0,
					c: 0
				}
			}, w = E = 0, f.push([n[3], !1]), o = zi(n[0]), p = Er(o.Name), d = {}, t.dense && (d["!data"] = []), _ = [], L = [], U = [], V = {
				name: p,
				Hidden: 0
			}, z.Sheets.push(V);
			break;
		case "table":
			if ("/" === n[1]) {
				if ((o = f.pop())[0] !== n[3]) throw new Error("Bad state: " + o.join("|"));
			} else {
				if ("/>" == n[0].slice(-2)) break;
				f.push([n[3], !1]), F = [], M = !1;
			}
			break;
		case "style":
			"/" === n[1] ? $i(k, S, t) : S = zi(n[0]);
			break;
		case "numberformat":
			S.nf = Er(zi(n[0]).Format || "General"), Bi[S.nf] && (S.nf = Bi[S.nf]);
			for (var j = 0; 392 != j && P[j] != S.nf; ++j);
			if (392 == j) {
				for (j = 57; 392 != j; ++j) if (null == P[j]) {
					ve(S.nf, j);
					break;
				}
			}
			break;
		case "column":
			if ("table" !== f[f.length - 1][0]) break;
			if ("/" === n[1]) break;
			if ((m = zi(n[0])).Hidden && (m.hidden = !0, delete m.Hidden), m.Width && (m.wpx = parseInt(m.Width, 10)), !M && m.wpx > 10) {
				M = !0, Kn = 6;
				for (var K = 0; K < F.length; ++K) F[K] && es(F[K]);
			}
			M && es(m), F[m.Index - 1 || F.length] = m;
			for (var Y = 0; Y < +m.Span; ++Y) F[F.length] = Ne(m);
			break;
		case "namedrange":
			if ("/" === n[1]) break;
			z.Names || (z.Names = []);
			var J = mr(n[0]), Z = {
				Name: ji(J.Name),
				Ref: vs(J.RefersTo.slice(1), {
					r: 0,
					c: 0
				})
			};
			z.Sheets.length > 0 && (Z.Sheet = z.Sheets.length - 1), z.Names.push(Z);
			break;
		case "namedcell":
		case "b":
		case "i":
		case "u":
		case "s":
		case "em":
		case "h2":
		case "h3":
		case "sub":
		case "sup":
		case "span":
		case "alignment":
		case "borders":
		case "border":
		case "protection":
		case "paragraphs":
		case "name":
		case "pixelsperinch":
		case "null": break;
		case "font":
			if ("/>" === n[0].slice(-2)) break;
			"/" === n[1] ? y += a.slice(C, n.index) : C = n.index + n[0].length;
			break;
		case "interior":
			if (!t.cellStyles) break;
			S.Interior = zi(n[0]);
			break;
		case "author":
		case "title":
		case "description":
		case "created":
		case "keywords":
		case "subject":
		case "category":
		case "company":
		case "lastauthor":
		case "lastsaved":
		case "lastprinted":
		case "version":
		case "revision":
		case "totaltime":
		case "hyperlinkbase":
		case "manager":
		case "contentstatus":
		case "identifier":
		case "language":
		case "appname":
			if ("/>" === n[0].slice(-2)) break;
			"/" === n[1] ? ya(x, G, a.slice(R, n.index)) : R = n.index + n[0].length;
			break;
		case "styles":
		case "workbook":
			if ("/" === n[1]) {
				if ((o = f.pop())[0] !== n[3]) throw new Error("Bad state: " + o.join("|"));
			} else f.push([n[3], !1]);
			break;
		case "comment":
			if ("/" === n[1]) {
				if ((o = f.pop())[0] !== n[3]) throw new Error("Bad state: " + o.join("|"));
				Ki(D), N.push(D);
			} else f.push([n[3], !1]), yr((o = zi(n[0])).ShowAlways || "0") || (N.hidden = !0), D = { a: o.Author };
			break;
		case "autofilter":
			if ("/" === n[1]) {
				if ((o = f.pop())[0] !== n[3]) throw new Error("Bad state: " + o.join("|"));
			} else if ("/" !== n[0].charAt(n[0].length - 2)) {
				var q = zi(n[0]);
				d["!autofilter"] = { ref: vs(q.Range).replace(/\$/g, "") }, f.push([n[3], !0]);
			}
			break;
		case "datavalidation":
			if ("/" === n[1]) {
				if ((o = f.pop())[0] !== n[3]) throw new Error("Bad state: " + o.join("|"));
			} else "/" !== n[0].charAt(n[0].length - 2) && f.push([n[3], !0]);
			break;
		case "componentoptions":
		case "documentproperties":
		case "customdocumentproperties":
		case "officedocumentsettings":
		case "pivottable":
		case "pivotcache":
		case "names":
		case "mapinfo":
		case "pagebreaks":
		case "querytable":
		case "sorting":
		case "schema":
		case "conditionalformatting":
		case "smarttagtype":
		case "smarttags":
		case "excelworkbook":
		case "workbookoptions":
		case "worksheetoptions":
			if ("/" === n[1]) {
				if ((o = f.pop())[0] !== n[3]) throw new Error("Bad state: " + o.join("|"));
			} else "/" !== n[0].charAt(n[0].length - 2) && f.push([n[3], !0]);
			break;
		default:
			if (0 == f.length && "document" == n[3]) return pc(a, t);
			if (0 == f.length && "uof" == n[3]) return pc(a, t);
			var Q = !0;
			switch (f[f.length - 1][0]) {
				case "officedocumentsettings":
					switch (n[3]) {
						case "allowpng":
						case "removepersonalinformation":
						case "downloadcomponents":
						case "locationofcomponents":
						case "colors":
						case "color":
						case "index":
						case "rgb":
						case "targetscreensize":
						case "readonlyrecommended": break;
						default: Q = !1;
					}
					break;
				case "componentoptions":
					switch (n[3]) {
						case "toolbar":
						case "hideofficelogo":
						case "spreadsheetautofit":
						case "label":
						case "caption":
						case "maxheight":
						case "maxwidth":
						case "nextsheetnumber": break;
						default: Q = !1;
					}
					break;
				case "excelworkbook":
					switch (n[3]) {
						case "date1904":
							z.WBProps.date1904 = !0;
							break;
						case "hidehorizontalscrollbar":
						case "hideverticalscrollbar":
						case "hideworkbooktabs":
						case "windowheight":
						case "windowwidth":
						case "windowtopx":
						case "windowtopy":
						case "tabratio":
						case "protectstructure":
						case "protectwindow":
						case "protectwindows":
						case "activesheet":
						case "displayinknotes":
						case "firstvisiblesheet":
						case "supbook":
						case "sheetname":
						case "sheetindex":
						case "sheetindexfirst":
						case "sheetindexlast":
						case "dll":
						case "acceptlabelsinformulas":
						case "donotsavelinkvalues":
						case "iteration":
						case "maxiterations":
						case "maxchange":
						case "path":
						case "xct":
						case "count":
						case "selectedsheets":
						case "calculation":
						case "uncalced":
						case "startupprompt":
						case "crn":
						case "externname":
						case "formula":
						case "colfirst":
						case "collast":
						case "wantadvise":
						case "boolean":
						case "error":
						case "text":
						case "ole":
						case "noautorecover":
						case "publishobjects":
						case "donotcalculatebeforesave":
						case "number":
						case "refmoder1c1":
						case "embedsavesmarttags": break;
						default: Q = !1;
					}
					break;
				case "workbookoptions":
					switch (n[3]) {
						case "owcversion":
						case "height":
						case "width": break;
						default: Q = !1;
					}
					break;
				case "worksheetoptions":
					switch (n[3]) {
						case "visible":
							if ("/>" === n[0].slice(-2));
							else if ("/" === n[1]) switch (a.slice(R, n.index)) {
								case "SheetHidden":
									V.Hidden = 1;
									break;
								case "SheetVeryHidden": V.Hidden = 2;
							}
							else R = n.index + n[0].length;
							break;
						case "header":
							d["!margins"] || ui(d["!margins"] = {}, "xlml"), isNaN(+mr(n[0]).Margin) || (d["!margins"].header = +mr(n[0]).Margin);
							break;
						case "footer":
							d["!margins"] || ui(d["!margins"] = {}, "xlml"), isNaN(+mr(n[0]).Margin) || (d["!margins"].footer = +mr(n[0]).Margin);
							break;
						case "pagemargins":
							var ee = mr(n[0]);
							d["!margins"] || ui(d["!margins"] = {}, "xlml"), isNaN(+ee.Top) || (d["!margins"].top = +ee.Top), isNaN(+ee.Left) || (d["!margins"].left = +ee.Left), isNaN(+ee.Right) || (d["!margins"].right = +ee.Right), isNaN(+ee.Bottom) || (d["!margins"].bottom = +ee.Bottom);
							break;
						case "displayrighttoleft":
							z.Views || (z.Views = []), z.Views[0] || (z.Views[0] = {}), z.Views[0].RTL = !0;
							break;
						case "freezepanes":
						case "frozennosplit":
						case "splithorizontal":
						case "splitvertical":
						case "donotdisplaygridlines":
						case "activerow":
						case "activecol":
						case "toprowbottompane":
						case "leftcolumnrightpane":
						case "unsynced":
						case "print":
						case "printerrors":
						case "panes":
						case "scale":
						case "pane":
						case "number":
						case "layout":
						case "pagesetup":
						case "selected":
						case "protectobjects":
						case "enableselection":
						case "protectscenarios":
						case "validprinterinfo":
						case "horizontalresolution":
						case "verticalresolution":
						case "numberofcopies":
						case "activepane":
						case "toprowvisible":
						case "leftcolumnvisible":
						case "fittopage":
						case "rangeselection":
						case "papersizeindex":
						case "pagelayoutzoom":
						case "pagebreakzoom":
						case "filteron":
						case "fitwidth":
						case "fitheight":
						case "commentslayout":
						case "zoom":
						case "lefttoright":
						case "gridlines":
						case "allowsort":
						case "allowfilter":
						case "allowinsertrows":
						case "allowdeleterows":
						case "allowinsertcols":
						case "allowdeletecols":
						case "allowinserthyperlinks":
						case "allowformatcells":
						case "allowsizecols":
						case "allowsizerows":
						case "tabcolorindex":
						case "donotdisplayheadings":
						case "showpagelayoutzoom":
						case "blackandwhite":
						case "donotdisplayzeros":
						case "displaypagebreak":
						case "rowcolheadings":
						case "donotdisplayoutline":
						case "noorientation":
						case "allowusepivottables":
						case "zeroheight":
						case "viewablerange":
						case "selection":
						case "protectcontents": break;
						case "nosummaryrowsbelowdetail":
							d["!outline"] || (d["!outline"] = {}), d["!outline"].above = !0;
							break;
						case "nosummarycolumnsrightdetail":
							d["!outline"] || (d["!outline"] = {}), d["!outline"].left = !0;
							break;
						default: Q = !1;
					}
					break;
				case "pivottable":
				case "pivotcache":
					switch (n[3]) {
						case "immediateitemsondrop":
						case "showpagemultipleitemlabel":
						case "compactrowindent":
						case "location":
						case "pivotfield":
						case "orientation":
						case "layoutform":
						case "layoutsubtotallocation":
						case "layoutcompactrow":
						case "position":
						case "pivotitem":
						case "datatype":
						case "datafield":
						case "sourcename":
						case "parentfield":
						case "ptlineitems":
						case "ptlineitem":
						case "countofsameitems":
						case "item":
						case "itemtype":
						case "ptsource":
						case "cacheindex":
						case "consolidationreference":
						case "filename":
						case "reference":
						case "nocolumngrand":
						case "norowgrand":
						case "blanklineafteritems":
						case "hidden":
						case "subtotal":
						case "basefield":
						case "mapchilditems":
						case "function":
						case "refreshonfileopen":
						case "printsettitles":
						case "mergelabels":
						case "defaultversion":
						case "refreshname":
						case "refreshdate":
						case "refreshdatecopy":
						case "versionlastrefresh":
						case "versionlastupdate":
						case "versionupdateablemin":
						case "versionrefreshablemin":
						case "calculation": break;
						default: Q = !1;
					}
					break;
				case "pagebreaks":
					switch (n[3]) {
						case "colbreaks":
						case "colbreak":
						case "rowbreaks":
						case "rowbreak":
						case "colstart":
						case "colend":
						case "rowend": break;
						default: Q = !1;
					}
					break;
				case "autofilter":
					switch (n[3]) {
						case "autofiltercolumn":
						case "autofiltercondition":
						case "autofilterand":
						case "autofilteror": break;
						default: Q = !1;
					}
					break;
				case "querytable":
					switch (n[3]) {
						case "id":
						case "autoformatfont":
						case "autoformatpattern":
						case "querysource":
						case "querytype":
						case "enableredirections":
						case "refreshedinxl9":
						case "urlstring":
						case "htmltables":
						case "connection":
						case "commandtext":
						case "refreshinfo":
						case "notitles":
						case "nextid":
						case "columninfo":
						case "overwritecells":
						case "donotpromptforfile":
						case "textwizardsettings":
						case "source":
						case "number":
						case "decimal":
						case "thousandseparator":
						case "trailingminusnumbers":
						case "formatsettings":
						case "fieldtype":
						case "delimiters":
						case "tab":
						case "comma":
						case "autoformatname":
						case "versionlastedit":
						case "versionlastrefresh": break;
						default: Q = !1;
					}
					break;
				case "datavalidation":
					switch (n[3]) {
						case "range":
						case "type":
						case "min":
						case "max":
						case "sort":
						case "descending":
						case "order":
						case "casesensitive":
						case "value":
						case "errorstyle":
						case "errormessage":
						case "errortitle":
						case "inputmessage":
						case "inputtitle":
						case "combohide":
						case "inputhide":
						case "condition":
						case "qualifier":
						case "useblank":
						case "value1":
						case "value2":
						case "format":
						case "cellrangelist": break;
						default: Q = !1;
					}
					break;
				case "sorting":
				case "conditionalformatting":
					switch (n[3]) {
						case "range":
						case "type":
						case "min":
						case "max":
						case "sort":
						case "descending":
						case "order":
						case "casesensitive":
						case "value":
						case "errorstyle":
						case "errormessage":
						case "errortitle":
						case "cellrangelist":
						case "inputmessage":
						case "inputtitle":
						case "combohide":
						case "inputhide":
						case "condition":
						case "qualifier":
						case "useblank":
						case "value1":
						case "value2":
						case "format": break;
						default: Q = !1;
					}
					break;
				case "mapinfo":
				case "schema":
				case "data":
					switch (n[3]) {
						case "map":
						case "entry":
						case "range":
						case "xpath":
						case "field":
						case "xsdtype":
						case "filteron":
						case "aggregate":
						case "elementtype":
						case "attributetype":
						case "schema":
						case "element":
						case "complextype":
						case "datatype":
						case "all":
						case "attribute":
						case "extends":
						case "row": break;
						default: Q = !1;
					}
					break;
				case "smarttags": break;
				default: Q = !1;
			}
			if (Q) break;
			if (n[3].match(/!\[CDATA/)) break;
			if (!f[f.length - 1][1]) throw "Unrecognized tag: " + n[3] + "|" + f.join("|");
			if ("customdocumentproperties" === f[f.length - 1][0]) {
				if ("/>" === n[0].slice(-2)) break;
				"/" === n[1] ? Gi(O, G, I, a.slice(R, n.index)) : (I = n, R = n.index + n[0].length);
				break;
			}
			if (t.WTF) throw "Unrecognized tag: " + n[3] + "|" + f.join("|");
	}
	var re = {};
	return t.bookSheets || t.bookProps || (re.Sheets = h), re.SheetNames = u, re.Workbook = z, re.SSF = Ne(P), re.Props = x, re.Custprops = O, re.bookType = "xlml", re;
}
function Ji(e, r) {
	switch (Nc(r = r || {}), r.type || "base64") {
		case "base64": return Yi(p(e), r);
		case "binary":
		case "buffer":
		case "file": return Yi(e, r);
		case "array": return Yi(w(e), r);
	}
}
var Zi = [
	60,
	1084,
	2066,
	2165,
	2175
];
function qi(e, r, t, a, n) {
	var s = a, i = [], c = t.slice(t.l, t.l + s);
	if (n && n.enc && n.enc.insitu && c.length > 0) switch (e) {
		case 9:
		case 521:
		case 1033:
		case 2057:
		case 47:
		case 405:
		case 225:
		case 406:
		case 312:
		case 404:
		case 10:
		case 133: break;
		default: n.enc.insitu(c);
	}
	i.push(c), t.l += s;
	for (var o = lt(t, t.l), l = ac[o], f = 0; null != l && Zi.indexOf(o) > -1;) s = lt(t, t.l + 2), f = t.l + 4, 2066 == o ? f += 4 : 2165 != o && 2175 != o || (f += 12), c = t.slice(f, t.l + 4 + s), i.push(c), t.l += 4 + s, l = ac[o = lt(t, t.l)];
	var h = k(i);
	Et(h, 0);
	var u = 0;
	h.lens = [];
	for (var d = 0; d < i.length; ++d) h.lens.push(u), u += i[d].length;
	if (h.length < a) throw "XLS Record 0x" + e.toString(16) + " Truncated: " + h.length + " < " + a;
	return r.f(h, h.length, n);
}
function Qi(e, r, t) {
	if ("z" !== e.t && e.XF) {
		var a = 0;
		try {
			a = e.z || e.XF.numFmtId || 0, r.cellNF && null == e.z && (e.z = P[a]);
		} catch (ao) {
			if (r.WTF) throw ao;
		}
		if (!r || !1 !== r.cellText) try {
			"e" === e.t ? e.w = e.w || ha[e.v] : 0 === a || "General" == a ? "n" === e.t ? (0 | e.v) === e.v ? e.w = e.v.toString(10) : e.w = W(e.v) : e.w = z(e.v) : e.w = le(a, e.v, {
				date1904: !!t,
				dateNF: r && r.dateNF
			});
		} catch (ao) {
			if (r.WTF) throw ao;
		}
		if (r.cellDates && a && "n" == e.t && ie(P[a] || String(a))) {
			var n = B(e.v + (t ? 1462 : 0));
			n && (e.t = "d", e.v = new Date(Date.UTC(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u)));
		}
	}
}
function ec(e, r, t) {
	return {
		v: e,
		ixfe: r,
		t
	};
}
function rc(e, r) {
	var t, i, c, o;
	if (r || (r = {}), Nc(r), s(), r.codepage && a(r.codepage), e.FullPaths) {
		if (be.find(e, "/encryption")) throw new Error("File is password-protected");
		t = be.find(e, "!CompObj"), i = be.find(e, "/Workbook") || be.find(e, "/Book");
	} else {
		switch (r.type) {
			case "base64":
				e = E(p(e));
				break;
			case "binary":
				e = E(e);
				break;
			case "buffer": break;
			case "array": Array.isArray(e) || (e = Array.prototype.slice.call(e));
		}
		Et(e, 0), i = { content: e };
	}
	if (t && function(e) {
		var r = {}, t = e.content;
		if (t.l = 28, r.AnsiUserType = t.read_shift(0, "lpstr-ansi"), r.AnsiClipboardFormat = function(e) {
			return ta(e, 1);
		}(t), t.length - t.l <= 4) return r;
		var a = t.read_shift(4);
		0 == a || a > 40 || (t.l -= 4, r.Reserved1 = t.read_shift(0, "lpstr-ansi"), t.length - t.l <= 4 || 1907505652 !== (a = t.read_shift(4)) || (r.UnicodeClipboardFormat = function(e) {
			return ta(e, 2);
		}(t), 0 == (a = t.read_shift(4)) || a > 40 || (t.l -= 4, r.Reserved2 = t.read_shift(0, "lpwstr"))));
	}(t), r.bookProps && !r.bookSheets) c = {};
	else {
		var l = m ? "buffer" : "array";
		if (i && i.content) c = function(e, r) {
			var t = { opts: {} }, a = {}, s = {};
			r.dense && (s["!data"] = []);
			var i, c, o, l, f, h, u, d, p = {}, m = {}, v = null, g = [], b = "", T = {}, E = "", w = {}, A = [], k = [], S = [], y = {
				Sheets: [],
				WBProps: { date1904: !1 },
				Views: [{}]
			}, C = {}, _ = !1, x = function(e) {
				return e < 8 ? fa[e] : e < 64 && S[e - 8] || fa[e];
			}, O = function(e, r, t) {
				if ((_ || !(H > 1)) && !(t.sheetRows && e.r >= t.sheetRows)) {
					if (t.cellStyles && r.XF && r.XF.data && function(e, r) {
						var t, a = e.XF.data;
						a && a.patternType && r && r.cellStyles && (e.s = {}, e.s.patternType = a.patternType, (t = Xn(x(a.icvFore))) && (e.s.fgColor = { rgb: t }), (t = Xn(x(a.icvBack))) && (e.s.bgColor = { rgb: t }));
					}(r, t), delete r.ixfe, delete r.XF, i = e, E = Ft(e), m && m.s && m.e || (m = {
						s: {
							r: 0,
							c: 0
						},
						e: {
							r: 0,
							c: 0
						}
					}), e.r < m.s.r && (m.s.r = e.r), e.c < m.s.c && (m.s.c = e.c), e.r + 1 > m.e.r && (m.e.r = e.r + 1), e.c + 1 > m.e.c && (m.e.c = e.c + 1), t.cellFormula && r.f) {
						for (var a = 0; a < A.length; ++a) if (!(A[a][0].s.c > e.c || A[a][0].s.r > e.r || A[a][0].e.c < e.c || A[a][0].e.r < e.r)) {
							r.F = Mt(A[a][0]), A[a][0].s.c == e.c && A[a][0].s.r == e.r || delete r.f, r.f && (r.f = "" + Js(A[a][1], 0, e, L, R));
							break;
						}
					}
					t.dense ? (s["!data"][e.r] || (s["!data"][e.r] = []), s["!data"][e.r][e.c] = r) : s[E] = r;
				}
			}, R = {
				enc: !1,
				sbcch: 0,
				snames: [],
				sharedf: w,
				arrayf: A,
				rrtabid: [],
				lastuser: "",
				biff: 8,
				codepage: 0,
				winlocked: 0,
				cellStyles: !!r && !!r.cellStyles,
				WTF: !!r && !!r.wtf
			};
			r.password && (R.password = r.password);
			var I = [], N = [], D = [], F = [], M = !1, L = [];
			L.SheetNames = R.snames, L.sharedf = R.sharedf, L.arrayf = R.arrayf, L.names = [], L.XTI = [];
			var U, B = 0, H = 0, W = 0, z = [], V = [];
			R.codepage = 1200, n(1200);
			for (var G = !1; e.l < e.length - 1;) {
				var $ = e.l, X = e.read_shift(2);
				if (0 === X && 10 === B) break;
				var j = e.l === e.length ? 0 : e.read_shift(2), K = ac[X];
				if (0 == H && -1 == [
					9,
					521,
					1033,
					2057
				].indexOf(X)) break;
				if (K && K.f) {
					if (r.bookSheets && 133 === B && 133 !== X) break;
					if (B = X, 2 === K.r || 12 == K.r) {
						var Y = e.read_shift(2);
						if (j -= 2, !R.enc && Y !== X && ((255 & Y) << 8 | Y >> 8) !== X) throw new Error("rt mismatch: " + Y + "!=" + X);
						12 == K.r && (e.l += 10, j -= 10);
					}
					var J = {};
					if (J = 10 === X ? K.f(e, j, R) : qi(X, K, e, j, R), 0 == H && -1 === [
						9,
						521,
						1033,
						2057
					].indexOf(B)) continue;
					switch (X) {
						case 34:
							t.opts.Date1904 = y.WBProps.date1904 = J;
							break;
						case 134:
							t.opts.WriteProtect = !0;
							break;
						case 47:
							if (R.enc || (e.l = 0), R.enc = J, !r.password) throw new Error("File is password-protected");
							if (null == J.valid) throw new Error("Encryption scheme unsupported");
							if (!J.valid) throw new Error("Password is incorrect");
							break;
						case 92:
							R.lastuser = J;
							break;
						case 66:
							var Z = Number(J);
							switch (Z) {
								case 21010:
									Z = 1200;
									break;
								case 32768:
									Z = 1e4;
									break;
								case 32769: Z = 1252;
							}
							n(R.codepage = Z), G = !0;
							break;
						case 317:
							R.rrtabid = J;
							break;
						case 25:
							R.winlocked = J;
							break;
						case 439:
							t.opts.RefreshAll = J;
							break;
						case 12:
							t.opts.CalcCount = J;
							break;
						case 16:
							t.opts.CalcDelta = J;
							break;
						case 17:
							t.opts.CalcIter = J;
							break;
						case 13:
							t.opts.CalcMode = J;
							break;
						case 14:
							t.opts.CalcPrecision = J;
							break;
						case 95:
							t.opts.CalcSaveRecalc = J;
							break;
						case 15:
							R.CalcRefMode = J;
							break;
						case 2211:
							t.opts.FullCalc = J;
							break;
						case 129:
							J.fDialog && (s["!type"] = "dialog"), J.fBelow || ((s["!outline"] || (s["!outline"] = {})).above = !0), J.fRight || ((s["!outline"] || (s["!outline"] = {})).left = !0);
							break;
						case 67:
						case 579:
						case 1091:
						case 224:
							k.push(J);
							break;
						case 430:
							L.push([J]), L[L.length - 1].XTI = [];
							break;
						case 35:
						case 547:
							L[L.length - 1].push(J);
							break;
						case 24:
						case 536:
							U = {
								Name: J.Name,
								Ref: Js(J.rgce, 0, null, L, R)
							}, J.itab > 0 && (U.Sheet = J.itab - 1), L.names.push(U), L[0] || (L[0] = [], L[0].XTI = []), L[L.length - 1].push(J), "_xlnm._FilterDatabase" == J.Name && J.itab > 0 && J.rgce && J.rgce[0] && J.rgce[0][0] && "PtgArea3d" == J.rgce[0][0][0] && (V[J.itab - 1] = { ref: Mt(J.rgce[0][0][1][2]) });
							break;
						case 22:
							R.ExternCount = J;
							break;
						case 23:
							0 == L.length && (L[0] = [], L[0].XTI = []), L[L.length - 1].XTI = L[L.length - 1].XTI.concat(J), L.XTI = L.XTI.concat(J);
							break;
						case 2196:
							if (R.biff < 8) break;
							null != U && (U.Comment = J[1]);
							break;
						case 18:
							s["!protect"] = J;
							break;
						case 19:
							0 !== J && R.WTF && console.error("Password verifier: " + J);
							break;
						case 133:
							p[4 == R.biff ? R.snames.length : J.pos] = J, R.snames.push(J.name);
							break;
						case 10:
							if (--H ? !_ : _) break;
							if (m.e) {
								if (m.e.r > 0 && m.e.c > 0) {
									if (m.e.r--, m.e.c--, s["!ref"] = Mt(m), r.sheetRows && r.sheetRows <= m.e.r) {
										var q = m.e.r;
										m.e.r = r.sheetRows - 1, s["!fullref"] = s["!ref"], s["!ref"] = Mt(m), m.e.r = q;
									}
									m.e.r++, m.e.c++;
								}
								I.length > 0 && (s["!merges"] = I), N.length > 0 && (s["!objects"] = N), D.length > 0 && (s["!cols"] = D), F.length > 0 && (s["!rows"] = F), y.Sheets.push(C);
							}
							"" === b ? T = s : a[b] = s, s = {}, r.dense && (s["!data"] = []);
							break;
						case 9:
						case 521:
						case 1033:
						case 2057:
							if (8 === R.biff && (R.biff = {
								9: 2,
								521: 3,
								1033: 4
							}[X] || {
								512: 2,
								768: 3,
								1024: 4,
								1280: 5,
								1536: 8,
								2: 2,
								7: 2
							}[J.BIFFVer] || 8), R.biffguess = 0 == J.BIFFVer, 0 == J.BIFFVer && 4096 == J.dt && (R.biff = 5, G = !0, n(R.codepage = 28591)), 4 == R.biff && 256 & J.dt && (_ = !0), 8 == R.biff && 0 == J.BIFFVer && 16 == J.dt && (R.biff = 2), H++ && !_) break;
							if (s = {}, r.dense && (s["!data"] = []), R.biff < 8 && !G && (G = !0, n(R.codepage = r.codepage || 1252)), 4 == R.biff && _) b = (p[R.snames.indexOf(b) + 1] || { name: "" }).name;
							else if (R.biff < 5 || 0 == J.BIFFVer && 4096 == J.dt) {
								"" === b && (b = "Sheet1"), m = {
									s: {
										r: 0,
										c: 0
									},
									e: {
										r: 0,
										c: 0
									}
								};
								var Q = {
									pos: e.l - j,
									name: b
								};
								p[Q.pos] = Q, R.snames.push(b);
							} else b = (p[$] || { name: "" }).name;
							32 == J.dt && (s["!type"] = "chart"), 64 == J.dt && (s["!type"] = "macro"), I = [], N = [], R.arrayf = A = [], D = [], F = [], M = !1, C = {
								Hidden: (p[$] || { hs: 0 }).hs,
								name: b
							};
							break;
						case 515:
						case 3:
						case 2:
							"chart" == s["!type"] && (r.dense ? (s["!data"][J.r] || [])[J.c] : s[Nt(J.c) + Rt(J.r)]) && ++J.c, h = {
								ixfe: J.ixfe,
								XF: k[J.ixfe] || {},
								v: J.val,
								t: "n"
							}, W > 0 && (h.z = h.XF && h.XF.numFmtId && z[h.XF.numFmtId] || z[h.ixfe >> 8 & 63]), Qi(h, r, t.opts.Date1904), O({
								c: J.c,
								r: J.r
							}, h, r);
							break;
						case 5:
						case 517:
							h = {
								ixfe: J.ixfe,
								XF: k[J.ixfe],
								v: J.val,
								t: J.t
							}, W > 0 && (h.z = h.XF && h.XF.numFmtId && z[h.XF.numFmtId] || z[h.ixfe >> 8 & 63]), Qi(h, r, t.opts.Date1904), O({
								c: J.c,
								r: J.r
							}, h, r);
							break;
						case 638:
							h = {
								ixfe: J.ixfe,
								XF: k[J.ixfe],
								v: J.rknum,
								t: "n"
							}, W > 0 && (h.z = h.XF && h.XF.numFmtId && z[h.XF.numFmtId] || z[h.ixfe >> 8 & 63]), Qi(h, r, t.opts.Date1904), O({
								c: J.c,
								r: J.r
							}, h, r);
							break;
						case 189:
							for (var ee = J.c; ee <= J.C; ++ee) {
								var re = J.rkrec[ee - J.c][0];
								h = {
									ixfe: re,
									XF: k[re],
									v: J.rkrec[ee - J.c][1],
									t: "n"
								}, W > 0 && (h.z = h.XF && h.XF.numFmtId && z[h.XF.numFmtId] || z[h.ixfe >> 8 & 63]), Qi(h, r, t.opts.Date1904), O({
									c: ee,
									r: J.r
								}, h, r);
							}
							break;
						case 6:
						case 518:
						case 1030:
							if ("String" == J.val) {
								v = J;
								break;
							}
							if ((h = ec(J.val, J.cell.ixfe, J.tt)).XF = k[h.ixfe], r.cellFormula) {
								var te = J.formula;
								if (te && te[0] && te[0][0] && "PtgExp" == te[0][0][0]) {
									var ae = te[0][0][1][0], ne = te[0][0][1][1], se = Ft({
										r: ae,
										c: ne
									});
									w[se] ? h.f = "" + Js(J.formula, 0, J.cell, L, R) : h.F = ((r.dense ? (s["!data"][ae] || [])[ne] : s[se]) || {}).F;
								} else h.f = "" + Js(J.formula, 0, J.cell, L, R);
							}
							W > 0 && (h.z = h.XF && h.XF.numFmtId && z[h.XF.numFmtId] || z[h.ixfe >> 8 & 63]), Qi(h, r, t.opts.Date1904), O(J.cell, h, r), v = J;
							break;
						case 7:
						case 519:
							if (!v) throw new Error("String record expects Formula");
							v.val = J, (h = ec(J, v.cell.ixfe, "s")).XF = k[h.ixfe], r.cellFormula && (h.f = "" + Js(v.formula, 0, v.cell, L, R)), W > 0 && (h.z = h.XF && h.XF.numFmtId && z[h.XF.numFmtId] || z[h.ixfe >> 8 & 63]), Qi(h, r, t.opts.Date1904), O(v.cell, h, r), v = null;
							break;
						case 33:
						case 545:
							A.push(J);
							var ie = Ft(J[0].s);
							if (c = r.dense ? (s["!data"][J[0].s.r] || [])[J[0].s.c] : s[ie], r.cellFormula && c) {
								if (!v) break;
								if (!ie || !c) break;
								c.f = "" + Js(J[1], 0, J[0], L, R), c.F = Mt(J[0]);
							}
							break;
						case 1212:
							if (!r.cellFormula) break;
							if (E) {
								if (!v) break;
								w[Ft(v.cell)] = J[0], ((c = r.dense ? (s["!data"][v.cell.r] || [])[v.cell.c] : s[Ft(v.cell)]) || {}).f = "" + Js(J[0], 0, i, L, R);
							}
							break;
						case 253:
							h = ec(g[J.isst].t, J.ixfe, "s"), g[J.isst].h && (h.h = g[J.isst].h), h.XF = k[h.ixfe], W > 0 && (h.z = h.XF && h.XF.numFmtId && z[h.XF.numFmtId] || z[h.ixfe >> 8 & 63]), Qi(h, r, t.opts.Date1904), O({
								c: J.c,
								r: J.r
							}, h, r);
							break;
						case 513:
							r.sheetStubs && (h = {
								ixfe: J.ixfe,
								XF: k[J.ixfe],
								t: "z"
							}, W > 0 && (h.z = h.XF && h.XF.numFmtId && z[h.XF.numFmtId] || z[h.ixfe >> 8 & 63]), Qi(h, r, t.opts.Date1904), O({
								c: J.c,
								r: J.r
							}, h, r));
							break;
						case 190:
							if (r.sheetStubs) for (var ce = J.c; ce <= J.C; ++ce) {
								var oe = J.ixfe[ce - J.c];
								h = {
									ixfe: oe,
									XF: k[oe],
									t: "z"
								}, W > 0 && (h.z = h.XF && h.XF.numFmtId && z[h.XF.numFmtId] || z[h.ixfe >> 8 & 63]), Qi(h, r, t.opts.Date1904), O({
									c: ce,
									r: J.r
								}, h, r);
							}
							break;
						case 214:
						case 516:
						case 4:
							(h = ec(J.val, J.ixfe, "s")).XF = k[h.ixfe], W > 0 && (h.z = h.XF && h.XF.numFmtId && z[h.XF.numFmtId] || z[h.ixfe >> 8 & 63]), Qi(h, r, t.opts.Date1904), O({
								c: J.c,
								r: J.r
							}, h, r);
							break;
						case 0:
						case 512:
							1 === H && (m = J);
							break;
						case 252:
							g = J;
							break;
						case 1054:
							if (R.biff >= 3 && R.biff <= 4) {
								z[W++] = J[1];
								for (var le = 0; le < W + 163 && P[le] != J[1]; ++le);
								le >= 163 && ve(J[1], W + 163);
							} else ve(J[1], J[0]);
							break;
						case 30:
							z[W++] = J;
							for (var fe = 0; fe < W + 163 && P[fe] != J; ++fe);
							fe >= 163 && ve(J, W + 163);
							break;
						case 229:
							I = I.concat(J);
							break;
						case 93:
							N[J.cmo[0]] = R.lastobj = J;
							break;
						case 438:
							R.lastobj.TxO = J;
							break;
						case 127:
							R.lastobj.ImData = J;
							break;
						case 440:
							for (f = J[0].s.r; f <= J[0].e.r; ++f) for (l = J[0].s.c; l <= J[0].e.c; ++l) (c = r.dense ? (s["!data"][f] || [])[l] : s[Ft({
								c: l,
								r: f
							})]) && (c.l = J[1]);
							break;
						case 2048:
							for (f = J[0].s.r; f <= J[0].e.r; ++f) for (l = J[0].s.c; l <= J[0].e.c; ++l) (c = r.dense ? (s["!data"][f] || [])[l] : s[Ft({
								c: l,
								r: f
							})]) && c.l && (c.l.Tooltip = J[1]);
							break;
						case 28:
							if ((c = r.dense ? (s["!data"][J[0].r] || [])[J[0].c] : s[Ft(J[0])]) || (r.dense ? (s["!data"][J[0].r] || (s["!data"][J[0].r] = []), c = s["!data"][J[0].r][J[0].c] = { t: "z" }) : c = s[Ft(J[0])] = { t: "z" }, m.e.r = Math.max(m.e.r, J[0].r), m.s.r = Math.min(m.s.r, J[0].r), m.e.c = Math.max(m.e.c, J[0].c), m.s.c = Math.min(m.s.c, J[0].c)), c.c || (c.c = []), R.biff <= 5 && R.biff >= 2) o = {
								a: "SheetJ5",
								t: J[1]
							};
							else {
								var he = N[J[2]];
								o = {
									a: J[1],
									t: he.TxO.t
								}, null == J[3] || 2 & J[3] || (c.c.hidden = !0);
							}
							c.c.push(o);
							break;
						case 2173:
							ds(k[J.ixfe], J.ext);
							break;
						case 125:
							if (!R.cellStyles) break;
							for (; J.e >= J.s;) D[J.e--] = {
								width: J.w / 256,
								level: J.level || 0,
								hidden: !!(1 & J.flags)
							}, M || (M = !0, Qn(J.w / 256)), es(D[J.e + 1]);
							break;
						case 520:
							var ue = {};
							null != J.level && (F[J.r] = ue, ue.level = J.level), J.hidden && (F[J.r] = ue, ue.hidden = !0), J.hpt && (F[J.r] = ue, ue.hpt = J.hpt, ue.hpx = as(J.hpt));
							break;
						case 38:
						case 39:
						case 40:
						case 41:
							s["!margins"] || ui(s["!margins"] = {}), s["!margins"][{
								38: "left",
								39: "right",
								40: "top",
								41: "bottom"
							}[X]] = J;
							break;
						case 161:
							s["!margins"] || ui(s["!margins"] = {}), s["!margins"].header = J.header, s["!margins"].footer = J.footer;
							break;
						case 574:
							J.RTL && (y.Views[0].RTL = !0);
							break;
						case 146:
							S = J;
							break;
						case 2198:
							d = J;
							break;
						case 140:
							u = J;
							break;
						case 442: b ? C.CodeName = J || C.name : y.WBProps.CodeName = J || "ThisWorkbook";
					}
				} else K || console.error("Missing Info for XLS Record 0x" + X.toString(16)), e.l += j;
			}
			return t.SheetNames = Te(p).sort(function(e, r) {
				return Number(e) - Number(r);
			}).map(function(e) {
				return p[e].name;
			}), r.bookSheets || (t.Sheets = a), !t.SheetNames.length && T["!ref"] ? (t.SheetNames.push("Sheet1"), t.Sheets && (t.Sheets.Sheet1 = T)) : t.Preamble = T, t.Sheets && V.forEach(function(e, r) {
				t.Sheets[t.SheetNames[r]]["!autofilter"] = e;
			}), t.Strings = g, t.SSF = Ne(P), R.enc && (t.Encryption = R.enc), d && (t.Themes = d), t.Metadata = {}, void 0 !== u && (t.Metadata.Country = u), L.names.length > 0 && (y.Names = L.names), t.Workbook = y, t;
		}(i.content, r);
		else if ((o = be.find(e, "PerfectOffice_MAIN")) && o.content) c = _n.to_workbook(o.content, (r.type = l, r));
		else {
			if (!(o = be.find(e, "NativeContent_MAIN")) || !o.content) throw (o = be.find(e, "MN0")) && o.content ? /* @__PURE__ */ new Error("Unsupported Works 4 for Mac file") : /* @__PURE__ */ new Error("Cannot find Workbook stream");
			c = _n.to_workbook(o.content, (r.type = l, r));
		}
		r.bookVBA && e.FullPaths && be.find(e, "/_VBA_PROJECT_CUR/VBA/dir") && (c.vbaraw = function(e) {
			var r = be.utils.cfb_new({ root: "R" });
			return e.FullPaths.forEach(function(t, a) {
				if ("/" !== t.slice(-1) && t.match(/_VBA_PROJECT_CUR/)) {
					var n = t.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
					be.utils.cfb_add(r, n, e.FileIndex[a].content);
				}
			}), be.write(r);
		}(e));
	}
	var f = {};
	return e.FullPaths && function(e, r, t) {
		var a = be.find(e, "/!DocumentSummaryInformation");
		if (a && a.size > 0) try {
			var n = Fa(a, sa, "02d5cdd59c2e1b10939708002b2cf9ae");
			for (var s in n) r[s] = n[s];
		} catch (ao) {
			if (t.WTF) throw ao;
		}
		var i = be.find(e, "/!SummaryInformation");
		if (i && i.size > 0) try {
			var c = Fa(i, ia, "e0859ff2f94f6810ab9108002b27b3d9");
			for (var o in c) null == r[o] && (r[o] = c[o]);
		} catch (ao) {
			if (t.WTF) throw ao;
		}
		r.HeadingPairs && r.TitlesOfParts && (wa(r.HeadingPairs, r.TitlesOfParts, r, t), delete r.HeadingPairs, delete r.TitlesOfParts);
	}(e, f, r), c.Props = c.Custprops = f, r.bookFiles && (c.cfb = e), c;
}
var tc = {
	0: { f: function(e, r) {
		var t = {}, a = e.l + r;
		t.r = e.read_shift(4), e.l += 4;
		var n = e.read_shift(2);
		e.l += 1;
		var s = e.read_shift(1);
		return e.l = a, 7 & s && (t.level = 7 & s), 16 & s && (t.hidden = !0), 32 & s && (t.hpt = n / 20), t;
	} },
	1: { f: function(e) {
		return [Xt(e)];
	} },
	2: { f: function(e) {
		return [
			Xt(e),
			qt(e),
			"n"
		];
	} },
	3: { f: function(e) {
		return [
			Xt(e),
			e.read_shift(1),
			"e"
		];
	} },
	4: { f: function(e) {
		return [
			Xt(e),
			e.read_shift(1),
			"b"
		];
	} },
	5: { f: function(e) {
		return [
			Xt(e),
			ra(e),
			"n"
		];
	} },
	6: { f: function(e) {
		return [
			Xt(e),
			zt(e),
			"str"
		];
	} },
	7: { f: function(e) {
		return [
			Xt(e),
			e.read_shift(4),
			"s"
		];
	} },
	8: { f: function(e, r, t) {
		var a = e.l + r, n = Xt(e);
		n.r = t["!row"];
		var s = [
			n,
			zt(e),
			"str"
		];
		return t.cellFormula ? (e.l += 2, s[3] = Js(ti(e, a - e.l, t), 0, n, t.supbooks, t)) : e.l = a, s;
	} },
	9: { f: function(e, r, t) {
		var a = e.l + r, n = Xt(e);
		n.r = t["!row"];
		var s = [
			n,
			ra(e),
			"n"
		];
		return t.cellFormula ? (e.l += 2, s[3] = Js(ti(e, a - e.l, t), 0, n, t.supbooks, t)) : e.l = a, s;
	} },
	10: { f: function(e, r, t) {
		var a = e.l + r, n = Xt(e);
		n.r = t["!row"];
		var s = [
			n,
			e.read_shift(1),
			"b"
		];
		return t.cellFormula ? (e.l += 2, s[3] = Js(ti(e, a - e.l, t), 0, n, t.supbooks, t)) : e.l = a, s;
	} },
	11: { f: function(e, r, t) {
		var a = e.l + r, n = Xt(e);
		n.r = t["!row"];
		var s = [
			n,
			e.read_shift(1),
			"e"
		];
		return t.cellFormula ? (e.l += 2, s[3] = Js(ti(e, a - e.l, t), 0, n, t.supbooks, t)) : e.l = a, s;
	} },
	12: { f: function(e) {
		return [jt(e)];
	} },
	13: { f: function(e) {
		return [
			jt(e),
			qt(e),
			"n"
		];
	} },
	14: { f: function(e) {
		return [
			jt(e),
			e.read_shift(1),
			"e"
		];
	} },
	15: { f: function(e) {
		return [
			jt(e),
			e.read_shift(1),
			"b"
		];
	} },
	16: { f: yi },
	17: { f: function(e) {
		return [
			jt(e),
			zt(e),
			"str"
		];
	} },
	18: { f: function(e) {
		return [
			jt(e),
			e.read_shift(4),
			"s"
		];
	} },
	19: { f: Gt },
	20: {},
	21: {},
	22: {},
	23: {},
	24: {},
	25: {},
	26: {},
	27: {},
	28: {},
	29: {},
	30: {},
	31: {},
	32: {},
	33: {},
	34: {},
	35: { T: 1 },
	36: { T: -1 },
	37: { T: 1 },
	38: { T: -1 },
	39: { f: function(e, r, t) {
		var a = e.l + r, n = e.read_shift(4);
		e.l += 1;
		var s, i = e.read_shift(4), c = Jt(e), o = "";
		try {
			s = ai(e, 0, t);
			try {
				o = Yt(e);
			} catch (ao) {}
		} catch (ao) {
			console.error("Could not parse defined name " + c);
		}
		32 & n && (c = "_xlnm." + c), e.l = a;
		var l = {
			Name: c,
			Ptg: s,
			Flags: n
		};
		return i < 268435455 && (l.Sheet = i), o && (l.Comment = o), l;
	} },
	40: {},
	42: {},
	43: { f: function(e, r, t) {
		var a = {};
		a.sz = e.read_shift(2) / 20;
		var n = function(e) {
			var r = e.read_shift(1);
			return e.l++, {
				fBold: 1 & r,
				fItalic: 2 & r,
				fUnderline: 4 & r,
				fStrikeout: 8 & r,
				fOutline: 16 & r,
				fShadow: 32 & r,
				fCondense: 64 & r,
				fExtend: 128 & r
			};
		}(e);
		switch (n.fItalic && (a.italic = 1), n.fCondense && (a.condense = 1), n.fExtend && (a.extend = 1), n.fShadow && (a.shadow = 1), n.fOutline && (a.outline = 1), n.fStrikeout && (a.strike = 1), 700 === e.read_shift(2) && (a.bold = 1), e.read_shift(2)) {
			case 1:
				a.vertAlign = "superscript";
				break;
			case 2: a.vertAlign = "subscript";
		}
		var s = e.read_shift(1);
		0 != s && (a.underline = s);
		var i = e.read_shift(1);
		i > 0 && (a.family = i);
		var c = e.read_shift(1);
		switch (c > 0 && (a.charset = c), e.l++, a.color = function(e) {
			var r = {}, t = e.read_shift(1) >>> 1, a = e.read_shift(1), n = e.read_shift(2, "i"), s = e.read_shift(1), i = e.read_shift(1), c = e.read_shift(1);
			switch (e.l++, t) {
				case 0:
					r.auto = 1;
					break;
				case 1:
					r.index = a;
					var o = fa[a];
					o && (r.rgb = Xn(o));
					break;
				case 2:
					r.rgb = Xn([
						s,
						i,
						c
					]);
					break;
				case 3: r.theme = a;
			}
			return 0 != n && (r.tint = n > 0 ? n / 32767 : n / 32768), r;
		}(e), e.read_shift(1)) {
			case 1:
				a.scheme = "major";
				break;
			case 2: a.scheme = "minor";
		}
		return a.name = zt(e), a;
	} },
	44: { f: function(e, r) {
		return [e.read_shift(2), zt(e)];
	} },
	45: { f: os },
	46: { f: ls },
	47: { f: function(e, r) {
		var t = e.l + r, a = e.read_shift(2), n = e.read_shift(2);
		return e.l = t, {
			ixfe: a,
			numFmtId: n
		};
	} },
	48: {},
	49: { f: function(e) {
		return e.read_shift(4, "i");
	} },
	50: {},
	51: { f: function(e) {
		for (var r = [], t = e.read_shift(4); t-- > 0;) r.push([e.read_shift(4), e.read_shift(4)]);
		return r;
	} },
	52: { T: 1 },
	53: { T: -1 },
	54: { T: 1 },
	55: { T: -1 },
	56: { T: 1 },
	57: { T: -1 },
	58: {},
	59: {},
	60: { f: gn },
	62: { f: function(e) {
		return [
			Xt(e),
			Gt(e),
			"is"
		];
	} },
	63: { f: function(e) {
		var r = {};
		r.i = e.read_shift(4);
		var t = {};
		t.r = e.read_shift(4), t.c = e.read_shift(4), r.r = Ft(t);
		var a = e.read_shift(1);
		return 2 & a && (r.l = "1"), 8 & a && (r.a = "1"), r;
	} },
	64: { f: function() {} },
	65: {},
	66: {},
	67: {},
	68: {},
	69: {},
	70: {},
	128: {},
	129: { T: 1 },
	130: { T: -1 },
	131: {
		T: 1,
		f: wt,
		p: 0
	},
	132: { T: -1 },
	133: { T: 1 },
	134: { T: -1 },
	135: { T: 1 },
	136: { T: -1 },
	137: {
		T: 1,
		f: function(e) {
			var r = e.read_shift(2);
			return e.l += 28, { RTL: 32 & r };
		}
	},
	138: { T: -1 },
	139: { T: 1 },
	140: { T: -1 },
	141: { T: 1 },
	142: { T: -1 },
	143: { T: 1 },
	144: { T: -1 },
	145: { T: 1 },
	146: { T: -1 },
	147: { f: function(e, r) {
		var t = {}, a = e[e.l];
		return ++e.l, t.above = !(64 & a), t.left = !(128 & a), e.l += 18, t.name = Kt(e, r - 19), t;
	} },
	148: {
		f: Si,
		p: 16
	},
	151: { f: function() {} },
	152: {},
	153: { f: function(e, r) {
		var t = {}, a = e.read_shift(4);
		t.defaultThemeVersion = e.read_shift(4);
		var n = r > 8 ? zt(e) : "";
		return n.length > 0 && (t.CodeName = n), t.autoCompressPictures = !!(65536 & a), t.backupFile = !!(64 & a), t.checkCompatibility = !!(4096 & a), t.date1904 = !!(1 & a), t.filterPrivacy = !!(8 & a), t.hidePivotFieldList = !!(1024 & a), t.promptedSolutions = !!(16 & a), t.publishItems = !!(2048 & a), t.refreshAllConnections = !!(262144 & a), t.saveExternalLinkValues = !!(128 & a), t.showBorderUnselectedTables = !!(4 & a), t.showInkAnnotation = !!(32 & a), t.showObjects = [
			"all",
			"placeholders",
			"none"
		][a >> 13 & 3], t.showPivotChartFilter = !!(32768 & a), t.updateLinks = [
			"userSet",
			"never",
			"always"
		][a >> 8 & 3], t;
	} },
	154: {},
	155: {},
	156: { f: function(e, r) {
		var t = {};
		return t.Hidden = e.read_shift(4), t.iTabID = e.read_shift(4), t.strRelID = Zt(e, r - 8), t.name = zt(e), t;
	} },
	157: {},
	158: {},
	159: {
		T: 1,
		f: function(e) {
			return [e.read_shift(4), e.read_shift(4)];
		}
	},
	160: { T: -1 },
	161: {
		T: 1,
		f: ea
	},
	162: { T: -1 },
	163: { T: 1 },
	164: { T: -1 },
	165: { T: 1 },
	166: { T: -1 },
	167: {},
	168: {},
	169: {},
	170: {},
	171: {},
	172: { T: 1 },
	173: { T: -1 },
	174: {},
	175: {},
	176: { f: Ci },
	177: { T: 1 },
	178: { T: -1 },
	179: { T: 1 },
	180: { T: -1 },
	181: { T: 1 },
	182: { T: -1 },
	183: { T: 1 },
	184: { T: -1 },
	185: { T: 1 },
	186: { T: -1 },
	187: { T: 1 },
	188: { T: -1 },
	189: { T: 1 },
	190: { T: -1 },
	191: { T: 1 },
	192: { T: -1 },
	193: { T: 1 },
	194: { T: -1 },
	195: { T: 1 },
	196: { T: -1 },
	197: { T: 1 },
	198: { T: -1 },
	199: { T: 1 },
	200: { T: -1 },
	201: { T: 1 },
	202: { T: -1 },
	203: { T: 1 },
	204: { T: -1 },
	205: { T: 1 },
	206: { T: -1 },
	207: { T: 1 },
	208: { T: -1 },
	209: { T: 1 },
	210: { T: -1 },
	211: { T: 1 },
	212: { T: -1 },
	213: { T: 1 },
	214: { T: -1 },
	215: { T: 1 },
	216: { T: -1 },
	217: { T: 1 },
	218: { T: -1 },
	219: { T: 1 },
	220: { T: -1 },
	221: { T: 1 },
	222: { T: -1 },
	223: { T: 1 },
	224: { T: -1 },
	225: { T: 1 },
	226: { T: -1 },
	227: { T: 1 },
	228: { T: -1 },
	229: { T: 1 },
	230: { T: -1 },
	231: { T: 1 },
	232: { T: -1 },
	233: { T: 1 },
	234: { T: -1 },
	235: { T: 1 },
	236: { T: -1 },
	237: { T: 1 },
	238: { T: -1 },
	239: { T: 1 },
	240: { T: -1 },
	241: { T: 1 },
	242: { T: -1 },
	243: { T: 1 },
	244: { T: -1 },
	245: { T: 1 },
	246: { T: -1 },
	247: { T: 1 },
	248: { T: -1 },
	249: { T: 1 },
	250: { T: -1 },
	251: { T: 1 },
	252: { T: -1 },
	253: { T: 1 },
	254: { T: -1 },
	255: { T: 1 },
	256: { T: -1 },
	257: { T: 1 },
	258: { T: -1 },
	259: { T: 1 },
	260: { T: -1 },
	261: { T: 1 },
	262: { T: -1 },
	263: { T: 1 },
	264: { T: -1 },
	265: { T: 1 },
	266: { T: -1 },
	267: { T: 1 },
	268: { T: -1 },
	269: { T: 1 },
	270: { T: -1 },
	271: { T: 1 },
	272: { T: -1 },
	273: { T: 1 },
	274: { T: -1 },
	275: { T: 1 },
	276: { T: -1 },
	277: {},
	278: { T: 1 },
	279: { T: -1 },
	280: { T: 1 },
	281: { T: -1 },
	282: { T: 1 },
	283: { T: 1 },
	284: { T: -1 },
	285: { T: 1 },
	286: { T: -1 },
	287: { T: 1 },
	288: { T: -1 },
	289: { T: 1 },
	290: { T: -1 },
	291: { T: 1 },
	292: { T: -1 },
	293: { T: 1 },
	294: { T: -1 },
	295: { T: 1 },
	296: { T: -1 },
	297: { T: 1 },
	298: { T: -1 },
	299: { T: 1 },
	300: { T: -1 },
	301: { T: 1 },
	302: { T: -1 },
	303: { T: 1 },
	304: { T: -1 },
	305: { T: 1 },
	306: { T: -1 },
	307: { T: 1 },
	308: { T: -1 },
	309: { T: 1 },
	310: { T: -1 },
	311: { T: 1 },
	312: { T: -1 },
	313: { T: -1 },
	314: { T: 1 },
	315: { T: -1 },
	316: { T: 1 },
	317: { T: -1 },
	318: { T: 1 },
	319: { T: -1 },
	320: { T: 1 },
	321: { T: -1 },
	322: { T: 1 },
	323: { T: -1 },
	324: { T: 1 },
	325: { T: -1 },
	326: { T: 1 },
	327: { T: -1 },
	328: { T: 1 },
	329: { T: -1 },
	330: { T: 1 },
	331: { T: -1 },
	332: { T: 1 },
	333: { T: -1 },
	334: { T: 1 },
	335: { f: function(e, r) {
		return {
			flags: e.read_shift(4),
			version: e.read_shift(4),
			name: zt(e)
		};
	} },
	336: { T: -1 },
	337: {
		f: function(e) {
			return e.l += 4, 0 != e.read_shift(4);
		},
		T: 1
	},
	338: { T: -1 },
	339: { T: 1 },
	340: { T: -1 },
	341: { T: 1 },
	342: { T: -1 },
	343: { T: 1 },
	344: { T: -1 },
	345: { T: 1 },
	346: { T: -1 },
	347: { T: 1 },
	348: { T: -1 },
	349: { T: 1 },
	350: { T: -1 },
	351: {},
	352: {},
	353: { T: 1 },
	354: { T: -1 },
	355: { f: Zt },
	357: {},
	358: {},
	359: {},
	360: { T: 1 },
	361: {},
	362: { f: dn },
	363: {},
	364: {},
	366: {},
	367: {},
	368: {},
	369: {},
	370: {},
	371: {},
	372: { T: 1 },
	373: { T: -1 },
	374: { T: 1 },
	375: { T: -1 },
	376: { T: 1 },
	377: { T: -1 },
	378: { T: 1 },
	379: { T: -1 },
	380: { T: 1 },
	381: { T: -1 },
	382: { T: 1 },
	383: { T: -1 },
	384: { T: 1 },
	385: { T: -1 },
	386: { T: 1 },
	387: { T: -1 },
	388: { T: 1 },
	389: { T: -1 },
	390: { T: 1 },
	391: { T: -1 },
	392: { T: 1 },
	393: { T: -1 },
	394: { T: 1 },
	395: { T: -1 },
	396: {},
	397: {},
	398: {},
	399: {},
	400: {},
	401: { T: 1 },
	403: {},
	404: {},
	405: {},
	406: {},
	407: {},
	408: {},
	409: {},
	410: {},
	411: {},
	412: {},
	413: {},
	414: {},
	415: {},
	416: {},
	417: {},
	418: {},
	419: {},
	420: {},
	421: {},
	422: { T: 1 },
	423: { T: 1 },
	424: { T: -1 },
	425: { T: -1 },
	426: { f: function(e, r, t) {
		var a = e.l + r, n = Qt(e), s = e.read_shift(1), i = [n];
		return i[2] = s, t.cellFormula ? i[1] = ri(e, a - e.l, t) : e.l = a, i;
	} },
	427: { f: function(e, r, t) {
		var a = e.l + r, n = [ea(e, 16)];
		return t.cellFormula ? (n[1] = ni(e, a - e.l, t), e.l = a) : e.l = a, n;
	} },
	428: {},
	429: { T: 1 },
	430: { T: -1 },
	431: { T: 1 },
	432: { T: -1 },
	433: { T: 1 },
	434: { T: -1 },
	435: { T: 1 },
	436: { T: -1 },
	437: { T: 1 },
	438: { T: -1 },
	439: { T: 1 },
	440: { T: -1 },
	441: { T: 1 },
	442: { T: -1 },
	443: { T: 1 },
	444: { T: -1 },
	445: { T: 1 },
	446: { T: -1 },
	447: { T: 1 },
	448: { T: -1 },
	449: { T: 1 },
	450: { T: -1 },
	451: { T: 1 },
	452: { T: -1 },
	453: { T: 1 },
	454: { T: -1 },
	455: { T: 1 },
	456: { T: -1 },
	457: { T: 1 },
	458: { T: -1 },
	459: { T: 1 },
	460: { T: -1 },
	461: { T: 1 },
	462: { T: -1 },
	463: { T: 1 },
	464: { T: -1 },
	465: { T: 1 },
	466: { T: -1 },
	467: { T: 1 },
	468: { T: -1 },
	469: { T: 1 },
	470: { T: -1 },
	471: {},
	472: {},
	473: { T: 1 },
	474: { T: -1 },
	475: {},
	476: { f: function(e) {
		var r = {};
		return _i.forEach(function(t) {
			r[t] = ra(e);
		}), r;
	} },
	477: {},
	478: {},
	479: { T: 1 },
	480: { T: -1 },
	481: { T: 1 },
	482: { T: -1 },
	483: { T: 1 },
	484: { T: -1 },
	485: { f: function() {} },
	486: { T: 1 },
	487: { T: -1 },
	488: { T: 1 },
	489: { T: -1 },
	490: { T: 1 },
	491: { T: -1 },
	492: { T: 1 },
	493: { T: -1 },
	494: { f: function(e, r) {
		var t = e.l + r, a = ea(e, 16), n = Yt(e), s = zt(e), i = zt(e), c = zt(e);
		e.l = t;
		var o = {
			rfx: a,
			relId: n,
			loc: s,
			display: c
		};
		return i && (o.Tooltip = i), o;
	} },
	495: { T: 1 },
	496: { T: -1 },
	497: { T: 1 },
	498: { T: -1 },
	499: {},
	500: { T: 1 },
	501: { T: -1 },
	502: { T: 1 },
	503: { T: -1 },
	504: {},
	505: { T: 1 },
	506: { T: -1 },
	507: {},
	508: { T: 1 },
	509: { T: -1 },
	510: { T: 1 },
	511: { T: -1 },
	512: {},
	513: {},
	514: { T: 1 },
	515: { T: -1 },
	516: { T: 1 },
	517: { T: -1 },
	518: { T: 1 },
	519: { T: -1 },
	520: { T: 1 },
	521: { T: -1 },
	522: {},
	523: {},
	524: {},
	525: {},
	526: {},
	527: {},
	528: { T: 1 },
	529: { T: -1 },
	530: { T: 1 },
	531: { T: -1 },
	532: { T: 1 },
	533: { T: -1 },
	534: {},
	535: {},
	536: {},
	537: {},
	538: { T: 1 },
	539: { T: -1 },
	540: { T: 1 },
	541: { T: -1 },
	542: { T: 1 },
	548: {},
	549: {},
	550: { f: Zt },
	551: { f: Yt },
	552: {},
	553: {},
	554: { T: 1 },
	555: { T: -1 },
	556: { T: 1 },
	557: { T: -1 },
	558: { T: 1 },
	559: { T: -1 },
	560: { T: 1 },
	561: { T: -1 },
	562: {},
	564: {},
	565: { T: 1 },
	566: { T: -1 },
	569: { T: 1 },
	570: { T: -1 },
	572: {},
	573: { T: 1 },
	574: { T: -1 },
	577: {},
	578: {},
	579: {},
	580: {},
	581: {},
	582: {},
	583: {},
	584: {},
	585: {},
	586: {},
	587: {},
	588: { T: -1 },
	589: {},
	590: { T: 1 },
	591: { T: -1 },
	592: { T: 1 },
	593: { T: -1 },
	594: { T: 1 },
	595: { T: -1 },
	596: {},
	597: { T: 1 },
	598: { T: -1 },
	599: { T: 1 },
	600: { T: -1 },
	601: { T: 1 },
	602: { T: -1 },
	603: { T: 1 },
	604: { T: -1 },
	605: { T: 1 },
	606: { T: -1 },
	607: {},
	608: { T: 1 },
	609: { T: -1 },
	610: {},
	611: { T: 1 },
	612: { T: -1 },
	613: { T: 1 },
	614: { T: -1 },
	615: { T: 1 },
	616: { T: -1 },
	617: { T: 1 },
	618: { T: -1 },
	619: { T: 1 },
	620: { T: -1 },
	625: {},
	626: { T: 1 },
	627: { T: -1 },
	628: { T: 1 },
	629: { T: -1 },
	630: { T: 1 },
	631: { T: -1 },
	632: { f: ms },
	633: { T: 1 },
	634: { T: -1 },
	635: {
		T: 1,
		f: function(e) {
			var r = {};
			r.iauthor = e.read_shift(4);
			var t = ea(e, 16);
			return r.rfx = t.s, r.ref = Ft(t.s), e.l += 16, r;
		}
	},
	636: { T: -1 },
	637: { f: $t },
	638: { T: 1 },
	639: {},
	640: { T: -1 },
	641: { T: 1 },
	642: { T: -1 },
	643: { T: 1 },
	644: {},
	645: { T: -1 },
	646: { T: 1 },
	648: { T: 1 },
	649: {},
	650: { T: -1 },
	651: { f: function(e, r) {
		return e.l += 10, { name: zt(e) };
	} },
	652: {},
	653: { T: 1 },
	654: { T: -1 },
	655: { T: 1 },
	656: { T: -1 },
	657: { T: 1 },
	658: { T: -1 },
	659: {},
	660: { T: 1 },
	661: {},
	662: { T: -1 },
	663: {},
	664: { T: 1 },
	665: {},
	666: { T: -1 },
	667: {},
	668: {},
	669: {},
	671: { T: 1 },
	672: { T: -1 },
	673: { T: 1 },
	674: { T: -1 },
	675: {},
	676: {},
	677: {},
	678: {},
	679: {},
	680: {},
	681: {},
	1024: {},
	1025: {},
	1026: { T: 1 },
	1027: { T: -1 },
	1028: { T: 1 },
	1029: { T: -1 },
	1030: {},
	1031: { T: 1 },
	1032: { T: -1 },
	1033: { T: 1 },
	1034: { T: -1 },
	1035: {},
	1036: {},
	1037: {},
	1038: { T: 1 },
	1039: { T: -1 },
	1040: {},
	1041: { T: 1 },
	1042: { T: -1 },
	1043: {},
	1044: {},
	1045: {},
	1046: { T: 1 },
	1047: { T: -1 },
	1048: { T: 1 },
	1049: { T: -1 },
	1050: {},
	1051: { T: 1 },
	1052: { T: 1 },
	1053: { f: function() {} },
	1054: { T: 1 },
	1055: {},
	1056: { T: 1 },
	1057: { T: -1 },
	1058: { T: 1 },
	1059: { T: -1 },
	1061: {},
	1062: { T: 1 },
	1063: { T: -1 },
	1064: { T: 1 },
	1065: { T: -1 },
	1066: { T: 1 },
	1067: { T: -1 },
	1068: { T: 1 },
	1069: { T: -1 },
	1070: { T: 1 },
	1071: { T: -1 },
	1072: { T: 1 },
	1073: { T: -1 },
	1075: { T: 1 },
	1076: { T: -1 },
	1077: { T: 1 },
	1078: { T: -1 },
	1079: { T: 1 },
	1080: { T: -1 },
	1081: { T: 1 },
	1082: { T: -1 },
	1083: { T: 1 },
	1084: { T: -1 },
	1085: {},
	1086: { T: 1 },
	1087: { T: -1 },
	1088: { T: 1 },
	1089: { T: -1 },
	1090: { T: 1 },
	1091: { T: -1 },
	1092: { T: 1 },
	1093: { T: -1 },
	1094: { T: 1 },
	1095: { T: -1 },
	1096: {},
	1097: { T: 1 },
	1098: {},
	1099: { T: -1 },
	1100: { T: 1 },
	1101: { T: -1 },
	1102: {},
	1103: {},
	1104: {},
	1105: {},
	1111: {},
	1112: {},
	1113: { T: 1 },
	1114: { T: -1 },
	1115: { T: 1 },
	1116: { T: -1 },
	1117: {},
	1118: { T: 1 },
	1119: { T: -1 },
	1120: { T: 1 },
	1121: { T: -1 },
	1122: { T: 1 },
	1123: { T: -1 },
	1124: { T: 1 },
	1125: { T: -1 },
	1126: {},
	1128: { T: 1 },
	1129: { T: -1 },
	1130: {},
	1131: { T: 1 },
	1132: { T: -1 },
	1133: { T: 1 },
	1134: { T: -1 },
	1135: { T: 1 },
	1136: { T: -1 },
	1137: { T: 1 },
	1138: { T: -1 },
	1139: { T: 1 },
	1140: { T: -1 },
	1141: {},
	1142: { T: 1 },
	1143: { T: -1 },
	1144: { T: 1 },
	1145: { T: -1 },
	1146: {},
	1147: { T: 1 },
	1148: { T: -1 },
	1149: { T: 1 },
	1150: { T: -1 },
	1152: { T: 1 },
	1153: { T: -1 },
	1154: { T: -1 },
	1155: { T: -1 },
	1156: { T: -1 },
	1157: { T: 1 },
	1158: { T: -1 },
	1159: { T: 1 },
	1160: { T: -1 },
	1161: { T: 1 },
	1162: { T: -1 },
	1163: { T: 1 },
	1164: { T: -1 },
	1165: { T: 1 },
	1166: { T: -1 },
	1167: { T: 1 },
	1168: { T: -1 },
	1169: { T: 1 },
	1170: { T: -1 },
	1171: {},
	1172: { T: 1 },
	1173: { T: -1 },
	1177: {},
	1178: { T: 1 },
	1180: {},
	1181: {},
	1182: {},
	2048: { T: 1 },
	2049: { T: -1 },
	2050: {},
	2051: { T: 1 },
	2052: { T: -1 },
	2053: {},
	2054: {},
	2055: { T: 1 },
	2056: { T: -1 },
	2057: { T: 1 },
	2058: { T: -1 },
	2060: {},
	2067: {},
	2068: { T: 1 },
	2069: { T: -1 },
	2070: {},
	2071: {},
	2072: { T: 1 },
	2073: { T: -1 },
	2075: {},
	2076: {},
	2077: { T: 1 },
	2078: { T: -1 },
	2079: {},
	2080: { T: 1 },
	2081: { T: -1 },
	2082: {},
	2083: { T: 1 },
	2084: { T: -1 },
	2085: { T: 1 },
	2086: { T: -1 },
	2087: { T: 1 },
	2088: { T: -1 },
	2089: { T: 1 },
	2090: { T: -1 },
	2091: {},
	2092: {},
	2093: { T: 1 },
	2094: { T: -1 },
	2095: {},
	2096: { T: 1 },
	2097: { T: -1 },
	2098: { T: 1 },
	2099: { T: -1 },
	2100: { T: 1 },
	2101: { T: -1 },
	2102: {},
	2103: { T: 1 },
	2104: { T: -1 },
	2105: {},
	2106: { T: 1 },
	2107: { T: -1 },
	2108: {},
	2109: { T: 1 },
	2110: { T: -1 },
	2111: { T: 1 },
	2112: { T: -1 },
	2113: { T: 1 },
	2114: { T: -1 },
	2115: {},
	2116: {},
	2117: {},
	2118: { T: 1 },
	2119: { T: -1 },
	2120: {},
	2121: { T: 1 },
	2122: { T: -1 },
	2123: { T: 1 },
	2124: { T: -1 },
	2125: {},
	2126: { T: 1 },
	2127: { T: -1 },
	2128: {},
	2129: { T: 1 },
	2130: { T: -1 },
	2131: { T: 1 },
	2132: { T: -1 },
	2133: { T: 1 },
	2134: {},
	2135: {},
	2136: {},
	2137: { T: 1 },
	2138: { T: -1 },
	2139: { T: 1 },
	2140: { T: -1 },
	2141: {},
	3072: {},
	3073: {},
	4096: { T: 1 },
	4097: { T: -1 },
	5002: { T: 1 },
	5003: { T: -1 },
	5081: { T: 1 },
	5082: { T: -1 },
	5083: {},
	5084: { T: 1 },
	5085: { T: -1 },
	5086: { T: 1 },
	5087: { T: -1 },
	5088: {},
	5089: {},
	5090: {},
	5092: { T: 1 },
	5093: { T: -1 },
	5094: {},
	5095: { T: 1 },
	5096: { T: -1 },
	5097: {},
	5099: {},
	65535: { n: "" }
}, ac = {
	6: { f: Qs },
	10: { f: Pa },
	12: { f: La },
	13: { f: La },
	14: { f: Ma },
	15: { f: Ma },
	16: { f: ra },
	17: { f: Ma },
	18: { f: Ma },
	19: { f: La },
	20: { f: fn },
	21: { f: fn },
	23: { f: dn },
	24: { f: un },
	25: { f: Ma },
	26: {},
	27: {},
	28: { f: function(e, r, t) {
		if (t && t.biff < 8) {
			var a = e.read_shift(2), n = e.read_shift(2);
			if (65535 == a || -1 == a) return;
			var s = e.read_shift(2);
			return [{
				r: a,
				c: n
			}, e.read_shift(Math.min(s, 2048), "cpstr")];
		}
		return function(e, r, t) {
			var a = e.read_shift(2), n = e.read_shift(2), s = e.read_shift(2), i = e.read_shift(2);
			return [
				{
					r: a,
					c: n
				},
				Ga(e, 0, t),
				i,
				s
			];
		}(e, 0, t);
	} },
	29: {},
	34: { f: Ma },
	35: { f: hn },
	38: { f: ra },
	39: { f: ra },
	40: { f: ra },
	41: { f: ra },
	42: { f: Ma },
	43: { f: Ma },
	47: { f: function(e, r, t) {
		var a = { Type: t.biff >= 8 ? e.read_shift(2) : 0 };
		return a.Type ? function(e, r, t) {
			var a = t || {};
			a.Info = e.read_shift(2), e.l -= 2, 1 === a.Info ? a.Data = function(e) {
				var r = {}, t = r.EncryptionVersionInfo = Mn(e, 4);
				if (1 != t.Major || 1 != t.Minor) throw "unrecognized version code " + t.Major + " : " + t.Minor;
				return r.Salt = e.read_shift(16), r.EncryptedVerifier = e.read_shift(16), r.EncryptedVerifierHash = e.read_shift(16), r;
			}(e) : a.Data = function(e, r) {
				var t = {}, a = t.EncryptionVersionInfo = Mn(e, 4);
				if (r -= 4, 2 != a.Minor) throw new Error("unrecognized minor version code: " + a.Minor);
				if (a.Major > 4 || a.Major < 2) throw new Error("unrecognized major version code: " + a.Major);
				t.Flags = e.read_shift(4), r -= 4;
				var n = e.read_shift(4);
				return r -= 4, t.EncryptionHeader = Un(e, n), r -= n, t.EncryptionVerifier = Bn(e, r), t;
			}(e, r);
		}(e, r - 2, a) : Gn(e, t.biff, t, a), a;
	} },
	49: { f: function(e, r, t) {
		var a = {
			dyHeight: e.read_shift(2),
			fl: e.read_shift(2)
		};
		switch (t && t.biff || 8) {
			case 2: break;
			case 3:
			case 4:
				e.l += 2;
				break;
			default: e.l += 10;
		}
		return a.name = Ha(e, 0, t), a;
	} },
	51: { f: La },
	60: {},
	61: { f: function(e) {
		return {
			Pos: [e.read_shift(2), e.read_shift(2)],
			Dim: [e.read_shift(2), e.read_shift(2)],
			Flags: e.read_shift(2),
			CurTab: e.read_shift(2),
			FirstTab: e.read_shift(2),
			Selected: e.read_shift(2),
			TabRatio: e.read_shift(2)
		};
	} },
	64: { f: Ma },
	65: { f: function() {} },
	66: { f: La },
	77: {},
	80: {},
	81: {},
	82: {},
	85: { f: La },
	89: {},
	90: {},
	91: {},
	92: { f: function(e, r, t) {
		if (t.enc) return e.l += r, "";
		var a = e.l, n = Ga(e, 0, t);
		return e.read_shift(r + a - e.l), n;
	} },
	93: { f: function(e, r, t) {
		if (t && t.biff < 8) return function(e, r, t) {
			e.l += 4;
			var a = e.read_shift(2), n = e.read_shift(2), s = e.read_shift(2);
			e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 6, r -= 36;
			var i = [];
			return i.push((vn[a] || wt)(e, r, t)), {
				cmo: [
					n,
					a,
					s
				],
				ft: i
			};
		}(e, r, t);
		var a = rn(e);
		return {
			cmo: a,
			ft: nn(e, r - 22, a[1])
		};
	} },
	94: {},
	95: { f: Ma },
	96: {},
	97: {},
	99: { f: Ma },
	125: { f: gn },
	128: { f: function(e) {
		e.l += 4;
		var r = [e.read_shift(2), e.read_shift(2)];
		if (0 !== r[0] && r[0]--, 0 !== r[1] && r[1]--, r[0] > 7 || r[1] > 7) throw new Error("Bad Gutters: " + r.join("|"));
		return r;
	} },
	129: { f: function(e, r, t) {
		var a = t && 8 == t.biff || 2 == r ? e.read_shift(2) : (e.l += r, 0);
		return {
			fDialog: 16 & a,
			fBelow: 64 & a,
			fRight: 128 & a
		};
	} },
	130: { f: La },
	131: { f: Ma },
	132: { f: Ma },
	133: { f: function(e, r, t) {
		var a = "";
		if (4 == t.biff) return 0 === (a = Ha(e, 0, t)).length && (a = "Sheet1"), { name: a };
		var n = e.read_shift(4), s = 3 & e.read_shift(1), i = e.read_shift(1);
		switch (i) {
			case 0:
				i = "Worksheet";
				break;
			case 1:
				i = "Macrosheet";
				break;
			case 2:
				i = "Chartsheet";
				break;
			case 6: i = "VBAModule";
		}
		return 0 === (a = Ha(e, 0, t)).length && (a = "Sheet1"), {
			pos: n,
			hs: s,
			dt: i,
			name: a
		};
	} },
	134: {},
	140: { f: function(e) {
		var r = [0, 0], t = e.read_shift(2);
		return r[0] = ca[t] || t, t = e.read_shift(2), r[1] = ca[t] || t, r;
	} },
	141: { f: La },
	144: {},
	146: { f: function(e) {
		for (var r = e.read_shift(2), t = []; r-- > 0;) t.push(Ka(e));
		return t;
	} },
	151: {},
	152: {},
	153: {},
	154: {},
	155: {},
	156: { f: La },
	157: {},
	158: {},
	160: { f: Tn },
	161: { f: function(e, r) {
		var t = {};
		return r < 32 || (e.l += 16, t.header = ra(e), t.footer = ra(e), e.l += 2), t;
	} },
	174: {},
	175: {},
	176: {},
	177: {},
	178: {},
	180: {},
	181: {},
	182: {},
	184: {},
	185: {},
	189: { f: function(e, r) {
		for (var t = e.l + r - 2, a = e.read_shift(2), n = e.read_shift(2), s = []; e.l < t;) s.push(Za(e));
		if (e.l !== t) throw new Error("MulRK read error");
		var i = e.read_shift(2);
		if (s.length != i - n + 1) throw new Error("MulRK length mismatch");
		return {
			r: a,
			c: n,
			C: i,
			rkrec: s
		};
	} },
	190: { f: function(e, r) {
		for (var t = e.l + r - 2, a = e.read_shift(2), n = e.read_shift(2), s = []; e.l < t;) s.push(e.read_shift(2));
		if (e.l !== t) throw new Error("MulBlank read error");
		var i = e.read_shift(2);
		if (s.length != i - n + 1) throw new Error("MulBlank length mismatch");
		return {
			r: a,
			c: n,
			C: i,
			ixfe: s
		};
	} },
	193: { f: Pa },
	197: {},
	198: {},
	199: {},
	200: {},
	201: {},
	202: { f: Ma },
	203: {},
	204: {},
	205: {},
	206: {},
	207: {},
	208: {},
	209: {},
	210: {},
	211: {},
	213: {},
	215: {},
	216: {},
	217: {},
	218: { f: La },
	220: {},
	221: { f: Ma },
	222: {},
	224: { f: function(e, r, t) {
		var a = {};
		return a.ifnt = e.read_shift(2), a.numFmtId = e.read_shift(2), a.flags = e.read_shift(2), a.fStyle = a.flags >> 2 & 1, a.data = function(e, r, t, a) {
			var n = {}, s = e.read_shift(4), i = e.read_shift(4), c = e.read_shift(4), o = e.read_shift(2);
			return n.patternType = oa[c >> 26], a.cellStyles ? (n.alc = 7 & s, n.fWrap = s >> 3 & 1, n.alcV = s >> 4 & 7, n.fJustLast = s >> 7 & 1, n.trot = s >> 8 & 255, n.cIndent = s >> 16 & 15, n.fShrinkToFit = s >> 20 & 1, n.iReadOrder = s >> 22 & 2, n.fAtrNum = s >> 26 & 1, n.fAtrFnt = s >> 27 & 1, n.fAtrAlc = s >> 28 & 1, n.fAtrBdr = s >> 29 & 1, n.fAtrPat = s >> 30 & 1, n.fAtrProt = s >> 31 & 1, n.dgLeft = 15 & i, n.dgRight = i >> 4 & 15, n.dgTop = i >> 8 & 15, n.dgBottom = i >> 12 & 15, n.icvLeft = i >> 16 & 127, n.icvRight = i >> 23 & 127, n.grbitDiag = i >> 30 & 3, n.icvTop = 127 & c, n.icvBottom = c >> 7 & 127, n.icvDiag = c >> 14 & 127, n.dgDiag = c >> 21 & 15, n.icvFore = 127 & o, n.icvBack = o >> 7 & 127, n.fsxButton = o >> 14 & 1, n) : n;
		}(e, 0, a.fStyle, t), a;
	} },
	225: { f: function(e, r) {
		return 0 === r || e.read_shift(2), 1200;
	} },
	226: { f: Pa },
	227: {},
	229: { f: function(e, r) {
		for (var t = [], a = e.read_shift(2); a--;) t.push(qa(e));
		return t;
	} },
	233: {},
	235: {},
	236: {},
	237: {},
	239: {},
	240: {},
	241: {},
	242: {},
	244: {},
	245: {},
	246: {},
	247: {},
	248: {},
	249: {},
	251: {},
	252: { f: function(e, r) {
		for (var t = e.l + r, a = e.read_shift(4), n = e.read_shift(4), s = [], i = 0; i != n && e.l < t; ++i) s.push(Wa(e));
		return s.Count = a, s.Unique = n, s;
	} },
	253: { f: function(e, r, t) {
		var a = Ya(e, r, t);
		return a.isst = e.read_shift(4), a;
	} },
	255: { f: function(e, r) {
		var t = {};
		return t.dsst = e.read_shift(2), e.l += r - 2, t;
	} },
	256: {},
	259: {},
	290: {},
	311: {},
	312: {},
	315: {},
	317: { f: Ua },
	318: {},
	319: {},
	320: {},
	330: {},
	331: {},
	333: {},
	334: {},
	335: {},
	336: {},
	337: {},
	338: {},
	339: {},
	340: {},
	351: {},
	352: { f: Ma },
	353: { f: Pa },
	401: {},
	402: {},
	403: {},
	404: {},
	405: {},
	406: {},
	407: {},
	408: {},
	425: {},
	426: {},
	427: {},
	428: {},
	429: {},
	430: { f: function(e, r, t) {
		var a = e.l + r, n = e.read_shift(2), s = e.read_shift(2);
		if (t.sbcch = s, 1025 == s || 14849 == s) return [s, n];
		if (s < 1 || s > 255) throw new Error("Unexpected SupBook type: " + s);
		for (var i = za(e, s), c = []; a > e.l;) c.push(Va(e));
		return [
			s,
			n,
			i,
			c
		];
	} },
	431: { f: Ma },
	432: {},
	433: {},
	434: {},
	437: {},
	438: { f: function(e, r, t) {
		var a = e.l, n = "";
		try {
			e.l += 4;
			var s = (t.lastobj || { cmo: [0, 0] }).cmo[1];
			-1 == [
				0,
				5,
				7,
				11,
				12,
				14
			].indexOf(s) ? e.l += 6 : function(e) {
				e.read_shift(1);
				e.l++;
				e.read_shift(2);
				e.l += 2;
			}(e);
			var i = e.read_shift(2);
			e.read_shift(2), La(e);
			var c = e.read_shift(2);
			e.l += c;
			for (var o = 1; o < e.lens.length - 1; ++o) {
				if (e.l - a != e.lens[o]) throw new Error("TxO: bad continue record");
				var l = e[e.l];
				if ((n += za(e, e.lens[o + 1] - e.lens[o] - 1)).length >= (l ? i : 2 * i)) break;
			}
			if (n.length !== i && n.length !== 2 * i) throw new Error("cchText: " + i + " != " + n.length);
			return e.l = a + r, { t: n };
		} catch (ao) {
			return e.l = a + r, { t: n };
		}
	} },
	439: { f: Ma },
	440: { f: function(e, r) {
		var t = qa(e);
		return e.l += 16, [t, Xa(e, r - 24)];
	} },
	441: {},
	442: { f: Va },
	443: {},
	444: { f: La },
	445: {},
	446: {},
	448: { f: Pa },
	449: {
		f: function(e) {
			return e.read_shift(2), e.read_shift(4);
		},
		r: 2
	},
	450: { f: Pa },
	512: { f: ln },
	513: { f: bn },
	515: { f: function(e, r, t) {
		t.biffguess && 2 == t.biff && (t.biff = 5);
		var a = Ya(e, 6, t);
		return a.val = ra(e), a;
	} },
	516: { f: function(e, r, t) {
		t.biffguess && 2 == t.biff && (t.biff = 5), e.l;
		var a = Ya(e, r, t);
		return a.val = Va(e, e.l, t), a;
	} },
	517: { f: function(e, r, t) {
		var a = Ya(e, 6, t), n = Ba(e);
		return a.val = n, a.t = !0 === n || !1 === n ? "b" : "e", a;
	} },
	519: { f: En },
	520: { f: function(e) {
		var r = {};
		r.r = e.read_shift(2), r.c = e.read_shift(2), r.cnt = e.read_shift(2) - r.c;
		var t = e.read_shift(2);
		e.l += 4;
		var a = e.read_shift(1);
		return e.l += 3, 7 & a && (r.level = 7 & a), 32 & a && (r.hidden = !0), 64 & a && (r.hpt = t / 20), r;
	} },
	523: {},
	545: { f: mn },
	549: { f: cn },
	566: {},
	574: { f: function(e, r, t) {
		return t && t.biff >= 2 && t.biff < 5 ? {} : { RTL: 64 & e.read_shift(2) };
	} },
	638: { f: function(e) {
		var r = e.read_shift(2), t = e.read_shift(2), a = Za(e);
		return {
			r,
			c: t,
			ixfe: a[0],
			rknum: a[1]
		};
	} },
	659: {},
	1048: {},
	1054: { f: function(e, r, t) {
		return [e.read_shift(2), Ga(e, 0, t)];
	} },
	1084: {},
	1212: { f: function(e, r, t) {
		var a = Qa(e);
		e.l++;
		var n = e.read_shift(1);
		return [
			qs(e, r -= 8, t),
			n,
			a
		];
	} },
	2048: { f: function(e, r) {
		e.read_shift(2);
		var t = qa(e), a = e.read_shift((r - 10) / 2, "dbcs-cont");
		return [t, a = a.replace(S, "")];
	} },
	2049: {},
	2050: {},
	2051: {},
	2052: {},
	2053: {},
	2054: {},
	2055: {},
	2056: {},
	2057: { f: sn },
	2058: {},
	2059: {},
	2060: {},
	2061: {},
	2062: {},
	2063: {},
	2064: {},
	2066: {},
	2067: {},
	2128: {},
	2129: {},
	2130: {},
	2131: {},
	2132: {},
	2133: {},
	2134: {},
	2135: {},
	2136: {},
	2137: {},
	2138: {},
	2146: {},
	2147: { r: 12 },
	2148: {},
	2149: {},
	2150: {},
	2151: { f: Pa },
	2152: {},
	2154: {},
	2155: {},
	2156: {},
	2161: {},
	2162: {},
	2164: {},
	2165: {},
	2166: {},
	2167: {},
	2168: {},
	2169: {},
	2170: {},
	2171: {},
	2172: {
		f: function(e) {
			e.l += 2;
			var r = {
				cxfs: 0,
				crc: 0
			};
			return r.cxfs = e.read_shift(2), r.crc = e.read_shift(4), r;
		},
		r: 12
	},
	2173: {
		f: function(e, r) {
			e.l, e.l += 2;
			var t = e.read_shift(2);
			e.l += 2;
			for (var a = e.read_shift(2), n = []; a-- > 0;) n.push(us(e, e.l));
			return {
				ixfe: t,
				ext: n
			};
		},
		r: 12
	},
	2174: {},
	2175: {},
	2180: {},
	2181: {},
	2182: {},
	2183: {},
	2184: {},
	2185: {},
	2186: {},
	2187: {},
	2188: {
		f: Ma,
		r: 12
	},
	2189: {},
	2190: { r: 12 },
	2191: {},
	2192: {},
	2194: {},
	2195: {},
	2196: {
		f: function(e, r, t) {
			if (!(t.biff < 8)) {
				var a = e.read_shift(2), n = e.read_shift(2);
				return [za(e, a, t), za(e, n, t)];
			}
			e.l += r;
		},
		r: 12
	},
	2197: {},
	2198: {
		f: function(e, r, t) {
			var a = e.l + r;
			if (124226 !== e.read_shift(4)) if (t.cellStyles) {
				var n, s = e.slice(e.l);
				e.l = a;
				try {
					n = cr(s, { type: "array" });
				} catch (ao) {
					return;
				}
				var i = nr(n, "theme/theme/theme1.xml", !0);
				if (i) return hs(i, t);
			} else e.l = a;
		},
		r: 12
	},
	2199: {},
	2200: {},
	2201: {},
	2202: {
		f: function(e) {
			return [
				0 !== e.read_shift(4),
				0 !== e.read_shift(4),
				e.read_shift(4)
			];
		},
		r: 12
	},
	2203: { f: Pa },
	2204: {},
	2205: {},
	2206: {},
	2207: {},
	2211: { f: function(e) {
		var r = function(e) {
			var r = e.read_shift(2), t = e.read_shift(2);
			return e.l += 8, {
				type: r,
				flags: t
			};
		}(e);
		if (2211 != r.type) throw new Error("Invalid Future Record " + r.type);
		return 0 !== e.read_shift(4);
	} },
	2212: {},
	2213: {},
	2214: {},
	2215: {},
	4097: {},
	4098: {},
	4099: {},
	4102: {},
	4103: {},
	4105: {},
	4106: {},
	4107: {},
	4108: {},
	4109: {},
	4116: {},
	4117: {},
	4118: {},
	4119: {},
	4120: {},
	4121: {},
	4122: {},
	4123: {},
	4124: {},
	4125: {},
	4126: {},
	4127: {},
	4128: {},
	4129: {},
	4130: {},
	4132: {},
	4133: {},
	4134: { f: La },
	4135: {},
	4146: {},
	4147: {},
	4148: {},
	4149: {},
	4154: {},
	4156: {},
	4157: {},
	4158: {},
	4159: {},
	4160: {},
	4161: {},
	4163: {},
	4164: { f: function(e, r, t) {
		var a = { area: !1 };
		if (5 != t.biff) return e.l += r, a;
		var n = e.read_shift(1);
		return e.l += 3, 16 & n && (a.area = !0), a;
	} },
	4165: {},
	4166: {},
	4168: {},
	4170: {},
	4171: {},
	4174: {},
	4175: {},
	4176: {},
	4177: {},
	4187: {},
	4188: { f: function(e) {
		for (var r = e.read_shift(2), t = []; r-- > 0;) t.push(Ka(e));
		return t;
	} },
	4189: {},
	4191: {},
	4192: {},
	4193: {},
	4194: {},
	4195: {},
	4196: {},
	4197: {},
	4198: {},
	4199: {},
	4200: {},
	0: { f: ln },
	1: {},
	2: { f: function(e, r, t) {
		var a = Ya(e, 7, t), n = e.read_shift(2);
		return a.t = "n", a.val = n, a;
	} },
	3: { f: function(e, r, t) {
		var a = Ya(e, 7, t), n = ra(e);
		return a.t = "n", a.val = n, a;
	} },
	4: { f: function(e, r, t) {
		t.biffguess && 5 == t.biff && (t.biff = 2);
		var a = Ya(e, 7, t), n = Ga(e, 0, t);
		return a.t = "str", a.val = n, a;
	} },
	5: { f: function(e, r, t) {
		var a = e.l + 7, n = Ya(e, 6, t);
		e.l = a;
		var s = Ba(e);
		return n.val = s, n.t = !0 === s || !1 === s ? "b" : "e", n;
	} },
	7: { f: function(e) {
		var r = e.read_shift(1);
		return 0 === r ? (e.l++, "") : e.read_shift(r, "sbcs-cont");
	} },
	8: {},
	9: { f: sn },
	11: {},
	22: { f: La },
	30: { f: on },
	31: {},
	32: {},
	33: { f: mn },
	36: {},
	37: { f: cn },
	50: { f: function(e, r) {
		e.l += 6, e.l += 2, e.l += 1, e.l += 3, e.l += 1, e.l += r - 13;
	} },
	62: {},
	52: {},
	67: { f: function(e) {
		var r = {};
		return r.ifnt = e.read_shift(1), e.l++, r.flags = e.read_shift(1), r.numFmtId = 63 & r.flags, r.flags >>= 6, r.fStyle = 0, r.data = {}, r;
	} },
	68: { f: La },
	69: {},
	86: {},
	126: {},
	127: { f: function(e) {
		var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(4), n = {
			fmt: r,
			env: t,
			len: a,
			data: e.slice(e.l, e.l + a)
		};
		return e.l += a, n;
	} },
	135: {},
	136: {},
	137: {},
	143: { f: function(e) {
		var r = e.read_shift(4), t = e.read_shift(1), a = e.read_shift(t, "sbcs");
		return 0 === a.length && (a = "Sheet1"), {
			flags: r,
			name: a
		};
	} },
	145: {},
	148: {},
	149: {},
	150: {},
	169: {},
	171: {},
	188: {},
	191: {},
	192: {},
	194: {},
	195: {},
	214: { f: function(e, r, t) {
		var a = e.l + r, n = Ya(e, 6, t), s = za(e, e.read_shift(2), t);
		return e.l = a, n.t = "str", n.val = s, n;
	} },
	223: {},
	234: {},
	354: {},
	421: {},
	518: { f: Qs },
	521: { f: sn },
	536: { f: un },
	547: { f: hn },
	561: {},
	579: { f: function(e) {
		var r = {};
		return r.ifnt = e.read_shift(1), r.numFmtId = e.read_shift(1), r.flags = e.read_shift(2), r.fStyle = r.flags >> 2 & 1, r.data = {}, r;
	} },
	1030: { f: Qs },
	1033: { f: sn },
	1091: { f: function(e) {
		var r = {};
		return r.ifnt = e.read_shift(1), r.numFmtId = e.read_shift(1), r.flags = e.read_shift(2), r.fStyle = r.flags >> 2 & 1, r.data = {}, r;
	} },
	2157: {},
	2163: {},
	2177: {},
	2240: {},
	2241: {},
	2242: {},
	2243: {},
	2244: {},
	2245: {},
	2246: {},
	2247: {},
	2248: {},
	2249: {},
	2250: {},
	2251: {},
	2262: { r: 12 },
	101: {},
	102: {},
	105: {},
	106: {},
	107: {},
	109: {},
	112: {},
	114: {},
	29282: {}
};
function nc(e, r, t, a) {
	var n = r;
	if (!isNaN(n)) {
		var s = a || (t || []).length || 0, i = e.next(4);
		i.write_shift(2, n), i.write_shift(2, s), s > 0 && ct(t) && e.push(t);
	}
}
function sc(e, r) {
	var t = r || {}, a = null != t.dense ? t.dense : null, n = {};
	a && (n["!data"] = []);
	var s = (e = Xe(e, "<!--", "-->")).match(/<table/i);
	if (!s) throw new Error("Invalid HTML: could not find <table>");
	var i = e.match(/<\/table/i), c = s.index, o = i && i.index || e.length, l = We(e.slice(c, o), /(:?<tr[^<>]*>)/i, "<tr>"), f = -1, h = 0, u = 0, d = 0, p = {
		s: {
			r: 1e7,
			c: 1e7
		},
		e: {
			r: 0,
			c: 0
		}
	}, m = [];
	for (c = 0; c < l.length; ++c) {
		var v = l[c].trim(), g = v.slice(0, 3).toLowerCase();
		if ("<tr" != g) {
			if ("<td" == g || "<th" == g) {
				var b = v.split(/<\/t[dh]>/i);
				for (o = 0; o < b.length; ++o) {
					var T = b[o].trim();
					if (T.match(/<t[dh]/i)) {
						for (var E = T, w = 0; "<" == E.charAt(0) && (w = E.indexOf(">")) > -1;) E = E.slice(w + 1);
						for (var A = 0; A < m.length; ++A) {
							var k = m[A];
							k.s.c == h && k.s.r < f && f <= k.e.r && (h = k.e.c + 1, A = -1);
						}
						var S = mr(T.slice(0, T.indexOf(">")));
						d = S.colspan ? +S.colspan : 1, ((u = +S.rowspan) > 1 || d > 1) && m.push({
							s: {
								r: f,
								c: h
							},
							e: {
								r: f + (u || 1) - 1,
								c: h + d - 1
							}
						});
						var y = S.t || S["data-t"] || "";
						if (E.length) if (E = Nr(E), p.s.r > f && (p.s.r = f), p.e.r < f && (p.e.r = f), p.s.c > h && (p.s.c = h), p.e.c < h && (p.e.c = h), E.length) {
							var C = {
								t: "s",
								v: E
							};
							t.raw || !E.trim().length || "s" == y || ("TRUE" === E ? C = {
								t: "b",
								v: !0
							} : "FALSE" === E ? C = {
								t: "b",
								v: !1
							} : isNaN(Fe(E)) ? isNaN(He(E).getDate()) ? 35 == E.charCodeAt(0) && null != ua[E] && (C.t = "e", C.w = E, C.v = ua[E]) : (C = {
								t: "d",
								v: Re(E)
							}, !1 === t.UTC && (C.v = ze(C.v)), t.cellDates || (C = {
								t: "n",
								v: Se(C.v)
							}), C.z = t.dateNF || P[14]) : C = {
								t: "n",
								v: Fe(E)
							}), !1 !== C.cellText && (C.w = E), a ? (n["!data"][f] || (n["!data"][f] = []), n["!data"][f][h] = C) : n[Ft({
								r: f,
								c: h
							})] = C, h += d;
						} else h += d;
						else h += d;
					}
				}
			}
		} else {
			if (++f, t.sheetRows && t.sheetRows <= f) {
				--f;
				break;
			}
			h = 0;
		}
	}
	return n["!ref"] = Mt(p), m.length && (n["!merges"] = m), n;
}
function ic(e, r, t, a) {
	for (var n = e["!merges"] || [], s = [], i = {}, c = null != e["!data"], o = r.s.c; o <= r.e.c; ++o) {
		for (var l = 0, f = 0, h = 0; h < n.length; ++h) if (!(n[h].s.r > t || n[h].s.c > o || n[h].e.r < t || n[h].e.c < o)) {
			if (n[h].s.r < t || n[h].s.c < o) {
				l = -1;
				break;
			}
			l = n[h].e.r - n[h].s.r + 1, f = n[h].e.c - n[h].s.c + 1;
			break;
		}
		if (!(l < 0)) {
			var u = Nt(o) + Rt(t), d = c ? (e["!data"][t] || [])[o] : e[u];
			d && "n" == d.t && null != d.v && !isFinite(d.v) && (d = isNaN(d.v) ? {
				t: "e",
				v: 36,
				w: ha[36]
			} : {
				t: "e",
				v: 7,
				w: ha[7]
			});
			var p = d && null != d.v && (d.h || kr(d.w || (Ut(d), d.w) || "")) || "";
			i = {}, l > 1 && (i.rowspan = l), f > 1 && (i.colspan = f), a.editable ? p = "<span contenteditable=\"true\">" + p + "</span>" : d && (i["data-t"] = d && d.t || "z", null != d.v && (i["data-v"] = kr(d.v instanceof Date ? d.v.toISOString() : d.v)), null != d.z && (i["data-z"] = d.z), d.l && "#" != (d.l.Target || "#").charAt(0) && (p = "<a href=\"" + kr(d.l.Target) + "\">" + p + "</a>")), i.id = (a.id || "sjs") + "-" + u, s.push(Lr("td", p, i));
		}
	}
	return "<tr>" + s.join("") + "</tr>";
}
function cc(e, r, t) {
	var a = r.rows;
	if (!a) throw "Unsupported origin when " + r.tagName + " is not a TABLE";
	var n = t || {}, s = null != e["!data"], i = 0, c = 0;
	if (null != n.origin) if ("number" == typeof n.origin) i = n.origin;
	else {
		var o = "string" == typeof n.origin ? Dt(n.origin) : n.origin;
		i = o.r, c = o.c;
	}
	var l = Math.min(n.sheetRows || 1e7, a.length), f = {
		s: {
			r: 0,
			c: 0
		},
		e: {
			r: i,
			c
		}
	};
	if (e["!ref"]) {
		var h = Pt(e["!ref"]);
		f.s.r = Math.min(f.s.r, h.s.r), f.s.c = Math.min(f.s.c, h.s.c), f.e.r = Math.max(f.e.r, h.e.r), f.e.c = Math.max(f.e.c, h.e.c), -1 == i && (f.e.r = i = h.e.r + 1);
	}
	var u = [], d = 0, p = e["!rows"] || (e["!rows"] = []), m = 0, v = 0, g = 0, b = 0, T = 0, E = 0;
	for (e["!cols"] || (e["!cols"] = []); m < a.length && v < l; ++m) {
		var w = a[m];
		if (lc(w)) {
			if (n.display) continue;
			p[v] = { hidden: !0 };
		}
		var A = w.cells;
		for (g = b = 0; g < A.length; ++g) {
			var k = A[g];
			if (!n.display || !lc(k)) {
				var S = k.hasAttribute("data-v") ? k.getAttribute("data-v") : k.hasAttribute("v") ? k.getAttribute("v") : Nr(k.innerHTML), y = k.getAttribute("data-z") || k.getAttribute("z");
				for (d = 0; d < u.length; ++d) {
					var C = u[d];
					C.s.c == b + c && C.s.r < v + i && v + i <= C.e.r && (b = C.e.c + 1 - c, d = -1);
				}
				E = +k.getAttribute("colspan") || 1, ((T = +k.getAttribute("rowspan") || 1) > 1 || E > 1) && u.push({
					s: {
						r: v + i,
						c: b + c
					},
					e: {
						r: v + i + (T || 1) - 1,
						c: b + c + (E || 1) - 1
					}
				});
				var _ = {
					t: "s",
					v: S
				}, x = k.getAttribute("data-t") || k.getAttribute("t") || "";
				null != S && (0 == S.length ? _.t = x || "z" : n.raw || 0 == S.trim().length || "s" == x || ("e" == x && ha[+S] ? _ = {
					t: "e",
					v: +S,
					w: ha[+S]
				} : "TRUE" === S ? _ = {
					t: "b",
					v: !0
				} : "FALSE" === S ? _ = {
					t: "b",
					v: !1
				} : isNaN(Fe(S)) ? isNaN(He(S).getDate()) ? 35 == S.charCodeAt(0) && null != ua[S] && (_ = {
					t: "e",
					v: ua[S],
					w: S
				}) : (_ = {
					t: "d",
					v: Re(S)
				}, n.UTC && (_.v = Ve(_.v)), n.cellDates || (_ = {
					t: "n",
					v: Se(_.v)
				}), _.z = n.dateNF || P[14]) : _ = {
					t: "n",
					v: Fe(S)
				})), void 0 === _.z && null != y && (_.z = y);
				var O = "", R = k.getElementsByTagName("A");
				if (R && R.length) for (var I = 0; I < R.length && (!R[I].hasAttribute("href") || "#" == (O = R[I].getAttribute("href")).charAt(0)); ++I);
				O && "#" != O.charAt(0) && "javascript:" != O.slice(0, 11).toLowerCase() && (_.l = { Target: O }), s ? (e["!data"][v + i] || (e["!data"][v + i] = []), e["!data"][v + i][b + c] = _) : e[Ft({
					c: b + c,
					r: v + i
				})] = _, f.e.c < b + c && (f.e.c = b + c), b += E;
			}
		}
		++v;
	}
	return u.length && (e["!merges"] = (e["!merges"] || []).concat(u)), f.e.r = Math.max(f.e.r, v - 1 + i), e["!ref"] = Mt(f), v >= l && (e["!fullref"] = Mt((f.e.r = a.length - m + v - 1 + i, f))), e;
}
function oc(e, r) {
	var t = {};
	return (r || {}).dense && (t["!data"] = []), cc(t, e, r);
}
function lc(e) {
	var r = "", t = function(e) {
		return e.ownerDocument.defaultView && "function" == typeof e.ownerDocument.defaultView.getComputedStyle ? e.ownerDocument.defaultView.getComputedStyle : "function" == typeof getComputedStyle ? getComputedStyle : null;
	}(e);
	return t && (r = t(e).getPropertyValue("display")), r || (r = e.style && e.style.display), "none" === r;
}
function fc(e) {
	return [Er(e.replace(/[\t\r\n]/g, " ").trim().replace(/ +/g, " ").replace(/<text:s\/>/g, " ").replace(/<text:s text:c="(\d+)"\/>/g, function(e, r) {
		return Array(parseInt(r, 10) + 1).join(" ");
	}).replace(/<text:tab[^<>]*\/>/g, "	").replace(/<text:line-break\/>/g, "\n").replace(/<[^<>]*>/g, ""))];
}
function hc(e, r, t) {
	var a = t || {}, n = Ur(e);
	Br.lastIndex = 0, n = Ge(Xe(n, "<!--", "-->"));
	for (var s, i, c, o = "", l = "", f = 0, h = -1, u = ""; s = Br.exec(n);) switch (s[3] = s[3].replace(/_[\s\S]*$/, "")) {
		case "number-style":
		case "currency-style":
		case "percentage-style":
		case "date-style":
		case "time-style":
		case "text-style":
			"/" === s[1] ? ("false" == i["truncate-on-overflow"] && (o.match(/h/) ? o = o.replace(/h+/, "[$&]") : o.match(/m/) ? o = o.replace(/m+/, "[$&]") : o.match(/s/) && (o = o.replace(/s+/, "[$&]"))), a[i.name] = o, o = "") : "/" !== s[0].charAt(s[0].length - 2) && (o = "", i = mr(s[0], !1));
			break;
		case "boolean-style":
			"/" === s[1] ? (a[i.name] = "General", o = "") : "/" !== s[0].charAt(s[0].length - 2) && (o = "", i = mr(s[0], !1));
			break;
		case "boolean":
			o += "General";
			break;
		case "text":
			"/" === s[1] ? "%" == (u = n.slice(h, Br.lastIndex - s[0].length)) && "<number:percentage-style" == i[0] ? o += "%" : o += "\"" + u.replace(/"/g, "\"\"") + "\"" : "/" !== s[0].charAt(s[0].length - 2) && (h = Br.lastIndex);
			break;
		case "day":
			"short" === (c = mr(s[0], !1)).style ? o += "d" : o += "dd";
			break;
		case "day-of-week":
			switch ((c = mr(s[0], !1)).style) {
				case "short":
				default:
					o += "ddd";
					break;
				case "long": o += "dddd";
			}
			break;
		case "era":
			"short" === (c = mr(s[0], !1)).style ? o += "ee" : o += "eeee";
			break;
		case "hours":
			"short" === (c = mr(s[0], !1)).style ? o += "h" : o += "hh";
			break;
		case "minutes":
			"short" === (c = mr(s[0], !1)).style ? o += "m" : o += "mm";
			break;
		case "month":
			switch ((c = mr(s[0], !1)).textual && (o += "mm"), c.style) {
				case "short":
				default:
					o += "m";
					break;
				case "long": o += "mm";
			}
			break;
		case "seconds":
			"short" === (c = mr(s[0], !1)).style ? o += "s" : o += "ss", c["decimal-places"] && (o += "." + De("0", +c["decimal-places"]));
			break;
		case "year":
			switch ((c = mr(s[0], !1)).style) {
				case "short":
				default:
					o += "yy";
					break;
				case "long": o += "yyyy";
			}
			break;
		case "am-pm":
			o += "AM/PM";
			break;
		case "week-of-year":
		case "quarter":
			console.error("Excel does not support ODS format token " + s[3]);
			break;
		case "fill-character":
			"/" === s[1] ? o += "\"" + (u = n.slice(h, Br.lastIndex - s[0].length)).replace(/"/g, "\"\"") + "\"*" : "/" !== s[0].charAt(s[0].length - 2) && (h = Br.lastIndex);
			break;
		case "scientific-number":
			o += "0." + De("0", +(c = mr(s[0], !1))["min-decimal-places"] || +c["decimal-places"] || 2) + De("?", +c["decimal-places"] - +c["min-decimal-places"] || 0) + "E" + (yr(c["forced-exponent-sign"]) ? "+" : "") + De("0", +c["min-exponent-digits"] || 2);
			break;
		case "fraction":
			+(c = mr(s[0], !1))["min-integer-digits"] ? o += De("0", +c["min-integer-digits"]) : o += "#", o += " ", o += De("?", +c["min-numerator-digits"] || 1), o += "/", +c["denominator-value"] ? o += c["denominator-value"] : o += De("?", +c["min-denominator-digits"] || 1);
			break;
		case "currency-symbol":
			"/" === s[1] ? o += "\"" + n.slice(h, Br.lastIndex - s[0].length).replace(/"/g, "\"\"") + "\"" : "/" !== s[0].charAt(s[0].length - 2) ? h = Br.lastIndex : o += "$";
			break;
		case "text-properties":
			switch (((c = mr(s[0], !1)).color || "").toLowerCase().replace("#", "")) {
				case "ff0000":
				case "red": o = "[Red]" + o;
			}
			break;
		case "text-content":
			o += "@";
			break;
		case "map":
			c = mr(s[0], !1), "value()>=0" == Er(c.condition) ? o = a[c["apply-style-name"]] + ";" + o : console.error("ODS number format may be incorrect: " + c.condition);
			break;
		case "number":
			if ("/" === s[1]) break;
			l = "", l += De("0", +(c = mr(s[0], !1))["min-integer-digits"] || 1), yr(c.grouping) && (l = G(De("#", Math.max(0, 4 - l.length)) + l)), (+c["min-decimal-places"] || +c["decimal-places"]) && (l += "."), +c["min-decimal-places"] && (l += De("0", +c["min-decimal-places"] || 1)), +c["decimal-places"] - (+c["min-decimal-places"] || 0) && (l += De("0", +c["decimal-places"] - (+c["min-decimal-places"] || 0))), o += l;
			break;
		case "embedded-text": "/" === s[1] ? 0 == f ? o += "\"" + n.slice(h, Br.lastIndex - s[0].length).replace(/"/g, "\"\"") + "\"" : o = o.slice(0, f) + "\"" + n.slice(h, Br.lastIndex - s[0].length).replace(/"/g, "\"\"") + "\"" + o.slice(f) : "/" !== s[0].charAt(s[0].length - 2) && (h = Br.lastIndex, f = -+mr(s[0], !1).position || 0);
	}
	return a;
}
function uc(e, r, t) {
	var a, n, s, i, c, o, l, f = r || {}, h = Ur(e), u = [], d = 0, p = {}, m = [], v = {};
	f.dense && (v["!data"] = []);
	var g = { value: "" }, b = {}, T = "", E = 0, w = "", A = 0, k = [], S = [], y = -1, C = -1, _ = {
		s: {
			r: 1e6,
			c: 1e7
		},
		e: {
			r: 0,
			c: 0
		}
	}, x = 0, O = t || {}, R = {}, I = [], N = {}, D = 0, F = 0, P = [], M = 1, L = 1, U = [], B = {
		Names: [],
		WBProps: {}
	}, H = {}, W = ["", ""], z = [], V = {}, G = "", $ = 0, X = !1, j = !1, K = 0;
	for (Br.lastIndex = 0, h = Ge(Xe(h, "<!--", "-->")); o = Br.exec(h);) switch (o[3] = o[3].replace(/_[\s\S]*$/, "")) {
		case "table":
		case "工作表":
			"/" === o[1] ? (_.e.c >= _.s.c && _.e.r >= _.s.r ? v["!ref"] = Mt(_) : v["!ref"] = "A1:A1", f.sheetRows > 0 && f.sheetRows <= _.e.r && (v["!fullref"] = v["!ref"], _.e.r = f.sheetRows - 1, v["!ref"] = Mt(_)), I.length && (v["!merges"] = I), P.length && (v["!rows"] = P), i.name = i["名称"] || i.name, "undefined" != typeof JSON && JSON.stringify(i), m.push(i.name), p[i.name] = v, j = !1) : "/" !== o[0].charAt(o[0].length - 2) && (i = mr(o[0], !1), y = C = -1, _.s.r = _.s.c = 1e7, _.e.r = _.e.c = 0, v = {}, f.dense && (v["!data"] = []), I = [], P = [], j = !0);
			break;
		case "table-row-group":
			"/" === o[1] ? --x : ++x;
			break;
		case "table-row":
		case "行":
			if ("/" === o[1]) {
				y += M, M = 1;
				break;
			}
			if ((c = mr(o[0], !1))["行号"] ? y = c["行号"] - 1 : -1 == y && (y = 0), (M = +c["number-rows-repeated"] || 1) < 10) for (K = 0; K < M; ++K) x > 0 && (P[y + K] = { level: x });
			C = -1;
			break;
		case "covered-table-cell":
			if ("/" !== o[1]) if (++C, g = mr(o[0], !1), L = parseInt(g["number-columns-repeated"] || "1", 10) || 1, f.sheetStubs) {
				for (; L-- > 0;) f.dense ? (v["!data"][y] || (v["!data"][y] = []), v["!data"][y][C] = { t: "z" }) : v[Ft({
					r: y,
					c: C
				})] = { t: "z" }, ++C;
				--C;
			} else C += L - 1;
			T = "", k = [];
			break;
		case "table-cell":
		case "数据":
			if ("/" === o[0].charAt(o[0].length - 2)) ++C, g = mr(o[0], !1), L = parseInt(g["number-columns-repeated"] || "1", 10) || 1, l = {
				t: "z",
				v: null
			}, g.formula && 0 != f.cellFormula && (l.f = oi(Er(g.formula))), g["style-name"] && R[g["style-name"]] && (l.z = R[g["style-name"]]), "string" == (g["数据类型"] || g["value-type"]) && (l.t = "s", l.v = Er(g["string-value"] || ""), f.dense ? (v["!data"][y] || (v["!data"][y] = []), v["!data"][y][C] = l) : v[Nt(C) + Rt(y)] = l), C += L - 1;
			else if ("/" !== o[1]) {
				T = w = "", E = A = 0, k = [], S = [], L = 1;
				var Y = M ? y + M - 1 : y;
				if (++C > _.e.c && (_.e.c = C), C < _.s.c && (_.s.c = C), y < _.s.r && (_.s.r = y), Y > _.e.r && (_.e.r = Y), g = mr(o[0], !1), b = vr(o[0], !0), z = [], V = {}, l = {
					t: g["数据类型"] || g["value-type"],
					v: null
				}, g["style-name"] && R[g["style-name"]] && (l.z = R[g["style-name"]]), f.cellFormula) if (g.formula && (g.formula = Er(g.formula)), g["number-matrix-columns-spanned"] && g["number-matrix-rows-spanned"] && (N = {
					s: {
						r: y,
						c: C
					},
					e: {
						r: y + (D = parseInt(g["number-matrix-rows-spanned"], 10) || 0) - 1,
						c: C + (F = parseInt(g["number-matrix-columns-spanned"], 10) || 0) - 1
					}
				}, l.F = Mt(N), U.push([N, l.F])), g.formula) l.f = oi(g.formula);
				else for (K = 0; K < U.length; ++K) y >= U[K][0].s.r && y <= U[K][0].e.r && C >= U[K][0].s.c && C <= U[K][0].e.c && (l.F = U[K][1]);
				switch ((g["number-columns-spanned"] || g["number-rows-spanned"]) && (D = parseInt(g["number-rows-spanned"] || "1", 10) || 1) * (F = parseInt(g["number-columns-spanned"] || "1", 10) || 1) > 1 && (N = {
					s: {
						r: y,
						c: C
					},
					e: {
						r: y + D - 1,
						c: C + F - 1
					}
				}, I.push(N)), g["number-columns-repeated"] && (L = parseInt(g["number-columns-repeated"], 10)), l.t) {
					case "boolean":
						l.t = "b", l.v = yr(g["boolean-value"]) || +g["boolean-value"] >= 1;
						break;
					case "float":
						l.t = "n", l.v = parseFloat(g.value), f.cellDates && l.z && ie(l.z) && (l.v = ye(l.v + (B.WBProps.date1904 ? 1462 : 0)), l.t = "number" == typeof l.v ? "n" : "d");
						break;
					case "percentage":
					case "currency":
						l.t = "n", l.v = parseFloat(g.value);
						break;
					case "date":
						l.t = "d", l.v = Re(g["date-value"], B.WBProps.date1904), f.cellDates || (l.t = "n", l.v = Se(l.v, B.WBProps.date1904)), l.z || (l.z = "m/d/yy");
						break;
					case "time":
						l.t = "n", l.v = Ce(g["time-value"]) / 86400, f.cellDates && (l.v = ye(l.v), l.t = "number" == typeof l.v ? "n" : "d"), l.z || (l.z = "HH:MM:SS");
						break;
					case "number":
						l.t = "n", l.v = parseFloat(g["数据数值"]);
						break;
					default:
						if ("string" !== l.t && "text" !== l.t && l.t) throw new Error("Unsupported value type " + l.t);
						l.t = "s", null != g["string-value"] && (T = Er(g["string-value"]), k = []);
				}
			} else {
				if (X = !1, "error" == b["calcext:value-type"] && null != ua[T] && (l.t = "e", l.w = T, l.v = ua[T]), "s" === l.t && (l.v = T || "", k.length && (l.R = k), X = 0 == E), H.Target && (l.l = H), z.length > 0 && (l.c = z, z = []), T && !1 !== f.cellText && (l.w = T), X && (l.t = "z", delete l.v), (!X || f.sheetStubs) && !(f.sheetRows && f.sheetRows <= y)) for (var J = 0; J < M; ++J) {
					if (L = parseInt(g["number-columns-repeated"] || "1", 10), f.dense) for (v["!data"][y + J] || (v["!data"][y + J] = []), v["!data"][y + J][C] = 0 == J ? l : Ne(l); --L > 0;) v["!data"][y + J][C + L] = Ne(l);
					else for (v[Ft({
						r: y + J,
						c: C
					})] = l; --L > 0;) v[Ft({
						r: y + J,
						c: C + L
					})] = Ne(l);
					_.e.c <= C && (_.e.c = C);
				}
				C += (L = parseInt(g["number-columns-repeated"] || "1", 10)) - 1, L = 0, l = {}, T = "", k = [];
			}
			H = {};
			break;
		case "document":
		case "document-content":
		case "电子表格文档":
		case "spreadsheet":
		case "主体":
		case "scripts":
		case "styles":
		case "font-face-decls":
		case "master-styles":
			if ("/" === o[1]) {
				if ((a = u.pop())[0] !== o[3]) throw "Bad state: " + a;
			} else "/" !== o[0].charAt(o[0].length - 2) && u.push([o[3], !0]);
			break;
		case "annotation":
			if ("/" === o[1]) {
				if ((a = u.pop())[0] !== o[3]) throw "Bad state: " + a;
				V.t = T, k.length && (V.R = k), V.a = G, z.push(V), T = w, E = A, k = S;
			} else if ("/" !== o[0].charAt(o[0].length - 2)) {
				u.push([o[3], !1]);
				var Z = mr(o[0], !0);
				Z.display && yr(Z.display) || (z.hidden = !0), w = T, A = E, S = k, T = "", E = 0, k = [];
			}
			G = "", $ = 0;
			break;
		case "creator":
			"/" === o[1] ? G = h.slice($, o.index) : $ = o.index + o[0].length;
			break;
		case "meta":
		case "元数据":
		case "settings":
		case "config-item-set":
		case "config-item-map-indexed":
		case "config-item-map-entry":
		case "config-item-map-named":
		case "shapes":
		case "frame":
		case "text-box":
		case "image":
		case "data-pilot-tables":
		case "list-style":
		case "form":
		case "dde-links":
		case "event-listeners":
		case "chart":
			if ("/" === o[1]) {
				if ((a = u.pop())[0] !== o[3]) throw "Bad state: " + a;
			} else "/" !== o[0].charAt(o[0].length - 2) && u.push([o[3], !1]);
			T = "", E = 0, k = [];
			break;
		case "scientific-number":
		case "currency-symbol":
		case "fill-character":
		case "script":
		case "libraries":
		case "automatic-styles":
		case "default-style":
		case "page-layout":
		case "map":
		case "font-face":
		case "paragraph-properties":
		case "table-properties":
		case "table-column-properties":
		case "table-row-properties":
		case "table-cell-properties":
		case "number":
		case "fraction":
		case "day":
		case "month":
		case "year":
		case "era":
		case "day-of-week":
		case "week-of-year":
		case "quarter":
		case "hours":
		case "minutes":
		case "seconds":
		case "am-pm":
		case "boolean":
		case "text-content":
		case "text-properties":
		case "embedded-text":
		case "body":
		case "电子表格":
		case "forms":
		case "table-column":
		case "table-header-rows":
		case "table-rows":
		case "table-column-group":
		case "table-header-columns":
		case "table-columns":
		case "graphic-properties":
		case "calculation-settings":
		case "named-expressions":
		case "label-range":
		case "label-ranges":
		case "named-expression":
		case "sort":
		case "sort-by":
		case "sort-groups":
		case "tab":
		case "line-break":
		case "span":
		case "s":
		case "date":
		case "object":
		case "title":
		case "标题":
		case "desc":
		case "binary-data":
		case "table-source":
		case "scenario":
		case "iteration":
		case "content-validations":
		case "content-validation":
		case "help-message":
		case "error-message":
		case "database-ranges":
		case "filter":
		case "filter-and":
		case "filter-or":
		case "filter-condition":
		case "filter-set-item":
		case "list-level-style-bullet":
		case "list-level-style-number":
		case "list-level-properties":
		case "sender-firstname":
		case "sender-lastname":
		case "sender-initials":
		case "sender-title":
		case "sender-position":
		case "sender-email":
		case "sender-phone-private":
		case "sender-fax":
		case "sender-company":
		case "sender-phone-work":
		case "sender-street":
		case "sender-city":
		case "sender-postal-code":
		case "sender-country":
		case "sender-state-or-province":
		case "author-name":
		case "author-initials":
		case "chapter":
		case "file-name":
		case "template-name":
		case "sheet-name":
		case "event-listener":
		case "initial-creator":
		case "creation-date":
		case "print-date":
		case "generator":
		case "document-statistic":
		case "user-defined":
		case "editing-duration":
		case "editing-cycles":
		case "config-item":
		case "page-number":
		case "page-count":
		case "time":
		case "cell-range-source":
		case "detective":
		case "operation":
		case "highlighted-range":
		case "data-pilot-table":
		case "source-cell-range":
		case "source-service":
		case "data-pilot-field":
		case "data-pilot-level":
		case "data-pilot-subtotals":
		case "data-pilot-subtotal":
		case "data-pilot-members":
		case "data-pilot-member":
		case "data-pilot-display-info":
		case "data-pilot-sort-info":
		case "data-pilot-layout-info":
		case "data-pilot-field-reference":
		case "data-pilot-groups":
		case "data-pilot-group":
		case "data-pilot-group-member":
		case "rect":
		case "dde-connection-decls":
		case "dde-connection-decl":
		case "dde-link":
		case "dde-source":
		case "properties":
		case "property":
		case "table-protection":
		case "data-pilot-grand-total":
		case "office-document-common-attrs": break;
		case "text-style":
		case "boolean-style":
		case "number-style":
		case "currency-style":
		case "percentage-style":
		case "date-style":
		case "time-style":
			if ("/" === o[1]) {
				var q = Br.lastIndex;
				hc(h.slice(s, Br.lastIndex), 0, O), Br.lastIndex = q;
			} else "/" !== o[0].charAt(o[0].length - 2) && (s = Br.lastIndex - o[0].length);
			break;
		case "style":
			var Q = mr(o[0], !1);
			"table-cell" == Q.family && O[Q["data-style-name"]] && (R[Q.name] = O[Q["data-style-name"]]);
			break;
		case "text":
			if ("/>" === o[0].slice(-2)) break;
			if ("/" === o[1]) switch (u[u.length - 1][0]) {
				case "number-style":
				case "date-style":
				case "time-style": h.slice(d, o.index);
			}
			else d = o.index + o[0].length;
			break;
		case "named-range":
			W = li((n = mr(o[0], !1))["cell-range-address"]);
			var ee = {
				Name: n.name,
				Ref: W[0] + "!" + W[1]
			};
			j && (ee.Sheet = m.length), B.Names.push(ee);
			break;
		case "null-date":
			"1904-01-01" === (n = mr(o[0], !1))["date-value"] && (B.WBProps.date1904 = !0);
			break;
		case "p":
		case "文本串":
			if (["master-styles"].indexOf(u[u.length - 1][0]) > -1) break;
			if ("/" !== o[1] || g && g["string-value"]) "/>" == o[0].slice(-2) ? T += "\n" : (mr(o[0], !1), E = o.index + o[0].length);
			else {
				var re = fc(h.slice(E, o.index));
				T = (T.length > 0 ? T + "\n" : "") + re[0];
			}
			break;
		case "database-range":
			if ("/" === o[1]) break;
			try {
				p[(W = li(mr(o[0])["target-range-address"]))[0]]["!autofilter"] = { ref: W[1] };
			} catch (ao) {}
			break;
		case "a":
			if ("/" !== o[1]) {
				if (!(H = mr(o[0], !1)).href) break;
				H.Target = Er(H.href), delete H.href, "#" == H.Target.charAt(0) && H.Target.indexOf(".") > -1 ? (W = li(H.Target.slice(1)), H.Target = "#" + W[0] + "!" + W[1]) : H.Target.match(/^\.\.[\\\/]/) && (H.Target = H.Target.slice(3));
			}
			break;
		default: switch (o[2]) {
			case "dc:":
			case "calcext:":
			case "loext:":
			case "ooo:":
			case "chartooo:":
			case "draw:":
			case "style:":
			case "chart:":
			case "form:":
			case "uof:":
			case "表:":
			case "字:": break;
			default: if (f.WTF) throw new Error(o);
		}
	}
	var te = {
		Sheets: p,
		SheetNames: m,
		Workbook: B
	};
	return f.bookSheets && delete te.Sheets, te;
}
function dc(e, r) {
	r = r || {}, rr(e, "META-INF/manifest.xml") && function(e, r) {
		for (var t, a, n = Ur(e); t = Br.exec(n);) switch (t[3]) {
			case "manifest": break;
			case "file-entry":
				if ("/" == (a = mr(t[0], !1)).path && "application/vnd.oasis.opendocument.spreadsheet" !== a.type) throw new Error("This OpenDocument is not a spreadsheet");
				break;
			case "encryption-data":
			case "algorithm":
			case "start-key-generation":
			case "key-derivation": throw new Error("Unsupported ODS Encryption");
			default: if (r && r.WTF) throw t;
		}
	}(ar(e, "META-INF/manifest.xml"), r);
	var t = nr(e, "styles.xml"), a = t && hc(Rr(t)), n = nr(e, "content.xml");
	if (!n) throw new Error("Missing content.xml in ODS / UOF file");
	var s = uc(Rr(n), r, a);
	return rr(e, "meta.xml") && (s.Props = Ta(ar(e, "meta.xml"))), s.bookType = "ods", s;
}
function pc(e, r) {
	var t = uc(e, r);
	return t.bookType = "fods", t;
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */ var mc = function() {
	try {
		return "undefined" == typeof Uint8Array || void 0 === Uint8Array.prototype.subarray ? "slice" : "undefined" != typeof Buffer ? void 0 === Buffer.prototype.subarray ? "slice" : ("function" == typeof Buffer.from ? Buffer.from([72, 62]) : new Buffer([72, 62])) instanceof Uint8Array ? "subarray" : "slice" : "subarray";
	} catch (ao) {
		return "slice";
	}
}();
function vc(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function gc(e) {
	return "undefined" != typeof TextDecoder ? new TextDecoder().decode(e) : Rr(w(e));
}
function bc(e) {
	for (var r = 0, t = 0; t < e.length; ++t) r += e[t].length;
	var a = new Uint8Array(r), n = 0;
	for (t = 0; t < e.length; ++t) {
		var s = e[t], i = s.length;
		if (i < 250) for (var c = 0; c < i; ++c) a[n++] = s[c];
		else a.set(s, n), n += i;
	}
	return a;
}
function Tc(e) {
	return 16843009 * ((e = (858993459 & (e -= e >> 1 & 1431655765)) + (e >> 2 & 858993459)) + (e >> 4) & 252645135) >>> 24;
}
function Ec(e, r) {
	var t = r.l, a = 127 & e[t];
	e: if (e[t++] >= 128) {
		if (a |= (127 & e[t]) << 7, e[t++] < 128) break e;
		if (a |= (127 & e[t]) << 14, e[t++] < 128) break e;
		if (a |= (127 & e[t]) << 21, e[t++] < 128) break e;
		if (a += (127 & e[t]) * Math.pow(2, 28), ++t, e[t++] < 128) break e;
		if (a += (127 & e[t]) * Math.pow(2, 35), ++t, e[t++] < 128) break e;
		if (a += (127 & e[t]) * Math.pow(2, 42), ++t, e[t++] < 128) break e;
	}
	return r.l = t, a;
}
function wc(e) {
	var r = 0, t = 127 & e[r];
	return e[r++] < 128 ? t : (t |= (127 & e[r]) << 7, e[r++] < 128 ? t : (t |= (127 & e[r]) << 14, e[r++] < 128 ? t : (t |= (127 & e[r]) << 21, e[r++] < 128 ? t : t |= (15 & e[r]) << 28)));
}
function Ac(e) {
	for (var r = [], t = { l: 0 }; t.l < e.length;) {
		var a, n = t.l, s = Ec(e, t), i = 7 & s;
		s = s / 8 | 0;
		var c = t.l;
		switch (i) {
			case 0:
				for (; e[c++] >= 128;);
				a = e[mc](t.l, c), t.l = c;
				break;
			case 1:
				a = e[mc](c, c + 8), t.l = c + 8;
				break;
			case 2:
				var o = Ec(e, t);
				a = e[mc](t.l, t.l + o), t.l += o;
				break;
			case 5:
				a = e[mc](c, c + 4), t.l = c + 4;
				break;
			default: throw new Error("PB Type ".concat(i, " for Field ").concat(s, " at offset ").concat(n));
		}
		var l = {
			data: a,
			type: i
		};
		null == r[s] && (r[s] = []), r[s].push(l);
	}
	return r;
}
function kc(e, r) {
	return (null == e ? void 0 : e.map(function(e) {
		return r(e.data);
	})) || [];
}
function Sc(e, r) {
	if (0 != e) throw new Error("Unexpected Snappy chunk type ".concat(e));
	for (var t = { l: 0 }, a = Ec(r, t), n = [], s = t.l; s < r.length;) {
		var i = 3 & r[s];
		if (0 != i) {
			var c = 0, o = 0;
			if (1 == i ? (o = 4 + (r[s] >> 2 & 7), c = (224 & r[s++]) << 3, c |= r[s++]) : (o = 1 + (r[s++] >> 2), 2 == i ? (c = r[s] | r[s + 1] << 8, s += 2) : (c = (r[s] | r[s + 1] << 8 | r[s + 2] << 16 | r[s + 3] << 24) >>> 0, s += 4)), 0 == c) throw new Error("Invalid offset 0");
			for (var l = n.length - 1, f = c; l >= 0 && f >= n[l].length;) f -= n[l].length, --l;
			if (l < 0) {
				if (0 != f) throw new Error("Invalid offset beyond length");
				f = n[l = 0].length;
			}
			if (o < f) n.push(n[l][mc](n[l].length - f, n[l].length - f + o));
			else {
				for (f > 0 && (n.push(n[l][mc](n[l].length - f)), o -= f), ++l; o >= n[l].length;) n.push(n[l]), o -= n[l].length, ++l;
				o && n.push(n[l][mc](0, o));
			}
			n.length > 25 && (n = [bc(n)]);
		} else {
			var h = r[s++] >> 2;
			if (h < 60) ++h;
			else {
				var u = h - 59;
				h = r[s], u > 1 && (h |= r[s + 1] << 8), u > 2 && (h |= r[s + 2] << 16), u > 3 && (h |= r[s + 3] << 24), h >>>= 0, h++, s += u;
			}
			n.push(r[mc](s, s + h)), s += h;
		}
	}
	for (var d = 0, p = 0; p < n.length; ++p) d += n[p].length;
	if (d != a) throw new Error("Unexpected length: ".concat(d, " != ").concat(a));
	return n;
}
function yc(e, r, t, a, n) {
	var s, i, c, o, l = 255 & r, f = r >> 8, h = f >= 5 ? n : a;
	e: if (t & (f > 4 ? 8 : 4) && "n" == e.t && 7 == l) {
		var u = (null == (s = h[7]) ? void 0 : s[0]) ? wc(h[7][0].data) : -1;
		if (-1 == u) break e;
		var d = (null == (i = h[15]) ? void 0 : i[0]) ? wc(h[15][0].data) : -1, p = (null == (c = h[16]) ? void 0 : c[0]) ? wc(h[16][0].data) : -1, m = (null == (o = h[40]) ? void 0 : o[0]) ? wc(h[40][0].data) : -1, v = e.v, g = v;
		r: if (m) {
			if (0 == v) {
				d = p = 2;
				break r;
			}
			d = v >= 604800 ? 1 : v >= 86400 ? 2 : v >= 3600 ? 4 : v >= 60 ? 8 : v >= 1 ? 16 : 32, Math.floor(v) != v ? p = 32 : v % 60 ? p = 16 : v % 3600 ? p = 8 : v % 86400 ? p = 4 : v % 604800 && (p = 2), p < d && (p = d);
		}
		if (-1 == d || -1 == p) break e;
		var b = [], T = [];
		1 == d && (g = v / 604800, 1 == p ? T.push("d\"d\"") : v -= 604800 * (g |= 0), b.push(g + (2 == u ? " week" + (1 == g ? "" : "s") : 1 == u ? "w" : ""))), d <= 2 && p >= 2 && (g = v / 86400, p > 2 && (v -= 86400 * (g |= 0)), T.push("d\"d\""), b.push(g + (2 == u ? " day" + (1 == g ? "" : "s") : 1 == u ? "d" : ""))), d <= 4 && p >= 4 && (g = v / 3600, p > 4 && (v -= 3600 * (g |= 0)), T.push((d >= 4 ? "[h]" : "h") + "\"h\""), b.push(g + (2 == u ? " hour" + (1 == g ? "" : "s") : 1 == u ? "h" : ""))), d <= 8 && p >= 8 && (g = v / 60, p > 8 && (v -= 60 * (g |= 0)), T.push((d >= 8 ? "[m]" : "m") + "\"m\""), 0 == u ? b.push((8 == d && 8 == p || g >= 10 ? "" : "0") + g) : b.push(g + (2 == u ? " minute" + (1 == g ? "" : "s") : 1 == u ? "m" : ""))), d <= 16 && p >= 16 && (g = v, p > 16 && (v -= g |= 0), T.push((d >= 16 ? "[s]" : "s") + "\"s\""), 0 == u ? b.push((16 == p && 16 == d || g >= 10 ? "" : "0") + g) : b.push(g + (2 == u ? " second" + (1 == g ? "" : "s") : 1 == u ? "s" : ""))), p >= 32 && (g = Math.round(1e3 * v), d < 32 && T.push(".000\"ms\""), 0 == u ? b.push((g >= 100 ? "" : g >= 10 ? "0" : "00") + g) : b.push(g + (2 == u ? " millisecond" + (1 == g ? "" : "s") : 1 == u ? "ms" : ""))), e.w = b.join(0 == u ? ":" : " "), e.z = T.join(0 == u ? "\":\"" : " "), 0 == u && (e.w = e.w.replace(/:(\d\d\d)$/, ".$1"));
	}
}
function Cc(e, r, t) {
	switch (e[0]) {
		case 0:
		case 1:
		case 2:
		case 3:
		case 4: return function(e, r, t, a) {
			var n, s = vc(e), i = s.getUint32(4, !0), c = -1, o = -1, l = -1, f = NaN, h = 0, u = new Date(Date.UTC(2001, 0, 1)), d = t > 1 ? 12 : 8;
			2 & i && (l = s.getUint32(d, !0), d += 4), d += 4 * Tc(i & (t > 1 ? 3468 : 396)), 512 & i && (c = s.getUint32(d, !0), d += 4), d += 4 * Tc(i & (t > 1 ? 12288 : 4096)), 16 & i && (o = s.getUint32(d, !0), d += 4), 32 & i && (f = s.getFloat64(d, !0), d += 8), 64 & i && (u.setTime(u.getTime() + 1e3 * (h = s.getFloat64(d, !0))), d += 8), t > 1 && 255 & (i = s.getUint32(8, !0) >>> 16) && (-1 == l && (l = s.getUint32(d, !0)), d += 4);
			var p = e[t >= 4 ? 1 : 2];
			switch (p) {
				case 0: return;
				case 2:
				case 7:
					n = {
						t: "n",
						v: f
					};
					break;
				case 3:
					n = {
						t: "s",
						v: r.sst[o]
					};
					break;
				case 5:
					n = (null == a ? void 0 : a.cellDates) ? {
						t: "d",
						v: u
					} : {
						t: "n",
						v: h / 86400 + 35430,
						z: P[14]
					};
					break;
				case 6:
					n = {
						t: "b",
						v: f > 0
					};
					break;
				case 8:
					n = {
						t: "e",
						v: 0
					};
					break;
				case 9:
					if (!(c > -1)) throw new Error("Unsupported cell type ".concat(e[mc](0, 4)));
					var m = r.rsst[c];
					n = {
						t: "s",
						v: m.v
					}, m.l && (n.l = { Target: m.l });
					break;
				default: throw new Error("Unsupported cell type ".concat(e[mc](0, 4)));
			}
			return l > -1 && yc(n, p | t << 8, i, r.ofmt[l], r.nfmt[l]), 7 == p && (n.v /= 86400), n;
		}(e, r, e[0], t);
		case 5: return function(e, r, t) {
			var a = vc(e);
			a.getUint32(4, !0);
			var n, s = a.getUint32(8, !0), i = 12, c = -1, o = -1, l = -1, f = NaN, h = NaN, u = 0, d = new Date(Date.UTC(2001, 0, 1));
			1 & s && (f = function(e, r) {
				for (var t = (127 & e[r + 15]) << 7 | e[r + 14] >> 1, a = 1 & e[r + 14], n = r + 13; n >= r; --n) a = 256 * a + e[n];
				return (128 & e[r + 15] ? -a : a) * Math.pow(10, t - 6176);
			}(e, i), i += 16), 2 & s && (h = a.getFloat64(i, !0), i += 8), 4 & s && (d.setTime(d.getTime() + 1e3 * (u = a.getFloat64(i, !0))), i += 8), 8 & s && (o = a.getUint32(i, !0), i += 4), 16 & s && (c = a.getUint32(i, !0), i += 4), i += 4 * Tc(480 & s), 512 & s && (a.getUint32(i, !0), i += 4), i += 4 * Tc(1024 & s), 2048 & s && (a.getUint32(i, !0), i += 4);
			var p, m, v = e[1];
			switch (v) {
				case 0:
					n = { t: "z" };
					break;
				case 2:
				case 10:
					n = {
						t: "n",
						v: f
					};
					break;
				case 3:
					n = {
						t: "s",
						v: r.sst[o]
					};
					break;
				case 5:
					n = (null == t ? void 0 : t.cellDates) ? {
						t: "d",
						v: d
					} : {
						t: "n",
						v: u / 86400 + 35430,
						z: P[14]
					};
					break;
				case 6:
					n = {
						t: "b",
						v: h > 0
					};
					break;
				case 7:
					n = {
						t: "n",
						v: h
					};
					break;
				case 8:
					n = {
						t: "e",
						v: 0
					};
					break;
				case 9:
					if (!(c > -1)) throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(31 & s, " : ").concat(e[mc](0, 4)));
					var g = r.rsst[c];
					n = {
						t: "s",
						v: g.v
					}, g.l && (n.l = { Target: g.l });
					break;
				default: throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(31 & s, " : ").concat(e[mc](0, 4)));
			}
			if (i += 4 * Tc(4096 & s), 516096 & s && (-1 == l && (l = a.getUint32(i, !0)), i += 4), 524288 & s) {
				var b = a.getUint32(i, !0);
				i += 4, r.cmnt[b] && (n.c = (p = r.cmnt[b], (m = []).push({
					t: p.t || "",
					a: p.a,
					T: p.replies && p.replies.length > 0
				}), p.replies && p.replies.forEach(function(e) {
					m.push({
						t: e.t || "",
						a: e.a,
						T: !0
					});
				}), m));
			}
			return l > -1 && yc(n, 1280 | v, s >> 13, r.ofmt[l], r.nfmt[l]), 7 == v && (n.v /= 86400), n;
		}(e, r, t);
		default: throw new Error("Unsupported payload version ".concat(e[0]));
	}
}
function _c(e) {
	return wc(Ac(e)[1][0].data);
}
function xc(e, r) {
	var t = Ac(r.data), a = wc(t[1][0].data), n = t[3], s = [];
	return (n || []).forEach(function(r) {
		var t, n, i = Ac(r.data);
		if (i[1]) {
			var c = wc(i[1][0].data) >>> 0;
			switch (a) {
				case 1:
					s[c] = gc(i[3][0].data);
					break;
				case 8:
					var o = e[_c(i[9][0].data)][0], l = e[_c(Ac(o.data)[1][0].data)][0], f = wc(l.meta[1][0].data);
					if (2001 != f) throw new Error("2000 unexpected reference to ".concat(f));
					var h = Ac(l.data), u = { v: h[3].map(function(e) {
						return gc(e.data);
					}).join("") };
					s[c] = u;
					e: if (null == (t = null == h ? void 0 : h[11]) ? void 0 : t[0]) {
						var d = null == (n = Ac(h[11][0].data)) ? void 0 : n[1];
						if (!d) break e;
						d.forEach(function(r) {
							var t, a, n, s = Ac(r.data);
							if (null == (t = s[2]) ? void 0 : t[0]) {
								var i = e[_c(null == (a = s[2]) ? void 0 : a[0].data)][0];
								if (2032 === wc(i.meta[1][0].data)) {
									var c = Ac(i.data);
									null != (n = null == c ? void 0 : c[2]) && n[0] && !u.l && (u.l = gc(c[2][0].data));
								}
							}
						});
					}
					break;
				case 2:
					s[c] = Ac(i[6][0].data);
					break;
				case 3:
					s[c] = Ac(i[5][0].data);
					break;
				case 10:
					var p = e[_c(i[10][0].data)][0];
					s[c] = Oc(e, p.data);
					break;
				default: throw a;
			}
		}
	}), s;
}
function Oc(e, r) {
	var t, a, n, s, i, c, o, l, f, h, u = {
		t: "",
		a: ""
	}, d = Ac(r);
	if (null != (a = null == (t = null == d ? void 0 : d[1]) ? void 0 : t[0]) && a.data && (u.t = gc(null == (s = null == (n = null == d ? void 0 : d[1]) ? void 0 : n[0]) ? void 0 : s.data) || ""), null == (c = null == (i = null == d ? void 0 : d[3]) ? void 0 : i[0]) ? void 0 : c.data) {
		var p = Ac(e[_c(null == (l = null == (o = null == d ? void 0 : d[3]) ? void 0 : o[0]) ? void 0 : l.data)][0].data);
		null != (h = null == (f = p[1]) ? void 0 : f[0]) && h.data && (u.a = gc(p[1][0].data));
	}
	return null != d && d[4] && (u.replies = [], d[4].forEach(function(r) {
		var t = e[_c(r.data)][0];
		u.replies.push(Oc(e, t.data));
	})), u;
}
function Rc(e, r, t) {
	var a = Ac(r.data), n = { "!ref": "A1" };
	null != t && t.dense && (n["!data"] = []);
	var s = e[_c(a[2][0].data)], i = wc(s[0].meta[1][0].data);
	if (6001 != i) throw new Error("6000 unexpected reference to ".concat(i));
	return function(e, r, t, a) {
		var n, s, i, c, o, l, f, h, u, d, p, m, v, g, b = Ac(r.data), T = {
			s: {
				r: 0,
				c: 0
			},
			e: {
				r: 0,
				c: 0
			}
		};
		if (T.e.r = (wc(b[6][0].data) >>> 0) - 1, T.e.r < 0) throw new Error("Invalid row varint ".concat(b[6][0].data));
		if (T.e.c = (wc(b[7][0].data) >>> 0) - 1, T.e.c < 0) throw new Error("Invalid col varint ".concat(b[7][0].data));
		t["!ref"] = Mt(T);
		var E = null != t["!data"], w = t, A = Ac(b[4][0].data), k = {
			sst: [],
			rsst: [],
			ofmt: [],
			nfmt: [],
			fmla: [],
			ferr: [],
			cmnt: []
		};
		null != (n = A[4]) && n[0] && (k.sst = xc(e, e[_c(A[4][0].data)][0])), null != (s = A[6]) && s[0] && (k.fmla = xc(e, e[_c(A[6][0].data)][0])), null != (i = A[11]) && i[0] && (k.ofmt = xc(e, e[_c(A[11][0].data)][0])), null != (c = A[12]) && c[0] && (k.ferr = xc(e, e[_c(A[12][0].data)][0])), null != (o = A[17]) && o[0] && (k.rsst = xc(e, e[_c(A[17][0].data)][0])), null != (l = A[19]) && l[0] && (k.cmnt = xc(e, e[_c(A[19][0].data)][0])), null != (f = A[22]) && f[0] && (k.nfmt = xc(e, e[_c(A[22][0].data)][0]));
		var S = Ac(A[3][0].data), y = 0;
		if (!(null == (h = A[9]) ? void 0 : h[0])) throw "NUMBERS file missing row tree";
		if (Ac(A[9][0].data)[1].map(function(e) {
			return Ac(e.data);
		}).forEach(function(r) {
			y = wc(r[1][0].data);
			var n = wc(r[2][0].data), s = S[1][n];
			if (!s) throw "NUMBERS missing tile " + n;
			var i = e[_c(Ac(s.data)[2][0].data)][0], c = wc(i.meta[1][0].data);
			if (6002 != c) throw new Error("6001 unexpected reference to ".concat(c));
			var o = function(e, r) {
				var t, a = Ac(r.data), n = -1;
				null != (t = null == a ? void 0 : a[7]) && t[0] && (n = wc(a[7][0].data) >>> 0 ? 1 : 0);
				var s = kc(a[5], function(e) {
					return function(e, r) {
						var t, a, n, s, i, c, o, l, f, h, u, d, p, m, v, g, b = Ac(e), T = wc(b[1][0].data) >>> 0, E = wc(b[2][0].data) >>> 0, w = (null == (a = null == (t = b[8]) ? void 0 : t[0]) ? void 0 : a.data) && wc(b[8][0].data) > 0 || !1;
						if ((null == (s = null == (n = b[7]) ? void 0 : n[0]) ? void 0 : s.data) && 0 != r) v = null == (c = null == (i = b[7]) ? void 0 : i[0]) ? void 0 : c.data, g = null == (l = null == (o = b[6]) ? void 0 : o[0]) ? void 0 : l.data;
						else {
							if (!(null == (h = null == (f = b[4]) ? void 0 : f[0]) ? void 0 : h.data) || 1 == r) throw "NUMBERS Tile missing ".concat(r, " cell storage");
							v = null == (d = null == (u = b[4]) ? void 0 : u[0]) ? void 0 : d.data, g = null == (m = null == (p = b[3]) ? void 0 : p[0]) ? void 0 : m.data;
						}
						for (var A = w ? 4 : 1, k = vc(v), S = [], y = 0; y < v.length / 2; ++y) {
							var C = k.getUint16(2 * y, !0);
							C < 65535 && S.push([y, C]);
						}
						if (S.length != E) throw "Expected ".concat(E, " cells, found ").concat(S.length);
						var _ = [];
						for (y = 0; y < S.length - 1; ++y) _[S[y][0]] = g[mc](S[y][1] * A, S[y + 1][1] * A);
						return S.length >= 1 && (_[S[S.length - 1][0]] = g[mc](S[S.length - 1][1] * A)), {
							R: T,
							cells: _
						};
					}(e, n);
				});
				return {
					nrows: wc(a[4][0].data) >>> 0,
					data: s.reduce(function(e, r) {
						return e[r.R] || (e[r.R] = []), r.cells.forEach(function(t, a) {
							if (e[r.R][a]) throw new Error("Duplicate cell r=".concat(r.R, " c=").concat(a));
							e[r.R][a] = t;
						}), e;
					}, [])
				};
			}(0, i);
			o.data.forEach(function(e, r) {
				e.forEach(function(e, n) {
					var s = Cc(e, k, a);
					s && (E ? (w["!data"][y + r] || (w["!data"][y + r] = []), w["!data"][y + r][n] = s) : t[Nt(n) + Rt(y + r)] = s);
				});
			}), y += o.nrows;
		}), null == (u = A[13]) ? void 0 : u[0]) {
			var C = e[_c(A[13][0].data)][0], _ = wc(C.meta[1][0].data);
			if (6144 != _) throw new Error("Expected merge type 6144, found ".concat(_));
			t["!merges"] = null == (d = Ac(C.data)) ? void 0 : d[1].map(function(e) {
				var r = Ac(e.data), t = vc(Ac(r[1][0].data)[1][0].data), a = vc(Ac(r[2][0].data)[1][0].data);
				return {
					s: {
						r: t.getUint16(0, !0),
						c: t.getUint16(2, !0)
					},
					e: {
						r: t.getUint16(0, !0) + a.getUint16(0, !0) - 1,
						c: t.getUint16(2, !0) + a.getUint16(2, !0) - 1
					}
				};
			});
		}
		if (!(null == (p = t["!merges"]) ? void 0 : p.length) && (null == (m = b[47]) ? void 0 : m[0])) {
			var x = Ac(b[47][0].data);
			if (null == (v = x[2]) ? void 0 : v[0]) {
				var O = Ac(x[2][0].data);
				null != (g = O[3]) && g[0] && (t["!merges"] = kc(O[3], function(e) {
					var r, t, a, n, s, i = Ac(Ac(Ac(e)[2][0].data)[1][0].data);
					if (null == (r = i[1]) ? void 0 : r[0]) {
						var c = Ac(i[1][0].data);
						if (67 == wc(c[1][0].data)) {
							var o = Ac(c[40][0].data);
							if ((null == (t = o[3]) ? void 0 : t[0]) && (null == (a = o[4]) ? void 0 : a[0])) {
								var l = Ac(o[3][0].data), f = Ac(o[4][0].data), h = wc(l[1][0].data), u = (null == (n = l[2]) ? void 0 : n[0]) ? wc(l[2][0].data) : h, d = wc(f[1][0].data);
								return {
									s: {
										r: d,
										c: h
									},
									e: {
										r: (null == (s = f[2]) ? void 0 : s[0]) ? wc(f[2][0].data) : d,
										c: u
									}
								};
							}
						}
					}
				}).filter(function(e) {
					return null != e;
				}));
			}
		}
	}(e, s[0], n, t), n;
}
function Ic(e, r) {
	var t, a, n, s, i, c, o, l = {}, f = [];
	if (e.FullPaths.forEach(function(e) {
		if (e.match(/\.iwpv2/)) throw new Error("Unsupported password protection");
	}), e.FileIndex.forEach(function(e) {
		if (e.name.match(/\.iwa$/) && 0 == e.content[0]) {
			var r, t;
			try {
				r = function(e) {
					Array.isArray(e) && (e = new Uint8Array(e));
					for (var r = [], t = 0; t < e.length;) {
						var a = e[t++], n = e[t] | e[t + 1] << 8 | e[t + 2] << 16;
						t += 3, r.push.apply(r, Sc(a, e[mc](t, t + n))), t += n;
					}
					if (t !== e.length) throw new Error("data is not a valid framed stream!");
					return 1 == r.length ? r[0] : bc(r);
				}(e.content);
			} catch (ao) {
				return;
			}
			try {
				t = function(e) {
					for (var r, t = [], a = { l: 0 }; a.l < e.length;) {
						var n = Ec(e, a), s = Ac(e[mc](a.l, a.l + n));
						a.l += n;
						var i = {
							id: wc(s[1][0].data),
							messages: []
						};
						s[2].forEach(function(r) {
							var t = Ac(r.data), n = wc(t[3][0].data);
							i.messages.push({
								meta: t,
								data: e[mc](a.l, a.l + n)
							}), a.l += n;
						}), null != (r = s[3]) && r[0] && (i.merge = wc(s[3][0].data) >>> 0 > 0), t.push(i);
					}
					return t;
				}(r);
			} catch (ao) {
				return;
			}
			t.forEach(function(e) {
				l[e.id] = e.messages, f.push(e.id);
			});
		}
	}), !f.length) throw new Error("File has no messages");
	if ((null == (n = null == (a = null == (t = null == l ? void 0 : l[1]) ? void 0 : t[0].meta) ? void 0 : a[1]) ? void 0 : n[0].data) && 1e4 == wc(l[1][0].meta[1][0].data)) throw new Error("Pages documents are not supported");
	var h = (null == (o = null == (c = null == (i = null == (s = null == l ? void 0 : l[1]) ? void 0 : s[0]) ? void 0 : i.meta) ? void 0 : c[1]) ? void 0 : o[0].data) && 1 == wc(l[1][0].meta[1][0].data) && l[1][0];
	if (h || f.forEach(function(e) {
		l[e].forEach(function(e) {
			if (wc(e.meta[1][0].data) >>> 0 == 1) {
				if (h) throw new Error("Document has multiple roots");
				h = e;
			}
		});
	}), !h) throw new Error("Cannot find Document root");
	return function(e, r, t) {
		var a, n = Kc();
		n.Workbook = { WBProps: { date1904: !0 } };
		var s = Ac(r.data);
		if (null == (a = s[2]) ? void 0 : a[0]) throw new Error("Keynote presentations are not supported");
		if (kc(s[1], _c).forEach(function(r) {
			e[r].forEach(function(r) {
				if (2 == wc(r.meta[1][0].data)) {
					var a = function(e, r, t) {
						var a, n = Ac(r.data), s = {
							name: (null == (a = n[1]) ? void 0 : a[0]) ? gc(n[1][0].data) : "",
							sheets: []
						};
						return kc(n[2], _c).forEach(function(r) {
							e[r].forEach(function(r) {
								6e3 == wc(r.meta[1][0].data) && s.sheets.push(Rc(e, r, t));
							});
						}), s;
					}(e, r, t);
					a.sheets.forEach(function(e, r) {
						Yc(n, e, 0 == r ? a.name : a.name + "_" + r, !0);
					});
				}
			});
		}), 0 == n.SheetNames.length) throw new Error("Empty NUMBERS file");
		return n.bookType = "numbers", n;
	}(l, h, r);
}
function Nc(e) {
	var r;
	(r = [
		["cellNF", !1],
		["cellHTML", !0],
		["cellFormula", !0],
		["cellStyles", !1],
		["cellText", !0],
		["cellDates", !1],
		["sheetStubs", !1],
		[
			"sheetRows",
			0,
			"n"
		],
		["bookDeps", !1],
		["bookSheets", !1],
		["bookProps", !1],
		["bookFiles", !1],
		["bookVBA", !1],
		["password", ""],
		["WTF", !1]
	], function(e) {
		for (var t = 0; t != r.length; ++t) {
			var a = r[t];
			void 0 === e[a[0]] && (e[a[0]] = a[1]), "n" === a[2] && (e[a[0]] = Number(e[a[0]]));
		}
	})(e);
}
function Dc(e, r, t, a, n, s, i, c, o, l, f, h) {
	try {
		s[a] = ga(nr(e, t, !0), r);
		var u, d = ar(e, r);
		switch (c) {
			case "sheet":
				u = Ui(d, r, n, o, s[a], l, f, h);
				break;
			case "chart":
				if (!(u = function(e, r, t, a, n, s) {
					return ".bin" === r.slice(-4) ? function(e, r, t, a, n) {
						if (!e) return e;
						a || (a = { "!id": {} });
						var s = {
							"!type": "chart",
							"!drawel": null,
							"!rel": ""
						}, i = [], c = !1;
						return kt(e, function(e, a, o) {
							switch (o) {
								case 550:
									s["!rel"] = e;
									break;
								case 651:
									n.Sheets[t] || (n.Sheets[t] = {}), e.name && (n.Sheets[t].CodeName = e.name);
									break;
								case 562:
								case 652:
								case 669:
								case 679:
								case 551:
								case 552:
								case 476:
								case 3072: break;
								case 35:
									c = !0;
									break;
								case 36:
									c = !1;
									break;
								case 37:
									i.push(o);
									break;
								case 38:
									i.pop();
									break;
								default: if (a.T > 0) i.push(o);
								else if (a.T < 0) i.pop();
								else if (!c || r.WTF) throw new Error("Unexpected record 0x" + o.toString(16));
							}
						}, r), a["!id"][s["!rel"]] && (s["!drawel"] = a["!id"][s["!rel"]]), s;
					}(e, a, t, n, s) : function(e, r, t, a, n) {
						if (!e) return e;
						a || (a = { "!id": {} });
						var s, i = {
							"!type": "chart",
							"!drawel": null,
							"!rel": ""
						}, c = e.match(Ei);
						return c && wi(c[0], 0, n, t), (s = e.match(/drawing r:id="(.*?)"/)) && (i["!rel"] = s[1]), a["!id"][i["!rel"]] && (i["!drawel"] = a["!id"][i["!rel"]]), i;
					}(e, 0, t, n, s);
				}(d, r, n, o, s[a], l)) || !u["!drawel"]) break;
				var p = or(u["!drawel"].Target, r), m = va(p), v = or(function(e, r) {
					if (!e) return "??";
					var t = (e.match(/<c:chart [^<>]*r:id="([^<>"]*)"/) || ["", ""])[1];
					return r["!id"][t].Target;
				}(nr(e, p, !0), ga(nr(e, m, !0), p)), p), g = va(v);
				u = function(e, r, t, a, n, s) {
					var i = s || { "!type": "chart" };
					if (!e) return s;
					var c = 0, o = 0, l = "A", f = {
						s: {
							r: 2e6,
							c: 2e6
						},
						e: {
							r: 0,
							c: 0
						}
					};
					return ($e(e, "<c:numCache>", "</c:numCache>") || []).forEach(function(e) {
						var r = function(e) {
							var r, t = [], a = e.match(/^<c:numCache>/);
							(e.match(/<c:pt idx="(\d*)"[^<>\/]*><c:v>([^<])<\/c:v><\/c:pt>/gm) || []).forEach(function(e) {
								var r = e.match(/<c:pt idx="(\d*)"[^<>\/]*><c:v>([^<]*)<\/c:v><\/c:pt>/);
								r && (t[+r[1]] = a ? +r[2] : r[2]);
							});
							var n = Er((Ke(e, "c:formatCode") || ["", "General"])[1]);
							return ($e(e, "<c:f>", "</c:f>") || []).forEach(function(e) {
								r = e.replace(/<[^<>]*>/g, "");
							}), [
								t,
								n,
								r
							];
						}(e);
						f.s.r = f.s.c = 0, f.e.c = c, l = Nt(c), r[0].forEach(function(e, t) {
							i["!data"] ? (i["!data"][t] || (i["!data"][t] = []), i["!data"][t][c] = {
								t: "n",
								v: e,
								z: r[1]
							}) : i[l + Rt(t)] = {
								t: "n",
								v: e,
								z: r[1]
							}, o = t;
						}), f.e.r < o && (f.e.r = o), ++c;
					}), c > 0 && (i["!ref"] = Mt(f)), i;
				}(nr(e, v, !0), 0, 0, ga(nr(e, g, !0), v), 0, u);
				break;
			case "macro":
				E = r, s[a], E.slice(-4), u = { "!type": "macro" };
				break;
			case "dialog":
				u = function(e, r) {
					return r.slice(-4), { "!type": "dialog" };
				}(0, r, s[a]);
				break;
			default: throw new Error("Unrecognized sheet type " + c);
		}
		i[a] = u;
		var b = [], T = [];
		s && s[a] && Te(s[a]).forEach(function(t) {
			var n = "";
			if (s[a][t].Type == ma.CMNT) {
				if (n = or(s[a][t].Target, r), !(b = function(e, r, t) {
					return ".bin" === r.slice(-4) ? function(e, r) {
						var t = [], a = [], n = {}, s = !1;
						return kt(e, function(e, i, c) {
							switch (c) {
								case 632:
									a.push(e);
									break;
								case 635:
									n = e;
									break;
								case 637:
									n.t = e.t, n.h = e.h, n.r = e.r;
									break;
								case 636:
									if (n.author = a[n.iauthor], delete n.iauthor, r.sheetRows && n.rfx && r.sheetRows <= n.rfx.r) break;
									n.t || (n.t = ""), delete n.rfx, t.push(n);
									break;
								case 3072:
								case 37:
								case 38: break;
								case 35:
									s = !0;
									break;
								case 36:
									s = !1;
									break;
								default: if (i.T);
								else if (!s || r.WTF) throw new Error("Unexpected record 0x" + c.toString(16));
							}
						}), t;
					}(e, t) : function(e, r) {
						if (e.match(/<(?:\w+:)?comments *\/>/)) return [];
						var t = [], a = [], n = Ye(e, "authors");
						n && n[1] && n[1].split(/<\/\w*:?author>/).forEach(function(e) {
							if ("" !== e && "" !== e.trim()) {
								var r = e.match(/<(?:\w+:)?author[^<>]*>(.*)/);
								r && t.push(r[1]);
							}
						});
						var s = Ye(e, "commentList");
						return s && s[1] && s[1].split(/<\/\w*:?comment>/).forEach(function(e) {
							if ("" !== e && "" !== e.trim()) {
								var n = e.match(/<(?:\w+:)?comment[^<>]*>/);
								if (n) {
									var s = mr(n[0]), i = {
										author: s.authorId && t[s.authorId] || "sheetjsghost",
										ref: s.ref,
										guid: s.guid
									}, c = Dt(s.ref);
									if (!(r.sheetRows && r.sheetRows <= c.r)) {
										var o = Ye(e, "text"), l = !!o && !!o[1] && Nn(o[1]) || {
											r: "",
											t: "",
											h: ""
										};
										i.r = l.r, "<t></t>" == l.r && (l.t = l.h = ""), i.t = (l.t || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n"), r.cellHTML && (i.h = l.h), a.push(i);
									}
								}
							}
						}), a;
					}(e, t);
				}(ar(e, n, !0), n, o)) || !b.length) return;
				ps(u, b, !1);
			}
			s[a][t].Type == ma.TCMNT && (n = or(s[a][t].Target, r), T = T.concat(function(e, r) {
				var t = [], a = !1, n = {}, s = 0;
				return e.replace(ur, function(i, c) {
					var o = mr(i);
					switch (gr(o[0])) {
						case "<?xml":
						case "<ThreadedComments":
						case "</ThreadedComments>":
						case "<extLst":
						case "<extLst>":
						case "</extLst>":
						case "<extLst/>": break;
						case "<threadedComment":
							n = {
								author: o.personId,
								guid: o.id,
								ref: o.ref,
								T: 1
							};
							break;
						case "</threadedComment>":
							null != n.t && t.push(n);
							break;
						case "<text>":
						case "<text":
							s = c + i.length;
							break;
						case "</text>":
							n.t = e.slice(s, c).replace(/\r\n/g, "\n").replace(/\r/g, "\n");
							break;
						case "<mentions":
						case "<mentions>":
						case "<ext":
							a = !0;
							break;
						case "</mentions>":
						case "</ext>":
							a = !1;
							break;
						default: if (!a && r.WTF) throw new Error("unrecognized " + o[0] + " in threaded comments");
					}
					return i;
				}), t;
			}(ar(e, n, !0), o)));
		}), T && T.length && ps(u, T, !0, o.people || []), function(e, r, t, a, n, s, i, c) {
			if (e && e["!legdrawel"]) {
				var o = nr(t, or(e["!legdrawel"].Target, a), !0);
				o && function(e, r, t) {
					var a = 0;
					(Je(e, "shape") || []).forEach(function(e) {
						var n = "", s = !0, i = -1, c = -1, o = -1;
						if (e.replace(ur, function(r, t) {
							var a = mr(r);
							switch (gr(a[0])) {
								case "<ClientData":
									a.ObjectType && (n = a.ObjectType);
									break;
								case "<Visible":
								case "<Visible/>":
									s = !1;
									break;
								case "<Row":
								case "<Row>":
								case "<Column":
								case "<Column>":
									i = t + r.length;
									break;
								case "</Row>":
									c = +e.slice(i, t).trim();
									break;
								case "</Column>": o = +e.slice(i, t).trim();
							}
							return "";
						}), "Note" === n) {
							var l = jc(r, c >= 0 && o >= 0 ? Ft({
								r: c,
								c: o
							}) : t[a].ref);
							l.c && (l.c.hidden = s), ++a;
						}
					});
				}(Rr(o), e, c || []);
			}
		}(u, 0, e, r, 0, 0, 0, b);
	} catch (ao) {
		if (o.WTF) throw ao;
	}
	var E;
}
function Fc(e) {
	return "/" == e.charAt(0) ? e.slice(1) : e;
}
function Pc(e, r) {
	if (he(), Nc(r = r || {}), rr(e, "META-INF/manifest.xml")) return dc(e, r);
	if (rr(e, "objectdata.xml")) return dc(e, r);
	if (rr(e, "Index/Document.iwa")) {
		if ("undefined" == typeof Uint8Array) throw new Error("NUMBERS file parsing requires Uint8Array support");
		if (void 0 !== Ic) {
			if (e.FileIndex) return Ic(e, r);
			var t = be.utils.cfb_new();
			return ir(e).forEach(function(r) {
				(function(e, r, t) {
					if (e.FullPaths) {
						var a;
						if (Array.isArray(t) && "string" == typeof t[0] && (t = t.join("")), "string" == typeof t) return a = m ? v(t) : function(e) {
							for (var r = [], t = 0, a = e.length + 250, n = b(e.length + 255), s = 0; s < e.length; ++s) {
								var i = e.charCodeAt(s);
								if (i < 128) n[t++] = i;
								else if (i < 2048) n[t++] = 192 | i >> 6 & 31, n[t++] = 128 | 63 & i;
								else if (i >= 55296 && i < 57344) {
									i = 64 + (1023 & i);
									var c = 1023 & e.charCodeAt(++s);
									n[t++] = 240 | i >> 8 & 7, n[t++] = 128 | i >> 2 & 63, n[t++] = 128 | c >> 6 & 15 | (3 & i) << 4, n[t++] = 128 | 63 & c;
								} else n[t++] = 224 | i >> 12 & 15, n[t++] = 128 | i >> 6 & 63, n[t++] = 128 | 63 & i;
								t > a && (r.push(n.slice(0, t)), t = 0, n = b(65535), a = 65530);
							}
							return r.push(n.slice(0, t)), k(r);
						}(t), be.utils.cfb_add(e, r, a);
						be.utils.cfb_add(e, r, t);
					} else e.file(r, t);
				})(t, r, sr(e, r));
			}), Ic(t, r);
		}
		throw new Error("Unsupported NUMBERS file");
	}
	if (!rr(e, "[Content_Types].xml")) {
		if (rr(e, "index.xml.gz")) throw new Error("Unsupported NUMBERS 08 file");
		if (rr(e, "index.xml")) throw new Error("Unsupported NUMBERS 09 file");
		var a = be.find(e, "Index.zip");
		if (a) return delete (r = Ne(r)).type, "string" == typeof a.content && (r.type = "binary"), "undefined" != typeof Bun && Buffer.isBuffer(a.content) ? Hc(new Uint8Array(a.content), r) : Hc(a.content, r);
		throw new Error("Unsupported ZIP file");
	}
	var n, s, i = ir(e), c = function(e) {
		var r = {
			workbooks: [],
			sheets: [],
			charts: [],
			dialogs: [],
			macros: [],
			rels: [],
			strs: [],
			comments: [],
			threadedcomments: [],
			links: [],
			coreprops: [],
			extprops: [],
			custprops: [],
			themes: [],
			styles: [],
			calcchains: [],
			vba: [],
			drawings: [],
			metadata: [],
			people: [],
			TODO: [],
			xmlns: ""
		};
		if (!e || !e.match) return r;
		var t = {};
		if ((e.match(ur) || []).forEach(function(e) {
			var a = mr(e);
			switch (a[0].replace(dr, "<")) {
				case "<?xml": break;
				case "<Types":
					r.xmlns = a["xmlns" + (a[0].match(/<(\w+):/) || ["", ""])[1]];
					break;
				case "<Default":
					t[a.Extension.toLowerCase()] = a.ContentType;
					break;
				case "<Override": void 0 !== r[pa[a.ContentType]] && r[pa[a.ContentType]].push(a.PartName);
			}
		}), "http://schemas.openxmlformats.org/package/2006/content-types" !== r.xmlns) throw new Error("Unknown Namespace: " + r.xmlns);
		return r.calcchain = r.calcchains.length > 0 ? r.calcchains[0] : "", r.sst = r.strs.length > 0 ? r.strs[0] : "", r.style = r.styles.length > 0 ? r.styles[0] : "", r.defaults = t, delete r.calcchains, r;
	}(nr(e, "[Content_Types].xml")), o = !1;
	if (0 === c.workbooks.length && ar(e, s = "xl/workbook.xml", !0) && c.workbooks.push(s), 0 === c.workbooks.length) {
		if (!ar(e, s = "xl/workbook.bin", !0)) throw new Error("Could not find workbook");
		c.workbooks.push(s), o = !0;
	}
	"bin" == c.workbooks[0].slice(-3) && (o = !0);
	var l = {}, f = {};
	if (!r.bookSheets && !r.bookProps) {
		if (fi = [], c.sst) try {
			fi = function(e, r, t) {
				return ".bin" === r.slice(-4) ? function(e, r) {
					var t = [], a = !1;
					return kt(e, function(e, n, s) {
						switch (s) {
							case 159:
								t.Count = e[0], t.Unique = e[1];
								break;
							case 19:
								t.push(e);
								break;
							case 160: return !0;
							case 35:
								a = !0;
								break;
							case 36:
								a = !1;
								break;
							default: if (n.T, !a || r.WTF) throw new Error("Unexpected record 0x" + s.toString(16));
						}
					}), t;
				}(e, t) : function(e, r) {
					var t = [], a = "";
					if (!e) return t;
					var n = Ye(e, "sst");
					if (n) {
						a = n[1].replace(Dn, "").split(Fn);
						for (var s = 0; s != a.length; ++s) {
							var i = Nn(a[s].trim(), r);
							null != i && (t[t.length] = i);
						}
						n = mr(n[0].slice(0, n[0].indexOf(">"))), t.Count = n.count, t.Unique = n.uniqueCount;
					}
					return t;
				}(e, t);
			}(ar(e, Fc(c.sst)), c.sst, r);
		} catch (ao) {
			if (r.WTF) throw ao;
		}
		r.cellStyles && c.themes.length && (l = hs(nr(e, c.themes[0].replace(/^\//, ""), !0) || "", r)), c.style && (f = function(e, r, t, a) {
			return ".bin" === r.slice(-4) ? function(e, r, t) {
				var a = { NumberFmt: [] };
				for (var n in P) a.NumberFmt[n] = P[n];
				a.CellXf = [], a.Fonts = [];
				var s = [], i = !1;
				return kt(e, function(e, n, c) {
					switch (c) {
						case 44:
							a.NumberFmt[e[0]] = e[1], ve(e[1], e[0]);
							break;
						case 43:
							a.Fonts.push(e), null != e.color.theme && r && r.themeElements && r.themeElements.clrScheme && (e.color.rgb = jn(r.themeElements.clrScheme[e.color.theme].rgb, e.color.tint || 0));
							break;
						case 1025:
						case 45:
						case 46:
						case 48:
						case 507:
						case 572:
						case 475:
						case 1171:
						case 2102:
						case 1130:
						case 512:
						case 2095:
						case 3072: break;
						case 47:
							617 == s[s.length - 1] && a.CellXf.push(e);
							break;
						case 35:
							i = !0;
							break;
						case 36:
							i = !1;
							break;
						case 37:
							s.push(c), i = !0;
							break;
						case 38:
							s.pop(), i = !1;
							break;
						default: if (n.T > 0) s.push(c);
						else if (n.T < 0) s.pop();
						else if (!i || t.WTF && 37 != s[s.length - 1]) throw new Error("Unexpected record 0x" + c.toString(16));
					}
				}), a;
			}(e, t, a) : cs(e, t, a);
		}(ar(e, Fc(c.style)), c.style, l, r));
	}
	c.links.map(function(t) {
		try {
			return ga(nr(e, va(Fc(t))), t), function(e, r, t, a) {
				if (".bin" === t.slice(-4)) return function(e, r, t, a) {
					if (!e) return e;
					var n = a || {}, s = !1;
					kt(e, function(e, r, t) {
						switch (t) {
							case 359:
							case 363:
							case 364:
							case 366:
							case 367:
							case 368:
							case 369:
							case 370:
							case 371:
							case 472:
							case 577:
							case 578:
							case 579:
							case 580:
							case 581:
							case 582:
							case 583:
							case 584:
							case 585:
							case 586:
							case 587: break;
							case 35:
								s = !0;
								break;
							case 36:
								s = !1;
								break;
							default: if (r.T);
							else if (!s || n.WTF) throw new Error("Unexpected record 0x" + t.toString(16));
						}
					}, n);
				}(e, 0, 0, a);
			}(ar(e, Fc(t)), 0, t, r);
		} catch (ao) {}
	});
	var h = function(e, r, t) {
		return ".bin" === r.slice(-4) ? function(e, r) {
			var t = {
				AppVersion: {},
				WBProps: {},
				WBView: [],
				Sheets: [],
				CalcPr: {},
				xmlns: ""
			}, a = [], n = !1;
			r || (r = {}), r.biff = 12;
			var s = [], i = [[]];
			return i.SheetNames = [], i.XTI = [], tc[16] = {
				n: "BrtFRTArchID$",
				f: Li
			}, kt(e, function(e, c, o) {
				switch (o) {
					case 156:
						i.SheetNames.push(e.name), t.Sheets.push(e);
						break;
					case 153:
						t.WBProps = e;
						break;
					case 39:
						null != e.Sheet && (r.SID = e.Sheet), e.Ref = e.Ptg ? Js(e.Ptg, 0, null, i, r) : "#REF!", delete r.SID, delete e.Ptg, s.push(e);
						break;
					case 1036:
					case 361:
					case 2071:
					case 158:
					case 143:
					case 664:
					case 353:
					case 3072:
					case 3073:
					case 534:
					case 677:
					case 157:
					case 610:
					case 2050:
					case 155:
					case 548:
					case 676:
					case 128:
					case 665:
					case 2128:
					case 2125:
					case 549:
					case 2053:
					case 596:
					case 2076:
					case 2075:
					case 2082:
					case 397:
					case 154:
					case 1117:
					case 553:
					case 2091:
					case 16: break;
					case 357:
					case 358:
					case 355:
					case 667:
						i[0].length ? i.push([o, e]) : i[0] = [o, e], i[i.length - 1].XTI = [];
						break;
					case 362:
						0 === i.length && (i[0] = [], i[0].XTI = []), i[i.length - 1].XTI = i[i.length - 1].XTI.concat(e), i.XTI = i.XTI.concat(e);
						break;
					case 35:
					case 37:
						a.push(o), n = !0;
						break;
					case 36:
					case 38:
						a.pop(), n = !1;
						break;
					default: if (c.T);
					else if (!n || r.WTF && 37 != a[a.length - 1] && 35 != a[a.length - 1]) throw new Error("Unexpected record 0x" + o.toString(16));
				}
			}, r), Fi(t), t.Names = s, t.supbooks = i, t;
		}(e, t) : function(e, r) {
			if (!e) throw new Error("Could not find file");
			var t = {
				AppVersion: {},
				WBProps: {},
				WBView: [],
				Sheets: [],
				CalcPr: {},
				Names: [],
				xmlns: ""
			}, a = !1, n = "xmlns", s = {}, i = 0;
			if (e.replace(ur, function(c, o) {
				var l = mr(c);
				switch (gr(l[0])) {
					case "<?xml":
					case "</workbook>":
					case "<fileVersion/>":
					case "</fileVersion>":
					case "<fileSharing":
					case "<fileSharing/>":
					case "</workbookPr>":
					case "<workbookProtection":
					case "<workbookProtection/>":
					case "<bookViews":
					case "<bookViews>":
					case "</bookViews>":
					case "</workbookView>":
					case "<sheets":
					case "<sheets>":
					case "</sheets>":
					case "</sheet>":
					case "<functionGroups":
					case "<functionGroups/>":
					case "<functionGroup":
					case "<externalReferences":
					case "</externalReferences>":
					case "<externalReferences>":
					case "<externalReference":
					case "<definedNames/>":
					case "<definedName/>":
					case "</calcPr>":
					case "<oleSize":
					case "<customWorkbookViews>":
					case "</customWorkbookViews>":
					case "<customWorkbookViews":
					case "<customWorkbookView":
					case "</customWorkbookView>":
					case "<pivotCaches>":
					case "</pivotCaches>":
					case "<pivotCaches":
					case "<pivotCache":
					case "<smartTagPr":
					case "<smartTagPr/>":
					case "<smartTagTypes":
					case "<smartTagTypes>":
					case "</smartTagTypes>":
					case "<smartTagType":
					case "<webPublishing":
					case "<webPublishing/>":
					case "<fileRecoveryPr":
					case "<fileRecoveryPr/>":
					case "<webPublishObjects>":
					case "<webPublishObjects":
					case "</webPublishObjects>":
					case "<webPublishObject":
					case "<extLst":
					case "<extLst>":
					case "</extLst>":
					case "<extLst/>":
					case "<ArchID":
					case "<revisionPtr": break;
					case "<workbook":
						c.match(Mi) && (n = "xmlns" + c.match(/<(\w+):/)[1]), t.xmlns = l[n];
						break;
					case "<fileVersion":
						delete l[0], t.AppVersion = l;
						break;
					case "<workbookPr":
					case "<workbookPr/>":
						xi.forEach(function(e) {
							if (null != l[e[0]]) switch (e[2]) {
								case "bool":
									t.WBProps[e[0]] = yr(l[e[0]]);
									break;
								case "int":
									t.WBProps[e[0]] = parseInt(l[e[0]], 10);
									break;
								default: t.WBProps[e[0]] = l[e[0]];
							}
						}), l.codeName && (t.WBProps.CodeName = Rr(l.codeName));
						break;
					case "<workbookView":
					case "<workbookView/>":
						delete l[0], t.WBView.push(l);
						break;
					case "<sheet":
						switch (l.state) {
							case "hidden":
								l.Hidden = 1;
								break;
							case "veryHidden":
								l.Hidden = 2;
								break;
							default: l.Hidden = 0;
						}
						delete l.state, l.name = Er(Rr(l.name)), delete l[0], t.Sheets.push(l);
						break;
					case "<definedNames>":
					case "<definedNames":
					case "<ext":
					case "<AlternateContent":
					case "<AlternateContent>":
						a = !0;
						break;
					case "</definedNames>":
					case "</ext>":
					case "</AlternateContent>":
						a = !1;
						break;
					case "<definedName":
						(s = {}).Name = Rr(l.name), l.comment && (s.Comment = l.comment), l.localSheetId && (s.Sheet = +l.localSheetId), yr(l.hidden || "0") && (s.Hidden = !0), i = o + c.length;
						break;
					case "</definedName>":
						s.Ref = Er(Rr(e.slice(i, o))), t.Names.push(s);
						break;
					case "<calcPr":
					case "<calcPr/>":
						delete l[0], t.CalcPr = l;
						break;
					default: if (!a && r.WTF) throw new Error("unrecognized " + l[0] + " in workbook");
				}
				return c;
			}), -1 === Hr.indexOf(t.xmlns)) throw new Error("Unknown Namespace: " + t.xmlns);
			return Fi(t), t;
		}(e, t);
	}(ar(e, Fc(c.workbooks[0])), c.workbooks[0], r), u = {}, d = "";
	c.coreprops.length && ((d = ar(e, Fc(c.coreprops[0]), !0)) && (u = Ta(d)), 0 !== c.extprops.length && (d = ar(e, Fc(c.extprops[0]), !0)) && function(e, r, t) {
		var a = {};
		r || (r = {}), e = Rr(e), Ea.forEach(function(t) {
			var n = (Ye(e, t[0]) || [])[1];
			switch (t[2]) {
				case "string":
					n && (r[t[1]] = Er(n));
					break;
				case "bool":
					r[t[1]] = "true" === n;
					break;
				case "raw":
					var s = Ke(e, t[0]);
					s && s.length > 0 && (a[t[1]] = s[1]);
			}
		}), a.HeadingPairs && a.TitlesOfParts && wa(a.HeadingPairs, a.TitlesOfParts, r, t);
	}(d, u, r));
	var p = {};
	r.bookSheets && !r.bookProps || 0 !== c.custprops.length && (d = nr(e, Fc(c.custprops[0]), !0)) && (p = function(e, r) {
		var t = {}, a = "", n = e.match(ka);
		if (n) for (var s = 0; s != n.length; ++s) {
			var i = n[s], c = mr(i);
			switch (gr(c[0])) {
				case "<?xml":
				case "<Properties": break;
				case "<property":
					a = Er(c.name);
					break;
				case "</property>":
					a = null;
					break;
				default: if (0 === i.indexOf("<vt:")) {
					var o = i.split(">"), l = o[0].slice(4), f = o[1];
					switch (l) {
						case "lpstr":
						case "bstr":
						case "lpwstr":
						case "cy":
						case "error":
							t[a] = Er(f);
							break;
						case "bool":
							t[a] = yr(f);
							break;
						case "i1":
						case "i2":
						case "i4":
						case "i8":
						case "int":
						case "uint":
							t[a] = parseInt(f, 10);
							break;
						case "r4":
						case "r8":
						case "decimal":
							t[a] = parseFloat(f);
							break;
						case "filetime":
						case "date":
							t[a] = Re(f);
							break;
						default:
							if ("/" == l.slice(-1)) break;
							r.WTF && "undefined" != typeof console && console.warn("Unexpected", i, l, o);
					}
				} else if ("</" === i.slice(0, 2));
				else if (r.WTF) throw new Error(i);
			}
		}
		return t;
	}(d, r));
	var g = {};
	if ((r.bookSheets || r.bookProps) && (h.Sheets ? n = h.Sheets.map(function(e) {
		return e.name;
	}) : u.Worksheets && u.SheetNames.length > 0 && (n = u.SheetNames), r.bookProps && (g.Props = u, g.Custprops = p), r.bookSheets && void 0 !== n && (g.SheetNames = n), r.bookSheets ? g.SheetNames : r.bookProps)) return g;
	n = {};
	var T, E = {};
	r.bookDeps && c.calcchain && (T = ar(e, Fc(c.calcchain)), E = ".bin" === c.calcchain.slice(-4) ? function(e) {
		var r = [];
		return kt(e, function(e, t, a) {
			if (63 === a) r.push(e);
			else if (!t.T) throw new Error("Unexpected record 0x" + a.toString(16));
		}), r;
	}(T) : function(e) {
		var r = [];
		if (!e) return r;
		var t = 1;
		return (e.match(ur) || []).forEach(function(e) {
			var a = mr(e);
			switch (a[0]) {
				case "<?xml":
				case "<calcChain":
				case "<calcChain>":
				case "</calcChain>": break;
				case "<c": delete a[0], a.i ? t = a.i : a.i = t, r.push(a);
			}
		}), r;
	}(T));
	var w, A, S = 0, y = {}, C = h.Sheets;
	u.Worksheets = C.length, u.SheetNames = [];
	for (var _ = 0; _ != C.length; ++_) u.SheetNames[_] = C[_].name;
	var x = o ? "bin" : "xml", O = c.workbooks[0].lastIndexOf("/"), R = (c.workbooks[0].slice(0, O + 1) + "_rels/" + c.workbooks[0].slice(O + 1) + ".rels").replace(/^\//, "");
	rr(e, R) || (R = "xl/_rels/workbook." + x + ".rels");
	var I = ga(nr(e, R, !0), R.replace(/_rels.*/, "s5s"));
	(c.metadata || []).length >= 1 && (r.xlmeta = function(e, r, t) {
		return ".bin" === r.slice(-4) ? function(e, r, t) {
			var a = {
				Types: [],
				Cell: [],
				Value: []
			}, n = t || {}, s = [], i = !1, c = 2;
			return kt(e, function(e, r, t) {
				switch (t) {
					case 335:
						a.Types.push({ name: e.name });
						break;
					case 51:
						e.forEach(function(e) {
							1 == c ? a.Cell.push({
								type: a.Types[e[0] - 1].name,
								index: e[1]
							}) : 0 == c && a.Value.push({
								type: a.Types[e[0] - 1].name,
								index: e[1]
							});
						});
						break;
					case 337:
						c = e ? 1 : 0;
						break;
					case 338:
						c = 2;
						break;
					case 35:
						s.push(t), i = !0;
						break;
					case 36:
						s.pop(), i = !1;
						break;
					default: if (r.T);
					else if (!i || n.WTF && 35 != s[s.length - 1]) throw new Error("Unexpected record 0x" + t.toString(16));
				}
			}), a;
		}(e, 0, t) : function(e, r, t) {
			var a = {
				Types: [],
				Cell: [],
				Value: []
			};
			if (!e) return a;
			var n, s = !1, i = 2;
			return e.replace(ur, function(e) {
				var r = mr(e);
				switch (gr(r[0])) {
					case "<?xml":
					case "<metadata":
					case "</metadata>":
					case "<metadataTypes":
					case "</metadataTypes>":
					case "</metadataType>":
					case "</futureMetadata>":
					case "<bk>":
					case "</bk>":
					case "</rc>":
					case "<extLst":
					case "<extLst>":
					case "</extLst>":
					case "<extLst/>": break;
					case "<metadataType":
						a.Types.push({ name: r.name });
						break;
					case "<futureMetadata":
						for (var c = 0; c < a.Types.length; ++c) a.Types[c].name == r.name && (n = a.Types[c]);
						break;
					case "<rc":
						1 == i ? a.Cell.push({
							type: a.Types[r.t - 1].name,
							index: +r.v
						}) : 0 == i && a.Value.push({
							type: a.Types[r.t - 1].name,
							index: +r.v
						});
						break;
					case "<cellMetadata":
						i = 1;
						break;
					case "</cellMetadata>":
					case "</valueMetadata>":
						i = 2;
						break;
					case "<valueMetadata":
						i = 0;
						break;
					case "<ext":
						s = !0;
						break;
					case "</ext>":
						s = !1;
						break;
					case "<rvb":
						if (!n) break;
						n.offsets || (n.offsets = []), n.offsets.push(+r.i);
						break;
					default: if (!s && (null == t ? void 0 : t.WTF)) throw new Error("unrecognized " + r[0] + " in metadata");
				}
				return e;
			}), a;
		}(e, 0, t);
	}(ar(e, Fc(c.metadata[0])), c.metadata[0], r)), (c.people || []).length >= 1 && (r.people = function(e, r) {
		var t = [], a = !1;
		return e.replace(ur, function(e) {
			var n = mr(e);
			switch (gr(n[0])) {
				case "<?xml":
				case "<personList":
				case "</personList>":
				case "</person>":
				case "<extLst":
				case "<extLst>":
				case "</extLst>":
				case "<extLst/>": break;
				case "<person":
					t.push({
						name: n.displayname,
						id: n.id
					});
					break;
				case "<ext":
					a = !0;
					break;
				case "</ext>":
					a = !1;
					break;
				default: if (!a && r.WTF) throw new Error("unrecognized " + n[0] + " in threaded comments");
			}
			return e;
		}), t;
	}(ar(e, Fc(c.people[0])), r)), I && (I = function(e, r) {
		if (!e) return 0;
		try {
			e = r.map(function(r) {
				return r.id || (r.id = r.strRelID), [
					r.name,
					e["!id"][r.id].Target,
					(t = e["!id"][r.id].Type, ma.WS.indexOf(t) > -1 ? "sheet" : ma.CS && t == ma.CS ? "chart" : ma.DS && t == ma.DS ? "dialog" : ma.MS && t == ma.MS ? "macro" : t && t.length ? t : "sheet")
				];
				var t;
			});
		} catch (ao) {
			return null;
		}
		return e && 0 !== e.length ? e : null;
	}(I, h.Sheets));
	var N = ar(e, "xl/worksheets/sheet.xml", !0) ? 1 : 0;
	e: for (S = 0; S != u.Worksheets; ++S) {
		var D = "sheet";
		if (I && I[S] ? (w = "xl/" + I[S][1].replace(/[\/]?xl\//, ""), rr(e, w) || (w = I[S][1]), rr(e, w) || (w = R.replace(/_rels\/[\S\s]*$/, "") + I[S][1]), D = I[S][2]) : w = (w = "xl/worksheets/sheet" + (S + 1 - N) + "." + x).replace(/sheet0\./, "sheet."), A = w.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels"), r && null != r.sheets) switch (typeof r.sheets) {
			case "number":
				if (S != r.sheets) continue e;
				break;
			case "string":
				if (u.SheetNames[S].toLowerCase() != r.sheets.toLowerCase()) continue e;
				break;
			default: if (Array.isArray && Array.isArray(r.sheets)) {
				for (var F = !1, M = 0; M != r.sheets.length; ++M) "number" == typeof r.sheets[M] && r.sheets[M] == S && (F = 1), "string" == typeof r.sheets[M] && r.sheets[M].toLowerCase() == u.SheetNames[S].toLowerCase() && (F = 1);
				if (!F) continue e;
			}
		}
		Dc(e, w, A, u.SheetNames[S], S, y, n, D, r, h, l, f);
	}
	return g = {
		Directory: c,
		Workbook: h,
		Props: u,
		Custprops: p,
		Deps: E,
		Sheets: n,
		SheetNames: u.SheetNames,
		Strings: fi,
		Styles: f,
		Themes: l,
		SSF: Ne(P)
	}, r && r.bookFiles && (e.files ? (g.keys = i, g.files = e.files) : (g.keys = [], g.files = {}, e.FullPaths.forEach(function(r, t) {
		r = r.replace(/^Root Entry[\/]/, ""), g.keys.push(r), g.files[r] = e.FileIndex[t];
	}))), r && r.bookVBA && (c.vba.length > 0 ? g.vbaraw = ar(e, Fc(c.vba[0]), !0) : c.defaults && "application/vnd.ms-office.vbaProject" === c.defaults.bin && (g.vbaraw = ar(e, "xl/vbaProject.bin", !0))), g.bookType = o ? "xlsb" : "xlsx", g;
}
function Mc(e, r) {
	var t, a, n = r || {}, s = "Workbook", i = be.find(e, s);
	try {
		if (s = "/!DataSpaces/Version", !(i = be.find(e, s)) || !i.content) throw new Error("ECMA-376 Encrypted file missing " + s);
		if (t = i.content, (a = {}).id = t.read_shift(0, "lpp4"), a.R = Mn(t, 4), a.U = Mn(t, 4), a.W = Mn(t, 4), s = "/!DataSpaces/DataSpaceMap", !(i = be.find(e, s)) || !i.content) throw new Error("ECMA-376 Encrypted file missing " + s);
		var c = function(e) {
			var r = [];
			e.l += 4;
			for (var t = e.read_shift(4); t-- > 0;) r.push(Ln(e));
			return r;
		}(i.content);
		if (1 !== c.length || 1 !== c[0].comps.length || 0 !== c[0].comps[0].t || "StrongEncryptionDataSpace" !== c[0].name || "EncryptedPackage" !== c[0].comps[0].v) throw new Error("ECMA-376 Encrypted file bad " + s);
		if (s = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace", !(i = be.find(e, s)) || !i.content) throw new Error("ECMA-376 Encrypted file missing " + s);
		var o = function(e) {
			var r = [];
			e.l += 4;
			for (var t = e.read_shift(4); t-- > 0;) r.push(e.read_shift(0, "lpp4"));
			return r;
		}(i.content);
		if (1 != o.length || "StrongEncryptionTransform" != o[0]) throw new Error("ECMA-376 Encrypted file bad " + s);
		if (s = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary", !(i = be.find(e, s)) || !i.content) throw new Error("ECMA-376 Encrypted file missing " + s);
		(function(e) {
			var r = function(e) {
				var r = {};
				return e.read_shift(4), e.l += 4, r.id = e.read_shift(0, "lpp4"), r.name = e.read_shift(0, "lpp4"), r.R = Mn(e, 4), r.U = Mn(e, 4), r.W = Mn(e, 4), r;
			}(e);
			if (r.ename = e.read_shift(0, "8lpp4"), r.blksz = e.read_shift(4), r.cmode = e.read_shift(4), 4 != e.read_shift(4)) throw new Error("Bad !Primary record");
		})(i.content);
	} catch (ao) {}
	if (s = "/EncryptionInfo", !(i = be.find(e, s)) || !i.content) throw new Error("ECMA-376 Encrypted file missing " + s);
	var l = function(e) {
		var r = Mn(e);
		switch (r.Minor) {
			case 2: return [r.Minor, Hn(e)];
			case 3: return [r.Minor, Wn()];
			case 4: return [r.Minor, zn(e)];
		}
		throw new Error("ECMA-376 Encrypted file unrecognized Version: " + r.Minor);
	}(i.content);
	if (s = "/EncryptedPackage", !(i = be.find(e, s)) || !i.content) throw new Error("ECMA-376 Encrypted file missing " + s);
	if (4 == l[0] && "undefined" != typeof decrypt_agile) return decrypt_agile(l[1], i.content, n.password || "", n);
	if (2 == l[0] && "undefined" != typeof decrypt_std76) return decrypt_std76(l[1], i.content, n.password || "", n);
	throw new Error("File is password-protected");
}
function Lc(e, r) {
	var t = "";
	switch ((r || {}).type || "base64") {
		case "buffer":
		case "array": return [
			e[0],
			e[1],
			e[2],
			e[3],
			e[4],
			e[5],
			e[6],
			e[7]
		];
		case "base64":
			t = p(e.slice(0, 12));
			break;
		case "binary":
			t = e;
			break;
		default: throw new Error("Unrecognized type " + (r && r.type || "undefined"));
	}
	return [
		t.charCodeAt(0),
		t.charCodeAt(1),
		t.charCodeAt(2),
		t.charCodeAt(3),
		t.charCodeAt(4),
		t.charCodeAt(5),
		t.charCodeAt(6),
		t.charCodeAt(7)
	];
}
function Uc(e, r) {
	var t = 0;
	e: for (; t < e.length;) switch (e.charCodeAt(t)) {
		case 10:
		case 13:
		case 32:
			++t;
			break;
		case 60: return Ji(e.slice(t), r);
		default: break e;
	}
	return Cn.to_workbook(e, r);
}
function Bc(e, r, t, a) {
	return a ? (t.type = "string", Cn.to_workbook(e, t)) : Cn.to_workbook(r, t);
}
function Hc(e, r) {
	s();
	var t = r || {};
	if (t.codepage && console.error("Codepage tables are not loaded.  Non-ASCII characters may not give expected results"), "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer) return Hc(new Uint8Array(e), ((t = Ne(t)).type = "array", t));
	if ("undefined" != typeof Int8Array && e instanceof Int8Array) return Hc(new Uint8Array(e.buffer, e.byteOffset, e.length), t);
	"undefined" != typeof Uint8Array && e instanceof Uint8Array && !t.type && (t.type = "undefined" != typeof Deno ? "buffer" : "array");
	var a, n = e, i = !1;
	if (t.cellStyles && (t.cellNF = !0, t.sheetStubs = !0), hi = {}, t.dateNF && (hi.dateNF = t.dateNF), t.type || (t.type = m && Buffer.isBuffer(e) ? "buffer" : "base64"), "file" == t.type && (t.type = m ? "buffer" : "binary", n = function(e) {
		if ("undefined" != typeof Deno) return Deno.readFileSync(e);
		if ("undefined" != typeof $ && "undefined" != typeof File && "undefined" != typeof Folder) try {
			var r = File(e);
			r.open("r"), r.encoding = "binary";
			var t = r.read();
			return r.close(), t;
		} catch (ao) {
			if (!ao.message || -1 == ao.message.indexOf("onstruct")) throw ao;
		}
		throw new Error("Cannot access file " + e);
	}(e), "undefined" == typeof Uint8Array || m || (t.type = "array")), "string" == t.type && (i = !0, t.type = "binary", t.codepage = 65001, n = function(e) {
		return e.match(/[^\x00-\x7F]/) ? Ir(e) : e;
	}(e)), "array" == t.type && "undefined" != typeof Uint8Array && e instanceof Uint8Array && "undefined" != typeof ArrayBuffer) {
		var o = new Uint8Array(/* @__PURE__ */ new ArrayBuffer(3));
		if (o.foo = "bar", !o.foo) return (t = Ne(t)).type = "array", Hc(A(n), t);
	}
	switch ((a = Lc(n, t))[0]) {
		case 208:
			if (207 === a[1] && 17 === a[2] && 224 === a[3] && 161 === a[4] && 177 === a[5] && 26 === a[6] && 225 === a[7]) return function(e, r) {
				return be.find(e, "EncryptedPackage") ? Mc(e, r) : rc(e, r);
			}(be.read(n, t), t);
			break;
		case 9:
			if (a[1] <= 8) return rc(n, t);
			break;
		case 60: return Ji(n, t);
		case 73:
			if (73 === a[1] && 42 === a[2] && 0 === a[3]) throw new Error("TIFF Image File is not a spreadsheet");
			if (68 === a[1]) return function(e, r) {
				var t = r || {}, a = !!t.WTF;
				t.WTF = !0;
				try {
					var n = kn.to_workbook(e, t);
					return t.WTF = a, n;
				} catch (ao) {
					if (t.WTF = a, -1 == ao.message.indexOf("SYLK bad record ID") && a) throw ao;
					return Cn.to_workbook(e, r);
				}
			}(n, t);
			break;
		case 84:
			if (65 === a[1] && 66 === a[2] && 76 === a[3]) return Sn.to_workbook(n, t);
			break;
		case 80: return 75 === a[1] && a[2] < 9 && a[3] < 9 ? function(e, r) {
			var t = e, a = r || {};
			return a.type || (a.type = m && Buffer.isBuffer(e) ? "buffer" : "base64"), Pc(cr(t, a), a);
		}(n, t) : Bc(e, n, t, i);
		case 239: return 60 === a[3] ? Ji(n, t) : Bc(e, n, t, i);
		case 255:
			if (254 === a[1]) return function(e, r) {
				var t = e;
				return "base64" == r.type && (t = p(t)), "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer && (t = new Uint8Array(e)), t = m && Buffer.isBuffer(e) ? e.slice(2).toString("utf16le") : "undefined" != typeof Uint8Array && t instanceof Uint8Array ? "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le").decode(t.slice(2)) : function(e) {
					for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e[2 * t] + (e[2 * t + 1] << 8));
					return r.join("");
				}(t.slice(2)) : c(t.slice(2)), r.type = "binary", Uc(t, r);
			}(n, t);
			if (0 === a[1] && 2 === a[2] && 0 === a[3]) return _n.to_workbook(n, t);
			break;
		case 0:
			if (0 === a[1]) {
				if (a[2] >= 2 && 0 === a[3]) return _n.to_workbook(n, t);
				if (0 === a[2] && (8 === a[3] || 9 === a[3])) return _n.to_workbook(n, t);
			}
			break;
		case 3:
		case 131:
		case 139:
		case 140: return An.to_workbook(n, t);
		case 123:
			if (92 === a[1] && 114 === a[2] && 116 === a[3]) return function(e, r) {
				var t = Bt(function(e, r) {
					switch (r.type) {
						case "base64": return $n(p(e), r);
						case "binary": return $n(e, r);
						case "buffer": return $n(m && Buffer.isBuffer(e) ? e.toString("binary") : w(e), r);
						case "array": return $n(Ie(e), r);
					}
					throw new Error("Unrecognized type " + r.type);
				}(e, r), r);
				return t.bookType = "rtf", t;
			}(n, t);
			break;
		case 10:
		case 13:
		case 32: return function(e, r) {
			var t = "", a = Lc(e, r);
			switch (r.type) {
				case "base64":
					t = p(e);
					break;
				case "binary":
					t = e;
					break;
				case "buffer":
					t = e.toString("binary");
					break;
				case "array":
					t = Ie(e);
					break;
				default: throw new Error("Unrecognized type " + r.type);
			}
			return 239 == a[0] && 187 == a[1] && 191 == a[2] && (t = Rr(t)), r.type = "binary", Uc(t, r);
		}(n, t);
		case 137:
			if (80 === a[1] && 78 === a[2] && 71 === a[3]) throw new Error("PNG Image File is not a spreadsheet");
			break;
		case 8:
			if (231 === a[1]) throw new Error("Unsupported Multiplan 1.x file!");
			break;
		case 12:
			if (236 === a[1]) throw new Error("Unsupported Multiplan 2.x file!");
			if (237 === a[1]) throw new Error("Unsupported Multiplan 3.x file!");
	}
	return wn.indexOf(a[0]) > -1 && a[2] <= 12 && a[3] <= 31 ? An.to_workbook(n, t) : Bc(e, n, t, i);
}
function Wc(e, r, t, a, n, s, i) {
	var c = Rt(t), o = i.defval, l = i.raw || !Object.prototype.hasOwnProperty.call(i, "raw"), f = !0, h = null != e["!data"], u = 1 === n ? [] : {};
	if (1 !== n) if (Object.defineProperty) try {
		Object.defineProperty(u, "__rowNum__", {
			value: t,
			enumerable: !1
		});
	} catch (ao) {
		u.__rowNum__ = t;
	}
	else u.__rowNum__ = t;
	if (!h || e["!data"][t]) for (var d = r.s.c; d <= r.e.c; ++d) {
		var p = h ? (e["!data"][t] || [])[d] : e[a[d] + c];
		if (null != p && void 0 !== p.t) {
			var m = p.v;
			switch (p.t) {
				case "z":
					if (null == m) break;
					continue;
				case "e":
					m = 0 == m ? null : void 0;
					break;
				case "s":
				case "b":
				case "n":
					if (!p.z || !ie(p.z)) break;
					if ("number" == typeof (m = ye(m))) break;
				case "d":
					i && (i.UTC || !1 === i.raw) || (m = ze(new Date(m)));
					break;
				default: throw new Error("unrecognized type " + p.t);
			}
			if (null != s[d]) {
				if (null == m) if ("e" == p.t && null === m) u[s[d]] = null;
				else if (void 0 !== o) u[s[d]] = o;
				else {
					if (!l || null !== m) continue;
					u[s[d]] = null;
				}
				else u[s[d]] = ("n" === p.t && "boolean" == typeof i.rawNumbers ? i.rawNumbers : l) ? m : Ut(p, m, i);
				null != m && (f = !1);
			}
		} else {
			if (void 0 === o) continue;
			null != s[d] && (u[s[d]] = o);
		}
	}
	return {
		row: u,
		isempty: f
	};
}
function zc(e, r) {
	if (null == e || null == e["!ref"]) return [];
	var t = {
		t: "n",
		v: 0
	}, a = 0, n = 1, s = [], i = 0, c = "", o = {
		s: {
			r: 0,
			c: 0
		},
		e: {
			r: 0,
			c: 0
		}
	}, l = r || {}, f = null != l.range ? l.range : e["!ref"];
	switch (1 === l.header ? a = 1 : "A" === l.header ? a = 2 : Array.isArray(l.header) ? a = 3 : null == l.header && (a = 0), typeof f) {
		case "string":
			o = Lt(f);
			break;
		case "number":
			(o = Lt(e["!ref"])).s.r = f;
			break;
		default: o = f;
	}
	a > 0 && (n = 0);
	var h = Rt(o.s.r), u = [], d = [], p = 0, m = 0, v = null != e["!data"], g = o.s.r, b = 0, T = {};
	v && !e["!data"][g] && (e["!data"][g] = []);
	var E = l.skipHidden && e["!cols"] || [], w = l.skipHidden && e["!rows"] || [];
	for (b = o.s.c; b <= o.e.c; ++b) if (!(E[b] || {}).hidden) switch (u[b] = Nt(b), t = v ? e["!data"][g][b] : e[u[b] + h], a) {
		case 1:
			s[b] = b - o.s.c;
			break;
		case 2:
			s[b] = u[b];
			break;
		case 3:
			s[b] = l.header[b - o.s.c];
			break;
		default:
			if (null == t && (t = {
				w: "__EMPTY",
				t: "s"
			}), c = i = Ut(t, null, l), m = T[i] || 0) {
				do
					c = i + "_" + m++;
				while (T[c]);
				T[i] = m, T[c] = 1;
			} else T[i] = 1;
			s[b] = c;
	}
	for (g = o.s.r + n; g <= o.e.r; ++g) if (!(w[g] || {}).hidden) {
		var A = Wc(e, o, g, u, a, s, l);
		(!1 === A.isempty || (1 === a ? !1 !== l.blankrows : l.blankrows)) && (d[p++] = A.row);
	}
	return d.length = p, d;
}
var Vc = /"/g;
function Gc(e, r, t, a, n, s, i, c, o) {
	for (var l = !0, f = [], h = "", u = Rt(t), d = null != e["!data"], p = d && e["!data"][t] || [], m = r.s.c; m <= r.e.c; ++m) if (a[m]) {
		var v = d ? p[m] : e[a[m] + u];
		if (null == v) h = "";
		else if (null != v.v) {
			l = !1, h = "" + (o.rawNumbers && "n" == v.t ? v.v : Ut(v, null, o));
			for (var g = 0, b = 0; g !== h.length; ++g) if ((b = h.charCodeAt(g)) === n || b === s || 34 === b || o.forceQuotes) {
				h = "\"" + h.replace(Vc, "\"\"") + "\"";
				break;
			}
			"ID" == h && 0 == c && 0 == f.length && (h = "\"ID\"");
		} else null == v.f || v.F ? h = "" : (l = !1, (h = "=" + v.f).indexOf(",") >= 0 && (h = "\"" + h.replace(Vc, "\"\"") + "\""));
		f.push(h);
	}
	if (o.strip) for (; "" === f[f.length - 1];) --f.length;
	return !1 === o.blankrows && l ? null : f.join(i);
}
function $c(e, r) {
	var t = [], a = null == r ? {} : r;
	if (null == e || null == e["!ref"]) return "";
	for (var n = Lt(e["!ref"]), s = void 0 !== a.FS ? a.FS : ",", i = s.charCodeAt(0), c = void 0 !== a.RS ? a.RS : "\n", o = c.charCodeAt(0), l = "", f = [], h = a.skipHidden && e["!cols"] || [], u = a.skipHidden && e["!rows"] || [], d = n.s.c; d <= n.e.c; ++d) (h[d] || {}).hidden || (f[d] = Nt(d));
	for (var p = 0, m = n.s.r; m <= n.e.r; ++m) (u[m] || {}).hidden || null != (l = Gc(e, n, m, f, i, o, s, p, a)) && (l || !1 !== a.blankrows) && t.push((p++ ? c : "") + l);
	return t.join("");
}
function Xc(e, r, t) {
	var a = t || {}, n = e ? null != e["!data"] : a.dense, s = +!a.skipHeader, i = e || {};
	!e && n && (i["!data"] = []);
	var c = 0, o = 0;
	if (i && null != a.origin) if ("number" == typeof a.origin) c = a.origin;
	else {
		var l = "string" == typeof a.origin ? Dt(a.origin) : a.origin;
		c = l.r, o = l.c;
	}
	var f = {
		s: {
			c: 0,
			r: 0
		},
		e: {
			c: o,
			r: c + r.length - 1 + s
		}
	};
	if (i["!ref"]) {
		var h = Lt(i["!ref"]);
		f.e.c = Math.max(f.e.c, h.e.c), f.e.r = Math.max(f.e.r, h.e.r), -1 == c && (c = h.e.r + 1, f.e.r = c + r.length - 1 + s);
	} else -1 == c && (c = 0, f.e.r = r.length - 1 + s);
	var u = a.header || [], d = 0, p = [];
	r.forEach(function(e, r) {
		n && !i["!data"][c + r + s] && (i["!data"][c + r + s] = []), n && (p = i["!data"][c + r + s]), Te(e).forEach(function(t) {
			-1 == (d = u.indexOf(t)) && (u[d = u.length] = t);
			var l = e[t], f = "z", h = "", m = n ? "" : Nt(o + d) + Rt(c + r + s), v = n ? p[o + d] : i[m];
			!l || "object" != typeof l || l instanceof Date ? ("number" == typeof l ? f = "n" : "boolean" == typeof l ? f = "b" : "string" == typeof l ? f = "s" : l instanceof Date ? (f = "d", a.UTC || (l = Ve(l)), a.cellDates || (f = "n", l = Se(l)), h = null != v && v.z && ie(v.z) ? v.z : a.dateNF || P[14]) : null === l && a.nullError && (f = "e", l = 0), v ? (v.t = f, v.v = l, delete v.w, delete v.R, h && (v.z = h)) : n ? p[o + d] = v = {
				t: f,
				v: l
			} : i[m] = v = {
				t: f,
				v: l
			}, h && (v.z = h)) : n ? p[o + d] = l : i[m] = l;
		});
	}), f.e.c = Math.max(f.e.c, o + u.length - 1);
	var m = Rt(c);
	if (n && !i["!data"][c] && (i["!data"][c] = []), s) for (d = 0; d < u.length; ++d) n ? i["!data"][c][d + o] = {
		t: "s",
		v: u[d]
	} : i[Nt(d + o) + m] = {
		t: "s",
		v: u[d]
	};
	return i["!ref"] = Mt(f), i;
}
function jc(e, r, t) {
	if ("string" == typeof r) {
		if (null != e["!data"]) {
			var a = Dt(r);
			return e["!data"][a.r] || (e["!data"][a.r] = []), e["!data"][a.r][a.c] || (e["!data"][a.r][a.c] = { t: "z" });
		}
		return e[r] || (e[r] = { t: "z" });
	}
	return jc(e, "number" != typeof r ? Ft(r) : Nt(t || 0) + Rt(r));
}
function Kc(e, r) {
	var t = {
		SheetNames: [],
		Sheets: {}
	};
	return e && Yc(t, e, r || "Sheet1"), t;
}
function Yc(e, r, t, a) {
	var n = 1;
	if (!t) for (; n <= 65535 && -1 != e.SheetNames.indexOf(t = "Sheet" + n); ++n, t = void 0);
	if (!t || e.SheetNames.length >= 65535) throw new Error("Too many worksheets");
	if (a && e.SheetNames.indexOf(t) >= 0 && t.length < 32) {
		var s = t.match(/\d+$/);
		n = s && +s[0] || 0;
		var i = s && t.slice(0, s.index) || t;
		for (++n; n <= 65535 && -1 != e.SheetNames.indexOf(t = i + n); ++n);
	}
	if (function(e) {
		try {
			if ("" == e) throw new Error("Sheet name cannot be blank");
			if (e.length > 31) throw new Error("Sheet name cannot exceed 31 chars");
			if (39 == e.charCodeAt(0) || 39 == e.charCodeAt(e.length - 1)) throw new Error("Sheet name cannot start or end with apostrophe (')");
			if ("history" == e.toLowerCase()) throw new Error("Sheet name cannot be 'History'");
			Pi.forEach(function(r) {
				if (-1 != e.indexOf(r)) throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
			});
		} catch (ao) {
			throw ao;
		}
	}(t), e.SheetNames.indexOf(t) >= 0) throw new Error("Worksheet with name |" + t + "| already exists!");
	return e.SheetNames.push(t), e.Sheets[t] = r, t;
}
function Jc(e, r, t) {
	return r ? (e.l = { Target: r }, t && (e.l.Tooltip = t)) : delete e.l, e;
}
var Zc = {
	encode_col: Nt,
	encode_row: Rt,
	encode_cell: Ft,
	encode_range: Mt,
	decode_col: It,
	decode_row: Ot,
	split_cell: function(e) {
		return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
	},
	decode_cell: Dt,
	decode_range: Pt,
	format_cell: Ut,
	sheet_new: function(e) {
		var r = {};
		return (e || {}).dense && (r["!data"] = []), r;
	},
	sheet_add_aoa: Ht,
	sheet_add_json: Xc,
	sheet_add_dom: cc,
	aoa_to_sheet: Wt,
	json_to_sheet: function(e, r) {
		return Xc(null, e, r);
	},
	table_to_sheet: oc,
	table_to_book: function(e, r) {
		return Bt(oc(e, r), r);
	},
	sheet_to_csv: $c,
	sheet_to_txt: function(e, r) {
		return r || (r = {}), r.FS = "	", r.RS = "\n", $c(e, r);
	},
	sheet_to_json: zc,
	sheet_to_html: function(e, r) {
		var t = r || {}, a = null != t.header ? t.header : "<html><head><meta charset=\"utf-8\"/><title>SheetJS Table Export</title></head><body>", n = null != t.footer ? t.footer : "</body></html>", s = [a], i = Pt(e["!ref"] || "A1");
		if (s.push(function(e, r, t) {
			return [].join("") + "<table" + (t && t.id ? " id=\"" + t.id + "\"" : "") + ">";
		}(0, 0, t)), e["!ref"]) for (var c = i.s.r; c <= i.e.r; ++c) s.push(ic(e, i, c, t));
		return s.push("</table>" + n), s.join("");
	},
	sheet_to_formulae: function(e, r) {
		var t, a = "", n = "";
		if (null == e || null == e["!ref"]) return [];
		var s, i = Lt(e["!ref"]), c = "", o = [], l = [], f = null != e["!data"];
		for (s = i.s.c; s <= i.e.c; ++s) o[s] = Nt(s);
		for (var h = i.s.r; h <= i.e.r; ++h) for (c = Rt(h), s = i.s.c; s <= i.e.c; ++s) if (a = o[s] + c, n = "", void 0 !== (t = f ? (e["!data"][h] || [])[s] : e[a])) {
			if (null != t.F) {
				if (a = t.F, !t.f) continue;
				n = t.f, -1 == a.indexOf(":") && (a = a + ":" + a);
			}
			if (null != t.f) n = t.f;
			else {
				if (r && !1 === r.values) continue;
				if ("z" == t.t) continue;
				if ("n" == t.t && null != t.v) n = "" + t.v;
				else if ("b" == t.t) n = t.v ? "TRUE" : "FALSE";
				else if (void 0 !== t.w) n = "'" + t.w;
				else {
					if (void 0 === t.v) continue;
					n = "s" == t.t ? "'" + t.v : "" + t.v;
				}
			}
			l[l.length] = a + "=" + n;
		}
		return l;
	},
	sheet_to_row_object_array: zc,
	sheet_get_cell: jc,
	book_new: Kc,
	book_append_sheet: Yc,
	book_set_sheet_visibility: function(e, r, t) {
		e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
		var a = function(e, r) {
			if ("number" == typeof r) {
				if (r >= 0 && e.SheetNames.length > r) return r;
				throw new Error("Cannot find sheet # " + r);
			}
			if ("string" == typeof r) {
				var t = e.SheetNames.indexOf(r);
				if (t > -1) return t;
				throw new Error("Cannot find sheet name |" + r + "|");
			}
			throw new Error("Cannot find sheet |" + r + "|");
		}(e, r);
		switch (e.Workbook.Sheets[a] || (e.Workbook.Sheets[a] = {}), t) {
			case 0:
			case 1:
			case 2: break;
			default: throw new Error("Bad sheet visibility setting " + t);
		}
		e.Workbook.Sheets[a].Hidden = t;
	},
	cell_set_number_format: function(e, r) {
		return e.z = r, e;
	},
	cell_set_hyperlink: Jc,
	cell_set_internal_link: function(e, r, t) {
		return Jc(e, "#" + r, t);
	},
	cell_add_comment: function(e, r, t) {
		e.c || (e.c = []), e.c.push({
			t: r,
			a: t || "SheetJS"
		});
	},
	sheet_set_array_formula: function(e, r, t, a) {
		for (var n = "string" != typeof r ? r : Lt(r), s = "string" == typeof r ? r : Mt(r), i = n.s.r; i <= n.e.r; ++i) for (var c = n.s.c; c <= n.e.c; ++c) {
			var o = jc(e, i, c);
			o.t = "n", o.F = s, delete o.v, i == n.s.r && c == n.s.c && (o.f = t, a && (o.D = !0));
		}
		var l = Pt(e["!ref"]);
		return l.s.r > n.s.r && (l.s.r = n.s.r), l.s.c > n.s.c && (l.s.c = n.s.c), l.e.r < n.e.r && (l.e.r = n.e.r), l.e.c < n.e.c && (l.e.c = n.e.c), e["!ref"] = Mt(l), e;
	},
	consts: {
		SHEET_VISIBLE: 0,
		SHEET_HIDDEN: 1,
		SHEET_VERY_HIDDEN: 2
	}
};
const qc = ue, Qc = (e) => String(e).padStart(2, "0");
function eo(e, r) {
	if (!e || void 0 === e.v || null === e.v) return "";
	switch (e.t) {
		case "n": {
			const t = e.v, a = "number" == typeof e.z ? qc._table[e.z] : e.z;
			return a && qc.is_date(a) ? function(e, r, t) {
				const a = qc.parse_date_code(e, { date1904: t });
				if (!a) return null;
				const n = function(e) {
					return e.replace(/"[^"]*"/g, "").replace(/\[[^\]]*\]/g, "").replace(/\\./g, "").toLowerCase();
				}(r), s = /h|s|am\/pm|a\/p/.test(n), i = /y|d/.test(n) || !s, c = `${String(a.y)}-${Qc(a.m)}-${Qc(a.d)}`, o = n.includes("s") ? `${Qc(a.H)}:${Qc(a.M)}:${Qc(a.S)}` : `${Qc(a.H)}:${Qc(a.M)}`;
				return i && s ? `${c} ${o}` : s ? o : c;
			}(t, a, r) ?? String(t) : String(t);
		}
		case "d": {
			const r = (e.v instanceof Date ? e.v : new Date(String(e.v))).toISOString();
			return r.endsWith("T00:00:00.000Z") ? r.slice(0, 10) : `${r.slice(0, 10)} ${r.slice(11, 16)}`;
		}
		case "b": return e.v ? "TRUE" : "FALSE";
		case "e": return "";
		default: return String(e.v);
	}
}
function ro(e, r, t) {
	const a = e["!ref"];
	if (!a) return {
		sheet: null,
		findings: [`Sheet "${r}" is empty.`]
	};
	const n = Zc.decode_range(a), s = n.s.r, i = (e["!merges"] ?? []).find((e) => e.s.r <= s && e.e.r >= s);
	if (i) return {
		sheet: null,
		findings: [`Sheet "${r}" has merged cells in its header row (${Zc.encode_range(i)}). Unmerge them so every column has one heading, then choose the file again.`]
	};
	const c = (r, t) => e[Zc.encode_cell({
		r,
		c: t
	})], o = [];
	for (let f = n.s.c; f <= n.e.c; f++) o.push(eo(c(s, f), t));
	const l = [];
	for (let f = s + 1; f <= n.e.r; f++) {
		const e = [];
		for (let r = n.s.c; r <= n.e.c; r++) e.push(eo(c(f, r), t));
		l.push(e);
	}
	return {
		sheet: {
			name: r,
			headers: o,
			rows: l
		},
		findings: []
	};
}
function to(e, r) {
	let t;
	try {
		t = Hc(e, {
			type: "array",
			cellNF: !0,
			cellDates: !1,
			cellText: !1
		});
	} catch {
		return {
			sheetNames: [],
			sheet: null,
			findings: ["The workbook could not be read. Confirm it is an .xlsx file and choose it again."]
		};
	}
	const a = t.SheetNames, n = r && a.includes(r) ? r : a[0];
	if (!n) return {
		sheetNames: a,
		sheet: null,
		findings: ["The workbook has no sheets."]
	};
	const s = t.Workbook?.WBProps?.date1904 ?? !1, i = t.Sheets[n];
	return i ? {
		sheetNames: a,
		...ro(i, n, s)
	} : {
		sheetNames: a,
		sheet: null,
		findings: [`Sheet "${n}" could not be opened.`]
	};
}
export { to as readDiaryWorkbookSheet };
