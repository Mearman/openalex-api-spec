import { refSchema } from "~/spec/components";
import { worksResponseSchema } from "../../schemas/works/worksResponseSchema";


export const works = {
	content: {
		"application/json": {
			schema: refSchema({ worksResponse: worksResponseSchema })
		},
	},
	description: "",
} satisfies ResponseObject;
