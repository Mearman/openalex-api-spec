import { refParameter, refResponse } from "~/spec/components";
import { conceptIdPatternRef } from "~/spec/components/parameters/conceptIdPatternRef";
import { select } from "~/spec/components/parameters/select";
import { conceptGet200Response } from "~/spec/components/responses/concepts/conceptGet200Response";

const conceptResponse = {
	"200": refResponse({ concept: conceptGet200Response }),
} satisfies ResponsesObject;

export const getConceptById: PathsObject = {
	"/concepts/{id}": {
		get: {
			description: "Get a single concept",
			externalDocs: {
				description: "Get a single concept",
				url: "https://docs.openalex.org/api-entities/concepts/get-a-single-concept",
			},
			operationId: "getConceptById",
			parameters: [conceptIdPatternRef, refParameter({ select })],
			responses: conceptResponse,
			summary: "/concepts/{id}",
		},
	},
};

export const getRandomConcept: PathsObject = {
	"/concepts/random": {
		get: {
			operationId: "getRandomConcept",
			description: "Get a random concept",
			parameters: [refParameter({ select })],
			responses: conceptResponse,
			summary: "/concepts/random",
		},
	},
};
