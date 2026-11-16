import { Channel as e, Resource as n, invoke as s } from "./core-B0WeKh9d.js";
var a = class extends n {
	constructor(e) {
		super(e.rid), this.available = !0, this.currentVersion = e.currentVersion, this.version = e.version, this.date = e.date, this.body = e.body, this.rawJson = e.rawJson;
	}
	async download(a, t) {
		d(t);
		const o = new e();
		a && (o.onmessage = a);
		const i = await s("plugin:updater|download", {
			onEvent: o,
			rid: this.rid,
			...t
		});
		this.downloadedBytes = new n(i);
	}
	async install() {
		if (!this.downloadedBytes) throw new Error("Update.install called before Update.download");
		await s("plugin:updater|install", {
			updateRid: this.rid,
			bytesRid: this.downloadedBytes.rid
		}), this.downloadedBytes = void 0;
	}
	async downloadAndInstall(n, a) {
		d(a);
		const t = new e();
		n && (t.onmessage = n), await s("plugin:updater|download_and_install", {
			onEvent: t,
			rid: this.rid,
			...a
		});
	}
	async close() {
		await this.downloadedBytes?.close(), await super.close();
	}
};
async function t(e) {
	d(e);
	const n = await s("plugin:updater|check", { ...e });
	return n ? new a(n) : null;
}
function d(e) {
	e?.headers && (e.headers = Array.from(new Headers(e.headers).entries()));
}
export { t as check };
