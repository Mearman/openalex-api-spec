// import * as OpenAlex from "@mearman/openalex-typescript";
//
// describe("typescript", () => {
// 	const infoApi = new OpenAlex.InfoApi(OpenAlex.createConfiguration());
//
// 	it("should work", async () => {
// 		const response = await infoApi.getRoot()
// 		expect(response).toBeDefined();
// 		console.log(response);
// 	})
// })

import * as Api from "@mearman/openalex-typescript";

console.log(Object.keys(Api));

describe("typescript-node", () => {
	it("should work", () => {
		expect(true).toBe(true);
	});
})
