const url = Cypress.env('servers').development

class LoginPage {
    // Basic Selectores - Contain the evil!
    get email() {
        return cy.get('#loginEmailInput')
    }

    get password() {
        return cy.get('#loginPasswordInput')
    }

    get termsAndConditions() {
        return cy.get('#termsAndConditions')
    }

    get loginButton() {
        return cy.get('#showSubscriptions').contains('Login')
    }

    visit() {
        cy.visit(`${url}/login`)
    }
}
export default new LoginPage()
