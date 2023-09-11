import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: './test/**/*.cy.ts',
    baseUrl: 'http://localhost:3000',
    supportFile: false,
    testIsolation: false,
    video: false,
    downloadsFolder: './test/e2e/downloads',
  },
});
