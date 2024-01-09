import { refSchema } from "~/spec/components";
import { defaultListParameters } from "~/spec/components/parameters/defaultListParameters";
import { countsByYear } from "~/spec/components/schemas/countsByYear";
import { geo } from "~/spec/components/schemas/geo";
import { group_by_result } from "~/spec/components/schemas/group_by_result";
import { institutionsArray } from "~/spec/components/schemas/institutionsArray";
import { international_display_name } from "~/spec/components/schemas/international_display_name";
import { meta } from "~/spec/components/schemas/meta";
import { repositoriesArray } from "~/spec/components/schemas/repositoriesArray";
import { roles } from "~/spec/components/schemas/roles";
import { x_concepts } from "~/spec/components/schemas/x_concepts";

export const institutions = {
	"/institutions": {
		get: {
			description: "",
			parameters: defaultListParameters,
			responses: {
				"200": {
					content: {
						"application/json": {
							schema: {
								properties: {
									group_by: group_by_result,
									meta: refSchema({ meta }),
									results: {
										items: {
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
												ids: {
													properties: {
														grid: {
															type: "string",
														},
														mag: {
															type: "string",
														},
														openalex: {
															type: "string",
														},
														ror: {
															type: "string",
														},
														wikidata: {
															type: "string",
														},
														wikipedia: {
															type: "string",
														},
													},
													required: ["openalex", "ror", "grid"],
													type: "object",
												},
												image_thumbnail_url: {
													type: "string",
												},
												image_url: {
													type: "string",
												},
												international: refSchema({ international_display_name }),
												lineage: {
													items: {
														type: "string",
													},
													type: "array",
												},
												relevance_score: {
													type: "number",
												},
												repositories: refSchema({ repositoriesArray }),
												roles: refSchema({ roles }),
												ror: {
													type: "string",
												},
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
													required: [
														"2yr_mean_citedness",
														"h_index",
														"i10_index",
													],
													type: "object",
												},
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
												x_concepts: refSchema({ x_concepts }),
											},
											required: ["id", "ror", "display_name"],
											type: "object",
										},
										type: "array",
									},
								},
								required: ["meta", "group_by"],
								type: "object",
							},
						},
					},
					description: "",
				},
			},

			summary: "/institutions",
		},
	},
} satisfies PathsObject;
