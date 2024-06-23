import { refHeader } from "~/spec/components";

const nelHeader: HeaderObject = {
	required: false,
	schema: {
		type: "string",
	},
};

const reportingEndpointsHeader: HeaderObject = {
	required: false,
	schema: {
		type: "string",
	},
};

const refReportingEndpoints = refHeader({
	"Reporting-Endpoints": reportingEndpointsHeader,
});

const xApiPoolHeader: HeaderObject = {
	required: false,
	schema: {
		type: "string",
	},
};

const refHeaderXApiPool = refHeader({
	"X-Api-Pool": xApiPoolHeader,
});

const contentOptionsSchema: HeaderObject = {
	required: false,
	schema: {
		type: "string",
	},
};

const refContentOptionsSchema = refHeader({
	"X-Content-Type-Options": contentOptionsSchema,
});

const refHeaderNel = refHeader({
	Nel: nelHeader,
});

export const responseHeaders: HeadersRecord = {
	Nel: refHeaderNel,
	"Reporting-Endpoints": refReportingEndpoints,
	"X-Api-Pool": refHeaderXApiPool,
	"X-Content-Type-Options": refContentOptionsSchema,
};
