import { refParameter, refResponse } from "~/spec/components";
import { select } from "~/spec/components/parameters/select";
import { funderGet200Response } from "~/spec/components/responses/funderGet200Response";

const singleFunderResponse = {
	"200": refResponse({ funder: funderGet200Response }),
};

const getFunderById: PathItemObject = {
	get: {
		description: "",
		operationId: "getFunder",
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
		responses: singleFunderResponse,
		summary: "/funders/{id}",
	},
};

const getRandomFunder: PathItemObject = {
	get: {
		description: "Get a random funder",
		operationId: "getRandomFunder",
		parameters: [refParameter({ select })],
		responses: singleFunderResponse,
		summary: "/funders/random",

	},
};

export const funder = {
	"/funders/{id}": getFunderById,
	"/funders/random": getRandomFunder,
} satisfies PathsObject;
