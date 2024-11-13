describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it("besöker 2 sidor", () => {
    cy.visit("index.html")
    cy.get("h1").should("contains.text", "First page")


    cy.visit("secondPage.html")
    cy.get("h1").should("contains.text", "Second page")
  })
})