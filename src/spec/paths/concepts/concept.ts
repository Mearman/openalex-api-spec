import { refParameter, refResponse } from "~/spec/components";
import { conceptIdPatternRef } from "~/spec/components/parameters/conceptIdPatternRef";
import { select } from "~/spec/components/parameters/select";
import { conceptGet200Response } from "~/spec/components/responses/concepts/conceptGet200Response";

const tags = ["single"];
const singleFunderResponse = {
	"200": refResponse({conceptGet200Response}),
} satisfies ResponsesObject;
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
		responses: singleFunderResponse,
		summary: "/concepts/{id}",
		tags,
	},
};

const getRandomConcept: PathItemObject = {
	get: {
		description: "Get a random concept",
		operationId: "getRandomConcept",
		parameters: [
			refParameter({select}),
		],
		responses: singleFunderResponse,
		summary: "/concepts/random",
		tags: tags.concat(["random"]),
	},
};

export const concept = {
	"/concepts/{id}": getConceptById,
	"/concepts/random": getRandomConcept,
} satisfies PathsObject;
