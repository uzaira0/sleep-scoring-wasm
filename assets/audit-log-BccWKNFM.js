import { s as e } from "./ggir-results-types-WB8axvb-.js";
import { _n as t, a as n, l as s } from "./schema-CyUnUnE_.js";
import { a as i, c as r, l as o } from "./legacy-invalid-night-BxvRkrkV.js";
import { a, c as d, o as l, q as c, r as u, s as h, t as f } from "./workspace-db-BQvvwDug.js";
import { i as y } from "./project-revision-DRqi4X7l.js";
import { n as p, r as g, t as m } from "./audit-events-Db1w7ukh.js";
import { n as w, t as b } from "./audit-hash-rfcCP1yx.js";
import { i as v, t as I } from "./wal-pCKJoAuY.js";
const S = /* @__PURE__ */ new Set([
	"auto_nonwear_applied",
	"auto_score_applied",
	"candidate_copied",
	"consensus_toggled",
	"marker_adjusted",
	"marker_deleted",
	"marker_moved",
	"marker_placed",
	"markers_cleared",
	"markers_saved",
	"no_nonwear_toggled",
	"invalid_night_toggled",
	"notes_changed",
	"redo",
	"sleep_period_merged",
	"sleep_period_split",
	"undo"
]);
function T(e) {
	return S.has(e);
}
const D = /\{[^{}]+\}/g;
function A(e, t, n) {
	if (null == t) return "";
	if ("object" == typeof t) throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
	return `${e}=${!0 === n?.allowReserved ? t : encodeURIComponent(t)}`;
}
function k(e, t, n) {
	if (!t || "object" != typeof t) return "";
	const s = [], i = {
		simple: ",",
		label: ".",
		matrix: ";"
	}[n.style] || "&";
	if ("deepObject" !== n.style && !1 === n.explode) {
		for (const e in t) s.push(e, !0 === n.allowReserved ? t[e] : encodeURIComponent(t[e]));
		const i = s.join(",");
		switch (n.style) {
			case "form": return `${e}=${i}`;
			case "label": return `.${i}`;
			case "matrix": return `;${e}=${i}`;
			default: return i;
		}
	}
	for (const o in t) {
		const i = "deepObject" === n.style ? `${e}[${o}]` : o;
		s.push(A(i, t[o], n));
	}
	const r = s.join(i);
	return "label" === n.style || "matrix" === n.style ? `${i}${r}` : r;
}
function R(e, t, n) {
	if (!Array.isArray(t)) return "";
	if (!1 === n.explode) {
		const s = {
			form: ",",
			spaceDelimited: "%20",
			pipeDelimited: "|"
		}[n.style] || ",", i = (!0 === n.allowReserved ? t : t.map((e) => encodeURIComponent(e))).join(s);
		switch (n.style) {
			case "simple": return i;
			case "label": return `.${i}`;
			case "matrix": return `;${e}=${i}`;
			default: return `${e}=${i}`;
		}
	}
	const s = {
		simple: ",",
		label: ".",
		matrix: ";"
	}[n.style] || "&", i = [];
	for (const r of t) "simple" === n.style || "label" === n.style ? i.push(!0 === n.allowReserved ? r : encodeURIComponent(r)) : i.push(A(e, r, n));
	return "label" === n.style || "matrix" === n.style ? `${s}${i.join(s)}` : i.join(s);
}
function E(e) {
	return function(t) {
		const n = [];
		if (t && "object" == typeof t) for (const s in t) {
			const i = t[s];
			if (null != i) if (Array.isArray(i)) {
				if (0 === i.length) continue;
				n.push(R(s, i, {
					style: "form",
					explode: !0,
					...e?.array,
					allowReserved: e?.allowReserved || !1
				}));
			} else "object" != typeof i ? n.push(A(s, i, e)) : n.push(k(s, i, {
				style: "deepObject",
				explode: !0,
				...e?.object,
				allowReserved: e?.allowReserved || !1
			}));
		}
		return n.join("&");
	};
}
function q(e, t) {
	let n = e;
	for (const s of e.match(D) ?? []) {
		let e = s.substring(1, s.length - 1), i = !1, r = "simple";
		if (e.endsWith("*") && (i = !0, e = e.substring(0, e.length - 1)), e.startsWith(".") ? (r = "label", e = e.substring(1)) : e.startsWith(";") && (r = "matrix", e = e.substring(1)), !t || void 0 === t[e] || null === t[e]) continue;
		const o = t[e];
		n = Array.isArray(o) ? n.replace(s, R(e, o, {
			style: r,
			explode: i
		})) : "object" != typeof o ? "matrix" !== r ? n.replace(s, "label" === r ? `.${encodeURIComponent(o)}` : encodeURIComponent(o)) : n.replace(s, `;${A(e, o)}`) : n.replace(s, k(e, o, {
			style: r,
			explode: i
		}));
	}
	return n;
}
function C(e, t) {
	return e instanceof FormData ? e : t && "application/x-www-form-urlencoded" === (t.get instanceof Function ? t.get("Content-Type") ?? t.get("content-type") : t["Content-Type"] ?? t["content-type"]) ? new URLSearchParams(e).toString() : JSON.stringify(e);
}
function _(...e) {
	const t = new Headers();
	for (const n of e) {
		if (!n || "object" != typeof n) continue;
		const e = n instanceof Headers ? n.entries() : Object.entries(n);
		for (const [n, s] of e) if (null === s) t.delete(n);
		else if (Array.isArray(s)) for (const e of s) t.append(n, e);
		else void 0 !== s && t.set(n, s);
	}
	return t;
}
function x(e) {
	return e.endsWith("/") ? e.substring(0, e.length - 1) : e;
}
var P = class extends TypeError {
	constructor() {
		super("Workspace is local-only — server API calls are disabled"), this.name = "LocalOnlyWorkspaceError";
	}
};
async function F(e) {
	if (!(e instanceof Response)) return e;
	if (!(e.headers.get("content-type") ?? "").startsWith("application/json")) return e;
	const t = i(await e.clone().text());
	if (null === t) return e;
	const n = new Headers(e.headers);
	return n.delete("content-length"), new Response(t, {
		status: e.status,
		statusText: e.statusText,
		headers: n
	});
}
let L = null, j = null;
async function $(e = {}) {
	const t = !0 === e.preserveRequestIdentity, n = a();
	if (function() {
		if (d().capabilities.tauri) return !1;
		const e = a();
		if (!e) return !1;
		const t = l.getState().getWorkspace(e);
		return void 0 === t || "" === t.serverUrl;
	}()) throw new P();
	const s = h.basePath, { sitePassword: i, username: r, selectedStudyId: o } = (await async function() {
		return L || (j || (j = import("./store-lJ6KVo7V.js").then((e) => e.r)), L = await j), L.useSleepScoringStore;
	}()).getState();
	if (n !== a()) throw new TypeError("Workspace changed while capturing the server transport");
	const c = { onRequest: ({ request: e }) => (i && !e.headers.has("X-Site-Password") && e.headers.set("X-Site-Password", i), t || e.headers.has("X-Username") || e.headers.set("X-Username", r || "anonymous"), t || e.headers.has("X-Study-Id") || null == o || e.headers.set("X-Study-Id", String(o)), e) }, u = function(e) {
		let { baseUrl: t = "", Request: n = globalThis.Request, fetch: s = globalThis.fetch, querySerializer: i, bodySerializer: r, pathSerializer: o, headers: a, requestInitExt: d, ...l } = { ...e };
		d = "object" == typeof process && Number.parseInt(process?.versions?.node?.substring(0, 2)) >= 18 && process.versions.undici ? d : void 0, t = x(t);
		const c = [];
		async function u(e, u) {
			const { baseUrl: h, fetch: f = s, Request: y = n, headers: p, params: g = {}, parseAs: m = "json", querySerializer: w, bodySerializer: b = r ?? C, pathSerializer: v, body: I, middleware: S = [], ...T } = u || {};
			let D = t;
			h && (D = x(h) ?? t);
			let A = "function" == typeof i ? i : E(i);
			w && (A = "function" == typeof w ? w : E({
				..."object" == typeof i ? i : {},
				...w
			}));
			const k = v || o || q, R = void 0 === I ? void 0 : b(I, _(a, p, g.header)), P = _(void 0 === R || R instanceof FormData ? {} : { "Content-Type": "application/json" }, a, p, g.header), F = [...c, ...S], L = {
				redirect: "follow",
				...l,
				...T,
				body: R,
				headers: P
			};
			let j, $, B, O = new y(function(e, t) {
				let n = `${t.baseUrl}${e}`;
				t.params?.path && (n = t.pathSerializer(n, t.params.path));
				let s = t.querySerializer(t.params.query ?? {});
				return s.startsWith("?") && (s = s.substring(1)), s && (n += `?${s}`), n;
			}(e, {
				baseUrl: D,
				params: g,
				querySerializer: A,
				pathSerializer: k
			}), L);
			for (const t in T) t in O || (O[t] = T[t]);
			if (F.length) {
				j = Math.random().toString(36).slice(2, 11), $ = Object.freeze({
					baseUrl: D,
					fetch: f,
					parseAs: m,
					querySerializer: A,
					bodySerializer: b,
					pathSerializer: k
				});
				for (const t of F) if (t && "object" == typeof t && "function" == typeof t.onRequest) {
					const n = await t.onRequest({
						request: O,
						schemaPath: e,
						params: g,
						options: $,
						id: j
					});
					if (n) {
						if (!(n instanceof y)) {
							if (n instanceof Response) {
								B = n;
								break;
							}
							throw new Error("onRequest: must return new Request() or Response() when modifying the request");
						}
						O = n;
					}
				}
			}
			if (!B) {
				try {
					B = await f(O, d);
				} catch (Q) {
					let t = Q;
					if (F.length) for (let n = F.length - 1; n >= 0; n--) {
						const s = F[n];
						if (s && "object" == typeof s && "function" == typeof s.onError) {
							const n = await s.onError({
								request: O,
								error: t,
								schemaPath: e,
								params: g,
								options: $,
								id: j
							});
							if (n) {
								if (n instanceof Response) {
									t = void 0, B = n;
									break;
								}
								if (n instanceof Error) {
									t = n;
									continue;
								}
								throw new Error("onError: must return new Response() or instance of Error");
							}
						}
					}
					if (t) throw t;
				}
				if (F.length) for (let t = F.length - 1; t >= 0; t--) {
					const n = F[t];
					if (n && "object" == typeof n && "function" == typeof n.onResponse) {
						const t = await n.onResponse({
							request: O,
							response: B,
							schemaPath: e,
							params: g,
							options: $,
							id: j
						});
						if (t) {
							if (!(t instanceof Response)) throw new Error("onResponse: must return new Response() when modifying the response");
							B = t;
						}
					}
				}
			}
			const W = B.headers.get("Content-Length");
			if (204 === B.status || "HEAD" === O.method || "0" === W && !B.headers.get("Transfer-Encoding")?.includes("chunked")) return B.ok ? {
				data: void 0,
				response: B
			} : {
				error: void 0,
				response: B
			};
			if (B.ok) {
				const e = async () => {
					if ("stream" === m) return B.body;
					if ("json" === m && !W) {
						const e = await B.text();
						return e ? JSON.parse(e) : void 0;
					}
					return await B[m]();
				};
				return {
					data: await e(),
					response: B
				};
			}
			let N = await B.text();
			try {
				N = JSON.parse(N);
			} catch {}
			return {
				error: N,
				response: B
			};
		}
		return {
			request: (e, t, n) => u(t, {
				...n,
				method: e.toUpperCase()
			}),
			GET: (e, t) => u(e, {
				...t,
				method: "GET"
			}),
			PUT: (e, t) => u(e, {
				...t,
				method: "PUT"
			}),
			POST: (e, t) => u(e, {
				...t,
				method: "POST"
			}),
			DELETE: (e, t) => u(e, {
				...t,
				method: "DELETE"
			}),
			OPTIONS: (e, t) => u(e, {
				...t,
				method: "OPTIONS"
			}),
			HEAD: (e, t) => u(e, {
				...t,
				method: "HEAD"
			}),
			PATCH: (e, t) => u(e, {
				...t,
				method: "PATCH"
			}),
			TRACE: (e, t) => u(e, {
				...t,
				method: "TRACE"
			}),
			use(...e) {
				for (const t of e) if (t) {
					if ("object" != typeof t || !("onRequest" in t || "onResponse" in t || "onError" in t)) throw new Error("Middleware must be an object with one of `onRequest()`, `onResponse() or `onError()`");
					c.push(t);
				}
			},
			eject(...e) {
				for (const t of e) {
					const e = c.indexOf(t);
					-1 !== e && c.splice(e, 1);
				}
			}
		};
	}({
		baseUrl: s,
		fetch: (e) => fetch(e).then(F)
	});
	return u.use(c), u;
}
const B = c((e, t) => ({
	serverAvailable: !1,
	serverChecked: !1,
	groupConfigured: !1,
	lastSuccessAt: 0,
	setServerAvailable: (t) => e({
		serverAvailable: t,
		serverChecked: !0
	}),
	setGroupConfigured: (t) => e({ groupConfigured: t }),
	resetProbeCache: () => e({ lastSuccessAt: 0 }),
	probeServer: async () => {
		const { lastSuccessAt: n } = t();
		Date.now() - n < 6e4 || e({
			serverAvailable: !1,
			serverChecked: !0
		});
	}
})), O = c()((e) => ({
	isOnline: "undefined" == typeof navigator || navigator.onLine,
	lastSyncAt: null,
	pendingCount: 0,
	syncStatus: "idle",
	syncError: null,
	auditQuarantineCount: 0,
	setOnline: (t) => e({ isOnline: t }),
	setSyncing: () => e({
		syncStatus: "syncing",
		syncError: null
	}),
	setPendingCount: (t) => e({ pendingCount: t }),
	setSyncComplete: (t) => e({
		syncStatus: "idle",
		lastSyncAt: (/* @__PURE__ */ new Date()).toISOString(),
		pendingCount: t
	}),
	setSyncError: (t) => e({
		syncStatus: "error",
		syncError: t
	}),
	recordAuditQuarantine: () => e((e) => ({ auditQuarantineCount: e.auditQuarantineCount + 1 }))
}));
function W() {
	const e = globalThis.__APP_VERSION__;
	return "string" == typeof e && e.length > 0 ? e : "dev";
}
var N = e({
	FLUSH_BATCH_SIZE: () => 500,
	WORKSPACE_SCOPE_FILE_ID: () => 0,
	appendAuditRecordTransactionally: () => H,
	auditLog: () => se,
	isTransientConflict: () => J,
	mapAcknowledgedLocalIds: () => te,
	reanchorForContract: () => G,
	sameAuditContent: () => Z,
	utcDateToday: () => M
});
function Q(e) {
	const t = `[AuditLog] ${e}`;
	console.error(t);
}
function U(e, t, n) {
	if (0 === t.length) return;
	const s = n ?? {}, i = t.filter((e) => !(e in s));
	i.length > 0 && Q(`"${e}" payload is missing declared key(s): ${i.join(", ")}`);
}
function M() {
	return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function z(e) {
	return {
		...e,
		appVersion: W()
	};
}
async function H(e, n, s) {
	if (!("walLog" in e) || void 0 === e.walLog) return void await y(e, [e.auditLog], async () => V(e, n), s);
	const i = t.currentTransaction;
	i?.db === e && "readwrite" === i.mode && i.storeNames.includes(e.auditLog.name) && i.storeNames.includes(e.walLog.name) ? await V(e, n) : await v([e.auditLog], async () => V(e, n), e, s);
}
const K = /* @__PURE__ */ new WeakMap();
async function V(e, n) {
	const s = (await e.auditLog.orderBy("id").last())?.eventHash ?? null, i = w(s, n), r = t.currentTransaction ? await t.waitFor(i) : await i, o = {
		...n,
		...null !== s ? { previousHash: s } : {},
		eventHash: r
	}, a = await e.auditLog.add(o);
	t.currentTransaction?.storeNames.includes("walLog") && await I({
		op: "audit_append",
		fileId: o.fileId,
		username: o.username,
		payload: {
			auditLogId: a,
			analysisDate: o.analysisDate,
			action: o.action,
			clientTimestamp: o.clientTimestamp,
			sessionId: o.sessionId,
			sequence: o.sequence,
			...void 0 !== o.studyId ? { studyId: o.studyId } : {},
			...void 0 !== o.payload ? { payload: o.payload } : {},
			eventHash: r,
			...null !== s ? { previousHash: s } : {}
		}
	});
}
const X = "Audit append conflicted; retry the unchanged batch";
function J(e, t) {
	if (409 !== e) return !1;
	const n = t?.detail;
	return "string" == typeof n && n.includes(X);
}
function G(e) {
	return "workspace" !== r[e.action]?.anchor || 0 === e.fileId ? e : {
		...e,
		fileId: 0,
		payload: {
			...e.payload,
			workspaceScoped: !0,
			openFileId: e.fileId,
			openAnalysisDate: e.analysisDate
		}
	};
}
function Z(e, t) {
	return e.action === t.action && e.fileId === t.fileId && e.analysisDate === t.analysisDate && e.username === t.username && e.studyId === t.studyId && e.clientTimestamp === t.clientTimestamp && b(e.payload ?? null) === b(t.payload ?? null);
}
function Y(e) {
	const t = void 0 === e.studyId ? "legacy-undefined" : null === e.studyId ? "default-null" : `study-${String(e.studyId)}`;
	return JSON.stringify([
		t,
		e.username,
		e.fileId,
		e.analysisDate
	]);
}
function ee(e) {
	const t = G(e);
	return JSON.stringify([Y(t), m(t.sessionId, t.sequence)]);
}
function te(e, t) {
	const n = /* @__PURE__ */ new Set();
	for (const s of t) for (const t of e.get(s) ?? []) n.add(t);
	return [...n];
}
function ne(e) {
	return !!T(e) && (Q(`"${e}" records a scorer-night edit; only the marker owner records it`), !0);
}
const se = new class {
	contextByDb = /* @__PURE__ */ new WeakMap();
	stateByBinding = /* @__PURE__ */ new WeakMap();
	settledMutationAudits = /* @__PURE__ */ new WeakMap();
	flushTimer = null;
	isFlushing = !1;
	flushRequested = !1;
	drainInFlight = null;
	constructor() {
		"undefined" != typeof window && (window.addEventListener("visibilitychange", () => {
			"hidden" === document.visibilityState && this.flushToServer();
		}), setTimeout(() => {
			this.flushToServer();
		}, 3e3), this.watchServerAvailability());
	}
	contextForDb(e) {
		let t = this.contextByDb.get(e);
		return t || (t = {
			fileId: null,
			analysisDate: null,
			username: null,
			studyId: void 0,
			sessionId: s(),
			sequence: 0
		}, this.contextByDb.set(e, t)), t;
	}
	resolveTarget(e) {
		let t = e;
		if (!t) try {
			t = f();
		} catch {
			return null;
		}
		return {
			db: t,
			context: this.contextForDb(t)
		};
	}
	isNoOpRevisit(e, t) {
		if (t.action === o.SESSION_END) return 0 === e.context.sequence;
		let n = K.get(e.db);
		n || (n = /* @__PURE__ */ new Map(), K.set(e.db, n));
		const s = JSON.stringify([t.fileId, t.analysisDate]);
		if (t.action !== o.SESSION_START) return n.delete(s), !1;
		const i = JSON.stringify([t.username, t.studyId ?? null]), r = b(t.payload ?? null), a = n.get(s);
		return a?.actor === i && a.payload === r || (n.set(s, {
			actor: i,
			payload: r
		}), !1);
	}
	enqueueBoundRecord(e, t) {
		this.isNoOpRevisit(e, t) || (this.writeQueue.push(t), this.dbAffinityByRecord.set(t, e), e.context.sequence++);
	}
	captureWorkspaceBinding(e, t, n) {
		const s = this.resolveTarget(e);
		if (!s) throw new Error("Cannot capture audit context without an open workspace database");
		const { context: i } = s, r = void 0 !== n && i.fileId === n.fileId && i.analysisDate === n.analysisDate && i.username === t.username && i.studyId === t.studyId, o = Object.freeze({});
		return this.stateByBinding.set(o, {
			db: s.db,
			actor: t,
			capturedFileId: i.fileId,
			capturedAnalysisDate: i.analysisDate,
			ambient: r ? i : null,
			ambientSessionId: r ? i.sessionId : null,
			own: null
		}), o;
	}
	targetForBinding(e) {
		const t = this.stateByBinding.get(e);
		return t ? t.ambient && t.ambient.sessionId === t.ambientSessionId ? {
			db: t.db,
			context: t.ambient
		} : (t.ambient = null, t.ambientSessionId = null, t.own ??= {
			fileId: t.capturedFileId,
			analysisDate: t.capturedAnalysisDate,
			username: t.actor.username,
			studyId: t.actor.studyId,
			sessionId: s(),
			sequence: 0
		}, {
			db: t.db,
			context: t.own
		}) : null;
	}
	setContext(e, t, n, i) {
		const r = this.resolveTarget();
		if (!r) return;
		const { context: o } = r, a = void 0 === n ? o.username : n, d = void 0 === i ? o.studyId : i;
		e === o.fileId && t === o.analysisDate && a === o.username && d === o.studyId || (o.sessionId = s(), o.sequence = 0), o.fileId = e, o.analysisDate = t, o.username = a, o.studyId = d, this.flushToServer();
	}
	currentSessionId() {
		return this.resolveTarget()?.context.sessionId ?? null;
	}
	newSession() {
		this.flushToServer();
		const e = this.resolveTarget();
		e && (e.context.sessionId = s(), e.context.sequence = 0);
	}
	record(e, t) {
		const n = r[e];
		n ? ne(e) || ("file" !== n.anchor ? (U(e, n.localPayloadKeys, t), "workspace" !== n.anchor ? this.log(e, t) : this.logWorkspaceEvent(e, t)) : Q(`"${e}" is anchored to an explicit file/date; use recordFileEvent()`)) : Q(`unknown audit action "${e}"; not in AUDIT_EVENT_CONTRACT`);
	}
	recordAppEvent(e, t) {
		this.record(e, t);
	}
	recordSessionBound(e, { fileId: t, analysisDate: n, action: s, payload: i }) {
		ne(s) || this.recordSessionAnchored(e, {
			fileId: t,
			analysisDate: n,
			action: s,
			...void 0 !== i ? { payload: i } : {}
		});
	}
	recordNightEdit(e, t) {
		if (e) return void this.recordSessionAnchored(e, t);
		const n = r[t.action];
		n ? (U(t.action, n.localPayloadKeys, t.payload), this.log(t.action, t.payload)) : Q(`unknown audit action "${t.action}"; not in AUDIT_EVENT_CONTRACT`);
	}
	appendNightEditsInTransaction(e) {
		const n = /* @__PURE__ */ new Map(), s = t.currentTransaction, i = () => {
			for (const [e, { from: t, to: s, sessionId: i }] of n) e.sessionId === i && e.sequence === s && (e.sequence = t);
		};
		s?.on("abort", i), s?.on("error", i);
		const o = e.map(({ binding: e, input: t }) => {
			const s = r[t.action];
			if (!s || "session" !== s.anchor) return Q(`"${t.action}" is not a session-anchored audit action`), null;
			U(t.action, s.localPayloadKeys, t.payload);
			const i = this.targetForBinding(e);
			if (!i) return Q("night edit received an invalid audit workspace binding"), null;
			const { context: o } = i, a = {
				fileId: t.fileId,
				analysisDate: t.analysisDate,
				username: o.username ?? "unknown",
				...void 0 !== o.studyId ? { studyId: o.studyId } : {},
				action: t.action,
				clientTimestamp: Date.now() / 1e3,
				sessionId: o.sessionId,
				sequence: o.sequence,
				payload: z(t.payload)
			};
			return this.isNoOpRevisit(i, a) ? null : (o.sequence += 1, n.set(o, {
				from: n.get(o)?.from ?? a.sequence,
				to: o.sequence,
				sessionId: o.sessionId
			}), {
				db: i.db,
				record: a
			});
		});
		return o.reduce((e, t) => t ? e.then(() => H(t.db, t.record)) : e, t.Promise.resolve()).then(() => o.map((e) => e ? m(e.record.sessionId, e.record.sequence) : null));
	}
	recordSessionAnchored(e, { fileId: t, analysisDate: n, action: s, payload: i }) {
		const o = r[s];
		o ? "session" === o.anchor ? (U(s, o.localPayloadKeys, i), this.logFileEvent({
			fileId: t,
			analysisDate: n,
			action: s,
			...void 0 !== i ? { payload: i } : {}
		}, e)) : Q(`"${s}" is anchored to "${o.anchor}"; use its matching audit entry point`) : Q(`unknown audit action "${s}"; not in AUDIT_EVENT_CONTRACT`);
	}
	recordWorkspaceDurably(e, t, n, s) {
		const i = this.resolveTarget(n);
		return i ? this.recordWorkspaceTargetDurably(i, e, t) : Promise.resolve(!1);
	}
	recordWorkspaceBoundDurably(e, t, n, s) {
		const i = this.targetForBinding(e);
		return i ? this.recordWorkspaceTargetDurably(i, t, n, e) : (Q("workspace event received an invalid audit workspace binding"), Promise.resolve(!1));
	}
	recordWorkspaceTargetDurably(e, t, n, s) {
		const i = r[t];
		return i ? "workspace" !== i.anchor ? (Q(`"${t}" is anchored to "${i.anchor}"; use record() or recordFileEvent()`), Promise.resolve(!1)) : (U(t, i.localPayloadKeys, n), this.persistBoundRecordDurably(e, this.workspaceEventRecord(e, t, n), s)) : (Q(`unknown audit action "${t}"; not in AUDIT_EVENT_CONTRACT`), Promise.resolve(!1));
	}
	recordFileEvent({ fileId: e, analysisDate: t, action: n, payload: s }, i) {
		const o = r[n];
		o ? "file" === o.anchor ? (U(n, o.localPayloadKeys, s), this.logFileEvent({
			fileId: e,
			analysisDate: t,
			action: n,
			...void 0 !== s ? { payload: s } : {}
		}, i)) : Q(`"${n}" is anchored to "${o.anchor}"; use record() so it lands where the contract says`) : Q(`unknown audit action "${n}"; not in AUDIT_EVENT_CONTRACT`);
	}
	recordFileEventDurably(e, t) {
		const { action: n, payload: s } = e, i = r[n];
		if (!i) return Q(`unknown audit action "${n}"; not in AUDIT_EVENT_CONTRACT`), Promise.resolve(!1);
		if ("file" !== i.anchor) return Q(`"${n}" is anchored to "${i.anchor}"; use record() so it lands where the contract says`), Promise.resolve(!1);
		U(n, i.localPayloadKeys, s);
		const o = t ? this.targetForBinding(t) : this.resolveTarget();
		return o ? this.persistBoundRecordDurably(o, this.fileEventRecord(o, e), t) : Promise.resolve(!1);
	}
	log(e, t) {
		const n = this.resolveTarget();
		if (!n) return;
		const { context: s } = n;
		null != s.fileId && null != s.analysisDate && (this.enqueueBoundRecord(n, {
			fileId: s.fileId,
			analysisDate: s.analysisDate,
			username: s.username ?? "unknown",
			...void 0 !== s.studyId ? { studyId: s.studyId } : {},
			action: e,
			clientTimestamp: Date.now() / 1e3,
			sessionId: s.sessionId,
			sequence: s.sequence,
			payload: z(t)
		}), this.drainQueue(n.db));
	}
	logWorkspaceEvent(e, t) {
		const n = this.resolveTarget();
		n && (this.enqueueWorkspaceEvent(n, e, t), this.drainQueue(n.db));
	}
	hasSettledMutationAudit(e) {
		const n = e ? this.settledMutationAudits.get(e) : void 0;
		let s = t.currentTransaction;
		for (; s?.parent;) s = s.parent;
		if (!e || !n || !s) return !1;
		if (null === n.transaction) {
			n.transaction = s;
			const t = () => {
				this.settledMutationAudits.get(e) === n && this.settledMutationAudits.delete(e);
			};
			s.on("complete", t), s.on("abort", t);
		}
		return n.transaction === s;
	}
	persistBoundRecordDurably(e, n, s) {
		return t.currentTransaction?.db === e.db && t.currentTransaction.storeNames.includes(e.db.auditLog.name) ? !this.hasSettledMutationAudit(s) && this.hasPendingWritesForDb(e.db) ? Promise.resolve(!1) : (e.context.sequence++, V(e.db, n).then(() => !0)) : (s && this.settledMutationAudits.delete(s), this.enqueueBoundRecord(e, n), new Promise((t) => {
			this.durabilityWaiters.set(n, t), this.drainQueue(e.db).catch(() => {
				this.resolveDurability(n, !1);
			});
		}));
	}
	enqueueWorkspaceEvent(e, t, n) {
		const s = this.workspaceEventRecord(e, t, n);
		return this.enqueueBoundRecord(e, s), s;
	}
	workspaceEventRecord(e, t, n) {
		const { context: s } = e, i = null != s.fileId && null != s.analysisDate;
		return {
			fileId: 0,
			analysisDate: M(),
			username: s.username ?? "unknown",
			...void 0 !== s.studyId ? { studyId: s.studyId } : {},
			action: t,
			clientTimestamp: Date.now() / 1e3,
			sessionId: s.sessionId,
			sequence: s.sequence,
			payload: z({
				...n,
				workspaceScoped: !0,
				...i ? {
					openFileId: s.fileId,
					openAnalysisDate: s.analysisDate
				} : {}
			})
		};
	}
	logFileEvent(e, t) {
		const n = t ? this.targetForBinding(t) : this.resolveTarget();
		if (!n) return t && Q("file event received an invalid audit workspace binding"), null;
		const s = this.fileEventRecord(n, e);
		return this.enqueueBoundRecord(n, s), this.drainQueue(n.db), s;
	}
	fileEventRecord(e, { fileId: t, analysisDate: n, action: s, payload: i }) {
		const { context: r } = e;
		return {
			fileId: t,
			analysisDate: n,
			username: r.username ?? "unknown",
			...void 0 !== r.studyId ? { studyId: r.studyId } : {},
			action: s,
			clientTimestamp: Date.now() / 1e3,
			sessionId: r.sessionId,
			sequence: r.sequence,
			payload: z(i)
		};
	}
	writeQueue = [];
	dbAffinityByRecord = /* @__PURE__ */ new WeakMap();
	durabilityWaiters = /* @__PURE__ */ new Map();
	retryTimer = null;
	retryCount = 0;
	resolveDurability(e, t) {
		const n = this.durabilityWaiters.get(e);
		n && (this.durabilityWaiters.delete(e), n(t));
	}
	async settleWrites(e) {
		for (; this.writeQueue.length > 0;) {
			const t = this.writeQueue.length;
			if (await this.drainQueue(e), this.writeQueue.length >= t) return;
		}
	}
	hasPendingWritesForDb(e) {
		return this.writeQueue.some((t) => {
			const n = this.dbAffinityByRecord.get(t);
			return n?.db === e || n?.db.name === e.name;
		});
	}
	async settleWritesForDb(e, n) {
		if (n && this.stateByBinding.get(n)?.db !== e) return !1;
		if (n && t.currentTransaction?.db === e) {
			if (this.hasSettledMutationAudit(n)) return !0;
			if (this.hasPendingWritesForDb(e)) return !1;
		} else if (await this.settleWrites(e), this.hasPendingWritesForDb(e)) return !1;
		return n && this.settledMutationAudits.set(n, { transaction: null }), !0;
	}
	async settleWritesForReload() {
		return await this.settleWrites(), 0 === this.writeQueue.length;
	}
	drainQueue(e) {
		for (const n of this.writeQueue) {
			const t = this.dbAffinityByRecord.get(n);
			e && t?.db.name === e.name && this.dbAffinityByRecord.set(n, {
				...t,
				db: e
			});
		}
		if (this.drainInFlight) return this.drainInFlight;
		const t = this.runDrain().finally(() => {
			this.drainInFlight = null, this.writeQueue.length > 0 && null == this.retryTimer && this.drainQueue();
		});
		return this.drainInFlight = t, t;
	}
	async runDrain() {
		for (; this.writeQueue.length > 0;) {
			const e = this.writeQueue[0];
			if (!e) break;
			const s = this.dbAffinityByRecord.get(e);
			if (!s) {
				this.retryCount++;
				break;
			}
			let i, r = s.db;
			try {
				if (r.isOpen && !r.isOpen()) {
					if (u(r.name)) throw new Error("Captured audit workspace was deleted.");
					if (!await t.exists(r.name)) throw new Error("Captured audit workspace no longer exists.");
					i = new n(r.name), await i.open(), r = i;
				}
				await H(r, e), this.writeQueue.shift(), this.dbAffinityByRecord.delete(e), this.resolveDurability(e, !0), this.retryCount = 0;
			} catch {
				this.resolveDurability(e, !1), this.retryCount++, console.warn("[AuditLog] IndexedDB write failed; retaining event for retry");
				break;
			} finally {
				i?.close();
			}
		}
		this.writeQueue.length > 0 && null == this.retryTimer && (this.retryTimer = setTimeout(() => {
			this.retryTimer = null, this.drainQueue();
		}, Math.min(1e3 * 2 ** Math.min(this.retryCount, 5), 3e4)));
		for (const e of this.writeQueue) this.resolveDurability(e, !1);
		0 === this.retryCount && this.scheduleFlush();
	}
	onlineWatchArmed = !1;
	watchServerAvailability() {
		if (this.onlineWatchArmed) return;
		const e = B;
		"function" == typeof e?.subscribe && (this.onlineWatchArmed = !0, e.subscribe((e, t) => {
			e.serverAvailable && !t.serverAvailable && this.flushToServer();
		}));
	}
	scheduleFlush() {
		null == this.flushTimer && (this.flushTimer = setTimeout(() => {
			this.flushTimer = null, this.flushToServer();
		}, 1e4));
	}
	async flushToServer() {
		if (this.isFlushing) return void (this.flushRequested = !0);
		this.watchServerAvailability();
		const { serverAvailable: e } = B.getState();
		if (e) {
			this.isFlushing = !0;
			try {
				let e;
				try {
					e = f();
				} catch {
					return;
				}
				const t = await $({ preserveRequestIdentity: !0 }), n = this.replicationStateFor(e);
				for (let s = 0; s < 20; s++) {
					const s = await e.auditLog.orderBy("id").limit(500).toArray();
					if (0 === s.length) return;
					const i = /* @__PURE__ */ new Map();
					for (const e of s) {
						if (!p(e.action) || this.isQuarantined(n, e)) continue;
						const t = G(e), s = Y(t);
						let r = i.get(s);
						r || (r = [], i.set(s, r)), r.push(t);
					}
					const r = /* @__PURE__ */ new Set();
					for (const [e, a] of i) {
						const s = a[0];
						if (!s) continue;
						const i = await this.sendGroup(t, n, {
							key: e,
							fileId: s.fileId,
							analysisDate: s.analysisDate,
							username: s.username,
							studyId: s.studyId,
							events: a
						});
						for (const e of i) r.add(e);
					}
					const o = [];
					for (const e of s) {
						if (null == e.id || !r.has(e.id)) break;
						o.push(e.id);
					}
					if (o.length > 0 && await y(e, [e.auditLog], async () => {
						await e.auditLog.bulkDelete(o);
					}), 0 === o.length) return;
					if (s.length < 500) return;
				}
			} catch {
				console.warn("[AuditLog] Flush failed; retaining unacknowledged events");
			} finally {
				this.isFlushing = !1;
				const e = this.flushRequested;
				this.flushRequested = !1, e && this.flushToServer();
			}
		}
	}
	replicationStateByDb = /* @__PURE__ */ new WeakMap();
	replicationStateFor(e) {
		let t = this.replicationStateByDb.get(e);
		return t || (t = {
			quarantinedEventKeys: /* @__PURE__ */ new Set(),
			conflictStrikes: /* @__PURE__ */ new Map()
		}, this.replicationStateByDb.set(e, t)), t;
	}
	isQuarantined(e, t) {
		return e.quarantinedEventKeys.has(ee(t));
	}
	async sendGroup(e, t, { key: n, ...s }) {
		const i = await this.sendBatch(e, s);
		if (i.transient) return i.acknowledgedLocalIds;
		if (!i.conflicted) return t.conflictStrikes.delete(n), i.acknowledgedLocalIds;
		const r = (t.conflictStrikes.get(n) ?? 0) + 1;
		if (t.conflictStrikes.set(n, r), r < 3) return i.acknowledgedLocalIds;
		t.conflictStrikes.delete(n);
		const o = [];
		for (const a of s.events) {
			let n = {
				acknowledgedLocalIds: [],
				conflicted: !1,
				transient: !1,
				status: 0
			};
			for (let t = 0; t < 3 && (n = await this.sendBatch(e, {
				...s,
				events: [a]
			}), n.transient); t++);
			n.transient || (n.conflicted ? (t.quarantinedEventKeys.add(ee(a)), O.getState().recordAuditQuarantine(), console.error(422 === n.status ? "[AuditLog] Server refused an audit event as a contract violation; retained locally and skipped in later batches" : "[AuditLog] Server refused an audit event as a conflicting identity; retained locally and skipped in later batches")) : o.push(...n.acknowledgedLocalIds));
		}
		return o;
	}
	async sendBatch(e, { fileId: t, analysisDate: n, username: s, studyId: i, events: r }) {
		if (0 === r.length) return {
			acknowledgedLocalIds: [],
			conflicted: !1,
			transient: !1,
			status: 0
		};
		try {
			const o = [], a = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
			for (const e of r) {
				if (!p(e.action)) {
					console.warn("[AuditLog] Retaining event with an unknown action locally");
					continue;
				}
				const t = Number.isFinite(e.clientTimestamp) && e.clientTimestamp > 0 ? e.clientTimestamp : Date.now() / 1e3;
				t !== e.clientTimestamp && console.warn("[AuditLog] Invalid audit timestamp replaced before replication");
				const n = m(e.sessionId, e.sequence), s = d.get(n);
				if (s) {
					if (!Z(s, e)) {
						console.error("[AuditLog] Two local audit rows share one identity with different content; retaining the divergent row");
						continue;
					}
					console.warn("[AuditLog] Collapsing a duplicated audit identity before replication"), null != e.id && a.get(n)?.push(e.id);
				} else d.set(n, e), a.set(n, null != e.id ? [e.id] : []), o.push(g(e, t));
			}
			if (0 === o.length) return {
				acknowledgedLocalIds: [],
				conflicted: !1,
				transient: !1,
				status: 0
			};
			const l = await e.POST("/api/v1/audit/log", {
				headers: {
					"X-Username": s || "anonymous",
					..."number" == typeof i ? { "X-Study-Id": String(i) } : {}
				},
				body: {
					file_id: t,
					analysis_date: n,
					events: o
				}
			});
			if (l.error) {
				const { status: e } = l.response;
				console.warn(`[AuditLog] Retaining unacknowledged batch (HTTP ${e})`);
				const t = J(e, l.error);
				return {
					acknowledgedLocalIds: [],
					conflicted: !t && (409 === e || 422 === e),
					transient: t,
					status: e
				};
			}
			return {
				acknowledgedLocalIds: te(a, l.data.acknowledged_event_ids ?? []),
				conflicted: !1,
				transient: !1,
				status: l.response.status
			};
		} catch (o) {
			return console.warn("[AuditLog] Server send failed; retaining unacknowledged batch"), {
				acknowledgedLocalIds: [],
				conflicted: !1,
				transient: !1,
				status: 0
			};
		}
	}
}();
export { T as a, $ as i, N as n, W as r, se as t };
