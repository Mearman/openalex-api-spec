import { OpenAPIV3_1 } from "openapi-types";
import { group_by } from "spec/components/schemas";
import PathItemObject = OpenAPIV3_1.PathItemObject;
import PathsObject = OpenAPIV3_1.PathsObject;



const authors: PathItemObject = {
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
        name: "group-by",
        required: false,
        schema: {
          type: "string",
        },
      },
      {
        in: "query",
        name: "group_by",
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
        name: "page",
        required: false,
        schema: {
          type: "string",
        },
      },
      {
        in: "query",
        name: "sample",
        required: false,
        schema: {
          type: "string",
        },
      },
      {
        in: "query",
        name: "search",
        required: false,
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
      {
        in: "query",
        name: "sort",
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
                group_by,
                meta: {
                  properties: {
                    count: {
                      type: "integer",
                    },
                    db_response_time_ms: {
                      type: "integer",
                    },
                    groups_count: {
                      type: "integer",
                    },
                    page: {
                      type: "integer",
                    },
                    per_page: {
                      type: "integer",
                    },
                  },
                  required: [
                    "count",
                    "db_response_time_ms",
                    "page",
                    "per_page",
                    "groups_count",
                  ],
                  type: "object",
                },
                results: {
                  items: {
                    properties: {
                      affiliations: {
                        items: {
                          properties: {
                            institution: {
                              properties: {
                                country_code: {
                                  type: "string",
                                },
                                display_name: {
                                  type: "string",
                                },
                                id: {
                                  type: "string",
                                },
                                lineage: {
                                  items: {
                                    type: "string",
                                  },
                                  type: "array",
                                },
                                ror: {
                                  type: "string",
                                },
                                type: {
                                  type: "string",
                                },
                              },
                              required: [
                                "id",
                                "ror",
                                "display_name",
                                "country_code",
                                "type",
                                "lineage",
                              ],
                              type: "object",
                            },
                            years: {
                              items: {
                                type: "integer",
                              },
                              type: "array",
                            },
                          },
                          required: ["institution", "years"],
                          type: "object",
                        },
                        type: "array",
                      },
                      cited_by_count: {
                        type: "integer",
                      },
                      counts_by_year: {
                        items: {
                          properties: {
                            cited_by_count: {
                              type: "integer",
                            },
                            works_count: {
                              type: "integer",
                            },
                            year: {
                              type: "integer",
                            },
                          },
                          required: ["year", "works_count", "cited_by_count"],
                          type: "object",
                        },
                        type: "array",
                      },
                      created_date: {
                        type: "string",
                      },
                      display_name: {
                        type: "string",
                      },
                      display_name_alternatives: {
                        items: {
                          type: "string",
                        },
                        type: "array",
                      },
                      id: {
                        type: "string",
                      },
                      ids: {
                        properties: {
                          openalex: {
                            type: "string",
                          },
                          orcid: {
                            type: "string",
                          },
                          scopus: {
                            type: "string",
                          },
                          wikipedia: {
                            type: "string",
                          },
                        },
                        required: ["openalex"],
                        type: "object",
                      },
                      last_known_institution: {
                        properties: {
                          country_code: {
                            type: "string",
                          },
                          display_name: {
                            type: "string",
                          },
                          id: {
                            type: "string",
                          },
                          lineage: {
                            items: {
                              type: "string",
                            },
                            type: "array",
                          },
                          ror: {
                            type: "string",
                          },
                          type: {
                            type: "string",
                          },
                        },
                        required: [
                          "id",
                          "ror",
                          "display_name",
                          "country_code",
                          "type",
                          "lineage",
                        ],
                        type: "object",
                      },
                      last_known_institutions: {
                        items: {
                          properties: {
                            country_code: {
                              type: "string",
                            },
                            display_name: {
                              type: "string",
                            },
                            id: {
                              type: "string",
                            },
                            lineage: {
                              items: {
                                type: "string",
                              },
                              type: "array",
                            },
                            ror: {
                              type: "string",
                            },
                            type: {
                              type: "string",
                            },
                          },
                          required: [
                            "id",
                            "ror",
                            "display_name",
                            "country_code",
                            "type",
                            "lineage",
                          ],
                          type: "object",
                        },
                        type: "array",
                      },
                      orcid: {
                        type: "string",
                      },
                      relevance_score: {
                        type: "number",
                      },
                      summary_stats: {
                        properties: {
                          "2yr_mean_citedness": {
                            type: "number",
                          },
                          h_index: {
                            type: "integer",
                          },
                          i10_index: {
                            type: "integer",
                          },
                        },
                        required: [
                          "2yr_mean_citedness",
                          "h_index",
                          "i10_index",
                        ],
                        type: "object",
                      },
                      updated_date: {
                        type: "string",
                      },
                      works_api_url: {
                        type: "string",
                      },
                      works_count: {
                        type: "integer",
                      },
                      x_concepts: {
                        items: {
                          properties: {
                            display_name: {
                              type: "string",
                            },
                            id: {
                              type: "string",
                            },
                            level: {
                              type: "integer",
                            },
                            score: {
                              type: "number",
                            },
                            wikidata: {
                              type: "string",
                            },
                          },
                          required: [
                            "id",
                            "wikidata",
                            "display_name",
                            "level",
                            "score",
                          ],
                          type: "object",
                        },
                        type: "array",
                      },
                    },
                    required: ["id", "orcid", "display_name"],
                    type: "object",
                  },
                  type: "array",
                },
              },
              required: ["meta", "group_by"],
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
    summary: "/authors",
  },
};
export default {
  "/authors": authors,
} satisfies PathsObject;
