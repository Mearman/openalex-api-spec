import { refSchema } from "~/spec/components";
import { internationalisation } from "~/spec/components/schemas/internationalisation";

export let international_display_name = {
	properties: {
		display_name: refSchema({internationalisation})
	},
	required: ["display_name"],
	type: "object",
} satisfies SchemaObject;

export let international_description = {
	properties: {
		description: refSchema({internationalisation})
	},
	required: ["description"],
	type: "object",
} satisfies SchemaObject

export const international_display_name_and_description = {
	properties: {
		description: refSchema({international_description}),
		display_name: refSchema({international_display_name}),
	},
	required: ["display_name", "description"],
	type: "object",
} satisfies SchemaObject;
