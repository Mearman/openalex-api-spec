export const x_concepts = {
	items: {
		properties: {
			display_name: {
				type: "string",
			},
			id: {
				type: "string",
			},
			level: {
				type: "integer",
			},
			score: {
				type: "number",
			},
			wikidata: {
				type: "string",
			},
		},
		required: [
			"id",
			"wikidata",
			"display_name",
			"level",
			"score",
		],
		type: "object",
	},
	type: "array",
} satisfies SchemaObject;
