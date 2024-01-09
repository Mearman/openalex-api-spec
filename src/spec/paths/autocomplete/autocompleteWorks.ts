import { refParameter, refResponse } from "~/spec/components";
import { autocompleteQuery } from "~/spec/components/parameters/autocompleteQuery";
import { filter } from "~/spec/components/parameters/filter";
import { search } from "~/spec/components/parameters/search";
import { autocompleteGet200Response } from "~/spec/components/responses/autocomplete/autocompleteGet200Response";

export default {
	"/autocomplete/works": {
		get: {
			description: "",
			parameters: [
				refParameter({ filter }),
				refParameter({ search }),
				refParameter({ autocompleteQuery }),
			],
			responses: {
				"200": refResponse({ autocompleteGet200Response }),
			},
			summary: "/autocomplete/works",

			tags: ["works"],
		},
	}
	,
} satisfies
	PathsObject;
