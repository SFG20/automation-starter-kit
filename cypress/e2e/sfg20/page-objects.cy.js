import loginPage from '../../fixtures/page-objects/login-page'
const scheduleEditor = Cypress.env('users').scheduleEditor

describe('Page Object equivalent}', () => {
    it('Signs in and sets up', () => {
        loginPage.visit()
        loginPage.email.type(scheduleEditor.user)
        loginPage.password.type(scheduleEditor.password)
        loginPage.termsAndConditions.click()
        loginPage.loginButton.click()
    })
})
