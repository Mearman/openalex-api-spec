import { refParameter, refResponse, refSchema } from "~/spec/components";
import { per_page } from "~/spec/components/parameters/per_page";
import { ids } from "~/spec/components/schemas/ids";
import { topicLevelArraySchema } from "~/spec/components/schemas/topicLevelArraySchema";
import { responseHeaders } from "../../components/headers/headers";
import { idParam } from "../../components/parameters/idParam";

const domainSchema = {
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
		fields: refSchema({ topicLevelArraySchema }),
		id: {
			type: "string",
		},
		ids: refSchema({ ids }),
		siblings: refSchema({ topicLevelArraySchema }),
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
		"fields",
		"siblings",
		"works_count",
		"cited_by_count",
		"works_api_url",
		"updated_date",
		"created_date",
	],
	type: "object",
} satisfies SchemaObject;

const domainResponse: ResponseObject = {
	content: {
		"application/json": {
			// examples: {
			// 	"Health Sciences": refExample({
			// 		healthSciencesDomainExample,
			// 	}),
			// },
			schema: refSchema({ domain: domainSchema }),
		},
	},
	description: "",
	headers: responseHeaders,
};

export const getDomainById: PathsObject = {
	"/domains/{id}": {
		get: {
			description: "",
			externalDocs: {
				description: ["https://help.openalex.org/how-it-works/topics"].join(
					"\n\n"
				),
				url: "https://docs.openalex.org/api-entities/topics",
			},
			operationId: "getDomainById",
			parameters: [refParameter({ per_page }), refParameter({ idParam })],
			responses: {
				"200": refResponse({
					domain: domainResponse,
				}),
			} satisfies ResponsesObject,
			security: [],
			summary: "/domains/{id}",
		},
	},
};
