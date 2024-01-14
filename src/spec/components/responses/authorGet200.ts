import { refSchema } from "~/spec/components";
import { author } from "~/spec/components/schemas/authors/author";

export const authorGet200: ResponseObject = {
	content: {
		"application/json": {
			schema: refSchema({ author }),
		},
	},
	description: "Single Author Response",
};
