#!/usr#!/usr/bin/env npx -y tsx

import { inspect } from "node:util";
import path from "path";
import { getDoc } from "~/spec";
import { backPort, generateDereferencedSpec, separator, validate, writeSpec } from "~/util";
import { GENERATION_DIR } from "~/util/generateDereferencedSpec";

async function main() {
	const doc = getDoc();
	console.log(inspect(doc, {
		depth: null,
		colors: true,
	}));
	separator();
	await validate(doc);
	writeSpec(doc);
	separator();
	await backPort(doc, path.join(GENERATION_DIR, "openapi.3.0.json"));
	separator();
	const dereferencedDoc = await generateDereferencedSpec(doc);
	await backPort(dereferencedDoc, path.join(GENERATION_DIR, "openapi.dereferenced.3.0.json"));
}

(async () => {
	await main();
})();
