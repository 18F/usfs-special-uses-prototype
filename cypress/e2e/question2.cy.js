describe('Question 2', () => {
  it('loads the page', () => {
    cy.visit('/question2/')
  });

  it('initially loads with permit numbers disabled', () => {
    cy.visit('/question2/');

    cy.get('#permit-numbers').should("have.attr", "disabled");
  });

  it('enables the permit numbers', () => {
    cy.visit('/question2/');

    // select organization
    cy.get('#has-permits').check({force: true});

    cy.get("#permit-numbers").should("not.have.attr", "disabled");
  })

  it('disables the parent company question', () => {
    cy.visit('/question2/');

    // select organization
    cy.get('#no-parent').check({force: true});

    // parent info fieldset is disabled
    cy.get("#parent-info").should("have.attr", "disabled");
  })
})
