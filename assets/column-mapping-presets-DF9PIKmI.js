import { a as e, n as t, r as n } from "./preset-families-CELjImJE.js";
import { a as i, i as r } from "./csv-column-mapping-BSSY09yh.js";
import { n as o, o as a } from "./diary-replication-profile-gcyWRTgQ.js";
import { validateDiaryInstrumentMapping as s } from "./diary-instrument-mapping-D5PGvhNO.js";
n(t.CSV_MAPPING).storageKey, n(t.DIARY_MAPPING).storageKey;
const l = /* @__PURE__ */ new Set(["ggir_part5_daysummary"]), u = /* @__PURE__ */ new Set([
	"automatic",
	"built_in_format",
	"manual",
	"mixed"
]), m = /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/, c = /* @__PURE__ */ new Set([
	"explicit_only",
	"sleep_date_same_day",
	"sleep_date_chronology"
]), p = /* @__PURE__ */ new Set([
	"auto",
	"sleep_date",
	"bed_date",
	"sleep_onset_date",
	"wake_date",
	"out_of_bed_date",
	"analysis_date"
]), f = {
	bed_time: "diary_in_bed_time",
	lights_out: "diary_onset_time",
	wake_time: "diary_wake_time",
	got_up: "diary_out_of_bed_time"
};
function d(e, t) {
	if ("number" != typeof e || !Number.isFinite(e)) return;
	const n = t && l.has(t) ? 86400 : 300;
	return Math.max(1, Math.min(n, Math.floor(e)));
}
function g(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
function y(e) {
	return "string" == typeof e && u.has(e) ? e : void 0;
}
function _(e) {
	if ("string" != typeof e) return;
	const t = e.trim();
	return m.test(t) ? t : void 0;
}
function h(e) {
	if (!g(e)) return;
	const t = Object.fromEntries(Object.entries(e).slice(0, 200).filter(([e, t]) => e.length > 0 && e.length <= 512 && "string" == typeof t && c.has(t)));
	return Object.keys(t).length > 0 ? t : void 0;
}
function v(e) {
	return "string" == typeof e && p.has(e) ? e : void 0;
}
function D(t) {
	return "string" == typeof t ? e(t) ?? void 0 : void 0;
}
function S(e) {
	const t = /* @__PURE__ */ new Map();
	for (const n of e ?? []) {
		const e = n.trim(), r = i(e);
		0 === r.length || t.has(r) || t.set(r, e);
	}
	return [...t.entries()].sort(([e], [t]) => e.localeCompare(t)).map(([, e]) => e);
}
function w(e) {
	const t = void 0 !== e.instrumentVersionDefinitionId, n = void 0 !== e.instrumentMapping, i = void 0 !== e.replicationProfileDraft;
	if (!t && !n && !i) return {};
	if (!t || !n || "string" != typeof e.instrumentVersionDefinitionId) return null;
	const r = e.instrumentVersionDefinitionId.trim(), l = function(e) {
		if (!g(e)) return null;
		const t = {};
		for (const [n, i] of Object.entries(e)) {
			if ("string" != typeof i) return null;
			t[n] = i;
		}
		return t;
	}(e.instrumentMapping);
	if (0 === r.length || null === l || s(r, l).length > 0) return null;
	let u;
	try {
		u = i ? JSON.parse(JSON.stringify(e.replicationProfileDraft)) : o(r), delete u.instrumentMapping, u.profile.profile_sha256 = "";
		const t = /* @__PURE__ */ new Set([
			"unknown_version",
			"contract_mismatch",
			"catalog_mismatch",
			"version_mismatch",
			"language_mismatch",
			"license_mismatch",
			"capability_set_mismatch",
			"reviewed_evidence_changed"
		]);
		if (u.profile.version_definition_id !== r || a(u).some((e) => t.has(e.code))) return null;
	} catch {
		return null;
	}
	return {
		instrumentVersionDefinitionId: r,
		instrumentMapping: l,
		replicationProfileDraft: u
	};
}
function P(e, t = localStorage) {
	try {
		const n = t.getItem(e), i = n ? JSON.parse(n) : [];
		return Array.isArray(i) ? i.flatMap((e) => {
			const t = function(e) {
				if (!g(e) || "string" != typeof e.name || !g(e.mapping)) return null;
				const t = {};
				for (const [r, d] of Object.entries(e.mapping)) {
					if ("string" != typeof d) continue;
					const e = f[r] ?? r;
					e !== r && e in t || (t[e] = d);
				}
				const n = "string" == typeof e.devicePreset && e.devicePreset.trim().length > 0 ? e.devicePreset.trim() : void 0, i = "number" == typeof e.skipRows ? r(e.skipRows) : 0, o = d(e.epochLengthSeconds, n), a = y(e.mappingOrigin), s = _(e.sourceFormatId), l = h(e.diaryTemporalDateRules), u = v(e.diaryPrimaryDateTarget), m = D(e.diaryDefaultTimezone), c = function(e) {
					return void 0 === e ? [] : !Array.isArray(e) || e.some((e) => "string" != typeof e) ? null : S(e);
				}(e.ignoredSourceHeaders);
				if (null === c) return null;
				const p = w({
					instrumentVersionDefinitionId: e.instrumentVersionDefinitionId,
					instrumentMapping: e.instrumentMapping,
					replicationProfileDraft: e.replicationProfileDraft
				});
				return null === p ? null : {
					name: e.name,
					mapping: t,
					skipRows: i,
					...null == o ? {} : { epochLengthSeconds: o },
					...null == n ? {} : { devicePreset: n },
					...null == a ? {} : { mappingOrigin: a },
					...null == s ? {} : { sourceFormatId: s },
					...null == l ? {} : { diaryTemporalDateRules: l },
					...null == u ? {} : { diaryPrimaryDateTarget: u },
					...null == m ? {} : { diaryDefaultTimezone: m },
					...0 === c.length ? {} : { ignoredSourceHeaders: c },
					...p
				};
			}(e);
			return t ? [t] : [];
		}) : [];
	} catch {
		return [];
	}
}
function b(e, t, n = localStorage) {
	const i = t.slice(0, 20);
	return n.setItem(e, JSON.stringify(i.map((e) => {
		const t = e.devicePreset?.trim(), n = d(e.epochLengthSeconds, t), i = y(e.mappingOrigin), o = _(e.sourceFormatId), a = h(e.diaryTemporalDateRules), s = v(e.diaryPrimaryDateTarget), l = D(e.diaryDefaultTimezone), u = S(e.ignoredSourceHeaders), m = function(e) {
			const t = w(e);
			if (null === t) throw new TypeError("Reviewed diary preset mapping is invalid.");
			return t;
		}(e);
		return {
			name: e.name,
			mapping: e.mapping,
			skipRows: r(e.skipRows),
			...null == n ? {} : { epochLengthSeconds: n },
			...t ? { devicePreset: t } : {},
			...null == i ? {} : { mappingOrigin: i },
			...null == o ? {} : { sourceFormatId: o },
			...null == a ? {} : { diaryTemporalDateRules: a },
			...null == s ? {} : { diaryPrimaryDateTarget: s },
			...null == l ? {} : { diaryDefaultTimezone: l },
			...0 === u.length ? {} : { ignoredSourceHeaders: u },
			...m
		};
	}))), {
		kept: i.length,
		dropped: t.length - i.length
	};
}
export { b as i, P as n, S as r, f as t };
