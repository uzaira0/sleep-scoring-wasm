const e = /[^\p{L}\p{N}]+/gu;
function n(n) {
	return n.normalize("NFKC").trim().toLowerCase().replace(e, "_").replace(/^_+|_+$/g, "");
}
function t(e) {
	return Math.min(200, Math.max(0, Math.floor(Number.isFinite(e) ? e : 0)));
}
function r(e) {
	return e ? e.includes("") ? e.split("").map((e) => e.trim()).filter(Boolean) : e.trim().length > 0 ? [e.trim()] : [] : [];
}
function a(e) {
	return e.map((e) => e.trim()).filter(Boolean).join("");
}
function o(e, t) {
	const a = new Map(t.map((e) => [e.key, e.label])), o = /* @__PURE__ */ new Map();
	for (const [l, s] of Object.entries(e)) {
		const e = r(s), t = a.get(l);
		if (t) for (const r of e) {
			const e = n(r);
			if (0 === e.length) continue;
			const a = o.get(e);
			a ? a.labels.push(t) : o.set(e, {
				value: r,
				labels: [t]
			});
		}
	}
	return [...o.entries()].filter(([, e]) => e.labels.length > 1).map(([e, n]) => ({
		key: `duplicate_column:${e}`,
		message: `Column "${n.value}" is mapped to ${n.labels.join(" and ")}. Use each source column once.`
	}));
}
function l(e, t, a) {
	if (void 0 === a) return [];
	const o = new Map(t.map((e) => [e.key, e.label])), l = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
	for (const r of a) {
		const e = r.trim(), t = n(e);
		if (0 === t.length) continue;
		const a = l.get(t);
		a ? s.set(t, a) : l.set(t, e);
	}
	return Object.entries(e).map(([e, t]) => {
		const a = r(t), l = o.get(e);
		return l && 0 !== a.length ? a.map((e) => {
			const t = n(e), r = s.get(t);
			return r ? {
				key: `duplicate_header:${t}`,
				message: `Mapped column "${r}" for ${l} appears more than once in the current preview. Rename duplicate columns before importing.`
			} : null;
		}).filter((e) => null !== e) : [];
	}).flat();
}
function s(e, t, a) {
	if (void 0 === a) return [];
	const o = new Map(t.map((e) => [e.key, e.label])), l = new Set(a.map(n));
	return Object.entries(e).map(([e, t]) => {
		const a = r(t), s = o.get(e);
		return s && 0 !== a.length ? a.map((t) => {
			const r = n(t);
			return 0 === r.length || l.has(r) ? null : {
				key: `missing_column:${e}`,
				message: `Mapped column "${t}" for ${s} is not in the current preview.`
			};
		}).filter((e) => null !== e) : [];
	}).flat();
}
export { n as a, t as i, o as n, r as o, a as r, s, l as t };
