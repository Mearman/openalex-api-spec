import { refResponse } from "~/spec/components";
import { defaultListParameters } from "~/spec/components/parameters/defaultListParameters";
import { publishersGet200Response } from "~/spec/components/responses/publishersGet200Response";

export const publishers = {
	"/publishers": {
		get: {
			description: "",
			operationId: "getPublishers",
			parameters: defaultListParameters,
			responses: {
				"200": refResponse({ publishers: publishersGet200Response }),
			},

			summary: "/publishers",
		},
	},
} satisfies PathsObject;
