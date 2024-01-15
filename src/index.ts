import Container from "./lib/container";
import definitions from "./lib/definitions";
import Server from "./lib/server";
import routers from "./routers";

const server = new Server({
    container: new Container(definitions),
    port: 3000,
    routers: routers.map((r) => {
        if (!r.key) throw new Error(`Missing key in router ${r.name}`);
        return r.key;
    }),
});

server.listen();

