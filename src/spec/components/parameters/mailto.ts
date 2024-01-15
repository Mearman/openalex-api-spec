import { refParameter, refSchema } from "~/spec/components";

const mailToSchema: SchemaObject = {
	type: "string",
	pattern: ".*mailto:\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}.*"
}

export const mailtoQuery = {
	in: "query",
	name: "mailto",
	// content: {
	// 	"application/json": {
	// 		schema: refSchema({ mailToSchema }),
	// 	},
	// },
	required: false,
	schema: refSchema({ mailToSchema }),
	description: [
		"The API is the primary way to get OpenAlex data. It's free and requires no authentication.",
		"The daily limit for API calls is 100,000 requests per user per day.",
		"For best performance, add your email to all API requests",
		"The email can be either in the query string, like `mailto:example@domain.com`, or in the User-Agent request header, like `User-Agent: my-app (mailto:example@domain.com)`.",
		"Read more about the polite pool at [docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool).",
	].join("\n"),

} satisfies ParameterObject;

//
// Add the mailto=you@example.com parameter in your API request, like this: https://api.openalex.org/works?mailto=you@example.com
// Add mailto:you@example.com somewhere in your User-Agent request header.

export const mailtoHeader = {
	name: "User-Agent",
	in: "header",
	required: false,
	schema: refSchema({ mailToSchema }),
	description: "[docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication](https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication#the-polite-pool)"
} satisfies ParameterObject;

export const mailto: ReferenceObject[] = [
	refParameter({ mailtoHeader }),
	refParameter({ mailtoQuery }),
];
