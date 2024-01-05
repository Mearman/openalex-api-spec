export function addTags(paths: PathsObject[], tags: string[]): PathsObject {
	return Object.assign(
		{},
		...paths.map((path) =>
			Object.fromEntries(
				Object.entries(path).map(([key, value]) => [
					key,
					{
						...value,
						get: {
							...value.get,
							tags: tags.concat(value.get["tags"] || []),
						},
					},
				])
			)
		)
	);
}
