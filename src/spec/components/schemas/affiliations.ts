import { refSchema } from "~/spec/components";
import { institutionObject } from "~/spec/components/schemas/institutionObject";

export const affiliations = {
	items: {
		properties: {
			institution: refSchema({ institutionObject }),
			years: {
				items: {
					type: "integer",
				},
				type: "array",
			},
		},
		required: ["institution", "years"],
		type: "object",
	},
	type: "array",
} satisfies SchemaObject;
