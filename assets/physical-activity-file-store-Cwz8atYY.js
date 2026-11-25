import { f as e, z as t } from "./background-jobs-B9ASwEcR.js";
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
	let m = s, f = null;
	if (m) try {
		const e = await m.activityDays.where("fileId").equals(n).primaryKeys();
		f = await t(JSON.stringify(i({
			version: 1,
			core: "f30f9fd8829f8c335b2f52fca0ae68b73e09614b",
			kind: o,
			fileId: n,
			dayIds: [...e].sort((e, t) => Number(e) - Number(t)),
			inputs: c
		})));
		const a = await m.physicalActivityFileSummaries.get([n, o]);
		if (a?.inputKey === f) return a.value;
	} catch {
		m = null;
	}
	l?.throwIfAborted();
	const p = await r();
	if (l?.throwIfAborted(), m && f) try {
		await e(m, [m.physicalActivityFileSummaries], (e) => e.table(m.physicalActivityFileSummaries.name).put({
			fileId: n,
			kind: o,
			inputKey: f,
			value: p
		}), l);
	} catch {
		l?.throwIfAborted(), console.warn("[physical-activity] A file's answers could not be stored; the tab recomputes them.");
	}
	return p;
}
export { r as n, a as t };
