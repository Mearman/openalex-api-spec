import { refExample, refSchema } from "~/spec/components";
import { workNgramsGet200ResponseExample } from "~/spec/components/examples/workNgramsGet200ResponseExample";
import { workNgramsSchema } from "~/spec/components/schemas/works/workNgramsSchema";

export const workNgramsGet200Response: ResponseObject = {
	content: {
		"application/json": {
			examples: {
				ngram: refExample({ workNgramsGet200ResponseExample }),
			},
			schema: refSchema({ workNgramsSchema }),
		},
	},
	description: "",
};
