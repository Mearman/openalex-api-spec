export const apc = {
	additionalProperties: false,
	type: "object",
	properties: {
		value: {
			type: "integer",
		},
		currency: {
			type: "string",
		},
		value_usd: {
			type: "integer",
		},
		provenance: {
			type: "string",
		},
	},
	required: ["value", "currency", "value_usd", "provenance"],
} satisfies SchemaObject;
