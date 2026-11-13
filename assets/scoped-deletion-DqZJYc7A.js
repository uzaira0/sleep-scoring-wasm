import "./workspace-db-C2H_4Sk8.js";
import { dt as r } from "./store-Bx-glhNc.js";
import "./wal-Dd2d3Y4j.js";
import "./pre-migration-backup-Co1Ge4wj.js";
import "./workspace-switch-BaGHB5RP.js";
const o = ["files", ...Object.keys(r)];
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
