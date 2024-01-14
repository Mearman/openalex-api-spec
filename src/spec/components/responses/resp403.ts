import { refSchema } from "~/spec/components";
import { errorMessage } from "~/spec/components/schemas/system/errorMessage";

export const resp403: ResponseObject = {
	content: {
		"application/json": {
			schema: refSchema({ errorMessage }),
		},
	},
	description: "",
}

