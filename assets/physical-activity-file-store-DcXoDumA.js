import { o as e } from "./content-hash-LIzlxz9S.js";
import { a as t } from "./project-revision-BP4u1UU7.js";
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
		const t = await m.activityDays.where("fileId").equals(n).primaryKeys();
		p = await e(JSON.stringify(i({
			version: 1,
			core: "59d94da08a9db2b6a3cbe26d7e3ce5dd75a2e84d",
			kind: o,
			fileId: n,
			dayIds: [...t].sort((e, t) => Number(e) - Number(t)),
			inputs: c
		})));
		const a = await m.physicalActivityFileSummaries.get([n, o]);
		if (a?.inputKey === p) return a.value;
	} catch {
		m = null;
	}
	l?.throwIfAborted();
	const d = await r();
	if (l?.throwIfAborted(), m && p) try {
		await t(m, [m.physicalActivityFileSummaries], (e) => e.table(m.physicalActivityFileSummaries.name).put({
			fileId: n,
			kind: o,
			inputKey: p,
			value: d
		}), l);
	} catch {
		l?.throwIfAborted(), console.warn("[physical-activity] A file's answers could not be stored; the tab recomputes them.");
	}
	return d;
}
export { r as n, a as t };
