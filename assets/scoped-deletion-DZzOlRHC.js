import "./workspace-db-JjnY804x.js";
import { ut as t } from "./store-M9Z2jo4l.js";
import "./wal-DKC9g7lp.js";
import "./pre-migration-backup-COVERaGz.js";
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
