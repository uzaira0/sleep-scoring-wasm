import "./ggir-results-types-WB8axvb-.js";
import "./schema-ID2pCqkA.js";
import "./nonwear-display-slots-rmNXmSV4.js";
import "./local-data-source-BKMZDoi-.js";
import "./platform-ChVQGHgC.js";
import "./background-jobs-CSM1-LRl.js";
import { b as s } from "./workspace-db-BYjGbThz.js";
import "./project-revision-BN_9_Nz8.js";
import { i, t as r } from "./store-BhwtrOGM.js";
import "./night-session-registry-BnVOp6Zz.js";
import "./sleep-period-detection-CFhQCOa_.js";
import "./audit-log-BdvQutFF.js";
import "./ggir-results-import-VeHWWHWW.js";
import "./local-nonwear-unified-DcEwyNx4.js";
import "./valid-day-criteria-CKKZMsBy.js";
import "./pre-migration-backup-DLUPt10t.js";
import "./night-session-DkAKSKEz.js";
import "./staged-diary-import-CmFibuCN.js";
import "./scoped-scoring-settings-BGJr9iYz.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-BnVOp6Zz.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-BnVOp6Zz.js").then((t) => t.o), p = async () => {
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
