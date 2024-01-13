import { refSchema } from "~/spec/components";

import { group_by_result } from "~/spec/components/schemas/group_by_result";
import { meta } from "~/spec/components/schemas/meta";
import { workSchema } from "~/spec/components/schemas/work";

export let works = {
	content: {
		"application/json": {
			schema: {
				properties: {
					meta: refSchema({ meta }),
					results: {
						type: "array",
						items: refSchema({ workSchema }),
					},
					group_by: refSchema({ group_by_result }),
				},
				required: ["meta", "results"],
				type: "object",
			},
		},
	},
	description: "",
} satisfies ResponseObject;
