const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://ecommerce-playground.lambdatest.io/",
    defaultCommandTimeout:10000,
    viewportHeight:960,
    viewportWidth:1538,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
