interface Controller {
    get?: (ctx: Contex, params?: any) => void;
    post?: (ctx: Contex) => void;
    put?: (ctx: Contex) => void;
    delete?: (ctx: Contex) => void;
    [key: string]: void;
}

export default Controller;

