import { T as e, b as r, w as i, y as n } from "./workspace-db-_hfwr346.js";
import { o as t } from "./content-hash-BtD8CeUH.js";
import { t as a } from "./audit-hash-rfcCP1yx.js";
import { a as o, n as s, r as p, t as c } from "./diary-local-import-contract-BT88xA2H.js";
import { i as l, o as d, r as m } from "./csv-column-mapping-BSSY09yh.js";
import { r as u } from "./diary-source-adapter-CGUWAoYf.js";
import { n as y } from "./diary-replication-profile-gcyWRTgQ.js";
import { validateDiaryInstrumentMapping as f } from "./diary-instrument-mapping-D5PGvhNO.js";
import { r as g, t as w } from "./column-mapping-presets-DF9PIKmI.js";
const h = [
	"dayBoundaryHour",
	"mainSleepDateRule",
	"napDateRule",
	"nonwearDateRule",
	"dstFoldPolicy",
	"dstGapPolicy"
];
function v(n) {
	if (null == n) return null;
	if ("object" != typeof n || Array.isArray(n)) throw new Error("Diary mapping provenance has an invalid temporal policy.");
	const t = n;
	if (JSON.stringify(Object.keys(t).sort()) !== JSON.stringify([...h].sort())) throw new Error("Diary mapping provenance has an invalid temporal policy.");
	const a = t.dayBoundaryHour;
	if (!Number.isSafeInteger(a) || a < 0 || a > 23) throw new Error("Diary mapping provenance has an invalid temporal policy.");
	const o = (e, r) => "string" == typeof e && Object.values(r).includes(e);
	if (!(o(t.mainSleepDateRule, r) && o(t.napDateRule, r) && o(t.nonwearDateRule, r) && o(t.dstFoldPolicy, i) && o(t.dstGapPolicy, e))) throw new Error("Diary mapping provenance has an invalid temporal policy.");
	return {
		dayBoundaryHour: a,
		mainSleepDateRule: t.mainSleepDateRule,
		napDateRule: t.napDateRule,
		nonwearDateRule: t.nonwearDateRule,
		dstFoldPolicy: t.dstFoldPolicy,
		dstGapPolicy: t.dstGapPolicy
	};
}
const D = "diary_import_mapping_v1", _ = "diary_mapping_preset_content_v5", S = /* @__PURE__ */ new Set([
	"automatic",
	"built_in_format",
	"saved_preset",
	"manual",
	"mixed"
]), E = /^[0-9a-f]{64}$/, O = /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/, b = /* @__PURE__ */ new Set([
	"analysis_date",
	"sleep_date",
	"bed_date",
	"sleep_onset_date",
	"wake_date",
	"out_of_bed_date",
	"sleep_onset_datetime",
	"bed_datetime",
	"wake_datetime",
	"out_of_bed_datetime"
]), F = new Set(u.map((e) => e.key)), R = new Set(u.filter((e) => !0 === (e.allowMultiple ?? e.multivalued)).map((e) => e.key)), j = new Set(Object.keys(w)), P = [
	"contractVersion",
	"origin",
	"effectiveMapping",
	"skipRows",
	"sourceFormatId",
	"presetContentSha256",
	"mappingSha256",
	"configurationSha256"
], k = [
	"targetKey",
	"sourceFieldName",
	"sourceFieldPosition",
	"presence",
	"lexicalValue"
];
function N(e) {
	return Object.entries(e.effectiveMapping).sort(([e], [r]) => e.localeCompare(r)).flatMap(([e, r]) => (R.has(e) ? d(r) : [r]).map((r) => ({
		targetKey: e,
		sourceFieldName: r
	})));
}
function M(e, r, i) {
	return N({ effectiveMapping: e }).map(({ targetKey: e, sourceFieldName: n }) => {
		const t = r.flatMap((e, r) => e === n ? [r + 1] : []);
		if (1 !== t.length) throw new Error("Diary mapping contains a missing or ambiguous exact source column.");
		const a = t[0];
		if (a > i.length) return {
			targetKey: e,
			sourceFieldName: n,
			sourceFieldPosition: a,
			presence: "not_supplied"
		};
		const o = i[a - 1];
		return {
			targetKey: e,
			sourceFieldName: n,
			sourceFieldPosition: a,
			presence: 0 === o.length ? "empty" : "present",
			lexicalValue: o
		};
	});
}
function T(e, r) {
	const i = N(e);
	if (!Array.isArray(r) || r.length !== i.length) throw new Error("Diary source values do not match their mapping provenance.");
	return i.map((e, i) => {
		const n = r[i], t = "not_supplied" === n?.presence ? k.filter((e) => "lexicalValue" !== e) : k;
		if (void 0 === n || JSON.stringify(Object.keys(n).sort()) !== JSON.stringify([...t].sort()) || n.targetKey !== e.targetKey || n.sourceFieldName !== e.sourceFieldName || !Number.isSafeInteger(n.sourceFieldPosition) || n.sourceFieldPosition < 1 || ![
			"present",
			"empty",
			"not_supplied"
		].includes(n.presence) || "present" === n.presence && ("string" != typeof n.lexicalValue || 0 === n.lexicalValue.length) || "empty" === n.presence && "" !== n.lexicalValue || "not_supplied" === n.presence && void 0 !== n.lexicalValue) throw new Error("Diary source values do not match their mapping provenance.");
		return n;
	});
}
function I(e, r, i = !1) {
	const n = [];
	for (const [a, l] of Object.entries(e)) {
		if ("string" != typeof l || 0 === l.trim().length) {
			if (r) throw new Error("Diary mapping provenance contains a noncanonical source assignment.");
			continue;
		}
		const e = i && j.has(a), t = p(a) === a, u = null !== o(a);
		if (!(F.has(a) || e || t || u)) throw new Error("Diary mapping provenance contains an unsupported target.");
		if (r && !e && !c(a)) throw new Error("Diary mapping provenance contains a target local import cannot preserve.");
		const y = "nap_episode_columns" === a || "nonwear_episode_columns" === a, f = R.has(a);
		if (r && f) {
			const e = d(l);
			if (l !== m(e) || e.some((e) => new TextEncoder().encode(e).byteLength > 256)) throw new Error(y ? "Diary mapping provenance contains an invalid repeat-episode assignment." : "Diary mapping provenance contains an invalid multi-column assignment.");
			if (y) {
				const r = a, i = e.map(p);
				if (e.some((e) => !s(r, e)) || i.some((e) => null === e) || new Set(i).size !== i.length) throw new Error("Diary mapping provenance contains an invalid repeat-episode assignment.");
			}
		}
		if (r && !f && new TextEncoder().encode(l).byteLength > 256) throw new Error("Diary mapping provenance contains an oversized source header.");
		n.push([a, l]);
	}
	n.sort(([e], [r]) => e < r ? -1 : e > r ? 1 : 0);
	const t = Object.fromEntries(n);
	if (r && new TextEncoder().encode(JSON.stringify(t)).byteLength > 16384) throw new Error("Diary mapping provenance exceeds the local import limit.");
	if (r) {
		if (!("filename" in t) || ![...b].some((e) => e in t)) throw new Error("Diary mapping provenance is missing the local import identity or date projection.");
		if ("sleep_latency_unit" in t && !("time_to_fall_asleep_minutes" in t)) throw new Error("Diary mapping provenance contains a latency unit without a latency value.");
	}
	return t;
}
function V(e) {
	if (null == e || 0 === e.trim().length) return null;
	const r = e.trim();
	if (!O.test(r)) throw new Error("Diary mapping provenance has an invalid source format identity.");
	return r;
}
async function x(e) {
	const r = I(e.mapping, !1);
	if (0 === Object.keys(r).length) throw new Error("Diary mapping preset has no effective column mapping.");
	const i = e.instrumentVersionDefinitionId?.trim() ?? "", n = i.length > 0 ? i : null, o = e.instrumentMapping ?? {};
	if (f(n, o).length > 0) throw new Error("Diary mapping preset has an invalid reviewed-instrument mapping.");
	const s = Object.fromEntries(Object.entries(o).flatMap(([e, r]) => {
		const i = d(r);
		return 0 === i.length ? [] : [[e, m(i)]];
	}).sort(([e], [r]) => e < r ? -1 : e > r ? 1 : 0));
	let p = null;
	if (null !== n) {
		if (p = structuredClone(e.replicationProfileDraft ?? y(n)), p.profile.version_definition_id !== n) throw new Error("Diary mapping preset has a mismatched replication profile.");
		delete p.instrumentMapping, p.profile.profile_sha256 = "";
	} else if (null != e.replicationProfileDraft) throw new Error("Diary mapping preset has a replication profile without a reviewed version.");
	return t(a({
		contractVersion: _,
		effectiveMapping: r,
		skipRows: l(e.skipRows),
		sourceFormatId: V(e.sourceFormatId),
		diaryTemporalDateRules: Object.fromEntries(Object.entries(e.diaryTemporalDateRules ?? {}).sort(([e], [r]) => e < r ? -1 : e > r ? 1 : 0)),
		diaryPrimaryDateTarget: e.diaryPrimaryDateTarget ?? "auto",
		diaryDefaultTimezone: e.diaryDefaultTimezone ?? null,
		instrumentVersionDefinitionId: n,
		effectiveInstrumentMapping: s,
		replicationProfileDraft: p,
		ignoredSourceHeaders: g(e.ignoredSourceHeaders)
	}));
}
async function C(e, r) {
	if (!S.has(e.origin)) throw new Error("Diary mapping provenance has an unsupported origin.");
	const i = I(e.mapping, !0, r?.legacyReceipt ?? !1);
	if (0 === Object.keys(i).length) throw new Error("Diary mapping provenance has no effective column mapping.");
	const o = l(e.skipRows), s = V(e.sourceFormatId), p = function(e) {
		if (null == e) return null;
		const r = e.trim().toLowerCase();
		if (!E.test(r)) throw new Error("Diary mapping provenance has an invalid preset identity.");
		return r;
	}(e.presetContentSha256);
	if ("saved_preset" === e.origin && null === p) throw new Error("Saved diary mapping provenance requires a preset content identity.");
	if ("saved_preset" !== e.origin && null !== p) throw new Error("Only saved diary preset provenance may carry a preset content identity.");
	if ("built_in_format" === e.origin && null === s) throw new Error("Built-in diary format provenance requires a source format identity.");
	const c = v(e.diaryTemporalPolicy) ?? void 0, d = e.diaryDateOrder;
	if (void 0 !== d && !Object.values(n).includes(d)) throw new Error("Diary mapping provenance has an invalid date order.");
	const m = await async function({ origin: e, effectiveMapping: r, skipRows: i, sourceFormatId: n, presetContentSha256: o, diaryTemporalPolicy: s, diaryDateOrder: p }) {
		return {
			mappingSha256: await t(void 0 === p ? JSON.stringify(r) : a({
				effectiveMapping: r,
				diaryDateOrder: p
			})),
			configurationSha256: await t(JSON.stringify({
				contractVersion: D,
				origin: e,
				effectiveMapping: r,
				skipRows: i,
				sourceFormatId: n,
				presetContentSha256: o,
				...void 0 === s ? {} : { diaryTemporalPolicy: s },
				...void 0 === p ? {} : { diaryDateOrder: p }
			}))
		};
	}({
		origin: e.origin,
		effectiveMapping: i,
		skipRows: o,
		sourceFormatId: s,
		presetContentSha256: p,
		diaryTemporalPolicy: c,
		diaryDateOrder: d
	});
	return {
		contractVersion: D,
		origin: e.origin,
		effectiveMapping: i,
		skipRows: o,
		sourceFormatId: s,
		presetContentSha256: p,
		...m,
		...void 0 === d ? {} : { diaryDateOrder: d },
		...void 0 === c ? {} : { diaryTemporalPolicy: c }
	};
}
async function J(e) {
	if (null === e || "object" != typeof e || Array.isArray(e)) throw new Error("Diary mapping provenance failed integrity verification.");
	const r = Object.keys(e).sort(), i = [
		...P,
		...void 0 === e.diaryDateOrder ? [] : ["diaryDateOrder"],
		...void 0 === e.diaryTemporalPolicy ? [] : ["diaryTemporalPolicy"]
	].sort();
	if (JSON.stringify(r) !== JSON.stringify(i)) throw new Error("Diary mapping provenance failed integrity verification.");
	const n = await C({
		mapping: e.effectiveMapping,
		skipRows: e.skipRows,
		origin: e.origin,
		sourceFormatId: e.sourceFormatId,
		presetContentSha256: e.presetContentSha256,
		diaryTemporalPolicy: e.diaryTemporalPolicy,
		diaryDateOrder: e.diaryDateOrder
	}, { legacyReceipt: !0 });
	if (e.contractVersion !== n.contractVersion || e.origin !== n.origin || e.skipRows !== n.skipRows || e.sourceFormatId !== n.sourceFormatId || e.presetContentSha256 !== n.presetContentSha256 || e.mappingSha256 !== n.mappingSha256 || e.configurationSha256 !== n.configurationSha256 || JSON.stringify(e.effectiveMapping) !== JSON.stringify(n.effectiveMapping)) throw new Error("Diary mapping provenance failed integrity verification.");
	return n;
}
export { D as DIARY_IMPORT_MAPPING_PROVENANCE_VERSION, _ as DIARY_MAPPING_PRESET_CONTENT_VERSION, T as canonicalizeDiaryMappedSourceValues, M as captureDiaryMappedSourceValues, x as diaryMappingPresetContentSha256, v as normalizeDiaryTemporalPolicy, C as prepareDiaryImportMappingProvenance, J as verifyDiaryImportMappingProvenance };
