export const summary_stats: SchemaObject = {
	additionalProperties: false,
	properties: {
		"2yr_mean_citedness": {
			type: "number",
		},
		h_index: {
			type: "integer",
		},
		i10_index: {
			type: "integer",
		},
	},
	required: ["2yr_mean_citedness", "h_index", "i10_index"],
	type: "object",
};
