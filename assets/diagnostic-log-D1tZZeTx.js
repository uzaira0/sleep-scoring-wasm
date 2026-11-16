import { Pn as e, jn as r } from "./schema-D8rqa1Y6.js";
import "./workspace-db-tot7PUXb.js";
import "./legacy-invalid-night-zjKZRSNb.js";
import "./audit-events-D-MHWdwf.js";
new RegExp(`\\b(?:${[
	"AggregateError",
	"EvalError",
	"RangeError",
	"ReferenceError",
	"SyntaxError",
	"TypeError",
	"URIError",
	"RuntimeError",
	"CompileError",
	"LinkError",
	"QuotaExceededError",
	"Error"
].join("|")})\\b`), Object.values(r.errnames);
var t = e({
	diagnosticErrorContext: () => d,
	recordDiag: () => l
});
const a = 500, o = [], i = /* @__PURE__ */ new Set([
	"Precomputed variant mask persistence failed",
	"Actiware statistics recalculation failed",
	"Auto-nonwear consensus ballot invalidation failed",
	"Background scored-variant warm failed",
	"Date navigation save failed",
	"Derive HASIB sib from stored anglez failed",
	"GGIR results recompute failed",
	"GGIR review recovery failed",
	"GGIR review settle before export failed",
	"GGIR night review read failed",
	"GGIR night clocks failed",
	"GGIR window placement failed",
	"GGIR night proposal failed",
	"GGIR circadian coverage store failed",
	"GGIR epoch analysis failed",
	"GGIR daily summary store failed",
	"GGIR activity day store failed",
	"MIMS activity day store failed",
	"GGIR results marker store failed",
	"GGIR corrected values cache write failed",
	"GGIR corrected values failed",
	"GGIR person summary recompute failed",
	"Local activity day unpack failed",
	"Nonwear queue prefill failed",
	"Nonwear queue retry failed",
	"Persisted store hydration failed",
	"Persisted store remove failed",
	"Persisted store write failed",
	"Query invalidation failed",
	"Strict local algorithm requested without cached score",
	"Audit log entry has unparseable CloudEvent time",
	"Browser runtime error",
	"Unhandled promise rejection",
	"GGIR milestone could not be read",
	"Pre-migration snapshot not taken"
]), n = /* @__PURE__ */ new Set(["error_type", "has_context"]), s = /* @__PURE__ */ new Set([
	"AggregateError",
	"Error",
	"EvalError",
	"RangeError",
	"ReferenceError",
	"SyntaxError",
	"TypeError",
	"URIError",
	"RuntimeError",
	"CompileError",
	"LinkError",
	"QuotaExceededError",
	"object",
	"string",
	"number",
	"boolean",
	"undefined"
]);
function l(e, r, t) {
	const l = function(e) {
		if (!e) return;
		const r = {};
		for (const [t, a] of Object.entries(e)) n.has(t) && ("has_context" === t && "boolean" == typeof a && (r[t] = a), "error_type" === t && "string" == typeof a && (r[t] = s.has(a) ? a : "Error"));
		return Object.keys(r).length > 0 ? r : void 0;
	}(t);
	o.push({
		timestamp: (/* @__PURE__ */ new Date()).toISOString(),
		level: e,
		message: i.has(r) ? r : "Diagnostic event",
		...l ? { context: l } : {}
	}), o.length > a && o.splice(0, o.length - a);
}
function d(e) {
	return { error_type: e instanceof Error ? e.name : typeof e };
}
export { t as n, l as r, d as t };
