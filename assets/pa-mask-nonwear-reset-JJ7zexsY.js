import { mn as e } from "./schema-GIDIbrNv.js";
import { Jt as t, N as r, V as n, qt as a } from "./store-M9Z2jo4l.js";
import { n as o, r as i } from "./preset-families-qzO7YsGM.js";
import { t as s } from "./audit-log-DUqmszre.js";
import { m as l } from "./local-export-shard-worker-BcyjCID9.js";
const u = i(o.PHYSICAL_ACTIVITY_INCLUSION_RULES).storageKey, c = [
	"excludeNonwear",
	"excludeMainSleep",
	"excludeNaps",
	"useManualNonwear",
	"useAlgorithmNonwear"
];
function m(t) {
	if ("object" != typeof t || null === t) return null;
	const r = t;
	if ("string" != typeof r.name || 0 === r.name.trim().length) return null;
	const n = function(t) {
		if ("object" != typeof t || null === t) return null;
		const r = t;
		if (c.some((e) => "boolean" != typeof r[e])) return null;
		const n = "number" == typeof r.minimumWakeWearMinutes ? e("wear_minutes_per_day", r.minimumWakeWearMinutes) ?? 0 : 0, a = "string" == typeof r.nonwearDetector && r.nonwearDetector.length > 0 ? r.nonwearDetector : l;
		return {
			excludeNonwear: r.excludeNonwear,
			excludeMainSleep: r.excludeMainSleep,
			excludeNaps: r.excludeNaps,
			useManualNonwear: r.useManualNonwear,
			useAlgorithmNonwear: r.useAlgorithmNonwear,
			minimumWakeWearMinutes: n,
			nonwearDetector: a
		};
	}(r.policy);
	return n ? {
		name: r.name.trim(),
		policy: n
	} : null;
}
function p(e = localStorage) {
	try {
		const t = e.getItem(u);
		if (!t) return [];
		const r = JSON.parse(t);
		return Array.isArray(r) ? r.map(m).filter((e) => null !== e) : [];
	} catch {
		return [];
	}
}
function f(e, t = localStorage) {
	t.setItem(u, function(e) {
		return JSON.stringify(e);
	}(e));
}
const y = "physical_activity_mask_policy_nonwear_reset";
function g(e, t, r) {
	s.recordAppEvent("system_migration", {
		before: t,
		after: r,
		subject: `physical_activity_mask_policy.useAlgorithmNonwear (${e})`,
		reason: "automated nonwear no longer affects metrics (policy 2026-09-22)"
	});
}
function w(e) {
	return "object" == typeof e && null !== e && !0 === e.useAlgorithmNonwear;
}
function d(e) {
	if (null === e) return null;
	let t;
	try {
		t = JSON.parse(e);
	} catch {
		return null;
	}
	if (!Array.isArray(t)) return null;
	const r = [], n = [], a = t.map((e) => {
		const t = e?.policy;
		if (!w(t)) return e;
		const a = {
			...e,
			policy: {
				...t,
				useAlgorithmNonwear: !1
			}
		};
		return r.push(e), n.push(a), a;
	});
	return 0 === r.length ? null : {
		payload: JSON.stringify(a),
		before: r,
		after: n
	};
}
async function h(e, i, s) {
	if (null !== e && "" !== e) try {
		const e = await r(), t = e?.extraSettings ?? {};
		if (void 0 !== t.physical_activity_mask_policy_nonwear_reset) return;
		const { loadWorkspacePresetFamily: a, upsertWorkspacePresetFamily: l } = await import("./workspace-preset-families-DS_K0gKW.js"), c = o.PHYSICAL_ACTIVITY_INCLUSION_RULES, m = await a(c), p = d(m?.serializedPayload ?? null);
		m && p && (await l(c, p.payload, void 0, m.contentHash), g("workspace presets", p.before, p.after));
		let f = null;
		try {
			f = localStorage.getItem(u);
		} catch {}
		const h = d(f);
		if (h && (localStorage.setItem(u, h.payload), g("device presets", h.before, h.after)), w(i)) {
			const e = {
				...i,
				useAlgorithmNonwear: !1
			};
			s(e), g("persisted store", i, e);
		}
		const _ = t.physical_activity_mask_policy, N = w(_) ? {
			..._,
			useAlgorithmNonwear: !1
		} : null;
		await n({
			sleepDetectionRule: e?.sleepDetectionRule ?? "",
			nightStartHour: e?.nightStartHour ?? "",
			nightEndHour: e?.nightEndHour ?? "",
			defaultAlgorithm: e?.defaultAlgorithm ?? "",
			extraSettings: {
				...N ? { physical_activity_mask_policy: N } : {},
				[y]: (/* @__PURE__ */ new Date()).toISOString()
			}
		}), N && g("study settings", _, N);
	} catch (l) {
		t("warn", "Resetting persisted automated-nonwear policy failed", a(l));
	}
}
export { f as n, h as resetPersistedAlgorithmNonwear, p as t };
