import test from 'ava';
import noopProcess from 'noop-process';
import pify from 'pify';
import fn from './';

test('pid', async t => {
	t.true(await fn(process.pid));
	t.false(await fn(345234531));
});

test('title', async t => {
	const title = 'pe-test';

	await pify(noopProcess)({title: title});

	t.true(await fn(title));
	t.false(await fn('pe-unicorn'));
});
