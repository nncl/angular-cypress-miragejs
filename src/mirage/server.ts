import { createServer, Factory, Model } from 'miragejs';
import { faker } from "@faker-js/faker";

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,

    models: {
      user: Model,
    },

    factories: {
      user: Factory.extend({
        name: {
          first() {
            return faker.person.firstName();
          }
        },
      }),
    },

    routes() {
      this.urlPrefix = 'https://randomuser.me';
      this.namespace = 'api';

      this.get("/", (schema) => ({
        results: schema.all('user').models
      }));
    },

    seeds(server) {
      server.createList("user", 10);
    },
  });
}
