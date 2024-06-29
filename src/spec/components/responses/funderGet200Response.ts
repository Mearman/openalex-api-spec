import { refSchema } from "~/spec/components";
import { funderSchema } from "~/spec/components/schemas/funders/funderSchema";

export const funderGet200Response: ResponseObject = {
	content: {
		"application/json": {
			schema: refSchema({ funder: funderSchema }),
		},
	},
	description: "",
};
