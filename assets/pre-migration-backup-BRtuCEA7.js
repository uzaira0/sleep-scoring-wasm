import { Pn as t } from "./schema-D8rqa1Y6.js";
import "./store-lifecycle-CBdMPA62.js";
import "./diagnostic-log-D1tZZeTx.js";
var r = t({ deleteMigrationBackups: () => a });
const o = "db-backups";
async function a(t) {
	try {
		const r = await async function() {
			if ("undefined" == typeof navigator || !navigator.storage?.getDirectory) return null;
			const t = await navigator.storage.getDirectory();
			try {
				return await t.getDirectoryHandle(o, { create: !1 });
			} catch (r) {
				if (r instanceof DOMException && "NotFoundError" === r.name) return null;
				throw r;
			}
		}();
		if (!r) return;
		for (const o of await async function(t, r) {
			const o = `${function(t) {
				return t.replace(/[^a-zA-Z0-9_-]/g, "_");
			}(r)}.`, a = [], n = t.keys();
			for await (const e of n) e.startsWith(o) && a.push(e);
			return a.sort();
		}(r, t)) await r.removeEntry(o);
	} catch {
		console.warn("[pre-migration-backup] a snapshot could not be removed");
	}
}
export { r as t };
