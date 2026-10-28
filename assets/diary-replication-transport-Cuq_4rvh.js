import { o as i } from "./content-hash-BtD8CeUH.js";
import { t as e } from "./audit-hash-rfcCP1yx.js";
import { a as r, r as o } from "./diary-replication-profile-tSfzauLO.js";
import { verifyDiaryInstrumentMappingProvenance as t } from "./diary-instrument-mapping-D5PGvhNO.js";
const a = [
	"contract_version",
	"profile",
	"instrument_mapping",
	"diary_mapping",
	"source_adapter_receipt"
];
function s(i) {
	return null !== i && "object" == typeof i && !Array.isArray(i);
}
function c(i) {
	if (!Array.isArray(i.assignments)) throw new Error("Diary replication transport failed integrity verification.");
	return {
		contractVersion: i.contract_version,
		versionDefinitionId: i.version_definition_id,
		versionDefinitionSha256: i.version_definition_sha256,
		assignments: i.assignments.map((i) => ({
			variableDefinitionId: i.variable_definition_id,
			variableDefinitionSha256: i.variable_definition_sha256,
			...void 0 === i.source_selector_id ? {} : { sourceSelectorId: i.source_selector_id },
			...void 0 === i.source_field_name ? {} : { sourceFieldName: i.source_field_name },
			...void 0 === i.source_field_position ? {} : { sourceFieldPosition: i.source_field_position },
			...void 0 === i.source_path ? {} : { sourcePath: i.source_path },
			...void 0 === i.repeat_instance_id ? {} : { repeatInstanceId: i.repeat_instance_id },
			...void 0 === i.repeat_instance_index ? {} : { repeatInstanceIndex: i.repeat_instance_index },
			detectionTier: i.detection_tier,
			confidence: i.confidence
		})),
		...void 0 === i.profile_variable_definitions ? {} : { profileVariableDefinitions: i.profile_variable_definitions },
		mappingSha256: i.mapping_sha256,
		configurationSha256: i.configuration_sha256
	};
}
async function p(i) {
	if (!s(i) || !function(i) {
		const e = new Set(a);
		return Object.keys(i).every((i) => e.has(i)) && Object.hasOwn(i, "contract_version") && Object.hasOwn(i, "profile");
	}(i)) throw new Error("Diary replication transport failed integrity verification.");
	const o = i;
	if ("diary_replication_import_v1" !== i.contract_version || !s(o.profile) || void 0 !== o.instrument_mapping && !s(o.instrument_mapping) || void 0 !== o.diary_mapping && (!s(o.diary_mapping) || !Array.isArray(o.diary_mapping.column_mappings)) || void 0 !== o.source_adapter_receipt && !s(o.source_adapter_receipt)) throw new Error("Diary replication transport failed integrity verification.");
	const n = void 0 === o.instrument_mapping ? void 0 : await t(c(o.instrument_mapping)), p = function(i) {
		const e = /* @__PURE__ */ new Map(), r = [], o = /* @__PURE__ */ new Set(), n = (i) => {
			"string" != typeof i || 0 === i.length || o.has(i) || (o.add(i), r.push(i));
		}, t = (i) => Number.isSafeInteger(i) && i >= 1 && i <= 1e5, a = (i) => {
			if (!t(i)) throw new Error("Diary replication transport failed integrity verification.");
			e.has(i) || e.set(i, "");
		}, s = (i, r) => {
			if ("string" != typeof i || 0 === i.length || !t(r)) throw new Error("Diary replication transport failed integrity verification.");
			const n = r, a = e.get(n);
			if (void 0 !== a && "" !== a && a !== i) throw new Error("Diary replication transport failed integrity verification.");
			e.set(n, i), o.add(i);
		};
		for (const d of i.instrument_mapping?.assignments ?? []) void 0 === d.source_field_position ? void 0 !== d.source_field_name && n(d.source_field_name) : void 0 === d.source_field_name ? a(d.source_field_position) : s(d.source_field_name, d.source_field_position);
		const c = i.diary_mapping;
		for (const d of c?.source_field_selectors ?? []) void 0 === d.source_field_position ? n(d.source_field_name) : void 0 === d.source_field_name ? a(d.source_field_position) : s(d.source_field_name, d.source_field_position);
		for (const d of c?.execution_output_selectors ?? []) void 0 === d.source_field_position ? n(d.source_field_name) : void 0 === d.source_field_name ? a(d.source_field_position) : s(d.source_field_name, d.source_field_position);
		for (const d of c?.column_mappings ?? []) void 0 === d.source_field_position ? n(d.source_field_name) : s(d.source_field_name, d.source_field_position);
		for (const d of c?.signature_headers ?? []) n(d);
		for (const d of c?.unmapped_source_fields ?? []) n(d);
		let p = 0;
		for (const d of e.keys()) p = Math.max(p, d);
		const _ = Array.from({ length: p }, (i, r) => {
			const n = e.get(r + 1);
			if (void 0 !== n && "" !== n) return n;
			let t = `__replication_transport_unreferenced_${String(r + 1)}`;
			for (; o.has(t);) t = `_${t}`;
			return o.add(t), t;
		});
		for (const d of r) _.includes(d) || _.push(d);
		return _;
	}(o);
	let _;
	try {
		_ = (await r({
			profile: structuredClone(o.profile),
			...void 0 === n ? {} : { instrumentMapping: n },
			...void 0 === o.diary_mapping ? {} : { diaryMapping: structuredClone(o.diary_mapping) },
			...void 0 === o.source_adapter_receipt ? {} : { sourceAdapterReceipt: structuredClone(o.source_adapter_receipt) }
		}, void 0 === n && void 0 === o.diary_mapping ? {} : { availableSourceHeaders: p })).payload;
	} catch {
		throw new Error("Diary replication transport failed integrity verification.");
	}
	if (e(i) !== e(_)) throw new Error("Diary replication transport failed integrity verification.");
	return _;
}
async function _(i) {
	const e = await p(i);
	if (void 0 === e.instrument_mapping) throw new Error("Diary replication transport has no reviewed-variable mapping.");
	return t(c(e.instrument_mapping));
}
async function d(r, n, t) {
	const a = await i(e(r)), s = o({
		payload: r,
		profileSha256: r.profile.profile_sha256,
		transportSha256: a
	}), p = void 0 === r.instrument_mapping ? null : c(r.instrument_mapping);
	if (e(s) !== e(n) || null === p || e(p) !== e(t)) throw new Error("Diary replication transport does not match its stored profile identity and reviewed mapping.");
}
export { d as assertDiaryReplicationTransportBinding, _ as diaryInstrumentMappingProvenanceFromTransport, p as verifyDiaryReplicationTransport };
