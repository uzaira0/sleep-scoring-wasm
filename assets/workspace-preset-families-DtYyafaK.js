import { St as t, Z as e, bt as r, kt as a, ot as s, st as n } from "./schema-CuSEBD8u.js";
import { A as o, t as i } from "./workspace-db-DC1JGCSh.js";
import { a as c } from "./content-hash-CZ-UAlQR.js";
import { D as l, N as p, _ as u, d as f, l as d, v as w } from "./per-source-defaults-BCxPLiaZ.js";
import { n as m, r as y, t as h } from "./preset-families-ByRreHWO.js";
import { t as g } from "./audit-hash-DNLMlimm.js";
import { i as P, t as A } from "./wal-CJa3WD-b.js";
import { n as I, t as S } from "./physical-activity-cutpoint-presets-X7xGEiL5.js";
import { validateDiaryInstrumentMapping as D } from "./diary-instrument-mapping-DGYtAe1D.js";
import { r as C } from "./diary-source-adapter-Cu6KVdKO.js";
import { i as j, n as _, t as E } from "./column-mapping-presets-C0F_vrU4.js";
import { n as k, t as v } from "./pa-mask-nonwear-reset-BcPjXf6i.js";
const O = {
	schemaVersion: 1,
	algorithm: e.SADEH_1994_ACTILIFE,
	nonwearDetectorsCounts: [...r.nonwear_detectors_counts],
	nonwearDetectorsGgir: [...r.nonwear_detectors_ggir],
	sleepPeriodDetection: l,
	placementRuleset: s.LEGACY,
	scorerPostprocessingPreset: n.NONE,
	analysisParadigm: f(t.analysis_paradigm),
	actiwareAnalysis: {},
	actiwareRestProposal: { ...u }
}, b = new Set(Object.values(e)), N = new Set(Object.values(o)), H = new Set(Object.values(s)), R = new Set(Object.values(n));
function V(t) {
	return "string" == typeof t && b.has(t) ? t : O.algorithm;
}
function z(t, e) {
	return Array.isArray(t) ? [...new Set(t.filter((t) => "string" == typeof t && N.has(t)))] : [...e];
}
function G(t) {
	return "string" == typeof t && H.has(t) ? t : O.placementRuleset;
}
function M(t) {
	return "string" == typeof t && R.has(t) ? t : O.scorerPostprocessingPreset;
}
function F(t) {
	const e = "object" == typeof t && null !== t ? t : {};
	return {
		schemaVersion: 1,
		algorithm: V(e.algorithm),
		nonwearDetectorsCounts: z(e.nonwearDetectorsCounts, O.nonwearDetectorsCounts),
		nonwearDetectorsGgir: z(e.nonwearDetectorsGgir, O.nonwearDetectorsGgir),
		sleepPeriodDetection: p(e.sleepPeriodDetection),
		placementRuleset: G(e.placementRuleset),
		scorerPostprocessingPreset: M(e.scorerPostprocessingPreset),
		analysisParadigm: f(e.analysisParadigm),
		actiwareAnalysis: d(e.actiwareAnalysis),
		actiwareRestProposal: w(e.actiwareRestProposal)
	};
}
const L = y(m.SCORING_RECIPE).storageKey;
const x = "sleep-scoring:workspace-preset-legacy-migration:v1";
new class extends a {
	claims;
	constructor(t = "SleepScoringLegacyPresetMigrationClaims") {
		super(t), this.version(1).stores({ claims: "key" });
	}
	async tryAcquire() {
		try {
			return await this.claims.add({
				key: x,
				state: "consumed"
			}), !0;
		} catch (t) {
			if (t instanceof Error && "ConstraintError" === t.name) return !1;
			throw t;
		}
	}
	async releaseOwnedClaim() {
		await this.claims.delete(x);
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
	constructor(t) {
		super("Workspace preset mutation was unnecessary."), this.name = "NoWorkspacePresetMutation", this.result = t;
	}
};
function U(t) {
	return "string" == typeof t && h.includes(t);
}
function K(t) {
	if (!U(t)) throw new T();
}
function $(t) {
	try {
		const e = JSON.parse(t);
		if (!Array.isArray(e)) throw new T();
		return e;
	} catch (e) {
		if (e instanceof T) throw e;
		throw new T();
	}
}
const q = new Set(C.map((t) => t.key));
function B(t) {
	return null !== t && "object" == typeof t && !Array.isArray(t);
}
function Z(t, e) {
	if (K(t), "string" != typeof e) throw new T();
	const r = $(e);
	t === m.DIARY_MAPPING && function(t) {
		for (const e of t) {
			if (!B(e) || !B(e.mapping)) throw new T();
			if ("epochLengthSeconds" in e || "devicePreset" in e) throw new T();
			for (const r of Object.keys(e.mapping)) if (!q.has(r) && !(r in E)) throw new T();
			const t = "instrumentVersionDefinitionId" in e;
			if (t !== "instrumentMapping" in e) throw new T();
			if (t) {
				if ("string" != typeof e.instrumentVersionDefinitionId || !B(e.instrumentMapping)) throw new T();
				const t = {};
				for (const [r, a] of Object.entries(e.instrumentMapping)) {
					if ("string" != typeof a) throw new T();
					t[r] = a;
				}
				if (D(e.instrumentVersionDefinitionId, t).length > 0) throw new T();
			}
		}
	}(r);
	const a = y(t).storageKey, s = function(t, e) {
		let r = e;
		return {
			storage: {
				getItem: (e) => e === t ? r : null,
				setItem(e, a) {
					if (e !== t) throw new T();
					r = a;
				}
			},
			read: () => r
		};
	}(a, e);
	try {
		let e;
		switch (t) {
			case m.CSV_MAPPING:
			case m.DIARY_MAPPING: {
				const t = _(a, s.storage);
				e = t.length, j(a, t, s.storage);
				break;
			}
			case m.PHYSICAL_ACTIVITY_CUTPOINTS: {
				const t = S(s.storage);
				e = t.length, I(t, s.storage);
				break;
			}
			case m.PHYSICAL_ACTIVITY_INCLUSION_RULES: {
				const t = v(s.storage);
				e = t.length, k(t, s.storage);
				break;
			}
			case m.SCORING_RECIPE: {
				const t = function(t = localStorage) {
					try {
						const e = t.getItem(L), r = e ? JSON.parse(e) : [];
						return Array.isArray(r) ? r.flatMap((t) => {
							const e = function(t) {
								return "object" == typeof t && null !== t && !Array.isArray(t);
							}(r = t) && "string" == typeof r.name && 0 !== r.name.trim().length ? {
								name: r.name,
								recipe: F(r.recipe)
							} : null;
							var r;
							return e ? [e] : [];
						}) : [];
					} catch {
						return [];
					}
				}(s.storage);
				e = t.length, function(t, e = localStorage) {
					const r = t.slice(0, 20);
					e.setItem(L, JSON.stringify(r.map((t) => ({
						name: t.name,
						recipe: F(t.recipe)
					})))), r.length, t.length, r.length;
				}(t, s.storage);
				break;
			}
		}
		if (e !== r.length) throw new T();
		return g($(s.read()));
	} catch (n) {
		if (n instanceof T) throw n;
		throw new T();
	}
}
function Q(t) {
	if ("string" != typeof t) return !1;
	try {
		return new Date(t).toISOString() === t;
	} catch {
		return !1;
	}
}
function X(t, e) {
	if (void 0 !== e && (null !== e && !/^[0-9a-f]{64}$/.test(e) || (t?.contentHash ?? null) !== e)) throw new W();
}
async function tt(t) {
	try {
		if ("object" != typeof t || null === t || Array.isArray(t)) throw new Y();
		const e = t, r = e.family, a = e.payloadVersion, s = e.serializedPayload, n = e.contentHash, o = e.createdAt, i = e.updatedAt;
		if (!U(r) || 1 !== a || "string" != typeof s || "string" != typeof n || !/^[0-9a-f]{64}$/.test(n) || !Q(o) || !Q(i) || Date.parse(i) < Date.parse(o)) throw new Y();
		const l = Z(r, s);
		if (l === s) {
			if (await c(l) !== n) throw new Y();
			return {
				family: r,
				payloadVersion: a,
				serializedPayload: s,
				contentHash: n,
				createdAt: o,
				updatedAt: i
			};
		}
		if (await c(s) !== n) throw new Y();
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
async function et(t, e = i()) {
	K(t);
	const r = await e.presetFamilies.get(t);
	return r ? tt(r) : void 0;
}
async function rt(t, e, r = i(), s) {
	const n = await async function(t, e) {
		const r = Z(t, e);
		return {
			family: t,
			serializedPayload: r,
			contentHash: await c(r),
			presetCount: $(r).length
		};
	}(t, e), o = await r.presetFamilies.get(t), l = o ? await tt(o) : void 0;
	if (X(l, s), l && l.contentHash === n.contentHash && l.serializedPayload === n.serializedPayload) return {
		record: l,
		disposition: "deduplicated"
	};
	try {
		return await P([r.presetFamilies], async () => {
			const e = await r.presetFamilies.get(t), o = e ? await a.waitFor(tt(e)) : void 0;
			if (X(o, s), o?.contentHash === n.contentHash && o.serializedPayload === n.serializedPayload) throw new J({
				record: o,
				disposition: "deduplicated"
			});
			const i = function(t) {
				const e = t ? Date.parse(t.updatedAt) + 1 : 0;
				return new Date(Math.max(Date.now(), e)).toISOString();
			}(o), c = {
				family: t,
				payloadVersion: 1,
				serializedPayload: n.serializedPayload,
				contentHash: n.contentHash,
				createdAt: o?.createdAt ?? i,
				updatedAt: i
			}, l = o ? "updated" : "inserted";
			return await r.presetFamilies.put(c), await A({
				op: "preset_family_put",
				payload: {
					disposition: l,
					record: c
				}
			}), {
				record: c,
				disposition: l
			};
		}, r);
	} catch (p) {
		if (p instanceof J) return p.result;
		throw p;
	}
}
export { et as loadWorkspacePresetFamily, rt as upsertWorkspacePresetFamily };
