import { refSchema } from "~/spec/components";

export function refPattern(pattern: RegExp, id: string): ReferenceObject {
	const patternStringWithoutSlashes = pattern.source;
	const schema: Record<string, SchemaObject> = {
		[id + "Pattern"]: {
			pattern: patternStringWithoutSlashes,
			type: "string",
		},
	};

	return refSchema(schema);
}
