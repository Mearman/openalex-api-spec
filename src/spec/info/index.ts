import fs from "fs";
import { OpenAPIV3_1 } from "openapi-types";
import LicenseObject = OpenAPIV3_1.LicenseObject;

const version: string = JSON.parse(
	fs.readFileSync("package.json").toString()
).version;

if (!version || !version.match(/\d+\.\d+\.\d+/)) {
	throw new Error(`Invalid version: ${version}`);
}

let openAlexLogo =
	"https://raw.githubusercontent.com/ourresearch/openalex-docs/main/.gitbook/assets/OpenAlex-logo-5.png";
export const info: InfoObject = {
	title: "OpenAlex",
	summary: "OpenAlex API",
	// https://docs.openalex.org/how-to-use-the-api/api-overview
	description: [
		`![](${openAlexLogo})`,
		"**OpenAlex** is a fully open catalog of the global research system.",
		"It's named after the [ancient Library of Alexandria](https://en.wikipedia.org/wiki/Library_of_Alexandria) and made by the nonprofit [OurResearch](https://ourresearch.org/).",

		"## OpenAPI Specification",
		"[Mearman/openalex-api-spec](https://github.com/Mearman/openalex-api-spec)",
		"This OpenAPI specification is reverse-engineered and derived from spec generated by [openapi-devtools](https://github.com/AndrewWalsh/openapi-devtools).",

		"The specification document itself is OpenAPI version 3.1 and is generated from TypeScript source code.",

		"**[Releases](https://github.com/Mearman/openalex-api-spec/releases)**",

		"## Clients",
		[
			`[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript)](https://github.com/Mearman/openalex-typescript)`,
			`[![TypeScript Fetch](https://img.shields.io/badge/TypeScript%20Fetch-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white&link=https://github.com/Mearman/openalex-typescript-fetch)](https://github.com/Mearman/openalex-typescript-fetch)`,
			`[![TypeScript Node](https://img.shields.io/badge/TypeScript%20Node-339933?style=for-the-badge&logo=Node.js&logoColor=white&link=https://github.com/Mearman/openalex-typescript-node)](https://github.com/Mearman/openalex-typescript-node)`,

			[
				"[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white&link=https://github.com/Mearman/openalex-python)](https://github.com/Mearman/openalex-python)",
				"[![Open in](https://img.shields.io/badge/Open%20in-CodeSpaces-181717?style=for-the-badge&logo=GitHub&link=https://codespaces.new/Mearman/openalex-python)](https://codespaces.new/Mearman/openalex-python)",
				"[![Open in](https://img.shields.io/badge/Open%20in-Colab-F9AB00?style=for-the-badge&logo=Google%20Colab&link=https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)](https://colab.research.google.com/github/Mearman/openalex-python/blob/main/README.ipynb)"
				// '[![Open in](https://img.shields.io/badge/Open%20in-Binder-FF6C2C?style=for-the-badge&logo=Jupyter&link=https://mybinder.org/v2/gh/Mearman/openalex-python/main)](https://mybinder.org/v2/gh/Mearman/openalex-python/main)',

				// '[![Open in](https://img.shields.io/badge/Open%20in-Codepen-000000?style=for-the-badge&logo=Codepen&link=https://codepen.io/pen?template=ExZqQq)](https://codepen.io/pen?template=ExZqQq)',

				// '[![Open in](https://img.shields.io/badge/Open%20in-CodeSandbox-151515?style=for-the-badge&logo=CodeSandbox&link=https://codesandbox.io/s/github/Mearman/openalex-python)](https://codesandbox.io/s/github/Mearman/openalex-python)',

				// '[![Open in](https://img.shields.io/badge/Open%20in-Glitch-3333FF?style=for-the-badge&logo=Glitch&link=https://glitch.com/edit/#!/import/github/Mearman/openalex-python)](https://glitch.com/edit/#!/import/github/Mearman/openalex-python)',

				// '[![Open in](https://img.shields.io/badge/Open%20in-Repl.it-F26207?style=for-the-badge&logo=Replit&link=https://repl.it/github/Mearman/openalex-python)](https://repl.it/github/Mearman/openalex-python)',

				// '[![Open in](https://img.shields.io/badge/Open%20in-StackBlitz-1269D3?style=for-the-badge&logo=StackBlitz&link=https://stackblitz.com/github/Mearman/openalex-python)](https://stackblitz.com/github/Mearman/openalex-python)'
			].join("\n")
		].join("\n\n"),
		"---",
	].join("\n\n"),
	version,
	license: {
		name: "CC0",
		// identifier: "CC0-1.0",
		url: "https://creativecommons.org/publicdomain/zero/1.0/",
	} satisfies LicenseObject,
};
export const openapi: OpenApiVersion = "3.1.0";
