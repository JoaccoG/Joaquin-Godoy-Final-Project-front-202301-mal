import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
  env: {
    TEST_EMAIL: 'demo@test.com',
    TEST_PASSWORD: 'password',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
