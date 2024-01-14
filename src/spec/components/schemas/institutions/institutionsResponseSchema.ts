import { refSchema } from "~/spec/components";
import { institutionArray } from "~/spec/components/schemas/institutions/institutionArray";
import { group_by_result } from "~/spec/components/schemas/system/group_by_result";
import { meta } from "~/spec/components/schemas/system/meta";

export let institutionsResponseSchema: SchemaObject = {
	properties: {
		group_by: refSchema({ group_by_result }),
		meta: refSchema({ meta }),
		results: refSchema({ institutionArray }),
	},
	required: ["meta", "group_by"],
	type: "object",
}
	;
