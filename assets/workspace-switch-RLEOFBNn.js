import "./ggir-results-types-WB8axvb-.js";
import "./schema-BfdZ6EnO.js";
import "./nonwear-display-slots-HoV7vCPk.js";
import "./local-data-source-C9DJSig8.js";
import { J as s } from "./workspace-db-CzQx_9vK.js";
import "./background-jobs-Csx1HbpJ.js";
import "./project-revision-DgqSiJLh.js";
import { i, t as r } from "./store-T0F20AbY.js";
import "./night-session-registry-C4XZbIvR.js";
import "./sleep-period-detection-sYqHWc2M.js";
import "./audit-log-DpIvew_r.js";
import "./ggir-results-import-ClrAWAPu.js";
import "./local-nonwear-unified-BiN4gPWi.js";
import "./valid-day-criteria-DtsMUBqT.js";
import "./pre-migration-backup-BvNyMTMP.js";
import "./local-export-shard-worker-coYervya.js";
import "./night-session-Cp-KE0hD.js";
import "./staged-diary-import-CBS4g80D.js";
import "./scoped-scoring-settings-C9jxGiv2.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-C4XZbIvR.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-C4XZbIvR.js").then((t) => t.o), p = async () => {
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
