import "./store-CMG-u5eb.js";
var s = class extends Error {
	status;
	constructor(s, r) {
		super(s), this.name = "ApiError", this.status = r;
	}
};
export { s as t };
