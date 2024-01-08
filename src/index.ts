#!/usr#!/usr/bin/env npx -y tsx

import fs, { PathOrFileDescriptor } from "fs";
import path from "path";
import { getDoc } from "~/spec";
import { generateDereferencedSpec } from "~/util/generateDereferencedSpec";
import { getGetPaths } from "~/util/getGetPaths";
import { operationsWithNoRequiredParameters } from "~/util/operationsWithNoRequiredParameters";
import { separator } from "~/util/separator";
import { validate } from "~/util/validate";

export const DOC_PATH = path.resolve(path.join(process.cwd(), "generated", "openapi.json"));

async function main() {
	const doc = getDoc();
	console.log(doc);
	separator();
	await validate(doc);
	const specOutputFilePath: PathOrFileDescriptor = DOC_PATH;
	fs.writeFileSync(specOutputFilePath, JSON.stringify(doc, null, "\t"));
	const dereferencedDoc = await generateDereferencedSpec(doc);
}

(async () => {
	await main();
})();
