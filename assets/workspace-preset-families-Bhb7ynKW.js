import { kt as t } from "./schema-Bbr1Zg5F.js";
import { t as e } from "./workspace-db-BEYycimi.js";
import { a as r } from "./content-hash-CZ-UAlQR.js";
import { n as a, r as n, t as s } from "./preset-families-C7znd6FJ.js";
import { t as i } from "./audit-hash-DNLMlimm.js";
import { i as o, t as c } from "./wal-CX7Pr7mo.js";
import { n as l, t as p } from "./physical-activity-cutpoint-presets-rv0tNO1z.js";
import { t as f } from "./scoring-recipe-CPXt67vH.js";
import { validateDiaryInstrumentMapping as d } from "./diary-instrument-mapping-DGYtAe1D.js";
import { r as u } from "./diary-source-adapter-C3nCTQZN.js";
import { i as m, n as y, t as h } from "./column-mapping-presets-lhOAlo9I.js";
import { n as w, t as g } from "./pa-mask-nonwear-reset-D-gNRiAX.js";
const A = n(a.SCORING_RECIPE).storageKey;
const P = "sleep-scoring:workspace-preset-legacy-migration:v1";
new class extends t {
	claims;
	constructor(t = "SleepScoringLegacyPresetMigrationClaims") {
		super(t), this.version(1).stores({ claims: "key" });
	}
	async tryAcquire() {
		try {
			return await this.claims.add({
				key: P,
				state: "consumed"
			}), !0;
		} catch (t) {
			if (t instanceof Error && "ConstraintError" === t.name) return !1;
			throw t;
		}
	}
	async releaseOwnedClaim() {
		await this.claims.delete(P);
	}
}();
var I = class extends Error {
	constructor() {
		super("Preset family payload is invalid."), this.name = "WorkspacePresetPayloadError";
	}
}, S = class extends Error {
	constructor() {
		super("Stored preset family record failed integrity validation."), this.name = "WorkspacePresetIntegrityError";
	}
}, j = class extends Error {
	constructor() {
		super("Preset family changed since it was loaded."), this.name = "WorkspacePresetConflictError";
	}
}, k = class extends Error {
	result;
	constructor(t) {
		super("Workspace preset mutation was unnecessary."), this.name = "NoWorkspacePresetMutation", this.result = t;
	}
};
function C(t) {
	return "string" == typeof t && s.includes(t);
}
function E(t) {
	if (!C(t)) throw new I();
}
function H(t) {
	try {
		const e = JSON.parse(t);
		if (!Array.isArray(e)) throw new I();
		return e;
	} catch (e) {
		if (e instanceof I) throw e;
		throw new I();
	}
}
const v = new Set(u.map((t) => t.key));
function D(t) {
	return null !== t && "object" == typeof t && !Array.isArray(t);
}
function N(t, e) {
	if (E(t), "string" != typeof e) throw new I();
	const r = H(e);
	t === a.DIARY_MAPPING && function(t) {
		for (const e of t) {
			if (!D(e) || !D(e.mapping)) throw new I();
			if ("epochLengthSeconds" in e || "devicePreset" in e) throw new I();
			for (const r of Object.keys(e.mapping)) if (!v.has(r) && !(r in h)) throw new I();
			const t = "instrumentVersionDefinitionId" in e;
			if (t !== "instrumentMapping" in e) throw new I();
			if (t) {
				if ("string" != typeof e.instrumentVersionDefinitionId || !D(e.instrumentMapping)) throw new I();
				const t = {};
				for (const [r, a] of Object.entries(e.instrumentMapping)) {
					if ("string" != typeof a) throw new I();
					t[r] = a;
				}
				if (d(e.instrumentVersionDefinitionId, t).length > 0) throw new I();
			}
		}
	}(r);
	const s = n(t).storageKey, o = function(t, e) {
		let r = e;
		return {
			storage: {
				getItem: (e) => e === t ? r : null,
				setItem(e, a) {
					if (e !== t) throw new I();
					r = a;
				}
			},
			read: () => r
		};
	}(s, e);
	try {
		let e;
		switch (t) {
			case a.CSV_MAPPING:
			case a.DIARY_MAPPING: {
				const t = y(s, o.storage);
				e = t.length, m(s, t, o.storage);
				break;
			}
			case a.PHYSICAL_ACTIVITY_CUTPOINTS: {
				const t = p(o.storage);
				e = t.length, l(t, o.storage);
				break;
			}
			case a.PHYSICAL_ACTIVITY_INCLUSION_RULES: {
				const t = g(o.storage);
				e = t.length, w(t, o.storage);
				break;
			}
			case a.SCORING_RECIPE: {
				const t = function(t = localStorage) {
					try {
						const e = t.getItem(A), r = e ? JSON.parse(e) : [];
						return Array.isArray(r) ? r.flatMap((t) => {
							const e = function(t) {
								return "object" == typeof t && null !== t && !Array.isArray(t);
							}(r = t) && "string" == typeof r.name && 0 !== r.name.trim().length ? {
								name: r.name,
								recipe: f(r.recipe)
							} : null;
							var r;
							return e ? [e] : [];
						}) : [];
					} catch {
						return [];
					}
				}(o.storage);
				e = t.length, function(t, e = localStorage) {
					const r = t.slice(0, 20);
					e.setItem(A, JSON.stringify(r.map((t) => ({
						name: t.name,
						recipe: f(t.recipe)
					})))), r.length, t.length, r.length;
				}(t, o.storage);
				break;
			}
		}
		if (e !== r.length) throw new I();
		return i(H(o.read()));
	} catch (c) {
		if (c instanceof I) throw c;
		throw new I();
	}
}
function O(t) {
	if ("string" != typeof t) return !1;
	try {
		return new Date(t).toISOString() === t;
	} catch {
		return !1;
	}
}
function _(t, e) {
	if (void 0 !== e && (null !== e && !/^[0-9a-f]{64}$/.test(e) || (t?.contentHash ?? null) !== e)) throw new j();
}
async function z(t) {
	try {
		if ("object" != typeof t || null === t || Array.isArray(t)) throw new S();
		const e = t, a = e.family, n = e.payloadVersion, s = e.serializedPayload, i = e.contentHash, o = e.createdAt, c = e.updatedAt;
		if (!C(a) || 1 !== n || "string" != typeof s || "string" != typeof i || !/^[0-9a-f]{64}$/.test(i) || !O(o) || !O(c) || Date.parse(c) < Date.parse(o)) throw new S();
		const l = N(a, s);
		if (l === s) {
			if (await r(l) !== i) throw new S();
			return {
				family: a,
				payloadVersion: n,
				serializedPayload: s,
				contentHash: i,
				createdAt: o,
				updatedAt: c
			};
		}
		if (await r(s) !== i) throw new S();
		return {
			family: a,
			payloadVersion: n,
			serializedPayload: l,
			contentHash: await r(l),
			createdAt: o,
			updatedAt: c
		};
	} catch {
		throw new S();
	}
}
async function b(t, r = e()) {
	E(t);
	const a = await r.presetFamilies.get(t);
	return a ? z(a) : void 0;
}
async function M(a, n, s = e(), i) {
	const l = await async function(t, e) {
		const a = N(t, e);
		return {
			family: t,
			serializedPayload: a,
			contentHash: await r(a),
			presetCount: H(a).length
		};
	}(a, n), p = await s.presetFamilies.get(a), f = p ? await z(p) : void 0;
	if (_(f, i), f && f.contentHash === l.contentHash && f.serializedPayload === l.serializedPayload) return {
		record: f,
		disposition: "deduplicated"
	};
	try {
		return await o([s.presetFamilies], async () => {
			const e = await s.presetFamilies.get(a), r = e ? await t.waitFor(z(e)) : void 0;
			if (_(r, i), r?.contentHash === l.contentHash && r.serializedPayload === l.serializedPayload) throw new k({
				record: r,
				disposition: "deduplicated"
			});
			const n = function(t) {
				const e = t ? Date.parse(t.updatedAt) + 1 : 0;
				return new Date(Math.max(Date.now(), e)).toISOString();
			}(r), o = {
				family: a,
				payloadVersion: 1,
				serializedPayload: l.serializedPayload,
				contentHash: l.contentHash,
				createdAt: r?.createdAt ?? n,
				updatedAt: n
			}, p = r ? "updated" : "inserted";
			return await s.presetFamilies.put(o), await c({
				op: "preset_family_put",
				payload: {
					disposition: p,
					record: o
				}
			}), {
				record: o,
				disposition: p
			};
		}, s);
	} catch (d) {
		if (d instanceof k) return d.result;
		throw d;
	}
}
export { b as loadWorkspacePresetFamily, M as upsertWorkspacePresetFamily };
