describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('User')
    cy.contains('John Wick')
  })
})
