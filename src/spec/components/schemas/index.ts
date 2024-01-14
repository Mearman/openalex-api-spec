import { refSchema } from "~/spec/components";

export let schemas = {
	// group_by
} satisfies Record<string, SchemaObject>;

function getProperties(p: PropertiesSchema) {
	return Object.fromEntries(
		Object.entries(p).map(
			([key, value]) => {
				const ref = refSchema({ [key]: value });
				return [key, ref];
			})
	);
}
