import * as OpenAlexApi from "@mearman/openalex-typescript-node";

describe("InfoApi", () => {
	const infoApi = new OpenAlexApi.InfoApi()
	test("getRoot", async () => {
		const response = await infoApi.getRoot()
		const body = response.body;
		expect(body).toBeDefined();
	})
})

describe("List Endpoints", () => {
	test.each([
		["AuthorsApi", "getAuthors"],
		["ConceptsApi", "getConcepts"],
		["FundersApi", "getFunders"],
		["FundersApi", "getFunders"],
		["InstitutionsApi", "getInstitutions"],
		["PublishersApi", "getPublishers"],
		["SourcesApi", "getSources"],
		["WorksApi", "getWorks"],
	])("%s.%s", async (apiName, methodName) => {
		const response = await new OpenAlexApi[apiName]()[methodName]();
		const body = response.body;
		expect(body).toBeDefined();
		expect(body.results.length).toBeGreaterThan(0);
	});
})

describe("Single Endpoints", () => {
	test.each([
		["InfoApi", "getRoot"],
		["AuthorsApi", "getRandomAuthor"],
		// ["ConceptsApi", "getRandomConcept"],
		// ["FundersApi", "getRandomFunder"],
		// ["InstitutionsApi", "getRandomInstitution"],
		// ["PublishersApi", "getRandomPublisher"],
		// ["SourcesApi", "getRandomSource"],
		// ["WorksApi", "getRandomWork"],
	])("%s.%s", async (apiName, methodName) => {
		const response = await new OpenAlexApi[apiName]()[methodName]();
		const body = response.body;
		expect(body).toBeDefined();
	});
})
