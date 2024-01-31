import { createConfiguration, InfoApi } from "@mearman/openalex-typescript/dist/index";


describe("InfoApi", () => {
	let configuration = createConfiguration();
	const infoApi = new InfoApi(configuration)
	test("getRoot", async () => {
		const response = await infoApi.getRoot()
		expect(response).toBeDefined();
	})
})
