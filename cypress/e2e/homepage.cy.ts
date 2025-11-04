describe("Sembark Store - Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should display navbar with logo and store title", () => {
    cy.get("header").should("exist");
    cy.contains("Sembark Store");
    cy.get('img[alt="Sembark Logo"]').should("exist");
  });
});
