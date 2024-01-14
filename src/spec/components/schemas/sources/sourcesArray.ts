import { refSchema } from "~/spec/components";
import { sourceSchema } from "~/spec/components/schemas/sources/sourceSchema";
import { group_by_result } from "~/spec/components/schemas/system/group_by_result";
import { meta } from "~/spec/components/schemas/system/meta";

export const sourcesArray: SchemaObject = {
	properties: {
		group_by: refSchema({ group_by_result }),
		meta: refSchema({ meta }),
		results: {
			items: refSchema({ sourceSchema }),
			type: "array",
		}
	},
	type: "object"
};
