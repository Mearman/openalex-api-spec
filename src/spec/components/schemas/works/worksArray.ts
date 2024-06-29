import { refSchema } from "~/spec/components";
import { workSchema } from "~/spec/components/schemas/works/work";

export const worksArray = {
	items: refSchema({ workSchema: workSchema }),
	// additionalProperties: false,
	type: "array",
} satisfies SchemaObject;
