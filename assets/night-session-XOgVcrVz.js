import { On as e } from "./schema-B0CR2EpS.js";
import "./workspace-db-CwhwLMaR.js";
import { i as r, n as i } from "./store-DvfXJTpe.js";
import { _ as s, h as t, n as o, r as n, y as a } from "./night-session-registry-pVArsQh2.js";
import "./sleep-period-detection-BnH8xZoy.js";
import { t as l } from "./audit-log-mBb24FKg.js";
import "./valid-day-criteria-CIJnTk0q.js";
import "./local-export-shard-worker-CRWHMs-Y.js";
import "./workspace-switch-BlK9bDy9.js";
function d(e, r, i, s) {
	return null === s ? null : {
		...s,
		binding: s?.binding ?? l.captureWorkspaceBinding(e, r, i)
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
