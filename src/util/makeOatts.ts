import fs from "fs";
import * as oatts from "oatts";
import { OpenAPI } from "openapi-types";
import path from "path";
import { makeTempFile } from "~/util/makeTempFile";

export async function makeOatts(spec: OpenAPI.Document) {
	const options = {
		// see "Options" section below for available options
	};
	// write file to temp dir
	const prefix: string = "/tmp/openapi-spec-validator";
	const filename = "openapi.json";
	const data: any = JSON.stringify(spec, null, "\t");
	const file = makeTempFile(data, filename, prefix);

	// const oatts: any = require('oatts');
	const tests: { generated: { filename: string, contents: string; }[]; } = await oatts.generate(file, options);

	console.log(tests);
	const baseDir = "./test/generated";
	if (!fs.existsSync(baseDir)) {
		fs.mkdirSync(baseDir, { recursive: true });
	}
	for (const test of tests.generated) {
		const testPath = path.join(baseDir, test.filename);
		fs.writeFileSync(testPath, test.contents);
	}
}
