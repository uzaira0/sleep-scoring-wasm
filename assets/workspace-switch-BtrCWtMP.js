import "./ggir-results-types-WB8axvb-.js";
import "./schema-DheLOO14.js";
import "./nonwear-display-slots-z4V3Hcdi.js";
import "./local-data-source-es5kz0Q_.js";
import { X as s } from "./workspace-db-BkgAmWWL.js";
import "./background-jobs-CUpMApti.js";
import "./project-revision-COtFK2fV.js";
import { i, t as r } from "./store-Bt3VuaP8.js";
import "./night-session-registry-BrPkZE6_.js";
import "./sleep-period-detection-Coxwvy5J.js";
import "./audit-log-d8MqNIVH.js";
import "./ggir-results-import-9XDzNLvs.js";
import "./local-nonwear-unified-Cf66fDIM.js";
import "./valid-day-criteria-DvY-H45U.js";
import "./pre-migration-backup-C7zEWT7a.js";
import "./local-export-worker-kg6tHWIy.js";
import "./night-session-CvB0m302.js";
import "./staged-diary-import-BnhHvMax.js";
import "./scoped-scoring-settings-DTxWboT2.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-BrPkZE6_.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-BrPkZE6_.js").then((t) => t.o), p = async () => {
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
