import {expectType} from 'tsd';
import processExists = require('.');

expectType<Promise<boolean>>(processExists(123));
expectType<Promise<boolean>>(processExists('abc'));

expectType<Promise<Map<number | string, boolean>>>(
	processExists.all(['abc', 123]),
);

expectType<(number | string)[]>(processExists.filterExists(['abc', 123]));
