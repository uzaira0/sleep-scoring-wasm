import "./ggir-results-types-WB8axvb-.js";
import "./schema-ovLsLXAy.js";
import "./nonwear-display-slots-BenfFTdq.js";
import "./local-data-source-BTHqwkBW.js";
import { J as s } from "./workspace-db-BfwRi1Vg.js";
import "./background-jobs-BBI4xtX0.js";
import "./project-revision-D-oYPTdh.js";
import "./night-session-registry-n5vYDk0x.js";
import "./sleep-period-detection-Bzg7AJGd.js";
import "./audit-log-B3QI5LTe.js";
import "./ggir-results-import-DnxF7db2.js";
import { i, t as r } from "./store-BhYkkFjA.js";
import "./local-nonwear-unified-lSxFGYMf.js";
import "./valid-day-criteria-jifg32XU.js";
import "./pre-migration-backup-C0ujJqbu.js";
import "./night-session-DzvbJw9d.js";
import "./staged-diary-import-D75G9yAW.js";
import "./scoped-scoring-settings-DQWJV68Y.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-n5vYDk0x.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-n5vYDk0x.js").then((t) => t.o), p = async () => {
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
