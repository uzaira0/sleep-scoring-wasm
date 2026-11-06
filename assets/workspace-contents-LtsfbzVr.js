import { f as t } from "./schema-B_tCLPTi.js";
import { t as a } from "./workspace-db-C0mqPCjA.js";
const r = [
	"files",
	"activityDays",
	"markers",
	"diaryEntries",
	"sensorNonwear",
	"dailyGgirSummaries"
];
async function s(s = a()) {
	const e = Object.fromEntries(await Promise.all(r.map(async (t) => [t, await s[t].count()])));
	let i = null;
	return await t(s.files, (t) => {
		(null === i || t.createdAt < i) && (i = t.createdAt);
	}), {
		...e,
		firstImportAt: i
	};
}
export { s as countWorkspaceContents };
