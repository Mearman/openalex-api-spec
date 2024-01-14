export function operationsWithNoRequiredParameters(operations: Record<string, OperationObject>): Record<string, OperationObject> {
	return Object.entries(operations).filter(([path, operation]): boolean => {
		return operation.parameters?.filter((parameter: ParameterObject) => {
			return parameter.required === true;
		}).length === 0;
	}).reduce((acc, [path, operation]) => {
		acc[path] = operation;
		return acc;
	}, {} as Record<string, OperationObject>);
}
