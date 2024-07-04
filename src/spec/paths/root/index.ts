import { refResponse, refSchema } from "~/spec/components";

const rootResponseSchema: SchemaObject = {
	properties: {
		documentation_url: {
			type: "string"
		},
		msg: {
			type: "string"
		},
		version: {
			type: "string"
		}
	},
	required: [
		"msg",
		"documentation_url",
		"version"
	],
	type: "object"
};
const root200GetResponses: ResponseObject = {
	content: {
		"application/json": {
			examples: {
				"application/json": {
					value: {
						documentation_url: "https://openalex.org/rest-api",
						msg: "Don't panic",
						version: "0.0.1"
					}
				},
			},
			schema: refSchema({ rootResponseSchema })
		},
	},
	description: "",
};

export const root: PathsObject = {
	"/": {
		get: {
			description: "Root endpoint",
			externalDocs: {
				description: "OpenAlex documentation",
				url: "https://openalex.org/rest-api",
			},
			operationId: "getRoot",
			responses: {
				"200": refResponse({ root200GetResponses }),
			},
			summary: "Root",

		}
	},
} satisfies PathsObject;
