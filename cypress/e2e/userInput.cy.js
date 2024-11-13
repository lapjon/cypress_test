describe('Simulera user input mot textfält', () => {
  /*it('passes', () => {
    cy.visit('https://example.cypress.io')
  })*/
beforeEach(() => {
  cy.visit("index.html")
})
   it("mata in namn och ålder i form", () => {

    cy.get("#name").type("Petter")
    //cy.wait(1000)
    cy.get("#age").type(35)
    //cy.wait(1000)
    cy.get("#btnName").click()
   // cy.wait(1000)

    cy.get("#nameOutput").should("contains.text", "Petter är 35 år gammal")
    cy.get("h1").should("contains.text", "First page")
   })

   it("Medieinstitutet som namn", () => {
    cy.get("#name").type("Medieinstitutet")
    cy.get("#btnName").click()
    cy.get("h1").should("contains.text", "Second page")
   })
   
   it("Kontroll av count", () => {
    cy.get("#btnCount").click()
    // Klicka en gång och förvänta oss textvärdet 1
    cy.get("#counterOutput").should("contains.text", "1")

    for(let i = 0;i < 10; i++) cy.get("#btnCount").click()
     // Klicka 10 gåmger till och förvänta oss textvärdet 11
    cy.get("#counterOutput").should("contains.text", "11")
   })
    
})