import IContainer from "@/types/Container";
import Router from "koa-router";

class BaseRouter {
    private _router: Router;
    constructor(private container: IContainer) {
        this._router = new Router();
    }

    get router() {
        return this._router;
    }

    bind(method: ROUTER_METHODS, path: string, key: string): void {
        this._router[method](path, async (ctx) =>
            (await this.container.get(key))[method](ctx)
        );
    }
}

export enum ROUTER_METHODS {
    GET = "get",
    POST = "post",
    PUT = "put",
    DELETE = "delete",
}

export default BaseRouter;

