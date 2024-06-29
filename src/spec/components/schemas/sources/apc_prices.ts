export const apc_prices: SchemaObject = {
	additionalProperties: false,
	type: "array",
	items: {
		additionalProperties: false,
		properties: {
			currency: {
				type: "string"
			},
			price: {
				type: "number"
			},
		},
		required: ["price", "currency"],
		type: "object",

	}
};
