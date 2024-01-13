import { refSchema } from "~/spec/components";
import { affiliations } from "~/spec/components/schemas/affiliations";

import { dehydratedConceptArray } from "~/spec/components/schemas/concepts/dehydratedConceptArray";
import { ids } from "~/spec/components/schemas/ids";
import { dehydratedInstitution } from "~/spec/components/schemas/institutions/dehydratedInstitution";
import { dehydratedInstitutionArray } from "~/spec/components/schemas/institutions/dehydratedInstitutionArray";
import { countsByYear } from "~/spec/components/schemas/shared/countsByYear";
import { summary_stats } from "~/spec/components/schemas/shared/summary_stats";

export const author = {
	additionalProperties: false,
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
		ids: refSchema({ ids }),
		last_known_institution: refSchema({ dehydratedInstitution }),
		last_known_institutions: refSchema({ institutionsArray: dehydratedInstitutionArray }),
		orcid: {
			type: ["string", "null"]
		},
		summary_stats: refSchema({ summary_stats }),
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
} satisfies SchemaObject;
