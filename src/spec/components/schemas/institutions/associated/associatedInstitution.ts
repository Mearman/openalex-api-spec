import { refSchema } from "~/spec/components";
import { dehydratedInstitution } from "~/spec/components/schemas/institutions/dehydrated/dehydratedInstitution";

export const associatedInstitution: SchemaObject = {
	additionalProperties: refSchema({ dehydratedInstitution }),
	properties: {
		relationship: {
			type: "string",
		}
	},
	type: "object"
};
