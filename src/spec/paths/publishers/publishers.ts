import { refSchema } from "~/spec/components";
import { defaultListParameters } from "~/spec/components/parameters/defaultListParameters";
import { group_by_result } from "~/spec/components/schemas/group_by_result";
import { meta } from "~/spec/components/schemas/meta";

export const publishers = {
	"/publishers": {
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
									meta: refSchema({meta}),
									results: {
										items: {
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
												counts_by_year: {
													items: {
														properties: {
															cited_by_count: {
																type: "integer",
															},
															works_count: {
																type: "integer",
															},
															year: {
																type: "integer",
															},
														},
														required: ["year", "works_count", "cited_by_count"],
														type: "object",
													},
													type: "array",
												},
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
													required: ["openalex", "wikidata"],
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
													anyOf: [
														{
															type: "string",
														},
														{
															properties: {
																display_name: {
																	type: "string",
																},
																id: {
																	type: "string",
																},
															},
															required: ["id", "display_name"],
															type: "object",
														},
													],
												},
												relevance_score: {
													type: "number",
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
												sources_api_url: {
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
												updated_date: {
													type: "string",
												},
												works_count: {
													type: "integer",
												},
											},
											required: [
												"id",
												"display_name",
												"alternate_titles",
												"hierarchy_level",
												"parent_publisher",
												"lineage",
												"country_codes",
												"homepage_url",
												"image_url",
												"image_thumbnail_url",
												"works_count",
												"cited_by_count",
												"summary_stats",
												"ids",
												"counts_by_year",
												"roles",
												"sources_api_url",
												"updated_date",
												"created_date",
											],
											type: "object",
										},
										type: "array",
									},
								},
								required: ["meta", "results", "group_by"],
								type: "object",
							},
						},
					},
					description: "",
				},
			},

			summary: "/publishers",
		},
	},
} satisfies PathsObject;
