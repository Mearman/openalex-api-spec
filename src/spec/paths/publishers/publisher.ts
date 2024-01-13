import { refParameter, refSchema } from "~/spec/components";
import { select } from "~/spec/components/parameters/select";
import { publisherSchema } from "~/spec/components/schemas/publisherSchema";

export const publisher = {
	"/publishers/{id}": {
		get: {
			description: "",
			operationId: "getPublisher",
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
							schema: refSchema({ publisherSchema }),
						},
					},
					description: "",
				},
			},
			summary: "/publishers/{id}",
		},
	},
} satisfies PathsObject;
