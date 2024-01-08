import { refResponse } from "~/spec/components";
import { autocompleteGet200Response } from "~/spec/components/responses/autocompleteGet200Response";

export default {
	"/autocomplete/concepts": {
		get: {
			description: "",
			parameters: [
				{
					in: "query",
					name: "q",
					required: false,
					schema: {
						type: "string",
					},
				},
			],
			responses: {
				"200": refResponse({autocompleteGet200Response}),
			},
			summary: "/autocomplete/concepts",

			tags: ["concepts"],
		},
	},
} satisfies PathsObject;
