import { refParameter, refResponse } from "~/spec/components";
import { select } from "~/spec/components/parameters/select";
import { institutionGet200Response } from "~/spec/components/responses/institutionGet200Response";

export const institution = {
	"/institutions/{id}": {
		get: {
			description: "",
			operationId: "getInstitution",
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
				"200": refResponse({ institutionGet200Response })
			},
			summary: "/institutions/{id}",
		},
	},
} satisfies PathsObject;
