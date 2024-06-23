import { OpenAPIV3 } from "openapi-types";

const headers: {
	[p: string]: OpenAPIV3.ReferenceObject | OpenAPIV3.HeaderObject;
} = {
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
};

export const domains = {
	"/domains/id": {
		get: {
			parameters: [
				{
					in: "path",
					name: "id",
					required: true,
					schema: {
						pattern: "^[0-9]+$",
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
					headers: headers,
				},
			},
		},
	},
} satisfies PathsObject;

const parameters: (OpenAPIV3.ReferenceObject | OpenAPIV3.ParameterObject)[] = [
	{
		in: "path",
		name: "id",
		required: true,
		schema: {
			type: "string",
		},
	},
	{
		name: "mailto",
		in: "query",
		required: false,
		schema: {
			type: "string",
		},
	},
	{
		name: "per-page",
		in: "query",
		required: false,
		schema: {
			type: "string",
		},
	},
];

type SchemaTypeDefinition =
	| OpenAPIV3.ReferenceObject
	| OpenAPIV3.ArraySchemaObject
	| OpenAPIV3.NonArraySchemaObject;

const singleTopic: SchemaTypeDefinition = {
	type: "object",
	properties: {
		display_name: {
			type: "string",
		},
		id: {
			type: "string",
		},
	},
	required: ["id", "display_name"],
};

const topicList: SchemaTypeDefinition = {
	type: "array",
	items: singleTopic,
};

const ids: SchemaTypeDefinition = {
	properties: {
		wikidata: {
			type: "string",
		},
		wikipedia: {
			type: "string",
		},
	},
	required: ["wikidata", "wikipedia"],
	type: "object",
};

export const fields = {
	"/fields/{id}": {
		get: {
			parameters: parameters,
			responses: {
				"200": {
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									cited_by_count: {
										type: "integer",
									},
									created_date: {
										type: "string",
									},
									description: {
										type: "string",
									},
									display_name: {
										type: "string",
									},
									display_name_alternatives: {
										type: "array",
										items: {
											type: "string",
										},
									},
									domain: singleTopic,
									id: {
										type: "string",
									},
									ids: ids,
									siblings: topicList,
									subfields: topicList,
									updated_date: {
										type: "string",
									},
									works_api_url: {
										type: "string",
									},
									works_count: {
										type: "integer",
									},
								},
								required: [
									"id",
									"display_name",
									"description",
									"ids",
									"display_name_alternatives",
									"domain",
									"subfields",
									"siblings",
									"works_count",
									"cited_by_count",
									"works_api_url",
									"updated_date",
									"created_date",
								],
							},
						},
					},
					description: "",
					headers: headers,
				},
			},
			security: [],
		},
	},
} satisfies PathsObject;

export const subfields = {
	"/subfields/{id}": {
		get: {
			parameters: parameters,
			responses: {
				"200": {
					content: {
						"application/json": {
							schema: {
								properties: {
									cited_by_count: {
										type: "integer",
									},
									created_date: {
										type: "string",
									},
									description: {
										type: "string",
									},
									display_name: {
										type: "string",
									},
									display_name_alternatives: {
										type: "array",
										items: {
											type: "string",
										},
									},
									domain: singleTopic,
									field: singleTopic,
									id: {
										type: "string",
									},
									ids: ids,
									siblings: topicList,
									topics: topicList,
									updated_date: {
										type: "string",
									},
									works_api_url: {
										type: "string",
									},
									works_count: {
										type: "integer",
									},
								},
								required: [
									"id",
									"display_name",
									"description",
									"ids",
									"display_name_alternatives",
									"field",
									"domain",
									"topics",
									"siblings",
									"works_count",
									"cited_by_count",
									"works_api_url",
									"updated_date",
									"created_date",
								],
								type: "object",
							},
						},
					},
					description: "",
					headers: headers,
				},
			},
			security: [],
		},
	},
} satisfies PathsObject;

export const topics = {
	"/topics/{id}": {
		get: {
			parameters: parameters,
			responses: {
				"200": {
					content: {
						"application/json": {
							schema: {
								type: "object",
								properties: {
									cited_by_count: {
										type: "integer",
									},
									created_date: {
										type: "string",
									},
									description: {
										type: "string",
									},
									display_name: {
										type: "string",
									},
									domain: singleTopic,
									field: singleTopic,
									id: {
										type: "string",
									},
									ids: {
										type: "object",
										properties: {
											openalex: {
												type: "string",
											},
											wikipedia: {
												type: "string",
											},
										},
										required: ["openalex", "wikipedia"],
									},
									keywords: {
										type: "array",
										items: {
											type: "string",
										},
									},
									siblings: topicList,
									subfield: singleTopic,
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
									"description",
									"keywords",
									"ids",
									"subfield",
									"field",
									"domain",
									"siblings",
									"works_count",
									"cited_by_count",
									"updated_date",
									"created_date",
								],
							},
						},
					},
					description: "",
					headers: headers,
				},
			},
			security: [],
		},
	},
} satisfies PathsObject;
