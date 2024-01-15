import Definition from "@/types/Definition";
import { DEFINITION_TYPE } from "../../constants";

const OriginDefinition: Definition = {
    resolve: () => import("@/routers/origin"),
    type: DEFINITION_TYPE.TRANSIENT,
    dependencies: { controller: "controllers/logger" },
};

export default OriginDefinition;

