export const ngram: SchemaObject = {
	items: {
		properties: {
			ngram: {
				type: "string",
			},
			ngram_count: {
				type: "integer",
			},
			ngram_tokens: {
				type: "integer",
			},
			term_frequency: {
				type: "number",
			},
		},
		required: ["ngram", "ngram_count", "ngram_tokens", "term_frequency"],
		type: "object",
	},
	type: "array",
} satisfies SchemaObject;
