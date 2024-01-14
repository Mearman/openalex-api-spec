export const role: SchemaObject = {
	additionalProperties: false,
	properties: {
		id: {
			type: "string",
		},
		role: {
			type: "string",
		},
		works_count: {
			type: "integer",
		},
	},
	required: ["role", "id", "works_count"],
	type: "object",
};
