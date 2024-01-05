export const funder = {
	"/funders/{id}": {
		get: {
			description: "",
			parameters: [
				{
					in: "path",
					name: "id",
					required: true,
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
			],
			responses: {
				"200": {
					content: {
						"application/json": {
							schema: {
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
											required: ["year", "works_count", "cited_by_count"],
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
										required: [
											"openalex",
											"ror",
											"wikidata",
											"crossref",
											"doi",
										],
										type: "object",
									},
									image_thumbnail_url: {
										type: "string",
									},
									image_url: {
										type: "string",
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
										required: ["2yr_mean_citedness", "h_index", "i10_index"],
										type: "object",
									},
									updated_date: {
										type: "string",
									},
									works_count: {
										type: "integer",
									},
								},
								required: ["id", "display_name"],
								type: "object",
							},
						},
					},
					description: "",
				},
			},

			summary: "/funders/{id}",
		},
	},
} satisfies PathsObject;
