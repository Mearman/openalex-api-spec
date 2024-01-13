import { refSchema } from "~/spec/components";
import { dehydratedInstitution } from "~/spec/components/schemas/institutions/dehydrated/dehydratedInstitution";

export const dehydratedInstitutionArray = {
	items: refSchema({ dehydratedInstitution }),
	type: "array",
} satisfies SchemaObject;
