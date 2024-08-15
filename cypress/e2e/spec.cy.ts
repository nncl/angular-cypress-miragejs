describe('My First Test', () => {
  it('Visits the initial project page', () => {
    // cy.intercept('GET', 'https://randomuser.me/api?results=10', {
    //   "results": [
    //     { name: {first: 'John Wick'} },
    //     { name: {first: 'John Wick 2'} }
    //   ]
    // });

    cy.visit('/')
    cy.contains('User')
    cy.contains('John Wick')
  })
})
