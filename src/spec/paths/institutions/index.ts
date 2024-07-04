import { institution } from "~/spec/paths/institutions/institution";
import { institutions } from "./institutions";

export const institutionPaths: PathsObject = {
	...institutions,
	...institution,
};
