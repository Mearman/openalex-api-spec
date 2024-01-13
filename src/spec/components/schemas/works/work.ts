import { refSchema } from "~/spec/components";
import { countsByYear } from "~/spec/components/schemas/shared/countsByYear";
import { apc } from "~/spec/components/schemas/works/apc";
import { authorships } from "~/spec/components/schemas/works/authorships";
import { location } from "~/spec/components/schemas/works/location";

export const workSchema = {
	properties: {
		abstract_inverted_index: {
			type: ["object", "null"],
		},
		apc_list: refSchema({ apc }),
		apc_paid: refSchema({ apc }),
		authorships: refSchema({ authorships }),
		best_oa_location: refSchema({ location }),
		biblio: {
			type: "object",
			properties: {
				volume: {
					type: ["string", "null"]
				},
				issue: {
					type: ["string", "null"]
				},
				first_page: {
					type: ["string", "null"]
				},
				last_page: {
					type: ["string", "null"]
				},
			}
		},
		cited_by_api_url: {
			type: "string",
		},
		cited_by_count: {
			type: "integer",
		},
		cited_by_percentile_year: {
			type: "object",
			properties: {
				min: {
					type: "integer",
				},
				max: {
					type: "integer",
				},
			},
			required: ["min", "max"],
		},
		concepts: {
			type: "array",
			items: {
				type: "object",
				properties: {
					id: {
						type: "string",
					},
					wikidata: {
						type: "string",
					},
					display_name: {
						type: "string",
					},
					level: {
						type: "integer",
					},
					score: {
						type: "number",
					},
				},
				required: ["id", "wikidata", "display_name", "level", "score"],
			},
		},
		corresponding_author_ids: {
			type: "array",
			items: {
				type: "string",
			},
		},
		corresponding_institution_ids: {
			type: "array",
			items: {
				type: "string",
			},
		},
		countries_distinct_count: {
			type: "integer",
		},
		counts_by_year: refSchema({ countsByYear }),
		created_date: {
			type: "string",
		},
		display_name: {
			type: "string",
		},
		doi: {
			type: ["string", "null"],
		},
		grants: {
			type: "array",
			items: {
				type: "object",
				properties: {
					funder: {
						type: "string",
					},
					funder_display_name: {
						type: "string",
					},
					award_id: {
						type: "string",
					},
				},
				required: ["funder", "funder_display_name", "award_id"],
			},
		},
		has_fulltext: {
			type: "boolean",
		},
		id: {
			type: "string",
		},
		ids: {
			type: "object",
			properties: {
				openalex: {
					type: "string",
				},
				doi: {
					type: "string",
				},
				mag: {
					type: "string",
				},
			},
			required: ["openalex", "mag"],
		},
		institutions_distinct_count: {
			type: "integer",
		},
		is_paratext: {
			type: "boolean",
		},
		is_retracted: {
			type: "boolean",
		},
		keywords: {
			type: "array",
			items: {
				type: "object",
				properties: {
					keyword: {
						type: "string",
					},
					score: {
						type: "number",
					},
				},
				required: ["keyword", "score"],
			},
		},
		language: {
			type: "string",
		},
		locations: {
			type: "array",
			items: refSchema({ location }),
		},
		locations_count: {
			type: "integer",
		},
		mesh: {
			type: "array",
			items: {
				type: "object",
				properties: {
					descriptor_ui: {
						type: "string",
					},
					descriptor_name: {
						type: "string",
					},
					qualifier_ui: {
						type: "string",
					},
					qualifier_name: {
						type: "string",
					},
					is_major_topic: {
						type: "boolean",
					},
				},
				required: [
					"descriptor_ui",
					"descriptor_name",
					"qualifier_ui",
					"qualifier_name",
					"is_major_topic",
				],
			},
		},
		ngrams_url: {
			type: "string",
		},
		open_access: {
			type: "object",
			properties: {
				is_oa: {
					type: "boolean",
				},
				oa_status: {
					type: "string",
				},
				oa_url: {
					type: ["string", "null"],
				},
				any_repository_has_fulltext: {
					type: "boolean",
				},
			},
			required: ["is_oa", "oa_status", "oa_url", "any_repository_has_fulltext"],
		},
		primary_location: refSchema({ location }),
		publication_date: {
			type: "string",
		},
		publication_year: {
			type: "integer",
		},
		referenced_works: {
			type: "array",
			items: {
				type: "string",
			},
		},
		referenced_works_count: {
			type: "integer",
		},
		related_works: {
			type: "array",
			items: {
				type: "string",
			},
		},
		sustainable_development_goals: {
			type: "array",
			items: {
				type: "object",
				properties: {
					id: {
						type: "string",
					},
					display_name: {
						type: "string",
					},
					score: {
						type: "number",
					},
				},
				required: ["id", "display_name", "score"],
			},
		},
		title: {
			type: "string",
		},
		type: {
			type: "string",
		},
		type_crossref: {
			type: "string",
		},
		updated_date: {
			type: "string",
		},
	},
	required: ["id", "display_name"],
	type: "object",
} satisfies SchemaObject;
