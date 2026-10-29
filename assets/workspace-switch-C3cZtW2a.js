import "./ggir-results-types-WB8axvb-.js";
import "./schema-CyUnUnE_.js";
import "./nonwear-display-slots-DOhK7PaE.js";
import "./local-data-source-Tt2pzSDA.js";
import { J as s } from "./workspace-db-BQvvwDug.js";
import "./background-jobs-h7korJeC.js";
import "./project-revision-DRqi4X7l.js";
import { i, t as r } from "./store-lJ6KVo7V.js";
import "./night-session-registry-xcC-CBc7.js";
import "./sleep-period-detection-DebTRw-F.js";
import "./audit-log-BccWKNFM.js";
import "./ggir-results-import-BSGSZyQ_.js";
import "./local-nonwear-unified-CLvdjPVW.js";
import "./valid-day-criteria-QbspLa0B.js";
import "./pre-migration-backup-ByCSmloV.js";
import "./night-session-Cx5cFxP6.js";
import "./staged-diary-import-DaPIFzPw.js";
import "./scoped-scoring-settings-DA9YHp2f.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-xcC-CBc7.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-xcC-CBc7.js").then((t) => t.o), p = async () => {
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
