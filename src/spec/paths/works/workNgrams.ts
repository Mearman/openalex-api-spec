import { refResponse } from "~/spec/components";
import { workNgramsGet200Response } from "~/spec/components/responses/workNgramsGet200Response";

import { tags } from "~/spec/paths/works/tags";

export const example: {
	meta: {
		count: number;
		openalex_id: string;
		doi: string;
	};
	ngrams: {
		ngram_count: number;
		ngram_tokens: number;
		term_frequency: number;
		ngram: string;
	}[];
} = {
	meta: {
		count: 3475,
		doi: "https://doi.org/10.1093/comjnl/40.2_and_3.67",
		openalex_id: "https://openalex.org/W2089319476",
	},
	ngrams: [
		{
			ngram: "unbounded Length Contexts for PPM",
			ngram_count: 1,
			ngram_tokens: 5,
			term_frequency: 0.00017274140611504577,
		},
	],
};
export const ngramMeta = {
	properties: {
		count: {
			type: "integer",
		},
		doi: {
			type: "string",
		},
		openalex_id: {
			type: "string",
		},
	},
	required: ["count", "openalex_id"],
	type: "object",
} satisfies SchemaObject;

export const ngram = {
	items: {
		properties: {
			ngram: {
				type: "string",
			},
			ngram_count: {
				type: "integer",
			},
			ngram_tokens: {
				type: "integer",
			},
			term_frequency: {
				type: "number",
			},
		},
		required: ["ngram", "ngram_count", "ngram_tokens", "term_frequency"],
		type: "object",
	},
	type: "array",
} satisfies SchemaObject;
export const workNgrams: PathItemObject = {
	get: {
		description: "",
		externalDocs: {
			url: "https://docs.openalex.org/api-entities/works/get-n-grams",
		},
		operationId: "getWorkNgrams",
		parameters: [
			{
				in: "path",
				name: "id",
				required: true,
				schema: {
					type: "string",
				},
			},
		],
		responses: {
			"200": refResponse({ workNgramsGet200Response }),
		},
		summary: "/works/{id}/ngrams",
		tags: tags.concat(["ngrams", "single"]),
	},
};

export default {
	"/works/{id}/ngrams": workNgrams,
};
