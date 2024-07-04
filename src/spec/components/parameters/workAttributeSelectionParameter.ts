import { refSchema } from "~/spec/components";
import { baseSelectionAttributes } from "~/spec/components/schemas/shared/baseSelectionAttributes";
import { workAttributes } from "~/spec/components/schemas/works/workAttributes";

export const workSelectSchema = {
	type: "array",
	items: {
		allOf: [
			refSchema({ workAttributes }),
			refSchema({ baseSelectionAttributes }),
		],
		type: "string",
	},
} satisfies SchemaObject;

export const workAttributeSelectionParameter = {
	in: "query",
	name: "select",
	required: false,
	style: "form",
	explode: false,
	// schema: refSchema({ workSelectSchema }),
	schema: workSelectSchema,
} satisfies ParameterObject;
