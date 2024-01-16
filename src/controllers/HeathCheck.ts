import { Context } from "koa";

class HeathCheckController {
    get(ctx: Context) {
        ctx.body = "OK";
        ctx.status = 200;
    }
}

export default HeathCheckController;

