import { OpenAPIV3_1 } from "openapi-types";
import PathItemObject = OpenAPIV3_1.PathItemObject;

export const work: PathItemObject = {
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

    summary: "/works/{id}",
  },
};
