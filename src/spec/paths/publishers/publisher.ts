import { refParameter, refResponse } from "~/spec/components";
import { select } from "~/spec/components/parameters/select";
import { publisherGet200Response } from "~/spec/components/responses/publisherGet200Response";

export const publisher = {
	"/publishers/{id}": {
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
				refParameter({ select }),
			],
			responses: {
				"200": refResponse({ publisherGet200Response }),
			},
			summary: "/publishers/{id}",
		},
	},
} satisfies PathsObject;
