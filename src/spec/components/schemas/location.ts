import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;

export const location: SchemaObject = {
	type: "object",
	properties: {
		is_oa: {
			type: "boolean",
		},
		landing_page_url: {
			type: "string",
		},
		pdf_url: {
			type: "string",
		},
		source: {
			type: "object",
			properties: {
				id: {
					type: "string",
				},
				display_name: {
					type: "string",
				},
				issn_l: {
					type: "string",
				},
				issn: {
					type: "array",
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
					type: "string",
				},
				host_organization_name: {
					type: "string",
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
			},
			required: [
				"id",
				"display_name",
				"issn_l",
				"issn",
				"is_oa",
				"is_in_doaj",
				"host_organization",
				"host_organization_name",
				"host_organization_lineage",
				"host_organization_lineage_names",
				"type",
			],
		},
		license: {
			type: "string",
		},
		version: {
			type: "string",
		},
		is_accepted: {
			type: "boolean",
		},
		is_published: {
			type: "boolean",
		},
	},
	required: [
		"is_oa",
		"landing_page_url",
		"pdf_url",
		"source",
		"license",
		"version",
		"is_accepted",
		"is_published",
	],
} satisfies SchemaObject;
