import { l as e, n } from "./legacy-invalid-night-BxvRkrkV.js";
const t = new Set(Object.values(e));
function s(e) {
	return t.has(n(e));
}
function a(e, n) {
	return `${e}:${n}`;
}
function i(e, n) {
	return {
		id: a(e.sessionId, e.sequence),
		source: `/files/${String(e.fileId)}/${e.analysisDate}`,
		specversion: "1.0",
		type: e.action,
		time: (/* @__PURE__ */ new Date(1e3 * n)).toISOString(),
		subject: `file/${String(e.fileId)}/date/${e.analysisDate}`,
		datacontenttype: "application/json",
		data: {
			extra: e.payload ?? null,
			session_id: e.sessionId,
			sequence: e.sequence
		}
	};
}
export { s as n, i as r, a as t };
