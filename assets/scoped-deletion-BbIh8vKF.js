import "./workspace-db-B23VU-DP.js";
import { pt as t } from "./store-B8Nrfol3.js";
import "./wal-BnGcVSmY.js";
import "./pre-migration-backup-BnUq4jbI.js";
import "./workspace-switch-BEsn41r9.js";
const o = ["files", ...Object.keys(t)];
var e = class extends Error {
	receipt;
	constructor(r, t) {
		super("The deletion stopped part-way.", { cause: t }), this.name = "PartialDeletionError", this.receipt = r;
	}
};
async function s(r, t, s, a) {
	const c = r.map((r) => a(r, t, s)), i = function(r) {
		const t = {};
		for (const e of o) t[e] = r();
		return t;
	}(() => 0);
	let n = null;
	for (const o of c) try {
		i.markers += await o;
	} catch (p) {
		n ??= { error: p };
	}
	if (n) throw new e(i, n.error);
	return i;
}
export { s as deleteMarkersWithReceipt };
