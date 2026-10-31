import "./ggir-results-types-WB8axvb-.js";
import "./schema-Di6HdtCY.js";
import "./nonwear-display-slots-Bm2aNuay.js";
import "./local-data-source-BpfF24jY.js";
import { J as s } from "./workspace-db-BWcAJTHt.js";
import "./background-jobs-DYemjepL.js";
import "./project-revision-D1z4HmI3.js";
import { i, t as r } from "./store-Cuxnukd3.js";
import "./night-session-registry-BO75Ax_z.js";
import "./sleep-period-detection-BjAuEbxx.js";
import "./audit-log-Bb0igUl6.js";
import "./ggir-results-import-BaNUCpoA.js";
import "./local-nonwear-unified-DgsgpwUf.js";
import "./valid-day-criteria-Dh91gEJy.js";
import "./pre-migration-backup-D5SJLN1f.js";
import "./local-export-shard-worker-kHDgawEH.js";
import "./night-session-CFxolSHw.js";
import "./staged-diary-import-c4HCnKF3.js";
import "./scoped-scoring-settings-y4Nq1oDA.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-BO75Ax_z.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-BO75Ax_z.js").then((t) => t.o), p = async () => {
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
