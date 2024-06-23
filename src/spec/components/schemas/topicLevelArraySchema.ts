import { refSchema } from "~/spec/components";
import { topicLevelSchema } from "./topicLevelSchema";


export const topicLevelArraySchema = {
	type: "object",
	properties: {
		siblings: {
			type: "array",
			items: refSchema({ topicLevelSchema }),
		},
	},
} satisfies SchemaObject;
