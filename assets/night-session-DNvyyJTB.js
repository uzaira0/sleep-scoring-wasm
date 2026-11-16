import { In as e } from "./schema-MMK46mR-.js";
import "./workspace-db-YhWSrcvp.js";
import { r, t as i } from "./store-CGm5oa9P.js";
import { S as s, b as t, n as o, r as n, w as a } from "./night-session-registry-Ds5SlWLP.js";
import "./per-source-defaults-CxbMEjO8.js";
import { t as l } from "./audit-log-BT8eFzV0.js";
import "./diagnostic-log-DgP2mz8K.js";
import "./local-export-worker-_QiDE5PV.js";
import "./workspace-switch-8eKTWnSi.js";
function d(e, r, i, s) {
	return null === s ? null : {
		...s,
		binding: s?.binding ?? l.captureWorkspaceBinding(e, r, i)
	};
}
var u = e({
	GGIR_PROPOSAL_FAILED: () => GGIR_PROPOSAL_FAILED,
	flushCurrentNight: () => c,
	readyNightEditFile: () => g,
	writeHeadlessNight: () => p
});
function c() {
	return n(i);
}
function g(e) {
	return "epochLengthSeconds" in e ? {
		ggirNonwearDetector: e.ggirNonwearDetector,
		ggirBundleRevision: e.ggirBundleRevision,
		sourceType: e.sourceType ?? null,
		sourceProfileId: e.sourceProfileId ?? null,
		resolvedCapabilities: e.resolvedCapabilities
	} : {
		ggirNonwearDetector: e.ggir_nonwear_detector,
		ggirBundleRevision: e.ggir_bundle_revision,
		sourceType: e.source_type ?? null,
		sourceProfileId: e.source_profile_id ?? null,
		resolvedCapabilities: void 0
	};
}
async function p(e, i, n) {
	const l = d(i, {
		username: e.username,
		studyId: r.getState().selectedStudyId
	}, {
		fileId: e.fileId,
		analysisDate: e.date
	}, n);
	if (await o(i, e.fileId, e), void 0 !== e.expected) return s({
		...e,
		guardHashOnly: !0
	}, i, l);
	const u = await a({
		fileId: e.fileId,
		date: e.date,
		username: e.username,
		algorithm: e.algorithm ?? null,
		detectionRule: e.detectionRule ?? null,
		signal: e.signal
	}, i, (r) => Promise.resolve({
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
export { d as i, g as n, p as r, u as t };
