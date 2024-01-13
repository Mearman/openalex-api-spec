export const meta = {
	type: "object",
	properties: {
		count: {
			type: "integer",
		},
		db_response_time_ms: {
			type: "integer",
		},
		page: {
			type: "integer",
		},
		per_page: {
			type: "integer",
		},
		groups_count: {
			type: "null",
		},
	},
	required: [
		"count",
		"db_response_time_ms",
		"page",
		"per_page",
		"groups_count",
	],
} satisfies SchemaObject;
