import "./workspace-db-tot7PUXb.js";
import "./store-StTfKmbj.js";
import { t } from "./store-lifecycle-CBdMPA62.js";
import "./wal-dFFTBSLU.js";
import "./pre-migration-backup-BRtuCEA7.js";
import "./workspace-switch-BgWTFkct.js";
const o = ["files", ...Object.keys(t)];
var e = class extends Error {
	receipt;
	constructor(r, t) {
		super("The deletion stopped part-way.", { cause: t }), this.name = "PartialDeletionError", this.receipt = r;
	}
};
async function s(r, t, s, c) {
	const i = r.map((r) => c(r, t, s)), a = function(r) {
		const t = {};
		for (const e of o) t[e] = r();
		return t;
	}(() => 0);
	let n = null;
	for (const o of i) try {
		a.markers += await o;
	} catch (p) {
		n ??= { error: p };
	}
	if (n) throw new e(a, n.error);
	return a;
}
export { s as deleteMarkersWithReceipt };
