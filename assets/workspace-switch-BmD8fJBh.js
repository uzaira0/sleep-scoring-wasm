import "./ggir-results-types-WB8axvb-.js";
import "./schema-FsEWQJ1D.js";
import "./nonwear-display-slots-DOcmk_Ix.js";
import "./local-data-source-8yCEU8lT.js";
import { X as s } from "./workspace-db-BBz3Z9g4.js";
import "./background-jobs-BxiHxoGU.js";
import "./project-revision-DPAtAeoO.js";
import { i, t as r } from "./store-D30UCLab.js";
import "./night-session-registry-OLt3qzPo.js";
import "./sleep-period-detection-BSyXOAjo.js";
import "./audit-log-Cel-URVI.js";
import "./ggir-results-import-DKQMOT94.js";
import "./local-nonwear-unified-D1KUV-qE.js";
import "./valid-day-criteria-DutlPsQb.js";
import "./pre-migration-backup-avsYV5p_.js";
import "./night-session-BLTEsP62.js";
import "./staged-diary-import-B1j-2F_c.js";
import "./scoped-scoring-settings-DKr0pQrs.js";
async function o(t, s, o = !0) {
	const e = (await import("./night-session-registry-OLt3qzPo.js").then((t) => t.o)).nightSessions, { setNightScopeChanging: a } = await import("./night-session-registry-OLt3qzPo.js").then((t) => t.o), n = async () => {
		await r();
		const t = i.getState(), s = o && (!t.isDirty || !t._flushSave || await t._flushSave());
		if (await e.settled(), !s || e.hasUnsavedWork()) throw i.getState().setScopeExitBlocked(!0), /* @__PURE__ */ new Error("A marker save failed. Retry or discard it before switching workspace.");
		i.getState().setScopeExitBlocked(!1);
	};
	await n(), s && (await s(), await n()), a(!0);
	try {
		return await t();
	} finally {
		a(!1);
	}
}
let e;
s();
export { o as runWorkspaceScopeChange, e as workspaceActivation };
