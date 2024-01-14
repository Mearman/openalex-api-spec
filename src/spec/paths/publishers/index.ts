import { publisher } from "~/spec/paths/publishers/publisher";
import { publishers } from "~/spec/paths/publishers/publishers";
import { addTags } from "~/util/addTags";

export default addTags(
	[publishers, publisher],
	["publishers"]
) satisfies PathsObject;
