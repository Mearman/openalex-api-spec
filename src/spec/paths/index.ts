import autocomplete from "~/spec/paths/autocomplete";
import authors from "~/spec/paths/autocomplete/autocompleteAuthors";
import concepts from "~/spec/paths/concepts";
import funders from "~/spec/paths/funders";
import institutions from "~/spec/paths/institutions";
import people from "~/spec/paths/people";
import publishers from "~/spec/paths/publishers";
import sources from "~/spec/paths/sources";
import works from "~/spec/paths/works";

export const paths = {
	...authors,
	...autocomplete,
	...concepts,
	...funders,
	...institutions,
	...people,
	...publishers,
	...sources,
	...works,
} satisfies PathsObject;

export default paths;
