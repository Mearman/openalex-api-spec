import { refSchema } from "~/spec/components";
import { conceptsArray } from "~/spec/components/schemas/concepts/conceptsArray";
import { group_by_result } from "~/spec/components/schemas/system/group_by_result";
import { meta } from "~/spec/components/schemas/system/meta";

export const conceptsResponseSchema: SchemaObject = {
	properties: {
		group_by: refSchema({ group_by_result }),
		meta: refSchema({ meta }),
		results: refSchema({ conceptsArray }),
	},
};
