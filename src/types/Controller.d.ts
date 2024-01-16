interface Controller {
    get?: (ctx: Contex) => void;
    post?: (ctx: Contex) => void;
    put?: (ctx: Contex) => void;
    delete?: (ctx: Contex) => void;
}

export default Controller;

