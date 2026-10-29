import { s as e } from "./ggir-results-types-WB8axvb-.js";
import "./workspace-db-CLgHcFRW.js";
import { i as r, n as i } from "./store-CUWcR6kX.js";
import { _ as t, h as s, n as o, r as n, y as a } from "./night-session-registry-2_CA4YhC.js";
import "./sleep-period-detection-B0F1Stob.js";
import { t as l } from "./audit-log-CtYCM6oq.js";
import "./valid-day-criteria-CoLuPGEQ.js";
import "./local-export-shard-worker-Dy_vmoBw.js";
function d(e, r, i, t) {
	return null === t ? null : {
		...t,
		binding: t?.binding ?? l.captureWorkspaceBinding(e, r, i)
	};
}
var u = e({
	flushCurrentNight: () => g,
	readyNightEditFile: () => c,
	writeHeadlessNight: () => p
});
function g() {
	return n(i);
}
function c(e) {
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
	if (await o(i, e.fileId, e), void 0 !== e.expected) return t({
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
export { c as n, d as r, u as t };
