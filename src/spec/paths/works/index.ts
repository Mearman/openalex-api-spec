import { OpenAPIV3_1 } from "openapi-types";
import work from "~/spec/paths/works/work";
import workNgrams from "~/spec/paths/works/workNgrams";
import works from "~/spec/paths/works/works";
import PathsObject = OpenAPIV3_1.PathsObject;

export default {
	...works,
	...work,
	...workNgrams,
} satisfies PathsObject;
