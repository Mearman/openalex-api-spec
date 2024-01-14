import { OpenAPI } from "openapi-types";

export function getGetPaths(result: OpenAPI.Document): Record<string, OperationObject> {
	return Object.entries(result.paths).filter(([, pathItem]: [string, PathItemObject]) => {
		return Object.entries(pathItem).filter(([method]) => method === "get");
	}).reduce((acc, [path, pathItem]) => {
		acc[path] = pathItem.get;
		return acc;
	}, {} as Record<string, OperationObject>);
}
