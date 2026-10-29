import { t } from "./workspace-db-BYjGbThz.js";
const a = [
	"files",
	"activityDays",
	"markers",
	"diaryEntries",
	"sensorNonwear",
	"dailyGgirSummaries"
];
async function r(r = t()) {
	const e = Object.fromEntries(await Promise.all(a.map(async (t) => [t, await r[t].count()])));
	let s = null;
	return await r.files.each((t) => {
		(null === s || t.createdAt < s) && (s = t.createdAt);
	}), {
		...e,
		firstImportAt: s
	};
}
export { r as countWorkspaceContents };
