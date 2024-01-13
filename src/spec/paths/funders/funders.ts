import { refSchema } from "~/spec/components";
import { defaultListParameters } from "~/spec/components/parameters/defaultListParameters";
import { funderSchema } from "~/spec/components/schemas/funderSchema";
import { group_by_result } from "~/spec/components/schemas/group_by_result";
import { meta } from "~/spec/components/schemas/meta";

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
							schema: {
								properties: {
									group_by: refSchema({ group_by_result }),
									meta: refSchema({ meta }),
									results: {
										items: refSchema({ funderSchema }),
										type: "array",
									},
								},
								required: ["meta", "group_by"],
								type: "object",
							},
						},
					},
					description: "",
				},
			},

			summary: "/funders",
		},
	},
} satisfies PathsObject;
