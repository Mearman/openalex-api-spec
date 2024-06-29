import { refSchema } from "~/spec/components";
import { workSchema } from "~/spec/components/schemas/works/work";

export const work = {
	content: {
		"application/json": {
			schema: refSchema({ work: workSchema }),
		},
	},
	description: "",
} satisfies ResponseObject;
