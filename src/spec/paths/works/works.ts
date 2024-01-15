import { refParameter, refResponse } from "~/spec/components";
import { api_key } from "~/spec/components/parameters/api_key";
import { cursor } from "~/spec/components/parameters/cursor";
import { filterWorks } from "~/spec/components/parameters/filterWorks";
import { group_by_param } from "~/spec/components/parameters/group_by_param";
import { page_param } from "~/spec/components/parameters/page";
import { per_page } from "~/spec/components/parameters/per_page";
import { sample } from "~/spec/components/parameters/sample";
import { search } from "~/spec/components/parameters/search";
import { select } from "~/spec/components/parameters/select";
import { sort } from "~/spec/components/parameters/sort";
import { resp403 } from "~/spec/components/responses/resp403";
import { works } from "~/spec/components/responses/works/works";
import { tags } from "~/spec/paths/works/tags";

export default {
	"/works": {
		get: {
			description: "",
			operationId: "getWorks",
			parameters: [
				refParameter({ api_key }),
				refParameter({ cursor }),
				refParameter({ filterWorks }),
				refParameter({ group_by_param }),
				refParameter({ page_param }),
				refParameter({ per_page }),
				refParameter({ sample }),
				refParameter({ search }),
				refParameter({ select }),
				refParameter({ sort }),
			],
			responses: {
				"200": refResponse({ works }),
				"403": refResponse({ resp403 }),
				// "4xx": refResponse({resp4xx})
			},
			summary: "/works",
			tags: tags.concat(["list"]),
		},
	},
} as PathsObject;
