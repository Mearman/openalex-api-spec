import { refSchema } from "~/spec/components";
import { funderSchema } from "~/spec/components/schemas/funders/funderSchema";
import { group_by_result } from "~/spec/components/schemas/system/group_by_result";
import { meta } from "~/spec/components/schemas/system/meta";

export const fundersArray: SchemaObject = {
	properties: {
		group_by: refSchema({ group_by_result }),
		meta: refSchema({ meta }),
		results: {
			items: refSchema({ funderSchema }),
			type: "array",
		},
	},
	required: ["meta", "group_by"],
	type: "object",
};
