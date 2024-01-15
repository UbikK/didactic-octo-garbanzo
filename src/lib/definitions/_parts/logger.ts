import Definition from "@/types/Definition";
import { DEFINITION_TYPE } from "../../constants";

const LoggerDefinition: Definition = {
    resolve: () => import("@/controllers/Logger"),
    type: DEFINITION_TYPE.TRANSIENT,
};

export default LoggerDefinition;

