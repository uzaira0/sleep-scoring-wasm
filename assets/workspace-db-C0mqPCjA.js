import { An as e, Dn as t, Jt as a, Mn as r, On as n, m as s, o, p as i } from "./schema-B_tCLPTi.js";
import { o as c } from "./content-hash-LIzlxz9S.js";
const l = "ggirImportRefusals", u = "already-imported-different-content", d = "local-storage", p = "GGIR output folder", f = "ggir-folder", m = "import-in-progress", w = {
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
	[d]: {
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
	[m]: {
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
	[u]: {
		label: "already imported with different content; export your work first then delete the earlier import in Data Settings before importing its replacement",
		durableRefusal: !0
	},
	[f]: {
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
	"processing-runtime": {
		label: "processing runtime",
		durableRefusal: !1
	}
}, _ = new Map(Object.entries(w).map(([e, { label: t }]) => [t.toLowerCase(), e])), h = /categor(?:y|ies): ([a-z0-9; ]+?)(?: \(\d+\))?[.,]/u;
const y = Object.keys({
	workspace: null,
	"csv-settings": "/csv-import",
	"unsupported-format": "/csv-import",
	"empty-file": null,
	"invalid-data": "/csv-import",
	[d]: null,
	permission: null,
	"browser-memory": null,
	"time-limit": null,
	[m]: null,
	"decoder-crash": null,
	"ggir-no-part4": null,
	"ggir-not-read": null,
	"ggir-corrected-not-available": null,
	[u]: null,
	[f]: null,
	"aw5-unreadable": null,
	"aw5-memory": null,
	"stale-app": null,
	"processing-runtime": "/settings/processing"
});
function v(e) {
	return t = function(e) {
		if (e instanceof Error && "category" in e && "string" == typeof e.category && Object.hasOwn(w, e.category)) return e.category;
		const t = function(e) {
			try {
				return e instanceof Error ? e.message : "string" == typeof e ? e : "";
			} catch {
				return "";
			}
		}(e).toLowerCase();
		if (Object.hasOwn(w, t)) return t;
		const a = _.get(t) ?? _.get(h.exec(t)?.[1] ?? "");
		return void 0 !== a ? a : t.includes("timed out during") ? "time-limit" : /failed to fetch dynamically imported module|error loading dynamically imported module|importing a module script failed/u.test(t) ? "stale-app" : t.includes("already being imported") ? "import-in-progress" : t.startsWith("wasm panic in ") ? "decoder-crash" : /workspace|scope changed|no longer active/u.test(t) ? "workspace" : /csv settings|column-mapped|column mapping|mapping .*required|settings .*incomplete|review data settings/u.test(t) ? "csv-settings" : /unsupported|not supported|unimplemented source-profile|unknown file (?:type|format)/u.test(t) ? "unsupported-format" : /out of memory|allocation failed|invalid array length|exceeds the v1 limit|too large (?:to process|for in-browser memory)/u.test(t) || /\bunreachable\b/u.test(t) && !t.startsWith("wasm panic in ") ? "browser-memory" : /empty|no data rows|did not contain any .*epochs/u.test(t) ? "empty-file" : /quota|indexeddb|dexie|database|storage|persist|saving|disk/u.test(t) ? "local-storage" : /permission|denied|unauthori[sz]ed|not allowed/u.test(t) ? "permission" : /parse|csv|row|column|timestamp|header|date|\btime\b|corrupt|invalid|malformed|decompress|archive|rdata/u.test(t) ? "invalid-data" : "processing-runtime";
	}(e), w[t].label;
	var t;
}
const b = [
	"parse",
	"score",
	"nonwear",
	"save",
	"variants"
], k = "A recording already in this workspace was offered again, changed. It was not imported, and nothing was overwritten: the file and its scoring are as they were. To use the changed recording, export your work first, then delete the file and import it again.", S = {
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
function E(e, t) {
	if (null === t) return -1;
	const [a, r] = S[e];
	return a + Math.max(0, Math.min(1, t)) * (r - a);
}
function R(e, t) {
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
function A(e) {
	const t = e?.reason;
	return t instanceof Error ? t : new DOMException("Job cancelled", "AbortError");
}
function I(e, t) {
	return t ? t.aborted ? Promise.reject(A(t)) : new Promise((a, r) => {
		const n = () => r(A(t));
		t.addEventListener("abort", n, { once: !0 }), e.then(a, r).finally(() => t.removeEventListener("abort", n));
	}) : e;
}
Object.keys(S);
const O = "undefined" != typeof process && !1;
let P = !1;
const C = {
	get basePath() {
		const e = "/sleep-scoring-wasm/", t = e.replace(/\/$/, ""), a = "undefined" != typeof window ? window.__CONFIG__?.basePath : void 0;
		return null == a ? t : "" !== t && a !== t ? (P || (P = !0, console.error(`[config] config.js basePath "${a}" does not match the build base "${e}"; using "${t}". Fix config.js or rebuild with VITE_BASE_PATH="${a}/".`)), t) : a;
	},
	get apiBaseUrl() {
		return `${this.basePath}/api/v1`;
	},
	get isDev() {
		return O;
	},
	get isProd() {
		return !O;
	}
};
var T = class extends t {
	workspaces;
	uiSettings;
	constructor(e) {
		super(e), this.version(1).stores({
			workspaces: "id, lastAccessedAt",
			uiSettings: "key, updatedAt"
		}), i(this);
	}
};
const D = new T("SleepScoringGlobal-wasm"), N = "workspace-deleted:";
function L(e) {
	return `${N}${e}`;
}
async function j(e = D) {
	const t = await e.uiSettings.where("key").startsWith(N).primaryKeys();
	return new Set(t.map((e) => e.slice(18)));
}
async function G(e, t = []) {
	return D.transaction("rw", D.workspaces, D.uiSettings, async () => {
		const a = await j(), r = e.filter((e) => !a.has(e.dbName));
		return t.length > 0 && await D.workspaces.bulkDelete([...t]), r.length > 0 && await D.workspaces.bulkPut(r), r.length;
	});
}
const M = (e) => {
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
};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var W = n((e) => {
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
}), x = n((e, t) => {
	t.exports = W();
}), U = r(x(), 1);
const F = (e) => e, V = (e) => {
	const t = ((e) => e ? M(e) : M)(e), a = (e) => function(e, t = F) {
		const a = U.useSyncExternalStore(e.subscribe, U.useCallback(() => t(e.getState()), [e, t]), U.useCallback(() => t(e.getInitialState()), [e, t]));
		return U.useDebugValue(a), a;
	}(t, e);
	return Object.assign(a, t), a;
}, H = (e) => e ? V(e) : V, $ = {
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
}, z = {
	QUEUED: "queued",
	RUNNING: "running",
	JOINED: "joined",
	RERUN: "rerun",
	CANCELLED: "cancelled",
	COMMITTED: "committed",
	DONE: "done",
	FAILED: "failed",
	ELSEWHERE: "elsewhere"
}, B = {
	[$.IMPORT]: "user",
	[$.REPROCESS]: "user",
	[$.SCORED_VARIANT_WARM]: "automatic",
	[$.VARIANT_RECOVERY]: "automatic",
	[$.GGIR_RECOMPUTE]: "automatic",
	[$.GGIR_RECOVERY]: "automatic",
	[$.GGIR_CORRECTED_WARM]: "user",
	[$.NIGHT_DIFFICULTY]: "automatic",
	[$.PHYSICAL_ACTIVITY]: "automatic",
	[$.PLACEMENT]: "automatic",
	[$.AUTO_SCORE]: "automatic",
	[$.PLACEMENT_RECOVERY]: "automatic",
	[$.BACKUP_EXPORT]: "user",
	[$.BACKUP_RESTORE]: "user",
	[$.RESCORE]: "user",
	[$.EXPORT]: "user",
	[$.DIARY_VALIDATE]: "user",
	[$.DIARY_REPAIR]: "user",
	[$.DIARY_IMPORT]: "user",
	[$.HDCZA_REFRESH]: "automatic",
	[$.SYNC]: "automatic",
	[$.WAL_TRIM]: "automatic",
	[$.MODEL_DOWNLOAD]: "user",
	[$.NONWEAR_IMPORT]: "user",
	[$.AUDIT_EXPORT]: "user"
};
function Y(e) {
	return "automatic" === B[e];
}
function q(e) {
	return [
		$.WAL_TRIM,
		$.PLACEMENT,
		$.PLACEMENT_RECOVERY,
		$.NIGHT_DIFFICULTY,
		$.PHYSICAL_ACTIVITY,
		$.VARIANT_RECOVERY,
		$.GGIR_RECOVERY
	].includes(e);
}
const J = H((e, t) => ({
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
		r.status === z.FAILED ? r.visible = !0 : Y(r.kind) && (r.visible = !1);
		const n = { ...e.jobs };
		r.status === z.FAILED && Reflect.deleteProperty(n, `${t}:failure`);
		const s = e.jobs[t];
		if (s?.status === z.FAILED && r.status !== z.FAILED && X(s)) {
			const e = `${t}:failure`;
			n[e] = {
				...s,
				id: e,
				noticeOnly: !0
			};
		}
		Z(r) || Reflect.deleteProperty(n, t), r.status === z.DONE && Y(r.kind) || (n[t] = r);
		const o = Object.values(n).filter((e) => !Z(e) && e.status !== z.FAILED);
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
function K(e) {
	return e.localProcessingJobId ? e.jobs[e.localProcessingJobId] : void 0;
}
function X(e) {
	return !e.noticeOnly;
}
function Z(e) {
	return e?.status === z.QUEUED || e?.status === z.RUNNING;
}
const Q = (e) => !!e.dispatchFromDevtools && "function" == typeof e.dispatch, ee = /* @__PURE__ */ new Map(), te = (e) => {
	const t = ee.get(e);
	return t ? Object.fromEntries(Object.entries(t.stores).map(([e, t]) => [e, t.getState()])) : {};
}, ae = /^at (?:new |async )?(.+?) \(/, re = /^([^@]+)@/;
function ne(e) {
	var t, a, r;
	if (!e) return;
	const n = e.split("\n"), s = n.findIndex((e) => e.includes("api.setState"));
	if (s < 0) return;
	const o = (null == (t = n[s + 1]) ? void 0 : t.trim()) || "";
	return (null == (a = ae.exec(o)) ? void 0 : a[1]) || (null == (r = re.exec(o)) ? void 0 : r[1]);
}
const se = (e, t = {}) => (a, r, n) => {
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
		const r = ee.get(a.name);
		if (r) return {
			type: "tracked",
			store: e,
			...r
		};
		const n = {
			connection: t.connect(a),
			stores: {}
		};
		return ee.set(a.name, n), {
			type: "tracked",
			store: e,
			...n
		};
	})(i, l, c);
	let p = !0;
	n.setState = (e, t, s) => {
		const l = a(e, t);
		if (!p) return l;
		const d = void 0 === s ? { type: o || ne((/* @__PURE__ */ new Error()).stack) || "anonymous" } : "string" == typeof s ? { type: s } : s;
		return void 0 === i ? (u?.send(d, r()), l) : (u?.send({
			...d,
			type: `${i}/${d.type}`
		}, {
			...te(c.name),
			[i]: n.getState()
		}), l);
	}, n.devtools = { cleanup: () => {
		u && "function" == typeof u.unsubscribe && u.unsubscribe(), ((e, t) => {
			if (void 0 === t) return;
			const a = ee.get(e);
			a && (delete a.stores[t], 0 === Object.keys(a.stores).length && ee.delete(e));
		})(c.name, i);
	} };
	const f = (...e) => {
		const t = p;
		p = !1, a(...e), p = t;
	}, m = e(n.setState, r, n);
	if ("untracked" === d.type ? u?.init(m) : (d.stores[d.store] = n, u?.init(Object.fromEntries(Object.entries(d.stores).map(([e, t]) => [e, e === d.store ? m : t.getState()])))), Q(n)) {
		const e = n.dispatch;
		n.dispatch = (...t) => {
			e(...t);
		};
	}
	return u.subscribe((e) => {
		var t;
		switch (e.type) {
			case "ACTION": return "string" != typeof e.payload ? void console.error("[zustand devtools middleware] Unsupported action format") : oe(e.payload, (e) => {
				if ("__setState" === e.type) {
					if (void 0 === i) return void f(e.state);
					1 !== Object.keys(e.state).length && console.error("\n                    [zustand devtools middleware] Unsupported __setState action format.\n                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),\n                    and value of this only key should be a state object. Example: { \"type\": \"__setState\", \"state\": { \"abc123Store\": { \"foo\": \"bar\" } } }\n                    ");
					const t = e.state[i];
					if (null == t) return;
					JSON.stringify(n.getState()) !== JSON.stringify(t) && f(t);
					return;
				}
				Q(n) && n.dispatch(e);
			});
			case "DISPATCH":
				switch (e.payload.type) {
					case "RESET": return f(m), void 0 === i ? null == u ? void 0 : u.init(n.getState()) : null == u ? void 0 : u.init(te(c.name));
					case "COMMIT": return void 0 === i ? void u?.init(n.getState()) : null == u ? void 0 : u.init(te(c.name));
					case "ROLLBACK": return oe(e.state, (e) => {
						if (void 0 === i) return f(e), void u?.init(n.getState());
						f(e[i]), u?.init(te(c.name));
					});
					case "JUMP_TO_STATE":
					case "JUMP_TO_ACTION": return oe(e.state, (e) => {
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
}, oe = (e, t) => {
	let a;
	try {
		a = JSON.parse(e);
	} catch (r) {
		console.error("[zustand devtools middleware] Could not parse the received json", r);
	}
	void 0 !== a && t(a);
};
function ie(e, t) {
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
const ce = (e) => (t) => {
	try {
		const a = e(t);
		return a instanceof Promise ? a : {
			then: (e) => ce(e)(a),
			catch(e) {
				return this;
			}
		};
	} catch (a) {
		return {
			then(e) {
				return this;
			},
			catch: (e) => ce(e)(a)
		};
	}
}, le = (e, t) => (a, r, n) => {
	let s = {
		storage: ie(() => window.localStorage),
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
		return ce(u.getItem.bind(u))(s.name).then((e) => {
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
function ue(e) {
	const t = e.split(/[/\\]/);
	return t[t.length - 1] || e;
}
var de = class e {
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
			name: ue(t),
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
async function pe(e) {
	return c(e);
}
const fe = [
	"csv",
	"gt3x",
	"bin",
	"bz2",
	"tbz2"
], me = {
	high: "high",
	medium: "medium",
	low: "low"
}, we = {
	off: "off",
	actiware: "actiware",
	screens: "screens"
}, _e = {
	minutes_immobile: "minutes_immobile",
	epochs_scored_sleep: "epochs_scored_sleep"
}, he = {
	low: "low",
	medium: "medium",
	high: "high",
	auto: "auto",
	custom: "custom"
}, ge = {
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
}, ye = {
	configured_scoring: "configured_scoring",
	actiware: "actiware"
}, ve = {
	pim: "pim",
	zcm: "zcm",
	tat: "tat",
	neishabouri: "neishabouri",
	zero_crossing: "zero_crossing",
	mad: "mad",
	hfen: "hfen"
}, be = {
	month_first: "month_first",
	day_first: "day_first"
}, ke = {
	night_date: "night_date",
	period_start_day: "period_start_day",
	explicit_only: "explicit_only",
	ask_per_night: "ask_per_night"
}, Se = {
	cannot_be_read: "cannot_be_read",
	sources_disagree: "sources_disagree",
	needs_decision: "needs_decision",
	date_filled: "date_filled",
	sources_agree: "sources_agree",
	as_written: "as_written"
}, Ee = {
	explicit_only: "explicit_only",
	sleep_date_same_day: "sleep_date_same_day",
	sleep_date_chronology: "sleep_date_chronology"
}, Re = {
	main_sleep: "main_sleep",
	naps: "naps",
	nonwear: "nonwear"
}, Ae = {
	ask: "ask",
	first_occurrence: "first_occurrence",
	mark_unusable: "mark_unusable"
}, Ie = {
	mark_unusable: "mark_unusable",
	shift_forward_hour: "shift_forward_hour"
}, Oe = {
	number_60s_epochs: "60s_epochs",
	ggir_5s: "ggir_5s"
}, Pe = {
	HDCZA: "HDCZA",
	HorAngle: "HorAngle",
	NotWorn: "NotWorn",
	MotionWare: "MotionWare",
	HLRB: "HLRB"
}, Ce = {
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
}, Te = {
	PHYSICAL_ACTIVITY: "physical_activity",
	SLEEP_DIARY: "sleep_diary",
	CSV_IMPORT: "csv_import",
	PRESET_MANAGEMENT: "preset_management",
	NONWEAR_TIME: "nonwear_time",
	CONSENSUS_REVIEW: "consensus_review",
	ANALYSIS_ISSUES: "analysis_issues"
}, De = {
	use_source_a: "use_source_a",
	use_source_b: "use_source_b",
	intersection: "intersection",
	union: "union",
	source_b_bounded_by_source_a: "source_b_bounded_by_source_a",
	sanity_clamp_source_b_to_source_a: "sanity_clamp_source_b_to_source_a"
}, Ne = {
	diary: "diary",
	hdcza: "hdcza",
	l5: "l5",
	selected_scorer_first_last: "selected_scorer_first_last",
	selected_scorer_longest_bout: "selected_scorer_longest_bout",
	quiet_bout: "quiet_bout",
	event_marker: "event_marker",
	actiware_rest_interval: "actiware_rest_interval",
	none: "none"
}, Le = {
	evening_onset: "evening_onset",
	morning_offset: "morning_offset",
	daytime: "daytime"
}, je = {
	NOON_OFFSET_HOURS: 12,
	ANALYSIS_WINDOW_HOURS: 24,
	CONTEXT_WINDOW_HOURS: 48,
	MORNING_OFFSET_ROLLOVER_PAD_HOURS: 6
}, Ge = {
	MAX_SLEEP_PERIODS_PER_DAY: 4,
	MAX_NONWEAR_PERIODS_PER_DAY: 10,
	EPOCH_DURATION_SECONDS: 60
}, Me = {
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
function We(e) {
	const t = Me[e];
	if (void 0 === t) throw new Error(`no implementation_version for ${e}`);
	return t;
}
function xe(e) {
	return Object.hasOwn(Me, e) ? e : null;
}
var Ue = class extends Error {
	name = "GgirResultsBundleError";
	category = f;
	folderName;
	fileName;
	constructor(e, t, a) {
		super(e), this.folderName = t, this.fileName = a;
	}
};
const Fe = /* @__PURE__ */ new WeakMap(), Ve = /* @__PURE__ */ new WeakMap(), He = /* @__PURE__ */ new WeakMap();
function $e(e, t) {
	const a = new File([], e);
	return He.set(a, t instanceof Ue ? t : new Ue(t ? "The GGIR output folder could not be read. Check folder access and open it again." : "The GGIR output folder is empty or contains no supported activity files.", e)), a;
}
function ze(e) {
	return Fe.get(e);
}
function Be(e, t) {
	Ve.set(e, t);
}
function Ye(e) {
	const t = Ve.get(e);
	if (t) return t;
	const a = e.webkitRelativePath;
	return "string" == typeof a && a ? a : e.name;
}
function qe(e, t) {
	return /\.csv$/iu.test(e.name) && Ye(e) !== e.name ? new Ue("This CSV table could not be read as activity data. GGIR imports require the whole output folder containing meta/ and config.csv.", void 0, e.name) : t instanceof Error ? t : new Error(t);
}
function Je(e, t = !1) {
	const a = e.replace(/\\/gu, "/");
	return !/(^|\/)(?:\._[^/]*|__MACOSX)(?:\/|$)/iu.test(a) && (t || !/(^|\/)(?:ms5\.outraw|sib\.reports|sleep\.qc)(?:\/|$)/iu.test(a));
}
function Ke(e) {
	const t = e.replace(/\\/g, "/").split("/").filter(Boolean), a = t.indexOf("meta");
	return a >= 0 && a < t.length - 1 ? t.slice(0, a).join("/") : null;
}
function Xe(e) {
	return t = et(e), /\.(rdata|rda)$/iu.test(t) ? Ke(e) : null;
	var t;
}
function Ze(e) {
	const t = e.map((e) => e.replace(/\\/gu, "/")).filter((e) => Je(e, !0)), a = new Set(t.map(Xe).filter((e) => null !== e)), r = /* @__PURE__ */ new Map();
	for (const n of t) {
		const e = Ke(n);
		if (null === e || !a.has(e)) continue;
		const t = r.get(e) ?? [];
		t.push(n.slice(e ? e.length + 1 : 0)), r.set(e, t);
	}
	for (const [n, s] of r) {
		const e = n ? et(n) : void 0, a = [...new Set(s.filter((e) => e.split("/").length > 2).map((e) => e.split("/")[1] ?? "").filter(Boolean))].sort().map((e) => `meta/${e}`).join(", ") || "no part folders", r = n ? `${n}/` : "";
		if (!t.some((e) => e.startsWith(r) && "config.csv" === e.slice(r.length).toLowerCase())) throw new Ue(`The GGIR output has no config.csv (found ${a}). GGIR writes config.csv next to meta/; add it to the folder and import again.`, e);
		for (const t of [
			"basic",
			"ms2.out",
			"ms3.out",
			"ms4.out",
			"ms5.out"
		]) {
			const a = `meta/${t}/`, r = s.filter((e) => e.startsWith(a)).map((e) => e.slice(a.length)).find((e) => e.includes("/"))?.split("/")[0];
			if (r) throw new Ue(`meta/${t} contains a folder ${r}/ instead of ${"basic" === t ? "meta_*.RData" : "*.RData"} files: move its files up one level, as GGIR writes them.`, e);
		}
		if (!s.some((e) => /^meta\/basic\/meta_[^/]+\.(?:rdata|rda)$/iu.test(e))) throw new Ue(`meta/basic ${s.some((e) => e.startsWith("meta/basic/")) ? "contains no meta_*.RData files" : "is missing"} (found ${a}). Part 1 files (meta_*.RData) are needed.`, e);
	}
}
function Qe(e) {
	return {
		...e.desiredTz ? { desiredtz: e.desiredTz } : {},
		...e.configTz ? { configtz: e.configTz } : {},
		..."boolean" == typeof e.imputeTimegaps ? { imputeTimegaps: e.imputeTimegaps } : {}
	};
}
function et(e) {
	const t = e.replace(/\\/g, "/").split("/");
	return t[t.length - 1] ?? e;
}
const tt = /^part2_(?:daysummary|summary)\.csv$/u, at = /^(?:part4_summary_sleep_cleaned|part5_personsummary_.+)\.csv$/u;
function rt() {
	return a;
}
a.join(" · ");
const nt = [
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
function st(e) {
	return void 0 !== (t = e, He.get(t)) || function(e, t = rt()) {
		const a = e.toLowerCase();
		return Je(e) && t.some((e) => a.endsWith(e));
	}(e.name, rt());
	var t;
}
function ot(e) {
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
(nt[0]?.items ?? []).join(", "), nt.slice(1).map((e) => e.label).join(" and ");
const it = [
	".csv",
	".gt3x",
	".bin",
	".rdata",
	".rda",
	".zip",
	".tar.bz2",
	".tbz2"
];
function ct(e) {
	const t = document.createElement("input");
	t.type = "file", t.accept = rt().join(","), e && (t.multiple = !0);
	const a = ot(t);
	return t.click(), a.then((e) => "cancelled" in e ? null : e.files);
}
function lt() {
	const e = document.createElement("input");
	e.type = "file", e.setAttribute("webkitdirectory", "");
	const t = ot(e);
	return e.click(), t.then((e) => {
		if ("cancelled" in e) return null;
		const { files: t } = e;
		try {
			Ze(t.map(Ye));
		} catch (a) {
			if (!(a instanceof Ue)) throw a;
			return [$e(a.folderName ?? "GGIR output folder", a)];
		}
		return t.filter((e) => st(e) && Je(Ye(e)));
	});
}
async function ut(e, t = e.name, a) {
	try {
		const r = [], n = await dt(e, t, r, a);
		return Ze(r), n.length ? n : [$e(e.name, !1)];
	} catch (r) {
		return [$e(e.name, !(r instanceof Ue) || r)];
	}
}
async function dt(e, t, a, r) {
	if (!Je(t)) return [];
	const n = [], s = "function" == typeof e.values ? e.values() : e;
	for await (const o of s) {
		const e = o, s = t ? `${t}/${e.name}` : e.name;
		if (a.push("directory" === e.kind ? `${s}/` : s), r?.(a.length), Je(s)) {
			if ("file" === e.kind && "function" == typeof e.getFile && st(e)) {
				const t = await e.getFile();
				Be(t, s), n.push(t);
				continue;
			}
			"directory" === e.kind && n.push(...await dt(e, s, a, r));
		}
	}
	return n;
}
function pt(e) {
	return e.isFile ? {
		kind: "file",
		name: e.name,
		getFile: () => new Promise((t, a) => e.file(t, a))
	} : {
		kind: "directory",
		name: e.name,
		values: () => ft(e.createReader())
	};
}
async function* ft(e) {
	const t = await new Promise((t, a) => e.readEntries(t, a));
	t.length && (yield* t.map(pt), yield* ft(e));
}
const mt = "auto-update is unavailable on the web platform";
let wt = null;
let _t = null;
function ht() {
	return _t || (_t = globalThis.isTauri ? {
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
						extensions: fe
					}]
				});
				if (null == a) return null;
				const r = Array.isArray(a) ? a : [a], n = [];
				for (const s of r) n.push(await de.fromPath(s));
				return n.length > 0 ? n : null;
			}(e),
			pickFolder: () => async function() {
				const { open: e } = await import("./dist-js-DtyocxnK.js"), { invoke: t } = await import("./core-B0WeKh9d.js"), a = await e({
					directory: !0,
					multiple: !1
				});
				if ("string" != typeof a) return null;
				const r = await t("list_supported_files", { dir: a }), n = [];
				for (const s of r) n.push(await de.fromPath(s));
				return n.length > 0 ? n : null;
			}(),
			saveBlob: (e, t, a) => async function(e, t, a) {
				const { save: r } = await import("./dist-js-DtyocxnK.js"), { invoke: n } = await import("./core-B0WeKh9d.js");
				a?.throwIfAborted();
				const s = await I(r({ defaultPath: t }), a);
				if (a?.throwIfAborted(), !s) return null;
				const o = new Uint8Array(await I(e.arrayBuffer(), a)), i = Array.from(o);
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
						sources: await Promise.all(a.paths.map((e) => de.fromPath(e)))
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
					groupHash: await pe(e),
					username: t
				});
			}(e, t),
			computeGroupHash: (e) => pe(e)
		},
		updater: {
			check: () => async function() {
				const { check: e } = await import("./dist-js-D7-Ut_gj.js"), t = await e();
				return t?.available ? (wt = t, {
					version: t.version,
					currentVersion: t.currentVersion,
					...t.body ? { body: t.body } : {},
					...t.date ? { date: t.date } : {}
				}) : (wt = null, null);
			}(),
			downloadAndInstall: (e) => async function(e) {
				if (!wt) throw new Error("No pending update. Call checkForUpdate() first.");
				const t = wt;
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
				}), wt = null;
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
								...Object.fromEntries(rt().filter((e) => !it.includes(e)).map((e) => [`application/x-${e.slice(1)}`, [e]]))
							}
						}],
						multiple: e
					}), a = [];
					for (const e of t) a.push(await e.getFile());
					return a.length > 0 ? a : null;
				} catch (t) {
					return t instanceof DOMException && "AbortError" === t.name ? null : (console.warn("[web-dialogs] showOpenFilePicker failed, falling back to <input>:", t instanceof Error ? t.message : t), ct(e));
				}
				return ct(e);
			}(e),
			pickFolder: (e) => async function(e) {
				if ("showDirectoryPicker" in window) try {
					const t = await window.showDirectoryPicker();
					return await ut(t, t.name, e);
				} catch (t) {
					return t instanceof DOMException && "AbortError" === t.name ? null : (console.warn("[web-dialogs] showDirectoryPicker failed, falling back to <input>:", t instanceof Error ? t.message : t), lt());
				}
				return lt();
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
						const t = await e.handle?.catch(() => null) ?? (e.legacy ? pt(e.legacy) : null);
						return "directory" === t?.kind ? ut(t) : t?.getFile ? [await t.getFile().catch(() => $e(t.name, !0))] : e.file ? [e.file] : [$e(e.legacy?.name ?? "GGIR output folder", !0)];
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
			computeGroupHash: (e) => c(e)
		},
		updater: {
			check: () => Promise.resolve(null),
			downloadAndInstall: () => Promise.reject(/* @__PURE__ */ new Error(mt)),
			relaunch: () => Promise.reject(/* @__PURE__ */ new Error(mt))
		}
	}), _t;
}
const gt = "sleep-scoring-workspaces-wasm", yt = "sleep-scoring-active-workspace-wasm", vt = `${gt}.migrated`;
function bt(e) {
	return `workspace-restore-committed:${e}`;
}
let kt = null;
const St = /* @__PURE__ */ new Set();
const Et = {
	getItem: async (e) => {
		let t;
		await (kt || (kt = (async () => {
			try {
				if ("undefined" == typeof localStorage) return;
				if (0 === await D.workspaces.count()) {
					const e = localStorage.getItem(gt);
					if (e) {
						const t = JSON.parse(e)?.state?.workspaces;
						Array.isArray(t) && t.length > 0 && await G(t), localStorage.removeItem(gt);
					}
				}
				await async function() {
					try {
						const e = globalThis.indexedDB, t = await D.workspaces.toArray();
						if (await Promise.all(t.map(async (e) => {
							e.restoreLock && globalThis.navigator?.locks?.request && await navigator.locks.request(e.restoreLock, { ifAvailable: !0 }, async (t) => {
								if (!t) return;
								const [a, r] = await Promise.all([D.workspaces.get(e.id), D.uiSettings.get(bt(e.dbName))]);
								a?.restoreLock === e.restoreLock && r?.value !== e.restoreLock && await At.getState().discardUncommittedWorkspace(e.id);
							});
						})), !e?.databases) return;
						const a = (await e.databases()).map((e) => e.name).filter((e) => !!e), r = a.filter((e) => "SleepScoringDB" === e || /^SleepScoringDB-.+/.test(e));
						if (0 === r.length) return;
						const n = new Set((await D.workspaces.toArray()).map((e) => e.dbName)), o = await j(), i = "SleepScoringGlobal";
						if (a.includes(i)) {
							const e = new T(i);
							try {
								for (const t of await e.workspaces.toArray()) n.add(t.dbName);
								for (const t of await j(e)) o.add(t);
							} catch {} finally {
								e.close();
							}
						}
						const { deleteWorkspaceDb: c } = await Promise.resolve().then(() => Pt);
						await Promise.all(r.filter((e) => o.has(e)).map(c));
						const l = r.filter((e) => !n.has(e) && !o.has(e));
						if (0 === l.length) return;
						const u = (/* @__PURE__ */ new Date()).toISOString(), p = await G(l.map((e) => ({
							id: "SleepScoringDB" === e ? s() : e.slice(15),
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
				}(), localStorage.setItem(vt, "1");
			} catch (e) {
				console.warn("workspace-store: migration failed", e);
			}
		})(), kt));
		try {
			t = await D.workspaces.toArray();
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
		const a = t.state.workspaces ?? [], r = [...St];
		await G(a, r);
		for (const n of r) St.delete(n);
	},
	removeItem: async (e) => {
		await D.workspaces.clear();
	}
};
function Rt(e) {
	St.add(e), At.setState({ workspaces: At.getState().workspaces.filter((t) => t.id !== e) });
}
const At = H()(le((e, t) => ({
	workspaces: [],
	storageUnavailable: !1,
	createWorkspace: (t, a, r) => {
		const n = s(), o = {
			...r ? { restoreLock: r } : {},
			id: n,
			displayName: a,
			serverUrl: t.replace(/\/+$/, ""),
			dbName: `SleepScoringDB-${n}`,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			lastAccessedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		return e((e) => ({ workspaces: [...e.workspaces, o] })), o;
	},
	commitWorkspaceRestore: async (a) => {
		const r = t().workspaces.find((e) => e.id === a);
		if (!r) throw new Error("The restored workspace is no longer registered.");
		const { restoreLock: n, ...s } = r;
		await D.transaction("rw", D.workspaces, D.uiSettings, async () => {
			await D.uiSettings.put({
				key: bt(r.dbName),
				value: n,
				updatedAt: Date.now()
			}), await G([s]);
		}), e((e) => ({ workspaces: e.workspaces.map((e) => e.id === a ? s : e) }));
	},
	createWorkspaceWithId: (t) => {
		e((e) => ({ workspaces: [...e.workspaces, t] }));
	},
	deleteWorkspace: async (e) => {
		const { runWorkspaceScopeChange: a } = await import("./workspace-switch-BFtIGTUd.js").then((e) => e.t);
		return a(async () => {
			if (e === Ot()) return void console.warn("Cannot delete the currently active workspace");
			const a = t().workspaces.find((t) => t.id === e);
			let r;
			if (a?.dbName) {
				const { preserveWorkspaceAuditLog: e } = await import("./workspace-audit-preservation-CjyEaX8E.js"), { auditLog: t } = await import("./audit-log-GmDCUlwq.js").then((e) => e.n), { useSleepScoringStore: n } = await import("./store-DM814ES4.js").then((e) => e.r), { username: s, sitePassword: o } = n.getState(), i = await e(a, {
					username: s,
					sitePassword: o
				}), { SleepScoringDB: c } = await import("./schema-B_tCLPTi.js").then((e) => e.d), { countWorkspaceContents: l } = await import("./workspace-contents-LtsfbzVr.js"), u = new c(a.dbName);
				let d;
				try {
					await u.open(), r = await l(u), d = await u.files.toArray();
				} finally {
					u.close();
				}
				const { deleteWorkspaceDb: p } = await Promise.resolve().then(() => Pt);
				await p(a.dbName);
				const { deleteMigrationBackups: f } = await import("./pre-migration-backup-BEyVcOdk.js").then((e) => e.t);
				await f(a.dbName);
				const { deleteFileCaches: m } = await import("./store-DM814ES4.js").then((e) => e.m);
				await m(d), t.recordAppEvent("workspace_deleted", {
					workspaceId: a.id,
					displayName: a.displayName,
					auditRowsTotal: i.total,
					auditRowsReplicated: i.replicated,
					auditRowsDestroyed: i.destroyed,
					...i.reason ? { reason: i.reason } : {}
				}), await t.settleWrites();
			}
			Rt(e);
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
			return ht().capabilities.tauri && ht().workspace.deleteWorkspace(e).catch((e) => {
				console.warn("Failed to delete Tauri workspace DB:", e);
			}), r;
		});
	},
	discardUncommittedWorkspace: async (e) => {
		const { runWorkspaceScopeChange: a } = await import("./workspace-switch-BFtIGTUd.js").then((e) => e.t);
		return a(async () => {
			const a = t().workspaces.find((t) => t.id === e) ?? await D.workspaces.get(e);
			if (a?.dbName) {
				const { deleteWorkspaceDb: e } = await Promise.resolve().then(() => Pt);
				await e(a.dbName);
				const { deleteMigrationBackups: t } = await import("./pre-migration-backup-BEyVcOdk.js").then((e) => e.t);
				await t(a.dbName);
			}
			Rt(e);
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
	name: gt,
	storage: Et,
	onRehydrateStorage: () => (e, t) => {
		if (!t) try {
			(async function() {
				C.basePath;
			})();
		} catch (a) {
			console.warn("[workspace-store] serverUrl normalization failed:", a);
		}
	}
})), It = H()(() => ({
	activeId: (() => {
		try {
			return sessionStorage.getItem(yt);
		} catch {
			return null;
		}
	})(),
	activating: !1
}));
function Ot() {
	return It.getState().activeId;
}
var Pt = e({
	closeDb: () => Ht,
	deleteWorkspaceDb: () => jt,
	getDb: () => Ft,
	hasOpenDb: () => Vt,
	isWorkspaceDbDeleted: () => Mt,
	subscribeDbChanges: () => xt
});
let Ct = null;
const Tt = /* @__PURE__ */ new Set(), Dt = /* @__PURE__ */ new Set(), Nt = /* @__PURE__ */ new Set();
function Lt(e) {
	Dt.add(e);
	for (const t of Object.values(J.getState().jobs)) t.workspaceId === e && t.controller.abort();
	for (const t of Tt) {
		const a = t.deref();
		a && a.name !== e || Tt.delete(t), a?.name === e && a.close({ disableAutoOpen: !0 });
	}
}
async function jt(e) {
	const a = {
		key: L(e),
		value: !0,
		updatedAt: Date.now()
	};
	await D.transaction("rw", D.workspaces, D.uiSettings, async () => {
		await D.uiSettings.put(a);
		const t = await D.workspaces.toArray();
		await D.workspaces.bulkDelete(t.filter((t) => t.dbName === e).map((e) => e.id));
	}), Lt(e), Gt(e);
	const { workspaces: r } = At.getState();
	r.some((t) => t.dbName === e) && At.setState({ workspaces: r.filter((t) => t.dbName !== e) });
	try {
		const { publishWorkspaceDeletion: e } = await import("./project-revision-BP4u1UU7.js").then((e) => e.n);
		e();
	} catch {}
	try {
		await t.delete(e);
	} catch {
		console.warn("Workspace data will be removed the next time the app starts.");
	}
}
function Gt(e) {
	Ct?.name === e && (function() {
		try {
			sessionStorage.removeItem(yt);
		} catch {}
		It.setState({
			activeId: null,
			activating: !1
		});
	}(), Ht());
}
function Mt(e) {
	if (Dt.has(e)) return !0;
	const t = At.getState().workspaces.some((t) => t.dbName === e);
	return t && Nt.add(e), !t && Nt.has(e);
}
t.addons.push((e) => {
	Tt.add(new WeakRef(e));
	const a = e.open.bind(e);
	e.open = () => Dt.has(e.name) ? t.Promise.reject(new t.DatabaseClosedError()) : a().catch((t) => {
		throw Dt.has(e.name) && (Lt(e.name), Gt(e.name)), t;
	});
	const r = () => {
		if (e instanceof o) return t.waitFor(D.uiSettings.get(L(e.name))).then((a) => {
			if (a) throw Dt.add(e.name), new t.DatabaseClosedError();
		});
	};
	e.on("populate", r), e.on("ready", r, !0), e.on("versionchange", (t) => {
		if (null === t.newVersion && e instanceof o) return Lt(e.name), Gt(e.name), !1;
	}), Dt.has(e.name) && e.close({ disableAutoOpen: !0 });
});
const Wt = /* @__PURE__ */ new Set();
function xt(e) {
	return Wt.add(e), () => Wt.delete(e);
}
function Ut() {
	for (const e of Wt) try {
		e();
	} catch {}
}
function Ft() {
	if (!Ct) {
		const e = "undefined" != typeof window ? Ot() : null;
		if (e) {
			const t = At.getState().getWorkspace(e);
			return Ct = new o(t?.dbName ?? `SleepScoringDB-${e}`), Ut(), Ct;
		}
		throw new Error("No workspace database is active. Call switchDb() first.");
	}
	return Ct;
}
function Vt() {
	return null !== Ct;
}
function Ht() {
	Ct && (Ct.close(), Ct = null), Ut();
}
if ("undefined" != typeof window) {
	const e = () => {
		const e = Ct;
		e && import("./workspace-switch-BFtIGTUd.js").then((e) => e.t).then(({ runWorkspaceScopeChange: t }) => t(() => {
			Ct === e && e.close({ disableAutoOpen: !1 });
		})).catch(() => {});
	};
	window.addEventListener("pagehide", e), window.addEventListener("freeze", e), window.addEventListener("pageshow", (e) => {
		const t = Ct;
		e.persisted && t && import("./workspace-switch-BFtIGTUd.js").then((e) => e.t).then(async ({ workspaceActivation: e }) => {
			await e;
			const { useSleepScoringStore: a } = await import("./store-DM814ES4.js").then((e) => e.r), { username: r, selectedStudyId: n, isAuthenticated: s } = a.getState();
			if (Ct !== t || !s || !r) return;
			const { recoverWorkspaceDiaryBindings: o } = await import("./staged-diary-import-Dfgdv1--.js");
			Ct === t && await o(t, {
				username: r,
				studyId: n
			});
		}).catch(() => {
			console.warn("[diary] Page resume recovery could not start.", { failed: 1 });
		});
	});
}
export { I as $, Pe as A, se as B, ke as C, Ae as D, Re as E, Ne as F, K as G, Y as H, Le as I, z as J, J as K, xe as L, Ce as M, Te as N, Ie as O, De as P, A as Q, We as R, be as S, Ee as T, q as U, le as V, X as W, x as X, H as Y, C as Z, he as _, Ot as a, p as at, je as b, tt as c, d as ct, qe as d, v as dt, y as et, ze as f, _e as g, we as h, xt as i, f as it, Ge as j, Oe as k, at as l, R as lt, me as m, Vt as n, b as nt, At as o, l as ot, Qe as p, $ as q, Mt as r, k as rt, ht as s, m as st, Ft as t, u as tt, Ue as u, E as ut, ge as v, Se as w, ve as x, ye as y, ie as z };
