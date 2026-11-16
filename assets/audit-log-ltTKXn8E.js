import { Pn as e, f as t, jn as n, o as s } from "./schema-B6UkEiVJ.js";
import { a as r, at as i, ct as o, n as a, o as d, r as l, s as c, t as u } from "./workspace-db-DU4CzwX1.js";
import { a as h, c as f, l as y } from "./legacy-invalid-night-zjKZRSNb.js";
import { i as p } from "./project-revision-CT6PGNkq.js";
import { n as g, r as w, t as m } from "./audit-events-D-MHWdwf.js";
import { n as b, t as v } from "./audit-hash-DNLMlimm.js";
import { i as I, t as S } from "./wal-CKT9mrFN.js";
const T = /* @__PURE__ */ new Set([
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
function A(e) {
	return T.has(e);
}
const D = /\{[^{}]+\}/g;
function k(e, t, n) {
	if (null == t) return "";
	if ("object" == typeof t) throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
	return `${e}=${!0 === n?.allowReserved ? t : encodeURIComponent(t)}`;
}
function R(e, t, n) {
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
function E(e, t, n) {
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
function q(e) {
	return function(t) {
		const n = [];
		if (t && "object" == typeof t) for (const s in t) {
			const r = t[s];
			if (null != r) if (Array.isArray(r)) {
				if (0 === r.length) continue;
				n.push(E(s, r, {
					style: "form",
					explode: !0,
					...e?.array,
					allowReserved: e?.allowReserved || !1
				}));
			} else "object" != typeof r ? n.push(k(s, r, e)) : n.push(R(s, r, {
				style: "deepObject",
				explode: !0,
				...e?.object,
				allowReserved: e?.allowReserved || !1
			}));
		}
		return n.join("&");
	};
}
function C(e, t) {
	let n = e;
	for (const s of e.match(D) ?? []) {
		let e = s.substring(1, s.length - 1), r = !1, i = "simple";
		if (e.endsWith("*") && (r = !0, e = e.substring(0, e.length - 1)), e.startsWith(".") ? (i = "label", e = e.substring(1)) : e.startsWith(";") && (i = "matrix", e = e.substring(1)), !t || void 0 === t[e] || null === t[e]) continue;
		const o = t[e];
		n = Array.isArray(o) ? n.replace(s, E(e, o, {
			style: i,
			explode: r
		})) : "object" != typeof o ? "matrix" !== i ? n.replace(s, "label" === i ? `.${encodeURIComponent(o)}` : encodeURIComponent(o)) : n.replace(s, `;${k(e, o)}`) : n.replace(s, R(e, o, {
			style: i,
			explode: r
		}));
	}
	return n;
}
function x(e, t) {
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
function P(e) {
	return e.endsWith("/") ? e.substring(0, e.length - 1) : e;
}
var j = class extends TypeError {
	constructor() {
		super("Workspace is local-only — server API calls are disabled"), this.name = "LocalOnlyWorkspaceError";
	}
};
async function F(e) {
	if (!(e instanceof Response)) return e;
	if (!(e.headers.get("content-type") ?? "").startsWith("application/json")) return e;
	const t = h(await e.clone().text());
	if (null === t) return e;
	const n = new Headers(e.headers);
	return n.delete("content-length"), new Response(t, {
		status: e.status,
		statusText: e.statusText,
		headers: n
	});
}
let L = null, O = null;
async function $(e = {}) {
	const t = !0 === e.preserveRequestIdentity, n = r();
	if (function() {
		if (c().capabilities.tauri) return !1;
		const e = r();
		if (!e) return !1;
		const t = d.getState().getWorkspace(e);
		return void 0 === t || "" === t.serverUrl;
	}()) throw new j();
	const s = o.basePath, { sitePassword: i, username: a, selectedStudyId: l } = (await async function() {
		return L || (O || (O = import("./store-BrZppDwj.js").then((e) => e.n)), L = await O), L.useSleepScoringStore;
	}()).getState();
	if (n !== r()) throw new TypeError("Workspace changed while capturing the server transport");
	const u = { onRequest: ({ request: e }) => (i && !e.headers.has("X-Site-Password") && e.headers.set("X-Site-Password", i), t || e.headers.has("X-Username") || e.headers.set("X-Username", a || "anonymous"), t || e.headers.has("X-Study-Id") || null == l || e.headers.set("X-Study-Id", String(l)), e) }, h = function(e) {
		let { baseUrl: t = "", Request: n = globalThis.Request, fetch: s = globalThis.fetch, querySerializer: r, bodySerializer: i, pathSerializer: o, headers: a, requestInitExt: d, ...l } = { ...e };
		d = "object" == typeof process && Number.parseInt(process?.versions?.node?.substring(0, 2)) >= 18 && process.versions.undici ? d : void 0, t = P(t);
		const c = [];
		async function u(e, u) {
			const { baseUrl: h, fetch: f = s, Request: y = n, headers: p, params: g = {}, parseAs: w = "json", querySerializer: m, bodySerializer: b = i ?? x, pathSerializer: v, body: I, middleware: S = [], ...T } = u || {};
			let A = t;
			h && (A = P(h) ?? t);
			let D = "function" == typeof r ? r : q(r);
			m && (D = "function" == typeof m ? m : q({
				..."object" == typeof r ? r : {},
				...m
			}));
			const k = v || o || C, R = void 0 === I ? void 0 : b(I, _(a, p, g.header)), E = _(void 0 === R || R instanceof FormData ? {} : { "Content-Type": "application/json" }, a, p, g.header), j = [...c, ...S], F = {
				redirect: "follow",
				...l,
				...T,
				body: R,
				headers: E
			};
			let L, O, $, B = new y(function(e, t) {
				let n = `${t.baseUrl}${e}`;
				t.params?.path && (n = t.pathSerializer(n, t.params.path));
				let s = t.querySerializer(t.params.query ?? {});
				return s.startsWith("?") && (s = s.substring(1)), s && (n += `?${s}`), n;
			}(e, {
				baseUrl: A,
				params: g,
				querySerializer: D,
				pathSerializer: k
			}), F);
			for (const t in T) t in B || (B[t] = T[t]);
			if (j.length) {
				L = Math.random().toString(36).slice(2, 11), O = Object.freeze({
					baseUrl: A,
					fetch: f,
					parseAs: w,
					querySerializer: D,
					bodySerializer: b,
					pathSerializer: k
				});
				for (const t of j) if (t && "object" == typeof t && "function" == typeof t.onRequest) {
					const n = await t.onRequest({
						request: B,
						schemaPath: e,
						params: g,
						options: O,
						id: L
					});
					if (n) {
						if (!(n instanceof y)) {
							if (n instanceof Response) {
								$ = n;
								break;
							}
							throw new Error("onRequest: must return new Request() or Response() when modifying the request");
						}
						B = n;
					}
				}
			}
			if (!$) {
				try {
					$ = await f(B, d);
				} catch (Q) {
					let t = Q;
					if (j.length) for (let n = j.length - 1; n >= 0; n--) {
						const s = j[n];
						if (s && "object" == typeof s && "function" == typeof s.onError) {
							const n = await s.onError({
								request: B,
								error: t,
								schemaPath: e,
								params: g,
								options: O,
								id: L
							});
							if (n) {
								if (n instanceof Response) {
									t = void 0, $ = n;
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
				if (j.length) for (let t = j.length - 1; t >= 0; t--) {
					const n = j[t];
					if (n && "object" == typeof n && "function" == typeof n.onResponse) {
						const t = await n.onResponse({
							request: B,
							response: $,
							schemaPath: e,
							params: g,
							options: O,
							id: L
						});
						if (t) {
							if (!(t instanceof Response)) throw new Error("onResponse: must return new Response() when modifying the response");
							$ = t;
						}
					}
				}
			}
			const W = $.headers.get("Content-Length");
			if (204 === $.status || "HEAD" === B.method || "0" === W && !$.headers.get("Transfer-Encoding")?.includes("chunked")) return $.ok ? {
				data: void 0,
				response: $
			} : {
				error: void 0,
				response: $
			};
			if ($.ok) {
				const e = async () => {
					if ("stream" === w) return $.body;
					if ("json" === w && !W) {
						const e = await $.text();
						return e ? JSON.parse(e) : void 0;
					}
					return await $[w]();
				};
				return {
					data: await e(),
					response: $
				};
			}
			let N = await $.text();
			try {
				N = JSON.parse(N);
			} catch {}
			return {
				error: N,
				response: $
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
	return h.use(u), h;
}
const B = i((e, t) => ({
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
})), W = i()((e) => ({
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
function N() {
	const e = globalThis.__APP_VERSION__;
	return "string" == typeof e && e.length > 0 ? e : "dev";
}
var Q = e({
	FLUSH_BATCH_SIZE: () => 500,
	WORKSPACE_SCOPE_FILE_ID: () => 0,
	appendAuditRecordTransactionally: () => K,
	auditLog: () => re,
	isTransientConflict: () => G,
	mapAcknowledgedLocalIds: () => ne,
	reanchorForContract: () => Z,
	sameAuditContent: () => Y,
	utcDateToday: () => z
});
function U(e) {
	const t = `[AuditLog] ${e}`;
	console.error(t);
}
function M(e, t, n) {
	if (0 === t.length) return;
	const s = n ?? {}, r = t.filter((e) => !(e in s));
	r.length > 0 && U(`"${e}" payload is missing declared key(s): ${r.join(", ")}`);
}
function z() {
	return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function H(e) {
	return {
		...e,
		appVersion: N()
	};
}
async function K(e, t, s) {
	if (!("walLog" in e) || void 0 === e.walLog) return void await p(e, [e.auditLog], async () => X(e, t), s);
	const r = n.currentTransaction;
	r?.db === e && "readwrite" === r.mode && r.storeNames.includes(e.auditLog.name) && r.storeNames.includes(e.walLog.name) ? await X(e, t) : await I([e.auditLog], async () => X(e, t), e, s);
}
const V = /* @__PURE__ */ new WeakMap();
async function X(e, t) {
	const s = (await e.auditLog.orderBy("id").last())?.eventHash ?? null, r = b(s, t), i = n.currentTransaction ? await n.waitFor(r) : await r, o = {
		...t,
		...null !== s ? { previousHash: s } : {},
		eventHash: i
	}, a = await e.auditLog.add({ ...o });
	n.currentTransaction?.storeNames.includes("walLog") && await async function(e, t) {
		const { fileId: n, username: s, ...r } = t;
		await S({
			op: "audit_append",
			fileId: n,
			username: s,
			payload: {
				auditLogId: e,
				...Object.fromEntries(Object.entries(r).filter(([, e]) => void 0 !== e))
			}
		});
	}(a, o);
}
const J = "Audit append conflicted; retry the unchanged batch";
function G(e, t) {
	if (409 !== e) return !1;
	const n = t?.detail;
	return "string" == typeof n && n.includes(J);
}
function Z(e) {
	return "workspace" !== f[e.action]?.anchor || 0 === e.fileId ? e : {
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
function Y(e, t) {
	return e.action === t.action && e.fileId === t.fileId && e.analysisDate === t.analysisDate && e.username === t.username && e.studyId === t.studyId && e.clientTimestamp === t.clientTimestamp && v(e.payload ?? null) === v(t.payload ?? null);
}
function ee(e) {
	const t = void 0 === e.studyId ? "legacy-undefined" : null === e.studyId ? "default-null" : `study-${String(e.studyId)}`;
	return JSON.stringify([
		t,
		e.username,
		e.fileId,
		e.analysisDate
	]);
}
function te(e) {
	const t = Z(e);
	return JSON.stringify([ee(t), m(t.sessionId, t.sequence)]);
}
function ne(e, t) {
	const n = /* @__PURE__ */ new Set();
	for (const s of t) for (const t of e.get(s) ?? []) n.add(t);
	return [...n];
}
function se(e) {
	return !!A(e) && (U(`"${e}" records a scorer-night edit; only the marker owner records it`), !0);
}
const re = new class {
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
		let n = this.contextByDb.get(e);
		return n || (n = {
			fileId: null,
			analysisDate: null,
			username: null,
			studyId: void 0,
			sessionId: t(),
			sequence: 0
		}, this.contextByDb.set(e, n)), n;
	}
	resolveTarget(e) {
		let t = e;
		if (!t) try {
			t = u();
		} catch {
			return null;
		}
		return {
			db: t,
			context: this.contextForDb(t)
		};
	}
	isNoOpRevisit(e, t) {
		if (t.action === y.SESSION_END) return 0 === e.context.sequence;
		let n = V.get(e.db);
		n || (n = /* @__PURE__ */ new Map(), V.set(e.db, n));
		const s = JSON.stringify([t.fileId, t.analysisDate]);
		if (t.action !== y.SESSION_START) return n.delete(s), !1;
		const r = JSON.stringify([t.username, t.studyId ?? null]), i = v(t.payload ?? null), o = n.get(s);
		return o?.actor === r && o.payload === i || (n.set(s, {
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
		const n = this.stateByBinding.get(e);
		return n ? n.ambient && n.ambient.sessionId === n.ambientSessionId ? {
			db: n.db,
			context: n.ambient
		} : (n.ambient = null, n.ambientSessionId = null, n.own ??= {
			fileId: n.capturedFileId,
			analysisDate: n.capturedAnalysisDate,
			username: n.actor.username,
			studyId: n.actor.studyId,
			sessionId: t(),
			sequence: 0
		}, {
			db: n.db,
			context: n.own
		}) : null;
	}
	setContext(e, n, s, r) {
		const i = this.resolveTarget();
		if (!i) return;
		const { context: o } = i, a = void 0 === s ? o.username : s, d = void 0 === r ? o.studyId : r;
		e === o.fileId && n === o.analysisDate && a === o.username && d === o.studyId || (o.sessionId = t(), o.sequence = 0), o.fileId = e, o.analysisDate = n, o.username = a, o.studyId = d, this.flushToServer();
	}
	currentSessionId() {
		return this.resolveTarget()?.context.sessionId ?? null;
	}
	newSession() {
		this.flushToServer();
		const e = this.resolveTarget();
		e && (e.context.sessionId = t(), e.context.sequence = 0);
	}
	record(e, t) {
		const n = f[e];
		n ? se(e) || ("file" !== n.anchor ? (M(e, n.localPayloadKeys, t), "workspace" !== n.anchor ? this.log(e, t) : this.logWorkspaceEvent(e, t)) : U(`"${e}" is anchored to an explicit file/date; use recordFileEvent()`)) : U(`unknown audit action "${e}"; not in AUDIT_EVENT_CONTRACT`);
	}
	recordAppEvent(e, t) {
		this.record(e, t);
	}
	recordSessionBound(e, { fileId: t, analysisDate: n, action: s, payload: r }) {
		se(s) || this.recordSessionAnchored(e, {
			fileId: t,
			analysisDate: n,
			action: s,
			...void 0 !== r ? { payload: r } : {}
		});
	}
	recordNightEdit(e, t) {
		if (e) return void this.recordSessionAnchored(e, t);
		const n = f[t.action];
		n ? (M(t.action, n.localPayloadKeys, t.payload), this.log(t.action, t.payload)) : U(`unknown audit action "${t.action}"; not in AUDIT_EVENT_CONTRACT`);
	}
	appendNightEditsInTransaction(e) {
		const t = /* @__PURE__ */ new Map(), s = n.currentTransaction, r = () => {
			for (const [e, { from: n, to: s, sessionId: r }] of t) e.sessionId === r && e.sequence === s && (e.sequence = n);
		};
		s?.on("abort", r), s?.on("error", r);
		const i = e.map(({ binding: e, input: n }) => {
			const s = f[n.action];
			if (!s || "session" !== s.anchor) return U(`"${n.action}" is not a session-anchored audit action`), null;
			M(n.action, s.localPayloadKeys, n.payload);
			const r = this.targetForBinding(e);
			if (!r) return U("night edit received an invalid audit workspace binding"), null;
			const { context: i } = r, o = {
				fileId: n.fileId,
				analysisDate: n.analysisDate,
				username: i.username ?? "unknown",
				...void 0 !== i.studyId ? { studyId: i.studyId } : {},
				action: n.action,
				clientTimestamp: Date.now() / 1e3,
				sessionId: i.sessionId,
				sequence: i.sequence,
				payload: H(n.payload)
			};
			return this.isNoOpRevisit(r, o) ? null : (i.sequence += 1, t.set(i, {
				from: t.get(i)?.from ?? o.sequence,
				to: i.sequence,
				sessionId: i.sessionId
			}), {
				db: r.db,
				record: o
			});
		});
		return i.reduce((e, t) => t ? e.then(() => K(t.db, t.record)) : e, n.Promise.resolve()).then(() => i.map((e) => e ? m(e.record.sessionId, e.record.sequence) : null));
	}
	recordSessionAnchored(e, { fileId: t, analysisDate: n, action: s, payload: r }) {
		const i = f[s];
		i ? "session" === i.anchor ? (M(s, i.localPayloadKeys, r), this.logFileEvent({
			fileId: t,
			analysisDate: n,
			action: s,
			...void 0 !== r ? { payload: r } : {}
		}, e)) : U(`"${s}" is anchored to "${i.anchor}"; use its matching audit entry point`) : U(`unknown audit action "${s}"; not in AUDIT_EVENT_CONTRACT`);
	}
	recordWorkspaceDurably(e, t, n, s) {
		const r = this.resolveTarget(n);
		return r ? this.recordWorkspaceTargetDurably(r, e, t) : Promise.resolve(!1);
	}
	recordWorkspaceBoundDurably(e, t, n, s) {
		const r = this.targetForBinding(e);
		return r ? this.recordWorkspaceTargetDurably(r, t, n, e) : (U("workspace event received an invalid audit workspace binding"), Promise.resolve(!1));
	}
	recordWorkspaceTargetDurably(e, t, n, s) {
		const r = f[t];
		return r ? "workspace" !== r.anchor ? (U(`"${t}" is anchored to "${r.anchor}"; use record() or recordFileEvent()`), Promise.resolve(!1)) : (M(t, r.localPayloadKeys, n), this.persistBoundRecordDurably(e, this.workspaceEventRecord(e, t, n), s)) : (U(`unknown audit action "${t}"; not in AUDIT_EVENT_CONTRACT`), Promise.resolve(!1));
	}
	recordFileEvent({ fileId: e, analysisDate: t, action: n, payload: s }, r) {
		const i = f[n];
		i ? "file" === i.anchor ? (M(n, i.localPayloadKeys, s), this.logFileEvent({
			fileId: e,
			analysisDate: t,
			action: n,
			...void 0 !== s ? { payload: s } : {}
		}, r)) : U(`"${n}" is anchored to "${i.anchor}"; use record() so it lands where the contract says`) : U(`unknown audit action "${n}"; not in AUDIT_EVENT_CONTRACT`);
	}
	recordFileEventDurably(e, t) {
		const { action: n, payload: s } = e, r = f[n];
		if (!r) return U(`unknown audit action "${n}"; not in AUDIT_EVENT_CONTRACT`), Promise.resolve(!1);
		if ("file" !== r.anchor) return U(`"${n}" is anchored to "${r.anchor}"; use record() so it lands where the contract says`), Promise.resolve(!1);
		M(n, r.localPayloadKeys, s);
		const i = t ? this.targetForBinding(t) : this.resolveTarget();
		return i ? this.persistBoundRecordDurably(i, this.fileEventRecord(i, e), t) : Promise.resolve(!1);
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
	hasSettledMutationAudit(e) {
		const t = e ? this.settledMutationAudits.get(e) : void 0;
		let s = n.currentTransaction;
		for (; s?.parent;) s = s.parent;
		if (!e || !t || !s) return !1;
		if (null === t.transaction) {
			t.transaction = s;
			const n = () => {
				this.settledMutationAudits.get(e) === t && this.settledMutationAudits.delete(e);
			};
			s.on("complete", n), s.on("abort", n);
		}
		return t.transaction === s;
	}
	persistBoundRecordDurably(e, t, s) {
		return n.currentTransaction?.db === e.db && n.currentTransaction.storeNames.includes(e.db.auditLog.name) ? !this.hasSettledMutationAudit(s) && this.hasPendingWritesForDb(e.db) ? Promise.resolve(!1) : (e.context.sequence++, X(e.db, t).then(() => !0)) : (s && this.settledMutationAudits.delete(s), this.enqueueBoundRecord(e, t), new Promise((n) => {
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
		if (!n) return t && U("file event received an invalid audit workspace binding"), null;
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
	async settleWritesForDb(e, t) {
		if (t && this.stateByBinding.get(t)?.db !== e) return !1;
		if (t && n.currentTransaction?.db === e) {
			if (this.hasSettledMutationAudit(t)) return !0;
			if (this.hasPendingWritesForDb(e)) return !1;
		} else if (await this.settleWrites(e), this.hasPendingWritesForDb(e)) return !1;
		return t && this.settledMutationAudits.set(t, { transaction: null }), !0;
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
			const t = this.dbAffinityByRecord.get(e);
			if (!t) {
				this.retryCount++;
				break;
			}
			let r, i = t.db;
			try {
				if (i.isOpen && !i.isOpen()) {
					if (l(i.name)) throw new Error("Captured audit workspace was deleted.");
					if (!await n.exists(i.name)) throw new Error("Captured audit workspace no longer exists.");
					a() && u() === i || (r = new s(i.name), await r.open(), i = r);
				}
				await K(i, e), this.writeQueue.shift(), this.dbAffinityByRecord.delete(e), this.resolveDurability(e, !0), this.retryCount = 0;
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
					e = u();
				} catch {
					return;
				}
				const t = await $({ preserveRequestIdentity: !0 }), n = this.replicationStateFor(e);
				for (let s = 0; s < 20; s++) {
					const s = await e.auditLog.orderBy("id").limit(500).toArray();
					if (0 === s.length) return;
					const r = /* @__PURE__ */ new Map();
					for (const e of s) {
						if (!g(e.action) || this.isQuarantined(n, e)) continue;
						const t = Z(e), s = ee(t);
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
					if (o.length > 0 && await p(e, [e.auditLog], async () => {
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
		return e.quarantinedEventKeys.has(te(t));
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
			n.transient || (n.conflicted ? (t.quarantinedEventKeys.add(te(a)), W.getState().recordAuditQuarantine(), console.error(422 === n.status ? "[AuditLog] Server refused an audit event as a contract violation; retained locally and skipped in later batches" : "[AuditLog] Server refused an audit event as a conflicting identity; retained locally and skipped in later batches")) : o.push(...n.acknowledgedLocalIds));
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
				if (!g(e.action)) {
					console.warn("[AuditLog] Retaining event with an unknown action locally");
					continue;
				}
				const t = Number.isFinite(e.clientTimestamp) && e.clientTimestamp > 0 ? e.clientTimestamp : Date.now() / 1e3;
				t !== e.clientTimestamp && console.warn("[AuditLog] Invalid audit timestamp replaced before replication");
				const n = m(e.sessionId, e.sequence), s = d.get(n);
				if (s) {
					if (!Y(s, e)) {
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
				const t = G(e, l.error);
				return {
					acknowledgedLocalIds: [],
					conflicted: !t && (409 === e || 422 === e),
					transient: t,
					status: e
				};
			}
			return {
				acknowledgedLocalIds: ne(a, l.data.acknowledged_event_ids ?? []),
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
export { A as a, $ as i, Q as n, N as r, re as t };
