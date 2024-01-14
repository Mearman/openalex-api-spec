import { refResponse } from "~/spec/components";
import { sourcesGet200Response } from "~/spec/components/responses/sourcesGet200Response";

export const sources = {
	"/sources": {
		get: {
			description: "",
			operationId: "getSources",
			parameters: [
				{
					in: "query",
					name: "group_by",
					required: false,
					schema: {
						type: "string",
					},
				},
			],
			responses: {
				"200": refResponse({ sourcesGet200Response }),
			},
			summary: "/sources",
		},
	},
} satisfies PathsObject;
