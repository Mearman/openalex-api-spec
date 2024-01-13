import { refSchema } from "~/spec/components";
import { dehydratedConceptArray } from "~/spec/components/schemas/concepts/dehydratedConceptArray";
import {
	international_display_name_and_description
} from "~/spec/components/schemas/institutions/international_display_name";
import { countsByYear } from "~/spec/components/schemas/shared/countsByYear";
import { summary_stats } from "~/spec/components/schemas/shared/summary_stats";

export const conceptSchema = {
	additionalProperties: false,
	properties: {
		ancestors: refSchema({ dehydratedConceptArray }),
		cited_by_count: {
			type: "integer",
		},
		counts_by_year: refSchema({ countsByYear }),
		created_date: {
			type: "string",
		},
		description: {
			type: ["string", "null"]
		},
		display_name: {
			type: "string",
		},
		id: {
			type: "string",
		},
		ids: {
			properties: {
				mag: {
					type: "string",
				},
				openalex: {
					type: "string",
				},
				umls_cui: {
					items: {
						type: "string",
					},
					type: "array",
				},
				wikidata: {
					type: "string",
				},
				wikipedia: {
					type: "string",
				},
			},
			required: [
				"openalex"
			],
			type: "object",
		},
		image_thumbnail_url: {
			type: ["string", "null"]
		},
		image_url: {
			type: ["string", "null"]
		},
		international: refSchema({ international_display_name_and_description }),
		level: {
			type: "integer",
		},
		related_concepts: refSchema({ dehydratedConceptArray }),
		summary_stats: refSchema({ summary_stats }),
		updated_date: {
			type: "string",
		},
		wikidata: {
			type: "string",
		},
		works_api_url: {
			type: "string",
		},
		works_count: {
			type: "integer",
		},
	},
	required: ["id", "display_name"],
	type: "object",
} satisfies SchemaObject;

