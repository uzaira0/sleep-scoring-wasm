import { In as t } from "./schema-BGRflpdS.js";
import "./workspace-db-ZwhOL3AY.js";
import { Qt as s, r as a } from "./store-D5LPiRds.js";
import "./night-session-registry-DhpX55ay.js";
import "./audit-log-BT4oxwxf.js";
import "./pre-migration-backup-DMzT7120.js";
var e = t({
	runWorkspaceScopeChange: () => r,
	workspaceActivation: () => {}
});
async function r(t, i, e = !0) {
	const r = (await import("./night-session-registry-DhpX55ay.js").then((t) => t.s)).nightSessions, { setNightScopeChanging: o } = await import("./night-session-registry-DhpX55ay.js").then((t) => t.s), n = async () => {
		await s();
		const t = a.getState(), i = e && (!t.isDirty || !t._flushSave || await t._flushSave());
		if (await r.settled(), !i || r.hasUnsavedWork()) throw a.getState().setScopeExitBlocked(!0), /* @__PURE__ */ new Error("A marker save failed. Retry or discard it before switching workspace.");
		a.getState().setScopeExitBlocked(!1);
	};
	await n(), i && (await i(), await n()), o(!0);
	try {
		return await t();
	} finally {
		o(!1);
	}
}
export { e as t };
