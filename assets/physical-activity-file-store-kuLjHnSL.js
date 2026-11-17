import { f as e, vr as t } from "./background-jobs-DfX4HEEW.js";
function a(e) {
	return [...e].sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, {
		isInvalidNight: t.isInvalidNight,
		sleep: t.sleepMarkers.map((e) => [
			e.markerType,
			e.onsetTimestamp,
			e.offsetTimestamp
		]),
		nonwear: t.nonwearMarkers.map((e) => [e.startTimestamp, e.endTimestamp])
	}]);
}
function i(e) {
	return e instanceof Map ? i([...e.entries()]) : Array.isArray(e) ? e.map(i) : null !== e && "object" == typeof e ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, i(t)])) : e;
}
async function r(a, r) {
	const { db: s, fileId: n, kind: o, inputs: c, signal: l } = a;
	l?.throwIfAborted();
	let m = s, p = null;
	if (m) try {
		const e = await m.activityDays.where("fileId").equals(n).primaryKeys();
		p = await t(JSON.stringify(i({
			version: 1,
			core: "521bfff32274a0ac7613a6befd3d34abc9a61ed4",
			kind: o,
			fileId: n,
			dayIds: [...e].sort((e, t) => Number(e) - Number(t)),
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
		await e(m, [m.physicalActivityFileSummaries], (e) => e.table(m.physicalActivityFileSummaries.name).put({
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
