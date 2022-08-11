describe('Turn based game', () => {
    before(() => {
        cy.visit('http://localhost:3000')
    })
    it('Example: Places an X in the top left square', () => {
        cy.get('.cell1').click()
        cy.contains('.cell1', 'X')
        cy.contains('[data-testid=message]', 'Next turn is 0')
    })
})
