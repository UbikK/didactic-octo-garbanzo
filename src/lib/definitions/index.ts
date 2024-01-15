import Definition from "../../types/Definition";
import logger from "./_parts/logger";
import OriginDefinition from "./_parts/origin";

const definitions: Record<string, Definition> = {
    "controllers/logger": logger,
    "router/origin": OriginDefinition,
};

export default definitions;

