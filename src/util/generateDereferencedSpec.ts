import fs from "fs";
import { OpenAPI } from "openapi-types";
import path from "path";
import { dereference } from "~/util/dereference";

export async function generateDereferencedSpec(doc: OpenAPI.Document, outputFilePath = path.join(process.cwd(), "generated", "openapi.dereferences.json")) {
	const result = await dereference(doc);
	fs.writeFileSync(path.resolve(outputFilePath), JSON.stringify(result, null, "\t"));
	return result;
}
