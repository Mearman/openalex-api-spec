import { refResponse } from "~/spec/components";
import { workNgramsGet200Response } from "~/spec/components/responses/workNgramsGet200Response";

export const workNgrams: PathItemObject = {
	get: {
		description: "",
		externalDocs: {
			url: "https://docs.openalex.org/api-entities/works/get-n-grams",
		},
		operationId: "getWorkNgrams",
		parameters: [
			{
				in: "path",
				name: "id",
				required: true,
				schema: {
					type: "string",
				},
			},
		],
		responses: {
			"200": refResponse({ workNgramsGet200Response }),
		},
		summary: "/works/{id}/ngrams",
	},
};

export const getWorkNgrams: PathsObject = {
	"/works/{id}/ngrams": workNgrams,
};
