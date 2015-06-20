'use strict';
var psList = require('ps-list');

module.exports = function (proc, cb) {
	var fn = function (x) {
		return x.pid === proc;
	};

	if (typeof proc === 'string') {
		fn = function (x) {
			return x.name === proc;
		};
	}

	psList(function (err, list) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, list.some(fn));
	});
};
