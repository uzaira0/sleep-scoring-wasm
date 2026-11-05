import { $t as e, Sn as t, Wt as r, en as a, hn as n, pn as s } from "./schema-CoLJBY5o.js";
import { N as o, t as i } from "./workspace-db-mwmkj659.js";
import { o as c } from "./content-hash-DKxfNNnb.js";
import { s as l, t as p } from "./sleep-period-detection-CKwWvPPT.js";
import { n as u, r as d, t as f } from "./preset-families-DQ_nritl.js";
import { t as w } from "./audit-hash-Bs3Gj8Wy.js";
import { i as m, t as y } from "./wal-D0ADVqFX.js";
import { b as h, f as g, u as P, v as A, x as I, y as S } from "./valid-day-criteria-wd9cIZwC.js";
import { r as D } from "./diary-source-adapter-Bz3f1C4n.js";
import { validateDiaryInstrumentMapping as j } from "./diary-instrument-mapping-D-klmlFD.js";
import { i as C, n as _, t as E } from "./column-mapping-presets-I9-WuEJ7.js";
import { n as v, t as O } from "./pa-mask-nonwear-reset-CPrzLuEf.js";
const b = {
	schemaVersion: 1,
	algorithm: r.SADEH_1994_ACTILIFE,
	nonwearDetectorsCounts: [...s.nonwear_detectors_counts],
	nonwearDetectorsGgir: [...s.nonwear_detectors_ggir],
	sleepPeriodDetection: p,
	placementRuleset: e.LEGACY,
	scorerPostprocessingPreset: a.NONE,
	analysisParadigm: g(n.analysis_paradigm),
	actiwareAnalysis: {},
	actiwareRestProposal: { ...A }
}, k = new Set(Object.values(r)), N = new Set(Object.values(o)), H = new Set(Object.values(e)), R = new Set(Object.values(a));
function V(e) {
	return "string" == typeof e && k.has(e) ? e : b.algorithm;
}
function G(e, t) {
	return Array.isArray(e) ? [...new Set(e.filter((e) => "string" == typeof e && N.has(e)))] : [...t];
}
function z(e) {
	return "string" == typeof e && H.has(e) ? e : b.placementRuleset;
}
function M(e) {
	return "string" == typeof e && R.has(e) ? e : b.scorerPostprocessingPreset;
}
function x(e) {
	const t = "object" == typeof e && null !== e ? e : {};
	return {
		schemaVersion: 1,
		algorithm: V(t.algorithm),
		nonwearDetectorsCounts: G(t.nonwearDetectorsCounts, b.nonwearDetectorsCounts),
		nonwearDetectorsGgir: G(t.nonwearDetectorsGgir, b.nonwearDetectorsGgir),
		sleepPeriodDetection: l(t.sleepPeriodDetection),
		placementRuleset: z(t.placementRuleset),
		scorerPostprocessingPreset: M(t.scorerPostprocessingPreset),
		analysisParadigm: g(t.analysisParadigm),
		actiwareAnalysis: P(t.actiwareAnalysis),
		actiwareRestProposal: S(t.actiwareRestProposal)
	};
}
const L = d(u.SCORING_RECIPE).storageKey;
const F = "sleep-scoring:workspace-preset-legacy-migration:v1";
new class extends t {
	claims;
	constructor(e = "SleepScoringLegacyPresetMigrationClaims") {
		super(e), this.version(1).stores({ claims: "key" });
	}
	async tryAcquire() {
		try {
			return await this.claims.add({
				key: F,
				state: "consumed"
			}), !0;
		} catch (e) {
			if (e instanceof Error && "ConstraintError" === e.name) return !1;
			throw e;
		}
	}
	async releaseOwnedClaim() {
		await this.claims.delete(F);
	}
}();
var T = class extends Error {
	constructor() {
		super("Preset family payload is invalid."), this.name = "WorkspacePresetPayloadError";
	}
}, Y = class extends Error {
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
function $(e) {
	if (!U(e)) throw new T();
}
function K(e) {
	try {
		const t = JSON.parse(e);
		if (!Array.isArray(t)) throw new T();
		return t;
	} catch (t) {
		if (t instanceof T) throw t;
		throw new T();
	}
}
const q = new Set(D.map((e) => e.key));
function B(e) {
	return null !== e && "object" == typeof e && !Array.isArray(e);
}
function Q(e, t) {
	if ($(e), "string" != typeof t) throw new T();
	const r = K(t);
	e === u.DIARY_MAPPING && function(e) {
		for (const t of e) {
			if (!B(t) || !B(t.mapping)) throw new T();
			if ("epochLengthSeconds" in t || "devicePreset" in t) throw new T();
			for (const r of Object.keys(t.mapping)) if (!q.has(r) && !(r in E)) throw new T();
			const e = "instrumentVersionDefinitionId" in t;
			if (e !== "instrumentMapping" in t) throw new T();
			if (e) {
				if ("string" != typeof t.instrumentVersionDefinitionId || !B(t.instrumentMapping)) throw new T();
				const e = {};
				for (const [r, a] of Object.entries(t.instrumentMapping)) {
					if ("string" != typeof a) throw new T();
					e[r] = a;
				}
				if (j(t.instrumentVersionDefinitionId, e).length > 0) throw new T();
			}
		}
	}(r);
	const a = d(e).storageKey, n = function(e, t) {
		let r = t;
		return {
			storage: {
				getItem: (t) => t === e ? r : null,
				setItem(t, a) {
					if (t !== e) throw new T();
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
				t = e.length, C(a, e, n.storage);
				break;
			}
			case u.PHYSICAL_ACTIVITY_CUTPOINTS: {
				const e = h(n.storage);
				t = e.length, I(e, n.storage);
				break;
			}
			case u.PHYSICAL_ACTIVITY_INCLUSION_RULES: {
				const e = O(n.storage);
				t = e.length, v(e, n.storage);
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
		if (t !== r.length) throw new T();
		return w(K(n.read()));
	} catch (s) {
		if (s instanceof T) throw s;
		throw new T();
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
		if ("object" != typeof e || null === e || Array.isArray(e)) throw new Y();
		const t = e, r = t.family, a = t.payloadVersion, n = t.serializedPayload, s = t.contentHash, o = t.createdAt, i = t.updatedAt;
		if (!U(r) || 1 !== a || "string" != typeof n || "string" != typeof s || !/^[0-9a-f]{64}$/.test(s) || !X(o) || !X(i) || Date.parse(i) < Date.parse(o)) throw new Y();
		const l = Q(r, n);
		if (l === n) {
			if (await c(l) !== s) throw new Y();
			return {
				family: r,
				payloadVersion: a,
				serializedPayload: n,
				contentHash: s,
				createdAt: o,
				updatedAt: i
			};
		}
		if (await c(n) !== s) throw new Y();
		return {
			family: r,
			payloadVersion: a,
			serializedPayload: l,
			contentHash: await c(l),
			createdAt: o,
			updatedAt: i
		};
	} catch {
		throw new Y();
	}
}
async function te(e, t = i()) {
	$(e);
	const r = await t.presetFamilies.get(e);
	return r ? ee(r) : void 0;
}
async function re(e, r, a = i(), n) {
	const s = await async function(e, t) {
		const r = Q(e, t);
		return {
			family: e,
			serializedPayload: r,
			contentHash: await c(r),
			presetCount: K(r).length
		};
	}(e, r), o = await a.presetFamilies.get(e), l = o ? await ee(o) : void 0;
	if (Z(l, n), l && l.contentHash === s.contentHash && l.serializedPayload === s.serializedPayload) return {
		record: l,
		disposition: "deduplicated"
	};
	try {
		return await m([a.presetFamilies], async () => {
			const r = await a.presetFamilies.get(e), o = r ? await t.waitFor(ee(r)) : void 0;
			if (Z(o, n), o?.contentHash === s.contentHash && o.serializedPayload === s.serializedPayload) throw new J({
				record: o,
				disposition: "deduplicated"
			});
			const i = function(e) {
				const t = e ? Date.parse(e.updatedAt) + 1 : 0;
				return new Date(Math.max(Date.now(), t)).toISOString();
			}(o), c = {
				family: e,
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
