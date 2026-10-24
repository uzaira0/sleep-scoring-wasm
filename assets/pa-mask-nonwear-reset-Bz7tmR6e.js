import { fn as e } from "./schema-B_gLylrK.js";
import { n as t, r } from "./preset-families-DsuzuiR2.js";
import { t as n } from "./audit-log-BBuIaYr5.js";
import { H as a, P as o, Xt as i, Yt as s } from "./store-DfF35Y-t.js";
import { m as l } from "./local-export-worker-YOMtrw9B.js";
const u = r(t.PHYSICAL_ACTIVITY_INCLUSION_RULES).storageKey, c = [
	"excludeNonwear",
	"excludeMainSleep",
	"excludeNaps",
	"useManualNonwear",
	"useAlgorithmNonwear"
];
function p(t) {
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
function m(e = localStorage) {
	try {
		const t = e.getItem(u);
		if (!t) return [];
		const r = JSON.parse(t);
		return Array.isArray(r) ? r.map(p).filter((e) => null !== e) : [];
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
	n.recordAppEvent("system_migration", {
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
async function h(e, r, n) {
	if (null !== e && "" !== e) try {
		const e = await o(), i = e?.extraSettings ?? {};
		if (void 0 !== i.physical_activity_mask_policy_nonwear_reset) return;
		const { loadWorkspacePresetFamily: s, upsertWorkspacePresetFamily: l } = await import("./workspace-preset-families-CXFlGYn5.js"), c = t.PHYSICAL_ACTIVITY_INCLUSION_RULES, p = await s(c), m = d(p?.serializedPayload ?? null);
		p && m && (await l(c, m.payload, void 0, p.contentHash), g("workspace presets", m.before, m.after));
		let f = null;
		try {
			f = localStorage.getItem(u);
		} catch {}
		const h = d(f);
		if (h && (localStorage.setItem(u, h.payload), g("device presets", h.before, h.after)), w(r)) {
			const e = {
				...r,
				useAlgorithmNonwear: !1
			};
			n(e), g("persisted store", r, e);
		}
		const _ = i.physical_activity_mask_policy, N = w(_) ? {
			..._,
			useAlgorithmNonwear: !1
		} : null;
		await a({
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
export { f as n, h as resetPersistedAlgorithmNonwear, m as t };
