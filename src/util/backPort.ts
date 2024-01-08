import { Converter, ConverterOptions } from "@apiture/openapi-down-convert";
import fs from "fs";
import { OpenAPI } from "openapi-types";

export function backPort(spec: OpenAPI.Document, path = "./openapi-3.0.json"): void {
	const options: ConverterOptions = {
		verbose: true,
		deleteExampleWithId: true,
		allOfTransform: true
	};
	const converter = new Converter(spec, options);
	const oas30Document = converter.convert();
	fs.writeFileSync(path, JSON.stringify(oas30Document, null, "\t"));
}
