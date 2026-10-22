import "./rolldown-runtime-BAJaJb8v.js";
import "./schema-B_evdEdj.js";
import { G as i } from "./workspace-db-nrwH3Dt2.js";
import "./background-jobs-C736XP4d.js";
import "./project-revision-DBLYmsAG.js";
import "./night-session-registry-i9d63fMu.js";
import "./sleep-period-detection-al43tTI-.js";
import "./audit-log-DNmoXXGB.js";
import "./local-nonwear-unified-gTRuG4YC.js";
import "./valid-day-criteria-BAc9E-xi.js";
import { i as s, t as o } from "./store-LeEv858g.js";
import "./pre-migration-backup-BRoyrJiQ.js";
import "./local-data-source-CTe7it3z.js";
import "./local-export-worker-Ddxw2_rB.js";
import "./night-session-B55DIpjy.js";
import "./staged-diary-import-BZpljmXo.js";
import "./scoped-scoring-settings-Vp8eSAm0.js";
async function r(t, i, r = !0) {
	const e = (await import("./night-session-registry-i9d63fMu.js").then((t) => t.a)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-i9d63fMu.js").then((t) => t.a), n = async () => {
		await o();
		const t = s.getState(), i = r && (!t.isDirty || !t._flushSave || await t._flushSave());
		if (await e.settled(), !i || e.hasUnsavedWork()) throw s.getState().setScopeExitBlocked(!0), /* @__PURE__ */ new Error("A marker save failed. Retry or discard it before switching workspace.");
		s.getState().setScopeExitBlocked(!1);
	};
	await n(), i && (await i(), await n()), a(!0);
	try {
		return await t();
	} finally {
		a(!1);
	}
}
let e;
i();
export { r as runWorkspaceScopeChange, e as workspaceActivation };
