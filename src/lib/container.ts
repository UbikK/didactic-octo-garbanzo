import IContainer from "../types/Container";
import Definition from "../types/Definition";

class Container implements IContainer {
    constructor(private definitions: Record<string, Definition>) {
        console.info("building container");
    }

    async get(ref: string): Promise<any> {
        const def = this.definitions[ref];
        // let resolvedDeps: Record<string, any> = {};
        let resolvedDeps: any[] = [];

        if (def.dependencies) {
            const keys = Object.keys(def.dependencies);
            resolvedDeps = await Promise.all(
                keys.map(async (key: string) => {
                    return await this.get(def.dependencies[key]);
                })
            );
            // resolvedDeps = await keys.reduce(async (prev, dep) => {
            //     prev[dep.split("/")[0]] = await this.get(def.dependencies[dep]);
            //     return prev;
            // }, {} as Record<string, any>);
        }

        const imported = await this.definitions[ref].resolve();

        return new imported.default(...resolvedDeps);
    }

    register(ref: string, definition: Definition) {
        this.definitions[ref] = definition;
    }
}

export default Container;

