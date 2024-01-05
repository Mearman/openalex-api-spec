import { OpenAPIV3_1 } from "openapi-types";
import { group_by } from "~/spec/components/schemas";
import PathsObject = OpenAPIV3_1.PathsObject;

export const funders = {
	"/funders": {
		get: {
			description: "",
			parameters: [
				{
					in: "query",
					name: "filter",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					in: "query",
					name: "group_by",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					in: "query",
					name: "per-page",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					in: "query",
					name: "page",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					in: "query",
					name: "sample",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					in: "query",
					name: "search",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					in: "query",
					name: "select",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					in: "query",
					name: "sort",
					required: false,
					schema: {
						type: "string",
					},
				},
			],
			responses: {
				"200": {
					content: {
						"application/json": {
							schema: {
								properties: {
									group_by,
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
														required: [
															"year",
															"works_count",
															"cited_by_count",
														],
														type: "object",
													},
													type: "array",
												},
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
	}
} satisfies PathsObject;
