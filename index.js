'use strict';
const psList = require('ps-list');

module.exports = proc => {
	let fn = x => x.pid === proc;

	if (typeof proc === 'string') {
		fn = x => x.name === proc;
	}

	return psList().then(list => list.some(x => fn(x)));
};
