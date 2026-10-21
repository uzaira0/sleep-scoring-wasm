import "./rolldown-runtime-BAJaJb8v.js";
import "./schema-DoqY2nOZ.js";
import { G as i } from "./workspace-db-_hfwr346.js";
import "./background-jobs-XxOY2bcl.js";
import "./project-revision-Cy3vWZA_.js";
import "./night-session-registry-DP-Bbo7G.js";
import "./local-nonwear-unified-ZTWAIXPe.js";
import "./sleep-period-detection-CFDERDxv.js";
import "./valid-day-criteria-CJ_kenUs.js";
import "./audit-log-FaRB8178.js";
import { i as s, t as o } from "./store-AFoCWKDL.js";
import "./pre-migration-backup-BGDrE6MM.js";
import "./local-data-source-Ct95d9NN.js";
import "./local-export-worker-Cyx5QtVv.js";
import "./night-session-6A_78Z65.js";
import "./staged-diary-import-mVGTD0fU.js";
import "./scoped-scoring-settings-CWYLcP_m.js";
async function r(t, i, r = !0) {
	const e = (await import("./night-session-registry-DP-Bbo7G.js").then((t) => t.a)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-DP-Bbo7G.js").then((t) => t.a), n = async () => {
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
