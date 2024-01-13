import fs from "fs";
import { OpenAPI } from "openapi-types";
import path from "path";
import { dereference } from "~/util/dereference";
import { sortObject } from "~/util/sortObject";

export const DEFAULT_DEREFERENCED_SPEC_NAME: string = "openapi.dereferenced.json";
export const DEFAULT_DEREFERENCED_SPEC_PATH: string = path.join("./", "generated", DEFAULT_DEREFERENCED_SPEC_NAME);

export async function generateDereferencedSpec(doc: OpenAPI.Document, outputFilePath = DEFAULT_DEREFERENCED_SPEC_PATH) {
	const result = sortObject(await dereference(doc));
	const outputFile = path.resolve(outputFilePath);
	fs.writeFileSync(outputFile, JSON.stringify(result, null, "\t"));
	console.debug(`Wrote dereferenced spec to: ${outputFile}`);
	return result;
}
