import fs from "fs";
import { OpenAPI } from "openapi-types";
import path from "path";
import { sortObject } from "~/util/sortObject";

export function writeSpec(doc: OpenAPI.Document, specOutputFilePath: string = path.resolve(path.join(process.cwd(), "generated", "openapi.json")), spacing: number | "\t" = "\t") {
	doc = sortObject(doc);
	fs.writeFileSync(specOutputFilePath, JSON.stringify(doc, null, spacing));
}
