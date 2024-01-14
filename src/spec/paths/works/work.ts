import { refParameter, refResponse } from "~/spec/components";
import { workAttributeSelectionParameter } from "~/spec/components/paramaters/workAttributeSelectionParameter";
import { workId } from "~/spec/components/parameters/workId";
import { works } from "~/spec/components/responses/works/work";
import { tags } from "~/spec/paths/works/tags";

export default {
	"/works/{id}": {
		get: {
			description: "Get a single work by its id",
			externalDocs: {
				url: "https://docs.openalex.org/api-entities/works/get-a-single-work",
			},
			operationId: "getWork",
			parameters: [
				refParameter({ workId }),
				refParameter({ workAttributeSelectionParameter }),
			],
			responses: {
				"200": refResponse({ workResp: works }),
			},
			summary: "/works/{id}",
			tags: tags.concat(["single"]),
		},
	},
} satisfies PathsObject;
