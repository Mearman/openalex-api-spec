import { refParameter, refResponse } from "~/spec/components";
import { autocompleteQuery } from "~/spec/components/parameters/autocompleteQuery";
import { autocompleteGet200Response } from "~/spec/components/responses/autocomplete/autocompleteGet200Response";

export default {
	"/autocomplete/institutions": {
		get: {
			description: "",
			parameters: [
				refParameter({autocompleteQuery}),
			],
			responses: {
				"200": refResponse({autocompleteGet200Response}),
			},
			summary: "/autocomplete/institutions",

			tags: ["institutions"],
		},
	},
} satisfies PathsObject;
