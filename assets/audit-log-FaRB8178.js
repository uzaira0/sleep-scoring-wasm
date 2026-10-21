import { r as e } from "./rolldown-runtime-BAJaJb8v.js";
import { a as t, l as n, mn as s } from "./schema-DoqY2nOZ.js";
import { a as r, c as i, l as o } from "./legacy-invalid-night-BxvRkrkV.js";
import { W as a, a as d, c as l, o as c, r as u, s as h, t as f } from "./workspace-db-_hfwr346.js";
import { i as y } from "./project-revision-Cy3vWZA_.js";
import { n as p, t as g } from "./audit-hash-rfcCP1yx.js";
import { n as m, r as w, t as b } from "./audit-events-Db1w7ukh.js";
import { i as v, t as I } from "./wal-DTtluAz6.js";
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
function k(e, t, n) {
	if (null == t) return "";
	if ("object" == typeof t) throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
	return `${e}=${!0 === n?.allowReserved ? t : encodeURIComponent(t)}`;
}
function A(e, t, n) {
	if (!t || "object" != typeof t) return "";
	const s = [], r = {
		simple: ",",
		label: ".",
		matrix: ";"
	}[n.style] || "&";
	if ("deepObject" !== n.style && !1 === n.explode) {
		for (const e in t) s.push(e, !0 === n.allowReserved ? t[e] : encodeURIComponent(t[e]));
		const r = s.join(",");
		switch (n.style) {
			case "form": return `${e}=${r}`;
			case "label": return `.${r}`;
			case "matrix": return `;${e}=${r}`;
			default: return r;
		}
	}
	for (const o in t) {
		const r = "deepObject" === n.style ? `${e}[${o}]` : o;
		s.push(k(r, t[o], n));
	}
	const i = s.join(r);
	return "label" === n.style || "matrix" === n.style ? `${r}${i}` : i;
}
function R(e, t, n) {
	if (!Array.isArray(t)) return "";
	if (!1 === n.explode) {
		const s = {
			form: ",",
			spaceDelimited: "%20",
			pipeDelimited: "|"
		}[n.style] || ",", r = (!0 === n.allowReserved ? t : t.map((e) => encodeURIComponent(e))).join(s);
		switch (n.style) {
			case "simple": return r;
			case "label": return `.${r}`;
			case "matrix": return `;${e}=${r}`;
			default: return `${e}=${r}`;
		}
	}
	const s = {
		simple: ",",
		label: ".",
		matrix: ";"
	}[n.style] || "&", r = [];
	for (const i of t) "simple" === n.style || "label" === n.style ? r.push(!0 === n.allowReserved ? i : encodeURIComponent(i)) : r.push(k(e, i, n));
	return "label" === n.style || "matrix" === n.style ? `${s}${r.join(s)}` : r.join(s);
}
function E(e) {
	return function(t) {
		const n = [];
		if (t && "object" == typeof t) for (const s in t) {
			const r = t[s];
			if (null != r) if (Array.isArray(r)) {
				if (0 === r.length) continue;
				n.push(R(s, r, {
					style: "form",
					explode: !0,
					...e?.array,
					allowReserved: e?.allowReserved || !1
				}));
			} else "object" != typeof r ? n.push(k(s, r, e)) : n.push(A(s, r, {
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
		let e = s.substring(1, s.length - 1), r = !1, i = "simple";
		if (e.endsWith("*") && (r = !0, e = e.substring(0, e.length - 1)), e.startsWith(".") ? (i = "label", e = e.substring(1)) : e.startsWith(";") && (i = "matrix", e = e.substring(1)), !t || void 0 === t[e] || null === t[e]) continue;
		const o = t[e];
		n = Array.isArray(o) ? n.replace(s, R(e, o, {
			style: i,
			explode: r
		})) : "object" != typeof o ? "matrix" !== i ? n.replace(s, "label" === i ? `.${encodeURIComponent(o)}` : encodeURIComponent(o)) : n.replace(s, `;${k(e, o)}`) : n.replace(s, A(e, o, {
			style: i,
			explode: r
		}));
	}
	return n;
}
function C(e, t) {
	return e instanceof FormData ? e : t && "application/x-www-form-urlencoded" === (t.get instanceof Function ? t.get("Content-Type") ?? t.get("content-type") : t["Content-Type"] ?? t["content-type"]) ? new URLSearchParams(e).toString() : JSON.stringify(e);
}
function x(...e) {
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
function _(e) {
	return e.endsWith("/") ? e.substring(0, e.length - 1) : e;
}
var L = class extends TypeError {
	constructor() {
		super("Workspace is local-only — server API calls are disabled"), this.name = "LocalOnlyWorkspaceError";
	}
};
async function P(e) {
	if (!(e instanceof Response)) return e;
	if (!(e.headers.get("content-type") ?? "").startsWith("application/json")) return e;
	const t = r(await e.clone().text());
	if (null === t) return e;
	const n = new Headers(e.headers);
	return n.delete("content-length"), new Response(t, {
		status: e.status,
		statusText: e.statusText,
		headers: n
	});
}
let F = null, $ = null;
async function j(e = {}) {
	const t = !0 === e.preserveRequestIdentity, n = d();
	if (function() {
		if (l().capabilities.tauri) return !1;
		const e = d();
		if (!e) return !1;
		const t = c.getState().getWorkspace(e);
		return void 0 === t || "" === t.serverUrl;
	}()) throw new L();
	const s = h.basePath, { sitePassword: r, username: i, selectedStudyId: o } = (await async function() {
		return F || ($ || ($ = import("./store-AFoCWKDL.js").then((e) => e.r)), F = await $), F.useSleepScoringStore;
	}()).getState();
	if (n !== d()) throw new TypeError("Workspace changed while capturing the server transport");
	const a = { onRequest: ({ request: e }) => (r && !e.headers.has("X-Site-Password") && e.headers.set("X-Site-Password", r), t || e.headers.has("X-Username") || e.headers.set("X-Username", i || "anonymous"), t || e.headers.has("X-Study-Id") || null == o || e.headers.set("X-Study-Id", String(o)), e) }, u = function(e) {
		let { baseUrl: t = "", Request: n = globalThis.Request, fetch: s = globalThis.fetch, querySerializer: r, bodySerializer: i, pathSerializer: o, headers: a, requestInitExt: d, ...l } = { ...e };
		d = "object" == typeof process && Number.parseInt(process?.versions?.node?.substring(0, 2)) >= 18 && process.versions.undici ? d : void 0, t = _(t);
		const c = [];
		async function u(e, u) {
			const { baseUrl: h, fetch: f = s, Request: y = n, headers: p, params: g = {}, parseAs: m = "json", querySerializer: w, bodySerializer: b = i ?? C, pathSerializer: v, body: I, middleware: S = [], ...T } = u || {};
			let D = t;
			h && (D = _(h) ?? t);
			let k = "function" == typeof r ? r : E(r);
			w && (k = "function" == typeof w ? w : E({
				..."object" == typeof r ? r : {},
				...w
			}));
			const A = v || o || q, R = void 0 === I ? void 0 : b(I, x(a, p, g.header)), L = x(void 0 === R || R instanceof FormData ? {} : { "Content-Type": "application/json" }, a, p, g.header), P = [...c, ...S], F = {
				redirect: "follow",
				...l,
				...T,
				body: R,
				headers: L
			};
			let $, j, O, B = new y(function(e, t) {
				let n = `${t.baseUrl}${e}`;
				t.params?.path && (n = t.pathSerializer(n, t.params.path));
				let s = t.querySerializer(t.params.query ?? {});
				return s.startsWith("?") && (s = s.substring(1)), s && (n += `?${s}`), n;
			}(e, {
				baseUrl: D,
				params: g,
				querySerializer: k,
				pathSerializer: A
			}), F);
			for (const t in T) t in B || (B[t] = T[t]);
			if (P.length) {
				$ = Math.random().toString(36).slice(2, 11), j = Object.freeze({
					baseUrl: D,
					fetch: f,
					parseAs: m,
					querySerializer: k,
					bodySerializer: b,
					pathSerializer: A
				});
				for (const t of P) if (t && "object" == typeof t && "function" == typeof t.onRequest) {
					const n = await t.onRequest({
						request: B,
						schemaPath: e,
						params: g,
						options: j,
						id: $
					});
					if (n) {
						if (!(n instanceof y)) {
							if (n instanceof Response) {
								O = n;
								break;
							}
							throw new Error("onRequest: must return new Request() or Response() when modifying the request");
						}
						B = n;
					}
				}
			}
			if (!O) {
				try {
					O = await f(B, d);
				} catch (Q) {
					let t = Q;
					if (P.length) for (let n = P.length - 1; n >= 0; n--) {
						const s = P[n];
						if (s && "object" == typeof s && "function" == typeof s.onError) {
							const n = await s.onError({
								request: B,
								error: t,
								schemaPath: e,
								params: g,
								options: j,
								id: $
							});
							if (n) {
								if (n instanceof Response) {
									t = void 0, O = n;
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
				if (P.length) for (let t = P.length - 1; t >= 0; t--) {
					const n = P[t];
					if (n && "object" == typeof n && "function" == typeof n.onResponse) {
						const t = await n.onResponse({
							request: B,
							response: O,
							schemaPath: e,
							params: g,
							options: j,
							id: $
						});
						if (t) {
							if (!(t instanceof Response)) throw new Error("onResponse: must return new Response() when modifying the response");
							O = t;
						}
					}
				}
			}
			const W = O.headers.get("Content-Length");
			if (204 === O.status || "HEAD" === B.method || "0" === W && !O.headers.get("Transfer-Encoding")?.includes("chunked")) return O.ok ? {
				data: void 0,
				response: O
			} : {
				error: void 0,
				response: O
			};
			if (O.ok) {
				const e = async () => {
					if ("stream" === m) return O.body;
					if ("json" === m && !W) {
						const e = await O.text();
						return e ? JSON.parse(e) : void 0;
					}
					return await O[m]();
				};
				return {
					data: await e(),
					response: O
				};
			}
			let N = await O.text();
			try {
				N = JSON.parse(N);
			} catch {}
			return {
				error: N,
				response: O
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
		fetch: (e) => fetch(e).then(P)
	});
	return u.use(a), u;
}
const O = a((e, t) => ({
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
})), B = a()((e) => ({
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
	appendAuditRecordTransactionally: () => M,
	auditLog: () => se,
	isTransientConflict: () => J,
	mapAcknowledgedLocalIds: () => te,
	reanchorForContract: () => G,
	sameAuditContent: () => Z,
	utcDateToday: () => z
});
function Q(e) {
	const t = `[AuditLog] ${e}`;
	console.error(t);
}
function U(e, t, n) {
	if (0 === t.length) return;
	const s = n ?? {}, r = t.filter((e) => !(e in s));
	r.length > 0 && Q(`"${e}" payload is missing declared key(s): ${r.join(", ")}`);
}
function z() {
	return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function H(e) {
	return {
		...e,
		appVersion: W()
	};
}
async function M(e, t, n) {
	if (!("walLog" in e) || void 0 === e.walLog) return void await y(e, [e.auditLog], async () => V(e, t), n);
	const r = s.currentTransaction;
	r?.db === e && "readwrite" === r.mode && r.storeNames.includes(e.auditLog.name) && r.storeNames.includes(e.walLog.name) ? await V(e, t) : await v([e.auditLog], async () => V(e, t), e, n);
}
const K = /* @__PURE__ */ new WeakMap();
async function V(e, t) {
	const n = (await e.auditLog.orderBy("id").last())?.eventHash ?? null, r = p(n, t), i = s.currentTransaction ? await s.waitFor(r) : await r, o = {
		...t,
		...null !== n ? { previousHash: n } : {},
		eventHash: i
	}, a = await e.auditLog.add(o);
	s.currentTransaction?.storeNames.includes("walLog") && await I({
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
			eventHash: i,
			...null !== n ? { previousHash: n } : {}
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
	return "workspace" !== i[e.action]?.anchor || 0 === e.fileId ? e : {
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
	return e.action === t.action && e.fileId === t.fileId && e.analysisDate === t.analysisDate && e.username === t.username && e.studyId === t.studyId && e.clientTimestamp === t.clientTimestamp && g(e.payload ?? null) === g(t.payload ?? null);
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
	return JSON.stringify([Y(t), b(t.sessionId, t.sequence)]);
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
			sessionId: n(),
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
		const r = JSON.stringify([t.username, t.studyId ?? null]), i = g(t.payload ?? null), a = n.get(s);
		return a?.actor === r && a.payload === i || (n.set(s, {
			actor: r,
			payload: i
		}), !1);
	}
	enqueueBoundRecord(e, t) {
		this.isNoOpRevisit(e, t) || (this.writeQueue.push(t), this.dbAffinityByRecord.set(t, e), e.context.sequence++);
	}
	captureWorkspaceBinding(e, t, n) {
		const s = this.resolveTarget(e);
		if (!s) throw new Error("Cannot capture audit context without an open workspace database");
		const { context: r } = s, i = void 0 !== n && r.fileId === n.fileId && r.analysisDate === n.analysisDate && r.username === t.username && r.studyId === t.studyId, o = Object.freeze({});
		return this.stateByBinding.set(o, {
			db: s.db,
			actor: t,
			capturedFileId: r.fileId,
			capturedAnalysisDate: r.analysisDate,
			ambient: i ? r : null,
			ambientSessionId: i ? r.sessionId : null,
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
			sessionId: n(),
			sequence: 0
		}, {
			db: t.db,
			context: t.own
		}) : null;
	}
	setContext(e, t, s, r) {
		const i = this.resolveTarget();
		if (!i) return;
		const { context: o } = i, a = void 0 === s ? o.username : s, d = void 0 === r ? o.studyId : r;
		e === o.fileId && t === o.analysisDate && a === o.username && d === o.studyId || (o.sessionId = n(), o.sequence = 0), o.fileId = e, o.analysisDate = t, o.username = a, o.studyId = d, this.flushToServer();
	}
	currentSessionId() {
		return this.resolveTarget()?.context.sessionId ?? null;
	}
	newSession() {
		this.flushToServer();
		const e = this.resolveTarget();
		e && (e.context.sessionId = n(), e.context.sequence = 0);
	}
	record(e, t) {
		const n = i[e];
		n ? ne(e) || ("file" !== n.anchor ? (U(e, n.localPayloadKeys, t), "workspace" !== n.anchor ? this.log(e, t) : this.logWorkspaceEvent(e, t)) : Q(`"${e}" is anchored to an explicit file/date; use recordFileEvent()`)) : Q(`unknown audit action "${e}"; not in AUDIT_EVENT_CONTRACT`);
	}
	recordAppEvent(e, t) {
		this.record(e, t);
	}
	recordSessionBound(e, { fileId: t, analysisDate: n, action: s, payload: r }) {
		ne(s) || this.recordSessionAnchored(e, {
			fileId: t,
			analysisDate: n,
			action: s,
			...void 0 !== r ? { payload: r } : {}
		});
	}
	recordNightEdit(e, t) {
		if (e) return void this.recordSessionAnchored(e, t);
		const n = i[t.action];
		n ? (U(t.action, n.localPayloadKeys, t.payload), this.log(t.action, t.payload)) : Q(`unknown audit action "${t.action}"; not in AUDIT_EVENT_CONTRACT`);
	}
	appendNightEditsInTransaction(e) {
		const t = /* @__PURE__ */ new Map(), n = s.currentTransaction, r = () => {
			for (const [e, { from: n, to: s, sessionId: r }] of t) e.sessionId === r && e.sequence === s && (e.sequence = n);
		};
		n?.on("abort", r), n?.on("error", r);
		const o = e.map(({ binding: e, input: n }) => {
			const s = i[n.action];
			if (!s || "session" !== s.anchor) return Q(`"${n.action}" is not a session-anchored audit action`), null;
			U(n.action, s.localPayloadKeys, n.payload);
			const r = this.targetForBinding(e);
			if (!r) return Q("night edit received an invalid audit workspace binding"), null;
			const { context: o } = r, a = {
				fileId: n.fileId,
				analysisDate: n.analysisDate,
				username: o.username ?? "unknown",
				...void 0 !== o.studyId ? { studyId: o.studyId } : {},
				action: n.action,
				clientTimestamp: Date.now() / 1e3,
				sessionId: o.sessionId,
				sequence: o.sequence,
				payload: H(n.payload)
			};
			return this.isNoOpRevisit(r, a) ? null : (o.sequence += 1, t.set(o, {
				from: t.get(o)?.from ?? a.sequence,
				to: o.sequence,
				sessionId: o.sessionId
			}), {
				db: r.db,
				record: a
			});
		});
		return o.reduce((e, t) => t ? e.then(() => M(t.db, t.record)) : e, s.Promise.resolve()).then(() => o.map((e) => e ? b(e.record.sessionId, e.record.sequence) : null));
	}
	recordSessionAnchored(e, { fileId: t, analysisDate: n, action: s, payload: r }) {
		const o = i[s];
		o ? "session" === o.anchor ? (U(s, o.localPayloadKeys, r), this.logFileEvent({
			fileId: t,
			analysisDate: n,
			action: s,
			...void 0 !== r ? { payload: r } : {}
		}, e)) : Q(`"${s}" is anchored to "${o.anchor}"; use its matching audit entry point`) : Q(`unknown audit action "${s}"; not in AUDIT_EVENT_CONTRACT`);
	}
	recordWorkspaceDurably(e, t, n, s) {
		const r = this.resolveTarget(n);
		return r ? this.recordWorkspaceTargetDurably(r, e, t) : Promise.resolve(!1);
	}
	recordWorkspaceBoundDurably(e, t, n, s) {
		const r = this.targetForBinding(e);
		return r ? this.recordWorkspaceTargetDurably(r, t, n) : (Q("workspace event received an invalid audit workspace binding"), Promise.resolve(!1));
	}
	recordWorkspaceTargetDurably(e, t, n) {
		const s = i[t];
		return s ? "workspace" !== s.anchor ? (Q(`"${t}" is anchored to "${s.anchor}"; use record() or recordFileEvent()`), Promise.resolve(!1)) : (U(t, s.localPayloadKeys, n), this.persistBoundRecordDurably(e, this.workspaceEventRecord(e, t, n))) : (Q(`unknown audit action "${t}"; not in AUDIT_EVENT_CONTRACT`), Promise.resolve(!1));
	}
	recordFileEvent({ fileId: e, analysisDate: t, action: n, payload: s }, r) {
		const o = i[n];
		o ? "file" === o.anchor ? (U(n, o.localPayloadKeys, s), this.logFileEvent({
			fileId: e,
			analysisDate: t,
			action: n,
			...void 0 !== s ? { payload: s } : {}
		}, r)) : Q(`"${n}" is anchored to "${o.anchor}"; use record() so it lands where the contract says`) : Q(`unknown audit action "${n}"; not in AUDIT_EVENT_CONTRACT`);
	}
	recordFileEventDurably(e, t) {
		const { action: n, payload: s } = e, r = i[n];
		if (!r) return Q(`unknown audit action "${n}"; not in AUDIT_EVENT_CONTRACT`), Promise.resolve(!1);
		if ("file" !== r.anchor) return Q(`"${n}" is anchored to "${r.anchor}"; use record() so it lands where the contract says`), Promise.resolve(!1);
		U(n, r.localPayloadKeys, s);
		const o = t ? this.targetForBinding(t) : this.resolveTarget();
		return o ? this.persistBoundRecordDurably(o, this.fileEventRecord(o, e)) : Promise.resolve(!1);
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
			payload: H(t)
		}), this.drainQueue(n.db));
	}
	logWorkspaceEvent(e, t) {
		const n = this.resolveTarget();
		n && (this.enqueueWorkspaceEvent(n, e, t), this.drainQueue(n.db));
	}
	persistBoundRecordDurably(e, t) {
		return s.currentTransaction?.db === e.db && s.currentTransaction.storeNames.includes(e.db.auditLog.name) ? this.hasPendingWritesForDb(e.db) ? Promise.resolve(!1) : (e.context.sequence++, V(e.db, t).then(() => !0)) : (this.enqueueBoundRecord(e, t), new Promise((n) => {
			this.durabilityWaiters.set(t, n), this.drainQueue(e.db).catch(() => {
				this.resolveDurability(t, !1);
			});
		}));
	}
	enqueueWorkspaceEvent(e, t, n) {
		const s = this.workspaceEventRecord(e, t, n);
		return this.enqueueBoundRecord(e, s), s;
	}
	workspaceEventRecord(e, t, n) {
		const { context: s } = e, r = null != s.fileId && null != s.analysisDate;
		return {
			fileId: 0,
			analysisDate: z(),
			username: s.username ?? "unknown",
			...void 0 !== s.studyId ? { studyId: s.studyId } : {},
			action: t,
			clientTimestamp: Date.now() / 1e3,
			sessionId: s.sessionId,
			sequence: s.sequence,
			payload: H({
				...n,
				workspaceScoped: !0,
				...r ? {
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
	fileEventRecord(e, { fileId: t, analysisDate: n, action: s, payload: r }) {
		const { context: i } = e;
		return {
			fileId: t,
			analysisDate: n,
			username: i.username ?? "unknown",
			...void 0 !== i.studyId ? { studyId: i.studyId } : {},
			action: s,
			clientTimestamp: Date.now() / 1e3,
			sessionId: i.sessionId,
			sequence: i.sequence,
			payload: H(r)
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
	async settleWritesForDb(e) {
		return await this.settleWrites(e), !this.hasPendingWritesForDb(e);
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
			const n = this.dbAffinityByRecord.get(e);
			if (!n) {
				this.retryCount++;
				break;
			}
			let r, i = n.db;
			try {
				if (i.isOpen && !i.isOpen()) {
					if (u(i.name)) throw new Error("Captured audit workspace was deleted.");
					if (!await s.exists(i.name)) throw new Error("Captured audit workspace no longer exists.");
					r = new t(i.name), await r.open(), i = r;
				}
				await M(i, e), this.writeQueue.shift(), this.dbAffinityByRecord.delete(e), this.resolveDurability(e, !0), this.retryCount = 0;
			} catch {
				this.resolveDurability(e, !1), this.retryCount++, console.warn("[AuditLog] IndexedDB write failed; retaining event for retry");
				break;
			} finally {
				r?.close();
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
		const e = O;
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
		const { serverAvailable: e } = O.getState();
		if (e) {
			this.isFlushing = !0;
			try {
				let e;
				try {
					e = f();
				} catch {
					return;
				}
				const t = await j({ preserveRequestIdentity: !0 }), n = this.replicationStateFor(e);
				for (let s = 0; s < 20; s++) {
					const s = await e.auditLog.orderBy("id").limit(500).toArray();
					if (0 === s.length) return;
					const r = /* @__PURE__ */ new Map();
					for (const e of s) {
						if (!m(e.action) || this.isQuarantined(n, e)) continue;
						const t = G(e), s = Y(t);
						let i = r.get(s);
						i || (i = [], r.set(s, i)), i.push(t);
					}
					const i = /* @__PURE__ */ new Set();
					for (const [e, a] of r) {
						const s = a[0];
						if (!s) continue;
						const r = await this.sendGroup(t, n, {
							key: e,
							fileId: s.fileId,
							analysisDate: s.analysisDate,
							username: s.username,
							studyId: s.studyId,
							events: a
						});
						for (const e of r) i.add(e);
					}
					const o = [];
					for (const e of s) {
						if (null == e.id || !i.has(e.id)) break;
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
		const r = await this.sendBatch(e, s);
		if (r.transient) return r.acknowledgedLocalIds;
		if (!r.conflicted) return t.conflictStrikes.delete(n), r.acknowledgedLocalIds;
		const i = (t.conflictStrikes.get(n) ?? 0) + 1;
		if (t.conflictStrikes.set(n, i), i < 3) return r.acknowledgedLocalIds;
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
			n.transient || (n.conflicted ? (t.quarantinedEventKeys.add(ee(a)), B.getState().recordAuditQuarantine(), console.error(422 === n.status ? "[AuditLog] Server refused an audit event as a contract violation; retained locally and skipped in later batches" : "[AuditLog] Server refused an audit event as a conflicting identity; retained locally and skipped in later batches")) : o.push(...n.acknowledgedLocalIds));
		}
		return o;
	}
	async sendBatch(e, { fileId: t, analysisDate: n, username: s, studyId: r, events: i }) {
		if (0 === i.length) return {
			acknowledgedLocalIds: [],
			conflicted: !1,
			transient: !1,
			status: 0
		};
		try {
			const o = [], a = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
			for (const e of i) {
				if (!m(e.action)) {
					console.warn("[AuditLog] Retaining event with an unknown action locally");
					continue;
				}
				const t = Number.isFinite(e.clientTimestamp) && e.clientTimestamp > 0 ? e.clientTimestamp : Date.now() / 1e3;
				t !== e.clientTimestamp && console.warn("[AuditLog] Invalid audit timestamp replaced before replication");
				const n = b(e.sessionId, e.sequence), s = d.get(n);
				if (s) {
					if (!Z(s, e)) {
						console.error("[AuditLog] Two local audit rows share one identity with different content; retaining the divergent row");
						continue;
					}
					console.warn("[AuditLog] Collapsing a duplicated audit identity before replication"), null != e.id && a.get(n)?.push(e.id);
				} else d.set(n, e), a.set(n, null != e.id ? [e.id] : []), o.push(w(e, t));
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
					..."number" == typeof r ? { "X-Study-Id": String(r) } : {}
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
export { T as a, j as i, N as n, W as r, se as t };
