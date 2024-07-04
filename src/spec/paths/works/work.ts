import { refParameter, refResponse } from "~/spec/components";
import { workAttributeSelectionParameter } from "~/spec/components/parameters/workAttributeSelectionParameter";
import { workId } from "~/spec/components/parameters/workId";
import { work } from "~/spec/components/responses/works/work";

export const singleWorkResponse = {
	"200": refResponse({ work: work }),
} satisfies ResponsesObject;

export const getWorkByIdPathItem: PathItemObject = {
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
		responses: singleWorkResponse,
		summary: "/works/{id}",
		//
	},
};

export const getRandomWorkPathItem: PathItemObject = {
	get: {
		description: "Get a random work",
		operationId: "getRandomWork",
		parameters: [refParameter({ workAttributeSelectionParameter })],
		responses: singleWorkResponse,
		summary: "/works/random",
	},
};

export const getWork: PathsObject = {
	"/works/{id}": getWorkByIdPathItem
}

export const getRandomWork: PathsObject = {
	"/works/random": getRandomWorkPathItem
}
