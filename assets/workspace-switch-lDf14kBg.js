import "./rolldown-runtime-BAJaJb8v.js";
import "./schema-B_gLylrK.js";
import "./local-data-source-DwAWATk8.js";
import { q as i } from "./workspace-db-Df2TUNS4.js";
import "./background-jobs-OpyHc-MO.js";
import "./project-revision-Cu3Cq-_K.js";
import "./night-session-registry-CsStE3Cb.js";
import "./sleep-period-detection-DdbFqpqI.js";
import "./audit-log-BBuIaYr5.js";
import "./local-nonwear-unified-CQf8Na3k.js";
import "./valid-day-criteria-B5y_ccRL.js";
import { i as s, t as o } from "./store-DfF35Y-t.js";
import "./pre-migration-backup-DJhAZgQq.js";
import "./local-export-worker-YOMtrw9B.js";
import "./night-session-DpzlTbYZ.js";
import "./staged-diary-import-ZUIXWNVT.js";
import "./scoped-scoring-settings-CenNx-8B.js";
async function r(t, i, r = !0) {
	const e = (await import("./night-session-registry-CsStE3Cb.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-CsStE3Cb.js").then((t) => t.o), n = async () => {
		await o();
		const t = s.getState(), i = r && (!t.isDirty || !t._flushSave || await t._flushSave());
		if (await e.settled(), !i || e.hasUnsavedWork()) throw s.getState().setScopeExitBlocked(!0), /* @__PURE__ */ new Error("A marker save failed. Retry or discard it before switching workspace.");
		s.getState().setScopeExitBlocked(!1);
	};
	await n(), i && (await i(), await n()), a(!0);
	try {
		return await t();
	} finally {
		a(!1);
	}
}
let e;
i();
export { r as runWorkspaceScopeChange, e as workspaceActivation };
