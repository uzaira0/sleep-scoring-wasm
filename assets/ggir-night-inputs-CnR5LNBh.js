import { n as t, r as e, t as s } from "./wasm-worker-DuwrS2Od.js";
function n(n, r) {
	const i = "string" == typeof r ? r : "recordedCellId" in r ? r.recordedCellId : r.id, a = n.map((t) => (t?.algorithmResults)?.[i]);
	if (!function(t) {
		return e.some((e) => t.startsWith(e));
	}(i)) return {
		status: "ok",
		outputs: a,
		configHash: null
	};
	let o = null, l = "string" != typeof r && "recordedCellId" in r;
	if ("string" == typeof r) {
		const t = s(i);
		o = t?.configHash ?? null, l = void 0 === t;
	} else if (!("recordedCellId" in r)) {
		const e = t(r);
		if (null === e) throw new Error(`Refused a cube output read for ${i}: not a planned config`);
		o = e.configHash;
	}
	let u = null;
	for (const [t, e] of n.entries()) {
		if (void 0 === a[t] || void 0 === e?.algorithmResultHashes) continue;
		const s = e.algorithmResultHashes[i];
		if (void 0 === s) return {
			status: "stale",
			reason: `${i} was stored without its config`
		};
		if (!l && s !== o) return {
			status: "stale",
			reason: `${i} was stored under another config`
		};
		if (null !== u && s !== u) return {
			status: "stale",
			reason: `${i} was stored under two configs`
		};
		u = s;
	}
	return {
		status: "ok",
		outputs: a,
		configHash: u
	};
}
function r(t) {
	const e = {};
	for (const s of Object.keys(t.algorithmResults ?? {})) e[s] = !0;
	return {
		...void 0 === t.date ? {} : { date: t.date },
		algorithmResults: e,
		algorithmResultHashes: t.algorithmResultHashes
	};
}
(function(t) {
	const e = t.map((t) => Object.keys(t.algorithmResults)[0]).find((t) => void 0 !== t) || null;
	null === e || (() => {
		const s = n(t, e);
		"stale" === s.status || s.configHash;
	})();
})([].filter((t) => void 0 !== t).map(r).sort((t, e) => (t.date ?? "").localeCompare(e.date ?? "")));
const i = {
	recording_epoch: {
		anchor: "timestamps",
		order: "unchecked",
		faultValues: "its {field} values do not match its epochs",
		faultUnanchored: null,
		faultOrder: null
	},
	epoch_5s: {
		anchor: "ggirTimestamps",
		order: "strictly_increasing",
		faultValues: "its 5 s {field} values do not match its 5 s timestamps",
		faultUnanchored: "it has 5 s values without 5 s timestamps",
		faultOrder: "its 5 s timestamps are not in order"
	},
	lstm_30s: {
		anchor: "lstmTimestamps30s",
		order: "unchecked",
		faultValues: "its {field} values do not match its 30 s LSTM timestamps",
		faultUnanchored: "it has 30 s LSTM values without 30 s LSTM timestamps",
		faultOrder: null
	}
};
function a(t, e, s, n = -1 / 0) {
	const r = e.length;
	return !s.some((t) => 0 !== t && t !== r) && ("unchecked" === i[t].order || function(t, e) {
		let s = e;
		for (const n of t) {
			if (!Number.isFinite(n) || n <= s) return !1;
			s = n;
		}
		return !0;
	}(e, n));
}
const o = "Activity data is corrupt — please reprocess the file";
function l(t) {
	return {
		ggirTimestamps: t.ggirTimestamps ? new Float64Array(t.ggirTimestamps) : /* @__PURE__ */ new Float64Array(0),
		ggirEnmo: t.ggirEnmo ? new Float64Array(t.ggirEnmo) : /* @__PURE__ */ new Float64Array(0),
		ggirAnglez: t.ggirAnglez ? new Float64Array(t.ggirAnglez) : /* @__PURE__ */ new Float64Array(0),
		ggirSib: t.ggirSib ? new Uint8Array(t.ggirSib) : /* @__PURE__ */ new Uint8Array(0)
	};
}
async function u(t) {
	const { day: e, nextDay: s } = t;
	if (t.requireScores) {
		const r = function(t, e) {
			if ("stale" === e.status) return {
				status: "stale",
				reason: e.reason
			};
			if (null === e.key) return {
				status: "ok",
				key: null,
				outputs: t.map(() => {})
			};
			const s = n(t, e.key);
			return "stale" === s.status || null !== s.configHash && null !== e.configHash && s.configHash !== e.configHash ? {
				status: "stale",
				reason: "Scores were computed with different settings, so this night can't be auto-scored. Manual scoring still works."
			} : {
				status: "ok",
				key: e.key,
				outputs: s.outputs
			};
		}(s ? [e, s] : [e], t.verdict);
		if ("stale" === r.status) return {
			kind: "refused",
			reason: r.reason
		};
	}
	const r = [e, ...await t.laterDays()];
	let i = /* @__PURE__ */ new Float64Array(0), u = /* @__PURE__ */ new Float64Array(0), d = /* @__PURE__ */ new Uint8Array(0), f = /* @__PURE__ */ new Uint8Array(0), m = 0, h = 0, p = 0;
	for (const n of r) {
		let t;
		try {
			t = l(n);
		} catch {
			return {
				kind: "refused",
				reason: o
			};
		}
		const e = t.ggirTimestamps.length;
		if (0 === e) continue;
		const s = n.ggirInvalid ? new Uint8Array(n.ggirInvalid) : /* @__PURE__ */ new Uint8Array(0);
		if (t.ggirEnmo.length !== e || !a("epoch_5s", t.ggirTimestamps, [t.ggirSib.length, s.length], i[i.length - 1] ?? -1 / 0)) return {
			kind: "refused",
			reason: o
		};
		p += 1, t.ggirSib.length === e && (m += 1), s.length === e && (h += 1), i = g(i, t.ggirTimestamps), u = g(u, t.ggirEnmo), d = c(d, t.ggirSib), f = c(f, s);
	}
	return 0 === m ? { kind: "angle-legacy" } : m !== p || 0 !== h && h !== p ? {
		kind: "refused",
		reason: o
	} : {
		kind: "angle",
		ggirTimestamps: i,
		ggirEnmo: u,
		sib: d,
		invalid: 0 === h ? null : f
	};
}
function g(t, e) {
	const s = new Float64Array(t.length + e.length);
	return s.set(t, 0), s.set(e, t.length), s;
}
function c(t, e) {
	const s = new Uint8Array(t.length + e.length);
	return s.set(t, 0), s.set(e, t.length), s;
}
async function d(t, e, s) {
	const [n = 0, r = 0] = await s.analysisWindowSlice(t.ggirTimestamps, e);
	return n === r ? {
		kind: "refused",
		reason: "No activity data found for this date"
	} : {
		kind: "angle",
		series: {
			timestamps: t.ggirTimestamps.slice(n),
			activityCounts: t.ggirEnmo.slice(n),
			sleepScores: t.sib.slice(n),
			...t.invalid?.length === t.ggirTimestamps.length ? { ggirInvalid: t.invalid.slice(n) } : {}
		}
	};
}
export { d as ggirNightPlacementSeries, u as readGgirNightInputs };
