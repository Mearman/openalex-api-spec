import { refParameter, refResponse } from "~/spec/components";
import { select } from "~/spec/components/parameters/select";
import { authorGet200 } from "~/spec/components/responses/authorGet200";

const links: Record<string, LinkObject> = {
	getInstitution: {
		operationId: "getInstitution",
		parameters: {
			id: "$response.body#/last_known_institution/id",
		}
	},
};

let authorIdParam = {
	in: "path",
	name: "id",
	required: true,
	schema: {
		pattern: "^A[0-9]+$",
		type: "string",
	},
} satisfies ParameterObject;

const authorById = {
	get: {
		description: "Get a single author by id",
		operationId: "getAuthor",
		parameters: [
			refParameter({ authorIdParam }),
			refParameter({ select }),
		],
		responses: {
			"200": refResponse({ authorGet200 })
		},
		summary: "Get Author",
	},
};
let randomAuthor = {
	...authorById,
	get: {
		...authorById.get,
		operationId: "getRandomAuthor",
		parameters: [
			refParameter({ select }),
		],
		summary: "Get Random Author",
	}
};
export const author = {
	"/authors/{id}": authorById,
	"/authors/random": randomAuthor
} satisfies PathsObject;
