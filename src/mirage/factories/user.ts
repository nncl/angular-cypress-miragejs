import {Factory} from "miragejs";
import {faker} from "@faker-js/faker";

export default {
  user: Factory.extend({
    name: {
      first() {
        return faker.person.firstName();
      }
    },
  }),
}
