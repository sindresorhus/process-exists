'use strict';
var test = require('ava');
var noopProcess = require('noop-process');
var pify = require('pify');
var processExists = require('./');

test('pid', function (t) {
	t.plan(2);

	processExists(process.pid).then(function (exists) {
		t.assert(exists);
	});

	processExists(345234531).then(function (exists) {
		t.assert(!exists);
	});
});

test('title', function (t) {
	t.plan(2);

	var title = 'pe-test';

	pify(noopProcess)({title: title}).then(function () {
		processExists(title).then(function (exists) {
			t.assert(exists);
		});

		processExists('pe-unicorn').then(function (exists) {
			t.assert(!exists);
		});
	});
});
