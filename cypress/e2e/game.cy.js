describe('Turn based game', () => {
    before(() => {
        cy.visit('https://sfg20.github.io/automation-starter-kit/') // Uncomment this line to visit the remote hosted site if you're not running it locally.
      //  cy.visit('http://localhost:3000') // If you are using a local server, you can use this line instead of the line above.
         
    })
    it('Example: Places an X in the top left square', () => {
        cy.get('.cell1').click()
        cy.contains('.cell1', 'X')
        cy.contains('[data-testid=message]', 'Next turn is 0')
    })
    it('Example: Places an O in the middle square', () => {
        cy.get('.cell5').click()
        cy.contains('.cell5', '0')
        cy.contains('[data-testid=message]', 'Next turn is X')
    })
})
