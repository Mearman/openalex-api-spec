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
	>(comp: T, obj: K, referenceKey = Object.keys(obj)[0]): ReferenceObject {
		// throw error if obj has more than one key
		if (Object.keys(obj).length != 1) {
			throw new Error(
				`Tried to create a reference to an object with more than one key: ${JSON.stringify(
					obj
				)}`
			);
		}
		const key = Object.keys(obj)[0];

		if (!key) {
			throw new Error(
				`Key is not defined. While creating a reference with ${JSON.stringify(
					obj
				)} in ${JSON.stringify(comp)}.`
			);
		}
		const value = obj[key];
		if (!value) {
			throw new Error(
				`Value is not defined. While creating a reference with ${JSON.stringify(
					obj
				)} from in ${JSON.stringify(comp)}.`
			);
		}

		if (!referenceKey) {
			throw new Error(
				`Reference key is not defined. While creating a reference with ${JSON.stringify(
					obj
				)} from in ${JSON.stringify(comp)}.`
			);
		}

		const existing = ComponentGenerator.getInstance()[comp]?.[referenceKey];
		if (existing) {
			if (existing !== value) {
				throw new Error(
					`Tried to create reference ${JSON.stringify(
						referenceKey
					)} with a different value than the existing one: ${JSON.stringify(
						obj
					)} in ${JSON.stringify(comp)}.`
				);
			}
			return {
				$ref: `#/components/${comp}/${referenceKey}`,
			};
		}

		const newObj = {
			[referenceKey]: value,
		};

		// add to instance
		ComponentGenerator.getInstance()[comp] = {
			...ComponentGenerator.getInstance()[comp],
			...newObj,
		};
		return {
			$ref: `#/components/${comp}/${referenceKey}`,
		};
	}

	static get(): ComponentsObject {
		return ComponentGenerator.getInstance();
	}
}

export const components: ComponentsObject =
	ComponentGenerator.get() satisfies ComponentsObject;

export const ref = ComponentGenerator.ref;

export const refParameter = (
	obj: Record<string, ParameterObject>,
	key?: string
): ReferenceObject => ComponentGenerator.ref("parameters", obj, key);

export const refSchema = (
	obj: Record<string, SchemaObject>,
	key?: string
): ReferenceObject => ComponentGenerator.ref("schemas", obj, key);

export const refResponse = (
	obj: Record<string, ResponseObject>,
	key?: string
): ReferenceObject => ComponentGenerator.ref("responses", obj, key);

export const refExample = (
	obj: Record<string, ExampleObject>,
	key?: string
): ReferenceObject => ComponentGenerator.ref("examples", obj, key);

export const refPathItem = (
	obj: Record<string, PathItemObject>,
	key?: string
): ReferenceObject => ComponentGenerator.ref("pathItems", obj, key);

export const refHeader = (
	obj: Record<string, HeaderObject>,
	key?: string
): ReferenceObject => ComponentGenerator.ref("headers", obj, key);
