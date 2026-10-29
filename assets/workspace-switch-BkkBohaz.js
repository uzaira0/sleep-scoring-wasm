import "./ggir-results-types-WB8axvb-.js";
import "./schema-C7gdqs5I.js";
import "./nonwear-display-slots-DRp3LJ_4.js";
import "./local-data-source-Dl-4X8M7.js";
import { J as s } from "./workspace-db-D4drjWJA.js";
import "./background-jobs-BiNXQC0L.js";
import "./project-revision-8y4L-zl0.js";
import { i, t as r } from "./store-AQT19I40.js";
import "./night-session-registry-CCtsxq6H.js";
import "./sleep-period-detection-Ce0A08lW.js";
import "./audit-log-DGy3L3Yu.js";
import "./ggir-results-import-CX4-QGIZ.js";
import "./local-nonwear-unified-9Oz9fE3C.js";
import "./valid-day-criteria-FF3XKMGe.js";
import "./pre-migration-backup-DPWzPacI.js";
import "./night-session-BIDBYE1h.js";
import "./staged-diary-import-D8IqMS4p.js";
import "./scoped-scoring-settings-CrMg54Rp.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-CCtsxq6H.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-CCtsxq6H.js").then((t) => t.o), p = async () => {
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
