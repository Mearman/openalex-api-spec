import { refSchema } from "~/spec/components";
import { ids } from "~/spec/components/schemas/ids";
import { countsByYear } from "~/spec/components/schemas/shared/countsByYear";
import { roles } from "~/spec/components/schemas/shared/roles";
import { summary_stats } from "~/spec/components/schemas/shared/summary_stats";

export let publisherSchema = {
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
		country_codes: {
			items: {
				type: "string",
			},
			type: "array",
		},
		counts_by_year: refSchema({ countsByYear }),
		created_date: {
			type: "string",
		},
		display_name: {
			type: "string",
		},
		hierarchy_level: {
			type: "integer",
		},
		homepage_url: {
			type: ["string", "null"]
		},
		id: {
			type: "string",
		},
		ids: refSchema({ ids }),
		image_thumbnail_url: {
			type: ["string", "null"]
		},
		image_url: {
			type: ["string", "null"]
		},
		lineage: {
			items: {
				type: "string",
			},
			type: "array",
		},
		parent_publisher: {
			type: ["string", "null"],
		},
		roles: refSchema({ roles }),
		sources_api_url: {
			type: "string",
		},
		summary_stats: refSchema({ summary_stats }),
		updated_date: {
			type: "string",
		},
		works_count: {
			type: "integer",
		},
	},
	required: ["id", "display_name"],
	type: "object",
} satisfies SchemaObject;
