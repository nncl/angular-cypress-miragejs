import {Registry as MirageRegistry} from "miragejs/-types";
import {Server} from "miragejs/server";
import {Factories, Models} from "../types";

export default function routes(this: Server<MirageRegistry<Models, Factories>>) {
  this.urlPrefix = 'https://randomuser.me';
  this.namespace = 'api';

  this.get("/", (schema) => ({
    results: schema.all('user').models
  }));
}
