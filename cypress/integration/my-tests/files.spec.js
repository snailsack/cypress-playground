/// <reference types="Cypress" />

context('Files', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com')
  })
  it('cy.readFile() - read a files contents', () => {
    // https://on.cypress.io/readfile

    cy.readFile('cypress/fixtures/profile.json').then((json) => {
      expect(json).to.be.an('object')
    })
  })

  it('cy.writeFile() - write to a file', () => {
    cy.writeFile('cypress/fixtures/nickProfile.json',
      {
        id: 369,
        name: 'Nick',
        email: 'nick@example.com'
      })
    cy.fixture('nickProfile').should((nickProfile) => {
      expect(nickProfile.name).to.eq('Nick')
    })
  })
})