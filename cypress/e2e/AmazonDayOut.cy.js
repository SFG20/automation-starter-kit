describe('Amazon', () => {
    before(() => {
        cy.visit('https://www.amazon.co.uk/') // Uncomment this line to visit the remote hosted site if you're not running it locally.
        //  cy.visit('http://localhost:3000') // If you are using a local server, you can use this line instead of the line above.

    })

    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });

    it('Accept Cookies', () => {
        cy.get('#sp-cc-accept').click()
    })

    it('Typing Slippers', () => {
        cy.get('#twotabsearchtextbox').type("Slippers")
    })

    it('Searching', () => {
        cy.get('#nav-search-submit-button').click()
    })





    //  it('Accept Cookies', () => {
    //      cy.get('.QS5gu').last().click()
    //  })

    //  it('Type Amazon', () => {
    //     cy.get('.gLFyf').type("webpage1")
    //  })

    //  it('Click Search', () => {
    //      cy.get('.gNO89b').first().click()
    //  })

    //  it('Accept Cookies', () => {
    //      cy.get('.QS5gu').last().click()
    //  })

    // it('Click Amazon Link', () => {
    //      cy.get("h3").first().click()

    // })

    // it('Remove Amazon Cookies', () => {

    //  })






})
