import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "mtk2yx", // from your Dashboard
  e2e: {
    baseUrl: "http://localhost:5173", // your Vite dev server URL
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here if needed
    // },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.ts",
  },
});
