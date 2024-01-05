import { OpenAPIV3_1 } from "openapi-types";
import PathsObject = OpenAPIV3_1.PathsObject;

export const institution = {
	"/institutions/{id}": {
		get: {
			description: "",
			parameters: [
				{
					in: "path",
					name: "id",
					required: true,
					schema: {
						type: "string",
					},
				},
				{
					in: "query",
					name: "select",
					required: false,
					schema: {
						type: "string",
					},
				},
			],
			responses: {
				"200": {
					content: {
						"application/json": {
							schema: {
								properties: {
									associated_institutions: {
										items: {
											properties: {
												country_code: {
													type: "string",
												},
												display_name: {
													type: "string",
												},
												id: {
													type: "string",
												},
												relationship: {
													type: "string",
												},
												ror: {
													type: "string",
												},
												type: {
													type: "string",
												},
											},
											required: [
												"id",
												"ror",
												"display_name",
												"country_code",
												"type",
												"relationship",
											],
											type: "object",
										},
										type: "array",
									},
									cited_by_count: {
										type: "integer",
									},
									country_code: {
										type: "string",
									},
									counts_by_year: {
										items: {
											properties: {
												cited_by_count: {
													type: "integer",
												},
												works_count: {
													type: "integer",
												},
												year: {
													type: "integer",
												},
											},
											required: ["year", "works_count", "cited_by_count"],
											type: "object",
										},
										type: "array",
									},
									created_date: {
										type: "string",
									},
									display_name: {
										type: "string",
									},
									display_name_acronyms: {
										items: {
											type: "string",
										},
										type: "array",
									},
									display_name_alternatives: {
										items: {
											type: "string",
										},
										type: "array",
									},
									geo: {
										properties: {
											city: {
												type: "string",
											},
											country: {
												type: "string",
											},
											country_code: {
												type: "string",
											},
											geonames_city_id: {
												type: "string",
											},
											latitude: {
												type: "number",
											},
											longitude: {
												type: "number",
											},
											region: {
												type: "string",
											},
										},
										required: [
											"city",
											"geonames_city_id",
											"region",
											"country_code",
											"country",
											"latitude",
											"longitude",
										],
										type: "object",
									},
									homepage_url: {
										type: "string",
									},
									id: {
										type: "string",
									},
									ids: {
										properties: {
											grid: {
												type: "string",
											},
											mag: {
												type: "string",
											},
											openalex: {
												type: "string",
											},
											ror: {
												type: "string",
											},
											wikidata: {
												type: "string",
											},
											wikipedia: {
												type: "string",
											},
										},
										required: [
											"openalex",
											"ror",
											"mag",
											"grid",
											"wikipedia",
											"wikidata",
										],
										type: "object",
									},
									image_thumbnail_url: {
										type: "string",
									},
									image_url: {
										type: "string",
									},
									international: {
										properties: {
											display_name: {
												properties: {
													ar: {
														type: "string",
													},
													arz: {
														type: "string",
													},
													ast: {
														type: "string",
													},
													az: {
														type: "string",
													},
													azb: {
														type: "string",
													},
													ba: {
														type: "string",
													},
													be: {
														type: "string",
													},
													"be-tarask": {
														type: "string",
													},
													bg: {
														type: "string",
													},
													bn: {
														type: "string",
													},
													br: {
														type: "string",
													},
													ca: {
														type: "string",
													},
													ckb: {
														type: "string",
													},
													crh: {
														type: "string",
													},
													"crh-latn": {
														type: "string",
													},
													cs: {
														type: "string",
													},
													cy: {
														type: "string",
													},
													da: {
														type: "string",
													},
													de: {
														type: "string",
													},
													el: {
														type: "string",
													},
													en: {
														type: "string",
													},
													"en-gb": {
														type: "string",
													},
													eo: {
														type: "string",
													},
													es: {
														type: "string",
													},
													et: {
														type: "string",
													},
													eu: {
														type: "string",
													},
													fa: {
														type: "string",
													},
													fi: {
														type: "string",
													},
													fr: {
														type: "string",
													},
													ga: {
														type: "string",
													},
													gd: {
														type: "string",
													},
													gl: {
														type: "string",
													},
													gv: {
														type: "string",
													},
													he: {
														type: "string",
													},
													hi: {
														type: "string",
													},
													hu: {
														type: "string",
													},
													hy: {
														type: "string",
													},
													hyw: {
														type: "string",
													},
													id: {
														type: "string",
													},
													io: {
														type: "string",
													},
													is: {
														type: "string",
													},
													it: {
														type: "string",
													},
													ja: {
														type: "string",
													},
													jv: {
														type: "string",
													},
													ka: {
														type: "string",
													},
													kk: {
														type: "string",
													},
													ko: {
														type: "string",
													},
													kw: {
														type: "string",
													},
													ky: {
														type: "string",
													},
													la: {
														type: "string",
													},
													lb: {
														type: "string",
													},
													lt: {
														type: "string",
													},
													lv: {
														type: "string",
													},
													mk: {
														type: "string",
													},
													ml: {
														type: "string",
													},
													mr: {
														type: "string",
													},
													ms: {
														type: "string",
													},
													mt: {
														type: "string",
													},
													nb: {
														type: "string",
													},
													nl: {
														type: "string",
													},
													nn: {
														type: "string",
													},
													pa: {
														type: "string",
													},
													pap: {
														type: "string",
													},
													pl: {
														type: "string",
													},
													pms: {
														type: "string",
													},
													pnb: {
														type: "string",
													},
													pt: {
														type: "string",
													},
													ro: {
														type: "string",
													},
													ru: {
														type: "string",
													},
													rw: {
														type: "string",
													},
													sh: {
														type: "string",
													},
													sl: {
														type: "string",
													},
													sr: {
														type: "string",
													},
													sv: {
														type: "string",
													},
													ta: {
														type: "string",
													},
													tg: {
														type: "string",
													},
													th: {
														type: "string",
													},
													tl: {
														type: "string",
													},
													tr: {
														type: "string",
													},
													tt: {
														type: "string",
													},
													ug: {
														type: "string",
													},
													uk: {
														type: "string",
													},
													ur: {
														type: "string",
													},
													uz: {
														type: "string",
													},
													vec: {
														type: "string",
													},
													vi: {
														type: "string",
													},
													war: {
														type: "string",
													},
													wuu: {
														type: "string",
													},
													xmf: {
														type: "string",
													},
													yo: {
														type: "string",
													},
													yue: {
														type: "string",
													},
													zh: {
														type: "string",
													},
													"zh-cn": {
														type: "string",
													},
													"zh-hans": {
														type: "string",
													},
													"zh-hant": {
														type: "string",
													},
													"zh-hk": {
														type: "string",
													},
													"zh-sg": {
														type: "string",
													},
													"zh-tw": {
														type: "string",
													},
												},
												required: ["en", "ja", "zh"],
												type: "object",
											},
										},
										required: ["display_name"],
										type: "object",
									},
									lineage: {
										items: {
											type: "string",
										},
										type: "array",
									},
									repositories: {
										items: {
											properties: {
												display_name: {
													type: "string",
												},
												host_organization: {
													type: "string",
												},
												host_organization_lineage: {
													items: {
														type: "string",
													},
													type: "array",
												},
												host_organization_name: {
													type: "string",
												},
												id: {
													type: "string",
												},
											},
											required: [
												"id",
												"display_name",
												"host_organization",
												"host_organization_name",
												"host_organization_lineage",
											],
											type: "object",
										},
										type: "array",
									},
									roles: {
										items: {
											properties: {
												id: {
													type: "string",
												},
												role: {
													type: "string",
												},
												works_count: {
													type: "integer",
												},
											},
											required: ["role", "id", "works_count"],
											type: "object",
										},
										type: "array",
									},
									ror: {
										type: "string",
									},
									summary_stats: {
										properties: {
											"2yr_mean_citedness": {
												type: "number",
											},
											h_index: {
												type: "integer",
											},
											i10_index: {
												type: "integer",
											},
										},
										required: ["2yr_mean_citedness", "h_index", "i10_index"],
										type: "object",
									},
									type: {
										type: "string",
									},
									updated_date: {
										type: "string",
									},
									works_api_url: {
										type: "string",
									},
									works_count: {
										type: "integer",
									},
									x_concepts: {
										items: {
											properties: {
												display_name: {
													type: "string",
												},
												id: {
													type: "string",
												},
												level: {
													type: "integer",
												},
												score: {
													type: "number",
												},
												wikidata: {
													type: "string",
												},
											},
											required: [
												"id",
												"wikidata",
												"display_name",
												"level",
												"score",
											],
											type: "object",
										},
										type: "array",
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

			summary: "/institutions/{id}",
		},
	}
} satisfies PathsObject
