import process from 'node:process';
import psList from 'ps-list';

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

export async function processExists(processName) {
	const processes = await psList();
	return processes.some(process_ => processMatchesName(processName, process_));
}

export async function processExistsMultiple(processNames) {
	const processes = await psList();
	return new Map(processNames.map(processName => [processName, processes.some(y => processMatchesName(processName, y))]));
}

export async function filterExistingProcesses(processNames) {
	const processes = await psList();
	return processNames.filter(processName => processes.some(process_ => processMatchesName(processName, process_)));
}
