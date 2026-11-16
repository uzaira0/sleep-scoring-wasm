import "./workspace-db-DU4CzwX1.js";
import "./store-BrZppDwj.js";
import { q as t } from "./night-session-registry-DJqsXW29.js";
import "./wal-CKT9mrFN.js";
import "./pre-migration-backup-Cjn1Nea7.js";
import "./workspace-switch-C6_XRrf6.js";
const o = ["files", ...Object.keys(t)];
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
