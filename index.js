'use strict';
var psList = require('ps-list');

module.exports = function (proc) {
	var fn = function (x) {
		return x.pid === proc;
	};

	if (typeof proc === 'string') {
		fn = function (x) {
			return x.name === proc;
		};
	}

	return psList().then(function (list) {
		return list.some(fn);
	});
};
