import "./content-hash-B-at0sOp.js";
import { l as e, u as r } from "./diary-local-import-contract-4H4oml13.js";
e.map((e) => ({
	key: e.key,
	label: e.label,
	targetKeys: [...e.target_keys]
})).filter((e) => "identity" === e.key || "date_coverage" === e.key);
const t = r;
function i(e, r, t, i) {
	const n = (e.identity_bindings ?? []).filter((e) => e.identity_role === r);
	if (0 === n.length) return null;
	if (1 !== n.length || 1 !== n[0].selector_ids.length) throw new Error(`The ${r} identity must resolve to one exact source column.`);
	const o = n[0].selector_ids[0], a = (e.source_field_selectors ?? []).find((e) => e.selector_id === o);
	if (!a) throw new Error(`The ${r} identity does not resolve to one adapter output column.`);
	if (void 0 !== a.source_field_position) {
		const e = t[a.source_field_position - 1];
		if (void 0 === e || void 0 !== a.source_field_name && e !== a.source_field_name) {
			if (i) return null;
			throw new Error(`The ${r} identity does not match the exact source header.`);
		}
		return e;
	}
	const s = t.filter((e) => e === a.source_field_name);
	if (0 === s.length && i) return null;
	if (1 !== s.length) throw new Error(`The ${r} identity is missing or ambiguous in the source header.`);
	return s[0];
}
function n(e, r, t = !1) {
	const n = i(e, "participant_id", r, t), o = null === n ? i(e, "source_record_id", r, t) : null, a = i(e, "diary_day", r, t), s = i(e, "timezone", r, t);
	return {
		...null === n && null === o ? {} : { filename: n ?? o },
		...null === a ? {} : { analysis_date: a },
		...null === s ? {} : { timezone: s }
	};
}
function o(e, r) {
	const t = [
		"adapterId",
		"adapterVersion",
		"conformanceFixtureIds",
		"contractVersion",
		"mappingProfileId",
		"mappingProfileVersion",
		"normalizedSha256",
		"sourceSha256"
	].sort();
	if (null === e || "object" != typeof e || JSON.stringify(Object.keys(e).sort()) !== JSON.stringify(t) || "diary-source-adapter-receipt-v1" !== e.contractVersion || e.mappingProfileId !== r.mapping_profile_id || e.mappingProfileVersion !== r.mapping_profile_version || e.adapterId !== r.execution_adapter_id || e.adapterVersion !== r.execution_adapter_version || JSON.stringify(e.conformanceFixtureIds) !== JSON.stringify(r.conformance_fixture_ids ?? []) || !/^[0-9a-f]{64}$/.test(e.sourceSha256) || !/^[0-9a-f]{64}$/.test(e.normalizedSha256)) throw new Error("Diary source adapter receipt failed integrity verification.");
	return structuredClone(e);
}
export { o as n, t as r, n as t };
