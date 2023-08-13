const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'b29aev',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
