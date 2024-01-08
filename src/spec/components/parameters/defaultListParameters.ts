import { refParameter } from "~/spec/components";
import { filter } from "~/spec/components/parameters/filter";
import { group_by_param } from "~/spec/components/parameters/group_by_param";
import { search } from "~/spec/components/parameters/search";

export const defaultListParameters: (ParameterObject | ReferenceObject)[] = [
	refParameter({filter}),
	refParameter({group_by_param}),
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
	refParameter({search}),
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
]
