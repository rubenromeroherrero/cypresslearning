describe("Test case one", () => {
  beforeEach(() => {
    cy.visit("https://www.google.com");
  });

  it("Search by filter text", () => {
    cy.get("#L2AGLb > .QS5gu").click();
    cy.get(".SDkEP").type("Automatización{enter}");
    cy.contains("Wikipedia").click();
    cy.contains("Historia").click().screenshot();
  });
});
