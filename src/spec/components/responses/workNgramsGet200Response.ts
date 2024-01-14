import { refSchema } from "~/spec/components";
import { example, ngram, ngramMeta } from "~/spec/paths/works/workNgrams";

export const workNgramsGet200Response: ResponseObject = {
	content: {
		"application/json": {
			example,
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
