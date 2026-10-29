import "./ggir-results-types-WB8axvb-.js";
import "./schema-R3Hec65Z.js";
import "./nonwear-display-slots-Cb5jHt-m.js";
import "./local-data-source-AP59IvIQ.js";
import "./platform-BjmjOECj.js";
import "./background-jobs-GcVsceFL.js";
import { b as s } from "./workspace-db-CLgHcFRW.js";
import "./project-revision-T37J4zgb.js";
import { i, t as r } from "./store-CUWcR6kX.js";
import "./night-session-registry-2_CA4YhC.js";
import "./sleep-period-detection-B0F1Stob.js";
import "./audit-log-CtYCM6oq.js";
import "./ggir-results-import-BhGAnQS-.js";
import "./local-nonwear-unified-CUbsWMKA.js";
import "./valid-day-criteria-CoLuPGEQ.js";
import "./pre-migration-backup-BtHaL69u.js";
import "./night-session-CHMUjaYx.js";
import "./staged-diary-import-Ba7cela_.js";
import "./scoped-scoring-settings-Cx2ZcObv.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-2_CA4YhC.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-2_CA4YhC.js").then((t) => t.o), p = async () => {
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
