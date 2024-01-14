import { refSchema } from "~/spec/components";
import { conceptSchema } from "~/spec/components/schemas/concepts/concept";

export const conceptGet200Response = {
	content: {
		"application/json": {
			schema: refSchema({ concept: conceptSchema }),
		},
	},
	description: "",
} satisfies ResponseObject;
