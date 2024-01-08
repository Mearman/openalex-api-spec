import { OpenAPIV3_1 } from "openapi-types";
import { components } from "~/spec/components";
import { info, openapi } from "~/spec/info";
import { externalDocs } from "~/spec/info/externalDocs";
import { paths } from "~/spec/paths";
import { security } from "~/spec/security";
import { servers } from "~/spec/servers";

// export default Object.entries(paths).reduce((acc, [path, pathItem]) => {
// 	// pathItem = Object.entries(pathItem).reduce((acc, [method, operation]) => {
// 	// 	operation.servers = [
// 	// 		{
// 	// 			url: "https://api.osf.io/v2",
// 	// 		},
// 	// 	].concat(operation.servers || []);
// 	// 	acc[method] = operation;
// 	// }, {} as OperationObject);
// 	// acc[path] = pathItem;
// 	// return acc;
//
// 	pathItem = Object.entries(pathItem).reduce((acc, [method, operation]) => {
// 		operation.servers = [
// 			{
// 				url: "https://api.openalex.org/v1",
// 			},
// 		].concat(operation.servers || []);
// 		acc[method] = operation;
// 		return acc;
// 	}, {} as OperationObject);
// 	acc[path] = pathItem;
// }, {} as PathsObject);

// type PerformModificationToPath = (path: PathItemObject, ...args: any) => PathItemObject
//
// export function performModificationToAllPaths(paths: PathsObject, modification: PerformModificationToPath): PathsObject {
// 	return Object.entries(paths).reduce((acc, [path, pathItem]) => {
// 		acc[path] = modification(pathItem);
// 		return acc;
// 	}, {} as PathsObject);
// }
//
// const appendServerToPathItemObject: PerformModificationToPath = (pathItem: PathItemObject, servers: ServerObject[]): PathItemObject => {
// 	return Object.entries(pathItem).reduce((acc, [method, operation]) => {
// 		operation["servers"] = servers.concat(operation["servers"] ?? []);
// 		acc[method] = operation;
// 		return acc;
// 	}, {} as PathItemObject);
// }
//
// export function appendServersToAllOperationsForAllPaths(doc: OpenAPIV3_1_Document): OpenAPIV3_1_Document {
// 	const servers = doc.servers || [];
// 	return {
// 		...doc,
// 		paths: performModificationToAllPaths(doc.paths, (pathItem) => appendServerToPathItemObject(pathItem, servers)),
// 	}
// }

export default {
	info,
	openapi,
	paths,
	security,
	servers,
	components,
	externalDocs,
} satisfies OpenAPIV3_1_Document

declare global {
	type OpenAPIV3_1_Document = OpenAPIV3_1.Document;
	type InfoObject = OpenAPIV3_1.InfoObject;
	type OpenApiVersion = OpenAPIV3_1_Document["openapi"];
	type PathsObject = OpenAPIV3_1.PathsObject;
	type ComponentsObject = OpenAPIV3_1.ComponentsObject;
	type SecurityRequirementObject = OpenAPIV3_1.SecurityRequirementObject;
	type ServerObject = OpenAPIV3_1.ServerObject;
	type TagObject = OpenAPIV3_1.TagObject;
	type ExternalDocumentationObject = OpenAPIV3_1.ExternalDocumentationObject;
	type ReferenceObject = OpenAPIV3_1.ReferenceObject;
	type SchemaObject = OpenAPIV3_1.SchemaObject;
	type ParameterObject = OpenAPIV3_1.ParameterObject;
	type ExampleObject = OpenAPIV3_1.ExampleObject;
	type RequestBodyObject = OpenAPIV3_1.RequestBodyObject;
	type HeaderObject = OpenAPIV3_1.HeaderObject;
	type ResponseObject = OpenAPIV3_1.ResponseObject;
	type CallbackObject = OpenAPIV3_1.CallbackObject;
	type LinkObject = OpenAPIV3_1.LinkObject;
	type EncodingObject = OpenAPIV3_1.EncodingObject;
	type MediaTypeObject = OpenAPIV3_1.MediaTypeObject;
	type DiscriminatorObject = OpenAPIV3_1.DiscriminatorObject;
	type XMLObject = OpenAPIV3_1.XMLObject;
	type PathItemObject = OpenAPIV3_1.PathItemObject;
	type PropertiesSchema = OpenAPIV3_1.SchemaObject["properties"];
}
