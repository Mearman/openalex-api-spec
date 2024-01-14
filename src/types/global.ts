import { OpenAPIV3_1 } from "openapi-types";

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
	// type ResponseObject = OpenAPIV3_1.ResponseObject;
	type ResponseObject = Omit<OpenAPIV3_1.ResponseObject, "content"> & {
		content: {
			[media: string]: Omit<OpenAPIV3_1.MediaTypeObject, "schema"> & {
				schema: ReferenceObject;
			};
		};
	};
	type CallbackObject = OpenAPIV3_1.CallbackObject;
	type LinkObject = OpenAPIV3_1.LinkObject;
	type EncodingObject = OpenAPIV3_1.EncodingObject;
	type MediaTypeObject = OpenAPIV3_1.MediaTypeObject;
	type DiscriminatorObject = OpenAPIV3_1.DiscriminatorObject;
	type XMLObject = OpenAPIV3_1.XMLObject;
	type PathItemObject = OpenAPIV3_1.PathItemObject;
	type PropertiesSchema = OpenAPIV3_1.SchemaObject["properties"];
	type OperationObject = OpenAPIV3_1.OperationObject;
	type ResponsesObject = OpenAPIV3_1.ResponsesObject;
	type ObjectProperties = OpenAPIV3_1.SchemaObject["properties"];
}
