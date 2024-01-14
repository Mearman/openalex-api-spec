import fs from "fs";
import { OpenAPI } from "openapi-types";
import path from "path";
import { sortObject } from "~/util/sortObject";

export function writeSpec(doc: OpenAPI.Document, specOutputFilePath: string = path.resolve(path.join("./", "generated", "openapi.json")), spacing: number | "\t" = "\t") {
	doc = sortObject(doc);
	fs.mkdirSync(path.dirname(specOutputFilePath), { recursive: true });
	fs.writeFileSync(specOutputFilePath, JSON.stringify(doc, null, spacing));
	console.debug(`Wrote spec to: ${specOutputFilePath}`);
	return { doc, filePath: specOutputFilePath };
}
