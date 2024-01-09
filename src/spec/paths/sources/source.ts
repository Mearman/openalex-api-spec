import { refParameter } from "~/spec/components";
import { select } from "~/spec/components/parameters/select";

export const source = {
	"/sources/{id}": {
		get: {
			description: "",
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
							schema: {
								properties: {
									display_name: {
										type: "string",
									},
									id: {
										type: "string",
									},
								},
								required: ["id", "display_name"],
								type: "object",
							},
						},
					},
					description: "",
				},
			},
			summary: "/sources/{id}",
		},
	},
} satisfies PathsObject;
