import { Cn as e, Ct as a, Dt as o, Et as l, O as i, Ot as t, St as s, Tn as _, Tt as n, Yt as c, bn as u, wt as d, x as p } from "./schema-B_tCLPTi.js";
import { r as v } from "./workers-ChOvAmOP.js";
import { M as m, X as C, _ as b, g as h, m as k, y as g } from "./workspace-db-C0mqPCjA.js";
import { t as f } from "./background-jobs-CKsUPhWg.js";
import { p as S } from "./sleep-period-detection-DACRcT22.js";
import { n as z, r as B } from "./preset-families-C-4e6hae.js";
C();
const w = {
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
}, y = {
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
}, A = {
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
}, x = {
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
}, M = {
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
}, j = {
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
}, I = {
	diary: [],
	hdcza: [["ggir_metric_epoch_stream"]],
	l5: [["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	selected_scorer_first_last: [["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	selected_scorer_longest_bout: [["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	quiet_bout: [["count_epoch_stream_60s", "neishabouri_count_epoch_stream_60s"]],
	event_marker: [["source_event_evidence_stream"]],
	actiware_rest_interval: [],
	none: []
}, L = ["diary"], R = {
	count_epoch_stream_60s: "has60sCounts",
	neishabouri_count_epoch_stream_60s: "has60sCounts",
	ggir_metric_epoch_stream: "hasAnglez"
};
function P(e, a) {
	if (void 0 === a) return [];
	for (const o of a) {
		if (0 === o.length) return [];
		const a = o.flatMap((e) => R[e] ?? []);
		if (a.length > 0 && !a.some((a) => !0 === e[a])) return [...new Set(a)];
	}
	return null;
}
function G(e) {
	return A[e] ?? w[e];
}
function N(e, a, o) {
	const l = function(e, a) {
		const o = x[e];
		return o ? o.capabilities[a] : y[e]?.capabilities[a];
	}(e, a);
	return "local" === o ? "implemented" === l?.localStatus : "implemented" === l?.serverStatus;
}
function O(e, a, o) {
	return void 0 !== a && a.every((a) => a.some((a) => N(e, a, o)));
}
function D(e, a) {
	const o = G(e);
	if (!o || !N(e, "source_profile_realization", a)) return;
	const l = N(e, "ggir_metric_epoch_stream", a), r = N(e, "neishabouri_count_epoch_stream_60s", a), i = N(e, "count_epoch_stream_60s", a) || r, t = N(e, "raw_acceleration_stream", a);
	return {
		sleepAlgorithms: o.sleepAlgorithms.filter((o) => function(e, a, o) {
			return function(e, a) {
				return G(e)?.sleepAlgorithms.includes(a) ?? !1;
			}(e, a) && O(e, j[a], o);
		}(e, o, a)),
		nonwearAlgorithms: o.nonwearAlgorithms.filter((o) => function(e, a, o) {
			return function(e, a) {
				return G(e)?.nonwearAlgorithms.includes(a) ?? !1;
			}(e, a) && O(e, q[a], o);
		}(e, o, a)),
		hasAnglez: o.hasAnglez && l,
		has60sCounts: o.has60sCounts && i,
		hasRawAccel: o.hasRawAccel && t,
		countMetrics: o.countMetrics.filter((e) => "neishabouri" === e ? r : "zero_crossing" !== e && i)
	};
}
function E(e) {
	return _("physical_activity_cutpoint_thresholds", e);
}
async function W(e, a = v()) {
	const o = await a.effectiveOverrideCutpoints(...(l = e, [
		l.sedentaryMax,
		l.lightMin,
		l.moderateMin,
		l.vigorousMin
	]));
	var l, r;
	return o ? {
		sedentaryMax: (r = o)[0],
		lightMin: r[1],
		moderateMin: r[2],
		vigorousMin: r[3]
	} : null;
}
const F = d, T = n, U = a, V = {
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
}, $ = Object.fromEntries(F.flatMap((e) => e.cutpoint ? [[e.method, e.cutpoint.nativeEpochSeconds]] : []));
async function Y(e, a, o) {
	const l = $[e];
	if (null == l) return null;
	const r = await f(o).cutpointEpochCompatibility(l, a), i = {
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
function H(e, a) {
	const r = F.find((a) => a.method === e), i = a ? t[a] : void 0;
	if (r && i && !l[r.requiredSignal].some((e) => i.includes(e))) {
		const a = K(e);
		return `${a.label} needs ${a.signalLabel.toLowerCase()}, which this file's source does not carry.`;
	}
	const _ = r?.cutpoint?.countScale, n = a ? o[a] : void 0;
	return _ && n && "source_declared" !== n && n !== _ ? `${K(e).label} is calibrated on ${s[_]}; this file carries ${s[n]}, which are on a different scale.` : null;
}
function J(e, a) {
	return 0 === a.length || a.some((a) => null === H(e, a));
}
function K(e) {
	return V[e];
}
function X(e, a, o) {
	const l = K(e);
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
const Q = F.filter(function(e) {
	return null != e.cutpoint;
}).map((e) => function(e) {
	return {
		...X(e.method, e.cutpoint.ruleLabel, e.cutpoint.unavailableAction),
		axis: e.cutpoint.axis,
		sedentaryMax: e.cutpoint.sedentaryMax,
		lightMin: e.cutpoint.lightMin,
		moderateMin: e.cutpoint.moderateMin,
		vigorousMin: e.cutpoint.vigorousMin,
		cutpointBands: e.cutpoint.cutpointBands,
		cutpointScaleMax: e.cutpoint.cutpointScaleMax
	};
}(e)), Z = B(z.PHYSICAL_ACTIVITY_CUTPOINTS).storageKey, ee = [
	"sedentaryMax",
	"lightMin",
	"moderateMin",
	"vigorousMin"
];
function ae(e) {
	return e === Number.POSITIVE_INFINITY ? "Infinity" : e;
}
function oe(a) {
	return "Infinity" === a ? Number.POSITIVE_INFINITY : "number" == typeof a ? e("cutpoint_counts_per_minute", a) : null;
}
function le(e) {
	const a = E(e.thresholds);
	if (null !== a) throw new Error(`Invalid cutpoint thresholds for ${e.method}: ${a}`);
	return {
		name: e.name,
		method: e.method,
		thresholds: {
			sedentaryMax: ae(e.thresholds.sedentaryMax),
			lightMin: ae(e.thresholds.lightMin),
			moderateMin: ae(e.thresholds.moderateMin),
			vigorousMin: ae(e.thresholds.vigorousMin)
		}
	};
}
function re(e) {
	if ("object" != typeof e || null === e) return null;
	const a = e;
	if ("string" != typeof a.name || 0 === a.name.trim().length) return null;
	if (!function(e) {
		return "string" == typeof e && T.includes(e);
	}(a.method)) return null;
	if ("object" != typeof a.thresholds || null === a.thresholds) return null;
	const o = a.thresholds, l = Object.fromEntries(ee.map((e) => [e, oe(o[e])]));
	if (ee.some((e) => null === l[e])) return null;
	const r = l;
	return null !== E(r) ? null : {
		name: a.name.trim(),
		method: a.method,
		thresholds: r
	};
}
function ie(e = localStorage) {
	try {
		const a = e.getItem(Z);
		if (!a) return [];
		const o = JSON.parse(a);
		return Array.isArray(o) ? o.map(re).filter((e) => null !== e) : [];
	} catch {
		return [];
	}
}
function te(e, a = localStorage) {
	a.setItem(Z, function(e) {
		return JSON.stringify(e.map(le));
	}(e));
}
function se(e, a) {
	return "boolean" === e.kind ? "boolean" == typeof a : "enum" === e.kind ? "string" == typeof a && !!e.members?.includes(a) : "number" == typeof a && Number.isFinite(a) && ("integer" !== e.kind || Number.isInteger(a)) && (void 0 === e.minimum || a >= e.minimum) && (void 0 === e.maximum || a <= e.maximum);
}
const _e = { eventmarker_adj: !0 }, ne = {
	use_saved_rest_intervals: { kind: "boolean" },
	rest_autoscore: {
		kind: "enum",
		members: [
			"off",
			"actiware",
			"screens"
		],
		enum: "ActiwareRestAutoscore"
	}
}, ce = {
	use_saved_rest_intervals: !0,
	rest_autoscore: "actiware"
};
function ue(e) {
	const a = null === e || "object" != typeof e || Array.isArray(e) ? {} : e;
	return Object.fromEntries(Object.entries(ne).map(([e, o]) => [e, se(o, a[e]) ? a[e] : ce[e]]));
}
const de = /* @__PURE__ */ new Set([p.GGIR_5S_UPLOAD, p.EPOCHS_5S_GGIR]);
function pe(e) {
	return !de.has(e?.sourceType);
}
function ve(e) {
	return Object.values(g).includes(e) ? e : u.analysis_paradigm;
}
function me(e, a) {
	const o = e?.sourceProfileId, l = o ? M[o] ?? null : null;
	return l?.paradigm === a ? l : null;
}
function Ce(e) {
	const a = e?.sourceProfileId;
	return null != a && void 0 !== M[a];
}
function be(e, a) {
	return function(e, a) {
		return null !== me(e, a);
	}(e, ve(a)) && pe(e);
}
function he(e, a, o) {
	const l = me(o, a), r = void 0 === e.nonwearDetectorsGgir ? e : {
		...e,
		nonwearDetectorsGgir: Oe(e.nonwearDetectorsGgir, o)
	};
	if (!l) return {
		...r,
		algorithm: fe(e.algorithm, o),
		placementFromSource: !1
	};
	const i = void 0 !== o?.resolvedCapabilities && !o.resolvedCapabilities.includes("device_wear_state_evidence_stream");
	return {
		...r,
		algorithm: l.sleepAlgorithm,
		periodGuider: l.periodGuider ?? e.periodGuider,
		nonwearDetectorsCounts: ge(e.nonwearDetectorsCounts, l.nonwearDetectors, i),
		placementFromSource: l.placementFromSource
	};
}
const ke = /* @__PURE__ */ new WeakMap();
function ge(e, a, o) {
	const l = `${a.join(",")}|${String(o)}`;
	let r = ke.get(e);
	r || ke.set(e, r = /* @__PURE__ */ new Map());
	const i = r.get(l);
	if (i) return i;
	const t = Object.freeze(e.filter((e) => a.includes(e) && !(o && "actiware_off_wrist" === e)));
	return r.set(l, t), t;
}
function fe(e, a) {
	const o = (l = a?.sourceType, l && de.has(l) ? c.VAN_HEES_2015 : null);
	var l;
	return null === o || i(e) ? e : o;
}
function Se(e, a) {
	return he({
		algorithm: e.currentAlgorithm,
		periodGuider: e.periodGuider,
		nonwearDetectorsCounts: e.nonwearDetectorsCounts,
		...void 0 === e.nonwearDetectorsGgir ? {} : { nonwearDetectorsGgir: e.nonwearDetectorsGgir }
	}, ve(e.analysisParadigm), a);
}
function ze(e) {
	const a = e.currentFileId;
	return {
		sourceType: e.currentFileSourceType,
		ggirBundleRevision: null == a ? void 0 : e.availableFiles.find((e) => e.id === a)?.ggirBundleRevision,
		sourceProfileId: null == a ? null : e.availableFiles.find((e) => e.id === a)?.sourceProfileId ?? null
	};
}
const Be = {
	one_per_night: (e) => "boolean" == typeof e,
	nap_detection: (e) => "boolean" == typeof e,
	min_nap_minutes: (e) => Number.isInteger(e) && e >= 15 && e <= 75,
	nap_sensitivity: (e) => Object.values(k).includes(e),
	eventmarker_adj: (e) => "boolean" == typeof e,
	actogram_start_seconds: (e) => Number.isInteger(e) && e >= 0 && e < 86400,
	sleep_onset_minutes: (e) => Number.isInteger(e) && e >= 1,
	sleep_end_minutes: (e) => Number.isInteger(e) && e >= 1,
	sleep_detection: (e) => Object.values(h).includes(e),
	sleep_onset_epochs: (e) => Number.isInteger(e) && e >= 1,
	sleep_end_epochs: (e) => Number.isInteger(e) && e >= 1,
	wake_threshold_selection: (e) => Object.values(b).includes(e),
	wake_threshold: (e) => "number" == typeof e && Number.isFinite(e) && e >= 0
}, we = Object.keys(Be), ye = [
	"one_per_night",
	"nap_detection",
	"min_nap_minutes",
	"nap_sensitivity",
	"eventmarker_adj",
	"actogram_start_seconds"
];
function Ae(e) {
	if (null == e || "object" != typeof e || Array.isArray(e)) return {};
	const a = e, o = {};
	for (const r of we) void 0 !== a[r] && Be[r](a[r]) && (o[r] = a[r]);
	const l = o.wake_threshold_selection;
	return void 0 !== l && l !== b.custom && delete o.wake_threshold, o;
}
const xe = {
	[b.low]: 20,
	[b.medium]: 40,
	[b.high]: 80
};
function Me(e, a) {
	const o = e[a];
	if (null == o) throw new Error(`The stored Actiware settings lack ${a}; import the file again.`);
	return o;
}
function je(e, a) {
	const o = Ae(a);
	if (0 === Object.keys(o).length) return e;
	const l = {
		...e,
		...o
	}, r = void 0 === o.wake_threshold_selection ? void 0 : xe[o.wake_threshold_selection];
	return void 0 !== r && (l.wake_threshold = r), void 0 !== o.actogram_start_seconds && (l.actogram_start_hour = Math.floor(o.actogram_start_seconds / 3600)), l;
}
function qe(e, a) {
	return "nap_detection" === a ? e.nap_detection ?? !1 : "min_nap_minutes" === a ? e.min_nap_minutes ?? 40 : "nap_sensitivity" === a ? e.nap_sensitivity ?? k.high : "actogram_start_seconds" === a ? function(e) {
		return e.actogram_start_seconds ?? 3600 * Me(e, "actogram_start_hour");
	}(e) : e[a];
}
function Ie(e, a) {
	return we.every((o) => qe(e, o) === qe(a, o));
}
function Le(e, a) {
	return ye.some((o) => qe(e, o) !== qe(a, o));
}
function Re(e, a, o) {
	if (null == a) return a;
	const l = _e, r = Pe(e, a, o).map((e) => [e, l[e]]);
	return {
		...Object.fromEntries(r),
		...Ae(a)
	};
}
function Pe(e, a, o) {
	if (null == a) return [];
	const l = Ae(a);
	return !o.some((e) => "rest" === e.kind) || Le(e, je(e, l)) ? Object.keys(_e).filter((e) => void 0 === l[e]) : [];
}
const Ge = Object.freeze([m.ggir_saved]), Ne = {
	[m.van_hees_2013]: Object.freeze([m.van_hees_2013]),
	[m.van_hees_2023]: Object.freeze([m.van_hees_2023])
};
function Oe(e, a) {
	const o = S(a);
	return !o && e.includes(m.ggir_saved) && a?.ggirNonwearDetector ? a.ggirNonwearDetector === m.van_hees_2013 ? Ne.van_hees_2013 : Ne.van_hees_2023 : o && e.some((e) => e === m.van_hees_2023 || e === m.van_hees_2013) ? Ge : e.every((e) => e === m.ggir_saved === o) ? e : ge(e, o ? Ge : e.filter((e) => e !== m.ggir_saved), !1);
}
const De = u.valid_day_criteria;
export { W as A, U as C, Y as D, K as E, P as F, D as I, G as L, L as M, I as N, J as O, w as P, N as R, Q as S, F as T, Ce as _, be as a, ie as b, Oe as c, me as d, ve as f, pe as g, Ie as h, Me as i, q as j, H as k, Se as l, Le as m, Pe as n, ze as o, he as p, Re as r, je as s, De as t, Ae as u, ce as v, T as w, te as x, ue as y };
