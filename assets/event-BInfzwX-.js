import { invoke as e, transformCallback as t } from "./core-B0WeKh9d.js";
var n;
async function a(t, n) {
	window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(t, n), await e("plugin:event|unlisten", {
		event: t,
		eventId: n
	});
}
async function r(n, r, i) {
	var u;
	const E = "string" == typeof (null == i ? void 0 : i.target) ? {
		kind: "AnyLabel",
		label: i.target
	} : null !== (u = null == i ? void 0 : i.target) && void 0 !== u ? u : { kind: "Any" };
	return e("plugin:event|listen", {
		event: n,
		target: E,
		handler: t(r)
	}).then((e) => async () => a(n, e));
}
async function i(e, t, n) {
	return r(e, (n) => {
		a(e, n.id), t(n);
	}, n);
}
async function u(t, n) {
	await e("plugin:event|emit", {
		event: t,
		payload: n
	});
}
async function E(t, n, a) {
	await e("plugin:event|emit_to", {
		target: "string" == typeof t ? {
			kind: "AnyLabel",
			label: t
		} : t,
		event: n,
		payload: a
	});
}
(function(e) {
	e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WINDOW_SUSPENDED = "tauri://suspended", e.WINDOW_RESUMED = "tauri://resumed", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(n || (n = {}));
export { n as TauriEvent, u as emit, E as emitTo, r as listen, i as once };
