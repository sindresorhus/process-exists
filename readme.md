# process-exists [![Build Status](https://travis-ci.org/sindresorhus/process-exists.svg?branch=master)](https://travis-ci.org/sindresorhus/process-exists)

> Check if a process is running


## Install

```
$ npm install process-exists
```


## Usage

```js
const processExists = require('process-exists');

processExists(process.pid).then(exists => {
	console.log(exists);
	//=> true
});

processExists.all([process.pid, 'foo']).then(exists => {
	console.log(exists.get(process.pid));
	//=> true
	console.log(exists.get('foo'));
	//=> false
	console.log(processExists.filterExists(exists));
	//=> [process.pid]
});
```


## API

### processExists(input)

Returns a `Promise<boolean>`.

#### input

Type: `number` `string`

Process ID or name to check.

### processExists.all(input)

Returns a `Promise<Map>` with the process name/ID as key and the status as a boolean value.

#### input

Type: `Array<number|string>`

Process IDs or names to check.

### processExists.filterExists(input)

Returns an `Array<number|string>` with the processes that exist.

#### input

Type: `Array<number|string>`

Process IDs or names to check.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
