import { refSchema } from "~/spec/components";

import { dehydratedConceptArray } from "~/spec/components/schemas/concepts/dehydratedConceptArray";
import { ids } from "~/spec/components/schemas/ids";
import { countsByYear } from "~/spec/components/schemas/shared/countsByYear";
import { summary_stats } from "~/spec/components/schemas/shared/summary_stats";
import { apc_prices } from "~/spec/components/schemas/sources/apc_prices";

export const sourceSchema: SchemaObject = {
	// additionalProperties: false,
	properties: {
		abbreviated_title: {
			type: "string",
		},
		alternate_titles: {
			type: "array",
			items: {
				type: "string",
			},
		},
		apc_prices: refSchema({ apc_prices }),
		apc_usd: {
			type: "number",
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
		display_name: {
			type: "string",
		},
		homepage_url: {
			type: "string",
		},
		host_organization: {
			type: "string",
		},
		host_organization_lineage: {
			type: "array",
			items: {
				type: "string",
			},
		},
		host_organization_name: {
			type: "string",
		},
		id: {
			type: "string",
		},
		ids: refSchema({ ids }),
		is_in_doaj: {
			type: "boolean",
		},
		is_oa: {
			type: "boolean",
		},
		issn: {
			type: "array",
			items: {
				type: "string",
			},
		},
		issn_l: {
			type: "string",
		},
		societies: {
			type: "array",
			items: {
				type: "object",
				properties: {
					url: {
						type: "string",
					},
					organization: {
						type: "string",
					},
				},
			},
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
