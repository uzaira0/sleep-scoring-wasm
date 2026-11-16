const a = {
	files: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "none",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: null
	},
	activityDays: {
		class: "derived",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 1,
		workspaceOrder: null
	},
	scoredVariantMasks: {
		class: "derived",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 2,
		workspaceOrder: null
	},
	markers: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 3,
		workspaceOrder: null
	},
	studySettings: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: 4
	},
	sensorNonwear: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 4,
		workspaceOrder: null
	},
	diaryEntries: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "diary",
		cascadeOrder: 5,
		workspaceOrder: null
	},
	stagedDiaryEntries: {
		class: "canonical",
		backup: !0,
		cascade: "attachedFileId",
		workspace: "unattached",
		aggregate: "diary",
		cascadeOrder: 7,
		workspaceOrder: 7
	},
	auditLog: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "none",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: null
	},
	scoringSessions: {
		class: "operational",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 8,
		workspaceOrder: null
	},
	walLog: {
		class: "operational",
		backup: !0,
		cascade: "fileId",
		workspace: "all",
		aggregate: "file",
		cascadeOrder: 20,
		workspaceOrder: 9
	},
	algorithmRuns: {
		class: "derived",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 9,
		workspaceOrder: null
	},
	dailyGgirSummaries: {
		class: "derived",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 12,
		workspaceOrder: null
	},
	viewLogs: {
		class: "operational",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: 6
	},
	localExecutions: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 10,
		workspaceOrder: null
	},
	complexityEvidence: {
		class: "derived",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 11,
		workspaceOrder: null
	},
	projectMeta: {
		class: "operational",
		backup: !1,
		cascade: null,
		workspace: "none",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: null
	},
	diaryBindingDirty: {
		class: "operational",
		backup: !1,
		cascade: null,
		workspace: "none",
		aggregate: "diary",
		cascadeOrder: null,
		workspaceOrder: null
	},
	presetFamilies: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "file",
		cascadeOrder: null,
		workspaceOrder: 5
	},
	diaryOccurrences: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "unattached",
		aggregate: "diary",
		cascadeOrder: 6,
		workspaceOrder: 8
	},
	diaryDecisionLogs: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "diary",
		cascadeOrder: null,
		workspaceOrder: 3
	},
	diaryImportSessions: {
		class: "operational",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "diary",
		cascadeOrder: null,
		workspaceOrder: 1
	},
	diaryImportSessionBytes: {
		class: "canonical",
		backup: !0,
		cascade: null,
		workspace: "all",
		aggregate: "diary",
		cascadeOrder: null,
		workspaceOrder: 2
	},
	ggirResultsBundles: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 13,
		workspaceOrder: null
	},
	ggirResultsBlobs: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 21,
		workspaceOrder: null
	},
	ggirCorrectedValues: {
		class: "derived",
		backup: !1,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 22,
		workspaceOrder: null
	},
	ggirScorerReviews: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 14,
		workspaceOrder: null
	},
	actiwareStatisticsInputs: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 15,
		workspaceOrder: null
	},
	physicalActivityFileSummaries: {
		class: "derived",
		backup: !1,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 16,
		workspaceOrder: null
	},
	markerProvenance: {
		class: "derived",
		backup: !1,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 17,
		workspaceOrder: null
	},
	actiwareFileData: {
		class: "canonical",
		backup: !0,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 18,
		workspaceOrder: null
	},
	placementResults: {
		class: "derived",
		backup: !1,
		cascade: "fileId",
		workspace: "none",
		aggregate: "file",
		cascadeOrder: 19,
		workspaceOrder: null
	}
}, e = Object.fromEntries(Object.entries(a).filter(([, a]) => null !== a.cascade).sort(([, a], [, e]) => a.cascadeOrder - e.cascadeOrder).map(([a, e]) => [a, e.cascade])), c = Object.entries(a).filter(([, a]) => "none" !== a.workspace).sort(([, a], [, e]) => a.workspaceOrder - e.workspaceOrder).map(([a]) => a), r = (Object.entries(a).filter(([, a]) => "unattached" === a.workspace).map(([a]) => a), Object.entries(a).filter(([, a]) => a.backup).map(([a]) => a), c.filter((e) => "diary" === a[e].aggregate), [{
	table: "actiwareFileData",
	field: "actiwareStatisticsNeedsRecompute"
}]);
export { r as n, c as r, e as t };
