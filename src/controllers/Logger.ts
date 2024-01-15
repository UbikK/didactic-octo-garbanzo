import AbstractController from "./Controller.abstract";

class Logger extends AbstractController {
    static key = "controllers/logger";
    execute = function () {
        console.info("coucou");
    };
}

export default Logger;

