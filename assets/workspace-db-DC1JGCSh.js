import { An as e, At as t, Mn as a, Ot as r, Pn as n, X as s, f as o, jt as i, kt as c, o as l } from "./schema-CuSEBD8u.js";
import { a as u } from "./content-hash-CZ-UAlQR.js";
const d = "ggirImportRefusals", p = "already-imported-different-content", f = "local-storage", m = "GGIR output folder", w = "ggir-folder", h = "import-in-progress", _ = {
	workspace: {
		label: "workspace changed",
		durableRefusal: !1
	},
	"csv-settings": {
		label: "CSV settings",
		durableRefusal: !1
	},
	"unsupported-format": {
		label: "unsupported file format",
		durableRefusal: !1
	},
	"empty-file": {
		label: "empty file",
		durableRefusal: !1
	},
	"invalid-data": {
		label: "invalid file data",
		durableRefusal: !1
	},
	[f]: {
		label: "local storage",
		durableRefusal: !1
	},
	permission: {
		label: "permission",
		durableRefusal: !1
	},
	"browser-memory": {
		label: "browser memory",
		durableRefusal: !1
	},
	"time-limit": {
		label: "too large or slow for this browser",
		durableRefusal: !1
	},
	[h]: {
		label: "earlier import still holds this file; try again in about 2 minutes",
		durableRefusal: !1
	},
	"decoder-crash": {
		label: "the decoder crashed on this file",
		durableRefusal: !1
	},
	"ggir-no-part4": {
		label: "GGIR made no Part 4 for this recording and an earlier version of the app refused it; import the folder again",
		durableRefusal: !0
	},
	"ggir-not-read": {
		label: "a GGIR file this recording needs could not be read; the receipt names it",
		durableRefusal: !0
	},
	"ggir-corrected-not-available": {
		label: "refused by an earlier version of the app; import the folder again",
		durableRefusal: !0
	},
	[p]: {
		label: "already imported with different content; export your work first then delete the earlier import in Data Settings before importing its replacement",
		durableRefusal: !0
	},
	[w]: {
		label: "GGIR output folder cannot be imported; select the whole folder containing GGIR configuration and milestones",
		durableRefusal: !0
	},
	"aw5-unreadable": {
		label: "the Actiwatch database could not be read in this browser; the file is damaged or is not an Actiware database",
		durableRefusal: !1
	},
	"aw5-memory": {
		label: "the Actiwatch database could not be read in this browser; it ran out of memory; close other tabs or import fewer databases at once",
		durableRefusal: !1
	},
	"stale-app": {
		label: "this tab could not load part of the app because a newer version was installed in another tab; reload the page and try again",
		durableRefusal: !1
	},
	"unsupported-epoch": {
		label: `this recording epoch length cannot be stored; only ${i.join(" or ")} second epochs and shorter epochs that divide ${String(t)} seconds can be imported`,
		durableRefusal: !1
	},
	"processing-runtime": {
		label: "processing runtime",
		durableRefusal: !1
	}
}, g = new Map(Object.entries(_).map(([e, { label: t }]) => [t.toLowerCase(), e])), y = /categor(?:y|ies): ([a-z0-9; ]+?)(?: \(\d+\))?[.,]/u;
const b = Object.keys({
	workspace: null,
	"csv-settings": "/csv-import",
	"unsupported-format": "/csv-import",
	"empty-file": null,
	"invalid-data": "/csv-import",
	[f]: null,
	permission: null,
	"browser-memory": null,
	"time-limit": null,
	[h]: null,
	"decoder-crash": null,
	"ggir-no-part4": null,
	"ggir-not-read": null,
	"ggir-corrected-not-available": null,
	[p]: null,
	[w]: null,
	"aw5-unreadable": null,
	"aw5-memory": null,
	"stale-app": null,
	"unsupported-epoch": null,
	"processing-runtime": "/settings/processing"
});
function k(e) {
	return _[e].label;
}
function S(e) {
	return k(function(e) {
		if (e instanceof Error && "category" in e && "string" == typeof e.category && Object.hasOwn(_, e.category)) return e.category;
		const t = function(e) {
			try {
				return e instanceof Error ? e.message : "string" == typeof e ? e : "";
			} catch {
				return "";
			}
		}(e).toLowerCase();
		if (Object.hasOwn(_, t)) return t;
		const a = g.get(t) ?? g.get(y.exec(t)?.[1] ?? "");
		return void 0 !== a ? a : t.includes("timed out during") ? "time-limit" : /failed to fetch dynamically imported module|error loading dynamically imported module|importing a module script failed/u.test(t) ? "stale-app" : t.includes("already being imported") ? "import-in-progress" : t.startsWith("wasm panic in ") ? "decoder-crash" : /workspace|scope changed|no longer active/u.test(t) ? "workspace" : /csv settings|column-mapped|column mapping|mapping .*required|settings .*incomplete|review data settings/u.test(t) ? "csv-settings" : /unsupported|not supported|unimplemented source-profile|unknown file (?:type|format)/u.test(t) ? "unsupported-format" : /out of memory|allocation failed|invalid array length|exceeds the v1 limit|too large (?:to process|for in-browser memory)/u.test(t) || /\bunreachable\b/u.test(t) && !t.startsWith("wasm panic in ") ? "browser-memory" : /empty|no data rows|did not contain any .*epochs/u.test(t) ? "empty-file" : /quota|indexeddb|dexie|database|storage|persist|saving|disk/u.test(t) ? "local-storage" : /permission|denied|unauthori[sz]ed|not allowed/u.test(t) ? "permission" : /parse|csv|row|column|timestamp|header|date|\btime\b|corrupt|invalid|malformed|decompress|archive|rdata/u.test(t) ? "invalid-data" : "processing-runtime";
	}(e));
}
const E = [
	"parse",
	"score",
	"nonwear",
	"save",
	"variants"
], R = "A recording already in this workspace was offered again, changed. It was not imported, and nothing was overwritten: the file and its scoring are as they were. To use the changed recording, export your work first, then delete the file and import it again.", A = {
	reading: [0, 30],
	parsing: [0, 45],
	epoching: [30, 50],
	scoring: [55, 72],
	nonwear: [72, 82],
	ggir: [82, 85],
	storing: [85, 98],
	variants: [98, 100],
	complete: [100, 100]
};
function I(e, t) {
	if (null === t) return -1;
	const [a, r] = A[e];
	return a + Math.max(0, Math.min(1, t)) * (r - a);
}
function O(e, t) {
	return "gt3x" === e || "geneactiv_bin" === e || "nhanes" === e || t ? [
		"read",
		"parse",
		"epochs",
		"counts",
		"score",
		"nonwear",
		"ggir",
		"save",
		"variants"
	] : [
		"read",
		"parse",
		"score",
		"nonwear",
		"save",
		"variants"
	];
}
function P(e) {
	const t = e?.reason;
	return t instanceof Error ? t : new DOMException("Job cancelled", "AbortError");
}
function C(e, t) {
	return t ? t.aborted ? Promise.reject(P(t)) : new Promise((a, r) => {
		const n = () => r(P(t));
		t.addEventListener("abort", n, { once: !0 }), e.then(a, r).finally(() => t.removeEventListener("abort", n));
	}) : e;
}
Object.keys(A);
const T = "undefined" != typeof process && !1;
let D = !1;
const N = {
	get basePath() {
		const e = "/sleep-scoring-wasm/", t = e.replace(/\/$/, ""), a = "undefined" != typeof window ? window.__CONFIG__?.basePath : void 0;
		return null == a ? t : "" !== t && a !== t ? (D || (D = !0, console.error(`[config] config.js basePath "${a}" does not match the build base "${e}"; using "${t}". Fix config.js or rebuild with VITE_BASE_PATH="${a}/".`)), t) : a;
	},
	get apiBaseUrl() {
		return `${this.basePath}/api/v1`;
	},
	get isDev() {
		return T;
	},
	get isProd() {
		return !T;
	}
};
var L = class extends c {
	workspaces;
	uiSettings;
	constructor(e) {
		super(e), this.version(1).stores({
			workspaces: "id, lastAccessedAt",
			uiSettings: "key, updatedAt"
		}), r(this);
	}
};
const j = new L("SleepScoringGlobal-wasm"), G = "workspace-deleted:";
function M(e) {
	return `${G}${e}`;
}
async function W(e = j) {
	const t = await e.uiSettings.where("key").startsWith(G).primaryKeys();
	return new Set(t.map((e) => e.slice(18)));
}
async function x(e, t = []) {
	return j.transaction("rw", j.workspaces, j.uiSettings, async () => {
		const a = await W(), r = e.filter((e) => !a.has(e.dbName));
		return t.length > 0 && await j.workspaces.bulkDelete([...t]), r.length > 0 && await j.workspaces.bulkPut(r), r.length;
	});
}
const U = (e) => {
	let t;
	const a = /* @__PURE__ */ new Set(), r = (e, r) => {
		const n = "function" == typeof e ? e(t) : e;
		if (!Object.is(n, t)) {
			const e = t;
			t = (null != r ? r : "object" != typeof n || null === n) ? n : Object.assign({}, t, n), a.forEach((a) => a(t, e));
		}
	}, n = () => t, s = {
		setState: r,
		getState: n,
		getInitialState: () => o,
		subscribe: (e) => (a.add(e), () => a.delete(e))
	}, o = t = e(r, n, s);
	return s;
}, F = (e) => e ? U(e) : U;
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var V = e((e) => {
	var t = Symbol.for("react.transitional.element"), a = Symbol.for("react.consumer"), r = Symbol.for("react.context"), n = Symbol.for("react.forward_ref"), s = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, o = Object.assign, i = {};
	function c(e, t, a) {
		this.props = e, this.context = t, this.refs = i, this.updater = a || s;
	}
	function l() {}
	function u(e, t, a) {
		this.props = e, this.context = t, this.refs = i, this.updater = a || s;
	}
	c.prototype.isReactComponent = {}, c.prototype.setState = function(e, t) {
		if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, c.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	}, l.prototype = c.prototype;
	var d = u.prototype = new l();
	d.constructor = u, o(d, c.prototype), d.isPureReactComponent = !0, Array.isArray;
	var p = {
		H: null,
		A: null,
		T: null,
		S: null
	}, f = Object.prototype.hasOwnProperty;
	e.createContext = function(e) {
		return (e = {
			$$typeof: r,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}).Provider = e, e.Consumer = {
			$$typeof: a,
			_context: e
		}, e;
	}, e.createElement = function(e, a, r) {
		var n, s = {}, o = null;
		if (null != a) for (n in void 0 !== a.key && (o = "" + a.key), a) f.call(a, n) && "key" !== n && "__self" !== n && "__source" !== n && (s[n] = a[n]);
		var i = arguments.length - 2;
		if (1 === i) s.children = r;
		else if (1 < i) {
			for (var c = Array(i), l = 0; l < i; l++) c[l] = arguments[l + 2];
			s.children = c;
		}
		if (e && e.defaultProps) for (n in i = e.defaultProps) void 0 === s[n] && (s[n] = i[n]);
		return function(e, a, r) {
			var n = r.ref;
			return {
				$$typeof: t,
				type: e,
				key: a,
				ref: void 0 !== n ? n : null,
				props: r
			};
		}(e, o, s);
	}, e.forwardRef = function(e) {
		return {
			$$typeof: n,
			render: e
		};
	}, e.useCallback = function(e, t) {
		return p.H.useCallback(e, t);
	}, e.useContext = function(e) {
		return p.H.useContext(e);
	}, e.useDebugValue = function() {}, e.useRef = function(e) {
		return p.H.useRef(e);
	}, e.useSyncExternalStore = function(e, t, a) {
		return p.H.useSyncExternalStore(e, t, a);
	};
}), H = e((e, t) => {
	t.exports = V();
}), z = n(H(), 1);
const $ = (e) => e, B = (e) => {
	const t = F(e), a = (e) => function(e, t = $) {
		const a = z.useSyncExternalStore(e.subscribe, z.useCallback(() => t(e.getState()), [e, t]), z.useCallback(() => t(e.getInitialState()), [e, t]));
		return z.useDebugValue(a), a;
	}(t, e);
	return Object.assign(a, t), a;
}, Y = (e) => e ? B(e) : B, q = {
	IMPORT: "import",
	REPROCESS: "reprocess",
	SCORED_VARIANT_WARM: "scored-variant-warm",
	VARIANT_RECOVERY: "variant-recovery",
	GGIR_RECOMPUTE: "ggir-recompute",
	GGIR_RECOVERY: "ggir-recovery",
	GGIR_CORRECTED_WARM: "ggir-corrected-warm",
	NIGHT_DIFFICULTY: "night-difficulty",
	PHYSICAL_ACTIVITY: "physical-activity",
	PLACEMENT: "placement",
	AUTO_SCORE: "auto-score",
	PLACEMENT_RECOVERY: "placement-recovery",
	BACKUP_EXPORT: "backup-export",
	BACKUP_RESTORE: "backup-restore",
	RESCORE: "rescore",
	EXPORT: "export",
	DIARY_VALIDATE: "diary-validate",
	DIARY_REPAIR: "diary-repair",
	DIARY_IMPORT: "diary-import",
	HDCZA_REFRESH: "hdcza-refresh",
	SYNC: "sync",
	WAL_TRIM: "wal-trim",
	MODEL_DOWNLOAD: "model-download",
	NONWEAR_IMPORT: "nonwear-import",
	AUDIT_EXPORT: "audit-export"
}, X = {
	QUEUED: "queued",
	RUNNING: "running",
	JOINED: "joined",
	RERUN: "rerun",
	CANCELLED: "cancelled",
	COMMITTED: "committed",
	DONE: "done",
	FAILED: "failed",
	ELSEWHERE: "elsewhere"
}, J = {
	[q.IMPORT]: "user",
	[q.REPROCESS]: "user",
	[q.SCORED_VARIANT_WARM]: "automatic",
	[q.VARIANT_RECOVERY]: "automatic",
	[q.GGIR_RECOMPUTE]: "automatic",
	[q.GGIR_RECOVERY]: "automatic",
	[q.GGIR_CORRECTED_WARM]: "user",
	[q.NIGHT_DIFFICULTY]: "automatic",
	[q.PHYSICAL_ACTIVITY]: "automatic",
	[q.PLACEMENT]: "automatic",
	[q.AUTO_SCORE]: "automatic",
	[q.PLACEMENT_RECOVERY]: "automatic",
	[q.BACKUP_EXPORT]: "user",
	[q.BACKUP_RESTORE]: "user",
	[q.RESCORE]: "user",
	[q.EXPORT]: "user",
	[q.DIARY_VALIDATE]: "user",
	[q.DIARY_REPAIR]: "user",
	[q.DIARY_IMPORT]: "user",
	[q.HDCZA_REFRESH]: "automatic",
	[q.SYNC]: "automatic",
	[q.WAL_TRIM]: "automatic",
	[q.MODEL_DOWNLOAD]: "user",
	[q.NONWEAR_IMPORT]: "user",
	[q.AUDIT_EXPORT]: "user"
};
function K(e) {
	return "automatic" === J[e];
}
function Z(e) {
	return [
		q.WAL_TRIM,
		q.PLACEMENT,
		q.PLACEMENT_RECOVERY,
		q.NIGHT_DIFFICULTY,
		q.PHYSICAL_ACTIVITY,
		q.VARIANT_RECOVERY,
		q.GGIR_RECOVERY
	].includes(e);
}
const Q = Y((e, t) => ({
	jobs: {},
	localProcessingJobId: null,
	localProcessingProgress: null,
	isLocalProcessing: !1,
	setLocalProcessingProgress: (t) => e({ localProcessingProgress: t }),
	setIsLocalProcessing: (t) => e({ isLocalProcessing: t }),
	update: (t, a) => e((e) => {
		const r = {
			...e.jobs[t],
			...a
		};
		r.status === X.FAILED ? r.visible = !0 : K(r.kind) && (r.visible = !1);
		const n = { ...e.jobs };
		r.status === X.FAILED && Reflect.deleteProperty(n, `${t}:failure`);
		const s = e.jobs[t];
		if (s?.status === X.FAILED && r.status !== X.FAILED && te(s)) {
			const e = `${t}:failure`;
			n[e] = {
				...s,
				id: e,
				noticeOnly: !0
			};
		}
		ae(r) || Reflect.deleteProperty(n, t), r.status === X.DONE && K(r.kind) || (n[t] = r);
		const o = Object.values(n).filter((e) => !ae(e) && e.status !== X.FAILED);
		for (const t of o.slice(0, Math.max(0, o.length - 5))) Reflect.deleteProperty(n, t.id);
		return {
			jobs: n,
			...void 0 !== a.detail && e.localProcessingJobId === t ? { localProcessingProgress: a.detail } : {}
		};
	}),
	cancel: (e) => {
		const a = t().jobs[e];
		a?.controller.abort(), a && t().update(e, {});
	},
	dismiss: (t) => e((e) => {
		const a = { ...e.jobs };
		return Reflect.deleteProperty(a, t), { jobs: a };
	})
}));
function ee(e) {
	return e.localProcessingJobId ? e.jobs[e.localProcessingJobId] : void 0;
}
function te(e) {
	return !e.noticeOnly;
}
function ae(e) {
	return e?.status === X.QUEUED || e?.status === X.RUNNING;
}
const re = (e) => !!e.dispatchFromDevtools && "function" == typeof e.dispatch, ne = /* @__PURE__ */ new Map(), se = (e) => {
	const t = ne.get(e);
	return t ? Object.fromEntries(Object.entries(t.stores).map(([e, t]) => [e, t.getState()])) : {};
}, oe = /^at (?:new |async )?(.+?) \(/, ie = /^([^@]+)@/;
function ce(e) {
	var t, a, r;
	if (!e) return;
	const n = e.split("\n"), s = n.findIndex((e) => e.includes("api.setState"));
	if (s < 0) return;
	const o = (null == (t = n[s + 1]) ? void 0 : t.trim()) || "";
	return (null == (a = oe.exec(o)) ? void 0 : a[1]) || (null == (r = ie.exec(o)) ? void 0 : r[1]);
}
const le = (e, t = {}) => (a, r, n) => {
	const { enabled: s, anonymousActionType: o, store: i, ...c } = t;
	let l;
	try {
		l = null != s && s && window.__REDUX_DEVTOOLS_EXTENSION__;
	} catch (w) {}
	if (!l) return e(a, r, n);
	const { connection: u, ...d } = ((e, t, a) => {
		if (void 0 === e) return {
			type: "untracked",
			connection: t.connect(a)
		};
		const r = ne.get(a.name);
		if (r) return {
			type: "tracked",
			store: e,
			...r
		};
		const n = {
			connection: t.connect(a),
			stores: {}
		};
		return ne.set(a.name, n), {
			type: "tracked",
			store: e,
			...n
		};
	})(i, l, c);
	let p = !0;
	n.setState = (e, t, s) => {
		const l = a(e, t);
		if (!p) return l;
		const d = void 0 === s ? { type: o || ce((/* @__PURE__ */ new Error()).stack) || "anonymous" } : "string" == typeof s ? { type: s } : s;
		return void 0 === i ? (u?.send(d, r()), l) : (u?.send({
			...d,
			type: `${i}/${d.type}`
		}, {
			...se(c.name),
			[i]: n.getState()
		}), l);
	}, n.devtools = { cleanup: () => {
		u && "function" == typeof u.unsubscribe && u.unsubscribe(), ((e, t) => {
			if (void 0 === t) return;
			const a = ne.get(e);
			a && (delete a.stores[t], 0 === Object.keys(a.stores).length && ne.delete(e));
		})(c.name, i);
	} };
	const f = (...e) => {
		const t = p;
		p = !1, a(...e), p = t;
	}, m = e(n.setState, r, n);
	if ("untracked" === d.type ? u?.init(m) : (d.stores[d.store] = n, u?.init(Object.fromEntries(Object.entries(d.stores).map(([e, t]) => [e, e === d.store ? m : t.getState()])))), re(n)) {
		const e = n.dispatch;
		n.dispatch = (...t) => {
			e(...t);
		};
	}
	return u.subscribe((e) => {
		var t;
		switch (e.type) {
			case "ACTION": return "string" != typeof e.payload ? void console.error("[zustand devtools middleware] Unsupported action format") : ue(e.payload, (e) => {
				if ("__setState" === e.type) {
					if (void 0 === i) return void f(e.state);
					1 !== Object.keys(e.state).length && console.error("\n                    [zustand devtools middleware] Unsupported __setState action format.\n                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),\n                    and value of this only key should be a state object. Example: { \"type\": \"__setState\", \"state\": { \"abc123Store\": { \"foo\": \"bar\" } } }\n                    ");
					const t = e.state[i];
					if (null == t) return;
					JSON.stringify(n.getState()) !== JSON.stringify(t) && f(t);
					return;
				}
				re(n) && n.dispatch(e);
			});
			case "DISPATCH":
				switch (e.payload.type) {
					case "RESET": return f(m), void 0 === i ? null == u ? void 0 : u.init(n.getState()) : null == u ? void 0 : u.init(se(c.name));
					case "COMMIT": return void 0 === i ? void u?.init(n.getState()) : null == u ? void 0 : u.init(se(c.name));
					case "ROLLBACK": return ue(e.state, (e) => {
						if (void 0 === i) return f(e), void u?.init(n.getState());
						f(e[i]), u?.init(se(c.name));
					});
					case "JUMP_TO_STATE":
					case "JUMP_TO_ACTION": return ue(e.state, (e) => {
						void 0 !== i ? JSON.stringify(n.getState()) !== JSON.stringify(e[i]) && f(e[i]) : f(e);
					});
					case "IMPORT_STATE": {
						const { nextLiftedState: a } = e.payload, r = null == (t = a.computedStates.slice(-1)[0]) ? void 0 : t.state;
						if (!r) return;
						f(void 0 === i ? r : r[i]), u?.send(null, a);
						return;
					}
					case "PAUSE_RECORDING": return p = !p;
				}
				return;
		}
	}), m;
}, ue = (e, t) => {
	let a;
	try {
		a = JSON.parse(e);
	} catch (r) {
		console.error("[zustand devtools middleware] Could not parse the received json", r);
	}
	void 0 !== a && t(a);
};
function de(e, t) {
	let a;
	try {
		a = e();
	} catch (r) {
		return;
	}
	return {
		getItem: (e) => {
			var r;
			const n = (e) => null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver), s = null != (r = a.getItem(e)) ? r : null;
			return s instanceof Promise ? s.then(n) : n(s);
		},
		setItem: (e, r) => a.setItem(e, JSON.stringify(r, null == t ? void 0 : t.replacer)),
		removeItem: (e) => a.removeItem(e)
	};
}
const pe = (e) => (t) => {
	try {
		const a = e(t);
		return a instanceof Promise ? a : {
			then: (e) => pe(e)(a),
			catch(e) {
				return this;
			}
		};
	} catch (a) {
		return {
			then(e) {
				return this;
			},
			catch: (e) => pe(e)(a)
		};
	}
}, fe = (e, t) => (a, r, n) => {
	let s = {
		storage: de(() => window.localStorage),
		partialize: (e) => e,
		version: 0,
		merge: (e, t) => ({
			...t,
			...e
		}),
		...t
	}, o = !1, i = 0;
	const c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
	let u = s.storage;
	if (!u) return e((...e) => {
		console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`), a(...e);
	}, r, n);
	const d = () => {
		const e = s.partialize({ ...r() });
		return u.setItem(s.name, {
			state: e,
			version: s.version
		});
	}, p = n.setState;
	n.setState = (e, t) => (p(e, t), d());
	const f = e((...e) => (a(...e), d()), r, n);
	let m;
	n.getInitialState = () => f;
	const w = () => {
		var e, t;
		if (!u) return;
		const n = ++i;
		o = !1, c.forEach((e) => {
			var t;
			return e(null != (t = r()) ? t : f);
		});
		const p = (null == (t = s.onRehydrateStorage) ? void 0 : t.call(s, null != (e = r()) ? e : f)) || void 0;
		return pe(u.getItem.bind(u))(s.name).then((e) => {
			if (e) {
				if ("number" != typeof e.version || e.version === s.version) return [!1, e.state];
				if (s.migrate) {
					const t = s.migrate(e.state, e.version);
					return t instanceof Promise ? t.then((e) => [!0, e]) : [!0, t];
				}
				console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
			}
			return [!1, void 0];
		}).then((e) => {
			var t;
			if (n !== i) return;
			const [o, c] = e;
			return m = s.merge(c, null != (t = r()) ? t : f), a(m, !0), o ? d() : void 0;
		}).then(() => {
			n === i && (p?.(r(), void 0), m = r(), o = !0, l.forEach((e) => e(m)));
		}).catch((e) => {
			n === i && p?.(void 0, e);
		});
	};
	return n.persist = {
		setOptions: (e) => {
			s = {
				...s,
				...e
			}, e.storage && (u = e.storage);
		},
		clearStorage: () => {
			++i, u?.removeItem(s.name);
		},
		getOptions: () => s,
		rehydrate: () => w(),
		hasHydrated: () => o,
		onHydrate: (e) => (c.add(e), () => {
			c.delete(e);
		}),
		onFinishHydration: (e) => (l.add(e), () => {
			l.delete(e);
		})
	}, s.skipHydration || w(), m || f;
};
function me(e) {
	const t = e.split(/[/\\]/);
	return t[t.length - 1] || e;
}
var we = class e {
	path;
	name;
	lastModified;
	fileSize;
	start;
	end;
	constructor(e) {
		this.path = e.path, this.name = e.name, this.fileSize = e.fileSize, this.lastModified = e.lastModified, this.start = e.start ?? 0, this.end = e.end ?? e.fileSize;
	}
	static async fromPath(t) {
		const { stat: a } = await import("./dist-js-CMqw3VI6.js"), r = await a(t), n = r.mtime ? r.mtime.getTime() : 0;
		return new e({
			path: t,
			name: me(t),
			fileSize: r.size,
			lastModified: n
		});
	}
	get size() {
		return this.end - this.start;
	}
	slice(t, a) {
		const { start: r, end: n } = function(e, t, a) {
			const r = (t, a) => void 0 === t ? a : t < 0 ? Math.max(e + t, 0) : Math.min(t, e), n = r(t, 0), s = r(a, e);
			return {
				start: n,
				end: Math.max(n, s)
			};
		}(this.size, t, a);
		return new e({
			path: this.path,
			name: this.name,
			fileSize: this.fileSize,
			lastModified: this.lastModified,
			start: this.start + r,
			end: this.start + n
		});
	}
	async arrayBuffer() {
		const e = this.size;
		if (e <= 0) return /* @__PURE__ */ new ArrayBuffer(0);
		const { open: t, SeekMode: a } = await import("./dist-js-CMqw3VI6.js"), r = await t(this.path, { read: !0 });
		try {
			await r.seek(this.start, a.Start);
			const t = new Uint8Array(e);
			let n = 0;
			for (; n < e;) {
				const e = await r.read(t.subarray(n));
				if (null === e || 0 === e) break;
				n += e;
			}
			return n === e ? t.buffer : t.buffer.slice(0, n);
		} finally {
			await r.close();
		}
	}
	async text() {
		const e = await this.arrayBuffer();
		return new TextDecoder().decode(e);
	}
};
async function he(e) {
	return u(e);
}
const _e = [
	"csv",
	"gt3x",
	"bin",
	"bz2",
	"tbz2"
], ge = {
	high: "high",
	medium: "medium",
	low: "low"
}, ye = {
	off: "off",
	actiware: "actiware",
	screens: "screens"
}, ve = {
	minutes_immobile: "minutes_immobile",
	epochs_scored_sleep: "epochs_scored_sleep"
}, be = {
	low: "low",
	medium: "medium",
	high: "high",
	auto: "auto",
	custom: "custom"
}, ke = {
	SADEH_1994_ACTILIFE: "sadeh_1994_actilife",
	SADEH_1994_ORIGINAL: "sadeh_1994_original",
	SADEH_1994_GGIR: "sadeh_1994_ggir",
	COLE_KRIPKE_1992_ACTILIFE: "cole_kripke_1992_actilife",
	COLE_KRIPKE_1992_ORIGINAL: "cole_kripke_1992_original",
	COLE_KRIPKE_1992_GGIR: "cole_kripke_1992_ggir",
	TENSOR_MAJORITY_VOTE: "tensor_majority_vote",
	CONSENSUS_MAJORITY_VOTE: "consensus_majority_vote",
	LSTM_SLEEP_WAKE: "lstm_sleep_wake",
	GGIR_HASIB_VAN_HEES_2015: "ggir_hasib_van_hees_2015",
	GGIR_HASIB_SADEH_1994: "ggir_hasib_sadeh_1994",
	GGIR_HASIB_GALLAND_2012: "ggir_hasib_galland_2012",
	GGIR_HASIB_COLE_KRIPKE_1992: "ggir_hasib_cole_kripke_1992",
	GGIR_HASIB_OAKLEY_1997: "ggir_hasib_oakley_1997",
	GGIR_HASIB_NOT_WORN: "ggir_hasib_not_worn",
	CHOI_2011_NONWEAR: "choi_2011_nonwear",
	DETACH_NONWEAR: "detach_nonwear",
	UCSD_SCRIPPS_2010: "ucsd_scripps_2010",
	SAZONOV_2004: "sazonov_2004",
	PRESCHOOL_FREE_LIVING_RF_3_5: "preschool_free_living_rf_3_5"
}, Se = {
	configured_scoring: "configured_scoring",
	actiware: "actiware"
}, Ee = {
	pim: "pim",
	zcm: "zcm",
	tat: "tat",
	neishabouri: "neishabouri",
	zero_crossing: "zero_crossing",
	mad: "mad",
	hfen: "hfen"
}, Re = {
	month_first: "month_first",
	day_first: "day_first"
}, Ae = {
	night_date: "night_date",
	period_start_day: "period_start_day",
	explicit_only: "explicit_only",
	ask_per_night: "ask_per_night"
}, Ie = {
	cannot_be_read: "cannot_be_read",
	sources_disagree: "sources_disagree",
	needs_decision: "needs_decision",
	date_filled: "date_filled",
	sources_agree: "sources_agree",
	as_written: "as_written"
}, Oe = {
	explicit_only: "explicit_only",
	sleep_date_same_day: "sleep_date_same_day",
	sleep_date_chronology: "sleep_date_chronology"
}, Pe = {
	main_sleep: "main_sleep",
	naps: "naps",
	nonwear: "nonwear"
}, Ce = {
	ask: "ask",
	first_occurrence: "first_occurrence",
	mark_unusable: "mark_unusable"
}, Te = {
	mark_unusable: "mark_unusable",
	shift_forward_hour: "shift_forward_hour"
}, De = {
	number_60s_epochs: "60s_epochs",
	ggir_5s: "ggir_5s"
}, Ne = {
	HDCZA: "HDCZA",
	HorAngle: "HorAngle",
	NotWorn: "NotWorn",
	MotionWare: "MotionWare",
	HLRB: "HLRB"
}, Le = {
	choi_2011: "choi_2011",
	flat_activity: "flat_activity",
	gt3x_capsense: "gt3x_capsense",
	actiware_off_wrist: "actiware_off_wrist",
	detach_nonwear: "detach_nonwear",
	van_hees_2013: "van_hees_2013",
	van_hees_2023: "van_hees_2023",
	ggir_saved: "ggir_saved",
	ggir_part2_invalid: "ggir_part2_invalid",
	choi_2012: "choi_2012",
	troiano_2008: "troiano_2008",
	ahmadi_2020: "ahmadi_2020",
	skovgaard_2023: "skovgaard_2023"
}, je = {
	PHYSICAL_ACTIVITY: "physical_activity",
	SLEEP_DIARY: "sleep_diary",
	CSV_IMPORT: "csv_import",
	PRESET_MANAGEMENT: "preset_management",
	NONWEAR_TIME: "nonwear_time",
	CONSENSUS_REVIEW: "consensus_review",
	ANALYSIS_ISSUES: "analysis_issues"
}, Ge = {
	use_source_a: "use_source_a",
	use_source_b: "use_source_b",
	intersection: "intersection",
	union: "union",
	source_b_bounded_by_source_a: "source_b_bounded_by_source_a",
	sanity_clamp_source_b_to_source_a: "sanity_clamp_source_b_to_source_a"
}, Me = {
	diary: "diary",
	hdcza: "hdcza",
	l5: "l5",
	selected_scorer_first_last: "selected_scorer_first_last",
	selected_scorer_longest_bout: "selected_scorer_longest_bout",
	quiet_bout: "quiet_bout",
	event_marker: "event_marker",
	actiware_rest_interval: "actiware_rest_interval",
	none: "none"
}, We = {
	evening_onset: "evening_onset",
	morning_offset: "morning_offset",
	daytime: "daytime"
}, xe = {
	NOON_OFFSET_HOURS: 12,
	ANALYSIS_WINDOW_HOURS: 24,
	CONTEXT_WINDOW_HOURS: 48,
	MORNING_OFFSET_ROLLOVER_PAD_HOURS: 6
}, Ue = {
	MAX_SLEEP_PERIODS_PER_DAY: 4,
	MAX_NONWEAR_PERIODS_PER_DAY: 10,
	EPOCH_DURATION_SECONDS: 60
}, Fe = {
	sadeh_1994_actilife: "1",
	sadeh_1994_original: "1",
	sadeh_1994_ggir: "1",
	cole_kripke_1992_actilife: "1",
	cole_kripke_1992_original: "2",
	cole_kripke_1992_ggir: "1",
	tensor_majority_vote: "1",
	consensus_majority_vote: "1",
	lstm_sleep_wake: "1",
	ggir_hasib_van_hees_2015: "1",
	ggir_hasib_sadeh_1994: "1",
	ggir_hasib_galland_2012: "1",
	ggir_hasib_cole_kripke_1992: "1",
	ggir_hasib_oakley_1997: "1",
	ggir_hasib_not_worn: "1",
	choi_2011_nonwear: "1",
	detach_nonwear: "1",
	ucsd_scripps_2010: "1",
	sazonov_2004: "1",
	preschool_free_living_rf_3_5: "1"
};
function Ve(e) {
	const t = Fe[e];
	if (void 0 === t) throw new Error(`no implementation_version for ${e}`);
	return t;
}
function He(e) {
	return Object.hasOwn(Fe, e) ? e : null;
}
var ze = class extends Error {
	name = "GgirResultsBundleError";
	category = w;
	folderName;
	fileName;
	constructor(e, t, a) {
		super(e), this.folderName = t, this.fileName = a;
	}
};
const $e = /* @__PURE__ */ new WeakMap(), Be = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakMap();
function qe(e, t) {
	const a = new File([], e);
	return Ye.set(a, t instanceof ze ? t : new ze(t ? "The GGIR output folder could not be read. Check folder access and open it again." : "The GGIR output folder is empty or contains no supported activity files.", e)), a;
}
function Xe(e) {
	return $e.get(e);
}
function Je(e, t) {
	Be.set(e, t);
}
function Ke(e) {
	const t = Be.get(e);
	if (t) return t;
	const a = e.webkitRelativePath;
	return "string" == typeof a && a ? a : e.name;
}
function Ze(e, t) {
	return /\.csv$/iu.test(e.name) && Ke(e) !== e.name ? new ze("This CSV table could not be read as activity data. GGIR imports require the whole output folder containing meta/ and config.csv.", void 0, e.name) : t instanceof Error ? t : new Error(t);
}
function Qe(e, t = !1) {
	const a = e.replace(/\\/gu, "/");
	return !/(^|\/)(?:\._[^/]*|__MACOSX)(?:\/|$)/iu.test(a) && (t || !/(^|\/)(?:ms5\.outraw|sib\.reports|sleep\.qc)(?:\/|$)/iu.test(a));
}
function et(e) {
	const t = e.replace(/\\/g, "/").split("/").filter(Boolean), a = t.indexOf("meta");
	return a >= 0 && a < t.length - 1 ? t.slice(0, a).join("/") : null;
}
function tt(e) {
	return t = nt(e), /\.(rdata|rda)$/iu.test(t) ? et(e) : null;
	var t;
}
function at(e) {
	const t = e.map((e) => e.replace(/\\/gu, "/")).filter((e) => Qe(e, !0)), a = new Set(t.map(tt).filter((e) => null !== e)), r = /* @__PURE__ */ new Map();
	for (const n of t) {
		const e = et(n);
		if (null === e || !a.has(e)) continue;
		const t = r.get(e) ?? [];
		t.push(n.slice(e ? e.length + 1 : 0)), r.set(e, t);
	}
	for (const [n, s] of r) {
		const e = n ? nt(n) : void 0, a = [...new Set(s.filter((e) => e.split("/").length > 2).map((e) => e.split("/")[1] ?? "").filter(Boolean))].sort().map((e) => `meta/${e}`).join(", ") || "no part folders", r = n ? `${n}/` : "";
		if (!t.some((e) => e.startsWith(r) && "config.csv" === e.slice(r.length).toLowerCase())) throw new ze(`The GGIR output has no config.csv (found ${a}). GGIR writes config.csv next to meta/; add it to the folder and import again.`, e);
		for (const t of [
			"basic",
			"ms2.out",
			"ms3.out",
			"ms4.out",
			"ms5.out"
		]) {
			const a = `meta/${t}/`, r = s.filter((e) => e.startsWith(a)).map((e) => e.slice(a.length)).find((e) => e.includes("/"))?.split("/")[0];
			if (r) throw new ze(`meta/${t} contains a folder ${r}/ instead of ${"basic" === t ? "meta_*.RData" : "*.RData"} files: move its files up one level, as GGIR writes them.`, e);
		}
		if (!s.some((e) => /^meta\/basic\/meta_[^/]+\.(?:rdata|rda)$/iu.test(e))) throw new ze(`meta/basic ${s.some((e) => e.startsWith("meta/basic/")) ? "contains no meta_*.RData files" : "is missing"} (found ${a}). Part 1 files (meta_*.RData) are needed.`, e);
	}
}
function rt(e) {
	return {
		...e.desiredTz ? { desiredtz: e.desiredTz } : {},
		...e.configTz ? { configtz: e.configTz } : {},
		..."boolean" == typeof e.imputeTimegaps ? { imputeTimegaps: e.imputeTimegaps } : {}
	};
}
function nt(e) {
	const t = e.replace(/\\/g, "/").split("/");
	return t[t.length - 1] ?? e;
}
function st() {
	return s;
}
s.join(" · ");
const ot = [
	{
		key: "native_raw",
		label: "Native raw / archive",
		modeLabel: "Local parser",
		items: [
			"ActiGraph CSV / GT3X",
			"GENEActiv raw CSV / BIN",
			"NHANES PAX80 archives"
		]
	},
	{
		key: "mapped_vendor_csv",
		label: "Mapped vendor CSV",
		modeLabel: "Column map",
		items: [
			"ActLumus CSV",
			"ActTrust CSV",
			"Axivity",
			"ActivPAL",
			"Actical",
			"Philips Actiwatch / Spectrum CSV",
			"MotionWatch",
			"Activinsights",
			"Movisens",
			"Shimmer",
			"GaitUp",
			"Consumer wearables",
			"Other vendor epoch CSV"
		]
	},
	{
		key: "derived_sidecars",
		label: "Derived CSV imports",
		modeLabel: "Mapped or injected",
		items: [
			"GGIR meta RData",
			"GGIR output folder or .zip (Parts 1–5 + config.csv)",
			"GGIR 60s epoch CSV",
			"GGIR Part 5 day summaries",
			"MIMS metric columns"
		]
	},
	{
		key: "server_native_light",
		label: "Server-native light",
		modeLabel: "Server parser",
		items: [
			"Condor ActLumus TXT",
			"Condor ActTrust TXT",
			"CamNtech Actiwatch AWD"
		]
	}
].filter((e) => "Server parser" !== e.modeLabel);
function it(e) {
	return void 0 !== (t = e, Ye.get(t)) || function(e, t = st()) {
		const a = e.toLowerCase();
		return Qe(e) && t.some((e) => a.endsWith(e));
	}(e.name, st());
	var t;
}
function ct(e) {
	return new Promise((t) => {
		let a = !1;
		const r = (e) => {
			a || (a = !0, window.removeEventListener("focus", n), t(e));
		};
		e.addEventListener("change", () => {
			const t = Array.from(e.files ?? []);
			r({ files: t });
		}), e.addEventListener("cancel", () => r({ cancelled: !0 }));
		const n = () => {
			setTimeout(() => {
				a || 0 !== (e.files?.length ?? 0) || r({ cancelled: !0 });
			}, 200);
		};
		window.addEventListener("focus", n);
	});
}
(ot[0]?.items ?? []).join(", "), ot.slice(1).map((e) => e.label).join(" and ");
const lt = [
	".csv",
	".gt3x",
	".bin",
	".rdata",
	".rda",
	".zip",
	".tar.bz2",
	".tbz2"
];
function ut(e) {
	const t = document.createElement("input");
	t.type = "file", t.accept = st().join(","), e && (t.multiple = !0);
	const a = ct(t);
	return t.click(), a.then((e) => "cancelled" in e ? null : e.files);
}
function dt() {
	const e = document.createElement("input");
	e.type = "file", e.setAttribute("webkitdirectory", "");
	const t = ct(e);
	return e.click(), t.then((e) => {
		if ("cancelled" in e) return null;
		const { files: t } = e;
		try {
			at(t.map(Ke));
		} catch (a) {
			if (!(a instanceof ze)) throw a;
			return [qe(a.folderName ?? "GGIR output folder", a)];
		}
		return t.filter((e) => it(e) && Qe(Ke(e)));
	});
}
async function pt(e, t = e.name, a) {
	try {
		const r = [], n = await ft(e, t, r, a);
		return at(r), n.length ? n : [qe(e.name, !1)];
	} catch (r) {
		return [qe(e.name, !(r instanceof ze) || r)];
	}
}
async function ft(e, t, a, r) {
	if (!Qe(t)) return [];
	const n = [], s = "function" == typeof e.values ? e.values() : e;
	for await (const o of s) {
		const e = o, s = t ? `${t}/${e.name}` : e.name;
		if (a.push("directory" === e.kind ? `${s}/` : s), r?.(a.length), Qe(s)) {
			if ("file" === e.kind && "function" == typeof e.getFile && it(e)) {
				const t = await e.getFile();
				Je(t, s), n.push(t);
				continue;
			}
			"directory" === e.kind && n.push(...await ft(e, s, a, r));
		}
	}
	return n;
}
function mt(e) {
	return e.isFile ? {
		kind: "file",
		name: e.name,
		getFile: () => new Promise((t, a) => e.file(t, a))
	} : {
		kind: "directory",
		name: e.name,
		values: () => wt(e.createReader())
	};
}
async function* wt(e) {
	const t = await new Promise((t, a) => e.readEntries(t, a));
	t.length && (yield* t.map(mt), yield* wt(e));
}
const ht = "auto-update is unavailable on the web platform";
let _t = null;
let gt = null;
function yt() {
	return gt || (gt = globalThis.isTauri ? {
		kind: "tauri",
		routerKind: "hash",
		capabilities: {
			tauri: !0,
			autoUpdate: "true" === {
				BASE_URL: "/sleep-scoring-wasm/",
				DEV: !1,
				MODE: "production",
				PROD: !0,
				SSR: !1,
				VITE_BASE_PATH: "/sleep-scoring-wasm/",
				VITE_FORCE_LOCAL_MODE: "true"
			}.VITE_ENABLE_TAURI_UPDATER
		},
		files: {
			pickFiles: (e) => async function(e) {
				const { open: t } = await import("./dist-js-DtyocxnK.js"), a = await t({
					multiple: e,
					directory: !1,
					filters: [{
						name: "Activity Files",
						extensions: _e
					}]
				});
				if (null == a) return null;
				const r = Array.isArray(a) ? a : [a], n = [];
				for (const s of r) n.push(await we.fromPath(s));
				return n.length > 0 ? n : null;
			}(e),
			pickFolder: () => async function() {
				const { open: e } = await import("./dist-js-DtyocxnK.js"), { invoke: t } = await import("./core-B0WeKh9d.js"), a = await e({
					directory: !0,
					multiple: !1
				});
				if ("string" != typeof a) return null;
				const r = await t("list_supported_files", { dir: a }), n = [];
				for (const s of r) n.push(await we.fromPath(s));
				return n.length > 0 ? n : null;
			}(),
			saveBlob: (e, t, a) => async function(e, t, a) {
				const { save: r } = await import("./dist-js-DtyocxnK.js"), { invoke: n } = await import("./core-B0WeKh9d.js");
				a?.throwIfAborted();
				const s = await C(r({ defaultPath: t }), a);
				if (a?.throwIfAborted(), !s) return null;
				const o = new Uint8Array(await C(e.arrayBuffer(), a)), i = Array.from(o);
				return a?.throwIfAborted(), await n("save_file_atomic", {
					path: s,
					bytes: i
				}), s;
			}(e, t, a)
		},
		fileDrop: { subscribe: (e) => function(e) {
			let t = null, a = !1;
			return (async () => {
				const { getCurrentWindow: r } = await import("./window-uHC0_7hY.js"), n = await r().onDragDropEvent(async (t) => {
					const a = t.payload;
					"enter" === a.type ? e({ phase: "enter" }) : "over" === a.type ? e({ phase: "over" }) : "leave" === a.type ? e({ phase: "leave" }) : "drop" === a.type && e({
						phase: "drop",
						sources: await Promise.all(a.paths.map((e) => we.fromPath(e)))
					});
				});
				a ? n() : t = n;
			})(), () => {
				a = !0, t?.();
			};
		}(e) },
		shell: {
			revealInFolder: async (e) => {
				try {
					await async function(e) {
						const { invoke: t } = await import("./core-B0WeKh9d.js");
						await t("plugin:opener|reveal_item_in_dir", { path: e });
					}(e);
				} catch (t) {
					console.warn("[platform] revealInFolder failed:", t);
				}
			},
			notify: async ({ title: e, body: t }) => {
				try {
					await async function(e, t) {
						const { invoke: a } = await import("./core-B0WeKh9d.js");
						let r = await a("plugin:notification|is_permission_granted");
						r || (r = "granted" === await a("plugin:notification|request_permission")), r && await a("plugin:notification|notify", { options: t ? {
							title: e,
							body: t
						} : { title: e } });
					}(e, t);
				} catch (a) {
					console.warn("[platform] notify failed:", a);
				}
			},
			setProgress: async (e) => {
				try {
					await async function(e) {
						const { getCurrentWindow: t, ProgressBarStatus: a } = await import("./window-uHC0_7hY.js"), r = t();
						if (null === e) await r.setProgressBar({ status: a.None });
						else {
							const t = Math.max(0, Math.min(100, Math.round(100 * e)));
							await r.setProgressBar({
								status: a.Normal,
								progress: t
							});
						}
					}(e);
				} catch (t) {
					console.warn("[platform] setProgress failed:", t);
				}
			},
			onCloseRequested: (e) => function(e) {
				let t = null, a = !1;
				return (async () => {
					const { getCurrentWindow: r } = await import("./window-uHC0_7hY.js"), n = await r().onCloseRequested(async (t) => {
						await e() || t.preventDefault();
					});
					a ? n() : t = n;
				})(), () => {
					a = !0, t?.();
				};
			}(e),
			onMenuAction: (e) => function(e) {
				let t = null, a = !1;
				return (async () => {
					const { listen: r } = await import("./event-BInfzwX-.js"), n = await r("menu-action", (t) => e(t.payload));
					a ? n() : t = n;
				})(), () => {
					a = !0, t?.();
				};
			}(e)
		},
		workspace: {
			switchWorkspace: (e) => async function(e) {
				const { invoke: t } = await import("./core-B0WeKh9d.js");
				await t("switch_workspace", { workspaceId: e });
			}(e),
			deleteWorkspace: (e) => async function(e) {
				const { invoke: t } = await import("./core-B0WeKh9d.js");
				await t("delete_workspace_db", { workspaceId: e });
			}(e),
			saveMarkers: (e) => async function(e) {
				const { invoke: t } = await import("./core-B0WeKh9d.js");
				await t("save_markers_to_sqlite", e);
			}(e),
			configurePeerGroup: (e, t) => async function(e, t) {
				const { invoke: a } = await import("./core-B0WeKh9d.js");
				await a("set_group_config", {
					groupHash: await he(e),
					username: t
				});
			}(e, t),
			computeGroupHash: (e) => he(e)
		},
		updater: {
			check: () => async function() {
				const { check: e } = await import("./dist-js-D7-Ut_gj.js"), t = await e();
				return t?.available ? (_t = t, {
					version: t.version,
					currentVersion: t.currentVersion,
					...t.body ? { body: t.body } : {},
					...t.date ? { date: t.date } : {}
				}) : (_t = null, null);
			}(),
			downloadAndInstall: (e) => async function(e) {
				if (!_t) throw new Error("No pending update. Call checkForUpdate() first.");
				const t = _t;
				let a = 0;
				await t.downloadAndInstall((t) => {
					if (e) switch (t.event) {
						case "Started":
							a = t.data.contentLength ?? 0, e({
								chunkSize: 0,
								total: a
							});
							break;
						case "Progress":
							e({
								chunkSize: t.data.chunkLength ?? 0,
								total: a
							});
							break;
						case "Finished": e({
							chunkSize: 0,
							total: a
						});
					}
				}), _t = null;
			}(e),
			relaunch: () => async function() {
				const { relaunch: e } = await import("./dist-js-Hcq9KDqU.js");
				if (!e) throw new Error("Relaunch API is unavailable");
				await e();
			}()
		}
	} : {
		kind: "web",
		routerKind: "browser",
		capabilities: {
			tauri: !1,
			autoUpdate: !1
		},
		files: {
			pickFiles: (e) => async function(e) {
				if ("showOpenFilePicker" in window) try {
					const t = await window.showOpenFilePicker({
						types: [{
							description: "Activity Files",
							accept: {
								"text/csv": [".csv"],
								"application/octet-stream": [
									".gt3x",
									".bin",
									".rdata",
									".rda"
								],
								"application/zip": [".gt3x", ".zip"],
								"application/x-bzip2": [".tar.bz2", ".tbz2"],
								...Object.fromEntries(st().filter((e) => !lt.includes(e)).map((e) => [`application/x-${e.slice(1)}`, [e]]))
							}
						}],
						multiple: e
					}), a = [];
					for (const e of t) a.push(await e.getFile());
					return a.length > 0 ? a : null;
				} catch (t) {
					return t instanceof DOMException && "AbortError" === t.name ? null : (console.warn("[web-dialogs] showOpenFilePicker failed, falling back to <input>:", t instanceof Error ? t.message : t), ut(e));
				}
				return ut(e);
			}(e),
			pickFolder: (e) => async function(e) {
				if ("showDirectoryPicker" in window) try {
					const t = await window.showDirectoryPicker();
					return await pt(t, t.name, e);
				} catch (t) {
					return t instanceof DOMException && "AbortError" === t.name ? null : (console.warn("[web-dialogs] showDirectoryPicker failed, falling back to <input>:", t instanceof Error ? t.message : t), dt());
				}
				return dt();
			}(e),
			saveBlob: (e, t, a) => (a?.throwIfAborted(), function(e, t) {
				const a = URL.createObjectURL(e), r = document.createElement("a");
				r.href = a, r.download = t, document.body.appendChild(r), r.click(), document.body.removeChild(r), setTimeout(() => URL.revokeObjectURL(a), 1e3);
			}(e, t), Promise.resolve(null))
		},
		fileDrop: { subscribe: (e, t) => {
			const a = t ?? window, r = (e) => Array.from(e.dataTransfer?.types ?? []).includes("Files"), n = (e) => Array.from(e.dataTransfer?.items ?? []).filter((e) => "file" === e.kind).map((e) => {
				const t = e.getAsFile?.();
				return e.webkitGetAsEntry?.()?.isDirectory ? {
					name: t?.name,
					type: e.type,
					directory: !0
				} : t ? {
					name: t.name,
					type: e.type
				} : { type: e.type };
			}), s = (t) => {
				const a = t;
				r(a) && (a.preventDefault(), e({
					phase: "enter",
					items: n(a)
				}));
			}, o = (t) => {
				const a = t;
				r(a) && (a.preventDefault(), e({
					phase: "over",
					items: n(a)
				}));
			}, i = (t) => {
				r(t) && e({ phase: "leave" });
			}, c = (t) => {
				const a = t;
				r(a) && (a.preventDefault(), a.dataTransfer && async function(e) {
					const t = Array.from(e.items ?? []).filter((e) => "file" === e.kind).map((e) => {
						const t = e, a = e.webkitGetAsEntry?.(), r = e.getAsFile?.();
						return {
							handle: t.getAsFileSystemHandle?.(),
							legacy: a,
							file: r
						};
					});
					return t.length ? (await Promise.all(t.map(async (e) => {
						const t = await e.handle?.catch(() => null) ?? (e.legacy ? mt(e.legacy) : null);
						return "directory" === t?.kind ? pt(t) : t?.getFile ? [await t.getFile().catch(() => qe(t.name, !0))] : e.file ? [e.file] : [qe(e.legacy?.name ?? "GGIR output folder", !0)];
					}))).flat() : Array.from(e.files);
				}(a.dataTransfer).then((t) => e({
					phase: "drop",
					sources: t
				})));
			};
			return a.addEventListener("dragenter", s), a.addEventListener("dragover", o), a.addEventListener("dragleave", i), a.addEventListener("drop", c), () => {
				a.removeEventListener("dragenter", s), a.removeEventListener("dragover", o), a.removeEventListener("dragleave", i), a.removeEventListener("drop", c);
			};
		} },
		shell: {
			revealInFolder: () => Promise.resolve(),
			notify: ({ title: e, body: t }) => ("undefined" != typeof Notification && "granted" === Notification.permission && new Notification(e, t ? { body: t } : void 0), Promise.resolve()),
			setProgress: () => Promise.resolve(),
			onCloseRequested: (e) => {
				const t = (t) => {
					!1 === e() && (t.preventDefault(), Reflect.set(t, "returnValue", ""));
				};
				return window.addEventListener("beforeunload", t), () => window.removeEventListener("beforeunload", t);
			},
			onMenuAction: () => () => {}
		},
		workspace: {
			switchWorkspace: () => Promise.resolve(),
			deleteWorkspace: () => Promise.resolve(),
			saveMarkers: () => Promise.resolve(),
			configurePeerGroup: () => Promise.resolve(),
			computeGroupHash: (e) => u(e)
		},
		updater: {
			check: () => Promise.resolve(null),
			downloadAndInstall: () => Promise.reject(/* @__PURE__ */ new Error(ht)),
			relaunch: () => Promise.reject(/* @__PURE__ */ new Error(ht))
		}
	}), gt;
}
const vt = "sleep-scoring-workspaces-wasm", bt = "sleep-scoring-active-workspace-wasm", kt = `${vt}.migrated`;
function St(e) {
	return `workspace-restore-committed:${e}`;
}
let Et = null;
const Rt = /* @__PURE__ */ new Set();
const At = {
	getItem: async (e) => {
		let t;
		await (Et || (Et = (async () => {
			try {
				if ("undefined" == typeof localStorage) return;
				if (0 === await j.workspaces.count()) {
					const e = localStorage.getItem(vt);
					if (e) {
						const t = JSON.parse(e)?.state?.workspaces;
						Array.isArray(t) && t.length > 0 && await x(t), localStorage.removeItem(vt);
					}
				}
				await async function() {
					try {
						const e = globalThis.indexedDB, t = await j.workspaces.toArray();
						if (await Promise.all(t.map(async (e) => {
							e.restoreLock && globalThis.navigator?.locks?.request && await navigator.locks.request(e.restoreLock, { ifAvailable: !0 }, async (t) => {
								if (!t) return;
								const [a, r] = await Promise.all([j.workspaces.get(e.id), j.uiSettings.get(St(e.dbName))]);
								a?.restoreLock === e.restoreLock && r?.value !== e.restoreLock && await Ot.getState().discardUncommittedWorkspace(e.id);
							});
						})), !e?.databases) return;
						const a = (await e.databases()).map((e) => e.name).filter((e) => !!e), r = a.filter((e) => "SleepScoringDB" === e || /^SleepScoringDB-.+/.test(e));
						if (0 === r.length) return;
						const n = new Set((await j.workspaces.toArray()).map((e) => e.dbName)), s = await W(), i = "SleepScoringGlobal";
						if (a.includes(i)) {
							const e = new L(i);
							try {
								for (const t of await e.workspaces.toArray()) n.add(t.dbName);
								for (const t of await W(e)) s.add(t);
							} catch {} finally {
								e.close();
							}
						}
						const { deleteWorkspaceDb: c } = await Promise.resolve().then(() => Tt);
						await Promise.all(r.filter((e) => s.has(e)).map(c));
						const l = r.filter((e) => !n.has(e) && !s.has(e));
						if (0 === l.length) return;
						const u = (/* @__PURE__ */ new Date()).toISOString(), p = await x(l.map((e) => ({
							id: "SleepScoringDB" === e ? o() : e.slice(15),
							displayName: "Recovered data",
							serverUrl: "",
							dbName: e,
							createdAt: u,
							lastAccessedAt: u
						})));
						console.warn(`workspace-store: re-registered ${p} orphaned local workspace database(s)`);
					} catch (e) {
						console.warn("workspace-store: orphan recovery failed", e);
					}
				}(), localStorage.setItem(kt, "1");
			} catch (e) {
				console.warn("workspace-store: migration failed", e);
			}
		})(), Et));
		try {
			t = await j.workspaces.toArray();
		} catch (a) {
			return console.warn("workspace-store: the workspace registry cannot be read", a), { state: {
				workspaces: [],
				storageUnavailable: !0
			} };
		}
		return t.sort((e, t) => t.lastAccessedAt > e.lastAccessedAt ? 1 : -1), { state: {
			workspaces: t,
			storageUnavailable: !1
		} };
	},
	setItem: async (e, t) => {
		const a = t.state.workspaces ?? [], r = [...Rt];
		await x(a, r);
		for (const n of r) Rt.delete(n);
	},
	removeItem: async (e) => {
		await j.workspaces.clear();
	}
};
function It(e) {
	Rt.add(e), Ot.setState({ workspaces: Ot.getState().workspaces.filter((t) => t.id !== e) });
}
const Ot = Y()(fe((e, t) => ({
	workspaces: [],
	storageUnavailable: !1,
	createWorkspace: (t, a, r) => {
		const n = o(), s = {
			...r ? { restoreLock: r } : {},
			id: n,
			displayName: a,
			serverUrl: t.replace(/\/+$/, ""),
			dbName: `SleepScoringDB-${n}`,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			lastAccessedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		return e((e) => ({ workspaces: [...e.workspaces, s] })), s;
	},
	commitWorkspaceRestore: async (a) => {
		const r = t().workspaces.find((e) => e.id === a);
		if (!r) throw new Error("The restored workspace is no longer registered.");
		const { restoreLock: n, ...s } = r;
		await j.transaction("rw", j.workspaces, j.uiSettings, async () => {
			await j.uiSettings.put({
				key: St(r.dbName),
				value: n,
				updatedAt: Date.now()
			}), await x([s]);
		}), e((e) => ({ workspaces: e.workspaces.map((e) => e.id === a ? s : e) }));
	},
	createWorkspaceWithId: (t) => {
		e((e) => ({ workspaces: [...e.workspaces, t] }));
	},
	deleteWorkspace: async (e) => {
		const { runWorkspaceScopeChange: a } = await import("./workspace-switch-BI_ayKxV.js").then((e) => e.t);
		return a(async () => {
			if (e === Ct()) return void console.warn("Cannot delete the currently active workspace");
			const a = t().workspaces.find((t) => t.id === e);
			let r;
			if (a?.dbName) {
				const { preserveWorkspaceAuditLog: e } = await import("./workspace-audit-preservation-DxvPR0XJ.js"), { auditLog: t } = await import("./audit-log-BZ4oWV43.js").then((e) => e.n), { useSleepScoringStore: n } = await import("./store-D44nsaQj.js").then((e) => e.n), { username: s, sitePassword: o } = n.getState(), i = await e(a, {
					username: s,
					sitePassword: o
				}), { SleepScoringDB: c } = await import("./schema-CuSEBD8u.js").then((e) => e.u), { countWorkspaceContents: l } = await import("./workspace-contents-BsouZrY4.js"), u = new c(a.dbName);
				let d;
				try {
					await u.open(), r = await l(u), d = await u.files.toArray();
				} finally {
					u.close();
				}
				const { deleteWorkspaceDb: p } = await Promise.resolve().then(() => Tt);
				await p(a.dbName);
				const { deleteMigrationBackups: f } = await import("./pre-migration-backup-C84hyXIN.js").then((e) => e.t);
				await f(a.dbName);
				const { deleteFileCaches: m } = await import("./store-D44nsaQj.js").then((e) => e.p);
				await m(d), t.recordAppEvent("workspace_deleted", {
					workspaceId: a.id,
					displayName: a.displayName,
					auditRowsTotal: i.total,
					auditRowsReplicated: i.replicated,
					auditRowsDestroyed: i.destroyed,
					...i.reason ? { reason: i.reason } : {}
				}), await t.settleWrites();
			}
			It(e);
			try {
				const t = `sleep-scoring-storage-${e}`;
				localStorage.removeItem(t);
				const a = `sleep-scoring-prefs-${e}-`, r = [];
				for (let e = 0; e < localStorage.length; e++) {
					const t = localStorage.key(e);
					t?.startsWith(a) && r.push(t);
				}
				for (const e of r) localStorage.removeItem(e);
			} catch (n) {
				console.warn("Failed to clean up localStorage:", n);
			}
			return yt().capabilities.tauri && yt().workspace.deleteWorkspace(e).catch((e) => {
				console.warn("Failed to delete Tauri workspace DB:", e);
			}), r;
		});
	},
	discardUncommittedWorkspace: async (e) => {
		const { runWorkspaceScopeChange: a } = await import("./workspace-switch-BI_ayKxV.js").then((e) => e.t);
		return a(async () => {
			const a = t().workspaces.find((t) => t.id === e) ?? await j.workspaces.get(e);
			if (a?.dbName) {
				const { deleteWorkspaceDb: e } = await Promise.resolve().then(() => Tt);
				await e(a.dbName);
				const { deleteMigrationBackups: t } = await import("./pre-migration-backup-C84hyXIN.js").then((e) => e.t);
				await t(a.dbName);
			}
			It(e);
		});
	},
	recordWorkspaceBackup: (t, a) => {
		e((e) => ({ workspaces: e.workspaces.map((e) => e.id === t ? {
			...e,
			lastBackup: a
		} : e) }));
	},
	recordWorkspaceRestore: (t, a) => {
		e((e) => ({ workspaces: e.workspaces.map((e) => e.id === t ? {
			...e,
			lastRestore: a
		} : e) }));
	},
	renameWorkspace: (t, a) => {
		const r = a.trim();
		"" !== r && e((e) => ({ workspaces: e.workspaces.map((e) => e.id === t ? {
			...e,
			displayName: r
		} : e) }));
	},
	setWorkspaceUsername: (t, a) => {
		const r = a.trim();
		e((e) => ({ workspaces: e.workspaces.map((e) => {
			if (e.id !== t) return e;
			const { lastUsername: a, ...n } = e;
			return "" === r ? n : {
				...n,
				lastUsername: r
			};
		}) }));
	},
	updateLastAccessed: (t) => {
		e((e) => ({ workspaces: e.workspaces.map((e) => e.id === t ? {
			...e,
			lastAccessedAt: (/* @__PURE__ */ new Date()).toISOString()
		} : e) }));
	},
	getWorkspace: (e) => t().workspaces.find((t) => t.id === e)
}), {
	name: vt,
	storage: At,
	onRehydrateStorage: () => (e, t) => {
		if (!t) try {
			(async function() {
				N.basePath;
			})();
		} catch (a) {
			console.warn("[workspace-store] serverUrl normalization failed:", a);
		}
	}
})), Pt = Y()(() => ({
	activeId: (() => {
		try {
			return sessionStorage.getItem(bt);
		} catch {
			return null;
		}
	})(),
	activating: !1
}));
function Ct() {
	return Pt.getState().activeId;
}
var Tt = a({
	closeDb: () => $t,
	deleteWorkspaceDb: () => Mt,
	getDb: () => Ht,
	hasOpenDb: () => zt,
	isWorkspaceDbDeleted: () => xt,
	subscribeDbChanges: () => Ft
});
let Dt = null;
const Nt = /* @__PURE__ */ new Set(), Lt = /* @__PURE__ */ new Set(), jt = /* @__PURE__ */ new Set();
function Gt(e) {
	Lt.add(e);
	for (const t of Object.values(Q.getState().jobs)) t.workspaceId === e && t.controller.abort();
	for (const t of Nt) {
		const a = t.deref();
		a && a.name !== e || Nt.delete(t), a?.name === e && a.close({ disableAutoOpen: !0 });
	}
}
async function Mt(e) {
	const t = {
		key: M(e),
		value: !0,
		updatedAt: Date.now()
	};
	await j.transaction("rw", j.workspaces, j.uiSettings, async () => {
		await j.uiSettings.put(t);
		const a = await j.workspaces.toArray();
		await j.workspaces.bulkDelete(a.filter((t) => t.dbName === e).map((e) => e.id));
	}), Gt(e), Wt(e);
	const { workspaces: a } = Ot.getState();
	a.some((t) => t.dbName === e) && Ot.setState({ workspaces: a.filter((t) => t.dbName !== e) });
	try {
		const { publishWorkspaceDeletion: e } = await import("./project-revision-L_JZqL5Z.js").then((e) => e.n);
		e();
	} catch {}
	try {
		await c.delete(e);
	} catch {
		console.warn("Workspace data will be removed the next time the app starts.");
	}
}
function Wt(e) {
	Dt?.name === e && (function() {
		try {
			sessionStorage.removeItem(bt);
		} catch {}
		Pt.setState({
			activeId: null,
			activating: !1
		});
	}(), $t());
}
function xt(e) {
	if (Lt.has(e)) return !0;
	const t = Ot.getState().workspaces.some((t) => t.dbName === e);
	return t && jt.add(e), !t && jt.has(e);
}
c.addons.push((e) => {
	Nt.add(new WeakRef(e));
	const t = e.open.bind(e);
	e.open = () => Lt.has(e.name) ? c.Promise.reject(new c.DatabaseClosedError()) : t().catch((t) => {
		throw Lt.has(e.name) && (Gt(e.name), Wt(e.name)), t;
	});
	const a = () => {
		if (e instanceof l) return c.waitFor(j.uiSettings.get(M(e.name))).then((t) => {
			if (t) throw Lt.add(e.name), new c.DatabaseClosedError();
		});
	};
	e.on("populate", a), e.on("ready", a, !0), e.on("versionchange", (t) => {
		if (null === t.newVersion && e instanceof l) return Gt(e.name), Wt(e.name), !1;
	}), Lt.has(e.name) && e.close({ disableAutoOpen: !0 });
});
const Ut = /* @__PURE__ */ new Set();
function Ft(e) {
	return Ut.add(e), () => Ut.delete(e);
}
function Vt() {
	for (const e of Ut) try {
		e();
	} catch {}
}
function Ht() {
	if (!Dt) {
		const e = "undefined" != typeof window ? Ct() : null;
		if (e) {
			const t = Ot.getState().getWorkspace(e);
			return Dt = new l(t?.dbName ?? `SleepScoringDB-${e}`), Vt(), Dt;
		}
		throw new Error("No workspace database is active. Call switchDb() first.");
	}
	return Dt;
}
function zt() {
	return null !== Dt;
}
function $t() {
	Dt && (Dt.close(), Dt = null), Vt();
}
if ("undefined" != typeof window) {
	const e = () => {
		const e = Dt;
		e && import("./workspace-switch-BI_ayKxV.js").then((e) => e.t).then(({ runWorkspaceScopeChange: t }) => t(() => {
			Dt === e && e.close({ disableAutoOpen: !1 });
		})).catch(() => {});
	};
	window.addEventListener("pagehide", e), window.addEventListener("freeze", e), window.addEventListener("pageshow", (e) => {
		const t = Dt;
		e.persisted && t && import("./workspace-switch-BI_ayKxV.js").then((e) => e.t).then(async ({ workspaceActivation: e }) => {
			await e;
			const { useSleepScoringStore: a } = await import("./store-D44nsaQj.js").then((e) => e.n), { username: r, selectedStudyId: n, isAuthenticated: s } = a.getState();
			if (Dt !== t || !s || !r) return;
			const { recoverWorkspaceDiaryBindings: o } = await import("./staged-diary-import-EwtnY2Mk.js");
			Dt === t && await o(t, {
				username: r,
				studyId: n
			});
		}).catch(() => {
			console.warn("[diary] Page resume recovery could not start.", { failed: 1 });
		});
	});
}
export { b as $, Le as A, K as B, Oe as C, De as D, Te as E, He as F, q as G, te as H, Ve as I, H as J, X as K, de as L, Ge as M, Me as N, Ne as O, We as P, C as Q, le as R, Ie as S, Ce as T, ee as U, Z as V, Q as W, N as X, F as Y, P as Z, Se as _, Ct as a, d as at, Re as b, ze as c, O as ct, rt as d, S as dt, p as et, ge as f, ke as g, be as h, Ft as i, m as it, je as j, Ue as k, Ze as l, k as lt, ve as m, zt as n, R as nt, Ot as o, h as ot, ye as p, Y as q, xt as r, w as rt, yt as s, f as st, Ht as t, E as tt, Xe as u, I as ut, xe as v, Pe as w, Ae as x, Ee as y, fe as z };
