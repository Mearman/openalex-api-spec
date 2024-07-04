import { refParameter, refResponse } from "~/spec/components";
import { select } from "~/spec/components/parameters/select";
import { sourceGet200Response } from "~/spec/components/responses/sourceGet200Response";

const singleSourceResponse = {
	"200": refResponse({ source: sourceGet200Response }),
} satisfies ResponsesObject;

const getSourceById: PathItemObject = {
	get: {
		description: "",
		operationId: "getSource",
		parameters: [
			{
				in: "path",
				name: "id",
				required: true,
				schema: {
					type: "string",
				},
			},
			refParameter({ select }),
		],
		responses: singleSourceResponse,
		summary: "/sources/{id}",
	},
};

const getRandomSource: PathItemObject = {
	get: {
		description: "Get a random source",
		operationId: "getRandomSource",
		parameters: [refParameter({ select })],
		responses: singleSourceResponse,
		summary: "/sources/random",

	},
};

export const source = {
	"/sources/{id}": getSourceById,
	"/sources/random": getRandomSource,
} satisfies PathsObject;
