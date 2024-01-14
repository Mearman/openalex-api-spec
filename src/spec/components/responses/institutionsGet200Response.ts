import { refSchema } from "~/spec/components";
import { institutionsResponseSchema } from "~/spec/components/schemas/institutions/institutionsResponseSchema";

export const institutionsGet200Response: ResponseObject = {
	content: {
		"application/json": {
			schema: refSchema({ institutionsResponseSchema }),
		},
	},
	description: "",
};
