import { s as t } from "./ggir-results-types-WB8axvb-.js";
import "./schema-ovLsLXAy.js";
var r = t({ deleteMigrationBackups: () => n });
const a = "db-backups";
async function n(t) {
	try {
		const r = await async function() {
			if ("undefined" == typeof navigator || !navigator.storage?.getDirectory) return null;
			const t = await navigator.storage.getDirectory();
			try {
				return await t.getDirectoryHandle(a, { create: !1 });
			} catch (r) {
				if (r instanceof DOMException && "NotFoundError" === r.name) return null;
				throw r;
			}
		}();
		if (!r) return;
		for (const a of await async function(t, r) {
			const a = `${function(t) {
				return t.replace(/[^a-zA-Z0-9_-]/g, "_");
			}(r)}.`, n = [], o = t.keys();
			for await (const e of o) e.startsWith(a) && n.push(e);
			return n.sort();
		}(r, t)) await r.removeEntry(a);
	} catch {
		console.warn("[pre-migration-backup] a snapshot could not be removed");
	}
}
export { r as t };
