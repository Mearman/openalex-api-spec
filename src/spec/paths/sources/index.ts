import { source } from "~/spec/paths/sources/source";
import { sources } from "~/spec/paths/sources/sources";
import { addTags } from "~/util/addTags";

export default addTags([sources, source], ["sources"]) satisfies PathsObject;
