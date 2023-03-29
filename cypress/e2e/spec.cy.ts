export {};

describe('Given my app with authentication', () => {
  describe('When the user wants to login to his account', () => {
    it('Then he should be able to sign in and create a new post', async () => {
      cy.visit('https://joaquin-godoy-final-project-202301.netlify.app/');

      // Login into an existing account.
      cy.wait(1500);
      cy.scrollTo('bottom');
      cy.get('button').contains('Login').click();
      cy.get('input#email').type(`${Cypress.env('TEST_EMAIL')}`);
      cy.get('input#password').type(`${Cypress.env('TEST_PASSWORD')}`);
      cy.wait(500);
      cy.get('button').contains('Sign In').click();

      // Infinite scroll component.
      cy.wait(2000);
      cy.scrollTo('bottom');

      // Creation of a new post.
      cy.wait(2000);
      cy.scrollTo('top');
      cy.get('select#game').select('The Witcher 3');
      cy.get('select#rating').select('4');
      cy.get('textarea#review').type('This is a test review made by Cypress');
      cy.scrollTo('top');
      cy.get('button').contains('Post').click();

      // Delete the post.
      cy.wait(2000);
      cy.scrollTo('top');
      cy.get('.user-info__delete-post > svg').click();
    });
  });
});
