import "./ggir-results-types-WB8axvb-.js";
import "./schema-DUFD0nf7.js";
import "./nonwear-display-slots-BVbUnpcm.js";
import "./local-data-source-Db_0b_8P.js";
import { J as s } from "./workspace-db-BDUVrp73.js";
import "./background-jobs-DAtgbHkK.js";
import "./project-revision-D35w5rN0.js";
import { i, t as r } from "./store-Dq23ONXq.js";
import "./night-session-registry-CM37UQ33.js";
import "./sleep-period-detection-BTmTkghg.js";
import "./audit-log-xkwidW9j.js";
import "./ggir-results-import-CEyoehug.js";
import "./local-nonwear-unified-VrxGkQuD.js";
import "./valid-day-criteria-CIpW3fKK.js";
import "./pre-migration-backup-NbqYbqRX.js";
import "./local-export-shard-worker-BMCoiZW2.js";
import "./night-session-s9KnxNKF.js";
import "./staged-diary-import-CSp_sMrH.js";
import "./scoped-scoring-settings-BT_Lh0fw.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-CM37UQ33.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-CM37UQ33.js").then((t) => t.o), p = async () => {
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
