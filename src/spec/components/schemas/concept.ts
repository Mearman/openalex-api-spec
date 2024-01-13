import { refSchema } from "~/spec/components";
import { concepts } from "~/spec/components/schemas/concepts";
import { countsByYear } from "~/spec/components/schemas/countsByYear";
import { international_display_name_and_description } from "~/spec/components/schemas/international_display_name";

export const conceptSchema = {
	properties: {
		ancestors: {
			items: {
				properties: {
					display_name: {
						type: "string",
					},
					id: {
						type: "string",
					},
					level: {
						type: "integer",
					},
					wikidata: {
						type: "string",
					},
				},
				required: ["id", "wikidata", "display_name", "level"],
				type: "object",
			},
			type: "array",
		},
		cited_by_count: {
			type: "integer",
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
				"openalex",
				"wikidata",
				"mag",
				"wikipedia",
				"umls_cui",
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
		related_concepts: refSchema({ concepts }),
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
