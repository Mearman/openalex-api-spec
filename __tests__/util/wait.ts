export async function wait(ms: number = 100): Promise<void> {
	await new Promise(r => setTimeout(r, ms));
}

describe("test", () => {
	it("should work", async () => {
		const start = Date.now();
		const delay: number = 100;
		await wait(delay);
		const end = Date.now();
		expect(end - start).toBeGreaterThanOrEqual(delay);
	});
})
