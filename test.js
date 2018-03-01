import test from 'ava';
import noopProcess from 'noop-process';
import m from '.';

test('pid', async t => {
	t.true(await m(process.pid));
	t.false(await m(345234531));
});

test('title', async t => {
	const title = 'pe-test';

	await noopProcess({title});

	t.true(await m(title));
	t.false(await m('pe-unicorn'));
});

test('multiple', async t => {
	const title = 'pe-test';
	await noopProcess({title});

	t.deepEqual(await m.all([process.pid, title, 345234531, 'pe-unicorn']), new Map([
		[process.pid, true],
		[title, true],
		[345234531, false],
		['pe-unicorn', false]
	]));
});

test('filter', async t => {
	const title = 'pe-test';
	await noopProcess({title});
	const procs = await m.all([process.pid, title, 345234531, 'pe-unicorn']);
	t.deepEqual(m.filterExists(procs), [process.pid, title]);
});
