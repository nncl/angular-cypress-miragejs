import {Registry as MirageRegistry} from "miragejs/-types";
import {Server} from "miragejs/server";
import {Factories, Models} from "../types";

type ServerType = Server<MirageRegistry<Models, Factories>>;

const usersSeeder = (server: ServerType) => {
  server.createList("user", 10);
};

export default function seeds(server: ServerType) {
  server.loadFixtures();
  usersSeeder(server);
}
