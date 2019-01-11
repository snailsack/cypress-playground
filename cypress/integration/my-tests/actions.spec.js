/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com')
  })

  it('.type() - type into a DOM element', () => {
    //https://on.cypress.io/type
    cy.get('#search_query_top')
      .type('blouse').should('have.value', 'blouse')

      // .type() with special character sequences
      .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
      .type('{del}{selectall}{backspace}')

      // .type() with eky modifiers
      .type('{alt}{option}') //these are equivalent
      .type('{ctrl}{control}') //these are equivalent
      .type('{meta}{command}{cmd}') //these are equivalent
      .type('{shift}')

      // Delay each keypress by 0.2 seconds
      .type('slow typing', { delay: 200 })
      .should('have.value', 'slow typing')

    cy.get('#newsletter-input')
      .should('have.class', 'form-control')
      .type('text box is already active', {force: true })
      .should('have.value', 'text box is already active')
  })
  it('.focus() - focus on a DOM element', () => {
    // https://on.cypress.io/focus
    cy.get('#search_query_top').focus()
      .should('have.class', 'form-control')
      .prev().should('have.value', 'desc')
  })

  it('.blur() - blur off a DOM element', () => {
    cy.get('#search_query_top').type('About to blur').blur()
      .should('have.class', 'ac_input')
      .parent().should('match', 'form').should('have.id', 'searchbox')
  })

  it('.clear() - clears an input or textarea element', () => {
    // https://on.cypress.io/clear
    cy.get('#search_query_top').type('Clear this text')
      .should('have.value', 'Clear this text')
      .clear()
      .should('have.value', '')
  })

  it('.submit() -submit a form', () => {
    //https://on.cypress.io./submit
    cy.get('#searchbox')
      .find('[type="text"]').type('Submit me!')
    cy.get('#searchbox').submit()
    cy.get('#center_column > p').should('contain', 'No results were found')
  })

  it('.click() - click on a DOM element', () => {
    // https://on.cypress.io/click
    cy.get('#contact-link > a').click()
    cy.url().should('include', 'contact')    
  })

  it('.dblclick() - double click on a DOM element', () => {
    // https://on.cypress.dblclick
    /*
      Website didn't have any element that functioned specially because of a double click. Here, .dblclick() functions essentially as .click()
    */
    cy.get('#homepage-slider > div > div.bx-controls.bx-has-controls-direction > div > a.bx-next').dblclick()
    cy.get('#homeslider > li:nth-child(2) > a > img').should('have.attr', 'src').should('include', 'sample')
  })

  it('.select() - select an option in a <select> element', () => {
    // https://on.cypress.io/select
    cy.get('#homefeatured > li:nth-child(2) > div > div.left-block > div > a.product_img_link > img').click()
    cy.url().should('include', 'controller=product')

    cy.get('#group_1').select('M')
    cy.url().should('include', 'size-m')
    cy.get('#group_1').should('have.value', '2')
  })

})