import Definition from "./Definition";

type IContainer = {
    get: (ref: string) => Promise<any>;
    register: (ref: string, definition: Definition) => void;
};

export default IContainer;

