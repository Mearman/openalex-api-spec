import { refParameter, refResponse } from "~/spec/components";
import { conceptIdPatternRef } from "~/spec/components/parameters/conceptIdPatternRef";
import { select } from "~/spec/components/parameters/select";
import { conceptGet200Response } from "~/spec/components/responses/concepts/conceptGet200Response";

const singleFunderResponse = {
	"200": refResponse({ conceptGet200Response }),
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
			responses: singleFunderResponse,
			summary: "/concepts/{id}",
			tags: ["concepts", "single"],
		},
	},
};

export const getRandomConcept: PathsObject = {
	"/concepts/random": {
		get: {
			operationId: "getRandomConcept",
			description: "Get a random concept",
			parameters: [refParameter({ select })],
			responses: singleFunderResponse,
			summary: "/concepts/random",
			tags: ["concepts", "random", "single"],
		},
	},
};
