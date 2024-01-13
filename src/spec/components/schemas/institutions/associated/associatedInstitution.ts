import { dehydratedInstitution } from "~/spec/components/schemas/institutions/dehydrated/dehydratedInstitution";

export const associatedInstitution: SchemaObject = {
	additionalProperties: false,
	properties: {
		...dehydratedInstitution.properties,
		relationship: {
			type: "string",
		}
	},
	type: "object"
};
