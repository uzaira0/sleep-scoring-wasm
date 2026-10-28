import "./ggir-results-types-WB8axvb-.js";
import "./schema-CIHT_OGt.js";
import "./nonwear-display-slots-DjXw27wb.js";
import "./local-data-source-Bl33hENL.js";
import { J as s } from "./workspace-db-G2NWfsPg.js";
import "./background-jobs-CJCGfvc5.js";
import "./project-revision-K1sT3sQz.js";
import "./night-session-registry-D17hYpra.js";
import "./sleep-period-detection-CJlqVROY.js";
import "./audit-log-BNGssgk1.js";
import "./ggir-results-import-C_mA_Nl6.js";
import { i, t as r } from "./store-BZGrg5Yx.js";
import "./local-nonwear-unified-CwKFebl-.js";
import "./valid-day-criteria-BGh25m81.js";
import "./pre-migration-backup-Bov9RbdD.js";
import "./night-session-by2FRxDW.js";
import "./staged-diary-import-BOFYcDLM.js";
import "./scoped-scoring-settings-BThosm5u.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-D17hYpra.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-D17hYpra.js").then((t) => t.o), p = async () => {
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
