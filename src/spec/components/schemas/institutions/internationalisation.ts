import { international_string } from "~/spec/components/schemas/institutions/international_string";

export const internationalisation = {
	properties: international_string,
	required: ["en"],
	type: "object",
} satisfies SchemaObject;
