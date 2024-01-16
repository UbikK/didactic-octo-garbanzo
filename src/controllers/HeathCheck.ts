import Controller from "@/types/Controller";
import { Context } from "koa";

class HeathCheckController implements Controller {
    get = function (ctx: Context) {
        console.info("coucou");
        ctx.body = "OK";
        ctx.status = 200;
    };
}

export default HeathCheckController;

