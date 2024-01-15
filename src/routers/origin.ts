import Router from "koa-router";
import Controller from "../types/Controller";

class Origin extends Router {
    static key = "router/origin";
    private controller: Controller;
    constructor(deps: { controller: Controller }) {
        super();
        this.controller = deps.controller;

        this.get("/", (ctx) => {
            this.controller.execute();
            ctx.status = 200;
            ctx.body = { Hello: "world" };
        });
    }
}

export default Origin;

