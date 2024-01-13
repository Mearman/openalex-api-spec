import { refSchema } from "~/spec/components";
import { author } from "~/spec/components/schemas/author";

export let authorGet200 = {
	content: {
		"application/json": {
			schema: refSchema({ author }),
		},
	},
	description: "",
} satisfies ResponseObject;
