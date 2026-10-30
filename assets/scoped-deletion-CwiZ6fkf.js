import "./workspace-db-B3utkwB9.js";
import { ut as t } from "./store-BNAycYdF.js";
import "./wal-DTdDspx6.js";
import "./pre-migration-backup-DL65obDR.js";
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
