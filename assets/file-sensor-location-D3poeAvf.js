function e(e, o) {
	return function(e, o) {
		const n = e?.recording, r = n?.bodySite;
		return "wrist" === r || "hip" === r ? {
			sensorLocation: r,
			source: n?.placementSourceReference ?? "declared"
		} : null != o ? {
			sensorLocation: o,
			source: "study_default"
		} : {
			sensorLocation: null,
			source: "unresolved"
		};
	}(e, o).sensorLocation;
}
export { e as t };
