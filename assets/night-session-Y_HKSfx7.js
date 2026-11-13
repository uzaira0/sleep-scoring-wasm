import { Nn as e } from "./schema-CW31RTk8.js";
import "./workspace-db-C2H_4Sk8.js";
import { r, t as i } from "./store-Bx-glhNc.js";
import { b as s, g as t, n as o, r as n, v as a } from "./night-session-registry-DBzmcC1j.js";
import "./per-source-defaults-DJ-KZgL-.js";
import { t as l } from "./audit-log-DvNHwdy6.js";
import "./local-export-shard-worker-BgYpqsVt.js";
import "./workspace-switch-BaGHB5RP.js";
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
	if (await o(i, e.fileId, e), void 0 !== e.expected) return a({
		...e,
		guardHashOnly: !0
	}, i, l);
	const u = await s({
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
