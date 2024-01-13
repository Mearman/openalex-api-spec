import { refSchema } from "~/spec/components";
import { dehydratedInstitution } from "~/spec/components/schemas/institutions/dehydratedInstitution";

export const affiliations = {
	items: {
		properties: {
			institution: refSchema({ dehydratedInstitution }),
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
