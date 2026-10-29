import "./ggir-results-types-WB8axvb-.js";
import { i as a } from "./workers-1tjevR35.js";
import { C as o, Ht as l, St as r, _n as i, _t as t, bt as s, gn as _, pn as n, v as c, vt as u, xt as d, yt as p } from "./schema-CubsPrjz.js";
import { T as v, c as m, f as C, l as b, u as h } from "./platform-ClAsKoQQ.js";
import { t as k } from "./background-jobs-gFrAYxTf.js";
import { b as g } from "./workspace-db-BRMmWdCa.js";
import { p as f } from "./sleep-period-detection-BiQXNMp7.js";
import { n as S, r as z } from "./preset-families-DGfOtUSi.js";
g();
const B = {
	actigraph_epoched_csv: {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008"
		],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: []
	},
	actigraph_raw_csv: {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"sadeh_1994_ggir",
			"cole_kripke_1992_ggir",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004",
			"van_hees_2015",
			"van_hees_hasib_2015"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"detach_nonwear"
		],
		hasAnglez: !0,
		has60sCounts: !0,
		hasRawAccel: !0,
		countMetrics: ["neishabouri", "zero_crossing"]
	},
	actlumus_txt: {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008"
		],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: [
			"pim",
			"zcm",
			"tat"
		]
	},
	acttrust_txt: {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008"
		],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: [
			"pim",
			"zcm",
			"tat"
		]
	},
	geneactiv_bin: {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"sadeh_1994_ggir",
			"cole_kripke_1992_ggir",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004",
			"van_hees_2015",
			"van_hees_hasib_2015"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"detach_nonwear",
			"van_hees_2013",
			"van_hees_2023",
			"ahmadi_2020"
		],
		hasAnglez: !0,
		has60sCounts: !0,
		hasRawAccel: !0,
		countMetrics: ["neishabouri", "zero_crossing"]
	},
	geneactiv_raw_csv: {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"sadeh_1994_ggir",
			"cole_kripke_1992_ggir",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004",
			"van_hees_2015",
			"van_hees_hasib_2015"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"detach_nonwear",
			"van_hees_2013",
			"van_hees_2023",
			"ahmadi_2020"
		],
		hasAnglez: !0,
		has60sCounts: !0,
		hasRawAccel: !0,
		countMetrics: ["neishabouri", "zero_crossing"]
	},
	gt3x_binary: {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"sadeh_1994_ggir",
			"cole_kripke_1992_ggir",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004",
			"van_hees_2015",
			"van_hees_hasib_2015"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"van_hees_2013",
			"van_hees_2023",
			"ahmadi_2020",
			"gt3x_capsense"
		],
		hasAnglez: !0,
		has60sCounts: !0,
		hasRawAccel: !0,
		countMetrics: ["neishabouri", "zero_crossing"]
	}
}, w = {
	actigraph_epoched_csv: {
		sourceProfileId: "actoglance.source.actigraph_epoched_csv.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "conditional",
				serverConditionCodes: ["optional_source_signal_present"],
				serverBlockerCodes: []
			},
			count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable", "provenance_receipt_unavailable"]
			},
			physical_activity_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable", "provenance_receipt_unavailable"]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			}
		}
	},
	actigraph_raw_csv: {
		sourceProfileId: "actoglance.source.actigraph_raw_csv.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			ggir_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			mims_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			neishabouri_count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["raw_signal_retained"],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_period_time_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	actlumus_txt: {
		sourceProfileId: "actoglance.source.condor_actlumus_txt.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			broadband_light_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			melanopic_light_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			spectral_light_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			temperature_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			}
		}
	},
	acttrust_txt: {
		sourceProfileId: "actoglance.source.condor_acttrust_txt.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			broadband_light_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			temperature_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			}
		}
	},
	geneactiv_bin: {
		sourceProfileId: "actoglance.source.geneactiv_bin.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			broadband_light_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_raw_acceleration_materialization_unavailable", "server_output_materialization_unavailable"]
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			daily_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["method_binding_unavailable"]
			},
			ggir_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			mims_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			neishabouri_count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["method_binding_unavailable", "runtime_proof_missing"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["method_binding_unavailable"]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			physical_activity_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_raw_acceleration_materialization_unavailable", "server_output_materialization_unavailable"]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_period_time_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			source_event_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			temperature_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			}
		}
	},
	geneactiv_raw_csv: {
		sourceProfileId: "actoglance.source.geneactiv_raw_csv.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			broadband_light_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_raw_acceleration_materialization_unavailable", "server_output_materialization_unavailable"]
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			daily_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"method_binding_unavailable",
					"runtime_proof_missing",
					"server_output_materialization_unavailable"
				]
			},
			ggir_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			mims_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			neishabouri_count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["raw_signal_retained"],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["method_binding_unavailable"]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			physical_activity_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_raw_acceleration_materialization_unavailable", "server_output_materialization_unavailable"]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"method_binding_unavailable",
					"runtime_proof_missing",
					"server_output_materialization_unavailable"
				]
			},
			sleep_period_time_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			source_event_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			temperature_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["optional_source_signal_present"],
				serverBlockerCodes: []
			}
		}
	},
	gt3x_binary: {
		sourceProfileId: "actoglance.source.actigraph_gt3x_binary.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			daily_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			device_wear_state_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["optional_source_signal_present"],
				serverBlockerCodes: []
			},
			ggir_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			mims_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			neishabouri_count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["method_binding_unavailable", "runtime_proof_missing"]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			physical_activity_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_raw_acceleration_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_raw_acceleration_materialization_unavailable"]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["method_binding_unavailable", "runtime_proof_missing"]
			},
			sleep_period_time_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["raw_signal_retained"],
				serverBlockerCodes: []
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			}
		}
	}
}, y = {
	"actoglance.source.actical_vendor_artifact.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.actigraph_agd.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.activinsights_vendor_artifact.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.activpal_vendor_artifact.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.axivity_cwa.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.camntech_actiwatch_awd.v1": {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012"
		],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.empatica_embraceplus_avro.v1": {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"van_hees_2013",
			"van_hees_2023",
			"ahmadi_2020"
		],
		hasAnglez: !0,
		has60sCounts: !0,
		hasRawAccel: !0,
		countMetrics: []
	},
	"actoglance.source.gaitup_vendor_artifact.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.geneactiv_epoch_csv.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !0,
		countMetrics: []
	},
	"actoglance.source.generic_consumer_wearable_table.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.generic_epoch_csv.v1": {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008"
		],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.generic_epoch_excel.v1": {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012"
		],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.generic_raw_xyz_table.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"van_hees_2013",
			"van_hees_2023",
			"ahmadi_2020"
		],
		hasAnglez: !0,
		has60sCounts: !0,
		hasRawAccel: !0,
		countMetrics: ["neishabouri", "zero_crossing"]
	},
	"actoglance.source.generic_vendor_activity_table.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.ggir_generic_epoch_csv.v1": {
		sleepAlgorithms: ["van_hees_2015", "van_hees_hasib_2015"],
		nonwearAlgorithms: [
			"ggir_saved",
			"van_hees_2013",
			"van_hees_2023"
		],
		hasAnglez: !0,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.ggir_map_csv.v1": {
		sleepAlgorithms: ["van_hees_2015", "van_hees_hasib_2015"],
		nonwearAlgorithms: [],
		hasAnglez: !0,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.ggir_metashort_csv.v1": {
		sleepAlgorithms: ["van_hees_2015", "van_hees_hasib_2015"],
		nonwearAlgorithms: [
			"ggir_saved",
			"van_hees_2013",
			"van_hees_2023"
		],
		hasAnglez: !0,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.ggir_rdata.v1": {
		sleepAlgorithms: ["van_hees_2015", "van_hees_hasib_2015"],
		nonwearAlgorithms: [
			"ggir_saved",
			"van_hees_2013",
			"van_hees_2023"
		],
		hasAnglez: !0,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.mims_metric_table.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.motionwatch_vendor_artifact.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.movisens_vendor_artifact.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.nhanes_pax_minute.v1": {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008"
		],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.nhanes_pax_raw.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"van_hees_2013",
			"van_hees_2023",
			"ahmadi_2020"
		],
		hasAnglez: !0,
		has60sCounts: !0,
		hasRawAccel: !0,
		countMetrics: ["neishabouri", "zero_crossing"]
	},
	"actoglance.source.philips_actiware_csv.v1": {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004",
			"actiware_sleep_wake"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"actiware_off_wrist"
		],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.philips_actiwatch_aw5.v1": {
		sleepAlgorithms: [
			"sadeh_1994_original",
			"sadeh_1994_actilife",
			"cole_kripke_1992_original",
			"cole_kripke_1992_actilife",
			"consensus_majority_vote",
			"oakley_1997",
			"galland_2012",
			"ucsd_scripps_2010",
			"sazonov_2004",
			"actiware_sleep_wake"
		],
		nonwearAlgorithms: [
			"choi_2011",
			"choi_2012",
			"troiano_2008",
			"actiware_off_wrist"
		],
		hasAnglez: !1,
		has60sCounts: !0,
		hasRawAccel: !1,
		countMetrics: []
	},
	"actoglance.source.shimmer_vendor_artifact.v1": {
		sleepAlgorithms: [],
		nonwearAlgorithms: [],
		hasAnglez: !1,
		has60sCounts: !1,
		hasRawAccel: !1,
		countMetrics: []
	}
}, A = {
	"actoglance.source.actical_vendor_artifact.v1": {
		sourceProfileId: "actoglance.source.actical_vendor_artifact.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.actigraph_agd.v1": {
		sourceProfileId: "actoglance.source.actigraph_agd.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"output_eligibility_unresolved",
					"server_source_profile_adapter_unavailable"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"output_eligibility_unresolved",
					"server_source_profile_adapter_unavailable"
				]
			}
		}
	},
	"actoglance.source.activinsights_vendor_artifact.v1": {
		sourceProfileId: "actoglance.source.activinsights_vendor_artifact.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.activpal_vendor_artifact.v1": {
		sourceProfileId: "actoglance.source.activpal_vendor_artifact.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.axivity_cwa.v1": {
		sourceProfileId: "actoglance.source.axivity_cwa.v1",
		capabilities: {
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"unclassified_source_semantics",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"unclassified_source_semantics",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"unclassified_source_semantics",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.camntech_actiwatch_awd.v1": {
		sourceProfileId: "actoglance.source.camntech_actiwatch_awd.v1",
		capabilities: {
			count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			temperature_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.empatica_embraceplus_avro.v1": {
		sourceProfileId: "actoglance.source.empatica_embraceplus_avro.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			ggir_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			mims_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			temperature_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"public_upload_route_rejects_format",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			}
		}
	},
	"actoglance.source.gaitup_vendor_artifact.v1": {
		sourceProfileId: "actoglance.source.gaitup_vendor_artifact.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.geneactiv_epoch_csv.v1": {
		sourceProfileId: "actoglance.source.geneactiv_epoch_csv.v1",
		capabilities: {
			broadband_light_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["source_count_lineage_unestablished"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"source_count_lineage_unestablished",
					"configured_processor_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["source_count_lineage_unestablished"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"source_count_lineage_unestablished",
					"configured_processor_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["source_count_lineage_unestablished"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"source_count_lineage_unestablished",
					"configured_processor_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["source_count_lineage_unestablished"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"source_count_lineage_unestablished",
					"configured_processor_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["source_count_lineage_unestablished"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"source_count_lineage_unestablished",
					"configured_processor_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["source_count_lineage_unestablished"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"source_count_lineage_unestablished",
					"configured_processor_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			temperature_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["source_count_lineage_unestablished"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"source_count_lineage_unestablished",
					"configured_processor_rejects_format",
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.generic_consumer_wearable_table.v1": {
		sourceProfileId: "actoglance.source.generic_consumer_wearable_table.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.generic_epoch_csv.v1": {
		sourceProfileId: "actoglance.source.generic_epoch_csv.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			}
		}
	},
	"actoglance.source.generic_epoch_excel.v1": {
		sourceProfileId: "actoglance.source.generic_epoch_excel.v1",
		capabilities: {
			count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable",
					"provenance_receipt_unavailable"
				]
			}
		}
	},
	"actoglance.source.generic_raw_xyz_table.v1": {
		sourceProfileId: "actoglance.source.generic_raw_xyz_table.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			ggir_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			mims_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			neishabouri_count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.generic_vendor_activity_table.v1": {
		sourceProfileId: "actoglance.source.generic_vendor_activity_table.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["explicit_source_mapping_required", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"parser_realization_unavailable",
					"output_eligibility_unresolved",
					"server_source_profile_adapter_unavailable"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["explicit_source_mapping_required", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"explicit_source_mapping_required",
					"parser_realization_unavailable",
					"output_eligibility_unresolved",
					"server_source_profile_adapter_unavailable"
				]
			}
		}
	},
	"actoglance.source.ggir_generic_epoch_csv.v1": {
		sourceProfileId: "actoglance.source.ggir_generic_epoch_csv.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			daily_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			ggir_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_period_time_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.ggir_map_csv.v1": {
		sourceProfileId: "actoglance.source.ggir_map_csv.v1",
		capabilities: {
			daily_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			ggir_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_period_time_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.ggir_metashort_csv.v1": {
		sourceProfileId: "actoglance.source.ggir_metashort_csv.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			daily_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			ggir_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_period_time_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			}
		}
	},
	"actoglance.source.ggir_rdata.v1": {
		sourceProfileId: "actoglance.source.ggir_rdata.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			daily_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			ggir_metric_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			physical_activity_summary_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			sleep_in_bed_epoch_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_period_time_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["parser_realization_partial", "server_output_materialization_unavailable"]
			}
		}
	},
	"actoglance.source.mims_metric_table.v1": {
		sourceProfileId: "actoglance.source.mims_metric_table.v1",
		capabilities: {
			mims_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_unavailable",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.motionwatch_vendor_artifact.v1": {
		sourceProfileId: "actoglance.source.motionwatch_vendor_artifact.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.movisens_vendor_artifact.v1": {
		sourceProfileId: "actoglance.source.movisens_vendor_artifact.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	},
	"actoglance.source.nhanes_pax_minute.v1": {
		sourceProfileId: "actoglance.source.nhanes_pax_minute.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_summary_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_analysis_window_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			sleep_wake_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.nhanes_pax_raw.v1": {
		sourceProfileId: "actoglance.source.nhanes_pax_raw.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			ggir_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			mims_metric_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			neishabouri_count_epoch_stream_60s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_classifier_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			raw_acceleration_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			},
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"parser_realization_partial",
					"explicit_source_mapping_required",
					"server_source_profile_adapter_unavailable",
					"server_output_materialization_unavailable"
				]
			}
		}
	},
	"actoglance.source.philips_actiware_csv.v1": {
		sourceProfileId: "actoglance.source.philips_actiware_csv.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			broadband_light_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["optional_source_signal_present"],
				serverBlockerCodes: []
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "conditional",
				serverConditionCodes: ["optional_source_signal_present"],
				serverBlockerCodes: []
			},
			count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			device_wear_state_evidence_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["optional_source_signal_present"],
				serverBlockerCodes: []
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			},
			sleep_wake_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_output_materialization_unavailable"]
			},
			source_event_evidence_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "conditional",
				serverConditionCodes: ["optional_source_signal_present"],
				serverBlockerCodes: []
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "implemented",
				serverConditionCodes: [],
				serverBlockerCodes: []
			}
		}
	},
	"actoglance.source.philips_actiwatch_aw5.v1": {
		sourceProfileId: "actoglance.source.philips_actiwatch_aw5.v1",
		capabilities: {
			algorithmic_nonwear_evidence_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			broadband_light_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			count_epoch_stream_30s: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			count_epoch_stream_60s: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			device_wear_state_evidence_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			physical_activity_cutpoint_epoch_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["local_source_profile_adapter_unavailable", "local_output_materialization_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			sleep_analysis_window_stream: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			sleep_wake_epoch_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			source_event_evidence_stream: {
				localStatus: "conditional",
				localConditionCodes: ["optional_source_signal_present"],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			},
			source_profile_realization: {
				localStatus: "implemented",
				localConditionCodes: [],
				localBlockerCodes: [],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: ["server_source_profile_adapter_unavailable"]
			}
		}
	},
	"actoglance.source.shimmer_vendor_artifact.v1": {
		sourceProfileId: "actoglance.source.shimmer_vendor_artifact.v1",
		capabilities: {
			source_profile_realization: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			},
			source_reported_observation_stream: {
				localStatus: "blocked",
				localConditionCodes: [],
				localBlockerCodes: ["secondary_source_not_prioritized", "local_source_profile_adapter_unavailable"],
				serverStatus: "blocked",
				serverConditionCodes: [],
				serverBlockerCodes: [
					"secondary_source_not_prioritized",
					"parser_realization_unavailable",
					"output_eligibility_unresolved"
				]
			}
		}
	}
}, x = {
	"actoglance.source.philips_actiware_csv.v1": {
		paradigm: "actiware",
		sleepAlgorithm: "actiware_sleep_wake",
		periodGuider: "actiware_rest_interval",
		nonwearDetectors: [
			"actiware_off_wrist",
			"choi_2011",
			"choi_2012"
		],
		placementFromSource: !0,
		wakeThresholdFromRecording: !0
	},
	"actoglance.source.philips_actiwatch_aw5.v1": {
		paradigm: "actiware",
		sleepAlgorithm: "actiware_sleep_wake",
		periodGuider: "actiware_rest_interval",
		nonwearDetectors: [
			"actiware_off_wrist",
			"choi_2011",
			"choi_2012"
		],
		placementFromSource: !0,
		wakeThresholdFromRecording: !0
	}
}, M = {
	actiware_sleep_wake: [["sleep_analysis_window_stream"], ["sleep_wake_epoch_stream"]],
	cole_kripke_1992_actilife: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	cole_kripke_1992_ggir: [["sleep_analysis_window_stream"], ["neishabouri_count_epoch_stream_60s"]],
	cole_kripke_1992_original: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	consensus_majority_vote: [["sleep_analysis_window_stream"]],
	galland_2012: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	oakley_1997: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	sadeh_1994_actilife: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	sadeh_1994_ggir: [["sleep_analysis_window_stream"], ["neishabouri_count_epoch_stream_60s"]],
	sadeh_1994_original: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	sazonov_2004: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	ucsd_scripps_2010: [["sleep_analysis_window_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	van_hees_2015: [
		["sleep_analysis_window_stream"],
		["ggir_metric_epoch_stream"],
		["sleep_period_time_window_stream"]
	],
	van_hees_hasib_2015: [
		["sleep_analysis_window_stream"],
		["ggir_metric_epoch_stream"],
		["sleep_in_bed_epoch_stream"]
	]
}, q = {
	actiware_off_wrist: [["device_wear_state_evidence_stream"]],
	ahmadi_2020: [["algorithmic_nonwear_evidence_stream"], []],
	choi_2011: [["algorithmic_nonwear_evidence_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	choi_2012: [["algorithmic_nonwear_evidence_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	detach_nonwear: [
		["algorithmic_nonwear_evidence_stream"],
		[],
		["temperature_epoch_stream"]
	],
	ggir_saved: [["algorithmic_nonwear_evidence_stream"]],
	gt3x_capsense: [["device_wear_state_evidence_stream"]],
	troiano_2008: [["algorithmic_nonwear_evidence_stream"], ["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	van_hees_2013: [["algorithmic_nonwear_evidence_stream"], []],
	van_hees_2023: [["algorithmic_nonwear_evidence_stream"], []]
}, j = {
	diary: [],
	hdcza: [["ggir_metric_epoch_stream"]],
	l5: [["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	selected_scorer_first_last: [["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	selected_scorer_longest_bout: [["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	quiet_bout: [["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	event_marker: [["source_event_evidence_stream"]],
	actiware_rest_interval: [],
	none: []
}, I = ["diary"], L = {
	count_epoch_stream_60s: "has60sCounts",
	neishabouri_count_epoch_stream_60s: "has60sCounts",
	ggir_metric_epoch_stream: "hasAnglez"
};
function R(e, a) {
	if (void 0 === a) return [];
	for (const o of a) {
		if (0 === o.length) return [];
		const a = o.flatMap((e) => L[e] ?? []);
		if (a.length > 0 && !a.some((a) => !0 === e[a])) return [...new Set(a)];
	}
	return null;
}
function P(e) {
	return y[e] ?? B[e];
}
function G(e, a, o) {
	const l = function(e, a) {
		const o = A[e];
		return o ? o.capabilities[a] : w[e]?.capabilities[a];
	}(e, a);
	return "local" === o ? "implemented" === l?.localStatus : "implemented" === l?.serverStatus;
}
function N(e, a, o) {
	return void 0 !== a && a.every((a) => a.some((a) => G(e, a, o)));
}
function D(e, a) {
	const o = P(e);
	if (!o || !G(e, "source_profile_realization", a)) return;
	const l = G(e, "ggir_metric_epoch_stream", a), r = G(e, "neishabouri_count_epoch_stream_60s", a), i = G(e, "count_epoch_stream_60s", a) || r, t = G(e, "raw_acceleration_stream", a);
	return {
		sleepAlgorithms: o.sleepAlgorithms.filter((o) => function(e, a, o) {
			return function(e, a) {
				return P(e)?.sleepAlgorithms.includes(a) ?? !1;
			}(e, a) && N(e, M[a], o);
		}(e, o, a)),
		nonwearAlgorithms: o.nonwearAlgorithms.filter((o) => function(e, a, o) {
			return function(e, a) {
				return P(e)?.nonwearAlgorithms.includes(a) ?? !1;
			}(e, a) && N(e, q[a], o);
		}(e, o, a)),
		hasAnglez: o.hasAnglez && l,
		has60sCounts: o.has60sCounts && i,
		hasRawAccel: o.hasRawAccel && t,
		countMetrics: o.countMetrics.filter((e) => "neishabouri" === e ? r : "zero_crossing" !== e && i)
	};
}
function O(e) {
	return i("physical_activity_cutpoint_thresholds", e);
}
async function E(e, o = a()) {
	const l = await o.effectiveOverrideCutpoints(...(r = e, [
		r.sedentaryMax,
		r.lightMin,
		r.moderateMin,
		r.vigorousMin
	]));
	var r, i;
	return l ? {
		sedentaryMax: (i = l)[0],
		lightMin: i[1],
		moderateMin: i[2],
		vigorousMin: i[3]
	} : null;
}
const W = u, U = p, T = {
	ggir_enmo: {
		method: "ggir_enmo",
		label: "GGIR ENMO thresholds",
		family: "daily_summary",
		requiredSignal: "ggir_daily_summary",
		signalLabel: "GGIR daily summary",
		outcomeLabel: "Stored sedentary, LPA, and MVPA daily minutes",
		selectionGuidance: "Use when GGIR already produced daily intensity totals and browser import should preserve those summaries.",
		evidenceLabel: "Imported daily totals from an upstream GGIR-compatible summary.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	freedson_adult_1952: {
		method: "freedson_adult_1952",
		label: "Freedson adult vertical-axis cutpoints",
		family: "count_cutpoint",
		requiredSignal: "axis_y_counts",
		signalLabel: "Y-axis counts",
		outcomeLabel: "Sedentary, light, moderate, and vigorous thresholds",
		selectionGuidance: "Use only when the source signal and study assumptions match adult vertical-axis count calibration.",
		evidenceLabel: "Adult vertical-axis count thresholds on ActiGraph-style counts/min.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	sasaki_vm_2011: {
		method: "sasaki_vm_2011",
		label: "Sasaki vector-magnitude cutpoints",
		family: "count_cutpoint",
		requiredSignal: "vector_magnitude_counts",
		signalLabel: "Vector magnitude counts",
		outcomeLabel: "Sedentary, light, moderate, and vigorous thresholds",
		selectionGuidance: "Use for adult vector-magnitude count summaries, not pediatric wrist-specific interpretation.",
		evidenceLabel: "Adult vector-magnitude count thresholds on counts/min.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	chandler_wrist_va_8_12_2015: {
		method: "chandler_wrist_va_8_12_2015",
		label: "Chandler youth wrist vertical-axis cutpoints",
		family: "count_cutpoint",
		requiredSignal: "axis_y_counts",
		signalLabel: "Y-axis counts",
		outcomeLabel: "Non-dominant wrist vertical-axis ROC thresholds",
		selectionGuidance: "Use for school-age wrist projects when Chandler vertical-axis counts are the study contract.",
		evidenceLabel: "Chandler ROC vertical-axis wrist bands converted from 5 s thresholds to counts/min.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	johansson_preschool_wrist_vm_2016: {
		method: "johansson_preschool_wrist_vm_2016",
		label: "Johansson preschool wrist vector-magnitude cutpoints",
		family: "count_cutpoint",
		requiredSignal: "vector_magnitude_counts",
		signalLabel: "Vector magnitude counts",
		outcomeLabel: "Sedentary, light, and MVPA thresholds",
		selectionGuidance: "Use only as a compatibility cutpoint option when the actimetric-compatible preschool classifier is unavailable and the study explicitly accepts threshold-based wrist limits.",
		evidenceLabel: "Preschool wrist vector-magnitude cutpoints converted to counts/min for comparable threshold display.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	preschool_free_living_rf_3_5: {
		method: "preschool_free_living_rf_3_5",
		label: "actimetric preschool wrist RF lag-lead classifier",
		family: "backend_classifier",
		requiredSignal: "preschool_activity_class_epochs",
		signalLabel: "actimetric preschool class epochs",
		outcomeLabel: "actimetric classes: sedentary, lightGames, moderatetovigorousGames, walk, run",
		selectionGuidance: "Recommended first for exact 3-5 year-old wrist studies when actours/WASM provides actimetric-compatible lag-lead 15 s class epochs.",
		evidenceLabel: "Apache-licensed actimetric route: Preschool Wrist Random Forest Free Living Lag-Lead uses actimetricModels::PS.RF.FL.Wrist15.LagLead with 15 s epochs.",
		statusWhenMissing: "backend_required",
		backendDependency: "Requires actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs."
	},
	chandler_wrist_vm_8_12_2015: {
		method: "chandler_wrist_vm_8_12_2015",
		label: "Chandler youth wrist vector-magnitude cutpoints",
		family: "count_cutpoint",
		requiredSignal: "vector_magnitude_counts",
		signalLabel: "Vector magnitude counts",
		outcomeLabel: "Sedentary, light, moderate, and vigorous thresholds",
		selectionGuidance: "Use for school-age wrist vector-magnitude count projects when full intensity bands are needed.",
		evidenceLabel: "Chandler wrist vector-magnitude intensity bands converted from 5 s thresholds to counts/min.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	chandler_wrist_sedentary_5_11_2018: {
		method: "chandler_wrist_sedentary_5_11_2018",
		label: "Chandler 5-11 non-dominant wrist VM sedentary threshold",
		family: "count_cutpoint",
		requiredSignal: "vector_magnitude_counts",
		signalLabel: "Vector magnitude counts",
		outcomeLabel: "Non-dominant wrist sedentary versus non-sedentary threshold",
		selectionGuidance: "Use when the primary pediatric wrist question is sedentary versus non-sedentary time and VM counts are available from the non-dominant wrist.",
		evidenceLabel: "Chandler 5-11 wrist sedentary threshold converted from 5 s vector-magnitude counts.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	chandler_wrist_axis1_sedentary_5_11_2018: {
		method: "chandler_wrist_axis1_sedentary_5_11_2018",
		label: "Chandler 5-11 non-dominant wrist axis-1 sedentary threshold",
		family: "count_cutpoint",
		requiredSignal: "axis_y_counts",
		signalLabel: "Y-axis counts",
		outcomeLabel: "Non-dominant wrist axis-1 sedentary versus non-sedentary threshold",
		selectionGuidance: "Use for 5-11 year-old non-dominant wrist ActiGraph axis-1 counts when sedentary time is the primary endpoint.",
		evidenceLabel: "Chandler 5-11 non-dominant wrist axis-1 threshold converted from 5 s counts to counts/min.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	chandler_wrist_axis1_sedentary_dominant_5_11_2018: {
		method: "chandler_wrist_axis1_sedentary_dominant_5_11_2018",
		label: "Chandler 5-11 dominant wrist axis-1 sedentary threshold",
		family: "count_cutpoint",
		requiredSignal: "axis_y_counts",
		signalLabel: "Y-axis counts",
		outcomeLabel: "Dominant wrist axis-1 sedentary versus non-sedentary threshold",
		selectionGuidance: "Use only when the study intentionally scores dominant-wrist axis-1 counts.",
		evidenceLabel: "Chandler 5-11 dominant wrist axis-1 threshold converted from 5 s counts to counts/min.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	chandler_wrist_vm_sedentary_dominant_5_11_2018: {
		method: "chandler_wrist_vm_sedentary_dominant_5_11_2018",
		label: "Chandler 5-11 dominant wrist VM sedentary threshold",
		family: "count_cutpoint",
		requiredSignal: "vector_magnitude_counts",
		signalLabel: "Vector magnitude counts",
		outcomeLabel: "Dominant wrist vector-magnitude sedentary versus non-sedentary threshold",
		selectionGuidance: "Use only when the study intentionally scores dominant-wrist vector-magnitude counts.",
		evidenceLabel: "Chandler 5-11 dominant wrist VM threshold converted from 5 s counts to counts/min.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	evenson_children_2008: {
		method: "evenson_children_2008",
		label: "Evenson children vertical-axis cutpoints",
		family: "count_cutpoint",
		requiredSignal: "axis_y_counts",
		signalLabel: "Y-axis counts",
		outcomeLabel: "Sedentary, light, moderate, and vigorous thresholds",
		selectionGuidance: "Use for child/youth vertical-axis count studies that adopt the Evenson 2008 calibration; validated originally at 15 s epochs.",
		evidenceLabel: "Evenson 2008 children vertical-axis 15 s cut-points (sed <=25, light 26-573, moderate 574-1002, vigorous >=1003 counts/15 s) converted x4 to counts/min.",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	neil_sztramko_actiwatch2_adult_2017: {
		method: "neil_sztramko_actiwatch2_adult_2017",
		label: "Neil-Sztramko Actiwatch 2 adult cutpoints",
		family: "count_cutpoint",
		requiredSignal: "axis_y_counts",
		signalLabel: "Actiwatch activity counts",
		outcomeLabel: "Sedentary, light, moderate, and vigorous thresholds",
		selectionGuidance: "Use for adult Philips Actiwatch 2 wrist data; calibrated in adult women (40 +/- 15 years).",
		evidenceLabel: "Neil-Sztramko 2017, Physiol Behav 173:95-100: Actiwatch 2 sedentary <145, moderate >=274, vigorous >=597 counts/min (30 women, ROC thresholds).",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	kemp_actiwatch2_adult_2020: {
		method: "kemp_actiwatch2_adult_2020",
		label: "Kemp Actiwatch 2 adult cutpoints",
		family: "count_cutpoint",
		requiredSignal: "axis_y_counts",
		signalLabel: "Actiwatch activity counts",
		outcomeLabel: "Sedentary, light, moderate, and vigorous thresholds",
		selectionGuidance: "Use for adult Philips Actiwatch 2 wrist data from men and women; the moderate boundary was weakly characterized.",
		evidenceLabel: "Kemp 2020, Physiol Meas 41(8):085001: Actiwatch 2 sedentary <256, moderate >=418, vigorous >=720 counts/min (28 men, 22 women, ROC cut-points).",
		statusWhenMissing: "needs_signal",
		backendDependency: null
	},
	hildebrand_enmo_wrist_2014: {
		method: "hildebrand_enmo_wrist_2014",
		label: "Hildebrand wrist ENMO (mg) cut-points",
		family: "enmo_cutpoint",
		requiredSignal: "enmo_mg_epochs",
		signalLabel: "ENMO (mg) epochs",
		outcomeLabel: "ENMO mg thresholds: moderate >=201 mg, vigorous >=707 mg (light near ~45 mg)",
		selectionGuidance: "Use when a calibrated ENMO (mg) epoch stream is available from the raw/GGIR pipeline; the browser count pipeline cannot produce ENMO mg, so this method waits on that signal.",
		evidenceLabel: "Hildebrand 2014 non-dominant wrist ENMO cut-points (Med Sci Sports Exerc 2014;46(9):1816-1824): MVPA >=201 mg, vigorous >=707 mg.",
		statusWhenMissing: "needs_signal",
		backendDependency: "Requires a raw/GGIR pipeline (actours/WASM) that emits calibrated ENMO (mg) epoch values."
	},
	mims: {
		method: "mims",
		label: "MIMS unit volume",
		family: "backend_volume",
		requiredSignal: "mims_epoch_values",
		signalLabel: "MIMS_UNIT epochs",
		outcomeLabel: "Volume summary; intensity cutpoints are not applied yet",
		selectionGuidance: "Use when actours/WASM has computed or preserved MIMS_UNIT epochs for volume-style scoring.",
		evidenceLabel: "MIMS_UNIT epoch values supplied by the injected actours/WASM backend.",
		statusWhenMissing: "backend_required",
		backendDependency: "Requires an actours/WASM build that stores MIMS_UNIT epochs."
	}
}, F = (Object.values(T).filter((e) => "count_cutpoint" === e.family).map((e) => e.method), Object.fromEntries(W.flatMap((e) => e.cutpoint ? [[e.method, e.cutpoint.nativeEpochSeconds]] : [])));
async function V(e, a, o) {
	const l = F[e];
	if (null == l) return null;
	const r = await k(o).cutpointEpochCompatibility(l, a), i = {
		method: e,
		nativeEpochSeconds: l,
		fileEpochSeconds: a,
		compatible: r.compatible
	};
	if (!r.readable) return {
		...i,
		severity: "warn",
		message: `Unknown or invalid file epoch length; ${String(l)}s-calibrated cut-point counts cannot be verified.`
	};
	if (r.compatible) return {
		...i,
		severity: "ok",
		message: null
	};
	const t = (r.countsPerMinuteScale ?? NaN).toFixed(2);
	return {
		...i,
		severity: "warn",
		message: `Cut-point calibrated at ${String(l)}s epochs but this file uses ${String(a)}s epochs. Counts are linearly rescaled (x${t} to counts/min), which is not equivalent to native-epoch calibration; interpret intensity minutes with caution.`
	};
}
function $(e, a) {
	const o = W.find((a) => a.method === e), l = a ? r[a] : void 0;
	if (o && l && !s[o.requiredSignal].some((e) => l.includes(e))) {
		const a = H(e);
		return `${a.label} needs ${a.signalLabel.toLowerCase()}, which this file's source does not carry.`;
	}
	const i = o?.cutpoint?.countScale, _ = a ? d[a] : void 0;
	return i && _ && "source_declared" !== _ && _ !== i ? `${H(e).label} is calibrated on ${t[i]}; this file carries ${t[_]}, which are on a different scale.` : null;
}
function Y(e, a) {
	return 0 === a.length || a.some((a) => null === $(e, a));
}
function H(e) {
	return T[e];
}
function J(e, a, o) {
	const l = H(e);
	return {
		method: e,
		label: l.label,
		requiredSignal: l.requiredSignal,
		sourceLabel: l.signalLabel,
		ruleLabel: a,
		unavailableAction: o,
		unavailableStatus: l.statusWhenMissing
	};
}
const K = W.filter(function(e) {
	return null != e.cutpoint;
}).map((e) => function(e) {
	return {
		...J(e.method, e.cutpoint.ruleLabel, e.cutpoint.unavailableAction),
		axis: e.cutpoint.axis,
		sedentaryMax: e.cutpoint.sedentaryMax,
		lightMin: e.cutpoint.lightMin,
		moderateMin: e.cutpoint.moderateMin,
		vigorousMin: e.cutpoint.vigorousMin,
		cutpointBands: e.cutpoint.cutpointBands,
		cutpointScaleMax: e.cutpoint.cutpointScaleMax
	};
}(e)), Q = z(S.PHYSICAL_ACTIVITY_CUTPOINTS).storageKey, X = [
	"sedentaryMax",
	"lightMin",
	"moderateMin",
	"vigorousMin"
];
function Z(e) {
	return e === Number.POSITIVE_INFINITY ? "Infinity" : e;
}
function ee(e) {
	return "Infinity" === e ? Number.POSITIVE_INFINITY : "number" == typeof e ? _("cutpoint_counts_per_minute", e) : null;
}
function ae(e) {
	const a = O(e.thresholds);
	if (null !== a) throw new Error(`Invalid cutpoint thresholds for ${e.method}: ${a}`);
	return {
		name: e.name,
		method: e.method,
		thresholds: {
			sedentaryMax: Z(e.thresholds.sedentaryMax),
			lightMin: Z(e.thresholds.lightMin),
			moderateMin: Z(e.thresholds.moderateMin),
			vigorousMin: Z(e.thresholds.vigorousMin)
		}
	};
}
function oe(e) {
	if ("object" != typeof e || null === e) return null;
	const a = e;
	if ("string" != typeof a.name || 0 === a.name.trim().length) return null;
	if (!function(e) {
		return "string" == typeof e && U.includes(e);
	}(a.method)) return null;
	if ("object" != typeof a.thresholds || null === a.thresholds) return null;
	const o = a.thresholds, l = Object.fromEntries(X.map((e) => [e, ee(o[e])]));
	if (X.some((e) => null === l[e])) return null;
	const r = l;
	return null !== O(r) ? null : {
		name: a.name.trim(),
		method: a.method,
		thresholds: r
	};
}
function le(e = localStorage) {
	try {
		const a = e.getItem(Q);
		if (!a) return [];
		const o = JSON.parse(a);
		return Array.isArray(o) ? o.map(oe).filter((e) => null !== e) : [];
	} catch {
		return [];
	}
}
function re(e, a = localStorage) {
	a.setItem(Q, function(e) {
		return JSON.stringify(e.map(ae));
	}(e));
}
const ie = /* @__PURE__ */ new Set([c.GGIR_5S_UPLOAD, c.EPOCHS_5S_GGIR]);
function te(e) {
	return !ie.has(e?.sourceType);
}
function se(e) {
	return Object.values(C).includes(e) ? e : n.analysis_paradigm;
}
function _e(e, a) {
	const o = e?.sourceProfileId, l = o ? x[o] ?? null : null;
	return l?.paradigm === a ? l : null;
}
function ne(e) {
	const a = e?.sourceProfileId;
	return null != a && void 0 !== x[a];
}
function ce(e, a, o) {
	const l = _e(o, a), r = void 0 === e.nonwearDetectorsGgir ? e : {
		...e,
		nonwearDetectorsGgir: Ae(e.nonwearDetectorsGgir, o)
	};
	if (!l) return {
		...r,
		algorithm: pe(e.algorithm, o),
		placementFromSource: !1
	};
	const i = void 0 !== o?.resolvedCapabilities && !o.resolvedCapabilities.includes("device_wear_state_evidence_stream");
	return {
		...r,
		algorithm: l.sleepAlgorithm,
		periodGuider: l.periodGuider ?? e.periodGuider,
		nonwearDetectorsCounts: de(e.nonwearDetectorsCounts, l.nonwearDetectors, i),
		placementFromSource: l.placementFromSource
	};
}
const ue = /* @__PURE__ */ new WeakMap();
function de(e, a, o) {
	const l = `${a.join(",")}|${String(o)}`;
	let r = ue.get(e);
	r || ue.set(e, r = /* @__PURE__ */ new Map());
	const i = r.get(l);
	if (i) return i;
	const t = Object.freeze(e.filter((e) => a.includes(e) && !(o && "actiware_off_wrist" === e)));
	return r.set(l, t), t;
}
function pe(e, a) {
	const r = (i = a?.sourceType, i && ie.has(i) ? l.VAN_HEES_2015 : null);
	var i;
	return null === r || o(e) ? e : r;
}
function ve(e, a) {
	return ce({
		algorithm: e.currentAlgorithm,
		periodGuider: e.periodGuider,
		nonwearDetectorsCounts: e.nonwearDetectorsCounts,
		...void 0 === e.nonwearDetectorsGgir ? {} : { nonwearDetectorsGgir: e.nonwearDetectorsGgir }
	}, se(e.analysisParadigm), a);
}
const me = {
	one_per_night: (e) => "boolean" == typeof e,
	nap_detection: (e) => "boolean" == typeof e,
	min_nap_minutes: (e) => Number.isInteger(e) && e >= 15 && e <= 75,
	nap_sensitivity: (e) => Object.values(m).includes(e),
	eventmarker_adj: (e) => "boolean" == typeof e,
	actogram_start_seconds: (e) => Number.isInteger(e) && e >= 0 && e < 86400,
	sleep_onset_minutes: (e) => Number.isInteger(e) && e >= 1,
	sleep_end_minutes: (e) => Number.isInteger(e) && e >= 1,
	sleep_detection: (e) => Object.values(b).includes(e),
	sleep_onset_epochs: (e) => Number.isInteger(e) && e >= 1,
	sleep_end_epochs: (e) => Number.isInteger(e) && e >= 1,
	wake_threshold_selection: (e) => Object.values(h).includes(e),
	wake_threshold: (e) => "number" == typeof e && Number.isFinite(e) && e >= 0
}, Ce = Object.keys(me), be = [
	"one_per_night",
	"nap_detection",
	"min_nap_minutes",
	"nap_sensitivity",
	"eventmarker_adj",
	"actogram_start_seconds"
];
function he(e) {
	if (null == e || "object" != typeof e || Array.isArray(e)) return {};
	const a = e, o = {};
	for (const r of Ce) void 0 !== a[r] && me[r](a[r]) && (o[r] = a[r]);
	const l = o.wake_threshold_selection;
	return void 0 !== l && l !== h.custom && delete o.wake_threshold, o;
}
const ke = {
	[h.low]: 20,
	[h.medium]: 40,
	[h.high]: 80
};
function ge(e, a) {
	const o = e[a];
	if (null == o) throw new Error(`The stored Actiware settings lack ${a}; import the file again.`);
	return o;
}
function fe(e, a) {
	const o = he(a);
	if (0 === Object.keys(o).length) return e;
	const l = {
		...e,
		...o
	}, r = void 0 === o.wake_threshold_selection ? void 0 : ke[o.wake_threshold_selection];
	return void 0 !== r && (l.wake_threshold = r), void 0 !== o.actogram_start_seconds && (l.actogram_start_hour = Math.floor(o.actogram_start_seconds / 3600)), l;
}
function Se(e, a) {
	return "nap_detection" === a ? e.nap_detection ?? !1 : "min_nap_minutes" === a ? e.min_nap_minutes ?? 40 : "nap_sensitivity" === a ? e.nap_sensitivity ?? m.high : "actogram_start_seconds" === a ? function(e) {
		return e.actogram_start_seconds ?? 3600 * ge(e, "actogram_start_hour");
	}(e) : e[a];
}
function ze(e, a) {
	return Ce.every((o) => Se(e, o) === Se(a, o));
}
function Be(e, a) {
	return be.some((o) => Se(e, o) !== Se(a, o));
}
const we = Object.freeze([v.ggir_saved]), ye = {
	[v.van_hees_2013]: Object.freeze([v.van_hees_2013]),
	[v.van_hees_2023]: Object.freeze([v.van_hees_2023])
};
function Ae(e, a) {
	const o = f(a);
	return !o && e.includes(v.ggir_saved) && a?.ggirNonwearDetector ? a.ggirNonwearDetector === v.van_hees_2013 ? ye.van_hees_2013 : ye.van_hees_2023 : o && e.some((e) => e === v.van_hees_2023 || e === v.van_hees_2013) ? we : e.every((e) => e === v.ggir_saved === o) ? e : de(e, o ? we : e.filter((e) => e !== v.ggir_saved), !1);
}
const xe = n.valid_day_criteria;
export { G as A, q as C, R as D, B as E, D as O, E as S, j as T, W as _, ve as a, Y as b, se as c, ze as d, te as f, K as g, re as h, Ae as i, P as k, ce as l, le as m, ge as n, he as o, ne as p, fe as r, _e as s, xe as t, Be as u, H as v, I as w, $ as x, V as y };
