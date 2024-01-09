import { refSchema } from "~/spec/components";
import { defaultListParameters } from "~/spec/components/parameters/defaultListParameters";
import { countsByYear } from "~/spec/components/schemas/countsByYear";
import { group_by_result } from "~/spec/components/schemas/group_by_result";
import { international_display_name_and_description } from "~/spec/components/schemas/international_display_name";

export const concepts = {
	"/concepts": {
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
									meta: {
										properties: {
											count: {
												type: "integer",
											},
											db_response_time_ms: {
												type: "integer",
											},
											groups_count: {
												type: "integer",
											},
											page: {
												type: "integer",
											},
											per_page: {
												type: "integer",
											},
										},
										required: [
											"count",
											"db_response_time_ms",
											"page",
											"per_page",
											"groups_count",
										],
										type: "object",
									},
									results: {
										items: {
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
														required: [
															"id",
															"wikidata",
															"display_name",
															"level",
														],
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
														umls_aui: {
															items: {
																type: "string",
															},
															type: "array",
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
													required: ["openalex", "wikidata", "mag"],
													type: "object",
												},
												image_thumbnail_url: {
													type: "string",
												},
												image_url: {
													type: "string",
												},
												international: refSchema({ international_display_name_and_description }),
												level: {
													type: "integer",
												},
												related_concepts: {
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
															score: {
																type: "number",
															},
															wikidata: {
																type: "string",
															},
														},
														required: [
															"id",
															"wikidata",
															"display_name",
															"level",
															"score",
														],
														type: "object",
													},
													type: "array",
												},
												relevance_score: {
													type: "number",
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
											required: ["id", "display_name", "description"],
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

			summary: "/concepts",
		},
	},
} satisfies PathsObject;
