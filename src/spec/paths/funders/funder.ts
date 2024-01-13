import { refParameter, refSchema } from "~/spec/components";
import { select } from "~/spec/components/parameters/select";
import { funderSchema } from "~/spec/components/schemas/funderSchema";

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
				"200": {
					content: {
						"application/json": {
							schema: refSchema({ funderSchema }),
						},
					},
					description: "",
				},
			},

			summary: "/funders/{id}",
		},
	},
} satisfies PathsObject;
