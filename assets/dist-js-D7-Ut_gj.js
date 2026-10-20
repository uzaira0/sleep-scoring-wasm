import { Channel as e, Resource as n, invoke as s } from "./core-B0WeKh9d.js";
var t = class extends n {
	constructor(e) {
		super(e.rid), this.available = !0, this.currentVersion = e.currentVersion, this.version = e.version, this.date = e.date, this.body = e.body, this.rawJson = e.rawJson;
	}
	async download(t, a) {
		d(a);
		const o = new e();
		t && (o.onmessage = t);
		const i = await s("plugin:updater|download", {
			onEvent: o,
			rid: this.rid,
			...a
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
	async downloadAndInstall(n, t) {
		d(t);
		const a = new e();
		n && (a.onmessage = n), await s("plugin:updater|download_and_install", {
			onEvent: a,
			rid: this.rid,
			...t
		});
	}
	async close() {
		await this.downloadedBytes?.close(), await super.close();
	}
};
async function a(e) {
	d(e);
	const n = await s("plugin:updater|check", { ...e });
	return n ? new t(n) : null;
}
function d(e) {
	e?.headers && (e.headers = Array.from(new Headers(e.headers).entries()));
}
export { a as check };
