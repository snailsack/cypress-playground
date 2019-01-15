/// <reference types="Cypress" />

context('Cypress.Coookies', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com')
  })

  // https://on.cypress.io/cookies
  it('.debug() - enable or dixable debugging', () => {
    Cypress.Cookies.debug(true)

    // Log cookies in console when set or cleared

    cy.setCookie('myCookie', 'raisin')
    cy.clearCookie('myCookie')
    cy.setCookie('myCookie', 'raisin')
    cy.clearCookie('myCookie')
    cy.setCookie('myCookie', 'raisin')
  })

  it('.preserveOnce() - preserve cookies by key', () => {
    cy.getCookie('myCookie').should('not.be.ok')

    cy.setCookie('myCookie', 'raisin')
    // preserves for next test
    Cypress.Cookies.preserveOnce('myCookie')
  })

  it('.defaults() - set defaults for all cookies', () => {
    // testing .preserveOnce()
    cy.getCookie('myCookie').should('exist')
    // now any cookie with the name 'session_id' will
    // not be cleared before each new test runs
    Cypress.Cookies.defaults({
      whitelist: 'session_id',
    })
  })
})

context('Cypress.Server', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com')
  })
  // override server options
  // https://on.cypress.io/cypress-server
  it('.defaults() - change default config of server', () => {
    Cypress.Server.defaults({
      delay: 0,
      force404: false,
    })
  })
})

context('Cypress.arch', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com')
  })

  it('Get CPU architecture name of underlying OS', () => {
    // https://on.cypress.io/arch
    expect(Cypress.arch).to.exist
  })
})

context('Cypress.config()', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com')
  })

  it('Get and set configuration options', () => {
    // https://on.cypress.io/config
    let siteConfig = Cypress.config()
    console.log(siteConfig)

    expect(siteConfig).to.have.property('animationDistanceThreshold', 5)
    expect(siteConfig).to.have.property('arch', 'x64')
    expect(siteConfig).to.have.property('chromeWebSecurity', true)
    expect(siteConfig).to.have.property('baseUrl', null)
    expect(siteConfig).to.have.property('waitForAnimations', true)
    expect(siteConfig).to.have.property('taskTimeout', 60000)
    expect(Cypress.config('taskTimeout')).to.eq(60000)
  })
})

context('Cypress.dom', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com')
  })

  // https://on.cypress.io/dom
  it('.isHidden() - determine if a DOM element is hidden', () => {
    let hiddenInput = Cypress.$('#searchbox > input[type="hidden"]:nth-child(1)').get(0)
    let visibleInput = Cypress.$('#header_logo > a > img').get(0)

    expect(Cypress.dom.isHidden(hiddenInput)).to.be.true
    expect(Cypress.dom.isHidden(visibleInput)).to.be.false
  })
})

context('Cypress.env()', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com')
  })
  // https://on.cypress.io/environment-variables
  it('Get environment variables', () => {
    // set multiple environment variables
    Cypress.env({
      host: 'nick.dev.local',
      api_server: 'http://localhost:8000/v1/',
    })

    // get environment variable
    expect(Cypress.env('host')).to.eq('nick.dev.local')

    // set environment variable
    Cypress.env('api_server', 'http://localhost:8000/v2/')
    expect(Cypress.env('api_server')).to.eq('http://localhost:8000/v2/')

    // get all environment variables
    expect(Cypress.env()).to.have.property('host', 'nick.dev.local')
    expect(Cypress.env()).to.have.property('api_server', 'http://localhost:8000/v2/')
  })
})

context('Cypress.platform', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com')
  })
  it('Getunderlying OS name', () => {
    // https://on.cypress.io/platform
    console.log(Cypress.platform)
    expect(Cypress.platform).to.be.exist
  })
})

context('Cypress.version', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com')
  })
  it('Get current version of Cypress being run', () => {
    // https://on.cypress.io/version
    expect(Cypress.version).to.be.exist
  })
})