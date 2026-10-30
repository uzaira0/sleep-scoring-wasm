import "./ggir-results-types-WB8axvb-.js";
import "./schema-DyCcUf1Q.js";
import "./nonwear-display-slots-c0aOr3GA.js";
import "./local-data-source-DKpdfs2M.js";
import { X as s } from "./workspace-db-n33IRPWq.js";
import "./background-jobs-Da3KO9WM.js";
import "./project-revision-C2Ve-wA5.js";
import { i, t as r } from "./store-BK1A5UuX.js";
import "./night-session-registry-MyK-rWdk.js";
import "./sleep-period-detection-CVMi2JUN.js";
import "./audit-log-D9xxL8e7.js";
import "./ggir-results-import-6SiAwX4R.js";
import "./local-nonwear-unified-CCqmUl_j.js";
import "./valid-day-criteria-BdLWNF3Q.js";
import "./pre-migration-backup-CnGJvIJA.js";
import "./local-export-worker-CvKoQS_f.js";
import "./night-session-CNnEEvLC.js";
import "./staged-diary-import-By6YKN33.js";
import "./scoped-scoring-settings-DxwV5Nxg.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-MyK-rWdk.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-MyK-rWdk.js").then((t) => t.o), p = async () => {
		await r();
		const t = i.getState(), s = o && (!t.isDirty || !t._flushSave || await t._flushSave());
		if (await e.settled(), !s || e.hasUnsavedWork()) throw i.getState().setScopeExitBlocked(!0), /* @__PURE__ */ new Error("A marker save failed. Retry or discard it before switching workspace.");
		i.getState().setScopeExitBlocked(!1);
	};
	await p(), s && (await s(), await p()), a(!0);
	try {
		return await t();
	} finally {
		a(!1);
	}
}
let e;
s();
export { o as runWorkspaceScopeChange, e as workspaceActivation };
