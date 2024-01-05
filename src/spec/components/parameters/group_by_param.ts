export const group_by_param: ParameterObject = {
	in: "query",
	name: "group-by",
	required: false,
	schema: {
		type: "string",
	},
} satisfies ParameterObject;
