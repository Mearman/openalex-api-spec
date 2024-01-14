import { OpenAPI } from "openapi-types";

export function getPaths(spec: OpenAPI.Document) {
	return Object.entries(spec.paths).map(([path, pathItem]): [string, PathItemObject] => {
		return [path, pathItem];
	});
}
