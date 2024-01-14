import { Schema, ValidationResult, Validator } from "@cfworker/json-schema";
import { OpenAPIV3 } from "openapi-types";

export async function validateOAS3(
	spec: OpenAPIV3.Document
): Promise<ValidationResult> {
	const oas3 = (await (
		await fetch(
			"https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/schemas/v3.0/schema.json"
		)
	).json()) as Schema;
	const cfValidator: Validator = new Validator(oas3 as Schema, "4", true);
	const result = cfValidator.validate(spec);
	return result;
}
