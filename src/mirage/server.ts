import factories from './factories';
import fixtures from './fixtures';
import models from "./models";
import routes from "./routes";
import seeds from "./seeds";
import {Server} from "miragejs";

const config = (environment: any) => {
  const config: any = {
    environment,
    factories,
    models,
    routes,
    seeds,
  };

  if (Object.keys(fixtures).length) {
    config.fixtures = fixtures;
  }

  return config;
};

export function makeServer({ environment = 'development' } = {}) {
  return new Server(config(environment));
}
