import Controller from "../types/Controller";

class Logger implements Controller {
    key = "controller/logger";
    execute() {
        console.info("coucou");
    }
}

export default Logger;

