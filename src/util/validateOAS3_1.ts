import { Schema, ValidationResult, Validator } from "@cfworker/json-schema";
import oas31 from "oas-schemas/schemas/v3.1/schema.json";
import { OpenAPI } from "openapi-types";

export async function validateOAS3_1(spec: OpenAPI.Document): Promise<ValidationResult> {
	const cfValidator: Validator = new Validator(oas31 as Schema, "2020-12", true);
	return cfValidator.validate(spec);
}
