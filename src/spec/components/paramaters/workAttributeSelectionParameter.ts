import { refSchema } from "~/spec/components";
import { baseSelectionAttributes } from "~/spec/components/schemas/baseSelectionAttributes";
import { workAttributes } from "~/spec/components/schemas/workAttributes";

export const workAttributeSelectionParameter: ParameterObject = {
	in: "query",
	name: "select",
	required: false,
	style: "form",
	explode: false,
	schema: {
		type: "array",
		items: refSchema({
			combinedAuthorSelectionAttributes: {
				allOf: [
					refSchema({ workAttributes }),
					refSchema({ baseSelectionAttributes }),
				],
				type: "string",
			} satisfies SchemaObject
		}),
	},
} satisfies ParameterObject;
