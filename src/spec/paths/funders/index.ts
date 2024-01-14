import { funder } from "~/spec/paths/funders/funder";
import { funders } from "~/spec/paths/funders/funders";
import { addTags } from "~/util/addTags";

export default addTags([funders, funder], ["funders"]) satisfies PathsObject;
