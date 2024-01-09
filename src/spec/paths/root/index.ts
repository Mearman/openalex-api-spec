export const root: PathsObject = {
	"/": {
		get: {
			description: "",
			operationId: "getRoot",
			responses: {
				"200": {
					content: {
						"application/json": {
							schema: {
								properties: {
									documentation_url: {
										type: "string"
									},
									msg: {
										type: "string"
									},
									version: {
										type: "string"
									}
								},
								required: [
									"msg",
									"documentation_url",
									"version"
								],
								type: "object"
							}
						},
					},
					description: "",
				}
			},
			summary: "/",
		}
	},
} satisfies PathsObject;
