import work from "~/spec/paths/works/work";
import workNgrams from "~/spec/paths/works/workNgrams";
import works from "~/spec/paths/works/works";

export default {
	...works,
	...work,
	...workNgrams,
} satisfies PathsObject;
