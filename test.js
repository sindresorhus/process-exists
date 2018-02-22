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
	t.deepEqual(await m.array([process.pid, title, 345234531, 'pe-unicorn']), [process.pid, title]);
});
