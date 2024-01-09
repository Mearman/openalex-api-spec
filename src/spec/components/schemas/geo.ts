export const geo = {
	properties: {
		city: {
			type: "string",
		},
		country: {
			type: "string",
		},
		country_code: {
			type: "string",
		},
		geonames_city_id: {
			type: "string",
		},
		latitude: {
			type: "number",
		},
		longitude: {
			type: "number",
		},
		region: {
			type: "string",
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
