import { refSchema } from "~/spec/components";
import { dehydratedInstitution } from "~/spec/components/schemas/institutions/dehydratedInstitution";

export const dehydratedInstitutionArray = {
	items: refSchema({ dehydratedInstitution }),
	type: "array",
} satisfies SchemaObject;
