export const location: SchemaObject = {
	additionalProperties: false,
	type: ["object", "null"],
	properties: {
		is_accepted: {
			type: "boolean",
		},
		is_oa: {
			type: "boolean",
		},
		is_published: {
			type: "boolean",
		},
		landing_page_url: {
			type: ["string", "null"],
		},
		license: {
			type: ["string", "null"],
		},
		pdf_url: {
			type: ["string", "null"],
		},
		source: {
			type: ["object", "null"],
			properties: {
				id: {
					type: "string",
				},
				display_name: {
					type: "string",
				},
				issn_l: {
					type: ["string", "null"]
				},
				issn: {
					type: ["array", "null"],
					items: {
						type: "string",
					},
				},
				is_oa: {
					type: "boolean",
				},
				is_in_doaj: {
					type: "boolean",
				},
				host_organization: {
					type: ["string", "null"]
				},
				host_organization_name: {
					type: ["string", "null"]
				},
				host_organization_lineage: {
					type: "array",
					items: {
						type: "string",
					},
				},
				host_organization_lineage_names: {
					type: "array",
					items: {
						type: "string",
					},
				},
				type: {
					type: "string",
				},
			}
		},
		version: {
			type: ["string", "null"],
		},
	}
} satisfies SchemaObject;
