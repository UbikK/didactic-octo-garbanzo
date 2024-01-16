import Definition from "@/types/Definition";
import { DEFINITION_TYPE } from "../../constants";

export const ClassesControllerDefinition: Definition = {
    resolve: () => import("@/controllers/Classes"),
    type: DEFINITION_TYPE.TRANSIENT,
    dependencies: ["services/classes"],
};

export const ClassesServiceDefinition: Definition = {
    resolve: () => import("@/services/classes"),
    type: DEFINITION_TYPE.TRANSIENT,
};

