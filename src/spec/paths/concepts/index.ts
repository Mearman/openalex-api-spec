import { concept } from "~/spec/paths/concepts/concept";
import { concepts } from "~/spec/paths/concepts/concepts";
import { addTags } from "~/util/addTags";

export default addTags([concepts, concept], ["concepts"]) satisfies PathsObject;
