# process-exists [![Build Status](https://travis-ci.org/sindresorhus/process-exists.svg?branch=master)](https://travis-ci.org/sindresorhus/process-exists)

> Check if a process is running


## Install

```
$ npm install --save process-exists
```


## Usage

```js
var processExists = require('process-exists');

processExists(process.pid, function (err, exists) {
	console.log(exists);
	//=> true
});
```


## API

### processExists(input, callback)

#### input

Type: `number`, `string`

Process ID/name to check.

#### callback(error, exists)

Type: `function`


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
