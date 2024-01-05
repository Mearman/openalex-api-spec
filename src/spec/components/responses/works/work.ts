import { refSchema } from "~/spec/components";
import { workSchema } from "~/spec/components/schemas/work";

export const works = {
	content: {
		"application/json": {
			schema: refSchema({ workSchema }),
		},
	},
	description: "",
} satisfies ResponseObject;
