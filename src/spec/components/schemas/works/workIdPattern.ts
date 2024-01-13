const openAlexIdPattern = "W[0-9]+";
const openAlexApiUrlPattern = "https://openalex.org/W[0-9]+";
const doiPattern = "https://doi.org/10.\\d{4,9}/[-._;()/:A-Z0-9]+";
const microsoftAcademicGraphIdPattern = "mag:\\d+";
const pubMedIdPattern = "pmid:\\d+";
const pubMedCentralIdPattern = "pmcid:(PMC)?\\d+";

export const combinedRegexPattern = new RegExp(
	`^(${[
		openAlexIdPattern,
		openAlexApiUrlPattern,
		microsoftAcademicGraphIdPattern,
		doiPattern,
		pubMedIdPattern,
		pubMedCentralIdPattern,
	].join("|")})$`
)
	.toString()
	.slice(1, -1)
	.replace(/\\\//g, "/");
export const workIdPattern = {
	type: "string",
	pattern: combinedRegexPattern,
} as SchemaObject;
