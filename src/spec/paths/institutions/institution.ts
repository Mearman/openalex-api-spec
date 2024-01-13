import { refParameter, refSchema } from "~/spec/components";
import { select } from "~/spec/components/parameters/select";
import { institutionSchema } from "~/spec/components/schemas/institutionSchema";

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
				"200": {
					content: {
						"application/json": {
							schema: refSchema({ institutionSchema })
						},
					},
					description: "",
				},
			},
			summary: "/institutions/{id}",
		},
	},
} satisfies PathsObject;
