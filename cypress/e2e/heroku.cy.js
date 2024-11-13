describe('E2E tester mot heroku', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com')
  })
/*
  it('passes', () => {
    cy.visit('https://the-internet.herokuapp.com')
*/

    // Test 1
    it("Test mot Form Authentication", () => {
      // Går till Login-sidan från Heroku landing page genom att klicka på länken
      cy.get('a[href*="login"]').click()
      // Skriver in användarnamn och lösen i fältet
      cy.get('#username').type("tomsmith")
      cy.get('#password').type("SuperSecretPassword!")
      // Klickar på Login-knappen
      cy.get('button[class="radius"]').click()
      // Assert att sidan heter "Secure Area", användaren är inloggad
      cy.get('h2').should('contains.text', 'Secure Area')
      // Klickar på Logout-knappen
      cy.get('a[href*="logout"]').click()
      // Assert att användaren är tillbaka på Login-sidan igen
      cy.get('h2').should('contains.text', 'Login Page')
    })

    // Test 2
    it("Misslyckad Auth inloggning", () => {
       // Går till Login-sidan från Heroku landing page genom att klicka på länken
      cy.get('a[href*="login"]').click()
      // Assert att användaren är på Login-sidan 
      cy.get('h2').should('contains.text', 'Login Page')
      // Skriver in ogiltiga användarnamn och lösen i fältet
      cy.get('#username').type("ddddddd")
      cy.get('#password').type("123432etertert")
      // Klickar på Login-knappen
      cy.get('button[class="radius"]').click()
      // Assert att användaren är kvar  på Login-sidan
      cy.get('h2').should('contains.text', 'Login Page')
       // Assert att texten är "Your username is invalid!" är synlig
      cy.get("#flash").should("contains.text", "Your username is invalid!")
    })

    // Test 3
    it("Check and uncheck av checkboxes", () => {
      // Går till Checkbox-sidan från Heroku landing page genom att klicka på länken
      cy.get('a[href*="checkboxes"]').click()

      cy.get("input[type='checkbox']").eq(0).should('not.be.checked')
      cy.get("input[type='checkbox']").eq(1).should('be.checked')
    })
  })
