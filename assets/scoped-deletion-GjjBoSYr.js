import "./workspace-db-BefNlCmL.js";
import { ut as t } from "./store-CaBUYg5g.js";
import "./wal-_ZRbt1uO.js";
import "./pre-migration-backup-DXpqsR9U.js";
const o = ["files", ...Object.keys(t)];
var e = class extends Error {
	receipt;
	constructor(r, t) {
		super("The deletion stopped part-way.", { cause: t }), this.name = "PartialDeletionError", this.receipt = r;
	}
};
async function s(r, t, s, a) {
	const c = r.map((r) => a(r, t, s)), n = function(r) {
		const t = {};
		for (const e of o) t[e] = r();
		return t;
	}(() => 0);
	let i = null;
	for (const o of c) try {
		n.markers += await o;
	} catch (p) {
		i ??= { error: p };
	}
	if (i) throw new e(n, i.error);
	return n;
}
export { s as deleteMarkersWithReceipt };
