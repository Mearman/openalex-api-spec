import fs from "fs";
import path from "path";

export async function downloadiFleToTemp(url: string, filename: string) {
	const tmpDir = fs.mkdtempSync("/tmp/openapi-spec-validator");
	const tmpFile = path.join(tmpDir, filename);
	const res = await fetch(url);
	const content = await res.text();
	fs.writeFileSync(tmpFile, content);
	return tmpFile;
}
