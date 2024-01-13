import { refParameter, refSchema } from "~/spec/components";
import { select } from "~/spec/components/parameters/select";
import { sourceSchema } from "~/spec/components/schemas/sourceSchema";

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
				refParameter({select}),
			],
			responses: {
				"200": {
					content: {
						"application/json": {
							schema: refSchema({sourceSchema}),
						},
					},
					description: "",
				},
			},
			summary: "/sources/{id}",
		},
	},
} satisfies PathsObject;
