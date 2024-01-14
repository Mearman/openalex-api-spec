export const dehydratedConcept = {
	additionalProperties: false,
	properties: {
		display_name: {
			type: "string",
		},
		id: {
			type: "string",
		},
		level: {
			type: "integer",
		},
		score: {
			type: "number",
		},
		wikidata: {
			type: ["string", "null"]
		},
	},
	required: [
		"id",
		"display_name",
	],
	type: "object",
} satisfies SchemaObject;
