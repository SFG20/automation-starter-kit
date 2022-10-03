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
        cy.get('input[id="loginEmailInput"]').type('scheduleeditor@sfg20.co.uk')
        cy.get('input[id="loginPasswordInput"]').type('Qwerty10')
        cy.get('#termsAndConditions').click()
        cy.get('button[type="submit"]').click()
        cy.get("tr").last().get('td').last().click()
        cy.wait(5000)
        cy.get('#tourCheckbox').click()
        cy.get('.close.tour-close').click()
        cy.get('#navbar-account').click()
        cy.get('#changeLicenceOption').focus().wait(5000).click()
        
    })

     it('Input Username', () => {

    })

    it('Input Password', () => {

    })

    it('Checkbox', () => {

    })

    it('Login', () => {
        

    })

    it('Publish Access', () => {
    })

    it('TourCheckbox', () => {

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

    })

    it('Account', () => {
    })

 
    //    it('Change Licence', () => {
    //       cy.get('#changeLicenceOption').focus().wait(2000).click()
   
    //   })

})

