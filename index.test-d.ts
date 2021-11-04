import {expectType} from 'tsd';
import {processExists, processExistsMultiple, filterExistingProcesses} from './index.js';

expectType<Promise<boolean>>(processExists(123));
expectType<Promise<boolean>>(processExists('abc'));

expectType<Promise<Map<number | string, boolean>>>(
	processExistsMultiple(['abc', 123]),
);

expectType<string[]>(filterExistingProcesses(['abc', 'foo']));
expectType<Array<number | string>>(filterExistingProcesses(['abc', 123]));
