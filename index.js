'use strict';
const psList = require('ps-list');

const fn = (proc, x) => {
	if (typeof proc === 'string') {
		return x.name === proc;
	}

	return x.pid === proc;
};

module.exports = proc => psList().then(list => list.some(x => fn(proc, x)));
module.exports.array = procs => psList().then(list => procs.filter(x => list.some(y => fn(x, y))));
