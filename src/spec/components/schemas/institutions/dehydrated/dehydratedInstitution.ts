import {
	dehydratedInstitutionProperties
} from "~/spec/components/schemas/institutions/dehydrated/dehydratedInstitutionProperties";

export const dehydratedInstitution: SchemaObject = {
	additionalProperties: false,
	properties: dehydratedInstitutionProperties,
	required: [
		"id",
		"display_name",
		"country_code",
		"type",
	],
	type: ["object", "null"]
}

