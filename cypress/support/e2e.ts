// This runs before every test automatically.
// You can add global commands or imports here.

before(() => {
  cy.log("🚀 Starting Sembark E2E Tests...");
});

after(() => {
  cy.log("✅ All tests completed!");
});
