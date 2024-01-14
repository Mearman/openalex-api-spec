import { refSchema } from "~/spec/components";
import { fundersArray } from "~/spec/components/schemas/funders/fundersArray";

export const fundersGet200Response: ResponseObject = {
	content: {
		"application/json": {
			schema: refSchema({ fundersArray }),
		},
	},
	description: "",

};
