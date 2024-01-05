import { OpenAPIV3_1 } from "openapi-types";
import { institution } from "~/spec/paths/institutions/institution";
import { institutions } from "~/spec/paths/institutions/institutions";
import PathsObject = OpenAPIV3_1.PathsObject;

export default {
	...institution,
	...institutions,
} satisfies PathsObject;
