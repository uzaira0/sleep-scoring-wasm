import "./ggir-results-types-WB8axvb-.js";
import "./schema-C_b4aWdD.js";
import "./nonwear-display-slots-DxUzNHze.js";
import "./local-data-source-W07GKCwi.js";
import { X as s } from "./workspace-db-38_2RzO4.js";
import "./background-jobs-LH2raQtb.js";
import "./project-revision-CSZNBWEz.js";
import { i, t as r } from "./store-m6cKhgSO.js";
import "./night-session-registry-CUf7nvnM.js";
import "./sleep-period-detection-DcUVSLmD.js";
import "./audit-log-C6i12RQL.js";
import "./ggir-results-import-iywxnGoY.js";
import "./local-nonwear-unified-CQQTMzTm.js";
import "./valid-day-criteria-CsOqBoav.js";
import "./pre-migration-backup-DGVHLw5h.js";
import "./local-export-worker-COqTXlkW.js";
import "./night-session-BmDocqyZ.js";
import "./staged-diary-import-s1HDaR8I.js";
import "./scoped-scoring-settings-S8Wdvl0k.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-CUf7nvnM.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-CUf7nvnM.js").then((t) => t.o), p = async () => {
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
