import "./rolldown-runtime-BAJaJb8v.js";
import "./schema-DrnhCpDE.js";
import { G as i } from "./workspace-db-_xyOoViw.js";
import "./background-jobs-CCnkyy5_.js";
import "./project-revision-gxarG-M0.js";
import "./night-session-registry-DVlyMa49.js";
import "./local-nonwear-unified-C_3RwQMZ.js";
import "./sleep-period-detection-C94kcnZY.js";
import "./valid-day-criteria-DG2ecfoJ.js";
import "./audit-log-UYWQ_PY2.js";
import { i as s, t as o } from "./store-B5F9spZt.js";
import "./pre-migration-backup-tjunbpJK.js";
import "./local-data-source-D_2otkg7.js";
import "./local-export-worker-ByS7IIS0.js";
import "./night-session-DPhVFFv7.js";
import "./staged-diary-import-BenqDoiu.js";
import "./scoped-scoring-settings-CdiIISKl.js";
async function r(t, i, r = !0) {
	const e = (await import("./night-session-registry-DVlyMa49.js").then((t) => t.a)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-DVlyMa49.js").then((t) => t.a), n = async () => {
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
