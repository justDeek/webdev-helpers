String.prototype.replaceAll = function (search, replacement) {
	return this.replace(new RegExp(search, "g"), replacement);
};