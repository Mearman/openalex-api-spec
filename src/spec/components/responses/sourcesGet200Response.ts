import { refSchema } from "~/spec/components";
import { sourcesArray } from "~/spec/components/schemas/sources/sourcesArray";

export const sourcesGet200Response: ResponseObject = {
	content: {
		"application/json": {
			schema: refSchema({ sourcesArray })
		}
	},
	description: ""
};
