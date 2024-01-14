import { refResponse } from "~/spec/components";
import { defaultListParameters } from "~/spec/components/parameters/defaultListParameters";
import { conceptsGet200Response } from "~/spec/components/responses/conceptsGet200Response";

export const concepts = {
	"/concepts": {
		get: {
			description: "",
			operationId: "getConcepts",
			parameters: defaultListParameters,
			responses: {
				"200": refResponse({ conceptsGet200Response }),
			},

			summary: "/concepts",
		},
	},
} satisfies PathsObject;
