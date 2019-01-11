/// <reference types="Cypress" />

context('Assertions', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com')
  })

  describe('Implicit Assertions', () => {

    it('.should() - make an assertion about the current subject', () => {
      // https://on.cypress.io/should
      cy.get('#homefeatured').find('li:last').should('have.class', 'last-line')
    })

    it('.and() - chain multiple assertions together', () => {
      // https://on.cypress.io/and
      cy.get('#footer > div > section.blockcategories_footer.footer-block.col-xs-12.col-sm-2 > div > div > ul > li > a')
    
      .should('have.attr', 'title', 'You will find here all woman fashion collections.  \n This category includes all the basics of your wardrobe and much more: \n shoes, accessories, printed t-shirts, feminine dresses, women\'s jeans!')
      .and('have.attr', 'href')
      .and('include', 'controller=category')
    })
  })

  describe('Explicit Assertions', () => {
    // https://on.cypress.io/assertions
    it('expect - make an assertion about a specified subject', () => {
      expect(false).to.be.false
      expect(true).to.be.true
      expect('HelloCypress').to.be.a('string')
      expect(9).to.be.at.least(9)
      expect({foo: 'bar'}).to.have.ownPropertyDescriptor('foo')

      cy.get('#block_various_links_footer > ul').find('li')
      .should(($li) => {
        // return an array of texts from all of the li's
        const texts = $li.map((i,el) => 
          Cypress.$(el).text().trim())

        const titles = texts.get()

        // array should have length of 8
        expect(titles).to.have.length(8)

        expect(titles).to.deep.eq([
          'Specials',
          'New products',
          'Best sellers',
          'Our stores',
          'Contact us',
          'Terms and conditions of use',
          'About us',
          'Sitemap'
        ])
      })
    })

    it('assert - assert shape of an object', () => {
      const dog = {
        type: 'retriever',
        name: 'Ginger',
        age: 13
      }
      assert.isObject(dog)
    })
  })
})

