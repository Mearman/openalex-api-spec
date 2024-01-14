#!/usr/bin/env npx -y tsx
import * as fs from "fs";

// Define the structure of a Jupyter Notebook cell
interface NotebookCell {
	cell_type: "markdown" | "code";
	metadata: {};
	source: string[];
}

// Define the structure of a Jupyter Notebook
interface JupyterNotebook {
	cells: NotebookCell[];
	metadata: {
		kernelspec: {
			display_name: string;
			language: string;
			name: string;
		};
		language_info: {
			codemirror_mode: {
				name: string;
				version: number;
			};
			file_extension: string;
			mimetype: string;
			name: string;
			pygments_lexer: string;
			version: string;
		};
	};
	nbformat: number;
	nbformat_minor: number;
}

// Function to convert Markdown to a Jupyter Notebook
function convertMarkdownToJupyterNotebook(
	markdown: string,
	removeCells?: RegExp[],
	removeLines?: RegExp[]
): JupyterNotebook {
	const segments = markdown
		.trim()
		.split(/(```(?:python|bash|sh)\n[\s\S]*?\n```)/g);

	const cells = segments
		.map((segment): NotebookCell => {
			if (segment.startsWith("```python")) {
				return {
					cell_type: "code",
					metadata: {},
					source: segment.replace(/```python\n|```/g, "").split("\n"),
				};
			} else if (segment.startsWith("```bash") || segment.startsWith("```sh")) {
				return {
					cell_type: "code",
					metadata: {},
					source: ["%%bash"].concat(
						segment.replace(/```(?:bash|sh)\n|```/g, "").split("\n")
					),
				};
			} else {
				return {
					cell_type: "markdown",
					metadata: {},
					source: segment.split("\n"),
				};
			}
		})
		.filter((cell) => {
			if (!removeCells) {
				return true;
			} else if (removeCells.length > 0) {
				return !removeCells.some((regex) =>
					cell.source.join("\n").match(regex)
				);
			} else {
				return true;
			}
		})
		.map((cell) => {
			if (!(removeLines || removeLines.length > 0)) {
				return cell;
			}
			cell.source = cell.source.filter((line: string) => {
				if (removeLines.length > 0) {
					return !removeLines.some((regex) => line.match(regex));
				} else {
					return true;
				}
			});
			return cell;
		})
		.map((cell) => {
			cell.source = cell.source.map((line) => line + "\n");
			return cell;
		});

	const notebook: JupyterNotebook = {
		cells: cells.filter((cell) => cell.source.join("\n").trim() !== ""),
		metadata: {
			kernelspec: {
				display_name: "Python 3",
				language: "python",
				name: "python3",
			},
			language_info: {
				codemirror_mode: {
					name: "ipython",
					version: 3,
				},
				file_extension: ".py",
				mimetype: "text/x-python",
				name: "python",
				pygments_lexer: "ipython3",
				version: "3.8.5",
			},
		},
		nbformat: 4,
		nbformat_minor: 4,
	};

	return notebook;
}

export function markdown2notebook(input: fs.PathLike, output: fs.PathLike) {
	console.log(`Converting ${input} to ${output}`);
	const markdownContent = fs.readFileSync(input, "utf-8");
	const notebook = convertMarkdownToJupyterNotebook(
		markdownContent,
		[
			/Setuptools/gi,
			/setup.py/gi,
			/^\s*import openalex_api\s*$/gi
		], [
		/Then import the package/gi
	]);
	fs.writeFileSync(output, JSON.stringify(notebook, null, "\t"));
	console.log(`Wrote ${output}`);
	return notebook;
}

export function main() {
	const input = process.argv[2];
	const output = process.argv[3];
	if (!input || !output) {
		console.log(`Usage: markdown2notebook <input> <output>`);
		process.exit(1);
	}
	markdown2notebook(input, output);
}

if (require.main === module) {
	main();
}
