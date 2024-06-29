import { refSchema } from "~/spec/components";
import { ids } from "~/spec/components/schemas/ids";
import { countsByYear } from "~/spec/components/schemas/shared/countsByYear";
import { roles } from "~/spec/components/schemas/shared/roles";
import { summary_stats } from "~/spec/components/schemas/shared/summary_stats";

export const funderSchema = {
	additionalProperties: false,
	properties: {
		alternate_titles: {
			items: {
				type: "string",
			},
			type: "array",
		},
		cited_by_count: {
			type: "integer",
		},
		country_code: {
			type: "string",
		},
		counts_by_year: refSchema({ countsByYear }),
		created_date: {
			type: "string",
		},
		description: {
			type: "string",
		},
		display_name: {
			type: "string",
		},
		grants_count: {
			type: "integer",
		},
		homepage_url: {
			type: "string"
		},
		id: {
			type: "string",
		},
		ids: refSchema({ ids }),
		image_thumbnail_url: {
			type: "string"
		},
		image_url: {
			type: "string"
		},
		relevance_score: {
			type: "number",
		},
		roles: refSchema({ roles }),
		summary_stats: refSchema({ summary_stats }),
		updated_date: {
			type: "string",
		},
		works_count: {
			type: "integer",
		},
	},
	required: ["id", "display_name", "alternate_titles"],
	type: "object"
} satisfies SchemaObject;
