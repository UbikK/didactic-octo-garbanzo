import IContainer from "../types/Container";
import Definition from "../types/Definition";

class Container implements IContainer {
    constructor(private definitions: Record<string, Definition>) {
        console.info("building container");
    }

    async get(ref: string): Promise<any> {
        console.debug("🚀 ~ Container ~ get ~ ref:", ref);
        const def = this.definitions[ref];
        let resolvedDeps: Record<string, any> = {};

        if (def.dependencies) {
            const keys = Object.keys(def.dependencies);
            resolvedDeps = await keys.reduce(async (prev, dep) => {
                prev[dep.split("/")[0]] = await this.get(def.dependencies[dep]);
                return prev;
            }, {} as Record<string, any>);
        }

        const imported = await this.definitions[ref].resolve();
        console.debug("🚀 ~ Container ~ get ~ imported:", imported);
        return new imported.default(resolvedDeps);
    }

    register(ref: string, definition: Definition) {
        this.definitions[ref] = definition;
    }
}

export default Container;

