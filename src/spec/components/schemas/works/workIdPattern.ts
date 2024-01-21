const openAlexIdPattern: RegExp = /^W[0-9]+$/;
const openAlexApiUrlPattern: RegExp = /^https:\/\/openalex.org\/W[0-9]+$/;
const doiPattern: RegExp = /^https:\/\/doi.org\/10.\d{4,9}\/[-._;()\/:a-zA-Z0-9]+$/;
const microsoftAcademicGraphIdPattern: RegExp = /^mag:\d+$/;
const pubMedIdPattern: RegExp = /^pmid:\d+$/;
const pubMedCentralIdPattern: RegExp = /^pmcid:(PMC)?\d+$/;

const regexArray: RegExp[] = [
	openAlexIdPattern,
	openAlexApiUrlPattern,
	microsoftAcademicGraphIdPattern,
	doiPattern,
	pubMedIdPattern,
	pubMedCentralIdPattern,
] satisfies RegExp[];

const combinedRegexPattern: string = regexArray
	.map(x => x.source)
	.map(x => `(${x})`)
	.join("|");

export { combinedRegexPattern };

export const workIdPattern = {
	type: "string",
	pattern: combinedRegexPattern,
} as SchemaObject;
