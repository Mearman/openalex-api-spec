import { OpenAPIV3_1 } from "openapi-types";
import PathsObject = OpenAPIV3_1.PathsObject;

export default {
	"/autocomplete/publishers": {
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
					content: {
						"application/json": {
							schema: {
								properties: {
									meta: {
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
										],
										type: "object",
									},
									results: {
										items: {
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
											},
											type: "object",
										},
										type: "array",
									},
								},
								required: ["meta", "results"],
								type: "object",
							},
						},
					},
					description: "",
				},
			},

			summary: "/autocomplete/publishers",
		},
	},
} satisfies PathsObject;