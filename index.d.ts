/**
Check if a process exists.

@param input - The process ID or name to check.
@returns Whether the process exists.
*/
export function processExists(input: number | string): Promise<boolean>;

/**
Check multiple processes if they exist.

@param input - The process IDs or names to check.
@returns A map with the process name/ID as key and the status as a boolean value.
*/
export function processExistsMultiple<T extends (number | string)>(
	input: readonly T[],
): Promise<Map<T, boolean>>;

/**
Filter processes that exist.

@param input - The process IDs or names to check.
@returns The processes that exist.
*/
export function filterExistingProcesses<T extends ReadonlyArray<number | string>>(input: T): T;
