import { refParameter, refResponse, refSchema } from "~/spec/components";

import { per_page } from "~/spec/components/parameters/per_page";
import { ids } from "~/spec/components/schemas/ids";
import { topicLevelArraySchema } from "~/spec/components/schemas/topicLevelArraySchema";
import { topicLevelSchema } from "~/spec/components/schemas/topicLevelSchema";
import { addTagsOperation, modifyOperationsInPaths } from "..";
import { responseHeaders } from "../../components/headers/headers";
import { idParam } from "../../components/parameters/idParam";

const topicSchema = {
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
		domain: refSchema({ topicLevelArraySchema }),
		field: refSchema({ topicLevelArraySchema }),
		id: {
			type: "string",
		},
		ids: refSchema({ ids }),
		keywords: {
			items: {
				type: "string",
			},
			type: "array",
		},
		siblings: refSchema({
			topicLevelSchema,
		}),
		subfield: refSchema({ topicLevelArraySchema }),
		updated_date: {
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
	type: "object",
} satisfies SchemaObject;

const topicResponse = {
	content: {
		"application/json": {
			// examples: {
			// 	"Artificial Intelligence in Medicine": refExample({
			// 		aiMedicineTopic,
			// 	}),
			// },
			schema: refSchema({ topic: topicSchema }),
		},
	},
	description: "",
	headers: responseHeaders,
} satisfies ResponseObject;

export const getTopicById: PathsObject = modifyOperationsInPaths(
	{
		"/topics/{id}": {
			get: {
				description: "",
				operationId: "getTopicById",
				parameters: [refParameter({ per_page }), refParameter({ idParam })],
				responses: {
					"200": refResponse({ topic: topicResponse }),
				},
				security: [],
				summary: "/topics/{id}",
			},
		},
	},
	addTagsOperation(["topics", "single"])
) satisfies PathsObject;
