import { getDomainById } from "./domains";
import { getFieldById } from "./fields";
import { getSubfieldById } from "./subfields";
import { getTopicById } from "./topic";
import { getTopics } from "./topics";

export const topicPaths: PathsObject = {
	...getDomainById,
	...getFieldById,
	...getSubfieldById,
	...getTopicById,
	...getTopics,
};
