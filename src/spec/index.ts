import { OpenAPIV3_1 } from "openapi-types";
import components from "spec/components";
import paths from "spec/paths";
import Document = OpenAPIV3_1.Document;
import SecurityRequirementObject = OpenAPIV3_1.SecurityRequirementObject;

const security: SecurityRequirementObject[] = [];

export const data: Document = {
  components,
  info: {
    description:
      "A specification generated by [openapi-devtools](https://github.com/AndrewWalsh/openapi-devtools). Contains 29 endpoints.",
    title: "OpenAPI Specification",
    version: "1.0.0",
  },
  openapi: "3.1.0",
  paths,
  security,
  servers: [
    {
      url: "https://api.openalex.org/",
    },
  ],
};

export default data satisfies Document;