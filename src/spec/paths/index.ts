import { OpenAPIV3_1 } from "openapi-types";
import authors from "spec/paths/authors";
import autoCompletePaths from "spec/paths/autocomplete";
import concepts from "spec/paths/concepts";
import funders from "spec/paths/funders";
import institutions from "spec/paths/institutions";
import people from "spec/paths/people";
import publishers from "spec/paths/publishers";
import sources from "spec/paths/sources";
import works from "spec/paths/works";
import PathsObject = OpenAPIV3_1.PathsObject;

export default {
  ...authors,
  ...autoCompletePaths,
  ...concepts,
  ...funders,
  ...institutions,
  ...people,
  ...publishers,
  ...sources,
  ...works

} satisfies PathsObject;
