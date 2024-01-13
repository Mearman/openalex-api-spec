export const repositoriesArray = {
	items: {
		properties: {
			display_name: {
				type: "string",
			},
			host_organization: {
				type: "string",
			},
			host_organization_lineage: {
				items: {
					type: "string",
				},
				type: "array",
			},
			host_organization_name: {
				type: "string",
			},
			id: {
				type: "string",
			},
		},
		required: [
			"id",
			"display_name",
			"host_organization",
			"host_organization_name",
			"host_organization_lineage",
		],
		type: "object",
	},
	type: "array",
} satisfies SchemaObject;
