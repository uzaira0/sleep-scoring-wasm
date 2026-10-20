import "./workspace-db-_xyOoViw.js";
import "./wal-CVnTSuSP.js";
import { ut as t } from "./store-B5F9spZt.js";
import "./pre-migration-backup-tjunbpJK.js";
const o = ["files", ...Object.keys(t)];
var e = class extends Error {
	receipt;
	constructor(r, t) {
		super("The deletion stopped part-way.", { cause: t }), this.name = "PartialDeletionError", this.receipt = r;
	}
};
async function s(r, t, s, n) {
	const a = r.map((r) => n(r, t, s)), c = function(r) {
		const t = {};
		for (const e of o) t[e] = r();
		return t;
	}(() => 0);
	let i = null;
	for (const o of a) try {
		c.markers += await o;
	} catch (p) {
		i ??= { error: p };
	}
	if (i) throw new e(c, i.error);
	return c;
}
export { s as deleteMarkersWithReceipt };
