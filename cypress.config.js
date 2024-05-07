const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://cliente3automatizado.narwalsistemas.com.br',
    experimentalRunAllSpecs: true,
    viewportWidth: 1280,
    viewportHeight: 880
  },
});