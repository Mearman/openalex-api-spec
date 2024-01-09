import { refSchema } from "~/spec/components";
import { defaultListParameters } from "~/spec/components/parameters/defaultListParameters";
import { countsByYear } from "~/spec/components/schemas/countsByYear";
import { group_by_result } from "~/spec/components/schemas/group_by_result";
import { international_display_name } from "~/spec/components/schemas/international_display_name";
import { meta } from "~/spec/components/schemas/meta";

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
												associated_institutions: {
													items: {
														properties: {
															country_code: {
																type: "string",
															},
															display_name: {
																type: "string",
															},
															id: {
																type: "string",
															},
															relationship: {
																type: "string",
															},
															ror: {
																type: "string",
															},
															type: {
																type: "string",
															},
														},
														required: [
															"id",
															"ror",
															"display_name",
															"country_code",
															"type",
															"relationship",
														],
														type: "object",
													},
													type: "array",
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
												geo: {
													properties: {
														city: {
															type: "string",
														},
														country: {
															type: "string",
														},
														country_code: {
															type: "string",
														},
														geonames_city_id: {
															type: "string",
														},
														latitude: {
															type: "number",
														},
														longitude: {
															type: "number",
														},
														region: {
															type: "string",
														},
													},
													required: [
														"city",
														"geonames_city_id",
														"region",
														"country_code",
														"country",
														"latitude",
														"longitude",
													],
													type: "object",
												},
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
												repositories: {
													items: {
														properties: {
															display_name: {
																type: "string",
															},
															host_organization: {
																type: "string",
															},
															host_organization_lineage: {
																items: {
																	type: "string",
																},
																type: "array",
															},
															host_organization_name: {
																type: "string",
															},
															id: {
																type: "string",
															},
														},
														required: [
															"id",
															"display_name",
															"host_organization",
															"host_organization_name",
															"host_organization_lineage",
														],
														type: "object",
													},
													type: "array",
												},
												roles: {
													items: {
														properties: {
															id: {
																type: "string",
															},
															role: {
																type: "string",
															},
															works_count: {
																type: "integer",
															},
														},
														required: ["role", "id", "works_count"],
														type: "object",
													},
													type: "array",
												},
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
												x_concepts: {
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
