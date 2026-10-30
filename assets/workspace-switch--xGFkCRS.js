import "./ggir-results-types-WB8axvb-.js";
import "./schema-BTS6VNV3.js";
import "./nonwear-display-slots-ykH2wRfV.js";
import "./local-data-source-DqUml5dg.js";
import { J as s } from "./workspace-db-V6iUJ7Hd.js";
import "./background-jobs-B2Xj7eub.js";
import "./project-revision-lu00Wv1l.js";
import { i, t as r } from "./store-CkN9mDtd.js";
import "./night-session-registry-CNMy1y33.js";
import "./sleep-period-detection-DOS4gkET.js";
import "./audit-log-DRpvvwtd.js";
import "./ggir-results-import-D2SKlqk9.js";
import "./local-nonwear-unified-CGX7XXCe.js";
import "./valid-day-criteria-8udimNq0.js";
import "./pre-migration-backup-CaQwEuuT.js";
import "./local-export-shard-worker-DtaG2ve7.js";
import "./night-session-DKSmjA2w.js";
import "./staged-diary-import-CpHay3fC.js";
import "./scoped-scoring-settings-D9gY04A6.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-CNMy1y33.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-CNMy1y33.js").then((t) => t.o), p = async () => {
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
