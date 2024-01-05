import { refSchema } from "~/spec/components";
import { meta } from "~/spec/components/schemas/meta";

export default {
	"/autocomplete/institutions": {
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
											required: [
												"id",
												"display_name",
												"hint",
												"cited_by_count",
												"works_count",
												"entity_type",
												"external_id",
												"filter_key",
											],
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
			summary: "/autocomplete/institutions",

			tags: ["institutions"],
		},
	},
} satisfies PathsObject;
