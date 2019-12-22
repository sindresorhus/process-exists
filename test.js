import test from 'ava';
import noopProcess from 'noop-process';
import processExists from '.';

test('pid', async t => {
	t.true(await processExists(process.pid));
	t.false(await processExists(345234531));
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

	t.deepEqual(await processExists.all([process.pid, title, 345234531, 'pe-unicorn']), new Map([
		[process.pid, true],
		[title, true],
		[345234531, false],
		['pe-unicorn', false]
	]));
});

test('filter', async t => {
	const title = 'pe-test';
	await noopProcess({title});
	t.deepEqual(await processExists.filterExists([process.pid, title, 345234531, 'pe-unicorn']), [process.pid, title]);
});
