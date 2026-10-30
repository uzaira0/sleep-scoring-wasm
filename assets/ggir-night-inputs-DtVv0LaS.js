import { A as e, C as n, D as t, E as o, F as s, M as a, N as i, O as r, P as l, S as c, T as u, _ as m, a as d, b as f, c as p, d as g, f as h, g as y, h as _, i as b, j as w, k as S, l as v, m as k, n as x, o as A, p as F, r as $, s as I, t as j, u as H, v as V, w as O, x as E, y as T } from "./wasm-worker-Ck7zyipy.js";
const C = /* @__PURE__ */ new WeakSet();
function K(e) {
	if (null !== e && "object" == typeof e && !Object.isFrozen(e)) {
		Object.freeze(e);
		for (const n of Object.values(e)) K(n);
	}
	return e;
}
function M(e) {
	return C.add(K(e)), e;
}
const R = new Map(s.map((e) => [e.id, e.conformance]));
function U(e) {
	return R.get(e) ?? "conformant";
}
const N = function() {
	const e = /* @__PURE__ */ new Map();
	for (const t of s) {
		if ("sleep_wake" !== t.kind) continue;
		if (!F.includes(t.requiredSignal)) continue;
		if (T.includes(t.execution)) continue;
		const o = t.family, s = e.get(o);
		if (s) {
			if (s.conformance !== t.conformance) throw new Error(`count scorer family ${o} has conflicting conformance across variants: ${s.conformance} vs ${t.conformance}`);
		} else {
			const s = n[o];
			if (void 0 === s) throw new Error(`count scorer ${t.id} lacks a generated planner label`);
			e.set(o, {
				slug: o,
				algorithm: s.algorithmValue,
				label: s.label,
				conformance: t.conformance
			});
		}
	}
	return Array.from(e.values());
}(), z = function() {
	const e = new Map(N.map((e) => [e.slug, e])), n = [];
	for (const t of g) {
		const o = e.get(t.methodFamilyId);
		if (!o) throw new Error(`generated provenance contract references absent count family ${t.methodFamilyId}`);
		n.push({
			slug: o.slug,
			algorithm: o.algorithm,
			label: o.label,
			conformance: o.conformance,
			primitive: t.primitiveId,
			implementation: t.implementationVariantId,
			implementationLabel: t.label,
			scoringParameters: t.parameters
		});
	}
	return n;
}(), P = I, L = y, D = m, W = Object.fromEntries(V.map((e) => [e, 0])), q = Object.fromEntries(S.map((e) => [e.value, 0])), B = e;
let J, Y;
function G(e) {
	return Y ??= new Map((J ??= function(e = {}) {
		const n = new Set(e.includeFamilies ?? V), t = e.epochSeconds ?? L, o = new Set(e.excludeHasibAlgorithms ?? []), s = e.implementationVersion ?? D, i = [], r = [];
		if (n.has("count_hasib")) {
			for (const e of N) if (o.has(e.slug)) i.push({
				id: a("count_skip_entry", { method_family: e.slug }),
				reason: re("skipped_method_reason", { algorithm_value: e.algorithm })
			});
			else for (const n of Object.keys(P)) for (const o of P[n]) for (const a of t) r.push(Z({
				family: e,
				countFamily: n,
				axis: o,
				epochSeconds: a,
				implementationVersion: s
			}));
			for (const e of z) if (!o.has(e.slug)) for (const n of Object.keys(P)) for (const o of P[n]) for (const a of t) r.push(ee({
				variant: e,
				countFamily: n,
				axis: o,
				epochSeconds: a,
				implementationVersion: s
			}));
		}
		for (const a of Object.keys(f)) n.has(a) && r.push(ne(a, s));
		if (n.has("lstm")) for (const a of e.lstmModels ?? []) r.push(...te(a, s));
		(e.includeConsensus ?? !0) && n.has("consensus") && r.push(...function(e, n) {
			const t = [], o = Array.from(new Set(e.filter((e) => oe(e)).filter((e) => L.includes(e.epochSeconds)).map((e) => e.epochSeconds))).sort((e, n) => e - n);
			for (const s of o) {
				const o = `${String(s)}s`, i = e.filter((e) => oe(e) && e.epochSeconds === s);
				if (i.length <= 1) continue;
				const { slug: r, label: l } = se(i);
				for (const e of _) t.push(X({
					id: a("consensus_cell", {
						scope: r,
						strategy: e,
						epoch_seconds: s
					}),
					label: re("consensus_cell_label", {
						scope_label: l,
						strategy_label: $[e] ?? e,
						suffix: o
					}),
					strategy: e,
					members: i,
					epochSeconds: s,
					implementationVersion: n
				}));
			}
			return t;
		}(r, s));
		const l = function(e) {
			const n = /* @__PURE__ */ new Map(), t = [];
			for (const o of e) {
				const e = n.get(o.id);
				if (e !== o.configHash) {
					if (void 0 !== e) throw new Error(`cube plan holds ${o.id} under two configs (${e}, ${o.configHash})`);
					n.set(o.id, o.configHash), t.push(o);
				}
			}
			return t;
		}(r).map(M);
		return {
			configs: l,
			skipped: i,
			warnings: ie(l),
			summary: Q({
				configs: l,
				skipped: i
			})
		};
	}({
		includeFamilies: ["count_hasib", "consensus"],
		epochSeconds: [30, 60],
		includeConsensus: !0
	}), J).configs.map((e) => [e.id, e])), Y.get(e);
}
function Q(e) {
	const n = { ...W }, t = { ...q };
	for (const o of e.configs) n[o.family] += 1, t[o.validationStatus] += 1;
	return {
		total: e.configs.length,
		byFamily: n,
		byValidationStatus: t,
		skipped: e.skipped.length
	};
}
function X(e) {
	const n = e.implementationVersion ?? D, t = e.members.map((e) => e.id), o = [...e.members].sort((e, n) => e.id < n.id ? -1 : e.id > n.id ? 1 : 0).map((e) => e.configHash);
	return {
		...ae({
			id: e.id,
			family: j,
			label: e.label,
			algorithm: `consensus:${e.strategy}`,
			outputKind: x,
			epochSeconds: e.epochSeconds,
			input: {
				family: "algorithm_outputs",
				epochSeconds: e.epochSeconds,
				seriesKey: t.join(",")
			},
			parameters: {
				strategy: e.strategy,
				inputConfigIds: t,
				inputConfigHashes: o,
				inputCount: t.length
			},
			implementationVersion: n,
			validationStatus: b,
			defaultIncluded: !0,
			exploratory: !0,
			lineage: t
		}),
		conformance: U("consensus_majority_vote")
	};
}
function Z(e) {
	const n = B(e.countFamily, e.axis, e.epochSeconds), t = i(e.family.slug, e.countFamily, e.axis, e.epochSeconds) ? A : d;
	return {
		...ae({
			id: a("count_cell", {
				method_family: e.family.slug,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: v,
			label: re("count_cell_label", {
				method_label: e.family.label,
				input_label: le(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.family.algorithm,
			outputKind: H,
			epochSeconds: e.epochSeconds,
			input: {
				family: e.countFamily,
				axis: e.axis,
				epochSeconds: e.epochSeconds,
				seriesKey: n
			},
			parameters: {
				ws3: e.epochSeconds,
				sadehNeishabouriCap300: l(e.family.slug, e.countFamily)
			},
			implementationVersion: e.implementationVersion,
			validationStatus: t,
			defaultIncluded: !0,
			exploratory: t === d,
			lineage: [n]
		}),
		conformance: e.family.conformance
	};
}
function ee(e) {
	const n = B(e.countFamily, e.axis, e.epochSeconds);
	return {
		...ae({
			id: a("count_cell", {
				method_family: e.variant.slug,
				implementation_variant: e.variant.implementation,
				count_family: e.countFamily,
				axis: e.axis,
				epoch_seconds: e.epochSeconds
			}),
			family: v,
			label: re("count_provenance_cell_label", {
				method_label: e.variant.label,
				implementation_label: e.variant.implementationLabel,
				input_label: le(e.countFamily, e.axis, e.epochSeconds)
			}),
			algorithm: e.variant.algorithm,
			outputKind: H,
			epochSeconds: e.epochSeconds,
			input: {
				family: e.countFamily,
				axis: e.axis,
				epochSeconds: e.epochSeconds,
				seriesKey: n
			},
			parameters: {
				ws3: e.epochSeconds,
				implementation: e.variant.implementation,
				...e.variant.scoringParameters
			},
			implementationVersion: e.implementationVersion,
			validationStatus: h,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [n]
		}),
		conformance: e.variant.conformance
	};
}
function ne(e, n) {
	const t = f[e];
	if (void 0 === t) throw new Error(`no generated fixed output projection for family ${e}`);
	return {
		...ae({
			id: t.configId,
			family: t.familyId,
			label: t.label,
			algorithm: t.algorithmValue,
			outputKind: t.outputKind,
			epochSeconds: t.epochSeconds,
			input: {
				family: t.inputFamily,
				...void 0 !== t.inputAxis ? { axis: t.inputAxis } : {},
				epochSeconds: t.epochSeconds,
				seriesKey: t.inputSeriesKey
			},
			parameters: { ...t.parameters },
			implementationVersion: n,
			validationStatus: t.validationStatus,
			defaultIncluded: t.defaultIncluded,
			exploratory: t.exploratory,
			lineage: t.lineageIds
		}),
		conformance: U(t.methodBindingId)
	};
}
function te(e, n) {
	const s = e.thresholdPresets && e.thresholdPresets.length > 0 ? e.thresholdPresets : [u], i = U(e.id);
	return s.map((s) => ({
		...ae({
			id: a("model_cell", {
				model_slug: ce(e.id),
				preset_slug: ce(s.id)
			}),
			family: o,
			label: re("model_cell_label", {
				model_label: e.label,
				preset_label: s.label
			}),
			algorithm: e.id,
			outputKind: t,
			epochSeconds: e.epochSeconds,
			input: {
				family: "lstm_probability",
				epochSeconds: e.epochSeconds,
				seriesKey: `${e.id}:sleep_probability`
			},
			parameters: {
				modelId: e.id,
				thresholdPresetId: s.id,
				threshold: s.threshold
			},
			implementationVersion: n,
			validationStatus: O,
			defaultIncluded: !0,
			exploratory: !1,
			lineage: [`lstm:${e.id}`]
		}),
		conformance: i
	}));
}
function oe(e) {
	return "sleep_wake_epoch" === e.outputKind && "consensus" !== e.family && void 0 === e.parameters.implementation;
}
function se(e) {
	const n = new Set(e.map((e) => e.family));
	if (1 === n.size && n.has("count_hasib")) return {
		slug: `${v}_sleep_wake`,
		label: re("count_consensus_scope_label", {})
	};
	const t = Array.from(new Set(e.filter((e) => e.family === o).map((e) => "string" == typeof e.parameters.modelId ? e.parameters.modelId : e.algorithm).filter((e) => e.length > 0))).sort();
	if (n.has("lstm") && t.length > 0) {
		const e = t.map((e) => ce(e)).join("_"), s = n.has(v);
		return {
			slug: s ? `${v}_${o}_${e}_sleep_wake` : `${o}_${e}_sleep_wake`,
			label: re(s ? "count_lstm_consensus_scope_label" : "lstm_consensus_scope_label", { model_ids: t.join(", ") })
		};
	}
	return {
		slug: "all_sleep_wake",
		label: re("all_consensus_scope_label", {})
	};
}
function ae(e) {
	return {
		...e,
		configHash: ue(e)
	};
}
function ie(e) {
	const n = [];
	return e.some((e) => "count_hasib" === e.family && e.epochSeconds === L[0]) && n.push(re("count_30_warning", {})), e.some((e) => "lstm" === e.family) || n.push(re("no_lstm_warning", {})), n;
}
function re(e, n) {
	const t = c[e];
	if (void 0 === t) throw new Error(`no generated planner message ${e}`);
	return Object.entries(n).reduce((e, [n, t]) => e.replace(`{${n}}`, String(t)), t);
}
function le(e, n, t) {
	return p[e].labelTemplate.replace("{axis}", n).replace("{axis_label}", r.axis?.[n] ?? n).replace("{epoch_seconds}", String(t));
}
function ce(e) {
	return e.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
}
function ue(e) {
	const n = me(e);
	let t = E.initialValue;
	for (let o = 0; o < n.length; o += 1) t ^= n.charCodeAt(o), t = Math.imul(t, E.prime) >>> 0;
	return t.toString(16).padStart(E.lowercaseHexWidth, "0");
}
function me(e) {
	return null === e || "object" != typeof e ? JSON.stringify(e) : Array.isArray(e) ? `[${e.map((e) => me(e)).join(",")}]` : `{${Object.entries(e).filter(([, e]) => void 0 !== e).sort(([e], [n]) => e.localeCompare(n)).map(([e, n]) => `${JSON.stringify(e)}:${me(n)}`).join(",")}}`;
}
function de(e, n) {
	const t = "string" == typeof n ? n : "recordedCellId" in n ? n.recordedCellId : n.id, o = e.map((e) => (e?.algorithmResults)?.[t]);
	if (!function(e) {
		return k.some((n) => e.startsWith(n));
	}(t)) return {
		status: "ok",
		outputs: o,
		configHash: null
	};
	let s = null, a = "string" != typeof n && "recordedCellId" in n;
	if ("string" == typeof n) {
		const e = G(t);
		s = e?.configHash ?? null, a = void 0 === e;
	} else if (!("recordedCellId" in n)) {
		const e = function(e) {
			if (null === e || "object" != typeof e || !C.has(e)) return null;
			const n = e, t = (o = n.id, null === w(o) ? null : o);
			var o;
			if (null === t) return null;
			const s = Object.fromEntries(Object.entries(n).filter(([e]) => !E.excludedFieldNames.includes(e)));
			return {
				cellId: t,
				implementationVersion: n.implementationVersion,
				configHash: ue(s)
			};
		}(n);
		if (null === e) throw new Error(`Refused a cube output read for ${t}: not a planned config`);
		s = e.configHash;
	}
	let i = null;
	for (const [r, l] of e.entries()) {
		if (void 0 === o[r] || void 0 === l?.algorithmResultHashes) continue;
		const e = l.algorithmResultHashes[t];
		if (void 0 === e) return {
			status: "stale",
			reason: `${t} was stored without its config`
		};
		if (!a && e !== s) return {
			status: "stale",
			reason: `${t} was stored under another config`
		};
		if (null !== i && e !== i) return {
			status: "stale",
			reason: `${t} was stored under two configs`
		};
		i = e;
	}
	return {
		status: "ok",
		outputs: o,
		configHash: i
	};
}
function fe(e) {
	const n = {};
	for (const t of Object.keys(e.algorithmResults ?? {})) n[t] = !0;
	return {
		...void 0 === e.date ? {} : { date: e.date },
		algorithmResults: n,
		algorithmResultHashes: e.algorithmResultHashes
	};
}
(function(e) {
	const n = e.map((e) => Object.keys(e.algorithmResults)[0]).find((e) => void 0 !== e) || null;
	null === n || (() => {
		const t = de(e, n);
		"stale" === t.status || t.configHash;
	})();
})([].filter((e) => void 0 !== e).map(fe).sort((e, n) => (e.date ?? "").localeCompare(n.date ?? "")));
const pe = {
	epoch_60s: {
		anchor: "timestamps",
		order: "unchecked",
		faultValues: "its {field} values do not match its epochs",
		faultUnanchored: null,
		faultOrder: null
	},
	epoch_5s: {
		anchor: "ggirTimestamps",
		order: "strictly_increasing",
		faultValues: "its 5 s {field} values do not match its 5 s timestamps",
		faultUnanchored: "it has 5 s values without 5 s timestamps",
		faultOrder: "its 5 s timestamps are not in order"
	},
	lstm_30s: {
		anchor: "lstmTimestamps30s",
		order: "unchecked",
		faultValues: "its {field} values do not match its 30 s LSTM timestamps",
		faultUnanchored: "it has 30 s LSTM values without 30 s LSTM timestamps",
		faultOrder: null
	}
};
function ge(e, n, t, o = -1 / 0) {
	const s = n.length;
	return !t.some((e) => 0 !== e && e !== s) && ("unchecked" === pe[e].order || function(e, n) {
		let t = n;
		for (const o of e) {
			if (!Number.isFinite(o) || o <= t) return !1;
			t = o;
		}
		return !0;
	}(n, o));
}
const he = "Activity data is corrupt — please reprocess the file";
function ye(e) {
	return {
		ggirTimestamps: e.ggirTimestamps ? new Float64Array(e.ggirTimestamps) : /* @__PURE__ */ new Float64Array(0),
		ggirEnmo: e.ggirEnmo ? new Float64Array(e.ggirEnmo) : /* @__PURE__ */ new Float64Array(0),
		ggirAnglez: e.ggirAnglez ? new Float64Array(e.ggirAnglez) : /* @__PURE__ */ new Float64Array(0),
		ggirSib: e.ggirSib ? new Uint8Array(e.ggirSib) : /* @__PURE__ */ new Uint8Array(0)
	};
}
async function _e(e, n, t) {
	const o = t?.next[e];
	if (void 0 !== o) return o;
	const s = await n().nextDate(e);
	if (void 0 === s) throw new RangeError(`Not a calendar date: ${e}`);
	return s;
}
async function be(e, n, t, o, s) {
	const a = await t(n);
	if (a) return a;
	if (!await t(await _e(n, o, s))) return;
	const i = /* @__PURE__ */ new ArrayBuffer(0);
	return {
		fileId: e,
		date: n,
		timestamps: i,
		axisY: i,
		vectorMagnitude: i,
		algorithmResults: {},
		nonwearResults: null
	};
}
async function we(e) {
	const { day: n, nextDay: t } = e;
	if (e.requireScores) {
		const o = function(e, n) {
			if ("stale" === n.status) return {
				status: "stale",
				reason: n.reason
			};
			if (null === n.key) return {
				status: "ok",
				key: null,
				outputs: e.map(() => {})
			};
			const t = de(e, n.key);
			return "stale" === t.status || null !== t.configHash && null !== n.configHash && t.configHash !== n.configHash ? {
				status: "stale",
				reason: "Scores were computed with different settings, so this night can't be auto-scored. Manual scoring still works."
			} : {
				status: "ok",
				key: n.key,
				outputs: t.outputs
			};
		}(t ? [n, t] : [n], e.verdict);
		if ("stale" === o.status) return {
			kind: "refused",
			reason: o.reason
		};
	}
	const o = [n, ...await e.laterDays()];
	let s = /* @__PURE__ */ new Float64Array(0), a = /* @__PURE__ */ new Float64Array(0), i = /* @__PURE__ */ new Uint8Array(0), r = /* @__PURE__ */ new Uint8Array(0), l = 0, c = 0, u = 0;
	for (const m of o) {
		let e;
		try {
			e = ye(m);
		} catch {
			return {
				kind: "refused",
				reason: he
			};
		}
		const n = e.ggirTimestamps.length;
		if (0 === n) continue;
		const t = m.ggirInvalid ? new Uint8Array(m.ggirInvalid) : /* @__PURE__ */ new Uint8Array(0);
		if (e.ggirEnmo.length !== n || !ge("epoch_5s", e.ggirTimestamps, [e.ggirSib.length, t.length], s[s.length - 1] ?? -1 / 0)) return {
			kind: "refused",
			reason: he
		};
		u += 1, e.ggirSib.length === n && (l += 1), t.length === n && (c += 1), s = Se(s, e.ggirTimestamps), a = Se(a, e.ggirEnmo), i = ve(i, e.ggirSib), r = ve(r, t);
	}
	return 0 === l ? { kind: "angle-legacy" } : l !== u || 0 !== c && c !== u ? {
		kind: "refused",
		reason: he
	} : {
		kind: "angle",
		ggirTimestamps: s,
		ggirEnmo: a,
		sib: i,
		invalid: 0 === c ? null : r
	};
}
function Se(e, n) {
	const t = new Float64Array(e.length + n.length);
	return t.set(e, 0), t.set(n, e.length), t;
}
function ve(e, n) {
	const t = new Uint8Array(e.length + n.length);
	return t.set(e, 0), t.set(n, e.length), t;
}
async function ke(e, n, t) {
	const [o = 0, s = 0] = await t.analysisWindowSlice(e.ggirTimestamps, n);
	return o === s ? {
		kind: "refused",
		reason: "No activity data found for this date"
	} : {
		kind: "angle",
		series: {
			timestamps: e.ggirTimestamps.slice(o),
			activityCounts: e.ggirEnmo.slice(o),
			sleepScores: e.sib.slice(o),
			...e.invalid?.length === e.ggirTimestamps.length ? { ggirInvalid: e.invalid.slice(o) } : {}
		}
	};
}
export { he as NIGHT_INPUTS_CORRUPT, Se as concatF64, ve as concatU8, ke as ggirNightPlacementSeries, _e as nextStoredDate, be as nightAnchorDay, we as readGgirNightInputs, ye as unpackStoredGgirDay };
