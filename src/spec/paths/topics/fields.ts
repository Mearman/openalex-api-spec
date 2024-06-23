import { refExample, refParameter, refSchema } from "~/spec/components";
import { medicineFieldExample } from "~/spec/components/examples/topics";
import { per_page } from "~/spec/components/parameters/per_page";
import { ids } from "~/spec/components/schemas/ids";
import { topicLevelArraySchema } from "~/spec/components/schemas/topicLevelArraySchema";
import { topicLevelSchema } from "~/spec/components/schemas/topicLevelSchema";
import { addTagsOperation, modifyOperationsInPaths } from "~/spec/paths";
import { responseHeaders } from "../../components/headers/headers";
import { idParam } from "../../components/parameters/idParam";

export const getFieldById = modifyOperationsInPaths(
	{
		"/field/{id}": {
			get: {
				description: "",
				operationId: "getFieldById",
				parameters: [
					refParameter({ per_page }),
					refParameter({
						idParam,
					}),
				],
				responses: {
					"200": {
						content: {
							"application/json": {
								// examples: {
								// 	Medicine: refExample({ medicineFieldExample }),
								// },
								schema: {
									properties: {
										cited_by_count: {
											type: "integer",
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
										display_name_alternatives: {
											items: {
												type: "string",
											},
											type: "array",
										},
										domain: refSchema({ topicLevelSchema }),
										id: {
											type: "string",
										},
										ids: refSchema({ ids }),
										siblings: refSchema({ topicLevelArraySchema }),
										subfields: refSchema({ topicLevelArraySchema }),
										updated_date: {
											type: "string",
										},
										works_api_url: {
											type: "string",
										},
										works_count: {
											type: "integer",
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
									type: "object",
								},
							},
						},
						description: "",
						headers: responseHeaders,
					},
				},
				security: [],
				summary: "/fields/{id}",
			},
		},
	},
	addTagsOperation(["topics", "multiple"])
);
