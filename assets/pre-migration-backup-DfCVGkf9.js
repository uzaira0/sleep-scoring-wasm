import { r as t } from "./rolldown-runtime-BAJaJb8v.js";
import "./schema-CYmiFjVW.js";
var r = t({ deleteMigrationBackups: () => o });
const n = "db-backups";
async function o(t) {
	try {
		const r = await async function() {
			if ("undefined" == typeof navigator || !navigator.storage?.getDirectory) return null;
			const t = await navigator.storage.getDirectory();
			try {
				return await t.getDirectoryHandle(n, { create: !1 });
			} catch (r) {
				if (r instanceof DOMException && "NotFoundError" === r.name) return null;
				throw r;
			}
		}();
		if (!r) return;
		for (const n of await async function(t, r) {
			const n = `${function(t) {
				return t.replace(/[^a-zA-Z0-9_-]/g, "_");
			}(r)}.`, o = [], a = t.keys();
			for await (const e of a) e.startsWith(n) && o.push(e);
			return o.sort();
		}(r, t)) await r.removeEntry(n);
	} catch {
		console.warn("[pre-migration-backup] a snapshot could not be removed");
	}
}
export { r as t };
