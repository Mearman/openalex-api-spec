export const ids: SchemaObject = {
	additionalProperties: false,
	properties: {
		grid: {
			type: "string",
		},
		issn: {
			type: "array",
			items: {
				type: "string",
			},
		},
		issn_l: {
			type: "string",
		},
		mag: {
			type: "string",
		},
		openalex: {
			type: "string",
		},
		orcid: {
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
};
