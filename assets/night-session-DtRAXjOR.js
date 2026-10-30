import { s as e } from "./ggir-results-types-WB8axvb-.js";
import "./workspace-db-B9IeMXIg.js";
import { i as r, n as i } from "./store-J-gecDpt.js";
import { _ as t, h as s, n, r as o, y as a } from "./night-session-registry-CEWiJ5wJ.js";
import "./sleep-period-detection-D-xMuYCV.js";
import { t as l } from "./audit-log-DSoQhaLo.js";
import "./valid-day-criteria-BulbQG60.js";
import "./local-export-worker-DWPteBFG.js";
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
	return o(i);
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
async function p(e, i, o) {
	const l = d(i, {
		username: e.username,
		studyId: r.getState().selectedStudyId
	}, {
		fileId: e.fileId,
		analysisDate: e.date
	}, o);
	if (await n(i, e.fileId, e), void 0 !== e.expected) return t({
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
			expected: e.expected ?? s(r),
			guardHashOnly: !0
		}
	}), l);
	return {
		record: u.record,
		changed: u.changed
	};
}
export { g as n, d as r, u as t };
