import "./ggir-results-types-WB8axvb-.js";
import "./schema-CkFrPVov.js";
import "./nonwear-display-slots-CqZvqAe6.js";
import "./local-data-source-DSm0zTgQ.js";
import "./platform-C0_UL027.js";
import "./background-jobs-Dlf3w92a.js";
import { b as s } from "./workspace-db-CpdwgNuG.js";
import "./project-revision-BYi7R71K.js";
import { i, t as r } from "./store-B6gFi6ND.js";
import "./night-session-registry-DeIQ0TqL.js";
import "./sleep-period-detection-BqDC4F60.js";
import "./audit-log-Cir1ThCb.js";
import "./ggir-results-import-BN3vW2Rd.js";
import "./local-nonwear-unified-D9Y7dEmG.js";
import "./valid-day-criteria-Dy9x-0Xp.js";
import "./pre-migration-backup-Cl2wWGS4.js";
import "./night-session-BajrfiTO.js";
import "./staged-diary-import-BZeEmuLA.js";
import "./scoped-scoring-settings-CCf3VZiK.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-DeIQ0TqL.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-DeIQ0TqL.js").then((t) => t.o), p = async () => {
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
