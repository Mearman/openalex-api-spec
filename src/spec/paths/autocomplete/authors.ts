import PathsObject = OpenAPIV3_1.PathsObject;
import { OpenAPIV3_1 } from "openapi-types";

export default {
	"/autocomplete/authors": {
		get: {
			description: "",
			parameters: [
				{
					in: "query",
					name: "q",
					required: false,
					schema: {
						type: "string",
					},
				},
			],
			responses: {
				"200": {
					description: "OK",
					content: {
						"application/json": {
							schema: {
								properties: {
									meta: {
										type: "object",
										properties: {
											count: {
												type: "integer",
											},
											db_response_time_ms: {
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
										]
									},
									results: {
										type: "array",
										additionalProperties: true,
										items: {
											type: "object",
											properties: {
												cited_by_count: {
													type: "integer",
												},
												display_name: {
													type: "string",
												},
												entity_type: {
													type: "string",
												},
												external_id: {
													type: "string",
												},
												filter_key: {
													type: "string",
												},
												hint: {
													type: "string",
												},
												id: {
													type: "string",
												},
												works_count: {
													type: "integer",
												},
											}
										}
									}
								},
								required: [
									"meta",
									"results"
								],
								type: "object",
							},
						},
					}
				},
			},

			summary: "/autocomplete/authors",
		},
	}
} satisfies PathsObject;
