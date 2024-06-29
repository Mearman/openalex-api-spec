import { refParameter, refResponse } from "~/spec/components";
import { select } from "~/spec/components/parameters/select";
import { getPerson200Response } from "~/spec/components/responses/getPerson200Response";

export const people = {
	"/people/{id}": {
		get: {
			description: "",
			operationId: "getPerson",
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
			responses: {
				"200": refResponse({ person: getPerson200Response }),
			},
			summary: "/people/{id}",
		},
	},
} satisfies PathsObject;
