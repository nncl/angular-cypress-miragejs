// src/mirage/server.ts
import { Server } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  return new Server({
    environment,

    routes() {
      this.urlPrefix = 'https://randomuser.me';
      this.namespace = 'api';

      this.get('/', () => {
        return {
          results: [
            { id: 1, name: {first: 'Alice'} },
            { id: 2, name: {first: 'Bob'} },
            { id: 2, name: {first: 'John Wick'} }
          ]
        };
      });
    }
  });
}
