describe('Checkers Game', () => {
    before(() => {
        cy.visit('https://www.mathsisfun.com/games/checkers-2.html') // Uncomment this line to visit the remote hosted site if you're not running it locally.
        //  cy.visit('http://localhost:3000') // If you are using a local server, you can use this line instead of the line above.

    })

    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });

    it('Keep Open Webpage', () => {
        cy.contains('Checkers')
    })

    it('Change Player', () => {
        cy.get('#playerType1').select('Human')
    })

    it('Start Game', () => {
        cy.get('#optYes').click()
    })

    it('Move Blue Checker', () => {
        cy.get('#pc13').click().trigger('mousedown').get('#sq_4_1').click()
        cy.contains('#msg', "Red's Turn")
    })

    it('Move Red Checker', () => {
        cy.get('#pc11').click().trigger('mousedown').get('#sq_3_6').click()
        cy.contains('#msg', "Blue's Turn")
    })

    it('Move Blue Checker', () => {
        cy.get('#pc14').click().trigger('mousedown').get('#sq_4_5').click()
        cy.contains('#msg', "Red's Turn")
    })

    it(' Red Attack', () => {
        cy.get('#pc11').click().trigger('mousedown').get('#sq_5_4').click()
        cy.contains('#msg', "Blue's Turn")
    })

    it('Blue Attack', () => {
        cy.get('#pc17').click().trigger('mousedown').get('#sq_4_5').click()
        cy.contains('#msg', "Red's Turn")
    })

    it('Move Red Checker', () => {
        cy.get('#pc7').click().trigger('mousedown').get('#sq_2_7').click()
        cy.contains('#msg', "Blue's Turn")
    })

    it('Move Blue Checker', () => {
        cy.get('#pc22').click().trigger('mousedown').get('#sq_6_3').click()
        cy.contains('#msg', "Red's Turn")
    })

    it('Move Red Checker', () => {
        cy.get('#pc8').click().trigger('mousedown').get('#sq_3_0').click()
        cy.contains('#msg', "Blue's Turn")
    })

    it('Move Blue Checker', () => {
        cy.get('#pc15').click().trigger('mousedown').get('#sq_4_7').click()
        cy.contains('#msg', "Red's Turn")
    })

    it(' Red Quad-Attack', () => {
        cy.get('#pc8').click().trigger('mousedown').get('#sq_5_2').click()
        cy.get('#pc8').click().trigger('mousedown').get('#sq_7_4').click()
        cy.get('#pc8').click().trigger('mousedown').get('#sq_5_6').click()
        cy.get('#pc8').click().trigger('mousedown').get('#sq_3_4').click()
        cy.contains('#msg', "Blue's Turn")
    })

    it('Move Blue Checker', () => {
        cy.get('#pc19').click().trigger('mousedown').get('#sq_5_6').click()
        cy.contains('#msg', "Red's Turn")
    })

    it('Move Red Checker', () => {
        cy.get('#pc8').click().trigger('mousedown').get('#sq_4_5').click()
        cy.contains('#msg', "Blue's Turn")
    })

    it('Blue Attack takes King', () => {
        cy.get('#pc19').click().trigger('mousedown').get('#sq_3_4').click()
        cy.get('#pc19').click().trigger('mousedown').get('#sq_1_6').click()
        cy.contains('#msg', "Red's Turn")
    })

    it('Red Attack', () => {
        cy.get('#pc3').click().trigger('mousedown').get('#sq_2_5').click()
        cy.contains('#msg', "Blue's Turn")
    })

    it('Move Blue Checker', () => {
        cy.get('#pc15').click().trigger('mousedown').get('#sq_3_6').click()
        cy.contains('#msg', "Red's Turn")
    })

    it('Red Attack', () => {
        cy.get('#pc7').click().trigger('mousedown').get('#sq_4_5').click()
        cy.contains('#msg', "Blue's Turn")
    })

    it('Move Blue Checker', () => {
        cy.get('#pc12').click().trigger('mousedown').get('#sq_4_1').click()
        cy.contains('#msg', "Red's Turn")
    })

    it('Move Red Checker', () => {
        cy.get('#pc9').click().trigger('mousedown').get('#sq_3_2').click()
        cy.contains('#msg', "Blue's Turn")
    })

    it('Blue Attack', () => {
        cy.get('#pc12').click().trigger('mousedown').get('#sq_2_3').click()
        cy.contains('#msg', "Red's Turn")
    })

    it('Red Attack', () => {
        cy.get('#pc6').click().trigger('mousedown').get('#sq_3_2').click()
        cy.contains('#msg', "Blue's Turn")
    })

    it('Move Blue Checker', () => {
        cy.get('#pc16').click().trigger('mousedown').get('#sq_5_0').click()
        cy.contains('#msg', "Red's Turn")
    })

    it('Move Red Checker', () => {
        cy.get('#pc6').click().trigger('mousedown').get('#sq_4_1').click()
        cy.contains('#msg', "Blue's Turn")
    })

    it('Blue Attack', () => {
        cy.get('#pc16').click().trigger('mousedown').get('#sq_3_2').click()
        cy.contains('#msg', "Red's Turn")
    })

    it('Move Red Checker', () => {
        cy.get('#pc5').click().trigger('mousedown').get('#sq_2_3').click()
        cy.contains('#msg', "Blue's Turn")
    })

    it('Blue Attack', () => {
        cy.get('#pc16').click().trigger('mousedown').get('#sq_1_4').click()
        cy.contains('#msg', "Red's Turn")
    })

    it('Red Attack', () => {
        cy.get('#pc2').click().trigger('mousedown').get('#sq_2_3').click()
        cy.contains('#msg', "Blue's Turn")
    })

    it('Move Blue Checker', () => {
        cy.get('#pc23').click().trigger('mousedown').get('#sq_6_5').click()
        cy.contains('#msg', "Red's Turn")
    })

    it('Move Red Checker', () => {
        cy.get('#pc7').click().trigger('mousedown').get('#sq_5_4').click()
        cy.contains('#msg', "Blue's Turn")
    })

    it('Blue Attack', () => {
        cy.get('#pc23').click().trigger('mousedown').get('#sq_4_3').click()
        cy.contains('#msg', "Red's Turn")
    })

    it('Move Red Checker', () => {
        cy.get('#pc2').click().trigger('mousedown').get('#sq_3_2').click()
        cy.contains('#msg', "Blue's Turn")
    })

    it('Blue Attack', () => {
        cy.get('#pc23').click().trigger('mousedown').get('#sq_2_1').click()
        cy.contains('#msg', "Red's Turn")
    })

    it('Red Attack', () => {
        cy.get('#pc4').click().trigger('mousedown').get('#sq_3_2').click()
        cy.contains('#msg', "Blue's Turn")
    })

    it('Move Blue Checker', () => {
        cy.get('#pc20').click().trigger('mousedown').get('#sq_6_1').click()
        cy.contains('#msg', "Red's Turn")
    })

    it('Move Red Checker', () => {
        cy.get('#pc1').click().trigger('mousedown').get('#sq_1_2').click()
        cy.contains('#msg', "Blue's Turn")
    })

    it('Move Blue Checker', () => {
        cy.get('#pc21').click().trigger('mousedown').get('#sq_6_3').click()
        cy.contains('#msg', "Red's Turn")
    })

    it('Move Red Checker', () => {
        cy.get('#pc4').click().trigger('mousedown').get('#sq_4_3').click()
        cy.contains('#msg', "Blue's Turn")
    })

    it('Move Blue Checker', () => {
        cy.get('#pc21').click().trigger('mousedown').get('#sq_5_2').click()
        cy.contains('#msg', "Red's Turn")
    })

    it('Move Red Checker', () => {
        cy.get('#pc1').click().trigger('mousedown').get('#sq_2_3').click()
        cy.contains('#msg', "Blue's Turn")
    })

    it('Blue Attack', () => {
        cy.get('#pc21').click().trigger('mousedown').get('#sq_3_4').click()
        cy.get('#pc21').click().trigger('mousedown').get('#sq_1_2').click()
        cy.contains('#msg', "Red's Turn")
    })

    it('Red Attack', () => {
        cy.get('#pc0').click().trigger('mousedown').get('#sq_2_3').click()
        cy.contains('#msg', "Blue's Turn")
    })

    it('Move Blue Checker', () => {
        cy.get('#pc20').click().trigger('mousedown').get('#sq_5_2').click()
        cy.contains('#msg', "Red's Turn")
    })

    it('Move Red Checker', () => {
        cy.get('#pc0').click().trigger('mousedown').get('#sq_3_4').click()
        cy.contains('#msg', "Blue's Turn")
    })

    it('Move Blue Checker', () => {
        cy.get('#pc20').click().trigger('mousedown').get('#sq_4_3').click()
        cy.contains('#msg', "Red's Turn")
    })

    it('Red Win', () => {
        cy.get('#pc0').click().trigger('mousedown').get('#sq_5_2').click()
        cy.contains('#msg', "Red WINS!")
    })



})