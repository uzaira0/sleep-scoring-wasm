import { a as e, r as t, t as a } from "./rolldown-runtime-BAJaJb8v.js";
import { a as r, c as n, l as s, mn as o } from "./schema-DrnhCpDE.js";
import { o as i } from "./content-hash-BtD8CeUH.js";
function c(e) {
	const t = e?.reason;
	return t instanceof Error ? t : new DOMException("Job cancelled", "AbortError");
}
function l(e, t) {
	return t ? t.aborted ? Promise.reject(c(t)) : new Promise((a, r) => {
		const n = () => r(c(t));
		t.addEventListener("abort", n, { once: !0 }), e.then(a, r).finally(() => t.removeEventListener("abort", n));
	}) : e;
}
var d = class extends o {
	workspaces;
	uiSettings;
	constructor(e) {
		super(e), this.version(1).stores({
			workspaces: "id, lastAccessedAt",
			uiSettings: "key, updatedAt"
		}), n(this);
	}
};
const u = new d("SleepScoringGlobal-wasm"), p = "workspace-deleted:";
function _(e) {
	return `${p}${e}`;
}
async function f(e = u) {
	const t = await e.uiSettings.where("key").startsWith(p).primaryKeys();
	return new Set(t.map((e) => e.slice(18)));
}
async function m(e, t = []) {
	return u.transaction("rw", u.workspaces, u.uiSettings, async () => {
		const a = await f(), r = e.filter((e) => !a.has(e.dbName));
		return t.length > 0 && await u.workspaces.bulkDelete([...t]), r.length > 0 && await u.workspaces.bulkPut(r), r.length;
	});
}
const w = (e) => {
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
var h = a((e) => {
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
	function d(e, t, a) {
		this.props = e, this.context = t, this.refs = i, this.updater = a || s;
	}
	c.prototype.isReactComponent = {}, c.prototype.setState = function(e, t) {
		if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, c.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	}, l.prototype = c.prototype;
	var u = d.prototype = new l();
	u.constructor = d, o(u, c.prototype), u.isPureReactComponent = !0, Array.isArray;
	var p = {
		H: null,
		A: null,
		T: null,
		S: null
	}, _ = Object.prototype.hasOwnProperty;
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
		if (null != a) for (n in void 0 !== a.key && (o = "" + a.key), a) _.call(a, n) && "key" !== n && "__self" !== n && "__source" !== n && (s[n] = a[n]);
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
}), g = a((e, t) => {
	t.exports = h();
}), y = e(g(), 1);
const v = (e) => e, b = (e) => {
	const t = ((e) => e ? w(e) : w)(e), a = (e) => function(e, t = v) {
		const a = y.useSyncExternalStore(e.subscribe, y.useCallback(() => t(e.getState()), [e, t]), y.useCallback(() => t(e.getInitialState()), [e, t]));
		return y.useDebugValue(a), a;
	}(t, e);
	return Object.assign(a, t), a;
}, S = (e) => e ? b(e) : b, k = {
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
}, E = {
	QUEUED: "queued",
	RUNNING: "running",
	JOINED: "joined",
	RERUN: "rerun",
	CANCELLED: "cancelled",
	COMMITTED: "committed",
	DONE: "done",
	FAILED: "failed",
	ELSEWHERE: "elsewhere"
};
function A(e) {
	return [
		k.WAL_TRIM,
		k.PLACEMENT,
		k.PLACEMENT_RECOVERY,
		k.NIGHT_DIFFICULTY,
		k.PHYSICAL_ACTIVITY,
		k.VARIANT_RECOVERY,
		k.GGIR_RECOVERY
	].includes(e);
}
const I = S((e, t) => ({
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
		}, n = { ...e.jobs };
		O(r) || Reflect.deleteProperty(n, t), n[t] = r;
		const s = Object.values(n).filter((e) => !O(e));
		for (const t of s.slice(0, Math.max(0, s.length - 5))) Reflect.deleteProperty(n, t.id);
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
function R(e) {
	return e.localProcessingJobId ? e.jobs[e.localProcessingJobId] : void 0;
}
function O(e) {
	return e?.status === E.QUEUED || e?.status === E.RUNNING;
}
const P = (e) => !!e.dispatchFromDevtools && "function" == typeof e.dispatch, N = /* @__PURE__ */ new Map(), C = (e) => {
	const t = N.get(e);
	return t ? Object.fromEntries(Object.entries(t.stores).map(([e, t]) => [e, t.getState()])) : {};
}, D = /^at (?:new |async )?(.+?) \(/, T = /^([^@]+)@/;
function j(e) {
	var t, a, r;
	if (!e) return;
	const n = e.split("\n"), s = n.findIndex((e) => e.includes("api.setState"));
	if (s < 0) return;
	const o = (null == (t = n[s + 1]) ? void 0 : t.trim()) || "";
	return (null == (a = D.exec(o)) ? void 0 : a[1]) || (null == (r = T.exec(o)) ? void 0 : r[1]);
}
const L = (e, t = {}) => (a, r, n) => {
	const { enabled: s, anonymousActionType: o, store: i, ...c } = t;
	let l;
	try {
		l = null != s && s && window.__REDUX_DEVTOOLS_EXTENSION__;
	} catch (m) {}
	if (!l) return e(a, r, n);
	const { connection: d, ...u } = ((e, t, a) => {
		if (void 0 === e) return {
			type: "untracked",
			connection: t.connect(a)
		};
		const r = N.get(a.name);
		if (r) return {
			type: "tracked",
			store: e,
			...r
		};
		const n = {
			connection: t.connect(a),
			stores: {}
		};
		return N.set(a.name, n), {
			type: "tracked",
			store: e,
			...n
		};
	})(i, l, c);
	let p = !0;
	n.setState = (e, t, s) => {
		const l = a(e, t);
		if (!p) return l;
		const u = void 0 === s ? { type: o || j((/* @__PURE__ */ new Error()).stack) || "anonymous" } : "string" == typeof s ? { type: s } : s;
		return void 0 === i ? (d?.send(u, r()), l) : (d?.send({
			...u,
			type: `${i}/${u.type}`
		}, {
			...C(c.name),
			[i]: n.getState()
		}), l);
	}, n.devtools = { cleanup: () => {
		d && "function" == typeof d.unsubscribe && d.unsubscribe(), ((e, t) => {
			if (void 0 === t) return;
			const a = N.get(e);
			a && (delete a.stores[t], 0 === Object.keys(a.stores).length && N.delete(e));
		})(c.name, i);
	} };
	const _ = (...e) => {
		const t = p;
		p = !1, a(...e), p = t;
	}, f = e(n.setState, r, n);
	if ("untracked" === u.type ? d?.init(f) : (u.stores[u.store] = n, d?.init(Object.fromEntries(Object.entries(u.stores).map(([e, t]) => [e, e === u.store ? f : t.getState()])))), P(n)) {
		const e = n.dispatch;
		n.dispatch = (...t) => {
			e(...t);
		};
	}
	return d.subscribe((e) => {
		var t;
		switch (e.type) {
			case "ACTION": return "string" != typeof e.payload ? void console.error("[zustand devtools middleware] Unsupported action format") : M(e.payload, (e) => {
				if ("__setState" === e.type) {
					if (void 0 === i) return void _(e.state);
					1 !== Object.keys(e.state).length && console.error("\n                    [zustand devtools middleware] Unsupported __setState action format.\n                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),\n                    and value of this only key should be a state object. Example: { \"type\": \"__setState\", \"state\": { \"abc123Store\": { \"foo\": \"bar\" } } }\n                    ");
					const t = e.state[i];
					if (null == t) return;
					JSON.stringify(n.getState()) !== JSON.stringify(t) && _(t);
					return;
				}
				P(n) && n.dispatch(e);
			});
			case "DISPATCH":
				switch (e.payload.type) {
					case "RESET": return _(f), void 0 === i ? null == d ? void 0 : d.init(n.getState()) : null == d ? void 0 : d.init(C(c.name));
					case "COMMIT": return void 0 === i ? void d?.init(n.getState()) : null == d ? void 0 : d.init(C(c.name));
					case "ROLLBACK": return M(e.state, (e) => {
						if (void 0 === i) return _(e), void d?.init(n.getState());
						_(e[i]), d?.init(C(c.name));
					});
					case "JUMP_TO_STATE":
					case "JUMP_TO_ACTION": return M(e.state, (e) => {
						void 0 !== i ? JSON.stringify(n.getState()) !== JSON.stringify(e[i]) && _(e[i]) : _(e);
					});
					case "IMPORT_STATE": {
						const { nextLiftedState: a } = e.payload, r = null == (t = a.computedStates.slice(-1)[0]) ? void 0 : t.state;
						if (!r) return;
						_(void 0 === i ? r : r[i]), d?.send(null, a);
						return;
					}
					case "PAUSE_RECORDING": return p = !p;
				}
				return;
		}
	}), f;
}, M = (e, t) => {
	let a;
	try {
		a = JSON.parse(e);
	} catch (r) {
		console.error("[zustand devtools middleware] Could not parse the received json", r);
	}
	void 0 !== a && t(a);
};
function W(e, t) {
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
const U = (e) => (t) => {
	try {
		const a = e(t);
		return a instanceof Promise ? a : {
			then: (e) => U(e)(a),
			catch(e) {
				return this;
			}
		};
	} catch (a) {
		return {
			then(e) {
				return this;
			},
			catch: (e) => U(e)(a)
		};
	}
}, G = (e, t) => (a, r, n) => {
	let s = {
		storage: W(() => window.localStorage),
		partialize: (e) => e,
		version: 0,
		merge: (e, t) => ({
			...t,
			...e
		}),
		...t
	}, o = !1, i = 0;
	const c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
	let d = s.storage;
	if (!d) return e((...e) => {
		console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`), a(...e);
	}, r, n);
	const u = () => {
		const e = s.partialize({ ...r() });
		return d.setItem(s.name, {
			state: e,
			version: s.version
		});
	}, p = n.setState;
	n.setState = (e, t) => (p(e, t), u());
	const _ = e((...e) => (a(...e), u()), r, n);
	let f;
	n.getInitialState = () => _;
	const m = () => {
		var e, t;
		if (!d) return;
		const n = ++i;
		o = !1, c.forEach((e) => {
			var t;
			return e(null != (t = r()) ? t : _);
		});
		const p = (null == (t = s.onRehydrateStorage) ? void 0 : t.call(s, null != (e = r()) ? e : _)) || void 0;
		return U(d.getItem.bind(d))(s.name).then((e) => {
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
			return f = s.merge(c, null != (t = r()) ? t : _), a(f, !0), o ? u() : void 0;
		}).then(() => {
			n === i && (p?.(r(), void 0), f = r(), o = !0, l.forEach((e) => e(f)));
		}).catch((e) => {
			n === i && p?.(void 0, e);
		});
	};
	return n.persist = {
		setOptions: (e) => {
			s = {
				...s,
				...e
			}, e.storage && (d = e.storage);
		},
		clearStorage: () => {
			++i, d?.removeItem(s.name);
		},
		getOptions: () => s,
		rehydrate: () => m(),
		hasHydrated: () => o,
		onHydrate: (e) => (c.add(e), () => {
			c.delete(e);
		}),
		onFinishHydration: (e) => (l.add(e), () => {
			l.delete(e);
		})
	}, s.skipHydration || m(), f || _;
};
function x(e) {
	const t = e.split(/[/\\]/);
	return t[t.length - 1] || e;
}
var z = class e {
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
			name: x(t),
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
async function H(e) {
	return i(e);
}
const F = [
	"csv",
	"gt3x",
	"bin",
	"bz2",
	"tbz2"
], V = [
	".csv",
	".gt3x",
	".bin",
	".rdata",
	".rda",
	".tar.bz2",
	".tbz2",
	".zip",
	".aw5"
];
function B() {
	return V;
}
V.join(" · ");
const $ = [
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
($[0]?.items ?? []).join(", "), $.slice(1).map((e) => e.label).join(" and ");
const Y = {
	high: "high",
	medium: "medium",
	low: "low"
}, J = {
	minutes_immobile: "minutes_immobile",
	epochs_scored_sleep: "epochs_scored_sleep"
}, K = {
	low: "low",
	medium: "medium",
	high: "high",
	auto: "auto",
	custom: "custom"
}, q = {
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
}, X = {
	configured_scoring: "configured_scoring",
	actiware: "actiware"
}, Z = {
	pim: "pim",
	zcm: "zcm",
	tat: "tat",
	neishabouri: "neishabouri",
	zero_crossing: "zero_crossing",
	mad: "mad",
	hfen: "hfen"
}, Q = {
	month_first: "month_first",
	day_first: "day_first"
}, ee = {
	night_date: "night_date",
	period_start_day: "period_start_day",
	explicit_only: "explicit_only",
	ask_per_night: "ask_per_night"
}, te = {
	cannot_be_read: "cannot_be_read",
	sources_disagree: "sources_disagree",
	needs_decision: "needs_decision",
	date_filled: "date_filled",
	sources_agree: "sources_agree",
	as_written: "as_written"
}, ae = {
	explicit_only: "explicit_only",
	sleep_date_same_day: "sleep_date_same_day",
	sleep_date_chronology: "sleep_date_chronology"
}, re = {
	main_sleep: "main_sleep",
	naps: "naps",
	nonwear: "nonwear"
}, ne = {
	ask: "ask",
	first_occurrence: "first_occurrence",
	mark_unusable: "mark_unusable"
}, se = {
	mark_unusable: "mark_unusable",
	shift_forward_hour: "shift_forward_hour"
}, oe = {
	number_60s_epochs: "60s_epochs",
	ggir_5s: "ggir_5s"
}, ie = {
	HDCZA: "HDCZA",
	HorAngle: "HorAngle",
	NotWorn: "NotWorn",
	MotionWare: "MotionWare",
	HLRB: "HLRB"
}, ce = {
	choi_2011: "choi_2011",
	flat_activity: "flat_activity",
	gt3x_capsense: "gt3x_capsense",
	actiware_off_wrist: "actiware_off_wrist",
	detach_nonwear: "detach_nonwear",
	van_hees_2013: "van_hees_2013",
	van_hees_2023: "van_hees_2023",
	ggir_part2_invalid: "ggir_part2_invalid",
	choi_2012: "choi_2012",
	troiano_2008: "troiano_2008",
	ahmadi_2020: "ahmadi_2020",
	skovgaard_2023: "skovgaard_2023"
}, le = {
	PHYSICAL_ACTIVITY: "physical_activity",
	SLEEP_DIARY: "sleep_diary",
	CSV_IMPORT: "csv_import",
	PRESET_MANAGEMENT: "preset_management",
	NONWEAR_TIME: "nonwear_time",
	CONSENSUS_REVIEW: "consensus_review",
	ANALYSIS_ISSUES: "analysis_issues"
}, de = {
	use_source_a: "use_source_a",
	use_source_b: "use_source_b",
	intersection: "intersection",
	union: "union",
	source_b_bounded_by_source_a: "source_b_bounded_by_source_a",
	sanity_clamp_source_b_to_source_a: "sanity_clamp_source_b_to_source_a"
}, ue = {
	diary: "diary",
	hdcza: "hdcza",
	l5: "l5",
	selected_scorer_first_last: "selected_scorer_first_last",
	selected_scorer_longest_bout: "selected_scorer_longest_bout",
	quiet_bout: "quiet_bout",
	event_marker: "event_marker",
	actiware_rest_interval: "actiware_rest_interval",
	none: "none"
}, pe = {
	evening_onset: "evening_onset",
	morning_offset: "morning_offset",
	daytime: "daytime"
}, _e = {
	NOON_OFFSET_HOURS: 12,
	ANALYSIS_WINDOW_HOURS: 24,
	CONTEXT_WINDOW_HOURS: 48,
	MORNING_OFFSET_ROLLOVER_PAD_HOURS: 6
}, fe = {
	MAX_SLEEP_PERIODS_PER_DAY: 4,
	MAX_NONWEAR_PERIODS_PER_DAY: 10,
	EPOCH_DURATION_SECONDS: 60
}, me = {
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
function we(e) {
	const t = me[e];
	if (void 0 === t) throw new Error(`no implementation_version for ${e}`);
	return t;
}
function he(e) {
	return Object.hasOwn(me, e) ? e : null;
}
function ge(e) {
	return e.replace(/\.RData$/i, "").replace(/\.(csv|gt3x|bin|cwa)(\.gz)?$/i, "");
}
const ye = /* @__PURE__ */ new WeakMap(), ve = /* @__PURE__ */ new WeakMap();
function be(e) {
	return ye.get(e);
}
function Se(e, t) {
	ve.set(e, t);
}
function ke(e) {
	return {
		...e.desiredTz ? { desiredtz: e.desiredTz } : {},
		...e.configTz ? { configtz: e.configTz } : {},
		..."boolean" == typeof e.imputeTimegaps ? { imputeTimegaps: e.imputeTimegaps } : {}
	};
}
function Ee(e) {
	return function(e, t = B()) {
		const a = e.toLowerCase();
		return t.some((e) => a.endsWith(e));
	}(e.name, B());
}
function Ae(e) {
	return new Promise((t) => {
		let a = !1;
		const r = (e) => {
			a || (a = !0, window.removeEventListener("focus", n), t(e));
		};
		e.addEventListener("change", () => {
			const t = Array.from(e.files ?? []);
			r(t.length > 0 ? t : null);
		}), e.addEventListener("cancel", () => r(null));
		const n = () => {
			setTimeout(() => {
				a || 0 !== (e.files?.length ?? 0) || r(null);
			}, 200);
		};
		window.addEventListener("focus", n);
	});
}
function Ie(e) {
	const t = document.createElement("input");
	t.type = "file", t.accept = B().join(","), e && (t.multiple = !0);
	const a = Ae(t);
	return t.click(), a;
}
function Re() {
	const e = document.createElement("input");
	e.type = "file", e.setAttribute("webkitdirectory", "");
	const t = Ae(e);
	return e.click(), t.then((e) => e ? e.filter(Ee) : null);
}
async function Oe(e, t = e.name) {
	const a = [], r = "function" == typeof e.values ? e.values() : e;
	for await (const n of r) {
		const e = n, r = t ? `${t}/${e.name}` : e.name;
		if ("file" === e.kind && "function" == typeof e.getFile && Ee(e)) {
			const t = await e.getFile();
			Se(t, r), a.push(t);
			continue;
		}
		"directory" === e.kind && a.push(...await Oe(e, r));
	}
	return a;
}
async function Pe() {
	if ("showDirectoryPicker" in window) try {
		return await Oe(await window.showDirectoryPicker());
	} catch (e) {
		return e instanceof DOMException && "AbortError" === e.name ? null : (console.warn("[web-dialogs] showDirectoryPicker failed, falling back to <input>:", e instanceof Error ? e.message : e), Re());
	}
	return Re();
}
const Ne = "auto-update is unavailable on the web platform";
let Ce = null;
let De = null;
function Te() {
	return De || (De = globalThis.isTauri ? {
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
						extensions: F
					}]
				});
				if (null == a) return null;
				const r = Array.isArray(a) ? a : [a], n = [];
				for (const s of r) n.push(await z.fromPath(s));
				return n.length > 0 ? n : null;
			}(e),
			pickFolder: () => async function() {
				const { open: e } = await import("./dist-js-DtyocxnK.js"), { invoke: t } = await import("./core-B0WeKh9d.js"), a = await e({
					directory: !0,
					multiple: !1
				});
				if ("string" != typeof a) return null;
				const r = await t("list_supported_files", { dir: a }), n = [];
				for (const s of r) n.push(await z.fromPath(s));
				return n.length > 0 ? n : null;
			}(),
			saveBlob: (e, t, a) => async function(e, t, a) {
				const { save: r } = await import("./dist-js-DtyocxnK.js"), { invoke: n } = await import("./core-B0WeKh9d.js");
				a?.throwIfAborted();
				const s = await l(r({ defaultPath: t }), a);
				if (a?.throwIfAborted(), !s) return null;
				const o = new Uint8Array(await l(e.arrayBuffer(), a)), i = Array.from(o);
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
						sources: await Promise.all(a.paths.map((e) => z.fromPath(e)))
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
					groupHash: await H(e),
					username: t
				});
			}(e, t),
			computeGroupHash: (e) => H(e)
		},
		peers: { discoverPeers: async () => {
			const { invoke: e } = await import("./core-B0WeKh9d.js");
			return e("discover_peers");
		} },
		updater: {
			check: () => async function() {
				const { check: e } = await import("./dist-js-D7-Ut_gj.js"), t = await e();
				return t?.available ? (Ce = t, {
					version: t.version,
					currentVersion: t.currentVersion,
					...t.body ? { body: t.body } : {},
					...t.date ? { date: t.date } : {}
				}) : (Ce = null, null);
			}(),
			downloadAndInstall: (e) => async function(e) {
				if (!Ce) throw new Error("No pending update. Call checkForUpdate() first.");
				const t = Ce;
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
				}), Ce = null;
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
								...Object.fromEntries(B().filter((e) => !V.includes(e)).map((e) => [`application/x-${e.slice(1)}`, [e]]))
							}
						}],
						multiple: e
					}), a = [];
					for (const e of t) a.push(await e.getFile());
					return a.length > 0 ? a : null;
				} catch (t) {
					return t instanceof DOMException && "AbortError" === t.name ? null : (console.warn("[web-dialogs] showOpenFilePicker failed, falling back to <input>:", t instanceof Error ? t.message : t), Ie(e));
				}
				return Ie(e);
			}(e),
			pickFolder: () => Pe(),
			saveBlob: (e, t, a) => (a?.throwIfAborted(), function(e, t) {
				const a = URL.createObjectURL(e), r = document.createElement("a");
				r.href = a, r.download = t, document.body.appendChild(r), r.click(), document.body.removeChild(r), setTimeout(() => URL.revokeObjectURL(a), 1e3);
			}(e, t), Promise.resolve(null))
		},
		fileDrop: { subscribe: (e, t) => {
			const a = t ?? window, r = (e) => Array.from(e.dataTransfer?.types ?? []).includes("Files"), n = (e) => Array.from(e.dataTransfer?.items ?? []).filter((e) => "file" === e.kind).map((e) => {
				const t = e.getAsFile?.();
				return t ? {
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
				r(a) && (a.preventDefault(), e({
					phase: "drop",
					sources: Array.from(a.dataTransfer?.files ?? [])
				}));
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
			computeGroupHash: (e) => i(e)
		},
		peers: { discoverPeers: () => Promise.resolve([]) },
		updater: {
			check: () => Promise.resolve(null),
			downloadAndInstall: () => Promise.reject(/* @__PURE__ */ new Error(Ne)),
			relaunch: () => Promise.reject(/* @__PURE__ */ new Error(Ne))
		}
	}), De;
}
const je = "undefined" != typeof process && !1;
let Le = !1;
const Me = {
	get basePath() {
		const e = "/sleep-scoring-wasm/", t = e.replace(/\/$/, ""), a = "undefined" != typeof window ? window.__CONFIG__?.basePath : void 0;
		return null == a ? t : "" !== t && a !== t ? (Le || (Le = !0, console.error(`[config] config.js basePath "${a}" does not match the build base "${e}"; using "${t}". Fix config.js or rebuild with VITE_BASE_PATH="${a}/".`)), t) : a;
	},
	get apiBaseUrl() {
		return `${this.basePath}/api/v1`;
	},
	get isDev() {
		return je;
	},
	get isProd() {
		return !je;
	}
}, We = "sleep-scoring-workspaces-wasm", Ue = "sleep-scoring-active-workspace-wasm", Ge = `${We}.migrated`;
let xe = null;
const ze = /* @__PURE__ */ new Set();
const He = {
	getItem: async (e) => {
		let t;
		await (xe || (xe = (async () => {
			try {
				if ("undefined" == typeof localStorage) return;
				if (0 === await u.workspaces.count()) {
					const e = localStorage.getItem(We);
					if (e) {
						const t = JSON.parse(e)?.state?.workspaces;
						Array.isArray(t) && t.length > 0 && await m(t), localStorage.removeItem(We);
					}
				}
				await async function() {
					try {
						const e = globalThis.indexedDB;
						if (!e?.databases) return;
						const t = (await e.databases()).map((e) => e.name).filter((e) => !!e), a = t.filter((e) => "SleepScoringDB" === e || /^SleepScoringDB-.+/.test(e));
						if (0 === a.length) return;
						const r = new Set((await u.workspaces.toArray()).map((e) => e.dbName)), n = await f(), o = "SleepScoringGlobal";
						if (t.includes(o)) {
							const e = new d(o);
							try {
								for (const t of await e.workspaces.toArray()) r.add(t.dbName);
								for (const t of await f(e)) n.add(t);
							} catch {} finally {
								e.close();
							}
						}
						const { deleteWorkspaceDb: i } = await Promise.resolve().then(() => Ye);
						await Promise.all(a.filter((e) => n.has(e)).map(i));
						const c = a.filter((e) => !r.has(e) && !n.has(e));
						if (0 === c.length) return;
						const l = (/* @__PURE__ */ new Date()).toISOString(), _ = await m(c.map((e) => ({
							id: "SleepScoringDB" === e ? s() : e.slice(15),
							displayName: "Recovered data",
							serverUrl: "",
							dbName: e,
							createdAt: l,
							lastAccessedAt: l
						})));
						console.warn(`workspace-store: re-registered ${_} orphaned local workspace database(s)`);
					} catch (e) {
						console.warn("workspace-store: orphan recovery failed", e);
					}
				}(), localStorage.setItem(Ge, "1");
			} catch (e) {
				console.warn("workspace-store: migration failed", e);
			}
		})(), xe));
		try {
			t = await u.workspaces.toArray();
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
		const a = t.state.workspaces ?? [], r = [...ze];
		await m(a, r);
		for (const n of r) ze.delete(n);
	},
	removeItem: async (e) => {
		await u.workspaces.clear();
	}
};
function Fe(e) {
	ze.add(e), Ve.setState({ workspaces: Ve.getState().workspaces.filter((t) => t.id !== e) });
}
const Ve = S()(G((e, t) => ({
	workspaces: [],
	storageUnavailable: !1,
	createWorkspace: (t, a) => {
		const r = s(), n = {
			id: r,
			displayName: a,
			serverUrl: t.replace(/\/+$/, ""),
			dbName: `SleepScoringDB-${r}`,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			lastAccessedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		return e((e) => ({ workspaces: [...e.workspaces, n] })), n;
	},
	createWorkspaceWithId: (t) => {
		e((e) => ({ workspaces: [...e.workspaces, t] }));
	},
	deleteWorkspace: async (e) => {
		const { runWorkspaceScopeChange: a } = await import("./workspace-switch-Co6UCyr_.js");
		return a(async () => {
			if (e === $e()) return void console.warn("Cannot delete the currently active workspace");
			const a = t().workspaces.find((t) => t.id === e);
			let r;
			if (a?.dbName) {
				const { preserveWorkspaceAuditLog: e } = await import("./workspace-audit-preservation-BJIfJ3Cd.js"), { auditLog: t } = await import("./audit-log-UYWQ_PY2.js").then((e) => e.n), { useSleepScoringStore: n } = await import("./store-B5F9spZt.js").then((e) => e.r), { username: s, sitePassword: o } = n.getState(), i = await e(a, {
					username: s,
					sitePassword: o
				}), { SleepScoringDB: c } = await import("./schema-DrnhCpDE.js").then((e) => e.s), { countWorkspaceContents: l } = await import("./workspace-contents-ZBqr1J5M.js"), d = new c(a.dbName);
				let u;
				try {
					await d.open(), r = await l(d), u = await d.files.toArray();
				} finally {
					d.close();
				}
				const { deleteWorkspaceDb: p } = await Promise.resolve().then(() => Ye);
				await p(a.dbName);
				const { deleteMigrationBackups: _ } = await import("./pre-migration-backup-tjunbpJK.js").then((e) => e.t);
				await _(a.dbName);
				const { deleteFileCaches: f } = await import("./store-B5F9spZt.js").then((e) => e.p);
				await f(u), t.recordAppEvent("workspace_deleted", {
					workspaceId: a.id,
					displayName: a.displayName,
					auditRowsTotal: i.total,
					auditRowsReplicated: i.replicated,
					auditRowsDestroyed: i.destroyed,
					...i.reason ? { reason: i.reason } : {}
				}), await t.settleWrites();
			}
			Fe(e);
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
			return Te().capabilities.tauri && Te().workspace.deleteWorkspace(e).catch((e) => {
				console.warn("Failed to delete Tauri workspace DB:", e);
			}), r;
		});
	},
	discardUncommittedWorkspace: async (e) => {
		const { runWorkspaceScopeChange: a } = await import("./workspace-switch-Co6UCyr_.js");
		return a(async () => {
			const a = t().workspaces.find((t) => t.id === e);
			if (a?.dbName) {
				const { deleteWorkspaceDb: e } = await Promise.resolve().then(() => Ye);
				await e(a.dbName);
				const { deleteMigrationBackups: t } = await import("./pre-migration-backup-tjunbpJK.js").then((e) => e.t);
				await t(a.dbName);
			}
			Fe(e);
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
	name: We,
	storage: He,
	onRehydrateStorage: () => (e, t) => {
		if (!t) try {
			(async function() {
				Me.basePath;
			})();
		} catch (a) {
			console.warn("[workspace-store] serverUrl normalization failed:", a);
		}
	}
})), Be = S()(() => ({
	activeId: (() => {
		try {
			return sessionStorage.getItem(Ue);
		} catch {
			return null;
		}
	})(),
	activating: !1
}));
function $e() {
	return Be.getState().activeId;
}
var Ye = t({
	closeDb: () => it,
	deleteWorkspaceDb: () => Qe,
	getDb: () => st,
	hasOpenDb: () => ot,
	isWorkspaceDbDeleted: () => tt,
	subscribeDbChanges: () => rt
});
let Je = null;
const Ke = /* @__PURE__ */ new Set(), qe = /* @__PURE__ */ new Set(), Xe = /* @__PURE__ */ new Set();
function Ze(e) {
	qe.add(e);
	for (const t of Object.values(I.getState().jobs)) t.workspaceId === e && t.controller.abort();
	for (const t of Ke) {
		const a = t.deref();
		a && a.name !== e || Ke.delete(t), a?.name === e && a.close({ disableAutoOpen: !0 });
	}
}
async function Qe(e) {
	const t = {
		key: _(e),
		value: !0,
		updatedAt: Date.now()
	};
	await u.transaction("rw", u.workspaces, u.uiSettings, async () => {
		await u.uiSettings.put(t);
		const a = await u.workspaces.toArray();
		await u.workspaces.bulkDelete(a.filter((t) => t.dbName === e).map((e) => e.id));
	}), Ze(e), et(e);
	const { workspaces: a } = Ve.getState();
	a.some((t) => t.dbName === e) && Ve.setState({ workspaces: a.filter((t) => t.dbName !== e) });
	try {
		const { publishWorkspaceDeletion: e } = await import("./project-revision-gxarG-M0.js").then((e) => e.n);
		e();
	} catch {}
	try {
		await o.delete(e);
	} catch {
		console.warn("Workspace data will be removed the next time the app starts.");
	}
}
function et(e) {
	Je?.name === e && (function() {
		try {
			sessionStorage.removeItem(Ue);
		} catch {}
		Be.setState({
			activeId: null,
			activating: !1
		});
	}(), it());
}
function tt(e) {
	if (qe.has(e)) return !0;
	const t = Ve.getState().workspaces.some((t) => t.dbName === e);
	return t && Xe.add(e), !t && Xe.has(e);
}
o.addons.push((e) => {
	Ke.add(new WeakRef(e));
	const t = e.open.bind(e);
	e.open = () => qe.has(e.name) ? o.Promise.reject(new o.DatabaseClosedError()) : t().catch((t) => {
		throw qe.has(e.name) && (Ze(e.name), et(e.name)), t;
	});
	const a = () => {
		if (e instanceof r) return o.waitFor(u.uiSettings.get(_(e.name))).then((t) => {
			if (t) throw qe.add(e.name), new o.DatabaseClosedError();
		});
	};
	e.on("populate", a), e.on("ready", a, !0), e.on("versionchange", (t) => {
		if (null === t.newVersion && e instanceof r) return Ze(e.name), et(e.name), !1;
	}), qe.has(e.name) && e.close({ disableAutoOpen: !0 });
});
const at = /* @__PURE__ */ new Set();
function rt(e) {
	return at.add(e), () => at.delete(e);
}
function nt() {
	for (const e of at) try {
		e();
	} catch {}
}
function st() {
	if (!Je) {
		const e = "undefined" != typeof window ? $e() : null;
		if (e) {
			const t = Ve.getState().getWorkspace(e);
			return Je = new r(t?.dbName ?? `SleepScoringDB-${e}`), nt(), Je;
		}
		throw new Error("No workspace database is active. Call switchDb() first.");
	}
	return Je;
}
function ot() {
	return null !== Je;
}
function it() {
	Je && (Je.close(), Je = null), nt();
}
if ("undefined" != typeof window) {
	const e = () => {
		const e = Je;
		e && import("./workspace-switch-Co6UCyr_.js").then(({ runWorkspaceScopeChange: t }) => t(() => {
			Je === e && e.close({ disableAutoOpen: !1 });
		})).catch(() => {});
	};
	window.addEventListener("pagehide", e), window.addEventListener("freeze", e), window.addEventListener("pageshow", (e) => {
		const t = Je;
		e.persisted && t && import("./workspace-switch-Co6UCyr_.js").then(async ({ workspaceActivation: e }) => {
			await e;
			const { useSleepScoringStore: a } = await import("./store-B5F9spZt.js").then((e) => e.r), { username: r, selectedStudyId: n, isAuthenticated: s } = a.getState();
			if (Je !== t || !s || !r) return;
			const { recoverWorkspaceDiaryBindings: o } = await import("./staged-diary-import-BenqDoiu.js").then((e) => e.t);
			Je === t && await o(t, {
				username: r,
				studyId: n
			});
		}).catch(() => {
			console.warn("[diary] Page resume recovery could not start.", { failed: 1 });
		});
	});
}
export { le as A, R as B, re as C, ie as D, oe as E, we as F, g as G, k as H, W as I, c as K, L, ue as M, pe as N, fe as O, he as P, G as R, ae as S, se as T, E as U, I as V, S as W, _e as _, $e as a, ee as b, Te as c, ke as d, Y as f, X as g, q as h, rt as i, de as j, ce as k, be as l, K as m, ot as n, Ve as o, J as p, l as q, tt as r, Me as s, st as t, ge as u, Z as v, ne as w, te as x, Q as y, A as z };
