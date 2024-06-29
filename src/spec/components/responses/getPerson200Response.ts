import { refSchema } from "~/spec/components";
import { personResponseSchema } from "~/spec/components/schemas/authors/personResponseSchema";

export const getPerson200Response: ResponseObject = {
	content: {
		"application/json": {
			schema: refSchema({ person: personResponseSchema }),
		},
	},
	description: "",
};
