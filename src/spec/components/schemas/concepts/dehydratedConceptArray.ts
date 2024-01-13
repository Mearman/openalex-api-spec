import { refSchema } from "~/spec/components";
import { dehydratedConcept } from "~/spec/components/schemas/concepts/dehydratedConcept";

export const dehydratedConceptArray = {
	items: refSchema({ dehydratedConcept }),
	type: "array",
} satisfies SchemaObject;
