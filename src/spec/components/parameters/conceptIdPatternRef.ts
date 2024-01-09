import { conceptIdPattern } from "~/spec/components/schemas/patterns";
import { refParamWithPattern } from "~/util/refParamWithPattern";

export const conceptIdPatternRef = refParamWithPattern("conceptId", conceptIdPattern);
