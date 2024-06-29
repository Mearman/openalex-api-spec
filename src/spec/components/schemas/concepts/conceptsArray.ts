import { refSchema } from "~/spec/components";
import { conceptSchema } from "~/spec/components/schemas/concepts/concept";

export const conceptsArray = {
	items: refSchema({ concept: conceptSchema }),
	type: "array",
} satisfies SchemaObject;
