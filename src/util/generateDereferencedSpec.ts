import fs from "fs";
import { OpenAPI } from "openapi-types";
import path from "path";
import { dereference } from "~/util/dereference";
import { sortObject } from "~/util/sortObject";

export const DEFAULT_DEREFERENCED_SPEC_NAME: string = "openapi.dereferenced.json";
export const GENERATION_DIR: string = path.join("./", "generated");
export const DEFAULT_DEREFERENCED_SPEC_PATH: string = path.join(GENERATION_DIR, DEFAULT_DEREFERENCED_SPEC_NAME);

export async function generateDereferencedSpec(doc: OpenAPI.Document, outputFilePath = DEFAULT_DEREFERENCED_SPEC_PATH) {
	const result: OpenAPI.Document = sortObject(await dereference(doc));
	if ("components" in result) {
		result.components = Object.keys(result.components).reduce((acc, key) => {
			acc[key] = {};
			return acc;
		}, {});
	}
	const outputFile = path.resolve(outputFilePath);
	fs.writeFileSync(outputFile, JSON.stringify(result, null, "\t"));
	console.debug(`Wrote dereferenced spec to: ${outputFile}`);
	return result;
}
