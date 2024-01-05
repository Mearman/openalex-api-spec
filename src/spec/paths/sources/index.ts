import { OpenAPIV3_1 } from "openapi-types";
import { source } from "~/spec/paths/sources/source";
import { sources } from "~/spec/paths/sources/sources";
import PathsObject = OpenAPIV3_1.PathsObject;

export default {
	...sources,
	...source,
} satisfies PathsObject;
