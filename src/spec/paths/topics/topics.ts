import { refParameter, refResponse, refSchema } from "~/spec/components";

import { per_page } from "~/spec/components/parameters/per_page";
import { ids } from "~/spec/components/schemas/ids";
import { topicLevelArraySchema } from "~/spec/components/schemas/topicLevelArraySchema";
import { topicLevelSchema } from "~/spec/components/schemas/topicLevelSchema";
import { responseHeaders } from "../../components/headers/headers";

const topics = {
	properties: {
		group_by: {
			type: "array",
			items: {
				type: "object",
				properties: {
					count: {
						type: "integer",
					},
					key: {
						type: "string",
					},
					key_display_name: {
						type: "string",
					},
				},
				required: ["key", "key_display_name", "count"],
			},
		},
		meta: {
			properties: {
				count: {
					type: "integer",
				},
				db_response_time_ms: {
					type: "integer",
				},
				groups_count: {
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
				"groups_count",
			],
			type: "object",
		},
		results: {
			items: {
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
					domain: refSchema({ topicLevelSchema }),
					field: refSchema({ topicLevelSchema }),
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
					relevance_score: {
						type: "number",
					},
					siblings: refSchema({ topicLevelArraySchema }),
					subfield: refSchema({ topicLevelSchema }),
					updated_date: {
						type: "string",
					},
					works_count: {
						type: "integer",
					},
				},
				required: ["id", "display_name", "description"],
				type: "object",
			},
			type: "array",
		},
	},
	required: ["meta", "group_by"],
	type: "object",
} satisfies SchemaObject;

const topicsRespone = {
	content: {
		"application/json": {
			// examples: {
			// 	"search=Artificial Intelligence in Medicine": refExample({
			// 		topicSearchResultExample,
			// 	}),
			// 	"/topics": refExample({ topicsExample }),
			// },
			schema: refSchema({ topics }),
		},
	},
	description: "",
	headers: responseHeaders,
} satisfies ResponseObject;

export const getTopics: PathsObject = {
	"/topics": {
		get: {
			operationId: "getTopics",
			summary: "/topics",
			description: "",
			responses: {
				"200": refResponse({ topics: topicsRespone }),
			},
			security: [],
			parameters: [
				{
					name: "sort",
					in: "query",
					required: false,
					schema: {
						type: "string",
					},
				},
				refParameter({ per_page }),
				{
					name: "page",
					in: "query",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					name: "sample",
					in: "query",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					name: "select",
					in: "query",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					name: "filter",
					in: "query",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					name: "search",
					in: "query",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					name: "group_by",
					in: "query",
					required: false,
					schema: {
						type: "string",
					},
				},
			],
		},
	},
};
