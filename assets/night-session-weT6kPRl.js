import { r as e } from "./rolldown-runtime-BAJaJb8v.js";
import "./workspace-db-DmdvN4sJ.js";
import { _ as r, h as i, n as s, r as t, y as a } from "./night-session-registry-CznfYRTW.js";
import { t as n } from "./audit-log-CZQCoM3U.js";
import "./valid-day-criteria-BvCKhd-p.js";
import { i as o, n as l } from "./store-DoL1akY8.js";
import "./local-export-worker-Da4k1lUL.js";
function d(e, r, i, s) {
	return null === s ? null : {
		...s,
		binding: s?.binding ?? n.captureWorkspaceBinding(e, r, i)
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
async function f(e, t, n) {
	const l = d(t, {
		username: e.username,
		studyId: o.getState().selectedStudyId
	}, {
		fileId: e.fileId,
		analysisDate: e.date
	}, n);
	if (await s(t, e.fileId, e), void 0 !== e.expected) return r({
		...e,
		guardHashOnly: !0
	}, t, l);
	const u = await a({
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
			expected: e.expected ?? i(r),
			guardHashOnly: !0
		}
	}), l);
	return {
		record: u.record,
		changed: u.changed
	};
}
export { p as n, d as r, u as t };
