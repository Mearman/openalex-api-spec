export const ids: SchemaObject = {
	additionalProperties: false,
	properties: {
		crossref: {
			type: "string",
		},
		doi: {
			type: "string",
		},
		fatcat: {
			type: "string",
			examples: [{
				value: "https://fatcat.wiki/container/wixiueunq5e6xk7dx5ygzzysjy"
			}],
		},
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
		pmcid: {
			type: "string",
		},
		pmid: {
			type: "string",
		},
		ror: {
			type: "string",
		},
		scopus: {
			type: "string",
		},
		wikidata: {
			type: "string",
		},
		wikipedia: {
			type: "string",
		}
	},
	required: [
		"openalex",
	],
	type: "object",
};
