import { refSchema } from "~/spec/components";
import { institutionSchema } from "~/spec/components/schemas/institutions/institutionSchema";

export const institutionGet200Response: ResponseObject = {
	content: {
		"application/json": {
			schema: refSchema({ institutionSchema })
		},
	},
	description: "",
};
