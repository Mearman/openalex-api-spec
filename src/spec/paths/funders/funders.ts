import { refSchema } from "~/spec/components";
import { defaultListParameters } from "~/spec/components/parameters/defaultListParameters";
import { countsByYear } from "~/spec/components/schemas/countsByYear";
import { group_by_result } from "~/spec/components/schemas/group_by_result";
import { meta } from "~/spec/components/schemas/meta";
import { roles } from "~/spec/components/schemas/roles";

export const funders = {
	"/funders": {
		get: {
			description: "",
			operationId: "getFunders",
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
												alternate_titles: {
													items: {
														type: "string",
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
												description: {
													type: "string",
												},
												display_name: {
													type: "string",
												},
												grants_count: {
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
														crossref: {
															type: "string",
														},
														doi: {
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
													},
													required: ["openalex", "crossref", "doi"],
													type: "object",
												},
												image_thumbnail_url: {
													type: "string",
												},
												image_url: {
													type: "string",
												},
												relevance_score: {
													type: "number",
												},
												roles: refSchema({ roles }),
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
											required: ["id", "display_name", "alternate_titles"],
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

			summary: "/funders",
		},
	},
} satisfies PathsObject;
