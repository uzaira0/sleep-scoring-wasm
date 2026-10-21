import { r as e } from "./rolldown-runtime-BAJaJb8v.js";
import "./workspace-db-_hfwr346.js";
import { f as r, m as i, n as s, r as t, u as n } from "./night-session-registry-DP-Bbo7G.js";
import "./valid-day-criteria-CJ_kenUs.js";
import { t as a } from "./audit-log-FaRB8178.js";
import { i as o, n as l } from "./store-AFoCWKDL.js";
function d(e, r, i, s) {
	return null === s ? null : {
		...s,
		binding: s?.binding ?? a.captureWorkspaceBinding(e, r, i)
	};
}
var u = e({
	flushCurrentNight: () => c,
	readyNightEditFile: () => p,
	writeHeadlessNight: () => f
});
function c() {
	return t(l);
}
function p(e) {
	return "epochLengthSeconds" in e ? {
		sourceType: e.sourceType ?? null,
		sourceProfileId: e.sourceProfileId ?? null,
		resolvedCapabilities: e.resolvedCapabilities
	} : {
		sourceType: e.source_type ?? null,
		sourceProfileId: e.source_profile_id ?? null,
		resolvedCapabilities: void 0
	};
}
async function f(e, t, a) {
	const l = d(t, {
		username: e.username,
		studyId: o.getState().selectedStudyId
	}, {
		fileId: e.fileId,
		analysisDate: e.date
	}, a);
	if (await s(t, e.fileId, e), void 0 !== e.expected) return r({
		...e,
		guardHashOnly: !0
	}, t, l);
	const u = await i({
		fileId: e.fileId,
		date: e.date,
		username: e.username,
		algorithm: e.algorithm ?? null,
		detectionRule: e.detectionRule ?? null,
		signal: e.signal
	}, t, (r) => Promise.resolve({
		kind: "save",
		input: {
			...e,
			expected: e.expected ?? n(r),
			guardHashOnly: !0
		}
	}), l);
	return {
		record: u.record,
		changed: u.changed
	};
}
export { p as n, d as r, u as t };
