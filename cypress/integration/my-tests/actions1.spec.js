/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

  it('.check() - check a checkbox or radio element', () => {
    // https://on.cypress.io/check
    cy.get('#actions > div > div:nth-child(23) > div > div.action-checkboxes > div:nth-child(1) > label > input[type="checkbox"]').should('not.be.checked').check().should('be.checked')

    cy.get('#optionsRadios1').should('not.be.checked').check().should('be.checked')
  })

  it('.uncheck() - uncheck a checkbox element', () => {
    cy.get('#actions > div > div:nth-child(26) > div > div > div:nth-child(1) > label > input[type="checkbox"]').should('be.checked').uncheck().should('not.be.checked')

    // force uncheck a disabled checkbox
    cy.get('#actions > div > div:nth-child(26) > div > div > div.checkbox.disabled > label > input[type="checkbox"]').should('be.checked').uncheck( { force: true }).should('not.be.checked')
  })

  it('.scrollIntoView() - scroll an element into view', () => {
    // https://on.cypress.io/scrollintoview
    cy.get('#scroll-horizontal > div > button').should('not.be.visible')

    cy.get('#scroll-horizontal > div > button').scrollIntoView().should('be.visible')
  })
})