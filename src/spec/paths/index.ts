import { refResponse } from "~/spec/components";
import { mailto } from "~/spec/components/parameters/mailto";
import { resp403, resp4xx } from "~/spec/components/responses/resp403";
import authors from "~/spec/paths/authors";
import autocomplete from "~/spec/paths/autocomplete";
import concepts from "~/spec/paths/concepts";
import funders from "~/spec/paths/funders";
import institutions from "~/spec/paths/institutions";
import people from "~/spec/paths/people";
import publishers from "~/spec/paths/publishers";
import sources from "~/spec/paths/sources";
import works from "~/spec/paths/works";
import { addResponseToOperationIfNotPresent } from "~/util";

export function addMailToParameterToAllGets(paths: PathsObject): PathsObject {
	return Object.entries(paths).reduce((acc, [path, pathItem]) => {
		return {
			...acc,
			[path]: {
				...pathItem,
				get: {
					...pathItem.get,
					parameters: [
						...(pathItem.get.parameters || []),
						...mailto,
					],
				},
			},
		};
	}, {});
}

export function modifyOperationsInPaths(paths: PathsObject, operation: (operation: OperationObject) => OperationObject): PathsObject {
	return Object.entries(paths).reduce((acc, [path, pathItem]) => {
		return {
			...acc,
			[path]: {
				...pathItem,
				get: operation(pathItem.get),
			},
		};
	}, {});
}

export function operationContainsResponse(operation: OperationObject, s: string): Boolean {
	return Object.keys(operation.responses).filter((code) => code == s).length > 0;
}

export function addResponse(operation: OperationObject, code: string, responseRef: Record<string, ResponseObject>) {
	return {
		...operation,
		responses: {
			...operation.responses,
			[code]: refResponse(responseRef),
		},
	};
}

function addMinimalResponses(operation: OperationObject): OperationObject {
	operation = addResponseToOperationIfNotPresent(operation, "403", { resp403 });
	operation = addResponseToOperationIfNotPresent(operation, "default", { resp4xx });
	return operation;
}

export const paths = modifyOperationsInPaths(addMailToParameterToAllGets({
	...authors,
	...autocomplete,
	...concepts,
	...funders,
	...institutions,
	...people,
	...publishers,
	...sources,
	...works,
}), addMinimalResponses);
