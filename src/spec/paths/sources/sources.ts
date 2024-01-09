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
			responses: {},
			summary: "/sources",
		},
	},
} satisfies PathsObject;
