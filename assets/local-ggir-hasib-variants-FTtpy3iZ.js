import { F as e, ft as r, pt as n, rt as o, st as t } from "./schema-MMK46mR-.js";
import { g as s } from "./workspace-db-YhWSrcvp.js";
const i = [
	"scoreGgirHasibVariant",
	"scoreCountScorerBatch",
	"scoreSadeh",
	"scoreColeKripke",
	"scoreEpochs"
];
function c(e) {
	return ArrayBuffer.isView(e) ? `${e.constructor.name}[${String(e.byteLength)}]` : Array.isArray(e) ? e.map(c) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, r]) => [e, c(r)])) : e;
}
function a(e, r) {
	if (ArrayBuffer.isView(e) && ArrayBuffer.isView(r)) {
		if (e.byteLength !== r.byteLength) return !1;
		const n = new Uint8Array(e.buffer, e.byteOffset, e.byteLength), o = new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
		return n.every((e, r) => e === o[r]);
	}
	if (null !== e && null !== r && "object" == typeof e && "object" == typeof r) {
		const n = Object.entries(e);
		return n.length === Object.keys(r).length && n.every(([e, n]) => a(n, r[e]));
	}
	return Object.is(e, r);
}
function u(e) {
	const r = /* @__PURE__ */ new Map();
	return new Proxy(e, { get(e, n, o) {
		const t = Reflect.get(e, n, o);
		return "function" == typeof t && i.includes(n) ? async (...o) => {
			const s = `${String(n)}|${JSON.stringify(c(o))}`, i = r.get(s) ?? [];
			r.set(s, i);
			let u = i.find((e) => a(e.args, o));
			if (!u) {
				const r = Promise.resolve(Reflect.apply(t, e, o)), n = {
					args: o,
					answer: r
				};
				u = n, i.push(n), r.catch(() => i.splice(i.indexOf(n), 1));
			}
			return structuredClone(await u.answer);
		} : t;
	} });
}
const g = [
	"vanHees2015",
	"Sadeh1994",
	"Galland2012",
	"ColeKripke1992",
	"Oakley1997",
	"NotWorn"
];
function l(e) {
	const r = t[e];
	if (void 0 === r) throw new Error(`no generated method-family label for ${e}`);
	return r.algorithmValue;
}
const h = o.angle_hasib?.algorithmValue, f = g.filter((e) => e !== h), p = new Set(f);
function S(r) {
	const n = e.count_input_series_keys?.[r];
	if (void 0 === n) throw new Error(`Unsupported HASIB count source: ${r}`);
	return {
		family: String(n.count_family),
		axis: String(n.axis),
		epochSeconds: Number(n.epoch_seconds)
	};
}
const w = {
	vanHees2015: s.GGIR_HASIB_VAN_HEES_2015,
	Sadeh1994: s.GGIR_HASIB_SADEH_1994,
	Galland2012: s.GGIR_HASIB_GALLAND_2012,
	ColeKripke1992: s.GGIR_HASIB_COLE_KRIPKE_1992,
	Oakley1997: s.GGIR_HASIB_OAKLEY_1997,
	NotWorn: s.GGIR_HASIB_NOT_WORN
};
function d(e, r, n) {
	if (n.sib.length !== r) throw new Error(`HASIB ${e} returned ${String(n.sib.length)} epochs, expected ${String(r)}.`);
	return n;
}
async function y(e) {
	const o = e.variants ?? g, s = o.filter((e) => p.has(e)).length > 0 ? await async function(e) {
		const r = S(e.countSource);
		if ("neishabouri" === r.family) {
			const n = e.neishabouriCounts?.[r.axis] ?? ("vm" === r.axis && 60 === r.epochSeconds ? e.neishabouriVm60s : void 0);
			if (!n || 0 === n.length) throw new Error(`HASIB Neishabouri scoring requires a non-empty ${String(r.epochSeconds)}s ${r.axis.toUpperCase()} count series.`);
			return {
				series: n,
				countSource: e.countSource,
				epochSeconds: r.epochSeconds
			};
		}
		const n = r.axis, o = e.zeroCrossingCountsByAxis?.[n] ?? ("y" === n && 60 === r.epochSeconds ? e.zeroCrossingY60s : void 0);
		if (!e.backend.zeroCrossingCounts) {
			if (o && o.length > 0) return {
				series: o,
				countSource: e.countSource,
				epochSeconds: r.epochSeconds
			};
			throw new Error("HASIB zero-crossing scoring requires a backend zeroCrossingCounts implementation or precomputed axis counts.");
		}
		if (o && o.length > 0) return {
			series: o,
			countSource: e.countSource,
			epochSeconds: r.epochSeconds
		};
		if (!e.rawTriAxis) throw new Error("HASIB zero-crossing scoring requires raw tri-axial samples or precomputed axis counts.");
		(function(e) {
			if (e.sampleRate <= 0 || !Number.isFinite(e.sampleRate)) throw new Error("HASIB zero-crossing scoring requires a positive raw sample rate.");
			if (e.x.length !== e.y.length || e.x.length !== e.z.length) throw new Error(`HASIB zero-crossing scoring requires aligned raw x/y/z arrays (got x=${String(e.x.length)}, y=${String(e.y.length)}, z=${String(e.z.length)}).`);
			if (0 === e.x.length) throw new Error("HASIB zero-crossing scoring requires at least one raw sample.");
		})(e.rawTriAxis);
		const t = await e.backend.zeroCrossingCounts(e.rawTriAxis.x, e.rawTriAxis.y, e.rawTriAxis.z, e.rawTriAxis.sampleRate, e.countEpochSeconds ?? r.epochSeconds), s = "x" === n ? t.zcx : "y" === n ? t.zcy : t.zcz;
		if (0 === s.length) throw new Error(`HASIB zero-crossing scoring produced an empty ${n.toUpperCase()}-axis count series.`);
		return {
			series: s,
			countSource: e.countSource,
			epochSeconds: r.epochSeconds
		};
	}(e) : null, i = o.map((o) => {
		const i = o === h, c = i ? e.anglez5s : s?.series;
		if (!c || 0 === c.length) throw new Error(`HASIB ${o} requires a non-empty ${i ? "AngleZ" : "count"} input series.`);
		const a = i ? void 0 : e.countEpochSeconds ?? s?.epochSeconds, u = !i && null !== s && function(e, o) {
			const s = t[n];
			return void 0 !== s && e === s.algorithmValue && S(o).family === r;
		}(o, s.countSource), g = void 0 !== a ? {
			ws3: a,
			...e.configs?.[o]
		} : e.configs?.[o];
		return {
			variant: o,
			usesAnglez: i,
			series: c,
			config: u ? {
				...g,
				neishabouriCount: !0
			} : g
		};
	}), c = await async function(e, r) {
		if (!e.scoreCountScorerBatch) return Promise.all(r.map(({ variant: r, series: n, config: o }) => e.scoreGgirHasibVariant(n, r, o)));
		const n = await e.scoreCountScorerBatch(r.map(({ variant: e, series: r, config: n }) => ({
			kind: "hasib",
			data: r,
			algo: e,
			...n ? { config: n } : {}
		})));
		if (n.length !== r.length) throw new Error(`HASIB batch returned ${String(n.length)} outcomes for ${String(r.length)} variants.`);
		return n.map((e) => {
			if ("error" in e) throw new Error(e.error);
			return e.result;
		});
	}(e.backend, i);
	return i.map(({ variant: e, usesAnglez: r, series: n }, o) => ({
		variant: e,
		key: w[e],
		countSource: r ? "anglez_5s" : s.countSource,
		result: d(e, n.length, c[o])
	}));
}
export { S as a, l as i, f as n, y as o, w as r, u as s, h as t };
