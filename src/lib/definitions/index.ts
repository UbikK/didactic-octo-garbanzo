import Definition from "../../types/Definition";
import {
    ClassesControllerDefinition,
    ClassesServiceDefinition,
} from "./_parts/classes";
import HeathCheckDefinition from "./_parts/healthcheck";

const definitions: Record<string, Definition> = {
    "controllers/heathcheck": HeathCheckDefinition,
    "controllers/classes": ClassesControllerDefinition,
    "services/classes": ClassesServiceDefinition,
};

export default definitions;

