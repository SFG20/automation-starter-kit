// We can use https://docs.cypress.io/api/commands/session.html soon

before(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
    cy.task('log', { log: 'Clearing local storage and cookies' })
})
beforeEach(() => {
    Cypress.Cookies.preserveOnce(
        'ai_session',
        'Accept_TermsAndConditions',
        'authorizationData',
        'BESA_CookieCookie',
        'ai_user',
        'ARRAffinity',
        'ARRAffinitySameSite'
    )
    cy.restoreLocalStorage()
    cy.task('log', { log: 'beforeEach', type: 'info' })
})

afterEach(() => {
    cy.saveLocalStorage()
    cy.task('log', { log: 'afterEach', type: 'info' })
})
