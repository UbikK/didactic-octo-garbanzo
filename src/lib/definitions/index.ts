import Logger from "@/controllers/Logger";
import Origin from "@/routers/origin";
import Definition from "../../types/Definition";
import logger from "./_parts/logger";
import OriginDefinition from "./_parts/origin";

const definitions: Record<string, Definition> = {
    [Logger.key]: logger,
    [Origin.key]: OriginDefinition,
};

export default definitions;
