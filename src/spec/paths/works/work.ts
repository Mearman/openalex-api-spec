import { refParameter, refResponse, refSchema } from "~/spec/components";
import { works } from "~/spec/components/responses/works/work";

import { tags } from "~/spec/paths/works/tags";

const baseSelectionAttributes = {
	type: "string",
	enum: ["id", "display_name"],
} satisfies SchemaObject;

const authorSelectionAttributes = {
	type: "string",
	enum: [
		// ...baseSelectionAttributesEnum,
		"abstract_inverted_index",
		"apc_list",
		"apc_paid",
		"authorships",
		"best_oa_location",
		"biblio",
		"cited_by_api_url",
		"cited_by_count",
		"cited_by_percentile_year",
		"concepts",
		"corresponding_author_ids",
		"corresponding_institution_ids",
		"countries_distinct_count",
		"counts_by_year",
		"created_date",
		"doi",
		"fulltext_origin",
		"grants",
		"has_fulltext",
		"ids",
		"institutions_distinct_count",
		"is_authors_truncated",
		"is_paratext",
		"is_retracted",
		"keywords",
		"language",
		"locations_count",
		"locations",
		"mesh",
		"ngrams_url",
		"open_access",
		"primary_location",
		"publication_date",
		"publication_year",
		"referenced_works_count",
		"referenced_works",
		"related_works",
		"relevance_score",
		"sustainable_development_goals",
		"title",
		"type_crossref",
		"type",
		"updated_date",
	],
} satisfies SchemaObject;

let combinedAuthorSelectionAttributes = {
	allOf: [
		refSchema({ authorSelectionAttributes }),
		refSchema({ baseSelectionAttributes }),
	],
	type: "string",
} satisfies SchemaObject;

const authorAttributeSelectionParameter: ParameterObject = {
	in: "query",
	name: "select",
	required: false,
	style: "form",
	explode: false,
	schema: {
		type: "array",
		items: refSchema({ combinedAuthorSelectionAttributes }),
	},
};

const openAlexIdPattern = "W[0-9]+";
// https://openalex.org/W3033546757
const openAlexApiUrlPattern = "https://openalex.org/W[0-9]+";
const doiPattern = "https://doi.org/10.\\d{4,9}/[-._;()/:A-Z0-9]+";
const microsoftAcademicGraphIdPattern = "mag:\\d+";
const pubMedIdPattern = "pmid:\\d+";
const pubMedCentralIdPattern = "pmcid:(PMC)?\\d+";

const combinedRegexPattern = new RegExp(
	`^(${[
		openAlexIdPattern,
		openAlexApiUrlPattern,
		microsoftAcademicGraphIdPattern,
		doiPattern,
		pubMedIdPattern,
		pubMedCentralIdPattern,
	].join("|")})$`
)
	.toString()
	.slice(1, -1)
	.replace(/\\\//g, "/");

export default {
	"/works/{id}": {
		get: {
			description: "Get a single work by its id",
			externalDocs: {
				url: "https://docs.openalex.org/api-entities/works/get-a-single-work",
			},
			operationId: "getWork",
			parameters: [
				{
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
					schema: {
						type: "string",
						pattern: combinedRegexPattern,
					},
				},
				refParameter({ authorAttributeSelectionParameter }),
			],
			responses: {
				"200": refResponse({ workResp: works }),
			},
			summary: "/works/{id}",
			tags: tags.concat(["single"]),
		},
	},
} satisfies PathsObject;
