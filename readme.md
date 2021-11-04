# process-exists

> Check if a process is running

## Install

```sh
npm install process-exists
```

## Usage

```js
import {processExists, processExistsMultiple, filterExistingProcesses} from 'process-exists';

console.log(await processExists(process.pid));
//=> true

const exists = await processExistsMultiple([process.pid, 'foo']);

console.log(exists.get(process.pid));
//=> true

console.log(exists.get('foo'));
//=> false

console.log(filterExistingProcesses(exists));
//=> [process.pid]
```

## API

### processExists(input)

Check if a process exists.

Returns a `Promise<boolean>`.

#### input

Type: `number | string`

The process ID or name to check.

### processExistsMultiple(input)

Check multiple processes if they exist.

Returns a `Promise<Map>` with the process name/ID as key and the status as a boolean value.

#### input

Type: `Array<number | string>`

The process IDs or names to check.

### filterExistingProcesses(input)

Filter processes that exist.

Returns an `Array<number | string>` with the processes that exist.

#### input

Type: `Array<number | string>`

The process IDs or names to check.
