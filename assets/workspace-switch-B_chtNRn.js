import "./ggir-results-types-WB8axvb-.js";
import "./schema-CoLJBY5o.js";
import "./nonwear-display-slots-tzdNfcon.js";
import "./local-data-source-CH8av8Pa.js";
import { Z as s } from "./workspace-db-mwmkj659.js";
import "./background-jobs-BcCUQBCp.js";
import "./project-revision-CUvdbw1R.js";
import { i, t as r } from "./store-CMG-u5eb.js";
import "./night-session-registry-fDkTdQOp.js";
import "./sleep-period-detection-CKwWvPPT.js";
import "./audit-log-CbSY_580.js";
import "./ggir-results-import-fU32mldC.js";
import "./local-nonwear-unified-wCw73Ihu.js";
import "./valid-day-criteria-wd9cIZwC.js";
import "./pre-migration-backup-CuZ61ARN.js";
import "./local-export-worker-DoLQ11xG.js";
import "./night-session-Dv0Wk_N7.js";
import "./staged-diary-import-BPE5rlk-.js";
import "./scoped-scoring-settings-B_NlK-xz.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-fDkTdQOp.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-fDkTdQOp.js").then((t) => t.o), p = async () => {
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
