import { OpenAPIV3_1 } from "openapi-types";
import { publisher } from "~/spec/paths/publishers/publisher";
import { publishers } from "~/spec/paths/publishers/publishers";
import PathsObject = OpenAPIV3_1.PathsObject;

export default {
	...publishers,
	...publisher,
} satisfies PathsObject;
