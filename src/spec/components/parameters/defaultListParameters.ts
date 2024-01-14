import { refParameter } from "~/spec/components";
import { filter } from "~/spec/components/parameters/filter";
import { group_by_param, group_by_underscore_param } from "~/spec/components/parameters/group_by_param";
import { page_param } from "~/spec/components/parameters/page";
import { per_page } from "~/spec/components/parameters/per_page";
import { sample } from "~/spec/components/parameters/sample";
import { search } from "~/spec/components/parameters/search";
import { select } from "~/spec/components/parameters/select";
import { sort } from "~/spec/components/parameters/sort";

export const defaultListParameters: (ParameterObject | ReferenceObject)[] = [
	refParameter({ filter }),
	refParameter({ group_by_param }),
	refParameter({ group_by_underscore_param }),
	refParameter({ per_page }),
	refParameter({ page_param }),
	refParameter({ sample }),
	refParameter({ search }),
	refParameter({ select }),
	refParameter({ sort }),
];
