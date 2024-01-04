import { OpenAPIV3_1 } from "openapi-types";
import PathItemObject = OpenAPIV3_1.PathItemObject;

const example: { meta: { count: number; openalex_id: string; doi: string; }; ngrams: { ngram_count: number; ngram_tokens: number; term_frequency: number; ngram: string; }[]; } = {
	meta: {
		count: 3475,
		doi: "https://doi.org/10.1093/comjnl/40.2_and_3.67",
		openalex_id: "https://openalex.org/W2089319476",
	},
	ngrams: [
		{
			ngram: "unbounded Length Contexts for PPM",
			ngram_count: 1,
			ngram_tokens: 5,
			term_frequency: 0.00017274140611504577,
		},
	],
};
export const workNgrams: PathItemObject = {
	get: {
		operationId: "getWorkNgrams",
		tags: ["works", "ngrams"],
		externalDocs: {
			url: "https://docs.openalex.org/api-entities/works/get-n-grams",
		},
		description: "",
		parameters: [
			{
				example: "W2089319476",
				in: "path",
				name: "id",
				required: true,
				schema: {
					type: "string",
				},
			},
		],
		responses: {
			"200": {
				content: {
					"application/json": {
						example,
						schema: {
							properties: {
								meta: {
									properties: {
										count: {
											type: "integer",
										},
										doi: {
											type: "string",
										},
										openalex_id: {
											type: "string",
										},
									},
									required: ["count", "openalex_id"],
									type: "object",
								},
								ngrams: {
									items: {
										properties: {
											ngram: {
												type: "string",
											},
											ngram_count: {
												type: "integer",
											},
											ngram_tokens: {
												type: "integer",
											},
											term_frequency: {
												type: "number",
											},
										},
										required: [
											"ngram",
											"ngram_count",
											"ngram_tokens",
											"term_frequency",
										],
										type: "object",
									},
									type: "array",
								},
							},
						},
					},
				},
				description: ""
			},
		},
		summary: "/works/{id}/ngrams",
	},
};
