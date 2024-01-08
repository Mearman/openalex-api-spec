import { refParameter, refSchema } from "~/spec/components";
import { autocompleteQuery } from "~/spec/components/parameters/autocompleteQuery";
import { meta } from "~/spec/components/schemas/meta";

export default {
	"/autocomplete/publishers": {
		get: {
			description: "",
			parameters: [
				refParameter({autocompleteQuery}),

			],
			responses: {
				"200": {
					content: {
						"application/json": {
							schema: {
								properties: {
									meta: refSchema({meta}),
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

			tags: ["publishers"],
		},
	}
	,
} satisfies PathsObject;
