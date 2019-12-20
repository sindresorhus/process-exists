/**
Check if a process exists.

@param input - Process ID or name to check.
@returns - The process exists.
*/
declare function processExists(input: number | string): Promise<boolean>;

declare namespace processExists {
	/**
	Check multiple processes if they exist.

	@param input - Process IDs or names to check.
	@returns - A map, with the process name/ID as key and the status as a boolean value.
	*/
	function all(
		input: (number | string)[],
	): Promise<Map<number | string, boolean>>;

	/**
	Filter for processes that exist.

	@param input - Process IDs or names to check.
	@returns - The processes that exist.
	*/
	function filterExists(input: (number | string)[]): (number | string)[];
}

export = processExists;
