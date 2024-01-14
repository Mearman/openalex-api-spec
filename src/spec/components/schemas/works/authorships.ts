export const authorships = {
	type: "array",
	items: {
		type: "object",
		properties: {
			author: {
				type: "object",
				properties: {
					id: {
						type: "string",
					},
					display_name: {
						type: "string",
					},
					orcid: {
						type: ["string", "null"]
					},
				},
				required: ["id", "display_name"],
			},
			author_position: {
				type: "string",
			},
			countries: {
				type: "array",
				items: {
					type: "string",
				},
			},
			institutions: {
				type: "array",
				items: {
					type: "object",
					properties: {
						id: {
							type: "string",
						},
						display_name: {
							type: "string",
						},
						ror: {
							type: "string",
						},
						country_code: {
							type: "string",
						},
						type: {
							type: "string",
						},
						lineage: {
							type: "array",
							items: {
								type: "string",
							},
						},
					},
					required: [
						"id",
						"display_name",
						"ror",
						"country_code",
						"type",
						"lineage",
					],
				},
			},
			is_corresponding: {
				type: "boolean",
			},
			raw_affiliation_string: {
				type: "string",
			},
			raw_affiliation_strings: {
				type: "array",
				items: {
					type: "string",
				},
			},
			raw_author_name: {
				type: "string",
			},
		},
		required: [
			"author_position",
			"author",
			"institutions",
			"countries",
			"is_corresponding",
			"raw_author_name",
			"raw_affiliation_string",
			"raw_affiliation_strings",
		],
	},
} satisfies SchemaObject;
