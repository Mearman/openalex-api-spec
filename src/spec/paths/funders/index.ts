import { OpenAPIV3_1 } from "openapi-types";
import { funder } from "~/spec/paths/funders/funder";
import { funders } from "~/spec/paths/funders/funders";
import PathsObject = OpenAPIV3_1.PathsObject;

export default {
	...funders,
	...funder,
} satisfies PathsObject;
