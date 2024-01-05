import { OpenAPIV3_1 } from "openapi-types";

import { tags } from "~/spec/paths/works/tags";
import ParameterObject = OpenAPIV3_1.ParameterObject;
import PathItemObject = OpenAPIV3_1.PathItemObject;
import PathsObject = OpenAPIV3_1.PathsObject;
import SchemaObject = OpenAPIV3_1.SchemaObject;

const baseSelectionAttributesEnum = ["id", "display_name"];

const authorSelectionAttributes = {
	type: "string",
	enum: [
		...baseSelectionAttributesEnum,
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

const authorAttributeSelectionParameter: ParameterObject = {
	in: "query",
	name: "select",
	required: false,
	style: "form",
	example: ["id", "display_name"],
	explode: false,
	schema: {
		type: "array",
		items: authorSelectionAttributes,
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

export const work: PathItemObject = {
	get: {
		tags: tags.concat([
			"single"
		]),
		externalDocs: {
			url: "https://docs.openalex.org/api-entities/works/get-a-single-work",
		},
		description: "Get a single work by its id",
		parameters: [
			{
				in: "path",
				name: "id",
				required: true,
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
				schema: {
					type: "string",
					pattern: combinedRegexPattern,
				},
			},
			authorAttributeSelectionParameter,
		],
		responses: {
			"200": {
				content: {
					"application/json": {
						schema: {
							additionalProperties: true,
							properties: {
								abstract_inverted_index: {
									type: "object",
									additionalProperties: true
								},
								apc_list: {
									type: "object",
									properties: {
										value: {
											type: "integer",
										},
										currency: {
											type: "string",
										},
										value_usd: {
											type: "integer",
										},
										provenance: {
											type: "string",
										},
									},
									required: ["value", "currency", "value_usd", "provenance"],
								},
								apc_paid: {
									type: "object",
									properties: {
										value: {
											type: "integer",
										},
										currency: {
											type: "string",
										},
										value_usd: {
											type: "integer",
										},
										provenance: {
											type: "string",
										},
									},
									required: ["value", "currency", "value_usd", "provenance"],
								},
								authorships: {
									type: "array",
									items: {
										type: "object",
										properties: {
											author_position: {
												type: "string",
											},
											author: {
												type: "object",
												properties: {
													id: {
														type: "string",
													},
													display_name: {
														type: "string",
													},
													orcid: {
														type: "string",
													},
												},
												required: ["id", "display_name", "orcid"],
											},
											institutions: {
												type: "array",
												items: {
													type: "object",
													properties: {
														id: {
															type: "string",
														},
														display_name: {
															type: "string",
														},
														ror: {
															type: "string",
														},
														country_code: {
															type: "string",
														},
														type: {
															type: "string",
														},
														lineage: {
															type: "array",
															items: {
																type: "string",
															},
														},
													},
													required: [
														"id",
														"display_name",
														"ror",
														"country_code",
														"type",
														"lineage",
													],
												},
											},
											countries: {
												type: "array",
												items: {
													type: "string",
												},
											},
											is_corresponding: {
												type: "boolean",
											},
											raw_author_name: {
												type: "string",
											},
											raw_affiliation_string: {
												type: "string",
											},
											raw_affiliation_strings: {
												type: "array",
												items: {
													type: "string",
												},
											},
										},
										required: [
											"author_position",
											"author",
											"institutions",
											"countries",
											"is_corresponding",
											"raw_author_name",
											"raw_affiliation_string",
											"raw_affiliation_strings",
										],
									},
								},
								best_oa_location: {
									type: "object",
									properties: {
										is_oa: {
											type: "boolean",
										},
										landing_page_url: {
											type: "string",
										},
										pdf_url: {
											type: "string",
										},
										source: {
											type: "object",
											properties: {
												id: {
													type: "string",
												},
												display_name: {
													type: "string",
												},
												issn_l: {
													type: "string",
												},
												issn: {
													type: "array",
													items: {
														type: "string",
													},
												},
												is_oa: {
													type: "boolean",
												},
												is_in_doaj: {
													type: "boolean",
												},
												host_organization: {
													type: "string",
												},
												host_organization_name: {
													type: "string",
												},
												host_organization_lineage: {
													type: "array",
													items: {
														type: "string",
													},
												},
												host_organization_lineage_names: {
													type: "array",
													items: {
														type: "string",
													},
												},
												type: {
													type: "string",
												},
											},
											required: [
												"id",
												"display_name",
												"issn_l",
												"issn",
												"is_oa",
												"is_in_doaj",
												"host_organization",
												"host_organization_name",
												"host_organization_lineage",
												"host_organization_lineage_names",
												"type",
											],
										},
										license: {
											type: "string",
										},
										version: {
											type: "string",
										},
										is_accepted: {
											type: "boolean",
										},
										is_published: {
											type: "boolean",
										},
									},
									required: [
										"is_oa",
										"landing_page_url",
										"pdf_url",
										"source",
										"license",
										"version",
										"is_accepted",
										"is_published",
									],
								},
								biblio: {
									type: "object",
									properties: {
										volume: {
											type: "string",
										},
										issue: {
											type: "string",
										},
										first_page: {
											type: "string",
										},
										last_page: {
											type: "string",
										},
									},
									required: ["volume", "issue", "first_page", "last_page"],
								},
								cited_by_api_url: {
									type: "string",
								},
								cited_by_count: {
									type: "integer",
								},
								cited_by_percentile_year: {
									type: "object",
									properties: {
										min: {
											type: "integer",
										},
										max: {
											type: "integer",
										},
									},
									required: ["min", "max"],
								},
								concepts: {
									type: "array",
									items: {
										type: "object",
										properties: {
											id: {
												type: "string",
											},
											wikidata: {
												type: "string",
											},
											display_name: {
												type: "string",
											},
											level: {
												type: "integer",
											},
											score: {
												type: "number",
											},
										},
										required: [
											"id",
											"wikidata",
											"display_name",
											"level",
											"score",
										],
									},
								},
								corresponding_author_ids: {
									type: "array",
									items: {
										type: "string",
									},
								},
								corresponding_institution_ids: {
									type: "array",
									items: {
										type: "string",
									},
								},
								countries_distinct_count: {
									type: "integer",
								},
								counts_by_year: {
									type: "array",
									items: {
										type: "string",
									},
								},
								created_date: {
									type: "string",
								},
								display_name: {
									type: "string",
								},
								doi: {
									type: "string",
								},
								grants: {
									type: "array",
									items: {
										type: "object",
										properties: {
											funder: {
												type: "string",
											},
											funder_display_name: {
												type: "string",
											},
											award_id: {
												type: "string",
											},
										},
										required: ["funder", "funder_display_name", "award_id"],
									},
								},
								has_fulltext: {
									type: "boolean",
								},
								id: {
									type: "string",
								},
								ids: {
									type: "object",
									properties: {
										openalex: {
											type: "string",
										},
										doi: {
											type: "string",
										},
										mag: {
											type: "string",
										},
									},
									required: ["openalex", "doi", "mag"],
								},
								institutions_distinct_count: {
									type: "integer",
								},
								is_paratext: {
									type: "boolean",
								},
								is_retracted: {
									type: "boolean",
								},
								keywords: {
									type: "array",
									items: {
										type: "object",
										properties: {
											keyword: {
												type: "string",
											},
											score: {
												type: "number",
											},
										},
										required: ["keyword", "score"],
									},
								},
								language: {
									type: "string",
								},
								locations: {
									type: "array",
									items: {
										type: "object",
										properties: {
											is_oa: {
												type: "boolean",
											},
											landing_page_url: {
												type: "string",
											},
											pdf_url: {
												type: "string",
											},
											source: {
												type: "object",
												properties: {
													id: {
														type: "string",
													},
													display_name: {
														type: "string",
													},
													issn_l: {
														type: "string",
													},
													issn: {
														type: "array",
														items: {
															type: "string",
														},
													},
													is_oa: {
														type: "boolean",
													},
													is_in_doaj: {
														type: "boolean",
													},
													host_organization: {
														type: "string",
													},
													host_organization_name: {
														type: "string",
													},
													host_organization_lineage: {
														type: "array",
														items: {
															type: "string",
														},
													},
													host_organization_lineage_names: {
														type: "array",
														items: {
															type: "string",
														},
													},
													type: {
														type: "string",
													},
												},
												required: [
													"id",
													"display_name",
													"issn_l",
													"issn",
													"is_oa",
													"is_in_doaj",
													"host_organization",
													"host_organization_name",
													"host_organization_lineage",
													"host_organization_lineage_names",
													"type",
												],
											},
											license: {
												type: "string",
											},
											version: {
												type: "string",
											},
											is_accepted: {
												type: "boolean",
											},
											is_published: {
												type: "boolean",
											},
										},
										required: [
											"is_oa",
											"landing_page_url",
											"pdf_url",
											"source",
											"license",
											"version",
											"is_accepted",
											"is_published",
										],
									},
								},
								locations_count: {
									type: "integer",
								},
								mesh: {
									type: "array",
									items: {
										type: "object",
										properties: {
											descriptor_ui: {
												type: "string",
											},
											descriptor_name: {
												type: "string",
											},
											qualifier_ui: {
												type: "string",
											},
											qualifier_name: {
												type: "string",
											},
											is_major_topic: {
												type: "boolean",
											},
										},
										required: [
											"descriptor_ui",
											"descriptor_name",
											"qualifier_ui",
											"qualifier_name",
											"is_major_topic",
										],
									},
								},
								ngrams_url: {
									type: "string",
								},
								open_access: {
									type: "object",
									properties: {
										is_oa: {
											type: "boolean",
										},
										oa_status: {
											type: "string",
										},
										oa_url: {
											type: "string",
										},
										any_repository_has_fulltext: {
											type: "boolean",
										},
									},
									required: [
										"is_oa",
										"oa_status",
										"oa_url",
										"any_repository_has_fulltext",
									],
								},
								primary_location: {
									type: "object",
									properties: {
										is_oa: {
											type: "boolean",
										},
										landing_page_url: {
											type: "string",
										},
										pdf_url: {
											type: "string",
										},
										source: {
											type: "object",
											properties: {
												id: {
													type: "string",
												},
												display_name: {
													type: "string",
												},
												issn_l: {
													type: "string",
												},
												issn: {
													type: "array",
													items: {
														type: "string",
													},
												},
												is_oa: {
													type: "boolean",
												},
												is_in_doaj: {
													type: "boolean",
												},
												host_organization: {
													type: "string",
												},
												host_organization_name: {
													type: "string",
												},
												host_organization_lineage: {
													type: "array",
													items: {
														type: "string",
													},
												},
												host_organization_lineage_names: {
													type: "array",
													items: {
														type: "string",
													},
												},
												type: {
													type: "string",
												},
											},
											required: [
												"id",
												"display_name",
												"issn_l",
												"issn",
												"is_oa",
												"is_in_doaj",
												"host_organization",
												"host_organization_name",
												"host_organization_lineage",
												"host_organization_lineage_names",
												"type",
											],
										},
										license: {
											type: "string",
										},
										version: {
											type: "string",
										},
										is_accepted: {
											type: "boolean",
										},
										is_published: {
											type: "boolean",
										},
									},
									required: [
										"is_oa",
										"landing_page_url",
										"pdf_url",
										"source",
										"license",
										"version",
										"is_accepted",
										"is_published",
									],
								},
								publication_date: {
									type: "string",
								},
								publication_year: {
									type: "integer",
								},
								referenced_works: {
									type: "array",
									items: {
										type: "string",
									},
								},
								referenced_works_count: {
									type: "integer",
								},
								related_works: {
									type: "array",
									items: {
										type: "string",
									},
								},
								sustainable_development_goals: {
									type: "array",
									items: {
										type: "object",
										properties: {
											id: {
												type: "string",
											},
											display_name: {
												type: "string",
											},
											score: {
												type: "number",
											},
										},
										required: ["id", "display_name", "score"],
									},
								},
								title: {
									type: "string",
								},
								type: {
									type: "string",
								},
								type_crossref: {
									type: "string",
								},
								updated_date: {
									type: "string",
								},
							},
							required: ["id", "display_name"],
							type: "object",
						},
					},
				},
				description: "",
			},
		},
		summary: "/works/{id}",
	},
};

export default {
	"/works/{id}": work,
} satisfies PathsObject;
