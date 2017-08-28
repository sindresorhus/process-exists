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
```


## API

### processExists(input)

Returns a `Promise<boolean>`.

#### input

Type: `number` `string`

Process ID or name to check.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
