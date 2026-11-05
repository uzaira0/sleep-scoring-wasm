import "./ggir-results-types-WB8axvb-.js";
import "./schema-pjCtvTl3.js";
import "./nonwear-display-slots-CkRogAfe.js";
import "./local-data-source-JzDPSUga.js";
import { Y as s } from "./workspace-db-BGLMk_xQ.js";
import "./background-jobs-Bw-sr73X.js";
import "./project-revision-BybjU3q4.js";
import { i, t as r } from "./store-BKMHiWc9.js";
import "./night-session-registry-BxoMUVbe.js";
import "./sleep-period-detection-fRVpitfd.js";
import "./audit-log-i6jhSixT.js";
import "./ggir-results-import-Bo67_9KJ.js";
import "./local-nonwear-unified-BaLzJ0A4.js";
import "./valid-day-criteria-DA1LBKOr.js";
import "./pre-migration-backup-NWzJ3gHA.js";
import "./local-export-shard-worker-BMJO1xbL.js";
import "./night-session-CHZE6JC8.js";
import "./staged-diary-import-DTFFow-0.js";
import "./scoped-scoring-settings-CBfDLgPp.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-BxoMUVbe.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-BxoMUVbe.js").then((t) => t.o), p = async () => {
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
