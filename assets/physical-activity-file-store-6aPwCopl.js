import { a as t } from "./content-hash-CZ-UAlQR.js";
import { a as e } from "./project-revision-CT6PGNkq.js";
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
		const e = await m.activityDays.where("fileId").equals(n).primaryKeys();
		p = await t(JSON.stringify(i({
			version: 1,
			core: "6a2fb90827e6c3423cbda3d9f169ca0a98158ffc",
			kind: o,
			fileId: n,
			dayIds: [...e].sort((t, e) => Number(t) - Number(e)),
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
		await e(m, [m.physicalActivityFileSummaries], (t) => t.table(m.physicalActivityFileSummaries.name).put({
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
