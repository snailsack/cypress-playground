/// <reference types="Cypress" />

context('Cookies', () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true)

    cy.visit('http://automationpractice.com')

    cy.clearCookies()
  })

  it('cy.getCookies() - get browser cookies', () => {
    cy.getCookies().should('be.empty')
  })

  it('cy.setCookie() - set a browser cookie', () => {
    // https://on.cypress.io/setcookie
    cy.getCookies().should('be.empty')

    cy.setCookie('myCookie', 'HelloCookie')

    cy.getCookie('myCookie').should('have.property', 'value', 'HelloCookie')
  })

  it('cy.clearCookie() - clear a broser cookie', () => {
    // https://on.cypress.io/clearcookie
    cy.getCookies().should('be.empty')
    cy.setCookie('myCookie', 'HelloCookie')
    cy.getCookie('myCookie').should('have.property', 'value', 'HelloCookie')
    cy.clearCookie('myCookie').should('be.null')
  })

  it('cy.clearCookies() - clear browser cookies', () => {
    // https://on.cypress.io/clearcookies
    cy.getCookies().should('be.empty')
    cy.setCookie('myCookie', 'HelloCookie')
    cy.getCookie('myCookie').should('have.property', 'value', 'HelloCookie')
    cy.clearCookies()
    cy.getCookies().should('be.empty')
  })
})