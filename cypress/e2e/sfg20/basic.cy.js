describe('The automation persists cookies', () => {
    it('Signs in and sets up', () => {
        // https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/
        // How do you feel about writing tests like this?
        cy.testDevelopmentEnvironment()
        cy.loginAsScheduleEditor()
        cy.usePrimarySubscription()
        cy.closeTour()
    })
    it('Does things in a separate test', () => {
        cy.get('#coreAndCustomTreeDiv').should('be.visible')
        cy.get('#CoreAndCustomLi').click()
        cy.get('#collapseListCoreAndCustom ol li').each(($el) => {
            cy.wrap($el).click()
            cy.get('#coreAndCustomTreeDiv').should('be.visible')
        })
    })
})
