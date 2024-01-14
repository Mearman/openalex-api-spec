import { refSchema } from "~/spec/components";
import { author } from "~/spec/components/schemas/authors/author";

export const authorGet200 = {
	content: {
		"application/json": {
			schema: refSchema({ author }),
		},
	},
	description: "",
} satisfies ResponseObject;
