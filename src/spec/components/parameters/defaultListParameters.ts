import { refParameter } from "~/spec/components";
import { api_key } from "~/spec/components/parameters/api_key";
import { cursor } from "~/spec/components/parameters/cursor";
import { filter } from "~/spec/components/parameters/filter";
import { group_by_param } from "~/spec/components/parameters/group_by_param";
import { page_param } from "~/spec/components/parameters/page";
import { per_page } from "~/spec/components/parameters/per_page";
import { sample } from "~/spec/components/parameters/sample";
import { search } from "~/spec/components/parameters/search";
import { select } from "~/spec/components/parameters/select";
import { sort } from "~/spec/components/parameters/sort";

export const defaultListParameters: (ParameterObject | ReferenceObject)[] = [
	refParameter({ api_key }),
	refParameter({ cursor }),
	refParameter({ filter }),
	refParameter({ group_by_param }),
	refParameter({ page_param }),
	refParameter({ per_page }),
	refParameter({ sample }),
	refParameter({ search }),
	refParameter({ select }),
	refParameter({ sort }),
];
