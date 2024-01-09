import { addResponse, operationContainsResponse } from "~/spec/paths";

export function addResponseToOperationIfNotPresent(operation: OperationObject, code: string, responseRef: Record<string, ResponseObject>) {
	if (!operationContainsResponse(operation, code)) {
		return addResponse(operation, code, responseRef);
	}
	return operation;
}
