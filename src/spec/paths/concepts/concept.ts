import { refParameter, refResponse } from "~/spec/components";
import { conceptIdPatternRef } from "~/spec/components/parameters/conceptIdPatternRef";
import { select } from "~/spec/components/parameters/select";
import { conceptGet200Response } from "~/spec/components/responses/concepts/conceptGet200Response";

const description: string = "Get a single concept";
export const concept = {
	"/concepts/{id}": {
		get: {
			description,
			externalDocs: {
				description,
				url: "https://docs.openalex.org/api-entities/concepts/get-a-single-concept",
			},
			parameters: [
				conceptIdPatternRef,
				refParameter({ select }),
			],
			responses: {
				"200": refResponse({ conceptGet200Response }),
			},
			summary: "/concepts/{id}"
		},
	},
} satisfies PathsObject;
