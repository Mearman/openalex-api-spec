import { OpenAPIV3_1 } from "openapi-types";
import ComponentsObject = OpenAPIV3_1.ComponentsObject;
import ParameterObject = OpenAPIV3_1.ParameterObject;

export const parameters = {} satisfies ComponentsObject["parameters"];
const filters = [
	"abstract.search", "apc_list.currency", "apc_list.provenance", "apc_list.value", "apc_list.value_usd", "apc_paid.currency", "apc_paid.provenance", "apc_paid.value", "apc_paid.value_usd", "author.id", "author.orcid", "authors_count", "authorships.author.id", "authorships.author.orcid", "authorships.countries", "authorships.institutions.continent", "authorships.institutions.country_code", "authorships.institutions.id", "authorships.institutions.is_global_south", "authorships.institutions.lineage", "authorships.institutions.ror", "authorships.institutions.type", "authorships.is_corresponding", "best_oa_location.is_accepted", "best_oa_location.is_oa", "best_oa_location.is_published", "best_oa_location.landing_page_url", "best_oa_location.license", "best_oa_location.source.host_organization", "best_oa_location.source.host_organization_lineage", "best_oa_location.source.id", "best_oa_location.source.is_in_doaj", "best_oa_location.source.is_oa", "best_oa_location.source.issn", "best_oa_location.source.type", "best_oa_location.version", "best_open_version", "cited_by", "cited_by_count", "cited_by_percentile_year.max", "cited_by_percentile_year.min", "cites", "concept.id", "concepts.id", "concepts.wikidata", "concepts_count", "corresponding_author_ids", "corresponding_institution_ids", "countries_distinct_count", "default.search", "display_name", "display_name.search", "doi", "doi_starts_with", "from_created_date", "from_publication_date", "fulltext.search", "fulltext_origin", "grants.award_id", "grants.funder", "has_abstract", "has_doi", "has_fulltext", "has_ngrams", "has_oa_accepted_or_published_version", "has_oa_submitted_version", "has_old_authors", "has_orcid", "has_pdf_url", "has_pmcid", "has_pmid", "has_raw_affiliation_string", "has_references", "host_venue.id", "ids.mag", "ids.openalex", "ids.pmcid", "ids.pmid", "institution.id", "institutions.continent", "institutions.country_code", "institutions.id", "institutions.is_global_south", "institutions.ror", "institutions.type", "institutions_distinct_count", "is_corresponding", "is_oa", "is_paratext", "is_retracted", "journal", "keyword.search", "keywords.keyword", "language", "locations.is_accepted", "locations.is_oa", "locations.is_published", "locations.landing_page_url", "locations.license", "locations.source.has_issn", "locations.source.host_institution_lineage", "locations.source.host_organization", "locations.source.host_organization_lineage", "locations.source.id", "locations.source.is_in_doaj", "locations.source.is_oa", "locations.source.issn", "locations.source.publisher_lineage", "locations.source.type", "locations.version", "locations_count", "mag", "oa_status", "open_access.any_repository_has_fulltext", "open_access.is_oa", "open_access.oa_status", "openalex", "openalex_id", "pmcid", "pmid", "primary_location.is_accepted", "primary_location.is_oa", "primary_location.is_published", "primary_location.landing_page_url", "primary_location.license", "primary_location.source.has_issn", "primary_location.source.host_institution_lineage", "primary_location.source.host_organization", "primary_location.source.host_organization_lineage", "primary_location.source.id", "primary_location.source.is_in_doaj", "primary_location.source.is_oa", "primary_location.source.issn", "primary_location.source.publisher_lineage", "primary_location.source.type", "primary_location.version", "publication_date", "publication_year", "raw_affiliation_string.search", "referenced_works", "referenced_works_count", "related_to", "repository", "sustainable_development_goals.id", "sustainable_development_goals.score", "title.search", "title_and_abstract.search", "to_publication_date", "to_updated_date", "type", "type_crossref", "version"
]
export const filterRegex = new RegExp(`^(${
	filters
	.map(key => key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
	.map(s=>`(${s})`)
	.join("|")
}):.+`)
const filterPattern = filterRegex.source;
export const filterWorks = {
	in: "query",
	name: "filter",
	required: false,
	style: "form",
	// https://docs.openalex.org/api-entities/works/filter-works
	description: [
		"Filter works by a specific field.",
		"See the [filter works](https://docs.openalex.org/api-entities/works/filter-works) documentation for more information.",
		"Valid filters are:",
		"\n",
		filters.map(key => "- `" + key + "`").join("\n")
	].join("\n"),
	examples: {
		...filters.reduce((acc, key) => ({
			...acc,
			[key]: {
				value: `${key}:`,
				description: `Search for works with ${key}`,
			}
		}), {})
	},
	schema: {
		pattern: filterPattern,
		type: "string",
	},
} satisfies ParameterObject
export const api_key = {
	in: "query",
	name: "api_key",
	required: false,
	schema: {
		type: "string",
	},
} satisfies ParameterObject
export const per_page = {
	in: "query",
	name: "per-page",
	required: false,
	examples: {
		"1": {
			value: 1,
		}
	},
	schema: {
		type: "integer",
	},
} satisfies ParameterObject;
export const cursor = {
	in: "query",
	name: "cursor",
	required: false,
	schema: {
		type: "string",
	},
} satisfies ParameterObject;
