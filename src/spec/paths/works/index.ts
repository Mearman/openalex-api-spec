import { OpenAPIV3_1 } from "openapi-types";
import { work, workNgrams } from "spec/paths/works/work";
import { works } from "spec/paths/works/works";
import PathsObject = OpenAPIV3_1.PathsObject;

export default {
  "/works": works,
  "/works/10.1103/physrevb.37.785/ngrams": {
    get: {
      description: "",
      responses: {
        "200": {
          content: {
            "application/json": {
              schema: {
                properties: {
                  meta: {
                    properties: {
                      count: {
                        type: "integer",
                      },
                      doi: {
                        type: "string",
                      },
                      openalex_id: {
                        type: "string",
                      },
                    },
                    required: ["count", "doi", "openalex_id"],
                    type: "object",
                  },
                  ngrams: {
                    items: {
                      properties: {
                        ngram: {
                          type: "string",
                        },
                        ngram_count: {
                          type: "integer",
                        },
                        ngram_tokens: {
                          type: "integer",
                        },
                        term_frequency: {
                          type: "number",
                        },
                      },
                      required: [
                        "ngram",
                        "ngram_count",
                        "ngram_tokens",
                        "term_frequency",
                      ],
                      type: "object",
                    },
                    type: "array",
                  },
                },
                required: ["meta", "ngrams"],
                type: "object",
              },
            },
          },
          description: "",
        },
      },

      summary: "/works/10.1103/physrevb.37.785/ngrams",
    },
  },
  "/works/https://doi.org/10.7717/peerj.4375": {
    get: {
      description: "",
      responses: {
        "200": {
          content: {
            "application/json": {},
          },
          description: "",
        },
      },

      summary: "/works/https://doi.org/10.7717/peerj.4375",
    },
  },
  "/works/{id}": work,
  "/works/{id}/ngrams": workNgrams,
} satisfies PathsObject satisfies PathsObject;
