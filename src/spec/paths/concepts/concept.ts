import { refParameter, refResponse } from "~/spec/components";
import { conceptIdPatternRef } from "~/spec/components/parameters/conceptIdPatternRef";
import { select } from "~/spec/components/parameters/select";
import { conceptGet200Response } from "~/spec/components/responses/concepts/conceptGet200Response";

const getConceptById: PathItemObject = {
	get: {
		description: "Get a single concept",
		externalDocs: {
			description: "Get a single concept",
			url: "https://docs.openalex.org/api-entities/concepts/get-a-single-concept",
		},
		operationId: "getConcept",
		parameters: [
			conceptIdPatternRef,
			refParameter({select}),
		],
		responses: {
			"200": refResponse({conceptGet200Response}),
		},
		summary: "/concepts/{id}"
	},
};

const getRandomConcept: PathItemObject = {
	get: {
		description: "Get a random concept",
		operationId: "getRandomConcept",
		parameters: [
			refParameter({select}),
		],
		responses: {
			"200": refResponse({conceptGet200Response}),
		},
		summary: "/concepts/random"
	},
};

export const concept = {
	"/concepts/{id}": getConceptById,
	"/concepts/random": getRandomConcept,
} satisfies PathsObject;
