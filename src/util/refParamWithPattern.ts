import { refParameter } from "~/spec/components";
import { refPattern } from "~/util/refPattern";

export function refParamWithPattern(id: string, pattern: RegExp): ReferenceObject {
	const schemaRef = refPattern(pattern, id);

	const param = {
		[id + "Param"]: {
			in: "path",
			name: "id",
			required: true,
			schema: schemaRef
		}
	}
	return refParameter(param)
}
