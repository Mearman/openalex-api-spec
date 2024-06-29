import { refSchema } from "~/spec/components";
import { conceptsResponseSchema } from "~/spec/components/schemas/concepts/conceptsResponseSchema";

export const conceptsGet200Response: ResponseObject = {
	content: {
		"application/json": {
			schema: refSchema({ concepts: conceptsResponseSchema }),
		},
	},
	description: "Concepts List",
};
