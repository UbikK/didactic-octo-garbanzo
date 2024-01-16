import Container from "./lib/container";
import definitions from "./lib/definitions";
import Server from "./lib/server";
import routers from "./routers";

const server = new Server({
    container: new Container(definitions),
    port: 3000,
    routers: routers,
});

export const container = server.container;

server.listen();

