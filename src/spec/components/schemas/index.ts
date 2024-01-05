import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;

export const group_by = {
	items: {
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
		type: "object",
	},
	type: "array",
} satisfies SchemaObject;

export let schemas = {
	// group_by
} satisfies Record<string, SchemaObject>;
