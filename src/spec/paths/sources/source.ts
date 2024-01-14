import { refParameter, refResponse } from "~/spec/components";
import { select } from "~/spec/components/parameters/select";
import { sourceGet200Response } from "~/spec/components/responses/sourceGet200Response";

export const source = {
	"/sources/{id}": {
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
			responses: {
				"200": refResponse({ sourceGet200Response }),
			},
			summary: "/sources/{id}",
		},
	},
} satisfies PathsObject;
