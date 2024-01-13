export const group_by_result = {
	items: {
		properties: {
			count: {
				type: "integer",
			},
			key: {
				type: "string",
			},
			key_display_name: {
				type: "string",
			},
		},
		required: ["key", "key_display_name", "count"],
		type: "object",
	},
	type: "array",
} satisfies SchemaObject;
