import { refResponse } from "~/spec/components";
import { autocomplete200Response } from "~/spec/components/responses/autocomplete200Response";

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
				"200": refResponse({autocomplete200Response}),
			},
			summary: "/autocomplete/concepts",

			tags: ["concepts"],
		},
	},
} satisfies PathsObject;
