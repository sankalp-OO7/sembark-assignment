describe("Sembark Store - product details page", () => {
  beforeEach(() => {
    cy.visit("/product/1/details");
  });

  it("should display navbar with logo and store title", () => {
    cy.get("header").should("exist");
    cy.contains("Sembark Store");
    cy.get('img[alt="Sembark Logo"]').should("exist");
     

  });
 
});
