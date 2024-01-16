import Definition from "../../types/Definition";
import HeathCheckDefinition from "./_parts/healthcheck";

const definitions: Record<string, Definition> = {
    "controllers/heathcheck": HeathCheckDefinition,
};

export default definitions;

