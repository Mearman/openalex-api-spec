import { refSchema } from "~/spec/components";
import { defaultListParameters } from "~/spec/components/parameters/defaultListParameters";
import { concepts as conceptsArray } from "~/spec/components/schemas/concept";
import { group_by_result } from "~/spec/components/schemas/group_by_result";
import { meta } from "~/spec/components/schemas/meta";

export const concepts = {
	"/concepts": {
		get: {
			description: "",
			operationId: "getConcepts",
			parameters: defaultListParameters,
			responses: {
				"200": {
					content: {
						"application/json": {
							schema: {
								properties: {
									group_by: refSchema({ group_by_result }),
									meta: refSchema({ meta }),
									results: refSchema({ concepts: conceptsArray }),
								},
								required: ["meta", "group_by"],
								type: "object",
							},
						},
					},
					description: "",
				},
			},

			summary: "/concepts",
		},
	},
} satisfies PathsObject;
