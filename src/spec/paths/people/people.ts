import { refParameter } from "~/spec/components";
import { select } from "~/spec/components/parameters/select";

export const people = {
	"/people/{id}": {
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
				refParameter({select}),
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
									orcid: {
										type: "string",
									},
								},
								required: ["id", "display_name", "orcid"],
								type: "object",
							},
						},
					},
					description: "",
				},
			},
			summary: "/people/{id}",
		},
	},
} satisfies PathsObject;
