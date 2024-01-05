export const publisher = {
	"/publishers/{id}": {
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
										required: ["openalex", "ror", "wikidata"],
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

			summary: "/publishers/{id}",
		},
	},
} satisfies PathsObject;
