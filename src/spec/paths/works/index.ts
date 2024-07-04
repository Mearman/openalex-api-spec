import { getRandomWork, getWork } from "~/spec/paths/works/work";
import { getWorkNgrams } from "~/spec/paths/works/workNgrams";
import { getWorks } from "~/spec/paths/works/works";

export const workPaths: PathsObject = {
	...getWork,
	...getWorkNgrams,
	...getRandomWork,
	...getWorks,
};
