import { OpenAPIV3_1 } from "openapi-types";
import PathsObject = OpenAPIV3_1.PathsObject;

export const works = {
  "/works": {
    get: {
      description: "",
      parameters: [
        {
          in: "query",
          name: "filter",
          required: false,
          schema: {
            type: "string",
          },
        },
        {
          in: "query",
          name: "api_key",
          required: false,
          schema: {
            type: "string",
          },
        },
        {
          in: "query",
          name: "per-page",
          required: false,
          schema: {
            type: "string",
          },
        },
        {
          in: "query",
          name: "cursor",
          required: false,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        "403": {
          content: {
            "application/json": {
              schema: {
                properties: {
                  error: {
                    type: "string",
                  },
                  message: {
                    type: "string",
                  },
                },
                required: ["error", "message"],
                type: "object",
              },
            },
          },
          description: "",
          headers: {
            Nel: {
              required: false,
              schema: {
                type: "string",
              },
            },
            "Reporting-Endpoints": {
              required: false,
              schema: {
                type: "string",
              },
            },
            "X-Api-Pool": {
              required: false,
              schema: {
                type: "string",
              },
            },
            "X-Content-Type-Options": {
              required: false,
              schema: {
                type: "string",
              },
            },
          },
        },
      },
      security: [],
      summary: "/works",
    },
  },
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
          headers: {
            Nel: {
              required: false,
              schema: {
                type: "string",
              },
            },
            "Reporting-Endpoints": {
              required: false,
              schema: {
                type: "string",
              },
            },
            "X-Api-Pool": {
              required: false,
              schema: {
                type: "string",
              },
            },
            "X-Content-Type-Options": {
              required: false,
              schema: {
                type: "string",
              },
            },
          },
        },
      },
      security: [],
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
          headers: {
            Nel: {
              required: false,
              schema: {
                type: "string",
              },
            },
            "Reporting-Endpoints": {
              required: false,
              schema: {
                type: "string",
              },
            },
            "X-Api-Pool": {
              required: false,
              schema: {
                type: "string",
              },
            },
            "X-Content-Type-Options": {
              required: false,
              schema: {
                type: "string",
              },
            },
          },
        },
      },
      security: [],
      summary: "/works/https://doi.org/10.7717/peerj.4375",
    },
  },
  "/works/{id}": {
    get: {
      description: "",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "string",
          },
        },
        {
          in: "query",
          name: "select",
          required: false,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        "200": {
          content: {
            "application/json": {
              schema: {
                properties: {
                  display_name: {
                    type: "string",
                  },
                  id: {
                    type: "string",
                  },
                },
                required: ["id", "display_name"],
                type: "object",
              },
            },
          },
          description: "",
          headers: {
            Nel: {
              required: false,
              schema: {
                type: "string",
              },
            },
            "Reporting-Endpoints": {
              required: false,
              schema: {
                type: "string",
              },
            },
            "X-Api-Pool": {
              required: false,
              schema: {
                type: "string",
              },
            },
            "X-Content-Type-Options": {
              required: false,
              schema: {
                type: "string",
              },
            },
          },
        },
      },
      security: [],
      summary: "/works/{id}",
    },
  },
  "/works/{id}/ngrams": {
    get: {
      description: "",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        "200": {
          content: {
            "application/json": {},
          },
          description: "",
          headers: {
            Nel: {
              required: false,
              schema: {
                type: "string",
              },
            },
            "Reporting-Endpoints": {
              required: false,
              schema: {
                type: "string",
              },
            },
            "X-Api-Pool": {
              required: false,
              schema: {
                type: "string",
              },
            },
            "X-Content-Type-Options": {
              required: false,
              schema: {
                type: "string",
              },
            },
          },
        },
      },
      security: [],
      summary: "/works/{id}/ngrams",
    },
  },
} satisfies PathsObject;

export default works satisfies PathsObject;
