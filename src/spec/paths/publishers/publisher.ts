import { refParameter, refResponse } from "~/spec/components";
import { select } from "~/spec/components/parameters/select";
import { publisherGet200Response } from "~/spec/components/responses/publisherGet200Response";

const singlePublisherResponse = {
	"200": refResponse({publisherGet200Response}),
} satisfies ResponsesObject

const getPublisherById: PathItemObject = {
	get: {
		description: "",
		operationId: "getPublisher",
		parameters: [
			{
				in: "path",
				name: "id",
				required: true,
				schema: {
					type: "string",
				},
			},
			refParameter({select}),
		],
		responses: singlePublisherResponse,
		summary: "/publishers/{id}",
	},
};

const getRandomPublisher: PathItemObject = {
	get: {
		description: "Get a random publisher",
		operationId: "getRandomPublisher",
		parameters: [
			refParameter({select}),
		],
		responses: singlePublisherResponse,
		summary: "/publishers/random",
	}
};

export const publisher = {
	"/publishers/{id}": getPublisherById,
	"/publishers/random": getRandomPublisher,
} satisfies PathsObject;
