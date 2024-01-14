import axios from "axios";
import fs from "fs";
import jestOpenAPI from "jest-openapi";
import { execSync } from "node:child_process";
import { OpenAPI } from "openapi-types";

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

function getGitEmail(): string | void {
	let gitEmail;
	const gitEmailCommands = [
		"git config user.email",
		"git log -n 1 --pretty=format:%ae"
	];

	for (const command of gitEmailCommands) {
		try {
			gitEmail = execSync(command).toString().trim();
			if (gitEmail.match(/.+@.+\..+/)) {
				return gitEmail;
			}
		} catch (e) {
		}
	}

	return;
}

function getMailto(): any {
	return process.env.MAILTO ?? getGitEmail();
}

const TEST_RUNS: number = 3;
const namedDocs: [string, string][] = [
	["3.0 Document", "generated/openapi.3.0.json"],
	["3.0 Dereferenced", "generated/openapi.dereferenced.3.0.json"],
]
describe.each(namedDocs)(`%s`, (name, location) => {
	const doc: OpenAPI.Document = JSON.parse(fs.readFileSync(location).toString())
	jestOpenAPI(doc as unknown as OpenAPI.Document);
	test("Root url", async () => {
		const res = await axios.get("https://api.openalex.org");
		expect(res.status).toEqual(200);
		expect(res).toSatisfyApiSpec();
	})

	describe.each(entities)(`%s API tests`, (entity) => {
		const base = "https://api.openalex.org";
		let entityUrl: string = [base, entity].join("/");
		const listUrl = entityUrl;

		const mailto = getMailto()
		const mailtoParam = mailto ? `mailto=${mailto}` : undefined

		let fixtures: { url: string, params: string[]; }[] = [{
			url: listUrl,
			params: mailtoParam ? ["per_page=3", mailtoParam] : ["per_page=3"],
		}];

		if (entity) {
			fixtures.push({
				url: [entityUrl, "random"].join("/"),
				params: mailtoParam ? ["per_page=3", mailtoParam] : ["per_page=3"],
			});
		}

		fixtures = fixtures.filter((x) => x);

		describe.each(fixtures)(`%s`, (fixture) => {
			const url = [fixture.url, fixture.params.filter((x) => x).join("&")].filter(x => x).join
			("?")
			test.each([...Array(TEST_RUNS).keys()])(`%s ${url}`, async () => {
				console.debug(url)
				const res = await axios.get(url);
				expect(res.status).toEqual(200);
				expect(res).toSatisfyApiSpec();
				await new Promise((resolve) => setTimeout(resolve, 100));
			});
		});
	});
})
