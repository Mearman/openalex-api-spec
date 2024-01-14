import { refResponse } from "~/spec/components";
import { defaultListParameters } from "~/spec/components/parameters/defaultListParameters";
import { institutionsGet200Response } from "~/spec/components/responses/institutionsGet200Response";

export const institutions = {
	"/institutions": {
		get: {
			description: "",
			operationId: "getInstitutions",
			parameters: defaultListParameters,
			responses: {
				"200": refResponse({ institutionsGet200Response }),
			},

			summary: "/institutions",
		},
	},
} satisfies PathsObject;
