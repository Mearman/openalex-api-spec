import { refResponse } from "~/spec/components";
import { defaultListParameters } from "~/spec/components/parameters/defaultListParameters";
import { conceptsGet200Response } from "~/spec/components/responses/concepts/conceptsGet200Response";

export const getConcepts = {
	"/concepts": {
		get: {
			description: "",
			operationId: "getConcepts",
			parameters: defaultListParameters,
			responses: {
				"200": refResponse({ concepts: conceptsGet200Response }),
			},

			summary: "/concepts",
			tags: ["concepts", "multiple"],
		},
	},
} satisfies PathsObject;
