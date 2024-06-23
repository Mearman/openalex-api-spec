export const topicLevelSchema = {
	type: "object",
	properties: {
		id: {
			anyOf: [
				{
					type: "string",
					pattern: "^[0-9]+$",
				},
				{
					type: "integer",
					pattern: "^T[0-9]+$",
				},
			]
		},
		display_name: {
			type: "string",
		},
	},
	required: ["id", "display_name"],
} satisfies SchemaObject;
