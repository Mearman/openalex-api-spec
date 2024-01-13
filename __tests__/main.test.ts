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
	const base = "https://api.openalex.org";
	let entityUrl: string = [base, entity].join("/");
	const listUrl = entityUrl;

	const mailto = getMailto()
	const mailtoParam = mailto ? `mailto=${mailto}` : undefined
	const fixtures: { url: string, params: string[] }[] = [{
		url: listUrl,
		params: ["per_page=3", mailtoParam],
	}, entity ? {
		url: [entityUrl, "random"].join("/"),
		params: [mailtoParam],
	} : null].filter((x) => x);

	describe.each(fixtures)(`%s`, (fixture) => {
		const url = [fixture.url, fixture.params.filter((x) => x).join("&")].join("?")
		test.each([...Array(TEST_RUNS).keys()])(`%s ${url}`, async () => {
			console.debug(url)
			const res = await axios.get(url);
			expect(res.status).toEqual(200);
			expect(res).toSatisfyApiSpec();
			// console.debug(res.data);
			// 	sleep for 100 ms
			await new Promise((resolve) => setTimeout(resolve, 10));
		});
	});
});
