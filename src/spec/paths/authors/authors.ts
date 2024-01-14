import { refResponse } from "~/spec/components";
import { defaultListParameters } from "~/spec/components/parameters/defaultListParameters";
import { authorsGet200 } from "~/spec/components/responses/authorsGet200";

export const authors = {
	"/authors": {
		get: {
			description: "Get lists of authors",
			operationId: "getAuthors",
			parameters: defaultListParameters,
			responses: {
				"200": refResponse({ authorsGet200 }),
			},
			summary: "List Authors",
		},
	} satisfies PathItemObject,
} satisfies PathsObject;
