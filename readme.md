# process-exists [![Build Status](https://travis-ci.org/sindresorhus/process-exists.svg?branch=master)](https://travis-ci.org/sindresorhus/process-exists)

> Check if a process is running


## Install

```
$ npm install --save process-exists
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

Returns a promise for a `boolean`.

#### input

Type: `number`, `string`

Process ID/name to check.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
