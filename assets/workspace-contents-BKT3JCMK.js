import { d as t } from "./schema-Di6HdtCY.js";
import { t as a } from "./workspace-db-BWcAJTHt.js";
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
