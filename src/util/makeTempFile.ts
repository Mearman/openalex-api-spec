import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export function makeTempFile(data: any, filename: string = uuidv4(), prefix: string = "/tmp"): string {
	const temp = fs.mkdtempSync(path.join(prefix, uuidv4()));
	const file = path.join(temp, filename);
	if (typeof data !== "string") {
		data = JSON.stringify(data, null, "\t");
	}
	fs.writeFileSync(file, data, {encoding: "utf8"});
	return file;
}
