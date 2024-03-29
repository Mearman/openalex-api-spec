export const geo = {
	properties: {
		city: {
			type: "string",
		},
		country: {
			type: "string",
		},
		country_code: {
			type: ["string", "null"]
		},
		geonames_city_id: {
			type: ["string", "null"],
		},
		latitude: {
			type: "number",
		},
		longitude: {
			type: "number",
		},
		region: {
			type: ["string", "null"],
		},
	},
	required: [
		"city",
		"geonames_city_id",
		"region",
		"country_code",
		"country",
		"latitude",
		"longitude",
	],
	type: "object",
} satisfies SchemaObject;
