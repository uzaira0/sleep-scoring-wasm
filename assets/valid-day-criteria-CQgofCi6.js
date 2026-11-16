import { m as t } from "./ggir-results-types-e7JA7N7O.js";
import { Hn as e } from "./background-jobs-CPaTeltP.js";
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var o = t((t) => {
	var e = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, o = Object.assign, r = {};
	function n(t, o, n) {
		this.props = t, this.context = o, this.refs = r, this.updater = n || e;
	}
	function s() {}
	function a(t, o, n) {
		this.props = t, this.context = o, this.refs = r, this.updater = n || e;
	}
	n.prototype.isReactComponent = {}, n.prototype.setState = function(t, e) {
		if ("object" != typeof t && "function" != typeof t && null != t) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, t, e, "setState");
	}, n.prototype.forceUpdate = function(t) {
		this.updater.enqueueForceUpdate(this, t, "forceUpdate");
	}, s.prototype = n.prototype;
	var i = a.prototype = new s();
	i.constructor = a, o(i, n.prototype), i.isPureReactComponent = !0, Array.isArray;
}), r = t((t, e) => {
	e.exports = o();
});
const n = e.valid_day_criteria;
export { r as n, n as t };
