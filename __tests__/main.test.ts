import axios from "axios";
import jestOpenAPI from "jest-openapi";
import { execSync } from "node:child_process";
import path from "path";

const DEFAULT_DEREFERENCED_SPEC_PATH = "./generated/openapi.3.0.json";
jestOpenAPI(path.resolve(DEFAULT_DEREFERENCED_SPEC_PATH));

const entities = [
	"",
	"works",
	"authors",
	// "publishers",
	// "sources",
	// "concepts",
	// "institutions",
	// "funders"
];

const testUrls = [
	"https://api.openalex.org",
	...entities.map((entity) => `https://api.openalex.org/${entity}/random`),
	...entities.map((entity) => `https://api.openalex.org/${entity}`),
];

function getGitEmail(): string {
	const gitEmail = execSync("git config user.email").toString().trim();
	if (gitEmail.match(/.+@.+\..+/)) {
		return gitEmail;
	} else {
		return;
	}
}

function getMailto(): any {
	return process.env.MAILTO ?? getGitEmail();
}

describe.each(entities)(`%s API tests`, (entity) => {
	const permutations = ["random", ""]
		.map((suffix) =>
			["https://api.openalex.org", entity, entity ? suffix : ""]
				.filter((x) => x)
				.join("/")
	)
		.filter((value, index, self) => self.indexOf(value) === index);
	let params: string[] | string = ["per_page=1"];
	const mailto = getMailto();
	if (mailto) {
		params.push(`mailto=${mailto}`);
	}
	params = params.filter((x) => x).join("&");

	test.each(permutations)(`%s should satisfy OpenAPI spec`, async (url) => {
		for (let i = 0; i < 3; i++) {
			console.log({ url });
			const res = await axios.get(`${url}?${params}`);
			console.log({
				// ...res,
				data: JSON.stringify(res.data),
			});
			expect(res.status).toEqual(200);

			expect(res).toSatisfyApiSpec();
		}
	});
});
