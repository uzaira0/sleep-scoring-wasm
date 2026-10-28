import "./ggir-results-types-WB8axvb-.js";
import "./schema-CzkXBCvW.js";
import "./nonwear-display-slots-CDO4y9rC.js";
import "./local-data-source-CqceHa0V.js";
import { J as s } from "./workspace-db-D24dXM1b.js";
import "./background-jobs-B3rAyUIO.js";
import "./project-revision-BCgdYd4E.js";
import "./night-session-registry-rop61ZYr.js";
import "./sleep-period-detection-esEDuzXP.js";
import "./audit-log-78sudf5R.js";
import "./ggir-results-import-BT5bej6z.js";
import { i, t as r } from "./store-CmEZgWh2.js";
import "./local-nonwear-unified-CFsKiKWe.js";
import "./valid-day-criteria-ZiWHJlBd.js";
import "./pre-migration-backup-DwZaae5r.js";
import "./night-session-B_E-Quwk.js";
import "./staged-diary-import-CJM5dh7s.js";
import "./scoped-scoring-settings-rj8qsJBF.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-rop61ZYr.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-rop61ZYr.js").then((t) => t.o), p = async () => {
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
