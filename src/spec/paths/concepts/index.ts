import { OpenAPIV3_1 } from "openapi-types";
import { concept } from "~/spec/paths/concepts/concept";
import { concepts } from "~/spec/paths/concepts/concepts";
import PathsObject = OpenAPIV3_1.PathsObject;

export default {
	...concepts,
	...concept
} satisfies PathsObject;
