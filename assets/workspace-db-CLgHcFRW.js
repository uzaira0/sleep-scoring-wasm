import { a as e, l as t, s as a } from "./ggir-results-types-WB8axvb-.js";
import { d as r, f as s, o, yn as n } from "./schema-R3Hec65Z.js";
import { t as i } from "./platform-BjmjOECj.js";
var c = class extends n {
	workspaces;
	uiSettings;
	constructor(e) {
		super(e), this.version(1).stores({
			workspaces: "id, lastAccessedAt",
			uiSettings: "key, updatedAt"
		}), r(this);
	}
};
const l = new c("SleepScoringGlobal-wasm"), u = "workspace-deleted:";
function d(e) {
	return `${u}${e}`;
}
async function p(e = l) {
	const t = await e.uiSettings.where("key").startsWith(u).primaryKeys();
	return new Set(t.map((e) => e.slice(18)));
}
async function w(e, t = []) {
	return l.transaction("rw", l.workspaces, l.uiSettings, async () => {
		const a = await p(), r = e.filter((e) => !a.has(e.dbName));
		return t.length > 0 && await l.workspaces.bulkDelete([...t]), r.length > 0 && await l.workspaces.bulkPut(r), r.length;
	});
}
const f = (e) => {
	let t;
	const a = /* @__PURE__ */ new Set(), r = (e, r) => {
		const s = "function" == typeof e ? e(t) : e;
		if (!Object.is(s, t)) {
			const e = t;
			t = (null != r ? r : "object" != typeof s || null === s) ? s : Object.assign({}, t, s), a.forEach((a) => a(t, e));
		}
	}, s = () => t, o = {
		setState: r,
		getState: s,
		getInitialState: () => n,
		subscribe: (e) => (a.add(e), () => a.delete(e))
	}, n = t = e(r, s, o);
	return o;
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
var m = e((e) => {
	var t = Symbol.for("react.transitional.element"), a = Symbol.for("react.consumer"), r = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), o = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, n = Object.assign, i = {};
	function c(e, t, a) {
		this.props = e, this.context = t, this.refs = i, this.updater = a || o;
	}
	function l() {}
	function u(e, t, a) {
		this.props = e, this.context = t, this.refs = i, this.updater = a || o;
	}
	c.prototype.isReactComponent = {}, c.prototype.setState = function(e, t) {
		if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, c.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	}, l.prototype = c.prototype;
	var d = u.prototype = new l();
	d.constructor = u, n(d, c.prototype), d.isPureReactComponent = !0, Array.isArray;
	var p = {
		H: null,
		A: null,
		T: null,
		S: null
	}, w = Object.prototype.hasOwnProperty;
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
		var s, o = {}, n = null;
		if (null != a) for (s in void 0 !== a.key && (n = "" + a.key), a) w.call(a, s) && "key" !== s && "__self" !== s && "__source" !== s && (o[s] = a[s]);
		var i = arguments.length - 2;
		if (1 === i) o.children = r;
		else if (1 < i) {
			for (var c = Array(i), l = 0; l < i; l++) c[l] = arguments[l + 2];
			o.children = c;
		}
		if (e && e.defaultProps) for (s in i = e.defaultProps) void 0 === o[s] && (o[s] = i[s]);
		return function(e, a, r) {
			var s = r.ref;
			return {
				$$typeof: t,
				type: e,
				key: a,
				ref: void 0 !== s ? s : null,
				props: r
			};
		}(e, n, o);
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
}), g = e((e, t) => {
	t.exports = m();
}), y = t(g(), 1);
const h = (e) => e, S = (e) => {
	const t = ((e) => e ? f(e) : f)(e), a = (e) => function(e, t = h) {
		const a = y.useSyncExternalStore(e.subscribe, y.useCallback(() => t(e.getState()), [e, t]), y.useCallback(() => t(e.getInitialState()), [e, t]));
		return y.useDebugValue(a), a;
	}(t, e);
	return Object.assign(a, t), a;
}, k = (e) => e ? S(e) : S, v = {
	IMPORT: "import",
	REPROCESS: "reprocess",
	SCORED_VARIANT_WARM: "scored-variant-warm",
	VARIANT_RECOVERY: "variant-recovery",
	GGIR_RECOMPUTE: "ggir-recompute",
	GGIR_RECOVERY: "ggir-recovery",
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
}, b = {
	QUEUED: "queued",
	RUNNING: "running",
	JOINED: "joined",
	RERUN: "rerun",
	CANCELLED: "cancelled",
	COMMITTED: "committed",
	DONE: "done",
	FAILED: "failed",
	ELSEWHERE: "elsewhere"
}, E = {
	[v.IMPORT]: "user",
	[v.REPROCESS]: "user",
	[v.SCORED_VARIANT_WARM]: "automatic",
	[v.VARIANT_RECOVERY]: "automatic",
	[v.GGIR_RECOMPUTE]: "automatic",
	[v.GGIR_RECOVERY]: "automatic",
	[v.NIGHT_DIFFICULTY]: "automatic",
	[v.PHYSICAL_ACTIVITY]: "automatic",
	[v.PLACEMENT]: "automatic",
	[v.AUTO_SCORE]: "automatic",
	[v.PLACEMENT_RECOVERY]: "automatic",
	[v.BACKUP_EXPORT]: "user",
	[v.BACKUP_RESTORE]: "user",
	[v.RESCORE]: "user",
	[v.EXPORT]: "user",
	[v.DIARY_VALIDATE]: "user",
	[v.DIARY_REPAIR]: "user",
	[v.DIARY_IMPORT]: "user",
	[v.HDCZA_REFRESH]: "automatic",
	[v.SYNC]: "automatic",
	[v.WAL_TRIM]: "automatic",
	[v.MODEL_DOWNLOAD]: "user",
	[v.NONWEAR_IMPORT]: "user",
	[v.AUDIT_EXPORT]: "user"
};
function R(e) {
	return "automatic" === E[e];
}
function A(e) {
	return [
		v.WAL_TRIM,
		v.PLACEMENT,
		v.PLACEMENT_RECOVERY,
		v.NIGHT_DIFFICULTY,
		v.PHYSICAL_ACTIVITY,
		v.VARIANT_RECOVERY,
		v.GGIR_RECOVERY
	].includes(e);
}
const I = k((e, t) => ({
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
		r.status === b.FAILED ? r.visible = !0 : R(r.kind) && (r.visible = !1);
		const s = { ...e.jobs };
		r.status === b.FAILED && Reflect.deleteProperty(s, `${t}:failure`);
		const o = e.jobs[t];
		if (o?.status === b.FAILED && r.status !== b.FAILED && P(o)) {
			const e = `${t}:failure`;
			s[e] = {
				...o,
				id: e,
				noticeOnly: !0
			};
		}
		_(r) || Reflect.deleteProperty(s, t), r.status === b.DONE && R(r.kind) || (s[t] = r);
		const n = Object.values(s).filter((e) => !_(e) && e.status !== b.FAILED);
		for (const t of n.slice(0, Math.max(0, n.length - 5))) Reflect.deleteProperty(s, t.id);
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
function O(e) {
	return e.localProcessingJobId ? e.jobs[e.localProcessingJobId] : void 0;
}
function P(e) {
	return !e.noticeOnly;
}
function _(e) {
	return e?.status === b.QUEUED || e?.status === b.RUNNING;
}
const D = (e) => !!e.dispatchFromDevtools && "function" == typeof e.dispatch, C = /* @__PURE__ */ new Map(), N = (e) => {
	const t = C.get(e);
	return t ? Object.fromEntries(Object.entries(t.stores).map(([e, t]) => [e, t.getState()])) : {};
}, T = /^at (?:new |async )?(.+?) \(/, j = /^([^@]+)@/;
function L(e) {
	var t, a, r;
	if (!e) return;
	const s = e.split("\n"), o = s.findIndex((e) => e.includes("api.setState"));
	if (o < 0) return;
	const n = (null == (t = s[o + 1]) ? void 0 : t.trim()) || "";
	return (null == (a = T.exec(n)) ? void 0 : a[1]) || (null == (r = j.exec(n)) ? void 0 : r[1]);
}
const U = (e, t = {}) => (a, r, s) => {
	const { enabled: o, anonymousActionType: n, store: i, ...c } = t;
	let l;
	try {
		l = null != o && o && window.__REDUX_DEVTOOLS_EXTENSION__;
	} catch (m) {}
	if (!l) return e(a, r, s);
	const { connection: u, ...d } = ((e, t, a) => {
		if (void 0 === e) return {
			type: "untracked",
			connection: t.connect(a)
		};
		const r = C.get(a.name);
		if (r) return {
			type: "tracked",
			store: e,
			...r
		};
		const s = {
			connection: t.connect(a),
			stores: {}
		};
		return C.set(a.name, s), {
			type: "tracked",
			store: e,
			...s
		};
	})(i, l, c);
	let p = !0;
	s.setState = (e, t, o) => {
		const l = a(e, t);
		if (!p) return l;
		const d = void 0 === o ? { type: n || L((/* @__PURE__ */ new Error()).stack) || "anonymous" } : "string" == typeof o ? { type: o } : o;
		return void 0 === i ? (u?.send(d, r()), l) : (u?.send({
			...d,
			type: `${i}/${d.type}`
		}, {
			...N(c.name),
			[i]: s.getState()
		}), l);
	}, s.devtools = { cleanup: () => {
		u && "function" == typeof u.unsubscribe && u.unsubscribe(), ((e, t) => {
			if (void 0 === t) return;
			const a = C.get(e);
			a && (delete a.stores[t], 0 === Object.keys(a.stores).length && C.delete(e));
		})(c.name, i);
	} };
	const w = (...e) => {
		const t = p;
		p = !1, a(...e), p = t;
	}, f = e(s.setState, r, s);
	if ("untracked" === d.type ? u?.init(f) : (d.stores[d.store] = s, u?.init(Object.fromEntries(Object.entries(d.stores).map(([e, t]) => [e, e === d.store ? f : t.getState()])))), D(s)) {
		const e = s.dispatch;
		s.dispatch = (...t) => {
			e(...t);
		};
	}
	return u.subscribe((e) => {
		var t;
		switch (e.type) {
			case "ACTION": return "string" != typeof e.payload ? void console.error("[zustand devtools middleware] Unsupported action format") : W(e.payload, (e) => {
				if ("__setState" === e.type) {
					if (void 0 === i) return void w(e.state);
					1 !== Object.keys(e.state).length && console.error("\n                    [zustand devtools middleware] Unsupported __setState action format.\n                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),\n                    and value of this only key should be a state object. Example: { \"type\": \"__setState\", \"state\": { \"abc123Store\": { \"foo\": \"bar\" } } }\n                    ");
					const t = e.state[i];
					if (null == t) return;
					JSON.stringify(s.getState()) !== JSON.stringify(t) && w(t);
					return;
				}
				D(s) && s.dispatch(e);
			});
			case "DISPATCH":
				switch (e.payload.type) {
					case "RESET": return w(f), void 0 === i ? null == u ? void 0 : u.init(s.getState()) : null == u ? void 0 : u.init(N(c.name));
					case "COMMIT": return void 0 === i ? void u?.init(s.getState()) : null == u ? void 0 : u.init(N(c.name));
					case "ROLLBACK": return W(e.state, (e) => {
						if (void 0 === i) return w(e), void u?.init(s.getState());
						w(e[i]), u?.init(N(c.name));
					});
					case "JUMP_TO_STATE":
					case "JUMP_TO_ACTION": return W(e.state, (e) => {
						void 0 !== i ? JSON.stringify(s.getState()) !== JSON.stringify(e[i]) && w(e[i]) : w(e);
					});
					case "IMPORT_STATE": {
						const { nextLiftedState: a } = e.payload, r = null == (t = a.computedStates.slice(-1)[0]) ? void 0 : t.state;
						if (!r) return;
						w(void 0 === i ? r : r[i]), u?.send(null, a);
						return;
					}
					case "PAUSE_RECORDING": return p = !p;
				}
				return;
		}
	}), f;
}, W = (e, t) => {
	let a;
	try {
		a = JSON.parse(e);
	} catch (r) {
		console.error("[zustand devtools middleware] Could not parse the received json", r);
	}
	void 0 !== a && t(a);
};
function M(e, t) {
	let a;
	try {
		a = e();
	} catch (r) {
		return;
	}
	return {
		getItem: (e) => {
			var r;
			const s = (e) => null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver), o = null != (r = a.getItem(e)) ? r : null;
			return o instanceof Promise ? o.then(s) : s(o);
		},
		setItem: (e, r) => a.setItem(e, JSON.stringify(r, null == t ? void 0 : t.replacer)),
		removeItem: (e) => a.removeItem(e)
	};
}
const $ = (e) => (t) => {
	try {
		const a = e(t);
		return a instanceof Promise ? a : {
			then: (e) => $(e)(a),
			catch(e) {
				return this;
			}
		};
	} catch (a) {
		return {
			then(e) {
				return this;
			},
			catch: (e) => $(e)(a)
		};
	}
}, V = (e, t) => (a, r, s) => {
	let o = {
		storage: M(() => window.localStorage),
		partialize: (e) => e,
		version: 0,
		merge: (e, t) => ({
			...t,
			...e
		}),
		...t
	}, n = !1, i = 0;
	const c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
	let u = o.storage;
	if (!u) return e((...e) => {
		console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`), a(...e);
	}, r, s);
	const d = () => {
		const e = o.partialize({ ...r() });
		return u.setItem(o.name, {
			state: e,
			version: o.version
		});
	}, p = s.setState;
	s.setState = (e, t) => (p(e, t), d());
	const w = e((...e) => (a(...e), d()), r, s);
	let f;
	s.getInitialState = () => w;
	const m = () => {
		var e, t;
		if (!u) return;
		const s = ++i;
		n = !1, c.forEach((e) => {
			var t;
			return e(null != (t = r()) ? t : w);
		});
		const p = (null == (t = o.onRehydrateStorage) ? void 0 : t.call(o, null != (e = r()) ? e : w)) || void 0;
		return $(u.getItem.bind(u))(o.name).then((e) => {
			if (e) {
				if ("number" != typeof e.version || e.version === o.version) return [!1, e.state];
				if (o.migrate) {
					const t = o.migrate(e.state, e.version);
					return t instanceof Promise ? t.then((e) => [!0, e]) : [!0, t];
				}
				console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
			}
			return [!1, void 0];
		}).then((e) => {
			var t;
			if (s !== i) return;
			const [n, c] = e;
			return f = o.merge(c, null != (t = r()) ? t : w), a(f, !0), n ? d() : void 0;
		}).then(() => {
			s === i && (p?.(r(), void 0), f = r(), n = !0, l.forEach((e) => e(f)));
		}).catch((e) => {
			s === i && p?.(void 0, e);
		});
	};
	return s.persist = {
		setOptions: (e) => {
			o = {
				...o,
				...e
			}, e.storage && (u = e.storage);
		},
		clearStorage: () => {
			++i, u?.removeItem(o.name);
		},
		getOptions: () => o,
		rehydrate: () => m(),
		hasHydrated: () => n,
		onHydrate: (e) => (c.add(e), () => {
			c.delete(e);
		}),
		onFinishHydration: (e) => (l.add(e), () => {
			l.delete(e);
		})
	}, o.skipHydration || m(), f || w;
}, Y = "undefined" != typeof process && !1;
let x = !1;
const F = {
	get basePath() {
		const e = "/sleep-scoring-wasm/", t = e.replace(/\/$/, ""), a = "undefined" != typeof window ? window.__CONFIG__?.basePath : void 0;
		return null == a ? t : "" !== t && a !== t ? (x || (x = !0, console.error(`[config] config.js basePath "${a}" does not match the build base "${e}"; using "${t}". Fix config.js or rebuild with VITE_BASE_PATH="${a}/".`)), t) : a;
	},
	get apiBaseUrl() {
		return `${this.basePath}/api/v1`;
	},
	get isDev() {
		return Y;
	},
	get isProd() {
		return !Y;
	}
}, G = "sleep-scoring-workspaces-wasm", H = "sleep-scoring-active-workspace-wasm", B = `${G}.migrated`;
function J(e) {
	return `workspace-restore-committed:${e}`;
}
let z = null;
const q = /* @__PURE__ */ new Set();
const X = {
	getItem: async (e) => {
		let t;
		await (z || (z = (async () => {
			try {
				if ("undefined" == typeof localStorage) return;
				if (0 === await l.workspaces.count()) {
					const e = localStorage.getItem(G);
					if (e) {
						const t = JSON.parse(e)?.state?.workspaces;
						Array.isArray(t) && t.length > 0 && await w(t), localStorage.removeItem(G);
					}
				}
				await async function() {
					try {
						const e = globalThis.indexedDB, t = await l.workspaces.toArray();
						if (await Promise.all(t.map(async (e) => {
							e.restoreLock && globalThis.navigator?.locks?.request && await navigator.locks.request(e.restoreLock, { ifAvailable: !0 }, async (t) => {
								if (!t) return;
								const [a, r] = await Promise.all([l.workspaces.get(e.id), l.uiSettings.get(J(e.dbName))]);
								a?.restoreLock === e.restoreLock && r?.value !== e.restoreLock && await Q.getState().discardUncommittedWorkspace(e.id);
							});
						})), !e?.databases) return;
						const a = (await e.databases()).map((e) => e.name).filter((e) => !!e), r = a.filter((e) => "SleepScoringDB" === e || /^SleepScoringDB-.+/.test(e));
						if (0 === r.length) return;
						const o = new Set((await l.workspaces.toArray()).map((e) => e.dbName)), n = await p(), i = "SleepScoringGlobal";
						if (a.includes(i)) {
							const e = new c(i);
							try {
								for (const t of await e.workspaces.toArray()) o.add(t.dbName);
								for (const t of await p(e)) n.add(t);
							} catch {} finally {
								e.close();
							}
						}
						const { deleteWorkspaceDb: u } = await Promise.resolve().then(() => te);
						await Promise.all(r.filter((e) => n.has(e)).map(u));
						const d = r.filter((e) => !o.has(e) && !n.has(e));
						if (0 === d.length) return;
						const f = (/* @__PURE__ */ new Date()).toISOString(), g = await w(d.map((e) => ({
							id: "SleepScoringDB" === e ? s() : e.slice(15),
							displayName: "Recovered data",
							serverUrl: "",
							dbName: e,
							createdAt: f,
							lastAccessedAt: f
						})));
						console.warn(`workspace-store: re-registered ${g} orphaned local workspace database(s)`);
					} catch (e) {
						console.warn("workspace-store: orphan recovery failed", e);
					}
				}(), localStorage.setItem(B, "1");
			} catch (e) {
				console.warn("workspace-store: migration failed", e);
			}
		})(), z));
		try {
			t = await l.workspaces.toArray();
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
		const a = t.state.workspaces ?? [], r = [...q];
		await w(a, r);
		for (const s of r) q.delete(s);
	},
	removeItem: async (e) => {
		await l.workspaces.clear();
	}
};
function K(e) {
	q.add(e), Q.setState({ workspaces: Q.getState().workspaces.filter((t) => t.id !== e) });
}
const Q = k()(V((e, t) => ({
	workspaces: [],
	storageUnavailable: !1,
	createWorkspace: (t, a, r) => {
		const o = s(), n = {
			...r ? { restoreLock: r } : {},
			id: o,
			displayName: a,
			serverUrl: t.replace(/\/+$/, ""),
			dbName: `SleepScoringDB-${o}`,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			lastAccessedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		return e((e) => ({ workspaces: [...e.workspaces, n] })), n;
	},
	commitWorkspaceRestore: async (a) => {
		const r = t().workspaces.find((e) => e.id === a);
		if (!r) throw new Error("The restored workspace is no longer registered.");
		const { restoreLock: s, ...o } = r;
		await l.transaction("rw", l.workspaces, l.uiSettings, async () => {
			await l.uiSettings.put({
				key: J(r.dbName),
				value: s,
				updatedAt: Date.now()
			}), await w([o]);
		}), e((e) => ({ workspaces: e.workspaces.map((e) => e.id === a ? o : e) }));
	},
	createWorkspaceWithId: (t) => {
		e((e) => ({ workspaces: [...e.workspaces, t] }));
	},
	deleteWorkspace: async (e) => {
		const { runWorkspaceScopeChange: a } = await import("./workspace-switch-Q37pNHi6.js");
		return a(async () => {
			if (e === ee()) return void console.warn("Cannot delete the currently active workspace");
			const a = t().workspaces.find((t) => t.id === e);
			let r;
			if (a?.dbName) {
				const { preserveWorkspaceAuditLog: e } = await import("./workspace-audit-preservation-Cn7dYx48.js"), { auditLog: t } = await import("./audit-log-CtYCM6oq.js").then((e) => e.n), { useSleepScoringStore: s } = await import("./store-CUWcR6kX.js").then((e) => e.r), { username: o, sitePassword: n } = s.getState(), i = await e(a, {
					username: o,
					sitePassword: n
				}), { SleepScoringDB: c } = await import("./schema-R3Hec65Z.js").then((e) => e.u), { countWorkspaceContents: l } = await import("./workspace-contents-8-LworBO.js"), u = new c(a.dbName);
				let d;
				try {
					await u.open(), r = await l(u), d = await u.files.toArray();
				} finally {
					u.close();
				}
				const { deleteWorkspaceDb: p } = await Promise.resolve().then(() => te);
				await p(a.dbName);
				const { deleteMigrationBackups: w } = await import("./pre-migration-backup-BtHaL69u.js").then((e) => e.t);
				await w(a.dbName);
				const { deleteFileCaches: f } = await import("./store-CUWcR6kX.js").then((e) => e.m);
				await f(d), t.recordAppEvent("workspace_deleted", {
					workspaceId: a.id,
					displayName: a.displayName,
					auditRowsTotal: i.total,
					auditRowsReplicated: i.replicated,
					auditRowsDestroyed: i.destroyed,
					...i.reason ? { reason: i.reason } : {}
				}), await t.settleWrites();
			}
			K(e);
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
			return i().capabilities.tauri && i().workspace.deleteWorkspace(e).catch((e) => {
				console.warn("Failed to delete Tauri workspace DB:", e);
			}), r;
		});
	},
	discardUncommittedWorkspace: async (e) => {
		const { runWorkspaceScopeChange: a } = await import("./workspace-switch-Q37pNHi6.js");
		return a(async () => {
			const a = t().workspaces.find((t) => t.id === e) ?? await l.workspaces.get(e);
			if (a?.dbName) {
				const { deleteWorkspaceDb: e } = await Promise.resolve().then(() => te);
				await e(a.dbName);
				const { deleteMigrationBackups: t } = await import("./pre-migration-backup-BtHaL69u.js").then((e) => e.t);
				await t(a.dbName);
			}
			K(e);
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
	name: G,
	storage: X,
	onRehydrateStorage: () => (e, t) => {
		if (!t) try {
			(async function() {
				F.basePath;
			})();
		} catch (a) {
			console.warn("[workspace-store] serverUrl normalization failed:", a);
		}
	}
})), Z = k()(() => ({
	activeId: (() => {
		try {
			return sessionStorage.getItem(H);
		} catch {
			return null;
		}
	})(),
	activating: !1
}));
function ee() {
	return Z.getState().activeId;
}
var te = a({
	closeDb: () => ye,
	deleteWorkspaceDb: () => ie,
	getDb: () => fe,
	hasOpenDb: () => me,
	isWorkspaceDbDeleted: () => ue,
	reconcileWorkspaceDeletions: () => ce,
	subscribeDbChanges: () => pe,
	switchDb: () => ge
});
let ae = null;
const re = /* @__PURE__ */ new Set(), se = /* @__PURE__ */ new Set(), oe = /* @__PURE__ */ new Set();
function ne(e) {
	se.add(e);
	for (const t of Object.values(I.getState().jobs)) t.workspaceId === e && t.controller.abort();
	for (const t of re) {
		const a = t.deref();
		a && a.name !== e || re.delete(t), a?.name === e && a.close({ disableAutoOpen: !0 });
	}
}
async function ie(e) {
	const t = {
		key: d(e),
		value: !0,
		updatedAt: Date.now()
	};
	await l.transaction("rw", l.workspaces, l.uiSettings, async () => {
		await l.uiSettings.put(t);
		const a = await l.workspaces.toArray();
		await l.workspaces.bulkDelete(a.filter((t) => t.dbName === e).map((e) => e.id));
	}), ne(e), le(e);
	const { workspaces: a } = Q.getState();
	a.some((t) => t.dbName === e) && Q.setState({ workspaces: a.filter((t) => t.dbName !== e) });
	try {
		const { publishWorkspaceDeletion: e } = await import("./project-revision-T37J4zgb.js").then((e) => e.n);
		e();
	} catch {}
	try {
		await n.delete(e);
	} catch {
		console.warn("Workspace data will be removed the next time the app starts.");
	}
}
async function ce() {
	const e = await p();
	for (const r of e) ne(r), le(r);
	const { workspaces: t } = Q.getState(), a = t.filter((t) => !e.has(t.dbName));
	a.length !== t.length && Q.setState({ workspaces: a });
}
function le(e) {
	ae?.name === e && (function() {
		try {
			sessionStorage.removeItem(H);
		} catch {}
		Z.setState({
			activeId: null,
			activating: !1
		});
	}(), ye());
}
function ue(e) {
	if (se.has(e)) return !0;
	const t = Q.getState().workspaces.some((t) => t.dbName === e);
	return t && oe.add(e), !t && oe.has(e);
}
n.addons.push((e) => {
	re.add(new WeakRef(e));
	const t = e.open.bind(e);
	e.open = () => se.has(e.name) ? n.Promise.reject(new n.DatabaseClosedError()) : t().catch((t) => {
		throw se.has(e.name) && (ne(e.name), le(e.name)), t;
	});
	const a = () => {
		if (e instanceof o) return n.waitFor(l.uiSettings.get(d(e.name))).then((t) => {
			if (t) throw se.add(e.name), new n.DatabaseClosedError();
		});
	};
	e.on("populate", a), e.on("ready", a, !0), e.on("versionchange", (t) => {
		if (null === t.newVersion && e instanceof o) return ne(e.name), le(e.name), !1;
	}), se.has(e.name) && e.close({ disableAutoOpen: !0 });
});
const de = /* @__PURE__ */ new Set();
function pe(e) {
	return de.add(e), () => de.delete(e);
}
function we() {
	for (const e of de) try {
		e();
	} catch {}
}
function fe() {
	if (!ae) {
		const e = "undefined" != typeof window ? ee() : null;
		if (e) {
			const t = Q.getState().getWorkspace(e);
			return ae = new o(t?.dbName ?? `SleepScoringDB-${e}`), we(), ae;
		}
		throw new Error("No workspace database is active. Call switchDb() first.");
	}
	return ae;
}
function me() {
	return null !== ae;
}
function ge(e) {
	ae && ae.close({ disableAutoOpen: !1 }), ae = new o(e), we();
}
function ye() {
	ae && (ae.close(), ae = null), we();
}
if ("undefined" != typeof window) {
	const e = () => {
		const e = ae;
		e && import("./workspace-switch-Q37pNHi6.js").then(({ runWorkspaceScopeChange: t }) => t(() => {
			ae === e && e.close({ disableAutoOpen: !1 });
		})).catch(() => {});
	};
	window.addEventListener("pagehide", e), window.addEventListener("freeze", e), window.addEventListener("pageshow", (e) => {
		const t = ae;
		e.persisted && t && import("./workspace-switch-Q37pNHi6.js").then(async ({ workspaceActivation: e }) => {
			await e;
			const { useSleepScoringStore: a } = await import("./store-CUWcR6kX.js").then((e) => e.r), { username: r, selectedStudyId: s, isAuthenticated: o } = a.getState();
			if (ae !== t || !o || !r) return;
			const { recoverWorkspaceDiaryBindings: n } = await import("./staged-diary-import-Ba7cela_.js").then((e) => e.t);
			ae === t && await n(t, {
				username: r,
				studyId: s
			});
		}).catch(() => {
			console.warn("[diary] Page resume recovery could not start.", { failed: 1 });
		});
	});
}
export { v as _, te as a, g as b, F as c, V as d, R as f, I as g, O as h, pe as i, M as l, P as m, me as n, ee as o, A as p, ue as r, Q as s, fe as t, U as u, b as v, k as y };
