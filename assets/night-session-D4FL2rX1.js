import { Pn as e } from "./schema-D8rqa1Y6.js";
import "./workspace-db-tot7PUXb.js";
import { r, t as i } from "./store-StTfKmbj.js";
import { C as s, n as t, r as o, x as n, y as a } from "./night-session-registry-Blk6S0Kz.js";
import "./per-source-defaults-DHWdfoJI.js";
import { t as l } from "./audit-log-RFivnbbI.js";
import "./diagnostic-log-D1tZZeTx.js";
import "./local-export-shard-worker-Bn9FW-T0.js";
import "./workspace-switch-BgWTFkct.js";
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
	if (await t(i, e.fileId, e), void 0 !== e.expected) return n({
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
			expected: e.expected ?? a(r),
			guardHashOnly: !0
		}
	}), l);
	return {
		record: u.record,
		changed: u.changed
	};
}
export { d as i, g as n, p as r, u as t };
