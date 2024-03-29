import BaseRouter from "@/routers/BaseRouter";
import { bodyParser } from "@koa/bodyparser";
import Koa from "koa";
import KoaLogger from "koa-logger";
import IContainer from "../types/Container";

class Server extends Koa {
    private _container: IContainer;
    private _port: number;

    constructor(options: any) {
        super();
        super.use(bodyParser());
        super.use(KoaLogger());
        this._container = options.container;
        this._port = options.port;

        options.routers.forEach(async (router: any) => {
            const resolvedRouter: BaseRouter = await router(this._container);
            this.use(resolvedRouter.router.routes());
            this.use(resolvedRouter.router.allowedMethods());
        });
    }

    get container() {
        return this._container;
    }

    listen() {
        return super.listen(this._port, () => {
            console.info(`Listening...`);
        });
    }
}

export default Server;

