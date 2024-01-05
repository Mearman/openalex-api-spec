import { OpenAPIV3_1 } from "openapi-types";
import { refParameter, refResponse, refSchema } from "~/spec/components";
import { api_key, cursor, filterRegex, filterWorks, per_page } from "~/spec/components/parameters";
import { resp4xx } from "~/spec/components/responses/resp4xx";
import { group_by } from "~/spec/components/schemas";
import { location } from "~/spec/components/schemas/location";
import { tags } from "~/spec/paths/works/tags";
import PathsObject = OpenAPIV3_1.PathsObject;
import ResponseObject = OpenAPIV3_1.ResponseObject;
import SchemaObject = OpenAPIV3_1.SchemaObject;

console.log(filterRegex);
const meta = {
	type: "object",
	properties: {
		count: {
			type: "integer"
		},
		db_response_time_ms: {
			type: "integer"
		},
		page: {
			type: "integer"
		},
		per_page: {
			type: "integer"
		},
		groups_count: {
			type: "null"
		}
	},
	required: [
		"count",
		"db_response_time_ms",
		"page",
		"per_page",
		"groups_count"
	]
} satisfies SchemaObject

let listWorksItem = {
	type: "object",
	properties: {
		id: {
			type: "string"
		},
		doi: {
			type: "string"
		},
		title: {
			type: "string"
		},
		display_name: {
			type: "string"
		},
		publication_year: {
			type: "integer"
		},
		publication_date: {
			type: "string"
		},
		ids: {
			type: "object",
			properties: {
				openalex: {
					type: "string"
				},
				doi: {
					type: "string"
				},
				mag: {
					type: "string"
				},
				pmid: {
					type: "string"
				},
				pmcid: {
					type: "string"
				}
			},
			required: [
				"openalex",
				"doi",
				"mag"
			]
		},
		language: {
			type: "string"
		},
		primary_location: {
			type: "object",
			properties: {
				is_oa: {
					type: "boolean"
				},
				landing_page_url: {
					type: "string"
				},
				pdf_url: {
					type: "string"

				},
				source: {
					type: "object",
					properties: {
						id: {
							type: "string"
						},
						display_name: {
							type: "string"
						},
						issn_l: {
							type: "string"
						},
						issn: {
							type: "array",
							items: {
								type: "string"
							}
						},
						is_oa: {
							type: "boolean"
						},
						is_in_doaj: {
							type: "boolean"
						},
						host_organization: {
							type: "string"
						},
						host_organization_name: {
							type: "string"
						},
						host_organization_lineage: {
							type: "array",
							items: {
								type: "string"
							}
						},
						host_organization_lineage_names: {
							type: "array",
							items: {
								type: "string"
							}
						},
						type: {
							type: "string"
						}
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
						"type"
					]
				},
				license: {
					type: "string"
				},
				version: {
					type: "string"
				},
				is_accepted: {
					type: "boolean"
				},
				is_published: {
					type: "boolean"
				}
			},
			required: [
				"is_oa",
				"landing_page_url",
				"pdf_url",
				"source",
				"license",
				"version",
				"is_accepted",
				"is_published"
			]
		},
		type: {
			type: "string"
		},
		type_crossref: {
			type: "string"
		},
		open_access: {
			type: "object",
			properties: {
				is_oa: {
					type: "boolean"
				},
				oa_status: {
					type: "string"
				},
				oa_url: {
					type: "string"
				},
				any_repository_has_fulltext: {
					type: "boolean"
				}
			},
			required: [
				"is_oa",
				"oa_status",
				"oa_url",
				"any_repository_has_fulltext"
			]
		},
		authorships: {
			type: "array",
			items: {
				type: "object",
				properties: {
					author_position: {
						type: "string"
					},
					author: {
						type: "object",
						properties: {
							id: {
								type: "string"
							},
							display_name: {
								type: "string"
							},
							orcid: {
								type: "string"
							}
						},
						required: [
							"id",
							"display_name",
							"orcid"
						]
					},
					institutions: {
						type: "array",
						items: {
							type: "object",
							properties: {
								id: {
									type: "string"
								},
								display_name: {
									type: "string"
								},
								ror: {
									type: "string"
								},
								country_code: {
									type: "string"
								},
								type: {
									type: "string"
								},
								lineage: {
									type: "array",
									items: {
										type: "string"
									}
								}
							},
							required: [
								"id",
								"display_name",
								"ror",
								"country_code",
								"type",
								"lineage"
							]
						}
					},
					countries: {
						type: "array",
						items: {
							type: "string"
						}
					},
					is_corresponding: {
						type: "boolean"
					},
					raw_author_name: {
						type: "string"
					},
					raw_affiliation_string: {
						type: "string"
					},
					raw_affiliation_strings: {
						type: "array",
						items: {
							type: "string"
						}
					}
				},
				required: [
					"author_position",
					"author",
					"institutions",
					"countries",
					"is_corresponding",
					"raw_author_name",
					"raw_affiliation_string",
					"raw_affiliation_strings"
				]
			}
		},
		countries_distinct_count: {
			type: "integer"
		},
		institutions_distinct_count: {
			type: "integer"
		},
		corresponding_author_ids: {
			type: "array",
			items: {
				type: "string"
			}
		},
		corresponding_institution_ids: {
			type: "array",
			items: {
				type: "string"
			}
		},
		apc_list: {
			anyOf: [
				{
					type: "null"
				},
				{
					type: "object",
					properties: {
						value: {
							type: "integer"
						},
						currency: {
							type: "string"
						},
						value_usd: {
							type: "integer"
						},
						provenance: {
							type: "string"
						}
					},
					required: [
						"value",
						"currency",
						"value_usd",
						"provenance"
					]
				}
			]
		},
		apc_paid: {
			anyOf: [
				{
					type: "null"
				},
				{
					type: "object",
					properties: {
						value: {
							type: "integer"
						},
						currency: {
							type: "string"
						},
						value_usd: {
							type: "integer"
						},
						provenance: {
							type: "string"
						}
					},
					required: [
						"value",
						"currency",
						"value_usd",
						"provenance"
					]
				}
			]
		},
		has_fulltext: {
			type: "boolean"
		},
		cited_by_count: {
			type: "integer"
		},
		cited_by_percentile_year: {
			type: "object",
			properties: {
				min: {
					type: "integer"
				},
				max: {
					type: "integer"
				}
			},
			required: [
				"min",
				"max"
			]
		},
		biblio: {
			type: "object",
			properties: {
				volume: {
					type: "string"
				},
				issue: {
					type: "string"
				},
				first_page: {
					type: "string"
				},
				last_page: {
					type: "string"
				}
			},
			required: [
				"volume",
				"issue",
				"first_page",
				"last_page"
			]
		},
		is_retracted: {
			type: "boolean"
		},
		is_paratext: {
			type: "boolean"
		},
		keywords: {
			type: "array",
			items: {
				type: "object",
				properties: {
					keyword: {
						type: "string"
					},
					score: {
						type: "number"
					}
				},
				required: [
					"keyword",
					"score"
				]
			}
		},
		concepts: {
			type: "array",
			items: {
				type: "object",
				properties: {
					id: {
						type: "string"
					},
					wikidata: {
						type: "string"
					},
					display_name: {
						type: "string"
					},
					level: {
						type: "integer"
					},
					score: {
						type: "number"
					}
				},
				required: [
					"id",
					"wikidata",
					"display_name",
					"level",
					"score"
				]
			}
		},
		mesh: {
			type: "array",
			items: {
				type: "object",
				properties: {
					descriptor_ui: {
						type: "string"
					},
					descriptor_name: {
						type: "string"
					},
					qualifier_ui: {
						type: "string"
					},
					qualifier_name: {
						type: "string"
					},
					is_major_topic: {
						type: "boolean"
					}
				},
				required: [
					"descriptor_ui",
					"descriptor_name",
					"qualifier_ui",
					"qualifier_name",
					"is_major_topic"
				]
			}
		},
		locations_count: {
			type: "integer"
		},
		locations: {
			type: "array",
			items: refSchema({location})
		},
		best_oa_location: refSchema({location}),
		sustainable_development_goals: {
			type: "array",
			items: {
				type: "object",
				properties: {
					id: {
						type: "string"
					},
					display_name: {
						type: "string"
					},
					score: {
						type: "number"
					}
				},
				required: [
					"id",
					"display_name",
					"score"
				]
			}
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
		referenced_works_count: {
			type: "integer"
		},
		referenced_works: {
			type: "array",
			items: {
				type: "string"
			}
		},
		related_works: {
			type: "array",
			items: {
				type: "string"
			}
		},
		ngrams_url: {
			type: "string"
		},
		abstract_inverted_index: {
			type: "object"
		},
		cited_by_api_url: {
			type: "string"
		},
		counts_by_year: {
			type: "array",
			items: {
				type: "object",
				properties: {
					year: {
						type: "integer"
					},
					cited_by_count: {
						type: "integer"
					}
				},
				required: [
					"year",
					"cited_by_count"
				]
			}
		},
		updated_date: {
			type: "string"
		},
		created_date: {
			type: "string"
		},
		fulltext_origin: {
			type: "string"
		}
	},
	required: [
		"id",
		"doi",
		"title",
		"display_name",
		"publication_year",
		"publication_date",
		"ids",
		"language",
		"primary_location",
		"type",
		"type_crossref",
		"open_access",
		"authorships",
		"countries_distinct_count",
		"institutions_distinct_count",
		"corresponding_author_ids",
		"corresponding_institution_ids",
		"apc_list",
		"apc_paid",
		"has_fulltext",
		"cited_by_count",
		"cited_by_percentile_year",
		"biblio",
		"is_retracted",
		"is_paratext",
		"keywords",
		"concepts",
		"mesh",
		"locations_count",
		"locations",
		"best_oa_location",
		"sustainable_development_goals",
		"grants",
		"referenced_works_count",
		"referenced_works",
		"related_works",
		"ngrams_url",
		"abstract_inverted_index",
		"cited_by_api_url",
		"counts_by_year",
		"updated_date",
		"created_date"
	]
} satisfies SchemaObject

let listWorks = {
	content: {
		"application/json": {
			schema: {
				properties: {
					meta: refSchema({meta}),
					results: {
						type: "array",
						items: refSchema({listWorksItem})
					},
					group_by: refSchema({group_by})
				},
				required: [
					"meta",
					"results"
				],
				type: "object"
			}
		}
	},
	description: "",
} satisfies ResponseObject;
export default {
	"/works": {
		get: {
			tags: tags.concat([
				"list"
			]),
			description: "",
			parameters: [
				refParameter({filterWorks}),
				refParameter({api_key}),
				refParameter({per_page}),
				refParameter({cursor}),
			],
			responses: {
				"200": refResponse({listWorks}),
				"403": refResponse({resp4xx}),
				// "4xx": refResponse({resp4xx})
			},
			summary: "/works",
		},
	},
} as PathsObject;
