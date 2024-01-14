import { refSchema } from "~/spec/components";

import { resp4xxResponseSchema } from "~/spec/components/schemas/core/resp4xxResponseSchema";

export const resp4xx: ResponseObject = {
	content: {
		"application/json": {
			schema: refSchema({ resp4xxResponseSchema }),
		},
	},
	description: "",
};
