import { An as e } from "./schema-B_tCLPTi.js";
import "./workspace-db-C0mqPCjA.js";
import { i as r, n as i } from "./store-DM814ES4.js";
import { b as t, g as s, n as o, r as n, v as a } from "./night-session-registry-7UYyF_Uo.js";
import "./sleep-period-detection-DACRcT22.js";
import { t as l } from "./audit-log-GmDCUlwq.js";
import "./valid-day-criteria-BvWW5KT6.js";
import "./local-export-worker-Bu-eRJR3.js";
import "./workspace-switch-BFtIGTUd.js";
function d(e, r, i, t) {
	return null === t ? null : {
		...t,
		binding: t?.binding ?? l.captureWorkspaceBinding(e, r, i)
	};
}
var u = e({
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
	if (await o(i, e.fileId, e), void 0 !== e.expected) return a({
		...e,
		guardHashOnly: !0
	}, i, l);
	const u = await t({
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
			expected: e.expected ?? s(r),
			guardHashOnly: !0
		}
	}), l);
	return {
		record: u.record,
		changed: u.changed
	};
}
export { d as i, g as n, p as r, u as t };
