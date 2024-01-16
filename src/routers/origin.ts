import Container from "../lib/container";
import BaseRouter, { ROUTER_METHODS } from "./BaseRouter";

const OriginRouter: (container: Container) => BaseRouter = (container) => {
    const router = new BaseRouter(container);
    router.bind(ROUTER_METHODS.GET, "/", "controllers/logger");

    return router;
};

export default OriginRouter;

