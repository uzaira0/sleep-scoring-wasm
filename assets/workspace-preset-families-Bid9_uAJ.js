import { Dn as e, Yt as t, an as r, bn as a, in as n, vn as s } from "./schema-B_tCLPTi.js";
import { M as o, t as i } from "./workspace-db-C0mqPCjA.js";
import { o as c } from "./content-hash-LIzlxz9S.js";
import { s as l, t as p } from "./sleep-period-detection-DACRcT22.js";
import { n as u, r as d, t as f } from "./preset-families-C-4e6hae.js";
import { t as w } from "./audit-hash-D_UvOsjj.js";
import { i as m, t as y } from "./wal-b4Dt4nDf.js";
import { b as h, f as g, u as P, v as A, x as I, y as S } from "./valid-day-criteria-BvWW5KT6.js";
import { validateDiaryInstrumentMapping as D } from "./diary-instrument-mapping-CbXoT5Zj.js";
import { r as C } from "./diary-source-adapter-FMtc-tDn.js";
import { i as j, n as _, t as v } from "./column-mapping-presets-TGypPXBQ.js";
import { n as E, t as b } from "./pa-mask-nonwear-reset-Bj8JsyK_.js";
const O = {
	schemaVersion: 1,
	algorithm: t.SADEH_1994_ACTILIFE,
	nonwearDetectorsCounts: [...s.nonwear_detectors_counts],
	nonwearDetectorsGgir: [...s.nonwear_detectors_ggir],
	sleepPeriodDetection: p,
	placementRuleset: n.LEGACY,
	scorerPostprocessingPreset: r.NONE,
	analysisParadigm: g(a.analysis_paradigm),
	actiwareAnalysis: {},
	actiwareRestProposal: { ...A }
}, k = new Set(Object.values(t)), H = new Set(Object.values(o)), N = new Set(Object.values(n)), R = new Set(Object.values(r));
function V(e) {
	return "string" == typeof e && k.has(e) ? e : O.algorithm;
}
function G(e, t) {
	return Array.isArray(e) ? [...new Set(e.filter((e) => "string" == typeof e && H.has(e)))] : [...t];
}
function M(e) {
	return "string" == typeof e && N.has(e) ? e : O.placementRuleset;
}
function z(e) {
	return "string" == typeof e && R.has(e) ? e : O.scorerPostprocessingPreset;
}
function x(e) {
	const t = "object" == typeof e && null !== e ? e : {};
	return {
		schemaVersion: 1,
		algorithm: V(t.algorithm),
		nonwearDetectorsCounts: G(t.nonwearDetectorsCounts, O.nonwearDetectorsCounts),
		nonwearDetectorsGgir: G(t.nonwearDetectorsGgir, O.nonwearDetectorsGgir),
		sleepPeriodDetection: l(t.sleepPeriodDetection),
		placementRuleset: M(t.placementRuleset),
		scorerPostprocessingPreset: z(t.scorerPostprocessingPreset),
		analysisParadigm: g(t.analysisParadigm),
		actiwareAnalysis: P(t.actiwareAnalysis),
		actiwareRestProposal: S(t.actiwareRestProposal)
	};
}
const L = d(u.SCORING_RECIPE).storageKey;
const Y = "sleep-scoring:workspace-preset-legacy-migration:v1";
new class extends e {
	claims;
	constructor(e = "SleepScoringLegacyPresetMigrationClaims") {
		super(e), this.version(1).stores({ claims: "key" });
	}
	async tryAcquire() {
		try {
			return await this.claims.add({
				key: Y,
				state: "consumed"
			}), !0;
		} catch (e) {
			if (e instanceof Error && "ConstraintError" === e.name) return !1;
			throw e;
		}
	}
	async releaseOwnedClaim() {
		await this.claims.delete(Y);
	}
}();
var F = class extends Error {
	constructor() {
		super("Preset family payload is invalid."), this.name = "WorkspacePresetPayloadError";
	}
}, T = class extends Error {
	constructor() {
		super("Stored preset family record failed integrity validation."), this.name = "WorkspacePresetIntegrityError";
	}
}, W = class extends Error {
	constructor() {
		super("Preset family changed since it was loaded."), this.name = "WorkspacePresetConflictError";
	}
}, J = class extends Error {
	result;
	constructor(e) {
		super("Workspace preset mutation was unnecessary."), this.name = "NoWorkspacePresetMutation", this.result = e;
	}
};
function U(e) {
	return "string" == typeof e && f.includes(e);
}
function K(e) {
	if (!U(e)) throw new F();
}
function $(e) {
	try {
		const t = JSON.parse(e);
		if (!Array.isArray(t)) throw new F();
		return t;
	} catch (t) {
		if (t instanceof F) throw t;
		throw new F();
	}
}
const q = new Set(C.map((e) => e.key));
function B(e) {
	return null !== e && "object" == typeof e && !Array.isArray(e);
}
function Q(e, t) {
	if (K(e), "string" != typeof t) throw new F();
	const r = $(t);
	e === u.DIARY_MAPPING && function(e) {
		for (const t of e) {
			if (!B(t) || !B(t.mapping)) throw new F();
			if ("epochLengthSeconds" in t || "devicePreset" in t) throw new F();
			for (const r of Object.keys(t.mapping)) if (!q.has(r) && !(r in v)) throw new F();
			const e = "instrumentVersionDefinitionId" in t;
			if (e !== "instrumentMapping" in t) throw new F();
			if (e) {
				if ("string" != typeof t.instrumentVersionDefinitionId || !B(t.instrumentMapping)) throw new F();
				const e = {};
				for (const [r, a] of Object.entries(t.instrumentMapping)) {
					if ("string" != typeof a) throw new F();
					e[r] = a;
				}
				if (D(t.instrumentVersionDefinitionId, e).length > 0) throw new F();
			}
		}
	}(r);
	const a = d(e).storageKey, n = function(e, t) {
		let r = t;
		return {
			storage: {
				getItem: (t) => t === e ? r : null,
				setItem(t, a) {
					if (t !== e) throw new F();
					r = a;
				}
			},
			read: () => r
		};
	}(a, t);
	try {
		let t;
		switch (e) {
			case u.CSV_MAPPING:
			case u.DIARY_MAPPING: {
				const e = _(a, n.storage);
				t = e.length, j(a, e, n.storage);
				break;
			}
			case u.PHYSICAL_ACTIVITY_CUTPOINTS: {
				const e = h(n.storage);
				t = e.length, I(e, n.storage);
				break;
			}
			case u.PHYSICAL_ACTIVITY_INCLUSION_RULES: {
				const e = b(n.storage);
				t = e.length, E(e, n.storage);
				break;
			}
			case u.SCORING_RECIPE: {
				const e = function(e = localStorage) {
					try {
						const t = e.getItem(L), r = t ? JSON.parse(t) : [];
						return Array.isArray(r) ? r.flatMap((e) => {
							const t = function(e) {
								return "object" == typeof e && null !== e && !Array.isArray(e);
							}(r = e) && "string" == typeof r.name && 0 !== r.name.trim().length ? {
								name: r.name,
								recipe: x(r.recipe)
							} : null;
							var r;
							return t ? [t] : [];
						}) : [];
					} catch {
						return [];
					}
				}(n.storage);
				t = e.length, function(e, t = localStorage) {
					const r = e.slice(0, 20);
					t.setItem(L, JSON.stringify(r.map((e) => ({
						name: e.name,
						recipe: x(e.recipe)
					})))), r.length, e.length, r.length;
				}(e, n.storage);
				break;
			}
		}
		if (t !== r.length) throw new F();
		return w($(n.read()));
	} catch (s) {
		if (s instanceof F) throw s;
		throw new F();
	}
}
function X(e) {
	if ("string" != typeof e) return !1;
	try {
		return new Date(e).toISOString() === e;
	} catch {
		return !1;
	}
}
function Z(e, t) {
	if (void 0 !== t && (null !== t && !/^[0-9a-f]{64}$/.test(t) || (e?.contentHash ?? null) !== t)) throw new W();
}
async function ee(e) {
	try {
		if ("object" != typeof e || null === e || Array.isArray(e)) throw new T();
		const t = e, r = t.family, a = t.payloadVersion, n = t.serializedPayload, s = t.contentHash, o = t.createdAt, i = t.updatedAt;
		if (!U(r) || 1 !== a || "string" != typeof n || "string" != typeof s || !/^[0-9a-f]{64}$/.test(s) || !X(o) || !X(i) || Date.parse(i) < Date.parse(o)) throw new T();
		const l = Q(r, n);
		if (l === n) {
			if (await c(l) !== s) throw new T();
			return {
				family: r,
				payloadVersion: a,
				serializedPayload: n,
				contentHash: s,
				createdAt: o,
				updatedAt: i
			};
		}
		if (await c(n) !== s) throw new T();
		return {
			family: r,
			payloadVersion: a,
			serializedPayload: l,
			contentHash: await c(l),
			createdAt: o,
			updatedAt: i
		};
	} catch {
		throw new T();
	}
}
async function te(e, t = i()) {
	K(e);
	const r = await t.presetFamilies.get(e);
	return r ? ee(r) : void 0;
}
async function re(t, r, a = i(), n) {
	const s = await async function(e, t) {
		const r = Q(e, t);
		return {
			family: e,
			serializedPayload: r,
			contentHash: await c(r),
			presetCount: $(r).length
		};
	}(t, r), o = await a.presetFamilies.get(t), l = o ? await ee(o) : void 0;
	if (Z(l, n), l && l.contentHash === s.contentHash && l.serializedPayload === s.serializedPayload) return {
		record: l,
		disposition: "deduplicated"
	};
	try {
		return await m([a.presetFamilies], async () => {
			const r = await a.presetFamilies.get(t), o = r ? await e.waitFor(ee(r)) : void 0;
			if (Z(o, n), o?.contentHash === s.contentHash && o.serializedPayload === s.serializedPayload) throw new J({
				record: o,
				disposition: "deduplicated"
			});
			const i = function(e) {
				const t = e ? Date.parse(e.updatedAt) + 1 : 0;
				return new Date(Math.max(Date.now(), t)).toISOString();
			}(o), c = {
				family: t,
				payloadVersion: 1,
				serializedPayload: s.serializedPayload,
				contentHash: s.contentHash,
				createdAt: o?.createdAt ?? i,
				updatedAt: i
			}, l = o ? "updated" : "inserted";
			return await a.presetFamilies.put(c), await y({
				op: "preset_family_put",
				payload: {
					disposition: l,
					record: c
				}
			}), {
				record: c,
				disposition: l
			};
		}, a);
	} catch (p) {
		if (p instanceof J) return p.result;
		throw p;
	}
}
export { te as loadWorkspacePresetFamily, re as upsertWorkspacePresetFamily };
