export const sources = {
	"/sources": {
		get: {
			description: "",
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

			summary: "/sources",
		},
	},
} satisfies PathsObject;
