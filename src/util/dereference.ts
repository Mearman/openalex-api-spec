import { commandWrapper } from "@redocly/cli/lib/wrapper";
// import { BundleOptions, handleBundle } from "@redocly/cli/src/commands/bundle";
import * as cliBundle from "@redocly/cli/lib/commands/bundle";
import fs from "fs";
import { OpenAPI } from "openapi-types";
import { Arguments } from "yargs";
import BundleOptions = cliBundle.BundleOptions;
import handleBundle = cliBundle.handleBundle;

import { makeTempFile } from "~/util/makeTempFile";

export async function dereference(
	spec: OpenAPI.Document
): Promise<OpenAPI.Document> {
	const output = makeTempFile({}, "dereferenced.json");
	const argv: Arguments<BundleOptions> = {
		$0: "",
		_: undefined,
		apis: [makeTempFile(spec, "openapi.json")],
		ext: "json",
		lint: true,
		dereferenced: true,
		output,
	};
	await commandWrapper(handleBundle)(argv);
	return JSON.parse(fs.readFileSync(output, "utf8"));
}
