import { Bt as e, Lt as r } from "./schema-B_tCLPTi.js";
import { o as i } from "./content-hash-LIzlxz9S.js";
import { t as n } from "./audit-hash-D_UvOsjj.js";
import { canonicalizeDiaryInstrumentValues as t, verifyDiaryInstrumentMappingProvenance as o } from "./diary-instrument-mapping-CbXoT5Zj.js";
import { c as a, d as s, f as c, l as d, m as l, p as u, s as p, u as f } from "./diary-replication-profile-CDi4gwmi.js";
import { assertDiaryReplicationTransportBinding as y, verifyDiaryReplicationTransport as m } from "./diary-replication-transport-DnWf6SRj.js";
const I = "diary_occurrence_record_v3";
function h(e, r) {
	if (void 0 === r.replicationProfileIdentity || void 0 === r.replicationProfileTransport || void 0 === r.instrumentMappingProvenance || n(r.replicationProfileIdentity) !== n(e.profileIdentity) || n(r.replicationProfileTransport) !== n(e.replicationProfileTransport) || n(r.instrumentMappingProvenance) !== n(e.instrumentMappingProvenance)) throw new Error("Diary occurrence response does not match its compatibility diary profile and mapping.");
}
const _ = /^[0-9a-f]{64}$/, g = /^\d{4}-\d{2}-\d{2}$/, v = [
	"contractVersion",
	"recordSha256",
	"occurrenceIdentitySha256",
	"occurrenceId",
	"sourceKey",
	"normalizedSourceKey",
	"analysisDate",
	"fileId",
	"profileIdentity",
	"replicationProfileTransport",
	"instrumentMappingProvenance",
	"instrumentValues",
	"responseRuntimeResults",
	"ruleRuntimeResults",
	"createdAt"
], w = [
	"identityBindingId",
	"compositeOrderMatters",
	"components"
], D = [
	"selectorId",
	"sourceFieldName",
	"sourceFieldPosition",
	"lexicalValue"
];
function b(e, r) {
	return n(Object.keys(e).sort()) === n([...r].sort());
}
function S(e) {
	if (null === e || "object" != typeof e || Array.isArray(e) || !b(e, w)) throw new Error("Diary occurrence identity failed integrity verification.");
	const i = e;
	if ("string" != typeof i.identityBindingId || 0 === i.identityBindingId.trim().length || "boolean" != typeof i.compositeOrderMatters || !Array.isArray(i.components) || 0 === i.components.length) throw new Error("Diary occurrence identity failed integrity verification.");
	const n = /* @__PURE__ */ new Set(), t = i.components.map((e) => {
		if (null === e || "object" != typeof e || Array.isArray(e) || !b(e, D)) throw new Error("Diary occurrence identity failed integrity verification.");
		const r = e;
		if ("string" != typeof r.selectorId || 0 === r.selectorId.trim().length || n.has(r.selectorId) || "string" != typeof r.sourceFieldName || 0 === r.sourceFieldName.length || !Number.isSafeInteger(r.sourceFieldPosition) || r.sourceFieldPosition < 1 || "string" != typeof r.lexicalValue) throw new Error("Diary occurrence identity failed integrity verification.");
		return n.add(r.selectorId), {
			selectorId: r.selectorId,
			sourceFieldName: r.sourceFieldName,
			sourceFieldPosition: r.sourceFieldPosition,
			lexicalValue: r.lexicalValue
		};
	});
	if (i.compositeOrderMatters || t.sort((e, r) => e.selectorId < r.selectorId ? -1 : e.selectorId > r.selectorId ? 1 : 0), t.every((e) => r(e.lexicalValue))) throw new Error("Diary occurrence identity failed integrity verification.");
	return {
		identityBindingId: i.identityBindingId,
		compositeOrderMatters: i.compositeOrderMatters,
		components: t
	};
}
async function x(e) {
	return i(n({
		identity_binding_id: (r = S(e)).identityBindingId,
		composite_order_matters: r.compositeOrderMatters,
		components: r.components.map((e) => ({
			selector_id: e.selectorId,
			source_field_name: e.sourceFieldName,
			source_field_position: e.sourceFieldPosition,
			lexical_value: e.lexicalValue
		}))
	}));
	var r;
}
function P(e) {
	return {
		contractVersion: e.contractVersion,
		occurrenceIdentitySha256: e.occurrenceIdentitySha256,
		occurrenceId: e.occurrenceId,
		sourceKey: e.sourceKey,
		normalizedSourceKey: e.normalizedSourceKey,
		analysisDate: e.analysisDate,
		profileIdentity: e.profileIdentity,
		replicationProfileTransport: e.replicationProfileTransport,
		instrumentMappingProvenance: e.instrumentMappingProvenance,
		instrumentValues: e.instrumentValues,
		responseRuntimeResults: e.responseRuntimeResults,
		ruleRuntimeResults: e.ruleRuntimeResults
	};
}
function E(e, r) {
	const i = c(r);
	if ("not_supplied" === e.presence || "explicit_clear" === e.presence) return {
		value: null,
		missing: !0
	};
	const n = e.lexicalValue;
	if ("empty" === e.presence || (r.missing_value_codes ?? []).includes(n)) return {
		value: n,
		missing: !0
	};
	if ("string" === i.valueKind) return {
		value: n,
		missing: !1
	};
	try {
		const e = JSON.parse(n);
		return {
			value: e,
			missing: null === e || "multi_select" === i.controlKind && Array.isArray(e) && 0 === e.length
		};
	} catch {
		throw new Error(`Diary occurrence response ${r.response_definition_id} requires an unambiguous JSON lexical value.`);
	}
}
function M(e) {
	return "boolean" == typeof e || "number" == typeof e || "string" == typeof e;
}
function V(e) {
	if (!e) return null;
	const r = (e.identity_bindings ?? []).filter((e) => "occurrence_id" === e.identity_role);
	if (0 === r.length) return null;
	if (1 !== r.length) throw new Error("The replication profile must define exactly one occurrence_id binding.");
	const i = r[0], n = new Map((e.source_field_selectors ?? []).map((e) => [e.selector_id, e])), t = /* @__PURE__ */ new Set(), o = i.selector_ids.map((e) => {
		const r = n.get(e);
		if (!r || t.has(e) || void 0 !== r.source_part_id || void 0 !== r.source_path || void 0 === r.source_field_name && void 0 === r.source_field_position) throw new Error("The occurrence_id binding is not executable against one tabular CSV row.");
		return t.add(e), {
			selectorId: e,
			...void 0 === r.source_field_name ? {} : { sourceFieldName: r.source_field_name },
			...void 0 === r.source_field_position ? {} : { sourceFieldPosition: r.source_field_position }
		};
	});
	if (0 === o.length) throw new Error("The occurrence_id binding requires at least one exact source selector.");
	return {
		identityBindingId: i.identity_binding_id,
		compositeOrderMatters: i.composite_order_matters,
		selectors: o
	};
}
function N(e, r) {
	const i = e.selectors.map((e) => {
		let i = e.sourceFieldPosition;
		if (void 0 !== i) {
			if (!Number.isSafeInteger(i) || i < 1 || void 0 === r[i - 1]) throw new Error("The occurrence_id selector position is outside the exact CSV header.");
			if (void 0 !== e.sourceFieldName && r[i - 1] !== e.sourceFieldName) throw new Error("The occurrence_id selector name and position do not match the exact CSV header.");
		} else {
			const n = r.flatMap((r, i) => r === e.sourceFieldName ? [i + 1] : []);
			if (1 !== n.length) throw new Error("The occurrence_id selector name is missing or ambiguous in the exact CSV header.");
			i = n[0];
		}
		return {
			selectorId: e.selectorId,
			sourceFieldName: r[i - 1],
			sourceFieldPosition: i
		};
	});
	return {
		identityBindingId: e.identityBindingId,
		compositeOrderMatters: e.compositeOrderMatters,
		selectors: i
	};
}
function F(e, r, i = !1) {
	const n = [];
	for (const t of e.selectors) {
		const e = r[t.sourceFieldPosition - 1];
		if (void 0 === e || !i && 0 === e.trim().length) return null;
		n.push({
			...t,
			lexicalValue: e
		});
	}
	return n.every((e) => 0 === e.lexicalValue.trim().length) ? null : {
		identityBindingId: e.identityBindingId,
		compositeOrderMatters: e.compositeOrderMatters,
		components: n
	};
}
async function A(r) {
	const c = S(r.occurrenceId), f = r.sourceKey.trim(), h = function(r) {
		return e(r) ?? "";
	}(f);
	if (0 === f.length || 0 === h.length || null !== r.analysisDate && !function(e) {
		if (!g.test(e)) return !1;
		const r = /* @__PURE__ */ new Date(`${e}T00:00:00.000Z`);
		return !Number.isNaN(r.getTime()) && r.toISOString().slice(0, 10) === e;
	}(r.analysisDate) || null === r.analysisDate && null !== r.fileId || null !== r.fileId && (!Number.isSafeInteger(r.fileId) || r.fileId < 1)) throw new Error("Diary occurrence response has an invalid local source identity.");
	const _ = p(r.profileIdentity), v = await m(r.replicationProfileTransport), w = await o(r.instrumentMappingProvenance);
	await y(v, _, w), function(e, r) {
		const i = V(r.diary_mapping);
		if (!i) throw new Error("Diary occurrence evidence requires an occurrence_id binding in its replication transport.");
		if (e.identityBindingId !== i.identityBindingId || e.compositeOrderMatters !== i.compositeOrderMatters || e.components.length !== i.selectors.length) throw new Error("Diary occurrence evidence does not match its replication transport binding.");
		const n = [...e.components], t = [...i.selectors];
		i.compositeOrderMatters || (n.sort((e, r) => e.selectorId < r.selectorId ? -1 : e.selectorId > r.selectorId ? 1 : 0), t.sort((e, r) => e.selectorId < r.selectorId ? -1 : e.selectorId > r.selectorId ? 1 : 0));
		for (const [o, a] of t.entries()) {
			const e = n[o];
			if (e.selectorId !== a.selectorId || void 0 !== a.sourceFieldName && e.sourceFieldName !== a.sourceFieldName || void 0 !== a.sourceFieldPosition && e.sourceFieldPosition !== a.sourceFieldPosition) throw new Error("Diary occurrence evidence does not match its replication transport selector coordinates.");
		}
	}(c, v);
	const D = t(w, r.instrumentValues), b = await async function(e, r) {
		const i = new Map((e.profile.response_definitions ?? []).filter((e) => "executable" === e.definition_status).map((e) => [e.variable_definition_id, e])), n = [], t = /* @__PURE__ */ new Map();
		for (const o of r) {
			const e = i.get(o.variableDefinitionId);
			if (!e) continue;
			const r = E(o, e), s = l(e, r.value);
			if (s.length > 0) throw new Error(`Diary occurrence response ${e.response_definition_id} failed runtime validation: ${s.join(" ")}`);
			t.set(o.variableDefinitionId, [...t.get(o.variableDefinitionId) ?? [], r]), n.push(a({
				definitionKind: "response",
				definitionId: e.response_definition_id,
				definitionSha256: e.response_contract_sha256,
				responseInstance: {
					variableDefinitionId: o.variableDefinitionId,
					...void 0 !== o.repeatInstanceId ? { repeatInstanceId: o.repeatInstanceId } : {},
					...void 0 !== o.repeatInstanceIndex ? { repeatInstanceIndex: o.repeatInstanceIndex } : {}
				},
				input: r.value,
				output: {
					valid: !0,
					issues: []
				}
			}));
		}
		for (const o of i.values()) if (!t.has(o.variable_definition_id)) throw new Error(`Diary occurrence response ${o.response_definition_id} has no exact mapped instrument value.`);
		return {
			results: await Promise.all(n),
			decodedByVariable: t
		};
	}(v, D), N = await async function(e, r, i) {
		const t = [], o = s(e.profile);
		for (const s of e.profile.rule_definitions ?? []) {
			if ("executable" !== s.definition_status) continue;
			if ("repeat" === s.rule_kind) {
				const e = d(s), r = o.filter((e) => e.repeatRule?.rule_definition_id === s.rule_definition_id);
				if (0 === r.length) throw new Error(`Diary occurrence repeat rule ${s.rule_definition_id} affects no executable response.`);
				for (const o of r) {
					const r = i.filter((e) => e.variableDefinitionId === o.response.variable_definition_id).map((r) => {
						if ("id" === e.instanceCoordinateKind) {
							if (void 0 === r.repeatInstanceId || void 0 !== r.repeatInstanceIndex || r.repeatInstanceId !== r.repeatInstanceId.trim() || 0 === r.repeatInstanceId.length || new TextEncoder().encode(r.repeatInstanceId).length > 256) throw new Error("Diary occurrence repeat rule requires exact repeat-instance ID coordinates.");
							return { repeat_instance_id: r.repeatInstanceId };
						}
						if (void 0 === r.repeatInstanceIndex || void 0 !== r.repeatInstanceId || !Number.isSafeInteger(r.repeatInstanceIndex) || r.repeatInstanceIndex < 1) throw new Error("Diary occurrence repeat rule requires exact repeat-instance index coordinates.");
						return { repeat_instance_index: r.repeatInstanceIndex };
					}), c = r.map(n);
					if (c.length !== new Set(c).size) throw new Error("Diary occurrence repeat rule instance coordinates must be unique.");
					const d = r.length >= e.minimumOccurrences && r.length <= e.maximumOccurrences;
					if (!d) throw new Error(`Diary occurrence repeat rule ${s.rule_definition_id} rejected the mapped response cardinality.`);
					t.push(a({
						definitionKind: "rule",
						definitionId: s.rule_definition_id,
						definitionSha256: s.expression_sha256,
						input: {
							target_variable_definition_id: o.response.variable_definition_id,
							occurrence_identity_strategy: e.occurrenceIdentityStrategy,
							instance_coordinate_kind: e.instanceCoordinateKind,
							instance_coordinates: r
						},
						output: d
					}));
				}
				continue;
			}
			const e = {}, c = {};
			for (const i of [...s.referenced_variable_definition_ids ?? []].sort()) {
				const n = r.get(i) ?? [];
				if (1 !== n.length) throw new Error(`Diary occurrence rule ${s.rule_definition_id} requires exactly one mapped value for ${i}.`);
				const t = n[0];
				if (t.missing) c[i] = { present: !1 };
				else {
					if (!M(t.value)) throw new Error(`Diary occurrence rule ${s.rule_definition_id} requires scalar inputs.`);
					e[i] = t.value, c[i] = {
						present: !0,
						value: t.value
					};
				}
			}
			const l = u(s, e);
			if (!l.ok) throw new Error(`Diary occurrence rule ${s.rule_definition_id} is unavailable: ${l.error ?? "evaluation failed"}.`);
			if (!0 !== l.value) throw new Error(`Diary occurrence rule ${s.rule_definition_id} rejected the mapped response values.`);
			t.push(a({
				definitionKind: "rule",
				definitionId: s.rule_definition_id,
				definitionSha256: s.expression_sha256,
				input: c,
				output: !0
			}));
		}
		return Promise.all(t);
	}(v, b.decodedByVariable, D), F = r.createdAt ?? (/* @__PURE__ */ new Date()).toISOString();
	if (!function(e) {
		const r = new Date(e);
		return !Number.isNaN(r.getTime()) && r.toISOString() === e;
	}(F)) throw new Error("Diary occurrence response has an invalid storage timestamp.");
	const A = await x(c), O = {
		contractVersion: I,
		occurrenceIdentitySha256: A,
		occurrenceId: c,
		sourceKey: f,
		normalizedSourceKey: h,
		analysisDate: r.analysisDate,
		profileIdentity: _,
		replicationProfileTransport: v,
		instrumentMappingProvenance: w,
		instrumentValues: D,
		responseRuntimeResults: b.results,
		ruleRuntimeResults: N
	}, K = await i(n(P(O)));
	return {
		...O,
		recordSha256: K,
		fileId: r.fileId,
		createdAt: F
	};
}
async function O(e) {
	if (null === e || "object" != typeof e || Array.isArray(e) || !b(e, v)) throw new Error("Diary occurrence response failed integrity verification.");
	const r = e;
	if ("diary_occurrence_record_v3" !== r.contractVersion || "string" != typeof r.recordSha256 || !_.test(r.recordSha256) || "string" != typeof r.occurrenceIdentitySha256 || !_.test(r.occurrenceIdentitySha256) || "string" != typeof r.sourceKey || "string" != typeof r.normalizedSourceKey || null !== r.analysisDate && "string" != typeof r.analysisDate || null !== r.fileId && (!Number.isSafeInteger(r.fileId) || r.fileId < 1) || "string" != typeof r.createdAt || !Array.isArray(r.instrumentValues) || !Array.isArray(r.responseRuntimeResults) || !Array.isArray(r.ruleRuntimeResults)) throw new Error("Diary occurrence response failed integrity verification.");
	const i = await A({
		occurrenceId: S(r.occurrenceId),
		sourceKey: r.sourceKey,
		analysisDate: r.analysisDate,
		fileId: r.fileId,
		profileIdentity: p(r.profileIdentity),
		replicationProfileTransport: r.replicationProfileTransport,
		instrumentMappingProvenance: r.instrumentMappingProvenance,
		instrumentValues: r.instrumentValues,
		createdAt: r.createdAt
	});
	if (r.normalizedSourceKey !== i.normalizedSourceKey || r.occurrenceIdentitySha256 !== i.occurrenceIdentitySha256 || r.recordSha256 !== i.recordSha256 || n(e) !== n(i)) throw new Error("Diary occurrence response failed integrity verification.");
	return i;
}
async function K(e) {
	const r = await O(e), i = new Map((r.replicationProfileTransport.profile.response_definitions ?? []).filter((e) => "executable" === e.definition_status).map((e) => [e.variable_definition_id, e])), n = r.instrumentValues.flatMap((e) => {
		const r = i.get(e.variableDefinitionId);
		return r ? [{
			variableDefinitionId: e.variableDefinitionId,
			...void 0 !== e.repeatInstanceId ? { repeatInstanceId: e.repeatInstanceId } : {},
			...void 0 !== e.repeatInstanceIndex ? { repeatInstanceIndex: e.repeatInstanceIndex } : {},
			value: E(e, r).value
		}] : [];
	}), t = n.map(f);
	if (t.length !== new Set(t).size || [...i.keys()].some((e) => !n.some((r) => r.variableDefinitionId === e))) throw new Error("Diary response instances are missing or duplicate after exact rehydration.");
	return n;
}
async function R(e, r) {
	if (!Number.isSafeInteger(e) || e < 1) throw new Error("Diary occurrence file identity is invalid.");
	const i = await r.diaryOccurrences.where("fileId").equals(e).toArray();
	return (await Promise.all(i.map(O))).sort((e, r) => (e.analysisDate ?? "").localeCompare(r.analysisDate ?? "") || e.occurrenceIdentitySha256.localeCompare(r.occurrenceIdentitySha256) || e.recordSha256.localeCompare(r.recordSha256));
}
export { I as DIARY_OCCURRENCE_RECORD_CONTRACT_VERSION, h as assertDiaryOccurrenceMatchesCompatibilityEntry, F as captureDiaryOccurrenceIdentity, P as diaryOccurrenceContentPayload, x as diaryOccurrenceIdentitySha256, K as diaryOccurrenceRespondentValues, V as diaryOccurrenceSourceBinding, R as listDiaryOccurrenceRecordsForFile, A as prepareDiaryOccurrenceRecord, N as resolveDiaryOccurrenceSourceBinding, O as verifyDiaryOccurrenceRecord };
