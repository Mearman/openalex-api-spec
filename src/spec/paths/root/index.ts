export const root: PathsObject = {
	"/": {
		get: {
			description: "",
			externalDocs: {
				description: "OpenAlex documentation",
				url: "https://openalex.org/rest-api",
			},
			operationId: "getRoot",
			responses: {
				"200": {
					content: {
						"application/json": {
							examples: {
								"application/json": {
									value:
									{
										documentation_url: "https://openalex.org/rest-api",
										msg: "Don't panic",
										version: "0.0.1"
									}
								},
							},
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
			summary: "Root",
		}
	},
} satisfies PathsObject;
