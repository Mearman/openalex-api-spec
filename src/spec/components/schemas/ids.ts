export const ids: SchemaObject = {
	properties: {
		grid: {
			type: "string",
		},
		mag: {
			type: "string",
		},
		openalex: {
			type: "string",
		},
		ror: {
			type: "string",
		},
		wikidata: {
			type: "string",
		},
		wikipedia: {
			type: "string",
		},
	},
	required: [
		"openalex",
	],
	type: "object",
	additionalProperties: false,
};
