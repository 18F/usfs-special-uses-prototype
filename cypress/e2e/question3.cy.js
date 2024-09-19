describe('Question 3', () => {
  it('loads the page', () => {
    cy.visit('/question3/')
  });

  it('continues to /submit', () => {
    cy.visit('/question3/');

    cy.contains('Continue').click();
    cy.url().should("match", /\/submit\/\?$/);
  });
})
