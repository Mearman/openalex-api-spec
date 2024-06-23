import { addTags } from "~/util";
import { domains, fields, subfields, topics } from "./domains";

export default addTags([topics, domains, subfields, fields], ["topics"]);
