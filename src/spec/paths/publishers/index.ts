import { publisher } from "~/spec/paths/publishers/publisher";
import { publishers } from "~/spec/paths/publishers/publishers";

export const publisherPaths = {
	...publishers,
	...publisher,
} as PathsObject;
