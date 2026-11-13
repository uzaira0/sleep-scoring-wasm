import { Nn as t } from "./schema-CW31RTk8.js";
import "./workspace-db-C2H_4Sk8.js";
import { Zt as a, r as s } from "./store-Bx-glhNc.js";
import "./audit-log-DvNHwdy6.js";
import "./pre-migration-backup-Co1Ge4wj.js";
var e = t({
	runWorkspaceScopeChange: () => i,
	workspaceActivation: () => {}
});
async function i(t, e, i = !0) {
	const r = (await import("./night-session-registry-DBzmcC1j.js").then((t) => t.s)).nightSessions, { setNightScopeChanging: o } = await import("./night-session-registry-DBzmcC1j.js").then((t) => t.s), n = async () => {
		await a();
		const t = s.getState(), e = i && (!t.isDirty || !t._flushSave || await t._flushSave());
		if (await r.settled(), !e || r.hasUnsavedWork()) throw s.getState().setScopeExitBlocked(!0), /* @__PURE__ */ new Error("A marker save failed. Retry or discard it before switching workspace.");
		s.getState().setScopeExitBlocked(!1);
	};
	await n(), e && (await e(), await n()), o(!0);
	try {
		return await t();
	} finally {
		o(!1);
	}
}
export { e as t };
