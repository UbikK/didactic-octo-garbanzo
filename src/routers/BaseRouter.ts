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

    /**
     * Allow to bind a controller function to a HTTP path
     * @param {ROUTER_METHODS} method HTTP method
     * @param {string} path HTTP path
     * @param {string} key Wanted controller IOC key
     * @param {string} action Handler function to use, defaults to method
     */
    bind(
        method: ROUTER_METHODS,
        path: string,
        key: string,
        action?: string
    ): void {
        this._router[method](path, async (ctx) =>
            (await this.container.get(key))[action ?? method](ctx)
        );
    }
}

/**
 * Enum for Router Methods
 */
export enum ROUTER_METHODS {
    GET = "get",
    POST = "post",
    PUT = "put",
    DELETE = "delete",
}

export default BaseRouter;

