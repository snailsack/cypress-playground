/// <reference types="Cypress" />

context('Connectors', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com')
  })

  it('.each() - iterate over an array of elements', () => {
    // https://on.cypress.io/each
    cy.get('#block_various_links_footer > ul >li')
      .each(($el, index, $list) => {
        console.log($el, index, $list)
      })
  })

  it('.its() - get properties on the current subject', () => {
    // https://on.cypress.io/its
    cy.get('#block_various_links_footer > ul > li')
      .its('length')
      .should('be.gt', 6)
  })

  it('.spread() - spread an array as individual args to callback function', () => {
    // https://on.cypress.io/spread
    const arr = ['dog', 'bird', 'cat']

    cy.wrap(arr).spread((dog, bird, cat) => {
      expect(dog).to.eq('dog')
      expect(bird).to.eq('bird')
      expect(cat).to.eq('cat')

    })
  })

  it('.then() - invoke a callback function with the current subject', () => {
    // https://on.cypress.io/then
    cy.get('#block_various_links_footer > ul > li').then(($lis) => {
      expect($lis).to.have.length(8)

      expect($lis.eq(0).text().trim()).to.include('Specials')
      expect($lis.eq(1)).to.contain('New products')
      expect($lis.eq(2).text().trim()).to.include('Best')
    })
  })
})