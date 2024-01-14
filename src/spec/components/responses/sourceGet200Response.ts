import { refSchema } from "~/spec/components";
import { sourceSchema } from "~/spec/components/schemas/sources/sourceSchema";

export const sourceGet200Response: ResponseObject = {
	content: {
		"application/json": {
			schema: refSchema({ sourceSchema }),
		},
	},
	description: "",
};
