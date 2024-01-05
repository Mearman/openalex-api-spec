import { refParameter, refResponse } from "~/spec/components";
import { filterWorks } from "~/spec/components/parameters";
import { api_key } from "~/spec/components/parameters/api_key";
import { cursor } from "~/spec/components/parameters/cursor";
import { per_page } from "~/spec/components/parameters/per_page";
import { resp4xx } from "~/spec/components/responses/resp4xx";

import { works } from "~/spec/components/responses/works/works";
import { tags } from "~/spec/paths/works/tags";

export default {
	"/works": {
		get: {
			tags: tags.concat(["list"]),
			description: "",
			parameters: [
				refParameter({ filterWorks }),
				refParameter({ api_key }),
				refParameter({ per_page }),
				refParameter({ cursor }),
			],
			responses: {
				"200": refResponse({ works }),
				"403": refResponse({ resp4xx }),
				// "4xx": refResponse({resp4xx})
			},
			summary: "/works",
		},
	},
} as PathsObject;
