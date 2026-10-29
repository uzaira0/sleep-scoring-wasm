import "./workspace-db-BYjGbThz.js";
import { ut as t } from "./store-BhwtrOGM.js";
import "./wal-CTtq2Qfg.js";
import "./pre-migration-backup-DLUPt10t.js";
const e = ["files", ...Object.keys(t)];
var o = class extends Error {
	receipt;
	constructor(r, t) {
		super("The deletion stopped part-way.", { cause: t }), this.name = "PartialDeletionError", this.receipt = r;
	}
};
async function s(r, t, s, a) {
	const n = r.map((r) => a(r, t, s)), c = function(r) {
		const t = {};
		for (const o of e) t[o] = r();
		return t;
	}(() => 0);
	let i = null;
	for (const e of n) try {
		c.markers += await e;
	} catch (p) {
		i ??= { error: p };
	}
	if (i) throw new o(c, i.error);
	return c;
}
export { s as deleteMarkersWithReceipt };
