import { refParameter, refResponse } from "~/spec/components";
import { select } from "~/spec/components/parameters/select";
import { institutionGet200Response } from "~/spec/components/responses/institutionGet200Response";

const singleInstitutionResponse = {
	"200": refResponse({ institution: institutionGet200Response }),
} satisfies ResponsesObject;

const getInstitutionById: PathItemObject = {
	get: {
		description: "",
		operationId: "getInstitution",
		parameters: [
			{
				in: "path",
				name: "id",
				required: true,
				schema: {
					type: "string",
				},
			},
			refParameter({ select }),
		],
		responses: singleInstitutionResponse,
		summary: "/institutions/{id}",
	},
};

const getRandomInstitution: PathItemObject = {
	get: {
		description: "Get a random institution",
		operationId: "getRandomInstitution",
		parameters: [refParameter({ select })],
		responses: singleInstitutionResponse,
		summary: "/institutions/random",
	},
};

export const institution = {
	"/institutions/{id}": getInstitutionById,
	"/institutions/random": getRandomInstitution,
} satisfies PathsObject;
