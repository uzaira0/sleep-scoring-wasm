import { Kt as e, Lt as t, cn as r, mn as n, on as a, qt as s } from "./schema-DoqY2nOZ.js";
import { k as o, t as i } from "./workspace-db-_hfwr346.js";
import { o as c } from "./content-hash-BtD8CeUH.js";
import { s as l, t as p } from "./sleep-period-detection-CFDERDxv.js";
import { a as u, m as d, p as f, s as m } from "./valid-day-criteria-CJ_kenUs.js";
import { t as w } from "./audit-hash-rfcCP1yx.js";
import { i as y, t as h } from "./wal-DTtluAz6.js";
import { n as g, r as P, t as A } from "./preset-families-CELjImJE.js";
import { r as I } from "./diary-source-adapter-CGUWAoYf.js";
import { validateDiaryInstrumentMapping as S } from "./diary-instrument-mapping-D5PGvhNO.js";
import { i as D, n as j, t as C } from "./column-mapping-presets-DF9PIKmI.js";
import { n as E, t as _ } from "./pa-mask-nonwear-reset-B1MUQdGI.js";
const k = {
	schemaVersion: 1,
	algorithm: t.SADEH_1994_ACTILIFE,
	nonwearDetectorsCounts: [...a.nonwear_detectors_counts],
	nonwearDetectorsGgir: [...a.nonwear_detectors_ggir],
	sleepPeriodDetection: p,
	placementRuleset: e.LEGACY,
	scorerPostprocessingPreset: s.NONE,
	analysisParadigm: m(r.analysis_paradigm),
	actiwareAnalysis: {}
}, O = new Set(Object.values(t)), v = new Set(Object.values(o)), b = new Set(Object.values(e)), H = new Set(Object.values(s));
function N(e) {
	return "string" == typeof e && O.has(e) ? e : k.algorithm;
}
function V(e, t) {
	return Array.isArray(e) ? [...new Set(e.filter((e) => "string" == typeof e && v.has(e)))] : [...t];
}
function R(e) {
	return "string" == typeof e && b.has(e) ? e : k.placementRuleset;
}
function z(e) {
	return "string" == typeof e && H.has(e) ? e : k.scorerPostprocessingPreset;
}
function G(e) {
	const t = "object" == typeof e && null !== e ? e : {};
	return {
		schemaVersion: 1,
		algorithm: N(t.algorithm),
		nonwearDetectorsCounts: V(t.nonwearDetectorsCounts, k.nonwearDetectorsCounts),
		nonwearDetectorsGgir: V(t.nonwearDetectorsGgir, k.nonwearDetectorsGgir),
		sleepPeriodDetection: l(t.sleepPeriodDetection),
		placementRuleset: R(t.placementRuleset),
		scorerPostprocessingPreset: z(t.scorerPostprocessingPreset),
		analysisParadigm: m(t.analysisParadigm),
		actiwareAnalysis: u(t.actiwareAnalysis)
	};
}
const M = P(g.SCORING_RECIPE).storageKey;
const L = "sleep-scoring:workspace-preset-legacy-migration:v1";
new class extends n {
	claims;
	constructor(e = "SleepScoringLegacyPresetMigrationClaims") {
		super(e), this.version(1).stores({ claims: "key" });
	}
	async tryAcquire() {
		try {
			return await this.claims.add({
				key: L,
				state: "consumed"
			}), !0;
		} catch (e) {
			if (e instanceof Error && "ConstraintError" === e.name) return !1;
			throw e;
		}
	}
	async releaseOwnedClaim() {
		await this.claims.delete(L);
	}
}();
var x = class extends Error {
	constructor() {
		super("Preset family payload is invalid."), this.name = "WorkspacePresetPayloadError";
	}
}, F = class extends Error {
	constructor() {
		super("Stored preset family record failed integrity validation."), this.name = "WorkspacePresetIntegrityError";
	}
}, T = class extends Error {
	constructor() {
		super("Preset family changed since it was loaded."), this.name = "WorkspacePresetConflictError";
	}
}, Y = class extends Error {
	result;
	constructor(e) {
		super("Workspace preset mutation was unnecessary."), this.name = "NoWorkspacePresetMutation", this.result = e;
	}
};
function W(e) {
	return "string" == typeof e && A.includes(e);
}
function K(e) {
	if (!W(e)) throw new x();
}
function J(e) {
	try {
		const t = JSON.parse(e);
		if (!Array.isArray(t)) throw new x();
		return t;
	} catch (t) {
		if (t instanceof x) throw t;
		throw new x();
	}
}
const U = new Set(I.map((e) => e.key));
function q(e) {
	return null !== e && "object" == typeof e && !Array.isArray(e);
}
function $(e, t) {
	if (K(e), "string" != typeof t) throw new x();
	const r = J(t);
	e === g.DIARY_MAPPING && function(e) {
		for (const t of e) {
			if (!q(t) || !q(t.mapping)) throw new x();
			if ("epochLengthSeconds" in t || "devicePreset" in t) throw new x();
			for (const r of Object.keys(t.mapping)) if (!U.has(r) && !(r in C)) throw new x();
			const e = "instrumentVersionDefinitionId" in t;
			if (e !== "instrumentMapping" in t) throw new x();
			if (e) {
				if ("string" != typeof t.instrumentVersionDefinitionId || !q(t.instrumentMapping)) throw new x();
				const e = {};
				for (const [r, n] of Object.entries(t.instrumentMapping)) {
					if ("string" != typeof n) throw new x();
					e[r] = n;
				}
				if (S(t.instrumentVersionDefinitionId, e).length > 0) throw new x();
			}
		}
	}(r);
	const n = P(e).storageKey, a = function(e, t) {
		let r = t;
		return {
			storage: {
				getItem: (t) => t === e ? r : null,
				setItem(t, n) {
					if (t !== e) throw new x();
					r = n;
				}
			},
			read: () => r
		};
	}(n, t);
	try {
		let t;
		switch (e) {
			case g.CSV_MAPPING:
			case g.DIARY_MAPPING: {
				const e = j(n, a.storage);
				t = e.length, D(n, e, a.storage);
				break;
			}
			case g.PHYSICAL_ACTIVITY_CUTPOINTS: {
				const e = f(a.storage);
				t = e.length, d(e, a.storage);
				break;
			}
			case g.PHYSICAL_ACTIVITY_INCLUSION_RULES: {
				const e = _(a.storage);
				t = e.length, E(e, a.storage);
				break;
			}
			case g.SCORING_RECIPE: {
				const e = function(e = localStorage) {
					try {
						const t = e.getItem(M), r = t ? JSON.parse(t) : [];
						return Array.isArray(r) ? r.flatMap((e) => {
							const t = function(e) {
								return "object" == typeof e && null !== e && !Array.isArray(e);
							}(r = e) && "string" == typeof r.name && 0 !== r.name.trim().length ? {
								name: r.name,
								recipe: G(r.recipe)
							} : null;
							var r;
							return t ? [t] : [];
						}) : [];
					} catch {
						return [];
					}
				}(a.storage);
				t = e.length, function(e, t = localStorage) {
					const r = e.slice(0, 20);
					t.setItem(M, JSON.stringify(r.map((e) => ({
						name: e.name,
						recipe: G(e.recipe)
					})))), r.length, e.length, r.length;
				}(e, a.storage);
				break;
			}
		}
		if (t !== r.length) throw new x();
		return w(J(a.read()));
	} catch (s) {
		if (s instanceof x) throw s;
		throw new x();
	}
}
function B(e) {
	if ("string" != typeof e) return !1;
	try {
		return new Date(e).toISOString() === e;
	} catch {
		return !1;
	}
}
function Q(e, t) {
	if (void 0 !== t && (null !== t && !/^[0-9a-f]{64}$/.test(t) || (e?.contentHash ?? null) !== t)) throw new T();
}
async function X(e) {
	try {
		if ("object" != typeof e || null === e || Array.isArray(e)) throw new F();
		const t = e, r = t.family, n = t.payloadVersion, a = t.serializedPayload, s = t.contentHash, o = t.createdAt, i = t.updatedAt;
		if (!W(r) || 1 !== n || "string" != typeof a || "string" != typeof s || !/^[0-9a-f]{64}$/.test(s) || !B(o) || !B(i) || Date.parse(i) < Date.parse(o)) throw new F();
		const l = $(r, a);
		if (l === a) {
			if (await c(l) !== s) throw new F();
			return {
				family: r,
				payloadVersion: n,
				serializedPayload: a,
				contentHash: s,
				createdAt: o,
				updatedAt: i
			};
		}
		if (await c(a) !== s) throw new F();
		return {
			family: r,
			payloadVersion: n,
			serializedPayload: l,
			contentHash: await c(l),
			createdAt: o,
			updatedAt: i
		};
	} catch {
		throw new F();
	}
}
async function Z(e, t = i()) {
	K(e);
	const r = await t.presetFamilies.get(e);
	return r ? X(r) : void 0;
}
async function ee(e, t, r = i(), a) {
	const s = await async function(e, t) {
		const r = $(e, t);
		return {
			family: e,
			serializedPayload: r,
			contentHash: await c(r),
			presetCount: J(r).length
		};
	}(e, t), o = await r.presetFamilies.get(e), l = o ? await X(o) : void 0;
	if (Q(l, a), l && l.contentHash === s.contentHash && l.serializedPayload === s.serializedPayload) return {
		record: l,
		disposition: "deduplicated"
	};
	try {
		return await y([r.presetFamilies], async () => {
			const t = await r.presetFamilies.get(e), o = t ? await n.waitFor(X(t)) : void 0;
			if (Q(o, a), o?.contentHash === s.contentHash && o.serializedPayload === s.serializedPayload) throw new Y({
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
			return await r.presetFamilies.put(c), await h({
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
		if (p instanceof Y) return p.result;
		throw p;
	}
}
export { Z as loadWorkspacePresetFamily, ee as upsertWorkspacePresetFamily };
