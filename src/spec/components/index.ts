import { examples } from "~/spec/components/examples";
import { parameters } from "~/spec/components/parameters";
import { pathItems } from "~/spec/components/pathItems";
import { responses } from "~/spec/components/responses";
import { schemas } from "~/spec/components/schemas";

export class ComponentGenerator {
	private static instance: ComponentsObject;

	private constructor() {
		ComponentGenerator.instance = {
			schemas,
			parameters,
			pathItems,
			responses,
			examples,
		};
	}

	static getInstance() {
		if (!this.instance) {
			this.instance = new ComponentGenerator();
		}
		return this.instance;
	}

	static ref<
		T extends keyof ComponentsObject = keyof ComponentsObject,
		K extends ComponentsObject[T] = ComponentsObject[T],
		k extends keyof K = keyof K,
		v extends K[k] = K[k]
	>(
		comp: T,
		obj: K,
		key = Object.keys(obj)[0],
		value = obj[key]
	): ReferenceObject {
		// throw error if obj has more than one key
		if (Object.keys(obj).length > 1) {
			throw new Error(`Object ${obj} has more than one key`);
		}
		// add to instance
		ComponentGenerator.getInstance()[comp] = {
			...ComponentGenerator.getInstance()[comp],
			...obj,
		};
		return {
			$ref: `#/components/${comp}/${key}`,
		};
	}

	static get(): ComponentsObject {
		return ComponentGenerator.getInstance();
	}
}

export const components: ComponentsObject =
	ComponentGenerator.get() satisfies ComponentsObject;

export const ref = ComponentGenerator.ref;

export const refParameter = (obj: Record<string, ParameterObject>) =>
	ComponentGenerator.ref("parameters", obj);
export const refSchema = (obj: Record<string, SchemaObject>) =>
	ComponentGenerator.ref("schemas", obj);
export const refResponse = (obj: Record<string, ResponseObject>) =>
	ComponentGenerator.ref("responses", obj);
export const refExample = (obj: Record<string, ExampleObject>) =>
	ComponentGenerator.ref("examples", obj);
export const refPathItem = (obj: Record<string, PathItemObject>) =>
	ComponentGenerator.ref("pathItems", obj);
export const refHeader = (obj: Record<string, HeaderObject>) =>
	ComponentGenerator.ref("headers", obj);
