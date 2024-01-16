import Container from "../lib/container";
import BaseRouter, { ROUTER_METHODS } from "./BaseRouter";

const HeathCheckRouter: (container: Container) => BaseRouter = (container) => {
    const router = new BaseRouter(container);
    router.bind(ROUTER_METHODS.GET, "/health", "controllers/healthcheck");

    return router;
};

export default HeathCheckRouter;

