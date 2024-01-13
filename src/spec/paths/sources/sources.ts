import { refSchema } from "~/spec/components";
import { group_by_result } from "~/spec/components/schemas/group_by_result";
import { meta } from "~/spec/components/schemas/meta";
import { sourceSchema } from "~/spec/components/schemas/sourceSchema";

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
							schema: {
								properties: {
									group_by: refSchema({ group_by_result }),
									meta: refSchema({ meta }),
									results: {
										items: refSchema({ sourceSchema }),
										type: "array",
									}
								},
								type: "object"
							}
						}
					},
					description: ""
				}
			},
			summary: "/sources",
		},
	},
} satisfies PathsObject;
