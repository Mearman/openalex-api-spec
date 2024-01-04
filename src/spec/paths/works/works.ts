import { OpenAPIV3_1 } from "openapi-types";
import PathItemObject = OpenAPIV3_1.PathItemObject;

export const works: PathItemObject = {
	get: {
		description: "",
		parameters: [
			{
				in: "query",
				name: "filter",
				required: false,
				schema: {
					type: "string",
				},
			},
			{
				in: "query",
				name: "api_key",
				required: false,
				schema: {
					type: "string",
				},
			},
			{
				in: "query",
				name: "per-page",
				required: false,
				schema: {
					type: "string",
				},
			},
			{
				in: "query",
				name: "cursor",
				required: false,
				schema: {
					type: "string",
				},
			},
		],
		responses: {
			"403": {
				content: {
					"application/json": {
						schema: {
							properties: {
								error: {
									type: "string",
								},
								message: {
									type: "string",
								},
							},
							required: ["error", "message"],
							type: "object",
						},
					},
				},
				description: "",

			},
		},

		summary: "/works",
	},
};
