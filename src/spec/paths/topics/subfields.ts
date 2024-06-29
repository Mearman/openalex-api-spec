import { refParameter, refResponse, refSchema } from "~/spec/components";

import { per_page } from "~/spec/components/parameters/per_page";
import { ids } from "~/spec/components/schemas/ids";
import { topicLevelArraySchema } from "~/spec/components/schemas/topicLevelArraySchema";
import { topicLevelSchema } from "~/spec/components/schemas/topicLevelSchema";
import { addTagsOperation, modifyOperationsInPaths } from "..";
import { responseHeaders } from "../../components/headers/headers";
import { idParam } from "../../components/parameters/idParam";

const subfieldSchema = {
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
			type: "array",
			items: {
				type: "string",
			},
		},
		domain: refSchema({ topicLevelSchema }),
		field: refSchema({ topicLevelSchema }),
		id: {
			type: "string",
		},
		ids: refSchema({ ids }),
		siblings: refSchema({ topicLevelArraySchema }),
		topics: {
			items: {
				properties: {
					display_name: {
						type: "string",
					},
					id: {
						type: "string",
					},
				},
				required: ["display_name", "id"],
				type: "object",
			},
			type: "array",
		},
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
	type: "object",
} satisfies SchemaObject;

const subfieldResponse = {
	content: {
		"application/json": {
			// examples: {
			// 	"Health Informatics": refExample({
			// 		healthInformaticsSubfieldExample,
			// 	}),
			// },
			schema: refSchema({ subfield: subfieldSchema }),
		},
	},
	description: "",
	headers: responseHeaders,
};
export const getSubfieldById = modifyOperationsInPaths(
	{
		"/subfields/{id}": {
			get: {
				description: "",
				operationId: "getSubfieldById",
				parameters: [refParameter({ per_page }), refParameter({ idParam })],
				responses: {
					"200": refResponse({ subfield: subfieldResponse }),
				},
				security: [],
				summary: "/subfields/{id}",
			},
		},
	},
	addTagsOperation(["topics", "multiple"])
);
