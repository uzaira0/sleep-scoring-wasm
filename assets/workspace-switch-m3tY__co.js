import "./ggir-results-types-WB8axvb-.js";
import "./schema-CR2XP9Ya.js";
import "./nonwear-display-slots-C0XCTzAe.js";
import "./local-data-source-DogApmo3.js";
import { Y as s } from "./workspace-db-ogWQfUX1.js";
import "./background-jobs-Cyjicr6r.js";
import "./project-revision-CoEk0UcK.js";
import "./night-session-registry-FKXtAIzN.js";
import "./sleep-period-detection-sU39gOLg.js";
import "./audit-log-B0nK6Rnj.js";
import "./ggir-results-import-3s_rB0lc.js";
import { i, t as r } from "./store-CYvH9l-K.js";
import "./local-nonwear-unified-CgpPYMrE.js";
import "./valid-day-criteria-CeSChein.js";
import "./pre-migration-backup-G8ONcpAG.js";
import "./night-session-DtFKU0HN.js";
import "./staged-diary-import-DUPZaYm6.js";
import "./scoped-scoring-settings-D0twdY7X.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-FKXtAIzN.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-FKXtAIzN.js").then((t) => t.o), p = async () => {
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
