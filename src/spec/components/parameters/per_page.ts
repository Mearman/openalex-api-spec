export const per_page = {
	in: "query",
	name: "per-page",
	required: false,
	examples: {
		"1": {
			value: 1,
		},
	},
	schema: {
		type: "integer",
	},
} satisfies ParameterObject;
