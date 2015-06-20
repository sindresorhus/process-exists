'use strict';
var test = require('ava');
var noopProcess = require('noop-process');
var processExists = require('./');

test('pid', function (t) {
	t.plan(4);

	processExists(process.pid, function (err, exists) {
		t.assert(!err, err);
		t.assert(exists);
	});

	processExists(345234531, function (err, exists) {
		t.assert(!err, err);
		t.assert(!exists);
	});
});

test('title', function (t) {
	t.plan(4);

	var title = 'pe-test';

	noopProcess({title: title});

	setTimeout(function () {
		processExists(title, function (err, exists) {
			t.assert(!err, err);
			t.assert(exists);
		});

		processExists('pe-unicorn', function (err, exists) {
			t.assert(!err, err);
			t.assert(!exists);
		});
	// TODO: figure out why this is needed on Linux
	}, 500);
});
