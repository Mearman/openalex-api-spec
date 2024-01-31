import { refParameter, refResponse } from "~/spec/components";
import { workAttributeSelectionParameter } from "~/spec/components/paramaters/workAttributeSelectionParameter";
import { workId } from "~/spec/components/parameters/workId";
import { works } from "~/spec/components/responses/works/work";
import { tags } from "~/spec/paths/works/tags";

const singleWorkResponse = {
	"200": refResponse({workResp: works}),
} satisfies ResponsesObject;

const getWorkById: PathItemObject = {
	get: {
		description: "Get a single work by its id",
		externalDocs: {
			url: "https://docs.openalex.org/api-entities/works/get-a-single-work",
		},
		operationId: "getWork",
		parameters: [
			refParameter({workId}),
			refParameter({workAttributeSelectionParameter}),
		],
		responses: singleWorkResponse,
		summary: "/works/{id}",
		tags: tags.concat(["single"]),
	},
};

const getRandomWork: PathItemObject = {
	get: {
		description: "Get a random work",
		operationId: "getRandomWork",
		parameters: [
			refParameter({workAttributeSelectionParameter}),
		],
		responses: singleWorkResponse,
		summary: "/works/random",
		tags: tags.concat(["single", "random"]),
	},
};

export default {
	"/works/{id}": getWorkById,
	"/works/random": getRandomWork,
} satisfies PathsObject;
