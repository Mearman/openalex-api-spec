#!/usr#!/usr/bin/env npx -y tsx

import { getDoc } from "~/spec";
import { backPort, generateDereferencedSpec, separator, validate, writeSpec } from "~/util";

async function main() {
	const doc = getDoc();
	console.log(doc);
	separator();
	await validate(doc);
	writeSpec(doc);
	const dereferencedDoc = await generateDereferencedSpec(doc);
	await backPort(dereferencedDoc);
}

(async () => {
	await main();
})();
