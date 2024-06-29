import { refSchema } from "~/spec/components";
import { group_by_result } from "../system/group_by_result";
import { meta } from "../system/meta";
import { worksArray } from "./worksArray";

export const worksResponseSchema = {
	properties: {
		meta: refSchema({ meta }),
		results: refSchema({ worksArray: worksArray }),
		group_by: refSchema({ group_by_result }),
	},
	additionalProperties: false,
	required: ["meta", "results"],
	type: "object",
} satisfies SchemaObject;
