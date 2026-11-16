import { Dn as e } from "./schema-D8rqa1Y6.js";
import { H as t, P as r } from "./store-StTfKmbj.js";
import { n, r as a } from "./preset-families-BdJvQTVw.js";
import { t as o } from "./audit-log-RFivnbbI.js";
import { r as i, t as s } from "./diagnostic-log-D1tZZeTx.js";
import { n as l } from "./physical-activity-mask-Bmz5hQtK.js";
const u = a(n.PHYSICAL_ACTIVITY_INCLUSION_RULES).storageKey, c = [
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
	o.recordAppEvent("system_migration", {
		before: t,
		after: r,
		subject: `physical_activity_mask_policy.useAlgorithmNonwear (${e})`,
		reason: "automated nonwear no longer affects metrics (policy 2026-09-22)"
	});
}
function d(e) {
	return "object" == typeof e && null !== e && !0 === e.useAlgorithmNonwear;
}
function w(e) {
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
		if (!d(t)) return e;
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
async function h(e, a, o) {
	if (null !== e && "" !== e) try {
		const e = await r(), i = e?.extraSettings ?? {};
		if (void 0 !== i.physical_activity_mask_policy_nonwear_reset) return;
		const { loadWorkspacePresetFamily: s, upsertWorkspacePresetFamily: l } = await import("./workspace-preset-families-BgsnaFCd.js"), c = n.PHYSICAL_ACTIVITY_INCLUSION_RULES, m = await s(c), p = w(m?.serializedPayload ?? null);
		m && p && (await l(c, p.payload, void 0, m.contentHash), g("workspace presets", p.before, p.after));
		let f = null;
		try {
			f = localStorage.getItem(u);
		} catch {}
		const h = w(f);
		if (h && (localStorage.setItem(u, h.payload), g("device presets", h.before, h.after)), d(a)) {
			const e = {
				...a,
				useAlgorithmNonwear: !1
			};
			o(e), g("persisted store", a, e);
		}
		const _ = i.physical_activity_mask_policy, N = d(_) ? {
			..._,
			useAlgorithmNonwear: !1
		} : null;
		await t({
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
		i("warn", "Resetting persisted automated-nonwear policy failed", s(l));
	}
}
export { f as n, h as resetPersistedAlgorithmNonwear, p as t };
