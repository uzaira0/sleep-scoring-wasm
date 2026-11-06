import "./workspace-db-C0mqPCjA.js";
import "./background-jobs-CKsUPhWg.js";
const e = Object.assign({
	"../assets/models/lstm_sleep_wake.onnx": "/sleep-scoring-wasm/assets/lstm_sleep_wake-CMNVV_Rk.onnx",
	"../assets/models/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_ba.onnx": "/sleep-scoring-wasm/assets/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_ba-DjoYpGzg.onnx",
	"../assets/models/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_kappa.onnx": "/sleep-scoring-wasm/assets/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_kappa--Jn4_6Dd.onnx",
	"../assets/models/student_lstm_h64_g128_from_lstm_ba.onnx": "/sleep-scoring-wasm/assets/student_lstm_h64_g128_from_lstm_ba-BZ4I7SAE.onnx",
	"../assets/models/teacher_cnnlstm_h128_g256_ctx3_ba.onnx": "/sleep-scoring-wasm/assets/teacher_cnnlstm_h128_g256_ctx3_ba-CK3CNFjI.onnx",
	"../assets/models/teacher_cnnlstm_h128_g256_ctx3_kappa.onnx": "/sleep-scoring-wasm/assets/teacher_cnnlstm_h128_g256_ctx3_kappa-Cb_N5vbO.onnx",
	"../assets/models/teacher_lstm_h128_g256_ba.onnx": "/sleep-scoring-wasm/assets/teacher_lstm_h128_g256_ba-CbSChb-h.onnx"
}), s = e["../assets/models/lstm_sleep_wake.onnx"] ?? null, a = "lstm_sleep_wake_regular_best_20260626", t = "bcaf0f2b3f35638a324fd0058ce4cbab03d8f6574cec33a7a07e3e4e0139a908", n = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_URL, r = "configured-url", l = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_VERSION ?? a, o = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_SHA256 ?? (!n && s ? t : ""), c = {
	BASE_URL: "/sleep-scoring-wasm/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_BASE_PATH: "/sleep-scoring-wasm/",
	VITE_FORCE_LOCAL_MODE: "true"
}.VITE_LSTM_SLEEP_WAKE_ONNX_SIZE_LABEL ?? "7.4 MB model file", i = [
	{
		id: "student-cnnlstm-ba",
		assetKey: "../assets/models/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_ba.onnx",
		label: "Student CNN-LSTM",
		description: "Fast distilled CNN-LSTM weights with local context.",
		version: "student_cnnlstm_h64_g128_ctx3_ba_20260629",
		sha256: "9126c9e0995fc40d521fd2611067a5dc85a9b625d477476f3df1ead4a1709679",
		sizeLabel: "1.0 MB model file",
		defaultThreshold: .54,
		objective: "balanced_accuracy",
		thresholdPresets: [{
			id: "ba",
			label: "Balanced accuracy",
			threshold: .54,
			description: "Leakage-free BA operating point from the frontier sweep."
		}, {
			id: "kappa-like",
			label: "Higher sleep agreement",
			threshold: .36,
			description: "Lower threshold in the kappa range; use when continuity of sleep labels matters more than wake specificity."
		}],
		metricsLabel: "BA preset: AUC 0.912, BA 0.827, kappa 0.520",
		speedLabel: "CPU benchmark 43.7 ms for 2,880 epochs"
	},
	{
		id: "student-cnnlstm-kappa",
		assetKey: "../assets/models/student_cnnlstm_h64_g128_ctx3_from_cnnlstm_kappa.onnx",
		label: "Student CNN-LSTM, agreement-tuned weights",
		description: "Fast distilled CNN-LSTM weights trained for stronger sleep/wake agreement.",
		version: "student_cnnlstm_h64_g128_ctx3_kappa_20260629",
		sha256: "323c4302c3600a7b49971d339a35c0237de1f89c4aaeaf835feca0a49732eaa0",
		sizeLabel: "1.0 MB model file",
		defaultThreshold: .36,
		objective: "kappa",
		thresholdPresets: [{
			id: "kappa",
			label: "Kappa",
			threshold: .36,
			description: "Leakage-free kappa operating point from the frontier sweep."
		}, {
			id: "ba-like",
			label: "More wake-specific",
			threshold: .54,
			description: "Raises the sleep probability cut point toward the BA operating range."
		}],
		metricsLabel: "Kappa preset: AUC 0.898, BA 0.781, kappa 0.590",
		speedLabel: "CPU benchmark 43.7 ms for 2,880 epochs"
	},
	{
		id: "student-lstm",
		assetKey: "../assets/models/student_lstm_h64_g128_from_lstm_ba.onnx",
		label: "Student LSTM",
		description: "Distilled pure LSTM weights. Smaller local-browser option; BA and kappa behavior is controlled by the threshold presets.",
		version: "student_lstm_h64_g128_ba_20260629",
		sha256: "93eae5c1262cee6f2c8b3e22f34b4786761ffa172032e5f9f46c262ff7dcf719",
		sizeLabel: "1.9 MB model file",
		defaultThreshold: .51,
		objective: "balanced_accuracy",
		thresholdPresets: [{
			id: "ba",
			label: "Balanced accuracy",
			threshold: .51,
			description: "Pure-LSTM BA operating point."
		}, {
			id: "kappa",
			label: "Kappa",
			threshold: .31,
			description: "Pure-LSTM kappa operating point on the same ONNX weights."
		}],
		metricsLabel: "BA preset: AUC 0.908, BA 0.822, kappa 0.520; kappa preset: AUC 0.901, BA 0.781, kappa 0.597",
		speedLabel: "CPU benchmark 162.6 ms for 2,880 epochs"
	},
	{
		id: "teacher-lstm",
		assetKey: "../assets/models/teacher_lstm_h128_g256_ba.onnx",
		label: "Teacher LSTM",
		description: "Full pure LSTM teacher weights. BA and kappa behavior is controlled by the threshold presets.",
		version: "teacher_lstm_h128_g256_ba_20260629",
		sha256: "04028035efc7498b9fac6f170081b1870511662db45e2d2dec472290e1bd007f",
		sizeLabel: "7.4 MB model file",
		defaultThreshold: .5,
		objective: "balanced_accuracy",
		thresholdPresets: [{
			id: "ba",
			label: "Balanced accuracy",
			threshold: .5,
			description: "Teacher-LSTM BA operating point."
		}, {
			id: "kappa",
			label: "Kappa",
			threshold: .4,
			description: "Teacher-LSTM kappa operating point on the same ONNX weights."
		}],
		metricsLabel: "BA preset: AUC 0.896, BA 0.815, kappa 0.514; kappa preset: AUC 0.889, BA 0.779, kappa 0.590",
		speedLabel: "CPU benchmark 509.2 ms for 2,880 epochs"
	},
	{
		id: "teacher-cnnlstm-ba",
		assetKey: "../assets/models/teacher_cnnlstm_h128_g256_ctx3_ba.onnx",
		label: "Teacher CNN-LSTM",
		description: "Full CNN-LSTM teacher weights with local context.",
		version: "teacher_cnnlstm_h128_g256_ctx3_ba_20260629",
		sha256: "54ea0408df8383fe9233920ee0bb96b0a225df7b1235bdd1ae9950911a9afe55",
		sizeLabel: "3.9 MB model file",
		defaultThreshold: .51,
		objective: "balanced_accuracy",
		thresholdPresets: [{
			id: "ba",
			label: "Balanced accuracy",
			threshold: .51,
			description: "Leakage-free BA operating point from the frontier sweep."
		}, {
			id: "kappa-like",
			label: "Higher sleep agreement",
			threshold: .39,
			description: "Lower threshold in the kappa range; use when continuity of sleep labels matters more than wake specificity."
		}],
		metricsLabel: "BA preset: AUC 0.894, BA 0.813, kappa 0.508",
		speedLabel: "CPU benchmark 167.1 ms for 2,880 epochs"
	},
	{
		id: "teacher-cnnlstm-kappa",
		assetKey: "../assets/models/teacher_cnnlstm_h128_g256_ctx3_kappa.onnx",
		label: "Teacher CNN-LSTM, agreement-tuned weights",
		description: "Full CNN-LSTM teacher weights trained for stronger sleep/wake agreement.",
		version: "teacher_cnnlstm_h128_g256_ctx3_kappa_20260629",
		sha256: "4dad75a37ca19d098a9d8a1c83acc11115ca031d024988b3bba9f396dc33eab2",
		sizeLabel: "3.9 MB model file",
		defaultThreshold: .39,
		objective: "kappa",
		thresholdPresets: [{
			id: "kappa",
			label: "Kappa",
			threshold: .39,
			description: "Leakage-free kappa operating point from the frontier sweep."
		}, {
			id: "ba-like",
			label: "More wake-specific",
			threshold: .51,
			description: "Raises the sleep probability cut point toward the BA operating range."
		}],
		metricsLabel: "Kappa preset: AUC 0.888, BA 0.775, kappa 0.576",
		speedLabel: "CPU benchmark 167.4 ms for 2,880 epochs"
	},
	{
		id: "legacy-lstm-ba",
		assetKey: "../assets/models/lstm_sleep_wake.onnx",
		label: "Legacy bundled LSTM",
		description: "Original bundled pure LSTM export; current recommended default after public-cohort holdout validation.",
		version: a,
		sha256: t,
		sizeLabel: "7.4 MB model file",
		defaultThreshold: .5,
		objective: "legacy",
		thresholdPresets: [{
			id: "default",
			label: "Default",
			threshold: .5,
			description: "Legacy bundled-model threshold."
		}],
		metricsLabel: "Full public-cohort holdout: AUC 0.932, BA 0.842, kappa 0.598",
		speedLabel: "Pure LSTM teacher-size model",
		recommended: !0
	}
];
var d = class extends Error {
	constructor(e) {
		super(e), this.name = "LstmModelUnavailableError";
	}
};
function _() {
	const s = i.flatMap((s) => {
		const a = e[s.assetKey];
		return a ? [{
			...s,
			url: a,
			source: "bundled"
		}] : [];
	}), a = n ? {
		id: r,
		label: "Configured URL",
		description: "ONNX model configured by VITE_LSTM_SLEEP_WAKE_ONNX_URL.",
		url: n,
		version: l,
		sha256: o || null,
		sizeLabel: c,
		defaultThreshold: Number.parseFloat({
			BASE_URL: "/sleep-scoring-wasm/",
			DEV: !1,
			MODE: "production",
			PROD: !0,
			SSR: !1,
			VITE_BASE_PATH: "/sleep-scoring-wasm/",
			VITE_FORCE_LOCAL_MODE: "true"
		}.VITE_LSTM_SLEEP_WAKE_THRESHOLD ?? "0.5"),
		objective: "custom",
		thresholdPresets: [],
		source: "env"
	} : null;
	return a ? [a, ...s] : s;
}
function p(e = _()) {
	return n && n.length > 0 ? r : e.find((e) => e.recommended)?.id ?? e[0]?.id ?? null;
}
function h(e) {
	const s = _(), a = e ?? p(s);
	return (s.find((e) => e.id === a) ?? s.find((e) => e.id === p(s))) || {
		id: "unconfigured",
		label: "Unconfigured LSTM model",
		description: "No bundled or configured ONNX model was found.",
		url: null,
		version: "unconfigured",
		sha256: null,
		sizeLabel: "model file",
		defaultThreshold: .5,
		objective: "unconfigured",
		thresholdPresets: [],
		source: "unconfigured"
	};
}
function m(e) {
	if (!Number.isFinite(e)) throw new d("LSTM threshold must be a finite number between 0 and 1.");
	return Math.min(1, Math.max(0, e));
}
function u(e) {
	const s = Number.parseFloat({
		BASE_URL: "/sleep-scoring-wasm/",
		DEV: !1,
		MODE: "production",
		PROD: !0,
		SSR: !1,
		VITE_BASE_PATH: "/sleep-scoring-wasm/",
		VITE_FORCE_LOCAL_MODE: "true"
	}.VITE_LSTM_SLEEP_WAKE_THRESHOLD ?? "NaN");
	return Number.isFinite(s) ? m(s) : e.defaultThreshold;
}
function b(e) {
	return null != e ? h(e) : n && n.length > 0 ? h(r) : h();
}
async function f(e) {
	(function() {
		if (!("caches" in globalThis)) throw new d("Browser Cache Storage is unavailable, so the LSTM ONNX model cannot be cached.");
	})();
	const s = b(e), a = function(e) {
		const { url: s } = b(e);
		if (!s) throw new d("LSTM ONNX model is not configured. Add frontend/src/assets/models/lstm_sleep_wake.onnx or set VITE_LSTM_SLEEP_WAKE_ONNX_URL.");
		return s;
	}(s.id), t = await (await caches.open(function(e) {
		return `sleep-scoring-lstm-onnx-${e.version}`;
	}(s))).match(a);
	if (!t) throw new d("LSTM ONNX model has not been downloaded yet.");
	return new Uint8Array(await t.arrayBuffer());
}
function g(e) {
	const s = _(), a = e && "object" == typeof e ? e : null, t = "string" == typeof a?.modelId ? a.modelId : null, n = t && s.some((e) => e.id === t) ? t : p(s);
	if (!n) return {
		modelId: null,
		threshold: null
	};
	const r = h(n), l = a?.threshold;
	return {
		modelId: n,
		threshold: "number" == typeof l && Number.isFinite(l) ? m(l) : u(r)
	};
}
function L(e) {
	return g({
		modelId: e,
		threshold: null
	}).threshold ?? .5;
}
export { g as i, b as n, f as r, L as t };
