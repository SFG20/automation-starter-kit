describe('Turn based game', () => {
    before(() => {
        cy.visit('https://sfg20.github.io/automation-starter-kit/') // Uncomment this line to visit the remote hosted site if you're not running it locally.
        //  cy.visit('http://localhost:3000') // If you are using a local server, you can use this line instead of the line above.
    })

    it('Example: X Goes First', () => {
        cy.contains('[data-testid=message]', 'X goes first')
    })
})
