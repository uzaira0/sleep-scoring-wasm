import "./ggir-results-types-WB8axvb-.js";
import "./schema-CubsPrjz.js";
import "./nonwear-display-slots-Ci-dNMvx.js";
import "./local-data-source-_0c00IIq.js";
import "./platform-ClAsKoQQ.js";
import "./background-jobs-gFrAYxTf.js";
import { b as s } from "./workspace-db-BRMmWdCa.js";
import "./project-revision-BvAwTwFG.js";
import { i, t as r } from "./store-esIhChio.js";
import "./night-session-registry-CySK1p-U.js";
import "./sleep-period-detection-BiQXNMp7.js";
import "./audit-log-XaMzFaoe.js";
import "./ggir-results-import-Dv98cmyT.js";
import "./local-nonwear-unified-2O-d7P9f.js";
import "./valid-day-criteria-BgtgT6oq.js";
import "./pre-migration-backup-BntI_wet.js";
import "./night-session-DCkz7izl.js";
import "./staged-diary-import-BcOmByM6.js";
import "./scoped-scoring-settings-Dn8jReaO.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-CySK1p-U.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-CySK1p-U.js").then((t) => t.o), p = async () => {
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
