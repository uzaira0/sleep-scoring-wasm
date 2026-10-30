import "./ggir-results-types-WB8axvb-.js";
import "./schema-C3t7ipQ8.js";
import "./nonwear-display-slots-CPYO2a15.js";
import "./local-data-source-Fb7e0FjE.js";
import { X as s } from "./workspace-db-A92RcIC3.js";
import "./background-jobs-2-nKOjPv.js";
import "./project-revision-rwe5UyM-.js";
import { i, t as r } from "./store-nNbqO7VV.js";
import "./night-session-registry-BiJkmcHa.js";
import "./sleep-period-detection-Y_msDAGC.js";
import "./audit-log-Cfjb3mMT.js";
import "./ggir-results-import-CXQSRoCN.js";
import "./local-nonwear-unified-CtsXTr_I.js";
import "./valid-day-criteria-BLX-wAz8.js";
import "./pre-migration-backup-CdGcNo17.js";
import "./local-export-worker-6e0Pft7U.js";
import "./night-session-ZUFBE6En.js";
import "./staged-diary-import-BVh0Aoe4.js";
import "./scoped-scoring-settings-Cp2BaYPo.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-BiJkmcHa.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-BiJkmcHa.js").then((t) => t.o), p = async () => {
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
