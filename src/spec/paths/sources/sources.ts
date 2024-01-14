import { refSchema } from "~/spec/components";
import { sourcesArray } from "~/spec/components/schemas/sources/sourcesArray";

export const sources = {
	"/sources": {
		get: {
			description: "",
			operationId: "getSources",
			parameters: [
				{
					in: "query",
					name: "group_by",
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
							schema: refSchema({ sourcesArray })
						}
					},
					description: ""
				}
			},
			summary: "/sources",
		},
	},
} satisfies PathsObject;
