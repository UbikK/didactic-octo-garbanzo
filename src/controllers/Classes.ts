import { Context } from "koa";

class ClassesController {
    constructor(private service: any) {}
    async getOne(ctx: Context) {
        const classInfo = await this.service.getClass(ctx.params["class"]);

        ctx.body = classInfo;
    }
}

export default ClassesController;

