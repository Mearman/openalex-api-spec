#!/usr#!/usr/bin/env npx -y tsx

import fs, { PathOrFileDescriptor } from "fs";
import spec from "~/spec";
import { dereference } from "~/util/dereference";
import { getGetPaths } from "~/util/getGetPaths";
import { operationsWithNoRequiredParameters } from "~/util/operationsWithNoRequiredParameters";
import { separator } from "~/util/separator";
import { validate } from "~/util/validate";

async function main() {
	console.log(JSON.stringify(spec, null, 2));
	separator();
	await validate(spec);
	const specOutputFilePath: PathOrFileDescriptor = "./openapi.json";
	fs.writeFileSync(specOutputFilePath, JSON.stringify(spec, null, "\t"));

	const result = await dereference(spec);
	const gets = getGetPaths(result);
	const noRequiredParameters = operationsWithNoRequiredParameters(gets);
	const server = new URL(spec.servers[0].url);
	// const results =

	// console.log(gets);
}

(async () => {
	await main();
})();
