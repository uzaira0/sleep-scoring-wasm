import "./ggir-results-types-WB8axvb-.js";
import "./schema-C65z93SA.js";
import "./nonwear-display-slots-wPOZJu0l.js";
import "./local-data-source-S_aE_BN8.js";
import { X as s } from "./workspace-db-jv0UAB1p.js";
import "./background-jobs-D39eVHiq.js";
import "./project-revision-OUskpCPr.js";
import { i, t as r } from "./store-C-OzqH4e.js";
import "./night-session-registry-BA3Un0Qs.js";
import "./sleep-period-detection-CcyhNiXt.js";
import "./audit-log-MzRCtIMD.js";
import "./ggir-results-import-BRYq6kze.js";
import "./local-nonwear-unified-B2FhmEKw.js";
import "./valid-day-criteria-msEROKCh.js";
import "./pre-migration-backup-BoHlf5vo.js";
import "./night-session-BJTjsKbz.js";
import "./staged-diary-import-BkurPqbv.js";
import "./scoped-scoring-settings-DYxdKPMa.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-BA3Un0Qs.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-BA3Un0Qs.js").then((t) => t.o), n = async () => {
		await r();
		const t = i.getState(), s = o && (!t.isDirty || !t._flushSave || await t._flushSave());
		if (await e.settled(), !s || e.hasUnsavedWork()) throw i.getState().setScopeExitBlocked(!0), /* @__PURE__ */ new Error("A marker save failed. Retry or discard it before switching workspace.");
		i.getState().setScopeExitBlocked(!1);
	};
	await n(), s && (await s(), await n()), a(!0);
	try {
		return await t();
	} finally {
		a(!1);
	}
}
let e;
s();
export { o as runWorkspaceScopeChange, e as workspaceActivation };
