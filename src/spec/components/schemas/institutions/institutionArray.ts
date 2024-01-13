import { refSchema } from "~/spec/components";
import { institutionSchema } from "~/spec/components/schemas/institutions/institutionSchema";

export const institutionArray: SchemaObject = {
	additionalProperties: false,
	items: refSchema({ institutionSchema }),
	type: "array"

};
