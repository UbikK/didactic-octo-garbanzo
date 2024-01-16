import Definition from "@/types/Definition";
import { DEFINITION_TYPE } from "../../constants";

const HeathCheckDefinition: Definition = {
    resolve: () => import("@/controllers/HeathCheck"),
    type: DEFINITION_TYPE.TRANSIENT,
};

export default HeathCheckDefinition;

