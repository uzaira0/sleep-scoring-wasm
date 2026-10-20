import { Resource as t, invoke as e } from "./core-B0WeKh9d.js";
var i, n;
function a(t) {
	return {
		isFile: t.isFile,
		isDirectory: t.isDirectory,
		isSymlink: t.isSymlink,
		size: t.size,
		mtime: null !== t.mtime ? new Date(t.mtime) : null,
		atime: null !== t.atime ? new Date(t.atime) : null,
		birthtime: null !== t.birthtime ? new Date(t.birthtime) : null,
		readonly: t.readonly,
		fileAttributes: t.fileAttributes,
		dev: t.dev,
		ino: t.ino,
		mode: t.mode,
		nlink: t.nlink,
		uid: t.uid,
		gid: t.gid,
		rdev: t.rdev,
		blksize: t.blksize,
		blocks: t.blocks
	};
}
(function(t) {
	t[t.Audio = 1] = "Audio", t[t.Cache = 2] = "Cache", t[t.Config = 3] = "Config", t[t.Data = 4] = "Data", t[t.LocalData = 5] = "LocalData", t[t.Document = 6] = "Document", t[t.Download = 7] = "Download", t[t.Picture = 8] = "Picture", t[t.Public = 9] = "Public", t[t.Video = 10] = "Video", t[t.Resource = 11] = "Resource", t[t.Temp = 12] = "Temp", t[t.AppConfig = 13] = "AppConfig", t[t.AppData = 14] = "AppData", t[t.AppLocalData = 15] = "AppLocalData", t[t.AppCache = 16] = "AppCache", t[t.AppLog = 17] = "AppLog", t[t.Desktop = 18] = "Desktop", t[t.Executable = 19] = "Executable", t[t.Font = 20] = "Font", t[t.Home = 21] = "Home", t[t.Runtime = 22] = "Runtime", t[t.Template = 23] = "Template";
})(i || (i = {})), function(t) {
	t[t.Start = 0] = "Start", t[t.Current = 1] = "Current", t[t.End = 2] = "End";
}(n || (n = {}));
var r = class extends t {
	async read(t) {
		if (0 === t.byteLength) return 0;
		const i = await e("plugin:fs|read", {
			rid: this.rid,
			len: t.byteLength
		}), n = function(t) {
			const e = new Uint8ClampedArray(t), i = e.byteLength;
			let n = 0;
			for (let a = 0; a < i; a++) n *= 256, n += e[a];
			return n;
		}(i.slice(-8)), a = i instanceof ArrayBuffer ? new Uint8Array(i) : i;
		return t.set(a.slice(0, a.length - 8)), 0 === n ? null : n;
	}
	async seek(t, i) {
		return await e("plugin:fs|seek", {
			rid: this.rid,
			offset: t,
			whence: i
		});
	}
	async stat() {
		return a(await e("plugin:fs|fstat", { rid: this.rid }));
	}
	async truncate(t) {
		await e("plugin:fs|ftruncate", {
			rid: this.rid,
			len: t
		});
	}
	async write(t) {
		return await e("plugin:fs|write", {
			rid: this.rid,
			data: t
		});
	}
};
async function o(t, i) {
	if (t instanceof URL && "file:" !== t.protocol) throw new TypeError("Must be a file URL.");
	return new r(await e("plugin:fs|open", {
		path: t instanceof URL ? t.toString() : t,
		options: i
	}));
}
async function s(t, i) {
	return a(await e("plugin:fs|stat", {
		path: t instanceof URL ? t.toString() : t,
		options: i
	}));
}
export { n as SeekMode, o as open, s as stat };
