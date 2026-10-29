import "./ggir-results-types-WB8axvb-.js";
import "./schema-GIDIbrNv.js";
import "./nonwear-display-slots-Dm0sk80Z.js";
import "./local-data-source-DcxTxWmN.js";
import { J as s } from "./workspace-db-JjnY804x.js";
import "./background-jobs-D_gayUyT.js";
import "./project-revision-DYY2xrRg.js";
import { i, t as r } from "./store-M9Z2jo4l.js";
import "./night-session-registry-D7LYfZK-.js";
import "./sleep-period-detection-D85RJDGi.js";
import "./audit-log-DUqmszre.js";
import "./ggir-results-import-v-t1jO8G.js";
import "./local-nonwear-unified-qcto_jHn.js";
import "./valid-day-criteria-Cm3qMybY.js";
import "./pre-migration-backup-COVERaGz.js";
import "./night-session-sURPeM0l.js";
import "./staged-diary-import-DpPGyBrF.js";
import "./scoped-scoring-settings-k4LvF74n.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-D7LYfZK-.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-D7LYfZK-.js").then((t) => t.o), p = async () => {
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
