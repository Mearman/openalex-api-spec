import { refParameter, refResponse } from "~/spec/components";
import { defaultListParameters } from "~/spec/components/parameters/defaultListParameters";
import { filterWorks } from "~/spec/components/parameters/filterWorks";
import { works } from "~/spec/components/responses/works/works";
import { tags } from "~/spec/paths/works/tags";

export default {
	"/works": {
		get: {
			description: "",
			operationId: "getWorks",
			parameters: defaultListParameters
				.filter((p) => p.$ref.indexOf("filter") === -1)
				.concat(refParameter({ filterWorks })),
			responses: {
				"200": refResponse({ works }),
				// "403": refResponse({ resp403 }),
				// "4xx": refResponse({resp4xx})
			},
			summary: "/works",
			tags: tags.concat(["list"]),
		},
	},
} satisfies PathsObject;
