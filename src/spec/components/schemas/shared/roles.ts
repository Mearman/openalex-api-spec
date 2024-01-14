import { refSchema } from "~/spec/components";
import { role } from "~/spec/components/schemas/shared/role";

export const roles = {
	additionalProperties: false,
	items: refSchema({ role }),
	type: "array",
} satisfies SchemaObject;
