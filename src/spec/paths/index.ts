import { refResponse } from "~/spec/components";
import { mailto } from "~/spec/components/parameters/mailto";
import { resp403 } from "~/spec/components/responses/resp403";
import { resp4xx } from "~/spec/components/responses/resp4xx";
import { authorPaths } from "~/spec/paths/authors";
import { autocompletePaths } from "~/spec/paths/autocomplete";
import { conceptPaths } from "~/spec/paths/concepts";
import { funderPaths } from "~/spec/paths/funders";
import { institutionPaths } from "~/spec/paths/institutions";
import { peoplePaths } from "~/spec/paths/people";
import { publisherPaths } from "~/spec/paths/publishers";
import { root } from "~/spec/paths/root";
import { sourcePaths } from "~/spec/paths/sources";
import { topicPaths } from "~/spec/paths/topics";
import { workPaths } from "~/spec/paths/works";
import { addResponseToOperationIfNotPresent } from "~/util";

export function addMailToParameterToAllGets(paths: PathsObject): PathsObject {
	return Object.entries(paths).reduce((acc, [path, pathItem]) => {
		return {
			...acc,
			[path]: {
				...pathItem,
				get: {
					...pathItem.get,
					parameters: [...(pathItem.get.parameters || []), ...mailto],
				},
			},
		};
	}, {});
}

export function modifyOperationsInPaths(
	paths: PathsObject,
	operation: (operation: OperationObject) => OperationObject
): PathsObject {
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

export function operationContainsResponse(
	operation: OperationObject,
	s: string
): Boolean {
	return (
		Object.keys(operation.responses).filter((code) => code == s).length > 0
	);
}

export function addResponse(
	operation: OperationObject,
	code: string,
	responseRef: Record<string, ResponseObject>
) {
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
	operation = addResponseToOperationIfNotPresent(operation, "default", {
		resp4xx,
	});
	return operation;
}

export function addTagsOperation(tags: string[]) {
	return (operation: OperationObject) => ({
		...operation,
		tags: [...tags, ...(operation.tags || [])],
	});
}

const addUnifiedTag = addTagsOperation(["OpenAlex"]);

export const paths = modifyOperationsInPaths(
	modifyOperationsInPaths(
		addMailToParameterToAllGets({
			...authorPaths,
			...autocompletePaths,
			...conceptPaths,
			...funderPaths,
			...institutionPaths,
			...peoplePaths,
			...publisherPaths,
			...root,
			...sourcePaths,
			...workPaths,
			...topicPaths,
		}),
		addMinimalResponses
	),
	addUnifiedTag
);
