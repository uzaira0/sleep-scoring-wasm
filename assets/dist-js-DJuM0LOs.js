import { Channel as e, Resource as s, invoke as n } from "./core-B0WeKh9d.js";
var t = class extends s {
	constructor(e) {
		super(e.rid), this.available = !0, this.currentVersion = e.currentVersion, this.version = e.version, this.date = e.date, this.body = e.body, this.rawJson = e.rawJson;
	}
	async download(t, a) {
		d(a);
		const o = new e();
		t && (o.onmessage = t);
		const i = await n("plugin:updater|download", {
			onEvent: o,
			rid: this.rid,
			...a
		});
		this.downloadedBytes = new s(i);
	}
	async install() {
		if (!this.downloadedBytes) throw new Error("Update.install called before Update.download");
		await n("plugin:updater|install", {
			updateRid: this.rid,
			bytesRid: this.downloadedBytes.rid
		}), this.downloadedBytes = void 0;
	}
	async downloadAndInstall(s, t) {
		d(t);
		const a = new e();
		s && (a.onmessage = s), await n("plugin:updater|download_and_install", {
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
	const s = await n("plugin:updater|check", { ...e });
	return s ? new t(s) : null;
}
function d(e) {
	e?.headers && (e.headers = Array.from(new Headers(e.headers).entries()));
}
export { a as check };
