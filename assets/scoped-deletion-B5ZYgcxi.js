import "./workspace-db-G2NWfsPg.js";
import "./wal-Bt8xbxst.js";
import { ft as r } from "./store-BZGrg5Yx.js";
import "./pre-migration-backup-Bov9RbdD.js";
const o = ["files", ...Object.keys(r)];
var e = class extends Error {
	receipt;
	constructor(r, t) {
		super("The deletion stopped part-way.", { cause: t }), this.name = "PartialDeletionError", this.receipt = r;
	}
};
async function s(r, t, s, a) {
	const n = r.map((r) => a(r, t, s)), c = function(r) {
		const t = {};
		for (const e of o) t[e] = r();
		return t;
	}(() => 0);
	let i = null;
	for (const o of n) try {
		c.markers += await o;
	} catch (p) {
		i ??= { error: p };
	}
	if (i) throw new e(c, i.error);
	return c;
}
export { s as deleteMarkersWithReceipt };
