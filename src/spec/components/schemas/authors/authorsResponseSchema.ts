import { refSchema } from "~/spec/components";
import { author } from "~/spec/components/schemas/authors/author";
import { group_by_result } from "~/spec/components/schemas/system/group_by_result";
import { meta } from "~/spec/components/schemas/system/meta";

export const authorsResponseSchema: SchemaObject = {
	properties: {
		group_by: refSchema({ group_by_result }),
		meta: refSchema({ meta }),
		results: {
			items: refSchema({ author }),
			type: "array",
		},
	},
	required: ["meta", "group_by"],
};
