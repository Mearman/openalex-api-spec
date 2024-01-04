import { OpenAPIV3_1 } from "openapi-types";
import PathsObject = OpenAPIV3_1.PathsObject;

export const sources = {
  "/sources": {
    get: {
      description: "",
      parameters: [
        {
          in: "query",
          name: "group_by",
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
      summary: "/sources",
    },
  },
  "/sources/{id}": {
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
        },
      },
      summary: "/sources/{id}",
    },
  },
} satisfies PathsObject;

export default sources satisfies PathsObject;
