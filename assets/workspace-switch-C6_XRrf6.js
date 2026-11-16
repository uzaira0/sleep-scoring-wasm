import { Pn as t } from "./schema-B6UkEiVJ.js";
import "./workspace-db-DU4CzwX1.js";
import { Zt as s, r as a } from "./store-BrZppDwj.js";
import "./night-session-registry-DJqsXW29.js";
import "./audit-log-ltTKXn8E.js";
import "./pre-migration-backup-Cjn1Nea7.js";
var e = t({
	runWorkspaceScopeChange: () => r,
	workspaceActivation: () => {}
});
async function r(t, i, e = !0) {
	const r = (await import("./night-session-registry-DJqsXW29.js").then((t) => t.s)).nightSessions, { setNightScopeChanging: o } = await import("./night-session-registry-DJqsXW29.js").then((t) => t.s), n = async () => {
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
