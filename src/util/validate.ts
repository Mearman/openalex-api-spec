import { OpenAPI } from "openapi-types";
import { separator } from "~/util/separator";
import { validateOAS3_1 } from "~/util/validateOAS3_1";

export async function validate(spec: OpenAPI.Document): Promise<void> {
	separator();
	const result = await validateOAS3_1(spec);
	if (!result.valid || result.errors.length > 0) {
		console.error("Validation errors:");
// console.error(validation.errors);
		result.errors.forEach((err) => {
			separator(20);
			console.error(err);
			separator(20);
		});
		process.exit(1);
	} else {
		console.log("Validation succeeded");
	}
	separator();
}
