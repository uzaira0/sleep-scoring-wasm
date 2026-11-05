import { a as e, l as t, s as a } from "./ggir-results-types-WB8axvb-.js";
import { Sn as r, Ut as s, f as n, o, p as i } from "./schema-CoLJBY5o.js";
import { o as c } from "./content-hash-DKxfNNnb.js";
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
		const s = () => r(A(t));
		t.addEventListener("abort", s, { once: !0 }), e.then(a, r).finally(() => t.removeEventListener("abort", s));
	}) : e;
}
Object.keys(S);
var O = class extends r {
	workspaces;
	uiSettings;
	constructor(e) {
		super(e), this.version(1).stores({
			workspaces: "id, lastAccessedAt",
			uiSettings: "key, updatedAt"
		}), n(this);
	}
};
const P = new O("SleepScoringGlobal-wasm"), C = "workspace-deleted:";
function T(e) {
	return `${C}${e}`;
}
async function D(e = P) {
	const t = await e.uiSettings.where("key").startsWith(C).primaryKeys();
	return new Set(t.map((e) => e.slice(18)));
}
async function N(e, t = []) {
	return P.transaction("rw", P.workspaces, P.uiSettings, async () => {
		const a = await D(), r = e.filter((e) => !a.has(e.dbName));
		return t.length > 0 && await P.workspaces.bulkDelete([...t]), r.length > 0 && await P.workspaces.bulkPut(r), r.length;
	});
}
const L = (e) => {
	let t;
	const a = /* @__PURE__ */ new Set(), r = (e, r) => {
		const s = "function" == typeof e ? e(t) : e;
		if (!Object.is(s, t)) {
			const e = t;
			t = (null != r ? r : "object" != typeof s || null === s) ? s : Object.assign({}, t, s), a.forEach((a) => a(t, e));
		}
	}, s = () => t, n = {
		setState: r,
		getState: s,
		getInitialState: () => o,
		subscribe: (e) => (a.add(e), () => a.delete(e))
	}, o = t = e(r, s, n);
	return n;
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
var j = e((e) => {
	var t = Symbol.for("react.transitional.element"), a = Symbol.for("react.consumer"), r = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), n = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, o = Object.assign, i = {};
	function c(e, t, a) {
		this.props = e, this.context = t, this.refs = i, this.updater = a || n;
	}
	function l() {}
	function u(e, t, a) {
		this.props = e, this.context = t, this.refs = i, this.updater = a || n;
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
		var s, n = {}, o = null;
		if (null != a) for (s in void 0 !== a.key && (o = "" + a.key), a) f.call(a, s) && "key" !== s && "__self" !== s && "__source" !== s && (n[s] = a[s]);
		var i = arguments.length - 2;
		if (1 === i) n.children = r;
		else if (1 < i) {
			for (var c = Array(i), l = 0; l < i; l++) c[l] = arguments[l + 2];
			n.children = c;
		}
		if (e && e.defaultProps) for (s in i = e.defaultProps) void 0 === n[s] && (n[s] = i[s]);
		return function(e, a, r) {
			var s = r.ref;
			return {
				$$typeof: t,
				type: e,
				key: a,
				ref: void 0 !== s ? s : null,
				props: r
			};
		}(e, o, n);
	}, e.forwardRef = function(e) {
		return {
			$$typeof: s,
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
}), G = e((e, t) => {
	t.exports = j();
}), M = t(G(), 1);
const W = (e) => e, x = (e) => {
	const t = ((e) => e ? L(e) : L)(e), a = (e) => function(e, t = W) {
		const a = M.useSyncExternalStore(e.subscribe, M.useCallback(() => t(e.getState()), [e, t]), M.useCallback(() => t(e.getInitialState()), [e, t]));
		return M.useDebugValue(a), a;
	}(t, e);
	return Object.assign(a, t), a;
}, U = (e) => e ? x(e) : x, F = {
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
}, V = {
	QUEUED: "queued",
	RUNNING: "running",
	JOINED: "joined",
	RERUN: "rerun",
	CANCELLED: "cancelled",
	COMMITTED: "committed",
	DONE: "done",
	FAILED: "failed",
	ELSEWHERE: "elsewhere"
}, H = {
	[F.IMPORT]: "user",
	[F.REPROCESS]: "user",
	[F.SCORED_VARIANT_WARM]: "automatic",
	[F.VARIANT_RECOVERY]: "automatic",
	[F.GGIR_RECOMPUTE]: "automatic",
	[F.GGIR_RECOVERY]: "automatic",
	[F.GGIR_CORRECTED_WARM]: "user",
	[F.NIGHT_DIFFICULTY]: "automatic",
	[F.PHYSICAL_ACTIVITY]: "automatic",
	[F.PLACEMENT]: "automatic",
	[F.AUTO_SCORE]: "automatic",
	[F.PLACEMENT_RECOVERY]: "automatic",
	[F.BACKUP_EXPORT]: "user",
	[F.BACKUP_RESTORE]: "user",
	[F.RESCORE]: "user",
	[F.EXPORT]: "user",
	[F.DIARY_VALIDATE]: "user",
	[F.DIARY_REPAIR]: "user",
	[F.DIARY_IMPORT]: "user",
	[F.HDCZA_REFRESH]: "automatic",
	[F.SYNC]: "automatic",
	[F.WAL_TRIM]: "automatic",
	[F.MODEL_DOWNLOAD]: "user",
	[F.NONWEAR_IMPORT]: "user",
	[F.AUDIT_EXPORT]: "user"
};
function z(e) {
	return "automatic" === H[e];
}
function $(e) {
	return [
		F.WAL_TRIM,
		F.PLACEMENT,
		F.PLACEMENT_RECOVERY,
		F.NIGHT_DIFFICULTY,
		F.PHYSICAL_ACTIVITY,
		F.VARIANT_RECOVERY,
		F.GGIR_RECOVERY
	].includes(e);
}
const B = U((e, t) => ({
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
		r.status === V.FAILED ? r.visible = !0 : z(r.kind) && (r.visible = !1);
		const s = { ...e.jobs };
		r.status === V.FAILED && Reflect.deleteProperty(s, `${t}:failure`);
		const n = e.jobs[t];
		if (n?.status === V.FAILED && r.status !== V.FAILED && q(n)) {
			const e = `${t}:failure`;
			s[e] = {
				...n,
				id: e,
				noticeOnly: !0
			};
		}
		J(r) || Reflect.deleteProperty(s, t), r.status === V.DONE && z(r.kind) || (s[t] = r);
		const o = Object.values(s).filter((e) => !J(e) && e.status !== V.FAILED);
		for (const t of o.slice(0, Math.max(0, o.length - 5))) Reflect.deleteProperty(s, t.id);
		return {
			jobs: s,
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
function Y(e) {
	return e.localProcessingJobId ? e.jobs[e.localProcessingJobId] : void 0;
}
function q(e) {
	return !e.noticeOnly;
}
function J(e) {
	return e?.status === V.QUEUED || e?.status === V.RUNNING;
}
const K = (e) => !!e.dispatchFromDevtools && "function" == typeof e.dispatch, X = /* @__PURE__ */ new Map(), Z = (e) => {
	const t = X.get(e);
	return t ? Object.fromEntries(Object.entries(t.stores).map(([e, t]) => [e, t.getState()])) : {};
}, Q = /^at (?:new |async )?(.+?) \(/, ee = /^([^@]+)@/;
function te(e) {
	var t, a, r;
	if (!e) return;
	const s = e.split("\n"), n = s.findIndex((e) => e.includes("api.setState"));
	if (n < 0) return;
	const o = (null == (t = s[n + 1]) ? void 0 : t.trim()) || "";
	return (null == (a = Q.exec(o)) ? void 0 : a[1]) || (null == (r = ee.exec(o)) ? void 0 : r[1]);
}
const ae = (e, t = {}) => (a, r, s) => {
	const { enabled: n, anonymousActionType: o, store: i, ...c } = t;
	let l;
	try {
		l = null != n && n && window.__REDUX_DEVTOOLS_EXTENSION__;
	} catch (w) {}
	if (!l) return e(a, r, s);
	const { connection: u, ...d } = ((e, t, a) => {
		if (void 0 === e) return {
			type: "untracked",
			connection: t.connect(a)
		};
		const r = X.get(a.name);
		if (r) return {
			type: "tracked",
			store: e,
			...r
		};
		const s = {
			connection: t.connect(a),
			stores: {}
		};
		return X.set(a.name, s), {
			type: "tracked",
			store: e,
			...s
		};
	})(i, l, c);
	let p = !0;
	s.setState = (e, t, n) => {
		const l = a(e, t);
		if (!p) return l;
		const d = void 0 === n ? { type: o || te((/* @__PURE__ */ new Error()).stack) || "anonymous" } : "string" == typeof n ? { type: n } : n;
		return void 0 === i ? (u?.send(d, r()), l) : (u?.send({
			...d,
			type: `${i}/${d.type}`
		}, {
			...Z(c.name),
			[i]: s.getState()
		}), l);
	}, s.devtools = { cleanup: () => {
		u && "function" == typeof u.unsubscribe && u.unsubscribe(), ((e, t) => {
			if (void 0 === t) return;
			const a = X.get(e);
			a && (delete a.stores[t], 0 === Object.keys(a.stores).length && X.delete(e));
		})(c.name, i);
	} };
	const f = (...e) => {
		const t = p;
		p = !1, a(...e), p = t;
	}, m = e(s.setState, r, s);
	if ("untracked" === d.type ? u?.init(m) : (d.stores[d.store] = s, u?.init(Object.fromEntries(Object.entries(d.stores).map(([e, t]) => [e, e === d.store ? m : t.getState()])))), K(s)) {
		const e = s.dispatch;
		s.dispatch = (...t) => {
			e(...t);
		};
	}
	return u.subscribe((e) => {
		var t;
		switch (e.type) {
			case "ACTION": return "string" != typeof e.payload ? void console.error("[zustand devtools middleware] Unsupported action format") : re(e.payload, (e) => {
				if ("__setState" === e.type) {
					if (void 0 === i) return void f(e.state);
					1 !== Object.keys(e.state).length && console.error("\n                    [zustand devtools middleware] Unsupported __setState action format.\n                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),\n                    and value of this only key should be a state object. Example: { \"type\": \"__setState\", \"state\": { \"abc123Store\": { \"foo\": \"bar\" } } }\n                    ");
					const t = e.state[i];
					if (null == t) return;
					JSON.stringify(s.getState()) !== JSON.stringify(t) && f(t);
					return;
				}
				K(s) && s.dispatch(e);
			});
			case "DISPATCH":
				switch (e.payload.type) {
					case "RESET": return f(m), void 0 === i ? null == u ? void 0 : u.init(s.getState()) : null == u ? void 0 : u.init(Z(c.name));
					case "COMMIT": return void 0 === i ? void u?.init(s.getState()) : null == u ? void 0 : u.init(Z(c.name));
					case "ROLLBACK": return re(e.state, (e) => {
						if (void 0 === i) return f(e), void u?.init(s.getState());
						f(e[i]), u?.init(Z(c.name));
					});
					case "JUMP_TO_STATE":
					case "JUMP_TO_ACTION": return re(e.state, (e) => {
						void 0 !== i ? JSON.stringify(s.getState()) !== JSON.stringify(e[i]) && f(e[i]) : f(e);
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
}, re = (e, t) => {
	let a;
	try {
		a = JSON.parse(e);
	} catch (r) {
		console.error("[zustand devtools middleware] Could not parse the received json", r);
	}
	void 0 !== a && t(a);
};
function se(e, t) {
	let a;
	try {
		a = e();
	} catch (r) {
		return;
	}
	return {
		getItem: (e) => {
			var r;
			const s = (e) => null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver), n = null != (r = a.getItem(e)) ? r : null;
			return n instanceof Promise ? n.then(s) : s(n);
		},
		setItem: (e, r) => a.setItem(e, JSON.stringify(r, null == t ? void 0 : t.replacer)),
		removeItem: (e) => a.removeItem(e)
	};
}
const ne = (e) => (t) => {
	try {
		const a = e(t);
		return a instanceof Promise ? a : {
			then: (e) => ne(e)(a),
			catch(e) {
				return this;
			}
		};
	} catch (a) {
		return {
			then(e) {
				return this;
			},
			catch: (e) => ne(e)(a)
		};
	}
}, oe = (e, t) => (a, r, s) => {
	let n = {
		storage: se(() => window.localStorage),
		partialize: (e) => e,
		version: 0,
		merge: (e, t) => ({
			...t,
			...e
		}),
		...t
	}, o = !1, i = 0;
	const c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
	let u = n.storage;
	if (!u) return e((...e) => {
		console.warn(`[zustand persist middleware] Unable to update item '${n.name}', the given storage is currently unavailable.`), a(...e);
	}, r, s);
	const d = () => {
		const e = n.partialize({ ...r() });
		return u.setItem(n.name, {
			state: e,
			version: n.version
		});
	}, p = s.setState;
	s.setState = (e, t) => (p(e, t), d());
	const f = e((...e) => (a(...e), d()), r, s);
	let m;
	s.getInitialState = () => f;
	const w = () => {
		var e, t;
		if (!u) return;
		const s = ++i;
		o = !1, c.forEach((e) => {
			var t;
			return e(null != (t = r()) ? t : f);
		});
		const p = (null == (t = n.onRehydrateStorage) ? void 0 : t.call(n, null != (e = r()) ? e : f)) || void 0;
		return ne(u.getItem.bind(u))(n.name).then((e) => {
			if (e) {
				if ("number" != typeof e.version || e.version === n.version) return [!1, e.state];
				if (n.migrate) {
					const t = n.migrate(e.state, e.version);
					return t instanceof Promise ? t.then((e) => [!0, e]) : [!0, t];
				}
				console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
			}
			return [!1, void 0];
		}).then((e) => {
			var t;
			if (s !== i) return;
			const [o, c] = e;
			return m = n.merge(c, null != (t = r()) ? t : f), a(m, !0), o ? d() : void 0;
		}).then(() => {
			s === i && (p?.(r(), void 0), m = r(), o = !0, l.forEach((e) => e(m)));
		}).catch((e) => {
			s === i && p?.(void 0, e);
		});
	};
	return s.persist = {
		setOptions: (e) => {
			n = {
				...n,
				...e
			}, e.storage && (u = e.storage);
		},
		clearStorage: () => {
			++i, u?.removeItem(n.name);
		},
		getOptions: () => n,
		rehydrate: () => w(),
		hasHydrated: () => o,
		onHydrate: (e) => (c.add(e), () => {
			c.delete(e);
		}),
		onFinishHydration: (e) => (l.add(e), () => {
			l.delete(e);
		})
	}, n.skipHydration || w(), m || f;
};
function ie(e) {
	const t = e.split(/[/\\]/);
	return t[t.length - 1] || e;
}
var ce = class e {
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
		const { stat: a } = await import("./dist-js-CMqw3VI6.js"), r = await a(t), s = r.mtime ? r.mtime.getTime() : 0;
		return new e({
			path: t,
			name: ie(t),
			fileSize: r.size,
			lastModified: s
		});
	}
	get size() {
		return this.end - this.start;
	}
	slice(t, a) {
		const { start: r, end: s } = function(e, t, a) {
			const r = (t, a) => void 0 === t ? a : t < 0 ? Math.max(e + t, 0) : Math.min(t, e), s = r(t, 0), n = r(a, e);
			return {
				start: s,
				end: Math.max(s, n)
			};
		}(this.size, t, a);
		return new e({
			path: this.path,
			name: this.name,
			fileSize: this.fileSize,
			lastModified: this.lastModified,
			start: this.start + r,
			end: this.start + s
		});
	}
	async arrayBuffer() {
		const e = this.size;
		if (e <= 0) return /* @__PURE__ */ new ArrayBuffer(0);
		const { open: t, SeekMode: a } = await import("./dist-js-CMqw3VI6.js"), r = await t(this.path, { read: !0 });
		try {
			await r.seek(this.start, a.Start);
			const t = new Uint8Array(e);
			let s = 0;
			for (; s < e;) {
				const e = await r.read(t.subarray(s));
				if (null === e || 0 === e) break;
				s += e;
			}
			return s === e ? t.buffer : t.buffer.slice(0, s);
		} finally {
			await r.close();
		}
	}
	async text() {
		const e = await this.arrayBuffer();
		return new TextDecoder().decode(e);
	}
};
async function le(e) {
	return c(e);
}
const ue = [
	"csv",
	"gt3x",
	"bin",
	"bz2",
	"tbz2"
], de = {
	high: "high",
	medium: "medium",
	low: "low"
}, pe = {
	off: "off",
	actiware: "actiware",
	screens: "screens"
}, fe = {
	minutes_immobile: "minutes_immobile",
	epochs_scored_sleep: "epochs_scored_sleep"
}, me = {
	low: "low",
	medium: "medium",
	high: "high",
	auto: "auto",
	custom: "custom"
}, we = {
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
}, _e = {
	configured_scoring: "configured_scoring",
	actiware: "actiware"
}, he = {
	pim: "pim",
	zcm: "zcm",
	tat: "tat",
	neishabouri: "neishabouri",
	zero_crossing: "zero_crossing",
	mad: "mad",
	hfen: "hfen"
}, ge = {
	month_first: "month_first",
	day_first: "day_first"
}, ye = {
	night_date: "night_date",
	period_start_day: "period_start_day",
	explicit_only: "explicit_only",
	ask_per_night: "ask_per_night"
}, ve = {
	cannot_be_read: "cannot_be_read",
	sources_disagree: "sources_disagree",
	needs_decision: "needs_decision",
	date_filled: "date_filled",
	sources_agree: "sources_agree",
	as_written: "as_written"
}, be = {
	explicit_only: "explicit_only",
	sleep_date_same_day: "sleep_date_same_day",
	sleep_date_chronology: "sleep_date_chronology"
}, ke = {
	main_sleep: "main_sleep",
	naps: "naps",
	nonwear: "nonwear"
}, Se = {
	ask: "ask",
	first_occurrence: "first_occurrence",
	mark_unusable: "mark_unusable"
}, Ee = {
	mark_unusable: "mark_unusable",
	shift_forward_hour: "shift_forward_hour"
}, Re = {
	number_60s_epochs: "60s_epochs",
	ggir_5s: "ggir_5s"
}, Ae = {
	HDCZA: "HDCZA",
	HorAngle: "HorAngle",
	NotWorn: "NotWorn",
	MotionWare: "MotionWare",
	HLRB: "HLRB"
}, Ie = {
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
}, Oe = {
	PHYSICAL_ACTIVITY: "physical_activity",
	SLEEP_DIARY: "sleep_diary",
	CSV_IMPORT: "csv_import",
	PRESET_MANAGEMENT: "preset_management",
	NONWEAR_TIME: "nonwear_time",
	CONSENSUS_REVIEW: "consensus_review",
	ANALYSIS_ISSUES: "analysis_issues"
}, Pe = {
	use_source_a: "use_source_a",
	use_source_b: "use_source_b",
	intersection: "intersection",
	union: "union",
	source_b_bounded_by_source_a: "source_b_bounded_by_source_a",
	sanity_clamp_source_b_to_source_a: "sanity_clamp_source_b_to_source_a"
}, Ce = {
	diary: "diary",
	hdcza: "hdcza",
	l5: "l5",
	selected_scorer_first_last: "selected_scorer_first_last",
	selected_scorer_longest_bout: "selected_scorer_longest_bout",
	quiet_bout: "quiet_bout",
	event_marker: "event_marker",
	actiware_rest_interval: "actiware_rest_interval",
	none: "none"
}, Te = {
	evening_onset: "evening_onset",
	morning_offset: "morning_offset",
	daytime: "daytime"
}, De = {
	NOON_OFFSET_HOURS: 12,
	ANALYSIS_WINDOW_HOURS: 24,
	CONTEXT_WINDOW_HOURS: 48,
	MORNING_OFFSET_ROLLOVER_PAD_HOURS: 6
}, Ne = {
	MAX_SLEEP_PERIODS_PER_DAY: 4,
	MAX_NONWEAR_PERIODS_PER_DAY: 10,
	EPOCH_DURATION_SECONDS: 60
}, Le = {
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
function je(e) {
	const t = Le[e];
	if (void 0 === t) throw new Error(`no implementation_version for ${e}`);
	return t;
}
function Ge(e) {
	return Object.hasOwn(Le, e) ? e : null;
}
var Me = class extends Error {
	name = "GgirResultsBundleError";
	category = f;
	folderName;
	fileName;
	constructor(e, t, a) {
		super(e), this.folderName = t, this.fileName = a;
	}
};
const We = /* @__PURE__ */ new WeakMap(), xe = /* @__PURE__ */ new WeakMap(), Ue = /* @__PURE__ */ new WeakMap();
function Fe(e, t) {
	const a = new File([], e);
	return Ue.set(a, t instanceof Me ? t : new Me(t ? "The GGIR output folder could not be read. Check folder access and open it again." : "The GGIR output folder is empty or contains no supported activity files.", e)), a;
}
function Ve(e) {
	return We.get(e);
}
function He(e, t) {
	xe.set(e, t);
}
function ze(e) {
	const t = xe.get(e);
	if (t) return t;
	const a = e.webkitRelativePath;
	return "string" == typeof a && a ? a : e.name;
}
function $e(e, t) {
	return /\.csv$/iu.test(e.name) && ze(e) !== e.name ? new Me("This CSV table could not be read as activity data. GGIR imports require the whole output folder containing meta/ and config.csv.", void 0, e.name) : t instanceof Error ? t : new Error(t);
}
function Be(e, t = !1) {
	const a = e.replace(/\\/gu, "/");
	return !/(^|\/)(?:\._[^/]*|__MACOSX)(?:\/|$)/iu.test(a) && (t || !/(^|\/)(?:ms5\.outraw|sib\.reports|sleep\.qc)(?:\/|$)/iu.test(a));
}
function Ye(e) {
	const t = e.replace(/\\/g, "/").split("/").filter(Boolean), a = t.indexOf("meta");
	return a >= 0 && a < t.length - 1 ? t.slice(0, a).join("/") : null;
}
function qe(e) {
	return t = Xe(e), /\.(rdata|rda)$/iu.test(t) ? Ye(e) : null;
	var t;
}
function Je(e) {
	const t = e.map((e) => e.replace(/\\/gu, "/")).filter((e) => Be(e, !0)), a = new Set(t.map(qe).filter((e) => null !== e)), r = /* @__PURE__ */ new Map();
	for (const s of t) {
		const e = Ye(s);
		if (null === e || !a.has(e)) continue;
		const t = r.get(e) ?? [];
		t.push(s.slice(e ? e.length + 1 : 0)), r.set(e, t);
	}
	for (const [s, n] of r) {
		const e = s ? Xe(s) : void 0, a = [...new Set(n.filter((e) => e.split("/").length > 2).map((e) => e.split("/")[1] ?? "").filter(Boolean))].sort().map((e) => `meta/${e}`).join(", ") || "no part folders", r = s ? `${s}/` : "";
		if (!t.some((e) => e.startsWith(r) && "config.csv" === e.slice(r.length).toLowerCase())) throw new Me(`The GGIR output has no config.csv (found ${a}). GGIR writes config.csv next to meta/; add it to the folder and import again.`, e);
		for (const t of [
			"basic",
			"ms2.out",
			"ms3.out",
			"ms4.out",
			"ms5.out"
		]) {
			const a = `meta/${t}/`, r = n.filter((e) => e.startsWith(a)).map((e) => e.slice(a.length)).find((e) => e.includes("/"))?.split("/")[0];
			if (r) throw new Me(`meta/${t} contains a folder ${r}/ instead of ${"basic" === t ? "meta_*.RData" : "*.RData"} files: move its files up one level, as GGIR writes them.`, e);
		}
		if (!n.some((e) => /^meta\/basic\/meta_[^/]+\.(?:rdata|rda)$/iu.test(e))) throw new Me(`meta/basic ${n.some((e) => e.startsWith("meta/basic/")) ? "contains no meta_*.RData files" : "is missing"} (found ${a}). Part 1 files (meta_*.RData) are needed.`, e);
	}
}
function Ke(e) {
	return {
		...e.desiredTz ? { desiredtz: e.desiredTz } : {},
		...e.configTz ? { configtz: e.configTz } : {},
		..."boolean" == typeof e.imputeTimegaps ? { imputeTimegaps: e.imputeTimegaps } : {}
	};
}
function Xe(e) {
	const t = e.replace(/\\/g, "/").split("/");
	return t[t.length - 1] ?? e;
}
const Ze = /^part2_(?:daysummary|summary)\.csv$/u, Qe = /^(?:part4_summary_sleep_cleaned|part5_personsummary_.+)\.csv$/u;
function et() {
	return s;
}
s.join(" · ");
const tt = [
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
function at(e) {
	return void 0 !== (t = e, Ue.get(t)) || function(e, t = et()) {
		const a = e.toLowerCase();
		return Be(e) && t.some((e) => a.endsWith(e));
	}(e.name, et());
	var t;
}
function rt(e) {
	return new Promise((t) => {
		let a = !1;
		const r = (e) => {
			a || (a = !0, window.removeEventListener("focus", s), t(e));
		};
		e.addEventListener("change", () => {
			const t = Array.from(e.files ?? []);
			r({ files: t });
		}), e.addEventListener("cancel", () => r({ cancelled: !0 }));
		const s = () => {
			setTimeout(() => {
				a || 0 !== (e.files?.length ?? 0) || r({ cancelled: !0 });
			}, 200);
		};
		window.addEventListener("focus", s);
	});
}
(tt[0]?.items ?? []).join(", "), tt.slice(1).map((e) => e.label).join(" and ");
const st = [
	".csv",
	".gt3x",
	".bin",
	".rdata",
	".rda",
	".zip",
	".tar.bz2",
	".tbz2"
];
function nt(e) {
	const t = document.createElement("input");
	t.type = "file", t.accept = et().join(","), e && (t.multiple = !0);
	const a = rt(t);
	return t.click(), a.then((e) => "cancelled" in e ? null : e.files);
}
function ot() {
	const e = document.createElement("input");
	e.type = "file", e.setAttribute("webkitdirectory", "");
	const t = rt(e);
	return e.click(), t.then((e) => {
		if ("cancelled" in e) return null;
		const { files: t } = e;
		try {
			Je(t.map(ze));
		} catch (a) {
			if (!(a instanceof Me)) throw a;
			return [Fe(a.folderName ?? "GGIR output folder", a)];
		}
		return t.filter((e) => at(e) && Be(ze(e)));
	});
}
async function it(e, t = e.name, a) {
	try {
		const r = [], s = await ct(e, t, r, a);
		return Je(r), s.length ? s : [Fe(e.name, !1)];
	} catch (r) {
		return [Fe(e.name, !(r instanceof Me) || r)];
	}
}
async function ct(e, t, a, r) {
	if (!Be(t)) return [];
	const s = [], n = "function" == typeof e.values ? e.values() : e;
	for await (const o of n) {
		const e = o, n = t ? `${t}/${e.name}` : e.name;
		if (a.push("directory" === e.kind ? `${n}/` : n), r?.(a.length), Be(n)) {
			if ("file" === e.kind && "function" == typeof e.getFile && at(e)) {
				const t = await e.getFile();
				He(t, n), s.push(t);
				continue;
			}
			"directory" === e.kind && s.push(...await ct(e, n, a, r));
		}
	}
	return s;
}
function lt(e) {
	return e.isFile ? {
		kind: "file",
		name: e.name,
		getFile: () => new Promise((t, a) => e.file(t, a))
	} : {
		kind: "directory",
		name: e.name,
		values: () => ut(e.createReader())
	};
}
async function* ut(e) {
	const t = await new Promise((t, a) => e.readEntries(t, a));
	t.length && (yield* t.map(lt), yield* ut(e));
}
const dt = "auto-update is unavailable on the web platform";
let pt = null;
let ft = null;
function mt() {
	return ft || (ft = globalThis.isTauri ? {
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
						extensions: ue
					}]
				});
				if (null == a) return null;
				const r = Array.isArray(a) ? a : [a], s = [];
				for (const n of r) s.push(await ce.fromPath(n));
				return s.length > 0 ? s : null;
			}(e),
			pickFolder: () => async function() {
				const { open: e } = await import("./dist-js-DtyocxnK.js"), { invoke: t } = await import("./core-B0WeKh9d.js"), a = await e({
					directory: !0,
					multiple: !1
				});
				if ("string" != typeof a) return null;
				const r = await t("list_supported_files", { dir: a }), s = [];
				for (const n of r) s.push(await ce.fromPath(n));
				return s.length > 0 ? s : null;
			}(),
			saveBlob: (e, t, a) => async function(e, t, a) {
				const { save: r } = await import("./dist-js-DtyocxnK.js"), { invoke: s } = await import("./core-B0WeKh9d.js");
				a?.throwIfAborted();
				const n = await I(r({ defaultPath: t }), a);
				if (a?.throwIfAborted(), !n) return null;
				const o = new Uint8Array(await I(e.arrayBuffer(), a)), i = Array.from(o);
				return a?.throwIfAborted(), await s("save_file_atomic", {
					path: n,
					bytes: i
				}), n;
			}(e, t, a)
		},
		fileDrop: { subscribe: (e) => function(e) {
			let t = null, a = !1;
			return (async () => {
				const { getCurrentWindow: r } = await import("./window-uHC0_7hY.js"), s = await r().onDragDropEvent(async (t) => {
					const a = t.payload;
					"enter" === a.type ? e({ phase: "enter" }) : "over" === a.type ? e({ phase: "over" }) : "leave" === a.type ? e({ phase: "leave" }) : "drop" === a.type && e({
						phase: "drop",
						sources: await Promise.all(a.paths.map((e) => ce.fromPath(e)))
					});
				});
				a ? s() : t = s;
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
					const { getCurrentWindow: r } = await import("./window-uHC0_7hY.js"), s = await r().onCloseRequested(async (t) => {
						await e() || t.preventDefault();
					});
					a ? s() : t = s;
				})(), () => {
					a = !0, t?.();
				};
			}(e),
			onMenuAction: (e) => function(e) {
				let t = null, a = !1;
				return (async () => {
					const { listen: r } = await import("./event-BInfzwX-.js"), s = await r("menu-action", (t) => e(t.payload));
					a ? s() : t = s;
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
					groupHash: await le(e),
					username: t
				});
			}(e, t),
			computeGroupHash: (e) => le(e)
		},
		peers: { discoverPeers: async () => {
			const { invoke: e } = await import("./core-B0WeKh9d.js");
			return e("discover_peers");
		} },
		updater: {
			check: () => async function() {
				const { check: e } = await import("./dist-js-D7-Ut_gj.js"), t = await e();
				return t?.available ? (pt = t, {
					version: t.version,
					currentVersion: t.currentVersion,
					...t.body ? { body: t.body } : {},
					...t.date ? { date: t.date } : {}
				}) : (pt = null, null);
			}(),
			downloadAndInstall: (e) => async function(e) {
				if (!pt) throw new Error("No pending update. Call checkForUpdate() first.");
				const t = pt;
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
				}), pt = null;
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
								...Object.fromEntries(et().filter((e) => !st.includes(e)).map((e) => [`application/x-${e.slice(1)}`, [e]]))
							}
						}],
						multiple: e
					}), a = [];
					for (const e of t) a.push(await e.getFile());
					return a.length > 0 ? a : null;
				} catch (t) {
					return t instanceof DOMException && "AbortError" === t.name ? null : (console.warn("[web-dialogs] showOpenFilePicker failed, falling back to <input>:", t instanceof Error ? t.message : t), nt(e));
				}
				return nt(e);
			}(e),
			pickFolder: (e) => async function(e) {
				if ("showDirectoryPicker" in window) try {
					const t = await window.showDirectoryPicker();
					return await it(t, t.name, e);
				} catch (t) {
					return t instanceof DOMException && "AbortError" === t.name ? null : (console.warn("[web-dialogs] showDirectoryPicker failed, falling back to <input>:", t instanceof Error ? t.message : t), ot());
				}
				return ot();
			}(e),
			saveBlob: (e, t, a) => (a?.throwIfAborted(), function(e, t) {
				const a = URL.createObjectURL(e), r = document.createElement("a");
				r.href = a, r.download = t, document.body.appendChild(r), r.click(), document.body.removeChild(r), setTimeout(() => URL.revokeObjectURL(a), 1e3);
			}(e, t), Promise.resolve(null))
		},
		fileDrop: { subscribe: (e, t) => {
			const a = t ?? window, r = (e) => Array.from(e.dataTransfer?.types ?? []).includes("Files"), s = (e) => Array.from(e.dataTransfer?.items ?? []).filter((e) => "file" === e.kind).map((e) => {
				const t = e.getAsFile?.();
				return e.webkitGetAsEntry?.()?.isDirectory ? {
					name: t?.name,
					type: e.type,
					directory: !0
				} : t ? {
					name: t.name,
					type: e.type
				} : { type: e.type };
			}), n = (t) => {
				const a = t;
				r(a) && (a.preventDefault(), e({
					phase: "enter",
					items: s(a)
				}));
			}, o = (t) => {
				const a = t;
				r(a) && (a.preventDefault(), e({
					phase: "over",
					items: s(a)
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
						const t = await e.handle?.catch(() => null) ?? (e.legacy ? lt(e.legacy) : null);
						return "directory" === t?.kind ? it(t) : t?.getFile ? [await t.getFile().catch(() => Fe(t.name, !0))] : e.file ? [e.file] : [Fe(e.legacy?.name ?? "GGIR output folder", !0)];
					}))).flat() : Array.from(e.files);
				}(a.dataTransfer).then((t) => e({
					phase: "drop",
					sources: t
				})));
			};
			return a.addEventListener("dragenter", n), a.addEventListener("dragover", o), a.addEventListener("dragleave", i), a.addEventListener("drop", c), () => {
				a.removeEventListener("dragenter", n), a.removeEventListener("dragover", o), a.removeEventListener("dragleave", i), a.removeEventListener("drop", c);
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
		peers: { discoverPeers: () => Promise.resolve([]) },
		updater: {
			check: () => Promise.resolve(null),
			downloadAndInstall: () => Promise.reject(/* @__PURE__ */ new Error(dt)),
			relaunch: () => Promise.reject(/* @__PURE__ */ new Error(dt))
		}
	}), ft;
}
const wt = "undefined" != typeof process && !1;
let _t = !1;
const ht = {
	get basePath() {
		const e = "/sleep-scoring-wasm/", t = e.replace(/\/$/, ""), a = "undefined" != typeof window ? window.__CONFIG__?.basePath : void 0;
		return null == a ? t : "" !== t && a !== t ? (_t || (_t = !0, console.error(`[config] config.js basePath "${a}" does not match the build base "${e}"; using "${t}". Fix config.js or rebuild with VITE_BASE_PATH="${a}/".`)), t) : a;
	},
	get apiBaseUrl() {
		return `${this.basePath}/api/v1`;
	},
	get isDev() {
		return wt;
	},
	get isProd() {
		return !wt;
	}
}, gt = "sleep-scoring-workspaces-wasm", yt = "sleep-scoring-active-workspace-wasm", vt = `${gt}.migrated`;
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
				if (0 === await P.workspaces.count()) {
					const e = localStorage.getItem(gt);
					if (e) {
						const t = JSON.parse(e)?.state?.workspaces;
						Array.isArray(t) && t.length > 0 && await N(t), localStorage.removeItem(gt);
					}
				}
				await async function() {
					try {
						const e = globalThis.indexedDB, t = await P.workspaces.toArray();
						if (await Promise.all(t.map(async (e) => {
							e.restoreLock && globalThis.navigator?.locks?.request && await navigator.locks.request(e.restoreLock, { ifAvailable: !0 }, async (t) => {
								if (!t) return;
								const [a, r] = await Promise.all([P.workspaces.get(e.id), P.uiSettings.get(bt(e.dbName))]);
								a?.restoreLock === e.restoreLock && r?.value !== e.restoreLock && await At.getState().discardUncommittedWorkspace(e.id);
							});
						})), !e?.databases) return;
						const a = (await e.databases()).map((e) => e.name).filter((e) => !!e), r = a.filter((e) => "SleepScoringDB" === e || /^SleepScoringDB-.+/.test(e));
						if (0 === r.length) return;
						const s = new Set((await P.workspaces.toArray()).map((e) => e.dbName)), n = await D(), o = "SleepScoringGlobal";
						if (a.includes(o)) {
							const e = new O(o);
							try {
								for (const t of await e.workspaces.toArray()) s.add(t.dbName);
								for (const t of await D(e)) n.add(t);
							} catch {} finally {
								e.close();
							}
						}
						const { deleteWorkspaceDb: c } = await Promise.resolve().then(() => Pt);
						await Promise.all(r.filter((e) => n.has(e)).map(c));
						const l = r.filter((e) => !s.has(e) && !n.has(e));
						if (0 === l.length) return;
						const u = (/* @__PURE__ */ new Date()).toISOString(), p = await N(l.map((e) => ({
							id: "SleepScoringDB" === e ? i() : e.slice(15),
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
			t = await P.workspaces.toArray();
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
		await N(a, r);
		for (const s of r) St.delete(s);
	},
	removeItem: async (e) => {
		await P.workspaces.clear();
	}
};
function Rt(e) {
	St.add(e), At.setState({ workspaces: At.getState().workspaces.filter((t) => t.id !== e) });
}
const At = U()(oe((e, t) => ({
	workspaces: [],
	storageUnavailable: !1,
	createWorkspace: (t, a, r) => {
		const s = i(), n = {
			...r ? { restoreLock: r } : {},
			id: s,
			displayName: a,
			serverUrl: t.replace(/\/+$/, ""),
			dbName: `SleepScoringDB-${s}`,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			lastAccessedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		return e((e) => ({ workspaces: [...e.workspaces, n] })), n;
	},
	commitWorkspaceRestore: async (a) => {
		const r = t().workspaces.find((e) => e.id === a);
		if (!r) throw new Error("The restored workspace is no longer registered.");
		const { restoreLock: s, ...n } = r;
		await P.transaction("rw", P.workspaces, P.uiSettings, async () => {
			await P.uiSettings.put({
				key: bt(r.dbName),
				value: s,
				updatedAt: Date.now()
			}), await N([n]);
		}), e((e) => ({ workspaces: e.workspaces.map((e) => e.id === a ? n : e) }));
	},
	createWorkspaceWithId: (t) => {
		e((e) => ({ workspaces: [...e.workspaces, t] }));
	},
	deleteWorkspace: async (e) => {
		const { runWorkspaceScopeChange: a } = await import("./workspace-switch-B_chtNRn.js");
		return a(async () => {
			if (e === Ot()) return void console.warn("Cannot delete the currently active workspace");
			const a = t().workspaces.find((t) => t.id === e);
			let r;
			if (a?.dbName) {
				const { preserveWorkspaceAuditLog: e } = await import("./workspace-audit-preservation-DiPuh25u.js"), { auditLog: t } = await import("./audit-log-CbSY_580.js").then((e) => e.n), { useSleepScoringStore: s } = await import("./store-CMG-u5eb.js").then((e) => e.r), { username: n, sitePassword: o } = s.getState(), i = await e(a, {
					username: n,
					sitePassword: o
				}), { SleepScoringDB: c } = await import("./schema-CoLJBY5o.js").then((e) => e.u), { countWorkspaceContents: l } = await import("./workspace-contents-jXDK412d.js"), u = new c(a.dbName);
				let d;
				try {
					await u.open(), r = await l(u), d = await u.files.toArray();
				} finally {
					u.close();
				}
				const { deleteWorkspaceDb: p } = await Promise.resolve().then(() => Pt);
				await p(a.dbName);
				const { deleteMigrationBackups: f } = await import("./pre-migration-backup-CuZ61ARN.js").then((e) => e.t);
				await f(a.dbName);
				const { deleteFileCaches: m } = await import("./store-CMG-u5eb.js").then((e) => e.h);
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
			} catch (s) {
				console.warn("Failed to clean up localStorage:", s);
			}
			return mt().capabilities.tauri && mt().workspace.deleteWorkspace(e).catch((e) => {
				console.warn("Failed to delete Tauri workspace DB:", e);
			}), r;
		});
	},
	discardUncommittedWorkspace: async (e) => {
		const { runWorkspaceScopeChange: a } = await import("./workspace-switch-B_chtNRn.js");
		return a(async () => {
			const a = t().workspaces.find((t) => t.id === e) ?? await P.workspaces.get(e);
			if (a?.dbName) {
				const { deleteWorkspaceDb: e } = await Promise.resolve().then(() => Pt);
				await e(a.dbName);
				const { deleteMigrationBackups: t } = await import("./pre-migration-backup-CuZ61ARN.js").then((e) => e.t);
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
			const { lastUsername: a, ...s } = e;
			return "" === r ? s : {
				...s,
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
				ht.basePath;
			})();
		} catch (a) {
			console.warn("[workspace-store] serverUrl normalization failed:", a);
		}
	}
})), It = U()(() => ({
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
var Pt = a({
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
	for (const t of Object.values(B.getState().jobs)) t.workspaceId === e && t.controller.abort();
	for (const t of Tt) {
		const a = t.deref();
		a && a.name !== e || Tt.delete(t), a?.name === e && a.close({ disableAutoOpen: !0 });
	}
}
async function jt(e) {
	const t = {
		key: T(e),
		value: !0,
		updatedAt: Date.now()
	};
	await P.transaction("rw", P.workspaces, P.uiSettings, async () => {
		await P.uiSettings.put(t);
		const a = await P.workspaces.toArray();
		await P.workspaces.bulkDelete(a.filter((t) => t.dbName === e).map((e) => e.id));
	}), Lt(e), Gt(e);
	const { workspaces: a } = At.getState();
	a.some((t) => t.dbName === e) && At.setState({ workspaces: a.filter((t) => t.dbName !== e) });
	try {
		const { publishWorkspaceDeletion: e } = await import("./project-revision-CUvdbw1R.js").then((e) => e.n);
		e();
	} catch {}
	try {
		await r.delete(e);
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
r.addons.push((e) => {
	Tt.add(new WeakRef(e));
	const t = e.open.bind(e);
	e.open = () => Dt.has(e.name) ? r.Promise.reject(new r.DatabaseClosedError()) : t().catch((t) => {
		throw Dt.has(e.name) && (Lt(e.name), Gt(e.name)), t;
	});
	const a = () => {
		if (e instanceof o) return r.waitFor(P.uiSettings.get(T(e.name))).then((t) => {
			if (t) throw Dt.add(e.name), new r.DatabaseClosedError();
		});
	};
	e.on("populate", a), e.on("ready", a, !0), e.on("versionchange", (t) => {
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
		e && import("./workspace-switch-B_chtNRn.js").then(({ runWorkspaceScopeChange: t }) => t(() => {
			Ct === e && e.close({ disableAutoOpen: !1 });
		})).catch(() => {});
	};
	window.addEventListener("pagehide", e), window.addEventListener("freeze", e), window.addEventListener("pageshow", (e) => {
		const t = Ct;
		e.persisted && t && import("./workspace-switch-B_chtNRn.js").then(async ({ workspaceActivation: e }) => {
			await e;
			const { useSleepScoringStore: a } = await import("./store-CMG-u5eb.js").then((e) => e.r), { username: r, selectedStudyId: s, isAuthenticated: n } = a.getState();
			if (Ct !== t || !n || !r) return;
			const { recoverWorkspaceDiaryBindings: o } = await import("./staged-diary-import-BPE5rlk-.js").then((e) => e.t);
			Ct === t && await o(t, {
				username: r,
				studyId: s
			});
		}).catch(() => {
			console.warn("[diary] Page resume recovery could not start.", { failed: 1 });
		});
	});
}
export { I as $, Re as A, se as B, ge as C, ke as D, be as E, Pe as F, q as G, oe as H, Ce as I, F as J, Y as K, Te as L, Ne as M, Ie as N, Se as O, Oe as P, A as Q, Ge as R, he as S, ve as T, z as U, ae as V, $ as W, U as X, V as Y, G as Z, fe as _, Ot as a, p as at, _e as b, mt as c, d as ct, Me as d, v as dt, y as et, $e as f, pe as g, de as h, xt as i, f as it, Ae as j, Ee as k, Ze as l, R as lt, Ke as m, Vt as n, b as nt, At as o, l as ot, Ve as p, B as q, Mt as r, k as rt, ht as s, m as st, Ft as t, u as tt, Qe as u, E as ut, me as v, ye as w, De as x, we as y, je as z };
