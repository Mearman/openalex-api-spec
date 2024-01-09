import { refParameter, refSchema } from "~/spec/components";
import { select } from "~/spec/components/parameters/select";
import { affiliations } from "~/spec/components/schemas/affiliations";
import { countsByYear } from "~/spec/components/schemas/countsByYear";
import { institutionObject } from "~/spec/components/schemas/institutionObject";
import { institutionsArray } from "~/spec/components/schemas/institutionsArray";
import { x_concepts } from "~/spec/components/schemas/x_concepts";

export default {
	"/author/{id}": {
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
				refParameter({ select }),
			],
			responses: {
				"200": {
					content: {
						"application/json": {
							schema: {
								properties: {
									affiliations: refSchema({ affiliations }),
									cited_by_count: {
										type: "integer",
									},
									counts_by_year: refSchema({ countsByYear }),
									created_date: {
										type: "string",
									},
									display_name: {
										type: "string",
									},
									display_name_alternatives: {
										items: {
											type: "string",
										},
										type: "array",
									},
									id: {
										type: "string",
									},
									ids: {
										properties: {
											openalex: {
												type: "string",
											},
											orcid: {
												type: "string",
											},
										},
										required: ["openalex"],
										type: "object",
									},
									last_known_institution: refSchema({ institutionObject }),
									last_known_institutions: refSchema({ institutionsArray }),
									orcid: {
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
									updated_date: {
										type: "string",
									},
									works_api_url: {
										type: "string",
									},
									works_count: {
										type: "integer",
									},
									x_concepts: refSchema({ x_concepts }),
								},
								required: ["id", "display_name"],
								type: "object",
							},
						},
					},
					description: "",
				},
			},

			summary: "/authors/{id}",
		},
	},
} satisfies PathsObject;
