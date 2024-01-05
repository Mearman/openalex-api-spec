import { OpenAPIV3_1 } from "openapi-types";
import { examples } from "~/spec/components/examples";
import { parameters } from "~/spec/components/parameters";
import { pathItems } from "~/spec/components/pathItems";
import { responses } from "~/spec/components/responses";
import { schemas } from "~/spec/components/schemas";
import ComponentsObject = OpenAPIV3_1.ComponentsObject;

export default {
	examples,
	parameters,
	pathItems,
	responses,
	schemas,
} satisfies ComponentsObject;
