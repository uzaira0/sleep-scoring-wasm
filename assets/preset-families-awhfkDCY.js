import { l as e } from "./ggir-results-types-WB8axvb-.js";
import { J as t, j as i } from "./workspace-db-BfwRi1Vg.js";
var s = e(t(), 1);
/**
* @license lucide-react v1.39.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/ const a = (...e) => e.filter((e, t, i) => Boolean(e) && "" !== e.trim() && i.indexOf(e) === t).join(" ").trim(), r = (e) => {
	const t = ((e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, i) => i ? i.toUpperCase() : t.toLowerCase()))(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
};
/**
* @license lucide-react v1.39.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
/**
* @license lucide-react v1.39.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var n = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
/**
* @license lucide-react v1.39.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/ const o = (e) => {
	for (const t in e) if (t.startsWith("aria-") || "role" === t || "title" === t) return !0;
	return !1;
}, p = (0, s.createContext)({}), l = (0, s.forwardRef)(({ color: e, size: t, strokeWidth: i, absoluteStrokeWidth: r, className: l = "", children: c, iconNode: d, ...u }, m) => {
	const { size: h = 24, strokeWidth: y = 2, absoluteStrokeWidth: g = !1, color: v = "currentColor", className: w = "" } = (0, s.useContext)(p) ?? {}, S = r ?? g ? 24 * Number(i ?? y) / Number(t ?? h) : i ?? y;
	return (0, s.createElement)("svg", {
		ref: m,
		...n,
		width: t ?? h ?? n.width,
		height: t ?? h ?? n.height,
		stroke: e ?? v,
		strokeWidth: S,
		className: a("lucide", w, l),
		...!c && !o(u) && { "aria-hidden": "true" },
		...u
	}, [...d.map(([e, t]) => (0, s.createElement)(e, t)), ...Array.isArray(c) ? c : [c]]);
}), c = (e, t) => {
	const i = (0, s.forwardRef)(({ className: i, ...n }, o) => {
		return (0, s.createElement)(l, {
			ref: o,
			iconNode: t,
			className: a(`lucide-${p = r(e), p.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`, `lucide-${e}`, i),
			...n
		});
		var p;
	});
	return i.displayName = r(e), i;
}, d = c("activity", [["path", {
	d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
	key: "169zse"
}]]), u = c("book-open", [["path", {
	d: "M12 5v16",
	key: "1f6ucr"
}], ["path", {
	d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",
	key: "1fyvmf"
}]]), m = c("database", [
	["ellipse", {
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3",
		key: "msslwz"
	}],
	["path", {
		d: "M3 5V19A9 3 0 0 0 21 19V5",
		key: "1wlel7"
	}],
	["path", {
		d: "M3 12A9 3 0 0 0 21 12",
		key: "mv7ke4"
	}]
]), h = c("folder-open", [["path", {
	d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
	key: "usdka0"
}]]), y = c("git-compare-arrows", [
	["circle", {
		cx: "5",
		cy: "6",
		r: "3",
		key: "1qnov2"
	}],
	["path", {
		d: "M12 6h5a2 2 0 0 1 2 2v7",
		key: "1yj91y"
	}],
	["path", {
		d: "m15 9-3-3 3-3",
		key: "1lwv8l"
	}],
	["circle", {
		cx: "19",
		cy: "18",
		r: "3",
		key: "1qljk2"
	}],
	["path", {
		d: "M12 18H7a2 2 0 0 1-2-2V9",
		key: "16sdep"
	}],
	["path", {
		d: "m9 15 3 3-3 3",
		key: "1m3kbl"
	}]
]), g = c("sliders-horizontal", [
	["path", {
		d: "M10 5H3",
		key: "1qgfaw"
	}],
	["path", {
		d: "M12 19H3",
		key: "yhmn1j"
	}],
	["path", {
		d: "M14 3v4",
		key: "1sua03"
	}],
	["path", {
		d: "M16 17v4",
		key: "1q0r14"
	}],
	["path", {
		d: "M21 12h-9",
		key: "1o4lsq"
	}],
	["path", {
		d: "M21 19h-5",
		key: "1rlt1p"
	}],
	["path", {
		d: "M21 5h-7",
		key: "1oszz2"
	}],
	["path", {
		d: "M8 10v4",
		key: "tgpxqk"
	}],
	["path", {
		d: "M8 12H3",
		key: "a7s4jb"
	}]
]), v = c("triangle-alert", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]);
/**
* @license lucide-react v1.39.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/ function w(e) {
	const t = e?.trim() ?? "";
	if (!t || "undefined" == typeof Intl || "function" != typeof Intl.DateTimeFormat) return null;
	if ("UTC" !== t && !/^[A-Za-z][A-Za-z0-9._+-]*(?:\/[A-Za-z0-9._+-]+)+$/.test(t)) return null;
	try {
		return new Intl.DateTimeFormat("en-US", { timeZone: t }).format(0), t;
	} catch {
		return null;
	}
}
function S(e) {
	const t = e?.trim() ?? "";
	return 0 === t.length || null !== w(t);
}
Object.values(i);
const I = {
	[i.PHYSICAL_ACTIVITY]: {
		id: i.PHYSICAL_ACTIVITY,
		route: "/physical-activity",
		label: "Physical Activity",
		navLabel: "Activity",
		navDescription: "Methods & cutpoints",
		description: "Physical activity scoring, method eligibility, cutpoint presets, and MIMS readiness.",
		status: "implemented",
		icon: d,
		priorities: [
			"Keep cutpoint methods and visualization production-ready.",
			"Expose method eligibility and missing-signal reasons before users run exports.",
			"Wire the injectable MIMS backend when actours MIMS output is available."
		],
		actions: [{
			label: "Open Physical Activity",
			href: "/physical-activity",
			description: "Run method readiness, cutpoint, MIMS, and activity-intensity analysis."
		}, {
			label: "Review CSV Mapping",
			href: "/csv-import",
			description: "Map Y-axis, vector magnitude, ENMO, or MIMS columns before scoring methods run."
		}]
	},
	[i.SLEEP_DIARY]: {
		id: i.SLEEP_DIARY,
		route: "/diary-import",
		label: "Sleep Diary",
		navLabel: "Diary",
		navDescription: "Map & validate",
		description: "Sleep diary import, column alignment, validation, and repair workflow.",
		status: "implemented",
		icon: u,
		priorities: [
			"Keep diary import and validation focused on repairable user errors.",
			"Promote unmatched rows and validation failures into a repair queue.",
			"Share preset infrastructure with CSV mapping instead of storing ad hoc mappings."
		],
		actions: [{
			label: "Open Diary Import",
			href: "/diary-import",
			description: "Map, preview, validate, and import diary CSV rows."
		}, {
			label: "Open Files",
			href: "/settings/data",
			description: "Open matching activity files when you are ready; staged diary rows attach later without requiring import order."
		}]
	},
	[i.CSV_IMPORT]: {
		id: i.CSV_IMPORT,
		route: "/csv-import",
		label: "CSV Import",
		navLabel: "CSV Import",
		navDescription: "Map activity columns",
		description: "Generic CSV parsing, schema mapping, preview, and import-readiness settings.",
		status: "implemented",
		icon: m,
		priorities: [
			"Autodetect where possible but keep user review explicit.",
			"Validate required timestamp and activity mappings before import starts.",
			"Keep parser, skip-row, and mapping presets under shared preset management."
		],
		actions: [{
			label: "Open CSV Settings",
			href: "/csv-import",
			description: "Configure parser settings, preview headers, and align columns."
		}, {
			label: "Open Files",
			href: "/settings/data",
			description: "Import supported activity files after settings pass validation."
		}]
	},
	[i.PRESET_MANAGEMENT]: {
		id: i.PRESET_MANAGEMENT,
		route: "/presets",
		label: "Preset Management",
		navLabel: "Presets",
		navDescription: "Mappings & defaults",
		description: "Shared preset management for mappings, cutpoints, postprocessing rules, and study defaults.",
		status: "implemented",
		icon: g,
		priorities: [
			"Unify CSV mapping, diary mapping, cutpoint, and future postprocessing presets.",
			"Support rename, duplicate, delete, import, and export from one place.",
			"Validate preset payloads before they can affect imports or scoring."
		],
		actions: [{
			label: "Open Presets",
			href: "/presets",
			description: "Rename, duplicate, delete, import, and export active-workspace presets."
		}, {
			label: "CSV Mapping Settings",
			href: "/csv-import",
			description: "Create and apply CSV mapping presets from CSV Import."
		}]
	},
	[i.NONWEAR_TIME]: {
		id: i.NONWEAR_TIME,
		route: "/nonwear-time",
		label: "Non/Wear Time",
		navLabel: "Non/Wear",
		navDescription: "Review wear evidence",
		description: "Nonwear and wear-time review, manual/sensor/algorithm sources, and sleep-overlap conflicts.",
		status: "implemented",
		icon: h,
		priorities: [
			"Surface existing backend nonwear outputs without reimplementing detection.",
			"Show manual, sensor, and algorithm nonwear sources as separate evidence.",
			"Flag sleep-overlap conflicts and route resolution to scoring/review workflows."
		],
		actions: [{
			label: "Open Non/Wear Time",
			href: "/nonwear-time",
			description: "Review stored manual, sensor, and algorithm nonwear evidence."
		}, {
			label: "Import Nonwear CSV",
			href: "/nonwear-time",
			description: "Load external nonwear periods from the Non/Wear workspace."
		}]
	},
	[i.CONSENSUS_REVIEW]: {
		id: i.CONSENSUS_REVIEW,
		route: "/consensus-review",
		label: "Consensus Review",
		navLabel: "Consensus",
		navDescription: "Resolve disagreements",
		description: "Consensus and disagreement review across scorers, algorithms, diary evidence, and nonwear decisions.",
		status: "implemented",
		icon: y,
		priorities: [
			"Move disagreement workflows out of Analysis into a review-oriented page.",
			"Separate sleep consensus and nonwear consensus queues.",
			"Link each disagreement to the evidence and the action needed to resolve it."
		],
		actions: [{
			label: "Open Consensus Review",
			href: "/consensus-review",
			description: "Review sleep and nonwear dates flagged for consensus."
		}, {
			label: "Open Sleep",
			href: "/scoring",
			description: "Resolve candidates with plot overlays and the voting sidebar."
		}]
	},
	[i.ANALYSIS_ISSUES]: {
		id: i.ANALYSIS_ISSUES,
		route: "/analysis-issues",
		label: "Analysis Issues",
		navLabel: "Issues",
		navDescription: "Fix readiness problems",
		description: "Cross-domain issue flags surfaced by analysis, with links to the owning resolution workflow.",
		status: "implemented",
		icon: v,
		priorities: [
			"Flag issues without owning the resolution workflow.",
			"Route nonwear overlaps, diary gaps, CSV mapping failures, and consensus disagreements to their owning pages.",
			"Keep Analysis focused on summary while this page becomes the issue inbox."
		],
		actions: [{
			label: "Open Issue Inbox",
			href: "/analysis-issues",
			description: "Review cross-domain readiness flags and route each fix to its owning workflow."
		}, {
			label: "Open Non/Wear Time",
			href: "/nonwear-time",
			description: "Nonwear conflicts should resolve in the dedicated Non/Wear Time workflow."
		}]
	}
};
function f(e) {
	return I[e];
}
i.PRESET_MANAGEMENT, i.NONWEAR_TIME, i.CONSENSUS_REVIEW, i.ANALYSIS_ISSUES, i.PHYSICAL_ACTIVITY;
const A = {
	CSV_MAPPING: "csv_mapping",
	DIARY_MAPPING: "diary_mapping",
	PHYSICAL_ACTIVITY_CUTPOINTS: "physical_activity_cutpoints",
	PHYSICAL_ACTIVITY_INCLUSION_RULES: "physical_activity_inclusion_rules",
	SCORING_RECIPE: "scoring_recipe"
}, C = Object.values(A), b = {
	[A.CSV_MAPPING]: {
		id: A.CSV_MAPPING,
		label: "CSV Mapping Presets",
		description: "Generic activity CSV column alignment and skip-row settings.",
		emptyMessage: "No generic CSV mapping presets saved yet.",
		ownerLabel: "CSV Import Settings",
		ownerHref: f(i.CSV_IMPORT).route,
		storageKey: "sleep-scoring-csv-mapping-presets"
	},
	[A.DIARY_MAPPING]: {
		id: A.DIARY_MAPPING,
		label: "Diary Mapping Presets",
		description: "Sleep diary column alignment and skipped metadata rows.",
		emptyMessage: "No diary mapping presets saved yet.",
		ownerLabel: "Sleep Diary Import",
		ownerHref: f(i.SLEEP_DIARY).route,
		storageKey: "sleep-scoring-diary-mapping-presets"
	},
	[A.PHYSICAL_ACTIVITY_CUTPOINTS]: {
		id: A.PHYSICAL_ACTIVITY_CUTPOINTS,
		label: "Physical Activity Cutpoints",
		description: "Editable cutpoint thresholds saved from the Physical Activity workspace.",
		emptyMessage: "No physical activity cutpoint presets saved yet.",
		ownerLabel: "Physical Activity",
		ownerHref: f(i.PHYSICAL_ACTIVITY).route,
		storageKey: "sleep-scoring-pa-cutpoint-presets"
	},
	[A.PHYSICAL_ACTIVITY_INCLUSION_RULES]: {
		id: A.PHYSICAL_ACTIVITY_INCLUSION_RULES,
		label: "Physical Activity Inclusion Rules",
		description: "Wake-wear denominator rules saved from the Physical Activity workspace.",
		emptyMessage: "No physical activity inclusion-rule presets saved yet.",
		ownerLabel: "Physical Activity",
		ownerHref: f(i.PHYSICAL_ACTIVITY).route,
		storageKey: "sleep-scoring-pa-inclusion-rule-presets"
	},
	[A.SCORING_RECIPE]: {
		id: A.SCORING_RECIPE,
		label: "Scoring Recipes",
		description: "Reproducible scored-result presets: algorithm, nonwear detector, sleep-period detection, placement ruleset, and scorer post-processing.",
		emptyMessage: "No scoring recipes saved yet.",
		ownerLabel: "Preset Management",
		ownerHref: f(i.PRESET_MANAGEMENT).route,
		storageKey: "sleep-scoring-scoring-recipe-presets"
	}
};
function M(e) {
	return b[e];
}
export { w as a, S as i, A as n, M as r, C as t };
