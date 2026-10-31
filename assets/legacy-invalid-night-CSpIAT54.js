const e = {
	main_sleep_on_invalid_night: {
		severity: "error",
		replayOnly: !1
	},
	multiple_main_sleep: {
		severity: "error",
		replayOnly: !1
	},
	first_marker_not_main_sleep: {
		severity: "warn",
		replayOnly: !1
	},
	marker_index_noncontiguous: {
		severity: "error",
		replayOnly: !1
	},
	boundaries_disordered: {
		severity: "error",
		replayOnly: !1
	},
	nonwear_flag_with_markers: {
		severity: "error",
		replayOnly: !1
	},
	manual_nonwear_in_sleep: {
		severity: "error",
		replayOnly: !1
	},
	marker_limit_exceeded: {
		severity: "error",
		replayOnly: !1
	},
	split_not_strictly_inside: {
		severity: "error",
		replayOnly: !1
	},
	merge_no_neighbor: {
		severity: "error",
		replayOnly: !1
	},
	mutation_on_read_only_view: {
		severity: "error",
		replayOnly: !1
	},
	undo_beyond_history: {
		severity: "error",
		replayOnly: !0
	},
	redo_beyond_history: {
		severity: "error",
		replayOnly: !0
	}
}, a = {
	access_changed: {
		anchor: "workspace",
		payloadKeys: [
			"subject",
			"scope",
			"before",
			"after"
		],
		payloadTypes: {
			subject: "string",
			scope: "string",
			before: "json",
			after: "json"
		},
		localPayloadKeys: [
			"subject",
			"scope",
			"before",
			"after"
		],
		localPayloadTypes: {
			subject: "string",
			scope: "string",
			before: "json",
			after: "json"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "access_control",
		label: "Access Changed",
		icon: "🔑",
		severity: "mutation",
		planes: "server",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	actiware_rest_edited: {
		anchor: "file",
		payloadKeys: [
			"edit",
			"from",
			"to"
		],
		payloadTypes: {
			edit: "string",
			from: "json",
			to: "json"
		},
		localPayloadKeys: [
			"edit",
			"from",
			"to"
		],
		localPayloadTypes: {
			edit: "string",
			from: "json",
			to: "json"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "marker_mutation",
		label: "Actiware Rest Edited",
		icon: "↔",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	app_version_changed: {
		anchor: "workspace",
		payloadKeys: ["before", "after"],
		payloadTypes: {
			before: "json",
			after: "json"
		},
		localPayloadKeys: ["before", "after"],
		localPayloadTypes: {
			before: "json",
			after: "json"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "App Version Changed",
		icon: "🏷",
		severity: "lifecycle",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	assignment_changed: {
		anchor: "workspace",
		payloadKeys: [
			"subject",
			"scope",
			"change",
			"fileIds",
			"fileCount"
		],
		payloadTypes: {
			subject: "string",
			scope: "string",
			change: "string",
			fileIds: "json",
			fileCount: "nullable_integer"
		},
		localPayloadKeys: [
			"subject",
			"scope",
			"change",
			"fileIds",
			"fileCount"
		],
		localPayloadTypes: {
			subject: "string",
			scope: "string",
			change: "string",
			fileIds: "json",
			fileCount: "nullable_integer"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "access_control",
		label: "File Assignment Changed",
		icon: "🔗",
		severity: "mutation",
		planes: "server",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	audit_chain_reanchored: {
		anchor: "workspace",
		payloadKeys: [
			"restoreId",
			"restoredRows",
			"firstRestoredHash",
			"lastRestoredHash"
		],
		payloadTypes: {
			restoreId: "string",
			restoredRows: "integer",
			firstRestoredHash: "string",
			lastRestoredHash: "string"
		},
		localPayloadKeys: [
			"restoreId",
			"restoredRows",
			"firstRestoredHash",
			"lastRestoredHash"
		],
		localPayloadTypes: {
			restoreId: "string",
			restoredRows: "integer",
			firstRestoredHash: "string",
			lastRestoredHash: "string"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Audit Chain Re-anchored",
		icon: "⛓",
		severity: "lifecycle",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	auto_nonwear_applied: {
		anchor: "session",
		payloadKeys: ["count", "markers"],
		payloadTypes: {
			count: "integer",
			markers: "json"
		},
		localPayloadKeys: ["count", "markers"],
		localPayloadTypes: {
			count: "integer",
			markers: "json"
		},
		stateEffect: ["nonwear_markers", "explicit_no_nonwear"],
		stateDeltaKeys: [],
		guards: [
			"marker_limit_exceeded",
			"nonwear_flag_with_markers",
			"marker_index_noncontiguous"
		],
		stateKeyframe: !0,
		nightDecision: !0,
		category: "algorithm_execution",
		label: "Auto-Nonwear Applied",
		icon: "⚡",
		severity: "mutation",
		planes: "both",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	auto_score_applied: {
		anchor: "session",
		payloadKeys: [
			"algorithm",
			"sleepCount",
			"napCount",
			"markers",
			"sleepPeriodDetectionConfig"
		],
		payloadTypes: {
			algorithm: "string",
			sleepCount: "integer",
			napCount: "integer",
			markers: "json",
			sleepPeriodDetectionConfig: "json"
		},
		localPayloadKeys: [
			"algorithm",
			"sleepCount",
			"napCount",
			"markers",
			"sleepPeriodDetectionConfig"
		],
		localPayloadTypes: {
			algorithm: "string",
			sleepCount: "integer",
			napCount: "integer",
			markers: "json",
			sleepPeriodDetectionConfig: "json"
		},
		stateEffect: ["sleep_markers"],
		stateDeltaKeys: [],
		guards: [
			"marker_limit_exceeded",
			"multiple_main_sleep",
			"main_sleep_on_invalid_night",
			"marker_index_noncontiguous"
		],
		stateKeyframe: !0,
		nightDecision: !0,
		category: "algorithm_execution",
		label: "Auto-Score Applied",
		icon: "⚡",
		severity: "mutation",
		planes: "both",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	candidate_copied: {
		anchor: "session",
		payloadKeys: [
			"kind",
			"candidateId",
			"label",
			"sleepCount",
			"nonwearCount"
		],
		payloadTypes: {
			kind: "string",
			candidateId: "nullable_integer",
			label: "string",
			sleepCount: "integer",
			nonwearCount: "integer"
		},
		localPayloadKeys: [
			"kind",
			"candidateId",
			"label",
			"sleepCount",
			"nonwearCount"
		],
		localPayloadTypes: {
			kind: "string",
			candidateId: "nullable_integer",
			label: "string",
			sleepCount: "integer",
			nonwearCount: "integer"
		},
		stateEffect: [
			"sleep_markers",
			"nonwear_markers",
			"is_invalid_night",
			"explicit_no_nonwear"
		],
		stateDeltaKeys: [],
		guards: [
			"marker_limit_exceeded",
			"multiple_main_sleep",
			"main_sleep_on_invalid_night",
			"marker_index_noncontiguous",
			"nonwear_flag_with_markers"
		],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "annotation",
		label: "Candidate Copied",
		icon: "📋",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	consensus_resolved: {
		anchor: "file",
		payloadKeys: ["kind"],
		payloadTypes: { kind: "string" },
		localPayloadKeys: ["kind"],
		localPayloadTypes: { kind: "string" },
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "consensus",
		label: "Consensus Resolved",
		icon: "✔",
		severity: "lifecycle",
		planes: "server",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	consensus_toggled: {
		anchor: "session",
		payloadKeys: ["value"],
		payloadTypes: { value: "boolean" },
		localPayloadKeys: ["value"],
		localPayloadTypes: { value: "boolean" },
		stateEffect: ["needs_consensus"],
		stateDeltaKeys: ["value"],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "consensus",
		label: "Consensus Toggled",
		icon: "🤝",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	consensus_vote_cast: {
		anchor: "session",
		payloadKeys: [
			"kind",
			"candidateId",
			"leadingCandidateId",
			"totalVotes"
		],
		payloadTypes: {
			kind: "string",
			candidateId: "nullable_integer",
			leadingCandidateId: "nullable_integer",
			totalVotes: "integer"
		},
		localPayloadKeys: [
			"kind",
			"candidateId",
			"leadingCandidateId",
			"totalVotes"
		],
		localPayloadTypes: {
			kind: "string",
			candidateId: "nullable_integer",
			leadingCandidateId: "nullable_integer",
			totalVotes: "integer"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "consensus",
		label: "Consensus Vote Cast",
		icon: "🗳",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	data_exported: {
		anchor: "workspace",
		payloadKeys: [
			"subject",
			"scope",
			"format",
			"filename",
			"byteSize",
			"rowCount",
			"dayCount",
			"fileCount",
			"exportId"
		],
		payloadTypes: {
			subject: "string",
			scope: "string",
			format: "string",
			filename: "string",
			byteSize: "integer",
			rowCount: "nullable_integer",
			dayCount: "nullable_integer",
			fileCount: "nullable_integer",
			exportId: "nullable_string"
		},
		localPayloadKeys: [
			"subject",
			"scope",
			"format",
			"filename",
			"byteSize",
			"rowCount",
			"dayCount",
			"fileCount",
			"exportId"
		],
		localPayloadTypes: {
			subject: "string",
			scope: "string",
			format: "string",
			filename: "string",
			byteSize: "integer",
			rowCount: "nullable_integer",
			dayCount: "nullable_integer",
			fileCount: "nullable_integer",
			exportId: "nullable_string"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "data_egress",
		label: "Data Exported",
		icon: "⤴",
		severity: "lifecycle",
		planes: "both",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_attached: {
		anchor: "file",
		payloadKeys: ["sourceKey"],
		payloadTypes: { sourceKey: "nullable_string" },
		localPayloadKeys: ["sourceKey"],
		localPayloadTypes: { sourceKey: "nullable_string" },
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary Attached",
		icon: "🔗",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_changed: {
		anchor: "file",
		payloadKeys: ["change", "fields"],
		payloadTypes: {
			change: "string",
			fields: "string_list"
		},
		localPayloadKeys: ["sourceKey", "fields"],
		localPayloadTypes: {
			sourceKey: "nullable_string",
			fields: "string_list"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary Changed",
		icon: "✏",
		severity: "mutation",
		planes: "server",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_decision_recorded: {
		anchor: "workspace",
		payloadKeys: [
			"sourceSha256",
			"ruleKind",
			"scope",
			"outcome",
			"nights"
		],
		payloadTypes: {
			sourceSha256: "string",
			ruleKind: "json",
			scope: "string",
			outcome: "json",
			nights: "integer"
		},
		localPayloadKeys: [
			"sourceSha256",
			"ruleKind",
			"scope",
			"outcome",
			"nights"
		],
		localPayloadTypes: {
			sourceSha256: "string",
			ruleKind: "json",
			scope: "string",
			outcome: "json",
			nights: "integer"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary Decision Recorded",
		icon: "🗳",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_decision_state_restored: {
		anchor: "workspace",
		payloadKeys: [
			"sourceSha256",
			"restorePoint",
			"reflagged",
			"unflagged",
			"nights"
		],
		payloadTypes: {
			sourceSha256: "string",
			restorePoint: "string",
			reflagged: "integer",
			unflagged: "integer",
			nights: "integer"
		},
		localPayloadKeys: [
			"sourceSha256",
			"restorePoint",
			"reflagged",
			"unflagged",
			"nights"
		],
		localPayloadTypes: {
			sourceSha256: "string",
			restorePoint: "string",
			reflagged: "integer",
			unflagged: "integer",
			nights: "integer"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary Decision State Restored",
		icon: "⏮",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_decision_state_saved: {
		anchor: "workspace",
		payloadKeys: [
			"sourceSha256",
			"restorePoint",
			"decisions"
		],
		payloadTypes: {
			sourceSha256: "string",
			restorePoint: "string",
			decisions: "json"
		},
		localPayloadKeys: [
			"sourceSha256",
			"restorePoint",
			"decisions"
		],
		localPayloadTypes: {
			sourceSha256: "string",
			restorePoint: "string",
			decisions: "json"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary Decision State Saved",
		icon: "📌",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_decisions_reset: {
		anchor: "workspace",
		payloadKeys: [
			"sourceSha256",
			"decisions",
			"nights"
		],
		payloadTypes: {
			sourceSha256: "string",
			decisions: "json",
			nights: "integer"
		},
		localPayloadKeys: [
			"sourceSha256",
			"decisions",
			"nights"
		],
		localPayloadTypes: {
			sourceSha256: "string",
			decisions: "json",
			nights: "integer"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary Decisions Reset",
		icon: "♻",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_discarded: {
		anchor: "workspace",
		payloadKeys: ["sourceKey", "analysisDate"],
		payloadTypes: {
			sourceKey: "nullable_string",
			analysisDate: "nullable_string"
		},
		localPayloadKeys: ["sourceKey", "analysisDate"],
		localPayloadTypes: {
			sourceKey: "nullable_string",
			analysisDate: "nullable_string"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary Discarded",
		icon: "🗑",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_repaired: {
		anchor: "workspace",
		payloadKeys: ["applied", "fields"],
		payloadTypes: {
			applied: "integer",
			fields: "string_list"
		},
		localPayloadKeys: ["applied", "fields"],
		localPayloadTypes: {
			applied: "integer",
			fields: "string_list"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary Repaired",
		icon: "🩹",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_session_saved: {
		anchor: "workspace",
		payloadKeys: [
			"sourceSha256Prefix",
			"status",
			"step"
		],
		payloadTypes: {
			sourceSha256Prefix: "string",
			status: "string",
			step: "string"
		},
		localPayloadKeys: [
			"sourceSha256Prefix",
			"status",
			"step"
		],
		localPayloadTypes: {
			sourceSha256Prefix: "string",
			status: "string",
			step: "string"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary session saved",
		icon: "🧪",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_staged: {
		anchor: "workspace",
		payloadKeys: [
			"staged",
			"replaced",
			"skipped"
		],
		payloadTypes: {
			staged: "integer",
			replaced: "integer",
			skipped: "integer"
		},
		localPayloadKeys: [
			"staged",
			"replaced",
			"skipped"
		],
		localPayloadTypes: {
			staged: "integer",
			replaced: "integer",
			skipped: "integer"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary Staged",
		icon: "🛏",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	diary_workspace_cleared: {
		anchor: "workspace",
		payloadKeys: [
			"staged",
			"canonical",
			"occurrences"
		],
		payloadTypes: {
			staged: "integer",
			canonical: "integer",
			occurrences: "integer"
		},
		localPayloadKeys: [
			"staged",
			"canonical",
			"occurrences"
		],
		localPayloadTypes: {
			staged: "integer",
			canonical: "integer",
			occurrences: "integer"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Diary Workspace Cleared",
		icon: "🧹",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	export_cancelled: {
		anchor: "workspace",
		payloadKeys: [
			"exportId",
			"filename",
			"reason"
		],
		payloadTypes: {
			exportId: "string",
			filename: "string",
			reason: "string"
		},
		localPayloadKeys: [
			"exportId",
			"filename",
			"reason"
		],
		localPayloadTypes: {
			exportId: "string",
			filename: "string",
			reason: "string"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "data_egress",
		label: "Export Cancelled",
		icon: "⤫",
		severity: "lifecycle",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	export_started: {
		anchor: "workspace",
		payloadKeys: [
			"subject",
			"scope",
			"format",
			"filename",
			"byteSize",
			"rowCount",
			"dayCount",
			"fileCount",
			"exportId"
		],
		payloadTypes: {
			subject: "string",
			scope: "string",
			format: "string",
			filename: "string",
			byteSize: "integer",
			rowCount: "nullable_integer",
			dayCount: "nullable_integer",
			fileCount: "nullable_integer",
			exportId: "string"
		},
		localPayloadKeys: [
			"subject",
			"scope",
			"format",
			"filename",
			"byteSize",
			"rowCount",
			"dayCount",
			"fileCount",
			"exportId"
		],
		localPayloadTypes: {
			subject: "string",
			scope: "string",
			format: "string",
			filename: "string",
			byteSize: "integer",
			rowCount: "nullable_integer",
			dayCount: "nullable_integer",
			fileCount: "nullable_integer",
			exportId: "string"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "data_egress",
		label: "Export Started",
		icon: "⇢",
		severity: "lifecycle",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	file_deleted: {
		anchor: "file",
		payloadKeys: ["filename"],
		payloadTypes: { filename: "string" },
		localPayloadKeys: ["filename"],
		localPayloadTypes: { filename: "string" },
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "file_operation",
		label: "File Deleted",
		icon: "🗑",
		severity: "lifecycle",
		planes: "server",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	file_processed: {
		anchor: "file",
		payloadKeys: ["filename"],
		payloadTypes: { filename: "string" },
		localPayloadKeys: ["filename"],
		localPayloadTypes: { filename: "string" },
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "file_operation",
		label: "File Processed",
		icon: "⚙",
		severity: "lifecycle",
		planes: "server",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	file_reprocessed: {
		anchor: "file",
		payloadKeys: ["filename"],
		payloadTypes: { filename: "string" },
		localPayloadKeys: ["filename"],
		localPayloadTypes: { filename: "string" },
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "file_operation",
		label: "File Reprocessed",
		icon: "🔁",
		severity: "lifecycle",
		planes: "server",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	file_uploaded: {
		anchor: "file",
		payloadKeys: ["filename"],
		payloadTypes: { filename: "string" },
		localPayloadKeys: ["filename"],
		localPayloadTypes: { filename: "string" },
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "file_operation",
		label: "File Uploaded",
		icon: "⬆",
		severity: "lifecycle",
		planes: "server",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	invalid_night_toggled: {
		anchor: "session",
		payloadKeys: ["value", "clearedSleepMarkers"],
		payloadTypes: {
			value: "boolean",
			clearedSleepMarkers: "json"
		},
		localPayloadKeys: ["value", "clearedSleepMarkers"],
		localPayloadTypes: {
			value: "boolean",
			clearedSleepMarkers: "json"
		},
		stateEffect: ["is_invalid_night", "sleep_markers"],
		stateDeltaKeys: ["value", "clearedSleepMarkers"],
		guards: ["main_sleep_on_invalid_night", "first_marker_not_main_sleep"],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "annotation",
		label: "Invalid Night Toggled",
		icon: "⏸",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	marker_adjusted: {
		anchor: "session",
		payloadKeys: [
			"category",
			"periodIndex",
			"updates"
		],
		payloadTypes: {
			category: "string",
			periodIndex: "integer",
			updates: "json"
		},
		localPayloadKeys: [
			"category",
			"periodIndex",
			"updates"
		],
		localPayloadTypes: {
			category: "string",
			periodIndex: "integer",
			updates: "json"
		},
		stateEffect: [
			"sleep_markers",
			"nonwear_markers",
			"explicit_no_nonwear"
		],
		stateDeltaKeys: [
			"category",
			"periodIndex",
			"updates"
		],
		guards: ["mutation_on_read_only_view", "boundaries_disordered"],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "marker_mutation",
		label: "Marker Adjusted",
		icon: "⇄",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	marker_deleted: {
		anchor: "session",
		payloadKeys: [
			"category",
			"periodIndex",
			"before"
		],
		payloadTypes: {
			category: "string",
			periodIndex: "integer",
			before: "json"
		},
		localPayloadKeys: [
			"category",
			"periodIndex",
			"before"
		],
		localPayloadTypes: {
			category: "string",
			periodIndex: "integer",
			before: "json"
		},
		stateEffect: ["sleep_markers", "nonwear_markers"],
		stateDeltaKeys: [
			"category",
			"periodIndex",
			"before"
		],
		guards: [
			"mutation_on_read_only_view",
			"first_marker_not_main_sleep",
			"marker_index_noncontiguous"
		],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "marker_mutation",
		label: "Marker Deleted",
		icon: "×",
		severity: "mutation",
		planes: "both",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	marker_moved: {
		anchor: "session",
		payloadKeys: ["before", "after"],
		payloadTypes: {
			before: "json",
			after: "json"
		},
		localPayloadKeys: ["before", "after"],
		localPayloadTypes: {
			before: "json",
			after: "json"
		},
		stateEffect: ["sleep_markers", "nonwear_markers"],
		stateDeltaKeys: [],
		guards: ["boundaries_disordered", "marker_index_noncontiguous"],
		stateKeyframe: !0,
		nightDecision: !0,
		category: "marker_mutation",
		label: "Marker Moved",
		icon: "↔",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	marker_placed: {
		anchor: "session",
		payloadKeys: ["category", "periodIndex"],
		payloadTypes: {
			category: "string",
			periodIndex: "integer"
		},
		localPayloadKeys: ["category", "periodIndex"],
		localPayloadTypes: {
			category: "string",
			periodIndex: "integer"
		},
		stateEffect: [
			"sleep_markers",
			"nonwear_markers",
			"explicit_no_nonwear"
		],
		stateDeltaKeys: ["category", "periodIndex"],
		guards: [
			"mutation_on_read_only_view",
			"marker_limit_exceeded",
			"multiple_main_sleep",
			"main_sleep_on_invalid_night",
			"boundaries_disordered",
			"marker_index_noncontiguous"
		],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "marker_mutation",
		label: "Marker Placed",
		icon: "+",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	markers_cleared: {
		anchor: "session",
		payloadKeys: ["sleepCount", "nonwearCount"],
		payloadTypes: {
			sleepCount: "integer",
			nonwearCount: "integer"
		},
		localPayloadKeys: ["sleepCount", "nonwearCount"],
		localPayloadTypes: {
			sleepCount: "integer",
			nonwearCount: "integer"
		},
		stateEffect: ["sleep_markers", "nonwear_markers"],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "marker_mutation",
		label: "Markers Cleared",
		icon: "⌫",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	markers_saved: {
		anchor: "session",
		payloadKeys: [
			"sleepCount",
			"nonwearCount",
			"notes",
			"isInvalidNight",
			"explicitNoNonwear",
			"sleepPeriodDetectionConfig"
		],
		payloadTypes: {
			sleepCount: "integer",
			nonwearCount: "integer",
			notes: "json",
			isInvalidNight: "boolean",
			explicitNoNonwear: "boolean",
			sleepPeriodDetectionConfig: "json"
		},
		localPayloadKeys: [
			"sleepCount",
			"nonwearCount",
			"notes",
			"isInvalidNight",
			"explicitNoNonwear",
			"sleepPeriodDetectionConfig"
		],
		localPayloadTypes: {
			sleepCount: "integer",
			nonwearCount: "integer",
			notes: "json",
			isInvalidNight: "boolean",
			explicitNoNonwear: "boolean",
			sleepPeriodDetectionConfig: "json"
		},
		stateEffect: ["saved"],
		stateDeltaKeys: ["sleepCount", "nonwearCount"],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "scoring_lifecycle",
		label: "Markers Saved",
		icon: "💾",
		severity: "lifecycle",
		planes: "both",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	markers_synced: {
		anchor: "workspace",
		payloadKeys: [
			"pushed",
			"pulled",
			"conflicts",
			"errorCount"
		],
		payloadTypes: {
			pushed: "integer",
			pulled: "integer",
			conflicts: "integer",
			errorCount: "integer"
		},
		localPayloadKeys: [
			"pushed",
			"pulled",
			"conflicts",
			"errorCount"
		],
		localPayloadTypes: {
			pushed: "integer",
			pulled: "integer",
			conflicts: "integer",
			errorCount: "integer"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Markers Synced",
		icon: "🔄",
		severity: "lifecycle",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	no_nonwear_toggled: {
		anchor: "session",
		payloadKeys: ["value"],
		payloadTypes: { value: "boolean" },
		localPayloadKeys: ["value"],
		localPayloadTypes: { value: "boolean" },
		stateEffect: ["explicit_no_nonwear", "nonwear_markers"],
		stateDeltaKeys: ["value"],
		guards: ["nonwear_flag_with_markers"],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "annotation",
		label: "No Nonwear Toggled",
		icon: "⏭",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	notes_changed: {
		anchor: "session",
		payloadKeys: [
			"before",
			"after",
			"beforeLength",
			"afterLength"
		],
		payloadTypes: {
			before: "string",
			after: "string",
			beforeLength: "integer",
			afterLength: "integer"
		},
		localPayloadKeys: [
			"before",
			"after",
			"beforeLength",
			"afterLength"
		],
		localPayloadTypes: {
			before: "string",
			after: "string",
			beforeLength: "integer",
			afterLength: "integer"
		},
		stateEffect: ["notes"],
		stateDeltaKeys: ["before", "after"],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "annotation",
		label: "Notes Changed",
		icon: "📝",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	preset_changed: {
		anchor: "workspace",
		payloadKeys: [
			"family",
			"change",
			"preset",
			"before",
			"count"
		],
		payloadTypes: {
			family: "string",
			change: "string",
			preset: "json",
			before: "json",
			count: "integer"
		},
		localPayloadKeys: [
			"family",
			"change",
			"preset",
			"before",
			"count"
		],
		localPayloadTypes: {
			family: "string",
			change: "string",
			preset: "json",
			before: "json",
			count: "integer"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Preset Changed",
		icon: "🎛",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	redo: {
		anchor: "session",
		payloadKeys: [],
		payloadTypes: {},
		localPayloadKeys: [],
		localPayloadTypes: {},
		stateEffect: [
			"sleep_markers",
			"nonwear_markers",
			"is_invalid_night",
			"explicit_no_nonwear",
			"needs_consensus",
			"notes"
		],
		stateDeltaKeys: [],
		guards: ["mutation_on_read_only_view", "redo_beyond_history"],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "scoring_lifecycle",
		label: "Redo",
		icon: "↪",
		severity: "navigation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	session_end: {
		anchor: "session",
		payloadKeys: [],
		payloadTypes: {},
		localPayloadKeys: [],
		localPayloadTypes: {},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "scoring_lifecycle",
		label: "Session End",
		icon: "■",
		severity: "lifecycle",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	session_start: {
		anchor: "session",
		payloadKeys: [
			"sleepMarkers",
			"nonwearMarkers",
			"isInvalidNight",
			"explicitNoNonwear",
			"needsConsensus",
			"notes"
		],
		payloadTypes: {
			sleepMarkers: "json",
			nonwearMarkers: "json",
			isInvalidNight: "boolean",
			explicitNoNonwear: "boolean",
			needsConsensus: "boolean",
			notes: "json"
		},
		localPayloadKeys: [
			"sleepMarkers",
			"nonwearMarkers",
			"isInvalidNight",
			"explicitNoNonwear",
			"needsConsensus",
			"notes"
		],
		localPayloadTypes: {
			sleepMarkers: "json",
			nonwearMarkers: "json",
			isInvalidNight: "boolean",
			explicitNoNonwear: "boolean",
			needsConsensus: "boolean",
			notes: "json"
		},
		stateEffect: [
			"sleep_markers",
			"nonwear_markers",
			"is_invalid_night",
			"explicit_no_nonwear",
			"needs_consensus",
			"notes"
		],
		stateDeltaKeys: [],
		guards: [
			"main_sleep_on_invalid_night",
			"multiple_main_sleep",
			"marker_index_noncontiguous",
			"boundaries_disordered",
			"nonwear_flag_with_markers",
			"manual_nonwear_in_sleep"
		],
		stateKeyframe: !0,
		nightDecision: !1,
		category: "scoring_lifecycle",
		label: "Session Start",
		icon: "▶",
		severity: "lifecycle",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	settings_changed: {
		anchor: "workspace",
		payloadKeys: [
			"scope",
			"key",
			"before",
			"after"
		],
		payloadTypes: {
			scope: "string",
			key: "string",
			before: "json",
			after: "json"
		},
		localPayloadKeys: [
			"scope",
			"key",
			"before",
			"after"
		],
		localPayloadTypes: {
			scope: "string",
			key: "string",
			before: "json",
			after: "json"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Setting Changed",
		icon: "⚙",
		severity: "mutation",
		planes: "both",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	settings_reset: {
		anchor: "workspace",
		payloadKeys: ["scope", "changed"],
		payloadTypes: {
			scope: "string",
			changed: "json"
		},
		localPayloadKeys: ["scope", "changed"],
		localPayloadTypes: {
			scope: "string",
			changed: "json"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Settings Reset",
		icon: "♻",
		severity: "mutation",
		planes: "server",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	sleep_period_merged: {
		anchor: "session",
		payloadKeys: ["periodIndex", "direction"],
		payloadTypes: {
			periodIndex: "integer",
			direction: "json"
		},
		localPayloadKeys: ["periodIndex", "direction"],
		localPayloadTypes: {
			periodIndex: "integer",
			direction: "json"
		},
		stateEffect: ["sleep_markers"],
		stateDeltaKeys: ["periodIndex", "direction"],
		guards: ["mutation_on_read_only_view", "merge_no_neighbor"],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "marker_mutation",
		label: "Sleep Period Merged",
		icon: "⑃",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	sleep_period_split: {
		anchor: "session",
		payloadKeys: [
			"periodIndex",
			"at",
			"firstOffset"
		],
		payloadTypes: {
			periodIndex: "integer",
			at: "integer",
			firstOffset: "integer"
		},
		localPayloadKeys: [
			"periodIndex",
			"at",
			"firstOffset"
		],
		localPayloadTypes: {
			periodIndex: "integer",
			at: "integer",
			firstOffset: "integer"
		},
		stateEffect: ["sleep_markers"],
		stateDeltaKeys: [
			"periodIndex",
			"at",
			"firstOffset"
		],
		guards: ["mutation_on_read_only_view", "split_not_strictly_inside"],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "marker_mutation",
		label: "Sleep Period Split",
		icon: "⑂",
		severity: "mutation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	system_migration: {
		anchor: "workspace",
		payloadKeys: [
			"before",
			"after",
			"subject"
		],
		payloadTypes: {
			before: "json",
			after: "json",
			subject: "string"
		},
		localPayloadKeys: [
			"before",
			"after",
			"subject"
		],
		localPayloadTypes: {
			before: "json",
			after: "json",
			subject: "string"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "system",
		label: "System Migration",
		icon: "🛠",
		severity: "lifecycle",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	system_recalculation: {
		anchor: "workspace",
		payloadKeys: ["subject"],
		payloadTypes: { subject: "string" },
		localPayloadKeys: ["subject"],
		localPayloadTypes: { subject: "string" },
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "system",
		label: "System Recalculation",
		icon: "∑",
		severity: "lifecycle",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	transition_flagged: {
		anchor: "session",
		payloadKeys: [
			"intent",
			"guard",
			"disposition"
		],
		payloadTypes: {
			intent: "string",
			guard: "string",
			disposition: "string"
		},
		localPayloadKeys: [
			"intent",
			"guard",
			"disposition"
		],
		localPayloadTypes: {
			intent: "string",
			guard: "string",
			disposition: "string"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "scoring_lifecycle",
		label: "Transition Flagged",
		icon: "⚠",
		severity: "info",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	undo: {
		anchor: "session",
		payloadKeys: [],
		payloadTypes: {},
		localPayloadKeys: [],
		localPayloadTypes: {},
		stateEffect: [
			"sleep_markers",
			"nonwear_markers",
			"is_invalid_night",
			"explicit_no_nonwear",
			"needs_consensus",
			"notes"
		],
		stateDeltaKeys: [],
		guards: ["mutation_on_read_only_view", "undo_beyond_history"],
		stateKeyframe: !1,
		nightDecision: !0,
		category: "scoring_lifecycle",
		label: "Undo",
		icon: "↩",
		severity: "navigation",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	},
	workspace_deleted: {
		anchor: "workspace",
		payloadKeys: [
			"workspaceId",
			"displayName",
			"auditRowsTotal",
			"auditRowsReplicated",
			"auditRowsDestroyed"
		],
		payloadTypes: {
			workspaceId: "string",
			displayName: "string",
			auditRowsTotal: "integer",
			auditRowsReplicated: "integer",
			auditRowsDestroyed: "integer"
		},
		localPayloadKeys: [
			"workspaceId",
			"displayName",
			"auditRowsTotal",
			"auditRowsReplicated",
			"auditRowsDestroyed"
		],
		localPayloadTypes: {
			workspaceId: "string",
			displayName: "string",
			auditRowsTotal: "integer",
			auditRowsReplicated: "integer",
			auditRowsDestroyed: "integer"
		},
		stateEffect: [],
		stateDeltaKeys: [],
		guards: [],
		stateKeyframe: !1,
		nightDecision: !1,
		category: "configuration",
		label: "Workspace Deleted",
		icon: "🧨",
		severity: "lifecycle",
		planes: "local",
		summaryCase: !0,
		genericSummaryOk: !1
	}
}, s = {
	ACCESS_CHANGED: "access_changed",
	ACTIWARE_REST_EDITED: "actiware_rest_edited",
	APP_VERSION_CHANGED: "app_version_changed",
	ASSIGNMENT_CHANGED: "assignment_changed",
	AUDIT_CHAIN_REANCHORED: "audit_chain_reanchored",
	AUTO_NONWEAR_APPLIED: "auto_nonwear_applied",
	AUTO_SCORE_APPLIED: "auto_score_applied",
	CANDIDATE_COPIED: "candidate_copied",
	CONSENSUS_RESOLVED: "consensus_resolved",
	CONSENSUS_TOGGLED: "consensus_toggled",
	CONSENSUS_VOTE_CAST: "consensus_vote_cast",
	DATA_EXPORTED: "data_exported",
	DIARY_ATTACHED: "diary_attached",
	DIARY_CHANGED: "diary_changed",
	DIARY_DECISION_RECORDED: "diary_decision_recorded",
	DIARY_DECISION_STATE_RESTORED: "diary_decision_state_restored",
	DIARY_DECISION_STATE_SAVED: "diary_decision_state_saved",
	DIARY_DECISIONS_RESET: "diary_decisions_reset",
	DIARY_DISCARDED: "diary_discarded",
	DIARY_REPAIRED: "diary_repaired",
	DIARY_SESSION_SAVED: "diary_session_saved",
	DIARY_STAGED: "diary_staged",
	DIARY_WORKSPACE_CLEARED: "diary_workspace_cleared",
	EXPORT_CANCELLED: "export_cancelled",
	EXPORT_STARTED: "export_started",
	FILE_DELETED: "file_deleted",
	FILE_PROCESSED: "file_processed",
	FILE_REPROCESSED: "file_reprocessed",
	FILE_UPLOADED: "file_uploaded",
	INVALID_NIGHT_TOGGLED: "invalid_night_toggled",
	MARKER_ADJUSTED: "marker_adjusted",
	MARKER_DELETED: "marker_deleted",
	MARKER_MOVED: "marker_moved",
	MARKER_PLACED: "marker_placed",
	MARKERS_CLEARED: "markers_cleared",
	MARKERS_SAVED: "markers_saved",
	MARKERS_SYNCED: "markers_synced",
	NO_NONWEAR_TOGGLED: "no_nonwear_toggled",
	NOTES_CHANGED: "notes_changed",
	PRESET_CHANGED: "preset_changed",
	REDO: "redo",
	SESSION_END: "session_end",
	SESSION_START: "session_start",
	SETTINGS_CHANGED: "settings_changed",
	SETTINGS_RESET: "settings_reset",
	SLEEP_PERIOD_MERGED: "sleep_period_merged",
	SLEEP_PERIOD_SPLIT: "sleep_period_split",
	SYSTEM_MIGRATION: "system_migration",
	SYSTEM_RECALCULATION: "system_recalculation",
	TRANSITION_FLAGGED: "transition_flagged",
	UNDO: "undo",
	WORKSPACE_DELETED: "workspace_deleted"
}, t = "isNoSleep", n = "is_no_sleep", o = "no_sleep", r = "no_sleep_toggled", i = "main_sleep_on_no_sleep_night", l = Object.freeze({ [r]: "invalid_night_toggled" }), c = Object.freeze({ [i]: "main_sleep_on_invalid_night" }), y = ["stateBefore", "stateAfter"], d = ["before", "after"], g = [[n, "is_invalid_night"], ["no_sleep_dates", "invalid_night_dates"]], p = ["annotations", "candidates"], u = (Object.freeze({
	camel: t,
	snake: n,
	placement: o,
	auditAction: r,
	exportHeader: "Is No Sleep",
	guard: i
}), t), m = [
	"isInvalidNight",
	"is_invalid_night",
	t,
	n
];
function _(e) {
	if ("object" != typeof e || null === e) return;
	const a = e;
	for (const s of m) {
		const e = a[s];
		if ("boolean" == typeof e) return e;
	}
}
function f(e) {
	const a = _(e) ?? !1, s = Object.hasOwn(e, t) || e.isInvalidNight !== a;
	return Reflect.deleteProperty(e, t), e.isInvalidNight = a, s;
}
function h(e) {
	return "object" == typeof e && null !== e && !Array.isArray(e);
}
function K(e, a, s) {
	if (!h(e) || !Object.hasOwn(e, a)) return e;
	const t = Object.entries(e).filter(([e]) => e !== a);
	return Object.hasOwn(e, s) || t.push([s, e[a]]), Object.fromEntries(t);
}
function D(e, a) {
	const s = e.map(a);
	return s.some((a, s) => a !== e[s]) ? s : e;
}
function b(e, a, s) {
	return e[a] === s ? e : {
		...e,
		[a]: s
	};
}
function k(e) {
	const a = Object.entries(e).map(([e, a]) => [e, K(a, o, "invalid_night")]);
	return a.some(([a, s]) => s !== e[a]) ? Object.fromEntries(a) : e;
}
function C(e) {
	return K(K(e, t, "isInvalidNight"), n, "is_invalid_night");
}
function E(e, s) {
	let t = C(e);
	const n = function(e) {
		return Object.hasOwn(a, e) && a[e].nightDecision;
	}(s) ? [...y, ...d] : y;
	for (const a of n) Object.hasOwn(t, a) && (t = b(t, a, C(t[a])));
	const o = t.guard;
	return "string" == typeof o && Object.hasOwn(c, o) && (t = b(t, "guard", c[o])), t;
}
function S(e, a) {
	const s = E(e, a), t = s.extra;
	return h(t) ? b(s, "extra", E(t, a)) : s;
}
function T(e) {
	if (!h(e)) return e;
	let a = e;
	for (const [o, r] of g) a = K(a, o, r);
	const s = a.type, t = a.data, n = a.event_type;
	if ("string" == typeof n && (a = b(a, "event_type", w(n))), "string" == typeof s && h(t)) {
		const e = w(s);
		a = b(b(a, "type", e), "data", S(t, e));
	}
	return a;
}
const v = /no_?sleep|NoSleep/i;
function P(e) {
	if (!v.test(e)) return null;
	let a;
	try {
		a = JSON.parse(e);
	} catch {
		return null;
	}
	const s = function(e) {
		if (Array.isArray(e)) return D(e, T);
		const a = T(e);
		if (!h(a)) return a;
		let s = a;
		for (const t of p) {
			const e = s[t];
			Array.isArray(e) && (s = b(s, t, D(e, T)));
		}
		return s;
	}(a);
	return s === a ? null : JSON.stringify(s);
}
function w(e) {
	return Object.hasOwn(l, e) ? l[e] : e;
}
function O(e) {
	const a = w(e.action), s = e.payload ? S(e.payload, a) : e.payload;
	return a === e.action && s === e.payload ? e : {
		...e,
		action: a,
		payload: s
	};
}
export { P as a, a as c, k as i, s as l, w as n, _ as o, O as r, f as s, u as t, e as u };
