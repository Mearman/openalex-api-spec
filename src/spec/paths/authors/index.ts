import { OpenAPIV3_1 } from "openapi-types";
import author from "spec/paths/authors/author";
import authors from "spec/paths/authors/authors";
import PathsObject = OpenAPIV3_1.PathsObject;

const paths: PathsObject = {
  ...author,
  ...authors,
};
export default paths;
