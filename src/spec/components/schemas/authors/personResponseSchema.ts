export let personResponseSchema: SchemaObject = {
	properties: {
		display_name: {
			type: "string",
		},
		id: {
			type: "string",
		},
		orcid: {
			type: "string",
		},
	},
	required: ["id", "display_name", "orcid"],
	type: "object",
}
	;
