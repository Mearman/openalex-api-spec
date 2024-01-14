import { refExample, refSchema } from "~/spec/components";
import { workNgramsGet200ResponseExample } from "~/spec/components/examples/workNgramsGet200ResponseExample";
import { ngram } from "~/spec/components/schemas/ngram";
import { ngramMeta } from "~/spec/components/schemas/ngramMeta";

export const workNgramsGet200Response: ResponseObject = {
	content: {
		"application/json": {
			examples: {
				"ngram": refExample({ example: workNgramsGet200ResponseExample }),
			},
			schema: {
				properties: {
					meta: refSchema({ ngramMeta }),
					ngrams: refSchema({ ngram }),
				},
			},
		},
	},
	description: "",
};
