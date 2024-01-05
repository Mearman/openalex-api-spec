import { refSchema } from "~/spec/components";
import { errorMessage } from "~/spec/components/schemas/errorMessage";

export const resp4xx = {
	content: {
		"application/json": {
			schema: {
				...refSchema({ errorMessage }),
			},
		},
	},
	description: "",
} satisfies ResponseObject;
