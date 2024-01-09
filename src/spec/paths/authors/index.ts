import author from "~/spec/paths/authors/author";
import authors from "~/spec/paths/authors/authors";
import { addTags } from "~/util";

export default addTags([
	author,
	authors
], ["authors"]) satisfies PathsObject;
