'use strict';
const psList = require('ps-list');

const fn = (wantedProcessName, process) => {
	if (typeof wantedProcessName === 'string') {
		return process.name === wantedProcessName;
	}

	return process.pid === wantedProcessName;
};

module.exports = async processName => {
	const processes = await psList();
	return processes.some(x => fn(processName, x));
};

module.exports.all = async processName => {
	const processes = await psList();
	return new Map(processName.map(x => [x, processes.some(y => fn(x, y))]));
};

module.exports.filterExists = async processNames => {
	const processes = await psList();
	return processNames.filter(x => processes.some(y => fn(x, y)));
};
