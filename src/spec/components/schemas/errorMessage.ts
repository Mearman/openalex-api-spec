import { OpenAPIV3_1 } from "openapi-types";
import SchemaObject = OpenAPIV3_1.SchemaObject;

export const errorMessage = {
	properties: {
		error: {
			type: "string",
		},
		message: {
			type: "string",
		},
	},
	required: ["error", "message"],
	type: "object",
} satisfies SchemaObject
