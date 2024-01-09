import { refSchema } from "~/spec/components";
import { institutionObject } from "~/spec/components/schemas/institutionObject";

export const institutionsArray = {
	items: refSchema({ institutionObject }),
	type: "array",
} satisfies SchemaObject;
