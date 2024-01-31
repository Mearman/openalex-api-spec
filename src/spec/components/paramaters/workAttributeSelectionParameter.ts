import { refSchema } from "~/spec/components";
import { baseSelectionAttributes } from "~/spec/components/schemas/shared/baseSelectionAttributes";
import { workAttributes } from "~/spec/components/schemas/works/workAttributes";

const workSelectSchema: SchemaObject = {
	type: "array",
	items: {
		allOf: [
			refSchema({workAttributes}),
			refSchema({baseSelectionAttributes}),
		],
		type: "string",
	}
};

export const workAttributeSelectionParameter: ParameterObject = {
	in: "query",
	name: "select",
	required: false,
	style: "form",
	explode: false,
	schema: refSchema({workSelectSchema}),
} satisfies ParameterObject;
