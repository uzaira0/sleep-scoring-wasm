import { Cn as e, Mn as t, Tn as r, en as a, ln as n, un as s } from "./schema-DIFbKGjm.js";
import { M as o, t as i } from "./workspace-db-DNuCZnyP.js";
import { o as c } from "./content-hash-D4_ZE65l.js";
import { H as l, K as p, f as u, u as f, v as d, y as w } from "./per-source-defaults-CrNUl4LJ.js";
import { n as m, r as y, t as h } from "./preset-families-Ce98Rhoi.js";
import { t as g } from "./audit-hash-B_VayGEe.js";
import { i as P, t as A } from "./wal-DUegDVYU.js";
import { n as I, t as S } from "./physical-activity-cutpoint-presets-HxPAI2J5.js";
import { validateDiaryInstrumentMapping as C } from "./diary-instrument-mapping-DRkoXUQm.js";
import { r as D } from "./diary-source-adapter-_dhsNF0V.js";
import { i as j, n as _, t as E } from "./column-mapping-presets-mI8a7bnK.js";
import { n as v, t as O } from "./pa-mask-nonwear-reset-CC5IFeYs.js";
const k = {
	schemaVersion: 1,
	algorithm: a.SADEH_1994_ACTILIFE,
	nonwearDetectorsCounts: [...e.nonwear_detectors_counts],
	nonwearDetectorsGgir: [...e.nonwear_detectors_ggir],
	sleepPeriodDetection: l,
	placementRuleset: n.LEGACY,
	scorerPostprocessingPreset: s.NONE,
	analysisParadigm: u(r.analysis_paradigm),
	actiwareAnalysis: {},
	actiwareRestProposal: { ...d }
}, b = new Set(Object.values(a)), H = new Set(Object.values(o)), N = new Set(Object.values(n)), R = new Set(Object.values(s));
function M(e) {
	return "string" == typeof e && b.has(e) ? e : k.algorithm;
}
function V(e, t) {
	return Array.isArray(e) ? [...new Set(e.filter((e) => "string" == typeof e && H.has(e)))] : [...t];
}
function G(e) {
	return "string" == typeof e && N.has(e) ? e : k.placementRuleset;
}
function z(e) {
	return "string" == typeof e && R.has(e) ? e : k.scorerPostprocessingPreset;
}
function L(e) {
	const t = "object" == typeof e && null !== e ? e : {};
	return {
		schemaVersion: 1,
		algorithm: M(t.algorithm),
		nonwearDetectorsCounts: V(t.nonwearDetectorsCounts, k.nonwearDetectorsCounts),
		nonwearDetectorsGgir: V(t.nonwearDetectorsGgir, k.nonwearDetectorsGgir),
		sleepPeriodDetection: p(t.sleepPeriodDetection),
		placementRuleset: G(t.placementRuleset),
		scorerPostprocessingPreset: z(t.scorerPostprocessingPreset),
		analysisParadigm: u(t.analysisParadigm),
		actiwareAnalysis: f(t.actiwareAnalysis),
		actiwareRestProposal: w(t.actiwareRestProposal)
	};
}
const T = y(m.SCORING_RECIPE).storageKey;
const x = "sleep-scoring:workspace-preset-legacy-migration:v1";
new class extends t {
	claims;
	constructor(e = "SleepScoringLegacyPresetMigrationClaims") {
		super(e), this.version(1).stores({ claims: "key" });
	}
	async tryAcquire() {
		try {
			return await this.claims.add({
				key: x,
				state: "consumed"
			}), !0;
		} catch (e) {
			if (e instanceof Error && "ConstraintError" === e.name) return !1;
			throw e;
		}
	}
	async releaseOwnedClaim() {
		await this.claims.delete(x);
	}
}();
var F = class extends Error {
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
function K(e) {
	return "string" == typeof e && h.includes(e);
}
function U(e) {
	if (!K(e)) throw new F();
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
const q = new Set(D.map((e) => e.key));
function B(e) {
	return null !== e && "object" == typeof e && !Array.isArray(e);
}
function Q(e, t) {
	if (U(e), "string" != typeof t) throw new F();
	const r = $(t);
	e === m.DIARY_MAPPING && function(e) {
		for (const t of e) {
			if (!B(t) || !B(t.mapping)) throw new F();
			if ("epochLengthSeconds" in t || "devicePreset" in t) throw new F();
			for (const r of Object.keys(t.mapping)) if (!q.has(r) && !(r in E)) throw new F();
			const e = "instrumentVersionDefinitionId" in t;
			if (e !== "instrumentMapping" in t) throw new F();
			if (e) {
				if ("string" != typeof t.instrumentVersionDefinitionId || !B(t.instrumentMapping)) throw new F();
				const e = {};
				for (const [r, a] of Object.entries(t.instrumentMapping)) {
					if ("string" != typeof a) throw new F();
					e[r] = a;
				}
				if (C(t.instrumentVersionDefinitionId, e).length > 0) throw new F();
			}
		}
	}(r);
	const a = y(e).storageKey, n = function(e, t) {
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
			case m.CSV_MAPPING:
			case m.DIARY_MAPPING: {
				const e = _(a, n.storage);
				t = e.length, j(a, e, n.storage);
				break;
			}
			case m.PHYSICAL_ACTIVITY_CUTPOINTS: {
				const e = S(n.storage);
				t = e.length, I(e, n.storage);
				break;
			}
			case m.PHYSICAL_ACTIVITY_INCLUSION_RULES: {
				const e = O(n.storage);
				t = e.length, v(e, n.storage);
				break;
			}
			case m.SCORING_RECIPE: {
				const e = function(e = localStorage) {
					try {
						const t = e.getItem(T), r = t ? JSON.parse(t) : [];
						return Array.isArray(r) ? r.flatMap((e) => {
							const t = function(e) {
								return "object" == typeof e && null !== e && !Array.isArray(e);
							}(r = e) && "string" == typeof r.name && 0 !== r.name.trim().length ? {
								name: r.name,
								recipe: L(r.recipe)
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
					t.setItem(T, JSON.stringify(r.map((e) => ({
						name: e.name,
						recipe: L(e.recipe)
					})))), r.length, e.length, r.length;
				}(e, n.storage);
				break;
			}
		}
		if (t !== r.length) throw new F();
		return g($(n.read()));
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
		if ("object" != typeof e || null === e || Array.isArray(e)) throw new Y();
		const t = e, r = t.family, a = t.payloadVersion, n = t.serializedPayload, s = t.contentHash, o = t.createdAt, i = t.updatedAt;
		if (!K(r) || 1 !== a || "string" != typeof n || "string" != typeof s || !/^[0-9a-f]{64}$/.test(s) || !X(o) || !X(i) || Date.parse(i) < Date.parse(o)) throw new Y();
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
	U(e);
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
			presetCount: $(r).length
		};
	}(e, r), o = await a.presetFamilies.get(e), l = o ? await ee(o) : void 0;
	if (Z(l, n), l && l.contentHash === s.contentHash && l.serializedPayload === s.serializedPayload) return {
		record: l,
		disposition: "deduplicated"
	};
	try {
		return await P([a.presetFamilies], async () => {
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
			return await a.presetFamilies.put(c), await A({
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
