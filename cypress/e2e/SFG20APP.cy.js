describe('SFG20 Site', () => {
    before(() => {
        cy.visit('https://az-sfg20-app-dev.azurewebsites.net/#/page/account/login') // Uncomment this line to visit the remote hosted site if you're not running it locally.
        //  cy.visit('http://localhost:3000') // If you are using a local server, you can use this line instead of the line above.

    })

    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });

    it('Remove Cookies', () => {
        cy.get('button[class="cc-button btn-got-it"]').click()

    })

    it('Input Username', () => {
        cy.get('input[id="loginEmailInput"]').type('scheduleeditor@sfg20.co.uk')

    })

    it('Input Password', () => {
        cy.get('input[id="loginPasswordInput"]').type('Qwerty10')

    })

    it('Checkbox', () => {
        cy.get('#termsAndConditions').click()

    })

    it('Login', () => {
        cy.get('button[type="submit"]').click()


    })

    it('Publish Access', () => {
        cy.get("tr").last().get('td').last().click()
        cy.wait(5000)
    })

    it('TourCheckbox', () => {
        cy.get('#tourCheckbox').click()

    })

    it('Close Tour', () => {
        //  cy.get('#tour-next').click().wait(1000)
        // cy.get('#tour-next').click().wait(1000)
        //  cy.get('#tour-next').click().wait(1000)
        //  cy.get('#tour-next').click().wait(1000)
        //  cy.contains("for schedules using")
        //  cy.get('#tour-next').focus().wait(1000)
        //  cy.contains("Actuators").wait(1000)
        //  cy.get('#tour-next').focus().click().wait(1000)
        cy.get('.close.tour-close').click()


    })

    it('Open Help', () => {
        cy.get('#Help').click()

    })
    it('Close Help', () => {
        cy.get('#Help').click()

    })

    it('Open Side-Help', () => {
        cy.get('#help-tab').click()

    })
    it('Close Side-Help', () => {
        cy.get('#help-tab').click()

    })

    it('Select Schdules', () => {
        cy.get(".icon-checkbox-unchecked").first().click()
    })

    //  it('Select Schdule', () => {
    //      cy.contains('Respiratory Protective Equipment (RPE)').wait(2000).click().wait(5000)
    //  })

    it('Edit Schdule', () => {
        cy.get('#editScheduleBtn').click()

    })

})

