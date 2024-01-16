import Container from "../lib/container";
import BaseRouter, { ROUTER_METHODS } from "./BaseRouter";

const ClassesRouter: (container: Container) => BaseRouter = (container) => {
    const router = new BaseRouter(container);
    router.bind(
        ROUTER_METHODS.GET,
        "/classes/:class",
        "controllers/classes",
        "getOne"
    );

    router.bind(ROUTER_METHODS.GET, "/classes", "controllers/classes");

    return router;
};

export default ClassesRouter;

