import { refSchema } from "~/spec/components";

import { dehydratedConceptArray } from "~/spec/components/schemas/concepts/dehydratedConceptArray";
import { ids } from "~/spec/components/schemas/ids";
import {
	associatedInstitutionArray
} from "~/spec/components/schemas/institutions/associated/associatedInstitutionArray";
import { geo } from "~/spec/components/schemas/institutions/geo";
import { international_display_name } from "~/spec/components/schemas/institutions/international_display_name";
import { repositoriesArray } from "~/spec/components/schemas/institutions/repositoriesArray";
import { countsByYear } from "~/spec/components/schemas/shared/countsByYear";
import { roles } from "~/spec/components/schemas/shared/roles";
import { summary_stats } from "~/spec/components/schemas/shared/summary_stats";

export const institutionSchema: SchemaObject = {
	// additionalProperties: false,
	properties: {
		associated_institutions: refSchema({ associatedInstitutionArray }),
		cited_by_count: {
			type: "integer",
		},
		country_code: {
			type: "string"
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
			type: "string"
		},
		image_url: {
			type: "string"
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

