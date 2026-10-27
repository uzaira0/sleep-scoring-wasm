import { s as e } from "./ggir-results-types-WB8axvb-.js";
import "./workspace-db-CgXdciVp.js";
import { _ as r, h as i, n as t, r as s, y as n } from "./night-session-registry-C3aes2-o.js";
import "./sleep-period-detection-UdMA10-d.js";
import { t as o } from "./audit-log-Byf_Sdj9.js";
import { i as a, n as l } from "./store-AoVV0llU.js";
import "./valid-day-criteria-jnGVLePm.js";
import "./local-export-worker-DONWFas4.js";
function d(e, r, i, t) {
	return null === t ? null : {
		...t,
		binding: t?.binding ?? o.captureWorkspaceBinding(e, r, i)
	};
}
var u = e({
	flushCurrentNight: () => c,
	readyNightEditFile: () => g,
	writeHeadlessNight: () => p
});
function c() {
	return s(l);
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
async function p(e, s, o) {
	const l = d(s, {
		username: e.username,
		studyId: a.getState().selectedStudyId
	}, {
		fileId: e.fileId,
		analysisDate: e.date
	}, o);
	if (await t(s, e.fileId, e), void 0 !== e.expected) return r({
		...e,
		guardHashOnly: !0
	}, s, l);
	const u = await n({
		fileId: e.fileId,
		date: e.date,
		username: e.username,
		algorithm: e.algorithm ?? null,
		detectionRule: e.detectionRule ?? null,
		signal: e.signal
	}, s, (r) => Promise.resolve({
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
export { g as n, d as r, u as t };
