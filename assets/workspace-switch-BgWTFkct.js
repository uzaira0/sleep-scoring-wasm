import { Pn as t } from "./schema-D8rqa1Y6.js";
import "./workspace-db-tot7PUXb.js";
import { Zt as s, r as a } from "./store-StTfKmbj.js";
import "./night-session-registry-Blk6S0Kz.js";
import "./audit-log-RFivnbbI.js";
import "./pre-migration-backup-BRtuCEA7.js";
var e = t({
	runWorkspaceScopeChange: () => r,
	workspaceActivation: () => {}
});
async function r(t, i, e = !0) {
	const r = (await import("./night-session-registry-Blk6S0Kz.js").then((t) => t.s)).nightSessions, { setNightScopeChanging: o } = await import("./night-session-registry-Blk6S0Kz.js").then((t) => t.s), n = async () => {
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
