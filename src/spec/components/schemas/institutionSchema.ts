import { refSchema } from "~/spec/components";
import { dehydratedConceptArray } from "~/spec/components/schemas/concept";
import { countsByYear } from "~/spec/components/schemas/countsByYear";
import { geo } from "~/spec/components/schemas/geo";
import { ids } from "~/spec/components/schemas/ids";
import { institutionsArray } from "~/spec/components/schemas/institutionsArray";
import { international_display_name } from "~/spec/components/schemas/international_display_name";
import { repositoriesArray } from "~/spec/components/schemas/repositoriesArray";
import { roles } from "~/spec/components/schemas/roles";
import { summary_stats } from "~/spec/components/schemas/summary_stats";

export const institutionSchema: SchemaObject = {
	properties: {
		associated_institutions: refSchema({ institutionsArray }),
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
		display_name: {
			type: "string",
		},
		display_name_acronyms: {
			items: {
				type: "string",
			},
			type: "array",
		},
		display_name_alternatives: {
			items: {
				type: "string",
			},
			type: "array",
		},
		geo: refSchema({ geo }),
		homepage_url: {
			type: "string",
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
		international: refSchema({ international_display_name }),
		lineage: {
			items: {
				type: "string",
			},
			type: "array",
		},
		repositories: refSchema({ repositoriesArray }),
		roles: refSchema({ roles }),
		ror: {
			type: "string",
		},
		summary_stats: refSchema({ summary_stats }),
		type: {
			type: "string",
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
		x_concepts: refSchema({ dehydratedConceptArray }),
	},
	required: ["id", "display_name"],
	type: "object",
};
