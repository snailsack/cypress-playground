/// <reference types="Cypress" />

context('Aliasing', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com')
  })

  it('.as() - alias a DOM element for later use', () => {
    // https://on.cypress.io/as

    cy.get('#block_various_links_footer > ul > li > a').first().as('specialBtn')

    cy.get('@specialBtn').click()
    cy.url().should('include', 'prices-drop')
  })

})