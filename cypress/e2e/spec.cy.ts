export {};

describe('Given my app with authentication', () => {
  describe('When the user wants to navigate through the app', () => {
    it('Then he should be able to use the different features the app has', async () => {
      cy.visit('https://joaquin-godoy-final-project-202301.netlify.app/');

      // Test login into an existing account.
      cy.wait(2500);
      cy.scrollTo('bottom');
      cy.get('button').contains('Login').click();
      cy.get('input#email').type(`${Cypress.env('TEST_EMAIL')}`);
      cy.get('input#password').type(`${Cypress.env('TEST_PASSWORD')}`);
      cy.wait(1000);
      cy.get('button').contains('Sign In').click();
      // Assert we are on the home page.
      cy.get('h1').contains('PlayersNation').should('be.visible');

      // Test infinite scroll component.
      cy.wait(4000);
      cy.scrollTo('bottom');
      cy.wait(4000);
      cy.scrollTo('bottom');

      // Test the creation of a new post.
      cy.wait(4000);
      cy.scrollTo('top');
      cy.wait(1000);
      cy.get('select#game').select('The Witcher 3');
      cy.get('select#rating').select('4');
      cy.get('textarea#review').type('This is a test review made by Cypress');
      cy.scrollTo('top');
      cy.wait(1000);
      cy.get('button').contains('Post').click();
      // Assert the post has been created.
      cy.get('.sc-csCMJt')
        .contains('This is a test review made by Cypress')
        .should('be.visible');

      // Test the deletion of the post.
      cy.wait(4000);
      cy.scrollTo('top');
      cy.get('.user-info__delete-post > svg').click();
      // Assert the post has been deleted.
      cy.get('.sc-csCMJt')
        .contains('This is a test review made by Cypress')
        .should('not.exist');

      // Logout from the account.
      cy.wait(4000);
      cy.scrollTo('top');
      cy.get('.sc-beqWaB').click();
      cy.wait(2000);
      cy.get('p').contains('Log out').click();
      cy.scrollTo('top');
      // Assert we are on the authentification page.
      cy.get('button').contains('Login').should('be.visible');

      // Test the user cannot access a protected route.
      cy.wait(4000);
      cy.visit('https://joaquin-godoy-final-project-202301.netlify.app/');
      // Assert the actual route contains a redirect to home page.
      cy.url().should('include', '/auth?redirect=/');
    });
  });
});
