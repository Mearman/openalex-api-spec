import { Converter, ConverterOptions } from "@apiture/openapi-down-convert";
import { ValidationResult } from "@cfworker/json-schema";
import fs from "fs";
import { OpenAPI, OpenAPIV3 } from "openapi-types";
import { DEFAULT_DEREFERENCED_SPEC_PATH } from "./generateDereferencedSpec";
import { validateOAS3 } from "./validateOAS3";

export async function backPort(
	spec: OpenAPI.Document,
	path = DEFAULT_DEREFERENCED_SPEC_PATH
): Promise<void> {
	const options: ConverterOptions = {
		verbose: true,
		deleteExampleWithId: true,
		allOfTransform: true,
	};
	const converter = new Converter(spec, options);
	const test: OpenAPIV3.Document = {
		openapi: "3.0.0",
		info: {
			title: "",
			version: "",
		},
		paths: {},
	};
	let oas30Document: OpenAPI.Document =
		converter.convert() as OpenAPIV3.Document;

	oas30Document = stripErroneousFields(oas30Document);

	const result: ValidationResult = await validateOAS3(oas30Document);
	if (!result.valid || result.errors.length > 0) {
		console.error("Validation errors:");
		result.errors.forEach((err) => {
			console.error(err);
		});
		// throw new Error("Validation failed");
	}

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
