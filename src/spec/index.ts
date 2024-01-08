import { components } from "~/spec/components";
import { info, openapi } from "~/spec/info";
import { externalDocs } from "~/spec/info/externalDocs";
import { paths } from "~/spec/paths";
import { security } from "~/spec/security";
import { servers } from "~/spec/servers";

export const doc = {
	info,
	openapi,
	paths,
	security,
	servers,
	components,
	externalDocs,
} satisfies OpenAPIV3_1_Document;

export const getDoc = (): OpenAPIV3_1_Document => doc;
