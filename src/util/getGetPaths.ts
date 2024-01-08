import { OpenAPI } from "openapi-types";

export function getGetPaths(result: OpenAPI.Document): Record<string, OperationObject> {
	// return Object.entries(result.paths).map(([path, pathItem]) => [path, pathItem]).filter(([path, pathItem]) => {
	return Object.entries(result.paths).filter(([path, pathItem]: [string, PathItemObject]) => {
		return Object.entries(pathItem).filter(([method, operation]) => {
			return method === "get";
		});
	}).reduce((acc, [path, pathItem]) => {
		acc[path] = pathItem.get;
		return acc;
	}, {} as Record<string, OperationObject>);
}
