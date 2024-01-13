import { refSchema } from "~/spec/components";
import { workIdPattern } from "~/spec/components/schemas/works/workIdPattern";

export const workId = {
	description: "The id of the work to retrieve",
	examples: {
		openalex: {
			value: "W3033546757",
			summary: "OpenAlex ID",
		},
		openalex_url: {
			value: "https://openalex.org/W3033546757",
			summary: "OpenAlex URL",
		},
		doi: {
			value: "https://doi.org/10.1016/j.jinf.2020.05.071",
			summary: "DOI",
		},
		mag: {
			value: "mag:3033546757",
			summary: "Microsoft Academic Graph ID",
		},
		pmid: {
			value: "pmid:32504740",
			summary: "PubMed ID",
		},
		pmcid: {
			value: "pmcid:7270800",
			summary: "PubMed Central ID",
		},
	},
	in: "path",
	name: "id",
	required: true,
	schema: refSchema({ workIdPattern }),
} satisfies ParameterObject;
