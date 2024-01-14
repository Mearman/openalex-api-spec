import { refSchema } from "~/spec/components";

import { group_by_result } from "~/spec/components/schemas/system/group_by_result";
import { meta } from "~/spec/components/schemas/system/meta";
import { workSchema } from "~/spec/components/schemas/works/work";

let worksResponseSchema: SchemaObject = {
	properties: {
		meta: refSchema({ meta }),
		results: {
			type: "array",
			items: refSchema({ workSchema }),
		},
		group_by: refSchema({ group_by_result }),
	},
	required: ["meta", "results"],
	type: "object",
}
	;
export const works = {
	content: {
		"application/json": {
			schema: refSchema({ worksResponseSchema }),
		},
	},
	description: "",
} satisfies ResponseObject;
