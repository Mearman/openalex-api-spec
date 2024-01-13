export const institutionObject = {
	properties: {
		country_code: {
			type: "string",
		},
		display_name: {
			type: "string",
		},
		id: {
			type: "string",
		},
		lineage: {
			items: {
				type: "string",
			},
			type: "array",
		},
		ror: {
			type: "string",
		},
		type: {
			type: "string",
		},
	},
	required: [
		"id",
		"ror",
		"display_name",
		"country_code",
		"type",
		"lineage",
	],
	type: ["object", "null"]
} satisfies SchemaObject;
