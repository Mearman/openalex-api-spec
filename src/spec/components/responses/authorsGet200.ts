import { refSchema } from "~/spec/components";
import { authorsResponseSchema } from "~/spec/components/schemas/authors/authorsResponseSchema";

export const authorsGet200: ResponseObject = {
	content: {
		"application/json": {
			schema: refSchema({ authorsResponseSchema }),
		},
	},
	description: "Authors List Response",
};
