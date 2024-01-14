import { refResponse } from "~/spec/components";
import { defaultListParameters } from "~/spec/components/parameters/defaultListParameters";
import { fundersGet200Response } from "~/spec/components/responses/fundersGet200Response";

export const funders = {
	"/funders": {
		get: {
			description: "",
			operationId: "getFunders",
			parameters: defaultListParameters,
			responses: {
				"200": refResponse({ fundersGet200Response }),
			},

			summary: "/funders",
		},
	},
} satisfies PathsObject;
