export const getPerson200Response: ResponseObject = {
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
};
