import { refParameter } from "~/spec/components";
import { group_by_param } from "~/spec/components/parameters/group_by_param";

export const defaultListParameters: (ParameterObject | ReferenceObject)[] = [
	{
		in: "query",
		name: "filter",
		required: false,
		schema: {
			type: "string",
		},
	},
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
]
