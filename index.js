'use strict';
var psList = require('ps-list');
var pify = require('pify');
var Promise = require('pinkie-promise');

module.exports = function (proc) {
	var fn = function (x) {
		return x.pid === proc;
	};

	if (typeof proc === 'string') {
		fn = function (x) {
			return x.name === proc;
		};
	}

	return pify(psList, Promise)().then(function (list) {
		return list.some(fn);
	});
};
