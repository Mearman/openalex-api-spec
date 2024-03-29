import { refSchema } from "~/spec/components";
import { meta } from "~/spec/components/schemas/system/meta";

export const autoCompleteResultItem = {
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
} satisfies SchemaObject;
let autoCompleteResultSchema: SchemaObject = {
	properties: {
		meta: refSchema({ meta }),
		results: {
			items: refSchema({ autoCompleteResultItem }),
			type: "array",
		},
	},
	required: ["meta", "results"],
	type: "object",
};
export const autocompleteGet200Response = {
	content: {
		"application/json": {
			schema: refSchema({ autoCompleteResultSchema }),
		},
	},
	description: "Successful response",
} satisfies ResponseObject;
