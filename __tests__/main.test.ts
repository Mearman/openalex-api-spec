import axios from "axios";
import jestOpenAPI from "jest-openapi";
import { execSync } from "node:child_process";
import path from "path";

const DEFAULT_DEREFERENCED_SPEC_PATH = "./generated/openapi.3.0.json";
jestOpenAPI(path.resolve(DEFAULT_DEREFERENCED_SPEC_PATH));

const entities = [
	"",
	"authors",
	"concepts",
	"funders",
	"institutions",
	"publishers",
	"sources",
	"works",
];

const testUrls = [
	"https://api.openalex.org",
	...entities.map((entity) => `https://api.openalex.org/${entity}/random`),
	...entities.map((entity) => `https://api.openalex.org/${entity}`),
];

function getGitEmail(): string | void {
	try {
		const gitEmail = execSync("git config user.email").toString().trim();
		if (gitEmail.match(/.+@.+\..+/)) {
			return gitEmail;
		} else {
			return
		}
	} catch (e) {
		return;
	}
}

function getMailto(): any {
	return process.env.MAILTO ?? getGitEmail();
}

const TEST_RUNS: number = 3;

describe.each(entities)(`%s API tests`, (entity) => {
	const permutations = ["random", ""]
		.map((suffix) =>
			["https://api.openalex.org", entity, entity ? suffix : ""]
				.filter((x) => x)
				.join("/")
		)
		.filter((value, index, self) => self.indexOf(value) === index);
	let params: string[] | string = [];
	if (permutations.findIndex((x) => x.includes("random")) == -1) {
		params.push("per_page=3")
	}
	const mailto = getMailto();
	if (mailto) {
		params.push(`mailto=${mailto}`);
	}
	params = params.filter((x) => x).join("&");

	for (let i = 1; i <= TEST_RUNS; i++) {
		test.each(permutations)(`${i}: %s should satisfy OpenAPI spec`, async (url) => {
			url = `${url}?${params}`
			console.log({url});
			const res = await axios.get(url);
			expect(res.status).toEqual(200);
			expect(res).toSatisfyApiSpec();
		});
	}
});
