import { s as e } from "./ggir-results-types-WB8axvb-.js";
import { a as i, s as r } from "./content-hash-B-at0sOp.js";
import { t as n } from "./audit-hash-BdWutkgc.js";
import { t as o } from "./local-provenance-CmBLpAIQ.js";
import { n as t, r as s } from "./diary-source-adapter-Dd33a6hP.js";
import { DIARY_INSTRUMENT_VERSIONS as a, canonicalizeDiaryProfileVariableDefinitions as d, i as c, n as _, r as l, t as u, verifyDiaryInstrumentMappingProvenance as p } from "./diary-instrument-mapping-DegQIuRJ.js";
const f = /^([01]\d|2[0-3]):[0-5]\d$/, m = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, v = "chronicle-diary-rule-json", g = 2 ** 53 - 1, h = /^[0-9a-f]{64}$/u, y = [
	"target_variable_definition_ids",
	"target_form_element_definition_ids",
	"referenced_form_element_definition_ids",
	"effect",
	"action",
	"message",
	"severity",
	"missing_data_policy",
	"output_unit",
	"rounding_rule",
	"invalid_domain_policy",
	"minimum_occurrences",
	"maximum_occurrences",
	"occurrence_identity_strategy"
], b = [
	"target_form_element_definition_ids",
	"target_variable_definition_ids",
	"diary_entry_timepoint",
	"trigger_anchor",
	"trigger_variable_definition_id",
	"trigger_offset_minutes",
	"occurrence_count",
	"reference_period",
	"reference_start_anchor",
	"reference_end_anchor",
	"day_boundary_rule",
	"diary_day_assignment",
	"timezone_rule",
	"timezone_mode",
	"timezone_name",
	"utc_offset_minutes",
	"dst_gap_policy",
	"dst_fold_policy",
	"completion_window_start",
	"completion_window_end"
];
function w(e) {
	if (0 === e.variableDefinitionId.trim().length || e.variableDefinitionId !== e.variableDefinitionId.trim() || void 0 !== e.repeatInstanceId && void 0 !== e.repeatInstanceIndex || void 0 !== e.repeatInstanceId && (0 === e.repeatInstanceId.trim().length || e.repeatInstanceId !== e.repeatInstanceId.trim()) || void 0 !== e.repeatInstanceIndex && (!Number.isSafeInteger(e.repeatInstanceIndex) || e.repeatInstanceIndex < 1)) throw new Error("Diary respondent instance coordinate is invalid.");
	return n({
		variable_definition_id: e.variableDefinitionId,
		...void 0 !== e.repeatInstanceId ? { repeat_instance_id: e.repeatInstanceId } : {},
		...void 0 !== e.repeatInstanceIndex ? { repeat_instance_index: e.repeatInstanceIndex } : {}
	});
}
const x = Symbol("missing-diary-form-value");
function S(e) {
	return null !== e && "object" == typeof e && !Array.isArray(e);
}
function I(e, i) {
	return Object.keys(e).length === i.length && i.every((i) => Object.hasOwn(e, i));
}
function $(e) {
	return Array.isArray(e) ? e.length > 0 : null != e;
}
function E(e) {
	return null === e || "boolean" == typeof e || "string" == typeof e || "number" == typeof e && Number.isFinite(e) && (!Number.isInteger(e) || Math.abs(e) <= g);
}
function R(e) {
	return m.test(e) && !e.startsWith("0000") && !Number.isNaN(Date.parse(`${e}T00:00:00Z`)) && (/* @__PURE__ */ new Date(`${e}T00:00:00Z`)).toISOString().slice(0, 10) === e;
}
function M(e) {
	if (null == e) return null;
	if ("string" == typeof e) {
		for (const i of e) {
			const e = i.codePointAt(0);
			if (e >= 55296 && e <= 57343) throw new TypeError("Runtime result strings must contain only Unicode scalar values.");
		}
		return e;
	}
	if ("boolean" == typeof e) return e;
	if ("number" == typeof e) {
		if (!Number.isFinite(e) || Number.isInteger(e) && !Number.isSafeInteger(e)) throw new TypeError("Runtime result numbers must be finite JSON numbers.");
		return e;
	}
	if (Array.isArray(e)) return e.map(M);
	if ("object" == typeof e) {
		const i = Object.getPrototypeOf(e);
		if (i !== Object.prototype && null !== i) throw new TypeError("Runtime result values must be plain JSON objects.");
		return Object.fromEntries(Object.entries(e).filter(([, e]) => null != e).map(([e, i]) => [e, M(i)]));
	}
	throw new TypeError(`Unsupported runtime result value: ${typeof e}.`);
}
async function D(e) {
	if (void 0 === e.input || void 0 === e.output) throw new TypeError("Runtime result input and output must be explicit JSON values.");
	if (!e.definitionId.trim()) throw new Error("Runtime result definition ID must be nonblank.");
	if (!h.test(e.definitionSha256)) throw new Error("Runtime result definition digest must be a lowercase SHA-256 hex value.");
	let r;
	if ("response" === e.definitionKind) {
		if (void 0 === e.responseInstance || 0 === e.responseInstance.variableDefinitionId.trim().length || e.responseInstance.variableDefinitionId !== e.responseInstance.variableDefinitionId.trim() || void 0 !== e.responseInstance.repeatInstanceId && void 0 !== e.responseInstance.repeatInstanceIndex || void 0 !== e.responseInstance.repeatInstanceId && (0 === e.responseInstance.repeatInstanceId.trim().length || e.responseInstance.repeatInstanceId !== e.responseInstance.repeatInstanceId.trim()) || void 0 !== e.responseInstance.repeatInstanceIndex && (!Number.isSafeInteger(e.responseInstance.repeatInstanceIndex) || e.responseInstance.repeatInstanceIndex < 1)) throw new TypeError("Response runtime result requires one valid respondent instance coordinate.");
		if (r = {
			variable_definition_id: e.responseInstance.variableDefinitionId,
			...void 0 !== e.responseInstance.repeatInstanceId ? { repeat_instance_id: e.responseInstance.repeatInstanceId } : {},
			...void 0 !== e.responseInstance.repeatInstanceIndex ? { repeat_instance_index: e.responseInstance.repeatInstanceIndex } : {}
		}, !(S(e.output) && I(e.output, ["valid", "issues"]) && "boolean" == typeof e.output.valid && Array.isArray(e.output.issues) && e.output.issues.every((e) => "string" == typeof e && j.has(e)))) throw new TypeError("Response runtime output must be exactly {valid:boolean,issues:string[]}.");
	} else {
		if (void 0 !== e.responseInstance) throw new TypeError("Rule and schedule runtime results cannot carry a respondent instance.");
		if ("boolean" != typeof e.output) throw new TypeError("Rule and schedule runtime output must be boolean.");
	}
	const o = M(e.input), t = M(e.output), s = await i(n(o)), a = {
		contract_version: "diary_replication_runtime_v2",
		definition_kind: e.definitionKind,
		definition_id: e.definitionId,
		definition_sha256: e.definitionSha256,
		...void 0 === r ? {} : { response_instance: r },
		input_sha256: s,
		output: t
	};
	return {
		...a,
		result_sha256: await i(n(a))
	};
}
const k = /* @__PURE__ */ new Set([
	"string",
	"integer",
	"number",
	"boolean",
	"array",
	"object"
]), A = {
	text: /* @__PURE__ */ new Set(["string"]),
	textarea: /* @__PURE__ */ new Set(["string"]),
	number: /* @__PURE__ */ new Set(["integer", "number"]),
	checkbox: /* @__PURE__ */ new Set(["boolean"]),
	single_select: /* @__PURE__ */ new Set(["string"]),
	multi_select: /* @__PURE__ */ new Set(["array"]),
	date: /* @__PURE__ */ new Set(["string"]),
	time: /* @__PURE__ */ new Set(["string"]),
	datetime: /* @__PURE__ */ new Set(["string"]),
	json: /* @__PURE__ */ new Set(["array", "object"]),
	hidden: /* @__PURE__ */ new Set([
		"string",
		"integer",
		"number",
		"boolean",
		"array",
		"object"
	]),
	derived: /* @__PURE__ */ new Set([
		"string",
		"integer",
		"number",
		"boolean",
		"array",
		"object"
	])
}, N = new Set(Object.keys(A)), j = /* @__PURE__ */ new Set([
	"required",
	"type",
	"format",
	"option",
	"minimum",
	"maximum"
]);
function O(e) {
	if ("executable" !== e.definition_status) throw new Error("Response definition is not executable.");
	if ("" === e.evidence_locator.trim() || "" === e.evidence_characterization.trim()) throw new Error("Executable response requires nonblank evidence.");
	if (!e.response_contract_json || !e.response_contract_sha256 || !h.test(e.response_contract_sha256)) throw new Error("Executable response requires a digest-bound response runtime contract.");
	let i;
	try {
		i = JSON.parse(e.response_contract_json);
	} catch {
		throw new Error("Response runtime contract is not valid JSON.");
	}
	if (r(n(i)) !== e.response_contract_sha256) throw new Error("Response runtime contract digest does not match its canonical JSON.");
	if (!S(i) || !S(i.runtime_contract)) throw new Error("Response runtime contract requires a runtime_contract object.");
	const o = i.runtime_contract;
	if (!I(o, [
		"language",
		"version",
		"value_kind",
		"control_kind"
	])) throw new Error("Response runtime_contract contains unsupported fields.");
	if ("chronicle-diary-response-json" !== o.language || "1" !== o.version) throw new Error("Response runtime contract language or version is unsupported.");
	const t = o.value_kind, s = o.control_kind;
	if ("string" != typeof t || "string" != typeof s || !k.has(t) || !N.has(s)) throw new Error("Response runtime contract contains an unsupported value or control kind.");
	const a = t, d = s;
	if (!A[d].has(a)) throw new Error("Response runtime contract value and control kinds are incompatible.");
	if (e.value_type !== a || e.response_control !== d) throw new Error("Response runtime contract must match top-level value_type and response_control.");
	if (void 0 === e.required || void 0 === e.missing_value_codes) throw new Error("Executable response requires explicit requiredness and missing-value codes.");
	if ((void 0 !== e.minimum || void 0 !== e.maximum) && "integer" !== a && "number" !== a) throw new Error("Executable response numeric bounds require an integer or number value kind.");
	if (["single_select", "multi_select"].includes(d) && !e.response_options?.length) throw new Error("Executable selection response requires released response options.");
	if ((e.response_options ?? []).some((e) => "executable" !== e.definition_status || void 0 === e.stored_value_lexical || void 0 === e.stored_value_sha256 || r(e.stored_value_lexical) !== e.stored_value_sha256 || void 0 === e.reuse_decision_reference)) throw new Error("Executable response options require released stored values.");
	if ((e.response_options ?? []).some((e) => void 0 !== e.display_label && (void 0 === e.display_label_sha256 || r(e.display_label) !== e.display_label_sha256))) throw new Error("Executable response option label digest does not match released text.");
	if ((e.response_options ?? []).some((e) => void 0 !== e.null_semantics || void 0 !== e.score_value_lexical)) throw new Error("Executable response options cannot contain unimplemented null or score semantics.");
	return {
		valueKind: a,
		controlKind: d
	};
}
function q(e, i, r, n, o) {
	if (n > 64) throw new Error(`Rule expression exceeds ${String(64)} nested nodes.`);
	if (o.remaining -= 1, o.remaining < 0) throw new Error(`Rule expression exceeds ${String(128)} nodes.`);
	if (!S(e) || "string" != typeof e.op) throw new Error("Rule expression nodes must be JSON objects with an op.");
	switch (e.op) {
		case "literal":
			if (!I(e, ["op", "value"]) || !E(e.value)) throw new Error("literal requires exactly one finite JSON scalar value.");
			return {
				op: e.op,
				value: e.value
			};
		case "variable":
			if (!I(e, ["op", "variable_id"]) || "string" != typeof e.variable_id || !i.has(e.variable_id)) throw new Error("variable requires one declared referenced variable_id.");
			return r.add(e.variable_id), {
				op: e.op,
				variableId: e.variable_id
			};
		case "is_missing":
		case "not":
			if (!I(e, ["op", "value"])) throw new Error(`${e.op} requires exactly one value expression.`);
			return {
				op: e.op,
				value: q(e.value, i, r, n + 1, o)
			};
		case "all":
		case "any":
			if (!I(e, ["op", "values"]) || !Array.isArray(e.values) || 0 === e.values.length) throw new Error(`${e.op} requires exactly one nonempty values array.`);
			return {
				op: e.op,
				values: e.values.map((e) => q(e, i, r, n + 1, o))
			};
		case "eq":
		case "ne":
		case "lt":
		case "lte":
		case "gt":
		case "gte":
			if (!I(e, [
				"op",
				"left",
				"right"
			])) throw new Error(`${e.op} requires exactly left and right expressions.`);
			return {
				op: e.op,
				left: q(e.left, i, r, n + 1, o),
				right: q(e.right, i, r, n + 1, o)
			};
		case "in":
			if (!I(e, [
				"op",
				"value",
				"values"
			]) || !Array.isArray(e.values) || 0 === e.values.length || e.values.length > 256 || !e.values.every(E)) throw new Error("in requires one value expression and a JSON-scalar values array.");
			return {
				op: e.op,
				value: q(e.value, i, r, n + 1, o),
				values: e.values
			};
		default: throw new Error(`Unsupported rule operator: ${e.op}`);
	}
}
function P(e) {
	if ("executable" !== e.definition_status) throw new Error("Rule definition is not executable.");
	if ("" === e.evidence_locator.trim() || "" === e.evidence_characterization.trim()) throw new Error("Executable rule requires nonblank evidence.");
	if ("validation" !== e.rule_kind) throw new Error("Rule runtime v1 supports only validation predicates.");
	if ("protocol" !== e.scope) throw new Error("Rule runtime v1 requires explicit protocol scope.");
	const i = y.find((i) => $(e[i]));
	if (void 0 !== i) throw new Error(`Rule runtime v1 does not support populated ${i}.`);
	if (e.expression_language !== v || "1" !== e.expression_version) throw new Error(`Unsupported rule dialect ${e.expression_language}@${e.expression_version}.`);
	let o;
	try {
		o = JSON.parse(e.expression_json);
	} catch {
		throw new Error("Rule expression is not valid JSON.");
	}
	if (!h.test(e.expression_sha256) || r(n(o)) !== e.expression_sha256) throw new Error("Rule expression digest does not match its canonical JSON.");
	const t = new Set(e.referenced_variable_definition_ids ?? []), s = /* @__PURE__ */ new Set(), a = q(o, t, s, 0, { remaining: 128 });
	if (s.size !== t.size) throw new Error("Rule runtime v1 requires every declared referenced variable to be used.");
	return a;
}
function C(e) {
	if ("executable" !== e.definition_status || "repeat" !== e.rule_kind) throw new Error("Repeat rule definition is not executable.");
	if ("" === e.evidence_locator.trim() || "" === e.evidence_characterization.trim()) throw new Error("Executable repeat rule requires nonblank evidence.");
	if (!Number.isSafeInteger(e.minimum_occurrences) || !Number.isSafeInteger(e.maximum_occurrences) || e.minimum_occurrences < 0 || e.maximum_occurrences < e.minimum_occurrences || !e.occurrence_identity_strategy?.trim() || e.occurrence_identity_strategy !== e.occurrence_identity_strategy.trim()) throw new Error("Executable repeat rule requires exact cardinality and occurrence identity.");
	if (0 === (e.target_variable_definition_ids?.length ?? 0) && 0 === (e.target_form_element_definition_ids?.length ?? 0)) throw new Error("Executable repeat rule requires an exact form or variable target.");
	const i = [
		"referenced_variable_definition_ids",
		"referenced_form_element_definition_ids",
		"effect",
		"action",
		"message",
		"severity",
		"missing_data_policy",
		"output_unit",
		"rounding_rule",
		"invalid_domain_policy"
	].find((i) => $(e[i]));
	if (void 0 !== i) throw new Error(`Repeat rule runtime v1 does not support populated ${i}.`);
	let o;
	try {
		o = JSON.parse(e.expression_json);
	} catch {
		throw new Error("Repeat rule expression is not valid JSON.");
	}
	const t = {
		op: "repeat",
		minimum_occurrences: e.minimum_occurrences,
		maximum_occurrences: e.maximum_occurrences,
		occurrence_identity_strategy: e.occurrence_identity_strategy,
		instance_coordinate_kind: S(o) ? o.instance_coordinate_kind : void 0
	};
	if (e.expression_language !== v || "1" !== e.expression_version || !h.test(e.expression_sha256) || !S(o) || !["id", "index"].includes(String(o.instance_coordinate_kind)) || n(o) !== n(t) || r(n(o)) !== e.expression_sha256) throw new Error("Repeat rule expression does not match its exact runtime contract.");
	return {
		minimumOccurrences: e.minimum_occurrences,
		maximumOccurrences: e.maximum_occurrences,
		occurrenceIdentityStrategy: e.occurrence_identity_strategy,
		instanceCoordinateKind: o.instance_coordinate_kind
	};
}
function F(e, i) {
	return typeof e == typeof i && e === i;
}
function T(e, i) {
	switch (e.op) {
		case "literal": return e.value;
		case "variable": {
			const r = i[e.variableId];
			if (void 0 === r) return x;
			if (!E(r)) throw new Error("Rule variables must contain finite JSON scalars.");
			return r;
		}
		case "is_missing": {
			const r = T(e.value, i);
			return r === x || null === r;
		}
		case "not": {
			const r = T(e.value, i);
			if ("boolean" != typeof r) throw new Error("not requires a boolean operand.");
			return !r;
		}
		case "all": {
			const r = e.values.map((e) => T(e, i));
			if (!r.every((e) => "boolean" == typeof e)) throw new Error("all requires boolean operands.");
			return r.every(Boolean);
		}
		case "any": {
			const r = e.values.map((e) => T(e, i));
			if (!r.every((e) => "boolean" == typeof e)) throw new Error("any requires boolean operands.");
			return r.some(Boolean);
		}
		case "eq":
		case "ne": {
			const r = T(e.left, i), n = T(e.right, i);
			if (r === x || n === x) throw new Error(`${e.op} cannot compare a missing operand.`);
			const o = F(r, n);
			return "eq" === e.op ? o : !o;
		}
		case "lt":
		case "lte":
		case "gt":
		case "gte": {
			const r = T(e.left, i), n = T(e.right, i);
			if (r === x || n === x || typeof r != typeof n || "number" != typeof r && "string" != typeof r || "number" != typeof n && "string" != typeof n) throw new Error(`${e.op} requires two finite numbers or two strings.`);
			if ("number" == typeof r && "number" == typeof n) return "lt" === e.op ? r < n : "lte" === e.op ? r <= n : "gt" === e.op ? r > n : r >= n;
			const o = r, t = n;
			return "lt" === e.op ? o < t : "lte" === e.op ? o <= t : "gt" === e.op ? o > t : o >= t;
		}
		case "in": {
			const r = T(e.value, i);
			if (r === x) throw new Error("in cannot compare a missing operand.");
			return e.values.some((e) => F(r, e));
		}
	}
}
function z(e, i) {
	try {
		const r = T(P(e), i);
		return "boolean" != typeof r ? {
			ok: !1,
			error: "Rule root must evaluate to a boolean."
		} : {
			ok: !0,
			value: r
		};
	} catch (r) {
		return {
			ok: !1,
			error: r instanceof Error ? r.message : "Rule evaluation failed."
		};
	}
}
function V(e) {
	return void 0 === e.semantic_role ? "item" === e.element_kind : "form_input" === e.semantic_role;
}
function J(e) {
	const i = e.form_elements ?? [], r = i.filter(V), n = new Map(i.map((e) => [e.form_element_definition_id, e])), o = e.rule_definitions ?? [], t = new Map(o.map((e) => [e.rule_definition_id, e])), s = o.filter((e) => "executable" === e.definition_status && "repeat" === e.rule_kind), a = /* @__PURE__ */ new Set(), d = (e.response_definitions ?? []).filter((e) => "executable" === e.definition_status).map((e) => {
		const i = r.filter((i) => i.variable_definition_id === e.variable_definition_id && "executable" === i.definition_status);
		if (1 !== i.length) throw new Error("Executable response must bind to exactly one executable respondent form input.");
		const o = i[0], d = [], c = /* @__PURE__ */ new Set();
		let _ = o;
		for (; void 0 !== _;) {
			if (c.has(_.form_element_definition_id)) throw new Error("Diary form hierarchy contains a cycle.");
			if (c.add(_.form_element_definition_id), d.push(_), void 0 === _.parent_form_element_definition_id) break;
			if (_ = n.get(_.parent_form_element_definition_id), void 0 === _) throw new Error("Diary form hierarchy references an unavailable parent.");
		}
		const l = new Set(d.map((e) => e.form_element_definition_id)), u = (i) => (i.target_variable_definition_ids ?? []).includes(e.variable_definition_id) || (i.target_form_element_definition_ids ?? []).some((e) => l.has(e)), p = /* @__PURE__ */ new Map();
		for (const r of s) u(r) && p.set(r.rule_definition_id, r);
		for (const r of d.flatMap((e) => void 0 === e.repeat_rule_definition_id ? [] : [e.repeat_rule_definition_id])) {
			const e = t.get(r);
			if (!e || "repeat" !== e.rule_kind || !u(e)) throw new Error("Diary repeated form control references a mismatched repeat rule.");
			p.set(e.rule_definition_id, e);
		}
		if (p.size > 1) throw new Error("Diary respondent control has ambiguous repeat rules.");
		const f = p.values().next().value;
		return void 0 !== f && (C(f), a.add(f.rule_definition_id)), {
			form: o,
			response: e,
			...void 0 === f ? {} : { repeatRule: f }
		};
	}), c = s.find((e) => !a.has(e.rule_definition_id));
	if (void 0 !== c) throw new Error(`Executable repeat rule ${c.rule_definition_id} affects no executable respondent response.`);
	return d;
}
function K(e, i) {
	const r = O(e), n = "string" == typeof i ? i : null == i ? "" : void 0;
	if (null == i || "" === n || "multi_select" === r.controlKind && Array.isArray(i) && 0 === i.length || void 0 !== n && (e.missing_value_codes ?? []).includes(n)) return !0 === e.required ? ["required"] : [];
	const o = "string" === r.valueKind ? "string" == typeof i : "integer" === r.valueKind ? "number" == typeof i && Number.isSafeInteger(i) : "number" === r.valueKind ? "number" == typeof i && E(i) : "boolean" === r.valueKind ? "boolean" == typeof i : "array" === r.valueKind ? Array.isArray(i) && i.every(E) : S(i) && Object.values(i).every(E), t = [];
	o || t.push("type"), "string" != typeof i || function(e, i) {
		if ("date" === e) return R(i);
		if ("time" === e) return f.test(i);
		if ("datetime" !== e) return !0;
		const r = i.split("T");
		return 2 === r.length && R(r[0]) && f.test(r[1]);
	}(r.controlKind, i) || t.push("format"), o && "number" == typeof i && (void 0 !== e.minimum && i < e.minimum && t.push("minimum"), void 0 !== e.maximum && i > e.maximum && t.push("maximum"));
	const s = e.response_options ?? [], a = Array.isArray(i) ? i : [i];
	return s.length > 0 && (a.some((e) => "string" != typeof e || !s.some((i) => i.stored_value_lexical === e)) || "multi_select" === r.controlKind && new Set(a).size !== a.length) && t.push("option"), t;
}
var L = e({
	DIARY_CANONICAL_WRITE_SCOPES: () => W,
	DIARY_RECORD_SEMANTICS: () => Z,
	DIARY_REPLICATION_CAPABILITIES: () => G,
	DIARY_REPLICATION_IMPORT_CONTRACT_VERSION: () => H,
	DIARY_REPLICATION_MULTIPART_FIELD_NAME: () => U,
	DIARY_REPLICATION_PROFILE_CONTRACT_VERSION: () => B,
	MAX_DIARY_REPLICATION_PROFILE_BYTES: () => Y,
	appendDiaryReplicationProfileToFormData: () => Ge,
	createDiaryReplicationProfileDraft: () => qe,
	createDiarySourceMappingDraft: () => Ce,
	diaryReplicationProfileIdentity: () => Ze,
	prepareDiaryReplicationProfile: () => Be,
	reviewedDiarySourceMappings: () => Pe,
	summarizeDiaryReplicationProfileSupport: () => Je,
	validateDiaryReplicationProfileDraft: () => Ve,
	verifyDiaryReplicationProfileIdentity: () => We
});
const H = "diary_replication_import_v1", B = "diary_replication_profile_v1", U = "replication_profile", Y = 1048576, Z = [
	"complete_submission",
	"sparse_patch",
	"legacy_ambiguous"
], W = [
	"mapped_slots_only",
	"full_canonical_record",
	"unknown"
], G = [
	"form_structure",
	"item_wording",
	"response_options",
	"administration_schedule",
	"branching",
	"validation",
	"scoring",
	"record_identity",
	"import_profile",
	"language_and_licensing"
], X = new Map(a.map((e) => [e.id, e])), Q = new Map(u.sourceMethodVariants.map((e) => [e.versionDefinitionId, e])), ee = /* @__PURE__ */ new Map();
for (const Xe of u.diaryItems) {
	const e = ee.get(Xe.versionDefinitionId);
	e ? e.add(Xe.id) : ee.set(Xe.versionDefinitionId, /* @__PURE__ */ new Set([Xe.id]));
}
function ie(e) {
	const i = [], r = /* @__PURE__ */ new Set();
	let n = e;
	for (; null !== n;) {
		if (r.has(n)) throw new Error(`Reviewed diary host lineage contains a cycle at ${n}.`);
		if (r.add(n), !X.has(n)) break;
		i.unshift(n);
		const e = Q.get(n)?.hostVersionDefinitionId ?? null;
		n = null !== e && X.has(e) ? e : null;
	}
	return i;
}
const re = /^[0-9a-f]{64}$/, ne = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,255}$/, oe = new Set(s.map((e) => e.key)), te = {
	boolean: ["boolean_field"],
	categorical: ["categorical_field", "ordinal_field"],
	count: ["count_field"],
	date_field: ["date_field"],
	datetime: ["datetime_field"],
	duration: ["duration_field"],
	free_text: ["free_text_field"],
	identifier: ["identifier_field"],
	numeric: ["quantitative_field"],
	percentage: ["quantitative_field"],
	temporal_point: ["time_field"],
	timezone: ["timezone_field"],
	unit: ["categorical_field"]
}, se = new Map(s.map((e) => [e.key, new Set((e.valueKind ?? "").split(",").flatMap((e) => te[e] ?? []))])), ae = /* @__PURE__ */ new Set([
	"draft",
	"reviewed",
	"executable",
	"rejected"
]), de = /* @__PURE__ */ new Set([
	"tabular_row",
	"event_row",
	"keyed_object_record",
	"unknown"
]), ce = /* @__PURE__ */ new Set([
	"occurrences_across_rows",
	"occurrences_across_column_blocks",
	"unknown"
]), _e = /* @__PURE__ */ new Set([
	"fields_in_columns",
	"fields_in_transposed_rows",
	"fields_in_transposed_blocks",
	"unknown"
]), le = /* @__PURE__ */ new Set(["browser", "server"]), ue = /* @__PURE__ */ new Set([
	"events_across_columns",
	"events_across_rows",
	"none",
	"unknown"
]), pe = /* @__PURE__ */ new Set([
	"diary_entry",
	"repeated_episode",
	"questionnaire_response"
]), fe = /* @__PURE__ */ new Set([
	"new_source_record",
	"source_revision",
	"unknown"
]), me = /* @__PURE__ */ new Set([
	"source_record_id",
	"participant_id",
	"study_id",
	"diary_day",
	"occurrence_id",
	"administration_phase",
	"sleep_window_id",
	"event_time",
	"created_at",
	"updated_at",
	"timezone"
]), ve = /* @__PURE__ */ new Set([
	"direct_record",
	"keyed_object_record",
	"chronological_event_pairing",
	"method_reference"
]), ge = /* @__PURE__ */ new Set([
	"profile",
	"auto_detect",
	"user_confirmed"
]), he = /* @__PURE__ */ new Set([
	"manual",
	"computed",
	"device",
	"system"
]), ye = /* @__PURE__ */ new Set([
	"time_field",
	"date_field",
	"datetime_field",
	"duration_field",
	"quantitative_field",
	"count_field",
	"ordinal_field",
	"categorical_field",
	"boolean_field",
	"timezone_field",
	"free_text_field",
	"identifier_field"
]);
function be(e) {
	return JSON.parse(JSON.stringify(e));
}
function we(e) {
	const i = X.get(e);
	if (!i) throw new Error("Choose a version from the generated reviewed diary catalog.");
	return i;
}
function xe(e, ...[i, r, n, o]) {
	e.push({
		severity: i,
		code: r,
		path: n,
		message: o
	});
}
function Se(e, i, r, n) {
	if (null === i || "object" != typeof i || Array.isArray(i)) return;
	const o = new Set(r);
	for (const t of Object.keys(i)) o.has(t) || xe(e, "error", "unknown_field", `${n}.${t}`, "Unknown fields are not part of the generated diary replication contract.");
}
function Ie(e, i, r, n) {
	return "string" == typeof i && i.trim().length > 0 || (xe(e, "error", "required", r, `${n} is required.`), !1);
}
function $e(e, i, r, n) {
	return !("string" != typeof i || !ne.test(i)) || (xe(e, "error", "invalid_id", r, `${n} must start with a letter or number and use only letters, numbers, period, underscore, colon, or hyphen.`), !1);
}
function Ee(e, i, r, n) {
	null == i || "" === i || re.test(i) || xe(e, "error", "invalid_sha256", r, `${n} must be a lowercase SHA-256 digest.`);
}
function Re(e, i, r) {
	Ie(e, i.evidence_locator, `${r}.evidence_locator`, "An exact evidence locator"), Ie(e, i.evidence_characterization, `${r}.evidence_characterization`, "An evidence characterization");
}
function Me(e, i, r) {
	ae.has(i) || xe(e, "error", "invalid_definition_status", r, "Definition status is unsupported.");
}
function De(e, i, r, n) {
	(i.some((e) => 0 === e.trim().length) || new Set(i).size !== i.length) && xe(e, "error", "duplicate_or_blank", r, `${n} must be unique and nonblank.`);
}
function ke(e, i, r, n) {
	void 0 !== i && (!Number.isFinite(i) || Number.isInteger(i) && !Number.isSafeInteger(i)) && xe(e, "error", "invalid_json_number", r, `${n} must be a finite JSON number and integer values must be exactly representable in IEEE-754.`);
}
function Ae(e, i, r, n) {
	if (Ie(e, i, r, n)) try {
		return JSON.parse(i);
	} catch {
		xe(e, "error", "invalid_json", r, `${n} must contain valid JSON.`);
		return;
	}
}
function Ne(e, ...[i, r, n, o]) {
	i && (De(e, i, n, o), i.forEach((i, t) => {
		r.has(i) || xe(e, "error", "unknown_reference", `${n}[${String(t)}]`, `${o} names an unknown definition.`);
	}));
}
function je(e, ...[i, r, n, o, t]) {
	Ee(e, r, `${o}_sha256`, `${t} digest`), void 0 !== i && "" !== i && Ie(e, n, `${o.replace(/\.[^.]+$/, "")}.reuse_decision_reference`, "A version-specific reuse decision reference");
}
function Oe(e) {
	const i = new Map(e.capabilityStatuses.map((e) => [e.capability, e]));
	return G.map((r) => {
		const n = i.get(r);
		if (!n) throw new Error(`Reviewed diary version is missing its ${r} capability status.`);
		return {
			capability_status_id: n.id,
			version_definition_id: e.id,
			capability: r,
			evidence_status: n.evidenceStatus,
			release_status: n.releaseStatus,
			execution_status: n.executionStatus,
			evidence_locator: n.evidenceLocator,
			evidence_characterization: n.statusBasis,
			source_field_names: [...n.sourceFieldNames],
			...void 0 === n.inheritedFromVersionDefinitionId ? {} : { inherited_from_version_definition_id: n.inheritedFromVersionDefinitionId },
			status_basis: n.statusBasis
		};
	});
}
function qe(e, i = {}) {
	const r = we(e), n = Q.get(r.id);
	if (!n) throw new Error(`Reviewed diary version ${r.id} lacks its source-method variant.`);
	const o = ie(r.id), t = new Set(o);
	return { profile: {
		profile_id: i.profileId ?? `${r.id}:replication-profile`,
		contract_version: B,
		profile_revision: i.profileRevision ?? "draft-1",
		...null === r.language ? {} : { language: r.language },
		...null === r.licenseStatement ? {} : { license_statement: r.licenseStatement },
		catalog_id: u.catalogId,
		catalog_version: u.catalogVersion,
		catalog_source_sha256: _,
		version_definition_id: r.id,
		source_method_variant_id: n.id,
		...null === n.sourceRole ? {} : { source_role: n.sourceRole },
		...null === n.hostVersionDefinitionId ? {} : { host_version_definition_id: n.hostVersionDefinitionId },
		composed_version_definition_ids: o,
		version_definition_sha256: r.definitionSha256,
		capability_statuses: Oe(r),
		profile_variable_definitions: [],
		form_elements: be(u.formElements.filter((e) => t.has(e.version_definition_id))),
		response_definitions: be(u.responseDefinitions.filter((e) => t.has(e.version_definition_id))),
		administration_schedules: be(u.administrationSchedules.filter((e) => t.has(e.version_definition_id))),
		rule_definitions: be(u.ruleDefinitions.filter((e) => t.has(e.version_definition_id))),
		profile_sha256: ""
	} };
}
function Pe(e) {
	we(e);
	const i = new Set(ie(e));
	return u.sourceMappingProfiles.filter((e) => void 0 !== e.version_definition_id && i.has(e.version_definition_id));
}
function Ce(e, i) {
	const r = we(e);
	if (void 0 !== i) {
		const e = Pe(r.id).find((e) => e.mapping_profile_id === i);
		if (!e) throw new Error(`Unknown reviewed diary source profile: ${i}`);
		return {
			...structuredClone(e),
			canonical_write_scope: e.canonical_write_scope ?? "mapped_slots_only"
		};
	}
	return {
		mapping_profile_id: `${r.id}:source-mapping`,
		mapping_profile_version: "draft-1",
		version_definition_id: r.id,
		profile_planes: [],
		source_record_model: "unknown",
		canonical_write_scope: "mapped_slots_only",
		source_field_selectors: [],
		identity_bindings: [],
		schema_artifact_bindings: [],
		column_mappings: [],
		unmapped_source_fields: [],
		unmapped_source_selector_ids: []
	};
}
const Fe = /* @__PURE__ */ new Map();
function Te(e, i, r, n) {
	if ($e(e, i.selector_id, `${r}.selector_id`, "Source selector ID"), Re(e, i, r), void 0 !== i.source_field_name && 0 === i.source_field_name.trim().length && xe(e, "error", "blank_source_field_name", `${r}.source_field_name`, "Source field name must be nonblank when supplied."), void 0 !== i.source_path && 0 === i.source_path.trim().length && xe(e, "error", "blank_source_path", `${r}.source_path`, "Source path must be nonblank when supplied."), i.source_field_name || void 0 !== i.source_field_position || void 0 !== i.source_row_position || i.source_path || xe(e, "error", "empty_source_selector", r, "Source selector must include a field name, column position, row position, or source-native path."), void 0 !== i.source_field_position && (!Number.isSafeInteger(i.source_field_position) || i.source_field_position < 1) && xe(e, "error", "invalid_source_position", `${r}.source_field_position`, "Source position must be a one-based integer."), void 0 !== i.source_row_position && (!Number.isSafeInteger(i.source_row_position) || i.source_row_position < 1) && xe(e, "error", "invalid_source_row_position", `${r}.source_row_position`, "Source row position must be a one-based integer."), n) if (void 0 !== i.source_field_position) {
		const o = n[i.source_field_position - 1];
		void 0 === o ? xe(e, "error", "source_position_missing", `${r}.source_field_position`, "Source position is outside the exact header row.") : i.source_field_name && i.source_field_name !== o && xe(e, "error", "source_coordinate_mismatch", r, "Source selector name and position do not match the exact header row.");
	} else i.source_field_name && !n.includes(i.source_field_name) && xe(e, "error", "source_header_missing", `${r}.source_field_name`, "Source field is absent from the exact header row.");
}
function ze(e, i) {
	return e.sourceFieldName === i.source_field_name && e.sourcePath === i.source_path && (void 0 === i.source_field_position ? void 0 === i.source_path || void 0 === e.sourceFieldPosition : e.sourceFieldPosition === i.source_field_position);
}
function Ve(e, i = {}) {
	const o = [];
	(function(e, i) {
		Se(e, i, [
			"profile",
			"instrumentMapping",
			"diaryMapping",
			"sourceAdapterReceipt"
		], "draft");
		const r = i.profile;
		Se(e, r, l.DiaryReplicationProfile, "profile"), r.capability_statuses?.forEach((i, r) => Se(e, i, l.DiaryReplicationCapabilityStatus, `profile.capability_statuses[${String(r)}]`)), r.profile_variable_definitions?.forEach((i, r) => Se(e, i, l.DiaryProfileVariableDefinition, `profile.profile_variable_definitions[${String(r)}]`)), r.form_elements?.forEach((i, r) => Se(e, i, l.DiaryFormElementDefinition, `profile.form_elements[${String(r)}]`)), r.response_definitions?.forEach((i, r) => {
			const n = `profile.response_definitions[${String(r)}]`;
			Se(e, i, l.DiaryResponseDefinition, n), i.response_options?.forEach((i, r) => Se(e, i, l.DiaryResponseOptionDefinition, `${n}.response_options[${String(r)}]`));
		}), r.administration_schedules?.forEach((i, r) => Se(e, i, l.DiaryAdministrationScheduleDefinition, `profile.administration_schedules[${String(r)}]`)), r.rule_definitions?.forEach((i, r) => Se(e, i, l.DiaryRuleDefinition, `profile.rule_definitions[${String(r)}]`));
		const n = i.diaryMapping;
		n && (Se(e, n, c.DiaryMapping, "diaryMapping"), n.source_field_selectors?.forEach((i, r) => Se(e, i, c.DiarySourceFieldSelector, `diaryMapping.source_field_selectors[${String(r)}]`)), n.execution_output_selectors?.forEach((i, r) => Se(e, i, c.DiarySourceFieldSelector, `diaryMapping.execution_output_selectors[${String(r)}]`)), n.repeated_event_layouts?.forEach((i, r) => Se(e, i, c.DiaryRepeatedEventLayoutBinding, `diaryMapping.repeated_event_layouts[${String(r)}]`)), n.source_row_role_bindings?.forEach((i, r) => Se(e, i, c.DiarySourceRowRoleBinding, `diaryMapping.source_row_role_bindings[${String(r)}]`)), n.identity_bindings?.forEach((i, r) => Se(e, i, c.DiaryIdentityBinding, `diaryMapping.identity_bindings[${String(r)}]`)), n.schema_artifact_bindings?.forEach((i, r) => Se(e, i, c.DiarySchemaArtifactBinding, `diaryMapping.schema_artifact_bindings[${String(r)}]`)), n.record_assembly && Se(e, n.record_assembly, c.DiaryRecordAssembly, "diaryMapping.record_assembly"), n.column_mappings.forEach((i, r) => Se(e, i, c.ColumnMapping, `diaryMapping.column_mappings[${String(r)}]`)));
	})(o, e);
	const s = X.get(e.profile.version_definition_id);
	if (!s) return xe(o, "error", "unknown_version", "profile.version_definition_id", "Profile does not select a generated reviewed version."), o;
	(function(e, i) {
		i && i.some((e) => 0 === e.length) && xe(e, "error", "blank_source_header", "availableSourceHeaders", "Exact source headers cannot be blank.");
	})(o, i.availableSourceHeaders), function(e, i, r) {
		$e(e, i.profile_id, "profile.profile_id", "Profile ID"), Ie(e, i.profile_revision, "profile.profile_revision", "Profile revision"), "diary_replication_profile_v1" !== i.contract_version && xe(e, "error", "contract_mismatch", "profile.contract_version", "Profile contract version is unsupported."), i.catalog_id !== u.catalogId && xe(e, "error", "catalog_mismatch", "profile.catalog_id", "Profile names another reviewed diary catalog."), Ie(e, i.catalog_version, "profile.catalog_version", "Current catalog version"), Ee(e, i.catalog_source_sha256, "profile.catalog_source_sha256", "Current catalog snapshot digest"), i.catalog_version === u.catalogVersion && "510affa624da44e7eab6b336693f83f3b65d14a88c130f59cf5d8aa1da3bd537" === i.catalog_source_sha256 || xe(e, "error", "catalog_mismatch", "profile.catalog_source_sha256", "Profile does not match the current reviewed diary catalog snapshot."), i.version_definition_id === r.id && i.version_definition_sha256 === r.definitionSha256 || xe(e, "error", "version_mismatch", "profile.version_definition_id", "Profile version identity or digest was changed.");
		const o = Q.get(r.id), t = ie(r.id);
		void 0 !== o && i.source_method_variant_id === o.id && (i.source_role ?? null) === o.sourceRole && (i.host_version_definition_id ?? null) === o.hostVersionDefinitionId && n(i.composed_version_definition_ids) === n(t) || xe(e, "error", "source_method_mismatch", "profile.source_method_variant_id", "Profile source-method identity or audited host composition was changed."), null == o?.hostVersionDefinitionId || X.has(o.hostVersionDefinitionId) || xe(e, "gap", "unresolved_host_version", "profile.host_version_definition_id", `Reviewed host version ${o.hostVersionDefinitionId} is absent from the generated diary catalog; this preset retains that cited host reference and uses only this variant's directly evidenced definitions.`), (i.language ?? null) !== r.language && xe(e, "error", "language_mismatch", "profile.language", "Profile language must exactly match the reviewed version."), (i.license_statement ?? null) !== r.licenseStatement && xe(e, "error", "license_mismatch", "profile.license_statement", "Profile license statement must exactly match the reviewed version."), Ee(e, i.profile_sha256, "profile.profile_sha256", "Profile digest");
	}(o, e.profile, s), function(e, i, r) {
		const o = i.capability_statuses.map((e) => e.capability);
		if (i.capability_statuses.length !== G.length || new Set(o).size !== G.length || G.some((e) => !o.includes(e))) return void xe(e, "error", "capability_set_mismatch", "profile.capability_statuses", "Every generated replication capability must appear exactly once.");
		let t = Fe.get(r.id);
		t || (t = new Map(Oe(r).map((e) => [e.capability, n(e)])), Fe.set(r.id, t)), i.capability_statuses.forEach((i, r) => {
			const o = t.get(i.capability);
			o && n(i) === o || xe(e, "error", "reviewed_evidence_changed", `profile.capability_statuses[${String(r)}]`, "Reviewed capability evidence must remain byte-for-byte bound to the generated catalog view."), "executable" !== i.execution_status && "not_applicable" !== i.execution_status && xe(e, "gap", "capability_not_executable", `profile.capability_statuses[${String(r)}].execution_status`, `${i.capability} is ${i.execution_status}; authored structure does not make it executable.`);
		});
	}(o, e.profile, s);
	const a = ie(s.id), d = new Set(a), _ = new Set(a.flatMap((e) => [...ee.get(e) ?? []]));
	(function(e, i) {
		const r = i.profile_variable_definitions ?? [], n = r.map((e) => e.variable_definition_id);
		return De(e, n, "profile.profile_variable_definitions", "Profile variable IDs"), r.forEach((r, n) => {
			const o = `profile.profile_variable_definitions[${String(n)}]`;
			$e(e, r.variable_definition_id, `${o}.variable_definition_id`, "Profile variable ID"), r.version_definition_id !== i.version_definition_id && xe(e, "error", "version_mismatch", `${o}.version_definition_id`, "Profile variable references another reviewed version."), u.diaryItems.some((e) => e.id === r.variable_definition_id) && xe(e, "error", "catalog_variable_shadow", `${o}.variable_definition_id`, "Profile variable cannot replace immutable reviewed-catalog evidence."), Ie(e, r.variable_name, `${o}.variable_name`, "Variable name"), Ie(e, r.reported_construct, `${o}.reported_construct`, "Reported construct"), Ie(e, r.response_type, `${o}.response_type`, "Response type"), Ie(e, r.evidence_locator, `${o}.evidence_locator`, "Variable evidence locator"), Ie(e, r.evidence_characterization, `${o}.evidence_characterization`, "Variable evidence characterization"), ke(e, r.minimum, `${o}.minimum`, "Profile variable minimum"), ke(e, r.maximum, `${o}.maximum`, "Profile variable maximum"), ae.has(r.definition_status) || xe(e, "error", "invalid_definition_status", `${o}.definition_status`, "Profile variable definition status is unsupported."), void 0 !== r.minimum && void 0 !== r.maximum && r.minimum > r.maximum && xe(e, "error", "invalid_bounds", o, "Profile variable minimum exceeds maximum."), "" !== r.definition_sha256 && Ee(e, r.definition_sha256, `${o}.definition_sha256`, "Profile variable definition digest");
		}), new Set(n);
	})(o, e.profile).forEach((e) => _.add(e));
	const p = function(e, i, r, n) {
		const o = i.form_elements ?? [], t = o.map((e) => e.form_element_definition_id);
		De(e, t, "profile.form_elements", "Form element IDs");
		const s = new Set(t);
		o.forEach((i, o) => {
			const t = `profile.form_elements[${String(o)}]`;
			$e(e, i.form_element_definition_id, `${t}.form_element_definition_id`, "Form element ID"), Me(e, i.definition_status, `${t}.definition_status`), Re(e, i, t), n.has(i.version_definition_id) || xe(e, "error", "version_mismatch", `${t}.version_definition_id`, "Form element references another version."), (!Number.isSafeInteger(i.display_order) || i.display_order < 0) && xe(e, "error", "invalid_order", `${t}.display_order`, "Display order must be a non-negative integer."), i.variable_definition_id && !r.has(i.variable_definition_id) && xe(e, "error", "unknown_reference", `${t}.variable_definition_id`, "Form element variable is outside the selected version."), void 0 !== i.semantic_role && 0 === i.semantic_role.trim().length && xe(e, "error", "required", `${t}.semantic_role`, "Form semantic role must be nonblank when supplied."), Ne(e, i.source_alias_variable_definition_ids, r, `${t}.source_alias_variable_definition_ids`, "Form variable aliases"), i.parent_form_element_definition_id && !s.has(i.parent_form_element_definition_id) && xe(e, "error", "unknown_reference", `${t}.parent_form_element_definition_id`, "Form parent is unknown."), je(e, i.display_text, i.display_text_sha256, i.reuse_decision_reference, `${t}.display_text`, "Form display text");
		});
		const a = new Map(o.map((e) => [e.form_element_definition_id, e]));
		return o.forEach((i, r) => {
			const n = /* @__PURE__ */ new Set([i.form_element_definition_id]);
			let o = i.parent_form_element_definition_id;
			for (; o;) {
				if (n.has(o)) {
					xe(e, "error", "form_cycle", `profile.form_elements[${String(r)}].parent_form_element_definition_id`, "Form hierarchy contains a cycle.");
					break;
				}
				n.add(o), o = a.get(o)?.parent_form_element_definition_id;
			}
		}), s;
	}(o, e.profile, _, d);
	(function(e, i, r, n) {
		const o = i.response_definitions ?? [];
		De(e, o.map((e) => e.response_definition_id), "profile.response_definitions", "Response definition IDs"), De(e, o.map((e) => e.variable_definition_id), "profile.response_definitions", "Response variables"), o.forEach((i, o) => {
			const t = `profile.response_definitions[${String(o)}]`;
			$e(e, i.response_definition_id, `${t}.response_definition_id`, "Response definition ID"), Me(e, i.definition_status, `${t}.definition_status`), Re(e, i, t), Ie(e, i.value_type, `${t}.value_type`, "Response value type"), Ie(e, i.response_control, `${t}.response_control`, "Response control"), ke(e, i.minimum, `${t}.minimum`, "Response minimum"), ke(e, i.maximum, `${t}.maximum`, "Response maximum"), n.has(i.version_definition_id) && r.has(i.variable_definition_id) || xe(e, "error", "unknown_reference", `${t}.variable_definition_id`, "Response definition must name a variable in the selected version."), void 0 !== i.minimum && void 0 !== i.maximum && i.minimum > i.maximum && xe(e, "error", "invalid_range", `${t}.minimum`, "Response minimum cannot exceed its maximum.");
			const s = i.response_options ?? [];
			if (De(e, s.map((e) => e.response_option_definition_id), `${t}.response_options`, "Response option IDs"), De(e, s.flatMap((e) => e.stored_value_lexical ? [e.stored_value_lexical] : []), `${t}.response_options`, "Released stored option values"), De(e, s.flatMap((e) => e.stored_value_sha256 ? [e.stored_value_sha256] : []), `${t}.response_options`, "Stored option digests"), function(e, i, r) {
				new Set(i).size !== i.length && xe(e, "error", "duplicate_number", r, "Option display order must be unique.");
			}(e, s.map((e) => e.display_order), `${t}.response_options`), s.forEach((i, r) => {
				const n = `${t}.response_options[${String(r)}]`;
				$e(e, i.response_option_definition_id, `${n}.response_option_definition_id`, "Response option ID"), Me(e, i.definition_status, `${n}.definition_status`), Re(e, i, n), Ee(e, i.stored_value_sha256, `${n}.stored_value_sha256`, "Stored lexical value digest"), i.stored_value_lexical || i.stored_value_sha256 || xe(e, "error", "missing_stored_value", n, "Response option requires either a lawfully reusable stored lexical value or its exact SHA-256 digest."), i.stored_value_lexical && Ie(e, i.reuse_decision_reference, `${n}.reuse_decision_reference`, "A version-specific reuse decision reference for the released stored value"), (!Number.isSafeInteger(i.display_order) || i.display_order < 0) && xe(e, "error", "invalid_order", `${n}.display_order`, "Option order must be a non-negative integer."), je(e, i.display_label, i.display_label_sha256, i.reuse_decision_reference, `${n}.display_label`, "Response display label");
			}), "executable" === i.definition_status) try {
				O(i);
			} catch (a) {
				xe(e, "error", "unsupported_runtime_definition", `${t}.response_contract_json`, a instanceof Error ? a.message : "Response runtime contract is unsupported.");
			}
		}), o.forEach((r, n) => {
			if ("executable" !== r.definition_status) return;
			const o = (i.form_elements ?? []).filter((e) => function(e) {
				return V(e);
			}(e) && e.variable_definition_id === r.variable_definition_id);
			1 === o.length && "executable" === o[0].definition_status || xe(e, "error", "response_form_binding_unavailable", `profile.response_definitions[${String(n)}].variable_definition_id`, "Executable response must bind to exactly one executable respondent form input.");
		});
	})(o, e.profile, _, d), e.profile.form_elements?.some((e) => void 0 !== e.display_text && "" !== e.display_text && !function(e) {
		return u.formElements.some((i) => i.version_definition_id === e.version_definition_id && i.form_element_definition_id === e.form_element_definition_id && void 0 !== i.display_text && "" !== i.display_text && void 0 !== i.display_text_sha256 && void 0 !== i.reuse_decision_reference && i.display_text === e.display_text && i.display_text_sha256 === e.display_text_sha256 && i.reuse_decision_reference === e.reuse_decision_reference);
	}(e)) && xe(o, "error", "wording_not_released", "profile.form_elements", "Authored or changed display text requires released item-wording evidence for this exact version."), e.profile.response_definitions?.some((e) => e.response_options?.some((i) => (void 0 !== i.display_label && "" !== i.display_label || void 0 !== i.stored_value_lexical && "" !== i.stored_value_lexical) && !function(e, i) {
		return u.responseDefinitions.some((r) => r.version_definition_id === e.version_definition_id && r.response_definition_id === e.response_definition_id && !0 === r.response_options?.some((e) => e.response_option_definition_id === i.response_option_definition_id && void 0 !== e.reuse_decision_reference && e.stored_value_lexical === i.stored_value_lexical && e.stored_value_sha256 === i.stored_value_sha256 && e.display_label === i.display_label && e.display_label_sha256 === i.display_label_sha256 && e.reuse_decision_reference === i.reuse_decision_reference));
	}(e, i))) && xe(o, "error", "response_options_not_released", "profile.response_definitions", "Authored or changed response options require released response-option evidence for this exact version."), function(e, i, o, t, s) {
		const a = i.administration_schedules ?? [];
		De(e, a.map((e) => e.schedule_definition_id), "profile.administration_schedules", "Schedule IDs"), a.forEach((i, a) => {
			const d = `profile.administration_schedules[${String(a)}]`;
			if ($e(e, i.schedule_definition_id, `${d}.schedule_definition_id`, "Schedule ID"), Me(e, i.definition_status, `${d}.definition_status`), Re(e, i, d), s.has(i.version_definition_id) || xe(e, "error", "version_mismatch", `${d}.version_definition_id`, "Schedule references another version."), Ie(e, i.administration_timing, `${d}.administration_timing`, "Administration timing"), Ie(e, i.recurrence_expression_language, `${d}.recurrence_expression_language`, "Recurrence expression language"), Ie(e, i.recurrence_expression_version, `${d}.recurrence_expression_version`, "Recurrence expression version"), Ae(e, i.recurrence_expression_json, `${d}.recurrence_expression_json`, "Recurrence expression"), Ee(e, i.recurrence_expression_sha256, `${d}.recurrence_expression_sha256`, "Recurrence expression digest"), void 0 !== i.occurrence_count && (!Number.isSafeInteger(i.occurrence_count) || i.occurrence_count < 0) && xe(e, "error", "invalid_occurrence_count", `${d}.occurrence_count`, "Occurrence count must be a non-negative safe integer."), "executable" === i.definition_status) try {
				(function(e) {
					(function(e) {
						if ("executable" !== e.definition_status) throw new Error("Schedule definition is not executable.");
						if ("" === e.evidence_locator.trim() || "" === e.evidence_characterization.trim()) throw new Error("Executable schedule requires nonblank evidence.");
						if ("" === e.administration_timing.trim()) throw new Error("Executable schedule requires nonblank administration timing.");
						const i = b.find((i) => $(e[i]));
						if (void 0 !== i) throw new Error(`Schedule runtime v1 does not support populated ${i}.`);
						if ("chronicle-diary-schedule-json" !== e.recurrence_expression_language || "1" !== e.recurrence_expression_version) throw new Error(`Unsupported schedule dialect ${e.recurrence_expression_language}@${e.recurrence_expression_version}.`);
						let o;
						try {
							o = JSON.parse(e.recurrence_expression_json);
						} catch {
							throw new Error("Schedule expression is not valid JSON.");
						}
						if (!h.test(e.recurrence_expression_sha256) || r(n(o)) !== e.recurrence_expression_sha256) throw new Error("Schedule expression digest does not match its canonical JSON.");
						if (!S(o) || "string" != typeof o.op) throw new Error("Schedule expression must be a JSON object with an op.");
						if ("daily" === o.op && I(o, ["op"])) return { op: o.op };
						if ("daily_at" === o.op && I(o, ["op", "local_time"]) && "string" == typeof o.local_time && f.test(o.local_time)) return {
							op: o.op,
							localTime: o.local_time
						};
						if ("on_event" === o.op && I(o, ["op", "event"]) && "string" == typeof o.event && o.event.trim().length > 0 && o.event === o.event.trim() && new TextEncoder().encode(o.event).length <= 128) return {
							op: o.op,
							event: o.event
						};
						throw new Error("Schedule expression must be daily, daily_at with strict HH:MM local_time, or on_event with a nonblank event.");
					})(e);
				})(i);
			} catch (c) {
				xe(e, "error", "unsupported_runtime_definition", `${d}.recurrence_expression_json`, c instanceof Error ? c.message : "Schedule runtime contract is unsupported.");
			}
			Ne(e, i.target_variable_definition_ids, o, `${d}.target_variable_definition_ids`, "Schedule variable targets"), Ne(e, i.target_form_element_definition_ids, t, `${d}.target_form_element_definition_ids`, "Schedule form targets"), i.trigger_variable_definition_id && !o.has(i.trigger_variable_definition_id) && xe(e, "error", "unknown_reference", `${d}.trigger_variable_definition_id`, "Schedule trigger variable is outside the selected version.");
		});
	}(o, e.profile, _, p, d);
	const m = function(e, i, r, n, o) {
		const t = i.rule_definitions ?? [], s = t.map((e) => e.rule_definition_id);
		return De(e, s, "profile.rule_definitions", "Rule IDs"), t.forEach((t, s) => {
			const a = `profile.rule_definitions[${String(s)}]`;
			$e(e, t.rule_definition_id, `${a}.rule_definition_id`, "Rule ID"), Me(e, t.definition_status, `${a}.definition_status`), Re(e, t, a), o.has(t.version_definition_id) || xe(e, "error", "version_mismatch", `${a}.version_definition_id`, "Rule references another version.");
			const d = t.target_variable_definition_ids ?? [], c = t.target_form_element_definition_ids ?? [];
			if ("executable" === t.definition_status && 0 === d.length && 0 === c.length && "protocol" !== t.scope && xe(e, "error", "missing_rule_target", a, "Rule must target at least one variable or form element."), Ne(e, d, r, `${a}.target_variable_definition_ids`, "Rule variable targets"), Ne(e, c, n, `${a}.target_form_element_definition_ids`, "Rule form targets"), Ne(e, t.referenced_variable_definition_ids, r, `${a}.referenced_variable_definition_ids`, "Rule variable inputs"), Ne(e, t.referenced_form_element_definition_ids, n, `${a}.referenced_form_element_definition_ids`, "Rule form inputs"), Ie(e, t.expression_language, `${a}.expression_language`, "Rule expression language"), Ie(e, t.expression_version, `${a}.expression_version`, "Rule expression version"), Ae(e, t.expression_json, `${a}.expression_json`, "Rule expression"), Ee(e, t.expression_sha256, `${a}.expression_sha256`, "Rule expression digest"), "executable" === t.definition_status) try {
				(function(e, i = []) {
					if ("repeat" === e.rule_kind) return void C(e);
					P(e);
					const r = new Map(i.filter((e) => "executable" === e.definition_status).map((e) => [e.variable_definition_id, e]));
					for (const n of e.referenced_variable_definition_ids ?? []) {
						const e = r.get(n);
						if (!e) continue;
						const { valueKind: i } = O(e);
						if ("array" === i || "object" === i) throw new Error("Rule runtime v1 can reference only scalar executable responses.");
					}
				})(t, i.response_definitions ?? []);
			} catch (_) {
				xe(e, "error", "unsupported_runtime_definition", `${a}.expression_json`, _ instanceof Error ? _.message : "Rule runtime contract is unsupported.");
			}
			void 0 !== t.minimum_occurrences && (!Number.isSafeInteger(t.minimum_occurrences) || t.minimum_occurrences < 0) && xe(e, "error", "invalid_cardinality", `${a}.minimum_occurrences`, "Minimum occurrences must be a non-negative integer."), void 0 !== t.maximum_occurrences && (!Number.isSafeInteger(t.maximum_occurrences) || t.maximum_occurrences < 0) && xe(e, "error", "invalid_cardinality", `${a}.maximum_occurrences`, "Maximum occurrences must be a non-negative integer."), void 0 !== t.minimum_occurrences && void 0 !== t.maximum_occurrences && t.minimum_occurrences > t.maximum_occurrences && xe(e, "error", "invalid_cardinality", `${a}.minimum_occurrences`, "Minimum occurrences cannot exceed maximum occurrences."), "repeat" !== t.rule_kind || "executable" !== t.definition_status || t.occurrence_identity_strategy?.trim() || xe(e, "error", "missing_repeat_identity", `${a}.occurrence_identity_strategy`, "Repeat rules require an occurrence identity strategy.");
		}), new Set(s);
	}(o, e.profile, _, p, d);
	if (function(e, i, r) {
		i.forEach((i, n) => {
			i.repeat_rule_definition_id && !r.has(i.repeat_rule_definition_id) && xe(e, "error", "unknown_reference", `profile.form_elements[${String(n)}].repeat_rule_definition_id`, "Form element repeat rule is unknown.");
		});
	}(o, e.profile.form_elements ?? [], m), e.diaryMapping && e.profile.rule_definitions?.some((e) => "repeat" === e.rule_kind) && !e.diaryMapping.identity_bindings?.some((e) => "occurrence_id" === e.identity_role) && xe(o, "error", "missing_occurrence_binding", "diaryMapping.identity_bindings", "Repeat rules require an explicit occurrence_id source binding."), e.diaryMapping && function(e, i, r, n) {
		const o = void 0 !== i.execution_adapter_id && "direct-tabular-csv-v1" !== i.execution_adapter_id, t = o ? void 0 : n.headers, s = i.profile_planes ?? [];
		De(e, s, "diaryMapping.profile_planes", "Execution planes"), s.forEach((i, r) => {
			le.has(i) || xe(e, "error", "invalid_execution_plane", `diaryMapping.profile_planes[${String(r)}]`, "Mapping execution plane is unsupported.");
		});
		const a = i.record_semantics;
		$e(e, i.mapping_profile_id, "diaryMapping.mapping_profile_id", "Source mapping profile ID"), Ie(e, i.mapping_profile_version, "diaryMapping.mapping_profile_version", "Source mapping profile version"), void 0 === i.version_definition_id || r.has(i.version_definition_id) || xe(e, "error", "version_mismatch", "diaryMapping.version_definition_id", "Source mapping references another reviewed version."), void 0 !== i.instrument_mapping && xe(e, "error", "nested_instrument_mapping", "diaryMapping.instrument_mapping", "Reviewed-variable provenance belongs in the top-level instrument mapping field."), void 0 === i.source_record_model || de.has(i.source_record_model) || xe(e, "error", "invalid_source_record_model", "diaryMapping.source_record_model", "Source record model is unsupported."), void 0 === i.diary_occurrence_layout || ce.has(i.diary_occurrence_layout) || xe(e, "error", "invalid_occurrence_layout", "diaryMapping.diary_occurrence_layout", "Diary occurrence layout is unsupported."), void 0 === i.field_orientation || _e.has(i.field_orientation) || xe(e, "error", "invalid_field_orientation", "diaryMapping.field_orientation", "Field orientation is unsupported."), "keyed_object_record" === i.source_record_model || void 0 !== i.diary_occurrence_layout && "unknown" !== i.diary_occurrence_layout || xe(e, "gap", "occurrence_layout_gap", "diaryMapping.diary_occurrence_layout", "Diary occurrences across rows or column blocks have not been established."), "keyed_object_record" === i.source_record_model || void 0 !== i.field_orientation && "unknown" !== i.field_orientation || xe(e, "gap", "field_orientation_gap", "diaryMapping.field_orientation", "Column or transposed field orientation has not been established."), "occurrences_across_column_blocks" === i.diary_occurrence_layout && xe(e, "gap", "column_blocks_not_csv_executable", "diaryMapping.diary_occurrence_layout", "Column-block diary occurrences are structurally represented but not executed by the current flat CSV route."), "fields_in_transposed_rows" !== i.field_orientation && "fields_in_transposed_blocks" !== i.field_orientation || xe(e, "gap", "transposed_not_csv_executable", "diaryMapping.field_orientation", "Transposed source fields are structurally represented but not executed by the current flat CSV route."), void 0 === a || Z.includes(a) || xe(e, "error", "invalid_record_semantics", "diaryMapping.record_semantics", "Source record semantics are unsupported."), void 0 === i.canonical_write_scope || W.includes(i.canonical_write_scope) || xe(e, "error", "invalid_write_scope", "diaryMapping.canonical_write_scope", "Canonical write scope is unsupported."), void 0 !== i.canonical_write_scope && "unknown" !== i.canonical_write_scope || xe(e, "gap", "canonical_write_scope_gap", "diaryMapping.canonical_write_scope", "Canonical compatibility-cache write authority has not been established."), "event_row" !== i.source_record_model && "keyed_object_record" !== i.source_record_model || xe(e, "gap", "record_model_not_csv_executable", "diaryMapping.source_record_model", "This source model is representable but the current CSV import route cannot execute it."), void 0 !== i.source_record_model && "unknown" !== i.source_record_model || xe(e, "gap", "source_record_model_gap", "diaryMapping.source_record_model", "Exact source record model has not been established."), void 0 !== a && "legacy_ambiguous" !== a || xe(e, "gap", "record_semantics_gap", "diaryMapping.record_semantics", "Record completeness or sparse-patch semantics remain ambiguous."), void 0 !== i.delimiter && "" !== i.delimiter && 1 !== Array.from(i.delimiter).length && xe(e, "error", "invalid_delimiter", "diaryMapping.delimiter", "Source delimiter must be exactly one character.");
		for (const [y, b] of [["header_row_index", i.header_row_index], ["skip_rows", i.skip_rows]]) void 0 !== b && (!Number.isSafeInteger(b) || b < 0 || b > 200) && xe(e, "error", "invalid_row_coordinate", `diaryMapping.${y}`, "Header and skip row coordinates must be integers from 0 through 200.");
		void 0 !== i.header_row_index && void 0 !== i.skip_rows && i.header_row_index !== i.skip_rows && xe(e, "error", "row_coordinate_mismatch", "diaryMapping.skip_rows", "Header row and skipped-row count must identify the same source row.");
		const d = i.signature_headers ?? [];
		De(e, d, "diaryMapping.signature_headers", "Signature headers"), t && d.forEach((i, r) => {
			t.includes(i) || xe(e, "error", "source_header_missing", `diaryMapping.signature_headers[${String(r)}]`, "Signature header is absent from the exact header row.");
		}), void 0 !== i.minimum_signature_matches && (!Number.isSafeInteger(i.minimum_signature_matches) || i.minimum_signature_matches < 1 || i.minimum_signature_matches > d.length) && xe(e, "error", "invalid_signature_minimum", "diaryMapping.minimum_signature_matches", "Minimum signature matches must be between one and the number of signature headers.");
		const c = i.source_field_selectors ?? [], _ = c.map((e) => e.selector_id);
		De(e, _, "diaryMapping.source_field_selectors", "Source selector IDs");
		const l = new Map(c.map((e) => [e.selector_id, e])), u = void 0 !== i.source_record_model && "unknown" !== i.source_record_model && "tabular_row" !== i.source_record_model || "fields_in_transposed_rows" === i.field_orientation || "fields_in_transposed_blocks" === i.field_orientation ? void 0 : t;
		c.forEach((i, r) => {
			Te(e, i, `diaryMapping.source_field_selectors[${String(r)}]`, u);
		});
		const p = i.execution_output_selectors ?? [], f = p.map((e) => e.selector_id);
		De(e, f, "diaryMapping.execution_output_selectors", "Adapter output selector IDs"), f.some((e) => l.has(e)) && xe(e, "error", "duplicate_source_selector", "diaryMapping.execution_output_selectors", "Physical and adapter-output selector IDs must be disjoint."), p.forEach((i, r) => {
			Te(e, i, `diaryMapping.execution_output_selectors[${String(r)}]`, void 0);
		}), void 0 === i.execution_adapter_id || "direct-tabular-csv-v1" === i.execution_adapter_id || 0 !== p.length || n.hasSourceAdapterReceipt || xe(e, "error", "missing_adapter_output", "diaryMapping.execution_output_selectors", "A transforming source adapter requires an exact declared output selector vector.");
		const m = i.repeated_event_layouts ?? [];
		De(e, m.map((e) => e.repeated_event_layout_binding_id), "diaryMapping.repeated_event_layouts", "Repeated event layout IDs"), De(e, m.map((e) => e.event_concept_id), "diaryMapping.repeated_event_layouts", "Repeated event concepts"), m.forEach((i, r) => {
			const n = `diaryMapping.repeated_event_layouts[${String(r)}]`;
			$e(e, i.repeated_event_layout_binding_id, `${n}.repeated_event_layout_binding_id`, "Repeated event layout ID"), $e(e, i.event_concept_id, `${n}.event_concept_id`, "Repeated event concept ID"), Re(e, i, n), ue.has(i.layout) ? "events_across_rows" === i.layout && xe(e, "gap", "repeated_rows_not_csv_executable", `${n}.layout`, "Repeated event rows are structurally represented but not executed by the current flat CSV route.") : xe(e, "error", "invalid_repeated_event_layout", `${n}.layout`, "Repeated event layout is unsupported.");
		});
		const v = i.source_row_role_bindings ?? [];
		De(e, v.map((e) => e.row_role_binding_id), "diaryMapping.source_row_role_bindings", "Source row role IDs"), v.forEach((i, r) => {
			const n = `diaryMapping.source_row_role_bindings[${String(r)}]`;
			$e(e, i.row_role_binding_id, `${n}.row_role_binding_id`, "Source row role ID"), Re(e, i, n), pe.has(i.row_entity_kind) || xe(e, "error", "invalid_source_row_entity", `${n}.row_entity_kind`, "Source row entity kind is unsupported."), void 0 === i.record_semantics || Z.includes(i.record_semantics) || xe(e, "error", "invalid_record_semantics", `${n}.record_semantics`, "Source row record semantics are unsupported."), void 0 === i.revision_mode || fe.has(i.revision_mode) || xe(e, "error", "invalid_revision_mode", `${n}.revision_mode`, "Source row revision mode is unsupported."), void 0 === i.discriminator_selector_id || l.has(i.discriminator_selector_id) || xe(e, "error", "unknown_reference", `${n}.discriminator_selector_id`, "Row discriminator names an unknown source selector."), void 0 === i.discriminator_selector_id != (0 === (i.discriminator_lexical_values?.length ?? 0)) && xe(e, "error", "incomplete_row_discriminator", n, "Row discriminator selector and exact lexical values must be supplied together."), Ne(e, i.predecessor_selector_ids, new Set(_), `${n}.predecessor_selector_ids`, "Predecessor selectors"), (i.predecessor_selector_ids?.length ?? 0) > 0 && "source_revision" !== i.revision_mode && xe(e, "error", "predecessor_without_revision", `${n}.predecessor_selector_ids`, "Predecessor selectors require source_revision mode.");
		});
		const g = i.identity_bindings ?? [];
		0 === g.length && xe(e, "gap", "record_identity_gap", "diaryMapping.identity_bindings", "No evidence-bound source record identity has been authored."), De(e, g.map((e) => e.identity_binding_id), "diaryMapping.identity_bindings", "Identity binding IDs"), De(e, g.map((e) => e.identity_role), "diaryMapping.identity_bindings", "Identity roles"), g.forEach((i, r) => {
			const n = `diaryMapping.identity_bindings[${String(r)}]`;
			$e(e, i.identity_binding_id, `${n}.identity_binding_id`, "Identity binding ID"), Re(e, i, n), me.has(i.identity_role) || xe(e, "error", "invalid_identity_role", `${n}.identity_role`, "Identity role is unsupported."), 0 === i.selector_ids.length && xe(e, "error", "missing_identity_selector", `${n}.selector_ids`, "Identity binding requires at least one selector."), Ne(e, i.selector_ids, new Set(_), `${n}.selector_ids`, "Identity selectors");
		});
		const h = i.schema_artifact_bindings ?? [];
		De(e, h.map((e) => e.schema_artifact_binding_id), "diaryMapping.schema_artifact_bindings", "Schema artifact binding IDs"), h.forEach((i, r) => {
			const n = `diaryMapping.schema_artifact_bindings[${String(r)}]`;
			$e(e, i.schema_artifact_binding_id, `${n}.schema_artifact_binding_id`, "Schema artifact binding ID"), Ie(e, i.artifact_reference, `${n}.artifact_reference`, "Schema artifact reference"), Ee(e, i.artifact_sha256, `${n}.artifact_sha256`, "Schema artifact digest"), Re(e, i, n);
		}), i.record_assembly ? (function(e, i, r, n) {
			$e(e, i.record_assembly_id, `${n}.record_assembly_id`, "Record assembly ID"), Re(e, i, n), ve.has(i.assembly_kind) || xe(e, "error", "invalid_assembly_kind", `${n}.assembly_kind`, "Record assembly kind is unsupported."), Ne(e, i.key_selector_ids, r, `${n}.key_selector_ids`, "Assembly key selectors"), Ne(e, i.grouping_selector_ids, r, `${n}.grouping_selector_ids`, "Assembly grouping selectors"), Ne(e, i.ordering_selector_ids, r, `${n}.ordering_selector_ids`, "Assembly ordering selectors"), Ne(e, i.repeated_row_discriminator_selector_ids, r, `${n}.repeated_row_discriminator_selector_ids`, "Repeated-row discriminator selectors");
			const o = "" === i.parameter_json ? void 0 : i.parameter_json, t = "" === i.parameter_sha256 ? void 0 : i.parameter_sha256;
			void 0 === o != (void 0 === t) && void 0 === o && xe(e, "error", "parameter_digest_pair", n, "Assembly parameter digest cannot be supplied without its JSON expression."), void 0 !== o && (Ae(e, o, `${n}.parameter_json`, "Assembly parameters"), Ee(e, t, `${n}.parameter_sha256`, "Assembly parameter digest")), "method_reference" !== i.assembly_kind && "chronological_event_pairing" !== i.assembly_kind || i.method_reference?.trim() && i.method_version?.trim() || xe(e, "error", "missing_method_reference", n, "Method-based assembly requires an exact method reference and version."), "chronological_event_pairing" !== i.assembly_kind || 0 !== (i.grouping_selector_ids?.length ?? 0) && 0 !== (i.ordering_selector_ids?.length ?? 0) || xe(e, "error", "missing_event_pairing_keys", n, "Chronological event pairing requires grouping and ordering selectors."), "direct_record" !== i.assembly_kind && xe(e, "gap", "assembly_not_csv_executable", `${n}.assembly_kind`, "This assembly is representable but the current CSV import route cannot execute it.");
		}(e, i.record_assembly, new Set(_), "diaryMapping.record_assembly"), "keyed_object_record" !== i.record_assembly.assembly_kind || i.record_assembly.record_root_path || i.source_record_root_path || xe(e, "error", "missing_record_root", "diaryMapping.record_assembly.record_root_path", "Keyed-object assembly requires an exact record-root path.")) : xe(e, "gap", "record_assembly_gap", "diaryMapping.record_assembly", "Physical-to-logical record assembly has not been characterized."), 0 === i.column_mappings.length && xe(e, "gap", "canonical_column_mapping_gap", "diaryMapping.column_mappings", "No canonical compatibility-slot mapping is authored; reviewed-variable values and the source shape can still be preserved."), De(e, i.column_mappings.map((e) => e.source_selector_id ?? (void 0 === e.source_field_position ? `name:${e.source_field_name}` : `position:${String(e.source_field_position)}`)), "diaryMapping.column_mappings", "Canonical source coordinates"), i.column_mappings.forEach((i, r) => {
			(function(e, ...[i, r, n, o]) {
				const t = `diaryMapping.column_mappings[${String(r)}]`;
				if (Ie(e, i.source_field_name, `${t}.source_field_name`, "Exact source field name"), oe.has(i.canonical_slot) || xe(e, "error", "unsupported_canonical_slot", `${t}.canonical_slot`, "Canonical diary target is not generated by the current ontology."), (!Number.isFinite(i.confidence) || i.confidence < 0 || i.confidence > 1) && xe(e, "error", "invalid_confidence", `${t}.confidence`, "Mapping confidence must be between 0 and 1."), ge.has(i.detection_tier) || xe(e, "error", "invalid_detection_tier", `${t}.detection_tier`, "Mapping detection tier is unsupported."), he.has(i.provenance_class) || xe(e, "error", "invalid_provenance", `${t}.provenance_class`, "Mapping provenance class is unsupported."), ye.has(i.data_field_type) ? se.get(i.canonical_slot)?.has(i.data_field_type) || xe(e, "error", "incompatible_data_type", `${t}.data_field_type`, "Mapping data field type is incompatible with the generated canonical target semantics.") : xe(e, "error", "invalid_data_type", `${t}.data_field_type`, "Mapping data field type is unsupported."), void 0 !== i.source_field_position && (!Number.isSafeInteger(i.source_field_position) || i.source_field_position < 1) && xe(e, "error", "invalid_source_position", `${t}.source_field_position`, "Source position must be a one-based integer."), void 0 !== i.episode_index && (!Number.isSafeInteger(i.episode_index) || i.episode_index < 1) && xe(e, "error", "invalid_episode_index", `${t}.episode_index`, "Episode index must be a one-based integer."), void 0 === i.episode_index != (void 0 === i.episode_field_role) && xe(e, "error", "incomplete_episode_coordinate", t, "Repeated canonical mapping requires both an episode index and field role."), void 0 !== i.episode_field_role && 0 === i.episode_field_role.trim().length && xe(e, "error", "blank_episode_role", `${t}.episode_field_role`, "Repeated episode field role must be nonblank."), o && (o.includes(i.source_field_name) || xe(e, "error", "source_header_missing", `${t}.source_field_name`, "Mapped source field is absent from the exact header row."), void 0 === i.source_field_position && 1 !== o.filter((e) => e === i.source_field_name).length && xe(e, "error", "source_position_required", `${t}.source_field_position`, "Source position is required when the exact mapped header is absent or repeats."), void 0 !== i.source_field_position && o[i.source_field_position - 1] !== i.source_field_name && xe(e, "error", "source_coordinate_mismatch", t, "Mapped source name and position do not match the exact header row.")), i.source_selector_id) {
					const r = n.get(i.source_selector_id);
					r ? r.source_field_name === i.source_field_name && r.source_field_position === i.source_field_position && r.source_path === i.source_path || xe(e, "error", "selector_mapping_mismatch", t, "Column mapping coordinates disagree with its source selector.") : xe(e, "error", "unknown_reference", `${t}.source_selector_id`, "Column mapping references an unknown source selector.");
				} else xe(e, "error", "missing_source_selector", `${t}.source_selector_id`, "Canonical column mapping requires an evidence-characterized source selector.");
			})(e, i, r, o ? new Map([...l, ...p.map((e) => [e.selector_id, e])]) : l, o ? void 0 : u);
		});
		for (const y of new Set(i.column_mappings.map((e) => e.canonical_slot))) {
			const r = i.column_mappings.filter((e) => e.canonical_slot === y);
			if (r.length < 2) continue;
			const n = r.map((e) => `${String(e.episode_index ?? "")}:${e.episode_field_role ?? ""}`);
			(r.some((e) => void 0 === e.episode_index || void 0 === e.episode_field_role) || new Set(n).size !== n.length) && xe(e, "error", "ambiguous_repeated_target", "diaryMapping.column_mappings", "Repeated canonical targets require unique explicit episode indexes and field roles.");
		}
		De(e, i.unmapped_source_fields ?? [], "diaryMapping.unmapped_source_fields", "Unmapped source fields"), Ne(e, i.unmapped_source_selector_ids, new Set(_), "diaryMapping.unmapped_source_selector_ids", "Unmapped source selectors");
	}(o, e.diaryMapping, d, {
		headers: i.availableSourceHeaders,
		hasSourceAdapterReceipt: void 0 !== e.sourceAdapterReceipt
	}), void 0 !== e.sourceAdapterReceipt) if (void 0 === e.diaryMapping) xe(o, "error", "source_adapter_without_mapping", "sourceAdapterReceipt", "A source adapter receipt requires its exact diary mapping profile.");
	else try {
		t(e.sourceAdapterReceipt, e.diaryMapping);
	} catch (v) {
		xe(o, "error", "invalid_source_adapter_receipt", "sourceAdapterReceipt", v instanceof Error ? v.message : "The source adapter receipt is invalid.");
	}
	return e.instrumentMapping && (e.instrumentMapping.versionDefinitionId !== s.id && xe(o, "error", "version_mismatch", "instrumentMapping.versionDefinitionId", "Reviewed-variable mapping selects another version."), e.instrumentMapping.assignments.forEach((r, n) => {
		const t = `instrumentMapping.assignments[${String(n)}]`;
		if (i.availableSourceHeaders && void 0 !== r.sourceFieldPosition && void 0 !== r.sourceFieldName && i.availableSourceHeaders[r.sourceFieldPosition - 1] !== r.sourceFieldName && xe(o, "error", "source_coordinate_mismatch", t, "Reviewed-variable assignment does not match the exact source header position."), e.diaryMapping) {
			const i = [...e.diaryMapping.source_field_selectors ?? [], ...e.diaryMapping.execution_output_selectors ?? []], n = void 0 === r.sourceSelectorId ? i.filter((e) => ze(r, e)) : i.filter((e) => e.selector_id === r.sourceSelectorId);
			if (1 !== n.length) xe(o, "error", "instrument_selector_mismatch", t, "Reviewed-variable assignment must resolve to exactly one source-profile selector.");
			else {
				const e = n[0];
				ze(r, e) || xe(o, "error", "instrument_selector_mismatch", t, "Reviewed-variable assignment coordinates disagree with its source-profile selector.");
			}
		}
	})), o;
}
function Je(e, i = Ve(e)) {
	const r = e.profile.capability_statuses.filter((e) => "executable" !== e.execution_status && "not_applicable" !== e.execution_status).map((e) => e.capability), n = (e.profile.form_elements?.length ?? 0) + (e.profile.profile_variable_definitions?.length ?? 0) + (e.profile.response_definitions?.length ?? 0) + (e.profile.administration_schedules?.length ?? 0) + (e.profile.rule_definitions?.length ?? 0), o = i.filter((e) => "error" === e.severity).length, t = i.filter((e) => "gap" === e.severity).length, s = e.profile.capability_statuses.every((e) => "executable" !== e.execution_status) || [
		...e.profile.form_elements ?? [],
		...e.profile.response_definitions ?? [],
		...e.profile.administration_schedules ?? [],
		...e.profile.rule_definitions ?? []
	].every((e) => "executable" !== e.definition_status);
	return {
		structuralOnly: s,
		hasGaps: r.length > 0 || t > 0 || o > 0,
		gapCapabilities: r,
		authoredDefinitionCount: n,
		errorCount: o,
		gapCount: t,
		label: o > 0 ? `${String(o)} release-blocking issue${1 === o ? "" : "s"}` : s ? "Structural-only; no expression dialect is runtime-executable" : t > 0 ? `${String(t)} evidence or runtime gap${1 === t ? "" : "s"}` : "Release-ready"
	};
}
function Ke(e) {
	for (const [i, r] of Object.entries(e)) "" === r && (e[i] = void 0);
	return e;
}
async function Le(e, r, t) {
	const s = e[r];
	if ("string" != typeof s) return;
	const a = JSON.parse(s), d = n(o(a));
	e[r] = d, e[t] = await i(d);
}
function He(e) {
	return e.filter((e) => "error" === e.severity).map((e) => `${e.path}: ${e.message}`).join("\n");
}
async function Be(e, r = {}) {
	const t = Ve(e, r).filter((e) => "error" === e.severity);
	if (t.length > 0) throw new Error(`Diary replication profile is not release-safe:\n${He(t)}`);
	const s = be(e);
	let a;
	if (await async function(e) {
		e.profile_variable_definitions = await d(e.profile_variable_definitions ?? []), await Promise.all((e.form_elements ?? []).map(async (e) => {
			Ke(e), void 0 !== e.display_text && (e.display_text_sha256 = await i(e.display_text));
		})), await Promise.all((e.response_definitions ?? []).map(async (e) => {
			Ke(e), await Le(e, "response_contract_json", "response_contract_sha256"), await Promise.all((e.response_options ?? []).map(async (e) => {
				Ke(e), void 0 !== e.stored_value_lexical && (e.stored_value_sha256 = await i(e.stored_value_lexical)), void 0 !== e.display_label && (e.display_label_sha256 = await i(e.display_label));
			}));
		})), await Promise.all((e.administration_schedules ?? []).map(async (e) => {
			Ke(e), await Le(e, "recurrence_expression_json", "recurrence_expression_sha256");
		})), await Promise.all((e.rule_definitions ?? []).map(async (e) => {
			Ke(e), e.target_variable_definition_ids ??= [], e.target_form_element_definition_ids ??= [], await Le(e, "expression_json", "expression_sha256");
		}));
	}(s.profile), s.diaryMapping && await async function(e) {
		Ke(e), e.source_field_selectors?.forEach(Ke), e.execution_output_selectors?.forEach(Ke), e.identity_bindings?.forEach(Ke), e.schema_artifact_bindings?.forEach(Ke), e.column_mappings.forEach(Ke), e.record_assembly && (Ke(e.record_assembly), void 0 !== e.record_assembly.parameter_json && await Le(e.record_assembly, "parameter_json", "parameter_sha256"));
	}(s.diaryMapping), s.instrumentMapping) {
		if (a = await p(s.instrumentMapping), n(a.profileVariableDefinitions ?? []) !== n(s.profile.profile_variable_definitions ?? [])) throw new Error("Reviewed-variable mapping does not bind the profile-local variable definitions.");
		s.instrumentMapping = a;
	}
	const c = Ve(s, r), _ = c.filter((e) => "error" === e.severity);
	if (_.length > 0) throw new Error(`Diary replication profile is not release-safe:\n${He(_)}`);
	const l = be(s.profile);
	delete l.profile_sha256, s.profile.profile_sha256 = await i(n(o(l)));
	const u = {
		contract_version: H,
		profile: s.profile,
		...a ? { instrument_mapping: (f = a, {
			contract_version: f.contractVersion,
			version_definition_id: f.versionDefinitionId,
			version_definition_sha256: f.versionDefinitionSha256,
			assignments: f.assignments.map((e) => ({
				variable_definition_id: e.variableDefinitionId,
				variable_definition_sha256: e.variableDefinitionSha256,
				...void 0 === e.sourceSelectorId ? {} : { source_selector_id: e.sourceSelectorId },
				...void 0 === e.sourceFieldName ? {} : { source_field_name: e.sourceFieldName },
				...void 0 === e.sourceFieldPosition ? {} : { source_field_position: e.sourceFieldPosition },
				...void 0 === e.sourcePath ? {} : { source_path: e.sourcePath },
				...void 0 === e.repeatInstanceId ? {} : { repeat_instance_id: e.repeatInstanceId },
				...void 0 === e.repeatInstanceIndex ? {} : { repeat_instance_index: e.repeatInstanceIndex },
				detection_tier: e.detectionTier,
				confidence: e.confidence
			})),
			...void 0 === f.profileVariableDefinitions ? {} : { profile_variable_definitions: f.profileVariableDefinitions },
			mapping_sha256: f.mappingSha256,
			configuration_sha256: f.configurationSha256
		}) } : {},
		...s.diaryMapping ? { diary_mapping: s.diaryMapping } : {},
		...s.sourceAdapterReceipt ? { source_adapter_receipt: s.sourceAdapterReceipt } : {}
	};
	var f;
	const m = n(u);
	if (new TextEncoder().encode(m).byteLength > 1048576) throw new Error("Diary replication profile exceeds the 1 MiB transport limit.");
	return {
		fieldName: U,
		json: m,
		payload: u,
		profileSha256: s.profile.profile_sha256,
		transportSha256: await i(m),
		support: Je(s, c)
	};
}
const Ue = [
	"contractVersion",
	"profileId",
	"profileRevision",
	"versionDefinitionId",
	"versionDefinitionSha256",
	"profileSha256",
	"transportSha256"
], Ye = Ue.filter((e) => "transportSha256" !== e);
function Ze(e) {
	const i = e.payload.profile;
	return {
		contractVersion: B,
		profileId: i.profile_id,
		profileRevision: i.profile_revision,
		versionDefinitionId: i.version_definition_id,
		versionDefinitionSha256: i.version_definition_sha256,
		profileSha256: e.profileSha256,
		transportSha256: e.transportSha256
	};
}
function We(e) {
	if (null === e || "object" != typeof e || Array.isArray(e) || n(Object.keys(e).sort()) !== n([...Ue].sort()) && n(Object.keys(e).sort()) !== n([...Ye].sort())) throw new Error("Diary replication profile identity failed integrity verification.");
	const i = e, r = i.versionDefinitionId, o = "string" == typeof r ? X.get(r) : void 0;
	if (!("diary_replication_profile_v1" === i.contractVersion && "string" == typeof i.profileId && ne.test(i.profileId) && "string" == typeof i.profileRevision && 0 !== i.profileRevision.trim().length && "string" == typeof r && o && i.versionDefinitionSha256 === o.definitionSha256 && "string" == typeof i.profileSha256 && re.test(i.profileSha256) && (void 0 === i.transportSha256 || "string" == typeof i.transportSha256 && re.test(i.transportSha256)))) throw new Error("Diary replication profile identity failed integrity verification.");
	return {
		contractVersion: B,
		profileId: i.profileId,
		profileRevision: i.profileRevision,
		versionDefinitionId: r,
		versionDefinitionSha256: o.definitionSha256,
		profileSha256: i.profileSha256,
		...void 0 === i.transportSha256 ? {} : { transportSha256: i.transportSha256 }
	};
}
function Ge(e, i) {
	return e.set(i.fieldName, i.json), e;
}
export { Be as a, D as c, J as d, O as f, L as i, C as l, K as m, qe as n, Ve as o, z as p, Ze as r, We as s, H as t, w as u };
