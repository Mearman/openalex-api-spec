import { refSchema } from "~/spec/components";
import { affiliations } from "~/spec/components/schemas/affiliations";
import { concepts } from "~/spec/components/schemas/concepts";
import { countsByYear } from "~/spec/components/schemas/countsByYear";
import { institutionObject } from "~/spec/components/schemas/institutionObject";
import { institutionsArray } from "~/spec/components/schemas/institutionsArray";

export const author = {
	properties: {
		affiliations: refSchema({ affiliations }),
		cited_by_count: {
			type: "integer",
		},
		counts_by_year: refSchema({ countsByYear }),
		created_date: {
			type: "string",
		},
		display_name: {
			type: "string",
		},
		display_name_alternatives: {
			items: {
				type: "string",
			},
			type: "array",
		},
		id: {
			type: "string",
		},
		ids: {
			properties: {
				openalex: {
					type: "string",
				},
				orcid: {
					type: "string"
				},
				scopus: {
					type: "string",
				},
				wikipedia: {
					type: "string",
				},
			},
			required: ["openalex"],
			type: "object",
		},
		last_known_institution: refSchema({ institutionObject }),
		last_known_institutions: refSchema({ institutionsArray }),
		orcid: {
			type: ["string", "null"]
		},
		summary_stats: {
			properties: {
				"2yr_mean_citedness": {
					type: "number",
				},
				h_index: {
					type: "integer",
				},
				i10_index: {
					type: "integer",
				},
			},
			required: ["2yr_mean_citedness", "h_index", "i10_index"],
			type: "object",
		},
		updated_date: {
			type: "string",
		},
		works_api_url: {
			type: "string",
		},
		works_count: {
			type: "integer",
		},
		x_concepts: refSchema({ concepts }),
	},
	required: ["id", "display_name"],
	type: "object",
} satisfies SchemaObject;