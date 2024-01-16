import Definition from "@/types/Definition";
import { DEFINITION_TYPE } from "../../constants";

const OriginDefinition: Definition = {
    resolve: () => import("@/routers/heathcheck"),
    type: DEFINITION_TYPE.TRANSIENT,
    dependencies: { controller: "controllers/heathcheck" },
};

export default OriginDefinition;

