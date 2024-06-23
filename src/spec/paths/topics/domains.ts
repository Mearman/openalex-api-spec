
export const domains = {
	"/domains/id": {
		get: {
			responses: {
				"200": {
					content: {
						"application/json": {},
					},
					description: "",
					headers: {
						Nel: {
							required: false,
							schema: {
								type: "string",
							},
						},
						"Reporting-Endpoints": {
							required: false,
							schema: {
								type: "string",
							},
						},
						"X-Api-Pool": {
							required: false,
							schema: {
								type: "string",
							},
						},
						"X-Content-Type-Options": {
							required: false,
							schema: {
								type: "string",
							},
						},
					},
				},
			},
			parameters: [
				{
					in: "path",
					name: "id",
					required: true,
					schema: {
						type: "string",
						pattern: "^[0-9]+$",
					},
				},
			],
		},
	},
} satisfies PathsObject;

export const fields = {
	"/fields/{id}": {
		get: {
			responses: {
				"200": {
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									id: {
										type: "string",
									},
									display_name: {
										type: "string",
									},
									description: {
										type: "string",
									},
									ids: {
										type: "object",
										properties: {
											wikidata: {
												type: "string",
											},
											wikipedia: {
												type: "string",
											},
										},
										required: ["wikidata", "wikipedia"],
									},
									display_name_alternatives: {
										type: "array",
										items: {
											type: "string",
										},
									},
									domain: {
										type: "object",
										properties: {
											id: {
												type: "string",
											},
											display_name: {
												type: "string",
											},
										},
										required: ["id", "display_name"],
									},
									subfields: {
										type: "array",
										items: {
											type: "object",
											properties: {
												id: {
													type: "string",
												},
												display_name: {
													type: "string",
												},
											},
											required: ["id", "display_name"],
										},
									},
									siblings: {
										type: "array",
										items: {
											type: "object",
											properties: {
												id: {
													type: "string",
												},
												display_name: {
													type: "string",
												},
											},
											required: ["id", "display_name"],
										},
									},
									works_count: {
										type: "integer",
									},
									cited_by_count: {
										type: "integer",
									},
									works_api_url: {
										type: "string",
									},
									updated_date: {
										type: "string",
									},
									created_date: {
										type: "string",
									},
								},
								required: [
									"id",
									"display_name",
									"description",
									"ids",
									"display_name_alternatives",
									"domain",
									"subfields",
									"siblings",
									"works_count",
									"cited_by_count",
									"works_api_url",
									"updated_date",
									"created_date",
								],
							},
						},
					},
					description: "",
					headers: {
						Nel: {
							required: false,
							schema: {
								type: "string",
							},
						},
						"Reporting-Endpoints": {
							required: false,
							schema: {
								type: "string",
							},
						},
						"X-Api-Pool": {
							required: false,
							schema: {
								type: "string",
							},
						},
						"X-Content-Type-Options": {
							required: false,
							schema: {
								type: "string",
							},
						},
					},
				},
			},
			security: [],
			parameters: [
				{
					name: "id",
					in: "path",
					required: true,
					schema: {
						type: "string",
					},
				},
				{
					name: "mailto",
					in: "query",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					name: "per-page",
					in: "query",
					required: false,
					schema: {
						type: "string",
					},
				},
			],
		},
	},
} satisfies PathsObject;

export const subfields = {
	"/subfields/{id}": {
		get: {
			responses: {
				"200": {
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									id: {
										type: "string",
									},
									display_name: {
										type: "string",
									},
									description: {
										type: "string",
									},
									ids: {
										type: "object",
										properties: {
											wikidata: {
												type: "string",
											},
											wikipedia: {
												type: "string",
											},
										},
										required: ["wikidata", "wikipedia"],
									},
									display_name_alternatives: {
										type: "array",
										items: {
											type: "string",
										},
									},
									field: {
										type: "object",
										properties: {
											id: {
												type: "string",
											},
											display_name: {
												type: "string",
											},
										},
										required: ["id", "display_name"],
									},
									domain: {
										type: "object",
										properties: {
											id: {
												type: "string",
											},
											display_name: {
												type: "string",
											},
										},
										required: ["id", "display_name"],
									},
									topics: {
										type: "array",
										items: {
											type: "object",
											properties: {
												display_name: {
													type: "string",
												},
												id: {
													type: "string",
												},
											},
											required: ["display_name", "id"],
										},
									},
									siblings: {
										type: "array",
										items: {
											type: "object",
											properties: {
												id: {
													type: "string",
												},
												display_name: {
													type: "string",
												},
											},
											required: ["id", "display_name"],
										},
									},
									works_count: {
										type: "integer",
									},
									cited_by_count: {
										type: "integer",
									},
									works_api_url: {
										type: "string",
									},
									updated_date: {
										type: "string",
									},
									created_date: {
										type: "string",
									},
								},
								required: [
									"id",
									"display_name",
									"description",
									"ids",
									"display_name_alternatives",
									"field",
									"domain",
									"topics",
									"siblings",
									"works_count",
									"cited_by_count",
									"works_api_url",
									"updated_date",
									"created_date",
								],
							},
						},
					},
					description: "",
					headers: {
						Nel: {
							required: false,
							schema: {
								type: "string",
							},
						},
						"Reporting-Endpoints": {
							required: false,
							schema: {
								type: "string",
							},
						},
						"X-Api-Pool": {
							required: false,
							schema: {
								type: "string",
							},
						},
						"X-Content-Type-Options": {
							required: false,
							schema: {
								type: "string",
							},
						},
					},
				},
			},
			security: [],
			parameters: [
				{
					name: "id",
					in: "path",
					required: true,
					schema: {
						type: "string",
					},
				},
				{
					name: "mailto",
					in: "query",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					name: "per-page",
					in: "query",
					required: false,
					schema: {
						type: "string",
					},
				},
			],
		},
	},
} satisfies PathsObject;

export const topics = {
	"/topics/{id}": {
		get: {
			responses: {
				"200": {
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									id: {
										type: "string",
									},
									display_name: {
										type: "string",
									},
									description: {
										type: "string",
									},
									keywords: {
										type: "array",
										items: {
											type: "string",
										},
									},
									ids: {
										type: "object",
										properties: {
											openalex: {
												type: "string",
											},
											wikipedia: {
												type: "string",
											},
										},
										required: ["openalex", "wikipedia"],
									},
									subfield: {
										type: "object",
										properties: {
											id: {
												type: "string",
											},
											display_name: {
												type: "string",
											},
										},
										required: ["id", "display_name"],
									},
									field: {
										type: "object",
										properties: {
											id: {
												type: "string",
											},
											display_name: {
												type: "string",
											},
										},
										required: ["id", "display_name"],
									},
									domain: {
										type: "object",
										properties: {
											id: {
												type: "string",
											},
											display_name: {
												type: "string",
											},
										},
										required: ["id", "display_name"],
									},
									siblings: {
										type: "array",
										items: {
											type: "object",
											properties: {
												id: {
													type: "string",
												},
												display_name: {
													type: "string",
												},
											},
											required: ["id", "display_name"],
										},
									},
									works_count: {
										type: "integer",
									},
									cited_by_count: {
										type: "integer",
									},
									updated_date: {
										type: "string",
									},
									created_date: {
										type: "string",
									},
								},
								required: [
									"id",
									"display_name",
									"description",
									"keywords",
									"ids",
									"subfield",
									"field",
									"domain",
									"siblings",
									"works_count",
									"cited_by_count",
									"updated_date",
									"created_date",
								],
							},
						},
					},
					description: "",
					headers: {
						Nel: {
							required: false,
							schema: {
								type: "string",
							},
						},
						"Reporting-Endpoints": {
							required: false,
							schema: {
								type: "string",
							},
						},
						"X-Api-Pool": {
							required: false,
							schema: {
								type: "string",
							},
						},
						"X-Content-Type-Options": {
							required: false,
							schema: {
								type: "string",
							},
						},
					},
				},
			},
			security: [],
			parameters: [
				{
					name: "id",
					in: "path",
					required: true,
					schema: {
						type: "string",
					},
				},
				{
					name: "mailto",
					in: "query",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					name: "per-page",
					in: "query",
					required: false,
					schema: {
						type: "string",
					},
				},
			],
		},
	},
} satisfies PathsObject;
