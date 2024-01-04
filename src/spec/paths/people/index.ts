import { OpenAPIV3_1 } from "openapi-types";
import PathsObject = OpenAPIV3_1.PathsObject;

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
				{
					in: "query",
					name: "select",
					required: false,
					schema: {
						type: "string",
					},
				},
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
	}
} satisfies PathsObject;
export default people satisfies PathsObject;
