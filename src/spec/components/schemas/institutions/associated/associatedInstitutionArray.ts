import { refSchema } from "~/spec/components";
import { associatedInstitution } from "~/spec/components/schemas/institutions/associated/associatedInstitution";

export const associatedInstitutionArray: SchemaObject = {
	items: refSchema({ associatedInstitution }),
	type: "array",
};
