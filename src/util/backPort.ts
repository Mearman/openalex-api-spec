import { Converter, ConverterOptions } from "@apiture/openapi-down-convert";
import { ValidationResult } from "@cfworker/json-schema";
import fs from "fs";
import { OpenAPI, OpenAPIV3 } from "openapi-types";
import { validateOAS3 } from "./validateOAS3";
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

function stripErroneousFields(
	oas30Document: OpenAPIV3.Document<{}>
): OpenAPIV3.Document {
	Object.keys(oas30Document.components.parameters).forEach((key) => {
		const parameter = oas30Document.components.parameters[key];
		if ("examples" in parameter && parameter.examples) {
			const examples = parameter.examples as {
				[media: string]: ExampleObject;
			};

			parameter.example = Object.values(examples)[0].value;
			delete parameter.examples;
		}
		oas30Document.components.parameters[key] = parameter;
	});
	if ("summary" in oas30Document.info) {
		delete oas30Document.info.summary;
	}
	return oas30Document;
}
