import { getDomainById } from "./domains";
import { getFieldById } from "./fields";
import { getSubfieldById } from "./subfields";
import { getTopicById } from "./topic";
import { getTopics } from "./topics";

export default {
	...getDomainById,
	...getFieldById,
	...getSubfieldById,
	...getTopicById,
	...getTopics,
};
