import { Nn as t } from "./schema-Bbr1Zg5F.js";
import "./workspace-db-BEYycimi.js";
import { Qt as a, r as s } from "./store-JiWMTGuM.js";
import "./audit-log-DX_8V0K_.js";
import "./pre-migration-backup-D_wPKvI3.js";
var e = t({
	runWorkspaceScopeChange: () => i,
	workspaceActivation: () => {}
});
async function i(t, e, i = !0) {
	const r = (await import("./night-session-registry-hkFY8FDC.js").then((t) => t.s)).nightSessions, { setNightScopeChanging: o } = await import("./night-session-registry-hkFY8FDC.js").then((t) => t.s), n = async () => {
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
