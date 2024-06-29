import { refSchema } from "~/spec/components";
import { publisherSchema } from "~/spec/components/schemas/publishers/publisherSchema";

export const publisherGet200Response: ResponseObject = {
	content: {
		"application/json": {
			schema: refSchema({ publisher: publisherSchema }),
		},
	},
	description: "",
};
