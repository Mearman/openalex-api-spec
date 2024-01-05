import { OpenAPIV3_1 } from "openapi-types";
import PathsObject = OpenAPIV3_1.PathsObject;

export const concept = {
	"/concepts/{id}": {
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
									ancestors: {
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
												wikidata: {
													type: "string",
												},
											},
											required: ["id", "wikidata", "display_name", "level"],
											type: "object",
										},
										type: "array",
									},
									cited_by_count: {
										type: "integer",
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
									description: {
										type: "string",
									},
									display_name: {
										type: "string",
									},
									id: {
										type: "string",
									},
									ids: {
										properties: {
											mag: {
												type: "string",
											},
											openalex: {
												type: "string",
											},
											umls_cui: {
												items: {
													type: "string",
												},
												type: "array",
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
											"wikidata",
											"mag",
											"wikipedia",
											"umls_cui",
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
											description: {
												properties: {
													"aeb-arab": {
														type: "string",
													},
													ar: {
														type: "string",
													},
													arz: {
														type: "string",
													},
													ast: {
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
													ca: {
														type: "string",
													},
													cs: {
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
													eo: {
														type: "string",
													},
													es: {
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
													gl: {
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
													hu: {
														type: "string",
													},
													id: {
														type: "string",
													},
													ilo: {
														type: "string",
													},
													io: {
														type: "string",
													},
													it: {
														type: "string",
													},
													ja: {
														type: "string",
													},
													ko: {
														type: "string",
													},
													la: {
														type: "string",
													},
													ms: {
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
													pl: {
														type: "string",
													},
													pt: {
														type: "string",
													},
													"pt-br": {
														type: "string",
													},
													ro: {
														type: "string",
													},
													ru: {
														type: "string",
													},
													sk: {
														type: "string",
													},
													sq: {
														type: "string",
													},
													sv: {
														type: "string",
													},
													tr: {
														type: "string",
													},
													uk: {
														type: "string",
													},
													uz: {
														type: "string",
													},
													vec: {
														type: "string",
													},
													zh: {
														type: "string",
													},
												},
												required: [
													"ar",
													"ast",
													"bg",
													"ca",
													"cs",
													"de",
													"en",
													"es",
													"fa",
													"fr",
													"gl",
													"he",
													"hu",
													"id",
													"nl",
													"pt",
													"pt-br",
													"ro",
													"sq",
													"uk",
													"zh",
												],
												type: "object",
											},
											display_name: {
												properties: {
													"aeb-arab": {
														type: "string",
													},
													af: {
														type: "string",
													},
													am: {
														type: "string",
													},
													an: {
														type: "string",
													},
													ar: {
														type: "string",
													},
													arc: {
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
													ay: {
														type: "string",
													},
													az: {
														type: "string",
													},
													ba: {
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
													bi: {
														type: "string",
													},
													bm: {
														type: "string",
													},
													bn: {
														type: "string",
													},
													bo: {
														type: "string",
													},
													bpy: {
														type: "string",
													},
													br: {
														type: "string",
													},
													bs: {
														type: "string",
													},
													bxr: {
														type: "string",
													},
													ca: {
														type: "string",
													},
													cdo: {
														type: "string",
													},
													ce: {
														type: "string",
													},
													ceb: {
														type: "string",
													},
													chr: {
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
													"de-ch": {
														type: "string",
													},
													diq: {
														type: "string",
													},
													el: {
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
													fur: {
														type: "string",
													},
													fy: {
														type: "string",
													},
													ga: {
														type: "string",
													},
													gcr: {
														type: "string",
													},
													gd: {
														type: "string",
													},
													gl: {
														type: "string",
													},
													gsw: {
														type: "string",
													},
													gv: {
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
													hif: {
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
													ilo: {
														type: "string",
													},
													inh: {
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
													iu: {
														type: "string",
													},
													ja: {
														type: "string",
													},
													jam: {
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
													kk: {
														type: "string",
													},
													kn: {
														type: "string",
													},
													ko: {
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
													lo: {
														type: "string",
													},
													lt: {
														type: "string",
													},
													lv: {
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
													mni: {
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
													nl: {
														type: "string",
													},
													nn: {
														type: "string",
													},
													nov: {
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
													pcd: {
														type: "string",
													},
													pih: {
														type: "string",
													},
													pl: {
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
													sgs: {
														type: "string",
													},
													sh: {
														type: "string",
													},
													shi: {
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
													ta: {
														type: "string",
													},
													te: {
														type: "string",
													},
													tg: {
														type: "string",
													},
													th: {
														type: "string",
													},
													ti: {
														type: "string",
													},
													tl: {
														type: "string",
													},
													tr: {
														type: "string",
													},
													ts: {
														type: "string",
													},
													tt: {
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
													vo: {
														type: "string",
													},
													vro: {
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
													"zh-tw": {
														type: "string",
													},
												},
												required: [
													"af",
													"ar",
													"arz",
													"ast",
													"az",
													"bg",
													"ca",
													"ceb",
													"cs",
													"de",
													"el",
													"en",
													"en-ca",
													"en-gb",
													"eo",
													"es",
													"fa",
													"fi",
													"fr",
													"ga",
													"hu",
													"it",
													"ja",
													"la",
													"lt",
													"ml",
													"my",
													"nl",
													"pl",
													"pt",
													"pt-br",
													"qu",
													"ro",
													"ru",
													"sq",
													"sv",
													"te",
													"uk",
													"vi",
													"war",
													"zh",
													"zh-cn",
													"zh-hant",
													"zh-hk",
												],
												type: "object",
											},
										},
										required: ["display_name", "description"],
										type: "object",
									},
									level: {
										type: "integer",
									},
									related_concepts: {
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
									updated_date: {
										type: "string",
									},
									wikidata: {
										type: "string",
									},
									works_api_url: {
										type: "string",
									},
									works_count: {
										type: "integer",
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

			summary: "/concepts/{id}",
		},
	}
} satisfies PathsObject
