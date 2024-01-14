import { refParameter, refResponse } from "~/spec/components";
import { select } from "~/spec/components/parameters/select";
import { funderGet200Response } from "~/spec/components/responses/funderGet200Response";

export const funder = {
	"/funders/{id}": {
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
			responses: {
				"200": refResponse({ funderGet200Response }),
			},

			summary: "/funders/{id}",
		},
	},
} satisfies PathsObject;
