import { Resource as e, SERIALIZE_TO_IPC_FN as i, invoke as t } from "./core-B0WeKh9d.js";
import { TauriEvent as n, emit as l, emitTo as s, listen as a, once as r } from "./event-BInfzwX-.js";
var o, u = class {
	constructor(...e) {
		this.type = "Logical", 1 === e.length ? "Logical" in e[0] ? (this.width = e[0].Logical.width, this.height = e[0].Logical.height) : (this.width = e[0].width, this.height = e[0].height) : (this.width = e[0], this.height = e[1]);
	}
	toPhysical(e) {
		return new h(this.width * e, this.height * e);
	}
	[i]() {
		return {
			width: this.width,
			height: this.height
		};
	}
	toJSON() {
		return this[i]();
	}
}, h = class {
	constructor(...e) {
		this.type = "Physical", 1 === e.length ? "Physical" in e[0] ? (this.width = e[0].Physical.width, this.height = e[0].Physical.height) : (this.width = e[0].width, this.height = e[0].height) : (this.width = e[0], this.height = e[1]);
	}
	toLogical(e) {
		return new u(this.width / e, this.height / e);
	}
	[i]() {
		return {
			width: this.width,
			height: this.height
		};
	}
	toJSON() {
		return this[i]();
	}
}, c = class {
	constructor(e) {
		this.size = e;
	}
	toLogical(e) {
		return this.size instanceof u ? this.size : this.size.toLogical(e);
	}
	toPhysical(e) {
		return this.size instanceof h ? this.size : this.size.toPhysical(e);
	}
	[i]() {
		return { [`${this.size.type}`]: {
			width: this.size.width,
			height: this.size.height
		} };
	}
	toJSON() {
		return this[i]();
	}
}, d = class {
	constructor(...e) {
		this.type = "Logical", 1 === e.length ? "Logical" in e[0] ? (this.x = e[0].Logical.x, this.y = e[0].Logical.y) : (this.x = e[0].x, this.y = e[0].y) : (this.x = e[0], this.y = e[1]);
	}
	toPhysical(e) {
		return new w(this.x * e, this.y * e);
	}
	[i]() {
		return {
			x: this.x,
			y: this.y
		};
	}
	toJSON() {
		return this[i]();
	}
}, w = class {
	constructor(...e) {
		this.type = "Physical", 1 === e.length ? "Physical" in e[0] ? (this.x = e[0].Physical.x, this.y = e[0].Physical.y) : (this.x = e[0].x, this.y = e[0].y) : (this.x = e[0], this.y = e[1]);
	}
	toLogical(e) {
		return new d(this.x / e, this.y / e);
	}
	[i]() {
		return {
			x: this.x,
			y: this.y
		};
	}
	toJSON() {
		return this[i]();
	}
}, b = class {
	constructor(e) {
		this.position = e;
	}
	toLogical(e) {
		return this.position instanceof d ? this.position : this.position.toLogical(e);
	}
	toPhysical(e) {
		return this.position instanceof w ? this.position : this.position.toPhysical(e);
	}
	[i]() {
		return { [`${this.position.type}`]: {
			x: this.position.x,
			y: this.position.y
		} };
	}
	toJSON() {
		return this[i]();
	}
}, g = class i extends e {
	constructor(e) {
		super(e);
	}
	static async new(e, n, l) {
		return t("plugin:image|new", {
			rgba: p(e),
			width: n,
			height: l
		}).then((e) => new i(e));
	}
	static async fromBytes(e) {
		return t("plugin:image|from_bytes", { bytes: p(e) }).then((e) => new i(e));
	}
	static async fromPath(e) {
		return t("plugin:image|from_path", { path: e }).then((e) => new i(e));
	}
	async rgba() {
		return t("plugin:image|rgba", { rid: this.rid }).then((e) => new Uint8Array(e));
	}
	async size() {
		return t("plugin:image|size", { rid: this.rid });
	}
};
function p(e) {
	return null == e ? null : "string" == typeof e ? e : e instanceof g ? e.rid : e;
}
(function(e) {
	e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(o || (o = {}));
var y, _ = class {
	constructor(e) {
		this._preventDefault = !1, this.event = e.event, this.id = e.id;
	}
	preventDefault() {
		this._preventDefault = !0;
	}
	isPreventDefault() {
		return this._preventDefault;
	}
};
function m() {
	return new W(window.__TAURI_INTERNALS__.metadata.currentWindow.label, { skip: !0 });
}
async function v() {
	return t("plugin:window|get_all_windows").then((e) => e.map((e) => new W(e, { skip: !0 })));
}
(function(e) {
	e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(y || (y = {}));
const f = ["tauri://created", "tauri://error"];
var z, x, D, S, W = class {
	constructor(e, i = {}) {
		var n;
		this.label = e, this.listeners = Object.create(null), null != i && i.skip || t("plugin:window|create", { options: {
			...i,
			parent: "string" == typeof i.parent ? i.parent : null === (n = i.parent) || void 0 === n ? void 0 : n.label,
			label: e
		} }).then(async () => this.emit("tauri://created")).catch(async (e) => this.emit("tauri://error", e));
	}
	static async getByLabel(e) {
		var i;
		return null !== (i = (await v()).find((i) => i.label === e)) && void 0 !== i ? i : null;
	}
	static getCurrent() {
		return m();
	}
	static async getAll() {
		return v();
	}
	static async getFocusedWindow() {
		for (const e of await v()) if (await e.isFocused()) return e;
		return null;
	}
	async listen(e, i) {
		return this._handleTauriEvent(e, i) ? () => {
			const t = this.listeners[e];
			t.splice(t.indexOf(i), 1);
		} : a(e, i, { target: {
			kind: "Window",
			label: this.label
		} });
	}
	async once(e, i) {
		return this._handleTauriEvent(e, i) ? () => {
			const t = this.listeners[e];
			t.splice(t.indexOf(i), 1);
		} : r(e, i, { target: {
			kind: "Window",
			label: this.label
		} });
	}
	async emit(e, i) {
		if (!f.includes(e)) return l(e, i);
		for (const t of this.listeners[e] || []) t({
			event: e,
			id: -1,
			payload: i
		});
	}
	async emitTo(e, i, t) {
		if (!f.includes(i)) return s(e, i, t);
		for (const n of this.listeners[i] || []) n({
			event: i,
			id: -1,
			payload: t
		});
	}
	_handleTauriEvent(e, i) {
		return !!f.includes(e) && (e in this.listeners ? this.listeners[e].push(i) : this.listeners[e] = [i], !0);
	}
	async scaleFactor() {
		return t("plugin:window|scale_factor", { label: this.label });
	}
	async innerPosition() {
		return t("plugin:window|inner_position", { label: this.label }).then((e) => new w(e));
	}
	async outerPosition() {
		return t("plugin:window|outer_position", { label: this.label }).then((e) => new w(e));
	}
	async innerSize() {
		return t("plugin:window|inner_size", { label: this.label }).then((e) => new h(e));
	}
	async outerSize() {
		return t("plugin:window|outer_size", { label: this.label }).then((e) => new h(e));
	}
	async isFullscreen() {
		return t("plugin:window|is_fullscreen", { label: this.label });
	}
	async isMinimized() {
		return t("plugin:window|is_minimized", { label: this.label });
	}
	async isMaximized() {
		return t("plugin:window|is_maximized", { label: this.label });
	}
	async isFocused() {
		return t("plugin:window|is_focused", { label: this.label });
	}
	async isDecorated() {
		return t("plugin:window|is_decorated", { label: this.label });
	}
	async isResizable() {
		return t("plugin:window|is_resizable", { label: this.label });
	}
	async isMaximizable() {
		return t("plugin:window|is_maximizable", { label: this.label });
	}
	async isMinimizable() {
		return t("plugin:window|is_minimizable", { label: this.label });
	}
	async isClosable() {
		return t("plugin:window|is_closable", { label: this.label });
	}
	async isVisible() {
		return t("plugin:window|is_visible", { label: this.label });
	}
	async title() {
		return t("plugin:window|title", { label: this.label });
	}
	async theme() {
		return t("plugin:window|theme", { label: this.label });
	}
	async isAlwaysOnTop() {
		return t("plugin:window|is_always_on_top", { label: this.label });
	}
	async activityName() {
		return t("plugin:window|activity_name", { label: this.label });
	}
	async sceneIdentifier() {
		return t("plugin:window|scene_identifier", { label: this.label });
	}
	async center() {
		return t("plugin:window|center", { label: this.label });
	}
	async requestUserAttention(e) {
		let i = null;
		return e && (i = e === o.Critical ? { type: "Critical" } : { type: "Informational" }), t("plugin:window|request_user_attention", {
			label: this.label,
			value: i
		});
	}
	async setResizable(e) {
		return t("plugin:window|set_resizable", {
			label: this.label,
			value: e
		});
	}
	async setEnabled(e) {
		return t("plugin:window|set_enabled", {
			label: this.label,
			value: e
		});
	}
	async isEnabled() {
		return t("plugin:window|is_enabled", { label: this.label });
	}
	async setMaximizable(e) {
		return t("plugin:window|set_maximizable", {
			label: this.label,
			value: e
		});
	}
	async setMinimizable(e) {
		return t("plugin:window|set_minimizable", {
			label: this.label,
			value: e
		});
	}
	async setClosable(e) {
		return t("plugin:window|set_closable", {
			label: this.label,
			value: e
		});
	}
	async setTitle(e) {
		return t("plugin:window|set_title", {
			label: this.label,
			value: e
		});
	}
	async maximize() {
		return t("plugin:window|maximize", { label: this.label });
	}
	async unmaximize() {
		return t("plugin:window|unmaximize", { label: this.label });
	}
	async toggleMaximize() {
		return t("plugin:window|toggle_maximize", { label: this.label });
	}
	async minimize() {
		return t("plugin:window|minimize", { label: this.label });
	}
	async unminimize() {
		return t("plugin:window|unminimize", { label: this.label });
	}
	async show() {
		return t("plugin:window|show", { label: this.label });
	}
	async hide() {
		return t("plugin:window|hide", { label: this.label });
	}
	async close() {
		return t("plugin:window|close", { label: this.label });
	}
	async destroy() {
		return t("plugin:window|destroy", { label: this.label });
	}
	async setDecorations(e) {
		return t("plugin:window|set_decorations", {
			label: this.label,
			value: e
		});
	}
	async setShadow(e) {
		return t("plugin:window|set_shadow", {
			label: this.label,
			value: e
		});
	}
	async setEffects(e) {
		return t("plugin:window|set_effects", {
			label: this.label,
			value: e
		});
	}
	async clearEffects() {
		return t("plugin:window|set_effects", {
			label: this.label,
			value: null
		});
	}
	async setAlwaysOnTop(e) {
		return t("plugin:window|set_always_on_top", {
			label: this.label,
			value: e
		});
	}
	async setAlwaysOnBottom(e) {
		return t("plugin:window|set_always_on_bottom", {
			label: this.label,
			value: e
		});
	}
	async setContentProtected(e) {
		return t("plugin:window|set_content_protected", {
			label: this.label,
			value: e
		});
	}
	async setSize(e) {
		return t("plugin:window|set_size", {
			label: this.label,
			value: e instanceof c ? e : new c(e)
		});
	}
	async setMinSize(e) {
		return t("plugin:window|set_min_size", {
			label: this.label,
			value: e instanceof c ? e : e ? new c(e) : null
		});
	}
	async setMaxSize(e) {
		return t("plugin:window|set_max_size", {
			label: this.label,
			value: e instanceof c ? e : e ? new c(e) : null
		});
	}
	async setSizeConstraints(e) {
		function i(e) {
			return e ? { Logical: e } : null;
		}
		return t("plugin:window|set_size_constraints", {
			label: this.label,
			value: {
				minWidth: i(null == e ? void 0 : e.minWidth),
				minHeight: i(null == e ? void 0 : e.minHeight),
				maxWidth: i(null == e ? void 0 : e.maxWidth),
				maxHeight: i(null == e ? void 0 : e.maxHeight)
			}
		});
	}
	async setPosition(e) {
		return t("plugin:window|set_position", {
			label: this.label,
			value: e instanceof b ? e : new b(e)
		});
	}
	async setFullscreen(e) {
		return t("plugin:window|set_fullscreen", {
			label: this.label,
			value: e
		});
	}
	async setSimpleFullscreen(e) {
		return t("plugin:window|set_simple_fullscreen", {
			label: this.label,
			value: e
		});
	}
	async setFocus() {
		return t("plugin:window|set_focus", { label: this.label });
	}
	async setFocusable(e) {
		return t("plugin:window|set_focusable", {
			label: this.label,
			value: e
		});
	}
	async setIcon(e) {
		return t("plugin:window|set_icon", {
			label: this.label,
			value: p(e)
		});
	}
	async setSkipTaskbar(e) {
		return t("plugin:window|set_skip_taskbar", {
			label: this.label,
			value: e
		});
	}
	async setCursorGrab(e) {
		return t("plugin:window|set_cursor_grab", {
			label: this.label,
			value: e
		});
	}
	async setCursorVisible(e) {
		return t("plugin:window|set_cursor_visible", {
			label: this.label,
			value: e
		});
	}
	async setCursorIcon(e) {
		return t("plugin:window|set_cursor_icon", {
			label: this.label,
			value: e
		});
	}
	async setBackgroundColor(e) {
		return t("plugin:window|set_background_color", { color: e });
	}
	async setCursorPosition(e) {
		return t("plugin:window|set_cursor_position", {
			label: this.label,
			value: e instanceof b ? e : new b(e)
		});
	}
	async setIgnoreCursorEvents(e) {
		return t("plugin:window|set_ignore_cursor_events", {
			label: this.label,
			value: e
		});
	}
	async startDragging() {
		return t("plugin:window|start_dragging", { label: this.label });
	}
	async startResizeDragging(e) {
		return t("plugin:window|start_resize_dragging", {
			label: this.label,
			value: e
		});
	}
	async setBadgeCount(e) {
		return t("plugin:window|set_badge_count", {
			label: this.label,
			value: e
		});
	}
	async setBadgeLabel(e) {
		return t("plugin:window|set_badge_label", {
			label: this.label,
			value: e
		});
	}
	async setOverlayIcon(e) {
		return t("plugin:window|set_overlay_icon", {
			label: this.label,
			value: e ? p(e) : void 0
		});
	}
	async setProgressBar(e) {
		return t("plugin:window|set_progress_bar", {
			label: this.label,
			value: e
		});
	}
	async setVisibleOnAllWorkspaces(e) {
		return t("plugin:window|set_visible_on_all_workspaces", {
			label: this.label,
			value: e
		});
	}
	async setTitleBarStyle(e) {
		return t("plugin:window|set_title_bar_style", {
			label: this.label,
			value: e
		});
	}
	async setTheme(e) {
		return t("plugin:window|set_theme", {
			label: this.label,
			value: e
		});
	}
	async onResized(e) {
		return this.listen(n.WINDOW_RESIZED, (i) => {
			i.payload = new h(i.payload), e(i);
		});
	}
	async onMoved(e) {
		return this.listen(n.WINDOW_MOVED, (i) => {
			i.payload = new w(i.payload), e(i);
		});
	}
	async onCloseRequested(e) {
		return this.listen(n.WINDOW_CLOSE_REQUESTED, async (i) => {
			const t = new _(i);
			await e(t), t.isPreventDefault() || await this.destroy();
		});
	}
	async onDragDropEvent(e) {
		const i = await this.listen(n.DRAG_ENTER, (i) => {
			e({
				...i,
				payload: {
					type: "enter",
					paths: i.payload.paths,
					position: new w(i.payload.position)
				}
			});
		}), t = await this.listen(n.DRAG_OVER, (i) => {
			e({
				...i,
				payload: {
					type: "over",
					position: new w(i.payload.position)
				}
			});
		}), l = await this.listen(n.DRAG_DROP, (i) => {
			e({
				...i,
				payload: {
					type: "drop",
					paths: i.payload.paths,
					position: new w(i.payload.position)
				}
			});
		}), s = await this.listen(n.DRAG_LEAVE, (i) => {
			e({
				...i,
				payload: { type: "leave" }
			});
		});
		return () => {
			i(), l(), t(), s();
		};
	}
	async onFocusChanged(e) {
		const i = await this.listen(n.WINDOW_FOCUS, (i) => {
			e({
				...i,
				payload: !0
			});
		}), t = await this.listen(n.WINDOW_BLUR, (i) => {
			e({
				...i,
				payload: !1
			});
		});
		return () => {
			i(), t();
		};
	}
	async onScaleChanged(e) {
		return this.listen(n.WINDOW_SCALE_FACTOR_CHANGED, e);
	}
	async onThemeChanged(e) {
		return this.listen(n.WINDOW_THEME_CHANGED, e);
	}
};
(function(e) {
	e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(z || (z = {})), function(e) {
	e.Default = "default", e.FluentOverlay = "fluentOverlay";
}(x || (x = {})), function(e) {
	e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
}(D || (D = {})), function(e) {
	e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
}(S || (S = {}));
export { y as ProgressBarStatus, m as getCurrentWindow };
