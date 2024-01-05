import { institution } from "~/spec/paths/institutions/institution";
import { institutions } from "~/spec/paths/institutions/institutions";
import { addTags } from "~/util/addTags";

export default addTags(
	[institutions, institution],
	["institutions"]
) satisfies PathsObject;
