import { mailto } from "~/spec/components/parameters/mailto";
import authors from "~/spec/paths/authors"
import autocomplete from "~/spec/paths/autocomplete";
import concepts from "~/spec/paths/concepts";
import funders from "~/spec/paths/funders";
import institutions from "~/spec/paths/institutions";
import people from "~/spec/paths/people";
import publishers from "~/spec/paths/publishers";
import sources from "~/spec/paths/sources";
import works from "~/spec/paths/works";

export function addParameterToAllPaths(paths: PathsObject): PathsObject {
	return Object.entries(paths).reduce((acc, [path, pathItem]) => {
		return {
			...acc,
			[path]: {
				...pathItem,
				get: {
					...pathItem.get,
					parameters: [
						...(pathItem.get.parameters || []),
						...mailto,
					],
				},
			},
		};
	}, {});
}

export const paths = addParameterToAllPaths({
	...authors,
	...autocomplete,
	...concepts,
	...funders,
	...institutions,
	...people,
	...publishers,
	...sources,
	...works,
}) satisfies PathsObject;
