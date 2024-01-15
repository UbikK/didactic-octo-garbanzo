import { DEFINITION_TYPE } from "../lib/constants";

type Definition = {
    type: DEFINITION_TYPE;
    resolve: () => any;
    dependencies?: any;
};

export default Definition;

