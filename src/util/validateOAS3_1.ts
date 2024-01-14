import { Schema, ValidationResult, Validator } from "@cfworker/json-schema";
import { OpenAPIV3_1 } from "openapi-types";

export async function validateOAS3_1(
	spec: OpenAPIV3_1.Document
): Promise<ValidationResult> {
	const oas31 = (await (
		await fetch(
			"https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/schemas/v3.1/schema.json"
		)
	).json()) as Schema;
	const cfValidator: Validator = new Validator(
		oas31 as Schema,
		"2020-12",
		true
	);
	return cfValidator.validate(spec);
}
