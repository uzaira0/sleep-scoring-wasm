import { lt as i, n as e } from "./background-jobs-yM6RprLt.js";
import { E as a, N as t, f as n, h as l, k as o } from "./db-BaoT6107.js";
import { w as s } from "./local-nonwear-unified-SDc48L9O.js";
import { a as c, c as r, n as p, o as d, r as u, s as m, t as _ } from "./local-export-worker-Dr3WV7Ny.js";
import { a as h, n as g, o as y, r as b, s as v, t as f } from "./physical-activity-days-DaO8MJOO.js";
import { r as w } from "./physical-activity-classifier-output-DjY9wyAt.js";
import { t as x } from "./cutpoint-edit-DFf9eMI0.js";
import { n as M, t as k } from "./physical-activity-file-store-HgsXEVnk.js";
import { dt as I, lt as V, ut as D } from "./ggir-import-BO12lnXe.js";
const S = {
	ahmadi_2020: "actoglance.applicability.nonwear.ahmadi_2020.v1",
	chandler_wrist_axis1_sedentary_5_11_2018: "actoglance.applicability.chandler_wrist_5_11_nondominant",
	chandler_wrist_axis1_sedentary_dominant_5_11_2018: "actoglance.applicability.chandler_wrist_5_11_dominant",
	chandler_wrist_sedentary_5_11_2018: "actoglance.applicability.chandler_wrist_5_11_nondominant",
	chandler_wrist_va_8_12_2015: "actoglance.applicability.chandler_wrist_8_12_nondominant",
	chandler_wrist_vm_8_12_2015: "actoglance.applicability.chandler_wrist_8_12_nondominant",
	chandler_wrist_vm_sedentary_dominant_5_11_2018: "actoglance.applicability.chandler_wrist_5_11_dominant",
	choi_2011: "actoglance.applicability.nonwear.choi_2011.v1",
	choi_2012: "actoglance.applicability.nonwear.choi_2012.v1",
	cole_kripke_1992: "actoglance.applicability.sleep.cole_kripke_1992.v1",
	cole_kripke_1992_actilife: "actoglance.applicability.sleep.cole_kripke_1992.v1",
	cole_kripke_1992_ggir: "actoglance.applicability.sleep.cole_kripke_1992.v1",
	cole_kripke_1992_original: "actoglance.applicability.sleep.cole_kripke_1992.v1",
	evenson_children_2008: "actoglance.applicability.evenson_children_5_8_hip_axis1",
	freedson_adult_1952: "actoglance.applicability.freedson_adult_waist_axis1_compatibility",
	johansson_preschool_wrist_vm_2016: "actoglance.applicability.johansson_preschool_wrist_4_year_nondominant",
	kemp_actiwatch2_adult_2020: "actoglance.applicability.kemp_actiwatch2_adult_2020_wrist",
	lstm_sleep_wake: "actoglance.applicability.sleep.lstm_sleep_wake.v1",
	neil_sztramko_actiwatch2_adult_2017: "actoglance.applicability.neil_sztramko_actiwatch2_adult_2017_wrist",
	oakley_1997: "actoglance.applicability.sleep.oakley_1997.v1",
	pate_preschool_3_5_axis1_2006: "actoglance.applicability.pate_preschool_3_5_right_hip_axis1",
	preschool_free_living_rf_3_5: "actoglance.applicability.preschool_rf_3_5_nondominant_wrist",
	sadeh_1994: "actoglance.applicability.sleep.sadeh_1994.v1",
	sadeh_1994_actilife: "actoglance.applicability.sleep.sadeh_1994.v1",
	sadeh_1994_ggir: "actoglance.applicability.sleep.sadeh_1994.v1",
	sadeh_1994_original: "actoglance.applicability.sleep.sadeh_1994.v1",
	sasaki_vm_2011: "actoglance.applicability.sasaki_adult_waist_vm_compatibility",
	sazonov_2004: "actoglance.applicability.sleep.sazonov_2004.v1",
	troiano_2008: "actoglance.applicability.nonwear.troiano_2008.v1",
	ucsd_scripps_2010: "actoglance.applicability.sleep.ucsd_scripps_2010.v1",
	van_hees_2013: "actoglance.applicability.nonwear.van_hees_2013.v1",
	van_hees_2015: "actoglance.applicability.sleep.van_hees_2015.v1",
	van_hees_hasib_2015: "actoglance.applicability.sleep.van_hees_hasib_2015.v1"
}, q = "inapplicable_to_source_profile", R = {
	"actoglance.applicability.chandler_wrist_5_11_dominant.age_years": {
		conditionId: "actoglance.applicability.chandler_wrist_5_11_dominant.age_years",
		dimension: "age_years",
		expectedValues: [],
		maximumValue: 11,
		minimumValue: 5,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "inclusive_range",
		rationale: "Children aged 5 through 11 years in the Chandler sedentary-behavior calibration study.",
		sourceReference: null
	},
	"actoglance.applicability.chandler_wrist_5_11_dominant.laterality": {
		conditionId: "actoglance.applicability.chandler_wrist_5_11_dominant.laterality",
		dimension: "laterality",
		expectedValues: ["dominant"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The calibration protocol is the dominant side; the other side is the same wear site with more or less movement in it.",
		sourceReference: null
	},
	"actoglance.applicability.chandler_wrist_5_11_dominant.placement": {
		conditionId: "actoglance.applicability.chandler_wrist_5_11_dominant.placement",
		dimension: "placement",
		expectedValues: ["wrist"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "Calibrated on a wrist-worn device; the thresholds are site-specific counts.",
		sourceReference: null
	},
	"actoglance.applicability.chandler_wrist_5_11_nondominant.age_years": {
		conditionId: "actoglance.applicability.chandler_wrist_5_11_nondominant.age_years",
		dimension: "age_years",
		expectedValues: [],
		maximumValue: 11,
		minimumValue: 5,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "inclusive_range",
		rationale: "Children aged 5 through 11 years in the Chandler sedentary-behavior calibration study.",
		sourceReference: null
	},
	"actoglance.applicability.chandler_wrist_5_11_nondominant.laterality": {
		conditionId: "actoglance.applicability.chandler_wrist_5_11_nondominant.laterality",
		dimension: "laterality",
		expectedValues: ["non_dominant"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The calibration protocol is the non_dominant side; the other side is the same wear site with more or less movement in it.",
		sourceReference: null
	},
	"actoglance.applicability.chandler_wrist_5_11_nondominant.placement": {
		conditionId: "actoglance.applicability.chandler_wrist_5_11_nondominant.placement",
		dimension: "placement",
		expectedValues: ["wrist"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "Calibrated on a wrist-worn device; the thresholds are site-specific counts.",
		sourceReference: null
	},
	"actoglance.applicability.chandler_wrist_8_12_nondominant.age_years": {
		conditionId: "actoglance.applicability.chandler_wrist_8_12_nondominant.age_years",
		dimension: "age_years",
		expectedValues: [],
		maximumValue: 12,
		minimumValue: 8,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "inclusive_range",
		rationale: "Children aged 8 through 12 years in the Chandler calibration study.",
		sourceReference: null
	},
	"actoglance.applicability.chandler_wrist_8_12_nondominant.laterality": {
		conditionId: "actoglance.applicability.chandler_wrist_8_12_nondominant.laterality",
		dimension: "laterality",
		expectedValues: ["non_dominant"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The calibration protocol is the non_dominant side; the other side is the same wear site with more or less movement in it.",
		sourceReference: null
	},
	"actoglance.applicability.chandler_wrist_8_12_nondominant.placement": {
		conditionId: "actoglance.applicability.chandler_wrist_8_12_nondominant.placement",
		dimension: "placement",
		expectedValues: ["wrist"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "Calibrated on a wrist-worn device; the thresholds are site-specific counts.",
		sourceReference: null
	},
	"actoglance.applicability.evenson_children_5_8_hip_axis1.age_years": {
		conditionId: "actoglance.applicability.evenson_children_5_8_hip_axis1.age_years",
		dimension: "age_years",
		expectedValues: [],
		maximumValue: 8,
		minimumValue: 5,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "inclusive_range",
		rationale: "Children aged 5 through 8 years in the Evenson calibration study.",
		sourceReference: null
	},
	"actoglance.applicability.evenson_children_5_8_hip_axis1.laterality": {
		conditionId: "actoglance.applicability.evenson_children_5_8_hip_axis1.laterality",
		dimension: "laterality",
		expectedValues: ["right"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The calibration protocol is the right side; the other side is the same wear site with more or less movement in it.",
		sourceReference: null
	},
	"actoglance.applicability.evenson_children_5_8_hip_axis1.placement": {
		conditionId: "actoglance.applicability.evenson_children_5_8_hip_axis1.placement",
		dimension: "placement",
		expectedValues: ["hip"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "Calibrated on a hip-worn device; the thresholds are site-specific counts.",
		sourceReference: null
	},
	"actoglance.applicability.freedson_adult_waist_axis1_compatibility.placement": {
		conditionId: "actoglance.applicability.freedson_adult_waist_axis1_compatibility.placement",
		dimension: "placement",
		expectedValues: ["waist"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "Calibrated on a waist-worn device; the thresholds are site-specific counts.",
		sourceReference: null
	},
	"actoglance.applicability.johansson_preschool_wrist_4_year_nondominant.laterality": {
		conditionId: "actoglance.applicability.johansson_preschool_wrist_4_year_nondominant.laterality",
		dimension: "laterality",
		expectedValues: ["non_dominant"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The calibration protocol is the non_dominant side; the other side is the same wear site with more or less movement in it.",
		sourceReference: null
	},
	"actoglance.applicability.johansson_preschool_wrist_4_year_nondominant.placement": {
		conditionId: "actoglance.applicability.johansson_preschool_wrist_4_year_nondominant.placement",
		dimension: "placement",
		expectedValues: ["wrist"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "Calibrated on a wrist-worn device; the thresholds are site-specific counts.",
		sourceReference: null
	},
	"actoglance.applicability.kemp_actiwatch2_adult_2020_wrist.laterality": {
		conditionId: "actoglance.applicability.kemp_actiwatch2_adult_2020_wrist.laterality",
		dimension: "laterality",
		expectedValues: ["unknown"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The calibration protocol is the unknown side; the other side is the same wear site with more or less movement in it.",
		sourceReference: null
	},
	"actoglance.applicability.kemp_actiwatch2_adult_2020_wrist.placement": {
		conditionId: "actoglance.applicability.kemp_actiwatch2_adult_2020_wrist.placement",
		dimension: "placement",
		expectedValues: ["wrist"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "Calibrated on a wrist-worn device; the thresholds are site-specific counts.",
		sourceReference: null
	},
	"actoglance.applicability.neil_sztramko_actiwatch2_adult_2017_wrist.laterality": {
		conditionId: "actoglance.applicability.neil_sztramko_actiwatch2_adult_2017_wrist.laterality",
		dimension: "laterality",
		expectedValues: ["unknown"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The calibration protocol is the unknown side; the other side is the same wear site with more or less movement in it.",
		sourceReference: null
	},
	"actoglance.applicability.neil_sztramko_actiwatch2_adult_2017_wrist.placement": {
		conditionId: "actoglance.applicability.neil_sztramko_actiwatch2_adult_2017_wrist.placement",
		dimension: "placement",
		expectedValues: ["wrist"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "Calibrated on a wrist-worn device; the thresholds are site-specific counts.",
		sourceReference: null
	},
	"actoglance.applicability.pate_preschool_3_5_right_hip_axis1.age_years": {
		conditionId: "actoglance.applicability.pate_preschool_3_5_right_hip_axis1.age_years",
		dimension: "age_years",
		expectedValues: [],
		maximumValue: 5,
		minimumValue: 3,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "inclusive_range",
		rationale: "Children aged 3 through 5 years in the Pate calibration and cross-validation study.",
		sourceReference: null
	},
	"actoglance.applicability.pate_preschool_3_5_right_hip_axis1.laterality": {
		conditionId: "actoglance.applicability.pate_preschool_3_5_right_hip_axis1.laterality",
		dimension: "laterality",
		expectedValues: ["right"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The calibration protocol is the right side; the other side is the same wear site with more or less movement in it.",
		sourceReference: null
	},
	"actoglance.applicability.pate_preschool_3_5_right_hip_axis1.placement": {
		conditionId: "actoglance.applicability.pate_preschool_3_5_right_hip_axis1.placement",
		dimension: "placement",
		expectedValues: ["hip"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "Calibrated on a hip-worn device; the thresholds are site-specific counts.",
		sourceReference: null
	},
	"actoglance.applicability.preschool_rf_3_5_nondominant_wrist.age_years": {
		conditionId: "actoglance.applicability.preschool_rf_3_5_nondominant_wrist.age_years",
		dimension: "age_years",
		expectedValues: [],
		maximumValue: 5,
		minimumValue: 3,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "inclusive_range",
		rationale: "Children aged 3 through 5 years in free-living active play.",
		sourceReference: null
	},
	"actoglance.applicability.preschool_rf_3_5_nondominant_wrist.laterality": {
		conditionId: "actoglance.applicability.preschool_rf_3_5_nondominant_wrist.laterality",
		dimension: "laterality",
		expectedValues: ["non_dominant"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The calibration protocol is the non_dominant side; the other side is the same wear site with more or less movement in it.",
		sourceReference: null
	},
	"actoglance.applicability.preschool_rf_3_5_nondominant_wrist.placement": {
		conditionId: "actoglance.applicability.preschool_rf_3_5_nondominant_wrist.placement",
		dimension: "placement",
		expectedValues: ["wrist"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "Calibrated on a wrist-worn device; the thresholds are site-specific counts.",
		sourceReference: null
	},
	"actoglance.applicability.sasaki_adult_waist_vm_compatibility.placement": {
		conditionId: "actoglance.applicability.sasaki_adult_waist_vm_compatibility.placement",
		dimension: "placement",
		expectedValues: ["waist"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "Calibrated on a waist-worn device; the thresholds are site-specific counts.",
		sourceReference: null
	},
	"actoglance.condition.applicability.ahmadi_2020.placement.v1": {
		conditionId: "actoglance.condition.applicability.ahmadi_2020.placement.v1",
		dimension: "placement",
		expectedValues: ["wrist"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The comparison was run on children's wrist-worn raw acceleration.",
		sourceReference: "doi:10.1080/02640414.2019.1703301"
	},
	"actoglance.condition.applicability.ahmadi_2020.population.v1": {
		conditionId: "actoglance.condition.applicability.ahmadi_2020.population.v1",
		dimension: "population",
		expectedValues: ["child_5_11", "child_8_12"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "one_of",
		rationale: "The cohort is school-aged children, which spans both catalogued child bands. No age_years condition is stated because the exact bounds are not restated here, and an invented bound would be a guess.",
		sourceReference: "doi:10.1080/02640414.2019.1703301"
	},
	"actoglance.condition.applicability.choi_2011.epoch.v1": {
		conditionId: "actoglance.condition.applicability.choi_2011.epoch.v1",
		dimension: "epoch_seconds",
		expectedValues: ["60"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The ninety-minute window and its thirty-minute up/downstream spans are counted in one-minute epochs.",
		sourceReference: "doi:10.1249/MSS.0b013e3181ed61a3"
	},
	"actoglance.condition.applicability.choi_2011.placement.v1": {
		conditionId: "actoglance.condition.applicability.choi_2011.placement.v1",
		dimension: "placement",
		expectedValues: ["hip"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "Developed on hip-worn ActiGraph counts. Wrist use is the single most common extrapolation in the field and is reported as such, not excluded.",
		sourceReference: "doi:10.1249/MSS.0b013e3181ed61a3"
	},
	"actoglance.condition.applicability.choi_2011.population.v1": {
		conditionId: "actoglance.condition.applicability.choi_2011.population.v1",
		dimension: "population",
		expectedValues: ["adult"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The validation sample was adults.",
		sourceReference: "doi:10.1249/MSS.0b013e3181ed61a3"
	},
	"actoglance.condition.applicability.choi_2012.epoch.v1": {
		conditionId: "actoglance.condition.applicability.choi_2012.epoch.v1",
		dimension: "epoch_seconds",
		expectedValues: ["60"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The window lengths are counted in one-minute epochs.",
		sourceReference: "doi:10.1249/MSS.0b013e318258cb36"
	},
	"actoglance.condition.applicability.choi_2012.placement.v1": {
		conditionId: "actoglance.condition.applicability.choi_2012.placement.v1",
		dimension: "placement",
		expectedValues: ["hip"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The 2012 revision re-evaluated the same hip-worn protocol.",
		sourceReference: "doi:10.1249/MSS.0b013e318258cb36"
	},
	"actoglance.condition.applicability.cole_kripke_1992.epoch.v1": {
		conditionId: "actoglance.condition.applicability.cole_kripke_1992.epoch.v1",
		dimension: "epoch_seconds",
		expectedValues: ["60"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The published weights are one-minute weights.",
		sourceReference: "doi:10.1093/sleep/15.5.461"
	},
	"actoglance.condition.applicability.cole_kripke_1992.placement.v1": {
		conditionId: "actoglance.condition.applicability.cole_kripke_1992.placement.v1",
		dimension: "placement",
		expectedValues: ["wrist"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The regression was fitted on wrist actigraphy.",
		sourceReference: "doi:10.1093/sleep/15.5.461"
	},
	"actoglance.condition.applicability.cole_kripke_1992.population.v1": {
		conditionId: "actoglance.condition.applicability.cole_kripke_1992.population.v1",
		dimension: "population",
		expectedValues: ["adult"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The validation sample was adults; paediatric use is an extrapolation.",
		sourceReference: "doi:10.1093/sleep/15.5.461"
	},
	"actoglance.condition.applicability.lstm_sleep_wake.age.v1": {
		conditionId: "actoglance.condition.applicability.lstm_sleep_wake.age.v1",
		dimension: "age_years",
		expectedValues: [],
		maximumValue: 18,
		minimumValue: 5,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "inclusive_range",
		rationale: "The 65-child training cohort spans ages 5.3 to 17.7 years. A learned model carries no coefficients a reader can rescale, so an out-of-cohort age is an exclusion rather than an extrapolation.",
		sourceReference: "repo:docs/lstm-actigraphy-paper-methods.md"
	},
	"actoglance.condition.applicability.lstm_sleep_wake.epoch.v1": {
		conditionId: "actoglance.condition.applicability.lstm_sleep_wake.epoch.v1",
		dimension: "epoch_seconds",
		expectedValues: ["30"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The network's input window is thirty-second epochs.",
		sourceReference: "repo:docs/lstm-actigraphy-paper-methods.md"
	},
	"actoglance.condition.applicability.lstm_sleep_wake.laterality.v1": {
		conditionId: "actoglance.condition.applicability.lstm_sleep_wake.laterality.v1",
		dimension: "laterality",
		expectedValues: ["non_dominant"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The training cohort wore the device on the non-dominant wrist.",
		sourceReference: "repo:docs/lstm-actigraphy-paper-methods.md"
	},
	"actoglance.condition.applicability.lstm_sleep_wake.placement.v1": {
		conditionId: "actoglance.condition.applicability.lstm_sleep_wake.placement.v1",
		dimension: "placement",
		expectedValues: ["wrist"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The model was trained on wrist-worn GENEActiv recordings only.",
		sourceReference: "repo:docs/lstm-actigraphy-paper-methods.md"
	},
	"actoglance.condition.applicability.oakley_1997.epoch.v1": {
		conditionId: "actoglance.condition.applicability.oakley_1997.epoch.v1",
		dimension: "epoch_seconds",
		expectedValues: ["30", "60"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "one_of",
		rationale: "The Actiwatch epoch lengths the algorithm's thresholds are stated for.",
		sourceReference: "cambridge-neurotechnology:technical-report:Oakley-1997-Sleepwatch-validation"
	},
	"actoglance.condition.applicability.oakley_1997.placement.v1": {
		conditionId: "actoglance.condition.applicability.oakley_1997.placement.v1",
		dimension: "placement",
		expectedValues: ["wrist"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The Actiwatch Sleepwatch algorithm is defined for the wrist-worn device it ships with.",
		sourceReference: "cambridge-neurotechnology:technical-report:Oakley-1997-Sleepwatch-validation"
	},
	"actoglance.condition.applicability.sadeh_1994.age.v1": {
		conditionId: "actoglance.condition.applicability.sadeh_1994.age.v1",
		dimension: "age_years",
		expectedValues: [],
		maximumValue: 25,
		minimumValue: 10,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "inclusive_range",
		rationale: "The validation sample spans children through young adults; other ages are an extrapolation, widely made and widely reported as such.",
		sourceReference: "doi:10.1093/sleep/17.3.201"
	},
	"actoglance.condition.applicability.sadeh_1994.epoch.v1": {
		conditionId: "actoglance.condition.applicability.sadeh_1994.epoch.v1",
		dimension: "epoch_seconds",
		expectedValues: ["60"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The coefficients are fitted to one-minute epochs; rescaling them to another epoch is a different algorithm.",
		sourceReference: "doi:10.1093/sleep/17.3.201"
	},
	"actoglance.condition.applicability.sadeh_1994.laterality.v1": {
		conditionId: "actoglance.condition.applicability.sadeh_1994.laterality.v1",
		dimension: "laterality",
		expectedValues: ["non_dominant"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The protocol is the non-dominant wrist. A dominant-wrist recording is an extrapolation rather than an exclusion: the coefficients still apply to the same signal, with more movement in it.",
		sourceReference: "doi:10.1093/sleep/17.3.201"
	},
	"actoglance.condition.applicability.sadeh_1994.placement.v1": {
		conditionId: "actoglance.condition.applicability.sadeh_1994.placement.v1",
		dimension: "placement",
		expectedValues: ["wrist"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The 1994 validation used a wrist-worn actigraph; no hip calibration was reported.",
		sourceReference: "doi:10.1093/sleep/17.3.201"
	},
	"actoglance.condition.applicability.sazonov_2004.age.v1": {
		conditionId: "actoglance.condition.applicability.sazonov_2004.age.v1",
		dimension: "age_years",
		expectedValues: [],
		maximumValue: 1,
		minimumValue: 0,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "inclusive_range",
		rationale: "The model was developed on infants. It carries no placement or laterality condition here because the source's sensor siting is not restated in a form this catalogue can check; those dimensions stay unknown rather than being guessed.",
		sourceReference: "doi:10.1088/0967-3334/25/5/018"
	},
	"actoglance.condition.applicability.troiano_2008.age.v1": {
		conditionId: "actoglance.condition.applicability.troiano_2008.age.v1",
		dimension: "age_years",
		expectedValues: [],
		maximumValue: 85,
		minimumValue: 6,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "inclusive_range",
		rationale: "The NHANES 2003-2004 accelerometry sample begins at age six.",
		sourceReference: "doi:10.1249/mss.0b013e31815a51b3"
	},
	"actoglance.condition.applicability.troiano_2008.epoch.v1": {
		conditionId: "actoglance.condition.applicability.troiano_2008.epoch.v1",
		dimension: "epoch_seconds",
		expectedValues: ["60"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The sixty-minute zero-count rule with its two-minute spike tolerance is defined on one-minute epochs.",
		sourceReference: "doi:10.1249/mss.0b013e31815a51b3"
	},
	"actoglance.condition.applicability.troiano_2008.placement.v1": {
		conditionId: "actoglance.condition.applicability.troiano_2008.placement.v1",
		dimension: "placement",
		expectedValues: ["hip"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The NHANES protocol is a hip-worn uniaxial ActiGraph.",
		sourceReference: "doi:10.1249/mss.0b013e31815a51b3"
	},
	"actoglance.condition.applicability.ucsd_scripps_2010.placement.v1": {
		conditionId: "actoglance.condition.applicability.ucsd_scripps_2010.placement.v1",
		dimension: "placement",
		expectedValues: ["wrist"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The Scripps Clinic algorithm is a wrist-actigraphy algorithm.",
		sourceReference: "doi:10.1016/S0165-1781(01)00338-1"
	},
	"actoglance.condition.applicability.ucsd_scripps_2010.population.v1": {
		conditionId: "actoglance.condition.applicability.ucsd_scripps_2010.population.v1",
		dimension: "population",
		expectedValues: ["adult"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The reported validation sample was adults.",
		sourceReference: "doi:10.1016/S0165-1781(01)00338-1"
	},
	"actoglance.condition.applicability.van_hees_2013.placement.v1": {
		conditionId: "actoglance.condition.applicability.van_hees_2013.placement.v1",
		dimension: "placement",
		expectedValues: ["wrist"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "Derived on wrist-worn raw acceleration; the per-axis criteria are not site-specific in form, so another site is an extrapolation.",
		sourceReference: "doi:10.1371/journal.pone.0061691"
	},
	"actoglance.condition.applicability.van_hees_2013.population.v1": {
		conditionId: "actoglance.condition.applicability.van_hees_2013.population.v1",
		dimension: "population",
		expectedValues: ["adult"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The validation sample was adults.",
		sourceReference: "doi:10.1371/journal.pone.0061691"
	},
	"actoglance.condition.applicability.van_hees_2015.epoch.v1": {
		conditionId: "actoglance.condition.applicability.van_hees_2015.epoch.v1",
		dimension: "epoch_seconds",
		expectedValues: ["5"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "inapplicable_to_source_profile",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The rolling five-minute median and the percentile threshold are defined over a five-second angle series.",
		sourceReference: "doi:10.1038/s41598-018-31266-z"
	},
	"actoglance.condition.applicability.van_hees_2015.placement.v1": {
		conditionId: "actoglance.condition.applicability.van_hees_2015.placement.v1",
		dimension: "placement",
		expectedValues: ["wrist"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "Derived and validated on the wrist z-angle. A hip recording is not excluded: GGIR routes it to the HorAngle longitudinal-axis branch (core.yaml HasptVariantType), which is the same detector on a different angle series, so hip reads as an extrapolation rather than inapplicable.",
		sourceReference: "doi:10.1038/s41598-018-31266-z"
	},
	"actoglance.condition.applicability.van_hees_2015.population.v1": {
		conditionId: "actoglance.condition.applicability.van_hees_2015.population.v1",
		dimension: "population",
		expectedValues: ["adult"],
		maximumValue: null,
		minimumValue: null,
		mismatchDisposition: "executable_via_declared_fallback",
		missingEvidenceDisposition: "invalid_missing_required_input",
		operator: "equals",
		rationale: "The HDCZA validation cohorts were adults.",
		sourceReference: "doi:10.1038/s41598-018-31266-z"
	}
}, E = {
	"actoglance.applicability.chandler_wrist_5_11_dominant": {
		conditionIds: [
			"actoglance.applicability.chandler_wrist_5_11_dominant.placement",
			"actoglance.applicability.chandler_wrist_5_11_dominant.laterality",
			"actoglance.applicability.chandler_wrist_5_11_dominant.age_years"
		],
		limitations: [],
		methodSpecificationId: "actoglance.applicability.chandler_wrist_5_11_dominant",
		populationDescription: "Children aged 5 through 11 years in the Chandler sedentary-behavior calibration study.",
		profileId: "actoglance.applicability.chandler_wrist_5_11_dominant"
	},
	"actoglance.applicability.chandler_wrist_5_11_nondominant": {
		conditionIds: [
			"actoglance.applicability.chandler_wrist_5_11_nondominant.placement",
			"actoglance.applicability.chandler_wrist_5_11_nondominant.laterality",
			"actoglance.applicability.chandler_wrist_5_11_nondominant.age_years"
		],
		limitations: [],
		methodSpecificationId: "actoglance.applicability.chandler_wrist_5_11_nondominant",
		populationDescription: "Children aged 5 through 11 years in the Chandler sedentary-behavior calibration study.",
		profileId: "actoglance.applicability.chandler_wrist_5_11_nondominant"
	},
	"actoglance.applicability.chandler_wrist_8_12_nondominant": {
		conditionIds: [
			"actoglance.applicability.chandler_wrist_8_12_nondominant.placement",
			"actoglance.applicability.chandler_wrist_8_12_nondominant.laterality",
			"actoglance.applicability.chandler_wrist_8_12_nondominant.age_years"
		],
		limitations: ["Do not generalize to other ages, placements, count implementations, or epoch conversions without evidence."],
		methodSpecificationId: "actoglance.applicability.chandler_wrist_8_12_nondominant",
		populationDescription: "Children aged 8 through 12 years in the Chandler calibration study.",
		profileId: "actoglance.applicability.chandler_wrist_8_12_nondominant"
	},
	"actoglance.applicability.evenson_children_5_8_hip_axis1": {
		conditionIds: [
			"actoglance.applicability.evenson_children_5_8_hip_axis1.placement",
			"actoglance.applicability.evenson_children_5_8_hip_axis1.laterality",
			"actoglance.applicability.evenson_children_5_8_hip_axis1.age_years"
		],
		limitations: ["The source used a uniaxial vertical-axis ActiGraph with 15-second epochs; no device-model or axis substitution is implied.", "A source vertical or Y axis may be treated as the vertical axis only when its import profile establishes that mapping."],
		methodSpecificationId: "actoglance.applicability.evenson_children_5_8_hip_axis1",
		populationDescription: "Children aged 5 through 8 years in the Evenson calibration study.",
		profileId: "actoglance.applicability.evenson_children_5_8_hip_axis1"
	},
	"actoglance.applicability.freedson_adult_waist_axis1_compatibility": {
		conditionIds: ["actoglance.applicability.freedson_adult_waist_axis1_compatibility.placement"],
		limitations: ["Exact eligibility remains study-specific; the compatibility method does not imply universal adult applicability.", "A source Y-axis may be treated as the vertical axis only when its import profile establishes that mapping."],
		methodSpecificationId: "actoglance.applicability.freedson_adult_waist_axis1_compatibility",
		populationDescription: "Adults represented by the established ActoGlance Freedson count compatibility method.",
		profileId: "actoglance.applicability.freedson_adult_waist_axis1_compatibility"
	},
	"actoglance.applicability.johansson_preschool_wrist_4_year_nondominant": {
		conditionIds: ["actoglance.applicability.johansson_preschool_wrist_4_year_nondominant.placement", "actoglance.applicability.johansson_preschool_wrist_4_year_nondominant.laterality"],
		limitations: ["The source supports four-year-old children; exact observed minimum and maximum ages were not reported as applicability bounds.", "Do not generalize this profile to the full 3-5-year preschool range."],
		methodSpecificationId: "actoglance.applicability.johansson_preschool_wrist_4_year_nondominant",
		populationDescription: "Four-year-old children in the Johansson calibration study (mean age 49 months, SD 3.7 months).",
		profileId: "actoglance.applicability.johansson_preschool_wrist_4_year_nondominant"
	},
	"actoglance.applicability.kemp_actiwatch2_adult_2020_wrist": {
		conditionIds: ["actoglance.applicability.kemp_actiwatch2_adult_2020_wrist.placement", "actoglance.applicability.kemp_actiwatch2_adult_2020_wrist.laterality"],
		limitations: ["Moderate activity was weakly characterized (AUC 0.66); sedentary and vigorous were strong.", "The abstract does not state which wrist the Actiwatch 2 was worn on, nor the participants' ages."],
		methodSpecificationId: "actoglance.applicability.kemp_actiwatch2_adult_2020_wrist",
		populationDescription: "Adults in the Kemp calibration study (28 men and 22 women).",
		profileId: "actoglance.applicability.kemp_actiwatch2_adult_2020_wrist"
	},
	"actoglance.applicability.neil_sztramko_actiwatch2_adult_2017_wrist": {
		conditionIds: ["actoglance.applicability.neil_sztramko_actiwatch2_adult_2017_wrist.placement", "actoglance.applicability.neil_sztramko_actiwatch2_adult_2017_wrist.laterality"],
		limitations: ["Calibrated in adult women only; men were not studied.", "The abstract does not state which wrist the Actiwatch 2 was worn on."],
		methodSpecificationId: "actoglance.applicability.neil_sztramko_actiwatch2_adult_2017_wrist",
		populationDescription: "Adult women in the Neil-Sztramko calibration study (n=30, age 40 +/- 14.9 years).",
		profileId: "actoglance.applicability.neil_sztramko_actiwatch2_adult_2017_wrist"
	},
	"actoglance.applicability.nonwear.ahmadi_2020.v1": {
		conditionIds: ["actoglance.condition.applicability.ahmadi_2020.placement.v1", "actoglance.condition.applicability.ahmadi_2020.population.v1"],
		limitations: [],
		methodSpecificationId: "ahmadi_2020",
		populationDescription: null,
		profileId: "actoglance.applicability.nonwear.ahmadi_2020.v1"
	},
	"actoglance.applicability.nonwear.choi_2011.v1": {
		conditionIds: [
			"actoglance.condition.applicability.choi_2011.placement.v1",
			"actoglance.condition.applicability.choi_2011.epoch.v1",
			"actoglance.condition.applicability.choi_2011.population.v1"
		],
		limitations: [],
		methodSpecificationId: "choi_2011",
		populationDescription: null,
		profileId: "actoglance.applicability.nonwear.choi_2011.v1"
	},
	"actoglance.applicability.nonwear.choi_2012.v1": {
		conditionIds: ["actoglance.condition.applicability.choi_2012.placement.v1", "actoglance.condition.applicability.choi_2012.epoch.v1"],
		limitations: [],
		methodSpecificationId: "choi_2012",
		populationDescription: null,
		profileId: "actoglance.applicability.nonwear.choi_2012.v1"
	},
	"actoglance.applicability.nonwear.troiano_2008.v1": {
		conditionIds: [
			"actoglance.condition.applicability.troiano_2008.placement.v1",
			"actoglance.condition.applicability.troiano_2008.epoch.v1",
			"actoglance.condition.applicability.troiano_2008.age.v1"
		],
		limitations: [],
		methodSpecificationId: "troiano_2008",
		populationDescription: null,
		profileId: "actoglance.applicability.nonwear.troiano_2008.v1"
	},
	"actoglance.applicability.nonwear.van_hees_2013.v1": {
		conditionIds: ["actoglance.condition.applicability.van_hees_2013.placement.v1", "actoglance.condition.applicability.van_hees_2013.population.v1"],
		limitations: [],
		methodSpecificationId: "van_hees_2013",
		populationDescription: null,
		profileId: "actoglance.applicability.nonwear.van_hees_2013.v1"
	},
	"actoglance.applicability.pate_preschool_3_5_right_hip_axis1": {
		conditionIds: [
			"actoglance.applicability.pate_preschool_3_5_right_hip_axis1.placement",
			"actoglance.applicability.pate_preschool_3_5_right_hip_axis1.laterality",
			"actoglance.applicability.pate_preschool_3_5_right_hip_axis1.age_years"
		],
		limitations: ["The source used a uniaxial vertical-plane ActiGraph with 15-second epochs; no device-model substitution is implied.", "The cutpoints distinguish below-moderate, moderate, and vigorous activity and do not supply a sedentary-versus-light boundary."],
		methodSpecificationId: "actoglance.applicability.pate_preschool_3_5_right_hip_axis1",
		populationDescription: "Children aged 3 through 5 years in the Pate calibration and cross-validation study.",
		profileId: "actoglance.applicability.pate_preschool_3_5_right_hip_axis1"
	},
	"actoglance.applicability.preschool_rf_3_5_nondominant_wrist": {
		conditionIds: [
			"actoglance.applicability.preschool_rf_3_5_nondominant_wrist.placement",
			"actoglance.applicability.preschool_rf_3_5_nondominant_wrist.laterality",
			"actoglance.applicability.preschool_rf_3_5_nondominant_wrist.age_years"
		],
		limitations: ["The published sample contained 31 children and a 20-minute free-play session."],
		methodSpecificationId: "actoglance.applicability.preschool_rf_3_5_nondominant_wrist",
		populationDescription: "Children aged 3 through 5 years in free-living active play.",
		profileId: "actoglance.applicability.preschool_rf_3_5_nondominant_wrist"
	},
	"actoglance.applicability.sasaki_adult_waist_vm_compatibility": {
		conditionIds: ["actoglance.applicability.sasaki_adult_waist_vm_compatibility.placement"],
		limitations: ["Exact eligibility remains study-specific; the compatibility method does not imply universal adult applicability."],
		methodSpecificationId: "actoglance.applicability.sasaki_adult_waist_vm_compatibility",
		populationDescription: "Adults represented by the established ActoGlance Sasaki vector-magnitude compatibility method.",
		profileId: "actoglance.applicability.sasaki_adult_waist_vm_compatibility"
	},
	"actoglance.applicability.sleep.cole_kripke_1992.v1": {
		conditionIds: [
			"actoglance.condition.applicability.cole_kripke_1992.placement.v1",
			"actoglance.condition.applicability.cole_kripke_1992.epoch.v1",
			"actoglance.condition.applicability.cole_kripke_1992.population.v1"
		],
		limitations: [],
		methodSpecificationId: "cole_kripke_1992",
		populationDescription: null,
		profileId: "actoglance.applicability.sleep.cole_kripke_1992.v1"
	},
	"actoglance.applicability.sleep.lstm_sleep_wake.v1": {
		conditionIds: [
			"actoglance.condition.applicability.lstm_sleep_wake.placement.v1",
			"actoglance.condition.applicability.lstm_sleep_wake.laterality.v1",
			"actoglance.condition.applicability.lstm_sleep_wake.age.v1",
			"actoglance.condition.applicability.lstm_sleep_wake.epoch.v1"
		],
		limitations: [],
		methodSpecificationId: "lstm_sleep_wake",
		populationDescription: null,
		profileId: "actoglance.applicability.sleep.lstm_sleep_wake.v1"
	},
	"actoglance.applicability.sleep.oakley_1997.v1": {
		conditionIds: ["actoglance.condition.applicability.oakley_1997.placement.v1", "actoglance.condition.applicability.oakley_1997.epoch.v1"],
		limitations: [],
		methodSpecificationId: "oakley_1997",
		populationDescription: null,
		profileId: "actoglance.applicability.sleep.oakley_1997.v1"
	},
	"actoglance.applicability.sleep.sadeh_1994.v1": {
		conditionIds: [
			"actoglance.condition.applicability.sadeh_1994.placement.v1",
			"actoglance.condition.applicability.sadeh_1994.laterality.v1",
			"actoglance.condition.applicability.sadeh_1994.epoch.v1",
			"actoglance.condition.applicability.sadeh_1994.age.v1"
		],
		limitations: [],
		methodSpecificationId: "sadeh_1994",
		populationDescription: null,
		profileId: "actoglance.applicability.sleep.sadeh_1994.v1"
	},
	"actoglance.applicability.sleep.sazonov_2004.v1": {
		conditionIds: ["actoglance.condition.applicability.sazonov_2004.age.v1"],
		limitations: [],
		methodSpecificationId: "sazonov_2004",
		populationDescription: null,
		profileId: "actoglance.applicability.sleep.sazonov_2004.v1"
	},
	"actoglance.applicability.sleep.ucsd_scripps_2010.v1": {
		conditionIds: ["actoglance.condition.applicability.ucsd_scripps_2010.placement.v1", "actoglance.condition.applicability.ucsd_scripps_2010.population.v1"],
		limitations: [],
		methodSpecificationId: "ucsd_scripps_2010",
		populationDescription: null,
		profileId: "actoglance.applicability.sleep.ucsd_scripps_2010.v1"
	},
	"actoglance.applicability.sleep.van_hees_2015.v1": {
		conditionIds: [
			"actoglance.condition.applicability.van_hees_2015.placement.v1",
			"actoglance.condition.applicability.van_hees_2015.epoch.v1",
			"actoglance.condition.applicability.van_hees_2015.population.v1"
		],
		limitations: [],
		methodSpecificationId: "van_hees_2015",
		populationDescription: null,
		profileId: "actoglance.applicability.sleep.van_hees_2015.v1"
	},
	"actoglance.applicability.sleep.van_hees_hasib_2015.v1": {
		conditionIds: [
			"actoglance.condition.applicability.van_hees_2015.placement.v1",
			"actoglance.condition.applicability.van_hees_2015.epoch.v1",
			"actoglance.condition.applicability.van_hees_2015.population.v1"
		],
		limitations: [],
		methodSpecificationId: "van_hees_hasib_2015",
		populationDescription: null,
		profileId: "actoglance.applicability.sleep.van_hees_hasib_2015.v1"
	}
}, T = {
	adolescent: {
		maximumAgeYears: 17,
		minimumAgeYears: 13
	},
	adult: {
		maximumAgeYears: 64,
		minimumAgeYears: 18
	},
	child_5_11: {
		maximumAgeYears: 11,
		minimumAgeYears: 5
	},
	child_8_12: {
		maximumAgeYears: 12,
		minimumAgeYears: 8
	},
	older_adult: {
		maximumAgeYears: null,
		minimumAgeYears: 65
	},
	preschool_3_5: {
		maximumAgeYears: 5,
		minimumAgeYears: 3
	}
};
function A(i) {
	const e = function(i) {
		const e = S[i];
		return e ? E[e] ?? null : null;
	}(i);
	return e ? e.conditionIds.map((i) => R[i]).filter((i) => void 0 !== i) : [];
}
function N(i) {
	return void 0 === i || "" === i || "unknown" === i ? null : i;
}
function C(i) {
	return "inclusive_range" === i.operator ? `${String(i.minimumValue ?? "-")}-${String(i.maximumValue ?? "-")}` : i.expectedValues.join(" or ");
}
function P(i, e) {
	switch (i.dimension) {
		case "placement": {
			const a = N(e.placement);
			return null === a ? null : {
				satisfied: i.expectedValues.includes(a),
				actual: a
			};
		}
		case "laterality": {
			const a = N(e.laterality);
			if (null === a) return null;
			const t = "left" === a || "right" === a, n = "dominant" === a || "non_dominant" === a, l = i.expectedValues.length > 0 && i.expectedValues.every((i) => "left" === i || "right" === i), o = i.expectedValues.length > 0 && i.expectedValues.every((i) => "dominant" === i || "non_dominant" === i);
			return t && o || n && l ? null : {
				satisfied: i.expectedValues.includes(a),
				actual: a
			};
		}
		case "epoch_seconds": {
			if (void 0 === e.epochSeconds) return null;
			const a = String(e.epochSeconds);
			return {
				satisfied: i.expectedValues.includes(a),
				actual: a
			};
		}
		case "population": {
			const a = N(e.population) ?? (void 0 === e.ageYears ? null : function(i) {
				let e = null;
				for (const [a, t] of Object.entries(T)) {
					const n = t.maximumAgeYears ?? Number.POSITIVE_INFINITY;
					if (i < t.minimumAgeYears || i > n) continue;
					const l = n - t.minimumAgeYears;
					(null === e || l < e.width) && (e = {
						name: a,
						width: l
					});
				}
				return null === e ? null : e.name;
			}(e.ageYears));
			return null === a ? null : {
				satisfied: i.expectedValues.includes(a),
				actual: a
			};
		}
		case "age_years": {
			const a = i.minimumValue ?? Number.NEGATIVE_INFINITY, t = i.maximumValue ?? Number.POSITIVE_INFINITY;
			if (void 0 !== e.ageYears) return {
				satisfied: e.ageYears >= a && e.ageYears <= t,
				actual: String(e.ageYears)
			};
			const n = N(e.population), l = null === n ? null : function(i) {
				const e = T[i];
				return e ? {
					min: e.minimumAgeYears,
					max: e.maximumAgeYears ?? Number.POSITIVE_INFINITY
				} : null;
			}(n);
			if (null === l) return null;
			const o = `${String(l.min)}-${l.max === Number.POSITIVE_INFINITY ? "" : String(l.max)}`;
			return {
				satisfied: l.min >= a && l.max <= t,
				actual: o
			};
		}
		default: return null;
	}
}
const L = {
	validated: 0,
	extrapolated: 1,
	unknown: 2,
	inapplicable: 3
};
function O(i) {
	return L[i];
}
function Y(i) {
	return {
		placement: i.placement,
		laterality: i.laterality,
		population: i.population
	};
}
function B(i) {
	return [
		{
			key: "sedentaryMax",
			label: "Sed max",
			value: i.sedentaryMax
		},
		{
			key: "lightMin",
			label: "Light min",
			value: i.lightMin
		},
		{
			key: "moderateMin",
			label: "Moderate/MVPA min",
			value: i.moderateMin
		},
		{
			key: "vigorousMin",
			label: "Vigorous min",
			value: i.vigorousMin
		}
	].filter((i) => Number.isFinite(i.value));
}
function G(i) {
	return i.reduce((i, e) => ("ready" === e.status ? i.ready += 1 : "backend_required" === e.status ? i.backendRequired += 1 : i.needsSignal += 1, i), {
		ready: 0,
		needsSignal: 0,
		backendRequired: 0
	});
}
function F(i) {
	const e = G(i ?? []);
	return e.ready > 0 ? null : e.needsSignal > 0 && e.backendRequired > 0 ? {
		title: "No physical activity methods are ready",
		message: "Open local activity files or review CSV mapping for count-based methods. Backend PA methods require actours/WASM class or volume epochs."
	} : e.needsSignal > 0 ? {
		title: "No usable activity signal found",
		message: "Open local activity files or review CSV settings so count or GGIR signals are available for scoring."
	} : e.backendRequired > 0 ? {
		title: "Physical activity backend required",
		message: "Update actours/WASM so backend PA class or volume epochs are computed and stored."
	} : {
		title: "No physical activity methods found",
		message: "Open local activity files to populate physical activity scoring methods."
	};
}
function $(i, e) {
	const a = e ? (n = i.method, l = Y(e), function(i, e) {
		if (0 === i.length) return {
			fit: "unknown",
			mismatches: [],
			unevaluated: []
		};
		const a = [], t = [], n = [];
		for (const l of i) {
			const i = P(l, e);
			null !== i ? i.satisfied || a.push({
				dimension: l.dimension,
				expected: C(l),
				actual: i.actual,
				disposition: l.mismatchDisposition,
				rationale: l.rationale,
				sourceReference: l.sourceReference
			}) : (t.push(l.dimension), n.push(l.missingEvidenceDisposition));
		}
		return a.some((i) => i.disposition === q) || n.includes(q) ? {
			fit: "inapplicable",
			mismatches: a,
			unevaluated: t
		} : a.length > 0 || n.includes("executable_via_declared_fallback") ? {
			fit: "extrapolated",
			mismatches: a,
			unevaluated: t
		} : n.length > 0 && n.every((i) => "applicable_optional_evidence_absent" === i) ? {
			fit: "validated",
			mismatches: a,
			unevaluated: t
		} : t.length > 0 ? {
			fit: "unknown",
			mismatches: a,
			unevaluated: t
		} : {
			fit: "validated",
			mismatches: a,
			unevaluated: t
		};
	}(A(n), l)).fit : "unknown", t = -A(i.method).length;
	var n, l;
	return [
		e && "auto" !== e.signal && i.requiredSignal !== e.signal ? 1 : 0,
		"ready" === i.status ? 0 : "backend_required" === i.status ? 1 : 2,
		O(a),
		"validated" === a ? t : 0,
		p.indexOf(c(i.method).family),
		u.indexOf(i.method)
	];
}
function j(i, e) {
	const a = [...i ?? []].sort((i, a) => function(i, e, a) {
		const t = $(i, a), n = $(e, a);
		for (let l = 0; l < t.length; l += 1) {
			const i = (t[l] ?? 0) - (n[l] ?? 0);
			if (0 !== i) return i;
		}
		return 0;
	}(i, a, e))[0];
	if (!a) return null;
	const t = c(a.method), n = "ready" === a.status, l = "backend_required" === a.status;
	return {
		method: a.method,
		label: a.label,
		status: a.status,
		title: n ? `Recommended now: ${a.label}` : l ? `Recommended after backend output: ${a.label}` : `Next method to unlock: ${a.label}`,
		detail: n ? `${t.selectionGuidance} ${a.totalDays.toLocaleString("en-US")} day${1 === a.totalDays ? "" : "s"} are ready from ${a.sourceLabel}.` : a.unavailableReason ?? t.backendDependency ?? a.nextStepLabel ?? t.selectionGuidance,
		actionLabel: n ? "Use recommended method" : l ? "Wire backend output" : "Map required signal"
	};
}
function z(i) {
	const e = i ?? [], a = G(e), t = e.filter((i) => "needs_signal" === i.status).map((i) => i.label), n = e.filter((i) => "backend_required" === i.status).map((i) => i.label);
	return 0 === e.length ? {
		ready: !1,
		status: "empty",
		statusLabel: "No methods",
		calloutTitle: "No physical activity methods found",
		calloutMessage: "Open local activity files to populate physical activity scoring methods.",
		methodCount: 0,
		readyCount: 0,
		missingSignalCount: 0,
		backendRequiredCount: 0,
		missingSignalMethods: [],
		backendRequiredMethods: [],
		nextActionLabel: "Open activity files"
	} : a.ready > 0 && a.backendRequired > 0 ? {
		ready: !0,
		status: "partial",
		statusLabel: "Ready with backend gaps",
		calloutTitle: "Physical activity scoring is partially ready",
		calloutMessage: "Count and daily-summary methods can be reviewed now. Backend-dependent methods such as MIMS become available when their actours/WASM outputs are stored.",
		methodCount: e.length,
		readyCount: a.ready,
		missingSignalCount: a.needsSignal,
		backendRequiredCount: a.backendRequired,
		missingSignalMethods: t,
		backendRequiredMethods: n,
		nextActionLabel: "Review ready methods"
	} : a.ready > 0 ? {
		ready: !0,
		status: "ready",
		statusLabel: "Ready",
		calloutTitle: "Physical activity scoring is ready",
		calloutMessage: "At least one physical activity method has usable local signals and can be reviewed now.",
		methodCount: e.length,
		readyCount: a.ready,
		missingSignalCount: a.needsSignal,
		backendRequiredCount: a.backendRequired,
		missingSignalMethods: t,
		backendRequiredMethods: n,
		nextActionLabel: "Review results"
	} : {
		ready: !1,
		status: "blocked",
		statusLabel: "Needs input",
		calloutTitle: a.backendRequired > 0 && a.needsSignal > 0 ? "Physical activity scoring needs signals and backend outputs" : a.backendRequired > 0 ? "Physical activity backend outputs are required" : "Physical activity signals are required",
		calloutMessage: F(e)?.message ?? "Open local activity files or review CSV settings before scoring physical activity.",
		methodCount: e.length,
		readyCount: a.ready,
		missingSignalCount: a.needsSignal,
		backendRequiredCount: a.backendRequired,
		missingSignalMethods: t,
		backendRequiredMethods: n,
		nextActionLabel: a.needsSignal > 0 ? "Review files and CSV settings" : "Update backend outputs"
	};
}
function U(i) {
	return (i ?? []).filter((i) => i.cutpointThresholds && i.defaultCutpointThresholds).map((i) => {
		const e = i.cutpointThresholds, a = i.defaultCutpointThresholds;
		return {
			method: i.method,
			label: i.label,
			sourceLabel: i.sourceLabel,
			available: i.available,
			customActive: (t = e, n = a, !(t.sedentaryMax === n.sedentaryMax && t.lightMin === n.lightMin && t.moderateMin === n.moderateMin && t.vigorousMin === n.vigorousMin)),
			sedentaryMax: e.sedentaryMax,
			lightMin: e.lightMin,
			moderateMin: e.moderateMin === Number.POSITIVE_INFINITY ? null : e.moderateMin,
			vigorousMin: e.vigorousMin === Number.POSITIVE_INFINITY ? null : e.vigorousMin,
			mvpaMinutesPerDay: i.mvpaMinutesPerDay
		};
		var t, n;
	});
}
function W(i) {
	const e = i.defaultIntensityMinutes;
	return e ? {
		sedentaryMinutes: i.sedentaryMinutes - e.sedentaryMinutes,
		lightMinutes: i.lightMinutes - e.lightMinutes,
		moderateMinutes: i.moderateMinutes - e.moderateMinutes,
		vigorousMinutes: i.vigorousMinutes - e.vigorousMinutes,
		mvpaMinutes: i.mvpaMinutes - e.mvpaMinutes
	} : null;
}
function H(i) {
	return {
		sedentaryMax: i.sedentaryMax,
		lightMin: i.lightMin,
		moderateMin: i.moderateMin,
		vigorousMin: i.vigorousMin
	};
}
function J(i, e) {
	return i.moderateMin === Number.POSITIVE_INFINITY ? [{
		label: "Sed",
		min: 0,
		max: i.sedentaryMax,
		tone: "sedentary"
	}, {
		label: e?.[1]?.label ?? "Light",
		min: i.lightMin,
		max: null,
		tone: "light"
	}] : i.vigorousMin === Number.POSITIVE_INFINITY ? [
		{
			label: "Sed",
			min: 0,
			max: i.sedentaryMax,
			tone: "sedentary"
		},
		{
			label: "Light",
			min: i.lightMin,
			max: i.moderateMin - 1,
			tone: "light"
		},
		{
			label: e?.[2]?.label ?? "MVPA",
			min: i.moderateMin,
			max: null,
			tone: "moderate"
		}
	] : [
		{
			label: "Sed",
			min: 0,
			max: i.sedentaryMax,
			tone: "sedentary"
		},
		{
			label: "Light",
			min: i.lightMin,
			max: i.moderateMin - 1,
			tone: "light"
		},
		{
			label: "Moderate",
			min: i.moderateMin,
			max: i.vigorousMin - 1,
			tone: "moderate"
		},
		{
			label: "Vigorous",
			min: i.vigorousMin,
			max: null,
			tone: "vigorous"
		}
	];
}
function K(i, e, a) {
	if (!a) return i.ruleLabel;
	const t = String(e.sedentaryMax), n = String(e.lightMin), l = String(e.moderateMin - 1), o = String(e.moderateMin), s = String(e.vigorousMin - 1), c = String(e.vigorousMin);
	return e.moderateMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${t}, non-sedentary >=${n} counts/min` : e.vigorousMin === Number.POSITIVE_INFINITY ? `Custom cutpoints: Sed <=${t}, light ${n}-${l}, MVPA >=${o} counts/min` : `Custom cutpoints: Sed <=${t}, light ${n}-${l}, moderate ${o}-${s}, vigorous >=${c} counts/min`;
}
const Z = [
	null,
	"sedentary",
	"light",
	"moderate",
	"vigorous"
];
async function Q(i) {
	const { values: a, countsPerMinuteScale: t, method: n, date: l, maskReasons: o } = i;
	if (0 === a.length) return null;
	const s = Math.max(1, Math.ceil(a.length / 180)), c = [];
	for (let e = 0; e < a.length; e += s) {
		const i = a[e] ?? NaN;
		Number.isFinite(i) && c.push({
			index: e,
			countsPerMinute: i * t
		});
	}
	if (0 === c.length) return null;
	const r = await e(i.signal).cutpointToneCodes(Float64Array.from(c, (i) => i.countsPerMinute), H(n));
	let p = 0;
	const d = [];
	return c.forEach((i, e) => {
		const a = Z[r[e] ?? 0];
		a && (p = Math.max(p, i.countsPerMinute), d.push({
			x: d.length,
			value: i.countsPerMinute,
			tone: a,
			maskReason: o?.[i.index] ?? "included"
		}));
	}), 0 === d.length ? null : {
		date: l,
		sourceLabel: n.sourceLabel,
		valueMax: Math.max(p, n.cutpointScaleMax ?? 1),
		points: d
	};
}
function X(i, e) {
	return {
		method: i.method,
		label: i.label,
		requiredSignal: i.requiredSignal,
		sourceLabel: i.sourceLabel,
		ruleLabel: i.ruleLabel,
		status: null == e ? "ready" : i.unavailableStatus ?? "needs_signal",
		available: null == e,
		unavailableReason: e,
		nextStepLabel: null == e ? null : i.unavailableAction,
		totalDays: 0,
		sedentaryMinutes: 0,
		lightMinutes: 0,
		moderateMinutes: 0,
		vigorousMinutes: 0,
		mvpaMinutes: 0,
		mvpaMinutesPerDay: 0,
		...i.cutpointBands ? { cutpointBands: i.cutpointBands } : {},
		...i.cutpointScaleMax ? { cutpointScaleMax: i.cutpointScaleMax } : {}
	};
}
function ii(i) {
	i.mvpaMinutesPerDay = i.totalDays > 0 ? i.mvpaMinutes / i.totalDays : 0, i.totalDays > 0 && (null != i.mvpaBouts && (i.mvpaBoutsPerDay = i.mvpaBouts / i.totalDays), null != i.sedentaryBreaks && (i.sedentaryBreaksPerDay = i.sedentaryBreaks / i.totalDays));
}
function ei(i, e) {
	i.sedentaryMinutes += e.sedentaryMinutes, i.lightMinutes += e.lightMinutes, i.moderateMinutes += e.moderateMinutes, i.vigorousMinutes += e.vigorousMinutes, i.mvpaMinutes = i.moderateMinutes + i.vigorousMinutes;
}
function ai(i, e, a, t) {
	if (0 === e.totalDays) return;
	i.totalDays += e.totalDays, ei(i, e.intensity), i.defaultIntensityMinutes && e.defaultIntensity && ei(i.defaultIntensityMinutes, e.defaultIntensity), null != e.mimsUnitTotal && (i.mimsUnitTotal = (i.mimsUnitTotal ?? 0) + e.mimsUnitTotal), i.totalEpochsReviewed = (i.totalEpochsReviewed ?? 0) + e.totalEpochs, i.includedEpochsReviewed = (i.includedEpochsReviewed ?? 0) + e.includedEpochs, i.wakeWearMinutes = (i.wakeWearMinutes ?? 0) + e.wakeWearMinutes, i.excludedNonwearMinutes = (i.excludedNonwearMinutes ?? 0) + e.excludedNonwearMinutes, i.excludedMainSleepMinutes = (i.excludedMainSleepMinutes ?? 0) + e.excludedMainSleepMinutes, i.excludedNapMinutes = (i.excludedNapMinutes ?? 0) + e.excludedNapMinutes, i.maskOverlapEpochs = (i.maskOverlapEpochs ?? 0) + e.overlapEpochs, i.maskPolicy = a;
	const n = e.bouts;
	n && (i.mvpaBouts = (i.mvpaBouts ?? 0) + n.mvpaBouts, i.mvpaBoutMinutes = (i.mvpaBoutMinutes ?? 0) + n.mvpaBoutMinutes, i.sedentaryBouts = (i.sedentaryBouts ?? 0) + n.sedentaryBouts, i.sedentaryBreaks = (i.sedentaryBreaks ?? 0) + n.sedentaryBreaks, t.total += n.meanSedentaryBoutMinutes * n.sedentaryBouts, i.meanSedentaryBoutMinutes = i.sedentaryBouts > 0 ? t.total / i.sedentaryBouts : 0);
}
async function ti(a) {
	const { file: t, days: n, summaries: l, markersByAnalysisDate: o, sensorNonwearPeriods: s, maskPolicy: c, validDayCriteria: p, cutpointMethods: u, choiAxis: m } = a, y = new Set([...o].filter(([, e]) => i(e)).map(([i]) => i)), v = Number.isFinite(t.epochLengthSeconds) && t.epochLengthSeconds > 0 ? t.epochLengthSeconds : 60, x = 60 / v, M = {
		policy: f(c),
		intervals: g(o, s)
	}, k = n.map((i) => b(i, c, m, v)), S = n.map((i, e) => ({
		timestamps: new Float64Array(i.timestamps),
		epochSeconds: v,
		series: k[e]
	})), { dates: q, shortfall: R } = await async function({ days: i, countDays: a, epochSeconds: t, request: n, criteria: l, scoredDates: o, signal: s }) {
		if (!l) return {
			dates: null,
			shortfall: null
		};
		if (i.some((i) => !o.has(i.date))) return {
			dates: null,
			shortfall: null
		};
		const c = await h({
			...n,
			days: [...a]
		}, s), r = 86400 / t, p = await I(i.map((i) => i.date), e(s)), d = i.map((i, e) => {
			const a = c.days[e].mask;
			return {
				date: i.date,
				wearMinutes: a.wakeWearMinutes,
				isWeekend: p[e],
				isPartialDay: a.totalEpochs < r
			};
		}), u = await V(d, l, s);
		if (!u.meetsCriteria) {
			const i = l.requireWeekendDay && !u.hasWeekendValidDay ? ", including a weekend day" : "";
			return {
				dates: /* @__PURE__ */ new Set(),
				shortfall: `${String(u.validDays)} of the required ${String(l.minValidDaysPerParticipant)} valid days${i}`
			};
		}
		const m = await D(d.map((i) => i.wearMinutes), l, s);
		return {
			dates: new Set(d.filter((i, e) => m[e]).map((i) => i.date)),
			shortfall: null
		};
	}({
		days: n,
		countDays: S,
		epochSeconds: v,
		request: M,
		criteria: p,
		scoredDates: y,
		signal: a.signal
	}), E = l.filter((i) => !(c.minimumWakeWearMinutes > 0 && (null == i.validHours || 60 * i.validHours < c.minimumWakeWearMinutes))).filter((i) => null != i.sedentaryMinutes && null != i.lpaMinutes && null != i.mvpaMinutes).filter((i) => !q || q.has(i.analysisDate)).map((i) => ({
		sedentaryMinutes: i.sedentaryMinutes,
		lpaMinutes: i.lpaMinutes,
		mvpaMinutes: i.mvpaMinutes
	})), T = n.map((i) => !q || q.has(i.date)), A = [];
	for (let i = 0; i < u.length; i++) {
		a.signal?.throwIfAborted();
		const e = u[i];
		if (r(e.method, t.sourceProfileId)) {
			A.push(null);
			continue;
		}
		const l = [];
		if (n.forEach((i, a) => {
			const t = new Float64Array("axisY" === e.axis ? i.axisY : i.vectorMagnitude);
			t.length > 0 && t.length === S[a].timestamps.length && l.push({
				index: a,
				values: t
			});
		}), 0 === l.length) {
			A.push(null);
			continue;
		}
		const o = await h({
			...M,
			analysisKind: "count_cutpoint",
			thresholds: H(e),
			defaultThresholds: H(_[i]),
			days: l.map(({ index: i, values: e }) => ({
				...S[i],
				values: e,
				aggregate: T[i]
			}))
		}, a.signal), s = {
			signalSeen: o.days.some((i) => i.hasValidSignal),
			totals: o.totals
		}, c = l.find(({ index: i }) => T[i]);
		if (c) {
			const i = await h({
				...M,
				includeEpochDetails: !0,
				days: [S[c.index]]
			}, a.signal), t = await Q({
				values: c.values,
				countsPerMinuteScale: x,
				method: e,
				date: n[c.index].date,
				maskReasons: i.days[0].reasons,
				signal: a.signal
			});
			t && (s.previewTrace = t);
		}
		if (o.totals.totalDays > 0) {
			const i = await d(e.method, v, a.signal);
			i && "warn" === i.severity && (s.epochMismatch = i);
		}
		A.push(s);
	}
	const N = (i, e) => n.flatMap((a, t) => {
		const n = i(a);
		return n && 0 !== n.length ? [{
			timestamps: S[t].timestamps,
			...a.ggirTimestamps ? { ggirTimestamps: new Float64Array(a.ggirTimestamps) } : {},
			values: Float64Array.from(n),
			grid: e,
			fallbackEpochSeconds: v,
			series: k[t],
			aggregate: T[t]
		}] : [];
	}), C = async (i, e) => {
		if (a.signal?.throwIfAborted(), 0 === i.length) return null;
		const t = await h({
			...M,
			analysisKind: e,
			days: i
		}, a.signal);
		return {
			signalSeen: t.days.some((i) => i.hasValidSignal),
			totals: t.totals
		};
	};
	return {
		shortfall: R,
		ggirSummarySeen: l.length > 0,
		ggirRows: E,
		hasAnyActivity: T.some(Boolean),
		cutpoints: A,
		mims: await C(N((i) => i.mimsUnit ? new Float64Array(i.mimsUnit) : null, "backend_output"), "mims_volume"),
		preschoolRf: await C(N(w, "classifier"), "preschool_classifier")
	};
}
function ni(i) {
	const { minWearMinutesPerDay: e, minValidDaysPerParticipant: a, requireWeekendDay: t, partialDayPolicy: n } = i.validDayCriteria;
	return {
		cutpointOverrides: i.physicalActivityCutpointOverrides,
		maskPolicy: v(i.physicalActivityMaskPolicy),
		username: i.username,
		validDayCriteria: {
			minWearMinutesPerDay: e,
			minValidDaysPerParticipant: a,
			requireWeekendDay: t,
			partialDayPolicy: n
		}
	};
}
async function li(i = {}) {
	const r = await a(i.dbOverride, { ...i.onlyFileIds ? { onlyFileIds: i.onlyFileIds } : {} }), p = i.username ?? "anonymous", d = i.maskPolicy ?? y, u = i.validDayCriteria, h = c("ggir_enmo"), g = c("mims"), b = c("preschool_free_living_rf_3_5"), v = X({
		method: h.method,
		label: h.label,
		requiredSignal: h.requiredSignal,
		sourceLabel: h.signalLabel,
		ruleLabel: "Uses imported GGIR daily sedentary, LPA, and MVPA summaries",
		unavailableAction: "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."
	}, null), f = e(i.signal), w = await Promise.all(_.map((e) => async function(i, e, a) {
		const t = e[i.method];
		if (!t) return i;
		const n = await x(t, a);
		if (!n) return i;
		const l = H(i);
		return {
			...i,
			ruleLabel: K(i, n, JSON.stringify(n) !== JSON.stringify(l)),
			cutpointBands: J(n, i.cutpointBands),
			cutpointScaleMax: Math.max(i.cutpointScaleMax ?? 1, ...Object.values(n).filter(Number.isFinite)),
			...n
		};
	}(e, i.cutpointOverrides ?? {}, f))), I = w.map((i, e) => function(i, e) {
		return {
			...X(i, null),
			cutpointThresholds: H(i),
			defaultCutpointThresholds: H(e),
			cutpointEditable: !0,
			defaultIntensityMinutes: {
				sedentaryMinutes: 0,
				lightMinutes: 0,
				moderateMinutes: 0,
				vigorousMinutes: 0,
				mvpaMinutes: 0
			}
		};
	}(i, _[e])), V = new Array(w.length).fill(!1), D = [], S = X({
		method: g.method,
		label: g.label,
		requiredSignal: g.requiredSignal,
		sourceLabel: g.signalLabel,
		ruleLabel: "Uses stored MIMS_UNIT epoch values from actours; intensity cutpoints/equating are not applied in this row.",
		unavailableAction: "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values.",
		unavailableStatus: "backend_required"
	}, null);
	S.mimsUnitTotal = 0, S.mimsUnitPerDay = 0;
	const q = X({
		method: b.method,
		label: b.label,
		requiredSignal: b.requiredSignal,
		sourceLabel: b.signalLabel,
		ruleLabel: "Uses actimetric Preschool Wrist Random Forest Free Living Lag-Lead classes: 1 sedentary, 2 lightGames, 3 moderatetovigorousGames, 4 walk, 5 run.",
		unavailableAction: "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.",
		unavailableStatus: "backend_required"
	}, null), R = c("hildebrand_enmo_wrist_2014"), E = X({
		method: R.method,
		label: R.label,
		requiredSignal: R.requiredSignal,
		sourceLabel: R.signalLabel,
		ruleLabel: "Hildebrand 2014 non-dominant wrist ENMO (mg) cut-points: MVPA >=201 mg, vigorous >=707 mg; light near ~45 mg. Applied to a calibrated ENMO (mg) epoch signal, never to ActiGraph counts.",
		unavailableAction: "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline; the browser count pipeline does not compute ENMO mg.",
		unavailableStatus: "needs_signal"
	}, null);
	let T = !1, A = !1, N = !1, C = !1;
	const P = s(), L = w.map(() => ({ total: 0 })), O = { total: 0 };
	for (const e of r) {
		if (i.signal?.throwIfAborted(), !e.id) continue;
		const a = e.id, s = await t(a, i.dbOverride), c = await l(a, p, i.dbOverride), r = await o(a, i.dbOverride), m = await M({
			db: i.dbOverride ?? null,
			fileId: a,
			kind: "analysis",
			...i.signal ? { signal: i.signal } : {},
			inputs: {
				epochLengthSeconds: e.epochLengthSeconds,
				sourceProfileId: e.sourceProfileId ?? null,
				summaries: s,
				markers: k(c),
				sensorNonwearPeriods: r,
				maskPolicy: d,
				validDayCriteria: u ?? null,
				thresholds: w.map(H),
				choiAxis: P
			}
		}, async () => ti({
			file: e,
			days: [...(await n(a, i.dbOverride, i.activityDayMemo)).values()],
			summaries: s,
			markersByAnalysisDate: c,
			sensorNonwearPeriods: r,
			maskPolicy: d,
			validDayCriteria: u,
			cutpointMethods: w,
			choiAxis: P,
			...i.signal ? { signal: i.signal } : {}
		}));
		m.shortfall && D.push(m.shortfall), m.ggirSummarySeen && (A = !0);
		for (const i of m.ggirRows) v.totalDays += 1, v.sedentaryMinutes += i.sedentaryMinutes, v.lightMinutes += i.lpaMinutes, v.mvpaMinutes += i.mvpaMinutes;
		m.hasAnyActivity && (T = !0), m.cutpoints.forEach((i, e) => {
			if (!i) return;
			const a = I[e];
			i.signalSeen && (V[e] = !0), ai(a, i.totals, d, L[e]), i.previewTrace && !a.previewTrace && (a.previewTrace = i.previewTrace), i.epochMismatch && !a.epochMismatch && (a.epochMismatch = i.epochMismatch);
		}), m.mims && (m.mims.signalSeen && (N = !0), ai(S, m.mims.totals, d, O)), m.preschoolRf && (m.preschoolRf.signalSeen && (C = !0), ai(q, m.preschoolRf.totals, d, O));
	}
	for (let e = 0; e < I.length; e++) {
		const i = I[e], a = w[e];
		i.mvpaMinutes = i.moderateMinutes + i.vigorousMinutes, 0 === i.totalDays && (i.available = !1, i.status = V[e] ? "ready" : "needs_signal", i.unavailableReason = V[e] ? D.length > 0 ? `Excluded by the valid-days-per-participant rule: ${D.join("; ")}. Change it in Study Settings → valid-day criteria.` : `No local ${i.sourceLabel.toLowerCase()} days meet the minimum wake-wear rule.` : T ? `No local ${i.sourceLabel.toLowerCase()} days are available.` : "No local activity epochs are available.", i.nextStepLabel = a.unavailableAction), ii(i);
	}
	v.moderateMinutes = v.mvpaMinutes, ii(v), 0 === v.totalDays && (v.available = !1, v.status = A ? "ready" : "needs_signal", v.unavailableReason = A ? "No local GGIR daily summaries meet the current inclusion rules." : "No local GGIR daily summaries are available. Import raw/5-second-capable files to populate ENMO summaries.", v.nextStepLabel = "Import raw/5-second-capable files or a supported workflow that stores GGIR daily summaries."), S.totalDays > 0 ? (S.available = !0, S.status = "ready", S.unavailableReason = null, S.nextStepLabel = null, S.mimsUnitPerDay = (S.mimsUnitTotal ?? 0) / S.totalDays) : (S.available = !1, S.status = N ? "ready" : "backend_required", S.unavailableReason = N ? "No stored MIMS_UNIT epoch days meet the current inclusion rules." : "No MIMS_UNIT epoch values are stored in this workspace yet. This becomes ready when the actours MIMS backend/WASM build computes and stores MIMS_UNIT epochs.", S.nextStepLabel = "Update the actours backend/WASM build to compute and store MIMS_UNIT epoch values."), ii(E), E.available = !1, E.status = "needs_signal", E.unavailableReason = "No calibrated ENMO (mg) epoch stream is available in this workspace. ENMO (mg) is a raw/GGIR-derived signal; the browser count pipeline does not produce it, so this method cannot classify counts against Hildebrand mg thresholds.", E.nextStepLabel = "Supply a calibrated ENMO (mg) epoch stream from the raw/GGIR pipeline.", ii(q), q.totalDays > 0 ? (q.available = !0, q.status = "ready", q.unavailableReason = null, q.nextStepLabel = null) : (q.available = !1, q.status = C ? "ready" : "backend_required", q.unavailableReason = C ? "No stored preschool wrist RF class days meet the current inclusion rules." : "No actimetric-compatible preschool wrist RF class epochs are stored in this workspace yet. This becomes ready when actours/WASM computes 15 s classes for 3-5 year-old wrist data.", q.nextStepLabel = "Update actours/WASM to compute actimetric-compatible preschool wrist RF 15 s class epochs.");
	const Y = r.map((i) => i.sourceProfileId);
	return [
		v,
		q,
		...I,
		E,
		S
	].filter((i) => m(i.method, Y));
}
export { Y as applicabilitySubjectForSelectionContext, li as computeLocalPhysicalActivityAnalysis, G as countPhysicalActivityStatuses, U as physicalActivityCutpointComparisons, B as physicalActivityCutpointThresholdEntries, W as physicalActivityIntensityDelta, F as physicalActivityNextStep, ni as physicalActivityStoreAnalysisOptions, j as recommendPhysicalActivityMethod, z as summarizePhysicalActivityReadiness };
