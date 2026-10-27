import "./ggir-results-types-WB8axvb-.js";
import "./schema-B-QId9a7.js";
import "./nonwear-display-slots-IZ449hOd.js";
import "./local-data-source-B14q0zng.js";
import { Y as s } from "./workspace-db-CgXdciVp.js";
import "./background-jobs-Jdd-Cnpd.js";
import "./project-revision-DUNCoWcb.js";
import "./night-session-registry-C3aes2-o.js";
import "./sleep-period-detection-UdMA10-d.js";
import "./audit-log-Byf_Sdj9.js";
import "./ggir-results-import-DRhADawg.js";
import { i, t as r } from "./store-AoVV0llU.js";
import "./local-nonwear-unified-Cis30YCx.js";
import "./valid-day-criteria-jnGVLePm.js";
import "./pre-migration-backup-CIRsj1SM.js";
import "./night-session-DShln9H6.js";
import "./staged-diary-import-BBSRTi0U.js";
import "./scoped-scoring-settings-iDaWIxUN.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-C3aes2-o.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-C3aes2-o.js").then((t) => t.o), p = async () => {
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
