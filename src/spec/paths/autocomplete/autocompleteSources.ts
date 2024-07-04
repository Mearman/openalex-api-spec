import { refParameter, refResponse } from "~/spec/components";
import { autocompleteQuery } from "~/spec/components/parameters/autocompleteQuery";
import { autocompleteGet200Response } from "~/spec/components/responses/autocomplete/autocompleteGet200Response";

export default {
	"/autocomplete/sources": {
		get: {
			description: "",
			operationId: "getAutocompleteSources",
			parameters: [
				refParameter({ autocompleteQuery }),
			],
			responses: {
				"200": refResponse({ autocompleteGet200Response }),
			},
			summary: "/autocomplete/sources",


		},
	}
	,
} satisfies PathsObject;
