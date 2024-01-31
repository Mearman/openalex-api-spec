import * as OpenAlexApi from "@mearman/openalex-typescript-fetch";
import { wait } from "../../util/wait";

describe("InfoApi", () => {
	const infoApi = new OpenAlexApi.InfoApi()
	test("getRoot", async () => {
		const response = await infoApi.getRoot()
		expect(response).toBeDefined();
		console.log(response);
	})
})

describe("List Endpoints", () => {
	test.each([
		["AuthorsApi", "getAuthors"],
		["ConceptsApi", "getConcepts"],
		["FundersApi", "getFunders"],
		["InstitutionsApi", "getInstitutions"],
		["PublishersApi", "getPublishers"],
		["SourcesApi", "getSources"],
		["WorksApi", "getWorks"],
	])("%s.%s", async (apiName, methodName) => {
		const response = await new OpenAlexApi[apiName]()[methodName]();
		expect(response).toBeDefined();
		expect(response.results.length).toBeGreaterThan(0);
		await wait();
	});
})

describe("Single Endpoints", () => {
	test.each([
		["AuthorsApi", "getRandomAuthor"],
		["ConceptsApi", "getRandomConcept"],
		["FundersApi", "getRandomFunder"],
		["InstitutionsApi", "getRandomInstitution"],
		["PublishersApi", "getRandomPublisher"],
		["SourcesApi", "getRandomSource"],
		["WorksApi", "getRandomWork"],
	])("%s.%s", async (apiName, methodName) => {
		const response = await new OpenAlexApi[apiName]()[methodName]();
		expect(response).toBeDefined();
		await wait();
	});
})
