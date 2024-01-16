import { Context } from "koa";

class Logger {
    get = function (ctx: Context) {
        console.info("coucou");
        ctx.body = { hello: "world" };
        ctx.status = 200;
    };
}

export default Logger;

