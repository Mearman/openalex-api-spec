// import { createConfiguration, InfoApi } from "@mearman/openalex-typescript";
// import { createConfiguration, InfoApi } from "@mearman/openalex-typescript/dist";

import { InfoApi, createConfiguration } from "../../../generated/clients/typescript";

describe("InfoApi", () => {
	let configuration = createConfiguration();
	const infoApi = new InfoApi(configuration)
	test("getRoot", async () => {
		const response = await infoApi.getRoot()
		expect(response).toBeDefined();
	})
})

// describe("List Endpoints", () => {
// 	test.each([
// 		["AuthorsApi", "getAuthors"],
// 		["ConceptsApi", "getConcepts"],
// 		["FundersApi", "getFunders"],
// 		["InstitutionsApi", "getInstitutions"],
// 		["PublishersApi", "getPublishers"],
// 		["SourcesApi", "getSources"],
// 		["WorksApi", "getWorks"],
// 	])("%s.%s", async (apiName, methodName) => {
// 		const response = await new OpenAlexApi[apiName]()[methodName]();
// 		const body = response.body;
// 		expect(body).toBeDefined();
// 		expect(body.results.length).toBeGreaterThan(0);
// 		await wait();
// 	});
// })
//
// describe("Single Endpoints", () => {
// 	test.each([
// 		["AuthorsApi", "getRandomAuthor"],
// 		["ConceptsApi", "getRandomConcept"],
// 		["FundersApi", "getRandomFunder"],
// 		["InstitutionsApi", "getRandomInstitution"],
// 		["PublishersApi", "getRandomPublisher"],
// 		["SourcesApi", "getRandomSource"],
// 		["WorksApi", "getRandomWork"],
// 	])("%s.%s", async (apiName, methodName) => {
// 		const response = await new OpenAlexApi[apiName]()[methodName]();
// 		const body = response.body;
// 		expect(body).toBeDefined();
// 		await wait();
// 	});
// })
