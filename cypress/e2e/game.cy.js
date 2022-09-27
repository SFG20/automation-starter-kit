describe('Turn based game', () => {
    before(() => {
        cy.visit('https://sfg20.github.io/automation-starter-kit/') // Uncomment this line to visit the remote hosted site if you're not running it locally.
        //cy.visit('http://localhost:3000') // If you are using a local server, you can use this line instead of the line above.
         
    })
    it('Example: X Goes First', () => {
        cy.contains('[data-testid=message]', 'X goes first')
    })

    it('Example: Places an X in the top right square', () => {
        cy.get('[id=2]').click()
        cy.contains('[id=2]', 'X')
        cy.contains('[data-testid=message]', 'Next turn is 0')
    })

    it('Example: Places an 0 in the Middle Square', () => {
        cy.get('[data-testid=table-row2-cell2]').click()
        cy.contains('[data-testid=table-row2-cell2]', '0')
        cy.contains('[data-testid=message]', 'Next turn is X')
    })

    it('Example: Places an X in the Top Middle Square', () => {
        cy.get('.cell2').click()
        cy.contains('.cell2', 'X')
        cy.contains('[data-testid=message]', 'Next turn is 0')
    })

    it('Example: Places an 0 in the right Middle Square', () => {
        cy.get('.cell.6').click()
        cy.contains('.cell.6', '0')
        cy.contains('[data-testid=message]', 'Next turn is X')
    })

    it('Example: Places an X in the Top left Square', () => {
        cy.get('.cell1').click()
        cy.contains('.cell1', 'X')
        cy.contains('[data-testid=message]', 'X wins!')
    })

    it('Example: Click Restart', () => {
        cy.get('h5').click()
    })

    it('Example: Places an X in the Middle Square', () => {
        cy.get('.cell5').click()
        cy.contains('.cell5', 'X')
        cy.contains('[data-testid=message]', 'Next turn is 0')
    })
    
    it('Example: Places an 0 in top right sqaure', () => {
        cy.get('.cell3').click()
        cy.contains('.cell3', '0')
        cy.contains('[data-testid=message]', 'Next turn is X')
    })

    it('Example: Places an X in right sqaure', () => {
        cy.get('.cell.6').click()
        cy.contains('.cell.6', 'X')
        cy.contains('[data-testid=message]', 'Next turn is 0')
    })

    it('Example: Places an 0 in left sqaure', () => {
        cy.get('.cell4').click()
        cy.contains('.cell4', '0')
        cy.contains('[data-testid=message]', 'Next turn is X')
    })

    it('Example: Places an X in Top middle sqaure', () => {
        cy.get('.cell2').click()
        cy.contains('.cell2', 'X')
        cy.contains('[data-testid=message]', 'Next turn is 0')
    })

    it('Example: Places an 0 in Bottom Middle sqaure', () => {
        cy.get('.cell8').click()
        cy.contains('.cell8', '0')
        cy.contains('[data-testid=message]', 'Next turn is X')
    })

    it('Example: Places an X in Bottom Left sqaure', () => {
        cy.get('.cell7').click()
        cy.contains('.cell7', 'X')
        cy.contains('[data-testid=message]', 'Next turn is 0')
    })

    it('Example: Places an 0 in Top Left sqaure', () => {
        cy.get('.cell1').click()
        cy.contains('.cell1', '0')
        cy.contains('[data-testid=message]', 'Next turn is X')
    })

    it('Example: Places an X in Bottom Right sqaure', () => {
        cy.get('.cell9').click()
        cy.contains('.cell9', 'X')
        cy.contains('[data-testid=message]', "It's a tie!")
    })

    it('Example: Click Restart', () => {
        cy.get('h5').click()
    })

    it('Example: Places an X in the top right square', () => {
        cy.get('[id=2]').click()
        cy.contains('[id=2]', 'X')
        cy.contains('[data-testid=message]', 'Next turn is 0')
    })

    it('Example: Places an 0 in the Middle Square', () => {
        cy.get('[id=4]').click()
        cy.contains('[id=4]', '0')
        cy.contains('[data-testid=message]', 'Next turn is X')
    })

    it('Example: Places an X in the right square', () => {
        cy.get('[id=5]').click()
        cy.contains('[id=5]', 'X')
        cy.contains('[data-testid=message]', 'Next turn is 0')
    })

    it('Example: Places an 0 in the Bottom right Square', () => {
        cy.get('[id=8]').click()
        cy.contains('[id=8]', '0')
        cy.contains('[data-testid=message]', 'Next turn is X')
    })

    it('Example: Places an X in the top middle square', () => {
        cy.get('[id=1]').click()
        cy.contains('[id=1]', 'X')
        cy.contains('[data-testid=message]', 'Next turn is 0')
    })

    it('Example: Places an 0 in the top left', () => {
        cy.get('[id=0]').click()
        cy.contains('[id=0]', '0')
        cy.contains('[data-testid=message]', '0 wins!')
    })

    it('Example: Click Restart', () => {
        cy.get('h5').click()
    })


})
