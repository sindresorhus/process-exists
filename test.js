import process from 'node:process';
import test from 'ava';
import noopProcess from 'noop-process';
import {processExists, processExistsMultiple, filterExistingProcesses} from './index.js';

test('pid', async t => {
	t.true(await processExists(process.pid));
	t.false(await processExists(345_234_531));
});

test('title', async t => {
	const title = 'pe-test';

	await noopProcess({title});

	t.true(await processExists(title));
	t.false(await processExists('pe-unicorn'));
});

test('multiple', async t => {
	const title = 'pe-test';
	await noopProcess({title});

	t.deepEqual(await processExistsMultiple([process.pid, title, 345_234_531, 'pe-unicorn']), new Map([
		[process.pid, true],
		[title, true],
		[345_234_531, false],
		['pe-unicorn', false],
	]));
});

test('filter', async t => {
	const title = 'pe-test';
	await noopProcess({title});
	t.deepEqual(await filterExistingProcesses([process.pid, title, 345_234_531, 'pe-unicorn']), [process.pid, title]);
});
