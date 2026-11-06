import { An as t } from "./schema-B_tCLPTi.js";
import "./workspace-db-C0mqPCjA.js";
import { i as a, t as e } from "./store-DM814ES4.js";
import "./audit-log-GmDCUlwq.js";
import "./pre-migration-backup-BEyVcOdk.js";
var i = t({
	runWorkspaceScopeChange: () => s,
	workspaceActivation: () => {}
});
async function s(t, i, s = !0) {
	const o = (await import("./night-session-registry-7UYyF_Uo.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: r } = await import("./night-session-registry-7UYyF_Uo.js").then((t) => t.o), n = async () => {
		await e();
		const t = a.getState(), i = s && (!t.isDirty || !t._flushSave || await t._flushSave());
		if (await o.settled(), !i || o.hasUnsavedWork()) throw a.getState().setScopeExitBlocked(!0), /* @__PURE__ */ new Error("A marker save failed. Retry or discard it before switching workspace.");
		a.getState().setScopeExitBlocked(!1);
	};
	await n(), i && (await i(), await n()), r(!0);
	try {
		return await t();
	} finally {
		r(!1);
	}
}
export { i as t };
