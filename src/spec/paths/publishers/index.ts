import { OpenAPIV3_1 } from "openapi-types";
import { group_by } from "spec/components/schemas";
import PathsObject = OpenAPIV3_1.PathsObject;

export const publishers = {
  "/publishers": {
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
                        type: "string",
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
                        alternate_titles: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        cited_by_count: {
                          type: "integer",
                        },
                        country_codes: {
                          items: {
                            type: "string",
                          },
                          type: "array",
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
                            required: [
                              "year",
                              "works_count",
                              "cited_by_count",
                            ],
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
                        hierarchy_level: {
                          type: "integer",
                        },
                        homepage_url: {
                          type: "string",
                        },
                        id: {
                          type: "string",
                        },
                        ids: {
                          properties: {
                            openalex: {
                              type: "string",
                            },
                            ror: {
                              type: "string",
                            },
                            wikidata: {
                              type: "string",
                            },
                          },
                          required: ["openalex", "wikidata"],
                          type: "object",
                        },
                        image_thumbnail_url: {
                          type: "string",
                        },
                        image_url: {
                          type: "string",
                        },
                        lineage: {
                          items: {
                            type: "string",
                          },
                          type: "array",
                        },
                        parent_publisher: {
                          anyOf: [
                            {
                              type: "string",
                            },
                            {
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
                          ],
                        },
                        relevance_score: {
                          type: "number",
                        },
                        roles: {
                          items: {
                            properties: {
                              id: {
                                type: "string",
                              },
                              role: {
                                type: "string",
                              },
                              works_count: {
                                type: "integer",
                              },
                            },
                            required: ["role", "id", "works_count"],
                            type: "object",
                          },
                          type: "array",
                        },
                        sources_api_url: {
                          type: "string",
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
                        works_count: {
                          type: "integer",
                        },
                      },
                      required: [
                        "id",
                        "display_name",
                        "alternate_titles",
                        "hierarchy_level",
                        "parent_publisher",
                        "lineage",
                        "country_codes",
                        "homepage_url",
                        "image_url",
                        "image_thumbnail_url",
                        "works_count",
                        "cited_by_count",
                        "summary_stats",
                        "ids",
                        "counts_by_year",
                        "roles",
                        "sources_api_url",
                        "updated_date",
                        "created_date",
                      ],
                      type: "object",
                    },
                    type: "array",
                  },
                },
                required: ["meta", "results", "group_by"],
                type: "object",
              },
            },
          },
          description: "",
        },
      },

      summary: "/publishers",
    },
  },
  "/publishers/{id}": {
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
                  alternate_titles: {
                    items: {
                      type: "string",
                    },
                    type: "array",
                  },
                  cited_by_count: {
                    type: "integer",
                  },
                  country_codes: {
                    items: {
                      type: "string",
                    },
                    type: "array",
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
                  hierarchy_level: {
                    type: "integer",
                  },
                  homepage_url: {
                    type: "string",
                  },
                  id: {
                    type: "string",
                  },
                  ids: {
                    properties: {
                      openalex: {
                        type: "string",
                      },
                      ror: {
                        type: "string",
                      },
                      wikidata: {
                        type: "string",
                      },
                    },
                    required: ["openalex", "ror", "wikidata"],
                    type: "object",
                  },
                  image_thumbnail_url: {
                    type: "string",
                  },
                  image_url: {
                    type: "string",
                  },
                  lineage: {
                    items: {
                      type: "string",
                    },
                    type: "array",
                  },
                  parent_publisher: {
                    type: "string",
                  },
                  roles: {
                    items: {
                      properties: {
                        id: {
                          type: "string",
                        },
                        role: {
                          type: "string",
                        },
                        works_count: {
                          type: "integer",
                        },
                      },
                      required: ["role", "id", "works_count"],
                      type: "object",
                    },
                    type: "array",
                  },
                  sources_api_url: {
                    type: "string",
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
                    required: ["2yr_mean_citedness", "h_index", "i10_index"],
                    type: "object",
                  },
                  updated_date: {
                    type: "string",
                  },
                  works_count: {
                    type: "integer",
                  },
                },
                required: ["id", "display_name"],
                type: "object",
              },
            },
          },
          description: "",
        },
      },

      summary: "/publishers/{id}",
    },
  },
} satisfies PathsObject;

export default publishers satisfies PathsObject;
