export const ngramMeta = {
	properties: {
		count: {
			type: "integer",
		},
		doi: {
			type: "string",
		},
		openalex_id: {
			type: "string",
		},
	},
	required: ["count", "openalex_id"],
	type: "object",
} satisfies SchemaObject;
