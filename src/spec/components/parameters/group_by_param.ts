export const group_by_param: ParameterObject = {
	in: "query",
	name: "group-by",
	required: false,
	schema: {
		type: "string",
	},
} satisfies ParameterObject;
export const group_by_underscore_param = {
	in: "query",
	name: "group_by",
	required: false,
	schema: {
		type: "string",
	},
} satisfies ParameterObject;
