import "./workspace-db-ZwhOL3AY.js";
import "./store-D5LPiRds.js";
import { J as r } from "./night-session-registry-DhpX55ay.js";
import "./wal-eDWFo4nR.js";
import "./pre-migration-backup-DMzT7120.js";
import "./workspace-switch-pM7iOExL.js";
const o = ["files", ...Object.keys(r)];
var s = class extends Error {
	receipt;
	constructor(r, t) {
		super("The deletion stopped part-way.", { cause: t }), this.name = "PartialDeletionError", this.receipt = r;
	}
};
async function e(r, t, e, i) {
	const c = r.map((r) => i(r, t, e)), n = function(r) {
		const t = {};
		for (const s of o) t[s] = r();
		return t;
	}(() => 0);
	let a = null;
	for (const o of c) try {
		n.markers += await o;
	} catch (p) {
		a ??= { error: p };
	}
	if (a) throw new s(n, a.error);
	return n;
}
export { e as deleteMarkersWithReceipt };
