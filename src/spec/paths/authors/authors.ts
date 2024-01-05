import { refSchema } from "~/spec/components";
import { defaultListParameters } from "~/spec/components/parameters/defaultListParameters";

import { group_by_result } from "~/spec/components/schemas/group_by_result";
import { meta } from "~/spec/components/schemas/meta";

const authors: PathItemObject = {
	get: {
		description: "",
		parameters: defaultListParameters,
		responses: {
			"200": {
				content: {
					"application/json": {
						schema: {
							properties: {
								group_by: refSchema({group_by_result}),
								meta: refSchema({meta}),
								results: {
									items: {
										properties: {
											affiliations: {
												items: {
													properties: {
														institution: {
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
																lineage: {
																	items: {
																		type: "string",
																	},
																	type: "array",
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
																"lineage",
															],
															type: "object",
														},
														years: {
															items: {
																type: "integer",
															},
															type: "array",
														},
													},
													required: ["institution", "years"],
													type: "object",
												},
												type: "array",
											},
											cited_by_count: {
												type: "integer",
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
											display_name_alternatives: {
												items: {
													type: "string",
												},
												type: "array",
											},
											id: {
												type: "string",
											},
											ids: {
												properties: {
													openalex: {
														type: "string",
													},
													orcid: {
														type: "string",
													},
													scopus: {
														type: "string",
													},
													wikipedia: {
														type: "string",
													},
												},
												required: ["openalex"],
												type: "object",
											},
											last_known_institution: {
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
													lineage: {
														items: {
															type: "string",
														},
														type: "array",
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
													"lineage",
												],
												type: "object",
											},
											last_known_institutions: {
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
														lineage: {
															items: {
																type: "string",
															},
															type: "array",
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
														"lineage",
													],
													type: "object",
												},
												type: "array",
											},
											orcid: {
												type: "string",
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
										required: ["id", "orcid", "display_name"],
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

		summary: "/authors",
	},
};
export default {
	"/authors": authors,
} satisfies PathsObject;
