import IContainer from "../types/Container";
import Definition from "../types/Definition";
import { DEFINITION_TYPE } from "./constants";

class Container implements IContainer {
    private singletons: { key: string; instance: any }[];
    constructor(private definitions: Record<string, Definition>) {
        console.info("building container");
        this.singletons = [];
    }

    async get(ref: string): Promise<any> {
        const def = this.definitions[ref];

        if (def.type === DEFINITION_TYPE.SINGLETON) {
            const single = this.singletons.find((s) => s.key === ref);
            if (single) return single.instance;

            const instance = await this.instanciate(ref, def);

            return instance;
        }

        const instance = await this.instanciate(ref, def);

        return instance;
    }

    private async instanciate(ref: string, def: Definition) {
        let resolvedDeps: any[] = [];

        if (def.dependencies) {
            const keys = Object.keys(def.dependencies);
            resolvedDeps = await Promise.all(
                keys.map(async (key: string) => {
                    return await this.get(def.dependencies[key]);
                })
            );
        }

        const imported = await this.definitions[ref].resolve();
        const instance = new imported.default(...resolvedDeps);
        this.singletons.push({ key: ref, instance });
        return instance;
    }

    register(ref: string, definition: Definition) {
        this.definitions[ref] = definition;
    }
}

export default Container;

