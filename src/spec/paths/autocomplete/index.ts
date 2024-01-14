import autocomplete from "~/spec/paths/autocomplete/autocomplete";
import authors from "~/spec/paths/autocomplete/autocompleteAuthors";
import concepts from "~/spec/paths/autocomplete/autocompleteConcepts";
import funders from "~/spec/paths/autocomplete/autocompleteFunders";
import institutions from "~/spec/paths/autocomplete/autocompleteInstitutions";
import publishers from "~/spec/paths/autocomplete/autocompletePublishers";
import sources from "~/spec/paths/autocomplete/autocompleteSources";
import works from "~/spec/paths/autocomplete/autocompleteWorks";
import { addTags } from "~/util/addTags";

export default addTags(
	[
		autocomplete,
		authors,
		concepts,
		funders,
		institutions,
		publishers,
		sources,
		works,
	],
	["autocomplete"]
) satisfies PathsObject;
