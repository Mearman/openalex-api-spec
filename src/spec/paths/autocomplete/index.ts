import { OpenAPIV3_1 } from "openapi-types";
import authors from "~/spec/paths/autocomplete/authors";
import autocomplete from "~/spec/paths/autocomplete/autocomplete";
import concepts from "~/spec/paths/autocomplete/concepts";
import funders from "~/spec/paths/autocomplete/funders";
import institutions from "~/spec/paths/autocomplete/institutions";
import publishers from "~/spec/paths/autocomplete/publishers";
import sources from "~/spec/paths/autocomplete/sources";

import works from "~/spec/paths/autocomplete/works";
import PathsObject = OpenAPIV3_1.PathsObject;

export default {
	...autocomplete,
	...authors,
	...concepts,
	...funders,
	...institutions,
	...publishers,
	...sources,
	...works,
} satisfies PathsObject;
