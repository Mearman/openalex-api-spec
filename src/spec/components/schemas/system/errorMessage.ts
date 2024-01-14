export const errorMessage = {
	properties: {
		error: {
			type: "string",
		},
		message: {
			type: "string",
		},
	},
	required: ["error", "message"],
	type: "object",
} satisfies SchemaObject;
