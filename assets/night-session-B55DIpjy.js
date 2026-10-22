import { r as e } from "./rolldown-runtime-BAJaJb8v.js";
import "./workspace-db-nrwH3Dt2.js";
import { _ as r, h as i, n as s, p as t, r as n } from "./night-session-registry-i9d63fMu.js";
import { t as a } from "./audit-log-DNmoXXGB.js";
import "./valid-day-criteria-BAc9E-xi.js";
import { i as o, n as l } from "./store-LeEv858g.js";
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
	return n(l);
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
async function f(e, n, a) {
	const l = d(n, {
		username: e.username,
		studyId: o.getState().selectedStudyId
	}, {
		fileId: e.fileId,
		analysisDate: e.date
	}, a);
	if (await s(n, e.fileId, e), void 0 !== e.expected) return i({
		...e,
		guardHashOnly: !0
	}, n, l);
	const u = await r({
		fileId: e.fileId,
		date: e.date,
		username: e.username,
		algorithm: e.algorithm ?? null,
		detectionRule: e.detectionRule ?? null,
		signal: e.signal
	}, n, (r) => Promise.resolve({
		kind: "save",
		input: {
			...e,
			expected: e.expected ?? t(r),
			guardHashOnly: !0
		}
	}), l);
	return {
		record: u.record,
		changed: u.changed
	};
}
export { p as n, d as r, u as t };
