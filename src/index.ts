import Container from "./lib/container";
import definitions from "./lib/definitions";
import Server from "./lib/server";
import Origin from "./routers/origin";

const server = new Server({
    container: new Container(definitions),
    port: 3000,
    routers: [Origin.key],
});

const container = server.container;

server.listen();
