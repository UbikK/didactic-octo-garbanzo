import Controller from "@/types/Controller";

abstract class AbstractController implements Controller {
    abstract execute: Function;
}

export default AbstractController;

