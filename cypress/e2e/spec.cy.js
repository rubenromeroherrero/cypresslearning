describe("Test case one", () => {
  beforeEach(() => {
    cy.visit("https://www.freerangetesters.com");
  });

  it("Introducir texto 2", () => {
    cy.title().should("include", "Free Range Testers");
  });
});
