import { OpenAPIV3_1 } from "openapi-types";
import { group_by } from "~/spec/components/schemas";
import PathsObject = OpenAPIV3_1.PathsObject;

export const institutions = {
	"/institutions": {
		get: {
			description: "",
			parameters: [
				{
					in: "query",
					name: "filter",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					in: "query",
					name: "group-by",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					in: "query",
					name: "group_by",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					in: "query",
					name: "per-page",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					in: "query",
					name: "page",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					in: "query",
					name: "sample",
					required: false,
					schema: {
						type: "string",
					},
				},
				{
					in: "query",
					name: "search",
					required: false,
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
				{
					in: "query",
					name: "sort",
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
									group_by,
									meta: {
										properties: {
											count: {
												type: "integer",
											},
											db_response_time_ms: {
												type: "integer",
											},
											groups_count: {
												type: "integer",
											},
											page: {
												type: "integer",
											},
											per_page: {
												type: "integer",
											},
										},
										required: [
											"count",
											"db_response_time_ms",
											"page",
											"per_page",
											"groups_count",
										],
										type: "object",
									},
									results: {
										items: {
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
														required: [
															"year",
															"works_count",
															"cited_by_count",
														],
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
													required: ["openalex", "ror", "grid"],
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
																ab: {
																	type: "string",
																},
																ace: {
																	type: "string",
																},
																af: {
																	type: "string",
																},
																ak: {
																	type: "string",
																},
																alt: {
																	type: "string",
																},
																am: {
																	type: "string",
																},
																an: {
																	type: "string",
																},
																ang: {
																	type: "string",
																},
																ar: {
																	type: "string",
																},
																ary: {
																	type: "string",
																},
																arz: {
																	type: "string",
																},
																as: {
																	type: "string",
																},
																ast: {
																	type: "string",
																},
																atj: {
																	type: "string",
																},
																ay: {
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
																ban: {
																	type: "string",
																},
																bar: {
																	type: "string",
																},
																bcl: {
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
																bho: {
																	type: "string",
																},
																bn: {
																	type: "string",
																},
																br: {
																	type: "string",
																},
																bs: {
																	type: "string",
																},
																ca: {
																	type: "string",
																},
																"cbk-zam": {
																	type: "string",
																},
																cdo: {
																	type: "string",
																},
																ceb: {
																	type: "string",
																},
																ckb: {
																	type: "string",
																},
																co: {
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
																csb: {
																	type: "string",
																},
																cv: {
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
																"de-at": {
																	type: "string",
																},
																"de-ch": {
																	type: "string",
																},
																diq: {
																	type: "string",
																},
																dv: {
																	type: "string",
																},
																el: {
																	type: "string",
																},
																eml: {
																	type: "string",
																},
																en: {
																	type: "string",
																},
																"en-ca": {
																	type: "string",
																},
																"en-gb": {
																	type: "string",
																},
																"en-us": {
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
																ext: {
																	type: "string",
																},
																fa: {
																	type: "string",
																},
																fi: {
																	type: "string",
																},
																fo: {
																	type: "string",
																},
																fr: {
																	type: "string",
																},
																frc: {
																	type: "string",
																},
																frp: {
																	type: "string",
																},
																frr: {
																	type: "string",
																},
																fur: {
																	type: "string",
																},
																fy: {
																	type: "string",
																},
																ga: {
																	type: "string",
																},
																gan: {
																	type: "string",
																},
																"gan-hans": {
																	type: "string",
																},
																"gan-hant": {
																	type: "string",
																},
																gd: {
																	type: "string",
																},
																gl: {
																	type: "string",
																},
																gn: {
																	type: "string",
																},
																gpe: {
																	type: "string",
																},
																gsw: {
																	type: "string",
																},
																gu: {
																	type: "string",
																},
																gv: {
																	type: "string",
																},
																ha: {
																	type: "string",
																},
																hak: {
																	type: "string",
																},
																he: {
																	type: "string",
																},
																hi: {
																	type: "string",
																},
																hr: {
																	type: "string",
																},
																hsb: {
																	type: "string",
																},
																ht: {
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
																ia: {
																	type: "string",
																},
																id: {
																	type: "string",
																},
																ie: {
																	type: "string",
																},
																ig: {
																	type: "string",
																},
																ilo: {
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
																kaa: {
																	type: "string",
																},
																kab: {
																	type: "string",
																},
																kbp: {
																	type: "string",
																},
																kg: {
																	type: "string",
																},
																kk: {
																	type: "string",
																},
																"kk-arab": {
																	type: "string",
																},
																"kk-cn": {
																	type: "string",
																},
																"kk-cyrl": {
																	type: "string",
																},
																"kk-kz": {
																	type: "string",
																},
																"kk-latn": {
																	type: "string",
																},
																"kk-tr": {
																	type: "string",
																},
																kl: {
																	type: "string",
																},
																km: {
																	type: "string",
																},
																kn: {
																	type: "string",
																},
																ko: {
																	type: "string",
																},
																"ko-kp": {
																	type: "string",
																},
																krc: {
																	type: "string",
																},
																ks: {
																	type: "string",
																},
																ksh: {
																	type: "string",
																},
																ku: {
																	type: "string",
																},
																"ku-latn": {
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
																lad: {
																	type: "string",
																},
																lb: {
																	type: "string",
																},
																lfn: {
																	type: "string",
																},
																li: {
																	type: "string",
																},
																lij: {
																	type: "string",
																},
																lld: {
																	type: "string",
																},
																lmo: {
																	type: "string",
																},
																lo: {
																	type: "string",
																},
																lt: {
																	type: "string",
																},
																lv: {
																	type: "string",
																},
																lzh: {
																	type: "string",
																},
																mai: {
																	type: "string",
																},
																mg: {
																	type: "string",
																},
																min: {
																	type: "string",
																},
																mk: {
																	type: "string",
																},
																ml: {
																	type: "string",
																},
																mn: {
																	type: "string",
																},
																mr: {
																	type: "string",
																},
																ms: {
																	type: "string",
																},
																"ms-arab": {
																	type: "string",
																},
																mt: {
																	type: "string",
																},
																mwl: {
																	type: "string",
																},
																my: {
																	type: "string",
																},
																mzn: {
																	type: "string",
																},
																nah: {
																	type: "string",
																},
																nan: {
																	type: "string",
																},
																nap: {
																	type: "string",
																},
																nb: {
																	type: "string",
																},
																nds: {
																	type: "string",
																},
																"nds-nl": {
																	type: "string",
																},
																ne: {
																	type: "string",
																},
																new: {
																	type: "string",
																},
																nia: {
																	type: "string",
																},
																nl: {
																	type: "string",
																},
																nn: {
																	type: "string",
																},
																nqo: {
																	type: "string",
																},
																nrm: {
																	type: "string",
																},
																oc: {
																	type: "string",
																},
																or: {
																	type: "string",
																},
																os: {
																	type: "string",
																},
																pa: {
																	type: "string",
																},
																pam: {
																	type: "string",
																},
																pap: {
																	type: "string",
																},
																pcd: {
																	type: "string",
																},
																pdc: {
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
																ps: {
																	type: "string",
																},
																pt: {
																	type: "string",
																},
																"pt-br": {
																	type: "string",
																},
																qu: {
																	type: "string",
																},
																rm: {
																	type: "string",
																},
																ro: {
																	type: "string",
																},
																ru: {
																	type: "string",
																},
																rue: {
																	type: "string",
																},
																rw: {
																	type: "string",
																},
																sa: {
																	type: "string",
																},
																sah: {
																	type: "string",
																},
																sat: {
																	type: "string",
																},
																sc: {
																	type: "string",
																},
																scn: {
																	type: "string",
																},
																sco: {
																	type: "string",
																},
																sd: {
																	type: "string",
																},
																se: {
																	type: "string",
																},
																sgs: {
																	type: "string",
																},
																sh: {
																	type: "string",
																},
																si: {
																	type: "string",
																},
																sk: {
																	type: "string",
																},
																sl: {
																	type: "string",
																},
																smn: {
																	type: "string",
																},
																sms: {
																	type: "string",
																},
																so: {
																	type: "string",
																},
																sq: {
																	type: "string",
																},
																sr: {
																	type: "string",
																},
																"sr-ec": {
																	type: "string",
																},
																"sr-el": {
																	type: "string",
																},
																stq: {
																	type: "string",
																},
																su: {
																	type: "string",
																},
																sv: {
																	type: "string",
																},
																sw: {
																	type: "string",
																},
																syl: {
																	type: "string",
																},
																szl: {
																	type: "string",
																},
																ta: {
																	type: "string",
																},
																te: {
																	type: "string",
																},
																tg: {
																	type: "string",
																},
																"tg-latn": {
																	type: "string",
																},
																th: {
																	type: "string",
																},
																tk: {
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
																"tt-cyrl": {
																	type: "string",
																},
																tw: {
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
																vls: {
																	type: "string",
																},
																vo: {
																	type: "string",
																},
																wa: {
																	type: "string",
																},
																war: {
																	type: "string",
																},
																wo: {
																	type: "string",
																},
																wuu: {
																	type: "string",
																},
																xmf: {
																	type: "string",
																},
																yi: {
																	type: "string",
																},
																yo: {
																	type: "string",
																},
																yue: {
																	type: "string",
																},
																za: {
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
																"zh-mo": {
																	type: "string",
																},
																"zh-my": {
																	type: "string",
																},
																"zh-sg": {
																	type: "string",
																},
																"zh-tw": {
																	type: "string",
																},
																zu: {
																	type: "string",
																},
															},
															required: ["en"],
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
												relevance_score: {
													type: "number",
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
													required: [
														"2yr_mean_citedness",
														"h_index",
														"i10_index",
													],
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
											required: ["id", "ror", "display_name"],
											type: "object",
										},
										type: "array",
									},
								},
								required: ["meta", "group_by"],
								type: "object",
							},
						},
					},
					description: "",
				},
			},

			summary: "/institutions",
		},
	}
} satisfies PathsObject
