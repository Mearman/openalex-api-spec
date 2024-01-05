import { OpenAPIV3_1 } from "openapi-types";
import { refSchema } from "~/spec/components";
import { errorMessage } from "~/spec/components/schemas/errorMessage";
import ResponseObject = OpenAPIV3_1.ResponseObject;

export const resp4xx = {
	content: {
		"application/json": {
			schema: {
				...refSchema({errorMessage})
			},
		},
	},
	description: "",
} satisfies ResponseObject
