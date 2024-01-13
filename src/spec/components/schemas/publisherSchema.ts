import { refSchema } from "~/spec/components";
import { countsByYear } from "~/spec/components/schemas/countsByYear";
import { roles } from "~/spec/components/schemas/roles";
import { summary_stats } from "~/spec/components/schemas/summary_stats";

export let publisherSchema = {
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
			type: "string",
		},
		id: {
			type: "string",
		},
		ids: {
			properties: {
				openalex: {
					type: "string",
				},
				ror: {
					type: "string",
				},
				wikidata: {
					type: "string",
				},
			},
			required: ["openalex", "ror", "wikidata"],
			type: "object",
		},
		image_thumbnail_url: {
			type: "string",
		},
		image_url: {
			type: "string",
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
