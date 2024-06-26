import {
	getConceptById,
	getRandomConcept,
} from "~/spec/paths/concepts/concept";
import { getConcepts } from "~/spec/paths/concepts/concepts";

export default {
	...getConceptById,
	...getRandomConcept,
	...getConcepts
};
