import { f as t, gr as e } from "./background-jobs-CPaTeltP.js";
function a(t) {
	return [...t].sort(([t], [e]) => t.localeCompare(e)).map(([t, e]) => [t, {
		isInvalidNight: e.isInvalidNight,
		sleep: e.sleepMarkers.map((t) => [
			t.markerType,
			t.onsetTimestamp,
			t.offsetTimestamp
		]),
		nonwear: e.nonwearMarkers.map((t) => [t.startTimestamp, t.endTimestamp])
	}]);
}
function i(t) {
	return t instanceof Map ? i([...t.entries()]) : Array.isArray(t) ? t.map(i) : null !== t && "object" == typeof t ? Object.fromEntries(Object.entries(t).sort(([t], [e]) => t.localeCompare(e)).map(([t, e]) => [t, i(e)])) : t;
}
async function r(a, r) {
	const { db: s, fileId: n, kind: o, inputs: c, signal: l } = a;
	l?.throwIfAborted();
	let m = s, p = null;
	if (m) try {
		const t = await m.activityDays.where("fileId").equals(n).primaryKeys();
		p = await e(JSON.stringify(i({
			version: 1,
			core: "625364438780b4c50d8f867651f4c0be1fb3293c",
			kind: o,
			fileId: n,
			dayIds: [...t].sort((t, e) => Number(t) - Number(e)),
			inputs: c
		})));
		const a = await m.physicalActivityFileSummaries.get([n, o]);
		if (a?.inputKey === p) return a.value;
	} catch {
		m = null;
	}
	l?.throwIfAborted();
	const f = await r();
	if (l?.throwIfAborted(), m && p) try {
		await t(m, [m.physicalActivityFileSummaries], (t) => t.table(m.physicalActivityFileSummaries.name).put({
			fileId: n,
			kind: o,
			inputKey: p,
			value: f
		}), l);
	} catch {
		l?.throwIfAborted(), console.warn("[physical-activity] A file's answers could not be stored; the tab recomputes them.");
	}
	return f;
}
export { r as n, a as t };
