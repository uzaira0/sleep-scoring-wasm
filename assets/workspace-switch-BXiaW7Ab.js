import "./ggir-results-types-WB8axvb-.js";
import "./schema-Byv3l-Tl.js";
import "./nonwear-display-slots-D5Vg3ZFd.js";
import "./local-data-source-BJ3hvH2r.js";
import { X as s } from "./workspace-db-B9IeMXIg.js";
import "./background-jobs-INIWm9vc.js";
import "./project-revision-VDDK_EOV.js";
import { i, t as r } from "./store-J-gecDpt.js";
import "./night-session-registry-CEWiJ5wJ.js";
import "./sleep-period-detection-D-xMuYCV.js";
import "./audit-log-DSoQhaLo.js";
import "./ggir-results-import-z8s-2tEy.js";
import "./local-nonwear-unified-CZUzrOiO.js";
import "./valid-day-criteria-BulbQG60.js";
import "./pre-migration-backup-Ds0PcYMu.js";
import "./local-export-worker-DWPteBFG.js";
import "./night-session-DtRAXjOR.js";
import "./staged-diary-import-kGVMq6Z9.js";
import "./scoped-scoring-settings-B__CWKxQ.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-CEWiJ5wJ.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-CEWiJ5wJ.js").then((t) => t.o), p = async () => {
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
