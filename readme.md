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

processExists.array([process.pid, 'foo']).then(exists => {
	console.log(exists);
	//=> [51298]
});
```


## API

### processExists(input)

Returns a `Promise<boolean>`.

#### input

Type: `number` `string`

Process ID or name to check.

### processExists.array(input)

Returns a `Promise<Array>` with the processes that exists.

#### input

Type: `Array<number>` `Array<string>`

Process IDs or names to check.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
