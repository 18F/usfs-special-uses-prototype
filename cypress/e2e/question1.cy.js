describe('Question 1', () => {
  it('loads the page', () => {
    cy.visit('/question1/')
  });

  it('initially loads with further questions disabled', () => {
    cy.visit('/question1/');

    cy.get('#organization-type').should("have.attr", "disabled");
    cy.get('#corporation-type').should("have.attr", "disabled");
    cy.get('#agency-type').should("have.attr", "disabled");
  });

  it('initially submits to summary', () => {
    cy.visit('/question1/');

    cy.get('#question1').should("have.attr", "action", "/summary/");
  });

  it('submits to question2 for organizations', () => {
    cy.visit('/question1/');
    // select organization
    cy.get('#organization').check("organization", {force: true});

    cy.get('#question1').should("have.attr", "action", "/question2/");
  });

  it('enables the organization question', () => {
    cy.visit('/question1/');

    // select organization
    cy.get('#organization').check("organization", {force: true});

    cy.get("#organization-type").should("not.have.attr", "disabled");
  })

  it('enables the corporation question', () => {
    cy.visit('/question1/');

    // select organization
    cy.get('#organization').check({force: true});

    // select corporation
    cy.get('#corporation').check();

    // corporation type question is enabled
    cy.get("#corporation-type").should("not.have.attr", "disabled");
  })

  it('enables the agency question', () => {
    cy.visit('/question1/');

    // select organization
    cy.get('#organization').check({force: true});

    // select corporation
    cy.get('#agency').check({force: true});

    // agency type question is enabled
    cy.get("#agency-type").should("not.have.attr", "disabled");
  })
})
