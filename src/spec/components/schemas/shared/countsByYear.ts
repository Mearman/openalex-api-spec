export const countsByYear = {
	items: {
		properties: {
			cited_by_count: {
				type: "integer",
			},
			works_count: {
				type: "integer",
			},
			year: {
				type: "integer",
			},
		},
		required: ["year", "cited_by_count"],
		type: "object",
	},
	type: "array",
} satisfies SchemaObject;
