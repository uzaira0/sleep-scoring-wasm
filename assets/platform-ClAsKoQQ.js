import { s as e } from "./ggir-results-types-WB8axvb-.js";
import { t } from "./activity-file-extensions-D6HgRlnR.js";
import { o as a } from "./content-hash-BtD8CeUH.js";
const r = "ggirImportRefusals", n = "already-imported-different-content", i = "local-storage", s = "GGIR output folder", o = "ggir-folder", c = "import-in-progress", l = {
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
	[i]: {
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
	[c]: {
		label: "earlier import still holds this file; try again in about 2 minutes",
		durableRefusal: !1
	},
	"decoder-crash": {
		label: "the decoder crashed on this file",
		durableRefusal: !1
	},
	"ggir-no-part4": {
		label: "GGIR made no Part 4 for this recording; it has no GGIR sleep windows to import",
		durableRefusal: !0
	},
	"ggir-not-read": {
		label: "a GGIR file this recording needs could not be read; the receipt names it",
		durableRefusal: !0
	},
	"ggir-corrected-not-available": {
		label: "corrected values could not be computed for this recording; the receipt gives the reason; turn off Use corrected values to import the folder as GGIR wrote it",
		durableRefusal: !0
	},
	[n]: {
		label: "already imported with different content; export your work first then delete the earlier import in Data Settings before importing its replacement",
		durableRefusal: !0
	},
	[o]: {
		label: "GGIR output folder cannot be imported; select the whole folder containing GGIR configuration and milestones",
		durableRefusal: !0
	},
	"processing-runtime": {
		label: "processing runtime",
		durableRefusal: !1
	}
}, u = new Map(Object.entries(l).map(([e, { label: t }]) => [t.toLowerCase(), e])), d = /categor(?:y|ies): ([a-z0-9; ]+?)(?: \(\d+\))?[.,]/u;
const _ = Object.keys({
	workspace: null,
	"csv-settings": "/csv-import",
	"unsupported-format": "/csv-import",
	"empty-file": null,
	"invalid-data": "/csv-import",
	[i]: null,
	permission: null,
	"browser-memory": null,
	"time-limit": null,
	[c]: null,
	"decoder-crash": null,
	"ggir-no-part4": null,
	"ggir-not-read": null,
	"ggir-corrected-not-available": null,
	[n]: null,
	[o]: null,
	"processing-runtime": "/settings/processing"
});
function f(e) {
	return t = function(e) {
		if (e instanceof Error && "category" in e && "string" == typeof e.category && Object.hasOwn(l, e.category)) return e.category;
		const t = function(e) {
			try {
				return e instanceof Error ? e.message : "string" == typeof e ? e : "";
			} catch {
				return "";
			}
		}(e).toLowerCase();
		if (Object.hasOwn(l, t)) return t;
		const a = u.get(t) ?? u.get(d.exec(t)?.[1] ?? "");
		return void 0 !== a ? a : t.includes("timed out during") ? "time-limit" : t.includes("already being imported") ? "import-in-progress" : t.startsWith("wasm panic in ") ? "decoder-crash" : /workspace|scope changed|no longer active/u.test(t) ? "workspace" : /csv settings|column-mapped|column mapping|mapping .*required|settings .*incomplete|review data settings/u.test(t) ? "csv-settings" : /unsupported|not supported|unimplemented source-profile|unknown file (?:type|format)/u.test(t) ? "unsupported-format" : /out of memory|allocation failed|invalid array length|exceeds the v1 limit|too large (?:to process|for in-browser memory)/u.test(t) || /\bunreachable\b/u.test(t) && !t.startsWith("wasm panic in ") ? "browser-memory" : /empty|no data rows|did not contain any .*epochs/u.test(t) ? "empty-file" : /quota|indexeddb|dexie|database|storage|persist|saving|disk/u.test(t) ? "local-storage" : /permission|denied|unauthori[sz]ed|not allowed/u.test(t) ? "permission" : /parse|csv|row|column|timestamp|header|date|\btime\b|corrupt|invalid|malformed|decompress|archive|rdata/u.test(t) ? "invalid-data" : "processing-runtime";
	}(e), l[t].label;
	var t;
}
const m = [
	"parse",
	"score",
	"nonwear",
	"save",
	"variants"
], h = "A recording already in this workspace was offered again, changed. It was not imported, and nothing was overwritten: the file and its scoring are as they were. To use the changed recording, export your work first, then delete the file and import it again.", g = {
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
function w(e, t) {
	if (null === t) return -1;
	const [a, r] = g[e];
	return a + Math.max(0, Math.min(1, t)) * (r - a);
}
function v(e, t) {
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
function b(e) {
	return e.filter((e) => (void 0 === e.status || "succeeded" === e.status) && !e.alreadyImported).length;
}
function y(e) {
	const t = e?.reason;
	return t instanceof Error ? t : new DOMException("Job cancelled", "AbortError");
}
function E(e, t) {
	return t ? t.aborted ? Promise.reject(y(t)) : new Promise((a, r) => {
		const n = () => r(y(t));
		t.addEventListener("abort", n, { once: !0 }), e.then(a, r).finally(() => t.removeEventListener("abort", n));
	}) : e;
}
function k(e) {
	const t = e.split(/[/\\]/);
	return t[t.length - 1] || e;
}
Object.keys(g);
var A = class e {
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
			name: k(t),
			fileSize: r.size,
			lastModified: n
		});
	}
	get size() {
		return this.end - this.start;
	}
	slice(t, a) {
		const { start: r, end: n } = function(e, t, a) {
			const r = (t, a) => void 0 === t ? a : t < 0 ? Math.max(e + t, 0) : Math.min(t, e), n = r(t, 0), i = r(a, e);
			return {
				start: n,
				end: Math.max(n, i)
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
async function R(e) {
	return a(e);
}
const S = [
	"csv",
	"gt3x",
	"bin",
	"bz2",
	"tbz2"
], I = {
	high: "high",
	medium: "medium",
	low: "low"
}, P = {
	minutes_immobile: "minutes_immobile",
	epochs_scored_sleep: "epochs_scored_sleep"
}, G = {
	low: "low",
	medium: "medium",
	high: "high",
	auto: "auto",
	custom: "custom"
}, O = {
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
}, C = {
	configured_scoring: "configured_scoring",
	actiware: "actiware"
}, L = {
	pim: "pim",
	zcm: "zcm",
	tat: "tat",
	neishabouri: "neishabouri",
	zero_crossing: "zero_crossing",
	mad: "mad",
	hfen: "hfen"
}, N = {
	month_first: "month_first",
	day_first: "day_first"
}, T = {
	night_date: "night_date",
	period_start_day: "period_start_day",
	explicit_only: "explicit_only",
	ask_per_night: "ask_per_night"
}, j = {
	cannot_be_read: "cannot_be_read",
	sources_disagree: "sources_disagree",
	needs_decision: "needs_decision",
	date_filled: "date_filled",
	sources_agree: "sources_agree",
	as_written: "as_written"
}, D = {
	explicit_only: "explicit_only",
	sleep_date_same_day: "sleep_date_same_day",
	sleep_date_chronology: "sleep_date_chronology"
}, M = {
	main_sleep: "main_sleep",
	naps: "naps",
	nonwear: "nonwear"
}, x = {
	ask: "ask",
	first_occurrence: "first_occurrence",
	mark_unusable: "mark_unusable"
}, z = {
	mark_unusable: "mark_unusable",
	shift_forward_hour: "shift_forward_hour"
}, F = {
	number_60s_epochs: "60s_epochs",
	ggir_5s: "ggir_5s"
}, H = {
	HDCZA: "HDCZA",
	HorAngle: "HorAngle",
	NotWorn: "NotWorn",
	MotionWare: "MotionWare",
	HLRB: "HLRB"
}, W = {
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
}, V = {
	PHYSICAL_ACTIVITY: "physical_activity",
	SLEEP_DIARY: "sleep_diary",
	CSV_IMPORT: "csv_import",
	PRESET_MANAGEMENT: "preset_management",
	NONWEAR_TIME: "nonwear_time",
	CONSENSUS_REVIEW: "consensus_review",
	ANALYSIS_ISSUES: "analysis_issues"
}, B = {
	use_source_a: "use_source_a",
	use_source_b: "use_source_b",
	intersection: "intersection",
	union: "union",
	source_b_bounded_by_source_a: "source_b_bounded_by_source_a",
	sanity_clamp_source_b_to_source_a: "sanity_clamp_source_b_to_source_a"
}, U = {
	diary: "diary",
	hdcza: "hdcza",
	l5: "l5",
	selected_scorer_first_last: "selected_scorer_first_last",
	selected_scorer_longest_bout: "selected_scorer_longest_bout",
	quiet_bout: "quiet_bout",
	event_marker: "event_marker",
	actiware_rest_interval: "actiware_rest_interval",
	none: "none"
}, $ = {
	evening_onset: "evening_onset",
	morning_offset: "morning_offset",
	daytime: "daytime"
}, K = {
	NOON_OFFSET_HOURS: 12,
	ANALYSIS_WINDOW_HOURS: 24,
	CONTEXT_WINDOW_HOURS: 48,
	MORNING_OFFSET_ROLLOVER_PAD_HOURS: 6
}, q = {
	MAX_SLEEP_PERIODS_PER_DAY: 4,
	MAX_NONWEAR_PERIODS_PER_DAY: 10,
	EPOCH_DURATION_SECONDS: 60
}, X = {
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
function Y(e) {
	const t = X[e];
	if (void 0 === t) throw new Error(`no implementation_version for ${e}`);
	return t;
}
function Z(e) {
	return Object.hasOwn(X, e) ? e : null;
}
function J(e) {
	if (!e.ggirCorrections || !e.stock) return;
	const { stock: t, ggirCorrections: a, ms2: r, ms3: n, ms4: i, ms5: s, cleanedNightsCsv: o, part2Reports: c, personReports: l, ...u } = e;
	return {
		...u,
		...t
	};
}
var Q = class extends Error {
	name = "GgirResultsBundleError";
	category = o;
	folderName;
	fileName;
	constructor(e, t, a) {
		super(e), this.folderName = t, this.fileName = a;
	}
};
const ee = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakMap(), ae = /* @__PURE__ */ new WeakMap();
function re(e, t) {
	const a = new File([], e);
	return ae.set(a, t instanceof Q ? t : new Q(t ? "The GGIR output folder could not be read. Check folder access and open it again." : "The GGIR output folder is empty or contains no supported activity files.", e)), a;
}
function ne(e) {
	return ee.get(e);
}
function ie(e, t) {
	te.set(e, t);
}
function se(e) {
	const t = te.get(e);
	if (t) return t;
	const a = e.webkitRelativePath;
	return "string" == typeof a && a ? a : e.name;
}
function oe(e, t) {
	return /\.csv$/iu.test(e.name) && se(e) !== e.name ? new Q("This CSV table could not be read as activity data. GGIR imports require the whole output folder containing meta/ and config.csv.", void 0, e.name) : t instanceof Error ? t : new Error(t);
}
function ce(e, t = !1) {
	const a = e.replace(/\\/gu, "/");
	return !/(^|\/)(?:\._[^/]*|__MACOSX)(?:\/|$)/iu.test(a) && (t || !/(^|\/)(?:ms5\.outraw|sib\.reports|sleep\.qc)(?:\/|$)/iu.test(a));
}
function le(e) {
	const t = e.replace(/\\/g, "/").split("/").filter(Boolean), a = t.indexOf("meta");
	return a >= 0 && a < t.length - 1 ? t.slice(0, a).join("/") : null;
}
function ue(e) {
	return t = _e(e), /\.(rdata|rda)$/iu.test(t) ? le(e) : null;
	var t;
}
function de(e) {
	const t = e.map((e) => e.replace(/\\/gu, "/")).filter((e) => ce(e, !0)), a = new Set(t.map(ue).filter((e) => null !== e)), r = /* @__PURE__ */ new Map();
	for (const n of t) {
		const e = le(n);
		if (null === e || !a.has(e)) continue;
		const t = r.get(e) ?? [];
		t.push(n.slice(e ? e.length + 1 : 0)), r.set(e, t);
	}
	for (const [n, i] of r) {
		const e = n ? _e(n) : void 0, a = [...new Set(i.filter((e) => e.split("/").length > 2).map((e) => e.split("/")[1] ?? "").filter(Boolean))].sort().map((e) => `meta/${e}`).join(", ") || "no part folders", r = n ? `${n}/` : "";
		if (!t.some((e) => e.startsWith(r) && "config.csv" === e.slice(r.length).toLowerCase())) throw new Q(`The GGIR output has no config.csv (found ${a}). GGIR writes config.csv next to meta/; add it to the folder and import again.`, e);
		for (const t of [
			"basic",
			"ms2.out",
			"ms3.out",
			"ms4.out",
			"ms5.out"
		]) {
			const a = `meta/${t}/`, r = i.filter((e) => e.startsWith(a)).map((e) => e.slice(a.length)).find((e) => e.includes("/"))?.split("/")[0];
			if (r) throw new Q(`meta/${t} contains a folder ${r}/ instead of ${"basic" === t ? "meta_*.RData" : "*.RData"} files: move its files up one level, as GGIR writes them.`, e);
		}
		if (!i.some((e) => /^meta\/basic\/meta_[^/]+\.(?:rdata|rda)$/iu.test(e))) throw new Q(`meta/basic ${i.some((e) => e.startsWith("meta/basic/")) ? "contains no meta_*.RData files" : "is missing"} (found ${a}). Part 1 files (meta_*.RData) are needed.`, e);
	}
}
function pe(e) {
	return {
		...e.desiredTz ? { desiredtz: e.desiredTz } : {},
		...e.configTz ? { configtz: e.configTz } : {},
		..."boolean" == typeof e.imputeTimegaps ? { imputeTimegaps: e.imputeTimegaps } : {}
	};
}
function _e(e) {
	const t = e.replace(/\\/g, "/").split("/");
	return t[t.length - 1] ?? e;
}
function fe() {
	return t;
}
t.join(" · ");
const me = [
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
function he(e) {
	return void 0 !== (t = e, ae.get(t)) || function(e, t = fe()) {
		const a = e.toLowerCase();
		return ce(e) && t.some((e) => a.endsWith(e));
	}(e.name, fe());
	var t;
}
function ge(e) {
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
(me[0]?.items ?? []).join(", "), me.slice(1).map((e) => e.label).join(" and ");
const we = [
	".csv",
	".gt3x",
	".bin",
	".rdata",
	".rda",
	".zip",
	".tar.bz2",
	".tbz2"
];
function ve(e) {
	const t = document.createElement("input");
	t.type = "file", t.accept = fe().join(","), e && (t.multiple = !0);
	const a = ge(t);
	return t.click(), a.then((e) => "cancelled" in e ? null : e.files);
}
function be() {
	const e = document.createElement("input");
	e.type = "file", e.setAttribute("webkitdirectory", "");
	const t = ge(e);
	return e.click(), t.then((e) => {
		if ("cancelled" in e) return null;
		const { files: t } = e;
		try {
			de(t.map(se));
		} catch (a) {
			if (!(a instanceof Q)) throw a;
			return [re(a.folderName ?? "GGIR output folder", a)];
		}
		return t.filter((e) => he(e) && ce(se(e)));
	});
}
async function ye(e, t = e.name) {
	try {
		const a = [], r = await Ee(e, t, a);
		return de(a), r.length ? r : [re(e.name, !1)];
	} catch (a) {
		return [re(e.name, !(a instanceof Q) || a)];
	}
}
async function Ee(e, t, a) {
	if (!ce(t)) return [];
	const r = [], n = "function" == typeof e.values ? e.values() : e;
	for await (const i of n) {
		const e = i, n = t ? `${t}/${e.name}` : e.name;
		if (a.push("directory" === e.kind ? `${n}/` : n), ce(n)) {
			if ("file" === e.kind && "function" == typeof e.getFile && he(e)) {
				const t = await e.getFile();
				ie(t, n), r.push(t);
				continue;
			}
			"directory" === e.kind && r.push(...await Ee(e, n, a));
		}
	}
	return r;
}
function ke(e) {
	return e.isFile ? {
		kind: "file",
		name: e.name,
		getFile: () => new Promise((t, a) => e.file(t, a))
	} : {
		kind: "directory",
		name: e.name,
		values: () => Ae(e.createReader())
	};
}
async function* Ae(e) {
	const t = await new Promise((t, a) => e.readEntries(t, a));
	t.length && (yield* t.map(ke), yield* Ae(e));
}
const Re = "auto-update is unavailable on the web platform";
let Se = null;
var Ie = e({ getPlatform: () => Ge });
let Pe = null;
function Ge() {
	return Pe || (Pe = globalThis.isTauri ? {
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
						extensions: S
					}]
				});
				if (null == a) return null;
				const r = Array.isArray(a) ? a : [a], n = [];
				for (const i of r) n.push(await A.fromPath(i));
				return n.length > 0 ? n : null;
			}(e),
			pickFolder: () => async function() {
				const { open: e } = await import("./dist-js-DtyocxnK.js"), { invoke: t } = await import("./core-B0WeKh9d.js"), a = await e({
					directory: !0,
					multiple: !1
				});
				if ("string" != typeof a) return null;
				const r = await t("list_supported_files", { dir: a }), n = [];
				for (const i of r) n.push(await A.fromPath(i));
				return n.length > 0 ? n : null;
			}(),
			saveBlob: (e, t, a) => async function(e, t, a) {
				const { save: r } = await import("./dist-js-DtyocxnK.js"), { invoke: n } = await import("./core-B0WeKh9d.js");
				a?.throwIfAborted();
				const i = await E(r({ defaultPath: t }), a);
				if (a?.throwIfAborted(), !i) return null;
				const s = new Uint8Array(await E(e.arrayBuffer(), a)), o = Array.from(s);
				return a?.throwIfAborted(), await n("save_file_atomic", {
					path: i,
					bytes: o
				}), i;
			}(e, t, a)
		},
		fileDrop: { subscribe: (e) => function(e) {
			let t = null, a = !1;
			return (async () => {
				const { getCurrentWindow: r } = await import("./window-uHC0_7hY.js"), n = await r().onDragDropEvent(async (t) => {
					const a = t.payload;
					"enter" === a.type ? e({ phase: "enter" }) : "over" === a.type ? e({ phase: "over" }) : "leave" === a.type ? e({ phase: "leave" }) : "drop" === a.type && e({
						phase: "drop",
						sources: await Promise.all(a.paths.map((e) => A.fromPath(e)))
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
					groupHash: await R(e),
					username: t
				});
			}(e, t),
			computeGroupHash: (e) => R(e)
		},
		peers: { discoverPeers: async () => {
			const { invoke: e } = await import("./core-B0WeKh9d.js");
			return e("discover_peers");
		} },
		updater: {
			check: () => async function() {
				const { check: e } = await import("./dist-js-D7-Ut_gj.js"), t = await e();
				return t?.available ? (Se = t, {
					version: t.version,
					currentVersion: t.currentVersion,
					...t.body ? { body: t.body } : {},
					...t.date ? { date: t.date } : {}
				}) : (Se = null, null);
			}(),
			downloadAndInstall: (e) => async function(e) {
				if (!Se) throw new Error("No pending update. Call checkForUpdate() first.");
				const t = Se;
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
				}), Se = null;
			}(e),
			relaunch: () => async function() {
				const { relaunch: e } = await import("./dist-js-BHHcisaJ.js");
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
								...Object.fromEntries(fe().filter((e) => !we.includes(e)).map((e) => [`application/x-${e.slice(1)}`, [e]]))
							}
						}],
						multiple: e
					}), a = [];
					for (const e of t) a.push(await e.getFile());
					return a.length > 0 ? a : null;
				} catch (t) {
					return t instanceof DOMException && "AbortError" === t.name ? null : (console.warn("[web-dialogs] showOpenFilePicker failed, falling back to <input>:", t instanceof Error ? t.message : t), ve(e));
				}
				return ve(e);
			}(e),
			pickFolder: () => async function() {
				if ("showDirectoryPicker" in window) try {
					return await ye(await window.showDirectoryPicker());
				} catch (e) {
					return e instanceof DOMException && "AbortError" === e.name ? null : (console.warn("[web-dialogs] showDirectoryPicker failed, falling back to <input>:", e instanceof Error ? e.message : e), be());
				}
				return be();
			}(),
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
			}), i = (t) => {
				const a = t;
				r(a) && (a.preventDefault(), e({
					phase: "enter",
					items: n(a)
				}));
			}, s = (t) => {
				const a = t;
				r(a) && (a.preventDefault(), e({
					phase: "over",
					items: n(a)
				}));
			}, o = (t) => {
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
						const t = await e.handle?.catch(() => null) ?? (e.legacy ? ke(e.legacy) : null);
						return "directory" === t?.kind ? ye(t) : t?.getFile ? [await t.getFile().catch(() => re(t.name, !0))] : e.file ? [e.file] : [re(e.legacy?.name ?? "GGIR output folder", !0)];
					}))).flat() : Array.from(e.files);
				}(a.dataTransfer).then((t) => e({
					phase: "drop",
					sources: t
				})));
			};
			return a.addEventListener("dragenter", i), a.addEventListener("dragover", s), a.addEventListener("dragleave", o), a.addEventListener("drop", c), () => {
				a.removeEventListener("dragenter", i), a.removeEventListener("dragover", s), a.removeEventListener("dragleave", o), a.removeEventListener("drop", c);
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
			computeGroupHash: (e) => a(e)
		},
		peers: { discoverPeers: () => Promise.resolve([]) },
		updater: {
			check: () => Promise.resolve(null),
			downloadAndInstall: () => Promise.reject(/* @__PURE__ */ new Error(Re)),
			relaunch: () => Promise.reject(/* @__PURE__ */ new Error(Re))
		}
	}), Pe;
}
export { Z as A, r as B, H as C, B as D, V as E, n as F, w as G, i as H, m as I, f as K, h as L, y as M, E as N, U as O, _ as P, o as R, F as S, W as T, v as U, c as V, b as W, j as _, ne as a, x as b, I as c, O as d, C as f, T as g, N as h, oe as i, Y as j, $ as k, P as l, L as m, Ie as n, J as o, K as p, Q as r, pe as s, Ge as t, G as u, D as v, q as w, z as x, M as y, s as z };
