import { a as e } from "./content-hash-B-at0sOp.js";
function n(e) {
	return void 0 === e ? "null" : null === e || "object" != typeof e ? JSON.stringify(e) : Array.isArray(e) ? `[${e.map(n).join(",")}]` : `{${Object.entries(e).filter(([, e]) => void 0 !== e).sort(([e], [n]) => e < n ? -1 : e > n ? 1 : 0).map(([e, t]) => `${JSON.stringify(e)}:${n(t)}`).join(",")}}`;
}
async function t(t, s) {
	const r = void 0 === s.studyId ? {} : { study_id: s.studyId };
	return e(n({
		previous_hash: t ?? "",
		file_id: s.fileId,
		analysis_date: s.analysisDate,
		username: s.username,
		...r,
		action: s.action,
		client_timestamp: s.clientTimestamp,
		session_id: s.sessionId,
		sequence: s.sequence,
		payload: s.payload ?? null
	}));
}
async function s(e) {
	const n = e.filter((e) => null != e.eventHash), s = function(e) {
		const n = /* @__PURE__ */ new Map();
		for (const [t, s] of e.entries()) {
			if ("audit_chain_reanchored" !== s.action) continue;
			const e = s.payload;
			if (void 0 === e) continue;
			const r = e.restoreId;
			if ("string" != typeof r || n.has(r)) continue;
			const i = e.firstRestoredHash;
			n.set(r, {
				index: t,
				firstRestoredHash: "string" == typeof i ? i : null
			});
		}
		return n;
	}(n);
	let r, i, o = null, d = 0;
	for (const [a, c] of n.entries()) {
		const e = c.restoredFromBackup, n = void 0 !== e && e !== r;
		if (void 0 !== e && n && a > 0) {
			const n = s.get(e);
			if (!(void 0 !== n && n.index < a) || null !== n.firstRestoredHash && n.firstRestoredHash !== c.eventHash) return {
				verified: !1,
				rows_checked: a,
				broken_at: c.id ?? null,
				reanchored_segments: d
			};
		}
		n && d++, void 0 === e ? i = void 0 : n && (i = e);
		const l = 0 === a || n, u = l ? c.previousHash ?? null : o;
		if (!l && c.previousHash !== (o ?? void 0)) return {
			verified: !1,
			rows_checked: a,
			broken_at: c.id ?? null,
			reanchored_segments: d
		};
		if (await t(u, void 0 !== e && e === i && void 0 !== c.restoredSourceFileId && c.restoredSourceFileId !== c.fileId ? {
			...c,
			fileId: c.restoredSourceFileId
		} : c) !== c.eventHash) return {
			verified: !1,
			rows_checked: a,
			broken_at: c.id ?? null,
			reanchored_segments: d
		};
		o = c.eventHash ?? null, r = c.restoredFromBackup;
	}
	return {
		verified: !0,
		rows_checked: n.length,
		broken_at: null,
		reanchored_segments: d
	};
}
export { t as n, s as r, n as t };
