#!/usr#!/usr/bin/env npx -y tsx
import * as fs from "fs";
import OpenAPISchemaValidator, { OpenAPISchemaValidatorResult } from "openapi-schema-validator";
import spec from "./spec";

console.log(spec);

console.log("=".repeat(80));

const validator = new OpenAPISchemaValidator({
	version: 3.1,
});

const validation: OpenAPISchemaValidatorResult = validator.validate(spec);
// console.log(validation);
if (validation.errors.length > 0) {
	console.error("Validation errors:");
	// console.error(validation.errors);
	validation.errors.forEach((err) => {
		console.log("=".repeat(20));
		console.error(err);
		console.log("=".repeat(20));
	});
	process.exit(1);
}

fs.writeFileSync("./openapi.json", JSON.stringify(spec, null, "\t"));
