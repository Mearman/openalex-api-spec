import { refParameter, refSchema } from "~/spec/components";
import { select } from "~/spec/components/parameters/select";
import { concepts } from "~/spec/components/schemas/concept";
import { countsByYear } from "~/spec/components/schemas/countsByYear";
import { geo } from "~/spec/components/schemas/geo";
import { institutionsArray } from "~/spec/components/schemas/institutionsArray";
import { international_display_name } from "~/spec/components/schemas/international_display_name";
import { repositoriesArray } from "~/spec/components/schemas/repositoriesArray";
import { roles } from "~/spec/components/schemas/roles";
import { summary_stats } from "~/spec/components/schemas/summary_stats";

export const institution = {
	"/institutions/{id}": {
		get: {
			description: "",
			operationId: "getInstitution",
			parameters: [
				{
					in: "path",
					name: "id",
					required: true,
					schema: {
						type: "string",
					},
				},
				refParameter({ select }),
			],
			responses: {
				"200": {
					content: {
						"application/json": {
							schema: {
								properties: {
									associated_institutions: refSchema({ institutionsArray }),
									cited_by_count: {
										type: "integer",
									},
									country_code: {
										type: "string",
									},
									counts_by_year: refSchema({ countsByYear }),
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
									geo: refSchema({ geo }),
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
									international: refSchema({ international_display_name }),
									lineage: {
										items: {
											type: "string",
										},
										type: "array",
									},
									repositories: refSchema({ repositoriesArray }),
									roles: refSchema({ roles }),
									ror: {
										type: "string",
									},
									summary_stats: refSchema({ summary_stats }),
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
									x_concepts: refSchema({ concepts }),
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
	},
} satisfies PathsObject;
