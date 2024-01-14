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
function convertMarkdownToJupyterNotebook(markdown: string): JupyterNotebook {
	const segments = markdown.split(/(```(?:python|bash|sh)\n[\s\S]*?\n```)/g);

	const cells = segments.map((segment): NotebookCell => {
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
	const notebook = convertMarkdownToJupyterNotebook(markdownContent);
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
