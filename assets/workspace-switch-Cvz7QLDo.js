import "./ggir-results-types-WB8axvb-.js";
import "./schema-COnJFltd.js";
import "./nonwear-display-slots-CPvzOnpT.js";
import "./local-data-source-DmIddFSi.js";
import { J as s } from "./workspace-db-B3utkwB9.js";
import "./background-jobs-C4pP7O9D.js";
import "./project-revision-B2d5eNqQ.js";
import { i, t as r } from "./store-BNAycYdF.js";
import "./night-session-registry-D-MVOKld.js";
import "./sleep-period-detection-ByuZ_r3j.js";
import "./audit-log-B6OObLBg.js";
import "./ggir-results-import-BbXAt99k.js";
import "./local-nonwear-unified-DGd9KJwk.js";
import "./valid-day-criteria-DCtyfXOJ.js";
import "./pre-migration-backup-DL65obDR.js";
import "./local-export-shard-worker-CghZMH8m.js";
import "./night-session-Db39UK8Q.js";
import "./staged-diary-import-C6vUIF9H.js";
import "./scoped-scoring-settings-CXl55Kio.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-D-MVOKld.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-D-MVOKld.js").then((t) => t.o), p = async () => {
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
