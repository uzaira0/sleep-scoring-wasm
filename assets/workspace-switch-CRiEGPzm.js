import "./ggir-results-types-WB8axvb-.js";
import "./schema-NJ-qrbiJ.js";
import "./nonwear-display-slots-Dx5Twl6J.js";
import "./local-data-source-e-HDeRn4.js";
import { J as s } from "./workspace-db-BefNlCmL.js";
import "./background-jobs-DAMKaPSO.js";
import "./project-revision-CkrXoT4x.js";
import { i, t as r } from "./store-CaBUYg5g.js";
import "./night-session-registry-DEO3ueg8.js";
import "./sleep-period-detection-Yq0Zqvjq.js";
import "./audit-log-BmVOlETw.js";
import "./ggir-results-import-DNxmN4Qs.js";
import "./local-nonwear-unified-Bh5E1UqU.js";
import "./valid-day-criteria-5AZyQSSy.js";
import "./pre-migration-backup-DXpqsR9U.js";
import "./night-session-CsjCcJZc.js";
import "./staged-diary-import-X8LRX0Yy.js";
import "./scoped-scoring-settings-BicTTvrW.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-DEO3ueg8.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-DEO3ueg8.js").then((t) => t.o), p = async () => {
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
