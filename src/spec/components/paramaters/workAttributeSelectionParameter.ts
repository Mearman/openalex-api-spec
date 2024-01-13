import { refSchema } from "~/spec/components";
import { baseSelectionAttributes } from "~/spec/components/schemas/shared/baseSelectionAttributes";
import { workAttributes } from "~/spec/components/schemas/works/workAttributes";

export const workAttributeSelectionParameter: ParameterObject = {
	in: "query",
	name: "select",
	required: false,
	style: "form",
	explode: false,
	schema: {
		type: "array",
		items: {
			allOf: [
				refSchema({ workAttributes }),
				refSchema({ baseSelectionAttributes }),
			],
			type: "string"
		}
	},
} satisfies ParameterObject;
