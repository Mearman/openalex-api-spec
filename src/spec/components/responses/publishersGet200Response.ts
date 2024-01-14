import { refSchema } from "~/spec/components";
import { publishersResponseSchema } from "~/spec/components/schemas/publishers/publishersResponseSchema";

export const publishersGet200Response: ResponseObject = {
	content: {
		"application/json": {
			schema: refSchema({ publishersResponseSchema }),
		},
	},
	description: "",
};
