import { refSchema } from "~/spec/components";
import { errorMessage } from "~/spec/components/schemas/errorMessage";

export const resp403: ResponseObject = {
	content: {
		"application/json": {
			schema: {
				...refSchema({ errorMessage }),
			},
		},
	},
	description: "",
} satisfies ResponseObject;

let resp4xxSchema = {
	type: "string"
} satisfies SchemaObject;

export const resp4xx: ResponseObject = {
	content: {
		"application/json": {
			schema: {
				...resp4xxSchema,
			},
		},
	},
	description: "",
} satisfies ResponseObject;
