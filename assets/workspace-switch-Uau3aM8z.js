import "./rolldown-runtime-BAJaJb8v.js";
import "./schema-CYmiFjVW.js";
import "./local-data-source-B5-YQGE9.js";
import { q as i } from "./workspace-db-DmdvN4sJ.js";
import "./background-jobs-BkfQU4-S.js";
import "./project-revision-BnDCicq0.js";
import "./night-session-registry-CznfYRTW.js";
import "./sleep-period-detection-CMDjTrts.js";
import "./audit-log-CZQCoM3U.js";
import "./local-nonwear-unified-BeW-PETB.js";
import "./valid-day-criteria-BvCKhd-p.js";
import { i as s, t as o } from "./store-DoL1akY8.js";
import "./pre-migration-backup-DfCVGkf9.js";
import "./local-export-worker-Da4k1lUL.js";
import "./night-session-weT6kPRl.js";
import "./staged-diary-import-B8RztGBF.js";
import "./scoped-scoring-settings-CSKPTkZf.js";
async function r(t, i, r = !0) {
	const e = (await import("./night-session-registry-CznfYRTW.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-CznfYRTW.js").then((t) => t.o), n = async () => {
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
