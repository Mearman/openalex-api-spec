export function sortObject<T extends Record<string, any> | any[]>(obj: T): T {
	if (Array.isArray(obj)) {
		// Sort each element if it's an array
		return obj.map(item => sortObject(item)) as T;
	} else if (obj !== null && typeof obj === 'object') {
		// Sort keys and recursively sort their values if it's an object
		const sortedObj: Record<string, any> = {};
		Object.keys(obj).sort().forEach(key => {
			sortedObj[key] = sortObject(obj[key]);
		});
		return sortedObj as T;
	} else {
		// Return the value as is if it's neither an object nor an array
		return obj;
	}
}
