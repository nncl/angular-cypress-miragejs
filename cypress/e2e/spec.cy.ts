import {makeServer} from "../../src/mirage/server";
import {Server} from "miragejs/server";

describe('My First Test', () => {
  let server: Server;

  beforeEach(() => {
    server = makeServer({ environment: "test" })
  })

  afterEach(() => {
    server.shutdown()
  })

  it('Visits the initial project page', () => {
    const users = server.createList('user', 2);

    cy.visit('/')

    cy.contains('User')
    cy.get('ul').find('li').should('have.length', 10)

    expect(users.length).to.equal(2)
  })
})
