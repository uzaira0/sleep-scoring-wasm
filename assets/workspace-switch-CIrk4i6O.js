import { Nn as t } from "./schema-a6j21oPg.js";
import "./workspace-db-7YlMflhU.js";
import { Qt as a, r as s } from "./store-xCc3zaaE.js";
import "./audit-log-2ugVLTRR.js";
import "./pre-migration-backup-B_R639Fe.js";
var e = t({
	runWorkspaceScopeChange: () => i,
	workspaceActivation: () => {}
});
async function i(t, e, i = !0) {
	const r = (await import("./night-session-registry-Cws275Dl.js").then((t) => t.s)).nightSessions, { setNightScopeChanging: o } = await import("./night-session-registry-Cws275Dl.js").then((t) => t.s), n = async () => {
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
