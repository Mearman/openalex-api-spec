import { refResponse } from "~/spec/components";
import { autocompleteGet200Response } from "~/spec/components/responses/autocompleteGet200Response";

export default {
	"/autocomplete/works": {
		get: {
			description: "",
			parameters: [
				{
					in: "query",
					name: "filter",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					in: "query",
					name: "search",
					required: false,
					schema: {
						type: "string",
					},
				},
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
			summary: "/autocomplete/works",

			tags: ["works"],
		},
	}
	,
} satisfies
	PathsObject;
