'use strict';
const psList = require('ps-list');

const linuxProcessMatchesName = (wantedProcessName, process) => {
	if (typeof wantedProcessName === 'string') {
		return process.name === wantedProcessName || process.cmd.split(' ')[0] === wantedProcessName;
	}

	return process.pid === wantedProcessName;
};

const nonLinuxProcessMatchesName = (wantedProcessName, process) => {
	if (typeof wantedProcessName === 'string') {
		return process.name === wantedProcessName;
	}

	return process.pid === wantedProcessName;
};

const processMatchesName = process.platform === 'linux' ? linuxProcessMatchesName : nonLinuxProcessMatchesName;

module.exports = async processName => {
	const processes = await psList();
	return processes.some(x => processMatchesName(processName, x));
};

module.exports.all = async processName => {
	const processes = await psList();
	return new Map(processName.map(x => [x, processes.some(y => processMatchesName(x, y))]));
};

module.exports.filterExists = async processNames => {
	const processes = await psList();
	return processNames.filter(x => processes.some(y => processMatchesName(x, y)));
};
