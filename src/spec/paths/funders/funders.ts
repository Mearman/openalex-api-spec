import { refSchema } from "~/spec/components";
import { defaultListParameters } from "~/spec/components/parameters/defaultListParameters";
import { fundersArray } from "~/spec/components/schemas/funders/fundersArray";

export const funders = {
	"/funders": {
		get: {
			description: "",
			operationId: "getFunders",
			parameters: defaultListParameters,
			responses: {
				"200": {
					content: {
						"application/json": {
							schema: refSchema({ fundersArray }),
						},
					},
					description: "",
				},
			},

			summary: "/funders",
		},
	},
} satisfies PathsObject;
