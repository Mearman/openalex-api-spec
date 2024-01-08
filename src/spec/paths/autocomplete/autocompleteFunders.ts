import { refParameter, refSchema } from "~/spec/components";
import { autocompleteQuery } from "~/spec/components/parameters/autocompleteQuery";
import { meta } from "~/spec/components/schemas/meta";

export default {
	"/autocomplete/funders": {
		get: {
			description: "",
			parameters: [
				refParameter({autocompleteQuery}),
			],
			responses: {
				"200": {
					description: "OK",
					content: {
						"application/json": {
							schema: {
								properties: {
									meta: refSchema({meta}),
									results: {
										type: "array",
										items: {
											type: "object",
											additionalProperties: true,
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
										},
									},
								},
								required: ["meta", "results"],
								type: "object",
							},
						},
					},
				},
			},
			summary: "/autocomplete/funders",

			tags: ["funders"],
		},
	},
} satisfies PathsObject;
